import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Set 4 sweeps the parts of the Utah Driver Handbook that a
// learner skims - vehicle equipment, towing, insurance, the driving record,
// the definitions list and the appendices - because the Division writes its
// sample questions out of every section, not only the rules chapter.
//
// Set 5 is built on what Utah learners actually get wrong. The forum research
// behind it is written up in docs/driving/research/utah.md; every rule in it
// was then checked against the handbook or Title 41 Chapter 6a, and where a
// thread contradicted the official source the official source won and the
// confusion became the trap. Nothing here is a recalled exam item.
//
// Set 6 mirrors the real 50-question test's mix, at real difficulty, with no
// hints beyond the standard fields.
const HB = "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf";
/** Printed page number to a PDF page anchor - the book's page 1 is PDF page 11. */
const hb = (page: number) => `${HB}#page=${page + 10}`;
const uca = (s: string) => `https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S${s}.html`;
const PERMIT = "https://dld.utah.gov/learner-permit/";
const TEEN = "https://dld.utah.gov/teen-driver-restrictions/";
const TRENDS = "https://dld.utah.gov/traffic-safety-and-trends-exam/";
const POINTS = "https://dld.utah.gov/points-system/";
const PRACTICE = "https://dld.utah.gov/practice-test/";

export const utahSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Every chapter, including the ones people skip: vehicle equipment, towing, insurance, the driving record, the definitions list and the appendices at the back.",
    questions: [
      {
        id: "ut_s4_01",
        topic: "licensing",
        question: "Which class of Utah license covers an ordinary car?",
        choices: ["Class A", "Class B", "Class C", "Class D"],
        correctIndex: 3,
        explanation:
          "Class D is the everyday license. Utah defines it as all vehicles not defined as Class A, B or C, and not a motorcycle, with a minimum age of 16.",
        context:
          "The commercial classes are defined by weight and cargo. Class A is a combination over 26,001 pounds with a towed unit over 10,001 pounds; Class B is a single or combined vehicle over 26,001 pounds; Class C is a lighter single vehicle used to carry 16 or more occupants or placarded hazardous materials, with a minimum age of 21. A regular Class D license covers personal vehicles up to 26,000 pounds.",
        trap: "Class C sounds like the smallest of the letters and is in fact a commercial class.",
        excerptKey: "class-d-age-16",
        sourceLabel: "Utah Driver Handbook - Section 4.A License Types",
        sourceUrl: hb(10),
      },
      {
        id: "ut_s4_02",
        topic: "safety",
        question:
          "Which driver-assist features may you not use during a Utah driving skills test?",
        choices: [
          "Parking assist and cruise control",
          "Blind spot warning and the backup camera",
          "Automatic emergency braking",
          "Lane keeping assistance",
        ],
        correctIndex: 0,
        explanation:
          "The handbook names parking assist and cruise control as features you cannot use on the skills test. Parking is one of the things being scored, so a system that does it for you defeats the point.",
        context:
          "The wider rule is that assist features assist and do not drive. You stay responsible for head checks, mirrors and cameras, and for knowing where the systems fail - rain, snow, ice, fog, hills and curves all degrade them. Keeping sensors clean and software current is listed as the driver's job.",
        trap: "A backup camera is not banned, but it does not replace looking over your shoulder, and examiners score the head check rather than the outcome.",
        excerptKey: "adas-skills-test",
        sourceLabel: "Utah Driver Handbook - Section 15 Advanced Driver Assistance Systems",
        sourceUrl: hb(90),
      },
      {
        id: "ut_s4_03",
        topic: "emergencies",
        question:
          "At what level of property damage must you notify law enforcement of a Utah crash?",
        choices: ["$500", "$1,000", "$2,500", "$5,000"],
        correctIndex: 2,
        explanation:
          "Injuries, a death, or at least $2,500 in total property damage all trigger an immediate call to law enforcement. The rule applies whether or not another driver was involved.",
        context:
          "Below that threshold you still stop, exchange details and, on a damage-only crash, may move the vehicles out of the travel lanes to a shoulder, cross street or other spot that does not obstruct traffic. If the vehicle you hit is unattended you leave a note with your name, address and the plate number of the vehicle that caused the damage.",
        trap: "The threshold counts total damage, not your share of it, so a single-vehicle crash into a fence can cross it.",
        excerptKey: "crash-report-2500",
        sourceLabel: "Utah Driver Handbook - Section 12 Crashes and Insurance",
        sourceUrl: hb(65),
      },
      {
        id: "ut_s4_04",
        topic: "rules",
        question:
          "You tow a disabled vehicle with a chain. What does Utah require of the connection?",
        choices: [
          "No more than 15 feet long, with a red flag at least 12 inches square attached",
          "No more than 25 feet long, with hazard lights on both vehicles",
          "No more than 10 feet long, with the towed vehicle unoccupied",
          "Any length, provided the towed vehicle has working brake lights",
        ],
        correctIndex: 0,
        explanation:
          "Utah's towing chapter has three rules and two of them are these: the connection may not exceed 15 feet, and a chain, rope or cable connection needs a red flag or other signal at least twelve inches square.",
        context:
          "The third rule is about behavior rather than equipment: you may not operate a train of vehicles when a towed vehicle whips or swerves dangerously or unreasonably from side to side. Every towed vehicle and ordinary hitch also needs a safety chain or cable strong enough to stop the two separating.",
        trap: "The twelve inches is a minimum size for the flag, not a maximum, and the flag is only required for the flexible kinds of connection.",
        excerptKey: "tow-connection-15-feet",
        sourceLabel: "Utah Driver Handbook - Section 16 Towing",
        sourceUrl: hb(93),
      },
      {
        id: "ut_s4_05",
        topic: "signs",
        question:
          "You are driving through a long work zone. When may you go back to the normal speed?",
        choices: [
          "As soon as the lane markings return to normal",
          "As soon as you pass the last cone",
          "When no workers are visible",
          "When you see the END ROAD WORK sign",
        ],
        correctIndex: 3,
        explanation:
          "The handbook tells you to obey the posted work zone signs until you see END ROAD WORK. The signs, not the appearance of the road, mark the boundary.",
        context:
          "Work zones in Utah include maintenance, utility work, tree trimming and surveying as well as construction, and they are recognizable by orange signs and devices, flashing lights on equipment and workers in high-visibility clothing. Inside one you slow down, increase following distance and stay ready to stop, whether anyone is visible or not.",
        trap: "An empty stretch inside a long work zone is still inside it, and the doubled speeding fine applies there too.",
        excerptKey: "work-zone-slow-always",
        sourceLabel: "Utah Driver Handbook - Section 11.G Highway Work Zones",
        sourceUrl: hb(59),
      },
      {
        id: "ut_s4_06",
        topic: "sharing",
        question:
          "How old must a child be to ride an electric-assisted bicycle on a Utah road without direct parental supervision?",
        choices: ["8", "12", "14", "16"],
        correctIndex: 2,
        explanation:
          "Under 14, an e-bike may only be ridden under the direct supervision of a parent or guardian. Under eight, it may not be ridden on public property, a highway, a path or a sidewalk at all.",
        context:
          "A third age limit sits above them: nobody under 16 may operate a Class 3 e-bike. Utah's classes are defined by how the motor behaves - Class 1 assists only while you pedal and stops assisting at 20 mph, Class 3 also assists only while you pedal but continues to 28 mph and must carry a speedometer.",
        trap: "There are three separate ages here, and the 16 that people remember belongs only to the Class 3 machine.",
        excerptKey: "ebike-age-limits",
        sourceLabel: "Utah Driver Handbook - Section 14.A Electric-Assisted Bicycle",
        sourceUrl: hb(77),
      },
      {
        id: "ut_s4_07",
        topic: "impairment",
        question:
          "What does it mean to be an alcohol-restricted driver in Utah?",
        choices: [
          "You may not drive between midnight and 5 am",
          "You are prohibited from operating a vehicle with any alcohol in your body",
          "You must carry proof of an alcohol assessment at all times",
          "You may only drive to and from work",
        ],
        correctIndex: 1,
        explanation:
          "An alcohol-restricted driver may not operate a vehicle with any alcohol in the body at all. The status follows an alcohol-related conviction, suspension or revocation.",
        context:
          "The restriction runs for two, three, five or ten years depending on the number and type of offenses, and for life after an automobile homicide or a felony DUI. It survives reinstatement: the driver gets full privileges back but a conviction for driving with any measurable alcohol during the restricted period revokes the license for a year.",
        trap: "It is not the same as the ignition interlock restriction, though the two often run together. One is about your blood, the other about your car.",
        excerptKey: "def-alcohol-restricted",
        sourceLabel: "Utah Driver Handbook - Section 1 Definitions",
        sourceUrl: hb(1),
      },
      {
        id: "ut_s4_08",
        topic: "parking",
        question:
          "A friend is waiting in a car parked at the curb and you stop alongside to talk. What is wrong with that?",
        choices: [
          "Nothing, provided you keep the engine running",
          "Nothing, if you are there for under five minutes",
          "It is only an offense on a one-way street",
          "It is double parking, which Utah prohibits",
        ],
        correctIndex: 3,
        explanation:
          "Stopping on the roadway side of a vehicle already parked at the curb is double parking, and it is on Utah's list of places where you may not stop, stand or park.",
        context:
          "The list around it is long: sidewalks, driveways, intersections, crosswalks, bridges and elevated structures, tunnels, railroad tracks, controlled-access highways, bicycle lanes, the median area of a divided highway, and anywhere a traffic-control device forbids it. The prohibitions on the roadway side of another vehicle and on a sidewalk apply even momentarily.",
        trap: "Waiting with the engine running does not turn parking into something else. Utah's statute covers stopping and standing as well as parking.",
        excerptKey: "uca-parking-prohibited",
        sourceLabel: "Utah Code 41-6a-1401 - Standing or parking vehicles",
        sourceUrl: uca("1401"),
      },
      {
        id: "ut_s4_09",
        topic: "speed",
        question:
          "Can a Utah driver be cited for driving too slowly?",
        choices: [
          "No, provided they stay under the limit",
          "Only on a freeway",
          "Yes - impeding the normal and reasonable movement of traffic is an offense",
          "Only if a minimum speed is posted",
        ],
        correctIndex: 2,
        explanation:
          "Utah makes it an infraction to drive so slowly as to impede or block the normal and reasonable movement of traffic. The handbook warns that a peace officer may cite you for it.",
        context:
          "There are exceptions for a reduced speed necessary for safe operation, for a vehicle on a grade, and for compliance with a traffic control device. Section 41-6a-605 adds a specific piece of evidence: sitting on a limited-access highway below the limit, side by side and at the same speed as the vehicle in the lane beside you, is evidence of the offense. Impeding traffic carries 50 points.",
        trap: "A posted minimum is not needed for the offense to exist. Where one is posted it simply adds a second, separate requirement.",
        excerptKey: "uca-minimum-speed",
        sourceLabel: "Utah Code 41-6a-605 - Minimum speed regulations",
        sourceUrl: uca("605"),
      },
      {
        id: "ut_s4_10",
        topic: "signals",
        question:
          "You arrive at a Utah freeway on-ramp and the ramp meter is showing red. What does it control?",
        choices: [
          "It alternates red and green and releases one vehicle per green unless posted differently",
          "It holds all traffic until the freeway is clear",
          "It releases traffic in groups of three",
          "It is advisory and may be ignored when traffic is light",
        ],
        correctIndex: 0,
        explanation:
          "A ramp meter has only red and green, and it alternates. Each green releases one vehicle unless the sign says otherwise.",
        context:
          "Meters run only when many vehicles are trying to join at once, and a lighted METER ON sign at the entrance to the ramp tells you the system is active. Because that sign is at the top of the ramp rather than the bottom, you can still choose another route before committing. If the sign is dark, you enter as normal.",
        trap: "It looks like an intersection signal and is not one. There is no yellow phase, so the change is abrupt.",
        excerptKey: "ramp-meter",
        sourceLabel: "Utah Driver Handbook - Section 9.B Ramp Meters",
        sourceUrl: hb(41),
      },
      {
        id: "ut_s4_11",
        topic: "rightOfWay",
        question:
          "A highway worker is working inside a marked maintenance area on the road ahead. What does the law require?",
        choices: [
          "Yield the right of way to the worker and to any authorized vehicle engaged in the work",
          "Sound your horn to warn them and continue",
          "Slow to 20 mph but keep your lane position",
          "Nothing beyond the posted work zone limit",
        ],
        correctIndex: 0,
        explanation:
          "Section 41-6a-905 puts a specific duty on you: yield to a worker or authorized vehicle actually engaged in work inside a construction or maintenance area marked by a traffic-control device.",
        context:
          "The same duty covers an authorized vehicle obviously engaged in work on a highway when it is displaying the lights the statute requires. Alongside it sit the move over duty for stationary tow trucks and maintenance vehicles showing amber lights, and the flagger's authority to direct you.",
        trap: "Obeying the posted work zone speed is a separate obligation. It does not discharge the duty to yield.",
        excerptKey: "uca-work-zone-yield",
        sourceLabel: "Utah Code 41-6a-905 - Vehicle or pedestrian working upon highway",
        sourceUrl: uca("905"),
      },
      {
        id: "ut_s4_12",
        topic: "licensing",
        question:
          "You move to Utah from another state with a valid license. How long may you drive on it?",
        choices: ["30 days", "60 days", "Six months", "One year"],
        correctIndex: 2,
        explanation:
          "A visitor with a valid out-of-state or out-of-country license may drive in Utah for up to six months. Beyond that, residency rules take over.",
        context:
          "Utah treats you as a resident once you enter the state to make it home, stay six months or more in a calendar year, obtain a license or register a vehicle here, take up resident privileges such as in-state tuition, or become gainfully employed here other than on a temporary assignment. Residents must hold a Utah license, learner permit or temporary license to drive.",
        trap: "The six months runs from arrival, not from the day the out-of-state license expires.",
        excerptKey: "visitor-six-months",
        sourceLabel: "Utah Driver Handbook - Section 2.A Residents",
        sourceUrl: hb(4),
      },
      {
        id: "ut_s4_13",
        topic: "safety",
        question:
          "From how far away must a Utah vehicle's horn be audible?",
        choices: ["100 feet", "200 feet", "300 feet", "500 feet"],
        correctIndex: 1,
        explanation:
          "Two hundred feet under normal conditions. It is one of the equipment standards in the handbook's vehicle equipment chapter.",
        context:
          "The neighboring figures are worth learning together, because the skills test rejects a vehicle that fails them. Headlights must throw 350 feet on high beam and 100 feet on low. Tail and stop lights must be visible from 500 feet to the rear in normal sunlight. Turn signals must be visible from 100 feet. The license plate light must let the number be read at 50 feet.",
        trap: "Only authorized emergency vehicles may carry a siren, whistle or bell, so a louder warning device is not an upgrade.",
        excerptKey: "horn-200-feet",
        sourceLabel: "Utah Driver Handbook - Section 15 Vehicle Equipment",
        sourceUrl: hb(91),
      },
      {
        id: "ut_s4_14",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and a train is coming. What does the Utah handbook say to do?",
        choices: [
          "Stay in the vehicle and brace for impact",
          "Try to restart the engine until the last moment",
          "Get everyone out, then run toward the train at an angle away from the tracks",
          "Get out and run directly away from the tracks in the direction the train is heading",
        ],
        correctIndex: 2,
        explanation:
          "Everyone out first. Then you move toward the oncoming train at an angle away from the track, because the debris from the collision is thrown forward along the train's direction of travel.",
        context:
          "Notify local authorities immediately either way. If no train is in sight, the handbook says to post lookouts and only then try to start or move the vehicle. The reason the advice is so unforgiving is the physics it prints alongside: a 100-car freight train at 55 mph needs more than a mile to stop once emergency braking is set.",
        trap: "Running away along the track in the train's direction puts you exactly where the wreckage goes.",
        excerptKey: "stalled-on-tracks",
        sourceLabel: "Utah Driver Handbook - Section 14.L General Railroad Safety Information",
        sourceUrl: hb(88),
      },
      {
        id: "ut_s4_15",
        topic: "rules",
        question:
          "The Utah handbook restricts three-point turns to one kind of road. Which?",
        choices: [
          "A one-way street",
          "A residential street",
          "Any road without a center line",
          "A two-lane road",
        ],
        correctIndex: 3,
        explanation:
          "A three-point turn should only be used on a two-lane road, and only where the road is too narrow for a U-turn. The handbook says driving around the block is better if you can.",
        context:
          "The sequence it teaches is signal right and stop on the right, signal left with a head check over the left shoulder, turn hard left across to the other side and stop, shift to reverse and check over both shoulders, back around to the right, then shift to drive and merge. Signals are expected at each stage, which is where points are lost on the skills test.",
        trap: "It is a last resort rather than a maneuver of choice, and using it where a U-turn or a block would do is scored against you.",
        excerptKey: "three-point-turn-when",
        sourceLabel: "Utah Driver Handbook - Section 8.I Three-Point Turn",
        sourceUrl: hb(38),
      },
      {
        id: "ut_s4_16",
        topic: "signs",
        question:
          "The gates at a railroad crossing have begun to rise but the lights are still flashing. What may you do?",
        choices: [
          "Move forward slowly once the gates are above windshield height",
          "Cross, since a raised gate means the train has gone",
          "Cross if you can see clearly in both directions",
          "Nothing - wait until the gates are fully raised and the lights have stopped",
        ],
        correctIndex: 3,
        explanation:
          "You stay stopped until the gates are up and the lights have stopped flashing. A second train on another track is the reason the two signals are separate.",
        context:
          "Utah adds that you may never drive through, around or under a gate while it is down or in the middle of moving, and that a stop is required the moment lights start flashing or bells start ringing. The one narrow exception is for a crossing whose lights you believe are malfunctioning: after a complete stop, you may cross only with a clear mile of sight in both directions, no sign of a train, and a safe crossing.",
        trap: "A raised gate is not the all-clear on its own, and light rail crossings are treated exactly the same way.",
        excerptKey: "railroad-gates-remain",
        sourceLabel: "Utah Driver Handbook - Section 14.L Gates",
        sourceUrl: hb(87),
      },
      {
        id: "ut_s4_17",
        topic: "sharing",
        question:
          "A tractor-trailer ahead of you swings out to the left before turning right. What should you do?",
        choices: [
          "Move up on its right to take the gap it has left",
          "Overtake on the left while it is still swinging",
          "Sound your horn to signal that the lane is clear",
          "Wait until the vehicle has finished its turn",
        ],
        correctIndex: 3,
        explanation:
          "The swing to the left is the first part of a right turn. The gap it opens on the right is where the trailer is about to be.",
        context:
          "The reason is geometry: the rear wheels of any turning vehicle follow a shorter path than the front wheels, and the longer the vehicle the bigger the difference. The handbook asks you to watch a large vehicle's signals, give it room, avoid lingering alongside when you pass, and always stop behind the stop line, which is placed where it is to give big vehicles turning space.",
        trap: "A left signal on a truck can mean a right turn is starting. Waiting to see which way it actually goes is the whole advice.",
        excerptKey: "truck-swing-wide",
        sourceLabel: "Utah Driver Handbook - Section 14.C Turning and Oncoming Large Vehicles",
        sourceUrl: hb(79),
      },
      {
        id: "ut_s4_18",
        topic: "impairment",
        question:
          "Utah's implied consent law covers more than cars. What else?",
        choices: ["Bicycles", "Motorboats", "Horses", "Electric scooters"],
        correctIndex: 1,
        explanation:
          "Driving a vehicle or a motorboat in Utah is treated as consent to a chemical test. Boating under the influence is subject to the same laws as driving under the influence.",
        context:
          "The consent covers breath, blood, urine or oral fluids and the officer chooses which. Refusal revokes the license for 18 months on a first offense, and the revocation lands whether or not the underlying charge succeeds. The handbook's advice is the same for both: if you have been drinking, let someone who has not do the driving.",
        trap: "Bicycles are vehicles for rules of the road purposes, but the implied consent language names motorboats specifically.",
        excerptKey: "implied-consent",
        sourceLabel: "Utah Driver Handbook - Section 10.C Implied Consent Law",
        sourceUrl: hb(53),
      },
      {
        id: "ut_s4_19",
        topic: "parking",
        question:
          "How close to the driveway entrance of a fire station may you park in Utah?",
        choices: [
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
          "No closer than 75 feet",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet from the driveway entrance. Directly opposite the entrance on the other side of the street, where it is signposted, the figure jumps to 75 feet.",
        context:
          "The two numbers describe two different obstructions. Twenty feet keeps the mouth of the driveway clear. Seventy-five feet on the far side keeps the road wide enough for a fire engine to swing out. The same section prohibits parking in an area posted for pedestrian use, or within 30 feet of the edges of one.",
        trap: "The 75-foot figure is the one that sticks, and it applies only to the opposite side of the street where signs are posted.",
        excerptKey: "parking-fire-station",
        sourceLabel: "Utah Driver Handbook - Section 8.D Parking",
        sourceUrl: hb(32),
      },
      {
        id: "ut_s4_20",
        topic: "speed",
        question:
          "What speeds does the Utah handbook give for rural interstate highways?",
        choices: [
          "55 mph everywhere",
          "60, 65 or 70 mph",
          "65, 70, 75 or 80 mph",
          "A flat 75 mph",
        ],
        correctIndex: 2,
        explanation:
          "Rural interstates in Utah run at 65, 70, 75 or 80 mph depending on the stretch. Transition zones between different limits are marked with pavement markings and extra signs.",
        context:
          "The handbook's whole speed ladder is 20 in a school zone, 25 in a business or residential area, 55 on major highways as posted, and the 65 to 80 band on rural interstates. Section 41-6a-601 fills the unposted gaps with 55. Every one of those numbers still gives way to the basic speed law when conditions demand less.",
        trap: "Eighty is the top of the range, not the standard. It applies only where posted.",
        excerptKey: "speed-55-highways",
        sourceLabel: "Utah Driver Handbook - Section 9.E Speed",
        sourceUrl: hb(44),
      },
      {
        id: "ut_s4_21",
        topic: "signals",
        question:
          "You have a circular green light and want to turn right. Pedestrians are already in the crosswalk you would cross. What must you do?",
        choices: [
          "Yield to them, because a green does not give you priority over people lawfully in the crossing",
          "Proceed, since the green covers your movement",
          "Sound the horn and complete the turn",
          "Proceed only if a right-turn arrow is also lit",
        ],
        correctIndex: 0,
        explanation:
          "A circular green permits the movement and subordinates it to anyone already lawfully in the intersection or the adjacent crosswalk. That includes people on foot.",
        context:
          "Section 41-6a-305 puts the same duty on a driver turning either way on a circular green, and adds that a sign at the intersection prohibiting the turn overrides the green entirely. The handbook's version is shorter: when a light turns green, make sure your path of travel is clear and there is no cross traffic.",
        trap: "The green applies to the traffic movement, not to the crossing. A pedestrian who started lawfully keeps priority for the whole crossing.",
        excerptKey: "uca-signal-green",
        sourceLabel: "Utah Code 41-6a-305 - Traffic-control signal",
        sourceUrl: uca("305"),
      },
      {
        id: "ut_s4_22",
        topic: "licensing",
        question:
          "How does a Utah driver clear points from their record by driving safely?",
        choices: [
          "All points drop off after one clean year",
          "Half the points drop off after one clean year, all of them after two",
          "Points never drop off, but they stop counting after five years",
          "Points drop off only after a defensive driving course",
        ],
        correctIndex: 1,
        explanation:
          "One full year without a moving violation conviction removes half the points on the record. Two successive clean years removes all of them.",
        context:
          "Two other mechanisms run alongside it. Points for individual convictions come off automatically three years after the violation date. And an approved defensive driving course takes off up to 50 points, once in any three-year period - the Division is explicit that this is a different course from the traffic school some courts offer.",
        trap: "The defensive driving course for point reduction is not the four-hour live classroom course a move over conviction forces you to attend.",
        excerptKey: "points-clearing",
        sourceLabel: "Utah Driver Handbook - Section 13.F Clear Points From Record",
        sourceUrl: hb(73),
      },
      {
        id: "ut_s4_23",
        topic: "safety",
        question:
          "Which of these makes a Utah windshield unlawful?",
        choices: [
          "A small chip below the wiper line",
          "An air freshener hanging from the rearview mirror that obstructs your view",
          "A registration sticker in the lower corner",
          "A tinted band across the very top",
        ],
        correctIndex: 1,
        explanation:
          "The handbook requires the windshield to be clean of dirt, frost or anything else that might obstruct your vision, and it names something hanging from the rearview mirror as an example.",
        context:
          "The same chapter requires at least one working wiper, both of them if the vehicle came with two, and two or more speeds on anything built after 1967. The skills test applies the standard directly: a vehicle can be turned away for a windshield that does not give an entire unobstructed field of vision, or for wipers that do not work.",
        trap: "It is not about damage. The rule is written around anything that blocks the view, which is why a dangling ornament is the example given.",
        excerptKey: "windshield-clear",
        sourceLabel: "Utah Driver Handbook - Section 15 Vehicle Equipment",
        sourceUrl: hb(92),
      },
      {
        id: "ut_s4_24",
        topic: "emergencies",
        question:
          "The engine dies while you are driving and the steering suddenly feels heavy. What should you do?",
        choices: [
          "Let go of the wheel briefly to reset the power steering",
          "Brake hard to stop as quickly as possible",
          "Keep a firm grip, brake gently with steady pressure, and pull off the road",
          "Shift into reverse to restart the engine",
        ],
        correctIndex: 2,
        explanation:
          "The wheel will be hard to turn but it will still turn. Hold it firmly, use steady rather than sudden brake pressure, and get off the road before trying anything else.",
        context:
          "Once you are stopped, the handbook's routine is to try to restart, and if it will not go, raise the hood, switch on the emergency flashers and call for help. The braking half of the advice matters because a dead engine also kills the brake booster, so the pedal will need much more force than usual.",
        trap: "Letting go of the wheel is the instinct when the steering stiffens and it is the one thing that turns a breakdown into a crash.",
        excerptKey: "power-failure",
        sourceLabel: "Utah Driver Handbook - Section 12.B Power Failure",
        sourceUrl: hb(67),
      },
      {
        id: "ut_s4_25",
        topic: "rules",
        question:
          "A snowplow ahead of you has flashing yellow lights and a plow blade down on its right side. What does Utah law say?",
        choices: [
          "You may pass on either side with care",
          "You may not pass on the side where the blade is deployed",
          "You may pass only at a posted passing zone",
          "You may pass once you have sounded the horn",
        ],
        correctIndex: 1,
        explanation:
          "You may not overtake a snowplow with flashing yellow lights on the side where a plow blade is deployed. That is where the blade throws snow and ice.",
        context:
          "Utah adds a formation rule for the same reason: where three or more snowplows are operating in echelon, you may not pass on either side. The state's winter chapter sits behind both - snow tires on all four wheels, clearing every light and window before setting off, and remembering that bridges, ramps and overpasses freeze before the road does.",
        trap: "Flashing yellow normally means proceed with caution, and around a plow it means a specific prohibition instead.",
        excerptKey: "snowplow-no-pass",
        sourceLabel: "Utah Driver Handbook - Section 8.E Passing",
        sourceUrl: hb(34),
      },
      {
        id: "ut_s4_26",
        topic: "signs",
        question:
          "An X and the letters RR are painted on the pavement ahead of you. What are they for?",
        choices: [
          "They mark a railroad crossing ahead and tell you to be alert for a train",
          "They mark the boundary of a rail-only right of way",
          "They mark a stopping point for buses",
          "They mark a light rail platform",
        ],
        correctIndex: 0,
        explanation:
          "The pavement markings echo the advance warning sign: a stop line, an X and the letters RR painted before a crossing, telling you to expect a train.",
        context:
          "Three layers of warning surround a Utah crossing. The advance warning sign is round and yellow. The pavement markings repeat it on the road. The crossbuck stands at the crossing itself and is the yield sign for the tracks, with a smaller sign beneath it when there is more than one track.",
        trap: "The markings are a warning, not a stop line for every vehicle. Only certain vehicles have to stop at every crossing.",
        excerptKey: "railroad-pavement-markings",
        sourceLabel: "Utah Driver Handbook - Section 14.L Pavement Markings",
        sourceUrl: hb(87),
      },
      {
        id: "ut_s4_27",
        topic: "sharing",
        question:
          "How does the Utah handbook describe a train's right of way at a crossing?",
        choices: [
          "Trains yield to emergency vehicles",
          "The first to reach the crossing has the right of way",
          "Trains yield when the crossing has no gates",
          "Trains have the right of way 100 percent of the time",
        ],
        correctIndex: 3,
        explanation:
          "The handbook says trains have the right of way 100 percent of the time - over ambulances, fire engines, cars, police and pedestrians alike.",
        context:
          "The rest of the chapter explains why the rule has no exceptions. A typical locomotive weighs around 400,000 pounds and a 100-car train around 6,000 tons; the weight ratio of a car to a train is that of a soda can to a car. Trains can run either direction on any track at any time, modern ones are quieter than people expect, and one always arrives closer and faster than it looks.",
        trap: "Emergency vehicles override ordinary traffic rules and do not override this one.",
        excerptKey: "trains-right-of-way",
        sourceLabel: "Utah Driver Handbook - Section 14.L General Railroad Safety Information",
        sourceUrl: hb(88),
      },
      {
        id: "ut_s4_28",
        topic: "impairment",
        question:
          "How does Utah law define road rage?",
        choices: [
          "Any aggressive driving that frightens another road user",
          "Following another vehicle too closely on purpose",
          "A criminal offense committed by a driver, in response to something on the roadway, intending to endanger or intimidate someone in another vehicle",
          "Using the horn or headlights to express anger",
        ],
        correctIndex: 2,
        explanation:
          "Utah's definition has three parts that must all be present: a criminal offense, committed by a vehicle operator, in response to an incident on the roadway, with intent to endanger or intimidate someone in another vehicle.",
        context:
          "A court may suspend the license for a year on a first road rage conviction, and two citations enhanced as road rage within one year lead to revocation. Aggressive driving is defined separately and more broadly - moving violations that endanger people or property, or an assault with a vehicle on the occupants of another.",
        trap: "Rudeness is not the test. Something that would already be a criminal offense has to be there before the road rage label attaches.",
        excerptKey: "road-rage-definition",
        sourceLabel: "Utah Driver Handbook - Section 11.A Aggressive/Road Rage Driving",
        sourceUrl: hb(56),
      },
      {
        id: "ut_s4_29",
        topic: "parking",
        question:
          "When may you stop on a Utah runaway vehicle ramp?",
        choices: [
          "To let a passenger out",
          "When traffic on the grade is backed up",
          "To check your brakes on a long descent",
          "Only in an emergency that requires the ramp to stop your vehicle",
        ],
        correctIndex: 3,
        explanation:
          "The ramp exists for a vehicle that cannot stop any other way. Stopping, standing or parking on one, or in its path, is prohibited.",
        context:
          "The ramps sit on Utah's long mountain descents, where the handbook's braking advice applies: choose a safe speed before the grade rather than on it, use a low gear, and never coast in neutral or with the clutch in. Where a sign gives a maximum safe speed on a grade, that speed is a limit rather than a suggestion.",
        trap: "Blocking the ramp is worse than blocking a shoulder, because the driver who needs it has no alternative.",
        excerptKey: "runaway-ramp",
        sourceLabel: "Utah Driver Handbook - Section 9.B Runaway Vehicle Ramps",
        sourceUrl: hb(41),
      },
      {
        id: "ut_s4_30",
        topic: "speed",
        question:
          "A Utah motor-assisted scooter may not be operated on a highway with what posted speed limit?",
        choices: [
          "Greater than 15 mph",
          "Greater than 25 mph",
          "Greater than 35 mph",
          "Greater than 45 mph",
        ],
        correctIndex: 0,
        explanation:
          "Motor-assisted scooters are barred from any highway posted above 15 mph, and from any highway with four or more lanes.",
        context:
          "They are also prohibited in public parking structures and on public property posted against skateboards. A rider under 15 may only ride with parental supervision or a course certificate; from 16 they may ride unsupervised. Otherwise they follow the same rules as a bicycle, moped or motorcycle.",
        trap: "Fifteen miles an hour is the ROAD's posted limit, not the scooter's own speed, and almost no street qualifies.",
        excerptKey: "scooter-limits",
        sourceLabel: "Utah Driver Handbook - Section 14.E Motor-Assisted Scooters",
        sourceUrl: hb(81),
      },
      {
        id: "ut_s4_31",
        topic: "signals",
        question:
          "From how far away must a Utah vehicle's turn signals be visible in normal sunlight?",
        choices: ["50 feet", "100 feet", "300 feet", "500 feet"],
        correctIndex: 1,
        explanation:
          "One hundred feet. Two red, yellow or amber lights at the rear and two white, yellow or amber ones at the front, all visible from 100 feet in normal sunlight.",
        context:
          "Turn signals are not required on vehicles built before 1953 that are under 80 inches wide, which is why the handbook still teaches the hand and arm signals. Section 41-6a-804 gives them: arm out horizontally for left, arm up for right, arm down for stop or slowing, with a right-arm-out alternative for a cyclist.",
        trap: "One hundred feet is the signal figure and 500 feet is the tail and stop light figure. Mixing them up is easy because both appear on the same page.",
        excerptKey: "uca-hand-signals",
        sourceLabel: "Utah Code 41-6a-804 - Turning or changing lanes",
        sourceUrl: uca("804"),
      },
      {
        id: "ut_s4_32",
        topic: "licensing",
        question:
          "You are convicted of driving without insurance in Utah. What does the law require afterwards?",
        choices: [
          "A defensive driving course within 90 days",
          "An SR22 carried for three years, plus a $40 reinstatement fee",
          "Nothing beyond the fine",
          "A one-year license suspension",
        ],
        correctIndex: 1,
        explanation:
          "A conviction for driving without insurance, or without proof of it, brings a three-year SR22 requirement and a $40 reinstatement fee.",
        context:
          "The underlying offense is a class B misdemeanor and can cost the license, the registration and the plates. An SR22 is future proof of financial responsibility - evidence that you can pay for damage you cause - and it is also required after an unsatisfied judgment, in which case the three years run from reinstatement. Proof of insurance has to be in the vehicle and shown to any officer who asks, and may be shown electronically.",
        trap: "The SR22 is not insurance. It is a filing your insurer makes on top of a policy.",
        excerptKey: "sr22-three-years",
        sourceLabel: "Utah Driver Handbook - Section 12.D Insurance Coverage",
        sourceUrl: hb(69),
      },
      {
        id: "ut_s4_33",
        topic: "safety",
        question:
          "A thunderstorm catches you on a Utah road. What does the handbook say about shelter?",
        choices: [
          "Any vehicle is safe if the tires are rubber",
          "A convertible is safe with the roof up",
          "Only a hard-topped vehicle will protect you",
          "Stand beside the vehicle rather than inside it",
        ],
        correctIndex: 2,
        explanation:
          "Only a hard-topped vehicle offers protection, with the doors closed and the windows up. It is the metal shell doing the work, not the tires.",
        context:
          "The handbook adds two more instructions inside the vehicle: do not touch metal surfaces, and do not use a radio connected to an external antenna mounted on the vehicle. The safest place overall remains a well-constructed building with plumbing and electrical wiring.",
        trap: "Rubber tires are the folk explanation and they are not why a car is safer than open ground.",
        excerptKey: "lightning-hardtop",
        sourceLabel: "Utah Driver Handbook - Section 11.H Lightning",
        sourceUrl: hb(60),
      },
      {
        id: "ut_s4_34",
        topic: "emergencies",
        question:
          "Which vehicles may not carry flares or fuses in Utah?",
        choices: [
          "Vehicles transporting explosives, flammable liquids or compressed gas",
          "Passenger cars",
          "Vehicles over 80 inches wide",
          "Any vehicle carrying children",
        ],
        correctIndex: 0,
        explanation:
          "Flares and fuses may not be carried in vehicles transporting explosives, flammable liquids or compressed gas. Reflectors and electric lights do the same job without the flame.",
        context:
          "The rest of the flare advice is about handling them: keep the burning end away from your face and eyes, never attach one to the vehicle - which is both dangerous and illegal - and keep them clear of fuel leaks and spills. Trucks, truck tractors and buses have to carry three flares, reflectors or red electric lights plus two red flags.",
        trap: "This is a rule about the cargo, not the driver or the road, which is why it is easy to skip past.",
        excerptKey: "flares-explosives",
        sourceLabel: "Utah Driver Handbook - Section 16 Safe Use of Flares and Fuses",
        sourceUrl: hb(93),
      },
      {
        id: "ut_s4_35",
        topic: "rightOfWay",
        question:
          "A pedestrian crosses a Utah road mid-block, away from any crosswalk. Who has the right of way?",
        choices: [
          "The pedestrian, because pedestrians always have priority",
          "The pedestrian, once they are past the center line",
          "Neither - both must yield equally",
          "The vehicles on the roadway",
        ],
        correctIndex: 3,
        explanation:
          "A pedestrian crossing anywhere other than a marked or unmarked crosswalk yields to all vehicles on the roadway. The duty runs the other way from the crosswalk rule.",
        context:
          "Utah adds that a pedestrian must use a tunnel or overhead crossing where one exists, may not cross anywhere but a marked crosswalk between adjacent signalized intersections, and may not cross diagonally unless a traffic-control device authorizes it. None of that entitles a driver to hit them: the handbook is emphatic that drivers must look out for pedestrians everywhere, at all times.",
        trap: 'The "pedestrians always have the right of way" slogan is not Utah law, and the mid-block case is exactly where it fails.',
        excerptKey: "uca-pedestrian-yield-midblock",
        sourceLabel: "Utah Code 41-6a-1003 - Pedestrians yielding right-of-way",
        sourceUrl: uca("1003"),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Built from what Utah learners report getting wrong: the open-book myth, the definitions that overlap, the numbers that differ from the state next door, and the second exam nobody mentions.",
    questions: [
      {
        id: "ut_s5_01",
        topic: "licensing",
        question:
          "You are 15, applying for a Utah learner permit for the first time. Is the written knowledge test open book?",
        choices: [
          "Yes, the handbook is provided at the testing station",
          "Yes, but only for the signs section",
          "No - it is a closed-book test",
          "Only for applicants over 21",
        ],
        correctIndex: 2,
        explanation:
          "The Division's learner permit page says it outright: a 50-question closed-book test. There is no book at the terminal.",
        context:
          "The confusion is real and it has a source. A licensed driver moving to Utah from another state sits a much shorter exam that people consistently describe as open book, and their accounts are what circulate. A first-time applicant is not taking that exam. Study before you go, because the handbook will not be beside you.",
        trap: "The advice to skip studying because it is open book is the single most repeated piece of bad information about this test.",
        excerptKey: "dld-50-question-closed-book",
        sourceLabel: "Utah Driver License Division - Learner Permit",
        sourceUrl: PERMIT,
        commonlyMissed: true,
      },
      {
        id: "ut_s5_02",
        topic: "licensing",
        question:
          "You pass the 50-question written test and get your permit. What still stands between you and a permanent Utah license?",
        choices: [
          "Nothing beyond the driving skills test",
          "A second written test at the Division office",
          "A vision retest at 18",
          "The Traffic Safety and Trends Exam, which must be passed at 100 percent",
        ],
        correctIndex: 3,
        explanation:
          "Every first-time applicant must also pass the online Traffic Safety and Trends Exam with a perfect score. No permanent license is issued until it is done.",
        context:
          "It is four short videos and 40 questions, split into four sections of ten that you may stop between. You cannot start it until you have applied for a permit, because registration needs your permit number, and you may retake it as often as you need. Half the questions concern the leading causes of traffic deaths identified by the Utah Highway Safety Office.",
        trap: "The 100 percent belongs to this exam, not to the permit test - and the permit test's 80 percent does nothing for it.",
        excerptKey: "dld-trends-100-percent",
        sourceLabel: "Utah Driver License Division - Traffic Safety and Trends Exam",
        sourceUrl: TRENDS,
        commonlyMissed: true,
      },
      {
        id: "ut_s5_03",
        topic: "licensing",
        question:
          "Utah's definitions distinguish four words for losing a license. Which one means a temporary withdrawal?",
        choices: ["Suspension", "Denial", "Revocation", "Cancellation"],
        correctIndex: 0,
        explanation:
          "Suspension is the temporary one. Denial is a withdrawal of the privilege, revocation is termination of it, and cancellation is termination of a license issued in error or by fraud.",
        context:
          "Learners complain about these items more than almost any other, and the reason is that the everyday meanings of the four words blur while the handbook's do not. The distinction has consequences: after a suspension you wait it out, while after a revocation you reapply, pay reinstatement and regular fees, and sit the required examinations again.",
        trap: "Everyday speech treats suspended and revoked as the same thing. On this test they are two different answers.",
        excerptKey: "def-suspension",
        sourceLabel: "Utah Driver Handbook - Section 1 Definitions",
        sourceUrl: hb(3),
        commonlyMissed: true,
      },
      {
        id: "ut_s5_04",
        topic: "rules",
        question:
          "You are on I-15 in the left lane, doing exactly the posted limit, and a car comes up behind you. What does Utah require?",
        choices: [
          "Nothing, since you are at the legal limit",
          "Move safely to a lane on the right and let it pass",
          "Slow slightly so it can pass on the right",
          "Hold your lane, because passing on the right is illegal",
        ],
        correctIndex: 1,
        explanation:
          "A driver in the left general purpose lane who is overtaken must yield by moving safely to the right. Driving the limit does not excuse it.",
        context:
          "Section 41-6a-704 also forbids impeding the movement or free flow of traffic in that lane, and it fixes the following gap that triggers the duty at less than two seconds. The handbook's version is blunter: you can be issued a citation for impeding traffic if a vehicle is behind you in the left lane and you do not change lanes to let it pass.",
        trap: "The other driver may well be speeding, and that is a separate offense of theirs. It does not cancel your duty to move over.",
        excerptKey: "impeding-citation",
        sourceLabel: "Utah Driver Handbook - Section 9.B Freeway Driving",
        sourceUrl: hb(39),
        commonlyMissed: true,
      },
      {
        id: "ut_s5_05",
        topic: "sharing",
        question:
          "A school bus with flashing red lights is stopped on the opposite side of a five-lane road that has a shared center turn lane. What must you do?",
        choices: [
          "Stop, because five lanes means an undivided road",
          "Stop 20 feet short of the center lane",
          "Slow to 20 mph and pass",
          "Continue - only vehicles behind the bus must stop",
        ],
        correctIndex: 3,
        explanation:
          "On a highway of five or more lanes, which may include a shared center turn lane, only the traffic behind the bus has to stop. Opposing traffic keeps going.",
        context:
          "Utah's rule reads the road, not the lane count on its own. Two lanes: everyone stops. Four lanes with no median: everyone stops. Divided highway with a median: only behind. Five or more lanes with a center turn lane: only behind. Behind the whole scheme sits the handbook's warning that children are unpredictable and may run out whatever the law lets you do.",
        trap: "Four lanes with no median and five lanes with a turn lane sound similar and give opposite answers.",
        excerptKey: "school-bus-five-lane",
        sourceLabel: "Utah Driver Handbook - Section 8.H School Bus Stopping",
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "ut_s5_06",
        topic: "emergencies",
        question:
          "An ordinary car is stopped on the shoulder with its hazard lights flashing. Does Utah's move over law apply?",
        choices: [
          "No - it covers emergency vehicles only",
          "Only if the driver is outside the vehicle",
          "Only on interstates",
          "Yes - it covers any stationary vehicle outside a legal parking area with hazard lights on",
        ],
        correctIndex: 3,
        explanation:
          "Utah's move over duty extends to any stationary vehicle beside a highway that is not in an apparent legal parking area and has its hazard lights on. You slow, give room, and change lanes when it is practical.",
        context:
          "The same three-part duty applies to emergency vehicles showing red, red and white or red and blue lights, and to tow trucks and highway maintenance vehicles showing amber. If you are in the HOV lane you move out of it. A conviction forces a four-hour live classroom defensive driving course within 90 days, and missing it suspends the license for 90 days.",
        trap: "Most states wrote move over laws around police cars and ambulances. Utah's reaches the ordinary broken-down car as well.",
        excerptKey: "move-over-law",
        sourceLabel: "Utah Driver Handbook - Section 14.B Move Over Law",
        sourceUrl: hb(77),
        commonlyMissed: true,
      },
      {
        id: "ut_s5_07",
        topic: "rules",
        question:
          "Where should you be when you stop for a Utah railroad crossing that requires it?",
        choices: [
          "Between 15 and 50 feet from the nearest rail",
          "At least 10 feet from the nearest rail",
          "Between 20 and 40 feet from the nearest rail",
          "As close to the rail as you can safely get",
        ],
        correctIndex: 0,
        explanation:
          "More than 15 feet but not more than 50 feet from the nearest rail. Both ends of the band matter: too close is dangerous, and too far means you cannot see down the track.",
        context:
          "It is easy to confuse with the parking distance, which is 50 feet from the nearest rail. One says where to wait, the other says where you may leave the car. If a gate is down you wait for it to rise, and once you are moving you cross without stopping, without shifting gears, and without stopping on the tracks.",
        trap: "The 50 feet appears in both rules and means different things in each.",
        excerptKey: "railroad-15-to-50",
        sourceLabel: "Utah Driver Handbook - Section 8.H Stopping",
        sourceUrl: hb(35),
        commonlyMissed: true,
      },
      {
        id: "ut_s5_08",
        topic: "signals",
        question:
          "Which turn does Utah permit against a red light?",
        choices: [
          "A right turn only, after a complete stop, unless a sign forbids it",
          "A left turn from any street onto a one-way street",
          "A right turn without stopping, if the way is clear",
          "Any turn, after a complete stop, unless a sign forbids it",
        ],
        correctIndex: 0,
        explanation:
          "Right on red after a complete stop is the general rule, and a sign can take it away. The one-way to one-way left turn is a narrow addition rather than a general permission.",
        context:
          "The handbook introduces the left turn on red only as a way out of a red ARROW that will not change - from a one-way street onto a one-way street, when it is safe. Section 41-6a-305 frames the same movement slightly more broadly from a steady circular red. Both agree the street you leave and the street you join must both be one-way.",
        trap: "A left turn on red from a two-way street is not permitted in Utah under either reading.",
        excerptKey: "right-on-red",
        sourceLabel: "Utah Driver Handbook - Section 9.H Traffic Signals",
        sourceUrl: hb(46),
      },
      {
        id: "ut_s5_09",
        topic: "rules",
        question:
          "You are entering a Utah roundabout in 2026. What signal does the law require?",
        choices: [
          "A left signal, since you turn left into the circle",
          "A right signal on entry and again on exit",
          "None - no signal of intention to turn is required",
          "A two-second signal, as for any other turn",
        ],
        correctIndex: 2,
        explanation:
          "Section 41-6a-804(5) now says no signal of intention to turn is required entering or exiting a roundabout. The handbook credits House Bill 128, effective May 6 2026, with removing the requirement.",
        context:
          "Everything else about a Utah roundabout is unchanged: slow on the approach, yield to traffic already circulating and to pedestrians, enter when clear, and take your exit. The handbook's own 2026 laws page notes the change and its rules chapter does not repeat it, which is why the statute is the source worth reading here.",
        trap: "The two-second signaling rule still governs every other turn and lane change. This is the one place it has been switched off.",
        excerptKey: "uca-roundabout-no-signal",
        sourceLabel: "Utah Code 41-6a-804 - Turning or changing lanes",
        sourceUrl: uca("804"),
        commonlyMissed: true,
      },
      {
        id: "ut_s5_10",
        topic: "impairment",
        question:
          "A 25-year-old Utah driver blows 0.06. Is that over the limit?",
        choices: [
          "No - the limit is 0.08",
          "No, but it justifies a field sobriety test",
          "Only if the driver is visibly impaired",
          "Yes - Utah's limit is 0.05",
        ],
        correctIndex: 3,
        explanation:
          "Utah's adult threshold is 0.05, so 0.06 is over it. The state moved off 0.08 in December 2018 and remains the only one at 0.05.",
        context:
          "The offense is drafted as strict liability, so intent is beside the point, and it has a second limb that catches drivers below the number: being impaired to a degree that renders you incapable of operating a vehicle safely. Commercial drivers are at 0.04; anyone under 21 at no measurable amount at all.",
        trap: "Every national statistic, film and study guide says 0.08. In Utah that figure is simply wrong.",
        excerptKey: "uca-dui-005",
        sourceLabel: "Utah Code 41-6a-502 - Driving under the influence",
        sourceUrl: uca("502"),
        commonlyMissed: true,
      },
      {
        id: "ut_s5_11",
        topic: "parking",
        question:
          "You want to park near an intersection controlled by a stop sign, with a crosswalk across it. Which distance governs?",
        choices: [
          "20 feet from the crosswalk, since that is the nearer marking",
          "30 feet from the stop sign, which is the greater distance",
          "15 feet, the same as a hydrant",
          "Whichever the local ordinance sets",
        ],
        correctIndex: 1,
        explanation:
          "Both apply, so the greater distance controls: 30 feet from a stop sign, yield sign, flashing beacon or traffic signal, and 20 feet from a crosswalk.",
        context:
          "Utah's set of parking distances is small enough to memorize and close enough together to confuse: 15 feet from a hydrant, 20 feet from a crosswalk, 20 feet from a fire station driveway, 30 feet from a stop sign or signal, 50 feet from the nearest rail of a railroad crossing, and 75 feet opposite a signposted fire station entrance.",
        trap: "Satisfying one distance does not satisfy the other. Twenty feet clears the crosswalk and still leaves you inside the 30 feet the sign needs.",
        excerptKey: "uca-parking-hydrant-crosswalk",
        sourceLabel: "Utah Code 41-6a-1401 - Standing or parking vehicles",
        sourceUrl: uca("1401"),
      },
      {
        id: "ut_s5_12",
        topic: "speed",
        question:
          "A Utah highway carries no speed limit sign at all and is not an interstate or an urban district. What may you drive?",
        choices: ["45 mph", "55 mph", "65 mph", "Whatever is reasonable, since no limit is set"],
        correctIndex: 1,
        explanation:
          "Fifty-five miles an hour. Section 41-6a-601 sets 20 in a reduced-speed school zone, 25 in an urban district and 55 in other locations, and those speeds apply whether or not a sign says so.",
        context:
          "Above them sits the basic speed law, which forbids any speed greater than is reasonable and prudent for the existing conditions and lists the times it bites: intersections, railroad crossings, curves, hill crests, narrow or winding roads, pedestrians, weather and road conditions. Exceeding a limit is prima facie evidence that your speed was unreasonable.",
        trap: '"No sign means no limit" is one of the most common misreadings, and Utah drivers on forums report being asked exactly this.',
        excerptKey: "uca-speed-defaults",
        sourceLabel: "Utah Code 41-6a-601 - Speed regulations",
        sourceUrl: uca("601"),
        commonlyMissed: true,
      },
      {
        id: "ut_s5_13",
        topic: "safety",
        question:
          "You are on your Utah driving skills test. Which of these is an automatic failure?",
        choices: [
          "Stalling the engine once at a stop sign",
          "Taking two attempts at a parallel park",
          "The examiner having to take control of the vehicle",
          "Signaling later than the examiner expected",
        ],
        correctIndex: 2,
        explanation:
          "If the examiner has to take control, the test ends there. It sits on a short list of automatic failures alongside citations, disobeying signs or signals, rolling a stop, speeding, and failing to yield to pedestrians.",
        context:
          "The rest of the list: an avoidable collision or any contact with a vehicle, object or person; any unsafe act, or forcing another driver to take evasive action; putting the vehicle over a sidewalk or curb unnecessarily; and driving too fast or too slow. Everything else is scored rather than fatal, which is why a fumbled parallel park is survivable.",
        trap: "Driving too slowly is on the automatic-failure list as well as driving too fast, which surprises nervous candidates.",
        excerptKey: "automatic-failures",
        sourceLabel: "Utah Driver Handbook - Section 6.C Dangerous Actions/Automatic Failures",
        sourceUrl: hb(25),
      },
      {
        id: "ut_s5_14",
        topic: "sharing",
        question:
          "A Utah cyclist slows at a stop sign and rolls through without stopping. Is that lawful?",
        choices: [
          "Yes, if they slowed to a reasonable speed and yielded",
          "No - all vehicles must stop",
          "Only in a marked bicycle lane",
          "Only if the cyclist is under 16",
        ],
        correctIndex: 0,
        explanation:
          "Utah allows a cyclist to treat a stop sign as a yield: slow to a reasonable speed, then give way to pedestrians, to traffic in the intersection and to oncoming traffic that is an immediate hazard.",
        context:
          "It does not apply at an intersection with an active railroad grade crossing, and it changes nothing at all for a driver, for whom rolling a stop sign is a 50-point violation. The wider position is that bicycles are vehicles on Utah roadways with the same rights and duties, ridden as near as practicable to the right edge except when turning left, passing or avoiding hazards.",
        trap: "Seeing a cyclist do it lawfully does not make it lawful in a car. This is one of the few rules in the book that applies to one class of road user only.",
        excerptKey: "uca-bicycle-stop-sign",
        sourceLabel: "Utah Code 41-6a-1105 - Operation of bicycle or moped",
        sourceUrl: uca("1105"),
      },
      {
        id: "ut_s5_15",
        topic: "rightOfWay",
        question:
          "A pedestrian has crossed your half of a two-lane Utah road and is now on the far side. May you move?",
        choices: [
          "No - you must wait until they reach the far curb",
          "Yes - the handbook requires you to remain stopped only until they have cleared your half",
          "Only after sounding your horn",
          "Only if the crosswalk is marked",
        ],
        correctIndex: 1,
        explanation:
          "Vehicles must remain stopped until the pedestrian has crossed at least the driver's half of the road. Once they are past that, your half is clear.",
        context:
          "Two duties sit above the general rule. At a school crosswalk you make a complete stop whenever the crossing is occupied, however far across the person is. And you may never overtake a vehicle that has stopped at a crosswalk to let someone cross, because it is hiding them from you.",
        trap: "The school crosswalk rule is stricter than the general one, so the answer changes if there is a school crossing involved.",
        excerptKey: "pedestrian-stop",
        sourceLabel: "Utah Driver Handbook - Section 14.G Pedestrians",
        sourceUrl: hb(82),
      },
      {
        id: "ut_s5_16",
        topic: "signs",
        question:
          "A school bus ahead switches on flashing AMBER lights. What does Utah require?",
        choices: [
          "Stop immediately, as for red lights",
          "Ignore them - amber is for the bus driver's own use",
          "Slow down and pass with due care at no more than school zone speed",
          "Change lanes and maintain speed",
        ],
        correctIndex: 2,
        explanation:
          "Amber means the bus is about to stop. Section 41-6a-1302 tells you to slow the vehicle and pass only with due care and caution, at no greater speed than the school zone limit.",
        context:
          "The bus driver has to switch the ambers on at least 100 feet, and not more than 500 feet, before every stop where the reds will come on. So the amber is your warning that you will be stopping shortly, and the sensible response is to be ready rather than to accelerate past.",
        trap: "Amber is a warning and not yet a stop, which is why drivers who treat it as either extreme get it wrong in opposite directions.",
        excerptKey: "uca-school-bus-amber",
        sourceLabel: "Utah Code 41-6a-1302 - School bus, flashing amber lights",
        sourceUrl: uca("1302"),
        commonlyMissed: true,
      },
      {
        id: "ut_s5_17",
        topic: "impairment",
        question:
          "An 18-year-old Utah driver is stopped and shows a trace of alcohol, well under any adult limit. What happens?",
        choices: [
          "Nothing, since the reading is under 0.05",
          "A warning and a referral to an education program",
          "A six-month denial of all driving privileges under the Not-a-Drop Act",
          "A 120-day suspension, as for a first adult DUI",
        ],
        correctIndex: 2,
        explanation:
          "The Not-a-Drop Act denies all driving privileges for six months on a first offense for a driver under 21 with any measurable amount of alcohol in the body.",
        context:
          "A second offense within ten years of a prior denial costs two years or the wait until the driver turns 21, whichever is longer. The denial attaches even to someone who has never held a license. Reinstatement requires a substance-abuse assessment and recommendation, or evidence of completing a Prime For Life DUI class.",
        trap: "The 120-day figure is the adult first-DUI suspension, and it is shorter than what an under-21 driver gets for a trace.",
        excerptKey: "not-a-drop",
        sourceLabel: "Utah Driver Handbook - Section 10.B 21 and Under",
        sourceUrl: hb(52),
      },
      {
        id: "ut_s5_18",
        topic: "licensing",
        question:
          "How many points does running a red light put on a Utah driving record?",
        choices: ["35", "50", "60", "80"],
        correctIndex: 1,
        explanation:
          "Fifty points for a red light, and the same for a stop sign, improper lookout, improper passing and texting while driving.",
        context:
          "The schedule around it: reckless driving 80, failure to yield the right of way 60, following too closely 60, wrong way on a one-way street 60, and any other moving violation 40. Speeding runs from 35 to 75 points depending on how far over the limit you were. A driver under 21 is called to a hearing at 70 points in three years, an adult at 200.",
        trap: "Two 50-point violations put a provisional driver past the 70-point threshold, which is why the young-driver numbers bite so fast.",
        excerptKey: "points-schedule",
        sourceLabel: "Utah Driver Handbook - Section 13.F Point System",
        sourceUrl: hb(72),
      },
      {
        id: "ut_s5_19",
        topic: "rules",
        question:
          "You are on I-15 in the express lane and want to leave it. Where may you cross the line?",
        choices: [
          "Only at an access point marked with white dotted striping",
          "Anywhere the traffic beside you leaves a gap",
          "Anywhere, provided you signal for two seconds",
          "Only at an interchange exit ramp",
        ],
        correctIndex: 0,
        explanation:
          "Crossing the double white line is illegal. Movement in and out is only allowed at the marked access points, which use white dotted striping instead of the solid lines.",
        context:
          "Access points run about 3,000 feet and sit near almost every interchange, and the advice is to leave the express lanes one interchange before the one you want. The lane is free for vehicles carrying two or more people, motorcycles, buses and registered clean-fuel vehicles with a C decal; a single occupant needs an express pass and a funded account.",
        trap: "Being followed by an emergency vehicle with flashing lights is the one situation where a right-hand lane change out of the express lane is permitted.",
        excerptKey: "express-lane-double-white",
        sourceLabel: "Utah Driver Handbook - Section 9.B Carpool (Express) Lane",
        sourceUrl: hb(40),
      },
      {
        id: "ut_s5_20",
        topic: "emergencies",
        question:
          "A fire engine has stopped at a building to answer an alarm. What does the law forbid?",
        choices: [
          "Passing on the far side of the street",
          "Driving past at more than 20 mph",
          "Nothing, once the engine is stationary",
          "Stopping your vehicle within 500 feet of it",
        ],
        correctIndex: 3,
        explanation:
          "You may not stop your vehicle within 500 feet of a fire apparatus that has stopped to answer a fire alarm, and unless you are on official business you may not follow a responding fire vehicle within 500 feet.",
        context:
          "The handbook adds that you may not drive or park on the same block where a fire vehicle has stopped to answer an alarm. The same section prohibits passing a moving emergency vehicle that is using its lights or siren, and requires you to pull right and stop for one approaching from behind.",
        trap: "Two different 500-foot rules live in the same paragraph - one about following, one about stopping.",
        excerptKey: "uca-follow-emergency-500",
        sourceLabel: "Utah Code 41-6a-904 - Approaching emergency vehicle",
        sourceUrl: uca("904"),
      },
      {
        id: "ut_s5_21",
        topic: "safety",
        question:
          "A Utah examiner is watching you change lanes. What are they specifically looking for?",
        choices: [
          "Mirror check, a signal held at least two seconds, and a head check over your shoulder",
          "A signal and a mirror check, since the camera covers the blind spot",
          "Smooth steering and constant speed only",
          "A hand signal in addition to the indicator",
        ],
        correctIndex: 0,
        explanation:
          "The handbook's sequence is mirrors, then a signal held for at least two seconds, then a head check over the shoulder in the direction you are moving, then the move itself and cancelling the signal.",
        context:
          "The skills test asks for multiple lane changes deliberately. The scoring sheet also covers driving posture, use of lanes, left, right and three-point turns, starting and stopping, hill and parallel parking, observance of signs and signals, backing, U-turns, steering coordination and attention at intersections. Both hand-over-hand and pull-push steering are acceptable.",
        trap: "Utah learners report losing points for relying on mirrors and cameras. The examiner is scoring the visible head check, not whether you saw the car.",
        excerptKey: "lane-change-steps",
        sourceLabel: "Utah Driver Handbook - Section 8.C Lane Changes",
        sourceUrl: hb(30),
        commonlyMissed: true,
      },
      {
        id: "ut_s5_22",
        topic: "signals",
        question:
          "You are stopped at a red arrow that will not change and you have been there for a minute. You are in a car. What may you do?",
        choices: [
          "Proceed after 90 seconds, as a motorcycle may",
          "Treat the signal as inoperative and go after stopping",
          "Nothing - you must wait for an indication to proceed",
          "Reverse and take a different route",
        ],
        correctIndex: 2,
        explanation:
          "The 90-second allowance is written for motorcycles, mopeds and bicycles, which are light enough that a loop detector can miss them. A car has no equivalent.",
        context:
          "Read exactly, that provision is an affirmative defense available to a rider aged 16 or over who stopped completely, waited at least 90 seconds, and confirmed that no vehicle entitled to the right of way and no pedestrian was there. It does not apply at an active railroad grade crossing. A genuinely dead signal is a different situation: you stop, then yield to any vehicle on your right.",
        trap: "The rule is easy to remember and easy to over-apply, because a car sitting at a stubborn light feels like exactly the same problem.",
        excerptKey: "uca-dead-red-90",
        sourceLabel: "Utah Code 41-6a-305 - Traffic-control signal",
        sourceUrl: uca("305"),
        commonlyMissed: true,
      },
      {
        id: "ut_s5_23",
        topic: "parking",
        question:
          "You park uphill on a Utah street with a curb. Which way do the wheels turn?",
        choices: [
          "Toward the curb, so the tire rests against it",
          "Away from the curb, letting the tire roll back against it",
          "Straight, with the parking brake set",
          "Toward the center of the road on any grade",
        ],
        correctIndex: 1,
        explanation:
          "Uphill with a curb, the wheels turn away from it, and the vehicle settles back until the front tire touches the curb. Downhill is the opposite: wheels toward the curb.",
        context:
          "With no curb at all on an uphill slope, the handbook says to turn the wheel to the right so a rolling vehicle would leave the road rather than cross into traffic. In every case you also put the vehicle in park and set the parking brake, and Section 41-6a-1403 makes turning the wheels a legal requirement on any perceptible grade.",
        trap: "Learning it as a single rule guarantees getting one slope wrong. There are two positions and the slope picks which.",
        excerptKey: "hill-park-uphill",
        sourceLabel: "Utah Driver Handbook - Section 8.D Hill Parking",
        sourceUrl: hb(32),
      },
      {
        id: "ut_s5_24",
        topic: "speed",
        question:
          "How much does Utah's two-second following rule change on the freeway?",
        choices: [
          "It rises to three seconds",
          "It rises to four seconds",
          "It does not change - two seconds is the freeway figure too",
          "It falls to one second, because speeds are steadier",
        ],
        correctIndex: 2,
        explanation:
          "The handbook prints the same two seconds for freeway driving as for everything else, and adds only that the time needs to increase under adverse conditions.",
        context:
          "Two seconds is a legal minimum, not a target. The handbook wants more of it in bad weather or poor visibility, more of it at night by at least two extra seconds, and more of it behind a motorcycle on a wet road. Following too closely is a 60-point violation and the handbook's own crash statistics put it as the leading cause of all crashes on Utah highways.",
        trap: "The freeway feels like it should demand more, and Utah simply repeats the same number rather than raising it.",
        excerptKey: "freeway-two-seconds",
        sourceLabel: "Utah Driver Handbook - Section 9.B Freeway Driving",
        sourceUrl: hb(39),
      },
      {
        id: "ut_s5_25",
        topic: "sharing",
        question:
          "Utah's three-foot passing rule protects a long list of road users. Which of these is NOT on the statutory list?",
        choices: [
          "A person on a skateboard",
          "A person riding a horse",
          "A person driving a golf cart",
          "A person in a car with a flat tire",
        ],
        correctIndex: 3,
        explanation:
          "The list covers people, not vehicles with occupants. Pedestrians, road workers, riders on animals, skateboarders, roller and in-line skaters, cyclists, e-bike riders, mobility device users, mopeds, scooters, motorcyclists, manual wheelchair users and golf carts are all in it. A driver sitting in a car is not.",
        context:
          "Section 41-6a-706.5 makes it an offense to operate within three feet of a vulnerable user, and separately to distract one, force one off the road, or blow exhaust at one. The offense rises to a class C misdemeanor if it causes bodily injury. A stopped car with hazard lights is protected instead by the move over law.",
        trap: "Golf carts genuinely are on the list, which is the surprise. The disabled car is protected by a different rule entirely.",
        excerptKey: "uca-three-feet",
        sourceLabel: "Utah Code 41-6a-706.5 - Vulnerable user of a highway",
        sourceUrl: uca("706.5"),
      },
      {
        id: "ut_s5_26",
        topic: "rightOfWay",
        question:
          "Two cars arrive at a four-way stop, and the one on your left arrived clearly before you. Who goes?",
        choices: [
          "The driver on the left, because they arrived first",
          "You, because the vehicle on the right always goes first",
          "Whoever is going straight",
          "Whoever signals first",
        ],
        correctIndex: 0,
        explanation:
          "Order of arrival comes first. The right-hand rule is a tie-breaker for simultaneous arrival, not a standing priority.",
        context:
          "The handbook lists the yields in order: a driver who is at the intersection before you, oncoming traffic when you are turning left, the driver on your right if you arrived at the same time, traffic on a public road when you are leaving a driveway, traffic already on an interstate when you are on the ramp, and pedestrians and cyclists still in the intersection.",
        trap: '"The car on the right goes first" is repeated so often that people apply it to arrivals that were not simultaneous at all.',
        excerptKey: "yield-list",
        sourceLabel: "Utah Driver Handbook - Section 9.J Yielding Right-of-Way",
        sourceUrl: hb(50),
        commonlyMissed: true,
      },
      {
        id: "ut_s5_27",
        topic: "impairment",
        question:
          "You commit one moving violation while reaching into the back seat for a bag. What has Utah's definition captured?",
        choices: [
          "Reckless driving",
          "Careless driving",
          "Aggressive driving",
          "Nothing beyond the moving violation itself",
        ],
        correctIndex: 1,
        explanation:
          "A single moving violation committed while distracted by an activity inside the vehicle unrelated to driving is careless driving. The handbook names searching for an item and attending to personal hygiene or grooming.",
        context:
          "The other limb of the definition needs two or more moving violations within one continuous period of driving. Careless driving carries 50 points on the Division's schedule and a judge may order the license revoked on conviction. Reckless driving is different and worse - willful or wanton disregard for safety, at 80 points.",
        trap: "It is not a lesser word for reckless driving. The distraction limb makes it reachable from a single ordinary mistake.",
        excerptKey: "def-careless-driving",
        sourceLabel: "Utah Driver Handbook - Section 1 Definitions",
        sourceUrl: hb(1),
      },
      {
        id: "ut_s5_28",
        topic: "signs",
        question:
          "The traffic signals at a Utah single-point urban interchange go dark in a power cut. How is the intersection handled?",
        choices: [
          "As a four-way stop",
          "As a yield for all approaches",
          "It closes automatically",
          "Not as a four-way stop - proceed with extreme caution until an officer arrives",
        ],
        correctIndex: 3,
        explanation:
          "The handbook flags this one specially: a single-point urban interchange is not treated like a four-way stop. You proceed with extreme caution and courtesy until control arrives.",
        context:
          "Most of these interchanges have battery backup, and where there is none an officer is dispatched for traffic control. The general rule for an ordinary dead signal is different - stop before entering, then yield to any vehicle on your right - which is exactly why the handbook singles this case out.",
        trap: "The four-way stop answer is right for almost every other intersection in the state, and wrong here.",
        excerptKey: "spui-power-outage",
        sourceLabel: "Utah Driver Handbook - Section 9.B Single-Point Urban Interchange",
        sourceUrl: hb(41),
      },
      {
        id: "ut_s5_29",
        topic: "safety",
        question:
          "How much does the Utah handbook say a 150-pound person's body weighs against the restraint in a 30 mph crash?",
        choices: ["450 pounds", "1,500 pounds", "4,500 pounds", "15,000 pounds"],
        correctIndex: 2,
        explanation:
          "Four thousand five hundred pounds - weight multiplied by speed. The handbook's point is that no amount of bracing can hold against that.",
        context:
          "The rest of its safety belt evidence is in the same register: your chances of being killed are 23 times greater if you are thrown from a car, 70 percent of crashes happen below 40 mph, three out of four fatal crashes happen within 25 miles of home, and roughly two out of three Utah motor vehicle deaths would not happen if belts were worn.",
        trap: "The figure exists to kill the idea of bracing yourself, which is the reason people give for not belting up on a short trip.",
        excerptKey: "safety-belt-force",
        sourceLabel: "Utah Driver Handbook - Section 7.C Safety Belt Facts",
        sourceUrl: hb(28),
      },
      {
        id: "ut_s5_30",
        topic: "licensing",
        question:
          "You already hold a learner permit but let it expire before getting a license. What happens to your written test score?",
        choices: [
          "It stays valid for five years",
          "It is void and the written knowledge test must be retaken",
          "It transfers automatically to the new permit",
          "It stays valid if the permit lapsed by less than 30 days",
        ],
        correctIndex: 1,
        explanation:
          "Renewing or letting an entry-level permit expire means retaking the written knowledge test. The score and the permit both run for 18 months.",
        context:
          "The Division lists other situations that force additional testing too: an expired learner permit, failure to finish the application process within six months of applying, and previous testing that has expired. All tests must be completed within six months of the day you pay the fee.",
        trap: "The 18 months looks generous until a 15 year old sits the test early and reaches 16 and a half before the license appointment.",
        excerptKey: "permit-scores-18-months",
        sourceLabel: "Utah Driver Handbook - Section 3.B Entry-Level Learner Permit",
        sourceUrl: hb(7),
      },
      {
        id: "ut_s5_31",
        topic: "rules",
        question:
          "You are driving in the outside lane of a Utah freeway and realise your exit is one lane over, past a solid white line beside the ramp. What may you do?",
        choices: [
          "Cross the gore area quickly while it is clear",
          "Cross only if you signal for two seconds first",
          "Stop on the shoulder and reverse to the ramp",
          "Continue to the next exit",
        ],
        correctIndex: 3,
        explanation:
          "Crossing the gore area is against the law and so is backing up on a freeway. The only lawful option left is to carry on and turn around later.",
        context:
          "The gore is the painted area between the solid white lines separating a through lane from an entering or exiting lane, and it appears wherever ramps join or highways split. The related prohibitions travel with it: no driving or stopping in the emergency lane outside the solid white line, and no using an entrance ramp as an exit even in a jam.",
        trap: "A signal does not make an unlawful movement lawful. The gore is not a lane you may enter at all.",
        excerptKey: "gore-area",
        sourceLabel: "Utah Driver Handbook - Section 8.C Merging and Gore Area",
        sourceUrl: hb(31),
      },
      {
        id: "ut_s5_32",
        topic: "emergencies",
        question:
          "Utah's handbook gives a specific warning about attending to a breakdown on a freeway. What is it?",
        choices: [
          "Stay in the vehicle as much as possible and keep walking on the road to a minimum",
          "Stand well in front of the vehicle so approaching drivers see you",
          "Change the tire on the traffic side if that is where the flat is",
          "Walk to the nearest exit rather than waiting",
        ],
        correctIndex: 0,
        explanation:
          "Motorists have been killed attending to flat tires and empty fuel tanks on Utah roadsides. The instruction is to stay in the vehicle where you can and keep time on the road to a minimum.",
        context:
          "The rest of the routine is to get the vehicle off the road or off the freeway entirely, accepting a shredded tire over the risk, put the hazard lights on and the hood up, attach something white or orange to the antenna or door handle, and call for help. The handbook is explicit that a bent rim is better than your life.",
        trap: "The instinct is to get out and be visible, and standing beside a vehicle on a freeway shoulder is exactly the exposure the warning is about.",
        excerptKey: "breakdown-stay-in-vehicle",
        sourceLabel: "Utah Driver Handbook - Section 12.B Emergencies and Avoiding Crashes",
        sourceUrl: hb(66),
      },
      {
        id: "ut_s5_33",
        topic: "parking",
        question:
          "You leave your car running with the key in it while you run into a shop. What does Utah law say?",
        choices: [
          "It is permitted if the doors are locked",
          "It is permitted for under two minutes",
          "It is prohibited - an unattended vehicle needs the engine stopped and the key removed",
          "It is prohibited only in a business district",
        ],
        correctIndex: 2,
        explanation:
          "Section 41-6a-1403 forbids letting a vehicle stand unattended without stopping the engine, locking the ignition and removing the key, putting it in park or low or reverse, and setting the brakes.",
        context:
          "The handbook says the same thing more briefly: when you leave your vehicle, stop the motor, set the parking brake and lock the doors. On any perceptible grade the front wheels go to the curb or the side of the road as well.",
        trap: "Warming a car up on a winter morning is the everyday version of this, and Utah's cold-weather chapter never carves out an exception for it.",
        excerptKey: "uca-unattended-vehicle",
        sourceLabel: "Utah Code 41-6a-1403 - Motor vehicle left unattended",
        sourceUrl: uca("1403"),
      },
      {
        id: "ut_s5_34",
        topic: "signals",
        question:
          "You need to make a left turn but the signal has no arrow of any kind, just a solid green. What have you got?",
        choices: [
          "A permitted turn - you may turn once you have yielded to oncoming traffic",
          "A protected turn, because no arrow means no conflicting movement",
          "No permission to turn left at all",
          "A permitted turn only when a sign says so",
        ],
        correctIndex: 0,
        explanation:
          "A solid green is a permitted left. You may enter the intersection and turn once oncoming traffic and pedestrians allow it.",
        context:
          "The handbook groups the three indications a left-turning driver may face: the green arrow is protected, the solid green is permitted, and the flashing yellow arrow is permitted. Only the arrow holds the oncoming traffic. Section 41-6a-305 adds that a circular green does not survive a sign at the intersection prohibiting the turn.",
        trap: "Sitting in the intersection waiting for a gap is correct; entering it on a solid green and then finding no gap is where drivers end up stranded when the light changes.",
        excerptKey: "left-turn-three-indications",
        sourceLabel: "Utah Driver Handbook - Section 9.I Traffic Signs",
        sourceUrl: hb(46),
      },
      {
        id: "ut_s5_35",
        topic: "speed",
        question:
          "How does the Utah handbook describe the effect of speed on your ability to see at night?",
        choices: [
          "Speed has no effect on night vision",
          "Driving the posted limit at night may still be too fast for the distance you can see",
          "Night speeds are automatically 10 mph below the posted limit",
          "High beams remove the problem entirely",
        ],
        correctIndex: 1,
        explanation:
          "The handbook says the law requires a reasonable and prudent speed, and that at night driving the posted limit may be too fast. Your headlights fix how far ahead you can see, and speed fixes how much of that distance you need.",
        context:
          "The rest of the night advice: use your lights whenever conditions stop you seeing 1,000 feet ahead, add at least two seconds to your following distance, dim high beams within 500 feet of an oncoming vehicle and 300 feet behind one, look at the right edge of the road if an oncoming driver will not dim, and never wear tinted lenses after dark.",
        trap: "The posted limit is set for daylight and dry pavement. Nothing about it changes at night, which is exactly why the basic speed law has to do the work.",
        excerptKey: "night-following-distance",
        sourceLabel: "Utah Driver Handbook - Section 11.J Night Driving",
        sourceUrl: hb(61),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix the real Utah test uses. No hints, no themed run of one topic - just the test.",
    questions: [
      {
        id: "ut_s6_01",
        topic: "signs",
        question: "What does a diamond-shaped yellow sign do?",
        choices: [
          "Warns of possible danger ahead",
          "Sets a rule you must obey",
          "Marks a work zone",
          "Guides you to a service or town",
        ],
        correctIndex: 0,
        explanation:
          "A yellow diamond is a warning. It tells you something is coming that you should slow for, and it carries no obligation of its own beyond the basic speed law.",
        context:
          "Utah's shape and color system: octagon for stop, downward triangle for yield, yellow diamond for warning, orange for work zones, white rectangle with black, red or green lettering for regulatory instructions, and green, brown or blue rectangles for guidance.",
        trap: "An advisory speed on a yellow plate under a curve sign is guidance, while a black-on-white speed limit sign is law.",
        excerptKey: "warning-signs",
        sourceLabel: "Utah Driver Handbook - Section 9.I Warning Signs",
        sourceUrl: hb(48),
      },
      {
        id: "ut_s6_02",
        topic: "impairment",
        question: "What is the DUI threshold for a Utah commercial driver?",
        choices: ["0.02", "0.04", "0.05", "0.08"],
        correctIndex: 1,
        explanation:
          "0.04 for a commercial driver, against 0.05 for an ordinary driver aged 21 or over and no measurable amount for anyone under 21.",
        context:
          "A commercial license also carries a consequence a regular one does not: a DUI plea held in abeyance by the court will not appear on the ordinary record but does disqualify the CDL privilege, and it counts as a prior offense afterwards.",
        trap: "Three different thresholds apply to three different groups of Utah driver, and none of them is 0.08.",
        excerptKey: "bac-005",
        sourceLabel: "Utah Driver Handbook - Section 10.C Alcohol and the Law",
        sourceUrl: hb(52),
      },
      {
        id: "ut_s6_03",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light and a pedestrian steps into the crosswalk you are turning across. What must you do?",
        choices: [
          "Complete the turn, since you entered the intersection first",
          "Sound the horn and continue slowly",
          "Yield to the pedestrian",
          "Reverse out of the intersection",
        ],
        correctIndex: 2,
        explanation:
          "A green light subordinates your movement to anyone lawfully in the intersection or the adjacent crosswalk, and the handbook asks for extra care specifically because so many pedestrian crashes happen during turns.",
        context:
          "The handbook's advice is to take extra care when turning and look twice for pedestrians, to slow and be prepared to stop when entering a crosswalk, and never to assume the right of way. Failure to yield the right of way is the second leading cause of crashes on Utah highways.",
        trap: "Being partway through the turn does not transfer the priority to you.",
        excerptKey: "uca-signal-green",
        sourceLabel: "Utah Code 41-6a-305 - Traffic-control signal",
        sourceUrl: uca("305"),
      },
      {
        id: "ut_s6_04",
        topic: "rules",
        question: "How long must a Utah signal run before you begin a turn?",
        choices: [
          "Continuously for at least the last two seconds",
          "Continuously for at least the last three seconds",
          "For at least 100 feet",
          "For as long as it takes to check your mirrors",
        ],
        correctIndex: 0,
        explanation:
          "Section 41-6a-804 requires a continuous signal for at least the last two seconds before the movement begins. Utah measures signals in time rather than in distance.",
        context:
          "The same two seconds covers a lane change. Signals are also required when you pull to or from a curb, and a stop or sudden decrease in speed needs a signal to the driver behind where there is opportunity to give one. The 2026 exemption for roundabouts is the only place the requirement disappears.",
        trap: "Several neighboring states use a distance instead. Utah's number is a duration.",
        excerptKey: "uca-signal-two-seconds",
        sourceLabel: "Utah Code 41-6a-804 - Turning or changing lanes",
        sourceUrl: uca("804"),
      },
      {
        id: "ut_s6_05",
        topic: "sharing",
        question:
          "How far back should you stay behind a motorcycle in Utah?",
        choices: ["One second", "At least two seconds", "At least three seconds", "At least four seconds"],
        correctIndex: 1,
        explanation:
          "At least two seconds, and more when the road is wet. Utah uses the same two seconds it uses for cars.",
        context:
          "The reason for extra room in the wet is that riders change speed and lane position suddenly to avoid potholes, gravel, slick patches, pavement seams and railroad crossings that a car would ride over without noticing. Give a motorcycle a whole lane, check mirrors and blind spots for them, and do not assume a flashing signal means a turn.",
        trap: "The handbook's advice for a truck is different again - there you stay far enough back to see the driver's mirrors.",
        excerptKey: "motorcycle-follow-two",
        sourceLabel: "Utah Driver Handbook - Section 14.F Motorcycles",
        sourceUrl: hb(81),
      },
      {
        id: "ut_s6_06",
        topic: "parking",
        question: "Which of these is a lawful place to park in Utah?",
        choices: [
          "On a bridge, if the shoulder is wide",
          "In a marked parking bay beside a red-painted curb",
          "Within 15 feet of a fire hydrant, if you stay with the vehicle",
          "Beside a curb, 10 inches out, on a level street",
        ],
        correctIndex: 3,
        explanation:
          "Ten inches from the curb is inside the 12-inch limit, so it is lawful. Bridges, red curbs and the space within 15 feet of a hydrant are all prohibited.",
        context:
          "Staying with the vehicle changes nothing, because Utah's statute covers stopping and standing as well as parking, with only a narrow exception for momentarily picking up or dropping a passenger. Red painted curbs and red zones are on the prohibited list in their own right.",
        trap: "Sitting in the car with the engine running is not a defense to any of the prohibitions except the momentary passenger one.",
        excerptKey: "park-12-inches",
        sourceLabel: "Utah Driver Handbook - Section 8.D Hill Parking",
        sourceUrl: hb(33),
      },
      {
        id: "ut_s6_07",
        topic: "speed",
        question:
          "You are approaching the crest of a hill on a Utah highway posted at 55. What does the law expect?",
        choices: [
          "Slow down, because a hill crest is one of the situations the basic speed law names",
          "Maintain 55 to keep traffic flowing",
          "Nothing, unless a warning sign is posted",
          "Slow to 35, the statutory crest speed",
        ],
        correctIndex: 0,
        explanation:
          "A hill crest is one of the situations Section 41-6a-601 names where a speed under the posted limit may be the only reasonable and prudent one, because you cannot see what is on the far side.",
        context:
          "The full list also covers approaching and crossing an intersection or railroad grade crossing, going around a curve, narrow or winding roads, pedestrians, other traffic, weather and road conditions, and any speed at which you cannot keep the vehicle in a single lane. Exceeding a posted limit is prima facie evidence that the speed was not reasonable.",
        trap: "There is no separate numeric crest speed. The duty is to slow to whatever the sight distance allows.",
        excerptKey: "uca-basic-speed",
        sourceLabel: "Utah Code 41-6a-601 - Speed regulations",
        sourceUrl: uca("601"),
      },
      {
        id: "ut_s6_08",
        topic: "signals",
        question: "What must you do at a steady red light before turning right?",
        choices: [
          "Slow and check for traffic",
          "Yield to the cross traffic",
          "Come to a complete stop",
          "Wait for a gap of at least four seconds",
        ],
        correctIndex: 2,
        explanation:
          "The stop is the condition of the turn. Section 41-6a-305 requires you to stop at a marked stop line, or before the crosswalk if there is none, and only then to cautiously enter the intersection to turn right.",
        context:
          "Having stopped, you still yield to any vehicle moving through the intersection on its own signal and to any pedestrian lawfully in the adjacent crosswalk. A sign forbidding the turn removes the permission entirely, and a red arrow for a right turn prohibits it outright.",
        trap: "Yielding is required as well as stopping, but yielding without stopping does not satisfy the rule.",
        excerptKey: "uca-right-on-red",
        sourceLabel: "Utah Code 41-6a-305 - Traffic-control signal",
        sourceUrl: uca("305"),
      },
      {
        id: "ut_s6_09",
        topic: "safety",
        question:
          "Which of these does the Utah handbook list as a warning sign of drowsiness?",
        choices: [
          "Gripping the wheel more tightly than usual",
          "Feeling cold",
          "Checking mirrors more often",
          "Not remembering the last few miles you drove",
        ],
        correctIndex: 3,
        explanation:
          "Not remembering the last few miles is on the handbook's list, along with drifting from your lane or hitting a rumble strip, wandering thoughts, repeated yawning, trouble keeping your eyes open, tailgating, missing signs and near misses.",
        context:
          "The response it wants is not coffee or fresh air but stopping: pull off at an exit or rest area for a 20-minute power nap, or find somewhere to sleep for the night. Plan a stop every two hours on a long trip, avoid driving late at night, and check whether any medicine you take causes drowsiness.",
        trap: "Fatigue sits in the same chapter as distraction rather than being treated as tiredness you can push through.",
        excerptKey: "power-nap",
        sourceLabel: "Utah Driver Handbook - Section 11.D Fatigue",
        sourceUrl: hb(58),
      },
      {
        id: "ut_s6_10",
        topic: "licensing",
        question:
          "A Utah driver under 18 may use a handheld wireless device while driving in which situation?",
        choices: [
          "To change music using voice commands",
          "To use a navigation app",
          "To take a call from a friend using a hands-free system",
          "To communicate with a parent or legal guardian",
        ],
        correctIndex: 3,
        explanation:
          "Under 18, the permitted uses are a medical emergency, reporting a safety hazard, reporting criminal activity, and communicating with a parent or legal guardian. Nothing else.",
        context:
          "Drivers over 18 may talk on a handheld device provided voice commands are used to connect the call, and may use navigation, report hazards, report criminal activity and handle medical emergencies. Manual texting, emailing, dialling, browsing, recording, photographing and entering data are prohibited for everyone. A texting conviction is a class C misdemeanor with a maximum $100 fine, and it carries 50 points.",
        trap: "Hands-free calling is an adult allowance. A 17 year old does not get it just because the phone is in a cradle.",
        excerptKey: "hwc-under-18",
        sourceLabel: "Utah Driver Handbook - Section 11.F Handheld Wireless Communication Device",
        sourceUrl: hb(59),
      },
      {
        id: "ut_s6_11",
        topic: "emergencies",
        question:
          "Your accelerator sticks open on a Utah freeway. What is the first move?",
        choices: [
          "Switch off the engine",
          "Brake hard and hold",
          "Shift into neutral",
          "Steer onto the shoulder and let the car slow itself",
        ],
        correctIndex: 2,
        explanation:
          "Neutral first. It disconnects the engine from the wheels while you still have power steering and brakes, and then you look for a safe place to pull off.",
        context:
          "Switching off the engine costs you the power assistance for both steering and brakes, which is why it is not the first step. The handbook's sequence is neutral, find somewhere to stop, steer smoothly, brake gently, pull off the road.",
        trap: "Turning the key off feels decisive and makes the car much harder to control at speed.",
        excerptKey: "stuck-gas-pedal",
        sourceLabel: "Utah Driver Handbook - Section 12.B Stuck Gas Pedal",
        sourceUrl: hb(67),
      },
      {
        id: "ut_s6_12",
        topic: "rules",
        question:
          "Where may you not change lanes on a Utah road?",
        choices: [
          "While proceeding through an intersection",
          "Within 100 feet of a driveway",
          "On any road with more than two lanes each way",
          "Within 200 feet of a bus stop",
        ],
        correctIndex: 0,
        explanation:
          "The handbook is explicit: never attempt to change lanes while driving through an intersection, and wait until you are completely clear of it before moving to a different lane.",
        context:
          "The same lane-discipline section requires you to stay within designated lanes, not to drive over curbs, sidewalks or painted lane markings except for a legal and safe maneuver, to finish a turn in the corresponding lane, and to move back to the far-right lane unless you are passing or the lane is blocked.",
        trap: "It is not about the marking. Even where the paint is dashed through the intersection, the lane change waits.",
        excerptKey: "no-lane-change-in-intersection",
        sourceLabel: "Utah Driver Handbook - Section 8.C Proper Lane Usage",
        sourceUrl: hb(31),
      },
      {
        id: "ut_s6_13",
        topic: "signs",
        question:
          "You reach a crossing where the lights are flashing but no train is in sight. What may you do?",
        choices: [
          "Cross carefully after looking both ways",
          "Cross once the bells stop",
          "Wait - you may not proceed while the lights are flashing",
          "Cross if the gate is up",
        ],
        correctIndex: 2,
        explanation:
          "Flashing lights require a complete stop and you may not proceed while they are flashing. A train you cannot see yet is precisely what they are for.",
        context:
          "There is one narrow exception, for a driver who suspects the lights are malfunctioning: after stopping completely, you may cross only if you have a clear line of sight of at least one mile down the tracks in both directions, there is no evidence of an approaching train, and the crossing can be made safely.",
        trap: "The exception needs a mile of clear sight in BOTH directions, which almost no crossing offers.",
        excerptKey: "railroad-flashing-lights",
        sourceLabel: "Utah Driver Handbook - Section 14.L Trains and Railroad Crossings",
        sourceUrl: hb(86),
      },
      {
        id: "ut_s6_14",
        topic: "impairment",
        question:
          "How long does a first DUI conviction suspend a Utah license for a driver aged 21 or over?",
        choices: ["90 days", "120 days", "One year", "Two years"],
        correctIndex: 1,
        explanation:
          "One hundred and twenty days for a first conviction at 21 or over. A second or subsequent offense costs two years.",
        context:
          "The Division may start the suspension between the 45th and 60th day after the arrest rather than after the conviction. A first DUI also carries an 18-month ignition interlock restriction, or three years if the driver was under 21 when arrested, and the alcohol-restricted status that goes with it runs two, three, five or ten years depending on the history.",
        trap: "The 18-month figure attached to a first DUI is the interlock restriction, not the suspension.",
        excerptKey: "dui-first-suspension",
        sourceLabel: "Utah Driver Handbook - Section 10.C Alcohol and the Law",
        sourceUrl: hb(52),
      },
      {
        id: "ut_s6_15",
        topic: "sharing",
        question:
          "You are about to open your door after parking on a Utah street. What does the handbook ask you to do?",
        choices: [
          "Open the door slowly, whatever is behind",
          "Signal before opening",
          "Get out on the passenger side",
          "Check to the sides and rear for bicyclists",
        ],
        correctIndex: 3,
        explanation:
          "Check the sides and rear for bicyclists before opening the door. A door opened into a bike lane is one of the most common ways drivers injure cyclists.",
        context:
          "The same section asks you to check for bicyclists before backing, to be cautious near schools and residential areas, and to dim your headlights within 500 feet when approaching or overtaking a cyclist at night. Bicycle lanes are marked with solid white lines and you may not stop, park or drive in one except to enter or leave an alley or driveway, on police direction, or in an emergency.",
        trap: "It is a duty in both directions - to the rear for a cyclist coming up, and to the side for one already alongside.",
        excerptKey: "bicycle-check-door",
        sourceLabel: "Utah Driver Handbook - Section 14.A Bicycles",
        sourceUrl: hb(75),
      },
      {
        id: "ut_s6_16",
        topic: "rightOfWay",
        question:
          "You are merging from an acceleration lane onto a Utah highway. What is the correct technique?",
        choices: [
          "Slow at the end of the ramp and wait for a gap",
          "Match the speed of the traffic, find a gap, merge, then cancel the signal",
          "Merge as early as possible, whatever your speed",
          "Cross straight to the second lane to clear the merge point",
        ],
        correctIndex: 1,
        explanation:
          "Use the acceleration lane to match the speed of the traffic already there, then find a gap and merge. Speed matching is what makes the gap usable.",
        context:
          "The right of way stays with the continuing lane throughout: Section 41-6a-903 makes the merging driver yield to traffic close enough to be an immediate hazard. The handbook adds the exit-side mirror of the same technique - move to the exit lane early, hold a steady speed while you are still on the main road, and slow only once you are in the deceleration lane.",
        trap: "Stopping at the end of a ramp creates the very hazard the acceleration lane exists to prevent.",
        excerptKey: "acceleration-lane",
        sourceLabel: "Utah Driver Handbook - Section 9.B Entering a Multi-Lane Highway",
        sourceUrl: hb(40),
      },
      {
        id: "ut_s6_17",
        topic: "safety",
        question:
          "Utah has a particular winter hazard the handbook names by name. Which?",
        choices: ["Black ice", "Ground blizzards", "Freezing fog", "Blowing sand"],
        correctIndex: 0,
        explanation:
          "Black ice. The handbook says Utah has a particular problem with it, that it looks more like a wet spot than a patch of ice, and that it causes crashes every year.",
        context:
          "Skidding is not only a winter problem: a car may start to hydroplane above 35 mph on wet roads. If you do skid, ease off the accelerator, steer the front wheels in the direction the rear is sliding without over-correcting, keep off the brakes, and straighten up once traction returns.",
        trap: "It reads as a wet patch, which is why drivers keep their speed for it rather than easing off.",
        excerptKey: "black-ice",
        sourceLabel: "Utah Driver Handbook - Section 11.L Skidding",
        sourceUrl: hb(61),
      },
      {
        id: "ut_s6_18",
        topic: "parking",
        question:
          "Which of these Utah parking distances is measured at 20 feet?",
        choices: [
          "From a fire hydrant",
          "From a crosswalk",
          "From a stop sign",
          "From the nearest rail of a railroad crossing",
        ],
        correctIndex: 1,
        explanation:
          "Twenty feet from a crosswalk, and also 20 feet from the driveway entrance to a fire station. The hydrant is 15, the stop sign is 30, and the rail is 50.",
        context:
          "The handbook's no-parking list also has entries with no distance at all: sidewalks, driveways, intersections, crosswalks themselves, bridges and elevated structures, tunnels, railroad tracks, the roadway side of a parked vehicle, the interstate shoulder except in a breakdown, and any red-painted curb.",
        trap: "Four distances, four different numbers, and they sit in one paragraph. Learning them as a set is easier than one at a time.",
        excerptKey: "parking-crosswalk",
        sourceLabel: "Utah Driver Handbook - Section 8.D Parking",
        sourceUrl: hb(32),
      },
      {
        id: "ut_s6_19",
        topic: "speed",
        question:
          "What speed limit applies while you pass a Utah school during recess?",
        choices: ["20 mph", "25 mph", "30 mph", "The posted limit, unless lights are flashing"],
        correctIndex: 0,
        explanation:
          "Twenty miles an hour. The handbook gives three triggers for it: passing a school building or grounds during recess, children going to or leaving school at opening and closing hours, and the flashing lights operating.",
        context:
          "Section 41-6a-601 calls it a reduced speed school zone. The handbook's pedestrian chapter puts a second duty alongside it - stop and yield as signalled at a school crossing where there is a traffic patrol, and make a complete stop at any school crosswalk occupied by a person.",
        trap: "The flashing lights are one trigger, not the only one. Recess brings the limit into force whether or not any light is on.",
        excerptKey: "speed-school-20",
        sourceLabel: "Utah Driver Handbook - Section 9.E Speed",
        sourceUrl: hb(44),
      },
      {
        id: "ut_s6_20",
        topic: "signals",
        question:
          "Which Utah signal indication requires you to stop and remain stopped until it changes?",
        choices: [
          "A flashing yellow arrow",
          "A circular green with an oncoming vehicle approaching",
          "A red arrow",
          "A flashing yellow light",
        ],
        correctIndex: 2,
        explanation:
          "A red arrow prohibits the movement it points at. You stop and stay stopped until an indication to proceed appears.",
        context:
          "It is the strictest of the indications a turning driver meets. A flashing yellow arrow permits the turn after yielding, a circular green permits it after yielding, and a flashing yellow light is only a warning to slow and be ready to stop. A steady circular red, unlike a red arrow, still allows a right turn after a complete stop.",
        trap: "A red ARROW for a right turn removes the right-on-red permission that a circular red would leave in place.",
        excerptKey: "signal-red-arrow",
        sourceLabel: "Utah Driver Handbook - Section 9.H Traffic Signals",
        sourceUrl: hb(46),
      },
      {
        id: "ut_s6_21",
        topic: "licensing",
        question:
          "A newly licensed 16-year-old Utah driver wants to drive friends home at 11 pm. What do the restrictions say?",
        choices: [
          "It is allowed - the night restriction starts at midnight",
          "It is allowed once driver education is complete",
          "Passengers are allowed but the driver must be home by 10 pm",
          "No non-immediate-family passengers for the first six months, unless a licensed driver of 21 or over is in the front seat",
        ],
        correctIndex: 3,
        explanation:
          "For the first six months of licensure, or until 18, a Utah driver may not carry non-immediate family members. The time of day is a separate restriction.",
        context:
          "The night restriction runs from midnight to 5 am, with exceptions for traveling to or from work, an emergency, agricultural operations, school-sponsored activities, or having a licensed driver of 21 or over in the front seat. The passenger restriction has its own exceptions: a licensed driver of 21 or over in the passenger seat, agricultural operations, or responding to an emergency.",
        trap: "Eleven at night clears the curfew and does nothing about the passengers, which is the half people forget.",
        excerptKey: "dld-passenger-restriction",
        sourceLabel: "Utah Driver License Division - Teen Driver Restrictions",
        sourceUrl: TEEN,
        commonlyMissed: true,
      },
      {
        id: "ut_s6_22",
        topic: "emergencies",
        question:
          "Who must you notify after a Utah crash that injures someone?",
        choices: [
          "Your insurer within 24 hours",
          "The Driver License Division within 10 days",
          "Law enforcement, immediately",
          "Nobody, if the other driver agrees not to report it",
        ],
        correctIndex: 2,
        explanation:
          "Injuries, a death, or at least $2,500 in property damage all require you to notify law enforcement immediately by calling 911.",
        context:
          "The duties that go with it: stop, render reasonable assistance including arranging transport for anyone who needs treatment, and exchange name, address, vehicle registration number and insurance details. Giving that information to a police officer at the scene discharges the duty to give it to the other people involved.",
        trap: "An agreement between drivers cannot waive a reporting duty that the statute imposes.",
        excerptKey: "crash-report-2500",
        sourceLabel: "Utah Driver Handbook - Section 12 Crashes and Insurance",
        sourceUrl: hb(65),
      },
      {
        id: "ut_s6_23",
        topic: "rules",
        question:
          "You are passing a slower vehicle on a two-lane Utah highway. When may you not begin?",
        choices: [
          "When a curve or hill blocks your view",
          "When the vehicle ahead is doing more than 40 mph",
          "When you are within a mile of a town",
          "When the vehicle ahead has passengers",
        ],
        correctIndex: 0,
        explanation:
          "The handbook's never-pass list starts with an oncoming vehicle and a curve or hill that blocks your view. You need to see the whole maneuver before you commit to it.",
        context:
          "The rest of the list: at intersections, alongside a car stopped at a crosswalk, before a railroad crossing or bridge, and in a no-passing zone. The statute adds that the left side must be clearly visible and free of oncoming traffic for long enough to finish without interfering with anyone approaching.",
        trap: "The speed of the vehicle you are passing is not what governs. The sight line is.",
        excerptKey: "never-pass-list",
        sourceLabel: "Utah Driver Handbook - Section 8.E Passing",
        sourceUrl: hb(34),
      },
      {
        id: "ut_s6_24",
        topic: "sharing",
        question:
          "What is the largest blind spot on a tractor-trailer?",
        choices: [
          "Directly in front of the cab",
          "The right side, running from behind the cab to the back of the trailer",
          "The left side, alongside the driver's door",
          "Directly behind the trailer",
        ],
        correctIndex: 1,
        explanation:
          "The right side is the truck's largest blind spot, starting behind the cab and running the length of the vehicle.",
        context:
          "The other no-zones reach up to 20 feet in front of the cab and as much as 200 feet behind the trailer. The rear one matters because a driver sitting there can neither be seen nor see what is ahead. Position yourself where the driver can see you in a side mirror, and never linger alongside a large vehicle any longer than the pass requires.",
        trap: "The rear no-zone is the biggest in distance and the right side is the biggest in the sense the handbook means: the area you can vanish into while overtaking.",
        excerptKey: "truck-rear-no-zone",
        sourceLabel: "Utah Driver Handbook - Section 14.C The No-Zone",
        sourceUrl: hb(80),
      },
      {
        id: "ut_s6_25",
        topic: "signs",
        question:
          "What does the handbook say a downward triangle requires of you at an intersection?",
        choices: [
          "A complete stop every time",
          "Slow down and yield to traffic that has the right of way",
          "Sound your horn and proceed",
          "Nothing, unless traffic is present",
        ],
        correctIndex: 1,
        explanation:
          "A yield sign means slow down and give way to the traffic that has the right of way. Stopping is required only when safety needs it.",
        context:
          "After slowing or stopping you yield to any vehicle already in the intersection or approaching closely enough to be an immediate hazard, and to any pedestrian in the adjacent crosswalk. A collision after passing a yield sign without stopping is prima facie evidence that you failed to yield.",
        trap: "The triangle looks less demanding than a stop sign, and in a busy intersection it can require exactly the same halt.",
        excerptKey: "uca-yield-sign",
        sourceLabel: "Utah Code 41-6a-902 - Right-of-way, stop or yield signals",
        sourceUrl: uca("902"),
      },
      {
        id: "ut_s6_26",
        topic: "safety",
        question:
          "How does the Utah handbook describe the correct outside mirror setting?",
        choices: [
          "So you can barely see the left and right sides of your vehicle",
          "So you can see the whole side of your own vehicle",
          "Angled down to show the lane markings",
          "So the mirrors overlap the inside mirror's view",
        ],
        correctIndex: 0,
        explanation:
          "Set them so you can only just see the side of your own car. That pushes the view outward and shrinks the blind spot.",
        context:
          "The inside mirror should frame the rear window, and a day-night mirror should be set for the time of day you are driving. None of it removes the head check: the handbook asks for a look over the proper shoulder before every lane change, before pulling away from a curb and before every turn.",
        trap: "Mirrors set to show your own car look reassuring and duplicate what the inside mirror already covers.",
        excerptKey: "mirrors-adjust",
        sourceLabel: "Utah Driver Handbook - Section 7.B Adjusting Your Mirrors",
        sourceUrl: hb(27),
      },
      {
        id: "ut_s6_27",
        topic: "impairment",
        question:
          "Which of these will lead to a mandatory revocation of a Utah license?",
        choices: [
          "A first speeding conviction of 20 mph over",
          "Failing to appear in court for a traffic violation",
          "A second conviction for driving while intoxicated",
          "Failing to notify the Division of a new address",
        ],
        correctIndex: 2,
        explanation:
          "A second or subsequent conviction for driving or being in actual physical control while intoxicated, or with any measurable controlled substance or metabolite in the body, brings mandatory revocation.",
        context:
          "The revocation list also covers manslaughter or automobile homicide while driving, a false statement under oath on a license application, using a vehicle to commit a felony, failing to stop and give aid after a crash causing death or injury, two reckless or impaired driving charges in a year, fleeing a police officer, discharging a firearm from a vehicle, and driving with alcohol in the body while alcohol-restricted.",
        trap: "Failing to appear in court and failing to report an address change both cause suspensions, which is a different and lesser sanction.",
        excerptKey: "revocation-list",
        sourceLabel: "Utah Driver Handbook - Section 13.E License Revocations",
        sourceUrl: hb(71),
      },
      {
        id: "ut_s6_28",
        topic: "rightOfWay",
        question:
          "A driver is waiting to turn left across your path and flashes their headlights at you. What does Utah's handbook say about that?",
        choices: [
          "Take the invitation, since it is a recognised courtesy signal",
          "Never think that another driver will give you extra space - be prepared to avoid a crash",
          "Flash back to confirm and then proceed",
          "Treat it as a legal yield of the right of way",
        ],
        correctIndex: 1,
        explanation:
          "Utah's handbook tells you not to rely on other drivers to obey signals or signs, and never to think another driver will give you extra space. Courtesy is not right of way.",
        context:
          "Section 41-6a-804 goes further and forbids flashing a signal as a courtesy or a 'do pass' to drivers approaching from the rear. The handbook's warning is broader: do not turn into a lane just because an oncoming vehicle is showing a turn signal, because it may be turning after it passes you.",
        trap: "Accepting a waved or flashed invitation transfers no legal priority, and leaves you liable if the maneuver goes wrong.",
        excerptKey: "do-not-trust-signal",
        sourceLabel: "Utah Driver Handbook - Section 9.C Intersections",
        sourceUrl: hb(42),
      },
      {
        id: "ut_s6_29",
        topic: "parking",
        question:
          "You want to park on a Utah one-way street. Which wheels go to the curb?",
        choices: [
          "The right-hand wheels only",
          "The left-hand wheels only",
          "Neither - one-way streets do not have a curb rule",
          "Either side, within 12 inches of the curb you are parked against",
        ],
        correctIndex: 3,
        explanation:
          "On a one-way street you may park against either curb, facing the direction of traffic, with the wheels on that side within 12 inches of it.",
        context:
          "On a two-way roadway the choice disappears: the right-hand wheels go within 12 inches of the right-hand curb, or as close as practicable to the right edge of the shoulder. Local ordinances may permit angle parking, and on federal-aid or state highways only where the Department of Transportation has found the road wide enough.",
        trap: "Facing the direction of authorized traffic is still required. The one-way street relaxes which curb, not which way you point.",
        excerptKey: "uca-park-12-inches",
        sourceLabel: "Utah Code 41-6a-1402 - Stopping or parking on roadways",
        sourceUrl: uca("1402"),
      },
      {
        id: "ut_s6_30",
        topic: "licensing",
        question:
          "How many attempts at Utah's written knowledge test does one fee cover?",
        choices: ["One", "Two", "Three within 12 months", "Unlimited within 12 months"],
        correctIndex: 2,
        explanation:
          "Three attempts within 12 months. After three failures you may pay another fee for three more.",
        context:
          "You may sit two written tests in a day if the office can facilitate it, and a return visit after a failure needs a written retest appointment. The whole application has to be completed within six months of the day you pay, and testing that has expired has to be redone.",
        trap: "Two per day and three per fee are different limits and both apply at once.",
        excerptKey: "written-test-fee-attempts",
        sourceLabel: "Utah Driver Handbook - Section 6.A Written Knowledge Test",
        sourceUrl: hb(23),
      },
    ],
  },
];
