import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Mississippi Driver's License Manual
// revised December 2024, published by the Department of Public Safety's Driver
// Service Bureau, plus two Driver Service Bureau web pages for the licensing
// and testing rules the manual does not carry, plus Section 63-1-21 of the
// Mississippi Code as it was amended by House Bill 550 of 2021.
//
// Mississippi's manual is 92 pages and unusually complete on the rules of the
// road - it prints its own parking distances, its own railroad stopping band
// and its own speed table, so most of this bank needs no statute at all. What
// it leaves out is licensing and testing:
//
// 1. The manual never states how long the Computerized Exam is or what score
//    passes. The 2023 edition did, in an appendix the December 2024 revision
//    deleted: twenty questions, 80% to pass, retake the next business day, and
//    a thirty-day wait after three failures. Nothing has replaced it.
// 2. The manual says you hold a Learner's Permit for one year. The Driver
//    Service Bureau's own page puts it as twelve months and adds the rules the
//    book omits - the electronics ban in the testing room, the six-month bar
//    for cheating, and the out-of-state permit credit.
// 3. The manual is silent on the curfew that Section 63-1-21 puts on a full
//    Class R license held by anyone under eighteen: unsupervised driving from
//    6:00 a.m. to 10:00 p.m. Sunday through Thursday and to 11:30 p.m. Friday
//    and Saturday, with work, school and extracurricular travel excepted. That
//    rule moved off the old intermediate license and onto the regular one in
//    2021, and no edition of the manual has caught up.
//
// One date is genuinely unsettled and no question is built on it. The manual
// says a certified Driver's Education course becomes a licensing requirement on
// July 1, 2027; a 2026 bill would move that to July 1, 2026. Questions here
// avoid the effective date and test only what is required today.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the state's
// own authoritative wording on the government's site.
const HB =
  "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf";
/** The manual's printed page numbers match the PDF's own, so no offset. */
const hb = (page: number) => `${HB}#page=${page}`;
const HB23 =
  "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2023-07/MDPS%20Driver's%20Manual_23_0.pdf";
const hb23 = (page: number) => `${HB23}#page=${page}`;
const PERMIT = "https://www.driverservicebureau.dps.ms.gov/Drivers/Learners_Permit";
const LAW = "https://billstatus.ls.state.ms.us/documents/2021/html/HB/0500-0599/HB0550SG.htm";

export const mississippiSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Mississippi Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Mississippi: what the shapes and colors mean, who goes first, and the handful of numbers the Computerized Exam expects you to know cold.",
    questions: [
      {
        id: "ms_s1_01",
        topic: "signs",
        question:
          "A red eight-sided sign faces you at an intersection in Mississippi. What does it require?",
        choices: [
          "Slow down and roll through if nothing is coming",
          "Stop only if another vehicle is close",
          "Come to a complete stop, then yield to any traffic close enough to be a hazard",
          "Yield to the wider road and continue",
        ],
        correctIndex: 2,
        explanation:
          "The octagon is reserved for STOP and nothing else. Mississippi's manual pairs the stop with a second duty: once you have stopped, you still give way to anything close enough to be dangerous before you move.",
        context:
          "Mississippi teaches signs by shape and color first, because the shape reads at a distance and in weather. Eight sides means stop, a downward triangle means yield, a diamond warns of a hazard ahead, a pentagon means school. The manual defines a stop as a complete cessation of movement, which is the wording that decides rolling-stop questions.",
        trap: "Stopping is only half the rule. A driver who stops and then pulls out in front of close traffic has still failed the requirement.",
        excerptKey: "sign-stop-eight-sides",
        sourceLabel: "Mississippi Driver's License Manual - Regulatory Signs",
        sourceUrl: hb(28),
      },
      {
        id: "ms_s1_02",
        topic: "signals",
        question:
          "You are at a steady red light in Mississippi and want to turn right. What does the manual allow?",
        choices: [
          "Stop completely first, then turn if it is clear and no sign forbids it",
          "Turn without stopping as long as the way is clear",
          "Turn only when a green arrow appears",
          "Turn only where a sign expressly permits it",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is Mississippi's default rather than a special permission, and two conditions ride with it: the stop has to be complete, and any sign banning the turn overrides the default.",
        context:
          "A solid red means stop and stay stopped until green, with the right turn carved out. Having stopped, you yield to other traffic and to pedestrians before moving. The manual is blunt that yielding on its own does not satisfy the rule, which is why this shows up so often on the exam.",
        trap: "\"Clear enough to go\" is not the test. The manual says in as many words that only yielding before turning is not enough and is illegal.",
        excerptKey: "signal-right-on-red",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signal Lights",
        sourceUrl: hb(37),
        commonlyMissed: true,
      },
      {
        id: "ms_s1_03",
        topic: "rightOfWay",
        question:
          "Two drivers reach a four-way stop at exactly the same moment, at right angles. Who goes first?",
        choices: [
          "Whoever signals first",
          "The driver going straight, ahead of any turning driver",
          "The driver on the left, who is farther from the crossing traffic",
          "The driver on the right",
        ],
        correctIndex: 3,
        explanation:
          "Mississippi's tie-breaker at a four-way stop is the driver on the right. It only comes into play when arrival really was simultaneous, because whoever clearly got there first goes first.",
        context:
          "The manual settles a four-way stop with two tests in order: who arrived first, then where the vehicles sit relative to one another. It also warns against gaming the first test - slamming on the brakes to arrive first is called out by name, and you yield to the driver on your right instead.",
        trap: "Going straight does not outrank turning at a four-way stop. That rule belongs to the two-way stop, where it decides a tie between the road that has to stop.",
        excerptKey: "four-way-stop",
        sourceLabel: "Mississippi Driver's License Manual - Four-Way Stop",
        sourceUrl: hb(56),
        commonlyMissed: true,
      },
      {
        id: "ms_s1_04",
        topic: "rules",
        question:
          "You are following another car at 30 mph. What gap does the Mississippi manual teach?",
        choices: [
          "Two seconds",
          "Three car lengths",
          "Three seconds",
          "Thirty feet",
        ],
        correctIndex: 1,
        explanation:
          "Mississippi teaches following distance in car lengths, not seconds: one car length for every 10 mph. At 30 mph that is three car lengths.",
        context:
          "The manual prints a ladder - one length at 10 mph, two at 20, three at 30, four at 40, five at 50 - and repeats it for interstate speeds, where 70 mph means seven lengths. Behind a large truck or bus you leave more room than the ladder gives, because you also need to see past it.",
        trap: "Most states teach a two- or three-second rule and Mississippi does not. The exam is written from the car-length ladder, so learn the numbers.",
        excerptKey: "following-car-length",
        sourceLabel: "Mississippi Driver's License Manual - Following",
        sourceUrl: hb(43),
        commonlyMissed: true,
      },
      {
        id: "ms_s1_05",
        topic: "speed",
        question: "What is the maximum speed for a car on a Mississippi interstate?",
        choices: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctIndex: 2,
        explanation:
          "Mississippi's interstate maximum is 70 mph, and the manual makes the point that it applies day and night alike.",
        context:
          "The manual's speed table is short and worth memorizing whole: 70 on interstates, 65 on four-lane state and US highways, 55 on two-lane state and US highways, and 50 on the Natchez Trace Parkway. Interstates and four-lane highways also carry a 40 mph minimum.",
        trap: "There is no lower night limit in Mississippi. The 70 mph figure is stated for both day and night.",
        excerptKey: "speed-table",
        sourceLabel: "Mississippi Driver's License Manual - Legal Speeds",
        sourceUrl: hb(41),
      },
      {
        id: "ms_s1_06",
        topic: "signs",
        question: "A downward-pointing red and white triangle faces you. What must you do?",
        choices: [
          "Come to a full stop, then proceed",
          "Let other vehicles on the roadway go first, slowing or stopping if that is what it takes",
          "Keep your speed, since the sign is only advisory",
          "Sound your horn before entering",
        ],
        correctIndex: 1,
        explanation:
          "The equilateral triangle is the yield sign, and Mississippi describes it as an instruction to let other vehicles have the right of way. You do not stop automatically, but with no safe gap, stopping is what yielding means.",
        context:
          "The triangle is reserved for yield the way the octagon is reserved for stop, so its shape alone identifies it. Yield is the lighter cousin of stop: no automatic halt, but no right to push in either. It is the sign you also meet at the entry to a roundabout, where circulating traffic goes first.",
        trap: "Yield is not \"stop\", but it is also not \"carry on regardless\". No gap means you wait for one.",
        excerptKey: "sign-yield",
        sourceLabel: "Mississippi Driver's License Manual - Regulatory Signs",
        sourceUrl: hb(28),
      },
      {
        id: "ms_s1_07",
        topic: "sharing",
        question:
          "A school bus ahead of you stops on a two-lane road with its red lights flashing. How far back must you stop?",
        choices: ["At least 10 feet", "20 feet", "At least 30 feet", "At least 50 feet"],
        correctIndex: 0,
        explanation:
          "Mississippi's figure is at least ten feet, and it applies whichever direction you are traveling in. The distance is short because the duty is long: you stay put until the bus is moving again.",
        context:
          "The stop is triggered by flashing red lights, an extended stop sign, or both. It ends only when the children have crossed, the bus is moving, the red lights are off and the stop arm is folded back. There is a single exception, on a divided highway of four or more lanes, and it only helps a driver going the other way.",
        trap: "Ten feet is a minimum distance, not the whole rule. Stopping correctly and then creeping forward before the bus moves off is still a violation.",
        excerptKey: "schoolbus-ten-feet",
        sourceLabel: "Mississippi Driver's License Manual - Yielding Right-Of-Way To School Buses",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "ms_s1_08",
        topic: "impairment",
        question:
          "You are 17 and driving in Mississippi. At what blood alcohol content are you legally under the influence?",
        choices: ["0.02% or more", "0.05% or more", "0.08% or more", "Any amount at all"],
        correctIndex: 0,
        explanation:
          "Under 21, Mississippi's threshold is 0.02%, not the 0.08% that applies to adults. The state calls this its Zero Tolerance law for underage drivers.",
        context:
          "Two thresholds run side by side. From 21 the figure is 0.08%; under 21 it is 0.02%, and a first Zero Tolerance offense costs a $250 fine and a 120-day suspension. If an under-21 driver blows 0.08% or higher the charge is not Zero Tolerance at all - it is a regular DUI, with the heavier adult penalties.",
        trap: "0.02% is not \"zero\". The name of the law suggests any trace is an offense, but the number the exam wants is 0.02%.",
        excerptKey: "bac-limits",
        sourceLabel: "Mississippi Driver's License Manual - Driving Under The Influence",
        sourceUrl: hb(78),
        commonlyMissed: true,
      },
      {
        id: "ms_s1_09",
        topic: "licensing",
        question: "What is the minimum age to apply for a Mississippi Regular Learner's Permit?",
        choices: ["14", "15", "15 and a half", "16"],
        correctIndex: 1,
        explanation:
          "Fifteen is the floor for a Regular Learner's Permit in Mississippi, and the Driver Service Bureau adds that you must also show you are enrolled in school.",
        context:
          "The permit costs $7 and lasts two years. It lets you drive only with a licensed driver aged 21 or older sitting in the seat beside you. You hold it twelve months before moving up to a Class R license - unless you are 17 or older, in which case the permit and the license can be issued on the same day.",
        trap: "Fifteen and a half is a different rule. It appears in the manual only as an example of when you would become eligible for the full license, at sixteen and a half.",
        excerptKey: "permit-age-fifteen",
        sourceLabel: "Mississippi Driver's License Manual - Regular Learner's Permit",
        sourceUrl: hb(13),
      },
      {
        id: "ms_s1_10",
        topic: "parking",
        question: "How close to a fire hydrant may you leave a parked car in Mississippi?",
        choices: ["No closer than 5 feet", "No closer than 8 feet", "No closer than 10 feet", "No closer than 15 feet"],
        correctIndex: 2,
        explanation:
          "Ten feet is Mississippi's hydrant distance. The manual lists it among the places where you may not stop and leave a vehicle parked and unattended.",
        context:
          "Mississippi prints its own parking numbers rather than leaving them to the statute: 10 feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway or 75 feet if posted, 30 feet from the approach to a traffic control device, and 15 feet from the nearest rail of a railroad crossing.",
        trap: "Fifteen feet is the railroad figure, not the hydrant figure. The two get swapped constantly.",
        excerptKey: "parking-hydrant-crosswalk",
        sourceLabel: "Mississippi Driver's License Manual - Prohibited Parking",
        sourceUrl: hb(60),
        commonlyMissed: true,
      },
      {
        id: "ms_s1_11",
        topic: "safety",
        question: "Who must wear a seat belt in a moving car in Mississippi?",
        choices: [
          "The driver and every passenger, front seat or back",
          "The driver and front-seat passengers only",
          "Everyone under 18",
          "The driver only",
        ],
        correctIndex: 0,
        explanation:
          "Mississippi's belt law reaches everyone in the vehicle. The manual states it twice on the same page, and adds that back-seat passengers are covered as squarely as front-seat ones.",
        context:
          "Beneath the belt law sit two child rules. Under four years old, a child rides in a car seat. From four up to seven, a child under 4 feet 9 inches or under 65 pounds rides in a belt-positioning booster. The manual also recommends, without requiring, that children under 13 always ride in the back seat.",
        trap: "The back seat is not exempt. Plenty of states once limited the rule to the front and Mississippi's wording deliberately covers both.",
        excerptKey: "seatbelt-all-passengers",
        sourceLabel: "Mississippi Driver's License Manual - Seat Belts, Car Seats, And Child Restraints",
        sourceUrl: hb(64),
      },
      {
        id: "ms_s1_12",
        topic: "signals",
        question: "What does a flashing red traffic light mean in Mississippi?",
        choices: [
          "Slow down and be ready to stop",
          "The signal is broken and you should treat the intersection as uncontrolled",
          "Stop only if traffic is approaching",
          "Stop completely, then go with caution once you have yielded",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red works exactly like a stop sign: a complete stop first, then proceed with caution after yielding to whoever has the right of way.",
        context:
          "Its partner is the flashing yellow, which asks only that you slow down and take care. The same pair covers a broken signal head - flashing yellow means slow and proceed, while a signal showing nothing at all is treated as a stop, then proceed with caution.",
        trap: "Slowing is the flashing yellow rule. Flashing red is a full stop, not a cautious roll.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signal Lights",
        sourceUrl: hb(39),
      },
      {
        id: "ms_s1_13",
        topic: "signs",
        question: "A five-sided sign is coming up on the right. What is it telling you?",
        choices: [
          "A railroad crossing is ahead",
          "You are approaching a school zone or a school crossing",
          "The road ahead is closed",
          "A hospital is nearby",
        ],
        correctIndex: 1,
        explanation:
          "Mississippi reserves the pentagon for school crossings and for warning of a school zone ahead. No other sign uses that shape.",
        context:
          "The shape system is the whole point of the manual's sign chapter. The octagon means stop, the triangle yield, the pennant a no-passing zone, the diamond a hazard, the pentagon a school, and a round sign warns of a railroad crossing ahead. Colors carry meaning too - orange for construction, brown for parks and scenic routes, blue for motorist services.",
        trap: "The round sign is the railroad warning, not the school warning. Two shapes, two entirely different hazards.",
        excerptKey: "shape-pentagon",
        sourceLabel: "Mississippi Driver's License Manual - Standard Shapes And Colors",
        sourceUrl: hb(27),
      },
      {
        id: "ms_s1_14",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with lights flashing and siren on. What does Mississippi expect?",
        choices: [
          "Pull over to the extreme right shoulder and let it pass",
          "Stop where you are so it can go around you",
          "Speed up until you reach a wider stretch of road",
          "Move to the left lane so it can use the right",
        ],
        correctIndex: 0,
        explanation:
          "The manual gives emergency vehicles the right of way in every traffic situation and asks you to pull to the extreme right shoulder until it has passed.",
        context:
          "One detail catches people: if you are inside an intersection when the siren reaches you, you drive on through it first and pull over on the far side, rather than stopping in the middle of the junction. A separate rule covers an emergency vehicle already stopped on a four-lane road, where you move into the far lane if it is safe and slow down if it is not.",
        trap: "Stopping dead in an intersection blocks the very route the ambulance needs. Clear the junction first, then pull right.",
        excerptKey: "emergency-pull-right",
        sourceLabel: "Mississippi Driver's License Manual - Yielding Right Of Way To Emergency Vehicles",
        sourceUrl: hb(67),
      },
      {
        id: "ms_s1_15",
        topic: "rules",
        question: "What do two solid yellow lines down the middle of a Mississippi road mean?",
        choices: [
          "Passing is allowed from either side when it is clear",
          "Only the faster direction may pass",
          "No vehicle may pass from either direction",
          "Passing is allowed but only for slow-moving vehicles",
        ],
        correctIndex: 2,
        explanation:
          "A double solid yellow line separates opposing traffic and forbids passing from both sides. The manual says never cross it, and adds the reason: you would be driving into oncoming traffic.",
        context:
          "Yellow lines always divide opposing directions in Mississippi. A broken yellow means you may cross to pass when the way is clear. A broken line beside a solid one means only the side with the broken line may pass. Double solid closes the option entirely, in both directions.",
        trap: "Being stuck behind a slow vehicle changes nothing. The manual singles that case out and says you still may not cross.",
        excerptKey: "marking-double-yellow",
        sourceLabel: "Mississippi Driver's License Manual - Pavement Markings",
        sourceUrl: hb(25),
      },
      {
        id: "ms_s1_16",
        topic: "speed",
        question: "What is the maximum speed for any vehicle in a Mississippi school zone?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 0,
        explanation:
          "Fifteen miles an hour is the school-zone ceiling in Mississippi, and it applies to any vehicle - not just to cars.",
        context:
          "The school-zone sign spells out when the limit bites: passing a school during recess, or while children are arriving at or leaving school during opening and closing hours. Two other school figures sit beside it - a school bus on its regular route may do 45 mph, and 65 mph on the interstate.",
        trap: "Fifteen is unusually low and people reach for 20 or 25 because that is what their own state uses. Mississippi's number is 15.",
        excerptKey: "speed-school-zone-fifteen",
        sourceLabel: "Mississippi Driver's License Manual - Legal Speeds",
        sourceUrl: hb(41),
      },
      {
        id: "ms_s1_17",
        topic: "rightOfWay",
        question:
          "A pedestrian steps into the street at an intersection where no crosswalk is painted. Who has the right of way?",
        choices: [
          "The driver, because there is no marked crosswalk",
          "Whoever entered the intersection first",
          "The driver, unless the pedestrian is already halfway across",
          "The pedestrian, marked crosswalk or not",
        ],
        correctIndex: 3,
        explanation:
          "Mississippi gives pedestrians in a crosswalk the right of way always, and states plainly that it makes no difference whether the crosswalk is painted.",
        context:
          "An intersection in Mississippi includes its crosswalks by definition, so a crossing exists at a junction whether or not anyone has painted it. The manual repeats the rule in three separate places, and adds a duty of extra care around pedestrians carrying a white cane, which may have a red tip.",
        trap: "Unmarked does not mean nonexistent. The paint is a convenience for the pedestrian, not the source of their right of way.",
        excerptKey: "ped-crosswalk-always",
        sourceLabel: "Mississippi Driver's License Manual - Yielding Right-Of-Way To Pedestrians",
        sourceUrl: hb(59),
        commonlyMissed: true,
      },
      {
        id: "ms_s1_18",
        topic: "signs",
        question: "What does an orange sign on a Mississippi highway mean?",
        choices: [
          "A scenic or recreation area is ahead",
          "You are entering a construction or maintenance zone",
          "Motorist services are available at the next exit",
          "The route ahead is a designated truck route",
        ],
        correctIndex: 1,
        explanation:
          "Orange is Mississippi's construction and maintenance color. It marks work zones and warns that people may be on or near the roadway.",
        context:
          "Work-zone signs are usually diamonds or rectangles in orange with black lettering, and they warn about workers, reduced speed, detours, slow equipment and poor surfaces. Inside a zone, a flagger's instructions are binding, and drums, cones, tubes and barriers are there to keep you out of the working area.",
        trap: "Brown is the color for parks, recreation and scenic routes. Orange is only ever construction and maintenance.",
        excerptKey: "color-orange",
        sourceLabel: "Mississippi Driver's License Manual - Standard Shapes And Colors",
        sourceUrl: hb(27),
      },
      {
        id: "ms_s1_19",
        topic: "licensing",
        question: "How long is a Mississippi Regular Learner's Permit valid?",
        choices: ["Six months", "One year", "Two years", "Until your seventeenth birthday"],
        correctIndex: 2,
        explanation:
          "The permit runs for two years from issue. That is longer than the twelve months you must hold it before applying for the Class R license, which is deliberate - it leaves room to slip.",
        context:
          "Your Computerized Exam score is also good for two years. Pass the exam, hold the permit for twelve months and produce the fifty-hour driving affidavit within that window and you never retake the exam. Wait longer than two years and you sit it again.",
        trap: "One year is the holding period, not the validity period. The permit itself is a two-year document.",
        excerptKey: "permit-valid-two-years",
        sourceLabel: "Mississippi Driver's License Manual - Regular Learner's Permit",
        sourceUrl: hb(13),
      },
      {
        id: "ms_s1_20",
        topic: "sharing",
        question: "How much room must a Mississippi driver leave when passing a bicycle?",
        choices: ["At least three feet", "At least two feet", "At least four feet", "Half a lane width"],
        correctIndex: 0,
        explanation:
          "Three feet is the minimum clearance between vehicle and bicycle when you pass. The manual states it as a duty on drivers, not as advice.",
        context:
          "Mississippi treats a bicycle on a public road as a vehicle, with the same rights and responsibilities as a car. The manual tells you not to try to share a lane with a cyclist at all - reduce speed, move into the next lane, and pass the way you would pass a car. If oncoming traffic blocks that, you wait behind.",
        trap: "Three feet is the floor, not the target. The manual's own note says to leave plenty of room, because the wind off a passing vehicle can put a cyclist down.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Mississippi Driver's License Manual - Sharing The Road With Bicycles",
        sourceUrl: hb(73),
      },
      {
        id: "ms_s1_21",
        topic: "parking",
        question: "How close to the curb should a parallel-parked car sit in Mississippi?",
        choices: ["Within six inches", "Within eighteen inches", "Within two feet", "Within twelve inches"],
        correctIndex: 3,
        explanation:
          "Twelve inches is the figure. The manual states it twice - once as the standard and once as the last step of its parallel parking procedure.",
        context:
          "Two habits go with it. Get out on the curb side, not the street side, and unload from the curb. When you leave, remember that a driver pulling out of a space has no right of way at all: you yield to everything already moving, and you look back over your shoulder rather than trusting a mirror.",
        trap: "Six inches is tidier than the law asks and eighteen is another state's number. Mississippi's is twelve.",
        excerptKey: "parallel-twelve-inches",
        sourceLabel: "Mississippi Driver's License Manual - Parallel Parking",
        sourceUrl: hb(61),
      },
      {
        id: "ms_s1_22",
        topic: "safety",
        question:
          "At night you are catching up to a car ahead. When must you switch to low beams?",
        choices: [
          "Within 200 feet of it",
          "Within 500 feet of it",
          "Only if the driver flashes their lights",
          "Only on unlit roads",
        ],
        correctIndex: 1,
        explanation:
          "Five hundred feet is Mississippi's figure, and it works in both directions - within 500 feet of an oncoming vehicle, and within 500 feet of one you are following.",
        context:
          "The same 500 feet defines when lights are needed at all: between sunset and sunrise, and any other time you cannot see clearly that far ahead. High beams belong in open country with no other cars nearby, and never in fog, where they make visibility worse rather than better.",
        trap: "The following case catches people out. It is easy to remember to dim for oncoming traffic and forget that your high beams bounce off the mirrors of the car in front.",
        excerptKey: "headlight-five-hundred-feet",
        sourceLabel: "Mississippi Driver's License Manual - Using Your Headlights",
        sourceUrl: hb(63),
        commonlyMissed: true,
      },
      {
        id: "ms_s1_23",
        topic: "signals",
        question:
          "You have a solid green light and want to turn left across oncoming traffic. What does the green permit?",
        choices: [
          "A protected turn, since oncoming traffic has a red",
          "The turn only after the light has been green for several seconds",
          "The turn only after you yield to oncoming traffic",
          "No left turn at all without a green arrow",
        ],
        correctIndex: 2,
        explanation:
          "A solid green lets you go if it is safe, but the manual flags the left turn as an exception: you must yield to oncoming traffic before you cross their path.",
        context:
          "Mississippi lines up two signals that mean the same thing for a left turn - the solid green and the flashing yellow arrow. Both are unprotected. Only the green arrow is protected, and the manual explains why: oncoming traffic is looking at a red when your arrow is green.",
        trap: "Green feels like permission to go, and for a left turn it is only permission to go when the gap is genuinely there.",
        excerptKey: "signal-green-left-yield",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signal Lights",
        sourceUrl: hb(37),
      },
      {
        id: "ms_s1_24",
        topic: "emergencies",
        question:
          "You are in a collision in Mississippi. Above what amount of apparent property damage must you report it to law enforcement?",
        choices: ["$250", "$500", "$1,000", "$1,500"],
        correctIndex: 1,
        explanation:
          "Five hundred dollars is the line. Injury or death requires a report whatever the damage, and so does apparent property damage above $500.",
        context:
          "The manual turns the rule around and states it the other way as well: you must report a crash unless nobody was hurt and the damage comes to less than $500. Fault is irrelevant to the duty. If you are too badly hurt to report it, a passenger may do it for you.",
        trap: "Not being at fault does not excuse you from reporting. The manual says whether or not you are at fault, you must report it.",
        excerptKey: "accident-must-report",
        sourceLabel: "Mississippi Driver's License Manual - In Case Of An Accident",
        sourceUrl: hb(66),
      },
      {
        id: "ms_s1_25",
        topic: "rules",
        question:
          "Your brake lights have failed and you need to signal a stop by hand. What is the correct arm signal?",
        choices: [
          "Arm straight out to the side",
          "Arm up, bent at the elbow",
          "Arm out and waved up and down",
          "Arm down, palm facing the rear",
        ],
        correctIndex: 3,
        explanation:
          "Arm down with the palm facing back means slowing or stopping. Straight out is a left turn, and up at the elbow is a right turn.",
        context:
          "Arm signals are not a museum piece in Mississippi - the manual lists them as the signals used by cyclists, by drivers whose lights have failed, and by antique vehicles and farm equipment. Whichever signal you give, extend the arm fully and hold it continuously for at least one hundred feet before you act.",
        trap: "The left-turn and stop signals are easy to mix up, since both involve an extended arm. The palm facing the rear is what marks the stop.",
        excerptKey: "arm-signal-stop",
        sourceLabel: "Mississippi Driver's License Manual - Arm Signals",
        sourceUrl: hb(42),
      },
      {
        id: "ms_s1_26",
        topic: "signs",
        question: "What is a yellow diamond-shaped sign used for in Mississippi?",
        choices: [
          "Giving directions to towns and cities",
          "Marking a regulation you must obey",
          "Warning of an existing or possible hazard on or beside the road",
          "Marking the boundary of a school zone",
        ],
        correctIndex: 2,
        explanation:
          "The diamond is used exclusively to warn of a hazard, either on the roadway or next to it. Yellow is the general warning color that usually goes with it.",
        context:
          "Warning diamonds cover curves, intersections, lane drops, divided-highway starts and ends, roundabouts, slippery surfaces and two-way traffic. They tell you what the road is about to do, which is why the manual pairs the shape with the color rather than asking you to memorize each picture.",
        trap: "A diamond is not a regulation. White and black signs carry the rules; the diamond is a warning about what lies ahead.",
        excerptKey: "shape-diamond",
        sourceLabel: "Mississippi Driver's License Manual - Standard Shapes And Colors",
        sourceUrl: hb(27),
      },
      {
        id: "ms_s1_27",
        topic: "impairment",
        question:
          "An officer asks you to take a breath test in Mississippi and you refuse. What happens to your license?",
        choices: [
          "Nothing until you are convicted",
          "It is administratively suspended for ninety days",
          "It is suspended for thirty days",
          "It is revoked for a year",
        ],
        correctIndex: 1,
        explanation:
          "Refusal brings an administrative ninety-day suspension on its own, separate from anything a court later decides, and later refusals draw longer ones.",
        context:
          "Driving in Mississippi is itself consent to testing - that is what the Implied Consent Law means. You may refuse, but you surrender your license to the officer on the spot and get a receipt that works as a temporary permit for forty-five days. If you refuse and are then convicted of a first-offense DUI, another ninety days is added on top.",
        trap: "Refusing is not a way of avoiding a penalty. It creates one, and it stacks with whatever the DUI conviction brings.",
        excerptKey: "refusal-ninety-days",
        sourceLabel: "Mississippi Driver's License Manual - Implied Consent",
        sourceUrl: hb(78),
        commonlyMissed: true,
      },
      {
        id: "ms_s1_28",
        topic: "speed",
        question: "What is the maximum speed for a car on a two-lane Mississippi state highway?",
        choices: ["45 mph", "55 mph", "60 mph", "65 mph"],
        correctIndex: 1,
        explanation:
          "Fifty-five is the ceiling for two-lane state and US highways in Mississippi. Sixty-five belongs to four-lane state and US highways.",
        context:
          "The manual's table has four rows and each is worth knowing: interstates 70, four-lane highways 65, two-lane highways 55, Natchez Trace Parkway 50. It also reminds you that a posted number assumes ideal conditions, and that curves, junctions, narrow roads, heavy traffic and poor visibility all call for less.",
        trap: "The difference between 55 and 65 is the lane count, not whether the road is a state route or a US route. Both kinds appear in both rows.",
        excerptKey: "speed-table",
        sourceLabel: "Mississippi Driver's License Manual - Legal Speeds",
        sourceUrl: hb(41),
      },
      {
        id: "ms_s1_29",
        topic: "rightOfWay",
        question: "You are pulling out of a parallel parking space into traffic. Who has the right of way?",
        choices: [
          "You do, once your signal is on",
          "Whoever is closer to the intersection ahead",
          "You do, because the traffic can see you",
          "The traffic already on the road",
        ],
        correctIndex: 3,
        explanation:
          "The manual is unambiguous that the driver leaving a parking space does not have the right of way. Everything already moving goes first.",
        context:
          "The same idea covers driveways: coming out of a driveway or other unmarked entrance you stop and yield to traffic on the road, even where no stop sign exists. Leaving a parking space, you check over your shoulder before you move, signal before you enter the travel lane, and wait for a genuine gap.",
        trap: "A turn signal announces an intention. It does not create a right of way, and the traffic behind you is under no duty to make room.",
        excerptKey: "parking-exit-no-row",
        sourceLabel: "Mississippi Driver's License Manual - Exiting A Parallel Parking Space",
        sourceUrl: hb(61),
      },
      {
        id: "ms_s1_30",
        topic: "licensing",
        question: "What does Mississippi require you to have with you whenever you drive?",
        choices: [
          "Your birth certificate",
          "A copy of your driving record",
          "Your driver's license, in your possession",
          "Nothing, as long as you are in the state's database",
        ],
        correctIndex: 2,
        explanation:
          "The manual states it flatly: your driver's license must always be in your possession while you are operating a motor vehicle.",
        context:
          "Two other documents belong in the car rather than on you. A current insurance card must be kept inside each vehicle, though Mississippi accepts it as an image on a phone. The vehicle also needs its Mississippi tag and certificate of title, and if the windows carry aftermarket tint, the tint certificate goes on the dash.",
        trap: "Being in the system is not the same as carrying the card. The manual makes possession the requirement.",
        excerptKey: "lic-possession",
        sourceLabel: "Mississippi Driver's License Manual - Regular Driver's License (Class R)",
        sourceUrl: hb(15),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Lines, lanes, lights and who yields to whom - the everyday rules Mississippi's Computerized Exam draws on most heavily, one step past the basics.",
    questions: [
      {
        id: "ms_s2_01",
        topic: "rules",
        question:
          "A single broken yellow line runs down the middle of the road. What does it permit?",
        choices: [
          "Nothing - it is a decorative marking",
          "Crossing into the oncoming lane to pass, when it is safe",
          "Two-way traffic in both lanes at once",
          "Passing only on the right",
        ],
        correctIndex: 1,
        explanation:
          "A broken yellow line separates opposing directions and allows you to cross into the oncoming lane, but only to pass and only when passing is genuinely safe.",
        context:
          "Yellow means opposing traffic, white means same direction. Broken means you may cross, solid means you may not. Put the two together and every center-line question answers itself: broken yellow lets you pass, solid yellow does not, and a broken line beside a solid one lets only the broken side pass.",
        trap: "The permission is for passing alone. Drifting across a broken yellow to cut a corner or avoid a pothole is not what the marking allows.",
        excerptKey: "marking-broken-yellow",
        sourceLabel: "Mississippi Driver's License Manual - Pavement Markings",
        sourceUrl: hb(25),
      },
      {
        id: "ms_s2_02",
        topic: "signals",
        question: "A green light turns yellow as you approach it. What does Mississippi expect?",
        choices: [
          "Slow down and prepare to stop",
          "Speed up to clear the intersection",
          "Maintain speed, since yellow means proceed",
          "Stop instantly wherever you are",
        ],
        correctIndex: 0,
        explanation:
          "A solid yellow means the light is about to turn red. The manual's instruction for a green turning yellow as you approach is to slow down and prepare to stop.",
        context:
          "The solid yellow arrow carries the same message for a turn: the signal is on its way to red, or from a protected turn to an unprotected one. Neither is an invitation to accelerate. If you are already so close that stopping would be dangerous, you clear the intersection, but the default is to stop.",
        trap: "Treating yellow as \"hurry\" is how intersection collisions happen, and the manual says intersections are already the most dangerous place on a highway.",
        excerptKey: "signal-solid-yellow",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signal Lights",
        sourceUrl: hb(37),
      },
      {
        id: "ms_s2_03",
        topic: "rightOfWay",
        question:
          "You are at a two-way stop. The road crossing in front of you has no stop signs. Who goes first?",
        choices: [
          "You do, because you stopped",
          "Whoever arrived at the intersection first",
          "The cross traffic, which has no stop signs",
          "The vehicle on the right",
        ],
        correctIndex: 2,
        explanation:
          "At a two-way stop the traffic with no stop signs has the right of way. Drivers facing the stop signs wait until the way is clear.",
        context:
          "Once the cross traffic has passed, order returns among the stopped drivers: the first to arrive at a stop sign goes first, and if two arrive together, the one going straight beats the one turning across the traffic lane. Mississippi even has a warning sign for this junction, telling you your stop is not a four-way stop.",
        trap: "Stopping first does not buy you priority over traffic that never had to stop. That is the whole point of a two-way stop.",
        excerptKey: "two-way-stop",
        sourceLabel: "Mississippi Driver's License Manual - Two-Way Stop",
        sourceUrl: hb(56),
        commonlyMissed: true,
      },
      {
        id: "ms_s2_04",
        topic: "rules",
        question:
          "You are on a Mississippi street with two lanes going your way and no turn coming up. Which lane should you use?",
        choices: [
          "Either one, as long as you hold your speed",
          "The left lane, to leave the right free for merging traffic",
          "Whichever lane is moving faster",
          "The extreme right lane",
        ],
        correctIndex: 3,
        explanation:
          "Mississippi's default is the extreme right lane. The left lane is for passing and for preparing to turn left, not for cruising.",
        context:
          "The same principle governs the interstate: the right lane is for through travel and the left for passing, and a slower driver is expected to stay right. Interstates differ in one respect - passing is legal from either the right or the left lane, which is not true on an ordinary four-lane highway's center line.",
        trap: "\"Keep right except to pass\" is not just courtesy in Mississippi. The manual states it as the rule for any road with more than one lane in your direction.",
        excerptKey: "lane-extreme-right",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Lanes",
        sourceUrl: hb(45),
      },
      {
        id: "ms_s2_05",
        topic: "signs",
        question: "A white horizontal bar on a red circle faces you at the mouth of a street. What does it mean?",
        choices: [
          "You may not enter this lane of travel",
          "The street is one-way in your direction",
          "Stop, then enter when clear",
          "No parking beyond this point",
        ],
        correctIndex: 0,
        explanation:
          "That is the DO NOT ENTER sign. Mississippi's manual notes it may carry the words or show only the white bar on the red circle, and either way it bars you from that lane of travel.",
        context:
          "Its companion is the WRONG WAY sign, which tells you that you are already traveling against the flow. The manual's instruction there is blunt - you are in danger of a head-on collision and must leave the roadway and turn around as soon as possible.",
        trap: "The wordless version is the same sign. The white bar on red is the message; the lettering is only a courtesy while drivers get used to symbols.",
        excerptKey: "sign-do-not-enter",
        sourceLabel: "Mississippi Driver's License Manual - Regulatory Signs",
        sourceUrl: hb(28),
      },
      {
        id: "ms_s2_06",
        topic: "parking",
        question: "How close to a crosswalk at an intersection may you park in Mississippi?",
        choices: ["Ten feet", "No closer than twenty feet", "Thirty feet", "There is no distance, only the crosswalk itself"],
        correctIndex: 1,
        explanation:
          "Twenty feet is Mississippi's crosswalk figure, and parking on the crosswalk itself is separately prohibited.",
        context:
          "The prohibited-parking list is long and specific: on a sidewalk, on a crosswalk, inside an intersection, on any bridge or elevated structure, in a highway underpass, in front of a driveway, and on the roadway side of a vehicle already parked at the curb. Alongside those sit the measured distances, from ten feet to seventy-five.",
        trap: "Ten feet is the hydrant number. Twenty is the crosswalk, and thirty is the approach to a traffic control device.",
        excerptKey: "parking-hydrant-crosswalk",
        sourceLabel: "Mississippi Driver's License Manual - Prohibited Parking",
        sourceUrl: hb(60),
      },
      {
        id: "ms_s2_07",
        topic: "safety",
        question: "Your car begins to skid on a wet Mississippi road. What does the manual tell you to do?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Press the clutch and coast until the skid ends",
          "Turn the wheel in the direction of the skid, if you can do it safely",
          "Steer against the skid to straighten the car",
        ],
        correctIndex: 2,
        explanation:
          "Steer in the direction the car is sliding, provided that does not put you off the road or into something. Braking hard makes the skid worse.",
        context:
          "The manual adds a third instruction that people forget: never use the clutch while you are trying to stop a skid. It also names the cause - most skids come from driving too fast for the weather and the road, so the real fix is slowing down before the surface asks for it.",
        trap: "Hard braking feels like the obvious answer and is the one thing the manual singles out as making a skid worse.",
        excerptKey: "skid-recovery",
        sourceLabel: "Mississippi Driver's License Manual - Hazardous Conditions & Emergencies",
        sourceUrl: hb(65),
      },
      {
        id: "ms_s2_08",
        topic: "sharing",
        question:
          "A vehicle ahead displays an orange and red reflective triangle on its rear. What does that tell you?",
        choices: [
          "It is carrying a hazardous load",
          "It is a farm vehicle exempt from the rules of the road",
          "It is an oversized load with an escort ahead",
          "It travels at 25 mph or less",
        ],
        correctIndex: 3,
        explanation:
          "The orange and red triangle is the slow-moving vehicle emblem. In Mississippi it marks a vehicle that travels at twenty-five miles an hour or less.",
        context:
          "You will see it on farm machinery, construction equipment and animal-drawn vehicles, most often on rural roads. The manual asks for caution around all of them and adds a specific warning about horses: do not sound your horn or rev the engine, because that can startle the animal into a crash.",
        trap: "Animal-drawn vehicles are not exempt from anything. The manual says they have the same rights to the road as a motor vehicle and follow the same rules.",
        excerptKey: "slow-moving-emblem",
        sourceLabel: "Mississippi Driver's License Manual - Slow-Moving Vehicles",
        sourceUrl: hb(34),
      },
      {
        id: "ms_s2_09",
        topic: "speed",
        question: "What is the maximum speed for a car on a four-lane US highway in Mississippi?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Four-lane state and US highways carry a 65 mph maximum in Mississippi - between the 55 of a two-lane highway and the 70 of an interstate.",
        context:
          "Four-lane highways share the interstate's 40 mph minimum, which is worth knowing because a minimum speed can be enforced. Two-lane highways and the Natchez Trace have no minimum printed in the table.",
        trap: "A four-lane US highway is not an interstate, and 70 mph is the interstate figure. The row you want is the one for four-lane highways.",
        excerptKey: "speed-table",
        sourceLabel: "Mississippi Driver's License Manual - Legal Speeds",
        sourceUrl: hb(41),
      },
      {
        id: "ms_s2_10",
        topic: "emergencies",
        question:
          "Your car has broken down on a rural Mississippi highway and you must walk for help. Which side of the road do you walk on?",
        choices: [
          "The left side, facing oncoming traffic",
          "The right side, with traffic behind you",
          "Whichever side has a wider shoulder",
          "Down the middle, where drivers will see you",
        ],
        correctIndex: 0,
        explanation:
          "Walk on the left, facing the traffic coming toward you, so you can see and react to it. That is the manual's instruction after you have pulled onto the extreme right shoulder.",
        context:
          "The rule changes completely on an interstate, where the manual says never to walk along or across it at all. There you stay inside the vehicle with the doors locked, put the emergency flashers on and wait for help rather than standing beside the car.",
        trap: "The advice that is right on a country highway is the opposite of the advice for an interstate. Check which road you are on before you answer.",
        excerptKey: "disabled-walk-facing-traffic",
        sourceLabel: "Mississippi Driver's License Manual - Hazardous Conditions & Emergencies",
        sourceUrl: hb(65),
        commonlyMissed: true,
      },
      {
        id: "ms_s2_11",
        topic: "licensing",
        question:
          "You are sixteen and have just been issued a Mississippi Learner's Permit. How long must you hold it before a Class R license?",
        choices: ["Six months", "Ninety days", "Twelve months", "Until you turn eighteen"],
        correctIndex: 2,
        explanation:
          "Twelve months. The manual puts it as one year and the Driver Service Bureau as at least twelve months, and both mean the same waiting period.",
        context:
          "Two things shorten it. Turning seventeen ends the wait - at seventeen or older you may be issued the permit and the license on the same day. And time held on a valid out-of-state learner's permit counts toward the twelve months.",
        trap: "Six months was Mississippi's old figure and it still turns up in study material printed before the manual was revised. The current period is twelve months.",
        excerptKey: "web-permit-twelve-months",
        sourceLabel: "Driver Service Bureau - Regular Learner's Permit",
        sourceUrl: PERMIT,
        commonlyMissed: true,
      },
      {
        id: "ms_s2_12",
        topic: "signals",
        question: "What does a green arrow at a Mississippi intersection give you?",
        choices: [
          "Permission to turn after yielding to oncoming traffic",
          "A warning that the signal is about to change",
          "Permission to turn only if no pedestrians are present",
          "A protected turn, because oncoming traffic has a red light",
        ],
        correctIndex: 3,
        explanation:
          "A green arrow is a protected turn. The manual explains the mechanism: oncoming traffic is stopped at a red while your arrow is green.",
        context:
          "Contrast it with the flashing yellow arrow, which permits the same movement without the protection - there, oncoming traffic has a green. Protection never extends to people on foot, though, and the manual repeats that any time you cross an intersection you yield to pedestrians and to traffic already inside it.",
        trap: "Protected does not mean unconditional. You still need the proper lane, and you still yield to anyone already in the intersection.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signal Lights",
        sourceUrl: hb(37),
      },
      {
        id: "ms_s2_13",
        topic: "rules",
        question:
          "How far before an intersection does Mississippi's manual tell you to switch on your turn signal?",
        choices: ["Fifty feet", "At least one hundred feet", "Two hundred feet", "Three car lengths"],
        correctIndex: 1,
        explanation:
          "One hundred feet. The manual's step-by-step turn procedures give the same figure for a left turn and a right turn, and the arm-signal rule matches it.",
        context:
          "The distance is only one part of turning well. You get into the correct lane early, keep your wheels straight while you wait so a rear-end shunt does not push you into oncoming traffic, stay inside your lane through the turn and finish in the proper lane.",
        trap: "Signaling as you begin to turn is too late to be useful. The point of the hundred feet is that other drivers can act on it.",
        excerptKey: "left-turn-hundred-feet",
        sourceLabel: "Mississippi Driver's License Manual - How To Make A Left Turn",
        sourceUrl: hb(51),
      },
      {
        id: "ms_s2_14",
        topic: "signs",
        question: "What is a pennant-shaped sign on the left side of a Mississippi road warning you about?",
        choices: [
          "A no-passing zone ahead",
          "A narrow bridge",
          "A school crossing",
          "A weight limit on the road ahead",
        ],
        correctIndex: 0,
        explanation:
          "The pennant is used for one purpose only in Mississippi: warning of a no-passing zone ahead. It sits on the left because that is the side the passing happens on.",
        context:
          "It is one of eight standard shapes, each with a single job. Alongside it, a vertical rectangle usually carries a regulation such as a speed limit, a horizontal rectangle is usually a guide sign, and a round sign warns of a railroad crossing.",
        trap: "The pennant looks like a warning triangle turned on its side, which tempts people toward the yield sign. Yield is an equilateral triangle pointing down.",
        excerptKey: "shape-pennant",
        sourceLabel: "Mississippi Driver's License Manual - Standard Shapes And Colors",
        sourceUrl: hb(27),
      },
      {
        id: "ms_s2_15",
        topic: "impairment",
        question: "You are 25. At what blood alcohol content are you under the influence in Mississippi?",
        choices: ["0.02% or more", "0.05% or more", "0.08% or more", "0.10% or more"],
        correctIndex: 2,
        explanation:
          "From twenty-one, Mississippi's threshold is 0.08%. Below twenty-one it drops to 0.02% under the state's Zero Tolerance law.",
        context:
          "A first-offense DUI at 0.08% or above is a misdemeanour carrying a fine of $250 to $1,000, up to forty-eight hours in jail, and a 120-day suspension. A second within five years brings $600 to $1,500, at least five days in jail and a full year off the road. A third within five years is a felony.",
        trap: "0.10% was the old federal figure in many states. Mississippi's is 0.08%.",
        excerptKey: "bac-limits",
        sourceLabel: "Mississippi Driver's License Manual - Driving Under The Influence",
        sourceUrl: hb(78),
      },
      {
        id: "ms_s2_16",
        topic: "rightOfWay",
        question:
          "You are leaving a private driveway onto a Mississippi street. There is no stop sign. What must you do?",
        choices: [
          "Proceed, since traffic on the street must watch for you",
          "Slow but do not stop unless a car is close",
          "Sound your horn and pull out",
          "Stop and yield to oncoming traffic",
        ],
        correctIndex: 3,
        explanation:
          "The manual requires a stop and a yield when you enter a street or highway from a driveway or other entrance point, and says so specifically for the case where no stop sign exists.",
        context:
          "It is part of a family of rules for junctions nobody has marked. At an intersection with no signs or signals at all you yield to approaching traffic and proceed only when it is safe. The state's own definition of right of way is the privilege of immediate use of the highway, and a driver joining it does not hold that privilege.",
        trap: "The absence of a stop sign is not permission to roll out. Mississippi supplies the stop by law where the paint and posts do not.",
        excerptKey: "driveway-yield",
        sourceLabel: "Mississippi Driver's License Manual - Driveways & Unmarked Entrances",
        sourceUrl: hb(57),
      },
      {
        id: "ms_s2_17",
        topic: "parking",
        question:
          "You are parking facing downhill at a Mississippi curb. Which way do you turn the front wheels?",
        choices: [
          "Toward the right, so the curb catches them",
          "Toward the left, into the road",
          "Straight ahead, and set the parking brake",
          "It does not matter if the parking brake is on",
        ],
        correctIndex: 0,
        explanation:
          "Downhill, the wheels point right, curb or no curb. If the car rolls, it rolls into the curb or the verge rather than into traffic.",
        context:
          "Mississippi's hill rule has three cases and only one of them points left: downhill, wheels right; uphill with no curb, wheels right; uphill with a curb, wheels left, so the car settles back onto the curb. In all three you also put the transmission in park or low and set the parking brake firmly.",
        trap: "Uphill with a curb is the exception, and it is the one people generalize from. Everything else points right.",
        excerptKey: "hill-parking",
        sourceLabel: "Mississippi Driver's License Manual - Parking On A Hill",
        sourceUrl: hb(62),
        commonlyMissed: true,
      },
      {
        id: "ms_s2_18",
        topic: "safety",
        question: "What is the best way to avoid hydroplaning on a wet Mississippi road?",
        choices: [
          "Brake gently to settle the tires",
          "Slow down in the rain and where water is pooling",
          "Change lanes to find drier pavement",
          "Accelerate to push the water aside",
        ],
        correctIndex: 1,
        explanation:
          "Speed is the variable that matters. The manual says the best way to avoid losing traction to hydroplaning is to slow down in the rain and where water has pooled.",
        context:
          "Hydroplaning is described as the steering tires riding up onto pooled water like water skis. Two related warnings sit beside it: the opening minutes of rain are the slickest, because the first water lifts accumulated dirt and grease into a film, and you should never drive through standing water at all - find another route.",
        trap: "Braking is not the answer. Once the tires are up on the water there is nothing for the brakes to work against.",
        excerptKey: "hydroplaning-avoid",
        sourceLabel: "Mississippi Driver's License Manual - Hazardous Conditions & Emergencies",
        sourceUrl: hb(65),
      },
      {
        id: "ms_s2_19",
        topic: "sharing",
        question:
          "You are following a tractor-trailer on a Mississippi interstate. How do you know the driver can see you?",
        choices: [
          "If your headlights reach the back of the trailer",
          "If you are within three car lengths",
          "If you can see the truck's side mirrors",
          "If the truck's brake lights respond when you slow",
        ],
        correctIndex: 2,
        explanation:
          "The manual's rule of thumb is exactly this: if you cannot see the side mirrors on the front of the vehicle you are following, its driver cannot see you.",
        context:
          "Large vehicles have blind spots on every side, and the rear one is the one you can control. Position yourself where the mirrors are visible, dim your headlights when you follow a truck at night because they reflect off those large mirrors, and leave extra space behind one stopped on an upgrade in case it rolls back.",
        trap: "Being close enough to read the trailer is the opposite of being visible. The nearer you sit, the deeper into the blind spot you are.",
        excerptKey: "truck-mirrors",
        sourceLabel: "Mississippi Driver's License Manual - Road Safety With Large Vehicles",
        sourceUrl: hb(72),
      },
      {
        id: "ms_s2_20",
        topic: "emergencies",
        question:
          "You approach a Mississippi railroad crossing and the lights start to flash. What must you do?",
        choices: [
          "Cross quickly if the gates are still up",
          "Slow down and look both ways before crossing",
          "Stop only if you can see a train",
          "Stop, and stay stopped until the lights stop flashing",
        ],
        correctIndex: 3,
        explanation:
          "Flashing lights at a crossing mean a train is coming. The manual says always stop when they begin to flash and remain stopped until they stop.",
        context:
          "The stopping band is Mississippi's own phrase - within fifty to ten feet of the outer rail. You stop for a lowered gate, a flashing signal, a posted stop sign, a flagger or a train close enough to matter, and the manual adds that you must stop even if you cannot see a train. Driving around a lowered gate is separately illegal.",
        trap: "Beating the gate is exactly the behavior the manual warns about. Never try to beat a train, and always check for a second one behind the first.",
        excerptKey: "rr-flashing-lights",
        sourceLabel: "Mississippi Driver's License Manual - Railroad Crossings",
        sourceUrl: hb(35),
      },
      {
        id: "ms_s2_21",
        topic: "rules",
        question: "When may you legally pass another vehicle on the right in Mississippi?",
        choices: [
          "When the vehicle ahead is making or about to make a left turn",
          "Whenever the right lane is empty",
          "On any two-lane road where you can see far enough ahead",
          "Only on a one-way street",
        ],
        correctIndex: 0,
        explanation:
          "A vehicle turning left is the classic case the manual lists. Passing on the right is also allowed on an interstate with multiple lanes your way, on a wide four-lane highway free of obstructions, and on any wide one-way highway.",
        context:
          "The permission never extends to the shoulder. Mississippi states that under no circumstances may you drive off the pavement or onto the shoulder to pass. On a two-lane road the center-line markings decide everything, and passing is barred within a hundred feet of bridges, overpasses, railroad crossings, crosswalks and intersections.",
        trap: "One-way streets are on the list, but they are not the only case. The vehicle waiting to turn left is the one the exam most often describes.",
        excerptKey: "passing-right-situations",
        sourceLabel: "Mississippi Driver's License Manual - Passing On The Right",
        sourceUrl: hb(47),
      },
      {
        id: "ms_s2_22",
        topic: "signs",
        question: "A round yellow sign with a black X and two R's is ahead. What does it mean?",
        choices: [
          "A rest area is one mile ahead",
          "A railroad crossing is ahead",
          "The road is closed to through traffic",
          "A rough or uneven surface is ahead",
        ],
        correctIndex: 1,
        explanation:
          "The round sign is used in Mississippi for one thing: warning that a railroad crossing lies ahead. It tells you to look, listen and slow down.",
        context:
          "In rural areas it is normally posted 500 to 900 feet before the tracks. At the crossing itself you will find the white crossbuck, sometimes with a sign below it giving the number of tracks, and often flashing lights or gates. The pavement in front carries a large X and two R's, with a solid yellow line to stop anyone passing on the approach.",
        trap: "The round shape is unique to this warning. Nothing else in Mississippi's system uses it, which is what makes it recognizable from a distance.",
        excerptKey: "rr-advance-sign",
        sourceLabel: "Mississippi Driver's License Manual - Railroad Crossings",
        sourceUrl: hb(35),
      },
      {
        id: "ms_s2_23",
        topic: "speed",
        question: "What is the maximum speed on the Natchez Trace Parkway in Mississippi?",
        choices: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 1,
        explanation:
          "Fifty miles an hour, except where a lower limit is posted. The Parkway has its own row in the manual's speed table and its own appendix.",
        context:
          "The Trace is federal land, administered by the National Park Service, and Mississippi's stretch runs about 350 miles. Commercial vehicles are excluded and access is limited. State traffic laws apply on it, but so do federal regulations, and the manual warns that an offense there is tried in a federal court.",
        trap: "Fifty-five is the two-lane highway figure and it is easy to apply it here. The Parkway is a separate row in the table.",
        excerptKey: "natchez-fifty",
        sourceLabel: "Mississippi Driver's License Manual - Appendix B: The Natchez Trace",
        sourceUrl: hb(90),
      },
      {
        id: "ms_s2_24",
        topic: "licensing",
        question: "What is Mississippi's minimum liability cover for injury to one person in one accident?",
        choices: ["$15,000", "$20,000", "$25,000", "$50,000"],
        correctIndex: 2,
        explanation:
          "Twenty-five thousand dollars for a single person in a single-vehicle accident. The manual prints the three minimums together as 25/50/25.",
        context:
          "The other two are $50,000 where two or more people are injured in one accident, and $25,000 for other people's property damage in any single accident. Every motor vehicle operated in Mississippi must carry liability insurance, and the card - paper or an image on a phone - lives in the vehicle.",
        trap: "Fifteen thousand is a different figure in the same chapter: the value of a certificate of deposit or securities you could show instead of a policy after a crash.",
        excerptKey: "insurance-minimums",
        sourceLabel: "Mississippi Driver's License Manual - Proof Of Insurance & Safety Responsibility Act",
        sourceUrl: hb(76),
      },
      {
        id: "ms_s2_25",
        topic: "signals",
        question:
          "Overhead lane signals show a red light above the lane you are in and green above the next one. What must you do?",
        choices: [
          "Leave the red lane - you may travel only in a lane marked green",
          "Continue, since the red applies only to trucks",
          "Stop in the lane and wait for the light to change",
          "Use the red lane only to pass",
        ],
        correctIndex: 0,
        explanation:
          "Lane direction control signals decide which lanes are open. You travel only in a lane marked with a green light and never in one marked red.",
        context:
          "You will meet these where a lane reverses direction by time of day, or where a lane is closed ahead. They sit alongside a broader principle in the manual: signs and signals govern unless a police officer is directing traffic, and an officer's directions override everything.",
        trap: "A red lane signal is not the same as a red traffic light. It closes the lane rather than stopping the flow, so waiting in it is the wrong move.",
        excerptKey: "lane-direction-control",
        sourceLabel: "Mississippi Driver's License Manual - Lane Direction Control",
        sourceUrl: hb(40),
      },
      {
        id: "ms_s2_26",
        topic: "safety",
        question:
          "Mississippi law requires a child of what age to ride in a child passenger restraint device?",
        choices: [
          "Under two years old",
          "Under three years old",
          "Under four years old",
          "Under six years old",
        ],
        correctIndex: 2,
        explanation:
          "A child under four must be properly secured in a car seat that meets applicable safety standards. From four the booster rules take over.",
        context:
          "The booster stage runs from four up to seven for a child under 4 feet 9 inches tall or under 65 pounds. Above that the ordinary seat belt law applies, which in Mississippi covers every occupant in every seat. Violating either the belt law or the child restraint law can bring a fine.",
        trap: "Four is where the car seat requirement ends and the booster requirement begins - the child does not simply move into a seat belt at that point.",
        excerptKey: "carseat-under-four",
        sourceLabel: "Mississippi Driver's License Manual - Seat Belts, Car Seats, And Child Restraints",
        sourceUrl: hb(64),
      },
      {
        id: "ms_s2_27",
        topic: "rightOfWay",
        question: "You are approaching a Mississippi roundabout. Who has the right of way?",
        choices: [
          "The vehicle that entered most recently",
          "Traffic already circulating in the roundabout",
          "Whichever approach carries the wider road",
          "Vehicles entering, because circulating traffic can go round again",
        ],
        correctIndex: 1,
        explanation:
          "Entering traffic yields to traffic already going round. That is the rule the whole design depends on.",
        context:
          "The manual's four steps are simple: slow down as you approach, yield to traffic in the circle, enter counterclockwise, then take your exit and signal your intent. A warning sign with a circular arrow tells you a roundabout or traffic circle is coming.",
        trap: "Counterclockwise is the direction in Mississippi, as everywhere in North America, so the traffic you must watch for arrives from your left.",
        excerptKey: "roundabout-counterclockwise",
        sourceLabel: "Mississippi Driver's License Manual - Roundabouts",
        sourceUrl: hb(57),
      },
      {
        id: "ms_s2_28",
        topic: "rules",
        question: "What does a double solid white line between two lanes mean in Mississippi?",
        choices: [
          "Traffic on the two sides moves in opposite directions",
          "You may change lanes but only to turn",
          "The lane on the right is for buses only",
          "Traffic moves the same way on both sides and crossing the line is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "White lines separate traffic moving in the same direction. A double solid white one permits travel on both sides but forbids crossing between them.",
        context:
          "Its single-line cousin is softer: a single solid white line also separates same-direction traffic, and crossing it is discouraged rather than prohibited. A broken white line is the ordinary lane divider you may cross to change lanes when it is safe.",
        trap: "Discouraged and prohibited are different words and Mississippi uses them deliberately - single solid white is discouraged, double solid white is prohibited.",
        excerptKey: "marking-double-white",
        sourceLabel: "Mississippi Driver's License Manual - Pavement Markings",
        sourceUrl: hb(25),
      },
      {
        id: "ms_s2_29",
        topic: "emergencies",
        question:
          "You need to report an emergency on a Mississippi interstate from a mobile phone. What number does the manual give?",
        choices: ["511", "*HP, which is *47", "*55", "1-800-TROOPER"],
        correctIndex: 1,
        explanation:
          "Dialling *HP - that is *47 - connects you toll free to a Mississippi Highway Patrol dispatcher.",
        context:
          "The manual asks you to be ready with the nature of the emergency and the location, giving the highway and mile marker, and to keep the number for genuine emergencies only. For a crash with injuries, 911 is still the number, and at a railroad crossing there is a third route - the blue Emergency Notification System sign, whose toll-free number reaches railroad dispatchers who can stop the trains.",
        trap: "*HP is a Highway Patrol line, not a general roadside assistance number. The manual says to use it only for actual emergencies.",
        excerptKey: "emergency-star-hp",
        sourceLabel: "Mississippi Driver's License Manual - In Case Of An Accident",
        sourceUrl: hb(66),
      },
      {
        id: "ms_s2_30",
        topic: "parking",
        question: "How far from the approach to a traffic control device may you not park in Mississippi?",
        choices: ["Ten feet", "Twenty feet", "Thirty feet", "Fifty feet"],
        correctIndex: 2,
        explanation:
          "Thirty feet. The manual lists it among the prohibited parking places, and the point is that a parked car must not hide the signal or sign from approaching drivers.",
        context:
          "Two other measured bans sit next to it: fifteen feet from the nearest rail of a railroad crossing, and twenty feet from a fire station driveway - seventy-five feet if a sign says so. Alongside those, parking on a blind curve or any other dangerous spot is illegal outright, and the car can be towed.",
        trap: "Thirty feet is the largest of the everyday distances and gets confused with the twenty-foot crosswalk figure. The approach to a signal needs more room, not less.",
        excerptKey: "parking-control-device-rail",
        sourceLabel: "Mississippi Driver's License Manual - Prohibited Parking",
        sourceUrl: hb(60),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real Computerized Exam sits: exact numbers, the exceptions that hang off each rule, and the wording Mississippi actually uses.",
    questions: [
      {
        id: "ms_s3_01",
        topic: "signals",
        question:
          "A flashing yellow arrow points left at a Mississippi intersection. What does it permit?",
        choices: [
          "A protected left turn",
          "A left turn only after coming to a complete stop",
          "A left turn after yielding to oncoming traffic",
          "No left turn until the arrow turns green",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow arrow allows the turn from the proper lane but gives no protection. You yield to oncoming traffic, which is looking at a green light.",
        context:
          "Mississippi's manual states the equivalence outright: for left turns, the flashing yellow arrow and the solid green light mean the same thing. Only the steady green arrow is protected. A solid yellow arrow is different again - it means the same as a solid yellow light, that the signal is about to change.",
        trap: "An arrow of any color feels like a dedicated turn phase. The flashing yellow one is the opposite of that, and it is where left-turn collisions cluster.",
        excerptKey: "signal-fya-equals-green",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signals, Left Turns",
        sourceUrl: hb(38),
        commonlyMissed: true,
      },
      {
        id: "ms_s3_02",
        topic: "rules",
        question:
          "The center of the road shows a broken yellow line on your side and a solid yellow line on the other. May you pass?",
        choices: [
          "Yes, if the oncoming lane is clear and it is safe",
          "No, because one of the lines is solid",
          "Only if the vehicle ahead is under 25 mph",
          "Only between sunrise and sunset",
        ],
        correctIndex: 0,
        explanation:
          "The line nearest your lane governs. Broken on your side means you may cross to pass, provided the oncoming lane is clear and the pass is safe.",
        context:
          "Read the pair from your own lane outward and it is never ambiguous. Broken nearest you: passing allowed. Solid nearest you: passing forbidden, no matter what the far line does. The same test governs the two-lane diagrams the manual prints, where one car may pass and the oncoming car may not.",
        trap: "The presence of a solid line somewhere in the pair does not close the road. What matters is which line is closest to you.",
        excerptKey: "marking-yellow-pair",
        sourceLabel: "Mississippi Driver's License Manual - Pavement Markings",
        sourceUrl: hb(25),
        commonlyMissed: true,
      },
      {
        id: "ms_s3_03",
        topic: "rightOfWay",
        question:
          "Two drivers face each other at an intersection and both intend to turn left. How does Mississippi say to do it?",
        choices: [
          "The driver on the wider road turns first",
          "Each turns to the left of the other, leaving from the left lane and entering the left lane",
          "Each turns in front of the other, passing right side to right side",
          "The first to arrive turns and the other waits",
        ],
        correctIndex: 1,
        explanation:
          "Mississippi turns left of center. Both drivers pass behind one another, leaving from the left lane and entering the left lane of the road they are joining.",
        context:
          "The manual's diagram shows the two paths crossing behind each other rather than in front, which keeps both drivers' views of oncoming traffic open. It sits in the same section as the one-way street rule, where you turn from the lane nearest the curb unless markings say otherwise.",
        trap: "Turning in front of the other driver feels shorter and is the version many people learned informally. It blocks both drivers' sight lines.",
        excerptKey: "two-left-turns",
        sourceLabel: "Mississippi Driver's License Manual - Turning Left Of Center",
        sourceUrl: hb(54),
      },
      {
        id: "ms_s3_04",
        topic: "speed",
        question:
          "What is the maximum speed for a school bus carrying children on its regular route in Mississippi?",
        choices: ["35 mph", "40 mph", "45 mph", "50 mph"],
        correctIndex: 2,
        explanation:
          "Forty-five miles an hour on a regular route. The same bus may do 65 mph on the interstate, where the road is built for it.",
        context:
          "Those two figures sit with the 15 mph school-zone limit at the top of the manual's speed pages. The school-zone limit is the one that binds you as an ordinary driver; the bus figures are there so you know how fast the vehicle you are following is entitled to go.",
        trap: "The 15 mph school-zone number and the 45 mph bus number get mixed up because they share a page. One is about where you are, the other about what the bus may do.",
        excerptKey: "speed-school-bus-45",
        sourceLabel: "Mississippi Driver's License Manual - Legal Speeds",
        sourceUrl: hb(41),
      },
      {
        id: "ms_s3_05",
        topic: "parking",
        question:
          "How close to the driveway entrance of a Mississippi fire station may you leave a parked car?",
        choices: [
          "No closer than twenty feet, or seventy-five if it is posted",
          "No closer than ten feet",
          "No closer than fifty feet in all cases",
          "There is no fixed distance",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet is the default, and a posted sign can push it out to seventy-five. Both numbers appear in the same line of the manual's prohibited parking list.",
        context:
          "That list is where Mississippi keeps all its parking distances. Ten feet from a hydrant, twenty from a crosswalk at an intersection, thirty from the approach to a traffic control device, fifteen from the nearest rail. It also bans parking on sidewalks, on crosswalks, inside intersections, on bridges and in underpasses.",
        trap: "Seventy-five feet is conditional on a sign. Without one, the distance is twenty.",
        excerptKey: "parking-fire-station",
        sourceLabel: "Mississippi Driver's License Manual - Prohibited Parking",
        sourceUrl: hb(60),
      },
      {
        id: "ms_s3_06",
        topic: "sharing",
        question:
          "You have just passed a cyclist going the same way and your turn is coming up on the right. What does Mississippi require?",
        choices: [
          "Turn immediately, to get clear of the cyclist",
          "Sound your horn before turning",
          "Make the right turn only if it can be made with reasonable safety",
          "Wait until the cyclist has passed the junction",
        ],
        correctIndex: 2,
        explanation:
          "The manual sets the standard as reasonable safety. Having overtaken a cyclist, you may turn right across their path only if the turn can be made safely.",
        context:
          "The rule exists because of the geometry - a driver who passes and then turns cuts straight across the line the cyclist is riding. The manual names the maneuver separately too, telling drivers not to cut off a cyclist by turning in front of them, and reminding you that an experienced rider may be doing 20 to 25 mph.",
        trap: "Being ahead is not the same as being clear. The overtake and the turn are two separate judgements and the second one is the dangerous one.",
        excerptKey: "bicycle-right-turn-after",
        sourceLabel: "Mississippi Driver's License Manual - Sharing The Road With Bicycles",
        sourceUrl: hb(73),
        commonlyMissed: true,
      },
      {
        id: "ms_s3_07",
        topic: "emergencies",
        question:
          "Your car has stalled on a railroad track and the crossing lights begin to flash. What does the manual tell you to do?",
        choices: [
          "Try to restart the engine, then leave if it will not start",
          "Get out of the vehicle immediately and move away from the tracks",
          "Stay inside and brace for impact",
          "Push the vehicle clear before leaving it",
        ],
        correctIndex: 1,
        explanation:
          "Get out. Once the lights are flashing you may have only twenty seconds before the train arrives, which is the minimum time the warning system is designed to give.",
        context:
          "The manual gives the escape a memory word - GO, for get out - and a direction: run away from the tracks at a 45-degree angle toward the oncoming train, so the debris from the impact travels away from you. Then dial 911. If the lights have not activated, get out anyway and call 911 and the number on the blue ENS sign.",
        trap: "Twenty seconds is not enough time to restart an engine or push a car. Anything that keeps you near the vehicle is the wrong instinct.",
        excerptKey: "rr-stuck-twenty-seconds",
        sourceLabel: "Mississippi Driver's License Manual - Railroad Crossings",
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "ms_s3_08",
        topic: "safety",
        question: "What does it mean to over-drive your headlights?",
        choices: [
          "Using high beams where streetlights are already lit",
          "Leaving your lights on after sunrise",
          "Aiming the beams too high for oncoming drivers",
          "Driving so fast that you cannot stop within the distance you can see",
        ],
        correctIndex: 3,
        explanation:
          "Over-driving your headlights means your stopping distance is longer than the distance they light up. At that speed anything in the dark ahead is already too close.",
        context:
          "Night driving in the manual is a series of consequences of reduced visibility: cut your speed, dim to low beam within 500 feet of another vehicle, and drop to the far right of your lane when an oncoming car shows only one headlight. Dark or tinted glasses at night are ruled out entirely, since they only cut your vision further.",
        trap: "The phrase sounds like it is about the lights. It is about the speed, and the fix is to slow down rather than to fit brighter bulbs.",
        excerptKey: "night-overdrive-headlights",
        sourceLabel: "Mississippi Driver's License Manual - Driving At Night",
        sourceUrl: hb(63),
      },
      {
        id: "ms_s3_09",
        topic: "licensing",
        question: "How long does a passed Mississippi Computerized Exam score stay valid?",
        choices: ["Two years", "One year", "Six months", "Indefinitely"],
        correctIndex: 0,
        explanation:
          "Two years. Provide the fifty-hour driving affidavit inside that window and you never sit the exam again; wait longer and you retake it.",
        context:
          "It lines up with the permit itself, which is also a two-year document. The affidavit is signed by a parent, teacher or guardian who has watched you drive at least fifty hours and attests to your proficiency, and it exists because Mississippi has not been giving a road test.",
        trap: "The score's validity is not the same as the permit-holding period. Twelve months is how long you wait; two years is how long the pass lasts.",
        excerptKey: "exam-score-two-years",
        sourceLabel: "Mississippi Driver's License Manual - Types Of Licenses & Permits",
        sourceUrl: hb(13),
      },
      {
        id: "ms_s3_10",
        topic: "impairment",
        question:
          "A nineteen-year-old is convicted of a first Zero Tolerance DUI in Mississippi. What is the license suspension?",
        choices: ["30 days", "90 days", "120 days", "One year"],
        correctIndex: 2,
        explanation:
          "One hundred and twenty days, along with a $250 fine. A second Zero Tolerance offense within five years costs a year.",
        context:
          "The ladder keeps climbing: a third within five years brings two years, or until the driver turns 21, whichever is longer. And Zero Tolerance only covers the band from 0.02% up to but not including 0.08%. At 0.08% or above an under-21 driver is charged with a regular DUI instead, which is a heavier offense.",
        trap: "Ninety days is the administrative suspension for refusing the test. The Zero Tolerance conviction figure is 120 days, and the two can stack.",
        excerptKey: "zt-first-offense",
        sourceLabel: "Mississippi Driver's License Manual - Zero Tolerance DUI Penalties",
        sourceUrl: hb(79),
      },
      {
        id: "ms_s3_11",
        topic: "signs",
        question: "A posted speed limit sign in Mississippi tells you the maximum speed under what conditions?",
        choices: [
          "Any conditions, since it is the legal limit",
          "Ideal driving conditions",
          "Daylight conditions only",
          "Dry pavement, whatever the visibility",
        ],
        correctIndex: 1,
        explanation:
          "The manual describes the speed limit sign as the maximum allowed under ideal driving conditions. Rain, traffic or poor visibility all require less.",
        context:
          "The same point runs through the speed chapter: posted limits are intended for ideal conditions, and you reduce speed on curves, at junctions, on narrow or twisting roads and in congestion. The braking chart is drawn on the same assumption - good tires, good brakes and dry pavement.",
        trap: "Driving the posted number in heavy rain is still driving too fast for conditions, and the sign itself does not protect you.",
        excerptKey: "sign-speed-maximum",
        sourceLabel: "Mississippi Driver's License Manual - Regulatory Signs",
        sourceUrl: hb(29),
      },
      {
        id: "ms_s3_12",
        topic: "rules",
        question:
          "How close to a bridge, railroad crossing or intersection does Mississippi forbid passing?",
        choices: ["Fifty feet", "Two hundred feet", "Three hundred feet", "One hundred feet"],
        correctIndex: 3,
        explanation:
          "One hundred feet. The same figure covers bridges, viaducts, overpasses, railroad crossings, crosswalks and intersections, along with any place your view is obstructed.",
        context:
          "It joins the manual's outright bans on passing: never across a double yellow line, never on hills or curves, and never by leaving the pavement or using the shoulder. On the interstate the picture is different, where passing is permitted from either lane as long as the lanes are divided by a broken white line.",
        trap: "One hundred feet is also the signaling distance before a turn. Two different rules, same number, and the exam uses both.",
        excerptKey: "passing-hundred-feet",
        sourceLabel: "Mississippi Driver's License Manual - Other Safe Passing Guidelines",
        sourceUrl: hb(47),
      },
      {
        id: "ms_s3_13",
        topic: "signals",
        question:
          "You reach an intersection where the traffic signal is completely dark. What must you do?",
        choices: [
          "Stop completely, then proceed with caution and yield as required",
          "Treat it as a green light in the direction of the busier road",
          "Slow down and continue without stopping",
          "Wait until another driver goes first",
        ],
        correctIndex: 0,
        explanation:
          "A signal showing nothing at all is treated as a stop. You come to a complete stop, then go with caution, yielding the right of way as the intersection requires.",
        context:
          "Its partner case is the signal stuck on flashing yellow, where you slow down and cross with care rather than stopping. The two malfunction rules mirror the two flashing rules: flashing red or dark means stop, flashing yellow means slow.",
        trap: "A dead signal is not a free-for-all. Mississippi supplies the stop that the light would have given.",
        excerptKey: "signal-dark-intersection",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signal Lights",
        sourceUrl: hb(39),
      },
      {
        id: "ms_s3_14",
        topic: "rightOfWay",
        question:
          "You reach a highway intersection with no signs and no signals of any kind. What does Mississippi require?",
        choices: [
          "The vehicle on the left goes first",
          "Both drivers stop and the faster road proceeds",
          "Yield to approaching traffic and proceed only when it is safe",
          "Continue at your current speed to keep the traffic moving",
        ],
        correctIndex: 2,
        explanation:
          "At an unmarked intersection you yield to approaching traffic and go only when it is safe. Nobody has an automatic priority.",
        context:
          "It fits the manual's general approach to junctions: approach any cross street with extreme caution, slow down if you cannot see the whole intersection, and look both ways as you cross. The state's definition of right of way - the privilege of immediate use of the highway - is a privilege you have to establish, not assume.",
        trap: "The vehicle-on-the-right tie-breaker belongs to the four-way stop. At a genuinely unmarked junction the instruction is simply to yield and wait for safety.",
        excerptKey: "unmarked-intersection",
        sourceLabel: "Mississippi Driver's License Manual - Unmarked Intersection",
        sourceUrl: hb(57),
      },
      {
        id: "ms_s3_15",
        topic: "parking",
        question: "How close to the nearest rail of a railroad crossing may you park in Mississippi?",
        choices: ["Ten feet", "No closer than fifteen feet", "Twenty feet", "Fifty feet"],
        correctIndex: 1,
        explanation:
          "Fifteen feet from the nearest rail. It appears in the prohibited parking list, and it is a different number from the stopping band you use when a train is coming.",
        context:
          "The stopping band for a moving vehicle is Mississippi's odd phrase, within fifty to ten feet of the outer rail, and it applies whenever a gate is down, lights flash, a stop sign is posted, a flagger signals or a train is close. Fifteen feet is about where you may leave a car standing.",
        trap: "Parking and stopping are separate rules with separate numbers here, and the exam is happy to describe one and offer the other's figure.",
        excerptKey: "parking-control-device-rail",
        sourceLabel: "Mississippi Driver's License Manual - Prohibited Parking",
        sourceUrl: hb(60),
      },
      {
        id: "ms_s3_16",
        topic: "speed",
        question: "What is the minimum speed for a car on a Mississippi interstate?",
        choices: ["25 mph", "30 mph", "40 mph", "45 mph"],
        correctIndex: 2,
        explanation:
          "Forty miles an hour. The manual's table gives interstates and four-lane state and US highways a minimum as well as a maximum.",
        context:
          "The minimum exists because a vehicle far below the flow is a hazard. The interstate chapter makes the same point about merging - matching the speed of traffic in the acceleration lane, because joining slower or faster than the flow is dangerous - and tells a slower driver to stay in the right lane.",
        trap: "Two-lane highways and the Natchez Trace have no minimum in the table. The 40 mph figure belongs to interstates and four-lane highways.",
        excerptKey: "speed-table",
        sourceLabel: "Mississippi Driver's License Manual - Legal Speeds",
        sourceUrl: hb(41),
      },
      {
        id: "ms_s3_17",
        topic: "safety",
        question:
          "A six-year-old in Mississippi is 4 feet 2 inches tall and weighs 50 pounds. What restraint does the law require?",
        choices: [
          "A belt-positioning booster seat",
          "A rear-facing car seat",
          "The adult seat belt alone",
          "No restraint, since the child is over four",
        ],
        correctIndex: 0,
        explanation:
          "A booster. From four up to seven, a child under 4 feet 9 inches or under 65 pounds must be in a belt-positioning booster that meets applicable safety standards.",
        context:
          "The height and weight limits are alternatives, not conditions to be met together - a child who fails either one stays in the booster. Below four the requirement is a car seat. The manual also passes on the American Academy of Pediatrics' advice to keep a child rear-facing until they outgrow the convertible seat.",
        trap: "Turning four does not release a child into an adult belt. It moves them from a car seat into a booster.",
        excerptKey: "booster-four-to-seven",
        sourceLabel: "Mississippi Driver's License Manual - Seat Belts, Car Seats, And Child Restraints",
        sourceUrl: hb(64),
        commonlyMissed: true,
      },
      {
        id: "ms_s3_18",
        topic: "sharing",
        question:
          "How much longer does the manual say it takes to pass a large vehicle on a level highway than to pass a car?",
        choices: ["About a second", "One to two seconds", "Three to five seconds", "Ten seconds"],
        correctIndex: 2,
        explanation:
          "Three to five seconds longer on level ground, simply because the vehicle is so much longer than a car.",
        context:
          "The gradient changes it both ways. Uphill a large vehicle usually loses speed, so passing gets easier; downhill its momentum carries it faster, so you may need more speed of your own. The manual's advice, when the numbers are close, is that waiting for a better moment is always an option.",
        trap: "The extra time is not about the truck's speed but its length. Even a truck holding a steady 60 mph takes longer to get past.",
        excerptKey: "truck-pass-time",
        sourceLabel: "Mississippi Driver's License Manual - Road Safety With Large Vehicles",
        sourceUrl: hb(72),
      },
      {
        id: "ms_s3_19",
        topic: "emergencies",
        question:
          "You are in a crash in Mississippi that was not your fault, and you cannot produce proof of insurance. What can happen?",
        choices: [
          "Nothing, since you were not at fault",
          "You can be cited for a violation anyway",
          "You have thirty days to produce it with no penalty",
          "Only the at-fault driver is asked for insurance",
        ],
        correctIndex: 1,
        explanation:
          "The manual says plainly that without proof of insurance you may be cited even if the crash was not your fault. The duty to carry it is separate from the question of blame.",
        context:
          "Beyond the citation, your driving privilege may be suspended if you cannot show cover after a crash. The ways out are narrow - showing that a policy was in force, or a $15,000 certificate of deposit or securities, or a certificate of self-insurance, or a cash deposit or surety bond, or a release of liability.",
        trap: "Fault decides who pays for the damage. It has nothing to do with whether you were required to carry the card.",
        excerptKey: "accident-no-insurance",
        sourceLabel: "Mississippi Driver's License Manual - In Case Of An Accident",
        sourceUrl: hb(66),
      },
      {
        id: "ms_s3_20",
        topic: "licensing",
        question:
          "You have just moved to Mississippi with a valid license from another state. How long do you have to get a Mississippi license?",
        choices: ["Thirty days", "Ninety days", "Six months", "Sixty days"],
        correctIndex: 3,
        explanation:
          "Sixty days for the license. The tag is a different deadline - thirty days for a Mississippi license plate.",
        context:
          "With a valid out-of-state license the Computerized Exam is waived and you take only a vision screening, but you surrender the out-of-state license and your record there is checked. If the out-of-state license expired more than thirty days ago, the exam comes back.",
        trap: "Sixty days for the license, thirty for the plate. The two deadlines sit in the same paragraph and get swapped.",
        excerptKey: "lic-move-sixty-days",
        sourceLabel: "Mississippi Driver's License Manual - Out-Of-State Drivers: Moving To Mississippi",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "ms_s3_21",
        topic: "signs",
        question:
          "Under your stop sign hangs a small plaque reading CROSS TRAFFIC DOES NOT STOP. What does it tell you?",
        choices: [
          "The other lanes have the right of way and will not stop",
          "You may proceed without stopping if the way is clear",
          "The intersection is a four-way stop",
          "The crossing road is one-way",
        ],
        correctIndex: 0,
        explanation:
          "It warns you that your stop sign is not part of a four-way stop. The traffic crossing in front of you is not stopping, and it has the right of way.",
        context:
          "It is Mississippi's answer to a common and dangerous assumption - that if you have a stop sign, everyone else does. The underlying rule is the two-way stop: the road without signs goes first, and only once it is clear do the stopped drivers sort out order among themselves.",
        trap: "Assuming a four-way stop where there is none is precisely the error the plaque exists to prevent, and it produces side-impact collisions.",
        excerptKey: "sign-cross-traffic",
        sourceLabel: "Mississippi Driver's License Manual - Warning Signs",
        sourceUrl: hb(31),
        commonlyMissed: true,
      },
      {
        id: "ms_s3_22",
        topic: "rules",
        question:
          "A center lane is marked with arrows curving both left and right. How may you use it?",
        choices: [
          "As a passing lane when the outer lanes are busy",
          "As a normal travel lane in either direction",
          "Only in preparation to turn left or right across the opposite lanes",
          "Only for vehicles turning left",
        ],
        correctIndex: 2,
        explanation:
          "The two-way center turn lane is for turns only. You enter it in preparation to turn across the opposite lanes, and the manual says it is never used for passing.",
        context:
          "Mississippi describes it twice, once under pavement markings and once as a regulatory sign, and both say the same thing: the lane is not available for normal travel. On a road with no dedicated turn lane at all, you use the lane next to the center when you are turning left.",
        trap: "It is not a left-turn-only lane. Drivers approaching from the other direction use it for their left turns, which are your right turns, so the lane serves both.",
        excerptKey: "turn-lane-only",
        sourceLabel: "Mississippi Driver's License Manual - Directional Arrows",
        sourceUrl: hb(26),
      },
      {
        id: "ms_s3_23",
        topic: "signals",
        question:
          "At a red light you slow to walking pace, see the way is clear, and turn right without stopping. What does Mississippi say?",
        choices: [
          "That is acceptable, since you yielded",
          "The turn is illegal, because you must stop completely first",
          "It depends on whether a sign permits right on red",
          "It is legal between 6 a.m. and 10 p.m.",
        ],
        correctIndex: 1,
        explanation:
          "The manual addresses this exact behavior and calls it illegal: before turning right on red you must first stop completely, and only yielding before turning is not enough.",
        context:
          "The right turn on red is permitted by default in Mississippi, which is why the stop is the only thing standing between a legal turn and a citation. Once you have stopped, you yield to other traffic and to pedestrians, and a NO TURN ON RED sign removes the permission entirely.",
        trap: "A rolling stop where nothing is coming feels harmless and is the single most cited example in the manual's signal chapter.",
        excerptKey: "signal-red-stop-first",
        sourceLabel: "Mississippi Driver's License Manual - Traffic Signal Lights",
        sourceUrl: hb(37),
        commonlyMissed: true,
      },
      {
        id: "ms_s3_24",
        topic: "impairment",
        question:
          "You refuse a breath test in Mississippi and surrender your license. How long does the officer's receipt let you drive?",
        choices: ["Ten days", "Thirty days", "Sixty days", "Forty-five days"],
        correctIndex: 3,
        explanation:
          "Forty-five days. The receipt for a surrendered license acts as a temporary permit for that period while the Commissioner of Public Safety reviews the case.",
        context:
          "The parallel case has a different number. If you take the test and your blood alcohol content reaches or exceeds your limit, the officer takes the license and the receipt is good for thirty days rather than forty-five. Either way the officer's sworn report goes to the Commissioner with the license.",
        trap: "Thirty and forty-five are both real figures in the same chapter. Forty-five days follows a refusal; thirty follows a failed test.",
        excerptKey: "refusal-forty-five-day-permit",
        sourceLabel: "Mississippi Driver's License Manual - Implied Consent",
        sourceUrl: hb(78),
      },
      {
        id: "ms_s3_25",
        topic: "safety",
        question: "When is a Mississippi road at its most slippery during rain?",
        choices: [
          "In the opening minutes of the rain",
          "After an hour of steady rain",
          "Once puddles begin to form",
          "As the road starts to dry",
        ],
        correctIndex: 0,
        explanation:
          "The first few minutes. The opening water lifts accumulated dirt and grease off the surface into a film, and the manual calls that the slickest and most dangerous stage.",
        context:
          "It is the reason for the instruction that follows it - slow down as soon as rain begins, rather than waiting for the road to feel wrong. Once water is standing, the risk changes to hydroplaning, and standing water deep enough to be called a flooded roadway is not to be driven through at all.",
        trap: "Waiting for heavy rain before easing off gets the timing exactly backwards. The dangerous window is at the start.",
        excerptKey: "rain-first-minutes",
        sourceLabel: "Mississippi Driver's License Manual - Hazardous Conditions & Emergencies",
        sourceUrl: hb(65),
        commonlyMissed: true,
      },
      {
        id: "ms_s3_26",
        topic: "rightOfWay",
        question: "How must a Mississippi driver treat a bicycle at an intersection?",
        choices: [
          "Bicycles always yield to motor vehicles",
          "Bicycles yield unless they are in a bike lane",
          "You yield to a bicycle exactly as you would to any other vehicle",
          "Bicycles have the right of way in every situation",
        ],
        correctIndex: 2,
        explanation:
          "The manual's wording is that you must yield to bicycles exactly as you would to any other vehicle. A bicycle on a public road is a vehicle in Mississippi law.",
        context:
          "The same equivalence runs the other way. Cyclists must observe traffic laws, stop for stop signs and lights, and signal their turns by hand. They ride as far right as is safely possible, usually two to four feet from the edge, and may move left to pass, to avoid hazards or to go straight where the right lane turns.",
        trap: "Equal treatment is the rule, in both directions. A cyclist gets no automatic priority and gives none away either.",
        excerptKey: "row-bicycles",
        sourceLabel: "Mississippi Driver's License Manual - Right Of Way",
        sourceUrl: hb(55),
      },
      {
        id: "ms_s3_27",
        topic: "emergencies",
        question:
          "Your car breaks down and you are stranded in a lane of a Mississippi interstate. What does the manual tell you to do?",
        choices: [
          "Stand behind the vehicle to warn approaching traffic",
          "Stay inside with the doors locked and wait for reliable help",
          "Walk to the nearest exit for assistance",
          "Cross to the far shoulder where it is safer",
        ],
        correctIndex: 1,
        explanation:
          "Stay in the car. The manual says never to get out into the main flow of traffic, never to stand beside the vehicle and never to walk along or across an interstate.",
        context:
          "Before that, you get the vehicle as far right as you can and put the emergency flashers on so other drivers know you need help; at night you leave the lights on too. Hitchhiking is ruled out. The rule is the reverse of the one for an ordinary highway, where walking on the left facing traffic is the instruction.",
        trap: "Standing behind the car to be visible puts you in the most dangerous place available. Visibility comes from the flashers, not from your body.",
        excerptKey: "interstate-stranded",
        sourceLabel: "Mississippi Driver's License Manual - Accidents & Breakdowns",
        sourceUrl: hb(70),
      },
      {
        id: "ms_s3_28",
        topic: "sharing",
        question:
          "You are on a four-lane divided highway and a school bus stops with red lights flashing on the far side. What must you do?",
        choices: [
          "Stop, because the rule applies from both directions",
          "Slow to 15 mph and pass with care",
          "Stop only if children are visible",
          "Continue on your side without stopping",
        ],
        correctIndex: 3,
        explanation:
          "The divided-highway exception covers exactly this. On a highway of four or more lanes with traffic going both ways, a driver traveling the opposite way from the stopped bus may continue.",
        context:
          "It is the only exception to a rule that otherwise binds you regardless of direction. If you are going the same way as the bus, you stop whatever the road looks like, and you wait until the children have crossed, the bus is moving, the red lights are off and the stop arm has folded back. A loading zone where pedestrians are not allowed to cross is treated separately.",
        trap: "Four lanes alone does not release you. You must also be going the opposite way, and drivers behind the bus stop on any road.",
        excerptKey: "schoolbus-opposite-direction",
        sourceLabel: "Mississippi Driver's License Manual - Yielding Right-Of-Way To School Buses",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "ms_s3_29",
        topic: "parking",
        question:
          "You are leaving a diagonal parking space in Mississippi. What does the manual tell you to do?",
        choices: [
          "Wait until the area behind is clear and look back while backing",
          "Reverse slowly using the rearview mirror",
          "Sound the horn once before reversing",
          "Reverse quickly to spend less time in the lane",
        ],
        correctIndex: 0,
        explanation:
          "Wait for the area behind the vehicle to be clear, then keep a proper lookout by looking back as you reverse. Mirrors alone are not enough.",
        context:
          "The manual states the mirror point as a general rule: always look back over your shoulder while backing up, and never rely on the rearview mirror alone. The same section reminds you that a driver leaving any parking space has no right of way and yields to everything already moving.",
        trap: "A reversing camera or mirror does not satisfy the instruction. Mississippi asks for the over-the-shoulder look explicitly.",
        excerptKey: "backing-look-back",
        sourceLabel: "Mississippi Driver's License Manual - Exiting A Parallel Parking Space",
        sourceUrl: hb(61),
      },
      {
        id: "ms_s3_30",
        topic: "speed",
        question:
          "Traffic is heavy and rain is falling on a Mississippi road posted at 55 mph. What speed does the manual expect?",
        choices: [
          "55 mph, since that is the posted limit",
          "55 mph unless a variable sign says otherwise",
          "Less than 55, adjusted to the conditions",
          "Exactly the speed of the traffic around you",
        ],
        correctIndex: 2,
        explanation:
          "Posted limits assume ideal conditions. With rain and congestion the manual expects you to reduce speed to suit what the road is actually doing.",
        context:
          "The chapter lists the situations that call for less: curves, approaching intersections, narrow or twisting roads, congestion, and poor weather or visibility. Beside them sits the instruction to know your speed at all times and to glance at the speedometer rather than judging by feel.",
        trap: "A posted limit is a ceiling, not a target. Driving it in conditions that do not support it is still driving too fast.",
        excerptKey: "speed-reduce-conditions",
        sourceLabel: "Mississippi Driver's License Manual - Legal Speeds",
        sourceUrl: hb(41),
      },
      {
        id: "ms_s3_31",
        topic: "signs",
        question:
          "The school zone sign in Mississippi's manual states 15 mph. When does that limit apply?",
        choices: [
          "At all times, day and night",
          "When passing a school during recess, or while children arrive or leave at opening and closing hours",
          "Only on days when a flashing beacon is lit",
          "Between 7 a.m. and 4 p.m. on weekdays",
        ],
        correctIndex: 1,
        explanation:
          "The sign's own wording ties the limit to recess and to arrival and departure during opening and closing hours, rather than to the clock.",
        context:
          "A separate sign, the pentagon school crossing, warns that children cross on their way to and from school, and the manual notes it is sometimes posted several blocks from the school itself. Both sit inside a broader instruction to slow down and take care around schools, playgrounds and residential areas.",
        trap: "The times are defined by what the school is doing, not by a fixed window. A quiet mid-morning is a different situation from the end of the school day.",
        excerptKey: "sign-school-zone-fifteen",
        sourceLabel: "Mississippi Driver's License Manual - Warning Signs",
        sourceUrl: hb(31),
      },
      {
        id: "ms_s3_32",
        topic: "rules",
        question: "How far before your exit should you be in the correct lane on a Mississippi interstate?",
        choices: ["One hundred feet", "One-eighth of a mile", "Half a mile", "At least one-quarter mile"],
        correctIndex: 3,
        explanation:
          "At least a quarter of a mile. The manual asks you to be in the correct lane that far out, because most exits leave from the right and some leave from the left.",
        context:
          "You then signal, move into the deceleration lane and only slow down once you are in it - not before. If you take the wrong exit you continue off it rather than correcting on the ramp, and if you miss your exit you carry on to the next one. Stopping, backing up or turning around on a ramp is ruled out entirely.",
        trap: "Signaling and merging at the ramp mouth is far too late on a road where traffic is doing 70. A quarter of a mile is roughly fifteen seconds of warning.",
        excerptKey: "interstate-exit-quarter-mile",
        sourceLabel: "Mississippi Driver's License Manual - Entering & Exiting The Interstate",
        sourceUrl: hb(69),
      },
      {
        id: "ms_s3_33",
        topic: "licensing",
        question: "Who must wear a crash helmet on a motorcycle in Mississippi?",
        choices: [
          "Anyone operating or riding on a motorcycle or motor scooter on public roads",
          "Riders under 21 only",
          "Only the operator, not the passenger",
          "Nobody - helmets are recommended but not required",
        ],
        correctIndex: 0,
        explanation:
          "Mississippi's helmet rule covers operating or riding any motorcycle or motor scooter on the public roads, with no age exemption, and the helmet must meet federal minimum guidelines.",
        context:
          "A motorcycle also needs an endorsement on your license, earned through a computerized test on motorcycle operation plus a skills test. Tell the examiner before you start so the right test is loaded. A valid out-of-state motorcycle license can get both tests waived.",
        trap: "Some states limit helmet laws by age. Mississippi's applies to anyone operating or riding, and to scooters as well as motorcycles.",
        excerptKey: "mc-helmet",
        sourceLabel: "Mississippi Driver's License Manual - Motorcycle Endorsement",
        sourceUrl: hb(14),
      },
      {
        id: "ms_s3_34",
        topic: "safety",
        question: "A front tire blows out at speed on a Mississippi highway. What does the manual tell you to do?",
        choices: [
          "Brake hard to stop before the wheel is damaged",
          "Steer onto the shoulder immediately and stop",
          "Take your foot off the accelerator, then brake slowly and cautiously",
          "Accelerate briefly to regain steering",
        ],
        correctIndex: 2,
        explanation:
          "Come off the accelerator first and let the car slow, then use the brakes gently. Sudden braking after a blowout is what the manual warns against.",
        context:
          "It adds that if you have plenty of stopping distance you can simply let the vehicle come to a stop on its own. The instinct being corrected is the same one the skid section corrects - a sharp input at the wrong moment turns a recoverable problem into a loss of control.",
        trap: "Braking hard is the reflex and it is the one specifically ruled out. Ease off first, then brake gently.",
        excerptKey: "blowout",
        sourceLabel: "Mississippi Driver's License Manual - Hazardous Conditions & Emergencies",
        sourceUrl: hb(65),
      },
      {
        id: "ms_s3_35",
        topic: "emergencies",
        question:
          "Which vehicles must stop at every Mississippi railroad crossing, whether or not a train is coming?",
        choices: [
          "Any vehicle towing a trailer",
          "School buses, vehicles for hire carrying passengers, and vehicles carrying explosives or flammable liquids",
          "Only school buses with children aboard",
          "Buses and any vehicle over 26,000 pounds",
        ],
        correctIndex: 1,
        explanation:
          "Three categories stop every time regardless of signage or signals: a school bus carrying even one child, a vehicle for hire carrying passengers, and a load of explosives or flammable liquids.",
        context:
          "They stop within the same band as everyone else, fifty to ten feet of the outer rail, and the driver checks both directions before moving off. The manual's advice to the rest of us is to expect it - watch for vehicles that must stop whether or not a train is coming.",
        trap: "A school bus stops with one child aboard, not only when it is full. The requirement is about the cargo, not the load factor.",
        excerptKey: "rr-must-stop-vehicles",
        sourceLabel: "Mississippi Driver's License Manual - Railroad Crossings",
        sourceUrl: hb(35),
      },
    ],
  },
];
