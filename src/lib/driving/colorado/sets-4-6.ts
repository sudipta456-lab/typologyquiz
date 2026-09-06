import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets 1 to 3: the Colorado Driver Handbook,
// DR 2337 (12/05/24), the January 2025 edition, with Title 42 of the Colorado
// Revised Statutes (2024) and the dmv.colorado.gov pages filling the gaps the
// handbook leaves - the crosswalk, driveway and railroad parking distances,
// the under-21 0.02 offense as the statute frames it, and the permit ages,
// holding periods, retest fee and 2027 driver-education change.
//
// Set 5 is where Colorado's traps live, and most of them came from what
// learners and local drivers say rather than from the book:
//
//  - The belief that you may exceed the posted limit to complete a pass. A
//    Colorado driver stated this on r/driving in 2025 as something the written
//    test itself teaches. The handbook lists it as an illegal passing
//    behavior, so co_s5_01 tests it directly.
//  - The 50-hour driving log, which gets remembered as 60 hours. co_s5_03.
//  - The school-bus median exception, which people read as "four lanes is
//    enough". It is not; a median is what releases oncoming traffic.
//  - The parking distances, which the handbook never prints at all.
//
// One genuine conflict is flagged where it arises. The handbook releases
// oncoming traffic from a school-bus stop only where "a median or other
// physical barrier" separates the roadways, while C.R.S. 42-4-1903(4) defines
// a "highway with separate roadways" as one divided by "a depressed, raised, or
// painted median". co_s5_04 is built on a raised median, where both readings
// give the same answer.
//
// Set 6 runs 30 questions with no scaffolding, mixed across the five content
// areas the handbook says the test covers: road signs, driving under the
// influence, driving rules, safety rules and legal items.
const HB = "https://dmv.colorado.gov/sites/dmv/files/documents/DR_2337_Jan2025.pdf";
const hb = (printedPage: number) => `${HB}#page=${printedPage + 3}`;
const CRS = (pdfPage: number) =>
  `https://content.leg.colorado.gov/sites/default/files/images/olls/crs2024-title-42.pdf#page=${pdfPage}`;
const PERMITS = "https://dmv.colorado.gov/permits-first-time-driver-license";
const ADULT = "https://dmv.colorado.gov/adult-permit";
const HB1021 = "https://dmv.colorado.gov/hb24-1021-motor-vehicle-minor-driver-education";

export const coloradoSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "A second exam-level set that walks the whole 27-page handbook, weighted toward the chapters people skim: freeway driving, railroad and light rail, work vehicles, vehicle emergencies and the paperwork rules that carry a penalty.",
    questions: [
      {
        id: "co_s4_01",
        topic: "licensing",
        question:
          "You move to a new apartment across town. How long does Colorado give you to tell the Division of Motor Vehicles?",
        choices: [
          "There is no deadline as long as you update it at renewal",
          "10 days",
          "30 days",
          "90 days",
        ],
        correctIndex: 2,
        explanation:
          "Colorado gives you 30 days to report a change of address, and the same 30 days applies to a change of name. It is a notification duty, not something that waits for your next renewal.",
        context:
          "The handbook puts this in the opening chapter alongside the licensing basics because the DMV mails things that matter: renewal notices, restraint orders, and any notice about a suspension. An address the state cannot reach does not pause a deadline, so the letter is treated as delivered whether or not you saw it.",
        trap:
          "Waiting until renewal feels harmless because nothing visibly breaks. The duty runs from the day you move, not from the day the license expires.",
        excerptKey: "address-change-30-days",
        sourceLabel: "Colorado Driver Handbook - Getting a Driver License",
        sourceUrl: hb(1),
      },
      {
        id: "co_s4_02",
        topic: "signs",
        question:
          "You pass a blue sign and then a brown one on the same stretch of highway. What is each one for?",
        choices: [
          "Blue points to services, brown to recreation, history or culture",
          "Blue points to hospitals only, brown to campgrounds only",
          "Blue is a route marker, brown is a detour",
          "Blue warns of a hazard, brown marks a scenic overlook speed limit",
        ],
        correctIndex: 0,
        explanation:
          "Colorado sorts these two by background color. Blue backgrounds point you toward service facilities, and brown backgrounds point toward recreational, historic or cultural areas.",
        context:
          "The handbook teaches signs by color and shape first, because that pair is readable before you can make out any words. Green is directional and mileage information, orange is a work zone, yellow or fluorescent green is a warning, and red or black on white is regulatory. Blue and brown are the two informational colors, and they are the ones people mix up.",
        trap:
          "Blue is not the hospital color alone. It covers the whole family of services - fuel, food, lodging, rest areas - and a hospital is only one entry on that list.",
        excerptKey: "service-recreation-signs",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(8),
      },
      {
        id: "co_s4_03",
        topic: "rules",
        question:
          "You turn onto a rural road that has no center line, no edge lines and no signs. Where does the handbook tell you to drive?",
        choices: [
          "Down the middle, since there is no marked lane",
          "Just to the right of the center of the road",
          "On the shoulder, to leave the surface clear",
          "Wherever the surface is best, moving over only when a car appears",
        ],
        correctIndex: 1,
        explanation:
          "With nothing to mark the lanes you position yourself just to the right of the road's center, which leaves the left half clear for anything coming the other way. The handbook adds a second half to the rule: do not drive on the shoulder.",
        context:
          "This follows from the general lane rule that you drive on the right half of the road and use one lane rather than straddling two. On an unmarked road there is no painted line to sit inside, so the center of the road takes its place, and the shoulder stays out of the picture because it is not built to carry traffic.",
        trap:
          "Riding the middle of an empty unmarked road is common and wrong. There is no time to move over for a car that comes over a rise.",
        excerptKey: "unmarked-lane",
        sourceLabel: "Colorado Driver Handbook - Lane Controls",
        sourceUrl: hb(10),
      },
      {
        id: "co_s4_04",
        topic: "sharing",
        question:
          "You need to change a flat tire on a mountain highway and there is a runaway truck ramp just ahead. May you use its entrance?",
        choices: [
          "Yes, it is the widest safe pull-out available",
          "Yes, as long as your hazard lights are on",
          "Only if you stay off the gravel bed itself",
          "No - parking, chaining up or changing a tire there is illegal and unsafe",
        ],
        correctIndex: 3,
        explanation:
          "The ramp and its entrance are reserved for a truck whose brakes have failed, which may arrive at speed with no ability to steer around you. Parking, chaining up and changing a tire there are all called out as illegal as well as unsafe.",
        context:
          "Runaway ramps sit on long descents in Colorado's mountains, filled with deep gravel or sand to swallow a truck's momentum. A driver using one has no choice about where to go, so anything in the entrance is something they will hit. Find an ordinary pull-out instead, even if it means driving further on the flat tire.",
        trap:
          "The entrance looks like the safest wide shoulder on the whole descent, which is exactly why it draws people in.",
        excerptKey: "runaway-ramp",
        sourceLabel: "Colorado Driver Handbook - Sharing the Road",
        sourceUrl: hb(20),
      },
      {
        id: "co_s4_05",
        topic: "safety",
        question: "How far down the road does the handbook tell you to be looking as you drive?",
        choices: [
          "To the bumper of the car in front, so you can react to its brake lights",
          "About 3 seconds ahead",
          "At least 10 seconds ahead - a block in the city, half a mile on the open road",
          "As far as your headlights reach, and no further",
        ],
        correctIndex: 2,
        explanation:
          "Ten seconds is the handbook's figure, and it gives the distance in both settings so you can picture it: roughly one city block in town, roughly half a mile on the open road. Looking that far ahead is what removes the last-second brake or swerve.",
        context:
          "Colorado pairs this with two other habits. You check the mirror every 5 to 8 seconds so you know what is behind, and you leave a three-second gap to the vehicle ahead. The 10-second look is the one that buys planning time, since a problem you see ten seconds out can be handled by easing off rather than braking hard.",
        trap:
          "Three seconds is the following-distance figure, not the looking-ahead figure. Mixing the two leaves you reacting to one car instead of reading the road.",
        excerptKey: "look-ahead-10-seconds",
        sourceLabel: "Colorado Driver Handbook - Safe Driving Tips",
        sourceUrl: hb(18),
      },
      {
        id: "co_s4_06",
        topic: "emergencies",
        question:
          "Your gas pedal jams down while you are driving. What does the handbook tell you to do first?",
        choices: [
          "Keep your eyes on the road and shift quickly into neutral",
          "Switch off the engine immediately",
          "Stand on the brake and hold it",
          "Pull the parking brake up hard",
        ],
        correctIndex: 0,
        explanation:
          "Neutral is first because it cuts the engine off from the wheels while you still have steering and brakes. The handbook is explicit that your eyes stay on the road through all of it, then you pull off when it is safe and shut the engine down.",
        context:
          "The order matters. Turning the key off before you are stopped can lock the steering column and kills the power assistance to the brakes, which is why it comes last rather than first. The same principle runs through the handbook's other vehicle emergencies: keep control of direction first, deal with the mechanical fault second.",
        trap:
          "Switching the engine off sounds like the direct fix. It removes power steering and brake assist at the worst possible moment.",
        excerptKey: "jammed-gas-pedal",
        sourceLabel: "Colorado Driver Handbook - Vehicle Emergencies",
        sourceUrl: hb(26),
      },
      {
        id: "co_s4_07",
        topic: "parking",
        question:
          "A disabled parking bay has a striped, crosshatched area painted beside it. What is that area for?",
        choices: [
          "Overflow parking when the marked bays are full",
          "Van access, and parking in it is never allowed",
          "Motorcycle parking",
          "Loading only, with a 15-minute limit",
        ],
        correctIndex: 1,
        explanation:
          "The crosshatching is the space a wheelchair lift or ramp needs to deploy from the side of a van. Parking there is prohibited at any time, by anyone, placard or not.",
        context:
          "Colorado attaches a second condition to the bay itself: the person the placard belongs to has to be getting into or out of the vehicle. Holding a placard does not license you to park there while running an errand on someone else's behalf. The penalty is a misdemeanor charge with a fine from $350 to $5,000, possible jail time and a possible loss of driving privileges.",
        trap:
          "The stripes look like leftover paint rather than a bay. Blocking them can strand someone in their own vehicle.",
        excerptKey: "disabled-parking-crosshatch",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(9),
      },
      {
        id: "co_s4_08",
        topic: "rules",
        question: "What marking on the pavement identifies a High Occupancy Vehicle lane in Colorado?",
        choices: [
          "A solid green stripe along its left edge",
          "The letters HOV repeated in yellow",
          "A double broken white line on both sides",
          "A white diamond painted in the lane",
        ],
        correctIndex: 3,
        explanation:
          "The white diamond on the road surface is the HOV marking. Overhead signs give the hours and the occupancy needed, but the diamond is what identifies the lane itself.",
        context:
          "Colorado uses several painted markings that carry meaning on their own. Green paint marks a lane or area for bicyclists and makes them more visible, a sharrow tells you a bicyclist may take the center of that lane, and double broken yellow lines mark a reversible lane whose direction changes by time of day. The diamond belongs to the HOV family.",
        trap:
          "Green paint is the bicycle marking, not the HOV marking. Sitting in a bike lane in the belief that it is a carpool lane is both a violation and a hazard.",
        excerptKey: "hov-diamond",
        sourceLabel: "Colorado Driver Handbook - Lane Controls",
        sourceUrl: hb(10),
      },
      {
        id: "co_s4_09",
        topic: "impairment",
        question:
          "The handbook defines a standard drink. Which of these three servings holds the same amount of alcohol as the others?",
        choices: [
          "A 16-ounce beer",
          "A 3-ounce shot of spirits",
          "12 ounces of beer, 5 ounces of wine or 1.5 ounces of distilled spirits",
          "8 ounces of wine",
        ],
        correctIndex: 2,
        explanation:
          "Those three servings each carry the same amount of alcohol, which is what makes them one standard drink apiece. The container is a poor guide because the strength changes with the drink.",
        context:
          "This matters because Colorado's thresholds are stated in blood alcohol content, and the only way to estimate your own is by counting standard drinks over time. The body clears roughly 0.015 percent an hour and nothing speeds that up. For a driver under 21 the limit that costs a license is 0.02, which one standard drink can reach.",
        trap:
          "A pint glass is not a standard drink. A 16-ounce beer is already a third more alcohol than the 12-ounce measure the handbook uses.",
        excerptKey: "standard-drink",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(3),
      },
      {
        id: "co_s4_10",
        topic: "signals",
        question:
          "You approach a signal that is dark until a pedestrian presses a button, then runs a flashing yellow and red sequence. What is it?",
        choices: [
          "A HAWK signal, placed to let pedestrians cross safely",
          "A railroad pre-emption signal",
          "A malfunctioning traffic light",
          "A school-zone beacon that only operates at bell times",
        ],
        correctIndex: 0,
        explanation:
          "That is a HAWK signal. It exists to give pedestrians a protected crossing on a road that has no ordinary traffic light, and its yellow-to-red flashing sequence is the warning that someone is about to cross.",
        context:
          "HAWK signals sit mid-block on busy roads in Colorado towns, often near schools, trails and transit stops. Because they are dark most of the time, drivers who do not recognize them tend to read the flashing sequence as a fault and drive through. Treat the red phase as a red light and give the crossing pedestrian the road.",
        trap:
          "A dark or flashing signal is normally treated as a four-way stop or a hazard. A HAWK is neither - it is working exactly as designed.",
        excerptKey: "hawk-signal",
        sourceLabel: "Colorado Driver Handbook - Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "co_s4_11",
        topic: "speed",
        question:
          "According to the figure the handbook quotes, roughly how far does a light passenger car at 55 mph need to stop?",
        choices: ["About 60 feet", "About 200 feet", "About 400 feet", "About one mile"],
        correctIndex: 1,
        explanation:
          "About 200 feet, on the National Safety Council figure the handbook prints. That is the full distance including the time it takes you to react, not just the braking.",
        context:
          "The number is there to make following distance concrete. Two hundred feet is roughly thirteen car lengths, which is far more road than most drivers leave. It also explains why speed is the single biggest influence on how badly a crash ends, and why worn tires, wet pavement and ice all stretch the figure further.",
        trap:
          "One mile is the freight train figure from the railroad chapter, not the car figure. They sit a few pages apart and get swapped.",
        excerptKey: "stopping-55-200-feet",
        sourceLabel: "Colorado Driver Handbook - Speed",
        sourceUrl: hb(12),
      },
      {
        id: "co_s4_12",
        topic: "sharing",
        question:
          "A light rail train has just cleared the crossing and the gates are still down. May you drive around them?",
        choices: [
          "Yes, once the train that triggered them has passed",
          "Yes, if you can see clearly in both directions",
          "Only at walking pace",
          "No - another train may be coming from the other direction",
        ],
        correctIndex: 3,
        explanation:
          "Never drive around a light rail gate, and the reason is the one drivers forget: light rail runs on two tracks, so a second train can be arriving from the opposite direction behind the one that just went by.",
        context:
          "The handbook backs this with the physics. A light rail vehicle weighs up to 40 tons and cannot stop quickly, so the driver has no way to avoid a car that has moved onto the tracks. The same rule applies at a freight crossing: while the gates are down the road is closed, and you wait for them to rise and the lights to stop flashing.",
        trap:
          "Watching one train clear the crossing feels like proof it is safe. On a two-track alignment it is proof of nothing.",
        excerptKey: "light-rail-gates",
        sourceLabel: "Colorado Driver Handbook - Light Rail",
        sourceUrl: hb(22),
      },
      {
        id: "co_s4_13",
        topic: "safety",
        question:
          "What scanning pattern does the handbook give for entering or turning at an intersection?",
        choices: [
          "Left, then right",
          "Right, then left, because traffic on the right reaches you first",
          "Left, right, then left again",
          "Straight ahead only, since the signal governs the cross traffic",
        ],
        correctIndex: 2,
        explanation:
          "Left, right, then left again. The second look left is the one that matters, because the lane closest to you on the left is the lane you enter first and the most time has passed since you last checked it.",
        context:
          "Colorado states this for turning, driving through and entering an intersection alike, so it applies at a green light as much as at a stop sign. The handbook is blunt that a green light does not hand you the right-of-way, only the permission to proceed after yielding to anyone already in the intersection or the crosswalk.",
        trap:
          "One look each way feels complete. In the seconds it takes to check right, a vehicle can enter the near lane on your left.",
        excerptKey: "scan-left-right-left",
        sourceLabel: "Colorado Driver Handbook - Safe Driving Tips",
        sourceUrl: hb(18),
      },
      {
        id: "co_s4_14",
        topic: "rightOfWay",
        question:
          "A highway maintenance truck ahead is working with flashing yellow and blue lights. What do you owe it?",
        choices: [
          "The right-of-way, the same as any service or maintenance equipment in use",
          "Nothing, since it is not an emergency vehicle",
          "A full stop until it moves off the roadway",
          "A lane change, but only if the posted limit is above 45 mph",
        ],
        correctIndex: 0,
        explanation:
          "Colorado requires you to yield to service vehicles and maintenance equipment in use with flashing yellow and blue lights. The yellow-and-blue pairing is the marker that the vehicle is working, not merely present.",
        context:
          "This sits beside two related duties. When a stationary vehicle on a highway has its hazards flashing, the Move Over law requires you to change lanes if you can do so safely, and to slow down if you cannot. And a snow plow working in a staggered diagonal formation must not be passed at all.",
        trap:
          "Only emergency vehicles seem to command a yield. The blue light on a maintenance truck is doing exactly that job.",
        excerptKey: "maintenance-vehicles",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "co_s4_15",
        topic: "rules",
        question:
          "You reach a freeway on-ramp with a small signal head partway up it. What are you required to do?",
        choices: [
          "Treat it as a yield and merge when there is a gap",
          "Stop and wait to be released by the green light",
          "Ignore it outside rush hour",
          "Stop only if a vehicle is already ahead of you on the ramp",
        ],
        correctIndex: 1,
        explanation:
          "A ramp meter is a real signal. You stop at it and enter the freeway only when it releases you with a green, which is what spaces merging traffic out so it can be absorbed.",
        context:
          "Once released, the rest of the entry rules still apply. You use the acceleration lane to get up to the speed of traffic, you do not merge until the solid white line has ended, and you yield to traffic already on the freeway. Stopping in the acceleration lane is reserved for genuine necessity.",
        trap:
          "Ramp meters look advisory, especially when the ramp is quiet. Running one is running a red light.",
        excerptKey: "metered-ramp",
        sourceLabel: "Colorado Driver Handbook - Freeway Driving",
        sourceUrl: hb(14),
      },
      {
        id: "co_s4_16",
        topic: "emergencies",
        question: "A front tire blows out at highway speed. What does the handbook tell you to do?",
        choices: [
          "Brake hard and pull straight off the road",
          "Steer sharply toward the shoulder before the car pulls",
          "Accelerate briefly to straighten the vehicle",
          "Hold the wheel tightly, keep going straight, ease off the gas and brake lightly",
        ],
        correctIndex: 3,
        explanation:
          "Grip and direction come first. You hold the wheel firmly to keep the car going straight, lift off the gas so it slows on its own, and use the brakes only lightly as you come down in speed.",
        context:
          "A blowout drags the car toward the failed tire, so anything abrupt puts you sideways. This is the same principle as the handbook's other vehicle emergencies: with a jammed accelerator you shift to neutral before touching the ignition, and with total brake failure you pump the pedal before reaching for the parking brake. Slow, deliberate inputs keep the car pointing where you want it.",
        trap:
          "Hard braking is the instinct and the one thing that turns a blowout into a spin.",
        excerptKey: "tire-blowout",
        sourceLabel: "Colorado Driver Handbook - Vehicle Emergencies",
        sourceUrl: hb(26),
      },
      {
        id: "co_s4_17",
        topic: "licensing",
        question: "How long does a Colorado instruction permit stay valid?",
        choices: [
          "12 months from the day it is issued",
          "Until you pass the drive test, with no expiry",
          "Three years, or until your 21st birthday, whichever comes first",
          "Five years, renewable once",
        ],
        correctIndex: 2,
        explanation:
          "Three years, with a hard stop at your 21st birthday. Whichever of those two arrives first ends the permit.",
        context:
          "Do not confuse the permit's life with the holding period. A minor has to hold the permit a full 12 months, or until turning 18 if that comes sooner, before applying for a license, and must log 50 hours of driving with 10 of them at night. An adult permit carries no minimum holding time at all.",
        trap:
          "Twelve months is the minimum you must hold it, not the length of time it lasts. Reading it as the expiry sends people back for a new permit a year early.",
        excerptKey: "web-permit-valid-3-years",
        sourceLabel: "dmv.colorado.gov - Permits and First-Time Driver License",
        sourceUrl: PERMITS,
      },
      {
        id: "co_s4_18",
        topic: "signs",
        question:
          "A yellow sign shows a curve symbol with 30 MPH on a small plate below it. What is that number?",
        choices: [
          "The safe speed for that curve in ideal conditions",
          "A legal maximum enforceable like any speed limit",
          "The minimum speed needed to hold the lane",
          "The speed limit for trucks only",
        ],
        correctIndex: 0,
        explanation:
          "That is an advisory speed. It tells you the speed the curve, corner or off-ramp can be taken at when conditions are ideal, which is not the same thing as a posted limit.",
        context:
          "The color does the work. Yellow and fluorescent green are warning colors, so a number on a yellow plate is advice about a specific hazard ahead. A speed limit sign is regulatory, black on white, and shows the maximum or minimum that is allowed. Both are for ideal conditions, and both need to come down in rain, snow or ice.",
        trap:
          "Ideal conditions is doing real work in that sentence. On a wet, dark mountain curve the advisory figure is already too fast.",
        excerptKey: "advisory-speed-signs",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(8),
      },
      {
        id: "co_s4_19",
        topic: "parking",
        question:
          "You park facing uphill on a mountain road that has no curb. Which way do the front wheels go?",
        choices: [
          "Straight ahead, with the parking brake set",
          "To the right, so the car would roll off the road rather than into it",
          "To the left, so the car would roll into the bank",
          "It does not matter without a curb to catch the wheel",
        ],
        correctIndex: 1,
        explanation:
          "Turn them right. With no curb to block the wheel, the only thing you can control is which direction the car travels if it moves, and away from the roadway is the answer.",
        context:
          "Colorado gives three variations. Uphill with a curb, the wheels go away from the curb and you roll back until the tire rests against it. Downhill with a curb, they turn toward the curb. With no curb at all, uphill or downhill, they turn right. Set the parking brake and take the key every time, and leave a manual transmission in low uphill and reverse downhill.",
        trap:
          "No curb feels like the case where wheel direction stops mattering. It is the case where it matters most, because nothing else will stop the car.",
        excerptKey: "parking-no-curb",
        sourceLabel: "Colorado Driver Handbook - Parking",
        sourceUrl: hb(14),
      },
      {
        id: "co_s4_20",
        topic: "impairment",
        question:
          "You are prescribed a new medication and the label warning is missing from the bottle. What does the handbook tell you to do?",
        choices: [
          "Take it and judge the effect on a short drive first",
          "Assume an over-the-counter product is safe to drive on",
          "Wait 24 hours after the first dose, then drive",
          "Ask your doctor or pharmacist about the side effects before driving",
        ],
        correctIndex: 3,
        explanation:
          "Check the label before you drive, and when the label is missing or unclear, ask a doctor or pharmacist. Testing it yourself on the road is exactly the thing the rule exists to prevent.",
        context:
          "Colorado treats impairment by drugs the same as impairment by alcohol, and the word drugs covers prescriptions and over-the-counter products as well as illegal ones. Penalties are the same. Using two or more together is polydrug impairment, which can amplify each substance's effect beyond what either would do alone.",
        trap:
          "Over-the-counter reads as harmless. Antihistamines and cold remedies are among the most common causes of drug-impaired driving.",
        excerptKey: "medication-labels",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(4),
      },
      {
        id: "co_s4_21",
        topic: "sharing",
        question:
          "Why does the handbook tell you to stay behind the white stop bar at a light rather than creeping past it?",
        choices: [
          "Because the signal's sensor sits under the bar",
          "Because crossing it voids the crosswalk",
          "Because many bars are measured to leave trucks the room they need to turn",
          "Because the bar marks the edge of the camera's view",
        ],
        correctIndex: 2,
        explanation:
          "The bar is usually placed with a truck's turning circle in mind. A car sitting a few feet past it takes away the swing a large vehicle needs to get around the corner.",
        context:
          "This belongs to a set of habits for sharing the road with large vehicles. Trucks and buses often swing left before turning right, so cutting between one and the curb invites a collision. They also carry long blind spots called No Zones, and they need much more distance to slow, so you do not pull in front of one until both of its headlights are in your mirror.",
        trap:
          "Edging forward for a better view of cross traffic seems harmless. It is the move that puts your hood inside a truck's turn.",
        excerptKey: "stop-bars-trucks",
        sourceLabel: "Colorado Driver Handbook - Sharing the Road",
        sourceUrl: hb(20),
      },
      {
        id: "co_s4_22",
        topic: "safety",
        question: "What does the handbook say about cruise control on a wet or icy highway?",
        choices: [
          "Do not use it",
          "Use it, since a steady speed reduces skidding",
          "Use it only above 45 mph",
          "Use it but raise the following distance setting",
        ],
        correctIndex: 0,
        explanation:
          "Cruise control comes off on wet or icy roads. If the tires lose grip the system keeps feeding power to regain the set speed, which is the opposite of what a skid needs.",
        context:
          "It sits with the two actions the handbook says matter most in rain, fog, ice, high wind and dust: slow down and increase your following distance. Standing water gets its own rule, which is to find another route rather than drive through it, and if you do start to hydroplane you lift off the gas and steer gently in the direction you are sliding until control returns.",
        trap:
          "Holding a steady speed sounds like the safe choice. Cruise control holds it by adding throttle, which is what turns a slip into a spin.",
        excerptKey: "no-cruise-control-wet",
        sourceLabel: "Colorado Driver Handbook - Weather",
        sourceUrl: hb(16),
      },
      {
        id: "co_s4_23",
        topic: "rules",
        question:
          "You are on a three-lane freeway traveling noticeably slower than the traffic around you. Which lane belongs to you?",
        choices: [
          "The middle lane, to stay clear of merging traffic",
          "The rightmost lane",
          "Any lane, as long as you hold the posted minimum",
          "The leftmost lane, so faster traffic can pass on the right",
        ],
        correctIndex: 1,
        explanation:
          "Slower traffic keeps to the rightmost lane. The leftmost lane is reserved for passing, left turns and conditions where the volume of traffic leaves you nowhere to merge.",
        context:
          "Colorado is specific about the passing lane's purpose, which is why sitting in it at the limit is a problem rather than a courtesy. Passing on the right is only allowed on one-way streets and on roads with two or more lanes in each direction, and never by dropping onto the shoulder or off the pavement.",
        trap:
          "Doing the posted limit does not earn you the left lane. The lane is defined by its function, not by your speed.",
        excerptKey: "freeway-right-lane-slower",
        sourceLabel: "Colorado Driver Handbook - Freeway Driving",
        sourceUrl: hb(14),
      },
      {
        id: "co_s4_24",
        topic: "emergencies",
        question:
          "You are in a crash with injuries. What are the first three things the handbook tells you to do?",
        choices: [
          "Photograph the scene, move the vehicles, then call your insurer",
          "Exchange details, then drive to the nearest police station",
          "Move the vehicles clear, call a tow, then call law enforcement",
          "Stop and stay, check for injuries and help where you reasonably can, and call law enforcement and emergency services",
        ],
        correctIndex: 3,
        explanation:
          "Stop immediately and never leave the scene, check for injuries and render reasonable assistance where it is practical, then call law enforcement and emergency personnel. Everything else waits.",
        context:
          "The Move It law changes this only for a minor crash on a divided highway where nobody is hurt, no alcohol or drugs are involved and the vehicles are drivable - then you are required to move them off the highway. When there are no injuries you still exchange names, addresses, phone numbers, registration and insurance details, and file a report with law enforcement within 24 hours.",
        trap:
          "Moving the cars first is right for a fender-bender and wrong the moment anyone is hurt.",
        excerptKey: "crash-steps",
        sourceLabel: "Colorado Driver Handbook - Crash Tips",
        sourceUrl: hb(26),
      },
      {
        id: "co_s4_25",
        topic: "signs",
        question:
          "You find a blue sign at a railroad crossing carrying a phone number. What is it for?",
        choices: [
          "Reporting a stalled train to the transit authority",
          "Requesting a crossing to be added to a quiet zone",
          "Reporting a problem or emergency at that crossing",
          "Calling for roadside assistance in that county",
        ],
        correctIndex: 2,
        explanation:
          "That is an Emergency Notification System sign. Every highway-rail grade crossing carries one, and the number reaches the people who can stop trains approaching that specific crossing.",
        context:
          "It is the number to call when a vehicle is stuck on the tracks, when a gate is stuck down or up, or when something is blocking the crossing. If your own vehicle stalls on a crossing, the handbook's order is to get everyone out and well away from the tracks first, then call, whether or not you can see a train.",
        trap:
          "Calling 911 for a car on the tracks is slower than the ENS number, which reaches the railroad's dispatcher directly.",
        excerptKey: "ens-blue-sign",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(8),
      },
      {
        id: "co_s4_26",
        topic: "rightOfWay",
        question:
          "A city bus at a stop ahead switches on its signal to pull back into your lane. What does Colorado require?",
        choices: [
          "Yield to it - a bus leaving a stop has the right-of-way",
          "Hold your lane; it must wait for a gap like anyone else",
          "Stop completely until the bus has fully merged",
          "Change lanes, or slow to 20 mph below the limit",
        ],
        correctIndex: 0,
        explanation:
          "Buses have the right-of-way when leaving a drop-off and merging back into traffic, so you ease off and let it out.",
        context:
          "There is a second, more formal version of this rule for transit buses. When the yield sign on the back of the bus is illuminated and the bus is signaling to enter a lane, you must yield. That takes it out of the courtesy category and puts it in the same class as any other yield duty.",
        trap:
          "The ordinary merging rule says the vehicle joining the road yields. A bus leaving a stop is the exception to it.",
        excerptKey: "bus-row-leaving-stop",
        sourceLabel: "Colorado Driver Handbook - Sharing the Road",
        sourceUrl: hb(20),
      },
      {
        id: "co_s4_27",
        topic: "speed",
        question:
          "You are on an interstate through a Colorado city and no speed limit is posted. What does the state default to?",
        choices: ["45 mph", "55 mph", "65 mph", "75 mph"],
        correctIndex: 1,
        explanation:
          "Fifty-five is the default on urban interstates and highways. The higher 65 to 75 band belongs to designated rural interstates and highways, and it has to be posted.",
        context:
          "Colorado's unposted defaults run 20 mph on narrow, winding mountain highways and blind curves, 25 in any business district, 30 in any residence district, 40 on open mountain highways, and 55 on urban interstates and highways. Cities and towns may set lower limits by ordinance, and the statutory ceiling anywhere in the state is 75 mph.",
        trap:
          "Seventy-five is the maximum that may ever be posted, not a default. It applies only where it is signed on a designated rural stretch.",
        excerptKey: "speed-defaults-high",
        sourceLabel: "Colorado Driver Handbook - Speed",
        sourceUrl: hb(12),
      },
      {
        id: "co_s4_28",
        topic: "safety",
        question: "How does the handbook tell you to structure a long drive?",
        choices: [
          "Drive through and make up sleep afterward",
          "Stop only when you notice yourself drifting",
          "Swap drivers every hour regardless of tiredness",
          "Break it into two-hour segments, and pull off and rest if you get drowsy",
        ],
        correctIndex: 3,
        explanation:
          "Two-hour segments, with a real stop at the end of each. If drowsiness arrives before the two hours are up, the instruction is to pull off the road and rest rather than push on.",
        context:
          "Fatigue sits in the same chapter as vision and hearing because the handbook treats it as a condition that makes you unfit to drive, not a mood. Colorado also bans driving while wearing earphones, defined as any device or headset covering all or part of both ears, on the same reasoning: what you cannot hear you cannot react to.",
        trap:
          "Waiting until you feel sleepy is too late. Micro-sleeps arrive without warning, and the driver rarely notices the first one.",
        excerptKey: "fatigue-two-hours",
        sourceLabel: "Colorado Driver Handbook - Before You Drive",
        sourceUrl: hb(5),
      },
      {
        id: "co_s4_29",
        topic: "rules",
        question:
          "Signs warn that the right lane closes in half a mile and traffic is heavy. What does the handbook tell you to do?",
        choices: [
          "Move left immediately and leave the closing lane empty",
          "Straddle both lanes to stop anyone passing",
          "Use both lanes to the merge point, then take turns filling the open lane",
          "Match the pace of the left lane and merge only if someone waves you in",
        ],
        correctIndex: 2,
        explanation:
          "Colorado teaches the zipper merge. Both lanes stay in use right up to the closure, and at the merge point drivers alternate one for one before resuming speed.",
        context:
          "The point is that the queue is shorter and moves better when both lanes carry traffic, and the merge itself becomes a predictable alternation instead of a scramble. It still runs on the ordinary lane-change duty, so you do not force your way in where another driver would have to brake for you.",
        trap:
          "Merging early feels like the polite move, and it is the move that doubles the length of the queue.",
        excerptKey: "zipper-merge",
        sourceLabel: "Colorado Driver Handbook - Safe Driving Tips",
        sourceUrl: hb(19),
      },
      {
        id: "co_s4_30",
        topic: "licensing",
        question:
          "An officer hands you a ticket and asks you to sign it. What does your signature mean?",
        choices: [
          "Nothing about guilt - but refusing to sign may get you arrested",
          "That you admit the offense and waive a hearing",
          "That you agree to pay the fine within 30 days",
          "That you accept the officer's account of the facts",
        ],
        correctIndex: 0,
        explanation:
          "Signing acknowledges receipt, not fault, and it leaves every defense open. Refusing to sign is the part that carries a risk, because it may result in your arrest.",
        context:
          "The handbook's advice for the whole stop follows the same logic: keep your hands on the wheel or somewhere clearly visible, and tell the officer at first contact if there is a weapon in the vehicle without reaching for it or trying to hand it over. The roadside is not where the case is argued.",
        trap:
          "Refusing to sign feels like standing your ground. It changes nothing about the ticket and can turn a stop into an arrest.",
        excerptKey: "ticket-signature",
        sourceLabel: "Colorado Driver Handbook - Safe Driving Tips",
        sourceUrl: hb(19),
      },
      {
        id: "co_s4_31",
        topic: "sharing",
        question:
          "What is the Dutch Reach, and why does the handbook recommend it to Colorado drivers?",
        choices: [
          "Reaching across to check the passenger mirror before opening",
          "Opening your door with the hand furthest from it, which turns you to look back for cyclists",
          "Opening the door only a few inches first as a warning",
          "Reaching back to check the rear seat before you get out",
        ],
        correctIndex: 1,
        explanation:
          "You use the hand nearer the center of the car, which twists your body around and puts your eyes on the lane behind you. The look is the point; the hand is just what forces it.",
        context:
          "Colorado builds a lot of the bicycle chapter around the door zone. Cyclists are entitled to ride in the center of a narrow lane precisely to stay clear of opening doors, along with broken glass and drainage grates. The handbook also asks you not to sound your horn near a bicyclist unless a crash is imminent, because the surprise can put them down.",
        trap:
          "Cracking the door slowly is not the same protection. A cyclist arriving at 20 mph has no time to read a door that is already moving.",
        excerptKey: "dutch-reach",
        sourceLabel: "Colorado Driver Handbook - Bicyclists",
        sourceUrl: hb(23),
      },
      {
        id: "co_s4_32",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and there is no train in sight. What comes first?",
        choices: [
          "Try the starter a few times while you still have room",
          "Put it in neutral and push it clear yourself",
          "Set the hazard lights and wait beside the car for help",
          "Get everyone out and move well away from the tracks",
        ],
        correctIndex: 3,
        explanation:
          "People out and clear of the tracks, immediately, whether or not a train is visible. Only then do you worry about the vehicle, and you call the number on the crossing's blue Emergency Notification System sign.",
        context:
          "The reason is stopping distance. A freight train at 55 mph needs about a mile to stop, so by the time its driver can see you the outcome is already decided. Trains also overhang the rails by about three feet, which is why the handbook wants you at least 10 feet back when you are waiting and well away when you are on foot.",
        trap:
          "One more turn of the key seems worth trying. There is no version of this where a car is worth the seconds.",
        excerptKey: "railroad-stalled",
        sourceLabel: "Colorado Driver Handbook - Railroad Crossing",
        sourceUrl: hb(21),
      },
      {
        id: "co_s4_33",
        topic: "parking",
        question:
          "You leave your car parked at the roadside overnight. What does Colorado law require of its lights?",
        choices: [
          "Nothing, if the street has lighting",
          "Hazard flashers from sunset to sunrise",
          "Parking lights on from sunset to sunrise or whenever visibility is under 1,000 feet",
          "Headlights on low beam until you return",
        ],
        correctIndex: 2,
        explanation:
          "A vehicle parked alongside the roadway needs its parking lights on between sunset and sunrise, and any other time visibility drops below 1,000 feet. It applies whether or not anyone is in the car.",
        context:
          "The same 1,000-foot visibility trigger governs headlights while you are moving. The one thing you may not do is drive on parking lights alone; they exist to make a stationary vehicle visible, and they throw no useful light on the road.",
        trap:
          "Streetlights do not satisfy the rule. The duty is on the vehicle, not on the street.",
        excerptKey: "parking-lights-only",
        sourceLabel: "Colorado Driver Handbook - Night Driving",
        sourceUrl: hb(16),
      },
      {
        id: "co_s4_34",
        topic: "signs",
        question: "A stretch of pavement is painted solid green. What does that tell you?",
        choices: [
          "It is a lane or area for bicyclists, painted to make them more visible",
          "It is a bus-only lane",
          "It is a low-emission vehicle lane",
          "It marks a pedestrian crossing that has no signal",
        ],
        correctIndex: 0,
        explanation:
          "Green paint marks bicycle space, and the color is there to make riders more visible at the places conflicts happen - through intersections, across turn lanes and at merge points.",
        context:
          "Colorado backs it with real prohibitions. Drivers may not drive, idle or park in a bike lane or otherwise obstruct it, and a bike lane continues through an intersection whether or not the paint carries across. When you merge across or turn over a bike lane, the cyclist in it has the right-of-way.",
        trap:
          "Green paint reads as decoration or as a shared space. Stopping on it, even briefly, is an offense.",
        excerptKey: "green-paint",
        sourceLabel: "Colorado Driver Handbook - Pavement Markings",
        sourceUrl: hb(9),
      },
      {
        id: "co_s4_35",
        topic: "impairment",
        question: "What does the handbook mean by polydrug impairment?",
        choices: [
          "Repeat impaired-driving convictions within five years",
          "Two or more drugs used together, including alcohol, marijuana and medications",
          "A drug taken at more than the prescribed dose",
          "Any drug detected in the blood alongside a BAC over 0.08",
        ],
        correctIndex: 1,
        explanation:
          "Polydrug impairment is what happens when two or more substances are in you at once, and the list includes alcohol, marijuana, prescriptions and over-the-counter products in any combination.",
        context:
          "The reason it gets its own heading is that the combination can be worse than either substance alone. Colorado does not treat any of it as a lesser offense: driving impaired by drugs, prescribed or not, carries the same penalties as driving impaired by alcohol, and a medical marijuana card is not a defense.",
        trap:
          "One drink plus one legal medication reads as staying under the limit twice over. It can put you over the impairment line with neither substance high on its own.",
        excerptKey: "polydrug",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(5),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The rules Colorado drivers get wrong out loud: the passing myth about the speed limit, the school-bus median, the driving log people remember as 60 hours, and the four parking distances the handbook never prints.",
    questions: [
      {
        id: "co_s5_01",
        topic: "rules",
        question:
          "You are passing on a two-lane road posted at 55 mph and need a few more mph to complete the maneuver safely. What does Colorado allow?",
        choices: [
          "Nothing above 55 - exceeding the posted limit while passing is an illegal passing behavior",
          "Up to 10 mph over, for the length of the pass only",
          "Any speed needed, provided you return to the limit once back in your lane",
          "Up to 10 mph over, but only where the center line is broken",
        ],
        correctIndex: 0,
        explanation:
          "Colorado lists exceeding the posted speed limit while passing among the behaviors that are illegal when passing, alongside passing in a marked no-passing zone and passing a stopped school bus. The limit does not lift for the length of a pass.",
        context:
          "What the handbook asks instead is that you only start a pass you can finish inside the limit. You need to be back on the right side before you come within 200 feet of an oncoming vehicle, which includes a bicyclist in the oncoming lane or on the shoulder, and you may not pass at all within 100 feet of an intersection or railroad crossing.",
        trap:
          "The belief that the limit is suspended during a pass circulates widely in Colorado, sometimes attributed to the written test itself. The handbook says the opposite in a bulleted list.",
        excerptKey: "illegal-passing-list",
        sourceLabel: "Colorado Driver Handbook - Passing",
        sourceUrl: hb(16),
        commonlyMissed: true,
      },
      {
        id: "co_s5_02",
        topic: "parking",
        question:
          "How close to a crosswalk at an intersection does Colorado law let you park?",
        choices: ["No closer than 5 feet", "No closer than 10 feet", "No closer than 15 feet", "No closer than 20 feet"],
        correctIndex: 3,
        explanation:
          "Twenty feet from a crosswalk at an intersection. The distance exists so a driver turning in can see a pedestrian stepping off the curb before the two meet.",
        context:
          "The handbook never prints this number - it lists crosswalks among the places you may not park and stops there. The figure comes from the parking statute, which sets out a family of distances: 20 feet from a crosswalk at an intersection, 5 feet from a driveway, 50 feet from the nearest rail of a railroad crossing, 30 feet from a traffic signal or stop sign, and 15 feet from a fire hydrant.",
        trap:
          "Fifteen feet is the hydrant figure and it is the one everybody remembers, so it gets applied to crosswalks as well.",
        excerptKey: "crs-parking-crosswalk-20-feet",
        sourceLabel: "C.R.S. 42-4-1204 - Stopping, standing, or parking prohibited in specified places",
        sourceUrl: CRS(545),
        commonlyMissed: true,
      },
      {
        id: "co_s5_03",
        topic: "licensing",
        question:
          "A 16-year-old is counting down to their Colorado drive test. How much logged driving does the state actually require?",
        choices: [
          "40 hours, with 5 at night",
          "50 hours, with 10 of them at night",
          "60 hours, with 10 at night",
          "There is no logged-hours requirement once you turn 16",
        ],
        correctIndex: 1,
        explanation:
          "Fifty hours in total, and ten of them have to be after dark. The log has to be completed and signed, and it goes in with the license application.",
        context:
          "The hours are only half of it. A minor also has to hold the instruction permit for a full 12 months, or until their 18th birthday if that comes first. Someone under 16 years and 6 months needs 6 hours of behind-the-wheel training with an approved instructor on top, and that requirement is waived once they reach 16 and 6 months.",
        trap:
          "Sixty hours is the number Colorado drivers repeat to each other online. The state's figure is 50, and the night hours are what people forget to log.",
        excerptKey: "web-permit-hold-12-months",
        sourceLabel: "dmv.colorado.gov - Permits and First-Time Driver License",
        sourceUrl: PERMITS,
        commonlyMissed: true,
      },
      {
        id: "co_s5_04",
        topic: "sharing",
        question:
          "You are traveling the opposite way from a school bus stopped with red lights flashing. The road has four lanes with a raised median between the directions. What must you do?",
        choices: [
          "Stop, because a school bus stops traffic in every direction",
          "Stop, unless you are already past the bus",
          "Keep going - only the traffic behind the bus has to stop",
          "Slow to 20 mph and pass with care",
        ],
        correctIndex: 2,
        explanation:
          "A median separating the directions is what releases oncoming traffic. On a divided highway of four or more lanes with a median, only the vehicles behind the bus stop.",
        context:
          "Take the median away and the answer flips. On a two-lane road traffic in both directions stops, and on a four-lane road without a median traffic in both directions stops as well. Where you do stop, you stay at least 20 feet from the bus's front or rear bumper, and you stay stopped until the red lights go off.",
        trap:
          "Counting lanes is not the test. Four lanes with no median stops you exactly as a two-lane road does.",
        excerptKey: "school-bus-divided-highway",
        sourceLabel: "Colorado Driver Handbook - Sharing the Road",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "co_s5_05",
        topic: "impairment",
        question:
          "A 19-year-old is stopped and breath-tests at 0.03. What has Colorado law been broken?",
        choices: [
          "Underage drinking and driving - a class A traffic infraction at 0.02 or more",
          "Nothing, since 0.03 is well under 0.08",
          "DWAI, which starts at 0.05 for every driver",
          "Nothing, but the license is suspended automatically",
        ],
        correctIndex: 0,
        explanation:
          "Colorado sets a separate offense for drivers under 21 at a BAC of at least 0.02 but not more than 0.05, charged as a class A traffic infraction. It is a lower bar than DWAI and much lower than DUI.",
        context:
          "Above that band the ordinary offenses take over: DWAI at 0.05, and DUI per se above 0.08. A driver under 21 can also lose the license simply for being convicted of buying or possessing alcohol, with no driving involved at all. Colorado does not allow a plea bargain out of an alcohol or drug related driving offense.",
        trap:
          "Zero-tolerance gets read as literally zero, or else as the adult 0.08. The number is 0.02, which one standard drink can produce.",
        excerptKey: "crs-udd-02-05",
        sourceLabel: "C.R.S. 42-4-1301(2)(d)(I) - Driving under the influence",
        sourceUrl: CRS(558),
        commonlyMissed: true,
      },
      {
        id: "co_s5_06",
        topic: "parking",
        question: "How close to a private driveway does Colorado law let you park?",
        choices: ["Right up to the edge, if you block none of it", "No closer than 3 feet", "No closer than 10 feet", "No closer than 5 feet"],
        correctIndex: 3,
        explanation:
          "Five feet, and the statute covers public and private driveways alike. The gap is what lets a driver backing out see down the street before their bumper is in it.",
        context:
          "This is another number the handbook leaves out. It lists the categories of prohibited parking - crosswalks, sidewalks, bridges, elevated structures, railroad tracks, controlled-access highways - and prints only the 30-foot figure for a traffic signal, stop sign or railroad crossing and the 15-foot figure for a hydrant. The rest live in the parking statute.",
        trap:
          "Not blocking a driveway is not the same as clearing it by 5 feet. A car parked flush to the apron is parked illegally even with the entrance wide open.",
        excerptKey: "crs-parking-driveway-5-feet",
        sourceLabel: "C.R.S. 42-4-1204 - Stopping, standing, or parking prohibited in specified places",
        sourceUrl: CRS(545),
      },
      {
        id: "co_s5_07",
        topic: "rightOfWay",
        question:
          "You are about to enter a roundabout as a loaded semi is coming around it. What does Colorado law require?",
        choices: [
          "Enter first, since the truck has more room to slow",
          "Yield to the truck - drivers must yield to large vehicles entering, exiting or in a roundabout",
          "Stop completely and wait for the roundabout to clear entirely",
          "Sound your horn and proceed at walking pace",
        ],
        correctIndex: 1,
        explanation:
          "Colorado writes a specific yield for large vehicles in roundabouts. Trucks, buses, emergency vehicles and recreational vehicles get the right-of-way whether they are entering, exiting or already circulating.",
        context:
          "There is a second half to it: where two large vehicles meet in a roundabout at the same time, the driver on the right yields to the driver on the left. With no large vehicles involved, the ordinary rule applies and you yield to traffic approaching on your left, without stopping completely unless traffic gives you no gap.",
        trap:
          "The general roundabout rule is yield to circulating traffic. The large-vehicle rule adds a yield you owe even when the truck is still entering.",
        excerptKey: "roundabout-large-vehicle",
        sourceLabel: "Colorado Driver Handbook - Lane Controls",
        sourceUrl: hb(10),
      },
      {
        id: "co_s5_08",
        topic: "parking",
        question: "How far from the nearest rail of a railroad crossing may you park?",
        choices: ["15 feet", "30 feet", "50 feet", "100 feet"],
        correctIndex: 2,
        explanation:
          "Fifty feet from the nearest rail. It is the longest of Colorado's parking setbacks, because a train overhangs the rails and a stopped vehicle near the crossing blocks the sight line for everyone approaching it.",
        context:
          "Three railroad distances get confused with one another. Fifty feet is the parking setback. Fifteen to fifty feet is the band where a driver required to stop for a railroad signal must stop. And ten feet is how far back you wait behind the tracks when there is no painted stop line.",
        trap:
          "Thirty feet is the handbook's figure for parking near a railroad crossing sign, which is not the same as the statute's 50 feet from the rail itself.",
        excerptKey: "crs-parking-railroad-50-feet",
        sourceLabel: "C.R.S. 42-4-1204 - Stopping, standing, or parking prohibited in specified places",
        sourceUrl: CRS(546),
      },
      {
        id: "co_s5_09",
        topic: "safety",
        question:
          "It is mid-afternoon and a dust storm has cut visibility to about 600 feet. What does Colorado law require of your headlights?",
        choices: [
          "They must be on, because people and vehicles are not clearly discernible at 1,000 feet",
          "Nothing, since it is daylight",
          "Parking lights are enough in daylight",
          "Hazard flashers instead, so you are seen from behind",
        ],
        correctIndex: 0,
        explanation:
          "The statute ties lights to visibility, not to the clock. Whenever insufficient light or unfavorable atmospheric conditions mean people and vehicles are not clearly visible at 1,000 feet, the headlights go on.",
        context:
          "Sunset to sunrise is the other trigger, and either one is enough on its own. Once the lights are on, the dimming rules follow: high beams come down before you are within 500 feet of an oncoming vehicle, and you use low beams within 200 feet of a vehicle you are following. In fog at night, low beams and fog lights beat high beams, which reflect back at you.",
        trap:
          "Daylight feels like an exemption. Colorado's rule is about how far you can be seen, and a dust storm or heavy snow can breach it at noon.",
        excerptKey: "crs-lamps-1000-feet",
        sourceLabel: "C.R.S. 42-4-204 - When lighted lamps are required",
        sourceUrl: CRS(377),
      },
      {
        id: "co_s5_10",
        topic: "impairment",
        question:
          "Someone has been drinking and wants to drive home. Which of these actually lowers their blood alcohol content?",
        choices: [
          "Strong coffee",
          "A cold shower and fresh air",
          "A large meal",
          "Time, at roughly 0.015 percent an hour",
        ],
        correctIndex: 3,
        explanation:
          "Only the passage of time. Once alcohol is in the bloodstream the body clears it at roughly 0.015 percent an hour, and nothing available in a kitchen changes that rate.",
        context:
          "The arithmetic is worth doing before you need it. A driver at 0.09 is still over the adult limit about an hour later, and a driver under 21 who is at 0.06 needs nearly three hours to come back under 0.02. Coffee and cold air can make someone feel more alert while leaving them exactly as impaired.",
        trap:
          "Feeling sober is not the test, and it is the trap the alertness tricks set. The BAC is unchanged.",
        excerptKey: "only-time-sobers",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(3),
        commonlyMissed: true,
      },
      {
        id: "co_s5_11",
        topic: "licensing",
        question:
          "A 17-year-old has held a Colorado license for three months and wants to drive home at 1 a.m. What does the law say?",
        choices: [
          "Allowed if they are driving alone",
          "Not allowed unless an instructor, parent or legal guardian is with them",
          "Allowed once they have held the license 90 days",
          "Allowed as long as they are within their home county",
        ],
        correctIndex: 1,
        explanation:
          "For the first year of licensed driving, midnight to 5 a.m. is off limits unless an instructor, a parent or a legal guardian is in the car. Any other licensed adult does not satisfy it.",
        context:
          "There are narrow exceptions: driving to or from school or work with a signed statement from the school or employer, a medical emergency, and emancipated minors. The passenger limits run alongside on their own clock - no passengers under 21 for the first six months, one after six months, and as many as there are seat belts after a year.",
        trap:
          "The curfew and the passenger rules are on different timers. Clearing six months of passenger restrictions does not end the curfew.",
        excerptKey: "curfew-midnight-5",
        sourceLabel: "Colorado Driver Handbook - Minor Drivers",
        sourceUrl: hb(2),
        commonlyMissed: true,
      },
      {
        id: "co_s5_12",
        topic: "rules",
        question:
          "A street has a shared center turn lane marked with yellow lines and arrows both ways. You want to turn left into a store from the through lane beside it. What does the law require?",
        choices: [
          "Turn from the through lane if the center lane is occupied",
          "Signal for 200 feet and turn from whichever lane is clear",
          "Move into the center turn lane first - you may not turn left from any other lane",
          "Use the center lane only if you are turning left across three or more lanes",
        ],
        correctIndex: 2,
        explanation:
          "Where a shared center turn lane exists, that is the only lane you may turn left from. Turning left out of the through lane beside it is a violation even when the center lane is empty.",
        context:
          "The lane's other limits are just as firm. You may not drive along it, and you may not use it to pass. You may sit in it while waiting for a gap large enough to complete the turn, which is what it is there for - taking the turning car out of the through lane so traffic behind is not stopped.",
        trap:
          "Using it as a merging or acceleration lane after turning in from a side street is common and is not what it is for.",
        excerptKey: "center-turn-lane-only",
        sourceLabel: "Colorado Driver Handbook - Lane Controls",
        sourceUrl: hb(10),
      },
      {
        id: "co_s5_13",
        topic: "sharing",
        question: "Two cyclists ahead of you are riding side by side. Is that legal in Colorado?",
        choices: [
          "Yes, as long as they are not impeding the normal and reasonable movement of traffic",
          "No, cyclists must ride single file on any public road",
          "Only on roads with a marked bike lane",
          "Only where the speed limit is 25 mph or lower",
        ],
        correctIndex: 0,
        explanation:
          "Riding two abreast is lawful in Colorado so long as it does not impede the normal and reasonable movement of traffic. It is a conditional permission, not a prohibition.",
        context:
          "Bicycles are vehicles on Colorado roads with most of the same rights and duties as cars. Riders may take the center of a narrow lane to stay clear of car doors, glass and drainage grates, and on a multi-lane one-way street they may ride on either the right or the left side. Passing any of them needs three feet of clearance.",
        trap:
          "Single-file is a rule in some states and an assumption in most drivers' heads. Colorado does not have it.",
        excerptKey: "bike-side-by-side",
        sourceLabel: "Colorado Driver Handbook - Bicyclists",
        sourceUrl: hb(22),
      },
      {
        id: "co_s5_14",
        topic: "emergencies",
        question:
          "You have a minor collision on a divided highway. Nobody is hurt, no alcohol is involved and both cars still drive. What does Colorado's Move It law require?",
        choices: [
          "Leave everything where it stopped until an officer arrives",
          "Move only if the vehicles are blocking a travel lane",
          "Photograph the scene first, then move the vehicles",
          "Move the vehicles off the highway",
        ],
        correctIndex: 3,
        explanation:
          "Under those three conditions the law requires you to move the vehicles off the highway. It is a duty rather than an option, because a stopped car in a live lane is what turns one crash into several.",
        context:
          "All three conditions have to hold: the vehicle is drivable, no drugs or alcohol are involved, and nobody is injured. Fail any of them and the ordinary crash rules govern - stop, stay, help where you reasonably can, and call law enforcement. Either way you exchange details and file a report with law enforcement within 24 hours.",
        trap:
          "Preserving the scene is the instinct from television. On a Colorado divided highway with no injuries it is the wrong move and against the law.",
        excerptKey: "move-it-law",
        sourceLabel: "Colorado Driver Handbook - Crash Tips",
        sourceUrl: hb(26),
      },
      {
        id: "co_s5_15",
        topic: "licensing",
        question:
          "You fail the written permit test and want to retake it. What does the state charge for each retest?",
        choices: ["Nothing - retests are free", "$11.50", "$25", "$45, the same as the original"],
        correctIndex: 1,
        explanation:
          "An $11.50 state fee for each retest, payable online in advance or in person at your appointment. It is charged per attempt, not once.",
        context:
          "There is no cap on attempts, but only two tests a day. The test can be taken in a driver license office, at a driving school, or online through the DMV's @Home Driving Knowledge Test, which gives you 60 minutes and needs an adult over 19 as proxy if you are under 19. In-office tests are not started within 30 minutes of closing.",
        trap:
          "Passing the test online does not produce a permit. You still need an appointment at a state office with the documents, and for a minor the signed Affidavit of Liability.",
        excerptKey: "web-retest-fee",
        sourceLabel: "dmv.colorado.gov - Permits and First-Time Driver License",
        sourceUrl: PERMITS,
        commonlyMissed: true,
      },
      {
        id: "co_s5_16",
        topic: "rules",
        question:
          "A cyclist is ahead of you on a road with double solid yellow lines and nothing is coming. Can you legally cross the line to pass with three feet of room?",
        choices: [
          "No, double solid yellow means no crossing for any reason",
          "Only if the cyclist waves you past",
          "Yes, when there is no oncoming traffic and it is needed to give the three feet",
          "Yes, but only where the speed limit is 35 mph or less",
        ],
        correctIndex: 2,
        explanation:
          "Colorado writes an explicit exception. Crossing a double yellow to pass a bicyclist is legal when the oncoming lane is clear and the crossing is what gives you the three feet of clearance the law requires.",
        context:
          "The three feet are measured from the outermost part of your vehicle, mirrors and trailers included, to the left side of the bicycle. If you cannot produce that gap, the instruction is not to squeeze past but to slow down and stay behind until it is safe. You may also cross a solid yellow to turn left into an alley, private road or driveway.",
        trap:
          "Double solid yellow is taught as absolute, so drivers either squeeze by inside the lane or sit behind indefinitely. Colorado's rule permits the crossing when it is the safe move.",
        excerptKey: "bike-3-feet-double-yellow",
        sourceLabel: "Colorado Driver Handbook - Bicyclists",
        sourceUrl: hb(22),
        commonlyMissed: true,
      },
      {
        id: "co_s5_17",
        topic: "impairment",
        question:
          "A driver charged with DUI holds a Colorado medical marijuana card. What does the card do for the charge?",
        choices: [
          "Nothing - medicinal use is not a defense to DUI or DWAI",
          "It reduces the charge to DWAI",
          "It is a complete defense if the dose was within the prescription",
          "It raises the THC inference level from 5 to 10 nanograms",
        ],
        correctIndex: 0,
        explanation:
          "The handbook says it plainly: that marijuana or another drug was used for medicinal purposes is not a defense to DUI or DWAI. Lawful possession and lawful driving are separate questions.",
        context:
          "Colorado allows a permissible inference that a driver was under the influence at 5 nanograms of THC per milliliter of blood, and there is no THC inference level for DWAI at all - a DWAI case can rest on impairment to the slightest degree. Prescription and over-the-counter medications sit under the same rules as illegal drugs.",
        trap:
          "Legal to possess reads as legal to drive on. Colorado separated those two questions when it legalized the substance.",
        excerptKey: "medical-marijuana-no-defense",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(4),
        commonlyMissed: true,
      },
      {
        id: "co_s5_18",
        topic: "rightOfWay",
        question:
          "Your light turns green and a car is still finishing its turn through the intersection. What does Colorado's right-of-way law actually give you?",
        choices: [
          "The right-of-way, which the other driver has taken from you",
          "The right-of-way, but only once the intersection is clear",
          "A duty to sound your horn before entering",
          "Nothing - the law says who must yield, it does not give anyone the right-of-way",
        ],
        correctIndex: 3,
        explanation:
          "Colorado states this directly: the law sets out who has to yield, and it does not hand anyone the right-of-way, green light included. What you have is permission to proceed once you have yielded to whoever is already in the intersection or crosswalk.",
        context:
          "The same idea closes the four-way stop rules, where the handbook says that regardless of who has the right-of-way you are always responsible for avoiding a crash. That is why claiming the right-of-way is never an answer on this test: the duty being tested is always the yielding one.",
        trap:
          "Being right does not stop the collision, and it does not clear you afterward. The avoidance duty sits on both drivers.",
        excerptKey: "row-nobody-has-it",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "co_s5_19",
        topic: "safety",
        question:
          "You want music on a long drive. What does Colorado law say about earphones behind the wheel?",
        choices: [
          "One earpiece is allowed if the other ear is clear",
          "You may not drive while wearing earphones, defined as any device covering all or part of both ears",
          "They are allowed below 45 mph",
          "They are allowed for hands-free phone calls only",
        ],
        correctIndex: 1,
        explanation:
          "Colorado bans driving while wearing earphones, and its definition is broad: any device or headset covering all or a portion of both ears. Volume is not the test - coverage is.",
        context:
          "The reasoning matches the rest of the Before You Drive chapter, which treats what you can hear as part of what you can perceive: a siren behind you, a horn, a train, the sound of your own tires losing grip. The separate mobile device law bans handheld use while driving, with exceptions only for contacting law enforcement or the fire department, a genuine emergency, and hands-free operation.",
        trap:
          "Because it is written around both ears, drivers assume one earbud is fine. The wording reaches any device covering part of both ears.",
        excerptKey: "earphones",
        sourceLabel: "Colorado Driver Handbook - Before You Drive",
        sourceUrl: hb(5),
        commonlyMissed: true,
      },
      {
        id: "co_s5_20",
        topic: "licensing",
        question:
          "A 17-year-old has held their Colorado license for eight months. Who may ride with them without an adult in the car?",
        choices: [
          "Nobody under 21 for the whole first year",
          "Up to three passengers under 21",
          "One passenger under 21, with siblings and medical emergencies excepted",
          "As many passengers as there are seat belts",
        ],
        correctIndex: 2,
        explanation:
          "After six months a young driver may carry one passenger under 21. Siblings are an exception to the count, and so is a passenger being carried because of a medical emergency.",
        context:
          "The ladder runs in three steps. For the first six months, no passengers under 21 at all unless a parent or another licensed adult driver is in the car. From six months, one. From a year, as many as there are seat belts. On top of that, everyone in a car driven by someone under 18 must be belted, and the number of passengers must not exceed the number of belts.",
        trap:
          "The first-year midnight to 5 a.m. curfew keeps running through all of this. Reaching six months changes the passenger count and nothing else.",
        excerptKey: "passengers-after-6-months",
        sourceLabel: "Colorado Driver Handbook - Minor Drivers",
        sourceUrl: hb(2),
        commonlyMissed: true,
      },
      {
        id: "co_s5_21",
        topic: "rules",
        question:
          "On a two-lane road, the car ahead of you stops at a crosswalk with no signal. What must you do?",
        choices: [
          "Stop behind it - you may not pass a vehicle stopped at a crosswalk",
          "Pass slowly on the left if the crosswalk looks empty",
          "Sound the horn and continue if nobody is visible",
          "Wait three seconds, then pass",
        ],
        correctIndex: 0,
        explanation:
          "Never pass a vehicle stopped at a crosswalk. It is stopped for a reason you cannot see, and the reason is usually a pedestrian its body is hiding from you.",
        context:
          "On a multi-lane road the same rule means stopping behind the crosswalk in your own lane rather than gliding past in the next one. Colorado also tells you never to stop with any part of your vehicle covering a crosswalk, and pedestrians have the right-of-way at all intersections and crosswalks whether or not the lines are painted.",
        trap:
          "The car ahead blocks exactly the sight line you would need to make this call. Passing here is a bet placed with no information.",
        excerptKey: "crosswalk-stopped-vehicle",
        sourceLabel: "Colorado Driver Handbook - Pavement Markings",
        sourceUrl: hb(9),
        commonlyMissed: true,
      },
      {
        id: "co_s5_22",
        topic: "impairment",
        question:
          "A first-time DUI defendant hopes to plead down to a lesser non-alcohol offense. What does Colorado law allow?",
        choices: [
          "A plea to careless driving if the BAC was under 0.10",
          "A plea to a non-alcohol offense at the judge's discretion",
          "A deferred judgment that erases the offense after a year",
          "No plea bargain out of an alcohol or drug related driving offense",
        ],
        correctIndex: 3,
        explanation:
          "Colorado does not allow a plea bargain out of an alcohol or drug related driving offense. The charge that is filed is the charge that gets resolved.",
        context:
          "That is why the numbers matter so much here. A first DWAI carries 8 points, a $200 to $500 fine, 2 to 180 days of jail exposure and 24 to 48 hours of public service. A first DUI carries a 9-month revocation, a $600 to $1,000 fine, 5 to 365 days and 48 to 96 hours. Refusing the test on its own revokes the license for a year and requires an interlock for two.",
        trap:
          "Plea bargaining is routine in most traffic matters, which makes this exception easy to miss. Colorado carved impaired driving out of it.",
        excerptKey: "no-plea-bargain",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(5),
      },
      {
        id: "co_s5_23",
        topic: "parking",
        question:
          "You want to leave the car near a corner with a stop sign. How close to the sign does the handbook let you park?",
        choices: [
          "10 feet",
          "No closer than 30 feet",
          "15 feet, the same as a fire hydrant",
          "Right up to it, as long as the sign stays visible",
        ],
        correctIndex: 1,
        explanation:
          "Thirty feet. The same 30-foot setback covers a traffic signal, a stop sign and a railroad crossing, and it exists so approaching drivers can see the control before they reach it.",
        context:
          "The handbook prints two parking distances and no more: 30 feet from a signal, stop sign or railroad crossing, and 15 feet from a fire hydrant. Everything else it gives as a category - crosswalks, sidewalks, bridges, elevated structures, railroad tracks and controlled-access highways - with the actual distances left to the statute.",
        trap:
          "Fifteen feet is the hydrant number and it gets applied to everything. The stop-sign figure is double it.",
        excerptKey: "no-parking-30-15-feet",
        sourceLabel: "Colorado Driver Handbook - Parking",
        sourceUrl: hb(13),
      },
      {
        id: "co_s5_24",
        topic: "sharing",
        question:
          "You are following a tanker truck placarded for hazardous materials as it approaches a railroad crossing with no train in sight. What should you expect?",
        choices: [
          "It will slow slightly and keep rolling",
          "It will stop only if the crossing has lights",
          "It will stop, because commercial buses and hazmat trucks must stop at most crossings",
          "It will accelerate to clear the tracks quickly",
        ],
        correctIndex: 2,
        explanation:
          "Commercial buses and trucks carrying hazardous materials are required to stop at most railroad crossings whether or not a train is coming. The handbook tells you to be ready to stop behind one.",
        context:
          "This is a rear-end trap because the crossing looks clear, so the following driver has no reason in mind for a truck to stop. The same alertness applies at every crossing: do not start across until there is room to clear the far side, do not shift gears on the tracks, and stay behind the painted stop line or 10 feet back if there is none.",
        trap:
          "Assuming a truck stops only for a train is exactly the assumption that closes the gap before it stops.",
        excerptKey: "hazmat-trucks-stop",
        sourceLabel: "Colorado Driver Handbook - Railroad Crossing",
        sourceUrl: hb(21),
      },
      {
        id: "co_s5_25",
        topic: "signals",
        question:
          "Your light turns steady green at a busy intersection. What does the handbook say the green actually permits?",
        choices: [
          "Proceeding straight, right or left after yielding to anyone already in the intersection or the adjacent crosswalk",
          "Proceeding immediately, since cross traffic now has red",
          "Proceeding straight only, unless a green arrow is shown",
          "Proceeding at the posted limit without further checks",
        ],
        correctIndex: 0,
        explanation:
          "Green lets you go straight, right or left, but only after yielding to any vehicle or pedestrian already inside the intersection or in the adjacent crosswalk, and only where no sign prohibits the turn.",
        context:
          "Turning left on that green with no arrow means yielding to all oncoming traffic, and waiting at the stop line or crosswalk until the gap is genuinely large enough. Keep the front wheels straight while you wait: turned left, a rear-end shunt pushes you into oncoming traffic.",
        trap:
          "Green reads as a clear instruction to move. It is a conditional permission, and the condition is the whole rule.",
        excerptKey: "steady-green",
        sourceLabel: "Colorado Driver Handbook - Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "co_s5_26",
        topic: "licensing",
        question:
          "A 15-year-and-9-month-old wants a Colorado license as soon as they are eligible. What behind-the-wheel training does the state require?",
        choices: [
          "None, if a parent supervises all 50 logged hours",
          "30 hours of classroom instruction only",
          "12 hours with a driving school, always",
          "6 hours with an approved driver education instructor, because they are under 16 and 6 months",
        ],
        correctIndex: 3,
        explanation:
          "Anyone applying for a license before turning 16 years and 6 months needs 6 hours of behind-the-wheel training with an approved driver education instructor, on top of the 50 logged hours.",
        context:
          "There is a rural substitute: living more than 30 miles from an approved full-time driving school lets 12 hours of in-car driving with a driving supervisor stand in for the 6 professional hours, which brings the total log to 62 hours. Reach 16 and 6 months and the 6-hour requirement is waived entirely.",
        trap:
          "From January 1, 2027, HB24-1021 changes the front of this process: everyone aged 15 through 17 will need a 30-hour driver education course before getting an instruction permit at all.",
        excerptKey: "btw-6-hours",
        sourceLabel: "Colorado Driver Handbook - Minor Drivers",
        sourceUrl: hb(2),
      },
      {
        id: "co_s5_27",
        topic: "rules",
        question:
          "You have missed your turn on a four-lane road with no No U-turn sign in sight. What does Colorado law say about turning around?",
        choices: [
          "U-turns are banned on any road with four or more lanes",
          "Permitted, provided it can be done without endangering other motorists and their passengers",
          "Permitted only at an intersection with a traffic signal",
          "Permitted only from the shoulder, after coming to a complete stop",
        ],
        correctIndex: 1,
        explanation:
          "Colorado's rule is conditional rather than geographic. A U-turn is forbidden where a No U-turn sign says so, and otherwise forbidden whenever it cannot be made without endangering other motorists and their passengers.",
        context:
          "That puts the judgment on you rather than on the signage. A U-turn across four lanes of moving traffic, on a crest, near a curve or close to a signalized intersection can fail the safety condition with no sign anywhere. Newcomers to Colorado routinely name mid-road U-turns as one of the local habits they find alarming.",
        trap:
          "No sign gets read as permission. The absence of a sign only removes one of the two prohibitions.",
        excerptKey: "u-turns",
        sourceLabel: "Colorado Driver Handbook - Turning",
        sourceUrl: hb(13),
      },
      {
        id: "co_s5_28",
        topic: "safety",
        question:
          "Traffic ahead is backed up and the gap you can reach leaves your rear bumper over the crosswalk. What should you do?",
        choices: [
          "Take the gap - stopping short blocks the lane behind you",
          "Take the gap and edge forward when it opens",
          "Stay back until there is room to stop without covering the crosswalk",
          "Take the gap, but only if no pedestrians are waiting",
        ],
        correctIndex: 2,
        explanation:
          "You wait. Colorado tells you not to stop with any portion of your vehicle covering the crosswalk area, which means holding back until the space ahead can actually take your whole car.",
        context:
          "A car sitting on the crosswalk pushes pedestrians into the traffic lane to get around it, and it hides them from drivers who are turning in. The related rule is that you never pass a vehicle stopped at a crosswalk, because the pedestrian it is stopping for is exactly the one you cannot see.",
        trap:
          "An empty crosswalk feels like unused space. Someone stepping off the curb three seconds later is the person the rule protects.",
        excerptKey: "no-stop-on-crosswalk",
        sourceLabel: "Colorado Driver Handbook - Pedestrians",
        sourceUrl: hb(24),
      },
      {
        id: "co_s5_29",
        topic: "impairment",
        question:
          "A passenger in your car has an opened, partly used cannabis package in their bag. You have not been drinking or using anything. What does Colorado's open container law say?",
        choices: [
          "It is unlawful - the open container rule covers marijuana as well as alcohol",
          "It is fine, because marijuana is legal in Colorado",
          "It is fine as long as the driver is not impaired",
          "It applies only to the driver, not to passengers",
        ],
        correctIndex: 0,
        explanation:
          "Colorado's open container rule covers an open container of marijuana on exactly the same terms as an open container of alcohol, and it applies to the passenger area of a vehicle on a public road.",
        context:
          "Legalization changed possession, not driving. Impairment by marijuana is prosecuted under the same rules and penalties as impairment by alcohol, with a permissible inference of DUI at 5 nanograms of THC per milliliter of blood and no inference level at all for DWAI. A medical card is no defense.",
        trap:
          "The open container law is remembered as an alcohol law. Colorado wrote marijuana into the same sentence.",
        excerptKey: "open-container",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(3),
        commonlyMissed: true,
      },
      {
        id: "co_s5_30",
        topic: "emergencies",
        question:
          "You are first on the scene of a crash and someone is conscious but hurt inside a stable vehicle. What does the handbook advise?",
        choices: [
          "Move them clear of the vehicle straight away",
          "Get them walking to check for broken bones",
          "Give first aid only if you are certified",
          "Leave them where they are unless their life is in danger, and ask before giving care",
        ],
        correctIndex: 3,
        explanation:
          "Move a victim only when their life is in danger where they are, and ask a conscious person's permission before giving care. Moving someone with a spinal injury can do more harm than the crash did.",
        context:
          "That sits inside the wider duty: stop immediately and never leave the scene, check for injuries and render reasonable assistance where it is practical, and call law enforcement and emergency personnel. Fire is the obvious case where the danger of staying outweighs the danger of moving.",
        trap:
          "Pulling someone out looks like the decisive, helpful act. It is the one the handbook restricts to a genuine, immediate danger.",
        excerptKey: "good-samaritan",
        sourceLabel: "Colorado Driver Handbook - Crash Tips",
        sourceUrl: hb(27),
      },
      {
        id: "co_s5_31",
        topic: "licensing",
        question:
          "What changes for Colorado teenagers on January 1, 2027 under HB24-1021?",
        choices: [
          "The permit age rises from 15 to 16",
          "Ages 15 through 17 must finish a 30-hour driver education course before getting an instruction permit",
          "The logged-hours requirement rises from 50 to 62",
          "The passenger restrictions extend to two full years",
        ],
        correctIndex: 1,
        explanation:
          "From that date, everyone aged 15 through 17 has to complete a 30-hour driver education course before they can get an instruction permit. It moves the course from a partial requirement to a universal one for that age band.",
        context:
          "Today the requirement is staged by age: 15 to 15 and 6 months needs the 30-hour course, and 15 and 6 months to 16 may take either a 4-hour driver awareness program or the 30-hour course. From 16 there is no education requirement to get the permit at all. The 2027 change removes the shortcuts for under-18s.",
        trap:
          "It changes what you need to get the permit, not the 12-month holding period or the 50 logged hours that follow it.",
        excerptKey: "web-hb1021-2027",
        sourceLabel: "dmv.colorado.gov - HB24-1021 Motor Vehicle Minor Driver Education",
        sourceUrl: HB1021,
      },
      {
        id: "co_s5_32",
        topic: "speed",
        question:
          "The handbook names one factor as the greatest influence on how severe a crash turns out to be. Which is it?",
        choices: [
          "The age of the vehicle",
          "Whether seat belts were worn",
          "Speed",
          "The time of day",
        ],
        correctIndex: 2,
        explanation:
          "Speed. It opens the speed chapter for that reason: the same collision at a higher speed carries far more energy into the people inside.",
        context:
          "The rest of the chapter follows from it. Posted maximums are for ideal conditions and must come down when conditions do, driving below a posted minimum is itself a violation unless road or weather conditions force it, and a light car at 55 mph still needs about 200 feet to stop.",
        trap:
          "Belts are what decide whether an occupant is restrained, but they do not change the energy in the crash. Speed does.",
        excerptKey: "speed-severity",
        sourceLabel: "Colorado Driver Handbook - Speed",
        sourceUrl: hb(12),
      },
      {
        id: "co_s5_33",
        topic: "sharing",
        question:
          "A cyclist is riding along the sidewalk and enters the crosswalk in front of you. What are their rights there?",
        choices: [
          "The same as a pedestrian's",
          "The same as a vehicle's, so they must yield to you",
          "None, because bicycles are banned from sidewalks",
          "The same as a pedestrian's, but only if they dismount",
        ],
        correctIndex: 0,
        explanation:
          "On a sidewalk or in a crosswalk a bicyclist has the same rights and responsibilities as a pedestrian, so you yield to them there exactly as you would to someone on foot.",
        context:
          "It switches with the surface. Out on the roadway a bicycle is a vehicle and carries a vehicle's duties, including stopping at signs and signals - though since 2022 riders aged 15 and over may treat a stop sign as a yield and a red light as a stop where the intersection is clear and they already have the right-of-way.",
        trap:
          "Dismounting is not the condition. A rider still on the bike in a crosswalk has pedestrian rights.",
        excerptKey: "bike-sidewalk-pedestrian",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "co_s5_34",
        topic: "rules",
        question:
          "You are on a road where a lane is marked on both sides by double broken yellow lines. What is that lane?",
        choices: [
          "A shared center turn lane",
          "A bus and carpool lane",
          "A lane closed for maintenance",
          "A reversible lane, whose direction changes",
        ],
        correctIndex: 3,
        explanation:
          "Double broken yellow lines on both sides mark a reversible lane. Its direction of travel changes by time of day, and overhead signals or signs tell you which way it is running now.",
        context:
          "Reversible lanes can also be separated by a physical barrier that is moved through the day. Do not confuse the marking with the shared center turn lane, which is bordered by a solid yellow line outside a broken one and may be used only to turn left, never to travel or pass.",
        trap:
          "Both lanes sit in the middle of the road and both use yellow paint. Driving into a reversible lane running the other way is a head-on.",
        excerptKey: "reversible-lanes",
        sourceLabel: "Colorado Driver Handbook - Lane Controls",
        sourceUrl: hb(10),
      },
      {
        id: "co_s5_35",
        topic: "licensing",
        question:
          "A 25-year-old has just been issued a Colorado adult instruction permit. How long must they hold it before taking the drive test?",
        choices: [
          "12 months, the same as a minor",
          "There is no minimum holding time",
          "6 months",
          "30 days",
        ],
        correctIndex: 1,
        explanation:
          "There is no minimum holding period for an adult permit. An adult may take the driving test as soon as the permit is in hand.",
        context:
          "This is where the adult and minor tracks part company. A minor must hold the permit for a full 12 months, or until turning 18 if that comes first, and must produce a signed log of 50 hours with 10 at night. None of that applies to an adult applicant, though the permit's own rule still does: a licensed driver 21 or older has to be in the front passenger seat.",
        trap:
          "The 12-month figure is quoted so often that adults assume it applies to them too, and wait a year they did not owe.",
        excerptKey: "web-adult-permit-no-hold",
        sourceLabel: "dmv.colorado.gov - Adult Permit",
        sourceUrl: ADULT,
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
      "Thirty questions with no hints, mixed the way Colorado's own test is: road signs, driving under the influence, driving rules, safety rules and legal items, in the proportions the handbook covers them.",
    questions: [
      {
        id: "co_s6_01",
        topic: "signs",
        question: "A posted speed limit sign shows 45. What exactly is that number?",
        choices: [
          "The speed traffic is expected to travel regardless of conditions",
          "The maximum allowed in ideal conditions, to be reduced when conditions require",
          "An average that may be exceeded briefly",
          "A limit that applies only in daylight",
        ],
        correctIndex: 1,
        explanation:
          "A posted maximum is written for ideal conditions. When rain, snow, ice, fog or traffic take those conditions away, the lawful speed comes down with them.",
        context:
          "Speed limit signs are regulatory, which means black or red on white and enforceable as law. Some also post a minimum, and driving below it is itself a violation unless road or weather conditions force you to. Where nothing is posted, Colorado's defaults apply: 20, 25, 30, 40 or 55 mph depending on the setting.",
        trap:
          "Reading the number as a target rather than a ceiling is what produces a ticket on an icy road at the posted limit.",
        excerptKey: "speed-limit-signs",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(7),
      },
      {
        id: "co_s6_02",
        topic: "impairment",
        question:
          "What does a first DWAI conviction put on a Colorado driving record in points and fine?",
        choices: [
          "4 points and a fine up to $200",
          "8 points and a fine of $600 to $1,000",
          "12 points and a mandatory revocation",
          "8 points and a fine of $200 to $500",
        ],
        correctIndex: 3,
        explanation:
          "A first DWAI carries 8 points and a fine of $200 to $500, with 2 to 180 days of jail exposure and 24 to 48 hours of public service.",
        context:
          "DWAI means impaired to the slightest degree, and its BAC marker is 0.05. DUI means substantially incapable of safe driving, its marker is above 0.08, and a first conviction brings a 9-month revocation with a $600 to $1,000 fine. Neither can be plea bargained away in Colorado.",
        trap:
          "The $600 to $1,000 range belongs to DUI. DWAI is the lesser offense and carries the lower fine, but the same 8 points.",
        excerptKey: "dwai-first-penalty",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(4),
      },
      {
        id: "co_s6_03",
        topic: "rules",
        question:
          "The lane markings on a wide road are faded and hard to make out. What is the general rule about where your vehicle belongs?",
        choices: [
          "Drive on the right half of the road, in one lane, without straddling",
          "Drive down the center until the markings improve",
          "Use whichever half has better pavement",
          "Straddle the faded line so following drivers can see you",
        ],
        correctIndex: 0,
        explanation:
          "The general rule is that you drive on the right half of the road and use one lane rather than straddling two. Faded paint does not change either half of that.",
        context:
          "Where there are genuinely no markings and no signs, the handbook tells you to drive just to the right of the center of the road, and not to use the shoulder. A solid white line means stay in your lane and also marks the roadway's shoulder; a broken white line means you may change lanes when it is safe.",
        trap:
          "Straddling to be visible is a real habit and a real hazard. It occupies two lanes and leaves other drivers no way to predict you.",
        excerptKey: "drive-right-half",
        sourceLabel: "Colorado Driver Handbook - Lane Controls",
        sourceUrl: hb(9),
      },
      {
        id: "co_s6_04",
        topic: "safety",
        question: "What does the handbook name as the leading cause of driver error?",
        choices: ["Speeding", "Fatigue", "Distractions", "Poor vehicle maintenance"],
        correctIndex: 2,
        explanation:
          "Distractions. The handbook defines one as anything that takes your attention off driving even momentarily, which is a wider net than phones alone.",
        context:
          "Colorado backs it with law. Using a mobile device while driving is prohibited except hands-free, to contact law enforcement or the fire department, or in an emergency, and driving carelessly because you were texting or otherwise handling a device can bring a fine or a misdemeanor charge. Earphones covering both ears are separately banned.",
        trap:
          "Speed is the greatest factor in how severe a crash is, which is a different claim. Distraction is what causes the error in the first place.",
        excerptKey: "distractions-leading-cause",
        sourceLabel: "Colorado Driver Handbook - Before You Drive",
        sourceUrl: hb(6),
      },
      {
        id: "co_s6_05",
        topic: "rightOfWay",
        question:
          "Another driver rolls a four-way stop and pulls out in front of you when it was clearly your turn. What does the handbook say about your responsibility?",
        choices: [
          "Your right-of-way is established once you arrive first",
          "You are always responsible for avoiding a crash, whoever has the right-of-way",
          "Responsibility passes to the driver who moved second",
          "You may proceed once you have signaled your intent",
        ],
        correctIndex: 1,
        explanation:
          "Regardless of who has the right-of-way, you are always responsible for avoiding a crash. Being right does not remove the duty to stop or steer clear.",
        context:
          "Colorado states the principle a second time in the right-of-way chapter: the law says who must yield, and does not give anyone the right-of-way, even on a green light. At a four-way stop, order of arrival decides it, and where two drivers arrive together the one on the left yields to the one on the right.",
        trap:
          "Assuming the other driver will honor the rule is the assumption the whole chapter is written to break.",
        excerptKey: "always-avoid-crash",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "co_s6_06",
        topic: "signals",
        question:
          "A police officer is waving traffic through an intersection where the signal is showing red. What do you do?",
        choices: [
          "Wait for green, since the signal is the legal control",
          "Wait, then proceed only after the officer stops the cross traffic",
          "Treat the intersection as a four-way stop",
          "Follow the officer's direction",
        ],
        correctIndex: 3,
        explanation:
          "A person directing traffic outranks the signal. Colorado requires you to obey directions from law enforcement, highway personnel and school crossing guards.",
        context:
          "It is a separate rule from the malfunction rule, which says that a signal that is dark or not operating correctly is treated as a four-way stop. When someone is actively directing, there is no ambiguity to resolve - you do what they signal, even where that contradicts the light.",
        trap:
          "Sitting at a red while an officer waves you on is the instinctive response and the wrong one.",
        excerptKey: "obey-persons-directing",
        sourceLabel: "Colorado Driver Handbook - Traffic Controls",
        sourceUrl: hb(7),
      },
      {
        id: "co_s6_07",
        topic: "sharing",
        question: "What status does a bicycle have on a Colorado roadway?",
        choices: [
          "A vehicle, with many of the same rights and duties as a car",
          "A pedestrian at all times",
          "A vehicle only where a bike lane is marked",
          "A vehicle only if the rider is 18 or older",
        ],
        correctIndex: 0,
        explanation:
          "Bicycles are vehicles on the roadway. Riders carry many of the same rights and privileges as drivers, and are generally required to follow the same rules of the road.",
        context:
          "It changes on the sidewalk, where a rider has a pedestrian's rights and responsibilities instead. On the road, riders may take the center of a narrow lane, may ride two abreast where they do not impede traffic, and must be given three feet of clearance when you pass, measured from your widest point including mirrors.",
        trap:
          "Treating a rider as an obstacle rather than a road user is what produces the close pass. The three feet are a legal minimum, not a courtesy.",
        excerptKey: "bikes-are-vehicles",
        sourceLabel: "Colorado Driver Handbook - Bicyclists",
        sourceUrl: hb(22),
      },
      {
        id: "co_s6_08",
        topic: "parking",
        question:
          "You park in a marked disabled space without a placard or plate. What is the exposure in Colorado?",
        choices: [
          "A parking ticket of about $50",
          "A warning on a first offense",
          "A misdemeanor charge, a fine of $350 to $5,000, possible jail time and possible loss of driving privileges",
          "Towing costs only",
        ],
        correctIndex: 2,
        explanation:
          "Colorado treats it as a misdemeanor, with a fine that runs from $350 to $5,000, possible jail time and a possible loss of driving privileges. It is not an ordinary parking offense.",
        context:
          "Holding a placard is not sufficient on its own either: the person the placard belongs to must be getting into or out of the vehicle. And the crosshatched area beside a bay is van access space where parking is never allowed, by anyone.",
        trap:
          "Just for a minute is the framing that produces the charge. The penalty does not scale with how long you were there.",
        excerptKey: "disabled-parking-fine",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(9),
      },
      {
        id: "co_s6_09",
        topic: "emergencies",
        question:
          "The handbook lists the options a driver has for avoiding a collision. What are they?",
        choices: [
          "Brake, or brake harder",
          "Slow down or stop, turn, or speed up",
          "Steer, or sound the horn",
          "Stop, or leave the roadway",
        ],
        correctIndex: 1,
        explanation:
          "Three options: slow down or stop, turn, or speed up. Accelerating out of a developing collision is a real option that drivers rarely consider.",
        context:
          "Which one fits depends on the geometry, and the handbook adds a rule of thumb: in most cases you can turn the vehicle quicker than you can stop it. It also says that where the only two outcomes are running off the road or a head-on collision, generally it is better to run off the road.",
        trap:
          "Braking is the reflex for every hazard. When someone is closing from behind or a gap is shrinking ahead, it can be the worst of the three.",
        excerptKey: "collision-three-options",
        sourceLabel: "Colorado Driver Handbook - Emergencies",
        sourceUrl: hb(25),
      },
      {
        id: "co_s6_10",
        topic: "licensing",
        question: "Which of these is one of the handbook's listed exceptions to Colorado's seat belt law?",
        choices: [
          "Anyone traveling under 25 mph",
          "Passengers in the rear seat of any vehicle",
          "Drivers over 65",
          "The driver of a delivery van while on the job",
        ],
        correctIndex: 3,
        explanation:
          "Delivery van drivers on the job are one of the four exceptions. The others are emergency personnel, passenger buses and school buses, and farm equipment.",
        context:
          "The general rule reaches the driver, front seat passengers and every child under 16, in any vehicle with a factory-fitted belt system. Where the driver is under 18, everyone in the vehicle must be restrained and the number of passengers must not exceed the number of belts.",
        trap:
          "Rear seat passengers are not exempt. Anyone under 16 must be belted wherever they sit.",
        excerptKey: "seatbelt-exceptions",
        sourceLabel: "Colorado Driver Handbook - Seat Belt Laws",
        sourceUrl: hb(3),
      },
      {
        id: "co_s6_11",
        topic: "speed",
        question:
          "You are driving through a business district and no speed limit is posted. What applies?",
        choices: ["25 mph", "30 mph", "35 mph", "40 mph"],
        correctIndex: 0,
        explanation:
          "Twenty-five in any business district. The 30 mph figure belongs to a residence district, and the two get swapped constantly.",
        context:
          "The unposted defaults run 20 mph on narrow, winding mountain highways and blind curves, 25 in a business district, 30 in a residence district, 40 on open mountain highways and 55 on urban interstates and highways. Cities and towns may adopt lower limits by ordinance, and 75 mph is the statutory maximum anywhere in Colorado.",
        trap:
          "Business districts feel busier and therefore slower than residential streets, which is right - but people still guess the residential number.",
        excerptKey: "speed-defaults-low",
        sourceLabel: "Colorado Driver Handbook - Speed",
        sourceUrl: hb(12),
      },
      {
        id: "co_s6_12",
        topic: "rules",
        question: "What does a solid white line between two lanes require of you?",
        choices: [
          "Passing on the right only",
          "A lane change with an extended signal",
          "Staying within your lane",
          "Nothing; white lines are advisory",
        ],
        correctIndex: 2,
        explanation:
          "A solid white line means stay in your lane. The same marking is used along the edge of the roadway to mark the shoulder.",
        context:
          "White separates traffic moving in the same direction and yellow separates opposing directions. Broken white means you may change lanes when it is safe. Broken yellow permits passing; a solid yellow on your side forbids it; double solid yellow forbids it both ways, except to turn left into an alley, private road or driveway, or to give a bicyclist three feet with the oncoming lane clear.",
        trap:
          "Solid white gets treated as a suggestion at freeway exits, which is exactly where crossing it causes the last-second dive across a gore.",
        excerptKey: "solid-white-line",
        sourceLabel: "Colorado Driver Handbook - Pavement Markings",
        sourceUrl: hb(9),
      },
      {
        id: "co_s6_13",
        topic: "impairment",
        question:
          "How does Colorado treat driving impaired by a lawfully prescribed medication?",
        choices: [
          "As a lesser offense than alcohol impairment",
          "Under the same penalties as driving impaired by alcohol",
          "As a licensing matter rather than a criminal one",
          "As lawful, provided the dose was as prescribed",
        ],
        correctIndex: 1,
        explanation:
          "The same penalties apply. Colorado's drug provisions cover illicit drugs, marijuana, prescription medications and over-the-counter medications alike.",
        context:
          "That is why the handbook tells you to read the label before driving and to ask a doctor or pharmacist when the label is missing or unclear. Two or more substances at once is polydrug impairment, which can push the effects beyond what either would produce alone, and a medical marijuana card is not a defense.",
        trap:
          "A prescription makes possession lawful and does nothing about impairment. The two questions are separate.",
        excerptKey: "drugs-same-penalties",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(4),
      },
      {
        id: "co_s6_14",
        topic: "safety",
        question:
          "Your car has no anti-lock brakes and you need to stop hard on a slippery road. What is threshold braking?",
        choices: [
          "Pumping the pedal in a steady rhythm",
          "Pressing until the wheels lock, then releasing entirely",
          "Using the parking brake to supplement the pedal",
          "Braking to a point just short of locking the wheels, easing off if they lock",
        ],
        correctIndex: 3,
        explanation:
          "You apply pressure to just short of the lock-up point and hold it there. If the wheels do lock and the car starts to skid, you ease off slightly and reapply.",
        context:
          "With anti-lock brakes the technique is the opposite: apply hard, firm pressure and do not let up, even when the pedal pushes back at you. Four-wheel drive does not change any of this, since it adds traction for getting moving and none at all for stopping.",
        trap:
          "Pumping the pedal is the old advice and it is not what the handbook describes. Threshold braking holds pressure rather than releasing it.",
        excerptKey: "threshold-braking",
        sourceLabel: "Colorado Driver Handbook - Seasonal Driving",
        sourceUrl: hb(17),
      },
      {
        id: "co_s6_15",
        topic: "rules",
        question:
          "Traffic is backed up beyond a railroad crossing and the gap on the far side is shorter than your car. What should you do?",
        choices: [
          "Wait behind the tracks until there is room to clear them completely",
          "Move up onto the tracks so you do not block the intersection behind",
          "Cross and stop with your rear wheels just clear of the near rail",
          "Cross in low gear so you can move off quickly if a train comes",
        ],
        correctIndex: 0,
        explanation:
          "Never start across until there is room for your whole vehicle on the far side. Anything else leaves you sitting on the rails with nowhere to go.",
        context:
          "The handbook adds a second instruction for the crossing itself: do not shift gears on the tracks, in case the vehicle stalls. If you do stall on a crossing, everyone gets out and well clear immediately, whether or not a train is in sight, and the blue Emergency Notification System sign carries the number to call.",
        trap:
          "Not blocking the intersection behind you feels like the considerate choice. Trains overhang the rails by about three feet and cannot stop.",
        excerptKey: "railroad-no-shift",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(8),
      },
      {
        id: "co_s6_16",
        topic: "sharing",
        question:
          "Why does the handbook warn against turning across the path of an approaching light rail vehicle?",
        choices: [
          "Because it has no horn",
          "Because the crossing signals are advisory only",
          "Because it weighs up to 40 tons and cannot stop quickly",
          "Because it always has a second car following it",
        ],
        correctIndex: 2,
        explanation:
          "A light rail car weighs up to 40 tons and cannot stop quickly. Its operator has no steering and very little braking room, so avoiding you is not an option available to them.",
        context:
          "The same weight is behind the gate rule: never drive around light rail traffic gates, even when a train has just passed, because another can be coming the other way on the second track. Judging the speed of a rail vehicle from the front is unreliable, which is what makes the turn across it so tempting.",
        trap:
          "It looks slower than it is. A large object approaching head-on gives almost no sense of closing speed.",
        excerptKey: "light-rail-never-turn-in-front",
        sourceLabel: "Colorado Driver Handbook - Light Rail",
        sourceUrl: hb(21),
      },
      {
        id: "co_s6_17",
        topic: "emergencies",
        question: "Your headlights fail on a dark highway. What does the handbook tell you to do?",
        choices: [
          "Accelerate to the next exit before your eyes adjust",
          "Pull off the road as soon as possible, try the switch again, and use flashers, turn signals or fog lights",
          "Follow the taillights of the vehicle ahead until you reach a lit area",
          "Stop in the lane and set out a warning triangle",
        ],
        correctIndex: 1,
        explanation:
          "Get off the road as soon as you can. Try the switch a few times, and if that fails, use whatever lighting you have left - emergency flashers, turn signals or fog lights - to stay visible.",
        context:
          "The handbook's vehicle emergencies all share a shape: keep control, get out of the traffic stream, then troubleshoot. Brake failure means lifting off, pumping the pedal and then using the parking brake. A jammed accelerator means neutral first. A blowout means holding it straight and slowing gradually.",
        trap:
          "Following someone else's taillights puts you at their following distance with no ability to see the road, and no way for anyone to see you.",
        excerptKey: "headlight-failure",
        sourceLabel: "Colorado Driver Handbook - Vehicle Emergencies",
        sourceUrl: hb(26),
      },
      {
        id: "co_s6_18",
        topic: "signals",
        question: "A lighted green arrow is showing alongside a red ball. What does it permit?",
        choices: [
          "Nothing, since the red overrides the arrow",
          "Proceeding straight ahead only",
          "Turning after a complete stop, as with right on red",
          "Turning in the direction the arrow shows",
        ],
        correctIndex: 3,
        explanation:
          "A green arrow permits the movement it points to, whether it appears on its own or beside a red, green or yellow light. It is a protected movement, so conflicting traffic is being held.",
        context:
          "If the arrow goes out but a circular green stays lit, you may still make the turn - now unprotected, so you yield to through traffic and pedestrians unless a sign or a red arrow prohibits it. A flashing yellow arrow means the same thing from the start: turn with caution, yielding to oncoming traffic and pedestrians.",
        trap:
          "The red ball beside the arrow makes drivers hesitate. The arrow governs the movement it points at, and the red governs everything else.",
        excerptKey: "green-arrow",
        sourceLabel: "Colorado Driver Handbook - Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "co_s6_19",
        topic: "licensing",
        question:
          "How must a 6-year-old weighing 50 pounds ride in a Colorado vehicle that has a rear seat?",
        choices: [
          "In a child restraint or booster seat in the rear seat",
          "In an adult seat belt in the rear seat",
          "In a rear-facing restraint in the rear seat",
          "In an adult seat belt in any seat",
        ],
        correctIndex: 0,
        explanation:
          "Children aged 4 up to 9 who weigh at least 40 pounds ride in a child restraint system or a booster seat, in the rear seat where the vehicle has one.",
        context:
          "The ladder runs by age and weight. Under 2 and under 40 pounds is rear-facing in the rear seat. Aged 2 up to 4 and at least 20 pounds is rear-facing or forward-facing in the rear seat. From 9 to 18, a seat belt or restraint used according to the manufacturer's instructions. If a parent is not in the car, it is the driver who is responsible for getting each child secured correctly.",
        trap:
          "An adult belt on a small child sits across the neck and abdomen instead of the shoulder and hips. That is what the booster is correcting.",
        excerptKey: "child-4-to-9-booster",
        sourceLabel: "Colorado Driver Handbook - Seat Belt Laws",
        sourceUrl: hb(3),
      },
      {
        id: "co_s6_20",
        topic: "safety",
        question: "Your car begins to hydroplane on a flooded stretch of highway. What comes first?",
        choices: [
          "Brake firmly to break through the water film",
          "Steer hard toward the shoulder",
          "Take your foot off the gas and let the car slow, steering gently the way you are sliding",
          "Accelerate to lift the front of the car",
        ],
        correctIndex: 2,
        explanation:
          "Lift off the accelerator and let the car slow on its own, steering gently in the direction you are sliding until the tires bite again. Braking or steering hard is what turns a slide into a spin.",
        context:
          "Worn tires make hydroplaning far more likely, along with longer stopping distances and harder steering. Cruise control comes off on wet or icy roads because it will keep adding power at exactly the wrong moment, and standing water gets a rule of its own: find another route rather than drive through it.",
        trap:
          "Braking is the reflex. With no contact between tire and road there is nothing for the brakes to work against.",
        excerptKey: "hydroplaning-response",
        sourceLabel: "Colorado Driver Handbook - Weather",
        sourceUrl: hb(16),
      },
      {
        id: "co_s6_21",
        topic: "rules",
        question:
          "You want to move into the next lane, and the car already there would have to ease off slightly to let you in. What does the rule say?",
        choices: [
          "Signal and move; the following driver adjusts",
          "Do not change lanes if another vehicle must slow down for you",
          "Move over as long as you leave two car lengths",
          "Move over if you can complete it within three seconds",
        ],
        correctIndex: 1,
        explanation:
          "The test is whether anyone has to slow for you. If they do, the gap is not yours to take.",
        context:
          "The same test governs merging: you yield to all vehicles on the road you are joining and do not merge if another vehicle must slow down for you. The mechanics on top of that are a signal held for at least 3 seconds or 200 feet, and a look over your shoulder to clear the blind spot the mirrors do not cover.",
        trap:
          "Signaling communicates an intention and confers no right. A signal does not create a gap.",
        excerptKey: "lane-change-yield",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "co_s6_22",
        topic: "impairment",
        question: "What is DUI per se in Colorado?",
        choices: [
          "Any detectable alcohol in a driver under 21",
          "Refusing a chemical test at the roadside",
          "A second impaired driving conviction within five years",
          "A conviction based on a BAC greater than 0.08 percent",
        ],
        correctIndex: 3,
        explanation:
          "Per se means the number stands on its own. Above 0.08 percent a driver can be convicted of DUI without any separate proof of how badly the driving was affected.",
        context:
          "Below that, DWAI covers impairment to the slightest degree with 0.05 as its marker, while DUI proper means being substantially incapable of driving safely. Licenses may also be revoked on a refusal, on a BAC over 0.08, over 0.02 for a driver under 21, or over 0.04 for a commercial driver.",
        trap:
          "Zero tolerance under 21 is a different offense with a different number, 0.02. It is not what per se means.",
        excerptKey: "dui-per-se-08",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(3),
      },
      {
        id: "co_s6_23",
        topic: "signs",
        question:
          "The center line ahead is a solid yellow line beside a broken yellow line, with the broken line on your side. What may you do?",
        choices: [
          "Pass, if it is safe to do so",
          "Pass only if the vehicle ahead is a bicycle",
          "Not pass, because one of the lines is solid",
          "Pass only where the road widens to four lanes",
        ],
        correctIndex: 0,
        explanation:
          "The broken line on your side is the one that governs you. With it on your side you may pass when it is safe; if the solid line were on your side, you could not.",
        context:
          "Yellow always separates opposing directions. A single broken yellow permits passing from either side, and double solid yellow forbids it from both, with two narrow exceptions: turning left into an alley, private road or driveway, and giving a bicyclist three feet with the oncoming lane clear.",
        trap:
          "Seeing a solid line anywhere in the pair reads as no passing. Which side it is on is the whole rule.",
        excerptKey: "solid-and-broken-yellow",
        sourceLabel: "Colorado Driver Handbook - Pavement Markings",
        sourceUrl: hb(9),
      },
      {
        id: "co_s6_24",
        topic: "emergencies",
        question:
          "An officer arrives at the scene of your crash. What does Colorado require you to produce?",
        choices: [
          "A completed accident report form",
          "A written statement of what happened",
          "Proof of insurance, at the scene or at the police station",
          "Your vehicle's maintenance record",
        ],
        correctIndex: 2,
        explanation:
          "Proof of insurance, either at the scene or afterward at the police station. Carrying evidence of insurance while driving is a standing requirement in Colorado.",
        context:
          "Failing to produce valid evidence of insurance when a law enforcement officer asks for it is listed among the ways you can lose your Colorado license. Where the crash is minor and nobody is hurt, you also exchange names, addresses, phone numbers, registration and insurance details, and file a report with law enforcement within 24 hours.",
        trap:
          "Having a policy is not the same as being able to show it. The duty is to produce the evidence when it is asked for.",
        excerptKey: "crash-proof-of-insurance",
        sourceLabel: "Colorado Driver Handbook - Crash Tips",
        sourceUrl: hb(26),
      },
      {
        id: "co_s6_25",
        topic: "safety",
        question:
          "You are about to reverse out of a parking space. What does the handbook tell you to do before you even get into the car?",
        choices: [
          "Adjust the mirrors so they overlap",
          "Check behind the vehicle",
          "Sound the horn once",
          "Start the engine and let the reversing camera settle",
        ],
        correctIndex: 1,
        explanation:
          "Walk around and look behind the vehicle before you get in. Children and small objects sit entirely below the sight line from the driver's seat, and no mirror or camera fully closes that gap.",
        context:
          "Once you are in, the technique is specific too: grip the wheel at 12 o'clock with your left hand, put your right arm along the back of the passenger seat and look directly over your shoulder through the rear window. The steering wheel always turns toward the direction you want the vehicle to go, in reverse exactly as in forward.",
        trap:
          "A reversing camera covers a rectangle behind the bumper and nothing at the sides. The walk-around is what the handbook actually asks for.",
        excerptKey: "backing-check-behind",
        sourceLabel: "Colorado Driver Handbook - Basic Driving",
        sourceUrl: hb(7),
      },
      {
        id: "co_s6_26",
        topic: "safety",
        question:
          "You are stopped in an intersection waiting for a gap to turn left. Where should the front wheels point?",
        choices: [
          "Slightly left, so you can go as soon as the gap appears",
          "Fully left, to shorten the turn",
          "Slightly right, away from oncoming traffic",
          "Straight ahead",
        ],
        correctIndex: 3,
        explanation:
          "Straight ahead. If you are rear-ended with the wheels turned left, the impact pushes your car directly into oncoming traffic.",
        context:
          "Where you wait matters as well: at the stop line or the crosswalk, not out in the intersection, and you hold there until the gap in oncoming traffic is genuinely large enough to complete the turn. On a green with no arrow you must yield to all oncoming traffic; a green arrow is what makes the movement protected.",
        trap:
          "Pre-turning the wheels feels like readiness. It converts somebody else's mistake into a head-on collision.",
        excerptKey: "left-turn-wheels-straight",
        sourceLabel: "Colorado Driver Handbook - Turning",
        sourceUrl: hb(13),
      },
      {
        id: "co_s6_27",
        topic: "rules",
        question: "Where in your lane should you be as you make a right turn?",
        choices: [
          "In the rightmost part of the lane, as close to the curb as practical",
          "In the center of the lane, to keep the turn wide",
          "In the left of the lane, to swing the rear wheels clear",
          "Anywhere, provided you signal for 100 feet",
        ],
        correctIndex: 0,
        explanation:
          "Turn right from the right side of your lane, as close to the curb as you can get. That closes the gap a cyclist or another driver could otherwise try to use on your inside.",
        context:
          "The mirror image applies on a left turn: sit in the left side of your lane. Either way, you finish in the center of the correct lane on the new road, which is normally the lane nearest you on your side. Where you cross a bike lane to make the turn, the cyclist in it has the right-of-way.",
        trap:
          "Swinging wide before a right turn is a truck technique. In a car it opens exactly the gap that gets filled.",
        excerptKey: "turn-from-proper-lane",
        sourceLabel: "Colorado Driver Handbook - Turning",
        sourceUrl: hb(12),
      },
      {
        id: "co_s6_28",
        topic: "sharing",
        question:
          "You are coming up behind a cyclist who is riding a little further into the lane than you expected. What does the handbook say about your horn?",
        choices: [
          "Use it to let them know you are there",
          "Use two short taps rather than one long one",
          "Avoid it unless a crash is about to happen, since it may startle them into falling",
          "Use it only if they are riding two abreast",
        ],
        correctIndex: 2,
        explanation:
          "Keep off the horn near cyclists unless there is an immediate risk of a collision. A rider startled at close range can swerve or go down, which is the outcome the warning was meant to prevent.",
        context:
          "Riding toward the center of a narrow lane is lawful and deliberate, done to stay out of the door zone of parked cars and clear of glass and drainage grates. What you owe is patience and three feet of clearance when you pass, and if you cannot produce three feet, you stay behind until you can.",
        trap:
          "A warning honk feels considerate. At two or three feet it is a noise the rider cannot place, arriving with no time to react.",
        excerptKey: "horn-near-bicyclists",
        sourceLabel: "Colorado Driver Handbook - Bicyclists",
        sourceUrl: hb(23),
      },
      {
        id: "co_s6_29",
        topic: "licensing",
        question: "How many points can a reckless driving conviction put on a Colorado license?",
        choices: ["Four", "Up to eight", "Two", "Twelve, with automatic revocation"],
        correctIndex: 1,
        explanation:
          "Up to eight points for a single reckless driving conviction. The same 8-point weight attaches to a first DWAI.",
        context:
          "Reckless driving is defined by consequence rather than intent: operating a vehicle in a way that puts people or property in danger, whether you meant to or not. That includes damage to another motorist's vehicle. Careless driving because you were handling a phone can bring a fine or a misdemeanor charge on its own.",
        trap:
          "Intent is not part of the definition. Aggressive driving that endangers nobody by luck is still reckless driving.",
        excerptKey: "reckless-eight-points",
        sourceLabel: "Colorado Driver Handbook - Careless/Reckless Driving",
        sourceUrl: hb(25),
      },
      {
        id: "co_s6_30",
        topic: "emergencies",
        question:
          "A driver has been tailgating and swerving around traffic for several miles. What number does Colorado publish for reporting them?",
        choices: ["911 only", "311", "The number on the nearest mile marker", "*CSP, which is *277"],
        correctIndex: 3,
        explanation:
          "Dial *CSP, which is *277, to report an aggressive driver to the Colorado State Patrol.",
        context:
          "Before you get to the phone, the handbook's advice is to disengage: do not match an aggressive act, avoid eye contact and give the driver room to go. Reckless driving carries up to eight points on conviction, so the report is worth making once you are somewhere safe to make it.",
        trap:
          "Trying to hold your position or teach a lesson is the response the whole section is written against.",
        excerptKey: "csp-277",
        sourceLabel: "Colorado Driver Handbook - Careless/Reckless Driving",
        sourceUrl: hb(25),
      },
    ],
  },
];
