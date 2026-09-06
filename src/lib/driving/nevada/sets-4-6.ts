import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sources and the same rule as sets 1 to 3: every number was
// read out of the Nevada Driver's Handbook (DMV 700, March 2024), the Nevada
// Revised Statutes, or a Nevada DMV web page, and nothing was carried over from
// another state's bank.
//
// Set 4 walks the parts of the manual people skip. Nevada's handbook devotes
// seven pages to towing and five to advanced driver assistance systems, and it
// puts insurance minimums, the demerit schedule and vehicle registration in
// chapters most learners never open. The DMV writes its 25 questions from the
// whole book.
//
// Set 5 is built from what learners actually report getting wrong, cross-checked
// against the official source in every case - see docs/driving/research/nevada.md
// for the threads and what each one shaped. Where a forum claim and the handbook
// disagree, the handbook wins and the claim becomes the trap.
//
// Set 6 mirrors the real exam: 30 questions, no scaffolding beyond the standard
// fields, the mix the DMV actually draws from.
const HB = "https://dmv.nv.gov/pdfforms/dlbook.pdf";
/** The handbook's printed page number IS its PDF page number. */
const hb = (page: number) => `${HB}#page=${page}`;
const nrs = (chapter: string, sec: string) =>
  `https://www.leg.state.nv.us/NRS/NRS-${chapter}.html#NRS${chapter}Sec${sec}`;
const TESTING = "https://dmv.nv.gov/dltesting.htm";
const PERMIT = "https://dmv.nv.gov/dlipteens.htm";

export const nevadaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Towing, insurance, driving records, night driving, emergencies and the chapters most people never open. The DMV writes its 25 questions from the whole book, not the first half.",
    questions: [
      {
        id: "nv_s4_01",
        topic: "licensing",
        question: "You move to Nevada from another state. How long do you have to get a Nevada license?",
        choices: [
          "10 days after becoming a resident",
          "30 days after becoming a resident",
          "60 days after becoming a resident",
          "Until your out-of-state license expires",
        ],
        correctIndex: 1,
        explanation:
          "Thirty days from becoming a resident. The same 30-day window covers registering your vehicles, or the day you obtain the license, whichever comes first.",
        context:
          "You may hold only one license: the out-of-state one is surrendered, voided and handed back to you. If you are 21 or over, hold a valid license of the same class, have fewer than three moving violations in four years, no DUI in seven, no suspension or revocation and no restriction needing evaluation, then only the vision test is required.",
        trap: "An unexpired out-of-state license does not extend the deadline. Residency starts the clock.",
        excerptKey: "lic-30-days",
        sourceLabel: "Nevada Driver's Handbook - Getting Your Nevada Driver's License",
        sourceUrl: hb(6),
      },
      {
        id: "nv_s4_02",
        topic: "rules",
        question:
          "What may a non-commercial Class C Nevada driver tow without an endorsement?",
        choices: [
          "Any trailer under 15,000 pounds",
          "Any trailer, provided the combination is under 60 feet",
          "Nothing without a J endorsement",
          "A vehicle or combination rated at 10,000 pounds or less, with the whole rig no more than 70 feet",
        ],
        correctIndex: 3,
        explanation:
          "Two numbers bound it: a gross vehicle weight rating of 10,000 pounds or less, and a total length of no more than 70 feet. Above 10,000 pounds you need the J endorsement.",
        context:
          "With a J endorsement you may tow more than 10,000 pounds, but the combination still may not exceed 70 feet or a combined weight rating of 26,000 pounds. Past 26,000 pounds it becomes a Class A license. The 70-foot figure also appears in the plain Class C definition, so it is the one number that never changes.",
        trap: "Weight and length are separate ceilings. A light trailer on a long truck can breach the 70 feet without going near 10,000 pounds.",
        excerptKey: "tow-class-c",
        sourceLabel: "Nevada Driver's Handbook - Towing",
        sourceUrl: hb(68),
      },
      {
        id: "nv_s4_03",
        topic: "safety",
        question: "How should the safety chains on a towed trailer be arranged?",
        choices: [
          "Attached and crossed under the tongue",
          "Attached parallel, one on each side",
          "Attached loosely so they drag clear of the hitch",
          "Attached to the trailer only, as a backup",
        ],
        correctIndex: 0,
        explanation:
          "Attached and crossed. Crossing them makes a cradle under the coupler, so a tongue that comes off the ball is caught rather than dropped onto the road.",
        context:
          "The hitch checklist runs longer than that: every part of the coupling present and unbroken, the tongue undamaged, the ball locked into its mount with a pin and clip, the ball seated firmly in the coupler, the safety latch down, and the electric lines seated, untangled and not dragging. Re-inspect within 50 miles of setting off and again after three hours or 150 miles.",
        trap: "Chains that hang straight will let the tongue hit the pavement. The cross is the whole point of them.",
        excerptKey: "tow-chains-crossed",
        sourceLabel: "Nevada Driver's Handbook - Securing a Trailer",
        sourceUrl: hb(69),
      },
      {
        id: "nv_s4_04",
        topic: "emergencies",
        question: "A front tire blows out at highway speed. What does the handbook tell you to do?",
        choices: [
          "Brake firmly and steer to the shoulder",
          "Accelerate briefly to regain stability",
          "Grip the wheel, ease off the gas, and do not hit the brakes",
          "Steer into the skid and coast in neutral",
        ],
        correctIndex: 2,
        explanation:
          "Hold the wheel firmly and lift off the accelerator. Braking during a blowout is what turns a controllable problem into a spin.",
        context:
          "Once the vehicle has slowed and is clearly under control, signal, use the brakes gently and pull off. Get it fully clear of the roadway and use parking lights or flashers. The same instinct applies when you drift onto the shoulder: do not swerve back onto the pavement, stay on the shoulder until you have control, then ease back on.",
        trap: "The reflex is to brake. That is the one action the handbook puts an exclamation mark on.",
        excerptKey: "blowout",
        sourceLabel: "Nevada Driver's Handbook - Driving Emergencies",
        sourceUrl: hb(59),
      },
      {
        id: "nv_s4_05",
        topic: "signs",
        question: "What are the three jobs a road sign can do, according to the Nevada handbook?",
        choices: [
          "Warn, direct and advertise",
          "Regulate, warn and inform",
          "Restrict, guide and advise",
          "Command, caution and describe",
        ],
        correctIndex: 1,
        explanation:
          "Regulate, warn and inform. The shape and color tell you which of the three a sign is doing before you are close enough to read the words.",
        context:
          "That is the whole system in one line. Regulatory signs are white rectangles stating law, plus the octagon and the inverted triangle. Warning signs are yellow diamonds, with orange for roadwork. Informational signs are the green, blue and brown families. The DMV asks about signs the handbook never illustrates, so the system beats memorization.",
        trap: "Signs never advertise, which is what makes the wrong options here recognizable once you know the three categories.",
        excerptKey: "signs-three-purposes",
        sourceLabel: "Nevada Driver's Handbook - Signs",
        sourceUrl: hb(28),
      },
      {
        id: "nv_s4_06",
        topic: "speed",
        question:
          "You are doing 74 mph in daylight on a rural Nevada highway posted at 65. What does the statute provide for that specific case?",
        choices: [
          "A $25 civil penalty that is not recorded on your driving record",
          "The ordinary speeding fine with two demerit points",
          "A mandatory court appearance",
          "No penalty at all, because it is under 10 over",
        ],
        correctIndex: 0,
        explanation:
          "Nevada has a narrow rural daylight allowance. Posted at 65 and not exceeding 75, in daylight, the penalty is a $25 civil one, and the violation is not recorded on your record or treated as a moving violation.",
        context:
          "The ladder is specific: 60 posted and up to 70 actual, 65 up to 75, 70 up to 75, 75 up to 80, 80 up to 85. It does not apply in an urban area of a county of 100,000 or more, nor in an adjacent area a public authority has designated as needing strict observance. And it disappears entirely if the violation injures someone or damages property.",
        trap: "It is not a license to drive 10 over. It is daylight only, rural only, and only within the exact bands the statute names.",
        excerptKey: "nrs-rural-daylight-25",
        sourceLabel: "NRS 484B.617 - Certain violations of speed limit in rural areas",
        sourceUrl: nrs("484B", "617"),
      },
      {
        id: "nv_s4_07",
        topic: "parking",
        question: "What does a white-painted curb mean in Nevada?",
        choices: [
          "Parking for a limited time shown on a sign",
          "A loading zone",
          "No stopping at any time",
          "A very short stop only, to pick up or set down passengers or post mail",
        ],
        correctIndex: 3,
        explanation:
          "White is the shortest of the permissions: stop long enough to take on or let off a passenger, or drop a letter in a mailbox, and then move on.",
        context:
          "The colors run white for a very short stop, green for limited-time parking with the limit usually posted, yellow for a loading zone governed by local law, red for no stopping, standing or parking at all, and blue for accessible parking. Local ordinances fill in the detail on yellow and red.",
        trap: "White and green both permit a stop, but green is measured in minutes on a sign and white in the time it takes someone to get out.",
        excerptKey: "curb-white",
        sourceLabel: "Nevada Driver's Handbook - Colored Curb Markings",
        sourceUrl: hb(48),
      },
      {
        id: "nv_s4_08",
        topic: "signals",
        question: "What does a plain circular green light permit?",
        choices: [
          "Straight ahead, a right turn or a left turn, unless a sign forbids the turn",
          "Straight ahead only",
          "Straight ahead or a right turn only",
          "Any movement, with priority over pedestrians",
        ],
        correctIndex: 0,
        explanation:
          "A green ball permits all three movements unless something at the intersection prohibits one of them. It is permission to proceed, not priority over everyone else there.",
        context:
          "The statute spells out the qualifier the handbook leaves implied: traffic facing a green, including vehicles turning right or left, must yield to other vehicles and to pedestrians lawfully in the intersection or an adjacent crosswalk when the signal comes on. Pedestrians already crossing keep the right of way.",
        trap: "Green is not a protected turn. Only a green arrow holds oncoming traffic for you.",
        excerptKey: "signal-green",
        sourceLabel: "Nevada Driver's Handbook - Signals",
        sourceUrl: hb(30),
      },
      {
        id: "nv_s4_09",
        topic: "impairment",
        question: "What is the license penalty for a second Nevada DUI within seven years?",
        choices: [
          "Revocation for one year",
          "Revocation for 185 days",
          "Revocation for two years",
          "Revocation for three years",
        ],
        correctIndex: 0,
        explanation:
          "One year, which may include time already served under the administrative revocation at the judge's discretion. A first offense is 185 days; a third within seven years is three years.",
        context:
          "The rest of the second-offense package: 10 days to six months in jail or residential confinement, a fine of $750 to $1,000, 100 to 200 hours of community service, possible suspension of the vehicle registration, and up to a year of treatment or clinical supervision.",
        trap: "The seven-year window is what makes it a second offense. A DUI eight years old does not escalate the next one.",
        excerptKey: "dui-second-penalty",
        sourceLabel: "Nevada Driver's Handbook - Penalties for DUI",
        sourceUrl: hb(80),
      },
      {
        id: "nv_s4_10",
        topic: "sharing",
        question:
          "A cyclist wants to cross an intersection using the crosswalk. What does the handbook say they should do?",
        choices: [
          "Ride through at walking pace",
          "Dismount and cross as a pedestrian",
          "Wait for a driver to wave them across",
          "Use the traffic lane instead, since crosswalks are closed to bicycles",
        ],
        correctIndex: 1,
        explanation:
          "The handbook's guidance is to dismount and cross on foot. Cyclists otherwise obey the same signs and signals as drivers.",
        context:
          "Cyclists may take a traffic lane, staying as far right as practicable unless turning or overtaking. They must signal by hand, though the signal is required only once and not at all where safe operation needs both hands on the bars. Motorists must yield to a cyclist on a bike path or in a bike lane, and may not stop, park or drive in one except to enter a driveway or alley, on official duty, when directed by an officer, or in an emergency.",
        trap: "Riding across a crosswalk is common and it changes the cyclist's legal footing. On foot they are a pedestrian; on the bike they are not.",
        excerptKey: "bike-crosswalk-dismount",
        sourceLabel: "Nevada Driver's Handbook - Bicycles",
        sourceUrl: hb(65),
      },
      {
        id: "nv_s4_11",
        topic: "rightOfWay",
        question:
          "You arrive at an intersection with no signs and no signals at the same moment as a car on your right. Who goes first?",
        choices: [
          "You do, if you are traveling straight",
          "You do, if you were moving faster",
          "Neither - both should stop and wave the other on",
          "The vehicle on the right",
        ],
        correctIndex: 3,
        explanation:
          "At an uncontrolled intersection the vehicle on your right usually goes first. The handbook adds that if you do hold the right of way and others yield it to you, you still proceed with caution.",
        context:
          "The right-hand rule is a tie-breaker rather than an absolute. A vehicle already in the intersection outranks both of you, and Nevada law never grants anybody the right of way in the first place - it only sets out who has to yield. That is why the handbook keeps telling you to do everything possible to avoid a crash even when you are in the right.",
        trap: "Neither driver waving the other on is how these collisions happen. There is a rule; use it.",
        excerptKey: "row-uncontrolled",
        sourceLabel: "Nevada Driver's Handbook - Right-of-Way",
        sourceUrl: hb(34),
      },
      {
        id: "nv_s4_12",
        topic: "emergencies",
        question: "Smoke starts coming from under your hood. What must you not use to put out the fire?",
        choices: [
          "Sand",
          "Dirt",
          "Water",
          "A chemical extinguisher",
        ],
        correctIndex: 2,
        explanation:
          "Not water. Burning gasoline floats on water, so throwing water at it spreads the fire rather than smothering it.",
        context:
          "The sequence is slow down, pull off the road and switch off the ignition immediately, then open the hood with extreme caution. Sand or dirt will smother a small fire if you have no chemical extinguisher. If the fire is beyond you, get at least 100 feet away from the vehicle.",
        trap: "Water is the universal fire reflex and the wrong one here. Gasoline floats.",
        excerptKey: "fire-no-water",
        sourceLabel: "Nevada Driver's Handbook - Driving Emergencies",
        sourceUrl: hb(58),
      },
      {
        id: "nv_s4_13",
        topic: "licensing",
        question:
          "You hold a Nevada identification card rather than a license and pick up traffic citations. What happens?",
        choices: [
          "Demerits are applied to your future driving privileges, and 12 in 12 months means reinstatement before you can be licensed",
          "Nothing, because points only attach to a driver license",
          "The identification card is canceled",
          "The citations are held until you apply for a license, then forgiven",
        ],
        correctIndex: 0,
        explanation:
          "Citations and demerits attach to your future driving privileges. Reach 12 or more in a 12-month period and you must reinstate those privileges before you are eligible for a driver license.",
        context:
          "A Nevada identification card is valid for eight years, is available from age 10, and applying for one automatically surrenders any driving privilege or ID card you hold in Nevada or another state. The same rules and penalties that apply to license holders apply to you.",
        trap: "Not having a license is not a clean slate. The record starts before the license does.",
        excerptKey: "id-card-demerits",
        sourceLabel: "Nevada Driver's Handbook - Identification Cards",
        sourceUrl: hb(20),
      },
      {
        id: "nv_s4_14",
        topic: "rules",
        question:
          "Your turn signals have failed. What hand signal means a right turn in Nevada?",
        choices: [
          "Left arm straight out of the window",
          "Left arm out with the elbow bent upward at about 90 degrees",
          "Left arm down with the palm to the rear",
          "Right arm straight out of the passenger window",
        ],
        correctIndex: 1,
        explanation:
          "Left arm out, elbow bent upward at roughly a right angle. All three Nevada hand signals use the left arm, because that is the side other traffic can see.",
        context:
          "The set is left arm horizontal for a left turn, left arm bent up for a right turn, and left arm down with the palm facing back for slowing or stopping. Signaling is not merely courtesy in Nevada - the handbook says it is the law, and hand signals are the fallback when the lights are out of order.",
        trap: "Pointing right with the right arm is intuitive and is not the recognized signal.",
        excerptKey: "hand-signals",
        sourceLabel: "Nevada Driver's Handbook - Signaling",
        sourceUrl: hb(45),
      },
      {
        id: "nv_s4_15",
        topic: "safety",
        question:
          "You are carrying an infant in a rear-facing safety seat in a car with a passenger-side airbag. Where does it go?",
        choices: [
          "The front seat, with the seat slid all the way back",
          "The front seat, with the airbag switched off if possible",
          "The back seat - never the front seat of a car with a passenger airbag",
          "Either seat, provided the seat is properly installed",
        ],
        correctIndex: 2,
        explanation:
          "Never the front seat of a car with a passenger-side airbag. The handbook describes an airbag exploding from the dashboard at 200 mph and driving the safety seat into the back of the baby's head.",
        context:
          "Nevada requires children under two to ride rear-facing in the back seat. Children under six, and anyone under 57 inches tall regardless of age, must be in an approved child restraint. Older children may ride in front if they must, but the seat should be moved as far back as it goes.",
        trap: "Sliding the seat back reduces the risk, it does not remove it. The rule for infants is a location, not a distance.",
        excerptKey: "airbag-infant",
        sourceLabel: "Nevada Driver's Handbook - Traveling with Babies and Children",
        sourceUrl: hb(26),
      },
      {
        id: "nv_s4_16",
        topic: "signs",
        question:
          "You see the round yellow railroad crossing sign ahead. What is expected of you?",
        choices: [
          "Stop at the sign, then proceed",
          "Nothing, unless a signal is flashing",
          "Speed up to clear the tracks quickly",
          "Slow down, be ready to stop, and look both ways even with no signal and no train in sight",
        ],
        correctIndex: 3,
        explanation:
          "The circle is an advance warning. You slow, prepare to stop and look both ways, whether or not a signal or a stop sign is present at the crossing itself.",
        context:
          "The crossbuck at the tracks marks the crossing and means yield to trains. If a stop sign is posted you stop, and if a train is coming you stop at least 15 feet from the tracks. Passenger buses and trucks carrying flammable or dangerous loads stop even with no signal and no train. Where there is more than one set of tracks, wait until you have a clear view both ways before starting across.",
        trap: "No flashing lights is not the same as no train. The handbook asks you to look because signals fail.",
        excerptKey: "signs-crossbuck",
        sourceLabel: "Nevada Driver's Handbook - Signs",
        sourceUrl: hb(29),
      },
      {
        id: "nv_s4_17",
        topic: "speed",
        question:
          "There are two lanes in your direction and you are driving more slowly than the traffic behind. What does Nevada require?",
        choices: [
          "Move to the right and allow other drivers to pass",
          "Stay where you are, as long as you are at the limit",
          "Move to the left so faster traffic can use the right lane",
          "Increase speed to the posted limit",
        ],
        correctIndex: 0,
        explanation:
          "Slower traffic moves right. The handbook makes the safety case as well as the legal one: cars stacking up behind a slow vehicle push other drivers into unsafe passes.",
        context:
          "The related rules run alongside it. Driving so slowly that you impede the normal movement of traffic is unlawful. On a two-lane highway it is an offense to sit in the far left lane below the posted limit while being overtaken from behind in that lane. Impeding traffic is worth two demerit points on a Nevada record.",
        trap: "Being at the speed limit does not entitle you to the left lane. Speed relative to the traffic behind you is what the rule turns on.",
        excerptKey: "speed-slow-right",
        sourceLabel: "Nevada Driver's Handbook - Controlling Speed",
        sourceUrl: hb(35),
      },
      {
        id: "nv_s4_18",
        topic: "parking",
        question:
          "How far must a parked Nevada vehicle be visible to approaching traffic in each direction?",
        choices: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctIndex: 2,
        explanation:
          "Two hundred feet, which the handbook calls about twenty car lengths. If a crest or a bend hides your parked car inside that distance, it is not a legal place to leave it.",
        context:
          "The rest of the parking checklist: face the direction traffic flows, wheels within 18 inches of the curb front and rear, engine off, parking brake set. Where there is no curb and nothing says otherwise, park parallel to the road. If you must stop on a highway, get all four wheels off the pavement and use flashers or parking lights if visibility is poor or it is between sunset and sunrise.",
        trap: "Two hundred feet is a visibility rule, not a distance from anything. It is the reason parking just over a hill is unlawful even where nothing prohibits parking.",
        excerptKey: "park-200-feet",
        sourceLabel: "Nevada Driver's Handbook - Parking",
        sourceUrl: hb(48),
      },
      {
        id: "nv_s4_19",
        topic: "signals",
        question: "An overhead lane signal shows a yellow X with the word MERGE. What is it telling you?",
        choices: [
          "The lane is open at the posted speed",
          "The lane is ending - prepare to merge safely into another open lane",
          "The lane is closed and you must not enter it",
          "Slow traffic or debris may be present, so use caution",
        ],
        correctIndex: 1,
        explanation:
          "Yellow X with MERGE means the lane runs out ahead. You are being given time to move over rather than being ordered out immediately.",
        context:
          "The set of four is worth learning: a downward green arrow with OPEN means drive the posted limit in that lane, a yellow X with CAUTION means the lane is usable but may hold slow traffic or debris, a yellow X with MERGE means it is ending, and a red X with CLOSED means you may not drive in it at all.",
        trap: "Yellow X appears twice with two different words and two different meanings. CAUTION lets you stay; MERGE does not.",
        excerptKey: "lane-yellow-x-merge",
        sourceLabel: "Nevada Driver's Handbook - Active Traffic Management Signs",
        sourceUrl: hb(37),
      },
      {
        id: "nv_s4_20",
        topic: "sharing",
        question: "You have just overtaken a semi. When is it safe to pull back in front of it?",
        choices: [
          "When the whole front of the truck is visible in your rear-view mirror, and then without slowing",
          "As soon as your rear bumper clears the truck's front bumper",
          "As soon as the truck flashes its headlights",
          "After counting two seconds from passing the cab",
        ],
        correctIndex: 0,
        explanation:
          "Wait until you can see the truck's entire front end in your mirror, then move over and hold your speed. Cutting in and slowing forces a driver who needs twice your stopping distance to stand on the brakes.",
        context:
          "Trucks and buses need nearly double the time and distance a car does to stop, and the space directly in front of them is one of the no-zones. The rear no-zone is another: tailgating a truck means the driver cannot see you and you cannot see what is developing ahead of them.",
        trap: "Clearing the bumper is not clearing the truck. The mirror test exists because the gap you need is far longer than it looks.",
        excerptKey: "truck-pass-front",
        sourceLabel: "Nevada Driver's Handbook - Commercial Vehicles",
        sourceUrl: hb(63),
      },
      {
        id: "nv_s4_21",
        topic: "impairment",
        question:
          "You want to report a driver who appears to be under the influence somewhere in Nevada. What number does the handbook give?",
        choices: [
          "411",
          "The DMV switchboard",
          "The county sheriff's non-emergency line",
          "*NHP, which is *647, from a cellular phone",
        ],
        correctIndex: 3,
        explanation:
          "Dial *NHP - that is *647 - from a cell phone anywhere in Nevada. The same number covers any highway emergency.",
        context:
          "The handbook prints a list of what to watch for: turning too widely, straddling the center line, weaving within the lane, driving too slowly for conditions, stopping in traffic for no reason, erratic braking, responding slowly to signals, and driving at night with the headlights off.",
        trap: "This is one of the handbook's few phone numbers, and the DMV asks about the things it prints exactly once.",
        excerptKey: "report-drunk-nhp",
        sourceLabel: "Nevada Driver's Handbook - Clues that a Driver May Be Under the Influence",
        sourceUrl: hb(81),
      },
      {
        id: "nv_s4_22",
        topic: "rules",
        question: "Which lane must you be in to make a right turn in Nevada?",
        choices: [
          "Any lane, provided you signal",
          "The lane nearest the center line",
          "The extreme right-hand travel lane, or a lane designated for right turns",
          "The second lane from the right, to allow for the swing",
        ],
        correctIndex: 2,
        explanation:
          "The extreme right-hand travel lane, or a marked right-turn lane. You then turn into the right-hand lane of the road you are entering.",
        context:
          "Where a single lane is provided only for turning, you may enter it only if you are actually turning, and you may not drive straight through the intersection from it. If you need a different lane afterwards, signal and change well away from the junction. When turning left on a two-way road, use the lane just right of the center line and complete the turn into the nearest lane going your way.",
        trap: "Using a right-turn-only lane to go straight is the version of this the DMV likes to ask.",
        excerptKey: "turn-right-lane",
        sourceLabel: "Nevada Driver's Handbook - Turning",
        sourceUrl: hb(45),
      },
      {
        id: "nv_s4_23",
        topic: "rightOfWay",
        question: "Where does a crosswalk exist in Nevada?",
        choices: [
          "Only where white lines are painted on the road",
          "Only at intersections controlled by signals",
          "Anywhere two streets intersect, including a T-junction, painted or not",
          "Only within city limits",
        ],
        correctIndex: 2,
        explanation:
          "A crosswalk exists wherever two streets meet, T-junctions included, and it exists whether or not anyone painted it. Pedestrians crossing there have the right of way.",
        context:
          "That is why the handbook warns drivers to be alert for pedestrians at every intersection, not just the marked ones. It also tells pedestrians to use the marked area where one exists. Causing even a minor collision with a pedestrian in Nevada can bring a reckless driving charge and a license suspension.",
        trap: "The paint marks the crosswalk; it does not create it. Assuming no paint means no crossing is the mistake this rule exists to correct.",
        excerptKey: "crosswalk-exists",
        sourceLabel: "Nevada Driver's Handbook - Pedestrians",
        sourceUrl: hb(66),
        commonlyMissed: true,
      },
      {
        id: "nv_s4_24",
        topic: "emergencies",
        question: "Your car breaks down on a Nevada freeway. What should you do?",
        choices: [
          "Move to the shoulder or emergency stopping area as soon as you safely can, and turn on your four-way flashers",
          "Stop in the right lane and set out warning triangles",
          "Walk to the nearest exit for help",
          "Stay in the travel lane with the headlights on until help arrives",
        ],
        correctIndex: 0,
        explanation:
          "Get off the traffic lanes as soon as you safely can and put the flashers on. Then stay in or near the car, on the side away from passing traffic.",
        context:
          "Walking along a freeway is dangerous, and the handbook says that if you stay with your car a Nevada Highway Patrol trooper will stop to help. It also sets a flat rule: do not stop on a freeway except in an emergency. A disabled vehicle should get all four wheels off the roadway and be towed as soon as possible.",
        trap: "Setting out triangles in a live lane puts you on foot in traffic. Getting the car clear comes first.",
        excerptKey: "emergency-stay-with-car",
        sourceLabel: "Nevada Driver's Handbook - In an Emergency",
        sourceUrl: hb(50),
      },
      {
        id: "nv_s4_25",
        topic: "licensing",
        question: "What are Nevada's minimum liability insurance amounts?",
        choices: [
          "$15,000 / $30,000 / $10,000",
          "$20,000 / $40,000 / $15,000",
          "$30,000 / $60,000 / $25,000",
          "$25,000 for injury or death of one person, $50,000 for two or more, $20,000 for property",
        ],
        correctIndex: 3,
        explanation:
          "Twenty-five, fifty and twenty thousand dollars. Every registered vehicle in Nevada must carry at least that, and the evidence of insurance card must be in the vehicle or displayable on a phone.",
        context:
          "The DMV runs an electronic verification program called NV LIVE that spots lapses. A lapse brings a reinstatement fee and fines starting at $250 and reaching $1,750 per registered vehicle, and can add an SR-22 filing and a 30-day license suspension. Cancel your insurance without replacing it and you must cancel the registration and surrender the plates the same day.",
        trap: "The three numbers are always offered in a plausible-looking set. Nevada's are 25, 50 and 20.",
        excerptKey: "insurance-minimums",
        sourceLabel: "Nevada Driver's Handbook - Insurance and Financial Responsibility",
        sourceUrl: hb(75),
      },
      {
        id: "nv_s4_26",
        topic: "safety",
        question: "Your right wheels drop onto the shoulder at speed. What is the correct recovery?",
        choices: [
          "Steer back onto the pavement immediately",
          "Grip the wheel, ease off the accelerator, stay on the shoulder until you have control, then ease back on",
          "Brake hard while steering left",
          "Accelerate to lift the car back onto the road",
        ],
        correctIndex: 1,
        explanation:
          "Do not swerve back. Hold the wheel, come off the accelerator, brake only carefully, and stay on the shoulder until the car is fully under control before easing back onto the pavement.",
        context:
          "The handbook notes that running off the highway accounts for a high number of Nevada fatalities, with fatigue, inattention and speed the main factors. The failure mode is not the drop onto the shoulder - it is the panic steer back, which sends the vehicle across the road into oncoming traffic.",
        trap: "Getting back on the road feels urgent. It is the correction, not the drop, that causes the crash.",
        excerptKey: "off-pavement",
        sourceLabel: "Nevada Driver's Handbook - Running Off the Pavement",
        sourceUrl: hb(59),
      },
      {
        id: "nv_s4_27",
        topic: "rules",
        question:
          "You have overtaken a car on a two-lane road. When may you return to your own lane?",
        choices: [
          "As soon as you are past its front bumper",
          "After a count of three seconds",
          "When you can see the vehicle you passed in your rear-view mirror",
          "When the oncoming lane is empty for 300 feet",
        ],
        correctIndex: 2,
        explanation:
          "The mirror is the test. Once the vehicle you passed appears in your rear-view mirror, you have the room to pull back in without cutting it off.",
        context:
          "Before all that, the pass needs a clear view ahead with no immediate oncoming traffic, a broken yellow line on your side, and a signal given 100 feet ahead in a business or residential area or 300 feet elsewhere. Never exceed the speed limit to complete a pass, and never use the shoulder to make one.",
        trap: "Judging by your own bumper leaves the other driver braking. The mirror gives you the whole car plus a gap.",
        excerptKey: "pass-return",
        sourceLabel: "Nevada Driver's Handbook - Passing Another Vehicle",
        sourceUrl: hb(47),
      },
      {
        id: "nv_s4_28",
        topic: "parking",
        question: "What does a green-painted curb mean?",
        choices: [
          "Parking for a limited time, usually shown on a sign",
          "Reserved for electric vehicles",
          "A loading zone",
          "No parking during business hours",
        ],
        correctIndex: 0,
        explanation:
          "Green permits parking for a limited period. The length of the period is normally posted on a sign at the space.",
        context:
          "The five colors are white for a very short passenger or mail stop, green for limited-time parking, yellow for a loading zone under local rules, red for no stopping, standing or parking, and blue for accessible spaces. Only red bans stopping altogether.",
        trap: "Green looks like open permission because of the color. It is a timed permission, and the sign carries the time.",
        excerptKey: "curb-green",
        sourceLabel: "Nevada Driver's Handbook - Colored Curb Markings",
        sourceUrl: hb(48),
      },
      {
        id: "nv_s4_29",
        topic: "speed",
        question:
          "How far does the handbook say it takes to stop from 30 mph on ice?",
        choices: [
          "About 100 feet",
          "373 feet, well over the length of a football field",
          "About 200 feet",
          "About 500 feet",
        ],
        correctIndex: 1,
        explanation:
          "Three hundred and seventy-three feet - more than a football field, from a speed you would use on a residential street.",
        context:
          "For comparison, the handbook's dry-pavement table gives 127 feet to stop from 25 mph and 196 feet from 35 mph, both including reaction distance. Wet pavement can more than double the dry figure. Stopping distances on packed snow and ice are described as greatly increased, and the ice number is the one the book puts a picture to.",
        trap: "Thirty miles an hour feels slow enough to stop easily. On ice it is the distance that surprises people, not the speed.",
        excerptKey: "stopping-ice",
        sourceLabel: "Nevada Driver's Handbook - Stopping",
        sourceUrl: hb(41),
      },
      {
        id: "nv_s4_30",
        topic: "signs",
        question:
          "An orange speed limit sign in a work zone reads 45. A black-and-white sign further back read 65. Which one can you be fined against?",
        choices: [
          "Both equally",
          "The orange one, because it is the more recent",
          "Neither, while no workers are present",
          "The black-and-white one, because orange speed signs are advisory",
        ],
        correctIndex: 3,
        explanation:
          "Black-and-white speed limit signs are regulatory; orange ones are advisory and indicate a slower, safer speed. The doubled work-zone fine attaches to the regulatory sign.",
        context:
          "That does not make the orange sign safe to ignore. Nevada's Basic Rule requires a speed that is reasonable and proper for the conditions, and a work zone with narrowed lanes and stopped traffic ahead is exactly the condition it was written for. Moving a barrier to cross onto a closed road is separately an offense with double penalties.",
        trap: "Advisory does not mean optional. Exceeding an advisory speed that the conditions do not support is still a Basic Rule violation.",
        excerptKey: "workzone-double-fines",
        sourceLabel: "Nevada Driver's Handbook - Highway Work Zones",
        sourceUrl: hb(60),
        commonlyMissed: true,
      },
      {
        id: "nv_s4_31",
        topic: "impairment",
        question:
          "A Nevada DUI offender wants to drive again as soon as possible. What does the handbook offer?",
        choices: [
          "A hardship license after 90 days",
          "Nothing until the full revocation has run",
          "Immediate reinstatement with an ignition interlock restriction and a device fitted at the driver's own expense",
          "A daytime-only restricted license",
        ],
        correctIndex: 2,
        explanation:
          "Driving privileges can be reinstated immediately if a license carrying an ignition interlock restriction is issued and the device is installed in any vehicle the driver operates, at their own cost.",
        context:
          "It applies across the offense levels - the 185 days for a first, the year for a second within seven, the three years for a third or for a DUI causing death or serious injury. Young drivers get the same revocation periods and the same reinstatement options as drivers over 18. An SR-22 filing may also be required.",
        trap: "Interlock is a way to drive during the revocation, not a way to end it. The revocation period still runs.",
        excerptKey: "dui-interlock",
        sourceLabel: "Nevada Driver's Handbook - Penalties for DUI",
        sourceUrl: hb(80),
      },
      {
        id: "nv_s4_32",
        topic: "sharing",
        question:
          "Who may ride in the open bed of a pickup truck on a paved Nevada highway?",
        choices: [
          "Anyone aged 18 or over",
          "Anyone, provided they are seated on the floor of the bed",
          "Nobody - it is banned outright",
          "Anyone aged 16 or over",
        ],
        correctIndex: 0,
        explanation:
          "Nevada bars anyone under 18 from riding in the bed of a pickup or on a flatbed on a paved highway. Adults may.",
        context:
          "Two exceptions let under-18s ride anyway: a parade authorized by a local authority, and use of the vehicle in farming or ranching. Nothing in the rule makes it a good idea - an unrestrained occupant in an open bed has no protection at all - but the question the DMV asks is about the age.",
        trap: "Most people assume a blanket ban, which is precisely why this appears on the test. The age is the answer, not the prohibition.",
        excerptKey: "truckbed-18",
        sourceLabel: "Nevada Driver's Handbook - Passengers in the Bed of a Truck",
        sourceUrl: hb(66),
        commonlyMissed: true,
      },
      {
        id: "nv_s4_33",
        topic: "rightOfWay",
        question:
          "Your light turns green and you are turning right, but a pedestrian who started on the previous phase is still in the crosswalk. What do you do?",
        choices: [
          "Turn behind them once they pass the center of the crosswalk",
          "Yield - pedestrians have the right of way over motorists making a right turn",
          "Sound the horn to hurry them",
          "Turn, since the signal has changed in your favor",
        ],
        correctIndex: 1,
        explanation:
          "A green does not clear the crosswalk. Drivers must yield to people still crossing, and the handbook says specifically that pedestrians have the right of way over motorists making a right-hand turn.",
        context:
          "It fits the wider pattern: a vehicle facing a green, including one turning, yields to pedestrians lawfully in the intersection or an adjacent crosswalk when the signal came on. Where you are yielding to someone crossing, wait until they have reached the lanes going the other way before you move.",
        trap: "Green feels like permission over everything. Against a pedestrian already crossing it is not.",
        excerptKey: "ped-green-still-crossing",
        sourceLabel: "Nevada Driver's Handbook - Pedestrians",
        sourceUrl: hb(66),
      },
      {
        id: "nv_s4_34",
        topic: "signals",
        question: "A red X is displayed over the lane you are in. What must you do?",
        choices: [
          "Continue with caution at reduced speed",
          "Stop in the lane and wait for it to clear",
          "Leave the lane - you may not drive under a red X, and must merge safely into an open lane",
          "Ignore it unless a physical barrier is present",
        ],
        correctIndex: 2,
        explanation:
          "A red X with CLOSED means the lane is not available. You merge safely into an open lane rather than continuing under it.",
        context:
          "Nevada uses lane control signals to switch lanes between directions and to manage incidents. Overhead freeway signals also reduce the posted limit ahead of a crash and update as you approach. The reasons for a closure are not always visible from a driver's seat, which is why the instruction is unconditional.",
        trap: "Stopping under a red X leaves you parked in a lane that is being closed for a reason. Merge, do not wait.",
        excerptKey: "lane-red-x",
        sourceLabel: "Nevada Driver's Handbook - Active Traffic Management Signs",
        sourceUrl: hb(37),
      },
      {
        id: "nv_s4_35",
        topic: "safety",
        question: "You have driven through deep water and the brakes feel weak. What do you do?",
        choices: [
          "Pump the pedal hard until they bite",
          "Stop and wait for them to dry",
          "Accelerate to spin the water off",
          "Drive slowly in low gear applying the brakes lightly, testing about every 200 feet until they are normal",
        ],
        correctIndex: 3,
        explanation:
          "Put the car in low gear, drive slowly and apply the brakes lightly - the friction dries them. Test them about every 200 feet until braking returns to normal.",
        context:
          "Wet brakes can pull to one side or not hold at all, so testing rather than assuming is the point. That is separate advice from the flash flood rule, which is not to drive through standing water at all: less than an inch can cost you control and you cannot see whether the road under it has washed away.",
        trap: "Waiting for them to dry on their own leaves you with wet brakes and a false sense that time fixed it.",
        excerptKey: "wet-brakes",
        sourceLabel: "Nevada Driver's Handbook - Driving Emergencies",
        sourceUrl: hb(58),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Built from what Nevada learners report getting wrong, then checked against the handbook and the statute. The exact distances, the rules the book states once, and the things everybody believes that turn out not to be true.",
    questions: [
      {
        id: "nv_s5_01",
        topic: "licensing",
        question: "How does the Nevada knowledge test end?",
        choices: [
          "After a fixed 30 minutes, whatever your score",
          "As soon as you reach 20 correct answers or six incorrect ones",
          "After all 25 questions, every time",
          "When you have answered 20 questions",
        ],
        correctIndex: 1,
        explanation:
          "The test stops in both directions. Twenty right and you have passed; six wrong and you have not, and either way it ends there without showing you the rest.",
        context:
          "It is 25 multiple-choice questions for a Class C non-commercial license and 80 percent is the pass mark. You can take it on a touch screen at a DMV office in English or Spanish, with audio available, or online through KnowToDrive Nevada. Anyone who has trouble reading it may ask for an oral examination instead.",
        trap: "Five wrong is the whole margin, and people budget as though a 25-question test gives them room to guess.",
        excerptKey: "dmv-test-pass",
        sourceLabel: "Nevada DMV - Driver License Testing",
        sourceUrl: TESTING,
        commonlyMissed: true,
      },
      {
        id: "nv_s5_02",
        topic: "licensing",
        question: "Do you need driver education before you can get a Nevada instruction permit?",
        choices: [
          "Yes, the classroom course must be finished first",
          "Yes, but only for applicants under 16",
          "No, but you cannot get a license without it if you are under 18",
          "No, and it is not required at any stage",
        ],
        correctIndex: 2,
        explanation:
          "Driver education is a license requirement, not a permit requirement. The permit comes first; the course and the logged hours come between the permit and the license.",
        context:
          "When you apply for the license you present a Certificate of Completion of a driver education course and a Beginning Driver Experience Log, DMV form DLD-130, filled in as the hours happened, in blue or black ink. Three routes satisfy the education requirement: a DMV-approved school, an approved online course, or - only if you are more than 30 miles from an approved school and cannot access the internet - 100 hours behind the wheel with 10 in the dark.",
        trap: "Families routinely enrol in the course expecting it to unlock the permit, and lose weeks. The order runs permit, then course, then license.",
        excerptKey: "young-log",
        sourceLabel: "Nevada Driver's Handbook - Young Drivers",
        sourceUrl: hb(13),
        commonlyMissed: true,
      },
      {
        id: "nv_s5_03",
        topic: "licensing",
        question:
          "You passed the knowledge test 11 months ago and now want your license. Must you take a written test again?",
        choices: [
          "No, provided the permit has not expired by more than 30 days",
          "Yes, a second written test is always required for the license",
          "Yes, if more than six months have passed",
          "No, the result never expires",
        ],
        correctIndex: 0,
        explanation:
          "One written test is enough. The permit is valid for a year, and only if it has been expired for more than 30 days does the knowledge test have to be retaken.",
        context:
          "That single test is what stands between you and the skills test - you must hold an instruction permit for the class of license you want before a road test can be scheduled. If you are under 18 you also need the six-month permit hold, the logged hours and the driver education certificate.",
        trap: "The 30-day grace after expiry is narrow and easy to burn through waiting for a DMV appointment.",
        excerptKey: "dmv-permit-expire",
        sourceLabel: "Nevada DMV - Get a Teen Instruction Permit",
        sourceUrl: PERMIT,
      },
      {
        id: "nv_s5_04",
        topic: "licensing",
        question:
          "Nevada issues a restricted license to some pupils aged 14 to 18. Who can actually get one?",
        choices: [
          "Any Nevada pupil who lives more than 15 miles from school",
          "Any pupil whose parent signs a hardship affidavit",
          "A pupil in a county of fewer than 55,000 people, or a city or town under 25,000, where the district does not provide transport",
          "Only pupils in Clark and Washoe counties",
        ],
        correctIndex: 2,
        explanation:
          "The statute sets population thresholds, not a distance. It has to be a public school in a county of fewer than 55,000 people, or a city or town of fewer than 25,000, and the district must not be providing transport - or an approved private school on the same terms.",
        context:
          "The handbook describes it in two lines: restricted licenses may be issued to drivers aged 14 and 15 who have demonstrated family hardship or who need to drive to and from school. A separate provision covers a genuine medical hardship in the household. Neither is a general permission to drive to school at 15.",
        trap: "It is widely repeated as being about how far you live from school. The test in the statute is how small your county or town is.",
        excerptKey: "nrs-restricted-pupil",
        sourceLabel: "NRS 483.270 - Restricted license for pupil in school",
        sourceUrl: nrs("483", "270"),
        commonlyMissed: true,
      },
      {
        id: "nv_s5_05",
        topic: "rules",
        question:
          "Who may supervise you while you drive on a Nevada Class C instruction permit?",
        choices: [
          "Any licensed driver over 18",
          "A parent or guardian only",
          "Any adult in the vehicle",
          "A licensed driver aged 21 or over with at least a year's experience, seated beside you",
        ],
        correctIndex: 3,
        explanation:
          "Three conditions, all of them required: 21 or over, at least one year of licensed driving experience, and in the front passenger seat next to you.",
        context:
          "There is no school-run exception to this in Nevada. A permit holder is never alone in the vehicle. The motorcycle permit is stricter again: daylight hours only, no passengers, no freeways, and the supervising rider must be on a motorcycle rather than in a car.",
        trap: "An 18-year-old sibling with a fresh license does not qualify, and neither does a qualified adult sitting in the back.",
        excerptKey: "permit-supervisor",
        sourceLabel: "Nevada Driver's Handbook - Instruction Permits",
        sourceUrl: hb(15),
      },
      {
        id: "nv_s5_06",
        topic: "parking",
        question:
          "You are angle parking on a street where a local ordinance requires the greater distance from hydrants. How far back must you stay?",
        choices: ["15 feet", "20 feet", "25 feet", "30 feet"],
        correctIndex: 1,
        explanation:
          "Twenty feet where angle parking is permitted and the local ordinance requires it. The 15-foot figure is the parallel parking case.",
        context:
          "Nevada's distances are all different from each other and the DMV asks about them by number: 15 or 20 feet from a hydrant depending on the layout, 20 feet from a crosswalk, 20 feet from a fire station driveway with 75 feet on the opposite side, 30 feet from a traffic control signal, and 50 feet from the nearest rail.",
        trap: "Two hydrant numbers exist. Answering 15 without noticing the words angle parking is the intended error.",
        excerptKey: "noparking-hydrant",
        sourceLabel: "Nevada Driver's Handbook - No Parking Allowed",
        sourceUrl: hb(50),
      },
      {
        id: "nv_s5_07",
        topic: "parking",
        question:
          "How far from a fire station driveway may you park when you are on the opposite side of the highway?",
        choices: ["20 feet", "50 feet", "75 feet", "100 feet"],
        correctIndex: 2,
        explanation:
          "Seventy-five feet on the opposite side, against 20 feet on the same side as the driveway. The larger figure exists so an appliance turning out has room to swing.",
        context:
          "It is the least remembered pair in Nevada's parking list, and one of the easiest for an examiner to ask about because the two numbers appear in the same sentence. Note also that you may never use a fire station driveway to turn your vehicle around.",
        trap: "Twenty feet is the same-side figure and is offered here on purpose. Read which side the question is describing.",
        excerptKey: "noparking-firestation",
        sourceLabel: "Nevada Driver's Handbook - No Parking Allowed",
        sourceUrl: hb(50),
        commonlyMissed: true,
      },
      {
        id: "nv_s5_08",
        topic: "rules",
        question:
          "You are about to pass on a two-lane road outside any town. How far ahead does the left signal go on?",
        choices: ["100 feet", "150 feet", "200 feet", "300 feet"],
        correctIndex: 3,
        explanation:
          "Three hundred feet outside business or residential areas, against 100 feet inside them. The passing rule uses the same pair as turns and lane changes.",
        context:
          "Everything else about the pass has to line up too: a clear view ahead with no immediate oncoming traffic, a broken yellow line on your side, no curve or crest hiding the road, no street or railroad crossing within 100 feet, and no double solid yellow line. Return to your lane once the vehicle you passed is visible in your mirror.",
        trap: "One hundred feet is the number people remember because it is the one they use in town. Outside town it triples.",
        excerptKey: "pass-signal-100-300",
        sourceLabel: "Nevada Driver's Handbook - Passing Another Vehicle",
        sourceUrl: hb(47),
      },
      {
        id: "nv_s5_09",
        topic: "safety",
        question:
          "There is a stop sign at a railroad crossing and a train is approaching. Where do you stop?",
        choices: [
          "At the stop sign, wherever it is placed",
          "Wherever you can see both ways along the track",
          "At least 50 feet from the tracks",
          "At least 15 feet from the tracks",
        ],
        correctIndex: 3,
        explanation:
          "Fifteen feet from the tracks when a train is coming. The 50-foot figure is a different rule - it is how far away you must leave a parked vehicle.",
        context:
          "Alongside it: look both ways even where there is no stop sign and no signal, do not shift gears while crossing, and where there is more than one set of tracks wait until you have a clear view in both directions before starting across. If you get stuck on the tracks, leave the vehicle at once and find the blue Emergency Notification System sign to call the railroad and police.",
        trap: "Fifteen and fifty are the two railroad numbers, and they are used for opposite things. Stopping is 15; parking is 50.",
        excerptKey: "rr-15-feet",
        sourceLabel: "Nevada Driver's Handbook - Railroad Crossings",
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "nv_s5_10",
        topic: "speed",
        question: "What is the statutory speed limit in an area designated as a school zone?",
        choices: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctIndex: 1,
        explanation:
          "Fifteen miles per hour is the figure in the statute. The handbook adds that Nevada also posts 25 in some school zones, and the sign in front of you governs.",
        context:
          "The exceptions in the statute are about timing, not about children being visible: it does not apply on a day when school is not in session, during periods a local government or NDOT has specified, or when a speed limit beacon is fitted and not flashing. Nevada also bans U-turns and overtaking in a school zone while the zone is in effect.",
        trap: "Waiting to see a child before slowing gets the rule backwards. The clock and the signs put the limit in force, not the sidewalk.",
        excerptKey: "nrs-school-zone-15",
        sourceLabel: "NRS 484B.363 - School zone or school crossing zone",
        sourceUrl: nrs("484B", "363"),
      },
      {
        id: "nv_s5_11",
        topic: "signals",
        question:
          "You are on a motorcycle at a red light that will not detect you and never changes. What does Nevada law allow?",
        choices: [
          "Nothing - you must wait for another vehicle to trigger the signal",
          "You may treat it as a stop sign after 30 seconds",
          "After two complete signal cycles you may proceed straight, right or left when it is safe",
          "You may make a right turn only",
        ],
        correctIndex: 2,
        explanation:
          "Nevada gives motorcycles, mopeds, trimobiles, bicycles, electric bicycles and electric scooters a way out. After waiting through two complete cycles of the signal without it changing, you may proceed once you have stopped and it is safe.",
        context:
          "The permission is narrow. It applies where the signal has malfunctioned or has simply failed to detect the vehicle, no other device prohibits the movement, and it is safe to go. It appears nowhere in the handbook, which is exactly why a rider who has never read the statute sits at the light indefinitely.",
        trap: "Counting seconds is not the test. The statute counts complete signal cycles, and there are two of them.",
        excerptKey: "nrs-dead-red",
        sourceLabel: "NRS 484B.307 - Traffic controlled by colored lights",
        sourceUrl: nrs("484B", "307"),
        commonlyMissed: true,
      },
      {
        id: "nv_s5_12",
        topic: "safety",
        question:
          "Can a Nevada officer pull you over for the sole reason that you are not wearing a seat belt?",
        choices: [
          "No - the citation may only be issued when the vehicle was halted for another violation or offense",
          "Yes, it is a primary offense like speeding",
          "Yes, but only for drivers under 18",
          "Yes, and it carries two demerit points",
        ],
        correctIndex: 0,
        explanation:
          "Nevada's belt law is enforced as a secondary offense. The citation may be issued only where the violation is discovered because the vehicle was already halted, or the driver arrested, for something else.",
        context:
          "The penalty is a civil one of not more than $25, or a number of hours of community service. It is not a moving traffic violation, so it carries no demerit points, and it may not be treated as negligence or causation in a civil case. None of that appears in the handbook, which says only that seat belts are the law.",
        trap: "Secondary enforcement is not permission. The belt requirement itself is absolute for the driver and every passenger six and over.",
        excerptKey: "nrs-belt-secondary",
        sourceLabel: "NRS 484D.495 - Safety belts",
        sourceUrl: nrs("484D", "495"),
        commonlyMissed: true,
      },
      {
        id: "nv_s5_13",
        topic: "impairment",
        question:
          "A 16-year-old Nevada license holder blows 0.03 percent. What does the affidavit they signed say happens?",
        choices: [
          "A warning letter to the parent who co-signed",
          "A 30-day suspension",
          "A 90-day suspension",
          "The license is revoked for 185 days",
        ],
        correctIndex: 3,
        explanation:
          "One hundred and eighty-five days. The affidavit every under-18 applicant signs sets it out: a blood, breath or urine test showing at least 0.02 but less than 0.08 revokes the license for 185 days.",
        context:
          "The same document lists what else costs a minor their license: any court finding of driving under the influence, graffiti, any criminal activity involving alcohol or a controlled substance, buying or possessing alcohol, firearms offenses, habitual truancy, and organizing or taking part in an unauthorized speed contest or trick driving display.",
        trap: "None of those need to happen in a car. A minor can lose a Nevada license for a drug or alcohol offense committed on foot.",
        excerptKey: "young-002-revoked",
        sourceLabel: "Nevada Driver's Handbook - Young Drivers",
        sourceUrl: hb(13),
      },
      {
        id: "nv_s5_14",
        topic: "sharing",
        question: "Which lane must a moped use on a multi-lane Nevada road?",
        choices: [
          "Any lane, like any other vehicle",
          "The extreme right-hand lane, with four listed exceptions",
          "The center lane, for visibility",
          "The extreme left-hand lane when turning is expected",
        ],
        correctIndex: 1,
        explanation:
          "A moped stays in the extreme right-hand lane. The exceptions are a road with a single lane, preparing for a left turn, a right lane that would not be safe, and the direction of a police officer.",
        context:
          "The left turn exception has a limit of its own: the turn must be made within a quarter mile of entering the lane. Nevada defines a moped by motor size, a maximum of two brake horsepower and a top speed of 30 mph on the flat. Operators and passengers must wear helmets, and mopeds must be registered though not insured.",
        trap: "Mopeds are not exempt from lane discipline just because they can be ridden on a Class C license.",
        excerptKey: "moped-right-lane",
        sourceLabel: "Nevada Driver's Handbook - Mopeds",
        sourceUrl: hb(64),
      },
      {
        id: "nv_s5_15",
        topic: "rightOfWay",
        question:
          "You are at a yield sign waiting to join a highway. A vehicle is already on the highway approaching from your left. What do you owe it?",
        choices: [
          "You yield the right of way to it",
          "Nothing, if you can enter without it braking",
          "You may enter if you signal first",
          "You yield only if it is within 100 feet",
        ],
        correctIndex: 0,
        explanation:
          "A yield sign requires you to give way to drivers already on the highway, to pedestrians and to through traffic. If there is no safe gap, you stop and wait for one.",
        context:
          "Yield differs from stop only in that it does not require an automatic halt. Everything else is the same: slow on approach, check all directions for cross traffic, and give way - including to a vehicle making a U-turn from the intersection.",
        trap: "Making the other driver lift off is not yielding. The gap has to be there before you move.",
        excerptKey: "signs-yield",
        sourceLabel: "Nevada Driver's Handbook - Signs",
        sourceUrl: hb(29),
      },
      {
        id: "nv_s5_16",
        topic: "emergencies",
        question:
          "A driver leaves the scene of a Nevada crash in which someone was injured. How serious is that?",
        choices: [
          "A category B felony carrying 2 to 20 years in prison and a fine of $2,000 to $5,000",
          "A misdemeanor with a fine",
          "A gross misdemeanor with a possible jail term",
          "A civil penalty and license suspension only",
        ],
        correctIndex: 0,
        explanation:
          "A category B felony. The prison term runs from a minimum of two years to a maximum of twenty, plus a fine of $2,000 to $5,000, and a separate offense is committed for each person injured or killed.",
        context:
          "The duty is to stop immediately at the scene or as close as possible, without obstructing traffic more than necessary, and to remain there until you have given information and rendered aid. The handbook's own summary is shorter: stop, get medical help for the injured, warn traffic, notify law enforcement.",
        trap: "Panic and a short drive home is the fact pattern this statute is written for, and its penalty does not scale with how far you went.",
        excerptKey: "nrs-hitrun-felony",
        sourceLabel: "NRS 484E.010 - Duty to stop at scene of crash involving injury",
        sourceUrl: nrs("484E", "010"),
      },
      {
        id: "nv_s5_17",
        topic: "rules",
        question:
          "Which of these counts as a business district for the purposes of Nevada's U-turn ban?",
        choices: [
          "Only a street with retail shops on both sides",
          "Only an area zoned commercial by the city",
          "Any street with a posted limit of 35 mph or more",
          "An area with churches, apartments, multifamily housing or public buildings",
        ],
        correctIndex: 3,
        explanation:
          "The handbook defines it far more widely than the word suggests: areas with churches, apartments, multifamily housing units and public buildings are all treated as business districts, and U-turns there are limited to intersections or provided openings.",
        context:
          "The rest of the U-turn ban list: at or on a railroad crossing, on a one-way street, in front of a fire station, on a divided highway except through an opening in the divider, where visibility is under 200 feet either way, near a grade with less than 500 feet of visibility, and wherever a sign prohibits it.",
        trap: "A residential street lined with apartment blocks looks like the safest place for a U-turn and is one of the places the handbook names.",
        excerptKey: "uturn-business",
        sourceLabel: "Nevada Driver's Handbook - U-Turns",
        sourceUrl: hb(46),
        commonlyMissed: true,
      },
      {
        id: "nv_s5_18",
        topic: "signs",
        question:
          "A work-zone barrier blocks a road you want to use and you can see the road beyond it is clear. What does Nevada say?",
        choices: [
          "You may move it if you replace it behind you",
          "Moving a barrier or sign to cross a closed road is illegal and subject to double work-zone penalties",
          "You may pass it at reduced speed",
          "It is permitted if you live on the closed section",
        ],
        correctIndex: 1,
        explanation:
          "Moving a barrier or sign to get onto a road closed to traffic is illegal, and the penalty falls under the doubled work-zone schedule.",
        context:
          "Flood barricades attract the same rule for a different reason: they are put up by local officials to keep drivers off unsafe roads, and the handbook says never to drive around them. In a work zone you also follow any flagger present, merge cooperatively, and expect stopped traffic ahead.",
        trap: "Being able to see clear pavement past the barrier tells you nothing about what is under it.",
        excerptKey: "workzone-barriers",
        sourceLabel: "Nevada Driver's Handbook - Highway Work Zones",
        sourceUrl: hb(60),
      },
      {
        id: "nv_s5_19",
        topic: "parking",
        question: "May you park in a marked bicycle lane in Nevada?",
        choices: [
          "Yes, briefly, if you stay with the vehicle",
          "Yes, outside commuting hours",
          "No, unless your vehicle is disabled",
          "Yes, if no cyclists are in sight",
        ],
        correctIndex: 2,
        explanation:
          "A bicycle lane is on the no-parking list, with a single exception for a disabled vehicle. Driving in one is separately prohibited.",
        context:
          "Motorists may not stop, park or drive on a designated bicycle path or lane at all, except to enter or leave an alley or driveway, while performing official duties, when directed by a police officer, or in an emergency. Motorists must also yield the right of way to a cyclist already on a bike path or in a bike lane.",
        trap: "Staying with the car does not help. Stopping in a bike lane forces a cyclist into the traffic lane, which is the harm the rule prevents.",
        excerptKey: "noparking-bike-lane",
        sourceLabel: "Nevada Driver's Handbook - No Parking Allowed",
        sourceUrl: hb(50),
      },
      {
        id: "nv_s5_20",
        topic: "speed",
        question:
          "One wide truck is following another on a Nevada highway. What gap does the statute ask the following driver to leave?",
        choices: [
          "500 feet, whenever conditions permit, so an overtaking vehicle can occupy it",
          "300 feet",
          "Two seconds, as for any other vehicle",
          "One vehicle length for every 10 mph",
        ],
        correctIndex: 0,
        explanation:
          "Five hundred feet, where conditions permit. The purpose is stated in the statute itself: to leave room an overtaking vehicle can enter safely.",
        context:
          "It applies to trucks or combinations 80 inches or more in overall width following another of the same size, and it does not stop them from overtaking. For everyone else the rule is the general one: never follow more closely than is reasonable and prudent given speed, traffic and the state of the road. The handbook's practical version is two seconds at 40 mph or less, and five seconds or more for commercial vehicles.",
        trap: "This is a statutory number the handbook never prints, and it is the kind of thing a knowledge test asks precisely because it is specific.",
        excerptKey: "nrs-truck-500",
        sourceLabel: "NRS 484B.127 - Following too closely",
        sourceUrl: nrs("484B", "127"),
      },
      {
        id: "nv_s5_21",
        topic: "licensing",
        question: "What is the minimum vision standard for full Nevada driving privileges?",
        choices: ["20/20", "20/30", "20/40", "20/50"],
        correctIndex: 2,
        explanation:
          "Twenty over forty. If you need glasses or contact lenses to reach it, Restriction B goes on the license and you must wear them to drive.",
        context:
          "Someone who cannot meet the standard even corrected may be licensed for daylight hours only, refused a license, or required to submit to a yearly examination, depending on the nature of the problem. The vision test is the one test every applicant takes, including new residents who are exempt from everything else.",
        trap: "Restriction B is not a penalty. It is a condition of the license, and driving without the glasses is driving outside it.",
        excerptKey: "dmv-vision-2040",
        sourceLabel: "Nevada DMV - Driver License Testing",
        sourceUrl: TESTING,
      },
      {
        id: "nv_s5_22",
        topic: "rules",
        question: "When may you make a U-turn in a Nevada school zone?",
        choices: [
          "At any time, if the road is clear",
          "Only at a signalized intersection",
          "Only when the zone is not in effect - no school that day, outside the school-day window, or no children present",
          "Only with a crossing guard's permission",
        ],
        correctIndex: 2,
        explanation:
          "The prohibition lifts only when the zone is not operating: a day school is not in session, the period from a half hour after school ends to a half hour before the next session, when no children are present, or when the signs and lights show the zone is off.",
        context:
          "The same window governs the reduced speed limit and, under the current statute, the ban on overtaking another vehicle in the zone. Violating a school crossing guard's direction is a misdemeanor, and motorists must wait until the guard is completely clear of the crosswalk.",
        trap: "An empty school zone at 8 a.m. on a school day is still a school zone. The window, not the view, decides.",
        excerptKey: "school-uturn",
        sourceLabel: "Nevada Driver's Handbook - School Areas",
        sourceUrl: hb(33),
      },
      {
        id: "nv_s5_23",
        topic: "impairment",
        question:
          "You refuse the breath test at a Nevada DUI stop, expecting there is then no evidence. What actually happens?",
        choices: [
          "The case is dropped for lack of a sample",
          "Your driving privilege is revoked, and an officer may still direct that blood be drawn even on a first offense",
          "You are given 24 hours to submit voluntarily",
          "A judge must approve any further testing before it can happen",
        ],
        correctIndex: 1,
        explanation:
          "Refusal costs you the privilege to drive for a year on a first refusal - three years if you have been revoked within the previous seven - and the handbook says an officer may direct blood samples be drawn regardless.",
        context:
          "That is Nevada's Implied Consent Law: driving here is taken as agreement to a blood, breath or urine test when an officer suspects impairment. Any time you lose a license you may request an administrative hearing through the DMV, but the revocation is separate from whatever the criminal court decides.",
        trap: "Refusing looks like denying the state its evidence. It gives up the license and usually not the sample.",
        excerptKey: "implied-consent",
        sourceLabel: "Nevada Driver's Handbook - Driving Under the Influence",
        sourceUrl: hb(79),
      },
      {
        id: "nv_s5_24",
        topic: "safety",
        question: "What does the Nevada handbook give as a normal driver reaction time?",
        choices: [
          "2 to 2.5 seconds",
          "About half a second",
          "1 second",
          "4 seconds",
        ],
        correctIndex: 0,
        explanation:
          "Two to two and a half seconds, covering perception - seeing and understanding the reason to stop - plus the message to your foot and the movement to the pedal.",
        context:
          "Reaction time is only half the stop. Braking time and distance come after it, and braking distance grows with the square of speed. The handbook's table assumes a 2.5-second reaction: 127 feet total from 25 mph, 278 feet from 45, 494 feet from 65. Reaction time gets longer as decisions get more complex or events are unexpected.",
        trap: "People estimate their own reaction at a fraction of a second. At 65 mph, two and a half seconds is 238 feet before the brakes do anything.",
        excerptKey: "stopping-reaction",
        sourceLabel: "Nevada Driver's Handbook - Stopping",
        sourceUrl: hb(41),
      },
      {
        id: "nv_s5_25",
        topic: "sharing",
        question:
          "A motorcycle ahead of you has its right indicator flashing but has passed two side streets. What should you assume?",
        choices: [
          "It has broken down and can be ignored",
          "The rider intends to pull over shortly",
          "The rider is signaling a lane change",
          "The signal may be left over from an earlier turn, because most motorcycle signals do not self-cancel",
        ],
        correctIndex: 3,
        explanation:
          "Turn signals are not self-canceling on most motorcycles. A blinking indicator may simply be one the rider forgot to switch off after the last turn.",
        context:
          "The handbook's advice is to read the rider rather than the light: watch for a head turning to look behind, or the machine beginning to lean. Motorcycles are also hard to judge for speed and distance because of their size, and can be pushed out of position by wind or a rough surface, so leave more space than you would behind a car.",
        trap: "Acting on the signal alone is how a driver pulls out in front of a motorcycle that was never turning.",
        excerptKey: "mc-signals",
        sourceLabel: "Nevada Driver's Handbook - Motorcycles",
        sourceUrl: hb(63),
      },
      {
        id: "nv_s5_26",
        topic: "rightOfWay",
        question:
          "You are stopping for a pedestrian who is blind. Where should the car end up?",
        choices: [
          "Well back from the crosswalk, to give them room",
          "Beside the crosswalk, out of their path",
          "No more than five feet from the crosswalk",
          "Wherever you can stop, and then switch the engine off",
        ],
        correctIndex: 2,
        explanation:
          "Not more than five feet back. The sound of your engine is a navigation cue, and a car stopped far away removes the information the pedestrian is using to place you.",
        context:
          "The handbook's list is mostly about not helping in the wrong way: do not honk, do not give verbal directions, do not stop in the middle of a crosswalk, do not block a sidewalk, and do not turn right without looking first. Give three or four seconds for the person to decide - a step back with the cane pulled in means go.",
        trap: "Hanging well back feels considerate. It removes the engine noise the pedestrian needs, and it is the answer the handbook rules out.",
        excerptKey: "blind-five-feet",
        sourceLabel: "Nevada Driver's Handbook - Pedestrians Who are Blind or Visually Impaired",
        sourceUrl: hb(67),
        commonlyMissed: true,
      },
      {
        id: "nv_s5_27",
        topic: "emergencies",
        question:
          "Your accelerator sticks open. You have pressed it hard and released with no result. What next?",
        choices: [
          "Switch off the ignition",
          "Shift to neutral, brake, and pull off to the right - never into park",
          "Shift into park to disconnect the engine",
          "Use the parking brake alone and steer to the shoulder",
        ],
        correctIndex: 1,
        explanation:
          "Neutral, brakes, and off the road to the right. The handbook is explicit that the vehicle never goes into park while it is moving.",
        context:
          "Turning off the ignition is also poor advice at speed: the handbook warns separately that moving the ignition to the lock position while the vehicle is in motion locks the steering. The same never-into-park rule attaches to brake failure, where the sequence is pump the pedal, then the emergency brake, then a lower gear.",
        trap: "Park and ignition-off are both instincts that take away the control you still have - steering, brakes, or both.",
        excerptKey: "gas-pedal-sticks",
        sourceLabel: "Nevada Driver's Handbook - Driving Emergencies",
        sourceUrl: hb(58),
      },
      {
        id: "nv_s5_28",
        topic: "signals",
        question: "A traffic light is flashing yellow. What are you permitted to do?",
        choices: [
          "Proceed with caution",
          "Stop, then go when clear",
          "Stop and wait for a green",
          "Treat it as a four-way stop",
        ],
        correctIndex: 0,
        explanation:
          "Flashing yellow means proceed with caution, and nothing more. No stop is required, but the caution is not optional either.",
        context:
          "It is the counterpart to the flashing red, which has the same meaning as a stop sign. Both are different again from a dark signal head, where every driver must come to a full stop and treat the junction as an all-way stop after yielding to pedestrians and vehicles already there.",
        trap: "Flashing red and flashing yellow look alike in a mirror and mean opposite things. One is a stop sign; the other is not.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "Nevada Driver's Handbook - Signals",
        sourceUrl: hb(30),
      },
      {
        id: "nv_s5_29",
        topic: "rules",
        question:
          "A driver ahead of you is signaling and slowing for a left turn. May you pass on the left?",
        choices: [
          "Yes, if the oncoming lane is clear",
          "Yes, if you signal first",
          "No - never pass to the left of a driver making or signaling a left turn",
          "Yes, provided you are within the speed limit",
        ],
        correctIndex: 2,
        explanation:
          "Never. The handbook states it as an absolute, because the driver is about to move into exactly the space you would be occupying.",
        context:
          "The correct response is to pass on the right if the road is clearly marked for two or more lanes your way and it is safe, or to wait. Passing on the right is otherwise the more dangerous maneuver and never justifies leaving the paved surface of the highway.",
        trap: "An empty oncoming lane looks like an opportunity. The turning driver is heading into it.",
        excerptKey: "pass-left-turner",
        sourceLabel: "Nevada Driver's Handbook - Passing Another Vehicle",
        sourceUrl: hb(47),
      },
      {
        id: "nv_s5_30",
        topic: "parking",
        question: "Where does Nevada's no-parking list put bridges and tunnels?",
        choices: [
          "Parking is allowed if the shoulder is wide enough",
          "Parking is allowed outside peak hours",
          "Parking is allowed with hazard lights on",
          "You may not park on any bridge or elevated structure, or within a highway tunnel",
        ],
        correctIndex: 3,
        explanation:
          "Bridges, other elevated structures and highway tunnels are all on the list of places you may not stop, stand or park.",
        context:
          "They keep company with sidewalks, driveways, intersections, crosswalks, within 15 feet of a hydrant where parallel parking is permitted, within 30 feet of a traffic control signal, within 50 feet of the nearest rail, opposite a highway construction zone, next to an already parked vehicle, in a bicycle lane, and in an accessible space without the placard.",
        trap: "Hazard lights change nothing on this list. They signal a problem; they do not create a permission.",
        excerptKey: "noparking-bridge",
        sourceLabel: "Nevada Driver's Handbook - No Parking Allowed",
        sourceUrl: hb(50),
      },
      {
        id: "nv_s5_31",
        topic: "speed",
        question:
          "A rural Nevada interstate is posted at 80 mph. Could a stretch of road ever lawfully be posted higher?",
        choices: [
          "Yes, up to 85 on designated rural interstate",
          "No - it is unlawful in any event to drive faster than 80 mph in Nevada",
          "Yes, wherever NDOT determines it is safe",
          "Yes, during daylight hours only",
        ],
        correctIndex: 1,
        explanation:
          "Eighty is the ceiling in both directions. NDOT may not establish a limit above 80 mph, and the Basic Rule makes any speed over 80 unlawful in any event regardless of what a sign says.",
        context:
          "The rest of the Basic Rule sits alongside it and is easier to break: it is unlawful to drive faster than is reasonable or proper for the traffic, surface, width and weather, at a speed that endangers anyone, faster than the posted limit, or at a speed that results in injury or damage.",
        trap: "Some states go to 85. Nevada does not, and 80 is the number in the statute rather than a description of current signs.",
        excerptKey: "nrs-max-80",
        sourceLabel: "NRS 484B.600 - Basic rule",
        sourceUrl: nrs("484B", "600"),
        commonlyMissed: true,
      },
      {
        id: "nv_s5_32",
        topic: "licensing",
        question:
          "How much supervised driving must a Nevada teen within 30 miles of an approved driving school log?",
        choices: [
          "30 hours, 5 of them at night",
          "40 hours, with no night requirement",
          "50 hours, 10 of them at night",
          "100 hours, 10 of them at night",
        ],
        correctIndex: 2,
        explanation:
          "Fifty hours, of which ten must be at night, documented on the official DMV form as the hours happen.",
        context:
          "The 100-hour figure is the alternative route, and it applies only if you are more than 30 miles from a DMV-approved school and cannot access the internet for an online course - then it is 100 hours with 10 in the dark. For a motorcycle license under that route, all 100 hours must be in daylight.",
        trap: "Fifty and one hundred are both real Nevada numbers and they belong to different routes. Which one you owe depends on your access to a school.",
        excerptKey: "bhw-50-hours",
        sourceLabel: "Nevada Driver's Handbook - Behind the Wheel Experience",
        sourceUrl: hb(14),
      },
      {
        id: "nv_s5_33",
        topic: "sharing",
        question:
          "A driver is convicted of a third school bus passing offense within two years. What does the statute provide?",
        choices: [
          "A fine of up to $1,000 and license suspension for up to one year",
          "A fine of up to $250",
          "A written warning to the registered owner",
          "Mandatory attendance at traffic safety school",
        ],
        correctIndex: 0,
        explanation:
          "For a third or later offense within two years of the most recent one, a fine of not more than $1,000 and a suspension of the driver license for not more than a year.",
        context:
          "Every offense in the series is a misdemeanor. Separately, Nevada lets bus drivers report violations to the school district and to the DMV, after which the registered owner of the vehicle receives a warning letter - so a report can arrive without a traffic stop having happened at all.",
        trap: "The warning letter is not the penalty. It is what happens when a bus driver reports you, and the criminal offense sits behind it.",
        excerptKey: "nrs-schoolbus-penalty",
        sourceLabel: "NRS 484B.353 - Overtaking and passing school bus",
        sourceUrl: nrs("484B", "353"),
      },
      {
        id: "nv_s5_34",
        topic: "signs",
        question:
          "There is no signal and no train in sight at a rural crossing. Which vehicles must stop anyway?",
        choices: [
          "Any vehicle towing a trailer",
          "Vehicles with more than two axles",
          "None - a clear crossing may be taken at speed",
          "Passenger buses and trucks carrying flammable or dangerous materials",
        ],
        correctIndex: 3,
        explanation:
          "Passenger buses and trucks carrying flammable or dangerous loads stop at every crossing, signal or no signal, train or no train.",
        context:
          "Everyone else slows, prepares to stop and looks both ways. Where a stop sign is posted, all traffic stops. Where a train is coming, the stop is at least 15 feet from the tracks. Where a gate is lowered, nobody goes around it. Where there are multiple tracks, wait for a clear view both ways before starting across.",
        trap: "It is easy to read this as a rule for heavy vehicles generally. It is a rule about what they are carrying, and about buses full of people.",
        excerptKey: "rr-buses",
        sourceLabel: "Nevada Driver's Handbook - Railroad Crossings",
        sourceUrl: hb(33),
      },
      {
        id: "nv_s5_35",
        topic: "emergencies",
        question:
          "Barricades block a Nevada road after a summer storm and you can see the water beyond looks shallow. What does the handbook say?",
        choices: [
          "Cross slowly in a low gear",
          "Never drive around them - find another route",
          "Cross if the water is under six inches deep",
          "Follow a larger vehicle through",
        ],
        correctIndex: 1,
        explanation:
          "Never drive around a barricade. Local officials put them there to keep drivers off unsafe roads, and the handbook's rule is to find another route.",
        context:
          "The reasons are underneath the water rather than in it. You cannot tell whether the road has washed away, less than an inch of moving water can cost you control, six inches can push a car off the road at speed, and most vehicles will float in two feet or less. More than half of flash flood deaths are vehicle-related.",
        trap: "Judging the depth is the mistake. The hazard is the roadbed you cannot see, not the water you can.",
        excerptKey: "flood-barricades",
        sourceLabel: "Nevada Driver's Handbook - Tips for Driving in a Flash Flood",
        sourceUrl: hb(60),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix the Nevada DMV actually draws from. No hints, no clustering by topic - the same jump from a sign to a parking distance to a right-of-way scenario that the real 25-question test makes.",
    questions: [
      {
        id: "nv_s6_01",
        topic: "signs",
        question: "In Nevada, which sign shape is used for STOP and nothing else?",
        choices: [
          "The octagon",
          "The inverted triangle",
          "The pentagon",
          "The diamond",
        ],
        correctIndex: 0,
        explanation:
          "Eight sides means stop, and the shape is reserved for it so that the sign is identifiable from the back, in fog, or in a language you do not read.",
        context:
          "Nevada's shape code: octagon for stop, diamond for warning, rectangle for regulations and directions, inverted triangle for yield, pennant for no passing, pentagon for school zones and crossings, circle for a railroad crossing ahead, crossbuck for the crossing itself, and shield for a route marker.",
        trap: "The inverted triangle is yield, and the pentagon marks school zones. Neither ever means stop.",
        excerptKey: "signs-stop",
        sourceLabel: "Nevada Driver's Handbook - Signs",
        sourceUrl: hb(29),
      },
      {
        id: "nv_s6_02",
        topic: "signals",
        question:
          "You are stopping for a red light at an intersection with a painted stop line and a crosswalk. Where do you stop?",
        choices: [
          "With the front bumper level with the traffic signal",
          "Anywhere before the far side of the intersection",
          "Behind the crosswalk or the stop line",
          "On the crosswalk, so you can see cross traffic",
        ],
        correctIndex: 2,
        explanation:
          "Behind the crosswalk or the stop line, and you stay stopped until the light turns green. Where there is neither, you stop before entering the intersection.",
        context:
          "The stop line is the wide white bar painted across the lane, and it is placed where you can see traffic coming from every direction. Stopping past it puts your car where pedestrians need to walk, and it takes away the view the line was positioned to give you.",
        trap: "Creeping forward onto the crosswalk to see better takes the space pedestrians are entitled to.",
        excerptKey: "signal-red",
        sourceLabel: "Nevada Driver's Handbook - Signals",
        sourceUrl: hb(30),
      },
      {
        id: "nv_s6_03",
        topic: "rightOfWay",
        question:
          "A fire engine is approaching with its siren on from the opposite direction on an undivided road. What must you do?",
        choices: [
          "Continue, because it is not coming from behind you",
          "Pull to the right edge of the road and stop until it has passed",
          "Move to the center of the road to give it the shoulder",
          "Slow to half the posted limit and keep going",
        ],
        correctIndex: 1,
        explanation:
          "The duty runs to emergency vehicles approaching from any direction. You drive to the right edge of the road, clear of any intersection, and stop until it has gone by.",
        context:
          "The handbook attaches this to police vehicles, fire engines and ambulances using a siren and red lights. There is a separate and different duty for emergency vehicles that are already stopped: slow below the posted limit, proceed with caution, be prepared to stop, and move out of the adjacent lane where you can.",
        trap: "Oncoming does not mean irrelevant. A fire engine may need to cross to your side of the road to reach the incident.",
        excerptKey: "emergency-yield",
        sourceLabel: "Nevada Driver's Handbook - Signs",
        sourceUrl: hb(29),
      },
      {
        id: "nv_s6_04",
        topic: "rules",
        question:
          "You are following a car at 35 mph. You start counting as it passes a sign and reach the sign on one thousand one. What does that tell you?",
        choices: [
          "The gap is correct for this speed",
          "The gap is generous and can be reduced",
          "The gap is acceptable but only in daylight",
          "You are following too closely",
        ],
        correctIndex: 3,
        explanation:
          "At 40 mph or less the minimum is two seconds. Reaching the fixed point before you have counted one thousand two means the gap is under the minimum.",
        context:
          "Two seconds is a floor and the handbook says so, noting that most driving instructors recommend up to four. The gap has to grow with speed, with rain or snow, at night, and behind a large vehicle. The handbook's own diagram gives 2 to 4 seconds or more for cars and 5 seconds or more for commercial vehicles.",
        trap: "One thousand one sounds like a full second of margin. The rule needs two, and this is one.",
        excerptKey: "follow-two-seconds",
        sourceLabel: "Nevada Driver's Handbook - Defensive Driving Tips",
        sourceUrl: hb(42),
      },
      {
        id: "nv_s6_05",
        topic: "speed",
        question:
          "Besides the posted limit, what does Nevada's Basic Rule require you to weigh?",
        choices: [
          "Traffic, weather, how far you can see, the road surface and the type of road",
          "Only the surface condition",
          "Only the presence of other vehicles",
          "Only whether it is dark",
        ],
        correctIndex: 0,
        explanation:
          "The rule takes in the amount and type of traffic, the weather and your sight distance, whether the surface is dry, wet, icy or snow-covered, and whether the road is flat and straight or steep, curvy and narrow.",
        context:
          "It also means you must never drive at a speed that endangers anyone, and it makes the safe speed frequently lower than the posted one. Speeding fines in Nevada scale with how far over you were, from one demerit point at 1 to 10 mph over up to five points at 41 or more.",
        trap: "The posted number is a ceiling for good conditions, never a floor you are entitled to reach.",
        excerptKey: "speed-basic-rule",
        sourceLabel: "Nevada Driver's Handbook - Controlling Speed",
        sourceUrl: hb(35),
      },
      {
        id: "nv_s6_06",
        topic: "parking",
        question: "What does a yellow-painted curb mean in Nevada?",
        choices: [
          "No parking during daylight hours",
          "Parking limited to 15 minutes",
          "A loading zone, with the rules set by local law",
          "Reserved for taxis and buses",
        ],
        correctIndex: 2,
        explanation:
          "Yellow marks a loading zone, and what you may do there depends on the local ordinance rather than on state law.",
        context:
          "The five-color set runs white for a very brief passenger or mail stop, green for limited-time parking with the limit posted, yellow for a loading zone, red for no stopping, standing or parking, and blue for accessible spaces carrying a $250 minimum fine for misuse.",
        trap: "Yellow and red are both restrictive and only one of them bans stopping outright.",
        excerptKey: "curb-yellow",
        sourceLabel: "Nevada Driver's Handbook - Colored Curb Markings",
        sourceUrl: hb(48),
      },
      {
        id: "nv_s6_07",
        topic: "safety",
        question: "Where and how must a Nevada child under two years old ride?",
        choices: [
          "Forward-facing in the back seat",
          "Rear-facing in a child restraint in the back seat",
          "In any seat, in a rear-facing restraint",
          "In a booster seat with the adult belt",
        ],
        correctIndex: 1,
        explanation:
          "Rear-facing, in a child restraint, in the back seat. The rear-facing position supports the head and protects the neck and spine in most crashes.",
        context:
          "Children under six, and anyone measuring under 57 inches whatever their age, must be in an approved child restraint. From six years and 57 inches the ordinary seat belt requirement applies, in the front or the back. A child should never be held on a lap or share a single belt with someone else.",
        trap: "Turning a child forward-facing early is a milestone parents look forward to. Under two, Nevada does not allow it.",
        excerptKey: "rear-facing-two",
        sourceLabel: "Nevada Driver's Handbook - Buckle Up",
        sourceUrl: hb(25),
      },
      {
        id: "nv_s6_08",
        topic: "impairment",
        question:
          "Your reading is 0.06 percent and you are 30 years old. Can you still be arrested for DUI in Nevada?",
        choices: [
          "No, 0.08 is an absolute threshold",
          "No, unless a crash occurred",
          "Only if you refuse a second test",
          "Yes - you can be arrested and convicted at a lower level",
        ],
        correctIndex: 3,
        explanation:
          "The handbook says it in as many words: 0.08 is used as a guide, and you can be arrested and convicted with a lower level. Impairment is the offense; the number is one way of proving it.",
        context:
          "Being under the influence of intoxicating liquor is unlawful on its own, separately from the 0.08 measurement. The same section makes it unlawful to drive under the influence of a controlled substance, or a combination of drink and drugs, and holding a prescription is not a defense.",
        trap: "Drinking to just under the limit treats 0.08 as a safe harbour. Nevada does not offer one.",
        excerptKey: "dui-lower-level",
        sourceLabel: "Nevada Driver's Handbook - Driving Under the Influence",
        sourceUrl: hb(79),
      },
      {
        id: "nv_s6_09",
        topic: "sharing",
        question: "Where is a Nevada cyclist entitled to ride on the road?",
        choices: [
          "In a traffic lane, as far right as practicable unless turning or overtaking",
          "On the sidewalk at all times",
          "Only in a marked bicycle lane",
          "On the left, facing traffic",
        ],
        correctIndex: 0,
        explanation:
          "A cyclist may take a traffic lane, keeping as far right as practicable except when preparing to turn or overtaking another vehicle.",
        context:
          "Cyclists obey the same signs and signals as drivers and must give a hand signal, though only once, and not at all where safe operation needs both hands on the bars. Drivers must yield to a cyclist on a bike path or in a bike lane, and causing even a minor collision with a cyclist can bring a reckless driving charge.",
        trap: "As far right as practicable is not the same as in the gutter. Debris, parked cars and door zones make the practicable position further out.",
        excerptKey: "bike-as-far-right",
        sourceLabel: "Nevada Driver's Handbook - Bicycles",
        sourceUrl: hb(65),
      },
      {
        id: "nv_s6_10",
        topic: "licensing",
        question:
          "How long is a first Nevada driver license issued to someone under 65 normally valid?",
        choices: ["Four years", "Five years", "Eight years", "Ten years"],
        correctIndex: 2,
        explanation:
          "Eight years, expiring on your birthday. Drivers aged 65 and over renew every four years instead.",
        context:
          "Limited-term immigration documents shorten it: the expiry then follows the departure date verified by Homeland Security, or one year where no date is given. No Nevada license or identification card is ever valid for more than eight years. Identification cards themselves run eight years.",
        trap: "The four-year figure belongs to drivers 65 and over and to the driver authorization card, not to a first license.",
        excerptKey: "lic-eight-years",
        sourceLabel: "Nevada Driver's Handbook - Getting Your Nevada Driver's License",
        sourceUrl: hb(6),
      },
      {
        id: "nv_s6_11",
        topic: "emergencies",
        question:
          "A car is coming toward you in your lane on a two-lane road. What does the handbook tell you to do?",
        choices: [
          "Swing into the lane the other driver has left",
          "Slow down, sound the horn, flash your headlights and pull as far right as you safely can",
          "Brake hard and stop in your lane",
          "Accelerate past on the left before they reach you",
        ],
        correctIndex: 1,
        explanation:
          "Slow, horn, headlights, and get right. The one move the handbook rules out is swerving into the lane they have vacated.",
        context:
          "The reason is what usually happens next: the other driver realizes the mistake and turns back into the proper lane, which is the lane you have just moved into. Staying right keeps you out of the path of that correction.",
        trap: "Moving into the empty lane feels like the obvious escape. It is the one place the returning driver is heading.",
        excerptKey: "oncoming-in-lane",
        sourceLabel: "Nevada Driver's Handbook - Driving Emergencies",
        sourceUrl: hb(58),
      },
      {
        id: "nv_s6_12",
        topic: "rules",
        question: "May you use a fire station driveway to turn your vehicle around?",
        choices: [
          "Yes, if no appliance is moving",
          "Yes, outside operational hours",
          "Yes, provided you do not stop",
          "No - never make a U-turn in front of a fire station or use its driveway to turn",
        ],
        correctIndex: 3,
        explanation:
          "The handbook states both halves: never make a U-turn in front of a fire station, and never use a fire station driveway to turn your vehicle around.",
        context:
          "The related parking rule sets the distances: no parking within 20 feet of a fire station driveway entrance, and within 75 feet of it on the opposite side of the highway. The U-turn ban also covers railroad crossings, one-way streets, business districts, divided highways except through a provided opening, and anywhere visibility falls below 200 feet.",
        trap: "A quiet station looks like an empty driveway. The rule does not turn on whether anything is moving.",
        excerptKey: "uturn-fire-station",
        sourceLabel: "Nevada Driver's Handbook - U-Turns",
        sourceUrl: hb(46),
      },
      {
        id: "nv_s6_13",
        topic: "signs",
        question: "What should you do the moment you see orange signs ahead?",
        choices: [
          "Slow down and watch for equipment and people working on the road",
          "Change lanes immediately",
          "Maintain speed until you see a worker",
          "Stop and wait for a flagger",
        ],
        correctIndex: 0,
        explanation:
          "Orange means people are working on the road. You slow down and start looking for equipment and workers, rather than waiting until you can see one.",
        context:
          "Work zones narrow lanes, roughen the surface and sometimes stop traffic outright, so the vehicles ahead of you may be halted. Flaggers and pilot cars may be controlling the flow, and their direction is binding. Speeding fines double, and moving a barrier onto a closed road is an offense in its own right.",
        trap: "Waiting to see a worker before slowing is exactly backwards, and Nevada's doubled fines do not wait either.",
        excerptKey: "workzone-orange",
        sourceLabel: "Nevada Driver's Handbook - Highway Work Zones",
        sourceUrl: hb(60),
      },
      {
        id: "nv_s6_14",
        topic: "signals",
        question:
          "A sign at a red light reads NO TURN ON RED. You stop fully and the road is clear. May you turn right?",
        choices: [
          "Yes, because the stop satisfies the requirement",
          "Yes, if no pedestrians are present",
          "No - a sign prohibiting the turn overrides the general permission",
          "Yes, between 10 p.m. and 5 a.m.",
        ],
        correctIndex: 2,
        explanation:
          "Right on red is Nevada's default, and it applies only where it is not prohibited by signs. A sign forbidding the turn ends the permission whatever the traffic is doing.",
        context:
          "The same override applies to the left-on-red permission from one street to another one-way street, and to any movement a police officer or an arrow signal directs otherwise. Having stopped, you also still have to signal and yield to pedestrians and to all traffic moving on the signal.",
        trap: "The complete stop is a condition of the default permission, not a way of buying past a sign that removes it.",
        excerptKey: "signal-right-on-red",
        sourceLabel: "Nevada Driver's Handbook - Signals",
        sourceUrl: hb(30),
      },
      {
        id: "nv_s6_15",
        topic: "speed",
        question:
          "It is 8:10 a.m. on a Tuesday and school starts at 8:30. Is the school-zone limit in force?",
        choices: [
          "No, it starts when the bell rings",
          "Yes - it runs from a half hour before school begins",
          "Only if children are visible",
          "Only if a beacon is flashing",
        ],
        correctIndex: 1,
        explanation:
          "The window opens a half hour before school begins and closes a half hour after it ends, on school days, unless the signs say otherwise.",
        context:
          "Where a zone uses a flashing beacon instead, the beacon governs and the ordinary limit returns when it is dark. Nevada's school-zone limits are 15 or 25 mph depending on the sign, U-turns are banned while the zone is in effect, and ignoring a crossing guard's direction is a misdemeanor.",
        trap: "Twenty minutes before the bell is inside the window, and an empty sidewalk is not a defense.",
        excerptKey: "school-zone-speed",
        sourceLabel: "Nevada Driver's Handbook - School Areas",
        sourceUrl: hb(33),
      },
      {
        id: "nv_s6_16",
        topic: "parking",
        question: "You are parking uphill against a curb. Which way do the front wheels go?",
        choices: [
          "Toward the curb",
          "Straight ahead",
          "Toward the center of the road",
          "Away from the curb",
        ],
        correctIndex: 3,
        explanation:
          "Uphill with a curb, the wheels turn away from it. A car that starts rolling back then catches its rear tire on the curb instead of running into the road.",
        context:
          "Uphill with no curb is the opposite: turn the wheels toward the shoulder so a runaway leaves the roadway. Downhill, turn into the curb or the shoulder. In all three cases the parking brake goes on, and the handbook is explicit that the aim is to send the vehicle away from traffic.",
        trap: "Uphill and downhill take opposite answers, and the presence of a curb flips the uphill case again.",
        excerptKey: "hill-uphill",
        sourceLabel: "Nevada Driver's Handbook - Parking on a Hill",
        sourceUrl: hb(49),
      },
      {
        id: "nv_s6_17",
        topic: "safety",
        question: "What does the Nevada handbook say about sunglasses at night?",
        choices: [
          "Never wear them when driving at night",
          "Wear tinted lenses to reduce oncoming glare",
          "Wear them only on unlit rural roads",
          "Yellow lenses are recommended for night driving",
        ],
        correctIndex: 0,
        explanation:
          "Never. Anything that cuts the light reaching your eyes makes an already harder task worse.",
        context:
          "The rest of the night-driving list: make sure you can stop within the range of your headlights, keep the speed inside the posted limit, look down and to the right rather than into oncoming headlights, use the edge line or center line as a guide, keep the windshield clean inside and out, and expect pedestrians to be hard to see.",
        trap: "Glare from oncoming headlights makes tinted lenses feel like the answer. The handbook rules them out for exactly the conditions people reach for them in.",
        excerptKey: "night-no-sunglasses",
        sourceLabel: "Nevada Driver's Handbook - Night Driving",
        sourceUrl: hb(56),
      },
      {
        id: "nv_s6_18",
        topic: "impairment",
        question: "What fine range does a first Nevada DUI conviction carry?",
        choices: [
          "$100 to $500",
          "$250 to $750",
          "$400 to $1,000",
          "$2,000 to $5,000",
        ],
        correctIndex: 2,
        explanation:
          "Four hundred to one thousand dollars, plus the tuition for DUI school - about $150 - and either two days to six months in jail or 48 to 96 hours of community service.",
        context:
          "The license is revoked for a minimum of 185 days, which may include time already served administratively at the judge's discretion. A second offense within seven years raises the fine to $750 to $1,000, and a third within seven years to $2,000 to $5,000 with one to six years in prison.",
        trap: "The $2,000 to $5,000 band belongs to a third offense and to a DUI causing death or serious injury, not to a first.",
        excerptKey: "dui-first-penalty",
        sourceLabel: "Nevada Driver's Handbook - Penalties for DUI",
        sourceUrl: hb(80),
      },
      {
        id: "nv_s6_19",
        topic: "sharing",
        question:
          "A school bus driver sees a car pass while the red lights are flashing but no officer is present. What can happen?",
        choices: [
          "Nothing, without a traffic stop",
          "The driver may report it to the school district and the DMV, and the registered owner is sent a warning letter",
          "The bus company issues a civil fine directly",
          "The vehicle's registration is suspended automatically",
        ],
        correctIndex: 1,
        explanation:
          "Nevada lets bus drivers report violations to the school district and the DMV, after which a warning letter goes to the registered owner explaining how serious it is.",
        context:
          "The underlying offense is a misdemeanor. On a third or later offense within two years of the last one, the statute provides a fine of up to $1,000 and a license suspension of up to a year. The requirement itself is a stop at any location for a bus showing a flashing red signal, until the driver turns those lights off.",
        trap: "No police car in the mirror is not the end of it. The bus itself is the reporting mechanism.",
        excerptKey: "schoolbus-report",
        sourceLabel: "Nevada Driver's Handbook - School Buses",
        sourceUrl: hb(64),
      },
      {
        id: "nv_s6_20",
        topic: "licensing",
        question: "How many driver licenses or identification cards may a Nevada resident hold?",
        choices: [
          "Two, if one is from a previous state",
          "One of each, from any two states",
          "As many as have not expired",
          "One, and any card from another jurisdiction must be surrendered",
        ],
        correctIndex: 3,
        explanation:
          "One. A license or identification card from any other jurisdiction, including another state, a US territory or a foreign country, has to be surrendered to get a Nevada one.",
        context:
          "The surrendered card is voided and handed back to you. Applying for a Nevada identification card also automatically surrenders any driving privilege you hold in Nevada or another state. Records are checked through the national Problem Driver Pointer System, so an unresolved suspension elsewhere blocks a Nevada license.",
        trap: "Keeping the old license as a souvenir is not the issue. Holding it as a valid second credential is.",
        excerptKey: "lic-one-license",
        sourceLabel: "Nevada Driver's Handbook - New Nevada Residents",
        sourceUrl: hb(7),
      },
      {
        id: "nv_s6_21",
        topic: "rules",
        question:
          "You are waiting in the intersection to turn left. Which way should the front wheels point?",
        choices: [
          "Straight ahead, until you actually begin the turn",
          "Already turned left, ready to go",
          "Slightly right, to square up the turn",
          "It makes no difference",
        ],
        correctIndex: 0,
        explanation:
          "Keep the wheels straight until you start to complete the turn. If you are hit from behind with the wheels already cranked over, the impact pushes you into oncoming traffic.",
        context:
          "On a two-way road you use the lane just to the right of the center line and complete the turn into the traffic lane nearest you going your intended direction, changing lanes afterwards only when it is safe. Signal 100 feet ahead in town or 300 feet on open highway, and look once more in each direction before you go.",
        trap: "Pre-turning the wheels feels efficient. It converts a rear-end shunt into a head-on collision.",
        excerptKey: "turn-left-wheels",
        sourceLabel: "Nevada Driver's Handbook - Turning",
        sourceUrl: hb(45),
      },
      {
        id: "nv_s6_22",
        topic: "rightOfWay",
        question:
          "The car in the lane beside you slows and stops for no reason you can see. What does Nevada law require of you?",
        choices: [
          "Slow enough to work out why it stopped before you overtake it",
          "Continue past at the same speed",
          "Sound the horn and pass",
          "Change lanes away from it and maintain speed",
        ],
        correctIndex: 0,
        explanation:
          "It is illegal to overtake a vehicle that is slowing or stopped until you have slowed enough to determine why. Nine times in ten the reason is a pedestrian you cannot yet see.",
        context:
          "The rule sits with the rest of the pedestrian duties: yield to anyone crossing in a crosswalk on your half of the road or approaching closely from the other half, remember that a crosswalk exists wherever two streets meet whether painted or not, and wait until a pedestrian you are yielding to has crossed into the far lanes before moving.",
        trap: "A stopped car in the next lane looks like an obstacle to get around. It is usually a screen in front of somebody.",
        excerptKey: "ped-overtake-stopped",
        sourceLabel: "Nevada Driver's Handbook - Pedestrians",
        sourceUrl: hb(66),
      },
      {
        id: "nv_s6_23",
        topic: "emergencies",
        question:
          "You reverse into a parked car in a Las Vegas lot and the owner is nowhere to be found. What must you do?",
        choices: [
          "Nothing, if the damage is minor",
          "Give the owner your name, address, driver license number, registration and insurance details, in person or by leaving a note",
          "Report it to your insurer only",
          "Wait 30 minutes and then leave",
        ],
        correctIndex: 1,
        explanation:
          "Where a crash involves an unattended vehicle or other property, you owe the owner your name, address, driver license number, registration and insurance information - in person if you can, in a note if you cannot.",
        context:
          "If the total damage reaches $750 or more, or anyone was hurt, and no law enforcement officer investigated, you also file a Report of Crash form SR-1 with the DMV within 10 days. Failing to report a crash that needed reporting can suspend your license, your registration or both.",
        trap: "Minor damage is not an exemption. The information duty does not have a dollar threshold; the DMV report is what has one.",
        excerptKey: "crash-unattended",
        sourceLabel: "Nevada Driver's Handbook - What to Do in a Crash",
        sourceUrl: hb(76),
      },
      {
        id: "nv_s6_24",
        topic: "safety",
        question: "What scanning order does the handbook give for entering an intersection?",
        choices: [
          "Right, then left",
          "Left, then right",
          "Straight ahead, then both mirrors",
          "Left, right, and left again just before entering",
        ],
        correctIndex: 3,
        explanation:
          "Left, right, left again. The second look left covers the lane you will cross first, which is where the traffic closest to you comes from.",
        context:
          "It belongs to a set of defensive habits the handbook groups together: look at least 12 seconds ahead in town and 20 to 30 seconds at freeway speeds, keep at least two seconds of following distance, and position yourself between the clusters of traffic rather than inside them.",
        trap: "One sweep in each direction misses the gap between looking left and arriving at the near lane.",
        excerptKey: "intersection-look",
        sourceLabel: "Nevada Driver's Handbook - Defensive Driving Tips",
        sourceUrl: hb(42),
      },
      {
        id: "nv_s6_25",
        topic: "signs",
        question:
          "A gate is down at a railroad crossing but you cannot see or hear a train. What may you do?",
        choices: [
          "Nothing - you may not proceed around a lowered gate even if no train is visible",
          "Drive around it if the crossing is clear",
          "Reverse and take another route only if the wait exceeds five minutes",
          "Proceed once the warning bell stops",
        ],
        correctIndex: 0,
        explanation:
          "A lowered gate is absolute. The handbook says you may not proceed around it even when no train is visible.",
        context:
          "Trains cannot stop in time to miss a car, and their speed is genuinely hard to judge. Where lights are flashing you stop, and may only proceed if no train is visible or it is otherwise safe. Where there is more than one set of tracks, wait until you have a clear view in both directions before starting across.",
        trap: "A quiet crossing invites the assumption the gate is faulty. A second train on a second track is the case this rule is written for.",
        excerptKey: "rr-gate",
        sourceLabel: "Nevada Driver's Handbook - Railroad Crossings",
        sourceUrl: hb(33),
      },
      {
        id: "nv_s6_26",
        topic: "parking",
        question: "Which way should a legally parked Nevada vehicle face?",
        choices: [
          "Either way, provided the wheels are within 18 inches of the curb",
          "Against the flow, so the driver can see approaching traffic",
          "In the direction that normal traffic flows",
          "Whichever way makes leaving easiest",
        ],
        correctIndex: 2,
        explanation:
          "With the flow of traffic. Parking against it means you drove on the wrong side of the road to get there and will do it again to leave.",
        context:
          "The rest of the checklist: wheels within 18 inches of the curb front and rear, visible for 200 feet in each direction, engine off, parking brake set, and a look for bicycles before you open the door. On a road with no curb or barrier and no signs, park parallel to the road.",
        trap: "On a quiet street facing the wrong way seems harmless. It is still a parking violation, and the 18-inch rule does not cure it.",
        excerptKey: "park-direction",
        sourceLabel: "Nevada Driver's Handbook - Parking",
        sourceUrl: hb(48),
      },
      {
        id: "nv_s6_27",
        topic: "impairment",
        question:
          "A driver is convicted of DUI with a 12-year-old in the car. What difference does the passenger make?",
        choices: [
          "None - the penalty depends only on the alcohol level",
          "The court treats it as an aggravating factor in sentencing",
          "It converts the offense to a felony automatically",
          "It doubles the fine by statute",
        ],
        correctIndex: 1,
        explanation:
          "Having passengers under 15 in the vehicle is an aggravating factor the court considers when it sentences. It is not an automatic uplift, but it moves the sentence within the range.",
        context:
          "Other consequences ride along with a DUI conviction: an additional $60 fine to cover the cost of the chemical analysis, DUI school at roughly $150, an SR-22 filing, a reinstatement fee of $120 for an alcohol or controlled substance offense plus a $35 victim's fee, and seven years of the conviction sitting on the driving record.",
        trap: "Aggravating factor is not the same as a separate charge. It changes the sentence rather than the offense.",
        excerptKey: "dui-child-15",
        sourceLabel: "Nevada Driver's Handbook - Other DUI Laws",
        sourceUrl: hb(81),
      },
      {
        id: "nv_s6_28",
        topic: "rules",
        question: "What signal does the Nevada handbook ask for in a roundabout?",
        choices: [
          "A left signal on entry",
          "No signal at all, since the direction is fixed",
          "A right signal on entry",
          "A right signal when exiting",
        ],
        correctIndex: 3,
        explanation:
          "Signal right as you leave. It tells the drivers waiting at the next entry that the gap they are looking at is real.",
        context:
          "The rest of the sequence: choose your lane on approach as you would at any intersection, yield to traffic already circulating, wait for a gap, and match the speed of the traffic inside. The left lane serves left turns, U-turns and straight ahead; the right lane serves right turns and straight ahead. Cars stay off the raised truck apron.",
        trap: "Signaling on entry tells the wrong drivers the wrong thing. The useful signal is the one that announces your exit.",
        excerptKey: "roundabout-signal",
        sourceLabel: "Nevada Driver's Handbook - Roundabouts",
        sourceUrl: hb(44),
      },
      {
        id: "nv_s6_29",
        topic: "sharing",
        question: "Where are a large truck's blind spots, in the handbook's terms?",
        choices: [
          "On both sides, directly behind, and directly in front - the no-zones",
          "Only on the right side",
          "Only directly behind the trailer",
          "Trucks have no significant blind spots because of their mirrors",
        ],
        correctIndex: 0,
        explanation:
          "The no-zones are the side, rear and front areas where a car disappears from the truck driver's view. All of them are much larger than a car's blind spots.",
        context:
          "The right side is the worst of them, because trucks and buses swing wide to make right turns. Behind the trailer you can see nothing yourself, and the driver cannot see you. In front, cutting in and slowing forces a vehicle that needs nearly twice a car's stopping distance onto its brakes.",
        trap: "Big mirrors suggest a better view. They exist because the driver cannot see over or around the load at all.",
        excerptKey: "nozone",
        sourceLabel: "Nevada Driver's Handbook - Commercial Vehicles",
        sourceUrl: hb(62),
      },
      {
        id: "nv_s6_30",
        topic: "licensing",
        question: "What can a Nevada traffic safety course do for your demerit points?",
        choices: [
          "Remove all points from the record",
          "Remove points and the underlying convictions",
          "Remove up to three points, once in any 12-month period",
          "Remove three points every six months",
        ],
        correctIndex: 2,
        explanation:
          "A maximum of three points, and only once in any 12-month period. The convictions themselves stay on your driving history.",
        context:
          "The option exists only while you have accumulated between three and 11 points. At 12 or more in a 12-month period the license is suspended. Major offenses such as DUI or causing substantial bodily harm carry no points at all - they revoke the license outright.",
        trap: "Traffic school is a way to stay under twelve, not a way to come back from it.",
        excerptKey: "points-traffic-school",
        sourceLabel: "Nevada Driver's Handbook - Demerit Point System",
        sourceUrl: hb(77),
      },
    ],
  },
];
