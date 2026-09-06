import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Kentucky Driver Manual dated
// 10-11-2023 - the edition drive.ky.gov links as "Study the Driver Manual" and
// the only study source the Kentucky State Police endorse for the written test
// - plus the sections of KRS chapters 186, 189 and 189A that carry rules the
// manual states incompletely or not at all, and the two official web pages
// (drive.ky.gov and kentuckystatepolice.ky.gov) that carry the test and
// licensing procedure.
//
// Kentucky's manual is unusually generous with safe-driving advice and
// unusually thin on numbers, so the statute does a lot of work here:
//
// 1. The manual gives no parking distances at all. The 15-foot hydrant and
//    30-foot stop-sign figures come from KRS 189.450(5).
// 2. The manual tells you to signal 100 feet before a turn but never says it is
//    the law. KRS 189.380(2) does.
// 3. The manual never states the permit age the statute now sets. It still
//    prints 16; KRS 186.450(1) and the drive.ky.gov graduated-licensing FAQ
//    both say 15.
// 4. The manual gives the written test's pass mark but not its length. Only the
//    80 percent figure is official, and that is the figure used here.
//
// Two genuine conflicts are flagged where they arise. On school buses the
// manual excuses oncoming traffic on "a highway of four or more lanes", while
// KRS 189.370(1), as amended effective 15 July 2026, excuses it only where
// those four lanes are "divided by an elevated barrier or unpaved median". The
// questions that touch this are built on roads where both readings give the
// same answer, and the gap itself is taught in the context notes. Separately,
// the manual's own sample test marks "must stop" as the answer for a
// mid-block pedestrian while the manual's pedestrian section says a pedestrian
// crossing away from a crosswalk yields to vehicles; no question is built on
// that tension, only on the duty of care both statements share.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// Commonwealth's own authoritative wording.
const HB =
  "https://wp.kentuckystatepolice.ky.gov/wp-content/uploads/2023/11/Kentucky-Driver-Manual-10-11-2023.pdf";
const GDLP = "https://drive.ky.gov/Drivers/Pages/GDLP.aspx";
const krs = (id: string) => `https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=${id}`;

export const kentuckySets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Kentucky Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Kentucky: what the shapes and colors mean, who goes first, and the handful of numbers the Kentucky State Police written test expects you to know cold.",
    questions: [
      {
        id: "ky_s1_01",
        topic: "signs",
        question:
          "You reach a red eight-sided sign at an intersection. Where does the Kentucky Driver Manual say you must stop?",
        choices: [
          "Anywhere in the intersection, as long as you pause",
          "Behind the stop line, or the crosswalk if there is no line",
          "Level with the sign itself, whatever the markings say",
          "Only if a vehicle is approaching on the cross street",
        ],
        correctIndex: 1,
        explanation:
          "The octagon is reserved for STOP, and the manual is specific about the place: behind the stop line, or behind the crosswalk when no line is painted. You then yield to crossing vehicles and pedestrians in all directions before moving.",
        context:
          "Kentucky teaches signs by shape and color first, because a shape is readable in fog, glare or a language you do not read. The octagon means stop and nothing else, the downward triangle means yield, and a yellow diamond warns of something ahead. The statute adds a third fallback for a crossing with neither line nor crosswalk: stop at the point nearest the cross road where you can actually see approaching traffic.",
        trap:
          "An empty cross street does not turn a stop sign into a yield sign. The wheels have to stop turning either way.",
        excerptKey: "stop-sign",
        sourceLabel: "Kentucky Driver Manual - Section Six: Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Kentucky and want to turn right. What does the manual allow?",
        choices: [
          "Turn right without stopping if the way looks clear",
          "Turn right only where a sign expressly permits it",
          "Turn right after a full stop, unless a sign prohibits it, once the roadway is clear of vehicles and pedestrians",
          "Turn right only when a green arrow appears",
        ],
        correctIndex: 2,
        explanation:
          "Right on red is Kentucky's default rather than a special permission. Two conditions ride with it: you must actually stop first and be in the proper lane, and any posted sign forbidding the turn overrides the default.",
        context:
          "Kentucky treats red as stop and stay stopped, with two movements carved out of it. Right on red is permitted after a complete stop unless signs say otherwise, and a left on red is permitted from a one-way street into the nearest lane of another one-way street on the same terms. A red arrow removes the permission for that movement entirely until it turns green.",
        trap:
          "\"Clear enough to go\" is not the test. A turn made without ever stopping is unlawful on an empty road at three in the morning.",
        excerptKey: "right-on-red",
        sourceLabel: "Kentucky Driver Manual - Section Six: Traffic Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s1_03",
        topic: "rightOfWay",
        question:
          "You and another driver reach a four-way stop at the same moment, at right angles to each other. Who goes first?",
        choices: [
          "The driver on the right",
          "Whoever signals first",
          "The driver going straight, ahead of any turning driver",
          "The driver on the left, who is farther from the crossing traffic",
        ],
        correctIndex: 0,
        explanation:
          "Kentucky's tie-breaker is the driver on your right. It only comes into play when the arrival is genuinely simultaneous, because the driver who clearly got there first goes first.",
        context:
          "The manual sets right of way out as a list of people you yield to, and the first entries handle intersections: the driver who is at or arrives before you, then the driver on your right at a four-way stop when you arrive together. KRS 189.330(1) says the same thing from the other side, that the vehicle on the left yields to the vehicle on the right. Underneath all of it is a warning the manual repeats, that nobody should assume they automatically have the right of way.",
        trap:
          "Going straight does not outrank turning at a four-way stop. Order of arrival decides it, and the right-hand rule only breaks a tie.",
        excerptKey: "row-four-way",
        sourceLabel: "Kentucky Driver Manual - Section Six: Yielding Right of Way",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s1_04",
        topic: "safety",
        question:
          "What minimum following distance does the Kentucky Driver Manual teach in good conditions?",
        choices: ["2 seconds", "3 seconds", "4 seconds", "One car length for every 10 mph"],
        correctIndex: 2,
        explanation:
          "Kentucky's figure is four seconds, not the three seconds most practice apps teach. You pick a fixed object, start counting when the vehicle ahead passes it, and you are too close if you reach it before finishing \"one thousand four\".",
        context:
          "The manual devotes a full page to the count because rear-end crashes are the most common kind. Four seconds is the floor in good conditions, and the book lists the situations that call for more: slippery roads, large vehicles ahead, night, fog, bad weather, motorcycles, and vehicles that must stop at railroad crossings. Following more closely than is reasonable and prudent is itself against the law.",
        trap:
          "Three seconds is the usual answer elsewhere and the usual wrong answer here. Kentucky prints four.",
        excerptKey: "following-4-seconds",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Space in Front",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s1_05",
        topic: "speed",
        question:
          "There is no speed limit sign on the state highway you are driving. What limit applies in Kentucky?",
        choices: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "Fifty-five is Kentucky's default on state highways that are not interstates or parkways. It is the figure the manual prints and the figure KRS 189.390(3) sets.",
        context:
          "Kentucky publishes four unposted defaults and one ceiling. Interstates and parkways are 65, all other state highways are 55, a business or residential district is 35, and an off-street parking facility open to the public is 15. The transportation secretary may raise specific interstates and parkways to 70 by official order. Every one of those is a maximum for ideal conditions, not a target.",
        trap:
          "Sixty-five belongs to interstates and parkways. An ordinary two-lane state highway is 55 unless signs say otherwise.",
        excerptKey: "speed-55",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Kentucky Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_06",
        topic: "signs",
        question: "A downward-pointing red and white triangle faces you. What does it require?",
        choices: [
          "Come to a complete stop, then proceed",
          "Sound your horn before entering",
          "Keep your speed, since the sign is only advisory",
          "Slow down and let traffic that has the right of way cross before you enter",
        ],
        correctIndex: 3,
        explanation:
          "A yield sign asks you to slow and give way. Stopping is required only when safety demands it, but the moment it does, stopping becomes compulsory rather than optional.",
        context:
          "The triangle is the only three-sided sign in Kentucky's system, so its shape alone identifies it. Yield is the lighter cousin of stop: no automatic halt, but no right to push in either. The statute adds that if you drive past a yield sign without stopping and then collide with a vehicle in the intersection, the collision is treated as evidence in itself that you failed to yield.",
        trap:
          "Yield is not \"stop\", but it is also not \"carry on regardless\". If no gap exists you have to stop and wait for one.",
        excerptKey: "yield-sign",
        sourceLabel: "Kentucky Driver Manual - Section Six: Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_07",
        topic: "sharing",
        question:
          "A school bus stops ahead of you on a two-lane road with its stop arm out and its signal lights flashing. What must you do?",
        choices: [
          "Stop, and stay stopped until the bus is in motion again",
          "Slow to 20 mph and pass with care",
          "Stop only if you can see children on the road",
          "Pass on the left once the children have boarded",
        ],
        correctIndex: 0,
        explanation:
          "On a two-lane road every direction stops, and the stop lasts until the people are clear of the roadway and the bus is moving again. Nothing shorter counts.",
        context:
          "Kentucky's school-bus rule covers church buses too, and it applies to a driver approaching from any direction. The only relief the manual gives is for oncoming traffic on a highway of four or more lanes, and the statute as amended in 2026 is stricter still, excusing oncoming traffic only where those four lanes are divided by an elevated barrier or unpaved median. On the two-lane road in this question both readings agree.",
        trap:
          "Waiting for the lights to go out is the rule, not waiting for the children to be seated. Creeping forward before the bus moves is still a violation.",
        excerptKey: "schoolbus-stop",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Rules for School Buses",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s1_08",
        topic: "impairment",
        question:
          "What blood alcohol concentration makes it an offense for a driver aged 21 or over in Kentucky?",
        choices: ["0.10 or above", "0.08 or above", "0.05 or above", "0.02 or above"],
        correctIndex: 1,
        explanation:
          "Kentucky's adult threshold is 0.08. Reaching it is an offense on its own, with no separate proof of bad driving needed.",
        context:
          "The 0.08 figure is a line, not a safe level. The manual is explicit that you can still be convicted below 0.08 where there is evidence of impaired driving, and that impairment begins with the first drink. Under 21 the number drops to 0.02, which is the zero-tolerance rule, and an ignition interlock device locks out a driver above 0.02 as well.",
        trap:
          "Staying under 0.08 is not a defense. Driving under the influence at a lower reading is a separate way of breaking the same statute.",
        excerptKey: "dui-008",
        sourceLabel: "Kentucky Driver Manual - Section Three: Alcohol and the Law",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_09",
        topic: "licensing",
        question:
          "Kentucky permit holders may drive only when accompanied by whom, and sitting where?",
        choices: [
          "Any licensed driver over 18, anywhere in the vehicle",
          "A parent or guardian only, in the front passenger seat",
          "A licensed driver aged 21 or older, in the front passenger seat",
          "A licensed driver aged 25 or older, in any seat",
        ],
        correctIndex: 2,
        explanation:
          "The supervising driver must hold a valid operator's license, be at least 21, and occupy the seat beside you. It does not have to be a relative, but the age and the seat are both fixed.",
        context:
          "This is the restriction the state repeats most often, because it also decides how you get to your road test: a permit holder cannot lawfully drive alone to the test site. Kentucky adds two more permit rules for drivers under 18, a midnight to 6 a.m. curfew unless there is good cause, and a limit of one unrelated passenger under 20.",
        trap:
          "A licensed 19-year-old friend is not enough. Twenty-one is the floor, and the back seat does not count.",
        excerptKey: "permit-supervisor",
        sourceLabel: "Kentucky Driver Manual - Section One: Permit Driving",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s1_10",
        topic: "signals",
        question: "A traffic light turns yellow as you approach the intersection. What does Kentucky require?",
        choices: [
          "Speed up so you clear the intersection before the red",
          "Stop if you can do so safely, because the signal is about to turn red",
          "Continue at your speed, since yellow simply means caution",
          "Stop immediately wherever you are",
        ],
        correctIndex: 1,
        explanation:
          "Yellow is a warning that red is coming, and the manual's instruction is to stop if stopping is safe. Braking hard enough to be rear-ended is not safe, which is why the rule is conditional.",
        context:
          "Kentucky draws a clean line at the stop line. A vehicle that entered the intersection while the signal was still yellow may finish clearing it on red, but entering after the light has turned red is against the law. That is why the decision is made before you reach the intersection, not inside it.",
        trap:
          "Accelerating to beat the red is the exact behavior the rule is written against, and it turns a yellow-light decision into a red-light violation.",
        excerptKey: "yellow-light",
        sourceLabel: "Kentucky Driver Manual - Section Six: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_11",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Kentucky?",
        choices: [
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 20 feet",
          "There is no set distance, only posted signs",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet is the figure, and it comes from the statute rather than the manual. The manual gives no parking distances at all, which is exactly why this one catches people.",
        context:
          "KRS 189.450(5) lists the places you may not stop or park regardless of signs: a sidewalk, a disability ramp, in front of a driveway, within an intersection or on a crosswalk, within 30 feet of the approach to a stop sign, signal or flashing beacon, in a tunnel, on a controlled-access highway, within 15 feet of a hydrant, and in the median of a divided highway.",
        trap:
          "Ten feet is the common guess because several states use it. Kentucky's number is 15, and its stop-sign figure is a separate 30.",
        excerptKey: "parking-hydrant-15",
        sourceLabel: "KRS 189.450(5) - Stopping, standing, parking",
        sourceUrl: krs("46536"),
        commonlyMissed: true,
      },
      {
        id: "ky_s1_12",
        topic: "signs",
        question: "What do orange signs with black letters or symbols mean on a Kentucky road?",
        choices: [
          "A tourist attraction is ahead",
          "You are entering a school zone",
          "A work zone is ahead and people may be working on or near the road",
          "The road ahead is closed to all traffic",
        ],
        correctIndex: 2,
        explanation:
          "Orange is reserved for construction, maintenance and emergency operations. It warns of reduced speed, detours, slow equipment and rough surfaces as well as workers.",
        context:
          "Kentucky's sign colors are a language of their own: yellow warns, fluorescent yellow marks school and pedestrian crossings, orange means a work zone, green, brown and blue guide you, and white with black, red or green letters carries a law you must obey. Speeding fines in a work zone are doubled where the signs say so and a worker is present.",
        trap:
          "Orange does not mean the road is closed. Road-closed signs are their own regulatory message, and orange only tells you work is under way.",
        excerptKey: "workzone-signs",
        sourceLabel: "Kentucky Driver Manual - Section Six: Work Zone Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_13",
        topic: "rules",
        question:
          "How far before a turn does the Kentucky Driver Manual tell you to start signaling?",
        choices: ["50 feet", "100 feet", "200 feet", "Three seconds before, at any speed"],
        correctIndex: 1,
        explanation:
          "One hundred feet is the figure, and KRS 189.380(2) makes it a legal minimum rather than a suggestion: the signal runs continuously for the last 100 feet before you turn.",
        context:
          "The Kentucky State Police answer a related question on their own driver-testing page, because 100 feet is hard to picture. Six or seven cars parked bumper to bumper is roughly 100 feet, so the signal should be on by the time you reach the back of that imaginary line. Bicycles and other non-motor vehicles have a different figure, 50 feet, and may signal by hand.",
        trap:
          "Fifty feet belongs to bicycles. For a motor vehicle Kentucky requires double that, and a signal switched on as you begin the turn is too late.",
        excerptKey: "signal-100-statute",
        sourceLabel: "KRS 189.380(2) - Signals",
        sourceUrl: krs("6382"),
      },
      {
        id: "ky_s1_14",
        topic: "safety",
        question:
          "Where does the Kentucky Driver Manual say your hands belong on the steering wheel?",
        choices: [
          "At 2 and 10 o'clock, one hand on each side",
          "At 3 and 9 o'clock, on the outside of the wheel",
          "At 12 o'clock, with one hand resting on top",
          "Wherever is comfortable, since modern wheels are power-assisted",
        ],
        correctIndex: 1,
        explanation:
          "Kentucky teaches 3 and 9 o'clock, hands on the outside of the rim, thumbs up along the face. The old 2 and 10 position is specifically named as no longer recommended.",
        context:
          "The reason is the airbag. A wheel-mounted bag inflates in about a twentieth of a second, and hands crossed over the center of the wheel are in its path. The manual pairs the grip with the seat position: about 10 inches between your chest and the wheel, the top of the wheel no higher than your shoulders, and a head restraint touching the back of your head rather than your neck.",
        trap:
          "Two and 10 is what most people were taught by an older driver. Kentucky prints the reason it changed.",
        excerptKey: "hands-3-9",
        sourceLabel: "Kentucky Driver Manual - Section Five: Hand Position",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_15",
        topic: "sharing",
        question:
          "An emergency vehicle approaches with lights flashing and siren sounding. What does Kentucky require?",
        choices: [
          "Slow down and stay in your lane until it passes",
          "Stop where you are, even if you are in an intersection",
          "Pull to the right side of the road clear of any intersection, stop, and stay stopped until it passes",
          "Move one lane to the left so it can use the right lane",
        ],
        correctIndex: 2,
        explanation:
          "The manual and KRS 189.930(1) agree: drive immediately to the right edge or curb, keep clear of the intersection, stop, and remain stopped until the emergency vehicle has gone by.",
        context:
          "Kentucky adds a second rule most people never learn: it is unlawful to follow an emergency vehicle closer than 500 feet. A separate move-over duty covers vehicles already stopped at the roadside, where you change to a lane that is not next to them on a four-lane road, or slow down and pass with caution on a two-lane road.",
        trap:
          "Stopping inside an intersection blocks the route the emergency vehicle needs. Clear the intersection first, then pull right and stop.",
        excerptKey: "emergency-pull-right",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_16",
        topic: "rightOfWay",
        question: "You are entering a roundabout in Kentucky. Who has the right of way?",
        choices: [
          "Traffic already circulating in the roundabout",
          "Whichever driver reaches the entry line first",
          "The driver on the right, as at a four-way stop",
          "Traffic entering, because circulating drivers can keep moving",
        ],
        correctIndex: 0,
        explanation:
          "Entering traffic yields to traffic already going around. You slow on the approach, wait for a gap, then enter counterclockwise.",
        context:
          "The manual treats roundabouts and traffic circles as one thing: a circular intersection where vehicles travel counterclockwise around a raised center island. The sequence is slow down, yield to circulating traffic, enter, then signal your intent as you take your exit. A yellow diamond sign with a circular arrow warns you one is coming.",
        trap:
          "The right-hand rule from four-way stops does not apply here. Circulating traffic has the right of way no matter which side it is on.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Roundabouts and Traffic Circles",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_17",
        topic: "emergencies",
        question:
          "Your car begins to skid sideways on a wet Kentucky road. What does the manual tell you to do with the steering wheel?",
        choices: [
          "Hold it straight and brake hard",
          "Turn it in the direction the back of the vehicle is skidding",
          "Turn it away from the direction of the skid",
          "Let go of it so the wheels can straighten themselves",
        ],
        correctIndex: 1,
        explanation:
          "Steering toward the direction the rear is sliding brings the front of the car back in line with the back. The manual calls the steering wheel the most important control you have during a skid.",
        context:
          "The first move in any skid is to release the brake or accelerator and look where you want to go. If the car has anti-lock brakes and is sliding in a straight line, apply steady pressure; without anti-lock brakes, pump gently rather than locking the wheels. Once the car starts to straighten, unwind the steering so it does not snap into a skid the other way.",
        trap:
          "Stomping the brake and overcorrecting is exactly what the manual says turns a recoverable skid into a crash.",
        excerptKey: "skid-sideways",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Dealing with Skids",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_18",
        topic: "licensing",
        question:
          "What score do you need to pass the Kentucky written knowledge test?",
        choices: ["70 percent", "75 percent", "80 percent", "90 percent"],
        correctIndex: 2,
        explanation:
          "Eighty percent is the pass mark stated in the manual's own testing section. It applies to the operator test drawn from that manual.",
        context:
          "The test is booked with the Kentucky State Police, not the Transportation Cabinet office that issues the credential, and it covers driving rules, regulations, procedures and highway signs. Fail it and drive.ky.gov says you may come back the next available day to try again. The manual is the only study source the Kentucky State Police endorse.",
        trap:
          "Seventy-five is the pass mark in several neighboring states. Kentucky sets the bar at 80.",
        excerptKey: "written-pass-mark",
        sourceLabel: "Kentucky Driver Manual - Section One: Written Test",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_19",
        topic: "signals",
        question: "What does a flashing red light at an intersection mean in Kentucky?",
        choices: [
          "Slow down and watch for others",
          "The signal is out of order, so proceed as usual",
          "Come to a full stop and go only when it is clear",
          "Stop and wait for the light to turn green",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red behaves like a stop sign: full stop, then go when the way is clear. There is no green to wait for.",
        context:
          "The pair is easy to keep straight once you see the logic. Flashing yellow means slow down and watch for others, and turns up at intersections, in construction areas and on tow trucks. Flashing red means stop. Two flashing red lights side by side mark a railroad crossing, and there you also have to satisfy yourself no train is coming before moving.",
        trap:
          "Sitting and waiting for green at a flashing red just blocks traffic. The flash is the whole message.",
        excerptKey: "flashing-red",
        sourceLabel: "Kentucky Driver Manual - Section Six: Flashing Lights",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_20",
        topic: "safety",
        question:
          "Kentucky law requires a child restraint system for a child of what height or less?",
        choices: ["40 inches or less", "36 inches or less", "48 inches or less", "57 inches or less"],
        correctIndex: 0,
        explanation:
          "Forty inches is the line for a child safety seat. Between 40 and 57 inches a child under 8 must ride in a booster seat instead.",
        context:
          "Kentucky's child passenger law uses height rather than age for the first step and both for the second. A child taller than 57 inches is not required to use a booster at any age. The manual adds guidance beyond the statute: children 12 and under belong in the back seat, and a rear-facing seat must never sit in front of an active passenger airbag.",
        trap:
          "Fifty-seven inches is the top of the booster range, not the child-seat threshold. Mixing the two numbers is the usual error.",
        excerptKey: "child-restraint-40",
        sourceLabel: "Kentucky Driver Manual - Section Four: Child Passenger Safety Laws",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_21",
        topic: "rules",
        question: "On a Kentucky road with three lanes in one direction, what is the left lane for?",
        choices: [
          "Through traffic at the posted limit",
          "Drivers who want to pass or turn left",
          "Slower traffic and vehicles entering the road",
          "Any driver, since lane use is only a courtesy",
        ],
        correctIndex: 1,
        explanation:
          "With three or more lanes going one way, the middle lanes carry through traffic, the left lane is for passing and left turns, and the right lane serves slower traffic and vehicles entering or turning right.",
        context:
          "Kentucky puts teeth in this on limited-access highways, where the manual states plainly that remaining in the left lane is illegal. On a two-lane-each-way road the right lane generally has the smoothest flow and the left is reserved for passing. The statute adds that you drive as nearly as practical entirely within a single lane and only change once you have made sure it is safe.",
        trap:
          "Cruising in the left lane at the speed limit is not lawful lane use on a Kentucky limited-access highway.",
        excerptKey: "lane-use-three",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Use of Lanes",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_22",
        topic: "sharing",
        question:
          "You are passing a bicycle on a Kentucky road that has one lane in your direction. How much space must you leave?",
        choices: ["At least 1 foot", "At least 2 feet", "At least 3 feet", "At least 5 feet"],
        correctIndex: 2,
        explanation:
          "Three feet is the legal minimum, measured from any part of your vehicle to the bicycle, and you hold that distance until you are safely past.",
        context:
          "Where there is more than one lane in your direction, the rule is different: move into the next lane to the left if it is available and safe. Kentucky also lets you cross the center line to pass a bicycle, even inside a marked no-passing zone, but only when the far side is clear for far enough to do it safely. Bicycles count as vehicles on the roadway and follow the same rules of the road.",
        trap:
          "Squeezing past inside the lane is only allowed where three feet genuinely is not available, and even then the law demands reasonable caution rather than the usual speed.",
        excerptKey: "pass-bike-3-feet",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Passing",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_23",
        topic: "impairment",
        question: "What is the alcohol limit for a Kentucky driver under the age of 21?",
        choices: ["0.08", "0.05", "0.02", "0.00, with no measurable tolerance"],
        correctIndex: 2,
        explanation:
          "Kentucky sets the under-21 threshold at 0.02 and calls it zero alcohol tolerance. It is a quarter of the adult figure.",
        context:
          "The 0.02 number turns up three times in Kentucky's rules and it is worth noticing why. It is the under-21 offense threshold, it is the reading at which an ignition interlock device refuses to let a vehicle start, and it is the point the manual identifies as where alcohol begins to affect vision in every driver regardless of age.",
        trap:
          "\"Zero tolerance\" sounds like 0.00, but Kentucky defines it with a number, and that number is 0.02.",
        excerptKey: "dui-under-002",
        sourceLabel: "Kentucky Driver Manual - Section Three: Alcohol and the Law",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s1_24",
        topic: "signs",
        question: "What information do green, brown or blue signs give a Kentucky driver?",
        choices: [
          "A law you must obey",
          "A hazard on the road ahead",
          "Guidance: intersecting roads, towns, points of interest and services",
          "The boundary of a work zone",
        ],
        correctIndex: 2,
        explanation:
          "Those are guide signs. They point you to intersecting roads, cities and towns, points of interest and services such as hospitals, fuel and food.",
        context:
          "Guide signs are square or rectangular. Regulatory signs, the ones carrying a law, are white with black, red or green lettering, sometimes in a special shape like the octagon or the triangle. A red circle with a slash on a regulatory sign prohibits whatever it covers. Route markers use their own shapes to tell you whether a road is interstate, US, state or local.",
        trap:
          "Green lettering shows up on both guide signs and some regulatory signs. The background color is what tells you which you are looking at.",
        excerptKey: "guide-signs",
        sourceLabel: "Kentucky Driver Manual - Section Six: Guide Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_25",
        topic: "parking",
        question:
          "You park facing downhill on a Kentucky street with a curb. Which way should the front wheels point?",
        choices: [
          "Straight ahead, with the parking brake on",
          "Toward the curb, so the car would roll into it",
          "Away from the curb, so the car would roll into the lane",
          "It does not matter as long as the car is in park",
        ],
        correctIndex: 1,
        explanation:
          "The manual states the principle rather than a table: turn the wheels so the vehicle would touch the curb if it started to move. Facing downhill, that means turning them toward the curb.",
        context:
          "Where there is no curb, the same principle gives the opposite-sounding instruction: point the wheels so a rolling car leaves the road rather than entering the lane. Kentucky pairs this with two things a road-test examiner watches for, setting the parking brake and, by law, switching off the engine and taking the key when you leave the vehicle.",
        trap:
          "The parking brake alone is not the answer here. The wheels are the backup for the moment the brake fails.",
        excerptKey: "parking-hill",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Parking on a Hill",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_26",
        topic: "rightOfWay",
        question:
          "You are pulling out of a private driveway onto a Kentucky public road. Who yields?",
        choices: [
          "Traffic on the road yields to you, because you are already moving",
          "You yield to drivers on the public road",
          "Whoever arrives at the driveway mouth first",
          "Neither, since a driveway is not an intersection",
        ],
        correctIndex: 1,
        explanation:
          "A driver entering a public highway from a driveway or private road yields to everyone already on that highway. The same logic makes a driver on a minor road yield to a main road.",
        context:
          "Kentucky's right-of-way list is really a list of people with a stronger claim than yours: the driver who arrives first, oncoming traffic when you turn left, the driver on your right at a four-way tie, traffic on the highway when you leave a driveway, traffic on the main road, traffic already on an interstate when you are on the ramp, and pedestrians and bicyclists still in the intersection.",
        trap:
          "Being in motion first does not create a right of way. The claim comes from being on the more important road.",
        excerptKey: "row-driveway",
        sourceLabel: "Kentucky Driver Manual - Section Six: Yielding Right of Way",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_27",
        topic: "safety",
        question:
          "Kentucky ties headlights to the clock rather than to darkness. When must they be on?",
        choices: [
          "From sunset to sunrise",
          "From half an hour after sunset to half an hour before sunrise",
          "From an hour after sunset to an hour before sunrise",
          "Only when you cannot see 500 feet ahead",
        ],
        correctIndex: 1,
        explanation:
          "The window runs from a half hour after sunset to a half hour before sunrise. KRS 189.030 adds a second trigger for any time atmospheric conditions cut visibility to that level or worse.",
        context:
          "The manual then goes further than the law and tells you to switch the lights on whenever you have trouble seeing other vehicles, on the reasoning that if you cannot see them they probably cannot see you. Rain, snow and fog all qualify, and so does driving into a rising or setting sun. In heavy weather you use low beams, not high.",
        trap:
          "Waiting for actual darkness leaves you unlit for the half hour that matters most, when headlights are mainly about being seen.",
        excerptKey: "headlights-sunset",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Letting Others Know You Are There",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_28",
        topic: "rules",
        question:
          "You want to change lanes on a Kentucky highway. What does the manual say to do after checking your mirrors?",
        choices: [
          "Signal and move over, since the mirrors show everything behind you",
          "Turn your head and look over your shoulder to check your blind spots",
          "Tap your horn to warn drivers you cannot see",
          "Accelerate first so you clear the other vehicle's blind spot",
        ],
        correctIndex: 1,
        explanation:
          "Mirrors miss the area beside and slightly behind your car, so the manual has you turn your head and look over your shoulder in the direction you plan to move before you signal and go.",
        context:
          "The full sequence is mirrors, blind-spot check, find a gap, signal, look again in the direction of the move, adjust speed and steer across. The manual also warns against sitting in someone else's blind spot: if you cannot see a truck driver's face in the side mirror, that driver cannot see you.",
        trap:
          "Well-adjusted mirrors shrink the blind spot but never delete it. The shoulder check is a separate step, not a substitute.",
        excerptKey: "changing-lanes",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Changing Lanes",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_29",
        topic: "emergencies",
        question:
          "You are involved in a collision in Kentucky. What does the law require of you first?",
        choices: [
          "Move both vehicles off the road before doing anything else",
          "Photograph the damage before anyone moves",
          "Immediately stop, find out how bad the injury or damage is, and give reasonable assistance",
          "Call your insurance company from the scene",
        ],
        correctIndex: 2,
        explanation:
          "Stopping, checking the extent of injury or damage, and rendering reasonable assistance is the statutory duty. Reasonable assistance can include arranging to get an injured person to medical treatment.",
        context:
          "After that come the exchanges and the paperwork. You give your name, address and registration number on request, and you collect the same from everyone involved. Kentucky adds a self-reporting rule: if property damage exceeds $500 and no officer investigates, you file a written report with the Kentucky State Police within 10 days.",
        trap:
          "Moving the vehicles comes second, not first, and only applies to non-injury crashes. On an interstate a non-injury crash must be moved clear once it is safe.",
        excerptKey: "collision-render-aid",
        sourceLabel: "Kentucky Driver Manual - Section Nine: First Aid to Collision Victims",
        sourceUrl: HB,
      },
      {
        id: "ky_s1_30",
        topic: "licensing",
        question:
          "How long must a Kentucky permit holder aged 16 to 20 hold the permit before taking the road test?",
        choices: ["30 days", "90 days", "180 days", "One year"],
        correctIndex: 2,
        explanation:
          "One hundred and eighty days is the holding period for permit holders aged 16 to 20. Applicants who are already 21 or older need only 30 days.",
        context:
          "For drivers under 18 the 180 days is only half the requirement. They also need a Practice Driving Log signed by a parent or guardian showing 60 hours of supervised driving, 10 of them at night. A violation of the permit restrictions, or a moving violation, adds another 180 days to the wait.",
        trap:
          "Thirty days is the adult figure. A 17-year-old who assumes it applies to them is six months short.",
        excerptKey: "permit-hold-180",
        sourceLabel: "Kentucky Driver Manual - Section One: Permit Phase",
        sourceUrl: GDLP,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Signals, markings, turning, passing and the everyday right-of-way calls. These are the rules that decide most of what you do in a normal ten-minute drive across Louisville or Lexington.",
    questions: [
      {
        id: "ky_s2_01",
        topic: "signals",
        question: "What does a flashing yellow arrow mean at a Kentucky intersection?",
        choices: [
          "You have a protected turn and oncoming traffic is stopped",
          "You may proceed with caution in the direction of the arrow",
          "The turn is prohibited until the arrow turns green",
          "Stop, then turn when clear",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow arrow is permission to go in that direction with caution. It is not a protected turn, so you still give way to oncoming traffic and pedestrians.",
        context:
          "Kentucky's arrow vocabulary is short. A green arrow means you may go in that direction if you are in the proper lane, and a green arrow pointing up means straight ahead. A red arrow means no turn in that direction until it goes green. Where a mast holds more than one signal head, you obey the one over your own lane.",
        trap:
          "Oncoming traffic is usually looking at a green light while you have the flashing yellow. Treating it as protected is how left-turn crashes happen.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Kentucky Driver Manual - Section Six: Lighted Arrows",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s2_02",
        topic: "rules",
        question:
          "You are turning left from a Kentucky street that has two lanes going your way. Which lane do you turn from, and which do you turn into?",
        choices: [
          "From the lane nearest the center, into the lane nearest to you",
          "From either lane, into whichever lane is empty",
          "From the right lane, into the far lane of the new street",
          "From the center lane, into the center lane of the new street",
        ],
        correctIndex: 0,
        explanation:
          "You approach in the lane nearest the center line and arrive in the lane nearest to you on the new street. Any further lane change waits until the turn is finished and traffic is clear.",
        context:
          "The mirror-image rule covers right turns: approach and turn as close as practicable to the right-hand curb. The manual is blunt about staying put once committed, telling you to identify the lane you will turn from, stay in it until the turn is complete, and if you miss the turn, carry on to the next intersection rather than correcting late.",
        trap:
          "Swinging across into the far lane is the single most commonly marked fault on Kentucky road tests, and it is the same error on paper.",
        excerptKey: "turn-into-nearest-lane",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Lanes for Turning",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s2_03",
        topic: "signs",
        question:
          "A yellow diamond-shaped sign with black symbols appears at the roadside. What is it telling you?",
        choices: [
          "A law applies from this point forward",
          "There is possible danger ahead, so slow down and be ready to stop",
          "You are approaching a service or point of interest",
          "The road ahead is a work zone",
        ],
        correctIndex: 1,
        explanation:
          "Yellow diamonds are warning signs. They flag a hazard or a special situation ahead and tell you to reduce speed and be prepared to stop if you need to.",
        context:
          "The shape carries as much meaning as the color in Kentucky's system. A diamond warns of an existing or possible hazard, a pentagon marks school signs, a round sign is railroad advance warning, a horizontal rectangle is usually a guide sign, a vertical rectangle is usually regulatory, and the triangle is used only for yield.",
        trap:
          "Some warning signs are fluorescent yellow rather than plain yellow, which does not change the message. Those mark school zones, school crossings and pedestrian crossings.",
        excerptKey: "warning-signs",
        sourceLabel: "Kentucky Driver Manual - Section Six: Traffic Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_04",
        topic: "rightOfWay",
        question:
          "You are making a left turn at a green light in Kentucky. Which vehicles must you yield to?",
        choices: [
          "None, because a green light gives you the intersection",
          "Only vehicles going straight toward you",
          "Oncoming traffic, including vehicles that are turning right",
          "Only vehicles that arrived at the intersection before you",
        ],
        correctIndex: 2,
        explanation:
          "The manual spells out the part people miss: you yield to the opposing traffic lane, and that includes vehicles turning right, not only vehicles going straight.",
        context:
          "A plain green means you may go straight or turn either way if the turn is not prohibited, but a left turn on green is unprotected. Only a green arrow makes the turn protected. Kentucky also warns against reading an oncoming turn signal as a promise, because the driver may be turning past you or may have left the signal on from an earlier turn.",
        trap:
          "An oncoming car signaling right looks like it is clearing out of your way. It may be turning into the street beyond you, and you have already committed.",
        excerptKey: "row-left-turn",
        sourceLabel: "Kentucky Driver Manual - Section Six: Yielding Right of Way",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s2_05",
        topic: "parking",
        question:
          "How close to the approach of a stop sign or traffic signal may you park in Kentucky?",
        choices: [
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 25 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 3,
        explanation:
          "Thirty feet is the figure in KRS 189.450(5)(f), and it covers the approach to a flashing beacon, a stop sign or a traffic control signal placed at the side of the road.",
        context:
          "Kentucky's parking prohibitions are all in one statutory list, and none of them appear in the manual. They cover sidewalks, disability ramps, driveways, intersections and crosswalks, tunnels, controlled-access highways, the median of a divided highway, anywhere signs forbid it, 15 feet of a hydrant and 30 feet of the approach to a stop sign or signal.",
        trap:
          "Fifteen feet is the hydrant number. Using it at a stop sign leaves you half the distance the law requires.",
        excerptKey: "parking-30-feet",
        sourceLabel: "KRS 189.450(5)(f) - Stopping, standing, parking",
        sourceUrl: krs("46536"),
      },
      {
        id: "ky_s2_06",
        topic: "safety",
        question:
          "How far ahead does the Kentucky Driver Manual say you should be looking as you drive?",
        choices: [
          "As far as your headlights reach",
          "About 20 to 30 seconds in front of your vehicle",
          "About 5 seconds in front of your vehicle",
          "To the vehicle immediately ahead of you",
        ],
        correctIndex: 1,
        explanation:
          "Twenty to thirty seconds is the target. Looking that far down your planned path gives you time to change speed or position instead of braking or swerving in an emergency.",
        context:
          "The manual pairs the forward look with searching to the sides and checking behind, and it warns against staring: keep the eyes moving. How far you can actually see depends on where you are, so in a city you may not manage 30 seconds, and the answer is to adjust speed and position until you can see enough for the speed you are traveling.",
        trap:
          "Following the car in front is not searching. If your view is filled by the vehicle ahead, you are already too close to see the problem it is about to react to.",
        excerptKey: "look-ahead-20-30",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Visual Search",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_07",
        topic: "rules",
        question:
          "Kentucky law says a pass must be completed before you come within what distance of an oncoming vehicle?",
        choices: ["100 feet", "200 feet", "300 feet", "500 feet"],
        correctIndex: 1,
        explanation:
          "Two hundred feet. The overtaking vehicle must be back on the right-hand side of the road before it gets that close to anything coming the other way.",
        context:
          "The same paragraph carries a second deadline: the pass must also be finished before you reach the start of a no-passing zone. If you are still in the left lane when the zone begins, you are in violation regardless of how the oncoming lane looks. The manual's advice for judging it is to treat any hill or curve that blocks your view as though an oncoming vehicle is already there.",
        trap:
          "Two hundred feet is about a dozen car lengths and arrives faster than it sounds when both cars are closing at highway speed.",
        excerptKey: "pass-200-feet",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Passing",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_08",
        topic: "signals",
        question:
          "Two flashing red lights mark a crossing ahead. What are they, and what must you do?",
        choices: [
          "A school crossing; slow to the posted school speed",
          "A railroad crossing; stop and go only once the lights stop flashing and no train is coming",
          "A fire station exit; slow down and watch for apparatus",
          "A malfunctioning signal; treat it as a yield",
        ],
        correctIndex: 1,
        explanation:
          "Paired flashing reds are a railroad crossing signal. You stop, and you move only after the lights stop flashing and you have satisfied yourself that no train is approaching.",
        context:
          "Kentucky treats the crossbuck sign at the tracks as a regulatory sign carrying the same meaning as a yield sign, and the round yellow sign with an X and the letters RR as advance warning to slow, look and listen. Crossing after the lights start flashing or the gates come down is a citable offense.",
        trap:
          "The lights going out is not the whole test at a multiple-track crossing. A second train may be coming the other way behind the first.",
        excerptKey: "rr-two-flashing",
        sourceLabel: "Kentucky Driver Manual - Section Six: Flashing Lights",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_09",
        topic: "sharing",
        question:
          "A motorcycle is traveling in the lane ahead of you on a Kentucky road. What does the manual say about lane space?",
        choices: [
          "You may share the lane if you stay to one side",
          "You may share the lane only when passing",
          "The motorcyclist is entitled to the full lane width and you must not share it",
          "Lane sharing is allowed below 35 mph",
        ],
        correctIndex: 2,
        explanation:
          "A motorcyclist gets a full lane. The manual's reasoning is space to maneuver: a rider needs room to react to potholes, gravel, seams and other traffic.",
        context:
          "The manual's own sample knowledge test asks this, and its answer is that motorcycle operators have the right to use a complete traffic lane. It pairs that with a four-second minimum following distance behind a motorcycle, more in the wet, and a warning that motorcycle turn signals often do not cancel themselves, so a flashing signal is not proof of a turn.",
        trap:
          "A motorcycle takes up less road than a car, which makes sharing look harmless. Kentucky treats the lane as the rider's whether or not it is filled.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Motorcyclists",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_10",
        topic: "impairment",
        question:
          "A Kentucky officer asks you to submit to a breath test after a lawful stop. What does implied consent mean?",
        choices: [
          "You may refuse without consequence unless you are arrested",
          "By driving in Kentucky you have already consented to a lawfully requested test",
          "Only a court can order a test, so the officer's request is a formality",
          "Consent applies only in the state where your license was issued",
        ],
        correctIndex: 1,
        explanation:
          "Operating a vehicle in Kentucky is treated as consent given in advance to a test of blood, breath or urine when an officer lawfully asks for one.",
        context:
          "Refusal carries its own weight. It can be used against you in court as evidence of the DUI itself, it can lead to suspension, and on a second or later offense within 10 years it counts as an aggravating circumstance that doubles the mandatory minimum jail time. Implied consent follows the state you are arrested in, not the state that issued your license.",
        trap:
          "Refusing looks like it removes the evidence. In Kentucky the refusal becomes the evidence.",
        excerptKey: "implied-consent",
        sourceLabel: "Kentucky Driver Manual - Section Three: Alcohol and the Law",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s2_11",
        topic: "signs",
        question:
          "A white sign with black lettering shows a number over the word LIMIT. What exactly is that number?",
        choices: [
          "The recommended speed in good weather",
          "The maximum legal speed in ideal conditions",
          "The average speed of traffic on that road",
          "The minimum speed permitted",
        ],
        correctIndex: 1,
        explanation:
          "A speed limit sign gives the maximum legal speed for ideal conditions. Rain, fog, traffic or a rough surface all mean the lawful speed is lower than the number.",
        context:
          "Kentucky states the same idea as law: no one may drive faster than is reasonable and prudent for the traffic and the condition of the road, whatever a sign says. The manual gives a worked example, that in heavy rain, snow or thick fog where you cannot see more than 100 feet you cannot safely drive faster than 25 mph.",
        trap:
          "Doing the posted number in bad weather is not automatically legal. The sign sets a ceiling, not a permission.",
        excerptKey: "speed-limit-signs",
        sourceLabel: "Kentucky Driver Manual - Section Six: Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_12",
        topic: "emergencies",
        question:
          "Your vehicle breaks down on a Kentucky highway and you cannot get it fully off the road. Where should you place emergency flares?",
        choices: [
          "About 50 feet behind the vehicle",
          "Directly beside the vehicle on both sides",
          "About 200 to 300 feet behind the vehicle",
          "About 500 feet ahead of the vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Two hundred to three hundred feet behind gives following drivers time to see the warning and change lanes before they reach you.",
        context:
          "The rest of the breakdown routine is about being visible: pull as far off the road as you can and to the right, avoid stopping just over a hill or around a curve, switch on the emergency flashers and raise the hood so other drivers can see the car is disabled, then call for help.",
        trap:
          "Flares set close to the car warn people who have already run out of room to react.",
        excerptKey: "breakdown-flares",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Vehicle Breakdown & Emergency Signals",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_13",
        topic: "licensing",
        question:
          "You have moved to Kentucky from another state. How long do you have to get a Kentucky driver's license?",
        choices: ["10 days", "30 days", "60 days", "90 days"],
        correctIndex: 1,
        explanation:
          "Thirty days from establishing residence. The licenses are issued at any Kentucky Transportation Cabinet Driver Licensing Regional office.",
        context:
          "Whether you have to retest depends on your old license. A valid out-of-state license, or one expired less than a year, transfers without testing. Expired more than a year and you need a certified driving history or clearance letter from the old state plus both the written and eye exams. Kentucky sets a separate deadline of 15 days for registering a vehicle brought in from another state.",
        trap:
          "Ten days is the deadline for replacing a license after a change of address or name, not for a new resident.",
        excerptKey: "transfer-30-days",
        sourceLabel: "Kentucky Driver Manual - Section One: Transferring From Another State",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_14",
        topic: "rules",
        question:
          "You are joining a Kentucky interstate from an entrance ramp. What does the manual tell you to do?",
        choices: [
          "Stop at the end of the ramp and wait for a gap",
          "Use the acceleration lane to match the speed of traffic, then merge into a gap",
          "Enter at whatever speed you reach and let traffic adjust",
          "Signal and move straight across to the left lane",
        ],
        correctIndex: 1,
        explanation:
          "The acceleration lane exists so you can reach the speed of the traffic you are joining. You find a gap, merge into the flow, then cancel the signal.",
        context:
          "The right of way is not yours here. Kentucky lists traffic already on a limited-access or interstate highway among the drivers you yield to when you are on the entrance or acceleration ramp. Exiting reverses the logic: get into the exit lane early, hold your speed while you are still on the main road, and slow down in the deceleration lane.",
        trap:
          "Stopping at the end of the ramp leaves you trying to join 65 mph traffic from a standstill, which is more dangerous than the gap you were waiting for.",
        excerptKey: "merge-yield",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Entering a Multi-lane Highway",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_15",
        topic: "safety",
        question: "When should you use high beams at night in Kentucky?",
        choices: [
          "In fog, rain or snow, to light up the road",
          "When you are following another vehicle closely",
          "When there are no oncoming vehicles",
          "Any time you are on a road with no streetlights",
        ],
        correctIndex: 2,
        explanation:
          "High beams belong on an empty road, where they let you see about twice as far as low beams. Oncoming traffic, a vehicle you are following, and fog, rain or snow all call for low beams.",
        context:
          "Kentucky sets two distances for dimming: within 500 feet of an oncoming vehicle, and within 300 feet of a vehicle you are following. In fog, rain or snow the high beam reflects off the moisture and makes seeing harder rather than easier. If someone else fails to dim, the manual tells you to look toward the right edge of the road rather than into the glare.",
        trap:
          "Fog feels like the moment for more light. It is the moment for less, because the beam bounces back at you.",
        excerptKey: "high-beams-when",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Night Driving",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s2_16",
        topic: "sharing",
        question:
          "You are behind a large truck on a Kentucky interstate. How can you tell whether the driver can see you?",
        choices: [
          "If you can read the trailer's rear markings",
          "If you can see the driver's face in the truck's side mirror",
          "If the truck's brake lights are visible",
          "If you are more than one car length back",
        ],
        correctIndex: 1,
        explanation:
          "The manual's rule of thumb is the mirror: if you cannot see the driver's face in the truck's side view mirror, that driver cannot see you.",
        context:
          "Kentucky calls a truck's blind spots the no zone, and they sit on the sides, the rear and the front. The rear one runs up to 200 feet behind the trailer. A loaded truck at 55 mph needs at least 335 feet to stop, more than one and a half times what a car needs, so cutting in front of one removes the space it was relying on.",
        trap:
          "Sitting directly behind a trailer feels safe because nothing can hit you from ahead. It also blinds you to everything the truck can see and puts you where the driver cannot.",
        excerptKey: "truck-mirror-rule",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Side No Zones",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_17",
        topic: "parking",
        question:
          "Which of these is prohibited by Kentucky statute regardless of whether a sign says so?",
        choices: [
          "Parking on a residential street after dark",
          "Parking within an intersection or on a crosswalk",
          "Parking facing against the direction of travel",
          "Parking more than 12 inches from the curb",
        ],
        correctIndex: 1,
        explanation:
          "Intersections and crosswalks are on the statutory no-parking list, which applies whether or not anything is posted.",
        context:
          "The same list bans stopping or parking on a sidewalk, in front of a disability ramp, in front of a public or private driveway, in a highway tunnel, on a controlled-access highway, in the median of a divided highway, within 15 feet of a hydrant and within 30 feet of the approach to a stop sign or signal. The only relief is when you have to stop to avoid conflict with traffic or an officer or signal tells you to.",
        trap:
          "The absence of a sign is not permission. These prohibitions are in the statute rather than on posts.",
        excerptKey: "parking-prohibited-statute",
        sourceLabel: "KRS 189.450(5) - Stopping, standing, parking",
        sourceUrl: krs("46536"),
      },
      {
        id: "ky_s2_18",
        topic: "signals",
        question:
          "A police officer is directing traffic at an intersection where the light is green for you. What do you do?",
        choices: [
          "Follow the green light, since signals outrank hand directions",
          "Do what the officer instructs, regardless of the signal",
          "Stop and wait for the officer to leave",
          "Follow whichever is safer in your judgment",
        ],
        correctIndex: 1,
        explanation:
          "An officer directing traffic outranks the signal and the signs. The manual says to do what the officer instructs regardless of the traffic control devices.",
        context:
          "Kentucky groups traffic control devices together: signals, signs, pavement markings, and directions given by law enforcement, highway personnel and school crossing guards. When a person is directing traffic, that person is the device that counts. Work-zone flaggers with a sign or flag carry the same authority.",
        trap:
          "A green light is a permission, not an instruction. Anyone standing in the road directing traffic can withdraw it.",
        excerptKey: "officer-overrides",
        sourceLabel: "Kentucky Driver Manual - Section Six: Traffic Control Devices",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_19",
        topic: "speed",
        question:
          "What is the speed limit in an off-street parking facility open to the public in Kentucky?",
        choices: ["5 mph", "10 mph", "15 mph", "20 mph"],
        correctIndex: 2,
        explanation:
          "Fifteen miles per hour, and it applies whether the parking facility is publicly or privately owned as long as it is offered for public use.",
        context:
          "This is the fourth of Kentucky's unposted defaults, alongside 65 on interstates and parkways, 55 on other state highways and 35 in a business or residential district. It is worth knowing because parking lots are where pedestrians appear from between vehicles and where reversing drivers cannot see behind them.",
        trap:
          "A private shopping-center lot feels like private property with no speed law. If it is offered for public use, the 15 mph limit applies.",
        excerptKey: "speed-15-lot",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Kentucky Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_20",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing at an unmarked crosswalk at a Kentucky intersection. What must you do?",
        choices: [
          "Proceed, since only marked crosswalks create a duty",
          "Sound your horn to warn them",
          "Yield to the pedestrian",
          "Yield only if you are turning",
        ],
        correctIndex: 2,
        explanation:
          "Kentucky's duty covers unmarked crosswalks as well as painted ones. The manual says so explicitly and adds mid-block crossings marked by signs and pavement markings.",
        context:
          "The duty is broader still at intersections: you yield to all pedestrians in the intersection even when your light is green, and you must be ready to yield to pedestrians when you make a right or left turn on red. Not every crosswalk is painted, so where none is apparent you stop before entering the intersection.",
        trap:
          "The absence of white stripes does not remove the crosswalk. An unmarked crosswalk exists at an intersection whether or not anyone painted it.",
        excerptKey: "ped-crosswalk-yield",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Pedestrians",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s2_21",
        topic: "rules",
        question:
          "A center lane is marked on both sides with a solid yellow line outside a broken yellow line. What is it for?",
        choices: [
          "Left turns from either direction, and nothing else",
          "Passing slower traffic in either direction",
          "Through traffic during rush hour",
          "Emergency vehicles only",
        ],
        correctIndex: 0,
        explanation:
          "That is a shared center left turn lane. Drivers from either direction use it to turn left, and it is not for through traffic or for passing.",
        context:
          "Kentucky signs it as well as painting it, with a regulatory sign reading shared center lane left turn only. The manual's wider rule on yellow markings is the same one every state uses: you may not pass where a solid line runs on your side of the broken line, and you may pass where the solid line is on the far side of the broken one.",
        trap:
          "Using the center lane to get past slow traffic, even briefly, is exactly what the sign forbids.",
        excerptKey: "center-turn-lane",
        sourceLabel: "Kentucky Driver Manual - Section Six: Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_22",
        topic: "impairment",
        question:
          "Besides alcohol, what does the Kentucky Driver Manual warn can impair your driving?",
        choices: [
          "Only illegal drugs",
          "Only illegal drugs and prescription painkillers",
          "Prescription drugs, over-the-counter medicines and illegal drugs alike",
          "Nothing else, provided you feel alert",
        ],
        correctIndex: 2,
        explanation:
          "The manual puts prescription medicines, over-the-counter remedies and illegal drugs in the same category as alcohol, because all of them can affect reflexes, judgment, vision and alertness.",
        context:
          "The specific warnings are practical. Cold, allergy and nerve remedies bought without a prescription can make you drowsy; pep pills and diet pills can make you jittery and unable to focus; antidepressants, painkillers, sleep aids and sedatives all carry a driving risk. The manual tells you to read the label and to ask a doctor or pharmacist when you are unsure.",
        trap:
          "A legal prescription is not a defense to impaired driving. Kentucky's DUI statute covers any substance that impairs driving ability.",
        excerptKey: "otc-drugs",
        sourceLabel: "Kentucky Driver Manual - Section Three: Over-the-Counter Drugs",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_23",
        topic: "safety",
        question:
          "Kentucky's seat belt law is described as primary. What does that mean in practice?",
        choices: [
          "An officer can stop you for the belt violation alone",
          "You can only be ticketed for it after being stopped for something else",
          "It applies only to the driver, not to passengers",
          "It applies only on interstates and parkways",
        ],
        correctIndex: 0,
        explanation:
          "A primary law means the belt violation is reason enough for the stop. The manual says drivers can be stopped simply for being observed unbelted.",
        context:
          "The requirement covers the driver and all passengers in any vehicle manufactured after 1981, with children in an approved restraint counting as secured. The manual adds how to wear it: the shoulder belt across the shoulder and chest with almost no slack and never under the arm or behind the back, and the lap belt snug and low across the hips.",
        trap:
          "In several states the belt law is secondary, which is where the idea comes from that you cannot be pulled over for it. Kentucky is not one of them.",
        excerptKey: "seatbelt-primary",
        sourceLabel: "Kentucky Driver Manual - Section Four: Using Safety Belts",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_24",
        topic: "signs",
        question:
          "A round yellow sign with a large X and the letters RR appears beside the road. What does it mean?",
        choices: [
          "You are approaching a rest area",
          "A railroad crossing is ahead, so slow down, look and listen",
          "The road ahead crosses a river",
          "Two roads merge ahead",
        ],
        correctIndex: 1,
        explanation:
          "That round yellow sign is advance warning of a highway-railroad grade crossing. It tells you to slow, look and listen for a train and be ready to stop.",
        context:
          "At the crossing itself you meet the crossbuck, the white X-shaped sign reading Railroad Crossing, and Kentucky treats it as a regulatory sign meaning the same as a yield. Where more than one track crosses, the number of tracks is often posted, though not always, so checking for a second track is on you.",
        trap:
          "Not every crossing has lights or gates. The advance warning sign may be the only notice you get.",
        excerptKey: "rr-advance-warning",
        sourceLabel: "Kentucky Driver Manual - Section Six: Railroad Crossing Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_25",
        topic: "licensing",
        question:
          "How many hours of supervised practice driving must a Kentucky driver under 18 log before applying for an intermediate license?",
        choices: ["30 hours, 5 at night", "50 hours, 10 at night", "60 hours, 10 at night", "60 hours, 20 at night"],
        correctIndex: 2,
        explanation:
          "Sixty hours in total, of which at least ten must be at night, certified on the Practice Driving Log by a parent or legal guardian.",
        context:
          "The log is one of three things a teen brings to the road test, alongside proof of insurance and registration for the test vehicle and the Graduated Driver License Skills Test Eligibility Letter printed within the previous seven days. The supervising driver during those hours must be 21 or older, licensed, and sitting beside the learner.",
        trap:
          "Fifty and ten is the combination several states use. Kentucky's total is sixty.",
        excerptKey: "permit-practice-log",
        sourceLabel: "Kentucky Driver Manual - Section One: Permit Phase",
        sourceUrl: GDLP,
      },
      {
        id: "ky_s2_26",
        topic: "sharing",
        question:
          "An orange and red reflective triangle is mounted on the back of a vehicle ahead of you. What does it tell you?",
        choices: [
          "The vehicle is carrying hazardous materials",
          "The vehicle is disabled and being towed",
          "The vehicle travels at less than 25 mph",
          "The vehicle is part of a funeral procession",
        ],
        correctIndex: 2,
        explanation:
          "The slow-moving vehicle emblem means the vehicle travels at under 25 mph. It turns up on farm equipment, construction equipment and animal-drawn vehicles.",
        context:
          "The emblem is designed to work at both ends of the day: the fluorescent orange center shows up in daylight, the reflective red border at night. Kentucky pairs the emblem with practical warnings, that the driver of farm machinery cannot hear you approaching, and that animal-drawn vehicles and horseback riders have the same right to the road and should never be passed with a horn or a revving engine.",
        trap:
          "Hazardous-materials vehicles carry placards naming what they are carrying. The triangle is about speed, not cargo.",
        excerptKey: "smv-emblem",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Slow-Moving Vehicles",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_27",
        topic: "emergencies",
        question:
          "You hit a parked car in a Kentucky lot and cannot find the owner. What does the manual tell you to do?",
        choices: [
          "Leave, since no one was in the vehicle",
          "Leave a note where it can be seen with your name, address, license number, plate number and the date and time",
          "Report it only if the damage is over $2,000",
          "Wait an hour and then leave if nobody appears",
        ],
        correctIndex: 1,
        explanation:
          "Kentucky requires a visible note carrying your name, your address, your driver license number, your plate number, and the date and time of the collision.",
        context:
          "The statute treats an unattended vehicle exactly like an attended one for the duty to stop. Alongside the note there is a separate reporting duty: property damage over $500 with no officer investigating means a written report to the Kentucky State Police within 10 days, which can be filed through their online civilian collision reporting portal.",
        trap:
          "The absence of a driver is not the absence of a duty. Leaving without a note is leaving the scene.",
        excerptKey: "collision-parked-note",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Collisions",
        sourceUrl: HB,
      },
      {
        id: "ky_s2_28",
        topic: "speed",
        question:
          "When are fines for speeding doubled in a Kentucky highway work zone?",
        choices: [
          "Whenever a work zone is signed, at all hours",
          "When signs say fines are doubled and at least one worker is present",
          "Only between 7 a.m. and 6 p.m.",
          "Only where the speed limit has been lowered",
        ],
        correctIndex: 1,
        explanation:
          "Kentucky attaches two conditions: signs telling drivers the work zone exists and that fines are doubled in it, and at least one bona fide worker present.",
        context:
          "The doubling is a penalty rule, not a speed rule. The speed rule is simpler and has no conditions at all: reduce your speed in a work zone even when no workers are there, because the narrow lanes and rough pavement are hazardous on their own. Separately, you must stay in the lane designated for traffic through the zone and yield to workers in it.",
        trap:
          "An empty work zone at midnight is still a work zone for speed, but the doubled fine needs a worker on site.",
        excerptKey: "workzone-double-conditions",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Work Zones",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s2_29",
        topic: "rules",
        question:
          "Kentucky allows you to overtake on the right in which of these situations?",
        choices: [
          "When the vehicle ahead is making or about to make a left turn",
          "Whenever the left lane is occupied",
          "When the vehicle ahead is under the speed limit",
          "Never, under any circumstance",
        ],
        correctIndex: 0,
        explanation:
          "Passing on the right is permitted when the vehicle you are overtaking is making or about to make a left turn, and on a road wide enough for two or more lines of vehicles going your way.",
        context:
          "Even then the pass must be safe, and you may not do it by driving off the roadway unless the vehicle you are passing has come to a complete stop. The manual's general preference is unchanged: pass on the left, because drivers do not expect to be passed on the right and vehicles there are harder to see.",
        trap:
          "A slow driver in the left lane is annoying but is not one of the two conditions that make a right-hand pass lawful.",
        excerptKey: "pass-right-conditions",
        sourceLabel: "KRS 189.340(3) - Overtaking on the right",
        sourceUrl: krs("55539"),
      },
      {
        id: "ky_s2_30",
        topic: "safety",
        question:
          "The Kentucky Driver Manual gives one figure for braking distance. At 50 mph on dry pavement with good brakes, roughly how far does a car travel while braking?",
        choices: ["About 60 feet", "About 100 feet", "About 158 feet", "About 300 feet"],
        correctIndex: 2,
        explanation:
          "About 158 feet, and that is only the braking part. Perception and reaction distance come before it and lengthen the total considerably.",
        context:
          "Total stopping distance in Kentucky's terms is perception time, plus reaction time, plus braking distance. The manual puts the average alert driver's perception time at three quarters of a second to a second, and reaction time at the same again, so at highway speed you have already covered a good distance before the brakes do anything.",
        trap:
          "The 158 feet is not the stopping distance, only the braking distance. Answering it as the whole stop understates the gap you need.",
        excerptKey: "braking-158",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Stopping Distance",
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
      "Thirty-five questions pitched where the Kentucky State Police written test actually sits, mixing signs and signals with the numbers the manual buries and the ones only the statute prints.",
    questions: [
      {
        id: "ky_s3_01",
        topic: "sharing",
        question:
          "How far behind an emergency vehicle in operation is it lawful to follow in Kentucky?",
        choices: [
          "No closer than 100 feet",
          "No closer than 300 feet",
          "No closer than 500 feet",
          "There is no set distance, only the normal following rule",
        ],
        correctIndex: 2,
        explanation:
          "Five hundred feet, unless you are on official business. The manual states it and KRS 189.930(3) makes it law.",
        context:
          "The same statute stops you parking within the block where an emergency vehicle has stopped in answer to a call, and forbids driving over an unprotected fire hose without the fire officer in command agreeing. The first duty in the section is the familiar one: pull right, clear the intersection, stop and stay stopped until the emergency vehicle has passed.",
        trap:
          "Following an ambulance through traffic feels efficient and is specifically unlawful in Kentucky.",
        excerptKey: "emergency-500",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Emergency Vehicles",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s3_02",
        topic: "signals",
        question:
          "You are on a one-way street facing a red light and want to turn left into another one-way street. What does Kentucky allow?",
        choices: [
          "Nothing, because left on red is never permitted",
          "The turn, after a complete stop, into the nearest lane of the other one-way street",
          "The turn, without stopping, if the way is clear",
          "The turn only where a sign expressly permits it",
        ],
        correctIndex: 1,
        explanation:
          "Kentucky permits a left on red only from a one-way street into a one-way street, and only after a full stop with the roadway clear of vehicles and pedestrians.",
        context:
          "The manual describes the destination precisely: the nearest lane of another one-way street running in the direction of the turn. That is the same lane rule as any other turn, taking you into the closest lane rather than across to a far one. Signs can forbid the movement, and a red arrow removes it entirely.",
        trap:
          "Two one-way streets is the whole condition. Turning left on red from a one-way street into a two-way street is not permitted.",
        excerptKey: "left-on-red",
        sourceLabel: "Kentucky Driver Manual - Section Six: Traffic Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s3_03",
        topic: "licensing",
        question:
          "How many points within two years will put a Kentucky driver aged 18 or over at risk of suspension?",
        choices: ["6 points", "8 points", "12 points", "15 points"],
        correctIndex: 2,
        explanation:
          "Twelve points in a two-year period triggers a hearing on the driver's privileges. For a driver under 18 the figure is seven.",
        context:
          "Points expire two years from the date of conviction, though the conviction itself stays on the record for five. Failing to appear for the hearing means a six-month suspension for a first accumulation, a year for a second and two years after that. The Cabinet may put a driver on probation with State Traffic School instead of suspending.",
        trap:
          "Seven points is the under-18 figure and six is the separate threshold at which a minor's privilege may be suspended. Neither applies to an adult.",
        excerptKey: "points-12",
        sourceLabel: "Kentucky Driver Manual - Section One: The Kentucky Point System",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_04",
        topic: "safety",
        question:
          "You are driving in a heavy Kentucky rainstorm and cannot see more than 100 feet ahead. What is the fastest you can safely drive, according to the manual?",
        choices: ["45 mph", "35 mph", "25 mph", "The posted limit, provided your wipers are on"],
        correctIndex: 2,
        explanation:
          "Twenty-five miles per hour. The manual ties the figure directly to the sight distance: when you cannot see farther than about 100 feet, you cannot safely go faster than 25.",
        context:
          "The same paragraph tells you to use low beam headlights in heavy rain, snow or fog. The principle behind it runs through the whole section: never drive so fast that you cannot stop within the distance you can see, which at night means the distance your headlights reach.",
        trap:
          "The posted limit is set for ideal conditions. Driving it in conditions that hide the road ahead can be careless driving under KRS 189.290 whatever the sign says.",
        excerptKey: "visibility-25mph",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Visibility",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s3_05",
        topic: "sharing",
        question:
          "A blind pedestrian with a white cane is waiting at a Kentucky crosswalk. Besides yielding, what does the manual tell you to do?",
        choices: [
          "Sound your horn so they know you are there",
          "Call out directions to them",
          "Stop no more than five feet back from the crosswalk so they can hear your engine",
          "Stop in the middle of the crosswalk to block other traffic",
        ],
        correctIndex: 2,
        explanation:
          "A blind pedestrian uses the sound of your vehicle to place it, so Kentucky asks you to pull up to within five feet of the crosswalk rather than hanging back, unless there is an advanced stop bar.",
        context:
          "Yielding to a blind pedestrian carrying a visible white cane or working with an assistance dog is a legal duty, and failing to do it can cost up to $250. The rest of the manual's advice is about not interfering: do not honk, do not give verbal directions, do not stop in the crosswalk itself, and do not wait so long that the pedestrian cannot read the situation. Drivers of quiet electric and hybrid vehicles are told to take extra care.",
        trap:
          "Honking seems helpful and is specifically warned against, because the pedestrian has no way to know who the horn is aimed at.",
        excerptKey: "blind-5-feet",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Blind Pedestrian Right-of-Way",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s3_06",
        topic: "rules",
        question:
          "Kentucky requires turn signals to be given by what means in a motor vehicle?",
        choices: [
          "Hand signals or mechanical signals, at the driver's choice",
          "Mechanical signal lamps or devices only",
          "Hand signals whenever the lamps are obscured by sunlight",
          "Whatever the vehicle was built with",
        ],
        correctIndex: 1,
        explanation:
          "For a motor vehicle the signal must come from signal lamps or a mechanical signal device. The manual says it plainly: hand signals cannot be used.",
        context:
          "Hand signals survive for vehicles that are not motor vehicles, chiefly bicycles, which may signal by hand and do so for the last 50 feet before the turn. Kentucky's road test includes a check that your turn signals work, alongside headlights, brake lights, the dimmer switch, the horn, wipers, the emergency brake and the flashers.",
        trap:
          "Being able to give a correct hand signal is useful knowledge and is not a lawful substitute in a car with working lamps.",
        excerptKey: "mechanical-signals",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Signaling Your Movements",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_07",
        topic: "impairment",
        question:
          "Which of these counts as an aggravating circumstance on a Kentucky DUI charge?",
        choices: [
          "Driving more than 30 mph above the posted speed limit",
          "Driving without a passenger present",
          "Driving after 2 a.m.",
          "Driving a vehicle you do not own",
        ],
        correctIndex: 0,
        explanation:
          "Exceeding the posted limit by more than 30 mph is one of the aggravating circumstances that bring mandatory jail time on a Kentucky DUI.",
        context:
          "The list has six entries: more than 30 mph over the limit, wrong-way driving on a limited-access highway, causing a collision with death or serious physical injury, a reading of .15 BAC or higher within two hours of driving, refusing a blood, breath or urine test, and carrying a passenger under 12.",
        trap:
          "The time of night is not on the list, however strongly it is associated with impaired driving.",
        excerptKey: "dui-aggravating-30mph",
        sourceLabel: "Kentucky Driver Manual - Section Three: Aggravating Circumstances",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_08",
        topic: "parking",
        question:
          "Where may you legally stop on the shoulder of a Kentucky interstate?",
        choices: [
          "Anywhere, provided you are fully clear of the traveled lanes",
          "Only in an emergency or at a peace officer's signal, with the whole vehicle clear of the traveled way",
          "Anywhere for up to 15 minutes",
          "Only at marked pull-offs",
        ],
        correctIndex: 1,
        explanation:
          "Parking, stopping or standing on the shoulder of a toll road, interstate or other fully controlled-access highway is prohibited, with an exception for an emergency or an officer's signal, and then only fully clear of the traveled way.",
        context:
          "A disabled vehicle left on such a shoulder for 24 continuous hours may be towed at the owner's cost. Kentucky also expects drivers to take account of vehicles that are stopped there: when you approach one, move over to a lane not next to it if you safely can, and if you cannot, slow down and pass with caution.",
        trap:
          "Pulling onto the shoulder to check a phone or a map is not an emergency, and the shoulder of an interstate is one of the more dangerous places to be stationary.",
        excerptKey: "parking-shoulder-interstate",
        sourceLabel: "KRS 189.450(3) - Stopping, standing, parking",
        sourceUrl: krs("46536"),
      },
      {
        id: "ky_s3_09",
        topic: "signs",
        question:
          "What separates a regulatory sign from a warning sign in Kentucky's system?",
        choices: [
          "Regulatory signs are round; warning signs are square",
          "Regulatory signs are white with black, red or green letters; warning signs are yellow with black",
          "Regulatory signs are always larger",
          "Regulatory signs appear only in cities",
        ],
        correctIndex: 1,
        explanation:
          "Color does the work. Regulatory signs are white with black, red or green lettering and carry a law you must obey; warning signs are yellow with black lettering and flag a hazard ahead.",
        context:
          "Regulatory signs are square, rectangular, or in a special shape reserved for one message, which is why the octagon and the triangle are instantly readable. A red circle with a slash over a symbol on a regulatory sign means the action shown is prohibited. Warning signs are diamond-shaped, and school and pedestrian ones may be fluorescent yellow.",
        trap:
          "Green lettering appears on regulatory signs too, so reading only the letter color misleads. The background is what tells you the category.",
        excerptKey: "regulatory-signs",
        sourceLabel: "Kentucky Driver Manual - Section Six: Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_10",
        topic: "emergencies",
        question:
          "Your vehicle stalls on a railroad crossing in Kentucky and a train is coming. What does the manual tell you to do?",
        choices: [
          "Stay in the car and brace for impact",
          "Try to restart the engine until the last moment",
          "Get out immediately and run away from the track toward the oncoming train",
          "Get out and run away from the track in the direction the train is traveling",
        ],
        correctIndex: 2,
        explanation:
          "You abandon the car at once and run away from the track in the direction the train is coming from, which keeps you clear of the debris the collision throws forward.",
        context:
          "Once you are at a safe distance, call the number posted on or near the crossbuck, or call 911, and tell the dispatcher a vehicle is stalled on the crossing. Do not go back to try the engine until a dispatcher tells you it is safe. The reason for the urgency is arithmetic: a freight train at 55 mph may need a mile or more to stop.",
        trap:
          "Running the way the train is heading puts you exactly where the wreckage goes. Running toward it, off to the side, gets you out of that cone.",
        excerptKey: "rr-stalled",
        sourceLabel: "Kentucky Driver Manual - Section Six: Railroad Crossings",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s3_11",
        topic: "licensing",
        question:
          "Under Kentucky law, what is the minimum age to take the written knowledge and vision tests for an instruction permit?",
        choices: ["14", "15", "16", "17"],
        correctIndex: 1,
        explanation:
          "KRS 186.450(1) sets the floor at 15, and the graduated licensing FAQ on drive.ky.gov says the same. The printed manual still says 16 because it predates the change.",
        context:
          "The graduated program applies to anyone whose original permit is issued between 15 and 17. From there the path is fixed: hold the permit at least 180 days with a signed log of 60 practice hours including 10 at night, pass the road test at 16 or older for an intermediate license, hold that 180 days and complete an approved driver education course, then take the full unrestricted license at 17 or older.",
        trap:
          "The manual you study from prints 16. Where the book and the statute disagree, the statute is the law, and Kentucky's own licensing site follows it.",
        excerptKey: "permit-age-statute",
        sourceLabel: "KRS 186.450(1) - Instruction permits",
        sourceUrl: krs("55912"),
        commonlyMissed: true,
      },
      {
        id: "ky_s3_12",
        topic: "safety",
        question:
          "Your vehicle has anti-lock brakes and you need to stop hard on a Kentucky road. What does the manual tell you to do with the pedal?",
        choices: [
          "Pump it rapidly",
          "Press it as hard as you can and keep the pressure on",
          "Press it firmly, then release as soon as you feel it vibrate",
          "Press it lightly and use the parking brake as well",
        ],
        correctIndex: 1,
        explanation:
          "With anti-lock brakes you press hard and keep pressing. The vibration and the clicking noise are the system working, not a fault, and it only functions while you maintain the pressure.",
        context:
          "The pay-off is that you keep steering control while braking, which is why the manual lists braking, steering and accelerating as the three ways to avoid a crash. Without anti-lock brakes the technique reverses: pumping gently, because hard braking locks the wheels and turns a stop into a skid.",
        trap:
          "Pumping is the pre-anti-lock technique. Using it on a car with anti-lock brakes stops the system doing its job.",
        excerptKey: "abs-press-hard",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Braking",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_13",
        topic: "rightOfWay",
        question:
          "You reach a narrow single-lane bridge on a Kentucky rural road at the same time as a vehicle coming the other way. What does the manual say?",
        choices: [
          "The heavier vehicle goes first",
          "The vehicle traveling uphill goes first",
          "Take turns, and generally the first driver to the bridge has the right of way",
          "The vehicle on the right-hand side of the valley goes first",
        ],
        correctIndex: 2,
        explanation:
          "The manual's guidance is to take turns, with the first driver to reach the bridge generally having the right of way. Warning signs identify narrow and single-lane bridges in advance.",
        context:
          "Rural roads get their own section in Kentucky's manual because the hazards are different: reduced traction on gravel and dirt, narrow lanes with ditches instead of shoulders, steel bridge gratings that cut grip, blind corners created by crops and wooded slopes, and intersections with no stop or yield sign at all.",
        trap:
          "There is no size or gradient rule here. Order of arrival is the tie-breaker, exactly as at an intersection.",
        excerptKey: "narrow-bridge",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Rural Road Driving",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_14",
        topic: "sharing",
        question:
          "Who may lawfully operate an electric low-speed scooter on a Kentucky highway, bicycle lane or bicycle path?",
        choices: [
          "Anyone, at any age",
          "Anyone 12 or older",
          "Anyone 14 or older",
          "Anyone 16 or older",
        ],
        correctIndex: 3,
        explanation:
          "Sixteen is the minimum age. Below that the scooter may not be operated on a highway, bicycle lane or bicycle path.",
        context:
          "Kentucky defines an electric low-speed scooter as a device under 100 pounds with wheels, handlebars and a brake, designed for a top speed of 20 mph on level pavement. It follows the same traffic rules as a bicycle, must show a headlamp and a rear red light from half an hour after sunset to half an hour before sunrise, and may be parked on a sidewalk as long as it does not block anyone.",
        trap:
          "Rental scooters have no age gate at the handlebar, which makes the legal minimum easy to miss.",
        excerptKey: "scooter-16",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Electric Low-Speed Scooter",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_15",
        topic: "signals",
        question:
          "You entered an intersection on a yellow light and the light turns red while you are still in it. What does Kentucky say?",
        choices: [
          "You must stop where you are and wait for green",
          "You may clear the intersection, because you entered while it was yellow",
          "You have committed a red-light violation",
          "You must reverse out of the intersection if it is safe",
        ],
        correctIndex: 1,
        explanation:
          "A vehicle that entered on yellow may finish clearing the intersection on red. What is unlawful is entering the intersection after the light has already turned red.",
        context:
          "The manual applies the same logic to turns and lane changes: if you have started through an intersection when the light changes, keep going, and if you have begun a turn, finish it. Last-second changes of mind are what cause collisions. The decision point is the stop line, not the middle of the junction.",
        trap:
          "Stopping dead in the intersection to obey the red is more dangerous than clearing it, and is not what the rule asks for.",
        excerptKey: "yellow-clear",
        sourceLabel: "Kentucky Driver Manual - Section Six: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_16",
        topic: "rules",
        question:
          "Kentucky's texting ban applies to a driver in which of these situations?",
        choices: [
          "Only drivers under 18",
          "Only drivers on interstates and parkways",
          "Any driver whose vehicle is in motion on the traveled portion of a roadway",
          "Any driver, including one stopped at a red light",
        ],
        correctIndex: 2,
        explanation:
          "The ban on writing, sending or reading text-based communication covers every driver whose vehicle is in motion on the traveled portion of a roadway.",
        context:
          "The statute carves out navigation systems, entering a phone number or name to place a call, emergency and public safety drivers on duty, and texting to report illegal activity, summon medical help or police, or prevent injury. Drivers under 18 face a far broader rule: no use of a personal communication device at all while in motion, except to summon help in an emergency.",
        trap:
          "The exemption for entering a phone number does not stretch to reading a message. The words in the statute are write, send or read.",
        excerptKey: "texting-ban-statute",
        sourceLabel: "KRS 189.292(2) - Personal communication device",
        sourceUrl: krs("39750"),
      },
      {
        id: "ky_s3_17",
        topic: "speed",
        question:
          "The Kentucky Transportation Cabinet secretary may raise the limit on certain interstates and parkways to what maximum?",
        choices: ["70 mph", "75 mph", "80 mph", "The secretary cannot raise limits"],
        correctIndex: 0,
        explanation:
          "Seventy miles per hour, on named segments and only by official order. It is the ceiling in both the manual and KRS 189.390(4).",
        context:
          "The statute lists the segments eligible for 70, including the full lengths of Interstates 24, 69 and 165 and several of the parkways, along with stretches of I-64, I-65, I-71 and I-75. Every other state highway stays at the 65 or 55 default unless a posted limit says otherwise, and in a work zone the Cabinet may lower an established limit temporarily.",
        trap:
          "Neighboring states post 75 and 80 on rural interstates. Kentucky's statutory ceiling is 70.",
        excerptKey: "speed-70",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Kentucky Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_18",
        topic: "parking",
        question:
          "What does Kentucky law require of you when you leave your parked vehicle?",
        choices: [
          "Turn off the engine and remove the key",
          "Leave the key in the ignition in case the vehicle must be moved",
          "Set the parking brake but leave the engine running in cold weather",
          "Nothing, provided the doors are locked",
        ],
        correctIndex: 0,
        explanation:
          "The manual states it as a legal requirement: switch the engine off and take the key with you. It repeats the instruction twice in the parking section.",
        context:
          "The advice attached to it is to lock the vehicle even for a short absence, and to set the parking brake and shift into park, or into reverse in a manual car. On a hill the wheels also get turned so the car would meet the curb, or leave the road if there is no curb.",
        trap:
          "Leaving the engine running to keep the heater going is exactly the case the rule is aimed at.",
        excerptKey: "parking-key",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Parallel Parking",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_19",
        topic: "safety",
        question:
          "How does the Kentucky Driver Manual tell you to check whether your tires are worn out?",
        choices: [
          "Look for cracks in the sidewall",
          "Put a penny head-first into the deepest groove and see whether Lincoln's whole head shows",
          "Measure the tread with a ruler at the edge of the tire",
          "Check the date code on the sidewall",
        ],
        correctIndex: 1,
        explanation:
          "The penny test: hold the coin with Lincoln's body between your fingers, put his head into the deepest groove, and if you can see all of his head the tire is worn out.",
        context:
          "The manual pairs it with a monthly pressure check using a gauge against the figure on the door jamb sticker, taken when the tires are cold. Its reasoning is simple: crashes caused by tire condition are preventable, and under-inflated, over-inflated or bald tires all cost you grip in exactly the conditions where you need it.",
        trap:
          "Sidewall cracks and date codes matter for age, not depth. The penny is the depth check the manual actually teaches.",
        excerptKey: "tire-penny",
        sourceLabel: "Kentucky Driver Manual - Section Four: Check Tread Depth with a Penny",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_20",
        topic: "impairment",
        question:
          "A first DUI conviction within a ten-year period in Kentucky carries what license suspension?",
        choices: ["30 to 60 days", "Four to six months", "One year", "Two years"],
        correctIndex: 1,
        explanation:
          "Four to six months for a first offense within ten years, alongside a fine of $200 to $500 plus court costs and 48 hours to 30 days in the county jail.",
        context:
          "The suspension may be longer for a driver under 18, and second and later convictions within the same ten-year window are treated far more harshly. A driver may become eligible immediately for an ignition interlock license, which allows driving during the suspension and credits toward any later interlock requirement from the same arrest.",
        trap:
          "The 30 to 120 day figure belongs to a first drug-related driving conviction, which is a separate offense with its own penalties.",
        excerptKey: "dui-first-penalty",
        sourceLabel: "Kentucky Driver Manual - Section Three: Alcohol and the Law",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_21",
        topic: "signs",
        question:
          "In Kentucky's system of standard shapes, what is the pentagon reserved for?",
        choices: [
          "Yield signs",
          "Railroad advance warning",
          "School signs",
          "Guide signs",
        ],
        correctIndex: 2,
        explanation:
          "The five-sided pentagon is used for school signs. Kentucky's shape table assigns each shape one job so the sign is readable before you can make out the words.",
        context:
          "The rest of the table: the equilateral triangle is used only for yield, the round sign for railroad advance warning, the diamond for existing or possible hazards, the horizontal rectangle generally for guide signs and the vertical rectangle generally for regulatory signs.",
        trap:
          "School zone warning signs are often fluorescent yellow-green, which is about visibility rather than category. The pentagon shape is the identifier.",
        excerptKey: "fluorescent-yellow",
        sourceLabel: "Kentucky Driver Manual - Section Six: Standard Shapes",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_22",
        topic: "emergencies",
        question:
          "A front tire blows out at speed on a Kentucky highway. What is the first thing to do?",
        choices: [
          "Brake hard to shed speed quickly",
          "Grip the wheel firmly and keep the vehicle going straight",
          "Steer for the shoulder immediately",
          "Switch off the engine",
        ],
        correctIndex: 1,
        explanation:
          "Hold the wheel firmly and keep the car straight. A front blowout drags the vehicle sharply toward the failed tire, and the steering input comes before anything else.",
        context:
          "The sequence after that is gradual: off the accelerator, let the car slow itself, brake gently only if you have to, and do not stop on the road if you can avoid it. Once you are off the road, put the flashers on. A rear blowout feels different, a wobble and shake with a pull toward the flat side.",
        trap:
          "Braking hard during a blowout adds a second unbalanced force to a car that is already being pulled sideways.",
        excerptKey: "blowout-front",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Tire Blowout",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_23",
        topic: "rightOfWay",
        question:
          "A funeral procession led by an escort vehicle with flashing lights is crossing ahead of you in Kentucky. What may you do?",
        choices: [
          "Drive between the vehicles once a gap appears",
          "Wait, because the procession has the right of way at the intersection",
          "Pass the procession on the left at any time",
          "Turn on your headlights and join the line to get through",
        ],
        correctIndex: 1,
        explanation:
          "A procession led by an escort vehicle displaying flashing yellow, red or blue lights has the right of way through the intersection, and you may not drive between its vehicles.",
        context:
          "The exceptions are narrow: an emergency vehicle needing the right of way, a police or safety officer directing the procession otherwise, and a train. Passing the procession is allowed only when an officer directs it or the procession is outside city limits or on an interstate or state parkway. Switching on your headlights to look like part of the escort is specifically forbidden, and the penalty can be a $250 fine or 90 days in jail.",
        trap:
          "A gap between two cars in a procession is not an invitation. Kentucky treats the procession as a single unit.",
        excerptKey: "funeral-no-cut",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Funeral Processions",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_24",
        topic: "licensing",
        question:
          "What are the minimum liability insurance limits a Kentucky vehicle owner must carry?",
        choices: [
          "$15,000 per person, $30,000 per accident, $10,000 property damage",
          "$25,000 per person, $50,000 per accident, $25,000 property damage",
          "$50,000 per person, $100,000 per accident, $50,000 property damage",
          "$100,000 single limit",
        ],
        correctIndex: 1,
        explanation:
          "Twenty-five thousand for bodily injury to one person, fifty thousand for all bodily injury from one accident, and twenty-five thousand for property damage. A single limit policy of $60,000 is accepted instead.",
        context:
          "Failing to keep insurance on a registered vehicle is a criminal offense in Kentucky, and the registration is revoked. Owner and driver alike face a fine of $500 to $1,000, up to 90 days in jail, or both. Written proof has to be carried in the vehicle, either a paper card or one shown on a phone.",
        trap:
          "The middle number covers everyone hurt in one crash, not a second person. Reading it as a per-person figure understates the cover badly.",
        excerptKey: "insurance-minimums",
        sourceLabel: "Kentucky Driver Manual - Section Two: Insurance Law",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_25",
        topic: "rules",
        question:
          "You are approaching a hill on a two-lane Kentucky road and cannot see over the crest. What does the manual say about passing?",
        choices: [
          "Pass only if no oncoming vehicle is visible",
          "Pass only if the center line is broken",
          "Assume an oncoming vehicle is just out of sight and do not start the pass",
          "Pass, but sound your horn as you go over the crest",
        ],
        correctIndex: 2,
        explanation:
          "The manual's rule is to treat a blind curve or crest as though an oncoming vehicle is already there, and not to begin a pass approaching either.",
        context:
          "The same section lists other places passing is dangerous whatever the markings allow: crossroads, congested areas, business and shopping districts, school zones, parks, playgrounds and pedestrian crossings. In each case the vehicle you are passing is also blocking your view of the people you would need to see.",
        trap:
          "A broken center line means passing is permitted, not that it is safe. The markings cannot see over the hill either.",
        excerptKey: "pass-hill-curve",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Passing",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s3_26",
        topic: "sharing",
        question:
          "A truck ahead of you signals right but swings wide to the left before turning. What should you do?",
        choices: [
          "Move up on its right, since the lane is open",
          "Stay back and do not turn until the truck has completed its turn",
          "Pass on the left while it is turning",
          "Sound your horn to tell the driver they are in the wrong lane",
        ],
        correctIndex: 1,
        explanation:
          "Large vehicles swing wide to clear a curb or corner, and the space they open on the right is not a lane. Staying back until the turn is finished is the manual's instruction.",
        context:
          "Kentucky's warning is specific about what happens otherwise: a car that slips between the truck and the curb gets squeezed as the trailer comes around. The same section covers judging a truck's speed before turning left across its path, staying to the left of your lane when stopped behind one on an upgrade, and avoiding the right lane near weigh stations.",
        trap:
          "The right turn signal plus the leftward swing looks like a mistake. It is standard technique for a vehicle that long.",
        excerptKey: "truck-wide-right",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Turning",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_27",
        topic: "safety",
        question:
          "How much extra following distance does the Kentucky manual recommend when driving at night?",
        choices: [
          "None, provided your headlights are working",
          "At least one additional second, and at least two on unfamiliar roads",
          "Double the daytime distance in all cases",
          "At least five additional seconds",
        ],
        correctIndex: 1,
        explanation:
          "Add at least one second for night driving, and at least two when the road is unfamiliar as well as dark. That sits on top of the four-second daytime minimum.",
        context:
          "Night halves the information you have. The manual's other night rules follow from that: high beams only when nothing is coming, dim within 500 feet of oncoming traffic and 300 feet of a vehicle you are following, look toward the right edge of the road when someone dazzles you, search ahead of your headlight beams for dark shapes, and never wear tinted lenses after dark.",
        trap:
          "Following distance is measured in time rather than car lengths, so the extra second stretches automatically as your speed rises.",
        excerptKey: "night-following-extra",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Night Driving",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_28",
        topic: "signals",
        question:
          "Where a mast arm carries several signal heads over a Kentucky intersection, which one applies to you?",
        choices: [
          "The one furthest to the left",
          "The one over your own lane",
          "The one nearest the center of the road",
          "Any of them, since they always show the same thing",
        ],
        correctIndex: 1,
        explanation:
          "The signal over your lane is the one that governs you. Different lanes often get different indications, especially where a left-turn arrow runs separately.",
        context:
          "This matters most at intersections with dedicated turn phases, where a green arrow over the turn lane and a red ball over the through lanes exist at the same moment. Reading the wrong head is how drivers enter on a red they never looked at.",
        trap:
          "Assuming all the heads agree is safe until the intersection has a protected turn phase, which is exactly where the mistake is expensive.",
        excerptKey: "obey-signal-over-lane",
        sourceLabel: "Kentucky Driver Manual - Section Six: Lighted Arrows",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_29",
        topic: "speed",
        question:
          "You are on a street lined with houses in a Kentucky town and no speed limit is posted. What is the limit?",
        choices: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctIndex: 2,
        explanation:
          "Thirty-five miles per hour is Kentucky's default in a business or residential district, from both the manual and KRS 189.390(3).",
        context:
          "The statute defines the districts rather than leaving them to feel. A residential district is territory along a highway where property for 300 feet or more is improved with residences, or residences and business buildings. A business district needs buildings in business or industrial use occupying 300 feet of frontage within any 600 feet of highway.",
        trap:
          "Twenty-five is the residential default in many states and is the usual wrong answer here. Kentucky prints 35.",
        excerptKey: "speed-35",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Kentucky Speed Limits",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s3_30",
        topic: "parking",
        question:
          "Who may use a space marked with the international symbol of access in Kentucky?",
        choices: [
          "Any driver, for up to 15 minutes",
          "Only a vehicle displaying an official permit and carrying a person with a disability",
          "Any vehicle displaying a permit, whether or not the permit holder is aboard",
          "Any driver picking up a passenger",
        ],
        correctIndex: 1,
        explanation:
          "Both halves are required: the official permit or plate on display, and a disabled person actually being transported. Parking there without both is unlawful and fined.",
        context:
          "Permits and special plates are obtained through the County Clerk's office. Kentucky's wider parking rule sits behind this one: you are responsible for making sure a parked vehicle is not a hazard, which means parking in a designated area and, along a roadway, as far from the flow of traffic as you can get.",
        trap:
          "Borrowing a relative's placard to run an errand fails the second half of the test even though the placard is genuine.",
        excerptKey: "accessible-parking",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Handicapped Parking",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_31",
        topic: "rules",
        question:
          "Another driver is overtaking you on a Kentucky highway. What does the law require of you?",
        choices: [
          "Speed up so the pass is over sooner",
          "Move onto the shoulder to let them by",
          "Give way to the right in favor of the overtaking vehicle",
          "Hold your lane and your speed, with no other duty",
        ],
        correctIndex: 2,
        explanation:
          "Kentucky puts a duty on the driver being passed: give way to the right in favor of the overtaking vehicle. Passing is treated as something both drivers cooperate on.",
        context:
          "The manual's practical version is to stay in your lane and, if someone behind wants past, ease off the accelerator to open a gap in front of you so they have somewhere to go. Speeding up while being passed leaves the overtaking car stranded in the oncoming lane.",
        trap:
          "\"Stay in your lane\" is right as far as it goes, but Kentucky adds an active duty to give way rather than simply not interfere.",
        excerptKey: "being-passed",
        sourceLabel: "Kentucky Driver Manual - Section Seven: When being passed",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_32",
        topic: "licensing",
        question:
          "A Kentucky permit holder under 18 may carry how many unrelated passengers under the age of 20?",
        choices: ["None", "One", "Two", "Three"],
        correctIndex: 1,
        explanation:
          "One. The limit counts unrelated passengers under 20, so siblings do not count against it and an adult passenger does not either.",
        context:
          "The same limit carries over to the intermediate license while the driver is under 18, and both stages share a midnight to 6 a.m. curfew unless there is good cause such as an emergency, school or work. Breaking a permit restriction adds at least another 180 days before the driver can move up a stage.",
        trap:
          "The rule is not \"no passengers\". It is one unrelated passenger under 20, which is a different and easier thing to comply with and a different thing to answer.",
        excerptKey: "permit-passenger",
        sourceLabel: "Kentucky Driver Manual - Section One: Permit Driving",
        sourceUrl: GDLP,
        commonlyMissed: true,
      },
      {
        id: "ky_s3_33",
        topic: "impairment",
        question:
          "The Kentucky manual says alcohol affects one sense before any other. Which is it, and at what level?",
        choices: [
          "Hearing, at 0.05 BAC",
          "Vision, at 0.02 BAC",
          "Balance, at 0.08 BAC",
          "Touch, at 0.10 BAC",
        ],
        correctIndex: 1,
        explanation:
          "Vision, and the manual puts the figure at 0.02 for all drivers. It also calls vision the most important sense you use in driving.",
        context:
          "The list of what alcohol takes away is longer: judgment, the ability to focus and judge distance and speed, color distinction, and reaction time. The 0.02 figure is worth remembering because it is also the under-21 offense threshold and the reading at which an ignition interlock refuses to start a vehicle.",
        trap:
          "The 0.08 answer attaches the effect to the offense threshold. The manual puts the first measurable loss four times lower.",
        excerptKey: "alcohol-vision-002",
        sourceLabel: "Kentucky Driver Manual - Section Three: Effects of Alcohol",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_34",
        topic: "emergencies",
        question:
          "You are involved in a Kentucky crash with $700 of property damage and no officer investigates. What must you do?",
        choices: [
          "Nothing, since no one was injured",
          "Notify your insurer only",
          "File a written report with the Kentucky State Police within 10 days",
          "File a report with the county clerk within 30 days",
        ],
        correctIndex: 2,
        explanation:
          "Property damage over $500 with no police investigation triggers a self-report to the Kentucky State Police within 10 days of the collision.",
        context:
          "Kentucky provides an online civilian collision reporting portal for exactly this, and paper copies go to KSP headquarters in Frankfort. The one thing not to do is file the civilian report when an officer already investigated the crash, because that duplicates the official record.",
        trap:
          "The threshold is low. Seven hundred dollars is a bumper, and it is already over the line.",
        excerptKey: "collision-report-500",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Collisions",
        sourceUrl: HB,
      },
      {
        id: "ky_s3_35",
        topic: "signs",
        question:
          "What does the color red mean on Kentucky's standard color chart for traffic signs and markings?",
        choices: [
          "General warning",
          "Movement permitted",
          "Stop or forbidden",
          "Directional guidance",
        ],
        correctIndex: 2,
        explanation:
          "Red means stop or forbidden. It is the color reserved for the strongest instructions on the road.",
        context:
          "The chart is short and worth memorizing whole: red means stop or forbidden, green indicates movement permitted and directional guidance, and yellow is a general warning. Those three carry most of the meaning on a Kentucky roadside before you read a single word.",
        trap:
          "Green appears on both permission markings and guide signs, which is why the chart lists both jobs under one color.",
        excerptKey: "color-red",
        sourceLabel: "Kentucky Driver Manual - Section Six: Standard Colors",
        sourceUrl: HB,
      },
    ],
  },
];
