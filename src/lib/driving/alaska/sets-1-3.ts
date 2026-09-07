import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Alaska Driver Manual, REV.10/2025,
// prepared by the Alaska Department of Administration, Division of Motor
// Vehicles, plus the sections of Alaska Statutes Title 28 and the DMV web pages
// that carry rules the manual states incompletely or not at all.
//
// Alaska's manual is unusually complete on numbers - it prints the statutory
// speed defaults, the parking distances, the 100-foot signal rule and the
// headlight dimming distances, all of which most states leave to the statute.
// What it leaves out is narrower but matters:
//
// 1. The knowledge test's length, pass mark and time limit appear nowhere in
//    the book. The DMV's Sample Knowledge Test page is the only official source
//    for "25 minutes allowed, 20 questions, 16 correct answers to pass".
// 2. The manual tells you to stop for a school bus but never says how far back.
//    The 30-foot figure, the class B misdemeanor and the mandatory six points
//    are in AS 28.35.145.
// 3. The manual presents DUI costs as a household budget - "3 Days in Jail:
//    $270", "Court Fines: $1,500" - rather than as the sentence a court must
//    impose. AS 28.35.030(b)(1)(A) supplies the actual minimums: 72 consecutive
//    hours, $1,500, and six months of ignition interlock.
// 4. Open containers are not mentioned in the manual at all. AS 28.35.029 is
//    the source.
//
// Two places where sources differ are flagged where they arise. On provisional
// passengers the manual says a holder "MAY NOT carry passengers unless one of
// the passengers is a parent, legal guardian, or a person at least 21 years of
// age", while dmv.alaska.gov says "You may not carry passengers under the age
// of 21, except siblings"; AS 28.15.057(b)(1) permits a parent, legal guardian,
// sibling or a person at least 21. Questions on this are built on facts where
// all three readings agree. Separately, the manual recommends a four-second
// following interval while noting that 13 AAC 02.090 requires two seconds as a
// minimum; questions ask which figure the manual teaches, not which is "right".
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// Division's own authoritative wording on the state's site.
const HB = "https://dmv.alaska.gov/media/t5ef5vi2/dlman.pdf";
const hb = (page: number) => `${HB}#page=${page}`;
const AS28 =
  "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=28.35.010&secEnd=28.35.200";
const TEST_PAGE = "https://online.dmv.alaska.gov/practiceknowledgetest/";
const PROVISIONAL_PAGE =
  "https://dmv.alaska.gov/credential-services/provisional-license/";

export const alaskaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Alaska Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Alaska: what the shapes and colors mean, who goes first, and the handful of numbers the DMV's 20-question knowledge test expects you to know cold.",
    questions: [
      {
        id: "ak_s1_01",
        topic: "signs",
        question:
          "You come to a red eight-sided sign at an intersection. What does the Alaska Driver Manual require?",
        choices: [
          "Yield to traffic on the wider road, then proceed",
          "Slow to a crawl and continue if nothing is coming",
          "Make a complete stop before entering the intersection or at the stop line, then yield",
          "Stop only when another vehicle is close enough to be a hazard",
        ],
        correctIndex: 2,
        explanation:
          "The octagon means a full stop, and the manual is specific about where: at the stop line if there is one, otherwise before entering the intersection. Once stopped you look both right and left and yield the right of way before moving.",
        context:
          "Alaska teaches signs by shape and color before words, because the shape is readable in fog, glare or a language you do not read. The octagon is reserved for STOP, the downward triangle for YIELD, and black or red on white marks a regulatory sign that a statute, regulation or local ordinance stands behind.",
        trap:
          "A rolling stop is not a stop. The manual's Stops Required list puts the stop line, the crosswalk and the intersecting roadway shoulder line in that order, and none of them is optional because the cross street looks empty.",
        excerptKey: "sign-stop",
        sourceLabel: "Alaska Driver Manual - Stop Sign",
        sourceUrl: hb(43),
      },
      {
        id: "ak_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red ball and want to turn right. What does the manual allow?",
        choices: [
          "Turn right after a full stop, when the turn can be made safely and no sign forbids it",
          "Turn right only on a green arrow",
          "Turn right without stopping if the way is clear",
          "Turn right only where a sign expressly permits it",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is Alaska's default rather than a special permission, and two conditions attach to it: you must actually come to a full stop first, and a No turn on red sign overrides the default entirely.",
        context:
          "A steady red ball means stop behind the crosswalk, the stop line, or if there is neither, before entering the intersection. From that stop the only permitted movement is a right turn, and only when it can be made safely. A red arrow removes even that.",
        trap:
          "\"Clear enough to go\" is not the test. If the wheels never stopped turning, the turn is unlawful on an empty road at three in the morning.",
        excerptKey: "red-ball-right-turn",
        sourceLabel: "Alaska Driver Manual - Traffic Signals, Red Ball",
        sourceUrl: hb(55),
        commonlyMissed: true,
      },
      {
        id: "ak_s1_03",
        topic: "rightOfWay",
        question:
          "Two vehicles reach an uncontrolled intersection at the same moment, at right angles. Which driver must yield?",
        choices: [
          "The driver on the right yields to the driver on the left",
          "The driver going straight goes first, whichever side they are on",
          "Whichever driver signals first",
          "The driver on the left yields to the driver on the right",
        ],
        correctIndex: 3,
        explanation:
          "Alaska's rule for uncontrolled intersections is that when there is danger of collision, the driver on the left must yield to the driver on the right. It applies to arrival at roughly the same time, not to a driver who was clearly there first.",
        context:
          "An uncontrolled intersection is one with no stop sign, no yield sign and no traffic light. Two laws govern it: you must slow down and have the vehicle under control on the approach, and then the left yields to the right. The manual adds that approaching from the right does not excuse you from slowing down.",
        trap:
          "Being on the right does not mean you may drive through. The manual says outright that you have the right of way only when the other driver gives it to you, and only if another vehicle is not already in the intersection.",
        excerptKey: "row-yield-to-right",
        sourceLabel: "Alaska Driver Manual - Right of Way Law",
        sourceUrl: hb(38),
        commonlyMissed: true,
      },
      {
        id: "ak_s1_04",
        topic: "rules",
        question:
          "What following interval does the Alaska Driver Manual teach for good conditions?",
        choices: [
          "Two seconds",
          "One car length for every 10 mph",
          "Three seconds",
          "Four seconds",
        ],
        correctIndex: 3,
        explanation:
          "Alaska teaches a four-second interval, not the three seconds most neighboring states use. You watch the back of the vehicle ahead pass a fixed point, then count four beats; if you reach the point before you finish counting, you are too close.",
        context:
          "The manual calls it the Four-Second Rule and prints the exact count. Towing a trailer, or on a wet or slippery surface, it tells you to stretch the four seconds to six or more. The same four seconds applies behind a motorcycle, and it also works at night as a check that you are not overdriving your headlights.",
        trap:
          "Two seconds is the legal floor under 13 AAC 02.090, and the manual says so in a footnote. It is not the figure the manual recommends, and a question asking what the manual teaches wants four.",
        excerptKey: "four-second-rule",
        sourceLabel: "Alaska Driver Manual - How to Avoid Rear End Collisions",
        sourceUrl: hb(32),
        commonlyMissed: true,
      },
      {
        id: "ak_s1_05",
        topic: "safety",
        question: "Who has to wear a seat belt in an Alaska vehicle?",
        choices: [
          "Everyone except passengers in the back seat",
          "Only the driver and front-seat passengers",
          "Everyone in the vehicle",
          "Everyone under 18",
        ],
        correctIndex: 2,
        explanation:
          "AS 28.05.095 requires everyone in a motor vehicle to use a safety belt, and the manual repeats it as a flat rule with no seating-position exception. Passengers 18 and older are cited in their own name if they are unbelted.",
        context:
          "The driver carries an extra duty on top of their own belt: they are responsible for every passenger under 16 being properly restrained, in a belt or an age-appropriate child restraint. Failing to restrain an under-16 passenger can cost the driver up to $50 and two demerit points, while an adult violation is a $15 fine.",
        trap:
          "Alaska does not have a front-seat-only belt law. A back-seat adult riding unbelted is committing the offense themselves.",
        excerptKey: "belt-law",
        sourceLabel: "Alaska Driver Manual - Safety Belt Use Is Required by Law",
        sourceUrl: hb(26),
      },
      {
        id: "ak_s1_06",
        topic: "speed",
        question:
          "A residential street in Alaska has no speed limit sign anywhere on it. What is the maximum?",
        choices: [
          "20 mph",
          "25 mph",
          "30 mph",
          "35 mph",
        ],
        correctIndex: 1,
        explanation:
          "Alaska sets 25 mph as the statutory maximum in a residential district when nothing is posted. The manual prints the whole unposted table in one place, which is unusual: most states leave those figures to the statute.",
        context:
          "The full list is 15 mph in an alley, 20 mph in a business district, 20 mph in a school zone, 25 mph in a residential district, and 55 mph on any other roadway. Local authorities and the state Department of Transportation and Public Facilities may alter any of them, and selected highways are posted at 65.",
        trap:
          "These are maximums for favorable conditions only. The manual's Speed Limitation Law says that when traffic, surface, width or weather are less than ideal, the lawful speed is whatever is reasonable and proper - which can be far below 25.",
        excerptKey: "speed-limits-table",
        sourceLabel: "Alaska Driver Manual - Speed Laws",
        sourceUrl: hb(34),
      },
      {
        id: "ak_s1_07",
        topic: "signs",
        question: "What does a downward-pointing triangle sign require?",
        choices: [
          "Slow down, look both ways, and stop if necessary to avoid traffic or a pedestrian",
          "Merge without changing speed",
          "Proceed with the right of way over the crossing road",
          "Come to a complete stop every time",
        ],
        correctIndex: 0,
        explanation:
          "A yield sign asks you to slow down as required and look both left and right. It becomes a stop only when stopping is necessary to avoid a pedestrian or traffic on the protected street.",
        context:
          "Yield and stop are not the same instruction. A stop sign always means a full stop; a yield sign means give way, and stop only if giving way requires it. The Stops Required list makes the distinction explicit for both signs.",
        trap:
          "Treating a yield sign as an automatic stop is safer than the reverse, but it is still the wrong answer on the test - and stopping for no reason on a merge is how people get rear-ended.",
        excerptKey: "sign-yield",
        sourceLabel: "Alaska Driver Manual - Yield Sign",
        sourceUrl: hb(43),
      },
      {
        id: "ak_s1_08",
        topic: "licensing",
        question:
          "How old must you be to apply for a non-commercial instruction permit in Alaska?",
        choices: ["16", "15", "14", "15 and a half"],
        correctIndex: 2,
        explanation:
          "Alaska issues an instruction permit from age 14, earlier than any other state. The permit is what makes practice on a street or highway lawful, and it is required of everyone learning to drive.",
        context:
          "The permit is valid for two years and may be renewed exactly once. To get one you satisfy the identification requirements, pass the vision and written tests, and if you are under 18 provide parental consent. The fee is $15.",
        trap:
          "Fourteen gets you the permit, not a license. A full driver license requires you to be at least 16, and at 16 or 17 you must first hold the permit for six months and then a provisional license.",
        excerptKey: "permit-age-14",
        sourceLabel: "Alaska Driver Manual - Non-Commercial Instruction Permit",
        sourceUrl: hb(8),
      },
      {
        id: "ak_s1_09",
        topic: "signals",
        question:
          "A steady yellow ball appears as you approach an intersection. What does the manual tell you to do?",
        choices: [
          "Treat it exactly as a flashing yellow and continue with caution",
          "Speed up to clear the intersection before the red",
          "Stop, unless you are already in the intersection or too close to stop safely",
          "Stop in every case, without exception",
        ],
        correctIndex: 2,
        explanation:
          "Yellow means a red light is about to appear. The instruction is to stop, with one carve-out: if you are already within the intersection, or so close that you cannot stop safely, you continue.",
        context:
          "The manual adds a detail people miss. If the light turns yellow as you enter the intersection, you may proceed, but with extreme caution. That is permission to clear the box, not permission to accelerate into it.",
        trap:
          "\"Yellow means hurry\" is the single most common misreading of a signal. Yellow is a warning that stopping is now required, not an invitation to beat the red.",
        excerptKey: "yellow-ball",
        sourceLabel: "Alaska Driver Manual - Traffic Signals, Yellow Ball",
        sourceUrl: hb(55),
      },
      {
        id: "ak_s1_10",
        topic: "rules",
        question:
          "How far ahead must you signal before turning or moving right or left in Alaska?",
        choices: [
          "At least three seconds ahead",
          "Whenever another driver is close enough to see it",
          "During the last 100 feet traveled before turning",
          "At least 200 feet",
        ],
        correctIndex: 2,
        explanation:
          "The signal must be given continuously during the last 100 feet the vehicle travels before turning. The manual repeats the 100-foot figure in every one of its turn diagrams.",
        context:
          "The 100 feet is a minimum, not a target. The manual says the signal may be given from a greater distance when traffic conditions or your speed warrant it, and it separately forbids stopping or suddenly slowing without signaling. Bicyclists are held to the same duty using hand signals.",
        trap:
          "Signaling as you begin the turn satisfies nobody. The whole point is that the driver behind gets the warning before you slow down, not while you are already turning.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Alaska Driver Manual - Signaling",
        sourceUrl: hb(35),
      },
      {
        id: "ak_s1_11",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Alaska?",
        choices: [
          "No closer than 30 feet",
          "No closer than 20 feet",
          "No closer than 15 feet",
          "No closer than 10 feet",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen feet is the hydrant figure, and the manual prints the whole parking-distance list rather than leaving it to the statute.",
        context:
          "The list runs: 15 feet from a fire hydrant, 20 feet from a crosswalk or intersection, 20 feet from the entrance to a fire station, 30 feet from a stop sign, 50 feet from a railroad crossing, and 500 feet from fire apparatus that has stopped with its emergency lights flashing.",
        trap:
          "Thirty feet is on the list, but it belongs to the stop sign, not the hydrant. Mixing up which number goes with which object is how this question is usually failed.",
        excerptKey: "parking-distances",
        sourceLabel: "Alaska Driver Manual - Parking",
        sourceUrl: hb(74),
        commonlyMissed: true,
      },
      {
        id: "ak_s1_12",
        topic: "impairment",
        question:
          "At what breath or blood alcohol concentration are you presumed to be driving under the influence in Alaska?",
        choices: [
          "0.02 or more",
          "0.05 or more",
          "0.08 or more",
          "0.10 or more",
        ],
        correctIndex: 2,
        explanation:
          "A result of 0.08 or more means the law presumes you were driving under the influence. It is a presumption written into the statute, not a judgment call by the officer at the roadside.",
        context:
          "The 0.08 figure sits alongside two lower ones. A commercial driver is over the limit at 0.04. A driver under 21 can be revoked for any measurable quantity of alcohol at all, under the separate offense of minor operating after consuming.",
        trap:
          "You can be convicted of DUI below 0.08. AS 28.35.030 makes it an offense to drive while under the influence of alcohol, an inhalant or any controlled substance, whatever a chemical test says.",
        excerptKey: "bac-08-presumed",
        sourceLabel: "Alaska Driver Manual - Administrative Revocations",
        sourceUrl: hb(20),
      },
      {
        id: "ak_s1_13",
        topic: "sharing",
        question:
          "A school bus ahead of you stops on a two-lane road, its red lights flashing and its stop arm out. What must you do?",
        choices: [
          "Pass on the left once the children have cleared the roadway",
          "Slow to 20 mph and pass with care",
          "Stop, and stay stopped until the arm retracts, the red lights go off and the bus moves",
          "Stop only if children are visible",
        ],
        correctIndex: 2,
        explanation:
          "Flashing red lights and an extended stop arm mean a full stop, and the manual is explicit that you remain stopped until the stop sign is retracted, the red lights are discontinued and the bus resumes motion, or until the driver signals you on.",
        context:
          "The duty falls on drivers meeting the bus and drivers following it alike. AS 28.35.145 adds the distance the manual leaves out: you stop not less than 30 feet from the bus. Convicted, it is a class B misdemeanor and a mandatory six points.",
        trap:
          "Waiting for the children to cross is not the standard. The bus driver controls when traffic moves, through the arm and the lights, and the arm may stay out after the last child has boarded.",
        excerptKey: "bus-overtaking-rear",
        sourceLabel: "Alaska Driver Manual - Overtaking a School Bus with Red Lights Activated",
        sourceUrl: hb(53),
        commonlyMissed: true,
      },
      {
        id: "ak_s1_14",
        topic: "signs",
        question: "A black-on-yellow diamond sign is telling you what?",
        choices: [
          "A destination or route",
          "A service such as fuel or lodging",
          "A regulation you can be cited for breaking",
          "A dangerous or potentially dangerous condition ahead",
        ],
        correctIndex: 3,
        explanation:
          "Black on yellow is the warning family. These signs alert you to an actual or potentially dangerous condition ahead, and the manual notes that most of them imply you should reduce speed.",
        context:
          "Alaska's color scheme is worth memorizing whole: black or red on white is regulatory, black on yellow warns, white on green guides, black on orange means construction and maintenance, and white on blue marks services such as gas, food, lodging and rest areas.",
        trap:
          "A warning sign is not a rule you can be ticketed for ignoring - the regulatory signs are the ones a statute, regulation or ordinance stands behind. That does not make the warning optional in practice; extra caution is expected at all of them.",
        excerptKey: "sign-warning",
        sourceLabel: "Alaska Driver Manual - Warning Sign",
        sourceUrl: hb(44),
      },
      {
        id: "ak_s1_15",
        topic: "safety",
        question:
          "You are backing out of a parking space. What does the manual tell you to do?",
        choices: [
          "Open the door and lean out to see behind",
          "Turn your body and head to the right and look out the rear window",
          "Back quickly to spend less time in the traffic lane",
          "Rely on your mirrors, which give the widest view",
        ],
        correctIndex: 1,
        explanation:
          "The manual says not to depend on mirrors. With your left hand at the top of the wheel, you turn your body and head to the right and look out the rear window, then back slowly with your eyes moving to all sides.",
        context:
          "Two rules ride with it. The wheel moves in the direction you want the rear of the vehicle to go, and while backing you must yield to any vehicle or person on the street or sidewalk. The suggested speed is not more than 5 mph.",
        trap:
          "Opening the door and sticking your head out to see is specifically called dangerous in the manual's Backing section. So is trusting the mirrors, which cannot show you a small child directly behind the vehicle.",
        excerptKey: "backing-technique",
        sourceLabel: "Alaska Driver Manual - Backing",
        sourceUrl: hb(31),
      },
      {
        id: "ak_s1_16",
        topic: "signals",
        question: "What does a flashing red ball mean?",
        choices: [
          "Slow down and proceed with caution",
          "Stop, look in all directions, and proceed only when it is safe",
          "The signal is out of order and should be ignored",
          "Stop and wait for the light to turn green",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red is a stop sign in light form. You stop behind the crosswalk, the stop line, or before entering the intersection, look in all directions for traffic and pedestrians, and go only when it is safe.",
        context:
          "The manual notes that individual flashing red beacons may hang over a roadway or sit above a stop sign, supplementing the sign where extra emphasis is wanted. A flashing yellow, by contrast, means reduce speed and exercise caution while yielding to anyone in the intersection.",
        trap:
          "Flashing red is not \"stop and wait\". Nothing is going to turn green; once the way is clear you go.",
        excerptKey: "flashing-red-ball",
        sourceLabel: "Alaska Driver Manual - Traffic Signals, Flashing Red Ball",
        sourceUrl: hb(56),
      },
      {
        id: "ak_s1_17",
        topic: "rules",
        question: "What do yellow pavement lines separate?",
        choices: [
          "Lanes reserved for buses and carpools",
          "Traffic moving in opposite directions",
          "Traffic moving in the same direction",
          "The roadway from the shoulder",
        ],
        correctIndex: 1,
        explanation:
          "Yellow markings separate traffic flowing in opposite directions. White markings separate traffic going the same way, on multi-lane or one-way roadways.",
        context:
          "The manual also gives you the grammar of the lines themselves. Dashed lines are permissive, solid white lines are restrictive, and solid yellow lines are prohibitive. Pavement markings carry the same force of law as signs and signals.",
        trap:
          "A single solid yellow line is not always a centerline. On a divided or one-way roadway it marks the left edge of the pavement.",
        excerptKey: "markings-purpose",
        sourceLabel: "Alaska Driver Manual - Pavement Markings",
        sourceUrl: hb(59),
      },
      {
        id: "ak_s1_18",
        topic: "rightOfWay",
        question:
          "You are pulling out onto a street from a private driveway. What is required?",
        choices: [
          "Stop and yield to traffic on the street",
          "Nothing, if you are turning right",
          "Sound your horn and proceed",
          "Yield only to vehicles, not to people on the sidewalk",
        ],
        correctIndex: 0,
        explanation:
          "Entering a highway from a driveway, building or alley is on the manual's Stops Required list. You stop first, then yield to the traffic already on the road.",
        context:
          "The You Must Yield diagrams make the same point twice: stop and yield when entering a street or road from an alley, driveway or building, and yield to all traffic on the protected route. Pedestrians and cyclists on the sidewalk you are crossing are part of that duty.",
        trap:
          "Turning right does not change anything. The duty is created by where you are coming from, not by which way you are going.",
        excerptKey: "stop-entering-highway",
        sourceLabel: "Alaska Driver Manual - Stops Required",
        sourceUrl: hb(41),
      },
      {
        id: "ak_s1_19",
        topic: "impairment",
        question:
          "You are under 21 and a breath test shows any measurable alcohol. What happens to your license?",
        choices: [
          "A warning letter for a first occurrence",
          "The DMV revokes it, starting at 30 days for a first offense",
          "A 90-day suspension for a first offense",
          "Nothing, unless you are at 0.08 or above",
        ],
        correctIndex: 1,
        explanation:
          "For a driver under 21 the trigger is any quantity of alcohol at all, not 0.08. The Division revokes the license, and the first-offense period is 30 days.",
        context:
          "The revocation ladder runs 30 days for a first offense, 60 days if you have been revoked for it before, 90 days with two prior revocations, and a year with three or more. A refusal to take the breath test produces the same result as a positive one.",
        trap:
          "This revocation is administrative. The manual says it happens even if the criminal citation is dismissed or you are found not guilty in court - the DMV case and the court case are separate.",
        excerptKey: "minor-any-quantity",
        sourceLabel: "Alaska Driver Manual - Under 21 Violations",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "ak_s1_20",
        topic: "sharing",
        question: "How much lane does a motorcycle get in Alaska?",
        choices: [
          "Half a lane, so a car may share it",
          "A full lane width, like any other vehicle",
          "A full lane only on highways",
          "As much as the rider needs at the time",
        ],
        correctIndex: 1,
        explanation:
          "Motorcycles need a full lane width like other vehicles. The manual tells drivers never to move into the same lane as a motorcycle, even where the lane is wide and the rider is off to one side, and calls doing so both illegal and extremely hazardous.",
        context:
          "A skilled rider constantly changes position within the lane to see and be seen and to avoid road hazards. That movement is deliberate, not an invitation to squeeze past. Motorcyclists have the same rights and responsibilities on public roadways as anyone else.",
        trap:
          "A rider hugging the right of the lane has not given up the left of it. Sharing the lane is the misreading the manual singles out.",
        excerptKey: "motorcycle-never-share-lane",
        sourceLabel: "Alaska Driver Manual - Motorcycles",
        sourceUrl: hb(52),
      },
      {
        id: "ak_s1_21",
        topic: "safety",
        question:
          "A moose steps into the road ahead of you. What does the manual say to do?",
        choices: [
          "Sound the horn and hold your speed",
          "Swerve into the oncoming lane if it is clear",
          "Brake firmly but do not swerve",
          "Accelerate past before it reaches your lane",
        ],
        correctIndex: 2,
        explanation:
          "Brake firmly, keep the wheel straight. The manual warns that swerving can put you into another vehicle, into a pedestrian, or into a tree or utility pole - all of which are more dangerous than the animal.",
        context:
          "Moose, caribou and deer are on Alaska roads in most parts of the state, and most vehicle-moose collisions happen at dawn and dusk when light is low. If one animal crosses, slow down and expect another: they travel in pairs and groups.",
        trap:
          "Deer whistles, extra lights and reflectors are named in the manual as devices not to rely on. Your own behavior is the defense it recommends.",
        excerptKey: "animals-do-not-swerve",
        sourceLabel: "Alaska Driver Manual - Animals",
        sourceUrl: hb(72),
        commonlyMissed: true,
      },
      {
        id: "ak_s1_22",
        topic: "signals",
        question: "What does a green arrow give you?",
        choices: [
          "The right of way for the movement the arrow shows",
          "Permission to turn only after yielding to oncoming traffic",
          "Permission to make any movement the intersection allows",
          "A warning that the light is about to change",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow means make the movement the arrow indicates, and that movement has the right of way. It should not conflict with pedestrians or other vehicles.",
        context:
          "The protection is not absolute. The manual still tells you to observe caution and yield to anyone already in the intersection or entering it with the right of way. A flashing yellow arrow is the opposite case: permission to make the movement while yielding to oncoming traffic.",
        trap:
          "A green arrow is not the same as a green ball. The ball permits any legal movement and requires you to yield when turning left; the arrow protects one movement only.",
        excerptKey: "green-arrow",
        sourceLabel: "Alaska Driver Manual - Traffic Signals, Green Arrow",
        sourceUrl: hb(56),
      },
      {
        id: "ak_s1_23",
        topic: "rules",
        question:
          "When must headlights be turned on under Alaska's lighting law?",
        choices: [
          "From half an hour after sunset to half an hour before sunrise",
          "Only when you cannot see the road ahead",
          "From dusk until dawn, at the driver's discretion",
          "From sunset to sunrise",
        ],
        correctIndex: 0,
        explanation:
          "The rule runs from half an hour after sunset to half an hour before sunrise. The half-hour margins are part of the law, not a rounding of \"after dark\".",
        context:
          "A second trigger has nothing to do with the clock: headlights must be on in daytime whenever fog, rain, snow, smoke or dust cuts visibility to 1,000 feet or less. Parking lights denote a parked vehicle and may not be used alone, day or night, while the vehicle is moving.",
        trap:
          "Sunset itself is not the trigger, and neither is \"when it looks dark\". The statute fixes the two half-hour margins.",
        excerptKey: "headlights-sunset",
        sourceLabel: "Alaska Driver Manual - Lighting Law",
        sourceUrl: hb(67),
      },
      {
        id: "ak_s1_24",
        topic: "licensing",
        question:
          "How long is the written knowledge test at the Alaska DMV, and what do you need to pass?",
        choices: [
          "40 questions, 32 correct, no time limit",
          "30 questions, 24 correct, 30 minutes",
          "25 questions, 20 correct",
          "20 questions, 16 correct, 25 minutes",
        ],
        correctIndex: 3,
        explanation:
          "The DMV's own Sample Knowledge Test page states the format in one line: 25 minutes allowed, 20 questions, 16 correct answers to pass. That is 80 percent.",
        context:
          "The manual never gives these figures, which is why the DMV page is the source. The test covers only information found in the manual, including traffic laws, safe driving practices and highway sign recognition, and the manual may not be used during it.",
        trap:
          "Four wrong answers is the whole margin. On a 20-question test one careless read costs 5 percent, so the practical pass mark is much closer to perfect than 80 percent sounds.",
        excerptKey: "test-format",
        sourceLabel: "Alaska DMV - Sample Knowledge Test",
        sourceUrl: TEST_PAGE,
      },
      {
        id: "ak_s1_25",
        topic: "rightOfWay",
        question:
          "The light has just turned green, but a car is still stuck in the middle of the intersection. What do you do?",
        choices: [
          "Reverse to give it room",
          "Proceed, since you now have the right of way",
          "Yield to it, and to any pedestrian still crossing",
          "Sound your horn and edge forward",
        ],
        correctIndex: 2,
        explanation:
          "A green ball means go if the intersection is clear. When it is not, you yield to the pedestrians and vehicles caught in it, which the manual lists among the situations where you must yield.",
        context:
          "The same idea runs through the green ball entry: yield to pedestrians and vehicles still in the intersection or entering it with the right of way, and yield to oncoming traffic going straight if you are turning left. The green is permission to enter a clear intersection, nothing more.",
        trap:
          "A green light is not a right of way over someone already in the box. The driver who entered on the previous phase keeps priority until they are out.",
        excerptKey: "yield-green-caught",
        sourceLabel: "Alaska Driver Manual - You Must Yield in These Situations",
        sourceUrl: hb(40),
      },
      {
        id: "ak_s1_26",
        topic: "parking",
        question:
          "You are parking facing downhill next to a curb. Which way do the front wheels go?",
        choices: [
          "Away from the curb",
          "Whichever way is easier to pull out",
          "Straight ahead, with the parking brake set",
          "Toward the curb",
        ],
        correctIndex: 3,
        explanation:
          "Downhill, turn the front wheels toward the curb so that if the vehicle rolls, the curb stops it. Uphill, turn them away from the curb, for the same reason in reverse.",
        context:
          "The manual pairs the hill rule with the parallel-parking standard: the wheels must end up within 12 inches of the near curb. Leaving a parking space is treated as the more dangerous half - the driver pulling out carries the chief responsibility for avoiding a collision.",
        trap:
          "The two directions are easy to swap. Downhill, the front of the car points down the slope, so the wheels must point into the curb to catch it.",
        excerptKey: "parking-hill-wheels",
        sourceLabel: "Alaska Driver Manual - Parking",
        sourceUrl: hb(74),
      },
      {
        id: "ak_s1_27",
        topic: "signs",
        question: "What do black-on-orange signs mean?",
        choices: [
          "Road work and temporary conditions",
          "A service area ahead",
          "A route or destination",
          "A school zone ahead",
        ],
        correctIndex: 0,
        explanation:
          "Orange is the construction and maintenance family. These signs mark work in the road and temporary conditions that need special alertness, and the manual tells you to adjust speed and prepare for them.",
        context:
          "Work zones bring more than signs. Barricades, vertical panels, cones, tubes and drums guide traffic through, often with flashing or steady lights at night, and large flashing arrow panels steer you into open lanes. Flag persons wear orange and direct traffic with red flags or stop/slow paddles.",
        trap:
          "School zones use black on yellow and a five-sided shape, not orange. Orange always means work.",
        excerptKey: "sign-construction",
        sourceLabel: "Alaska Driver Manual - Construction & Maintenance Sign",
        sourceUrl: hb(44),
      },
      {
        id: "ak_s1_28",
        topic: "safety",
        question:
          "What is the minimum liability insurance an Alaska driver or vehicle owner must carry?",
        choices: [
          "$25,000 / $50,000 for injury and $10,000 for property",
          "$30,000 / $60,000 for injury and $20,000 for property",
          "$50,000 / $100,000 for injury and $25,000 for property",
          "$100,000 / $300,000 for injury and $50,000 for property",
        ],
        correctIndex: 2,
        explanation:
          "Alaska's minimums are $50,000 for bodily injury or death to one person, $100,000 for two or more in one accident, and $25,000 for property damage. The manual prints all three figures in a single sentence.",
        context:
          "The Mandatory Insurance Law requires either the vehicle owner or the driver to carry that liability coverage, and you must carry proof of it in the vehicle. Failing to show proof to an officer can bring a citation or get the vehicle impounded.",
        trap:
          "Alaska learners consistently name the insurance numbers as the questions that catch out-of-state transfers. Other states use lower figures; these are Alaska's, and they are testable.",
        excerptKey: "insurance-minimums",
        sourceLabel: "Alaska Driver Manual - Financial Responsibility Laws",
        sourceUrl: hb(14),
        commonlyMissed: true,
      },
      {
        id: "ak_s1_29",
        topic: "impairment",
        question: "What is implied consent in Alaska?",
        choices: [
          "Permission for an officer to enter your vehicle after a crash",
          "Agreeing to a search of your vehicle when you accept a license",
          "Consenting to a chemical test of your breath by driving in the state",
          "Agreeing to carry insurance as a condition of registration",
        ],
        correctIndex: 2,
        explanation:
          "By operating or driving a motor vehicle in Alaska, you consent to a chemical test of your breath to determine the alcohol concentration of your blood or breath. That consent comes with driving, not with signing anything.",
        context:
          "The law lets an officer require a breath sample after a lawful DUI arrest, and require blood or urine if you were in a crash that caused death or serious physical injury. It also allows a portable preliminary breath test at the scene where the officer has probable cause.",
        trap:
          "Refusing is not a neutral choice. A refusal produces two criminal charges, DUI and Refusal, which the court can treat separately, and during the revocation there is no limited work-purpose driving.",
        excerptKey: "implied-consent",
        sourceLabel: "Alaska Driver Manual - Implied Consent",
        sourceUrl: hb(18),
      },
      {
        id: "ak_s1_30",
        topic: "sharing",
        question:
          "A bicyclist is riding on the road ahead of you. What is their status in traffic?",
        choices: [
          "A road user with no right of way against cars",
          "A vehicle only where a bike lane is marked",
          "A pedestrian, so they belong on the sidewalk",
          "A vehicle, with the right to share the road and travel in the same direction as motor traffic",
        ],
        correctIndex: 3,
        explanation:
          "The manual says it plainly: a bicycle is a vehicle. Bicyclists have the right to share the road and to travel in the same direction as motor vehicles, and the rules of the road and right of way protect them exactly as they protect a car.",
        context:
          "The driver's practical duty is visibility. The manual tells you to check blind spots before turning, parallel parking, opening a door or leaving a curb, and not to depend on mirrors alone - turn your head. Children under nine are singled out as lacking the development to judge traffic safely.",
        trap:
          "You must yield to a bicycle just as you would to another vehicle. Treating the rider as an obstacle to be squeezed past is the failure mode the manual is written against.",
        excerptKey: "bicycle-is-vehicle",
        sourceLabel: "Alaska Driver Manual - Bicycles",
        sourceUrl: hb(49),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Passing, lane markings, right of way, lighting, parking and the licensing steps - the everyday rules the Alaska Driver Manual spends most of its pages on.",
    questions: [
      {
        id: "ak_s2_01",
        topic: "rules",
        question:
          "A solid yellow line runs along your side of the centerline. What may you do?",
        choices: [
          "Not pass, though you may still cross it to turn into a driveway",
          "Not cross it for any reason",
          "Pass only vehicles traveling under 25 mph",
          "Pass, if the oncoming lane is clear",
        ],
        correctIndex: 0,
        explanation:
          "A solid yellow center line means passing is not permitted. The manual adds the exception people forget: turning into a driveway across it is allowed.",
        context:
          "Dashed yellow marks where passing is permitted on a two-lane, two-way road. Solid yellow prohibits it. Solid yellow lines are described as prohibitive, solid white as restrictive, and dashed lines of either color as permissive.",
        trap:
          "\"Never cross a solid yellow\" is close, but too absolute. You may cross it to reach a driveway; you may not cross it to overtake.",
        excerptKey: "markings-yellow-solid",
        sourceLabel: "Alaska Driver Manual - Pavement Markings",
        sourceUrl: hb(61),
      },
      {
        id: "ak_s2_02",
        topic: "rules",
        question:
          "How close to an intersection or railroad crossing does the manual forbid passing?",
        choices: [
          "Within 300 feet",
          "Within 200 feet",
          "Within 100 feet",
          "Within 50 feet",
        ],
        correctIndex: 2,
        explanation:
          "One hundred feet. The Do Not Pass list forbids passing when approaching within 100 feet of an intersection or railroad crossing, or while crossing one.",
        context:
          "The same 100 feet applies when approaching a posted narrow bridge, viaduct or tunnel. The rest of the list covers the right shoulder, hills and curves without a clear view, a solid yellow line in your lane, and a school bus with red lights flashing and its arm out.",
        trap:
          "The center two-way left-turn lane is not a passing lane. The manual says center lanes are reserved for decelerating before a left turn and may not be used to pass.",
        excerptKey: "no-pass-100-feet",
        sourceLabel: "Alaska Driver Manual - Do Not Pass",
        sourceUrl: hb(42),
      },
      {
        id: "ak_s2_03",
        topic: "speed",
        question: "What is the unposted speed limit in an alley in Alaska?",
        choices: [
          "10 mph",
          "15 mph",
          "20 mph",
          "25 mph",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen miles an hour is the alley figure, the lowest of Alaska's statutory defaults.",
        context:
          "The four low defaults sit close together and are easy to confuse: 15 in an alley, 20 in a business district, 20 in a school zone, 25 in a residential district. Everything else with no sign is 55, and selected highways are posted at 65.",
        trap:
          "Twenty is the business-district and school-zone number, not the alley number. Alaska's alley limit is lower than either.",
        excerptKey: "speed-limits-table",
        sourceLabel: "Alaska Driver Manual - Speed Laws",
        sourceUrl: hb(34),
      },
      {
        id: "ak_s2_04",
        topic: "signals",
        question: "What does a steady red arrow require?",
        choices: [
          "Yield to oncoming traffic and turn",
          "Stop only if pedestrians are present",
          "Stop, then make the turn when it is safe",
          "Stop; no turn is allowed until the arrow changes to green or flashing yellow",
        ],
        correctIndex: 3,
        explanation:
          "A red arrow forbids the movement it points at. You stop behind the crosswalk, the stop line, or before entering the intersection, and no turn is allowed until the arrow changes to green or to flashing yellow.",
        context:
          "This is the one place where Alaska's right-on-red default does not apply. A red ball permits a right turn after a full stop; a red arrow pointing right does not.",
        trap:
          "Treating the red arrow like a red ball is the classic error. The arrow exists precisely to remove the turn-on-red permission.",
        excerptKey: "red-arrow-no-turns",
        sourceLabel: "Alaska Driver Manual - Traffic Signals, Red Arrow",
        sourceUrl: hb(55),
        commonlyMissed: true,
      },
      {
        id: "ak_s2_05",
        topic: "licensing",
        question:
          "You are 16 and want a provisional license. How long must you have held your instruction permit?",
        choices: [
          "Six months",
          "Twelve months",
          "There is no minimum",
          "Three months",
        ],
        correctIndex: 0,
        explanation:
          "Six months. At 16 or 17 the DMV cannot issue a provisional Class D license until you have held a valid instruction permit for six months.",
        context:
          "Two further conditions come with it. A parent, legal guardian or employer must certify at least 40 hours of driving experience, including at least 10 hours in progressively challenging circumstances such as bad weather and night driving. And you must not have been convicted of a traffic violation in the six months before you apply.",
        trap:
          "A traffic conviction restarts the clock. If you are found guilty of breaking a traffic law on your permit, the DMV makes you wait another six months.",
        excerptKey: "permit-six-months",
        sourceLabel: "Alaska Driver Manual - Non-Commercial Instruction Permit",
        sourceUrl: hb(8),
      },
      {
        id: "ak_s2_06",
        topic: "rightOfWay",
        question: "Entering a roundabout in Alaska, who yields?",
        choices: [
          "Traffic already in the circle yields to entering traffic",
          "Entering traffic yields to traffic already in the circle",
          "Whoever arrives first has the right of way",
          "The larger vehicle has the right of way",
        ],
        correctIndex: 1,
        explanation:
          "Approaching traffic yields to traffic already circulating. You enter to the right of the center island when there is a gap, and once inside you do not stop.",
        context:
          "Most roundabouts are designed for about 15 to 20 mph, so you slow on the approach. If two vehicles arrive at the same time, you yield to the one on your right. You yield to pedestrians and cyclists in the roundabout and at the marked crosswalk as you exit.",
        trap:
          "Stopping inside the circle is the mistake that causes crashes there. Miss your exit and the manual's instruction is simply to continue around.",
        excerptKey: "roundabout-yield-in-circle",
        sourceLabel: "Alaska Driver Manual - Roundabouts",
        sourceUrl: hb(39),
      },
      {
        id: "ak_s2_07",
        topic: "safety",
        question:
          "Your car starts to skid. What does the manual tell you to do with the front wheels?",
        choices: [
          "Let go of the wheel and let the car settle",
          "Turn them opposite to the skid",
          "Hold them straight and brake hard",
          "Turn them in the direction of the skid",
        ],
        correctIndex: 3,
        explanation:
          "Turn the front wheels in the direction of the skid. The manual's recovery list starts with not panicking, then steering into the skid, then avoiding sudden braking and oversteering.",
        context:
          "As control returns you slow the vehicle by very gently pressing and releasing the brake. Front-wheel and four-wheel drive vehicles need easy acceleration to pull out of a skid. Prevention matters more than recovery: shaded areas and bridges freeze before the rest of the road and stay frozen longer.",
        trap:
          "Overcorrecting only changes the direction of the skid, which the manual says outright. The second skid is usually worse than the first.",
        excerptKey: "skid-recovery",
        sourceLabel: "Alaska Driver Manual - Recovery From Skid",
        sourceUrl: hb(73),
      },
      {
        id: "ak_s2_08",
        topic: "signs",
        question: "What does a five-sided sign mean in Alaska?",
        choices: [
          "A school area or school crosswalk with reduced speed",
          "A T-intersection ahead",
          "A hospital ahead",
          "A pedestrian crossing anywhere on the road",
        ],
        correctIndex: 0,
        explanation:
          "Five sides means school. These signs warn of school areas and school crosswalks that require reduced speed, and tell you to prepare to stop for pedestrians.",
        context:
          "The reduced speed is 20 mph, and Alaska prints separate signs for it: Reduce speed to 20 as marked for school crosswalks, and Slow to 20 for school children. The point schedule treats a school-zone violation seriously - failing to obey a traffic control device in a school zone, playground, crosswalk or park is six points.",
        trap:
          "The shape carries the meaning. Learn the shapes and you can read a sign you have never seen; learn only the pictures and an unfamiliar one defeats you.",
        excerptKey: "sign-school",
        sourceLabel: "Alaska Driver Manual - School Sign",
        sourceUrl: hb(44),
      },
      {
        id: "ak_s2_09",
        topic: "rules",
        question:
          "You are on a two-lane road outside an urban area with five cars stacked up behind you. What does Alaska law require?",
        choices: [
          "Speed up until the queue clears",
          "Pull off the roadway at the first safe opportunity",
          "Wave the drivers past from your lane",
          "Nothing, as long as you are at the speed limit",
        ],
        correctIndex: 1,
        explanation:
          "AS 28.35.140 requires a driver on a two-lane roadway outside an urban area to pull off at the first opportunity to do so safely when five or more vehicles are immediately behind. It is an infraction with a fine of at least $100.",
        context:
          "The manual states the duty twice: once under following, and again under Major Roads, where it notes that you are not required to drive at the maximum speed limit but must pull over if a queue forms. The related rule is that a driver may not drive so slowly as to hold back or block the normal and reasonable flow of traffic.",
        trap:
          "Being at the limit is no defense. The count of vehicles behind you is what triggers the duty, not your speedometer.",
        excerptKey: "as-five-vehicles",
        sourceLabel: "Alaska Statutes AS 28.35.140(b)",
        sourceUrl: AS28,
        commonlyMissed: true,
      },
      {
        id: "ak_s2_10",
        topic: "parking",
        question:
          "Parking beside the roadway outside city limits, what does the manual require?",
        choices: [
          "Two wheels off the pavement",
          "All four wheels off the pavement if possible",
          "Nothing, as long as you leave a lane clear",
          "Parking lights on at all times",
        ],
        correctIndex: 1,
        explanation:
          "All four wheels must be off the pavement if that is possible. At night you leave parking lights or low-beam headlights on unless the vehicle is 8 feet from the edge of the pavement.",
        context:
          "In towns, no-parking zones are usually marked by a sign or by a yellow or red painted curb. Double parking is prohibited by law anywhere. In a parallel space the wheels must finish within 12 inches of the near curb.",
        trap:
          "Half off the road is the habit that gets vehicles struck. The manual asks for all four wheels clear of the pavement whenever the shoulder allows it.",
        excerptKey: "parking-outside-city",
        sourceLabel: "Alaska Driver Manual - Parking",
        sourceUrl: hb(74),
      },
      {
        id: "ak_s2_11",
        topic: "impairment",
        question:
          "Which of these will sober up a driver who has been drinking?",
        choices: [
          "Time, and nothing else",
          "Black coffee",
          "Fresh air and a cold shower",
          "A large meal",
        ],
        correctIndex: 0,
        explanation:
          "Only time. The manual is blunt: coffee, fresh air, food or a cold shower might wake you up, but they will not sober you up. Alcohol is burned up by the liver and eliminated through the kidneys and lungs.",
        context:
          "It takes an average of one hour to cancel the effects of one drink, so roughly four hours for four drinks. The same amount of alcohol is present in 12 ounces of beer, a single 1.5-ounce shot of 80 proof spirits, and 4 ounces of wine - the type of drink makes no difference.",
        trap:
          "Coffee is the answer people reach for and it is wrong in a way that matters. A wide-awake drunk driver is still a drunk driver, with slower reactions and worse judgment.",
        excerptKey: "alcohol-only-time",
        sourceLabel: "Alaska Driver Manual - Facts You Should Know About Alcohol",
        sourceUrl: hb(22),
      },
      {
        id: "ak_s2_12",
        topic: "sharing",
        question:
          "You are approaching a school bus traveling toward you with its yellow warning lights flashing. What should you do?",
        choices: [
          "Stop immediately",
          "Pass quickly before the red lights start",
          "Continue at your speed; yellow lights concern the bus only",
          "Reduce speed and be ready to stop when the red lights come on and the arm goes out",
        ],
        correctIndex: 3,
        explanation:
          "Amber lights are the warning stage. You reduce speed and bring the vehicle to a complete stop when the bus stops, the red lights flash and the stop arm is extended.",
        context:
          "Once stopped you stay stopped until the arm retracts and the red lights go off, and only then proceed with due caution. The one exception is a highway with separated roadways carrying two or more lanes in each direction: a driver meeting a bus on the other roadway need not stop.",
        trap:
          "Beating the red is exactly the behavior the amber warning exists to prevent, and it is the moment children step out from in front of the bus.",
        excerptKey: "bus-meeting-amber",
        sourceLabel: "Alaska Driver Manual - Meeting a School Bus",
        sourceUrl: hb(53),
      },
      {
        id: "ak_s2_13",
        topic: "emergencies",
        question:
          "A tire blows out at highway speed. What is the first thing the manual tells you to do?",
        choices: [
          "Do not apply the brakes; concentrate on steering",
          "Steer for the shoulder immediately",
          "Shift into a lower gear",
          "Brake hard to shed speed quickly",
        ],
        correctIndex: 0,
        explanation:
          "Do not apply the brakes. The manual's order is: keep off the brake, concentrate on steering, slow down gradually, brake softly, and then pull completely off the pavement.",
        context:
          "Braking during a blowout throws weight onto a wheel that has lost its tire and pulls the vehicle sharply toward that side. Once the car is under control and slowing, gentle braking is fine.",
        trap:
          "The instinct is to stamp on the brake, and that instinct is what turns a blowout into a rollover. Steering comes first.",
        excerptKey: "blowout",
        sourceLabel: "Alaska Driver Manual - Emergencies, Tire Blows Out",
        sourceUrl: hb(78),
      },
      {
        id: "ak_s2_14",
        topic: "signals",
        question: "A traffic signal is completely dark - no bulbs are lit at all. What now?",
        choices: [
          "Treat it as a green light and proceed",
          "Treat the intersection as uncontrolled: stop, then yield to traffic on your right",
          "Wait for the signal to be repaired",
          "Treat it as a flashing yellow and slow down",
        ],
        correctIndex: 1,
        explanation:
          "An unlit signal head with no other working head for your direction and nobody directing traffic makes the intersection uncontrolled. You must stop, then yield to traffic approaching on your right, and proceed only when it is safe.",
        context:
          "The manual asks you to report the condition to the nearest police department as soon as possible. It also puts a stop at a non-working signal on the Stops Required list, alongside stop signs and flashing reds.",
        trap:
          "An uncontrolled intersection normally means slow down and yield to the right. A dead signal is stricter: the manual says you must stop.",
        excerptKey: "unlit-signal-head",
        sourceLabel: "Alaska Driver Manual - Unlit Signal Head",
        sourceUrl: hb(57),
        commonlyMissed: true,
      },
      {
        id: "ak_s2_15",
        topic: "safety",
        question:
          "The manual gives a figure for how much greater the impact is at 40 mph than at 20 mph. What is it?",
        choices: [
          "Eight times as great",
          "Twice as great",
          "Four times as great",
          "Three times as great",
        ],
        correctIndex: 2,
        explanation:
          "Four times. Doubling the speed quadruples both the striking power and the braking distance, which is the fact the manual says is not generally understood.",
        context:
          "The curve keeps steepening. Tripling the speed from 20 to 60 mph makes impact and braking distance nine times greater, and 80 mph makes them sixteen times greater than at 20.",
        trap:
          "Most people guess that doubling the speed doubles the energy. It is a squared relationship, and the manual prints the formula to make the point.",
        excerptKey: "impact-four-times",
        sourceLabel: "Alaska Driver Manual - Speed, Impact and Braking Distance",
        sourceUrl: hb(33),
      },
      {
        id: "ak_s2_16",
        topic: "licensing",
        question:
          "You fail the written knowledge test. When can you take it again?",
        choices: [
          "After seven days",
          "After 30 days",
          "The same day, after a short wait",
          "The following day",
        ],
        correctIndex: 3,
        explanation:
          "The manual's rule is that if failed, the test may be retaken the following day. Not the same afternoon, and not a month later.",
        context:
          "The driving test has a different rule: normally you wait two business days, where a business day is Monday to Friday and not a state or federal holiday. Alaska learners report the once-a-day limit being enforced strictly.",
        trap:
          "The written and road tests do not share a retake rule. One day for the knowledge test, two business days for the driving test.",
        excerptKey: "written-retake",
        sourceLabel: "Alaska Driver Manual - Examinations, Written",
        sourceUrl: hb(11),
      },
      {
        id: "ak_s2_17",
        topic: "rules",
        question:
          "When must you switch from high beam to low beam for a vehicle you are following?",
        choices: [
          "Within 500 feet",
          "Within 300 feet",
          "Within 200 feet",
          "Within 100 feet",
        ],
        correctIndex: 1,
        explanation:
          "Three hundred feet when following a vehicle going the same direction. The dimming distance for an oncoming vehicle is longer: 500 feet.",
        context:
          "Both figures are in the lighting law, and the manual adds that dimming is required on divided highways just as it is elsewhere. Low beam is also the right choice in rain, fog, snow or dust, where high beams reflect off the particles and cut your own vision.",
        trap:
          "The two distances are easy to swap. Oncoming is the longer one at 500 feet, because their eyes take the glare head-on; following is 300.",
        excerptKey: "headlights-dim-300",
        sourceLabel: "Alaska Driver Manual - Lighting Law",
        sourceUrl: hb(67),
      },
      {
        id: "ak_s2_18",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing at an intersection where no crosswalk is painted. Who has the right of way?",
        choices: [
          "The driver, since the crosswalk is not marked",
          "The pedestrian",
          "Whoever entered the intersection first",
          "The driver, unless the pedestrian is already halfway",
        ],
        correctIndex: 1,
        explanation:
          "Crosswalk lines need not be painted at all intersections, and the manual says they do not need to be in place to establish where pedestrians have the right of way. Pedestrians have it at marked crosswalks or at intersections.",
        context:
          "Two further duties come with it. Do not drive in a way that forces a pedestrian to yield to you - the motorist should always yield. And never pass on either side of a vehicle stopped at a crosswalk to let someone cross.",
        trap:
          "The absence of paint is not the absence of a crosswalk. An unmarked crosswalk exists at an intersection whether or not anyone has painted it.",
        excerptKey: "crosswalk-not-painted",
        sourceLabel: "Alaska Driver Manual - Pavement Markings",
        sourceUrl: hb(61),
        commonlyMissed: true,
      },
      {
        id: "ak_s2_19",
        topic: "speed",
        question:
          "What is a Traffic Safety Corridor in Alaska, and what changes inside one?",
        choices: [
          "A stretch reserved for commercial vehicles",
          "A stretch with a lower posted limit",
          "A designated stretch where fines for traffic offenses are doubled",
          "A stretch where passing is banned outright",
        ],
        correctIndex: 2,
        explanation:
          "Certain portions of highway are designated traffic safety corridors, and fines for traffic offenses committed inside one are doubled.",
        context:
          "Illegal passing in a traffic safety corridor also carries its own entry in the point schedule, at four points. The designation is about enforcement rather than a different speed limit.",
        trap:
          "It is not a construction zone and not a school zone. The corridor is a stretch of highway with a bad crash record, and the doubling applies to any traffic offense there.",
        excerptKey: "traffic-safety-corridor",
        sourceLabel: "Alaska Driver Manual - Speed Limitation Law",
        sourceUrl: hb(34),
      },
      {
        id: "ak_s2_20",
        topic: "signs",
        question:
          "What does a red circle with a diagonal slash through a symbol tell you?",
        choices: [
          "A warning about the condition shown",
          "The movement shown has priority",
          "The movement shown is prohibited",
          "The movement shown is permitted only at certain hours",
        ],
        correctIndex: 2,
        explanation:
          "The red circle-and-slash is the universal prohibition mark: whatever is shown inside it is not allowed.",
        context:
          "Alaska uses it on the No turn on red sign, on no-parking and no-stopping signs, and on signs barring pedestrians and cyclists from a right of way. All of these are regulatory signs, so a citation can follow from ignoring one.",
        trap:
          "A slash is prohibition, not advice. A warning sign is a yellow diamond; the slash never appears on one.",
        excerptKey: "sign-red-circle-slash",
        sourceLabel: "Alaska Driver Manual - Signs",
        sourceUrl: hb(45),
      },
      {
        id: "ak_s2_21",
        topic: "emergencies",
        question:
          "You are in a crash with $2,500 in property damage inside a municipality. Who do you contact immediately?",
        choices: [
          "Your insurance company",
          "The local police department, by dialing 911",
          "Nobody, if the vehicles can still be driven",
          "The Division of Motor Vehicles",
        ],
        correctIndex: 1,
        explanation:
          "If there is an injury, or total property damage of $2,000 or more, and the crash happened inside a municipality, you contact the local police department immediately by dialing 911. Outside a municipality you contact the Alaska State Troopers.",
        context:
          "Reporting to the police is a separate duty from reporting to the DMV. The crash must be reported to the Division of Motor Vehicles within 10 days, though that report is not required if a police officer investigated. A certificate of insurance is required on any crash with $501 or more of property damage, within 15 days.",
        trap:
          "Three different figures live in this one area: $501 for the insurance certificate, $2,000 for calling the police, and 10 days for the DMV report. They are separately testable.",
        excerptKey: "crash-call-911",
        sourceLabel: "Alaska Driver Manual - What to Do in Case of Every Crash",
        sourceUrl: hb(15),
        commonlyMissed: true,
      },
      {
        id: "ak_s2_22",
        topic: "safety",
        question:
          "What does the manual say about tinted windshields and front windows?",
        choices: [
          "They are unrestricted in Alaska",
          "They affect night vision and increase crash risk, and must meet 13 AAC 04.223",
          "They are banned outright",
          "They are allowed only on commercial vehicles",
        ],
        correctIndex: 1,
        explanation:
          "The manual lists tint under night-driving safety: tinted windshields and front windows affect night vision and increase crash risk, and any tint must meet the standard in 13 AAC 04.223.",
        context:
          "The night-driving section is built around glare recovery. After an oncoming car passes, your pupils need time to readjust, and during that period you are effectively driving blind. Anything that cuts light reaching your eyes lengthens that period.",
        trap:
          "Tint is regulated rather than banned, which is why \"banned outright\" is wrong. The required equipment list also demands that windshield and windows afford the driver clear vision.",
        excerptKey: "night-tint",
        sourceLabel: "Alaska Driver Manual - Night Driving, Safety Tips",
        sourceUrl: hb(66),
      },
      {
        id: "ak_s2_23",
        topic: "rules",
        question:
          "You are turning left from a two-way street onto a one-way street. Where should you finish?",
        choices: [
          "Straddling the centerline until traffic clears",
          "In whichever lane is clear",
          "Sharply into the first lane on the left side",
          "In the far right lane, so following traffic can pass",
        ],
        correctIndex: 2,
        explanation:
          "The manual's turn diagrams put you into the first available lane. Turning onto a one-way street, that means turning sharply into the first lane on the left side.",
        context:
          "The whole sequence matters: make the proper approach, signal at least 100 feet in advance, yield to all road users, do not start the turn before reaching the crosswalk, and check the turn path for pedestrians out of the left window.",
        trap:
          "Looping wide across two lanes is what the manual means by \"don't loop or cut corners\". The turn ends in the nearest lawful lane, not the one you would rather be in.",
        excerptKey: "turn-left-two-to-one",
        sourceLabel: "Alaska Driver Manual - Two Way Street to One Way Street",
        sourceUrl: hb(36),
      },
      {
        id: "ak_s2_24",
        topic: "impairment",
        question:
          "How long must an ignition interlock device stay installed after a first DUI or Refusal conviction?",
        choices: [
          "Twelve months",
          "Eighteen months",
          "Three months",
          "Six months",
        ],
        correctIndex: 3,
        explanation:
          "Six months is the minimum for one conviction. The manual prints the whole ladder: 6 months for a first, 12 for a second, 18 for a third, 24 for a fourth and 30 for a fifth.",
        context:
          "The device is required on any vehicle you operate, and you pay for installation and maintenance yourself. When you reinstate, you must show proof of the interlock and of financial responsibility through an SR-22 insurance filing.",
        trap:
          "The interlock period is separate from the revocation period. A first offense brings a 90-day administrative revocation and then six months of interlock once you are driving again.",
        excerptKey: "iid-six-months",
        sourceLabel: "Alaska Driver Manual - Ignition Interlock Device (IID)",
        sourceUrl: hb(23),
      },
      {
        id: "ak_s2_25",
        topic: "sharing",
        question:
          "You are behind a large truck on a highway. Where should you not be?",
        choices: [
          "In the left lane preparing to pass",
          "Two lanes over",
          "Ahead of it after completing a pass",
          "Directly behind it, where you cannot see past it",
        ],
        correctIndex: 3,
        explanation:
          "Tailgating a truck is what the manual warns against. A truck is almost as wide as your lane, so following close blocks your view of everything ahead and your first hint of a problem is the truck's brake lights.",
        context:
          "The No-Zone is the set of blind spots around the front, back and sides of trucks and buses. The rule of thumb the manual gives is simple: if you cannot see the driver in their side mirrors, they cannot see you. Trucks also need far more room to stop - about 400 feet at 55 mph against 130 to 140 for a car.",
        trap:
          "Cutting in front of a truck after passing is the other half of the problem. Moving into the gap the driver left cuts their available stopping distance in half.",
        excerptKey: "truck-tailgating",
        sourceLabel: "Alaska Driver Manual - Avoid Tailgating",
        sourceUrl: hb(83),
      },
      {
        id: "ak_s2_26",
        topic: "signals",
        question:
          "A steady red X is showing over the lane you are in. What does it mean?",
        choices: [
          "Slow down, the lane is closing ahead",
          "Do not use the lane; opposing traffic is permitted to use it",
          "The lane is reserved for buses and carpools",
          "The lane is open but requires a toll",
        ],
        correctIndex: 1,
        explanation:
          "A steady red X means do not use that lane at all. Opposing traffic is permitted to use it.",
        context:
          "Lane control signals hang over reversible lanes, which may be marked with double yellow dashed lines on each side. A steady yellow X means clear the lane safely because a red X is coming; a steady green arrow means travel is permitted. If none of the signals is illuminated, do not enter the lane.",
        trap:
          "A dark lane control signal is not permission. The manual says explicitly not to enter the lane when the signals are not illuminated.",
        excerptKey: "red-x",
        sourceLabel: "Alaska Driver Manual - Lane Control Signals",
        sourceUrl: hb(58),
      },
      {
        id: "ak_s2_27",
        topic: "licensing",
        question:
          "How long is an Alaska non-commercial instruction permit valid, and how often can it be renewed?",
        choices: [
          "Until your 18th birthday",
          "One year, renewable twice",
          "Two years, renewable once",
          "Two years, renewable indefinitely",
        ],
        correctIndex: 2,
        explanation:
          "Two years, and it can only be renewed one time. That gives a 14-year-old up to four years of permit before the DMV stops reissuing.",
        context:
          "The permit lets you drive a specified type or class of non-commercial vehicle with a licensed driver at least 21 years old, who has held that class of license for at least a year and who sits in the seat beside you. On a motorcycle they must be within visual sight and immediately supervising.",
        trap:
          "\"Renewable once\" is a real limit, not a formality. Both the manual and the DMV's permit page state it, and a permit that lapses after the second term means starting the process again.",
        excerptKey: "permit-two-years",
        sourceLabel: "Alaska Driver Manual - Non-Commercial Instruction Permit",
        sourceUrl: hb(8),
      },
      {
        id: "ak_s2_28",
        topic: "parking",
        question: "How far from a railroad crossing is parking prohibited?",
        choices: [
          "20 feet",
          "30 feet",
          "50 feet",
          "100 feet",
        ],
        correctIndex: 2,
        explanation:
          "Fifty feet from a railroad crossing. It is the second-largest figure on the manual's parking list, after the 500 feet you must keep from fire apparatus stopped with its lights flashing.",
        context:
          "The full list: 15 feet from a fire hydrant, 20 feet from a crosswalk or intersection, 20 feet from a fire station entrance, 30 feet from a stop sign, 50 feet from a railroad crossing, 500 feet from stopped fire apparatus.",
        trap:
          "Alaska learners repeatedly say railroad crossings show up on the knowledge test. This distance and the 1,500-foot approaching-train rule are both fair game.",
        excerptKey: "parking-distances",
        sourceLabel: "Alaska Driver Manual - Parking",
        sourceUrl: hb(74),
      },
      {
        id: "ak_s2_29",
        topic: "safety",
        question:
          "The manual names one thing that makes hard-surfaced roads especially slippery. What is it?",
        choices: [
          "The first half hour after a rain begins",
          "Rain falling on a hot road",
          "Standing water more than an inch deep",
          "Continuous heavy rain",
        ],
        correctIndex: 0,
        explanation:
          "The first half hour after a rain starts is the dangerous window. Dust and road film have not washed off yet, and oil, dirt and tire dust mixed with water make a slippery combination.",
        context:
          "The manual asks you to test the road surface for traction when you are unsure, checking the mirror first so a following driver is not surprised. The same caution applies to stale green lights in bad weather: approach them slower so you are ready to stop.",
        trap:
          "Heavy sustained rain washes the film away. Counterintuitively, the light rain at the start of a shower is when traction is worst.",
        excerptKey: "weather-first-half-hour",
        sourceLabel: "Alaska Driver Manual - Weather Conditions",
        sourceUrl: hb(71),
      },
      {
        id: "ak_s2_30",
        topic: "rightOfWay",
        question:
          "An emergency vehicle approaches with its lights flashing but no siren. What must you do?",
        choices: [
          "Nothing until the siren sounds",
          "Yield: slow, pull to the right-hand edge clear of any intersection, and stop",
          "Speed up to get out of its way",
          "Stop where you are, in the lane",
        ],
        correctIndex: 1,
        explanation:
          "The duty attaches to the flashing red or blue light, whether a siren is in operation or not. You slow, pull to the right-hand edge of the roadway clear of an intersection, and stop to let the vehicle pass.",
        context:
          "Clear of an intersection matters: stopping inside one blocks the route the emergency vehicle may need. Separately, you may not follow an emergency vehicle responding to an emergency closer than 500 feet, or park within 500 feet of stopped fire apparatus displaying flashing lights.",
        trap:
          "Waiting for the siren costs seconds that matter. The manual makes the light alone enough.",
        excerptKey: "emergency-yield-pull-right",
        sourceLabel: "Alaska Driver Manual - Emergency Vehicles",
        sourceUrl: hb(76),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched at the level of the real 20-question DMV exam, drawn from across the manual: penalties and points, signals and markings, sharing the road, and the winter conditions Alaska drivers actually face.",
    questions: [
      {
        id: "ak_s3_01",
        topic: "impairment",
        question:
          "You are arrested for DUI and your breath test reads 0.09. The criminal charge is later dismissed. What happens to your license?",
        choices: [
          "It depends on whether you request a hearing",
          "It is returned, because the charge was dismissed",
          "The DMV revocation stands regardless",
          "The revocation is reduced to 30 days",
        ],
        correctIndex: 2,
        explanation:
          "The Division's revocation is a civil action that runs separately from the court case. The manual says the revocation happens even if the criminal charge of DUI or Refusal is dismissed, or you are found not guilty in court.",
        context:
          "The administrative periods are 90 days for a first offense, one year if you have a prior DUI or Refusal conviction, three years with two priors, and five years with three or more. Prior convictions from Alaska or another state within the last 15 years count.",
        trap:
          "Alaska drivers repeatedly name this as the question that catches people. The instinct is that an acquittal restores everything; the DMV has independent authority and uses it.",
        excerptKey: "dui-revocation-not-guilty",
        sourceLabel: "Alaska Driver Manual - Administrative Revocations",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "ak_s3_02",
        topic: "licensing",
        question:
          "How many points in a 12-month period trigger a mandatory suspension or revocation in Alaska?",
        choices: [
          "18 points",
          "12 points",
          "9 points",
          "6 points",
        ],
        correctIndex: 1,
        explanation:
          "Twelve points in 12 months, or 18 points in 24 months, requires mandatory suspension or revocation of the driving privilege - regardless of the hardship involved.",
        context:
          "Point values run from 2 to 10, with the worst offenses at 10: DUI, reckless driving, refusing a breath sample, racing, fleeing an officer, and driving while suspended. You get a warning letter at the halfway mark, and credits can be earned for violation-free driving or a defensive driving course taken once every 12 months.",
        trap:
          "Six and nine points are real thresholds, but they belong to provisional license holders: 6 in 12 months or 9 in 24 requires a driver improvement course. The suspension thresholds are 12 and 18.",
        excerptKey: "points-suspension-threshold",
        sourceLabel: "Alaska Driver Manual - A Word About Points",
        sourceUrl: hb(15),
        commonlyMissed: true,
      },
      {
        id: "ak_s3_03",
        topic: "rules",
        question:
          "How far back must you stop from a school bus displaying flashing red lights?",
        choices: [
          "Not less than 10 feet",
          "Not less than 20 feet",
          "Not less than 30 feet",
          "Not less than 50 feet",
        ],
        correctIndex: 2,
        explanation:
          "Thirty feet. AS 28.35.145 requires a driver approaching from any direction to stop not less than 30 feet from the bus before reaching it, and not to proceed until the bus moves and the lights go off.",
        context:
          "The manual tells you to stop but never prints the distance, so this is one of the places the statute has to supply the number. A conviction is a class B misdemeanor and carries a mandatory assessment of six demerit points.",
        trap:
          "The exception is narrow. A driver on a highway with separate roadways need not stop for a bus on a different roadway - a painted centerline does not make a road divided.",
        excerptKey: "as-school-bus-30-feet",
        sourceLabel: "Alaska Statutes AS 28.35.145(a)",
        sourceUrl: AS28,
        commonlyMissed: true,
      },
      {
        id: "ak_s3_04",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and the warning lights start flashing. What do you do?",
        choices: [
          "Try to restart the engine",
          "Get out and run away from the tracks, in the direction the train is coming from",
          "Stay in the vehicle and brace",
          "Get out and run away from the tracks in the direction the train is going",
        ],
        correctIndex: 1,
        explanation:
          "Get out. Once clear you run away from both the tracks and the vehicle, and toward the oncoming train - so that flying debris from the collision is thrown away from you rather than at you. Then call 911.",
        context:
          "The manual says 20 seconds is the minimum time it takes a train to reach the crossing once the warning lights activate. If there are no warning lights, or they have not activated, you still get out, then call 911 and the Emergency Notification System number on the crossing post or the metal control box.",
        trap:
          "Running the way the train is heading keeps you in the debris field. It is counterintuitive and it is the answer.",
        excerptKey: "railroad-get-out",
        sourceLabel: "Alaska Driver Manual - Railroad Crossings",
        sourceUrl: hb(64),
      },
      {
        id: "ak_s3_05",
        topic: "speed",
        question:
          "How close can a train be before you are required to stop at a crossing, even an unmarked one?",
        choices: [
          "Half a mile",
          "500 feet",
          "1,000 feet",
          "1,500 feet",
        ],
        correctIndex: 3,
        explanation:
          "Be prepared to stop if a train is within 1,500 feet of the crossing, and the manual adds that you must stop even if the crossing is unmarked.",
        context:
          "The rest of the crossing rules are about not being trapped: wait on the approach until you are sure you can clear the tracks, never drive around lowered gates, never shift gears on the crossing, and watch for a second train on another track after the first has passed.",
        trap:
          "The absence of a crossbuck, gates or lights does not remove the duty. An unmarked crossing with a train in sight still requires a stop.",
        excerptKey: "railroad-1500-feet",
        sourceLabel: "Alaska Driver Manual - Railroad Crossings",
        sourceUrl: hb(63),
      },
      {
        id: "ak_s3_06",
        topic: "signals",
        question: "What does a flashing yellow arrow permit?",
        choices: [
          "A turn only when no oncoming vehicle is visible at all",
          "Nothing; it is a warning that the arrow is about to go red",
          "The protected turn shown by the arrow",
          "The turn shown, after yielding to oncoming traffic and pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow arrow lets you make the movement the arrow shows, but you exercise caution and yield to oncoming traffic, pedestrians and anyone already in the intersection.",
        context:
          "It is the unprotected version of the green arrow. The green arrow gives the movement the right of way; the flashing yellow gives permission without priority. A steady yellow arrow means stop that movement because a red is coming.",
        trap:
          "Flashing yellow is not the same as steady yellow. One is permission to turn while yielding; the other is a warning to stop.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Alaska Driver Manual - Traffic Signals, Flashing Yellow Arrow",
        sourceUrl: hb(56),
      },
      {
        id: "ak_s3_07",
        topic: "impairment",
        question:
          "What is the minimum jail sentence a court must impose for a first DUI conviction in Alaska?",
        choices: [
          "72 consecutive hours",
          "20 days",
          "There is no mandatory minimum",
          "24 hours",
        ],
        correctIndex: 0,
        explanation:
          "Seventy-two consecutive hours. AS 28.35.030 makes a first DUI a class A misdemeanor and requires the court to impose at least 72 consecutive hours of imprisonment and a fine of at least $1,500.",
        context:
          "A second conviction carries not less than 20 days and a $3,000 fine; a third, 60 days and $4,000. The court may not suspend the minimum imprisonment or the minimum fine. Ten points also go on the driving record, and the manual notes that DUIs stay on your record permanently.",
        trap:
          "Alaska learners say the DUI numbers - fine, jail time, points - are asked directly rather than as principles. Knowing that drunk driving is illegal is not enough to pass those items.",
        excerptKey: "as-dui-first-sentence",
        sourceLabel: "Alaska Statutes AS 28.35.030(b)(1)(A)",
        sourceUrl: AS28,
        commonlyMissed: true,
      },
      {
        id: "ak_s3_08",
        topic: "sharing",
        question:
          "Where should a driver look for a bicyclist before opening the car door at the curb?",
        choices: [
          "In the mirrors, which cover the door zone",
          "Over the shoulder, because mirrors alone are not enough",
          "Nowhere; the cyclist must avoid the door",
          "Only if a bike lane is marked",
        ],
        correctIndex: 1,
        explanation:
          "The manual tells drivers not to depend on mirrors alone and to turn their head. The instruction covers turning, parallel parking, opening a door and leaving a curb.",
        context:
          "Cyclists are hard to see in traffic and have no protection in a crash. The rules of the road and right of way apply to and protect them, and you must yield to a bicycle as you would to another vehicle.",
        trap:
          "A mirror check misses exactly the space a cyclist occupies as they come alongside. That is the blind spot the door swings into.",
        excerptKey: "bicycle-blind-spots",
        sourceLabel: "Alaska Driver Manual - Bicycles",
        sourceUrl: hb(49),
      },
      {
        id: "ak_s3_09",
        topic: "rules",
        question:
          "You are in the shared center lane of a multi-lane, two-way road. What may you use it for?",
        choices: [
          "Driving whenever the outer lanes are congested",
          "Passing slower traffic",
          "Accelerating up to the speed of traffic",
          "Left turns only, in either direction",
        ],
        correctIndex: 3,
        explanation:
          "A two-way left turn lane is reserved exclusively for vehicles turning left, from either direction. The manual says outright that it is not permissible to use it as a driving, accelerating or passing lane.",
        context:
          "Opposing traffic may be using the same lane to turn left, which is why the manual tells you to enter it with caution and to yield to oncoming traffic and pedestrians while completing the turn. A one-way left turn arrow marks the version opposing traffic cannot use.",
        trap:
          "The Do Not Pass list names this specifically: center lanes are reserved for decelerating before a left turn, and you may not use one to pass.",
        excerptKey: "markings-centre-lane-not-driving",
        sourceLabel: "Alaska Driver Manual - Pavement Markings, Shared Center Lane",
        sourceUrl: hb(60),
        commonlyMissed: true,
      },
      {
        id: "ak_s3_10",
        topic: "safety",
        question:
          "What is the No-Zone around a large truck or bus?",
        choices: [
          "A lane reserved for trucks on a grade",
          "The area a truck needs to make a wide right turn",
          "The area where trucks are banned from changing lanes",
          "The blind spots around the front, back and sides where the driver cannot see you",
        ],
        correctIndex: 3,
        explanation:
          "The No-Zone is the set of blind spots around the front, back and sides of trucks and buses where crashes are more likely because the driver has limited visibility.",
        context:
          "The mirror test is the practical rule: if you cannot see the truck or bus driver in their side mirrors, they cannot see you. A truck facing a front-end emergency may turn into your lane without knowing you are there.",
        trap:
          "The wide-turn squeeze is a different hazard. Trucks swing left to make a right turn, and getting between the truck and the curb is how the manual describes being caught in a squeeze.",
        excerptKey: "truck-no-zone",
        sourceLabel: "Alaska Driver Manual - Stay Out of the No-Zone",
        sourceUrl: hb(82),
      },
      {
        id: "ak_s3_11",
        topic: "licensing",
        question:
          "You move to Alaska holding a valid license from another state. What does the DMV require?",
        choices: [
          "The written knowledge test, but usually not the driving test",
          "Both the written and driving tests",
          "The driving test only",
          "Nothing; your license transfers",
        ],
        correctIndex: 0,
        explanation:
          "The written test is required for applicants not currently licensed in Alaska. The driving test usually is not - a person holding a valid license from another state is normally excused from it.",
        context:
          "The clock is short. A non-resident aged 16 or over may drive on another state's license, but an Alaska license must be obtained by the end of a 90-day period after entering the state.",
        trap:
          "Years of driving experience elsewhere buy no exemption from the written test. Alaska drivers who moved from other states report this catching them out at the counter.",
        excerptKey: "written-who",
        sourceLabel: "Alaska Driver Manual - Examinations, Written",
        sourceUrl: hb(11),
      },
      {
        id: "ak_s3_12",
        topic: "parking",
        question:
          "How far from fire apparatus stopped with its emergency lights flashing may you park?",
        choices: [
          "500 feet",
          "300 feet",
          "200 feet",
          "100 feet",
        ],
        correctIndex: 0,
        explanation:
          "Five hundred feet, the largest figure on the parking list. The same 500 feet is the minimum distance for following an emergency vehicle that is responding to an emergency.",
        context:
          "The rest of the emergency-vehicle rules sit alongside it: yield by moving to the lane away from an approaching emergency vehicle, and if no lane change is possible, slow to a reasonable speed. Driving over a fire hose without a department official's consent is not permissible in Alaska - a $100 fine and two points.",
        trap:
          "Five hundred feet is roughly a block and a half. People assume the restriction is a car length or two.",
        excerptKey: "emergency-follow-500",
        sourceLabel: "Alaska Driver Manual - Following Emergency Vehicle",
        sourceUrl: hb(76),
      },
      {
        id: "ak_s3_13",
        topic: "signs",
        question:
          "A white-on-red WRONG WAY sign appears down the road from a DO NOT ENTER sign. What has happened?",
        choices: [
          "You have entered a restricted lane",
          "You are approaching a one-way street you may enter",
          "You are driving the wrong way on a ramp or roadway",
          "The road ahead is closed for construction",
        ],
        correctIndex: 2,
        explanation:
          "The DO NOT ENTER sign faces traffic entering a roadway or ramp in the wrong direction, and a WRONG WAY sign may be placed further down the prohibited direction as a second warning.",
        context:
          "Both are regulatory signs, red and white. The pair exists because a driver who has missed the first one at an off-ramp entrance is now traveling against freeway traffic, and the second sign gives them one more chance to stop.",
        trap:
          "Road closed for construction is signed black on orange with a detour, not red and white. The color family tells you which is which.",
        excerptKey: "sign-do-not-enter",
        sourceLabel: "Alaska Driver Manual - Do Not Enter Sign",
        sourceUrl: hb(44),
      },
      {
        id: "ak_s3_14",
        topic: "rightOfWay",
        question:
          "You are making a left turn at a green ball. An oncoming car is going straight through. Who goes first?",
        choices: [
          "Whoever is closer to the intersection",
          "You, if you have already entered the intersection",
          "You, because you arrived first",
          "The oncoming car",
        ],
        correctIndex: 3,
        explanation:
          "On a green ball you yield to vehicles going straight through the intersection in the opposite direction if you are making a left turn. The oncoming driver goes first.",
        context:
          "The manual's left-turn sequence keeps you out of trouble while you wait: enter the intersection but do not proceed past its center, keep the front wheels straight so a rear-end shunt does not push you into oncoming traffic, and check the turn path for pedestrians out of the left window.",
        trap:
          "Being in the intersection first does not create priority for a left turn. Only a green arrow does that.",
        excerptKey: "green-ball-yield",
        sourceLabel: "Alaska Driver Manual - Traffic Signals, Green Ball",
        sourceUrl: hb(55),
      },
      {
        id: "ak_s3_15",
        topic: "rules",
        question:
          "The manual gives one instruction about your turn signal after the maneuver is finished. What is it?",
        choices: [
          "Cancel it",
          "Switch to hazard lights briefly",
          "Nothing; modern signals cancel themselves",
          "Leave it on until you have merged fully",
        ],
        correctIndex: 0,
        explanation:
          "Alaska law requires you to cancel your directional signal after you use it. A signal left blinking still tells other drivers you are turning, and may tempt someone to pull out across your path.",
        context:
          "The manual repeats the instruction inside the passing sequence too: signal right to return to the right lane, and be sure to cancel the signal light. The motorcycle section notes that most motorcycle signals do not cancel themselves, which is why you should be sure a rider is really turning before you pull out.",
        trap:
          "This is a legal requirement in Alaska, not just etiquette. It is the kind of small rule that appears on a 20-question test precisely because most drivers have never read it.",
        excerptKey: "signal-cancel",
        sourceLabel: "Alaska Driver Manual - Signaling",
        sourceUrl: hb(35),
      },
      {
        id: "ak_s3_16",
        topic: "safety",
        question:
          "How deep does water have to be before it can carry away most vehicles?",
        choices: ["Six inches", "One foot", "Two feet", "Three feet"],
        correctIndex: 2,
        explanation:
          "Two feet of moving water can carry away most vehicles, including SUVs and pickups. Six inches is enough to reach the bottom of most passenger cars and cause loss of control or stalling.",
        context:
          "The manual's flooding advice is to turn around and find another route rather than judge the depth. Water hides dips, and floodwater can wash away the road surface underneath, so a crossing that looks shallow may not have a road under it.",
        trap:
          "Six inches sounds harmless and is the figure at which you start losing control. Two feet is the figure at which the vehicle floats.",
        excerptKey: "flood-two-feet",
        sourceLabel: "Alaska Driver Manual - Flooding",
        sourceUrl: hb(84),
      },
      {
        id: "ak_s3_17",
        topic: "impairment",
        question:
          "Which is true of driving under the influence of a prescribed medication in Alaska?",
        choices: [
          "It is a lesser offense with no license consequences",
          "A valid prescription is a defense",
          "It is treated the same as driving under the influence of alcohol",
          "It applies only to controlled substances taken illegally",
        ],
        correctIndex: 2,
        explanation:
          "Alaska law forbids driving under the influence of any controlled substance, which the manual notes includes narcotic and non-narcotic drugs, not just illegal ones. The penalties are the same as for alcohol.",
        context:
          "The manual asks you to check with your doctor about side effects of prescription medicine, and warns that over-the-counter allergy remedies and cold pills can affect driving. It estimates that at least 25 percent of prescription drugs in use can interact with alcohol.",
        trap:
          "A prescription makes possession lawful; it does not make impaired driving lawful. That distinction is exactly what this question tests.",
        excerptKey: "drugs-controlled-substance",
        sourceLabel: "Alaska Driver Manual - Drugs",
        sourceUrl: hb(24),
      },
      {
        id: "ak_s3_18",
        topic: "sharing",
        question:
          "A vehicle ahead of you has stopped at a crosswalk to let someone cross. What may you not do?",
        choices: [
          "Signal your intention to pass",
          "Check for pedestrians before proceeding",
          "Wait behind it",
          "Pass it on the left or the right",
        ],
        correctIndex: 3,
        explanation:
          "You may not pass to the right or the left of a vehicle stopped at a crosswalk to let a pedestrian cross. The stopped vehicle is hiding a person you cannot see.",
        context:
          "The manual repeats this in the sharing-the-roadway safety tips: never pass vehicles stopped at a crosswalk, because there may be people crossing where you cannot see. It also asks you to stop well back so drivers in other lanes can see the crossing pedestrian too.",
        trap:
          "The instinct is that the other lane is clear so it is safe. It is clear because the pedestrian is still behind the stopped vehicle, walking into your path.",
        excerptKey: "crosswalk-never-pass",
        sourceLabel: "Alaska Driver Manual - Pavement Markings",
        sourceUrl: hb(61),
        commonlyMissed: true,
      },
      {
        id: "ak_s3_19",
        topic: "signals",
        question:
          "The pedestrian signal shows a flashing upraised hand with a countdown timer at 9. You are on the curb. What does it mean for a pedestrian?",
        choices: [
          "You may leave the curb if you can finish before the timer reaches zero",
          "Cross only in the marked crosswalk at a run",
          "The signal is about to turn to WALK",
          "Do not start crossing under any circumstances",
        ],
        correctIndex: 0,
        explanation:
          "The flashing upraised hand with a countdown timer permits a pedestrian to leave the curb if they can complete the crossing before the timer reaches zero. Without a timer, the flashing hand means do not enter the roadway.",
        context:
          "When the timer reaches zero the flashing hand becomes a steady upraised hand and the timer goes dark. A steady hand means do not leave the sidewalk; anyone already crossing proceeds to the other side.",
        trap:
          "The countdown changes the rule. A bare flashing hand forbids starting; the same hand with a timer allows it if the time is genuinely enough.",
        excerptKey: "ped-countdown",
        sourceLabel: "Alaska Driver Manual - Pedestrian Signals",
        sourceUrl: hb(57),
      },
      {
        id: "ak_s3_20",
        topic: "speed",
        question:
          "The road is icy and the posted limit is 55. What speed does Alaska law require?",
        choices: [
          "55, since that is the posted limit",
          "A careful and prudent speed no greater than is reasonable and proper for the conditions",
          "Ten miles under the posted limit",
          "Half the posted limit",
        ],
        correctIndex: 1,
        explanation:
          "The Speed Limitation Law overrides the sign. When conditions are less than ideal you must drive at a careful and prudent speed, no greater than is reasonable and proper having regard to traffic, surface, width and weather.",
        context:
          "A separate rule sharpens it: you may not drive faster than will permit you to stop within the assured clear distance ahead. On ice or packed snow the manual also tells you to slow down well in advance of your stopping point rather than braking near it.",
        trap:
          "There is no fixed reduction in the law. \"Ten under\" and \"half the limit\" both sound reasonable and neither is the standard the statute sets.",
        excerptKey: "speed-limitation-law",
        sourceLabel: "Alaska Driver Manual - Speed Limitation Law",
        sourceUrl: hb(34),
      },
      {
        id: "ak_s3_21",
        topic: "emergencies",
        question:
          "Your brakes fail on a downgrade. What does the manual list first?",
        choices: [
          "Turn off the ignition",
          "Shift to a lower gear",
          "Use the parking brake",
          "Rub the tires on the curb",
        ],
        correctIndex: 2,
        explanation:
          "The manual's brake-failure list is short and ordered: use the parking brake, shift to a lower gear, rub the tires on the curb.",
        context:
          "Coasting in neutral or with the clutch disengaged on a downgrade is separately prohibited, which is part of the same idea - the engine and gearbox are a braking resource, and giving them up on a hill leaves you with nothing but friction brakes.",
        trap:
          "Turning off the ignition is not on the list, and on many vehicles it locks the steering or kills the power assistance. Losing brakes is bad; losing brakes and steering is worse.",
        excerptKey: "brakes-fail",
        sourceLabel: "Alaska Driver Manual - Emergencies, Brakes Fail",
        sourceUrl: hb(78),
      },
      {
        id: "ak_s3_22",
        topic: "licensing",
        question:
          "A provisional license holder is caught carrying a friend of the same age at 8pm. What is the consequence?",
        choices: [
          "Immediate revocation of the provisional license",
          "Nothing, since it is before 1am",
          "A warning for a first offense",
          "An infraction: a $200 penalty and two points",
        ],
        correctIndex: 3,
        explanation:
          "The DMV states the penalty directly: violating the restrictions is an infraction carrying $200 and a two-point violation recorded on the driving history.",
        context:
          "The passenger restriction has nothing to do with the hour. A provisional holder may not carry passengers unless one of them is a parent, legal guardian or a person at least 21, and siblings are the exception that needs no adult present. The 1am to 5am curfew is a separate restriction.",
        trap:
          "The curfew and the passenger rule are independent. Complying with one does not excuse breaking the other.",
        excerptKey: "dmv-provisional-penalty",
        sourceLabel: "Alaska DMV - Provisional License",
        sourceUrl: PROVISIONAL_PAGE,
        commonlyMissed: true,
      },
      {
        id: "ak_s3_23",
        topic: "rules",
        question:
          "Passing on a two-lane road, what does the manual tell you to do before pulling out?",
        choices: [
          "Check well ahead for a no-passing zone and oncoming vehicles without swinging out",
          "Flash your headlights at the vehicle ahead",
          "Accelerate to the point where you can complete the pass in one motion",
          "Swing out briefly across the centerline for a better look",
        ],
        correctIndex: 0,
        explanation:
          "Check well ahead for a no passing zone and for oncoming vehicles, and do not swing out across the center line for a look. Staying well back from the vehicle ahead is what gives you the sight distance instead.",
        context:
          "The full sequence: stay back for sight distance, check the mirror, signal left, check ahead for a no-passing zone, sound the horn to warn the driver ahead, pass on the left at a safe distance, and do not return to the right lane until safely clear. Then signal right and cancel the signal.",
        trap:
          "Nosing over the line to look is how head-on collisions start, and the manual names it as the thing not to do. Sitting further back gives you the same view safely.",
        excerptKey: "passing-no-swing-out",
        sourceLabel: "Alaska Driver Manual - Passing Safely",
        sourceUrl: hb(41),
      },
      {
        id: "ak_s3_24",
        topic: "safety",
        question:
          "How much does the manual say the four-second interval should grow when you are towing a trailer or the road is wet?",
        choices: [
          "To five seconds",
          "To six seconds or more",
          "To eight seconds",
          "It stays at four; only your speed changes",
        ],
        correctIndex: 1,
        explanation:
          "Six seconds or more. The manual gives that figure specifically for towing a trailer and for a wet or slippery surface.",
        context:
          "The same four-second base applies behind a motorcycle, and the manual asks for more when the road is wet and slippery, because those conditions create stability problems for a rider that a car driver does not face.",
        trap:
          "Five seconds is the intuitive answer and it is not the manual's number. Six or more is.",
        excerptKey: "four-second-increase",
        sourceLabel: "Alaska Driver Manual - How to Avoid Rear End Collisions",
        sourceUrl: hb(32),
      },
      {
        id: "ak_s3_25",
        topic: "signs",
        question:
          "You see a fluorescent orange triangle with a reflective red border on the back of a vehicle. What is it telling you?",
        choices: [
          "The vehicle is oversize",
          "The vehicle is carrying hazardous material",
          "The vehicle travels at 25 mph or less",
          "The vehicle is disabled",
        ],
        correctIndex: 2,
        explanation:
          "That is the slow moving vehicle emblem, required on all vehicles that travel at 25 mph or less.",
        context:
          "By day the solid orange triangle is visible at distances exceeding one-fifth of a mile. At night the reflective red border glows in your headlights, and the hollow red triangle it forms identifies the vehicle as slow moving even before you can judge its speed.",
        trap:
          "The emblem is about speed, not cargo or size. Recognizing it early is what gives you the room to slow down instead of braking hard.",
        excerptKey: "smv-emblem",
        sourceLabel: "Alaska Driver Manual - Slow Moving Vehicles",
        sourceUrl: hb(54),
      },
      {
        id: "ak_s3_26",
        topic: "rightOfWay",
        question:
          "You are on the road and a non-motorized user is crossing an uncontrolled intersection. What does the manual say?",
        choices: [
          "Priority goes to whoever arrived first",
          "The right of way depends on whether a crosswalk is marked",
          "Vehicles have priority on the roadway",
          "The non-motorized user has the right of way over motorized vehicles",
        ],
        correctIndex: 3,
        explanation:
          "The manual states it as a rule of its own: a non-motorized user has the right of way through uncontrolled intersections over motorized vehicles.",
        context:
          "The uncontrolled-intersection section requires you to slow down and have the vehicle under control at any cross street, and it specifically includes unmarked crosswalks for non-motorized users in that duty.",
        trap:
          "\"Non-motorized\" covers more than pedestrians. Cyclists, people using a mobility device and anyone else without an engine come under the same rule.",
        excerptKey: "row-non-motorized",
        sourceLabel: "Alaska Driver Manual - Right of Way Law",
        sourceUrl: hb(38),
      },
      {
        id: "ak_s3_27",
        topic: "impairment",
        question:
          "Which ability does the manual say alcohol impairs first?",
        choices: [
          "Reaction time",
          "Judgment",
          "Balance",
          "Vision",
        ],
        correctIndex: 1,
        explanation:
          "Judgment goes first. That is why the manual pairs it with the observation that alcohol creates a false sense of confidence: the faculty you would use to notice you are impaired is the one already gone.",
        context:
          "The chart in the manual sets out the sequence by concentration: judgment and inhibitions at 0.02, reaction and coordination at 0.06, serious deterioration in driving performance at 0.08, vision, speech and balance at 0.10, walking and standing at 0.16.",
        trap:
          "Vision, reaction and balance are all impaired, but later. The question is which goes first, and it is the one you would need to notice the rest.",
        excerptKey: "alcohol-judgment-first",
        sourceLabel: "Alaska Driver Manual - Facts You Should Know About Alcohol",
        sourceUrl: hb(22),
      },
      {
        id: "ak_s3_28",
        topic: "sharing",
        question:
          "A motorcycle ahead of you has its right turn signal blinking but has not slowed. What should you assume?",
        choices: [
          "The rider is turning right",
          "The rider may have left an old signal on and may continue straight",
          "The signal is faulty and should be ignored",
          "The rider is inviting you to pass",
        ],
        correctIndex: 1,
        explanation:
          "Turn signals do not cancel themselves on most motorcycles. The manual tells you to be sure the rider is actually turning before you pull out in front of them.",
        context:
          "Judging a motorcycle is hard for reasons that are not the rider's fault: they are small in the traffic scene, and drivers routinely misjudge both distance and speed. Drivers turning left across an oncoming motorcycle cause a large share of car and cycle crashes.",
        trap:
          "Acting on the signal alone is exactly the failure the manual is warning about. Watch for the bike slowing and changing position, not just the light.",
        excerptKey: "motorcycle-signal-not-cancel",
        sourceLabel: "Alaska Driver Manual - Motorcycles",
        sourceUrl: hb(52),
        commonlyMissed: true,
      },
      {
        id: "ak_s3_29",
        topic: "rules",
        question:
          "You realize you are in the wrong lane to make your turn as you enter an intersection. What does the manual tell you to do?",
        choices: [
          "Reverse to the correct lane if traffic allows",
          "Make the turn anyway from the lane you are in",
          "Stop and wait for a gap to change lanes in the intersection",
          "Continue on and go around the block",
        ],
        correctIndex: 3,
        explanation:
          "Do not turn, and do not impede traffic trying to get across. Continue on and go around the block, watching for no U-turn signs.",
        context:
          "The same principle covers a missed freeway exit: keep moving, do not back up, and take the next exit. Stops and reversals on a road built for flowing traffic are a primary cause of rear-end collisions.",
        trap:
          "Cutting across at the last moment is the instinct and the danger. A missed turn costs a minute; a lane change inside an intersection can cost a great deal more.",
        excerptKey: "wrong-lane-to-turn",
        sourceLabel: "Alaska Driver Manual - Pavement Markings",
        sourceUrl: hb(62),
      },
      {
        id: "ak_s3_30",
        topic: "safety",
        question:
          "What does the manual say about the horn when you are being passed by another vehicle?",
        choices: [
          "Sound it if the pass looks unsafe",
          "Flash your headlights instead",
          "Sound it to acknowledge the pass",
          "Nothing; but it is unlawful to increase your speed while being passed",
        ],
        correctIndex: 3,
        explanation:
          "The Do Not Pass section carries the flip side of the rule: when being passed, it is unlawful to increase your speed.",
        context:
          "The manual elsewhere restricts the horn: audible signal devices may not be used unless necessary to assure safe operation. There is one place it does tell you to use it, though - sounding the horn to warn the driver ahead of your intention to pass.",
        trap:
          "Speeding up as someone comes alongside is common and unlawful, and it is what strands the passing driver in the oncoming lane.",
        excerptKey: "no-pass-speed-up",
        sourceLabel: "Alaska Driver Manual - Do Not Pass",
        sourceUrl: hb(42),
      },
      {
        id: "ak_s3_31",
        topic: "signals",
        question:
          "A police officer is directing traffic at an intersection where the light is green for you, and waves you to stop. What do you do?",
        choices: [
          "Stop, because an officer's directions override signs and signals",
          "Stop only if there is cross traffic",
          "Sound the horn and proceed slowly",
          "Proceed, since the signal shows green",
        ],
        correctIndex: 0,
        explanation:
          "The manual puts it in capitals: you must follow the directions of a police officer, fireperson or authorized flag person regardless of signs or signals.",
        context:
          "The same principle covers the flag person in a work zone, who uses red flags or stop/slow paddles to move traffic through. A signal is a machine following a timer; a person directing traffic is responding to something the machine cannot see.",
        trap:
          "The green light feels like authority. It is outranked by anyone lawfully directing traffic.",
        excerptKey: "officer-overrides",
        sourceLabel: "Alaska Driver Manual - Traffic Signals",
        sourceUrl: hb(57),
      },
      {
        id: "ak_s3_32",
        topic: "speed",
        question:
          "What is the unposted maximum on an Alaska roadway that is not an alley, business district, school zone or residential district?",
        choices: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "Fifty-five miles an hour is the catch-all figure for any other roadway that is not otherwise posted.",
        context:
          "The manual attaches a footnote: local authorities or the state Department of Transportation and Public Facilities may alter speed limits under 13 AAC 02.280, and selected highways may be posted at 65. Sixty-five is a posted limit, never a default.",
        trap:
          "Choosing 65 confuses what may be posted with what applies when nothing is. With no sign at all, the answer is 55.",
        excerptKey: "speed-65-posted",
        sourceLabel: "Alaska Driver Manual - Speed Laws",
        sourceUrl: hb(34),
      },
      {
        id: "ak_s3_33",
        topic: "licensing",
        question:
          "Under 21, when does an Alaska driver license expire?",
        choices: [
          "On your 18th birthday",
          "On your 21st birthday",
          "90 days after your 21st birthday",
          "Five years after issue, like any other license",
        ],
        correctIndex: 2,
        explanation:
          "A license held by someone under 21 expires 90 days after their 21st birthday, and an alcohol awareness test must be passed before renewing.",
        context:
          "The alcohol awareness written test is a separate requirement that attaches after the 21st birthday, before an original or renewal driver license is issued. The DMV offers it online through the Alaska KnowTo Drive system.",
        trap:
          "The 90 days after, rather than on, the birthday is the detail. It is a short grace period, not a full renewal cycle.",
        excerptKey: "licence-under-21-expiry",
        sourceLabel: "Alaska Driver Manual - Driver's License Requirements",
        sourceUrl: hb(9),
      },
      {
        id: "ak_s3_34",
        topic: "emergencies",
        question:
          "Two wheels drop off the pavement onto a soft shoulder at speed. What does the manual tell you to do?",
        choices: [
          "Stop feeding gas, hold the wheel firmly, brake lightly, and return only when no cars are near",
          "Accelerate to regain traction",
          "Steer back onto the pavement immediately",
          "Brake hard to stop before you lose control",
        ],
        correctIndex: 0,
        explanation:
          "Come off the gas, keep a firm grip, brake lightly and intermittently, and do not attempt to return to the pavement until there are no cars in your immediate vicinity. Then turn back onto the pavement at slow speed.",
        context:
          "The danger is the lip between shoulder and pavement. Yanking the wheel at speed hooks the front tire on that edge and throws the car across the road, which is why the manual makes returning a deliberate, slow, unhurried action.",
        trap:
          "Getting back on the road at once is the instinct and the mistake. The shoulder is survivable; a sudden return at speed often is not.",
        excerptKey: "wheels-off-roadway",
        sourceLabel: "Alaska Driver Manual - Safety Tips, Wheel(s) Off Roadway",
        sourceUrl: hb(79),
      },
      {
        id: "ak_s3_35",
        topic: "parking",
        question: "How close to a stop sign may you park?",
        choices: [
          "No closer than 50 feet",
          "No closer than 30 feet",
          "No closer than 20 feet",
          "No closer than 15 feet",
        ],
        correctIndex: 1,
        explanation:
          "Thirty feet from a stop sign. Parking closer hides the sign from approaching drivers and blocks the sight line at the intersection.",
        context:
          "The 20-foot figure on the list belongs to two things: a crosswalk or intersection, and the entrance to a fire station. The 15-foot figure is the hydrant, and 50 feet is the railroad crossing.",
        trap:
          "The list has five different numbers within 50 feet of each other in real space. Learn them as a set rather than one at a time.",
        excerptKey: "parking-distances",
        sourceLabel: "Alaska Driver Manual - Parking",
        sourceUrl: hb(74),
      },
    ],
  },
];
