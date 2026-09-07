import type { DrivingTestSet } from "../types";

// Every fact below was checked against the New Mexico Driver Manual, version
// 11.19.19, published by the Motor Vehicle Division of the Taxation and Revenue
// Department, and against Chapter 66 NMSA 1978 on NMOneSource.com, the
// Compilation Commission's official statute site.
//
// New Mexico's manual is unusually thin - forty printed pages, and pages 35 to
// 39 of those are about riding a motorcycle. That shaped this bank in three
// ways:
//
// 1. Where the manual states a number, the number here is the manual's, because
//    the exam is written from the manual. Where the manual is silent on a rule
//    a New Mexico driver is still bound by, the statute supplies it and the
//    question says so. The move-over rule, the ten feet you stop short of a
//    school bus, the statewide texting ban and the age at which an unrestricted
//    license becomes available are all statute-only.
// 2. Where the two CONFLICT, no question asks for the disputed figure. The
//    manual says do not park within 25 feet of a crosswalk at an intersection
//    and Section 66-7-351 says twenty; the manual's child-restraint paragraph
//    predates the 2005 rewrite of Section 66-7-369; the manual's ninety-day
//    clean-record rule for a provisional applicant was replaced in 2011. Each
//    conflict is written up in docs/driving/research/newmexico.md.
// 3. The manual illustrates its warning signs with pictures and captions rather
//    than descriptions, so the sign questions here test the shape-and-color
//    families the manual DOES describe in words - warning, work area,
//    regulatory, destination, service, route - plus the four signs it gives its
//    own paragraph: stop, yield, do not enter and the slow-moving-vehicle
//    triangle.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the MVD's
// own authoritative wording.
const HB = "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf";
/** Printed page number to a PDF page anchor - the book's page 1 is PDF page 4. */
const hb = (page: number) => `${HB}#page=${page + 3}`;
const ST = "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do";
/** Chapter 66 is served as one PDF; the anchor is that PDF's own page. */
const st = (page: number) => `${ST}#page=${page}`;

export const newmexicoSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "New Mexico Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in New Mexico: what the shapes and colors mean, who goes first, and the handful of numbers the MVD expects you to know cold before it hands you an instructional permit.",
    questions: [
      {
        id: "nm_s1_01",
        topic: "signs",
        question:
          "A red eight-sided sign faces you at an intersection in New Mexico. What does the driver manual require?",
        choices: [
          "Slow down and yield only if another vehicle is close",
          "Stop only where a white stop line is painted on the road",
          "Come to a full stop, then wait until crossing vehicles and pedestrians have cleared",
          "Stop only between the hours a school is in session",
        ],
        correctIndex: 2,
        explanation:
          "The octagon means stop and nothing else. New Mexico asks for a full stop, and then for you to wait until both crossing vehicles and people on foot are clear before you pull forward.",
        context:
          "The manual teaches signs by shape and color first, because a shape stays readable in glare or at a distance. Eight sides means stop, a downward triangle means yield, a yellow diamond warns of something ahead, and a square with a white line inside a red ball means do not enter.",
        trap: "The stop line changes where you stop, not whether you stop. With no line painted, you still stop before the crosswalk.",
        excerptKey: "stop-sign",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Stop Sign",
        sourceUrl: hb(7),
      },
      {
        id: "nm_s1_02",
        topic: "signals",
        question: "You arrive at a steady red traffic light and you are going straight. What must you do?",
        choices: [
          "Stop, and wait until the light turns green and there is no crossing traffic",
          "Stop, then go as soon as the cross street looks empty",
          "Slow to a crawl and proceed if nothing is coming",
          "Stop only if a vehicle is already waiting at the line",
        ],
        correctIndex: 0,
        explanation:
          "A steady red means stop and stay stopped. The manual adds a second condition for moving off: the light has to turn green AND the crossing traffic has to be clear.",
        context:
          "New Mexico spells out four red states. A steady red means stop. A red arrow means you may not go in the direction of the arrow. A flashing red means the same as a stop sign. And some steady reds carry a small bright blinking light in the middle, which is there only to make the red harder to miss.",
        trap: "An empty cross street is not a green light. Only the signal releases you from a steady red, apart from a permitted turn.",
        excerptKey: "red-steady",
        sourceLabel: "New Mexico Driver Manual - Traffic Signals",
        sourceUrl: hb(4),
      },
      {
        id: "nm_s1_03",
        topic: "signals",
        question: "A traffic signal ahead is flashing red. What does it mean?",
        choices: [
          "The signal has failed, so treat it as a green light",
          "Slow down and proceed with caution",
          "Stop and wait for it to change to green",
          "Treat it exactly as you would a stop sign",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is a stop sign in light form. You come to a full stop, then proceed when it is safe. It is not going to turn green.",
        context:
          "The two flashing colors are worth learning as a pair. Flashing red means the same as a stop sign. Flashing yellow means slow down and proceed with caution. The difference between them is whether you are required to stop at all.",
        trap: "Sitting and waiting for green at a flashing red leaves you there indefinitely. The signal is doing exactly what it was set to do.",
        excerptKey: "flashing-red",
        sourceLabel: "New Mexico Driver Manual - Traffic Signals",
        sourceUrl: hb(4),
        commonlyMissed: true,
      },
      {
        id: "nm_s1_04",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection at the same moment. There is no stop sign, no yield sign and no signal. Who must yield?",
        choices: [
          "The driver on the right yields to the driver on the left",
          "The driver on the left yields to the vehicle coming from the right",
          "The driver going straight yields to the driver turning",
          "Whoever arrived from the smaller street yields",
        ],
        correctIndex: 1,
        explanation:
          "With nothing controlling the intersection, New Mexico hands it to the vehicle on your right. You yield to the car approaching from that side.",
        context:
          "The manual splits this into two rules people mix up. At an intersection with no sign or signal, you yield to vehicles coming from the right. At a four-way stop it is order of arrival that decides, and the right-hand rule only breaks a tie.",
        trap: "Street size is not the test at an uncontrolled intersection. The rule is about which side the other car is on.",
        excerptKey: "row-uncontrolled",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "nm_s1_05",
        topic: "speed",
        question:
          "What maximum speed does the New Mexico Driver Manual give for a properly posted school zone?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 0,
        explanation:
          "Fifteen miles per hour is the figure in the manual's speed table, and Section 66-7-301 sets the same number in law for passing a school while children are going to or leaving school.",
        context:
          "The manual's maximum table has four lines: 15 in a posted school zone, 30 in business or residential areas, 55 on public highways and 75 on rural interstates, each one qualified by 'unless posted otherwise'.",
        trap: "Twenty-five is the school-zone number in a lot of neighboring states. New Mexico is at 15.",
        excerptKey: "speed-school-zone",
        sourceLabel: "New Mexico Driver Manual - Speed Limits",
        sourceUrl: hb(12),
      },
      {
        id: "nm_s1_06",
        topic: "licensing",
        question: "What is the minimum age for a New Mexico instructional permit?",
        choices: ["14", "14 and 6 months", "15", "16"],
        correctIndex: 2,
        explanation:
          "Fifteen is the age. You also pass the knowledge test and the vision test, and if you are under 18 a parent or guardian signs a consent form.",
        context:
          "New Mexico runs a three-stage graduated system for anyone under 18: instructional permit, then provisional license, then unrestricted driver license. The permit is stage one and it starts at 15.",
        trap: "Sixteen is roughly when an unrestricted license becomes reachable, not when testing starts.",
        excerptKey: "permit-age-tests",
        sourceLabel: "New Mexico Driver Manual - Instructional Permit",
        sourceUrl: hb(1),
      },
      {
        id: "nm_s1_07",
        topic: "safety",
        question: "What following-distance rule does the New Mexico Driver Manual teach?",
        choices: [
          "One car length for every 10 mph of speed",
          "The three-second rule, which works at any speed",
          "A fixed two seconds",
          "A fixed 100 feet behind the vehicle ahead",
        ],
        correctIndex: 1,
        explanation:
          "New Mexico teaches three seconds, and says plainly that it works at any speed. You start counting when the rear of the vehicle ahead passes a fixed point and see whether you reach it before you finish.",
        context:
          "The counting words the manual gives you are one-thousand-one, one-thousand-two, one-thousand-three. If you pass the mark before you finish counting, you drop back and check again at another point until the gap holds.",
        trap: "Two seconds is the baseline several other states print. New Mexico starts at three, and stretches to four in six named situations.",
        excerptKey: "three-second-rule",
        sourceLabel: "New Mexico Driver Manual - Sharing Space, Space Ahead",
        sourceUrl: hb(23),
        commonlyMissed: true,
      },
      {
        id: "nm_s1_08",
        topic: "signs",
        question: "What shape and color is a yield sign in New Mexico?",
        choices: [
          "A yellow diamond with black letters",
          "An orange rectangle with black letters",
          "A white square with a red circle",
          "A downward pointing triangle, red and white with red letters",
        ],
        correctIndex: 3,
        explanation:
          "The yield sign is a triangle standing on its point, colored red and white with red lettering. It tells you to slow down and give way to traffic in the intersection or on the roadway you are entering.",
        context:
          "Yield is not stop. You slow, you look, and you give way. The manual pairs it with the stop sign because the pair covers most uncontrolled entries onto a larger road, and because a crossbuck at a railroad crossing has the same meaning as a yield sign.",
        trap: "A yield does not require a full stop by itself, but it does require you to be able to stop. If the traffic you owe the right of way to is there, stopping is what yielding means.",
        excerptKey: "yield-sign",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Yield Sign",
        sourceUrl: hb(7),
      },
      {
        id: "nm_s1_09",
        topic: "impairment",
        question:
          "At what blood alcohol content can an adult driver be arrested for driving while intoxicated in New Mexico?",
        choices: ["0.10%", "0.05%", "0.02%", "0.08% or more"],
        correctIndex: 3,
        explanation:
          "The manual and Section 66-8-102 agree: 0.08 percent or more in the blood or breath. Under 21 the figure drops to 0.02 percent.",
        context:
          "BAC is measured by breath, blood or urine. New Mexico also has an aggravated tier at 0.16 percent or more, and refusing the test is itself grounds for a one-year revocation whether or not you were over the limit.",
        trap: "0.10 percent is a historic figure from other decades. Every state is now at 0.08.",
        excerptKey: "bac-limits",
        sourceLabel: "New Mexico Driver Manual - Alcohol and The Law",
        sourceUrl: hb(29),
      },
      {
        id: "nm_s1_10",
        topic: "rules",
        question: "When may you back a vehicle in a travel lane in New Mexico?",
        choices: [
          "Whenever the lane behind you is clear",
          "Only as part of parallel parking",
          "Whenever you have missed your exit",
          "Only if your reversing lights are working",
        ],
        correctIndex: 1,
        explanation:
          "Parallel parking is the single exception. The manual calls backing in any other travel lane both illegal and unsafe, because the drivers behind you are not expecting a vehicle coming at them.",
        context:
          "The rule is paired with what to do instead. Miss your turn or your exit and you keep going until you can turn around somewhere safe, rather than reversing to reach it.",
        trap: "A clear lane behind you is exactly the situation this rule exists for. The driver who arrives thirty seconds later has no reason to expect you.",
        excerptKey: "no-backing",
        sourceLabel: "New Mexico Driver Manual - General Rules",
        sourceUrl: hb(10),
      },
      {
        id: "nm_s1_11",
        topic: "parking",
        question: "How close to a fire hydrant does the New Mexico Driver Manual let you park?",
        choices: [
          "No closer than 15 feet",
          "No closer than 10 feet",
          "No closer than 25 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen feet is the distance in the manual's no-parking list, and Section 66-7-351 sets the same fifteen feet in law.",
        context:
          "The no-parking list also covers 30 feet from a traffic signal or stop sign, 50 feet from a railroad crossing, 20 feet from a fire station driveway on your side of the street, and no more than 18 inches out from the curb.",
        trap: "Ten feet is the school-bus stopping distance in the statute, not a parking distance.",
        excerptKey: "no-park-hydrant",
        sourceLabel: "New Mexico Driver Manual - Parking, No-Parking Zones",
        sourceUrl: hb(13),
      },
      {
        id: "nm_s1_12",
        topic: "sharing",
        question:
          "A school bus ahead of you stops on an undivided road and switches on its flashing red lights. You are coming the other way. What must you do?",
        choices: [
          "Slow to 15 mph and pass with care",
          "Keep going, since opposing traffic is not affected",
          "Stop, and stay stopped until the red lights stop flashing",
          "Stop only if you can see children in the road",
        ],
        correctIndex: 2,
        explanation:
          "New Mexico requires the stop from either direction on an undivided road. The manual is explicit that it applies whether the bus is on your side, the opposite side, or at an intersection you are approaching.",
        context:
          "The escape is narrow: you are not required to stop when the bus is coming towards you and the roadway is separated by a median or other physical barrier. Once the red lights go off you still watch for children and wait until they have completely left the roadway.",
        trap: "Not being able to see any children is not the test. The lights control the traffic, and children appear from behind the bus.",
        excerptKey: "school-bus-stop",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(12),
        commonlyMissed: true,
      },
      {
        id: "nm_s1_13",
        topic: "signals",
        question: "A steady yellow light comes on as you approach an intersection. What does the manual say?",
        choices: [
          "Speed up to clear the intersection before the red",
          "Stop if it is safe to do so, because the light is about to turn red",
          "Treat it as a caution and proceed at the same speed",
          "Stop in every case, without exception",
        ],
        correctIndex: 1,
        explanation:
          "A steady yellow is a warning that red is coming. The manual's instruction is to stop if it is safe, which leaves room for the case where stopping would put you in more danger than continuing.",
        context:
          "There is a second half to the rule. If you are already inside the intersection when the yellow appears, you do not stop - you continue through. Stopping inside the box is what blocks the cross street.",
        trap: "Treating yellow as a signal to accelerate is exactly what the rule is written against, and it is what produces the crash at the top of the next green.",
        excerptKey: "yellow-steady",
        sourceLabel: "New Mexico Driver Manual - Traffic Signals",
        sourceUrl: hb(4),
      },
      {
        id: "nm_s1_14",
        topic: "signs",
        question: "A yellow diamond-shaped sign with a black symbol on it is telling you what?",
        choices: [
          "A rule you are legally required to obey",
          "The direction to a town or a national park",
          "That a service such as fuel or a rest area is ahead",
          "That a special situation or a hazard is ahead",
        ],
        correctIndex: 3,
        explanation:
          "Yellow diamonds are warning signs. They tell you to slow down and be ready to stop because something ahead needs handling - a curve, a crossing, a change in the road.",
        context:
          "The color families do the work here. Yellow diamond warns. Orange warns about people working on or near the road. White and red regulatory signs carry rules. Green or brown signs give destinations, and blue signs point to services.",
        trap: "A warning sign is not a speed limit and not a rule you can be cited for ignoring on its own. It is information about what is coming.",
        excerptKey: "warning-signs",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Warning Signs",
        sourceUrl: hb(4),
      },
      {
        id: "nm_s1_15",
        topic: "rightOfWay",
        question:
          "You are at a green light waiting to turn left. An oncoming car is coming straight through. Who has the right of way?",
        choices: [
          "You do, because you arrived at the intersection first",
          "You do, because a green light permits the turn",
          "The oncoming vehicle going straight ahead",
          "Neither - the first driver to signal takes it",
        ],
        correctIndex: 2,
        explanation:
          "Drivers turning left must yield to oncoming vehicles going straight ahead. A steady green permits the turn but grants nothing: you may turn only when it is safe.",
        context:
          "The manual states the principle behind all of this in one line - the law says who must yield, it does not give anyone the right of way. You are expected to do everything you can to avoid striking another vehicle or a pedestrian regardless of who was in the wrong.",
        trap: "Arriving first is not a right-of-way rule at a signalized intersection. It only breaks ties at a four-way stop.",
        excerptKey: "row-left-turn",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "nm_s1_16",
        topic: "speed",
        question:
          "There is no speed limit sign on a street through a New Mexico business district. What limit applies?",
        choices: ["30 mph", "35 mph", "45 mph", "25 mph"],
        correctIndex: 0,
        explanation:
          "Thirty miles per hour applies in business or residential areas unless a sign says otherwise. The manual's speed table and Section 66-7-301 both give that figure.",
        context:
          "An unposted street is not an unlimited one. New Mexico sets defaults in law for the cases where nobody has put up a sign, and 30 in a business or residence district is the one you meet most often in town.",
        trap: "Twenty-five is the residential default in many other states, which is why it looks right. New Mexico's figure is 30.",
        excerptKey: "speed-business",
        sourceLabel: "New Mexico Driver Manual - Speed Limits",
        sourceUrl: hb(12),
      },
      {
        id: "nm_s1_17",
        topic: "rules",
        question:
          "You are on a New Mexico road with two lanes running in your direction and no signs controlling lane use. Which lane should you be in?",
        choices: [
          "The right lane, except when you are passing",
          "The left lane, so that entering traffic has room",
          "Either lane, as long as you keep up with traffic",
          "The left lane, because the right lane is for exits",
        ],
        correctIndex: 0,
        explanation:
          "With no signs or markings controlling lane use, you stay right and use the left lane to pass. The manual says the left-most lane on a multi-lane road is intended for passing slower vehicles.",
        context:
          "There is a variation for wider roads. Where three or more lanes run your way and there is a lot of traffic entering and exiting, the manual sends you to the center travel lane, out of the merge and exit churn.",
        trap: "Passing on the right is not simply an alternative. The manual warns that the other driver may not see you and may change lanes into you.",
        excerptKey: "keep-right-except-pass",
        sourceLabel: "New Mexico Driver Manual - General Rules",
        sourceUrl: hb(10),
      },
      {
        id: "nm_s1_18",
        topic: "safety",
        question: "What does the New Mexico Driver Manual say about safety belts?",
        choices: [
          "They are required only on highways outside towns",
          "They are recommended but not required for adults",
          "They are required only for the driver and the front passenger",
          "It is illegal to drive without wearing safety belts in New Mexico",
        ],
        correctIndex: 3,
        explanation:
          "The manual puts it flatly: in the State of New Mexico it is illegal to drive without wearing safety belts. Section 66-7-372 requires each occupant of a vehicle to be belted whenever it is moving on a street or highway.",
        context:
          "The statute reaches every seat, not just the front two, and it applies to vehicles of ten thousand pounds or less that were built with belts. The exceptions are narrow: a written medical statement from a physician, and rural letter carriers while on their route.",
        trap: "The front-seat-only version of this rule was New Mexico law until 2001. The 2001 amendment struck 'front seat' out of the statute.",
        excerptKey: "belt-illegal",
        sourceLabel: "New Mexico Driver Manual - Safety Belts and Child Restraints",
        sourceUrl: hb(3),
      },
      {
        id: "nm_s1_19",
        topic: "signs",
        question: "What do orange signs with black letters or symbols mean?",
        choices: [
          "A scenic route or a historical marker",
          "People are working on or near the roadway",
          "A school zone is in effect",
          "The road ahead is closed to through traffic",
        ],
        correctIndex: 1,
        explanation:
          "Orange is the work area color. Those signs warn that construction, maintenance or emergency crews are on or near the road, and they cover reduced speeds, detours, slow equipment and poor road surfaces.",
        context:
          "Work areas also come with people directing traffic. The manual says that where traffic is controlled by a person with a sign or a flag, you must obey them - the same weight it gives to obeying a police officer or a school crossing guard.",
        trap: "Orange is not the school color. School zone and school crossing signs are in the yellow warning family.",
        excerptKey: "work-area-signs",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Work Area Signs",
        sourceUrl: hb(6),
      },
      {
        id: "nm_s1_20",
        topic: "licensing",
        question:
          "A New Mexico provisional license holder wants to drive at 1:00 a.m. with no adult in the car and no qualifying reason. Is that allowed?",
        choices: [
          "Yes, provisional holders have no time restriction",
          "Yes, as long as they carry the license",
          "No - a provisional licensee may not drive between midnight and 5:00 a.m.",
          "No, but only between 2:00 a.m. and 5:00 a.m.",
        ],
        correctIndex: 2,
        explanation:
          "The provisional curfew runs from midnight to 5:00 a.m. Driving in those hours needs either a licensed driver 21 or older in the car or one of the listed necessities, documented in writing.",
        context:
          "The written exceptions are family necessity, medical necessity, driving to and from work, driving to and from school or a religious activity, and a genuine medical emergency. Each of the first four needs a signed statement from the parent, guardian, employer or official.",
        trap: "Carrying the license is a separate requirement and does not lift the curfew.",
        excerptKey: "prov-no-midnight",
        sourceLabel: "New Mexico Driver Manual - Provisional License",
        sourceUrl: hb(2),
      },
      {
        id: "nm_s1_21",
        topic: "signals",
        question: "What does New Mexico allow at a steady red light when you want to turn right?",
        choices: [
          "Turn without stopping if the way is clear",
          "Wait for a green arrow before turning",
          "Come to a full stop, check that it is safe, then turn unless a sign prohibits it",
          "Turn only where a sign expressly permits it",
        ],
        correctIndex: 2,
        explanation:
          "Right on red is the New Mexico default rather than a special permission. Two conditions ride with it: the stop has to be a real full stop, and a sign prohibiting the turn overrides the default.",
        context:
          "The manual states the rule twice, once under traffic signals and again in the scanning chapter, where it also notes that you may turn left from a one-way street into another one-way street unless it is prohibited. Both turns still owe the crosswalk everything.",
        trap: "'Clear enough to go' is not the standard. If you never actually stopped, the turn is unlawful on an empty street at three in the morning.",
        excerptKey: "right-on-red",
        sourceLabel: "New Mexico Driver Manual - Traffic Signals",
        sourceUrl: hb(4),
        commonlyMissed: true,
      },
      {
        id: "nm_s1_22",
        topic: "parking",
        question: "A curb in New Mexico is painted red. What does that mean?",
        choices: [
          "Loading zone only",
          "A fire zone, with no parking or standing permitted",
          "Short stops are permitted",
          "Parking for people with a handicap plate or placard",
        ],
        correctIndex: 1,
        explanation:
          "Red curb is a fire zone, and neither parking nor standing is permitted. You may not wait there with the engine running for someone to come out.",
        context:
          "The four curb colors are worth memorizing as a set: white means only short stops are permitted, yellow means a loading zone or some other restriction, red means a fire zone with no parking or standing, and blue means handicap parking only.",
        trap: "Standing is not parking. Red bars both, so staying in the car does not make it legal.",
        excerptKey: "curb-colors",
        sourceLabel: "New Mexico Driver Manual - Parking",
        sourceUrl: hb(14),
      },
      {
        id: "nm_s1_23",
        topic: "sharing",
        question: "A reflective orange triangle is fixed to the back of the vehicle ahead of you. What does it mean?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle is disabled and about to stop",
          "The driver holds a learner permit",
          "The vehicle is traveling at less than 25 mph",
        ],
        correctIndex: 3,
        explanation:
          "The orange triangle is the slow-moving vehicle emblem, and it means the vehicle is traveling at less than 25 mph. You see it on construction equipment, farm vehicles and horse-drawn wagons.",
        context:
          "The manual repeats the 25 mph figure in its slow-moving traffic section, naming farm tractors, animal-drawn vehicles and roadway maintenance vehicles as the ones that usually go 25 mph or less. Spot them early and you have time to change lanes rather than brake hard.",
        trap: "Hazardous loads carry rectangular placards with numbers, not a plain orange triangle.",
        excerptKey: "slow-moving-vehicle",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Slow Moving Vehicle",
        sourceUrl: hb(7),
      },
      {
        id: "nm_s1_24",
        topic: "impairment",
        question: "A 19-year-old is stopped in New Mexico. At what BAC can they be arrested?",
        choices: ["0.02%", "0.04%", "0.05%", "0.08%"],
        correctIndex: 0,
        explanation:
          "New Mexico's under-21 figure is 0.02 percent. The manual states it directly, and Section 66-8-111 uses the same number as grounds for revoking a driver under 21.",
        context:
          "Three numbers do different jobs in New Mexico. Adults are arrested at 0.08 percent. Commercial drivers are at 0.04 percent. Anyone under 21 is at 0.02 percent, which is about what one drink produces.",
        trap: "The 0.08 figure is for adults only. Being under the adult limit is no defense for a driver under 21.",
        excerptKey: "bac-limits",
        sourceLabel: "New Mexico Driver Manual - Alcohol and The Law",
        sourceUrl: hb(29),
      },
      {
        id: "nm_s1_25",
        topic: "rightOfWay",
        question: "You are approaching a traffic circle in New Mexico. Who has the right of way?",
        choices: [
          "You do, if you signal before entering",
          "Whoever is traveling faster",
          "You do, because entering traffic is given priority",
          "Drivers already in the circle",
        ],
        correctIndex: 3,
        explanation:
          "Drivers entering a traffic circle or rotary must yield to drivers already in the circle. You wait for a gap rather than forcing your way in.",
        context:
          "New Mexico also calls these rotary traffic islands, and the manual adds one more instruction: when you drive around a traffic circle you drive on the right side of the island, which is what keeps everyone going the same way.",
        trap: "Signaling tells other drivers what you intend. It does not create a right of way you did not have.",
        excerptKey: "row-traffic-circle",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "nm_s1_26",
        topic: "speed",
        question: "What maximum speed does the manual give for rural interstate highways in New Mexico?",
        choices: ["75 mph", "65 mph", "70 mph", "80 mph"],
        correctIndex: 0,
        explanation:
          "Seventy-five is the top line of the manual's table, and Section 66-7-301 sets seventy-five miles per hour as the general statutory maximum, unless posted otherwise.",
        context:
          "New Mexico's four maximums are 15 in a posted school zone, 30 in business or residential areas, 55 on public highways and 75 on rural interstates. Each is a ceiling, not a target - the manual says the maximum should be driven only in ideal conditions.",
        trap: "Reaching the posted maximum in rain, snow or fog is a speeding offense in itself. The statute requires speed to be controlled so as to avoid colliding with anything on or entering the highway.",
        excerptKey: "speed-interstate",
        sourceLabel: "New Mexico Driver Manual - Speed Limits",
        sourceUrl: hb(12),
      },
      {
        id: "nm_s1_27",
        topic: "rules",
        question: "How far ahead of a turn does New Mexico require you to signal?",
        choices: [
          "50 feet",
          "Three seconds before the turn",
          "At least 100 feet",
          "As soon as you decide to turn, at any distance",
        ],
        correctIndex: 2,
        explanation:
          "One hundred feet is the figure. The manual says signal at least 100 feet before you make your turn, and Section 66-7-325 requires the signal to be given continuously during not less than the last one hundred feet traveled before turning.",
        context:
          "There is a case where you deliberately signal later. If another vehicle is about to enter the street between you and where you plan to turn, you wait until you have passed it, because an early signal can make that driver pull out into your path.",
        trap: "Signaling as you begin the turn is too late to be a signal at all. It has to run for the last hundred feet.",
        excerptKey: "signal-100-feet",
        sourceLabel: "New Mexico Driver Manual - Letting Others Know What You Are Doing",
        sourceUrl: hb(19),
      },
      {
        id: "nm_s1_28",
        topic: "signs",
        question:
          "You reach a white X-shaped sign reading Railroad Crossing at the tracks. What does that sign mean?",
        choices: [
          "Stop before crossing in every case",
          "It has the same meaning as a yield sign",
          "The crossing is closed",
          "Trains are not currently running on this line",
        ],
        correctIndex: 1,
        explanation:
          "The crossbuck has the same meaning as a yield sign, and what you owe the right of way to is the train. You slow, look both ways along the track, and cross only when it is clear.",
        context:
          "The advance warning is different from the crossing sign. A round yellow sign with an X and black RR letters sits back along the road before the crossing; the white crossbuck is at the crossing itself. Where flashing lights are added, you must stop when they are flashing.",
        trap: "A crossbuck by itself does not require a stop. Flashing lights, a lowered gate, or a bell or horn still sounding do.",
        excerptKey: "rr-crossbuck",
        sourceLabel: "New Mexico Driver Manual - Railroad Crossing Warning Signs",
        sourceUrl: hb(5),
      },
      {
        id: "nm_s1_29",
        topic: "safety",
        question: "It starts raining hard enough that you turn on your wipers. What does the manual tell you to do?",
        choices: [
          "Switch on your parking lights so you are visible",
          "Turn on your headlights",
          "Switch on your emergency flashers until the rain eases",
          "Use your high beams, because they cut through rain better",
        ],
        correctIndex: 1,
        explanation:
          "The manual ties the two together in one sentence: if you turn on your wipers, turn on your headlights. In rain, snow or fog your vehicle is hard for others to see, and headlights fix that.",
        context:
          "Which beam matters too. In fog, heavy snow or heavy rain the manual sends you to low beams, because light from high beams reflects back off the weather and makes it harder to see ahead.",
        trap: "Parking lights are for parked vehicles only. The manual says not to drive at any time with only your parking lights on.",
        excerptKey: "wipers-headlights",
        sourceLabel: "New Mexico Driver Manual - Letting Others Know You Are There",
        sourceUrl: hb(18),
      },
      {
        id: "nm_s1_30",
        topic: "rules",
        question:
          "Your car develops a problem while you are driving in a travel lane. What does the manual tell you to do?",
        choices: [
          "Stop where you are and switch on the flashers",
          "Stop and put out flares behind the vehicle before moving it",
          "Keep moving until you can safely pull off the road",
          "Stop in the lane only if the shoulder is unpaved",
        ],
        correctIndex: 2,
        explanation:
          "You keep moving until you can get off the road. The manual says not to stop in travel lanes for any reason, and it lists confusion, a breakdown and letting out a passenger as the reasons people do it anyway.",
        context:
          "Once you are off the road, the sequence is flashers on, warning devices out behind the vehicle if you have them, and stay out of the traffic lanes. The manual is blunt about the last part - never stand in the roadway, and do not change a tire if it means being in a lane.",
        trap: "Flashers make a stopped car easier to see. They do not make a travel lane a safe place to be stopped.",
        excerptKey: "no-stopping-travel-lane",
        sourceLabel: "New Mexico Driver Manual - General Rules",
        sourceUrl: hb(10),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Lane markings, lights, right of way and the everyday decisions between them. This is the middle of the New Mexico Driver Manual, where most of the exam's questions come from.",
    questions: [
      {
        id: "nm_s2_01",
        topic: "signals",
        question:
          "What does a dashed yellow line between lanes of traffic moving in opposite directions mean?",
        choices: [
          "You may cross it to pass if it is safe to do so",
          "Neither direction may pass",
          "It marks the edge of the road",
          "It separates lanes moving the same way",
        ],
        correctIndex: 0,
        explanation:
          "Yellow separates opposing directions, and a dashed yellow line is the permission to cross for a pass, subject to it being safe. A solid line on your side removes that permission.",
        context:
          "The manual sets out the full yellow family. Dashed means you may pass. Solid and dashed together means you may pass only if the dashed line is on your side. Two solid lines mean neither side can pass. You may still cross a solid yellow to turn into a driveway.",
        trap: "Signs can override the markings. Some passing zones are signed, and where a sign says no passing, the line underneath does not authorise it.",
        excerptKey: "yellow-lines",
        sourceLabel: "New Mexico Driver Manual - Pavement Markings",
        sourceUrl: hb(8),
      },
      {
        id: "nm_s2_02",
        topic: "rules",
        question:
          "A center lane is marked on each side by a solid yellow line and a dashed yellow line, with left-turn arrows painted in it pointing both ways. What may you use it for?",
        choices: [
          "Passing slower traffic",
          "Getting up to speed before merging",
          "Making left turns, and U-turns where they are permitted",
          "Parking briefly while you wait for a passenger",
        ],
        correctIndex: 2,
        explanation:
          "That is a shared center lane. It is reserved for making left turns, and for U-turns where those are permitted, and it is used by traffic travelling in both directions.",
        context:
          "The markings tell you what it is: solid yellow on the outside, dashed yellow on the inside, and left-turn arrows for one direction alternating with arrows for the other. In some areas the same lane becomes a reversible lane during rush hour, so check the overhead signals before you enter.",
        trap: "It is not an acceleration lane and it is not a passing lane. The manual's instruction is to be sure you can enter the lane before you do, and then only if it is safe.",
        excerptKey: "shared-center-lane",
        sourceLabel: "New Mexico Driver Manual - Other Lane Controls, Shared Center Lane",
        sourceUrl: hb(9),
      },
      {
        id: "nm_s2_03",
        topic: "rightOfWay",
        question:
          "Three cars arrive at a four-way stop, one after another. Who goes first in New Mexico?",
        choices: [
          "The driver furthest to the right of the group",
          "The driver going straight rather than turning",
          "The driver in the largest vehicle",
          "The driver who reached the intersection first, after coming to a complete stop",
        ],
        correctIndex: 3,
        explanation:
          "Order of arrival decides at a four-way stop, and the stop has to be a complete one. Only when two vehicles arrive at the same moment does the vehicle on the right go first.",
        context:
          "This is the rule people mix up with the uncontrolled-intersection rule. With no sign or signal at all, the vehicle on the right always has it. With stop signs on every corner, arrival order comes first and the right-hand rule is only the tiebreaker.",
        trap: "Going straight does not outrank turning at a four-way stop. Nothing in the New Mexico rule mentions direction of travel.",
        excerptKey: "row-four-way-stop",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "nm_s2_04",
        topic: "safety",
        question:
          "The road is wet with rain. By how much does the New Mexico Driver Manual say you should reduce your speed?",
        choices: [
          "By a third",
          "By half",
          "By about 10 mph",
          "By 20 mph",
        ],
        correctIndex: 2,
        explanation:
          "About 10 mph on a wet road. The manual gives three separate figures for three surfaces and they are not the same reduction.",
        context:
          "Wet road, reduce about 10 mph. Packed snow, cut your speed in half. Ice, slow to a crawl - and the manual says if at all possible do not drive when the roads are icy.",
        trap: "Halving your speed is the packed-snow instruction. Applying it to wet pavement is the wrong figure for the wrong surface.",
        excerptKey: "slippery-numbers",
        sourceLabel: "New Mexico Driver Manual - Adjusting to Road Conditions, Slippery roads",
        sourceUrl: hb(20),
      },
      {
        id: "nm_s2_05",
        topic: "sharing",
        question: "How much room does the New Mexico Driver Manual ask drivers to give when passing a bicyclist?",
        choices: [
          "At least three feet",
          "At least five feet",
          "One full lane width in every case",
          "Whatever the lane leaves over",
        ],
        correctIndex: 1,
        explanation:
          "The manual asks drivers to keep a safe distance and to try for at least five feet, and to pass only when it is safe and legal to do so.",
        context:
          "New Mexico opens its bicycle section by saying bicycle drivers on roads have the same rights and responsibilities as drivers of cars. It then tells motorists to give riders extra time and space to merge and use turn lanes, and to treat a bicycle as a legal, slow-moving vehicle.",
        trap: "Three feet is the passing distance in a lot of other states. New Mexico's manual asks for five.",
        excerptKey: "bicycle-five-feet",
        sourceLabel: "New Mexico Driver Manual - Sharing the Road, Bicycles Are Vehicles",
        sourceUrl: hb(25),
        commonlyMissed: true,
      },
      {
        id: "nm_s2_06",
        topic: "signs",
        question: "What information does a blue rectangular sign with white letters or symbols give you?",
        choices: [
          "A regulation you must obey",
          "The distance to the next town",
          "The location of a service such as a rest area, gas station or hospital",
          "A warning about the road surface ahead",
        ],
        correctIndex: 2,
        explanation:
          "Blue is the service color. Those signs mark rest areas, gas stations, campgrounds, hospitals and the like.",
        context:
          "Blue and green are easy to keep straight once you know the job each does. Green or brown destination signs give directions and distances to cities, airports, state lines, national parks and historical areas. Blue service signs tell you where to stop for something you need.",
        trap: "Distance to a town is a destination sign, and those are green or brown, not blue.",
        excerptKey: "service-signs",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Service Signs",
        sourceUrl: hb(8),
      },
      {
        id: "nm_s2_07",
        topic: "emergencies",
        question: "Your brakes stop working while you are driving. What does the manual tell you to try first?",
        choices: [
          "Pump the brake pedal several times",
          "Pull the parking brake hard and fast",
          "Shift straight into the lowest gear",
          "Switch off the engine",
        ],
        correctIndex: 0,
        explanation:
          "Pumping the pedal comes first, because it will often build up enough pressure to let you stop. Only if that fails do you move on.",
        context:
          "The order matters. Pump the pedal, then pull the parking brake slowly so the rear wheels do not lock and start a skid, and be ready to release it if they do. If neither works, shift down through the gears and look for a safe place to stop off the roadway.",
        trap: "Yanking the parking brake is the instinct and it is the wrong first move. Pulled fast it locks the rear wheels and puts you into a skid.",
        excerptKey: "brake-failure",
        sourceLabel: "New Mexico Driver Manual - Emergencies, Brake Failure",
        sourceUrl: hb(31),
      },
      {
        id: "nm_s2_08",
        topic: "impairment",
        question: "How long does the New Mexico Driver Manual say it takes your body to get rid of one drink?",
        choices: [
          "About twenty minutes",
          "About half an hour",
          "It depends entirely on body weight",
          "About one hour",
        ],
        correctIndex: 3,
        explanation:
          "One alcoholic drink per hour is the figure, and the manual adds that there is no way to speed it up. Coffee, fresh air, exercise and cold showers do nothing.",
        context:
          "The manual defines a drink so the arithmetic is not guesswork: one and a half ounces of 80-proof liquor, twelve ounces of beer, or a five ounce glass of wine. Specialty drinks can hold several of those at once.",
        trap: "Twenty to forty minutes is how long alcohol takes to REACH your brain, not how long it takes to leave your body. The two numbers sit two paragraphs apart in the manual.",
        excerptKey: "one-drink-per-hour",
        sourceLabel: "New Mexico Driver Manual - Effects of Alcohol",
        sourceUrl: hb(29),
      },
      {
        id: "nm_s2_09",
        topic: "parking",
        question: "You are parking on a hill in New Mexico. What does the manual tell you to do with the wheels?",
        choices: [
          "Leave them straight so the car does not drift",
          "Turn them towards the center of the road",
          "Turn them only if the hill is steep",
          "Turn them sharply towards the side of the road or curb",
        ],
        correctIndex: 3,
        explanation:
          "Turn them sharply towards the side of the road or the curb. If the car does start to roll, it rolls away from traffic instead of into it.",
        context:
          "The parking instructions come as a short list: set the parking brake every time, leave a manual in gear or an automatic in park, park as close to the curb as you can, and get out on the curb side if you can.",
        trap: "Straight wheels are the default that produces the runaway. The point of turning them is to choose where the car goes if the brake fails.",
        excerptKey: "parking-hill",
        sourceLabel: "New Mexico Driver Manual - Parking",
        sourceUrl: hb(13),
      },
      {
        id: "nm_s2_10",
        topic: "rules",
        question:
          "There are no signs or lane markings controlling turns at an intersection. Which lane should you turn from and into?",
        choices: [
          "From the center lane, into any lane that is clear",
          "From whichever lane is emptiest",
          "From the lane closest to the direction you want to go, into the lane closest to the one you came from",
          "From the outside lane, into the outside lane",
        ],
        correctIndex: 2,
        explanation:
          "You turn from the lane closest to the direction you want to go, and into the lane closest to the one you came from. That way you cross the fewest lanes of traffic.",
        context:
          "The manual adds a rule about how you make the turn itself: go from one lane to the other as directly as possible, without crossing lane lines or interfering with traffic. Once the turn is finished you can change lanes if you need to.",
        trap: "Turning into the far lane because it looks clear is what puts you across the path of a driver who was doing it correctly.",
        excerptKey: "turn-lane-choice",
        sourceLabel: "New Mexico Driver Manual - General Rules, Turning",
        sourceUrl: hb(10),
      },
      {
        id: "nm_s2_11",
        topic: "speed",
        question:
          "You are driving a car in normal condition on dry pavement at 50 mph. About how far does the manual say it takes to see something, react and stop?",
        choices: [
          "About 150 feet",
          "About 250 feet",
          "About 300 feet",
          "About 400 feet, which is roughly the length of a city block",
        ],
        correctIndex: 3,
        explanation:
          "About 400 feet at 50 mph, which the manual describes as roughly the length of a city block. At 30 mph the figure drops to about 200 feet.",
        context:
          "The manual turns those two distances into a visibility test. If you cannot see 400 feet ahead you may not be driving safely at 50 mph, and if you cannot see 200 feet ahead you may not be driving safely at 30.",
        trap: "That distance includes reaction time as well as braking. The braking distance alone is shorter, which is why estimating from brakes alone leaves you short.",
        excerptKey: "stop-distance-50",
        sourceLabel: "New Mexico Driver Manual - How Well Can You See?",
        sourceUrl: hb(22),
      },
      {
        id: "nm_s2_12",
        topic: "licensing",
        question:
          "How long must a New Mexico instructional permit be held before the holder can apply for a provisional license?",
        choices: [
          "Three months",
          "At least six months",
          "Ninety days",
          "Twelve months",
        ],
        correctIndex: 1,
        explanation:
          "Six months is the minimum. The manual states it twice, and Section 66-5-8 adds that thirty days is added to the six months for each traffic violation committed while driving on the permit.",
        context:
          "Holding the permit is only one of the requirements. You also complete a Traffic Safety Bureau approved driver education course with a DWI component, and 50 hours of practice driving including at least 10 at night, certified by a parent or guardian.",
        trap: "Twelve months is the provisional holding period, not the permit one. The two waits stack: six months on the permit, then twelve on the provisional license.",
        excerptKey: "permit-six-months",
        sourceLabel: "New Mexico Driver Manual - Instructional Permit",
        sourceUrl: hb(1),
      },
      {
        id: "nm_s2_13",
        topic: "signals",
        question: "An overhead lane signal shows a steady yellow X above your lane. What does it mean?",
        choices: [
          "The lane is for turning only",
          "The lane is closed to all traffic",
          "The use of the lane is changing and you should move out of it as soon as it is safe",
          "You may use the lane but only below the posted minimum",
        ],
        correctIndex: 2,
        explanation:
          "A steady yellow X means the lane's use is changing, and you should move out of it as soon as it is safe to do so.",
        context:
          "Reversible lanes carry four signals overhead. A green arrow means you can use the lane beneath it. A red X means you cannot. A flashing yellow X means the lane is only for turning. A steady yellow X means get out of it.",
        trap: "Flashing yellow and steady yellow mean different things over a reversible lane. Flashing means turns only; steady means leave.",
        excerptKey: "reversible-signals",
        sourceLabel: "New Mexico Driver Manual - Other Lane Controls, Reversible Lanes",
        sourceUrl: hb(9),
      },
      {
        id: "nm_s2_14",
        topic: "safety",
        question: "You are changing lanes. What does the manual say your mirrors cannot do for you?",
        choices: [
          "Show you traffic in the far lane",
          "Show you the vehicles near your rear corners",
          "Show you a vehicle about to pass",
          "Show you the road ahead",
        ],
        correctIndex: 1,
        explanation:
          "The areas near your rear corners are the blind spots, and the manual says you cannot see them through your mirrors. You have to turn your head and look.",
        context:
          "The lane change sequence in the manual is mirrors, then a shoulder check in the direction you plan to move, then a look at the far lane in case somebody there wants the same gap, then a check for motorcycles, bicycles and pedestrians who are harder to see.",
        trap: "Checking mirrors thoroughly does not substitute for the shoulder check. The blind spot is defined as the part the mirrors miss.",
        excerptKey: "blind-spots",
        sourceLabel: "New Mexico Driver Manual - Scanning, When changing lanes",
        sourceUrl: hb(17),
      },
      {
        id: "nm_s2_15",
        topic: "rightOfWay",
        question:
          "An ambulance is approaching with its siren on and its lights flashing. Where does New Mexico tell you to go?",
        choices: [
          "Stop immediately, wherever you are",
          "Move to the left lane so the ambulance can use the right",
          "Speed up until you reach the next side street",
          "Pull over to the right edge of the road, or as near to the right as possible, and stop",
        ],
        correctIndex: 3,
        explanation:
          "You pull to the right edge of the road, or as near to it as you can get, and stop. The rule applies whichever direction the emergency vehicle is coming from.",
        context:
          "There is a specific instruction for the intersection case: if you are in an intersection when you see or hear the emergency vehicle, you drive through the intersection before you pull over. Stopping inside the box blocks the route.",
        trap: "Stopping where you stand is the wrong move if that puts you in the middle of an intersection. Clear it first, then pull right.",
        excerptKey: "row-emergency-vehicle",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(12),
      },
      {
        id: "nm_s2_16",
        topic: "signs",
        question: "What kind of information do square or rectangular white, red or black signs carry?",
        choices: [
          "Rules about traffic direction, lane use, turning, speed and parking",
          "Warnings about hazards ahead",
          "Directions to nearby towns",
          "Notices about roadside services",
        ],
        correctIndex: 0,
        explanation:
          "Those are regulatory signs, and they give you rules for traffic direction, lane use, turning, speed, parking and other special situations. The stop and yield signs are the two that get their own shapes.",
        context:
          "One regulatory sub-family is worth recognizing on sight: a red circle with a red slash over a symbol. Those prohibit an action - no left turn, no right turn, no U-turn.",
        trap: "Regulatory signs are enforceable in their own right, unlike warning signs. The shape family tells you which kind you are looking at.",
        excerptKey: "regulatory-signs",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Regulatory Signs",
        sourceUrl: hb(6),
      },
      {
        id: "nm_s2_17",
        topic: "sharing",
        question:
          "You are following a large truck and you want to pass it. Which side does the New Mexico manual tell you to use?",
        choices: [
          "Whichever side has more room",
          "The right, because truck mirrors point left",
          "Always the left side",
          "The left, unless the truck is signaling left",
        ],
        correctIndex: 2,
        explanation:
          "Always the left. The manual then adds the second half of the instruction: once you have passed, move ahead of the truck rather than sitting alongside it in the driver's blind spot.",
        context:
          "Trucks and RVs need much more room than a car. An average car at 55 mph stops in about 400 feet; a large truck could take almost 800. They also swing wide to make right turns, so a left signal on a big rig is worth a second look before you commit.",
        trap: "The right side is the worst place to be near a truck. The manual's rule of thumb is that if you cannot see the driver in the side mirror, the driver cannot see you.",
        excerptKey: "truck-pass-left",
        sourceLabel: "New Mexico Driver Manual - Sharing the Road, Large Tucks and RVs",
        sourceUrl: hb(27),
      },
      {
        id: "nm_s2_18",
        topic: "rules",
        question: "When may you drive on the shoulder of a New Mexico road?",
        choices: [
          "To pass a slow vehicle on a two-lane road",
          "When traffic is stopped and the shoulder is paved",
          "To let a faster vehicle by",
          "Only when officials tell you to",
        ],
        correctIndex: 3,
        explanation:
          "The manual's instruction is that unless you are told to do so by officials, you never drive on the shoulder. Passing on it is called out separately and forbidden whether it is paved or not.",
        context:
          "The reason given is about expectation, not surface. Other drivers do not expect anyone to be on the shoulder, so a driver ahead may pull off the road without looking, straight into a vehicle that should not be there.",
        trap: "A wide, paved, empty shoulder feels like a lane. It is not, and the driver who pulls onto it without looking is the hazard the rule is written about.",
        excerptKey: "no-shoulder-driving",
        sourceLabel: "New Mexico Driver Manual - General Rules",
        sourceUrl: hb(10),
      },
      {
        id: "nm_s2_19",
        topic: "signals",
        question: "You are stopped for a sign or a signal. Where must you stop?",
        choices: [
          "Before your vehicle reaches the stop line or crosswalk",
          "With your front bumper over the stop line so you can see",
          "Anywhere inside the crosswalk",
          "Level with the signal head",
        ],
        correctIndex: 0,
        explanation:
          "You stop before your vehicle reaches the stop line or the crosswalk. The crosswalk is where people are entitled to be, and the manual is explicit that you never stop your vehicle inside one.",
        context:
          "Not every crosswalk is painted. The manual warns that unmarked crosswalks exist at intersections and tells you to be alert for pedestrians there. You must yield to anyone in a crosswalk or about to enter one.",
        trap: "Edging forward for a better view is permitted only after you have stopped where you were required to, and then only slowly enough that crossing drivers see your bumper before you see them.",
        excerptKey: "stop-line",
        sourceLabel: "New Mexico Driver Manual - Pavement Markings",
        sourceUrl: hb(8),
      },
      {
        id: "nm_s2_20",
        topic: "impairment",
        question:
          "A New Mexico police officer asks you to take a BAC test and you refuse. What does the manual say happens?",
        choices: [
          "Nothing, unless you are later convicted",
          "A fine, but your license is unaffected",
          "You can lose your driver license for one year",
          "Your license is suspended for thirty days",
        ],
        correctIndex: 2,
        explanation:
          "Refusal costs you the license for a year. Section 66-8-111 puts it the same way: the department revokes the license for one year or until all conditions for reinstatement are met, whichever is later.",
        context:
          "Refusal also feeds back into the criminal case. Under Section 66-8-102, refusing chemical testing is one of the three routes to an AGGRAVATED driving-under-the-influence charge, when the court finds on the evidence that the driver was under the influence.",
        trap: "Refusing is not a way to avoid the consequences. It carries a longer revocation than a first test result over the adult limit, which is six months.",
        excerptKey: "refusal-one-year",
        sourceLabel: "New Mexico Driver Manual - Alcohol and The Law",
        sourceUrl: hb(29),
        commonlyMissed: true,
      },
      {
        id: "nm_s2_21",
        topic: "safety",
        question: "How far ahead do safer drivers look, according to the New Mexico Driver Manual?",
        choices: [
          "About two seconds",
          "About five seconds",
          "At least ten seconds, which is about one city block in town",
          "As far as the headlights reach",
        ],
        correctIndex: 2,
        explanation:
          "At least ten seconds ahead, which the manual translates into about one city block when you are driving in town.",
        context:
          "Looking well down the road is not only about hazards. The manual says it also saves fuel, keeps traffic moving at a steady pace, and helps you steer straighter with less weaving, because you are aiming at something further away.",
        trap: "Ten seconds ahead is a scanning habit, not a following distance. The following distance is three seconds, and the two questions look alike on a test.",
        excerptKey: "look-ten-seconds",
        sourceLabel: "New Mexico Driver Manual - Scanning, Look ahead",
        sourceUrl: hb(15),
      },
      {
        id: "nm_s2_22",
        topic: "parking",
        question: "How far out from the curb may a parked vehicle sit in New Mexico?",
        choices: [
          "No more than 12 inches",
          "No more than 18 inches",
          "No more than 24 inches",
          "There is no set distance",
        ],
        correctIndex: 1,
        explanation:
          "Eighteen inches. The manual's no-parking list forbids parking more than 18 inches from the curb, which is the rule behind the parallel-parking scoring on the road test.",
        context:
          "The list around it is worth learning as a block: no parking in an intersection, on a crosswalk or sidewalk, within 30 feet of a traffic signal or stop sign, within 15 feet of a hydrant, within 50 feet of a railroad crossing, on a bridge or in a tunnel, or on the road side of another parked vehicle.",
        trap: "Two feet sounds close enough and is not. The figure is 18 inches, and it is the one the examiner measures against.",
        excerptKey: "no-park-curb-18",
        sourceLabel: "New Mexico Driver Manual - Parking, No-Parking Zones",
        sourceUrl: hb(13),
      },
      {
        id: "nm_s2_23",
        topic: "emergencies",
        question: "A tire suddenly blows out at speed. What does the manual tell you to do?",
        choices: [
          "Brake hard immediately",
          "Hold the wheel tightly, keep going straight, and slow down gradually",
          "Steer for the shoulder at once and stop there",
          "Shift to neutral and coast to a stop in your lane",
        ],
        correctIndex: 1,
        explanation:
          "Grip the wheel, keep the vehicle going straight, and slow gradually by lifting off the gas and using the brakes lightly. Then pull off the road in a safe place.",
        context:
          "The manual groups vehicle failures together and the responses share a shape: keep control first, lose speed gradually, get off the roadway second. It applies to a blowout, to a power failure and to a stuck accelerator, where the extra step is to shift quickly to neutral.",
        trap: "Braking hard is the reflex and it is what turns a blowout into a spin. The tire that failed cannot take a hard stop.",
        excerptKey: "tire-blowout",
        sourceLabel: "New Mexico Driver Manual - Emergencies, Tire Blowout",
        sourceUrl: hb(31),
      },
      {
        id: "nm_s2_24",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping center driveway across a sidewalk. Who has the right of way?",
        choices: [
          "You do, once your front wheels are on the sidewalk",
          "Whoever is moving faster",
          "You do, if no pedestrian is within ten feet",
          "The pedestrians on the sidewalk",
        ],
        correctIndex: 3,
        explanation:
          "Drivers crossing a sidewalk to enter or leave a driveway, alley or parking lot must yield to pedestrians. The manual adds that it is illegal to drive on a sidewalk except to cross it.",
        context:
          "New Mexico puts the pedestrian rules first in its right-of-way list for a reason. You must yield where necessary to avoid striking pedestrians who are legally crossing, and you must always yield to a pedestrian even when the pedestrian is not obeying traffic controls.",
        trap: "Getting your nose out first does not transfer the right of way. The obligation is to avoid striking the pedestrian regardless of the circumstances.",
        excerptKey: "row-sidewalk",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "nm_s2_25",
        topic: "speed",
        question: "What does the manual say about driving at the minimum posted speed on a high-speed road?",
        choices: [
          "Minimums are advisory only",
          "You are required to travel at least that fast so as not to be a hazard",
          "Minimums apply only to trucks and buses",
          "You may drive below it in the right lane",
        ],
        correctIndex: 1,
        explanation:
          "Where a minimum is posted, you are required to travel at least that fast, because a much slower vehicle is a hazard to everyone else. The manual's advice if the minimum is too fast for you is to use another road.",
        context:
          "There is a rule for the unposted case too. Where no minimum is posted, you drive so that you do not interfere with the regular flow of traffic, and you keep to the right-hand side of the road when you are slower than the vehicles around you.",
        trap: "Going much slower than other traffic is not the safe choice by default. The manual says it can be just as bad as speeding, because it bunches vehicles up behind you and forces them to pass.",
        excerptKey: "minimum-speed-signs",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Speed Limit Signs",
        sourceUrl: hb(7),
      },
      {
        id: "nm_s2_26",
        topic: "rules",
        question:
          "You want to merge onto a high-speed roadway from an entrance ramp. What does the manual tell you to do with the ramp?",
        choices: [
          "Use it to reach the speed of the other vehicles before you pull onto the road",
          "Drive to the end of it and stop until a gap appears",
          "Take it slowly so you can look for a gap",
          "Stay at the posted ramp speed the whole way",
        ],
        correctIndex: 0,
        explanation:
          "The ramp exists to give you room to build speed. You try to enter at the same speed the traffic is moving, so that you are joining rather than obstructing.",
        context:
          "The manual warns about the alternative in some detail. Driving to the end of the ramp and stopping leaves you no room to reach traffic speed, and the driver behind you is watching the main road rather than expecting you to stop.",
        trap: "Merging slowly feels cautious and creates the hazard. If you do have to wait for a gap, the manual says slow on the ramp early so you keep room to speed up before the merge point.",
        excerptKey: "merge-at-speed",
        sourceLabel: "New Mexico Driver Manual - Adjusting to Traffic",
        sourceUrl: hb(21),
      },
      {
        id: "nm_s2_27",
        topic: "signs",
        question:
          "A round yellow sign with a large X and two black R letters stands beside the road. What is it telling you?",
        choices: [
          "A crossroads is ahead",
          "A railroad crossing is ahead",
          "Two roads merge ahead",
          "The lane ends ahead",
        ],
        correctIndex: 1,
        explanation:
          "That is the advance warning for a railroad crossing. It is placed along the road before you reach the tracks so you can slow down and look up and down the line.",
        context:
          "New Mexico's railroad section is a chain of separate warnings: the round yellow advance sign, the white crossbuck at the crossing, flashing lights, a gate, a bell or horn, and sometimes a sign showing the number of tracks. Not every crossing has all of them.",
        trap: "A crossroads warning is a yellow diamond with a plus symbol. The round yellow sign is reserved for railroads.",
        excerptKey: "rr-advance-sign",
        sourceLabel: "New Mexico Driver Manual - Railroad Crossing Warning Signs",
        sourceUrl: hb(5),
      },
      {
        id: "nm_s2_28",
        topic: "licensing",
        question: "How long is a New Mexico driver license valid?",
        choices: [
          "Two or four years",
          "Four or eight years",
          "Five years only",
          "Ten years",
        ],
        correctIndex: 1,
        explanation:
          "Either four years or eight, depending on what you buy. The MVD prices them separately: eighteen dollars for the four-year license and thirty-four for the eight-year.",
        context:
          "The renewal window is narrow at one end. You may renew any time up to 90 days before the license expires, or up to 30 days after. You bring the current license plus one other proof of identity, and you may be asked to take a vision, knowledge or in special cases a driving test.",
        trap: "Letting it lapse has a cliff in it. Expired more than five years and the MVD requires both a written and a road test.",
        excerptKey: "renewal-term",
        sourceLabel: "New Mexico Driver Manual - Driver License Renewal",
        sourceUrl: hb(2),
      },
      {
        id: "nm_s2_29",
        topic: "safety",
        question:
          "You are following another vehicle at night on an unlit road. What does the manual say about your headlights?",
        choices: [
          "High beams are fine as long as you stay well back",
          "Use low beams within 200 feet when following another vehicle",
          "Alternate between high and low every few seconds",
          "Use parking lights so you do not dazzle the driver ahead",
        ],
        correctIndex: 1,
        explanation:
          "Low beams within 200 feet when you are following another vehicle, and also in heavy traffic. Your high beams reach into the mirror of the car ahead.",
        context:
          "The manual gives three distances for lights. High beams get dimmed within about one block of an oncoming vehicle. Low beams go on within 200 feet when following. And when lights are needed at all, you use headlights within at least 500 feet of approaching another car.",
        trap: "Parking lights are never a driving light. The manual says not to drive at any time with only your parking lights on.",
        excerptKey: "low-beams-200",
        sourceLabel: "New Mexico Driver Manual - Use Your Lights",
        sourceUrl: hb(18),
      },
      {
        id: "nm_s2_30",
        topic: "sharing",
        question:
          "A bicyclist ahead of you moves into the middle of the traffic lane on a narrow street. What does the New Mexico manual say about that?",
        choices: [
          "The rider must move right immediately",
          "The rider is only allowed to do it on a marked bike route",
          "The rider must dismount and walk",
          "The rider may take the whole lane where necessary, and you should slow down",
        ],
        correctIndex: 3,
        explanation:
          "New Mexico says bicyclists are legally allowed to take the whole lane by riding in the center of it when necessary - to prepare for a left turn, to avoid being squeezed on a narrow street, or to get around hazards, grates and debris.",
        context:
          "Where the pavement carries sharrows, shared lane pavement markings, the point is made explicitly: riders are encouraged to take the whole lane and motorists shall yield to the bicyclist as needed. You pass only where the road width lets the rider move right.",
        trap: "A rider in the center of the lane is not obstructing. The manual treats it as a legal and often deliberately safer position.",
        excerptKey: "bicycle-whole-lane",
        sourceLabel: "New Mexico Driver Manual - Sharing the Road, Bicycles Are Vehicles",
        sourceUrl: hb(25),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions at the level the MVD knowledge exam actually sits, drawn across the whole manual and the parts of Chapter 66 the manual leaves out.",
    questions: [
      {
        id: "nm_s3_01",
        topic: "emergencies",
        question:
          "You come up on a police car stopped on the shoulder with its emergency lights flashing. There are two lanes in your direction. What does New Mexico law require?",
        choices: [
          "Nothing, as long as you stay in your lane",
          "Stop until the officer waves you past",
          "Move into the lane not next to the stopped vehicle if it is safe, and slow to a reasonable and prudent speed",
          "Slow to 20 mph and hold that speed past the scene",
        ],
        correctIndex: 2,
        explanation:
          "Section 66-7-332 gives you two options and both involve slowing. If it is reasonably safe, you move to a lane that is not next to the stopped vehicle and slow down. If it is not safe to move over, you slow down anyway, proceed with caution and be ready to stop.",
        context:
          "The rule covers more than police cars. It applies to any stationary authorized emergency vehicle, and since 2017 also to recovery and repair vehicles displaying flashing emergency or hazard lights - a tow truck at the roadside counts.",
        trap: "The Driver Manual contains no move-over rule at all, which is exactly why New Mexico drivers miss this one. The obligation is in the statute, not the book.",
        excerptKey: "st-move-over",
        sourceLabel: "Section 66-7-332 NMSA 1978 - Approach of certain stationary vehicles",
        sourceUrl: st(688),
        commonlyMissed: true,
      },
      {
        id: "nm_s3_02",
        topic: "safety",
        question:
          "Which of these does the New Mexico Driver Manual list as a reason to open your following distance to four seconds?",
        choices: [
          "Driving after dark on a familiar road",
          "Following a motorcycle",
          "Driving into a low sun",
          "Driving through a business district",
        ],
        correctIndex: 1,
        explanation:
          "Following a motorcycle is one of the six situations the manual names for a four-second gap. Three seconds is the baseline; these six push it to four.",
        context:
          "The full list is slippery roads, following motorcycles, carrying a heavy load or pulling a trailer, following emergency vehicles, approaching railroad crossings, and being stopped on a hill or incline. Four seconds is also the gap you need to merge.",
        trap: "Darkness and glare are real hazards but they are not on this list. The manual handles those with the Four Second Sight Distance Rule instead, which is a different rule with the same number in it.",
        excerptKey: "four-second-situations",
        sourceLabel: "New Mexico Driver Manual - Sharing Space, Space Ahead",
        sourceUrl: hb(24),
        commonlyMissed: true,
      },
      {
        id: "nm_s3_03",
        topic: "licensing",
        question:
          "At what age does an unrestricted New Mexico driver license become available to someone who came up through the graduated system?",
        choices: [
          "16 years and 6 months",
          "16",
          "17",
          "18",
        ],
        correctIndex: 0,
        explanation:
          "Sixteen years and six months. Section 66-5-5 allows the division to issue a driver license to someone that age or older who has held a provisional license for at least twelve months immediately before applying.",
        context:
          "The arithmetic behind the age is the graduated ladder itself: the permit at 15, six months on it, the provisional license at 15 and a half, and twelve months on that. The manual describes the twelve-month provisional period but never states the resulting age.",
        trap: "Eighteen is when the graduated system stops applying to a NEW applicant, not when a provisional holder becomes unrestricted.",
        excerptKey: "st-full-license-age",
        sourceLabel: "Section 66-5-5 NMSA 1978 - Persons not to be licensed",
        sourceUrl: st(349),
      },
      {
        id: "nm_s3_04",
        topic: "rules",
        question:
          "Is it legal in New Mexico to read a text message while stopped at a red light?",
        choices: [
          "Yes, because the vehicle is not moving",
          "Yes, if you keep the phone below the window line",
          "No - the statute defines driving to include being temporarily stopped at a traffic light",
          "Only if you are in the right-hand lane",
        ],
        correctIndex: 2,
        explanation:
          "Section 66-7-374 defines driving as being in actual physical control of a vehicle on a highway or street, and says it includes being temporarily stopped because of traffic, a traffic light or a stop sign. Sitting at the red does not take you outside the ban.",
        context:
          "The exception the statute does allow is pulling over. Driving excludes operating a vehicle that has pulled over to the side of or off an active roadway and stopped somewhere it can safely remain stationary. Emergency calls for medical or other help are also excepted.",
        trap: "The Driver Manual says only that it is illegal in some towns to use a cell phone without a hands-free device. That paragraph predates the statewide texting ban the legislature passed in 2014, and it is the manual that is out of date.",
        excerptKey: "st-texting-driving-defined",
        sourceLabel: "Section 66-7-374 NMSA 1978 - Texting while driving",
        sourceUrl: st(741),
        commonlyMissed: true,
      },
      {
        id: "nm_s3_05",
        topic: "signals",
        question:
          "A green arrow you have been turning on changes to a steady yellow arrow. What does the manual say that means?",
        choices: [
          "The protection is ending, so prepare to stop and give way to oncoming traffic before turning",
          "The turn is now prohibited entirely",
          "You may continue turning with the same protection",
          "The signal is about to go dark and revert to a stop sign",
        ],
        correctIndex: 0,
        explanation:
          "A yellow arrow means the protection of the green arrow is ending. If you are turning that way, you prepare to stop and give the right of way to oncoming traffic before turning.",
        context:
          "Arrows are the manual's way of talking about protection. A green arrow means there should be no oncoming or crossing traffic. A yellow arrow withdraws that. A red arrow means you may not go in the direction of the arrow at all until it goes off and a green arrow or light comes on.",
        trap: "A yellow arrow does not forbid the turn. It converts a protected turn into an unprotected one, which is why so many collisions happen on it.",
        excerptKey: "yellow-arrow",
        sourceLabel: "New Mexico Driver Manual - Traffic Signals",
        sourceUrl: hb(4),
      },
      {
        id: "nm_s3_06",
        topic: "speed",
        question:
          "In heavy rain, at about what speed does the New Mexico Driver Manual say your tires can lose all traction with the road?",
        choices: [
          "About 35 mph",
          "About 45 mph",
          "About 50 mph",
          "About 65 mph",
        ],
        correctIndex: 2,
        explanation:
          "About 50 mph in heavy rain. The manual pairs that with the other end of the scale: on a wet road most tires have good traction up to about 35 mph, and it is above that speed that they start to ride up on the water.",
        context:
          "Riding up on the water is what hydroplaning means, and the manual says bald or badly worn tires lose traction at much lower speeds. The cure is speed, not steering - slowing down in the rain is the way to keep it from happening.",
        trap: "The 35 mph figure is where good traction ENDS, not where traction disappears. Two numbers, two different jobs, one paragraph apart.",
        excerptKey: "hydroplaning",
        sourceLabel: "New Mexico Driver Manual - Water on the roadway",
        sourceUrl: hb(20),
      },
      {
        id: "nm_s3_07",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a white cane steps into the road ahead of you against the signal. What does New Mexico require?",
        choices: [
          "Sound your horn to warn them",
          "Take all necessary precautions to avoid injury, and you are liable for damages if you do not",
          "Proceed, since they crossed against the signal",
          "Stop only if they are within one lane of you",
        ],
        correctIndex: 1,
        explanation:
          "The White Cane Law requires a driver approaching a totally or partially blind pedestrian carrying a white or metallic cane, or using a guide dog, to take all necessary precautions to avoid injury, and makes a driver who fails to do so liable in damages.",
        context:
          "This sits alongside the manual's general rule that you must always yield to a pedestrian even when the pedestrian is not obeying traffic controls. The White Cane Law goes further and attaches civil liability to failing to take precautions.",
        trap: "The horn is the wrong instrument here. The manual's own note on this rule is that a horn could confuse or frighten the pedestrian.",
        excerptKey: "white-cane-law",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "nm_s3_08",
        topic: "sharing",
        question:
          "Which vehicles does the manual say must stop at least 15 feet from a railroad crossing before proceeding?",
        choices: [
          "Every vehicle, without exception",
          "Only vehicles towing a trailer",
          "School buses, taxis, other vehicles for hire carrying passengers, and trucks carrying explosives, gasoline or other dangerous materials",
          "Only vehicles over 10,000 pounds",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen feet, and the list is specific: school buses, taxis and other vehicles for hire that carry passengers, plus trucks transporting explosives, gasoline or other dangerous materials.",
        context:
          "The manual adds a detail about the school bus in particular - the driver must open the doors of the bus before crossing, so that the driver can hear a train that the engine noise would otherwise mask.",
        trap: "Ordinary cars are not required to stop at every crossing. They slow, look and listen, and stop only when the lights are flashing, a gate is down or a train is coming.",
        excerptKey: "rr-bus-15-feet",
        sourceLabel: "New Mexico Driver Manual - Railroad Crossing Warning Signs",
        sourceUrl: hb(6),
      },
      {
        id: "nm_s3_09",
        topic: "safety",
        question: "What is the Four Second Sight Distance Rule in New Mexico?",
        choices: [
          "The gap you leave behind the car in front on a slippery road",
          "The time you need to complete a pass at 55 mph",
          "The gap you need to merge into traffic",
          "A check of whether you are driving faster than the distance you can see",
        ],
        correctIndex: 3,
        explanation:
          "It is a visibility test, not a following-distance test. You pick a stationary object as far ahead as you can clearly see and count four seconds. If you reach the object first, you are going too fast for your sight distance.",
        context:
          "The manual gives the counting words as one-one-thousand through four-one-thousand, and tells you to use the same check at night to be sure you are not overdriving your headlights - which reach about 400 feet, or about 50 mph worth of stopping distance.",
        trap: "New Mexico has three separate rules with second counts in them - three for following, four for merging, four for sight distance. This one is about how far you can SEE.",
        excerptKey: "four-second-sight",
        sourceLabel: "New Mexico Driver Manual - How Well Can You See?, Sight-distance rule",
        sourceUrl: hb(23),
        commonlyMissed: true,
      },
      {
        id: "nm_s3_10",
        topic: "impairment",
        question: "How many points in a twelve-month period will suspend a New Mexico license, and for how long?",
        choices: [
          "Twelve or more points, for one year",
          "Eight or more points, for six months",
          "Ten or more points, for ninety days",
          "Fifteen or more points, for two years",
        ],
        correctIndex: 0,
        explanation:
          "Twelve or more points within a twelve-month period suspends the license for one year. Points are assigned according to the violation, and you can get the full list of point-carrying offenses from the Motor Vehicle Division.",
        context:
          "Not every violation carries points. Driving without insurance and driving without vehicle registration do not; instead they require a court appearance, which can lead to fines and a suspension of its own.",
        trap: "A suspension for points is separate from a revocation for alcohol. Both can be running at once, and clearing one does not clear the other.",
        excerptKey: "points-twelve",
        sourceLabel: "New Mexico Driver Manual - Traffic Violations",
        sourceUrl: hb(14),
      },
      {
        id: "nm_s3_11",
        topic: "parking",
        question:
          "Under Section 66-7-351, how close to a stop sign or traffic signal may you stop, stand or park?",
        choices: [
          "Twenty feet",
          "Twenty-five feet",
          "No closer than thirty feet on the approach to it",
          "Fifty feet",
        ],
        correctIndex: 2,
        explanation:
          "Thirty feet upon the approach to any flashing beacon, stop sign or traffic-control signal at the side of a roadway. The Driver Manual gives the same thirty feet.",
        context:
          "The statutory list also names sidewalks, driveways, intersections, crosswalks, safety zones, fifteen feet of a hydrant, fifty feet of the nearest rail of a railroad crossing, twenty feet of a fire station driveway, bridges and tunnels, and the roadway side of another parked vehicle.",
        trap: "The rule is about the APPROACH. Parking thirty feet past the sign, where a driver has already read it, is not what the section forbids.",
        excerptKey: "st-parking-stop-sign",
        sourceLabel: "Section 66-7-351 NMSA 1978 - Stopping, standing or parking prohibited",
        sourceUrl: st(714),
      },
      {
        id: "nm_s3_12",
        topic: "signs",
        question:
          "A square sign shows a white horizontal line inside a red ball. Where would you expect to see it?",
        choices: [
          "At the start of a construction zone",
          "At a roadway opening you should not enter, such as an exit ramp facing the wrong way",
          "At the end of a passing zone",
          "At a pedestrian crossing",
        ],
        correctIndex: 1,
        explanation:
          "That is the Do Not Enter sign. It marks openings you should not drive into - the wrong end of an exit ramp, a crossover on a divided road, and many places along one-way streets.",
        context:
          "One-way streets are governed by signs, and the manual is direct about it: the state may turn any public road into a one-way road, but it must post signs saying so, and you may only drive in the direction the sign gives.",
        trap: "The red circle with a slash over a symbol is a different family. Those prohibit a specific action such as a left turn; the red ball with a white bar prohibits entry altogether.",
        excerptKey: "do-not-enter",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Do Not Enter Sign",
        sourceUrl: hb(7),
      },
      {
        id: "nm_s3_13",
        topic: "rules",
        question:
          "You are behind a slow vehicle on a two-lane road at 55 mph and want to pass. How large a gap in oncoming traffic does the manual say you need?",
        choices: [
          "About 4 seconds",
          "About 6 seconds",
          "About 10 seconds",
          "About 15 seconds",
        ],
        correctIndex: 2,
        explanation:
          "About ten seconds at 55 mph. You need a ten-second gap in the oncoming traffic AND enough sight distance to see that far, which is a different thing from simply seeing nothing coming.",
        context:
          "The manual converts the same requirement into distance for hills and curves: you have to be able to see at least one-third of a mile, or about ten seconds ahead, and you should not start to pass within one-third of a mile of a hill or curve. Treat a blind crest as an oncoming vehicle.",
        trap: "Passing more than one vehicle at a time is where the ten seconds runs out. The manual's rule of thumb is one vehicle per pass.",
        excerptKey: "pass-ten-seconds",
        sourceLabel: "New Mexico Driver Manual - Sharing Space, Space to Pass",
        sourceUrl: hb(25),
      },
      {
        id: "nm_s3_14",
        topic: "emergencies",
        question:
          "You have just been in a collision and someone is bleeding badly. What does the manual tell you to do?",
        choices: [
          "Apply pressure directly on the wound with your hand or a cloth",
          "Give them water while you wait for the ambulance",
          "Move them out of the vehicle so they can lie flat",
          "Elevate the limb and wait",
        ],
        correctIndex: 0,
        explanation:
          "Direct pressure on the wound, with your hand or a cloth. The manual says even severe bleeding can almost always be stopped or slowed that way.",
        context:
          "The order in the manual is get help called first, then do not move the injured unless they are in a burning vehicle or in danger of being hit, then help whoever is not already walking and talking - check breathing, then check bleeding.",
        trap: "Giving an injured person something to drink is specifically forbidden by the manual, not even water.",
        excerptKey: "accident-bleeding",
        sourceLabel: "New Mexico Driver Manual - If someone is injured",
        sourceUrl: hb(34),
      },
      {
        id: "nm_s3_15",
        topic: "licensing",
        question:
          "What minimum vision standard does New Mexico require before it will issue a driver license?",
        choices: [
          "20/20 in both eyes without correction",
          "20/30 in both eyes",
          "20/40 in at least one eye, with or without corrective lenses",
          "20/60 in the better eye",
        ],
        correctIndex: 2,
        explanation:
          "At least 20/40 vision in at least one eye, with or without corrective lenses. Wearing glasses or contacts to reach it is fine, and the license is then restricted so that you wear them when you drive.",
        context:
          "The manual treats acuity as only one part of seeing. It also asks you to think about side vision, about judging distances and speeds when merging or crossing tracks, and about glare at night from oncoming headlights.",
        trap: "Dark glasses or tinted contacts at night are specifically warned against, even though they seem to help with glare, because they cut the light you need to see at all.",
        excerptKey: "vision-standard",
        sourceLabel: "New Mexico Driver Manual - Be in Shape to Drive, Vision",
        sourceUrl: hb(28),
      },
      {
        id: "nm_s3_16",
        topic: "safety",
        question:
          "Your vehicle starts to skid. What does the New Mexico Driver Manual tell you to do with the brakes?",
        choices: [
          "Stay off the brake until the vehicle slows",
          "Pump the brakes rhythmically",
          "Press the brake hard and hold it",
          "Use the parking brake instead",
        ],
        correctIndex: 0,
        explanation:
          "Stay off the brake. Until the vehicle slows your brakes will not work anyway, and using them could make the skid worse.",
        context:
          "The rest of the recovery is steering. Turn the wheel in the direction you want the vehicle to go; as soon as it begins to straighten out, turn back the other way, or the car will swing round and start a new skid the other direction. Keep correcting left and right until it is back under control.",
        trap: "Skids come from speed, not from bad luck. The manual's own summary is that skids are caused by drivers traveling too fast for conditions, so the fix is upstream of the recovery.",
        excerptKey: "skid-stay-off-brake",
        sourceLabel: "New Mexico Driver Manual - Dealing with Skids",
        sourceUrl: hb(33),
      },
      {
        id: "nm_s3_17",
        topic: "sharing",
        question:
          "In which part of New Mexico does the driver manual tell you to watch particularly for elk?",
        choices: [
          "The eastern plains",
          "The western three-quarters of the state",
          "Only in the Sacramento Mountains",
          "Along the Rio Grande valley",
        ],
        correctIndex: 1,
        explanation:
          "Elk in the western three-quarters of the state, according to the manual's own geography. Antelope are in the eastern part or in open plains, and black bears and cougars in the mountains.",
        context:
          "The manual's wildlife section is unusually specific for a driver handbook because the problem is unusually large here. Deer live all over the state, and it names deer, elk, pronghorn antelope, black bears and cougars as the large game animals to watch for.",
        trap: "Antelope are the eastern animal and elk the western one. It is easy to swap them, and the manual states each separately.",
        excerptKey: "wildlife-where",
        sourceLabel: "New Mexico Driver Manual - Wildlife on the roadway",
        sourceUrl: hb(21),
      },
      {
        id: "nm_s3_18",
        topic: "signals",
        question:
          "What does a solid white line between two lanes travelling in the same direction tell you?",
        choices: [
          "You should stay in your lane unless a special situation requires a change",
          "Crossing it is prohibited in every circumstance",
          "You may cross it freely",
          "It marks the boundary of a bicycle lane only",
        ],
        correctIndex: 0,
        explanation:
          "The manual's wording is that you should stay in your lane unless a special situation requires you to change lanes. It is stronger guidance than a dashed white line and weaker than a barrier.",
        context:
          "White separates lanes going the same way, and yellow separates opposing directions. Within white, the dashed line means you may cross to change lanes if it is safe, and the solid one asks you not to unless you have a reason.",
        trap: "The absolute prohibition belongs to double solid yellow, where neither side may pass. Solid white is a strong discouragement, not the same rule.",
        excerptKey: "white-solid",
        sourceLabel: "New Mexico Driver Manual - Pavement Markings",
        sourceUrl: hb(8),
      },
      {
        id: "nm_s3_19",
        topic: "impairment",
        question:
          "How long does a DWI conviction stay on a New Mexico driving record?",
        choices: [
          "Five years",
          "Ten years",
          "Twenty-five years",
          "Until the license is next renewed",
        ],
        correctIndex: 2,
        explanation:
          "Twenty-five years. The manual states it in one line, and it means a conviction at 18 is still on the record at 43.",
        context:
          "The first conviction alone carries stiff fines and court costs, possible jail, an order into treatment and a DWI school, an ignition interlock device on the vehicle, and MVD's authority to revoke the license. Subsequent convictions raise all of it.",
        trap: "A record is not the same as a suspension. The suspension ends; the twenty-five year record entry does not, and insurers and employers read it.",
        excerptKey: "dwi-record-25-years",
        sourceLabel: "New Mexico Driver Manual - Alcohol and The Law",
        sourceUrl: hb(29),
      },
      {
        id: "nm_s3_20",
        topic: "rightOfWay",
        question:
          "The light is green but traffic on the far side of the intersection is backed up. What does New Mexico say?",
        choices: [
          "Enter the intersection and wait for the queue to move",
          "Do not enter unless you can get through without having to stop",
          "Enter if at least half your vehicle can clear",
          "Enter, since a green light gives you the right of way",
        ],
        correctIndex: 1,
        explanation:
          "Drivers may not enter an intersection unless they can get through it without having to stop. You wait behind the line until the traffic ahead clears, so you are not blocking the cross street.",
        context:
          "The manual repeats this from the other side in its space-to-cross section: even with a green light, do not start across if there are vehicles blocking your way. The same reasoning applies to railroad tracks, where you cross only if you can do it without stopping on the rails.",
        trap: "A green light is permission to proceed, not permission to occupy. Blocking the box is a violation even on a green.",
        excerptKey: "row-block-intersection",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "nm_s3_21",
        topic: "rules",
        question:
          "Under Section 66-7-347, how far short of a stopped school bus with its signals operating must you stop?",
        choices: [
          "At least ten feet",
          "At least twenty feet",
          "At least twenty-five feet",
          "At the nearest lane line",
        ],
        correctIndex: 0,
        explanation:
          "At least ten feet before reaching the school bus. The statute applies to a driver approaching or overtaking from either direction when the bus has stopped with its special signals in operation to receive or discharge children.",
        context:
          "You then stay stopped until one of three things happens: the special school bus signals are turned off, the bus resumes motion, or the driver signals you to proceed. The New Mexico courts have held that violating this section is negligence per se.",
        trap: "The Driver Manual requires the stop but never gives the distance. Ten feet comes from the statute, and it is the number the exam can still ask for.",
        excerptKey: "st-school-bus-ten-feet",
        sourceLabel: "Section 66-7-347 NMSA 1978 - Overtaking and passing school bus",
        sourceUrl: st(707),
      },
      {
        id: "nm_s3_22",
        topic: "speed",
        question:
          "In a very heavy rain or thick fog you can see about 200 feet ahead. What is the fastest the manual says you can safely drive?",
        choices: [
          "50 mph",
          "45 mph",
          "40 mph",
          "30 mph",
        ],
        correctIndex: 3,
        explanation:
          "Thirty. The manual ties the two figures together directly: when you cannot see any farther than 200 feet, you cannot safely drive faster than 30 mph.",
        context:
          "The pairing runs the other way too. Four hundred feet of visibility is what 50 mph needs. If the downpour is heavy enough that you cannot see well enough to drive at all, the instruction is to pull off the road somewhere safe and wait it out.",
        trap: "The posted limit is a maximum for ideal conditions. Driving the posted 55 in fog is a speeding offense under Section 66-7-301, which requires speed to be controlled to avoid a collision.",
        excerptKey: "heavy-rain-200",
        sourceLabel: "New Mexico Driver Manual - How Well Can You See?",
        sourceUrl: hb(23),
      },
      {
        id: "nm_s3_23",
        topic: "parking",
        question: "A curb is painted white in New Mexico. What is permitted there?",
        choices: [
          "Only short stops",
          "Loading commercial vehicles only",
          "Parking for up to two hours",
          "Nothing - it is a no-stopping zone",
        ],
        correctIndex: 0,
        explanation:
          "White curb means only short stops are permitted. It is the drop-off and pick-up color, not a parking space.",
        context:
          "New Mexico's four colors run white for short stops, yellow for a loading zone or some other restriction, red for a fire zone where neither parking nor standing is allowed, and blue for handicap parking only.",
        trap: "Yellow is the loading color, not white. The two get swapped often because both feel like commercial restrictions.",
        excerptKey: "curb-colors",
        sourceLabel: "New Mexico Driver Manual - Parking",
        sourceUrl: hb(14),
      },
      {
        id: "nm_s3_24",
        topic: "signs",
        question: "What color are New Mexico's destination signs, and what do they carry?",
        choices: [
          "Blue with white symbols, marking services",
          "Green or brown with white lettering, giving directions and distances",
          "Yellow with black lettering, warning of a junction",
          "White with black lettering, giving a rule",
        ],
        correctIndex: 1,
        explanation:
          "Green or brown with white lettering. They show directions and distances to cities, airports and state lines, and to special areas such as national parks, historical areas and museums.",
        context:
          "Destination, service and route number signs are the manual's three guide-sign families. Route number signs use shape and color to tell you what kind of road you are on: interstate, US, state, city or county.",
        trap: "Brown is a destination color in New Mexico, not a separate recreation category. Parks and historical sites are destination signs.",
        excerptKey: "destination-signs",
        sourceLabel: "New Mexico Driver Manual - Traffic Signs, Destination Signs",
        sourceUrl: hb(8),
      },
      {
        id: "nm_s3_25",
        topic: "safety",
        question:
          "Your vehicle has an antilock braking system and you need to stop as fast as possible. What does the manual tell you to do?",
        choices: [
          "Press the pedal as hard as you can and keep pressing",
          "Pump the pedal rapidly",
          "Brake hard, then release when you feel the pedal push back",
          "Brake with the parking brake to avoid locking the front wheels",
        ],
        correctIndex: 0,
        explanation:
          "With ABS you press as hard as you can and keep pressing. The pedal may push back at you while the system works, and the manual is explicit that you must not let up - ABS only works with the pedal pushed down.",
        context:
          "Without ABS the technique is the opposite shape. You brake as hard as you can without locking the wheels, and if they do lock and the car starts to skid, you let up quickly, then push down again once the skid stops, repeating until you have stopped.",
        trap: "Pumping the pedal is the pre-ABS technique. On an ABS car, pumping switches the system off and on and lengthens the stop.",
        excerptKey: "abs-braking",
        sourceLabel: "New Mexico Driver Manual - Avoiding Collisions, Stopping Quickly",
        sourceUrl: hb(32),
      },
      {
        id: "nm_s3_26",
        topic: "sharing",
        question:
          "What minimum liability insurance for injury to or death of one person in an accident does New Mexico require?",
        choices: [
          "$15,000",
          "$20,000",
          "$25,000",
          "$50,000",
        ],
        correctIndex: 2,
        explanation:
          "Twenty-five thousand dollars for bodily injury to or death of one person in any one accident. The other two figures are fifty thousand for two or more people, and ten thousand for property damage.",
        context:
          "The Mandatory Financial Responsibility Act requires everyone who operates a motor vehicle in New Mexico to carry a liability policy, and to carry proof of it in the vehicle at all times.",
        trap: "Failing to carry insurance is not only a fine. It can mean your registration is not issued or is suspended, that you surrender the plates, and possible criminal penalties.",
        excerptKey: "insurance-required",
        sourceLabel: "New Mexico Driver Manual - Financial Responsibility Law",
        sourceUrl: hb(34),
      },
      {
        id: "nm_s3_27",
        topic: "emergencies",
        question:
          "You are involved in a collision with a parked car and cannot find the owner. What does the manual tell you to do?",
        choices: [
          "Leave a note where it can be seen, with how the owner can reach you and the date and time",
          "Report it to your insurer and drive on",
          "Wait thirty minutes and then leave",
          "Nothing is required if the damage is minor",
        ],
        correctIndex: 0,
        explanation:
          "You leave a note where it can be seen, carrying information on how the owner can reach you plus the date and time of the accident. Trying to find the owner comes first; the note is what you do when that fails.",
        context:
          "The wider rule is that if you are involved in an accident you must stop. Leaving the scene of an accident you were involved in, without identifying yourself, is one of the things the manual lists as costing you your driving privileges.",
        trap: "Small damage does not remove the duty. The obligation to stop and identify yourself is not scaled to the size of the dent.",
        excerptKey: "accident-parked-note",
        sourceLabel: "New Mexico Driver Manual - Report the Accident",
        sourceUrl: hb(34),
      },
      {
        id: "nm_s3_28",
        topic: "licensing",
        question:
          "Who may supervise a New Mexico instructional permit holder driving a car?",
        choices: [
          "Any licensed driver over 18",
          "A parent or guardian only",
          "Any adult with a valid license",
          "A licensed driver 21 or older, licensed at least three years, in the seat beside the driver",
        ],
        correctIndex: 3,
        explanation:
          "Twenty-one or older, licensed for at least three years in New Mexico or another state, and occupying the seat beside the driver. Section 66-5-8 and the manual give the same conditions.",
        context:
          "On a motorcycle the arrangement changes: the licensed driver follows the learner rather than sitting beside them, and a motorcycle permit holder may not carry any other passenger at all.",
        trap: "Eighteen is not enough, and neither is a driver who was licensed last year. Both the age and the three-year experience test have to be met.",
        excerptKey: "permit-accompany-three-years",
        sourceLabel: "New Mexico Driver Manual - Instructional Permit",
        sourceUrl: hb(1),
      },
      {
        id: "nm_s3_29",
        topic: "rules",
        question:
          "Which of these does the manual list as a place where you should NOT pass?",
        choices: [
          "Intersections, railroad crossings and shopping center entrances",
          "Any road with a posted limit above 55 mph",
          "Any road with a shoulder",
          "Any road at night",
        ],
        correctIndex: 0,
        explanation:
          "Places where another vehicle is likely to enter or cross the road: intersections, railroad crossings and shopping center entrances. While you are passing, the vehicle you are passing blocks your view of exactly the traffic that could come out.",
        context:
          "The manual gives a second reason that people forget. A driver turning right into the approaching lane is not expecting to find you coming up in their lane, and may not look your way at all before turning.",
        trap: "Speed limits and shoulders are not what governs a passing decision. Sight lines and entry points are.",
        excerptKey: "pass-intersections",
        sourceLabel: "New Mexico Driver Manual - Sharing Space, Space to Pass",
        sourceUrl: hb(25),
      },
      {
        id: "nm_s3_30",
        topic: "signals",
        question:
          "You are stopped at a red light and it turns green, but a car is still crossing in front of you. What does the manual require?",
        choices: [
          "Move off, because you now have the right of way",
          "Sound your horn and proceed",
          "Allow the crossing traffic to clear the intersection before you go ahead",
          "Move up into the intersection and wait there",
        ],
        correctIndex: 2,
        explanation:
          "The green does not clear the box for you. The manual says that if you were stopped and the light turns green, you must allow crossing traffic to clear the intersection before you go ahead.",
        context:
          "The manual points at the reason in its scanning chapter: just after the light turns green is exactly when people on the cross street are most likely to hurry through before their light changes to red. Look left and right even when the other traffic has a red.",
        trap: "A green light is the start of your permission, not proof that the intersection is empty. The moment after green is the most dangerous one at a signal.",
        excerptKey: "green-clear-first",
        sourceLabel: "New Mexico Driver Manual - Traffic Signals",
        sourceUrl: hb(4),
      },
      {
        id: "nm_s3_31",
        topic: "impairment",
        question:
          "What does the New Mexico Driver Manual say about over-the-counter medicines and driving?",
        choices: [
          "Drugs for colds, hay fever or allergies can make you drowsy and affect your driving",
          "They are safe because they need no prescription",
          "Only prescription drugs affect driving",
          "They are a problem only if combined with alcohol",
        ],
        correctIndex: 0,
        explanation:
          "The manual names them directly: drugs taken for headaches, colds, hay fever or other allergies, or to calm nerves, can make a person drowsy and affect their driving. Driving under the influence of any drug that makes you drive unsafely is against the law.",
        context:
          "Stimulants get their own warning. Pep pills, uppers and diet pills make a driver feel more alert for a short time, and afterwards can cause nervousness, dizziness, trouble concentrating and vision problems.",
        trap: "The alcohol combination is worse, not the only risk. The manual tells you never to drink alcohol while taking other drugs, because the effects can multiply.",
        excerptKey: "other-drugs",
        sourceLabel: "New Mexico Driver Manual - Other Drugs And Driving",
        sourceUrl: hb(29),
      },
      {
        id: "nm_s3_32",
        topic: "safety",
        question:
          "You are stopped at an intersection and your view of the cross street is blocked by a parked truck. What does the manual tell you to do?",
        choices: [
          "Edge forward slowly until you can see",
          "Accelerate quickly through the gap",
          "Wait for a driver on the cross street to wave you out",
          "Sound the horn and proceed",
        ],
        correctIndex: 0,
        explanation:
          "Edge forward slowly until you can see. The manual explains the logic: moving slowly means crossing drivers see the front of your vehicle before you can see them, which gives them a chance to slow down and warn you.",
        context:
          "The wider habit here is looking to the sides. The manual asks you to look left and right before entering any intersection, and again just before you start moving if you were stopped, then across the intersection to be sure the whole path is clear.",
        trap: "Waiting to be waved out hands your safety to a stranger's judgment. The wave tells you what one driver intends, not what the next one is doing.",
        excerptKey: "blocked-view-edge",
        sourceLabel: "New Mexico Driver Manual - Scanning, Intersections",
        sourceUrl: hb(16),
      },
      {
        id: "nm_s3_33",
        topic: "sharing",
        question:
          "You have just passed a large truck on a two-lane road. When is it safe to move back into your lane?",
        choices: [
          "As soon as your rear bumper clears the truck's front bumper",
          "After counting three seconds",
          "When you can see both of the truck's headlights in your rear-view mirror",
          "When the truck flashes its lights at you",
        ],
        correctIndex: 2,
        explanation:
          "Both headlights visible in your rear-view mirror is the manual's test for having left enough room. It is a check you can actually make at speed, unlike guessing at car lengths.",
        context:
          "The other half of a pass is planning it. The manual says not to pass unless you have enough space to return to the driving lane, and not to count on other drivers making room for you.",
        trap: "Clearing the front bumper is nowhere near enough in front of a vehicle that needs almost 800 feet to stop from 55 mph.",
        excerptKey: "pass-both-headlights",
        sourceLabel: "New Mexico Driver Manual - Sharing Space, Space to Pass",
        sourceUrl: hb(25),
      },
      {
        id: "nm_s3_34",
        topic: "rightOfWay",
        question:
          "You are overtaking a vehicle that is slowing down in the lane ahead of you. What does the manual say about the right of way?",
        choices: [
          "The slowing vehicle must yield to you",
          "The right of way passes to whoever is faster",
          "Neither driver has it while one is slowing",
          "You must yield to that vehicle, even though it is slowing or stopping",
        ],
        correctIndex: 3,
        explanation:
          "The overtaking driver yields. The manual states it without exception: drivers overtaking a vehicle travelling in the same direction must yield to that vehicle, even if the vehicle is slowing or coming to a stop.",
        context:
          "That rule is the reason the manual is so firm about not passing on the shoulder and not passing on the right on multi-lane roads. In both cases you are overtaking somewhere the other driver has no reason to look.",
        trap: "A slowing vehicle feels like it has given up its claim to the lane. Under New Mexico's rule it has not, and the collision that follows is the overtaking driver's.",
        excerptKey: "row-overtaking",
        sourceLabel: "New Mexico Driver Manual - Right-of-Way",
        sourceUrl: hb(12),
      },
      {
        id: "nm_s3_35",
        topic: "speed",
        question:
          "What does Section 66-7-301 require of your speed regardless of the posted limit?",
        choices: [
          "That it never exceed 55 mph after dark",
          "That it be controlled as necessary to avoid colliding with a person, vehicle or other conveyance on or entering the highway",
          "That it match the average speed of surrounding traffic",
          "That it be reduced by 10 mph whenever it rains",
        ],
        correctIndex: 1,
        explanation:
          "The statute requires that in every event speed be so controlled by the driver as may be necessary to avoid colliding with a person, vehicle or other conveyance on or entering the highway. That obligation sits on top of every posted number.",
        context:
          "The same subsection also requires speed to be controlled to comply with requirements set by the department of transportation or the state police, to use due care, and to protect workers in construction zones posted as double fine zones.",
        trap: "Driving the posted limit is not automatically lawful. The posted number is a ceiling for ideal conditions, and the statutory duty to avoid a collision governs whatever the sign says.",
        excerptKey: "st-speed-control",
        sourceLabel: "Section 66-7-301 NMSA 1978 - Speed regulation",
        sourceUrl: st(642),
      },
    ],
  },
];
