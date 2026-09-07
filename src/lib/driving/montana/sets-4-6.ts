import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets 1 to 3: the Montana Driver Manual, Revised
// April 2024, Title 61 of the Montana Code Annotated 2025, and two mvdmt.gov
// licensing pages. See the header of sets-1-3.ts for the four places the manual
// and the statute part company, and docs/driving/research/montana.md for how
// each one was resolved.
//
// Set 5 is built from what Montana learners actually report getting wrong, from
// the manual's own chapter quizzes - the closest thing the state publishes to a
// practice test - and from the numbers that differ from the states next door.
const HB =
  "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf";
const UNDER18 = "https://mvdmt.gov/new-driver-license/drivers-under-18/";
const pad = (v: number) => String(v * 10).padStart(4, "0");
const mca = (sec: string) => {
  const [t, c, n] = sec.split("-").map(Number);
  const part = pad(Math.floor(n / 100));
  const num = pad(n % 100);
  return `https://mca.legmt.gov/bills/mca/title_${pad(t)}/chapter_${pad(c)}/part_${part}/section_${num}/${pad(t)}-${pad(c)}-${part}-${num}.html`;
};

export const montanaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions spread over all nine chapters, including the equipment rules, the physical requirements and the enforcement-stop guidance that learners skip and the test does not.",
    questions: [
      {
        id: "mt_s4_01",
        topic: "safety",
        question:
          "Montana requires a vision test before a driver license is issued. What standard must you meet?",
        choices: [
          "20/20 in both eyes",
          "20/40 in at least one eye, with or without corrective lenses",
          "20/60 in both eyes combined",
          "There is no vision standard, only a self-declaration",
        ],
        correctIndex: 1,
        explanation:
          "The standard is 20/40 in at least one eye, and corrective lenses count towards it. That is why a license can carry a corrective lenses restriction.",
        context:
          "If your license carries that restriction and you are stopped without your glasses or contacts in, you can be ticketed. The manual also advises keeping a spare pair in the car, and warns against tinted lenses at night because they cut too much of the light you need.",
        trap:
          "20/20 is normal vision, not the licensing standard. Montana's bar is lower and it allows glasses to get you there.",
        excerptKey: "vision-20-40",
        sourceLabel: "Montana Driver Manual - Chapter 6 Vision",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_02",
        topic: "rules",
        question:
          "Where should you position your hands on the steering wheel, according to the Montana Driver Manual?",
        choices: [
          "At 10 and 2 o'clock",
          "One hand at 12 o'clock",
          "At 9 and 3, or 8 and 4 in a vehicle with a steering wheel airbag",
          "Wherever is comfortable, since position does not affect control",
        ],
        correctIndex: 2,
        explanation:
          "Montana teaches 9 and 3, or 8 and 4 in newer cars with an airbag in the wheel. Both hands go on opposite sides so you can turn without letting go.",
        context:
          "The manual pairs the grip with the technique: hand-over-hand for corners, and straightening the wheel by hand afterwards rather than letting it slip through your fingers. Turning with the palm of one hand is named as a way to lose control.",
        trap:
          "10 and 2 is the position most people were taught and Montana has moved off it, because an airbag deploying puts your hands in your face.",
        excerptKey: "steering-hand-position",
        sourceLabel: "Montana Driver Manual - Chapter 5 Steering",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_03",
        topic: "signs",
        question:
          "A yellow diamond shows a car with wavy lines behind its rear wheels. What is the road telling you?",
        choices: [
          "The road ahead is unusually slick when wet, so reduce speed",
          "The road ahead has been recently resurfaced",
          "Skid marks indicate a previous crash site",
          "The road ahead is a test track",
        ],
        correctIndex: 0,
        explanation:
          "That is the Slippery When Wet sign. Montana's instruction with it is to reduce speed, avoid braking hard or changing direction suddenly, and increase your following distance.",
        context:
          "It sits alongside the Icy Road sign, which is used wherever the road is icy and dangerous. Both belong to the group of warnings that ask for a change of speed rather than a maneuver, and both matter more in Montana than in warmer states.",
        trap:
          "The sign is not about a past event or a road surface type. It is a prediction about how that surface behaves in rain.",
        excerptKey: "sign-slippery-when-wet",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_04",
        topic: "licensing",
        question:
          "A Montana driver moves house. How long do they have to notify the Driver Services Bureau?",
        choices: [
          "10 days",
          "60 days",
          "There is no requirement",
          "30 days",
        ],
        correctIndex: 0,
        explanation:
          "Ten days. The manual makes the point that if the department cannot reach you, you can lose your driving privilege simply because you never saw an order affecting it.",
        context:
          "Updating the electronic record is free and can be done by form or online. Getting the new address printed on the card itself is a separate step: it means an appointment at a driver license station and the replacement fee.",
        trap:
          "Ten days is short, and the consequence is not a fine but the risk of missing a notice about your own license.",
        excerptKey: "lic-address-10-days",
        sourceLabel: "Montana Driver Manual - Chapter 1 Change of Address",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_05",
        topic: "sharing",
        question:
          "What does a shared center lane, marked with a solid and a dashed yellow line on each side, exist for?",
        choices: [
          "Overtaking slow traffic in either direction",
          "Emergency vehicles only",
          "Left turns, and U-turns where permitted, from traffic traveling in both directions",
          "Passing on the left when the right lane is blocked",
        ],
        correctIndex: 2,
        explanation:
          "It is a turning lane, not a travel lane. Traffic from both directions uses it to make left turns, and U-turns where they are allowed.",
        context:
          "You can read it off the pavement: left-turn arrows for one direction alternate with left-turn arrows for the other. The lane is bounded on each side by a solid yellow line with a dashed yellow inside it.",
        trap:
          "Using it to overtake or to gather speed is the common misuse and it puts you head-on into someone doing the same thing from the other end.",
        excerptKey: "marking-shared-center-lane",
        sourceLabel: "Montana Driver Manual - Chapter 3 Shared Center Lane",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_06",
        topic: "emergencies",
        question:
          "A Montana Highway Patrol trooper pulls you over. What does the manual say to do first?",
        choices: [
          "Get out and walk back to the patrol car",
          "Turn on your right turn signal to acknowledge the officer",
          "Stop immediately, whatever the road",
          "Call someone to say you have been stopped",
        ],
        correctIndex: 1,
        explanation:
          "Signal right. It tells the officer you have seen them and are complying, which is what stops the stop escalating before it has begun.",
        context:
          "The rest of the sequence: move onto the right shoulder, never the median or the far side of a two-lane road, and stop somewhere well lit if you can. End your call, turn off the radio, stay in the car unless directed otherwise, and keep hands in clear view. Roll down tinted windows before the officer reaches you.",
        trap:
          "Getting out to meet the officer feels cooperative and reads as a threat. Stopping instantly on a bad piece of road is the other error - the officer will guide you.",
        excerptKey: "stop-turn-on-signal",
        sourceLabel: "Montana Driver Manual - Chapter 7 Enforcement Stops",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_07",
        topic: "speed",
        question:
          "What speed limit applies on an interstate highway inside a Montana urbanized area of 50,000 population or more?",
        choices: ["80 mph", "75 mph", "70 mph", "65 mph"],
        correctIndex: 3,
        explanation:
          "Sixty-five, at all times, day or night. Outside such an area the interstate limit is 80.",
        context:
          "The manual's speed table records the same thing from the driver's side, labelling the 65 row Urban Area Highways and noting that it applies to interstates within the Billings, Great Falls and Missoula areas. Those are the places the population threshold bites in practice.",
        trap:
          "The manual's interstate row still reads 75/80, which does not distinguish the urban case at all. The 65 is in the urban row and in the statute.",
        excerptKey: "speed-statute-interstate",
        sourceLabel: "Montana Code Annotated - 61-8-303 Speed restrictions",
        sourceUrl: mca("61-8-303"),
        commonlyMissed: true,
      },
      {
        id: "mt_s4_08",
        topic: "parking",
        question: "Where does Montana prohibit parking in relation to a fire station?",
        choices: [
          "Within 20 feet of its driveway on the same side, or within 75 feet across the street",
          "Within 30 feet on either side",
          "Within 50 feet on the same side only",
          "Anywhere on the same block",
        ],
        correctIndex: 0,
        explanation:
          "Two figures, and they differ by side of the road: 20 feet from the driveway entrance on the fire station's side, and 75 feet from it on the opposite side where that is signposted.",
        context:
          "The larger figure on the far side exists because an appliance turning out needs the whole width of the street. The same list forbids parking in an intersection, on a crosswalk, on a bridge or in a tunnel, on the roadway side of a parked car, and on the wrong side of the street.",
        trap:
          "One distance for both sides is the intuitive answer and it is wrong. The opposite side of the street carries the bigger restriction.",
        excerptKey: "park-fire-station",
        sourceLabel: "Montana Driver Manual - Chapter 4 No Parking Zones",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_09",
        topic: "impairment",
        question:
          "What does the Montana Driver Manual say about prescription drugs and medical marijuana?",
        choices: [
          "A prescription makes any drug safe to drive on",
          "Only illegal drugs affect driving",
          "They can affect reflexes, judgment, vision and alertness in ways similar to alcohol",
          "They are a concern only when combined with alcohol",
        ],
        correctIndex: 2,
        explanation:
          "A prescription is not a safety certificate. The manual names medical marijuana specifically and says prescription drugs can affect reflexes, judgment, vision and alertness in ways similar to alcohol.",
        context:
          "The manual's practical rule is to read the label: a warning about operating heavy machinery means do not drive. If you are unsure, ask a doctor or pharmacist. Never drink while taking other drugs, since alcohol can multiply their effects.",
        trap:
          "\"It was prescribed\" is not a defence, and Montana's DUI statute sets a THC limit of 5 nanograms per millilitre regardless of how the THC got there.",
        excerptKey: "drugs-prescription",
        sourceLabel: "Montana Driver Manual - Chapter 6 Other Drugs & Driving",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_10",
        topic: "signals",
        question:
          "Approaching a green light at an intersection, what does the manual tell you to do?",
        choices: [
          "Maintain speed, since the green is yours",
          "Enter cautiously and look both ways for someone running the red",
          "Slow to walking pace before entering",
          "Sound the horn to warn cross traffic",
        ],
        correctIndex: 1,
        explanation:
          "Montana's phrasing is cautiously enter. A green tells you what the signal says, not what the cross traffic is going to do, so you look both ways as you go in.",
        context:
          "The manual makes the point sharper elsewhere: look left and right even when the other traffic has a red or a stop sign, and be especially watchful just after your own light turns green, because that is when cross-street drivers are most likely to run theirs.",
        trap:
          "A green feels like permission to stop looking. Montana treats it as the moment to look hardest.",
        excerptKey: "signal-steady-green",
        sourceLabel: "Montana Driver Manual - Chapter 3 Vehicle Signals",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_11",
        topic: "rightOfWay",
        question:
          "You are on a road that ends at a T-junction with a through highway marked by a stop sign. Where do you stop?",
        choices: [
          "At the edge of the through highway, whatever the markings",
          "Before the crosswalk on the near side, or at the marked stop line if there is no crosswalk",
          "Wherever you can see best, even past the line",
          "Level with the stop sign itself",
        ],
        correctIndex: 1,
        explanation:
          "The statute puts the crosswalk first: stop before entering the crosswalk on the near side of the intersection, and if there is no crosswalk, at a clearly marked stop line.",
        context:
          "Only if there is neither do you stop at the point nearest the intersecting roadway from which you can see approaching traffic. Once stopped, you yield to traffic on the through highway that is close enough to be an immediate hazard, and after you have yielded, they must yield to you.",
        trap:
          "Creeping past the line for a better view is exactly the order the statute reverses. You stop at the line first, then edge forward if your view is blocked.",
        excerptKey: "row-statute-stop-sign-where",
        sourceLabel: "Montana Code Annotated - 61-8-344 Vehicles to stop at stop signs",
        sourceUrl: mca("61-8-344"),
      },
      {
        id: "mt_s4_12",
        topic: "safety",
        question:
          "What does the Montana Driver Manual say about talking on a hands-free phone while driving?",
        choices: [
          "It is entirely safe and is recommended over handheld use",
          "It is prohibited statewide",
          "It still takes your attention away from driving and makes you less likely to notice hazards",
          "It is only a problem for drivers under 18",
        ],
        correctIndex: 2,
        explanation:
          "Montana does not treat hands-free as a solution. The manual says that even with hands-free equipment, a conversation takes your attention off the road and makes you less likely to notice a hazard.",
        context:
          "The state has no blanket statewide texting or handheld ban. What the manual says instead is that most Montana cities have passed their own laws against texting and talking on cell phones while driving, so the legal position changes as you drive from one town to the next.",
        trap:
          "Hands-free is legally different from unlawful in some towns but it is not treated as safe, and \"it is banned statewide\" is simply not the position in Montana.",
        excerptKey: "distraction-hands-free",
        sourceLabel: "Montana Driver Manual - Chapter 5 Seeing Well",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s4_13",
        topic: "rules",
        question:
          "You are on a gravel Montana road on a dry, dusty day. What does the manual recommend?",
        choices: [
          "Use low beam headlights so other drivers can see you",
          "Use high beams to see through the dust",
          "Use hazard flashers continuously",
          "Drive on the crown of the road for grip",
        ],
        correctIndex: 0,
        explanation:
          "Low beams. Their job on a dusty gravel road is to make your car visible to other people, not to help you see.",
        context:
          "Gravel changes the whole picture. Traction drops, stopping takes longer, turning skids more easily, and a washboard surface can upset the steering. The manual also warns that gravel roads often have little or no shoulder and steep ditches, and tells you to watch for narrow bridge signs.",
        trap:
          "High beams in dust do what they do in fog: bounce the light back at you. Low beams are the answer in both cases.",
        excerptKey: "gravel-dust-low-beams",
        sourceLabel: "Montana Driver Manual - Chapter 5 Rural Roads",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_14",
        topic: "licensing",
        question:
          "A Montana license expired 14 months ago. What does the holder have to do?",
        choices: [
          "Pay a late fee and renew as usual",
          "Renew online with an extra surcharge",
          "Wait until the second anniversary and renew then",
          "Reapply as a new driver and pass all the applicable licensing tests again",
        ],
        correctIndex: 3,
        explanation:
          "Past a year, the grace period is gone. You reapply as a new driver, prove identity, residency and authorized presence again, and take all the applicable tests.",
        context:
          "Inside the year it is much simpler: a renewal may be completed up to a year after expiry without retesting, and you may renew as early as six months before the date. What you may not do is drive on the expired license in the meantime - the privilege ends when the license does.",
        trap:
          "The one-year grace period is for renewing without retesting, not for driving. Fourteen months is over the line, and Montanans report months-long waits for a test appointment.",
        excerptKey: "lic-expired-over-year",
        sourceLabel: "Montana Driver Manual - Chapter 1 Driver License Renewal",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s4_15",
        topic: "signs",
        question:
          "A yellow diamond shows an arrow bending to the right with a small black-on-white 35 below it. What is the 35?",
        choices: [
          "A suggested safe speed for the curve",
          "The legal maximum for the whole road",
          "The distance in yards to the curve",
          "The minimum speed for the curve",
        ],
        correctIndex: 0,
        explanation:
          "It is an advisory figure for the curve, not a new limit for the road. The manual describes it as a suggested safe speed appearing just below the curve sign.",
        context:
          "The distinction matters because Montana's basic rule still applies over the top of it: you must drive at a speed no greater than is reasonable and prudent for the conditions, whatever any sign says. In rain or ice the advisory number may still be too high.",
        trap:
          "Advisory does not mean ignorable. Losing control on a curve at the advisory speed in bad conditions is still careless driving.",
        excerptKey: "sign-curve-safe-speed",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_16",
        topic: "sharing",
        question:
          "What equipment does Montana law require on a bicycle used at night?",
        choices: [
          "A white front light visible for at least 500 feet, plus rear reflectors and wheel reflectors",
          "A rear light only",
          "Reflective clothing, but no lights",
          "Nothing, as long as the rider stays on the shoulder",
        ],
        correctIndex: 0,
        explanation:
          "At night a bicycle needs a white front light visible for at least 500 feet. Rear-facing reflectors are required, a red rear light visible for 500 feet may be added, and both tires need retro-reflective sidewalls or spoke reflectors.",
        context:
          "The brake requirement runs alongside: a brake that will make the wheels skid on dry, level, clean pavement. Montana also encourages, without requiring, a fluorescent orange flag at least six feet above the road, which is a Montana touch you will not see in many other manuals.",
        trap:
          "Reflectors alone are not enough at the front. Montana requires an actual light there, and the 500-foot figure matches the rest of its lighting rules.",
        excerptKey: "bike-lights-500",
        sourceLabel: "Montana Driver Manual - Chapter 4 Equipment and Lighting Required for Bicycles",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_17",
        topic: "emergencies",
        question:
          "Your accelerator sticks open while you are driving. What is the manual's sequence?",
        choices: [
          "Switch off the engine, then brake",
          "Shift to park and coast to a stop",
          "Keep your eyes on the road, shift to neutral, apply steady brake pressure, then pull off",
          "Pump the accelerator until it releases",
        ],
        correctIndex: 2,
        explanation:
          "Neutral first, then steady braking, then off the road, then switch off. Taking the engine out of the equation with the transmission is what buys you control.",
        context:
          "The order is the point. Turning the ignition off early can lock the steering and kills the power assistance to the brakes; shifting to park at speed is worse again. Keeping your eyes on the road while you do any of it is the first instruction in the list.",
        trap:
          "\"Turn it off\" sounds decisive and is the wrong first move. Neutral does the same job without taking your steering with it.",
        excerptKey: "emerg-stuck-accelerator",
        sourceLabel: "Montana Driver Manual - Chapter 7 Gas Pedal Sticks",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_18",
        topic: "speed",
        question:
          "Under Montana law, what may a driver be cited for even when traveling under the posted limit?",
        choices: [
          "Nothing - the posted limit is an absolute defence",
          "Driving too fast for the conditions existing at that point",
          "Only failing to signal",
          "Only driving without insurance",
        ],
        correctIndex: 1,
        explanation:
          "Montana's basic rule sits underneath every posted limit. You must drive carefully and prudently and at a reduced speed no greater than is reasonable for the conditions where you are.",
        context:
          "The statute lists what counts as conditions: the amount and character of traffic, visibility, weather and roadway conditions. The manual puts it plainly - limits are posted for ideal conditions, and you can get a ticket for going too fast under bad ones even below the sign.",
        trap:
          "The number on the sign is a ceiling, not a floor and not a guarantee. In a whiteout the lawful speed can be far below it.",
        excerptKey: "speed-statute-basic-rule",
        sourceLabel: "Montana Code Annotated - 61-8-303 Speed restrictions",
        sourceUrl: mca("61-8-303"),
      },
      {
        id: "mt_s4_19",
        topic: "parking",
        question:
          "What must you do before opening your door into a Montana street after parking?",
        choices: [
          "Nothing, if you parked legally",
          "Sound the horn once",
          "Check for vehicles, bicyclists and pedestrians, and get out on the curb side if you can",
          "Open the door fully so you are visible",
        ],
        correctIndex: 2,
        explanation:
          "Check first and prefer the curb side. If you must use the street side, look for cars, riders and pedestrians before the door moves, and shut it as soon as you are out.",
        context:
          "The rule exists because of dooring - a rider hit by a door opening in front of them. The manual acknowledges it from the cyclist's side too, noting that riders often keep away from parked cars for exactly this reason, sometimes leaving a marked bike lane to do it.",
        trap:
          "Parking legally does not discharge the duty. The door is the part of the car that ends up in the traffic lane.",
        excerptKey: "park-check-before-door",
        sourceLabel: "Montana Driver Manual - Chapter 4 Parking",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_20",
        topic: "signals",
        question:
          "You are turning left across oncoming traffic and are waiting in the intersection for a gap. Where should your wheels point?",
        choices: [
          "Straight ahead",
          "Angled right, away from oncoming traffic",
          "It does not matter while you are stationary",
          "Angled left, ready to complete the turn",
        ],
        correctIndex: 0,
        explanation:
          "Straight ahead. The reason is what happens if you are hit from behind: with the wheels straight you are pushed forward, and with them turned you are pushed into oncoming traffic.",
        context:
          "The manual's left-turn sequence is: look for following vehicles well ahead of the turn, signal, move close to the centerline, yield to oncoming traffic, wait with the wheels straight, enter the street just to the right of its center without cutting the corner, and check the signal has canceled afterwards.",
        trap:
          "Pre-turning the wheels feels efficient. It converts a rear-end shunt into a head-on collision.",
        excerptKey: "turn-left-wheels-straight",
        sourceLabel: "Montana Driver Manual - Chapter 5 Use Your Signals to Communicate",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_21",
        topic: "impairment",
        question:
          "After how many hours awake does the manual say your driving matches that of an impaired driver?",
        choices: [
          "24 hours",
          "8 hours",
          "12 hours",
          "18 hours",
        ],
        correctIndex: 3,
        explanation:
          "Eighteen hours. The manual's drowsy driving section puts driving skills after 18 hours awake on a par with driving under the influence of drugs or alcohol.",
        context:
          "The same section reports that 13 per cent of crashes involving hospitalisation and 21 per cent of fatal crashes involve a drowsy driver. Its practical advice is to stop every two hours on a long trip, and never to drive when sleepy - a nap or a room for the night beats arriving never.",
        trap:
          "Eighteen hours is easier to reach than it sounds: up at 6 a.m. and driving at midnight gets you there.",
        excerptKey: "fatigue-18-hours",
        sourceLabel: "Montana Driver Manual - Additional Resources: Drowsy Driving",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_22",
        topic: "rules",
        question:
          "Which of these is Montana's rule about driving on the shoulder of a road?",
        choices: [
          "It is permitted to let faster traffic past",
          "It is permitted below 25 mph",
          "It is permitted to complete a right turn",
          "Never drive on the shoulder unless you are told to",
        ],
        correctIndex: 3,
        explanation:
          "The manual's line is short: unless told to do so, never drive on the shoulder of the road. It is not a lane and it is not an overflow.",
        context:
          "The passing rules say the same thing from another angle: you may not pass on the right by driving off the pavement or main-travelled part of the road, and that includes a paved shoulder. Other drivers do not expect a vehicle there and may pull off without looking.",
        trap:
          "Pulling onto the shoulder to let a queue past feels courteous. Montana's version of that courtesy is to use a marked turnout or passing lane instead.",
        excerptKey: "never-drive-shoulder",
        sourceLabel: "Montana Driver Manual - Chapter 4 General Driving",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_23",
        topic: "safety",
        question:
          "Montana requires child restraints for which children?",
        choices: [
          "Children under age 6 who weigh less than 60 pounds",
          "All children under age 8",
          "All children under 4 feet 9 inches tall",
          "Children under age 4 only",
        ],
        correctIndex: 0,
        explanation:
          "Montana's requirement is age and weight together: babies and children up to age 6 and 60 pounds go in a child safety seat.",
        context:
          "Beyond that the manual gives recommendations rather than requirements. It advises a booster seat until the adult lap and shoulder belt fits properly, usually around 4 feet 9 inches tall, and says children under 13 should ride in the back seat whenever possible. A rear-facing seat must never go in front of an active airbag.",
        trap:
          "Age alone does not answer it, and the 4 foot 9 figure is the booster recommendation rather than the legal cut-off.",
        excerptKey: "child-restraint-6-60",
        sourceLabel: "Montana Driver Manual - Chapter 2 Child Restraints Required",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_24",
        topic: "signs",
        question: "What does the DIVIDED HIGHWAY ENDS sign warn you about?",
        choices: [
          "The road is about to become a dead end",
          "A median is about to split the road into two one-way roadways",
          "The road ahead becomes a single roadway with traffic in both directions",
          "The speed limit is about to increase",
        ],
        correctIndex: 2,
        explanation:
          "Divided Highway Ends means the median is finishing and you are about to meet oncoming traffic on the same roadway. Keep to the right.",
        context:
          "Its opposite number, Divided Highway Begins, warns that a median or divider is about to split the road into two separate one-way roadways, and also tells you to keep right. The pair matter because the transition is where head-on crashes happen.",
        trap:
          "The two signs look similar and mean opposite things. Reading the wrong one is how a driver ends up on the wrong side of a median.",
        excerptKey: "sign-divided-highway-ends",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_25",
        topic: "licensing",
        question:
          "Which body must approve a Montana traffic education course for licensing purposes?",
        choices: [
          "Any nationally accredited online provider",
          "The Office of Public Instruction and the Department of Justice",
          "The Department of Transportation alone",
          "The applicant's school district alone",
        ],
        correctIndex: 1,
        explanation:
          "Approval comes from the Office of Public Instruction together with the Department of Justice, and the manual adds a flat exclusion: online or third-party courses are not approved.",
        context:
          "The approval matters for two reasons. It is what lets a 15-year-old get a permit that a 16-year-old could get without a course, and it is what lets a school run a certified cooperative driver testing program that administers the department's own knowledge and road tests to its students.",
        trap:
          "Online courses are widely advertised and are not accepted here. That is a Montana-specific exclusion the manual states twice.",
        excerptKey: "lic-online-courses",
        sourceLabel: "Montana Driver Manual - Chapter 1 Types of Montana Licenses, Permits, and Endorsements",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s4_26",
        topic: "rightOfWay",
        question:
          "You are overtaking a car that is slowing to a stop in the same lane. Who has the right of way?",
        choices: [
          "You do, because you are the faster vehicle",
          "The vehicle you are overtaking, even though it is slowing or stopping",
          "Neither, once the vehicle ahead brakes",
          "You do, once your front bumper is level with theirs",
        ],
        correctIndex: 1,
        explanation:
          "Montana keeps the right of way with the vehicle being overtaken, and says so explicitly even where that vehicle is slowing or coming to a stop.",
        context:
          "The rule fits with the rest of the overtaking picture: you may pass on the right only in the two narrow situations the manual allows, never off the pavement, and never in a way that endangers the driver you are passing.",
        trap:
          "A vehicle slowing in front of you feels like it has forfeited its place. It has not, and cutting round it is where the collision comes from.",
        excerptKey: "row-overtaking-yield",
        sourceLabel: "Montana Driver Manual - Chapter 4 Overtaking Vehicles",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_27",
        topic: "sharing",
        question:
          "A school bus ahead of you switches on amber flashing lights. What must you do?",
        choices: [
          "Stop 30 feet back immediately",
          "Pass quickly before the red lights come on",
          "Slow to a speed reasonable for the conditions and be ready to stop when the red lights come on",
          "Sound your horn to warn children",
        ],
        correctIndex: 2,
        explanation:
          "Amber means the bus is about to stop. You slow to a reasonable speed and prepare to stop when the reds come on, from either direction.",
        context:
          "The bus driver switches the ambers on roughly 150 feet ahead in a city and 500 feet ahead elsewhere, which is the warning the rule is built around. Once the red lights are flashing you stop at least 30 feet away and stay there until they go off.",
        trap:
          "Racing the amber is exactly what the warning period is designed to expose, and stopping dead the moment you see amber can get you rear-ended.",
        excerptKey: "bus-amber-lights",
        sourceLabel: "Montana Driver Manual - Chapter 4 School Buses",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_28",
        topic: "emergencies",
        question:
          "Montana's manual lists three options for avoiding a collision. What are they?",
        choices: [
          "Stop, turn and speed up",
          "Stop, reverse and steer",
          "Brake, swerve and pull the parking brake",
          "Brake, signal and sound the horn",
        ],
        correctIndex: 0,
        explanation:
          "Stop, turn, or speed up. Speeding up is a real option in the manual, for when a vehicle is about to hit you from behind or the side and there is room ahead.",
        context:
          "The manual notes that in most cases you can turn the vehicle quicker than you can stop it, which is why turning is on the list at all. It also says that generally it is better to run off the road than to hit another vehicle head-on.",
        trap:
          "The horn does not avoid a collision, and accelerating is the option most drivers never consider even when it is the only one that works.",
        excerptKey: "emerg-three-options",
        sourceLabel: "Montana Driver Manual - Chapter 7 Avoiding Collisions",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_29",
        topic: "safety",
        question:
          "What must a Montana vehicle's horn be capable of, under the equipment rules?",
        choices: [
          "Producing a warning audible for 200 feet",
          "Producing a warning audible for 500 feet",
          "Sounding continuously for 30 seconds",
          "Nothing specific - any horn will do",
        ],
        correctIndex: 0,
        explanation:
          "Two hundred feet. Montana sets performance standards for equipment rather than just requiring it to exist, and 200 feet is the horn's.",
        context:
          "The other equipment distances follow the same pattern: brake lights and turn signals visible for 300 feet in sunlight, tail lights for 500 feet, the mirror giving 200 feet of view to the rear, the license plate lamp lighting the plate for 50 feet, and high beams reaching 350 feet with low beams reaching 100.",
        trap:
          "The horn is a warning device with a legal standard, and the manual is equally clear that it should only be used as a warning to others.",
        excerptKey: "equip-horn-200",
        sourceLabel: "Montana Driver Manual - Chapter 2 Motor Vehicle Equipment",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_30",
        topic: "rules",
        question:
          "You are merging onto a Montana interstate from an entrance ramp. What does the manual tell you to do?",
        choices: [
          "Drive to the end of the ramp and stop, then pull out when clear",
          "Use the ramp to build up to the speed of the traffic before you pull on",
          "Merge at 40 mph regardless of traffic speed",
          "Cross to the left lane as soon as you join",
        ],
        correctIndex: 1,
        explanation:
          "The ramp exists to get you up to speed. Arriving at the end of it stopped leaves you no room to accelerate and puts a slow car where nobody expects one.",
        context:
          "The manual asks for a four-second gap before you merge, and for signal, mirror and a look over the shoulder. If you do have to wait for space, slow on the ramp rather than stopping, so you keep some room to accelerate into.",
        trap:
          "Stopping at the end of a ramp is a common habit and it is dangerous. Drivers behind you are watching the main carriageway, not your brake lights.",
        excerptKey: "merge-use-the-ramp",
        sourceLabel: "Montana Driver Manual - Chapter 5 Entering Into Traffic",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_31",
        topic: "signals",
        question:
          "Where a road has no lane markings at all, what determines which part of it you drive on?",
        choices: [
          "Local custom on that road",
          "Whichever side has better surface",
          "The general rules covering driving, passing and turning",
          "Nothing - any position is lawful",
        ],
        correctIndex: 2,
        explanation:
          "Unmarked does not mean unregulated. Montana says that where there are no signs or markings to control lane use, the general rules on driving, passing and turning decide it.",
        context:
          "In practice that means keeping right, turning from the lane closest to the direction you want to go and into the lane closest to the one you came from, and passing on the left except in the two cases where a right-hand pass is allowed.",
        trap:
          "An unmarked gravel road can feel like a free-for-all. The rules of the road do not stop where the paint does.",
        excerptKey: "turn-from-nearest-lane",
        sourceLabel: "Montana Driver Manual - Chapter 4 Turning",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_32",
        topic: "speed",
        question:
          "You are driving well under the limit on a busy Montana highway and vehicles are piling up behind you. What does the law say?",
        choices: [
          "Nothing, since you are within the limit",
          "You may not drive slowly enough to impede or block the normal and reasonable movement of traffic",
          "You must pull over every mile",
          "You must increase to at least the posted limit",
        ],
        correctIndex: 1,
        explanation:
          "Montana makes impeding traffic an offense in its own right. You may not drive at a speed slow enough to impede or block the normal and reasonable movement of traffic, unless the reduced speed is necessary for safety or required by law.",
        context:
          "The statute goes further on two-lane roads. Where passing is unsafe and four or more vehicles have formed a line behind a slow-moving vehicle, its driver must turn off at the nearest safe turnout to let them by. The manual gives the same instruction in plainer words.",
        trap:
          "Being under the limit is not automatically lawful, and the duty to pull over lands on the slow driver rather than on the queue.",
        excerptKey: "speed-minimum-limit",
        sourceLabel: "Montana Code Annotated - 61-8-311 Minimum speed regulations",
        sourceUrl: mca("61-8-311"),
        commonlyMissed: true,
      },
      {
        id: "mt_s4_33",
        topic: "parking",
        question:
          "You are parking on a Montana road with no curb. Where should the vehicle end up?",
        choices: [
          "Half on the road so it is visible",
          "As close as practicable to the edge of the shoulder",
          "At least ten feet from the pavement, whatever the ground",
          "Facing oncoming traffic so your lights are seen",
        ],
        correctIndex: 1,
        explanation:
          "With no curb, you pull as close as practicable to the edge of the shoulder. The aim is to be clear of the travel lane while still visible to drivers coming from either direction.",
        context:
          "That is the same principle behind the two general conditions Montana sets for any parked car: far enough from a travel lane not to interfere with traffic, and visible to cars approaching from either direction. Parking on the wrong side of the street is separately prohibited.",
        trap:
          "Facing the wrong way to be seen is an offense, and leaving part of the car in the lane defeats the whole point of getting off the road.",
        excerptKey: "park-visible-and-clear",
        sourceLabel: "Montana Driver Manual - Chapter 4 Parking",
        sourceUrl: HB,
      },
      {
        id: "mt_s4_34",
        topic: "impairment",
        question:
          "What does Montana law count as an offense for a driver under 21 in relation to marijuana?",
        choices: [
          "Only a THC level of 5 nanograms per millilitre or more",
          "Only possession of marijuana in the vehicle",
          "Any amount of active THC in the body",
          "Nothing, if the driver holds a medical card",
        ],
        correctIndex: 2,
        explanation:
          "Under 21, any amount of active THC in the body is an offense. The 5 nanogram figure is the adult threshold; it does not apply to a driver under 21.",
        context:
          "The under-21 rule mirrors the alcohol one, where the threshold falls to 0.02. Inactive metabolites are excluded from both tests, so the rule targets recent use rather than a trace of something weeks old.",
        trap:
          "Carrying the adult 5 nanogram figure across to a teenage driver is the mistake, and a medical card is not a defence to a driving offense.",
        excerptKey: "dui-statute-under21",
        sourceLabel: "Montana Code Annotated - 61-8-1002 Driving under influence",
        sourceUrl: mca("61-8-1002"),
      },
      {
        id: "mt_s4_35",
        topic: "licensing",
        question:
          "How does Montana calculate the fee for a Class D license or a learner license?",
        choices: [
          "Per year of validity, at $5.00 a year",
          "By vehicle weight",
          "By county of residence",
          "A flat fee regardless of age",
        ],
        correctIndex: 0,
        explanation:
          "Montana charges by the year: $5.00 per year for a Class D basic license or a learner license, plus an administrative fee. A 16-year-old licensed until their 21st birthday therefore pays for five years.",
        context:
          "That is why the MVD's fee table is a grid by age rather than a single number, and why the cost falls the closer you are to 21. A motorcycle endorsement adds 50 cents a year on the same basis, and a 3 per cent administrative fee applies to MVD products and services.",
        trap:
          "A flat fee is the natural assumption and it is not how Montana prices this. The table is on the MVD's licensing fees page, and the manual sends you there because the figures move.",
        excerptKey: "lic-fee-per-year",
        sourceLabel: "Montana Driver Manual - Chapter 1 Fees/Receipts",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The distances Montana learners say catch them, the places the manual and the statute have drifted apart, and the rules that are different here from the state you learned to drive in.",
    questions: [
      {
        id: "mt_s5_01",
        topic: "speed",
        question:
          "You are on a Montana interstate outside any large urbanized area. What limit does Section 61-8-303 set?",
        choices: [
          "80 mph at all times",
          "70 mph at all times",
          "75 mph at all times",
          "75 mph by day and 65 at night",
        ],
        correctIndex: 0,
        explanation:
          "The statute sets a flat 80 mph, day and night, on an interstate outside an urbanized area of 50,000 population or more. The night reduction applies to other public highways, not to the interstate.",
        context:
          "The manual's table has not caught up: it prints 75/80 for interstates in both the day and night columns, which reads as a range rather than a figure. The statute is unambiguous and it is what the Highway Patrol enforces.",
        trap:
          "This is the single clearest place the Montana manual and the Montana statute disagree, and a learner who has only read the book will pick 75. The research note records the conflict.",
        excerptKey: "speed-statute-interstate",
        sourceLabel: "Montana Code Annotated - 61-8-303 Speed restrictions",
        sourceUrl: mca("61-8-303"),
        commonlyMissed: true,
      },
      {
        id: "mt_s5_02",
        topic: "rules",
        question:
          "You are about to turn right from a rural Montana highway onto a ranch road. How far ahead must the signal run?",
        choices: [
          "Half a mile",
          "100 feet",
          "200 feet",
          "300 feet",
        ],
        correctIndex: 3,
        explanation:
          "Outside a business, residence or urban district, the signal must run continuously for the last 300 feet before the turn. In town it is 100.",
        context:
          "Both numbers come from the same statute and both appear in the manual's general driving rules. The statute adds a third duty that is easy to miss: you may not stop or suddenly slow without first signaling to the driver behind you, when there is a chance to do so.",
        trap:
          "Montana learners name distance questions as the ones that catch them, and the trap here is that the safer-sounding answer changes with the setting. On a rural road, 100 feet is not enough.",
        excerptKey: "turn-signal-statute-300",
        sourceLabel: "Montana Code Annotated - 61-8-336 Turning movements and required signals",
        sourceUrl: mca("61-8-336"),
        commonlyMissed: true,
      },
      {
        id: "mt_s5_03",
        topic: "safety",
        question:
          "You are approaching a stationary tow truck with amber lights on an interstate posted at 80 mph, and the left lane is clear. What speed does the statute require?",
        choices: [
          "60 mph",
          "40 mph",
          "50 mph",
          "80 mph is fine if you move over",
        ],
        correctIndex: 0,
        explanation:
          "On the interstate, if you are able to move lanes, the requirement is 20 mph below the posted limit. From 80 that is 60, and you move over as well.",
        context:
          "The full grid is worth carrying. Interstate: 20 below if you can move lanes, half the limit if you cannot. State highway or county road: 30 below if you can move lanes, half if you cannot. Any other road: half the limit. A posted temporary limit replaces all of it.",
        trap:
          "Moving over is not an alternative to slowing down - the statute requires both. And half the limit only applies when you cannot change lanes.",
        excerptKey: "move-over-statute-interstate",
        sourceLabel: "Montana Code Annotated - 61-8-388 Approaching stationary emergency vehicle",
        sourceUrl: mca("61-8-388"),
        commonlyMissed: true,
      },
      {
        id: "mt_s5_04",
        topic: "impairment",
        question:
          "What fine does Montana law set for a first DUI conviction with no aggravating circumstances?",
        choices: [
          "Not less than $600 and not more than $1,000",
          "A flat $500",
          "Not less than $1,200 and not more than $2,000",
          "Not less than $300 and not more than $1,000",
        ],
        correctIndex: 0,
        explanation:
          "Section 61-8-1007 sets not less than $600 and not more than $1,000, alongside imprisonment of not less than 24 consecutive hours and not more than 6 months.",
        context:
          "If a passenger under 16 was in the vehicle the first-offense range doubles to $1,200 to $2,000 with 48 hours to a year. Second and third offenses escalate steeply from there, and the manual is right that a first conviction also costs the license for six months.",
        trap:
          "The manual still prints $300 to $1,000 and 1 to 60 days, which the legislature has since replaced. Where a number is demanded, the statute is the current law.",
        excerptKey: "dui-statute-first-fine",
        sourceLabel: "Montana Code Annotated - 61-8-1007 Penalty for driving under influence",
        sourceUrl: mca("61-8-1007"),
        commonlyMissed: true,
      },
      {
        id: "mt_s5_05",
        topic: "parking",
        question:
          "How close to a stop sign at the side of a Montana roadway may you park?",
        choices: [
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 25 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 3,
        explanation:
          "Thirty feet on the approach to a flashing beacon, a stop sign, or an official traffic control device at the side of a roadway.",
        context:
          "The Montana no-parking distances only make sense as a set, because each one guards a different sightline: 15 feet for a hydrant, 20 for a crosswalk at an intersection, 30 for a sign or beacon, 50 for a railroad crossing.",
        trap:
          "Four numbers close together is exactly why this gets missed. The 30-foot figure is the sign one, and it applies on the approach side.",
        excerptKey: "park-statute-30-feet",
        sourceLabel: "Montana Code Annotated - 61-8-354 Stopping, standing, or parking prohibited",
        sourceUrl: mca("61-8-354"),
        commonlyMissed: true,
      },
      {
        id: "mt_s5_06",
        topic: "signals",
        question:
          "Two Montana drivers argue about a yellow light. One says you must stop; the other says you may continue if you are already in the intersection when it turns red. Who is right on the law?",
        choices: [
          "The first - a yellow is an order to stop",
          "Neither - a yellow has no legal meaning",
          "The second - the statute only forbids entering the intersection once the red is exhibited",
          "Both, since the rule differs by city",
        ],
        correctIndex: 2,
        explanation:
          "The statute warns you that a red is coming and then forbids one thing: entering the intersection once the red is showing. Being already inside it when the light changes is not the offense.",
        context:
          "The manual gives the driving rule that keeps you the right side of that line: do not enter on a steady yellow unless you are too close to stop safely. Together they mean the test is whether you can stop safely, not whether you can beat the light.",
        trap:
          "This is a genuine argument among Montana drivers, and both extremes are wrong. Treating yellow as a hard stop causes rear-end crashes; treating it as a green causes the other kind.",
        excerptKey: "signal-yellow-enter-statute",
        sourceLabel: "Montana Code Annotated - 61-8-207 Traffic control signal legend",
        sourceUrl: mca("61-8-207"),
        commonlyMissed: true,
      },
      {
        id: "mt_s5_07",
        topic: "rightOfWay",
        question:
          "A driver has passed a yield sign and then collides with a car in the intersection. What does Montana law treat that collision as?",
        choices: [
          "Prima facie evidence that the driver failed to yield",
          "Evidence of contributory negligence by both drivers",
          "Neutral, until an investigation says otherwise",
          "An offense only if injuries resulted",
        ],
        correctIndex: 0,
        explanation:
          "Montana builds the presumption into the statute. Colliding after passing a yield sign is prima facie evidence that the driver failed to yield right of way.",
        context:
          "The same provision applies to hitting a pedestrian in an adjacent crosswalk. The duties before that are to slow to a speed reasonable for conditions, stop if safety requires it, and yield to anything in the intersection or close enough to be an immediate hazard.",
        trap:
          "A yield sign feels softer than a stop sign, and this provision is what gives it teeth. The burden shifts to the driver who went through it.",
        excerptKey: "row-statute-yield-collision",
        sourceLabel: "Montana Code Annotated - 61-8-342 Vehicles approaching Yield sign",
        sourceUrl: mca("61-8-342"),
      },
      {
        id: "mt_s5_08",
        topic: "licensing",
        question:
          "The Montana Driver Manual and the MVD website disagree about the youngest age at which a learner permit can be issued at an exam station. What do they each say?",
        choices: [
          "The manual says 15 with a course or 16 without; the website says 15 and older without a course",
          "The manual says 14 and a half; the website says 16",
          "They both say 16 with no exceptions",
          "The manual says 16 only; the website says 14 and a half only",
        ],
        correctIndex: 0,
        explanation:
          "The manual sets eligibility for an NCLP issued at a driver exam station at 16 without traffic education, or 15 with an approved course completed. The MVD's own page describes a Learner Permit for students 15 and older who have not attended a driver training class.",
        context:
          "Both agree on the third route: a student aged 14 and a half who is participating in or has completed a state-approved traffic education program can be issued an NCLP through the course. The safe reading for a 15-year-old with no course is to expect the manual's rule and ask MVD before booking.",
        trap:
          "This is a real conflict between two official Montana sources, not a misreading. The research note records it, and neither page has been amended to match the other.",
        excerptKey: "lic-nclp-eligibility",
        sourceLabel: "Montana Driver Manual - Chapter 1 Non-Commercial Learner Permit",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s5_09",
        topic: "sharing",
        question:
          "When are studded tires prohibited on Montana roads?",
        choices: [
          "From 1 June through 30 September",
          "From 15 April through 15 October",
          "They are never prohibited",
          "From 1 May through 31 August",
        ],
        correctIndex: 0,
        explanation:
          "Studded tires are out from 1 June through 30 September. The statute says the same thing from the other side: embedded pneumatic tires may be used only between 1 October and 31 May.",
        context:
          "School buses get a longer window, from 15 August through the following 15 June, and retractable studs may be used at any time. One studded tire may also be carried as a spare against a failure.",
        trap:
          "The dates are asymmetric and easy to reverse. Getting them backwards means running studs through a Montana summer, which is what the rule exists to stop.",
        excerptKey: "weather-studded-tires",
        sourceLabel: "Montana Driver Manual - Chapter 5 Slippery Roads",
        sourceUrl: HB,
      },
      {
        id: "mt_s5_10",
        topic: "safety",
        question:
          "In heavy fog you cannot see much beyond 200 feet. What is the fastest the manual says you can safely drive?",
        choices: [
          "20 mph",
          "50 mph",
          "40 mph",
          "30 mph",
        ],
        correctIndex: 3,
        explanation:
          "Thirty. The manual ties visibility to speed directly: 200 feet is the stopping distance at 30 mph, so if that is all you can see, 30 is the ceiling.",
        context:
          "The same arithmetic gives the other figure: about 400 feet to stop at 50 mph, which is also roughly how far your headlights show, which is why 50 is the sensible ceiling at night. The Four Second Sight Distance Rule is the field version of the same idea.",
        trap:
          "This is not a posted-limit question. In fog the lawful speed is set by what you can see, and the limit on the sign is irrelevant.",
        excerptKey: "visibility-rain-fog-30",
        sourceLabel: "Montana Driver Manual - Chapter 5 Rain, Fog, or Snow",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s5_11",
        topic: "signs",
        question:
          "Which is the only round warning sign in the Montana system?",
        choices: [
          "The roundabout ahead sign",
          "The pedestrian crossing sign",
          "The school crossing sign",
          "The railroad crossing advance warning",
        ],
        correctIndex: 3,
        explanation:
          "The railroad crossing advance warning. Every other warning sign is a diamond, so the circle carries a single meaning.",
        context:
          "That is a deliberate feature of the shape system, which the manual says exists so that in poor visibility - heavy fog, blowing snow - the shape alone identifies the sign. The octagon works the same way for STOP and the downward triangle for YIELD.",
        trap:
          "This turns up as a straight recall question and it has one answer. Guessing at the roundabout sign, which is a diamond, is the near miss.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s5_12",
        topic: "rules",
        question:
          "How far must you be able to see before starting a pass near a hill or curve on a Montana two-lane road?",
        choices: [
          "One-third of a mile, or about 10 seconds ahead",
          "Quarter of a mile",
          "800 feet",
          "Half a mile",
        ],
        correctIndex: 0,
        explanation:
          "One-third of a mile, which is about 10 seconds of sight distance. Within that distance of a hill or a curve you do not start the pass at all.",
        context:
          "The reasoning is arithmetic. At 55 mph a pass takes about 10 seconds, in which you travel over 800 feet and so does the oncoming car, giving over 1600 feet - a third of a mile. A crest or bend hides exactly that stretch, so the manual tells you to assume a car is in it.",
        trap:
          "Quarter of a mile is the 10-second highway scanning distance, not the passing distance. The two figures are close enough to swap and they answer different questions.",
        excerptKey: "passing-hill-curve-third-mile",
        sourceLabel: "Montana Driver Manual - Chapter 5 Space for Passing",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s5_13",
        topic: "emergencies",
        question:
          "At what level of property damage must a Montana crash be reported immediately to law enforcement?",
        choices: [
          "$500 or more",
          "$1,000 or more",
          "$2,500 or more",
          "$250 or more",
        ],
        correctIndex: 0,
        explanation:
          "Five hundred dollars is the immediate-report threshold, along with any injury or death. The $1,000 figure is a different obligation - the report to the Highway Patrol.",
        context:
          "The written report has to be filed within 10 days, and someone else may file it if you are too injured to. Separately, leaving a crash where your vehicle was involved and there is injury or death, before police have taken what they need, is a crime.",
        trap:
          "Two thresholds, two duties, and the smaller number is the one that triggers the phone call. A learner who remembers only $1,000 will under-report.",
        excerptKey: "crash-report-thresholds",
        sourceLabel: "Montana Driver Manual - Chapter 7 Report the accident",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s5_14",
        topic: "speed",
        question:
          "You are ticketed at 12 mph over the limit in daylight on a Montana highway. What is the fine under the statutory schedule?",
        choices: [
          "$120",
          "$20",
          "$40",
          "$70",
        ],
        correctIndex: 3,
        explanation:
          "Seventy dollars. The schedule steps at 11 to 20 mph over, and it is the same $70 whether you are on the interstate or another road.",
        context:
          "Below that the two schedules differ: 1 to 10 over costs $40 on the interstate and $20 elsewhere. Above it, 21 to 30 over is $120 and 31 or more is $200. Only the 1-to-10 band is kept off your record, and only within the daytime and night margins.",
        trap:
          "Twelve over is one mile past the point where the small-violation protection stops. At 10 over in daylight there is no record; at 12 there is a $70 fine and a record.",
        excerptKey: "speed-fine-not-recorded",
        sourceLabel: "Montana Code Annotated - 61-8-725 Penalty for violation of speed limits",
        sourceUrl: mca("61-8-725"),
      },
      {
        id: "mt_s5_15",
        topic: "impairment",
        question:
          "What is the THC limit for an adult driver in a non-commercial vehicle in Montana?",
        choices: [
          "There is no numeric limit",
          "1 nanogram per millilitre",
          "5 nanograms per millilitre, excluding inactive metabolites",
          "10 nanograms per millilitre",
        ],
        correctIndex: 2,
        explanation:
          "Five nanograms per millilitre of active THC in the blood, with inactive metabolites excluded. That makes it a per se offense in the same way 0.08 is for alcohol.",
        context:
          "The statute also carries a table of other prohibited substances with their own blood thresholds, applying where the driver has no valid prescription. Under 21, the marijuana rule is stricter still: any amount of active THC is an offense.",
        trap:
          "The excluding-inactive-metabolites wording is what stops the rule catching use from weeks ago, and it is also what people leave out when they claim the limit is arbitrary.",
        excerptKey: "dui-statute-thc",
        sourceLabel: "Montana Code Annotated - 61-8-1002 Driving under influence",
        sourceUrl: mca("61-8-1002"),
      },
      {
        id: "mt_s5_16",
        topic: "rightOfWay",
        question:
          "Two cars approach an uncontrolled Montana intersection at the same time. How does the statute allocate the duty?",
        choices: [
          "The driver on the right yields to the driver on the left",
          "The driver on the left yields to vehicles approaching from the right that are close enough to be an immediate hazard",
          "The driver going straight yields to the driver turning",
          "Both must stop and negotiate",
        ],
        correctIndex: 1,
        explanation:
          "Montana places the duty on the driver on the left, and qualifies it: they yield to vehicles from the right that are close enough to constitute an immediate hazard.",
        context:
          "The statute adds a second limb people miss. Where your road intersects another without crossing it - a T-junction - you yield to all vehicles on the other highway that are close enough to be a hazard, whichever side they are on.",
        trap:
          "Saying the driver on the right yields is the same rule stated backwards, and it is the single most common way to get this wrong under pressure.",
        excerptKey: "row-statute-yield-right",
        sourceLabel: "Montana Code Annotated - 61-8-339 Vehicle approaching or entering intersection",
        sourceUrl: mca("61-8-339"),
        commonlyMissed: true,
      },
      {
        id: "mt_s5_17",
        topic: "parking",
        question:
          "Which of these does Montana's parking statute prohibit outright, regardless of signage?",
        choices: [
          "Parking on the roadway side of a vehicle already parked at the curb",
          "Parking within 100 feet of a school",
          "Parking facing downhill",
          "Parking for more than two hours in a residential area",
        ],
        correctIndex: 0,
        explanation:
          "Double parking is on the statutory list: you may not stop, stand or park on the roadway side of a vehicle stopped or parked at the edge or curb of a street.",
        context:
          "The same list covers sidewalks, driveways, intersections, crosswalks, bridges, tunnels and safety zones. None of it depends on a sign, which is why a street with no restriction posted can still be a parking offense.",
        trap:
          "Time limits and school distances are the kind of rule a city sets, not the state. The statutory list is about blocking sightlines and access.",
        excerptKey: "park-statute-double-park",
        sourceLabel: "Montana Code Annotated - 61-8-354 Stopping, standing, or parking prohibited",
        sourceUrl: mca("61-8-354"),
      },
      {
        id: "mt_s5_18",
        topic: "licensing",
        question:
          "A Montana high school runs a certified cooperative driver testing program. What does that let it do?",
        choices: [
          "Issue full driver licenses to its students",
          "Administer the department's standardized knowledge and road tests and certify the results",
          "Waive the vision test for its students",
          "Shorten the six-month permit period",
        ],
        correctIndex: 1,
        explanation:
          "A certified program administers the standardized knowledge and road tests the department requires and certifies the results back to it. The department may then waive its own test on that certification.",
        context:
          "Section 61-5-110 lets the department certify any state-approved high school traffic education course offered by or with a school district, where the instructor holds a current traffic education endorsement from the Superintendent of Public Instruction. The same provision covers approved motorcycle safety courses.",
        trap:
          "The school does not issue the license and cannot shorten the graduated steps. It administers the test on the department's behalf, which is a narrower thing than it sounds.",
        excerptKey: "lic-statute-cooperative",
        sourceLabel: "Montana Code Annotated - 61-5-110 Examination of applicants",
        sourceUrl: mca("61-5-110"),
      },
      {
        id: "mt_s5_19",
        topic: "safety",
        question:
          "Your car has no anti-lock brakes and the wheels lock in an emergency stop. What should you do?",
        choices: [
          "Press harder until the car stops",
          "Release the pedal quickly, then press down again once the skid stops",
          "Pull the parking brake",
          "Steer hard away while keeping the brakes locked",
        ],
        correctIndex: 1,
        explanation:
          "Without ABS you release quickly the moment the wheels lock and the car starts to skid, then reapply as soon as the skid stops, repeating until you are stopped.",
        context:
          "The technique inverts with ABS, where you press hard and hold and the pulsing pedal is the system working. It is worth knowing which car you are in before you need to know, because the two techniques defeat each other.",
        trap:
          "Pressing harder on a locked wheel adds no braking and removes your steering. It is the instinct the release-and-reapply drill exists to override.",
        excerptKey: "emerg-no-abs-braking",
        sourceLabel: "Montana Driver Manual - Chapter 7 Stopping Quickly",
        sourceUrl: HB,
      },
      {
        id: "mt_s5_20",
        topic: "signs",
        question:
          "What does the manual say about the signs it pictures in the warning and regulatory sections?",
        choices: [
          "They are a complete list of Montana signs",
          "They are examples, and many more signs are in use",
          "They apply only on state highways",
          "They are being phased out",
        ],
        correctIndex: 1,
        explanation:
          "The manual says outright that the signs shown are examples and that there are many more in use. That is why it teaches the color and shape system first.",
        context:
          "The system is the transferable part: red means stop, yield, do not enter or wrong way; black on white in a rectangle is a rule; black on yellow in a diamond is a warning; orange is a work zone. A sign you have never seen is still readable through those.",
        trap:
          "Memorising the pictures in the book is exactly the study method that fails here, because the test can use a sign the book never printed.",
        excerptKey: "regulatory-signs-look",
        sourceLabel: "Montana Driver Manual - Chapter 3 Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s5_21",
        topic: "sharing",
        question:
          "Under Montana's lane filtering law, how fast may the traffic being passed be moving?",
        choices: [
          "Not more than 10 miles an hour",
          "Not more than 20 miles an hour",
          "Any speed, as long as the rider is safe",
          "Stopped only",
        ],
        correctIndex: 0,
        explanation:
          "The vehicle being passed must be stopped or traveling at not more than 10 mph in the same direction and the same lane. The rider's own ceiling is 20 mph.",
        context:
          "Two numbers, doing different jobs. Ten is the speed of the traffic being filtered past; twenty is the maximum speed of the motorcycle doing the filtering. The lane also has to be wide enough to pass safely, and conditions must allow reasonable and prudent operation.",
        trap:
          "Swapping the two numbers is the obvious error, and it would legalise filtering past traffic doing 20 - which is not what the statute says.",
        excerptKey: "lane-filtering-definition",
        sourceLabel: "Montana Code Annotated - 61-8-392 Lane filtering for motorcycles",
        sourceUrl: mca("61-8-392"),
        commonlyMissed: true,
      },
      {
        id: "mt_s5_22",
        topic: "rules",
        question:
          "A Montana road has two solid yellow lines down the center. What may you do?",
        choices: [
          "Pass in either direction with care",
          "Pass when the way ahead is clear",
          "Pass only heavy vehicles",
          "Neither direction may pass",
        ],
        correctIndex: 3,
        explanation:
          "Two solid yellow lines mean neither side may pass. It is the most restrictive of the centerline markings.",
        context:
          "There is one narrow exception that has nothing to do with overtaking: you may cross a solid yellow to turn into a parking lot, a private driveway or another road, when it is safe. Crossing to pass, in either direction, is out.",
        trap:
          "A clear road ahead does not change a double solid line. The marking exists precisely where the sightline lies to you.",
        excerptKey: "marking-yellow-mixed",
        sourceLabel: "Montana Driver Manual - Chapter 3 Yellow Lane Markings",
        sourceUrl: HB,
      },
      {
        id: "mt_s5_23",
        topic: "signals",
        question:
          "How many seconds does a text take your eyes off the road, according to the Montana manual?",
        choices: [
          "8 seconds",
          "2 seconds",
          "3 seconds",
          "5 seconds",
        ],
        correctIndex: 3,
        explanation:
          "Five seconds. The manual makes it concrete: at 55 mph that is the length of an entire football field driven blindfolded.",
        context:
          "It calls texting the most alarming distraction because it is manual, visual and cognitive at once. It also punctures the multitasking idea - the brain is dealing with one task at a time and switching quickly, not doing two things at once.",
        trap:
          "Five seconds sounds trivial written down, which is why the manual converts it into distance. That conversion is the memorable half of the fact.",
        excerptKey: "distraction-texting",
        sourceLabel: "Montana Driver Manual - Chapter 5 Don't Be a Distracted Driver",
        sourceUrl: HB,
      },
      {
        id: "mt_s5_24",
        topic: "emergencies",
        question:
          "You are stranded in your car in a Montana snowstorm. What does the manual tell you to do?",
        choices: [
          "Stay in the car, because you are more likely to be found",
          "Walk to the nearest building",
          "Run the engine continuously for warmth",
          "Sleep until the storm passes",
        ],
        correctIndex: 0,
        explanation:
          "Stay with the car. The manual's reason is exactly that: you are more likely to be found in a vehicle than on foot in a storm.",
        context:
          "It appears in the slippery roads section, where the surrounding advice is not to drive on ice at all if you can avoid it, and to cut your speed in half on packed snow. The manual's own chapter quiz asks this question.",
        trap:
          "Walking for help is the instinct that kills people in this climate, and running the engine in a snow-covered car risks exhaust fumes reaching the cabin.",
        excerptKey: "weather-stranded-stay",
        sourceLabel: "Montana Driver Manual - Chapter 5 Slippery Roads",
        sourceUrl: HB,
      },
      {
        id: "mt_s5_25",
        topic: "speed",
        question:
          "A local authority in Montana wants to raise the speed limit on a street inside an urban district. What ceiling applies at night?",
        choices: [
          "It may not be raised at all",
          "Not more than 45 mph",
          "Not more than 55 mph",
          "Not more than 65 mph during the nighttime",
        ],
        correctIndex: 3,
        explanation:
          "A local authority may increase a limit within an urban district but not to more than 65 mph during the nighttime, and only on the basis of an engineering and traffic investigation.",
        context:
          "The same section gives the downward powers: it may lower a limit in an urban district, lower one outside an urban district but not below 25 mph on paved or unpaved road, and lower a school zone or senior center area to as little as 15 mph.",
        trap:
          "Local authorities are usually thought of as lowering limits. Montana lets them raise one too, within a ceiling, which is why the question has a real answer.",
        excerptKey: "speed-local-lower-25",
        sourceLabel: "Montana Code Annotated - 61-8-310 When local authorities may alter limits",
        sourceUrl: mca("61-8-310"),
      },
      {
        id: "mt_s5_26",
        topic: "rightOfWay",
        question:
          "A pedestrian steps off the curb into the road so close to your car that you cannot possibly stop. What does the statute say?",
        choices: [
          "You are liable regardless, because pedestrians always have the right of way",
          "A pedestrian may not suddenly leave a place of safety and walk into the path of a vehicle that is that close",
          "The pedestrian rule applies only in marked crosswalks",
          "You must sound the horn to discharge your duty",
        ],
        correctIndex: 1,
        explanation:
          "The yielding duty has a limit written into it. A pedestrian may not suddenly leave a curb or other place of safety and walk or run into the path of a vehicle so close that it is impossible for the driver to yield.",
        context:
          "The manual restates the same balance from the driver's side, and then adds the practical instruction that matters more: it is still the driver's basic responsibility to be alert and to yield, even when the pedestrian is in the wrong.",
        trap:
          "\"Pedestrians always have the right of way\" is a slogan, not the law, and neither is the opposite. The statute puts a duty on both.",
        excerptKey: "ped-statute-no-sudden-step",
        sourceLabel: "Montana Code Annotated - 61-8-502 Pedestrians' right-of-way in crosswalk",
        sourceUrl: mca("61-8-502"),
      },
      {
        id: "mt_s5_27",
        topic: "safety",
        question:
          "What does the Montana Driver Manual say to do if you begin to skid?",
        choices: [
          "Brake firmly and hold the wheel straight",
          "Stay off the brake, ease off the accelerator, and steer where you want to go",
          "Pull the parking brake and steer into the skid",
          "Accelerate gently to pull the car straight",
        ],
        correctIndex: 1,
        explanation:
          "Off the brake, off the accelerator, look and steer where you want the car to go, using quick hand-over-hand steering, and straighten as the car comes back.",
        context:
          "The manual warns about the second skid: turn the wheel back the other way as the car straightens, or it swings past and starts a new one. Most skids, it says, come from driving too fast for conditions in the first place.",
        trap:
          "Braking mid-skid keeps the wheels locked and takes the steering with them. \"Steer into the skid\" is the old phrasing and it confuses people - Montana's version is to look and steer where you want to go.",
        excerptKey: "skid-response",
        sourceLabel: "Montana Driver Manual - Chapter 5 Skid Control",
        sourceUrl: HB,
      },
      {
        id: "mt_s5_28",
        topic: "impairment",
        question:
          "What penalty does Montana attach to unlawful possession of an open alcoholic beverage container in a vehicle?",
        choices: [
          "A fine not exceeding $100, which is not recorded against the driving record",
          "A mandatory 30-day license suspension",
          "A fine of $500 and four points",
          "No penalty for a passenger",
        ],
        correctIndex: 0,
        explanation:
          "The fine is capped at $100, and the statute says the violation may not be recorded against a driver's record and may not be used by an insurer.",
        context:
          "That does not make it harmless. It is still an offense, it still applies to a passenger's container in the passenger area, and the lawful storage places are narrow: a locked compartment, the trunk or cargo area, a truck bed, or behind the last upright seat.",
        trap:
          "People read \"not recorded\" as \"does not count\". It is an offense with a fine; what it is not is a license-record entry.",
        excerptKey: "open-container-fine",
        sourceLabel: "Montana Code Annotated - 61-8-1026 Unlawful possession of open alcoholic beverage container",
        sourceUrl: mca("61-8-1026"),
      },
      {
        id: "mt_s5_29",
        topic: "parking",
        question:
          "Facing downhill on a Montana street with a curb, which way should the front wheels point?",
        choices: [
          "It depends on the transmission",
          "Away from the curb",
          "Straight ahead",
          "Towards the curb",
        ],
        correctIndex: 3,
        explanation:
          "Facing downhill, turn the wheels towards the curb so a rolling car runs into it rather than into the road.",
        context:
          "The uphill case is the opposite - wheels away from the curb, so the car rolls back onto the curb. With no curb at all, in either direction, turn the wheels away from the street. The parking brake goes on in every case, with the car in gear or in park.",
        trap:
          "Uphill and downhill are mirror images, and reversing them turns the safeguard into a hazard. The test is always where a rolling car ends up.",
        excerptKey: "park-hill-uphill",
        sourceLabel: "Montana Driver Manual - Chapter 4 Parking on a Hill",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s5_30",
        topic: "licensing",
        question:
          "What does Section 61-5-110 say the Montana knowledge test must examine?",
        choices: [
          "Only the driver's knowledge of highway signs",
          "The ability to read and understand highway signs, and knowledge of the traffic laws of the state",
          "Vehicle mechanics and maintenance",
          "First aid and collision response",
        ],
        correctIndex: 1,
        explanation:
          "The statute names two things: your ability to read and understand highway signs, and your knowledge of Montana's traffic laws. That is the syllabus, in law.",
        context:
          "It sits inside a wider examination requirement: an eyesight test, the knowledge test, and a road or skills test in a vehicle representative of the class you are seeking. Any of the three may be waived on certification from a certified cooperative or third-party testing program, or under a reciprocity agreement.",
        trap:
          "Because MVD publishes no syllabus and no question count, the statute is the closest thing to an official list of what is testable.",
        excerptKey: "lic-statute-exam-content",
        sourceLabel: "Montana Code Annotated - 61-5-110 Examination of applicants",
        sourceUrl: mca("61-5-110"),
        commonlyMissed: true,
      },
      {
        id: "mt_s5_31",
        topic: "signs",
        question:
          "You see the sign for a school crossing and pedestrians are waiting at the curb. What does the manual say?",
        choices: [
          "Slow down and proceed if they have not stepped out",
          "You must stop if pedestrians are waiting to cross",
          "Sound the horn to let them cross",
          "Continue at the posted speed until they enter the road",
        ],
        correctIndex: 1,
        explanation:
          "The manual attaches a stop to this sign directly: at a school crossing you must stop if pedestrians are waiting to cross.",
        context:
          "The surrounding rules point the same way. Drivers must always yield to pedestrians in school crosswalks, should stop before the crosswalk so other drivers can see them too, and may not drive through a column of school children or past a crossing guard holding a sign in the stop position.",
        trap:
          "Waiting for someone to step into the road is the ordinary crosswalk instinct. At a school crossing Montana asks you to stop while they are still on the curb.",
        excerptKey: "sign-school-crossing",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s5_32",
        topic: "rules",
        question:
          "How does Montana treat a driver in a funeral procession for the purposes of following distance?",
        choices: [
          "The three-second rule applies as normal",
          "A four-second gap is required",
          "The requirement to leave space for another vehicle to enter does not apply",
          "Following distance is doubled",
        ],
        correctIndex: 2,
        explanation:
          "The statutory duty to leave enough space for another vehicle to enter between you and the car ahead expressly does not apply to funeral processions. Drivers in one follow as closely as possible.",
        context:
          "The rest of the procession rules follow from keeping it together: headlights and taillights on, turn signals flashing as warning lights on the first and last vehicles, no faster than 55 mph where the limit is 55 or more, and no more than 5 mph below the limit on other roads.",
        trap:
          "Everything else about following distance says leave more room. This is the one place Montana law says the opposite, and the exemption is written into the statute.",
        excerptKey: "follow-statute-space",
        sourceLabel: "Montana Code Annotated - 61-8-329 Following too closely",
        sourceUrl: mca("61-8-329"),
      },
      {
        id: "mt_s5_33",
        topic: "sharing",
        question:
          "Why does the Montana manual say a cyclist may ride 18 to 24 inches into the traffic lane rather than at the edge?",
        choices: [
          "To discourage drivers from attempting a dangerous in-lane pass",
          "Because riding on the shoulder is prohibited",
          "To be closer to the centerline for left turns",
          "Because bicycles must ride in the middle of the lane by law",
        ],
        correctIndex: 0,
        explanation:
          "It is a deliberate position. Riding further into the lane makes it obvious that there is not room to pass within the lane, which is the pass that puts riders in hospital.",
        context:
          "The law requires a rider to keep as near to the right as practicable, with exceptions for passing, turning left, and avoiding hazards including a lane too narrow to share safely. The manual's advice to drivers is to wait for a safe passing zone rather than squeeze past.",
        trap:
          "Reading a rider's lane position as arrogance is the error the manual is trying to head off. It is a safety maneuver, and it is lawful.",
        excerptKey: "bike-in-lane-position",
        sourceLabel: "Montana Driver Manual - Chapter 4 Bicyclists & Motorists",
        sourceUrl: HB,
      },
      {
        id: "mt_s5_34",
        topic: "signals",
        question:
          "You are stopped at a red light behind a car and the light turns green, but a pedestrian is still in the crosswalk ahead. Who yields?",
        choices: [
          "The pedestrian, once the signal has changed",
          "Neither - the pedestrian must clear before the light changes",
          "Whoever entered the intersection first",
          "You do - traffic on a green yields to pedestrians lawfully in the intersection or an adjacent crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "A green does not clear the crossing. The statute requires traffic facing a circular green, including vehicles turning, to yield to pedestrians lawfully in the intersection or an adjacent crosswalk when the signal is shown.",
        context:
          "The pedestrian rules match: someone already crossing when the DON'T WALK starts flashing should keep going, precisely because the traffic getting the green is required to let them finish.",
        trap:
          "The signal changing feels like it transfers priority instantly. It does not, and a turning driver on a fresh green is the classic version of this collision.",
        excerptKey: "signal-green-yield-statute",
        sourceLabel: "Montana Code Annotated - 61-8-207 Traffic control signal legend",
        sourceUrl: mca("61-8-207"),
      },
      {
        id: "mt_s5_35",
        topic: "emergencies",
        question:
          "Montana law requires a driver involved in a crash to stay at the scene in which circumstances?",
        choices: [
          "Always, for at least an hour",
          "Only when the police have been called",
          "When anyone is injured, deceased or incapacitated, until an on-duty officer gives express permission to leave",
          "Only when the damage exceeds $1,000",
        ],
        correctIndex: 2,
        explanation:
          "Where someone is injured, deceased or otherwise incapacitated, or notice to authorities is required, you remain at the scene until an on-duty peace officer with authority to investigate expressly permits you to leave.",
        context:
          "The same section sets out the rest of the duty: give your name, address and registration number, show your license on request, and render reasonable assistance including arranging transport to a doctor or hospital where treatment is plainly needed or is asked for. You may leave to seek emergency medical care or to notify authorities.",
        trap:
          "Waiting a set time, or leaving once police have been phoned, is not the standard. It is express permission from the officer.",
        excerptKey: "crash-statute-aid",
        sourceLabel: "Montana Code Annotated - 61-7-105 Duty to give information and render aid",
        sourceUrl: mca("61-7-105"),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix the MVD's written test draws from: signs, signals and markings, rules of the road, safe driving, impairment and licensing, with nothing flagged in advance.",
    questions: [
      {
        id: "mt_s6_01",
        topic: "signs",
        question:
          "You approach a sign that is a yellow diamond showing a truck on a downgrade with a percentage beneath it. What is it?",
        choices: [
          "A warning of a steep grade ahead",
          "A truck route marker",
          "A gradient survey marker",
          "A weight restriction",
        ],
        correctIndex: 0,
        explanation:
          "It is the hill warning. The manual's advice with it is to check your brakes and consider shifting into a lower gear before you start down.",
        context:
          "Warning signs in Montana are black on yellow and usually diamond shaped, and they mark conditions rather than rules. The grade warning matters more here than in flatter states, because a long mountain descent on the brakes alone is how brakes fade.",
        trap:
          "Yellow diamonds are never route markers or restrictions - those are white regulatory signs or green guide signs.",
        excerptKey: "sign-hill",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_02",
        topic: "rules",
        question:
          "You want to change lanes on a Montana highway. What is the correct order?",
        choices: [
          "Signal, check mirrors, look over your shoulder, then move",
          "Move, then signal so following drivers see you",
          "Check mirrors, move, then signal",
          "Signal and move together, since the signal warns others",
        ],
        correctIndex: 0,
        explanation:
          "Signal first, then mirrors, then the over-the-shoulder check, then the move. The signal is what gives other drivers time to react before anything changes.",
        context:
          "The manual adds a fourth check - the far lane, in case someone else is aiming for the same gap - and a warning to look quickly, because traffic ahead can stop while your eyes are to the side. Changing lanes covers merging from a ramp and pulling out from the curb too.",
        trap:
          "Signaling after the move turns the signal into an announcement instead of a warning, which is the point of it.",
        excerptKey: "scan-lane-change-steps",
        sourceLabel: "Montana Driver Manual - Chapter 5 When Changing Lanes",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_03",
        topic: "impairment",
        question: "What does the Montana Driver Manual give as one standard alcoholic drink?",
        choices: [
          "One pint of beer",
          "Two ounces of 80-proof spirits",
          "Twelve ounces of commercial beer, five ounces of wine, or one and a half ounces of 80-proof spirits",
          "Any drink under 5 per cent alcohol",
        ],
        correctIndex: 2,
        explanation:
          "The three measures are equivalent: a 12-ounce commercial beer, a 5-ounce glass of wine, or a one-and-a-half-ounce shot of 80-proof spirits.",
        context:
          "The manual immediately complicates it, and that is the useful part. Microbrews and craft beers often carry more alcohol than a standard commercial beer, and a specialty cocktail can be several drinks in one glass. The body clears roughly one standard drink an hour.",
        trap:
          "A pint is a third bigger than the standard measure, and a craft beer in that pint can be twice the strength. The unit is not the glass.",
        excerptKey: "dui-one-drink-is",
        sourceLabel: "Montana Driver Manual - Chapter 6 If You Drink, When Can You Drive?",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_04",
        topic: "rightOfWay",
        question:
          "You are turning right at an intersection and a cyclist is riding in your lane, just behind you. What does the manual tell you to do?",
        choices: [
          "Turn ahead of them, since you were there first",
          "Check that the rider has stopped to let you turn, or let them pass before you turn",
          "Sound the horn and turn",
          "Move right to block them, then turn",
        ],
        correctIndex: 1,
        explanation:
          "You either confirm the rider has stopped for you or you let them go past first. Turning across a rider who is still moving is the classic right hook.",
        context:
          "The manual notes that bicycles are supposed to pass on the left but often do not, because riders go where they feel safe. It also asks you to assume a rider approaching from behind has neither seen nor heard you, since most bicycles have no mirrors.",
        trap:
          "Being ahead does not settle it. The rider is traveling faster than you are about to be, and your turn crosses their path.",
        excerptKey: "bike-right-turn-check",
        sourceLabel: "Montana Driver Manual - Chapter 4 Bicyclists & Motorists",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_05",
        topic: "speed",
        question:
          "A heavy truck over one ton rated capacity is on a Montana two-lane highway at night. What is its limit under the manual's table?",
        choices: [
          "50 mph",
          "65 mph",
          "60 mph",
          "55 mph",
        ],
        correctIndex: 3,
        explanation:
          "Fifty-five. Heavy trucks run 60 by day and 55 at night on a two-lane highway, ten below the car figures in each column.",
        context:
          "On the interstate the truck limit is a flat 65, day and night, while cars are far higher. The asterisk in the manual's table defines heavy trucks as those in excess of one-ton manufacturer's rated capacity.",
        trap:
          "Four numbers in one row and a day/night split makes this easy to misread. The truck night figure on a two-lane road is the lowest number in the table.",
        excerptKey: "speed-table-interstate",
        sourceLabel: "Montana Driver Manual - Chapter 4 Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_06",
        topic: "signals",
        question:
          "Which of these is a lawful reason to cross a solid yellow centerline in Montana?",
        choices: [
          "Overtaking a slower vehicle when the road ahead is clear",
          "Turning left into a private driveway when it is safe",
          "Avoiding a queue at a signal",
          "Reaching a turnout on the far side",
        ],
        correctIndex: 1,
        explanation:
          "Turning left into a parking lot, a private driveway or another roadway is the exception the manual gives, and it is conditional on doing it safely.",
        context:
          "Otherwise, crossing a centerline is permitted only as part of overtaking where the marking allows it. A solid yellow on your side means no pass, and a double solid means no pass from either direction.",
        trap:
          "\"The road ahead is clear\" describes the sightline, not the marking. The solid line is there because the sightline is not reliable.",
        excerptKey: "marking-cross-solid-to-turn",
        sourceLabel: "Montana Driver Manual - Chapter 3 Yellow Lane Markings",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_07",
        topic: "licensing",
        question:
          "A Montana teen has held a first-year restricted license for eight months. How many unrelated passengers under 18 may ride with them, unsupervised?",
        choices: [
          "Any number",
          "None",
          "One",
          "Three",
        ],
        correctIndex: 3,
        explanation:
          "In the second six months the allowance rises to three unrelated passengers under 18. In the first six months it is one.",
        context:
          "Both limits fall away when a licensed adult driver is supervising. Break either and the first offense is 20 to 60 hours of community service; a second is a six-month suspension. The restrictions end automatically on the date on the back of the license, or at 18, whichever comes first.",
        trap:
          "The number changes at the six-month mark, so the answer depends on how long they have held it. At eight months they are in the second window.",
        excerptKey: "lic-gdl-passengers-second",
        sourceLabel: "Montana Driver Manual - Chapter 1 GDL Step 2",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_08",
        topic: "safety",
        question:
          "Rain has just started on a hot Montana afternoon. What does the manual warn about?",
        choices: [
          "The road can be very slippery for the first few minutes as oil rises to the surface",
          "Braking distances are shortest in the first minutes of rain",
          "Traction improves once the dust is washed away",
          "The risk only starts once water pools on the surface",
        ],
        correctIndex: 0,
        explanation:
          "Heat draws oil in the asphalt to the surface, and the first few minutes of rain float it. The road is at its most slippery before the oil is washed off.",
        context:
          "It sits with the other clues the manual gives for spotting slick surfaces: shaded spots freeze first and dry last on cold wet days, bridges and overpasses ice when the road either side does not, and ice near freezing is more slippery than ice well below it.",
        trap:
          "The instinct is that heavy rain is the dangerous part. The first few minutes of light rain on hot asphalt is the one the manual singles out.",
        excerptKey: "weather-first-rain-oil",
        sourceLabel: "Montana Driver Manual - Chapter 5 Slippery Roads",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_09",
        topic: "parking",
        question:
          "Which of these is on Montana's list of places you may not park?",
        choices: [
          "Facing uphill without the parking brake set",
          "Within 100 feet of a bus stop",
          "On a bridge, in a tunnel, or on an elevated structure",
          "In any residential street overnight",
        ],
        correctIndex: 2,
        explanation:
          "Bridges, elevated structures and highway tunnels are on both the manual's list and the statute's. There is no room for a car to be got round in any of them.",
        context:
          "The statutory list also covers sidewalks, driveways, intersections, crosswalks, safety zones, railroad crossings within 50 feet, fire hydrants within 15 feet, and the roadway side of a parked car. None of it depends on a sign being present.",
        trap:
          "Bus stops and overnight limits are city rules where they exist. The state list is about physical obstruction and sightlines.",
        excerptKey: "park-statute-bridge",
        sourceLabel: "Montana Code Annotated - 61-8-354 Stopping, standing, or parking prohibited",
        sourceUrl: mca("61-8-354"),
      },
      {
        id: "mt_s6_10",
        topic: "sharing",
        question:
          "What does Montana law require of a driver approaching a stopped school bus from the opposite direction on an undivided road?",
        choices: [
          "Slow to 20 mph and continue",
          "Stop not less than approximately 30 feet away and stay stopped until the red lights go off",
          "Continue at normal speed, since the bus is on the other side",
          "Stop only if children are visible",
        ],
        correctIndex: 1,
        explanation:
          "The duty runs in both directions on an undivided road. You stop at least approximately 30 feet from the bus and do not move until the red lights stop flashing.",
        context:
          "There are two carve-outs, and they are narrow: a bus on a different road, and a bus stopped in an adjacent loading zone where pedestrians are not allowed to cross the road. You may never overtake a stopped bus on its right side.",
        trap:
          "\"Only if children are visible\" is exactly backwards. A child stepping out from in front of the bus is the hazard the rule is written against.",
        excerptKey: "bus-statute-30-feet",
        sourceLabel: "Montana Code Annotated - 61-8-351 Meeting or passing school bus",
        sourceUrl: mca("61-8-351"),
      },
      {
        id: "mt_s6_11",
        topic: "emergencies",
        question:
          "You are the first to arrive at a crash and the wrecked car is still running. What should you do?",
        choices: [
          "Leave the engine running so the hazard lights work",
          "Turn off the ignition of the wrecked vehicle and do not smoke nearby",
          "Move the vehicle to the shoulder",
          "Open the fuel cap to release pressure",
        ],
        correctIndex: 1,
        explanation:
          "Turn the ignition off and keep flame away. Fuel may have spilled, and the manual treats fire as a real danger at any crash scene.",
        context:
          "The rest of the scene checklist: get your own car off the road if it still moves, do not stand or walk in traffic lanes, keep clear of any downed electrical wires, and use flares or warning devices so other traffic does not join the crash.",
        trap:
          "Moving a wrecked car can hurt someone trapped in it and destroys the scene. And a running engine near spilled fuel is the specific risk the manual names.",
        excerptKey: "crash-scene-safety",
        sourceLabel: "Montana Driver Manual - Chapter 7 At the accident scene",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_12",
        topic: "signs",
        question:
          "A regulatory sign shows a black arrow curving back on itself with a red circle and slash. What does it mean?",
        choices: [
          "No left turn",
          "No right turn",
          "No U-turn at this intersection",
          "No entry",
        ],
        correctIndex: 2,
        explanation:
          "The doubled-back arrow with a red circle and slash is NO U TURN: you may not turn about to go the opposite direction at that intersection.",
        context:
          "The whole family reads the same way - a red circle with a slash over a symbol means do not do the thing shown. NO LEFT TURN uses a straight left arrow, and DO NOT ENTER is a square rather than a circle.",
        trap:
          "Where U-turns are not signed at all, Montana's 500-foot sightline rule and local ordinances still govern. The sign removes the option entirely at that junction.",
        excerptKey: "sign-no-u-turn",
        sourceLabel: "Montana Driver Manual - Chapter 3 Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_13",
        topic: "rules",
        question:
          "You want to merge into traffic on a Montana road. How large a gap does the manual ask for?",
        choices: ["Two seconds", "Three seconds", "Four seconds", "Six seconds"],
        correctIndex: 2,
        explanation:
          "About four seconds. Moving into the middle of a four-second gap leaves you and the driver now behind you with two seconds each.",
        context:
          "The same four seconds applies whenever you change lanes, enter a roadway, or your lane merges with another. The manual warns against squeezing into a gap that is too small, because a small gap gets smaller as you commit to it.",
        trap:
          "Three seconds is the following distance behind a car already ahead of you. The merging gap is bigger because it has to be shared.",
        excerptKey: "merge-four-second-gap",
        sourceLabel: "Montana Driver Manual - Chapter 5 Space to Merge",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_14",
        topic: "signals",
        question:
          "What does a steady green arrow give you at a Montana intersection?",
        choices: [
          "A protected turning movement",
          "Permission to turn after yielding to oncoming traffic",
          "A warning that the turn phase is ending",
          "Priority over pedestrians in the crosswalk",
        ],
        correctIndex: 0,
        explanation:
          "A steady green arrow is a protected turn. Where there is no arrow, a turn on a green ball is unprotected and yields to oncoming traffic and pedestrians.",
        context:
          "The arrows run through a sequence: green arrow for the protected phase, steady yellow arrow to say it is ending and you should clear the intersection, then either a green ball or a red arrow. A flashing yellow arrow permits the turn but hands the judgment back to you.",
        trap:
          "Protected refers to oncoming traffic. Pedestrians lawfully in an adjacent crosswalk still have to be let through.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Montana Driver Manual - Chapter 3 Vehicle Signals",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_15",
        topic: "impairment",
        question:
          "The Montana Driver Manual gives one answer to when it is safe to drink and drive. What is it?",
        choices: [
          "After one drink per hour",
          "After eating a full meal",
          "If you drink alcohol, do not drive",
          "After two hours per standard drink",
        ],
        correctIndex: 2,
        explanation:
          "The manual's own words: the best answer is that if you drink alcohol, do not drive. It adds that even one drink can affect your driving.",
        context:
          "The reasoning is that alcohol reaches the brain within a minute and takes out judgment first, so the faculty you would use to decide whether you are fit to drive is the first one impaired. Food, body weight and general health change the rate but not the direction.",
        trap:
          "The one-drink-an-hour figure describes how fast the body clears alcohol, and the manual explicitly says the level can still climb at that rate.",
        excerptKey: "dui-best-answer",
        sourceLabel: "Montana Driver Manual - Chapter 6 If You Drink, When Can You Drive?",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_16",
        topic: "safety",
        question:
          "You are following a large truck on a Montana highway and cannot see its mirrors. What does that tell you?",
        choices: [
          "The truck driver cannot see you, so you should drop back",
          "You are at a safe distance",
          "You should move closer to enter their mirror view",
          "Nothing - trucks have full rear visibility",
        ],
        correctIndex: 0,
        explanation:
          "If you cannot see the mirrors, the driver cannot see you. The manual lists following a vehicle whose driver cannot see you among the situations calling for extra following distance.",
        context:
          "The same section says never to sit alongside a large vehicle, because their blind spots are large and hard for you to judge. Falling back does two things at once: it puts you in their mirrors and gives you a view of the road ahead of them.",
        trap:
          "Closing up to get into the mirror view moves you deeper into the blind spot rather than out of it.",
        excerptKey: "follow-motorcycles",
        sourceLabel: "Montana Driver Manual - Chapter 5 Space Ahead",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_17",
        topic: "rightOfWay",
        question:
          "You are leaving a Montana driveway and must cross the sidewalk to reach the road. Who has priority on the sidewalk?",
        choices: [
          "Pedestrians on the sidewalk",
          "Neither - it is first come, first served",
          "Pedestrians only in a marked crossing",
          "You do, if you are already moving",
        ],
        correctIndex: 0,
        explanation:
          "Crossing a sidewalk to enter or leave a driveway, alley or parking lot means yielding to anyone on it. The sidewalk is theirs.",
        context:
          "The manual is equally clear that driving along a sidewalk is illegal - crossing one is the only permitted use. Once you reach the roadway you yield again, this time to all traffic already on it.",
        trap:
          "Two yields in one maneuver catches people. Clearing the sidewalk does not give you the road.",
        excerptKey: "row-sidewalk-yield",
        sourceLabel: "Montana Driver Manual - Chapter 4 Intersections",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_18",
        topic: "licensing",
        question:
          "What does a Montana driver have to show a law enforcement officer after being stopped for a violation?",
        choices: [
          "Driver license only",
          "Driver license and registration",
          "Driver license, vehicle registration and evidence of insurance",
          "Proof of residency",
        ],
        correctIndex: 2,
        explanation:
          "All three. Montana requires evidence of insurance to be shown alongside the license and the registration when you are stopped for a violation or involved in a collision.",
        context:
          "Evidence of insurance must be in the vehicle at all times, and the state runs an online verification system that lets law enforcement, courts, MVD and county treasurer offices confirm coverage directly. Liability insurance is mandatory for everything except motorcycles.",
        trap:
          "Insurance is the one people leave at home, and it is the one with a $250 to $500 first-offense fine and 5 points behind it.",
        excerptKey: "insurance-carry-proof",
        sourceLabel: "Montana Driver Manual - Chapter 4 Motor Vehicle Insurance",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_19",
        topic: "speed",
        question:
          "How does a school zone speed limit differ from a work zone speed limit in Montana?",
        choices: [
          "Both have statewide defaults set in statute",
          "Neither has a statewide default; both are set locally",
          "A school zone may go as low as 15 mph; a work zone has no standard limit and is posted per zone",
          "School zones are advisory and work zones are mandatory",
        ],
        correctIndex: 2,
        explanation:
          "A school zone limit is set by a local authority and may go as low as 15 mph. A work zone has no standard limit at all - the transport department, local authority, utility or contractor sets one for each zone.",
        context:
          "The one thing they share is the penalty multiplier: fines are doubled in all school zones throughout Montana, and doubled in work zones too. Work zones carry the additional offense of reckless endangerment of a highway worker.",
        trap:
          "Both are mandatory and both double the fine. What differs is that only the school zone has a floor written into statute.",
        excerptKey: "work-zone-fines-double",
        sourceLabel: "Montana Driver Manual - Chapter 3 Construction and Maintenance Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_20",
        topic: "signs",
        question:
          "You are driving on an unfenced stretch of Montana highway and see a yellow diamond with a cow on it. What should you expect?",
        choices: [
          "A cattle grid across the road",
          "Cattle and horses may be standing on the highway",
          "A ranch entrance ahead",
          "A livestock market on market days only",
        ],
        correctIndex: 1,
        explanation:
          "That is the Range Cattle warning: where there are no fences, cattle and horses may simply be on the highway, at any hour.",
        context:
          "Montana's animal warnings are a working part of the system, not decoration. Deer Crossing tells you deer often cross there; Cattle Crossing marks a point where stock is driven from one side of a farm to the other; Range Cattle means there is nothing keeping them off the road at all.",
        trap:
          "Open range has no schedule and no gate. Treating the sign as a hint about a nearby ranch misses that the hazard is in your lane.",
        excerptKey: "sign-range-cattle",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_21",
        topic: "rules",
        question:
          "What does the Montana Driver Manual say about backing up in a travel lane?",
        choices: [
          "It is allowed if you use hazard lights",
          "It is allowed at under 10 mph",
          "Never back up or stop in any travel lane for any reason",
          "It is allowed to let a passenger out",
        ],
        correctIndex: 2,
        explanation:
          "The manual's rule has no exceptions attached: never back up or stop in any travel lane for any reason, including confusion, a breakdown or dropping someone off. Keep moving until you can pull off safely.",
        context:
          "Backing up in general is treated as a last resort. Walk around the car first, look through the rear window rather than relying on mirrors, back slowly, and use someone outside the vehicle to help where you can.",
        trap:
          "The listed reasons - confusion, breakdown, letting a passenger out - are exactly the ones people use to justify it. The manual names all three and rules them out.",
        excerptKey: "backing-never-in-lane",
        sourceLabel: "Montana Driver Manual - Chapter 4 General Driving",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_22",
        topic: "safety",
        question:
          "What does the Montana manual say about driving with headphones or earbuds?",
        choices: [
          "They are fine at low volume",
          "Do not drive with them - you cannot hear horns and sirens",
          "One ear is permitted",
          "They are only a problem for learner drivers",
        ],
        correctIndex: 1,
        explanation:
          "The instruction is flat: do not drive with headphones or earbuds, because they make it too hard to hear emergency horns and sirens.",
        context:
          "It sits in the same section as the phone advice, which says that even hands-free conversation takes attention off the road. The manual's broader point is that you should not take your eyes off the road for more than a few seconds at a time, and that hearing is a genuine input for spotting danger.",
        trap:
          "Volume and one-ear compromises are not offered as options. The rule is about hearing sirens at all.",
        excerptKey: "distraction-headphones",
        sourceLabel: "Montana Driver Manual - Chapter 5 Seeing Well",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_23",
        topic: "parking",
        question:
          "You have parked on a Montana street. What does the manual tell you to do with the transmission?",
        choices: [
          "Leave it in neutral so the car can be pushed if needed",
          "Leave it in gear if manual, or in park if automatic, and set the parking brake",
          "Leave it in reverse in every case",
          "It does not matter if the parking brake is set",
        ],
        correctIndex: 1,
        explanation:
          "Parking brake on, and the car left in gear if it has a manual transmission or in park if it is an automatic. Both, not either.",
        context:
          "That pairs with the wheel-turning rules on a hill: towards the curb facing downhill, away from the curb facing uphill, away from the street where there is no curb. Three independent safeguards against the same failure.",
        trap:
          "Neutral is the answer that sounds considerate and is the one that lets the car roll. The parking brake alone is not treated as enough either.",
        excerptKey: "park-brake-and-gear",
        sourceLabel: "Montana Driver Manual - Chapter 4 Parking",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_24",
        topic: "emergencies",
        question:
          "A tire blows out at highway speed in Montana. What does the manual tell you to do?",
        choices: [
          "Brake hard and pull off at once",
          "Hold the wheel firmly, keep straight, and slow gradually off the accelerator with light braking",
          "Steer towards the shoulder immediately",
          "Accelerate to stabilise the car",
        ],
        correctIndex: 1,
        explanation:
          "Grip the wheel, keep the car going straight, and shed speed gradually: foot off the accelerator and light braking. Only then look for somewhere safe to pull off.",
        context:
          "The manual adds not to stop on the road if it can be avoided. The same instinct applies to a power failure - keep a firm grip, expect heavier steering and a harder brake pedal, and get off the roadway before you deal with it.",
        trap:
          "Hard braking on a blown tire is what turns a flat into a spin. The car is already unbalanced, and the brakes finish the job.",
        excerptKey: "emerg-blowout",
        sourceLabel: "Montana Driver Manual - Chapter 7 Tire Blowout",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_25",
        topic: "sharing",
        question:
          "What does Montana say a motorist must do about a person riding a bicycle in a designated bicycle lane?",
        choices: [
          "Yield the right of way to them",
          "Sound the horn before crossing the lane",
          "Nothing, since the lane is separate",
          "Treat the lane as a shoulder",
        ],
        correctIndex: 0,
        explanation:
          "Montana requires motorists to yield the right of way to a person riding a bicycle within a designated bicycle lane. The lane is theirs, and crossing it means giving way.",
        context:
          "The same list of duties says a motorist must grant riders the same rights as any other lawful road user, may not intentionally interfere with a rider's movement, and may not overtake unless it can be done without endangering the rider or people in nearby vehicles.",
        trap:
          "A bike lane is not a shoulder and not a spare lane. Turning across one without yielding is the maneuver this rule addresses.",
        excerptKey: "bike-motorist-duties",
        sourceLabel: "Montana Driver Manual - Chapter 4 Bicyclists & Motorists",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_26",
        topic: "signals",
        question:
          "You are about to slow down somewhere a following driver would not expect it. What does the manual suggest?",
        choices: [
          "Use the hazard flashers",
          "Signal left, then right",
          "Tap the brake pedal three or four times quickly",
          "Sound the horn twice",
        ],
        correctIndex: 2,
        explanation:
          "Three or four quick taps on the brake pedal. It flashes the brake lights before you actually slow, which is the warning the driver behind needs.",
        context:
          "The manual names the situations: turning off a road with no separate turn lane, parking or turning just before an intersection where following traffic expects you to continue, and avoiding something in the road the driver behind cannot see.",
        trap:
          "Hazard flashers on a moving car are ambiguous, and a horn tells the driver behind nothing about what you are about to do.",
        excerptKey: "brake-signal-taps",
        sourceLabel: "Montana Driver Manual - Chapter 5 Signal When You Slow Down",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_27",
        topic: "licensing",
        question:
          "What happens to a Montana first-year restricted license when the holder turns 18?",
        choices: [
          "It must be surrendered and reapplied for",
          "The restrictions end automatically at 18, or on the date on the back of the license, whichever comes first",
          "It continues until the first anniversary regardless of age",
          "It converts to a learner permit",
        ],
        correctIndex: 1,
        explanation:
          "The restrictions lift automatically at 18 or on the date printed on the back of the license, whichever comes first, and the holder moves to Step 3 with full privileges.",
        context:
          "That is why a teen who reaches Step 2 at 17 and a half serves only six months of the restrictions, while one who reaches it at 16 serves the full year. The card itself carries a restriction code on the front and back until then.",
        trap:
          "Nothing needs to be applied for. The graduated step ends by operation of the date, not by a visit to the counter.",
        excerptKey: "lic-gdl-step3",
        sourceLabel: "Montana Driver Manual - Chapter 1 GDL Step 3",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_28",
        topic: "signs",
        question:
          "You pass a barricade in a Montana work zone whose diagonal stripes slope downward to the left. What are you being told?",
        choices: [
          "Bear left",
          "Bear right",
          "Stop and wait for a flagger",
          "The lane is closed ahead in both directions",
        ],
        correctIndex: 0,
        explanation:
          "Stripes sloping downward to the left mean bear left. Sloping down to the right means bear right - the stripes point you at the side traffic should pass on.",
        context:
          "Barricades, vertical panels, drums, cones and tubes all do this job, and at night they often carry flashing or steady lights. Flashing arrow panels do the same thing on a larger scale, guiding traffic into a lane when part of the road ahead is closed.",
        trap:
          "It is easy to read the stripes as decorative. They carry direction, and following the wrong slope steers you at the closure.",
        excerptKey: "work-zone-barricade-stripes",
        sourceLabel: "Montana Driver Manual - Chapter 3 Construction and Maintenance Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_29",
        topic: "safety",
        question:
          "What is the Four Second Sight Distance Rule used for in Montana?",
        choices: [
          "Setting following distance in traffic",
          "Judging whether you are driving too fast for how far you can see",
          "Timing a merge",
          "Measuring reaction time at a signal",
        ],
        correctIndex: 1,
        explanation:
          "It checks your speed against your sight distance. Pick the furthest object you can clearly see, count to four-one-thousand, and if you reach it first you are outdriving your vision.",
        context:
          "The manual says it works at night too, as a check on whether you are overdriving your headlights. It rests on the same principle as the stopping-distance figures: you must not drive faster than the distance you can see.",
        trap:
          "Three seconds is following distance and four seconds is either a merge gap or a sight-distance check, depending on what you are counting. This one counts to a fixed object ahead, not to a car.",
        excerptKey: "sight-distance-count",
        sourceLabel: "Montana Driver Manual - Chapter 5 Sight-Distance Rule",
        sourceUrl: HB,
      },
      {
        id: "mt_s6_30",
        topic: "rightOfWay",
        question:
          "Where must a pedestrian yield to vehicles under Montana law?",
        choices: [
          "Nowhere - pedestrians always have priority",
          "Only on interstate highways",
          "When crossing anywhere other than a marked crosswalk or an unmarked crosswalk at an intersection",
          "Only after dark",
        ],
        correctIndex: 2,
        explanation:
          "Crossing outside a crosswalk, marked or unmarked at an intersection, means yielding to all vehicles on the roadway. The same applies where a pedestrian tunnel or overhead crossing has been provided.",
        context:
          "Between adjacent intersections with working signals, pedestrians may not cross anywhere except a marked crosswalk. Inside a crosswalk the duty reverses, and the manual still asks drivers to be alert and to yield even when a pedestrian is in the wrong.",
        trap:
          "Neither slogan is the law. Pedestrians have priority in crosswalks and owe a duty outside them, and a driver's duty of care survives either way.",
        excerptKey: "ped-statute-outside-crosswalk",
        sourceLabel: "Montana Code Annotated - 61-8-503 Crossing at other than crosswalks",
        sourceUrl: mca("61-8-503"),
      },
    ],
  },
];
