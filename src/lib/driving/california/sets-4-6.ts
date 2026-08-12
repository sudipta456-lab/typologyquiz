// California practice sets 4-6.
//
// Set 6 mirrors the real under-18 California DMV knowledge test: 46 questions,
// 38 correct to pass. Every item is written from scratch to test a rule
// verified against the California Driver's Handbook on dmv.ca.gov. No handbook
// sentence is reproduced, and no question is taken from any exam or practice
// site. Explanations, context notes and trap warnings are ours.

import type { DrivingTestSet } from "../types";

const H = "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook";

export const californiaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "California Medium Set II",
    difficulty: "medium",
    description:
      "Forty more questions at exam pitch, leaning harder on the numbers — signalling distances, curb colours, school bus rules and the collision-reporting thresholds.",
    questions: [
      {
        id: "ca_s4_01",
        topic: "signs",
        question:
          "A yellow diamond shows two arrows, one pointing up and one curving in from the right, meeting at a point. This warns you that:",
        choices: [
          "The right lane ends and traffic must merge",
          "A right turn is compulsory ahead",
          "Two-way traffic resumes ahead",
          "A passing lane begins",
        ],
        correctIndex: 0,
        explanation:
          "Merge warnings show two paths joining into one, telling you to adjust speed and position before the lanes actually meet. Merging works best when both drivers do it early and neither treats the vanishing lane as a chance to gain a place.",
        context:
          "Yellow diamonds describe what the road is about to do, and the picture is usually a diagram of the road itself: a curve, a dip, a hill, lanes merging, a divided highway beginning or ending, a signal ahead. None of them impose a rule you can be cited for, but ignoring one usually means arriving at a hazard with no plan. Contrast that with white regulatory rectangles, which do carry enforceable requirements.",
        trap: "\"A right turn is compulsory\" reads the arrow as an instruction to you rather than a picture of the roadway — a mandatory turn would be a white regulatory sign, not a yellow diamond.",
        excerptKey: "sign-diamond-warning",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s4_02",
        topic: "rules",
        question:
          "You are about to pull away from the curb after parking on a city street. Before moving you must:",
        choices: [
          "Move out immediately so you do not hold up traffic behind",
          "Wait for a gap of at least 200 feet",
          "Sound the horn once to alert traffic",
          "Signal, check your mirrors and blind spot, and yield to traffic already moving",
        ],
        correctIndex: 3,
        explanation:
          "Pulling out from a curb makes you the driver joining an established traffic stream, so everyone already moving goes first. The signal and the blind spot check matter especially here because a cyclist can be arriving in the gap between you and the traffic lane.",
        context:
          "California treats leaving a curb like any other entry into traffic: signal, check mirrors, check the blind spot over your shoulder, and yield to vehicles and cyclists already on the road. The same joining-yields-to-established principle covers leaving a driveway or alley, merging onto a freeway, and entering a roundabout. Signal before you move, not as you move.",
        trap: "\"Wait for a gap of at least 200 feet\" borrows the residential U-turn clearance and applies it where no such number exists.",
        excerptKey: "lane-change-shoulder-check",
        sourceLabel: "California Driver's Handbook — Signaling",
        sourceUrl: `${H}/introduction-to-driving/`,
      },
      {
        id: "ca_s4_03",
        topic: "parking",
        question:
          "Facing uphill on a street with a curb, you turn the front wheels away from the curb. Why does the car then need to roll back slightly?",
        choices: [
          "So the rear wheels sit square to the curb",
          "To release tension in the steering",
          "So a front tyre rests against the curb and blocks further movement",
          "To ensure the parking brake engages fully",
        ],
        correctIndex: 2,
        explanation:
          "Turning the wheels is only half of it — the curb has to actually be in contact with a tyre to do any work. Letting the car settle back until the tyre touches turns the curb into a physical stop rather than a nearby object.",
        context:
          "Hill parking has three configurations. Downhill with a curb: wheels toward the curb, so a rolling car steers into it. Uphill with a curb: wheels away from the curb, then roll back until a tyre rests against it. Either direction with no curb: wheels turned right toward the shoulder so a runaway leaves the road. In all three, set the parking brake and leave the vehicle in park or in gear.",
        trap: "\"To ensure the parking brake engages fully\" sounds mechanically plausible, but the roll-back has nothing to do with the brake — it is about making contact with the curb.",
        excerptKey: "hill-uphill-curb",
        sourceLabel: "California Driver's Handbook — Parking on a hill",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s4_04",
        topic: "rightOfWay",
        question:
          "You are merging onto a freeway from an on-ramp. The correct approach is to:",
        choices: [
          "Stop at the end of the ramp and wait for a large gap",
          "Match the speed of freeway traffic on the ramp and merge into a gap",
          "Enter at low speed and accelerate once in the lane",
          "Signal and move over regardless, since merging traffic has priority",
        ],
        correctIndex: 1,
        explanation:
          "The acceleration lane exists so you can arrive at freeway speed and slot into a gap rather than forcing everyone behind to brake. Arriving slow is what turns a routine merge into a hazard.",
        context:
          "Merging is another case of joining traffic that is already established, so freeway traffic has priority and you fit into a gap rather than claiming one. Use the ramp to build speed, signal for at least five seconds, check mirrors and the blind spot, and move over in one deliberate step. Stopping on an on-ramp is dangerous unless traffic ahead of you has genuinely halted.",
        trap: "\"Merging traffic has priority\" reverses the rule; it feels right because freeway drivers often do make room, but courtesy is not the same as right-of-way.",
        excerptKey: "row-entering-traffic",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s4_05",
        topic: "speed",
        question:
          "You are towing a trailer on a highway where the posted limit is 65 mph. Your maximum legal speed is:",
        choices: ["45 mph", "55 mph", "60 mph", "65 mph"],
        correctIndex: 1,
        explanation:
          "Towing puts you at 55 mph regardless of what the sign says for other traffic, because a trailer lengthens your stopping distance and makes the vehicle harder to control. The posted 65 applies to traffic that is not towing.",
        context:
          "Two situations pull the highway maximum down to 55 mph in California: a two-lane undivided highway, and towing a trailer. Otherwise most highways top out at 65 mph unless a sign posts something else, with some rural stretches posted higher. Below all of it, the Basic Speed Law can require less whenever conditions demand it.",
        trap: "65 mph is the posted number in the question, and reading the sign as applying to every vehicle is the mistake — towing carries its own lower ceiling.",
        excerptKey: "speed-max-highways",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/safe-driving-cont2/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s4_06",
        topic: "safety",
        question:
          "Which of these is the best reason to increase your following distance at night?",
        choices: [
          "You can only see as far as your headlights reach, so hazards appear later",
          "Other drivers are legally required to travel more slowly",
          "Brake lights are harder to see when lit",
          "Tyres grip less well after dark",
        ],
        correctIndex: 0,
        explanation:
          "At night your effective sight distance shrinks to the length of your headlight beam, which is often shorter than the distance you need to stop from highway speed. More following distance restores some of the margin the darkness took away.",
        context:
          "The three-second following distance is a fair-weather baseline and you add to it whenever conditions cut your margin: darkness, rain, fog, a heavy load or trailer, following a motorcycle, or sitting behind a large vehicle that blocks your view of the road ahead. Night driving also brings headlight discipline — dim within 500 feet of oncoming traffic and within 300 feet when following.",
        trap: "\"Tyres grip less well after dark\" invents a physical effect; the road surface does not change at sunset, but how far you can see certainly does.",
        excerptKey: "three-second-rule",
        sourceLabel: "California Driver's Handbook — Safe driving",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s4_07",
        topic: "signs",
        question:
          "A white rectangular sign reads KEEP RIGHT with a downward arrow beside a painted island. It means:",
        choices: [
          "Right turns only from this point",
          "Slower traffic should use the right lane",
          "The right lane is about to end",
          "You must pass to the right of the island",
        ],
        correctIndex: 3,
        explanation:
          "This is a regulatory instruction attached to a physical object in the road, telling you which side of it to take. Going the wrong side of a divider puts you into oncoming traffic or into the island itself.",
        context:
          "White rectangular signs carry enforceable rules and the wording is usually literal: KEEP RIGHT, DO NOT PASS, ONE WAY, NO TURN ON RED, speed limits, lane use restrictions. Many prohibitions instead use a red circle with a slash over a symbol. What all of them share is that breaking one is a citable offence, unlike a yellow warning sign which only describes a hazard.",
        trap: "\"Slower traffic should use the right lane\" is a real highway convention and sounds like the same message, but that is a different sign and does not tell you which side of an island to take.",
        excerptKey: "sign-white-rectangle",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s4_08",
        topic: "impairment",
        question:
          "Which of these actually reduces blood alcohol concentration after drinking?",
        choices: [
          "Eating a large meal",
          "Taking a cold shower",
          "Allowing enough time to pass",
          "Drinking strong coffee",
        ],
        correctIndex: 2,
        explanation:
          "The liver processes alcohol at its own steady rate and nothing speeds it up. Coffee and cold water might make someone feel more alert, which is worse than useless because it produces a wide-awake drunk who believes they are fine to drive.",
        context:
          "Alcohol leaves the body at a rate you cannot influence, so the only real remedy is time. Food slows absorption if eaten before or while drinking, but does nothing to remove alcohol already in the bloodstream. Impairment also begins well below any legal threshold, which is why an officer can arrest a driver under 0.08% whose driving shows the effects. Add fatigue or medication and the impairment compounds.",
        trap: "Coffee is the folk remedy everyone reaches for, and the alertness it produces masks impairment without reducing it at all.",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s4_09",
        topic: "rules",
        question:
          "Overtaking on a two-lane road, when may you return to your own lane?",
        choices: [
          "As soon as your front bumper clears the other vehicle",
          "Once you can see the vehicle you passed in your rear-view mirror",
          "Once your passenger tells you it is clear",
          "After counting three seconds from starting the manoeuvre",
        ],
        correctIndex: 1,
        explanation:
          "Seeing the whole front of the passed vehicle in your mirror means you are far enough ahead to move over without cutting in. Pulling back in on the strength of a bumper clearing leaves that driver braking to make room for you.",
        context:
          "A legal pass on a two-lane road needs several things at once: a broken yellow line on your side, enough clear road to complete the manoeuvre before any oncoming vehicle arrives, adequate sight distance, and a safe return. You may not pass on a solid yellow, over a crest, on a curve, at an intersection or railroad crossing, or where a sign forbids it. Signal, check the blind spot, and return only when the passed vehicle appears fully in your mirror.",
        trap: "\"As soon as your front bumper clears\" is how impatient passes end, and cutting back in that early is what forces the other driver to brake.",
        sourceLabel: "California Driver's Handbook — Passing",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s4_10",
        topic: "parking",
        question:
          "You return to your car to find you have parked facing the wrong way against traffic on a two-way street. This is:",
        choices: [
          "Illegal — vehicles must be parked in the direction of travel",
          "Legal on residential streets only",
          "Legal if you parked within a marked space",
          "Legal outside business hours",
        ],
        correctIndex: 0,
        explanation:
          "Parking against the flow means you crossed the oncoming lane to get there and must cross it again to leave, and your reflectors face the wrong way at night. California requires you to park on the right, headed in the direction traffic moves.",
        context:
          "The list of prohibited parking situations is worth learning whole: on a sidewalk or crosswalk, within 20 feet of a crosswalk, within 15 feet of a fire hydrant or fire station driveway, blocking a driveway, double parked, facing against the direction of traffic, in a bike lane where parking is not permitted, and in the striped access aisle beside a disabled space. None of these are excused by a short stay or hazard lights.",
        trap: "\"Legal if you parked within a marked space\" assumes the paint on the ground overrides the direction rule, when the direction requirement applies inside marked spaces too.",
        excerptKey: "parking-wrong-direction-cvc",
        sourceLabel: "California Driver's Handbook — Parking",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s4_11",
        topic: "rightOfWay",
        question:
          "You reach a four-way stop. A car on the cross street stopped a moment before you, and a third car opposite you arrived after both. Who goes first?",
        choices: [
          "The car opposite, because it is going straight",
          "Whichever driver moves first",
          "You, because the car opposite yields to you",
          "The car on the cross street, which arrived first",
        ],
        correctIndex: 3,
        explanation:
          "Arrival order settles it before any other rule applies, and the cross-street car was there first. The right-hand tie-breaker only comes into play when two vehicles arrive together and nothing else separates them.",
        context:
          "Run the intersection sequence in order every time: first to arrive goes first; simultaneous arrivals give way to the vehicle on the right; a left-turning driver yields to oncoming traffic going straight; and anyone entering from a driveway, alley or private road yields to everything on the street. Working through it in that order stops you reaching for the right-hand rule when arrival order has already decided the question.",
        trap: "\"The car opposite, because it is going straight\" applies the left-turn rule to a situation arrival order has already settled — direction only matters once two vehicles are genuinely tied.",
        excerptKey: "row-first-arrival",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s4_12",
        topic: "signs",
        question:
          "A white X-shaped sign reading RAILROAD CROSSING stands at the tracks themselves. This marking is known as:",
        choices: ["A crossbuck", "A cattle guard", "A pennant", "A chevron"],
        correctIndex: 0,
        explanation:
          "The crossbuck marks the crossing itself and carries the same obligation as a yield sign: give way to any train. Where more than one track exists, a small panel beneath it tells you how many.",
        context:
          "A railroad crossing carries several markings that each do a different job. The round yellow sign warns that a crossing is ahead. The white X-shaped crossbuck stands at the crossing itself and requires you to yield to trains. A blue sign nearby carries an emergency number and a crossing identifier for reporting a stuck vehicle. When a train is signalled, stop at least 15 feet from the nearest rail, and never start across without room to clear the tracks completely.",
        trap: "Chevron is a real sign name — the arrow markings used on sharp curves — which makes it a convincing option for anyone guessing on terminology.",
        excerptKey: "sign-crossbuck",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s4_13",
        topic: "safety",
        question:
          "Fog has settled across the road ahead. Which lights should you use?",
        choices: [
          "Parking lights only",
          "High beams, to cut through the fog",
          "Low beams",
          "Hazard lights while moving",
        ],
        correctIndex: 2,
        explanation:
          "High beams bounce off the water droplets and throw the light straight back at you, which makes the fog look denser rather than thinner. Low beams sit under most of the reflection and light the road surface instead.",
        context:
          "Fog driving comes down to a few habits: low beams rather than high, a lower speed than the sign allows under the Basic Speed Law, more following distance, and using the right-hand edge line as a guide rather than the centre. If visibility falls under about 100 feet, keep to 30 mph or less, and if it becomes unmanageable, leave the road at an exit or a parking area rather than stopping on the shoulder.",
        trap: "High beams are the intuitive response to poor visibility, and in fog they are the one setting that actively makes it worse.",
        excerptKey: "headlights-fog",
        sourceLabel: "California Driver's Handbook — Driving in bad weather",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s4_14",
        topic: "speed",
        question:
          "Driving well below the speed of surrounding traffic when conditions are good is:",
        choices: [
          "Always the safest choice",
          "A hazard, because it disrupts traffic flow and invites unsafe passing",
          "Required in the right-hand lane",
          "Only a problem on freeways",
        ],
        correctIndex: 1,
        explanation:
          "Traffic is safest when everyone moves at a similar speed, because that is when nobody needs to overtake. A car well below the flow forces a stream of passing manoeuvres, each of which is an opportunity for something to go wrong.",
        context:
          "Speed is about matching conditions in both directions. The Basic Speed Law forbids driving faster than is safe, and driving far slower than surrounding traffic without reason creates its own hazard. On a multi-lane road, slower vehicles belong in the right-hand lanes, and where a slow vehicle is holding up five or more vehicles on a two-lane road, the driver should use a turnout to let them past.",
        trap: "\"Always the safest choice\" feels unassailable because slower sounds safer, but a large speed difference between vehicles is itself a recognised hazard.",
        excerptKey: "speed-too-slow",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/safe-driving-cont2/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s4_15",
        topic: "rules",
        question:
          "You may cross a double solid yellow line in which of these situations?",
        choices: [
          "To turn left into a driveway or road where that is permitted",
          "Whenever no oncoming traffic is visible",
          "Only when directed by a police officer",
          "To overtake a slow-moving vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Double solid yellow works as a barrier for the purpose of passing, but it does not seal off every property along the road. Turning left across it into a driveway or side road is allowed, as is a U-turn where U-turns are otherwise permitted.",
        context:
          "Yellow lines separate opposing traffic and their style sets the permission. Broken yellow on your side: you may pass when safe. Single solid yellow on your side: no passing, but you may cross to turn. Double solid yellow: a barrier for passing, crossable to turn left into a road or driveway or to make a permitted U-turn, and also crossable at designated HOV entrances and where construction has detoured traffic. Double solid white is different again and is not to be crossed at all.",
        trap: "\"Whenever no oncoming traffic is visible\" treats the marking as advisory, but the line reflects sight distance — what you cannot see is the whole reason it is there.",
        excerptKey: "marking-double-yellow",
        sourceLabel: "California Driver's Handbook — Pavement markings",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s4_16",
        topic: "sharing",
        question:
          "In California, a motorcyclist riding between two lanes of slower-moving traffic is:",
        choices: [
          "Permitted only on freeways during rush hour",
          "Permitted only if traffic is completely stopped",
          "Breaking the law and should be reported",
          "Permitted to do so, so check your mirrors before changing lanes",
        ],
        correctIndex: 3,
        explanation:
          "California allows riders to travel between lanes of slower traffic, which means a motorcycle can appear alongside you where no car could. Your part is to check mirrors and blind spots before moving over, and not to block or crowd a rider deliberately.",
        context:
          "Motorcycles need different handling from cars. They are hard to see and easy to lose in a blind spot, so shoulder-check before every lane change. They can stop in a shorter distance than you can, so keep at least three seconds behind. They may lawfully ride between lanes of slower traffic in California. And they can be pushed off line by gravel, grooved pavement or a gust, so give them the full lane rather than sharing it.",
        trap: "\"Permitted only if traffic is completely stopped\" adds a condition that does not exist, and acting on it means being surprised by a rider in moving traffic.",
        excerptKey: "motorcycle-lane-splitting",
        sourceLabel: "California Driver's Handbook — Motorcyclists",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s4_17",
        topic: "signs",
        question:
          "A diamond-shaped sign shows the outline of two children walking, with a yellow-green background. This indicates:",
        choices: [
          "A daycare centre that is closed to traffic",
          "A playground with no road access",
          "A pedestrian or school crossing area ahead",
          "A residential district boundary",
        ],
        correctIndex: 2,
        explanation:
          "The bright yellow-green background is used for pedestrian, bicycle and school warnings because it stands out from ordinary yellow signs. It tells you that people on foot are expected to cross here, whether or not you can see any yet.",
        context:
          "California uses several signs for the same broad hazard, and it helps to see them as a family. The five-sided sign marks a school zone. Yellow-green diamonds warn of pedestrian, bicycle and school crossings. Yellow diamonds cover other road hazards. Alongside the signs sit the rules: 25 mph within 500 feet of a school while children are present unless posted lower, pedestrian priority in marked and unmarked crosswalks, and never passing a vehicle stopped at a crosswalk.",
        trap: "\"A playground with no road access\" misreads a crossing warning as a land-use notice, which would leave you without any reason to slow down.",
        excerptKey: "sign-diamond-warning",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s4_18",
        topic: "parking",
        question:
          "You need to park briefly to collect a package. Which curb colour permits you to load freight?",
        choices: ["White", "Green", "Yellow", "Blue"],
        correctIndex: 2,
        explanation:
          "Yellow is the loading colour and it covers freight as well as passengers, within any time posted. White would let you drop a person off but not load cargo, and green is ordinary time-limited parking.",
        context:
          "Fix the five colours by what they permit. Red: nothing — no stopping, standing or parking. Yellow: loading of passengers or freight for the posted time. White: passengers or mail only, briefly. Green: limited-time parking, the only colour where you can genuinely leave the vehicle. Blue: parking with a displayed disabled placard or plate. The yellow-white boundary is freight, and the yellow-green boundary is whether you can walk away.",
        trap: "White is the tempting answer because a quick stop feels like a quick stop, but white covers passengers and mail only — freight belongs at a yellow curb.",
        excerptKey: "curb-yellow",
        sourceLabel: "California Driver's Handbook — Colored curbs",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s4_19",
        topic: "rightOfWay",
        question:
          "An emergency vehicle approaches with lights and siren while you are already in the middle of an intersection. You should:",
        choices: [
          "Stop immediately where you are",
          "Continue through the intersection, then pull right and stop",
          "Reverse out of the intersection",
          "Turn left to get out of its path",
        ],
        correctIndex: 1,
        explanation:
          "Stopping in the intersection blocks the very space the emergency vehicle may need to cross. Clear the junction first, then move right and stop like everybody else.",
        context:
          "The emergency vehicle package: pull as far right as you safely can and stop until it has passed; if you are already in an intersection, clear it first and then pull over; never follow within 300 feet of one running lights or siren; and where an emergency, tow or road work vehicle is stopped at the roadside with lights flashing, the Move Over law asks you to change lanes if you safely can and slow down if you cannot.",
        trap: "\"Stop immediately where you are\" is the reflex the siren produces, and in an intersection it plants your car precisely in the path being cleared.",
        excerptKey: "emergency-vehicle-yield",
        sourceLabel: "California Driver's Handbook — Emergency vehicles",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s4_20",
        topic: "safety",
        question: "Driving while drowsy is dangerous mainly because:",
        choices: [
          "Reaction time slows and you can fall asleep briefly without realising",
          "It raises your blood alcohol concentration",
          "It is only a problem on long journeys",
          "It causes the eyes to water and blur vision",
        ],
        correctIndex: 0,
        explanation:
          "Fatigue produces micro-sleeps of a few seconds that the driver often does not notice, and at highway speed a few seconds covers the length of a football field. Slowed reactions on top of that leave almost no margin when something goes wrong.",
        context:
          "Fatigue impairs driving in ways that resemble alcohol: slower reactions, poorer judgment and lapses of attention. The countermeasures that work are stopping to sleep or swapping drivers; the ones that do not are coffee, loud music, open windows and turning up the air conditioning, all of which feel effective without restoring alertness. Fatigue also compounds any alcohol or medication already in your system.",
        trap: "\"Only a problem on long journeys\" is comforting and wrong — a short drive after a bad night or a long shift carries the same risk.",
        sourceLabel: "California Driver's Handbook — Safe driving",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s4_21",
        topic: "impairment",
        question:
          "A prescription medicine carries a warning about drowsiness. Driving after taking it is:",
        choices: [
          "Legal provided you stay under the posted speed limit",
          "Legal as long as you carry the prescription with you",
          "Always legal, because the drug was prescribed to you",
          "Potentially a DUI offence if it impairs your driving",
        ],
        correctIndex: 3,
        explanation:
          "California's impaired driving law is about the effect on your driving, not about whether the substance was legally obtained. A prescription is a defence to possessing the drug, never to driving badly because of it.",
        context:
          "The DUI framework covers alcohol, cannabis, illegal drugs, prescription medicines and over-the-counter remedies alike, because the test is impairment rather than legality. Combining any of them multiplies the effect, and adding fatigue does the same. Blood alcohol thresholds — 0.08% for adults, 0.01% under 21 or on DUI probation, 0.04% commercial — apply only to alcohol; for everything else it is the state of your driving that matters.",
        trap: "\"Legal as long as you carry the prescription\" confuses lawful possession with fitness to drive, which are two entirely separate questions.",
        excerptKey: "drugs-prescription",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s4_22",
        topic: "rules",
        question:
          "You are in a centre left-turn lane waiting to turn. How far may you travel along it before your turn?",
        choices: [
          "Only if no oncoming driver is also using it",
          "As far as you like, since it is a shared lane",
          "Only a short distance immediately before the turn",
          "Up to half a mile",
        ],
        correctIndex: 2,
        explanation:
          "The centre lane belongs to traffic from both directions at once, so anyone driving along it is on a collision course with someone doing the same thing the other way. Enter it shortly before your turn and use it as a waiting bay, not a travel lane.",
        context:
          "A centre left-turn lane is marked by a solid outer yellow line and a broken inner one on each side, and it is shared by drivers from both directions. Permitted uses are waiting to turn left and making a U-turn where U-turns are allowed. Prohibited uses are driving along it, passing in it, and using it to build speed before merging into traffic.",
        trap: "\"As far as you like, since it is a shared lane\" gets the sharing right and the consequence exactly backwards — being shared with oncoming traffic is why you cannot travel in it.",
        excerptKey: "center-left-turn-lane",
        sourceLabel: "California Driver's Handbook — Lane markings",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s4_23",
        topic: "signs",
        question:
          "You approach an intersection displaying a flashing yellow signal. You should:",
        choices: [
          "Stop completely, then proceed when clear",
          "Slow down and proceed with caution",
          "Treat it as a green light and continue at speed",
          "Stop and wait for the signal to change",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow is a caution signal, not a stop. Slow enough to react to whatever the flashing is warning you about, then continue through when the way is clear.",
        context:
          "Non-standard signals each have a defined meaning. Flashing red equals a stop sign. Flashing yellow means slow down and proceed carefully. A dark signal is treated as a four-way stop. A red arrow forbids that turn outright, while a solid red still allows a right turn after stopping unless a sign prohibits it. Knowing each one means never having to improvise at a junction.",
        trap: "\"Stop completely, then proceed\" is the flashing RED instruction, and the two flashing signals are the pair most often swapped.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "California Driver's Handbook — Traffic signals",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s4_24",
        topic: "speed",
        question:
          "Which of these correctly pairs a California situation with its speed limit?",
        choices: [
          "Passing a streetcar stopped at a safety zone — 10 mph",
          "School zone with children present — 15 mph in all cases",
          "Alley — 25 mph",
          "Blind intersection — 20 mph",
        ],
        correctIndex: 0,
        explanation:
          "Ten miles per hour is the figure for passing a bus or streetcar stopped at a safety zone, where passengers are stepping into the road. Alleys and blind intersections are 15 mph, and school zones are 25 mph unless a sign posts lower.",
        context:
          "The low-speed table: 10 mph passing a bus or streetcar stopped at a safety zone; 15 mph in an alley, at a blind intersection, and within 100 feet of a railroad crossing where you cannot see 400 feet along the track; 25 mph in business and residential districts and in school zones with children present, though some school zones are posted at 15 mph. Getting these four numbers straight answers most California speed questions.",
        trap: "\"School zone — 15 mph in all cases\" is half true, because some zones are posted at 15, but the general school-zone figure is 25 mph.",
        excerptKey: "speed-max-highways",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s4_25",
        topic: "emergencies",
        question:
          "You are involved in a collision causing more than $1,000 of property damage. You must report it to the DMV within:",
        choices: ["24 hours", "5 days", "10 days", "30 days"],
        correctIndex: 2,
        explanation:
          "The SR 1 report goes to the DMV within ten days whenever damage exceeds $1,000 or anyone is injured or killed, regardless of who caused it. Missing the deadline can cost you your driving privilege even if the collision was not your fault.",
        context:
          "Two separate clocks run after a California collision. Law enforcement must be notified within 24 hours if anyone was injured or killed. The DMV must receive an SR 1 within 10 days if anyone was injured or killed or if property damage exceeds $1,000. The obligation applies regardless of fault and even on private property. At the scene itself you stop, call 911 if anyone is hurt, exchange licence, registration and insurance details, and leave a note if you hit an unattended vehicle.",
        trap: "24 hours is a real California deadline, but it belongs to notifying law enforcement about injury or death, not to filing the SR 1 with the DMV.",
        excerptKey: "collision-report-sr1",
        sourceLabel: "California Driver's Handbook — Collisions",
        sourceUrl: `${H}/financial-responsibility-insurance-requirements-and-collisions/`,
      },
      {
        id: "ca_s4_26",
        topic: "rightOfWay",
        question:
          "A school bus on a two-lane road switches on flashing amber lights. This means:",
        choices: [
          "You may pass now, before the red lights come on",
          "The bus is pulling away and traffic may resume",
          "Children have already finished crossing",
          "The bus is about to stop — slow down and prepare to stop",
        ],
        correctIndex: 3,
        explanation:
          "Amber is the warning stage, the equivalent of a yellow traffic light on the back of a bus. It gives you time to slow and stop before the red lights and the stop arm commit everyone around you.",
        context:
          "School bus lights run in two stages. Flashing amber warns that the bus is preparing to stop. Flashing red with the stop arm extended requires traffic in both directions to stop on an ordinary undivided street, and only drivers on the far side of a divided highway or a road with two or more lanes each way may continue. Stay stopped until the red lights go off. Passing a bus illegally can bring a fine into four figures and a possible year-long licence suspension.",
        trap: "\"You may pass now, before the red lights come on\" treats amber as a last chance, which is the interpretation that puts a car alongside the bus exactly as children step out.",
        excerptKey: "school-bus-amber",
        sourceLabel: "California Driver's Handbook — School buses",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s4_27",
        topic: "parking",
        question:
          "The diagonally striped area painted beside a marked disabled parking space is there to:",
        choices: [
          "Indicate the space is out of service",
          "Provide extra space for larger vehicles",
          "Give room for a wheelchair lift or ramp — you may not park or stop there",
          "Mark a loading zone for deliveries",
        ],
        correctIndex: 2,
        explanation:
          "The hatched aisle is the working space someone needs to get out of the vehicle, and a car parked in it can trap a wheelchair user inside their own car. It is not spare road, however briefly you intend to be there.",
        context:
          "Disabled parking in California comes with two rules rather than one. The blue-marked space itself requires a valid placard or special plate on display. The striped access aisle beside it must be kept completely clear — no parking and no stopping, placard or not. Blue curbs work the same way, and the placard belongs to the person rather than to the car.",
        trap: "\"Extra space for larger vehicles\" is the intuitive reading of an empty striped area, and acting on it is how access aisles get blocked.",
        excerptKey: "parking-crosshatch-disabled",
        sourceLabel: "California Driver's Handbook — Parking",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s4_28",
        topic: "rules",
        question:
          "You are approaching an intersection where traffic ahead is backed up and you would not clear the junction before the light changes. You should:",
        choices: [
          "Enter anyway, since your light is green",
          "Wait behind the limit line until there is room on the far side",
          "Enter and stop in the middle of the intersection",
          "Change lanes and enter from a different lane",
        ],
        correctIndex: 1,
        explanation:
          "A green light means you may go if the way is clear, not that you should occupy the intersection regardless. Blocking the junction stops cross traffic from moving even when their light turns green, and the queue never clears.",
        context:
          "The green light rule is conditional in California: proceed only if there is space to do so without creating a danger or blocking the intersection. That principle also covers railroad crossings, where you must not start across without room to clear the tracks completely, and it is why you never stop on tracks or in a junction while waiting for traffic ahead to move.",
        trap: "\"Enter anyway, since your light is green\" reads green as a right rather than a permission, and it is the single biggest cause of gridlocked intersections.",
        excerptKey: "row-entering-traffic",
        sourceLabel: "California Driver's Handbook — Traffic signals",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s4_29",
        topic: "signs",
        question:
          "You see a white regulatory sign reading NO TURN ON RED at a signalised intersection. This means:",
        choices: [
          "You may not turn right until the light is green",
          "You may turn only if a police officer directs you",
          "The rule applies only during posted hours in every case",
          "You may turn right on red after stopping for five seconds",
        ],
        correctIndex: 0,
        explanation:
          "The default permission to turn right on red exists only where nothing forbids it, and this sign is exactly that prohibition. Wait for green, however clear the road looks.",
        context:
          "Turning on red in California requires three conditions together: no NO TURN ON RED sign, a complete stop at the limit line, and yielding to pedestrians and cross traffic. It covers right turns generally and left turns from one one-way street onto another. A red arrow removes the permission on its own, without any sign being needed, and some NO TURN ON RED signs carry a time panel restricting the ban to certain hours.",
        trap: "\"After stopping for five seconds\" invents a waiting period as a workaround, but no amount of stopping converts a prohibited turn into a permitted one.",
        excerptKey: "turn-right-on-red",
        sourceLabel: "California Driver's Handbook — Traffic signals",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s4_30",
        topic: "safety",
        question:
          "Which passenger is correctly restrained under California's child seat rules?",
        choices: [
          "A five-year-old on an adult's lap with a shared belt",
          "A three-year-old in the front seat with an active airbag",
          "A two-year-old in a forward-facing seat in the front",
          "A six-year-old in the back seat in a booster with a lap and shoulder belt",
        ],
        correctIndex: 3,
        explanation:
          "A booster in the back with a lap and shoulder belt is where a six-year-old belongs, because it positions the adult belt across the strong parts of a small body. Sharing a belt or riding on a lap gives no protection at all in a crash.",
        context:
          "California's restraint rules build from the child outward: the youngest ride rear-facing, older children move to forward-facing seats and then to boosters, and children generally travel in the back seat rather than in front of an active airbag. Everyone in the vehicle must be belted, and an airbag is designed to work with a seat belt rather than instead of one. Leaving young children unattended in a vehicle is separately prohibited.",
        trap: "\"A three-year-old in the front with an active airbag\" is the dangerous option that looks merely unconventional — an airbag deploying into a small child is what the back-seat rule exists to prevent.",
        excerptKey: "child-restraint",
        sourceLabel: "California Driver's Handbook — Child restraints",
        sourceUrl: `${H}/safe-driving-cont1/`,
      },
      {
        id: "ca_s4_31",
        topic: "impairment",
        question:
          "How long does a DUI conviction stay on your California driving record?",
        choices: ["3 years", "5 years", "7 years", "10 years"],
        correctIndex: 3,
        explanation:
          "Ten years is the retention period, which is long enough that a second offence within it is treated far more seriously. It also means the conviction affects insurance and employment prospects for a decade.",
        context:
          "The consequences of a DUI in California stack up across several systems. The DMV can suspend your privilege administratively, separate from any court case, with a 10-day window to request a hearing and a temporary licence of about 30 days. A conviction adds a mandatory DUI programme, an insurance proof filing such as an SR 22, and reissue fees. Refusing a chemical test brings its own suspension of about a year under implied consent. The record itself lasts 10 years.",
        trap: "Three or five years matches the retention period for lesser violations, which makes the shorter figures feel right for anyone reasoning from ordinary tickets.",
        excerptKey: "dui-record-10-years",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s4_32",
        topic: "speed",
        question:
          "On a two-lane road you are holding up five or more vehicles behind you. California expects you to:",
        choices: [
          "Move onto the shoulder and continue driving there",
          "Maintain your speed — they may pass when it is safe",
          "Pull into a turnout or off the road when safe and let them by",
          "Speed up to the posted limit regardless of conditions",
        ],
        correctIndex: 2,
        explanation:
          "A long queue behind a slow vehicle produces risky overtaking attempts, and the driver at the front is the one who can end that cheaply. Using a turnout costs you seconds and removes the pressure that causes head-on collisions.",
        context:
          "Speed management runs in both directions in California. Never drive faster than is safe for conditions, and do not create a hazard by moving far slower than surrounding traffic without reason. On two-lane roads, a driver holding up five or more vehicles should use a turnout or pull over safely to let them past. On multi-lane roads, slower traffic keeps to the right-hand lanes.",
        trap: "\"Maintain your speed — they may pass when it is safe\" is technically legal reasoning that ignores the queue's actual behaviour: frustration produces passes that are not safe.",
        excerptKey: "turnout-five-vehicles",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
      {
        id: "ca_s4_33",
        topic: "signs",
        question:
          "A green sign with a white arrow and the word EXIT above a freeway lane tells you that:",
        choices: [
          "The lane merges with the one to its left",
          "That lane leaves the freeway at the next exit",
          "That lane is closed ahead",
          "Only carpool vehicles may use that lane",
        ],
        correctIndex: 1,
        explanation:
          "Overhead green signs assign lanes to destinations, and an arrow above a lane means that lane goes where the sign says. Reading them early is what stops the last-second lane change across solid lines.",
        context:
          "Freeway guidance is colour-coded: green for exits, destinations and distances; blue for services such as fuel, food and lodging; brown for parks and recreational destinations. Overhead arrows assign specific lanes, and exit numbers usually correspond to mileposts. Where you have missed an exit, continue to the next one rather than crossing solid lines or stopping on the shoulder.",
        trap: "\"Only carpool vehicles may use that lane\" mixes in HOV signage, which uses a white diamond and occupancy wording rather than a green exit panel.",
        excerptKey: "sign-colour-green-guide",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s4_34",
        topic: "rules",
        question:
          "You want to enter a carpool lane that is bounded by double solid white lines. You may cross into it:",
        choices: [
          "Only where the lines break to mark a designated entry",
          "Only when traffic in the general lanes is stopped",
          "Only during the posted operating hours",
          "Anywhere along its length if you meet the occupancy requirement",
        ],
        correctIndex: 0,
        explanation:
          "Meeting the occupancy requirement earns you the right to be in the lane, not the right to enter it wherever you like. The broken-line openings are where the geometry and sight lines make a crossing safe.",
        context:
          "Two separate questions arise with a carpool lane and the test likes to blur them. Eligibility asks whether you may use the lane at all — usually a minimum number of occupants, plus motorcycles and clean-air vehicles with a valid decal, and only during the posted hours if hours are stated. Access asks where you may cross into it — anywhere the boundary is a single broken line, but only at designated openings where double solid white lines apply.",
        trap: "\"Anywhere if you meet the occupancy requirement\" is the eligibility answer applied to an access question, and it is the most common carpool-lane error.",
        excerptKey: "marking-double-white",
        sourceLabel: "California Driver's Handbook — HOV lanes",
        sourceUrl: `${H}/navigating-the-roads/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s4_35",
        topic: "licensing",
        question:
          "What is the minimum liability insurance for property damage that a California driver must carry?",
        choices: ["$5,000", "$10,000", "$15,000", "$25,000"],
        correctIndex: 2,
        explanation:
          "Fifteen thousand dollars is the property damage minimum, alongside $30,000 for injury to one person and $60,000 for injuries in a single collision. These are floors rather than sensible amounts — a modern vehicle can exceed $15,000 on its own.",
        context:
          "California's financial responsibility minimums come as a set of three: $30,000 for injury or death of one person, $60,000 for injury or death of more than one person in the same collision, and $15,000 for property damage. You must be able to show evidence of insurance when asked and after any collision, and driving without it can cost you your registration and your driving privilege.",
        trap: "$25,000 is the property damage minimum in several other states and gets carried across by anyone who learned to drive elsewhere.",
        excerptKey: "insurance-minimums",
        sourceLabel: "California Driver's Handbook — Financial responsibility",
        sourceUrl: `${H}/financial-responsibility-insurance-requirements-and-collisions/`,
      },
      {
        id: "ca_s4_36",
        topic: "rightOfWay",
        question:
          "You are turning left from a two-way street into a driveway across the oncoming lane. A cyclist is riding toward you in the bike lane. You should:",
        choices: [
          "Sound your horn and complete the turn",
          "Turn behind the cyclist without slowing",
          "Turn ahead of the cyclist if there is space",
          "Wait — the cyclist has the right-of-way as oncoming traffic",
        ],
        correctIndex: 3,
        explanation:
          "A cyclist coming toward you counts as oncoming traffic, and a left-turning driver yields to oncoming traffic. Riders are easy to under-read for speed, which is why turning across one so often ends badly.",
        context:
          "Left turns yield to everything coming the other way, and that includes bicycles, motorcycles and light rail vehicles as well as cars. It also includes pedestrians in the crosswalk you are turning into. Judging a cyclist's speed is genuinely harder than judging a car's, so where you are unsure, wait. Bicycles otherwise carry the same rights as vehicles on California roads.",
        trap: "\"Turn ahead of the cyclist if there is space\" relies on a speed estimate people routinely get wrong, because a bicycle looks slower than it is closing.",
        excerptKey: "row-turning-left",
        sourceLabel: "California Driver's Handbook — Bicyclists",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s4_37",
        topic: "safety",
        question:
          "Carbon monoxide is a hazard in vehicles mainly because it:",
        choices: [
          "Builds up only when the air conditioning is running",
          "Has a strong smell that distracts the driver",
          "Is colourless and odourless and causes drowsiness before you notice it",
          "Only accumulates in vehicles over ten years old",
        ],
        correctIndex: 2,
        explanation:
          "You cannot see or smell carbon monoxide, so the first sign is usually a headache or sleepiness that a driver blames on the journey. A leaking exhaust or running the engine in an enclosed space can produce it in any vehicle.",
        context:
          "Carbon monoxide sits alongside fatigue and impairment as a threat to alertness, and it works the same way — degrading judgment before the driver realises anything is wrong. Keep the exhaust system in good order, never run the engine in a closed garage, and if you feel drowsy or headachy on a drive, open the windows and stop to get fresh air rather than pushing on.",
        trap: "\"Only accumulates in vehicles over ten years old\" makes it someone else's problem, when an exhaust leak or an enclosed space can affect any vehicle.",
        excerptKey: "carbon-monoxide",
        sourceLabel: "California Driver's Handbook — Safe driving",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
      {
        id: "ca_s4_38",
        topic: "sharing",
        question:
          "You are behind a large truck climbing a long grade. It is slowing and you cannot see round it. You should:",
        choices: [
          "Move closer so you can see past it",
          "Drop back to increase your view and your stopping room",
          "Pass on the right shoulder",
          "Flash your headlights to prompt it to move over",
        ],
        correctIndex: 1,
        explanation:
          "Backing off widens your view around the truck and restores the stopping distance a heavy vehicle in front takes away. Moving closer does the opposite of what it feels like it does — it shrinks the sight line and the margin at once.",
        context:
          "Behind any large vehicle, distance buys both visibility and time. Trucks block your view of the road ahead, take much longer to stop, have long blind spots down both sides and directly behind, and swing wide before turning. Where you cannot see the driver's mirrors, assume the driver cannot see you. Pass on the left with a clear run, and never on the shoulder.",
        trap: "\"Move closer so you can see past it\" inverts the geometry — the nearer you are to a tall vehicle, the less of the road beyond it you can see.",
        excerptKey: "truck-blind-spots",
        sourceLabel: "California Driver's Handbook — Large vehicles",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s4_39",
        topic: "emergencies",
        question:
          "You strike a legally parked car and cannot find the owner. You must:",
        choices: [
          "Leave a note with your name, contact details and what happened",
          "Wait 30 minutes and then leave",
          "Do nothing, since the vehicle was unattended",
          "Report it only if the damage is visible",
        ],
        correctIndex: 0,
        explanation:
          "Hitting an unattended vehicle carries the same obligation as any other collision — the other owner has to be able to find you. A note with your name and contact details discharges it; driving off is a hit and run.",
        context:
          "After any California collision you must stop. If anyone is hurt, call 911, and notify law enforcement within 24 hours where there is injury or death. Exchange driver's licence, registration and insurance details with the other parties. Where the other vehicle is unattended, leave a note with your details. File an SR 1 with the DMV within 10 days if anyone was injured or killed or if property damage exceeds $1,000, whatever the fault.",
        trap: "\"Report it only if the damage is visible\" makes your own assessment the test, when the obligation attaches to the collision rather than to how bad it looks.",
        excerptKey: "collision-parked-car",
        sourceLabel: "California Driver's Handbook — Collisions",
        sourceUrl: `${H}/financial-responsibility-insurance-requirements-and-collisions/`,
      },
      {
        id: "ca_s4_40",
        topic: "rules",
        question:
          "A driver aged 17 with a provisional licence wants to use a hands-free phone mount to take a call while driving. Under California law this is:",
        choices: [
          "Allowed if a licensed adult is in the vehicle",
          "Allowed, because the phone is hands-free",
          "Allowed only on surface streets, not freeways",
          "Not allowed — drivers under 18 may not use a phone while driving except for emergencies",
        ],
        correctIndex: 3,
        explanation:
          "The hands-free exemption is for adults only. A driver under 18 may not use a wireless phone at all while driving, hands-free or otherwise, apart from calling for emergency help.",
        context:
          "California's phone rules split by age. Drivers 18 and over may use a phone only in hands-free mode, and texting or holding the phone is prohibited. Drivers under 18 may not use a phone or hands-free device at all while driving, except to call for emergency assistance. That restriction sits alongside the other provisional rules for under-18 drivers: no driving between 11 p.m. and 5 a.m., and no passengers under 20 unless a licensed driver aged 25 or over is in the vehicle, both for the first 12 months.",
        trap: "\"Allowed, because the phone is hands-free\" applies the adult rule to a minor, and it is the most-missed item in the whole distracted driving section.",
        excerptKey: "minor-cell-phone",
        sourceLabel: "California Driver's Handbook — Distracted driving",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont2/`,
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "California Hard Set",
    difficulty: "hard",
    description:
      "Forty questions on the material that actually fails people: exact distances, all five curb colours, wheel direction on every kind of hill, layered right-of-way and the signs everyone confuses.",
    questions: [
      {
        id: "ca_s5_01",
        topic: "parking",
        question:
          "Which pairing of curb colour and permitted use is correct in California?",
        choices: [
          "Green — loading passengers and freight",
          "White — limited-time parking as posted",
          "Yellow — loading passengers or freight for the posted time",
          "Blue — commercial deliveries only",
        ],
        correctIndex: 2,
        explanation:
          "Yellow is the loading colour and covers both passengers and cargo. Green is time-limited parking, white is passengers or mail only, and blue is reserved for a displayed disabled placard or plate.",
        context:
          "The five colours, in the order of how much they permit: red allows nothing at all; white allows a brief stop for passengers or mail; yellow allows loading of passengers or freight for a posted time; green allows genuine parking for a posted period; blue allows parking with a valid disabled placard or plate. Two boundaries carry most of the test weight — freight separates yellow from white, and the ability to leave the vehicle separates green from both.",
        trap: "\"Green — loading passengers and freight\" swaps green and yellow, which is the most common curb-colour error because both permit a stay of several minutes.",
        excerptKey: "curb-white",
        sourceLabel: "California Driver's Handbook — Colored curbs",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s5_02",
        topic: "rightOfWay",
        question:
          "You are turning left at a green arrow. A pedestrian steps off the curb into the crosswalk you are turning into. You should:",
        choices: [
          "Proceed — the green arrow gives you a protected turn",
          "Yield to the pedestrian and complete the turn afterwards",
          "Sound the horn and continue",
          "Reverse to clear the intersection",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow protects you from conflicting vehicles, not from people on foot. Pedestrian priority survives every kind of green signal, so the turn waits until the crosswalk is clear.",
        context:
          "Protected turns hold back opposing vehicles, but pedestrian rules run alongside all signal phases. You yield to pedestrians in marked and unmarked crosswalks, at a green light, at a green arrow, and after stopping for a right on red. You also stop behind the limit line rather than in the crossing, never pass a vehicle stopped at a crosswalk, and give extra time to older pedestrians, children and people with disabilities.",
        trap: "\"The green arrow gives you a protected turn\" is true as far as vehicles go, and reading protection as absolute is exactly how left-turning drivers hit pedestrians.",
        excerptKey: "crosswalk-row",
        sourceLabel: "California Driver's Handbook — Pedestrians",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s5_03",
        topic: "rules",
        question:
          "You are in a business district and want to make a U-turn. This is permitted:",
        choices: [
          "At an intersection, or through an opening in a divided highway, unless signed otherwise",
          "Only where a sign expressly authorises a U-turn",
          "Nowhere within a business district under any circumstances",
          "Anywhere, provided no vehicle is within 200 feet",
        ],
        correctIndex: 0,
        explanation:
          "Business districts restrict U-turns to intersections and divided-highway openings, because mid-block turns there cut across parked cars, driveways and pedestrians. The 200-foot mid-block allowance belongs to residential districts, not business ones.",
        context:
          "U-turn rules change with the setting. Residential district: mid-block is permitted when no vehicle is approaching within 200 feet either way. Business district: only at an intersection or through a divided-highway opening. Divided highway generally: use a provided opening rather than crossing the barrier. Never in front of a fire station or at a railroad crossing. Any NO U-TURN sign overrides all of the above.",
        trap: "The 200-foot answer is a real California rule in the wrong district, which makes it the most convincing distractor available.",
        excerptKey: "uturn-business-exception",
        sourceLabel: "California Driver's Handbook — U-turns",
        sourceUrl: `${H}/navigating-the-roads/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s5_04",
        topic: "signs",
        question:
          "Which of these describes the sign that warns of a railroad crossing ahead, as distinct from the one at the crossing itself?",
        choices: [
          "A blue rectangular sign with a phone number",
          "A five-sided yellow sign",
          "A white X-shaped sign reading RAILROAD CROSSING",
          "A round yellow sign bearing a black X and two Rs",
        ],
        correctIndex: 3,
        explanation:
          "The round yellow sign is the advance warning, placed back from the tracks so you have time to slow. The white X-shaped crossbuck stands at the crossing itself and carries a yield obligation to trains.",
        context:
          "A railroad crossing has three distinct signs and each does a different job. The round yellow advance warning tells you a crossing is coming. The white crossbuck at the crossing requires you to yield to trains. The blue emergency notification sign carries a phone number and a crossing identifier for reporting a stalled vehicle. The associated rules: stop at least 15 feet from the nearest rail when a train is signalled, and hold to 15 mph within 100 feet where you cannot see 400 feet along the track.",
        trap: "The white crossbuck is the sign everyone pictures when they think of a railroad crossing, but it sits at the tracks rather than warning you in advance.",
        excerptKey: "sign-railroad-advance",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s5_05",
        topic: "parking",
        question:
          "Which of these hill-parking descriptions is correct for a vehicle facing UPHILL on a road with NO curb?",
        choices: [
          "Front wheels turned left, then rolled back",
          "Front wheels turned left, toward the centre of the road",
          "Front wheels turned right, toward the edge of the road",
          "Front wheels straight, parking brake set",
        ],
        correctIndex: 2,
        explanation:
          "With no curb to catch the tyre, the only useful outcome is a runaway car leaving the road rather than entering it, so the wheels point right in both uphill and downhill cases. The left-turn answers all assume a curb that is not there.",
        context:
          "Three hill cases, and this is the one most often confused. Downhill with a curb: wheels toward the curb. Uphill with a curb: wheels away from the curb, then roll back until a tyre rests against it. Uphill or downhill with no curb: wheels right, toward the shoulder. The reasoning is identical every time — decide which way gravity moves the car, then aim the wheels so that motion takes it somewhere harmless. Parking brake plus park or gear in all three.",
        trap: "\"Wheels turned left, then rolled back\" is the correct uphill technique WITH a curb, and importing it to a curbless road points the car straight into the traffic lane.",
        excerptKey: "hill-no-curb",
        sourceLabel: "California Driver's Handbook — Parking on a hill",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s5_06",
        topic: "speed",
        question:
          "Which of these California speed figures is stated incorrectly?",
        choices: [
          "15 mph in an alley",
          "20 mph passing a bus stopped at a safety zone",
          "25 mph in a business district unless posted otherwise",
          "15 mph at a blind intersection",
        ],
        correctIndex: 1,
        explanation:
          "Passing a bus or streetcar stopped at a safety zone is limited to 10 mph, not 20. The other three figures are correct as stated.",
        context:
          "The full low-speed set: 10 mph passing a bus or streetcar stopped at a safety zone; 15 mph in alleys, at blind intersections, and within 100 feet of a railroad crossing where you cannot see 400 feet along the track; 25 mph in business and residential districts and in school zones with children present unless posted lower. The higher end: 55 mph on two-lane undivided highways and when towing, and 65 mph on most other highways unless posted otherwise.",
        trap: "All four options look like real California figures, and 20 mph is the one number in the list that appears nowhere in the speed rules.",
        excerptKey: "speed-max-highways",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s5_07",
        topic: "rightOfWay",
        question:
          "You approach an uncontrolled intersection at the same moment as a car on your left and a car on your right. Working through the rules, who has priority over you?",
        choices: [
          "Only the car on your right",
          "Only the car on your left",
          "Both cars equally",
          "Neither — you arrived at the same time so nobody yields",
        ],
        correctIndex: 0,
        explanation:
          "The tie-breaker sends priority to the right, so the car on your right goes before you and you go before the car on your left. Applied consistently by all three drivers, the intersection unwinds one vehicle at a time.",
        context:
          "The uncontrolled intersection sequence: first arrival wins; simultaneous arrivals yield to the vehicle on the right; left-turning drivers yield to oncoming traffic going straight; and anyone joining from a driveway, alley or private road yields to the street. The right-hand rule chains rather than deadlocks — you yield to your right and the driver on your left yields to you, so the queue resolves in order.",
        trap: "\"Neither — nobody yields\" is the intuition that a three-way tie must be unresolvable, when the right-hand rule handles it perfectly well.",
        excerptKey: "row-same-time-right",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s5_08",
        topic: "safety",
        question:
          "You must dim your high beams within 300 feet of another vehicle in which situation?",
        choices: [
          "When passing a parked vehicle at night",
          "When approaching a signalised intersection",
          "When a vehicle is approaching from the opposite direction",
          "When you are following another vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Three hundred feet is the following figure — your beams fill the mirrors of the driver ahead well before you are that close. Oncoming traffic gets the larger 500-foot allowance because the light hits their eyes directly.",
        context:
          "Three headlight distances, easily confused. Dim within 500 feet of an oncoming vehicle. Dim within 300 feet of a vehicle you are following. Use headlights whenever you cannot see clearly for 1,000 feet, and also from half an hour after sunset to half an hour before sunrise, in tunnels, on mountain roads, and whenever the wipers are running. The largest number is the visibility trigger, the middle one is for oncoming traffic, the smallest is for following.",
        trap: "The oncoming case is what most people think of first when they think about dimming, and it carries the 500-foot figure rather than 300.",
        excerptKey: "headlights-dim-distance",
        sourceLabel: "California Driver's Handbook — Headlights",
        sourceUrl: `${H}/introduction-to-driving/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s5_09",
        topic: "signs",
        question:
          "You see a white rectangular sign showing a black arrow curving left inside a red circle with a slash, mounted at an intersection. It prohibits:",
        choices: [
          "Passing on the left",
          "Left lane changes",
          "Left turns at that intersection",
          "U-turns at that intersection",
        ],
        correctIndex: 2,
        explanation:
          "A simple curved arrow inside the slashed circle is the left-turn prohibition. The U-turn sign is different — its arrow doubles back on itself to make a hook.",
        context:
          "The red circle with a slash always prohibits whatever is drawn inside it, and the distinguishing detail is the shape of the arrow. A single curved arrow bending left means no left turn. An arrow that curls back on itself means no U-turn. Some intersections carry both. Read the arrow shape before the circle, because the circle only tells you that something is banned.",
        trap: "No U-turn is the obvious guess because both signs use a curved arrow, and the difference is only whether the arrow doubles back on itself.",
        excerptKey: "sign-prohibition-circle",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s5_10",
        topic: "rules",
        question:
          "A school bus stops with red lights flashing on a road that has one lane in each direction plus a centre left-turn lane. As an oncoming driver you must:",
        choices: [
          "Continue, because the centre lane divides the road",
          "Stop until the red lights stop flashing",
          "Slow to 10 mph and pass",
          "Stop only if the stop arm is on your side",
        ],
        correctIndex: 1,
        explanation:
          "A centre left-turn lane does not make a road divided, and it does not give you two lanes in your direction. This is an ordinary undivided street, so traffic in both directions stops.",
        context:
          "The school bus exception applies only where the road is genuinely divided or has two or more lanes in each direction. A painted centre left-turn lane is neither — it is shared by both directions and provides no barrier. Amber lights mean the bus is preparing to stop; red lights with the stop arm out mean stop, and stay stopped until the lights go off. The penalty for passing illegally reaches into four figures with a possible year-long suspension.",
        trap: "\"The centre lane divides the road\" is the reasoning the exception invites, and a painted turn lane is exactly what the exception does not cover.",
        excerptKey: "school-bus-red-lights",
        sourceLabel: "California Driver's Handbook — School buses",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s5_11",
        topic: "impairment",
        question:
          "Match the driver to the correct California blood alcohol threshold: a 22-year-old driving a ride-hire vehicle with a paying passenger.",
        choices: ["0.01%", "0.04%", "0.05%", "0.08%"],
        correctIndex: 1,
        explanation:
          "Carrying passengers for hire puts a driver at 0.04%, the same figure that applies to commercial drivers, regardless of being over 21. The paying passenger is what changes the threshold, not the age.",
        context:
          "Read the threshold off the situation rather than the age alone. Under 21, or on DUI probation at any age: 0.01%. Commercial driver, or carrying passengers for hire: 0.04%. Everyone else aged 21 or over: 0.08%. A question that mentions a truck, a bus or a paying passenger is pointing at 0.04% even where the driver is an adult.",
        trap: "0.08% is the reflex answer once the question says the driver is 22, and the paying passenger is the detail that overrides it.",
        excerptKey: "bac-commercial",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s5_12",
        topic: "parking",
        question:
          "Where a curb extension has already been built out at a corner, how close to the crosswalk may you park?",
        choices: [
          "15 feet",
          "20 feet",
          "You may park up to the crosswalk line",
          "10 feet",
        ],
        correctIndex: 0,
        explanation:
          "The standard clearance is 20 feet, but a curb extension has already pushed the crossing point out into the road and improved sight lines, so the requirement drops to 15 feet.",
        context:
          "California's parking distances: 20 feet from a crosswalk normally, 15 feet where a curb extension exists, and 15 feet from a fire hydrant or fire station driveway. On top of the numbers, you may not park on a sidewalk or crosswalk, block a driveway, double park, park facing against traffic, or occupy the striped access aisle beside a disabled space. Red curbs are usually painted to mark these zones out for you.",
        trap: "20 feet is the standard crosswalk figure and gets chosen by anyone who has learned the number without the curb-extension exception.",
        excerptKey: "parking-crosswalk",
        sourceLabel: "California Driver's Handbook — Parking",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s5_13",
        topic: "rightOfWay",
        question:
          "You are on a narrow mountain road and meet an oncoming vehicle where only one can pass. You are heading downhill. What is expected?",
        choices: [
          "Whichever driver is closer to a turnout backs up",
          "Both drivers should pull as far right as possible and squeeze past",
          "You proceed, since the uphill driver can restart more easily",
          "You back up to a wider point, because the uphill driver has the right-of-way",
        ],
        correctIndex: 3,
        explanation:
          "The uphill vehicle keeps the right-of-way and the downhill vehicle is the one that reverses, because backing down a grade is much easier to control than backing up one. Momentum on a descent is what makes you the driver better able to manoeuvre.",
        context:
          "Mountain driving has its own small rulebook. The uphill vehicle has the right-of-way on a narrow road and the downhill vehicle reverses if necessary. Headlights go on in daylight because of shade and blind curves. The horn is a legitimate warning before a bend you cannot see round. Use a lower gear on long descents so the brakes do not overheat, and use turnouts to let faster traffic past.",
        trap: "\"The uphill driver can restart more easily\" gets the physics backwards — restarting on a grade is precisely the hard part, which is why they keep the right-of-way.",
        excerptKey: "mountain-road-uphill",
        sourceLabel: "California Driver's Handbook — Mountain roads",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s5_14",
        topic: "signs",
        question:
          "Which pair of signs is most easily confused, and how do you tell them apart?",
        choices: [
          "YIELD and school zone — both are five-sided",
          "Railroad crossing and roundabout — both are octagonal",
          "STOP and YIELD — both are red, but STOP has eight sides and YIELD is a downward triangle",
          "STOP and DO NOT ENTER — both are octagons",
        ],
        correctIndex: 2,
        explanation:
          "STOP and YIELD share the red colour family but have completely different shapes and obligations: one requires the wheels to stop, the other requires you to give way. Shape is what separates them at a glance, which matters when the sign is dirty or seen from an angle.",
        context:
          "Shape carries the meaning when colour is not enough. Eight sides is STOP and nothing else. A downward triangle is YIELD. Five sides is a school. A circle warns of a railroad crossing ahead. A diamond is a general warning. Rectangles carry regulations and guidance. DO NOT ENTER is a red circle with a white horizontal bar, quite unlike an octagon.",
        trap: "The three wrong answers each assert a shape that is simply false — STOP is not an octagon shared with DO NOT ENTER, YIELD is not five-sided, and neither railroad nor roundabout signs are octagonal.",
        excerptKey: "sign-railroad-advance",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s5_15",
        topic: "rules",
        question:
          "You wish to make a U-turn at a signalised intersection displaying a green light, with no signs posted. This is:",
        choices: [
          "Prohibited — U-turns require a dedicated signal",
          "Permitted, provided you yield to pedestrians and oncoming traffic",
          "Permitted only from the centre left-turn lane",
          "Prohibited unless you are in a residential district",
        ],
        correctIndex: 1,
        explanation:
          "A U-turn at an intersection on a green light is one of the permitted cases in California, subject to yielding just as any left turn is. A NO U-TURN sign would remove the permission, but nothing here posts one.",
        context:
          "Permitted U-turns: at an intersection on a green light with no prohibiting sign; through a provided opening in a divided highway; and mid-block in a residential district when no vehicle is approaching within 200 feet. Prohibited: in front of a fire station, at a railroad crossing, and mid-block in a business district. Everywhere, a posted NO U-TURN sign controls, and you still yield to pedestrians and oncoming traffic when making the turn.",
        trap: "\"Prohibited unless you are in a residential district\" over-applies the mid-block rule, when the intersection permission works in any district.",
        excerptKey: "uturn-green-light",
        sourceLabel: "California Driver's Handbook — U-turns",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s5_16",
        topic: "speed",
        question:
          "The road ahead is icy. The handbook's guidance on speed is that you should travel no faster than about:",
        choices: ["5 mph", "15 mph", "25 mph", "Half the posted limit"],
        correctIndex: 0,
        explanation:
          "Ice removes almost all usable grip, so about 5 mph is the practical ceiling — slow enough that a slide stays manageable. Halving your speed is the packed-snow adjustment, not the ice one.",
        context:
          "The weather ladder in order: wet road, take 5 to 10 mph off the posted limit; heavy rain or snow with visibility under 100 feet, no more than 30 mph; packed snow, halve your speed; ice, about 5 mph. Each of these is the Basic Speed Law in action, which means driving faster than conditions allow is an offence even under the posted number.",
        trap: "\"Half the posted limit\" is a genuine California adjustment for packed snow, and applying it to ice leaves you travelling far too fast for the available grip.",
        excerptKey: "speed-ice",
        sourceLabel: "California Driver's Handbook — Driving in bad weather",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s5_17",
        topic: "parking",
        question:
          "You are parked at a green curb with a posted 20-minute limit and return after 35 minutes. The legal position is that:",
        choices: [
          "You have overstayed and may be cited",
          "The limit applies only during business hours in every case",
          "The limit resets each time you return to the vehicle",
          "You are fine, because green curbs have no enforceable limit",
        ],
        correctIndex: 0,
        explanation:
          "Green means parking is allowed for whatever period is posted, and the posted period is the whole of the permission. Overstaying is a violation in the same way an expired meter is.",
        context:
          "Green is the only curb colour that permits genuine unattended parking, and the time limit is what defines it — shown on a sign or painted on the curb. Red permits nothing at all, yellow permits loading of passengers or freight for its own posted time, white permits a brief passenger or mail stop, and blue permits parking with a valid disabled placard or plate.",
        trap: "\"Green curbs have no enforceable limit\" treats the colour as ordinary parking, but the whole point of green is that a limit applies.",
        excerptKey: "curb-green",
        sourceLabel: "California Driver's Handbook — Colored curbs",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s5_18",
        topic: "rightOfWay",
        question:
          "Two vehicles arrive together at a four-way stop, directly opposite one another. One is going straight and the other is turning left. Who goes first?",
        choices: [
          "The vehicle on the right of the pair",
          "Neither — both must wait for a third vehicle to clear",
          "The vehicle turning left, since it has further to travel",
          "The vehicle going straight",
        ],
        correctIndex: 3,
        explanation:
          "With two vehicles facing each other there is no left-or-right relationship to apply, so the left-turn rule decides it: the turning driver yields to the one going straight.",
        context:
          "Layered intersection questions are solved by taking the rules in order. First arrival decides where arrivals differ. Where arrivals are simultaneous and the vehicles are on crossing streets, the vehicle on the right goes. Where they are simultaneous and directly opposite, the right-hand rule cannot apply and the left-turn rule takes over — the turning driver yields to oncoming traffic going straight. A driver joining from a driveway or alley yields to everything already on the street.",
        trap: "\"The vehicle on the right of the pair\" reaches for the tie-breaker most people learn first, but two vehicles facing each other have no meaningful right-hand relationship.",
        excerptKey: "row-turning-left",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s5_19",
        topic: "signs",
        question:
          "A sign displays a black arrow bending right with a yellow-black chevron pattern repeated along the outside of a curve. The chevrons are there to:",
        choices: [
          "Warn that the shoulder has been closed",
          "Mark the boundary of a construction zone",
          "Show the direction and sharpness of the curve as you travel through it",
          "Indicate a passing lane on the outside of the bend",
        ],
        correctIndex: 2,
        explanation:
          "Chevrons are repeated along the outside of a bend so that your headlights pick up the next one and the one after, tracing the curve ahead in the dark. They are guidance through the curve rather than a single warning at its entrance.",
        context:
          "Curves get several layers of treatment: a yellow diamond with a bending arrow warns that the curve is coming, an advisory speed panel suggests a safe speed for it, and chevrons along the outside show the line through it. None of them override the Basic Speed Law, which can require less than the advisory figure in rain or at night or with a trailer behind you.",
        trap: "Confusing chevrons with construction markings is easy because both use bold repeating patterns, but construction signing is orange rather than yellow.",
        excerptKey: "sign-chevron",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s5_20",
        topic: "rules",
        question:
          "You are following a fire engine on a city street. Its lights and siren are off as it returns to the station. The 300-foot rule:",
        choices: [
          "Applies at all times to fire engines",
          "Applies only while its lights or siren are operating",
          "Applies only on freeways",
          "Applies only if the engine is exceeding the speed limit",
        ],
        correctIndex: 1,
        explanation:
          "The following prohibition attaches to an emergency vehicle that is running its lights or siren, because that is when it will brake and manoeuvre unpredictably. With everything switched off it is simply another vehicle in traffic.",
        context:
          "Three separate emergency-vehicle obligations. When one approaches with lights or siren, pull right and stop until it passes, clearing an intersection first if you are in one. While its lights or siren are on, do not follow within 300 feet. Where an emergency, tow or road work vehicle is stopped at the roadside with lights flashing, the Move Over law requires a lane change if traffic allows, and a reduction in speed if it does not.",
        trap: "\"Applies at all times\" over-reads the rule into a permanent exclusion zone, when the trigger is specifically the lights or siren being active.",
        excerptKey: "emergency-vehicle-300-feet",
        sourceLabel: "California Driver's Handbook — Emergency vehicles",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s5_21",
        topic: "safety",
        question:
          "Which combination correctly states California's headlight requirements?",
        choices: [
          "On from 30 minutes after sunset to 30 minutes before sunrise; dim within 500 feet of oncoming traffic",
          "On whenever visibility is under 500 feet; dim within 1,000 feet of oncoming traffic",
          "On only in rain; dim within 200 feet of any vehicle",
          "On from sunset to sunrise; dim within 300 feet of oncoming traffic",
        ],
        correctIndex: 0,
        explanation:
          "The half-hour buffer either side of sunset and sunrise is the legal window, and 500 feet is the dimming distance for oncoming traffic. Three hundred feet is the separate figure for following another vehicle.",
        context:
          "Headlights are governed by four numbers in California. On from 30 minutes after sunset to 30 minutes before sunrise. On whenever you cannot see clearly for 1,000 feet. Dim within 500 feet of an oncoming vehicle. Dim within 300 feet of a vehicle you are following. Beyond those, headlights are also required in tunnels, on mountain roads and any time the wipers are running.",
        trap: "\"On from sunset to sunrise; dim within 300 feet of oncoming traffic\" gets both figures slightly wrong in a plausible direction, dropping the half-hour buffer and borrowing the following distance for oncoming traffic.",
        excerptKey: "headlights-when",
        sourceLabel: "California Driver's Handbook — Headlights",
        sourceUrl: `${H}/introduction-to-driving/`,
      },
      {
        id: "ca_s5_22",
        topic: "parking",
        question:
          "Which of these parking situations is legal in California?",
        choices: [
          "Leaving your car in the striped aisle beside a disabled space for two minutes",
          "Stopping in a red zone with your hazard lights on to collect a passenger",
          "Parking 18 feet from an unmarked crosswalk at an ordinary corner",
          "Parking 16 feet from a fire hydrant on a residential street",
        ],
        correctIndex: 3,
        explanation:
          "Sixteen feet clears the 15-foot hydrant requirement. Red zones prohibit stopping regardless of hazard lights, 18 feet falls short of the 20-foot crosswalk clearance, and the striped access aisle must be kept clear at all times.",
        context:
          "The numbers that decide these questions: 15 feet from a fire hydrant or fire station driveway, 20 feet from a crosswalk marked or unmarked, dropping to 15 feet where a curb extension exists. Alongside those, no parking on a sidewalk or crosswalk, no blocking driveways, no double parking, no parking against the direction of traffic, and nothing at all in the striped access aisle next to a disabled space.",
        trap: "\"18 feet from a crosswalk\" is designed to feel close enough, and being two feet short of 20 is exactly the kind of near miss the real test uses.",
        excerptKey: "parking-sidewalk-driveway",
        sourceLabel: "California Driver's Handbook — Parking",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s5_23",
        topic: "rightOfWay",
        question:
          "You are in the left lane of a two-lane roundabout intending to take the third exit. As you approach that exit you should:",
        choices: [
          "Reverse to the previous exit",
          "Cut directly across the right lane to the exit",
          "Signal and exit from the left lane only if it is marked for that exit; otherwise continue round",
          "Stop and wait for the right lane to clear",
        ],
        correctIndex: 2,
        explanation:
          "Lane choice in a roundabout is decided on approach, and cutting across another lane at an exit is the manoeuvre that causes most collisions in them. Where your lane does not serve the exit, go round again and position correctly.",
        context:
          "A multi-lane roundabout works on approach positioning: right lane for a right-hand exit, left lane for a left-hand exit or a U-turn, either lane for straight ahead where markings allow it. Once inside, yield to nobody at the entries, do not stop, signal before your exit, and never cross lanes to reach one. Missing your exit is a minor inconvenience; cutting across at the last moment is not.",
        trap: "Cutting across to the exit is what drivers actually do when they realise they are in the wrong lane, and it is the single most dangerous move available inside a roundabout.",
        excerptKey: "roundabout-yield",
        sourceLabel: "California Driver's Handbook — Roundabouts",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s5_24",
        topic: "impairment",
        question:
          "You refuse a chemical test after a lawful DUI arrest and are later acquitted in criminal court. The DMV suspension for refusing:",
        choices: [
          "Is automatically cancelled by the acquittal",
          "Stands, because the DMV action is separate from the court case",
          "Is reduced to 30 days",
          "Applies only if the arrest was for a second offence",
        ],
        correctIndex: 1,
        explanation:
          "The DMV administers licences and the courts administer convictions, and they run on different tracks. Refusing a test breaches the implied consent you gave by driving, and that breach is complete regardless of what the criminal case decides.",
        context:
          "Two proceedings follow a DUI arrest. The criminal case decides guilt and can impose a mandatory DUI programme, an insurance proof filing and reissue fees, with the conviction staying on record for 10 years. The DMV case decides your driving privilege, gives you 10 days from arrest to request a hearing, and typically issues a 30-day temporary licence. Refusing a chemical test brings its own suspension or revocation of about a year, independent of the court outcome.",
        trap: "\"Automatically cancelled by the acquittal\" assumes one proceeding governs the other, which is the most common misunderstanding of how implied consent works.",
        excerptKey: "chemical-test-refusal",
        sourceLabel: "California Driver's Handbook — Implied consent",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s5_25",
        topic: "signs",
        question:
          "A solid white line separates your lane from the one to your right. Compared with a broken white line, it indicates that:",
        choices: [
          "Lane changes are discouraged at that point",
          "The lane to your right is for bicycles only",
          "You are approaching a one-way street",
          "Traffic to your right is travelling in the opposite direction",
        ],
        correctIndex: 0,
        explanation:
          "White lines separate traffic moving the same way, and the style tells you how freely you may move between lanes: broken means change when safe, solid means the change is discouraged at that point. Double solid white is the version you must not cross at all.",
        context:
          "Reading pavement markings is a two-step process. Colour first: yellow separates opposing traffic, white separates same-direction traffic. Then style: broken means crossing is permitted when safe, solid means it is discouraged or prohibited, and double solid is a barrier. Applying both gives you double solid yellow as a no-passing barrier crossable only to turn, and double solid white as the carpool-lane boundary you may cross only at designated openings.",
        trap: "\"Traffic to your right is travelling in the opposite direction\" mixes up the colours — opposing traffic is always separated by yellow, never white.",
        excerptKey: "marking-solid-white",
        sourceLabel: "California Driver's Handbook — Pavement markings",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s5_26",
        topic: "rules",
        question:
          "Which of these is NOT a lawful reason to enter a bicycle lane in California?",
        choices: [
          "Parking where parking is permitted",
          "Entering or leaving the roadway",
          "Within 200 feet of an intersection where you are turning right",
          "Overtaking slow traffic in the general lane",
        ],
        correctIndex: 3,
        explanation:
          "Using the bike lane to get past queuing traffic is never permitted, however empty it looks. The three lawful reasons are parking where allowed, entering or leaving the road, and the final 200 feet before a right turn.",
        context:
          "A bike lane is a travel lane belonging to cyclists, marked by a solid white line and signs. Motor vehicles may enter it only to park where parking is permitted, to enter or leave the roadway, or within 200 feet of an intersection when preparing to turn right. Separately, when you pass a rider you must leave at least three feet, and you must wait rather than pass if the road will not give you that much.",
        trap: "Overtaking in the bike lane is common behaviour in congested traffic, and its ordinariness is what makes it a convincing option.",
        excerptKey: "bike-lane-200-feet",
        sourceLabel: "California Driver's Handbook — Bicycle lanes",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s5_27",
        topic: "speed",
        question:
          "You are on a two-lane undivided highway posted at 55 mph, towing a small trailer, in light rain. Your maximum lawful speed is:",
        choices: [
          "45 mph, a fixed reduction for towing in rain",
          "55 mph, since that is both the posted limit and the towing limit",
          "Below 55 mph — the Basic Speed Law requires a safe speed for the wet conditions",
          "65 mph, because the posted limit is a minimum",
        ],
        correctIndex: 2,
        explanation:
          "The posted 55 and the towing 55 agree here, but rain brings the Basic Speed Law into play on top of both. A wet road generally calls for 5 to 10 mph less than the posted number, and driving the sign in the rain can still be an offence.",
        context:
          "Three layers apply at once. The posted limit is the ceiling on the sign. The towing limit of 55 mph applies whatever the sign says. And the Basic Speed Law requires a speed that is safe for the actual conditions, taking account of weather, visibility, traffic and the road surface. The lowest of the applicable figures is the one you must drive to, and only the Basic Speed Law can move below the sign.",
        trap: "\"55 mph, since that is both limits\" is arithmetically correct and legally incomplete — the rain adds a third constraint that neither number accounts for.",
        excerptKey: "speed-max-highways",
        sourceLabel: "California Driver's Handbook — Basic Speed Law",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
      {
        id: "ca_s5_28",
        topic: "safety",
        question:
          "Which of these correctly describes what to do if your vehicle starts to skid on a slippery surface?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Ease off the accelerator and steer gently where you want the vehicle to go",
          "Accelerate to pull the vehicle straight",
          "Engage the parking brake to slow all four wheels",
        ],
        correctIndex: 1,
        explanation:
          "Sudden inputs make a skid worse because the tyres have no grip to spare. Easing off and steering smoothly toward your intended path gives the tyres the best chance of finding traction again.",
        context:
          "Loss-of-control situations in California share one instruction: no abrupt inputs. Skid — ease off, steer gently where you want to go. Hydroplaning — lift off the accelerator, do not brake. Blowout — hold the wheel firmly with both hands, ease off, slow gradually. Wheels off the pavement — hold straight, shed speed, then steer back gently. In every case you are waiting for grip to return rather than forcing the car.",
        trap: "Braking hard is the universal instinct and the universally wrong answer in all four of these situations.",
        excerptKey: "skid-recovery",
        sourceLabel: "California Driver's Handbook — Safe driving",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s5_29",
        topic: "parking",
        question:
          "Facing DOWNHILL on a street with a curb, in which direction do the front wheels point, and why?",
        choices: [
          "Toward the curb, so a rolling car steers into the curb",
          "Straight, because the transmission holds the car",
          "Toward the centre line, to keep the car within the lane",
          "Away from the curb, so the car rolls back into the curb",
        ],
        correctIndex: 0,
        explanation:
          "Facing downhill, gravity moves the car forward, so the wheels must be aimed at the curb for that forward motion to end against something solid. Turning them away would send the car forward into the traffic lane.",
        context:
          "Reason it out from gravity every time rather than memorising four cases. Downhill: the car rolls forward, so point the wheels at the curb. Uphill: the car rolls back, so point them away from the curb and let it settle until a tyre touches. No curb, either direction: point them right toward the shoulder, because leaving the road is the only harmless outcome available. Parking brake plus park or gear in all cases.",
        trap: "\"Away from the curb, so the car rolls back into the curb\" describes the uphill technique and its reasoning, which is why the two cases get swapped so often.",
        excerptKey: "hill-downhill-curb",
        sourceLabel: "California Driver's Handbook — Parking on a hill",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s5_30",
        topic: "rightOfWay",
        question:
          "You are stopped at a stop sign on a minor street. A pedestrian is walking along the sidewalk that crosses your path at the unmarked crossing. You should:",
        choices: [
          "Proceed if the pedestrian has not stepped off the curb",
          "Sound the horn and continue slowly",
          "Proceed, since there is no painted crosswalk",
          "Yield — an unmarked crossing carries the same pedestrian priority as a marked one",
        ],
        correctIndex: 3,
        explanation:
          "Paint on the ground does not create the pedestrian's right to cross; the intersection does. Unmarked crossings at intersections carry the same priority as marked ones, which is why the absence of stripes changes nothing.",
        context:
          "Pedestrian priority in California is broader than the painted lines suggest. It applies at marked and unmarked crosswalks alike, and every intersection has a crossing whether or not it is striped. You give extra time to older pedestrians, children and people with disabilities, you never pass a vehicle stopped at a crosswalk, and a pedestrian using a white cane or guide dog has the right-of-way outright.",
        trap: "\"There is no painted crosswalk\" is the reasoning most drivers use, and it is the exact assumption the unmarked crosswalk rule exists to defeat.",
        excerptKey: "crosswalk-row",
        sourceLabel: "California Driver's Handbook — Pedestrians",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s5_31",
        topic: "signs",
        question:
          "A white regulatory sign reads ONE WAY with an arrow. Turning against that arrow would put you:",
        choices: [
          "On a road that becomes two-way further ahead",
          "In a bus-only lane",
          "Travelling against the flow, with WRONG WAY signs likely facing you",
          "In a lane reserved for turning traffic",
        ],
        correctIndex: 2,
        explanation:
          "A ONE WAY sign fixes the direction of travel for that whole street, so turning against it means driving into oncoming traffic. DO NOT ENTER and WRONG WAY signs are usually placed to catch that mistake.",
        context:
          "One-way streets bring several rules together. Travel only in the posted direction. Turning left on red from one one-way street onto another one-way street is permitted after stopping and yielding, unless a sign forbids it. DO NOT ENTER guards the entrance against wrong-way traffic, and WRONG WAY appears further along if someone has entered anyway. Both require you to stop and reverse the mistake rather than continuing.",
        trap: "\"A road that becomes two-way further ahead\" imagines a transition that would still not make travelling against the arrow lawful at this point.",
        excerptKey: "sign-wrong-way",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s5_32",
        topic: "rules",
        question:
          "Which of these statements about passing on a two-lane road is correct?",
        choices: [
          "You may pass on a solid yellow line if the vehicle ahead is under the speed limit",
          "You may not pass at an intersection or a railroad crossing",
          "You may pass on a curve if you can see 100 feet ahead",
          "You may exceed the speed limit briefly to complete a pass",
        ],
        correctIndex: 1,
        explanation:
          "Intersections and railroad crossings are among the places passing is prohibited, because vehicles and trains can enter your path from directions you are not watching. Nothing about the speed of the vehicle ahead creates an exception.",
        context:
          "A lawful pass needs a broken yellow line on your side, adequate sight distance, enough clear road to complete the manoeuvre before an oncoming vehicle arrives, and a safe return once you can see the passed vehicle in your mirror. Passing is prohibited on a solid yellow line, over a crest, on a curve, at an intersection or railroad crossing, and wherever a sign forbids it. The speed limit applies throughout — there is no allowance for overtaking.",
        trap: "\"Exceed the limit briefly to complete a pass\" is widely believed and simply untrue; the limit applies to the whole manoeuvre.",
        excerptKey: "marking-broken-yellow",
        sourceLabel: "California Driver's Handbook — Passing",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s5_33",
        topic: "impairment",
        question:
          "A 20-year-old driver registers 0.03% on a breath test. Which statement is correct?",
        choices: [
          "They are over the applicable limit, because under-21 drivers are held to 0.01%",
          "They would be over the limit only if driving commercially",
          "They are over the adult limit of 0.08%",
          "They are under the legal limit and free to drive",
        ],
        correctIndex: 0,
        explanation:
          "Three hundredths of a percent is well over the 0.01% zero-tolerance threshold that applies to anyone under 21. It is under the adult figure, which is exactly the confusion this scenario is built on.",
        context:
          "Four thresholds, applied by situation rather than by how much someone has drunk. Under 21: 0.01%. On DUI probation at any age: 0.01%. Commercial driver or carrying passengers for hire: 0.04%. Aged 21 or over otherwise: 0.08%. A reading between the thresholds is where the question gets interesting — 0.03% is legal for an adult, illegal for a 20-year-old, and illegal for a commercial driver only above 0.04%.",
        trap: "\"Under the legal limit and free to drive\" is correct arithmetic against the 0.08% adult figure, which is the wrong threshold for a driver aged 20.",
        excerptKey: "bac-under-21",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s5_34",
        topic: "safety",
        question:
          "You are driving at night and an oncoming vehicle fails to dim its high beams. You should:",
        choices: [
          "Stare at the oncoming lights to keep track of the vehicle",
          "Close one eye until the vehicle has passed",
          "Switch on your own high beams in response",
          "Look toward the right edge of your lane and slow down",
        ],
        correctIndex: 3,
        explanation:
          "Looking at the right edge line keeps you positioned while the glare passes without leaving you blinded. Retaliating with your own high beams blinds both of you at the moment you most need to see.",
        context:
          "Night driving depends on protecting your night vision. Dim within 500 feet of oncoming traffic and within 300 feet when following. If someone fails to dim, look toward the right edge of your lane rather than into the light, and slow down. Keep the windscreen clean inside and out, because dirt scatters oncoming light, and increase following distance since you can only see as far as your beams reach.",
        trap: "Flicking your own high beams on in response feels like a fair exchange, and it removes what little vision either driver had left.",
        excerptKey: "headlights-glare",
        sourceLabel: "California Driver's Handbook — Night driving",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s5_35",
        topic: "parking",
        question:
          "Which statement about a red curb in California is accurate?",
        choices: [
          "You may stop briefly if you remain in the vehicle",
          "You may stop to load freight if no other space is available",
          "No stopping, standing or parking is permitted, though buses may stop where a red zone is signed for them",
          "Stopping is permitted outside posted hours",
        ],
        correctIndex: 2,
        explanation:
          "Red means no stopping at all, and remaining in the vehicle makes no difference — stopping and standing are both covered. The one recognised exception is a bus using a red zone that has been signed for bus use.",
        context:
          "Red is the most absolute of the five curb colours. White permits a brief passenger or mail stop, yellow permits loading of passengers or freight for the posted time, green permits limited-time parking, and blue permits parking with a disabled placard or plate. Red permits nothing, which is why it is used at hydrants, corners, bus stops and anywhere sight lines or access must stay clear.",
        trap: "\"You may stop briefly if you remain in the vehicle\" draws a distinction between stopping and parking that red curbs specifically eliminate.",
        excerptKey: "curb-red",
        sourceLabel: "California Driver's Handbook — Colored curbs",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s5_36",
        topic: "rules",
        question:
          "A light rail vehicle is running along tracks in the centre of a street. You may pass it on the left:",
        choices: [
          "At any time, as with any slower vehicle",
          "Only where the tracks are on the right side of the road, on a one-way street, or when directed by an officer",
          "Only at signalised intersections",
          "Never, under any circumstances",
        ],
        correctIndex: 1,
        explanation:
          "Passing a light rail vehicle on the left is restricted to a few specific situations, because on a normal two-way street the left side is where oncoming traffic and boarding passengers are. The narrow exceptions exist where those hazards are absent.",
        context:
          "Light rail vehicles have the same rights on the road as other vehicles, but they run on separate signals and cannot swerve or stop quickly. Your green light tells you nothing about theirs. Passing on the left is limited to where the tracks run along the right side, on a one-way street, or under an officer's direction. Never stop on the tracks, and give the same caution you would give a railroad crossing.",
        trap: "\"Never, under any circumstances\" is the over-cautious answer that ignores three genuine exceptions, while \"at any time\" is the under-cautious one.",
        excerptKey: "light-rail-pass-left",
        sourceLabel: "California Driver's Handbook — Light rail vehicles",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s5_37",
        topic: "sharing",
        question:
          "You are about to turn right at an intersection and a cyclist is riding straight ahead in the bike lane on your right. You should:",
        choices: [
          "Merge into the bike lane before the turn, within 200 feet, after checking it is clear",
          "Turn wide from the left of your lane to give the cyclist room",
          "Stop in the traffic lane and wave the cyclist past",
          "Turn ahead of the cyclist to clear the intersection quickly",
        ],
        correctIndex: 0,
        explanation:
          "Merging into the bike lane before the turn puts you where a cyclist cannot ride up your inside, which is the manoeuvre that prevents right-hook collisions. The merge is legal within the last 200 feet, and it depends on checking the lane is clear first.",
        context:
          "Right turns across a bike lane are one of the most common serious conflicts on California streets. The law allows you into the bike lane within 200 feet of the turn precisely so the turn can be made from the correct position rather than across a rider's path. Signal at least 100 feet ahead, check the mirror and blind spot, merge, then turn tightly into the nearest right-hand lane.",
        trap: "\"Turn wide from the left of your lane\" mimics what a truck must do, and for a car it opens exactly the gap a cyclist rides into.",
        excerptKey: "bike-lane-200-feet",
        sourceLabel: "California Driver's Handbook — Bicycle lanes",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s5_38",
        topic: "emergencies",
        question:
          "Your vehicle stalls on railroad tracks and no train is in sight. The correct sequence is to:",
        choices: [
          "Push the vehicle forward along the tracks to the next crossing",
          "Leave the vehicle and walk away without reporting it",
          "Stay in the vehicle and keep trying to restart it",
          "Get out, call the number on the blue crossing sign quoting the crossing identifier, then call 911",
        ],
        correctIndex: 3,
        explanation:
          "The blue emergency notification sign carries a number that reaches the railroad directly, and the crossing identifier tells them exactly which crossing to protect. That call can stop a train before it ever reaches you.",
        context:
          "Two versions of this emergency, with different answers. No train in sight: get out, find the blue emergency sign, call the railroad using the crossing identifier, then call 911. A train approaching: abandon the vehicle immediately and move away from the tracks at an angle toward the oncoming train, so the wreckage is thrown behind you, then call 911 from safety. Never try to restart or push the vehicle with a train coming.",
        trap: "\"Stay in the vehicle and keep trying to restart it\" is the natural response to a stall and it costs you the seconds that matter if a train appears.",
        excerptKey: "railroad-stalled-no-train",
        sourceLabel: "California Driver's Handbook — Railroad emergencies",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
      {
        id: "ca_s5_39",
        topic: "rightOfWay",
        question:
          "You are turning left from a driveway onto a two-way street. Traffic is approaching from both directions and a pedestrian is walking along the sidewalk. In what order do you yield?",
        choices: [
          "Only to traffic from the left, since you are turning left",
          "Nobody, once your bumper reaches the roadway",
          "Pedestrian first, then traffic from both directions",
          "Traffic first, then the pedestrian",
        ],
        correctIndex: 2,
        explanation:
          "The sidewalk comes before the road, so the pedestrian crossing your driveway is the first person you yield to, and traffic from both directions follows. A left turn means crossing the whole road, so both streams matter.",
        context:
          "Leaving private property is the strongest form of the joining-yields rule in California. You yield to pedestrians on the sidewalk you must cross, then to traffic on the road you are joining — both directions where you are turning left. The same principle applies to alleys and parking lots. Nothing about a gap in traffic transfers the right-of-way to you; it only makes the move safe to complete.",
        trap: "\"Only to traffic from the left\" would be reasoning for a right turn, and a left turn requires crossing the near lane as well as joining the far one.",
        excerptKey: "row-entering-traffic",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s5_40",
        topic: "speed",
        question:
          "Which statement best describes the relationship between the posted speed limit and the Basic Speed Law?",
        choices: [
          "The posted limit always overrides the Basic Speed Law",
          "The Basic Speed Law can require a lower speed than the sign, but never permits a higher one",
          "The Basic Speed Law allows exceeding the sign when traffic is moving faster",
          "They apply to different roads and never overlap",
        ],
        correctIndex: 1,
        explanation:
          "The Basic Speed Law only ever pushes downward. Conditions can make the posted number unsafe and therefore unlawful, but no condition — including the speed of surrounding traffic — makes exceeding the sign lawful.",
        context:
          "Speed in California is decided by whichever constraint is lowest. Posted limits set a ceiling. Situational defaults such as 55 mph for towing or on two-lane undivided highways apply independently of the sign. And the Basic Speed Law sits under everything, requiring a speed that is safe for weather, visibility, traffic and road surface. Only the Basic Speed Law can move you below the sign, and nothing moves you above it.",
        trap: "\"Allows exceeding the sign when traffic is moving faster\" is the belief behind most speeding defences, and keeping pace with traffic is not a legal justification.",
        excerptKey: "basic-speed-law",
        sourceLabel: "California Driver's Handbook — Basic Speed Law",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "California Exam Simulation",
    difficulty: "exam",
    description:
      "Forty-six questions, mirroring the real California DMV knowledge test for applicants under 18. You need 38 correct to pass. Mixed topics, no hints, exam pacing.",
    questions: [
      {
        id: "ca_s6_01",
        topic: "signs",
        question:
          "An eight-sided red sign requires you to:",
        choices: [
          "Stop completely before the limit line or crosswalk",
          "Stop only when cross traffic is present",
          "Reduce speed to 15 mph through the intersection",
          "Slow and give way to traffic on the through road",
        ],
        correctIndex: 0,
        explanation:
          "The octagon is used for STOP and for nothing else, so the shape alone carries the instruction. Stop at the limit line, or before the crosswalk where there is no line, then proceed when the way is clear.",
        context:
          "Sign shapes in California each carry a fixed meaning: eight sides for stop, a downward triangle for yield, five sides for school, a circle for a railroad crossing ahead, a diamond for a warning, and rectangles for regulations and guidance. Knowing the shapes means you can identify a sign in poor visibility or from behind, before the lettering is legible.",
        trap: "\"Stop only when cross traffic is present\" turns a stop sign into a yield, which is the distinction the two shapes exist to keep separate.",
        excerptKey: "sign-stop",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_02",
        topic: "rules",
        question:
          "You must signal at least how far before making a turn?",
        choices: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctIndex: 1,
        explanation:
          "One hundred feet gives other drivers time to register your intention and adjust. Signalling as you begin the turn communicates nothing that the turn itself does not already show.",
        context:
          "Two signalling requirements: at least 100 feet before a turn, and at least 5 seconds before changing lanes on a freeway. Signal also when pulling away from a curb, and when slowing or stopping in a way other drivers would not expect. The signal is a warning of what you are about to do, so it belongs before the manoeuvre rather than during it.",
        trap: "50 feet is where most drivers actually signal, which makes it feel like the standard rather than half of it.",
        excerptKey: "signal-100-feet",
        sourceLabel: "California Driver's Handbook — Signaling",
        sourceUrl: `${H}/introduction-to-driving/`,
      },
      {
        id: "ca_s6_03",
        topic: "parking",
        question: "A blue curb is reserved for:",
        choices: [
          "Emergency vehicles",
          "Limited-time parking as posted",
          "Loading and unloading freight",
          "Vehicles displaying a disabled placard or special plate",
        ],
        correctIndex: 3,
        explanation:
          "Blue marks disabled parking, and the entitlement comes from the placard or plate rather than from the errand. The striped area beside such a space is an access aisle and must be kept clear.",
        context:
          "The five curb colours: red for no stopping at all, yellow for loading passengers or freight within the posted time, white for a brief passenger or mail stop, green for limited-time parking, and blue for disabled parking with a valid placard or plate. Green is the only colour where you can genuinely leave the vehicle and walk away without a placard.",
        trap: "Limited-time parking is the GREEN curb, and it gets picked because both colours permit an actual stay rather than a brief stop.",
        excerptKey: "curb-blue",
        sourceLabel: "California Driver's Handbook — Colored curbs",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s6_04",
        topic: "rightOfWay",
        question:
          "At an intersection with no signs or signals, two vehicles arrive at the same time on crossing streets. Priority goes to:",
        choices: [
          "The vehicle already signalling",
          "The vehicle on the left",
          "The vehicle on the right",
          "The faster vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Simultaneous arrivals are settled by giving way to the right, which produces a rule both drivers can apply without negotiation. First arrival takes precedence when the two are not tied.",
        context:
          "Take intersection questions in order: first to arrive goes first; simultaneous arrivals yield to the vehicle on the right; a left-turning driver yields to oncoming traffic going straight; and anyone joining from a driveway, alley or private road yields to everything on the street. Working the sequence in that order prevents reaching for the wrong rule.",
        trap: "\"The vehicle on the left\" is a straight reversal of the rule, and it catches drivers who half-remember that one side has priority.",
        excerptKey: "row-same-time-right",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_05",
        topic: "speed",
        question:
          "The default speed limit in a business or residential district, where nothing is posted, is:",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 1,
        explanation:
          "Twenty-five is the figure that applies without a sign in business and residential areas, and it is the same default for a school zone when children are present. Streets like these have driveways, parked cars and pedestrians in constant supply.",
        context:
          "California's default limits: 25 mph in business and residential districts and in school zones with children present; 15 mph in alleys, at blind intersections and near railroad crossings with sight distance under 400 feet; 10 mph passing a bus or streetcar stopped at a safety zone; 55 mph on two-lane undivided highways and when towing; 65 mph on most other highways.",
        trap: "35 mph reflects what traffic typically does on a wide residential street, which is why it feels like the legal figure.",
        excerptKey: "speed-business-residential",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s6_06",
        topic: "safety",
        question:
          "The recommended minimum following distance in good conditions is:",
        choices: [
          "Two seconds",
          "Three seconds",
          "One car length for every 10 mph",
          "One second",
        ],
        correctIndex: 1,
        explanation:
          "Three seconds covers perception, reaction and the beginning of braking. Counting in seconds works at every speed, which is why it has replaced the old car-length rule.",
        context:
          "Three seconds is the fair-weather baseline and you add to it for rain, fog, darkness, a heavy load or trailer, when following a motorcycle, and when sitting behind a large vehicle that blocks your view. Measure it by watching the car ahead pass a fixed object and counting — arriving before you finish means you are too close.",
        trap: "The car-length rule sounds authoritative but is almost impossible to judge accurately at speed, which is exactly why the seconds method replaced it.",
        excerptKey: "three-second-rule",
        sourceLabel: "California Driver's Handbook — Safe driving",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s6_07",
        topic: "impairment",
        question:
          "The blood alcohol limit for a driver under 21 in California is:",
        choices: ["0.01%", "0.04%", "0.05%", "0.08%"],
        correctIndex: 0,
        explanation:
          "Under-21 drivers face zero tolerance at 0.01%, which in practice means any measurable alcohol. The adult figure of 0.08% has no application to a driver under 21.",
        context:
          "The four thresholds: 0.01% for drivers under 21 and for anyone on DUI probation; 0.04% for commercial drivers and those carrying passengers for hire; 0.08% for other drivers aged 21 or over. Under-21 drivers also face separate restrictions on carrying alcohol in the vehicle at all, and a DMV suspension can follow without any criminal conviction.",
        trap: "0.08% is the number everyone knows, and it is the reflex answer even when the question has named a driver under 21.",
        excerptKey: "bac-under-21",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s6_08",
        topic: "signs",
        question:
          "A yellow diamond-shaped sign is used to:",
        choices: [
          "Warn of a condition or hazard ahead",
          "Give direction and distance information",
          "Mark a construction zone",
          "State a regulation you must obey",
        ],
        correctIndex: 0,
        explanation:
          "Yellow diamonds warn about what the road is going to do — a curve, a merge, a crossing — without imposing a rule of their own. Regulations come in white rectangles and construction warnings come in orange.",
        context:
          "Sign colour maps to purpose: yellow warns of a road condition, orange warns of temporary road work, white with black text states a regulation, red means stop or prohibition, green gives guidance, blue points to services, brown marks recreation. Matching colour to category answers most sign questions before you have read the wording.",
        trap: "\"Mark a construction zone\" mixes yellow with orange, and the two warm colours are the pair most often confused at speed.",
        excerptKey: "sign-diamond-warning",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_09",
        topic: "rules",
        question:
          "A school bus on an undivided two-lane road has its red lights flashing and stop arm out. Drivers approaching from the opposite direction must:",
        choices: [
          "Stop only if children are visible",
          "Pass on the far side of the road",
          "Continue at reduced speed",
          "Stop until the red lights stop flashing",
        ],
        correctIndex: 3,
        explanation:
          "On an ordinary undivided road, both directions stop, because children may cross the full width. The stop lasts until the lights go off, since a child can step out from in front of the bus at any moment.",
        context:
          "School bus lights: flashing amber means the bus is preparing to stop; flashing red with the stop arm out means stop, from both directions on an undivided road. The exception is a divided highway, or a road with two or more lanes in each direction, where drivers on the far side may continue. Penalties for passing illegally reach into four figures with a possible year-long suspension.",
        trap: "\"Stop only if children are visible\" makes your own sightline the test, when the entire point is that a child in front of the bus is invisible to you.",
        excerptKey: "school-bus-red-lights",
        sourceLabel: "California Driver's Handbook — School buses",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s6_10",
        topic: "parking",
        question:
          "Parking facing downhill on a street with a curb, you should turn your front wheels:",
        choices: [
          "Toward the centre line",
          "Away from the curb",
          "Toward the curb",
          "Straight ahead",
        ],
        correctIndex: 2,
        explanation:
          "Facing downhill the car would roll forward, so the wheels are aimed at the curb to catch it. Turning them away would deliver the car into the traffic lane instead.",
        context:
          "Three cases: downhill with a curb, wheels toward the curb; uphill with a curb, wheels away from the curb and roll back until a tyre touches; either direction with no curb, wheels right toward the shoulder. Work out which way gravity moves the car and aim the wheels so that motion ends somewhere harmless. Parking brake and park or gear apply in every case.",
        trap: "\"Away from the curb\" is the uphill answer, and swapping the two hill cases is the most frequent California parking error.",
        excerptKey: "hill-downhill-curb",
        sourceLabel: "California Driver's Handbook — Parking on a hill",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s6_11",
        topic: "rightOfWay",
        question:
          "When an emergency vehicle approaches with siren and flashing lights, you must:",
        choices: [
          "Stop immediately wherever you are",
          "Pull to the right edge of the road and stop until it passes",
          "Continue at your current speed",
          "Move to the left lane and slow down",
        ],
        correctIndex: 1,
        explanation:
          "Everyone moving right and stopping creates a predictable channel down the centre or the left. Stopping in place or drifting left leaves the crew guessing which side to take.",
        context:
          "Three related rules. Approaching emergency vehicle: pull right and stop, clearing an intersection first if you are in one. Following: never within 300 feet while its lights or siren are on. Stopped at the roadside with lights flashing — including tow trucks and road work vehicles — the Move Over law asks you to change lanes where traffic allows and slow down where it does not.",
        trap: "\"Stop immediately wherever you are\" is the panic response, and stopping mid-intersection blocks exactly the space being cleared.",
        excerptKey: "emergency-vehicle-yield",
        sourceLabel: "California Driver's Handbook — Emergency vehicles",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s6_12",
        topic: "signs",
        question:
          "A five-sided sign indicates:",
        choices: [
          "A school zone or crossing",
          "A hospital ahead",
          "A pedestrian-only area",
          "A railroad crossing",
        ],
        correctIndex: 0,
        explanation:
          "Five sides is used exclusively for schools, so the shape tells you children may be about before you have read a word. Slow down and expect people crossing.",
        context:
          "Shape carries meaning independently of text: eight sides for stop, a downward triangle for yield, five sides for school, a circle for a railroad crossing ahead, a diamond for a general warning, rectangles for regulations and guidance. School zones also bring their own speed rule of 25 mph within 500 feet when children are present, with some zones posted at 15 mph.",
        trap: "Railroad crossing is the natural competing guess because both are hazard-specific signs, but the railroad advance warning is round.",
        excerptKey: "sign-pentagon-school",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_13",
        topic: "safety",
        question:
          "Headlights must be used from:",
        choices: [
          "One hour after sunset to one hour before sunrise",
          "Only when street lighting is absent",
          "Sunset to sunrise",
          "30 minutes after sunset to 30 minutes before sunrise",
        ],
        correctIndex: 3,
        explanation:
          "The half-hour buffer covers the twilight in which drivers can still see but can no longer be seen easily. Headlights are also required whenever visibility drops below 1,000 feet and whenever the wipers are running.",
        context:
          "Headlight triggers: the half hour after sunset through the half hour before sunrise; whenever you cannot see clearly for 1,000 feet; whenever weather has the wipers on; and in tunnels and on mountain roads even in daylight. Dimming distances go with them — 500 feet from oncoming traffic and 300 feet when following.",
        trap: "Plain sunset to sunrise is the version most people assume, and it leaves you unlit through exactly the half hour when visibility is worst.",
        excerptKey: "headlights-when",
        sourceLabel: "California Driver's Handbook — Headlights",
        sourceUrl: `${H}/introduction-to-driving/`,
      },
      {
        id: "ca_s6_14",
        topic: "rules",
        question:
          "You may make a right turn at a red light when:",
        choices: [
          "You slow to walking pace and the road looks empty",
          "A green arrow is showing for the through lanes",
          "There is no NO TURN ON RED sign, you stop first and the way is clear",
          "Traffic behind you is waiting",
        ],
        correctIndex: 2,
        explanation:
          "All three conditions have to be satisfied together: no prohibiting sign, a full stop, and a clear path including pedestrians. Missing any one of them makes the turn unlawful.",
        context:
          "Two turns are allowed against a red light: a right turn from any street, and a left turn from one one-way street onto another one-way street where traffic flows the way you are turning. Both need a complete stop at the limit line, yielding to pedestrians and cross traffic, and no NO TURN ON RED sign. A red arrow removes the permission entirely.",
        trap: "\"Slow to walking pace and the road looks empty\" is the rolling turn most drivers make, and it fails the complete-stop condition.",
        excerptKey: "turn-right-on-red",
        sourceLabel: "California Driver's Handbook — Traffic signals",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_15",
        topic: "speed",
        question:
          "Unless posted otherwise, the maximum speed on a two-lane undivided highway is:",
        choices: ["50 mph", "55 mph", "60 mph", "65 mph"],
        correctIndex: 1,
        explanation:
          "Two-lane undivided highways top out at 55 mph because oncoming traffic is separated only by paint. The 65 mph figure applies to most other highways.",
        context:
          "The highway defaults: 65 mph on most highways unless posted otherwise, with some rural stretches posted higher; 55 mph on two-lane undivided highways and whenever towing a trailer. Below all of them, the Basic Speed Law requires a lower speed whenever weather, visibility or traffic demand it.",
        trap: "65 mph is the number people carry over from freeway driving, and applying it to a two-lane road is the exact error this rule addresses.",
        excerptKey: "speed-max-highways",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/safe-driving-cont2/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s6_16",
        topic: "sharing",
        question:
          "When passing a bicyclist and you cannot change lanes, you must leave a clearance of at least:",
        choices: ["1 foot", "2 feet", "3 feet", "5 feet"],
        correctIndex: 2,
        explanation:
          "Three feet is the minimum, and if the road will not provide it you are required to wait rather than pass. A rider can move sideways without warning for a pothole, a grate or a gust.",
        context:
          "Bicycle rules: leave at least three feet when passing, change lanes to pass whenever possible, and wait rather than squeeze when three feet is not available. You may enter a bike lane only to park where permitted, to enter or leave the road, or within 200 feet of a right turn. Cyclists may take a full lane where it is too narrow to share safely.",
        trap: "Two feet is roughly the space most drivers leave in practice, and its familiarity is what makes it the wrong answer people choose.",
        excerptKey: "bicycle-3-feet",
        sourceLabel: "California Driver's Handbook — Bicyclists",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s6_17",
        topic: "parking",
        question:
          "You may not park within how many feet of a fire hydrant?",
        choices: ["10 feet", "15 feet", "20 feet", "25 feet"],
        correctIndex: 1,
        explanation:
          "Fifteen feet is the clearance a crew needs to get a hose onto the hydrant. The distance runs from the hydrant itself, and a red curb usually marks it.",
        context:
          "Parking distances: 15 feet from a fire hydrant or fire station driveway; 20 feet from a crosswalk, marked or unmarked, dropping to 15 feet where a curb extension exists. Beyond the numbers, no parking on a sidewalk or crosswalk, no blocking driveways, no double parking, no parking against traffic, and nothing in the striped access aisle beside a disabled space.",
        trap: "20 feet is the crosswalk figure, and the two distances sit close enough together that they are frequently swapped.",
        excerptKey: "parking-hydrant",
        sourceLabel: "California Driver's Handbook — Parking",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s6_18",
        topic: "rightOfWay",
        question:
          "Entering a roundabout, you must:",
        choices: [
          "Stop at the entry line",
          "Yield to traffic already circulating",
          "Proceed without slowing if your lane is clear",
          "Signal left and enter",
        ],
        correctIndex: 1,
        explanation:
          "Roundabouts run on entering traffic yielding to circulating traffic, which keeps the whole junction moving. Slow on approach, find a gap and join going counter-clockwise.",
        context:
          "A roundabout in California: slow on approach, yield to circulating traffic, enter to the right and travel counter-clockwise, keep moving once inside, pick your lane by destination before you enter, signal before your exit, and go round again if you miss it. Pedestrians on the crosswalks at each entry and exit still have priority.",
        trap: "Stopping at the entry line treats it as a stop sign, and unnecessary stopping in a clear roundabout is what causes rear-end collisions there.",
        excerptKey: "roundabout-yield",
        sourceLabel: "California Driver's Handbook — Roundabouts",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_19",
        topic: "signs",
        question:
          "A solid yellow line on your side of the centre of a two-lane road means:",
        choices: [
          "You may not pass, though you may cross to turn",
          "The road is one-way ahead",
          "There is a bicycle lane to your right",
          "You may pass when the road ahead is clear",
        ],
        correctIndex: 0,
        explanation:
          "The solid line marks a stretch where sight distance is too short for a safe overtake. You may still cross it to turn left into a road or driveway.",
        context:
          "Yellow separates opposing traffic and the style sets the permission. Broken yellow on your side: pass when safe. Solid yellow on your side: no passing, but crossing to turn is allowed. Double solid yellow: a barrier for passing, crossable only to turn left or make a permitted U-turn. White lines separate same-direction traffic, and double solid white must not be crossed at all.",
        trap: "\"There is a bicycle lane to your right\" confuses centre-line markings with edge markings, since bike lanes are bounded by a solid white line.",
        excerptKey: "marking-solid-yellow-single",
        sourceLabel: "California Driver's Handbook — Pavement markings",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s6_20",
        topic: "impairment",
        question:
          "Refusing to take a chemical test after a lawful DUI arrest in California can result in:",
        choices: [
          "A fine with no licence consequence",
          "No penalty unless you are convicted",
          "A warning letter only",
          "Loss of your driving privilege for a year",
        ],
        correctIndex: 3,
        explanation:
          "Driving in California carries implied consent to testing, and refusing breaches it. The DMV can take your driving privilege for about a year regardless of what happens in criminal court.",
        context:
          "The DMV process runs separately from the criminal case. After arrest, an officer may issue a temporary licence of about 30 days, and you have 10 days to request a DMV hearing. Refusing a chemical test triggers its own suspension or revocation of roughly a year. A conviction adds a DUI programme, an insurance proof filing and reissue fees, and stays on your record for 10 years.",
        trap: "\"No penalty unless you are convicted\" assumes the court controls your licence, when the DMV suspension is administrative and independent.",
        excerptKey: "chemical-test-refusal",
        sourceLabel: "California Driver's Handbook — Implied consent",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s6_21",
        topic: "rules",
        question:
          "You may make a U-turn in a residential district mid-block when:",
        choices: [
          "Never — U-turns require an intersection",
          "No vehicle is approaching within 100 feet",
          "No vehicle is approaching within 200 feet",
          "You have signalled for five seconds",
        ],
        correctIndex: 2,
        explanation:
          "Two hundred feet of clear road in both directions is the residential mid-block condition. Business districts are stricter, allowing U-turns only at intersections or divided-highway openings.",
        context:
          "Permitted U-turns: at an intersection on a green light with no prohibiting sign; through a provided opening in a divided highway; mid-block in a residential district when nothing is approaching within 200 feet. Prohibited: in front of a fire station, at a railroad crossing, and mid-block in a business district. A posted NO U-TURN sign always controls.",
        trap: "100 feet is the signalling distance for turns, and it gets borrowed into U-turn questions where the figure is double.",
        excerptKey: "uturn-residential",
        sourceLabel: "California Driver's Handbook — U-turns",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s6_22",
        topic: "safety",
        question:
          "If your vehicle begins to hydroplane, you should:",
        choices: [
          "Brake firmly",
          "Ease off the accelerator and slow gradually",
          "Accelerate through the water",
          "Steer sharply toward the shoulder",
        ],
        correctIndex: 1,
        explanation:
          "The tyres are riding on water and have no grip to give, so braking or steering hard just removes what control you had. Easing off lets speed fall until the tread reaches the road again.",
        context:
          "All the loss-of-traction emergencies share one instruction: no sudden inputs. Hydroplaning — lift off, do not brake. Skid — ease off and steer gently where you want to go. Blowout — hold the wheel firmly with both hands and slow gradually. Wheels onto a soft shoulder — hold straight, shed speed, then steer back gently.",
        trap: "Braking firmly is the reflex, and it is what turns a hydroplane into a spin.",
        excerptKey: "hydroplaning",
        sourceLabel: "California Driver's Handbook — Hydroplaning",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s6_23",
        topic: "signs",
        question:
          "Orange signs and cones indicate:",
        choices: [
          "A temporary road work zone",
          "A permanent road hazard",
          "A route for slow vehicles",
          "A recreation area",
        ],
        correctIndex: 0,
        explanation:
          "Orange is used only for temporary work zones, where the road layout may not match what you expect and people are working near live traffic. Expect reduced limits and shifted lanes.",
        context:
          "Colour by category: orange for temporary road work, yellow for permanent road warnings, white with black text for regulations, red for stop and prohibition, green for guidance, blue for services, brown for recreation. In work zones, remember the Move Over obligation where maintenance vehicles are stopped with amber lights flashing.",
        trap: "Brown is the recreation colour, and the two warm colours blur together for anyone recalling them at speed.",
        excerptKey: "sign-colour-orange-workzone",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_24",
        topic: "rightOfWay",
        question:
          "A pedestrian using a white cane is at the corner waiting to cross. You should:",
        choices: [
          "Edge into the crosswalk so they can hear your engine",
          "Proceed if they have not started to cross",
          "Sound your horn to let them know you have stopped",
          "Stop back from the crosswalk and wait quietly",
        ],
        correctIndex: 3,
        explanation:
          "A blind pedestrian navigates by sound, so the horn interferes and a car in the crossing forces them around it into traffic. Stop short, stay quiet, and let them cross.",
        context:
          "A pedestrian with a white cane or guide dog has the right-of-way outright. Stop back from the crosswalk so it remains clear, do not sound the horn, and take particular care in a quiet hybrid or electric vehicle, especially when reversing. The same underlying pedestrian rules apply generally: yield at marked and unmarked crosswalks, and never pass a vehicle stopped at one.",
        trap: "Sounding the horn feels like a helpful signal and instead masks the traffic sounds the pedestrian is using to judge the crossing.",
        excerptKey: "pedestrian-blind",
        sourceLabel: "California Driver's Handbook — Blind pedestrians",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_25",
        topic: "parking",
        question:
          "Which curb colour allows you to stop only long enough to pick up or drop off passengers?",
        choices: ["Yellow", "White", "Green", "Blue"],
        correctIndex: 1,
        explanation:
          "White is the passenger colour and covers mail as well, but not freight. Yellow allows loading of both passengers and freight, and green is ordinary time-limited parking.",
        context:
          "The five colours: red for no stopping at all; white for a brief passenger or mail stop; yellow for loading passengers or freight within the posted time; green for limited-time parking; blue for disabled parking with a valid placard or plate. Freight is what separates yellow from white, and the ability to leave the vehicle is what separates green from both.",
        trap: "Yellow overlaps with white on passengers, which is why it is the most-chosen wrong answer to a white-curb question.",
        excerptKey: "curb-white",
        sourceLabel: "California Driver's Handbook — Colored curbs",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s6_26",
        topic: "speed",
        question:
          "The maximum speed within 100 feet of a railroad crossing where you cannot see 400 feet along the track is:",
        choices: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctIndex: 1,
        explanation:
          "Fifteen miles per hour applies where the sight lines along the track are short, which is slow enough to stop if a train appears. Where you can see 400 feet each way, the road's normal limit applies.",
        context:
          "Railroad crossings run on a few figures: 100 feet is the zone for the reduced limit, 400 feet is the sight distance test, 15 mph is the reduced limit itself, and 15 feet from the nearest rail is where you stop when a train is signalled. Never stop on the tracks, and never start across without room to clear them completely.",
        trap: "10 mph is a genuine California limit but belongs to passing a bus or streetcar stopped at a safety zone.",
        excerptKey: "speed-railroad",
        sourceLabel: "California Driver's Handbook — Railroad crossings",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s6_27",
        topic: "safety",
        question:
          "In fog, you should use:",
        choices: [
          "No lights, to reduce glare",
          "High beams",
          "Low beams",
          "Hazard lights while driving",
        ],
        correctIndex: 2,
        explanation:
          "High beams reflect off the fog and come straight back at you, so the fog appears thicker. Low beams sit under most of that reflection and light the road instead.",
        context:
          "Fog technique: low beams, a reduced speed under the Basic Speed Law, extra following distance, and the right-hand edge line as your guide rather than the centre. Where visibility falls under about 100 feet, keep to 30 mph or less. If it becomes unmanageable, leave the road at an exit or parking area rather than stopping on the shoulder.",
        trap: "High beams are the intuitive response to poor visibility and are the one setting that makes fog measurably worse.",
        excerptKey: "headlights-fog",
        sourceLabel: "California Driver's Handbook — Driving in bad weather",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s6_28",
        topic: "signs",
        question:
          "A flashing red traffic signal means:",
        choices: [
          "Proceed with caution without stopping",
          "Stop, then proceed when it is safe",
          "The signal is out of order and may be ignored",
          "Stop and wait for a green light",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red carries the same weight as a stop sign: stop fully, then go when clear. Flashing yellow is the one that means caution without stopping.",
        context:
          "Signal variants: flashing red equals a stop sign; flashing yellow means slow and proceed with caution; a completely dark signal is treated as a four-way stop; a red arrow forbids that turn outright; and a solid red still permits a right turn after stopping unless a sign prohibits it.",
        trap: "\"Proceed with caution without stopping\" is the flashing YELLOW instruction, and the two flashing signals are the pair most often swapped.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "California Driver's Handbook — Traffic signals",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_29",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light with no arrow. Oncoming traffic is approaching. You must:",
        choices: [
          "Yield and wait for a safe gap",
          "Proceed because you have a green light",
          "Signal and turn regardless",
          "Turn before they reach the intersection",
        ],
        correctIndex: 0,
        explanation:
          "A plain green permits you to enter the intersection but gives you no priority over oncoming traffic. Wait in the intersection with the wheels straight until a genuine gap appears.",
        context:
          "On a plain green you yield to oncoming vehicles and to pedestrians in the crosswalk you are turning into; on a green arrow the turn is protected from vehicles but pedestrians still have priority. Keep the front wheels straight while waiting so a rear-end shunt does not push you into oncoming traffic, and turn into the lane nearest the centre line.",
        trap: "\"Proceed because you have a green light\" reads green as priority rather than permission, and unprotected left turns are where that misreading does the most damage.",
        excerptKey: "row-turning-left",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_30",
        topic: "speed",
        question:
          "The Basic Speed Law means that you:",
        choices: [
          "Must always drive at the posted speed",
          "May drive at the posted speed in any weather",
          "May exceed the limit when traffic is moving faster",
          "Must never drive faster than is safe for the conditions",
        ],
        correctIndex: 3,
        explanation:
          "The Basic Speed Law makes conditions part of the limit, so a posted number can be too fast and therefore unlawful. It only ever pushes downward — nothing permits you to exceed a sign.",
        context:
          "Speed is decided by the lowest applicable constraint. Posted limits set a ceiling. Situational defaults such as 55 mph for towing or on two-lane undivided highways apply independently of the sign. And the Basic Speed Law requires a safe speed for weather, visibility, traffic and road surface. Only the Basic Speed Law can take you below the sign, and nothing takes you above it.",
        trap: "\"May exceed the limit when traffic is moving faster\" is the most common speeding rationalisation, and matching the flow is not a legal defence.",
        excerptKey: "basic-speed-law",
        sourceLabel: "California Driver's Handbook — Basic Speed Law",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
      {
        id: "ca_s6_31",
        topic: "rules",
        question:
          "Double solid white lines beside a carpool lane mean you may:",
        choices: [
          "Cross only to overtake",
          "Cross whenever you are eligible to use the lane",
          "Cross only at designated entry and exit openings",
          "Cross only during posted hours",
        ],
        correctIndex: 2,
        explanation:
          "Double solid white acts as a barrier, and eligibility to be in the lane says nothing about where you may enter it. Wait for the broken-line opening where the crossing is designed to be safe.",
        context:
          "Two separate questions arise with carpool lanes. Eligibility: usually a minimum number of occupants, plus motorcycles and clean-air vehicles with a valid decal, and only within posted hours if hours are stated. Access: anywhere the boundary is a single broken line, but only at designated openings where double solid white lines apply.",
        trap: "\"Cross whenever you are eligible to use the lane\" answers the eligibility question when the item is about access, which is the classic carpool-lane confusion.",
        excerptKey: "marking-double-white",
        sourceLabel: "California Driver's Handbook — HOV lanes",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s6_32",
        topic: "impairment",
        question:
          "An opened container of alcohol in a vehicle must be:",
        choices: [
          "In the glove compartment",
          "In the trunk or an area out of the passenger compartment",
          "Held by a passenger, not the driver",
          "Under a seat",
        ],
        correctIndex: 1,
        explanation:
          "Anything already opened has to be out of reach in the trunk or a cargo area, and the glove compartment is specifically excluded. A driver can be cited for a passenger's open container.",
        context:
          "California's open container rules cover alcohol and cannabis alike and apply to everyone in the vehicle. Containers must be sealed, or else stored in the trunk or a cargo area rather than anywhere in the passenger compartment. Limited exemptions exist for passengers in buses, taxis, motorhomes and campers.",
        trap: "The glove compartment feels like storage and is named specifically as somewhere an open container may not be.",
        excerptKey: "open-container",
        sourceLabel: "California Driver's Handbook — Open container laws",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s6_33",
        topic: "signs",
        question:
          "A white rectangular sign with black lettering typically:",
        choices: [
          "States a law you must obey",
          "Gives distance information",
          "Marks a service area",
          "Warns of a hazard ahead",
        ],
        correctIndex: 0,
        explanation:
          "White rectangles are the regulatory family — speed limits, lane restrictions, turn prohibitions — and breaking one is a citable offence. Warnings are yellow diamonds and guidance is green or blue.",
        context:
          "Category by colour: white with black text for regulations, yellow for road warnings, orange for temporary work zones, red for stop and prohibition, green for guidance, blue for services, brown for recreation. Prohibitions within the regulatory family often use a red circle with a slash over a symbol, which always bans whatever is drawn inside.",
        trap: "Confusing regulatory white rectangles with yellow warning diamonds is the standard error — a warning cannot be violated, while a regulation can.",
        excerptKey: "sign-white-rectangle",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_34",
        topic: "safety",
        question:
          "Before changing lanes you should:",
        choices: [
          "Signal and move immediately",
          "Sound the horn and move over",
          "Check mirrors only",
          "Signal, check mirrors, then check your blind spot over your shoulder",
        ],
        correctIndex: 3,
        explanation:
          "Mirrors always leave an unseen area beside and slightly behind the car, large enough to hide a motorcycle. The shoulder check is the only thing that covers it.",
        context:
          "The full lane change: signal — at least five seconds on a freeway — check the mirrors, check the blind spot over your shoulder, then move in one deliberate step. The same shoulder check applies before turning where a cyclist could be alongside, before merging, before backing up, and before opening a door into the roadway.",
        trap: "\"Check mirrors only\" feels sufficient because the mirrors show a wide view, and the gap they leave is exactly motorcycle-sized.",
        excerptKey: "lane-change-shoulder-check",
        sourceLabel: "California Driver's Handbook — Blind spots",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s6_35",
        topic: "rightOfWay",
        question:
          "At a T-intersection with no signs, the driver on the road that ends must:",
        choices: [
          "Stop and wait for a gap of 200 feet",
          "Proceed first",
          "Yield to traffic on the through road",
          "Yield only to traffic from the right",
        ],
        correctIndex: 2,
        explanation:
          "The through road carries priority and the road that ends gives way, in both directions. The geometry alone establishes who is passing through and who is joining.",
        context:
          "Yielding in California follows one principle with several expressions: whoever is joining gives way to whoever is established. That covers T-intersections, driveways and alleys, freeway merges, roundabout entries, and left turns across oncoming traffic. First arrival and the right-hand tie-breaker only apply where neither driver is joining the other's road.",
        trap: "\"Yield only to traffic from the right\" imports the four-way tie-breaker, when the through road has priority from both directions.",
        excerptKey: "row-t-intersection",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_36",
        topic: "rules",
        question:
          "It is illegal to follow an emergency vehicle with its lights or siren operating closer than:",
        choices: ["100 feet", "200 feet", "300 feet", "500 feet"],
        correctIndex: 2,
        explanation:
          "Three hundred feet keeps you clear when the crew brakes hard or a driver ahead pulls over without warning. Slipping in behind an emergency vehicle to beat traffic is an offence in itself.",
        context:
          "Three emergency-vehicle obligations, easily mixed up. Approaching with lights or siren: pull right and stop, clearing an intersection first if you are in one. Following one running lights or siren: no closer than 300 feet. Stopped at the roadside with lights flashing — including tow trucks and road work vehicles — the Move Over law asks for a lane change where traffic allows and a reduction in speed where it does not.",
        trap: "500 feet is a real California figure but belongs to dimming high beams for oncoming traffic, not to following emergency vehicles.",
        excerptKey: "emergency-vehicle-300-feet",
        sourceLabel: "California Driver's Handbook — Emergency vehicles",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s6_37",
        topic: "parking",
        question:
          "You may not park within how many feet of a crosswalk, where no curb extension exists?",
        choices: ["10 feet", "15 feet", "20 feet", "30 feet"],
        correctIndex: 2,
        explanation:
          "Twenty feet stops a parked car hiding a pedestrian who is about to step out. Where a curb extension has already improved sight lines, the requirement drops to 15 feet.",
        context:
          "The distances: 20 feet from a crosswalk normally, 15 feet where a curb extension exists, and 15 feet from a fire hydrant or fire station driveway. Alongside those, you may not park on a sidewalk or crosswalk, block a driveway, double park, park against the direction of traffic, or occupy the striped access aisle beside a disabled space.",
        trap: "15 feet is the hydrant figure and the curb-extension figure, which makes it the most natural wrong answer to a plain crosswalk question.",
        excerptKey: "parking-crosswalk",
        sourceLabel: "California Driver's Handbook — Parking",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s6_38",
        topic: "safety",
        question:
          "You should scan the road approximately how far ahead?",
        choices: [
          "Two seconds ahead",
          "Ten seconds ahead",
          "As far as your headlights reach, at all times",
          "To the vehicle in front",
        ],
        correctIndex: 1,
        explanation:
          "About ten seconds of road gives you time to plan for a hazard rather than react to it. Watching the car in front means you only learn about a problem when its brake lights come on.",
        context:
          "Two different numbers describe two different habits. Following distance is three seconds — the gap to the car ahead. Scanning distance is about ten seconds — how far up the road your eyes are working. Add mirror checks every few seconds and a shoulder check before each lane change and you have the whole visual routine.",
        trap: "Two seconds is the answer to a following-distance question and gets pulled into scanning questions because both are measured in seconds.",
        excerptKey: "scan-10-seconds",
        sourceLabel: "California Driver's Handbook — Scanning",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s6_39",
        topic: "signs",
        question:
          "A red circle with a diagonal slash over a symbol means:",
        choices: [
          "The action shown is prohibited",
          "The action shown is recommended",
          "The symbol marks a hazard ahead",
          "The action shown is required",
        ],
        correctIndex: 0,
        explanation:
          "The slashed circle always cancels whatever is drawn inside it — a U-turn, a left turn, a truck, a bicycle. Once you know the convention you can read prohibitions you have never seen before.",
        context:
          "The slashed circle belongs to the regulatory family and always prohibits the action pictured. The same symbols without the circle appear on yellow warning signs to mean the opposite kind of thing — that the item pictured may be present ahead. Read the picture first, then the circle, and the sign explains itself.",
        trap: "\"The symbol marks a hazard ahead\" confuses a prohibition with a warning, and the same pictogram genuinely appears in both roles.",
        excerptKey: "sign-prohibition-circle",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_40",
        topic: "impairment",
        question:
          "Which of these lowers blood alcohol concentration?",
        choices: ["Coffee", "Fresh air", "A cold shower", "Time"],
        correctIndex: 3,
        explanation:
          "The liver processes alcohol at a fixed rate and nothing accelerates it. The other three only make a drunk person feel more awake, which is worse than useless behind the wheel.",
        context:
          "Only time removes alcohol from the body. Food eaten before or during drinking slows absorption but does nothing about alcohol already in the bloodstream. Impairment also begins below any legal threshold, so an officer can arrest a driver under 0.08% whose driving shows the effects, and fatigue or medication compounds the impairment further.",
        trap: "Coffee is the universal folk remedy, and the alertness it produces masks impairment without reducing it at all.",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s6_41",
        topic: "rightOfWay",
        question:
          "You are leaving a parking lot onto a public street. You must yield to:",
        choices: [
          "Nobody, once your front wheels reach the roadway",
          "Only vehicles within 100 feet",
          "Only vehicles approaching from the left",
          "Pedestrians on the sidewalk and all traffic on the street",
        ],
        correctIndex: 3,
        explanation:
          "You are the one joining, so everything already established goes first — including people walking across the exit. The sidewalk comes before the roadway, which is easy to forget.",
        context:
          "Leaving private property is the clearest case of the joining-yields rule. You yield to pedestrians on the sidewalk you cross, then to traffic on the street in both directions if you are turning left. The same applies to driveways, alleys and parking lots. A gap in traffic makes the move safe but never transfers the right-of-way.",
        trap: "\"Only vehicles within 100 feet\" invents a distance threshold, and no gap converts a yield obligation into a right-of-way.",
        excerptKey: "row-entering-traffic",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s6_42",
        topic: "licensing",
        question:
          "During the first 12 months with a California provisional licence, a driver under 18 may not:",
        choices: [
          "Drive more than 50 miles from home",
          "Drive at all without an adult present",
          "Drive between 11 p.m. and 5 a.m., or carry passengers under 20 without a licensed driver aged 25 or over",
          "Drive on freeways",
        ],
        correctIndex: 2,
        explanation:
          "The provisional restrictions are a night curfew and a passenger limit, both running for the first 12 months. Documented exceptions exist for medical, school, employment and family transport needs.",
        context:
          "The California under-18 pathway: an instruction permit from 15½ with driver education, held for at least six months; driver training plus 50 hours of supervised practice with a licensed driver aged 25 or over, of which 10 hours must be at night; then a provisional licence at 16 after the behind-the-wheel test. For the first 12 months there is no driving between 11 p.m. and 5 a.m. and no passengers under 20 unless a licensed driver aged 25 or over is aboard. Under-18 drivers also may not use a phone at all while driving, hands-free or otherwise, except for emergencies.",
        trap: "\"Drive at all without an adult present\" describes the permit stage rather than the provisional licence, which does allow solo driving within the restrictions.",
        excerptKey: "provisional-night",
        sourceLabel: "California Driver's Handbook — Provisional licence",
        sourceUrl: `${H}/getting-an-instruction-permit-and-drivers-license/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s6_43",
        topic: "rules",
        question:
          "A driver under 18 may use a cell phone while driving:",
        choices: [
          "In hands-free mode only",
          "Only to call for emergency assistance",
          "At any time, if a licensed adult is present",
          "Only when stopped at a red light",
        ],
        correctIndex: 1,
        explanation:
          "The hands-free allowance is for adults. Drivers under 18 may not use a phone or hands-free device while driving at all, apart from calling for emergency help.",
        context:
          "Phone rules split by age. Drivers 18 and over may use a phone only hands-free, and holding it or texting is prohibited. Drivers under 18 may not use a phone or a hands-free device at all, except for emergency calls. That sits alongside the other provisional restrictions: no driving between 11 p.m. and 5 a.m. and no passengers under 20 without a licensed driver aged 25 or over, for the first 12 months.",
        trap: "\"In hands-free mode only\" is the adult rule, and applying it to a minor is the single most-missed item in the distracted driving material.",
        excerptKey: "minor-cell-phone",
        sourceLabel: "California Driver's Handbook — Distracted driving",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont2/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s6_44",
        topic: "emergencies",
        question:
          "You must report a collision to the DMV on form SR 1 within 10 days when:",
        choices: [
          "Damage exceeds $1,000, or anyone is injured or killed",
          "Only when you were at fault",
          "Only when police did not attend",
          "Damage exceeds $500",
        ],
        correctIndex: 0,
        explanation:
          "The threshold is $1,000 in property damage or any injury or death, and the duty applies regardless of fault. Failing to file can cost you your driving privilege.",
        context:
          "Two clocks run after a California collision. Law enforcement must be notified within 24 hours where anyone is injured or killed. The DMV must receive an SR 1 within 10 days where anyone is injured or killed or property damage exceeds $1,000, whatever the fault and even on private property. At the scene, stop, call 911 if anyone is hurt, exchange licence, registration and insurance details, and leave a note if you hit an unattended vehicle.",
        trap: "\"Only when you were at fault\" is a natural assumption about reporting duties, and the obligation attaches to the collision rather than to blame.",
        excerptKey: "collision-report-sr1",
        sourceLabel: "California Driver's Handbook — Collisions",
        sourceUrl: `${H}/financial-responsibility-insurance-requirements-and-collisions/`,
      },
      {
        id: "ca_s6_45",
        topic: "sharing",
        question:
          "A truck ahead of you has swung left before making a right turn. You should:",
        choices: [
          "Pass on its left quickly",
          "Sound your horn to correct the driver",
          "Pass on its right while the gap is open",
          "Wait behind until the turn is complete",
        ],
        correctIndex: 3,
        explanation:
          "The gap that opens on the right is where the trailer is about to sweep, so a car sitting there gets pinned against the curb. Waiting costs a few seconds.",
        context:
          "Large vehicles need room and have long blind spots down both sides and directly behind. They swing away from the direction of a turn before making it, they take much longer to stop, and if you cannot see the driver's face in a mirror they cannot see you. Give extra following distance, do not cut in after passing, and never fill the gap on the turning side.",
        trap: "Filling the gap on the right is the natural city-driving move and is the exact space the trailer occupies as the turn completes.",
        excerptKey: "truck-wide-turns",
        sourceLabel: "California Driver's Handbook — Large vehicles",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s6_46",
        topic: "safety",
        question:
          "Traffic in the lane beside you has stopped at a crosswalk. You should:",
        choices: [
          "Sound your horn and proceed",
          "Pass slowly in your own lane",
          "Stop too, since a pedestrian may be crossing out of your view",
          "Continue if you cannot see anyone crossing",
        ],
        correctIndex: 2,
        explanation:
          "The stopped vehicle hides the crosswalk, so passing it means arriving blind at the moment someone is in it. Assume it stopped for a reason and stop as well.",
        context:
          "Pedestrian rules are built around visibility as much as priority. You yield at marked and unmarked crosswalks, stop behind the limit line rather than in the crossing, give extra time to older pedestrians, children and people with disabilities, and never pass a vehicle stopped at a crosswalk. The last of those exists precisely because the stopped vehicle conceals the person you would hit.",
        trap: "\"Continue if you cannot see anyone crossing\" makes your own blocked view the test, when the blocked view is the whole hazard.",
        excerptKey: "crosswalk-no-passing",
        sourceLabel: "California Driver's Handbook — Pedestrians",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
    ],
  },
];
