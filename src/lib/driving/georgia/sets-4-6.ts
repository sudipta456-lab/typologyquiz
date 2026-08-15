import type { DrivingTestSet } from "../types";

// Same sourcing rules as sets 1-3: every fact checked against the Georgia
// Department of Driver Services Driver's Manual (2023-2024) as published on
// dds.georgia.gov, plus DDS's points schedule and teen-driving pages. Questions,
// explanations, context and trap notes are original.

const B = "https://dds.georgia.gov/";
const SIGNS = B + "section-7-signs-signals-markings";
const SIGNS2 = B + "section-7-continued";
const WARN = B + "section-7-continued-warning-signs";
const WARN2 = B + "section-7-continued-more-warning-signs";
const GUIDE = B + "section-7-continued-guide-signs";
const CONSTR = B + "section-7-continued-construction-maintenance-warning-signs";
const SIGNALS = B + "section-7-continued-traffic-signals-and-signs";
const SIGNALS2 = B + "section-7-more-signals-signs";
const MARKINGS = B + "section-7-continued-other-signs-signals";
const LAWS = B + "section-5-traffic-laws";
const ROW = B + "section-5-continued";
const TURNS = B + "section-5-turning-signals-parallel-parking";
const KEEPRIGHT = B + "section-5-continued-keep-right-except-pass";
const OTHER = B + "section-5-continued-other-laws";
const TEEN = B + "section-6-continued";
const TEENFAQ = B + "teen-driving-laws-faqs";
const TESTING = B + "section-3-testing-information";
const TESTING2 = B + "section-3-continued";
const SAFETY3 = B + "section-8-continued-more-safety-guidelines-pt2";
const SHARE = B + "section-9-continued";
const SHARE2 = B + "section-9-continued-sharing-road";
const CRASH = B + "section-11-crashes";
const LOSING = B + "section-10-continued";
const LOSING2 = B + "section-10-continued-safety-responsibility-law";
const PDF = B + "document/publication/ga-drivers-manual/download";

export const georgiaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Georgia in Detail",
    difficulty: "medium",
    description:
      "Thirty-five questions on the rules that separate a driver who has read the manual from one who has skimmed it - pavement markings, work zones, expressway discipline and the Georgia-specific laws that surprise people who learned to drive elsewhere.",
    questions: [
      {
        id: "ga_s4_01",
        topic: "signs",
        question: "What does an octagonal sign mean, and what has to happen before you move off again?",
        choices: [
          "Stop, then go once all pedestrians have finished crossing your side of the road and you have yielded to closely approaching traffic",
          "Stop, then go as soon as your wheels have stopped turning",
          "Yield, then go when the road is clear",
          "Stop, then go once the vehicle behind you has also stopped",
        ],
        correctIndex: 0,
        explanation:
          "The octagon always means stop. You may not start again until pedestrians have finished crossing on your side of the roadway and you have yielded the right of way to traffic approaching closely.",
        context:
          "Georgia gives the stopping point a fallback order: the marked stop line, otherwise the crosswalk on your side, otherwise the point where you can best see oncoming traffic. Coming to a halt is only half the obligation - the yield that follows is the other half, and it is where rolling stops become collisions.",
        trap:
          "Counting the stop as complete the moment the wheels stop ignores the yield that the manual attaches to it.",
        excerptKey: "sign-octagon",
        sourceLabel: "Georgia Driver's Manual - Shapes of Signs",
        sourceUrl: SIGNS,
      },
      {
        id: "ga_s4_02",
        topic: "rules",
        question:
          "Diagonal yellow lines form a triangle on the pavement where the road narrows. How should you treat that area?",
        choices: [
          "Treat it as a parking area outside peak hours",
          "Keep to the right of the markings",
          "Drive through it to keep your lane position",
          "Use it only to overtake slower vehicles",
        ],
        correctIndex: 1,
        explanation:
          "That is traffic striping, marking a narrowing road or an obstruction. Georgia's instruction is simply to keep to the right of the markings.",
        context:
          "The same keep-right instinct appears on signs, where the KEEP RIGHT regulatory sign sends you around the correct side of a median or obstruction. Striping is the pavement version, and it usually appears where something physical - a barrier, an island, a bridge pier - sits where a lane used to be.",
        trap:
          "Painted areas look like usable road, which is why drivers cut across them and meet the object the paint was warning about.",
        excerptKey: "traffic-striping",
        sourceLabel: "Georgia Driver's Manual - Traffic Striping",
        sourceUrl: MARKINGS,
      },
      {
        id: "ga_s4_03",
        topic: "licensing",
        question:
          "A Georgia driver has held a Class D licence for eight months. How many non-family passengers under 21 may ride with them?",
        choices: [
          "One",
          "Two",
          "Three",
          "None until the full year is up",
        ],
        correctIndex: 0,
        explanation:
          "During the second six months after issuance, exactly one passenger under 21 who is not immediate family may ride in the vehicle.",
        context:
          "The sequence runs in three stages: immediate family only for the first six months, one non-family passenger under 21 for the second six months, and up to three non-family passengers under 21 after both periods have passed. Immediate family covers parents and step-parents, grandparents, siblings and step-siblings, children, and anyone else living at the driver's address.",
        trap:
          "Jumping to three passengers at the six-month mark is the usual error - three is the stage after a full year, not after six months.",
        commonlyMissed: true,
        excerptKey: "class-d-second-six-months",
        sourceLabel: "Georgia Driver's Manual - Conditions of a Class D Provisional License",
        sourceUrl: TEEN,
      },
      {
        id: "ga_s4_04",
        topic: "signs",
        question: "A yellow diamond shows a bridge symbol with an arrow passing beneath it and a height marked in feet. What must you check?",
        choices: [
          "Whether the lane beneath the bridge is one-way",
          "Whether your vehicle or cargo exceeds the height shown",
          "Whether the bridge is weight-restricted for your axle load",
          "Whether the underpass floods after rain",
        ],
        correctIndex: 1,
        explanation:
          "It is a low clearance warning. If your vehicle or its cargo is taller than the figure shown, you do not enter.",
        context:
          "Height, width and surface each get their own warning in Georgia. Low clearance is height. Narrow bridge tells you the structure has room for two lanes and no more. Soft shoulder tells you the ground beside the pavement will not support you except in an emergency.",
        trap:
          "The figure is a hard limit for the load as well as the vehicle - a roof rack or a raised bed is what usually makes the difference.",
        excerptKey: "sign-low-clearance",
        sourceLabel: "Georgia Driver's Manual - Warning Signs",
        sourceUrl: WARN,
      },
      {
        id: "ga_s4_05",
        topic: "impairment",
        question:
          "Georgia's Hands Free Law carries escalating penalties. What does a third or later conviction bring?",
        choices: [
          "Six points and a mandatory suspension",
          "One point and a fine of up to $50",
          "Two points and a fine of up to $100",
          "Three points and a fine of up to $150",
        ],
        correctIndex: 3,
        explanation:
          "A third or subsequent conviction brings three points and a fine of no more than $150. The first is one point and up to $50, the second is two points and up to $100.",
        context:
          "Points matter more than the money for younger drivers. A driver under 18 is suspended at four points accumulated in any 12-month period, so three hands-free convictions plus almost anything else crosses the line. Any driver is suspended at 15 points within 24 months.",
        trap:
          "The escalation is by conviction, not by calendar year, so the counter does not helpfully reset each January.",
        excerptKey: "hands-free-penalties",
        sourceLabel: "Georgia Driver's Manual - Hands Free Georgia Law",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s4_06",
        topic: "rightOfWay",
        question:
          "Four cars arrive at a four-way stop, two of them at the same moment. How does Georgia resolve it?",
        choices: [
          "Everyone yields to pedestrians first, then vehicles go in order of arrival, and a tie goes to the vehicle on the right",
          "The vehicle that stopped most completely has priority",
          "Vehicles going straight always precede vehicles turning",
          "The vehicle turning right goes first in every case",
        ],
        correctIndex: 0,
        explanation:
          "Pedestrians come first. After that it is first to arrive, first to proceed, and when two vehicles reach the intersection at approximately the same time you yield to the vehicle on your right.",
        context:
          "Georgia adds a piece of practical advice to the rule: take your turn when it comes rather than waving people through and delaying traffic, but if another driver takes your turn, let them go even when you had the right of way. Care, courtesy and common sense are the manual's stated standard.",
        trap:
          "'Straight beats turning' is a rule from some other jurisdictions. Georgia's tie-break is arrival order, then the right.",
        excerptKey: "row-four-way-stop",
        sourceLabel: "Georgia Driver's Manual - Laws Governing Right-of-Way",
        sourceUrl: ROW,
      },
      {
        id: "ga_s4_07",
        topic: "safety",
        question: "What are the No-Zones around a commercial truck or bus?",
        choices: [
          "Rest areas restricted to commercial vehicles",
          "The blind spots on both sides, directly behind and directly in front, where your car disappears from the driver's view",
          "The lanes a truck may not legally use",
          "Areas where trucks are prohibited from stopping",
        ],
        correctIndex: 1,
        explanation:
          "No-Zones are the danger areas around trucks and buses - the two side zones, the rear zone and the front zone - where your vehicle vanishes from the driver's view.",
        context:
          "The side zones are far larger than a car's blind spots and the right-hand one is the worst, because truck drivers must swing wide to turn right. Trucks have no rear-view mirror at all, so directly behind is a true blind area. To clear the front No-Zone, wait until you can see the whole front of the truck in your mirror before pulling in.",
        trap:
          "If you cannot see the driver's face in the truck's side mirror, the driver cannot see you - that is the working test, not your own sense of being visible.",
        excerptKey: "no-zones",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With Commercial Motor Vehicles",
        sourceUrl: SHARE2,
      },
      {
        id: "ga_s4_08",
        topic: "signals",
        question: "A steady yellow light appears as you approach an intersection. What is it telling you?",
        choices: [
          "Speed up to clear the intersection before red",
          "The signal is about to turn green",
          "Proceed with caution; the yellow phase carries no obligation",
          "The light is changing from green to red - slow down and prepare to stop",
        ],
        correctIndex: 3,
        explanation:
          "Steady yellow warns that the light is going from green to red. The instruction is to slow down and prepare to stop, not to accelerate through.",
        context:
          "Yellow behaves differently from a yellow arrow, which appears after a green arrow and tells you to clear the intersection. And a flashing yellow signal is different again - it means slow down and use caution before proceeding, with no obligation to stop at all.",
        trap:
          "Treating yellow as a licence to accelerate is how drivers arrive in an intersection on red, which is a three-point offence and a common cause of side impacts.",
        excerptKey: "signal-yellow",
        sourceLabel: "Georgia Driver's Manual - Traffic Signals and Signs",
        sourceUrl: SIGNALS,
      },
      {
        id: "ga_s4_09",
        topic: "parking",
        question: "Your car breaks down on a Georgia highway and cannot be moved. What does the law expect?",
        choices: [
          "Make every practical effort to get it off the highway, leaving free passage and a clear view of it for 200 feet in each direction",
          "Move it to the centre median where it will be out of the traffic lanes",
          "Leave it where it is with the hazard lights on until a tow arrives",
          "Leave it and report it within 24 hours",
        ],
        correctIndex: 0,
        explanation:
          "Georgia requires every practical effort to park a disabled vehicle off the highway, and where it must stay, free passage and a clear view of the vehicle for 200 feet in each direction.",
        context:
          "The area between the roadways of a divided highway is on the list of places where stopping is prohibited at any time, so the median is not a refuge. On an expressway, stopping on the shoulder is allowed only in a genuine emergency; if you must stop, raise the hood and switch on the hazard lights, and do not walk along the expressway looking for help.",
        trap:
          "The median looks like the safest place to leave a car and is one of the places Georgia explicitly forbids.",
        excerptKey: "parking-on-highway",
        sourceLabel: "Georgia Driver's Manual - Stopping, Standing, and Parking",
        sourceUrl: TURNS,
      },
      {
        id: "ga_s4_10",
        topic: "signs",
        question: "A blue rectangular sign with a white symbol appears beside a Georgia interstate. What is it for?",
        choices: [
          "A warning about conditions ahead",
          "Directions to a service facility such as food, fuel or lodging",
          "A construction detour",
          "A regulatory instruction that applies from this point",
        ],
        correctIndex: 1,
        explanation:
          "Blue and white signs point you toward motorist services - food, fuel, lodging, hospitals, rest areas and similar facilities.",
        context:
          "Georgia's colour vocabulary is worth having whole: red for stop and prohibition, yellow for warning, fluorescent yellow-green for high-emphasis school and pedestrian warnings, orange for construction, blue and white for services, and black on white for regulatory instructions. None of the blue signs carries a legal obligation.",
        trap:
          "Blue is easy to confuse with the green destination signs. Green routes you to places; blue routes you to services.",
        excerptKey: "construction-signs-orange",
        sourceLabel: "Georgia Driver's Manual - Service Signs",
        sourceUrl: CONSTR,
      },
      {
        id: "ga_s4_11",
        topic: "rules",
        question:
          "You are on a multi-lane divided highway when a work vehicle with flashing amber lights pulls into your path at about 5 mph. What does Georgia require?",
        choices: [
          "Maintain your speed - work vehicles must yield to through traffic",
          "Stop completely until the vehicle leaves the roadway",
          "Slow down, yield the right of way, and follow any directions the vehicle displays",
          "Sound your horn and pass on the right",
        ],
        correctIndex: 2,
        explanation:
          "You must yield the right of way to work vehicles and heavy equipment displaying flashing or revolving amber lights, and reduce your speed as you approach any work zone where they are operating.",
        context:
          "Mobile work happens without closing a lane at all - pavement maintenance, debris removal, paint striping and utility work all move with traffic at very slow speeds and may stop in the roadway. These vehicles often carry flashing arrows directing you to merge left or right, and those directions are to be followed.",
        trap:
          "A vehicle doing 5 mph in a 65 mph lane looks like an obstruction rather than something with priority. Georgia gives it the right of way regardless.",
        excerptKey: "work-zone-amber",
        sourceLabel: "Georgia Driver's Manual - Yield to Mobile Work Vehicles",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s4_12",
        topic: "safety",
        question: "What restriction applies to HOV lanes in Georgia?",
        choices: [
          "They are open to any vehicle outside the posted restriction hours only if it is a truck",
          "They are reserved for commercial vehicles",
          "They are open to all vehicles carrying a Peach Pass",
          "They are reserved for vehicles with more than one occupant, buses, motorcycles and vehicles with Alternative Fuel Vehicle plates",
        ],
        correctIndex: 3,
        explanation:
          "HOV lanes are restricted to vehicles carrying more than one occupant, plus buses, motorcycles and vehicles bearing Alternative Fuel Vehicle plates. They are marked with a diamond and the restriction hours are posted.",
        context:
          "Express Lanes are a separate arrangement. The I-85 Express Lanes are High Occupancy Toll lanes where registered transit, carpools of three or more, motorcycles, emergency vehicles and AFVs travel free, while everyone else pays. On the reversible I-75 South Metro Express Lanes every vehicle pays, and both require a registered Peach Pass.",
        trap:
          "HOV penalties escalate: up to $75 for a first offence, then $100, then $150, and a fourth or later offence adds a point to your record.",
        excerptKey: "hov-lanes",
        sourceLabel: "Georgia Driver's Manual - HOV Lanes",
        sourceUrl: SAFETY3,
      },
      {
        id: "ga_s4_13",
        topic: "signs",
        question:
          "Two solid yellow lines mark the centre of a road with four lanes carrying traffic in opposite directions. When may you cross them?",
        choices: [
          "Only to make a left turn into or from an alley, private road, driveway or another street",
          "Whenever the oncoming lanes are empty",
          "Only to pass a vehicle travelling below the speed limit",
          "Never, under any circumstances",
        ],
        correctIndex: 0,
        explanation:
          "Double solid yellow lines may be crossed only to make a left turn into or out of an alley, private road, driveway or another street.",
        context:
          "The general rule on a multi-lane, two-way highway is that you never drive to the left of the centre line except when making that left turn, or when a signal or sign authorises it. Georgia also asks you to stay in the right lane on a multi-lane road except when passing vehicles travelling in the same direction.",
        trap:
          "An empty oncoming lane changes nothing. Double solid yellow means passing is unsafe in both directions, whatever the road looks like at that moment.",
        excerptKey: "four-or-more-lanes",
        sourceLabel: "Georgia Driver's Manual - Lane Lines",
        sourceUrl: MARKINGS,
      },
      {
        id: "ga_s4_14",
        topic: "emergencies",
        question:
          "You stop to help at a crash and give emergency care to an injured person. What is your civil exposure in Georgia?",
        choices: [
          "You are liable only if you moved the victim",
          "Georgia's Good Samaritan Law holds you harmless for civil damages arising from rendering emergency care",
          "You are liable for any injury your assistance causes",
          "You are liable unless you hold a medical qualification",
        ],
        correctIndex: 1,
        explanation:
          "Georgia has a Good Samaritan Law holding any person harmless for civil damages arising from an act or omission in rendering emergency care.",
        context:
          "The protection does not make untrained handling a good idea. The manual is clear that unskilled handling can cause further and more severe injury, that you should not move or lift a victim unless it is absolutely necessary, and that if a victim has been moved you should try to keep them in the position they were found in until help arrives.",
        trap:
          "Assuming you must be medically qualified to be covered is what stops people helping. The protection is not restricted to professionals.",
        excerptKey: "good-samaritan",
        sourceLabel: "Georgia Driver's Manual - Aiding the Injured",
        sourceUrl: CRASH,
      },
      {
        id: "ga_s4_15",
        topic: "speed",
        question:
          "A Georgia road has no speed limit signs and does not fall into any of the specific categories the manual lists. What is the maximum?",
        choices: [
          "45 mph",
          "50 mph",
          "55 mph",
          "60 mph",
        ],
        correctIndex: 2,
        explanation:
          "55 mph is Georgia's catch-all. It applies in all areas that are not an urban or residential district, an unpaved county road, an urban interstate, a multi-lane divided highway or a rural interstate.",
        context:
          "The full set runs 30 in an urban or residential district, 35 on an unpaved county road, 55 in all other areas, 65 on an urban interstate or a multi-lane divided highway, and 70 on a rural interstate. All of these are ceilings that a posted sign can move in either direction, and a school or construction zone may cut the limit for only part of the day.",
        trap:
          "Assuming a rural two-lane highway must be higher than 55 is how people end up over 75 there - which is the Super Speeder threshold on a two-lane road.",
        excerptKey: "speed-limits-general",
        sourceLabel: "Georgia Driver's Manual - Speed Limits",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s4_16",
        topic: "sharing",
        question:
          "A cyclist is riding in the middle of a narrow lane rather than hugging the kerb. What is the legal position in Georgia?",
        choices: [
          "The cyclist must dismount if traffic backs up behind them",
          "The cyclist must use the shoulder where one exists",
          "The cyclist is entitled to use the full lane",
          "The cyclist must ride as far right as practicable at all times",
        ],
        correctIndex: 2,
        explanation:
          "Georgia law allows cyclists the use of the full lane, and they are not required to be in a bike lane even when one is present.",
        context:
          "Riding centrally is often the safer choice, because it keeps the cyclist out of the door zone of parked cars and stops drivers attempting to squeeze past inside a lane too narrow to share. Your obligation as a driver is to yield to the cyclist as you would to another motorist, and to make eye contact where you can, especially at intersections.",
        trap:
          "'They should ride nearer the kerb' is an opinion, not a rule, and the passing law still requires a lane change or three feet of clearance.",
        excerptKey: "bicyclists-entitled",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With Bicycles",
        sourceUrl: SHARE,
      },
      {
        id: "ga_s4_17",
        topic: "licensing",
        question:
          "You fail the road rules portion of the Georgia knowledge exam for the second time. When can you retake it?",
        choices: [
          "The same day, after a 30-minute wait",
          "The next day",
          "After seven days",
          "After 30 days",
        ],
        correctIndex: 2,
        explanation:
          "A first failure means waiting until the next day. A second or subsequent failure means waiting seven days before retaking the portion you failed.",
        context:
          "You retake only the part you failed, since the signs and rules portions are scored separately at 15 correct out of 20 each. Knowledge exams are walk-in at any DDS Customer Service Center, but you have to start at least 30 minutes before closing, and the $10 test fee is payable before each attempt with no refund for a failure.",
        trap:
          "The waiting period lengthens with each failure rather than staying at one day, which catches people planning a same-week retry.",
        excerptKey: "exam-road-rules",
        sourceLabel: "Georgia Driver's Manual - Testing Information",
        sourceUrl: TESTING,
      },
      {
        id: "ga_s4_18",
        topic: "rules",
        question: "What does Georgia law say about wearing headphones while driving?",
        choices: [
          "It is unlawful to drive while wearing a headphone, headset or any device that would impair your ability to hear",
          "Permitted if only one ear is covered",
          "Permitted for navigation instructions only",
          "Permitted if the volume is low enough to hear a siren",
        ],
        correctIndex: 0,
        explanation:
          "Georgia makes it unlawful to operate a motor vehicle wearing a headphone, headset or any other device that would impair the driver's ability to hear. The driver must also not wear anything that obstructs their vision.",
        context:
          "There is a wrinkle worth noticing: the Hands Free Law explicitly permits using a phone through headphones, while this provision bans anything that impairs your hearing. The two coexist because the offence is impairment of hearing, not the presence of an earpiece - a device that leaves you able to hear traffic is a different thing from one that seals you off from it.",
        trap:
          "Turning the volume down is not the test the statute sets. The question is whether the device impairs your ability to hear.",
        excerptKey: "headphones",
        sourceLabel: "Georgia Driver's Manual - Impaired Hearing and Vision",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s4_19",
        topic: "signs",
        question: "You see a yellow diamond showing a broken line becoming a solid line with two lanes converging. Which warning is this most likely to be?",
        choices: [
          "The shoulder is closed",
          "Divided highway ends - opposing traffic returns ahead",
          "A passing lane is starting",
          "A weigh station is ahead",
        ],
        correctIndex: 1,
        explanation:
          "The divided highway ends warning tells you the median separating the directions is running out, so you will shortly face opposing traffic again. Prepare to change lanes or shift your position.",
        context:
          "Its mirror image is the divided highway begins sign, which warns that a median is about to split the directions. Both ask you to sort out your lane position before the geometry changes, and both are among the warnings drivers meet most often on Georgia's rural highways.",
        trap:
          "Ending a divided highway is the more dangerous of the pair, because you go from a protected road to head-on exposure rather than the reverse.",
        excerptKey: "sign-divided-highway-ends",
        sourceLabel: "Georgia Driver's Manual - More Warning Signs",
        sourceUrl: WARN2,
      },
      {
        id: "ga_s4_20",
        topic: "impairment",
        question: "Which of these is a two-point offence on a Georgia driving record?",
        choices: [
          "Unlawful passing of a school bus",
          "Reckless driving",
          "Possessing an open container of an alcoholic beverage while driving",
          "Aggressive driving",
        ],
        correctIndex: 2,
        explanation:
          "An open container carries two points in Georgia. Reckless driving is four, and aggressive driving and unlawfully passing a school bus are six each.",
        context:
          "Georgia's point scale runs from one to six. Speeding is banded: two points for 15-18 mph over, three for 19-23, four for 24-33, and six for 34 mph or more over the limit. Most other moving violations sit at three points. A licence is suspended at 15 points within 24 months, and far sooner for young drivers.",
        trap:
          "Open container feels serious enough to be a large penalty, but Georgia's heaviest sixes are reserved for aggressive driving, extreme speed and passing a school bus.",
        excerptKey: "points-suspension",
        sourceLabel: "Georgia DDS - Points Schedule",
        sourceUrl: B + "points-schedule",
      },
      {
        id: "ga_s4_21",
        topic: "rightOfWay",
        question:
          "You are turning right at an intersection and a bicycle lane runs along the road you are leaving. A cyclist in it is going straight ahead. Who has priority?",
        choices: [
          "Neither: the cyclist must stop for turning traffic",
          "You do, because a turning vehicle has priority over a through cyclist",
          "Whoever reaches the intersection first",
          "The cyclist - you must yield before making the right turn",
        ],
        correctIndex: 3,
        explanation:
          "Where a bicycle lane runs along the road you are travelling on, you must yield to cyclists going straight through the intersection before making your right turn.",
        context:
          "The geometry is why bike lanes are placed to the left of a right-turn-only lane where one exists - it puts the through cyclist where turning drivers will look. Motorists may not drive or park in a bike lane except to cross it while turning, and must yield to any cyclist present when they do.",
        trap:
          "This is the right hook, and it happens because a driver checks for cars over their left shoulder and turns across a cyclist on their right.",
        commonlyMissed: true,
        excerptKey: "right-turn-bike-lane",
        sourceLabel: "Georgia Driver's Manual - How To Make A Right Turn",
        sourceUrl: TURNS,
      },
      {
        id: "ga_s4_22",
        topic: "safety",
        question:
          "You are following a motorcycle on a wet road. How much following distance does Georgia suggest?",
        choices: [
          "Three or four seconds",
          "The same two seconds you would use for a car",
          "One second, since motorcycles are shorter",
          "Five seconds in all conditions",
        ],
        correctIndex: 0,
        explanation:
          "Three or four seconds behind a motorcycle, so the rider has room to manoeuvre or stop in an emergency without you arriving on top of them.",
        context:
          "In dry conditions a motorcycle can actually stop more quickly than a car, which is the opposite of most drivers' assumption. Riders also change speed and position suddenly in response to potholes, gravel, wet surfaces, pavement seams, railroad crossings and grooved pavement - road defects that a car would barely register.",
        trap:
          "Assuming a motorcycle takes longer to stop than your car is backwards, and it is why rear-end collisions with riders happen.",
        excerptKey: "motorcycle-following-distance",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With Motorcycles",
        sourceUrl: SHARE2,
      },
      {
        id: "ga_s4_23",
        topic: "signs",
        question: "A regulatory sign shows a black arrow pointing right on a white background with the word ONLY. What does it require?",
        choices: [
          "Right turns are prohibited from this lane",
          "You may travel only in the direction of the arrow",
          "The lane to your right is closing",
          "Right turns are permitted on red from this lane",
        ],
        correctIndex: 1,
        explanation:
          "A directional regulatory sign restricts you to the movement the arrow shows. From that lane, that direction is the only one available.",
        context:
          "Georgia uses overhead lane signs for the same purpose above multi-lane approaches - left turn only, straight or left turn only, right turn only - and pairs them with pavement arrows. Getting into the correct lane early is the point, because once you are committed a lane change through an intersection is not an option.",
        trap:
          "A white regulatory arrow tells you what you must do; a red circle and slash tells you what you must not. Reading one as the other reverses the instruction.",
        excerptKey: "sign-one-way",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s4_24",
        topic: "rules",
        question:
          "Georgia makes one specific use of turn signals unlawful. Which is it?",
        choices: [
          "Signalling before pulling out of a parallel parking space",
          "Signalling a turn more than 100 feet in advance",
          "Flashing them as a courtesy or 'do pass' signal to a driver behind you",
          "Signalling a lane change on an interstate",
        ],
        correctIndex: 2,
        explanation:
          "It is against the law in Georgia to flash your turn signals as a courtesy or 'do pass' signal to drivers behind you.",
        context:
          "The reasoning is that a signal has one meaning - this vehicle is about to move that way - and any second meaning makes every signal ambiguous. Georgia separately requires a continuous signal for an adequate distance before any turn, and a proper hand, arm or brake signal when you slow or stop suddenly.",
        trap:
          "The truckers' courtesy flash is well meant and widely used, which is exactly why it surprises people that Georgia writes it out of the law.",
        excerptKey: "illegal-signals",
        sourceLabel: "Georgia Driver's Manual - Illegal Signals",
        sourceUrl: TURNS,
      },
      {
        id: "ga_s4_25",
        topic: "parking",
        question:
          "How far from a railroad crossing does Georgia prohibit standing or parking except momentarily for passengers?",
        choices: ["Within 20 feet", "Within 30 feet", "Within 50 feet", "Within 100 feet"],
        correctIndex: 2,
        explanation:
          "Fifty feet. Inside that distance you may only pause briefly to pick up or set down a passenger.",
        context:
          "It is the longest of Georgia's ordinary parking clearances, and it exists because a parked vehicle near a crossing blocks the sight line down the track. A separate 100-foot figure applies to passing rather than parking - you may not pass another vehicle within 100 feet of a railroad crossing, a bridge, a viaduct or a tunnel.",
        trap:
          "The 100-foot number is real but belongs to the no-passing rule. Applying it to parking, or applying 50 to passing, is the standard mix-up.",
        excerptKey: "parking-distances",
        sourceLabel: "Georgia Driver's Manual - Stopping, Standing, and Parking",
        sourceUrl: TURNS,
      },
      {
        id: "ga_s4_26",
        topic: "signs",
        question: "A yellow diamond shows a symbol of a person walking, or a leaping deer. What are these signs telling you?",
        choices: [
          "A wildlife refuge boundary",
          "A pedestrian mall where vehicles are banned",
          "A designated hunting area",
          "Areas ahead where animals, people or vehicles may be crossing",
        ],
        correctIndex: 3,
        explanation:
          "They warn you in advance of places where animals, people and vehicles may be crossing the road, so you are watching before you get there.",
        context:
          "Deer crossings matter more than they look in Georgia. Deer travel in groups, are most active in October, November and December and again in late February and early March, and turn up most often along road shoulders in the early morning and late evening - though in summer they appear at midday too.",
        trap:
          "These warnings mark the places crossings are likely, not the only places they happen. A sign is not a fence.",
        excerptKey: "sign-crossing-advance",
        sourceLabel: "Georgia Driver's Manual - More Warning Signs",
        sourceUrl: WARN2,
      },
      {
        id: "ga_s4_27",
        topic: "licensing",
        question:
          "What supervised driving experience must a Georgia applicant have accumulated before being licensed?",
        choices: [
          "20 hours, including 2 at night",
          "30 hours, including 5 at night",
          "40 hours, including 6 at night",
          "50 hours, including 10 at night",
        ],
        correctIndex: 2,
        explanation:
          "At least 40 hours of supervised driving experience, of which at least six must be at night.",
        context:
          "Supervised driving means driving under the eye of somebody at least 21 who holds an unexpired Class C licence, sits beside you and is capable of taking control. No log is required, but a parent, guardian or certified instructor must swear or affirm at the time of application that the hours were completed - and adults applying for a first Class C licence sign the same affidavit.",
        trap:
          "The 40 hours are separate from and additional to the six behind-the-wheel hours required under Joshua's Law, not the same thing counted twice.",
        excerptKey: "driver-ed-40-hours",
        sourceLabel: "Georgia Driver's Manual - Driver Education Requirements",
        sourceUrl: TEEN,
      },
      {
        id: "ga_s4_28",
        topic: "sharing",
        question:
          "A school bus ahead switches on flashing yellow lights. What should you do?",
        choices: [
          "Slow down and be prepared to stop",
          "Continue at your speed until the red lights show",
          "Stop where you are and wait",
          "Pass immediately, before the red lights come on",
        ],
        correctIndex: 0,
        explanation:
          "Yellow flashers mean the bus is preparing to stop to load or unload. Every approaching driver should slow down and be ready to stop, watching for children walking along or crossing the road.",
        context:
          "The yellow phase exists to give you the time you would not have if the red lights came on without warning. Once the reds are flashing and the stop arm is out, passing the bus is unlawful, and you stay stopped until the bus moves off or switches off its warnings and all the passengers are clear of the road.",
        trap:
          "Racing to pass before the reds come on is what the yellow phase is meant to prevent - the children are already moving toward the bus.",
        excerptKey: "school-bus-yellow-lights",
        sourceLabel: "Georgia Driver's Manual - Laws Governing Right-of-Way",
        sourceUrl: ROW,
      },
      {
        id: "ga_s4_29",
        topic: "emergencies",
        question:
          "A fire engine is responding to an alarm ahead of you with lights and siren running. How close may you follow?",
        choices: [
          "Any distance, provided you do not obstruct it",
          "No closer than 200 feet",
          "No closer than 100 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 1,
        explanation:
          "Unless you are on official business, you must not follow fire apparatus responding to an alarm, or other emergency vehicles, closer than 200 feet.",
        context:
          "A second distance goes with it: you may not park within 500 feet of fire apparatus that has stopped in answer to an alarm. Following an emergency vehicle at speed is a three-point offence in Georgia, and it also puts you in the path of the traffic that is still pulling over for the sirens.",
        trap:
          "Tucking in behind an emergency vehicle to make progress through traffic is both unlawful and dangerous - the traffic ahead is moving unpredictably to get out of the way.",
        excerptKey: "following-emergency-vehicles",
        sourceLabel: "Georgia Driver's Manual - Following Emergency Vehicles",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s4_30",
        topic: "signs",
        question: "A yellow diamond shows a car and a wavy line ending at a fence-like symbol - the SOFT SHOULDER warning. What does it mean?",
        choices: [
          "The shoulder is wide enough to stop on safely",
          "The shoulder is being resurfaced",
          "The shoulder is soft and should be driven on only in emergencies",
          "The shoulder is reserved for bicycles",
        ],
        correctIndex: 2,
        explanation:
          "The ground beside the pavement will not carry a vehicle reliably. Drive on it only in an emergency.",
        context:
          "A soft shoulder is a particular hazard because a wheel that drops off the pavement into it will drag. Georgia's guidance for leaving the roadway applies directly: do not jerk the wheel to get back on, ease off the accelerator, hold the wheel firmly, brake gently, and only return to the pavement once you have slowed and found a gap.",
        trap:
          "Assuming a shoulder is always a refuge is what turns a small excursion into a rollover.",
        excerptKey: "sign-soft-shoulder",
        sourceLabel: "Georgia Driver's Manual - Warning Signs",
        sourceUrl: WARN,
      },
      {
        id: "ga_s4_31",
        topic: "rules",
        question:
          "You are on a two-lane road and there is a solid yellow line on your side, but the vehicle ahead is slow and the road ahead looks clear for a mile. What does Georgia allow?",
        choices: [
          "Passing, since visibility is the real test",
          "Passing at up to 10 mph over the limit to shorten the manoeuvre",
          "Passing only if the slow vehicle signals you through",
          "No passing - the solid line on your side prohibits it regardless of what you can see",
        ],
        correctIndex: 3,
        explanation:
          "A solid yellow line on your side of the centre marks a no-passing zone, and clear visibility does not lift it.",
        context:
          "Georgia's no-passing rules stack. Beyond the painted lines, passing is prohibited within 100 feet of a railroad crossing, bridge, viaduct or tunnel, on a hill or curve without adequate sight distance, on the shoulder, and whenever a school bus is stopped to load or unload. Passing in a no-passing zone is a three-point violation, and improper passing on a hill or curve is four.",
        trap:
          "A slow driver waving you through transfers no authority. The engineer who painted the line knew something about the road that you cannot see from a mile back.",
        excerptKey: "no-passing-lines",
        sourceLabel: "Georgia Driver's Manual - No Passing Lines",
        sourceUrl: MARKINGS,
      },
      {
        id: "ga_s4_32",
        topic: "safety",
        question:
          "You want to stop on the shoulder of a Georgia expressway to swap drivers. Is that allowed?",
        choices: [
          "No - swapping drivers is expressly not an emergency",
          "Yes, provided you are past the gore area",
          "Yes, if you switch on your hazard lights",
          "Yes, for up to five minutes",
        ],
        correctIndex: 0,
        explanation:
          "Stopping on the expressway shoulder is permitted only in an emergency, and the manual states specifically that switching drivers, stretching or retrieving something from the back of the vehicle does not count as one.",
        context:
          "Georgia treats the expressway shoulder as a hazard rather than a lay-by, and points you to rest areas and the service signs instead. If you do have to stop, raise the hood and switch on the hazard lights to signal difficulty, and do not walk along the expressway looking for help. Driving in reverse on an expressway is prohibited in all circumstances.",
        trap:
          "Hazard lights signal a problem; they do not create the emergency that would make the stop lawful.",
        excerptKey: "expressway-stopping",
        sourceLabel: "Georgia Driver's Manual - Tips For Expressway Driving",
        sourceUrl: SAFETY3,
      },
      {
        id: "ga_s4_33",
        topic: "speed",
        question:
          "You are convicted of speeding at 88 mph on a Georgia interstate. Which describes the outcome?",
        choices: [
          "Six points, with the $200 fee replacing the local fine",
          "Six points, plus a $200 Super Speeder state fee on top of the local fine",
          "Four points and no state fee, since Super Speeder applies only to two-lane roads",
          "Three points and a warning letter",
        ],
        correctIndex: 1,
        explanation:
          "88 mph is 34 or more over a 55 limit and well past the 85 mph Super Speeder threshold on any road, so it draws six points plus the $200 state fee on top of whatever the local court imposes.",
        context:
          "The Super Speeder fee is a state charge that sits alongside, not instead of, the local fine and the points. Non-payment within the notice period brings a licence suspension and a further $50 reinstatement fee, and no limited driving permit is available for a failure to pay the Super Speeder fee.",
        trap:
          "The fee never replaces the fine, and the 85 mph threshold applies on every road in Georgia - the 75 mph figure is the extra one that catches two-lane roads.",
        commonlyMissed: true,
        excerptKey: "super-speeder-nonpayment",
        sourceLabel: "Georgia Driver's Manual - Super Speeder",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s4_34",
        topic: "signals",
        question:
          "Georgia's three most basic traffic laws include one about obeying people rather than devices. What does it say?",
        choices: [
          "Obey whichever instruction arrived first",
          "Obey an officer only when the signals have failed",
          "Obey a law enforcement officer or firefighter directing traffic, even when the instruction contradicts the traffic control devices",
          "Obey a traffic control device even when an officer directs otherwise",
        ],
        correctIndex: 2,
        explanation:
          "A law enforcement officer or firefighter directing traffic outranks the lights and signs, even where the direction runs against them.",
        context:
          "The three basics are: obey traffic control devices, obey the traffic directions of an officer or firefighter even when they contradict those devices, and never drive on a roadway closed for construction, a special event or any other official reason. In a work zone a flagger carries the same authority as a regulatory sign for the same reason.",
        trap:
          "Waiting for a green light while an officer waves you through is the failure this rule addresses. The person on the road can see what the signal cannot.",
        excerptKey: "three-basic-laws",
        sourceLabel: "Georgia Driver's Manual - 3 Most Basic Traffic Laws",
        sourceUrl: LAWS,
      },
      {
        id: "ga_s4_35",
        topic: "impairment",
        question:
          "What does Georgia's aggressive driving offence actually require the prosecution to show?",
        choices: [
          "That the driver caused a collision",
          "That the driver had a prior conviction for reckless driving",
          "That the driver exceeded the limit by 20 mph or more",
          "That the driver operated a vehicle with intent to annoy, harass, molest, intimidate, injure or obstruct another person",
        ],
        correctIndex: 3,
        explanation:
          "Aggressive driving turns on intent - operating a vehicle intending to annoy, harass, molest, intimidate, injure or obstruct another person. Tailgating, cutting in and blocking other drivers are the usual examples.",
        context:
          "It is a misdemeanour of a high and aggravated nature and carries six points, the same as unlawfully passing a school bus. A driver under 21 convicted of it loses all driving privileges. Reckless driving is the neighbouring offence, defined by disregard for safety rather than intent, and carries four points.",
        trap:
          "No speed threshold appears in the definition. A driver at the limit who is deliberately blocking somebody is inside the offence.",
        excerptKey: "aggressive-driving",
        sourceLabel: "Georgia Driver's Manual - Aggressive Driving",
        sourceUrl: OTHER,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Thirty-five questions on the material that actually costs Georgia candidates their pass: the points system, the suspension thresholds that differ by age, and the rules where the intuitive answer is wrong.",
    questions: [
      {
        id: "ga_s5_01",
        topic: "licensing",
        question: "At how many points, and over what period, is an adult Georgia licence suspended?",
        choices: [
          "15 or more points within 24 months",
          "10 or more points within 24 months",
          "15 or more points within 12 months",
          "12 or more points within 12 months",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen or more points accumulated within 24 months brings suspension. The clock runs on the dates the violations occurred, not the dates of conviction.",
        context:
          "Two much shorter fuses apply to younger drivers. Anyone under 21 is suspended on a conviction for any single four-point violation, and anyone under 18 is suspended at four points accumulated within any 12 months. When a licence is suspended for points, the point total is restored to zero.",
        trap:
          "Reading the adult rule as 12 months halves the window. It is 15 points over two years, not one.",
        commonlyMissed: true,
        excerptKey: "points-suspension",
        sourceLabel: "Georgia Driver's Manual - The Points System",
        sourceUrl: LOSING,
      },
      {
        id: "ga_s5_02",
        topic: "signs",
        question:
          "A round yellow advance warning sign and a white X-shaped crossbuck both relate to railroad crossings. What is the difference?",
        choices: [
          "The round sign warns in advance; the crossbuck stands at the crossing itself",
          "The crossbuck warns in advance; the round sign stands at the crossing",
          "The round sign appears only where gates are fitted",
          "They are alternatives - a crossing has one or the other",
        ],
        correctIndex: 0,
        explanation:
          "The circle is the advance warning, placed a few hundred feet before the tracks. The crossbuck is placed at every railroad crossing itself.",
        context:
          "At the crossbuck you yield to any approaching train, and a plate below it tells you how many tracks there are. A complete stop is required when a red light is flashing, and when you stop you do it between 15 and 50 feet from the nearest rail. Passing another vehicle is prohibited at all railroad crossings.",
        trap:
          "A crossing with no gates and no lights is still a crossing. The crossbuck alone is a yield instruction, not a suggestion.",
        excerptKey: "sign-crossbuck",
        sourceLabel: "Georgia Driver's Manual - Guide Signs",
        sourceUrl: GUIDE,
      },
      {
        id: "ga_s5_03",
        topic: "rules",
        question:
          "Georgia's Move Over law was amended to cover more than emergency responders. Who else does it protect?",
        choices: [
          "Postal carriers only",
          "Active sanitation workers and utility service workers using cones or vehicles with flashing lights",
          "Any vehicle stopped on the shoulder with hazard lights on",
          "School bus drivers loading passengers",
        ],
        correctIndex: 1,
        explanation:
          "The law was amended to include active sanitation workers and utility service workers using traffic cones or vehicles displaying flashing lights, alongside emergency personnel.",
        context:
          "It applies to any emergency, sanitation or utility service vehicle parked on the shoulder. A related provision covers postal service vehicles and vehicles with active sanitation workers displaying flashing lights: change into a non-adjacent lane if you can, and if you cannot, slow to at least 10 mph under the posted limit or 25 mph, whichever is higher, and be prepared to stop.",
        trap:
          "'Any vehicle with hazard lights' is broader than the law. A stalled private car does not trigger the Move Over duty, though ordinary care still applies.",
        commonlyMissed: true,
        excerptKey: "move-over-scope",
        sourceLabel: "Georgia Driver's Manual - The Move Over Law",
        sourceUrl: PDF,
      },
      {
        id: "ga_s5_04",
        topic: "licensing",
        question:
          "How much can a Georgia driver reduce their points by, and how often?",
        choices: [
          "Up to 5 points, once every 2 years",
          "Up to 7 points, once every 2 years",
          "Up to 10 points, once every 5 years",
          "Up to 7 points, once every 5 years",
        ],
        correctIndex: 3,
        explanation:
          "A licensed Georgia resident may ask DDS to reduce points by up to seven, once every five years, after completing a certified six-hour driver improvement course.",
        context:
          "There is a second, separate route that avoids points rather than removing them. Complete the same six-hour course after a citation for a moving violation but before your court appearance, present the original certificate to the court, and the court reduces the fine by 20 percent and assesses no points at all. That plea is also available only once every five years.",
        trap:
          "Reduction and avoidance are two different mechanisms with two different timings. Confusing them can leave you paying for a course that arrives too late to matter.",
        commonlyMissed: true,
        excerptKey: "points-reduction",
        sourceLabel: "Georgia Driver's Manual - Points Reduction",
        sourceUrl: LOSING,
      },
      {
        id: "ga_s5_05",
        topic: "signs",
        question:
          "You are travelling on a one-way street and see a red rectangular sign reading WRONG WAY. What has happened?",
        choices: [
          "You are travelling against the flow of a one-way highway or ramp",
          "The street becomes two-way ahead",
          "A detour has been signposted",
          "Traffic ahead has been reversed for a special event",
        ],
        correctIndex: 0,
        explanation:
          "The sign tells you that driving on this highway or ramp in the direction you are heading is not allowed - you are going the wrong way.",
        context:
          "Georgia usually pairs it with the DO NOT ENTER sign, a red circle with a white bar, which stands at the point of entry. WRONG WAY appears further along for a driver who got past the first sign. Driving contrary to the posted direction of a one-way street is unlawful except where a traffic control device, emergency personnel or construction workers direct you.",
        trap:
          "Reversing on the spot to correct it is the wrong response on a controlled access road, where backing up is prohibited outright.",
        excerptKey: "sign-wrong-way",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s5_06",
        topic: "impairment",
        question:
          "A 20-year-old Georgia driver is convicted of a single four-point violation. What happens to their licence?",
        choices: [
          "Points are doubled but no suspension follows",
          "It is suspended - any four-point conviction suspends a driver under 21",
          "Nothing until they reach 15 points",
          "A warning letter and mandatory driver improvement course",
        ],
        correctIndex: 1,
        explanation:
          "For a driver under 21, a conviction for any four-point violation suspends the licence on its own. There is no need to accumulate anything.",
        context:
          "Four-point offences include reckless driving, improper passing on a hill or curve, and speeding 24 to 33 mph over the limit. A nolo contendere plea counts as a conviction for the purposes of under-21 suspensions. Where the suspension came from speeding 24-33 mph over, a limited permit may be available - but only if the driver is at least 18.",
        trap:
          "The 15-point rule is the adult threshold. Applying it to a 20-year-old misses the single-conviction trigger entirely.",
        commonlyMissed: true,
        excerptKey: "points-suspension",
        sourceLabel: "Georgia Driver's Manual - The Points System",
        sourceUrl: LOSING,
      },
      {
        id: "ga_s5_07",
        topic: "rules",
        question:
          "Where does Georgia allow you to drive across the dividing strip of a divided highway?",
        choices: [
          "Anywhere, if you are making a legal U-turn",
          "Only in an emergency",
          "Only at an authorised opening or crossover",
          "Anywhere the strip is unpaved and level",
        ],
        correctIndex: 2,
        explanation:
          "Crossing a dividing section, barrier or unpaved strip separating two roadways is unlawful except at an authorised opening or crossover.",
        context:
          "Georgia reinforces the same idea from the parking side, where the area between the roadways of a divided highway - crossovers included - is on the list of places you may not stop at any time. Drivers on divided highways must keep to the right of the median unless a sign, a traffic control device or an officer says otherwise.",
        trap:
          "An unpaved median that looks driveable is still a barrier in law. The prohibition is not about whether your car can make it across.",
        excerptKey: "median-strip",
        sourceLabel: "Georgia Driver's Manual - Median Strip",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s5_08",
        topic: "signs",
        question:
          "The pentagon-shaped school sign in Georgia is placed within what distance of the school grounds or crossing?",
        choices: [
          "Between 50 and 200 feet",
          "Between 100 and 500 feet",
          "Between 150 and 700 feet",
          "Between 300 and 1,000 feet",
        ],
        correctIndex: 2,
        explanation:
          "Where a pentagon is used, it goes up not less than 150 feet and not more than 700 feet in advance of the school grounds or school crossing.",
        context:
          "The pentagon warns; a separate rectangular school speed limit sign sets the reduced limit, and that limit takes effect when its yellow lights are flashing. Georgia allows both to appear in fluorescent yellow-green, the high-emphasis colour reserved for school, pedestrian and cycling activity.",
        trap:
          "The reduced limit is tied to the flashing lights, not to the pentagon. Passing the pentagon does not by itself put you in a lower limit.",
        excerptKey: "sign-pentagon",
        sourceLabel: "Georgia Driver's Manual - Shapes of Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s5_09",
        topic: "speed",
        question:
          "You are speeding 26 mph over the posted limit in Georgia. How many points does that carry?",
        choices: ["Two points", "Three points", "Four points", "Six points"],
        correctIndex: 2,
        explanation:
          "The 24 to 33 mph band carries four points. Below it, 19-23 mph over is three points and 15-18 mph over is two; above it, 34 mph or more over is six.",
        context:
          "The four-point band is the one that changes the picture for a young driver, because any four-point conviction suspends a licence under 21. It is also the only speeding band for which a limited permit may be available after such a suspension, and then only if the driver is at least 18 and the sentencing judge approves.",
        trap:
          "Speeding under 15 mph over the limit does not appear on the points schedule as a banded offence at all, which is why people assume small margins are free - they are not, but the banding starts at 15.",
        commonlyMissed: true,
        excerptKey: "under-21-suspension-offenses",
        sourceLabel: "Georgia DDS - Points Schedule",
        sourceUrl: B + "points-schedule",
      },
      {
        id: "ga_s5_10",
        topic: "rightOfWay",
        question:
          "You are waiting at a green light to turn left. The oncoming traffic finally clears, but pedestrians are still crossing the street you are turning into. What must you do?",
        choices: [
          "Proceed - the pedestrian signal has expired",
          "Complete the turn behind them",
          "Turn slowly so they can see you coming",
          "Stop and remain stopped until they have cleared the lanes of traffic you are travelling on",
        ],
        correctIndex: 3,
        explanation:
          "You stop and remain stopped for pedestrians in the crosswalk of the road you are turning onto, until they have cleared the lanes of traffic you are travelling on.",
        context:
          "The conflict is built into the signal design: at most intersections the WALK signal for the crossing street runs with your green, so pedestrians are authorised to cross exactly when you are authorised to turn. Georgia resolves it in the pedestrian's favour, and adds that once you have entered an intersection to turn left you may not change lanes inside it.",
        trap:
          "'They should have waited' does not apply - the timing means they had the signal at the same moment you did.",
        commonlyMissed: true,
        excerptKey: "left-turn-pedestrians",
        sourceLabel: "Georgia Driver's Manual - Watching for Pedestrians When Making Turns",
        sourceUrl: TURNS,
      },
      {
        id: "ga_s5_11",
        topic: "licensing",
        question:
          "An 18-year-old still holds a Georgia Class D licence. Do the curfew and passenger restrictions still apply?",
        choices: [
          "Yes - the conditions attach to the class of licence, not the driver's age",
          "No - they lapse at 18",
          "No, provided the holder has had no convictions",
          "Only the curfew continues; the passenger limits lapse",
        ],
        correctIndex: 0,
        explanation:
          "The restrictions are tied to the Class D licence itself, not to the holder's age. An 18-year-old still holding Class D is still under the midnight-to-5 a.m. curfew and the passenger limits.",
        context:
          "The way out is to upgrade. A driver of 18 or over with no major traffic convictions in the preceding 12 months can exchange a Class D for a full Class C licence, in person or online. The exchange costs $32 for an eight-year licence and needs no further testing for a US citizen.",
        trap:
          "This is the classic Georgia trap: people assume an 18th birthday lifts the restrictions automatically, and drive home at 1 a.m. still on a Class D.",
        commonlyMissed: true,
        excerptKey: "class-d-restrictions-by-class",
        sourceLabel: "Georgia DDS - Teen Driving Laws FAQs",
        sourceUrl: TEENFAQ,
      },
      {
        id: "ga_s5_12",
        topic: "signs",
        question: "What is the difference between an advisory speed plaque and a speed limit sign in Georgia?",
        choices: [
          "There is no difference - both are enforceable maximums",
          "The advisory plaque is black on yellow or orange and recommends a speed; the limit sign is black on white and sets the maximum",
          "The advisory plaque applies to trucks only",
          "The advisory plaque is enforceable in work zones and nowhere else",
        ],
        correctIndex: 1,
        explanation:
          "Advisory plaques are black on yellow or orange and hang under a warning sign to tell you the safe speed for that feature. Black-on-white speed limit signs set the enforceable maximum.",
        context:
          "In work zones the distinction matters most. Advisory speed limits are always used with warning signs, while an official speed reduction appears on standard black-and-white signs. Disobeying a regulatory work-zone limit is a misdemeanour of a high and aggravated nature carrying a fine of between $100 and $2,000, up to 12 months, or both.",
        trap:
          "An advisory speed is usually below the posted limit and is often the only realistic speed for the curve, so ignoring it is legal right up until you leave the road.",
        excerptKey: "work-zone-speed-penalty",
        sourceLabel: "Georgia Driver's Manual - Reduce Your Speed",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s5_13",
        topic: "safety",
        question:
          "You approach a curve marked with an advisory speed and realise mid-corner that you are going too fast. What does the Georgia manual tell you to do?",
        choices: [
          "Change down and accelerate through it",
          "Brake hard immediately",
          "Take your foot off the accelerator, apply the brake carefully, and keep steering in your lane",
          "Steer wide to straighten the corner",
        ],
        correctIndex: 2,
        explanation:
          "Lift off the accelerator, brake carefully rather than forcefully, and keep steering within your lane. Forceful braking mid-corner is what puts the car into a skid.",
        context:
          "The right time to lose the speed is before the curve, which is why advisory plaques appear in advance. Curves are worse when the surface is slick, and Georgia notes that a less cautious driver is more likely to lose their lane in a curve than anywhere else. A skid, if it happens, is answered by lifting off and steering in the direction of the skid.",
        trap:
          "Hard braking feels like the safe response and is the one most likely to break traction while the tyres are already loaded up by the corner.",
        excerptKey: "skidding",
        sourceLabel: "Georgia Driver's Manual - Curves",
        sourceUrl: PDF,
      },
      {
        id: "ga_s5_14",
        topic: "rules",
        question:
          "Georgia's Slow Poke Law lists exceptions. Which of these is one of them?",
        choices: [
          "You have been in the lane for less than a mile",
          "You are already travelling at the posted speed limit",
          "You are being overtaken by a vehicle you believe is speeding",
          "Your vehicle must be in the passing lane to exit or turn left",
        ],
        correctIndex: 3,
        explanation:
          "Needing to be in the passing lane to exit or turn left is one of the listed exceptions. Travelling at the limit is not.",
        context:
          "The full list covers traffic conditions that make it necessary, inclement weather, obstructions or hazards, compliance with a law or an official traffic control device, being positioned to exit or turn left, paying a toll or using a pass on a toll highway, authorised emergency vehicles on official duty, and vehicles engaged in highway maintenance and construction.",
        trap:
          "The belief that a speeding driver forfeits the right to pass is the commonest misreading. The duty to move over is triggered by the approach, not by the other driver's legality.",
        commonlyMissed: true,
        excerptKey: "slow-poke-exceptions",
        sourceLabel: "Georgia Driver's Manual - The Slow Poke Law",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s5_15",
        topic: "signs",
        question:
          "What does a horizontal white line painted with a ladder pattern across the roadway mid-block signify?",
        choices: [
          "A marked crosswalk where pedestrians have the right of way",
          "A cycle crossing",
          "A stop line for a bus lane",
          "A speed table or raised surface",
        ],
        correctIndex: 0,
        explanation:
          "Ladder-pattern white lines are a crosswalk. Pedestrians in it have the right of way over motor vehicles, and Georgia notes crosswalks can be mid-block in residential areas.",
        context:
          "Crosswalks also exist at all four corners of an intersection even when nobody has painted them - a crosswalk is the part of the pavement where the sidewalk would extend across the street. That is why the pedestrian rules do not depend on paint, and why 'there were no lines' is not a defence.",
        trap:
          "A mid-block crossing catches drivers who only expect pedestrians at intersections, and it may carry its own pedestrian crossing signal at the white line.",
        excerptKey: "crosswalks-exist",
        sourceLabel: "Georgia Driver's Manual - Crosswalks",
        sourceUrl: SHARE,
      },
      {
        id: "ga_s5_16",
        topic: "emergencies",
        question:
          "How does Georgia declare somebody a Habitual Violator?",
        choices: [
          "On any conviction that carries six points",
          "On a third conviction, within five years, of any combination of the listed serious offences",
          "On a second DUI conviction in any period",
          "On accumulating 30 points in 24 months",
        ],
        correctIndex: 1,
        explanation:
          "A third conviction within five years of any combination of the listed offences brings a Habitual Violator revocation.",
        context:
          "The list includes DUI, homicide by vehicle, feticide by vehicle, serious injury by vehicle, hit and run or leaving the scene, racing, fleeing or attempting to elude an officer, reckless stunt driving, operating with a suspended or revoked registration, and any felony committed using a motor vehicle. A Habitual Violator may become eligible for a probationary licence after serving two years of the revocation.",
        trap:
          "The offences need not be the same offence three times. Any combination of three counts, which is why a mixed record adds up faster than people expect.",
        excerptKey: "habitual-violator",
        sourceLabel: "Georgia Driver's Manual - Mandatory Revocations",
        sourceUrl: LOSING2,
      },
      {
        id: "ga_s5_17",
        topic: "parking",
        question: "Which of these is on Georgia's list of places you may never stop, stand or park?",
        choices: [
          "Within 20 feet of a crosswalk at an intersection",
          "Within 75 feet of the point across the street from a fire station driveway",
          "On the street side of another parked vehicle",
          "In front of a public or private driveway",
        ],
        correctIndex: 2,
        explanation:
          "Double parking - stopping on the street side of another parked vehicle - is on the never list. The other three appear on the softer list where a momentary stop for passengers is allowed.",
        context:
          "The never list also covers a sidewalk, an intersection, a crosswalk, the space between a safety zone and the adjacent kerb, a bridge, overpass or tunnel, railroad tracks, a controlled access roadway, the area between the roadways of a divided highway, and anywhere marked by a no-parking sign.",
        trap:
          "Every option here is somewhere you should not leave a car. Only one of them forbids even the momentary stop, and that distinction is what the question tests.",
        excerptKey: "parking-never",
        sourceLabel: "Georgia Driver's Manual - Stopping, Standing, and Parking",
        sourceUrl: TURNS,
      },
      {
        id: "ga_s5_18",
        topic: "signs",
        question:
          "What does a black-on-white rectangular regulatory sign showing a bicycle inside a red circle with a slash mean?",
        choices: [
          "Cyclists must use the shoulder",
          "A bike route joins the road here",
          "Cyclists must dismount here",
          "Bicycles are prohibited from entering this roadway",
        ],
        correctIndex: 3,
        explanation:
          "Bicycles are prohibited from entering that roadway. The red circle and slash always shows what is forbidden by picturing it.",
        context:
          "The prohibition matters because cyclists are otherwise entitled to use every road in Georgia except interstates and interstate-like limited access highways. A separate green-and-white bike route sign marks a designated cycling route and asks drivers to be cautious rather than telling cyclists what to do.",
        trap:
          "A no-bicycles sign is a regulatory prohibition; a bike route sign is a guide sign. They look nothing alike but are frequently confused on paper.",
        excerptKey: "red-circle-slash",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s5_19",
        topic: "impairment",
        question:
          "Which of these will suspend a Georgia driver's licence even without any conviction?",
        choices: [
          "Non-payment of the Super Speeder fee",
          "Two speeding citations in a year",
          "A single hands-free violation",
          "Being involved in any injury crash",
        ],
        correctIndex: 0,
        explanation:
          "Non-payment of the Super Speeder fee is one of the non-conviction situations in which DDS will suspend driving privileges.",
        context:
          "The other non-conviction suspensions are refusing a chemical test for intoxication, failure to appear in court or respond to a citation, non-payment of child support, safety responsibility, medical revocation, and a parent-requested revocation for a driver under 18. No limited driving permit is available for a failure to pay the Super Speeder fee.",
        trap:
          "The Super Speeder fee is easy to ignore because it arrives separately from the court's fine, and paying the fine does not settle it.",
        excerptKey: "super-speeder-nonpayment",
        sourceLabel: "Georgia Driver's Manual - Types of Suspensions",
        sourceUrl: LOSING,
      },
      {
        id: "ga_s5_20",
        topic: "sharing",
        question:
          "You want to pass a cyclist on a two-lane road posted at 45 mph. A lane change is impossible. What speed does Georgia require while you pass?",
        choices: [
          "At least 25 mph, whatever the posted limit",
          "No more than 35 mph - at least 10 mph below the posted limit",
          "The posted limit, provided you leave three feet",
          "No more than 20 mph",
        ],
        correctIndex: 1,
        explanation:
          "You reduce to at least 10 mph below the posted limit or 25 mph, whichever is higher. On a 45 mph road the higher of those is 35 mph, so 35 is your ceiling.",
        context:
          "The two-part formula catches people out on slower roads. On a 30 mph street, 10 mph under would be 20 mph, but 25 mph is higher, so 25 is the figure. Georgia's first preference is still a lane change into a lane not adjacent to the bicycle; the speed rule only applies when that is impossible, unlawful or unsafe, and three feet of clearance is required throughout.",
        trap:
          "'Whichever is more' does not mean 'whichever is more convenient'. It picks the higher of the two speeds, which on fast roads is the 10-under figure and on slow ones is 25.",
        commonlyMissed: true,
        excerptKey: "passing-bicycles",
        sourceLabel: "Georgia Driver's Manual - Passing Bicycles",
        sourceUrl: SHARE,
      },
      {
        id: "ga_s5_21",
        topic: "rules",
        question:
          "Georgia's rule on opening a car door on the traffic side is written with one group specifically in mind. Who?",
        choices: [
          "Pedestrians stepping between parked cars",
          "Passengers in the rear seats",
          "Cyclists operating close to the lane of parked cars",
          "Motorcyclists filtering between lanes",
        ],
        correctIndex: 2,
        explanation:
          "The provision names bicyclists that may be operating close to the lane of parked cars, alongside the general prohibition on interfering with other traffic.",
        context:
          "Opening a door on the traffic side is prohibited unless it is safe and can be done without interfering with the movement of traffic. It is why cyclists ride further out from a line of parked cars than drivers expect, and why the manual's advice to give riders room applies even on streets where they seem to be taking more space than they need.",
        trap:
          "Lane filtering is not lawful in Georgia, so the motorcycle answer describes something the law does not contemplate here.",
        excerptKey: "opening-doors",
        sourceLabel: "Georgia Driver's Manual - Opening Vehicle Doors",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s5_22",
        topic: "signs",
        question:
          "What does a vertical rectangular white sign with black text reading SPEED LIMIT differ from in Georgia's colour system?",
        choices: [
          "Green signs, which give minimum speeds",
          "Blue signs, which give truck speeds",
          "Nothing - all speed information uses the same colours",
          "Yellow and orange plaques, which give advisory speeds rather than enforceable limits",
        ],
        correctIndex: 3,
        explanation:
          "Black on white is the enforceable regulatory limit. Black on yellow or orange plaques hung under warning signs are advisory speeds telling you what is safe for a feature.",
        context:
          "Georgia's shape rules put speed limits in the vertical rectangle family - regulatory signs that must be obeyed like traffic laws. That family also holds keep right, one way, no turn on red, no trucks and no bicycles. Horizontal rectangles carry guide information and impose nothing.",
        trap:
          "Both types quote a number in miles per hour, so people match on the number rather than on the colour and shape carrying it.",
        excerptKey: "sign-speed-limit",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s5_23",
        topic: "safety",
        question:
          "In heavy fog on a Georgia highway, what should you do with your headlights?",
        choices: [
          "Dim them to low beam",
          "Use parking lights only",
          "Switch on hazard lights and drive on low beam",
          "Use high beams to see further",
        ],
        correctIndex: 0,
        explanation:
          "Dim to low beam. Bright lights produce glare in heavy fog and make seeing harder, not easier.",
        context:
          "The manual's fog advice also tells you to reduce speed, and to reduce it further as soon as you see headlights or tail lights, because fog makes distance almost impossible to judge. It specifically warns against driving with parking or hazard lights on. The dimming rule is part of a wider set: low beam within 500 feet of oncoming traffic, within 200 feet of a vehicle you are following, on lit roads, and in rain, fog, snow or smoke.",
        trap:
          "Using hazard lights while moving tells following drivers nothing useful and hides your brake and turn signals.",
        excerptKey: "headlights-dim",
        sourceLabel: "Georgia Driver's Manual - Fog",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s5_24",
        topic: "licensing",
        question:
          "What is the minimum score required to pass the Georgia Class C or D road test?",
        choices: ["70%", "75%", "80%", "85%"],
        correctIndex: 1,
        explanation:
          "Seventy-five percent. The examiner will show you the score sheet at the end and discuss the result if you want to.",
        context:
          "The road test covers parallel parking within 18 inches of the kerb, straight line backing for about 50 feet at no more than 10 mph, stopping properly for signs and signals, a three-point turn, approaching intersections in the correct lane, yielding, turning, passing, following distance and posture. A vehicle equipped with advanced driver assistance may be used, but you must show you can operate it without the technology.",
        trap:
          "The knowledge exam's 15-out-of-20 standard is 75 percent too, but they are separate tests with separate retake rules.",
        excerptKey: "road-test-score",
        sourceLabel: "Georgia Driver's Manual - Road Test For Class C or D",
        sourceUrl: TESTING2,
      },
      {
        id: "ga_s5_25",
        topic: "rightOfWay",
        question:
          "You are stopped at a crosswalk letting a pedestrian cross a four-lane road. A car behind you pulls out to go around you. What does Georgia say about that manoeuvre?",
        choices: [
          "It is lawful only below 20 mph",
          "It is unlawful - a driver approaching from the rear may not overtake a vehicle stopped for a pedestrian",
          "It is lawful if the vehicle sounds its horn",
          "It is lawful if the pedestrian is not yet in that lane",
        ],
        correctIndex: 1,
        explanation:
          "Where a vehicle is stopped to let a pedestrian cross at a marked or unmarked crosswalk, a driver approaching from behind may not overtake and pass it.",
        context:
          "Georgia adds a matching duty for the vehicle in front: leave enough room between your car and the crosswalk that approaching traffic can see the whole crossing, and on a multi-lane road stop at least 10 feet back. The two rules together are aimed at the multiple-threat collision, where the stopped car hides the pedestrian from the next lane.",
        trap:
          "Slowing down before going around does not cure it - the prohibition is on the overtaking itself, whatever speed it is done at.",
        commonlyMissed: true,
        excerptKey: "passing-stopped-cars",
        sourceLabel: "Georgia Driver's Manual - Passing Stopped Cars",
        sourceUrl: PDF,
      },
      {
        id: "ga_s5_26",
        topic: "signs",
        question:
          "A regulatory sign shows a black arrow bending left around a bar. You are on a divided road. What does it require?",
        choices: [
          "Merge left because your lane is closing",
          "Traffic ahead is one-way to the left",
          "Keep right of the median or obstruction it marks",
          "Turn left at the next opening",
        ],
        correctIndex: 2,
        explanation:
          "It is the KEEP RIGHT sign. Whatever direction the arrow bends, the instruction is that traffic passes to the right of the median or obstruction.",
        context:
          "Georgia backs this up in the general rule for divided highways: drivers must keep to the right of the median unless a sign, a traffic control device or a police officer directs otherwise. The pavement version is traffic striping, where diagonal yellow lines mark a narrowing or an obstruction and you keep right of the markings.",
        trap:
          "The arrow curls around the obstruction, so at a glance it can read as an instruction to go the way the arrow tip points. Read the bar, not the tip.",
        excerptKey: "sign-keep-right",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s5_27",
        topic: "emergencies",
        question:
          "Under Georgia's Safety Responsibility Law, what triggers the suspension of your licence?",
        choices: [
          "Driving without proof of insurance in the vehicle",
          "Failing to file a written crash report",
          "Any crash where you were at fault",
          "Failing to satisfy a claim for damage from a crash, when a claim is filed against you",
        ],
        correctIndex: 3,
        explanation:
          "Failing to satisfy a claim for damage from a motor vehicle crash, once a claim is filed against you under the law, brings an order suspending your licence.",
        context:
          "There are three ways to head it off: have your insurer file Form SR-21 showing you were covered at the time, file a general or conditional release signed by the claimant, or post security to cover the damages with DDS. Any security posted is held for a year and then until DDS is satisfied you have not been sued. You are entitled to a hearing if you request one within ten days of receiving the order.",
        trap:
          "The law is about paying for the damage, not about who caused it. It exists to protect insured motorists from uninsured ones.",
        excerptKey: "limited-permit",
        sourceLabel: "Georgia Driver's Manual - Safety Responsibility Law",
        sourceUrl: PDF,
      },
      {
        id: "ga_s5_28",
        topic: "rules",
        question:
          "Georgia's litter law reaches drivers specifically. What happens if litter is thrown from your vehicle?",
        choices: [
          "The operator of the vehicle has violated the Litter Control Law",
          "The passenger who threw it is solely responsible",
          "It is a civil infraction with a fixed $100 penalty",
          "Only commercial vehicles are covered",
        ],
        correctIndex: 0,
        explanation:
          "Whenever litter is thrown, deposited or dropped from any motor vehicle, the operator of that vehicle has violated the Litter Control Law.",
        context:
          "Georgia classifies littering as damage to property and treats a conviction as a misdemeanour. The penalty runs to a fine of up to $1,000 and a 12-month jail term, and a judge can additionally order the convicted person to pick up and remove litter from a designated area. Every Georgia law enforcement agency is authorised to enforce it.",
        trap:
          "Being the driver rather than the thrower is not a defence - the law attaches the violation to the operator of the vehicle.",
        excerptKey: "litter-penalty",
        sourceLabel: "Georgia Driver's Manual - Georgia's Litter Control Law",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s5_29",
        topic: "signals",
        question:
          "A pedestrian hybrid beacon shows a solid yellow signal as you approach. What does that stage mean?",
        choices: [
          "Proceed - the crossing has cleared",
          "Reduce speed and be prepared to stop",
          "Stop immediately",
          "The beacon is returning to dark",
        ],
        correctIndex: 1,
        explanation:
          "Solid yellow tells drivers to reduce speed and be prepared to stop. It is the stage between the flashing yellow that starts the sequence and the double solid red that stops you.",
        context:
          "The whole cycle runs dark, flashing yellow, solid yellow, double solid red, then alternating flashing red, then dark again. The alternating flashing red is the only stage that lets you move on after stopping, once the pedestrians have cleared the crosswalk. A beacon sitting dark simply means nobody has pressed the button.",
        trap:
          "Reading a dark beacon as broken makes drivers hesitate at an empty crossing; reading solid yellow as 'still fine' makes them arrive at the red too fast.",
        excerptKey: "phb-flashing-red",
        sourceLabel: "Georgia Driver's Manual - Pedestrian-Hybrid Beacons",
        sourceUrl: SIGNALS2,
      },
      {
        id: "ga_s5_30",
        topic: "signs",
        question:
          "A yellow diamond shows a symbol of a car with a wavy trail on a road that curves. Below it hangs a plaque reading 35. What is the 35?",
        choices: [
          "The enforceable speed limit through the curve",
          "The minimum speed for the curve",
          "The advisory speed at which the curve can be taken safely",
          "The distance in hundreds of feet to the curve",
        ],
        correctIndex: 2,
        explanation:
          "A plaque under a warning sign gives an advisory speed - the speed at which that feature can be negotiated safely, usually lower than the posted limit.",
        context:
          "Georgia notes that sharper curves are usually marked with a safe miles-per-hour sign and that the reduced speed shown makes driving through the curve safer. The enforceable limit for the road remains whatever the black-on-white sign says, which is why an advisory 35 can sit inside a 55 zone.",
        trap:
          "Treating the advisory as the legal limit is harmless; treating it as optional because it is not the legal limit is how cars end up in the ditch on the outside of the bend.",
        excerptKey: "sign-advisory-plaques",
        sourceLabel: "Georgia Driver's Manual - More Warning Signs",
        sourceUrl: WARN2,
      },
      {
        id: "ga_s5_31",
        topic: "licensing",
        question:
          "What is required of a Class D holder in the 12 months before they apply for a Class C licence?",
        choices: [
          "At least 5,000 miles of driving experience",
          "A clean record with no citations of any kind",
          "Completion of a defensive driving course",
          "Freedom from any conviction for a major traffic violation that carries mandatory suspension",
        ],
        correctIndex: 3,
        explanation:
          "A Class D holder must be free, for the 12 months preceding the application, from convictions for major traffic violations that result in the mandatory suspension of a driver's licence.",
        context:
          "That 12-month window is the third step of Georgia's graduated system: instructional permit at 15, Class D at 16 or 17 after a year and a day on the permit, and Class C at 18 with a clean 12 months behind you. Exchanging a Class D for a Class C costs $32 and needs no further testing for a US citizen.",
        trap:
          "The requirement is about major violations carrying mandatory suspension, not a spotless record - a parking ticket does not reset the clock.",
        excerptKey: "class-d-clean-record",
        sourceLabel: "Georgia Driver's Manual - Conditions of a Class D Provisional License",
        sourceUrl: TEEN,
      },
      {
        id: "ga_s5_32",
        topic: "sharing",
        question:
          "You are following a school bus that has stopped with its red lights flashing. When may you move again?",
        choices: [
          "When the bus resumes motion or deactivates its warning signals, and all loading or unloading passengers have cleared the roadway",
          "After counting five seconds from the arm retracting",
          "As soon as the stop arm retracts",
          "When the last visible child reaches the sidewalk",
        ],
        correctIndex: 0,
        explanation:
          "Two conditions have to be met together: the bus moves off or switches its warning signals off, and everybody loading or unloading is clear of the roadway.",
        context:
          "Georgia enforces this hard. Unlawfully passing a stopped school bus is six points, brings a mandatory court appearance, a fine of up to $1,000, and for a driver under 21 an automatic licence suspension. The only relief from stopping at all is on a highway divided by a median, and then only for traffic on the far side.",
        trap:
          "Moving when the arm retracts risks catching a child still crossing in front of the bus, where the driver's own sight line is poorest.",
        commonlyMissed: true,
        excerptKey: "school-bus-remain-stopped",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With School Buses",
        sourceUrl: SHARE2,
      },
      {
        id: "ga_s5_33",
        topic: "safety",
        question:
          "Georgia requires a child under eight years of age to be restrained how?",
        choices: [
          "By the vehicle's ordinary seat belt",
          "In a child passenger restraining system appropriate for the child's height and weight",
          "In a rear-facing seat until they reach 40 pounds",
          "In any restraint, provided they ride in the rear seat",
        ],
        correctIndex: 1,
        explanation:
          "Every driver transporting a child under eight must properly restrain them in a child passenger restraining system suited to the child's height and weight, and complying with Federal Motor Vehicle Safety Standard 213.",
        context:
          "Taxis and public transit vehicles are excepted, and limited circumstances can exempt a child under eight. On top of this, every occupant of a passenger vehicle under 18 must wear a seat belt wherever they sit, and every front-seat occupant of any age must wear one. A child restraint violation is one point for a first offence and two thereafter.",
        trap:
          "Height and weight are the criteria the statute names, not age alone, so the right seat for an eight-year-old and a five-year-old are different things.",
        excerptKey: "child-restraint",
        sourceLabel: "Georgia Driver's Manual - Safety Restraints for Children",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s5_34",
        topic: "speed",
        question:
          "Which best describes Georgia's rule about driving too slowly?",
        choices: [
          "It applies only on interstates",
          "It applies only where a minimum speed is posted",
          "Driving slowly enough to impede the normal and reasonable movement of traffic is prohibited unless the reduced speed is necessary for safe operation",
          "It applies only to commercial vehicles",
        ],
        correctIndex: 2,
        explanation:
          "Georgia prohibits driving at a speed slow enough to impede the normal and reasonable movement of traffic, with an exception where the reduced speed is necessary for safe operation.",
        context:
          "The provision also says that on roads with two or more lanes you may not continue in the passing lane when you are being overtaken from behind by a faster vehicle. Penalties reach a fine of up to $1,000 and three points on your record. Where minimum speeds are posted and you cannot maintain them, the manual's advice is to find another route.",
        trap:
          "The offence does not require a posted minimum. Impeding traffic on an ordinary road is enough on its own.",
        excerptKey: "driving-too-slowly",
        sourceLabel: "Georgia Driver's Manual - Driving Too Slowly",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s5_35",
        topic: "signs",
        question:
          "Georgia says drivers should learn signs by shape and colour rather than by reading them. Why?",
        choices: [
          "Because the wording changes between counties",
          "Because colour-blind drivers rely on shape alone",
          "Because words are omitted on rural signs",
          "So they can recognise them from a distance and begin reacting in good time",
        ],
        correctIndex: 3,
        explanation:
          "The state uses seven basic shapes so that a driver can recognise a sign from a distance and begin reacting appropriately before the text becomes legible.",
        context:
          "That is also why the shapes are reserved: octagon only ever means stop, the downward triangle only ever means yield, and the circle only ever means a railroad crossing ahead. A driver who has learned the system can respond correctly to a sign they have never seen before, which is precisely what the road signs half of the exam is testing.",
        trap:
          "Memorising individual signs without the system leaves you stranded when the exam shows one you have not met.",
        excerptKey: "sign-shapes-seven",
        sourceLabel: "Georgia Driver's Manual - Shapes of Signs",
        sourceUrl: SIGNS,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions drawn the way DDS draws them, mixed across signs, traffic law and safe driving with no hints. The real Georgia knowledge exam is 40 questions in two parts - 20 on road signs and 20 on road rules - and you must answer 15 correctly in EACH part, so a strong half cannot rescue a weak one. Hold yourself to at least 24 out of 30 here, and check that your signs answers stand up on their own.",
    questions: [
      {
        id: "ga_s6_01",
        topic: "signs",
        question: "Which shape is used only for stop signs in Georgia?",
        choices: [
          "The octagon",
          "The downward triangle",
          "The pentagon",
          "The diamond",
        ],
        correctIndex: 0,
        explanation:
          "The octagon is reserved for one message: stop. No other Georgia sign uses the eight-sided shape.",
        context:
          "Georgia's shapes are exclusive so you can read them at a distance or in poor light. Pentagon means school, diamond warns of a hazard, downward triangle means yield, the circle means a railroad crossing ahead, a vertical rectangle is regulatory and a horizontal one is a guide sign.",
        trap:
          "The downward triangle is the near neighbour, but it means yield - a conditional stop rather than an absolute one.",
        excerptKey: "sign-octagon",
        sourceLabel: "Georgia Driver's Manual - Shapes of Signs",
        sourceUrl: SIGNS,
      },
      {
        id: "ga_s6_02",
        topic: "rules",
        question:
          "You are on a four-lane undivided road when a school bus stops with red lights flashing on the other side. What must you do?",
        choices: [
          "Stop - there is no median, so all traffic in both directions stops",
          "Continue, since there are two lanes in each direction",
          "Slow to 15 mph and pass with caution",
          "Stop only if the bus is on your side of the road",
        ],
        correctIndex: 0,
        explanation:
          "The exception is for highways separated in the centre by a median. A four-lane road with only paint down the middle is not divided, so traffic in both directions stops.",
        context:
          "Georgia's test is a physical median, not a lane count and not a painted line. Once the reds are flashing and the stop arm is out, passing the bus is unlawful for every driver who is approaching or meeting it. You stay stopped until the bus moves off or turns its warnings off and all the passengers are clear of the road.",
        trap:
          "This is where drivers make the six-point mistake: four lanes feels like a divided highway, and a centre turn lane or double yellow line looks like a divider. Neither counts.",
        commonlyMissed: true,
        excerptKey: "school-bus-stop-rule",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With School Buses",
        sourceUrl: SHARE2,
      },
      {
        id: "ga_s6_03",
        topic: "signals",
        question: "What does a flashing yellow signal require of you?",
        choices: [
          "Stop, then proceed when clear",
          "Slow down and exercise caution before proceeding through the intersection",
          "Treat the intersection as an all-way stop",
          "Yield only to traffic on your right",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow means slow down and use caution before going through. There is no obligation to stop.",
        context:
          "The pairing matters. Flashing red is a stop sign; flashing yellow is a caution. Where a signal has failed entirely rather than gone to flashers, every approach treats the intersection as though a stop sign were posted for all directions.",
        trap:
          "Stopping on a flashing yellow is safe but wrong on paper, and treating a dead signal as a flashing yellow is wrong and dangerous.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "Georgia Driver's Manual - Traffic Signals and Signs",
        sourceUrl: SIGNALS,
      },
      {
        id: "ga_s6_04",
        topic: "speed",
        question: "What is the general speed limit on an urban interstate in Georgia with nothing posted?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "65 mph on an urban interstate or a multi-lane divided highway. The 70 mph figure belongs to rural interstates.",
        context:
          "Georgia's full list is 30 mph in an urban or residential district, 35 mph on an unpaved county road, 55 mph in all other areas, 65 mph on an urban interstate or multi-lane divided highway, and 70 mph on a rural interstate. Every one of them is a maximum a posted sign can change.",
        trap:
          "Multi-lane divided highways share the 65 figure with urban interstates, which surprises people who expect a non-interstate to be lower.",
        excerptKey: "speed-limits-general",
        sourceLabel: "Georgia Driver's Manual - Speed Limits",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s6_05",
        topic: "signs",
        question: "What is a driver required to do at a sign showing a black arrow curving sharply with an advisory plaque beneath?",
        choices: [
          "Maintain the posted limit through the feature",
          "Stop before entering the curve",
          "Sound the horn on approach",
          "Slow to around the advisory speed before entering the curve",
        ],
        correctIndex: 3,
        explanation:
          "Advisory speeds tell you the speed at which the feature can be taken safely, and Georgia's instruction is to lose the speed before you enter it rather than during it.",
        context:
          "Braking inside a corner is what unsettles a car, so the sign appears in advance to let you arrive at the right speed. If you find yourself too fast mid-curve, the correct response is to lift off, brake carefully rather than forcefully, and keep steering within your lane.",
        trap:
          "The advisory number is not enforceable, but the posted limit is not a promise the curve can be taken at it either.",
        excerptKey: "sign-advisory-plaques",
        sourceLabel: "Georgia Driver's Manual - More Warning Signs",
        sourceUrl: WARN2,
      },
      {
        id: "ga_s6_06",
        topic: "licensing",
        question: "Which statement about Georgia's Class D provisional licence is correct?",
        choices: [
          "Passenger limits ease at six months and again after a year",
          "The passenger limits lapse once the driver turns 18",
          "The curfew runs from 11 p.m. to 6 a.m.",
          "The curfew applies only to drivers under 17",
        ],
        correctIndex: 0,
        explanation:
          "The passenger limits step down in three stages - immediate family only for six months, one non-family passenger under 21 for the next six, then up to three non-family passengers under 21.",
        context:
          "Both the curfew and the passenger limits attach to the class of licence rather than the driver's age, so an 18-year-old still holding Class D remains under them. The curfew itself runs from midnight to 5 a.m. with no exceptions written into it.",
        trap:
          "Two of the wrong answers key the restrictions to age. Georgia keys them to the licence, which is why upgrading to Class C is the only way out.",
        commonlyMissed: true,
        excerptKey: "class-d-after-a-year",
        sourceLabel: "Georgia Driver's Manual - Conditions of a Class D Provisional License",
        sourceUrl: TEEN,
      },
      {
        id: "ga_s6_07",
        topic: "rightOfWay",
        question:
          "You are on a road that merges into another without a stop or yield. What does Georgia expect?",
        choices: [
          "Signal and move across immediately",
          "Adjust your speed and position so you can merge safely into the new lane",
          "Stop at the end of the merge lane and wait for a gap",
          "Maintain speed - merging traffic always has priority",
        ],
        correctIndex: 1,
        explanation:
          "Where your road merges into traffic without stopping, you adjust your speed and vehicle position so you can slot in safely.",
        context:
          "The obligation runs the other way too. If traffic is merging into the road you are on, change lanes away from the merge if you safely can; if you cannot, adjust your own speed and position to let it in. On a controlled access highway you must stay in the acceleration lane until the solid white gore line disappears.",
        trap:
          "Stopping at the end of a merge lane is what turns a routine join into a rear-end collision, and it leaves you entering fast traffic from a standstill.",
        excerptKey: "row-merging",
        sourceLabel: "Georgia Driver's Manual - Laws Governing Right-of-Way",
        sourceUrl: ROW,
      },
      {
        id: "ga_s6_08",
        topic: "signs",
        question: "What do the letters on a blue and white sign beside a Georgia highway most likely indicate?",
        choices: [
          "A warning about a hazard ahead",
          "A regulatory instruction",
          "A service facility such as fuel, food or a hospital",
          "A construction detour",
        ],
        correctIndex: 2,
        explanation:
          "Blue and white signs give directions to service facilities. They carry information rather than any obligation.",
        context:
          "The colour set is worth carrying whole: red for stop and prohibition, yellow for warning, fluorescent yellow-green for school and pedestrian emphasis, orange for construction, blue and white for services, green for destinations, brown for recreation and points of interest, and black on white for regulatory signs.",
        trap:
          "Blue and green both look like 'information' at speed, but green routes you somewhere and blue tells you what is there.",
        excerptKey: "construction-signs-orange",
        sourceLabel: "Georgia Driver's Manual - Service Signs",
        sourceUrl: CONSTR,
      },
      {
        id: "ga_s6_09",
        topic: "impairment",
        question:
          "Which is the correct pair of blood alcohol thresholds in Georgia for drivers aged 21 and over, and under 21?",
        choices: [
          "0.08 and 0.00",
          "0.05 and 0.02",
          "0.10 and 0.04",
          "0.08 and 0.02",
        ],
        correctIndex: 3,
        explanation:
          "0.08 for drivers 21 and over, 0.02 for drivers under 21. Both are stated as the point at which a driver is considered under the influence.",
        context:
          "Georgia treats the under-21 figure as irrefutable, and applies 0.04 to commercial vehicle operators. None of these numbers is a safe-driving line: you can be convicted below any of them if alcohol, a drug or another substance has impaired your ability to drive safely, and a prescription is not a defence.",
        trap:
          "0.00 is a plausible-looking zero-tolerance figure but it is not the number Georgia uses. The under-21 threshold is 0.02.",
        excerptKey: "dui-under-21",
        sourceLabel: "Georgia Driver's Manual - Driving Under the Influence",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s6_10",
        topic: "parking",
        question: "How far from a crosswalk at an intersection may you not stand or park in Georgia?",
        choices: ["Within 10 feet", "Within 20 feet", "Within 30 feet", "Within 50 feet"],
        correctIndex: 1,
        explanation:
          "Twenty feet from a crosswalk at an intersection, with only a momentary stop to pick up or set down passengers permitted inside it.",
        context:
          "The same 20-foot figure applies to a fire station driveway. Fifteen feet covers fire hydrants, 30 feet covers stop signs, yield signs and traffic signals, 50 feet covers railroad crossings, and 75 feet covers the point directly across the street from a fire station driveway.",
        trap:
          "Every figure in this family is a plausible answer to every question in it, which is exactly why DDS asks them.",
        excerptKey: "parking-distances",
        sourceLabel: "Georgia Driver's Manual - Stopping, Standing, and Parking",
        sourceUrl: TURNS,
      },
      {
        id: "ga_s6_11",
        topic: "signs",
        question: "A yellow diamond shows a road symbol with an arrow and a smaller road joining from the side. What is it?",
        choices: [
          "A warning that a side road enters the highway ahead",
          "A warning that the road ends ahead",
          "A merge warning on a controlled access road",
          "A warning that another road crosses the highway ahead",
        ],
        correctIndex: 0,
        explanation:
          "A side road entering the highway ahead - a road joins yours from one side, without crossing it.",
        context:
          "Georgia distinguishes three junction warnings by symbol. A side road joining from one side is a T shape. Another road crossing the highway is a cross. The road ending is a T with the crossbar at the top, meaning you must turn. Reading the shape tells you whether traffic will be joining you, crossing you, or whether your road is finishing.",
        trap:
          "A side road joining and another road crossing look similar at a glance but demand different scans - one direction of threat versus two.",
        excerptKey: "warning-signs-color",
        sourceLabel: "Georgia Driver's Manual - Warning Signs",
        sourceUrl: WARN,
      },
      {
        id: "ga_s6_12",
        topic: "safety",
        question: "What is the safest way to check whether a truck driver can see your car?",
        choices: [
          "Flash your headlights and watch for a response",
          "If you cannot see the driver's face in the truck's side mirror, the driver cannot see you",
          "Assume you are visible if you are within one lane of the cab",
          "Stay directly behind the trailer where the driver expects traffic",
        ],
        correctIndex: 1,
        explanation:
          "The mirror test works both ways. No view of the driver's face in the side mirror means no view of you from the cab.",
        context:
          "The right-side No-Zone is the most dangerous of the four, because trucks must swing wide to turn right. Directly behind a truck is another blind area entirely - a truck has no rear-view mirror - and it also blocks your own view of what is happening ahead of it.",
        trap:
          "Sitting behind a trailer feels like the polite place to be and is one of the four zones where the driver cannot see you at all.",
        excerptKey: "no-zones",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With Commercial Motor Vehicles",
        sourceUrl: SHARE2,
      },
      {
        id: "ga_s6_13",
        topic: "rules",
        question:
          "You are approaching a utility truck stopped on the shoulder with amber lights flashing, in the right lane of a three-lane highway. Traffic is heavy but the middle lane has a gap. What does Georgia require?",
        choices: [
          "Slow below the limit but stay in your lane",
          "Nothing - Move Over applies only to police and ambulances",
          "Move over to the next lane, since it is safely possible",
          "Maintain speed and lane, since the truck is off the roadway",
        ],
        correctIndex: 2,
        explanation:
          "Move over to the next lane if it is safely possible. Slowing below the limit is the fallback for when you cannot change lanes, not a free alternative.",
        context:
          "Georgia's Move Over law covers any emergency, sanitation or utility service vehicle parked on the shoulder with flashing yellow, amber, white, red or blue lights. It was amended to bring in active sanitation and utility workers, and a first offence carries a fine of no more than $500 plus three points.",
        trap:
          "Believing it applies only to police and ambulances is the commonest misreading. Utility and sanitation crews were added deliberately.",
        commonlyMissed: true,
        excerptKey: "move-over-requirements",
        sourceLabel: "Georgia Driver's Manual - The Move Over Law",
        sourceUrl: PDF,
      },
      {
        id: "ga_s6_14",
        topic: "signs",
        question: "Which of these correctly matches a Georgia sign colour to its meaning?",
        choices: [
          "Orange means a permanent hazard in the road",
          "Yellow means construction and maintenance work",
          "Blue means a school crossing",
          "Fluorescent yellow-green means a high-emphasis school, pedestrian or cycling warning",
        ],
        correctIndex: 3,
        explanation:
          "Fluorescent yellow-green is the high-emphasis warning colour Georgia reserves for school, pedestrian and cycling activity.",
        context:
          "Getting the pairs right is worth several marks on the road signs half of the exam. Yellow is the general warning colour, orange belongs to construction and maintenance, blue and white to motorist services, red to stop and prohibition, and black on white to regulatory instructions.",
        trap:
          "Yellow and orange are the pair that get swapped most often, and swapping them means missing the difference between a permanent hazard and a work zone.",
        excerptKey: "warning-signs-color",
        sourceLabel: "Georgia Driver's Manual - Warning Signs",
        sourceUrl: WARN,
      },
      {
        id: "ga_s6_15",
        topic: "licensing",
        question:
          "Which requirement must a 17-year-old satisfy to obtain a Georgia Class D licence?",
        choices: [
          "A DDS-approved driver education course, under Joshua's Law",
          "Nothing beyond the road test, since Joshua's Law applies only at 16",
          "A defensive driving course in place of driver education",
          "Two years of holding an instructional permit",
        ],
        correctIndex: 0,
        explanation:
          "Since 1 July 2021, Joshua's Law requires an approved driver education course for 17-year-olds applying for a Class D licence as well as 16-year-olds.",
        context:
          "The approved course means 30 hours of classroom or equivalent online instruction, plus six hours behind the wheel with a certified instructor or completion of the DDS Parent/Teen Driving Guide, on top of at least 40 hours of supervised driving including six at night. The Alcohol and Drug Awareness Program is a separate requirement again.",
        trap:
          "'Joshua's Law only applies at 16' was correct for years and is exactly the outdated belief that gets a 17-year-old turned away at the counter.",
        commonlyMissed: true,
        excerptKey: "joshuas-law",
        sourceLabel: "Georgia DDS - Joshua's Law Requirements",
        sourceUrl: B + "teen-drivers/joshuas-law-requirements",
      },
      {
        id: "ga_s6_16",
        topic: "signals",
        question:
          "A green arrow is showing for your turning lane. What does Georgia require before you turn?",
        choices: [
          "Nothing - a green arrow is a protected movement",
          "Stop for pedestrians and yield to vehicles already within the intersection, then proceed carefully in the direction of the arrow",
          "Yield to oncoming traffic as though it were a flashing yellow arrow",
          "Stop completely, then proceed",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow lets you proceed carefully in the direction it points, but only after stopping for pedestrians and yielding to vehicles already inside the intersection.",
        context:
          "That is the same qualification Georgia attaches to a plain green light: permission to proceed if it is safe, not a guarantee the intersection is empty. A flashing yellow arrow is the unprotected version, where oncoming traffic still holds a green and the whole yield is on you.",
        trap:
          "'Protected' is a description of the signal phasing, not a promise that nobody is in the intersection - the pedestrian in the crosswalk is the one people hit.",
        excerptKey: "signal-green",
        sourceLabel: "Georgia Driver's Manual - Traffic Signals and Signs",
        sourceUrl: SIGNALS,
      },
      {
        id: "ga_s6_17",
        topic: "sharing",
        question:
          "A pedestrian with a white cane is crossing the street ahead of you. What is your obligation?",
        choices: [
          "Sound your horn to indicate your presence",
          "Yield if a traffic signal is not controlling the crossing",
          "Give them the right of way at all times",
          "Yield only if they are within a marked crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "Pedestrians using guide dogs or white walking canes must be given the right of way at all times, without qualification.",
        context:
          "It sits within a wider set of pedestrian duties. You stop and remain stopped for a pedestrian in a crosswalk when they are on your half of the roadway or approaching and within one lane of it, when you are turning at any intersection, at stop signs after your stop, at signals even on green if they are still crossing, and when you enter a street from an alley, driveway or private road.",
        trap:
          "Sounding the horn is the wrong instinct entirely with a blind pedestrian - it gives no directional information and may startle them into the road.",
        excerptKey: "blind-pedestrians",
        sourceLabel: "Georgia Driver's Manual - Blind Pedestrians",
        sourceUrl: SHARE,
      },
      {
        id: "ga_s6_18",
        topic: "signs",
        question:
          "You are on a two-lane road with a broken yellow line on your side of the centre. What does that permit?",
        choices: [
          "Parking on the centre line",
          "Passing on the right only",
          "Making U-turns anywhere along the marked stretch",
          "Passing, when the road ahead is clear and the manoeuvre can be completed legally",
        ],
        correctIndex: 3,
        explanation:
          "A broken yellow line on your side means you are in a passing zone, so passing is permitted when the way ahead is clear and you can complete it within the rules.",
        context:
          "Completing it within the rules means finishing before the passing zone ends, before you enter an intersection, and before oncoming traffic gets within 200 feet. Georgia layers absolute prohibitions on top: no passing within 100 feet of a railroad crossing, bridge, viaduct or tunnel, on a hill or curve without sight distance, on the shoulder, or when a school bus is stopped.",
        trap:
          "A passing zone permits the manoeuvre; it does not certify that this particular moment is a safe time to attempt it.",
        excerptKey: "center-lines",
        sourceLabel: "Georgia Driver's Manual - Center Lines",
        sourceUrl: MARKINGS,
      },
      {
        id: "ga_s6_19",
        topic: "emergencies",
        question:
          "Which of these must you do after a crash in Georgia, regardless of whether anybody is injured?",
        choices: [
          "Give your name, address, licence plate number and driver's licence number to the others involved",
          "Contact your insurer before speaking to anyone at the scene",
          "Wait for police before leaving the vehicles under any circumstances",
          "Move both vehicles to the nearest exit before exchanging details",
        ],
        correctIndex: 0,
        explanation:
          "Exchanging name, address, licence plate number and driver's licence number with everyone involved is required, and you should get the same information back.",
        context:
          "Alongside that you stop immediately in a safe place, provide reasonable assistance to anyone injured, and warn approaching traffic if you can do so without endangering yourself. Law enforcement must be notified immediately if anyone is injured or killed or if property damage exceeds $500. On a multilane highway with no apparent serious injury, drivable vehicles should be moved clear of the roadway.",
        trap:
          "Waiting in a live lane for police is the wrong instinct on an expressway, where Georgia specifically wants drivable vehicles moved to a safe refuge.",
        excerptKey: "crash-notify-500",
        sourceLabel: "Georgia Driver's Manual - If You Are Involved In A Crash",
        sourceUrl: CRASH,
      },
      {
        id: "ga_s6_20",
        topic: "rules",
        question:
          "You are in the left lane of an interstate travelling at 70 mph in a 70 zone. A car closes rapidly behind you. What does Georgia require?",
        choices: [
          "Brake gently to discourage the tailgating",
          "Move out of the passing lane to let it by",
          "Move over only once the vehicle has been behind you for a mile",
          "Hold your speed and position, since you are at the limit",
        ],
        correctIndex: 1,
        explanation:
          "The Slow Poke Law requires you to move out of the passing lane for faster-approaching traffic regardless of your own speed.",
        context:
          "The listed exceptions are narrow - traffic conditions, weather, obstructions, complying with a law or traffic control device, being in the lane to exit or turn left, paying a toll, and emergency or highway maintenance vehicles on duty. Impeding traffic carries three points and a fine of up to $1,000, and brake-checking a tailgater strays toward aggressive driving, which is six points.",
        trap:
          "Being at the limit is the argument the statute was written to defeat. It is about the lane, not your speedometer.",
        commonlyMissed: true,
        excerptKey: "slow-poke-law",
        sourceLabel: "Georgia Driver's Manual - Keep Right, Except to Pass",
        sourceUrl: KEEPRIGHT,
      },
      {
        id: "ga_s6_21",
        topic: "signs",
        question:
          "A yellow diamond with a black arrow curving to the right warns of what, and how does it differ from a curve sign?",
        choices: [
          "A right-hand exit ramp",
          "A road that bends right and then continues straight",
          "A sharp turn to the right - an abrupt change of direction rather than a gentle arc",
          "A right-turn-only lane beginning",
        ],
        correctIndex: 2,
        explanation:
          "A sharply bent arrow means a sharp turn. A curve is drawn as a smooth arc, and a sharp turn demands considerably more speed reduction.",
        context:
          "Georgia's family of turn warnings scales from a curve, through a sharp turn, through a sharp turn followed by another the other way, to a winding road with several bends in succession. Advisory speed plaques underneath tell you what the geometry will actually allow.",
        trap:
          "A curve and a sharp turn look similar on a small sign, and the difference is often 20 mph of appropriate approach speed.",
        excerptKey: "sign-diamond",
        sourceLabel: "Georgia Driver's Manual - Warning Signs",
        sourceUrl: WARN,
      },
      {
        id: "ga_s6_22",
        topic: "safety",
        question:
          "You must use headlights in Georgia whenever it is raining. What else triggers the requirement?",
        choices: [
          "Only when visibility falls below 500 feet",
          "Only on interstates and multi-lane highways",
          "Any time between sunset and sunrise only",
          "Half an hour after sunset to half an hour before sunrise, and whenever visibility is limited",
        ],
        correctIndex: 3,
        explanation:
          "The three triggers are the half-hour-after-sunset to half-hour-before-sunrise window, rain, and any time visibility is limited.",
        context:
          "The dimming rules run alongside: low beam within 500 feet of an oncoming vehicle, within 200 feet of a vehicle you are following, on lighted roads, in rain, fog, snow or smoke, and when your own vision drops below 200 feet. High beams belong in rural areas when no other cars are nearby.",
        trap:
          "The half-hour margins are the detail people drop, and they are what make headlights compulsory in the light that still feels usable.",
        excerptKey: "headlights-when",
        sourceLabel: "Georgia Driver's Manual - Use Headlights Properly",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s6_23",
        topic: "signs",
        question: "What does a white regulatory sign showing ONE WAY with an arrow require?",
        choices: [
          "You may travel only in the direction of the arrow",
          "Turns are prohibited from this street",
          "Traffic must keep right of the median",
          "The road becomes one-way at the next intersection",
        ],
        correctIndex: 0,
        explanation:
          "You may travel only in the direction of the arrow. It is a regulatory sign, so it binds you like a traffic law.",
        context:
          "Georgia makes it unlawful to drive contrary to the posted direction of a one-way street, except where a traffic control device, authorised emergency personnel or construction workers direct otherwise. Left turn on red is permitted from the left lane of one one-way street onto another where traffic runs to your left, after a complete stop.",
        trap:
          "The DO NOT ENTER and WRONG WAY signs are the warnings you get when you have already ignored a ONE WAY - by then you are facing traffic.",
        excerptKey: "sign-one-way",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s6_24",
        topic: "impairment",
        question:
          "What is the consequence in Georgia of a reckless driving conviction for a driver under 21?",
        choices: [
          "Six points, with no suspension until 15 points are reached",
          "Four points and a suspension of all driving privileges",
          "Four points and a warning letter",
          "Two points and a mandatory driver improvement course",
        ],
        correctIndex: 1,
        explanation:
          "Reckless driving is four points, and any four-point conviction suspends the licence of a driver under 21. The manual states the suspension for reckless driving under 21 directly.",
        context:
          "Reckless driving is defined as driving in reckless disregard for the safety of persons or property, with speeding, weaving in and out of traffic and improper passing given as examples. Penalties reach a fine of up to $1,000 and imprisonment for up to 12 months. For a first conviction the under-21 suspension runs six months, and twelve for a second.",
        trap:
          "The 15-point threshold is the adult rule and never rescues a driver under 21 from a four-point conviction.",
        commonlyMissed: true,
        excerptKey: "reckless-driving",
        sourceLabel: "Georgia Driver's Manual - Reckless Driving",
        sourceUrl: OTHER,
      },
      {
        id: "ga_s6_25",
        topic: "rightOfWay",
        question:
          "At an intersection controlled by stop signs on all four approaches, who must every driver yield to first?",
        choices: [
          "Any vehicle already signalling a turn",
          "The vehicle on the right",
          "Pedestrians",
          "The first vehicle to stop completely",
        ],
        correctIndex: 2,
        explanation:
          "All drivers yield to pedestrians first. Only after that do the vehicles proceed in the order they arrived, with a tie going to the vehicle on the right.",
        context:
          "Pedestrians recur throughout Georgia's right-of-way rules: at stop signs after your stop, at signals even when you have a green, when turning at any intersection, and when entering a street from an alley, driveway or private road. Crosswalks exist at all four corners of an intersection whether or not they are painted.",
        trap:
          "Everyone rehearses the vehicle tie-break and forgets that pedestrians come before all of it.",
        excerptKey: "row-four-way-stop",
        sourceLabel: "Georgia Driver's Manual - Laws Governing Right-of-Way",
        sourceUrl: ROW,
      },
      {
        id: "ga_s6_26",
        topic: "signs",
        question: "What does a yellow diamond with the word BUMP or a raised-surface symbol tell you?",
        choices: [
          "A bridge joint needs care",
          "A rough surface continues for the next mile",
          "A speed hump has been installed for traffic calming",
          "There is a bump in the road ahead - slow down",
        ],
        correctIndex: 3,
        explanation:
          "There is a bump in the road ahead and the instruction is simply to slow down. It warns about a defect, not a deliberate traffic-calming device.",
        context:
          "Georgia treats bump and dip as a pair, both requiring the same response for the same reason: hitting either at speed unloads the suspension exactly when you might need to steer or brake. Neither carries a required speed, so the judgement of how much to slow is yours.",
        trap:
          "Assuming it must be a speed hump leads drivers to take it at the speed they would take a designed one, which a road defect may not tolerate.",
        excerptKey: "sign-dip",
        sourceLabel: "Georgia Driver's Manual - Warning Signs",
        sourceUrl: WARN,
      },
      {
        id: "ga_s6_27",
        topic: "licensing",
        question:
          "You are stopped by a Georgia officer while driving. What must you be able to do?",
        choices: [
          "Display your driver's licence or permit on request",
          "Show proof of insurance only, since licences are checked electronically",
          "Produce your licence within 48 hours at a police station",
          "Recite your licence number from memory",
        ],
        correctIndex: 0,
        explanation:
          "You must have an appropriate licence or permit in your possession while driving in Georgia, and display it to any law enforcement officer on request.",
        context:
          "Georgia's advice on being pulled over covers the rest: signal and pull over as soon as it is safe, switch off the engine and audio, turn on the interior lights at night, keep your hands visible on the wheel, stay in the vehicle unless directed otherwise, and wait for the officer's instructions before reaching for documents.",
        trap:
          "Electronic checks do not replace the requirement to carry the licence. Possession while driving is the obligation.",
        excerptKey: "carry-license",
        sourceLabel: "Georgia Driver's Manual - Carrying and Displaying Your License",
        sourceUrl: PDF,
      },
      {
        id: "ga_s6_28",
        topic: "signs",
        question:
          "A regulatory sign shows a truck symbol inside a red circle with a slash. What does it mean?",
        choices: [
          "Trucks must stop before entering",
          "Trucks are prohibited from entering this roadway",
          "Trucks must use the right lane",
          "A truck weigh station is ahead",
        ],
        correctIndex: 1,
        explanation:
          "Trucks are prohibited from entering that roadway. The red circle and slash always pictures what is forbidden.",
        context:
          "The same convention runs through Georgia's prohibition signs - a crossed-out bicycle bars bicycles, a crossed-out U-turn arrow bars turning around, a crossed-out right-turn arrow bars right turns. Reading the symbol inside the circle is the whole job.",
        trap:
          "A blue-and-white weigh station sign is a service and guide sign. Only the red circle and slash prohibits anything.",
        excerptKey: "red-circle-slash",
        sourceLabel: "Georgia Driver's Manual - Regulatory Signs",
        sourceUrl: SIGNS2,
      },
      {
        id: "ga_s6_29",
        topic: "sharing",
        question:
          "You are behind a motorcycle whose left turn signal has been flashing for some distance. What should you do?",
        choices: [
          "Assume the rider intends to change lanes rather than turn",
          "Pass on the right immediately, since the rider is committed to turning left",
          "Wait until the rider has unmistakably begun the manoeuvre before you act on the signal",
          "Sound the horn to prompt the rider",
        ],
        correctIndex: 2,
        explanation:
          "Motorcycle signals may not be self-cancelling and riders sometimes forget to switch them off. Wait until the manoeuvre is unmistakably under way before acting on it.",
        context:
          "The same caution applies to a rider shifting position within their lane: they may be moving to be seen or to avoid a hazard rather than preparing to turn. Intersections are the likeliest place for a car-motorcycle collision, usually because a driver did not see the motorcycle and turned across its path.",
        trap:
          "Reading a stale signal as an intention is precisely how the intersection collision happens - the rider carries straight on into the space you took.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Georgia Driver's Manual - Sharing the Road With Motorcycles",
        sourceUrl: SHARE2,
      },
      {
        id: "ga_s6_30",
        topic: "rules",
        question:
          "Which statement about the Georgia knowledge exam is correct?",
        choices: [
          "You need 30 correct out of the 40 questions overall",
          "The road signs part may be taken in any language you choose",
          "The signs and rules parts are averaged, so 20 on signs offsets 12 on rules",
          "You need 15 correct out of 20 on the road signs part and 15 out of 20 on the road rules part, scored separately",
        ],
        correctIndex: 3,
        explanation:
          "Two parts of 20 questions each, and 15 correct required in each. They are passed or failed separately, so one part cannot rescue the other.",
        context:
          "The road signs part is given in English only, though the road rules test is available in some non-English languages - and every applicant must show they can read and understand the simple English used on highway and directional signs. Fail a part and you retake that part the next day the first time, and after seven days on a second or later failure.",
        trap:
          "Averaging the two halves is the mental model most candidates arrive with, and it is why people who ace the rules still walk out having failed.",
        commonlyMissed: true,
        excerptKey: "exam-road-signs",
        sourceLabel: "Georgia Driver's Manual - Testing Information",
        sourceUrl: TESTING,
      },
    ],
  },
];
