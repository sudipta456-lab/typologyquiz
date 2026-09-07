import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sources and the same rule as sets 1 to 3: the State of
// Hawaii Driver's Manual first, Title 17 of the Hawaii Revised Statutes where
// the manual is silent or has gone stale, and the four counties' own licensing
// pages for anything about the test itself.
//
// SET 4 walks the whole book rather than the popular half of it. Hawaii's
// manual spends real space on chapters most learners skip - vehicle equipment
// and the annual safety inspection, county registration, no-fault insurance,
// towing a trailer, freeway procedure and pedestrian safety - and its own
// appendix of 177 practice questions draws on every one of them.
//
// SET 5 is built from two things: the rules the manual itself flags, and what
// Hawaii learners on Reddit say beat them. Those threads are evidence about
// what CONFUSES people, never about what the law says, so each one sent the
// question back to the manual or the statute to be written from scratch. The
// recurring complaints were the hill-parking rule (the manual says turn right
// facing either way, which is not the mainland rule, and the wording "toward
// the edge of the road" reads backwards to people), blocking an intersection,
// the difference between a School Crossing sign and a school zone, keeping
// right when you are not passing, signaling at all, and what to do at an
// intersection whose signal has failed.
//
// SET 6 mirrors the real thing: 30 questions, the mix the manual's own
// appendix uses, no scaffolding beyond the standard fields.

const HB =
  "https://hidot.hawaii.gov/highways/files/2024/11/2023-Hawaii-Drivers-Manual_5.375x8.375_Final-r3-Digital-071924web.pdf";
const hb = (page: number) => `${HB}#page=${page}`;
const HRS = "https://www.capitol.hawaii.gov/hrscurrent/Vol05_Ch0261-0319/";
const hrs = (id: string) => `${HRS}${id}.htm`;
const MANUAL = "State of Hawaii Driver's Manual";

export const hawaiiSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions spread over every chapter of the book, including the ones most people skim: vehicle equipment and the annual safety check, county registration, no-fault insurance, trailers, freeway procedure and pedestrian safety.",
    questions: [
      {
        id: "hi_s4_01",
        topic: "licensing",
        question: "How often must a car registered in Hawaii pass a safety inspection?",
        choices: [
          "Once every two years",
          "Only when it is sold",
          "Once every six months",
          "At least once a year",
        ],
        correctIndex: 3,
        explanation:
          "Every vehicle on the public highways must have an official Periodic Motor Vehicle Inspection at least once a year. Ambulances are the exception at every six months, and a new vehicle gets two years from its first inspection.",
        context:
          "The inspection and the registration are locked together. Your vehicle must hold a current, valid safety inspection certificate before it can be registered, and you need a Hawaii insurance identification card to pass the inspection in the first place.",
        trap: "Two years is the new-vehicle grace period, not the standard interval. Once that runs out you are on the annual cycle like everyone else.",
        excerptKey: "safety-inspection-annual",
        sourceLabel: `${MANUAL} - Chapter II, Safety Inspection of Vehicles`,
        sourceUrl: hb(18),
      },
      {
        id: "hi_s4_02",
        topic: "rules",
        question: "Where must a vehicle be registered in Hawaii?",
        choices: [
          "In the county in which you operate the vehicle",
          "With the State Department of Transportation in Honolulu",
          "In the county where the vehicle was bought",
          "Anywhere in the state, since registration is statewide",
        ],
        correctIndex: 0,
        explanation:
          "Hawaii law requires the vehicle to be registered in the county in which you operate it, and licensed each year by that same county. Registrations and titles are issued by the appropriate agency in each county, not by the State.",
        context:
          "It is the same split that runs through driver licensing. The State writes the law and publishes the manual; the counties keep the records, take the money and hand over the plates.",
        trap: "There is no central state vehicle office to fall back on. If you move island, the county you now drive in is the one that has to have you on its books.",
        excerptKey: "register-in-county",
        sourceLabel: `${MANUAL} - Chapter III, Vehicle Registration`,
        sourceUrl: hb(21),
      },
      {
        id: "hi_s4_03",
        topic: "safety",
        question: "How does the manual suggest you check whether a tire still has enough tread?",
        choices: [
          "Press a coin edge-on into the groove and look for daylight",
          "Compare the tread with the spare",
          "Put a Lincoln penny upside down in the tread; if the top of his head shows, replace the tire",
          "Measure the depth with a ruler at the shoulder of the tire",
        ],
        correctIndex: 2,
        explanation:
          "Place a Lincoln penny upside down in the tread. If the top of Lincoln's head is visible, the tire needs replacing. The manual sets the limit at less than 1/16 of an inch of tread.",
        context:
          "It also asks for a monthly check of pressure against the figure on the door jamb, and a look for cuts, bulges, tread separation and uneven wear. Under-inflated or bald tires hydroplane at lower speeds than good ones.",
        trap: "Checking only the center of the tread misses the problem. Uneven wear at one shoulder is what tells you the alignment or the pressure is wrong.",
        excerptKey: "tire-tread",
        sourceLabel: `${MANUAL} - Chapter II, Vehicle Condition and Maintenance`,
        sourceUrl: hb(20),
      },
      {
        id: "hi_s4_04",
        topic: "sharing",
        question:
          "You are towing a loaded trailer that weighs more than half the weight of your car. What does the manual require?",
        choices: [
          "Nothing extra, provided you stay below 45 mph",
          "A second licensed driver in the vehicle",
          "A commercial driver's license",
          "Brakes and breakaway protection on the trailer",
        ],
        correctIndex: 3,
        explanation:
          "A loaded trailer weighing more than half the weight of the towing vehicle, or 3,000 pounds or more, must have brakes and breakaway protection.",
        context:
          "The rest of the towing chapter is worth knowing too: safety chains attach to the frame of the towing vehicle, not to part of the hitch, and about 10 to 15 per cent of the trailer's weight should sit on the hitch. Too little and it fishtails.",
        trap: "Half the towing vehicle's weight and 3,000 pounds are alternatives, not a combined test. Either one on its own triggers the requirement.",
        excerptKey: "trailer-brakes",
        sourceLabel: `${MANUAL} - Chapter XI, Towing Trailers`,
        sourceUrl: hb(87),
      },
      {
        id: "hi_s4_05",
        topic: "emergencies",
        question:
          "You have hit a parked car and cannot find the owner. What does the manual say to do?",
        choices: [
          "Wait at the scene until the police arrive, however long that takes",
          "Leave a written notice with your name, address and the circumstances of the crash",
          "Report it to your insurer within 30 days and nothing more",
          "Nothing, if the damage is under $3,000",
        ],
        correctIndex: 1,
        explanation:
          "Stop and try to find the owner, and if you cannot, leave a written notice giving your name, address and the circumstances of the crash. If you have damaged other property along the highway, notify its owner.",
        context:
          "That duty is separate from the reporting threshold. The $3,000 figure is about when the police must be told; leaving your details is required whether the dent is worth $300 or $3,000.",
        trap: "A note is not optional because the damage looks minor. Driving away without identifying yourself is what turns a scrape into a hit and run.",
        excerptKey: "crash-unattended-vehicle",
        sourceLabel: `${MANUAL} - Chapter VII, Crash Procedures`,
        sourceUrl: hb(52),
      },
      {
        id: "hi_s4_06",
        topic: "signs",
        question: "What does a stop line painted across your lane mark?",
        choices: [
          "The exact place at which to stop",
          "The boundary of a school zone",
          "Where the crosswalk begins",
          "The point beyond which you may not park",
        ],
        correctIndex: 0,
        explanation:
          "Stop lines are solid white lines painted across the traffic lanes at intersections and pedestrian crosswalks, and the manual says they indicate the exact place at which to stop.",
        context:
          "The signal rules key off it. At a red light you stop at the stop line; only if there is none do you stop before the crosswalk, and only if there is neither do you stop before the intersection.",
        trap: "Crosswalk lines are a separate marking, and the manual's instruction about them is different: you must stop for pedestrians in them.",
        excerptKey: "stop-lines",
        sourceLabel: `${MANUAL} - Chapter VI, Pavement Markings`,
        sourceUrl: hb(36),
      },
      {
        id: "hi_s4_07",
        topic: "rules",
        question: "Which piece of equipment is illegal on a private vehicle in Hawaii?",
        choices: [
          "A roof rack carrying surfboards",
          "Fog lamps mounted below the bumper",
          "A trailer hitch left on when no trailer is attached",
          "A muffler cut-out or by-pass",
        ],
        correctIndex: 3,
        explanation:
          "The manual's prohibited list has three entries: a red light showing from the front or a blue light visible outside the vehicle, a bell, exhaust whistle or siren, and a muffler cut-out or by-pass or any muffler noisier than the original equipment one.",
        context:
          "The first two are reserved for authorized emergency vehicles, which is the point. A private car showing red or blue to other traffic is impersonating one.",
        trap: "Loudness is judged against the manufacturer's muffler, not against a decibel figure you can argue about at the roadside.",
        excerptKey: "illegal-equipment",
        sourceLabel: `${MANUAL} - Chapter II, Illegal Equipment`,
        sourceUrl: hb(18),
      },
      {
        id: "hi_s4_08",
        topic: "safety",
        question: "How far behind the vehicle ahead should you stop in a queue, according to the manual?",
        choices: [
          "Close enough that nobody can cut in",
          "One car length",
          "Far enough back to see where its rear tires touch the road",
          "Two full car lengths in every case",
        ],
        correctIndex: 2,
        explanation:
          "Stop far enough back that you can see the point where the rear tires of the vehicle ahead rest on the road. That leaves room to steer around it if it cannot move off.",
        context:
          "It is a practical test rather than a measurement, and Hawaii examiners use it on the road test: if you cannot see the contact patch, you are too close to get out from behind a car that has stalled.",
        trap: "Closing up to stop anyone merging in front of you is the habit this rule replaces, and it also removes your own escape route.",
        excerptKey: "stop-far-enough-back",
        sourceLabel: `${MANUAL} - Chapter X, Use of Brakes`,
        sourceUrl: hb(70),
      },
      {
        id: "hi_s4_09",
        topic: "impairment",
        question: "What does the manual say about over-the-counter medicines and driving?",
        choices: [
          "Some allergy remedies and cold pills can affect your driving ability",
          "Only prescription drugs can affect your driving ability",
          "Non-prescription medicines are safe by definition",
          "Medicines matter only if taken with alcohol",
        ],
        correctIndex: 0,
        explanation:
          "Some allergy remedies and cold pills you can buy without a prescription contain ingredients that affect your driving. The manual's advice is to ask your doctor about anything you take before you drive on it.",
        context:
          "It reserves its strongest warning for combinations: alcohol and drugs together can have a much more pronounced effect than either separately, and the instruction is simply never to mix them.",
        trap: "Being legal at the pharmacy counter says nothing about being safe behind the wheel. Hawaii's impaired driving offense covers any drug that impairs your ability to drive carefully.",
        excerptKey: "otc-medicine",
        sourceLabel: `${MANUAL} - Chapter IX, Other Drugs`,
        sourceUrl: hb(56),
      },
      {
        id: "hi_s4_10",
        topic: "speed",
        question:
          "You are merging onto the freeway and the entrance lane is clear. What does the manual tell you to do?",
        choices: [
          "Drive to the end of the entrance lane and stop, then wait for a gap",
          "Enter at whatever speed you were doing on the ramp",
          "Cross to the center lane immediately so you are out of the way",
          "Signal, then increase your speed to match the freeway traffic",
        ],
        correctIndex: 3,
        explanation:
          "Once the entrance lane is clear, signal that you are merging and increase your speed to match that of the freeway traffic. Then look for a gap in the near lane and move in.",
        context:
          "The manual is emphatic about the failure mode, in capitals: do not move slowly to the end of the entrance lane and stop. Trying to join freeway traffic from a standstill is difficult and dangerous.",
        trap: "Entering under the flow speed is what forces everyone else to brake, and it is a common complaint about merging on the H-1. Matching speed is what makes the gap usable.",
        excerptKey: "freeway-entering",
        sourceLabel: `${MANUAL} - Chapter X, Entering the Freeway`,
        sourceUrl: hb(78),
      },
      {
        id: "hi_s4_11",
        topic: "parking",
        question: "What does a tow-away zone sign mean for stopping, as opposed to parking?",
        choices: [
          "You may stop briefly to drop a passenger off",
          "You must not park or stop, even momentarily, during the posted hours",
          "You may stop if you stay with the vehicle",
          "It applies only to commercial vehicles",
        ],
        correctIndex: 1,
        explanation:
          "During the hours stated on the official signs you may not park or stop, even momentarily, unless you are blocked by other traffic. The police will have the vehicle towed.",
        context:
          "Tow-away zones exist to keep contraflow and peak-hour lanes running. On Oahu that is the difference between three lanes flowing and two lanes crawling behind one abandoned car.",
        trap: "Staying in the vehicle changes nothing. The rule is about the space being occupied, not about whether somebody could move it.",
        excerptKey: "tow-away-zone",
        sourceLabel: `${MANUAL} - Chapter V, Tow-Away Zones`,
        sourceUrl: hb(29),
      },
      {
        id: "hi_s4_12",
        topic: "sharing",
        question: "How does the manual say a pedestrian should walk when there is no sidewalk?",
        choices: [
          "On the right side of the street, going with the traffic",
          "In the middle of the roadway where drivers can see them",
          "On whichever side has the better surface",
          "On the left side of the street, facing oncoming traffic",
        ],
        correctIndex: 3,
        explanation:
          "Walk on the left side of the street facing oncoming traffic. Seeing what is coming is what lets a pedestrian step clear in time.",
        context:
          "The manual is blunt about why it matters here: 20 per cent of all Hawaii traffic fatalities are pedestrians, almost 90 per cent of those crashes happen in the roadway, and nearly half the people killed are under 15 or over 65.",
        trap: "Walking with the traffic feels more polite and removes your only warning. The breakdown chapter gives drivers the same instruction if they have to walk from a stalled car.",
        excerptKey: "walk-facing-traffic",
        sourceLabel: `${MANUAL} - Chapter XII, Your Responsibility as a Pedestrian`,
        sourceUrl: hb(96),
      },
      {
        id: "hi_s4_13",
        topic: "signals",
        question: "What does a red arrow mean for the lane it controls?",
        choices: [
          "Exactly what a red light means for that lane",
          "You may turn after stopping and yielding",
          "You may proceed with caution in the direction shown",
          "The arrow is out of service",
        ],
        correctIndex: 0,
        explanation:
          "A red arrow has the same meaning as a red light for the indicated lane of traffic. It stops that movement, and it does not turn into a permission after a stop.",
        context:
          "The whole arrow set works this way: red arrow is red for that lane, yellow arrow is yellow for that lane, and green arrow is green for that lane with the added requirement that you go the way the arrow points.",
        trap: "Treating a red arrow like a red circle that allows a turn on red is the misreading. The arrow is controlling a specific movement, and that movement is stopped.",
        excerptKey: "red-arrow",
        sourceLabel: `${MANUAL} - Chapter VI, Lighted Arrows`,
        sourceUrl: hb(40),
      },
      {
        id: "hi_s4_14",
        topic: "rightOfWay",
        question:
          "A pedestrian with a white cane is in the roadway ahead and your light is green. What must you do?",
        choices: [
          "Proceed, since the signal gives you the right of way",
          "Sound your horn to make your presence known and continue",
          "Stop, regardless of the signal indication or the traffic situation",
          "Slow down and pass behind them",
        ],
        correctIndex: 2,
        explanation:
          "Stop for all blind persons in the roadway, identified by a white cane or a guide dog, regardless of the traffic signal indication or the traffic situation. The manual admits no exception.",
        context:
          "It sits in a list of driver duties that are marked required by law: slowing and being ready to stop whenever people are on or crossing the roadway, watching for pedestrians when turning and when leaving driveways, and never driving through a pedestrian safety zone.",
        trap: "A green light does not override this one. It is one of the few rules in the manual written to beat the signal.",
        excerptKey: "stop-for-blind-pedestrians",
        sourceLabel: `${MANUAL} - Chapter XII, Your Responsibility as a Driver`,
        sourceUrl: hb(95),
        commonlyMissed: true,
      },
      {
        id: "hi_s4_15",
        topic: "rules",
        question:
          "You are being overtaken on a two-lane road. What does the manual say about your speed?",
        choices: [
          "Speed up so the pass is over sooner",
          "Maintain your speed exactly",
          "Brake hard to open a gap",
          "It is unlawful to increase your speed while you are being passed",
        ],
        correctIndex: 3,
        explanation:
          "The manual gives it as a flat note in its no-passing section: when you are being passed, it is unlawful to increase your speed.",
        context:
          "The statute goes a step further. On an audible signal the driver being overtaken must give way to the right and may not increase speed until the other vehicle has completely passed.",
        trap: "Speeding up looks helpful and strands the other driver in the oncoming lane. If you want the pass over quickly, ease off instead.",
        excerptKey: "no-increase-speed-when-passed",
        sourceLabel: `${MANUAL} - Chapter V, No Passing Rules`,
        sourceUrl: hb(30),
      },
      {
        id: "hi_s4_16",
        topic: "safety",
        question:
          "What does the manual say about driving with headphones or earphones?",
        choices: [
          "Do not drive with headsets or earphones that cover or go in both ears",
          "They are fine at any volume as long as they are wireless",
          "They are allowed only on freeways",
          "They are allowed for navigation instructions only",
        ],
        correctIndex: 0,
        explanation:
          "Do not drive with headsets or earphones that cover or go in both ears, because they make it too hard to hear an emergency horn or a siren.",
        context:
          "The same passage tells you to keep the stereo low enough to hear things outside the vehicle - a siren, a horn, screeching tires - since those are the warnings that let you react before you can see the problem.",
        trap: "Volume is not the whole issue. Anything covering both ears removes the sound cue however quietly it is playing.",
        excerptKey: "no-headsets",
        sourceLabel: `${MANUAL} - Chapter X, Distracted Driving`,
        sourceUrl: hb(59),
      },
      {
        id: "hi_s4_17",
        topic: "emergencies",
        question: "Fire breaks out in your vehicle. What does the manual tell you to do first?",
        choices: [
          "Open the hood to see where the fire is",
          "Drive to a safe area clear of traffic and stop",
          "Pour water on it",
          "Keep driving to the nearest fire station",
        ],
        correctIndex: 1,
        explanation:
          "Drive to a safe area clear of traffic and stop, then turn the ignition and all other electrical switches off and get everyone out of and away from the vehicle and off the roadway.",
        context:
          "Two warnings follow. Poisonous fumes can fill the cabin quickly, which is why nobody stays inside, and water must never be used on a gasoline, oil or electrical fire.",
        trap: "Opening the hood feeds the fire a rush of air. If it is small, smother it from a distance with an extinguisher, dirt, sand or a blanket; if it is large, do not try.",
        excerptKey: "vehicle-fire",
        sourceLabel: `${MANUAL} - Chapter X, Fire`,
        sourceUrl: hb(84),
      },
      {
        id: "hi_s4_18",
        topic: "licensing",
        question:
          "What does the manual say about the relationship between itself and Hawaii law?",
        choices: [
          "The manual is the law for drivers",
          "The manual replaces county ordinances",
          "The manual is updated whenever a law changes",
          "The manual does not supersede state laws, county ordinances or any adopted rule",
        ],
        correctIndex: 3,
        explanation:
          "The introduction says the information in the manual does not supersede state laws, county ordinances or any duly adopted rule or regulation. It is a guide to help you drive safely and qualify for a license.",
        context:
          "It also warns that rules and laws change between printings, and points you to the websites listed on page 4 and to Hawaii Administrative Rules 19-122 for the current position.",
        trap: "That caveat is why a question here can follow the statute rather than the book. Where the two disagree, the law wins and the manual says so itself.",
        excerptKey: "manual-not-law",
        sourceLabel: `${MANUAL} - Introduction`,
        sourceUrl: hb(6),
      },
      {
        id: "hi_s4_19",
        topic: "signs",
        question:
          "White markings on the pavement before a railroad crossing include a large X and two R's. What else does the manual say is there?",
        choices: [
          "A red stop bar and a yellow warning triangle",
          "Rumble strips across both lanes",
          "A solid yellow centerline the whole distance to prevent passing, and a white stop line",
          "Nothing else; the X and the R's are the whole marking",
        ],
        correctIndex: 2,
        explanation:
          "A solid yellow centerline runs the entire distance to prevent passing, and a white stop line is painted across the traffic lane, in addition to the large X and the two R's.",
        context:
          "It matches the no-passing rules elsewhere in the manual, which bar passing within 100 feet of, or across, any railroad crossing. The markings are the same rule written on the road.",
        trap: "The stop line at a crossing is not decoration. Combined with the statute it puts you between 15 and 50 feet from the nearest rail, which is where a stopped car is safe.",
        excerptKey: "railroad-markings",
        sourceLabel: `${MANUAL} - Chapter VI, Pavement Markings`,
        sourceUrl: hb(38),
      },
      {
        id: "hi_s4_20",
        topic: "impairment",
        question:
          "What does the manual say alcohol actually is, in terms of its effect on the body?",
        choices: [
          "A depressant that slows reflexes, interferes with judgment, reduces alertness and impairs vision",
          "A stimulant that sharpens reactions in small amounts",
          "A neutral substance that affects only coordination",
          "A mild sedative that has no effect below .05",
        ],
        correctIndex: 0,
        explanation:
          "Alcohol is a depressant, not a stimulant. It slows normal reflexes, interferes with judgment, reduces alertness and impairs vision.",
        context:
          "The manual accounts for the feeling that says otherwise: if you feel stimulated after drinking, that is your inhibitions being lowered, which costs you caution and self-control rather than giving you anything.",
        trap: "The stimulant answer is the one the sensation supports, and the sensation is the loss of judgment doing its work.",
        excerptKey: "alcohol-depressant",
        sourceLabel: `${MANUAL} - Chapter IX, Alcohol`,
        sourceUrl: hb(55),
      },
      {
        id: "hi_s4_21",
        topic: "speed",
        question:
          "What does the manual give as the aim when you are choosing a speed in traffic?",
        choices: [
          "Stay 5 mph under the limit at all times",
          "Match the speed of the vehicle immediately ahead",
          "Drive at the limit unless a sign says otherwise",
          "Keep pace with traffic, because vehicles moving the same way at the same speed never collide",
        ],
        correctIndex: 3,
        explanation:
          "Keep pace with traffic. The manual's reasoning is that vehicles moving in the same direction at the same speed never collide, and moving faster than the traffic around you constantly creates new conflicts.",
        context:
          "It comes with the other half of the rule: if you cannot keep up, move as far to the right as possible. The four instructions together are keep pace, keep a safe interval, keep a steady speed, and reduce it when the road or weather turns.",
        trap: "Keeping pace never means exceeding the posted limit. The manual says the proper speed should always be within the posted limits, and Hawaii's excessive speeding offense starts 30 over.",
        excerptKey: "keep-pace-with-traffic",
        sourceLabel: `${MANUAL} - Chapter X, Vehicle Speed`,
        sourceUrl: hb(67),
      },
      {
        id: "hi_s4_22",
        topic: "parking",
        question:
          "Beyond the curb distance, what does the manual say about how you must sit in a parking space?",
        choices: [
          "Any position is acceptable if the meter is paid",
          "Your vehicle must not extend outside a marked space, unless it is larger than the space",
          "You may straddle two spaces if the lot is empty",
          "You must reverse into every marked space",
        ],
        correctIndex: 1,
        explanation:
          "Parking so that your vehicle extends outside a marked space is prohibited, except where the vehicle is genuinely larger than the space.",
        context:
          "The parallel version is on the same list: park parallel to the curb, headed in the direction of traffic where angle parking is not designated, with your curbside wheels within 12 inches of the curb or completely inside the marked stall.",
        trap: "The exception is for a vehicle too big for the bay, not for a driver who parked badly. The manual's list is about not taking space that belongs to somebody else.",
        excerptKey: "parking-restrictions-12-inches",
        sourceLabel: `${MANUAL} - Chapter X, Parking Restrictions`,
        sourceUrl: hb(73),
      },
      {
        id: "hi_s4_23",
        topic: "rightOfWay",
        question:
          "You are turning right at an intersection and there is a bike lane along the curb. What does the manual say?",
        choices: [
          "Do not drive in the bike lane when making the turn",
          "Move into the bike lane early so you do not block through traffic",
          "Straddle the bike lane line while you wait",
          "Use the bike lane only if no cyclist is in sight",
        ],
        correctIndex: 0,
        explanation:
          "When making a right turn at an intersection, do not drive in the bike lane. The manual repeats it in the bicycle chapter: stay clear of bike lanes, especially when turning right, and look for and yield to cyclists when crossing one.",
        context:
          "It also gives advice about ordering: if you plan to make an immediate right turn, it is better not to pass the bicyclist at all, and the habit worth building is looking for an overtaking rider every single time you turn right.",
        trap: "Not seeing a cyclist is not the same as there not being one. The manual's phrasing is to train yourself to look even when you think there is nobody around.",
        excerptKey: "no-right-turn-in-bike-lane",
        sourceLabel: `${MANUAL} - Chapter X, Turns and Curves`,
        sourceUrl: hb(67),
      },
      {
        id: "hi_s4_24",
        topic: "signals",
        question: "What does a flashing yellow signal mean?",
        choices: [
          "Stop, then proceed when it is safe",
          "The signal is about to fail",
          "Traffic from the side street has the right of way",
          "You may proceed only with caution",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow signal means you may proceed only with caution. It does not require a stop; it warns you that something about the intersection needs attention.",
        context:
          "The statute's version says drivers may proceed through the intersection or past the signal only with caution. Its flashing red twin does require a stop, and then the rules that apply after a stop sign.",
        trap: "Flashing yellow does not confer priority. The traffic on the cross street is usually facing a flashing red, and it will be pulling out after its own stop.",
        excerptKey: "flashing-yellow",
        sourceLabel: `${MANUAL} - Chapter VI, Flashing Signals`,
        sourceUrl: hb(41),
      },
      {
        id: "hi_s4_25",
        topic: "safety",
        question:
          "The manual describes five kinds of bad driving habit. Which of these is its description of the arrogant driver?",
        choices: [
          "Someone who does not know the meaning of signs and markings",
          "Someone whose attention wanders while driving",
          "Someone purposely in a hurry, with little or no respect for traffic laws or the right of way of others",
          "Someone who cannot be bothered to check their blind spot",
        ],
        correctIndex: 2,
        explanation:
          "Where the impatient driver is simply in a hurry, the manual says the arrogant driver is purposely in a hurry, competing with the vehicle, with little or no respect for traffic laws or for the rights of other drivers and pedestrians.",
        context:
          "The five categories are laziness, impatience, inattention, arrogance and ignorance, and the manual asks you to defend against yourself first before defending against anyone else.",
        trap: "The advice is not to out-drive that person. The manual says never allow yourself to get into competition with an arrogant driver, because there is nothing to gain and too much to lose.",
        excerptKey: "arrogant-driver",
        sourceLabel: `${MANUAL} - Chapter X, Defensive Driving`,
        sourceUrl: hb(59),
      },
      {
        id: "hi_s4_26",
        topic: "sharing",
        question:
          "You are driving behind a motorcycle. What following distance does the manual give as the minimum?",
        choices: [
          "At least 2 seconds",
          "At least 3 seconds",
          "At least 4 seconds",
          "At least one car length for every 10 mph",
        ],
        correctIndex: 0,
        explanation:
          "At least a two-second following distance behind a motorcycle, which the manual says gives the rider room to maneuver or stop in an emergency.",
        context:
          "It then tells you to increase it, because motorists are poor at judging a motorcycle's speed and distance and because a rider forced to avoid something ahead has far less margin than a car does.",
        trap: "Two seconds is the same floor as for a car, and the manual's point is that it is a floor rather than the right answer for a motorcycle.",
        excerptKey: "motorcycle-two-second",
        sourceLabel: `${MANUAL} - Chapter XI, Following Distance`,
        sourceUrl: hb(93),
      },
      {
        id: "hi_s4_27",
        topic: "rules",
        question:
          "What do white directional arrows painted in your lane require?",
        choices: [
          "Nothing; they are advisory",
          "That you use the lane only during peak hours",
          "That you signal before following them",
          "That you move only in the direction the arrow indicates",
        ],
        correctIndex: 3,
        explanation:
          "Directional markings are white arrows or words painted in the traffic lane, and the manual puts the requirement in capitals: you must move only in the direction indicated by the arrow.",
        context:
          "Where arrows show more than one direction you may pick any of them. The sign version, LANE USE CONTROL, is a rectangular black and white sign carrying the same instruction above the road.",
        trap: "Going straight from a lane marked as a turn-only lane is a common failure, and on the road test it is a straightforward deduction for not obeying a traffic control device.",
        excerptKey: "directional-markings",
        sourceLabel: `${MANUAL} - Chapter VI, Pavement Markings`,
        sourceUrl: hb(37),
      },
      {
        id: "hi_s4_28",
        topic: "emergencies",
        question:
          "Your car has broken down and you must walk for help. What does the manual advise?",
        choices: [
          "Walk in the traffic lane so drivers see you",
          "Walk facing traffic and well clear of the roadway, and never walk on a freeway",
          "Walk with the traffic so nobody is startled",
          "Wait until dark, when there is less traffic",
        ],
        correctIndex: 1,
        explanation:
          "Walk facing traffic and well clear of the roadway. On a freeway you do not walk at all - stay with the vehicle until help arrives.",
        context:
          "The rest of the breakdown routine: move the vehicle to a safe place if you can, keep occupants away from traffic, use the hazard lights and flares, raise the hood to signal for help, and be cautious about who stops to offer it.",
        trap: "Setting off along the shoulder of the H-1 is the instinct and the manual bans it outright. A stationary car is easier to see and gives you something to stand behind.",
        excerptKey: "breakdown-walk-facing-traffic",
        sourceLabel: `${MANUAL} - Chapter X, Breakdowns or Engine Failure`,
        sourceUrl: hb(84),
      },
      {
        id: "hi_s4_29",
        topic: "licensing",
        question:
          "How does the manual describe the two types of traffic citation you can be issued in Hawaii?",
        choices: [
          "A parking ticket and a moving violation",
          "A county citation and a state citation",
          "The less serious traffic infraction and the serious traffic crime",
          "A warning and a summons",
        ],
        correctIndex: 2,
        explanation:
          "Hawaii splits them into the less serious traffic infraction and the serious traffic crime. Infractions are dealt with in civil proceedings with fines and license or registration stoppers.",
        context:
          "The consequence differs sharply. Someone with an infraction may pay, write a statement or appear in person. Someone charged with a traffic crime faces possible jail, so a court appearance is required.",
        trap: "Both come on the same piece of paper. The label on the citation tells you which track you are on, and ignoring a traffic crime citation is not an option.",
        excerptKey: "traffic-citations-two-types",
        sourceLabel: `${MANUAL} - Chapter 1, Traffic Citations`,
        sourceUrl: hb(17),
      },
      {
        id: "hi_s4_30",
        topic: "signs",
        question:
          "Which colors does the manual assign to guide and information signs?",
        choices: [
          "Red, yellow and orange",
          "Black and white only",
          "Yellow and black",
          "Green, blue and brown",
        ],
        correctIndex: 3,
        explanation:
          "Green, blue and brown are the guide and information colors, and the manual says they appear mostly on rectangular signs. They cover route markers, distances, parks, recreation and services.",
        context:
          "Set against the rest of the code, the split is clean: red prohibits, yellow warns, orange means road work, black and white sets a required action, and those three tell you where things are.",
        trap: "Guide signs still matter on the road test - missing an exit and then stopping or reversing is a failure, and the manual's answer is to carry on to the next one.",
        excerptKey: "sign-colors-guide",
        sourceLabel: `${MANUAL} - Chapter VI, Colors and Shapes`,
        sourceUrl: hb(43),
      },
      {
        id: "hi_s4_31",
        topic: "speed",
        question:
          "How does the manual describe the relationship between your speed and what you can see?",
        choices: [
          "Speed reduces your field of vision",
          "Speed has no effect on the field of vision",
          "Speed widens your field of vision because you scan further ahead",
          "Speed affects only your reaction time",
        ],
        correctIndex: 0,
        explanation:
          "The manual states it as a heading in its own right: speed reduces your field of vision. The faster you go, the narrower the cone you are actually taking in.",
        context:
          "That is why the seeing task is supposed to occupy your entire attention, with a scanning pattern that puts most of it on the situation ahead and regular glances to the sides, the mirrors and the instrument panel.",
        trap: "The narrowing is not something you feel happening. Many crash statements in the manual's telling begin with I did not see, which usually means I was not paying attention.",
        excerptKey: "speed-reduces-field-of-vision",
        sourceLabel: `${MANUAL} - Chapter X, Attentiveness`,
        sourceUrl: hb(60),
      },
      {
        id: "hi_s4_32",
        topic: "safety",
        question:
          "How does the manual say a lap belt and a shoulder belt should be adjusted?",
        choices: [
          "Both as tight as they will go",
          "Lap belt across the stomach, shoulder belt under the arm",
          "Lap belt snug across the hip bones, shoulder belt loose enough to fit your fist between it and your chest",
          "Lap belt only, with the shoulder belt behind the seat",
        ],
        correctIndex: 2,
        explanation:
          "The lap belt fits snugly across your hip bones and the lower abdomen. The shoulder belt is not quite so tight, loose enough that you can insert your fist between it and your chest.",
        context:
          "The manual's figures explain the urgency: your chances of being killed are five times greater if you are thrown from the car, and it is possible to be killed in a crash at speeds as low as 12 miles per hour if you are not belted.",
        trap: "Tucking the shoulder belt under your arm is treated as not being restrained at all under Hawaii case law, and it puts the load on your ribs instead of your collarbone.",
        excerptKey: "seat-belt-fit",
        sourceLabel: `${MANUAL} - Chapter X, Safety Belts`,
        sourceUrl: hb(61),
      },
      {
        id: "hi_s4_33",
        topic: "rightOfWay",
        question:
          "You want to make a left turn out of a driveway across a bike path. What does the law require?",
        choices: [
          "Yield only to motor vehicles",
          "Sound your horn and proceed slowly",
          "Yield to traffic from the left only",
          "Yield to all vehicles and bicycles on the highway, bike lane or bike path you are entering",
        ],
        correctIndex: 3,
        explanation:
          "The statute names bicycle lanes and bicycle paths twice in the same sentence: you yield to all vehicles or bicycles approaching on the highway, including the bike lane or bike path, that you are about to enter or cross.",
        context:
          "A separate section adds a stop before the bikeway or sidewalk itself. Emerging from an alley, building, private road or driveway, you stop immediately before driving onto the bicycle lane, path, sidewalk or sidewalk area.",
        trap: "A bike path can carry riders in both directions, so checking only for road traffic from your left misses the rider arriving from your right.",
        excerptKey: "hrs-driveway-yield",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-64",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0064"),
      },
      {
        id: "hi_s4_34",
        topic: "impairment",
        question:
          "The manual states one figure for how often alcohol is involved in fatal crashes in the United States. What is it?",
        choices: [
          "About 20 per cent",
          "About 40 per cent",
          "About 60 per cent",
          "About 75 per cent",
        ],
        correctIndex: 1,
        explanation:
          "The manual puts alcohol use as a factor in over 18,000 fatal crashes a year in the United States, about 40 per cent of the total.",
        context:
          "Its point in quoting it is that the problem is not confined to people who drive drunk. It includes anyone who drives after consuming alcohol, including alcohol contained in medicine, because impaired judgment is exactly what stops you noticing.",
        trap: "The figure describes the national picture the manual is drawing on, not Hawaii's own crash statistics, which the pedestrian chapter reports separately.",
        excerptKey: "alcohol-40-percent",
        sourceLabel: `${MANUAL} - Chapter IX, The Problem`,
        sourceUrl: hb(55),
      },
      {
        id: "hi_s4_35",
        topic: "parking",
        question:
          "The manual lists parking positions that are prohibited. Which of these is one of them?",
        choices: [
          "In front of or so close to a fire hydrant that your vehicle could interfere with its use",
          "Within three car lengths of a bus stop",
          "Facing away from the direction of traffic on a one-way street",
          "Under a street light after dark",
        ],
        correctIndex: 0,
        explanation:
          "Blocking a fire hydrant is on the manual's list, phrased as parking in front of or so close to one that your vehicle could interfere with its use.",
        context:
          "The list is written in terms of effect rather than measured distances: too close to a driveway to use it, so close to an intersection that you interfere with traffic, so close to a crosswalk that you block drivers' view of pedestrians.",
        trap: "Hawaii's manual does not give the measured hydrant distance that many states print. It asks whether the hydrant could still be used, which is a wider test than a number.",
        excerptKey: "parking-prohibited-hydrant",
        sourceLabel: `${MANUAL} - Chapter V, Parking`,
        sourceUrl: hb(28),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The rules Hawaii learners argue about afterwards, and the places where the manual on the desk in front of you no longer matches the law. Child seats, phones, helmets, the keep-right rule and the hill-parking rule that is not the mainland one.",
    questions: [
      {
        id: "hi_s5_01",
        topic: "safety",
        question:
          "You are driving in Hawaii and holding your phone in your hand while stopped at a red light. Is that legal?",
        choices: [
          "Yes, because the vehicle is not moving",
          "Yes, if you are not looking at the screen",
          "Yes, if the engine is switched off",
          "No - operating includes being temporarily stationary at a light, and holding the device is the offense",
        ],
        correctIndex: 3,
        explanation:
          "Hawaii's mobile device law defines operating a vehicle to include operation while temporarily stationary because of traffic, a traffic light or a stop sign. Using means holding the device, so it is an offense at the light.",
        context:
          "The only exemption of that shape is narrow: a driver at a complete stop with the engine turned off, in a safe location by the side of the road out of the way of traffic. A red light is none of those things.",
        trap: "This is the single most misunderstood traffic rule in the state, because the manual gives sensible advice about phones and never states the law at all.",
        excerptKey: "hrs-mobile-operate-definition",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-137",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0137"),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_02",
        topic: "licensing",
        question:
          "A 17-year-old with a full class 3 license wants to use a hands-free speakerphone while driving. May they?",
        choices: [
          "Yes, hands-free is legal for every driver",
          "No - no driver under 18 may use even a hands-free mobile electronic device, except to call 911",
          "Yes, provided the device is mounted",
          "Only between 5 a.m. and 11 p.m.",
        ],
        correctIndex: 1,
        explanation:
          "The statute has a separate subsection for young drivers: nobody under eighteen may operate a motor vehicle while using a hands-free mobile electronic device, and the sole exception is a 911 emergency call.",
        context:
          "For everyone else the rule is that holding a device is banned, so hands-free is the workaround. Under 18 there is no workaround at all - the exemption that applies to adults is the one the age limit removes.",
        trap: "Having a full license rather than a provisional one changes nothing here. The line is drawn at eighteen years old, not at the class of license.",
        excerptKey: "hrs-mobile-under-18",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-137",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0137"),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_03",
        topic: "safety",
        question:
          "What is the fine for using a mobile electronic device while driving in a Hawaii school zone?",
        choices: ["$100", "$250", "$300", "$400"],
        correctIndex: 3,
        explanation:
          "Four hundred dollars in a school zone or construction area. Everywhere else it is $300, and the statute names both figures.",
        context:
          "Speeding in the same zones is a separate $250 fine, plus a possible $100 trauma surcharge and a $25 safe routes to school surcharge, so the two offenses stack rather than overlap.",
        trap: "Three hundred is the general figure and the one people remember. The school and construction zone uplift is what the exam is testing.",
        excerptKey: "hrs-mobile-fine",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-137",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0137"),
      },
      {
        id: "hi_s5_04",
        topic: "safety",
        question:
          "You are carrying a three-year-old. How must the child be restrained under current Hawaii law?",
        choices: [
          "An adult lap and shoulder belt is enough at that age",
          "A booster seat with the adult belt",
          "Any child seat, forward or rear facing, without a harness",
          "In a rear-facing or forward-facing child passenger restraint system with a harness",
        ],
        correctIndex: 3,
        explanation:
          "A child aged two but under four must be in a rear-facing or forward-facing child passenger restraint system with a harness that met federal safety standards when it was made.",
        context:
          "The law runs in four bands. Under two is rear-facing with a harness. Two to under four is either orientation, with a harness. Four to under ten needs a harness or booster. Only a child of seven to under ten who is over four feet nine inches may use the adult belt alone.",
        trap: "The manual on your desk still prints the pre-2022 rule, which stopped at age eight and used a four-foot, forty-pound test. Act 122 of 2022 replaced it, and the law is what applies.",
        excerptKey: "hrs-child-four-to-ten",
        sourceLabel: "Hawaii Revised Statutes - Section 291-11.5",
        sourceUrl: hrs("HRS0291/HRS_0291-0011_0005"),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_05",
        topic: "sharing",
        question:
          "A 14-year-old is riding a bicycle to school on a Hawaii street. Is a helmet required?",
        choices: [
          "No, helmets are recommended but never required in Hawaii",
          "Only on a bike path, not on the street",
          "Yes - a helmet is required for anyone under sixteen on a street, bikeway or other public property",
          "Only if the bicycle is rented",
        ],
        correctIndex: 2,
        explanation:
          "Hawaii requires a properly fitted and fastened helmet for anyone under sixteen operating a bicycle on a street, a bikeway or any other public property, and for a child riding in an attached seat or a towed trailer.",
        context:
          "The duty reaches further than the rider. Someone renting out bicycles may not rent one unless every person under sixteen involved is wearing a helmet, and a parent or guardian is liable for the fine of a minor who breaks the rule.",
        trap: "The manual's bicycle chapter says you may not be legally required to wear a helmet. That sentence is written for adults and is wrong for anyone under sixteen.",
        excerptKey: "hrs-bicycle-helmet",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-150",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0150"),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_06",
        topic: "parking",
        question:
          "You are parked facing uphill at a curb in Kaimuki. Which way should the front wheels point?",
        choices: [
          "To the right, toward the curb",
          "To the left, away from the curb",
          "Straight ahead with the handbrake on",
          "It does not matter if the car is in gear",
        ],
        correctIndex: 0,
        explanation:
          "To the right, toward the curb. Hawaii's manual gives one answer for both directions - whether you park uphill or downhill, turn the wheels to the right - and the statute says to turn the front wheels to the curb on any grade.",
        context:
          "The reasoning the manual gives is that the vehicle should roll away from traffic if it gets free, and that all four wheels then have to climb the curb before it can move.",
        trap: "Almost every mainland manual splits this: wheels left facing uphill against a curb, right facing downhill. Hawaii does not, and reciting the mainland version is the single most common wrong answer on this item.",
        excerptKey: "park-hill-wheels-right",
        sourceLabel: `${MANUAL} - Chapter X, Parking on a Hill`,
        sourceUrl: hb(71),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_07",
        topic: "speed",
        question:
          "Under a 2024 change to Hawaii law, when must a slow vehicle on a two-lane road pull off?",
        choices: [
          "Whenever any vehicle is behind it",
          "Whenever it is below the posted limit at all",
          "Only when a sign directs it to",
          "When it is 10 mph or more below the limit, passing is not possible, and five or more vehicles are following",
        ],
        correctIndex: 3,
        explanation:
          "The three conditions have to hold together: ten miles per hour or more below the posted limit, on a two-lane road where passing is not possible or permitted, with a line of five or more vehicles immediately behind. Then you move off at the nearest safe place.",
        context:
          "It is the statutory version of an older instruction in the manual, which already told you not to drive so slowly that you hold back other traffic and to pull off and let it pass.",
        trap: "The duty is qualified: you do not have to pull off where doing so would be unsafe. On many Hawaii roads the nearest safe location is some distance further on.",
        excerptKey: "hrs-five-vehicle-rule",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-41",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0041"),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_08",
        topic: "rules",
        question:
          "You are cruising in the left lane of a four-lane highway, below the speed of the traffic around you and not passing anyone. What does Hawaii law say?",
        choices: [
          "It is fine as long as you are at or under the limit",
          "A vehicle going slower than the normal speed of traffic must be in the right-hand lane or as close to the right edge as practicable",
          "It is fine unless a sign says slower traffic keep right",
          "It applies only to trucks and vehicles towing trailers",
        ],
        correctIndex: 1,
        explanation:
          "The statute requires any vehicle going at less than the normal speed of traffic to be driven in the right-hand lane, or as close as practicable to the right-hand curb or edge, unless it is overtaking or preparing for a left turn.",
        context:
          "The manual says the same in plainer words - when moving slower than other traffic, drive in the extreme right lane - and adds the freeway version: through traffic uses the left or center lanes, and the right lane belongs to the slower vehicles and to traffic joining and leaving.",
        trap: "Being at the limit is not a defense. The test in the statute is the speed of the traffic around you, not the number on the sign.",
        excerptKey: "hrs-keep-right",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-41",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0041"),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_09",
        topic: "rightOfWay",
        question:
          "The traffic signal at a busy intersection has gone completely dark after a storm. How should you treat it?",
        choices: [
          "As a stop for every approach, giving way to whoever arrives first and to the vehicle on your right in a tie",
          "As a green light, since a dark signal cannot show red",
          "As a yield sign for the wider road only",
          "Carry on at normal speed and let the other drivers work it out",
        ],
        correctIndex: 0,
        explanation:
          "A dark signal controls nothing, so the intersection falls back to the ordinary rules. Nobody has priority from a signal, everyone approaches prepared to stop, and where two vehicles arrive together the driver on the left yields to the vehicle on the right.",
        context:
          "The manual's basic speed rule already requires a safe and appropriate speed approaching and crossing any intersection, and it is at its strongest where the control has failed and you cannot know what the other driver believes.",
        trap: "Hawaii drivers report this one going badly at night after a power cut, with cars sailing through in both directions. Assuming everyone else knows the rule is the dangerous part.",
        excerptKey: "hrs-uncontrolled-intersection",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-61",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0061"),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_10",
        topic: "signs",
        question:
          "The manual shows one sign and says it can mean either of two things. Which sign is it?",
        choices: [
          "Divided highway and divided highway ends",
          "Lane ends and road narrows",
          "Slippery when wet and dangerous curve",
          "School crossing and school zone",
        ],
        correctIndex: 3,
        explanation:
          "The manual prints the pentagon-shaped school sign with the caption that it can mean either School Crossing or School Zone. The picture is the same; the message depends on where it is placed.",
        context:
          "The practical difference is what the sign is pointing at. Placed at a crossing it marks that crossing; placed on the approach it tells you there is a school nearby, and reduced speed limits apply on streets near schools and playgrounds.",
        trap: "Hawaii learners name this as one of the manual's genuinely confusing items, because two answers look right and the book says both are.",
        excerptKey: "school-sign-two-meanings",
        sourceLabel: `${MANUAL} - Chapter VI, Guide and Information Signs`,
        sourceUrl: hb(48),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_11",
        topic: "impairment",
        question:
          "Hawaii law defines a highly intoxicated driver. At what level does that begin?",
        choices: ["0.08", "0.10", "0.15", "0.20"],
        correctIndex: 2,
        explanation:
          "Point one five grams of alcohol per 100 milliliters of blood, or per 210 liters of breath. It is a defined term in the statute, not an informal description.",
        context:
          "It carries its own uplift. On a first offense a highly intoxicated driver gets an extra mandatory 48 consecutive hours of imprisonment and an extra six months of revocation, with the revocation period no less than eighteen months.",
        trap: "Point zero eight is where the offense starts, not where the aggravated version does. The two numbers do different jobs in the same statute.",
        excerptKey: "hrs-highly-intoxicated",
        sourceLabel: "Hawaii Revised Statutes - Section 291E-1",
        sourceUrl: hrs("HRS0291E/HRS_0291E-0001"),
      },
      {
        id: "hi_s5_12",
        topic: "licensing",
        question:
          "What does a first conviction for operating a vehicle under the influence cost a Hawaii driver's license?",
        choices: [
          "Revocation for no less than one year and no more than eighteen months, with an ignition interlock throughout",
          "A 30-day suspension",
          "A 90-day suspension with no interlock",
          "Points on the license but no revocation",
        ],
        correctIndex: 0,
        explanation:
          "A first offense brings revocation for between one year and eighteen months, an ignition interlock device on every vehicle the person operates for the whole revocation period, and a 14-hour minimum substance abuse rehabilitation program.",
        context:
          "On top of that the court must impose at least one of 72 hours of community service, between 48 hours and five days of jail, or a fine of $250 to $1,000. Carrying a passenger under fifteen adds a mandatory $500 fine and 48 hours in jail.",
        trap: "The 30-day figure people remember is the temporary driving permit issued when the license is taken administratively at the roadside. The conviction is a different and much longer thing.",
        excerptKey: "hrs-ovuii-first-offense",
        sourceLabel: "Hawaii Revised Statutes - Section 291E-61",
        sourceUrl: hrs("HRS0291E/HRS_0291E-0061"),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_13",
        topic: "rules",
        question:
          "You are passing on a two-lane road and an oncoming car appears. How soon must you be back in your own lane?",
        choices: [
          "Before you draw level with the vehicle you are passing",
          "As soon as you can see the passed vehicle in your mirror",
          "Within 100 feet of the approaching vehicle",
          "Before you come within 200 feet of the approaching vehicle",
        ],
        correctIndex: 3,
        explanation:
          "The statute sets the number: the overtaking vehicle must return to an authorized lane of travel as soon as practicable, and in any event before coming within two hundred feet of any approaching vehicle.",
        context:
          "The manual gives the judgment version - move back when you can see the overtaken vehicle in your interior rear-view mirror - and the abort version: if a conflict appears, brake sharply and drop back, never try to accelerate out of it.",
        trap: "The mirror test and the 200-foot rule are both real and they are not the same test. Two hundred feet closes in a little over a second when both cars are doing 45.",
        excerptKey: "hrs-pass-left-200-feet",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-45",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0045"),
      },
      {
        id: "hi_s5_14",
        topic: "emergencies",
        question:
          "Your accelerator sticks open on a busy street. What does the manual tell you to try first?",
        choices: [
          "Switch the ignition off immediately",
          "Slap the accelerator pedal hard - fully depress it and release it quickly",
          "Pull the parking brake",
          "Shift into neutral and let the engine run to its limiter",
        ],
        correctIndex: 1,
        explanation:
          "Slap the pedal - fully depress and quickly release it - because a pedal that has stuck after being pushed to the floor will often free itself. Only after that does the manual reach for the ignition.",
        context:
          "If it does not free, turn the ignition off, moving the switch only far enough to stop the engine without engaging the steering lock, then brake and pull off the roadway. Power steering and power brakes will need much more effort once the engine is dead.",
        trap: "Going straight to the ignition risks locking the steering column, which is the one thing you still need. That is why the manual puts the pedal first.",
        excerptKey: "accelerator-stuck",
        sourceLabel: `${MANUAL} - Chapter X, Accelerator Stuck Open`,
        sourceUrl: hb(83),
      },
      {
        id: "hi_s5_15",
        topic: "sharing",
        question:
          "When must a bicycle in Hawaii have a white front lamp fitted?",
        choices: [
          "From thirty minutes after sunset until thirty minutes before sunrise",
          "From sunset to sunrise exactly",
          "Only between 8 p.m. and 5 a.m.",
          "Only when riding on a highway with a limit above 35 mph",
        ],
        correctIndex: 0,
        explanation:
          "From thirty minutes after sunset until thirty minutes before sunrise, with a lamp visible from at least five hundred feet to the front. The lamp may be carried on the rider's left arm or leg instead.",
        context:
          "A red rear reflector of at least four square inches, visible for six hundred feet, is required at all times, and side reflectivity or a side-visible lamp is required during the same night hours.",
        trap: "The manual only says you must have a headlight and rear reflector if you ride at night. The statute is the place with the times, the distances and the fact that the reflector requirement never switches off.",
        excerptKey: "hrs-bicycle-lights",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-147",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0147"),
      },
      {
        id: "hi_s5_16",
        topic: "signals",
        question:
          "A pedestrian countdown timer starts counting as you wait to turn. What does it mean for a pedestrian who has not started crossing?",
        choices: [
          "They may cross as long as the count is above five",
          "They may cross at their own risk",
          "They may cross if traffic is stopped",
          "They may not start crossing once the countdown has begun",
        ],
        correctIndex: 3,
        explanation:
          "No pedestrian may start to cross once the countdown begins. Anyone who has partly crossed when it starts must complete the crossing to a sidewalk or safety island before it ends.",
        context:
          "It is the same structure as DON'T WALK: the signal stops new entries and protects people already in the road. Hawaii added the countdown case to the statute expressly in 2019.",
        trap: "A high number on the counter looks like permission and is not. As a driver, the useful reading is that people will start anyway, and you still have to stop for them.",
        excerptKey: "hrs-countdown-timer",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-33",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0033"),
      },
      {
        id: "hi_s5_17",
        topic: "parking",
        question:
          "How long may a child under nine be left alone in a parked car in Hawaii?",
        choices: [
          "Less than five minutes - five minutes or longer is an offense",
          "Ten minutes",
          "Fifteen minutes",
          "As long as the engine is off and the doors are locked",
        ],
        correctIndex: 0,
        explanation:
          "Leaving the vehicle for five minutes or longer with an unattended child under nine inside is an offense, and it applies to an adult passenger as much as to the driver.",
        context:
          "Unattended has its own definition: alone in the vehicle, or in it with a minor under twelve. Any law enforcement officer, firefighter or rescue worker who judges the child to be in danger may use whatever means are reasonably necessary to get them out.",
        trap: "It is not limited to the person responsible for the child. The statute says the duty applies regardless of whether the operator or adult passenger has care or custody of them.",
        excerptKey: "hrs-child-unattended",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-121.5",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0121_0005"),
      },
      {
        id: "hi_s5_18",
        topic: "speed",
        question:
          "What is the fine for speeding in a school zone or a construction area in Hawaii?",
        choices: [
          "$150",
          "$250",
          "$500 for a first offense",
          "It depends on how far over the limit you were",
        ],
        correctIndex: 1,
        explanation:
          "A flat $250, whatever the margin, plus a possible $100 trauma system surcharge and, in a school zone, a $25 surcharge for the safe routes to school program.",
        context:
          "It stops being a fixed fine at the extremes. Thirty or more miles per hour over the zone limit, or eighty or more anywhere in it, and the excessive speeding provision takes over as a petty misdemeanour.",
        trap: "Ordinary speeding elsewhere is priced by the county and by margin. The school and construction zone figure is set by statute and does not slide.",
        excerptKey: "hrs-school-zone-fine",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-104",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0104"),
      },
      {
        id: "hi_s5_19",
        topic: "rightOfWay",
        question:
          "What exactly counts as a pedestrian being in a crosswalk, under Hawaii law?",
        choices: [
          "Both feet on the roadway",
          "Reaching the center line",
          "Standing at the curb with an arm raised",
          "Any part or extension of them - body, wheelchair, cane, crutch or bicycle - beyond the curb and moving onto the roadway",
        ],
        correctIndex: 3,
        explanation:
          "The statute is deliberately generous: any part or extension of the pedestrian, including their body, wheelchair, cane, crutch or bicycle, past the curb or edge of the traversable roadway and moving onto it within an intersection or crosswalk.",
        context:
          "That definition is what triggers the driver's duty to stop, and it appears twice - once in the crosswalk section and once in the traffic signal section - so it applies at signalled and unsignalled crossings alike.",
        trap: "Waiting until somebody is fully committed to the road is too late by design. A white cane extended past the curb is already enough.",
        excerptKey: "hrs-pedestrian-in-crosswalk-definition",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-32",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0032"),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_20",
        topic: "safety",
        question:
          "Hawaii's seat belt law carries a fixed fine per violation. How much is it?",
        choices: ["$25", "$45", "$75", "$100"],
        correctIndex: 1,
        explanation:
          "Forty-five dollars for each violation, plus a $10 surcharge into the neurotrauma special fund and possibly another $10 into the trauma system fund.",
        context:
          "Each unbelted person is a separate violation, and the duty falls on the driver: you may not operate the vehicle unless you are restrained and everyone in it is restrained or in the child restraint their age requires.",
        trap: "The child restraint law is priced quite differently - up to $100 for a first offense plus a mandatory safety class and a $50 driver education assessment, rising to between $500 and $800 for a third.",
        excerptKey: "hrs-seat-belt-fine",
        sourceLabel: "Hawaii Revised Statutes - Section 291-11.6",
        sourceUrl: hrs("HRS0291/HRS_0291-0011_0006"),
      },
      {
        id: "hi_s5_21",
        topic: "rules",
        question:
          "You are on a three-lane road with two-way traffic. When may you use the center lane?",
        choices: [
          "To overtake a vehicle going the same way when the center lane is clear within a safe distance, to prepare for a left turn, or where it is allocated to your direction",
          "At any time, since it is the middle of the road",
          "Only when a sign permits it",
          "Only for right turns",
        ],
        correctIndex: 0,
        explanation:
          "The statute allows exactly three uses of the center lane on a three-lane two-way road: overtaking a vehicle going the same way when the lane is clear within a safe distance, preparation for a left turn, and any period when traffic control devices allocate the lane to your direction.",
        context:
          "It is the general rule behind the two-way left turn lane the manual describes, the one marked with a solid and a dashed yellow line on each side, which is for left turns from either direction and never for passing.",
        trap: "Using the center lane as a running lane on a three-lane road is what puts two cars head-on in it. The permission is always tied to a maneuver.",
        excerptKey: "hrs-three-lane-center",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-49",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0049"),
      },
      {
        id: "hi_s5_22",
        topic: "licensing",
        question:
          "You failed the online learner's permit test on knowledge. When may you try again?",
        choices: [
          "The same day, for a reduced fee",
          "The next working day",
          "After 30 days",
          "After seven days, paying the full fee again",
        ],
        correctIndex: 3,
        explanation:
          "Seven days, and the full test fee again. Honolulu, Hawaii County and Kauai all give the same waiting period.",
        context:
          "Honolulu adds a same-day cap of two attempts, and Hawaii County notes that a disqualified result counts as a failure for the waiting period. Being disqualified is easy: the proctoring software allows two warnings for looking away from the screen and stops the test on the third.",
        trap: "Many states let you retest the next working day. Hawaii does not, so a failed attempt costs a week as well as the fee.",
        excerptKey: "test-honolulu-seven-days",
        sourceLabel:
          "City and County of Honolulu Department of Customer Services - Online Learner's Permit Test",
        sourceUrl: "https://www.honolulu.gov/csd/online-permit-test/",
      },
      {
        id: "hi_s5_23",
        topic: "signs",
        question:
          "You reach a PASS WITH CARE sign at the end of a no-passing zone. What does the manual want you to understand?",
        choices: [
          "Passing is now recommended if you are behind a slow vehicle",
          "The zone has been lifted for the rest of the road",
          "The end of a no-passing zone does not mean it is safe to pass; it means visibility has increased",
          "You may now pass on the right",
        ],
        correctIndex: 2,
        explanation:
          "The manual attaches a note to it: the end of a no-passing zone does not mean it is safe to pass. It means there is increased visibility ahead, and the decision is still yours.",
        context:
          "Everything else in the passing rules still applies past the sign - the 700 to 1,000 feet of clear distance, the ban within 100 feet of an intersection or railroad crossing, and the requirement to be back in your lane before you are 200 feet from an oncoming car.",
        trap: "The sign reads like permission and is only the removal of a prohibition. The judgment it hands back to you is the whole point of the note.",
        excerptKey: "end-of-no-passing-zone",
        sourceLabel: `${MANUAL} - Chapter V, No Passing Rules`,
        sourceUrl: hb(31),
      },
      {
        id: "hi_s5_24",
        topic: "impairment",
        question:
          "Hawaii's implied consent rule applies to whom, exactly?",
        choices: [
          "Any person who operates a motor vehicle on the public highways in Hawaii",
          "Only drivers who have been arrested",
          "Only drivers licensed in Hawaii",
          "Only drivers under 21",
        ],
        correctIndex: 0,
        explanation:
          "Anyone who operates a motor vehicle on the public highways in Hawaii is deemed to have given consent to be tested for the amount of alcohol in their blood. Consent comes with driving, not with the license.",
        context:
          "That is why refusing carries its own penalty rather than simply leaving the state without evidence: revocation for one, two or four years depending on prior alcohol enforcement contacts, and you can still be charged anyway.",
        trap: "A visitor driving on an out-of-state or foreign license is caught by it too. The trigger is operating on Hawaii's public highways.",
        excerptKey: "implied-consent",
        sourceLabel: `${MANUAL} - Chapter IX, Implied Consent`,
        sourceUrl: hb(55),
      },
      {
        id: "hi_s5_25",
        topic: "sharing",
        question:
          "How does the statute describe a school bus stop, and how far back must you stop?",
        choices: [
          "At the crosswalk, on any road anywhere",
          "Fifty feet, on any highway",
          "Ten feet, in a business district",
          "Not less than twenty feet from the bus, on a highway or road in a residential area",
        ],
        correctIndex: 3,
        explanation:
          "The statute requires a stop not less than twenty feet from the school bus, and its terms are limited to a bus stopped on a highway or road in a residential area with its visual signals actuated.",
        context:
          "The manual's version drops both details - it says stop before reaching the bus, and says nothing about a residential area. Either way, the duty itself is the same: you stop, and you do not move until the bus goes or the lamps go out.",
        trap: "The manual also says failing to stop can cost $1,000, while the statute sets the maximum at $500 with community service as an alternative. The safe course is to treat the duty as absolute and not to rely on either fine figure.",
        excerptKey: "hrs-school-bus-stop",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-95",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0095"),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_26",
        topic: "emergencies",
        question:
          "What does Hawaii law call the offense of driving carelessly enough to cause a collision or an injury?",
        choices: [
          "Reckless driving",
          "Inattention to driving",
          "Negligent operation",
          "Failure to exercise due care",
        ],
        correctIndex: 1,
        explanation:
          "Inattention to driving: operating a vehicle negligently so as to cause a collision with, or injury or damage to, any person, vehicle or other property. It carries up to $500 or thirty days, plus a possible trauma surcharge.",
        context:
          "Reckless driving is the separate and heavier offense - operating in disregard of the safety of persons or property - and it carries up to $1,000 or thirty days.",
        trap: "The two names sound like informal descriptions and are both defined offenses with different tests. Inattention needs a result; recklessness needs a state of mind.",
        excerptKey: "hrs-inattention",
        sourceLabel: "Hawaii Revised Statutes - Section 291-12",
        sourceUrl: hrs("HRS0291/HRS_0291-0012"),
      },
      {
        id: "hi_s5_27",
        topic: "rules",
        question:
          "You are following a vehicle towing another vehicle on an open road. What does the towing driver have to do for you?",
        choices: [
          "Leave enough space ahead of their vehicle for an overtaking vehicle to occupy safely",
          "Stay below 35 mph",
          "Use hazard lights the whole way",
          "Pull over every mile to let traffic past",
        ],
        correctIndex: 0,
        explanation:
          "The manual puts the duty on the vehicle doing the towing: leave enough space ahead of your vehicle to allow an overtaking vehicle to occupy that space safely.",
        context:
          "The statute applies the same idea to trucks and to vehicles in a caravan or motorcade outside a business or residence district, so that a passing driver always has a gap to drop into. Funeral processions are excepted.",
        trap: "It is a rule about the space in front, not behind. The gap has to already exist when you begin your pass, which is why the towing driver has to keep it there.",
        excerptKey: "towing-leave-space",
        sourceLabel: `${MANUAL} - Chapter V, Following Too Closely`,
        sourceUrl: hb(27),
      },
      {
        id: "hi_s5_28",
        topic: "parking",
        question:
          "How does the manual describe double parking in Hawaii?",
        choices: [
          "Legal for up to five minutes with the hazard lights on",
          "Legal if a passenger stays in the vehicle",
          "Legal outside business hours",
          "Prohibited, whether or not you remain in the vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Parking on the roadway side of another car stopped at the edge of the road is prohibited whether you remain in the vehicle or not. The manual spells the exception out precisely because people assume there is one.",
        context:
          "It is on the same list as parking that leaves less than ten feet of street width for traffic to move through, and parking anywhere your vehicle is hazardous to other traffic, which will get it towed.",
        trap: "Sitting in the car with the engine running is the version everybody thinks is allowed. The manual closes it in the same sentence.",
        excerptKey: "parking-double-park",
        sourceLabel: `${MANUAL} - Chapter V, Parking`,
        sourceUrl: hb(28),
      },
      {
        id: "hi_s5_29",
        topic: "signals",
        question:
          "A green light comes on for you at the same moment a car is finishing a left turn across your path. What does the statute say?",
        choices: [
          "You have priority because you have the green",
          "Both of you must stop",
          "You must yield to vehicles and pedestrians lawfully within the intersection or an adjacent crosswalk",
          "The turning driver must reverse out of your way",
        ],
        correctIndex: 2,
        explanation:
          "The green indication comes with a condition attached: vehicular traffic facing it, including vehicles turning right or left, yields to other vehicles and to pedestrians lawfully within the intersection or an adjacent crosswalk when the signal is shown.",
        context:
          "The manual's version is the same rule in fewer words - a green light means go straight ahead or turn, and you must yield to all pedestrians and vehicles already in the intersection.",
        trap: "Green is permission to enter, not a claim on space already occupied. Someone clearing the intersection was there before your signal changed.",
        excerptKey: "hrs-green-yield",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-32",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0032"),
      },
      {
        id: "hi_s5_30",
        topic: "licensing",
        question:
          "A provisional licensee turns 19 next month and has not converted to a full license. What happens?",
        choices: [
          "The provisional license expires on their nineteenth birthday",
          "It converts automatically to a full license",
          "It stays valid until the next scheduled renewal",
          "It becomes an instruction permit again",
        ],
        correctIndex: 0,
        explanation:
          "The provisional license expires on the licensee's nineteenth birthday. The graduated licensing brochure states it plainly and the statute carries the same rule.",
        context:
          "The conversion needs the provisional license held for at least six months, no pending violations, and an age of at least seventeen. If the expiry falls on a weekend or a county holiday, you must convert by the last working day before it.",
        trap: "Nothing happens automatically. Letting the date pass means going back to the beginning of the process rather than simply being late.",
        excerptKey: "gdl-provisional-expires-19",
        sourceLabel:
          "Hawaii Department of Transportation - Graduated Licensing Program brochure",
        sourceUrl: "https://hidot.hawaii.gov/highways/files/2017/01/GDL-Brochure.pdf",
        commonlyMissed: true,
      },
      {
        id: "hi_s5_31",
        topic: "speed",
        question:
          "How does the manual describe the relationship between excessive speed and crashes in Hawaii?",
        choices: [
          "Speed is a minor factor compared with alcohol",
          "Speed matters only on freeways",
          "Speed is relevant only in wet weather",
          "Excessive speed for conditions is the major cause of most crashes",
        ],
        correctIndex: 3,
        explanation:
          "The manual opens its speed restrictions section with it: excessive speed for conditions is the major cause of most crashes, and it repeats the point in the safe driving chapter.",
        context:
          "It adds an observation about why: most vehicles can reach speeds far beyond the capabilities of the driver, the road and the vehicle itself, and the driver is the only part of that chain that decides.",
        trap: "For conditions is the load-bearing phrase. A speed under the posted limit can still be excessive on a wet, narrow or crowded road, and the basic rule catches it.",
        excerptKey: "excessive-speed-cause",
        sourceLabel: `${MANUAL} - Chapter V, Speed Restrictions`,
        sourceUrl: hb(28),
      },
      {
        id: "hi_s5_32",
        topic: "safety",
        question:
          "The manual names one bad habit as the likely cause of a new driver's first crash. Which combination?",
        choices: [
          "Driving too fast and following too closely",
          "Failing to turn your head to check before changing lanes or pulling out, combined with failing to signal",
          "Playing music too loudly and eating at the wheel",
          "Braking late and steering with one hand",
        ],
        correctIndex: 1,
        explanation:
          "The manual traces the head check being reduced to a mirror glance and then to an occasional check, pairs it with failing to signal before changing lanes or pulling away from the curb, and says allowing the combination to develop could cause your first crash.",
        context:
          "It files both under laziness, one of five habit categories - laziness, impatience, inattention, arrogance and ignorance - and says good habits form exactly the same way as bad ones, by repetition.",
        trap: "Neither half is dangerous on its own very often, which is why the habit sets. It is the pair that removes both your information and everyone else's.",
        excerptKey: "first-crash-habits",
        sourceLabel: `${MANUAL} - Chapter X, Driving Habits`,
        sourceUrl: hb(57),
      },
      {
        id: "hi_s5_33",
        topic: "sharing",
        question:
          "The manual explains why a motorcyclist moves around within their lane. What is the main reason it gives?",
        choices: [
          "To position themselves to see and be seen, and to keep away from road hazards",
          "To signal that they are about to turn",
          "To let faster traffic share the lane",
          "To keep the engine cool in slow traffic",
        ],
        correctIndex: 0,
        explanation:
          "The rider positions themselves in the lane to see and be seen, often to the left of it, and moves within it to increase the distance from potholes, tracks and debris that a car would simply drive over.",
        context:
          "The manual warns that those lateral movements are sometimes sudden, and adds a separate hazard: turn signals do not cancel themselves on a motorcycle, so a blinking indicator may be left over from the last turn.",
        trap: "Reading lane position as an intention to turn is exactly the misinterpretation the manual names. Wait until the maneuver is unmistakably started.",
        excerptKey: "motorcycle-lane-position",
        sourceLabel: `${MANUAL} - Chapter XI, Lane Position`,
        sourceUrl: hb(91),
        commonlyMissed: true,
      },
      {
        id: "hi_s5_34",
        topic: "signs",
        question:
          "A single solid white line separates you from the lane on your right. What does the law allow?",
        choices: [
          "Free crossing whenever the lane is clear",
          "Crossing only to turn left",
          "No crossing at all",
          "Crossing only in unusual circumstances, and then only with great care",
        ],
        correctIndex: 3,
        explanation:
          "A solid white line marks a lane edge where changing lanes is considered hazardous. It may be crossed only in unusual circumstances, and then only with great care.",
        context:
          "The width tells you how serious the hazard is: a double-width solid white line emphasizes a greater degree of hazard, and a double solid white line prohibits crossing altogether.",
        trap: "Treating a solid white as advisory is common on the freeway approaches, where it usually separates a through lane from an exit-only lane just before the gore.",
        excerptKey: "hrs-solid-white-line",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-38",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0038"),
      },
      {
        id: "hi_s5_35",
        topic: "rightOfWay",
        question:
          "What does the manual tell you to do while you are waiting in the intersection to turn left on a green light?",
        choices: [
          "Turn the wheels left so you are ready to go",
          "Stay behind the stop line until the light turns yellow",
          "Move slowly into the intersection and keep the wheels pointing straight ahead until it is clear",
          "Reverse back behind the line if the gap does not come",
        ],
        correctIndex: 2,
        explanation:
          "Move slowly into the intersection when the light goes green, keep the wheels pointing straight ahead, and turn only when the intersection is clear and it is safe.",
        context:
          "Straight wheels are the safety part. If somebody runs into the back of you while you wait, a car with its wheels turned is pushed into the oncoming lane instead of straight forward.",
        trap: "Pre-turning the wheels feels efficient and is the classic way a rear-end shunt becomes a head-on. The manual specifies the wheel position for that reason.",
        excerptKey: "waiting-to-turn-left",
        sourceLabel: `${MANUAL} - Chapter X, Turns and Curves`,
        sourceUrl: hb(67),
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
      "Thirty questions, the length of the real county knowledge test, mixed the way the manual's own appendix mixes them. Twenty-four correct is a pass; the seventh wrong answer is what ends it.",
    questions: [
      {
        id: "hi_s6_01",
        topic: "signals",
        question:
          "You are stopped at a red light and want to turn right. There is no sign prohibiting it. What must you do?",
        choices: [
          "Come to a complete stop, then turn while yielding to all pedestrians and vehicles",
          "Slow to a crawl and turn if the way is clear",
          "Wait for the green, because right on red is not permitted in Hawaii",
          "Turn immediately, since the through traffic is stopped",
        ],
        correctIndex: 0,
        explanation:
          "After stopping you may turn right unless a sign prohibits it, and you must yield to all pedestrians and all vehicles when you make the turn. The manual repeats the point in its turns section: always come to a complete stop first.",
        context:
          "Counties may ban the movement at any intersection by ordinance, effective once a sign is erected. A separate rule lets you turn left on red from a one-way street into a one-way street where traffic moves to the left.",
        trap: "The rolling right on red is the failure Hawaii examiners see most, and it is a running of the light whether or not anything was coming.",
        excerptKey: "right-on-red",
        sourceLabel: `${MANUAL} - Chapter VI, Traffic Signals`,
        sourceUrl: hb(39),
      },
      {
        id: "hi_s6_02",
        topic: "rules",
        question:
          "You are approaching a hill crest on a two-lane road. What does the manual say about the left half of the roadway?",
        choices: [
          "You may use it if you can see 300 feet ahead",
          "You may use it to pass a bicycle",
          "You may use it if no oncoming vehicle is visible",
          "You must not drive on it",
        ],
        correctIndex: 3,
        explanation:
          "Approaching the top of a hill or a curve is on the manual's list of places where you must not drive on the left half of the roadway, and the statute bars it wherever your view is obstructed enough to create a hazard.",
        context:
          "The other entries on the list are a road with four or more lanes for moving traffic, within 100 feet of or through an intersection or railroad crossing, and within 100 feet of a bridge or tunnel where you cannot see oncoming vehicles.",
        trap: "Not seeing an oncoming vehicle is the definition of the hazard rather than a reason to go. Over the crest is exactly where you cannot see one.",
        excerptKey: "left-half-prohibited",
        sourceLabel: `${MANUAL} - Chapter V, Driving on the Left Side of Roadway`,
        sourceUrl: hb(26),
      },
      {
        id: "hi_s6_03",
        topic: "parking",
        question: "Which of these is on the manual's list of prohibited parking places?",
        choices: [
          "Any space within 100 feet of a school",
          "On a sidewalk or sidewalk area",
          "On any street with a posted limit above 35 mph",
          "Within two car lengths of a crosswalk",
        ],
        correctIndex: 1,
        explanation:
          "Sidewalks and sidewalk areas are on the list, along with driveways, intersections, hydrants, crosswalks, bridges, tunnels, loading zones and any place your vehicle is a hazard to other traffic.",
        context:
          "Hawaii's list is written in terms of the effect rather than in measured distances, so the crosswalk entry reads as parking so close that your vehicle blocks other drivers' view of pedestrians.",
        trap: "Specific footages sound authoritative and mostly come from other states' rules. Hawaii's manual gives distances for only a few items: 12 inches from the curb and 10 feet of remaining street width.",
        excerptKey: "parking-prohibited-crosswalk",
        sourceLabel: `${MANUAL} - Chapter V, Parking`,
        sourceUrl: hb(28),
      },
      {
        id: "hi_s6_04",
        topic: "safety",
        question:
          "You are driving into thick fog on the Saddle Road. What does the manual tell you to do with the headlamps?",
        choices: [
          "Switch to high beam for more light",
          "Switch them off and use parking lights",
          "Use low beam, and sharply reduce speed",
          "Use the hazard flashers instead",
        ],
        correctIndex: 2,
        explanation:
          "Sharply reduce speed and turn on low beam headlamps. High beams are specifically ruled out because the reflection cuts your own vision and blinds the approaching driver.",
        context:
          "The manual adds a stopping point: if you cannot see at least two car lengths, roughly 40 feet or 12 meters, pull completely off the pavement, stop and then turn the hazard signals on. The same advice covers heavy rain, smoke and snow.",
        trap: "Hazard flashers are the wrong tool while you are moving; the manual says they should never be used then. They come on once you have stopped clear of the road.",
        excerptKey: "fog-low-beam",
        sourceLabel: `${MANUAL} - Chapter X, Driving in Inclement Weather`,
        sourceUrl: hb(76),
      },
      {
        id: "hi_s6_05",
        topic: "rightOfWay",
        question:
          "Two vehicles reach a four-way stop, one straight ahead of the other's right side, at exactly the same moment. Who proceeds first?",
        choices: [
          "The one that stopped for longer",
          "The one going straight",
          "The larger vehicle",
          "The vehicle on the right",
        ],
        correctIndex: 3,
        explanation:
          "When two vehicles arrive at about the same time, the driver on the left yields to the vehicle on the right. The rule breaks the tie that order of arrival cannot.",
        context:
          "Order of arrival comes first. Everyone stops at the line, everyone yields to any vehicle that is already in the intersection or close enough to be an immediate hazard, and the right-hand rule only settles simultaneous arrivals.",
        trap: "Direction of travel decides nothing at a four-way stop in Hawaii, and neither does vehicle size, however confidently the other driver behaves.",
        excerptKey: "row-yield-right",
        sourceLabel: `${MANUAL} - Chapter V, The Rules of Right-of-Way`,
        sourceUrl: hb(32),
      },
      {
        id: "hi_s6_06",
        topic: "signs",
        question:
          "You see a rectangular black and white sign showing arrows for each lane at an intersection. What is it?",
        choices: [
          "A lane use control sign, and you must move only in the direction indicated for your lane",
          "A guide sign showing where each lane goes",
          "A warning that the lanes merge ahead",
          "A sign that applies only to trucks",
        ],
        correctIndex: 0,
        explanation:
          "Lane use control signs are rectangular black and white signs indicating that turning movements are required, or that unusual movements are permitted, from particular lanes. You must move only in the direction shown for your lane.",
        context:
          "The pavement version does the same job: white arrows painted in the lane, which you must follow, and where the arrows show more than one direction you may choose any of them.",
        trap: "Black and white is the required-action combination, so nothing in that family is advisory. Guide signs are green, blue or brown.",
        excerptKey: "lane-use-control-signs",
        sourceLabel: `${MANUAL} - Chapter VI, Regulatory Signs`,
        sourceUrl: hb(45),
      },
      {
        id: "hi_s6_07",
        topic: "licensing",
        question:
          "What is the minimum age at which a Hawaii driver may hold a full class 3 driver's license?",
        choices: ["15 and a half", "16", "16 and a half", "17"],
        correctIndex: 3,
        explanation:
          "Seventeen. Anyone under 18 must go through the graduated program first: 180 days on an instruction permit from 15 and a half, then at least six months on a provisional license from 16.",
        context:
          "The provisional stage also requires a State certified driver's education course with both the classroom and behind-the-wheel certificates, and a road test. No pending violations may be outstanding at conversion.",
        trap: "Sixteen is when the provisional license becomes available, and it is the age most people give. Seventeen is the earliest for the full one.",
        excerptKey: "class-3-age-17",
        sourceLabel: `${MANUAL} - Chapter 1, Types of Licenses`,
        sourceUrl: hb(12),
      },
      {
        id: "hi_s6_08",
        topic: "sharing",
        question:
          "How must bicyclists ride on a Hawaii roadway when they are traveling in a group?",
        choices: [
          "Two abreast wherever the lane is wide",
          "Single file",
          "In the center of the lane so drivers see them",
          "Three abreast on a shoulder",
        ],
        correctIndex: 1,
        explanation:
          "On the roadway, bicyclists must ride single file. Riding two abreast is allowed only in a bicycle lane or on a path wide enough that it does not impede traffic.",
        context:
          "Riders traveling slower than traffic ride as near to the right edge as practicable, with named exceptions: preparing for a left turn, passing another bicycle, and avoiding an obstacle. On a one-way road they may legally use the left edge.",
        trap: "The two-abreast permission belongs to lanes and paths, not to the roadway, and the manual's phrasing makes the distinction explicit.",
        excerptKey: "bicycle-single-file",
        sourceLabel: `${MANUAL} - Chapter XIII, Bicyclists`,
        sourceUrl: hb(98),
      },
      {
        id: "hi_s6_09",
        topic: "impairment",
        question:
          "What does the manual say about consuming or possessing alcohol on a public highway in Hawaii?",
        choices: [
          "It is against the law on any public highway or public sidewalk",
          "It is legal for passengers only",
          "It is legal outside a vehicle",
          "It is legal if the container is under 12 ounces",
        ],
        correctIndex: 0,
        explanation:
          "The manual puts it in capitals: it is against the law to consume or possess any alcoholic beverage on any public highway or any public sidewalk.",
        context:
          "The companion rule covers the car itself. Storing an opened container in the area normally occupied by the driver or passengers is prohibited on any public road, so it has to go in the trunk or an area nobody sits in.",
        trap: "Being a passenger rather than the driver does not help. Both the consumption rule and the open container rule reach everyone in the vehicle.",
        excerptKey: "open-container",
        sourceLabel: `${MANUAL} - Chapter IX, Alcohol and Other Drugs`,
        sourceUrl: hb(56),
      },
      {
        id: "hi_s6_10",
        topic: "emergencies",
        question:
          "An oncoming vehicle is in your lane and closing. What does the manual tell you to do?",
        choices: [
          "Move into the oncoming lane to swap positions",
          "Brake hard and hold your line",
          "Flash your lights, honk, slow quickly and steer right out of the lane into any clear area",
          "Accelerate to get past before the gap closes",
        ],
        correctIndex: 2,
        explanation:
          "Flash your lights and sound the horn, slow quickly, and steer to the right out of the lane into whatever clear area you can find. Drive off the road if you have to, avoiding solid objects and pedestrians.",
        context:
          "The manual is explicit about the direction, in capitals: do not enter the oncoming traffic lane. Steering left works only if the other driver keeps making the same mistake, and their most likely next move is to correct.",
        trap: "Swapping lanes is the fatal version of this. The moment they wake up and steer back, you are head-on again with no room left.",
        excerptKey: "oncoming-in-your-lane",
        sourceLabel: `${MANUAL} - Chapter X, Oncoming Vehicle in Your Lane`,
        sourceUrl: hb(82),
      },
      {
        id: "hi_s6_11",
        topic: "speed",
        question:
          "You are on a freeway exit ramp with an advisory speed posted on the exit sign. What is that speed for?",
        choices: [
          "The speed to hold on the freeway before you exit",
          "A minimum speed for the ramp",
          "The speed limit for the road you are joining",
          "The speed to slow to once you are on the ramp",
        ],
        correctIndex: 3,
        explanation:
          "You maintain your speed until you are completely into the exit ramp, then slow down smoothly to the posted figure. Braking on the freeway itself puts you in conflict with the traffic still traveling on it.",
        context:
          "The rest of the leaving sequence is watch the exit signs, signal, move into the exit lane, and if you miss it, do not stop and do not back up - continue to the next exit.",
        trap: "Slowing early on the freeway is the natural instinct and the wrong place to do it. The deceleration lane exists precisely so you do not have to.",
        excerptKey: "freeway-exit-speed",
        sourceLabel: `${MANUAL} - Chapter X, Leaving the Freeway`,
        sourceUrl: hb(80),
      },
      {
        id: "hi_s6_12",
        topic: "rules",
        question:
          "What does the manual say about parking a vehicle on a public road to wash it or display it for sale?",
        choices: [
          "It is prohibited",
          "It is allowed on weekends",
          "It is allowed in residential areas only",
          "It is allowed if the vehicle is registered in that county",
        ],
        correctIndex: 0,
        explanation:
          "Parking on any public road to repair a vehicle other than in an emergency, or to wash one, or to display one for sale, is on the manual's prohibited list.",
        context:
          "It belongs to a group of rules about a street being for movement rather than storage: no continuous parking beyond 24 hours, no vehicle extending outside a marked space, and nothing parked where it is hazardous to other traffic.",
        trap: "Emergency repair is the only carve-out, and it is for a breakdown rather than for maintenance you decided to do at the curb.",
        excerptKey: "parking-repair-wash-display",
        sourceLabel: `${MANUAL} - Chapter V, Parking`,
        sourceUrl: hb(28),
      },
      {
        id: "hi_s6_13",
        topic: "signals",
        question:
          "Which of these does the manual list as a common signaling error?",
        choices: [
          "Signaling too early on a long straight",
          "Failing to signal a turn when stopped at an intersection until the light changes",
          "Signaling with the hand when the electric signals work",
          "Cancelling the signal after completing a turn",
        ],
        correctIndex: 1,
        explanation:
          "Waiting until the light changes to signal an intended turn is the first error on the manual's list, alongside failing to signal a right turn, signaling after the movement has started, and not signaling when nobody appears to be watching.",
        context:
          "The manual sums it up in three rules: signal every time you intend to turn or change lanes, begin well in advance so others have time to see and understand, and remember that the signal indicates intent and does not give you the right to move.",
        trap: "The driver behind you needs to know before the light changes, not after. By the time the signal comes on they have already chosen their lane.",
        excerptKey: "signaling-errors",
        sourceLabel: `${MANUAL} - Chapter X, Use of Turn Signals`,
        sourceUrl: hb(74),
      },
      {
        id: "hi_s6_14",
        topic: "safety",
        question:
          "You are driving at night and an oncoming driver's lights are dazzling you. What does the manual say to do?",
        choices: [
          "Switch to high beam so they do the same",
          "Look directly at their headlights so your eyes adjust",
          "Close one eye until they pass",
          "Flash your high beams once, then look at the right edge of the road and use the markings as a guide",
        ],
        correctIndex: 3,
        explanation:
          "Flash your high beams once as a reminder, then look toward the right edge of the road and steer using the lane markings or reflectors as a guide until the vehicle has passed.",
        context:
          "The rest of the night-driving list: protect your eyes from bright light beforehand, keep the glass clean inside and out, reduce speed so you can stop within the distance you can see, and never use high beams when approaching or following another vehicle.",
        trap: "Leaving your own high beams on is retaliation that blinds you both. The single flash is a signal, not a contest.",
        excerptKey: "night-glare",
        sourceLabel: `${MANUAL} - Chapter X, Night Driving`,
        sourceUrl: hb(77),
      },
      {
        id: "hi_s6_15",
        topic: "sharing",
        question:
          "Why does the manual tell you to look twice, and then a third time, before turning across a motorcycle's path?",
        choices: [
          "Motorcycles often ride without lights during the day",
          "Motorcycles usually exceed the speed limit",
          "A motorcycle's small profile makes it look further away and slower than it is",
          "Motorcycles cannot brake as quickly as cars",
        ],
        correctIndex: 2,
        explanation:
          "The small profile of a motorcycle makes it appear further away and traveling slower than it actually is, which is why the manual asks for a second look and then a third before you commit.",
        context:
          "Its instruction is unambiguous, in capitals: make sure you see the motorcycle and know its speed before you start to turn or enter an intersection. Intersections are where most of these crashes happen.",
        trap: "The error is a perception error rather than a rule error, which is why knowing the right of way rule does not protect you from it.",
        excerptKey: "motorcycle-appears-farther",
        sourceLabel: `${MANUAL} - Chapter XI, Size`,
        sourceUrl: hb(90),
        commonlyMissed: true,
      },
      {
        id: "hi_s6_16",
        topic: "parking",
        question:
          "You are about to leave a parking space and pull into traffic. Who bears the chief responsibility for avoiding a collision?",
        choices: [
          "The driver leaving the parking space",
          "The approaching driver, who has the better view",
          "Both equally",
          "Whoever is traveling faster",
        ],
        correctIndex: 0,
        explanation:
          "The manual assigns it directly: the chief responsibility for avoiding a collision lies with the driver who is leaving a parking space.",
        context:
          "The routine that goes with it is look, signal, yield. Look back before driving from the curb, signal, and give way to traffic already on the road, because you are the one entering it.",
        trap: "A turn signal does not transfer the responsibility. It announces the intention; the duty to yield stays with you.",
        excerptKey: "backing-responsibility",
        sourceLabel: `${MANUAL} - Chapter X, Backing Your Vehicle`,
        sourceUrl: hb(64),
      },
      {
        id: "hi_s6_17",
        topic: "rightOfWay",
        question:
          "You are approaching a stop sign at an intersection where a building blocks your view of the cross street. What does the manual say?",
        choices: [
          "Stop once at the line and then go, since you have complied",
          "Stop in the crosswalk instead, where you can see",
          "Sound the horn as you pull out",
          "Stop at the line, then move ahead slowly and stop again where you can see approaching traffic",
        ],
        correctIndex: 3,
        explanation:
          "When you cannot see other traffic from the first stop, move ahead slowly and stop again at the point where you can see approaching traffic. The first stop satisfies the sign; the second one is what keeps you alive.",
        context:
          "The statute puts the same idea into its stop sign rule: where there is no stop line or crosswalk, you stop at the point nearest the intersecting roadway where you have a view of approaching traffic.",
        trap: "Stopping in the crosswalk to get the view is not the alternative. You stop at the line first, then creep, which is what the manual describes.",
        excerptKey: "stop-sign-second-stop",
        sourceLabel: `${MANUAL} - Chapter VI, Regulatory Signs`,
        sourceUrl: hb(44),
      },
      {
        id: "hi_s6_18",
        topic: "licensing",
        question:
          "You are taking the road test. What must you bring, besides the vehicle?",
        choices: [
          "A witness who is not related to you",
          "A licensed driver to accompany you to the testing station",
          "Two forms of proof of address",
          "A completed logbook of practice hours",
        ],
        correctIndex: 1,
        explanation:
          "You must be accompanied to the testing station by a licensed driver, and provide a vehicle in safe operating condition with a current registration, a current safety inspection certificate and an insurance identification card.",
        context:
          "Any safety defect must be fixed before the test. Passengers are not allowed during it, you will not be asked to break any law, and an autocycle may not be used for the category 3 performance test.",
        trap: "Hawaii does not require a logged number of supervised practice hours, so a logbook is not the answer. It requires driver education for anyone under 18 and 180 days on the permit.",
        excerptKey: "road-test-vehicle",
        sourceLabel: `${MANUAL} - Chapter 1, Driver Performance Test`,
        sourceUrl: hb(15),
      },
      {
        id: "hi_s6_19",
        topic: "signs",
        question:
          "You are driving toward a traffic island painted on the roadway ahead. What does the manual say?",
        choices: [
          "You should never drive into or across a traffic island",
          "You may cross it if you are turning left",
          "You may cross it when no pedestrians are present",
          "You may use it as a waiting area for a turn",
        ],
        correctIndex: 0,
        explanation:
          "The manual states it in capitals: you should never drive into or across a traffic island. They direct traffic into separate lanes, and where they protect people standing in the roadway they are called safety islands.",
        context:
          "The construction may be paint alone or any combination of curbing, paving and landscaping, so an island that is only painted is still an island and still off limits.",
        trap: "A painted island looks like spare road when you are lining up a turn. That is exactly the space a pedestrian may be standing in.",
        excerptKey: "traffic-islands",
        sourceLabel: `${MANUAL} - Chapter VI, Pavement Markings`,
        sourceUrl: hb(38),
      },
      {
        id: "hi_s6_20",
        topic: "rules",
        question:
          "How many people may sit in the front seat of a car in Hawaii before it becomes a problem?",
        choices: [
          "Any number, provided everyone is belted",
          "Two, including the driver",
          "Four, if the vehicle is a bench-seat truck",
          "More than three may constitute interference with the driver, which is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "Driving with more than three persons in the front seat may constitute interference with the driver, and the manual says such interference is prohibited.",
        context:
          "It sits with the other rules about the driver's working space. The seat belt law is separate and stricter in practice, since it requires a belt assembly for every occupant front and back.",
        trap: "The number is more than three in the front seat, not three in the car. It only bites where a bench seat makes a fourth person physically possible.",
        excerptKey: "interference-front-seat",
        sourceLabel: `${MANUAL} - Chapter V, Interference with Driver`,
        sourceUrl: hb(29),
      },
      {
        id: "hi_s6_21",
        topic: "emergencies",
        question:
          "A crash has happened and someone is bleeding badly. What does the manual tell you about moving them?",
        choices: [
          "Move them to the side of the road immediately",
          "Move them only if a doctor is present",
          "Do not move them unnecessarily, keep them warm, and use direct pressure on severe bleeding",
          "Sit them upright against the vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Act promptly but carefully. Do not move the injured unnecessarily, because unskilled handling can turn minor injuries into serious ones. Keep them warm, stop severe bleeding with direct pressure, and protect them from oncoming traffic.",
        context:
          "The first call is to the nearest police agency, asking for an ambulance if it is needed. Warning approaching traffic is a separate step in the manual's sequence, and it is what stops a second crash into the first.",
        trap: "Dragging someone clear feels like helping and can convert a spinal injury into paralysis. The exception is a danger you cannot remove, such as fire.",
        excerptKey: "crash-do-not-move-injured",
        sourceLabel: `${MANUAL} - Chapter VII, Crash Procedures`,
        sourceUrl: hb(52),
      },
      {
        id: "hi_s6_22",
        topic: "impairment",
        question:
          "A police officer suspects you of driving under the influence and asks you to take a test. What is the position if you refuse?",
        choices: [
          "You may still be charged with driving under the influence, and you risk losing your license for one, two or four years",
          "The case cannot proceed without a test",
          "You will receive a fine but keep your license",
          "The refusal is treated as an admission of guilt",
        ],
        correctIndex: 0,
        explanation:
          "Refusal may cost you the license for one, two or four years depending on your prior alcohol enforcement contacts, and the manual adds that you may be charged with driving under the influence anyway.",
        context:
          "The administrative side moves immediately. At .08 or more, or on a refusal, the license is taken and a 30-day temporary driving permit issued, and anyone revoked may request a hearing.",
        trap: "A refusal is not the same as an admission in law, and it is not a way out either. The manual points out that a test can also prove you were not under the influence.",
        excerptKey: "refusal-revocation",
        sourceLabel: `${MANUAL} - Chapter IX, The Law`,
        sourceUrl: hb(56),
      },
      {
        id: "hi_s6_23",
        topic: "speed",
        question:
          "What does the manual give as the two things rain does to driving?",
        choices: [
          "It cools the brakes and softens the tires",
          "It reduces engine power and increases fuel use",
          "It clears dust and improves grip after the first hour",
          "It reduces the driver's visibility and changes the condition of the road surface",
        ],
        correctIndex: 3,
        explanation:
          "Rain causes two basic problems: it reduces your visibility and it changes the condition of the road surface. Everything else in that section follows from those two.",
        context:
          "The first few drops are the worst moment, because the oil dropped by passing cars has not washed away yet and the manual compares the result to driving on ice. It asks for reduced speed, extra caution and at least twice the normal following distance.",
        trap: "The dangerous stretch is the start of the shower, not the downpour. By the time it is raining hard the oil has usually gone.",
        excerptKey: "first-rain-slippery",
        sourceLabel: `${MANUAL} - Chapter X, Driving in Inclement Weather`,
        sourceUrl: hb(75),
      },
      {
        id: "hi_s6_24",
        topic: "safety",
        question:
          "The manual gives a check for whether your steering has too much free play. What is the figure with power steering?",
        choices: [
          "No more than one inch",
          "No more than two inches",
          "No more than three inches",
          "No more than four inches",
        ],
        correctIndex: 1,
        explanation:
          "No more than two inches of free play with power steering, checked with the engine running, or three inches without it. The wheel should turn smoothly lock to lock and the car should not pull or shimmy.",
        context:
          "It is one of a set of driver checks the manual expects you to be able to make: the brake test at 4 to 8 mph, the tire tread penny test, the headlamp and signal checks, and the warning lamp check when the ignition is first turned on.",
        trap: "The two figures are for different systems, and the smaller one belongs to power steering because the assistance masks the slack.",
        excerptKey: "steering-free-play",
        sourceLabel: `${MANUAL} - Chapter II, Vehicle Condition and Maintenance`,
        sourceUrl: hb(20),
      },
      {
        id: "hi_s6_25",
        topic: "signals",
        question:
          "A green arrow is lit over a lane on a reversible road. What does it mean?",
        choices: [
          "You may use that lane",
          "You must turn in the direction shown",
          "The lane is closed to through traffic",
          "The lane is about to reverse direction",
        ],
        correctIndex: 0,
        explanation:
          "Among the lane control signals, the green arrow simply means you may use that lane. The red X means you must not, and the yellow X means move out because the lane is about to be given to oncoming traffic.",
        context:
          "Lane control signals sit over the lane they control, which is what separates them from the green turn arrow in a traffic signal head. That one requires you to go in the direction it points.",
        trap: "The two green arrows do different jobs. Overhead in a lane control signal it is permission to occupy the lane; in a signal head it is a protected turn you must follow.",
        excerptKey: "lane-control-green-arrow",
        sourceLabel: `${MANUAL} - Chapter VI, Lane Control Signals`,
        sourceUrl: hb(42),
      },
      {
        id: "hi_s6_26",
        topic: "sharing",
        question:
          "What does Hawaii law say about opening a car door into traffic?",
        choices: [
          "It is a matter for civil liability only",
          "It is an offense only if a cyclist is struck",
          "It applies only to the driver's door",
          "It is a traffic violation to open a door unexpectedly so as to create a hazard for moving traffic, including bicyclists",
        ],
        correctIndex: 3,
        explanation:
          "The manual states it as a traffic violation to open a car door unexpectedly so as to create a hazard for moving traffic, including bicyclists. The offense is creating the hazard, not causing a collision.",
        context:
          "The other half of the rule is aimed at you when you are driving past. Approaching a vehicle that has just parked, assume the driver will open the door, and watch for movement inside, brake or reversing lamps, exhaust vapour or the front wheels turning.",
        trap: "The manual tells cyclists to leave at least three feet from parked cars for this reason, which means a rider giving a proper margin is already out in the lane.",
        excerptKey: "car-door-hazard",
        sourceLabel: `${MANUAL} - Chapter XIII, Motorists`,
        sourceUrl: hb(97),
      },
      {
        id: "hi_s6_27",
        topic: "rules",
        question:
          "Which of these is one of the three situations in which the manual allows you to drive on the left half of the roadway?",
        choices: [
          "When the road has four or more lanes for moving traffic",
          "When you are within 100 feet of an intersection",
          "When there is an obstruction in the roadway and oncoming vehicles are not using the left half",
          "When you are approaching a curve",
        ],
        correctIndex: 2,
        explanation:
          "An obstruction in the roadway is one of the three: overtaking on a road with two or three lanes of moving traffic when nothing is coming, an obstruction with the left half clear, and a one-way street.",
        context:
          "The statute adds a condition to the obstruction case that the manual leaves implicit: you yield to any vehicle traveling in the proper direction on the unobstructed portion that is close enough to be an immediate hazard.",
        trap: "The other three options are all from the manual's must-not list, which is printed immediately below the may list on the same page.",
        excerptKey: "left-half-permitted",
        sourceLabel: `${MANUAL} - Chapter V, Driving on the Left Side of Roadway`,
        sourceUrl: hb(26),
      },
      {
        id: "hi_s6_28",
        topic: "signs",
        question:
          "You come across a white edgeline along the right side of the road and a yellow one on the left. What are they for?",
        choices: [
          "They are edgelines, used as a safety guide to mark the limits of the traveled roadway",
          "They mark a bicycle lane on each side",
          "They indicate that passing is prohibited",
          "They mark a school zone",
        ],
        correctIndex: 0,
        explanation:
          "Edgelines are solid white or yellow lines along the edge of the roadway used as a safety guide. White runs along the right edge, and yellow may run along the left edge of divided streets and highways.",
        context:
          "The colors follow the rest of the system. Yellow on your left means the far side of that line belongs to traffic going the other way, or to the median of a divided highway.",
        trap: "A bicycle lane is marked by a solid white line supplemented by official signs or pavement markings, which is what tells you the space beyond it is not just a shoulder.",
        excerptKey: "edgelines",
        sourceLabel: `${MANUAL} - Chapter VI, Pavement Markings`,
        sourceUrl: hb(35),
      },
      {
        id: "hi_s6_29",
        topic: "rightOfWay",
        question:
          "You are turning right at a green light and a pedestrian steps into the crosswalk you are turning across. What must you do?",
        choices: [
          "Complete the turn, since your light is green",
          "Sound your horn and turn slowly",
          "Accelerate to clear the crosswalk first",
          "Stop and let them cross",
        ],
        correctIndex: 3,
        explanation:
          "A green light permits the turn and does not clear the crosswalk. You yield to pedestrians lawfully in the intersection or in an adjacent crosswalk, and the crosswalk rule requires you to stop for someone crossing on your half of the road.",
        context:
          "The manual gives the driver's checklist for turns: watch for pedestrians, bicyclists and motorcyclists, who may be hidden by other vehicles, by darkness or by poor weather.",
        trap: "The turning driver is looking left for a gap in traffic while the pedestrian arrives from the right. That mismatch is behind a large share of Hawaii's pedestrian collisions.",
        excerptKey: "hrs-green-yield",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-32",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0032"),
        commonlyMissed: true,
      },
      {
        id: "hi_s6_30",
        topic: "licensing",
        question:
          "What must a Hawaii driver produce on demand, besides the driver's license?",
        choices: [
          "The vehicle's title",
          "A valid motor vehicle or liability insurance identification card for the vehicle being driven",
          "The current safety inspection certificate",
          "Proof of residence in the county",
        ],
        correctIndex: 1,
        explanation:
          "A valid motor vehicle or liability insurance identification card for the vehicle you are driving. The statute requires an officer stopping or inspecting a vehicle for any reason to demand both it and the license.",
        context:
          "Hawaii allows the insurance card to be shown electronically on a phone, and an officer handed the phone may look at nothing else on it. The person handing it over assumes all liability for damage to the device.",
        trap: "The safety inspection certificate does have to stay in the vehicle, but it is the insurance card that pairs with the license in the on-demand rule.",
        excerptKey: "hrs-license-possession",
        sourceLabel: "Hawaii Revised Statutes - Section 286-116",
        sourceUrl: hrs("HRS0286/HRS_0286-0116"),
      },
    ],
  },
];
