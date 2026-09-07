import type { DrivingTestSet } from "../types";

// Sets 4, 5 and 6 of the Kansas bank. Same sourcing rules as sets 1-3: every
// fact is checked against the Kansas Driving Handbook (Kansas Department of
// Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February
// 2022) or, where the handbook is silent, against Chapter 8 of the Kansas
// Statutes.
//
// Set 5 is built from what Kansas learners say actually goes wrong, checked
// against the official source in every case. Six recurring themes came out of
// the forum reading recorded in docs/driving/research/kansas.md, and each of
// them is a question here rather than a warning:
//
//  - The handbook gives two different look-ahead distances a paragraph apart
//    ("two blocks or two traffic signals" in the city, three in an urban area)
//    and a 2024 r/kansas poster named that exact pair as the item that beat
//    them. It is question ks_s3_01 rather than a set 5 item, because it is a
//    plain fact once you have read the paragraph.
//  - The pass mark. Kansas prints 25 questions and 80%, and a widely repeated
//    piece of folklore says five wrong sends you home. Five wrong is 20 right,
//    which is exactly 80% - it passes. Six wrong fails.
//  - The alcohol arithmetic: one hour per normal drink, and time as the only
//    thing that works.
//  - Deer. Two separate posters named the dawn-and-dusk question as one that
//    appeared on the real exam and on none of their practice tests.
//  - Out-of-state permit time, which does not transfer. This is the single
//    most repeated question in Kansas driving threads.
//  - The sheer number of numbers. Kansas prints dozens of distances and
//    intervals, several of which differ by a few feet or a second, and the
//    handbook itself quizzes you on some of them.
//
// No question here reproduces anything anyone posted from memory of the real
// exam. The forum reading told us which RULES get tested; every question was
// then written from the handbook or the statute.
const HB = "https://www.ksrevenue.gov/pdf/dlhb.pdf";
/** The handbook's printed page number IS its PDF page number. */
const hb = (page: number) => `${HB}#page=${page}`;
const KSA = "https://www.ksrevisor.gov/statutes/chapters/ch08";

export const kansasSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions drawn from every corner of the 112 pages, including the chapters people skip: seats and mirrors, basic vehicle control, the skills test scoring sheet and the severe-weather appendix.",
    questions: [
      {
        id: "ks_s4_01",
        topic: "safety",
        question:
          "What is the traditional side-mirror setting the Kansas handbook describes, and when is it most appropriate?",
        choices: [
          "Angled outward until the vehicle's own sides disappear, for highway driving",
          "Aimed at the road surface, for wet weather",
          "Aimed high, for hills",
          "Adjusted so you can just see the left and right edges of your own vehicle, and it suits trucks, vans and SUVs when towing or backing in tight areas",
        ],
        correctIndex: 3,
        explanation:
          "The traditional setting shows you a sliver of your own vehicle in each mirror. Kansas says it may be more appropriate for trucks, vans and SUV-type vehicles when towing or backing in tight areas.",
        context:
          "The enhanced setting is the other option: lean your head toward the window, then set the mirror so the rear fender is only just visible at the edge. You lose sight of your own vehicle but gain 12 to 16 degrees of view on each side.",
        trap: "This is one of the handbook's own Section 4 questions. The 12-to-16-degree figure belongs to the enhanced setting, not the traditional one.",
        excerptKey: "traditional-mirrors",
        sourceLabel: "Kansas Driving Handbook - Section 4, Traditional Mirror Settings",
        sourceUrl: hb(26),
      },
      {
        id: "ks_s4_02",
        topic: "licensing",
        question:
          "A 15-year-old wants a Kansas restricted license. What must they have completed?",
        choices: [
          "50 hours of supervised driving and a road test",
          "A year on a state-issued learner's permit, an approved driver's education course, and 25 hours of supervised driving",
          "Only the vision and written exams",
          "Six months on a permit and 10 hours of night driving",
        ],
        correctIndex: 1,
        explanation:
          "At 15 the requirements are a full year on a state-issued learner's permit, an approved driver's education course, and 25 hours of supervised driving attested by a parent or guardian.",
        context:
          "A 16-year-old applicant does not need driver's education but does need 50 hours of supervised driving with 10 at night. A 15-year-old who has only done 25 hours must file a second affidavit for the remaining 25, with 10 at night, before moving to the less restrictive 16-17 rules.",
        trap: "The 50-hour figure belongs to the 16-year-old path and to the unrestricted license. At 15 it is 25 hours plus driver's education.",
        excerptKey: "restricted-age-15",
        sourceLabel: "Kansas Driving Handbook - Section 1, Restricted License",
        sourceUrl: hb(12),
      },
      {
        id: "ks_s4_03",
        topic: "rules",
        question:
          "When does the Kansas handbook say a three-point turnabout is appropriate?",
        choices: [
          "Whenever you need to reverse direction quickly",
          "On any road with a center line",
          "Only when the road is too narrow for a U-turn and you cannot go around the block",
          "On a divided highway, using the crossover",
        ],
        correctIndex: 2,
        explanation:
          "Kansas calls it the most difficult and dangerous turnabout and reserves it for when the street is too narrow for a U-turn and going around the block is not possible. It is for two-lane roads only.",
        context:
          "The safest way to reverse direction, the handbook says, is to turn right and go around the block, because that avoids most left turns across traffic. On an interstate you go to the next exit; crossing the median or using an emergency crossover is illegal.",
        trap: "Convenience is not the test. Three of the four turnabouts the handbook teaches are safer than this one.",
        excerptKey: "three-point-turnabout",
        sourceLabel: "Kansas Driving Handbook - Section 6, Turnabouts",
        sourceUrl: hb(48),
      },
      {
        id: "ks_s4_04",
        topic: "signs",
        question: "What colors are guide signs in Kansas?",
        choices: [
          "Green, brown or blue",
          "White with black lettering",
          "Yellow with black symbols",
          "Orange with black lettering",
        ],
        correctIndex: 0,
        explanation:
          "Guide signs are square or rectangular in green, brown or blue. They give information about intersecting roads, towns, points of interest and services.",
        context:
          "Green and brown are destination signs, showing direction and distance to cities, airports, county lines, parks, historic areas and museums. Blue signs mark services. Route number signs use shape and color to tell you whether a road is an interstate, a US route or a state route.",
        trap: "Orange belongs to work zones and yellow to warnings. Neither is a guide color.",
        excerptKey: "guide-signs",
        sourceLabel: "Kansas Driving Handbook - Section 6, Guide Signs",
        sourceUrl: hb(42),
      },
      {
        id: "ks_s4_05",
        topic: "parking",
        question:
          "You are leaving your car parked on a slope in Kansas. What does the law require?",
        choices: [
          "Stop the engine, lock the ignition, remove the key, set the brake, and turn the front wheels to the curb or side of the highway",
          "Set the parking brake only",
          "Leave it in gear with the key in the ignition",
          "Chock a wheel if the grade exceeds five percent",
        ],
        correctIndex: 0,
        explanation:
          "K.S.A. 8-1573 sets out the whole sequence: engine off, ignition locked, key removed, brake set, and on any grade the front wheels turned to the curb or the side of the highway.",
        context:
          "The handbook says the same thing in plainer words: always set the parking brake, put an automatic in park or a manual in gear, turn off the headlights and engine before removing the key, and never leave the ignition keys in a parked vehicle.",
        trap: "The parking brake alone is not the rule. The statute names five separate steps and the wheel-turning applies on any grade.",
        excerptKey: "st-unattended",
        sourceLabel: "K.S.A. 8-1573 - Unattended motor vehicle",
        sourceUrl: `${KSA}/008_015_0073.html`,
      },
      {
        id: "ks_s4_06",
        topic: "sharing",
        question:
          "How far does a loaded truck need to stop from 55 mph under ideal conditions?",
        choices: [
          "About the same as a car",
          "About 200 feet",
          "A minimum of 335 feet, more than one and a half times a car's stopping distance",
          "About 500 feet",
        ],
        correctIndex: 2,
        explanation:
          "A minimum of 335 feet with good tires and properly adjusted brakes - greater than one and a half times the stopping distance of a car. That is why cutting in front of a truck is so dangerous.",
        context:
          "Kansas calls the space ahead of a truck the front No-Zone. When you do pass one, look for the whole front of the vehicle in your rearview mirror before you pull back in, and then maintain your speed.",
        trap: "Two hundred feet is the depth of the rear No-Zone, the blind area directly behind a trailer. It is a different number about a different part of the truck.",
        excerptKey: "truck-335-feet",
        sourceLabel: "Kansas Driving Handbook - Section 9, Front No-Zones",
        sourceUrl: hb(86),
      },
      {
        id: "ks_s4_07",
        topic: "signals",
        question: "A red arrow is showing for the direction you want to turn. What does it mean?",
        choices: [
          "You may turn after stopping and checking traffic",
          "You must stop and may not turn in that direction until the green arrow or light returns",
          "You may turn if there is no oncoming traffic",
          "The arrow is advisory only",
        ],
        correctIndex: 1,
        explanation:
          "A red arrow prohibits the movement. You stop, and you may not go in the arrow's direction until the green arrow or the green light comes back.",
        context:
          "It is stricter than a plain steady red, where Kansas allows a right turn after a full stop unless a sign forbids it. The arrow removes that option for the direction it points.",
        trap: "Right on red does not survive a red arrow. The arrow is the sign that forbids it.",
        excerptKey: "red-arrow",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signals",
        sourceUrl: hb(35),
      },
      {
        id: "ks_s4_08",
        topic: "speed",
        question:
          "You double your speed from 20 to 40 mph. What happens to the force of impact and the braking distance?",
        choices: [
          "Both double",
          "Impact doubles, braking distance stays the same",
          "Both increase by about half",
          "Both become four times greater",
        ],
        correctIndex: 3,
        explanation:
          "Doubling the speed quadruples both the impact and the braking distance. Kansas states it exactly that way.",
        context:
          "The handbook carries the arithmetic further. Tripling from 20 to 60 mph makes impact and braking distance nine times greater, and at 80 mph they are sixteen times what they were at 20. At 60 mph your stopping distance is longer than a football field.",
        trap: "Speed and distance do not scale together. The relationship is squared, which is why the intuitive \"twice as fast, twice as far\" answer is wrong.",
        excerptKey: "double-speed-impact",
        sourceLabel: "Kansas Driving Handbook - Section 7, Speed Management, Stopping",
        sourceUrl: hb(59),
      },
      {
        id: "ks_s4_09",
        topic: "emergencies",
        question:
          "What share of rollover crashes involve no vehicle other than the one that rolls?",
        choices: ["About a quarter", "About half", "More than 80%", "About 60%"],
        correctIndex: 2,
        explanation:
          "More than 80 percent of rollovers involve no other vehicle at all. Most start with ordinary driving - a sudden swerve, or drifting off the pavement.",
        context:
          "The handbook also gives the human cost: only about one crash in forty involves a rollover, but one in three passenger-vehicle occupant deaths happens in one. The single most effective protection it names is the safety belt.",
        trap: "Because they sound catastrophic, rollovers get imagined as multi-vehicle pileups. Four in five are a single car.",
        excerptKey: "rollover-80-percent",
        sourceLabel: "Kansas Driving Handbook - Section 8, Rollovers",
        sourceUrl: hb(76),
      },
      {
        id: "ks_s4_10",
        topic: "impairment",
        question: "What does Kansas implied consent mean?",
        choices: [
          "That you consent to a search of your vehicle",
          "That a passenger may consent on your behalf",
          "That consent is assumed only after an arrest",
          "That by holding a driver's license you have already consented to a lawfully requested test of blood, breath, urine or another bodily substance if you are suspected of impaired driving",
        ],
        correctIndex: 3,
        explanation:
          "The consent came with the license. Kansas can require the test on suspicion of impaired driving, and refusing carries its own penalty.",
        context:
          "An alcohol concentration test measures how much alcohol is in your system and is usually done by breath, blood or urine. Refusal costs the license for a year on a first refusal and escalates from there.",
        trap: "Implied consent is about chemical testing, not about searches of the car.",
        excerptKey: "implied-consent",
        sourceLabel: "Kansas Driving Handbook - Section 3, Alcohol and the Law",
        sourceUrl: hb(24),
      },
      {
        id: "ks_s4_11",
        topic: "safety",
        question: "How should a head restraint be adjusted?",
        choices: [
          "So it touches the back of your head and sits no lower than the level of your ears",
          "As low as it will go, for visibility",
          "So it supports your neck rather than your head",
          "It cannot be adjusted and should be left alone",
        ],
        correctIndex: 0,
        explanation:
          "The restraint should contact the back of your head and must not sit below the level of your ears. Set too low, it becomes a fulcrum rather than a support.",
        context:
          "Head restraints exist to prevent whiplash in a rear-end collision, which is neck injury caused when force pushes the neck beyond its normal range of motion. The handbook groups the adjustment with the seat and mirror checks you make before every drive.",
        trap: "Dropping the restraint for a clearer view of the rear window is a common habit and it defeats the device.",
        excerptKey: "head-restraint",
        sourceLabel: "Kansas Driving Handbook - Section 4, Adjusting Seat and Mirrors",
        sourceUrl: hb(26),
      },
      {
        id: "ks_s4_12",
        topic: "rightOfWay",
        question:
          "A road crew is working in the lane beside you. What does Kansas require?",
        choices: [
          "Sound your horn as a warning",
          "Yield to the construction vehicles and workers, and move into a lane that is not next to them",
          "Nothing beyond obeying the posted limit",
          "Stop until a flagger signals you through",
        ],
        correctIndex: 1,
        explanation:
          "You must yield to construction vehicles and workers actually engaged in work on the roadway, and move out of the adjacent lane just as you would for a stopped emergency vehicle.",
        context:
          "Where a work zone has a flagger, you follow their instructions - Kansas lists them alongside law enforcement and school crossing guards as people whose directions you must obey. Fines for a moving violation in a road construction zone are doubled by statute.",
        trap: "You stop for a flagger, not for every work zone. Moving over is the general duty.",
        excerptKey: "construction-yield",
        sourceLabel: "Kansas Driving Handbook - Section 2, Right-Of-Way",
        sourceUrl: hb(18),
      },
      {
        id: "ks_s4_13",
        topic: "signs",
        question: "What does a fluorescent pink sign with black lettering mean?",
        choices: [
          "A school zone is ahead",
          "A temporary incident - a crash, a spill, a disaster or another unplanned event",
          "A permanent lane closure",
          "A detour for scheduled roadwork",
        ],
        correctIndex: 1,
        explanation:
          "Fluorescent pink is Kansas's incident-sign color. Those signs are temporary and go up when a road user incident, a natural disaster, a hazardous material spill or another unplanned event closes or detours the road.",
        context:
          "Planned roadwork gets orange signs instead. School zones, school crossings and pedestrian crossings may use fluorescent yellow, which is a warning color rather than an incident one.",
        trap: "Pink and orange both appear temporarily and both mean slow down, but only orange means someone scheduled the work.",
        excerptKey: "incident-signs",
        sourceLabel: "Kansas Driving Handbook - Section 6, Incident Signs",
        sourceUrl: hb(43),
      },
      {
        id: "ks_s4_14",
        topic: "rules",
        question:
          "You realize you are headed the wrong way on a city street. What is the safest way to reverse direction?",
        choices: [
          "Turn right and go around the block",
          "Make a U-turn at the next intersection",
          "Back into a driveway and pull out facing the other way",
          "Make a three-point turnabout where the street is widest",
        ],
        correctIndex: 0,
        explanation:
          "Turning right and going around the block is the handbook's own answer, because it avoids most left turns across traffic.",
        context:
          "If you are on the interstate, the equivalent is to carry on to the next exit and turn around there. Crossing the median strip or using a crossover reserved for emergency vehicles is illegal.",
        trap: "Every other option in the list involves crossing traffic or reversing into it. The safest maneuver is the one that involves neither.",
        excerptKey: "turnabout-around-block",
        sourceLabel: "Kansas Driving Handbook - Section 6, Turnabouts",
        sourceUrl: hb(47),
      },
      {
        id: "ks_s4_15",
        topic: "licensing",
        question:
          "Your Kansas Class C instruction permit is about to expire. How is it renewed?",
        choices: [
          "Automatically, when you pay the fee",
          "By presenting the parent affidavit again",
          "It cannot be renewed - you wait for your restricted license",
          "By retaking and passing the written examination",
        ],
        correctIndex: 3,
        explanation:
          "All instructional permits are renewed by retaking and passing the written examination. A Class C permit is valid for one year from issue.",
        context:
          "A full driver's license is different. A written exam is not required at every renewal, though an examiner may require one if they suspect the applicant cannot exercise ordinary and reasonable control of a vehicle. A license expired more than a year means full testing again - vision, written and driving.",
        trap: "Paying a fee renews a license. It does not renew a permit.",
        excerptKey: "permit-renewal-retest",
        sourceLabel: "Kansas Driving Handbook - Section 1, Driver License Renewal",
        sourceUrl: hb(14),
      },
      {
        id: "ks_s4_16",
        topic: "speed",
        question:
          "You are convicted of speeding in a Kansas road construction zone. What happens to the fine?",
        choices: [
          "It is reduced if no workers were present",
          "It stays the same as anywhere else",
          "It is doubled",
          "It is tripled",
        ],
        correctIndex: 2,
        explanation:
          "The uniform fine is doubled for a moving violation committed within a road construction zone. The handbook says the same thing in a bracketed line about speeding in a work zone.",
        context:
          "The statute doubles school-zone speeding fines too. And Kansas escalates the penalty for passing a stopped school bus: $750 for a second violation within five years and $1,000 for a third and each one after that.",
        trap: "Whether workers are present makes no difference to the statute. The zone is the trigger.",
        excerptKey: "st-work-zone-double",
        sourceLabel: "K.S.A. 8-2118 - Uniform fine schedule",
        sourceUrl: `${KSA}/008_021_0018.html`,
      },
      {
        id: "ks_s4_17",
        topic: "parking",
        question:
          "You want to park facing the wrong way on the left-hand side of a two-way street. Is that permitted in Kansas?",
        choices: [
          "Yes, if the street is wide enough",
          "Yes, outside a business district",
          "Yes, if the car is within 12 inches of that curb",
          "No - the no-parking list includes the opposite side of the street against traffic flow",
        ],
        correctIndex: 3,
        explanation:
          "Parking on the opposite side of the street against the flow of traffic is on the handbook's do-not-park list. So is parking on the roadway next to an already parked vehicle.",
        context:
          "The list runs long: intersections, crosswalks, sidewalks, bridges, overpasses, underpasses, tunnels, in front of a driveway or a lowered curb, in a construction area where you would block traffic, and in a handicapped space without the plate, tag or sticker.",
        trap: "Being neatly against the curb does not fix it. The problem is the direction the car faces.",
        excerptKey: "no-park-against-traffic",
        sourceLabel: "Kansas Driving Handbook - Section 6, No-Parking Zones",
        sourceUrl: hb(54),
      },
      {
        id: "ks_s4_18",
        topic: "safety",
        question:
          "What does Kansas law say about where children under 14 must ride?",
        choices: [
          "They may ride anywhere if belted",
          "They must ride in the front seat so the driver can watch them",
          "They must be secured in the rear seat with appropriate safety restraints while the vehicle is in motion",
          "Only children under 8 have a seating requirement",
        ],
        correctIndex: 2,
        explanation:
          "The handbook states that all children under the age of 14 must be secured in the rear seat and wear appropriate safety restraints while the vehicle is in motion.",
        context:
          "The restraint type steps up with age and size: a federally approved child safety seat under 4; a safety seat or booster from 4 to 8 unless the child is taller than 4 feet 9 inches or over 80 pounds; a seatbelt from 8. A rear-facing infant seat must never go in front of an active passenger air bag.",
        trap: "The air-bag guidance in the same section says children 12 and under belong in the rear seat, which is a different, lower number for a different reason. The seating requirement here is 14.",
        excerptKey: "children-under-14-rear",
        sourceLabel: "Kansas Driving Handbook - Section 4, Using Safety Belts",
        sourceUrl: hb(27),
        commonlyMissed: true,
      },
      {
        id: "ks_s4_19",
        topic: "sharing",
        question:
          "You are coming up behind a horse-drawn buggy on a rural Kansas road. What should you not do?",
        choices: [
          "Sound your horn or rev the engine",
          "Slow down well before you reach it",
          "Anticipate a left turn into a field or driveway",
          "Pass only when the road ahead is clear",
        ],
        correctIndex: 0,
        explanation:
          "Do not sound the horn or rev the engine. Either can frighten the horse and cause a crash, and the same warning applies to a ridden horse.",
        context:
          "Animal-drawn vehicles have the same right to the road as a car and travel at 5 to 8 mph, slower still when pulling equipment or crossing intersections. The driver may not be able to see behind a large load, and left turns into fields and driveways are common.",
        trap: "The horn is your normal way of announcing yourself and it is exactly the wrong tool here.",
        excerptKey: "animal-drawn-speed",
        sourceLabel: "Kansas Driving Handbook - Section 9, Animal drawn vehicles",
        sourceUrl: hb(88),
      },
      {
        id: "ks_s4_20",
        topic: "emergencies",
        question:
          "Your engine shuts off while you are driving. What does the handbook tell you to do?",
        choices: [
          "Brake hard and stop in the lane",
          "Grip the wheel, shift to neutral, look for an escape path, brake with steady pressure and pull off",
          "Turn the key off and on repeatedly while moving",
          "Put the car in park to restart it",
        ],
        correctIndex: 1,
        explanation:
          "Hold the wheel firmly - it will be harder to turn but it will turn - shift to neutral, find somewhere to go, brake with steady pressure rather than hard, and pull off the roadway.",
        context:
          "Once stopped, try to restart. If that fails, raise the hood, turn on the emergency flashers and call for help. The same neutral-and-escape-path routine covers a stuck accelerator, with the addition of turning the vehicle off once you are clear.",
        trap: "Braking hard with no engine assist is how you lock the wheels. Steady pressure is the instruction in both failure cases.",
        excerptKey: "power-failure",
        sourceLabel: "Kansas Driving Handbook - Section 8, Power Failure",
        sourceUrl: hb(75),
      },
      {
        id: "ks_s4_21",
        topic: "signals",
        question:
          "An intersection has both a stop line and a crosswalk. Where do you stop?",
        choices: [
          "At the crosswalk, since pedestrians take priority",
          "At the stop line - if there is a stop line before the crosswalk, the stop line must be obeyed first",
          "Wherever you can see cross traffic",
          "Level with the stop sign itself",
        ],
        correctIndex: 1,
        explanation:
          "The stop line comes first. Kansas says that where a stop line sits before the crosswalk, the stop line is the one you obey.",
        context:
          "If neither is marked, you stop before entering the crosswalk on the near side, and if there is no crosswalk either, at the point nearest the intersecting roadway where you can see. The handbook adds that stop lines exist partly to set you far enough back to give large vehicles room to turn.",
        trap: "Stopping level with the sign puts you past both markings. The sign tells you to stop; the line tells you where.",
        excerptKey: "stop-line-first",
        sourceLabel: "Kansas Driving Handbook - Section 6, Crosswalks and Stop Lines",
        sourceUrl: hb(44),
      },
      {
        id: "ks_s4_22",
        topic: "impairment",
        question:
          "What does the Kansas handbook report about drivers who use marijuana?",
        choices: [
          "That it affects only reaction time",
          "That it has no measurable effect on driving",
          "That its effects are milder than alcohol's",
          "That studies show they make more mistakes, have more trouble adjusting to glare, and are arrested for traffic violations more than other drivers",
        ],
        correctIndex: 3,
        explanation:
          "The handbook cites studies finding more mistakes, more trouble adjusting to glare, and more traffic-violation arrests among marijuana users than among other drivers.",
        context:
          "The penalty is the same as for alcohol. A first drug-related conviction for driving under the influence carries a fine of $750 to $1,000 plus court costs, a minimum of 48 hours in jail or 100 hours of community service, and a suspended license.",
        trap: "Illegal drugs get treated as a category apart from alcohol, and the handbook's point is that they are not - the impairment and the penalties both parallel it.",
        excerptKey: "marijuana-studies",
        sourceLabel: "Kansas Driving Handbook - Section 3, Illegal Drugs",
        sourceUrl: hb(24),
      },
      {
        id: "ks_s4_23",
        topic: "rules",
        question:
          "Where does Kansas put your hands on the wheel for hand-to-hand steering?",
        choices: [
          "10 and 2 o'clock",
          "9 and 3 o'clock",
          "Left hand between 7 and 8 o'clock, right hand between 4 and 5 o'clock",
          "Both hands at 12 o'clock",
        ],
        correctIndex: 2,
        explanation:
          "Low on the wheel: left hand between 7 and 8, right hand between 4 and 5. Hand-to-hand, also called push-pull, is the handbook's preferred method above 10 to 15 mph.",
        context:
          "The reason is the air bag. Your hands and arms never cross the center of the wheel, so a deploying bag cannot throw them into your face. Kansas says outright that 2 and 10 o'clock is not recommended in a car with a driver-side air bag.",
        trap: "Ten and two is what most people were taught and the handbook names it as the position to avoid. Twelve o'clock has exactly one use: the left hand, while backing.",
        excerptKey: "hand-to-hand",
        sourceLabel: "Kansas Driving Handbook - Section 5, Types of Steering Methods",
        sourceUrl: hb(31),
        commonlyMissed: true,
      },
      {
        id: "ks_s4_24",
        topic: "signs",
        question:
          "A Slower Traffic Keep Right sign is posted on a multilane highway. Who is it addressed to?",
        choices: [
          "Anyone driving slower than the normal speed of traffic, telling them to stay in the right lane",
          "Trucks and buses only",
          "Traffic entering from a ramp",
          "Anyone below the posted minimum speed",
        ],
        correctIndex: 0,
        explanation:
          "It speaks to any driver moving slower than the normal speed of traffic, and it tells them to use the right lane.",
        context:
          "The underlying rule is the same one that puts you in the right lane except to pass. Kansas also warns that driving more than 15 mph below the traffic flow is as dangerous as excessive speed, because vehicles bunch up and take risks to get around you.",
        trap: "It is about relative speed, not about the posted minimum or the type of vehicle.",
        excerptKey: "slower-traffic-keep-right",
        sourceLabel: "Kansas Driving Handbook - Section 6, Slower Traffic Keep Right",
        sourceUrl: hb(41),
      },
      {
        id: "ks_s4_25",
        topic: "rightOfWay",
        question:
          "A school crossing guard is holding out an official flag in the STOP position. What must you do?",
        choices: [
          "Come to a complete stop",
          "Slow to 20 mph",
          "Yield only if children are in the roadway",
          "Continue if the crosswalk is clear",
        ],
        correctIndex: 0,
        explanation:
          "A complete stop is required. The handbook lists it alongside stop signs, flashing red signals and emergency vehicles as one of the situations demanding a full stop.",
        context:
          "Traffic control in Kansas is not only signs and signals. Law enforcement, highway personnel and school crossing guards can all direct traffic, and you must obey their directions. At a school crossing with a traffic patrol, you stop and yield when signaled.",
        trap: "The presence or absence of children in the road does not enter into it. The flag is the instruction.",
        excerptKey: "stop-crossing-guard",
        sourceLabel: "Kansas Driving Handbook - Section 2, Stopping",
        sourceUrl: hb(18),
      },
      {
        id: "ks_s4_26",
        topic: "speed",
        question:
          "You are on an entrance ramp and the acceleration lane is running out, but there is no gap. What does the handbook say to do?",
        choices: [
          "Drive to the end of the lane and stop",
          "Slow down on the acceleration lane to wait for a gap, without crossing the solid white line",
          "Merge anyway and let traffic adjust",
          "Reverse back down the ramp",
        ],
        correctIndex: 1,
        explanation:
          "If you have to wait, you slow down within the acceleration lane and do not cross the solid white line. Then check over your shoulder and your mirrors, find your gap, signal and move in.",
        context:
          "The lane exists so you can reach the speed of traffic before you join it. Kansas warns specifically against driving to the end and stopping: you will have no room to get up to speed, and drivers behind you are watching the main roadway rather than expecting a stopped car.",
        trap: "Stopping at the end of the ramp feels like the cautious choice and the handbook names it as the dangerous one.",
        excerptKey: "acceleration-lane",
        sourceLabel: "Kansas Driving Handbook - Section 7, Entering traffic flow",
        sourceUrl: hb(60),
      },
      {
        id: "ks_s4_27",
        topic: "licensing",
        question:
          "Which of these is an automatic failure on the Kansas road test?",
        choices: [
          "Stalling the engine once",
          "Taking more than one attempt at parallel parking",
          "Signaling too early for a turn",
          "Failing to check your blind spots",
        ],
        correctIndex: 3,
        explanation:
          "Not checking your blind spots is on the automatic-failure list, alongside not wearing your safety belt and failing to yield to pedestrians or other road users.",
        context:
          "The rest of the list: earning a citation for a moving violation, disobeying signs or signals, speeding, rolling a stop, an avoidable crash or any contact with a vehicle, object or pedestrian, any unsafe act that forces another driver to take evasive action, putting the vehicle over a curb or sidewalk unnecessarily, and the examiner having to take control.",
        trap: "The scored errors - reversals, encroachments, missed signals - add points. The automatic failures end the test.",
        excerptKey: "automatic-failures",
        sourceLabel: "Kansas Driving Handbook - Section 11, Automatic Failures",
        sourceUrl: hb(107),
      },
      {
        id: "ks_s4_28",
        topic: "safety",
        question:
          "Water is standing across the road ahead. How much is enough to reach the bottom of most passenger cars?",
        choices: ["2 feet", "1 foot", "6 inches", "3 inches"],
        correctIndex: 2,
        explanation:
          "Six inches reaches the underside of most cars and can cause loss of control or stalling. Two feet of rushing water can carry most vehicles away.",
        context:
          "The instruction is simple and absolute: do not drive through flooded areas. Turn around and find another route. Even shallow-looking water can hide a dip or a road surface that has been washed out from underneath.",
        trap: "Two feet is the figure for a car being swept away, not the point where trouble starts. Trouble starts at six inches.",
        excerptKey: "six-inches-water",
        sourceLabel: "Kansas Driving Handbook - Section 10, Flooded Roadways",
        sourceUrl: hb(91),
        commonlyMissed: true,
      },
      {
        id: "ks_s4_29",
        topic: "emergencies",
        question:
          "A tornado is bearing down and you are in your car. Should you shelter under an overpass?",
        choices: [
          "Yes, the concrete provides protection",
          "Yes, if you can get above the roadway",
          "No - winds are stronger beneath an overpass and it gives little protection from flying objects",
          "Only if the overpass has a girder to hold onto",
        ],
        correctIndex: 2,
        explanation:
          "Kansas says to avoid bridges and overpasses. Winds are stronger underneath because of a wind tunnel effect, and the structure gives little protection from flying debris.",
        context:
          "The handbook's advice is to leave the vehicle for sturdy shelter or drive out of the tornado's path. Vehicles themselves are described as notorious death traps in tornadoes because they are so easily tossed.",
        trap: "The overpass is one of the most persistent pieces of severe-weather folklore in this part of the country, and the state manual contradicts it directly.",
        excerptKey: "tornado-overpass",
        sourceLabel: "Kansas Driving Handbook - Section 12, Tornadoes",
        sourceUrl: hb(110),
        commonlyMissed: true,
      },
      {
        id: "ks_s4_30",
        topic: "parking",
        question:
          "You are parking downhill on a Kansas street with a curb. Which way do the front wheels go?",
        choices: [
          "Toward the curb, so the tire rests against it",
          "Away from the curb",
          "Straight, with the wheels touching the curb",
          "It makes no difference if the parking brake is set",
        ],
        correctIndex: 0,
        explanation:
          "Downhill, with or without a curb, the wheels turn toward the edge of the road. You roll forward until the tire nearest the curb touches it and use the curb as a block.",
        context:
          "Uphill with a curb is the exception that reverses this: wheels away from the curb, then let the car settle back until the tire touches. In all three cases the goal is identical - if the car rolls, it rolls away from traffic.",
        trap: "The handbook's printed sample question asks the uphill case and the answer there is toward the curb, which is wrong for downhill. Read which direction the question means.",
        excerptKey: "park-downhill",
        sourceLabel: "Kansas Driving Handbook - Section 6, Parking Downhill with/without a Curb",
        sourceUrl: hb(52),
        commonlyMissed: true,
      },
      {
        id: "ks_s4_31",
        topic: "sharing",
        question:
          "A truck ahead of you signals right but swings wide to the left first. What should you do?",
        choices: [
          "Move up on its right, since it is turning left",
          "Wait until the truck has completed its turn",
          "Sound your horn to correct the driver",
          "Pass on the left while it is turning",
        ],
        correctIndex: 1,
        explanation:
          "Trucks and buses sometimes have to swing wide left to clear the corner on a right turn. If you slip in between the vehicle and the curb, you get squeezed.",
        context:
          "The handbook tells you to watch large vehicles' turn signals closely and give them room to maneuver, and warns separately about misjudging an oncoming truck's speed before turning left in front of it. When in doubt about how fast a truck is closing, do not turn.",
        trap: "The wide left swing looks like the start of a left turn. The signal is telling you which way it is actually going.",
        excerptKey: "truck-wide-right",
        sourceLabel: "Kansas Driving Handbook - Section 9, Interacting with Commercial Vehicles",
        sourceUrl: hb(87),
      },
      {
        id: "ks_s4_32",
        topic: "signs",
        question:
          "On an expressway sign, the word EXIT is printed on the left-hand side of the panel. What does that tell you?",
        choices: [
          "The exit is closed",
          "The exit is two miles ahead",
          "The exit serves left-hand traffic only at peak times",
          "The exit lane or ramp is on the left",
        ],
        correctIndex: 3,
        explanation:
          "The side of the panel the word EXIT sits on tells you which side the ramp is on. Left-hand EXIT means a left-hand ramp.",
        context:
          "Destination signs are the green or brown rectangles that give direction and distance to cities, airports, state and county lines, parks and historic areas. Kansas also tells you to be in the correct lane about half a mile before the exit in heavy traffic.",
        trap: "Left exits are rare, which is exactly why the panel bothers to tell you. Assuming every ramp is on the right is how people cross three lanes at the last moment.",
        excerptKey: "exit-side",
        sourceLabel: "Kansas Driving Handbook - Section 6, Destination Signs",
        sourceUrl: hb(42),
      },
      {
        id: "ks_s4_33",
        topic: "rules",
        question:
          "You are backing your car out of a parking space. Where does the handbook put your left hand, and where do you look?",
        choices: [
          "8 and 4 o'clock, watching the mirrors",
          "9 o'clock, looking over your right shoulder only",
          "Both hands on the wheel, using the backup camera",
          "12 o'clock, with your right arm on the seat back, looking directly through the rear window",
        ],
        correctIndex: 3,
        explanation:
          "Left hand at 12 o'clock, right arm across the seat back, and look directly through the rear window. This is the one situation in which Kansas recommends the 12 o'clock position.",
        context:
          "Before you get in, check behind the car - children and small objects cannot be seen from the driver's seat. You may use the mirrors while backing, but the handbook reminds you that they do not show what is directly behind you. Passenger-car side mirrors are not designed for backing at all.",
        trap: "Mirrors alone are not the method. The handbook has you turn and look, and treats the mirrors as a supplement.",
        excerptKey: "backing-12-oclock",
        sourceLabel: "Kansas Driving Handbook - Section 5, Backing",
        sourceUrl: hb(32),
      },
      {
        id: "ks_s4_34",
        topic: "impairment",
        question:
          "What penalty does the handbook give for a first alcohol-related conviction in Kansas?",
        choices: [
          "A warning and a fine of up to $200",
          "A $500 fine and no jail time",
          "A fine of $750 to $1,000 plus court costs, a minimum of 48 hours in jail or 100 hours of community service, a suspended license, and an ignition interlock device",
          "A 30-day suspension only",
        ],
        correctIndex: 2,
        explanation:
          "That is the first-conviction package the handbook sets out, and it says the penalties for second and subsequent convictions are much worse.",
        context:
          "The 30-day suspension is a separate administrative consequence that follows a BAC of 0.08 or more, before any criminal conviction. The two run alongside each other rather than being alternatives.",
        trap: "The 30-day figure is real, which is what makes it the tempting answer. It is not the penalty for the conviction.",
        excerptKey: "dui-first-penalty",
        sourceLabel: "Kansas Driving Handbook - Section 3, Alcohol and the Law",
        sourceUrl: hb(24),
      },
      {
        id: "ks_s4_35",
        topic: "signals",
        question: "A yellow arrow appears where a green arrow had been. What does it mean?",
        choices: [
          "The turn is now prohibited",
          "The green arrow is ending - prepare to stop and yield to oncoming traffic and pedestrians",
          "The signal is malfunctioning",
          "You may complete the turn without yielding",
        ],
        correctIndex: 1,
        explanation:
          "The yellow arrow is the end of the protected turn. Prepare to stop, and if you do proceed, you now owe the right-of-way to oncoming traffic and pedestrians.",
        context:
          "It is the arrow equivalent of a steady yellow light, which means the signal is about to turn red and you should slow and stop if traffic behind you allows. If you are already in the intersection when it appears, you may continue through safely.",
        trap: "A yellow arrow is not the same as a red arrow. It ends the protection; the red one ends the movement.",
        excerptKey: "yellow-arrow",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signals",
        sourceUrl: hb(34),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Thirty-five questions built from what Kansas learners report going wrong, checked against the handbook and the statute in every case. Numbers that sit a few feet apart, rules whose second half people never reach, and one piece of folklore about the pass mark that has been circulating for years.",
    questions: [
      {
        id: "ks_s5_01",
        topic: "safety",
        question:
          "What is the average perception time for an alert driver, according to the Kansas handbook?",
        choices: [
          "Three quarters of a second to one second",
          "One to two seconds",
          "Three to four seconds",
          "About a tenth of a second",
        ],
        correctIndex: 0,
        explanation:
          "Perception time - the interval between your eyes seeing a hazard and your brain recognizing it - averages three quarters of a second to a second in an alert driver.",
        context:
          "Reaction time is a separate, equal interval on top of it, and at 50 mph that alone accounts for 55 feet traveled. Braking adds about 158 feet, which is how a 50 mph stop reaches a minimum of 268 feet.",
        trap: "This is one of the thirteen sample questions the handbook prints on page 95, and the two wrong options offered there are the same ones that sound reasonable here. It is a very short interval.",
        excerptKey: "perception-distance",
        sourceLabel: "Kansas Driving Handbook - Section 7, Speed Management, Stopping",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_02",
        topic: "licensing",
        question:
          "You answer 20 of the 25 questions correctly on the Kansas knowledge test. What happens?",
        choices: [
          "You fail, because five wrong is the limit",
          "You must retake only the section you missed",
          "The result is held pending a review",
          "You pass, because 20 of 25 is exactly the 80% required",
        ],
        correctIndex: 3,
        explanation:
          "Eighty percent of 25 is 20. Five wrong answers still leaves you at the pass mark; the sixth is what fails you.",
        context:
          "The handbook states both halves separately - 25 multiple-choice questions on page 94, and \"You must score an 80% to pass the knowledge test\" a few lines later. It is not timed and generally takes 15 to 20 minutes.",
        trap: "A widely repeated claim in Kansas driving threads is that five wrong sends you home. It is off by one, and it makes people give up on a test they have already passed.",
        excerptKey: "pass-80-percent",
        sourceLabel: "Kansas Driving Handbook - Section 11, Passing the Knowledge Test",
        sourceUrl: hb(94),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_03",
        topic: "speed",
        question:
          "On which Kansas roads does the 75 mph maximum apply when nothing is posted?",
        choices: [
          "Any four-lane road",
          "Any separated multilane highway designated and posted by the Secretary of Transportation",
          "Any interstate",
          "Any highway outside an urban district",
        ],
        correctIndex: 1,
        explanation:
          "Seventy-five is reserved for separated multilane highways that the Secretary of Transportation has designated and posted. It is not a general rural maximum.",
        context:
          "The rest of the list gives 65 mph on any state or federal highway, 55 on a county or township road, and 30 in any urban district. The statute words the 65 mph line as \"on all other highways\", which reaches the same result.",
        trap: "\"Four lanes\" is not the qualification. Separated means a physical division between directions, and the road must be designated as well as posted.",
        excerptKey: "speed-rural-limits",
        sourceLabel: "Kansas Driving Handbook - Section 2, Speed Limits",
        sourceUrl: hb(16),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_04",
        topic: "sharing",
        question:
          "When are you NOT required to stop for a school bus with red lights flashing on the other side of the road?",
        choices: [
          "When the road has four or more lanes",
          "When you are approaching an intersection",
          "When a median or other physical barrier separates the roadways",
          "When two solid yellow lines separate the directions",
        ],
        correctIndex: 2,
        explanation:
          "The only exception is a physical division. If the bus is traveling toward you and the roadway is separated by a median or other physical barrier, you need not stop.",
        context:
          "Every other geometry in the handbook still requires the stop: two solid yellow lines, a center turning lane, a multi-lane highway, and an intersection. The statute says the same thing in terms of separate roadways.",
        trap: "Three of the four options here are situations where Kansas devotes a whole page each to saying you DO stop. Only the physical barrier releases you.",
        excerptKey: "bus-median-exception",
        sourceLabel: "Kansas Driving Handbook - Section 6, Rules for School Buses",
        sourceUrl: hb(52),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_05",
        topic: "rules",
        question:
          "A lane is marked with a white diamond and an HOV 3 sign. What does that mean?",
        choices: [
          "Three-axle vehicles only",
          "The third lane from the right",
          "At least three people must be in the vehicle to use that lane",
          "A three-mile reserved section",
        ],
        correctIndex: 2,
        explanation:
          "HOV means High Occupancy Vehicle, and the number is the minimum number of people. HOV 3 means at least three people in the car.",
        context:
          "Reserved lanes carry a white diamond at the roadside or painted on the surface. Other reserved lanes are marked Transit or Bus, for buses only, and Bicycle, for bicyclists. Signs may also limit the reservation to particular days and hours.",
        trap: "The number counts occupants, not axles or lanes. A plain HOV lane without a number generally means two or more.",
        excerptKey: "hov-lanes",
        sourceLabel: "Kansas Driving Handbook - Section 6, Reserved Lanes",
        sourceUrl: hb(45),
      },
      {
        id: "ks_s5_06",
        topic: "signals",
        question:
          "You are halfway across the street on foot when the DON'T WALK signal starts flashing. What does Kansas say?",
        choices: [
          "Return to the curb you came from",
          "You may finish crossing the street",
          "Stop where you are and wait on the median",
          "You are now jaywalking and drivers need not yield",
        ],
        correctIndex: 1,
        explanation:
          "If the flashing DON'T WALK appears while you are already crossing, you may finish the crossing. It is a warning not to start, not an order to stop.",
        context:
          "The pedestrian rules run both ways in the handbook, because as soon as you step out of your car you become a pedestrian. You have the right-of-way on a WALK signal or a green light, but you should still make sure drivers have seen you and are stopping before you cross.",
        trap: "Turning back mid-crossing puts you in the roadway for longer than finishing does.",
        excerptKey: "flashing-dont-walk",
        sourceLabel: "Kansas Driving Handbook - Section 9, Pedestrians",
        sourceUrl: hb(79),
      },
      {
        id: "ks_s5_07",
        topic: "impairment",
        question:
          "Someone has had four normal drinks. How long should they wait before driving, according to the handbook?",
        choices: [
          "Four hours or more",
          "One hour",
          "Two hours, with food",
          "Until they no longer feel impaired",
        ],
        correctIndex: 0,
        explanation:
          "Kansas gives one hour per normal drink. Four drinks means four hours or more, and no shortcut exists.",
        context:
          "The handbook is explicit that nothing else works. Coffee, fresh air, cold showers and eating do not remove alcohol from the circulatory system, and sober means having none in the body at all.",
        trap: "\"Until they feel fine\" is the answer people act on and it is the one the handbook rules out: impairment starts with the first drink, and judgment is among the first things to go.",
        excerptKey: "one-hour-per-drink",
        sourceLabel: "Kansas Driving Handbook - Section 3, Alcohol",
        sourceUrl: hb(23),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_08",
        topic: "parking",
        question:
          "How close to a fire station driveway may you park, and does the side of the street matter?",
        choices: [
          "30 feet on either side",
          "15 feet on either side",
          "50 feet on the same side only",
          "No closer than 20 feet on the same side, and within 75 feet of a point opposite the entrance on the other side",
        ],
        correctIndex: 3,
        explanation:
          "Twenty feet on the fire station's own side, and 75 feet on the opposite side of the street. Kansas is the rare handbook that gives two different distances for the two sides.",
        context:
          "The reason is turning room: a fire engine leaving the station has to swing across the street, and a car parked opposite the doors blocks the swing even though it is nowhere near the driveway.",
        trap: "Most people remember one number for this rule. There are two, and the larger one applies where you would least expect it.",
        excerptKey: "park-fire-station",
        sourceLabel: "Kansas Driving Handbook - Section 2, Parking",
        sourceUrl: hb(19),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_09",
        topic: "emergencies",
        question:
          "Your car breaks down on a highway and you need to warn other drivers. How far behind the vehicle do the flares go?",
        choices: ["50 feet", "100 feet", "500 feet", "About 200 to 300 feet"],
        correctIndex: 3,
        explanation:
          "Two hundred to three hundred feet behind the vehicle, so drivers have time to change lanes before they reach you.",
        context:
          "Before that, get the car off the road and away from traffic if you can, turn on the emergency flashers, and stop somewhere with a clear view - not just over a hill or around a curve. A white cloth tied to the antenna, mirror or door handle also signals a disabled vehicle, and so does a raised hood.",
        trap: "Never stand in the roadway and never change a tire in a travel lane. The handbook says so directly.",
        excerptKey: "flares-200-300",
        sourceLabel: "Kansas Driving Handbook - Section 7, Use emergency signals",
        sourceUrl: hb(69),
      },
      {
        id: "ks_s5_10",
        topic: "rightOfWay",
        question:
          "You approach a yield sign and no other traffic is anywhere near the intersection. Must you stop?",
        choices: [
          "No - a vehicle controlled by a yield sign need stop only when necessary to avoid interfering with traffic that has the right-of-way",
          "Yes, a yield sign always requires a complete stop",
          "Yes, unless the intersection is signalized",
          "Only if you are turning",
        ],
        correctIndex: 0,
        explanation:
          "A yield sign asks you to slow down and give way. You stop only when stopping is necessary to avoid interfering with traffic that has the right-of-way.",
        context:
          "Pedestrians count as that traffic. The handbook includes them explicitly in the yield-sign rule, and the wider principle is that you must yield to pedestrians always, in a crosswalk or not.",
        trap: "Treating every yield sign as a stop sign is the safe habit and the wrong exam answer. The two signs mean different things.",
        excerptKey: "yield-sign-rule",
        sourceLabel: "Kansas Driving Handbook - Section 2, Right-Of-Way",
        sourceUrl: hb(18),
      },
      {
        id: "ks_s5_11",
        topic: "signs",
        question: "What does a NO TURN ON RED sign prohibit?",
        choices: [
          "Right turns only",
          "Left turns only",
          "Both right and left turns during the red light",
          "Turns only when pedestrians are present",
        ],
        correctIndex: 2,
        explanation:
          "The sign covers both directions. Kansas words it plainly: you may not turn right or left during the red light, and you wait for green.",
        context:
          "That matters because Kansas does permit some left turns on red - from a one-way street onto another one-way street, or from a two-way street onto a one-way street. This sign removes that permission along with right on red.",
        trap: "The sign is usually thought of as the right-on-red sign because that is the common case. It is not limited to right turns.",
        excerptKey: "no-turn-on-red-sign",
        sourceLabel: "Kansas Driving Handbook - Section 6, No Turn on Red",
        sourceUrl: hb(40),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_12",
        topic: "safety",
        question: "When are deer most active, according to the Kansas handbook?",
        choices: [
          "Midday, and in spring",
          "At dawn and dusk, and between October and December",
          "Only after dark, year round",
          "In the early afternoon, and in midsummer",
        ],
        correctIndex: 1,
        explanation:
          "Dawn and dusk, and the months of October through December. Those are the hours and the season Kansas names for peak animal activity.",
        context:
          "The handbook tells you to scan the roadsides for the reflection of your headlights in animals' eyes, to expect more deer behind the first one because they travel in groups, and to treat a deer crossing sign as marking a place where collisions have actually happened.",
        trap: "More than one Kansas learner reports this exact question appearing on the real exam and on none of their practice tests, which makes it worth learning as a pair - the time of day and the months together.",
        excerptKey: "deer-dawn-dusk",
        sourceLabel: "Kansas Driving Handbook - Section 10, Avoiding Collisions with Animals",
        sourceUrl: hb(92),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_13",
        topic: "speed",
        question:
          "How much slower than the traffic flow does the Kansas handbook call as dangerous as excessive speed?",
        choices: [
          "5 mph slower",
          "More than 15 mph slower",
          "More than 25 mph slower",
          "Any speed below the posted minimum",
        ],
        correctIndex: 1,
        explanation:
          "More than 15 mph below the traffic flow. Vehicles bunch up behind you and other drivers take greater risks to get around.",
        context:
          "The handbook's instruction when that happens is to pull over when it is safe and let the queue past. It is the same idea behind the rule that makes it unlawful to drive so slowly as to impede or block the normal movement of traffic.",
        trap: "The posted minimum is a separate legal floor on some high-speed roads. This 15 mph figure is about the traffic around you, not about a sign.",
        excerptKey: "fifteen-slower",
        sourceLabel: "Kansas Driving Handbook - Section 7, Adjusting to Traffic Conditions",
        sourceUrl: hb(60),
      },
      {
        id: "ks_s5_14",
        topic: "licensing",
        question:
          "You have now failed the Kansas knowledge test four times. When can you try again?",
        choices: [
          "The next working day, as before",
          "After 30 days",
          "After a minimum of six months from the most recent failed exam",
          "Never - you must complete driver's education first",
        ],
        correctIndex: 2,
        explanation:
          "Four attempts is the limit. After the fourth failure you wait a minimum of six months from the most recent failed exam before starting the process again.",
        context:
          "Up to that point, retesting is quick: the next working day, once you have paid the $1.50 re-exam fee. The same four-attempt rule applies separately to the driving test.",
        trap: "The wait runs from the most recent failure, not from the first attempt, so a fourth failure resets the clock rather than counting time already served.",
        excerptKey: "four-opportunities",
        sourceLabel: "Kansas Driving Handbook - Section 11, Failing the Knowledge Test",
        sourceUrl: hb(94),
      },
      {
        id: "ks_s5_15",
        topic: "rules",
        question:
          "How close to a hill or curve does Kansas say you must not begin a pass?",
        choices: [
          "200 feet",
          "500 feet",
          "A quarter of a mile",
          "Within a third of a mile",
        ],
        correctIndex: 3,
        explanation:
          "A third of a mile, which is about 20 to 25 seconds at 55 to 60 mph. The handbook tells you to treat any blind hill or curve as though an oncoming vehicle were just out of sight.",
        context:
          "The same 20 to 25 second window governs railroad crossings: do not pass if a crossing lies within it. Separately, passing is banned within 100 feet of a bridge, viaduct or tunnel where your view is obstructed, and within 100 feet of an intersection or railroad grade crossing.",
        trap: "One hundred feet, 200 feet and 500 feet are all real Kansas passing distances for other situations. The hill-and-curve figure is the long one.",
        excerptKey: "pass-hills-curves",
        sourceLabel: "Kansas Driving Handbook - Section 7, Space to Pass",
        sourceUrl: hb(66),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_16",
        topic: "sharing",
        question:
          "How far does a large truck's rear blind spot extend behind it?",
        choices: [
          "Up to 200 feet",
          "About 30 feet",
          "About 75 feet",
          "Up to 500 feet",
        ],
        correctIndex: 0,
        explanation:
          "Up to 200 feet directly behind the trailer. Inside it the driver cannot see you and you cannot see the road ahead.",
        context:
          "The No-Zone has four parts - both sides, the front and the rear - and the right-side blind spot can run the whole length of the trailer starting behind the cab. The handbook's advice is to sit where the driver can see you in a side mirror.",
        trap: "Two hundred feet is much bigger than people picture, and closing up behind a trailer to see past it does the opposite of what you want.",
        excerptKey: "rear-no-zone-200",
        sourceLabel: "Kansas Driving Handbook - Section 9, Rear No-Zones",
        sourceUrl: hb(86),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_17",
        topic: "signals",
        question:
          "The light turns steady yellow as you approach. What does Kansas tell you to do?",
        choices: [
          "Slow down and come to a complete stop if traffic behind you allows",
          "Accelerate to clear the intersection",
          "Stop immediately regardless of what is behind you",
          "Treat it as a flashing yellow and proceed with caution",
        ],
        correctIndex: 0,
        explanation:
          "Slow and stop, if the traffic behind you leaves room to do so safely. The yellow is telling you red is coming.",
        context:
          "There is one exception in the same paragraph: if you are already in the intersection when the yellow appears, you may continue safely through it. That is about being inside the intersection, not about being close to it.",
        trap: "\"Beat the light\" is the habit the yellow exists to prevent, and stopping so hard that the car behind hits you is the other failure. The rule accounts for both.",
        excerptKey: "steady-yellow",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signals",
        sourceUrl: hb(34),
      },
      {
        id: "ks_s5_18",
        topic: "impairment",
        question:
          "At what blood alcohol concentration does the handbook say vision is affected?",
        choices: ["0.08", "0.02", "0.05", "0.04"],
        correctIndex: 1,
        explanation:
          "Vision is impacted at 0.02 BAC for all drivers - well below any legal threshold and far below the 0.08 arrest level for adults.",
        context:
          "The handbook lists four skills alcohol degrades: judgment, vision, color distinction and reaction time. Losing color distinction matters because so much roadway information - signs, signals, markings - is carried by color.",
        trap: "0.02 is also the under-21 arrest figure, which makes it easy to file away as \"the teenage number\". It is a physiological figure that applies to everyone.",
        excerptKey: "vision-02-bac",
        sourceLabel: "Kansas Driving Handbook - Section 3, Effects of Alcohol and other Impairing Drugs",
        sourceUrl: hb(23),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_19",
        topic: "emergencies",
        question:
          "A deer steps into the road and a collision looks unavoidable. What does Kansas tell you to do?",
        choices: [
          "Swerve into the oncoming lane if it is clear",
          "Swerve onto the shoulder",
          "Do not swerve - keep the vehicle under control and on the roadway",
          "Brake hard enough to lock the wheels",
        ],
        correctIndex: 2,
        explanation:
          "Do not swerve. The handbook says your risk of personal injury may be greater if you do, and tells you to keep the vehicle under control and on the roadway through the impact.",
        context:
          "Before it becomes unavoidable, you have options: reduce speed, tap the brakes to warn drivers behind, and sound the horn. Flashing your headlights is specifically discouraged, because deer fixate on headlights and may freeze.",
        trap: "The handbook concedes that hitting the animal may be the safest alternative. Swerving turns a deer strike into a head-on or a rollover.",
        excerptKey: "dont-swerve-animal",
        sourceLabel: "Kansas Driving Handbook - Section 10, Avoiding Collisions with Animals",
        sourceUrl: hb(92),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_20",
        topic: "parking",
        question:
          "Where does Kansas forbid parking in relation to a pedestrian safety zone?",
        choices: [
          "Within 10 feet of it",
          "Within 15 feet of it",
          "Anywhere on the same block",
          "Between the zone and the adjacent curb, and within 30 feet of points on the curb opposite its ends",
        ],
        correctIndex: 3,
        explanation:
          "You may not park between a safety zone and the adjacent curb, nor within 30 feet of the points on the curb opposite the zone's ends.",
        context:
          "A safety zone is space set aside for people boarding, entering and waiting for trolleys and light rail vehicles. You may not drive through one or park in one for any reason, and passing one is allowed only when safe and at no more than 10 mph.",
        trap: "Two numbers hide in this rule - a 30-foot parking clearance and a 10 mph passing limit - and they belong to different actions.",
        excerptKey: "park-safety-zone",
        sourceLabel: "Kansas Driving Handbook - Section 2, Parking",
        sourceUrl: hb(19),
      },
      {
        id: "ks_s5_21",
        topic: "safety",
        question:
          "How much extra following distance does Kansas ask for at night?",
        choices: [
          "None, if your headlights are working",
          "Double the daytime interval",
          "At least one additional second, and at least two additional seconds on unfamiliar roads at night",
          "Three additional seconds in all cases",
        ],
        correctIndex: 2,
        explanation:
          "One extra second for night driving, and two extra on roads you do not know at night.",
        context:
          "The reason is that headlights, not your eyes, set your sight distance after dark. Low beams show 150 to 200 feet, which supports about 45 mph; high beams show 350 to 400 feet, which supports about 65 mph.",
        trap: "The unfamiliar-road figure is the one people forget. Both numbers sit in the same paragraph on page 77.",
        excerptKey: "night-following",
        sourceLabel: "Kansas Driving Handbook - Section 8, Vision Limitations",
        sourceUrl: hb(77),
      },
      {
        id: "ks_s5_22",
        topic: "rightOfWay",
        question:
          "An ambulance passes you with lights and siren going. How far behind it must you stay?",
        choices: [
          "100 feet",
          "200 feet",
          "300 feet",
          "At least 500 feet",
        ],
        correctIndex: 3,
        explanation:
          "At least 500 feet. Kansas also says never to follow an emergency vehicle at all.",
        context:
          "Section 7 puts the same distance in time: 500 feet is a minimum of 12 seconds at 30 mph and 6 seconds at 60 mph. And if an emergency vehicle is entering or leaving its garage with the lights still flashing, you stop until it is safely out of your path.",
        trap: "Following an ambulance through traffic looks like an easy way through and it is illegal, dangerous and specifically named in the handbook.",
        excerptKey: "stay-500-feet",
        sourceLabel: "Kansas Driving Handbook - Section 9, Emergency Vehicles",
        sourceUrl: hb(85),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_23",
        topic: "signs",
        question:
          "A blue sign at a railroad crossing carries a toll-free number and a Department of Transportation number. What is it for?",
        choices: [
          "Reporting a train running late",
          "Reporting a problem or emergency at that crossing, 24 hours a day",
          "Requesting the gates be raised",
          "Reporting a crossing that has been permanently closed",
        ],
        correctIndex: 1,
        explanation:
          "That is the Emergency Notification System sign. It gives you a railroad dispatcher's number available around the clock and an identifier for the exact crossing you are standing at.",
        context:
          "The handbook lists what to report: malfunctioning signals or gates, a vehicle stuck on the tracks, trespassers on the right of way, and any other unsafe condition. Railroad dispatchers are the people who can actually stop the trains.",
        trap: "Calling 911 is the reflex and it does not reach the dispatcher directly. The whole point of the sign is that a dispatcher can halt traffic on that line.",
        excerptKey: "ens-sign",
        sourceLabel: "Kansas Driving Handbook - Section 6, Emergency Notification Systems",
        sourceUrl: hb(37),
      },
      {
        id: "ks_s5_24",
        topic: "rules",
        question:
          "You are about to pass on a two-lane road and an intersection is coming up in 80 feet. Is the pass lawful?",
        choices: [
          "No - passing is prohibited within 100 feet of an intersection or railroad grade crossing",
          "Yes, as long as the oncoming lane is clear",
          "Yes, if the intersection has no stop sign",
          "Yes, if you complete the pass before the intersection",
        ],
        correctIndex: 0,
        explanation:
          "One hundred feet of an intersection or a railroad grade crossing is a no-passing zone in Kansas, regardless of what you can see.",
        context:
          "The handbook's no-passing list also covers 100 feet of a bridge, viaduct or tunnel where your view is obstructed, hills and curves, any place with a solid yellow line on your side, anywhere signs prohibit it, and within 100 feet of a stopped emergency vehicle showing its lights.",
        trap: "\"The way looks clear\" is not the standard. Passing at an intersection is dangerous precisely because a vehicle can enter from a direction you were not watching.",
        excerptKey: "no-pass-bridge",
        sourceLabel: "Kansas Driving Handbook - Section 2, Passing",
        sourceUrl: hb(17),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_25",
        topic: "speed",
        question:
          "You enter a work zone and there is no reduced speed limit sign anywhere. What speed applies?",
        choices: [
          "20 mph, as in a school zone",
          "Half the posted limit",
          "Whatever speed the flaggers indicate",
          "The road's normal posted speed limit",
        ],
        correctIndex: 3,
        explanation:
          "If a work zone posts no reduced limit, you obey the road's normal posted speed limit. The reduced limits are posted when they apply.",
        context:
          "The rest of the work-zone rules do not depend on a sign: merge as soon as you see the zone, increase following distance, do not tailgate, move away from the side where workers and equipment are, and use extra caution at night whether workers are visible or not. Some zones - line painting, patching, mowing - are mobile.",
        trap: "A moving violation in a road construction zone carries a doubled fine by statute, whether or not the limit was reduced.",
        excerptKey: "no-reduced-limit",
        sourceLabel: "Kansas Driving Handbook - Section 10, Work Zones",
        sourceUrl: hb(91),
      },
      {
        id: "ks_s5_26",
        topic: "sharing",
        question:
          "You are passing a safety zone where people are waiting for a light rail vehicle. What speed limit applies?",
        choices: [
          "The posted speed limit",
          "20 mph",
          "No faster than 10 mph, once it is safe to pass",
          "You may not pass at all",
        ],
        correctIndex: 2,
        explanation:
          "You may pass the zone as soon as it is safe, at no more than 10 mph. Driving through one or parking in it is prohibited for any reason.",
        context:
          "Where there is no safety zone and people are boarding or leaving a trolley or light rail vehicle, you stop behind the nearest door or vehicle platform and wait until they have reached a safe place. Passing a trolley on the left is not allowed except on a one-way street or where the tracks make passing on the right impossible.",
        trap: "The 20 mph answer is a school-zone number. The safety-zone figure is 10.",
        excerptKey: "safety-zone-10-mph",
        sourceLabel: "Kansas Driving Handbook - Section 9, Public Transportation",
        sourceUrl: hb(87),
      },
      {
        id: "ks_s5_27",
        topic: "licensing",
        question:
          "A 14-year-old wants a Kansas farm permit. What does the handbook require of the farm?",
        choices: [
          "At least 20 acres used in agricultural operations",
          "Any property zoned rural",
          "At least 40 acres, owned by the family",
          "Any property where livestock is kept",
        ],
        correctIndex: 0,
        explanation:
          "A farm means at least 20 acres used in agricultural operations. The applicant must live on it or be employed for compensation on it, and an employer's affidavit is needed in the employment case.",
        context:
          "The farm permit runs from 14 to under 17 and its restrictions are narrow: farm work, and the most direct route between home and school for attendance, not activities. No non-sibling minor passengers, and no wireless devices except to report illegal activity or summon emergency help.",
        trap: "Kansas driving forums are full of advice to claim a farm permit for the convenience. It carries an affidavit signed by a parent or guardian and, where employment is claimed, by the employer.",
        excerptKey: "farm-permit",
        sourceLabel: "Kansas Driving Handbook - Section 1, Farm Permit",
        sourceUrl: hb(11),
      },
      {
        id: "ks_s5_28",
        topic: "impairment",
        question:
          "Where may an opened container of alcohol legally be carried in a Kansas car with a trunk?",
        choices: [
          "Anywhere out of the driver's reach",
          "In the locked rear trunk or another locked outside compartment not accessible to anyone in the vehicle while it is moving",
          "On the rear floor, behind the front seats",
          "In the glove compartment, if it is closed",
        ],
        correctIndex: 1,
        explanation:
          "The statute allows an unopened original container, or an opened one in a locked trunk or locked outside compartment that nobody in the car can reach while it is in motion.",
        context:
          "Where a vehicle has no trunk, the law permits the container behind the last upright seat or in an area not normally occupied by the driver or a passenger. Transporting an open container of liquor or cereal malt beverage is also on the handbook's list of grounds for license suspension.",
        trap: "The back seat is not a trunk. Kansas requires the compartment to be locked and unreachable, not merely distant.",
        excerptKey: "st-open-container",
        sourceLabel: "K.S.A. 8-1599 - Transportation of liquor in opened containers",
        sourceUrl: `${KSA}/008_015_0099.html`,
      },
      {
        id: "ks_s5_29",
        topic: "emergencies",
        question:
          "A driver is tailgating you and there is no empty lane to move into. What does Kansas tell you to do?",
        choices: [
          "Brake sharply to make the point",
          "Wait until the road ahead is clear, then reduce speed slowly to encourage them to go around",
          "Speed up until they fall back",
          "Turn on your hazard flashers",
        ],
        correctIndex: 1,
        explanation:
          "Wait for clear road ahead, then slow gradually so the tailgater can pass. If there is an empty lane, move into it and let them by.",
        context:
          "The handbook also has you open the gap in front of your car by 2 to 3 extra seconds when you are being followed too closely, so that if you do have to stop, you can do it gently enough that the driver behind can stop too.",
        trap: "Brake-checking is named in the handbook as increasing your risk of being hit from behind and as a route into aggressive driving. Never slow down quickly to discourage a tailgater.",
        excerptKey: "tailgater",
        sourceLabel: "Kansas Driving Handbook - Section 7, Space Behind",
        sourceUrl: hb(64),
      },
      {
        id: "ks_s5_30",
        topic: "safety",
        question:
          "What is the enhanced side-mirror setting supposed to achieve?",
        choices: [
          "About 12 to 16 degrees of additional viewing area on each side of the vehicle",
          "A clear view of your own rear fender at all times",
          "Better vision while reversing into a tight space",
          "A view of the road surface immediately behind the car",
        ],
        correctIndex: 0,
        explanation:
          "Setting the mirrors outward by leaning your head toward the window first adds 12 to 16 degrees of view on each side. You give up the sight of your own vehicle to get it.",
        context:
          "The handbook says the enhanced setting will not work on every car and that the traditional setting may then be more appropriate - especially on trucks, vans and SUVs when towing or backing in tight spaces.",
        trap: "Neither setting removes the need for a shoulder check. Blind spots are defined as the areas mirrors do not show, and failing to check them is an automatic road-test failure.",
        excerptKey: "traditional-mirrors",
        sourceLabel: "Kansas Driving Handbook - Section 4, Adjusting Seat and Mirrors",
        sourceUrl: hb(26),
      },
      {
        id: "ks_s5_31",
        topic: "signals",
        question:
          "You are stopped at a signal and no crosswalk is marked. Where do you stop?",
        choices: [
          "Level with the signal head",
          "Wherever you can see the cross street",
          "Half a car length into the intersection",
          "Before entering the intersection",
        ],
        correctIndex: 3,
        explanation:
          "With no stop line and no crosswalk, you stop before entering the intersection. The handbook says so directly: if crosswalks are not apparent, stop prior to entering.",
        context:
          "The order of preference is stop line first, then crosswalk, then the intersection edge. At a stop sign with none of the three marked, the statute puts you at the point nearest the intersecting roadway where you have a view of approaching traffic.",
        trap: "Creeping in to see better is a separate, later step and only after you have stopped where the rule puts you.",
        excerptKey: "crosswalk-yield",
        sourceLabel: "Kansas Driving Handbook - Section 6, Crosswalks and Stop Lines",
        sourceUrl: hb(44),
      },
      {
        id: "ks_s5_32",
        topic: "rules",
        question:
          "When may you pass another vehicle on the right in Kansas?",
        choices: [
          "Whenever the right lane is moving faster",
          "Never",
          "On one-way streets and highways marked for two or more lanes moving in the same direction",
          "On the shoulder, if the vehicle ahead is turning left",
        ],
        correctIndex: 2,
        explanation:
          "Passing on the right is lawful on a one-way street, and on a highway marked for two or more lanes running the same direction. You still check ahead and behind and signal.",
        context:
          "The shoulder is not one of those lanes. Kansas says never to drive on the shoulder to pass except in an emergency or when directed by traffic authorities, and warns that a driver ahead may pull off without looking for you.",
        trap: "The shoulder answer is the one that catches people on a rural highway where someone is waiting to turn left. Kansas has no left-turn exception for the shoulder.",
        excerptKey: "pass-on-right",
        sourceLabel: "Kansas Driving Handbook - Section 2, Passing On The Right",
        sourceUrl: hb(17),
        commonlyMissed: true,
      },
      {
        id: "ks_s5_33",
        topic: "parking",
        question:
          "Which of these is NOT on the Kansas list of places you may not park?",
        choices: [
          "On a bridge or in a tunnel",
          "In a legal space alongside a curb in a business district",
          "Double-parked alongside another parked vehicle",
          "In front of a driveway",
        ],
        correctIndex: 1,
        explanation:
          "Parking legally at a curb is exactly what the rules contemplate. The other three are all on the prohibited list.",
        context:
          "The full list also covers intersections, crosswalks, sidewalks, no-parking zones marked by signs, narrow streets where parking would interfere with traffic, alongside street excavations or obstructions that would block traffic, and handicapped spaces without the plate, tag or sticker.",
        trap: "The double-parking entry is written as \"Double or 'two-deep' along the curb\", which people read as being about the curb rather than about the second car.",
        excerptKey: "park-double",
        sourceLabel: "Kansas Driving Handbook - Section 2, Parking",
        sourceUrl: hb(19),
      },
      {
        id: "ks_s5_34",
        topic: "signs",
        question:
          "Some Kansas warning signs are fluorescent yellow rather than standard yellow. Which ones?",
        choices: [
          "Railroad crossings",
          "Deer crossings",
          "Advisory speed signs",
          "School zones, school crossings and pedestrian crossings",
        ],
        correctIndex: 3,
        explanation:
          "Fluorescent yellow is used for school zones, school crossings and pedestrian crossings - the warnings that involve people on foot.",
        context:
          "The standard warning sign remains a yellow diamond with black lettering or symbols. Orange marks work zones, fluorescent pink marks unplanned incidents, and white with black, red or green marks regulations.",
        trap: "Every option here is a real warning sign. Only the pedestrian-related family gets the brighter yellow.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Kansas Driving Handbook - Section 6, Warning Signs",
        sourceUrl: hb(35),
      },
      {
        id: "ks_s5_35",
        topic: "rightOfWay",
        question:
          "Which statement matches how the Kansas handbook describes right-of-way?",
        choices: [
          "The law says who must yield the right-of-way; it does not give anyone the right-of-way",
          "The right-of-way belongs to whoever arrives first, in every situation",
          "The right-of-way is granted by signs and signals and belongs to the driver they favor",
          "The right-of-way always belongs to the larger vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Kansas frames right-of-way entirely as a duty to yield. Nobody is granted it - you only gain it when another road user gives it to you.",
        context:
          "The consequence the handbook draws is a hard one: you must do everything possible to prevent striking a pedestrian, property or another vehicle, regardless of the circumstances. Being legally in the right is not a defense to a collision you could have avoided.",
        trap: "This is the single idea underneath every other right-of-way question. If you read the rules as granting you something, you will answer half of them backwards.",
        excerptKey: "row-not-granted",
        sourceLabel: "Kansas Driving Handbook - Section 6, Right-Of-Way",
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix and at the difficulty of the real Kansas knowledge test - signs, pavement markings, traffic law and driving practice, with no hints beyond what the exam itself gives you.",
    questions: [
      {
        id: "ks_s6_01",
        topic: "signs",
        question:
          "You see a white rectangular sign with black lettering stating a rule. What kind of sign is it?",
        choices: ["A guide sign", "A warning sign", "An incident sign", "A regulatory sign"],
        correctIndex: 3,
        explanation:
          "White with black, red or green lettering is the regulatory family. These signs state laws you must obey - speed, lane use, turning, parking.",
        context:
          "Kansas sorts every sign by color first. Yellow warns, orange marks work zones, fluorescent pink marks incidents, green, brown and blue guide, and white regulates.",
        trap: "Guide signs are also rectangular. The color is what separates them.",
        excerptKey: "regulatory-signs",
        sourceLabel: "Kansas Driving Handbook - Section 6, Regulatory Signs",
        sourceUrl: hb(39),
      },
      {
        id: "ks_s6_02",
        topic: "rightOfWay",
        question:
          "You are entering a through street controlled by a stop sign. What does Kansas require?",
        choices: [
          "Stop completely, then proceed when you can do so without interfering with other traffic",
          "Slow and merge with the flow",
          "Yield only to vehicles on your right",
          "Stop only if a vehicle is within 100 feet",
        ],
        correctIndex: 0,
        explanation:
          "A complete stop, then you go when you can do it without interfering with the traffic already on the through street.",
        context:
          "The stop is at the marked stop line if there is one, otherwise before the crosswalk on the near side, otherwise at the point nearest the intersecting roadway. Rolling through is one of the automatic failures on the Kansas road test.",
        trap: "A gap you can just fit into is not the standard. The test is whether you can proceed without interfering.",
        excerptKey: "stop-at-stop-sign",
        sourceLabel: "Kansas Driving Handbook - Section 2, Stopping",
        sourceUrl: hb(18),
      },
      {
        id: "ks_s6_03",
        topic: "speed",
        question:
          "It has just started to rain on a hot Kansas afternoon. Why is the road especially slippery?",
        choices: [
          "Rain lowers tire pressure",
          "Water expands the asphalt",
          "Water mixes with dirt, oil and other substances on the surface, and heat has drawn oil out of the asphalt",
          "Cool rain hardens the tire rubber",
        ],
        correctIndex: 2,
        explanation:
          "The first few minutes are the worst. Water lifts dirt and oil off the surface, and on a hot day the heat has already pulled oil in the asphalt to the top.",
        context:
          "That is why Kansas tells you to reduce speed at the first sign of rain, snow or sleet rather than waiting to feel the car slip. On a wet road the guidance is about 10 mph below recommended speeds.",
        trap: "This is one of the handbook's printed sample questions and its answer is that roads are more slippery when it FIRST starts to rain - not after it has been raining a while.",
        excerptKey: "first-rain-slippery",
        sourceLabel: "Kansas Driving Handbook - Section 7, Adjusting to Roadway Conditions",
        sourceUrl: hb(59),
      },
      {
        id: "ks_s6_04",
        topic: "safety",
        question:
          "You are stopping behind another vehicle at a light. How much gap should you leave?",
        choices: [
          "One full car length",
          "Enough that you can see the rear tires of the vehicle ahead",
          "Enough to see its rear bumper",
          "Two seconds' worth of travel",
        ],
        correctIndex: 1,
        explanation:
          "The rear-tires rule. If you can see where the tires meet the road, you have room to pull around the car ahead if you need to, and room for the vehicle behind to stop short of you.",
        context:
          "Kansas uses this on the road test as well as in the handbook: when stopping behind another vehicle, make sure you can see the rear wheels of the vehicle in front. Stop lines exist partly for the same reason - to set you far enough back to give large vehicles turning room.",
        trap: "The two-second rule measures a moving gap. This one measures a stationary one, and it is judged by what you can see, not by distance.",
        excerptKey: "stop-behind-rear-tires",
        sourceLabel: "Kansas Driving Handbook - Section 11, How You Will Be Tested",
        sourceUrl: hb(104),
      },
      {
        id: "ks_s6_05",
        topic: "signals",
        question:
          "What does a solid white line between two lanes going the same direction mean?",
        choices: [
          "Passing is permitted",
          "Stay within your lane unless a special situation requires a lane change",
          "The lane to your right is closed",
          "You are approaching a one-way street",
        ],
        correctIndex: 1,
        explanation:
          "A solid white line asks you to stay put. You cross it only when a special situation requires the change.",
        context:
          "A dashed white line is the permissive version - change lanes when there is a safe gap. Solid white lines also designate turn lanes and prevent lane changes near intersections, and they mark the right edge of the roadway.",
        trap: "Solid white is not as absolute as double solid yellow, but it is not an invitation either.",
        excerptKey: "white-lines",
        sourceLabel: "Kansas Driving Handbook - Section 6, White Lane Markings",
        sourceUrl: hb(43),
      },
      {
        id: "ks_s6_06",
        topic: "impairment",
        question:
          "How does the Kansas handbook describe the effect of fatigue on a driver?",
        choices: [
          "It slows reactions but leaves judgment intact",
          "It affects only long-distance drivers",
          "Like alcohol and drugs, it impairs vision and judgment",
          "It is a comfort issue rather than a safety issue",
        ],
        correctIndex: 2,
        explanation:
          "Kansas puts fatigue in the same category as alcohol and drugs: it impairs vision and judgment, causes errors of speed and distance, and lengthens the time you need to decide.",
        context:
          "The countermeasures are practical. Sleep 7 to 9 hours before a long drive, break about every 100 miles or two hours, share the driving, avoid alcohol and sedating medication, and if drowsiness arrives on the road, stop and nap for 15 to 20 minutes.",
        trap: "Needing the radio loud or the window open is listed as a warning sign of fatigue, not a fix for it.",
        excerptKey: "fatigue-definition",
        sourceLabel: "Kansas Driving Handbook - Section 3, Fatigue",
        sourceUrl: hb(20),
      },
      {
        id: "ks_s6_07",
        topic: "rules",
        question:
          "On a Kansas road with three or more lanes running your direction, which lane does the handbook recommend?",
        choices: [
          "The left lane, to stay clear of exits",
          "The right lane at all times",
          "Whichever is moving fastest",
          "The center travel lane, especially where traffic is entering and exiting",
        ],
        correctIndex: 3,
        explanation:
          "With three or more lanes, Kansas puts you in the center, and specifically where there is a lot of traffic joining and leaving. It keeps you clear of merges on both sides.",
        context:
          "With only two lanes the rule is different: stay right except to pass. The left-most lane on a multi-lane road is intended for passing slower vehicles, not for cruising.",
        trap: "The right-lane rule and the center-lane rule apply to different roads, and the number of lanes is what decides which one you are under.",
        excerptKey: "three-lanes-center",
        sourceLabel: "Kansas Driving Handbook - Section 6, General Rules, General Driving",
        sourceUrl: hb(46),
      },
      {
        id: "ks_s6_08",
        topic: "sharing",
        question:
          "Roughly what proportion of motorcycle crashes that involve another vehicle are caused by that vehicle turning left in front of the rider?",
        choices: ["Nearly 40 percent", "About 10 percent", "About 70 percent", "About 5 percent"],
        correctIndex: 0,
        explanation:
          "Nearly 40 percent. About half of all motorcycle, scooter and moped crashes involve another motor vehicle, and the left turn across the rider's path is the single biggest cause.",
        context:
          "The reason is perception. A motorcycle's small profile makes its speed and distance hard to judge, so drivers pull out into a gap that is not there. Kansas tells you to look carefully to the front and sides before turning left.",
        trap: "Do not read a flashing turn signal on a motorcycle as a decision. Motorcycle signals often do not self-cancel, and the rider may have forgotten it.",
        excerptKey: "motorcycle-left-turn",
        sourceLabel: "Kansas Driving Handbook - Section 9, Motorcycles, Scooters and Mopeds",
        sourceUrl: hb(83),
      },
      {
        id: "ks_s6_09",
        topic: "parking",
        question: "What does a white painted curb mean in Kansas?",
        choices: [
          "Only short stops are permitted",
          "A loading zone",
          "A fire zone",
          "Handicap parking",
        ],
        correctIndex: 0,
        explanation:
          "White means short stops only - long enough to drop someone off or pick something up, not to park.",
        context:
          "The other three colors: yellow for a loading zone or other restriction, blue for a handicap restriction, red for fire zone restrictions.",
        trap: "Four colors, four meanings, and they are given in a single short list on page 55. Learning them separately is what causes the mix-ups.",
        excerptKey: "painted-curbs",
        sourceLabel: "Kansas Driving Handbook - Section 6, No-Parking Zones",
        sourceUrl: hb(55),
      },
      {
        id: "ks_s6_10",
        topic: "emergencies",
        question:
          "Your car is about to be hit from the front and you cannot stop in time. What does Kansas suggest?",
        choices: [
          "Brace against the steering wheel",
          "Release the belt so you can move away from the impact",
          "Aim at the other vehicle squarely to spread the force",
          "Try to turn the vehicle so the impact becomes a glancing blow",
        ],
        correctIndex: 3,
        explanation:
          "Turn if you can, so a head-on becomes a glancing blow - or so you miss altogether. And expect the air bag to deploy and then deflate immediately.",
        context:
          "The other two impact directions get their own advice. Hit from the rear, press back into the seat with your head against the restraint and be ready to brake so you are not pushed into another vehicle. Hit from the side, your lap and shoulder belts are what keep you behind the wheel, because frontal air bags will not help.",
        trap: "The safety belt is the one constant across all three. The handbook calls it the most important thing you can do, and warns it also protects you in a second impact.",
        excerptKey: "hit-from-rear",
        sourceLabel: "Kansas Driving Handbook - Section 8, Protect Yourself in Collisions",
        sourceUrl: hb(74),
      },
      {
        id: "ks_s6_11",
        topic: "licensing",
        question:
          "How long do you have to obtain a Kansas driver's license after moving to the state?",
        choices: ["30 days", "90 days", "6 months", "1 year"],
        correctIndex: 1,
        explanation:
          "Ninety days. Anyone operating a motor vehicle, motorcycle or motor-driven cycle on public Kansas roads must have a Kansas license within 90 days of moving here.",
        context:
          "Some people may keep driving on a valid out-of-state license if they are at least 16: active-duty military and their families, out-of-state students who are non-residents for tuition, employees here temporarily for job instruction, and foreign visitors here up to a year on valid immigration documents.",
        trap: "The exemptions are about your status, not about how long you have been here. A new resident does not qualify for any of them.",
        excerptKey: "licence-required",
        sourceLabel: "Kansas Driving Handbook - Section 1, About This Manual",
        sourceUrl: hb(11),
      },
      {
        id: "ks_s6_12",
        topic: "signs",
        question:
          "A white X-shaped sign reading RAILROAD CROSSING stands beside the tracks. What does it require?",
        choices: [
          "Slow down and be ready to stop",
          "Stop every time, whether or not a train is coming",
          "Wait for any approaching train, keeping your vehicle behind the stop line until the crossing is clear",
          "Nothing, if lights and gates are also present",
        ],
        correctIndex: 2,
        explanation:
          "The crossbuck sits at the crossing itself. You wait for any approaching train or railroad vehicle, staying behind the stop line until the crossing is clear.",
        context:
          "The round yellow RR sign is the advance warning that comes first, telling you to slow, look and listen. Where a crossing has more than one track, the number of tracks is posted - though not always, so check for a second track at every crossing.",
        trap: "Kansas does not require an unconditional stop at every crossing. It requires you to yield to trains at all of them, always.",
        excerptKey: "crossbuck",
        sourceLabel: "Kansas Driving Handbook - Section 6, Railroad Crossing Warning Signs",
        sourceUrl: hb(36),
      },
      {
        id: "ks_s6_13",
        topic: "rightOfWay",
        question:
          "You are crossing a sidewalk to pull out of a parking lot. Who has the right-of-way?",
        choices: [
          "You, if you have already started across",
          "Whoever is moving faster",
          "Pedestrians on the sidewalk",
          "Neither party has priority on a sidewalk",
        ],
        correctIndex: 2,
        explanation:
          "Crossing a sidewalk to enter or leave a driveway, alley or parking lot means yielding to pedestrians. It is illegal to drive on a sidewalk at all except to cross one.",
        context:
          "Inside a business or residential district there is a stop involved as well: you must stop immediately before driving onto the sidewalk or the sidewalk area, then yield the right-of-way to pedestrians and traffic.",
        trap: "Having begun the maneuver does not transfer priority. The duty to yield to pedestrians is described as absolute.",
        excerptKey: "sidewalk-illegal",
        sourceLabel: "Kansas Driving Handbook - Section 6, Right-Of-Way",
        sourceUrl: hb(33),
      },
      {
        id: "ks_s6_14",
        topic: "speed",
        question:
          "You are approaching a sharp curve. When should you slow down?",
        choices: [
          "While in the curve, using steady braking",
          "Before entering it, to a speed you can hold with slight steady acceleration through the curve",
          "After the apex, once the car has settled",
          "Only if the advisory speed sign requires it",
        ],
        correctIndex: 1,
        explanation:
          "All the braking happens before the curve. You enter at a speed you can carry through with slight, constant acceleration.",
        context:
          "The physics the handbook gives: a car goes faster in a straight line than in a curve, and momentum wants to carry it straight. Hard braking after you have entered the curve can break traction. Reduce further when traction is poor, when following another vehicle, or when you cannot see the exit.",
        trap: "Braking in the curve is the instinctive correction and it is the one that puts the car into the ditch.",
        excerptKey: "curve-reduce-before",
        sourceLabel: "Kansas Driving Handbook - Section 7, Adjusting to Roadway Conditions",
        sourceUrl: hb(59),
      },
      {
        id: "ks_s6_15",
        topic: "safety",
        question:
          "Another driver's high beams are blinding you on a two-lane road at night. What should you do?",
        choices: [
          "Flash your headlights once quickly, and if they do not dim, look toward the right side of the road",
          "Switch your own high beams on until they dim theirs",
          "Look directly at their headlights so your eyes adjust",
          "Slow to a stop on the shoulder",
        ],
        correctIndex: 0,
        explanation:
          "One quick flash, then look toward the right edge of the road to keep your eyes out of the glare. The road edge gives you a reference to steer by.",
        context:
          "You dim your own high beams within about a one-block distance of an oncoming vehicle, and use low beams when following another car, in heavy traffic, or in fog, snow or heavy rain. Colored or dark lenses are ruled out at night entirely.",
        trap: "This is one of the handbook's own Section 10 questions. Retaliating with your own high beams blinds both drivers, which the book says can cause a crash.",
        excerptKey: "flash-once",
        sourceLabel: "Kansas Driving Handbook - Section 10, Night Driving",
        sourceUrl: hb(91),
      },
      {
        id: "ks_s6_16",
        topic: "impairment",
        question:
          "A friend has been drinking and wants to drive home. What does the Kansas handbook tell you to do?",
        choices: [
          "Let them go if they seem steady",
          "Follow them home to be safe",
          "Give them coffee and wait 20 minutes",
          "Take their keys, arrange a sober driver, call a cab or have them stay overnight",
        ],
        correctIndex: 3,
        explanation:
          "Kansas gives four options and they are all versions of the same thing: the person does not drive. Take the keys, find a sober driver, call a cab, or put them up for the night.",
        context:
          "The book opens that passage with an instruction rather than a suggestion - never let a friend or relative drive if they have been drinking - and follows it with the reminder that only time removes alcohol from the body.",
        trap: "Seeming steady is not evidence. Judgment is one of the first things alcohol takes, which is why the drinker is the worst judge of whether they should drive.",
        excerptKey: "time-only-cure",
        sourceLabel: "Kansas Driving Handbook - Section 3, Alcohol",
        sourceUrl: hb(23),
      },
      {
        id: "ks_s6_17",
        topic: "signals",
        question:
          "You are in a left-turn lane and the green arrow disappears, leaving a steady green ball. May you still turn left?",
        choices: [
          "No, the turn is now prohibited",
          "Only from a one-way street",
          "Yes, without yielding",
          "Yes, but you must yield to oncoming traffic and to pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "A steady green permits the turn but does not protect it. You yield to oncoming traffic and to pedestrians and turn only when the intersection is clear.",
        context:
          "Kansas signs some of these intersections with a LEFT TURN YIELD ON GREEN panel to make the point explicit. Where a yellow arrow appears instead, the protection is ending and you should prepare to stop.",
        trap: "The disappearance of the arrow is not a prohibition. It is a change from a protected turn to a permissive one.",
        excerptKey: "left-turn-yield-green",
        sourceLabel: "Kansas Driving Handbook - Section 6, Left Turn Yield on Green",
        sourceUrl: hb(41),
      },
      {
        id: "ks_s6_18",
        topic: "sharing",
        question:
          "What is the Dutch Reach, and why does the Kansas handbook teach it?",
        choices: [
          "A mirror adjustment that removes blind spots",
          "Opening your door with your right hand, which turns your body so you can see traffic approaching from the rear",
          "A method of merging into a bike lane",
          "A hand signal used by bicyclists",
        ],
        correctIndex: 1,
        explanation:
          "Using the far hand on the door handle rotates your shoulders and head toward the rear, so you look at what is coming before the door opens.",
        context:
          "It sits in the bicycle section because a door opened into a bike lane is one of the most common ways drivers hurt cyclists. Kansas also tells you to check the sides and rear for bicyclists before opening the door when parked on the street or parallel parked.",
        trap: "It is a habit for getting out of a parked car, not a driving technique. That is why people who skim the bicycle chapter miss it.",
        excerptKey: "dutch-reach",
        sourceLabel: "Kansas Driving Handbook - Section 9, Bicyclists",
        sourceUrl: hb(82),
      },
      {
        id: "ks_s6_19",
        topic: "rules",
        question:
          "You are approaching your exit on a busy Kansas expressway. When should you be in the correct lane?",
        choices: [
          "At the exit gore",
          "One quarter of a mile before",
          "About half a mile before the exit",
          "As soon as you see the two-mile sign",
        ],
        correctIndex: 2,
        explanation:
          "About half a mile out in heavy traffic, because changing lanes late is exactly when you cannot.",
        context:
          "You hold your speed until the car is actually on the deceleration lane, and slow down there rather than on the main roadway. Check the posted speed for the ramp and look behind you before you reduce speed.",
        trap: "Braking on the main carriageway is the error the deceleration lane exists to prevent.",
        excerptKey: "exit-half-mile",
        sourceLabel: "Kansas Driving Handbook - Section 7, Exiting traffic flow",
        sourceUrl: hb(60),
      },
      {
        id: "ks_s6_20",
        topic: "signs",
        question:
          "A sign shows a lane reserved for left-turning vehicles from either direction. What may you not do in that lane?",
        choices: [
          "Use it for through traffic or to pass other vehicles",
          "Turn left from it",
          "Enter it from a side street",
          "Wait in it for a gap",
        ],
        correctIndex: 0,
        explanation:
          "The shared center lane is for left turns only. It is not for through traffic and it is not for passing.",
        context:
          "The pavement says the same thing: a solid yellow line on the outside means no passing, and broken yellow lines on the inside mean either direction may use it to turn left. Do not move into it too soon, because the longer you sit there the more likely you are to meet someone head on.",
        trap: "Using it to build speed before merging is the most common misuse and it is what the solid outer line prohibits.",
        excerptKey: "shared-center-sign",
        sourceLabel: "Kansas Driving Handbook - Section 6, Shared Center Lane Left Turn Only",
        sourceUrl: hb(40),
      },
      {
        id: "ks_s6_21",
        topic: "emergencies",
        question:
          "You are the first to arrive at a crash involving a deer on a Kansas highway. What does the handbook tell you to do?",
        choices: [
          "Report the crash to the police",
          "Move the animal off the road yourself",
          "Nothing, unless a person is injured",
          "Wait for another motorist before calling",
        ],
        correctIndex: 0,
        explanation:
          "Report it to the police when a large animal such as a deer or a farm animal is involved. If the animal is a domestic pet and homes are nearby, try to notify the owner.",
        context:
          "The advice about the collision itself is to keep control of the car and stay on the roadway rather than swerving, because a swerve is more likely to injure you than the impact is.",
        trap: "Handling a large injured animal is not part of the instruction, and the handbook adds that you should not go inside anyone's home while looking for a pet's owner.",
        excerptKey: "report-large-animal",
        sourceLabel: "Kansas Driving Handbook - Section 10, Avoiding Collisions with Animals",
        sourceUrl: hb(93),
      },
      {
        id: "ks_s6_22",
        topic: "safety",
        question:
          "How long does the handbook say it takes for a vehicle to complete a left turn and get back up to speed?",
        choices: [
          "3 to 5 seconds",
          "8 to 10 seconds",
          "15 to 18 seconds",
          "20 to 25 seconds",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen to eighteen seconds for a left turn. A right turn takes 12 to 15, and going straight through an intersection after a stop takes 3 to 5.",
        context:
          "These are gap figures. They tell you how big a hole in traffic you need before you commit, and the left-turn number is the biggest because you cross the most lanes and accelerate from a standstill.",
        trap: "The 3 to 5 second figure covers only going straight through. Reaching for it before a left turn is how people get caught mid-intersection.",
        excerptKey: "turn-time-needed",
        sourceLabel: "Kansas Driving Handbook - Section 7, Space to Cross or Enter",
        sourceUrl: hb(65),
      },
      {
        id: "ks_s6_23",
        topic: "impairment",
        question:
          "How does the handbook describe the risk of driving after a single drink?",
        choices: [
          "One drink has no measurable effect",
          "One drink is safe if you weigh over 180 pounds",
          "One drink is only a problem for drivers under 21",
          "Impairment starts with the first drink, and a person with one or more drinks in the bloodstream is visibly impaired and could be arrested",
        ],
        correctIndex: 3,
        explanation:
          "Kansas says impairment starts with the first drink, that even one can affect your ability to operate a vehicle, and that a person with one or more drinks in the bloodstream is visibly impaired.",
        context:
          "That is why the handbook also says you can be convicted of driving impaired below 0.08. The legal threshold is where arrest becomes automatic, not where impairment begins.",
        trap: "Body weight, food and tolerance change how a person feels, not whether alcohol is in the circulatory system.",
        excerptKey: "impairment-first-drink",
        sourceLabel: "Kansas Driving Handbook - Section 3, Alcohol",
        sourceUrl: hb(23),
      },
      {
        id: "ks_s6_24",
        topic: "signals",
        question:
          "Traffic is being directed by a police officer at an intersection where the signal is showing green for you. What do you do?",
        choices: [
          "Follow the signal, because it is the legal control",
          "Obey the officer's directions",
          "Stop and wait for the signal to change",
          "Proceed only if the officer is facing you",
        ],
        correctIndex: 1,
        explanation:
          "Traffic control in Kansas includes people as well as devices. Law enforcement, highway personnel and school crossing guards can all direct traffic, and you must obey their directions.",
        context:
          "The same principle covers a flagger at a work site, whose instructions the handbook says you must follow, and a school crossing guard displaying a flag in the stop position, which requires a complete stop.",
        trap: "A green light is not a defense against ignoring an officer standing in the intersection.",
        excerptKey: "traffic-control-devices",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Control Devices",
        sourceUrl: hb(34),
      },
      {
        id: "ks_s6_25",
        topic: "licensing",
        question:
          "You are 16, have held your Kansas restricted license for six months and want to drive at 10 p.m. with a friend. Is that permitted?",
        choices: [
          "No, the 9 p.m. limit applies until 17",
          "Yes - after age 16 and six months on a restricted license, all age-related driving restrictions are removed",
          "Yes, but only with a licensed adult in the front seat",
          "Only if you are driving to or from work",
        ],
        correctIndex: 1,
        explanation:
          "Six months on a restricted license after turning 16 removes all the age-related restrictions - the 9 p.m. cutoff, the passenger limit and the trip-purpose limits.",
        context:
          "Before that point a 16-year-old may drive between 5 a.m. and 9 p.m., or at any hour to and from school, an authorized school activity, a religious activity, or a job, and may carry only one non-sibling minor passenger. The wireless-device ban applies throughout.",
        trap: "The unrestricted license itself comes at 17. This is a different thing: the restrictions lift at 16 and a half, even though the license class does not change.",
        excerptKey: "restrictions-removed",
        sourceLabel: "Kansas Driving Handbook - Section 1, Driving Restrictions 16-Year-Old",
        sourceUrl: hb(13),
      },
      {
        id: "ks_s6_26",
        topic: "rightOfWay",
        question:
          "You are turning right on a green light and a pedestrian steps into the crosswalk you are about to cross. Who has the right-of-way?",
        choices: [
          "You, because you have a green light",
          "Whoever entered the intersection first",
          "You, if the pedestrian started against the signal",
          "The pedestrian",
        ],
        correctIndex: 3,
        explanation:
          "Even facing a green light you must yield to all pedestrians in the intersection. You can only assume the right-of-way when your intended path is clear.",
        context:
          "Kansas tells you to be cautious of pedestrians approaching on your right as you prepare a right turn, especially on a red signal, and to check for people in your path before any left turn or U-turn even with a green arrow.",
        trap: "A green light manages vehicles. It says nothing about the people on foot crossing your turning path.",
        excerptKey: "green-light-pedestrians",
        sourceLabel: "Kansas Driving Handbook - Section 9, Pedestrians",
        sourceUrl: hb(80),
      },
      {
        id: "ks_s6_27",
        topic: "sharing",
        question:
          "A moped in Kansas is limited to what maximum design speed?",
        choices: [
          "30 mph",
          "20 mph",
          "45 mph",
          "25 mph",
        ],
        correctIndex: 0,
        explanation:
          "Thirty miles per hour. The definition also caps the motor at 3.5 brake horsepower and 130 cubic centimeters, and requires an automatic transmission.",
        context:
          "Scooters and mopeds share the motorcycle rules for lane use - a full lane each, and two may share one - but the handbook reminds you they travel much more slowly than motorcycles do.",
        trap: "Twenty-five is the slow-moving-vehicle threshold for the orange triangle emblem, which is a different rule about a different class of vehicle.",
        excerptKey: "moped-definition",
        sourceLabel: "Kansas Driving Handbook - Section 9, Motorcycles, Scooters and Mopeds",
        sourceUrl: hb(83),
      },
      {
        id: "ks_s6_28",
        topic: "rules",
        question:
          "Which of these does the Kansas handbook say you may NOT do on the shoulder?",
        choices: [
          "Stop for a mechanical emergency",
          "Pull over for an emergency vehicle",
          "Pass another vehicle",
          "Drive on it when directed by traffic authorities",
        ],
        correctIndex: 2,
        explanation:
          "Never pass on the shoulder, paved or not. Drivers pull off the road without looking for a vehicle that should not be there.",
        context:
          "The handbook allows shoulder use when law enforcement directs it or local regulations permit it, and it expects you to pull off the road when you have a breakdown or an emergency vehicle needs past. What it forbids is using the shoulder as a traffic lane.",
        trap: "\"Only for a moment\" and \"only because they were turning left\" are the two rationalizations. Neither appears in the handbook.",
        excerptKey: "never-pass-shoulder",
        sourceLabel: "Kansas Driving Handbook - Section 6, General Rules, Passing",
        sourceUrl: hb(46),
      },
      {
        id: "ks_s6_29",
        topic: "speed",
        question:
          "During which months are studded snow tires legal in Kansas?",
        choices: [
          "October 15 through March 15",
          "Any time snow is on the ground",
          "November 1 through April 1",
          "December 1 through March 1",
        ],
        correctIndex: 2,
        explanation:
          "November 1 through April 1. The handbook gives the window twice, in Section 7 and again in the winter driving appendix.",
        context:
          "The winter section adds that snow tires should go on before the first snowfall, and that on a front-wheel-drive car you put them on all four wheels rather than just the front.",
        trap: "The window is fixed by date, not by weather. Snow on the ground in late April does not extend it.",
        excerptKey: "studded-legal-window",
        sourceLabel: "Kansas Driving Handbook - Section 12, Winter Driving",
        sourceUrl: hb(109),
      },
      {
        id: "ks_s6_30",
        topic: "emergencies",
        question:
          "You are stranded in your car in a Kansas blizzard. What does the handbook tell you to do?",
        choices: [
          "Walk to the nearest visible building",
          "Run the engine continuously for heat",
          "Seal the vehicle completely against the wind",
          "Stay with the vehicle, run the engine about 10 minutes an hour, keep the exhaust pipe clear and leave a window slightly open",
        ],
        correctIndex: 3,
        explanation:
          "Stay put. Run the engine roughly ten minutes each hour to charge the battery and warm the interior, keep the exhaust pipe clear of snow, and leave at least one window partly open.",
        context:
          "The handbook says most deaths in these circumstances happen when people leave the vehicle, get lost and suffer prolonged exposure. It also has you turn on the hazard lights, hang a brightly colored cloth from a window, and keep at least one person awake.",
        trap: "Sealing the car up is the instinct and it is what causes carbon monoxide poisoning, especially once snow and ice have packed around the exhaust.",
        excerptKey: "stranded-stay",
        sourceLabel: "Kansas Driving Handbook - Section 12, Winter Driving",
        sourceUrl: hb(109),
      },
    ],
  },
];
