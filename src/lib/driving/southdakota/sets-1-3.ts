import type { DrivingTestSet } from "../types";

// Every fact below was checked against the South Dakota Driver License Manual,
// REVISED 11/2024, published by the Department of Public Safety's Driver
// Licensing Program, plus the chapters of South Dakota Codified Laws Title 32
// and the two dps.sd.gov knowledge-base articles that carry rules the manual
// states incompletely or not at all.
//
// South Dakota's manual is 72 pages and reads as a driving-technique book more
// than a law book, so the gaps are large and they matter:
//
// 1. The manual states no speed limit anywhere. Not a town figure, not a
//    highway figure, not an interstate maximum, not a school-zone number. The
//    25 mph unposted-urban limit is SDCL 32-25-12, the 65 mph general maximum
//    32-25-1.1, the 80 mph interstate maximum 32-25-4, the 15 mph school-zone
//    figure 32-25-14, and the 10 mph passing allowance 32-25-28.
// 2. The manual gives no distance for parking from a hydrant, a crosswalk or a
//    stop sign, because South Dakota has no statewide statute setting them -
//    those are municipal ordinances. Its own parking numbers (15 feet of road
//    width, visible 500 feet) conflict with SDCL 32-30-2 (20 feet, 200 feet),
//    and the one question that touches this avoids both figures.
// 3. The manual never says when headlights become compulsory. SDCL 32-17-4
//    sets it at sunset, not the half-hour-after-sunset rule most states use.
// 4. The manual says a knowledge test exists but gives neither its length nor
//    its pass mark. The 80% comes from DPS's own testing and FAQ pages.
//
// Two genuine conflicts are flagged where they arise. On school buses the
// manual excuses a driver only where "the roadway is separated by a physical
// barrier", while SDCL 32-32-6 excuses any driver meeting a bus on a highway
// with two or more lanes of travel in each direction - no barrier required.
// Questions on school buses are built on undivided two-lane roads, where both
// readings give the same answer. Separately, the manual prints two different
// truck stopping distances for the same 55 mph loaded truck, 290 feet on page
// 62 and 335 feet on page 63; no question turns on that number.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// department's own authoritative wording on the state's site.
const HB = "https://www.sd.gov/sys_attachment.do?sys_id=d8e0b08e47bd0390a497127ba26d4348";
const p = (n: number) => `${HB}#page=${n}`;
const sdcl = (s: string) => `https://sdlegislature.gov/Statutes/${s}`;
const TESTING = "https://www.sd.gov/dps?id=kb_article_view&sysparm_article=KB0043731";

export const southdakotaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "South Dakota Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in South Dakota: what the shapes and colors mean, who goes first, and the handful of numbers the Driver Licensing Program expects you to know cold before it will hand you an Instruction Permit.",
    questions: [
      {
        id: "sd_s1_01",
        topic: "signs",
        question:
          "You reach a red eight-sided sign at an intersection. Where does the South Dakota manual say you must stop?",
        choices: [
          "Anywhere before the middle of the intersection",
          "Level with the sign itself, always",
          "Behind the stop line or crosswalk if one is present, or before the sign if there is neither",
          "Wherever you can see cross traffic best, even past the sign",
        ],
        correctIndex: 2,
        explanation:
          "The octagon means a full stop, and the manual is specific about the order: the stop line first, then the crosswalk, then the sign. Only once you have stopped do you look in all directions and yield.",
        context:
          "South Dakota teaches signs by shape and color before words, because the shape is readable in a blizzard or in a language you do not read. The octagon is reserved for STOP, the downward triangle for YIELD, and a yellow diamond warns of something ahead. Learning the system beats memorizing pictures, because the test draws on signs the manual never illustrates.",
        trap:
          "Creeping up level with the sign to get a better look is not a stop. Stop first at the line, then edge forward if your view is blocked.",
        excerptKey: "stop-sign",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Stop Sign",
        sourceUrl: p(35),
      },
      {
        id: "sd_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in South Dakota and want to turn right. What does the manual allow?",
        choices: [
          "Turn right without stopping if nothing is coming",
          "Turn right after a complete stop, unless a sign prohibits it, yielding to everyone already there",
          "Turn right only when a green arrow appears",
          "Turn right only where a sign expressly permits it",
        ],
        correctIndex: 1,
        explanation:
          "Right on red is South Dakota's default rather than a special permission. Two things attach to it: you must actually stop first, and a sign forbidding the turn overrides the default. Having stopped, you still give way to pedestrians, bicyclists and traffic.",
        context:
          "The manual treats red as stop-and-stay-stopped with one carve-out, and it spells out what the carve-out costs you: stop first, yield to all traffic including pedestrians and bicyclists, then proceed safely and stay in your lane. A red arrow removes the permission for that movement entirely.",
        trap:
          "An empty road is not the test. If the wheels never stopped turning, the turn is unlawful at 3 a.m. on a deserted street.",
        excerptKey: "right-on-red",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
        commonlyMissed: true,
      },
      {
        id: "sd_s1_03",
        topic: "rightOfWay",
        question:
          "You and another driver reach an all-way stop at exactly the same moment, at right angles to each other. Who goes first?",
        choices: [
          "Whoever signals first",
          "The driver going straight, ahead of any turning driver",
          "The driver on the right",
          "The driver on the left, who is further from the crossing traffic",
        ],
        correctIndex: 2,
        explanation:
          "South Dakota's tie-breaker is the driver on your right. It only comes into play when arrival is genuinely simultaneous - if one of you clearly got there first, that driver goes.",
        context:
          "The manual lists right-of-way as a set of people you yield to, and the first entries handle intersections: the driver who is at or arrives before you, then the driver on your right at an all-way stop when you arrive together. Underneath it sits a warning the manual repeats - nobody should assume they automatically have the right-of-way.",
        trap:
          "Going straight does not outrank turning at an all-way stop. Order of arrival decides it, and the right-hand rule only breaks a tie.",
        excerptKey: "row-list-intersection",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Yielding Right-of-Way",
        sourceUrl: p(31),
        commonlyMissed: true,
      },
      {
        id: "sd_s1_04",
        topic: "safety",
        question:
          "What minimum following distance does the South Dakota manual tell you to keep in good conditions?",
        choices: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctIndex: 3,
        explanation:
          "South Dakota teaches four seconds, not the three that several neighboring states use. You start counting when the vehicle ahead passes a fixed object, and you should still be counting when you reach it.",
        context:
          "The manual walks the count out loud - one thousand one, one thousand two, one thousand three, one thousand four - and says you are too close if you reach the object before finishing. It then lists nine situations that need more than four seconds, including slippery roads, following a motorcycle, and towing a trailer.",
        trap:
          "Three seconds is the answer most people bring from another state or a driving app. South Dakota's own figure is four.",
        excerptKey: "following-four-seconds",
        sourceLabel:
          "South Dakota Driver License Manual - Safe Driving Tips: Providing an Adequate Following Distance",
        sourceUrl: p(51),
        commonlyMissed: true,
      },
      {
        id: "sd_s1_05",
        topic: "signals",
        question: "A traffic light ahead of you is flashing red. What must you do?",
        choices: [
          "Stop completely, then go when it is safe, exactly as at a stop sign",
          "Slow down and proceed with caution without stopping",
          "Stop and wait until the light stops flashing",
          "Treat it as a yield sign and merge with cross traffic",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red means the same thing as a stop sign. You come to a complete stop, then move off once the way is genuinely clear.",
        context:
          "South Dakota pairs the two flashing signals in the same paragraph so the difference is easy to hold: flashing red is a stop sign, flashing yellow is slow down and proceed with caution. Separately, a signal that is dark or out of operation is also treated as a stop sign.",
        trap:
          "Flashing red is not flashing yellow. Rolling through a flashing red is a stop-sign violation, worth three points on a South Dakota record.",
        excerptKey: "flashing-red",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
      {
        id: "sd_s1_06",
        topic: "speed",
        question:
          "You are driving through a South Dakota town on a street with no speed limit signs anywhere. What is the maximum lawful speed?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 1,
        explanation:
          "In an urban area that is not zoned or posted, state law fixes the maximum at 25 mph. It applies whether or not a sign confirms it, so an unmarked residential street in Sioux Falls or Pierre is a 25 zone.",
        context:
          "The manual prints no speed limit at all, so this number lives only in the statute. SDCL 32-25-12 sets the unposted urban maximum at 25 mph, 32-25-1.1 sets a general 65 mph maximum on streets and highways, and 32-25-4 allows 80 mph on the interstates. Everything else is set by posted zones.",
        trap:
          "Guessing 30 or 35 because that is what your home state uses is the single most common way out-of-state applicants lose a point here. South Dakota's default is 25.",
        excerptKey: "speed-25-urban",
        sourceLabel:
          "South Dakota Codified Laws 32-25-12 - Speed limit in unposted urban areas",
        sourceUrl: sdcl("32-25-12"),
        commonlyMissed: true,
      },
      {
        id: "sd_s1_07",
        topic: "licensing",
        question:
          "What is the youngest age at which South Dakota will issue an Instruction Permit?",
        choices: ["14", "15", "15 and a half", "16"],
        correctIndex: 0,
        explanation:
          "South Dakota issues an Instruction Permit at 14, one of the youngest starting ages in the country. You also have to pass the vision and knowledge tests and have a parent or guardian sign for you.",
        context:
          "The graduated system runs Instruction Permit at 14, Restricted Minor's Permit after the permit has been held long enough and the drive test is passed, then a full Operator's License at 16. A minor under 18 has to hold the Instruction Permit for 275 continuous days, or 180 if an approved driver education course has been completed.",
        trap:
          "Sixteen is the age for the full Operator's License, not for the permit. Mixing up the two stages is the classic licensing mistake on this test.",
        excerptKey: "permit-under-18",
        sourceLabel:
          "South Dakota Driver License Manual - The Driver's License: Types of Driver's Licenses and Driver's Permits",
        sourceUrl: p(8),
      },
      {
        id: "sd_s1_08",
        topic: "signs",
        question: "A yellow diamond-shaped sign with black symbols tells you what?",
        choices: [
          "A law you must obey at that point",
          "The distance to the next town",
          "Which services are available at the next exit",
          "There is a possible danger or special situation ahead",
        ],
        correctIndex: 3,
        explanation:
          "Yellow diamonds are warning signs. They tell you something is coming - a curve, a crossing, a merge - and that you may need to slow down or be ready to stop.",
        context:
          "South Dakota sorts signs by color as well as shape. Yellow diamonds warn, orange means a work zone, white rectangles with black, red or green lettering carry laws you must obey, and green, brown or blue rectangles guide you to places and services. Some warning signs are fluorescent yellow-green instead, and those mark school zones, school crossings and pedestrian crossings.",
        trap:
          "A warning sign is advice about a hazard, not a rule with a penalty attached. The rules live on the white regulatory signs.",
        excerptKey: "warning-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Warning Signs",
        sourceUrl: p(33),
      },
      {
        id: "sd_s1_09",
        topic: "rules",
        question:
          "An intersection has both a painted stop line and a marked crosswalk. Where do you stop?",
        choices: [
          "At the crosswalk, since pedestrians come first",
          "Behind the stop line, which must be obeyed first",
          "With your front bumper level with the crosswalk",
          "Anywhere that lets you see the cross street",
        ],
        correctIndex: 1,
        explanation:
          "When both markings are present the stop line comes first. The manual says so directly: if there is a stop line before the crosswalk, the stop line must be obeyed.",
        context:
          "Crosswalks mark where pedestrians may cross, and you must yield to anyone entering or already in one, marked or not. Stop lines sit further back deliberately, partly to leave room for large vehicles to swing through the turn. If there is no line and no visible crosswalk, you stop before entering the intersection.",
        trap:
          "Stopping on the crosswalk to see better puts you exactly where a pedestrian needs to walk. The line is behind it for a reason.",
        excerptKey: "stop-line-first",
        sourceLabel:
          "South Dakota Driver License Manual - Rules of the Road: Crosswalks and Stop Lines",
        sourceUrl: p(37),
      },
      {
        id: "sd_s1_10",
        topic: "sharing",
        question:
          "On an ordinary two-lane South Dakota road, a school bus ahead of you stops and its red lights begin flashing. What must you do?",
        choices: [
          "Slow to 15 mph and pass carefully on the left",
          "Stop only if you can see children beside the road",
          "Come to a complete stop and stay stopped until the red lights go out",
          "Sound your horn and continue at reduced speed",
        ],
        correctIndex: 2,
        explanation:
          "Red flashing lights or an extended stop arm mean a full stop from both directions on a two-lane road. You stay stopped until the lights stop flashing and the arm folds away, then move off slowly watching for children.",
        context:
          "State law adds a distance the manual does not print: the stopped vehicle must be at least fifteen feet from the bus. Amber lights are the warning stage - on a road with fewer than two lanes in each direction you must drop to 15 mph or less and pass with caution while they are flashing.",
        trap:
          "Seeing no children is not a reason to keep rolling. The stop is triggered by the lights, not by whether anyone is visible.",
        excerptKey: "school-bus-stop",
        sourceLabel: "South Dakota Driver License Manual - General Driving: Rules for School Buses",
        sourceUrl: p(43),
        commonlyMissed: true,
      },
      {
        id: "sd_s1_11",
        topic: "impairment",
        question:
          "At what blood alcohol concentration is a driver aged 21 or over presumed to be driving under the influence in South Dakota?",
        choices: ["0.02%", "0.04%", "0.05%", "0.08%"],
        correctIndex: 3,
        explanation:
          "0.08% is the adult threshold. The manual also warns that you can be convicted of impaired driving below that figure, because the law reaches actual impairment as well as the number.",
        context:
          "South Dakota runs two limits at once. Anyone in physical control of a vehicle at 0.08% or more is over the adult limit, and anyone under 21 is over the zero-tolerance limit at 0.02%. The manual notes that vision starts to suffer at 0.02% for every driver, whatever their age.",
        trap:
          "0.05% is where the manual says crash risk climbs sharply, but it is not the legal threshold for an adult. The number the test wants is 0.08%.",
        excerptKey: "bac-thresholds",
        sourceLabel:
          "South Dakota Driver License Manual - Be in Shape to Drive: Alcohol, Other Drugs, and Driving",
        sourceUrl: p(20),
      },
      {
        id: "sd_s1_12",
        topic: "parking",
        question:
          "You are parking parallel to the curb on a two-way street. How close to the curb must your right-hand wheels be?",
        choices: [
          "Within 12 inches",
          "Within 18 inches",
          "Within 2 feet",
          "Close enough that the car is not in a traffic lane",
        ],
        correctIndex: 0,
        explanation:
          "State law puts the right-hand wheels parallel to and within twelve inches of the curb or edge of the roadway. The manual's parallel-parking steps use the same figure as the target for a finished park.",
        context:
          "The manual finishes its parallel-parking sequence with the car inside 12 inches of the curb and at least 2 feet clear of the vehicles in front and behind. Away from a curb the general rule takes over: park as far from the flow of traffic as you can, and make sure other drivers can see you from both directions.",
        trap:
          "Eighteen inches is the figure several other states use. South Dakota's is twelve, and the drive test measures it.",
        excerptKey: "parking-12-inches-statute",
        sourceLabel: "South Dakota Codified Laws 32-30-2.1 - Position of parking on two-way road",
        sourceUrl: sdcl("32-30-2.1"),
      },
      {
        id: "sd_s1_13",
        topic: "emergencies",
        question:
          "You are approaching a police car stopped at the roadside with its red lights flashing. What does South Dakota law require?",
        choices: [
          "Slow to 20 mph below the posted limit and keep going",
          "Come to a complete stop before reaching it, then proceed with caution when it is safe",
          "Change lanes only if a lane is free, otherwise carry on at the limit",
          "Sound your horn so the officer knows you are passing",
        ],
        correctIndex: 1,
        explanation:
          "South Dakota's rule for red visual signals is a full stop, not just a slowdown. You stop before reaching the emergency vehicle, then move off with caution once you are sure it is safe, unless an officer directs you otherwise.",
        context:
          "The state splits the rule by light color. Red signals mean stop. Amber, yellow or blue warning lights on a stopped or shoulder-occupying vehicle mean move over a lane at least three hundred feet before it, or on a two-lane highway slow to at least 20 mph below the posted limit. Violating either is a Class 2 misdemeanor carrying a minimum fine of $270.",
        trap:
          "The slow-down-and-move-over answer is the rule for amber and blue lights. Red signals demand a stop, and this is printed on the inside front cover of the manual for a reason.",
        excerptKey: "move-over-stop",
        sourceLabel: "South Dakota Driver License Manual - Attention (inside front cover)",
        sourceUrl: p(2),
        commonlyMissed: true,
      },
      {
        id: "sd_s1_14",
        topic: "signals",
        question:
          "The light turns steady yellow as you approach an intersection and you have already entered it. What does the manual tell you to do?",
        choices: [
          "Stop immediately wherever you are",
          "Reverse back behind the stop line",
          "Continue through the intersection rather than stopping",
          "Stop only if a vehicle is following you",
        ],
        correctIndex: 2,
        explanation:
          "Yellow means the light is about to turn red and you stop if it is safe to do so. If you are already inside the intersection, the manual is explicit: do not stop, continue through.",
        context:
          "The advice recognises that stopping in an intersection creates a worse hazard than clearing it. Yellow arrows work the same way for turning traffic: the protection of the green arrow is ending, so prepare to stop and give way to oncoming vehicles before turning.",
        trap:
          "Hitting the brakes mid-intersection because the light changed is the answer that gets people rear-ended. The rule is stop before entering, or clear it.",
        excerptKey: "steady-yellow",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
      {
        id: "sd_s1_15",
        topic: "safety",
        question: "Who must wear a seat belt under South Dakota law?",
        choices: [
          "Only the driver",
          "Only the driver and any passenger under 18",
          "Everyone in the vehicle, in every seat",
          "The driver, every front-seat passenger, and every child under 18",
        ],
        correctIndex: 3,
        explanation:
          "South Dakota requires the driver and front-seat passengers to be belted, and extends the requirement to children under 18 wherever they sit. Adults in the back seat are not covered by the state requirement, though the manual urges everyone to buckle up.",
        context:
          "The manual states it twice, once as a plain rule that driving or riding in the front without a belt is illegal, and once with the age extension. Children aged 12 or younger belong in the back seat, and a rear-facing child seat must never go in front of an active passenger air bag.",
        trap:
          "Answering everyone in every seat overstates the law and answering driver only understates it. The line South Dakota draws is front seat plus anyone under 18.",
        excerptKey: "seatbelt-under-18",
        sourceLabel:
          "South Dakota Driver License Manual - Before You Drive: Front Seat Seatbelt Use Requirements",
        sourceUrl: p(26),
      },
      {
        id: "sd_s1_16",
        topic: "signs",
        question:
          "A reflective orange triangle is fixed to the back of the vehicle ahead of you. What does it mean?",
        choices: [
          "The vehicle is traveling less than 25 mph",
          "The vehicle is carrying hazardous material",
          "The vehicle is disabled and about to stop",
          "The vehicle is wider than a normal lane",
        ],
        correctIndex: 0,
        explanation:
          "The orange triangle is the slow-moving vehicle emblem. It marks anything traveling under 25 mph - farm machinery, construction equipment, a horse-drawn wagon.",
        context:
          "South Dakota is farm country and the manual devotes a section to it. Tractors, combines and animal-drawn vehicles usually run at 25 mph or less, the operator of farm machinery often cannot hear you coming, and you close on that emblem far faster than the gap suggests.",
        trap:
          "Reading the triangle as a hazard placard costs you the point. Hazardous-material loads carry rectangular diamond placards with numbers, not a plain orange triangle.",
        excerptKey: "slow-moving-vehicle-sign",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Slow Moving Vehicle",
        sourceUrl: p(36),
      },
      {
        id: "sd_s1_17",
        topic: "rightOfWay",
        question:
          "You are waiting inside an intersection to turn left on a steady green light. An oncoming car is approaching. What must you do?",
        choices: [
          "Complete the turn quickly, since you entered the intersection first",
          "Yield to the oncoming vehicle and turn only when there is a safe gap",
          "Sound your horn to claim the gap",
          "Reverse out of the intersection and wait for a green arrow",
        ],
        correctIndex: 1,
        explanation:
          "A steady green permits the turn but gives you no priority. Oncoming traffic has the right-of-way, so you wait in the intersection until a gap is genuinely safe.",
        context:
          "State law puts it in the same terms: a driver intending to turn left must yield to any vehicle coming from the opposite direction that is in the intersection or close enough to be an immediate hazard. A green arrow is the version that does clear the way for you, and there should be no oncoming or crossing traffic while it is lit.",
        trap:
          "Being first into the intersection does not create priority for a left turn. Only a green arrow, or a genuine gap, does.",
        excerptKey: "green-left-turn",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
      {
        id: "sd_s1_18",
        topic: "rules",
        question: "How far before a turn must you signal in South Dakota?",
        choices: [
          "50 feet",
          "As soon as you decide to turn, however far away",
          "100 feet",
          "Three seconds, measured by counting",
        ],
        correctIndex: 2,
        explanation:
          "The figure is 100 feet, and it appears in both the manual and the statute. At higher speeds the manual suggests four to five seconds ahead instead, because 100 feet passes very quickly on a highway.",
        context:
          "The manual also warns against signaling too early. If there are driveways or side streets between you and your turn, wait until you have passed them, or another driver may pull out expecting you to turn where they are. After the turn, check the signal has cancelled.",
        trap:
          "Signaling the moment you think of it sounds courteous and is specifically warned against. Too early misleads people as badly as too late.",
        excerptKey: "signal-100-feet",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Signaling Movements",
        sourceUrl: p(56),
      },
      {
        id: "sd_s1_19",
        topic: "sharing",
        question:
          "A pedestrian carrying a white cane starts to cross the street ahead of you. What must you do?",
        choices: [
          "Slow down and steer around them",
          "Sound your horn to warn them you are there",
          "Continue if you have a green light",
          "Come to a complete stop",
        ],
        correctIndex: 3,
        explanation:
          "A white cane or a guide dog means a complete stop, not a careful drive-around. The manual states it as an absolute: always yield the right-of-way to persons who are visually impaired.",
        context:
          "Pedestrian rules in South Dakota are broad. You yield to people crossing at intersections whether or not the crosswalk is painted, you yield to anyone in the intersection even on a green light, and when turning right or left on red you yield to pedestrians before you move.",
        trap:
          "Sounding the horn is exactly wrong here. A blind pedestrian is one of the situations where the manual tells you not to use the horn at all.",
        excerptKey: "white-cane-stop",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Pedestrians",
        sourceUrl: p(61),
      },
      {
        id: "sd_s1_20",
        topic: "signs",
        question:
          "White rectangular signs with black, red or green lettering belong to which family of signs?",
        choices: [
          "Regulatory signs, which carry laws you must obey",
          "Warning signs, which flag a hazard ahead",
          "Guide signs, which point you to towns and services",
          "Work zone signs, which mark road construction",
        ],
        correctIndex: 0,
        explanation:
          "White signs with black, red or green lettering are regulatory. They state specific laws about direction, lane use, turning, speed and parking, and disobeying one is a traffic offense.",
        context:
          "Some regulatory signs use a red circle with a slash over a symbol to prohibit something, and the family includes speed limit signs, the stop sign, the yield sign and the one-way sign. The colors are the shortcut: white regulates, yellow warns, orange means work zone, and green, brown and blue guide.",
        trap:
          "Speed limit signs are black and white and belong here, not with the warning signs. If a sign states a rule rather than a hazard, it is regulatory.",
        excerptKey: "regulatory-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Regulatory Signs",
        sourceUrl: p(35),
      },
      {
        id: "sd_s1_21",
        topic: "speed",
        question:
          "What is the maximum speed limit on South Dakota's interstate highways where no lower limit is posted?",
        choices: ["65 mph", "70 mph", "80 mph", "75 mph"],
        correctIndex: 2,
        explanation:
          "South Dakota allows 80 mph on the interstate system, one of only a handful of states that go that high. The Transportation Commission can post a lower limit on any stretch, and a posted limit always wins.",
        context:
          "The state has a ladder of maximums that the manual never prints: 80 mph on the interstates, 70 mph where the Transportation Commission has set it on a rural divided four-lane, 65 mph as the general maximum on other streets and highways, 55 mph on township roads, and 25 mph in an unposted urban area. There is also a 40 mph interstate minimum.",
        trap:
          "Seventy-five is the answer for several neighboring states. South Dakota raised its interstate maximum to 80 in 2015 and has not moved it since.",
        excerptKey: "speed-80-interstate",
        sourceLabel: "South Dakota Codified Laws 32-25-4 - Maximum speed on interstate highways",
        sourceUrl: sdcl("32-25-4"),
        commonlyMissed: true,
      },
      {
        id: "sd_s1_22",
        topic: "licensing",
        question: "What score do you need to pass the South Dakota knowledge test?",
        choices: ["70%", "80%", "85%", "90%"],
        correctIndex: 1,
        explanation:
          "The Department of Public Safety sets the pass mark at 80% for the knowledge test, and the same 80% applies to the driving test.",
        context:
          "The department publishes the pass mark but not the number of questions. Applicants consistently describe a 25-question multiple-choice test, which puts 80% at 20 correct. If you fail, you cannot retest before the next working day, and one fee buys three attempts inside six months.",
        trap:
          "Seventy percent is the figure a lot of practice sites carry over from other states. South Dakota's own testing page says 80%.",
        excerptKey: "knowledge-test-pass-mark",
        sourceLabel: "SD Department of Public Safety - Driver License Testing Information",
        sourceUrl: TESTING,
      },
      {
        id: "sd_s1_23",
        topic: "safety",
        question:
          "It starts raining hard and you switch on your windshield wipers in the middle of the afternoon. What does the manual tell you to do?",
        choices: [
          "Nothing - headlights are only needed after dark",
          "Switch on the parking lights, which are enough in daylight",
          "Use the hazard flashers so you can be seen from behind",
          "Turn the headlights on as well",
        ],
        correctIndex: 3,
        explanation:
          "The manual's rule of thumb is simple: if you turn on the wipers, turn on the headlights. Rain, snow and fog make your car hard for others to see, and headlights fix that far better than being visible to yourself does.",
        context:
          "South Dakota frames headlights as communication rather than illumination. The same section tells you to switch them on when driving away from a rising or setting sun so drivers facing the glare can see you, and reminds you that parking lights are for parked vehicles only.",
        trap:
          "Hazard flashers on a moving vehicle hide your turn signals and confuse everyone behind you. Save them for a vehicle that is stopped or disabled.",
        excerptKey: "wipers-headlights",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Communicating",
        sourceUrl: p(54),
      },
      {
        id: "sd_s1_24",
        topic: "emergencies",
        question:
          "You clip a parked car in a lot and the owner is nowhere to be found. What does the manual require?",
        choices: [
          "Contact the nearest law enforcement agency and leave a written note the owner can find",
          "Leave, since nobody was hurt and the damage is small",
          "Wait fifteen minutes and drive off if nobody appears",
          "Report it to your insurer only",
        ],
        correctIndex: 0,
        explanation:
          "Damaging an unattended vehicle puts two duties on you: notify law enforcement, and leave your details where the owner will see them. The manual is blunt that leaving the scene is against the law.",
        context:
          "The note has to carry your name, address and phone number, your driver license number, your license plate number, the date and time, and the damage caused. Above a threshold of $1,000 to one person's property or $2,000 in total, state law also requires immediate notice to the nearest law enforcement officer.",
        trap:
          "Assuming a small dent in an empty parking lot is nobody's business is how a minor scrape becomes a hit-and-run charge.",
        excerptKey: "unattended-property-damage",
        sourceLabel:
          "South Dakota Driver License Manual - Emergency Situations: Damaging Unattended Vehicles",
        sourceUrl: p(60),
      },
      {
        id: "sd_s1_25",
        topic: "signals",
        question: "What does a green arrow signal mean?",
        choices: [
          "You may turn if you first yield to oncoming traffic",
          "You may turn in the direction of the arrow, with no oncoming or crossing traffic to expect",
          "The turn is about to be prohibited",
          "You may turn only after coming to a complete stop",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow is a protected movement. The signal is holding back oncoming and crossing traffic, so the turn is yours - though pedestrians can still be in the crosswalk.",
        context:
          "South Dakota also uses a flashing yellow arrow for the unprotected version of the same turn: you may enter the intersection and turn when it is safe, after yielding to oncoming traffic and pedestrians, because oncoming traffic has a green light. A steady yellow arrow means that protection is ending.",
        trap:
          "Treating a green arrow like a plain green light and waiting for a gap holds up everyone behind you. The arrow means the gap has already been made.",
        excerptKey: "green-arrow",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
      {
        id: "sd_s1_26",
        topic: "rules",
        question: "You are entering a roundabout. Who has the right-of-way?",
        choices: [
          "Traffic waiting to enter from the road on your right",
          "Whichever driver reaches the yield line first",
          "Traffic already circulating in the roundabout, approaching from your left",
          "Nobody - roundabouts are first come, first served",
        ],
        correctIndex: 2,
        explanation:
          "Traffic already in the roundabout has priority, and because circulation is counterclockwise it reaches you from the left. You yield to pedestrians and bicyclists first, then wait for a safe gap in the circulating traffic.",
        context:
          "The manual gives seven numbered steps: slow down and obey the signs, yield to pedestrians and bicyclists, yield to traffic on your left already in the roundabout, enter on a safe gap, keep your speed low inside, signal right as you approach your exit, and yield again to pedestrians and bicycles on the way out.",
        trap:
          "Importing the right-hand rule from a four-way stop reverses the answer. In a roundabout the traffic that matters is on your left.",
        excerptKey: "roundabout-steps",
        sourceLabel: "South Dakota Driver License Manual - General Driving: Roundabouts",
        sourceUrl: p(40),
      },
      {
        id: "sd_s1_27",
        topic: "impairment",
        question:
          "A 19-year-old driver is stopped in South Dakota and tests at 0.03% BAC. What has happened?",
        choices: [
          "Nothing - they are under the 0.08% adult limit",
          "They face a warning only, since it is a first offense",
          "They are treated as an adult DWI at 0.08%",
          "They have broken the zero-tolerance law, which starts at 0.02%",
        ],
        correctIndex: 3,
        explanation:
          "Anyone under 21 is over the line at 0.02%. A first offense is a Class 2 misdemeanor carrying a fine and a 30-day loss of license, and a second costs 180 days.",
        context:
          "The manual pairs the two limits deliberately. The adult threshold is 0.08% and the under-21 threshold is 0.02%, a level reachable on a single drink. Refusing the chemical test is worse again: implied consent applies the moment you drive on a public highway, and refusal costs a year.",
        trap:
          "The 0.08% figure applies to drivers 21 and over. A driver under 21 is caught four times lower, which is the point of the zero-tolerance rule.",
        excerptKey: "zero-tolerance-penalty",
        sourceLabel: "South Dakota Driver License Manual - Be in Shape to Drive: PENALTIES",
        sourceUrl: p(20),
        commonlyMissed: true,
      },
      {
        id: "sd_s1_28",
        topic: "sharing",
        question:
          "You are overtaking a bicycle on a street posted at 30 mph. What is the minimum separation South Dakota law requires?",
        choices: ["Three feet", "Four feet", "Six feet", "A full lane"],
        correctIndex: 0,
        explanation:
          "Three feet is the minimum where the posted limit is 35 mph or less. Above 35 mph the requirement doubles to six feet, and the gap is measured from your mirror to the cyclist.",
        context:
          "The statute is reprinted in the manual twice. It measures from the right side of your vehicle, including any mirror or projection, to the left side of the bicycle, and it lets you partially cross the centerline to make the room if that can be done safely. You have to hold the separation until you are safely past.",
        trap:
          "Six feet is the figure for roads posted above 35 mph. Applying it to a 30 mph street is not wrong on the road, but it is the wrong answer to this question.",
        excerptKey: "bicycle-3-and-6-feet",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Bicyclists",
        sourceUrl: p(62),
        commonlyMissed: true,
      },
      {
        id: "sd_s1_29",
        topic: "parking",
        question:
          "You are parking facing downhill on a street with a curb. Which way do you turn the front wheels?",
        choices: [
          "Straight ahead, with the parking brake set",
          "Sharply to the left, into the road",
          "Sharply to the right, toward the curb",
          "It does not matter as long as the car is in park",
        ],
        correctIndex: 2,
        explanation:
          "Facing downhill, the wheels go sharply right so that a rolling car turns into the curb rather than into traffic. The same right-hand turn applies uphill when there is no curb at all.",
        context:
          "South Dakota's rule has two branches: wheels sharply left only when you are facing uphill with a curb, wheels sharply right when facing downhill or when there is no curb either way. Then set the parking brake and leave an automatic in park, or a manual in reverse downhill and in the lowest gear uphill.",
        trap:
          "Turning the wheels left downhill points a runaway car straight into the traffic lane. Left is only for uphill with a curb to catch the tire.",
        excerptKey: "hill-parking-downhill",
        sourceLabel: "South Dakota Driver License Manual - General Driving: Parking on a hill",
        sourceUrl: p(43),
      },
      {
        id: "sd_s1_30",
        topic: "signs",
        question:
          "The side-by-side lights at a railroad crossing begin flashing alternately as you approach. What must you do?",
        choices: [
          "Speed up to clear the crossing before the gates come down",
          "Stop, and wait until the lights stop flashing before crossing",
          "Look both ways and cross if no train is visible",
          "Stop only if a gate has already started to lower",
        ],
        correctIndex: 1,
        explanation:
          "Flashing crossing lights mean stop. If a gate is lowering you must not drive around it, and if there is a bell or horn you wait until it has stopped before you cross.",
        context:
          "South Dakota uses the round yellow advance-warning sign with the X and RR letters to tell you a crossing is coming, and the white X-shaped crossbuck at the crossing itself. Some crossings post the number of tracks, and the manual warns that not all crossings have lights at all.",
        trap:
          "A clear view of the track is not permission when the lights are flashing. More than one track means a second train can be hidden by the first.",
        excerptKey: "railroad-flashing-lights",
        sourceLabel:
          "South Dakota Driver License Manual - Rules of the Road: Railroad Crossing Warning Signs",
        sourceUrl: p(34),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Thirty questions on the rules that decide most of the knowledge test: lane discipline, signals, who yields to whom, the numbers behind South Dakota's speed limits, and the safe-driving technique the manual spends half its pages teaching.",
    questions: [
      {
        id: "sd_s2_01",
        topic: "rules",
        question:
          "On a two-lane highway with no markings or signs, which part of the road must you drive on?",
        choices: [
          "Whichever half has the better surface",
          "The right half of the highway",
          "The center, moving over only when you meet a vehicle",
          "The left half, so you can see oncoming traffic sooner",
        ],
        correctIndex: 1,
        explanation:
          "State law requires you to keep to the right half of any highway wide enough for it, except on a one-way street. The exception is passing, and even then you return to the right as soon as you are safely clear.",
        context:
          "Where two vehicles meet from opposite directions, each has to leave the other at least half of the main-traveled portion of the roadway. Slow-moving vehicles have to keep as close to the right-hand edge or curb as they practically can.",
        trap:
          "Drifting toward the center on a bad rural surface is how head-on collisions happen. The manual tells you to center the vehicle in the lane on narrow roads, not straddle the middle.",
        excerptKey: "right-half-statute",
        sourceLabel: "South Dakota Codified Laws 32-26-1 - Use of right half of highway required",
        sourceUrl: sdcl("32-26-1"),
      },
      {
        id: "sd_s2_02",
        topic: "signals",
        question: "A traffic light ahead of you is flashing yellow. What does it mean?",
        choices: [
          "Slow down and proceed with caution",
          "Stop completely, then proceed when clear",
          "The light is faulty and you should stop as at a stop sign",
          "Prepare to stop for a red light in a few seconds",
        ],
        correctIndex: 0,
        explanation:
          "Flashing yellow is a caution signal, not a stop. You slow down, look, and go through when it is safe.",
        context:
          "The pair is easy to hold once you learn them together: flashing red means the same as a stop sign, flashing yellow means slow down and proceed with caution. A signal that is completely dark is different again - the manual treats an unlighted signal as a stop sign.",
        trap:
          "Stopping dead at a flashing yellow is not just unnecessary, it surprises the driver behind you and invites a rear-end collision.",
        excerptKey: "flashing-yellow",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
      {
        id: "sd_s2_03",
        topic: "rightOfWay",
        question:
          "You are pulling out of a private driveway onto a public street. Who must yield?",
        choices: [
          "The street traffic, because you are already moving",
          "Neither - it is first come, first served",
          "You must yield to all vehicles approaching on the street",
          "The nearest vehicle only, not any behind it",
        ],
        correctIndex: 2,
        explanation:
          "A driver entering or crossing a public highway from an alley, building, private road or driveway yields to everything already on the highway. Being partly out into the lane does not create priority.",
        context:
          "Within a business or residence district state law also makes you stop before you cross the sidewalk, or if there is no sidewalk, at the point nearest the street where you can see approaching traffic. The manual's right-of-way list carries the same rule in plainer words.",
        trap:
          "Nosing out to force a gap is not the same as having one. The yield duty covers every vehicle on the street, not just the first one you can see.",
        excerptKey: "row-driveway-statute",
        sourceLabel:
          "South Dakota Codified Laws 32-26-14 - Entry of highway from alley, building or private road",
        sourceUrl: sdcl("32-26-14"),
      },
      {
        id: "sd_s2_04",
        topic: "speed",
        question:
          "You are on a two-lane state highway in South Dakota with no speed limit signs in sight. What is the general statutory maximum?",
        choices: ["55 mph", "70 mph", "75 mph", "65 mph"],
        correctIndex: 3,
        explanation:
          "Sixty-five miles per hour is the general maximum on a street or highway in South Dakota. The interstate maximum of 80 mph and any lower posted limit are the exceptions to it.",
        context:
          "The number never appears in the manual, which prints no speed limit anywhere. It comes from SDCL 32-25-1.1. A township road, which is the gravel-grid road that covers most of the state's mileage, is capped lower at 55 mph, and an unposted urban area at 25.",
        trap:
          "Seventy applies only where the Transportation Commission has posted it on a rural divided four-lane. Without a sign, the general maximum is 65.",
        excerptKey: "speed-65-default",
        sourceLabel: "South Dakota Codified Laws 32-25-1.1 - Maximum daytime speed",
        sourceUrl: sdcl("32-25-1.1"),
      },
      {
        id: "sd_s2_05",
        topic: "safety",
        question: "Where does the South Dakota manual tell you to place your hands on the wheel?",
        choices: [
          "At 10 and 2 o'clock",
          "At 3 and 9 o'clock",
          "At 8 and 4 o'clock, resting in your lap",
          "One hand at 12 o'clock, the other free",
        ],
        correctIndex: 1,
        explanation:
          "The current manual teaches 3 and 9, hands on opposite sides of the outside of the wheel. It goes further and says 10 and 2 is no longer recommended, because an airbag deploying through your forearms causes serious injury.",
        context:
          "The same passage tells you to grip firmly but gently, use your fingers rather than your palms, keep your thumbs up along the face of the wheel, and never turn the wheel while gripping it from the inside. Sharp corners are turned hand over hand, and you straighten the wheel by hand rather than letting it slip back.",
        trap:
          "Ten and two is what most parents were taught and it is now the wrong answer in South Dakota. The manual names it specifically as no longer recommended.",
        excerptKey: "hands-3-and-9",
        sourceLabel: "South Dakota Driver License Manual - Basic Driving: Steering, Hand Position",
        sourceUrl: p(29),
        commonlyMissed: true,
      },
      {
        id: "sd_s2_06",
        topic: "signs",
        question: "What does a red and white downward-pointing triangle require of you?",
        choices: [
          "Slow down and yield the right-of-way, stopping if necessary",
          "Come to a complete stop every time",
          "Merge left at the first opportunity",
          "Watch for pedestrians crossing ahead",
        ],
        correctIndex: 0,
        explanation:
          "A yield sign means slow to a speed reasonable for the conditions and give way to traffic in the intersection you are crossing or the road you are entering. You stop only if stopping is what it takes to yield.",
        context:
          "State law adds a sharp consequence: if you drive past a yield sign without stopping and then collide with a pedestrian in a crosswalk or a vehicle in the intersection, the collision itself is prima facie evidence that you failed to yield. Once you have yielded and moved off, other drivers approaching the intersection must yield to you.",
        trap:
          "Treating a yield like a stop sign every time slows traffic and can cause a rear-end collision. Treating it as advisory is worse, and the collision rule makes the fault obvious.",
        excerptKey: "yield-sign",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Yield Sign",
        sourceUrl: p(35),
      },
      {
        id: "sd_s2_07",
        topic: "parking",
        question:
          "You are leaving your car parked on a slope. What does South Dakota law require beyond putting it in park?",
        choices: [
          "Nothing further, if the transmission is in park",
          "Leave the hazard flashers on",
          "Chock a wheel with a stone or block",
          "Set the brake and turn the front wheels to the curb or side of the highway",
        ],
        correctIndex: 3,
        explanation:
          "For an unattended vehicle the statute requires the brake to be set effectively, and on any grade the front wheels turned to the curb or side of the road. That way a car that does start to roll goes off the road rather than down it.",
        context:
          "The manual's version is the familiar hill-parking drill: wheels sharply left facing uphill with a curb, sharply right facing downhill or where there is no curb at all, then the emergency brake and park, or reverse downhill and low gear uphill in a manual. It also warns that in hard cold the parking brake can freeze on, so you may choose to leave it off and rely on the gear.",
        trap:
          "Park alone is a transmission pawl, not a brake. It is what fails first when a car is parked on a South Dakota hill in winter.",
        excerptKey: "unattended-vehicle-statute",
        sourceLabel: "South Dakota Codified Laws 32-30-5 - Safeguarding of unattended vehicle",
        sourceUrl: sdcl("32-30-5"),
      },
      {
        id: "sd_s2_08",
        topic: "sharing",
        question: "How much room is a motorcyclist entitled to on a South Dakota road?",
        choices: [
          "Half a lane, so a car may share the other half",
          "Only the width of the machine plus a margin",
          "A full lane width, which you must not share",
          "Whatever is left after larger vehicles have taken their space",
        ],
        correctIndex: 2,
        explanation:
          "A motorcycle gets a full lane and you do not share it. The rider needs the width to move within the lane and react to hazards a car would simply drive over.",
        context:
          "The manual asks you to follow a motorcycle at four seconds minimum, more in the wet, and warns that motorcycle signals often do not self-cancel, so a flashing indicator is not proof of a turn. Riders change position inside the lane to dodge potholes, gravel, pavement seams and railroad crossings that can put them down.",
        trap:
          "A motorcycle taking up only part of the lane is not an invitation to share it. Lane-sharing is exactly what the manual tells you not to do.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Motorcyclists",
        sourceUrl: p(62),
      },
      {
        id: "sd_s2_09",
        topic: "impairment",
        question:
          "A police officer lawfully asks you for a chemical test and you refuse. What happens to your license?",
        choices: [
          "It can be revoked for one year",
          "Nothing until you are convicted of DWI",
          "It is suspended for thirty days",
          "You are fined but keep your license",
        ],
        correctIndex: 0,
        explanation:
          "Refusal costs a year. South Dakota's implied consent law treats driving on a public highway as consent to a lawfully requested test, so refusing is its own offense with its own penalty.",
        context:
          "The manual states it in one line - you can lose your license for one year if you refuse to take a BAC test - and adds that implied consent follows the state you were arrested in, not the state that issued your license. The test itself may be of breath, blood or urine.",
        trap:
          "Refusing to blow does not make the case go away. It replaces one penalty with another that is often longer than the suspension a first DWI would carry.",
        excerptKey: "implied-consent-refusal",
        sourceLabel: "South Dakota Driver License Manual - Be in Shape to Drive: Alcohol and the Law",
        sourceUrl: p(20),
      },
      {
        id: "sd_s2_10",
        topic: "emergencies",
        question: "Your car begins to skid on an icy road. What does the manual tell you to do?",
        choices: [
          "Brake hard to shorten the slide",
          "Take your foot off the brake or accelerator and look where you want to go",
          "Steer sharply in the opposite direction to the skid",
          "Pull the parking brake to straighten the car",
        ],
        correctIndex: 1,
        explanation:
          "Release whichever pedal you are on and fix your eyes where you want the car to end up. Your hands follow your eyes, which is why the manual reduces skid recovery to those two steps.",
        context:
          "Skids come from going too fast for the conditions, stopping too suddenly, or tires that have simply run out of grip. Once you are skidding you have very little control, so the real defense is the speed you chose before it started - the manual tells you to drive well below the posted limit in winter, since posted limits assume dry summer pavement.",
        trap:
          "Braking harder is the instinct and it makes the skid worse by keeping the wheels locked. The manual's first instruction is to come off the pedal.",
        excerptKey: "skid-recovery",
        sourceLabel:
          "South Dakota Driver License Manual - Emergency Situations: Dealing with Skids",
        sourceUrl: p(57),
      },
      {
        id: "sd_s2_11",
        topic: "rules",
        question:
          "Traffic on a two-lane highway has backed up behind a slow truck and the shoulder is wide and paved. What does the manual say about using it to get past?",
        choices: [
          "It is allowed if the shoulder is paved",
          "It is allowed if you signal first",
          "It is allowed at under 25 mph",
          "Never pass on the shoulder, paved or not",
        ],
        correctIndex: 3,
        explanation:
          "The manual bans shoulder passing outright, and adds that paving makes no difference. Passing happens in the left lane on a multi-lane road, or in the oncoming lane on a two-lane road when it is legal and clear.",
        context:
          "State law says the same thing from the other side: you may pass on the right only in specific circumstances, such as when the vehicle ahead is turning left or the road has two or more lanes in each direction, and in no event by driving off the pavement or main traveled portion of the roadway.",
        trap:
          "A wide, smooth shoulder feels like an extra lane, especially on a rural South Dakota highway. It is not, and using it is an improper-passing charge worth four points.",
        excerptKey: "left-lane-for-passing",
        sourceLabel: "South Dakota Driver License Manual - General Driving: Passing",
        sourceUrl: p(46),
      },
      {
        id: "sd_s2_12",
        topic: "licensing",
        question:
          "You are driving in South Dakota and your license is at home on the kitchen table. What is the position?",
        choices: [
          "That is fine as long as you can recite your license number",
          "That is fine if a licensed adult is with you",
          "You are breaking the law - the license must be in your immediate possession",
          "You have 24 hours to produce it at a law enforcement office",
        ],
        correctIndex: 2,
        explanation:
          "South Dakota law requires every licensee to have the license in their immediate possession while operating a motor vehicle, and to display it on demand to a peace officer, judge or magistrate.",
        context:
          "The manual repeats the requirement twice, once in the licensing requirements and once as a standalone note. A permit holder is under the same duty, and the Restricted Minor's Permit is specifically described as entitling you to drive while you have it in your immediate physical possession.",
        trap:
          "Knowing the number is not carrying the card. The requirement is possession, and it applies every time the vehicle moves.",
        excerptKey: "carry-licence",
        sourceLabel:
          "South Dakota Driver License Manual - The Driver's License: Licensing Requirements",
        sourceUrl: p(5),
      },
      {
        id: "sd_s2_13",
        topic: "signs",
        question: "What does an orange sign with black lettering or symbols tell you?",
        choices: [
          "A detour is mandatory ahead",
          "You are entering or approaching a work zone",
          "The road ahead is closed to all traffic",
          "A slow-moving vehicle is operating nearby",
        ],
        correctIndex: 1,
        explanation:
          "Orange is South Dakota's work-zone color. Those signs warn that construction, maintenance or emergency work is happening on or near the roadway and that people may be working there.",
        context:
          "Work zones use drums, cones, tubes and barricades to steer you, and a flagger's instructions have to be obeyed like any other traffic control. Reduce your speed even when no workers are visible, because narrow lanes and rough pavement are hazards on their own. Fines for speeding in a work zone may be doubled.",
        trap:
          "Orange means work zone whatever the shape. A diamond orange sign and a rectangular orange sign belong to the same family.",
        excerptKey: "work-zone-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Work Zone Signs",
        sourceUrl: p(34),
      },
      {
        id: "sd_s2_14",
        topic: "signals",
        question:
          "You arrive at an intersection where the traffic signal is completely dark after a power cut. How do you treat it?",
        choices: [
          "As a stop sign - stop, then proceed when safe",
          "As a green light, since nothing is telling you to stop",
          "As a yield sign, slowing but not stopping",
          "As a four-way stop only if other cars are waiting",
        ],
        correctIndex: 0,
        explanation:
          "A signal that is out of operation or completely unlighted is treated as a stop sign. You stop, then proceed in turn when the way is clear.",
        context:
          "The manual sets out three cases for a malfunctioning signal, keyed to the aspect you are facing. Green may proceed with caution, yellow may proceed with caution, and red or completely unlighted means stop in the same manner as at a stop sign.",
        trap:
          "A dark signal is not a free intersection. Every approach is stopping, so it behaves like an all-way stop and the right-hand rule breaks ties.",
        excerptKey: "signal-out-of-operation",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
      {
        id: "sd_s2_15",
        topic: "safety",
        question:
          "The manual gives a specific body position for backing a car out of a space. What is it?",
        choices: [
          "Both hands at 3 and 9, eyes on the mirrors",
          "Left hand at 12 o'clock, right hand on the gear lever",
          "Left hand at 12 o'clock, right arm on the back of the passenger seat, looking through the rear window",
          "Turned fully to the right with both hands on the wheel",
        ],
        correctIndex: 2,
        explanation:
          "The manual describes it step by step: foot on the brake, shift to reverse, left hand at 12 o'clock, right arm across the back of the passenger seat, and look directly through the rear window. Mirrors help, but they do not show the ground immediately behind the car.",
        context:
          "The section is repeated later under visual search, where the manual adds that you should not depend on the rearview or side mirrors at all when backing, that you should check behind the vehicle before you even get in because children and small objects are invisible from the seat, and that a helper outside the car is better again.",
        trap:
          "Relying on mirrors or a backup camera is the answer the modern car encourages and the answer this manual specifically rejects. It is also a question South Dakotans report being asked.",
        excerptKey: "backing-right-arm",
        sourceLabel: "South Dakota Driver License Manual - Basic Driving: Backing Up",
        sourceUrl: p(30),
        commonlyMissed: true,
      },
      {
        id: "sd_s2_16",
        topic: "rules",
        question: "Where does the manual say a U-turn is prohibited?",
        choices: [
          "On any road with a center line",
          "At any intersection controlled by a traffic signal",
          "Within a mile of a school",
          "Mid-block on a business district street, and at any intersection where an officer is directing traffic",
        ],
        correctIndex: 3,
        explanation:
          "The manual lists the situations: mid-block in a business district or on a through highway in a residential district, at an intersection where a police officer is controlling traffic unless told to, where a sign bans it, near the crest of a hill or on a curve, and anywhere it cannot be done safely.",
        context:
          "The hill and curve entry carries a distance: no U-turn on an undivided highway where another driver approaching from any direction could not see you 500 feet away. A divided street with a legal opening or crossover is the exception to the mid-block ban.",
        trap:
          "A signal-controlled intersection is not automatically a no-U-turn intersection in South Dakota. It is the officer directing traffic, or a posted sign, that removes the option.",
        excerptKey: "u-turn-midblock",
        sourceLabel: "South Dakota Driver License Manual - General Driving: U-Turns",
        sourceUrl: p(39),
      },
      {
        id: "sd_s2_17",
        topic: "rightOfWay",
        question:
          "An ambulance comes up behind you with lights flashing and siren sounding. What should you do?",
        choices: [
          "Speed up to clear the intersection ahead of it",
          "Pull over to the edge of the road and let it pass, keeping intersections clear",
          "Stop exactly where you are, whatever is around you",
          "Move left so it can pass on the right",
        ],
        correctIndex: 1,
        explanation:
          "You yield by pulling to the edge of the road so the emergency vehicle can get past, and you avoid blocking intersections while doing it. Stopping in the middle of an intersection is worse than useless.",
        context:
          "In a roundabout the manual gives a separate instruction: if you have not entered yet, pull over and wait, and if you are already circulating, carry on to your exit and pull over there rather than stopping inside the ring. An emergency vehicle may pass a red light or stop sign, but only after slowing enough to do it safely.",
        trap:
          "Racing an ambulance to the next intersection puts you in the one place it needs to be. Slow down and let it choose the line.",
        excerptKey: "emergency-vehicle-yield",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Emergency Vehicles",
        sourceUrl: p(64),
      },
      {
        id: "sd_s2_18",
        topic: "speed",
        question: "What does the manual say about speeding fines in a work zone?",
        choices: [
          "They may be doubled",
          "They are the same as anywhere else",
          "They are tripled if workers are present",
          "They carry an automatic license suspension",
        ],
        correctIndex: 0,
        explanation:
          "Fines for speeding in a work zone may be doubled. The manual pairs that with the instruction to reduce speed in every work zone, whether or not workers are visible.",
        context:
          "Around 40,000 people a year are injured in work zone crashes nationally. The manual asks you to increase following distance, be ready to stop, use extreme caution at night, adjust your lane position away from workers and equipment, and keep obeying the posted work zone signs until you see the End Road Work sign.",
        trap:
          "The doubling does not depend on workers being present. An empty work zone at 2 a.m. carries the same exposure.",
        excerptKey: "work-zone-fines-doubled",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Work Zone Signs",
        sourceUrl: p(34),
      },
      {
        id: "sd_s2_19",
        topic: "parking",
        question:
          "You need to stop on a rural South Dakota highway and there is a wide, firm shoulder available. What does state law require?",
        choices: [
          "Stop in the traffic lane with your hazard lights on",
          "Stop wherever you can see 500 feet in both directions",
          "Stop only in a marked pull-out",
          "Get off the paved or main-traveled portion of the highway, since it is practical to do so",
        ],
        correctIndex: 3,
        explanation:
          "Outside a business or residence district you may not stop, park or leave a vehicle standing on the paved or main-traveled portion of a highway when it is practical to get off it. A usable shoulder makes it practical.",
        context:
          "The manual and the statute both add that a parked vehicle must leave room for other traffic to pass and be visible from a distance in each direction, and that parking lights and taillights go on if it is dark. A genuinely disabled vehicle that cannot be moved is excused, but you must switch on the emergency lamps and arrange to have it removed.",
        trap:
          "Hazard flashers do not license you to stop in a live traffic lane. They are what you use once the car is off the road, or when it truly cannot be moved.",
        excerptKey: "parking-rural-statute",
        sourceLabel:
          "South Dakota Codified Laws 32-30-1 - Stopping or parking on rural highway prohibited",
        sourceUrl: sdcl("32-30-1"),
      },
      {
        id: "sd_s2_20",
        topic: "sharing",
        question:
          "A semi ahead of you swings wide to the left before turning right at an intersection. What should you do?",
        choices: [
          "Move into the gap on its right to take the turn first",
          "Sound your horn to tell the driver they are in the wrong lane",
          "Hold back and wait until the truck has completed the turn",
          "Pass on the left while the truck is committed to the right",
        ],
        correctIndex: 2,
        explanation:
          "The wide swing is how a long vehicle clears the curb. The gap it opens on the right is the space the trailer is about to sweep through, so anything sitting in it gets crushed against the curb.",
        context:
          "The manual describes the No-Zone around trucks and buses: a blind spot on the right that starts behind the cab and runs the length of the trailer, another extending up to 200 feet behind, and a third in front. If you cannot see the driver's face in their mirror, they cannot see you.",
        trap:
          "The opening looks like an invitation and it is the single most dangerous place to be beside a turning truck.",
        excerptKey: "truck-do-not-squeeze",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Turning",
        sourceUrl: p(63),
      },
      {
        id: "sd_s2_21",
        topic: "safety",
        question:
          "You are driving at night on high beams and a car appears coming the other way. When must you dim them?",
        choices: [
          "Within 500 feet of the oncoming vehicle",
          "Within 200 feet of the oncoming vehicle",
          "Only once the other driver flashes you",
          "Only inside city limits",
        ],
        correctIndex: 0,
        explanation:
          "The manual sets the figure at 500 feet, about one city block. The same 500 feet applies when you are following another vehicle - inside that distance you drop to low beams.",
        context:
          "State law reaches the same result differently: you must tilt the beams down whenever you meet or overtake another vehicle, and whenever the road is lit well enough to reveal a person 200 feet ahead. Low beams also go on in fog, heavy rain and snow, because high beams reflect back and make it harder to see.",
        trap:
          "Waiting for the other driver to flash first is not a rule, it is a habit. The distance obligation is on you.",
        excerptKey: "dim-500-feet-oncoming",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Communicating",
        sourceUrl: p(55),
      },
      {
        id: "sd_s2_22",
        topic: "signs",
        question: "Green, brown or blue rectangular signs belong to which family?",
        choices: [
          "Warning signs",
          "Guide signs, which give directions, distances and services",
          "Regulatory signs",
          "Railroad crossing signs",
        ],
        correctIndex: 1,
        explanation:
          "Green, brown and blue rectangles are guide signs. They name intersecting roads, point you to towns, mark points of interest, and show where hospitals, fuel and rest areas are.",
        context:
          "Within the family the colors split further. Blue signs with white lettering are service signs for rest areas, gas, campgrounds and hospitals. Green and brown signs with white lettering are destination signs, giving directions and distances to cities, airports, state lines, parks and historic sites.",
        trap:
          "Blue is easy to mistake for a regulatory color because it looks official. Blue means services, and it never carries a rule.",
        excerptKey: "guide-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Guide Signs",
        sourceUrl: p(36),
      },
      {
        id: "sd_s2_23",
        topic: "emergencies",
        question:
          "You need to make an emergency stop in a car fitted with anti-lock brakes. What does the manual tell you to do with the pedal?",
        choices: [
          "Pump it rapidly",
          "Press hard, then release when it starts to vibrate",
          "Press gently to avoid triggering the system",
          "Press as hard as you can and keep the pressure on",
        ],
        correctIndex: 3,
        explanation:
          "With ABS you press hard and hold. The pedal will vibrate and may click, which is the system working, and holding the pressure is what keeps it working while you steer around the hazard.",
        context:
          "The manual lists three ways out of a crash - braking, steering and accelerating - and treats all three as real options. Swerving is described in its own right: both hands firm on the wheel, steer where you want to go, then steer back the other way to straighten up before you slow.",
        trap:
          "Pumping the pedal is the pre-ABS technique and it defeats the system. Releasing when the pedal buzzes stops the very thing that is saving you.",
        excerptKey: "abs-how-to-use",
        sourceLabel: "South Dakota Driver License Manual - Emergency Situations: Braking",
        sourceUrl: p(57),
      },
      {
        id: "sd_s2_24",
        topic: "impairment",
        question:
          "At what blood alcohol level does the manual say vision starts to be affected, for drivers of any age?",
        choices: ["0.08%", "0.05%", "0.02%", "0.10%"],
        correctIndex: 2,
        explanation:
          "The manual puts the onset of vision impairment at 0.02% BAC for all drivers, which is well below the adult legal limit. It also names vision as the most important sense used in driving.",
        context:
          "Alcohol degrades four things the manual lists by name: judgment, vision, the ability to distinguish colors, and reaction time. Blurred vision, slowed focus, double vision and a worse sense of distance and speed all come from the same drink.",
        trap:
          "0.02% is also the under-21 legal limit, which makes it easy to file away as a young-driver number. The vision effect applies to every driver.",
        excerptKey: "alcohol-vision-002",
        sourceLabel:
          "South Dakota Driver License Manual - Be in Shape to Drive: Effects of Alcohol and Other Impairing Drugs",
        sourceUrl: p(20),
      },
      {
        id: "sd_s2_25",
        topic: "rules",
        question:
          "A lane in the middle of the road is marked on each side by a solid yellow line with a dashed yellow line inside it, and carries left-turn arrows pointing both ways. What is it for?",
        choices: [
          "Passing slower traffic in either direction",
          "Left turns and permitted U-turns by traffic from either direction",
          "Emergency vehicles only",
          "Overtaking on the left in one direction at a time",
        ],
        correctIndex: 1,
        explanation:
          "That is a shared center lane. Drivers travelling in either direction use it to make left turns, and U-turns where those are allowed, but never to travel along or to pass.",
        context:
          "You can recognise it from the pavement: the left-turn arrows for one direction alternate with the arrows for the other. The manual's only caution is to enter it only when it is safe to do so, because traffic coming the other way is entitled to the same space.",
        trap:
          "Using it as a running lane or an acceleration lane sets up a head-on collision with someone turning left from the other direction.",
        excerptKey: "shared-center-lane",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Shared Center Lane",
        sourceUrl: p(37),
      },
      {
        id: "sd_s2_26",
        topic: "licensing",
        question:
          "How many points in twelve consecutive months put a South Dakota driver at risk of suspension?",
        choices: ["15", "12", "8", "6"],
        correctIndex: 0,
        explanation:
          "Fifteen points inside twelve consecutive months, or twenty-two inside twenty-four months, exposes you to suspension. A first suspension runs 60 days, a second six months, and a third a year.",
        context:
          "The scale is steep at the top: DWI is ten points, reckless driving eight, eluding or drag racing six, failure to yield or improper passing or driving on the wrong side four, a stop sign or signal violation three, and any other moving offense two. Speeding, parking and equipment offenses carry no points at all.",
        trap:
          "Two speeding tickets add nothing to your point total in South Dakota, which surprises people. It is the moving violations that accumulate.",
        excerptKey: "point-system-thresholds",
        sourceLabel:
          "South Dakota Driver License Manual - The Driver's License: South Dakota Point System",
        sourceUrl: p(14),
        commonlyMissed: true,
      },
      {
        id: "sd_s2_27",
        topic: "safety",
        question: "Before changing lanes, what does the manual say mirrors alone will not show you?",
        choices: [
          "Vehicles more than 200 feet behind",
          "Vehicles approaching from the front",
          "Vehicles in the blind spots near the rear corners of your car",
          "Motorcycles, which never appear in mirrors",
        ],
        correctIndex: 2,
        explanation:
          "Mirrors miss the areas near the rear corners of the car, which is why the manual tells you to physically turn your head and look before you move.",
        context:
          "The manual's lane-change sequence is check mirrors, check blind spots, find a gap, signal, look again in the direction you are moving, then adjust speed and steer across. It also warns that dirty windows and glare create temporary blind spots, and that motorcycles, bicycles and pedestrians are the road users most easily lost in them.",
        trap:
          "The shoulder check is what South Dakota examiners look for on the drive test, and applicants report it as one of the fastest ways to fail.",
        excerptKey: "blind-spots-definition",
        sourceLabel: "South Dakota Driver License Manual - General Driving: Changing Lanes",
        sourceUrl: p(45),
      },
      {
        id: "sd_s2_28",
        topic: "sharing",
        question:
          "A pedestrian is crossing at an intersection where no crosswalk has been painted. What must you do?",
        choices: [
          "Continue, since only marked crosswalks give the right-of-way",
          "Sound your horn and pass behind them",
          "Continue if the pedestrian has not yet reached your lane",
          "Yield to them, because an intersection crossing counts whether it is marked or not",
        ],
        correctIndex: 3,
        explanation:
          "The manual is explicit that you yield to pedestrians crossing at intersections even when the crosswalk is not marked. Paint makes a crossing visible, it does not create the right to use it.",
        context:
          "The wider instruction is to be prepared to yield to pedestrians even away from a crossing. On a green light you still yield to anyone already in the intersection, and when turning right or left on red you yield before you move.",
        trap:
          "Not all crosswalks are marked - the manual says so in as many words. Waiting for paint before you yield is how people get hit at rural town intersections.",
        excerptKey: "pedestrian-always-yield",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Pedestrians",
        sourceUrl: p(61),
      },
      {
        id: "sd_s2_29",
        topic: "speed",
        question:
          "Is there a minimum speed on South Dakota's interstate highways, and if so what is it?",
        choices: [
          "No, only a maximum",
          "Yes, 40 mph",
          "Yes, 45 mph",
          "Yes, but only where a minimum is posted",
        ],
        correctIndex: 1,
        explanation:
          "Driving an interstate at less than 40 mph is a Class 2 misdemeanor unless you hold a permit from the Department of Public Safety. Highway maintenance equipment is excepted.",
        context:
          "There is also a general rule against holding traffic up anywhere: no driver may go so slowly as to impede the normal and reasonable movement of traffic, except where a lower speed is needed for safety or required by law. The manual puts it plainly - you can be ticketed for impeding traffic.",
        trap:
          "The minimum applies whether or not a sign says so. A posted minimum reinforces it, it does not create it.",
        excerptKey: "speed-40-minimum-interstate",
        sourceLabel: "South Dakota Codified Laws 32-25-5 - Minimum speed on interstate highways",
        sourceUrl: sdcl("32-25-5"),
        commonlyMissed: true,
      },
      {
        id: "sd_s2_30",
        topic: "emergencies",
        question:
          "Your car breaks down on a highway and you have emergency flares in the trunk. Where does the manual say to place them?",
        choices: [
          "About 200 to 300 feet behind the vehicle",
          "Immediately behind the rear bumper",
          "About 50 feet behind the vehicle",
          "In front of the vehicle, where oncoming traffic will see them",
        ],
        correctIndex: 0,
        explanation:
          "Two hundred to three hundred feet back gives following drivers time to see the problem and change lanes. Flares dropped at the bumper are seen at the same moment as the car itself, which is far too late at highway speed.",
        context:
          "The rest of the drill is get the vehicle off the road and away from traffic, switch on the four-way flashers, stand clear of the roadway, and raise the hood or tie a white cloth to the antenna or door handle. The manual says never stand in the roadway and never change a tire if doing it puts you in a traffic lane.",
        trap:
          "Standing beside your car on the shoulder waving at traffic is the instinct and the manual rules it out. Get away from the road.",
        excerptKey: "flares-200-300-feet",
        sourceLabel:
          "South Dakota Driver License Manual - Emergency Situations: Vehicle Breakdown",
        sourceUrl: p(58),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real knowledge test sits: the exact numbers, the rules that only apply in one particular set of circumstances, and the South Dakota specifics that a driver from another state would answer wrong.",
    questions: [
      {
        id: "sd_s3_01",
        topic: "rules",
        question:
          "At 55 mph on a two-lane road, how much clear sight distance does the manual say you need to pass safely?",
        choices: [
          "About 800 feet",
          "About a quarter of a mile",
          "About a third of a mile, or a ten-second gap",
          "Two hundred yards",
        ],
        correctIndex: 2,
        explanation:
          "The manual does the arithmetic for you: passing at 55 mph takes about ten seconds, in which you travel over 800 feet and so does the oncoming car, which needs over 1600 feet of clear road - roughly a third of a mile.",
        context:
          "The same third of a mile applies to hills and curves. If a rise or a bend blocks your view, treat it as though an oncoming vehicle is hidden behind it, and do not start a pass within a third of a mile of it. A vehicle far enough away to look stationary may already be too close.",
        trap:
          "Judging by eye is exactly what the manual warns against. A car that is visibly getting closer is already too close to start the pass.",
        excerptKey: "pass-1600-feet",
        sourceLabel:
          "South Dakota Driver License Manual - Safe Driving Tips: Space to Pass, Oncoming vehicles",
        sourceUrl: p(53),
      },
      {
        id: "sd_s3_02",
        topic: "signs",
        question:
          "You see a round yellow sign with a large X and the letters RR beside the road. What is it telling you?",
        choices: [
          "A railroad grade crossing is ahead - slow, look and listen",
          "You are at the crossing and must stop",
          "A rail yard runs alongside the road",
          "Trains have priority at the next signal",
        ],
        correctIndex: 0,
        explanation:
          "The round yellow sign is the advance warning. It goes up before the crossing so you can slow down, look and listen for a train, and be ready to stop.",
        context:
          "The white X-shaped crossbuck is the different sign, and it sits at the crossing itself. Some crossings post the number of tracks, and the manual warns that a crossing with more than one track can hide a second train behind the first. Not every crossing has lights.",
        trap:
          "The two railroad signs are easy to swap because both are X-shaped. Round and yellow means a warning ahead; white and crossbuck means you are there.",
        excerptKey: "railroad-advance-sign",
        sourceLabel:
          "South Dakota Driver License Manual - Rules of the Road: Railroad Crossing Warning Signs",
        sourceUrl: p(33),
      },
      {
        id: "sd_s3_03",
        topic: "speed",
        question:
          "Children are arriving at a South Dakota school as you drive past. There is no posted school zone sign. What is the maximum lawful speed?",
        choices: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctIndex: 1,
        explanation:
          "State law sets 15 mph when you pass a school during recess or while children are going to or leaving school at opening and closing hours. It applies on its own terms, without a posted sign.",
        context:
          "Municipalities and counties may also establish posted school zones with their own signs and traffic control devices, and a posted limit governs where one exists. The manual, which prints no speed limits at all, says only to obey a slower limit where lights are flashing or children are present.",
        trap:
          "Twenty-five is the unposted urban limit and it is the number most people reach for. The school figure is lower, and it is 15.",
        excerptKey: "speed-15-school",
        sourceLabel: "South Dakota Codified Laws 32-25-14 - Speed limit in school zones",
        sourceUrl: sdcl("32-25-14"),
        commonlyMissed: true,
      },
      {
        id: "sd_s3_04",
        topic: "safety",
        question:
          "The manual breaks total stopping distance into parts. What figure does it give for an alert driver's perception time?",
        choices: [
          "About a tenth of a second",
          "About two seconds",
          "About three seconds",
          "Three quarters of a second to one second",
        ],
        correctIndex: 3,
        explanation:
          "Perception time is how long it takes you to recognise that you must stop, and the manual puts it at three quarters of a second to one second for an alert driver. Reaction time, moving your foot to the brake, is the same again.",
        context:
          "The third component is braking distance, and the manual gives a worked figure: about 158 feet at 50 mph on dry pavement with good brakes. Add perception and reaction and you have travelled a long way before the brakes even start doing anything, which is the whole argument for a four-second following gap.",
        trap:
          "Two or three seconds sounds plausible because that is roughly what a distracted driver takes. The manual's number is for an alert one.",
        excerptKey: "perception-time",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Stopping Distance",
        sourceUrl: p(50),
      },
      {
        id: "sd_s3_05",
        topic: "parking",
        question:
          "You have parked on the shoulder of a rural highway after dark. What does the manual require?",
        choices: [
          "Nothing beyond setting the parking brake",
          "The hazard flashers, running continuously",
          "Room for traffic to pass, visibility from both directions, and the parking lights and taillights on",
          "A reflective triangle placed behind the car",
        ],
        correctIndex: 2,
        explanation:
          "Three things have to be true: other traffic can get past, drivers approaching from either direction can see you in time, and after dark the parking lights and taillights are lit.",
        context:
          "The manual and the statute state the same requirement with different measurements, so learn the shape of the rule rather than a number. The manual says at least 15 feet of road width and visibility for 500 feet; SDCL 32-30-2 says a clear width of not less than 20 feet and a clear view from 200 feet in each direction. Either way, if it is practical to get right off the traveled portion, that is what the law expects.",
        trap:
          "Hazard flashers are for a disabled vehicle, not a parked one, and they are no substitute for the parking lights the manual actually asks for.",
        excerptKey: "parking-rural-manual",
        sourceLabel: "South Dakota Driver License Manual - General Driving: No-Parking Zones",
        sourceUrl: p(43),
      },
      {
        id: "sd_s3_06",
        topic: "rightOfWay",
        question:
          "You and an oncoming vehicle arrive at a single-lane rural bridge. Who goes first?",
        choices: [
          "Generally the driver who reached the bridge first",
          "The heavier vehicle, which needs more room to stop",
          "The vehicle travelling downhill",
          "Neither - both stop and wave each other across",
        ],
        correctIndex: 0,
        explanation:
          "The manual's rule for narrow and single-lane bridges is to take turns, and generally the first driver to the bridge has the right-of-way. Warning signs identify these bridges before you reach them.",
        context:
          "Rural roads in South Dakota carry a set of hazards the manual treats separately: gravel and dirt that cut traction, roads narrow enough that ditches replace shoulders, steel bridge gratings that reduce grip, blind corners created by crops and wooded draws, and intersections with no stop or yield sign at all.",
        trap:
          "Waving each other across looks polite and creates the deadlock that gets two cars onto a one-lane bridge together. Order of arrival settles it.",
        excerptKey: "narrow-bridge-right-of-way",
        sourceLabel: "South Dakota Driver License Manual - Special Driving Situations: Rural Road Driving",
        sourceUrl: p(67),
      },
      {
        id: "sd_s3_07",
        topic: "impairment",
        question:
          "What is the minimum period a first-offense DWI costs a South Dakota driver their license?",
        choices: ["10 days", "90 days", "One year", "30 days"],
        correctIndex: 3,
        explanation:
          "A first DWI is a Class 1 misdemeanor and takes the license for a minimum of 30 days. The court can go further - the manual describes suspension or revocation of 90 to 365 days on a first alcohol conviction.",
        context:
          "A first conviction also exposes you to a fine of $300 to $1,000 plus costs and 15 to 365 days in jail. A second offense takes the license for at least a year, and a third is a Class 6 felony. Conviction also means filing an SR22 insurance certificate and keeping it for three years.",
        trap:
          "One year is the second-offense figure, and also what a refusal costs. The first-offense minimum is 30 days.",
        excerptKey: "dwi-first-offence",
        sourceLabel: "South Dakota Driver License Manual - Be in Shape to Drive: PENALTIES",
        sourceUrl: p(20),
      },
      {
        id: "sd_s3_08",
        topic: "signals",
        question:
          "You are waiting to turn left and the arrow starts flashing yellow. What does that mean?",
        choices: [
          "The turn is now prohibited",
          "You may turn after yielding to oncoming traffic and pedestrians",
          "You may turn without yielding, as with a green arrow",
          "Stop and wait for a green arrow",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow arrow is the unprotected version of the turn. You may enter the intersection and turn when it is safe, but oncoming traffic has a green light and goes first.",
        context:
          "The manual separates three left-turn signals. A green arrow protects the turn and there should be no oncoming or crossing traffic. A steady yellow arrow means that protection is ending, so prepare to stop and give way. A flashing yellow arrow never protected the turn in the first place.",
        trap:
          "Reading any yellow arrow as a stop signal blocks the intersection for everyone behind you. Flashing yellow is permission with a duty attached, not a prohibition.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
        commonlyMissed: true,
      },
      {
        id: "sd_s3_09",
        topic: "sharing",
        question:
          "How far behind a large truck does the manual say the rear blind spot extends?",
        choices: ["About 20 feet", "About 75 feet", "Up to 200 feet", "Up to 400 feet"],
        correctIndex: 2,
        explanation:
          "The rear No-Zone runs up to 200 feet behind a truck or bus. Sitting inside it means the driver cannot see you and you cannot see the road ahead of them.",
        context:
          "The manual maps three No-Zones. The side zone on the right starts behind the cab and runs the length of the trailer. The front zone is why you never cut in and slow down. The rear zone is the 200 feet. Its rule of thumb is that if you cannot see the driver's face in their mirror, they cannot see you.",
        trap:
          "Twenty feet is the front No-Zone figure, measured ahead of the cab. The one that catches following drivers is ten times longer.",
        excerptKey: "truck-rear-no-zone",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: The No-Zone",
        sourceUrl: p(63),
      },
      {
        id: "sd_s3_10",
        topic: "rules",
        question: "When does the manual say a three-point turnabout is the right maneuver?",
        choices: [
          "Only where the road is too narrow for a U-turn and you cannot go around the block",
          "Any time you need to reverse direction quickly",
          "On any two-way street with light traffic",
          "Whenever a driveway is available on your right",
        ],
        correctIndex: 0,
        explanation:
          "The three-point turnabout is a last resort. It is for a road too narrow to allow a U-turn where going around the block is not an option, and it belongs on a two-lane road only.",
        context:
          "The manual prefers the two-point turnabout, which uses a driveway or alley instead of blocking both lanes. The reverse version backs into the driveway, the forward version drives into it and reverses out. Both keep the car out of the oncoming lane for far less time than a three-point turn does.",
        trap:
          "Reaching for a three-point turn because it is the maneuver you practised puts your car sideways across both lanes. A driveway turnabout is safer nearly every time.",
        excerptKey: "three-point-turnabout",
        sourceLabel:
          "South Dakota Driver License Manual - General Driving: Three-Point Turnabout (Y-Turn)",
        sourceUrl: p(38),
      },
      {
        id: "sd_s3_11",
        topic: "signs",
        question:
          "Some South Dakota warning signs are fluorescent yellow rather than standard yellow. What do those mark?",
        choices: [
          "Wildlife crossings",
          "Temporary hazards from road work",
          "Bridges that ice before the roadway",
          "School zones, school crossings and pedestrian crossings",
        ],
        correctIndex: 3,
        explanation:
          "The brighter fluorescent yellow is reserved for people on foot: school zones, school crossings and pedestrian crossings. The color is meant to pull your eye to the one hazard that cannot protect itself.",
        context:
          "Standard warning signs are yellow diamonds with black lettering or symbols. Work zones use orange instead, and everything regulatory is white. If the fluorescent color surprises you, the shape and symbol still tell you what to expect.",
        trap:
          "Fluorescent yellow is not the work zone color. Orange is, and confusing the two is a straightforward way to lose a signs question.",
        excerptKey: "fluorescent-yellow-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Warning Signs",
        sourceUrl: p(33),
      },
      {
        id: "sd_s3_12",
        topic: "safety",
        question:
          "Which months does the manual name as having the highest number of car and deer crashes in South Dakota?",
        choices: [
          "June and July",
          "October and November",
          "January and February",
          "April and May",
        ],
        correctIndex: 1,
        explanation:
          "October and November are the peak months. The manual asks you to be especially alert then, and to be alert at dusk and dawn all year, since that is when deer move.",
        context:
          "Deer are the second most commonly struck object in South Dakota, behind intersection crashes and ahead of lane departures. The advice is to scan the roadside for headlight reflections in deer eyes, slow down and sound the horn if you see one, and always expect a second animal behind the first.",
        trap:
          "Assuming deer are a rural problem only is the mistake the manual heads off directly. Deer wander into towns and cities, and can cross anywhere at any time.",
        excerptKey: "deer-october-november",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Watch for Deer",
        sourceUrl: p(50),
        commonlyMissed: true,
      },
      {
        id: "sd_s3_13",
        topic: "emergencies",
        question: "A front tire blows out at highway speed. What does the manual tell you to do?",
        choices: [
          "Grip the wheel, hold it straight, ease off the accelerator and do not brake",
          "Brake hard immediately to shed speed",
          "Steer sharply onto the shoulder",
          "Pull the parking brake to keep the car straight",
        ],
        correctIndex: 0,
        explanation:
          "A front blowout pulls the car hard toward the failed tire, so the first job is a firm grip and a straight line. Come off the accelerator and let the car slow itself; brake only gently if you must.",
        context:
          "A rear blowout feels different - the car wobbles and shakes and pulls somewhat toward the failed side. Either way the manual says not to stop on the road if you can avoid it: get off the road to a safe place, then switch on the emergency flashers before changing the tire.",
        trap:
          "Braking hard on a blown front tire is what turns a recoverable problem into a spin. The pull is already there without adding braking forces to it.",
        excerptKey: "blowout-response",
        sourceLabel: "South Dakota Driver License Manual - Emergency Situations: Tire Blowout",
        sourceUrl: p(58),
      },
      {
        id: "sd_s3_14",
        topic: "licensing",
        question:
          "A 15-year-old holds a South Dakota Restricted Minor's Permit. Between which hours may they drive alone with their parent's permission?",
        choices: [
          "5 a.m. to 9 p.m.",
          "Daylight hours only",
          "6 a.m. to 10 p.m.",
          "Any time, so long as they carry the permit",
        ],
        correctIndex: 2,
        explanation:
          "The Restricted Minor's Permit allows unaccompanied driving between 6 a.m. and 10 p.m. with the parent or guardian's permission. Between 10 p.m. and 6 a.m. a parent or legal guardian must be in the seat beside the driver.",
        context:
          "There are four exceptions to the night restriction, and each requires the most direct route: travel to or from school or a school event, church or a church event, work, or driving farm machinery that is not subject to registration. The license restriction code for this permit is R, printed as 6AM-10PM on the card.",
        trap:
          "The Motorcycle Instruction Permit runs 6 a.m. to 8 p.m., two hours shorter. Mixing the two windows is easy and it costs a point.",
        excerptKey: "restricted-permit-hours",
        sourceLabel:
          "South Dakota Driver License Manual - The Driver's License: Restricted Minor's Permit",
        sourceUrl: p(8),
      },
      {
        id: "sd_s3_15",
        topic: "speed",
        question:
          "You are on a two-lane highway posted at 65 mph and a tow truck is stopped ahead with amber lights flashing. What does South Dakota law require?",
        choices: [
          "Stop completely before reaching it",
          "Move onto the shoulder and pass to the right",
          "Nothing, since amber lights are only advisory",
          "Slow to at least 20 mph below the limit, from at least 300 feet before it",
        ],
        correctIndex: 3,
        explanation:
          "Amber, yellow or blue warning lights on a stopped or shoulder-occupying vehicle trigger the slow-down rule on a two-lane road: at least 20 mph under the posted limit, beginning at least 300 feet before you reach it. At 65 mph that means 45 mph or less.",
        context:
          "On an interstate or any road with two or more lanes in your direction, the same lights require you to merge into the lane farthest from the vehicle, again from 300 feet out. Red visual signals are the stricter case and require a complete stop. Where the posted limit is 20 mph or less, the two-lane rule becomes 5 mph.",
        trap:
          "Amber lights are not a courtesy request. Ignoring them is a Class 2 misdemeanor with a minimum fine of $270, and causing a crash while doing it is a Class 1.",
        excerptKey: "move-over-two-lane",
        sourceLabel: "South Dakota Driver License Manual - Attention (inside front cover)",
        sourceUrl: p(2),
      },
      {
        id: "sd_s3_16",
        topic: "parking",
        question:
          "You have parked at the curb and are about to get out on the traffic side. What does state law require?",
        choices: [
          "You may not open a traffic-side door at all",
          "You may open it only when it is reasonably safe and without interfering with traffic",
          "You may open it if your hazard flashers are on",
          "You may open it as long as you do so quickly",
        ],
        correctIndex: 1,
        explanation:
          "The traffic-side door may be opened only when it is reasonably safe and can be done without getting in the way of moving traffic, and it must not be left open longer than loading or unloading needs.",
        context:
          "The manual's version is practical: get out on the curb side if you possibly can, use the street side only if you cannot, and check for traffic before the door moves. It also asks you to check specifically for bicyclists to the side and rear before opening a door when parked on the street.",
        trap:
          "Flashers do not make a door safe. On a street with a bike lane, an unchecked door is the classic dooring collision.",
        excerptKey: "car-door-statute",
        sourceLabel:
          "South Dakota Codified Laws 32-30-2.5 - Opening of doors on traffic side of stopped vehicle",
        sourceUrl: sdcl("32-30-2.5"),
      },
      {
        id: "sd_s3_17",
        topic: "rules",
        question: "You realise too late that you have passed your interstate exit. What do you do?",
        choices: [
          "Carry on to the next exit",
          "Back up along the shoulder to the ramp",
          "Use the next median crossover to turn around",
          "Stop on the shoulder and wait for a gap to reverse",
        ],
        correctIndex: 0,
        explanation:
          "Go on to the next exit. The manual bans backing up on the interstate under any circumstances and bans crossing the median as well.",
        context:
          "Interstate technique in the manual is short and absolute: never cross the median, never back up, stay in the right lane unless overtaking, avoid unnecessary lane changes and keep a steady speed with the flow. State law backs the median rule up for any highway divided by a barrier or dividing section.",
        trap:
          "Median crossovers exist for maintenance and emergency vehicles. Using one costs you far more than the extra miles to the next exit.",
        excerptKey: "interstate-missed-exit",
        sourceLabel:
          "South Dakota Driver License Manual - General Driving: Proper Driving Techniques on the Interstate",
        sourceUrl: p(42),
      },
      {
        id: "sd_s3_18",
        topic: "signals",
        question:
          "You are stopped at a red light and it turns green. What does the manual say you must do before moving?",
        choices: [
          "Sound the horn to warn cross traffic",
          "Move off promptly to keep traffic flowing",
          "Allow crossing traffic to clear the intersection first",
          "Wait three seconds by the clock",
        ],
        correctIndex: 2,
        explanation:
          "A green light gives you permission, not a clear intersection. The manual requires you to let crossing traffic clear before you proceed, and to yield to emergency vehicles and anyone else the law gives priority to.",
        context:
          "The same section tells you to avoid moving into the intersection the instant the light changes, and to make sure your path is clear all the way through. Elsewhere the manual points out that just after a light turns green is exactly when someone on the cross street is most likely to be hurrying through on the change.",
        trap:
          "Treating green as a signal to accelerate is the single most common cause of intersection crashes, and intersections top South Dakota's own list of most-struck-object crashes.",
        excerptKey: "green-clear-intersection",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
      {
        id: "sd_s3_19",
        topic: "safety",
        question:
          "The manual gives a four-second following distance for good conditions. How much does it add for night driving?",
        choices: [
          "Nothing - four seconds covers night driving",
          "Half a second",
          "Double the whole gap",
          "At least one more second, and at least two more on unfamiliar roads at night",
        ],
        correctIndex: 3,
        explanation:
          "Night driving costs you at least one extra second, and an unfamiliar road at night at least two. The distance you can see is limited to what the headlights reach, so the gap has to make up the difference.",
        context:
          "The night section also asks you to use high beams whenever there is no oncoming traffic, drop to low beams in fog, rain or snow, avoid looking into oncoming headlights, and never wear sunglasses or tinted lenses at night or on an overcast day.",
        trap:
          "Four seconds is the fair-weather daytime minimum, not a ceiling. The manual lists nine separate situations that need more, and darkness is one of them.",
        excerptKey: "night-extra-seconds",
        sourceLabel: "South Dakota Driver License Manual - Special Driving Situations: Night Driving",
        sourceUrl: p(66),
      },
      {
        id: "sd_s3_20",
        topic: "impairment",
        question:
          "At what moment does a South Dakota driver give consent to a chemical test for alcohol or drugs?",
        choices: [
          "When they are formally arrested",
          "The moment they operate a vehicle in the state",
          "When they sign the license application",
          "Only when they agree at the roadside",
        ],
        correctIndex: 1,
        explanation:
          "Consent is implied by operating a vehicle in South Dakota. The manual puts it plainly: you give your consent for a chemical test whenever you drive on a public highway.",
        context:
          "After a lawful arrest the officer may require a sample of blood or another bodily substance. The analysis can look for alcohol, marijuana, controlled substances and inhaled substances. Refusing does not stop the process, it triggers a separate one-year revocation.",
        trap:
          "Implied consent is not something you agreed to at the DMV counter and it does not depend on being a South Dakota licensee. It attaches to driving here, whoever issued your license.",
        excerptKey: "implied-consent-manual",
        sourceLabel:
          "South Dakota Driver License Manual - Be in Shape to Drive: Alcohol, Other Drugs, and Driving",
        sourceUrl: p(20),
      },
      {
        id: "sd_s3_21",
        topic: "signs",
        question: "What must you never do where a ONE WAY sign is posted?",
        choices: [
          "Turn in the opposite direction to the arrow",
          "Park on the left-hand side of the street",
          "Change lanes without signaling",
          "Make a right turn on red",
        ],
        correctIndex: 0,
        explanation:
          "The arrow is the whole message: traffic flows that way only. Turning against it puts you head-on into everyone using the street correctly.",
        context:
          "On a one-way street state law lets you park on either side, with the wheels within twelve inches of whichever curb you choose, and overtaking on the right is permitted where the roadway is wide enough for two lines of moving vehicles. Neither of those changes the direction rule.",
        trap:
          "One-way streets do allow some things a two-way street does not, which makes it tempting to assume the turn rule is flexible too. It is not.",
        excerptKey: "one-way-sign",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: One-Way Street",
        sourceUrl: p(35),
      },
      {
        id: "sd_s3_22",
        topic: "speed",
        question:
          "You are approaching a rural intersection where a shelterbelt blocks your view of the cross road. What is the maximum lawful speed?",
        choices: ["25 mph", "20 mph", "15 mph", "The posted limit, if there is no sign"],
        correctIndex: 2,
        explanation:
          "State law caps you at 15 mph within fifty feet of and through an intersection where your view is obstructed. The obstruction is defined precisely: no clear view of the intersection and of traffic on every road entering it for 200 feet, at any point during the last fifty feet of your approach.",
        context:
          "The same 15 mph figure applies within fifty feet of an obstructed railroad crossing, where the test is whether you have a clear view of the track for 400 feet in each direction during the last 200 feet of your approach. Both rules exist because rural South Dakota is full of crops and trees at the corners.",
        trap:
          "A posted highway limit does not survive an obstructed intersection. The statutory 15 applies whether or not anything is signed.",
        excerptKey: "speed-15-obstructed-intersection",
        sourceLabel:
          "South Dakota Codified Laws 32-25-15 - Speed limit at intersections with obstructed view",
        sourceUrl: sdcl("32-25-15"),
      },
      {
        id: "sd_s3_23",
        topic: "sharing",
        question:
          "You are overtaking a combine on a county highway. What does the manual specifically warn you about?",
        choices: [
          "Farm machinery is always wider than a lane",
          "Farm machinery is exempt from traffic law",
          "The machine may accelerate as you pass",
          "The operator cannot hear you coming",
        ],
        correctIndex: 3,
        explanation:
          "The manual says it directly: pass with caution and remember that the operator of the farm machinery cannot hear approaching vehicles. Assume you have not been noticed until you are clearly past.",
        context:
          "Farm machinery normally runs at 25 mph or less and carries the orange slow-moving vehicle emblem. The related warning is anticipation of left turns: tractors and animal-drawn vehicles turn into fields and driveways that have no visible entrance, often without much of a signal.",
        trap:
          "Sounding the horn to announce yourself is the wrong move around horses and animal-drawn vehicles, where the manual says it can cause the crash you are trying to avoid.",
        excerptKey: "farm-machinery-cannot-hear",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Slow-Moving Vehicles",
        sourceUrl: p(65),
      },
      {
        id: "sd_s3_24",
        topic: "rightOfWay",
        question:
          "Two vehicles reach an uncontrolled intersection at about the same time, but the one on the right is speeding. Who has the right-of-way?",
        choices: [
          "The vehicle on the right, regardless of speed",
          "Neither - the speeding driver forfeits the right-of-way",
          "The vehicle on the left, because the other is breaking the law",
          "Whichever driver signals first",
        ],
        correctIndex: 1,
        explanation:
          "State law says a driver travelling at an unlawful speed forfeits any right-of-way they would otherwise have had. The right-hand rule does not protect a speeding driver.",
        context:
          "The general rule is that when two vehicles reach an intersection at about the same time, the driver on the left yields to the driver on the right. The forfeiture clause sits in the same section. The manual reinforces the point in plainer language - never assume you automatically have the right-of-way.",
        trap:
          "Knowing you have the legal right-of-way is not a reason to take it. Forfeiture decides fault after a crash; it will not stop the crash.",
        excerptKey: "row-forfeit-speeding",
        sourceLabel: "South Dakota Codified Laws 32-26-13 - Right-of-way at intersections",
        sourceUrl: sdcl("32-26-13"),
        commonlyMissed: true,
      },
      {
        id: "sd_s3_25",
        topic: "rules",
        question:
          "You are approaching a rural intersection with no stop sign, yield sign or signal on any approach. What does the manual tell you to do?",
        choices: [
          "Maintain speed, since nobody has priority",
          "Sound the horn and continue",
          "Slow down and be prepared to stop for crossing or oncoming traffic",
          "Stop, as if it were an all-way stop",
        ],
        correctIndex: 2,
        explanation:
          "Uncontrolled rural intersections are called out as very dangerous if you approach them without caution. The instruction is to slow down and be ready to stop for anything crossing or coming the other way.",
        context:
          "If two vehicles do arrive at about the same time, the driver on the left yields to the driver on the right. That is the tie-breaker, not a guarantee, and it does not help if neither driver saw the other in time - which is why the manual makes the approach the point rather than the priority rule.",
        trap:
          "No sign does not mean no rules. It means the priority rule is invisible, which makes slowing down the only reliable defense.",
        excerptKey: "uncontrolled-rural-intersection",
        sourceLabel:
          "South Dakota Driver License Manual - Special Driving Situations: Rural Road Driving",
        sourceUrl: p(67),
      },
      {
        id: "sd_s3_26",
        topic: "safety",
        question: "What is the manual's advice for avoiding a loss of traction from hydroplaning?",
        choices: [
          "Slow down in the rain or where water has pooled on the road",
          "Accelerate gently to keep the tires cutting through the water",
          "Brake firmly at the first sign of the steering going light",
          "Steer toward the crown of the road",
        ],
        correctIndex: 0,
        explanation:
          "Hydroplaning happens when the steering tires ride up on pooled water like water skis. The manual's answer is speed: slow down in the rain, and especially where water has collected on the surface.",
        context:
          "Worn tires make it far likelier, which is why the manual teaches the penny check - Lincoln headfirst into the deepest groove, and if you can see all of his head the tire is finished. Standing water is worse again: the manual tells you never to drive through large bodies of standing water and to find another route.",
        trap:
          "Braking or accelerating while the tires are floating gives you no control at all, because they are not touching the road. Speed is the only lever, and you have to use it beforehand.",
        excerptKey: "hydroplaning-avoid",
        sourceLabel:
          "South Dakota Driver License Manual - Safe Driving Tips: Adjusting to Roadway Conditions",
        sourceUrl: p(50),
      },
      {
        id: "sd_s3_27",
        topic: "licensing",
        question:
          "Your South Dakota license expired eight weeks ago and you have not renewed. What will the exam station require?",
        choices: [
          "A vision test only",
          "Nothing beyond the renewal fee",
          "A road test",
          "A knowledge test, along with the vision test and photo",
        ],
        correctIndex: 3,
        explanation:
          "Once a license has been expired for more than 30 days you have to test again. The Department requires a knowledge test, a vision test, a new photo and the renewal fee, and the visit has to be booked as a testing appointment.",
        context:
          "Renewals are otherwise straightforward: the license runs five years, expires on your birthday, and can be renewed up to 180 days early - except in the year you turn 21, when the card expires 30 days after that birthday and cannot be renewed before it. Some renewals can be done online or by mail once in any ten-year period.",
        trap:
          "The 30-day margin is short and easy to overshoot. Drivers who let it lapse routinely assume decades of clean driving will carry them through a test they have not read for since they were sixteen.",
        excerptKey: "expired-30-days-retest",
        sourceLabel: "SD Department of Public Safety - Driver License Testing Information",
        sourceUrl: TESTING,
      },
      {
        id: "sd_s3_28",
        topic: "parking",
        question:
          "You have finished a parallel park. How far from the vehicles in front and behind should you be?",
        choices: [
          "Six inches",
          "At least 2 feet",
          "One car length",
          "Whatever lets you drive out without reversing",
        ],
        correctIndex: 1,
        explanation:
          "The manual's finished position is within 12 inches of the curb and at least 2 feet clear of the parked vehicles at either end. The same 2 feet is the starting offset when you pull up alongside the car ahead.",
        context:
          "The four steps are: stop level with the car in front and about 2 feet out, turn the wheels right and back until your front door passes its rear bumper, straighten and back straight, then turn hard left toward the space behind before straightening into the curb.",
        trap:
          "Six inches from the curb sounds tidier and is not the figure. Twelve inches is what the law and the drive test both use.",
        excerptKey: "parallel-parking-finish",
        sourceLabel: "South Dakota Driver License Manual - General Driving: Parallel Parking",
        sourceUrl: p(44),
      },
      {
        id: "sd_s3_29",
        topic: "signs",
        question: "What determines where South Dakota puts its no-passing zones?",
        choices: [
          "The width of the road surface",
          "The speed limit on that stretch",
          "How far ahead a driver can see",
          "Traffic volume during the summer season",
        ],
        correctIndex: 2,
        explanation:
          "Passing zones are set by sight distance. The manual says they are based on how far you can see ahead, taking account of hills, curves, intersections, driveways and anywhere else a vehicle could join the road.",
        context:
          "The signs work with the pavement markings. A double yellow line means passing is prohibited in both directions, a dashed yellow line on your side means you may pass, and a white dashed line separates lanes going the same way where passing is permitted. Where passing is allowed you may still only do it when it is genuinely safe.",
        trap:
          "A legal passing zone is permission, not a guarantee. The manual is clear that the markings tell you where you may pass, and you still have to judge whether you can.",
        excerptKey: "no-passing-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: No Passing Signs",
        sourceUrl: p(35),
      },
      {
        id: "sd_s3_30",
        topic: "emergencies",
        question:
          "You come across a crash and someone is hurt inside a vehicle that is not on fire. What does the manual tell you to do?",
        choices: [
          "Leave them where they are unless there is immediate danger, and get help",
          "Move them clear of the wreck straight away",
          "Give them water while you wait for the ambulance",
          "Sit them upright to help them breathe",
        ],
        correctIndex: 0,
        explanation:
          "Moving an injured person can make their injuries worse. Unless the vehicle is burning or they are about to be hit by another vehicle, leave them and make sure police and medical help have been called.",
        context:
          "The manual's first-aid sequence is to help anyone who is not already walking and talking, check for breathing and then for bleeding, apply direct pressure to a wound with a hand or cloth, and cover the person with a blanket or coat to hold off shock. Nothing to drink, not even water.",
        trap:
          "Giving water is the instinctive kindness and it is specifically ruled out, because it can cause harm if surgery follows.",
        excerptKey: "do-not-move-injured",
        sourceLabel:
          "South Dakota Driver License Manual - Emergency Situations: If someone is injured",
        sourceUrl: p(59),
      },
      {
        id: "sd_s3_31",
        topic: "impairment",
        question: "What does the manual say studies show about drivers who use marijuana?",
        choices: [
          "They compensate by driving more slowly",
          "They are affected only at high doses",
          "Their reaction times are unchanged but their judgment is worse",
          "They make more mistakes, struggle more with glare and are arrested for traffic violations more often",
        ],
        correctIndex: 3,
        explanation:
          "The manual lists three findings together: more mistakes, more trouble adjusting to glare, and more traffic violation arrests than other drivers.",
        context:
          "Marijuana sits in the manual's illegal-drugs paragraph alongside a warning that prescription and over-the-counter drugs can impair driving in ways like alcohol. South Dakota's DWI statute reaches marijuana and controlled substances directly, and the under-21 zero-tolerance law covers consumption for as long as physical evidence of it remains in the body.",
        trap:
          "Driving more slowly is not a defense and is not what the research the manual cites found. Impairment is impairment whatever the speed.",
        excerptKey: "marijuana-effects",
        sourceLabel: "South Dakota Driver License Manual - Be in Shape to Drive: Illegal Drugs",
        sourceUrl: p(22),
      },
      {
        id: "sd_s3_32",
        topic: "rightOfWay",
        question: "What does the manual say about funeral processions?",
        choices: [
          "Every vehicle in the procession must stop at red lights",
          "Only the first vehicle must obey traffic signs and signals, and you must not cut into the procession",
          "Processions have no special status in South Dakota",
          "You must pull over and stop until the procession has passed",
        ],
        correctIndex: 1,
        explanation:
          "Only the lead vehicle obeys the signs and signals; the rest of the procession follows through. Every vehicle in it runs with headlights on, and other drivers must not cut in or interfere.",
        context:
          "The manual places this in its right-of-way section rather than treating it as a courtesy, which is the point: a procession moving through a red light is exercising a right, and a driver who breaks into the line is interfering with it.",
        trap:
          "Assuming a green light entitles you to cross a procession is how the line gets broken. The lead vehicle already dealt with the signal for everyone behind it.",
        excerptKey: "funeral-procession",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Funeral Processions",
        sourceUrl: p(31),
      },
      {
        id: "sd_s3_33",
        topic: "signals",
        question: "You are facing a steady red arrow. When may you proceed in that direction?",
        choices: [
          "When the red arrow goes out and a green arrow or light comes on",
          "After a complete stop, if the way is clear",
          "As soon as oncoming traffic has cleared",
          "Whenever the intersection is empty",
        ],
        correctIndex: 0,
        explanation:
          "A red arrow stops that movement outright. Unlike a plain red light, it carries no turn-after-stopping permission - you wait for the arrow to go out and a green arrow or light to appear.",
        context:
          "That is the difference the manual is drawing between a red ball and a red arrow. A steady red light allows a right turn after a complete stop unless a sign forbids it. A red arrow removes even that.",
        trap:
          "Treating a red arrow as an ordinary red and turning after stopping is a straightforward signal violation, worth three points on a South Dakota record.",
        excerptKey: "red-arrow",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
      {
        id: "sd_s3_34",
        topic: "speed",
        question:
          "You are following a snowplow with its amber lights on, on a road posted at 55 mph. How far back must you stay?",
        choices: ["100 feet", "150 feet", "200 feet", "As far as visibility allows"],
        correctIndex: 2,
        explanation:
          "On any road posted at 35 mph or more, the law requires at least 200 feet behind a working snowplow with its red or amber lights on.",
        context:
          "Plows are wide, often run close to the center line, and throw clouds of snow that wipe out visibility completely. The manual's winter advice around it is to drive well below the posted limit because limits assume dry summer pavement, never use cruise control on slippery roads, and stay off closed roads entirely.",
        trap:
          "Four seconds of following distance is not 200 feet at 55 mph - it is a lot more, and this rule is a fixed distance rather than a time. Learn the number.",
        excerptKey: "snowplow-200-feet",
        sourceLabel:
          "South Dakota Driver License Manual - Special Driving Situations: Give snowplows room",
        sourceUrl: p(67),
        commonlyMissed: true,
      },
      {
        id: "sd_s3_35",
        topic: "safety",
        question:
          "Why does the manual tell you not to drive alongside another vehicle for long stretches on a multi-lane road?",
        choices: [
          "It uses more fuel",
          "It is illegal on a South Dakota interstate",
          "It blocks traffic that wants to pass",
          "You may be sitting in their blind spot, and you lose the space you would need to avoid a crash",
        ],
        correctIndex: 3,
        explanation:
          "Riding beside someone costs you twice. You may be invisible to them, and you have given away the sideways room that is your escape route if something goes wrong ahead.",
        context:
          "The space-cushion section asks you to keep room on every side: avoid crowding the center line, make space for merging traffic, give extra room to bicyclists and pedestrians, and stay clear of parked cars in case a door opens or someone steps out. Where you cannot avoid two hazards at once, give the most room to the worse one.",
        trap:
          "Sitting level with another car feels stable and predictable, which is exactly why drivers do it. Move ahead or drop back.",
        excerptKey: "space-to-side",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Space to the Side",
        sourceUrl: p(52),
      },
    ],
  },
];
