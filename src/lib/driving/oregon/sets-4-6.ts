import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets 1 to 3: the Oregon Driver Manual,
// 2026-2027 edition, form 735-37, with Oregon Revised Statutes chapters 807,
// 811 and 813 filling the gaps the manual leaves - the interstate speed limit,
// the provisional license passenger and night restrictions, the permit's own
// term, the price of refusing a breath test and the speeding violation classes.
//
// Set 5 is built on what people on Oregon forums say the test actually catches
// them with, checked against the manual and the statute before any of it became
// a question. Three themes recurred across the threads read for this bank:
//
//  - Oregon asks for exact numbers and for dollar figures, which is unusual.
//    The disabled parking fine, the 100 mph fine, the fire station distances
//    and the studded tire season are all in the book for that reason.
//  - Oregon has rules other states do not, and drivers arriving from elsewhere
//    fail on them: bike boxes, roundabouts, the ban on moving into a bike lane
//    to line up for a turn, and left turns on red onto a one-way road.
//  - Where a forum thread and the manual disagreed, the manual won and the
//    forum belief became the trap. The commonest was the belief that the left
//    lane is legally a passing lane, which Oregon does not say; what it says is
//    that a driver going slower than surrounding traffic keeps right and pulls
//    off when a queue builds.
//
// Set 6 runs 30 questions with no scaffolding beyond the standard fields,
// weighted the way DMV's own 35-question test is described - road signs,
// traffic laws, and the rest of what a driver needs to know.
const HB = "https://www.oregon.gov/odot/Forms/DMV/37.pdf";
/** The manual's printed page number to a PDF page anchor - printed 1 is PDF 9. */
const hb = (page: number) => `${HB}#page=${page + 8}`;
const ors = (chapter: string) =>
  `https://www.oregonlegislature.gov/bills_laws/ors/ors${chapter}.html`;

export const oregonSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "A second exam-level set, weighted toward the chapters people skim: freeway driving, insurance and collision paperwork, work zones, loads and trailers, animals, and the equipment rules that only matter once something goes wrong.",
    questions: [
      {
        id: "or_s4_01",
        topic: "licensing",
        question:
          "What is Oregon's minimum liability cover for damage to someone else's property?",
        choices: [
          "10,000 dollars",
          "20,000 dollars",
          "25,000 dollars",
          "50,000 dollars",
        ],
        correctIndex: 1,
        explanation:
          "Twenty thousand dollars per collision for damage to the property of others. It is the smallest of the three liability figures and the one people misremember.",
        context:
          "The bodily injury minimums sit alongside it: 25,000 dollars per collision for one person and 50,000 for two or more. Oregon policies also carry personal injury protection of 15,000 dollars per person for reasonable and necessary expenses within two years of the injury, and uninsured motorist cover of 25,000 and 50,000 on the same pattern.",
        trap: "The 25,000 and 50,000 figures stick because they repeat. Property damage is the odd one out at 20,000.",
        excerptKey: "insurance-minimums",
        sourceLabel: "Oregon Driver Manual - Mandatory Insurance",
        sourceUrl: hb(93),
      },
      {
        id: "or_s4_02",
        topic: "rules",
        question: "You are merging onto a freeway from an on-ramp. Who yields?",
        choices: [
          "Traffic on the freeway, which must make room",
          "You do, to traffic already on the freeway",
          "Neither, you alternate one for one",
          "Whichever vehicle is traveling slower",
        ],
        correctIndex: 1,
        explanation:
          "The merging vehicle yields. You use the ramp to build speed to match the traffic already there, check mirrors and blind spots, and slot into a gap.",
        context:
          "The instruction that surprises people is to keep moving if at all possible. Drivers behind you on the ramp expect you to accelerate, not to stop and wait for a perfect gap, and a stationary car at the top of a ramp is a hazard to everyone behind it. Once on the freeway, drive at a steady speed and change lanes as little as you can.",
        trap: "Freeway traffic moving over is a courtesy, not an obligation. If nobody moves, the yielding is still yours.",
        excerptKey: "freeway-yield-merge",
        sourceLabel: "Oregon Driver Manual - Freeway Driving",
        sourceUrl: hb(34),
      },
      {
        id: "or_s4_03",
        topic: "safety",
        question:
          "Which of these does the Oregon manual list as a sign you may be falling asleep at the wheel?",
        choices: [
          "A racing heartbeat",
          "Gripping the wheel harder than usual",
          "Feeling suddenly hungry",
          "Repeated yawning and drifting out of your lane",
        ],
        correctIndex: 3,
        explanation:
          "Frequent yawning, head nodding, heavy eyelids, blurred vision and not holding your lane are the warnings the manual names. Drifting is the one that shows the impairment has already started.",
        context:
          "Drowsiness sits in the same chapter as aggressive driving and distraction because Oregon treats them as one family of dangerous behaviors. The others in it are worth knowing for the test: no phone at all for a driver under 18, hands-free only for anyone older, no video display visible to the driver, and nothing held in your lap or arms, person, pet or package.",
        trap: "Waiting for your eyes to actually close is waiting too long. Lane drift is the point at which you have already lost some control.",
        excerptKey: "drowsy-driving-signs",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(81),
      },
      {
        id: "or_s4_04",
        topic: "sharing",
        question:
          "A large truck ahead of you swings wide to the left before turning right. What should you do?",
        choices: [
          "Move up on its right, since the gap is where it is going to leave",
          "Pass it on the left while it is turning",
          "Sound your horn to tell the driver you are there",
          "Stay back and do not move between the truck and the curb",
        ],
        correctIndex: 3,
        explanation:
          "The gap it opens on the right is the space the trailer is about to sweep through. Oregon tells you plainly not to cut in between a large vehicle and the curb or shoulder.",
        context:
          "Large vehicles often need more than one lane to start or finish a turn, so the manual also asks you not to crowd the intersection while one is turning. When a large vehicle is backing it may need to block the street to do it, and you never cross behind one that is backing or preparing to.",
        trap: "The gap looks like an invitation and it is a trap by design. The truck opened it because it needs it.",
        excerptKey: "large-vehicle-turns",
        sourceLabel: "Oregon Driver Manual - Large Vehicles",
        sourceUrl: hb(53),
      },
      {
        id: "or_s4_05",
        topic: "signs",
        question: "A sign shows two lanes becoming one. What does it require?",
        choices: [
          "Vehicles in the ending lane must merge into the through lane",
          "All traffic must stop and take turns",
          "The through lane must yield to the ending lane",
          "Trucks must use the right lane from here",
        ],
        correctIndex: 0,
        explanation:
          "A lane reduction sign warns that the marked lane ends soon, and vehicles in it merge into the lane that continues.",
        context:
          "It is the opposite of an add lane sign, which tells you two roadways are joining and that you do not need to merge at all. The pair are easy to mix up on a test that shows the symbol without words, and the difference is which lane is disappearing.",
        trap: "The through lane is not obliged to open a gap. The duty to merge belongs to the lane that is ending.",
        excerptKey: "lane-reduction-sign",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(11),
      },
      {
        id: "or_s4_06",
        topic: "emergencies",
        question:
          "You are in a collision that does 3,000 dollars of damage to the car you were driving and nobody is hurt. What does Oregon require?",
        choices: [
          "Nothing, since there were no injuries",
          "Notify your insurer within 10 days",
          "File a DMV collision report within 30 days",
          "File a DMV collision report within 72 hours",
        ],
        correctIndex: 3,
        explanation:
          "Damage over 2,500 dollars to the vehicle you were driving triggers a report to DMV within 72 hours, on Form 735-32, injuries or no injuries.",
        context:
          "Injury or death triggers the same report. So does being the owner of a vehicle involved in a reportable collision when the driver fails to file. And a police report does not take the place of yours - the manual says so explicitly, because officers attending a scene lead people to assume the paperwork is handled.",
        trap: "The threshold is on damage, not on injury. A car park scrape that runs past 2,500 dollars is reportable.",
        excerptKey: "collision-report-72-hours",
        sourceLabel: "Oregon Driver Manual - Traffic Collisions",
        sourceUrl: hb(94),
      },
      {
        id: "or_s4_07",
        topic: "rules",
        question: "You realize you have passed your freeway exit. What does Oregon want you to do?",
        choices: [
          "Carry on to the next exit",
          "Back up along the shoulder if the way is clear",
          "Stop on the shoulder and wait for a gap to reverse",
          "Cross the gore markings if no one is behind you",
        ],
        correctIndex: 0,
        explanation:
          "Go to the next exit. Oregon bans stopping or backing up on a freeway outright, and reserves the shoulder for emergencies.",
        context:
          "Leaving a freeway properly means signaling well ahead of time, holding your speed until you are actually off the through lanes, and only then slowing to the ramp's advisory speed. If you find yourself heading the wrong way up a ramp, pull off to the side of the ramp, stop, put the hazard lights on and turn around or back off it carefully.",
        trap: "An empty freeway makes backing up feel harmless. It is the maneuver nobody behind you is looking for.",
        excerptKey: "never-back-up-freeway",
        sourceLabel: "Oregon Driver Manual - Freeway Driving",
        sourceUrl: hb(35),
      },
      {
        id: "or_s4_08",
        topic: "parking",
        question: "Which of these is a place Oregon bans parking outright?",
        choices: [
          "Within 100 feet of a school",
          "On a bridge, an overpass or in a tunnel",
          "On any street with a posted speed above 35 mph",
          "Facing downhill on any grade",
        ],
        correctIndex: 1,
        explanation:
          "Bridges, overpasses and tunnels are on the flat prohibition list, along with the space between the separate roads of a divided highway.",
        context:
          "The full list of places with no parking at all is worth reading as a block: a traffic lane, an intersection, the road side of a parked vehicle, a sidewalk, crosswalk, bicycle lane or path, and railroad or light rail tracks. Separately there are the distance rules - 10 feet from a hydrant, 20 feet from a crosswalk at an intersection, 50 feet from a rail crossing.",
        trap: "Wide shoulders on a bridge look like legal parking. The prohibition is on the structure, not on how much room there is.",
        excerptKey: "no-parking-bridge",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(70),
      },
      {
        id: "or_s4_09",
        topic: "speed",
        question:
          "Traffic on the freeway is flowing at 75 in a 65 zone. What does Oregon expect of you?",
        choices: [
          "Keep pace with traffic, since matching the flow is safest",
          "Drive 65 in the left lane so others can pass on the right",
          "Stay at the posted limit and use the right lane if you are below the flow",
          "Drive halfway between the limit and the flow",
        ],
        correctIndex: 2,
        explanation:
          "The manual asks you to keep pace with traffic but refuses to let that be a reason to exceed the posted limit. If you end up slower than the flow, you belong in the right lane.",
        context:
          "Oregon does not describe the left lane as a passing lane in law, so the rule is about your speed rather than the lane's purpose. A driver going slower than the normal speed of traffic uses the right lane or keeps as far right as practicable, unless preparing to turn left, and pulls off at the first safe place when a queue builds behind them.",
        trap: "Everybody is doing it is not a defense in Oregon. The manual names the temptation and rules it out in the same sentence.",
        excerptKey: "freeway-flow-of-traffic",
        sourceLabel: "Oregon Driver Manual - Freeway Driving",
        sourceUrl: hb(34),
      },
      {
        id: "or_s4_10",
        topic: "signals",
        question: "A row of white triangles is painted across your lane, pointing at you. What is it?",
        choices: [
          "A stop line",
          "A crosswalk approach marking",
          "A speed hump warning",
          "A yield line, marking where you must be ready to give way",
        ],
        correctIndex: 3,
        explanation:
          "That is a yield line. The triangles mark the exact point at which you are required to yield, most often on a roundabout approach.",
        context:
          "Compare it with a stop line, which is a single solid white line across the lane marking where you must stop. Both are white, both are transverse markings, and both are law: you must obey all pavement markings unless a police officer or road worker is directing traffic instead.",
        trap: "Triangles pointing at you look like a warning to slow. They mark a legal obligation to give way, not a suggestion.",
        excerptKey: "yield-line-marking",
        sourceLabel: "Oregon Driver Manual - Pavement Markings",
        sourceUrl: hb(25),
      },
      {
        id: "or_s4_11",
        topic: "safety",
        question:
          "You are driving down a street lined with parked cars. What does the manual tell you to do?",
        choices: [
          "Move away from them within your lane, leaving extra space",
          "Straddle the center line to gain room",
          "Speed up to spend less time alongside them",
          "Sound your horn at intervals",
        ],
        correctIndex: 0,
        explanation:
          "You buy space without leaving your lane. A door can open into your path, and someone can step out from between two parked cars with no warning at all.",
        context:
          "The same chapter tells you to be especially careful in residential areas and near parks, not to drive too close to parked cars that block your view, and to watch when backing into or out of a driveway, because children are unpredictable and may be playing behind the vehicle.",
        trap: "Crossing the center line to make room trades one hazard for a worse one. The space comes from your position inside your own lane.",
        excerptKey: "side-cushion-parked-cars",
        sourceLabel: "Oregon Driver Manual - Maintaining a Space Cushion",
        sourceUrl: hb(28),
      },
      {
        id: "or_s4_12",
        topic: "sharing",
        question:
          "A rider on horseback ahead of you raises a hand as you approach. What does that mean and what do you do?",
        choices: [
          "They are greeting you, so carry on normally",
          "They are turning, so pass on the other side",
          "The animal is frightened, so stop unless stopping would cause a collision",
          "They want you to sound your horn so the horse knows you are there",
        ],
        correctIndex: 2,
        explanation:
          "A raised hand means the animal is frightened. Oregon asks you to stop, unless stopping would itself cause a collision.",
        context:
          "The same applies where it is simply obvious the animal is frightened, whether ridden or led. Horns and other loud, sudden noises near an animal are exactly what the manual tells you to avoid. If you hit and injure a domestic animal you must stop, check on it, and report it to the owner, or to local law enforcement if you cannot find them.",
        trap: "The horn is the instinctive way to announce yourself and the worst possible move here.",
        excerptKey: "animals-horseback",
        sourceLabel: "Oregon Driver Manual - Defensive Driving",
        sourceUrl: hb(75),
      },
      {
        id: "or_s4_13",
        topic: "rules",
        question:
          "You reach a ramp meter at the top of a freeway on-ramp and it is showing no light at all. What do you do?",
        choices: [
          "Stop and wait for it to come on",
          "Treat it as a stop sign and go one at a time",
          "Keep going, a dark ramp meter is not in use",
          "Wait for the vehicle ahead to clear the merge",
        ],
        correctIndex: 2,
        explanation:
          "A dark ramp meter is switched off. The manual says specifically not to stop at one, because stopping on a live on-ramp is a hazard.",
        context:
          "When a meter is running, only one vehicle proceeds each time the green comes on, and once you get your green you accelerate to merge with freeway traffic rather than creeping. It is the one signal in the book where dark means go, which is exactly the opposite of a dark intersection signal.",
        trap: "A dark intersection signal means treat it as an all-way stop. A dark ramp meter means the opposite, and confusing the two puts you stationary at the top of a ramp.",
        excerptKey: "ramp-meters",
        sourceLabel: "Oregon Driver Manual - Freeway Driving",
        sourceUrl: hb(35),
      },
      {
        id: "or_s4_14",
        topic: "licensing",
        question:
          "You are 17 and want to take the knowledge test online at home. What does Oregon require?",
        choices: [
          "Nothing extra, the online test is identical for all ages",
          "A parent must be in the same building",
          "A proctor over 21 must supervise you",
          "You must first fail the test once at a DMV office",
        ],
        correctIndex: 2,
        explanation:
          "Under 18, the online test has to be supervised by a proctor over the age of 21, and one proctor may supervise only two tests in any 24-hour period.",
        context:
          "The online route needs a laptop or desktop with a keyboard, mouse and webcam, not a phone or tablet, and the camera photographs you at the start and at random through the test. You get two attempts in 24 hours and four in total before you have to test at an office. Anything that looks like cheating means a fail and a 90-day wait.",
        trap: "Being watched by a parent under 21 does not satisfy it. The age of the proctor is part of the rule.",
        excerptKey: "online-test-rules",
        sourceLabel: "Oregon Driver Manual - How to Apply",
        sourceUrl: hb(3),
      },
      {
        id: "or_s4_15",
        topic: "impairment",
        question:
          "What does the Oregon manual say about using alcohol and marijuana together?",
        choices: [
          "Marijuana offsets some of the effect of alcohol",
          "Together they can reduce your ability to drive safely",
          "The combination is only a problem above the legal alcohol limit",
          "Marijuana is not covered by Oregon's impaired driving law",
        ],
        correctIndex: 1,
        explanation:
          "The manual treats the combination as its own risk, and its advice is broader still: do not drive after using any drug that affects your reaction time or physical abilities.",
        context:
          "Oregon's DUII law is written around impairment rather than around a list of substances, so it reaches marijuana, prescription medication and over the counter drugs the same way it reaches alcohol. The 0.08 percent figure is only a presumption about alcohol, and an arrest is possible below it.",
        trap: "Legal to buy is not legal to drive on. Oregon's impaired driving law does not care whether the substance was lawfully obtained.",
        excerptKey: "marijuana-impairment",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(82),
      },
      {
        id: "or_s4_16",
        topic: "signs",
        question: "What does a DIVIDED HIGHWAY BEGINS sign tell you?",
        choices: [
          "The road ahead splits into two roadways and you keep right",
          "The road ahead narrows to one lane each way",
          "Passing is permitted for the next mile",
          "A median crossover is available ahead",
        ],
        correctIndex: 0,
        explanation:
          "It marks the point where the road becomes two separate roadways, and the instruction is to keep right.",
        context:
          "Its partner, divided highway ends, warns that the two roadways are about to rejoin and you will be facing oncoming traffic again. A two-way traffic ahead sign says the same thing for a one-way road joining a two-way one. All three matter because a genuine divided highway is also the only place the school bus stopping rule releases the far side of the road.",
        trap: "Divided highway ends is the one to respect. It is the sign that puts oncoming traffic back in front of you.",
        excerptKey: "divided-highway-sign",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(11),
      },
      {
        id: "or_s4_17",
        topic: "rightOfWay",
        question:
          "You and an oncoming driver both face stop signs at a crossroads. You are turning left, they are going straight. Who goes first?",
        choices: [
          "They do, because the left turn yields",
          "You do, because you arrived first",
          "Whoever signals first",
          "You do, because a turning vehicle clears the intersection faster",
        ],
        correctIndex: 0,
        explanation:
          "At two-way stops facing each other, the driver turning left yields to approaching or oncoming traffic going straight.",
        context:
          "It mirrors the rule at a green light, where a left turn yields to oncoming traffic. Arrival order settles a four-way stop, not a two-way one, and where two drivers really do arrive together the manual falls back on courtesy to the driver who stopped first and, when in doubt, yielding to the driver on your right.",
        trap: "Arriving first is the four-way stop rule. Here the movement, not the timing, decides it.",
        excerptKey: "two-way-stop-left-turn",
        sourceLabel: "Oregon Driver Manual - Turns & Intersections",
        sourceUrl: hb(42),
      },
      {
        id: "or_s4_18",
        topic: "safety",
        question:
          "You have driven through deep standing water and your brakes feel weak. What does the manual tell you to do?",
        choices: [
          "Pump the brake pedal hard several times",
          "Drive slowly while gently applying the brakes until they respond",
          "Stop and let them dry before driving on",
          "Use the parking brake until they recover",
        ],
        correctIndex: 1,
        explanation:
          "Light pressure on the brakes while you creep along dries them out. Doing it as soon as possible after the water is the part the manual emphasizes.",
        context:
          "The better answer is not to be there: Oregon tells you not to drive through flooded areas at all, because high water can take away control or stall the engine. On a merely wet road the risks are hydroplaning, which removes steering and braking together, and the slipperiness that peaks near freezing rather than well below it.",
        trap: "Waiting for the brakes to dry on their own leaves you at the next junction with brakes you have not tested.",
        excerptKey: "wet-brakes",
        sourceLabel: "Oregon Driver Manual - Hazardous Conditions",
        sourceUrl: hb(78),
      },
      {
        id: "or_s4_19",
        topic: "rules",
        question:
          "How many trailers may a passenger vehicle tow at once in Oregon?",
        choices: ["One", "Two", "Two, if the second is under 3,000 pounds", "Any number, if the total length is legal"],
        correctIndex: 0,
        explanation:
          "One. Oregon allows a passenger or recreational vehicle to tow a single boat, utility trailer or other vehicle, and a second one is not permitted.",
        context:
          "Riding in a towed trailer is also illegal, with narrow exceptions for a commercial bus trailer, an independently steered trailer and a trailer towed with a fifth wheel. And anyone towing has the same duty as any slow driver: if traffic stacks up behind you, pull off at the first safe turnout.",
        trap: "Double towing is legal in some neighboring states, which is where the habit comes from.",
        excerptKey: "tow-one-trailer",
        sourceLabel: "Oregon Driver Manual - Freeway Driving",
        sourceUrl: hb(36),
      },
      {
        id: "or_s4_20",
        topic: "parking",
        question: "You park facing downhill against a curb. Which way do the front wheels point?",
        choices: [
          "Straight ahead",
          "Toward the travel lane",
          "Toward the curb",
          "It does not matter with the parking brake set",
        ],
        correctIndex: 2,
        explanation:
          "Downhill, the wheels turn toward the curb, so a car that starts to roll forward runs into it instead of into the street.",
        context:
          "Uphill against a curb is the mirror image, wheels toward the travel lane, so the car rolls back into the curb. Where there is no curb the wheels go toward the edge of the road either way. All of it comes after setting the parking brake and leaving the car in park, or in gear for a manual.",
        trap: "Toward the curb is right here and wrong facing uphill. Work out which way gravity will move the car before turning the wheel.",
        excerptKey: "parking-downhill",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(69),
      },
      {
        id: "or_s4_21",
        topic: "sharing",
        question:
          "Someone in a motorized wheelchair is traveling in the bike lane you are about to cross. What is required?",
        choices: [
          "Nothing, bike lanes are for bicycles only",
          "Sound your horn to warn them",
          "Wait until they leave the bike lane entirely",
          "Yield to them as you would to a person riding a bicycle",
        ],
        correctIndex: 3,
        explanation:
          "Motorized wheelchairs, scooters and personal assistive mobility devices may use bike lanes and paths, and you yield to them exactly as you would to someone riding.",
        context:
          "They fall inside Oregon's wider category of vulnerable road users, which also covers pedestrians, people on bicycles and motorcycles, highway workers, and anyone on a skateboard or scooter in a public way, crosswalk or shoulder. The manual's reason is simple: they are hard to see and have no protection in a collision.",
        trap: "Assuming the lane is bicycles only is the error. It changes what you look for when you check it.",
        excerptKey: "mobility-devices",
        sourceLabel: "Oregon Driver Manual - Bicycles",
        sourceUrl: hb(51),
      },
      {
        id: "or_s4_22",
        topic: "emergencies",
        question:
          "Your car dies on a freeway and you get it onto the right shoulder. What does Oregon advise?",
        choices: [
          "Walk to the nearest exit for help",
          "Stand in front of the vehicle so you are visible",
          "Wait in the driver's seat with the door open",
          "Turn on the hazard lights and stay in or near the car on the side away from traffic",
        ],
        correctIndex: 3,
        explanation:
          "Hazard lights on, and stay with the vehicle on the side away from traffic. Walking along a freeway is what the manual calls out as dangerous.",
        context:
          "If your car cannot be seen from 200 feet in each direction you have to warn approaching traffic with flags, flares, signs or signals placed at least 200 feet out each way. A vehicle stopped or parked on a road or shoulder in poor visibility must show parking lights, and if you leave it, the engine goes off, the key comes out and the brakes go on.",
        trap: "Getting out and walking feels like taking action. On a freeway shoulder it puts you in the most dangerous place available.",
        excerptKey: "freeway-vehicle-trouble",
        sourceLabel: "Oregon Driver Manual - Freeway Driving",
        sourceUrl: hb(35),
      },
      {
        id: "or_s4_23",
        topic: "signs",
        question: "A lane is marked with a white diamond and a sign reading HOV 2+. Who may use it?",
        choices: [
          "Any vehicle at off-peak times",
          "Vehicles carrying at least the number of people shown on the sign",
          "Buses and trucks only",
          "Vehicles with a paid electronic pass",
        ],
        correctIndex: 1,
        explanation:
          "A high occupancy vehicle lane is reserved for vehicles carrying at least the number of people the sign states, and a white diamond may be painted in the lane itself.",
        context:
          "It is one of several restricted lanes worth telling apart. A transit only lane, sometimes painted red, is for buses and light rail, and people on bicycles where the sign says so. A separate sign allows you to use a transit lane briefly to turn into a driveway, turn at the next intersection, or pull over to park, always yielding to transit vehicles and bicycles.",
        trap: "The diamond does not mean carpool at rush hour only. The sign states the terms, and the terms are what apply.",
        excerptKey: "hov-sign",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(9),
      },
      {
        id: "or_s4_24",
        topic: "rules",
        question: "You are leaving a freeway by an exit ramp. When should you slow down?",
        choices: [
          "As soon as you see the exit sign",
          "In the through lane, so you can take the ramp gently",
          "Once you are on the ramp itself",
          "Only if the ramp has an advisory speed posted",
        ],
        correctIndex: 2,
        explanation:
          "Hold your speed until you are off the freeway, then slow on the ramp to its advisory speed. Braking in the through lane puts you in the way of everyone still on the freeway.",
        context:
          "Signal well ahead of the exit so the drivers behind you know what you are doing. On the ramp, the advisory speed is the recommended safe speed for that curve, and coming into it too fast is the classic exit ramp collision.",
        trap: "Slowing early feels considerate and is the maneuver that gets you hit from behind at highway speed.",
        excerptKey: "leaving-freeway",
        sourceLabel: "Oregon Driver Manual - Freeway Driving",
        sourceUrl: hb(35),
      },
      {
        id: "or_s4_25",
        topic: "safety",
        question:
          "An oncoming car is drifting across the center line toward you. What does the manual tell you to do?",
        choices: [
          "Pull right, slow down, and warn them with your horn or lights",
          "Move into their lane, since they have moved into yours",
          "Hold your line and brake hard",
          "Accelerate past before they reach you",
        ],
        correctIndex: 0,
        explanation:
          "Right, slower, and make some noise. Oregon specifically warns against steering into the opposing lane, because a driver who wakes up will snap back into it.",
        context:
          "It sits with the other escape techniques the manual teaches: you can usually turn faster than you can stop, so scanning ahead for an escape route matters, and occasionally the right answer is to speed up, when something is about to hit you from the side or behind and there is room in front.",
        trap: "Swapping lanes with the drifting driver is the intuitive dodge and the one that produces a head-on collision.",
        excerptKey: "oncoming-drifting",
        sourceLabel: "Oregon Driver Manual - Defensive Driving",
        sourceUrl: hb(75),
      },
      {
        id: "or_s4_26",
        topic: "speed",
        question: "Two drivers agree to see who is quicker away from a light. What is that in Oregon?",
        choices: [
          "Legal if neither exceeds the speed limit",
          "Illegal only on a public highway with a posted limit",
          "Illegal on any road, as racing",
          "A civil matter unless a collision results",
        ],
        correctIndex: 2,
        explanation:
          "Racing is illegal on any road, and Oregon defines it broadly - any acceleration or speed contest, or an attempt at a speed record.",
        context:
          "It sits inside the wider speed chapter, where the basic rule is the governing idea: your speed must be reasonable and cautious for the conditions, it can never exceed the posted limit, and you can be cited for it even while under the limit. Driving 100 mph or more is a separate specific fine violation with a presumptive fine of 1,150 dollars.",
        trap: "Staying under the limit does not make a contest lawful. The offense is the contest, not the number on the speedometer.",
        excerptKey: "racing-illegal",
        sourceLabel: "Oregon Driver Manual - Speed Regulations",
        sourceUrl: hb(21),
      },
      {
        id: "or_s4_27",
        topic: "licensing",
        question:
          "You are 17, applying for your first Oregon driving privilege, and you left school last year with no diploma. What does Oregon require?",
        choices: [
          "Nothing, school status is not part of the application",
          "A letter from your employer",
          "Proof of enrollment or a diploma or GED certificate",
          "A parent's signature only",
        ],
        correctIndex: 2,
        explanation:
          "Under 18, a parent or guardian must certify that you are enrolled in or attending school. If you have left, you present a high school diploma or a GED certificate instead.",
        context:
          "It sits alongside the other under-18 requirements: hold the instruction permit at least six months, complete 100 hours of supervised driving or 50 with an ODOT-approved course, and pass the drive test unless it is waived. The permit itself is valid for 24 months from issue.",
        trap: "Leaving school does not remove the requirement, it changes which document satisfies it.",
        excerptKey: "school-enrollment",
        sourceLabel: "Oregon Driver Manual - How to Apply",
        sourceUrl: hb(89),
      },
      {
        id: "or_s4_28",
        topic: "sharing",
        question:
          "An automated flagger device in a work zone shows a flashing yellow light with the arm raised. What does it mean?",
        choices: [
          "Stop and wait for a worker",
          "The device has failed, proceed as though it is not there",
          "Stop, then proceed when clear",
          "Proceed with caution",
        ],
        correctIndex: 3,
        explanation:
          "Yellow flashing with the arm up means go, carefully. Red with the arm down means stop, and the two states are read like a signal.",
        context:
          "The wider work zone rules matter more than the device: fines are doubled, the posted temporary limit applies whether or not workers are visible, you are expected to yield to workers, and you should not follow construction vehicles, which may pull onto the road and slow everything behind them.",
        trap: "Yellow is not a warning to stop here. The arm position tells you the state, and up means the way is open.",
        excerptKey: "work-zone-flaggers",
        sourceLabel: "Oregon Driver Manual - Work Zones",
        sourceUrl: hb(59),
      },
      {
        id: "or_s4_29",
        topic: "signals",
        question: "What is a solid white line across your lane at an intersection?",
        choices: [
          "A stop line, marking where you must stop",
          "A lane divider you may not cross",
          "A crosswalk boundary",
          "A marking that traffic is metered ahead",
        ],
        correctIndex: 0,
        explanation:
          "A stop line marks the point at which you are required to stop. Where there is one, it is the legal stopping point at a stop sign or a red light.",
        context:
          "White markings separate traffic going the same direction and mark the right edge of the travel lanes, and they also carry crosswalks, stop lines, symbols and words. A wide solid white line separates bike lanes or channels traffic into turn lanes and may be crossed, though the manual discourages it. A double solid white line may not be crossed at all.",
        trap: "Not every white line is a lane divider. A transverse one across your own lane is an instruction to you.",
        excerptKey: "stop-line-marking",
        sourceLabel: "Oregon Driver Manual - Pavement Markings",
        sourceUrl: hb(25),
      },
      {
        id: "or_s4_30",
        topic: "safety",
        question:
          "You are 19 and want to use your phone for directions while driving in Oregon. What is allowed?",
        choices: [
          "Holding it, provided you are stopped at a red light",
          "Nothing, drivers under 21 may not use a phone at all",
          "Using it with a hands-free accessory that needs only minimal finger use",
          "Holding it as long as you are not typing",
        ],
        correctIndex: 2,
        explanation:
          "At 18 and older Oregon allows a phone through a hands-free accessory, and the accessory may need only minimal use of a finger to switch on or off.",
        context:
          "Under 18 there is no hands-free option at all - the manual's advice is to switch the phone off or put it in the back seat. The statute defines the offense as holding a mobile electronic device in your hand or using one for any purpose while driving, and a hands-free accessory is one that lets you keep both hands on the wheel. It is also illegal to have a television, tablet or other video display visible to the driver.",
        trap: "Under 21 is a real threshold for alcohol and has nothing to do with phones. The phone threshold is 18.",
        excerptKey: "cell-phone-over-18",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(80),
      },
      {
        id: "or_s4_31",
        topic: "rightOfWay",
        question:
          "The light ahead is green but traffic is backed up past the far side of the intersection. What should you do?",
        choices: [
          "Enter and wait, since you have a green",
          "Enter far enough to hold your place in the queue",
          "Stop before the intersection until there is room on the far side",
          "Turn right instead and go around",
        ],
        correctIndex: 2,
        explanation:
          "A green light does not entitle you to block the junction. Oregon says not to enter unless there is room for your vehicle on the other side.",
        context:
          "The same logic runs through the crosswalk rules: no part of your vehicle should overhang a crosswalk when you stop, because it pushes people on foot out into traffic to get around you. A defensive driver also never assumes a stop sign or a signal will actually stop the traffic coming the other way.",
        trap: "Holding your place is the reason people block junctions. The green gives permission to proceed, not permission to stop inside.",
        excerptKey: "dont-block-intersection",
        sourceLabel: "Oregon Driver Manual - Turns & Intersections",
        sourceUrl: hb(42),
      },
      {
        id: "or_s4_32",
        topic: "parking",
        question:
          "You must leave your vehicle unattended on a street. What does Oregon require?",
        choices: [
          "Turn off the engine, remove the key, set the brakes and switch on the hazard lights",
          "Leave the engine running so the lights stay on",
          "Leave a note on the windscreen with your phone number",
          "Turn the wheels toward the curb regardless of the grade",
        ],
        correctIndex: 0,
        explanation:
          "Engine off, key out, brakes set, hazard lights on. All four, and the key matters as much as the brake.",
        context:
          "Parking rules apply whether or not you are in the vehicle, so being present does not excuse a bad spot and leaving does not excuse anything either. In limited visibility a vehicle parked on a road or shoulder must also show parking lights, and one that cannot be seen from 200 feet needs warning devices placed 200 feet out in each direction.",
        trap: "Leaving it running to keep the lights on fails on two counts at once, the engine and the key.",
        excerptKey: "unattended-vehicle",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(71),
      },
      {
        id: "or_s4_33",
        topic: "emergencies",
        question:
          "You hit someone's dog and it is injured. What does Oregon require of you?",
        choices: [
          "Nothing, wildlife and animal strikes are not reportable",
          "Report it to your insurer within 72 hours",
          "Take the animal to the nearest veterinarian yourself",
          "Stop, check on it, and tell the owner, or law enforcement if you cannot find them",
        ],
        correctIndex: 3,
        explanation:
          "You stop and make a reasonable effort to check the injuries, then report to the owner immediately. If you cannot find the owner, you report it to local law enforcement.",
        context:
          "The manual is realistic about what checking can involve, since traffic hazards or a frightened animal may limit what you can safely do. It is the domestic animal version of the rule for an unoccupied parked vehicle, where you look for the owner and leave a note with your name, address and what happened if you cannot find them.",
        trap: "Driving on because the animal ran into the road is the failure. The duty attaches to the collision, not to who caused it.",
        excerptKey: "injured-animal",
        sourceLabel: "Oregon Driver Manual - Defensive Driving",
        sourceUrl: hb(75),
      },
      {
        id: "or_s4_34",
        topic: "impairment",
        question:
          "An adult driver blows 0.06 percent on a breath test. What does Oregon law allow?",
        choices: [
          "Nothing, an arrest requires 0.08 percent or more",
          "An arrest, because impairment can exist below 0.08",
          "A warning only, on a first occasion",
          "An arrest only if a collision has occurred",
        ],
        correctIndex: 1,
        explanation:
          "The 0.08 figure is a presumption of impairment, not a floor for an arrest. Oregon states plainly that you can still be arrested below it.",
        context:
          "At 0.08 percent or more the law presumes an adult driver is impaired, and someone 21 or over fails the test at that point. Under 21 any amount at all fails, because of the zero tolerance law. Driving under the influence of intoxicants is a Class A misdemeanor and applies on any premises open to the public, not only on highways.",
        trap: "Blowing under the limit is not a clean result. The number is a presumption in one direction only.",
        excerptKey: "impaired-bac-008",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(82),
      },
      {
        id: "or_s4_35",
        topic: "sharing",
        question:
          "A vehicle ahead displays a reflective triangle with a red border and a fluorescent orange center. What is it telling you?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle is a pilot car for an oversize load",
          "The vehicle is slow moving, so be ready to slow or move over",
          "The vehicle is disabled and being towed",
        ],
        correctIndex: 2,
        explanation:
          "It is the slow moving vehicle emblem, required on farm equipment and similar vehicles using a public highway. It means the vehicle ahead is traveling well below normal traffic speed.",
        context:
          "A pilot vehicle is a different thing again: a specially marked vehicle leading or following something carrying an especially large load. And a red flag 12 inches square hanging off the back of a vehicle means the load extends 4 feet or more past the rear.",
        trap: "The closing speed is the danger. You can be doing 55 toward a tractor doing 15 and have far less time than the gap suggests.",
        excerptKey: "slow-moving-emblem",
        sourceLabel: "Oregon Driver Manual - Other Vehicles",
        sourceUrl: hb(56),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The rules Oregon learners report getting wrong: exact distances and dollar figures, the bike lane and roundabout rules that other states do not have, the left turn on red that catches out visitors, and the speed rules that have nothing to do with the number on the sign.",
    questions: [
      {
        id: "or_s5_01",
        topic: "speed",
        question:
          "You are on a paved rural back road in Oregon with no speed limit sign anywhere. What is the limit?",
        choices: [
          "There is none, so the basic rule alone applies",
          "45 mph",
          "55 mph",
          "65 mph",
        ],
        correctIndex: 2,
        explanation:
          "Fifty-five is the statutory fall-back for any location that fits none of the other descriptions. It applies whether or not a sign is posted.",
        context:
          "The full ladder set in law is 15 mph in alleys and narrow residential roadways, 20 mph in a business district and in school speed zones, 25 mph in residential districts, public parks and on ocean shores, and 55 mph everywhere else. The basic rule sits on top of all of it and can make a slower speed the lawful one, but it never raises the ceiling.",
        trap: "No sign does not mean no limit, and it does not mean the basic rule is the only test. There is a number, and 55 is it.",
        excerptKey: "ors-speed-default-55",
        sourceLabel: "Oregon Revised Statutes 811.111 - Violating a speed limit",
        sourceUrl: ors("811"),
        commonlyMissed: true,
      },
      {
        id: "or_s5_02",
        topic: "rules",
        question:
          "You are driving at the speed limit on a two-lane highway and a queue of cars has built up behind you. What does Oregon expect?",
        choices: [
          "Nothing, you are at the legal limit",
          "Pull off at the first safe area and let them pass",
          "Speed up until the queue disperses",
          "Move left so they can pass on the right",
        ],
        correctIndex: 1,
        explanation:
          "Oregon puts the duty on the slower driver to watch for congestion behind them and pull off at the first safe area, and being at the posted limit does not remove it.",
        context:
          "There is a separate rule about lane position: a driver going slower than the normal speed of traffic uses the right lane, or keeps as close to the right edge as practicable, unless they are preparing to turn left. The manual never describes the left lane as reserved for passing, so the obligation is framed around your speed relative to traffic rather than around which lane you are in.",
        trap: "Drivers argue that the limit settles it. The manual asks a different question - whether traffic is stacking up behind you - and answers it with a duty to get out of the way.",
        excerptKey: "slow-drivers-pull-off",
        sourceLabel: "Oregon Driver Manual - Speed Regulations",
        sourceUrl: hb(21),
        commonlyMissed: true,
      },
      {
        id: "or_s5_03",
        topic: "parking",
        question:
          "How close to a fire station driveway may you park on the opposite side of the street?",
        choices: [
          "15 feet",
          "30 feet",
          "50 feet",
          "75 feet",
        ],
        correctIndex: 3,
        explanation:
          "Seventy-five feet on the opposite side, against 15 feet on the same side. The larger distance exists because engines swing wide coming out.",
        context:
          "It joins the other parking distances that Oregon expects you to know as numbers: 10 feet from a hydrant, 20 feet from a crosswalk at an intersection, 50 feet from the nearest rail of a crossing, and 50 feet from a signal or sign your vehicle would hide from view.",
        trap: "Fifteen feet is the right answer for the same side of the street, and it is the number people give for both.",
        excerptKey: "no-parking-fire-station",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(71),
        commonlyMissed: true,
      },
      {
        id: "or_s5_04",
        topic: "licensing",
        question: "How long is an Oregon Class C instruction permit valid?",
        choices: [
          "6 months",
          "12 months",
          "18 months",
          "24 months",
        ],
        correctIndex: 3,
        explanation:
          "Twenty-four months from the date it is issued. That is the outer limit, not the waiting period before you can be licensed.",
        context:
          "The six-month figure people confuse it with is the minimum time an under-18 applicant must have held the permit before a license can be issued. The permit also requires the accompanying driver to be in the seat beside you, and that person must be at least 21 with at least three years of valid driving privileges.",
        trap: "Six months is a floor and 24 months is a ceiling. Mixing them up in either direction produces the wrong answer.",
        excerptKey: "ors-permit-24-months",
        sourceLabel: "Oregon Revised Statutes 807.280 - Instruction driver permit",
        sourceUrl: ors("807"),
      },
      {
        id: "or_s5_05",
        topic: "sharing",
        question:
          "You are approaching a right turn and there is a bike lane between you and the curb. What does Oregon require?",
        choices: [
          "Merge into the bike lane before the turn, as you would a turn lane",
          "Stay out of the bike lane, then turn across it after yielding",
          "Straddle the bike lane line through the turn",
          "Signal and turn from the bike lane if it is empty",
        ],
        correctIndex: 1,
        explanation:
          "Oregon specifically forbids moving into a bike lane to prepare for a turn. You stay in the travel lane, yield to anyone riding, and cross the bike lane as part of the turn itself.",
        context:
          "You may cross a bike lane to turn or to enter or leave an alley, driveway or private road, and that is the only lawful reason to be in one. Before you cross it you must yield to people riding in the lane, and to people riding on the sidewalk you are about to cut across.",
        trap: "Several states require exactly the opposite maneuver, merging into the bike lane before turning. Oregon rules it out by name, so drivers from elsewhere fail on it.",
        excerptKey: "bike-lane-not-for-turn-prep",
        sourceLabel: "Oregon Driver Manual - Bicycles",
        sourceUrl: hb(50),
        commonlyMissed: true,
      },
      {
        id: "or_s5_06",
        topic: "rightOfWay",
        question:
          "You are turning at an intersection with no traffic signal and someone is crossing. When may you begin the turn?",
        choices: [
          "Once they are six feet clear of your lane",
          "Once they have stepped off the crosswalk on your side",
          "Once they are past the lane you are turning into and the next lane as well",
          "Once they have passed the center line of the road",
        ],
        correctIndex: 2,
        explanation:
          "Without a signal, the clearance is a lane wider. They must be past the lane you are turning into, plus the lane after it, before you go.",
        context:
          "The six feet version belongs to a signaled intersection. Both rules sit on top of the basic duty to stop and remain stopped for a pedestrian crossing in your lane, in the lane next to yours including a bike lane, or in the lane you are turning into.",
        trap: "The two clearances are easy to swap. Six feet at a signal, a whole extra lane where there is none.",
        excerptKey: "ped-no-signal-turn",
        sourceLabel: "Oregon Driver Manual - Pedestrians",
        sourceUrl: hb(47),
        commonlyMissed: true,
      },
      {
        id: "or_s5_07",
        topic: "impairment",
        question:
          "An adult takes a breath test and fails it at 0.09 percent. How long is the suspension for the failed test itself?",
        choices: [
          "30 days",
          "60 days",
          "90 days",
          "One year",
        ],
        correctIndex: 2,
        explanation:
          "Ninety days for failing the test, where no other factor increases it. Refusing the test instead costs a year.",
        context:
          "That is the administrative suspension, separate from what a court does with the criminal charge. Driving under the influence of intoxicants is a Class A misdemeanor in Oregon, and applies on any premises open to the public rather than just on highways. Refusal also carries a presumptive fine of 650 dollars.",
        trap: "One year is the refusal figure. Taking the test and failing costs a quarter of that.",
        excerptKey: "ors-fail-test-90-days",
        sourceLabel: "Oregon Revised Statutes 813.420 - Duration of suspension",
        sourceUrl: ors("813"),
      },
      {
        id: "or_s5_08",
        topic: "signals",
        question:
          "You are on a two-way street at a red light and want to turn left onto a one-way street. What does Oregon allow?",
        choices: [
          "Nothing, left on red requires a one-way street to start from",
          "The turn, without stopping, if the way is clear",
          "The turn only where a sign permits it",
          "The turn, after stopping and yielding to traffic and pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "Oregon allows it. Turning from a two-way road onto a one-way road, right or left, may be made against a red after stopping and yielding.",
        context:
          "The road you enter is what decides it. Entering a one-way road you may turn right or left on red in the direction its traffic flows. Entering a two-way road you may only turn right. That is why a left on red from a one-way onto a two-way is never permitted, whichever street you started on.",
        trap: "Most drivers believe left on red only works one-way onto one-way. That is the narrower rule other states use, and Oregon's is wider.",
        excerptKey: "two-way-to-one-way",
        sourceLabel: "Oregon Driver Manual - Turns",
        sourceUrl: hb(40),
        commonlyMissed: true,
      },
      {
        id: "or_s5_09",
        topic: "parking",
        question:
          "Your parked car would hide a stop sign from approaching drivers. How far away must you park?",
        choices: [
          "At least 50 feet",
          "At least 20 feet",
          "At least 30 feet",
          "There is no distance, as long as some of the sign is visible",
        ],
        correctIndex: 0,
        explanation:
          "Fifty feet from a traffic signal or sign, when your vehicle would hide it from view. The trigger is the obstruction, not the sign itself.",
        context:
          "Read it beside the other 50-foot rule, which bans parking within 50 feet of the nearest rail of a railroad or light rail crossing. Both are longer than people guess. The shorter distances are 10 feet from a hydrant, 15 feet from a fire station driveway on your side and 20 feet from a crosswalk at an intersection.",
        trap: "Parking a car length from a sign feels generous and is a quarter of the distance the rule asks for.",
        excerptKey: "no-parking-signal",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(71),
      },
      {
        id: "or_s5_10",
        topic: "speed",
        question:
          "A school speed limit sign reads SCHOOL HOURS. When does the 20 mph limit apply?",
        choices: [
          "Only while a yellow light on the sign is flashing",
          "Between 7 a.m. and 5 p.m. on a day school is in session",
          "Between 8 a.m. and 4 p.m. every day of the year",
          "Only when children are visible in the zone",
        ],
        correctIndex: 1,
        explanation:
          "The school hours sign means 7 a.m. to 5 p.m. on a school day. That is a longer window than most people assume, and it does not depend on seeing any children.",
        context:
          "The other sign is different: a school speed sign with a flashing yellow light means the limit applies right now, because the light flashes while children are arriving or leaving. The manual's advice when you cannot tell whether it is a school day is simply to slow to 20.",
        trap: "Children present is a defined term in Oregon and it belongs to the crosswalk rules, not to the school hours sign. The hours sign runs on the clock and the calendar.",
        excerptKey: "school-hours-sign",
        sourceLabel: "Oregon Driver Manual - School Zones",
        sourceUrl: hb(49),
        commonlyMissed: true,
      },
      {
        id: "or_s5_11",
        topic: "safety",
        question:
          "You are following another vehicle at night with your high beams on. At what distance must you dim them?",
        choices: [
          "200 feet",
          "350 feet",
          "500 feet",
          "1,000 feet",
        ],
        correctIndex: 1,
        explanation:
          "Three hundred and fifty feet when you are following. The distance for an oncoming vehicle is longer, at 500 feet.",
        context:
          "Two numbers, two situations, and the reason they differ is where the light lands: oncoming drivers take it straight in the eyes, so they get more warning. Whenever you are required to dim, fog lights and other auxiliary lights must go off too. Headlights themselves are required from sunset to sunrise and whenever you cannot see 1,000 feet ahead.",
        trap: "Five hundred feet is the oncoming figure and the one people remember. Following is the shorter of the two.",
        excerptKey: "dim-high-beams",
        sourceLabel: "Oregon Driver Manual - Hazardous Conditions",
        sourceUrl: hb(76),
        commonlyMissed: true,
      },
      {
        id: "or_s5_12",
        topic: "rules",
        question:
          "In a no-passing zone, when may you cross the center line at all?",
        choices: [
          "When the vehicle ahead is going less than half the speed limit",
          "When you can see far enough ahead to complete the maneuver",
          "When the right side of the road is blocked, or you are turning left",
          "Never, for any reason",
        ],
        correctIndex: 2,
        explanation:
          "Two reasons only. An obstruction blocking the right side of the road, or a left turn. Overtaking is not one of them, however clear the road looks.",
        context:
          "If you do cross to the left of center for either reason, you yield to oncoming traffic while you are over there. The manual's list of places you cannot pass regardless of markings is worth memorizing alongside it: approaching or in an intersection or railroad crossing, behind a vehicle stopped at a crosswalk, and anywhere your view of oncoming traffic is limited.",
        trap: "Good visibility is not one of the two exceptions. The zone exists because of what you cannot see further on.",
        excerptKey: "cross-center-exception",
        sourceLabel: "Oregon Driver Manual - Passing",
        sourceUrl: hb(32),
      },
      {
        id: "or_s5_13",
        topic: "emergencies",
        question:
          "A police officer pulls you over at night. What does the Oregon manual tell you to do?",
        choices: [
          "Get out and walk back to the patrol car",
          "Pull into the center median so traffic can pass on both sides",
          "Pull right, stop, switch off the engine, and stay in the vehicle with hands on the wheel",
          "Keep the engine running in case you are told to move on",
        ],
        correctIndex: 2,
        explanation:
          "Right, stopped, engine off, and you stay put. Hands on the steering wheel, passengers' hands in plain view, and at night the interior light on before the officer reaches you.",
        context:
          "Two specific things are ruled out: stopping in an intersection, and pulling into the center median of a highway. You do not get out unless you are asked to. The same chapter carries the rules for emergency vehicles, where you pull as close to the right as you safely can, stop, and stay stopped until they pass or an officer tells you to move.",
        trap: "Getting out to meet the officer looks cooperative and is exactly what the manual tells you not to do.",
        excerptKey: "police-stop",
        sourceLabel: "Oregon Driver Manual - Emergency Vehicles",
        sourceUrl: hb(58),
      },
      {
        id: "or_s5_14",
        topic: "sharing",
        question:
          "You are in a two-lane roundabout beside a truck that is straddling both lanes. What does Oregon say?",
        choices: [
          "Hold your lane, since the truck is in the wrong",
          "It is illegal to pass or drive beside a truck within a roundabout",
          "Sound your horn and hold position",
          "Move ahead of it quickly to clear the space",
        ],
        correctIndex: 1,
        explanation:
          "Trucks need both lanes to get around, and Oregon makes it illegal to pass or drive alongside one inside a roundabout.",
        context:
          "The general rule is not to overtake anything inside a roundabout, and there is a matching rule for bicycles: a rider who has merged into traffic gets the full lane and you do not pass them in the roundabout. Choose your lane from the signs before you enter, hold it all the way round, and signal right as you exit.",
        trap: "Being in your own marked lane is not a defense. The prohibition is on being beside the truck at all.",
        excerptKey: "roundabout-do-not-pass",
        sourceLabel: "Oregon Driver Manual - Roundabouts",
        sourceUrl: hb(44),
        commonlyMissed: true,
      },
      {
        id: "or_s5_15",
        topic: "signs",
        question:
          "A small white sign under a stop sign reads RIGHT TURN PERMITTED WITHOUT STOPPING. What does it mean?",
        choices: [
          "Right turns may be made without stopping, while other traffic still stops",
          "Right turns are banned at this intersection",
          "Right turns require a stop but no yield",
          "Everyone may proceed without stopping when the way is clear",
        ],
        correctIndex: 0,
        explanation:
          "It carves right-turning traffic out of the stop requirement at that intersection. Everyone else still stops and yields.",
        context:
          "It is a good example of Oregon posting an exception rather than a rule, and of why you read the whole sign assembly rather than the biggest sign in it. The same habit applies at railroad crossbucks, where the yield or stop sign beneath the crossbuck is the actual instruction.",
        trap: "The sign lifts the stop for one movement only. Reading it as a general release turns a stop sign into nothing.",
        excerptKey: "right-turn-without-stopping",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(8),
      },
      {
        id: "or_s5_16",
        topic: "rules",
        question:
          "A driver behind you wants to pass and you can see the road is clear ahead. May you flash your lights to wave them through?",
        choices: [
          "Yes, it is standard courtesy on rural highways",
          "Yes, provided you use the hazard lights rather than the headlights",
          "Only at night, when a hand signal would not be seen",
          "No, the law prohibits signaling other drivers when to pass",
        ],
        correctIndex: 3,
        explanation:
          "Oregon bans it outright. You may not use your hands or your lights to tell another driver when to pass, because you are taking responsibility for a judgement you cannot actually make.",
        context:
          "What you may do when someone starts to pass you is stay right, keep an eye on oncoming traffic, and adjust your speed so they can get back into the right lane as soon as possible. Helping them complete the pass is encouraged. Telling them to start one is not.",
        trap: "The flash-to-pass habit is common and it is specifically prohibited here, not merely discouraged.",
        excerptKey: "no-flash-to-pass",
        sourceLabel: "Oregon Driver Manual - Passing",
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "or_s5_17",
        topic: "licensing",
        question:
          "You are 16 with a provisional license issued three months ago. Your shift ends at 12.30 a.m. Can you drive home?",
        choices: [
          "Yes, driving between home and work is one of the exceptions",
          "No, the night restriction has no exceptions",
          "Yes, but only if a parent is in the vehicle",
          "No, unless you carry a letter from your employer",
        ],
        correctIndex: 0,
        explanation:
          "The midnight to 5 a.m. restriction is real but it lists exceptions, and traveling between home and your place of employment is one of them.",
        context:
          "The other exceptions are driving for employment purposes, driving between home and a school event for which no other transport is available, and being accompanied by a licensed driver at least 25 years old. The restriction runs for the first year after the license is issued, and it does not apply to a provisional holder who is 18 or older.",
        trap: "The restriction is often taught as absolute. Learning the exceptions is what turns a wrong answer into a right one.",
        excerptKey: "ors-provisional-night-exceptions",
        sourceLabel: "Oregon Revised Statutes 807.122 - Provisional license restrictions",
        sourceUrl: ors("807"),
        commonlyMissed: true,
      },
      {
        id: "or_s5_18",
        topic: "impairment",
        question:
          "You are 22 and take a breath test. At what reading do you fail it under Oregon law?",
        choices: [
          "0.02 percent",
          "0.05 percent",
          "0.08 percent",
          "0.10 percent",
        ],
        correctIndex: 2,
        explanation:
          "At 21 or over, the failing figure is 0.08 percent or more. It is a threshold for failing the test, not a safe level to drive at.",
        context:
          "Under 21 the answer is different and simpler: any amount at all fails, under Oregon's zero tolerance law. And 0.08 does not work as a floor for arrest either, since an adult can be arrested below it if the driving shows impairment, and the DUII law reaches any impairing substance.",
        trap: "Reading 0.08 as permission to drink up to it is the misunderstanding the manual works hardest against.",
        excerptKey: "over-21-fail-008",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(83),
      },
      {
        id: "or_s5_19",
        topic: "speed",
        question:
          "You are driving 40 mph in a 55 zone in heavy fog and are stopped by police. Can you be cited?",
        choices: [
          "No, you were well under the posted limit",
          "Only if you were causing an obstruction",
          "Yes, if 40 was unsafe for the conditions",
          "No, unless a variable speed sign was displayed",
        ],
        correctIndex: 2,
        explanation:
          "Driving at a speed that is unsafe for existing conditions violates the basic rule, in any area and at any time, even when you are below the posted limit.",
        context:
          "The rule cuts one way only. It can make a slower speed the lawful one, and it never permits you to exceed the posted limit however good the conditions are. The same principle is how advisory speed signs are enforced: they are not limits, but police can act on them through the basic rule.",
        trap: "Under the limit is not the same as legal. The sign assumes good conditions and the basic rule is what deals with bad ones.",
        excerptKey: "basic-rule-slower",
        sourceLabel: "Oregon Driver Manual - Speed Regulations",
        sourceUrl: hb(21),
        commonlyMissed: true,
      },
      {
        id: "or_s5_20",
        topic: "parking",
        question:
          "You park on a hill on a road that has no curb at all. Which way do the front wheels go?",
        choices: [
          "Straight ahead",
          "Toward the edge of the road",
          "Toward the center line",
          "Whichever way is downhill",
        ],
        correctIndex: 1,
        explanation:
          "With no curb, the wheels point toward the edge of the road, whether you are facing uphill or downhill. There is nothing to catch the tire, so the aim is to send the car off the road rather than across it.",
        context:
          "The curbed cases are the ones with two answers: uphill against a curb, wheels toward the travel lane; downhill against a curb, wheels toward the curb. Every version starts the same way, with the parking brake set and the vehicle in park, or in gear for a manual.",
        trap: "People carry the uphill and downhill distinction over to a road with no curb, where the answer is the same in both directions.",
        excerptKey: "parking-no-curb",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(69),
      },
      {
        id: "or_s5_21",
        topic: "rules",
        question: "When may you use hand and arm signals instead of your turn signals in Oregon?",
        choices: [
          "In daylight, when you can see people and vehicles 1,000 feet away",
          "Any time your signal lights have failed",
          "At night, if you also use your hazard lights",
          "In any conditions, since hand signals are always valid",
        ],
        correctIndex: 0,
        explanation:
          "Daylight only, and only where visibility reaches 1,000 feet. At night or in poor visibility you must use the signal lights.",
        context:
          "Hand signals are also ruled out from a wide or long vehicle at any time, since the arm cannot be seen from behind. The distance rules for signaling stay the same either way: at least 100 feet before a turn or lane change while moving, and long enough to be noticed when pulling away from a curb.",
        trap: "Broken bulbs are not an exemption. If it is dark, the lights are the only lawful signal, which makes them a repair job rather than a workaround.",
        excerptKey: "hand-signals-1000-feet",
        sourceLabel: "Oregon Driver Manual - Turn Signals",
        sourceUrl: hb(38),
      },
      {
        id: "or_s5_22",
        topic: "rightOfWay",
        question:
          "A pedestrian is in the crosswalk on the far side of a safety island from you. What must you do?",
        choices: [
          "Stop and wait until they have crossed the entire road",
          "Stop only when they step off the island",
          "You are not required to stop",
          "Stop, because the crosswalk is a single unit",
        ],
        correctIndex: 2,
        explanation:
          "The safety island splits the crossing. Oregon states directly that you are not required to stop when the pedestrian is in the crosswalk on the other side of one.",
        context:
          "It is the one carve-out in a rule that is otherwise wide: normally you stop and remain stopped for a person crossing in your lane, in the lane next to yours including a bike lane, or in the lane you are turning into. Failing to stop and remain stopped is a Class B traffic violation.",
        trap: "This is the rare case where the answer is drive on, so people over-apply the stopping rule and get it wrong in the other direction.",
        excerptKey: "safety-island-exception",
        sourceLabel: "Oregon Driver Manual - Pedestrians",
        sourceUrl: hb(47),
        commonlyMissed: true,
      },
      {
        id: "or_s5_23",
        topic: "sharing",
        question:
          "Your 16-year-old cousin wants to ride in the bed of your pickup for a short trip. What does Oregon law say?",
        choices: [
          "It is allowed on roads posted at 35 mph or less",
          "It is allowed if they are seated on the floor of the bed",
          "It is allowed with a parent's permission",
          "It is prohibited for anyone under 18",
        ],
        correctIndex: 3,
        explanation:
          "Oregon bans anyone under 18 from riding on the hood, fender, running board or any other external part of a vehicle, and the pickup bed is named.",
        context:
          "The same chapter covers a related load rule: a dog may not be carried on an external part of a vehicle, pickup bed included, unless a framework, carrier or other device keeps it from falling out. Riding in a towed trailer is separately illegal except for a commercial bus trailer, an independently steered trailer, or one towed with a fifth wheel.",
        trap: "Slow speeds and short trips are the usual justification and neither appears anywhere in the rule.",
        excerptKey: "external-passengers",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(84),
      },
      {
        id: "or_s5_24",
        topic: "signs",
        question:
          "A painted median ahead of you is filled with yellow diagonal stripes. What do they mean?",
        choices: [
          "You may use the area to wait for a gap before turning left",
          "It is illegal to drive in or turn across the striped area",
          "The area is a bus stop",
          "The area is a passing lane for either direction",
        ],
        correctIndex: 1,
        explanation:
          "Yellow diagonal stripes mark a fixed object ahead or an area where vehicles are not allowed. Driving in the striped area or turning across it is illegal.",
        context:
          "It is the strictest of three similar-looking markings. A two-way left turn lane, with a broken yellow line inside a solid one, is entered shortly before a turn and never travelled along. A plain painted median may be crossed for a left turn but not used as a turn lane. Striped areas allow neither.",
        trap: "All three are yellow paint in the middle of the road and they permit three different things. The stripes are the one that permits nothing.",
        excerptKey: "yellow-diagonal-stripes",
        sourceLabel: "Oregon Driver Manual - Pavement Markings",
        sourceUrl: hb(23),
        commonlyMissed: true,
      },
      {
        id: "or_s5_25",
        topic: "safety",
        question: "When are studded tires generally allowed on Oregon roads?",
        choices: [
          "October 1 through April 30",
          "November 1 through March 31",
          "December 1 through February 28",
          "At any time between the first and last snowfall",
        ],
        correctIndex: 1,
        explanation:
          "November 1 through March 31 is the season. Outside that window studded tires are generally not allowed, because of the damage they do to the road surface.",
        context:
          "The manual would rather you used something else even in season, and points you at chains or other traction tires. Traction tires are studded tires, retractable studded tires, or tires the industry certifies for severe snow, marked with a mountain and snowflake emblem on the sidewall. Chains are link chains, cable chains or any similar device fitted to increase traction on snow and ice.",
        trap: "The season is a calendar, not a weather report. An early snow in October does not open it.",
        excerptKey: "studded-tires-season",
        sourceLabel: "Oregon Driver Manual - Hazardous Conditions",
        sourceUrl: hb(79),
        commonlyMissed: true,
      },
      {
        id: "or_s5_26",
        topic: "signals",
        question:
          "You are first in line at a red light behind a green bike box and want to turn right. What may you do?",
        choices: [
          "Turn right on red after stopping, as usual",
          "Pull into the box, then turn on red",
          "Wait for green, then signal and yield to riders on your right before turning",
          "Turn on red only if no bicycle is visible behind you",
        ],
        correctIndex: 2,
        explanation:
          "Right turns on red are not allowed at bike box intersections. You wait for the green, signal, and yield to anyone riding on your right before you cross their path.",
        context:
          "The box itself is the space in front of you at the stop line, and you stop behind it rather than inside it so riders can move ahead of you where the driver in front can see them. The whole design assumes a driver who turns right after checking their right side, which is why the red turn is switched off.",
        trap: "Checking your mirror and seeing nothing is what the box is designed to correct, because a rider can arrive in the seconds you sit at the light.",
        excerptKey: "bike-box-no-right-on-red",
        sourceLabel: "Oregon Driver Manual - Bicycles",
        sourceUrl: hb(51),
        commonlyMissed: true,
      },
      {
        id: "or_s5_27",
        topic: "rules",
        question:
          "A road has a painted median down the middle. May you drive along it to reach a left turn further ahead?",
        choices: [
          "Yes, if you signal and stay within the paint",
          "No, a painted median may not be used as a turn lane",
          "Yes, for up to 100 feet before the turn",
          "Yes, when the through lanes are congested",
        ],
        correctIndex: 1,
        explanation:
          "You may turn left across a painted median once oncoming traffic clears, but you may not use it as a turn lane, and traveling in a median marked with double yellow lines is illegal.",
        context:
          "A two-way left turn lane is the marking that does allow you to wait in it, and even there you enter just before your turn rather than traveling along it. Getting the two confused matters beyond the ticket - a painted median is also not a divider for the school bus rule, so a bus flashing red across one stops every lane in both directions.",
        trap: "The paint looks like a lane and behaves like one only in the moment you cross it.",
        excerptKey: "painted-median",
        sourceLabel: "Oregon Driver Manual - Pavement Markings",
        sourceUrl: hb(23),
        commonlyMissed: true,
      },
      {
        id: "or_s5_28",
        topic: "licensing",
        question:
          "You are caught with your phone out during the knowledge test. What happens?",
        choices: [
          "You are warned and allowed to continue",
          "You must restart the test from the beginning",
          "You fail and cannot test again for 90 days",
          "You fail and may retest the same day",
        ],
        correctIndex: 2,
        explanation:
          "Cheating means a failed test and a 90-day ban on testing again. Phone use is on the list by name.",
        context:
          "So are talking, writing or taking notes, operating any electronic device, and letting someone take the test for you. An ordinary failure carries nothing like this - you may retest the same day at an office, subject to capacity, or twice in 24 hours online up to four attempts total.",
        trap: "The 90-day wait belongs to cheating alone. Failing honestly costs you the fee and the afternoon.",
        excerptKey: "test-cheating",
        sourceLabel: "Oregon Driver Manual - How to Apply",
        sourceUrl: hb(2),
      },
      {
        id: "or_s5_29",
        topic: "emergencies",
        question:
          "Police attended your collision and filed their own report. What does that do to your obligation?",
        choices: [
          "It satisfies the requirement, no further filing is needed",
          "It extends your deadline to 30 days",
          "It replaces the report only when there are no injuries",
          "Nothing, you must still file your own report with DMV",
        ],
        correctIndex: 3,
        explanation:
          "A police report does not replace yours. Oregon says so directly, and the DMV report is still due within 72 hours.",
        context:
          "The triggers are damage over 2,500 dollars to the vehicle you were driving, or injury or death. Form 735-32 is the one to file. The vehicle's owner also has to file if the driver does not. Failing to report a collision is one of the named reasons Oregon takes driving privileges away.",
        trap: "Seeing an officer write everything down is exactly why people miss this filing.",
        excerptKey: "police-report-not-enough",
        sourceLabel: "Oregon Driver Manual - Traffic Collisions",
        sourceUrl: hb(94),
        commonlyMissed: true,
      },
      {
        id: "or_s5_30",
        topic: "safety",
        question: "How loud may your sound system legally be in Oregon?",
        choices: [
          "Not audible 50 feet from the vehicle",
          "Not audible 25 feet from the vehicle",
          "Not audible 100 feet from the vehicle",
          "There is no limit if the windows are closed",
        ],
        correctIndex: 0,
        explanation:
          "Fifty feet is the line. If your radio can be heard from that far away it is illegal, and the reason given is hearing rather than nuisance.",
        context:
          "The manual explains that you need to be able to hear horns, screeching tires and sirens. It sits alongside the other rules about what a driver may not do: no phone at all under 18, hands-free only above it, no video display visible from the driver's seat, and nothing held in your lap or arms.",
        trap: "Closed windows do not settle it. The test is what someone standing 50 feet away can hear.",
        excerptKey: "loud-radio-50-feet",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(80),
      },
      {
        id: "or_s5_31",
        topic: "speed",
        question:
          "Oregon sets a specific presumptive fine for driving at 100 mph or more. What is it?",
        choices: [
          "440 dollars",
          "650 dollars",
          "1,150 dollars",
          "2,000 dollars",
        ],
        correctIndex: 2,
        explanation:
          "One thousand, one hundred and fifty dollars is the presumptive fine, and driving at 100 mph or more is treated as a specific fine traffic violation.",
        context:
          "Ordinary speeding is graded instead: 1 to 10 over is Class D, 11 to 20 over is Class C, 21 to 30 over is Class B, and more than 30 over is Class A. Fines are doubled in work zones. Oregon learners report that the knowledge test asks about dollar figures more than most, which is why the numbers are worth reading.",
        trap: "The 650 dollar figure is real and belongs to refusing a breath test, not to speeding.",
        excerptKey: "ors-100-mph",
        sourceLabel: "Oregon Revised Statutes 811.109 - Speeding fines",
        sourceUrl: ors("811"),
        commonlyMissed: true,
      },
      {
        id: "or_s5_32",
        topic: "sharing",
        question:
          "How does the stopping distance of a large truck compare with a car at the same speed?",
        choices: [
          "About the same, because of better brakes",
          "About three times as far",
          "About half as far again",
          "About twice as far",
        ],
        correctIndex: 1,
        explanation:
          "About three times the distance. That is the reason for every other rule about large vehicles, from not cutting in front of one to not sitting in its rear blind spot.",
        context:
          "Before you pull back in front of a truck you should be able to see its entire front end in your rearview mirror. Do not pull up too close behind a stopped one either, since it may roll back slightly when it starts. And do not sit alongside during a pass, because the side blind spots are longer than a car's.",
        trap: "Cutting in and then braking is what turns the three-times figure into a collision, and it is the most common way drivers use up a truck's stopping distance for it.",
        excerptKey: "large-vehicle-stopping",
        sourceLabel: "Oregon Driver Manual - Large Vehicles",
        sourceUrl: hb(53),
      },
      {
        id: "or_s5_33",
        topic: "rules",
        question:
          "May passengers ride inside a travel trailer you are towing on an Oregon highway?",
        choices: [
          "No, except for a few specific trailer types",
          "Yes, if they wear seat belts",
          "Yes, on roads posted below 45 mph",
          "Yes, if an adult rides with them",
        ],
        correctIndex: 0,
        explanation:
          "It is against the law, with narrow exceptions for a commercial bus trailer, an independently steered trailer, and a trailer towed with a fifth wheel device.",
        context:
          "It sits with the other towing limits: one trailer only behind a passenger or recreational vehicle, and a duty to pull off at the first safe turnout when traffic stacks up behind you. Under-18 passengers are separately banned from riding on any external part of a vehicle, pickup beds included.",
        trap: "A fifth wheel exception exists and it is about how the trailer is coupled, not about how big or comfortable it is.",
        excerptKey: "trailer-passengers",
        sourceLabel: "Oregon Driver Manual - Freeway Driving",
        sourceUrl: hb(36),
      },
      {
        id: "or_s5_34",
        topic: "parking",
        question:
          "You are parking on a street with streetcar tracks and there is a solid white line beside the parking area. Where do you park?",
        choices: [
          "Straddling the line, so you are clear of traffic",
          "On the track side of the line if no streetcar is due",
          "Anywhere, since the line is advisory",
          "Behind the solid white line, away from the track",
        ],
        correctIndex: 3,
        explanation:
          "The white line separates the parking area from the track and you park behind it. Where there is no line, you park as close to the curb as you can and away from the rails.",
        context:
          "Parking on streetcar or train tracks is banned outright, and so is parking on railroad or light rail tracks anywhere. There is also a 50-foot no-parking distance from the nearest rail of a railroad or light rail crossing, which is separate from the tracks themselves.",
        trap: "A streetcar needs only inches of overhang to reach a car that looks safely parked. The line is where that overhang ends.",
        excerptKey: "streetcar-parking",
        sourceLabel: "Oregon Driver Manual - Railroad Crossings, Light Rail & Street Cars",
        sourceUrl: hb(65),
      },
      {
        id: "or_s5_35",
        topic: "rightOfWay",
        question:
          "Three cars are waiting at a four-way stop and you genuinely cannot tell who stopped first. What does the manual tell you to do?",
        choices: [
          "Take your turn as soon as the car opposite moves",
          "Yield to the driver on your right",
          "Go first if you are turning right",
          "Wave the others through and go last",
        ],
        correctIndex: 1,
        explanation:
          "Order of arrival decides a four-way stop, and where you are in doubt the manual's tie-breaker is to yield to the driver on your right.",
        context:
          "It phrases the arrival rule as courtesy rather than law: it is common courtesy to let the driver who stopped first go first. What it states firmly is the other half, which is never to assume another driver will yield to you. A defensive driver treats every stop sign as something the other car might not obey.",
        trap: "Moving because the car opposite moved reads their intention as your permission. They may be turning left across your path.",
        excerptKey: "four-way-stop-courtesy",
        sourceLabel: "Oregon Driver Manual - Turns & Intersections",
        sourceUrl: hb(42),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix DMV describes for its own test - road signs, traffic laws and the rest of what a driver needs to know - with no hints beyond what you would get on the day. Twenty-four right is 80 percent, the real pass mark.",
    questions: [
      {
        id: "or_s6_01",
        topic: "signs",
        question: "A yellow sign shows an octagon in outline. What does it warn you about?",
        choices: [
          "A checkpoint ahead",
          "A stop sign is ahead, so slow down and prepare to stop",
          "A four-way stop is in operation only at peak hours",
          "The stop sign ahead has been removed",
        ],
        correctIndex: 1,
        explanation:
          "It is a stop ahead sign. The warning exists for places where the stop sign itself comes into view late, on a crest or around a curve.",
        context:
          "Oregon uses the same idea for signals: a signal ahead sign warns that a traffic signal is coming and tells you to slow and be ready to stop. Both are yellow, which is the warning color, and neither replaces the control device they are warning you about.",
        trap: "Approaching at full speed because the sign is only a warning misses its point, which is that you will not see the real sign in time.",
        excerptKey: "stop-ahead-sign",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(11),
      },
      {
        id: "or_s6_02",
        topic: "rules",
        question: "What does a broken white line between two lanes mean?",
        choices: [
          "Traffic in the two lanes moves in opposite directions",
          "Lane changes are prohibited",
          "The lanes carry traffic the same way and you may change lanes with caution",
          "The right lane is about to end",
        ],
        correctIndex: 2,
        explanation:
          "White separates traffic going the same way, and a broken white line permits crossing with caution.",
        context:
          "The white family runs from most to least permissive: broken white, cross with caution; dotted white, also crossable with caution and often used before an exit or a turn-only lane; wide solid white, crossing permitted but discouraged; double solid white, no lane changes at all.",
        trap: "Broken means the same thing in white and in yellow, but only white separates traffic going the same direction. The color tells you what is on the other side.",
        excerptKey: "broken-white-line",
        sourceLabel: "Oregon Driver Manual - Pavement Markings",
        sourceUrl: hb(24),
      },
      {
        id: "or_s6_03",
        topic: "rightOfWay",
        question:
          "You must pull left of the center line to get round a parked delivery truck. Who has priority?",
        choices: [
          "Oncoming traffic, and you yield to it",
          "You do, since the obstruction is not your fault",
          "Whoever reaches the narrow section first",
          "Neither, so proceed at low speed",
        ],
        correctIndex: 0,
        explanation:
          "Crossing to the left of center for any reason puts the duty to yield on you. That includes going round an obstruction.",
        context:
          "Passing an obstruction is one of the two reasons Oregon allows you to cross a center line inside a no-passing zone, the other being a left turn. The permission to be there is not a right of way once you are.",
        trap: "The truck blocking your lane feels like it should transfer the priority. It does not, and the oncoming driver has no obligation to slow.",
        excerptKey: "left-of-center-yield",
        sourceLabel: "Oregon Driver Manual - Lane Travel",
        sourceUrl: hb(18),
      },
      {
        id: "or_s6_04",
        topic: "speed",
        question: "What does a posted speed limit actually represent in Oregon?",
        choices: [
          "The speed traffic is expected to travel at",
          "The minimum safe speed for that road",
          "An average across the length of the road",
          "The maximum considered safe under ideal conditions",
        ],
        correctIndex: 3,
        explanation:
          "The number on the sign is the maximum for the area under ideal driving conditions. Anything less than ideal makes it too fast.",
        context:
          "That definition is what makes the basic rule work. Conditions decide the lawful speed, the sign sets a ceiling that conditions can lower but never raise, and an advisory speed sign is the same idea applied to one particular curve or ramp.",
        trap: "Treating the number as the expected speed of travel is how drivers end up at 55 in fog and cited under the basic rule.",
        excerptKey: "speed-limit-definition",
        sourceLabel: "Oregon Driver Manual - Speed Regulations",
        sourceUrl: hb(19),
      },
      {
        id: "or_s6_05",
        topic: "safety",
        question: "What is a space cushion?",
        choices: [
          "The gap you leave in front of you at a red light",
          "Space kept ahead, to each side and behind you",
          "The distance from your car to the curb",
          "The padded area of the steering wheel",
        ],
        correctIndex: 1,
        explanation:
          "It is space in every direction, not just ahead. Room to each side and behind is what gives you somewhere to go when something happens in front.",
        context:
          "The measurements attach to the front gap: two to four seconds, and four or more above 30 mph. Sideways, the manual asks for extra room beside parked cars and outside other drivers' blind spots. Behind, if someone is tailgating you and there is a right lane, move over; if there is not, reduce speed slowly.",
        trap: "Focusing only on the car in front leaves you with an escape route on one side and nothing on the other.",
        excerptKey: "space-cushion",
        sourceLabel: "Oregon Driver Manual - Maintaining a Space Cushion",
        sourceUrl: hb(26),
      },
      {
        id: "or_s6_06",
        topic: "signals",
        question: "What does a steady circular red signal require?",
        choices: [
          "Stop, then proceed when the way is clear",
          "Slow and proceed with caution",
          "Stop and remain stopped until the signal changes",
          "Yield to cross traffic and continue",
        ],
        correctIndex: 2,
        explanation:
          "Stop and stay stopped until the signal changes. The only movements that survive it are the permitted turns on red, and those need a full stop first.",
        context:
          "The turns are right on red onto a two-way road, and right or left on red onto a one-way road in the direction it flows. A No Turn on Red sign removes them. A red arrow behaves the same way for the movement it points to.",
        trap: "Stop then go is how a flashing red works, not a steady one. The steady red holds you there.",
        excerptKey: "steady-red",
        sourceLabel: "Oregon Driver Manual - Traffic Signals",
        sourceUrl: hb(15),
      },
      {
        id: "or_s6_07",
        topic: "sharing",
        question:
          "Where is the blind spot directly behind a large truck, and what should you do about it?",
        choices: [
          "There is none, because of the mirrors",
          "It is short, so following at two seconds is enough",
          "It only matters when the truck is turning",
          "It extends a long way back, so do not follow closely",
        ],
        correctIndex: 3,
        explanation:
          "Large vehicles have a deep blind spot directly behind them where the driver cannot see you at all, and following closely also destroys your own view of the road ahead.",
        context:
          "Do not pull up too close behind a stopped large vehicle either, because it may roll back slightly as it starts forward. On the sides, if you cannot see the driver in the truck's mirror, the driver cannot see you, and staying in that position through a slow pass is the dangerous version of it.",
        trap: "Tucking in behind a truck to get out of the weather puts you in the one place the driver has no way to see.",
        excerptKey: "large-vehicle-rear-blind",
        sourceLabel: "Oregon Driver Manual - Large Vehicles",
        sourceUrl: hb(53),
      },
      {
        id: "or_s6_08",
        topic: "parking",
        question: "You are pulling out of a parallel parking space into traffic. What is required?",
        choices: [
          "Traffic must yield to you once your signal is on",
          "You may pull out if the nearest car is more than three lengths away",
          "You may pull out at any time in a residential district",
          "Check your mirrors and blind spots and yield to all other traffic",
        ],
        correctIndex: 3,
        explanation:
          "Leaving a parked position is a yield in every direction. You check mirrors and blind spots and give way to everything already using the road.",
        context:
          "You also signal, and from a curb the standard is to signal long enough that traffic actually notices you are moving into the lane rather than for a set distance. Parking rules themselves apply whether you are in the vehicle or not.",
        trap: "A signal announces an intention. It does not create a right of way, and nobody behind you is obliged to make room.",
        excerptKey: "parking-leaving-space",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(68),
      },
      {
        id: "or_s6_09",
        topic: "impairment",
        question:
          "Which of these is on Oregon's list of reasons for losing your driving privileges?",
        choices: [
          "Driving uninsured",
          "Two parking tickets in a year",
          "Failing a vehicle inspection",
          "Changing address without notifying DMV",
        ],
        correctIndex: 0,
        explanation:
          "Driving uninsured is named on the list, alongside driving under the influence of alcohol, drugs or inhalants.",
        context:
          "The rest of the list is worth reading as a group: failing to report a vehicle collision, accumulating too many traffic convictions under the Driver Improvement Program, and failing to comply with court fines. They are all administrative consequences that arrive separately from whatever a court does.",
        trap: "People expect the list to be about bad driving. Half of it is about paperwork and money.",
        excerptKey: "loss-of-privileges",
        sourceLabel: "Oregon Driver Manual - Loss of Driving Privileges",
        sourceUrl: hb(95),
      },
      {
        id: "or_s6_10",
        topic: "emergencies",
        question:
          "Someone is injured in a collision you are involved in. What does the manual tell you about helping?",
        choices: [
          "Give reasonable assistance, without moving injured people carelessly",
          "Do not touch anyone until medical help arrives",
          "Move everyone clear of the vehicles immediately",
          "Assistance is optional once you have called for help",
        ],
        correctIndex: 0,
        explanation:
          "You give reasonable assistance, and the manual's caution is against careless movement of anyone injured rather than against helping at all.",
        context:
          "If a person is killed or unconscious you remain at the scene until police arrive. Otherwise, where nobody is hurt and the vehicles still move, you clear the travel lanes first and exchange details somewhere safer. Injury or death also makes the collision reportable to DMV within 72 hours.",
        trap: "Doing nothing is not the safe legal choice. The duty to give reasonable assistance is stated as a requirement.",
        excerptKey: "collision-assistance",
        sourceLabel: "Oregon Driver Manual - Traffic Collisions",
        sourceUrl: hb(93),
      },
      {
        id: "or_s6_11",
        topic: "licensing",
        question:
          "What is the minimum age to apply for an instruction permit in Oregon, and for a driver license?",
        choices: [
          "14 and 16",
          "15 and 16",
          "15 and 17",
          "16 and 18",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen for a permit and sixteen for a license. Being old enough is the start of the process rather than the end of it.",
        context:
          "Under 18, the age has to be joined by six months of permit time, the supervised driving hours, the school enrollment certification and the drive test. The permit itself lasts 24 months, and the person supervising you must be at least 21 with three years of valid driving privileges and sit in the seat beside you.",
        trap: "Turning 16 does not by itself produce a license. It only makes you eligible to have met the other requirements.",
        excerptKey: "apply-ages",
        sourceLabel: "Oregon Driver Manual - How to Apply",
        sourceUrl: hb(89),
      },
      {
        id: "or_s6_12",
        topic: "signs",
        question: "You see a square DO NOT ENTER sign facing you. What has happened?",
        choices: [
          "The road ahead is closed for work",
          "You are heading the wrong way into a road or freeway",
          "The road ahead is restricted to local traffic",
          "A weight limit applies ahead",
        ],
        correctIndex: 1,
        explanation:
          "It is the sign you meet when you are going the wrong way. It warns you not to enter that road or freeway, and seeing it means turning around.",
        context:
          "It belongs to the red family, which is the prohibiting color: stop, wrong way, no turn on red, and the red circle with a slash. A one-way sign is the companion piece, showing the single direction traffic is allowed to flow.",
        trap: "Treating it as a restriction for other people is how wrong-way freeway entries happen. If you can read it, it is aimed at you.",
        excerptKey: "do-not-enter-sign",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "or_s6_13",
        topic: "rules",
        question: "Another driver begins to pass you on a two-lane road. What should you do?",
        choices: [
          "Stay right and adjust your speed so they can return to the lane",
          "Speed up so the pass finishes sooner",
          "Move toward the center line to make your intentions clear",
          "Brake hard to open a gap in front of you",
        ],
        correctIndex: 0,
        explanation:
          "Stay right and help them finish. Checking oncoming traffic and easing off so they can get back in is what the manual asks for.",
        context:
          "What you may not do is tell them when to start. Using your hands or your lights to signal another driver to pass is prohibited. Once the pass is over, the passing driver signals and returns to the lane as soon as they can see the vehicle they passed in their mirror.",
        trap: "Speeding up as someone passes you is the classic way a completed pass turns into a head-on collision.",
        excerptKey: "being-passed",
        sourceLabel: "Oregon Driver Manual - Passing",
        sourceUrl: hb(33),
      },
      {
        id: "or_s6_14",
        topic: "signals",
        question: "What does a NO TURN ON RED sign mean?",
        choices: [
          "You may turn on red only after a complete stop",
          "You may turn on red only when no pedestrian is present",
          "You may not turn during the red, and must wait for green",
          "The restriction applies only during posted hours",
        ],
        correctIndex: 2,
        explanation:
          "It removes the turn entirely. You wait for the signal to turn green, with no stop-and-go option.",
        context:
          "Without such a sign, Oregon allows right on red onto a two-way road and right or left on red onto a one-way road, after a full stop and after yielding. The sign overrides all of it, and so does a police officer directing traffic. Intersections with a bike box also have the red turn switched off.",
        trap: "The complete stop is what makes the turn lawful when the turn is available. Here the turn is not available at all.",
        excerptKey: "no-turn-on-red-sign",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(9),
      },
      {
        id: "or_s6_15",
        topic: "safety",
        question:
          "An oncoming car's headlights are dazzling you at night. Where should you look?",
        choices: [
          "Straight at the lights, to keep the car located",
          "Down at your own hood",
          "A little to the right, along the road edge or fog line",
          "At your instrument panel until it passes",
        ],
        correctIndex: 2,
        explanation:
          "Look slightly right and use the road edge or the fog line to hold your position. You keep the oncoming car in peripheral vision without taking the glare head on.",
        context:
          "The same chapter warns about dawn and dusk, when an oncoming vehicle may have no lights on at all and you will not see it until late. Your own lights have rules attached: dim for oncoming traffic within 500 feet and when following within 350, and any auxiliary lights go off at the same time.",
        trap: "Watching the lights to keep track of the car is what destroys your night vision for the next few seconds of road.",
        excerptKey: "night-driving-look-right",
        sourceLabel: "Oregon Driver Manual - Hazardous Conditions",
        sourceUrl: hb(77),
      },
      {
        id: "or_s6_16",
        topic: "sharing",
        question:
          "You are following a school bus and it stops at a railroad crossing with no train in sight. What is happening?",
        choices: [
          "The driver is checking for passengers",
          "The bus has broken down",
          "The crossing signal has failed",
          "School buses are required to stop at railroad tracks",
        ],
        correctIndex: 3,
        explanation:
          "All school buses, hazmat vehicles and some school activity vehicles must stop at railroad tracks. The manual tells you to be ready for it when following one.",
        context:
          "The general railroad rules apply to you: stop when the flashing red lights are on, when a train is visible or close enough to make crossing hazardous, when a stop sign is posted even with no train in sight, or when a flagger signals. Where you must stop and there is no stop line, it is at least 15 feet from the nearest rail.",
        trap: "Assuming the bus is stopping for something you can see is how the vehicle behind ends up under it. The stop is required, not situational.",
        excerptKey: "railroad-buses-stop",
        sourceLabel: "Oregon Driver Manual - Railroad Crossings, Light Rail & Street Cars",
        sourceUrl: hb(63),
      },
      {
        id: "or_s6_17",
        topic: "speed",
        question:
          "You are driving through a business district with no speed limit sign posted. What is the limit?",
        choices: [
          "15 mph",
          "20 mph",
          "25 mph",
          "30 mph",
        ],
        correctIndex: 1,
        explanation:
          "Twenty in a business district, unless a different speed is posted. It is the same figure Oregon uses inside a school speed zone.",
        context:
          "The neighboring figures are 15 mph in alleys and narrow residential roadways, 25 mph in residential districts and public parks, and 55 mph on anything that fits no other description. All of them are set in law and apply whether posted or not.",
        trap: "Residential and business districts have different numbers, and the business one is the lower of the two.",
        excerptKey: "statutory-speed-limits",
        sourceLabel: "Oregon Driver Manual - Speed Regulations",
        sourceUrl: hb(19),
      },
      {
        id: "or_s6_18",
        topic: "rules",
        question: "What does a wide solid white line usually separate?",
        choices: [
          "A bike lane, or a turn lane, from the general travel lanes",
          "Traffic moving in opposite directions",
          "A shoulder from a travel lane on a one-way road",
          "The boundary of a work zone",
        ],
        correctIndex: 0,
        explanation:
          "It channels traffic into specific lanes, such as turn lanes, and separates bike lanes from other traffic. Crossing it is allowed but discouraged.",
        context:
          "A bike lane specifically is marked by a wide white line with a bicycle symbol or a bike lane sign, and may be painted green. A double solid white line is the version you may not cross at all, usually with a sign prohibiting lane changes for a distance.",
        trap: "Wide and double are not the same marking. One is discouraged and the other is prohibited.",
        excerptKey: "wide-solid-white",
        sourceLabel: "Oregon Driver Manual - Pavement Markings",
        sourceUrl: hb(24),
      },
      {
        id: "or_s6_19",
        topic: "rightOfWay",
        question:
          "Traffic ahead has stopped and you will end up with your rear bumper over the crosswalk. What should you do?",
        choices: [
          "Stop where you are, since you cannot control traffic ahead",
          "Move up slowly so pedestrians can see you coming",
          "Sound your horn so people wait",
          "Stop short so no part of your vehicle overhangs the crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "Stop before the crosswalk. Oregon says not to stop with any part of your vehicle overhanging one, because it pushes people out into traffic to get around you.",
        context:
          "It is the same principle as not entering an intersection unless there is room on the far side. Both are about not occupying space that other people need in order to move safely, and both apply regardless of what the signal is showing you.",
        trap: "Blaming the queue does not help the person now walking around your bumper into a live lane.",
        excerptKey: "dont-block-crosswalk",
        sourceLabel: "Oregon Driver Manual - Pedestrians",
        sourceUrl: hb(47),
      },
      {
        id: "or_s6_20",
        topic: "signs",
        question: "A yellow sign shows a series of chevrons. What is it telling you?",
        choices: [
          "Lanes merge ahead",
          "A passing lane begins",
          "The road surface changes",
          "A sharp curve or change of direction is at the sign",
        ],
        correctIndex: 3,
        explanation:
          "A chevron marks a sharp curve or change of direction at the sign itself, rather than somewhere ahead. It is placed on the outside of the bend where your headlights land.",
        context:
          "Related warnings tell you about curves further off: a winding road sign for a series of turns, and a reversing curves sign for a bend right then left. Advisory speed plates often accompany them, and the manual's advice for any curve is to slow before you enter it and look through it to where you want to go.",
        trap: "A chevron is not advance warning. By the time you can read it, the curve is where you are.",
        excerptKey: "chevron-sign",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(10),
      },
      {
        id: "or_s6_21",
        topic: "parking",
        question: "Which of these is legal parking in Oregon?",
        choices: [
          "Alongside a car already parked at the curb",
          "In a marked space with all four wheels inside the markings",
          "Across a bicycle path for under five minutes",
          "In a traffic lane with hazard lights on",
        ],
        correctIndex: 1,
        explanation:
          "Where spaces are marked, your wheels have to be inside the markings, and that is exactly what the rule asks for.",
        context:
          "The others are all on the prohibited list: double parking on the road side of a parked vehicle, parking on a sidewalk, crosswalk, bicycle lane or path, and stopping in a traffic lane. Add railroad and light rail tracks and intersections and you have the full set of flat prohibitions.",
        trap: "Hazard lights appear nowhere in the parking rules as a permission. They warn people, they do not authorize anything.",
        excerptKey: "no-parking-list",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(70),
      },
      {
        id: "or_s6_22",
        topic: "safety",
        question:
          "Another driver is tailgating you and gesturing angrily. What does the manual advise?",
        choices: [
          "Stay out of their way and do not challenge them",
          "Brake sharply so they back off",
          "Speed up until they lose interest",
          "Match their speed and hold your lane position",
        ],
        correctIndex: 0,
        explanation:
          "Stay out of the way, and do not challenge an aggressive driver by going faster or trying to out-drive them.",
        context:
          "There is a practical version of the same advice for tailgating: if there is a right lane, move into it, and if there is not, reduce speed slowly, which usually persuades the driver behind to pass or to drop back. Both work because they remove you from the situation rather than trying to win it.",
        trap: "Brake checking is the response people reach for and it converts a tailgater into a collision you are partly responsible for.",
        excerptKey: "road-rage",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(81),
      },
      {
        id: "or_s6_23",
        topic: "emergencies",
        question:
          "You realize you have driven up a freeway exit ramp in the wrong direction. What should you do?",
        choices: [
          "Continue to the top and merge with traffic",
          "Reverse down the ramp at speed",
          "Stop in the middle of the ramp and wait for help",
          "Pull to the side of the ramp, stop, put on hazard lights, and turn around carefully",
        ],
        correctIndex: 3,
        explanation:
          "Get off the driving surface first, stop, warn other drivers with your hazard lights, then turn around or back off the ramp cautiously.",
        context:
          "The sign that tells you this has happened is DO NOT ENTER, or a wrong way sign, and both belong to the red prohibiting family. The freeway chapter is otherwise blunt about reversing: never stop or back up on a freeway, and use the shoulder only in an emergency.",
        trap: "Carrying on to the top of the ramp puts you head-on into freeway traffic, which is the outcome the whole procedure exists to prevent.",
        excerptKey: "wrong-way-ramp",
        sourceLabel: "Oregon Driver Manual - Freeway Driving",
        sourceUrl: hb(34),
      },
      {
        id: "or_s6_24",
        topic: "signals",
        question: "A steady yellow arrow appears for the turn you are making. What does it mean?",
        choices: [
          "You may complete the turn with the right of way",
          "Yield to oncoming traffic and turn when safe",
          "Stop before the intersection, or continue carefully if you cannot stop safely",
          "The turn is prohibited from this point",
        ],
        correctIndex: 2,
        explanation:
          "A steady yellow arrow is a warning that the arrow is about to turn red, and it works exactly like a steady yellow circle for that movement.",
        context:
          "The four arrow states run green for protected, flashing yellow for permitted but unprotected, steady yellow for about to end, and red for stop and remain stopped, with the usual turns on red still available.",
        trap: "Flashing yellow and steady yellow arrows look similar and mean opposite things: one lets you go after yielding, the other tells you to stop.",
        excerptKey: "yellow-arrow",
        sourceLabel: "Oregon Driver Manual - Traffic Signals",
        sourceUrl: hb(16),
      },
      {
        id: "or_s6_25",
        topic: "rules",
        question: "When should you return to your lane after passing another vehicle?",
        choices: [
          "As soon as you can see the vehicle you passed in your rearview mirror",
          "As soon as your rear bumper clears their front bumper",
          "After counting three seconds from the start of the pass",
          "Once you are back at the posted speed limit",
        ],
        correctIndex: 0,
        explanation:
          "The rearview mirror is the test. Once the vehicle you passed appears in it you have room, so you signal and move back in.",
        context:
          "The pass as a whole starts with a mirror check and a glance over your shoulder into the blind spot, then a signal, then getting it done as quickly as you safely can without exceeding the speed limit. On a two-lane road it must begin after a passing zone starts and be finished before a no-passing zone begins.",
        trap: "Clearing their bumper leaves you cutting across their front wheels. The mirror check is what proves you are actually past.",
        excerptKey: "passing-return-to-lane",
        sourceLabel: "Oregon Driver Manual - Passing",
        sourceUrl: hb(31),
      },
      {
        id: "or_s6_26",
        topic: "sharing",
        question:
          "You are about to turn right across a bike lane and a rider is coming up in it. What must you do?",
        choices: [
          "Turn quickly, ahead of the rider",
          "Yield to the rider before turning across the lane",
          "Move into the bike lane so they must pass on your left",
          "Sound your horn and complete the turn",
        ],
        correctIndex: 1,
        explanation:
          "You yield to people riding in a bike lane or on a sidewalk before turning across their path. The bike lane is crossed, not occupied.",
        context:
          "Oregon also forbids moving into the bike lane to prepare for the turn, which is where drivers from other states go wrong. Underneath both sits the general instruction to yield to vulnerable road users, and the reminder that riders are harder to see than vehicles and easily lost in a blind spot.",
        trap: "Beating the rider through the turn is the collision the rule is written to stop, and the closing speed makes it easy to misjudge.",
        excerptKey: "yield-bikes-before-turn",
        sourceLabel: "Oregon Driver Manual - Turns",
        sourceUrl: hb(39),
      },
      {
        id: "or_s6_27",
        topic: "impairment",
        question:
          "Which statement about Oregon's 0.08 percent figure is correct?",
        choices: [
          "It is the point below which no driver can be arrested",
          "It applies equally to drivers of every age",
          "It is the level at which the law presumes an adult driver is impaired",
          "It only applies on state highways",
        ],
        correctIndex: 2,
        explanation:
          "It is a presumption of impairment for an adult driver, and nothing more. It does not shelter anyone below it and it does not apply to drivers under 21 at all.",
        context:
          "Under 21 the standard is zero, since any amount of alcohol in the blood counts as being under the influence. Above 21, arrest below 0.08 is expressly possible. Driving under the influence of intoxicants is a Class A misdemeanor and applies on any premises open to the public.",
        trap: "Reading the figure as a license to drink up to it, or as a shield below it, gets both halves of the rule wrong.",
        excerptKey: "impaired-bac-008",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(82),
      },
      {
        id: "or_s6_28",
        topic: "licensing",
        question: "When may Oregon DMV waive the drive test?",
        choices: [
          "For anyone over 21 with a clean record",
          "After two failed attempts at the knowledge test",
          "For anyone who has held any license for five years",
          "For a new resident surrendering a valid out-of-state license, or on proof of an ODOT-approved driver education course within the past two years",
        ],
        correctIndex: 3,
        explanation:
          "Two routes. A new resident surrendering an out-of-state license that is valid or expired less than a year, or proof that you completed an ODOT-approved driver education course in the past two years.",
        context:
          "The course route matters twice for a driver under 18, because completing it also drops the supervised driving requirement from 100 hours to 50. The permit time and the school certification are unaffected by either waiver.",
        trap: "The waiver is about the drive test only. Nothing here removes the knowledge test.",
        excerptKey: "drive-test-waiver",
        sourceLabel: "Oregon Driver Manual - How to Apply",
        sourceUrl: hb(3),
      },
      {
        id: "or_s6_29",
        topic: "safety",
        question: "You come to a stretch of road covered in standing water. What should you do?",
        choices: [
          "Do not drive through it",
          "Drive through quickly to avoid stalling",
          "Drive through in a low gear at steady revs",
          "Follow the vehicle ahead through at the same speed",
        ],
        correctIndex: 0,
        explanation:
          "The manual's instruction is not to drive through flooded areas at all. High water can take away control or stall the engine, and you cannot see what the water is hiding.",
        context:
          "If you do end up driving through water and the brakes come out wet, apply them gently while driving slowly until they respond, and do it as soon as you can. On merely wet roads, the risks are hydroplaning, which takes steering and braking together, and a surface that is at its most slippery near freezing.",
        trap: "Following someone else through proves only that their car was higher than yours, or that they got lucky.",
        excerptKey: "flooded-areas",
        sourceLabel: "Oregon Driver Manual - Hazardous Conditions",
        sourceUrl: hb(78),
      },
      {
        id: "or_s6_30",
        topic: "signs",
        question: "What do blue highway signs tell you?",
        choices: [
          "The route number you are traveling on",
          "Services and facilities available along the highway",
          "Historic and scenic locations",
          "Upcoming exits and distances to cities",
        ],
        correctIndex: 1,
        explanation:
          "Blue is for motorist services: fuel, food, lodging, hospitals and the rest of what is available off the highway.",
        context:
          "It completes the information set. Green gives exits and directions to roads and cities, brown points to parks, picnic grounds, scenic areas and historic and cultural sites, and route signs tell you whether you are on an interstate, a US route or a state highway.",
        trap: "Blue and green are both information colors and answer different questions. Green tells you where the road goes, blue tells you what is beside it.",
        excerptKey: "motorist-service-signs",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(14),
      },
    ],
  },
];
