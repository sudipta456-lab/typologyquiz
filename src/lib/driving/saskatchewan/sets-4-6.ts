// Saskatchewan practice sets 4 to 6.
//
// Same three sources as sets 1 to 3, checked the same way: the Saskatchewan
// Driver's Handbook (SGI, 2026-27), The Traffic Safety Act c T-18.1
// consolidated to 2024, and SGI's New Class 5 drivers page for test format.
//
// Set 5 is built from what Saskatchewan learners actually report going wrong,
// cross-checked against the official sources in every case. Five recurring
// traps drove it:
//
//  - People who sat the written exam say it leaned on chapters 7 and 8 -
//    alcohol, drugs and penalties - far more than on rules of the road. One
//    described being asked how long a driver stays impaired after a given
//    number of drinks, and another about the chart equating drinks combined
//    with a drug. Both figures are in the handbook, on pages 170 and 175.
//  - The yellow speed tab on a warning sign and the white regulatory maximum
//    are confused in both directions. Road-test candidates report losing
//    points for braking hard at a yellow ramp tab, and for still being over
//    the limit as they pass a town's entrance sign.
//  - The duty at a marked crosswalk is to STOP, not to slow. A learner who
//    hesitated and then went round a pedestrian reported failing the road test
//    on that single item.
//  - The 80 km/h default catches everyone who arrives from a province with a
//    built-in urban limit.
//  - The 60 km/h rules read like they have a general "opposite direction"
//    exemption. They do not: the exemption needs a DIVIDED highway.
//
// A forum post is evidence about what confuses people and never about what the
// law says. Every rule below was verified against the handbook or the Act, and
// where a thread and an official source disagreed, the official source decided
// the answer and the confusion became the trap. No recalled exam question has
// been reproduced. See docs/driving/research/saskatchewan.md.

import type { DrivingTestSet } from "../types";

const HB = "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf";
/** Printed page number to a PDF page anchor. The book's page 1 is PDF page 11. */
const hb = (page: number) => `${HB}#page=${page + 10}`;
const ACT =
  "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download";
const act = (page: number) => `${ACT}#page=${page}`;
const SGI_NEW = "https://sgi.sk.ca/new-drivers";

export const saskatchewanSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions spread across every chapter SGI publishes, from the licensing tables at the front to the impairment and enforcement chapters at the back, plus the signs the second exam is built on.",
    questions: [
      {
        id: "sk_s4_01",
        topic: "licensing",
        question:
          "How long must a Saskatchewan driver hold a Class 5 Novice 1 licence before moving to Novice 2?",
        choices: ["Three months", "Twelve months", "Nine months", "Six months"],
        correctIndex: 3,
        explanation:
          "Six months at Novice 1, after nine months as a Class 7 learner. Novice 2 then runs for twelve months, and those twelve have to be incident-free.",
        context:
          "SGI counts the stages in a straight line: nine months learner, six months Novice 1, twelve months Novice 2, then an experienced Class 5 licence. None of the clocks run through a suspension, a refusal or a non-renewal.",
        trap:
          "The twelve months at Novice 2 restart from the date of an at-fault collision, a traffic conviction or a suspension, so a single incident in month eleven costs the whole year.",
        excerptKey: "gdl-three-stages",
        sourceLabel: "Saskatchewan Driver's Handbook - Graduated Driver Licensing Program",
        sourceUrl: hb(11),
      },
      {
        id: "sk_s4_02",
        topic: "signs",
        question:
          "A white regulatory sign shows a bus symbol in a diamond above a lane. What does that lane restriction mean for you?",
        choices: [
          "You may use the lane outside the posted hours, and enter it during them only to make a right turn onto or off the block",
          "You may never use the lane",
          "You may use the lane as long as you keep up with the buses",
          "The lane is advisory and carries no restriction",
        ],
        correctIndex: 0,
        explanation:
          "Bus lane signs show the time and days the restriction operates. While it is in force, only buses, emergency vehicles and accessible taxicabs loading non-ambulatory passengers may be there, and other drivers enter only to turn right onto or off that block.",
        context:
          "In some centres the pavement itself carries diamond markings. Bicycle-only lanes work the same way, and both are entered only to turn, reach a parking space, or enter a lane or driveway.",
        trap:
          "The tab with the hours is the whole rule. Reading the diamond as a permanent ban means never using a lane that is open outside rush hour.",
        excerptKey: "sign-bus-lane",
        sourceLabel: "Saskatchewan Driver's Handbook - Bus lanes and bicycle lanes",
        sourceUrl: hb(51),
      },
      {
        id: "sk_s4_03",
        topic: "safety",
        question:
          "At roughly what impact speed does SGI say an airbag inflates?",
        choices: ["Over 8 km/h", "Over 50 km/h", "Over 30 km/h", "Over 16 km/h"],
        correctIndex: 3,
        explanation:
          "SGI puts it at crashes over 16 km/h, where the bag cushions an occupant's neck, head and chest in a moderate to severe impact.",
        context:
          "Airbags supplement seatbelts rather than replacing them. SGI says seatbelts alone give all the protection a person needs in low and moderate-speed impacts, and airbags do their real work in high-speed crashes.",
        trap:
          "An airbag only helps if the belt has kept you in the seating position it was designed around, which is why the two are treated as one system.",
        excerptKey: "airbags-16kmh",
        sourceLabel: "Saskatchewan Driver's Handbook - Airbags",
        sourceUrl: hb(115),
      },
      {
        id: "sk_s4_04",
        topic: "rules",
        question:
          "You are turning left from a one-way street onto a two-way street. Which lane do you enter?",
        choices: [
          "The curb lane on the far side",
          "The lane immediately to the left of the centre line",
          "Any lane, since it is a two-way street",
          "The lane immediately to the right of the centre line",
        ],
        correctIndex: 3,
        explanation:
          "You start the turn as close as possible to the left edge of the one-way street and enter the lane immediately to the right of the centre line on the two-way street.",
        context:
          "A left turn from one one-way street onto another is different again: start from the left edge and finish in the left-most driving lane. A left turn from a two-way street onto a one-way street starts from the lane next to the centre line and finishes in the left-most lane.",
        trap:
          "Finishing in the far lane on a two-way street puts you on the wrong side of the centre line, however briefly, and that is what section 220 forbids.",
        excerptKey: "left-turn-oneway-to-twoway",
        sourceLabel: "Saskatchewan Driver's Handbook - Left turns",
        sourceUrl: hb(56),
      },
      {
        id: "sk_s4_05",
        topic: "impairment",
        question:
          "An experienced Saskatchewan driver blows a BAC in the .04 to .08 band at the roadside for the first time. What is the licence suspension?",
        choices: ["3 days", "7 days", "21 days", "60 days"],
        correctIndex: 0,
        explanation:
          "Three days for a first offence in that band, along with a three-day vehicle impoundment and the Driving Without Impairment programme.",
        context:
          "The ladder climbs steeply: a second offence in the ten-year look-back is 21 days, and a third or subsequent is 90 days with a mandatory 365-day ignition interlock. Carrying a passenger under 16 lengthens both the suspension and the impoundment.",
        trap:
          "This band is for experienced drivers only. A new driver, which includes everyone 21 and under, is on the zero-tolerance chart instead, where a first offence is a 60-day suspension.",
        excerptKey: "experienced-driver-04",
        sourceLabel: "Saskatchewan Driver's Handbook - Impaired driving",
        sourceUrl: hb(180),
      },
      {
        id: "sk_s4_06",
        topic: "signs",
        question:
          "What does an orange sign showing a symbol of a person with survey equipment tell you?",
        choices: [
          "A survey crew is ahead, and the work zone starts here",
          "A weigh scale is ahead",
          "A photo radar unit is operating",
          "A pedestrian crossing has been temporarily relocated",
        ],
        correctIndex: 0,
        explanation:
          "Survey crew ahead is one of the three orange signs that designate the start of a work zone, along with traffic control person ahead and highway workers.",
        context:
          "Once the zone starts, the posted speed applies through the whole of it, and 60 km/h is the ceiling when passing a worker, flag person or equipment occupied by a worker. Speeding fines triple past workers.",
        trap:
          "SGI defines a worker as anyone within 3 km of one of those signs, so the zone is much longer than the stretch where you can actually see people.",
        excerptKey: "worker-3km",
        sourceLabel: "Saskatchewan Driver's Handbook - Regulatory signs",
        sourceUrl: hb(78),
      },
      {
        id: "sk_s4_07",
        topic: "emergencies",
        question:
          "Your brakes fail on a Saskatchewan highway. What does SGI tell you to do?",
        choices: [
          "Pump the pedal rapidly to build pressure",
          "Steer into the ditch at once",
          "Switch the engine off immediately",
          "Use the parking brake, avoiding locking the rear wheels, and shift to a lower gear",
        ],
        correctIndex: 3,
        explanation:
          "Use the parking brake to slow the vehicle while trying to avoid locking the rear wheels, and shift to a lower gear. Adjusting the parking brake release makes it easier to vary the pressure.",
        context:
          "Total brake failure is rare because vehicles use a two-circuit hydraulic system. If half fails, the warning light usually comes on and you have to push much harder, but there is still stopping power even if the pedal goes to the floor.",
        trap:
          "SGI says explicitly not to pump the brakes: it is the wrong thing to do with a modern brake system. After the vehicle has stopped, do not drive on - call for help.",
        excerptKey: "brake-failure",
        sourceLabel: "Saskatchewan Driver's Handbook - Brake failure",
        sourceUrl: hb(155),
      },
      {
        id: "sk_s4_08",
        topic: "rightOfWay",
        question:
          "Four vehicles reach a four-way stop at clearly different times. Who moves off first?",
        choices: [
          "The vehicle going straight through",
          "The vehicle turning right",
          "The first vehicle to stop",
          "The vehicle on the widest road",
        ],
        correctIndex: 2,
        explanation:
          "SGI says courtesy dictates that the first vehicle to stop is given the right of way, and the remaining three then yield to the driver on their right.",
        context:
          "Direction of travel does not create priority at a four-way stop. Where an opposing pair arrives together and one is turning left, the left turn yields to the vehicle going straight, exactly as it would at a green light.",
        trap:
          "Whatever the order, if you are at a stop sign you must yield to vehicles and pedestrians and may not proceed until it is safe. Your turn is a permission, not a guarantee.",
        excerptKey: "four-way-stops",
        sourceLabel: "Saskatchewan Driver's Handbook - Controlled intersections",
        sourceUrl: hb(61),
      },
      {
        id: "sk_s4_09",
        topic: "safety",
        question:
          "What does SGI say about the two correct hand positions on a steering wheel?",
        choices: [
          "Ten and two, or twelve o'clock",
          "Any position that feels comfortable",
          "One hand at twelve, the other free",
          "Nine and three, or eight and four",
        ],
        correctIndex: 3,
        explanation:
          "Nine and three, or eight and four, thinking of the wheel as a clock face. SGI accepts that exactly where people grip varies with wheel size and shoulder width.",
        context:
          "The nine and three position is also the one SGI teaches for emergency steering, because twisting the wheel without moving your hands lets you tell when the front wheels are straight again: your hands are back at nine and three.",
        trap:
          "Ten and two is the older teaching and is not what SGI publishes. It also puts your forearms across a deploying airbag.",
        excerptKey: "hand-positions",
        sourceLabel: "Saskatchewan Driver's Handbook - Steering",
        sourceUrl: hb(118),
      },
      {
        id: "sk_s4_10",
        topic: "sharing",
        question:
          "A new motorcyclist in Saskatchewan must display a placard on the licence plate. What does a red L mean?",
        choices: [
          "The rider is a learner in the Motorcycle Graduated Driver Licensing programme",
          "The motorcycle is limited to 400cc",
          "The rider is carrying a passenger for the first time",
          "The machine is a three-wheeled cycle",
        ],
        correctIndex: 0,
        explanation:
          "A red L identifies a learner under the Motorcycle Graduated Driver Licensing programme. Novice riders display a green N.",
        context:
          "SGI asks other drivers to use caution and leave plenty of space when passing or following a new rider. The same courtesy is the practical answer to the general motorcycle rules: no lane sharing with a motorcycle, and the same three-second following distance you would give a car.",
        trap:
          "The placards are on the plate, so you only see them from behind. By the time you can read one you are already following the rider.",
        excerptKey: "mgdl-placards",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with motorcycles",
        sourceUrl: hb(39),
      },
      {
        id: "sk_s4_11",
        topic: "signs",
        question:
          "Which sign uses a fluorescent yellow-green background in Saskatchewan?",
        choices: [
          "Construction zone signs",
          "Dangerous goods route signs",
          "Playground ahead signs",
          "School zone and school crosswalk ahead signs",
        ],
        correctIndex: 3,
        explanation:
          "Fluorescent yellow-green is reserved for school zone and school crosswalk ahead signs. It is the newest colour in SGI's list and the most distinctive.",
        context:
          "SGI notes that the old school zone sign has the same pentagon shape but a blue background with a white silhouette of children, and that those are being replaced. The playground ahead sign is a yellow diamond with its own speed tab.",
        trap:
          "Blue is otherwise the colour of general information and service signs, which is exactly why the old school signs are going.",
        excerptKey: "sign-colours",
        sourceLabel: "Saskatchewan Driver's Handbook - Standard sign colours",
        sourceUrl: hb(78),
      },
      {
        id: "sk_s4_12",
        topic: "rules",
        question:
          "You are driving on a gravel grid road with a blind hill ahead. Where should you position the vehicle?",
        choices: [
          "In the centre, where the surface is best",
          "On the left, so oncoming traffic sees you sooner",
          "Wherever the previous vehicle's tracks are",
          "To the right of centre",
        ],
        correctIndex: 3,
        explanation:
          "SGI says that even though the main path on gravel is often down the centre, you must stay to the right of centre when approaching and navigating hills and blind curves, to leave room for the vehicle you cannot see.",
        context:
          "Grid roads have shorter sight distances, no shoulders, sharper curves and many T-intersections. Railway crossings, crossroads and farm entrances are all harder to see than on a provincial highway.",
        trap:
          "Deep gravel makes the vehicle wander. SGI's advice is to grip the wheel firmly and not fight it, because over-correcting on loose gravel is how control is lost.",
        excerptKey: "gravel-road-right",
        sourceLabel: "Saskatchewan Driver's Handbook - Driving techniques for gravel roads",
        sourceUrl: hb(141),
      },
      {
        id: "sk_s4_13",
        topic: "licensing",
        question:
          "How many demerits may you accumulate on a Saskatchewan Class 5 road test and still pass?",
        choices: ["4 or fewer", "There is no demerit score", "14 or fewer", "9 or fewer"],
        correctIndex: 3,
        explanation:
          "Nine demerits or fewer passes; ten or more fails. SGI publishes both figures on its New Class 5 drivers page.",
        context:
          "Separately from the score, SGI's handbook lists things that fail the test outright: exceeding the speed limit, a collision you are 50% or more responsible for, failing to stop where required, failing to yield to vehicles and pedestrians, disobeying traffic lights, needing the examiner's help, or a combination of minor mistakes.",
        trap:
          "The road test costs $55 each attempt and you wait two weeks after a fail, so the retake is not the cheap fallback people assume.",
        excerptKey: "road-test-grade",
        sourceLabel: "SGI - New Class 5 drivers",
        sourceUrl: SGI_NEW,
      },
      {
        id: "sk_s4_14",
        topic: "impairment",
        question:
          "SGI publishes a chart on the combined effect of alcohol and other drugs. What does it say two drinks plus one cannabis joint is roughly equivalent to?",
        choices: ["3 drinks", "4 to 5 drinks", "5 to 6 drinks", "10 drinks"],
        correctIndex: 2,
        explanation:
          "Five to six drinks. The same chart puts two drinks with an antihistamine at four to five, and two with a tranquilliser or with Gravol at approximately six.",
        context:
          "SGI calls this the synergistic effect and describes it as a multiplier rather than a sum: one plus one is more than two. The breath test would show only the alcohol from the two drinks, while the actual impairment of the central nervous system matches a much higher reading.",
        trap:
          "Saskatchewan learners report being asked about exactly this chart. It reads like health information and it is examinable material.",
        excerptKey: "synergistic-table",
        sourceLabel: "Saskatchewan Driver's Handbook - Drinking and drugs combined",
        sourceUrl: hb(175),
        commonlyMissed: true,
      },
      {
        id: "sk_s4_15",
        topic: "signals",
        question:
          "A solid green arrow is showing beside a red light. What may you do?",
        choices: [
          "Proceed in any direction, since a green arrow overrides the red",
          "Turn only if there is no oncoming traffic at all",
          "Wait for the round light to turn green",
          "Proceed only in the direction of the arrow, after yielding to other vehicles and pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "You may go only in the direction the arrow points, and only after yielding the right of way to any other vehicles and pedestrians.",
        context:
          "A green arrow alone, with no red beside it, lets you enter the intersection and make only the movement it indicates. A flashing green left-turn arrow beside either a red or a green permits the left turn while it flashes.",
        trap:
          "The arrow does not make the turn protected in the way an advance green does. The yielding duty is written into the Act.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Saskatchewan Driver's Handbook - Traffic signals",
        sourceUrl: hb(92),
      },
      {
        id: "sk_s4_16",
        topic: "safety",
        question:
          "What does SGI say the shoulder portion of a highway is for?",
        choices: [
          "An extra driving lane when traffic is heavy",
          "Cyclists only",
          "Passing slower vehicles on the right",
          "Stopped vehicles, emergency manoeuvres, two-point turns and preparing to turn right",
        ],
        correctIndex: 3,
        explanation:
          "The area right of the solid white line is designed for stopped vehicles, and SGI adds emergency manoeuvres, two-point turns and preparing to make a right turn from a highway.",
        context:
          "SGI is blunt that the shoulder is not an extra driving lane, and section 217(2) of the Act forbids passing by driving off the pavement or travelled portion of the highway. Some highways carry rumble strips on the shoulder to warn you when you drift.",
        trap:
          "Where the minister has established a no-parking zone, that zone expressly includes the shoulder, so a stopped vehicle is not always lawful there either.",
        excerptKey: "shoulder-not-a-lane",
        sourceLabel: "Saskatchewan Driver's Handbook - Lane selection",
        sourceUrl: hb(46),
      },
      {
        id: "sk_s4_17",
        topic: "signs",
        question:
          "Two roads meet and a yellow diamond shows a stem running into a horizontal bar. What is it warning you about?",
        choices: [
          "A divided highway begins",
          "Traffic entering from the right",
          "A narrow bridge",
          "A T-intersection ahead",
        ],
        correctIndex: 3,
        explanation:
          "SGI captions that sign as a warning of a T-intersection, which on the rural grid means the road you are on ends at the crossing road.",
        context:
          "SGI singles out T-intersections when describing grid, municipal and resource access roads, saying the road comes to an end often with little notice. The checkerboard road-ends sign does a related job.",
        trap:
          "A T-intersection is still an uncontrolled intersection unless it is signed, and SGI says the yield-to-the-right rule applies to T-intersections as well. Being on the through road is not a right of way.",
        excerptKey: "uncontrolled-intersection",
        sourceLabel: "Saskatchewan Driver's Handbook - Right of way",
        sourceUrl: hb(59),
      },
      {
        id: "sk_s4_18",
        topic: "emergencies",
        question:
          "Your vehicle has drifted into a shallow ditch beside a Saskatchewan highway. What does SGI say to do?",
        choices: [
          "Brake hard and steer back onto the road at once",
          "Turn the wheel sharply towards the road and lift off",
          "Accelerate to climb back out",
          "Drive down the ditch, holding the wheel firmly, staying off the brake",
        ],
        correctIndex: 3,
        explanation:
          "You drive down the ditch. Hold the wheel firmly, look and steer gently down the slope, stay off the brake and gradually release the accelerator.",
        context:
          "SGI says outright that it is perfectly all right to drive in a ditch to avoid a rollover, provided you do not hit an approach road or something hard. The steeper the ditch, the more you have to steer down it.",
        trap:
          "The main cause of rollovers is trying to return to the road too early. Being towed out is the small price SGI contrasts with rolling the car.",
        excerptKey: "ditch-rollover",
        sourceLabel: "Saskatchewan Driver's Handbook - Ditches",
        sourceUrl: hb(154),
      },
      {
        id: "sk_s4_19",
        topic: "rules",
        question:
          "You are entering a freeway from an on-ramp. What does SGI say is the key?",
        choices: [
          "Enter slowly so you can look for a gap",
          "Signal and merge immediately at the start of the ramp",
          "Stop at the end of the ramp and wait for a large gap",
          "Build your speed in the acceleration lane until it matches the traffic on the freeway",
        ],
        correctIndex: 3,
        explanation:
          "The key is increasing your speed in the acceleration lane until it matches the freeway traffic. SGI says merging at less than freeway speeds can be dangerous.",
        context:
          "The rest of the sequence is to look at the traffic while still on the ramp and pick the spot you want, build speed as quickly as you can, keep checking that spot, then signal, shoulder check and accelerate into the lane.",
        trap:
          "Leaving the freeway is the mirror image and gets rushed the other way: slow down in the deceleration lane, not on the freeway, because some deceleration lanes are short.",
        excerptKey: "freeway-entering",
        sourceLabel: "Saskatchewan Driver's Handbook - Entering a freeway",
        sourceUrl: hb(134),
      },
      {
        id: "sk_s4_20",
        topic: "parking",
        question:
          "SGI recommends backing into a 90-degree parking stall rather than driving in. Why?",
        choices: [
          "It is faster",
          "It reduces wear on the tyres",
          "It is required by law in Saskatchewan parking lots",
          "You back into a space you know is empty, the front-end swing happens in the aisle, and you drive out with a clear view",
        ],
        correctIndex: 3,
        explanation:
          "SGI's reasoning is that your windows are clear and you are warmed up for driving, the front-end swing occurs in the aisle rather than between two parked cars, and when you leave you have an excellent view.",
        context:
          "The alternative is angle parking at about 60 degrees, common on one-way streets in smaller centres, where you are meant to drive in and back out. There, SGI wants you shoulder checking both sides and the rear rather than relying on the rear-view mirror.",
        trap:
          "Backing out of a 90-degree stall past a tall vehicle parked beside you is the hazardous half. SGI says to move back cautiously and watch for pedestrians and vehicles you cannot yet see.",
        excerptKey: "angle-parking-back-in",
        sourceLabel: "Saskatchewan Driver's Handbook - Angle parking",
        sourceUrl: hb(129),
      },
      {
        id: "sk_s4_21",
        topic: "signs",
        question:
          "A white regulatory sign shows a black arrow pointing left with a red circle and slash. Underneath is a tab reading 7-9 AM. What does that mean?",
        choices: [
          "Left turns are banned only between 7 and 9 in the morning",
          "Left turns are banned at all times",
          "Left turns are recommended against between 7 and 9",
          "The sign applies only to commercial vehicles",
        ],
        correctIndex: 0,
        explanation:
          "Turn control signs may be accompanied by a tab indicating that the sign is only in effect during certain hours of the day. Outside those hours the prohibition does not apply.",
        context:
          "SGI's turn control set covers no left turn, no right turn, straight or right only, straight or left only, turn right or left, go straight, turn left only, turn right only, no right turn on red, the centre turning lane sign, and turning vehicle yields to bikes.",
        trap:
          "The tab is easy to miss at speed, and it works in both directions: a driver who ignores it turns illegally in rush hour, and a driver who over-reads the sign never turns there at all.",
        excerptKey: "sign-turn-tabs",
        sourceLabel: "Saskatchewan Driver's Handbook - Regulatory turn control signs",
        sourceUrl: hb(82),
      },
      {
        id: "sk_s4_22",
        topic: "sharing",
        question:
          "A person using a motorised wheelchair is crossing at an intersection. What are your duties?",
        choices: [
          "None, since a wheelchair is not a vehicle",
          "Yield only if they are already past the centre line",
          "Sound your horn to make sure they have seen you",
          "The same as for a pedestrian: yield the right of way and stop before the crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "SGI says the rules of the road that apply to pedestrians apply to people using a wheelchair, motorised wheelchair or medical scooter, and you must yield and stop before the crosswalk.",
        context:
          "The exception SGI names is a wide street where the person is at a safe distance from your side. As with pedestrians, no vehicle may pass another that has stopped at an intersection to let someone cross.",
        trap:
          "Where there is no sidewalk, a person in a wheelchair travels on the left shoulder facing traffic, the same as a pedestrian, so they will be coming towards you rather than away.",
        excerptKey: "wheelchair-yield",
        sourceLabel: "Saskatchewan Driver's Handbook - Wheelchairs and medical scooters",
        sourceUrl: hb(69),
      },
      {
        id: "sk_s4_23",
        topic: "safety",
        question:
          "SGI teaches a search pattern for highway driving. How far ahead does it say you may be able to see on a straight road?",
        choices: [
          "12 seconds",
          "Up to 40 seconds",
          "Up to 90 seconds",
          "As far as the next sign",
        ],
        correctIndex: 2,
        explanation:
          "On a straight road SGI says you may be able to look up to the horizon, up to 90 seconds ahead. Looking up means looking as far as you can see the highway.",
        context:
          "The twelve seconds figure is a different one: it is where you reference down to, and the minimum view you need in order not to be over-driving your headlights or the conditions. SGI puts the range where you would see a developing problem at 12 to 60 seconds ahead.",
        trap:
          "Losing the far view is an early sign of fatigue. SGI says a warning sign of tiredness is noticing you have stopped looking as far ahead as you should and are staring straight ahead instead.",
        excerptKey: "twelve-seconds",
        sourceLabel: "Saskatchewan Driver's Handbook - Night driving and low visibility",
        sourceUrl: hb(73),
      },
      {
        id: "sk_s4_24",
        topic: "rightOfWay",
        question:
          "You are in a roundabout and about to leave at your exit. What should you do?",
        choices: [
          "Signal right to warn others you intend to exit",
          "Signal left as you approach the exit",
          "Signal nothing, since you are already committed",
          "Sound your horn",
        ],
        correctIndex: 0,
        explanation:
          "Use your right-turn signal to warn other drivers of your intention to exit. That is the signal drivers waiting to enter are reading.",
        context:
          "SGI also advises using the right lane mainly when you intend to take the first available exit, and driving in the left lane if you plan to go beyond the second exit. Traffic entering always yields to traffic already circulating.",
        trap:
          "Not signalling on exit is what keeps entering drivers sitting there, and it is also what makes them guess and pull out in front of you.",
        excerptKey: "roundabout-signal",
        sourceLabel: "Saskatchewan Driver's Handbook - Roundabouts",
        sourceUrl: hb(64),
      },
      {
        id: "sk_s4_25",
        topic: "signs",
        question:
          "What does a white regulatory sign showing a number above the word TONNES mean?",
        choices: [
          "A weight limit for vehicles on that highway or bridge",
          "A recommended load for winter conditions",
          "A dangerous goods route designation",
          "The capacity of the truck inspection station ahead",
        ],
        correctIndex: 0,
        explanation:
          "It is the weight limit of vehicle permitted on that highway or bridge, expressed in tonnes.",
        context:
          "SGI's regulatory group also carries signs for a dangerous goods route and for dangerous goods carriers prohibited, plus heavy trucks should use this roadway and no heavy trucks allowed, and truck inspection station signs with an arrow showing which side of the road.",
        trap:
          "The tonnage sign is regulatory, so it states the law. Reading it as advisory is the same error as reading any other white rectangle as advice.",
        excerptKey: "sign-regulatory",
        sourceLabel: "Saskatchewan Driver's Handbook - Regulatory signs",
        sourceUrl: hb(79),
      },
      {
        id: "sk_s4_26",
        topic: "impairment",
        question:
          "According to SGI, which part of the body does alcohol affect first?",
        choices: [
          "Muscle control, which is why people stagger",
          "Reaction time, before judgment",
          "Vision, before anything else",
          "The brain, and specifically judgment",
        ],
        correctIndex: 3,
        explanation:
          "The brain goes first, and in particular the part that lets you think clearly and make good decisions. SGI says those effects start with one drink.",
        context:
          "Muscle control is the second thing affected, and because the small muscles of the eye are very susceptible, vision suffers even at low alcohol levels. SGI says most alcohol-related collisions come from faulty thinking during identification, prediction and decision rather than from poor steering or braking.",
        trap:
          "Judging your own fitness by whether you can walk straight is the error SGI names in terms. The faculty you would need to make that judgment is the one alcohol took first.",
        excerptKey: "alcohol-judgment-first",
        sourceLabel: "Saskatchewan Driver's Handbook - Sequence of effects on the body",
        sourceUrl: hb(168),
      },
      {
        id: "sk_s4_27",
        topic: "rules",
        question:
          "Where a median, boulevard or ditch divides a road, what may you not do?",
        choices: [
          "Drive on the left side of it, or cross it except at an intersection or a provided cross-over",
          "Park within 30 metres of it",
          "Change lanes beside it",
          "Turn right across it",
        ],
        correctIndex: 0,
        explanation:
          "You may not drive on the left side of the divider, and you may not cross it except at an intersection or where a cross-over has been provided.",
        context:
          "The Act writes the same rule in section 229 and adds that a crossover has to have been established by the public authority with jurisdiction over the highway. That is why the openings you see in a highway median are not all lawful for you.",
        trap:
          "A ditch counts as a divider here. Saskatchewan's rural roads have plenty of places where the division is earth rather than concrete, and the rule is identical.",
        excerptKey: "medians",
        sourceLabel: "Saskatchewan Driver's Handbook - Medians",
        sourceUrl: hb(70),
      },
      {
        id: "sk_s4_28",
        topic: "emergencies",
        question:
          "A deer appears suddenly in front of you on a Saskatchewan highway. What does SGI advise?",
        choices: [
          "Brake firmly, stay in control, and avoid swerving",
          "Swerve hard around it",
          "Accelerate to pass in front of it",
          "Sound your horn and hold your speed",
        ],
        correctIndex: 0,
        explanation:
          "Brake firmly and stay in control of the vehicle. SGI says to avoid swerving, because that is how you end up in oncoming traffic or in the ditch.",
        context:
          "Where a collision is unavoidable, SGI's advice is to aim at the spot the animal came from rather than where it is going, try for a glancing blow, and let up on the brake just before impact so the nose rises and reduces the chance of the animal coming through the windshield.",
        trap:
          "If you have time to stop, do it and stay alert, because when one animal crosses others often follow. Peak risk is May and June, late fall and early winter, at dawn and dusk.",
        excerptKey: "animal-avoid-swerve",
        sourceLabel: "Saskatchewan Driver's Handbook - Animals on the road",
        sourceUrl: hb(157),
      },
      {
        id: "sk_s4_29",
        topic: "signals",
        question:
          "You are approaching an intersection on a green light and want to turn left, but oncoming traffic is heavy. What does SGI say may happen?",
        choices: [
          "You must reverse out of the intersection if the light changes",
          "The oncoming traffic must stop for you once the light goes amber",
          "You must abandon the turn and go around the block",
          "You may be forced to complete your turn on an amber or red light",
        ],
        correctIndex: 3,
        explanation:
          "SGI acknowledges it directly: if traffic is heavy you may be forced to complete your turn on an amber or a red. You entered lawfully on the green.",
        context:
          "While you wait, SGI wants your vehicle parallel to the lane with the front wheels straight, so a rear-end shunt does not push you into oncoming traffic. That single detail is one of the most practically useful in the book.",
        trap:
          "The wheels-straight rule is the half people forget. Wheels already turned left convert a shunt into a head-on collision.",
        excerptKey: "left-turn-wheels-straight",
        sourceLabel: "Saskatchewan Driver's Handbook - Left turns",
        sourceUrl: hb(55),
      },
      {
        id: "sk_s4_30",
        topic: "signs",
        question:
          "What does a yellow diamond showing a truck on a slope, sometimes with a percentage, tell you?",
        choices: [
          "A steep hill is ahead, so shift to a lower gear or slow down",
          "Trucks are prohibited on the grade",
          "A truck inspection station is ahead",
          "A runaway lane is provided",
        ],
        correctIndex: 0,
        explanation:
          "SGI captions the steep hill sign as an instruction to shift to a lower gear or slow down if you are going down a very steep hill.",
        context:
          "The same idea runs through the mountain driving section: shifting down helps hold speed, and you brake lightly and continuously rather than hard and late, because that is least likely to overheat the brakes.",
        trap:
          "The percentage is a gradient, not a speed. It tells you how hard the descent will work your brakes, and the answer is engine braking rather than pedal pressure.",
        excerptKey: "mountain-braking",
        sourceLabel: "Saskatchewan Driver's Handbook - Driving in mountains",
        sourceUrl: hb(140),
      },
      {
        id: "sk_s4_31",
        topic: "licensing",
        question:
          "What is the minimum driver education a Saskatchewan Class 7 holder must complete before moving up a class?",
        choices: [
          "Nothing, if you already have driving experience",
          "An online course of any length",
          "Twelve hours in-car only",
          "The high school driver education programme, or at least six hours in-class and six hours in-car with an SGI-certified instructor",
        ],
        correctIndex: 3,
        explanation:
          "Either the high school driver education programme or at least six hours in-class and six hours in-car with an SGI-certified instructor, from age 16.",
        context:
          "The high school route is longer: 30 hours in-class and six in-car. SGI warns that uncertified instructors exist, that training from them is not recognised, and that without a recognised record you will not be able to take the road test.",
        trap:
          "The record has to reach the examiner. Either the instructor adds it to your SGI customer file, or you carry the Driver Education Certificate to the test.",
        excerptKey: "mandatory-education",
        sourceLabel: "Saskatchewan Driver's Handbook - Mandatory driver education",
        sourceUrl: hb(22),
      },
      {
        id: "sk_s4_32",
        topic: "safety",
        question:
          "SGI describes four gates around your vehicle. How many should a safe driver try to keep open?",
        choices: ["At least two", "All four", "At least one", "It does not matter at highway speed"],
        correctIndex: 0,
        explanation:
          "At least two, so you always have options for an emergency movement. A gate is closed by another vehicle, a curb, a guardrail or even deep snow.",
        context:
          "Travelling alone in the centre lane of a three-lane road leaves all four gates open: you can move ahead, drop back, or go left or right. SGI uses the gates idea to explain why mirror checks are constant rather than occasional.",
        trap:
          "If you have ever been surprised by a vehicle overtaking you, SGI says plainly that you are not looking in your mirrors often enough.",
        excerptKey: "gates-two-open",
        sourceLabel: "Saskatchewan Driver's Handbook - The concept of gates",
        sourceUrl: hb(42),
      },
      {
        id: "sk_s4_33",
        topic: "sharing",
        question:
          "SGI gives a figure for how fast an experienced cyclist can travel downhill. What is it?",
        choices: ["25 km/h", "35 km/h", "Up to 50 km/h", "Up to 70 km/h"],
        correctIndex: 2,
        explanation:
          "Up to 50 km/h going downhill. SGI's point is that the speed of a bicycle is easy to misjudge, which is what makes a right turn across one dangerous.",
        context:
          "The same passage asks you to give cyclists a safe following distance because they have no brake lights, to expect them to steer around drainage grates and potholes, and not to sound your horn unnecessarily when passing, because it may startle them into your path.",
        trap:
          "At 50 km/h a cyclist covers the length of a city block in about seven seconds. Pulling out in front of one because bicycles seem slow is the collision this figure exists to prevent.",
        excerptKey: "cyclist-speed",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with bicycles",
        sourceUrl: hb(40),
      },
      {
        id: "sk_s4_34",
        topic: "parking",
        question:
          "You are stopping in your lane in city traffic and there is a crosswalk just ahead. Where do you stop?",
        choices: [
          "In the crosswalk, so you are ready to move",
          "Anywhere, since you are only stopping briefly",
          "Just past the crosswalk, so pedestrians can see you",
          "Behind the crosswalk, before entering the intersection",
        ],
        correctIndex: 3,
        explanation:
          "Behind the crosswalk and before entering the intersection, so you do not obstruct pedestrians or other traffic. SGI gives the same instruction for a railway crossing.",
        context:
          "The general stopping-position rules stack in a fixed order: the nearest crosswalk whether marked or not, a clearly marked stop line, and only where there is neither a line nor a sidewalk or crosswalk do the three-metre and ten-metre distances apply.",
        trap:
          "Blocking a crossing because traffic ahead has not moved on is the specific behaviour this rule targets. If you cannot clear the intersection, you do not enter it.",
        excerptKey: "stopping-behind-crosswalk",
        sourceLabel: "Saskatchewan Driver's Handbook - Stopping and parking",
        sourceUrl: hb(32),
      },
      {
        id: "sk_s4_35",
        topic: "rules",
        question:
          "Saskatchewan bans several things in a moving vehicle. Which of these is permitted?",
        choices: [
          "A passenger riding in a towed trailer",
          "A passenger sitting between the driver and the driver's door",
          "A screen visible to the driver that shows only navigation information",
          "Holding a cellphone to check a map at a red light",
        ],
        correctIndex: 2,
        explanation:
          "A screen may be visible to the driver where the information displayed is solely designed to assist in the safe operation of the vehicle, and the Act names navigation as one of those cases.",
        context:
          "The list of what is banned is long: riding in or on a trailer, riding between the driver and the driver's door, crowding the driver, riding on the exterior except where a space is designed for passengers, and aftermarket tint on the windshield or front side windows.",
        trap:
          "Being stopped at a red light is still driving. The hand-held ban applies unless you are parked on the side of the road or reporting an emergency.",
        excerptKey: "rules-re-vehicles",
        sourceLabel: "Saskatchewan Driver's Handbook - Rules related to vehicles",
        sourceUrl: hb(75),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Thirty-five questions on the rules Saskatchewan learners say caught them out: the province's own numbers, the sentences that read backwards, the sign pairs that differ only in colour, and the impairment chapter the written exam leans on much harder than anyone expects.",
    questions: [
      {
        id: "sk_s5_01",
        topic: "speed",
        question:
          "You leave a Saskatchewan highway onto an unsigned gravel grid road. What is the speed limit?",
        choices: ["50 km/h", "60 km/h", "80 km/h", "There is none until a sign appears"],
        correctIndex: 2,
        explanation:
          "Eighty kilometres an hour, the same as the unsigned highway default. SGI states it directly in the grid roads chapter and the Act states it once, for every road with no sign.",
        context:
          "SGI then adds that these roads are not designed to help you out of trouble if you are going faster than the limit, and that the limit is a maximum under ideal conditions. Sight distances are shorter, curves sharper, and T-intersections arrive with little notice.",
        trap:
          "Eighty on gravel is legal and rarely wise. SGI's own advice for the surface is to drive slowly, and there is no separate lower default for gravel to fall back on.",
        excerptKey: "gravel-default-80",
        sourceLabel: "Saskatchewan Driver's Handbook - Grid, municipal and resource access roads",
        sourceUrl: hb(141),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_02",
        topic: "signs",
        question:
          "You are coming into a town at 100 km/h and the entrance sign shows 60 km/h. When must you be at 60?",
        choices: [
          "By the time you reach the sign",
          "Well before the sign, as a courtesy",
          "Within 100 metres after the sign",
          "By the first intersection inside town",
        ],
        correctIndex: 0,
        explanation:
          "The limit takes effect at the sign, so you should be at 60 as you pass it and not later. SGI's advance warning sign for a lower maximum speed zone ahead exists to give you room to do that.",
        context:
          "Saskatchewan posts an advance warning of a lower maximum speed zone ahead as a separate regulatory sign. Once you are past the entrance sign, that speed applies to all locations within the community boundaries unless another sign changes it.",
        trap:
          "Braking hard at the sign is its own hazard on a highway approach, and slowing far too early on the open highway is a road-test error Saskatchewan candidates report. The advance sign is where the deceleration belongs.",
        excerptKey: "sign-max-speed-ideal",
        sourceLabel: "Saskatchewan Driver's Handbook - Regulatory signs",
        sourceUrl: hb(78),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_03",
        topic: "rightOfWay",
        question:
          "SGI's roundabout section says the vehicle on the right must yield to the vehicle on the left. Which vehicle is that in practice?",
        choices: [
          "The vehicle already circulating yields to the vehicle entering",
          "Neither yields; both merge together",
          "Whichever vehicle is in the outer lane yields",
          "The vehicle entering yields to the vehicle already circulating",
        ],
        correctIndex: 3,
        explanation:
          "The entering vehicle yields. Seen from a circulating driver's seat, the car waiting at the entry is the one on the right, which is why SGI's sentence comes out the way it does.",
        context:
          "SGI's own worked diagram makes it unambiguous: traffic entering the roundabout must yield to traffic in the roundabout, and it then lists which lettered vehicles yield to which. The wording and the diagram agree.",
        trap:
          "Applying Saskatchewan's ordinary uncontrolled-intersection rule at a roundabout entry gives the opposite and wrong answer, because a roundabout is not an uncontrolled intersection.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Saskatchewan Driver's Handbook - Roundabouts",
        sourceUrl: hb(64),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_04",
        topic: "impairment",
        question:
          "SGI says a driver who goes to bed with a BAC of .25 is still legally intoxicated at what time the next morning?",
        choices: ["10 a.m.", "7 a.m.", "Noon", "3 p.m."],
        correctIndex: 0,
        explanation:
          "SGI's worked table puts the driver at .1 at 10 a.m. and labels that row still legally intoxicated. It only reaches zero at 5 p.m.",
        context:
          "The example runs on an elimination rate of approximately .015% per hour and starts at midnight. SGI's point is that nothing accelerates it: sleeping through the night removes a fraction of it, and the sleep itself is described as very restless.",
        trap:
          "Saskatchewan learners report that the written exam asked about the durations in this chapter. It looks like background reading and it is examinable.",
        excerptKey: "alcohol-elimination-rate",
        sourceLabel: "Saskatchewan Driver's Handbook - BAC and time",
        sourceUrl: hb(170),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_05",
        topic: "sharing",
        question:
          "A pedestrian is waiting to cross at a marked crosswalk and steps off the curb as you approach. You slow, they hesitate, and you drive past them. What did you do wrong?",
        choices: [
          "Nothing, since they hesitated",
          "You should have waved them across",
          "You should have sounded your horn first",
          "You failed to stop, which is what the Act requires, not merely to slow",
        ],
        correctIndex: 3,
        explanation:
          "The Act requires you to stop the vehicle and yield the right of way. Slowing and going round is not compliance, however hesitant the pedestrian appears.",
        context:
          "Where there is a marked crosswalk you stop on the near side immediately before entering it, and where there is a stop line you stop at the line. Once you have stopped, no vehicle behind you may overtake you.",
        trap:
          "Saskatchewan road-test candidates report failing on exactly this: rolling past a hesitating pedestrian rather than coming to a full stop. Hesitation is not consent.",
        excerptKey: "act-pedestrian-stop",
        sourceLabel: "The Traffic Safety Act, section 223(1)",
        sourceUrl: act(172),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_06",
        topic: "signs",
        question:
          "You are on a highway exit ramp with a yellow tab showing 50 under a curve sign. Is 60 km/h on that ramp an offence?",
        choices: [
          "No, the yellow tab is a recommended safe speed and not a limit",
          "Yes, the tab sets an enforceable limit",
          "Yes, but only if a police officer sees it",
          "No, because ramps have no speed limits at all",
        ],
        correctIndex: 0,
        explanation:
          "A yellow tab under a warning sign is a recommended safe speed. The enforceable maximum is whatever the white regulatory sign says, and on the ramp that is usually the highway limit until you reach a posted one.",
        context:
          "SGI groups the recommended safe speed tab with its warning signs and captions the white sign as the maximum speed allowed under ideal conditions. Section 199(3) still applies over the top of both: you may never drive faster than is reasonable and safe.",
        trap:
          "Saskatchewan road-test candidates report being marked down for slamming to the yellow number at the sign. The recommendation is for the curve itself, so you slow progressively into it.",
        excerptKey: "sign-recommended-speed",
        sourceLabel: "Saskatchewan Driver's Handbook - Warning signs",
        sourceUrl: hb(84),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_07",
        topic: "speed",
        question:
          "A tow truck is stopped with its amber lights flashing on the far side of an UNDIVIDED highway. What speed may you pass at?",
        choices: [
          "The posted limit, since you are on the other side",
          "No more than 30 km/h",
          "No more than 80 km/h",
          "No more than 60 km/h",
        ],
        correctIndex: 3,
        explanation:
          "Sixty kilometres an hour. The exemption for the opposite direction exists only on a divided highway, and SGI says the rule does apply when you are travelling in the opposite direction on an undivided highway.",
        context:
          "Saskatchewan repeats that sentence for emergency vehicles and for tow trucks and roadside assistance vehicles, in the same words. The Act writes the same exemption for highway workers and for service and escort vehicles.",
        trap:
          "People treat the opposite direction as the exemption. It is not: the divided highway is. A two-lane highway with a painted centre line is undivided.",
        excerptKey: "tow-truck-sharing",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with tow trucks",
        sourceUrl: hb(41),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_08",
        topic: "impairment",
        question:
          "You are 20 years old, graduated from the GDL programme two years ago, and hold a full Class 5. What is your alcohol limit?",
        choices: [
          ".08, the Criminal Code limit",
          ".04 to .08, the experienced driver roadside band",
          ".05",
          "Zero",
        ],
        correctIndex: 3,
        explanation:
          "Zero. SGI's list of new drivers starts with every driver 21 years of age and under, regardless of licence class or whether they are still in the GDL programme.",
        context:
          "The same list also captures anyone with no licence in the last five years, out-of-country drivers whose equivalent class cannot be determined, and restricted or provisional drivers. The experienced driver band applies only to drivers 22 and over who are out of the GDL programme.",
        trap:
          "Graduating the GDL programme does not lift the age rule, and the two are easy to run together because both are called new-driver rules.",
        excerptKey: "new-driver-definition",
        sourceLabel: "Saskatchewan Driver's Handbook - Impaired driving",
        sourceUrl: hb(178),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_09",
        topic: "rules",
        question:
          "You are outside a hamlet on a two-lane highway and want to pass. There is no sign forbidding it and the oncoming lane is empty as far as a crest 250 metres away. May you pass?",
        choices: [
          "No, the Act requires a clear view of 320 metres",
          "Yes, the road is clear",
          "Yes, if you can complete the pass in under ten seconds",
          "Only if you sound your horn first",
        ],
        correctIndex: 0,
        explanation:
          "Outside urban boundaries you need a clear view of 320 metres in the direction of travel. Two hundred and fifty metres to a crest is not enough, and what is beyond the crest is exactly what the rule is about.",
        context:
          "SGI's practical version bans passing on the crest of a hill, before a curve, at intersections, and anywhere sight distance is limited. The 320-metre rule falls away only where the highway has two or more lanes in your direction.",
        trap:
          "Saskatchewan's flatness makes this harder rather than easier. A road that looks open for kilometres can hide an oncoming vehicle in a shallow dip.",
        excerptKey: "act-passing-320m",
        sourceLabel: "The Traffic Safety Act, section 217(6)",
        sourceUrl: act(170),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_10",
        topic: "signs",
        question:
          "Two Saskatchewan signs both show a black silhouette of children. One is a pentagon in fluorescent yellow-green; the other is a yellow diamond. What is the diamond?",
        choices: [
          "An older school zone sign",
          "A children at play advisory with no legal meaning",
          "A school crosswalk ahead sign",
          "A playground ahead sign",
        ],
        correctIndex: 3,
        explanation:
          "The yellow diamond is playground ahead, and when it carries a km/h tab underneath, that speed is to be observed. The school zone sign is the fluorescent yellow-green pentagon.",
        context:
          "SGI has a third member of the family: school crosswalk ahead, which is a fluorescent yellow-green sign rather than a plain yellow one, because the colour is reserved for school zone and school crosswalk ahead signs.",
        trap:
          "The old school zone signs are pentagons with a BLUE background and a white silhouette, which SGI says are being replaced. Colour is doing the work in all three cases, not the silhouette.",
        excerptKey: "sign-playground",
        sourceLabel: "Saskatchewan Driver's Handbook - Warning signs",
        sourceUrl: hb(85),
      },
      {
        id: "sk_s5_11",
        topic: "safety",
        question:
          "It is the first snowfall of the Saskatchewan winter. What following distance does SGI ask for?",
        choices: ["Three seconds", "Four seconds", "Five seconds", "Eight seconds"],
        correctIndex: 2,
        explanation:
          "Five seconds during the first few snowfalls, and SGI asks you to drive very slowly, because it takes time to change out of summer driving patterns.",
        context:
          "Saskatchewan stacks several following-distance figures. Three seconds is the ideal-conditions minimum, more than three behind a vehicle that blocks your view, five or six when you are being tailgated, and longer than three whenever the surface is wet or slippery.",
        trap:
          "The reason SGI singles out the first snowfalls is habit rather than physics. The traction changes overnight and the driving does not.",
        excerptKey: "first-snowfalls",
        sourceLabel: "Saskatchewan Driver's Handbook - The first snowfalls",
        sourceUrl: hb(146),
      },
      {
        id: "sk_s5_12",
        topic: "impairment",
        question:
          "SGI states one BAC as genuinely safe for driving. Which?",
        choices: ["Under .02", "Under .04", "Under .05", "Zero"],
        correctIndex: 3,
        explanation:
          "SGI's sentence is that the only truly safe BAC is 0%. Its own chart shows a decline in visual function and in divided attention starting at .02.",
        context:
          "The crash-likelihood figures behind that sentence are stark: 11 times more likely between .05 and .09, 48 times between .10 and .14, and 380 times at .15 and above. SGI notes that the increased likelihood begins long before a driver feels drunk.",
        trap:
          "The Criminal Code limit is .08 and the provincial roadside band starts at .04, and neither of those is a safe level. They are the points at which the law intervenes.",
        excerptKey: "only-safe-bac",
        sourceLabel: "Saskatchewan Driver's Handbook - Likelihood of a crash",
        sourceUrl: hb(170),
      },
      {
        id: "sk_s5_13",
        topic: "parking",
        question:
          "You are stopping at a rural Saskatchewan intersection with no stop line, no sidewalk and no crosswalk. How far back may you stop?",
        choices: [
          "No further than ten metres",
          "No further than three metres",
          "Exactly at the corner",
          "Anywhere within thirty metres",
        ],
        correctIndex: 0,
        explanation:
          "Outside a city, town, village, resort village or hamlet, the Act puts the stop no further than ten metres back from the intersection. Inside those boundaries it is three.",
        context:
          "The phrase in the Act is no further than, so it is a maximum distance rather than a minimum. The point is that a driver who stops well back has not really stopped for the intersection at all.",
        trap:
          "The two numbers get swapped, and the consequence is worse in town: ten metres back at a city corner means you cannot see the cross street and have to creep forward again.",
        excerptKey: "act-stop-position",
        sourceLabel: "The Traffic Safety Act, section 209(6.1)",
        sourceUrl: act(165),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_14",
        topic: "signs",
        question:
          "A crossbuck at a rural crossing has no lights and no gates, and the tracks are clear in both directions. What is your duty?",
        choices: [
          "Stop completely, as at a stop sign",
          "Sound your horn and cross",
          "Proceed at the posted speed",
          "Give right of way and stop if necessary, as at a yield sign",
        ],
        correctIndex: 3,
        explanation:
          "SGI says the crossbuck is the same colour as a yield sign and has the same meaning: give right of way and stop if necessary. A full stop is not required where nothing is coming.",
        context:
          "Two classes of vehicle must stop at every level crossing regardless: a bus transporting passengers and a vehicle carrying placarded dangerous goods. SGI tells other drivers to expect them to stop and be ready for it.",
        trap:
          "Following a school bus or a placarded truck towards a crossing is where this bites. They are stopping; you are not expecting it.",
        excerptKey: "act-bus-rail-stop",
        sourceLabel: "The Traffic Safety Act, section 209(7)",
        sourceUrl: act(165),
      },
      {
        id: "sk_s5_15",
        topic: "rules",
        question:
          "You are in the two-way left turning lane and the traffic in the through lane has stopped dead. May you continue along the centre lane to the next block?",
        choices: [
          "Yes, as long as you signal",
          "Yes, if you are going to turn left eventually",
          "No, it may not be used as a passing lane or as a driving lane",
          "Yes, but only below 30 km/h",
        ],
        correctIndex: 2,
        explanation:
          "SGI says in terms that centre turning lanes may not be used as a passing lane or as a driving lane. You enter only at the point adjacent to the property you want.",
        context:
          "Section 228(2) of the Act narrows it further: you may not drive in a designated two-way left turn lane except to make a left turn from it at an intersection or curb crossing. Where such a lane exists, you may not turn left from any other lane.",
        trap:
          "The lane feels like a legitimate queue-jump because it is empty. It is empty because vehicles from both directions may be entering it at any point along its length.",
        excerptKey: "centre-turn-lane",
        sourceLabel: "Saskatchewan Driver's Handbook - Centre turning lanes",
        sourceUrl: hb(58),
      },
      {
        id: "sk_s5_16",
        topic: "signals",
        question:
          "You are at the intersection of two one-way streets facing a red light and want to turn left. There is no sign about turns on red. What may you do?",
        choices: [
          "Stop, then turn left after yielding as required",
          "Nothing until the light is green",
          "Turn without stopping if the way is clear",
          "Turn only if a green arrow shows",
        ],
        correctIndex: 0,
        explanation:
          "Saskatchewan permits a left turn on a red at the intersection of two one-way streets, after stopping and yielding the right of way, unless a sign prohibits it.",
        context:
          "It is the mirror image of the right turn on red, and the Act writes both in the same section. Both permissions disappear where a sign forbids the turn, and both require the stop first.",
        trap:
          "This one is easy to disbelieve, and it is genuinely narrow: it needs one-way streets on both the road you are on and the road you are entering.",
        excerptKey: "act-left-on-red-oneway",
        sourceLabel: "The Traffic Safety Act, section 235(6)",
        sourceUrl: act(177),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_17",
        topic: "signs",
        question:
          "What is the difference between the yellow diamond showing two lanes joining, and the one showing an added lane?",
        choices: [
          "The merge sign requires someone to give way; the added lane sign does not",
          "The merge sign applies only to trucks",
          "The added lane sign appears only on freeways",
          "There is no difference; they are alternative symbols",
        ],
        correctIndex: 0,
        explanation:
          "Two lanes merge ahead means a merging movement is required. The added lane sign means two roads converge and merging movements are not required, because the joining traffic keeps its own lane.",
        context:
          "SGI signs a third case as traffic entering from the right, and a fourth as lane ends or right lane ends, where the lane simply runs out. The symbols look similar at a glance and the required behaviour differs in each case.",
        trap:
          "Braking for an added lane is how a rear-end collision starts. Failing to yield at a merge is how a sideswipe starts. The signs differ by one small piece of geometry.",
        excerptKey: "sign-added-lane",
        sourceLabel: "Saskatchewan Driver's Handbook - Warning signs",
        sourceUrl: hb(84),
      },
      {
        id: "sk_s5_18",
        topic: "impairment",
        question:
          "How many demerit points does the Driver Improvement Program require before a 30-day suspension?",
        choices: ["12 or more", "15 or more", "18 or more", "21 or more"],
        correctIndex: 3,
        explanation:
          "Twenty-one or more points triggers a 30-day suspension. The ladder is 9 for a programme information letter, 12 for a warning letter, 15 for a defensive driving course, 18 for driver improvement training, then 21, 24 and 27 for 30, 90 and 180-day suspensions.",
        context:
          "That is the programme for all Saskatchewan drivers. GDL drivers have their own improvement programme, which starts with a warning letter for a first conviction rated at two points or fewer and a Traffic Safety Education session for one rated three to six.",
        trap:
          "Saskatchewan learners report the written exam asking about penalties rather than about rules of the road. This ladder and the impoundment charts are the two most likely places for that.",
        excerptKey: "driver-improvement-points",
        sourceLabel: "Saskatchewan Driver's Handbook - Driver Improvement Program",
        sourceUrl: hb(188),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_19",
        topic: "rightOfWay",
        question:
          "You are at a two-way stop. The cross traffic has no stop sign and there is a steady stream of it. When may you go?",
        choices: [
          "After counting to three",
          "As soon as the nearest vehicle is more than a block away",
          "You remain stopped until all cross traffic passes",
          "As soon as another driver flashes their lights",
        ],
        correctIndex: 2,
        explanation:
          "SGI's wording for a two-way stop is that vehicles must remain stopped until all cross traffic passes. It is not a gap-judging exercise the way a four-way stop is.",
        context:
          "The general duty on top of that is the one that decides every stop-sign question: if you are at a stop sign you must yield to vehicles and pedestrians and may not proceed until it is safe.",
        trap:
          "A flashed headlight from another driver is a courtesy, not a legal transfer of right of way. If you go on it and are wrong, the collision is yours.",
        excerptKey: "two-way-stops",
        sourceLabel: "Saskatchewan Driver's Handbook - Controlled intersections",
        sourceUrl: hb(61),
      },
      {
        id: "sk_s5_20",
        topic: "safety",
        question:
          "SGI says one braking technique gives the shortest stopping distance on every surface but one. Which surface is the exception?",
        choices: ["Gravel", "Packed snow", "Glare ice", "Wet pavement"],
        correctIndex: 2,
        explanation:
          "Four-wheel lock braking produces the shortest stopping distance on all surfaces except glare ice. That is SGI's own wording.",
        context:
          "Threshold braking, which means holding just short of lock-up, is the technique of choice because it keeps some steering, but SGI concedes it is almost impossible to do if you panic. On ice near freezing, or at speed, threshold braking is the better answer.",
        trap:
          "Four-wheel lock is only available if all four lock at once, and the vehicle then goes in a straight line whatever you do with the wheel. That is why SGI says to do one thing at a time: brake, or steer.",
        excerptKey: "abs-gravel",
        sourceLabel: "Saskatchewan Driver's Handbook - Braking",
        sourceUrl: hb(147),
      },
      {
        id: "sk_s5_21",
        topic: "signs",
        question:
          "You are on a Saskatchewan grid road at night and see two triangular delineators on a post ahead. What kind of road are you approaching?",
        choices: [
          "A provincial highway",
          "A private approach",
          "A minor rural road or local urban street",
          "A main farm access road, improved all-weather road or intermediate urban street",
        ],
        correctIndex: 3,
        explanation:
          "Two delineators mark main farm access roads, improved all-weather roads and intermediate urban streets. Three would mean a provincial highway, grid road or major street; one means a minor road.",
        context:
          "The delineators are mounted on both sides of the post at rural intersections controlled by stop or yield signs, and their first purpose is warning a rural driver that an intersection exists at all.",
        trap:
          "The count runs the intuitive way round, more delineators for a more important road, but people guess it backwards under exam pressure because there is nothing in the sign itself to anchor the direction.",
        excerptKey: "delineators-purpose",
        sourceLabel: "Saskatchewan Driver's Handbook - Crossroad delineators",
        sourceUrl: hb(89),
      },
      {
        id: "sk_s5_22",
        topic: "rules",
        question:
          "You are following a large truck that blocks your view of the road ahead. What does SGI want you to do?",
        choices: [
          "Keep the standard three seconds",
          "Move closer so you can see under the trailer",
          "Drop back to more than three seconds until you can see around it",
          "Pull onto the shoulder to get a view",
        ],
        correctIndex: 2,
        explanation:
          "Drop back to more than three seconds until you can see around the vehicle. Your view is what the following distance is buying you.",
        context:
          "The same idea drives SGI's whole time-based system: if you are looking as far ahead as you should, you will see a developing problem 12 to 60 seconds out, possibly before the driver ahead of you does, and you respond to the problem rather than to their brake lights.",
        trap:
          "Sitting close behind a truck feels like it keeps your place in traffic. It removes the only advantage you had, which was seeing further than the person you are following.",
        excerptKey: "following-blocked-view",
        sourceLabel: "Saskatchewan Driver's Handbook - Using time to estimate your following distance",
        sourceUrl: hb(101),
      },
      {
        id: "sk_s5_23",
        topic: "speed",
        question:
          "A novice driver is caught at more than double the posted speed limit in Saskatchewan. What happens to the vehicle they are driving, even if they do not own it?",
        choices: [
          "It is impounded for 30 days, at the owner's cost",
          "Nothing, if the owner was not present",
          "It is impounded for 7 days",
          "It is returned as soon as the fine is paid",
        ],
        correctIndex: 0,
        explanation:
          "Excessive speeding at double the posted limit or more carries a 30-day impoundment on each offence, and the vehicle is impounded even if the driver is not the owner. All towing and storage costs fall on the owner.",
        context:
          "The chart puts the same 30 days on speeding 50 km/h or more over the limit, on stunting, on racing or a contest of speed, and on any Criminal Code offence that also breaches The Traffic Safety Act. Failing to stop for a peace officer is 7 days.",
        trap:
          "Owners can pursue the driver for what they had to pay, but they pay first. Lending a car is lending the impoundment risk with it.",
        excerptKey: "impound-not-owner",
        sourceLabel: "Saskatchewan Driver's Handbook - Vehicle impoundments",
        sourceUrl: hb(178),
      },
      {
        id: "sk_s5_24",
        topic: "sharing",
        question:
          "A school bus with its four-way hazard lamps flashing is stopped ahead of you. Must you stop?",
        choices: [
          "Yes, hazard lamps carry the same duty as red flashing lights",
          "No, and no special caution is required",
          "Yes, but only within a school zone",
          "No, but you must slow down and pass with caution, watching for children",
        ],
        correctIndex: 3,
        explanation:
          "Drivers are not required to stop for buses displaying four-way hazard lamps. SGI still asks for caution, low speed and a watch for children crossing.",
        context:
          "The three states matter separately: amber flashing means slow down and proceed with caution, red flashing with the stop arm means a full stop no closer than five metres, and hazard lamps mean neither of those. Some municipalities also ban the red lamps and stop arms altogether by bylaw.",
        trap:
          "Passing a bus with red flashing lights carries a minimum fine of $360, and section 212(5) of the Act allows up to $1,000 on summary conviction. The three light states are worth learning apart.",
        excerptKey: "school-bus-hazard-lamps",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with school buses",
        sourceUrl: hb(37),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_25",
        topic: "signs",
        question:
          "Which of these is a regulatory sign in Saskatchewan rather than a warning?",
        choices: [
          "A white rectangle telling you to keep to the right of a traffic island",
          "A diamond showing a bump in the road",
          "An orange diamond showing grooved pavement",
          "A yellow diamond showing a deer",
        ],
        correctIndex: 0,
        explanation:
          "The keep-right sign for traffic islands or obstructions is a white regulatory sign. The other three are warnings, in yellow or orange.",
        context:
          "SGI's regulatory group also carries one-way street or highway, two-way traffic, the maximum speed under ideal conditions, advance warning of a lower maximum speed zone ahead, the work zone maximum speed, do not enter, and the over dimensional route sign.",
        trap:
          "The deer sign in particular gets treated as a rule, and it is not. It marks a section of roadway regularly crossed by deer, and what you do about it is a decision rather than a duty.",
        excerptKey: "sign-regulatory",
        sourceLabel: "Saskatchewan Driver's Handbook - Regulatory signs",
        sourceUrl: hb(78),
      },
      {
        id: "sk_s5_26",
        topic: "licensing",
        question:
          "You fail the Saskatchewan sign exam but pass the basic knowledge exam. What do you have to do?",
        choices: [
          "Rewrite both exams",
          "Take the road test instead",
          "Wait 30 days and rewrite both",
          "Rewrite only the sign exam",
        ],
        correctIndex: 3,
        explanation:
          "If you fail any part of the knowledge tests you rewrite only the examination or examinations you failed. Each is $25 each time you sit it.",
        context:
          "SGI's page says you can schedule another test as early as the next day, and the handbook adds that you may write only once per day. Successful written results are valid for one year.",
        trap:
          "The two exams are separately scored at 80% each, so a strong performance on the rules half cannot rescue a weak signs half. That is the whole reason the signs are worth studying as their own subject.",
        excerptKey: "hb-knowledge-tests",
        sourceLabel: "Saskatchewan Driver's Handbook - Knowledge tests",
        sourceUrl: hb(23),
      },
      {
        id: "sk_s5_27",
        topic: "safety",
        question:
          "SGI names the main cause of collisions during Saskatchewan winters. What is it?",
        choices: [
          "Failing to adjust to changing conditions",
          "Worn tyres",
          "Driving without headlights",
          "Following too closely",
        ],
        correctIndex: 0,
        explanation:
          "SGI states it plainly: the main cause of collisions in winter months is failing to adjust to changing conditions.",
        context:
          "The same phrase appears in the snow plow section, where SGI says the vast majority of collisions with plows are rear-end crashes by motorists who failed to adjust to changing road and weather conditions. Most Saskatchewan collisions happen between November and March.",
        trap:
          "The winter answer is almost never a piece of equipment. Traction, visibility and following distance are the three things that change, and all three are decisions.",
        excerptKey: "winter-main-cause",
        sourceLabel: "Saskatchewan Driver's Handbook - Winter driving",
        sourceUrl: hb(142),
      },
      {
        id: "sk_s5_28",
        topic: "signals",
        question:
          "You have entered an intersection on a green light waiting to turn left, and the light goes amber. What should you do?",
        choices: [
          "Reverse back behind the stop line",
          "Turn immediately regardless of oncoming traffic",
          "Wait in the intersection for the next green",
          "Complete the turn when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "You complete the turn when it is safe. SGI accepts that heavy traffic may force you to finish on an amber or a red, because you entered lawfully on the green.",
        context:
          "The amber rule is written for a driver approaching the intersection, not for one already in it: stop before entering the crosswalk unless you have already entered or cannot stop safely. The Act uses the same construction.",
        trap:
          "Turning the moment the light changes, without checking that the oncoming driver has actually stopped, is where the collision happens. Amber does not stop them; it warns them.",
        excerptKey: "signal-green-left",
        sourceLabel: "Saskatchewan Driver's Handbook - Traffic signals",
        sourceUrl: hb(91),
      },
      {
        id: "sk_s5_29",
        topic: "rightOfWay",
        question:
          "Two vehicles arrive at an unmarked T-intersection on a Saskatchewan grid at the same moment. One is on the through road, one on the road that ends. Who yields?",
        choices: [
          "The vehicle on the left yields to the vehicle on the right",
          "The vehicle on the road that ends always yields",
          "The vehicle on the through road always has priority",
          "Whoever is travelling slower yields",
        ],
        correctIndex: 0,
        explanation:
          "SGI says the yield-to-the-right rule also applies to T-intersections. Being on the through road is not itself a right of way at an unmarked intersection.",
        context:
          "It is the same rule as any uncontrolled intersection, and section 219(2) of the Act switches it off only where there is a peace officer, traffic lights or a stop sign. Rural T-intersections often have delineators warning of them and no control at all.",
        trap:
          "Grid roads make this common and dangerous. SGI warns that on these roads the road comes to an end often with little notice, and the driver on the through road is the one least expecting to yield.",
        excerptKey: "uncontrolled-intersection",
        sourceLabel: "Saskatchewan Driver's Handbook - Uncontrolled intersections",
        sourceUrl: hb(59),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_30",
        topic: "impairment",
        question:
          "Saskatchewan uses a phrase for what happens when alcohol is combined with another drug. What is it?",
        choices: [
          "The cumulative effect",
          "The additive effect",
          "The compounding effect",
          "The synergistic effect",
        ],
        correctIndex: 3,
        explanation:
          "SGI calls it the synergistic effect, and explains that the whole is greater than the sum of its parts: one plus one is more than two.",
        context:
          "The practical consequence is that a breath test shows only the blood alcohol level. The impairment of the central nervous system can be equivalent to a far higher reading, which is why SGI describes the outcome as unpredictable and potentially deadly.",
        trap:
          "The wrong answers are all words for adding. The point of the term is that the effects multiply rather than add.",
        excerptKey: "synergistic-effect",
        sourceLabel: "Saskatchewan Driver's Handbook - Drinking and drugs combined",
        sourceUrl: hb(174),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_31",
        topic: "parking",
        question:
          "You must stop on a rural Saskatchewan highway after dark. What does SGI require beyond pulling as far right as possible?",
        choices: [
          "Marking the vehicle's position with flares, hazard lights or reflectors",
          "Nothing further",
          "Leaving the headlights on high beam",
          "Sounding the horn periodically",
        ],
        correctIndex: 0,
        explanation:
          "Vehicles stopped on rural roads or highways at night must be marked with flares, hazard lights or reflectors, and you must not tamper with devices marking a stopped vehicle.",
        context:
          "The Act sets out when flares specifically are needed on a wider vehicle: when it intrudes on the travelled portion, when it is disabled, or when it has been parked on the highway for more than four hours. Any stopped vehicle with hazard lights must have them on.",
        trap:
          "Headlights on high beam are the wrong answer twice over. The Act requires the headlights of a stopped vehicle to be kept on low beam.",
        excerptKey: "stopping-flares",
        sourceLabel: "Saskatchewan Driver's Handbook - Stopping and parking",
        sourceUrl: hb(32),
      },
      {
        id: "sk_s5_32",
        topic: "rules",
        question:
          "Saskatchewan bans hand-held cellphones. What may an experienced driver do that a GDL driver may not?",
        choices: [
          "Nothing; the rules are identical",
          "Text while stopped in traffic",
          "Hold the phone at a red light",
          "Use a hands-free device that is voice or one-touch activated and dashboard, visor or cradle mounted",
        ],
        correctIndex: 3,
        explanation:
          "Hands-free use is for experienced drivers only. SGI's note is explicit: hands-free cellphones and mobile devices are prohibited for drivers in the GDL programme.",
        context:
          "Two things are allowed for both groups: making a 9-1-1 call while driving, and making a call while parked on the side of the road. A repeat conviction within twelve months means the vehicle is impounded for seven days regardless of who owns it.",
        trap:
          "GDL drivers read the hands-free list and assume it applies to them because they are drivers. Every item on it is conditioned on being out of the programme.",
        excerptKey: "cellphone-gdl-ban",
        sourceLabel: "Saskatchewan Driver's Handbook - Cellphones",
        sourceUrl: hb(31),
        commonlyMissed: true,
      },
      {
        id: "sk_s5_33",
        topic: "signs",
        question:
          "A yellow diamond shows an arrow that turns sharply right and then sharply left. What is it?",
        choices: [
          "A road that turns sharply right and left",
          "A reverse curve ahead",
          "A winding road ahead",
          "A detour",
        ],
        correctIndex: 0,
        explanation:
          "SGI captions that one as a road that turns sharply right and left, which is a different sign from the reverse curve and different again from a winding road.",
        context:
          "The reverse curve sign shows two turns in opposite directions separated by a tangent of less than 120 m. A winding road sign means several curves in succession, first curve right. All three are yellow diamonds with similar-looking arrows.",
        trap:
          "This trio is exactly the kind of thing a separate sign exam can ask about, because the difference is in the shape of the arrow and nothing else.",
        excerptKey: "sign-chevron",
        sourceLabel: "Saskatchewan Driver's Handbook - Warning signs",
        sourceUrl: hb(85),
      },
      {
        id: "sk_s5_34",
        topic: "safety",
        question:
          "How long does SGI say it can take an older driver to recover from the glare of oncoming headlights?",
        choices: [
          "Up to 5 seconds",
          "Up to 10 seconds",
          "Up to 25 seconds",
          "Up to a minute",
        ],
        correctIndex: 2,
        explanation:
          "Recovery takes up to five seconds after driving in the dark for a while, and SGI says the time increases with age to the point where it can take up to 25 seconds.",
        context:
          "The practical consequence is why the dimming distances exist. SGI also suggests adjusting a day-night mirror to night and dimming the dash lights to reduce glare from behind and from inside the vehicle.",
        trap:
          "Twenty-five seconds at 100 km/h is about 700 metres of road driven half blind, which is why SGI suggests seeing an ophthalmologist or optometrist if you suspect a glare recovery problem.",
        excerptKey: "glare-recovery",
        sourceLabel: "Saskatchewan Driver's Handbook - Headlights",
        sourceUrl: hb(73),
      },
      {
        id: "sk_s5_35",
        topic: "sharing",
        question:
          "You are about to make a right turn and a cyclist has pulled up alongside you on the right. What does SGI require?",
        choices: [
          "Turn first, since you were there before them",
          "Move left and turn from the through lane",
          "Sound your horn so they stop",
          "Do not turn directly in front of them and cut them off; check your blind spots",
        ],
        correctIndex: 3,
        explanation:
          "SGI's instruction is not to pull up beside a cyclist and then turn directly in front of them and cut them off, and to check your blind spots for cyclists coming up alongside before you turn right.",
        context:
          "The rest of the manoeuvre is the ordinary right turn rule: move as close to the right curb as possible before turning, which is what stops the gap opening on your right in the first place. Crossing a bike lane to turn is allowed once you have made sure it is safe.",
        trap:
          "Moving left to swing wide for the turn is the wrong instinct twice over. It creates the gap the cyclist will ride into, and SGI says outright that drivers may not turn from the main driving lane.",
        excerptKey: "cyclist-right-turn",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with bicycles",
        sourceUrl: hb(39),
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
      "Thirty questions in the shape of the real pair of SGI exams, with the signs half carried through: rules of the road and driving situations, plus sign identification, at the difficulty you will meet on the day.",
    questions: [
      {
        id: "sk_s6_01",
        topic: "signs",
        question: "What does a red octagon mean?",
        choices: [
          "Come to a full stop and be sure the way is clear before proceeding",
          "Yield to traffic already in the intersection",
          "Slow to a walking pace and continue",
          "Stop only when a pedestrian is present",
        ],
        correctIndex: 0,
        explanation:
          "The octagon is the stop sign. SGI's own definition is a full stop, followed by making sure the way is clear before proceeding.",
        context:
          "It is the only sign in Saskatchewan that uses that shape, so it is identifiable from behind, in the dark or under snow, which is exactly why the shape is reserved.",
        trap:
          "Where to stop is a separate rule: the nearest crosswalk marked or not, or a marked stop line, or three metres back in town and ten outside it.",
        excerptKey: "sign-six-shapes",
        sourceLabel: "Saskatchewan Driver's Handbook - Six basic sign shapes",
        sourceUrl: hb(76),
      },
      {
        id: "sk_s6_02",
        topic: "speed",
        question:
          "On a Saskatchewan road with no speed limit signs, what is the maximum speed?",
        choices: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        correctIndex: 3,
        explanation:
          "Eighty kilometres an hour. That is the figure in section 199(1) of the Act and in SGI's speeding chapter.",
        context:
          "Posted signs override it in both directions, and a community's entrance sign sets the number for everywhere inside that community. Regardless of any posted limit, you may never travel faster than is reasonable and safe.",
        trap:
          "The 80 applies on gravel grid roads too. There is no separate lower rural default in Saskatchewan.",
        excerptKey: "act-speed-80",
        sourceLabel: "The Traffic Safety Act, section 199(1)",
        sourceUrl: act(160),
      },
      {
        id: "sk_s6_03",
        topic: "rightOfWay",
        question:
          "At an intersection with no signs or lights, two vehicles arrive at about the same time. Who yields?",
        choices: [
          "The vehicle on the right yields to the vehicle on the left",
          "Neither: both must stop completely",
          "The vehicle turning yields to the vehicle going straight",
          "The vehicle on the left yields to the vehicle on the right",
        ],
        correctIndex: 3,
        explanation:
          "The driver on the left yields to the driver on the right, at any uncontrolled intersection including a T-intersection.",
        context:
          "The Act carries the same rule and disapplies it where a peace officer is on duty, traffic lights are operating or a stop sign is erected. In a roundabout the same underlying logic produces the familiar rule that entering traffic yields to circulating traffic.",
        trap:
          "This rule decides a tie and nothing else. Where one vehicle clearly arrived first, that vehicle goes.",
        excerptKey: "act-yield-right",
        sourceLabel: "The Traffic Safety Act, section 219(1)",
        sourceUrl: act(171),
      },
      {
        id: "sk_s6_04",
        topic: "signs",
        question: "What does a yellow diamond with a black symbol mean?",
        choices: [
          "A warning of a dangerous or unusual condition ahead",
          "A regulation you must obey",
          "General information about services",
          "A construction zone",
        ],
        correctIndex: 0,
        explanation:
          "Diamonds warn. Yellow or orange with black letters or symbols, warning of dangerous or unusual conditions ahead such as a curve, turn, dip or side road.",
        context:
          "Where a diamond carries a speed on a tab underneath, that number is a recommendation. Orange diamonds mean the same class of warning inside a construction and maintenance area.",
        trap:
          "The enforceable number is always on a white regulatory rectangle, never on a yellow tab.",
        excerptKey: "sign-warning",
        sourceLabel: "Saskatchewan Driver's Handbook - Six basic sign shapes",
        sourceUrl: hb(77),
      },
      {
        id: "sk_s6_05",
        topic: "sharing",
        question:
          "How far from a stopped school bus with red flashing lights and its stop arm out must you stop?",
        choices: ["3 m", "5 m", "10 m", "20 m"],
        correctIndex: 1,
        explanation:
          "No closer than five metres from the front or the back of the bus, and you hold there until the lights and stop arm are switched off.",
        context:
          "Traffic from both directions stops on an undivided road. On a divided highway, traffic travelling the other way does not have to stop. Passing a bus with red flashing lights carries a minimum fine of $360.",
        trap:
          "Amber flashing lights on a bus are a warning to slow down and proceed with caution, not a stop. The stop arm plus red lights is what stops you.",
        excerptKey: "school-bus-5m",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with school buses",
        sourceUrl: hb(37),
      },
      {
        id: "sk_s6_06",
        topic: "safety",
        question:
          "What is the minimum following distance SGI teaches for ideal conditions?",
        choices: ["Two seconds", "Four seconds", "Three seconds", "Five seconds"],
        correctIndex: 2,
        explanation:
          "Three seconds, measured by counting from when the vehicle ahead passes a fixed object until your own front bumper reaches it.",
        context:
          "Because it is a time, the gap grows with speed: at 100 km/h three seconds is 84 metres, and at 50 km/h it is 42. SGI publishes the whole table.",
        trap:
          "Three is a floor for a perfect day. Behind a motorcycle, behind a large truck, on a wet or slippery surface, or during the first snowfalls, the number goes up.",
        excerptKey: "following-ideal-only",
        sourceLabel: "Saskatchewan Driver's Handbook - Using time to estimate your following distance",
        sourceUrl: hb(101),
      },
      {
        id: "sk_s6_07",
        topic: "signs",
        question: "What does an inverted triangle with a red border mean?",
        choices: [
          "Stop completely",
          "Warning of a hazard ahead",
          "Merge into the next lane",
          "Reduce speed, give right of way, and stop if necessary",
        ],
        correctIndex: 3,
        explanation:
          "That is the yield sign. Reduce speed on the approach, give right of way, and stop if any traffic is in or closely approaching the intersection.",
        context:
          "The Act adds that a driver facing a yield sign shall yield the right of way to other vehicles in or approaching the intersection, and that no driver who has yielded may proceed until it is safe.",
        trap:
          "The railway crossbuck carries the same duty, which is why SGI describes it as the same colour and the same meaning as a yield.",
        excerptKey: "yield-sign-duty",
        sourceLabel: "Saskatchewan Driver's Handbook - Controlled intersections",
        sourceUrl: hb(61),
      },
      {
        id: "sk_s6_08",
        topic: "signals",
        question: "What does a flashing amber light mean?",
        choices: [
          "Proceed with caution",
          "Stop, then proceed when safe",
          "The light is out of service; treat it as a four-way stop",
          "Yield to traffic on your left",
        ],
        correctIndex: 0,
        explanation:
          "A flashing amber means proceed with caution. A flashing red is the one that means stop and then proceed when it is safe.",
        context:
          "Alternating flashing amber lights on an approach are doing a different job: warning you that the traffic lights ahead are red or about to turn red.",
        trap:
          "Amber and red flashers are the pair people invert under pressure. Amber is caution; red is a stop.",
        excerptKey: "signal-flashing-amber",
        sourceLabel: "Saskatchewan Driver's Handbook - Traffic signals",
        sourceUrl: hb(92),
      },
      {
        id: "sk_s6_09",
        topic: "speed",
        question:
          "What speed must you not exceed when passing an emergency vehicle stopped on an undivided highway with its lights flashing?",
        choices: ["40 km/h", "50 km/h", "60 km/h", "The posted limit"],
        correctIndex: 2,
        explanation:
          "Sixty kilometres an hour, and the exemption for the opposite direction applies only on a divided highway.",
        context:
          "The same 60 applies to highway workers and equipment, to tow trucks assisting a disabled vehicle with amber or amber and blue lights, and to service and escort vehicles.",
        trap:
          "Being on the other side of an undivided highway does not lift the limit. SGI says so in terms.",
        excerptKey: "pass-emergency-60",
        sourceLabel: "Saskatchewan Driver's Handbook - Speeding, stunting and racing",
        sourceUrl: hb(30),
      },
      {
        id: "sk_s6_10",
        topic: "signs",
        question: "What colour background does a construction sign use in Saskatchewan?",
        choices: ["Yellow", "Red", "Orange", "Fluorescent yellow-green"],
        correctIndex: 2,
        explanation:
          "Orange, with black letters or symbols. SGI's colour table gives orange a single meaning: construction and maintenance warning.",
        context:
          "Three orange signs designate the start of a work zone: traffic control person ahead, survey crew ahead, and highway workers. Inside the zone the posted speed applies throughout and 60 km/h is the ceiling past a worker.",
        trap:
          "Fluorescent yellow-green is the school colour, not a construction colour, and the two are easy to confuse at night under headlights.",
        excerptKey: "sign-construction-orange",
        sourceLabel: "Saskatchewan Driver's Handbook - Construction signs",
        sourceUrl: hb(86),
      },
      {
        id: "sk_s6_11",
        topic: "rules",
        question:
          "At what distance must you signal a turn when driving at speeds under 60 km/h?",
        choices: ["At least 15 m", "At least 150 m", "At least 60 m", "At least 30 m"],
        correctIndex: 3,
        explanation:
          "At least 30 m before turning at speeds under 60 km/h. At higher speeds SGI's figure is at least 150 m from the corner.",
        context:
          "The Act requires the signal to be given for a sufficient distance to warn other traffic of an intention to stop, abruptly reduce speed, turn or change lanes. SGI's two numbers are the working version of that.",
        trap:
          "Signalling as you begin to turn is the error SGI names: at that point other drivers can already see what you are doing.",
        excerptKey: "signal-distance",
        sourceLabel: "Saskatchewan Driver's Handbook - Signalling",
        sourceUrl: hb(47),
      },
      {
        id: "sk_s6_12",
        topic: "impairment",
        question:
          "What is the blood alcohol limit for a Class 7 learner in Saskatchewan?",
        choices: [".08", ".05", ".04", "Zero"],
        correctIndex: 3,
        explanation:
          "Zero. Every new driver, which includes all Class 7 learners and every driver 21 and under, is zero tolerance for both alcohol and drugs.",
        context:
          "A first roadside suspension for a new driver is 60 days, with a three-day vehicle impoundment and the Driving Without Impairment programme. Zero tolerance for drugs applies to experienced drivers as well.",
        trap:
          "The .04 to .08 band belongs to experienced drivers 22 and over who are out of the GDL programme, and .08 is the Criminal Code line that applies to everybody.",
        excerptKey: "zero-bac-new-drivers",
        sourceLabel: "Saskatchewan Driver's Handbook - Impaired driving",
        sourceUrl: hb(178),
      },
      {
        id: "sk_s6_13",
        topic: "signs",
        question:
          "A pentagon with a fluorescent yellow-green background shows a black silhouette of children. What is it?",
        choices: [
          "A school zone sign",
          "A playground ahead sign",
          "A pedestrian crosswalk sign",
          "A crossing guard sign",
        ],
        correctIndex: 0,
        explanation:
          "It is the school zone sign. Where a maximum speed or a during-school-days tab is mounted underneath, that speed is to be observed.",
        context:
          "School zone speeds are set by municipal bylaw, so the number changes from town to town. Where no sign is posted at all, SGI still asks you to reduce speed and proceed cautiously in a school zone.",
        trap:
          "Playground ahead is a yellow diamond, and the old school zone sign is the same pentagon in blue. The shape alone does not settle it.",
        excerptKey: "sign-school-zone",
        sourceLabel: "Saskatchewan Driver's Handbook - Six basic sign shapes",
        sourceUrl: hb(77),
      },
      {
        id: "sk_s6_14",
        topic: "parking",
        question:
          "Where do you stop at an intersection that has a clearly marked stop line?",
        choices: [
          "At the stop line",
          "At the crosswalk beyond it",
          "Three metres back from the line",
          "Wherever you can see the cross traffic",
        ],
        correctIndex: 0,
        explanation:
          "At the line. SGI's stopping positions are a fixed order, and a marked stop line takes precedence over the fallback distances.",
        context:
          "Where there is no stop line you stop at the nearest crosswalk, marked or not. Where there is neither, you stop within three metres of the intersection in a town, city, village or hamlet, and within ten metres in a rural area.",
        trap:
          "Creeping past the line to see better is a road-test error Saskatchewan candidates report being penalised for. Stop first, then edge forward if you must.",
        excerptKey: "stopping-positions",
        sourceLabel: "Saskatchewan Driver's Handbook - Stopping positions",
        sourceUrl: hb(63),
      },
      {
        id: "sk_s6_15",
        topic: "safety",
        question:
          "What must you do with your headlights when following another vehicle at night?",
        choices: [
          "Keep them on high beam so the driver ahead can see you",
          "Switch them off within 100 m",
          "Keep them on low beam within 100 m of the vehicle you are following",
          "Flash between high and low",
        ],
        correctIndex: 2,
        explanation:
          "Low beam within 100 m, which SGI gives as 330 feet, and spotlamps or auxiliary driving lights off within 500 m. The same applies while you are being passed.",
        context:
          "Meeting an oncoming vehicle is a different figure: dim at least 200 m, or 650 feet, in advance, and keep them dimmed until it has passed. On a divided highway where the roadways are 22 m apart or more, you do not have to dim for oncoming traffic at all.",
        trap:
          "SGI says many drivers dim far too early for oncoming vehicles, which throws away sight distance you are entitled to.",
        excerptKey: "low-beam-100m",
        sourceLabel: "Saskatchewan Driver's Handbook - Headlights",
        sourceUrl: hb(73),
      },
      {
        id: "sk_s6_16",
        topic: "signs",
        question:
          "What does a white rectangular sign with a black arrow curving into a U and a red slash mean?",
        choices: [
          "No left turn",
          "Roundabout ahead",
          "No entry",
          "No U-turn",
        ],
        correctIndex: 3,
        explanation:
          "No U-turn. SGI's caption spells it out: you must not turn your vehicle around in the roadway to travel in the opposite direction.",
        context:
          "At any intersection controlled by traffic lights, U-turns are prohibited unless a sign indicates they are permitted, so the absence of this sign at a signalled intersection does not mean the turn is allowed.",
        trap:
          "Section 235(15) of the Act makes the traffic-light prohibition general, which is the opposite default from an unsignalled intersection where you need only check for a sign.",
        excerptKey: "signal-no-uturn",
        sourceLabel: "Saskatchewan Driver's Handbook - Traffic signals",
        sourceUrl: hb(92),
      },
      {
        id: "sk_s6_17",
        topic: "rightOfWay",
        question:
          "You are entering a roundabout with vehicles already circulating. What do you do?",
        choices: [
          "Yield to the circulating traffic",
          "Enter alongside them and merge",
          "Enter first if you are in the right lane",
          "Stop completely and wait for the roundabout to clear",
        ],
        correctIndex: 0,
        explanation:
          "Traffic entering a roundabout yields to traffic already in it.",
        context:
          "SGI recommends using the right lane mainly when you intend to take the first available exit, and the left lane if you are going beyond the second. Signal right as you leave.",
        trap:
          "You do not have to wait for an empty roundabout, only for a safe gap. Stopping dead when the way is clear is its own hazard for the driver behind you.",
        excerptKey: "roundabout-lane-choice",
        sourceLabel: "Saskatchewan Driver's Handbook - Roundabouts",
        sourceUrl: hb(64),
      },
      {
        id: "sk_s6_18",
        topic: "rules",
        question:
          "You are approaching a hill on a two-lane highway and cannot see over the crest. May you pass?",
        choices: [
          "Yes, if the oncoming lane looks clear",
          "Yes, if you can complete the pass within five seconds",
          "No, SGI rules out passing on the crest of a hill",
          "Only if the centre line is broken",
        ],
        correctIndex: 2,
        explanation:
          "SGI rules out passing on the crest of a hill, before a curve, at intersections, or anywhere your sight distance is limited.",
        context:
          "Outside urban boundaries the Act puts a number on it: you need a clear view of 320 metres in your direction of travel, unless the highway has two or more lanes going your way.",
        trap:
          "A broken centre line does not create sight distance. It permits the manoeuvre where the geometry allows it, and the geometry is what a crest removes.",
        excerptKey: "passing-rules",
        sourceLabel: "Saskatchewan Driver's Handbook - Passing",
        sourceUrl: hb(49),
      },
      {
        id: "sk_s6_19",
        topic: "signs",
        question: "What does a blue sign at the roadside indicate?",
        choices: [
          "A prohibition",
          "A permitted movement",
          "A warning",
          "General information or service road information",
        ],
        correctIndex: 3,
        explanation:
          "Blue means general information or service road information. It never carries a rule.",
        context:
          "SGI's colour table also gives green for a permitted movement or directional guidance, red for stop or prohibition, yellow for a general warning, white for regulatory, orange for construction, and fluorescent yellow-green for school zones.",
        trap:
          "The old school zone sign is also blue, and SGI says those are being replaced by the fluorescent yellow-green version.",
        excerptKey: "sign-colours",
        sourceLabel: "Saskatchewan Driver's Handbook - Standard sign colours",
        sourceUrl: hb(78),
      },
      {
        id: "sk_s6_20",
        topic: "emergencies",
        question:
          "Which collision must always be reported to police in Saskatchewan?",
        choices: [
          "One where a vehicle has to be towed from the scene",
          "One where the damage looks worse than $1,000",
          "One in a parking lot",
          "One where the drivers disagree about fault",
        ],
        correctIndex: 0,
        explanation:
          "A vehicle towed from the scene as a result of the collision is one of the Act's five triggers for a mandatory police report.",
        context:
          "The others are bodily injury or death, an unregistered vehicle, an unidentified vehicle, and a driver apparently under the influence. SGI adds out-of-province vehicles to its own list.",
        trap:
          "Where none of the triggers applies you still have to give the other owner your name, address, driver's licence number and insurance information.",
        excerptKey: "collision-report-police",
        sourceLabel: "Saskatchewan Driver's Handbook - Contact the police",
        sourceUrl: hb(160),
      },
      {
        id: "sk_s6_21",
        topic: "safety",
        question:
          "At what age does the seatbelt responsibility shift from the driver to the passenger?",
        choices: ["14", "15", "16", "18"],
        correctIndex: 2,
        explanation:
          "Sixteen. Drivers are legally responsible for passengers under 16, and from 16 passengers are responsible for buckling themselves up.",
        context:
          "Below seven the requirement is a properly fitted car seat or booster rather than a belt alone, and the Act adds weights and heights: under seven and between 18 and 36 kg and under 145 cm means a booster.",
        trap:
          "The Act works in three brackets rather than one, and the child's size can matter more than the birthday when deciding which restraint applies.",
        excerptKey: "seatbelt-under-16",
        sourceLabel: "Saskatchewan Driver's Handbook - Seatbelts",
        sourceUrl: hb(113),
      },
      {
        id: "sk_s6_22",
        topic: "signs",
        question:
          "You see a yellow diamond showing a black car with wavy lines under the tyres. What is it warning about?",
        choices: [
          "A road surface that is slippery when wet",
          "A rough or bumpy road",
          "Grooved pavement",
          "Loose gravel",
        ],
        correctIndex: 0,
        explanation:
          "It is the road surface slippery when wet sign, one of SGI's standard warning diamonds.",
        context:
          "SGI signs a related freezing case separately as surface subject to icing, warning that a bridge or roadway surface may be slippery at zero degrees Celsius. The bump or rough road ahead sign is a different diamond again.",
        trap:
          "Wet and icy are two different signs with two different mechanisms. The wet one is about rain on a smooth surface; the icing one is about a bridge that freezes before the road.",
        excerptKey: "sign-icing",
        sourceLabel: "Saskatchewan Driver's Handbook - Warning signs",
        sourceUrl: hb(85),
      },
      {
        id: "sk_s6_23",
        topic: "sharing",
        question:
          "An ambulance is approaching with its lights and siren on. What must you do?",
        choices: [
          "Stop where you are, immediately",
          "Speed up to clear the road ahead of it",
          "Drive as close as possible to the right edge of the road and not enter the next intersection until it has passed",
          "Move to the left edge so it can pass on your right",
        ],
        correctIndex: 2,
        explanation:
          "Pull as close as possible to the right edge and stay out of the next intersection until the emergency vehicle has passed, unless a peace officer directs otherwise.",
        context:
          "At an intersection you must stop and let it through. On a one-way street you pull to whichever curb is nearest, right or left. If it has lights but no siren, SGI asks you to extend the same courtesy.",
        trap:
          "Never follow an emergency vehicle going to or from an emergency. The gap behind it is not a lane that has opened up for you.",
        excerptKey: "emergency-vehicle-approach",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with emergency vehicles",
        sourceUrl: hb(35),
      },
      {
        id: "sk_s6_24",
        topic: "signals",
        question:
          "A pedestrian signal is showing a flashing DON'T WALK while someone is halfway across. What does it mean?",
        choices: [
          "They must return to the curb they started from",
          "The signal has failed",
          "They must stop where they are",
          "They should finish crossing if they have already started",
        ],
        correctIndex: 3,
        explanation:
          "A flashing don't walk means pedestrians should finish crossing the street if they have already started. Some signals add a countdown of the seconds remaining.",
        context:
          "A steady don't walk means a pedestrian may not start to cross. The Act requires a pedestrian who has partially crossed to proceed to a sidewalk or safety island while the wait or don't walk symbol is showing.",
        trap:
          "The countdown belongs to the pedestrian already in the crosswalk, not to the driver waiting to turn.",
        excerptKey: "signal-dont-walk",
        sourceLabel: "Saskatchewan Driver's Handbook - Traffic signals",
        sourceUrl: hb(93),
      },
      {
        id: "sk_s6_25",
        topic: "signs",
        question:
          "What does the X-shaped sign at a level crossing tell you to do?",
        choices: [
          "Give right of way and stop if necessary",
          "Stop completely every time",
          "Sound your horn before crossing",
          "Cross only when a signal person waves you on",
        ],
        correctIndex: 0,
        explanation:
          "The crossbuck carries a yield duty: give right of way and stop if necessary. SGI says it is the same colour as a yield sign and has the same meaning.",
        context:
          "SGI still wants you checking for trains at every crossing, including ones with automatic signals. If gates are down, you wait for them to rise, and driving around them is against the law.",
        trap:
          "Buses carrying passengers and vehicles placarded for dangerous goods must stop at every level crossing. Following one and not expecting the stop is the hazard.",
        excerptKey: "sign-crossbuck",
        sourceLabel: "Saskatchewan Driver's Handbook - Six basic sign shapes",
        sourceUrl: hb(77),
      },
      {
        id: "sk_s6_26",
        topic: "rules",
        question:
          "You are on a multi-lane divided highway. What is the left lane intended for?",
        choices: [
          "Normal travel at the posted speed",
          "Vehicles towing trailers",
          "Passing slower vehicles and for emergency vehicles",
          "Traffic that will exit on the left",
        ],
        correctIndex: 2,
        explanation:
          "SGI says the left lane on a multi-lane divided highway is intended for passing slower right-lane vehicles or for emergency vehicles.",
        context:
          "SGI's freeway section says the same and adds one qualification: you may move into the centre or left lanes temporarily to let other drivers merge safely. Divided highways generally are driven in the right lane, with the left for passing, turning left or emergency manoeuvres.",
        trap:
          "The posted maximum in the left lane is still a maximum under ideal conditions, not a licence to exceed the limit while passing. SGI says it is illegal to speed even when passing.",
        excerptKey: "left-lane-passing",
        sourceLabel: "Saskatchewan Driver's Handbook - Lane selection",
        sourceUrl: hb(46),
      },
      {
        id: "sk_s6_27",
        topic: "impairment",
        question:
          "What is the Criminal Code blood alcohol threshold in Canada?",
        choices: [".04", ".05", ".08", ".10"],
        correctIndex: 2,
        explanation:
          "Over 80 mg of alcohol per 100 ml of blood, expressed as .08. Above that you have committed a Criminal Code offence.",
        context:
          "Saskatchewan's provincial consequences start lower. Experienced drivers face a roadside suspension from .04, and new drivers, meaning learners, novices and every driver 21 and under, are at zero.",
        trap:
          "The .08 is a criminal threshold and not a safe level. SGI's own figure is that a driver between .05 and .09 is 11 times more likely to crash.",
        excerptKey: "criminal-08",
        sourceLabel: "Saskatchewan Driver's Handbook - The Criminal Code of Canada",
        sourceUrl: hb(181),
      },
      {
        id: "sk_s6_28",
        topic: "parking",
        question:
          "How far must you park from a vehicle stopped on the opposite side of a rural Saskatchewan highway?",
        choices: ["More than 10 m", "More than 20 m", "More than 30 m", "More than 50 m"],
        correctIndex: 2,
        explanation:
          "More than 30 metres, which SGI also gives as 98 feet, and as far right as possible from the centre of the highway.",
        context:
          "The rule keeps two stopped vehicles from squeezing the through lane from both sides at once. At night the stopped vehicle also has to be marked with flares, hazard lights or reflectors.",
        trap:
          "It is a minimum separation from the vehicle opposite, not a distance from the edge of the road. Being well onto the shoulder does not satisfy it.",
        excerptKey: "act-stop-30m",
        sourceLabel: "The Traffic Safety Act, section 209(2)",
        sourceUrl: act(164),
      },
      {
        id: "sk_s6_29",
        topic: "signs",
        question:
          "What does a white regulatory sign showing a black arrow and the words ONE WAY mean?",
        choices: [
          "Traffic may travel in either direction",
          "A one-way bridge is ahead",
          "The lane ahead ends",
          "Traffic travels only in the direction of the arrow",
        ],
        correctIndex: 3,
        explanation:
          "It is the one-way street or highway sign, and traffic travels only in the direction shown. The Act forbids driving a one-way highway in any other direction.",
        context:
          "SGI pairs it in the regulatory group with a two-way traffic sign. The matching yellow warning diamond, two-way traffic ahead, warns you that a one-way section is about to become two-way.",
        trap:
          "Left turns on red are permitted at the intersection of two one-way streets, after stopping and yielding, so recognising a one-way street changes what you may lawfully do at the light.",
        excerptKey: "act-one-way",
        sourceLabel: "The Traffic Safety Act, section 221",
        sourceUrl: act(172),
      },
      {
        id: "sk_s6_30",
        topic: "licensing",
        question:
          "What passing grade does SGI publish for each of the two written exams?",
        choices: ["70%", "75%", "80%", "85%"],
        correctIndex: 2,
        explanation:
          "Eighty per cent, on the basic knowledge exam and on the sign exam separately. Each costs $25 every time you sit it.",
        context:
          "Fail one and you rewrite only that one. SGI's page says another test can be scheduled as early as the next day, and the handbook adds that you may write only once per day. A successful result is valid for one year.",
        trap:
          "Because the two exams are scored separately, a strong rules score cannot carry a weak signs score. Both halves have to clear 80% on their own.",
        excerptKey: "test-basic-exam",
        sourceLabel: "SGI - New Class 5 drivers",
        sourceUrl: SGI_NEW,
      },
    ],
  },
];
