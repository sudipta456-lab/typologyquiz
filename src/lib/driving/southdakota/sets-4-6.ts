import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sources and the same checking as sets 1 to 3: the South
// Dakota Driver License Manual REVISED 11/2024, South Dakota Codified Laws
// Title 32, the Department of Public Safety's testing and FAQ pages, and the
// DPS Teen Driver Graduated Licensing pamphlet effective 7/1/2025.
//
// Set 4 walks the whole manual, including the chapters most study guides skip -
// mirrors, child restraints, vehicle inspection, the enforcement stop and the
// interchange types. Set 5 is built from what South Dakotans report getting
// wrong: the numbers the manual leaves to the statute, the technique details
// the book states precisely and nobody expects to be tested on, and the
// licensing stages. Set 6 is a straight 30-question run with no theme.
const HB = "https://www.sd.gov/sys_attachment.do?sys_id=d8e0b08e47bd0390a497127ba26d4348";
const p = (n: number) => `${HB}#page=${n}`;
const sdcl = (s: string) => `https://sdlegislature.gov/Statutes/${s}`;
const TEEN = "https://www.sd.gov/sys_attachment.do?sys_id=7da4d39947d33e10a497127ba26d43d5";

export const southdakotaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions drawn from every chapter, including the ones most study guides skip: mirrors and seat position, child restraints, vehicle checks, interchange types, the enforcement stop and the paperwork that keeps a South Dakota license valid.",
    questions: [
      {
        id: "sd_s4_01",
        topic: "safety",
        question:
          "The manual gives a specific method for setting the left outside mirror. What is it?",
        choices: [
          "Set it so the side of your own car fills a third of the glass",
          "Rest your head against the closed window and set the mirror to barely show the edge of the car",
          "Point it straight back so it duplicates the rearview mirror",
          "Angle it down so you can see the lane markings beside you",
        ],
        correctIndex: 1,
        explanation:
          "Lean until your head touches the driver's window, then set the mirror so you can only just see the edge of your own car. For the right mirror you lean the other way, until your head is below the rearview mirror or above the center console.",
        context:
          "The point is to push the glass outward into the blind spot. The manual says this costs you the sight of your own flanks but adds 12 to 16 degrees of extra viewing area on each side. The inside mirror stays the primary rear view and should frame the rear window.",
        trap:
          "Setting the mirrors so you can see your own doors is comfortable and wastes most of the glass on sheet metal you already know is there.",
        excerptKey: "mirror-left-setting",
        sourceLabel: "South Dakota Driver License Manual - Before You Drive: Adjusting Your Mirrors",
        sourceUrl: p(25),
        commonlyMissed: true,
      },
      {
        id: "sd_s4_02",
        topic: "licensing",
        question:
          "What vision standard must you meet for an unrestricted South Dakota driver license?",
        choices: [
          "20/20 in at least one eye",
          "20/30 with both eyes together",
          "20/60 or better with both eyes",
          "20/40 or better with both eyes, and no worse than 20/50 in either eye",
        ],
        correctIndex: 3,
        explanation:
          "The manual sets both halves: 20/40 or better using both eyes, and no eye worse than 20/50 on its own. Fail either and you either get a restriction or you need an eye doctor's statement.",
        context:
          "If you cannot pass the screening, testing stops until you produce a statement from an optometrist or ophthalmologist certifying you can drive safely. If you wear glasses or contacts during the test, you are required to wear them whenever you drive, and that appears on the card as restriction B.",
        trap:
          "Passing with both eyes open is not enough on its own. The per-eye floor of 20/50 is a separate hurdle and it is what catches people who have lost sight in one eye.",
        excerptKey: "vision-standard",
        sourceLabel: "South Dakota Driver License Manual - Be in Shape to Drive: Vision",
        sourceUrl: p(18),
      },
      {
        id: "sd_s4_03",
        topic: "signs",
        question: "What is shown on a blue rectangular sign with white symbols?",
        choices: [
          "The location of services such as rest areas, fuel, campgrounds or hospitals",
          "A mandatory instruction you must obey",
          "The distance to the next town",
          "A temporary detour",
        ],
        correctIndex: 0,
        explanation:
          "Blue with white lettering or symbols is the service sign family. It points you at rest areas, gas stations, campgrounds and hospitals.",
        context:
          "Blue belongs to the guide-sign group along with green and brown. Green and brown rectangles with white lettering are destination signs, giving direction and distance to cities, airports, state lines, national parks and historic areas.",
        trap:
          "Blue looks authoritative enough to be mistaken for a regulatory color. Regulatory signs are white with black, red or green lettering, and blue never carries a rule.",
        excerptKey: "service-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Service Signs",
        sourceUrl: p(36),
      },
      {
        id: "sd_s4_04",
        topic: "rules",
        question:
          "You are driving through a diverging diamond interchange. What is different about the left turns onto the freeway?",
        choices: [
          "They are banned, and you must use a loop ramp instead",
          "They require a full stop before the ramp",
          "They are free flow, so vehicles do not stop to reach the ramp",
          "They are controlled by a separate green arrow",
        ],
        correctIndex: 2,
        explanation:
          "In a diverging diamond the traffic streams cross at the first signal, which puts left-turning drivers on the left side. That lets every left turn onto the freeway run free flow, with no stop at the ramp.",
        context:
          "You follow the signs, signals and pavement markings through the first set of lights, where the road briefly feels like a one-way street, then straight-ahead traffic clears a second set. Pedestrians use designated walkways and cross only at crosswalks, and bicyclists may use either the bike lane or the walkways.",
        trap:
          "The layout looks wrong the first time and drivers hesitate mid-crossover. The manual's advice is simply that the same rules apply as at any other intersection - follow the markings.",
        excerptKey: "ddi-left-turns",
        sourceLabel:
          "South Dakota Driver License Manual - General Driving: Navigating a Diverging Diamond Interchange",
        sourceUrl: p(42),
      },
      {
        id: "sd_s4_05",
        topic: "impairment",
        question:
          "How much sleep does the manual say most people need to stay properly alert during the day?",
        choices: ["4 to 5 hours", "7 to 9 hours", "6 hours", "10 hours or more"],
        correctIndex: 1,
        explanation:
          "Seven to nine hours. The manual puts adequate sleep first on its list of things to do before a trip, ahead of planning stops and arranging a companion.",
        context:
          "Fatigue affects vision and slows decisions, and the manual treats it alongside alcohol and drugs as a form of impairment rather than as tiredness. It asks you to check whether your medications cause drowsiness and to avoid alcohol and drugs entirely before driving.",
        trap:
          "Coffee is a supplement to rest, not a replacement. The manual's own suggestion is caffeine immediately before a short nap so you get the benefit of both.",
        excerptKey: "fatigue-sleep-hours",
        sourceLabel: "South Dakota Driver License Manual - Be in Shape to Drive: Fatigue",
        sourceUrl: p(18),
      },
      {
        id: "sd_s4_06",
        topic: "sharing",
        question:
          "You are following an articulated bus. What extra hazard does the manual warn about?",
        choices: [
          "The rear section brakes independently of the front",
          "The bus cannot reverse",
          "The rear doors open into the traffic lane",
          "Tail swing, where the rear swings about 3 feet into traffic",
        ],
        correctIndex: 3,
        explanation:
          "An articulated bus pivots in the middle, and the rear section swings out roughly 3 feet as it turns. You need enough space behind it to absorb that.",
        context:
          "The manual's other bus advice is to read the road ahead: if you can see a bus in front of you, change lanes before it stops rather than getting stuck behind it, pass a parked bus carefully because it may pull out, and expect people to run in front of buses or across the road to catch one.",
        trap:
          "Sitting close behind a bus at a corner is the one place tail swing reaches. Three feet is more than the average following gap allows for.",
        excerptKey: "articulated-bus-swing",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Bus Related Issues",
        sourceUrl: p(64),
      },
      {
        id: "sd_s4_07",
        topic: "safety",
        question: "How should the head restraint in your seat be adjusted?",
        choices: [
          "So it touches the back of your head and sits no lower than your ears",
          "As low as possible, so it does not block your rear view",
          "Level with the top of your shoulders",
          "Fully raised, whatever your height",
        ],
        correctIndex: 0,
        explanation:
          "Head restraints exist to prevent whiplash, and they only work if they contact the back of your head rather than the base of your neck. The manual sets the floor at the level of your ears.",
        context:
          "It is part of a whole seating position: sit upright with your back against the seat and feet on the floor, keep 10 inches between your chest and the wheel, put the top of the wheel below chin level and no higher than your shoulders, and do not recline the seat.",
        trap:
          "Dropping the restraint out of the way of the rear window turns it into the thing your head snaps back over in a rear-end crash.",
        excerptKey: "head-restraint",
        sourceLabel: "South Dakota Driver License Manual - Before You Drive: Adjusting Your Seat",
        sourceUrl: p(25),
      },
      {
        id: "sd_s4_08",
        topic: "signals",
        question:
          "A signal head at a midblock crossing has two red lenses above a single yellow lens and is currently dark. What is it?",
        choices: [
          "A malfunctioning traffic signal",
          "A railroad crossing signal",
          "A pedestrian hybrid beacon, which lights up when someone presses to cross",
          "A school zone flasher outside school hours",
        ],
        correctIndex: 2,
        explanation:
          "That is a pedestrian hybrid beacon. It stays dark until a pedestrian pushes the call button, then runs a yellow-to-red sequence that brings you to a stop while they cross, and goes dark again afterwards.",
        context:
          "The manual lists the beacon under traffic control devices, alongside signals, signs, pavement markings and the directions of law enforcement, highway personnel and school crossing guards. It is designed for busy or higher-speed roads at midblock crossings and uncontrolled intersections.",
        trap:
          "A dark beacon is not a broken signal. The rule about treating an unlighted signal as a stop sign is for ordinary traffic signals, not for a beacon that is dark by design.",
        excerptKey: "pedestrian-hybrid-beacon",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Control Devices",
        sourceUrl: p(31),
      },
      {
        id: "sd_s4_09",
        topic: "parking",
        question:
          "You are reversing out of an angle parking space. What does the manual tell you to do first?",
        choices: [
          "Turn the wheel toward the lane you want to enter, then reverse",
          "Check traffic in all directions, then move straight back until your front bumper clears the car beside you",
          "Reverse quickly to claim the lane",
          "Sound the horn to warn passing traffic",
        ],
        correctIndex: 1,
        explanation:
          "Check every direction, then reverse straight until the front bumper is clear of the vehicle beside you. Only then do you turn the wheel sharply toward where the rear of the car should go.",
        context:
          "Entering the space is the mirror image: identify the space, check traffic, signal, move forward slowly turning as needed until the car reaches the middle of the space, center it, then pull to the front of the space and secure the vehicle.",
        trap:
          "Turning the wheel before the front bumper is clear swings your nose into the car parked next to you. Straight back first, then steer.",
        excerptKey: "angle-parking-exit",
        sourceLabel:
          "South Dakota Driver License Manual - General Driving: Perpendicular and Angle Parking",
        sourceUrl: p(44),
      },
      {
        id: "sd_s4_10",
        topic: "speed",
        question:
          "You are towing a manufactured home wider than 102 inches on an interstate. What is your maximum speed?",
        choices: ["80 mph", "65 mph", "45 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "Fifty-five on the interstate system, and 45 on any other highway. The interstate's usual 80 mph maximum does not apply to an over-width towed home.",
        context:
          "South Dakota's speed law has several vehicle-specific ceilings that override the general limits. The Transportation Commission can also set maximum speeds for vehicles over 10,000 pounds gross weight, and a vehicle on solid rubber or cushion tires is capped at 10 mph.",
        trap:
          "Assuming the posted limit is your limit is what catches drivers towing wide loads. The vehicle-specific ceiling wins even where the sign says 80.",
        excerptKey: "speed-manufactured-home",
        sourceLabel:
          "South Dakota Codified Laws 32-25-6.1 - Maximum speed for manufactured homes or mobile homes",
        sourceUrl: sdcl("32-25-6.1"),
      },
      {
        id: "sd_s4_11",
        topic: "emergencies",
        question: "Your brakes stop working while you are driving. What is the manual's first step?",
        choices: [
          "Apply the parking brake slowly, ready to release it if the car starts to skid",
          "Switch off the engine immediately",
          "Shift into reverse to slow the wheels",
          "Steer into the curb to scrub off speed",
        ],
        correctIndex: 0,
        explanation:
          "Reach for the parking brake, and apply it slowly rather than yanking it, because locking the rear wheels turns a brake failure into a skid. Be ready to ease it off if the back starts to come round.",
        context:
          "If that does not slow the car, the manual's next step is to turn off the engine and look for a safe place to come to a stop, making sure the vehicle ends up off the roadway. It also says never keep driving a car whose brakes have failed.",
        trap:
          "Pulling the parking brake hard is the instinct under panic and it is the one thing the manual warns against. Slowly is the operative word.",
        excerptKey: "brake-failure",
        sourceLabel: "South Dakota Driver License Manual - Emergency Situations: Brake Failure",
        sourceUrl: p(58),
      },
      {
        id: "sd_s4_12",
        topic: "rightOfWay",
        question:
          "You are on an interstate acceleration ramp with traffic already flowing in the right lane. Who yields?",
        choices: [
          "The traffic on the interstate, which should move over",
          "Whoever is travelling more slowly",
          "You do, because you are joining a limited access highway",
          "Neither - merging is shared responsibility with no rule",
        ],
        correctIndex: 2,
        explanation:
          "The driver on the entrance or acceleration ramp yields to traffic already on the limited access or interstate highway. The ramp is there to let you reach their speed, not to give you priority.",
        context:
          "The manual asks you to use the whole acceleration lane rather than driving to the end and stopping, because a stopped car has no room left to build speed and the driver behind is watching the highway rather than you. Courteous drivers on the main line will make room, but the legal duty runs the other way.",
        trap:
          "Reaching the end of the ramp does not transfer the right-of-way to you. If there is no gap, slow on the ramp and leave yourself road to accelerate into.",
        excerptKey: "row-list-entering",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Yielding Right-of-Way",
        sourceUrl: p(31),
      },
      {
        id: "sd_s4_13",
        topic: "signs",
        question: "What do the shape and color of a route number sign tell you?",
        choices: [
          "How many lanes the road has",
          "What type of roadway it is - interstate, US, state, city, county or local",
          "Whether the road is paved",
          "The speed limit on that route",
        ],
        correctIndex: 1,
        explanation:
          "Route markers are coded by shape and color to show what kind of road you are on: interstate, US highway, state, city, county or local road.",
        context:
          "The manual pairs that with practical advice: plan the trip on a map, then follow the route signs on the road so you do not get lost in unfamiliar country. In a state where a wrong turn can mean thirty miles of gravel before the next junction, that is not a throwaway line.",
        trap:
          "The number on the marker identifies the route, not the speed limit or the road standard. A state route can be anything from four lanes to a two-lane blacktop.",
        excerptKey: "route-number-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Route Number Signs",
        sourceUrl: p(36),
      },
      {
        id: "sd_s4_14",
        topic: "rules",
        question:
          "You want to reverse direction on a street too narrow to loop around the block, and there is a driveway on your right. What does the manual prefer?",
        choices: [
          "A U-turn from the center of the road",
          "A three-point turnabout using both lanes",
          "Reversing to the last intersection",
          "A two-point turnabout using the driveway",
        ],
        correctIndex: 3,
        explanation:
          "A two-point turnabout uses a street, alley or driveway to reverse direction, and it keeps you out of the opposing lane for far less time than a three-point turn does.",
        context:
          "The reverse version signals right, stops, backs up until the rear bumper reaches the near edge of the driveway, then steers hard right into it before pulling out left. The forward version drives into the driveway close to its right side and reverses out. The three-point turn is reserved for when no driveway or alley exists.",
        trap:
          "The three-point turn is the maneuver everyone practises, so it is the one people reach for. It puts your car sideways across both lanes, which is exactly what the two-point turn avoids.",
        excerptKey: "three-point-turnabout",
        sourceLabel: "South Dakota Driver License Manual - General Driving: Turning and Turnabouts",
        sourceUrl: p(38),
      },
      {
        id: "sd_s4_15",
        topic: "safety",
        question: "How does the manual tell you to check tire tread depth?",
        choices: [
          "Put a penny headfirst into the deepest groove and look at how much of Lincoln's head shows",
          "Measure the groove with a ruler against a 3 mm mark",
          "Check the wear bars against the tire's date code",
          "Compare the tread pattern with the spare",
        ],
        correctIndex: 0,
        explanation:
          "The penny test. Lincoln goes in headfirst, into the deepest-looking groove, and if you can see all of his head the tire is worn out and must be replaced before you drive on it.",
        context:
          "The manual pairs it with a monthly pressure check using a gauge against the PSI figure on the driver's door jamb, done when the tires are cold. Worn or under-inflated tires lengthen stopping distances, make steering harder, and raise the risk of hydroplaning and blowouts.",
        trap:
          "A tire that looks fine from standing height can still fail the penny test. The check is done in the deepest groove, on cold tires, with the coin actually in the tread.",
        excerptKey: "penny-test",
        sourceLabel: "South Dakota Driver License Manual - Before You Drive: Inspecting Your Vehicle",
        sourceUrl: p(23),
      },
      {
        id: "sd_s4_16",
        topic: "impairment",
        question: "How often does the manual suggest stopping on a long drive?",
        choices: [
          "Every 300 miles",
          "Only when you begin to feel tired",
          "About every 100 miles or 2 hours",
          "Once per tank of fuel",
        ],
        correctIndex: 2,
        explanation:
          "Roughly every 100 miles or two hours, whichever comes first. It is a planning instruction rather than a response to feeling tired, because by the time you notice the fatigue you have already lost reaction time.",
        context:
          "The other pre-trip items are enough sleep, a travel companion who can watch your driving, a check of your medication labels for drowsiness warnings, and no alcohol or drugs. If tiredness catches you anyway, pull off at the next exit or rest area for a 15 to 20 minute nap.",
        trap:
          "Driving until you feel sleepy is the failure mode the schedule is designed to prevent. Fatigue degrades judgment before it feels like tiredness.",
        excerptKey: "fatigue-stop-every-100",
        sourceLabel: "South Dakota Driver License Manual - Be in Shape to Drive: Fatigue",
        sourceUrl: p(18),
      },
      {
        id: "sd_s4_17",
        topic: "sharing",
        question: "What does the manual say about runaway truck ramps?",
        choices: [
          "They may be used by any vehicle in difficulty",
          "Never park on the ramp or in its entrance",
          "They are only found on interstate highways",
          "They must be signed at least a mile in advance",
        ],
        correctIndex: 1,
        explanation:
          "Parking on the ramp, or even in its entrance, is illegal and can cost a truck driver the only escape they have. The manual calls it inviting disaster.",
        context:
          "Runaway ramps exist because trucks and buses occasionally lose braking on long grades, which is a real risk in the Black Hills. Smoke coming from a large vehicle's brakes is the warning sign the manual gives, and the response is to get out of its way and never get in front of it.",
        trap:
          "An empty gravel ramp with a view looks like a pull-out. It is the last resort for a vehicle that has already lost its brakes.",
        excerptKey: "runaway-truck-ramp",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Runaway Truck Ramps",
        sourceUrl: p(64),
      },
      {
        id: "sd_s4_18",
        topic: "licensing",
        question: "What does South Dakota require of a moped rider?",
        choices: [
          "A motorcycle endorsement",
          "A Motorcycle Instruction Permit",
          "Nothing, if the machine is under 50cc",
          "A valid Operator's License",
        ],
        correctIndex: 3,
        explanation:
          "Moped operators must hold a valid Operator's License. There is no separate moped permit and no exemption based on engine size.",
        context:
          "That is a different track from a motorcycle, which needs its own knowledge test and drive test on top of the car ones. A Motorcycle Instruction Permit is valid for one year, restricts riding to 6 a.m. to 8 p.m. with an accompanying licensed rider on another machine, and never allows a passenger.",
        trap:
          "A moped is not treated as a bicycle and it is not treated as a motorcycle. It sits with the car license, which surprises people expecting one or the other.",
        excerptKey: "moped-licence",
        sourceLabel:
          "South Dakota Driver License Manual - The Driver's License: Types of Driver's Licenses and Driver's Permits",
        sourceUrl: p(9),
      },
      {
        id: "sd_s4_19",
        topic: "signals",
        question:
          "You are stopped at a steady red light and want to go straight ahead. What does the manual say has to happen before you move?",
        choices: [
          "The light turns green and there is no crossing traffic",
          "The light turns green - that is enough on its own",
          "The cross street's light turns red",
          "Three seconds pass after the light changes",
        ],
        correctIndex: 0,
        explanation:
          "The manual puts both conditions in one sentence: you wait until the light turns green and there is no crossing traffic before you may proceed. A green light does not clear the intersection for you.",
        context:
          "The intersections chapter adds the practical version. Avoid moving the instant the light changes, make sure the path of travel is clear all the way through, and remember that the seconds just after a green is exactly when a driver on the cross street is most likely to be hurrying the change.",
        trap:
          "Treating green as a command to go is how right-angle collisions happen. Intersections are the most commonly struck object in South Dakota crash statistics.",
        excerptKey: "steady-red",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
      {
        id: "sd_s4_20",
        topic: "rules",
        question:
          "A highway is divided into two roadways by a grass median. Where may you cross it?",
        choices: [
          "Anywhere the median is flat enough to drive over",
          "Anywhere, provided you signal and no traffic is coming",
          "Only through an opening, crossover or intersection established by public authority",
          "Only at night, when traffic is light",
        ],
        correctIndex: 2,
        explanation:
          "On a divided highway you drive on the right-hand roadway and cross the dividing space only where a public authority has made an opening, crossover or intersection. Everywhere else, the median is not a road.",
        context:
          "The manual states the interstate version flatly: you must not cross the median of an interstate highway. Backing up on an interstate is prohibited under any circumstances, so a missed exit means carrying on to the next one.",
        trap:
          "A worn set of tire tracks across a median is evidence that other drivers broke the same rule, not that the crossing is legal.",
        excerptKey: "divided-highway-statute",
        sourceLabel:
          "South Dakota Codified Laws 32-26-9 - Highways divided by physical barrier--Use of right-hand roadway",
        sourceUrl: sdcl("32-26-9"),
      },
      {
        id: "sd_s4_21",
        topic: "speed",
        question:
          "Fog has cut visibility to a few hundred feet on a highway posted at 65 mph. What does South Dakota law require?",
        choices: [
          "You may hold 65 mph, since that is the posted limit",
          "You must drive no faster than is reasonable and prudent for the conditions",
          "You must reduce to exactly half the posted limit",
          "You must switch on hazard flashers and continue at the limit",
        ],
        correctIndex: 1,
        explanation:
          "The posted limit is a ceiling for ideal conditions, not an entitlement. Driving faster than is reasonable and prudent for the conditions then existing is a Class 2 misdemeanor even if you are under the sign.",
        context:
          "The manual makes the same point about speed limit signs: the maximum should be driven only in ideal conditions, and you must reduce speed when the road is slippery or when rain, snow, ice or fog make it hard to see down the road. Low beams go on in fog, because high beams reflect straight back at you.",
        trap:
          "There is no fixed fraction to apply. The test is whether your speed suits the conditions, which is why a ticket is possible below the posted number.",
        excerptKey: "speed-reasonable-and-prudent",
        sourceLabel:
          "South Dakota Codified Laws 32-25-3 - Requirement that speed be reasonable and lawful under statutes",
        sourceUrl: sdcl("32-25-3"),
      },
      {
        id: "sd_s4_22",
        topic: "safety",
        question:
          "How much light must the windows beside the driver let through under South Dakota law?",
        choices: [
          "At least 20%",
          "At least 50%",
          "There is no limit on side windows",
          "At least 35%",
        ],
        correctIndex: 3,
        explanation:
          "Film or one-way glass on the windshield and the side windows beside or forward of the driver may not cut light transmittance below 35%. Rear windows have their own lower floor of 20%, with a 9% enforcement tolerance.",
        context:
          "No sun screening may obstruct the driver's clear view through the windshield, and no film may extend below the AS-1 line or the lowest point of the sun visor. The manual cites SDCL 32-15-2.4, 2.5 and 2.9 for all of it.",
        trap:
          "The 20% figure is for the rear windows only. Applying it to the front is exactly the mistake that fails a vehicle inspection.",
        excerptKey: "window-tint-front",
        sourceLabel: "South Dakota Driver License Manual - Before You Drive: Windshield & Windows",
        sourceUrl: p(24),
        commonlyMissed: true,
      },
      {
        id: "sd_s4_23",
        topic: "parking",
        question: "What does the manual say about leaving the key in a parked vehicle?",
        choices: [
          "Never leave the ignition key in a parked vehicle",
          "It is acceptable if the doors are locked",
          "It is acceptable for stops under five minutes",
          "It is acceptable in a private driveway",
        ],
        correctIndex: 0,
        explanation:
          "Never. The manual states it as a flat rule and adds that locking the doors whenever you leave the car is a good habit.",
        context:
          "It sits with the rest of the parking checklist: set the parking brake, leave an automatic in park or a manual in the lowest gear, get out on the curb side where you can, and check for traffic before opening the door.",
        trap:
          "Leaving the engine running to keep the heater going through a South Dakota winter is exactly the scenario this rule addresses, and it is still a no.",
        excerptKey: "parking-never-leave-key",
        sourceLabel: "South Dakota Driver License Manual - General Driving: No-Parking Zones",
        sourceUrl: p(43),
      },
      {
        id: "sd_s4_24",
        topic: "emergencies",
        question:
          "You have stopped at the scene of a crash involving wrecked vehicles. What does the manual tell you to do about the vehicles themselves?",
        choices: [
          "Move them clear of the road immediately",
          "Leave them exactly as they are and touch nothing",
          "Turn off the ignition of the wrecked vehicles and do not smoke around them",
          "Open the hoods to disconnect the batteries",
        ],
        correctIndex: 2,
        explanation:
          "Switch off the ignitions and keep everyone from smoking. Spilled fuel makes fire a genuine risk, and a running engine near it is an ignition source.",
        context:
          "The rest of the scene checklist is to get a drivable vehicle off the road so it does not cause a second crash, stay out of the traffic lanes on foot, keep well away from any downed power lines, and use flares or other warning devices to alert approaching traffic.",
        trap:
          "Standing among wrecked cars in the traffic lanes to help is how bystanders become casualties. Warn traffic first, then help.",
        excerptKey: "crash-scene-ignition",
        sourceLabel:
          "South Dakota Driver License Manual - Emergency Situations: At the Accident Scene",
        sourceUrl: p(59),
      },
      {
        id: "sd_s4_25",
        topic: "signs",
        question: "What do green or brown rectangular signs with white lettering show?",
        choices: [
          "Lane restrictions",
          "Directions and distances to cities, airports, state lines and parks",
          "Emergency services locations",
          "Temporary construction routing",
        ],
        correctIndex: 1,
        explanation:
          "Those are destination signs. They give direction and distance to places - cities, airports, state lines - and to special areas such as national parks, historic sites and museums.",
        context:
          "Brown is the color the sign system reserves for recreational and cultural destinations, which is why so much of the signing toward the Black Hills is brown. Blue with white symbols is the separate service family: rest areas, fuel, camping and hospitals.",
        trap:
          "Green and brown are the same family for testing purposes even though they look different on the road. Both are guide signs, not regulatory ones.",
        excerptKey: "destination-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Destination Signs",
        sourceUrl: p(36),
      },
      {
        id: "sd_s4_26",
        topic: "rightOfWay",
        question:
          "A road grader is working on a highway with a flashing light on, occupying part of the left-hand side. What is the position?",
        choices: [
          "It must yield to all through traffic",
          "You may pass it on the shoulder",
          "You must stop until it has finished",
          "Highway equipment has preference of right-of-way and may use the left-hand side while working",
        ],
        correctIndex: 3,
        explanation:
          "Highway equipment and personnel doing maintenance have preference of right-of-way, and may drive on the left-hand side of the traveled portion to dump material, repair or smooth the surface.",
        context:
          "The equipment has duties too. It must display a flashing or revolving light at all times, and it may not indiscriminately block traffic - it has to leave reasonable room on the traveled portion for other vehicles to get past.",
        trap:
          "Seeing a machine on the wrong side of the road reads as a mistake. Where maintenance work requires it, that is precisely what the statute allows.",
        excerptKey: "highway-equipment-row",
        sourceLabel:
          "South Dakota Codified Laws 32-26-16 - Highway equipment and personnel as having right-of-way",
        sourceUrl: sdcl("32-26-16"),
      },
      {
        id: "sd_s4_27",
        topic: "impairment",
        question:
          "What does the manual say about over-the-counter medicines and driving?",
        choices: [
          "Cold and allergy remedies can make you drowsy, and pep pills can leave you nervous, dizzy and unable to concentrate",
          "They are safe because they need no prescription",
          "Only prescription drugs affect driving",
          "They are a problem only if combined with alcohol",
        ],
        correctIndex: 0,
        explanation:
          "The manual names both directions of the problem. Remedies for headaches, colds, hay fever and nerves cause drowsiness, and stimulants and diet pills leave you jittery, dizzy and struggling to concentrate, with vision effects on top.",
        context:
          "The instruction is to read the label before taking anything, and to ask a doctor or pharmacist about side effects if you are unsure. Prescription antidepressants, painkillers, sleep aids and sedatives get the same treatment, and mixing any of them with alcohol can multiply the effect.",
        trap:
          "Over the counter does not mean impairment free. The manual gives non-prescription drugs their own section for exactly that reason.",
        excerptKey: "otc-drugs",
        sourceLabel: "South Dakota Driver License Manual - Be in Shape to Drive: Over-the-Counter Drugs",
        sourceUrl: p(21),
      },
      {
        id: "sd_s4_28",
        topic: "safety",
        question: "When is a load on your vehicle or trailer considered secure?",
        choices: [
          "When it is below the height of the sides",
          "When it is covered with a tarp",
          "When nothing can slide, shift, fall, sift onto the roadway or become airborne",
          "When it is under the weight limit for the trailer",
        ],
        correctIndex: 2,
        explanation:
          "The test is movement, not weight or height. A load counts as secure only when nothing on it can slide, shift, fall, sift out onto the road or blow away.",
        context:
          "The manual's methods are rope, netting or straps, tying large objects directly to the vehicle or trailer, covering the whole load with a sturdy tarp or net, and not overloading in the first place. Animals count as part of the load and must be properly secured too.",
        trap:
          "A tarp thrown over the top is a start and not the standard. Driving with an unsecured load is an offense in its own right, with a fine and possible jail time if it causes a crash.",
        excerptKey: "load-secure-definition",
        sourceLabel: "South Dakota Driver License Manual - Before You Drive: Secure Your Load",
        sourceUrl: p(28),
      },
      {
        id: "sd_s4_29",
        topic: "sharing",
        question:
          "You are parked at the curb on a city street and about to open your door. What does the manual tell you to check for specifically?",
        choices: [
          "Whether the parking meter has expired",
          "Bicyclists to the side and rear",
          "Whether your wheels are within 12 inches of the curb",
          "Oncoming traffic only",
        ],
        correctIndex: 1,
        explanation:
          "The bicyclists section says it directly: when parked on the street, check to the sides and rear for bicyclists before you open the door.",
        context:
          "It sits with a list of other bicycle duties - yield where a bike path or lane crosses a road, do not park or drive in a bike lane, give as much space as possible when passing, avoid stopping suddenly in front of a cyclist because your brakes are far more powerful, and check for cyclists before backing.",
        trap:
          "A cyclist in a bike lane is exactly where your mirror stops covering. The check has to be a look over the shoulder, not a glance in the glass.",
        excerptKey: "bicycle-door",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Bicyclists",
        sourceUrl: p(62),
      },
      {
        id: "sd_s4_30",
        topic: "rules",
        question: "When may you legally overtake another vehicle on the right in South Dakota?",
        choices: [
          "Whenever the vehicle ahead is going below the speed limit",
          "Whenever the shoulder is wide enough",
          "Never",
          "When the vehicle ahead is turning left, or the road has room for two or more lines of vehicles in each direction",
        ],
        correctIndex: 3,
        explanation:
          "The statute lists three cases: the vehicle ahead is making or about to make a left turn, the roadway is unobstructed and wide enough for two or more lines of moving vehicles in each direction, or the road is one-way and wide enough for two lines. In every case the move has to be safe.",
        context:
          "There is a hard limit on top: you may never make the movement by driving off the pavement or main traveled portion of the roadway. That is what makes shoulder passing illegal however wide and firm the shoulder is.",
        trap:
          "A slow driver ahead is not one of the three conditions. Frustration is not a legal ground for passing on the right.",
        excerptKey: "pass-right-statute",
        sourceLabel: "South Dakota Codified Laws 32-26-27 - Overtaking and passing on right",
        sourceUrl: sdcl("32-26-27"),
      },
      {
        id: "sd_s4_31",
        topic: "signs",
        question:
          "A flagger in a work zone signals you to stop, but the temporary signal ahead is showing green. What do you do?",
        choices: [
          "Follow the flagger's instruction",
          "Follow the signal, because it is a legal traffic control device",
          "Stop and wait for the flagger to leave",
          "Sound the horn and proceed slowly",
        ],
        correctIndex: 0,
        explanation:
          "A person directing traffic outranks the device. The manual says traffic in work zones may be controlled by a person with a sign or flag and that you must follow their instructions.",
        context:
          "Traffic control devices in South Dakota include signals, signs, pavement markings and the directions of law enforcement, highway personnel and school crossing guards. Work zones also use drums, cones, tubes and barricades to steer traffic and keep it out of the working area.",
        trap:
          "A green light feels more authoritative than a person with a paddle. In a work zone the flagger is there precisely because the fixed devices no longer describe the situation.",
        excerptKey: "flagger-instructions",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Work Zone Signs",
        sourceUrl: p(34),
      },
      {
        id: "sd_s4_32",
        topic: "parking",
        question:
          "You are driving forward into a perpendicular parking space. What does the manual tell you to do once the car reaches the middle of the space?",
        choices: [
          "Stop and reverse to straighten up",
          "Turn the wheel further to bring the nose across",
          "Center the vehicle in the space, then move to the front of it and secure the vehicle",
          "Leave the wheels turned so you can pull straight out",
        ],
        correctIndex: 2,
        explanation:
          "Once the car has reached the middle of the space you center it between the lines, pull forward to the front of the space, stop and secure the vehicle.",
        context:
          "The full sequence starts before you move: identify the space, check traffic, signal your intention, then move forward slowly turning the wheel left or right as needed. Leaving is the reverse, straight back until the front bumper clears the neighboring car before you turn.",
        trap:
          "Stopping short and reversing to straighten up is a habit from tight lots and it puts you back into the traffic aisle. The manual expects a single forward movement.",
        excerptKey: "angle-parking-exit",
        sourceLabel:
          "South Dakota Driver License Manual - General Driving: Perpendicular and Angle Parking",
        sourceUrl: p(44),
      },
      {
        id: "sd_s4_33",
        topic: "speed",
        question:
          "You are on an unposted gravel township road in rural South Dakota. What is the statutory maximum speed?",
        choices: ["45 mph", "55 mph", "65 mph", "There is no limit on township roads"],
        correctIndex: 1,
        explanation:
          "Township roads are capped at 55 mph. That is ten below the general 65 mph maximum, and it applies whether or not anything is posted.",
        context:
          "Township boards may set their own speed zones on roads under their jurisdiction, notify the county, and post the zones at each end. County commissioners have a parallel power over county highways. Without a posted zone, 55 is the number.",
        trap:
          "Applying the general 65 mph maximum to a township road is the natural mistake, and township roads are most of the gravel grid that covers rural South Dakota.",
        excerptKey: "speed-55-township",
        sourceLabel: "South Dakota Codified Laws 32-25-9.2 - Township road speed limit",
        sourceUrl: sdcl("32-25-9.2"),
        commonlyMissed: true,
      },
      {
        id: "sd_s4_34",
        topic: "safety",
        question:
          "How much space does the manual say there should be between your chest and the steering wheel?",
        choices: ["4 inches", "6 inches", "8 inches", "10 inches"],
        correctIndex: 3,
        explanation:
          "Ten inches. Closer than that and a deploying airbag hits you before it has finished inflating, which is what turns a protective device into an injury.",
        context:
          "The manual's seating instructions are unusually precise for a driver's book: sit upright with your back against the seat and both feet on the floor, pivot your foot from brake to accelerator with the heel on the floor, keep the top of the wheel below chin level, and do not recline the seat.",
        trap:
          "This is one of the details South Dakota applicants report being surprised by, precisely because it feels like a comfort preference rather than a rule with a number attached.",
        excerptKey: "seat-ten-inches",
        sourceLabel: "South Dakota Driver License Manual - Before You Drive: Adjusting Your Seat",
        sourceUrl: p(25),
        commonlyMissed: true,
      },
      {
        id: "sd_s4_35",
        topic: "signals",
        question: "You are turning left and the green arrow changes to a steady yellow arrow. What does it mean?",
        choices: [
          "The protection is ending - prepare to stop and yield to oncoming traffic before turning",
          "You may complete the turn without yielding",
          "The turn is now prohibited entirely",
          "Oncoming traffic is about to get a red light",
        ],
        correctIndex: 0,
        explanation:
          "A steady yellow arrow says the protected phase is finishing. If you are still turning in that direction, be ready to stop, and give the right-of-way to oncoming traffic before you complete the turn.",
        context:
          "It completes the arrow sequence: a green arrow protects the movement, a steady yellow arrow ends the protection, a red arrow stops it entirely, and a flashing yellow arrow means the turn was never protected and you always yield.",
        trap:
          "Treating a yellow arrow as permission to hurry the turn ignores what it is telling you - that the oncoming traffic is about to be released.",
        excerptKey: "yellow-arrow",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The rules South Dakotans report getting wrong: numbers the manual never prints and leaves to the statute, technique details stated precisely in the book that nobody expects to be tested on, and the licensing stages that change every eighteen months.",
    questions: [
      {
        id: "sd_s5_01",
        topic: "speed",
        question:
          "You are on a two-lane highway posted at 65 mph, overtaking a pickup doing 55. How fast may you legally go while completing the pass?",
        choices: [
          "65 mph, the posted limit, with no allowance",
          "70 mph",
          "80 mph, the interstate maximum",
          "75 mph, because the limit is increased by 10 mph for the pass",
        ],
        correctIndex: 3,
        explanation:
          "South Dakota raises the limit by 10 mph while you are overtaking, but only when four conditions all hold: a two-lane highway with one lane each way, a posted limit of 65 mph or more, an actual overtaking maneuver, and a vehicle ahead that is moving slower than the posted limit.",
        context:
          "This is one of the few genuinely unusual rules in South Dakota traffic law and the manual never mentions it. Miss any of the four conditions and the allowance disappears - on a four-lane road, or behind a vehicle already doing the limit, or on a road posted at 55, the posted number is the number.",
        trap:
          "Reading it as a general 10 mph cushion is the mistake. It is a narrow allowance for one maneuver on one kind of road, not a tolerance you can carry around.",
        excerptKey: "speed-passing-bonus",
        sourceLabel:
          "South Dakota Codified Laws 32-25-28 - Exceeding posted speed limit permitted under certain conditions",
        sourceUrl: sdcl("32-25-28"),
        commonlyMissed: true,
      },
      {
        id: "sd_s5_02",
        topic: "sharing",
        question:
          "You are on a four-lane divided highway with a concrete barrier down the middle. A school bus on the other roadway stops with its red lights flashing. What must you do?",
        choices: [
          "Stop until the red lights go out",
          "Continue - the barrier separates the roadways, so no stop is required",
          "Slow to 15 mph and continue",
          "Stop only if you can see children",
        ],
        correctIndex: 1,
        explanation:
          "A physical barrier splits the highway into two separate roadways, and a bus on the other roadway is not your problem. You keep going, at the posted speed, watching as always.",
        context:
          "The manual states the exception as a barrier. State law reaches further: on a highway with two or more lanes of travel in each direction you need not stop for a bus travelling in the opposite direction even without a barrier, and a driver on a highway with separate roadways need not stop for a bus on the other roadway. Both readings agree on a barrier-divided highway.",
        trap:
          "The exception is narrow. A center turn lane does not divide a highway, and neither does a painted median - on an undivided road you stop from both directions.",
        excerptKey: "school-bus-separate-roadways",
        sourceLabel: "South Dakota Driver License Manual - General Driving: Rules for School Buses",
        sourceUrl: p(43),
        commonlyMissed: true,
      },
      {
        id: "sd_s5_03",
        topic: "licensing",
        question:
          "A 14-year-old gets a South Dakota Instruction Permit and does not take driver education. How long must the permit be held before upgrading?",
        choices: [
          "275 continuous days",
          "180 continuous days",
          "6 months",
          "Until their 16th birthday",
        ],
        correctIndex: 0,
        explanation:
          "Two hundred and seventy-five continuous days without driver education, or 180 with an approved Department of Education course passed at 80% or better on both the written and driving portions.",
        context:
          "The clock is one of three things that has to be satisfied before a Restricted Minor's Permit: the holding period, 50 hours of adult-supervised driving including 10 in bad weather and 10 after dark, and no traffic conviction in the previous six months. The permit itself is valid for five years.",
        trap:
          "One hundred and eighty days is the driver-education figure, and 90 days was the pre-July-2020 figure. Reaching for either without the course attached is the common error.",
        excerptKey: "permit-275-days",
        sourceLabel:
          "South Dakota Driver License Manual - The Driver's License: Instruction Permit (Under 18)",
        sourceUrl: p(8),
        commonlyMissed: true,
      },
      {
        id: "sd_s5_04",
        topic: "safety",
        question:
          "What minimum following distance does the manual specify behind a motorcycle?",
        choices: ["2 seconds", "3 seconds", "4 seconds, and more in the wet", "One car length"],
        correctIndex: 2,
        explanation:
          "Four seconds is the minimum behind a motorcycle, and the manual says more when the road is wet. It matches the general four-second rule and then asks you to stretch it.",
        context:
          "The reason is specific to two wheels. Riders change position inside the lane without warning to avoid potholes, gravel, wet or slippery surfaces, pavement seams, railroad crossings and grooved pavement - hazards a car simply drives over. If the machine goes down, you need the distance to avoid the rider.",
        trap:
          "Three seconds is the number most drivers carry from other states, and it is short by a second even before you allow for rain.",
        excerptKey: "motorcycle-following",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Motorcyclists",
        sourceUrl: p(62),
      },
      {
        id: "sd_s5_05",
        topic: "rules",
        question:
          "You have come to a full stop at a stop sign on a rural road. When may you enter the intersection?",
        choices: [
          "Immediately, since you have discharged the stop",
          "After counting three seconds",
          "As soon as the nearest vehicle has passed",
          "Not until you are certain the intersecting road is free of oncoming traffic that could affect safe passage",
        ],
        correctIndex: 3,
        explanation:
          "The statute puts a second duty after the stop: yield to any vehicle that has entered or is approaching the intersection from another highway, and do not proceed until you are certain the road is clear enough for safe passage.",
        context:
          "Where you stop is defined too - at a clearly marked stop line, or if there is none, before the crosswalk on the near side, or if there is neither, at the point nearest the intersecting roadway where you can actually see approaching traffic. The manual's version adds that you look for crossing vehicles and pedestrians in all directions.",
        trap:
          "Treating the stop as a formality to be completed is exactly the habit that produces right-angle crashes. The stop is the start of the obligation, not the end of it.",
        excerptKey: "stop-sign-then-yield",
        sourceLabel: "South Dakota Codified Laws 32-29-2.1 - Action required at stop sign",
        sourceUrl: sdcl("32-29-2.1"),
      },
      {
        id: "sd_s5_06",
        topic: "impairment",
        question:
          "The manual names a BAC at which a driver's crash risk climbs sharply even if they show no outward signs of drunkenness. What is it?",
        choices: ["0.02%", "0.05%", "0.08%", "0.15%"],
        correctIndex: 1,
        explanation:
          "The manual's figure is 0.05%. It makes the point that some heavy drinkers show no visible signs at all and still carry a far higher crash risk from 0.05% upward.",
        context:
          "That sits between the two legal thresholds and is easy to confuse with them: 0.02% is the under-21 limit and the level at which vision starts to suffer for everyone, and 0.08% is the adult legal limit. The manual is explicit that you can still be convicted of impaired driving below 0.08%.",
        trap:
          "Outward signs are not the test. The manual specifically says drunkenness is not determined by whether someone staggers or slurs.",
        excerptKey: "bac-005-crash-risk",
        sourceLabel: "South Dakota Driver License Manual - Be in Shape to Drive: Alcohol and the Law",
        sourceUrl: p(21),
      },
      {
        id: "sd_s5_07",
        topic: "emergencies",
        question:
          "Nobody is hurt in a two-car collision, but one car is clearly badly damaged. At what point does South Dakota law require you to give immediate notice to law enforcement?",
        choices: [
          "At apparent damage of $1,000 or more to one person's property, or $2,000 per accident",
          "At any amount of damage at all",
          "At $500 to any one vehicle",
          "Only if a vehicle cannot be driven away",
        ],
        correctIndex: 0,
        explanation:
          "The thresholds are $1,000 apparent damage to any one person's property, or $2,000 across the whole accident. Above either, notice to the nearest available law enforcement officer must be immediate and by the quickest means available.",
        context:
          "Injury or death triggers the duty regardless of damage. Separately from reporting, every driver involved must stop, give their name and address and vehicle details, and render reasonable assistance to anyone hurt. Failing to stop after an injury accident is a Class 6 felony.",
        trap:
          "Modern body panels make $1,000 of apparent damage a low bar. A scraped bumper and a broken light can clear it, which is why so many drivers under-report.",
        excerptKey: "accident-report-threshold",
        sourceLabel:
          "South Dakota Codified Laws 32-34-7 - Duty to give immediate notice of accident to law enforcement officer",
        sourceUrl: sdcl("32-34-7"),
      },
      {
        id: "sd_s5_08",
        topic: "parking",
        question: "How may you park on a one-way street in South Dakota?",
        choices: [
          "Only against the right-hand curb",
          "Facing either direction, as long as you are within 12 inches of a curb",
          "Against either curb, facing the direction of traffic, wheels within 12 inches of that curb",
          "Anywhere, since a one-way street has no wrong side",
        ],
        correctIndex: 2,
        explanation:
          "On a one-way roadway you may park at either curb, but you must be parallel to it, pointing the way traffic moves, and within twelve inches of whichever curb you chose.",
        context:
          "On a two-way roadway there is no choice: right-hand wheels within twelve inches of the right-hand curb or edge. Local authorities may permit angle parking by ordinance, though not on a federal-aid or state highway without the Transportation Commission first deciding the road is wide enough.",
        trap:
          "The left-hand curb is allowed and facing the wrong way is not. The direction requirement survives even though the curb requirement relaxes.",
        excerptKey: "parking-one-way-statute",
        sourceLabel: "South Dakota Codified Laws 32-30-2.2 - Position of parking on one-way road",
        sourceUrl: sdcl("32-30-2.2"),
      },
      {
        id: "sd_s5_09",
        topic: "signals",
        question:
          "You are in a city where the traffic lights are mounted horizontally rather than vertically. Which light is on the left?",
        choices: ["Green", "Yellow", "It varies by intersection", "Red"],
        correctIndex: 3,
        explanation:
          "On a horizontal signal the order runs red on the left, yellow in the middle, green on the right. It is the same top-to-bottom sequence laid on its side.",
        context:
          "The manual mentions horizontal signals because a driver who reads position rather than color gets it backwards. It also notes that some intersections use single green, yellow or red lights on their own.",
        trap:
          "A driver relying on which end is lit rather than what color it is will read a horizontal red as a green. Color is the signal; position is only a habit.",
        excerptKey: "signal-horizontal",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
      {
        id: "sd_s5_10",
        topic: "signs",
        question:
          "The manual gives a sight-distance figure for U-turns near a hill or curve on an undivided highway. What is it?",
        choices: ["300 feet", "500 feet", "1,000 feet", "One-third of a mile"],
        correctIndex: 1,
        explanation:
          "No U-turn on an undivided highway near the crest of a grade or on a curve where an approaching driver could not see you from 500 feet in any direction.",
        context:
          "The rest of the U-turn list is mid-block in a business district, mid-block on a through highway in a residential district, at an intersection where an officer is directing traffic unless instructed, anywhere signs prohibit it, and anywhere it cannot be done safely or without interfering with traffic.",
        trap:
          "Five hundred feet also happens to be the headlight-dimming distance, which makes it easy to file in the wrong place. Both are 500 feet in South Dakota.",
        excerptKey: "u-turn-500-feet",
        sourceLabel: "South Dakota Driver License Manual - General Driving: U-Turns",
        sourceUrl: p(39),
      },
      {
        id: "sd_s5_11",
        topic: "rightOfWay",
        question:
          "You are about to cross a designated bicycle lane where it intersects the road you are turning onto. What does the manual require?",
        choices: [
          "Yield the right-of-way to the bicycle lane",
          "Proceed, since bicycles must yield to vehicles",
          "Stop completely every time",
          "Sound the horn before crossing",
        ],
        correctIndex: 0,
        explanation:
          "Where a bicycle path or bike lane intersects a road, you yield to it. The manual treats it as a right-of-way rule rather than as courtesy.",
        context:
          "The same paragraph bans stopping, parking or driving on a designated bicycle path or lane, with narrow exceptions for entering or leaving an alley or driveway, official duties, a police officer's direction, or an emergency. Bicycles are vehicles on South Dakota roadways and carry the same rights as you do.",
        trap:
          "Sitting in a bike lane while you wait for a gap to turn is a violation in itself, and it forces the cyclist you should be yielding to out into traffic.",
        excerptKey: "bike-lane-yield",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Bicyclists",
        sourceUrl: p(61),
      },
      {
        id: "sd_s5_12",
        topic: "safety",
        question: "How far ahead does the manual say you should ideally be looking?",
        choices: [
          "To the vehicle directly in front of you",
          "About 4 seconds ahead",
          "20 to 30 seconds ahead",
          "As far as the headlights reach",
        ],
        correctIndex: 2,
        explanation:
          "Twenty to thirty seconds. At highway speed that is most of a mile, and it is far enough to see a problem developing rather than reacting to one that has already arrived.",
        context:
          "The visual search section asks you to build a pattern you use every time: ahead, to the sides and behind, with your eyes moving rather than staring. In town you will not see as far, so the manual asks you to adjust speed and road position until you can, and to avoid following a large vehicle so closely that it blocks the view.",
        trap:
          "Four seconds is the following distance, not the looking distance. They are different measurements answering different questions.",
        excerptKey: "look-20-to-30-seconds",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Visual Search",
        sourceUrl: p(48),
      },
      {
        id: "sd_s5_13",
        topic: "licensing",
        question:
          "A 15-year-old passed an approved South Dakota driver education course four months ago and is applying for an Instruction Permit. What does that certificate do?",
        choices: [
          "Nothing - the knowledge test is required of everyone",
          "It reduces the pass mark to 70%",
          "It allows the permit to be issued at 13",
          "It waives the knowledge test entirely",
        ],
        correctIndex: 3,
        explanation:
          "A driver's ed certificate from an approved course taken within the last year waives the knowledge test for the Instruction Permit. The vision test still has to be passed.",
        context:
          "The certificate does two other things. It cuts the Instruction Permit holding period from 275 days to 180, and if the course was completed within the last year the drive test is not required to upgrade to a Restricted Minor's Permit. The out-of-state equivalent of an approved course counts.",
        trap:
          "The waiver is time-limited. A certificate more than a year old does nothing for the knowledge test, and applicants who assume it is permanent turn up expecting to skip an exam they now have to sit.",
        excerptKey: "teen-knowledge-test-waiver",
        sourceLabel: "SD Teen Driver Graduated Licensing pamphlet - Instruction Permit",
        sourceUrl: TEEN,
        commonlyMissed: true,
      },
      {
        id: "sd_s5_14",
        topic: "speed",
        question:
          "On an ordinary two-lane road, a school bus ahead of you switches on its amber warning lights. What speed does state law allow while you pass it?",
        choices: [
          "The posted limit, until the red lights come on",
          "15 mph or less",
          "25 mph or less",
          "20 mph below the posted limit",
        ],
        correctIndex: 1,
        explanation:
          "Amber lights on a road with fewer than two lanes of travel in each direction mean 15 mph or less, and you pass with caution. The stop comes later, when the red lights start flashing.",
        context:
          "The bus driver switches the amber lights on between 300 and 500 feet before the stop, which is the warning you are meant to act on. On a highway with two or more lanes in each direction the 15 mph rule applies only if you are travelling the same direction as the bus.",
        trap:
          "Treating amber as merely advisory is the standard error. It carries a hard number, and holding the posted limit past a bus with amber lights on is a Class 2 misdemeanor.",
        excerptKey: "school-bus-amber-15-mph",
        sourceLabel: "South Dakota Codified Laws 32-32-6 - Amber or red signal--Motorist duty to slow or stop",
        sourceUrl: sdcl("32-32-6"),
        commonlyMissed: true,
      },
      {
        id: "sd_s5_15",
        topic: "rules",
        question:
          "There are two driveways between you and the corner where you intend to turn right. When should you signal?",
        choices: [
          "After you have passed the driveways, about 100 feet from the corner",
          "Immediately, so nobody is surprised",
          "Only once you begin to slow down",
          "As you enter the turn",
        ],
        correctIndex: 0,
        explanation:
          "The manual warns specifically against signaling too early. If driveways or side streets sit between you and your turn, wait until you have passed them, because a driver waiting to pull out will read your signal as meaning you are turning in there.",
        context:
          "The base requirement is 100 feet before the turn, in the manual and in the statute, given continuously over that last 100 feet. At higher speeds the manual suggests four to five seconds ahead instead. After the turn, check the signal has cancelled.",
        trap:
          "Signaling as early as possible feels like good manners and is the exact behavior that pulls another driver into your path.",
        excerptKey: "signal-too-early",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Signaling Movements",
        sourceUrl: p(56),
      },
      {
        id: "sd_s5_16",
        topic: "impairment",
        question:
          "You hold a license from a state with no implied consent law and are arrested for DWI in South Dakota. Which state's implied consent rules apply?",
        choices: [
          "Your licensing state's, since that is who issued the license",
          "Neither, until you are convicted",
          "South Dakota's, because that is where you were arrested",
          "Whichever is more favorable to you",
        ],
        correctIndex: 2,
        explanation:
          "Implied consent follows the arrest, not the license. Driving on a South Dakota public highway is treated as consent to a lawfully requested chemical test, whoever issued your card.",
        context:
          "The manual spells this out because it catches visitors. Refusal in South Dakota costs a year of driving privileges, and the secretary of public safety revokes nonresident operating privileges on the same terms as a resident's license.",
        trap:
          "Out-of-state plates are not a shield. The rule attaches to the road you are driving on.",
        excerptKey: "implied-consent-other-state",
        sourceLabel: "South Dakota Driver License Manual - Be in Shape to Drive: Alcohol and the Law",
        sourceUrl: p(20),
      },
      {
        id: "sd_s5_17",
        topic: "emergencies",
        question:
          "What is the minimum fine for failing to move over or slow down for a stopped vehicle with warning lights in South Dakota?",
        choices: ["$50", "$100", "$150", "$270"],
        correctIndex: 3,
        explanation:
          "The statute sets a minimum fine of two hundred and seventy dollars on top of the Class 2 misdemeanor. Causing an accident while violating the rule escalates it to a Class 1 misdemeanor.",
        context:
          "The rule splits by light color. Red visual signals mean a complete stop before reaching the vehicle. Amber, yellow or blue warning lights mean merging away a lane from 300 feet out on a multi-lane road, or on a two-lane road slowing to at least 20 mph below the posted limit, again from 300 feet out.",
        trap:
          "The minimum fine is a floor, not a typical outcome. It sits on the inside front cover of the manual, which is the page most people skip on the way to chapter one.",
        excerptKey: "move-over-fine-statute",
        sourceLabel:
          "South Dakota Codified Laws 32-31-6.1 - Occupying highway shoulder or stopped",
        sourceUrl: sdcl("32-31-6.1"),
      },
      {
        id: "sd_s5_18",
        topic: "parking",
        question:
          "Your car has broken down in a traffic lane and cannot be moved. What does state law require immediately?",
        choices: [
          "Wait inside the vehicle for help to arrive",
          "Activate all emergency lamps, and deploy flags or flares if the vehicle carries them",
          "Push the vehicle to the nearest intersection",
          "Leave the vehicle and walk for assistance",
        ],
        correctIndex: 1,
        explanation:
          "A genuinely disabled vehicle is excused from the parking rules, but only if the driver switches on all the emergency lamps at once and deploys any flags or flares the vehicle is required to carry. The driver then has to arrange removal as quickly as possible.",
        context:
          "The manual's version adds where to put the warning devices - 200 to 300 feet behind, giving following drivers time to change lanes - and what to do with yourself: get clear of the roadway, never stand in a traffic lane, and do not change a tire if changing it puts you in one.",
        trap:
          "Sitting in the car in a live lane with the flashers on is the instinct. It is also the position drivers are killed in, which is why the manual sends you off the road on foot.",
        excerptKey: "disabled-vehicle-statute",
        sourceLabel: "South Dakota Codified Laws 32-30-4 - Disabled vehicles excepted",
        sourceUrl: sdcl("32-30-4"),
      },
      {
        id: "sd_s5_19",
        topic: "safety",
        question:
          "You are following another car at night on a dark highway. When must you switch from high beams to low?",
        choices: [
          "When you are closer than 500 feet behind them",
          "When you are closer than 200 feet behind them",
          "Only if they flash you",
          "Only within city limits",
        ],
        correctIndex: 0,
        explanation:
          "Five hundred feet is the figure for following as well as for meeting. Inside that distance your high beams are bouncing off their mirrors straight into their eyes.",
        context:
          "The related rules are high beams whenever there is no oncoming vehicle, low beams in fog, snow and heavy rain because high beams reflect back at you, and never driving on parking lights alone. If an oncoming driver fails to dim, flash once and then look to the right edge of the road.",
        trap:
          "Most drivers dim for oncoming traffic and forget the driver they are behind. The distance is the same in both directions.",
        excerptKey: "low-beams-500-feet-behind",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Communicating",
        sourceUrl: p(55),
      },
      {
        id: "sd_s5_20",
        topic: "sharing",
        question:
          "Where is a semi's largest side blind spot, according to the manual?",
        choices: [
          "On the left, alongside the sleeper",
          "Directly beside the cab doors on both sides",
          "On the right, starting behind the cab and running the length of the truck",
          "Behind the trailer only",
        ],
        correctIndex: 2,
        explanation:
          "The right-side No-Zone is the big one. It starts behind the cab and extends the whole length of the trailer, which means a car can sit in it for a long time completely unseen.",
        context:
          "The manual's rule of thumb covers every case: if you cannot see the driver's face in their side mirror, they cannot see you. The other zones are up to 20 feet in front of the cab and up to 200 feet behind the trailer.",
        trap:
          "Passing on the right of a truck puts you in its largest blind spot for the longest time. Pass on the left and get through it.",
        excerptKey: "truck-side-no-zone",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: The No-Zone",
        sourceUrl: p(63),
      },
      {
        id: "sd_s5_21",
        topic: "rules",
        question:
          "A driver behind you signals audibly that they intend to pass. What does South Dakota law require of you?",
        choices: [
          "Maintain your speed and lane position",
          "Move left to let them use the shoulder",
          "Accelerate to shorten the pass",
          "Give way to the right and do not increase your speed until they are completely past",
        ],
        correctIndex: 3,
        explanation:
          "The statute puts two duties on the overtaken driver: give way to the right on a suitable audible signal, and do not increase speed until the overtaking vehicle has completely passed.",
        context:
          "The manual's plainer version is stay in your lane and hold a constant speed so the driver can complete the pass. Speeding up as someone starts to overtake is what strands them in the oncoming lane, and on a two-lane highway that is how head-on collisions happen.",
        trap:
          "The second half of the rule is the one people break without noticing. Matching the passing car's speed out of reflex is exactly what the statute forbids.",
        excerptKey: "overtaken-driver-statute",
        sourceLabel: "South Dakota Codified Laws 32-26-31 - Duty of driver of overtaken vehicle",
        sourceUrl: sdcl("32-26-31"),
      },
      {
        id: "sd_s5_22",
        topic: "licensing",
        question:
          "How many hours of adult-supervised driving must a South Dakota Instruction Permit holder complete, and with what conditions?",
        choices: [
          "40 hours, including 10 at night",
          "50 hours, including 10 in inclement weather and 10 after dark",
          "30 hours, with no conditions",
          "60 hours, including 20 at night",
        ],
        correctIndex: 1,
        explanation:
          "Fifty hours in total, of which at least 10 must be in inclement weather and at least 10 after dark. It is a separate requirement from the holding period.",
        context:
          "The supervising adult must be a parent or guardian, or another adult with a valid license and at least a year of driving experience, and must be seated beside the permit holder. Permit holders may not use any wireless communication device while driving at all.",
        trap:
          "The bad-weather hours are the part people forget, and in South Dakota they are not hard to get. Forty hours with a night requirement is the shape several other states use.",
        excerptKey: "permit-50-hours",
        sourceLabel:
          "South Dakota Driver License Manual - The Driver's License: Instruction Permit (Under 18)",
        sourceUrl: p(8),
        commonlyMissed: true,
      },
      {
        id: "sd_s5_23",
        topic: "signs",
        question: "What does a posted speed limit sign actually tell you?",
        choices: [
          "The maximum for ideal conditions, which you must reduce when conditions require",
          "A target speed traffic should average",
          "A limit that applies only in daylight",
          "A speed you may exceed by up to 5 mph",
        ],
        correctIndex: 0,
        explanation:
          "The number is the maximum for ideal driving conditions. The manual says you must reduce speed when the road is slippery, or in rain, snow, ice or fog, and doing so is not optional.",
        context:
          "State law says the same from the enforcement side: driving faster than is reasonable and prudent for the conditions is an offense in its own right, whatever the sign says. Some high-speed roads also carry minimum limits, and if the minimum is too fast for you the manual tells you to use another road.",
        trap:
          "There is no tolerance built into the number. The winter chapter goes further and tells you to drive well below the posted limit, because limits assume dry summer pavement.",
        excerptKey: "speed-limit-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Speed Limit Signs",
        sourceUrl: p(35),
      },
      {
        id: "sd_s5_24",
        topic: "speed",
        question:
          "A grain elevator blocks your view of the tracks as you approach a railroad crossing. What is the maximum lawful speed?",
        choices: ["25 mph", "20 mph", "15 mph within fifty feet of the crossing", "10 mph"],
        correctIndex: 2,
        explanation:
          "Fifteen miles per hour within fifty feet of the crossing when your view is obstructed. The statute defines obstructed precisely: at any point during the last 200 feet of your approach, you cannot see clearly along the track for 400 feet in each direction.",
        context:
          "A separate rule caps you at 15 mph within fifty feet of an obstructed intersection of highways, with its own definition. Neither depends on a posted sign, and buses, vehicles carrying passengers for hire and vehicles carrying explosives or flammable liquid must stop at every grade crossing regardless.",
        trap:
          "This rule reads like it needs a sign to activate it, and it does not. On a rural South Dakota crossing with a shelterbelt beside it, the statutory 15 mph applies whether anything is posted or not.",
        excerptKey: "speed-15-railroad",
        sourceLabel:
          "South Dakota Codified Laws 32-25-13 - Speed limit at obstructed railway crossings",
        sourceUrl: sdcl("32-25-13"),
      },
      {
        id: "sd_s5_25",
        topic: "rightOfWay",
        question:
          "You drove past a yield sign without stopping and collided with a car in the intersection. What does state law say about that collision?",
        choices: [
          "Fault is decided entirely by which vehicle was struck",
          "The yield sign is only advisory, so neither driver is at fault",
          "Fault depends on which driver entered the intersection first",
          "The collision itself is prima facie evidence that you failed to yield",
        ],
        correctIndex: 3,
        explanation:
          "The statute makes the crash itself evidence against you. Having driven past a yield sign without stopping, a collision with a vehicle in the intersection or a pedestrian in a crosswalk is prima facie proof that you failed to yield.",
        context:
          "A yield sign requires you to slow to a speed reasonable for the conditions and to stop if stopping is what yielding takes. Once you have yielded and moved off, other drivers approaching the intersection must yield to you.",
        trap:
          "Getting through a yield sign without stopping is fine right up until it is not, and at that point the burden has already shifted onto you.",
        excerptKey: "yield-collision-evidence",
        sourceLabel: "South Dakota Codified Laws 32-29-3 - Duty when approaching yield sign",
        sourceUrl: sdcl("32-29-3"),
      },
      {
        id: "sd_s5_26",
        topic: "impairment",
        question:
          "A 20-year-old is convicted of a second zero-tolerance offense. How long do they lose their license?",
        choices: ["30 days", "180 days", "90 days", "One year"],
        correctIndex: 1,
        explanation:
          "A second zero-tolerance offense costs 180 days. A first costs 30 days, and a third or subsequent costs a year.",
        context:
          "The offense is a Class 2 misdemeanor and it covers more than alcohol: driving after consuming marijuana or an unprescribed controlled substance counts for as long as physical evidence of it remains in the body. A court may allow limited driving for work, school or counseling on proof of financial responsibility.",
        trap:
          "The 30-day figure is the first-offense number and it is also the DWI first-offense minimum, which makes it the easy wrong answer here.",
        excerptKey: "zero-tolerance-second",
        sourceLabel: "South Dakota Driver License Manual - Be in Shape to Drive: PENALTIES",
        sourceUrl: p(20),
      },
      {
        id: "sd_s5_27",
        topic: "safety",
        question:
          "The manual gives one blunt instruction about cruise control in winter. What is it?",
        choices: [
          "Never use cruise control on slippery roads",
          "Use it to keep a steady speed on ice",
          "Use it only above 45 mph",
          "Use it only on four-wheel-drive vehicles",
        ],
        correctIndex: 0,
        explanation:
          "Never on slippery roads. Cruise control keeps feeding power when a wheel starts to spin, which is the opposite of what you need on ice.",
        context:
          "The winter chapter runs on the same theme: the first storm of the season is the worst because everyone has forgotten how, drive well below the posted limit, increase following distance, avoid sudden sharp turns, brake gently, use headlights but avoid high beams in a night storm, and stay off closed roads.",
        trap:
          "Cruise control feels like it is helping to hold a steady speed. On a South Dakota road with black ice, holding a steady speed is exactly what causes the skid.",
        excerptKey: "winter-no-cruise-control",
        sourceLabel:
          "South Dakota Driver License Manual - Special Driving Situations: Winter Driving Safety Tips",
        sourceUrl: p(67),
        commonlyMissed: true,
      },
      {
        id: "sd_s5_28",
        topic: "emergencies",
        question:
          "You are involved in a crash in which someone is injured and you drive away without stopping. What offense is that in South Dakota?",
        choices: [
          "A petty offense",
          "A Class 2 misdemeanor",
          "A Class 6 felony",
          "A Class 1 misdemeanor",
        ],
        correctIndex: 2,
        explanation:
          "Failing to stop after an accident that injures or kills someone is a Class 6 felony, and the Department of Revenue revokes the registration receipt of anyone convicted.",
        context:
          "The stopping duty is broad. You give your name and address, the owner's name and address, and the license number of the vehicle, and you render reasonable assistance including taking an injured person for treatment if that is needed or asked for. Where nobody is in a fit state to receive the information, you report to the nearest police authority at once.",
        trap:
          "Panic explains it and does not excuse it. The felony attaches to the leaving, not to how the crash happened.",
        excerptKey: "hit-and-run-felony",
        sourceLabel:
          "South Dakota Codified Laws 32-34-5 - Hit and run accident resulting in death or injury as felony",
        sourceUrl: sdcl("32-34-5"),
      },
      {
        id: "sd_s5_29",
        topic: "sharing",
        question:
          "You are overtaking a cyclist on a highway posted at 55 mph. What separation does the law require?",
        choices: ["Three feet", "Four feet", "Five feet", "Six feet"],
        correctIndex: 3,
        explanation:
          "Above 35 mph the minimum doubles to six feet. Below or at 35 mph it is three feet, measured from your mirror to the left side of the bicycle.",
        context:
          "You are allowed to help yourself to the room: the statute expressly permits partially crossing the centerline or the line between two same-direction lanes to make the pass, provided it can be done safely. The separation has to be held until you are safely past.",
        trap:
          "Three feet is the figure everyone remembers because it is the one most states use. On a 55 mph South Dakota highway it is half of what the law requires.",
        excerptKey: "bicycle-6-feet",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Bicyclists",
        sourceUrl: p(62),
        commonlyMissed: true,
      },
      {
        id: "sd_s5_30",
        topic: "rules",
        question:
          "There is a solid yellow centerline and a cyclist ahead of you on a narrow road. May you cross it to pass?",
        choices: [
          "No - a solid yellow line is absolute",
          "Yes, you may partially cross the centerline to pass a bicycle if it can be done safely",
          "Yes, but only if you are travelling below 35 mph",
          "Only if the cyclist waves you through",
        ],
        correctIndex: 1,
        explanation:
          "The bicycle passing statute overrides the centerline for exactly this case. You may partially cross the centerline, or the line between two lanes going the same way, if the pass can be performed safely.",
        context:
          "It exists to make the three-foot and six-foot separations achievable on narrow roads, where staying in lane would mean passing far too close. The separation still has to be held until you are safely past, and safely is the whole condition.",
        trap:
          "The permission covers a partial crossing to make room for a bicycle, not a full pass into the oncoming lane, and it does nothing for overtaking cars.",
        excerptKey: "bicycle-cross-centerline",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Bicyclists",
        sourceUrl: p(62),
      },
      {
        id: "sd_s5_31",
        topic: "licensing",
        question:
          "A minor has held a Restricted Minor's Permit for seven months. Who may ride with them when they drive unaccompanied?",
        choices: [
          "Immediate family or household members, plus one passenger under 18 who is neither",
          "Nobody at all",
          "Immediate family or household members only",
          "Any number of passengers under 18",
        ],
        correctIndex: 0,
        explanation:
          "For the first six months the only passengers allowed are immediate family or members of the household. After six months one additional passenger under 18 who is neither of those may ride along.",
        context:
          "The permit also restricts driving to 6 a.m. to 10 p.m. with parental permission, requires a parent or legal guardian in the seat beside the driver from 10 p.m. to 6 a.m., and bans any wireless communication device. Named exceptions let the holder drive alone after 10 p.m. by the most direct route to or from school, church, work or farm work.",
        trap:
          "The manual stops at the first six months and does not mention what happens afterwards. The one-passenger allowance appears only in the DPS Teen Driver pamphlet.",
        excerptKey: "restricted-permit-passenger-after-six",
        sourceLabel: "SD Teen Driver Graduated Licensing pamphlet - Passenger Limit",
        sourceUrl: TEEN,
        commonlyMissed: true,
      },
      {
        id: "sd_s5_32",
        topic: "parking",
        question:
          "State law sets a clear width that must remain on the main-traveled portion beside a parked vehicle. What is it?",
        choices: [
          "Ten feet",
          "Fifteen feet",
          "Twenty feet, with the vehicle visible from 200 feet in each direction",
          "Whatever leaves one full lane open",
        ],
        correctIndex: 2,
        explanation:
          "SDCL 32-30-2 requires a clear unobstructed width of not less than twenty feet on the main-traveled portion opposite the parked vehicle, and a clear view of the vehicle from 200 feet in each direction.",
        context:
          "The manual gives different figures for the same situation - at least 15 feet of road width and visibility for 500 feet - so treat the shape of the rule as the thing to learn: leave room to pass, be visible from both directions, and light up after dark. Where it is practical to get right off the traveled portion, that is what the law expects instead.",
        trap:
          "The manual and the statute genuinely disagree on the numbers here. If a question turns on a figure, the statute is the law and the manual's 15 and 500 are the book's own restatement.",
        excerptKey: "parking-20-feet-statute",
        sourceLabel:
          "South Dakota Codified Laws 32-30-2 - Standing or parked vehicles--Remaining space required",
        sourceUrl: sdcl("32-30-2"),
      },
      {
        id: "sd_s5_33",
        topic: "signals",
        question:
          "You are stopped at a red light in a lane that allows both straight ahead and right turns, and you intend to go straight. What must you do?",
        choices: [
          "Turn right, then make a U-turn to come back",
          "Move into another lane before the light changes",
          "Sound your horn if a driver behind you wants to turn",
          "Wait for the green - you may not proceed straight on a red light",
        ],
        correctIndex: 3,
        explanation:
          "A steady red permits a right turn after a complete stop unless a sign forbids it, and nothing more. Going straight on a red is not permitted in any circumstances.",
        context:
          "The manual's wording is that you must wait until the light turns green and there is no crossing traffic before you may proceed. The one carve-out is the right turn, and it comes with the duty to yield to pedestrians, bicyclists and everyone else moving on the signal.",
        trap:
          "Pressure from a driver behind who wants to turn right does not create permission. If you are in a shared lane going straight, you wait, and so do they.",
        excerptKey: "right-on-red-statute",
        sourceLabel:
          "South Dakota Codified Laws 32-28-4 - Meaning of steady red light or stop signal",
        sourceUrl: sdcl("32-28-4"),
      },
      {
        id: "sd_s5_34",
        topic: "safety",
        question:
          "A driver is tailgating you on a two-lane road with no right lane available. What does the manual tell you to do?",
        choices: [
          "Brake sharply to make them back off",
          "Wait until the road ahead is clear and passing is legal, then slowly reduce speed to encourage them past",
          "Speed up until they fall back",
          "Turn on your hazard flashers",
        ],
        correctIndex: 1,
        explanation:
          "You make it easy for them to go. Wait until the road ahead is clear and passing is legal, then slow gradually so they can complete the pass.",
        context:
          "If there is a right lane the answer is simply to move into it. The manual warns that the risk is worse again when the tailgater is a truck or bus, since neither can stop as quickly as a car, and asks you to give large vehicles extra room to maneuver.",
        trap:
          "Brake-checking a tailgater is named in the manual as the wrong response - all it does is increase the risk of being hit from behind.",
        excerptKey: "tailgater-never-brake",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Space Behind",
        sourceUrl: p(52),
      },
      {
        id: "sd_s5_35",
        topic: "signs",
        question:
          "A blue sign at a railroad crossing carries a phone number and a DOT number. What is it for?",
        choices: [
          "Reporting a problem with the crossing, the tracks or a train to the railroad's emergency dispatcher",
          "Reporting a broken-down vehicle to the highway patrol",
          "Identifying the rail company for insurance purposes",
          "Requesting the gates be raised manually",
        ],
        correctIndex: 0,
        explanation:
          "That is the Emergency Notification System sign. The phone number reaches the railroad's dispatcher and the DOT number identifies exactly which crossing you are at, so trains heading toward it can be stopped or slowed.",
        context:
          "The manual calls it crucial information for all drivers, because a vehicle stuck on the tracks or an obstruction across them is a situation ordinary emergency numbers cannot resolve quickly enough. Every crossing has one.",
        trap:
          "Calling 911 first costs the minutes that matter. Only the railroad can stop the train, and only the DOT number tells them where.",
        excerptKey: "railroad-ens",
        sourceLabel:
          "South Dakota Driver License Manual - Rules of the Road: Railroad Emergency Notification System",
        sourceUrl: p(34),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix the real South Dakota knowledge test uses: rules of the road, signs and safe driving practices, with no theme and no warm-up. Sit it start to finish and see where you land against the 80% the Department of Public Safety asks for.",
    questions: [
      {
        id: "sd_s6_01",
        topic: "signs",
        question:
          "A white regulatory sign shows a symbol inside a red circle with a red slash through it. What does it mean?",
        choices: [
          "That action is prohibited here",
          "That action requires extra caution",
          "That action is permitted only for local traffic",
          "That action is permitted at certain hours",
        ],
        correctIndex: 0,
        explanation:
          "The red circle and slash is the prohibition marker. Whatever the symbol shows - a left turn, a U-turn, parking - is banned at that place.",
        context:
          "It belongs to the regulatory family: white signs with black, red or green lettering that state laws you must obey about direction, lane use, turning, speed and parking. Warning signs, by contrast, are yellow diamonds and tell you about a hazard rather than a rule.",
        trap:
          "A slashed symbol is absolute, not advisory. There is no version of it that means proceed carefully.",
        excerptKey: "prohibition-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Regulatory Signs",
        sourceUrl: p(35),
      },
      {
        id: "sd_s6_02",
        topic: "signals",
        question: "Having stopped at a red light, who must you yield to before turning right?",
        choices: [
          "Pedestrians only",
          "Oncoming traffic only",
          "Pedestrians, bicyclists and other traffic",
          "Nobody, once you have stopped",
        ],
        correctIndex: 2,
        explanation:
          "The stop is only the first half. The manual requires you to yield to all traffic including pedestrians, bicyclists and cars, then proceed safely and stay in your lane.",
        context:
          "Right on red is the default in South Dakota unless a sign forbids it. A red arrow removes it completely. The pedestrian section adds that when turning right or left on red you should be prepared to yield to pedestrians before you move at all.",
        trap:
          "Bicyclists are easy to leave out of the list and easy to miss on the road, especially approaching from your right on a sidewalk or bike lane.",
        excerptKey: "right-on-red-yield",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
        commonlyMissed: true,
      },
      {
        id: "sd_s6_03",
        topic: "rules",
        question: "Which lane should you use on a multi-lane highway when you are not passing?",
        choices: [
          "Whichever lane has the least traffic",
          "The right lane",
          "The center lane, so you can move either way",
          "The left lane, to stay clear of merging traffic",
        ],
        correctIndex: 1,
        explanation:
          "Stay right unless you are overtaking. The manual asks you to avoid unnecessary lane changing and to keep a steady speed with the flow of traffic.",
        context:
          "The left-most lane on a multi-lane road is for passing slower vehicles, and you should not linger in it once the pass is done. If you are driving more slowly than surrounding traffic, the manual tells you to use the right-most travel lane and to pull over and let people by if you are holding them up.",
        trap:
          "Sitting in the left lane at the speed limit is not a service to anyone. It is the behavior the passing-lane rule exists to prevent.",
        excerptKey: "interstate-right-lane",
        sourceLabel:
          "South Dakota Driver License Manual - General Driving: Proper Driving Techniques on the Interstate",
        sourceUrl: p(42),
      },
      {
        id: "sd_s6_04",
        topic: "safety",
        question: "In which situation does the manual tell you NOT to use your horn?",
        choices: [
          "When another vehicle is in danger of hitting you",
          "When you have lost control and are moving toward someone",
          "When a driver ahead has not noticed you and may pull across",
          "When you want a slower driver to speed up or move over",
        ],
        correctIndex: 3,
        explanation:
          "The horn is for preventing a crash, not for editorial comment. The manual's do-not list is encouraging someone to drive faster or get out of the way, pointing out another driver's mistake, greeting a friend, near blind pedestrians, and around animal-drawn vehicles or herded animals.",
        context:
          "The permitted uses are a light tap when a pedestrian or cyclist looks like they are moving into your lane, when a driver starts turning into your lane during a pass, when someone is not paying attention, and approaching a blind crest, sharp curve or narrow alley. A sharp blast is reserved for genuine danger.",
        trap:
          "Using the horn on an inattentive driver feels justified and is on the prohibited list. Startling someone is not the same as warning them.",
        excerptKey: "horn-not-for",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Not using the horn",
        sourceUrl: p(55),
      },
      {
        id: "sd_s6_05",
        topic: "rightOfWay",
        question:
          "You are already circulating inside a roundabout when an ambulance approaches with lights and siren. What do you do?",
        choices: [
          "Continue to your exit, then pull over and let it pass",
          "Stop immediately where you are",
          "Reverse out of the roundabout",
          "Speed up and take the first available exit",
        ],
        correctIndex: 0,
        explanation:
          "Carry on to your exit and pull over there. Stopping inside the ring blocks every other vehicle and the emergency vehicle as well.",
        context:
          "If you have not entered the roundabout yet, the answer is the opposite: pull over before you enter and let the emergency vehicle through. The manual's general instruction is to avoid stopping in a roundabout at all.",
        trap:
          "Yielding by stopping where you are is the trained response everywhere else and it is exactly wrong inside a roundabout.",
        excerptKey: "roundabout-emergency-vehicle",
        sourceLabel:
          "South Dakota Driver License Manual - General Driving: Emergency vehicles in a roundabout",
        sourceUrl: p(40),
      },
      {
        id: "sd_s6_06",
        topic: "speed",
        question:
          "You drive into a marked work zone at 9 p.m. and there is nobody working. What does the manual expect?",
        choices: [
          "You may hold the normal speed limit",
          "You may hold the normal limit if no equipment is present",
          "Reduce your speed anyway, because narrow lanes and rough pavement are hazards on their own",
          "Reduce your speed only where a lower limit is posted",
        ],
        correctIndex: 2,
        explanation:
          "The instruction is to reduce speed in a work zone even when there are no workers present. Narrowed lanes, temporary surfaces and shifted alignments do not go home at night.",
        context:
          "The manual asks for extreme caution driving a work zone at night whether workers are there or not, along with a bigger following distance, readiness to stop, and lane position that leaves room for workers and equipment. The posted work zone signs stay in force until the End Road Work sign.",
        trap:
          "Doubled fines for speeding in a work zone do not depend on workers being present either.",
        excerptKey: "work-zone-no-workers",
        sourceLabel: "South Dakota Driver License Manual - Special Driving Situations: Work Zones",
        sourceUrl: p(66),
      },
      {
        id: "sd_s6_07",
        topic: "impairment",
        question:
          "You are sitting in the driver's seat of a parked car with the keys, over the legal limit, and have not driven anywhere. What is the position?",
        choices: [
          "No offense has been committed until the car moves",
          "You can be arrested, because physical control is enough",
          "It depends whether the engine is running",
          "It is an offense only if the car is on a public road",
        ],
        correctIndex: 1,
        explanation:
          "The manual is blunt: if you have physical control of a vehicle, and you do not have to be driving, you can be arrested when your BAC is over the limit. The statute is written the same way.",
        context:
          "The DWI statute covers driving or being in actual physical control while at 0.08% or more, or under the influence of alcohol, marijuana, a controlled substance, an unprescribed drug, or a prescribed drug taken to a degree that makes safe driving impossible.",
        trap:
          "Sleeping it off in the driver's seat is the classic scenario, and it is precisely what physical control is meant to catch.",
        excerptKey: "physical-control",
        sourceLabel:
          "South Dakota Driver License Manual - Be in Shape to Drive: Alcohol, Other Drugs, and Driving",
        sourceUrl: p(20),
      },
      {
        id: "sd_s6_08",
        topic: "parking",
        question:
          "You are parking facing uphill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Straight ahead",
          "Sharply to the right, into the curb",
          "It does not matter with the parking brake set",
          "Sharply to the left, away from the curb",
        ],
        correctIndex: 3,
        explanation:
          "Uphill with a curb is the one case where the wheels go left. If the car rolls back, the front tire catches on the curb instead of rolling into the traffic lane.",
        context:
          "Every other case is right: downhill with or without a curb, and uphill where there is no curb. Then set the emergency brake and put an automatic in park, or a manual in reverse if you are facing downhill and in the lowest gear facing uphill.",
        trap:
          "Turning the wheels toward the curb feels like the safe default and it is wrong uphill. The point is what happens if the car rolls, and uphill it rolls backwards.",
        excerptKey: "hill-parking-uphill-curb",
        sourceLabel: "South Dakota Driver License Manual - General Driving: Parking on a hill",
        sourceUrl: p(43),
      },
      {
        id: "sd_s6_09",
        topic: "signs",
        question:
          "What are the drums, cones, tubes and barricades in a work zone there to do?",
        choices: [
          "Keep traffic out of hazardous work areas and guide it safely through",
          "Mark the boundary of the contractor's property",
          "Show where the road surface has been resurfaced",
          "Indicate where machinery is parked overnight",
        ],
        correctIndex: 0,
        explanation:
          "Barriers keep traffic out of the dangerous parts of a work zone and, together with the signs and markings, steer you safely through the part you are meant to use.",
        context:
          "They can also close roads and areas where driving is unsafe. Work zones may run temporary traffic signals, and you may see a warning sign showing a signal symbol - where a white stop line is present, that is where you stop.",
        trap:
          "Weaving between cones to save time is not a shortcut through an inconvenience. It is a route into the part of the site the barriers exist to keep you out of.",
        excerptKey: "work-zone-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Work Zone Signs",
        sourceUrl: p(34),
      },
      {
        id: "sd_s6_10",
        topic: "sharing",
        question:
          "You are driving past a line of parked cars on a town street. What does the manual tell you to watch for?",
        choices: [
          "Doors opening only",
          "Nothing, as long as you stay in your lane",
          "Pedestrians walking out from between the vehicles",
          "Vehicles reversing out at speed",
        ],
        correctIndex: 2,
        explanation:
          "The specific warning is pedestrians stepping out between parked or stopped vehicles. Slow down, and do not pass until you are satisfied nobody is about to cross in front of it.",
        context:
          "It belongs with the manual's space-cushion advice: keep extra room between your car and parked vehicles because someone can step out, someone can open a door, or the car itself can pull out. In playground and residential areas the manual suggests driving slower than the posted limit.",
        trap:
          "A child stepping between two parked pickups is invisible until they are in your lane. Speed, not vigilance, is what buys you the time.",
        excerptKey: "pedestrians-between-parked",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Pedestrians",
        sourceUrl: p(61),
      },
      {
        id: "sd_s6_11",
        topic: "safety",
        question:
          "It has frosted overnight and you have scraped a patch clear on the windshield. What does the manual require?",
        choices: [
          "That is sufficient if you can see the road ahead",
          "Clear snow, ice and frost from all the windows, front, sides and back",
          "Clear the windshield and the driver's window only",
          "Run the defroster while you drive slowly",
        ],
        correctIndex: 1,
        explanation:
          "All the windows, and the manual names the front, the sides and the back specifically. A porthole in the frost leaves you blind to everything that is not directly ahead.",
        context:
          "The same section asks you to keep the windshield and the inside of the glass clean, keep the washer bottle filled with antifreeze wash in cold weather, avoid hanging things from the mirror, and keep the headlights, backup lights, brake lights and taillights clean - dirty lenses cut light output by half.",
        trap:
          "A scraped porthole and a running defroster is the standard South Dakota winter shortcut, and it removes the side and rear checks your lane changes depend on.",
        excerptKey: "clear-snow-ice",
        sourceLabel: "South Dakota Driver License Manual - Before You Drive: Windshield & Windows",
        sourceUrl: p(24),
      },
      {
        id: "sd_s6_12",
        topic: "rules",
        question:
          "You are waiting to pull out and an approaching vehicle has its right turn signal on. What does the manual tell you?",
        choices: [
          "Pull out once the signal is on, since they have committed to the turn",
          "Pull out if they have also begun to slow",
          "Flash your headlights to confirm their intention",
          "Do not turn into the lane just because their signal is on",
        ],
        correctIndex: 3,
        explanation:
          "A signal is a statement of intention, not a guarantee. The driver may plan to turn after passing you, or may simply have left the signal on from an earlier turn.",
        context:
          "The intersections chapter is built around not relying on other people: do not assume other road users will obey signals or signs, look left, right and left again, and after stopping take extra time to check for crossing traffic and bicyclists before you move.",
        trap:
          "Motorcycle signals make this worse, because many do not self-cancel at all. The manual gives that its own warning in the motorcyclists section.",
        excerptKey: "turn-signal-not-a-promise",
        sourceLabel: "South Dakota Driver License Manual - General Driving: Intersections",
        sourceUrl: p(39),
        commonlyMissed: true,
      },
      {
        id: "sd_s6_13",
        topic: "emergencies",
        question: "Your accelerator sticks open at highway speed. What does the manual tell you to do?",
        choices: [
          "Turn off the engine, shift to neutral, look for an escape path and pull off the road",
          "Brake hard and hold the pedal down",
          "Shift into reverse to slow the wheels",
          "Steer into the shoulder gravel to scrub off speed",
        ],
        correctIndex: 0,
        explanation:
          "Kill the engine, put the transmission in neutral, find somewhere to go, then steer smoothly and brake gently onto the shoulder. Have the pedal repaired before the car is driven again.",
        context:
          "It is one of a set of vehicle-malfunction drills the manual expects you to know: brake failure means the parking brake applied slowly, a blowout means grip and coast without braking, an engine cutout means steady brake pressure and a firm grip on heavy steering, and headlight failure means flashers and off the road.",
        trap:
          "Turning the ignition to lock while moving is a different thing entirely and locks the steering. Off is not the same as lock.",
        excerptKey: "stuck-accelerator",
        sourceLabel: "South Dakota Driver License Manual - Emergency Situations: Stuck Accelerator",
        sourceUrl: p(58),
      },
      {
        id: "sd_s6_14",
        topic: "licensing",
        question: "How many test attempts does one South Dakota application fee buy you?",
        choices: [
          "One",
          "Two within three months",
          "Three within a six-month period",
          "Unlimited attempts within a year",
        ],
        correctIndex: 2,
        explanation:
          "One fee covers three attempts inside six months. After three failures, or once six months have passed, the fee has to be paid again.",
        context:
          "You cannot retest before the next working day after a failure, and the Department recommends waiting longer if you need the study time. Someone caught cheating loses the next-working-day option and must wait a minimum of two weeks.",
        trap:
          "The three attempts are combined across the knowledge and drive tests, not three of each.",
        excerptKey: "three-attempts-fee",
        sourceLabel: "South Dakota Driver License Manual - The Driver's License: Fees",
        sourceUrl: p(7),
      },
      {
        id: "sd_s6_15",
        topic: "signals",
        question:
          "You are turning right on a steady green light. What does the manual specifically tell you to watch for?",
        choices: [
          "Traffic approaching from behind",
          "Pedestrians crossing in front of the vehicle",
          "The signal changing to yellow mid-turn",
          "Vehicles in the opposing left-turn lane",
        ],
        correctIndex: 1,
        explanation:
          "On a green light the manual says that when turning right or left you watch for pedestrians crossing in front of the vehicle. They have a walk signal at the same moment you have a green.",
        context:
          "A green light means you may go through the intersection but you still yield to emergency vehicles and anyone else the law gives priority to, and you allow crossing traffic to clear before you move off from a stop. Turning left on green means yielding to oncoming traffic, which has the right-of-way.",
        trap:
          "The green light is aimed at the traffic movement, not at the crosswalk. The people stepping off the curb have their own signal telling them to go.",
        excerptKey: "steady-green",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
      {
        id: "sd_s6_16",
        topic: "speed",
        question:
          "You are on a high-speed road that carries a posted minimum speed limit and you are not comfortable driving that fast. What does the manual say?",
        choices: [
          "Drive as slowly as you like in the right lane",
          "Use your hazard flashers and continue",
          "Minimum limits are advisory only",
          "Use another road",
        ],
        correctIndex: 3,
        explanation:
          "The manual tells you plainly that if the minimum posted speed is too fast for you, you should use another road. Travelling below it makes you a hazard to everybody else.",
        context:
          "Speed limit signs show either the maximum safe speed allowed or the minimum required, and the interstate system carries a statutory 40 mph minimum whether or not a sign says so. It is also an offense to drive so slowly as to impede the normal and reasonable movement of traffic.",
        trap:
          "Hazard flashers do not license a slow vehicle on a fast road. They are for a vehicle in trouble, not a driver who is uncomfortable.",
        excerptKey: "minimum-speed-signs",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Speed Limit Signs",
        sourceUrl: p(35),
        commonlyMissed: true,
      },
      {
        id: "sd_s6_17",
        topic: "rightOfWay",
        question:
          "Your light has turned green but a cyclist is still crossing in front of you. What must you do?",
        choices: [
          "Yield - you give way to anyone still in the intersection",
          "Proceed slowly around them",
          "Sound your horn to hurry them",
          "Proceed, since your signal gives you priority",
        ],
        correctIndex: 0,
        explanation:
          "The manual's right-of-way list ends with pedestrians, bicyclists and other drivers who are still in the intersection. A green light does not clear people who are already there.",
        context:
          "The pedestrian section repeats it from the other direction - yield to all pedestrians in the intersection even if the traffic light is green - and the traffic signals section says you must allow crossing traffic to clear before proceeding on a fresh green.",
        trap:
          "Using the horn on someone caught in the intersection is on the manual's list of things not to do with a horn, and it makes them likelier to freeze.",
        excerptKey: "row-list-entering",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Yielding Right-of-Way",
        sourceUrl: p(31),
      },
      {
        id: "sd_s6_18",
        topic: "safety",
        question:
          "Why does the manual tell you to keep extra space between your car and a line of parked cars?",
        choices: [
          "To avoid scratching your mirrors",
          "To leave room for cyclists to use the gutter",
          "Someone could step out, a door could open, or a parked car could pull out",
          "To stay out of the way of street sweepers",
        ],
        correctIndex: 2,
        explanation:
          "Three things can come out of a line of parked cars without warning: a person from between two vehicles, a door on the traffic side, or the car itself pulling away.",
        context:
          "The wider space-cushion rule asks you not to crowd the center line, to make room for merging traffic, to give bicyclists and pedestrians extra clearance, and to split the difference between two hazards - or to take them one at a time by adjusting speed so you meet them separately.",
        trap:
          "Hugging the parked side to stay clear of oncoming traffic swaps a hazard you can see for one you cannot.",
        excerptKey: "space-parked-cars",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Space to the Side",
        sourceUrl: p(52),
      },
      {
        id: "sd_s6_19",
        topic: "signs",
        question: "How does the manual describe a stop sign?",
        choices: [
          "Six sides, red with black letters",
          "Eight sides, red with white letters",
          "Eight sides, white with red letters",
          "A downward triangle, red and white",
        ],
        correctIndex: 1,
        explanation:
          "Eight sides, red, white lettering. The octagon is reserved for stop signs and nothing else, which is why the shape alone is enough in a whiteout.",
        context:
          "The downward-pointing red and white triangle is the yield sign, and it asks you to slow and give way rather than stop every time. At a stop sign you stop behind the stop line or crosswalk if there is one, or before the sign if not, then look in all directions and yield.",
        trap:
          "Yield signs and stop signs are both red and white, and in poor light the shape is the only thing that separates them at a distance.",
        excerptKey: "stop-sign",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Stop Sign",
        sourceUrl: p(35),
      },
      {
        id: "sd_s6_20",
        topic: "impairment",
        question:
          "You are angry after an argument and about to drive. What does the manual recommend?",
        choices: [
          "Drive slowly until you calm down",
          "Turn the radio up to distract yourself",
          "Take the interstate, where there is less to react to",
          "Give yourself time to cool off and stay off the road until you have",
        ],
        correctIndex: 3,
        explanation:
          "The manual treats strong emotion as an impairment. If you are angry or excited, take the time to cool off, take a short walk if you need to, and stay off the road until you have calmed down.",
        context:
          "It lists worry, excitement, fear, anger and depression as things that interfere with thinking, attention and processing information. Its answer to impatience and road rage is to allow extra time for the trip, because a driver with time in hand does not speed or take chances.",
        trap:
          "Driving to clear your head is the natural instinct and it puts an impaired driver on the road. The manual's own suggestion is a walk.",
        excerptKey: "emotions-cool-off",
        sourceLabel: "South Dakota Driver License Manual - Be in Shape to Drive: Emotions",
        sourceUrl: p(22),
      },
      {
        id: "sd_s6_21",
        topic: "rules",
        question:
          "You have overtaken a truck on a two-lane road. When is it safe to move back in front of it?",
        choices: [
          "When you can see both of its headlights in your rearview mirror",
          "As soon as your rear bumper clears its front bumper",
          "When the driver flashes their lights at you",
          "After counting two seconds from starting the pass",
        ],
        correctIndex: 0,
        explanation:
          "Both headlights in the rearview mirror is the manual's test. It puts a full vehicle length between you and the truck, which is what a vehicle that needs several hundred feet to stop requires.",
        context:
          "The passing sequence is check for oncoming traffic, check mirrors and over your shoulder, signal, steer smoothly into the passing lane, hold or adjust speed, continue until the whole front of the passed vehicle is visible in your mirror, signal, and steer back. Pass one vehicle at a time and do not linger in the passing lane.",
        trap:
          "Cutting back in the moment you are past puts you in the truck's front No-Zone, where its driver cannot see you and cannot stop for you.",
        excerptKey: "return-both-headlights",
        sourceLabel: "South Dakota Driver License Manual - Safe Driving Tips: Space to Pass",
        sourceUrl: p(53),
      },
      {
        id: "sd_s6_22",
        topic: "sharing",
        question:
          "You have just merged onto a highway in front of a semi. What does the manual tell you not to do?",
        choices: [
          "Signal your lane change",
          "Accelerate to match the traffic flow",
          "Slow down after merging in front of it",
          "Use the acceleration lane to build speed",
        ],
        correctIndex: 2,
        explanation:
          "Merging in front of a truck and then slowing down removes the stopping distance the truck was relying on. Trucks and buses cannot shed speed the way a car can.",
        context:
          "The manual asks merging traffic to keep moving and enter at the speed of the existing flow. It also asks you to help trucks joining a freeway by holding a steady speed, so the truck does not have to stop on the acceleration lane and start again from nothing.",
        trap:
          "Merging then easing off to settle into the lane feels tidy and is the exact behavior the manual names as dangerous in front of a large vehicle.",
        excerptKey: "truck-merging",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Merging",
        sourceUrl: p(63),
      },
      {
        id: "sd_s6_23",
        topic: "parking",
        question:
          "You have parked a car with a manual transmission on a level street. What does the manual tell you to do?",
        choices: [
          "Leave it in neutral so it can be pushed if needed",
          "Set the parking brake and leave it in the lowest gear",
          "Set the parking brake only",
          "Leave it in gear with the brake off",
        ],
        correctIndex: 1,
        explanation:
          "Always set the parking brake, and leave a manual in the lowest gear or an automatic in park. Both are needed - either on its own can fail.",
        context:
          "The manual notes one exception: in hard cold the parking brake can freeze in the on position, so you may choose to leave it off. Even then the car goes into gear or into park. State law separately requires the brake set and, on a grade, the front wheels turned to the curb.",
        trap:
          "Leaving a manual in neutral with only the handbrake holding it is how cars roll away, and it is the reason the manual asks for both.",
        excerptKey: "parking-brake-always",
        sourceLabel: "South Dakota Driver License Manual - General Driving: No-Parking Zones",
        sourceUrl: p(43),
      },
      {
        id: "sd_s6_24",
        topic: "safety",
        question:
          "You are about to slow down somewhere a following driver would not expect it, such as a private driveway. What does the manual suggest?",
        choices: [
          "Switch on the hazard flashers",
          "Signal left and then right",
          "Sound the horn",
          "Tap the brake pedal three or four times before you slow",
        ],
        correctIndex: 3,
        explanation:
          "Three or four quick taps on the brake pedal flashes the brake lights and tells the driver behind that something unusual is coming, before you actually slow.",
        context:
          "The manual lists the situations that need it: turning off a road with no separate turn or exit lane, parking or turning just before an intersection where traffic expects you to continue, and avoiding something in the road or stopped traffic that the driver behind cannot yet see.",
        trap:
          "Hazard flashers cancel your turn signals on most vehicles, so using them here hides the very information the driver behind needs.",
        excerptKey: "tap-brakes",
        sourceLabel:
          "South Dakota Driver License Manual - Safe Driving Tips: Signal when reducing speeds",
        sourceUrl: p(56),
      },
      {
        id: "sd_s6_25",
        topic: "signs",
        question:
          "A sign at a railroad crossing states the number of tracks. What is it warning you about?",
        choices: [
          "There is more than one track, and there may be more than one train crossing",
          "Only one train uses the crossing per day",
          "The crossing is out of service",
          "Trains have priority over highway traffic there",
        ],
        correctIndex: 0,
        explanation:
          "The count tells you a second train can be coming, possibly hidden behind the first. The manual adds that not every multi-track crossing carries the sign, so you check for extra tracks yourself.",
        context:
          "The rest of the crossing furniture is the round yellow advance warning sign with the X and RR letters, the white crossbuck at the crossing, flashing side-by-side lights, gates and sometimes a bell or horn. You wait until the bell or horn stops before crossing, and you never drive around a gate.",
        trap:
          "Watching the first train clear and moving off is exactly the mistake the sign exists to prevent.",
        excerptKey: "railroad-multiple-tracks",
        sourceLabel:
          "South Dakota Driver License Manual - Rules of the Road: Railroad Crossing Warning Signs",
        sourceUrl: p(34),
      },
      {
        id: "sd_s6_26",
        topic: "signals",
        question:
          "The light ahead turns steady yellow while you are still approaching the intersection. What does the manual require?",
        choices: [
          "Continue through at the same speed",
          "Accelerate to clear it before it turns red",
          "Stop if it is safe to do so",
          "Stop regardless of what is behind you",
        ],
        correctIndex: 2,
        explanation:
          "Yellow means the light is about to turn red and you stop if it is safe to do so. The safety qualifier matters, because slamming on the brakes with a vehicle close behind causes its own crash.",
        context:
          "The exception is being already inside the intersection when the yellow appears, in which case the manual tells you to continue through rather than stop. A flashing yellow means something different again: slow down and proceed with caution.",
        trap:
          "Speeding up to beat the red is the response the signal is designed to prevent, and a stop sign or signal violation carries three points in South Dakota.",
        excerptKey: "steady-yellow",
        sourceLabel: "South Dakota Driver License Manual - Rules of the Road: Traffic Signals",
        sourceUrl: p(32),
      },
      {
        id: "sd_s6_27",
        topic: "rules",
        question:
          "You are turning left at an intersection where two lanes may turn left. What does the manual require?",
        choices: [
          "Choose a lane once you are through the turn",
          "Identify and enter your turning lane first, then stay in it until the turn is completed",
          "Turn from the outside lane, then move across",
          "Straddle both lanes so you have room",
        ],
        correctIndex: 1,
        explanation:
          "Pick the lane before the turn, then hold it all the way through. Changing lanes inside the turn puts you into the path of the vehicle turning beside you.",
        context:
          "The general turning rules are the same idea: enter and hold the position closest to the direction you want to go, turn right from the right-most portion of the lane without swinging wide first, and turn left from the left-most portion. Look through the turn to the farthest point on your intended path.",
        trap:
          "Drifting across during the turn is one of the errors that ends a drive test, and changing lanes in an intersection is a common cause of side-swipes.",
        excerptKey: "multiple-lane-turn",
        sourceLabel: "South Dakota Driver License Manual - General Driving: Turning and Turnabouts",
        sourceUrl: p(38),
      },
      {
        id: "sd_s6_28",
        topic: "impairment",
        question:
          "You have taken a prescribed medication and are also having a drink. What does the manual say?",
        choices: [
          "One drink is safe with most prescriptions",
          "It depends entirely on the dose of the medication",
          "The two cancel each other out at low levels",
          "Never mix them - drugs can multiply alcohol's effects or add effects of their own",
        ],
        correctIndex: 3,
        explanation:
          "The instruction is never to drink alcohol while taking other drugs. The combination can multiply what the alcohol does or add a separate impairment on top.",
        context:
          "Prescription antidepressants, painkillers, sleep aids and sedatives affect reflexes, judgment, vision and alertness in ways like alcohol. So do many over-the-counter cold and allergy remedies. The manual asks you to read the label before you take anything and to ask a doctor or pharmacist about side effects.",
        trap:
          "Being under the legal BAC limit is no defense if a prescription drug has multiplied the effect. The DWI statute reaches prescribed drugs taken to a degree that makes safe driving impossible.",
        excerptKey: "combining-alcohol-drugs",
        sourceLabel:
          "South Dakota Driver License Manual - Be in Shape to Drive: Combining Alcohol and Other Impairing Drugs",
        sourceUrl: p(22),
      },
      {
        id: "sd_s6_29",
        topic: "sharing",
        question:
          "A motorcycle ahead of you has its left turn signal flashing. What does the manual tell you?",
        choices: [
          "Do not assume it is turning - motorcycle signals may not self-cancel",
          "It has committed to the turn and you may proceed",
          "It is warning you to pass on the right",
          "It is signaling a hazard in the road",
        ],
        correctIndex: 0,
        explanation:
          "Many motorcycle turn signals do not cancel themselves after a turn, so a flashing indicator may simply have been left on. Wait until the rider is visibly turning before you commit.",
        context:
          "The other motorcycle rules are a full lane width with no lane sharing, a minimum four-second following distance and more in the wet, an extra look to the front and sides before you turn left, and an awareness that riders change position inside the lane to avoid surfaces that would put them down.",
        trap:
          "Pulling out on the strength of a motorcycle's signal is the classic left-turn-across-a-motorcycle collision, and it is usually the car driver's fault.",
        excerptKey: "motorcycle-signal",
        sourceLabel: "South Dakota Driver License Manual - Sharing the Road: Motorcyclists",
        sourceUrl: p(62),
      },
      {
        id: "sd_s6_30",
        topic: "emergencies",
        question:
          "The manual names three ways to avoid a crash or reduce its impact. What are they?",
        choices: [
          "Braking, sounding the horn and flashing your lights",
          "Braking, signaling and slowing",
          "Braking, steering and accelerating",
          "Steering, signaling and stopping",
        ],
        correctIndex: 2,
        explanation:
          "Braking, steering and accelerating. Accelerating belongs on the list because sometimes the way out of a crash is forward, for example when someone is about to hit you from behind or from the side.",
        context:
          "Each option gets its own instructions. With ABS you press hard and hold the pressure while you steer. Swerving means a firm two-handed grip, steering where you want to go, then straightening before you slow. Accelerating is the one drivers forget they have.",
        trap:
          "Braking is the reflex and it is not always the right answer. A car about to be rear-ended is safer moving forward than stopped.",
        excerptKey: "three-crash-options",
        sourceLabel:
          "South Dakota Driver License Manual - Emergency Situations: Emergencies and Avoiding Crashes",
        sourceUrl: p(57),
      },
    ],
  },
];
