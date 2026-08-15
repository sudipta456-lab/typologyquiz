import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Illinois Rules of the Road (2026
// edition, DSD A 112.47), published by the Illinois Secretary of State, plus
// the Secretary of State's own graduated-licensing pages and, where the
// handbook states a rule only as a table or is silent on a penalty, the
// Illinois Vehicle Code (625 ILCS 5) and 92 Ill. Adm. Code 1030.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch - the deep link is there so the learner reads the
// Secretary of State's own authoritative wording on the government's site.
const HB = "https://www.ilsos.gov/content/dam/publications/pdf_publications/dsd_a112.pdf";
const GDL = "https://www.ilsos.gov/departments/drivers/teen-driver-safety/gdl.html";
const ILCS = (section: string) =>
  `https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=${section}`;

export const illinoisSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Illinois Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Illinois: what the shapes and colours mean, who goes first, and the handful of numbers the Secretary of State's written exam expects you to know cold.",
    questions: [
      {
        id: "il_s1_01",
        topic: "signs",
        question:
          "You approach an eight-sided red sign at an intersection. What does Illinois require of you?",
        choices: [
          "Come to a full stop at the stop line before proceeding",
          "Slow to a crawl and continue if nothing is coming",
          "Stop only when another vehicle is already in the intersection",
          "Yield to traffic on the through road without stopping",
        ],
        correctIndex: 0,
        explanation:
          "The octagon carries one message and one only: a full stop. You stop at the stop line; with no stop line you stop before the crosswalk, and with no crosswalk you stop before entering the intersection.",
        context:
          "Illinois signs carry meaning in shape and colour as well as words, so you can start reacting before you can read them. An octagon means stop, a downward triangle means yield, a yellow diamond warns of something ahead and orange means roadwork. Learning the shape-and-colour system is worth more marks than memorising individual signs, because the written exam shows signs you have never seen and expects you to reason from the shape.",
        trap:
          "Slowing to a crawl is the rolling stop that gets people ticketed. Illinois wants the vehicle stopped, not merely slow, however empty the road looks.",
        excerptKey: "sign-stop-octagon",
        sourceLabel: "Illinois Rules of the Road - Roadway Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s1_02",
        topic: "signals",
        question: "A traffic light ahead of you shows a steady red. What must you do?",
        choices: [
          "Slow down and continue if the way is clear",
          "Stop only if a pedestrian is waiting to cross",
          "Stop at the marked stop line and stay there until the light turns green",
          "Stop in the middle of the crosswalk so you can see across",
        ],
        correctIndex: 2,
        explanation:
          "Steady red means a full stop at the marked stop line, and you stay there until the light is green and the intersection is clear. A right turn after that stop is a separate permission, not a substitute for the stop.",
        context:
          "Illinois signal colours run steady red (stop), steady yellow (the signal is changing, do not enter the intersection once red appears) and steady green (go, after yielding to anyone still in the intersection or crosswalk). Flashing versions change the meaning: flashing red behaves like a stop sign, flashing yellow means proceed with caution. When the signals are dark altogether you treat the intersection as an all-way stop.",
        trap:
          "Stopping in the crosswalk to improve your view puts you where pedestrians are legally entitled to be. Stop at the line first, then edge forward only if you genuinely cannot see.",
        excerptKey: "signal-red-stop-position",
        sourceLabel: "Illinois Rules of the Road - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "il_s1_03",
        topic: "speed",
        question:
          "You are driving on a city street in Illinois and there is no speed limit sign anywhere. What speed does the law assume?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 3,
        explanation:
          "Where a city or town street carries no posted sign, Illinois treats 30 mph as the limit. A municipality can post something different, but with no sign at all, 30 is the number you are held to.",
        context:
          "Illinois publishes standard limits so an unposted road is never a guess: 70 mph on interstates and tollways, 65 mph on four-lane highways, 55 mph on other highways and rural roads, 30 mph in city and town areas, 15 mph in alleys and 20 mph in a posted school zone during school hours. Each figure is a maximum that applies only when a sign has not overridden it, and a posted sign always beats the standard number.",
        trap:
          "25 mph is the residential default in several neighbouring states, which is exactly why drivers who learned elsewhere pick it.",
        excerptKey: "speed-standard-limits",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "il_s1_04",
        topic: "rightOfWay",
        question:
          "On an ordinary two-lane street a school bus ahead of you stops, flashes its red lights and swings out its stop arm. What must traffic do?",
        choices: [
          "Only vehicles travelling behind the bus must stop",
          "Traffic in both directions must stop and stay stopped",
          "Pass slowly if you cannot see any children",
          "Stop only if the bus is on school property",
        ],
        correctIndex: 1,
        explanation:
          "On a two-lane road every driver in both directions stops. You stay stopped until the stop arm folds away and the flashing lights go off, or until the bus driver waves you through.",
        context:
          "The rule protects children crossing in front of or behind the bus, where neither the bus driver nor you can see them. Illinois grants exactly one relief: on a four-lane roadway, traffic travelling in the opposite direction from the bus does not have to stop. Everywhere else - two-lane roads in town or country, private roads, school parking lots - you stop. A conviction suspends your licence and carries a mandatory $300 fine plus community service.",
        trap:
          "'Only if children are visible' inverts the rule. The child you cannot see is precisely the one the law exists to protect.",
        excerptKey: "bus-must-stop",
        sourceLabel: "Illinois Rules of the Road - Special Stops",
        sourceUrl: HB,
      },
      {
        id: "il_s1_05",
        topic: "safety",
        question:
          "A car has belts fitted to every seat. Under Illinois law, who is required to wear one?",
        choices: [
          "Only the driver and front seat passengers",
          "Everyone in the front seat, plus anyone under 16 in the back",
          "Only passengers under 18, wherever they sit",
          "Every driver and passenger aged 8 and older, front seat or back",
        ],
        correctIndex: 3,
        explanation:
          "Illinois requires belts for every driver and every passenger aged 8 and older, in the back seat as much as the front. Passengers under 8 go in an appropriate child restraint instead.",
        context:
          "Illinois is stricter than the states that only cover the front seat, and the responsibility runs to the driver: it is the driver's job to make sure everybody in the car complies with both the belt law and the Child Passenger Protection Act. A separate rule keeps children under 2 in a rear-facing seat unless they are over 40 pounds or over 40 inches tall, and rear-facing seats never go in front of an active air bag.",
        trap:
          "'Front seat only' is the rule in a lot of other states and is the single most common misconception about the Illinois belt law. Adults in the back are covered here.",
        excerptKey: "belt-law",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Safety Belt Law",
        sourceUrl: HB,
      },
      {
        id: "il_s1_06",
        topic: "signs",
        question: "What does a red and white downward-pointing triangle require?",
        choices: [
          "Merge without slowing if the lane ahead is clear",
          "Stop completely every time, the same as a stop sign",
          "Sound your horn before entering the intersection",
          "Let all traffic and pedestrians go first, stopping if you have to",
        ],
        correctIndex: 3,
        explanation:
          "A yield sign hands the right of way to everyone else. You slow to a safe speed, give way to all vehicles and pedestrians, and stop if that is what it takes to do it safely.",
        context:
          "Yield is a conditional instruction where stop is an absolute one: the stop sign requires a halt every time, the yield sign requires a halt only when traffic makes one necessary. Illinois also posts yield signs on expressway ramps where there is no extra lane to build up speed in. When you do have to stop at a yield sign, you stop at the marked crosswalk or before entering the intersection.",
        trap:
          "Treating yield as an always-stop is safe but wrong on the exam, and treating it as a free merge is dangerous. The answer turns on whether other traffic is there.",
        excerptKey: "sign-yield-triangle",
        sourceLabel: "Illinois Rules of the Road - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s1_07",
        topic: "rules",
        question: "When may you turn right at a red light in Illinois?",
        choices: [
          "Never - Illinois prohibits it statewide",
          "After a complete stop, when the way is clear and no sign forbids it",
          "Without stopping, as long as nothing is coming",
          "Only between 9 a.m. and 4 p.m.",
        ],
        correctIndex: 1,
        explanation:
          "Illinois permits a right turn on red unless a sign at that intersection prohibits it. The stop comes first, then you yield to oncoming traffic and to pedestrians before you go.",
        context:
          "The same permission covers a steady red arrow, and there is a second, narrower one: you may turn left on red from a one-way street onto another one-way street whose traffic moves to the left, again after stopping and yielding. Both permissions vanish where a NO TURN ON RED sign is posted, and some of those signs restrict the ban to particular hours, so the hours on the sign matter as much as the sign itself.",
        trap:
          "'Nothing is coming, so I need not stop' is the version that gets ticketed. The stop is required whether or not anyone else is there.",
        excerptKey: "signal-right-on-red",
        sourceLabel: "Illinois Rules of the Road - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "il_s1_08",
        topic: "licensing",
        question:
          "What is the youngest age at which a person can hold a full Illinois driver's license?",
        choices: ["16", "17", "18", "21"],
        correctIndex: 0,
        explanation:
          "Sixteen is the floor. A 16- or 17-year-old reaches it by completing an approved driver education course, logging 50 hours of supervised practice and passing all three parts of the licence exam.",
        context:
          "Illinois runs a three-stage graduated system. The instruction permit is available from 15 with proof of enrolment in driver education, and must be held for nine consecutive months. The initial licence covers ages 16 and 17 and carries night-time and passenger restrictions. Full licensing runs from 18 to 20, with no age-related restrictions unless the driver failed to clear the previous phase cleanly.",
        trap:
          "18 is the age at which the restrictions lift, not the age at which licensing starts. The exam asks about both, so keep them separate.",
        excerptKey: "licence-min-age",
        sourceLabel: "Illinois Rules of the Road - Age Restrictions",
        sourceUrl: HB,
      },
      {
        id: "il_s1_09",
        topic: "signals",
        question: "A broken yellow line runs down the centre of the road. What does it tell you?",
        choices: [
          "Traffic runs in opposite directions and passing is allowed when it is safe",
          "Traffic runs in the same direction and you may change lanes",
          "The lane to your left is a two-way left turn lane",
          "Passing is forbidden for the whole length of the line",
        ],
        correctIndex: 0,
        explanation:
          "Yellow always separates traffic moving in opposite directions, and broken means passing is permitted. So a broken yellow centre line is a two-way road on which you may pass when it is safe to do so.",
        context:
          "The colour tells you the direction and the pattern tells you the permission. Yellow means opposing traffic, white means traffic going the same way as you. Broken means you may cross, solid means you should not: a solid double yellow may still be crossed to turn left into a driveway, alley or side street, but a solid double white may not be crossed at all.",
        trap:
          "Broken white looks similar at speed and means something different - same direction, lane changes. Read the colour before the pattern.",
        excerptKey: "mark-broken-yellow",
        sourceLabel: "Illinois Rules of the Road - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "il_s1_10",
        topic: "sharing",
        question:
          "You are overtaking a bicyclist on an Illinois road. How much space must you leave?",
        choices: ["At least 2 feet", "At least 3 feet", "At least 4 feet", "At least 6 feet"],
        correctIndex: 1,
        explanation:
          "Three feet is the statutory minimum, measured from the edge of your side mirror. If the road does not give you three feet, you wait behind the rider until it does.",
        context:
          "The same three-foot minimum applies to a pedestrian walking on the road or shoulder. Illinois treats bicyclists as road users with the same rights and responsibilities as drivers, which means you yield to them as you would to a car, you may not drive, park or idle in a marked bike lane even when no rider is present, and passing too close is not a technicality - if it causes a crash the driver can face criminal charges.",
        trap:
          "Three feet is a floor, not a target, and it is not satisfied by squeezing past at speed. Where the lane is too narrow, the lawful move is to wait.",
        excerptKey: "bike-pass-3-feet",
        sourceLabel: "Illinois Rules of the Road - Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "il_s1_11",
        topic: "impairment",
        question:
          "At what blood-alcohol concentration is it automatically illegal for an adult to drive in Illinois?",
        choices: [".02%", ".04%", ".05%", ".08%"],
        correctIndex: 3,
        explanation:
          ".08% is the point at which driving is illegal outright. Below that figure you can still be convicted of DUI if your driving ability is impaired - the number is a ceiling, not a safe harbour.",
        context:
          "Illinois measures blood-alcohol concentration from breath, blood, urine or another bodily substance. Separate thresholds cover cannabis at 5 nanograms per millilitre of whole blood or 10 nanograms in another bodily substance, and any trace at all of a controlled substance is illegal regardless of how you are driving. Only time removes alcohol from your system; food, coffee and cold showers do nothing.",
        trap:
          "Reading .08% as 'anything under this is fine' is the mistake. Impaired driving at .05% is still a DUI conviction in Illinois.",
        excerptKey: "bac-limit",
        sourceLabel: "Illinois Rules of the Road - Driving Under the Influence",
        sourceUrl: HB,
      },
      {
        id: "il_s1_12",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Illinois?",
        choices: [
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen feet is the hydrant clearance. It applies whether or not anyone is sitting in the car, and whether or not the engine is running.",
        context:
          "Illinois sets several of these distances and the exam likes to swap them around. Fifteen feet from a hydrant, twenty feet from a fire station driveway or a crosswalk at an intersection, thirty feet from a stop sign, yield sign or traffic signal, and fifty feet from the nearest rail of a railroad crossing. Learn them as a ladder - 15, 20, 30, 50 - because they are far easier to recall in order than one at a time.",
        trap:
          "Twenty feet is the crosswalk and fire-station figure, and it is the distractor people reach for because it sounds like the rounder number.",
        excerptKey: "park-hydrant-15",
        sourceLabel: "Illinois Rules of the Road - Prohibited Stopping, Standing or Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s1_13",
        topic: "signs",
        question: "What is a yellow diamond-shaped sign telling you?",
        choices: [
          "It marks a construction detour",
          "It warns of a hazard or a change in conditions ahead",
          "It gives directions and distances to towns",
          "It is a regulatory order you must obey exactly",
        ],
        correctIndex: 1,
        explanation:
          "The diamond is the warning shape. It tells you something ahead needs your attention - a curve, a crossing, a narrowing road - so you slow down and look for it.",
        context:
          "Warning signs are usually yellow diamonds, but Illinois also uses fluorescent yellow-green diamonds for pedestrian, bicycle, playground, school bus stop and school zone warnings, and orange diamonds inside construction and maintenance zones. Same shape, same job: something ahead needs a reaction. A warning sign never carries the force of a regulatory sign, but ignoring one is how people find the hazard the hard way.",
        trap:
          "Warning and regulatory get confused because both matter. The rule of thumb: a diamond describes what is coming, a red or black-and-white rectangle tells you what to do.",
        excerptKey: "sign-diamond-warning",
        sourceLabel: "Illinois Rules of the Road - Shapes of Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s1_14",
        topic: "speed",
        question:
          "You are passing a marked school zone on a school day, children are about and the signs are posted. What is the limit?",
        choices: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctIndex: 2,
        explanation:
          "Twenty miles per hour, and it is a hard limit rather than an advisory. A first violation carries a minimum fine of $150 and a second one starts at $300.",
        context:
          "The Illinois school zone limit is conditional on three things at once: it must be a school day, children must be present, and the signs must be posted. The statute defines the school day as running from 6:30 a.m. to 4 p.m., so a Sunday afternoon or a July morning through the same zone is not covered. A separate rule bans wireless phone use of any kind inside a posted school speed zone, at any age.",
        trap:
          "People assume the 20 mph limit runs around the clock because the sign is always there. It runs on school days, in the posted hours, when children are present.",
        excerptKey: "speed-standard-limits",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "il_s1_15",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with lights and siren going. What does Illinois require?",
        choices: [
          "Speed up to clear the intersection ahead of it",
          "Pull over to the right side of the road, stopping if that is needed to let it pass",
          "Stop immediately where you are, including in the traffic lane",
          "Move into the left lane and keep going",
        ],
        correctIndex: 1,
        explanation:
          "You pull immediately to the right side of the road and let it through, coming to a complete stop if that is what it takes. The point is to leave the lane it needs, not simply to slow down.",
        context:
          "The rule has a second half people forget: if you are already stopped at an intersection with two-way traffic, you stay put until the emergency vehicle has passed through, rather than moving off and crossing its path. A different rule covers emergency vehicles that are stopped rather than moving - there you change lanes away from them and slow down, which is the move-over duty.",
        trap:
          "Stopping dead in the traffic lane feels obedient and is exactly wrong. It blocks the lane the ambulance is trying to use.",
        excerptKey: "emergency-approaching",
        sourceLabel: "Illinois Rules of the Road - Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s1_16",
        topic: "rightOfWay",
        question: "Two cars reach a four-way stop at different moments. Who goes first?",
        choices: [
          "The larger vehicle",
          "The vehicle that is turning left",
          "Whichever car is on the wider road",
          "The first driver to stop is the first to go",
        ],
        correctIndex: 3,
        explanation:
          "Order of arrival decides it. The first driver to come to a stop is the first to move off, and everyone else waits their turn.",
        context:
          "The tie-breaker only comes into play when two vehicles on different roadways stop at the same instant - then the driver on the left yields to the driver on the right. The identical rule governs an intersection with no signs or signals at all. Neither rule cares about vehicle size, road width or who is turning, which is why the exam offers those as options.",
        trap:
          "'Bigger vehicle first' and 'main road first' are habits people pick up from real traffic. Neither is the Illinois rule.",
        excerptKey: "row-four-way-stop",
        sourceLabel: "Illinois Rules of the Road - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "il_s1_17",
        topic: "rules",
        question: "When does Illinois law require your headlights to be on in the rain?",
        choices: [
          "Only when it is dark enough that you cannot see 500 feet",
          "Whenever your windshield wipers are running",
          "Only on interstates and tollways",
          "Only when the rain is heavy enough to slow traffic",
        ],
        correctIndex: 1,
        explanation:
          "Wipers on means headlights on. The trigger is the wipers, not the darkness, so a bright but drizzly afternoon still requires lights.",
        context:
          "Headlights are also required from sunset to sunrise, and whenever conditions such as snow or fog stop you seeing objects a thousand feet away. Daytime running lights do not satisfy the rule, because they leave your tail lights dark and it is the tail lights that keep the driver behind you from arriving in your boot. The safe habit is to switch the headlights on properly rather than trusting an automatic setting.",
        trap:
          "Drivers assume their daytime running lights count. They light the front of the car only, which is not what the rule is protecting.",
        excerptKey: "rain-headlights-wipers",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Safe Driving Tips",
        sourceUrl: HB,
      },
      {
        id: "il_s1_18",
        topic: "signs",
        question: "What does an orange sign mean on an Illinois road?",
        choices: [
          "Parks and recreation areas",
          "Services available to travellers",
          "Construction and maintenance work",
          "An unplanned traffic incident",
        ],
        correctIndex: 2,
        explanation:
          "Orange is the work-zone colour. It marks construction and maintenance areas where the normal layout of the road has been changed and the usual limits may not apply.",
        context:
          "Illinois assigns each colour a job: red for regulatory signs you must obey, yellow for general warnings, yellow-green for pedestrian, bicycle and school warnings, orange for construction, green for guide signs, blue for traveller services, brown for parks and recreation, and pink for unplanned traffic incidents such as crashes and natural disasters. Knowing the colour system lets you answer sign questions you have never seen before.",
        trap:
          "Pink is the newer colour and it is the one people confuse with orange. Pink means an unplanned incident; orange means planned roadwork.",
        excerptKey: "sign-color-orange",
        sourceLabel: "Illinois Rules of the Road - Colors of Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s1_19",
        topic: "safety",
        question:
          "In good weather on a good road, how much following distance does Illinois recommend?",
        choices: ["One second", "Two seconds", "Two and a half seconds", "Three seconds"],
        correctIndex: 3,
        explanation:
          "Three seconds. Pick a fixed object ahead, start counting when the car in front passes it, and you should not reach it before you finish the count.",
        context:
          "Three seconds is the fair-weather baseline and it is meant to be increased, not treated as a ceiling: bad road surfaces, rain, snow, fog or a heavy load all call for more. Following too closely is the single biggest cause of rear-end collisions in Illinois. If someone is tailgating you, the handbook's advice is to change lanes or pull over and let them past rather than to brake at them.",
        trap:
          "The two-second rule is what many drivers learned. Illinois teaches three, and expects three on the exam.",
        excerptKey: "three-second-rule",
        sourceLabel: "Illinois Rules of the Road - Following Distances",
        sourceUrl: HB,
      },
      {
        id: "il_s1_20",
        topic: "licensing",
        question: "What are the minimum liability insurance limits for an Illinois vehicle?",
        choices: [
          "$15,000 / $30,000 / $10,000",
          "$20,000 / $40,000 / $15,000",
          "$25,000 / $50,000 / $15,000",
          "$25,000 / $50,000 / $20,000",
        ],
        correctIndex: 3,
        explanation:
          "$25,000 for injury or death of one person, $50,000 where more than one person is hurt or killed, and $20,000 for damage to someone else's property.",
        context:
          "Every vehicle operated in Illinois has to carry liability insurance, and you have to be able to show proof of it to an officer on request - either on paper or on your phone. The Secretary of State's office runs random computer checks and asks for proof again at plate renewal. A conviction for driving without insurance costs you at least three months of driving privileges plus a $100 reinstatement fee, with no permit available during the suspension.",
        trap:
          "The property damage figure is the one people get wrong. $20,000 is easy to shave down to $15,000 in your memory because the injury figures are so much larger.",
        excerptKey: "insurance-minimums",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Mandatory Insurance",
        sourceUrl: HB,
      },
      {
        id: "il_s1_21",
        topic: "signals",
        question: "What does a flashing red traffic signal require?",
        choices: [
          "Slow down and proceed with caution",
          "Stop, yield the right of way, then go when it is safe",
          "Stay stopped until the light turns green",
          "The signal is out of order, so treat it as no control at all",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red behaves exactly like a stop sign: full stop, yield to traffic in the intersection or crosswalk, then proceed once it is safe.",
        context:
          "Illinois uses flashing red where a stop sign alone would be hard to see or needs extra emphasis, and at railroad crossings to warn of an approaching train. Flashing yellow is the softer instruction - proceed into the intersection with caution, no stop required. If the signal head is completely dark rather than flashing, you treat the intersection as an all-way stop.",
        trap:
          "'Wait for green' is the trap, because a flashing red never turns green. You would sit there indefinitely.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Illinois Rules of the Road - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "il_s1_22",
        topic: "sharing",
        question: "There is room in your lane beside a motorcycle. May you drive alongside it?",
        choices: [
          "No - the rider is entitled to the whole lane, so do not share it",
          "Yes, if you leave three feet of space",
          "Yes, but only in slow-moving traffic",
          "Yes, on any road with two or more lanes in each direction",
        ],
        correctIndex: 0,
        explanation:
          "The motorcyclist is entitled to the full width of the lane and needs it to manoeuvre around surface hazards. You pass a motorcycle the way you would pass a car, by changing lanes.",
        context:
          "Riders constantly reposition within a lane to deal with potholes, gravel, oil, debris and railroad tracks that a car would simply drive over, so the space that looks spare is working space. Illinois also asks for three to four seconds of following distance behind a motorcycle, and warns that in dry conditions a motorcycle can stop in a shorter distance than your car can.",
        trap:
          "Three feet is the bicycle passing rule, not a licence to share a lane with a motorcycle. Different vehicle, different rule.",
        excerptKey: "moto-full-lane",
        sourceLabel: "Illinois Rules of the Road - Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "il_s1_23",
        topic: "parking",
        question:
          "You park facing downhill on a street that has a curb. Which way do the front wheels go?",
        choices: [
          "Straight ahead, parallel to the curb",
          "Away from the curb",
          "Toward the curb",
          "Toward the centre of the road",
        ],
        correctIndex: 2,
        explanation:
          "Downhill with a curb, the wheels point toward the curb. If the car rolls, it rolls into the curb and stops there instead of into traffic.",
        context:
          "There are three hill-parking cases and the logic is always the same: aim the car at something that will stop it. Downhill with a curb, wheels toward the curb. Uphill with a curb, wheels away from the curb so the tyre backs into it. On any slope with no curb at all, uphill or downhill, wheels toward the side of the road you are parked on. Set the parking brake and leave the car in park either way.",
        trap:
          "Uphill and downhill are mirror images, which is exactly why they get swapped. Picture the roll and the answer follows.",
        excerptKey: "park-hill-downhill",
        sourceLabel: "Illinois Rules of the Road - Hill Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s1_24",
        topic: "rules",
        question:
          "You are about to turn in a business or residential district. How far ahead must you start signalling?",
        choices: [
          "Not less than 50 feet",
          "Not less than 75 feet",
          "Not less than 100 feet",
          "Not less than 200 feet",
        ],
        correctIndex: 2,
        explanation:
          "One hundred feet of continuous signal in a business or residential area. The signal has to run continuously, not be flicked on as you start the turn.",
        context:
          "The distance doubles outside built-up areas: 200 feet everywhere else, because traffic is moving faster and drivers behind you need longer to react. Illinois still recognises hand signals given with the left arm - straight up for a right turn, straight out for a left turn, pointed down to slow or stop - which matters if your indicators fail. A signal is also required for a lane change, not just a turn.",
        trap:
          "200 feet is the correct answer to the other half of this rule. Read whether the question is about a built-up area or the open road.",
        excerptKey: "signal-distance",
        sourceLabel: "Illinois Rules of the Road - Signaling",
        sourceUrl: HB,
      },
      {
        id: "il_s1_25",
        topic: "impairment",
        question:
          "A 19-year-old driver is stopped and found to have a small trace of alcohol in their system - well under .08%. What happens?",
        choices: [
          "It is treated exactly like an adult DUI",
          "Nothing, because they are below .08%",
          "A written warning on a first occasion",
          "A driver's licence suspension of at least three months",
        ],
        correctIndex: 3,
        explanation:
          "Illinois runs zero tolerance under 21. Any trace of alcohol while driving costs the driver a suspension of at least three months, entirely separately from any DUI charge.",
        context:
          "Zero tolerance means an alcohol concentration greater than 0.00 but under .08 for a driver under 21. Refusing the test is worse than failing it, not better. A driver under 21 convicted of an actual DUI faces revocation for a minimum of two years on a first conviction. And a conviction or court supervision for simply consuming, buying or possessing alcohol costs a driver under 21 their driving privileges whether or not a vehicle was involved.",
        trap:
          "The instinct is that under .08% means no consequence. Under 21 the threshold is not .08 at all - it is any trace.",
        excerptKey: "zero-tolerance",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Drivers Under Age 21",
        sourceUrl: HB,
      },
      {
        id: "il_s1_26",
        topic: "signs",
        question: "What does a five-sided yellow or yellow-green sign indicate?",
        choices: [
          "A railroad crossing ahead",
          "The start of a no passing zone",
          "A school zone or school crossing",
          "A hospital ahead",
        ],
        correctIndex: 2,
        explanation:
          "The pentagon is the school shape. Two children walking means a school is nearby; the same two children with a downward arrow means you are at the crossing itself.",
        context:
          "Illinois reserves several shapes for a single meaning so you can read them at a distance or in poor light: octagon for stop, downward triangle for yield, round for a railroad crossing warning, pentagon for school, diamond for general warning. The pennant-shaped triangle on its side is the odd one out - it means no passing zone and is posted on the left-hand side of the road.",
        trap:
          "The round yellow sign with the black X is the railroad warning, not the school sign. Both are yellow, and both appear in the same run of exam questions.",
        excerptKey: "sign-pentagon-school",
        sourceLabel: "Illinois Rules of the Road - Shapes of Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s1_27",
        topic: "rightOfWay",
        question: "A pedestrian is walking in a marked crosswalk ahead of you. What must you do?",
        choices: [
          "Come to a complete stop and let them cross",
          "Slow down and steer around behind them",
          "Yield only once they are past the centre line",
          "Sound your horn to warn them you are coming",
        ],
        correctIndex: 0,
        explanation:
          "Illinois requires a complete stop for a pedestrian in a marked crosswalk. Slowing and going round is not enough - the vehicle stops.",
        context:
          "Illinois upgraded this from yield to stop years ago and compliance is still patchy, which is why it turns up on the exam. The stop-and-yield duty also covers children near a school zone crosswalk on school days. A separate, weaker yield duty covers pedestrians in unmarked crosswalks on your side of the road where there are no signals, pedestrians stepping out from an alley or driveway, and anyone using a guide dog, white cane or wheelchair.",
        trap:
          "'Yield' and 'stop' are not the same instruction, and the marked crosswalk is the case where Illinois asks for the stronger one.",
        excerptKey: "ped-marked-crosswalk",
        sourceLabel: "Illinois Rules of the Road - Pedestrian Right of Way",
        sourceUrl: HB,
      },
      {
        id: "il_s1_28",
        topic: "emergencies",
        question:
          "You are in a crash with no injuries. Above what amount of property damage must a crash report be filed?",
        choices: ["$500", "$1,000", "$1,500", "$2,500"],
        correctIndex: 2,
        explanation:
          "More than $1,500 in property damage triggers a report, regardless of who was at fault. The threshold drops to more than $500 if any vehicle involved is uninsured.",
        context:
          "A report is also required for any crash involving death or bodily injury, and for any crash involving a school bus however small the damage. Illinois gives you 30 minutes to report a crash, and failing to report one can cost up to $2,500 and as much as a year in jail. If you cannot make the report yourself, a passenger has to make it for you.",
        trap:
          "$500 is the uninsured figure, not the general one. Both numbers are real, so read which situation the question describes.",
        excerptKey: "crash-report-threshold",
        sourceLabel: "Illinois Rules of the Road - Crash Reports",
        sourceUrl: HB,
      },
      {
        id: "il_s1_29",
        topic: "rules",
        question: "When may you drive in the left lane of an Illinois interstate?",
        choices: [
          "Any time, provided you keep up with the flow of traffic",
          "Any time, provided you stay at or under the speed limit",
          "When you are passing another vehicle",
          "Only when your vehicle is carrying two or more people",
        ],
        correctIndex: 2,
        explanation:
          "On an interstate or fully access-controlled freeway the left lane is for passing. Cruising in it is a violation even at a perfectly legal speed.",
        context:
          "Illinois writes several exceptions into the rule, and they are the reason it is so hard to enforce: you may stay in the left lane when there is no vehicle directly behind you, when congestion makes the right lane impractical, when weather makes the left lane necessary, when the right lane is obstructed, and when you are moving over for emergency or construction vehicles. Note the scope - this is an interstate and freeway rule, not a rule for every road in the state.",
        trap:
          "'I am at the speed limit, so I can sit here' is the standard defence and it is not one. The lane is defined by purpose, not by your speed.",
        excerptKey: "lane-left-lane-interstate",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Lane Usage",
        sourceUrl: HB,
      },
      {
        id: "il_s1_30",
        topic: "speed",
        question:
          "What is the standard maximum speed on an Illinois interstate or tollway where nothing different is posted?",
        choices: ["70 mph", "65 mph", "60 mph", "55 mph"],
        correctIndex: 0,
        explanation:
          "Seventy miles per hour on interstates and tollways. Sixty-five is the figure for four-lane highways that are not interstates, and 55 for other highways and rural roads.",
        context:
          "These are maximums for good conditions, not entitlements. Illinois expects you to slow below the posted number when approaching an intersection, going round a curve, coming over the crest of a hill or driving a narrow winding road, and whenever weather, traffic or the state of the road makes the posted speed unsafe. Local authorities may post a lower figure, and where they have, the sign wins.",
        trap:
          "65 is the four-lane highway figure and it sits right next to 70 in the same list, which is why the two get transposed.",
        excerptKey: "speed-standard-limits",
        sourceLabel: "Illinois Rules of the Road - Speed Limits",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Building Confidence",
    difficulty: "easy",
    description:
      "Core rules most Illinois drivers get right - markings, passing, parking distances and the graduated licensing restrictions that catch out anyone under 21.",
    questions: [
      {
        id: "il_s2_01",
        topic: "signs",
        question:
          "A yellow pennant-shaped sign - a triangle lying on its side - appears on the left-hand side of a two-lane road. What is it telling you?",
        choices: [
          "A divided highway begins ahead",
          "There is a flagger controlling traffic ahead",
          "The road narrows to one lane",
          "You are entering a no passing zone",
        ],
        correctIndex: 3,
        explanation:
          "The pennant marks the start of a no passing zone. It is placed on the left-hand side, opposite the yellow no-passing pavement markings that begin at the same point.",
        context:
          "Illinois puts this sign on the left deliberately, because it is speaking to the driver who is about to cross the centre line and needs to see it in the same glance as the oncoming lane. A rectangular DO NOT PASS sign does the same job with words, and a PASS WITH CARE sign marks the far end of the zone. Passing is also banned in places with no sign at all, such as within 100 feet of an intersection.",
        trap:
          "Every other warning sign in Illinois is a diamond on the right. This one is a sideways triangle on the left, which is why people miss it.",
        excerptKey: "sign-no-passing-pennant",
        sourceLabel: "Illinois Rules of the Road - Colors of Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s2_02",
        topic: "rules",
        question:
          "You are passing on a two-lane road and a car appears in the distance coming toward you. How much room must you leave when you pull back in?",
        choices: [
          "You must be back in your lane before you reach the vehicle you passed",
          "You must be back in your lane within 50 feet of the oncoming vehicle",
          "You must be back in your lane within 100 feet of the oncoming vehicle",
          "You must be back in your lane before you are within 200 feet of the oncoming vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Two hundred feet. You have to complete the pass and return to your own lane before the gap to the oncoming vehicle shrinks below that.",
        context:
          "There is a second condition on getting back in: do not turn back into the right-hand lane until you can see the whole of the vehicle you have just passed in your rearview mirror, otherwise you cut it off. Illinois also forbids passing on a hill or curve where you cannot see oncoming traffic, within 100 feet of an intersection or railroad crossing, in any construction zone, and when a school bus is loading or unloading.",
        trap:
          "'Before I reach the car I passed' describes a different requirement entirely - that one is about the mirror, not about the oncoming vehicle.",
        excerptKey: "pass-return-200-feet",
        sourceLabel: "Illinois Rules of the Road - Passing",
        sourceUrl: HB,
      },
      {
        id: "il_s2_03",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection with no signs or signals at exactly the same moment, on roads crossing at right angles. Who yields?",
        choices: [
          "The driver on the left yields to the driver on the right",
          "The driver on the right yields to the driver on the left",
          "The driver travelling faster yields",
          "The driver on the narrower road yields",
        ],
        correctIndex: 0,
        explanation:
          "The vehicle on the left gives way to the vehicle on the right. Same rule as the simultaneous-arrival tie-break at a four-way stop.",
        context:
          "Uncontrolled intersections are common on rural and residential grids, and Illinois asks you to slow and look both ways at every one of them regardless of who technically has the right of way. There is a separate rule for a T intersection with no signs or signals: the traffic on the road that ends yields to the traffic on the road that continues through.",
        trap:
          "It is easy to get the direction backwards under pressure. The memory hook is that the car on your right goes first - you yield to your right.",
        excerptKey: "row-uncontrolled",
        sourceLabel: "Illinois Rules of the Road - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "il_s2_04",
        topic: "signals",
        question: "What do two solid white lines side by side mean?",
        choices: [
          "Traffic on the far side is moving toward you",
          "You may cross to enter a turn lane only",
          "The lane to your right is reserved for buses",
          "Crossing the lines is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "A double solid white separates lanes of traffic going the same way and may not be crossed at all. It is the strictest lane marking Illinois uses.",
        context:
          "White markings separate traffic moving in the same direction. Broken white lines can be crossed when you change lanes or turn; a single solid white line is a discouragement that calls for special care; a double solid white is a prohibition. Yellow markings separate opposing directions and follow their own logic, with even a double solid yellow crossable to turn left into a driveway, alley or side street.",
        trap:
          "The double solid yellow may be crossed to turn left, and people generalise that permission to the double white. The white version has no such exception.",
        excerptKey: "mark-double-white",
        sourceLabel: "Illinois Rules of the Road - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "il_s2_05",
        topic: "speed",
        question: "What is the standard speed limit in an Illinois alley?",
        choices: ["10 mph", "12 mph", "15 mph", "20 mph"],
        correctIndex: 2,
        explanation:
          "Fifteen miles per hour. Alleys get their own figure because sightlines out of them are terrible and pedestrians appear without warning.",
        context:
          "Alleys carry an extra obligation beyond the speed limit: coming out of an alley, building, private road or driveway in an urban area you must come to a complete stop before crossing the sidewalk, then yield to pedestrians and to all traffic on the road. If there is no sidewalk, you stop at the point nearest the road where you can actually see approaching traffic.",
        trap:
          "20 mph is the school zone figure and it sits directly next to the alley figure in the same list of standard limits.",
        excerptKey: "speed-standard-limits",
        sourceLabel: "Illinois Rules of the Road - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "il_s2_06",
        topic: "licensing",
        question:
          "A 16-year-old Illinois driver in the initial licensing phase wants to drive on a Wednesday evening. From what time is that prohibited?",
        choices: ["9 p.m.", "9:30 p.m.", "10 p.m.", "11 p.m."],
        correctIndex: 2,
        explanation:
          "Sunday through Thursday the restriction starts at 10 p.m. and runs to 6 a.m. On Friday and Saturday nights it starts an hour later, at 11 p.m.",
        context:
          "The same hours apply in the permit phase and in the initial licensing phase, so a 15-year-old with a permit and a 17-year-old with a licence are under the identical curfew. It lifts at 18. Local municipalities may impose their own, stricter youth curfews on top of the state driving restriction, and those are a separate rule with separate hours - being inside the driving curfew does not put you inside the local one.",
        trap:
          "The weekend hour is 11, the weeknight hour is 10, and Sunday counts as a weeknight in Illinois. That last part is what people get wrong.",
        excerptKey: "gdl-night-permit",
        commonlyMissed: true,
        sourceLabel: "Illinois Secretary of State - Graduated Driver Licensing",
        sourceUrl: GDL,
      },
      {
        id: "il_s2_07",
        topic: "parking",
        question: "How close to a stop sign may you park?",
        choices: [
          "No closer than 30 feet",
          "No closer than 25 feet",
          "No closer than 20 feet",
          "No closer than 15 feet",
        ],
        correctIndex: 0,
        explanation:
          "Thirty feet. The same clearance applies to a yield sign and to a traffic control signal, so that approaching drivers can actually see the control.",
        context:
          "The thirty-foot rule is about visibility rather than manoeuvring room - a car parked right at the sign hides it from anyone coming up behind. Illinois pairs it with a fifteen-foot clearance at fire hydrants, twenty feet at fire station driveways and at crosswalks on intersections, and fifty feet from the nearest rail at a railroad crossing.",
        trap:
          "Fifteen and twenty feet are both real Illinois figures for other obstructions, which makes them convincing wrong answers here.",
        excerptKey: "park-20-30-feet",
        sourceLabel: "Illinois Rules of the Road - Prohibited Stopping, Standing or Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s2_08",
        topic: "safety",
        question: "Which children must ride in an approved child restraint system in Illinois?",
        choices: [
          "Children under 4",
          "Children under 8",
          "Children under 10",
          "Children under 12",
        ],
        correctIndex: 1,
        explanation:
          "Every child under 8 must be properly secured in an appropriate child restraint. From 8 upward the ordinary safety belt law takes over.",
        context:
          "Booster seats count as child restraints but only work with a lap and shoulder belt - if the back seat has lap belts alone and the child is over 40 pounds, the lap belt on its own is permitted. Separately, children must stay rear-facing until age 2 unless they are over 40 pounds or over 40 inches tall, and it is recommended that children 12 and under ride in the back seat because of air bags.",
        trap:
          "Age 12 is a recommendation about the back seat, not the legal restraint threshold. The legal line is 8.",
        excerptKey: "child-restraint-under-8",
        sourceLabel: "Illinois Rules of the Road - Child Passenger Protection Act",
        sourceUrl: HB,
      },
      {
        id: "il_s2_09",
        topic: "sharing",
        question: "There are no bicycles in sight. May you stop briefly in a marked bike lane?",
        choices: [
          "Yes, for up to five minutes",
          "Yes, to drop off or pick up a passenger",
          "Yes, if your hazard lights are on",
          "No - driving, parking, idling and dropping off in a bike lane are all prohibited",
        ],
        correctIndex: 3,
        explanation:
          "A bike lane is closed to motor vehicles whether or not a rider is there at that moment. Driving, parking, idling and using it to drop off or pick up passengers are all out.",
        context:
          "The rule is written that way because a rider arriving at speed cannot see round your car and has to swing out into moving traffic. Illinois marks bike lanes with a solid white line that becomes dotted before the corner, and some are painted bright green for visibility. Riders are also allowed to leave the lane when the surface is bad or the lane is obstructed, so expect them outside it.",
        trap:
          "'Just for a moment, nobody is coming' is the everyday version of this and it is still a violation. The prohibition does not depend on a rider being present.",
        excerptKey: "bike-lane-no-vehicles",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Bicycles",
        sourceUrl: HB,
      },
      {
        id: "il_s2_10",
        topic: "impairment",
        question:
          "You are arrested for DUI in Illinois and refuse to take a chemical test. What happens to your driving privileges?",
        choices: [
          "Suspended for one year",
          "Suspended for six months",
          "Suspended for three months",
          "Nothing, because refusal cannot be used against you",
        ],
        correctIndex: 0,
        explanation:
          "Refusing costs a one-year suspension for a first offender - longer than the six months you get for taking the test and failing it. The refusal can also be used as evidence against you.",
        context:
          "Driving in Illinois carries implied consent to breath, blood, urine or other testing. Failing a test at .08% or above, or over the cannabis thresholds, brings a six-month statutory summary suspension; refusing brings twelve. A second offender within five years faces three years for refusal and one year for failure. Refusing after a crash involving serious injury or death brings revocation for at least a year.",
        trap:
          "Refusal feels like the cautious move. In Illinois it doubles the suspension and still gets used against you in court.",
        excerptKey: "summary-suspension-refuse",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Statutory Summary Suspension",
        sourceUrl: HB,
      },
      {
        id: "il_s2_11",
        topic: "emergencies",
        question:
          "You are on a four-lane road and a police car is stopped on the shoulder ahead with its lights flashing. What does Illinois require?",
        choices: [
          "Sound your horn as you go past",
          "Maintain your speed but move as far right as possible",
          "Come to a complete stop until an officer waves you on",
          "Change to a lane away from it if you safely can, and slow down",
        ],
        correctIndex: 3,
        explanation:
          "Move over to a lane away from the stopped vehicle if it is safe to do so, and reduce your speed. If changing lanes is not possible, you slow down and pass with caution.",
        context:
          "Illinois drivers know this as Scott's Law, and it applies to any stationary authorised vehicle showing blue, red, amber, white or green flashing lights - police, fire, ambulance, tow trucks and highway maintenance alike. A separate but similar duty covers ordinary disabled vehicles running their hazard lights on a four-lane highway. Illinois also bans photography and phone use within 500 feet of an emergency scene, and failing to slow or move over in a way that damages property or injures someone is itself a ground for suspending your licence.",
        trap:
          "Stopping dead in a live lane is not the move-over duty and creates a second hazard. Move over, or slow down - do not stop.",
        excerptKey: "move-over-stationary",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s2_12",
        topic: "signs",
        question: "How should you treat a railroad crossbuck sign at a crossing with no lights or gates?",
        choices: [
          "As a stop sign - a full stop is required every time",
          "As a yield sign",
          "As a warning only, with no legal duty attached",
          "As a speed limit sign requiring 15 mph",
        ],
        correctIndex: 1,
        explanation:
          "The crossbuck functions as a yield sign. You must give way to any approaching train or railroad equipment, slowing and stopping if that is what it takes.",
        context:
          "Where a crossing has no warning devices or only a crossbuck, you slow down, look both ways along the track and listen for a train before you cross. If the crossing does have signals, a full stop within 15 to 50 feet of the rails is required whenever the lights are flashing, the gate is down, a stop sign is posted or a flagger signals you. A number below the crossbuck tells you how many tracks there are.",
        trap:
          "The crossbuck is not a stop sign, and treating it as one on the exam is as wrong as ignoring it. Yield is the operative word.",
        excerptKey: "rail-crossbuck-yield",
        sourceLabel: "Illinois Rules of the Road - Railroad Crossings",
        sourceUrl: HB,
      },
      {
        id: "il_s2_13",
        topic: "rules",
        question: "When may you make a U-turn on a curve or near the crest of a hill in Illinois?",
        choices: [
          "Never, under any circumstances",
          "Only when you can see at least 200 feet in each direction",
          "Only when you can see at least 500 feet in all directions",
          "Any time, provided you signal for 100 feet first",
        ],
        correctIndex: 2,
        explanation:
          "Five hundred feet of clear visibility in all directions is the condition. Without it, the manoeuvre is prohibited on curves and hills.",
        context:
          "The number exists because a U-turn takes your car across both lanes at walking pace, and 500 feet is roughly the distance a driver at highway speed needs to see you and stop. Municipalities may forbid U-turns on particular roads regardless of visibility, and signed no-U-turn locations - typically the crossovers in a divided highway - are reserved for police, ambulances, snow ploughs and maintenance vehicles.",
        trap:
          "'U-turns are always illegal' is a persistent Illinois myth. They are restricted by sightline and by local signage, not banned outright.",
        excerptKey: "u-turn-500-feet",
        sourceLabel: "Illinois Rules of the Road - U-Turns",
        sourceUrl: HB,
      },
      {
        id: "il_s2_14",
        topic: "signals",
        question: "What does a flashing yellow traffic signal mean?",
        choices: [
          "Stop and wait for a green light",
          "Proceed into the intersection with caution",
          "Stop, then go when it is safe",
          "The signal is being tested and has no meaning",
        ],
        correctIndex: 1,
        explanation:
          "Flashing yellow means carry on but be careful. No stop is required, unlike its flashing red counterpart.",
        context:
          "A flashing yellow arrow is a related but distinct signal: it permits a turn in the direction of the arrow after you have yielded to pedestrians and to vehicles already in the intersection or crosswalk. A steady yellow means something different again - the signal is changing, and once the red appears you must not enter the intersection at all.",
        trap:
          "Flashing red and flashing yellow are one word apart and opposite in effect. Red means stop first; yellow does not.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "Illinois Rules of the Road - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "il_s2_15",
        topic: "rightOfWay",
        question:
          "You have moved into the intersection on a green light waiting to turn left, and the light goes red before a gap appears. What should you do?",
        choices: [
          "Reverse out of the intersection while it is clear",
          "Wait where you are until the light turns green again",
          "Abandon the turn and drive straight through",
          "Yield to oncoming traffic and complete the turn",
        ],
        correctIndex: 3,
        explanation:
          "Having entered lawfully on green, you finish the turn once oncoming traffic clears - even though the light has since gone red.",
        context:
          "The rule keeps the intersection from locking up: a driver who is already inside it has to get out, and the cross traffic waits. It works alongside a broader duty not to enter an intersection or a marked crosswalk at all unless there is room on the far side for your vehicle to clear it. The same thinking bans stopping on a railroad crossing when the far side is blocked.",
        trap:
          "Reversing out is both prohibited and dangerous - the driver behind you has already pulled up close.",
        excerptKey: "row-left-turn-finish",
        sourceLabel: "Illinois Rules of the Road - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "il_s2_16",
        topic: "speed",
        question:
          "It is 10 p.m. on a Sunday and there is not a worker in sight in a posted construction zone. Does the construction zone speed limit apply?",
        choices: [
          "No, it applies only when workers are present",
          "No, it applies only during posted working hours",
          "Yes - it applies 24 hours a day, seven days a week",
          "Yes, but only on interstates and tollways",
        ],
        correctIndex: 2,
        explanation:
          "The posted construction zone limit runs around the clock, every day, whether or not anyone is working. Worker presence can push the limit lower still, never higher.",
        context:
          "The limit stays in force at night because the hazard is the road itself: narrowed lanes, drop-offs at the pavement edge, closed lanes and equipment parked near live traffic. Illinois also makes every construction zone a no passing zone, requires you to put the phone down unless it is properly hands-free, and asks you to hold the reduced speed until you are safely past the last worker or authorised vehicle.",
        trap:
          "'Workers present' is written on many of the fine-escalation signs, so drivers infer the limit itself is conditional. It is not.",
        excerptKey: "work-zone-24-7",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Construction Zones",
        sourceUrl: HB,
      },
      {
        id: "il_s2_17",
        topic: "signs",
        question: "What is a green sign used for in Illinois?",
        choices: [
          "Warning of pedestrian and bicycle crossings",
          "Telling you where you are and how far it is to your destination",
          "Marking services such as fuel and lodging",
          "Marking parks and recreation areas",
        ],
        correctIndex: 1,
        explanation:
          "Green is the guide colour. Green signs name the road you are on, point you where to go, and give distances to what lies ahead.",
        context:
          "Blue signs are also guide signs but cover services along the road - fuel, food, lodging, hospitals. Brown covers parks, recreation and places of cultural or historical interest. Yellow-green, which people confuse with plain green, is a warning colour used for pedestrian, bicycle, playground, school bus stop and school zone signs. Most guide signs are rectangular, but route markers use their own shapes.",
        trap:
          "Yellow-green and green are one word apart and do opposite jobs - one warns you, the other directs you.",
        excerptKey: "sign-color-green",
        sourceLabel: "Illinois Rules of the Road - Colors of Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s2_18",
        topic: "licensing",
        question:
          "How long must a 16-year-old hold an Illinois instruction permit before applying for a driver's license?",
        choices: [
          "Nine consecutive months",
          "Six consecutive months",
          "Three consecutive months",
          "Twelve consecutive months",
        ],
        correctIndex: 0,
        explanation:
          "Nine consecutive months, and the permit itself is valid for 24 months. The nine months have to be clean - a driving infraction restarts the clock.",
        context:
          "Alongside the nine months, an under-18 applicant needs 50 hours of supervised behind-the-wheel practice including 10 hours at night, on top of the driver education course itself. The supervising adult must be 21 or older, hold a valid licence, have at least a year of driving experience and sit in the front passenger seat. From age 17 years and 3 months a driver may get a permit without taking driver education at all.",
        trap:
          "Six months is the conviction-free period required before turning 18, which is a different requirement in the same programme.",
        excerptKey: "gdl-permit-hold",
        sourceLabel: "Illinois Rules of the Road - Obtaining an Instruction Permit",
        sourceUrl: HB,
      },
      {
        id: "il_s2_19",
        topic: "safety",
        question: "You have to drive through thick fog. What should you do with your headlights?",
        choices: [
          "Use low beams or fog lights",
          "Use high beams to see further",
          "Use parking lights only",
          "Switch them off and use hazard lights instead",
        ],
        correctIndex: 0,
        explanation:
          "Low beams or dedicated fog lights. High beams bounce off the water droplets and throw the glare straight back at you, cutting your visibility rather than extending it.",
        context:
          "Fog driving is a package: turn off the cruise control, increase your following distance, slow down, use your signals well in advance and brake early so the driver behind gets more warning. Do not creep along at 5 to 10 mph - that invites a rear-end collision. If the fog gets too thick to handle, the handbook's advice is to pull off the roadway and stop rather than continuing at a crawl.",
        trap:
          "The instinct in poor visibility is to reach for more light. In fog, more light makes it worse.",
        excerptKey: "fog-driving",
        sourceLabel: "Illinois Rules of the Road - Weather Conditions",
        sourceUrl: HB,
      },
      {
        id: "il_s2_20",
        topic: "parking",
        question: "How close to the curb must you park on a two-way Illinois street?",
        choices: [
          "Within 6 inches",
          "Within 12 inches",
          "Within 18 inches",
          "Within 24 inches",
        ],
        correctIndex: 1,
        explanation:
          "Twelve inches, with the right-hand wheels parallel to the curb. On a one-way street you may park within 12 inches of either curb.",
        context:
          "Illinois also requires that you park facing the direction traffic is moving, which rules out parking against the flow on the opposite side of a two-way street. Double parking - stopping on the roadway side of another parked vehicle - is prohibited outright, as is stopping on a sidewalk, in a crosswalk, within an intersection or in a marked bike lane.",
        trap:
          "Eighteen inches is the figure in some other states' handbooks and is the most common wrong answer here.",
        excerptKey: "park-parallel-12-inches",
        sourceLabel: "Illinois Rules of the Road - Parallel Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s2_21",
        topic: "sharing",
        question:
          "You are on a four-lane road. A school bus travelling the other way stops, flashes its red lights and puts out the stop arm. What must you do?",
        choices: [
          "Stop and remain stopped until the arm folds away",
          "Stop, then proceed after counting to five",
          "You are not required to stop",
          "Slow to 20 mph and pass with caution",
        ],
        correctIndex: 2,
        explanation:
          "On a four-lane roadway, traffic travelling in the opposite direction from the bus is not required to stop. It is the only situation in which Illinois excuses you.",
        context:
          "Everywhere else you stop: any two-lane road in town or in the country, any highway or private road, and any parking lot on school property. The bus warns you first, flashing its lights at least 100 feet ahead of the stop, or 200 feet in rural areas, before the stop arm swings out. A conviction for passing a stopped bus suspends your licence and carries a mandatory $300 fine.",
        trap:
          "Four-lane and divided are not the same thing, and the exception here is written around a four-lane roadway. If in doubt on a two-lane road, you stop.",
        excerptKey: "bus-four-lane-exception",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - School Buses",
        sourceUrl: HB,
      },
      {
        id: "il_s2_22",
        topic: "rules",
        question:
          "You reach an intersection where the traffic signals are completely dark - no lights at all. What do you do?",
        choices: [
          "Proceed without stopping if the intersection looks clear",
          "Treat the main road as having priority",
          "Treat the intersection as an all-way stop",
          "Wait until another driver goes and follow them through",
        ],
        correctIndex: 2,
        explanation:
          "A dead signal turns the intersection into an all-way stop. Every approach stops, then looks and yields before entering.",
        context:
          "The exception is a police or traffic control officer directing traffic, whose instructions override the signals altogether - including when they tell you to do something the signal does not. Illinois also forbids leaving the roadway to get around a traffic signal, so cutting through a corner petrol station to skip a red light is its own violation.",
        trap:
          "Assuming the busier road keeps priority is how these intersections produce collisions. Nobody has priority when the lights are out.",
        excerptKey: "signal-dark-all-way-stop",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "il_s2_23",
        topic: "impairment",
        question: "How must cannabis be carried in a vehicle in Illinois?",
        choices: [
          "In a sealed, odour-proof, child-resistant container",
          "Anywhere in the vehicle, as long as nobody uses it",
          "In the glove compartment only",
          "Only by a registered medical cannabis patient",
        ],
        correctIndex: 0,
        explanation:
          "It has to be in a sealed, odour-proof, child-resistant container. Neither the driver nor any passenger may use cannabis in the vehicle at all.",
        context:
          "Illinois permits adults 21 and over to use cannabis but treats transporting and driving strictly. Driving impaired by cannabis is a DUI whether the cannabis was medical or recreational, and there are per se limits of 5 nanograms of THC per millilitre of whole blood or 10 nanograms in another bodily substance. Where an officer has reasonable suspicion of cannabis impairment, refusing field sobriety or roadside chemical testing suspends your licence.",
        trap:
          "A medical cannabis card changes nothing about driving. It can itself be revoked for two years if you are caught driving impaired.",
        excerptKey: "cannabis-container",
        sourceLabel: "Illinois Rules of the Road - Medical and Recreational Cannabis",
        sourceUrl: HB,
      },
      {
        id: "il_s2_24",
        topic: "signs",
        question: "You see a WRONG WAY sign on the road ahead. What has happened?",
        choices: [
          "You are travelling against the flow of traffic and must not continue",
          "The road ahead is closed for construction",
          "You have missed your exit and must continue to the next one",
          "The lane you are in ends shortly",
        ],
        correctIndex: 0,
        explanation:
          "You are pointed the wrong way down a one-way road or an expressway ramp. Stop, and get yourself turned around before you go any further.",
        context:
          "Illinois pairs this sign with DO NOT ENTER, which you meet first: DO NOT ENTER marks the entrance you should not use, and WRONG WAY appears a short distance beyond it if you went in anyway. You will see the same pairing where a driver has turned into a one-way street, alley or driveway against the flow. Both are red regulatory signs, which is the colour Illinois reserves for orders you must obey.",
        trap:
          "The sign is not a warning about the road ahead - it is a statement about your own direction of travel, and the fix is to stop rather than to press on.",
        excerptKey: "sign-wrong-way",
        sourceLabel: "Illinois Rules of the Road - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s2_25",
        topic: "emergencies",
        question:
          "The lights are flashing at a railroad crossing. Where must you stop?",
        choices: [
          "Between 5 and 10 feet from the nearest rail",
          "Between 10 and 25 feet from the nearest rail",
          "Between 15 and 50 feet from the nearest rail",
          "At least 100 feet from the nearest rail",
        ],
        correctIndex: 2,
        explanation:
          "Between 15 and 50 feet. It is a band, not a single distance: close enough to see along the track, far enough back that the train's overhang cannot reach you.",
        context:
          "The stop is required whenever a stop sign is posted at the crossing, the electric signal is flashing, the gate is down, a flagger signals you or a train is approaching. You go only once the gate is fully up, the lights have stopped flashing or the flagger waves you through - and you check all the tracks first, because a second train on another track is a classic way people are killed at crossings.",
        trap:
          "People stop too close, inside 15 feet, to get a better look down the track. The near limit exists for a reason.",
        excerptKey: "rail-stop-15-50",
        sourceLabel: "Illinois Rules of the Road - Railroad Crossing",
        sourceUrl: HB,
      },
      {
        id: "il_s2_26",
        topic: "signals",
        question: "A steady red arrow is showing for your turn lane. When may you turn?",
        choices: [
          "As soon as the intersection is clear",
          "On a right turn, after a complete stop, unless a sign prohibits it",
          "Never - a red arrow always means wait for a green arrow",
          "Whenever the through traffic beside you has a green light",
        ],
        correctIndex: 1,
        explanation:
          "A red arrow carries the same two exceptions as a steady red light: a right turn after stopping, and a left turn from a one-way street onto another one-way street whose traffic moves left. Otherwise you wait for the green arrow.",
        context:
          "Both exceptions are conditional on a full stop and on yielding to oncoming traffic and pedestrians, and both disappear where a NO TURN ON RED sign is posted. A steady yellow arrow means the green arrow is ending. A flashing yellow arrow is a permission rather than a warning: you may turn, after giving way to anyone in the intersection or crosswalk.",
        trap:
          "'A red arrow always means no' is close enough to true that people pick it. Illinois writes the same right-on-red exception into the arrow as into the ball.",
        excerptKey: "signal-red-arrow",
        sourceLabel: "Illinois Rules of the Road - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "il_s2_27",
        topic: "rules",
        question:
          "You have parked at the curb and are about to open your door into the traffic side of the street. What does Illinois ask of you?",
        choices: [
          "Open the door quickly so it is exposed for as little time as possible",
          "Open it only when it can be done safely without interfering with traffic or bicyclists",
          "Sound the horn first to warn approaching riders",
          "Open it fully and wait for traffic to go around",
        ],
        correctIndex: 1,
        explanation:
          "The door may only be opened when it is safe and does not interfere with vehicles or bicycles, and it may stay open only as long as loading or unloading takes.",
        context:
          "The handbook suggests reaching across with your right hand to open the driver's door, a habit known as the Dutch Reach: the movement turns your upper body and brings the road behind you into view without any conscious effort to check. A rider hit by an opening door has no time and nowhere to go, which is why Illinois writes the duty on the person inside the car.",
        trap:
          "'Open it fast' is the intuitive answer and the wrong one - speed is what makes a door strike unavoidable for the rider.",
        excerptKey: "lane-door-opening",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Lane Usage",
        sourceUrl: HB,
      },
      {
        id: "il_s2_28",
        topic: "rightOfWay",
        question:
          "You are pulling out of a driveway onto a city street. What does Illinois require before you cross the sidewalk?",
        choices: [
          "A complete stop, then yield to pedestrians and all traffic",
          "Slow to walking pace and continue if the sidewalk is clear",
          "Sound your horn, then proceed",
          "Yield to pedestrians only - vehicles must give way to you",
        ],
        correctIndex: 0,
        explanation:
          "A complete stop before the sidewalk, then give way to pedestrians and to every vehicle on the road. You are joining their road, so you have no priority at all.",
        context:
          "The same rule covers coming out of an alley, a building or a private road. If there is no sidewalk, you stop at the point nearest the roadway from which you can see approaching traffic. Signal the direction you intend to turn as you pull out, and remember that pedestrians entering or leaving a driveway have the right of way over you as well.",
        trap:
          "A clear sidewalk is not permission to roll through. The stop is required whether or not anyone is walking past.",
        excerptKey: "alley-stop-sidewalk",
        sourceLabel: "Illinois Rules of the Road - Alleys/Driveways",
        sourceUrl: HB,
      },
      {
        id: "il_s2_29",
        topic: "sharing",
        question: "How much following distance does Illinois recommend behind a motorcycle?",
        choices: [
          "One to two seconds",
          "Two seconds",
          "Two to three seconds",
          "Three to four seconds",
        ],
        correctIndex: 3,
        explanation:
          "Three to four seconds, more than behind a car. The extra room is there so the rider has space to swerve or brake without you arriving on top of them.",
        context:
          "In dry conditions a motorcycle can stop in a shorter distance than your car, so the risk is not that they slow gradually but that they stop faster than you expect. More than half of all motorcycle crashes happen at intersections, and the classic one is an oncoming car turning left across a rider's path. Look twice for motorcycles before every left turn.",
        trap:
          "The three-second rule is the general Illinois figure. Behind a motorcycle the handbook asks for more, not the same.",
        excerptKey: "moto-following-distance",
        sourceLabel: "Illinois Rules of the Road - Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "il_s2_30",
        topic: "speed",
        question:
          "What is the standard speed limit on an Illinois four-lane highway that is not an interstate, with nothing posted?",
        choices: ["50 mph", "55 mph", "65 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Sixty-five miles per hour on a four-lane highway. Interstates and tollways go to 70, and other highways and rural roads sit at 55.",
        context:
          "Illinois builds its default limits around road type rather than location, so the number changes as the road changes even when the scenery does not. Any of these can be overridden by a posted sign, and local municipalities have express discretion to post something different. Minimum speed limits are posted on some roads too, and driving below a posted minimum is itself illegal unless safety requires it.",
        trap:
          "55 mph is the figure for other highways and rural areas, and it is the number most drivers reach for when the road looks rural.",
        excerptKey: "speed-standard-limits",
        sourceLabel: "Illinois Rules of the Road - Speed Limits",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Exam Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions at the level the Secretary of State actually tests: the conditional rules, the exact distances, and the Illinois-specific twists that reward reading the whole sentence.",
    questions: [
      {
        id: "il_s3_01",
        topic: "rules",
        question: "When does Illinois allow a left turn against a red light?",
        choices: [
          "Never - Illinois permits only right turns on red",
          "From a one-way street onto another one-way street whose traffic moves to the left",
          "From any street onto a one-way street, in either direction",
          "Only where a sign expressly permits it",
        ],
        correctIndex: 1,
        explanation:
          "One-way onto one-way, with the receiving street's traffic moving to the left. You stop completely first, then yield to oncoming traffic and pedestrians.",
        context:
          "It is the same permission structure as the right turn on red - a stop, then a yield, then the turn - and it is cancelled by a NO TURN ON RED sign in exactly the same way. The permission applies to a steady red arrow as well as a steady red ball. Both streets have to be one-way; turning left on red from a two-way street is never allowed.",
        trap:
          "Most drivers have never heard of this one and answer 'never'. It is genuinely in the Illinois handbook and it shows up on the exam.",
        excerptKey: "signal-right-on-red",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "il_s3_02",
        topic: "signs",
        question:
          "A vehicle ahead of you displays an orange triangle with a red border. What does it tell you?",
        choices: [
          "The vehicle is carrying hazardous materials",
          "The vehicle is a farm vehicle exempt from traffic laws",
          "The vehicle travels slowly and you should be ready to slow down",
          "The vehicle is oversized and requires an escort",
        ],
        correctIndex: 2,
        explanation:
          "It is the slow-moving vehicle emblem. Vehicles carrying it typically travel between 5 and 20 mph, so the gap closes far faster than your eye judges.",
        context:
          "Farm machinery, construction equipment and animal-drawn vehicles all carry the emblem, and Illinois requires them to run a flashing amber light visible for 500 feet when lights are needed. These vehicles may be wider than the lane and may turn into unmarked field entrances without warning, so hang back until you are certain the driver knows you are there and you can see the whole road ahead.",
        trap:
          "The closing speed is the real hazard. At 65 mph you cover the gap to a 15 mph tractor in a fraction of the time your instinct expects.",
        excerptKey: "smv-emblem",
        sourceLabel: "Illinois Rules of the Road - Slow-Moving Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s3_03",
        topic: "speed",
        question:
          "Between what hours does the Illinois school zone speed limit apply on a school day?",
        choices: [
          "7 a.m. to 3 p.m.",
          "6:30 a.m. to 4 p.m.",
          "8 a.m. to 4 p.m.",
          "Sunrise to sunset",
        ],
        correctIndex: 1,
        explanation:
          "The statute defines the school day as beginning at 6:30 a.m. and ending at 4 p.m. Outside those hours the 20 mph limit does not apply, even if the sign is still standing there.",
        context:
          "Three conditions have to line up for the school zone limit to bite: it must be a school day, the posted signs must be in place, and children must be present and close enough to traffic that a hazard exists. Remove any one and the ordinary limit for that road applies. The wireless phone ban inside a posted school speed zone, by contrast, is written far more bluntly and applies to drivers of every age.",
        trap:
          "The 7 a.m. to 4 p.m. figure circulates widely in Illinois and is wrong by half an hour at the front end.",
        excerptKey: "ilcs-school-day-hours",
        commonlyMissed: true,
        sourceLabel: "Illinois Vehicle Code - Special speed limit while passing schools",
        sourceUrl: ILCS("062500050K11-605"),
      },
      {
        id: "il_s3_04",
        topic: "rightOfWay",
        question:
          "You are on the road that ends at a T intersection, with no signs or signals anywhere. Who has priority?",
        choices: [
          "You do, because you arrived first",
          "Whichever driver is on the left",
          "Traffic on the road that continues through",
          "Whichever driver signals first",
        ],
        correctIndex: 2,
        explanation:
          "The terminating road yields. You are joining a road that carries on, so you give way to the traffic already on it before crossing or turning.",
        context:
          "This sits alongside the two other unsigned right-of-way rules Illinois expects you to know: at an ordinary uncontrolled crossroads, the driver on the left yields to the driver on the right; and at a four-way stop, the first to stop is the first to go, with the left-yields-to-right tie-break for simultaneous arrivals. None of them depend on road width or vehicle size.",
        trap:
          "'I got here first' is the four-way stop rule, and it is not the rule at an unsigned T intersection.",
        excerptKey: "row-t-intersection",
        sourceLabel: "Illinois Rules of the Road - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "il_s3_05",
        topic: "parking",
        question: "How close to the nearest rail of a railroad crossing may you park?",
        choices: [
          "No closer than 15 feet",
          "No closer than 25 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 3,
        explanation:
          "Fifty feet from the nearest rail. It is the longest of the Illinois parking clearances, because trains overhang the track and cannot swerve.",
        context:
          "Keep the ladder straight: 15 feet from a fire hydrant, 20 feet from a fire station driveway or an intersection crosswalk, 30 feet from a stop sign, yield sign or signal, and 50 feet from the nearest rail. Parking is also banned outright on a bridge, in a tunnel, on a railroad track, on any controlled-access roadway and in the median of a divided highway.",
        trap:
          "Thirty feet is the traffic-control-device figure and sounds plausible here. The railroad clearance is longer than any of the others.",
        excerptKey: "park-rail-50-feet",
        sourceLabel: "Illinois Rules of the Road - Prohibited Stopping, Standing or Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s3_06",
        topic: "signals",
        question:
          "The centre of the road has a solid yellow line next to a broken yellow line. When may you pass?",
        choices: [
          "When the broken line is the one nearest your lane",
          "When the solid line is the one nearest your lane",
          "Never - any solid yellow line forbids passing in both directions",
          "Only when a PASS WITH CARE sign is posted",
        ],
        correctIndex: 0,
        explanation:
          "The line nearest you governs your side. Broken on your side means you may pass when it is safe; solid on your side means you may not.",
        context:
          "This pairing is used where sight distance is good in one direction and poor in the other - typically approaching a crest or a bend. If the solid line is on your side you may still cross it in two situations: to finish a pass you had lawfully begun before the zone started, and to turn left into or out of an alley, private road or driveway.",
        trap:
          "Drivers read the pair as a single instruction. It is two separate instructions, one for each direction of travel.",
        excerptKey: "mark-solid-and-broken",
        sourceLabel: "Illinois Rules of the Road - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "il_s3_07",
        topic: "licensing",
        question:
          "A 16-year-old has held an Illinois driver's license for four months. How many passengers under 20 may they carry?",
        choices: [
          "One, unless the extra passengers are siblings, stepsiblings, children or stepchildren",
          "One, with no exceptions of any kind",
          "Two, plus any family members",
          "As many as there are seat belts",
        ],
        correctIndex: 0,
        explanation:
          "One passenger under 20, and the only people who do not count against that limit are the driver's siblings, stepsiblings, children and stepchildren.",
        context:
          "The restriction runs for the first 12 months of licensing or until the driver turns 18, whichever comes first. Afterwards a looser rule takes over: one passenger in the front seat, and no more in the back than there are safety belts. Passengers 20 and older do not count against the first-year limit at all, which is why the age of the passenger matters as much as the number.",
        trap:
          "'Family' gets stretched to cousins and friends' siblings. The exemption is a closed list, and cousins are not on it.",
        excerptKey: "gdl-initial-passengers",
        commonlyMissed: true,
        sourceLabel: "Illinois Secretary of State - Graduated Driver Licensing",
        sourceUrl: GDL,
      },
      {
        id: "il_s3_08",
        topic: "impairment",
        question:
          "A first-time offender takes a chemical test after a DUI arrest and registers .09%. How long is the statutory summary suspension?",
        choices: ["Three months", "Six months", "One year", "Three years"],
        correctIndex: 1,
        explanation:
          "Six months for failing the test as a first offender. Refusing the test instead would have cost a full year.",
        context:
          "The statutory summary suspension is an administrative sanction and runs quite separately from anything a court does about the DUI charge itself. At arrest the officer takes your licence and gives you a temporary receipt good for 45 days; the suspension itself begins on the 46th day. A second offender within five years faces one year for failing and three years for refusing.",
        trap:
          "The suspension is not paused while the criminal case runs. People assume nothing happens until court, and the clock has already started.",
        excerptKey: "summary-suspension-fail",
        sourceLabel: "Illinois Rules of the Road - Statutory Summary Suspension",
        sourceUrl: HB,
      },
      {
        id: "il_s3_09",
        topic: "safety",
        question: "Your car begins to skid. What is the correct response?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Accelerate gently to pull the car straight",
          "Steer in the opposite direction to the skid",
          "Ease off the gas or brakes and steer in the direction of the skid",
        ],
        correctIndex: 3,
        explanation:
          "Come off whatever pedal you are on, steer in the direction the back of the car is sliding, and straighten up once the tyres grip again.",
        context:
          "A skid means the tyres have stopped gripping, and neither braking nor accelerating gives grip back - both make it worse. The recovery is to remove the demand you were making on the tyres and point the wheels where the car is actually going. Related recoveries follow the same logic: if you hydroplane, release the accelerator and ride it out; if you drop a wheel onto the shoulder, ease off the gas, brake gently and steer back smoothly rather than jerking the wheel.",
        trap:
          "'Steer opposite the skid' is the phrasing people half-remember, and it is exactly backwards.",
        excerptKey: "skid-recovery",
        sourceLabel: "Illinois Rules of the Road - Skidding",
        sourceUrl: HB,
      },
      {
        id: "il_s3_10",
        topic: "sharing",
        question:
          "You are on a four-lane highway and a broken-down car sits on the shoulder ahead with its hazard lights flashing. What does Illinois require?",
        choices: [
          "Nothing beyond ordinary care - the duty applies only to emergency vehicles",
          "Change lanes away from it if it is safe to do so, otherwise slow down",
          "Come to a complete stop and offer assistance",
          "Sound your horn as you pass",
        ],
        correctIndex: 1,
        explanation:
          "The move-over duty extends to ordinary disabled vehicles running hazard lights. Change lanes if you safely can; if you cannot, reduce your speed and hold it down until you are well past.",
        context:
          "People associate this duty only with police cars, but Illinois writes the same lane-change-or-slow-down obligation for a disabled vehicle on a four-lane highway. There is a good reason: the most dangerous place on the road is the shoulder beside a broken-down car, where the driver is standing. Do not speed up again until you are safely past.",
        trap:
          "'That is only for emergency vehicles' is the widespread version, and it is the one that gets people prosecuted.",
        excerptKey: "disabled-vehicle-lane",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Disabled Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s3_11",
        topic: "emergencies",
        question: "How long do you have to report a crash in Illinois?",
        choices: ["30 minutes", "One hour", "24 hours", "Ten days"],
        correctIndex: 0,
        explanation:
          "Thirty minutes. Illinois wants the police notified straight away, not at the end of the day once you have spoken to your insurer.",
        context:
          "If no officer is at the scene, you make the report at the nearest police station as soon as you can, or notify the county sheriff or the Illinois State Police in a rural area. If you are physically unable to report it, a passenger has to do it for you. Failing to report a crash can cost up to $2,500 and up to a year in jail, and it is itself a ground for suspending your licence.",
        trap:
          "Ten days is the deadline written into some other states' handbooks, and it is a comfortable-sounding wrong answer.",
        excerptKey: "crash-report-30-minutes",
        sourceLabel: "Illinois Rules of the Road - Crash Reports",
        sourceUrl: HB,
      },
      {
        id: "il_s3_12",
        topic: "signs",
        question: "What does a fluorescent yellow-green sign warn you about?",
        choices: [
          "Pedestrian, bicycle, playground and school activity",
          "An unplanned traffic incident such as a crash",
          "Construction and maintenance work",
          "A change in the surface of the roadway",
        ],
        correctIndex: 0,
        explanation:
          "Yellow-green is Illinois's high-emphasis warning colour for people rather than road conditions: pedestrian and bicycle crossings, playgrounds, school bus stops and school zones.",
        context:
          "The colour was introduced because ordinary yellow disappears into the background in a busy streetscape, and these are precisely the warnings a driver cannot afford to miss. Everything else about the sign behaves normally - it is still usually a diamond, and it still describes what is ahead rather than ordering you to do anything. School zone and school crossing signs are the pentagon-shaped exception.",
        trap:
          "It reads as a variant of green, which is the guide colour and does the opposite job. Yellow-green warns; green directs.",
        excerptKey: "sign-color-yellow-green",
        sourceLabel: "Illinois Rules of the Road - Colors of Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s3_13",
        topic: "rules",
        question:
          "On a two-lane, two-way road, how close to an intersection may you still be passing?",
        choices: [
          "Passing near intersections is unrestricted if you can see clearly",
          "You may not pass within 50 feet of an intersection",
          "You may not pass within 100 feet of an intersection",
          "You may not pass within 200 feet of an intersection",
        ],
        correctIndex: 2,
        explanation:
          "One hundred feet. The same 100-foot restriction covers railroad crossings, and a blocked view within 100 feet of a bridge, viaduct or tunnel.",
        context:
          "Illinois lists the no-passing situations that apply whether or not a sign or a line is present: any hill or curve where you cannot see oncoming traffic, within 100 feet of an intersection or railroad crossing, where a vehicle has stopped at a crosswalk for a pedestrian, in any construction zone, in a school zone, and whenever a school bus is loading or unloading. Every construction zone in Illinois is a no passing zone by default.",
        trap:
          "A clear view feels like it should settle the question. Near an intersection it does not - the restriction is a distance, not a judgement call.",
        excerptKey: "pass-prohibited-where",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Passing",
        sourceUrl: HB,
      },
      {
        id: "il_s3_14",
        topic: "signals",
        question: "The light turns green. What may you do?",
        choices: [
          "Proceed immediately - the green light is your right of way",
          "Proceed, but only after checking your mirrors",
          "Wait three seconds before entering the intersection",
          "Proceed after yielding to any pedestrians and vehicles still in the intersection or crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "Green is a permission, not a command. You may go once you have given way to anyone still clearing the intersection or the crosswalk.",
        context:
          "Illinois lists this among its right-of-way duties precisely because drivers treat green as absolute: you must yield even after the light turns green when there are vehicles in the intersection. The counterpart rule is that a driver who entered on green may finish their turn after the light goes red. Between them, the two rules mean the intersection empties before it refills.",
        trap:
          "'Proceed immediately' is one of the most commonly missed items on permit exams generally, and Illinois writes the yield duty into the rule explicitly.",
        excerptKey: "signal-green",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "il_s3_15",
        topic: "speed",
        question: "There is no minimum speed limit posted on the road you are on. May you drive as slowly as you like?",
        choices: [
          "No - you must not drive so slowly as to interfere with the normal movement of traffic",
          "Yes, provided you stay in the right-hand lane",
          "Yes, provided your hazard lights are on",
          "Yes - only posted minimums are enforceable",
        ],
        correctIndex: 0,
        explanation:
          "Even where no minimum is posted, you may not drive so slowly that you interfere with the normal flow of traffic.",
        context:
          "Where a minimum speed is posted - typically on freeways and controlled-access highways - driving below it is illegal unless safety requires it. Illinois pairs both rules with a lane obligation: slow vehicles keep to the right-hand lane except when passing or turning left, and on interstates the left lane is for passing only.",
        trap:
          "Being under the limit is not the same as being lawful. Illinois writes a floor as well as a ceiling.",
        excerptKey: "speed-minimum",
        sourceLabel: "Illinois Rules of the Road - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "il_s3_16",
        topic: "rightOfWay",
        question: "A funeral procession is crossing an intersection ahead of you. What must you do?",
        choices: [
          "Pull over and stop until it has entirely passed",
          "Proceed once you have a gap between vehicles",
          "Follow the last vehicle closely so you can use the same gap in traffic",
          "Yield the right of way to every vehicle in the procession",
        ],
        correctIndex: 3,
        explanation:
          "You yield to all vehicles in the procession and do not drive between them, but Illinois does not require you to pull over and stop.",
        context:
          "Vehicles in the procession run their headlights and hazard lights so you can identify them. Cutting into the line is prohibited, and so is joining a procession to grab the right of way for yourself or passing a vehicle in one except where a passing lane has been specifically provided. A law enforcement officer directing traffic can override all of this. A municipality may impound a vehicle that interferes with a procession through reckless driving.",
        trap:
          "'Pull over and stop' is a genuine requirement in some states and a widespread assumption here. Illinois asks you to yield, not to stop.",
        excerptKey: "funeral-yield",
        sourceLabel: "Illinois Rules of the Road - Funeral Processions",
        sourceUrl: HB,
      },
      {
        id: "il_s3_17",
        topic: "parking",
        question:
          "What does Illinois call stopping on the roadway side of a vehicle that is already parked at the curb?",
        choices: [
          "Standing, which is permitted for up to five minutes",
          "Double parking, which is prohibited",
          "Curbside loading, permitted with hazard lights",
          "Temporary stopping, permitted where no sign forbids it",
        ],
        correctIndex: 1,
        explanation:
          "Double parking, and Illinois prohibits it outright - stopping, standing and parking are all barred on the roadway side of a parked vehicle.",
        context:
          "The prohibition sits in a list of statewide restrictions that apply whether or not a sign says so: sidewalks, crosswalks, inside an intersection, between a safety zone and the adjacent curb, in a marked or protected bike lane, on a bridge or overpass, in a tunnel, on a railroad track, on a controlled-access roadway and in the median of a divided highway.",
        trap:
          "Hazard lights do not create a permission. They tell other drivers you are stopped; they do not make the stop lawful.",
        excerptKey: "park-prohibited-list",
        sourceLabel: "Illinois Rules of the Road - Prohibited Stopping, Standing or Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s3_18",
        topic: "licensing",
        question:
          "An 18-year-old with a full Illinois driver's license wants to take a call using a hands-free Bluetooth system. Is that allowed?",
        choices: [
          "Yes - hands-free is permitted for anyone with a full licence",
          "Yes, provided the vehicle is not in a school or construction zone",
          "Yes, provided the call lasts under two minutes",
          "No - drivers under 19 may not use a phone at all, hands-free included",
        ],
        correctIndex: 3,
        explanation:
          "The Illinois teen phone ban runs to 19, not 18, and it covers hands-free devices as well as handheld ones. The only exception is an emergency call to law enforcement, a health care provider or an emergency services agency.",
        context:
          "Every other graduated licensing restriction in Illinois keys off the driver's 18th birthday - curfew, passenger limits, parental consent. This one keys off 19, which is why a newly adult driver with a full licence is still caught by it. For drivers 19 and over, hands-free and Bluetooth are permitted, but holding the phone on speaker is not, and video calls and social media are prohibited at any age.",
        trap:
          "The mismatch between 18 and 19 is the whole trap. An 18-year-old is out of the GDL programme and still inside this ban.",
        excerptKey: "ilcs-under-19-wireless",
        commonlyMissed: true,
        sourceLabel: "Illinois Vehicle Code - Wireless telephones",
        sourceUrl: ILCS("062500050K12-610.1"),
      },
      {
        id: "il_s3_19",
        topic: "safety",
        question:
          "The road looks clear and dry on a cold morning. Where should you expect ice to have survived?",
        choices: [
          "On long straight stretches of open road",
          "At the top of hills where the wind reaches",
          "On bridges, overpasses, shaded spots and turns",
          "Nowhere, if the main carriageway is dry",
        ],
        correctIndex: 2,
        explanation:
          "Bridges, overpasses, shaded stretches and turns hold ice after the rest of the road has cleared, because cold air gets underneath them and the sun never reaches them.",
        context:
          "Winter driving in Illinois is mostly about removing surprises before they happen: slow down, lengthen your following distance, switch off the cruise control on any wet, icy or snowy surface, and clear all the snow and ice off the vehicle before you set off. Brake in slow, steady strokes early to test how much grip you actually have rather than discovering it at the intersection.",
        trap:
          "A dry-looking road is exactly the condition in which drivers get caught out. The hazard is local, not general.",
        excerptKey: "winter-bridges-ice",
        sourceLabel: "Illinois Rules of the Road - Winter Driving",
        sourceUrl: HB,
      },
      {
        id: "il_s3_20",
        topic: "sharing",
        question:
          "What is the minimum age to operate a Class 3 low-speed electric bicycle in Illinois?",
        choices: ["12", "14", "16", "18"],
        correctIndex: 2,
        explanation:
          "Sixteen. A younger person may ride as a passenger on a Class 3 e-bike built to carry one, but may not operate it.",
        context:
          "Illinois splits low-speed electric bicycles into three classes: Class 1 assists only while you pedal and cuts out at 20 mph, Class 2 can propel the bike on its own but not above 20 mph, and Class 3 assists only while pedalling and carries on up to 28 mph. A low-speed electric bicycle has a motor under 750 watts, may use roads and bike lanes, and may not be ridden on sidewalks.",
        trap:
          "Classes 1 and 2 have no age floor of their own in the handbook's description. The 16-year minimum attaches to Class 3, the fastest of them.",
        excerptKey: "bike-low-speed-electric",
        sourceLabel: "Illinois Rules of the Road - Bicycles",
        sourceUrl: HB,
      },
      {
        id: "il_s3_21",
        topic: "impairment",
        question:
          "A passenger in your car opens a beer while you drive. Who can be cited under Illinois law?",
        choices: [
          "Both the driver and the passenger",
          "The passenger only",
          "The driver only",
          "Neither, provided the driver is sober",
        ],
        correctIndex: 0,
        explanation:
          "Drinking alcohol in a vehicle is illegal for anyone in it, and both the driver and the passenger can be issued a citation.",
        context:
          "Illinois also bans carrying an opened alcohol container anywhere in the passenger area of a vehicle, whether or not anyone is drinking from it. A handful of vehicles are exempt from the drinking rule - chartered buses used for non-school purposes, motor homes, mini motor homes and limousines - because their passenger areas are treated differently from a car's.",
        trap:
          "A sober driver assumes the offence is the passenger's. Illinois writes it to reach both people in the car.",
        excerptKey: "open-container",
        sourceLabel: "Illinois Rules of the Road - Illegal Transportation of Alcoholic Beverages",
        sourceUrl: HB,
      },
      {
        id: "il_s3_22",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad track and a train is approaching. Which way do you move once everyone is out?",
        choices: [
          "Straight back along the track, away from the train",
          "Perpendicular to the track, at a right angle",
          "Away from the track at a 45-degree angle, toward the oncoming train",
          "Away from the track at a 45-degree angle, away from the oncoming train",
        ],
        correctIndex: 2,
        explanation:
          "Get everyone out, call 911 and move away at roughly 45 degrees in the direction the train is coming from. That keeps you clear of the debris a collision throws forward.",
        context:
          "It feels wrong because you are moving toward the train, but the physics decides it: if the train hits your car, the wreckage is driven forward along the track, which is exactly where running away from the train would put you. If you can, use the Emergency Notification System number on the blue sign at the crossing post - it reaches the railroad directly and can stop trains.",
        trap:
          "Running with the train is the instinctive choice and puts you in the path of the debris field.",
        excerptKey: "rail-stalled-45-degrees",
        sourceLabel: "Illinois Rules of the Road - Railroad Crossing",
        sourceUrl: HB,
      },
      {
        id: "il_s3_23",
        topic: "signs",
        question: "A NO TURN ON RED sign is posted at an intersection. What does it prohibit?",
        choices: [
          "Right turns only",
          "Right turns on red, and left turns on red between intersecting one-way streets",
          "All turning movements at that intersection at any time",
          "Right turns during the hours of darkness only",
        ],
        correctIndex: 1,
        explanation:
          "It cancels both red-light turning permissions Illinois otherwise grants: the right turn on red and the one-way-to-one-way left turn on red.",
        context:
          "The sign may spell out the word RED or show a red circle instead. Some carry an hours plate - typical in busy city centres where the ban runs during the day but lifts at night - and the hours on the plate are as much a part of the sign as the words. Where no sign is posted, the underlying permissions apply and both require a complete stop first.",
        trap:
          "Drivers read only the right-turn half. The sign kills the left-turn-on-red permission at the same intersection too.",
        excerptKey: "sign-no-turn-on-red",
        sourceLabel: "Illinois Rules of the Road - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s3_24",
        topic: "rules",
        question: "Your indicators have failed. What hand and arm signal indicates a left turn?",
        choices: [
          "Left arm extended straight up",
          "Left arm extended straight out to the left",
          "Left arm extended downward",
          "Right arm extended straight out to the right",
        ],
        correctIndex: 1,
        explanation:
          "Left arm straight out to the left. All three Illinois hand signals are given with the left arm, because that is the one an approaching driver can see.",
        context:
          "The set is worth memorising as a group: arm straight out means left turn, arm bent upward means right turn, arm pointed down means slowing or stopping. The signal distances do not change because you are using your arm - 100 feet of continuous signal in a business or residential area, 200 feet elsewhere - and you signal for a lane change as well as for a turn.",
        trap:
          "Using the right arm out of the passenger window seems more intuitive for a right turn, and it is not the Illinois signal.",
        excerptKey: "signal-hand-arm",
        sourceLabel: "Illinois Rules of the Road - Signaling",
        sourceUrl: HB,
      },
      {
        id: "il_s3_25",
        topic: "signals",
        question: "A red X is lit above the lane you are driving in. What does it mean?",
        choices: [
          "The lane ahead is closed for construction",
          "You must stop before the next intersection",
          "Never drive in this lane while the red X is displayed",
          "The lane is reserved for high-occupancy vehicles",
        ],
        correctIndex: 2,
        explanation:
          "A red X closes the lane to you entirely. Move out of it - you should never be under one while it is showing.",
        context:
          "Overhead lane signals are used on highways and expressways where the direction of a lane changes with the time of day. A yellow X is the warning that the lane is about to go red, so leave it safely now; a green arrow says the lane is open, though all other signs and signals still apply; and a flashing yellow arrow indicates a lane available for approaching and making a left turn.",
        trap:
          "It looks like a warning about the road ahead. It is an instruction about the lane you are in right now.",
        excerptKey: "signal-lane-red-x",
        sourceLabel: "Illinois Rules of the Road - Lane Signals",
        sourceUrl: HB,
      },
      {
        id: "il_s3_26",
        topic: "speed",
        question: "What happens to your stopping distance when you double your speed?",
        choices: [
          "It doubles",
          "It quadruples",
          "It goes up by about half",
          "It stays roughly the same because the brakes work harder",
        ],
        correctIndex: 1,
        explanation:
          "Doubling your speed quadruples the distance the vehicle needs to stop. The relationship is not proportional, which is why small increases in speed produce large increases in risk.",
        context:
          "Stopping distance is also affected by how fast you react, the type and condition of the road, tyre size and tread, the state of your brakes, wind direction and the design and weight of the vehicle. That is the reasoning behind Illinois's requirement to slow below the posted limit at intersections, on curves, over the crest of a hill and in poor weather: the limit assumes conditions that may not be present.",
        trap:
          "The intuitive answer is that stopping distance doubles with speed. It grows with the square of it.",
        excerptKey: "speed-doubling",
        sourceLabel: "Illinois Rules of the Road - Vehicle Speed",
        sourceUrl: HB,
      },
      {
        id: "il_s3_27",
        topic: "rightOfWay",
        question: "You are approaching a MERGE sign with traffic already on the through road. What must you do?",
        choices: [
          "Maintain your speed - through traffic must make room",
          "Stop at the end of the merge lane and wait for a gap",
          "Sound your horn and merge at the first opportunity",
          "Yield to the through traffic, adjusting your speed to fit the gap",
        ],
        correctIndex: 3,
        explanation:
          "You yield. Illinois expects you to increase or decrease your speed as necessary to slot in without causing a collision - the through traffic is not obliged to make room for you.",
        context:
          "There is no regulatory sign for merging in Illinois, only advisory and warning ones, so the duty falls entirely on judgement. On an expressway entrance the speed-change lane exists so you can match the traffic's speed before joining, and where a lane reduction happens in congested traffic the handbook recommends using both lanes up to the merge point and taking turns - the zipper merge.",
        trap:
          "Stopping at the end of a merge lane is one of the most dangerous things you can do on a highway ramp, and it is not what the sign asks for.",
        excerptKey: "row-merge-sign",
        sourceLabel: "Illinois Rules of the Road - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "il_s3_28",
        topic: "parking",
        question:
          "You park facing uphill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Toward the curb",
          "Straight ahead",
          "Toward the centre of the road, at a slight angle",
          "Away from the curb",
        ],
        correctIndex: 3,
        explanation:
          "Uphill with a curb, the wheels turn away from the curb. If the car rolls backwards the rear of the front tyre catches the curb and stops it.",
        context:
          "Think about which way the car rolls and what you want it to hit. Uphill it rolls backwards, so the wheels point away from the curb and the tyre backs into it. Downhill it rolls forwards, so the wheels point toward the curb. With no curb at all, on any slope, the wheels turn toward the side of the road so the car leaves the carriageway rather than crossing it. Set the parking brake in every case.",
        trap:
          "Uphill and downhill are mirror images and get swapped under exam pressure. Picture the direction of roll before you answer.",
        excerptKey: "park-hill-uphill",
        commonlyMissed: true,
        sourceLabel: "Illinois Rules of the Road - Hill Parking",
        sourceUrl: HB,
      },
      {
        id: "il_s3_29",
        topic: "licensing",
        question:
          "How many attempts do you get at each part of the Illinois driver's license exam?",
        choices: [
          "Three attempts within one year of paying the application fee",
          "Two attempts within six months",
          "Unlimited attempts, one per calendar month",
          "Three attempts, with no time limit",
        ],
        correctIndex: 0,
        explanation:
          "Three attempts at each exam, and the year runs from the date you paid your application fee rather than from your first attempt.",
        context:
          "The written test can be taken orally on request at any Secretary of State facility from Monday to Thursday, for applicants with a language barrier or a reading or learning disability. Cheating carries its own penalty entirely separate from failing: you are deemed to have failed that portion and are barred from retaking the written test for 30 days. Sitting any part of the exam for someone else is a criminal offence with a mandatory minimum of seven days in jail.",
        trap:
          "The clock starts when you pay, not when you first sit the test. Waiting months before your first attempt eats into the same year.",
        excerptKey: "exam-three-attempts",
        sourceLabel: "Illinois Rules of the Road - Driver's License Exams",
        sourceUrl: HB,
      },
      {
        id: "il_s3_30",
        topic: "safety",
        question: "Another driver is behaving aggressively toward you. What does Illinois advise?",
        choices: [
          "Do not retaliate, avoid eye contact, and keep your doors locked",
          "Match their speed so they lose interest",
          "Brake sharply to make them back off",
          "Sound your horn to attract other drivers' attention",
        ],
        correctIndex: 0,
        explanation:
          "Disengage. Do not retaliate, do not make eye contact, keep the doors locked and the windows up, and leave yourself room to pull out from behind the car in front.",
        context:
          "Illinois defines aggressive driving as operating a vehicle in a way that endangers or is likely to endanger people or property, and the list includes speeding, running lights and stop signs, tailgating, passing on the shoulder, cutting people off, braking at a tailgater, gestures, shouting, repeated horn use and repeated headlight flashing. The advice to keep space in front of you is practical rather than decorative - it is your escape route.",
        trap:
          "Braking at a tailgater is on the handbook's own list of aggressive driving. It escalates, and it makes you a participant.",
        excerptKey: "aggressive-response",
        sourceLabel: "Illinois Rules of the Road - Aggressive Driving",
        sourceUrl: HB,
      },
      {
        id: "il_s3_31",
        topic: "sharing",
        question: "You are approaching a horse and rider on a rural Illinois road. What should you not do?",
        choices: [
          "Slow down as you approach",
          "Be prepared to stop",
          "Sound your horn to let the rider know you are there",
          "Pass with extra care and extra room",
        ],
        correctIndex: 2,
        explanation:
          "Never sound your horn near a horse or other livestock. The noise can frighten the animal into the road and cause the crash you were trying to avoid.",
        context:
          "Horseback riders may use public roads in Illinois, excluding controlled-access highways and most expressways, and must ride in the same direction as traffic and as far to the right as they reasonably can. When meeting or passing one, slow down, leave plenty of room and be ready to stop. The instinct to warn other road users with the horn is right in general and wrong here.",
        trap:
          "Warning the rider seems courteous. It is the one thing the handbook specifically tells you not to do.",
        excerptKey: "horse-horn",
        sourceLabel: "Illinois Rules of the Road - Horseback Riders",
        sourceUrl: HB,
      },
      {
        id: "il_s3_32",
        topic: "impairment",
        question:
          "A 20-year-old is convicted of DUI in Illinois for the first time. What is the minimum sanction on their driving privileges?",
        choices: [
          "Three months' suspension",
          "Six months' suspension",
          "One year's revocation",
          "Two years' revocation",
        ],
        correctIndex: 3,
        explanation:
          "Revocation for a minimum of two years - double the one-year minimum that applies to a first DUI conviction by a driver 21 or over.",
        context:
          "Revocation and suspension are different animals in Illinois. A suspension ends on a fixed date once you pay the reinstatement fee; a revocation is indefinite, and you have to apply to get your privileges back after the minimum period, having completed an alcohol and drug evaluation, a rehabilitation or education programme and an administrative hearing. A DUI conviction also requires you to file financial responsibility insurance for three years.",
        trap:
          "'Suspension' and 'revocation' are used interchangeably in conversation and mean quite different things on the exam.",
        excerptKey: "dui-under-21",
        sourceLabel: "Illinois Rules of the Road - Drivers Under Age 21",
        sourceUrl: HB,
      },
      {
        id: "il_s3_33",
        topic: "emergencies",
        question:
          "You reverse into a parked car in a lot and cannot find the owner. What does Illinois require?",
        choices: [
          "Nothing, if the damage is only cosmetic",
          "Report it to your insurer within ten days",
          "Wait at the scene for at least 30 minutes, then leave",
          "Leave your name, address, phone number and plate number on the vehicle, and notify police",
        ],
        correctIndex: 3,
        explanation:
          "Leave your details on the vehicle where the owner will find them, and notify the police. Then complete any crash report that is required.",
        context:
          "The same duty applies to damaging any unattended property, not just a parked car. Leaving the scene is treated seriously in Illinois: where damage exceeds $1,000 it suspends your driving privileges, and where someone has been injured or killed the Secretary of State is required to revoke your licence outright. Stopping your own vehicle somewhere clear of traffic comes first.",
        trap:
          "'No one saw it and the damage is minor' is how leaving the scene happens. The duty does not scale with the size of the dent.",
        excerptKey: "crash-unattended-vehicle",
        sourceLabel: "Illinois Rules of the Road - Unattended Vehicles",
        sourceUrl: HB,
      },
      {
        id: "il_s3_34",
        topic: "signs",
        question: "What does a blue sign on an Illinois highway tell you?",
        choices: [
          "Services available along the roadway, such as fuel and lodging",
          "Distances to upcoming towns",
          "A recreation area or historic site",
          "A pedestrian or bicycle crossing ahead",
        ],
        correctIndex: 0,
        explanation:
          "Blue is the services colour - fuel, food, lodging, hospitals and other facilities off the next exit.",
        context:
          "Blue and green are both guide colours and they divide the work between them: green tells you where you are and how far it is to where you are going, blue tells you what is available when you get off the road. Brown covers parks, recreation and historic sites. None of the three carries any legal obligation - they exist to inform, unlike the red and black-and-white regulatory signs.",
        trap:
          "Blue also appears on accessible-parking signs, which are regulatory. Colour tells you the category, and the shape and content settle the rest.",
        excerptKey: "sign-color-blue",
        sourceLabel: "Illinois Rules of the Road - Colors of Signs",
        sourceUrl: HB,
      },
      {
        id: "il_s3_35",
        topic: "rules",
        question:
          "At what point does a car sound system become illegal on an Illinois highway?",
        choices: [
          "When the driver cannot hear an emergency siren",
          "When it can be heard 50 feet or more from the vehicle",
          "When it can be heard 75 feet or more from the vehicle",
          "When it can be heard 100 feet or more from the vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Seventy-five feet. Once a radio, tape player or disc player can be heard from that distance while you are driving on a highway, it is a violation.",
        context:
          "It sits in a short list of miscellaneous Illinois prohibitions worth knowing: you may not drive on a sidewalk except where it forms part of a driveway, you may not overload a vehicle with passengers or freight so that your view is obstructed, and you may not ride in a house trailer while it is being towed. Headsets are separately banned, though a single-sided earpiece is allowed.",
        trap:
          "The measure is distance from the vehicle, not whether the driver can hear anything else. It is an objective test.",
        excerptKey: "law-sound-system-75",
        sourceLabel: "Illinois Rules of the Road - Additional Laws",
        sourceUrl: HB,
      },
    ],
  },
];
