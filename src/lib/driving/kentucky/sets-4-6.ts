import type { DrivingTestSet } from "../types";

// Sets 4 to 6, sourced exactly as sets 1 to 3 are: the Kentucky Driver Manual
// dated 10-11-2023, the edition drive.ky.gov links as "Study the Driver Manual",
// plus KRS chapters 186, 189 and 189A for the numbers the manual leaves out, and
// the drive.ky.gov graduated-licensing pages for procedure.
//
// Set 4 walks the parts of the manual people skip. Kentucky learners are
// routinely told online to read pages 7 to 35 and 46 to 60 and ignore the rest,
// which throws away the whole licensing section, the vehicle-inspection numbers,
// the child restraint law, the trailer and rural-road material and the emergency
// chapter. The manual's own instruction is the opposite: review it in its
// entirety. Set 4 is built out of what that shortcut discards.
//
// Set 5 is the trap set, and it is built on what Kentucky learners report
// getting wrong rather than on what looks hard. The recurring ones: the two
// headlight-dimming distances, the "No Zone" around a truck, the ignition
// interlock threshold, the fatigue question whose tempting answer is the radio
// and the window, sign identification with the words stripped off, and the
// numbers a generic practice app teaches that are not Kentucky's - three seconds
// of following distance, a 20-foot school bus stop, a 100-foot signal that is
// really the law and not just advice.
//
// Set 6 runs 30 questions with no scaffolding beyond the standard fields, in the
// mix the real Kentucky State Police written test uses: rules of the road and
// right of way heaviest, signs and signals next, then speed, sharing the road,
// impairment, licensing and emergencies.
const HB =
  "https://wp.kentuckystatepolice.ky.gov/wp-content/uploads/2023/11/Kentucky-Driver-Manual-10-11-2023.pdf";
const GDLP = "https://drive.ky.gov/Drivers/Pages/GDLP.aspx";
const krs = (id: string) => `https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=${id}`;

export const kentuckySets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Everything the skim-reader skips: the licensing deadlines, the equipment the inspection checks, child restraints, work zones, trailers, rural roads and the emergency chapter. All of it is testable and most of it is a number.",
    questions: [
      {
        id: "ky_s4_01",
        topic: "licensing",
        question:
          "You move to Kentucky from another state and you already hold a valid license from there. How long do you have to get a Kentucky license?",
        choices: ["10 days", "15 days", "30 days from establishing residence", "60 days"],
        correctIndex: 2,
        explanation:
          "The manual gives new residents 30 days from the day they establish residence. The clock starts when you become a resident, not when your old license expires.",
        context:
          "Kentucky sets several separate deadlines that learners tend to blur together. New residents have 30 days to convert a license, a vehicle bought or brought into the state must be registered within 15 days, and a change of name or address means a duplicate license within 10 days. Three different numbers for three different events.",
        trap:
          "The 15-day figure is real, but it belongs to vehicle registration. Mixing the two is the usual mistake.",
        excerptKey: "transfer-30-days",
        sourceLabel: "Kentucky Driver Manual - Section One: Out-of-State License",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_02",
        topic: "licensing",
        question: "You move house within Kentucky. What does the manual require you to do?",
        choices: [
          "Obtain a duplicate license within 10 days",
          "Obtain a duplicate license within 30 days",
          "Report it at your next renewal",
          "Nothing, provided your mail is forwarded",
        ],
        correctIndex: 0,
        explanation:
          "A change of address or name means a duplicate license within 10 days. The state has to be able to reach you, and the address on the license is how it does that.",
        context:
          "This sits with the other administrative duties the manual attaches to a license: carry it whenever you drive, produce it on a peace officer's demand under KRS 186.510, and keep written proof of liability insurance in the vehicle. None of them are optional and all of them are cheap to comply with.",
        trap:
          "Waiting for renewal is the intuitive answer and the wrong one. Renewal cycles run years; the deadline is 10 days.",
        excerptKey: "address-change-10",
        sourceLabel: "Kentucky Driver Manual - Section One: Change of Address or Name",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_03",
        topic: "safety",
        question:
          "Kentucky's child restraint law requires a child safety seat for any child up to what height?",
        choices: [
          "40 inches or less",
          "48 inches or less",
          "57 inches or less",
          "Up to age 4 regardless of height",
        ],
        correctIndex: 0,
        explanation:
          "Kentucky writes the child restraint rule in inches rather than years. A child 40 inches tall or less must be in a child restraint system meeting the federal safety standards.",
        context:
          "Above 40 inches the law switches to a booster seat: a child under eight years old who is between 40 and 57 inches must be in a booster. A child taller than 57 inches is not required to use one at any age. Separately, the manual asks that children 12 and under ride in the back seat, and that a rear-facing seat never go in front of an active passenger air bag.",
        trap:
          "57 inches is a real Kentucky number, but it is the ceiling on the booster rule, not the child seat rule.",
        excerptKey: "child-restraint-40",
        sourceLabel: "Kentucky Driver Manual - Section Four: Child Passenger Safety Laws",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_04",
        topic: "safety",
        question:
          "A seven-year-old passenger is 45 inches tall. What does Kentucky law require for that child?",
        choices: [
          "A child booster seat",
          "A rear-facing child safety seat",
          "Nothing beyond an adult safety belt",
          "A forward-facing child safety seat",
        ],
        correctIndex: 0,
        explanation:
          "Under eight years old and between 40 and 57 inches puts this child squarely in the booster seat rule. Both conditions are met, so a booster is required.",
        context:
          "The three Kentucky tiers are height-driven: a child restraint system at 40 inches or less, a booster from 40 to 57 inches while under age eight, and no booster requirement above 57 inches. A violation of the child restraint law carries a $50 fine plus a $10 fee.",
        trap:
          "Age alone does not settle it and height alone does not settle it. The booster rule needs both, which is why people answer it from whichever half they remember.",
        excerptKey: "booster-seat",
        sourceLabel: "Kentucky Driver Manual - Section Four: Child Passenger Safety Laws",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_05",
        topic: "signs",
        question: "What do orange signs on a Kentucky road mean?",
        choices: [
          "A route marker for a scenic byway",
          "A school zone ahead",
          "A regulatory rule that carries a fine",
          "A work zone, so expect workers, equipment or a changed traffic pattern",
        ],
        correctIndex: 3,
        explanation:
          "Orange with black letters or symbols is the work zone family, generally diamond or rectangular. It warns of construction or maintenance ahead, not of a permanent condition.",
        context:
          "Kentucky teaches signs by color as much as by shape. Yellow diamonds are general warnings, fluorescent yellow-green is reserved for school zones, school crossings and pedestrian crossings, orange is work zones, green, brown and blue rectangles are guide signs, and white rectangles with black, red or green lettering are regulatory.",
        trap:
          "School zone signs are the fluorescent yellow-green ones. Orange is temporary work, which is why the sign disappears when the job is finished.",
        excerptKey: "workzone-signs",
        sourceLabel: "Kentucky Driver Manual - Section Six: Work Zone Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_06",
        topic: "rules",
        question:
          "Under what conditions does Kentucky double the fine for speeding in a highway work zone?",
        choices: [
          "When signs announce the work zone and the doubled fines, and at least one genuine worker is present",
          "Any time you pass an orange sign",
          "Only between 7 a.m. and 7 p.m. on weekdays",
          "Only if the speed limit has been lowered by 10 mph or more",
        ],
        correctIndex: 0,
        explanation:
          "The doubling is conditional. Signs must tell drivers that a work zone exists and that fines are doubled in it, and at least one bona fide worker must be present.",
        context:
          "The manual is blunt that you slow down in a work zone whether or not anyone is working, because narrowed lanes and rough pavement are hazardous on their own. The doubled fine is a separate matter with its own trigger. KRS 189.960 adds two more duties: yield to any worker or public safety vehicle in the zone, and stay in the lane designated for traffic.",
        trap:
          "An orange sign by itself does not double anything. An empty work zone at midnight is still a work zone you must slow for, just not a doubled fine.",
        excerptKey: "workzone-double-conditions",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Work Zones",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s4_07",
        topic: "emergencies",
        question:
          "Your car breaks down on a rural highway and you set out emergency flares. Where does the manual want them?",
        choices: [
          "About 50 feet behind the vehicle",
          "About 200 to 300 feet behind the vehicle",
          "Directly beside the vehicle on both sides",
          "In front of the vehicle, facing oncoming traffic",
        ],
        correctIndex: 1,
        explanation:
          "Flares go 200 to 300 feet behind the car. That distance is what gives an approaching driver time to see the warning and change lanes before reaching you.",
        context:
          "The full breakdown drill is get the vehicle off the roadway if you can, switch on the emergency flashers, lift the hood to signal that you need help, and set flares well back. The manual also says not to stop just over a hill or just around a curve, because a driver who cannot see you until the last second cannot avoid you.",
        trap:
          "Flares placed at the bumper only light up a crash that is already happening. The whole point of the distance is warning time.",
        excerptKey: "breakdown-flares",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Vehicle Breakdown",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_08",
        topic: "emergencies",
        question:
          "You have a collision with $900 of property damage and no police officer investigates. What does Kentucky require?",
        choices: [
          "File a written report with the Kentucky State Police within 10 days",
          "Nothing, since no one was injured",
          "Notify your insurer only",
          "File a report with the county clerk within 30 days",
        ],
        correctIndex: 0,
        explanation:
          "Property damage above $500 with no officer investigation triggers a written report to the Kentucky State Police within ten days of the collision. Your insurance claim is separate and does not satisfy it.",
        context:
          "Kentucky's collision duties stack. You must stop immediately, find out the extent of injury or damage and render reasonable assistance. In a non-injury crash you move the damaged vehicles to the shoulder. If you hit a parked car and cannot find the owner, you leave a note where it can be seen. The 10-day KSP report is what covers the case nobody officially recorded.",
        trap:
          "\"No injuries, so no report\" is the common reading. The threshold here is the dollar figure and whether an officer investigated, not whether anyone was hurt.",
        excerptKey: "collision-report-500",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Collisions",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s4_09",
        topic: "sharing",
        question: "Where may an all-terrain vehicle be operated in Kentucky?",
        choices: [
          "On any road posted at 35 mph or less",
          "On a public highway during daylight only",
          "On the shoulder of any two-lane highway",
          "Not on a public highway or roadway, or on its right-of-way, at all",
        ],
        correctIndex: 3,
        explanation:
          "The manual states the rule as a flat prohibition: an ATV may not be operated on any public highway or roadway, or on the right-of-way of one.",
        context:
          "There is a narrow exception for crossing. Where crossing is permitted, the operator crosses at as close to a 90 degree angle as is practical and safe, and may not travel along the highway for more than two-tenths of a mile. That is a crossing allowance, not a license to use the road.",
        trap:
          "A low speed limit changes nothing. The prohibition is about the class of vehicle, not the class of road.",
        excerptKey: "atv-no-highway",
        sourceLabel: "Kentucky Driver Manual - Section Ten: All-Terrain Vehicles",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_10",
        topic: "licensing",
        question:
          "What is the minimum age to operate an electric low-speed scooter on a Kentucky highway, bicycle lane or bicycle path?",
        choices: ["14", "15", "16", "18"],
        correctIndex: 2,
        explanation:
          "Sixteen is the floor for an electric low-speed scooter on a highway, bike lane or bike path in Kentucky.",
        context:
          "An electric low-speed scooter is defined by design speed: a maximum of 20 mph on a paved level surface, whatever the type of propulsion. That definition matters because it is what separates a scooter from a moped or a motorcycle, and the rules for those are different again.",
        trap:
          "There is no lower scooter age for riding on a bike path. The same 16 covers highway, bike lane and bike path alike.",
        excerptKey: "scooter-16",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Electric Low-Speed Scooter",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_11",
        topic: "parking",
        question:
          "You park facing downhill on a Kentucky street with a curb. Which way do the front wheels go?",
        choices: [
          "Straight ahead, with the parking brake set",
          "Turned away from the curb",
          "It does not matter with an automatic transmission in park",
          "Turned toward the curb, so the car would roll into it",
        ],
        correctIndex: 3,
        explanation:
          "The manual states the principle rather than a table: turn the wheels so the vehicle will touch the curb if it starts moving. Facing downhill, that means turning them toward the curb.",
        context:
          "The same principle answers every hill question. Where there is no curb, you turn the wheels so a rolling vehicle would go off the road rather than into traffic. The manual also requires you to turn off the engine and remove the key whenever you leave the vehicle, and it is safest to get out on the curb side.",
        trap:
          "\"Park does the job\" is the answer people give. A transmission can fail, and the curb is the backstop the law expects you to set up.",
        excerptKey: "parking-hill",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Parking on a Hill",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_12",
        topic: "parking",
        question: "What does Kentucky law require every time you leave your vehicle?",
        choices: [
          "That you set the parking brake",
          "That you lock the doors",
          "That you leave the wheels straight",
          "That you turn off the engine and remove the key",
        ],
        correctIndex: 3,
        explanation:
          "The manual puts this one in the law column: turn off the engine and remove the key when you leave a vehicle. It is not a suggestion attached to good practice.",
        context:
          "The manual's parking section pairs the legal duty with practical ones - park as far from the flow of traffic as possible, get as close to the curb as you can, and step out on the curb side unless you have checked traffic on the street side first. Where you may not park at all is set by KRS 189.450(5) rather than the manual.",
        trap:
          "Setting the brake and leaving the engine running for the air conditioning is exactly the situation the rule is written against.",
        excerptKey: "parking-key",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Parallel Parking",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_13",
        topic: "signals",
        question:
          "A green arrow appears for your lane at a Kentucky intersection. What does it mean?",
        choices: [
          "You may go in the direction of the arrow if you are in the proper lane",
          "You may go in that direction only after yielding to oncoming traffic",
          "You may go in any direction because the intersection is clear",
          "You may go straight but not turn",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow gives you the movement it points at, provided you are in the lane that arrow serves. Being in the correct lane is part of the rule, not an afterthought.",
        context:
          "Kentucky's arrows form a set. A green arrow is a protected movement in that direction. A flashing yellow arrow means proceed with caution in that direction, so you may go but you yield first. A red arrow means no turn that way until it turns green. And where several signals hang over an intersection, obey the one over your lane.",
        trap:
          "A flashing yellow arrow is the one that requires yielding. Confusing the two costs a learner the same question in both directions.",
        excerptKey: "green-arrow",
        sourceLabel: "Kentucky Driver Manual - Section Six: Lighted Arrows",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_14",
        topic: "signals",
        question: "You face a steady red arrow pointing left. What may you do?",
        choices: [
          "Turn left after stopping, if the way is clear",
          "Turn left if there is a green ball beside the arrow",
          "Treat it as a yield and turn when there is a gap",
          "Wait - no turn in that direction until the arrow turns green",
        ],
        correctIndex: 3,
        explanation:
          "A red arrow means no turning in the direction of the arrow until it turns green. It is not a red light with a turn-after-stopping allowance attached.",
        context:
          "Kentucky's one carve-out from a steady red is a right turn after a complete stop, plus a left from a one-way street into the nearest lane of another one-way street. A red arrow removes even that for the movement it points at, which is exactly why intersections use arrows where a turn is genuinely dangerous.",
        trap:
          "Applying the right-on-red habit to an arrow is the mistake. The arrow is the whole point: it is the signal that says the general permission does not apply here.",
        excerptKey: "red-arrow",
        sourceLabel: "Kentucky Driver Manual - Section Six: Lighted Arrows",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_15",
        topic: "rightOfWay",
        question:
          "A funeral procession is passing through an intersection ahead of you. What does Kentucky require?",
        choices: [
          "Do not drive between the vehicles in the procession unless a police or safety officer directs you to",
          "Enter any gap larger than two car lengths",
          "Follow the last vehicle closely so the procession stays together",
          "Wait only if the procession has a police escort",
        ],
        correctIndex: 0,
        explanation:
          "You may not drive between the vehicles of a funeral procession unless a police or safety officer authorizes it. The procession is treated as one unit crossing the intersection.",
        context:
          "A funeral procession led by an escort vehicle showing flashing yellow, red or blue lights has the right of way at an intersection and may continue through it. Cutting into one is not a courtesy failure but an offense, carrying up to a $250 fine or 90 days in jail.",
        trap:
          "A gap in the line is not an invitation. Processions leave gaps constantly and the rule does not bend for them.",
        excerptKey: "funeral-no-cut",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Funeral Processions",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_16",
        topic: "rightOfWay",
        question:
          "You reach a one-lane bridge on a rural Kentucky road at the same time as a car coming the other way, and the other driver arrived slightly ahead of you. Who crosses first?",
        choices: [
          "The heavier vehicle",
          "The vehicle travelling uphill",
          "Whoever flashes their headlights first",
          "The other driver, because the first to reach the bridge generally has right of way",
        ],
        correctIndex: 3,
        explanation:
          "The manual's rule for a narrow bridge is to take turns, and generally the first driver to the bridge has the right of way. Arrival order settles it.",
        context:
          "Rural roads carry a set of hazards the manual handles separately: gravel and dirt reduce traction, open gratings and steel bridge decks reduce it further, and uncontrolled rural intersections need you to slow down and be ready to stop for anyone crossing. None of these come with a sign telling you what to do.",
        trap:
          "Size and gradient are volunteered as tie-breakers all the time and neither appears in the Kentucky rule.",
        excerptKey: "narrow-bridge",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Rural Road Driving",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_17",
        topic: "speed",
        question:
          "There is no posted sign on a Kentucky interstate. What is the speed limit?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Sixty-five is the default on interstate highways and parkways when nothing is posted. The manual and KRS 189.390(3) agree on it.",
        context:
          "Kentucky's unposted ladder runs 65 on interstates and parkways, 55 on all other state highways, and 35 in a business or residential district. Off-street parking facilities open to the public carry 15. The secretary of transportation may raise a specific highway to 70, which is why you see that number posted in places.",
        trap:
          "The 70 mph figure exists, but only where it has been raised and posted. Unposted means 65.",
        excerptKey: "speed-65",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Kentucky Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_18",
        topic: "speed",
        question:
          "What speed limit applies in an off-street parking facility offered for public use in Kentucky, such as a shopping center lot?",
        choices: [
          "10 mph",
          "15 mph",
          "25 mph",
          "There is no legal limit on private property",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen miles per hour is a real statutory limit in an off-street parking facility offered for public use, whether the lot is publicly or privately owned.",
        context:
          "This one sits in the manual's speed ladder alongside the 65, 55 and 35 defaults, and it surprises people because a parking lot feels like private ground. Ownership is not the test - public use is. Underneath every posted number sits the basic speed rule: never faster than is reasonable and prudent for the traffic and the condition of the road.",
        trap:
          "\"Private property, so no limit\" is the common answer and the statute says otherwise in terms.",
        excerptKey: "speed-15-lot",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Kentucky Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_19",
        topic: "impairment",
        question: "What is Kentucky's implied consent law?",
        choices: [
          "It lets an officer search your vehicle without a warrant after a crash",
          "By driving, you have already consented to a lawfully requested test of your blood, breath or urine",
          "It allows a blood test only after a conviction",
          "It means a passenger consents to a test if the driver refuses",
        ],
        correctIndex: 1,
        explanation:
          "Operating a vehicle in Kentucky carries an implied agreement to a lawfully requested test of blood, breath, urine, or a combination. The consent is given by the act of driving.",
        context:
          "Refusal is not a clean escape. A refusal may be used against you in court as evidence of a DUI violation. Before deciding, you are entitled to an opportunity of at least ten minutes but not more than fifteen to try to contact and speak with an attorney.",
        trap:
          "Implied consent covers chemical testing, not searches of the car. That substitution is the usual wrong answer.",
        excerptKey: "implied-consent",
        sourceLabel: "Kentucky Driver Manual - Section Three: Alcohol and the Law",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_20",
        topic: "impairment",
        question:
          "You are asked to take a breath test in Kentucky and want to speak to a lawyer first. What does the law allow?",
        choices: [
          "No contact until testing is complete",
          "As long as it takes to reach one",
          "One phone call of any length",
          "At least 10 minutes but not more than 15 to attempt to contact and communicate with an attorney",
        ],
        correctIndex: 3,
        explanation:
          "The window is bounded at both ends: a minimum of ten minutes to try, and a maximum of fifteen. It is an opportunity to attempt contact, not a guarantee of reaching anyone.",
        context:
          "This sits inside the implied consent scheme. You have consented to testing by driving; refusing can be used against you as evidence at trial; and the statute gives you this short window first. A first alcohol conviction within ten years brings a fine of $200 to $500 plus costs, 48 hours to 30 days in jail, and a four to six month suspension.",
        trap:
          "\"As long as it takes\" reads as fair and is not the rule. The upper bound is there so testing is not delayed while the reading falls.",
        excerptKey: "attorney-10-15",
        sourceLabel: "Kentucky Driver Manual - Section Three: Alcohol and the Law",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_21",
        topic: "rules",
        question:
          "You are on a Kentucky highway with three lanes running your way. Which lane does the manual intend for through traffic?",
        choices: [
          "The middle lane or lanes",
          "The left lane, because it is fastest",
          "The right lane at all times",
          "Whichever lane is emptiest",
        ],
        correctIndex: 0,
        explanation:
          "With three or more lanes in one direction, the middle lane or lanes are for through traffic. The left is for passing and left turns, and the right handles slower traffic and vehicles entering or leaving.",
        context:
          "Kentucky backs this with a prohibition rather than advice: remaining in the left lane on a limited access highway is illegal. The left lane is a tool for a maneuver, and once the maneuver is done you move back. KRS 189.340(7)(a) adds that you drive as nearly as practical entirely within a single lane and do not leave it until you have made sure the move is safe.",
        trap:
          "Sitting in the left lane at the limit feels lawful because you are not speeding. Speed is not what the rule is about.",
        excerptKey: "lane-use-three",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Use of Lanes",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_22",
        topic: "rules",
        question:
          "You have finished passing on a Kentucky limited access highway and there is no one ahead of you. What does the manual say about staying in the left lane?",
        choices: [
          "It is allowed as long as you hold the speed limit",
          "It is allowed if you are exiting on the left within 5 miles",
          "It is discouraged but lawful",
          "It is illegal",
        ],
        correctIndex: 3,
        explanation:
          "The manual states it flatly: remaining in the left lane on a limited access highway is illegal. Passing or turning left is what the lane is for.",
        context:
          "That instruction pairs with the lane-assignment rule - middle lanes for through traffic, right lane for slower traffic and for vehicles entering and leaving - and with the duty of a driver about to be overtaken to give way to the right in favour of the overtaking vehicle.",
        trap:
          "Holding the posted limit does not create a right to the lane. Two separate rules are in play and only one of them is about speed.",
        excerptKey: "left-lane-illegal",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Use of Lanes",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_23",
        topic: "safety",
        question: "How should cargo be distributed when loading a trailer?",
        choices: [
          "About 60 percent of the weight forward, nearest the towing vehicle, and 40 percent to the rear",
          "Evenly, half and half",
          "About 60 percent to the rear so the hitch stays light",
          "All of it over the axle",
        ],
        correctIndex: 0,
        explanation:
          "Sixty percent forward and forty percent to the rear is the manual's split. Weight biased to the front of the trailer keeps the hitch loaded and the trailer tracking straight.",
        context:
          "A trailer that is loaded tail-heavy is the one that starts to sway. If sway or whip does begin, steer straight and reduce speed gradually - do not brake and never accelerate. If it jackknifes, stop and pull ahead to straighten out before starting again. The maximum recommended speed for most vehicle-trailer combinations is 55 mph.",
        trap:
          "Loading rear-heavy to lighten the hitch is a real habit and it is the cause of exactly the sway the next question is about.",
        excerptKey: "trailer-60-40",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Loading a Trailer",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_24",
        topic: "emergencies",
        question: "Your trailer starts to sway on the highway. What does the manual tell you to do?",
        choices: [
          "Brake firmly to settle it",
          "Speed up to pull it straight",
          "Steer into the sway to counter it",
          "Steer straight and reduce speed gradually, without applying the brakes",
        ],
        correctIndex: 3,
        explanation:
          "Hold the wheel straight and let the speed come down gradually. Braking or accelerating both feed energy into the sway; doing nothing sudden is what stops it.",
        context:
          "Sway usually starts with a load that is too far back or a speed that is too high, which is why the manual pairs the recovery with the 60-40 loading rule and the 55 mph recommendation. A jackknife is a different problem with a different answer: stop, then pull ahead to straighten out.",
        trap:
          "\"Accelerate to pull it straight\" is advice that circulates widely. The manual says never increase speed.",
        excerptKey: "trailer-sway",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Safe Driving With a Trailer",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_25",
        topic: "emergencies",
        question: "Your brakes fail on a Kentucky road. What does the manual tell you to do?",
        choices: [
          "Apply the parking brake slowly, so you do not lock the rear wheels and start a skid",
          "Pull the parking brake as hard and fast as you can",
          "Switch the engine off immediately",
          "Steer into the ditch at once",
        ],
        correctIndex: 0,
        explanation:
          "Use the parking brake, but apply it slowly. A hard pull locks the rear wheels and turns a braking problem into a skid.",
        context:
          "The manual gives you three tools in any emergency - braking, steering and accelerating - and picking the right one is the skill. A stuck accelerator gets a different answer: shift to neutral and look for an escape path. A front tire blowout pulls the car sharply toward the blown tire, so you grip the wheel firmly and keep going straight.",
        trap:
          "Yanking the handle feels decisive and produces a skid at exactly the moment you have no brakes left to correct it.",
        excerptKey: "brake-failure",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Brake Failure",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_26",
        topic: "emergencies",
        question: "Your accelerator sticks open while you are driving. What is the first move?",
        choices: [
          "Shift to neutral and look for an escape path",
          "Turn off the ignition",
          "Pump the accelerator until it releases",
          "Brake hard and hold it",
        ],
        correctIndex: 0,
        explanation:
          "Shifting to neutral cuts the engine off from the wheels while leaving you steering and braking as normal. Then you look for somewhere safe to bring the car to rest.",
        context:
          "The reason neutral beats the ignition key is that switching off can lock the steering and kills the power assistance to the brakes and steering, in a car that is still moving at speed. The manual's emergency chapter is built around keeping control first and stopping second.",
        trap:
          "Turning the key off is the instinctive answer and it takes away the two controls you most need.",
        excerptKey: "stuck-accelerator",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Stuck Accelerator",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_27",
        topic: "signs",
        question: "What does the X-shaped crossbuck sign at a railroad crossing mean in Kentucky?",
        choices: [
          "Stop before crossing in every case",
          "Trains have already passed for the day",
          "It is a warning sign only, with no legal effect",
          "The same as a yield sign",
        ],
        correctIndex: 3,
        explanation:
          "The manual classes the crossbuck as a regulatory sign that means the same as a yield sign. You give way to anything on the tracks and cross only when you have made sure it is clear.",
        context:
          "The crossing family runs together: a round yellow advance warning sign tells you to slow, look and listen and be ready to stop; the crossbuck at the tracks carries the yield duty; and two flashing red lights mean stop and stay stopped until they stop flashing and you have satisfied yourself no train is coming. Crossing after the lights start flashing or the gates come down is an offense.",
        trap:
          "Treating the crossbuck as decoration is one error and treating it as a stop sign is the other. It is a yield.",
        excerptKey: "crossbuck-yield",
        sourceLabel: "Kentucky Driver Manual - Section Six: Flashing Lights",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_28",
        topic: "sharing",
        question:
          "A tanker truck placarded for hazardous materials stops at a railroad crossing where the lights are dark and no train is in sight. Why?",
        choices: [
          "The driver is checking the load",
          "Trucks over a certain weight must stop at all crossings",
          "The crossbuck requires every vehicle to stop",
          "Vehicles carrying hazardous materials must stop at all railroad crossings",
        ],
        correctIndex: 3,
        explanation:
          "Vehicles carrying hazardous materials stop at every railroad crossing regardless of the signals. It is a rule about the cargo, not about the crossing.",
        context:
          "Knowing this matters mainly so you do not rear-end the truck. The manual's large-vehicle material is full of behaviour that looks wrong from behind: the wide left swing before a right turn, the long stopping distance, the blind spots at the sides, front and rear, and the runaway ramps that exist only for trucks that cannot stop.",
        trap:
          "Reading a dark signal as permission for everyone is how the driver behind ends up under the trailer.",
        excerptKey: "hazmat-railroad",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_29",
        topic: "licensing",
        question:
          "You buy a car in Kentucky, or bring one in from another state. How long do you have to apply for registration?",
        choices: ["10 days", "15 days", "30 days", "60 days"],
        correctIndex: 1,
        explanation:
          "Fifteen days to apply for registration, whether the vehicle was bought here or brought in from out of state.",
        context:
          "The vehicle carries its own set of legal duties separate from the driver's. Liability insurance must be maintained and written proof kept in the vehicle. Failure to maintain insurance is a criminal offense and the registration is revoked for it.",
        trap:
          "The 30-day figure belongs to converting an out-of-state driver license. Vehicle and driver run on different clocks.",
        excerptKey: "registration-15-days",
        sourceLabel: "Kentucky Driver Manual - Section Two: Motor Vehicle Registration",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_30",
        topic: "licensing",
        question: "What are Kentucky's minimum liability insurance limits?",
        choices: [
          "$10,000 / $20,000 / $10,000",
          "$15,000 / $30,000 / $15,000",
          "$25,000 per person for bodily injury, $50,000 per accident, and $25,000 for property damage",
          "$50,000 / $100,000 / $50,000",
        ],
        correctIndex: 2,
        explanation:
          "Twenty-five thousand for one person's bodily injury, fifty thousand for everyone's in a single accident, and twenty-five thousand for property damage.",
        context:
          "Proof of that coverage must be in the vehicle in writing - an insurance card, the policy itself, or a written binder from an agent. Driving without it is a criminal offense and the registration is revoked, so the paperwork is not a formality.",
        trap:
          "The lower ladders are other states' minimums. Kentucky's set is 25/50/25.",
        excerptKey: "insurance-minimums",
        sourceLabel: "Kentucky Driver Manual - Section Two: Insurance Law",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_31",
        topic: "safety",
        question:
          "It snowed overnight and you cleared a patch on the windshield big enough to see through. What does the manual require?",
        choices: [
          "Remove snow, ice and frost from all windows before you start to drive",
          "Clear the windshield and the mirrors only",
          "Clear the windshield and let the defroster do the rest as you go",
          "Clear whatever is needed for forward vision",
        ],
        correctIndex: 0,
        explanation:
          "All the windows, before you move. A cleared patch gives you a tunnel of vision and takes away the side and rear checks every lane change depends on.",
        context:
          "The manual's pre-drive vision rules are strict about anything that blocks the glass. Nothing hangs from the rearview mirror and no decals clutter the windshield or rear window; the manual calls these unlawful as well as unsafe.",
        trap:
          "\"It will clear as I drive\" is the reasoning behind most of the winter crashes this rule exists to prevent.",
        excerptKey: "remove-snow",
        sourceLabel: "Kentucky Driver Manual - Section Four: Having Clean Windows and Mirrors",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_32",
        topic: "safety",
        question:
          "What does the Kentucky Driver Manual say about hanging an air freshener or a graduation tassel from the rearview mirror?",
        choices: [
          "It is fine if it is smaller than a hand",
          "It is discouraged but lawful",
          "Do not do it - such items are unlawful and block your vision",
          "It is only a problem at night",
        ],
        correctIndex: 2,
        explanation:
          "The manual says not to hang anything from the rearview mirror and not to clutter the windshield or rear window with decals, and calls them unlawful as well as vision-blocking.",
        context:
          "This belongs to the pre-drive checks: clean glass and mirrors, snow and ice cleared from every window, mirrors adjusted, seat set about ten inches from the wheel, and head restraint positioned. All of it happens before the car moves.",
        trap:
          "Size is not the test. The manual does not carve out small objects, and a swinging object in the field of view is exactly what it is aimed at.",
        excerptKey: "windshield-clutter",
        sourceLabel: "Kentucky Driver Manual - Section Four: Having Clean Windows and Mirrors",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_33",
        topic: "sharing",
        question:
          "You see a gravel runaway ramp on a long downgrade and want somewhere to check your map. What does the manual say?",
        choices: [
          "Use it only in daylight",
          "Use it if you park entirely off the gravel",
          "Use it briefly if no trucks are in sight",
          "Never stop or park anywhere near it",
        ],
        correctIndex: 3,
        explanation:
          "Runaway ramps exist for large vehicles that are out of control or have lost their brakes. Never stop or park in the vicinity of one.",
        context:
          "The truck material in this section is all about giving heavy vehicles the space their physics demand. A loaded truck at 55 mph in ideal conditions needs at least 335 feet to stop, more than one and a half times a car's distance, and its blind spots reach up to 200 feet directly behind it.",
        trap:
          "A ramp that is empty most of the year still has to be empty on the one day it is needed, at the moment a truck arrives at speed.",
        excerptKey: "runaway-ramps",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "ky_s4_34",
        topic: "sharing",
        question:
          "A truck ahead of you signals right but swings wide to the left first. What should you do?",
        choices: [
          "Stay back and leave the space, because the driver needs it to clear the corner",
          "Move up on the right, since the truck has left room there",
          "Pass on the left while the truck is committed",
          "Sound the horn to tell the driver the signal is wrong",
        ],
        correctIndex: 0,
        explanation:
          "A truck or bus turning right often swings wide to the left first so the trailer clears the kerb. The space it opens on the right is the space the vehicle is about to sweep through.",
        context:
          "The mirror test is the general rule for large vehicles: if you cannot see the driver's face in the side mirror, the driver cannot see you. Add the blind spots at the sides, front and rear, and staying out of the No Zone is the whole strategy.",
        trap:
          "The gap on the right looks like an invitation and is the single most common way cars are crushed in a truck's right turn.",
        excerptKey: "truck-wide-right",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Turning",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s4_35",
        topic: "safety",
        question:
          "How far from the steering wheel does the manual want your chest when you set the seat?",
        choices: ["6 inches", "10 inches", "18 inches", "As close as is comfortable"],
        correctIndex: 1,
        explanation:
          "Ten inches between your chest and the steering wheel. That is the distance the airbag needs to deploy into rather than against you.",
        context:
          "The pre-drive setup runs together: the seat set at that distance, the head restraint positioned because it is there to prevent whiplash rather than to be a pillow, the left mirror set with your head against the window so it barely shows the rear edge of the car, the lap belt snug and low across the hips, and the shoulder belt across the shoulder and chest - never under the arm or behind the back.",
        trap:
          "Sitting close for a better view of the road is the habit this rule exists to break, and an airbag at that range does the damage instead of preventing it.",
        excerptKey: "seat-10-inches",
        sourceLabel: "Kentucky Driver Manual - Section Four: Adjusting Seat and Mirrors",
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
      "Built from what Kentucky learners actually report missing: the two headlight-dimming distances, the truck No Zone, the interlock threshold, the fatigue answer that sounds sensible, and every number a generic practice app teaches wrong for this state.",
    questions: [
      {
        id: "ky_s5_01",
        topic: "safety",
        question:
          "You are an hour from home on the interstate and your eyes keep closing. What does the Kentucky Driver Manual tell you to do?",
        choices: [
          "Stop driving, pull off at the next exit or rest area, and take a 15 to 20 minute nap",
          "Open the windows and turn the radio up",
          "Drink coffee and keep going, since you are close",
          "Slow down by 10 mph and increase your following distance",
        ],
        correctIndex: 0,
        explanation:
          "The manual's answer is to stop and sleep. A 15 to 20 minute nap at the next exit or rest area, or a place to sleep for the night, is the only remedy it offers.",
        context:
          "Fatigue gets its own section because it degrades exactly what driving needs: reaction time, judgment and attention. The manual asks for 7 to 9 hours of sleep for most people and a stop about every 100 miles or 2 hours on a long trip. Nothing in it treats air, noise or caffeine as a fix.",
        trap:
          "Windows down and the radio up is the classic distractor on this question, and Kentucky learners report picking it. It changes how awake you feel, not how awake you are.",
        excerptKey: "fatigue-nap",
        sourceLabel: "Kentucky Driver Manual - Section Three: Ways to Avoid Fatigue",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s5_02",
        topic: "safety",
        question:
          "At what distances must you dim your high beams in Kentucky - for an oncoming vehicle, and for a vehicle you are following?",
        choices: [
          "200 feet oncoming, 100 feet following",
          "300 feet oncoming, 200 feet following",
          "500 feet oncoming, 300 feet following",
          "1,000 feet oncoming, 500 feet following",
        ],
        correctIndex: 2,
        explanation:
          "Five hundred feet for oncoming vehicles and three hundred feet for a vehicle ahead of you. Two different numbers, because a driver ahead gets your glare in a mirror rather than in the face.",
        context:
          "Kentucky pairs those distances with a plain rule about when high beams belong on at all: use them whenever there are no oncoming vehicles, because they let you see twice as far as low beams. Switch to low beams when following, and in fog, rain or snow, where high beams reflect back and make seeing harder.",
        trap:
          "Learners who remember one number apply it to both situations. This is a reported miss on the Kentucky test, and the reason is that it looks like one fact and is two.",
        excerptKey: "dim-500-300",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Night Driving",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s5_03",
        topic: "sharing",
        question:
          "What is the simplest way to tell whether the driver of a large truck can see your car?",
        choices: [
          "If you cannot see the driver's face in the truck's side mirror, the driver cannot see you",
          "If you can read the lettering on the trailer, you are visible",
          "If your headlights reach the trailer, you are visible",
          "If you are within two car lengths, you are visible",
        ],
        correctIndex: 0,
        explanation:
          "The mirror test is the manual's own shortcut. A truck driver sees you only through the side mirrors, so if the driver's face is not in that mirror, your car is in a blind spot.",
        context:
          "The No Zone is the area around a large truck or bus where cars disappear from the driver's view, and it wraps the sides, the rear and the front. The rear blind spot runs up to 200 feet directly behind the trailer, which is why sitting close behind a truck is worse than sitting close behind a car.",
        trap:
          "Being close feels like being seen. It is the opposite: the closer you sit to the side or rear of a trailer, the deeper into the blind spot you are.",
        excerptKey: "truck-mirror-rule",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Side No Zones",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s5_04",
        topic: "impairment",
        question:
          "An ignition interlock device stops the vehicle from starting once the driver's breath-alcohol concentration is above what level?",
        choices: [".02", ".04", ".08", ".15"],
        correctIndex: 0,
        explanation:
          "The interlock cuts in at .02, well below the .08 that makes a driver over the limit. It is a device fitted after an offense, so it is set far tighter than the offense itself.",
        context:
          "Kentucky uses three separate alcohol numbers and they are easy to blur. Impairment of vision starts at .02 for every driver, .02 is also the limit for anyone under 21, .08 is the general offense, and .15 within two hours of driving is an aggravating circumstance that increases the penalty.",
        trap:
          "Assuming the interlock is set at the legal limit is the natural guess and it is wrong by four times. Kentucky learners report missing exactly this question.",
        excerptKey: "interlock-002",
        sourceLabel: "Kentucky Driver Manual - Section Three: Repeat Offenders",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s5_05",
        topic: "signals",
        question:
          "Your turn signal bulb has failed. What does the Kentucky Driver Manual say about using hand signals instead?",
        choices: [
          "Hand signals are acceptable in daylight",
          "Hand signals are acceptable below 35 mph",
          "Hand signals are acceptable for a left turn only",
          "Hand signals cannot be used - the vehicle must have mechanical signals",
        ],
        correctIndex: 3,
        explanation:
          "Kentucky requires mechanical signals and says hand signals cannot be used. A vehicle whose signals do not work is a vehicle to repair, not one to drive with your arm out of the window.",
        context:
          "This is a genuine Kentucky departure. Plenty of states still teach the three arm positions and test them, so a practice app written for the country as a whole will teach you an answer that is wrong here. Kentucky's own equipment rules run the same way: headlights must show a person 350 feet ahead on high beam and 100 on low, and the tail lights must be visible 500 feet behind.",
        trap:
          "Having learned the arm positions somewhere else makes the hand-signal option look obviously correct. In Kentucky it is the wrong answer by the manual's own words.",
        excerptKey: "mechanical-signals",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Signaling Your Movements",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s5_06",
        topic: "safety",
        question:
          "Traffic is moving well on a dry Kentucky highway. What is the minimum following distance the manual sets?",
        choices: ["2 seconds", "3 seconds", "4 seconds", "5 seconds"],
        correctIndex: 2,
        explanation:
          "Four seconds is Kentucky's floor in good conditions, and it is the single most commonly mistaught number for this state.",
        context:
          "You count it against a fixed object: start when the vehicle ahead passes it and you are too close if you reach it before finishing \"one thousand four\". Add a second at night, two on unfamiliar roads at night, and more behind trucks, buses, recreational vehicles and anything towing.",
        trap:
          "Almost every national practice app teaches three seconds. Kentucky prints four, and this question is where that difference costs a mark.",
        excerptKey: "following-4-seconds",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Space in Front",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s5_07",
        topic: "rules",
        question:
          "How far before a turn does Kentucky law require you to be signaling?",
        choices: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctIndex: 1,
        explanation:
          "One hundred feet, continuously, before the turn. The manual states the distance as guidance and KRS 189.380(2) states the same distance as law.",
        context:
          "The statute wording matters: the signal must be given continuously for not less than the last 100 feet traveled before the turn. A flick of the stalk as you begin to swing the wheel does not satisfy it. Kentucky asks you to signal every time you change direction, even on an empty road, and to cancel the signal afterward.",
        trap:
          "The manual reads like advice, so learners treat it as advice. It is the law, and the number is the same number the statute uses.",
        excerptKey: "signal-100-statute",
        sourceLabel: "KRS 189.380(2) - Signals",
        sourceUrl: krs("6382"),
      },
      {
        id: "ky_s5_08",
        topic: "sharing",
        question:
          "You are following a school bus on a two-lane Kentucky road and it stops with its red lights flashing to let children off. What must you do?",
        choices: [
          "Slow to 15 mph and pass carefully",
          "Pass on the left if no children are visible",
          "Stop only if children are crossing in front of you",
          "Stop, and stay stopped until the people are clear of the road and the bus is moving again",
        ],
        correctIndex: 3,
        explanation:
          "Following a bus that has stopped to load or unload, you stop, and the stop lasts until everyone is clear of the roadway and the bus is in motion again. Lights going out is not the signal to go.",
        context:
          "The one exemption is for traffic approaching from the opposite direction, and it is narrower than most people think. The manual excuses oncoming traffic on a highway of four or more lanes, while KRS 189.370(1), as amended, excuses it only where those four lanes are divided by an elevated barrier or unpaved median. Following the bus, no version of the rule lets you through. A first offense runs $200 to $500 or 30 to 60 days, plus a minimum six points.",
        trap:
          "The four-lane exemption is real and does not apply here. It has never covered a driver behind the bus, in any edition of either source.",
        excerptKey: "schoolbus-two-lane",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Rules for School Buses",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s5_09",
        topic: "parking",
        question: "How far from a fire hydrant may you park in Kentucky?",
        choices: [
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet. The Kentucky Driver Manual prints no parking distances at all, so this one comes from KRS 189.450(5)(i).",
        context:
          "The same statute lists where you may not park at all: on a sidewalk, in front of a ramp built for people with disabilities, in front of any driveway, within an intersection or on a crosswalk, and in the area between the roadways of a divided highway. It also bars stopping on the shoulder of an interstate, toll road or other fully controlled access highway.",
        trap:
          "Ten feet is the figure a good many states use and Kentucky is not one of them. Because the manual is silent, this is a question you can only get right from the statute.",
        excerptKey: "parking-hydrant-15",
        sourceLabel: "KRS 189.450(5)(i) - Stopping, standing, parking",
        sourceUrl: krs("46536"),
        commonlyMissed: true,
      },
      {
        id: "ky_s5_10",
        topic: "parking",
        question:
          "How close to a stop sign, flashing beacon or traffic signal at the side of the road may you park?",
        choices: [
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet on the approach to it",
          "No closer than 50 feet",
        ],
        correctIndex: 2,
        explanation:
          "Thirty feet on the approach. The point of the distance is sight lines: a car parked closer hides the sign or signal from the drivers who need to read it.",
        context:
          "This sits in the same statutory list as the 15-foot hydrant rule, and neither figure appears anywhere in the manual. Both are testable, which is why the statute is worth ten minutes even for a learner who has read the book cover to cover.",
        trap:
          "Approach is the operative word. The distance protects the view of drivers coming up to the sign, not the space beyond it.",
        excerptKey: "parking-30-feet",
        sourceLabel: "KRS 189.450(5)(f) - Stopping, standing, parking",
        sourceUrl: krs("46536"),
      },
      {
        id: "ky_s5_11",
        topic: "sharing",
        question:
          "A fire engine with its lights and siren on passes you and carries on down the road. How closely may you follow it?",
        choices: [
          "No closer than 100 feet",
          "No closer than 200 feet",
          "No closer than 300 feet",
          "No closer than 500 feet",
        ],
        correctIndex: 3,
        explanation:
          "Five hundred feet, unless you are on official business yourself. Following an emergency vehicle any closer is unlawful in its own right.",
        context:
          "The first duty comes earlier: when you become aware of a flashing red or blue light or hear a siren, you drive immediately to the right side of the road or the curb, clear of any intersection, and stop. The 500-foot rule governs what happens after it has gone by, and the move-over law governs what happens when the emergency vehicle is parked rather than moving.",
        trap:
          "Sliding in behind an emergency vehicle to use the gap it has opened is a common habit and a separate offense from failing to yield.",
        excerptKey: "emergency-500",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_12",
        topic: "speed",
        question:
          "Heavy rain cuts your visibility to about 100 feet. What does the manual say about your speed and lights?",
        choices: [
          "You cannot safely drive faster than 25 mph, and you should use low beam headlights",
          "You cannot safely drive faster than 45 mph, and you should use high beams",
          "Hold the posted limit and turn on your hazard lights",
          "Reduce to two-thirds of the posted limit and use high beams",
        ],
        correctIndex: 0,
        explanation:
          "The manual ties the number to the sight distance: at 100 feet of visibility, 25 mph is the fastest you can safely go, on low beams.",
        context:
          "The principle behind it is that you never drive so fast that you cannot stop within the distance your headlights show you. High beams in heavy rain, snow or fog bounce back off the water in the air and make the problem worse, which is why the manual specifies low beams for exactly the conditions people reach for high beams in.",
        trap:
          "Reaching for the brights when you cannot see is instinctive and it reduces your sight distance rather than increasing it.",
        excerptKey: "visibility-25mph",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Visibility",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_13",
        topic: "safety",
        question:
          "At 50 mph on dry pavement with good brakes, roughly how much braking distance does the manual give?",
        choices: ["About 88 feet", "About 158 feet", "About 240 feet", "About 335 feet"],
        correctIndex: 1,
        explanation:
          "About 158 feet of braking distance at 50 mph, and that is only the braking part. Perception and reaction happen before the brakes are touched, and their distance is added on top.",
        context:
          "Total stopping distance in the manual is the whole chain: the time to recognize that you must stop, the time to move your foot, and the distance the brakes then need. Perception alone runs three-quarters of a second to a second for an alert driver, which at 50 mph is car lengths before anything slows.",
        trap:
          "335 feet is a real figure in the same book, but it belongs to a loaded truck at 55 mph. Two numbers, two vehicles.",
        excerptKey: "braking-158",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Stopping Distance",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_14",
        topic: "sharing",
        question:
          "A loaded truck with good tires and brakes at 55 mph, in ideal conditions, needs at least how much room to stop?",
        choices: ["About 158 feet", "About 200 feet", "About 335 feet", "About 500 feet"],
        correctIndex: 2,
        explanation:
          "At least 335 feet, which the manual describes as more than one and a half times the stopping distance of a car. That is the reason you never cut in front of one and brake.",
        context:
          "The truck material joins up: the long stopping distance in front, blind spots up to 200 feet directly behind, blind spots along both sides, and a wide swing to the left before a right turn. Each is a version of the same instruction, which is to leave a large vehicle its space.",
        trap:
          "Cutting in and slowing down uses the gap the truck needs to stop. The gap is not spare road.",
        excerptKey: "truck-335",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Front No Zones",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_15",
        topic: "sharing",
        question: "How far back does a large vehicle's rear blind spot extend?",
        choices: ["About 50 feet", "About 100 feet", "Up to 200 feet", "Up to 400 feet"],
        correctIndex: 2,
        explanation:
          "Up to 200 feet directly behind. A car tucked in behind a trailer for the whole of that distance is invisible to the driver.",
        context:
          "That rear No Zone matters twice over: the truck driver cannot see you, and you cannot see past the trailer to whatever the truck is about to brake for. Dropping back solves both problems at once.",
        trap:
          "Fifty or a hundred feet feels generous already, and it is still deep inside the blind spot the manual describes.",
        excerptKey: "truck-rear-200",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Rear No Zones",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_16",
        topic: "licensing",
        question:
          "What is the minimum age at which Kentucky law now allows an application for an instruction permit?",
        choices: ["15", "16", "17", "18"],
        correctIndex: 0,
        explanation:
          "KRS 186.450(1) sets it at 15. The Kentucky Driver Manual still prints 16 in its permit-phase steps, so the book and the statute disagree and the statute is the law.",
        context:
          "Everything after the permit is unchanged. Permit holders aged 16 to 20 hold the permit for at least 180 days, drive only with a licensed driver aged 21 or older in the front passenger seat, carry no more than one unrelated person under 20, and stay off the road between midnight and 6 a.m. without good cause. Sixty hours of logged practice, ten of them at night, are needed before the intermediate license.",
        trap:
          "Copies of the manual from earlier years circulate widely online, and the age is the fact most likely to be stale in the one you are reading.",
        excerptKey: "permit-age-statute",
        sourceLabel: "KRS 186.450(1) - Instruction permits",
        sourceUrl: krs("55912"),
        commonlyMissed: true,
      },
      {
        id: "ky_s5_17",
        topic: "impairment",
        question:
          "You are 19 and driving in Kentucky. At what alcohol concentration are you in violation of the law?",
        choices: ["0.02", "0.04", "0.05", "0.08"],
        correctIndex: 0,
        explanation:
          "Under 21, the limit is 0.02, and the manual calls it Zero Alcohol Tolerance. The 0.08 figure is the general limit for drivers aged 21 and over.",
        context:
          "Below the numbers sits a broader rule: you can be in violation under 0.08 at any age if there is evidence of impaired driving. The manual also notes that vision, the sense driving depends on most, is already affected at 0.02 for every driver.",
        trap:
          "The 0.08 figure is the one everybody has heard, and it is the wrong answer for a driver under 21 by a factor of four.",
        excerptKey: "dui-under-002",
        sourceLabel: "Kentucky Driver Manual - Section Three: Alcohol and the Law",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s5_18",
        topic: "safety",
        question:
          "You are on an empty rural road at night with no oncoming traffic. What does the manual want you to do with your headlights?",
        choices: [
          "Leave them on low beam, since high beams are for emergencies",
          "Alternate between low and high every few seconds",
          "Use parking lights to save the bulbs",
          "Use your high beams, because they let you see twice as far",
        ],
        correctIndex: 3,
        explanation:
          "High beams are the default whenever there are no oncoming vehicles. The manual puts a number on the benefit: twice the sight distance of low beams.",
        context:
          "The switch back is what the distances are for. Dim within 500 feet of an oncoming vehicle and within 300 feet of one you are following, and use low beams in fog, rain or snow. If someone leaves their high beams on at you, look toward the right edge of the road rather than into the light.",
        trap:
          "Treating high beams as a special-occasion setting is common and it gives away half your sight distance on exactly the roads where you need it.",
        excerptKey: "high-beams-when",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Night Driving",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_19",
        topic: "rightOfWay",
        question:
          "A pedestrian steps into the road mid-block, well away from any crosswalk, and walks across in front of you. What is the position?",
        choices: [
          "You may proceed, because they are outside a crosswalk",
          "You may sound your horn and continue at the same speed",
          "They have the right of way, exactly as in a crosswalk",
          "They are required to yield to you, and you are still required to be ready to yield to them",
        ],
        correctIndex: 3,
        explanation:
          "Both things are true at once. A pedestrian crossing away from a crosswalk must yield to vehicles, and the manual still tells drivers to be prepared to yield to pedestrians whether or not they are in a crosswalk.",
        context:
          "Where a pedestrian is in a crosswalk, marked or unmarked, including a mid-block crossing marked by signs and markings, you must yield. That duty holds even on a green light, and it applies when you are turning right or left on red. Outside a crosswalk the legal duty flips to the pedestrian, but the practical duty of care does not leave you.",
        trap:
          "\"Not in a crosswalk, so not my problem\" is the reading that produces the collision. The manual's own sample test and its pedestrian section pull in different directions here, and being ready to stop is the answer both support.",
        excerptKey: "ped-jaywalk",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Pedestrians",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s5_20",
        topic: "rightOfWay",
        question:
          "You are stopping at a light where a blind pedestrian with a white cane is waiting to cross. There is no advance stop bar. Where do you stop?",
        choices: [
          "As far back as the traffic behind you allows",
          "Level with the crosswalk itself",
          "No more than five feet from the crosswalk",
          "Wherever the car ahead of you stopped",
        ],
        correctIndex: 2,
        explanation:
          "Within five feet of the crosswalk, unless there is an advance stop bar. A blind pedestrian uses the sound of your engine to judge where the road edge is, so a car stopped far back gives a false signal.",
        context:
          "Kentucky law requires you to yield the right of way to any blind pedestrian carrying a clearly visible white cane or accompanied by an assistance dog, and failing to do so can bring a fine of up to $250. The manual also asks you not to sound your horn near a blind pedestrian, since the noise removes the very cue they are navigating by.",
        trap:
          "Stopping well back feels like the polite, safe choice and it is the one thing this rule is written to prevent.",
        excerptKey: "blind-5-feet",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Blind Pedestrian Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_21",
        topic: "emergencies",
        question:
          "The back of your car starts sliding out to the right on a wet Kentucky road. Which way do you steer?",
        choices: [
          "To the right, the direction the back of the vehicle is sliding",
          "To the left, against the slide",
          "Straight ahead, and brake hard",
          "Straight ahead, and accelerate",
        ],
        correctIndex: 0,
        explanation:
          "Turn the wheel in the direction the back of the vehicle is skidding. With the tail sliding right, that means steering right, which points the front wheels back under the car.",
        context:
          "Skids come from going too fast for the conditions, stopping too suddenly, or asking more of the tires than they can give. The manual calls the steering wheel the most important control during a skid, not the pedals. Without anti-lock brakes, do not brake hard - pump gently instead, because locked wheels make the skid worse.",
        trap:
          "\"Steer against the skid\" is how people remember it and it is backwards. You steer where the back is going, which is the same as steering where you want the front to point.",
        excerptKey: "skid-sideways",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Dealing with Skids",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_22",
        topic: "emergencies",
        question:
          "You are driving an older car with no anti-lock brakes and you begin to skid. What does the manual tell you about the brakes?",
        choices: [
          "Press as hard as you can and hold",
          "Release the brakes entirely and coast",
          "Apply and release rapidly with the parking brake",
          "Do not brake hard - pump the brakes gently instead",
        ],
        correctIndex: 3,
        explanation:
          "Hard braking without anti-lock locks the wheels, and a locked wheel cannot steer or grip. Gentle pumping slows the car while leaving the tires something to work with.",
        context:
          "With anti-lock brakes the instruction is the opposite: press the pedal as hard as you can and keep the pressure on. The pedal may vibrate and the system may click, and both are normal. Releasing pressure because of the noise is what stops the system working.",
        trap:
          "The two answers are exact opposites and which one is right depends entirely on what the car has. Learning one and applying it to both cars is the failure mode.",
        excerptKey: "skid-no-abs",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Dealing with Skids",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_23",
        topic: "emergencies",
        question:
          "Your car has anti-lock brakes and a child runs out ahead of you. How should you brake?",
        choices: [
          "Press the pedal as hard as you can and keep the pressure on",
          "Pump the pedal rapidly",
          "Press firmly, then ease off when the pedal vibrates",
          "Use the parking brake as well as the foot brake",
        ],
        correctIndex: 0,
        explanation:
          "Full pressure, held. Anti-lock brakes only do their work while you keep the pedal down; the vibration and the clicking are the system operating, not a fault.",
        context:
          "The manual gives three ways out of an emergency - braking, steering and accelerating - and anti-lock brakes exist so you can do the first two at once. Because the wheels do not lock, you can steer around the hazard while still braking hard.",
        trap:
          "Easing off when the pedal shudders is the instinct, and it switches the system off at the moment it is doing its job.",
        excerptKey: "abs-press-hard",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Braking",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_24",
        topic: "rules",
        question:
          "You are passing on a two-lane Kentucky road. How much room must you leave before an oncoming vehicle when you pull back in?",
        choices: [
          "The pass must be complete before you are within 100 feet of it",
          "The pass must be complete before you are within 150 feet of it",
          "The pass must be complete before you are within 200 feet of it",
          "The pass must be complete before you are within 300 feet of it",
        ],
        correctIndex: 2,
        explanation:
          "Two hundred feet. Kentucky law also requires the pass to be finished before the beginning of any no-passing zone, so both the paint and the oncoming car set a deadline.",
        context:
          "The manual gives you a way to judge the moment: look for the vehicle you passed in your outside rearview mirror, and when you can see it you have room to move back. Passing on the right is lawful only in limited circumstances - when the vehicle ahead is turning left, or where the pavement is wide enough for two lines of traffic going your way.",
        trap:
          "Two hundred feet arrives much sooner than it sounds. At highway closing speeds it is under two seconds of gap.",
        excerptKey: "pass-200-feet",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Passing",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_25",
        topic: "sharing",
        question:
          "There is one lane in your direction and you are passing a cyclist. What is the minimum clearance Kentucky requires?",
        choices: ["3 feet", "4 feet", "5 feet", "6 feet"],
        correctIndex: 0,
        explanation:
          "Three feet between any part of your vehicle and the bicycle or electric low-speed scooter, and you hold that clearance until you are safely past.",
        context:
          "Bicycles are vehicles on Kentucky roadways and cyclists are expected to follow the same rules of the road. Riders keep right, may ride no more than two abreast on a single lane, must show a white light front and a red reflector or light to the rear at night, and never ride on interstates or parkways.",
        trap:
          "The three feet is measured from the widest part of your vehicle, mirrors included, and it must hold for the whole pass rather than at the closest moment.",
        excerptKey: "pass-bike-3-feet",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Passing",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_26",
        topic: "signals",
        question:
          "The center line beside your lane is a broken yellow line, with a solid yellow line on the far side of it. May you pass?",
        choices: [
          "No, a double yellow always forbids passing",
          "Only if the vehicle ahead is turning left",
          "Only where a sign permits it",
          "Yes - the broken line is on your side, so passing is allowed when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "The line on your side of the pair is the one that governs you. Broken on your side means passing is permitted; the solid line on the other side forbids it for oncoming traffic.",
        context:
          "The manual gives the rule from both directions: you may not pass when there is a solid line on your side of the broken line, and you may pass if there is a solid yellow line on the left side of the broken yellow line. Even where the paint allows it, the pass must still be safe, must be finished 200 feet before an oncoming vehicle, and must never be started approaching a hill or curve.",
        trap:
          "\"Double yellow means never pass\" is a rule people carry from elsewhere, and it turns a legal pass into a wrong answer here.",
        excerptKey: "passing-lines",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Passing",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s5_27",
        topic: "signs",
        question:
          "A sign ahead is a downward-pointing triangle, red and white, and the lettering has weathered away. What does it require?",
        choices: [
          "Slow down and let traffic that has the right of way pass before you enter",
          "Stop completely and wait for a signal",
          "Nothing - a triangle is advisory",
          "Merge left as soon as it is safe",
        ],
        correctIndex: 0,
        explanation:
          "The downward triangle is the yield sign. Slow down, and let the traffic with the right of way cross before you enter.",
        context:
          "Kentucky teaches shape and color first for exactly this reason, and its test asks you to recognize signs with the words stripped out. Eight sides and red means stop. A downward triangle means yield. A yellow diamond is a general warning. Fluorescent yellow-green is reserved for school zones, school crossings and pedestrian crossings.",
        trap:
          "A yield is not a soft stop sign. Stopping when nothing is coming is unnecessary, and rolling through when something is coming is the offense.",
        excerptKey: "yield-sign",
        sourceLabel: "Kentucky Driver Manual - Section Six: Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_28",
        topic: "signs",
        question: "What is a fluorescent yellow-green sign used for in Kentucky?",
        choices: [
          "Highway exits and services",
          "Temporary construction detours",
          "Hospital and emergency routes",
          "School zones, school crossings and pedestrian crossings",
        ],
        correctIndex: 3,
        explanation:
          "Kentucky reserves the fluorescent yellow-green shade for school zones, school crossings and pedestrian crossings - the warnings that involve people on foot.",
        context:
          "The color scheme is the fastest way through the signs section. Yellow diamonds warn generally, fluorescent yellow-green warns about people, orange marks work zones, green, brown and blue rectangles guide, and white regulatory signs carry rules that can be enforced. In a school zone with lights flashing or children present you obey a slower limit.",
        trap:
          "Ordinary yellow and fluorescent yellow-green look alike on a photograph. The shade is doing real work: it means people crossing, not a curve ahead.",
        excerptKey: "fluorescent-yellow",
        sourceLabel: "Kentucky Driver Manual - Section Six: Traffic Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_29",
        topic: "safety",
        question: "When must headlights be on in Kentucky?",
        choices: [
          "From half an hour after sunset until half an hour before sunrise, and whenever visibility is that poor at other times",
          "From sunset to sunrise exactly",
          "Only between 9 p.m. and 6 a.m.",
          "Only when you cannot see 500 feet ahead",
        ],
        correctIndex: 0,
        explanation:
          "The window is half an hour after sunset to half an hour before sunrise. KRS 189.030(1) adds a second trigger: any other time when conditions cut visibility to what it would be in that period.",
        context:
          "The second half is the part learners forget. Fog at midday, heavy rain or a snow squall put you inside the rule as surely as darkness does, and the manual pairs those conditions with low beams rather than high.",
        trap:
          "\"Sunset to sunrise\" sounds right and misses at both ends. The half hour on each side is when the light is worst and drivers are least likely to have switched on.",
        excerptKey: "headlights-sunset",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Letting Others Know You Are There",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_30",
        topic: "licensing",
        question:
          "How many points within a two-year period can suspend a Kentucky driver's privilege?",
        choices: [
          "6 points, at any age",
          "8 points, at any age",
          "10 points for adults and 5 for anyone under 18",
          "12 points, or 7 points if the driver is under 18",
        ],
        correctIndex: 3,
        explanation:
          "Twelve points inside two years for an adult, and seven for a driver under 18. Points expire two years from the date of conviction, so the window rolls.",
        context:
          "Under 18 the ladder is tighter throughout. A permit holder under 18 who accumulates more than six points may lose the privilege, and any violation of the permit restrictions, of KRS 189 or of KRS 189A adds at least another 180 days before an intermediate license can be applied for. Three reckless driving convictions in twelve months is its own ground for suspension.",
        trap:
          "One threshold does not cover every driver. Answering 12 for a 16-year-old is the version of this question people get wrong.",
        excerptKey: "points-12",
        sourceLabel: "Kentucky Driver Manual - Section One: The Kentucky Point System",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_31",
        topic: "licensing",
        question:
          "You are 17 and hold a Kentucky instruction permit. When may you not drive at all?",
        choices: [
          "Between midnight and 6 a.m., unless you can show good cause such as work, school or an emergency",
          "Between 10 p.m. and 5 a.m., with no exceptions",
          "Between 11 p.m. and 6 a.m., unless a parent is in the car",
          "There is no curfew on a permit, only on an intermediate license",
        ],
        correctIndex: 0,
        explanation:
          "Midnight to 6 a.m. is the permit curfew for a driver under 18, and good cause - emergencies, school activities, work - is the way out of it.",
        context:
          "The curfew rides alongside the rest of the permit restrictions: a licensed driver aged 21 or older in the front passenger seat at all times, no more than one unrelated passenger under 20, and the permit in your possession whenever you drive. The intermediate license carries its own curfew on the same midnight to 6 a.m. hours.",
        trap:
          "A parent in the car does not lift the curfew. Supervision is a separate requirement that applies the whole time.",
        excerptKey: "permit-curfew",
        sourceLabel: "Kentucky Driver Manual - Section One: Permit Driving",
        sourceUrl: GDLP,
      },
      {
        id: "ky_s5_32",
        topic: "rules",
        question:
          "Before making a turnabout on a two-lane road, how far must you be able to be seen in either direction?",
        choices: ["100 feet", "200 feet", "300 feet", "500 feet"],
        correctIndex: 3,
        explanation:
          "Five hundred feet in either direction. A turnabout blocks the whole road for several seconds, so the sight line has to be long enough for approaching traffic to react.",
        context:
          "The manual singles out the turnabout as a maneuver to master, and Kentucky examiners ask for one on the road test. The same sight-distance thinking runs through the passing rules: any time a curve or a hill blocks your view, assume there is an oncoming vehicle just out of sight.",
        trap:
          "People judge a turnabout by whether the road looks empty right now. Five hundred feet is about what arrives during the maneuver, not what is there when you start it.",
        excerptKey: "turnabout-500",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Turnabouts",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_33",
        topic: "safety",
        question:
          "You are driving at night on a road you have never been on. What does the manual say about following distance?",
        choices: [
          "Add at least two seconds to the daytime minimum, on top of the extra second night driving already calls for",
          "Keep the same four seconds as in daylight",
          "Add half a second",
          "Halve your speed instead of changing the distance",
        ],
        correctIndex: 0,
        explanation:
          "Night driving asks for at least one extra second, and an unfamiliar road at night asks for at least two. Both are additions to the four-second baseline, not replacements for it.",
        context:
          "The reason is sight distance. At night you can only see as far as the headlights reach, and on a road you do not know you have no memory of what is around the next bend. The manual's underlying instruction is never to drive so fast that you cannot stop within the distance you can see.",
        trap:
          "Treating four seconds as a fixed answer for every condition is the error. It is a floor for good conditions in daylight.",
        excerptKey: "night-following-extra",
        sourceLabel: "Kentucky Driver Manual - Section Eleven: Night Driving",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ky_s5_34",
        topic: "impairment",
        question:
          "Which of these counts as an aggravating circumstance that increases a Kentucky DUI penalty?",
        choices: [
          "Driving more than 30 mph above the posted speed limit",
          "Driving without a passenger who could have taken the wheel",
          "Refusing to answer questions at the roadside",
          "Having a previous conviction more than ten years ago",
        ],
        correctIndex: 0,
        explanation:
          "Exceeding the posted limit by more than 30 mph while under the influence is on the statutory list of aggravating circumstances, and it raises the penalty rather than being a separate ticket.",
        context:
          "The other entries on that list are worth knowing: an alcohol concentration of .15 or higher within two hours of driving, and carrying a passenger under twelve years old. A first alcohol conviction inside ten years already brings $200 to $500 plus costs, 48 hours to 30 days in jail, and a four to six month suspension.",
        trap:
          "A conviction older than ten years falls outside the look-back window, which is why the manual keeps repeating the ten-year period.",
        excerptKey: "dui-aggravating-30mph",
        sourceLabel: "Kentucky Driver Manual - Section Three: Aggravating Circumstances",
        sourceUrl: HB,
      },
      {
        id: "ky_s5_35",
        topic: "rightOfWay",
        question: "You are approaching a roundabout in Kentucky. Who yields?",
        choices: [
          "Traffic already circulating yields to anyone entering",
          "Whichever driver is on the right",
          "Nobody, provided everyone keeps moving",
          "You do - entering traffic yields to traffic already going around",
        ],
        correctIndex: 3,
        explanation:
          "Traffic already in the roundabout has the right of way. You slow on the approach and enter only when there is a gap in the circulating traffic.",
        context:
          "Vehicles travel counterclockwise around the center island, so you look to your left for the gap. Once inside you do not stop, and you signal your exit the way you would signal any other turn. The general warning the manual attaches to all right of way applies here too: nobody should assume they automatically have it.",
        trap:
          "The four-way stop habit of yielding to the driver on your right does not transfer. A roundabout has no arrival order to reason about.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Roundabouts and Traffic Circles",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix the Kentucky State Police written test uses, with no hints about which ones are hard. Rules of the road and right of way carry the most weight, then signs and signals, then speed, sharing the road, impairment and licensing.",
    questions: [
      {
        id: "ky_s6_01",
        topic: "signs",
        question:
          "You are on an exit ramp and a rectangular sign reading WRONG WAY faces you. What has happened?",
        choices: [
          "You are traveling in the wrong direction and must not continue",
          "The ramp is closed for maintenance",
          "The lane ends and you must merge",
          "Only trucks are prohibited from this ramp",
        ],
        correctIndex: 0,
        explanation:
          "The wrong way sign tells you that you are going in the wrong direction. It is placed on exit ramps and at the start of one-way streets, which are the two places a driver most easily ends up facing traffic.",
        context:
          "It is a regulatory sign, so it carries a rule rather than a warning. Kentucky's regulatory family is square, rectangular or specially shaped, and white with black, red or green lettering, and it includes the speed limit signs, the stop sign and the yield sign.",
        trap:
          "Reading it as advice about the lane rather than about your direction is what turns a wrong turn into a head-on collision.",
        excerptKey: "wrong-way-sign",
        sourceLabel: "Kentucky Driver Manual - Section Six: Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_02",
        topic: "signs",
        question: "In Kentucky's standard color scheme, what does yellow mean on a road sign?",
        choices: [
          "A rule you must obey",
          "Stop or forbidden",
          "Route and destination information",
          "A general warning",
        ],
        correctIndex: 3,
        explanation:
          "Yellow is the general warning color. It tells you something ahead needs your attention without telling you what to do about it.",
        context:
          "The manual sets out the standard colors as a short list because they carry meaning on their own: red is stop or forbidden, yellow is a general warning, orange marks work zones, and green, brown and blue are guide colors. Pavement markings do the same job in paint - lines, arrows, words and symbols that give directions or warnings.",
        trap:
          "Yellow signs are easy to treat as optional. They are the ones that tell you a curve, a crossing or a hill is coming while you can still slow for it.",
        excerptKey: "color-yellow",
        sourceLabel: "Kentucky Driver Manual - Section Six: Standard Colors",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_03",
        topic: "signs",
        question:
          "You are approaching a railroad crossing and a train is coming toward the intersection. Where do you stop?",
        choices: [
          "Behind the stop line, or before the intersection, and stay there until it is clear",
          "Anywhere at least one car length from the rails",
          "Alongside the crossbuck",
          "Only if the gates come down",
        ],
        correctIndex: 0,
        explanation:
          "When a train or railroad vehicle is approaching, you stop behind the stop line, or before the intersection if there is no line, and stay there until the crossing is clear.",
        context:
          "The crossing rules layer up. The round yellow advance warning sign asks you to slow, look and listen. The crossbuck at the tracks carries a yield duty. Two flashing red lights mean stop until they stop flashing and you have satisfied yourself nothing is coming. Where there are several tracks, do not move off as the first train clears - wait for a clear view both ways.",
        trap:
          "Gates and lights are not the only trigger. A crossing with neither still requires the stop once a train is approaching.",
        excerptKey: "rr-crossbuck-stop",
        sourceLabel: "Kentucky Driver Manual - Section Six: Railroad Crossing Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_04",
        topic: "signs",
        question:
          "You reach an intersection where no crosswalk is painted and none is obvious. What does the manual tell you?",
        choices: [
          "Treat it as having no crosswalk at all",
          "Stop only if a pedestrian is already in the road",
          "Not all crosswalks are marked, so stop before entering the intersection",
          "Sound your horn before entering",
        ],
        correctIndex: 2,
        explanation:
          "Crosswalks exist at intersections whether or not anyone painted them. Where you cannot see where the crosswalk is, you stop before entering the intersection.",
        context:
          "Kentucky's stopping order is fixed: if there is a stop line before the crosswalk, the stop line is obeyed first, then the crosswalk, then the intersection itself. Pedestrians entering or already in a crosswalk have the right of way, and the crosswalk being unmarked does not change that.",
        trap:
          "No paint reads as no crosswalk, which is exactly the assumption that puts a car into the space a pedestrian is legally entitled to.",
        excerptKey: "crosswalk-unmarked",
        sourceLabel: "Kentucky Driver Manual - Section Six: Crosswalks and Stop Lines",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_05",
        topic: "signals",
        question: "The light turns green for you. What does the manual say a green light permits?",
        choices: [
          "Going straight, left or right if the way is clear and you have yielded to vehicles and pedestrians already lawfully in the intersection, unless a turn is prohibited",
          "Proceeding immediately, since anyone still in the intersection is in the wrong",
          "Going straight only, with turns requiring an arrow",
          "Proceeding at the posted limit without further checks",
        ],
        correctIndex: 0,
        explanation:
          "Green is permission conditional on the intersection being clear. You yield to anyone lawfully in it first, and any posted prohibition on a turn still applies.",
        context:
          "The manual adds a practical instruction for the moment the light changes: do not move into the intersection immediately. Drivers finishing a movement on the yellow are entitled to clear it, and a vehicle that entered on yellow may lawfully complete its crossing on the red.",
        trap:
          "Treating green as an unconditional right of way is how intersection collisions happen a second after the change.",
        excerptKey: "green-light",
        sourceLabel: "Kentucky Driver Manual - Section Six: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_06",
        topic: "signals",
        question: "What does a steady red traffic light require in Kentucky?",
        choices: [
          "Slowing to a crawl and continuing if clear",
          "Stopping only when other traffic is present",
          "Stopping in the intersection to see around the corner",
          "Stopping behind the crosswalk or stop line until the green appears",
        ],
        correctIndex: 3,
        explanation:
          "Red means stop, and it means stopping behind the crosswalk or the stop line rather than on them, until the light turns green.",
        context:
          "Two movements are carved out of that. A right turn on red is allowed after a full stop, from the proper lane, where no sign forbids it and the way is clear of vehicles and pedestrians. A left on red is allowed from a one-way street into the nearest lane of another one-way street running that way.",
        trap:
          "Creeping into the intersection to see past a stopped truck puts your car in the path of the traffic that has the green.",
        excerptKey: "red-light",
        sourceLabel: "Kentucky Driver Manual - Section Six: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_07",
        topic: "signals",
        question: "A traffic light ahead is flashing yellow. What does it mean?",
        choices: [
          "Slow down and watch for others",
          "Stop, then proceed when clear",
          "The signal has failed and the intersection is uncontrolled",
          "Prepare to stop because it is about to turn red",
        ],
        correctIndex: 0,
        explanation:
          "A flashing yellow means slow down and watch for others. You do not have to stop, but you have to arrive able to.",
        context:
          "Its counterpart is the flashing red, which means come to a full stop and proceed only when it is clear. Two flashing red lights together mark a railroad crossing, where you stop and wait until they stop flashing and you have made sure no train is coming.",
        trap:
          "A flashing yellow is not the same as a steady yellow. The steady one is a warning that red is next; the flashing one is a standing caution.",
        excerptKey: "flashing-yellow",
        sourceLabel: "Kentucky Driver Manual - Section Six: Flashing Lights",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_08",
        topic: "rules",
        question:
          "The driver directly ahead of you is signaling a right turn and you are going straight on. What should you do with your own signal?",
        choices: [
          "Signal right as well, so drivers behind understand the slowdown",
          "Flash your hazard lights",
          "Signal left to show you are not turning",
          "Leave it off, because you are not turning",
        ],
        correctIndex: 3,
        explanation:
          "A signal states your intention and nobody else's. Copying the car ahead tells the drivers behind you something false about where you are going.",
        context:
          "Kentucky asks you to signal every time you change direction, even with no one in sight, and to cancel the signal afterward so it does not mislead. The same principle runs the other way at intersections: do not turn into a lane just because an approaching vehicle has a signal flashing, because it may have been left on.",
        trap:
          "Signaling in sympathy feels helpful. It is the reason the driver behind you pulls out expecting you to leave the lane.",
        excerptKey: "no-copy-signal",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Turning and Turnabouts",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_09",
        topic: "rules",
        question: "From where in your lane should a right turn be made?",
        choices: [
          "From the right-most portion of the lane",
          "From the center of the lane",
          "From the left of the lane, to give yourself a wider arc",
          "It makes no difference on a single-lane road",
        ],
        correctIndex: 0,
        explanation:
          "Turn right from the right-most portion of your lane. That closes the gap on your right, which is where a cyclist or another car would otherwise try to pass.",
        context:
          "The mirror-image rule governs left turns: turn left from the left-most portion of your lane, and where the street has two or more lanes going your way, from the lane nearest the center. Turning into another street, you take the lane nearest to you rather than cutting across to a far lane.",
        trap:
          "Swinging left first is what large trucks do because they have to, and it is exactly what a car should not do.",
        excerptKey: "right-turn-position",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Right Turns",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_10",
        topic: "rules",
        question: "You realize you have gone past the street you meant to turn into. What now?",
        choices: [
          "Stop and reverse to the junction when it is clear",
          "Make a U-turn as soon as there is a gap",
          "Carry on to the next intersection and work your way back",
          "Use the next driveway to turn around",
        ],
        correctIndex: 2,
        explanation:
          "Go on to the next intersection and work back from there. A missed turn is a minor inconvenience and every alternative is a serious risk.",
        context:
          "The manual is firmer still on a limited access road: if you pass your exit on an interstate or freeway, never back up or try to turn around - continue to the next exit. Backing on a roadway puts your car where nobody is looking for it.",
        trap:
          "A short reverse feels harmless on a quiet street and is the one maneuver where nobody behind you expects your car to move that way.",
        excerptKey: "miss-your-turn",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Lanes for Turning",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_11",
        topic: "rules",
        question: "When may you overtake another vehicle on the right in Kentucky?",
        choices: [
          "Only when it is safe to do so",
          "Whenever the left lane is occupied",
          "Only on a road with a posted limit of 45 mph or more",
          "Never, under any circumstance",
        ],
        correctIndex: 0,
        explanation:
          "The manual permits passing on the right only when it is safe to do so. The general rule remains that you pass on the left, and on a multi-lane road the left-most lane is the passing lane.",
        context:
          "The statute puts limits around it: overtaking on the right is for when the vehicle ahead is making or about to make a left turn, or where the pavement is unobstructed and wide enough for two or more lines of vehicles moving lawfully in your direction. A shoulder is not one of those lines.",
        trap:
          "\"The left lane is busy\" is not the test. Passing on the right onto a shoulder is a separate offense from the passing rule itself.",
        excerptKey: "pass-on-right",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Passing",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_12",
        topic: "rightOfWay",
        question:
          "You arrive at an uncontrolled intersection a moment after another driver. Who has the right of way?",
        choices: [
          "You, if you are going straight and they are turning",
          "Whoever is on the wider road",
          "Neither - both must stop",
          "The driver who was at or arrived before you",
        ],
        correctIndex: 3,
        explanation:
          "Order of arrival comes first in Kentucky's list. The driver who was already there, or who got there before you, goes first.",
        context:
          "The right-hand rule is a tie-breaker, not the primary rule: it decides who goes when two drivers arrive at a four-way stop at the same time. On a rural uncontrolled intersection the manual asks you to slow down and be prepared to stop for crossing or oncoming traffic regardless, and it repeats that nobody should assume they automatically have the right of way.",
        trap:
          "Going straight does not outrank turning, and being on the bigger road only matters where one road is signed as the minor one.",
        excerptKey: "row-arrives-first",
        sourceLabel: "Kentucky Driver Manual - Section Six: Yielding Right of Way",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_13",
        topic: "rightOfWay",
        question:
          "You are on the acceleration ramp joining a Kentucky interstate. Who yields?",
        choices: [
          "You yield to the traffic already on the highway",
          "The highway traffic yields, because you have less room",
          "Whoever is going slower yields",
          "Neither, provided you both keep to your lanes",
        ],
        correctIndex: 0,
        explanation:
          "Drivers already on a limited access highway have the right of way over anyone on an entrance or acceleration ramp. The ramp exists so you can match their speed before you join.",
        context:
          "The manual's merging instruction follows from that: use the acceleration lane to reach the speed of the traffic before pulling onto the roadway, and make sure it is clear before you merge. Leaving a highway is the mirror image - hold your speed while you are still on the main roadway and slow on the exit ramp instead.",
        trap:
          "Arriving at the end of the ramp slowly and expecting a gap to open is the merge that causes the crash. Matching speed is the whole point of the lane.",
        excerptKey: "row-ramp",
        sourceLabel: "Kentucky Driver Manual - Section Six: Yielding Right of Way",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_14",
        topic: "rightOfWay",
        question:
          "You have a green light and are waiting to turn left. Oncoming traffic is coming through steadily. What must you do?",
        choices: [
          "Turn in front of the next vehicle, since you arrived first",
          "Move into the intersection and turn as the light changes to red",
          "Yield to the through traffic coming from the opposite direction",
          "Wait for a red light before turning",
        ],
        correctIndex: 2,
        explanation:
          "A green light does not give a left turn priority over oncoming through traffic. You yield until there is a gap large enough to complete the turn.",
        context:
          "KRS 189.330(9) puts the same duty on a driver turning left into an alley, private road or driveway. The manual's own list of who you yield to includes the opposing traffic when you are turning left, and it counts vehicles turning right as part of that traffic.",
        trap:
          "Having waited a long time creates no entitlement. The rule is about direction of travel, not about patience.",
        excerptKey: "green-left-yield",
        sourceLabel: "Kentucky Driver Manual - Section Six: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_15",
        topic: "rightOfWay",
        question:
          "Your light is green and a pedestrian is still in the intersection ahead of you. What is required?",
        choices: [
          "Yield to them, green light or not",
          "Proceed slowly around them",
          "Sound your horn and continue",
          "Proceed, because the green light gives you priority",
        ],
        correctIndex: 0,
        explanation:
          "You yield the right of way to all pedestrians in the intersection even when your light is green. A signal governs vehicles against vehicles, not vehicles against people already in the road.",
        context:
          "The same duty attaches to a right or left turn on red, where you must be prepared to yield to pedestrians before completing the turn, and to any crosswalk, marked or unmarked, including mid-block crossings marked by signs and pavement markings.",
        trap:
          "A slow pass around someone in the road is still a failure to yield, and it is the maneuver that catches the pedestrian who steps back.",
        excerptKey: "ped-green-light",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_16",
        topic: "speed",
        question:
          "You are on a Kentucky state highway that is not an interstate or parkway, with no speed limit posted. What is the limit?",
        choices: ["35 mph", "55 mph", "65 mph", "70 mph"],
        correctIndex: 1,
        explanation:
          "Fifty-five miles per hour on all other state highways. The manual and KRS 189.390(3) print the same ladder.",
        context:
          "The rest of the ladder runs 65 on interstates and parkways, 35 in a business or residential district, and 15 in an off-street parking facility offered for public use. The secretary of transportation may raise a particular highway to 70.",
        trap:
          "A wide, straight, empty state highway feels like interstate driving. The unposted number for it is 55.",
        excerptKey: "speed-statute-defaults",
        sourceLabel: "KRS 189.390(3) - Speed",
        sourceUrl: krs("52569"),
      },
      {
        id: "ky_s6_17",
        topic: "speed",
        question: "How often does the manual suggest you check your speedometer?",
        choices: [
          "About once a minute",
          "Only when a limit sign appears",
          "Every ten seconds",
          "Only when traffic around you changes speed",
        ],
        correctIndex: 0,
        explanation:
          "About once a minute. Speed creeps up without any sensation of it, particularly on a road you have been on for a while, and the glance is the correction.",
        context:
          "Speed management in the manual is not only about the posted number. It asks you to reduce speed before entering a curve rather than braking once you are in it, because hard braking after entry can break the tires' grip, and to slow at the first sign of rain, snow, sleet or ice.",
        trap:
          "Judging speed by the traffic around you means matching whatever the fastest driver near you has decided on.",
        excerptKey: "speedometer-glance",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Speed Management",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_18",
        topic: "speed",
        question: "You are approaching a sharp curve. When should you slow down?",
        choices: [
          "Once you feel the car begin to drift",
          "Halfway through, where the curve is tightest",
          "Only if the curve has an advisory speed sign",
          "Before entering it, down to a safe speed",
        ],
        correctIndex: 3,
        explanation:
          "Reduce speed before you enter the curve. Braking hard once you are in it can take the grip away from the tires at the moment you most need it.",
        context:
          "Traction is finite and a curve is already spending some of it. That is why the manual pairs this with its slippery-road rules: reduce speed at the first sign of rain, snow, sleet or ice, and slow down in standing water where the tires can start to ride up on it and hydroplane.",
        trap:
          "Waiting for an advisory sign leaves the decision to whoever surveyed the road, in conditions that may be nothing like today's.",
        excerptKey: "curves-slow-first",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Adjusting To Roadway Conditions",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_19",
        topic: "sharing",
        question:
          "A motorcycle ahead of you has its left turn signal flashing. What should you assume?",
        choices: [
          "That it is about to turn left, so you can pass on the right",
          "That the rider is signaling you to overtake",
          "That the signal is broken",
          "Nothing yet - motorcycle signals may not self-cancel and the rider may have forgotten it",
        ],
        correctIndex: 3,
        explanation:
          "Many motorcycle signals do not cancel themselves after a turn, so a flashing signal may be left over from the last junction. Wait for the machine to actually slow or move before you act on it.",
        context:
          "The manual asks you to give a motorcyclist a full lane width and never to share the lane, because the rider needs that space to react. When following one, allow at least four seconds, and more in the wet.",
        trap:
          "Acting on the signal rather than on the movement is a general rule, and the manual applies it to cars too - do not turn into a lane just because an approaching vehicle is signaling.",
        excerptKey: "motorcycle-signal",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Motorcyclists",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_20",
        topic: "sharing",
        question: "Where are the No Zones around a large truck or bus?",
        choices: [
          "Only directly behind it",
          "Only on the right-hand side",
          "On the sides, the rear and the front",
          "Only where the trailer blocks your view",
        ],
        correctIndex: 2,
        explanation:
          "The No Zone wraps the vehicle: blind spots run along both sides, behind it and in front of it. A car can vanish from the driver's view in any of them.",
        context:
          "The manual attaches figures to two of them. The rear blind spot reaches up to 200 feet behind the trailer, and a loaded truck at 55 mph needs at least 335 feet to stop, so the space in front of it is not spare road either.",
        trap:
          "The front blind spot surprises people. A car that cuts in close ahead of a truck disappears below the windshield line.",
        excerptKey: "no-zone",
        sourceLabel: "Kentucky Driver Manual - Section Ten: The No Zone",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_21",
        topic: "sharing",
        question:
          "You are parked on the street and about to open your door. What does the manual require?",
        choices: [
          "Check to the sides and rear for cyclists first",
          "Open the door slowly and let others react",
          "Open the door only from the passenger side",
          "Sound the horn before opening",
        ],
        correctIndex: 0,
        explanation:
          "Check the sides and the rear for cyclists before the door moves. A rider coming up the traffic side has no time and nowhere to go.",
        context:
          "The manual treats bicycles as vehicles on the roadway with the same rules of the road, and it adds duties for drivers around them: pass with at least three feet of clearance, do not stop, park or drive in a marked bicycle lane except to enter a driveway or alley, and avoid sounding the horn near a rider, which can startle them into your path.",
        trap:
          "Getting out on the curb side is the manual's own advice for the driver, but the door check is what protects the rider when the street side is the only option.",
        excerptKey: "bike-door",
        sourceLabel: "Kentucky Driver Manual - Section Ten: Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_22",
        topic: "safety",
        question:
          "You find yourself traveling just behind and to the side of another car on a multi-lane road. What should you do?",
        choices: [
          "Match their speed exactly so the gap stays constant",
          "Speed up or drop back so you are not sitting in their blind spot",
          "Move as close to the lane line as possible so they can see you",
          "Flash your headlights to announce yourself",
        ],
        correctIndex: 1,
        explanation:
          "That position is another driver's blind spot, and it also removes the room you would need to swerve. Either move ahead or fall back, but do not stay there.",
        context:
          "Space management in the manual runs in every direction: four seconds in front, room to the side, and a deliberate gap from parked cars in case a door opens or someone steps out between them. Looking 20 to 30 seconds ahead is what gives you time to arrange all of it.",
        trap:
          "Holding station beside someone feels stable and orderly. It is the arrangement where a single lane change by either car leaves neither with an escape.",
        excerptKey: "blind-spot-avoid",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Space to the Side",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_23",
        topic: "safety",
        question:
          "You are driving down a street lined with parked cars. What does the manual ask of you?",
        choices: [
          "Drive in the center of the road until the parked cars end",
          "Keep a space between yourself and the parked vehicles",
          "Sound your horn as you approach each gap",
          "Hold the speed limit so you spend less time beside them",
        ],
        correctIndex: 1,
        explanation:
          "Leave room. Someone can step out of a car, walk out from between two of them, or pull away from the curb without looking, and the space is your reaction time.",
        context:
          "The manual pairs this with the rest of its side-space rules and with the visual search that makes them work: looking 20 to 30 seconds ahead so that the door, the child or the car pulling out is something you saw coming rather than something that appeared.",
        trap:
          "Speeding up to shorten the exposure is the opposite of what the risk calls for. It cuts your reaction time exactly where you need the most.",
        excerptKey: "space-parked-cars",
        sourceLabel: "Kentucky Driver Manual - Section Eight: Space to the Side",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_24",
        topic: "safety",
        question: "Who must wear a seat belt in a Kentucky vehicle built after 1981?",
        choices: [
          "The driver only",
          "The driver and any front-seat passenger",
          "Everyone under 18",
          "The driver and all passengers",
        ],
        correctIndex: 3,
        explanation:
          "Everyone. In a vehicle manufactured after 1981, the driver and all passengers must wear a properly adjusted and fastened seat belt.",
        context:
          "Kentucky's belt law is primary, so an officer may stop you for that alone rather than needing another reason first. The manual also asks that belts be worn even in a car with airbags, that the lap belt sit snug and low across the hips, and that the shoulder harness never be tucked under the arm or behind the back.",
        trap:
          "Front-seat-only belt rules exist in other states and a rear-seat passenger unbelted in Kentucky is a violation.",
        excerptKey: "seatbelt-1981",
        sourceLabel: "Kentucky Driver Manual - Section One: Safety Belts and Shoulder Belts",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_25",
        topic: "impairment",
        question:
          "What does the Kentucky Driver Manual say about the effect of a single alcoholic drink?",
        choices: [
          "It has no measurable effect on an adult",
          "It affects only judgment, not reaction time",
          "Impairment starts with the first drink, and even one can affect the ability to drive",
          "It matters only on an empty stomach",
        ],
        correctIndex: 2,
        explanation:
          "Impairment begins at the first drink. The manual is explicit that even one can affect a person's ability to drive.",
        context:
          "It puts a number on it too: vision, the sense driving depends on most, is affected at 0.02 for every driver. That is why the offense threshold and the point at which alcohol starts to matter are two different things, and why a driver can be in violation under 0.08 where there is evidence of impaired driving.",
        trap:
          "\"Under the limit means unimpaired\" is the assumption the manual is written against.",
        excerptKey: "alcohol-first-drink",
        sourceLabel: "Kentucky Driver Manual - Section Three: Effects of Alcohol",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_26",
        topic: "impairment",
        question:
          "You refuse a breath, blood or urine test after being lawfully asked in Kentucky. What follows?",
        choices: [
          "The refusal may be used against you in court as evidence of a DUI violation",
          "Nothing, since you cannot be made to give evidence",
          "The charge is automatically dismissed for lack of proof",
          "A written warning on a first occasion",
        ],
        correctIndex: 0,
        explanation:
          "Refusing does not remove the evidence, it becomes evidence. The refusal may be used against you in court as evidence of a violation of the DUI statute.",
        context:
          "The consent was given when you drove, under the implied consent law. Before deciding, you are entitled to at least ten minutes and no more than fifteen to try to contact and speak with an attorney.",
        trap:
          "Refusal is often described as a way of denying the prosecution a number. It supplies a different piece of evidence instead.",
        excerptKey: "refusal-evidence",
        sourceLabel: "Kentucky Driver Manual - Section Three: Alcohol and the Law",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_27",
        topic: "licensing",
        question:
          "What visual acuity must you have before you are allowed to move on to the Kentucky written test?",
        choices: ["20/20", "20/30", "20/50", "20/40, corrected or uncorrected"],
        correctIndex: 3,
        explanation:
          "A minimum of 20/40, with or without correction. The vision screening comes first, and failing it stops the process before the written test.",
        context:
          "A separate figure governs driving generally: Kentucky requires visual acuity of at least 20/60 in at least one eye. If corrective lenses were prescribed for you, the restriction goes on the license and you must wear them when you drive.",
        trap:
          "The 20/60 general standard and the 20/40 testing standard are different numbers doing different jobs, and mixing them up is the error.",
        excerptKey: "vision-2040",
        sourceLabel: "Kentucky Driver Manual - Section One: Vision Screening",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_28",
        topic: "licensing",
        question: "What proof of insurance must be carried in a Kentucky vehicle?",
        choices: [
          "Written proof of minimum liability coverage, kept in the vehicle",
          "Nothing, provided the policy is in force",
          "A photograph of the policy on your phone only",
          "A receipt from the last premium payment",
        ],
        correctIndex: 0,
        explanation:
          "Written proof of the minimum liability coverage stays in the vehicle. An insurance card, the policy itself, or a written binder from an agent all satisfy it.",
        context:
          "Failing to maintain insurance is a criminal offense in Kentucky and the registration is revoked for it. The minimums are $25,000 for one person's bodily injury, $50,000 for all bodily injury in one accident, and $25,000 for property damage.",
        trap:
          "Having a valid policy and having the proof in the car are two separate duties, and the roadside only tests the second one.",
        excerptKey: "insurance-proof",
        sourceLabel: "Kentucky Driver Manual - Section Two: Insurance Law",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_29",
        topic: "parking",
        question:
          "You have parallel parked on a busy Kentucky street. Which side should you get out on?",
        choices: [
          "The street side, so you can see traffic coming",
          "Whichever door is nearer the sidewalk ramp",
          "The curb side, and if you must use the street side, check traffic first",
          "Either, provided your hazard lights are on",
        ],
        correctIndex: 2,
        explanation:
          "The curb side is the safe side. Where the street side is the only option, you check traffic before the door moves.",
        context:
          "The manual's parking instructions run together: park as far from the flow of traffic as possible, get as close to the curb as you can, turn off the engine and remove the key as the law requires, and check the sides and rear for cyclists before opening a street-side door.",
        trap:
          "Hazard lights do not make an opening door visible in time to a driver or a rider already alongside you.",
        excerptKey: "parking-exit-curb-side",
        sourceLabel: "Kentucky Driver Manual - Section Seven: Parallel Parking",
        sourceUrl: HB,
      },
      {
        id: "ky_s6_30",
        topic: "emergencies",
        question:
          "You have been in a collision in Kentucky and an officer is on the way. What does the manual tell you to do?",
        choices: [
          "Exchange details and leave once you have them",
          "Move your vehicle home and report it later",
          "Wait only if someone was injured",
          "Stay with the vehicle until the officer arrives and has questioned everyone involved",
        ],
        correctIndex: 3,
        explanation:
          "Remain with the vehicle until the officer has arrived and questioned everyone involved. Leaving before that is what turns a collision into a separate offense.",
        context:
          "The duties before that point are set by law: stop immediately, find out the extent of any injury or damage, and render reasonable assistance. In a non-injury crash you move the damaged vehicles to the shoulder. If no officer investigates and the property damage is over $500, you file a written report with the Kentucky State Police within ten days.",
        trap:
          "Having swapped insurance details feels like the transaction is complete. The officer's questions are a separate step and the manual expects you to be there for them.",
        excerptKey: "collision-stay",
        sourceLabel: "Kentucky Driver Manual - Section Nine: Collisions",
        sourceUrl: HB,
      },
    ],
  },
];
