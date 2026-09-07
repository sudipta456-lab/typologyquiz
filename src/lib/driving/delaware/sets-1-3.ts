import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Delaware Driver Manual, July 2026
// edition, published by the Delaware Division of Motor Vehicles, plus the
// sections of Title 21 of the Delaware Code and the dmv.de.gov pages that carry
// rules the manual states incompletely or not at all.
//
// Delaware's manual is 152 pages and unusually generous with numbers. Unlike
// most state books it prints the whole speed table, the whole parking-distance
// list, the signaling distance and the crash-reporting thresholds, so the
// statute is needed far less often here than elsewhere. Where it is needed:
//
// 1. The manual never says how many questions the Rules Of The Road Test has or
//    what score passes. That figure - 32 questions, 26 correct - appears only on
//    the Division's own Sample Written Test page.
// 2. The Move Over law is stated in the manual as "reduce to a safe speed" with
//    no number. Section 4134(b)(2)b of Title 21 sets it at 20 mph below the
//    posted limit where that limit is 50 mph or above.
// 3. The manual summarizes Delaware's bicycle stop-sign yield in a single line.
//    Section 4196A gives the actual test: three or more lanes means a full stop,
//    two or fewer means slow and yield, and a vehicle already stopped at the
//    same sign means a full stop whatever the road.
//
// Two conflicts are flagged where they arise. The DMV's own FAQ page still says
// the knowledge test is 30 questions with 24 to pass, while the Sample Written
// Test page it links to says 32 with 26; the 32/26 figure is used here and the
// research note records the disagreement. And on school buses the manual says
// on page 81 "a highway having four or more lanes" but on page 95 "a divided
// highway having four or more lanes", while Section 4166(d)(1) requires no
// divider at all - questions touching this are built on roads where all three
// readings give the same answer.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the DMV's
// own authoritative wording on the government's site.
const HB = "https://dmv.de.gov/forms/driver_serv_forms/pdfs/dr_frm_manual.pdf";
const p = (n: number) => `${HB}#page=${n}`;
const WRITTEN =
  "https://dmv.de.gov/DriverServices/drivers_license/index.shtml?dc=dr_lic_written";
const del = (sub: string) => `https://delcode.delaware.gov/title21/${sub}/index.html`;

export const delawareSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Delaware Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Delaware: what the shapes and colors mean, who yields to whom, and the handful of numbers the DMV's 32-question Rules Of The Road Test expects you to know cold.",
    questions: [
      {
        id: "de_s1_01",
        topic: "signs",
        question:
          "You come to a red eight-sided sign at an intersection in Delaware. Where does the manual say you must stop?",
        choices: [
          "Wherever you can see the cross traffic best",
          "At the stop line; if there is none, at the crosswalk; if there is neither, before entering the intersection",
          "Level with the sign itself",
          "Anywhere in the intersection, as long as you stop",
        ],
        correctIndex: 1,
        explanation:
          "Delaware sets a three-step order for where the stop happens: the stop line first, the crosswalk if there is no line, and the edge of the intersection if there is neither. The stop sign is also the only eight-sided sign you will ever see, so the shape alone tells you what to do.",
        context:
          "Delaware teaches signs by shape and color before words, because the shape reads at a distance, in fog, and in a language you do not speak. The octagon is reserved for STOP and nothing else. Having stopped, you then yield to any vehicle or pedestrian in or approaching the intersection before you start moving.",
        trap:
          "Stopping level with the sign is not the rule. If a stop line is painted, that is where the front of your car has to be.",
        excerptKey: "sign-stop-where",
        sourceLabel: "Delaware Driver Manual - Section Four, Highway Signs",
        sourceUrl: p(74),
      },
      {
        id: "de_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Delaware and want to turn right. What does the manual allow?",
        choices: [
          "Turn right without stopping if nothing is coming",
          "Turn right after a full stop, unless a sign prohibits it or a steady red arrow is displayed",
          "Turn right only where a sign expressly permits it",
          "Turn right only when the light turns green",
        ],
        correctIndex: 1,
        explanation:
          "Right on red is Delaware's default rather than a special permission, but two things cancel it: a posted sign forbidding the turn, and a steady red arrow. Either way you have to come to a complete stop first and then make the turn only when it is safe.",
        context:
          "Delaware treats a steady red as stop-and-stay-stopped, with two turns carved out of it. Right on red is allowed after a full stop, and a left on red is allowed on the same terms when you are turning from a one-way street onto another one-way street. A steady red arrow removes the permission for that movement entirely.",
        trap:
          "\"The road was clear\" is not the test. A turn made without stopping first is unlawful even at 3am on an empty street.",
        excerptKey: "red-right-turn",
        sourceLabel: "Delaware Driver Manual - Section Four, Understanding Traffic Signals",
        sourceUrl: p(69),
        commonlyMissed: true,
      },
      {
        id: "de_s1_03",
        topic: "rightOfWay",
        question:
          "Four cars reach a four-way stop at clearly different moments. Who goes first?",
        choices: [
          "The driver furthest to the right of the group",
          "The driver going straight, ahead of anyone turning",
          "The driver who reached the intersection first, after coming to a complete stop",
          "The largest vehicle, because it needs the most room",
        ],
        correctIndex: 2,
        explanation:
          "Delaware's four-way stop rule is order of arrival. The driver who got there first goes first, once they have actually stopped. The right-hand rule only exists to break a tie when two drivers arrive together.",
        context:
          "The manual states both halves in one sentence, and people remember only the second. Arrival order decides it; the vehicle on the right goes first only when more than one vehicle arrives at the same time. Underneath both sits the rule that opens the whole right-of-way section - the law never gives anyone the right of way, it only says who must yield.",
        trap:
          "\"Yield to the driver on your right\" is the answer people give without reading the question. It applies only to a genuine tie.",
        excerptKey: "row-four-way-stop",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(88),
        commonlyMissed: true,
      },
      {
        id: "de_s1_04",
        topic: "speed",
        question:
          "There is no sign posted. What is the speed limit on a two-lane road in Delaware?",
        choices: ["35 mph", "45 mph", "55 mph", "50 mph"],
        correctIndex: 3,
        explanation:
          "Delaware's statutory default on a two-lane road is 50 mph. It moves up to 55 on a four-lane or divided road, and the manual's own example of a Rules Of The Road Test question is exactly this one.",
        context:
          "The manual prints the whole table: 20 mph in a posted school zone, 25 in a business district, 25 in a residential district, 50 on two-lane roads, 55 on divided roads and roads with four or more lanes, 55 on controlled-access highways, and 65 on Route 1 and Interstate 495. A posted sign always overrides the default, and you may never exceed the posted number.",
        trap:
          "55 is the four-lane and divided-road figure. On a plain two-lane road the default drops to 50.",
        excerptKey: "speed-table",
        sourceLabel: "Delaware Driver Manual - Section Four, Speed Limits",
        sourceUrl: p(93),
        commonlyMissed: true,
      },
      {
        id: "de_s1_05",
        topic: "rules",
        question:
          "Delaware law says you must signal before you turn. How far ahead?",
        choices: ["100 feet", "300 feet", "50 feet", "Two car lengths"],
        correctIndex: 1,
        explanation:
          "Delaware requires 300 feet, which is three times the figure most neighboring states use. The manual states it twice, once in the laws section and once in the chapter on communicating with other drivers.",
        context:
          "The manual also gives a time version of the same rule - try to signal at least three seconds before you move - and tells you to signal for a much greater distance at high speed, particularly when changing lanes on an interstate. It applies to stopping, turning and changing lanes, and the signal can be given by hand and arm or by the turn signal lamps.",
        trap:
          "100 feet is the answer drilled into drivers in most other states. Delaware's number is 300, and it is a favorite exam item for exactly that reason.",
        excerptKey: "signal-300-feet-rule",
        sourceLabel: "Delaware Driver Manual - Section Four, Signaling",
        sourceUrl: p(81),
        commonlyMissed: true,
      },
      {
        id: "de_s1_06",
        topic: "safety",
        question:
          "What following-distance rule does the Delaware manual teach for normal conditions?",
        choices: [
          "One car length for every 10 mph",
          "A two-second gap",
          "A three-second gap",
          "Half the posted speed limit in feet",
        ],
        correctIndex: 2,
        explanation:
          "Delaware uses the three-second rule, and the manual points out that it works at any speed. You watch the vehicle ahead pass a fixed object, count three seconds, and if you reach the object first you are too close.",
        context:
          "The manual then lists the situations where three seconds is not enough and four is: slippery roads, following a motorcycle, following a truck or van whose driver cannot see you, carrying a heavy load or trailer, poor visibility, being tailgated yourself, following an emergency vehicle, and approaching a railroad crossing.",
        trap:
          "Counting car lengths is the old advice and the manual does not use it. At highway speed nobody can judge six or seven car lengths accurately, which is why the count replaced it.",
        excerptKey: "space-three-second-rule",
        sourceLabel: "Delaware Driver Manual - Section Five, Sharing Space",
        sourceUrl: p(127),
      },
      {
        id: "de_s1_07",
        topic: "signs",
        question: "A yellow diamond-shaped sign with black symbols means what?",
        choices: [
          "A law you must obey exactly as posted",
          "A warning of a special situation or hazard ahead",
          "Directions to a town or route",
          "Services such as fuel or food are nearby",
        ],
        correctIndex: 1,
        explanation:
          "Yellow diamonds are warning signs. They tell you to slow down and be ready to stop because something ahead needs your attention - a curve, a crossing, a change in the road.",
        context:
          "Delaware's sign system is readable by shape and color alone. Regulatory signs are square, rectangular or specially shaped and are usually white, red or black. Warning signs are yellow diamonds, with two shapes reserved for special use: the five-sided pentagon for schools and school crossings, and the round sign for a railroad crossing ahead.",
        trap:
          "A warning sign is not a speed limit. If it carries a number on a yellow plate below it, that number is advisory, not the legal limit.",
        excerptKey: "sign-warning-shape",
        sourceLabel: "Delaware Driver Manual - Section Four, Warning Signs",
        sourceUrl: p(75),
      },
      {
        id: "de_s1_08",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Delaware?",
        choices: [
          "No closer than 15 feet",
          "No closer than 10 feet",
          "No closer than 25 feet",
          "Any distance, as long as the hydrant is visible",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen feet is the Delaware figure, and the manual lists it among the places you may not stop or park even if someone stays in the car. The manual itself names this as one of the questions the Rules Of The Road Test asks.",
        context:
          "The parking list is worth learning as a set of numbers: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway (75 feet on the opposite side where signs are posted), 30 feet from a flashing beacon, stop sign or traffic signal, and 50 feet from a railroad crossing.",
        trap:
          "Leaving someone sitting in the car changes nothing. The prohibition is on stopping there at all, not on leaving the vehicle unattended.",
        excerptKey: "park-hydrant-15",
        sourceLabel: "Delaware Driver Manual - Section Four, Stopping And Parking Violations",
        sourceUrl: p(92),
        commonlyMissed: true,
      },
      {
        id: "de_s1_09",
        topic: "rules",
        question:
          "Under Delaware law, when must your headlights be on?",
        choices: [
          "Only between sunset and sunrise",
          "After sunset or before sunrise, when you cannot see beyond 1000 feet, and any time your wipers are on",
          "Only when you cannot see 500 feet ahead",
          "Whenever the vehicle is moving",
        ],
        correctIndex: 1,
        explanation:
          "Delaware ties headlights to three separate triggers, and the wiper rule is the one drivers forget. If the rain is heavy enough to need wipers, it is heavy enough to need headlights, and the manual says so twice.",
        context:
          "Parking lights do not satisfy any of these. The manual is explicit that parking lights are for parked vehicles only and that you must never drive on them alone. The same section sets the dimming distances: switch to low beams 500 feet before meeting an oncoming vehicle, and within 200 feet of a vehicle you are following.",
        trap:
          "Daytime rain feels like it does not count. Under Delaware law the wipers are the trigger, whatever the hour.",
        excerptKey: "lights-when-required",
        sourceLabel: "Delaware Driver Manual - Section Three, Using Headlights",
        sourceUrl: p(62),
        commonlyMissed: true,
      },
      {
        id: "de_s1_10",
        topic: "signals",
        question: "A flashing red traffic light means what?",
        choices: [
          "The same as a stop sign - come to a complete stop, then proceed only when safe",
          "Slow down and proceed with caution",
          "The signal is out of order and should be ignored",
          "Stop and wait for the light to change",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red is a stop sign in light form. You come to a full stop, then go when it is safe. It does not change, so waiting for green means waiting forever.",
        context:
          "Flashing signals normally come in pairs at an intersection: red on one road, yellow on the other. A flashing yellow means slow down, be more alert and proceed with caution, and the manual warns you to watch for the cross traffic that is being held by the flashing red.",
        trap:
          "Treating a flashing red as a yield is the common error. The word the manual uses is stop, and it means the wheels stop turning.",
        excerptKey: "flashing-red",
        sourceLabel: "Delaware Driver Manual - Section Four, Understanding Traffic Signals",
        sourceUrl: p(70),
      },
      {
        id: "de_s1_11",
        topic: "impairment",
        question:
          "At what blood alcohol concentration is a Delaware driver conclusively considered under the influence?",
        choices: [".10 or greater", ".05 or greater", ".02 or greater", ".08 or greater"],
        correctIndex: 3,
        explanation:
          "In Delaware a BAC of .08 or more is conclusive evidence of driving under the influence, as is the presence of any illicit or recreational drug. Conclusive means the number alone settles it.",
        context:
          "The .08 figure is a ceiling, not a safe zone. The manual states plainly that a driver can still be charged with DUI on a BAC below .08 if their driving shows impairment. Drivers under 21 are held to Delaware's zero tolerance statute instead, which triggers revocation at .02, and commercial drivers are disqualified at .04.",
        trap:
          ".08 is not a license to drink up to it. The offense can be proved below the number by other evidence.",
        excerptKey: "bac-08",
        sourceLabel: "Delaware Driver Manual - Section Two, Drinking And Blood Alcohol Concentration",
        sourceUrl: p(50),
      },
      {
        id: "de_s1_12",
        topic: "sharing",
        question:
          "A school bus on a two-lane road ahead of you switches on its overhead flashing red lights and puts out its stop arm. What must you do?",
        choices: [
          "Stop, and stay stopped until the red lights stop flashing and the stop arm is retracted",
          "Slow to 20 mph and pass carefully",
          "Stop only if you are behind the bus, not if you are meeting it",
          "Pass on the left if no children are visible",
        ],
        correctIndex: 0,
        explanation:
          "Red lights and the stop arm mean children are getting on or off. Traffic in both directions stops on a road with fewer than four lanes, and stays stopped until the lights go dark and the arm folds back in.",
        context:
          "The amber lights come on about ten seconds before the red ones, as a warning that a stop is about to be made. The single Delaware exception is a road with four or more lanes, where only traffic following the bus has to stop and oncoming drivers may proceed slowly. Passing a stopped bus with its red lights flashing carries a first-offense fine of $115 to $230 and a one-month license suspension with no driving authority at all.",
        trap:
          "Waiting for the children to be out of sight is not the signal to go. The signal is the lights going off and the arm retracting.",
        excerptKey: "bus-red-lights",
        sourceLabel: "Delaware Driver Manual - Section Four, Stopping For School Buses",
        sourceUrl: p(89),
      },
      {
        id: "de_s1_13",
        topic: "signs",
        question: "What does the downward-pointing triangle sign require?",
        choices: [
          "A complete stop in every case",
          "Merge immediately into the next lane",
          "Slow down, look both ways and yield to traffic and pedestrians in or approaching the intersection",
          "Nothing - it is a warning of an intersection ahead",
        ],
        correctIndex: 2,
        explanation:
          "The yield sign asks you to slow, look and give way, stopping if that is what it takes. Once you have yielded, you may only proceed when the move can be made safely.",
        context:
          "Like the octagon, the downward triangle is used for one message and nothing else, so its shape is enough to identify it. The manual pairs it with the stop sign deliberately: a yield sign is not a stop sign when there is nothing to yield to, and a stop sign is never a yield sign.",
        trap:
          "A yield sign does not mean you can roll through without looking. Stopping is required whenever that is the only way to give way safely.",
        excerptKey: "sign-yield-approach",
        sourceLabel: "Delaware Driver Manual - Section Four, Regulatory Signs",
        sourceUrl: p(74),
      },
      {
        id: "de_s1_14",
        topic: "safety",
        question:
          "Delaware law requires seat belts for which occupants of a vehicle?",
        choices: [
          "The driver and front-seat passengers only",
          "Everyone in the vehicle",
          "Everyone under 18",
          "Only occupants of vehicles built after 1968",
        ],
        correctIndex: 1,
        explanation:
          "Delaware requires all occupants of a motor vehicle to be properly restrained, front and rear. It is a primary enforcement law, so an officer may stop the vehicle for that alone.",
        context:
          "The manual adds that the driver receives the ticket for any unrestrained or improperly restrained occupant, and that improper use counts - a shoulder belt tucked under your arm or behind your back can produce both serious injury and a citation. Belts are still required in a vehicle with air bags, because air bags do nothing for side impacts, rear impacts or rollovers.",
        trap:
          "Back-seat passengers are not exempt. The rule is written for all occupants, and the driver is the one cited.",
        excerptKey: "belts-all-occupants",
        sourceLabel: "Delaware Driver Manual - Section Five, Use Safety Belts",
        sourceUrl: p(108),
      },
      {
        id: "de_s1_15",
        topic: "rules",
        question:
          "On a Delaware road with two lanes running in your direction, which lane should you normally be in?",
        choices: [
          "The right lane, using the left only to pass",
          "Whichever lane is moving fastest",
          "The left lane, keeping the right free for merging traffic",
          "It makes no difference on a two-lane-each-way road",
        ],
        correctIndex: 0,
        explanation:
          "Delaware's rule is keep right except to pass. The left-most lane on a multi-lane road is there for passing slower vehicles, not for cruising.",
        context:
          "The manual adds a refinement for wider roads: where there are three or more lanes in your direction and a lot of traffic entering and leaving, use the center lane. It also warns against passing on the right, since the other driver may not see you and may change lanes into you.",
        trap:
          "Sitting in the left lane at the speed limit is still wrong. The lane's purpose is passing, and the manual does not make an exception for drivers who feel they are going fast enough.",
        excerptKey: "keep-right-except-pass",
        sourceLabel: "Delaware Driver Manual - Section Four, General Rules",
        sourceUrl: p(87),
      },
      {
        id: "de_s1_16",
        topic: "signals",
        question: "What does a steady green light mean in Delaware?",
        choices: [
          "You have the right of way over everyone at the intersection",
          "Go, but only straight ahead",
          "Prepare to stop, because the light is about to change",
          "Proceed with caution, yielding to pedestrians and vehicles already in the intersection or crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "Green in Delaware is proceed with caution, not go. Anyone already lawfully in the intersection or the adjacent crosswalk keeps their place, and you wait for them.",
        context:
          "The manual reduces signals to four rules: red is stop, yellow is prepare to stop, green is proceed with caution, and arrows apply only to the direction they point. On green you may go straight or turn unless a sign or a separate signal forbids the turn, and the manual singles out turns as the moment to be especially careful of pedestrians and oncoming traffic.",
        trap:
          "A green light is not a grant of right of way. The car still finishing its left turn in front of you was there first.",
        excerptKey: "green-caution",
        sourceLabel: "Delaware Driver Manual - Section Four, Understanding Traffic Signals",
        sourceUrl: p(70),
      },
      {
        id: "de_s1_17",
        topic: "rightOfWay",
        question:
          "You are waiting to turn left at a green light. An oncoming car is coming straight through. Who yields?",
        choices: [
          "The oncoming driver, because you arrived first",
          "You do - a driver turning left yields to oncoming traffic going straight ahead",
          "Whoever has the shorter distance to travel",
          "Neither, as long as both proceed slowly",
        ],
        correctIndex: 1,
        explanation:
          "The left-turning driver always yields to oncoming traffic going straight. Waiting at the light longer gives you nothing, because the rule is about the movement rather than the wait.",
        context:
          "The manual tells you to look for a safe gap, check that no vehicle or pedestrian is blocking the road you are turning into, and then look once more toward the oncoming traffic before you commit. This is also the collision that kills motorcyclists most often, so the manual repeats the warning in its motorcycle section.",
        trap:
          "An oncoming turn signal is not a promise. The manual says specifically not to turn just because an approaching vehicle is signaling - wait until it actually starts to turn.",
        excerptKey: "row-left-turn-yield",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(88),
      },
      {
        id: "de_s1_18",
        topic: "speed",
        question:
          "What is the speed limit in a Delaware business or residential district where nothing is posted?",
        choices: ["25 mph", "30 mph", "20 mph", "35 mph"],
        correctIndex: 0,
        explanation:
          "Delaware uses 25 mph for both business and residential districts. It is the same number for each, which makes it one of the easier figures in the table to hold on to.",
        context:
          "The school zone figure is lower still at 20 mph, but only where 20 mph regulatory signs are posted and those signs state the times or conditions when the limit applies - such as when children are present or while warning lights flash. Everything above that scales with the road: 50 on two-lane roads, 55 on divided and four-lane roads.",
        trap:
          "30 mph is the residential default in several neighboring states and it is not Delaware's. Both districts are 25 here.",
        excerptKey: "speed-statute-limits",
        sourceLabel: "Delaware Code Title 21 Section 4169 - Specific speed limits",
        sourceUrl: del("c041/sc08"),
      },
      {
        id: "de_s1_19",
        topic: "safety",
        question:
          "The Delaware manual says the biggest single contributor to crashes is what?",
        choices: [
          "Driving too fast for the posted limit",
          "Mechanical failure",
          "Driving while tired",
          "Failing to see what is happening",
        ],
        correctIndex: 3,
        explanation:
          "The manual puts it bluntly - the single biggest contributor to crashes is failing to see what is happening. Most of driving depends on what you see, which is why so much of the book is about looking.",
        context:
          "The remedy the manual teaches is scanning: look well down the road, to both sides, and behind. Safer drivers look at least ten seconds ahead, which is roughly one city block in town and about a quarter of a mile on the highway. It also warns that in many crashes with motorcycles, bicycles and pedestrians, the driver reported looking but not seeing.",
        trap:
          "Speed is the answer people expect, and it is a real risk, but the manual's own sentence names seeing as the biggest contributor.",
        excerptKey: "seeing-biggest-contributor",
        sourceLabel: "Delaware Driver Manual - Section Five, Seeing Well",
        sourceUrl: p(115),
      },
      {
        id: "de_s1_20",
        topic: "parking",
        question:
          "You are parking downhill on a Delaware street with a curb. Which way do you turn your front wheels?",
        choices: [
          "Away from the curb",
          "Straight ahead",
          "It does not matter if the parking brake is set",
          "Toward the curb",
        ],
        correctIndex: 3,
        explanation:
          "Headed downhill, the wheels turn toward the curb, so that if the car rolls it runs into the curb instead of into the street. Headed uphill with a curb, the wheels turn away from it and the near-side front wheel rests against it.",
        context:
          "Uphill with no curb, the wheels turn toward the edge of the highway - back toward the shoulder rather than into traffic. The manual also asks you to stop the engine, lock the ignition, remove the key and set the brakes whenever you leave the vehicle, and to leave a manual transmission in low gear uphill and in reverse downhill.",
        trap:
          "The parking brake is not the answer to this question. The wheel direction is the backup for the moment the brake fails.",
        excerptKey: "park-hill",
        sourceLabel: "Delaware Driver Manual - Section Four, Parking on Hill",
        sourceUrl: p(92),
      },
      {
        id: "de_s1_21",
        topic: "signs",
        question:
          "A five-sided sign with black symbols on a yellow background warns you of what?",
        choices: [
          "A hospital ahead",
          "A pedestrian crossing on a rural road",
          "A school or school crossing",
          "A hidden driveway",
        ],
        correctIndex: 2,
        explanation:
          "The pentagon is used only for schools and school crossings in Delaware. When you see it you slow down, watch for children, and stop if that is what is needed.",
        context:
          "Delaware also uses newer fluorescent yellow-green signs for the same purpose. The school zone speed limit itself is 20 mph, but only where 20 mph regulatory signs are posted and those signs state when the limit applies. The manual adds a general instruction that applies with or without a sign - be especially watchful for children near schools and in residential districts.",
        trap:
          "The five-sided sign is not itself a speed limit. The 20 mph limit comes from a separate white regulatory sign that states its hours or conditions.",
        excerptKey: "sign-school-pentagon",
        sourceLabel: "Delaware Driver Manual - Section Four, Warning Signs",
        sourceUrl: p(75),
      },
      {
        id: "de_s1_22",
        topic: "rules",
        question:
          "A solid yellow line runs along your side of the road, with a broken yellow line on the other side. May you pass?",
        choices: [
          "Yes, if the road ahead is clear",
          "Yes, but only vehicles traveling under 25 mph",
          "No - you may not pass when the solid yellow line is on your side",
          "Only if you can complete the pass within 300 feet",
        ],
        correctIndex: 2,
        explanation:
          "With a solid and a broken yellow line together, the side with the solid line may not pass. The broken line on the other side means oncoming traffic may.",
        context:
          "Yellow always separates traffic moving in opposite directions in Delaware. A broken yellow line lets you cross to pass when it is safe; two solid yellow lines mean neither side may pass. You may still cross a solid yellow line to turn into a driveway, if it is safe to do so.",
        trap:
          "A clear road does not lift the prohibition. The line is a legal marking, not advice about visibility.",
        excerptKey: "mark-yellow-solid-broken",
        sourceLabel: "Delaware Driver Manual - Section Four, Pavement Markings",
        sourceUrl: p(85),
      },
      {
        id: "de_s1_23",
        topic: "sharing",
        question:
          "When passing a bicyclist on a Delaware road, how much clearance does the law require?",
        choices: [
          "At least three feet at all times",
          "At least one full lane at all times",
          "Whatever gap feels safe at the speed you are traveling",
          "At least six feet at all times",
        ],
        correctIndex: 0,
        explanation:
          "Delaware sets a minimum of three feet of clearance at all times when passing a cyclist. On a multi-lane road the law also expects you to move into the adjacent lane whenever that is possible.",
        context:
          "The Bicycle Friendly Delaware Act goes further where the lane is narrow. If the travel lane is too narrow for your vehicle and the bicycle to sit side by side safely, you must change lanes completely to pass, and the law specifically permits crossing a double yellow line to do so. Only in an unusually wide lane may you pass without changing lanes, and then you must slow down and keep the three feet.",
        trap:
          "The double yellow line is not a reason to squeeze past. Delaware's law tells you to cross it rather than pass too closely.",
        excerptKey: "overtake-cyclist-3ft",
        sourceLabel: "Delaware Driver Manual - Section Four, Overtaking (Passing) Other Vehicles",
        sourceUrl: p(81),
      },
      {
        id: "de_s1_24",
        topic: "impairment",
        question:
          "Which of these will actually lower your blood alcohol concentration?",
        choices: [
          "Strong coffee",
          "A cold shower",
          "Time",
          "Exercise and fresh air",
        ],
        correctIndex: 2,
        explanation:
          "Only time sobers you up. The manual names coffee, fresh air, exercise and cold showers together and says none of them help.",
        context:
          "Alcohol reaches the brain in twenty to forty minutes and works on the areas that control judgment, which is why the manual describes it as putting good judgment on hold. Eating before and during drinking slows how fast alcohol enters the blood, but the manual is careful to say that slowing the process does not stop you getting drunk.",
        trap:
          "Coffee makes a drunk driver a wide-awake drunk driver. Alertness and impairment are separate things.",
        excerptKey: "drink-time-only",
        sourceLabel: "Delaware Driver Manual - Section Two, If You Drink, When Can You Drive",
        sourceUrl: p(52),
      },
      {
        id: "de_s1_25",
        topic: "rightOfWay",
        question:
          "An ambulance approaches with its siren and flashing lights on. What does Delaware require?",
        choices: [
          "Yield and pull to the right-hand edge or curb, clear of any intersection, until it has passed",
          "Stop wherever you are, immediately",
          "Speed up to clear the road ahead of it",
          "Move into the left lane and continue at a reduced speed",
        ],
        correctIndex: 0,
        explanation:
          "You yield and pull as far right as you can, staying clear of intersections, and remain there until the emergency vehicle has passed. The direction is right, whichever way the emergency vehicle is coming from.",
        context:
          "If you are inside an intersection when you hear or see it, the manual tells you to drive through the intersection first and then pull over, so you are not blocking the crossing. Follow any instruction given over the vehicle's loudspeaker, and expect the same duty toward police vehicles, fire engines and DelDOT vehicles supporting an incident.",
        trap:
          "Stopping dead in an intersection is the instinctive move and the wrong one. Clear the intersection first, then pull right.",
        excerptKey: "row-emergency-vehicle",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(89),
      },
      {
        id: "de_s1_26",
        topic: "safety",
        question:
          "You are about to change lanes on a Delaware highway. What does the manual say you must do beyond checking your mirrors?",
        choices: [
          "Sound your horn to warn the drivers around you",
          "Flash your headlights once",
          "Accelerate so you clear the lane quickly",
          "Look over your shoulder in the direction you plan to move",
        ],
        correctIndex: 3,
        explanation:
          "Mirrors cannot show the rear corners of your vehicle. The manual calls those the blind spots and tells you to turn your head and look over your shoulder in the direction you are moving.",
        context:
          "The full sequence is signal, check the mirrors, look over your shoulder, and check quickly so your eyes leave the road ahead only for an instant. The manual also says to check the far lane, since a driver there may be planning to move into the same space, and to remember that motorcycles, bicycles and pedestrians are harder to see than cars.",
        trap:
          "Mirrors alone are the answer that feels adequate and is not. The whole point of the shoulder check is what the mirror cannot show.",
        excerptKey: "lanechange-blind-spot",
        sourceLabel: "Delaware Driver Manual - Section Five, Scanning",
        sourceUrl: p(118),
      },
      {
        id: "de_s1_27",
        topic: "emergencies",
        question:
          "Your car starts to skid on a wet Delaware road. What does the manual tell you to do?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Pull the parking brake to slow the rear wheels",
          "Stay off the brake and steer in the direction you want the vehicle to go",
          "Accelerate gently to pull the car straight",
        ],
        correctIndex: 2,
        explanation:
          "Stay off the brake and steer where you want to go. Until the vehicle slows the brakes will not help and may deepen the skid.",
        context:
          "As the car begins to straighten, turn the wheel back the other way, or it will swing past straight and start a fresh skid in the opposite direction. Keep correcting left and right until the car is moving under control again. The manual is equally clear about the cause - skids happen because a driver was going too fast for conditions.",
        trap:
          "Braking is the reflex and the wrong one. Braking in a skid is what turns a recoverable slide into a spin.",
        excerptKey: "skid-steer",
        sourceLabel: "Delaware Driver Manual - Section Five, Dealing With Skids",
        sourceUrl: p(139),
      },
      {
        id: "de_s1_28",
        topic: "licensing",
        question:
          "How many questions are on Delaware's Class D knowledge test, and how many must you get right?",
        choices: [
          "20 questions, 16 correct",
          "25 questions, 20 correct",
          "32 questions, 26 correct",
          "40 questions, 32 correct",
        ],
        correctIndex: 2,
        explanation:
          "The Division's own Sample Written Test page states it exactly: the actual Class D knowledge test is 32 questions and 26 must be correct. That is a shade over 81 percent, so you can miss six.",
        context:
          "The manual itself never gives these numbers - it describes the driver examination as four parts (vision screening, the Highway Sign and Signal Test, the Rules Of The Road Test and the road test) without saying how long any of them is. The Division's page also says every answer is found in the Delaware Driver Manual, which is the strongest hint about what to study.",
        trap:
          "The DMV's older FAQ page still says 30 questions with 24 to pass. The Sample Written Test page it links to is the current figure.",
        excerptKey: "exam-32-questions",
        sourceLabel: "Delaware DMV - Sample Written Test",
        sourceUrl: WRITTEN,
        commonlyMissed: true,
      },
      {
        id: "de_s1_29",
        topic: "sharing",
        question:
          "You are following a motorcycle on a road posted at 50 mph. What following distance does the manual recommend?",
        choices: [
          "A two-second count",
          "The same three seconds as for a car",
          "One second for every 10 mph",
          "A four-second count",
        ],
        correctIndex: 3,
        explanation:
          "Delaware splits it at 40 mph: two seconds behind a motorcycle below 40, four seconds above it. At 50 mph you are in the four-second half.",
        context:
          "The reason is not stopping distance - motorcycles can stop faster than cars. It is that a rider who goes down needs room for you to avoid them, and the chance of a fall is highest on wet or icy roads, gravel, and metal surfaces such as bridges and grates. Increase the gap further whenever the surface is slippery.",
        trap:
          "\"Bikes stop quicker so I can follow closer\" gets the physics right and the risk wrong. The gap exists for the rider who falls, not for your brakes.",
        excerptKey: "moto-following-2-4",
        sourceLabel: "Delaware Driver Manual - Section Four, Sharing The Road With Motorcycles",
        sourceUrl: p(100),
      },
      {
        id: "de_s1_30",
        topic: "signs",
        question:
          "You see a rectangular sign with white letters on a green background. What kind of sign is it?",
        choices: [
          "A guide sign, pointing you toward a place",
          "A regulatory sign carrying a law you must obey",
          "A warning of a hazard ahead",
          "A motorist service sign for fuel or food",
        ],
        correctIndex: 0,
        explanation:
          "Green rectangles are guide signs. The arrow points the way to the place named on the sign, and the color is your first clue that it is directional rather than regulatory.",
        context:
          "Delaware's color code runs through the whole system: green for guidance, blue for motorist services such as fuel, food and lodging, brown for recreation such as state parks, yellow for warnings and orange for work zones. Route markers have their own shapes - the US shield, the state circle and the interstate shield in red, white and blue.",
        trap:
          "Blue and green are easy to swap under headlights. Blue is services, green is where you are going.",
        excerptKey: "sign-guide",
        sourceLabel: "Delaware Driver Manual - Section Four, Guide Signs",
        sourceUrl: p(78),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "The everyday law of Delaware driving: signals and arrows, pavement markings, work zones, parking, and the specific Delaware laws the manual gathers under its own heading of Some Important Delaware Laws.",
    questions: [
      {
        id: "de_s2_01",
        topic: "signals",
        question: "What does a flashing yellow arrow mean at a Delaware intersection?",
        choices: [
          "Turn without stopping - you have a protected turn",
          "The turn is permitted after you yield to opposing traffic and pedestrians",
          "Stop, then turn when safe",
          "The turn is prohibited",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow arrow permits the turn but protects nothing. You go when there is a gap, after yielding to oncoming traffic and to anyone in the crosswalk.",
        context:
          "The four arrow indications sit on a scale. A steady green arrow is a protected turn. A flashing yellow arrow is permitted but unprotected. A flashing red arrow means turn after a full stop. A steady red arrow means no movement in that direction at all.",
        trap:
          "Yellow arrows feel like a version of green. This one gives you permission to try, not priority when you do.",
        excerptKey: "arrow-yellow-flashing",
        sourceLabel: "Delaware Driver Manual - Section Four, Arrows",
        sourceUrl: p(71),
      },
      {
        id: "de_s2_02",
        topic: "rules",
        question:
          "Delaware's hand-held device law allows a driver with a full Class D license to do which of these?",
        choices: [
          "Read a text message at a red light",
          "Hold the phone to their ear while using speakerphone",
          "Watch a video on a mounted phone while driving",
          "Dial a number, then put the device down",
        ],
        correctIndex: 3,
        explanation:
          "Delaware permits dialling a number or switching the equipment on and off, and then the device has to go down. Talking is only lawful through a hands-free device.",
        context:
          "The ban is not limited to phones. Delaware also prohibits pagers, PDAs, laptops, games, portable computers and two-way communication devices held in the hand while driving. A short list of exemptions covers emergency responders on duty, anyone reporting an emergency, farm equipment operators, ham radio operators, and employees using a vehicle-mounted two-way radio to reach a dispatcher.",
        trap:
          "Holding a phone on speakerphone is still holding a phone. The law is about the hand, not the ear.",
        excerptKey: "cell-dial-then-down",
        sourceLabel: "Delaware Driver Manual - Section Four, Cell Phone Use While Driving",
        sourceUrl: p(81),
      },
      {
        id: "de_s2_03",
        topic: "signs",
        question: "Orange signs and cones on a Delaware road tell you what?",
        choices: [
          "You are approaching or in a work zone",
          "A detour for oversize vehicles",
          "A festival or event is using the road",
          "A police checkpoint ahead",
        ],
        correctIndex: 0,
        explanation:
          "Orange is Delaware's work-zone color. Warning signs in work zones are orange, and most are diamond shaped, alongside cones, drums, barricades and tubular markers.",
        context:
          "The zone begins at the first traffic-control device warning of it and ends at the last device saying restrictions are lifted, so it usually starts well before the work itself. Flaggers in yellow-green vests with stop and slow paddles may be directing traffic, and their instructions carry the same weight as a signal.",
        trap:
          "Yellow and orange look alike at speed. Yellow warns of the road itself; orange means people are working on it.",
        excerptKey: "wz-orange",
        sourceLabel: "Delaware Driver Manual - Section Four, Work Zones",
        sourceUrl: p(79),
      },
      {
        id: "de_s2_04",
        topic: "speed",
        question:
          "What happens to a speeding fine in a Delaware work zone?",
        choices: [
          "It is unchanged, but points are doubled",
          "It carries an automatic license suspension",
          "It is reduced if no workers are present",
          "It is doubled",
        ],
        correctIndex: 3,
        explanation:
          "Delaware doubles the fine for exceeding the speed limit in a work zone. The manual states it plainly in its list of what to do when driving through one.",
        context:
          "Work-zone limits are often lower than the normal limit for that road, and the doubled fine applies to the posted work-zone number. The manual's other instructions for the zone are about predictability: move out of a closing lane early, do not weave, brake gradually, and keep pace with the traffic around you.",
        trap:
          "An empty-looking work zone is still a work zone. The signs, not the presence of workers, define where the doubled fine applies.",
        excerptKey: "wz-double-fine",
        sourceLabel: "Delaware Driver Manual - Section Four, When Driving Through A Work Zone",
        sourceUrl: p(79),
        commonlyMissed: true,
      },
      {
        id: "de_s2_05",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping center driveway onto a main road. Who has the right of way?",
        choices: [
          "You, once the nearest vehicle is more than four seconds away",
          "Whichever driver signals first",
          "Traffic already on the main road - you must yield, stopping if necessary",
          "Traffic on the main road, unless you are turning right",
        ],
        correctIndex: 2,
        explanation:
          "A driver entering a road from a driveway, alley or roadside yields to traffic already on it. The duty includes stopping if that is what yielding takes.",
        context:
          "The manual extends this specifically to drivers entering from turn-only lanes. Separately, crossing the sidewalk to get out of that driveway puts you under a second duty - you must yield to pedestrians on the sidewalk, and driving on a sidewalk is illegal except to cross it.",
        trap:
          "Turning right does not change the duty. You are joining their road either way.",
        excerptKey: "row-driveway-entering",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(88),
      },
      {
        id: "de_s2_06",
        topic: "parking",
        question:
          "How close to a crosswalk at an intersection may you park in Delaware?",
        choices: [
          "No closer than 20 feet",
          "No closer than 10 feet",
          "No closer than 30 feet",
          "Right up to it, as long as you are not on it",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet from a crosswalk at an intersection, and never in the intersection or on the crosswalk itself. The gap exists so drivers can see people about to step out.",
        context:
          "The neighboring figure is easy to confuse with it: 30 feet is the distance from a flashing beacon, stop sign or traffic signal. Both appear in the same list in the manual, along with 15 feet from a hydrant and 50 feet from a railroad crossing.",
        trap:
          "Twenty and thirty feet sit next to each other on the page. Twenty is the crosswalk; thirty is the stop sign or signal.",
        excerptKey: "park-crosswalk-20",
        sourceLabel: "Delaware Driver Manual - Section Four, Stopping And Parking Violations",
        sourceUrl: p(92),
      },
      {
        id: "de_s2_07",
        topic: "safety",
        question:
          "Delaware law prohibits driving while wearing which of these?",
        choices: [
          "Sunglasses after dark",
          "Headphones or earphones covering or going in both ears",
          "A hat that shades the eyes",
          "Gloves",
        ],
        correctIndex: 1,
        explanation:
          "Delaware makes it illegal to drive with head or earphones covering or going into both ears, because they make it hard to hear a horn or a siren.",
        context:
          "The manual gives the same rule to cyclists a few pages later - a bicyclist may not wear a headset covering both ears either. On sunglasses the guidance is different in kind: dark glasses and tinted contact lenses at night are discouraged rather than banned, because they cut the light you need to see.",
        trap:
          "One earbud is not the same as two. The rule is written around both ears being covered.",
        excerptKey: "headphones-illegal",
        sourceLabel: "Delaware Driver Manual - Section Five, Seeing Well",
        sourceUrl: p(116),
      },
      {
        id: "de_s2_08",
        topic: "rules",
        question:
          "A broken white line separates your lane from the one beside it. What does it mean?",
        choices: [
          "You may cross it to change lanes when it is safe",
          "Traffic in the next lane is traveling toward you",
          "Lane changing is discouraged here",
          "Lane changing is prohibited here",
        ],
        correctIndex: 0,
        explanation:
          "White separates lanes going the same way, and a broken white line means you may cross it to change lanes when safe. Yellow, by contrast, separates opposing traffic.",
        context:
          "The white line escalates in three steps. Broken means you may change lanes. A single solid white line means lane changing is discouraged. Double solid white lines prohibit it outright. Solid white lines along the edge of the road are edge lines, marking where the travel lane ends.",
        trap:
          "White never means oncoming traffic. If the line between you and the next lane is white, everyone there is going your way.",
        excerptKey: "mark-white-lines",
        sourceLabel: "Delaware Driver Manual - Section Four, Pavement Markings",
        sourceUrl: p(84),
      },
      {
        id: "de_s2_09",
        topic: "sharing",
        question:
          "You are approaching a stationary police car on the shoulder of a four-lane Delaware road, lights flashing. What does the Move Over law require?",
        choices: [
          "Sound your horn as you pass to acknowledge the officer",
          "Stop until the officer waves you through",
          "Change lanes away from it if you safely can, and otherwise slow to a safe speed",
          "Pass at the posted limit, keeping to the far side of your lane",
        ],
        correctIndex: 2,
        explanation:
          "Delaware's Move Over law gives you two options in order: change lanes away from the stopped vehicle if it is possible and safe, and if it is not, slow down and pass with caution.",
        context:
          "The law covers far more than police cars. It reaches DelDOT vehicles with amber lights, tow trucks with amber or white lights, utility vehicles, and any stationary vehicle showing hazard lights, flares, cones or caution signs. Where the road is 50 mph or faster and you cannot change lanes, Title 21 sets the reduced speed at 20 mph below the posted limit. A first offense carries a fine of up to $250.",
        trap:
          "\"Slow down a bit\" is not the primary duty on a multi-lane road. Moving over is, and slowing is the fallback when moving over is unsafe.",
        excerptKey: "moveover-stationary",
        sourceLabel: "Delaware Driver Manual - Section Four, Move Over Laws",
        sourceUrl: p(82),
        commonlyMissed: true,
      },
      {
        id: "de_s2_10",
        topic: "signals",
        question:
          "You approach an intersection where the traffic signal is completely dark - no lights showing at all. What does Delaware require?",
        choices: [
          "Treat it as a four-way stop and take turns",
          "Proceed at normal speed, since the signal is not controlling traffic",
          "Wait for a police officer to arrive and direct traffic",
          "Reduce speed and prepare to yield to vehicles in or approaching the intersection",
        ],
        correctIndex: 3,
        explanation:
          "The manual's rule for a dark signal is to reduce speed and prepare to yield to other vehicles in or approaching the intersection. It does not convert the intersection into a four-way stop.",
        context:
          "This is one of the places where Delaware's wording differs from several neighboring states, which do treat a dark signal as an all-way stop. Delaware asks for reduced speed and readiness to yield. Whatever the wording, the safe move is the same - slow enough that you can give way to anyone already there.",
        trap:
          "\"Treat it as a four-way stop\" is the rule in other states and it is what most drivers say. Delaware's manual words it as slow down and prepare to yield.",
        excerptKey: "dark-signal",
        sourceLabel: "Delaware Driver Manual - Section Four, Dark Traffic Signals",
        sourceUrl: p(70),
        commonlyMissed: true,
      },
      {
        id: "de_s2_11",
        topic: "safety",
        question:
          "How much should you reduce your speed on a wet Delaware road, according to the manual?",
        choices: [
          "By half",
          "To a crawl",
          "By about 10 mph",
          "Not at all if the posted limit is already low",
        ],
        correctIndex: 2,
        explanation:
          "About 10 mph off your speed on a wet road. The manual gives three separate figures, one for each surface, and this is the mildest of them.",
        context:
          "The scale runs wet, then packed snow, then ice: reduce by about 10 mph on a wet road, cut your speed in half on packed snow, and slow to a crawl on ice. The manual adds that driving on ice is very dangerous and that you should not drive at all when the roads are icy if you can avoid it.",
        trap:
          "Halving your speed is the packed-snow figure, not the wet-road one. The three numbers are separate and the exam asks for the right one.",
        excerptKey: "wet-road-10mph",
        sourceLabel: "Delaware Driver Manual - Section Five, Adjusting To Road Conditions",
        sourceUrl: p(123),
      },
      {
        id: "de_s2_12",
        topic: "signs",
        question:
          "A round yellow sign with a black X and the letters RR means what?",
        choices: [
          "You are at a railroad crossing and must yield to trains",
          "The railroad crossing ahead is closed",
          "The crossing has more than one track",
          "A railroad crossing is ahead - slow down and watch for it",
        ],
        correctIndex: 3,
        explanation:
          "The round yellow sign is the advance warning, placed along the road before you reach the crossing. Slow down, watch for the crossing, and use particular caution at night so you do not drive into the side of a train.",
        context:
          "The sign at the crossing itself is a different one: the white X-shaped crossbuck, which the manual says has the same meaning as a yield sign. Flashing side-by-side lights at the crossing mean stop, and a lowered gate is never to be driven around. If there is no sign showing the number of tracks, check for a second track yourself before crossing.",
        trap:
          "The round yellow sign and the white crossbuck do different jobs. One warns you the crossing is coming; the other is the yield at the crossing.",
        excerptKey: "sign-rr-advance",
        sourceLabel: "Delaware Driver Manual - Section Four, Warning Signs",
        sourceUrl: p(75),
      },
      {
        id: "de_s2_13",
        topic: "rules",
        question:
          "You are on a Delaware road with a center lane marked by a solid yellow line and a broken yellow line on each side, with left-turn arrows painted in it. What is that lane for?",
        choices: [
          "Making left turns, and U-turns where they are permitted, from either direction",
          "Passing slower traffic in either direction",
          "Emergency vehicles only",
          "High-occupancy vehicles during rush hour",
        ],
        correctIndex: 0,
        explanation:
          "That is a shared center lane, reserved for left turns from traffic traveling in both directions. Where U-turns are permitted, they may be made from it too.",
        context:
          "The painted arrows alternate, one set for each direction, which is the visual clue that the lane is shared. The manual warns that in some places the same lane becomes a reversible lane at rush hour, so make sure you are allowed to be in it before you enter.",
        trap:
          "A shared center lane is not a passing lane and not a merge lane. Using it to travel any distance is a misuse of it.",
        excerptKey: "shared-center-lane",
        sourceLabel: "Delaware Driver Manual - Section Four, Shared Center Lane",
        sourceUrl: p(87),
      },
      {
        id: "de_s2_14",
        topic: "impairment",
        question:
          "A Delaware driver aged 19 is stopped and tests at .03 BAC. What does the zero tolerance law do?",
        choices: [
          "Nothing - the level is below .08",
          "Revokes their driver license, since the trigger for a driver under 21 is .02",
          "Issues a warning for a first offense",
          "Suspends the license only if the driver was also speeding",
        ],
        correctIndex: 1,
        explanation:
          "Delaware's zero tolerance statute sets .02 for drivers under 21, so .03 is over the line. The consequence is revocation of the license, not a warning.",
        context:
          "The revocation runs two months for a first offense and between six and twelve months for each subsequent one. Underage possession or consumption of alcohol can cost a license even when no driving is involved, and a juvenile convicted of DUI can lose driving privileges until they turn 21.",
        trap:
          ".08 is the adult threshold and it does not apply here. For a driver under 21 the number that matters is .02.",
        excerptKey: "bac-zero-tolerance-02",
        sourceLabel: "Delaware Driver Manual - Section Two, Drinking And Blood Alcohol Concentration",
        sourceUrl: p(50),
        commonlyMissed: true,
      },
      {
        id: "de_s2_15",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection with no signs or signals at exactly the same moment. Who yields?",
        choices: [
          "The driver on the right yields to the driver on the left",
          "The driver on the left yields to the driver on the right",
          "The driver on the narrower road yields",
          "The driver traveling faster yields",
        ],
        correctIndex: 1,
        explanation:
          "At an uncontrolled intersection Delaware asks drivers to yield to vehicles coming from the right. So the driver on the left is the one who gives way.",
        context:
          "The manual is unusually candid about how little this rule is worth in practice - it adds that the safest course is to consider yielding to all vehicles before entering. That advice sits under the section's opening statement that the law never gives anyone the right of way, only says who must yield.",
        trap:
          "The rule is easy to invert under pressure. Yield to the right means the car on your right goes, not that you go because you are on someone's right.",
        excerptKey: "row-uncontrolled",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(88),
      },
      {
        id: "de_s2_16",
        topic: "safety",
        question:
          "The manual says a driver should look how far ahead down the road?",
        choices: [
          "About two seconds",
          "About five seconds",
          "At least ten seconds",
          "As far as the headlights reach, whatever the speed",
        ],
        correctIndex: 2,
        explanation:
          "Safer drivers look at least ten seconds ahead of the vehicle. That is the distance you will cover in ten seconds, not a fixed number of feet.",
        context:
          "The manual converts it for you: ten seconds is about one city block in town and about four city blocks, or a quarter of a mile, on the highway. Looking that far ahead means less last-minute braking, straighter steering, better fuel economy and more time to see what is beside the road.",
        trap:
          "Ten seconds ahead and the three-second following distance are different measurements. One is how far you look; the other is how far you sit behind the car in front.",
        excerptKey: "scan-10-seconds",
        sourceLabel: "Delaware Driver Manual - Section Five, Scanning",
        sourceUrl: p(116),
      },
      {
        id: "de_s2_17",
        topic: "speed",
        question:
          "The speed limit sign says 55, but heavy rain has cut visibility badly. What does Delaware's general speed restriction mean for you?",
        choices: [
          "You must not drive faster than is reasonable for existing conditions, so 55 may be unlawful",
          "You may drive 55, since that is the legal limit",
          "You must drive at least 45 to avoid impeding traffic",
          "The posted limit automatically drops by 10 mph in rain",
        ],
        correctIndex: 0,
        explanation:
          "Delaware has two speed laws working at once, and you must obey both. The posted number is a ceiling; the general restriction says you may never drive faster than is reasonable for the conditions.",
        context:
          "The manual spells out the consequence: it is not always lawful to drive as fast as the posted limit, and you can be ticketed for driving too fast for conditions even while under it. In very heavy rain, snow or fog you may not see more than 200 feet, and at that visibility the manual says 30 mph is the most you can safely do.",
        trap:
          "\"I was under the limit\" is not a defense in Delaware. Both rules apply, and the stricter one governs.",
        excerptKey: "speed-general-restriction",
        sourceLabel: "Delaware Driver Manual - Section Four, General Speed Restriction",
        sourceUrl: p(93),
      },
      {
        id: "de_s2_18",
        topic: "parking",
        question:
          "Where must you park when stopping on a two-way Delaware highway with a curb?",
        choices: [
          "At any angle that keeps the vehicle off the travel lane",
          "Parallel to and within 3 feet of the curb",
          "Facing traffic, so your headlights warn oncoming drivers",
          "Parallel to and within 12 inches of the curb or edge of the highway",
        ],
        correctIndex: 3,
        explanation:
          "Parallel, and within 12 inches of the curb or road edge. The manual repeats the 12-inch figure at the end of its parallel-parking steps, so it is the number to remember.",
        context:
          "On a one-way street you may park at the left-hand curb, following the same steps with right and left reversed. When you leave the vehicle, Delaware requires you to stop the engine, lock the ignition, remove the key and set the brakes - and notes that leaving the keys in a running unattended vehicle is against the law.",
        trap:
          "Three feet is what a badly parked car looks like, not what the law allows. Twelve inches is the figure, and the road test measures it.",
        excerptKey: "park-parallel-12-inches",
        sourceLabel: "Delaware Driver Manual - Section Four, General Parking Rules",
        sourceUrl: p(91),
      },
      {
        id: "de_s2_19",
        topic: "sharing",
        question:
          "A pedestrian is actively crossing at an unmarked crosswalk where two streets meet. What must a Delaware driver do?",
        choices: [
          "Proceed, since only marked crosswalks carry a duty to yield",
          "Stop - the duty applies at a marked or unmarked crosswalk",
          "Sound the horn to warn them and continue",
          "Yield only if they are already in your half of the road",
        ],
        correctIndex: 1,
        explanation:
          "Delaware's duty covers marked and unmarked crosswalks alike. Where two streets meet, a crosswalk exists whether anyone painted it or not.",
        context:
          "The manual is explicit that not all crosswalks are marked and tells you to be alert for pedestrians at intersections generally. It also draws a line: you must stop for a pedestrian actively crossing, but you may proceed with caution if the person is standing safely on the sidewalk. And you may never pass a vehicle that has stopped to let a pedestrian cross.",
        trap:
          "Paint is not what creates the crosswalk. The intersection does.",
        excerptKey: "ped-driver-must-stop",
        sourceLabel: "Delaware Driver Manual - Section Four, Pedestrians",
        sourceUrl: p(94),
        commonlyMissed: true,
      },
      {
        id: "de_s2_20",
        topic: "rules",
        question:
          "You are in the through lane and the vehicle ahead of you stops to make a left turn. Delaware law says what about passing it on the right?",
        choices: [
          "It is prohibited in all cases",
          "It is legal only where a sign permits it",
          "It is legal only if the vehicle has been stopped for more than ten seconds",
          "It is legal, and you may even use the shoulder to do it, but great care is required",
        ],
        correctIndex: 3,
        explanation:
          "Delaware permits passing a left-turning vehicle on the right, and even permits using the shoulder to do it. The manual calls it a very crash-prone situation and asks for extreme care.",
        context:
          "The reason for the warning is that other drivers do not expect a vehicle on the shoulder. Everywhere else the manual pushes you the other way: on multi-lane roads the left-most lane is the passing lane, and passing on the right generally risks the other driver changing lanes into you because they never saw you.",
        trap:
          "This is one of the few places where the shoulder is lawful for a moving vehicle. Assuming it is always illegal costs you the answer.",
        excerptKey: "passing-right-left-turners",
        sourceLabel: "Delaware Driver Manual - Section Four, General Rules - Passing",
        sourceUrl: p(87),
      },
      {
        id: "de_s2_21",
        topic: "safety",
        question:
          "Your vehicle has anti-lock brakes and you need to stop in an emergency. What does the manual tell you to do?",
        choices: [
          "Pump the brake pedal rapidly",
          "Press the pedal as hard as you can and keep pressing",
          "Brake hard, then release as soon as you feel the pedal vibrate",
          "Use the parking brake instead",
        ],
        correctIndex: 1,
        explanation:
          "With ABS you press as hard as you can and hold it. The pedal may push back or vibrate as the system works, and that is exactly when you must not let up.",
        context:
          "Without ABS the technique reverses: brake as hard as you can without locking the wheels, and if they do lock and the car starts to skid, release quickly and reapply. ABS has a second benefit the manual highlights - it lets you steer while braking hard, which is useful when you must slow and swerve at once.",
        trap:
          "Pumping the pedal is the pre-ABS technique. On an ABS car it defeats the system that is already pumping for you.",
        excerptKey: "avoid-abs-stop",
        sourceLabel: "Delaware Driver Manual - Section Five, Stopping Quickly",
        sourceUrl: p(138),
      },
      {
        id: "de_s2_22",
        topic: "signals",
        question: "What does a steady red arrow mean?",
        choices: [
          "Turn after a full stop, if it is safe",
          "The turn is permitted but unprotected",
          "A full stop is required, and you may not proceed in that direction at all",
          "The green arrow has just ended - finish your turn",
        ],
        correctIndex: 2,
        explanation:
          "A steady red arrow is an absolute stop for that movement. Unlike a round red, it does not allow a turn after stopping.",
        context:
          "This is why the manual mentions the red arrow in its right-on-red rule: the right turn on red is permitted after a full stop except where a sign prohibits it or a steady red arrow is displayed. A flashing red arrow is a different signal entirely and does allow the turn after a full stop.",
        trap:
          "Turning right on a steady red arrow is the single most common way drivers lose the arrows question. Round red allows it; red arrow does not.",
        excerptKey: "arrow-red-steady",
        sourceLabel: "Delaware Driver Manual - Section Four, Arrows",
        sourceUrl: p(71),
        commonlyMissed: true,
      },
      {
        id: "de_s2_23",
        topic: "signs",
        question:
          "You see a triangular fluorescent orange emblem on the back of a vehicle ahead. What does it mean?",
        choices: [
          "The vehicle is a slow-moving vehicle - slow down immediately and proceed with caution",
          "The vehicle is carrying hazardous materials",
          "The driver is a student under instruction",
          "The vehicle is disabled and is being towed",
        ],
        correctIndex: 0,
        explanation:
          "The orange triangle is the slow-moving vehicle emblem, used on farm tractors and other equipment that cannot keep up with traffic. When you see it, slow down at once.",
        context:
          "The manual notes that farm tractors, animal-drawn vehicles and roadway maintenance vehicles usually travel at 25 mph or less. Closing on one at highway speed leaves very little time, which is why the instruction is to slow immediately rather than to assess and then react.",
        trap:
          "Hazardous-materials placards are diamond-shaped and carry numbers. The plain orange triangle is about speed, not cargo.",
        excerptKey: "sign-slow-moving-emblem",
        sourceLabel: "Delaware Driver Manual - Section Four, Slow-Moving Vehicles",
        sourceUrl: p(102),
      },
      {
        id: "de_s2_24",
        topic: "rules",
        question:
          "You miss your exit on a Delaware highway. What does the manual tell you to do?",
        choices: [
          "Back up along the shoulder to reach it",
          "Carry on to a place where you can safely turn around",
          "Stop and wait for a gap, then reverse",
          "Use the next median crossing, whatever the signs say",
        ],
        correctIndex: 1,
        explanation:
          "Go on and turn around where it is safe. The manual is direct about this: if you miss your turn or exit, do not back up.",
        context:
          "Backing in a travel lane is prohibited except to parallel park or, where necessary, to leave a driveway - drivers do not expect a vehicle coming toward them and may not notice until it is too late. Median crossings have their own rule: if the crossing is marked for emergency vehicles only, using it is illegal.",
        trap:
          "The shoulder feels like a safe place to reverse. It is a travel surface with drivers entering and leaving it at speed.",
        excerptKey: "missed-turn",
        sourceLabel: "Delaware Driver Manual - Section Four, General Rules",
        sourceUrl: p(87),
      },
      {
        id: "de_s2_25",
        topic: "impairment",
        question:
          "A driver arrested for DUI in Delaware refuses the chemical test. What follows?",
        choices: [
          "A report of refusal goes to the DMV, which may revoke the license for one to two years",
          "Nothing, because the test is voluntary",
          "The arrest is void without a test result",
          "A fine, but no effect on the license",
        ],
        correctIndex: 0,
        explanation:
          "Delaware's implied consent law means that by driving you have already consented to the test. Refusing produces a report to the Division, which may revoke the license for one to two years depending on your record.",
        context:
          "The consent applies to breath, blood and urine, and to anyone in actual physical control of a vehicle, an off-highway vehicle or a moped. Refusal also carries a heavier administrative revocation than a high reading: on a first offense the refusal figure is twelve months, against three months where the case rests on probable cause.",
        trap:
          "Refusing is not a way to avoid the consequences. It substitutes a longer license revocation for the evidence.",
        excerptKey: "dui-implied-consent",
        sourceLabel: "Delaware Driver Manual - Section Two, Implied Consent Law",
        sourceUrl: p(54),
      },
      {
        id: "de_s2_26",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a white cane is crossing ahead of you. What does Delaware require?",
        choices: [
          "Yield, and use your horn to signal that you have seen them",
          "Yield - they have absolute right of way - and do not use your horn",
          "Proceed slowly around them",
          "Yield only if they are within a marked crosswalk",
        ],
        correctIndex: 1,
        explanation:
          "A pedestrian using a guide dog or carrying a white cane has absolute right of way in Delaware. The manual adds a specific instruction not to sound your horn, because it can confuse or frighten them.",
        context:
          "The same section requires drivers to yield to pedestrians who are hearing impaired or who use canes, crutches, walkers, service animals, wheelchairs or motorized scooters, because they may not detect approaching traffic and may need more time. Elsewhere the manual lists sounding the horn around blind pedestrians among the times you should not use it at all.",
        trap:
          "Sounding the horn feels helpful and is the wrong instinct here. A blind pedestrian is navigating by sound, and your horn takes that away.",
        excerptKey: "row-white-cane",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(88),
      },
      {
        id: "de_s2_27",
        topic: "speed",
        question:
          "What does the black-on-yellow number on a plate beneath a curve warning sign mean?",
        choices: [
          "The legal speed limit for the curve",
          "The minimum speed for the curve",
          "The recommended speed for that stretch of road",
          "The maximum speed for trucks only",
        ],
        correctIndex: 2,
        explanation:
          "Yellow means advisory. It is the recommended speed for the curve or the stretch below the sign, and it is often posted under a warning sign.",
        context:
          "The legal limit is always black on a white rectangle. But the manual attaches teeth to the advisory number anyway: exceed it and crash, and it may be concluded that you violated the general speed restriction, which can lead to arrest.",
        trap:
          "Advisory does not mean ignorable. It is not the posted limit, but exceeding it becomes evidence against you if something goes wrong.",
        excerptKey: "sign-advisory-consequence",
        sourceLabel: "Delaware Driver Manual - Section Four, Speed Signs",
        sourceUrl: p(94),
      },
      {
        id: "de_s2_28",
        topic: "emergencies",
        question:
          "Your vehicle breaks down on a Delaware highway and you cannot get it off the road. What does the manual tell you to do?",
        choices: [
          "Stand behind the vehicle so you are visible to approaching drivers",
          "Change the tire quickly, even if you must work in a traffic lane",
          "Stop just over the crest of a hill, where drivers will slow anyway",
          "Turn on your emergency flashers and try to warn other drivers, but never stand in the roadway",
        ],
        correctIndex: 3,
        explanation:
          "Flashers on, warn other traffic if you can, and never stand in the roadway. The manual is explicit that you should not change a tire if it means being in a traffic lane.",
        context:
          "The fuller sequence is to get the vehicle off the road if at all possible, choose a spot where approaching drivers have a clear view of you - not just over a hill or around a curve - and place flares behind the vehicle so drivers can change lanes. Lifting the hood or tying a white cloth to the antenna, mirror or door handle signals that you need help.",
        trap:
          "Standing behind the vehicle to be seen puts you in the path of exactly the driver who has not seen you.",
        excerptKey: "breakdown-never-stand",
        sourceLabel: "Delaware Driver Manual - Section Five, Use emergency signals",
        sourceUrl: p(121),
      },
      {
        id: "de_s2_29",
        topic: "sharing",
        question:
          "The Bicycle Friendly Delaware Act changed what for bicyclists at stop signs?",
        choices: [
          "They must now stop at every stop sign without exception",
          "They must dismount and walk the bicycle across",
          "Stop signs no longer apply to bicycles at all",
          "They may yield rather than stop, after carefully looking for other vehicles",
        ],
        correctIndex: 3,
        explanation:
          "Delaware allows a bicyclist to yield at a stop sign after carefully looking for other vehicles, rather than requiring a full stop in every case. It is a genuine change in the law, not a courtesy.",
        context:
          "The permission has limits set out in Title 21. A full stop is still required where the intersecting road has three or more lanes for moving traffic, and where another vehicle is already stopped at the same stop sign. On roads with two or fewer lanes the cyclist reduces speed, yields, and may then proceed without stopping.",
        trap:
          "A cyclist rolling a stop sign in Delaware may be riding perfectly lawfully. Expecting them to stop is what causes the conflict.",
        excerptKey: "bike-friendly-act-yield",
        sourceLabel: "Delaware Driver Manual - Section Four, Bicycle Friendly Delaware Act",
        sourceUrl: p(96),
        commonlyMissed: true,
      },
      {
        id: "de_s2_30",
        topic: "licensing",
        question:
          "How soon after passing the knowledge exam may an over-18 Delaware applicant take the Class D road exam?",
        choices: [
          "Immediately",
          "After 10 days",
          "After 30 days",
          "After 6 months",
        ],
        correctIndex: 2,
        explanation:
          "Thirty days. Delaware makes you hold the learner's permit and practice for a month between passing the knowledge exam and taking the road exam.",
        context:
          "The motorcycle road exam has a shorter wait of ten days. All exams for a temporary instruction permit must be passed within twelve months of application, and while learning you must be accompanied by a licensed driver at least 21 years old who is qualified for the class of vehicle.",
        trap:
          "Ten days is the motorcycle figure. For a car it is thirty.",
        excerptKey: "exam-road-30-days",
        sourceLabel: "Delaware Driver Manual - Section Two, The Driver Examination",
        sourceUrl: p(41),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched at the level of the real Rules Of The Road Test: the same rules, worded the way the DMV words them, with the distractors that make people slow down and read twice.",
    questions: [
      {
        id: "de_s3_01",
        topic: "rules",
        question:
          "You must never park on the paved part of a Delaware highway outside a business or residence district. What is the one exception?",
        choices: [
          "When you are waiting for a passenger",
          "When your hazard lights are on",
          "When you are entirely on the shoulder",
          "When the vehicle is disabled and cannot be moved",
        ],
        correctIndex: 3,
        explanation:
          "The only exception is a disabled vehicle that cannot be moved, and even then you pull off to the right as far as possible. Everything else - waiting, dropping someone off, a quick errand - is prohibited.",
        context:
          "The manual reinforces this from the other direction in its general rules: do not stop in travel lanes for any reason, whether confusion, a breakdown, or letting out a passenger. Keep moving until you can safely pull off the road.",
        trap:
          "Hazard lights are not permission. They tell other drivers there is a problem; they do not make an unlawful stop lawful.",
        excerptKey: "park-on-highway",
        sourceLabel: "Delaware Driver Manual - Section Four, Parking on Highways",
        sourceUrl: p(92),
      },
      {
        id: "de_s3_02",
        topic: "safety",
        question:
          "How large a gap do you need to merge into traffic, according to the Delaware manual?",
        choices: [
          "About two seconds",
          "About four seconds",
          "About three seconds",
          "About six seconds",
        ],
        correctIndex: 1,
        explanation:
          "Four seconds. The arithmetic is the point: move into the middle of a four-second gap and both you and the driver now behind you end up with the three-second following distance the manual asks for.",
        context:
          "The same four-second gap applies whenever you change lanes, enter a roadway, or your lane merges with another. The manual warns against squeezing into a small gap, because a small gap shrinks fast, and tells you to cross several lanes one at a time rather than waiting for all of them to clear at once.",
        trap:
          "Three seconds is the following distance, not the merge gap. Merging into three seconds leaves the driver behind you following too closely.",
        excerptKey: "space-merge-four-seconds",
        sourceLabel: "Delaware Driver Manual - Section Five, Space To Merge",
        sourceUrl: p(130),
        commonlyMissed: true,
      },
      {
        id: "de_s3_03",
        topic: "signs",
        question:
          "Delaware's regulatory signs are which shapes and colors?",
        choices: [
          "Always yellow diamonds",
          "Always green rectangles",
          "Square, rectangular or specially shaped, usually white, red or black",
          "Always orange, in work zones only",
        ],
        correctIndex: 2,
        explanation:
          "Regulatory signs carry laws, and Delaware's are square, rectangular or specially shaped in white, red or black. The stop sign's octagon and the yield sign's triangle are the special shapes.",
        context:
          "The manual asks you to know signs by shape and color as well as by their words, because that is how the Highway Sign and Signal Test is conducted - the examiner shows shapes and colors without labels and asks you to identify them. Warning signs are yellow diamonds; guide signs are green rectangles; work zone signs are orange.",
        trap:
          "Regulatory does not mean one shape. The category is defined by what the sign does, not by how it looks.",
        excerptKey: "sign-regulatory-shape",
        sourceLabel: "Delaware Driver Manual - Section Four, Regulatory Signs",
        sourceUrl: p(74),
      },
      {
        id: "de_s3_04",
        topic: "rightOfWay",
        question:
          "You are approaching a roundabout in Delaware. Who has priority?",
        choices: [
          "Traffic already in the circle - entering drivers must yield",
          "Traffic entering has priority over traffic in the circle",
          "Whichever driver reaches the yield line first",
          "The larger vehicle, because it needs the room",
        ],
        correctIndex: 0,
        explanation:
          "Drivers entering a traffic circle or roundabout yield to drivers already in it. Once you are inside, you have priority over entering traffic and should not stop except to avoid a collision.",
        context:
          "The approach is otherwise like any four-way intersection: right lane if you are turning right, left lane for a left turn or U-turn, either lane if you are going straight. Stay right of the splitter island, slow down on approach, watch for cyclists merging into the entry lane, and yield to pedestrians in the crosswalk both entering and leaving.",
        trap:
          "Stopping inside the circle to let someone in is the wrong courtesy. It backs the roundabout up and surprises the driver behind you.",
        excerptKey: "row-traffic-circle",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(88),
      },
      {
        id: "de_s3_05",
        topic: "safety",
        question:
          "You are driving at 55 mph and want to pass on a two-lane road. How much space do you need?",
        choices: [
          "About 500 feet of clear road",
          "About one-third of a mile, which is a 10-second gap",
          "About a quarter of a mile",
          "About half a mile",
        ],
        correctIndex: 1,
        explanation:
          "At 55 mph the pass takes about ten seconds, and both you and the oncoming vehicle cover more than 800 feet in that time. Together that is over 1600 feet, roughly a third of a mile.",
        context:
          "The manual applies the same third of a mile to hills and curves: if your view is blocked, assume there is an oncoming vehicle just out of sight, and do not start a pass within a third of a mile of a hill or curve. It also warns that a distant oncoming vehicle appears to be standing still - if you can see it getting closer, it is probably too close.",
        trap:
          "A quarter of a mile is roughly what ten seconds looks like on the highway when you are scanning ahead, not what a pass needs. The pass figure is a third.",
        excerptKey: "space-pass-1600-feet",
        sourceLabel: "Delaware Driver Manual - Section Five, Space To Pass",
        sourceUrl: p(131),
        commonlyMissed: true,
      },
      {
        id: "de_s3_06",
        topic: "signals",
        question:
          "A pedestrian signal is showing a flashing DON'T WALK. What does it mean for a pedestrian who has not yet stepped off the curb?",
        choices: [
          "They may start, but must hurry",
          "They may cross if no vehicle is within one block",
          "They must wait for a police officer",
          "They should not start to cross",
        ],
        correctIndex: 3,
        explanation:
          "A flashing DON'T WALK means finish crossing if you have already started, and do not start if you have not. Only the steady signal means do not cross at all under any circumstance.",
        context:
          "Drivers obey the vehicle signals; pedestrians obey WALK and DON'T WALK. A WALK indication imposes a duty on drivers - the manual says drivers are required to yield to pedestrians who have a WALK indicator - and the same section reminds pedestrians on WALK to stay alert for cars turning across the crosswalk.",
        trap:
          "The flashing and steady versions are not the same signal. Flashing is about finishing; steady is about not starting.",
        excerptKey: "ped-flashing-dontwalk",
        sourceLabel: "Delaware Driver Manual - Section Four, Pedestrian Signals",
        sourceUrl: p(72),
      },
      {
        id: "de_s3_07",
        topic: "rules",
        question:
          "Delaware requires you to report a crash to the police when property damage reaches what apparent amount?",
        choices: ["$250 or more", "$500 or more", "$1,000 or more", "$2,500 or more"],
        correctIndex: 1,
        explanation:
          "Five hundred dollars of apparent damage on a public highway triggers the reporting duty. Any injury or death triggers it regardless of damage.",
        context:
          "There is a third threshold that catches people out. Where it appears a driver's physical ability was impaired by alcohol or drugs, the reporting figure is $1,000 or more of property damage. And if the only damage is to your own property, with no one else's person or property involved, you need not stay at the scene but must report the crash immediately.",
        trap:
          "The $1,000 figure belongs to the impaired-driver case only. For an ordinary crash on a public road the number is $500.",
        excerptKey: "crash-report-thresholds",
        sourceLabel: "Delaware Driver Manual - Section Five, Reporting Crashes",
        sourceUrl: p(141),
        commonlyMissed: true,
      },
      {
        id: "de_s3_08",
        topic: "speed",
        question:
          "What is the posted speed limit on Delaware Route 1 and Interstate 495?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Delaware's highest limit is 65 mph, and the manual names exactly two roads that carry it: Route 1 and Interstate 495. Everything else tops out at 55.",
        context:
          "Controlled-access highways such as turnpikes and expressways sit at 55 in the manual's table, as do divided roads and roads with four or more lanes. Delaware is a small state with a low ceiling, which surprises drivers coming from states where 70 is normal.",
        trap:
          "Assuming interstates are always the fastest road misses it. Most of Delaware's controlled-access mileage is posted at 55.",
        excerptKey: "speed-table",
        sourceLabel: "Delaware Driver Manual - Section Four, Speed Limits",
        sourceUrl: p(93),
        commonlyMissed: true,
      },
      {
        id: "de_s3_09",
        topic: "safety",
        question:
          "At what speed can most tires start to lose traction on a wet Delaware road?",
        choices: [
          "Above about 25 mph",
          "Above about 45 mph",
          "Only above 60 mph",
          "Above about 35 mph",
        ],
        correctIndex: 3,
        explanation:
          "The manual puts good wet traction at up to about 35 mph. Above that the tires begin to ride up on the water, and in heavy rain they can lose all traction at about 50 mph.",
        context:
          "Bald or badly worn tires lose grip at much lower speeds, which is why the manual teaches the penny test - if the tread does not reach Lincoln's head, the tire is unsafe. If you feel the car start to float, ease off the gas, hold the wheel straight, and do not try to brake or turn until the tires grip again.",
        trap:
          "Hydroplaning is not a highway-speed-only problem. It can begin around 35 mph, which is a town speed.",
        excerptKey: "hydroplane-35-50",
        sourceLabel: "Delaware Driver Manual - Section Five, Water on the roadway",
        sourceUrl: p(124),
        commonlyMissed: true,
      },
      {
        id: "de_s3_10",
        topic: "licensing",
        question:
          "A Delaware GDL Level One Learner's Permit holder is in the first six months of driving authority. What supervision applies?",
        choices: [
          "None during daylight hours",
          "Supervision only between 10pm and 6am",
          "Supervision only on highways",
          "They must be supervised at all times",
        ],
        correctIndex: 3,
        explanation:
          "For the first six months the permit holder must be supervised at all times, without exception. Unsupervised daytime driving does not begin until the second six months.",
        context:
          "The supervising driver must be a licensed parent, guardian or an approved licensed driver at least 25 years old who has held a Class D license for at least five years, and must sit beside the permit holder in the front seat with nobody else up front. By the end of that first six months the sponsor certifies 50 hours of driving, ten of them at night.",
        trap:
          "The 6am-to-10pm unsupervised window belongs to the second six months. In the first six months there is no unsupervised driving at all.",
        excerptKey: "gdl-first-six-months",
        sourceLabel: "Delaware Driver Manual - Section Two, GDL Level One Learner's Permit Restrictions",
        sourceUrl: p(29),
      },
      {
        id: "de_s3_11",
        topic: "sharing",
        question:
          "You are following a large truck on a Delaware highway. What following distance does the manual ask for?",
        choices: [
          "The usual three seconds",
          "Two seconds, since trucks brake slowly and give you warning",
          "At least four seconds",
          "Six seconds",
        ],
        correctIndex: 2,
        explanation:
          "At least four seconds behind a truck. Trucks have deep blind spots directly behind them, so the driver cannot see you there, and the trailer blocks your own view of the road ahead.",
        context:
          "The manual describes the areas around a truck where you cannot be seen as the No-Zone: directly behind, along both sides, and immediately in front after a pass. It also warns that trucks swing wide to the left to make a right turn, and that cutting in between the truck and the curb is how those collisions happen.",
        trap:
          "\"A truck takes longer to stop so I am safe behind it\" ignores what you cannot see. The gap is about your own escape route as much as its brakes.",
        excerptKey: "truck-rear-blindspot-4s",
        sourceLabel: "Delaware Driver Manual - Section Four, Near A Truck - No-Zone",
        sourceUrl: p(103),
      },
      {
        id: "de_s3_12",
        topic: "parking",
        question:
          "You are parked on the shoulder of a Delaware highway at dusk. What must you switch on?",
        choices: [
          "Nothing, if you are fully off the travel lane",
          "Your headlights",
          "Your parking lights, or four-way flashers if fitted",
          "Your turn signal on the traffic side",
        ],
        correctIndex: 2,
        explanation:
          "Parking lights, or four-way flashers where the vehicle has them, from sunset to sunrise or whenever light is too poor to see a person or object 1000 feet away.",
        context:
          "The manual adds a specific prohibition: turn signal lights must not be flashed on one side only of a parked vehicle. Delaware's statute makes the same point about not using a one-sided flash as a courtesy or a do-pass signal.",
        trap:
          "Leaving the headlights on is the instinct and it dazzles approaching drivers. Parking lights or four-way flashers are what the rule asks for.",
        excerptKey: "park-lights-1000ft",
        sourceLabel: "Delaware Driver Manual - Section Four, General Parking Rules",
        sourceUrl: p(91),
      },
      {
        id: "de_s3_13",
        topic: "impairment",
        question:
          "The Delaware manual says which drink contains the same amount of alcohol as a 12-ounce beer?",
        choices: [
          "An 8-ounce glass of wine",
          "A 5-ounce glass of wine",
          "A 3-ounce shot of spirits",
          "A 16-ounce glass of wine",
        ],
        correctIndex: 1,
        explanation:
          "A 12-ounce beer, a 5-ounce glass of wine and a cocktail made with 1.5 ounces of 80-proof spirits all carry the same amount of alcohol. The manual's phrase for it is that it is not what you drink, it is how much.",
        context:
          "The consequence the manual draws out is that a specialty drink can be several standard drinks in one glass. Body weight matters too - it takes about half as much alcohol to bring a 100-pound person to a given BAC as a 200-pound person.",
        trap:
          "Wine feels weaker than spirits by volume, so people count a large glass as one drink. Five ounces is the measure that matches a beer.",
        excerptKey: "drink-equivalence",
        sourceLabel: "Delaware Driver Manual - Section Two, Drinking And Driving",
        sourceUrl: p(50),
      },
      {
        id: "de_s3_14",
        topic: "rules",
        question:
          "Where there are no signs or lane markings controlling a turn, which lane should you turn from and into?",
        choices: [
          "Always the right-hand lane, in both directions",
          "Whichever lane has the shortest queue",
          "The center lane, so you can go either way",
          "The lane closest to the direction you want to go, into the lane closest to the one you came from",
        ],
        correctIndex: 3,
        explanation:
          "Turn from the lane nearest the direction you are heading, and into the lane nearest the one you left. Done that way you cross the fewest lanes of traffic.",
        context:
          "The manual asks you to move between the lanes as directly as possible, without crossing lane lines or interfering with other traffic, and to change lanes afterwards if you need to. Where two or more turn lanes are marked, stay in your own lane throughout the turn.",
        trap:
          "Swinging wide to set up the turn is the habit this rule exists to stop. On a right turn it makes the driver behind think you are turning left or changing lanes.",
        excerptKey: "turning-lane-choice",
        sourceLabel: "Delaware Driver Manual - Section Four, General Rules - Turning",
        sourceUrl: p(87),
      },
      {
        id: "de_s3_15",
        topic: "signs",
        question:
          "An overhead lane sign shows an arrow with the word ONLY beneath it. What must you do?",
        choices: [
          "Treat it as advice for unfamiliar drivers",
          "Follow it unless you signal to leave the lane",
          "Go in the direction the arrow points - there is no option",
          "Follow it only during posted hours",
        ],
        correctIndex: 2,
        explanation:
          "You must obey the overhead sign in your lane, and the word ONLY removes any choice. If the arrow points left, that lane goes left.",
        context:
          "Overhead lane control appears where the road ahead splits in ways the pavement markings alone cannot make clear. Reversible lanes use their own overhead signals with a different vocabulary: a green arrow means the lane is open to you, a red X means it is not, and a steady yellow X means leave it as soon as it is safe.",
        trap:
          "Signaling does not buy you out of a lane marked ONLY. The decision was made before you entered it.",
        excerptKey: "overhead-lane-only",
        sourceLabel: "Delaware Driver Manual - Section Four, Overhead Lane Signals",
        sourceUrl: p(75),
      },
      {
        id: "de_s3_16",
        topic: "safety",
        question:
          "The manual says at 50 mph on dry pavement with good tires and brakes, roughly how far does it take to see something and stop?",
        choices: ["About 200 feet", "About 300 feet", "About 600 feet", "About 400 feet"],
        correctIndex: 3,
        explanation:
          "About 400 feet at 50 mph, which the manual describes as roughly the length of a city block. At 30 mph the figure is about 200 feet.",
        context:
          "The manual turns those distances into a visibility test. If you cannot see 400 feet ahead, you may not be driving safely at 50 mph; if you cannot see 200 feet, you may not be safe at 30. That is why the four-second sight distance rule exists - pick the furthest object you can clearly see, and if you reach it before you finish counting to four, you are going too fast.",
        trap:
          "Stopping distance does not scale in a straight line. Stopping at 60 takes over three times the distance it takes at 30, not twice.",
        excerptKey: "see-400-feet-50mph",
        sourceLabel: "Delaware Driver Manual - Section Five, How Well Can You See?",
        sourceUrl: p(126),
      },
      {
        id: "de_s3_17",
        topic: "rightOfWay",
        question:
          "The light ahead is green but traffic on the far side of the intersection is backed up. What does Delaware require?",
        choices: [
          "Enter anyway, since you have a green light",
          "Enter and stop in the intersection if the traffic clears within a few seconds",
          "Wait until you can get all the way through without stopping",
          "Enter only if you can clear at least half the intersection",
        ],
        correctIndex: 2,
        explanation:
          "Drivers may not enter an intersection unless they can get through it without having to stop. Green gives you permission to move, not permission to block the crossing.",
        context:
          "The manual repeats the rule in its space-management section and attaches a consequence: you can get a ticket for blocking an intersection. The same logic applies at railroad crossings, where you must never start across without room for your vehicle on the far side.",
        trap:
          "A green light feels like authorization. It is only an instruction about the signal, not a promise about the road beyond it.",
        excerptKey: "row-no-blocking",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(89),
      },
      {
        id: "de_s3_18",
        topic: "sharing",
        question:
          "You are meeting a school bus with red lights flashing on a road with four lanes of traffic. What does the manual say?",
        choices: [
          "You must stop, as on any other road",
          "Only traffic following the bus must stop; oncoming traffic may proceed slowly",
          "Nobody has to stop on a four-lane road",
          "You must stop only if children are visible",
        ],
        correctIndex: 1,
        explanation:
          "On a road with four or more lanes only the traffic behind the bus has to stop. Traffic coming the other way may proceed, and the manual asks you to do it slowly.",
        context:
          "This is a genuinely Delaware-specific rule and it is one of the very few exceptions to the stop requirement. On any road with fewer than four lanes, traffic in both directions stops. Title 21 Section 4166 puts it as four or more lanes without requiring a divider, though the manual describes the same exception on page 95 as a divided highway with four or more lanes.",
        trap:
          "Two lanes each way plus a center turn lane is not automatically four lanes of traffic. If you are not certain the road qualifies, stop.",
        excerptKey: "bus-lane-diagram",
        sourceLabel: "Delaware Driver Manual - Section Four, Stopping For School Buses",
        sourceUrl: p(89),
        commonlyMissed: true,
      },
      {
        id: "de_s3_19",
        topic: "signals",
        question:
          "A flashing red arrow is displayed for your turning movement. What may you do?",
        choices: [
          "Nothing - it is the same as a steady red arrow",
          "Turn without stopping, yielding as necessary",
          "Turn after coming to a full stop, when a safe gap appears",
          "Wait for a green arrow before turning",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red arrow allows the turn after a full stop. The stop lets you pick a safe gap in the main flow instead of waiting for a green signal.",
        context:
          "The manual notes that a flashing red arrow may be followed by a steady red arrow, a steady yellow arrow or a solid red ball, so the display can change under you. The general rule for all arrows is that they apply only to the direction they point, while round lenses apply to every direction.",
        trap:
          "Flashing red and steady red arrows look similar at a glance and mean opposite things about whether you may proceed.",
        excerptKey: "arrow-red-flashing",
        sourceLabel: "Delaware Driver Manual - Section Four, Arrows",
        sourceUrl: p(71),
      },
      {
        id: "de_s3_20",
        topic: "rules",
        question:
          "A driver overtaking you sounds their horn and moves out to pass. What does Delaware law require of you?",
        choices: [
          "Speed up so the pass is over quickly",
          "Move left to make room on the shoulder",
          "Brake sharply so they can complete the pass",
          "Give way to the right and not increase your speed until they have fully overtaken you",
        ],
        correctIndex: 3,
        explanation:
          "The overtaken vehicle gives way to the right and must not increase speed until the pass is complete. Speeding up turns a normal pass into a long one on the wrong side of the road.",
        context:
          "The other half of the rule binds the overtaking driver: pass on the left only, at a safe distance, and return to the right only when safely clear. The manual also asks you to help drivers who need to merge in front of you by slowing to open the gap.",
        trap:
          "Matching the passing driver's speed feels competitive and is the one thing the law forbids.",
        excerptKey: "overtaken-give-way",
        sourceLabel: "Delaware Driver Manual - Section Four, Overtaking (Passing) Other Vehicles",
        sourceUrl: p(81),
      },
      {
        id: "de_s3_21",
        topic: "licensing",
        question:
          "Delaware's Driver Improvement Problem Driver Program takes administrative action once a driver reaches how many calculated points?",
        choices: [
          "4 or more in a two-year period",
          "8 or more in a two-year period",
          "12 or more in a one-year period",
          "16 or more in a three-year period",
        ],
        correctIndex: 1,
        explanation:
          "Eight or more calculated points in a two-year period is where the Division starts to act, beginning with an advisory letter. The ladder then climbs step by step to a twelve-month suspension at 22 points.",
        context:
          "Points are calculated on a sliding scale: full value for the first twelve months from the date of violation, half value for the second twelve. At 12 points the driver must complete a behavior modification course within 90 days or accept a two-month suspension, and each further step adds two months of suspension.",
        trap:
          "The points on your record and the calculated points that trigger action are not the same figure. Your record shows the full value; the program halves them in the second year.",
        excerptKey: "points-eight-action",
        sourceLabel: "Delaware Driver Manual - Section Two, Delaware Point System",
        sourceUrl: p(47),
      },
      {
        id: "de_s3_22",
        topic: "safety",
        question:
          "A tailgater is sitting close behind you on a two-lane Delaware road with no right lane available. What does the manual advise?",
        choices: [
          "Wait until the road ahead is clear, then reduce speed slowly",
          "Brake sharply to make the point",
          "Speed up to open a gap",
          "Move onto the shoulder and let them by",
        ],
        correctIndex: 0,
        explanation:
          "Wait for clear road ahead and then slow gradually. That encourages the tailgater to go around you, and it opens space in front of you at the same time.",
        context:
          "Where there is a right lane, the manual simply says move over to the right. It also names the one thing you must not do - never slow down quickly to discourage a tailgater, because all that does is increase your risk of being hit from behind.",
        trap:
          "Brake-checking is the response people want to make. The manual names it specifically as raising your own risk.",
        excerptKey: "space-tailgated",
        sourceLabel: "Delaware Driver Manual - Section Five, Space Behind",
        sourceUrl: p(129),
      },
      {
        id: "de_s3_23",
        topic: "signs",
        question:
          "What does a white sign showing black letters on a circular background indicate in Delaware?",
        choices: ["A state route", "A US numbered route", "An interstate highway", "A county road"],
        correctIndex: 0,
        explanation:
          "Delaware marks its state routes with black letters on a white circle. The US shield and the red, white and blue interstate shield are the other two route markers.",
        context:
          "Route markers are guide signs, so their job is orientation rather than instruction. The interstate marker carries the word interstate in white on red across the top quarter, with the route number in white on blue below.",
        trap:
          "The white circle and the white US shield are both black-on-white. The shape is the whole difference.",
        excerptKey: "sign-state-route",
        sourceLabel: "Delaware Driver Manual - Section Four, Guide Signs",
        sourceUrl: p(78),
      },
      {
        id: "de_s3_24",
        topic: "emergencies",
        question:
          "Your brakes fail on a Delaware road. What is the first thing the manual tells you to try?",
        choices: [
          "Pull the parking brake immediately",
          "Pump the brake pedal several times",
          "Shift straight into the lowest gear",
          "Switch off the ignition",
        ],
        correctIndex: 1,
        explanation:
          "Pump the pedal first. That often builds enough pressure to stop the car, and it is the least disruptive of the three options.",
        context:
          "If pumping does not work, pull the parking brake handle slowly so you do not lock the rear wheels and start a skid, and be ready to release it if the car does begin to slide. If neither works, shift down through the gears and look for a safe place off the roadway. Never switch the ignition to lock while moving, because that locks the steering.",
        trap:
          "Grabbing the parking brake first is the panic response. Pulled quickly it locks the rear wheels and turns a brake failure into a spin.",
        excerptKey: "emerg-brake-failure",
        sourceLabel: "Delaware Driver Manual - Section Five, Brake Failure",
        sourceUrl: p(136),
      },
      {
        id: "de_s3_25",
        topic: "speed",
        question:
          "Delaware suspends a license for one month on conviction of driving how far over the posted limit?",
        choices: ["25 mph over", "15 mph over", "20 mph over", "35 mph over"],
        correctIndex: 0,
        explanation:
          "Twenty-five over brings a one-month suspension, and the suspension grows by another month for every additional five mph above that threshold.",
        context:
          "Below it, 20 to 24 over brings an advisory letter. Between 25 and 29 over you may elect a behavior modification course instead of the suspension; at 30 or more over the suspension is mandatory. At 50 mph over the limit, or 100 mph on a highway, the suspension is a full year.",
        trap:
          "Twenty over is the advisory-letter band, not the suspension band. The suspension starts at twenty-five.",
        excerptKey: "speeding-25-over",
        sourceLabel: "Delaware Driver Manual - Section Two, Serious Speeding Violations",
        sourceUrl: p(48),
      },
      {
        id: "de_s3_26",
        topic: "sharing",
        question:
          "Why does the Delaware manual tell you never to move into the same lane alongside a motorcycle?",
        choices: [
          "It is discourteous but lawful",
          "It is allowed if the lane is wide and the rider is far to one side",
          "It is both illegal and extremely hazardous - a motorcycle is entitled to the full lane width",
          "It is allowed below 25 mph",
        ],
        correctIndex: 2,
        explanation:
          "A motorcycle is entitled to the same full lane width as any other vehicle. The manual says sharing that lane is not only illegal but extremely hazardous.",
        context:
          "Riders move around within their lane on purpose, to see and be seen and to avoid surface hazards, so the space that looks spare is being used. The manual also warns that crosswinds and fast-moving trucks can push a motorcycle sideways out of its path without warning.",
        trap:
          "A wide lane and a rider tucked to one side make it look like there is room. The law does not measure the gap.",
        excerptKey: "moto-never-share-lane",
        sourceLabel: "Delaware Driver Manual - Section Four, Sharing The Road With Motorcycles",
        sourceUrl: p(100),
      },
      {
        id: "de_s3_27",
        topic: "impairment",
        question:
          "What is the DMV penalty for a first DUI offense in Delaware with a BAC below .15?",
        choices: [
          "A 3-month license revocation",
          "A 6-month license revocation",
          "A 24-month license revocation",
          "A 12-month license revocation",
        ],
        correctIndex: 3,
        explanation:
          "Twelve months of license loss from the DMV for a first offense below .15, or for drugs. It rises to eighteen months between .15 and .19, and twenty-four months at .20 or above or on refusal of the test.",
        context:
          "The Division's revocation is separate from what the court does. On a first offense the court can add a fine of $500 to $1,500 and up to twelve months of imprisonment. A driver who enters a First Offender Election may apply immediately for an ignition interlock license, which then has to stay on the vehicle for four months.",
        trap:
          "The court penalty and the DMV revocation are two different things, and the exam asks about one at a time.",
        excerptKey: "dui-first-offence-loss",
        sourceLabel: "Delaware Driver Manual - Section Two, DUI Penalties For A First Offense",
        sourceUrl: p(56),
      },
      {
        id: "de_s3_28",
        topic: "rules",
        question:
          "Delaware law says you must obey a police officer directing traffic even when?",
        choices: [
          "Even when the instruction is contrary to laws, signs, signals and markings",
          "Only if the traffic signals have failed",
          "Only if the officer is in uniform and on foot",
          "Only at the scene of a crash",
        ],
        correctIndex: 0,
        explanation:
          "An officer's instruction outranks the signs and signals. The manual explains why - such instructions are occasionally needed to keep traffic moving safely.",
        context:
          "The same short list of general laws includes a rule people forget: you must not try to evade a traffic signal or a road sign by leaving the road and driving across private property. In work zones the same authority extends to trained flaggers with stop and slow paddles.",
        trap:
          "A working green light does not override the officer waving you to stop. The hierarchy runs the other way.",
        excerptKey: "obey-officer",
        sourceLabel: "Delaware Driver Manual - Section Four, Traffic Control Laws",
        sourceUrl: p(83),
      },
      {
        id: "de_s3_29",
        topic: "parking",
        question:
          "How close to a railroad crossing may you park in Delaware, unless signs say otherwise?",
        choices: [
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
          "No closer than 100 feet",
        ],
        correctIndex: 2,
        explanation:
          "Fifty feet is the railroad figure, and it is the longest distance in Delaware's parking list. Signs at a particular crossing can change it.",
        context:
          "The full sequence runs 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway, 30 feet from a beacon, stop sign or signal, 30 feet from the end of a safety zone, and 50 feet from a railroad crossing.",
        trap:
          "Thirty feet is the stop sign and traffic signal figure. The railroad crossing gets the longer 50-foot clearance.",
        excerptKey: "park-railroad-50",
        sourceLabel: "Delaware Driver Manual - Section Four, Stopping And Parking Violations",
        sourceUrl: p(93),
      },
      {
        id: "de_s3_30",
        topic: "safety",
        question:
          "You are driving at night on an unlit road and an oncoming driver leaves their high beams on. What does the manual tell you to do?",
        choices: [
          "Look toward the right side of the road",
          "Switch on your own high beams so they notice",
          "Close one eye to preserve your night vision",
          "Brake hard and stop until they pass",
        ],
        correctIndex: 0,
        explanation:
          "Look toward the right edge of the road. That keeps their headlights out of your direct vision while giving you enough of the road edge to stay on course.",
        context:
          "Flash your own headlights quickly a couple of times first, which is the accepted signal to dim. The manual then names the response you must not have - do not try to get back at the other driver by leaving your brights on, because then both of you are blinded. Glare contracts your pupils and the recovery period is time spent driving as though blind.",
        trap:
          "Retaliating with your own high beams doubles the problem instead of solving it.",
        excerptKey: "lights-blinded",
        sourceLabel: "Delaware Driver Manual - Section Five, Using Your Lights",
        sourceUrl: p(119),
      },
      {
        id: "de_s3_31",
        topic: "signs",
        question:
          "What does the Delaware manual say about the zipper merge sign at a lane reduction?",
        choices: [
          "Merge as soon as you see the sign",
          "Use both lanes up to the merge point and take turns alternately",
          "The left lane always yields",
          "Slow to 25 mph and merge single file",
        ],
        correctIndex: 1,
        explanation:
          "The zipper or late merge convention has drivers use both lanes right up to the lane reduction point and then merge alternately. It keeps both lanes moving instead of stacking one up.",
        context:
          "It runs against the instinct to merge early and sit in a queue, and against the instinct to treat late mergers as queue-jumpers. The manual describes it as a convention for merging traffic into a reduced number of lanes, which is exactly what the sign is telling both lanes to do.",
        trap:
          "Merging early feels polite and it is what the sign is designed to stop. Both lanes are meant to be used.",
        excerptKey: "sign-zipper-merge",
        sourceLabel: "Delaware Driver Manual - Section Four, Other Warning Signs",
        sourceUrl: p(77),
      },
      {
        id: "de_s3_32",
        topic: "rightOfWay",
        question:
          "You are overtaking a vehicle traveling in the same direction, and it slows down. What does the right-of-way rule say?",
        choices: [
          "You must yield to it, even though it slowed or stopped",
          "The slowing vehicle must yield to you",
          "Neither yields once the pass has started",
          "You must yield only if it has signaled",
        ],
        correctIndex: 0,
        explanation:
          "The overtaking driver yields to the vehicle being overtaken, and the manual specifically adds that this holds even if that vehicle slows down or comes to a stop.",
        context:
          "It sits in the same list as the rules about entering from a driveway and yielding to pedestrians - the whole list is about who must give way rather than who has a right to go. Nothing in it excuses a driver from doing everything possible to avoid striking another vehicle or a pedestrian.",
        trap:
          "A slowing vehicle looks like it is yielding to you. The duty stays with the driver doing the overtaking.",
        excerptKey: "row-overtaking-yield",
        sourceLabel: "Delaware Driver Manual - Section Four, Right-Of-Way",
        sourceUrl: p(89),
      },
      {
        id: "de_s3_33",
        topic: "licensing",
        question:
          "What minimum vision does Delaware require to hold a driver license?",
        choices: [
          "20/40, with or without corrective lenses",
          "20/20 in both eyes",
          "20/60, with or without corrective lenses",
          "There is no vision standard for a Class D license",
        ],
        correctIndex: 0,
        explanation:
          "Delaware's minimum is 20/40 with or without glasses or contact lenses. Corrected vision counts, but then the license carries a restriction requiring you to wear them.",
        context:
          "Between 20/40 and 20/50, the Division may grant permission to drive in daylight only. If your license requires corrective lenses and you are stopped without them, you can be ticketed. The manual suggests keeping a spare pair in the vehicle.",
        trap:
          "The standard is not per-eye perfection. It is 20/40, and the manual notes it need only be met in at least one eye.",
        excerptKey: "vision-2040",
        sourceLabel: "Delaware Driver Manual - Section Five, Be In Shape To Drive - Vision",
        sourceUrl: p(133),
      },
      {
        id: "de_s3_34",
        topic: "signals",
        question:
          "You are the first car at a red light and a pedestrian has a WALK signal. What is your duty?",
        choices: [
          "None, since you have a red light and are not moving",
          "Yield to them - drivers are required to yield to pedestrians with a WALK indicator",
          "Sound the horn if they are slow",
          "Move up to the crosswalk to show you have seen them",
        ],
        correctIndex: 1,
        explanation:
          "Drivers are required to yield to pedestrians who have a WALK indicator. It matters most on a turn, when your signal and their WALK are green at the same time.",
        context:
          "The manual describes the pedestrian's own responsibility on a WALK - proceed, but stay alert for vehicles turning right or left across the crosswalk. Delaware is installing countdown pedestrian signals across the state, and accessible pedestrian signals which announce the WALK interval with tones or speech for blind pedestrians.",
        trap:
          "A red light does not put you in the clear. The moment your turn is permitted, the pedestrian on WALK is in your path.",
        excerptKey: "ped-walk",
        sourceLabel: "Delaware Driver Manual - Section Four, Pedestrian Signals",
        sourceUrl: p(72),
      },
      {
        id: "de_s3_35",
        topic: "emergencies",
        question:
          "Your vehicle stalls on a railroad crossing and you can see a train coming. What does the manual tell you to do?",
        choices: [
          "Get out, move away from the tracks, and run toward the direction the train is coming from",
          "Stay in the vehicle and brace for impact",
          "Try to restart the engine until the last moment",
          "Get out and run in the direction the train is heading",
        ],
        correctIndex: 0,
        explanation:
          "Get out, get away from the tracks, and run toward the train rather than away from it. Debris from the collision flies in the direction the train is traveling, so running toward it keeps you out of the path of the wreckage.",
        context:
          "If no train is in sight, look both ways first and then try to restart. If it does not start, or you are unsure whether a train is coming, get out and move away. The wider rule is never to start across a crossing without room on the far side, so the vehicle is never sitting on the tracks in the first place.",
        trap:
          "Running away from an oncoming train is the instinct and it puts you exactly where the wreckage goes.",
        excerptKey: "rr-stalled",
        sourceLabel: "Delaware Driver Manual - Section Five, Stalling On Railroad Tracks",
        sourceUrl: p(138),
      },
    ],
  },
];
