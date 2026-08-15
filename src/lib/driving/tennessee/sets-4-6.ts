import type { DrivingTestSet } from "../types";

// Continues the Tennessee bank. Same sourcing discipline as sets 1-3: the
// Tennessee Comprehensive Driver License Manual first, and tn.gov pages where
// the manual is silent, incomplete or out of date.
//
// Sets 5 and 6 lean harder on the provisions that actually catch Tennessee
// drivers out. Published practice-test data segmented by state puts railroad
// crossings at the top of Tennessee's miss list, followed by laws and
// penalties, construction zones, vehicle equipment and pavement markings, and
// those five areas are weighted accordingly here.
//
// Three cautions carried over from sets 1-3 and applied throughout:
//
//  - No question asserts a question count or a passing score for the in-office
//    Class D knowledge test, because Tennessee publishes neither. The manual
//    gives only a topic weighting; the 30-question, 80 percent figures on
//    tn.gov describe the at-home online test for applicants aged 15 to 17.
//  - Nothing tests the manual's school-zone handheld phone box, which
//    describes a statute repealed by Public Chapter 412 of 2019.
//  - The Move Over questions test the duty, not the fine. The manual states no
//    fine, TDOT's page gives a $500 maximum, and the 2023 amending act sets a
//    $250 minimum against a $2,500 top - the sources do not agree, so the
//    figure is left out rather than guessed at.
const HB = "https://www.tn.gov/content/dam/tn/safety/documents/DL_Manual.pdf";
const GDL = "https://www.tn.gov/safety/driver-services/helpful-information/dlinfo.html";
const INS =
  "https://www.tn.gov/revenue/title-and-registration/drive-insured-tennessee/why-you-should-have-insurance.html";

export const tennesseeSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Tennessee Specifics",
    difficulty: "medium",
    description:
      "The rules that are Tennessee's own: the funeral procession law, the state's unusual position on passing multiple vehicles, the emblem laws, and the penalty numbers that come up again and again.",
    questions: [
      {
        id: "tn_s4_01",
        topic: "rules",
        question:
          "You are behind a properly identified funeral procession on a two-lane road. What does Tennessee law say?",
        choices: [
          "You may pass once the leading vehicle has cleared",
          "You may pass if the procession is travelling under the speed limit",
          "You may enter a gap in the procession to turn off",
          "You may not pass the procession, and may not drive between its vehicles",
        ],
        correctIndex: 3,
        explanation:
          "On a two-lane road you may not pass a funeral procession, and nowhere may you drive between its vehicles unless a traffic officer directs you to.",
        context:
          "Tennessee also notes a widely observed custom that is not a legal duty: oncoming traffic often pulls to the side of the road as a mark of respect when meeting a procession. The two things the law actually requires are the no-passing rule on two-lane roads and the ban on cutting into the line.",
        trap:
          "A gap in the procession is not an invitation. Slotting into one to make your turn is the specific act the statute names.",
        excerptKey: "funeral-no-pass",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Funeral Procession",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_02",
        topic: "impairment",
        question:
          "A driver is convicted of DUI while carrying a child under 18 in the vehicle. What is added?",
        choices: [
          "A mandatory minimum of 30 days in jail and a minimum $1,000 fine",
          "A doubling of the ordinary fine",
          "An extra year of licence revocation",
          "A mandatory parenting course",
        ],
        correctIndex: 0,
        explanation:
          "The Drunk Driving Child Protection Act adds a mandatory minimum 30 days and a mandatory minimum $1,000 fine, both on top of everything else the DUI carries.",
        context:
          "Tennessee escalates from there. If the child suffers serious bodily injury the offence becomes a Class D felony; if the child dies it becomes a Class C felony of especially aggravated child endangerment. The points schedule also assigns eight points to child endangerment, matching the heaviest moving violations on the list.",
        trap:
          "These penalties are additional, not alternative. They stack onto the standard jail time, fine and revocation for the DUI itself.",
        excerptKey: "dui-child-endangerment",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Child Endangerment",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_03",
        topic: "signs",
        question:
          "A rectangular sign on a multi-lane road tells you to keep right. When may you leave the extreme right lane?",
        choices: [
          "Whenever traffic in the right lane is slower than you want to travel",
          "Only between dusk and dawn",
          "To pass a slower vehicle or to make a left turn",
          "Only when the right lane is closed ahead",
        ],
        correctIndex: 2,
        explanation:
          "The sign means the extreme right lane unless you are passing a slower vehicle or setting up a left turn. Those are the two exceptions.",
        context:
          "Tennessee applies the same logic across its lane rules. On a four-lane or wider road you drive in the right lanes except to pass or turn left. On an interstate the left lane is for passing, and a slower driver must move right when a faster vehicle comes up behind. The manual also warns against straddling lanes or sitting in the centre lane while moving slower than surrounding traffic.",
        trap:
          "Matching the speed limit does not entitle you to hold a left or centre lane. The rule is about lane position, not about whether you are speeding.",
        excerptKey: "sign-keep-right-lane",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_04",
        topic: "emergencies",
        question:
          "You need to reach the Tennessee Highway Patrol from a mobile phone on a highway. What is the free number the manual gives?",
        choices: ["*55", "#77", "*511", "*THP (*847)"],
        correctIndex: 3,
        explanation:
          "Dialling *THP - that is *847 - connects you free of charge to the nearest Tennessee Highway Patrol dispatch centre.",
        context:
          "The manual gives you it for highway emergencies and for reporting a driver breaking the rules of the road. It also asks you to be able to say where you are, which is why urban interstates carry reference markers every 1,000 feet showing route, direction and mile in tenths. In Memphis, Nashville, Chattanooga and Knoxville, TDOT's yellow HELP trucks may reach you first.",
        trap:
          "The reference markers are the reason a number is useful. Calling from an interstate without being able to give a location wastes most of the advantage.",
        excerptKey: "interstate-thp-star",
        sourceLabel: "Tennessee Driver License Manual - Section B-5, A Free Cell Phone Call for Help",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_05",
        topic: "rightOfWay",
        question:
          "You are passing a fire station and an engine is reversing into the bay across your path. What must you do?",
        choices: [
          "Yield to it",
          "Continue - it is not responding to a call",
          "Stop and wait for a firefighter to wave you on",
          "Sound your horn to signal you are approaching",
        ],
        correctIndex: 0,
        explanation:
          "Yield to any emergency vehicle about to back into, or already backing into, a fire station driveway. No lights or siren are needed for the duty to apply.",
        context:
          "Tennessee attaches several separate duties to emergency vehicles. Yield to one using a siren, air horn or red or blue flashing light. Do not follow a fire truck responding to a call, and do not bring your vehicle within a block of where it has stopped. Do not drive over an unprotected fire hose without the fire officer in command saying you may.",
        trap:
          "This one has nothing to do with sirens. A returning engine reversing into its own bay is covered just as much as one on a call.",
        excerptKey: "row-fire-station",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Yield to Oncoming Traffic",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_06",
        topic: "speed",
        question:
          "You enter a Tennessee work zone and no reduced speed limit is posted anywhere. What limit applies?",
        choices: [
          "A default work zone limit of 45 mph",
          "The normal posted speed limit for that road",
          "A default work zone limit of 35 mph",
          "Whatever speed the flagger indicates",
        ],
        correctIndex: 1,
        explanation:
          "Where no reduced limit is posted, the normal posted limit governs. Tennessee does not create a lower work zone limit automatically.",
        context:
          "The heavy penalties attach to the limit that is actually posted. Exceeding a posted work zone limit carries a fine of at least $250 and up to $500, plus a construction-zone points schedule that runs harsher than the ordinary one all the way up. Merging early is part of the rule set too: the manual says you can be ticketed for being a last-chance merger.",
        trap:
          "No sign does not mean no enforcement. It means the ordinary limit applies and the work zone penalties attach to breaking it.",
        excerptKey: "work-zone-no-posting",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Sharing the Road with Highway Work Zones",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s4_07",
        topic: "parking",
        question:
          "You have finished a parallel park on a Tennessee road test. How far from the curb may the vehicle sit?",
        choices: [
          "No more than 18 inches",
          "No more than 12 inches",
          "No more than 24 inches",
          "No more than one foot on the driver's side",
        ],
        correctIndex: 0,
        explanation:
          "Eighteen inches is the limit. The manual gives the same figure for ordinary curb parking after any stop.",
        context:
          "The manoeuvre itself has a set shape in the Tennessee manual: pull up level with the car in front of the space, no closer than two feet, back at about a 45-degree angle, straighten as the front passenger door passes the other car's rear bumper, then swing the wheel left and finish forward against the curb. Check traffic before you open the door.",
        trap:
          "Backing is the manoeuvre the manual says most often causes new drivers to fail the skills test, and parallel parking is where it shows up.",
        excerptKey: "park-parallel-18-inches",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Parallel Parking",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_08",
        topic: "sharing",
        question:
          "What lighting does Tennessee law require on a bicycle ridden at night?",
        choices: [
          "Reflectors only, front and rear",
          "A white front lamp visible for 500 feet, plus a red rear reflector or lamp visible for 500 feet",
          "A white front lamp visible for 200 feet and a red rear lamp",
          "Any light that makes the rider visible to following traffic",
        ],
        correctIndex: 1,
        explanation:
          "A white front lamp visible at 500 feet, and at the back either a red reflector or a red lamp visible at 500 feet in the beam of a car's high beams.",
        context:
          "Tennessee also encourages reflective material on the frame for side visibility, and bright clothing with reflective material on helmet and clothing. Drivers get a matching warning: watch the edge of the road at night for riders, expect that they will be hard to see, and do not use high beams on an oncoming bicycle.",
        trap:
          "A rear reflector is enough at the back; a reflector alone is not enough at the front. The front must actually emit light.",
        excerptKey: "bike-lights-500",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Safety Tips for Bicyclists",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s4_09",
        topic: "safety",
        question:
          "A deer steps into your lane and a collision looks unavoidable. What does Tennessee's manual advise?",
        choices: [
          "Swerve into the oncoming lane if it is clear",
          "Do not swerve - keep control and stay on the roadway",
          "Brake hard enough to lock the wheels",
          "Accelerate to shorten the time in the animal's path",
        ],
        correctIndex: 1,
        explanation:
          "Do not swerve. Your risk of injury is usually higher from what the swerve hits than from the animal itself, so keep the vehicle under control and on the road.",
        context:
          "Autumn is the peak season for deer collisions in Tennessee because it overlaps both mating and hunting season. The manual's earlier advice, when you still have room, is to slow, tap the brakes to warn following traffic, and sound the horn - but not to flash the headlights, because deer fixate on light and freeze. If you see one, expect others. A collision with a large animal should be reported to police.",
        trap:
          "Flashing the high beams feels like the obvious warning and does the opposite. The manual says it can pin the animal in the road.",
        excerptKey: "deer-dont-swerve",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-2, Collisions with Animals",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_10",
        topic: "licensing",
        question:
          "What minimum liability insurance limits does Tennessee require a driver to carry?",
        choices: [
          "$15,000 per injury, $30,000 per accident, $10,000 property damage",
          "$50,000 per injury, $100,000 per accident, $25,000 property damage",
          "$20,000 per injury, $40,000 per accident, $15,000 property damage",
          "$25,000 per injury, $50,000 total per accident, $25,000 property damage",
        ],
        correctIndex: 3,
        explanation:
          "Twenty-five, fifty and twenty-five: $25,000 for each injury or death, $50,000 for total injuries or deaths per accident, and $25,000 for property damage.",
        context:
          "Note where this figure lives. The Comprehensive Driver License Manual explains what financial responsibility is and when you must show it, but never states the amounts - they are on the Department of Revenue's Financial Responsibility Law page. You must produce evidence when charged with any violation or involved in any crash, regardless of fault, and failing to do so suspends your driving privileges and blocks your registration renewal.",
        trap:
          "Collision cover is not required by Tennessee law and liability cover effectively is. They protect different people: liability covers the damage you cause to others.",
        excerptKey: "insurance-minimums",
        sourceLabel: "Tennessee Department of Revenue - Financial Responsibility Law",
        sourceUrl: INS,
      },
      {
        id: "tn_s4_11",
        topic: "signals",
        question:
          "A pedestrian is halfway across the street when the DON'T WALK signal starts flashing. What should they do?",
        choices: [
          "Keep walking - there is time to finish the crossing",
          "Stop and return to the curb they started from",
          "Stop where they are and wait on the centre line",
          "Run, because the light is about to change",
        ],
        correctIndex: 0,
        explanation:
          "Keep going. The signal timing allows anyone already in the road to complete the crossing; the flashing hand tells new pedestrians not to start.",
        context:
          "Tennessee's manual covers this from both sides. As a driver, watch the pedestrian signals so you can anticipate when someone will step off the curb. As a pedestrian, a WALK signal or a green light means it is your turn, not that it is safe - the instruction is to look first and then cross. Pedestrians may not cross against a red or yellow light unless facing a WALK signal.",
        trap:
          "Turning back mid-crossing puts a pedestrian in the road for longer, not less. The signal is designed around finishing.",
        excerptKey: "ped-dont-walk-flashing",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Sharing the Road with Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_12",
        topic: "rules",
        question:
          "Is it lawful in Tennessee to pass more than one vehicle in a single manoeuvre on a two-lane road?",
        choices: [
          "No - Tennessee limits you to one vehicle per pass",
          "Only where the posted limit is 55 mph or above",
          "Only with a passenger acting as a spotter",
          "Yes, though the manual strongly advises against it",
        ],
        correctIndex: 3,
        explanation:
          "The manual says it is generally not safe to pass more than one vehicle at a time, and then adds that it is not illegal in Tennessee to do so. Unsafe, but lawful.",
        context:
          "The conditions the manual sets before you even consider it are strict: a straight, level road with excellent visibility of oncoming traffic, and enough room to clear every vehicle and return to your lane before you come within 100 feet of the no-passing markings or of any approaching vehicle. Elsewhere it puts a single pass at 55 mph at about ten seconds.",
        trap:
          "'Not illegal' is not 'permitted in the ordinary way'. This is one of the few places the Tennessee manual separates the safety advice from the law and tells you so.",
        excerptKey: "pass-multiple-legal",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Passing on the Left",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s4_13",
        topic: "impairment",
        question:
          "Someone whose licence is revoked for DUI applies for a photo identification licence to use in the meantime. What does Tennessee require on it?",
        choices: [
          "A restriction limiting them to daylight travel",
          "A note that it is not valid for identification",
          "No marking of any kind",
          "An indication that the person is a DUI offender",
        ],
        correctIndex: 3,
        explanation:
          "The department is required to indicate on the ID that the holder is a DUI offender, for the period before the licence can be restored.",
        context:
          "It sits alongside the other consequences that attach to every DUI conviction regardless of number: three eight-hour litter pick-up shifts in a vest reading 'I am a DRUNK DRIVER', a treatment assessment where there is a prior DUI within five years, an alcohol safety school programme, and restitution to anyone injured or out of pocket.",
        trap:
          "The marking is on the identification card, not the driver licence - because during revocation there is no driver licence to mark.",
        excerptKey: "dui-offender-id",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Penalties Applying to Any DUI Conviction",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_14",
        topic: "signs",
        question:
          "A sign over an underpass reads 12'-6\". What is it telling you?",
        choices: [
          "The width of the lane through the underpass",
          "The distance to the next overpass",
          "The clearance from road surface to the bottom of the structure",
          "The maximum vehicle length permitted",
        ],
        correctIndex: 2,
        explanation:
          "It is the vertical clearance from the road surface to the underside of the bridge or overpass. If your vehicle is taller, the route is not available to you.",
        context:
          "It belongs to a family of signs Tennessee lists together with the ones that shape your route: the T-intersection sign that tells you the road ends and you must turn, the chevron marking a sharp change of direction, and the object marker that flags something close to the pavement edge such as a bridge end or an underpass abutment.",
        trap:
          "The number is the clearance, not a distance. Reading it as feet to the structure is the mistake that puts a box van into a bridge.",
        excerptKey: "sign-low-clearance",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_15",
        topic: "rightOfWay",
        question:
          "You are parked at the curb and want to rejoin traffic. What does Tennessee require?",
        choices: [
          "Signal and pull out - traffic must make room for you",
          "Wait for all moving traffic to pass before you pull out",
          "Reverse first to create a run-up",
          "Pull out only at an intersection",
        ],
        correctIndex: 1,
        explanation:
          "Starting from a parked position, you wait for all moving traffic to pass. You look, signal and yield - not the other way around.",
        context:
          "The manual asks you to signal long enough to alert traffic that you are moving off, and to check over your shoulder rather than relying on mirrors. It also warns against sitting with your indicator on at the curb without moving, because an unintended signal still reads as an intention to everyone else.",
        trap:
          "Signalling does not create the gap. The manual is explicit that a signal never confers the right-of-way.",
        excerptKey: "row-parked-position",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Yield to Oncoming Traffic",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_16",
        topic: "speed",
        question:
          "How does Tennessee's manual describe the status of the Basic Speed Rule?",
        choices: [
          "A statute carrying three points on conviction",
          "A rule that applies only in work zones",
          "A federal requirement adopted by every state",
          "Not a Tennessee law, but a general safety principle",
        ],
        correctIndex: 3,
        explanation:
          "The manual says outright that the Basic Speed Rule is not a Tennessee law. It is a safety principle: your speed is limited by conditions, not just by the sign.",
        context:
          "That does not leave conditions unpoliced. Tennessee's points schedule carries 'driving too fast for conditions, failure to reduce speed to avoid an accident' at three points, and a driver who ploughs into the car ahead is either breaking that rule or following too closely. The Basic Speed Rule is the reasoning; the enforceable offences sit beside it.",
        trap:
          "This is a rare case where the manual teaches a principle and then tells you it is not the law. Reading it as a statute misstates what Tennessee actually charges.",
        excerptKey: "bsr-not-law",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, The Basic Speed Rule",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s4_17",
        topic: "safety",
        question:
          "You have to drive through thick fog. What does Tennessee's manual tell you to do with your headlights?",
        choices: [
          "Use high beams for maximum reach",
          "Use low beams",
          "Use parking lights only, to cut the glare",
          "Use hazard flashers instead of headlights",
        ],
        correctIndex: 1,
        explanation:
          "Low beams. High beams bounce off the fog straight back into your eyes and make things worse rather than better.",
        context:
          "The manual's opening advice on fog and smoke is not to drive at all. If you must, it wants low beams, reduced speed, no passing, no crossing traffic unless you have to, the radio off so you can hear, and no phone. If you cannot see the road edge, pull well clear of the traffic lane and switch on your flashers. Tennessee gets fog and wildfire smoke at any time of year.",
        trap:
          "Fog lights alone are not enough, and Tennessee makes running them without headlights illegal. Daytime fog, heavy rain and snow all require low beam headlights by law.",
        excerptKey: "fog-low-beam",
        sourceLabel: "Tennessee Driver License Manual - Section B-6, Driving in Inclement Weather Conditions",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_18",
        topic: "sharing",
        question:
          "When is a Tennessee bicyclist entitled to take the whole lane rather than keeping right?",
        choices: [
          "Only when a sign gives bicycles priority",
          "Only when riding in a group of three or more",
          "When the lane is too narrow for a car and a bicycle to share it safely",
          "Only on roads with a posted limit of 30 mph or less",
        ],
        correctIndex: 2,
        explanation:
          "A rider is required to keep as far right as practical only when a car and a bicycle can safely share the lane side by side. Where the lane is too narrow, the bicycle takes the whole lane.",
        context:
          "Tennessee lists the other occasions too: when the rider is overtaking another vehicle, and when parked cars, moving machinery, fixed obstacles, pedestrians, animals, potholes or debris make the edge unsafe. The manual adds that a cyclist away from the extreme right is not being careless but responding to conditions or setting up a left turn.",
        trap:
          "Riders drifting out from a line of parked cars are avoiding an opening door, which the manual specifically identifies as correct operation.",
        excerptKey: "bike-full-lane",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Lane Positions for Bicycles",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_19",
        topic: "parking",
        question:
          "You leave your car outside a shop for two minutes with the engine running. What is the position in Tennessee?",
        choices: [
          "Lawful if the doors are locked",
          "Lawful for up to five minutes",
          "Against the law - the engine must not be left running in a parked unattended vehicle",
          "Lawful if the vehicle is on private property",
        ],
        correctIndex: 2,
        explanation:
          "Leaving the engine running in a parked unattended vehicle is against the law. The manual pairs it with an instruction to remove the ignition keys.",
        context:
          "Tennessee's parking rules end with a security block: set the parking brake every time, leave a manual in gear or an automatic in park, take the keys, and lock the doors. There is a separate and far more serious offence for leaving a child under seven unattended in a vehicle where the engine is running or the keys are inside the passenger compartment - a Class B misdemeanour with a $200 fine for a first offence.",
        trap:
          "Locking the doors does not cure it. The offence is the running engine in an unattended vehicle, not the risk of theft.",
        excerptKey: "park-engine-running",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Routine Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_20",
        topic: "emergencies",
        question:
          "A driver goes around a flood barricade and drives into water across the road. What can they be charged with in Tennessee?",
        choices: [
          "Reckless driving",
          "A parking violation",
          "Failure to obey a traffic control device only",
          "Nothing, unless a rescue is actually needed",
        ],
        correctIndex: 0,
        explanation:
          "Knowingly ignoring clear flood warning signs or barricades and driving into flooded road can be charged as reckless driving - and the driver can be made to pay the cost of their own rescue.",
        context:
          "Tennessee gives the numbers behind the rule. Six inches of fast-moving water can knock a person off their feet, and most cars can be swept away in 18 to 24 inches of moving water. The road bed under the water may be washed out entirely. The manual's instruction is simple: turn around, and if the vehicle stalls, leave it at once and get to higher ground.",
        trap:
          "A heavy vehicle is not a safer one. The manual points out that trucks and SUVs gain only six to twelve inches of clearance before buoyancy does the same thing to them.",
        excerptKey: "flood-reckless",
        sourceLabel: "Tennessee Driver License Manual - Section B-6, High Water and Flooding Dangers",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_21",
        topic: "licensing",
        question:
          "What are the two defining limits on a Tennessee Class H hardship licence?",
        choices: [
          "Daylight hours only, and travel only to the destinations named in the approval letter",
          "No interstate driving, and no passengers",
          "A 45 mph maximum, and a parent in the vehicle",
          "Weekdays only, and a 25-mile radius from home",
        ],
        correctIndex: 0,
        explanation:
          "It is valid only in daylight and only for travel to the locations set out in the approval letter. Everything else is off limits.",
        context:
          "A hardship licence can be issued to a minor as young as 14, for a Class D vehicle or a motorcycle or both, and only on proof of family hardship evaluated case by case. The manual notes fewer than one percent of licences issued to minors are hardship licences. Whatever age it is granted at, it expires when the holder turns 16.",
        trap:
          "It is not an early full licence. A 15-year-old hardship holder who is accompanied by a qualifying adult simply has the same privileges as a learner permit holder.",
        excerptKey: "license-hardship-daylight",
        sourceLabel: "Tennessee Driver License Manual - Section A-1, Class H Hardship",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_22",
        topic: "rules",
        question:
          "You are in a driveway and want to reverse into the intersection just behind you to turn around. What does Tennessee law say?",
        choices: [
          "It is permitted if you use hazard lights",
          "It is permitted if no traffic is approaching",
          "It is illegal to back into an intersection from a driveway",
          "It is permitted below 5 mph",
        ],
        correctIndex: 2,
        explanation:
          "Backing into an intersection from a driveway is illegal in Tennessee, full stop.",
        context:
          "The general rule behind it is that you never back into any travel lane, with a single exception for backing into a parallel parking space. Backing on an interstate is illegal too, and so is reversing to reach a missed exit or turn - the instruction is to carry on to the next one. Before backing anywhere, check behind the vehicle before you get in, then look front, both sides and rear, and turn to look through the back window rather than relying on mirrors.",
        trap:
          "Reversing feels less risky than a U-turn because it is slow. Tennessee bans it in these places because other drivers never expect a car to be coming backwards.",
        excerptKey: "backing-intersection",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Backing",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s4_23",
        topic: "impairment",
        question:
          "A driver with two DUI convictions inside five years has their privileges reinstated. What must they do?",
        choices: [
          "Operate only a vehicle with a working ignition interlock device, for six months",
          "Carry SR-22 insurance and nothing more",
          "Retake the road test before driving",
          "Report monthly to a probation officer for a year",
        ],
        correctIndex: 0,
        explanation:
          "Two DUIs within five years means the interlock is mandatory for six months after reinstatement - and the vehicle will not start if the driver's BAC is too high.",
        context:
          "Interlock restrictions in Tennessee can run from six months to a year on a first offence, up to three years on a second, and up to ten on a third or subsequent. A driver in the second year of a two-year revocation may apply for a restricted licence if they fit an interlock for the remainder of the revocation, submitting two copies of the court order and SR-22 proof of insurance.",
        trap:
          "The six months runs from reinstatement, not from conviction. It is a condition on getting back on the road, not part of the revocation you have already served.",
        excerptKey: "dui-interlock-six-months",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Additional DUI Penalties",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_24",
        topic: "signals",
        question:
          "A pedestrian faces a WALK signal at a Tennessee crossing. What does it actually mean?",
        choices: [
          "That traffic has been stopped in every direction",
          "That vehicles must yield without exception",
          "That it is their turn to cross - but they should look before doing so",
          "That they have priority over turning vehicles only",
        ],
        correctIndex: 2,
        explanation:
          "The manual puts it bluntly: the WALK signal and the green light say it is your turn, not that it is safe. Look, then cross.",
        context:
          "Tennessee balances this with duties on both sides. Drivers must not block a crosswalk while stopped at a red or waiting to turn, and must watch for pedestrians particularly when turning right. Pedestrians must not step suddenly off a curb into the path of a vehicle so close that it cannot stop, however clearly they have the right-of-way.",
        trap:
          "Turning vehicles are the reason for the warning. A driver with a green light may legally be turning across the same crossing the pedestrian has just been invited into.",
        excerptKey: "ped-walk-not-safe",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Crossing",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_25",
        topic: "signs",
        question:
          "You see a yellow triangular sign mounted on the LEFT side of the road. What is it likely to be?",
        choices: [
          "A wrong-way warning",
          "A pedestrian crossing warning",
          "A road narrows warning",
          "A no-passing zone marker",
        ],
        correctIndex: 3,
        explanation:
          "A triangular no-passing zone sign, which Tennessee places on the left side of the roadway in yellow or orange - the opposite side from almost every other warning sign.",
        context:
          "No-passing zones are drawn from sight distance, taking account of hills, curves, intersections and driveways where something might enter the road. On the pavement they appear as a solid yellow line on the restricted side. Reaching the end of a zone does not mean passing is safe; it means visibility has improved and the judgment is now yours.",
        trap:
          "Almost everything else is on the right, which is exactly why a sign on the left registers as unfamiliar rather than as the specific warning it is.",
        excerptKey: "sign-no-passing-triangle",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, No Passing Signs",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_26",
        topic: "safety",
        question: "Your car starts to skid. Which way do you steer?",
        choices: [
          "Opposite to the skid, to counteract it",
          "Straight ahead and hold the wheel still",
          "Toward the shoulder to scrub off speed",
          "In the direction you want the car to go",
        ],
        correctIndex: 3,
        explanation:
          "Steer where you want the car to go, and stay off the brake until it slows. Then unwind the correction before the car swings the other way and starts a second skid.",
        context:
          "Tennessee frames skids as a speed problem before a technique problem: they happen because the driver was going too fast for conditions. The recovery is steer, correct, and keep correcting left and right until the car is tracking again. For a vehicle without anti-lock brakes the manual gives the same instruction in the braking chapter - come off the brake and steer in the direction of the skid.",
        trap:
          "The second skid catches more drivers than the first. Holding the correction too long swings the back end the other way.",
        excerptKey: "skid-steer",
        sourceLabel: "Tennessee Driver License Manual - Section B-6, Skids",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_27",
        topic: "sharing",
        question:
          "You are overtaking a horse being ridden along a Tennessee road. What does the law require?",
        choices: [
          "Sound the horn well in advance so the rider knows",
          "Drive at a reasonable speed and a reasonable distance from the horse",
          "Stop until the rider has left the roadway",
          "Pass only where the road has a paved shoulder",
        ],
        correctIndex: 1,
        explanation:
          "Due care means a reasonable speed and a reasonable distance. The manual specifically tells you not to sound the horn or rev the engine.",
        context:
          "Horseback riders in Tennessee are subject to and protected by the rules of the road, and must ride single file near the right curb or edge, or on a usable shoulder, lane or path. Animal-drawn vehicles have the same right to the road as a car and the same duty to follow its rules, and carry the slow-moving vehicle emblem on the back.",
        trap:
          "The horn is the instinctive courtesy and the wrong one here, as it is with a blind pedestrian. Both rules tell you to make less noise, not more.",
        excerptKey: "horseback-riders",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Horseback Riders",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_28",
        topic: "rightOfWay",
        question:
          "May a private vehicle in Tennessee be fitted with blue flashing lights?",
        choices: [
          "Yes, if the owner is a volunteer firefighter",
          "Yes, if they are only used off the public road",
          "Yes, in combination with red",
          "No - it is against the law for an unauthorised private vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Blue flashing lights, or blue combined with red, may not be installed, maintained or displayed on an unauthorised private vehicle in any manner.",
        context:
          "The rule protects the signal that emergency vehicles rely on. Tennessee identifies police vehicles by flashing blue, or flashing blue and red, plus an audible signal, and requires you to yield to any emergency vehicle using a siren, air horn, or red or blue flashing light. Separately, since 2018 no vehicle may show steady-burning lights to the front in any colour but white or amber.",
        trap:
          "The prohibition covers installing and maintaining, not only using. Fitting them and leaving them switched off is still the offence.",
        excerptKey: "row-blue-light-illegal",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Yield to Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_29",
        topic: "speed",
        question:
          "How many points does Tennessee assign for speeding 16 to 25 mph over the limit outside a construction zone?",
        choices: ["Three", "Four", "Five", "Six"],
        correctIndex: 1,
        explanation:
          "Four points for 16 to 25 over. The same speed in a construction zone draws five.",
        context:
          "Tennessee's speeding scale climbs in bands: one point for one to five over, three for six to 15, four for 16 to 25, five for 26 to 35, six for 36 to 45, and eight at 46 and above. Every band except the very top carries a higher figure inside a construction zone, and speeding where the limit is not indicated is a flat three points.",
        trap:
          "The construction-zone uplift starts at the very bottom of the scale. One to five over is one point normally and two in a work zone.",
        excerptKey: "points-speeding-16-25",
        sourceLabel: "Tennessee Driver License Manual - Section B-8, Points for Moving Traffic Violations",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s4_30",
        topic: "rules",
        question:
          "A passenger tosses a fast-food bag out of your car window in Tennessee. Where do the fines start?",
        choices: [
          "At $50, rising as high as $3,000 depending on the amount",
          "At $10, with no upper limit stated",
          "At $250 flat",
          "At $500, with no lower figure",
        ],
        correctIndex: 0,
        explanation:
          "Fines start at $50 and can reach $3,000 depending on how much litter is involved, and a conviction can carry up to 40 hours of public service picking litter up.",
        context:
          "Tennessee also puts a load-securing duty on drivers: any vehicle carrying litter or material likely to fall or blow onto the highway must have it in an enclosed space or fully covered by a tarpaulin. The manual's reasoning is safety as much as tidiness - loose material on a highway is a hazard to everyone behind you.",
        trap:
          "Cigarette butts count. The manual lists them alongside food sacks, tobacco products, papers, cans and bottles.",
        excerptKey: "littering-fines",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Littering",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_31",
        topic: "parking",
        question: "What does a red painted curb mean in Tennessee?",
        choices: [
          "You may stop long enough to load or unload while staying with the vehicle",
          "No stopping, standing or parking in any circumstances",
          "You may stop long enough to pick up or drop off passengers",
          "Parking is permitted for residents with a permit",
        ],
        correctIndex: 1,
        explanation:
          "Red means no stopping, standing or parking under any condition. White allows a pause for passengers, and yellow allows loading while you stay with the vehicle.",
        context:
          "A painted curb in Tennessee means special rules apply to that stretch, and the colour is the whole instruction. The three colours sit alongside the outright bans - intersections, sidewalks, bridges and tunnels, fire lanes, in front of driveways, and on interstate ramps and shoulders except for a disabled vehicle.",
        trap:
          "Yellow lets you load but not leave. Walking away from a yellow curb turns a permitted stop into a parking violation.",
        excerptKey: "park-curb-colors",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Painted Curbs",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_32",
        topic: "licensing",
        question:
          "A 16-year-old with a Tennessee licence drops out of school. What happens?",
        choices: [
          "Nothing until they turn 18",
          "Their licence is downgraded to a learner permit",
          "The school notifies the department and their driving privileges are suspended",
          "They must retake the knowledge test",
        ],
        correctIndex: 2,
        explanation:
          "The school is required to notify the Department of Safety, which suspends the student's driving privileges. Returning to school restores them - once.",
        context:
          "Tennessee defines dropping out as 10 consecutive or 15 total days of unexcused absences in a semester, and applies the same consequence to failing to make satisfactory progress, generally meaning passing three subjects a grading period. Under-18 drivers can also lose privileges for any drug or alcohol offence, driving or not, and for carrying weapons on school property.",
        trap:
          "The manual is blunt that there is no second chance. A first return to school restores the privilege; a second drop-out does not.",
        excerptKey: "gdl-dropout",
        sourceLabel: "Tennessee Driver License Manual - Section A-3, Proof of School Attendance",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_33",
        topic: "impairment",
        question:
          "What happens when alcohol is combined with a depressant such as a tranquilliser or an antihistamine?",
        choices: [
          "The effects cancel each other out",
          "The effects are multiplied, not merely added",
          "The effects are simply added together",
          "Only the alcohol has any effect on driving",
        ],
        correctIndex: 1,
        explanation:
          "Multiplied. Tennessee says so directly, which is why an over-the-counter cold remedy plus one drink can leave a driver far more impaired than either would suggest.",
        context:
          "The manual asks you to read the warnings on non-prescription drugs - cold tablets, cough syrups, allergy remedies - because they can contain antihistamines, alcohol or codeine. Phrases like 'may cause drowsiness' or 'do not operate machinery' are the signal. Where a doctor prescribes a tranquilliser or sedative, the manual wants you to ask specifically how it will affect your driving.",
        trap:
          "'Just one drink' is calculated against alcohol alone. Add a legal medicine and the arithmetic no longer holds.",
        excerptKey: "alcohol-mixing-drugs",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Every Day Drugs",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_34",
        topic: "emergencies",
        question:
          "You are the first vehicle to reach a crash scene and you have no medical or rescue training. What does Tennessee's manual advise?",
        choices: [
          "Call 911, then drive on slowly without obstructing the emergency response",
          "Stop and attempt to move the injured to safety",
          "Stop and direct traffic around the scene yourself",
          "Continue past without calling, since others will report it",
        ],
        correctIndex: 0,
        explanation:
          "Notify police immediately by calling 911, then keep moving so you do not obstruct the arriving police, ambulance and fire crews - or become the victim of a secondary collision.",
        context:
          "If you actually witnessed the crash, the advice is different: pull safely off the road, switch on your hazard flashers, and tell the officer you saw it happen. Either way, do not attempt to move an injured person from a wrecked vehicle unless you are trained or there is immediate danger such as fire.",
        trap:
          "Stopping to help feels like the responsible act and is the one the manual warns against, because 'accident gazing' by others is what causes the second crash.",
        excerptKey: "crash-arrive-first",
        sourceLabel: "Tennessee Driver License Manual - Section B-8, If You Arrive First at a Crash Scene",
        sourceUrl: HB,
      },
      {
        id: "tn_s4_35",
        topic: "safety",
        question:
          "Tennessee's manual gives a coin test for tyre tread. What depth makes a tyre illegal?",
        choices: [
          "Anything under 4/32 inch",
          "Anything under 3/32 inch",
          "Anything under 2/32 inch",
          "Anything under 1/32 inch",
        ],
        correctIndex: 2,
        explanation:
          "Push a penny in head first. If the tread does not reach Lincoln's head - 2/32 of an inch - the tyre is illegal and unsafe.",
        context:
          "Worn tyres lengthen stopping distances, make steering harder on wet roads and raise the risk of hydroplaning and blowouts. The manual asks you to check pressure against the sticker in the driver's door jamb rather than the maximum figure moulded into the tyre sidewall, and to check the spare too.",
        trap:
          "The number printed on the tyre is the maximum safe pressure, not the pressure your car wants. Inflating to it is a common and consequential mistake.",
        excerptKey: "vehicle-tread",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-2, Check the Vehicle",
        sourceUrl: HB,
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Railroad crossings, penalty schedules, work zones, equipment law and pavement markings - the five areas published practice-test data puts at the top of Tennessee's miss list, plus the stacked thresholds nobody expects.",
    questions: [
      {
        id: "tn_s5_01",
        topic: "rules",
        question:
          "An ordinary car sits on the shoulder of a four-lane Tennessee highway with its hazard flashers on. Does the Move Over Law apply?",
        choices: [
          "No - it covers emergency vehicles only",
          "No - it covers emergency and utility vehicles only",
          "Only if the vehicle is displaying a warning triangle",
          "Yes - it now covers any stationary vehicle showing flashing hazard lights",
        ],
        correctIndex: 3,
        explanation:
          "The law was extended to cover all stationary motor vehicles with their emergency flashers on, ordinary cars and trucks included.",
        context:
          "The duty is the same as for an emergency vehicle: on a highway with at least four lanes and two or more running your way, change into a lane not adjacent to the stopped vehicle if you can do so safely. If a lane change would be impossible or unsafe, proceed with due caution, reduce speed and hold a safe speed for conditions. It applies whether the vehicle is on the right shoulder, the left shoulder or the median.",
        trap:
          "Most drivers learn this as a blue-lights rule. The civilian extension is the part that catches people, and a broken-down family car is exactly the case it was written for.",
        excerptKey: "move-over-civilian",
        sourceLabel: "Tennessee Driver License Manual - Section B-5, Move Over Law",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s5_02",
        topic: "signs",
        question:
          "What is the practical difference between a 'lane added' sign and a 'merging traffic' sign on a Tennessee interstate?",
        choices: [
          "Lane added means the entering traffic must yield to you",
          "Lane added means the ramp becomes a new lane and the entering traffic need not merge immediately",
          "Merging traffic means the road narrows to one lane",
          "They mean the same thing at different distances",
        ],
        correctIndex: 1,
        explanation:
          "With 'lane added', the on-ramp becomes a new right-hand lane, so entering traffic does not have to merge at once. With 'merging traffic', they must join the existing right lane.",
        context:
          "The manual asks you to change your behaviour accordingly: where a lane has been added, avoid moving right at that point, because the entering drivers will not be expecting a vehicle to arrive in their new lane. Where traffic is merging, watch for it and make room. The signs look similar at speed, which is precisely why the manual sets them side by side.",
        trap:
          "The instinct is to drift right to make room. At a lane-added interchange that is the move that causes the conflict.",
        excerptKey: "interstate-lane-added",
        sourceLabel: "Tennessee Driver License Manual - Section B-5, Entering the Interstate",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_03",
        topic: "impairment",
        question:
          "After a DUI conviction, who is barred from applying for a restricted licence in Tennessee?",
        choices: [
          "Anyone whose BAC was above .15",
          "Anyone who refused the chemical test",
          "Anyone with a prior DUI or adult driving-while-impaired conviction within 10 years",
          "Anyone under the age of 25",
        ],
        correctIndex: 2,
        explanation:
          "A prior DUI or adult driving-while-impaired conviction within 10 years rules out a restricted licence, as do vehicular homicide by intoxication, aggravated vehicular homicide and vehicular assault.",
        context:
          "Where a restricted licence is available, a judge may allow travel to and from work, full-time college, religious services, work driving itself, a scheduled litter pick-up shift, an outpatient treatment programme, probation appointments and interlock monitoring appointments. The applicant brings two copies of the court order and SR-22 proof of insurance, and may face further testing.",
        trap:
          "The ten-year look-back reaches much further than the five-year window used for treatment assessments and vehicle seizure. Tennessee uses several different periods and they are not interchangeable.",
        excerptKey: "dui-restricted-bar",
        sourceLabel: "Tennessee Driver License Manual - Section B-8, Restricted Driver Licenses",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_04",
        topic: "emergencies",
        question:
          "What level of property damage obliges you to notify police, the sheriff or the Highway Patrol immediately after a Tennessee crash?",
        choices: [
          "Over $400", "Over $1,000", "Over $250", "Over $50",
        ],
        correctIndex: 3,
        explanation:
          "Over $50 in property damage - or any death or injury - triggers immediate notification. The separate written report to the Department of Safety kicks in at over $400.",
        context:
          "Fifty dollars is a very low bar in practice, so most collisions with any damage at all are notifiable. If you are physically unable to make the call and a passenger can, the passenger must. A crash involving an unattended vehicle or a domestic animal whose owner you cannot find is reported to the police as well.",
        trap:
          "Two thresholds, two different duties. Fifty dollars is the phone call at the scene; four hundred is the paperwork within 20 days.",
        excerptKey: "crash-notify-50",
        sourceLabel: "Tennessee Driver License Manual - Section B-8, Reporting Crashes",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s5_05",
        topic: "speed",
        question:
          "How many points does Tennessee assign for speeding 46 mph or more over the limit?",
        choices: ["Four", "Five", "Six", "Eight"],
        correctIndex: 3,
        explanation:
          "Eight points, the top of the speeding scale - and the same figure in or out of a construction zone, because the ordinary penalty has already reached the ceiling.",
        context:
          "Eight points is the level Tennessee reserves for its most serious moving violations: reckless endangerment by vehicle, passing a stopped school bus, failure to stop at a railroad crossing, fleeing a law enforcement officer, child endangerment, and driving while your licence is suspended or revoked. An adult reaches proposed suspension at 12 points in a year.",
        trap:
          "Two convictions at this level put an adult driver past the suspension threshold inside a single year, and a driver under 18 is past it on the first one.",
        excerptKey: "points-speeding-46",
        sourceLabel: "Tennessee Driver License Manual - Section B-8, Points for Moving Traffic Violations",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s5_06",
        topic: "rightOfWay",
        question:
          "You are in a marked school zone with the warning flashers operating and a pedestrian is crossing. What exactly does Tennessee require?",
        choices: [
          "Slow to the school zone limit and pass behind them",
          "Yield only if they are within a marked crosswalk",
          "Stop, and remain stopped until they have crossed the roadway your vehicle is on",
          "Stop only if a crossing guard signals you to",
        ],
        correctIndex: 2,
        explanation:
          "With the flashers going, yielding becomes stopping - and you stay stopped until the pedestrian has cleared your roadway, not merely your lane.",
        context:
          "The rule applies to a marked crosswalk and to an intersection with no marked crosswalk alike. Outside the school zone, the ordinary rule is to yield when the pedestrian is on your half of the road or approaching closely enough from the other half to be in danger. The school zone version is stricter in both what it demands and how long it lasts.",
        trap:
          "Clearing your lane is not clearing your roadway. The duty runs until they are off the whole carriageway you are travelling on.",
        excerptKey: "row-school-flasher",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Yield to Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_07",
        topic: "parking",
        question:
          "How close to a fire station driveway may you park on the opposite side of the street in Tennessee?",
        choices: [
          "20 feet", "75 feet", "50 feet", "30 feet",
        ],
        correctIndex: 1,
        explanation:
          "Seventy-five feet on the opposite side, against 20 feet on the same side - the wider gap because an engine needs the far kerb to swing across.",
        context:
          "Tennessee's parking distances rarely repeat: 15 feet from a hydrant, 20 from a crosswalk, 20 from a fire station driveway on the same side, 30 from a signal or sign, 50 from a railroad crossing, 75 from a fire station driveway across the street. The blanket bans are separate again - intersections, sidewalks, bridges, tunnels, fire lanes and driveway entrances.",
        trap:
          "The same driveway carries two different distances depending on which side of the street you are on. It is the only figure in the list that does.",
        excerptKey: "park-fire-station",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, No Parking Zones",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s5_08",
        topic: "safety",
        question:
          "On a good road in good weather, roughly what is the braking distance alone from 70 mph?",
        choices: [
          "About 180 feet", "About 290 feet", "About 120 feet", "About 420 feet",
        ],
        correctIndex: 1,
        explanation:
          "About 290 feet of braking, on top of roughly 128 feet covered while you perceive the hazard and move your foot - a total near 418 feet, about one and a half football fields.",
        context:
          "Tennessee splits stopping into three parts: perception time at around half a second, reaction time averaging two-thirds of a second, and braking time that varies with speed and vehicle. The manual's worked example is a deer appearing in your headlights at the interstate maximum, and it is used to make a point about night driving: if you cannot stop inside the distance your lights show you, you are driving blind.",
        trap:
          "Braking distance is only the last part. Adding the 128 feet you cover before the brakes bite is what turns a comfortable-sounding number into an alarming one.",
        excerptKey: "stopping-70",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Stopping Distances",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_09",
        topic: "licensing",
        question:
          "A Tennessee Intermediate Restricted licence holder is convicted of using a forged parental letter to drive after curfew. What follows?",
        choices: [
          "The Intermediate Restricted licence is revoked and only a learner permit is reissued until they turn 18",
          "A 90-day suspension and a fine",
          "Six points and a warning letter",
          "The curfew is extended by six months",
        ],
        correctIndex: 0,
        explanation:
          "Revocation of the Intermediate Restricted licence, and a learner permit only until the driver's eighteenth birthday. It is the harshest outcome in the graduated system.",
        context:
          "The same consequence applies to a teen who contributes to a fatal crash. Lesser GDL penalties are graded: six or more points, contributing to a crash, a second seat belt conviction or a second moving violation each add 90 days to the minimum year on the Intermediate Restricted licence, and a second moving violation additionally requires a certified driver education course.",
        trap:
          "This is not a suspension that runs out. The teen is held at permit level until 18 no matter how long that is.",
        excerptKey: "gdl-forged-letter",
        sourceLabel: "Tennessee Driver License Manual - Section A-3, Teen Driver FAQs",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_10",
        topic: "signals",
        question:
          "How often are emergency reference markers installed along heavily travelled urban interstates in Tennessee?",
        choices: [
          "Every quarter mile", "Every 1,000 feet", "Every mile", "Every 500 feet",
        ],
        correctIndex: 1,
        explanation:
          "Every 1,000 feet on heavily travelled urban sections, showing route number, direction of travel, and the log mile to a tenth.",
        context:
          "They exist so a caller can give dispatchers an exact location instead of a guess. Tennessee has installed them in Nashville, Knoxville, Memphis, Jackson and Chattanooga, mostly on median dividers. A marker reading westbound Interstate 40 at mile 205.2 puts you between mileposts 204 and 206.",
        trap:
          "These are not mileposts. Mileposts come once a mile; reference markers come roughly every fifth of a mile and carry the tenths.",
        excerptKey: "reference-markers",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Emergency Reference Markers",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_11",
        topic: "rules",
        question:
          "Which of these is a place Tennessee's manual tells you never to cross the centre line to pass?",
        choices: [
          "Approaching an intersection, a railroad crossing, a narrow bridge, a viaduct or a tunnel",
          "Any road with a posted limit above 45 mph",
          "Any road inside a municipality",
          "Any road carrying a broken yellow centre line",
        ],
        correctIndex: 0,
        explanation:
          "Intersections, railroad crossings, narrow bridges, viaducts and tunnels are all on the no-passing list, along with hills, curves and any place a solid yellow line sits on your side.",
        context:
          "The list also covers passing when there is oncoming traffic, passing a school or church bus with its flashing lights on and stop arm out, passing a vehicle that has stopped for a pedestrian in a crosswalk, and passing on the right shoulder. One thing you may do inside a no-passing zone is cross the line to turn into or out of an alley, intersection, private road or driveway.",
        trap:
          "Markings are not the only restriction. An intersection with no solid yellow line at all is still a place Tennessee tells you not to pass.",
        excerptKey: "pass-where-prohibited",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, No Passing",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s5_12",
        topic: "sharing",
        question:
          "A lane is marked and signed for bicycle use only. What may a driver use it for?",
        choices: [
          "Turning right at the next intersection",
          "Passing a queue of stopped traffic",
          "Nothing - not turning, not passing, not parking",
          "Parking outside rush hour",
        ],
        correctIndex: 2,
        explanation:
          "A signed bicycle-only lane may never be used as a turning lane, a passing lane or a parking space. The manual puts 'NEVER' in capitals.",
        context:
          "It matches Tennessee's wider rule on reserved lanes: do not drive in one unless you are operating the vehicle type it is set aside for, or you have to cross it to turn within the next half block. Passing on the right using a bike lane or a parking lane is separately prohibited anywhere, as is using the emergency lane within sight of a traffic light or stop sign.",
        trap:
          "'I was only crossing it to turn' is not a defence where the lane is a signed bicycle lane. That exception belongs to reserved lanes generally, not to this one.",
        excerptKey: "bike-lane-no-drive",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Lane Positions for Bicycles",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_13",
        topic: "impairment",
        question:
          "A 15-year-old with no driver licence at all is convicted of possessing alcohol in Tennessee. What is the consequence for driving?",
        choices: [
          "Driving privileges are suspended for one year or until age 17, whichever is longer",
          "None, because there is no licence to suspend",
          "A 90-day delay in applying for a learner permit",
          "Six points added when a licence is eventually issued",
        ],
        correctIndex: 0,
        explanation:
          "A 13- to 17-year-old who possesses, consumes or sells alcohol or drugs loses driving privileges for a year or until 17, whichever is longer - even if never licensed.",
        context:
          "Tennessee stacks three age-based rules. Under 18, any drug or alcohol conviction can cost driving privileges whether or not a vehicle was involved. At 18, 19 or 20, an alcohol purchase or possession conviction costs a year, and two years for a second. And from 16 to 20, driving at .02 BAC is the offence of underage driving while impaired.",
        trap:
          "A second conviction moves the goalposts again: two years, or until age 18, whichever is longer.",
        excerptKey: "alcohol-juvenile",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Juvenile Offenders",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_14",
        topic: "signs",
        question:
          "Which of these is Tennessee's advice about the end of a marked no-passing zone?",
        choices: [
          "The zone ending means passing is now safe",
          "The zone ending means the next stretch is a designated passing zone",
          "The zone ending means visibility has improved - the judgment is still yours",
          "The zone ending only applies to vehicles over 10,000 pounds",
        ],
        correctIndex: 2,
        explanation:
          "The manual is careful: the end of a no-passing zone tells you sight distance has improved, not that a pass is safe. Everything else you would normally weigh still applies.",
        context:
          "No-passing zones are laid out from how far ahead you can see, taking account of hills, curves, intersections, driveways and anywhere a vehicle might join the road. On the pavement they appear as a solid yellow line on the restricted side, and they may also carry a triangular no-passing sign on the left-hand side of the road.",
        trap:
          "The instinct at the end of a long queue behind a slow vehicle is to treat the broken line as permission. It is a statement about visibility, not about traffic.",
        excerptKey: "pass-end-of-zone",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, No Passing",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_15",
        topic: "speed",
        question:
          "You are caught doing one to five mph over the posted limit inside a Tennessee construction zone. How many points?",
        choices: ["None", "One", "Three", "Two"],
        correctIndex: 3,
        explanation:
          "Two points in a construction zone, against one point for the same margin anywhere else. The uplift starts at the very bottom of the scale.",
        context:
          "Every band on Tennessee's speeding schedule carries a construction-zone figure. One to five over: one point normally, two in a work zone. Six to 15: three and four. Sixteen to 25: four and five. Twenty-six to 35: five and six. Thirty-six to 45: six and eight. And the fine attached to a posted work zone limit runs from $250 to $500.",
        trap:
          "Being barely over feels trivial and doubles your points in a work zone. It is the smallest band that carries the largest proportional increase.",
        excerptKey: "points-speeding-1-5",
        sourceLabel: "Tennessee Driver License Manual - Section B-8, Points for Moving Traffic Violations",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s5_16",
        topic: "safety",
        question:
          "You are stopping behind another vehicle at an intersection. What gap does Tennessee's manual suggest?",
        choices: [
          "One car length",
          "Close enough to read the plate at arm's length",
          "Enough that you can see the vehicle's licence plate and where its back tyres meet the pavement",
          "Two car lengths in every case",
        ],
        correctIndex: 2,
        explanation:
          "The rule of thumb is to keep enough space to see the licence plate and the point where the rear tyres touch the road. That is roughly enough to steer out if you need to.",
        context:
          "Tennessee gives the reason rather than just the distance. The gap covers a vehicle that rolls back or stalls, and it gives you an escape route if something comes up behind too fast to stop. Once the vehicle ahead has cleared the intersection you move up to the stop line - and make a full stop there in your own right.",
        trap:
          "Rolling up to the line behind the car ahead does not count as your stop. Tennessee requires a complete stop at the line once you reach it.",
        excerptKey: "stop-gap-plate",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Stops Required by Law",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s5_17",
        topic: "rightOfWay",
        question:
          "An ambulance is approaching and the only clear space on your right is directly in front of a side road. What does Tennessee's manual say?",
        choices: [
          "Do not pull over there - the emergency vehicle may need to turn into that road",
          "Pull over there, since any stop is better than none",
          "Stop in your lane and switch on your hazard lights",
          "Continue to the next intersection and turn off",
        ],
        correctIndex: 0,
        explanation:
          "Do not block a side road or driveway. The emergency vehicle may be heading for it, and a car parked across the entrance is worse than a car still moving.",
        context:
          "Tennessee gives several refinements to the basic pull-right-and-stop duty. Clear an intersection before pulling over rather than stopping inside it. Stay put on a red light even if it turns green. And turn the radio down, so you can hear instructions from the emergency vehicle's loudspeaker.",
        trap:
          "The general rule is 'as far right as possible', which makes the driveway mouth look like the best spot available. It is the one place the manual excludes.",
        excerptKey: "row-emergency-red-light",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Yield to Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_18",
        topic: "parking",
        question:
          "How close to a railroad crossing may you park in Tennessee?",
        choices: ["15 feet", "20 feet", "30 feet", "50 feet"],
        correctIndex: 3,
        explanation:
          "Fifty feet from a railroad crossing - the largest of the fixed parking distances Tennessee lists.",
        context:
          "It is easy to confuse with the other 50 in this area: at a crossing with electric or mechanical signals, an approaching train requires you to stop within 50 feet of the nearest rail, and no closer than 15. One 50 is a parking prohibition, the other is the outer edge of a stopping band.",
        trap:
          "Fifteen and 50 appear in both rules. Parking says no closer than 50; stopping for a train says between 15 and 50.",
        excerptKey: "park-railroad-50",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, No Parking Zones",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s5_19",
        topic: "licensing",
        question:
          "A Tennessee driver has a seizure that causes loss of consciousness. How long must they be free of episodes before reinstatement?",
        choices: [
          "Three months", "Six months", "Twelve months", "Twenty-four months",
        ],
        correctIndex: 1,
        explanation:
          "A minimum of six lapse-free months. The manual repeats the same figure in its health chapter: epilepsy under medical control and six months seizure-free is generally not a bar to driving.",
        context:
          "Where the department receives information that a medical or mental condition affects someone's driving, it can require a doctor's report within 30 days. An unfavourable report means suspension until the condition improves, and failing to respond at all is itself grounds for suspension. Drivers can also be recalled for a full or partial re-examination.",
        trap:
          "The six months runs from the last episode, not from diagnosis or from the start of treatment.",
        excerptKey: "epilepsy-six-months",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-2, Health",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_20",
        topic: "rules",
        question:
          "If you do decide to pass several vehicles at once, how much room does Tennessee's manual want you back in your lane before?",
        choices: [
          "Before you reach the no-passing markings",
          "Before you come within 50 feet of oncoming traffic",
          "Before you come within 100 feet of the no-passing markings or any approaching vehicle",
          "Before you come within 300 feet of the crest of a hill",
        ],
        correctIndex: 2,
        explanation:
          "A hundred feet of margin from the no-passing markings and from any approaching vehicle, on top of a straight, level road with excellent visibility.",
        context:
          "Tennessee sets the bar this high because it recommends against multi-vehicle passes while acknowledging they are not illegal. Elsewhere it puts a single pass at 55 mph at about ten seconds, meaning you need a ten-second gap in oncoming traffic and the sight distance to see it. Passing never entitles you to exceed the speed limit.",
        trap:
          "'Back in my lane before the solid line' is not the standard. The manual wants you back with a hundred feet still to spare.",
        excerptKey: "pass-multiple-legal",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Passing on the Left",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_21",
        topic: "impairment",
        question:
          "When will Tennessee seize a driver's vehicle for drink-driving offences?",
        choices: [
          "On any DUI conviction",
          "On a second DUI conviction within five years, where both offences occurred after January 1997",
          "Only where a death results",
          "Only where the driver has no insurance",
        ],
        correctIndex: 1,
        explanation:
          "Two DUI convictions within five years, both after January 1997, and the vehicle is seized. Second and later convictions also make the vehicle subject to seizure and forfeiture under the penalty table.",
        context:
          "There is a second seizure route that does not depend on a fresh DUI at all: a vehicle can be seized where a driver is charged with driving on a revoked licence when the revocation was itself the result of a DUI conviction, first or subsequent.",
        trap:
          "Two different five-year windows sit close together here - one for seizure, one for the treatment assessment - and the restricted-licence bar uses ten. They are not interchangeable.",
        excerptKey: "dui-vehicle-seizure",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Additional DUI Penalties",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_22",
        topic: "sharing",
        question:
          "Roughly how far in front of a large truck does its forward blind spot extend?",
        choices: [
          "About 5 feet", "About 10 feet", "About 50 feet", "About 20 feet",
        ],
        correctIndex: 3,
        explanation:
          "Around 20 feet directly ahead is a No-Zone. A tractor with a long hood can hide the first 10 to 20 feet in front of the bumper entirely.",
        context:
          "The No-Zones surround the vehicle: about 20 feet off the front, deep behind, and wide down both sides. Cutting in too soon after passing and then slowing puts you in the front No-Zone at the exact moment the truck needs room to stop. The manual's rule for coming back in is to wait until you can see the whole front of the truck in your rearview mirror.",
        trap:
          "Twenty feet is roughly one car length plus a margin. Slotting in with what feels like a comfortable gap can still put you inside it.",
        excerptKey: "truck-no-zone-front",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Learn the No-Zones",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s5_23",
        topic: "emergencies",
        question:
          "Your car breaks down on a Tennessee interstate and you cannot move it clear. What does the manual advise?",
        choices: [
          "Walk to the nearest exit for help",
          "Stand behind the vehicle to warn traffic",
          "Cross the median to the other carriageway",
          "Stay in or near the vehicle on the side away from traffic, and wait for help",
        ],
        correctIndex: 3,
        explanation:
          "Stay in or near the vehicle on the side away from traffic. Walking on the interstate is both illegal and dangerous.",
        context:
          "The full drill is: get to the right shoulder or an emergency stopping area as soon as you can, switch on the hazard flashers, and raise the hood or tie a white cloth to the hood or antenna if you need help. Keep children away from traffic. A patrol officer will stop when they pass if they are not on another call, and in the four largest metropolitan areas a TDOT HELP truck may reach you first.",
        trap:
          "Setting off toward the next exit feels productive and is specifically prohibited. The exception the manual allows for leaving the vehicle is an extreme emergency.",
        excerptKey: "park-stay-with-vehicle",
        sourceLabel: "Tennessee Driver License Manual - Section B-5, Vehicle Breakdowns and Emergency Stopping",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_24",
        topic: "signals",
        question:
          "A lane control signal above your lane shows a flashing yellow X. What does that lane become?",
        choices: [
          "Closed to all traffic",
          "A turning lane only",
          "Open in the opposite direction",
          "Open at reduced speed",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow X makes the lane a turning lane. A steady yellow X is different: it means the lane's direction is changing and you should move out as soon as it is safe.",
        context:
          "These signals hang over reversible lanes, which Tennessee usually marks with double-broken yellow lines and runs on urban commuter routes flowing inbound in the morning and outbound in the afternoon. A green arrow opens the lane to you; a red X closes it. Check the overhead before committing, because the assignment changes through the day.",
        trap:
          "Flashing and steady yellow do opposite things. One invites you into the lane for a turn; the other tells you to get out of it.",
        excerptKey: "lane-reversible",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Reversible Lanes",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_25",
        topic: "signs",
        question:
          "You want to know whether you are on a state route or a US highway. What tells you?",
        choices: [
          "The shape and design of the route marker",
          "The colour of the edge line",
          "The spacing of the mile markers",
          "Whether the road has a centre turn lane",
        ],
        correctIndex: 0,
        explanation:
          "The route marker itself. Tennessee's manual describes US route markers as black numerals on a white shield against a black background, with separate designs for state primary and secondary routes and a blue-and-red shield for interstates.",
        context:
          "Route markers are part of the white and green guide-sign family: white for route markers and regulatory signs, green for direction and mileage. On interstates the green overhead signs place arrows above the lane you need, and an interstate guide sign with the exit-only marking means every vehicle in the lanes below must leave the highway.",
        trap:
          "An 'exit only' panel above your lane is not advisory. It means that lane is leaving the interstate whether you intended to or not.",
        excerptKey: "sign-us-route",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Guide Signs for Highways",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_26",
        topic: "safety",
        question:
          "What size gap does Tennessee's defensive driving chapter want before you change lanes or merge?",
        choices: [
          "A minimum four-second gap",
          "A minimum two-second gap",
          "One car length for every 10 mph",
          "Whatever gap lets you complete the move without braking",
        ],
        correctIndex: 0,
        explanation:
          "A minimum four-second gap for a lane change, entering a roadway, or merging - twice the two-second figure used for following distance.",
        context:
          "The chapter adds that you take multiple lanes one at a time rather than cutting across several at once, and that crossing traffic needs a gap big enough to clear the whole road, not just to reach the middle. Its scanning rules go with it: focus 10 to 15 seconds ahead, and check the mirror about every 10 seconds.",
        trap:
          "Two seconds is the following figure and four is the merging figure. Using the smaller number to judge a gap is how drivers end up braking someone else.",
        excerptKey: "defensive-merge-gap",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-1, Merging Defensively",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_27",
        topic: "speed",
        question:
          "During which hours are Tennessee's HOV lanes reserved for high-occupancy vehicles?",
        choices: [
          "6 to 10 a.m. and 3 to 7 p.m.",
          "All day on weekdays",
          "7 to 9 a.m. and 4 to 6 p.m.",
          "Only during declared congestion events",
        ],
        correctIndex: 2,
        explanation:
          "7 to 9 a.m. inbound and 4 to 6 p.m. outbound. Outside those windows the HOV lane works as a general purpose lane, and it does at weekends.",
        context:
          "During the reserved hours the lane is for vehicles with two or more occupants - a baby in a car seat counts - plus buses with two or more aboard, motorcycles with a single rider, and emergency vehicles. Driving alone is not permitted even to overtake traffic in the adjacent lanes. A violation draws a $50 fine plus court costs.",
        trap:
          "A solo motorcyclist qualifies, and a solo car driver does not. The exception is written into the rule rather than being an oversight.",
        excerptKey: "interstate-hov-hours",
        sourceLabel: "Tennessee Driver License Manual - Section B-5, High Occupancy Vehicle Lanes",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s5_28",
        topic: "rules",
        question:
          "You intend to turn into a driveway just past an intersection. When should you signal?",
        choices: [
          "At least 50 feet before the intersection",
          "As you brake for the driveway",
          "Not at all, since it is not an intersection turn",
          "Once you are in the intersection",
        ],
        correctIndex: 3,
        explanation:
          "Wait until you are in the intersection. Signalling earlier tells other drivers you are turning at the intersection, and one of them may pull into your path.",
        context:
          "The manual pairs this with two other signalling misuses it wants you to avoid: never signal to wave a following driver past you, and never relay someone else's turn signal to the traffic behind you - your brake lights do that job. Tennessee's baseline is still to signal at least 50 feet before any turn or lane change.",
        trap:
          "The instruction contradicts the 50-foot rule on purpose. Where the turn is beyond an intersection, an early signal is worse than a late one.",
        excerptKey: "turn-signal-beyond-intersection",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Signaling a Turn",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_29",
        topic: "impairment",
        question:
          "Why does drugs and alcohol take up about a quarter of Tennessee's knowledge test?",
        choices: [
          "Because state law requires at least 25 percent of the questions to deal with that topic",
          "Because the manual devotes a quarter of its pages to it",
          "Because it is the topic candidates most often fail",
          "Because federal highway funding requires it",
        ],
        correctIndex: 0,
        explanation:
          "The manual states that by law at least a quarter of the knowledge test questions must deal with drugs and alcohol. It is a statutory requirement, not a drafting choice.",
        context:
          "The rest of the exam is described as roughly a quarter each on traffic signs and signals, safe driving principles, and rules of the road, drawn from Sections B and C of the manual. The same 25 percent statement appears in the Tennessee Motorcycle Operator Manual, so it applies across the state's knowledge tests rather than only the Class D one.",
        trap:
          "The requirement is a floor, not a cap. A quarter is the minimum share the topic must occupy.",
        excerptKey: "dui-25-percent",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Alcohol, Other Drugs and Driving",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_30",
        topic: "licensing",
        question:
          "Which of these ends a Tennessee road test immediately, whatever the rest of the drive was like?",
        choices: [
          "Stalling the engine twice",
          "Violating any traffic law during the test",
          "Failing to check the mirrors before moving off",
          "Parking more than 18 inches from the curb",
        ],
        correctIndex: 1,
        explanation:
          "Violating any traffic law is an automatic failure, alongside a dangerous action, contributing to a crash, and refusing to follow directions or cooperate.",
        context:
          "Other errors are scored rather than fatal, and the score sets how long you wait to retry: one to six errors is a pass; seven to nine means the next day; 10 to 12 means seven days; 13 to 15 means fourteen days; and 16 or more, or an automatic failure, means thirty days. No test may be repeated on the same day.",
        trap:
          "A rolling stop is a traffic law violation, so it is not a scored error at all - it ends the test on the spot.",
        excerptKey: "road-test-immediate-fail",
        sourceLabel: "Tennessee Driver License Manual - Section A-4, Causes for Immediate Failure",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_31",
        topic: "parking",
        question:
          "When may you legally park on the shoulder of a Tennessee interstate?",
        choices: [
          "Whenever you need to check directions",
          "For up to fifteen minutes",
          "Only in an emergency",
          "Only between sunrise and sunset",
        ],
        correctIndex: 2,
        explanation:
          "Only in an emergency. The same applies to any part of an entrance or exit ramp, paved or unpaved, unless the vehicle is disabled.",
        context:
          "Tennessee treats a stopped car on an interstate as extremely dangerous even on the shoulder. Do not stop in the travel lanes for any reason - being lost, letting a passenger out, or a mechanical problem - and keep moving until you can get clear of the roadway. Walking on the interstate is illegal on top of it.",
        trap:
          "Checking a map or answering a phone is not an emergency. The hands-free law's own answer to a phone is to find a parking lot, not a shoulder.",
        excerptKey: "park-interstate-shoulder",
        sourceLabel: "Tennessee Driver License Manual - Section B-5, Special Interstate Driving Instructions",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_32",
        topic: "rightOfWay",
        question:
          "A police officer waves you through a red light at a busy intersection. What do you do?",
        choices: [
          "Wait for the light to change - the signal has priority",
          "Follow the officer's direction",
          "Proceed only if you can do so without entering the intersection",
          "Sound your horn and wait for confirmation",
        ],
        correctIndex: 1,
        explanation:
          "An officer directing traffic outranks the signal. The manual says you must obey traffic officers at all times, and that they will override normal rules only when it is needed to keep traffic moving safely.",
        context:
          "The same applies to a flagger at a construction site, a highway maintenance worker or a school crossing guard directing traffic - you obey the person ahead of the sign or signal. The manual's own illustration is an officer holding traffic at a green light so a funeral procession can continue through a red.",
        trap:
          "It runs both ways. An officer can also stop you on a green, and the signal does not excuse you from that either.",
        excerptKey: "obey-officers",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Obeying Officers",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_33",
        topic: "sharing",
        question:
          "You are following a motorcycle onto a metal grated bridge. What should you expect?",
        choices: [
          "The motorcycle to wobble, and possibly to slow and move to the centre of the lane",
          "The motorcycle to accelerate across quickly",
          "No change - grating affects cars and motorcycles equally",
          "The rider to pull over and let you pass",
        ],
        correctIndex: 0,
        explanation:
          "Grating makes a motorcycle wobble far more than a car. An experienced rider slows and moves to the centre of the lane; an inexperienced one may be startled into a sudden change of direction.",
        context:
          "Tennessee lists several surfaces that affect riders disproportionately: wet and slippery roads, strong crosswinds on open highway and bridges, wind blasts from large fast-moving trucks, and railroad grade crossings, which usually cause a rider to slow and possibly zigzag to cross the rails at a better angle. The manual asks you to anticipate all of them and leave room.",
        trap:
          "The wobble looks like loss of control and is usually the rider managing the surface. Closing up to see what is happening removes the space they need.",
        excerptKey: "moto-grated-bridge",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Hazards that can affect Motorcyclists",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_34",
        topic: "emergencies",
        question:
          "A tornado is visible ahead while you are driving. What does Tennessee's manual advise?",
        choices: [
          "Drive at right angles to its path",
          "Shelter under an overpass",
          "Stay in the vehicle with the seat belt fastened",
          "Get out of the car, find a ditch or low-lying area, and lie face down",
        ],
        correctIndex: 3,
        explanation:
          "Do not try to outrun it. Leave the vehicle, get into a ditch or low-lying area, and lie face down to protect yourself from flying debris.",
        context:
          "The manual gives different answers for different severe weather. For hail or sleet, shelter under an overpass or bridge. For high winds, slow down and expect to correct steering, especially with a trailer or a high-sided vehicle. For flooding, turn around. The tornado instruction is the only one that asks you to abandon the car.",
        trap:
          "The overpass advice belongs to hail, not tornadoes. Mixing the two puts you in the worst possible place in a wind event.",
        excerptKey: "tornado-shelter",
        sourceLabel: "Tennessee Driver License Manual - Section B-6, Severe Thunderstorms or Tornados",
        sourceUrl: HB,
      },
      {
        id: "tn_s5_35",
        topic: "safety",
        question:
          "What does Tennessee's equipment law say about tinting material on a windshield?",
        choices: [
          "None may be affixed to the windshield of any motor vehicle",
          "It is allowed above the manufacturer's AS-1 line only",
          "It is allowed if it transmits at least 35 percent of visible light",
          "It is allowed on vehicles registered as multi-purpose",
        ],
        correctIndex: 0,
        explanation:
          "No tinting material at all on the windshield. The 35 percent light transmission figure applies to the other windows of a passenger car, not to the windshield.",
        context:
          "The road test vehicle inspection covers a run of equipment rules worth knowing: windshield and windows clear enough to see front, rear and both sides; two to four white headlights; two red tail lights and two red brake lights plus a rear plate light; two wipers unless one clears to within an inch of the far side; a muffler; doors that open from inside and out; a working speedometer; and bumpers 14 to 22 inches from the ground on a passenger car.",
        trap:
          "Multi-purpose vehicles get an exemption for windows behind the front seat, and none at all for the windshield. The exemption does not travel forward.",
        excerptKey: "vehicle-tint",
        sourceLabel: "Tennessee Driver License Manual - Section A-4, Pre-Trip Vehicle Inspection",
        sourceUrl: HB,
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Tennessee Exam Simulation",
    difficulty: "exam",
    description:
      "Weighted the way the Department of Safety describes its own exam: roughly a quarter each on signs and signals, safe driving, rules of the road, and the drugs and alcohol questions that state law requires. No hints.",
    questions: [
      {
        id: "tn_s6_01",
        topic: "signs",
        question:
          "When may a Tennessee driver disregard a traffic sign?",
        choices: [
          "When the road is empty",
          "When the sign has been damaged or obscured",
          "When a police officer or other traffic officer directs otherwise",
          "When following a vehicle that has already passed it",
        ],
        correctIndex: 2,
        explanation:
          "Signs must be obeyed at all times unless a policeman or other traffic officer directs you to do otherwise. That is the only exception the manual gives.",
        context:
          "A damaged or obscured sign is specifically not an excuse. The manual's example is a stop sign hidden by dirt, branches or snow: you should still know from the octagonal shape and red colour that you must stop. That is the whole reason Tennessee teaches the shape-and-colour system before it teaches individual signs.",
        trap:
          "A construction flagger counts as directing traffic. Their paddle overrides the posted signs in the work zone.",
        excerptKey: "signs-obey",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Traffic Signs",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_02",
        topic: "impairment",
        question:
          "In how many ways can a Tennessee driver commit the offence of driving under the influence?",
        choices: [
          "One - by registering .08 or above",
          "Two - by registering .08 or above, or by being under the influence of an intoxicant or drug",
          "Two - by registering .08 or above, or by refusing a test",
          "Three - .08, refusal, and driving without insurance",
        ],
        correctIndex: 1,
        explanation:
          "Two independent limbs. One is the .08 alcohol concentration. The other is being under the influence of any intoxicant, marijuana, narcotic or drug producing stimulating effects on the central nervous system, with no number attached.",
        context:
          "It is why a driver can register .00 and still be convicted, and why being below .08 clears nobody. The offence also reaches beyond public roads: it covers shopping centres, trailer parks, apartment complexes and anywhere else frequented by the public, and it applies to being in physical control of the vehicle, not only to driving it.",
        trap:
          "Refusing the test is a separate matter under implied consent, not a third way of committing DUI.",
        excerptKey: "dui-law-text",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Driving Under the Influence",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_03",
        topic: "rules",
        question:
          "How does Tennessee's manual define the moment a vehicle has actually stopped?",
        choices: [
          "When the speedometer reads under 3 mph",
          "When the driver has looked both ways",
          "When all motion has ceased and the car settles back",
          "When the front wheels are behind the stop line",
        ],
        correctIndex: 2,
        explanation:
          "Tennessee Code defines a stop as complete cessation of movement, and the manual's practical test is that you feel the car lurch forward once all motion has ceased.",
        context:
          "A rolling stop - slowing without ever fully stopping - is both a traffic ticket and an automatic road test failure. The manual gives four reasons it matters: a child stepping out expects you to stop; a full stop buys you a longer look; two rolling drivers at right angles will collide; and police and insurers will hold the driver who failed to stop liable.",
        trap:
          "Where you stop and whether you stopped are separate requirements. Getting the position right does not help if the wheels never stopped turning.",
        excerptKey: "stop-definition",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Rolling Stops",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s6_04",
        topic: "signals",
        question:
          "You are turning right on a red light where the crosswalk is unmarked. Where must the stop happen?",
        choices: [
          "At the point where you can see the cross street",
          "Level with the traffic signal",
          "Before you reach the unmarked crosswalk or stop line",
          "Anywhere before the intersection, as long as you stop",
        ],
        correctIndex: 2,
        explanation:
          "Before the crosswalk or stop line, marked or unmarked. Tennessee treats the unmarked crosswalk as though the paint were there.",
        context:
          "Having stopped, you yield to oncoming traffic, pedestrians and bicyclists before completing the turn. A red arrow forbids the turn altogether. The same complete-stop-then-yield sequence applies to the left turn on red that Tennessee allows from one one-way street onto another.",
        trap:
          "There is a crosswalk at every intersection in Tennessee whether or not it is painted. Rolling to where you can see means rolling into it.",
        excerptKey: "turn-right-on-red",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Turns Permitted on Red",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s6_05",
        topic: "safety",
        question:
          "How far ahead does Tennessee's interstate chapter tell you to scan for braking, entering and exiting traffic?",
        choices: [
          "15 to 20 seconds ahead",
          "2 to 3 seconds ahead",
          "About 100 yards ahead",
          "As far as your headlights reach",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen to twenty seconds ahead on the interstate. The defensive driving chapter uses a slightly shorter figure, 10 to 15 seconds, for general driving.",
        context:
          "Scanning is about spotting the problem before it becomes yours. Tennessee's supporting habits: keep your eyes moving rather than fixed, check the rearview about every ten seconds, look for clues like exhaust smoke, reversing lights and turned wheels, and look left, then right, then left again before entering any intersection.",
        trap:
          "Fifteen to twenty seconds at 70 mph is well over a quarter of a mile. It is a much longer look than most drivers think they are taking.",
        excerptKey: "interstate-scan-ahead",
        sourceLabel: "Tennessee Driver License Manual - Section B-5, Driving on the Interstate",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_06",
        topic: "impairment",
        question:
          "What is a fourth DUI conviction in Tennessee classified as?",
        choices: [
          "A Class A misdemeanour",
          "A Class E felony",
          "A Class C misdemeanour",
          "A Class B felony",
        ],
        correctIndex: 1,
        explanation:
          "The fourth or subsequent conviction is a Class E felony, carrying 150 days minimum, a $3,000 to $15,000 fine and at least five years of revocation.",
        context:
          "The escalation runs steeply. First: 48 hours minimum, $350 to $1,500, one year revoked. Second: 45 days minimum, $600 to $3,500, two years, vehicle subject to seizure. Third: 120 days minimum, $1,100 to $10,000, three to ten years. Fourth: the felony. Every step also carries the standard conditions - litter pick-up, treatment assessment and restitution.",
        trap:
          "The revocation on a fourth is described as five years to indefinite, so it is not a period you simply wait out.",
        excerptKey: "dui-fourth-felony",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, DUI Penalties",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_07",
        topic: "rightOfWay",
        question:
          "How does Tennessee's manual describe what right-of-way law actually does?",
        choices: [
          "It only says who must yield - it does not give anyone a right to go",
          "It gives the vehicle on the right an absolute priority",
          "It gives priority to whoever signals first",
          "It applies only at intersections without signals",
        ],
        correctIndex: 0,
        explanation:
          "The law does not give anyone the right-of-way; it says only who must yield. The manual's framing is that right-of-way is something to be given rather than taken.",
        context:
          "That framing carries a practical instruction: if another driver ignores the rules, give way anyway, because a driver must do everything possible to avoid a crash. It also means that having the right-of-way is never a defence to hitting someone - the duty to avoid the collision sits on both drivers.",
        trap:
          "'I had right of way' describes what the other driver should have done. It does not describe a permission you held.",
        excerptKey: "row-law-yield",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Right-of-Way Procedures",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_08",
        topic: "speed",
        question:
          "You are on a rural Tennessee interstate posted at 70 and the traffic around you is running at about 78. What speed is lawful for you?",
        choices: [
          "78, to stay with the flow of traffic",
          "75, within the usual tolerance",
          "70 - the posted limit",
          "65, since traffic is heavy",
        ],
        correctIndex: 2,
        explanation:
          "The posted limit binds you whatever everyone else is doing. Tennessee's manual tells you not to be lured into exceeding the posted speed to stay with the flow.",
        context:
          "The advice around it is about smoothness rather than speed: keep a constant pace with traffic, avoid unnecessary acceleration and braking, and if you are slower than the flow, use the right lane. Passing another vehicle never entitles you to exceed the limit either.",
        trap:
          "'Keeping pace with traffic' is safety advice about consistency, not a legal permission to match a speeding stream.",
        excerptKey: "speed-interstate-70",
        sourceLabel: "Tennessee Driver License Manual - Section B-5, Traffic Flow and Speed Control",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_09",
        topic: "sharing",
        question:
          "You meet a stopped school bus with red lights flashing on the opposite carriageway of a divided highway, separated by a grass median. What must you do?",
        choices: [
          "Stop, as you would on an undivided road",
          "Proceed with caution - you need not stop",
          "Stop only if children are visible",
          "Slow to 20 mph and continue",
        ],
        correctIndex: 1,
        explanation:
          "Where opposing roadways are divided by a median or barrier not suitable for vehicular traffic, drivers meeting the bus need not stop, though they should proceed with caution.",
        context:
          "The exception is narrow, and the manual closes the obvious loophole itself: a centre turn lane in the middle of a four-lane highway is not a barrier, it is a fifth lane suitable for vehicles. On that kind of road, drivers in both directions must stop. Passing a stopped school bus is a Class A misdemeanour with a fine of $250 to $1,000 and eight points.",
        trap:
          "A painted median or a two-way left turn lane does not qualify. The exception needs a physical median or barrier that vehicles cannot drive on.",
        excerptKey: "bus-turn-lane-not-barrier",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, The School Bus Stop Law",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s6_10",
        topic: "impairment",
        question:
          "You refuse a breath test after a DUI arrest in Tennessee. Can the police still obtain a blood sample?",
        choices: [
          "Yes - since 2012 officers may seek a search warrant for blood",
          "No - refusal ends the investigation",
          "Only if you have a prior DUI conviction",
          "Only with a judge physically present at the scene",
        ],
        correctIndex: 0,
        explanation:
          "The No Refusal law, passed in 2012, lets law enforcement seek search warrants for blood samples where impaired driving is suspected.",
        context:
          "It means a refusal usually buys nothing. The implied consent suspension of about twelve months attaches to the refusal itself, and the warrant can still produce the blood evidence for the DUI charge. Implied consent applies to everyone who drives in Tennessee, on any officer's reasonable grounds to believe you were driving impaired.",
        trap:
          "Refusing looks like a way of denying the state its evidence. In Tennessee it more often adds a suspension to a case that proceeds anyway.",
        excerptKey: "no-refusal-law",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, No Refusal Law",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_11",
        topic: "parking",
        question:
          "Your passenger runs into a shop while you wait alongside a car already parked at the curb. What is that in Tennessee?",
        choices: [
          "Lawful, as long as you stay with the vehicle",
          "Double parking, which is prohibited by law",
          "Lawful for up to two minutes",
          "Lawful if your hazard lights are on",
        ],
        correctIndex: 1,
        explanation:
          "Stopping on the traffic side of another parked vehicle is double parking, and Tennessee prohibits it by law.",
        context:
          "The prohibited-parking list is a mix of distances and places, and double parking sits in the places half alongside intersections, sidewalks, bridges, tunnels, fire lanes, driveway entrances, and reserved disabled spaces. The four-way flashers do not create an exception - the manual describes them as for a disabled vehicle or one that presents a traffic hazard, particularly after dark.",
        trap:
          "Staying at the wheel does not make it a legal stop. Being in the car changes nothing about the obstruction.",
        excerptKey: "park-double-parking",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Routine Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_12",
        topic: "signs",
        question:
          "Besides stop signs, where does Tennessee use red as a sign background?",
        choices: [
          "On school zone signs",
          "On all regulatory signs",
          "On advisory speed plates",
          "On DO NOT ENTER and WRONG WAY signs, ALL WAY plates, and interstate route markers",
        ],
        correctIndex: 3,
        explanation:
          "Red backgrounds are reserved for stop signs, the supplemental FOUR-WAY or ALL WAY plates, DO NOT ENTER, WRONG WAY, and the interstate route marker.",
        context:
          "Red also appears as a legend colour rather than a background - on yield signs, on parking prohibition signs, and as the circle-and-diagonal-bar symbol that means 'no' for whatever is shown behind it. Everything else has its own colour: white and black for regulatory signs, yellow for warnings, orange for construction, green for guidance, blue for services, brown for recreation.",
        trap:
          "DO NOT ENTER and WRONG WAY are the two red signs that matter most at night, because they are what a driver sees after entering an off-ramp the wrong way.",
        excerptKey: "color-red-use",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Sign Colors and Shapes",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s6_13",
        topic: "rules",
        question:
          "From when until when must headlights be on at night in Tennessee?",
        choices: [
          "From sunset until sunrise",
          "From dusk until dawn as judged by the driver",
          "From 30 minutes after sunset until 30 minutes before sunrise",
          "From one hour after sunset until one hour before sunrise",
        ],
        correctIndex: 2,
        explanation:
          "Thirty minutes after sunset to thirty minutes before sunrise. Two other triggers apply regardless of the clock.",
        context:
          "Those triggers are visibility and weather: headlights whenever daylight is not good enough to see people or vehicles clearly at 200 feet, and whenever rain, mist, snow or other precipitation keeps the wipers running. Two hundred feet is also the distance your headlights must be capable of showing a person on the highway.",
        trap:
          "The 200-foot figure does double duty - it is the visibility trigger for switching lights on, and the reach your headlights must have. Same number, two different rules.",
        excerptKey: "headlights-night",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Use of Headlights Required",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_14",
        topic: "impairment",
        question:
          "What penalty does Tennessee attach to a conviction for underage driving while impaired?",
        choices: [
          "A $500 fine and six points",
          "A 90-day suspension and a $100 fine",
          "Six months of ignition interlock",
          "Loss of licence for one year and a $250 fine",
        ],
        correctIndex: 3,
        explanation:
          "A year off the road and a $250 fine, sometimes with public service work attached. It applies to a driver at least 16 but not yet 21 at .02 BAC or under the influence.",
        context:
          "It is a distinct offence from adult DUI, with its own threshold and its own penalty, and it sits alongside two other under-21 rules: the year's loss of privileges for an alcohol purchase or possession conviction at 18 to 20, and the year-or-until-17 suspension for a 13- to 17-year-old caught with alcohol or drugs.",
        trap:
          "Young drivers are more affected at low BACs, not less. The manual notes their crash risk between .01 and .08 is far higher than an older driver's, because of low tolerance and limited experience.",
        excerptKey: "under21-penalty",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Under 21 BAC",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_15",
        topic: "emergencies",
        question:
          "On which roads does Tennessee's Move Over Law apply?",
        choices: [
          "Roads with at least four lanes and at least two running the same direction as you",
          "Every public road in the state",
          "Interstates only",
          "Roads with a posted limit above 45 mph",
        ],
        correctIndex: 0,
        explanation:
          "It is a multi-lane rule. The manual describes it as applying on interstates and multi-lane highways with four or more lanes and at least two travelling your way.",
        context:
          "On a two-lane road there is no non-adjacent lane to move into, which is why the duty is framed around multi-lane roads. Where a lane change is impossible or unsafe even on a qualifying road, the alternative is to proceed with due caution at a reduced, safe speed. It applies to stationary vehicles on the right shoulder, the left shoulder or the median.",
        trap:
          "The manual states the scope twice with slightly different wording - once as 'two or more lanes moving in the same direction' and once as 'four or more lanes with not less than two proceeding in the same direction'. The four-lane framing is the one to carry.",
        excerptKey: "move-over-four-lanes",
        sourceLabel: "Tennessee Driver License Manual - Section B-5, Move Over Law",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_16",
        topic: "signals",
        question: "A traffic signal is flashing yellow. What does it require?",
        choices: [
          "Slow down and proceed through the intersection with caution",
          "A complete stop before proceeding",
          "Treat the intersection as an all-way stop",
          "Stop only if traffic is approaching on the cross street",
        ],
        correctIndex: 0,
        explanation:
          "Slow down and proceed with caution. It is the only one of Tennessee's flashing signals that does not require you to stop.",
        context:
          "The set is worth holding together. Flashing yellow: slow and proceed with caution. Flashing red: complete stop, same as a stop sign. Signal dead or malfunctioning: treat as an all-way stop under state law. Steady yellow: the red is coming in at least three seconds, stop if you safely can, and continue if you are already inside the intersection.",
        trap:
          "Flashing yellow is not the same as a signal that has failed. One lets you keep moving; the other turns the intersection into a four-way stop.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_17",
        topic: "impairment",
        question: "Which driving ability does alcohol impair first?",
        choices: [
          "Night vision",
          "Reaction time",
          "Judgment",
          "Hand-eye coordination",
        ],
        correctIndex: 2,
        explanation:
          "Judgment goes first, which is what makes the rest of it dangerous - the ability that would tell you to stop is the first one lost.",
        context:
          "Vision follows closely: alcohol halves your ability to see clearly at night, cuts side vision by about 30 percent at .05, worsens glare and glare recovery, and disrupts depth perception because each eye receives a slightly different image. Reaction and coordination begin to degrade from around .02, and the manual notes measurable impairment of judgment and vision at .03 to .04.",
        trap:
          "This is why 'I'll decide when I've had enough' does not work. The manual advises deciding not to drive before the first drink, precisely because judgment is the first casualty.",
        excerptKey: "alcohol-judgment-first",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Did You Know?",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_18",
        topic: "licensing",
        question:
          "What does a Tennessee driver need for the Intermediate Unrestricted licence?",
        choices: [
          "To be 16 and have held the permit a year",
          "To be 18 and pass a second road test",
          "To be 17 and pass a second knowledge test",
          "To be 17 and have held the Intermediate Restricted licence for a year",
        ],
        correctIndex: 3,
        explanation:
          "Seventeen years old and a full year on the Intermediate Restricted licence. No additional tests are required.",
        context:
          "Three things add 90 days to that year: six or more points on the record, having been at fault in a crash, or a second seat belt conviction. A second moving violation additionally requires a certified driver education course before the unrestricted licence is issued. The word 'Intermediate' stays on the licence until the driver moves to a regular Class D at 18, or on graduating high school or earning a GED.",
        trap:
          "The Level 3 licence still says 'Intermediate' on its face. What changes is that the curfew and the passenger cap fall away.",
        excerptKey: "gdl-level3-web",
        sourceLabel: "Tennessee Department of Safety - Driver License Information",
        sourceUrl: GDL,
      },
      {
        id: "tn_s6_19",
        topic: "sharing",
        question:
          "Where does Tennessee say a crosswalk exists?",
        choices: [
          "Only where lines are painted on the road",
          "Only at signalised intersections",
          "At every intersection, whether or not it is marked",
          "Wherever a pedestrian chooses to cross",
        ],
        correctIndex: 2,
        explanation:
          "There is a crosswalk at every intersection, marked or not. Painted lines encourage people to cross in particular places; they do not create the legal crossing.",
        context:
          "Crosswalks can also be mid-block, and the manual asks you not to stop with any part of your vehicle over one, because that forces people around your car into traffic. Beyond crosswalks, you yield to pedestrians on the sidewalk when crossing it to enter or leave a driveway, garage, alley or parking lot - and driving on a sidewalk except to cross it is illegal.",
        trap:
          "An unmarked crossing at a quiet intersection carries the same duty as a painted one at a busy junction.",
        excerptKey: "ped-crosswalk-every-intersection",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Sharing the Road with Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_20",
        topic: "speed",
        question:
          "You are driving slowly on a two-lane road and five vehicles have queued behind you. What does Tennessee require?",
        choices: [
          "Maintain your speed - they may pass when it is safe",
          "Turn off or pull off the roadway as soon as you can do so safely",
          "Signal them past one at a time",
          "Increase speed to the posted limit",
        ],
        correctIndex: 1,
        explanation:
          "Five or more vehicles lined up behind you means turning off or pulling off the road as soon as you can do it safely.",
        context:
          "The rule sits with Tennessee's other slow-driving provisions: you are a slow-moving vehicle at 10 mph or more below the lawful maximum, driving below a posted minimum is unlawful in normal conditions, and even without a posted minimum it is against the law to drive so slowly that you block traffic. The manual's line is that slower is not always safer.",
        trap:
          "Signalling drivers past is one of the misuses of a turn signal the manual explicitly warns against. Pull off instead.",
        excerptKey: "slow-five-vehicles",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Slow-Moving Vehicles",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s6_21",
        topic: "impairment",
        question:
          "From what blood alcohol concentration does Tennessee's manual say reaction and coordination begin to suffer?",
        choices: [".08 percent", ".02 percent", ".05 percent", ".01 percent"],
        correctIndex: 1,
        explanation:
          "From as low as .02 percent - a quarter of the legal limit for an adult, and the exact threshold at which an under-21 driver commits an offence.",
        context:
          "The manual builds a picture of graduated damage rather than a cliff at .08. Reaction and coordination from .02. Judgment and vision measurably impaired at .03 and .04, especially in young drinkers. Side vision down about 30 percent at .05. And at .10, the crash risk is around seven times a sober driver's; at .15 it is twenty-five times.",
        trap:
          "The under-21 threshold is not an arbitrarily strict number. It is set where the manual says impairment actually starts.",
        excerptKey: "alcohol-reaction-02",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Reaction Time and Coordination",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_22",
        topic: "safety",
        question:
          "May a five-year-old ride in the open bed of a pickup truck in Tennessee?",
        choices: [
          "Yes, if an adult rides with them",
          "Yes, on roads with a limit of 35 mph or less",
          "No - it is illegal for any child under six",
          "Yes, if they are seated and holding a fixed handle",
        ],
        correctIndex: 2,
        explanation:
          "Under six, never. Between six and 12 it is unlawful on any state or interstate highway, and cities and counties may extend that ban to their own roads.",
        context:
          "Tennessee allows two exceptions and both are narrow: a child being carried in the bed as part of an organised parade, procession or ceremonial event, with the vehicle kept under 20 mph, and a child involved in agricultural activities. Everything else falls under the general ban.",
        trap:
          "The 6-to-12 ban is written around state and interstate highways, so the road type matters - and a local ordinance may close that gap anyway.",
        excerptKey: "pickup-bed-under-6",
        sourceLabel: "Tennessee Driver License Manual - Section B-2, Other Child Passenger Protection Laws",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_23",
        topic: "rules",
        question:
          "A flagger at a Tennessee work site holds up a paddle reading STOP while the signal ahead of you is green. What do you do?",
        choices: [
          "Stop - you must obey the person directing traffic",
          "Proceed, because the signal governs",
          "Stop only if construction equipment is crossing",
          "Proceed slowly past the flagger",
        ],
        correctIndex: 0,
        explanation:
          "You obey the flagger. Tennessee requires drivers to follow directions from law enforcement, construction personnel and school crossing guards even where those directions differ from the lights and signs.",
        context:
          "Flaggers use paddles reading STOP on one side and SLOW on the other, or red flags in emergencies, and wear fluorescent orange or yellow-green. The rest of the work zone rules go with it: merge early rather than at the last moment, keep your lights on, do not change lanes inside the zone unless instructed, and keep going until you see the END ROAD WORK sign.",
        trap:
          "This is the same principle as an officer waving you through a red. The person directing traffic outranks the device.",
        excerptKey: "work-zone-flaggers",
        sourceLabel: "Tennessee Driver License Manual - Section B-3, Work Area Signs",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_24",
        topic: "impairment",
        question:
          "An impaired driver in Tennessee causes a crash in which another person dies. What charge does the manual name?",
        choices: [
          "Vehicular homicide",
          "Reckless endangerment",
          "Aggravated assault",
          "Involuntary manslaughter",
        ],
        correctIndex: 0,
        explanation:
          "Vehicular homicide, carrying a fine and a prison sentence. Where the crash causes injury rather than death, the charge named is aggravated assault.",
        context:
          "These sit outside the DUI penalty table entirely - they are separate criminal charges arising from the same driving. A licence can also be revoked or suspended for manslaughter or vehicular homicide involving a vehicle, for leaving the scene of an injury or fatal crash, for any felony involving a vehicle, and for two reckless driving convictions inside twelve months.",
        trap:
          "Aggravated assault is the injury charge, not a lesser version of the fatal one. Both can follow from a single DUI crash.",
        excerptKey: "dui-vehicular-homicide",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Consequences of a DUI Arrest",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_25",
        topic: "signs",
        question:
          "You see orange signs and orange cones ahead on a Tennessee highway. What is the standing instruction?",
        choices: [
          "Change lanes immediately",
          "Switch on your hazard flashers",
          "Sound your horn to alert workers",
          "Road work - slow down",
        ],
        correctIndex: 3,
        explanation:
          "Orange always means road work, slow down. Every temporary work zone sign in Tennessee has an orange background with black letters or symbols.",
        context:
          "Work zone signs sit on the right, or on both sides where the road is divided, and tell you what you are about to meet and how far ahead it is. Merge as soon as you see the warning rather than at the taper - the manual says you can be ticketed for being a last-chance merger - and keep obeying the signing until you pass the END ROAD WORK sign.",
        trap:
          "Not seeing workers does not mean the zone is inactive. Line painting, patching and mowing operations are mobile, so the crew may be further along than the first sign.",
        excerptKey: "color-orange",
        sourceLabel: "Tennessee Driver License Manual - Chapter C-3, Sharing the Road with Highway Work Zones",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s6_26",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping centre car park onto a main road. Who has priority?",
        choices: [
          "You, once your front wheels are on the roadway",
          "Whichever driver signals first",
          "Traffic approaching from your left only",
          "All vehicles already on the main road",
        ],
        correctIndex: 3,
        explanation:
          "Everything already on the main road goes first. The same applies leaving a driveway, an alley, or a roadside position.",
        context:
          "Tennessee treats a car park entrance, a driveway and an alley as intersections for the purposes of turning and yielding, which also means your turn signal rules apply there. On the way out you cross the sidewalk, so pedestrians on it have the right-of-way before you even reach the road.",
        trap:
          "Edging out to force a gap does not transfer priority. Until you are established on the main road, everything on it has right-of-way over you.",
        excerptKey: "row-driveway",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Yield to Oncoming Traffic",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "tn_s6_27",
        topic: "licensing",
        question:
          "You fail the Tennessee knowledge test at a Driver Service Centre. When can you try again?",
        choices: [
          "After a mandatory one-day wait",
          "The same day, at a different centre",
          "After seven days",
          "After thirty days",
        ],
        correctIndex: 0,
        explanation:
          "A mandatory one-day wait, and it applies at every centre - failures are keyed into the system so all locations see them.",
        context:
          "The same one-day rule applies between later attempts, and no test may be repeated on the same day. There is a $2 application fee each time you take a test and fail. Cheating is treated far more harshly: an automatic failure and no retest for 30 days, with electronic devices, notes and talking all counted as cheating.",
        trap:
          "Driving to another centre does not reset anything. Tennessee records the failure centrally for exactly that reason.",
        excerptKey: "exam-no-same-day",
        sourceLabel: "Tennessee Driver License Manual - Section A-4, When You Don't Pass the Knowledge Test",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_28",
        topic: "impairment",
        question:
          "About how long does Tennessee's manual say it takes to cancel the intoxicating effects of three drinks?",
        choices: [
          "About one hour", "About ninety minutes", "About two hours", "About three hours",
        ],
        correctIndex: 3,
        explanation:
          "About three hours - one hour per drink, because the liver clears roughly one an hour and nothing accelerates it.",
        context:
          "The manual pairs the arithmetic with a warning: reliable research shows two or three drinks in three hours or less impairs most people's driving. The practical answer it offers is the designated driver, agreed before anyone starts drinking, since alcohol degrades judgment first and the decision gets harder after one or two.",
        trap:
          "The clock starts from the last drink, not the first. Three drinks finished at midnight are not cleared at one in the morning.",
        excerptKey: "alcohol-one-hour",
        sourceLabel: "Tennessee Driver License Manual - Section B-7, Did You Know?",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_29",
        topic: "safety",
        question:
          "Where does Tennessee's manual say children aged 12 and under are safest in a vehicle with air bags?",
        choices: [
          "In the front seat with the seat pushed back",
          "In the front seat if properly belted",
          "Anywhere, provided they are restrained",
          "In the back seat",
        ],
        correctIndex: 3,
        explanation:
          "The back seat, and the manual's phrase for it is 'the back is where it's at' for children 12 and under - regardless of whether the vehicle has a passenger air bag.",
        context:
          "A rear-facing infant seat should never go in front of an active passenger air bag. Where a child must ride in front, as in some pickups, the seat goes as far back as it will travel and the child is properly buckled. For adults, the guidance is 10 to 12 inches between chest and air bag module, with the steering wheel tilted level rather than up at the face.",
        trap:
          "Air bags are supplementary protection for adults and a serious hazard for small children. Being properly belted in the front does not resolve it.",
        excerptKey: "airbag-back-seat",
        sourceLabel: "Tennessee Driver License Manual - Section B-2, Air Bags and Children",
        sourceUrl: HB,
      },
      {
        id: "tn_s6_30",
        topic: "rules",
        question:
          "You are hauling a load of loose material in an open trailer on a Tennessee highway. What does the law require?",
        choices: [
          "Nothing, provided the load sits below the sides",
          "It must be enclosed or fully covered by a tarpaulin",
          "It must be weighed before the trip",
          "It must be marked with a red flag",
        ],
        correctIndex: 1,
        explanation:
          "Any vehicle carrying litter or material likely to fall or blow onto the highway must have it in an enclosed space or fully covered by a tarpaulin.",
        context:
          "Tennessee puts this in its littering section, and the reasoning is safety as much as tidiness - material shed on a highway is a hazard to everyone behind you. Littering fines start at $50 and reach $3,000 with the amount, and a conviction can bring up to 40 hours of public service picking litter up.",
        trap:
          "'Likely to fall or be blown off' is the test, not whether the load is above the sides. Light material below the rail still needs covering.",
        excerptKey: "litter-cover-load",
        sourceLabel: "Tennessee Driver License Manual - Section B-4, Littering",
        sourceUrl: HB,
      },
    ],
  },
];
