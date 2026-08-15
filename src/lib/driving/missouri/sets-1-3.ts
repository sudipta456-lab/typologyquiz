import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Missouri Driver Guide (Missouri
// Department of Revenue, revised August 2025), read from DOR's own PDF, plus
// the Missouri State Highway Patrol's Driver Examination FAQ page and the
// sections of the Revised Statutes of Missouri that carry rules the Guide
// states only as a table.
//
// Missouri's exam shape, confirmed on both official sites:
//  - The knowledge test is 25 multiple-choice questions and you must answer 20
//    correctly. The Guide states that on its introduction page; MSHP, which
//    actually administers the test, states the same thing as 80% with up to
//    five misses allowed.
//  - It is NOT scored in sections. Missouri instead runs a FOUR-PART exam -
//    written, vision, road sign, driving - and those are separate tests, not
//    sections of one score. Third-party practice sites that describe "80% on
//    each section, including road signs" are describing something no official
//    Missouri source publishes.
//  - Neither DOR nor MSHP publishes how many signs the road sign test contains
//    or what fraction of them you must identify. Nothing here asserts one.
//  - Chapter 15 (Commercial Vehicles) is expressly excluded from the Class F
//    written test, so no question here is drawn from it.
//
// Three gaps and conflicts are worth naming, because a learner studying only
// one source will walk into them.
//
// 1. SPEED LIMITS. The Guide gives Missouri's limits only as a table, and its
//    prose says interstates top out at 70 mph. RSMo 304.010.2(1) sets the
//    uniform maximum on rural interstates and freeways at SEVENTY-FIVE. The
//    posted limit really is 70 statewide - the statute is a ceiling the
//    Highways and Transportation Commission has not used - and the exam is
//    written from the Guide, so questions here follow the Guide's 70. The
//    statutory figures are quoted in the excerpt library so the difference is
//    visible rather than hidden.
// 2. MOTORCYCLE HELMETS. The Guide says flatly that the law requires a helmet.
//    RSMo 302.020.2, as amended effective 28 August 2020, requires protective
//    headgear only of riders and passengers UNDER 26 (plus permit holders 26
//    and over). The two official sources genuinely contradict each other, so
//    no question here tests the motorcycle helmet rule at all.
// 3. DOR's own Sample Test Questions PDF still prints an instruction permit fee
//    of $3.50; the current Guide's fee table says $10.00. No question here
//    turns on a licence fee.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads DOR's own
// authoritative wording on the government's site.
const HB = "https://dor.mo.gov/forms/Driver%20Guide.pdf";
const rsmo = (section: string) =>
  `https://revisor.mo.gov/main/OneSection.aspx?section=${section}`;

export const missouriSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Missouri Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Missouri: what the shapes and colours mean, who goes first, and the handful of numbers the Department of Revenue's 25-question written test expects you to know cold.",
    questions: [
      {
        id: "mo_s1_01",
        topic: "signs",
        question:
          "You come to a red, eight-sided sign at an intersection. What does Missouri require of you?",
        choices: [
          "Slow to a walking pace and roll through if nothing is coming",
          "Yield only to traffic on the busier road",
          "Stop only when a pedestrian is waiting to cross",
          "Come to a full stop and wait until crossing vehicles and pedestrians have cleared",
        ],
        correctIndex: 3,
        explanation:
          "The octagon means a full stop every time. Missouri adds a second half to the rule: after stopping you must wait until crossing vehicles and pedestrians have cleared the intersection before you move.",
        context:
          "Missouri signs carry meaning in their shape and colour before you can read a word on them, which is what makes them work in fog or heavy rain. The octagon is reserved for STOP, the triangle for YIELD, and a yellow diamond warns of something ahead. Because the road sign test is a separate part of the Missouri exam, shape-and-colour recognition is worth as much study as the written rules.",
        trap:
          "A rolling stop is not a stop. The wheels have to stop turning however empty the cross street looks.",
        excerptKey: "stop-sign",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_02",
        topic: "signals",
        question: "A steady red light tells you to stop. Where exactly?",
        choices: [
          "Anywhere within about a car length of the signal",
          "At the stop line, the crosswalk, or before the intersection",
          "Level with the signal head so you can see it change",
          "Wherever the vehicle in front of you has stopped",
        ],
        correctIndex: 1,
        explanation:
          "The Guide names three stopping places in order: the stop line if there is one, otherwise the crosswalk, otherwise before you enter the intersection. Creeping past any of them puts you where cross traffic and pedestrians need the space.",
        context:
          "Missouri treats red as stop-and-stay-stopped, with one standing exception: a right turn is allowed after you have come to a complete stop, provided no sign forbids it. Everything else waits for green. Stopping short also matters for people on foot, because a vehicle nosed into the crosswalk forces pedestrians out into moving traffic.",
        trap:
          "Pulling forward for a better view of the cross street is the usual reason people end up sitting in the crosswalk.",
        excerptKey: "red-light-stop",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_03",
        topic: "speed",
        question:
          "There is no speed limit sign anywhere on a residential street inside a Missouri town. What limit applies?",
        choices: ["20 mph", "30 mph", "25 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "Missouri's default inside any city, town or village is 25 mph unless a sign says otherwise. The absence of a sign is not permission to guess upward.",
        context:
          "Missouri sets its limits by the kind of road rather than by a single statewide number, and the Guide prints them as a table: 70 on rural interstates and freeways, 65 on rural expressways, 60 on urban interstates and on other roads outside urbanised areas, and 55 on the lettered state routes. Inside a city, town or village the figure drops to 25 unless posted. Local governments may set their own limits by ordinance, so a posted sign always beats the default.",
        trap:
          "25 feels low for a wide, quiet street. It is still the default, and it is the number the written test asks for.",
        excerptKey: "city-speed-25",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Speed Limit",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_04",
        topic: "rightOfWay",
        question:
          "Three cars reach a four-way stop one after another. In what order do they go?",
        choices: [
          "In the order they arrived, after each has come to a complete stop",
          "Whoever signals a turn first",
          "The cars going straight ahead of any car turning",
          "The car furthest to the right, then clockwise",
        ],
        correctIndex: 0,
        explanation:
          "Missouri's rule for a four-way stop is order of arrival. The driver who reached the intersection first may proceed first, but only after actually stopping.",
        context:
          "The Guide's intersection rules cover the common cases one at a time: yield to pedestrians legally crossing, yield to traffic already on the main road when you come out of a driveway or alley, yield to oncoming traffic when you turn left, and go in arrival order at a four-way stop. The right-hand rule the Guide states is for intersections with no stop sign or signal at all, not for four-way stops.",
        trap:
          "Do not import the yield-to-the-right rule here. That one belongs to uncontrolled intersections; at a four-way stop, arrival order decides.",
        excerptKey: "four-way-stop-first",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Intersections",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_05",
        topic: "signs",
        question: "What does a triangular red-and-white sign require you to do?",
        choices: [
          "Stop completely, then proceed",
          "Merge without changing speed",
          "Continue at the posted limit; it is only a warning",
          "Slow down and give way to traffic already in the intersection or on the road you are entering",
        ],
        correctIndex: 3,
        explanation:
          "A yield sign means slow down and let the other traffic go first. You stop only if stopping is what it takes to give way safely.",
        context:
          "Yield and stop are different duties. A stop sign requires a full stop every time, whatever the traffic. A yield sign requires you to slow enough to be able to give way, and to hand the right of way to vehicles already in the intersection or already on the road you are joining. Missouri also gives the railroad crossbuck the same meaning as a yield sign.",
        trap:
          "Treating a yield as a stop is safe but wrong on the test; treating it as a warning sign is dangerous and wrong.",
        excerptKey: "yield-sign",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_06",
        topic: "rules",
        question: "How far ahead of a turn does Missouri expect you to signal?",
        choices: [
          "At least 50 feet",
          "At least 200 feet",
          "As you begin to turn the wheel",
          "At least 100 feet",
        ],
        correctIndex: 3,
        explanation:
          "The Guide gives 100 feet, and repeats the figure in two separate chapters. Signalling that far out is what gives the driver behind you time to react.",
        context:
          "A signal is a message about what you are about to do, so it is useless once you are already doing it. Missouri asks for at least 100 feet before a turn or lane change. If there is another street or driveway between you and your turn, the Guide tells you to wait until you have passed it before signalling, so nobody pulls out expecting you to turn in there. After the turn, check the signal has cancelled.",
        trap:
          "Signalling and starting the turn in the same movement is the habit this rule exists to break.",
        commonlyMissed: true,
        excerptKey: "signal-100-feet",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Hand and Vehicle Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_07",
        topic: "safety",
        question:
          "On a dry road in good weather, how does the Missouri Driver Guide tell you to measure your following distance?",
        choices: [
          "One car length for every 10 mph of speed",
          "Count three seconds from when the car ahead passes a fixed object",
          "Two car lengths at any speed",
          "Half the length of your own vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Missouri teaches the three second rule. Pick an object beside the road, start counting when the vehicle ahead passes it, and if you reach the object before you finish counting you are too close.",
        context:
          "The three second rule works at any speed because it measures time rather than distance, and the gap you need grows with speed automatically. It is a fair-weather figure. On snow or ice the Guide raises the gap to about eight to ten seconds, and a tired driver or worn brakes needs more again.",
        trap:
          "Car lengths are the old teaching and are useless at speed, because judging lengths out of a windscreen is guesswork.",
        excerptKey: "three-second-rule",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Three Second Rule",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_08",
        topic: "signals",
        question: "A traffic signal is flashing red in all directions. What does it mean?",
        choices: [
          "The signal has failed and you may proceed with care without stopping",
          "Slow down and proceed with caution",
          "Stop and wait for the light to turn green",
          "It means the same thing as a stop sign",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is a stop sign in light form. Stop completely, give way, then go when the way is clear. Waiting for green is pointless because it is not coming.",
        context:
          "Missouri uses flashing signals overnight, in emergencies, at low-volume times and during special events. Flashing red means the same as a stop sign; flashing yellow means slow down and proceed with caution. A signal that is completely dark is different again: the Guide tells you to treat it as a four-way stop.",
        trap:
          "Flashing red and flashing yellow do not mean the same thing. Only the yellow lets you keep moving.",
        excerptKey: "flashing-red",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_09",
        topic: "licensing",
        question:
          "A Missouri officer stops you and asks to see your licence. What does the law require?",
        choices: [
          "You must be carrying your licence or permit and must present it",
          "You may show a photo of it and bring the original to a station later",
          "You need only give your licence number verbally",
          "You must produce it only if you were stopped for a moving violation",
        ],
        correctIndex: 0,
        explanation:
          "Missouri requires you to carry the licence or permit whenever you drive, and to present it when a law enforcement officer asks. There is no substitute in the Guide's wording.",
        context:
          "The Guide pairs this with a second rule people forget: it is against the law to let anyone else use your licence or permit. A new driver's test result form is not a licence either. The examination record the Highway Patrol issues proves you passed, but you cannot drive on it until you have bought the actual permit or licence at a licence office.",
        trap:
          "Passing the tests is not the same as being licensed. The examination record alone is not legal for driving.",
        excerptKey: "carry-license",
        sourceLabel: "Missouri Driver Guide - Chapter 1: The Missouri Driver License",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_10",
        topic: "impairment",
        question:
          "At what blood alcohol content is it illegal for an adult to drive in Missouri?",
        choices: ["0.10% or more", "0.05% or more", "0.08% or more", "0.02% or more"],
        correctIndex: 2,
        explanation:
          "0.08% is the adult limit. Missouri sets a lower one for commercial drivers at 0.04% and a much lower one for anyone under 21 at 0.02%.",
        context:
          "The 0.08% figure is a ceiling on prosecution, not a safety threshold. The Guide is blunt that even one drink is likely to affect your driving and that two could put an average person over the limit. You can also be charged with driving while intoxicated below 0.08% if drugs, medicine or fatigue are impairing you, because the offence is impairment rather than a number.",
        trap:
          "Under 21 the number is 0.02%, which one drink can reach. There is no adult allowance for young drivers.",
        excerptKey: "bac-limits",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Alcohol, Drugs, and Driving",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_11",
        topic: "signs",
        question: "A yellow diamond-shaped sign with black symbols is telling you what?",
        choices: [
          "A rule you must obey, enforceable by ticket",
          "The direction and distance to a town or service",
          "A hazard or special situation is ahead; slow down and be ready to stop",
          "Roadworks are in progress ahead",
        ],
        correctIndex: 2,
        explanation:
          "Yellow diamonds are warning signs. They tell you something ahead needs a lower speed and more attention, and to be ready to stop if it turns out you need to.",
        context:
          "Missouri's sign colours are a code worth learning as a set: white is regulatory, red means stop, yield or prohibited, yellow warns, yellow-green marks school areas, orange means construction, green gives direction and distance, blue points to motorist services, and brown points to parks and cultural sites. Get the colour system and you can read a sign correctly before you can make out the symbol on it.",
        trap:
          "Orange, not yellow, is the work zone colour. A yellow diamond warns of a permanent feature of the road.",
        excerptKey: "warning-signs",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_12",
        topic: "rightOfWay",
        question:
          "An ambulance is approaching with siren and flashing lights. What does Missouri require?",
        choices: [
          "Pull over to the right edge of the road and stop until it has passed",
          "Stop immediately wherever you are, including inside an intersection",
          "Speed up to clear the road ahead of it",
          "Move to the left lane so it can pass on the right",
        ],
        correctIndex: 0,
        explanation:
          "Pull as far right as you can, stop, and stay stopped until the emergency vehicle has gone past. The rule applies whichever direction it is approaching from.",
        context:
          "Two details catch people out. If you are already inside an intersection when you hear the siren, drive through it first and pull over on the far side rather than stopping in the middle. And emergency vehicles often travel in convoy, so the Guide tells you to proceed only when the way is clear, not the moment the first one passes.",
        trap:
          "Stopping dead in an intersection blocks the very route the ambulance needs. Clear the intersection, then pull over.",
        excerptKey: "emergency-pull-right",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_13",
        topic: "rules",
        question: "You have overshot your turning on a normal street. What does the Guide tell you to do?",
        choices: [
          "Reverse carefully in your lane once traffic is clear",
          "Make a U-turn from where you are",
          "Stop and wait for a gap, then back up",
          "Carry on until you reach a place where you can safely turn around",
        ],
        correctIndex: 3,
        explanation:
          "Missouri's rule is blunt: never back a vehicle in any travel lane. Drivers behind you do not expect a car to come towards them and may not see it until it is too late. Go on and turn around somewhere safe.",
        context:
          "The same principle covers stopping. The Guide says not to stop in a travel lane for any reason, including confusion, a breakdown or letting a passenger out, and to keep moving until you can pull off the road. On a highway the rule is stricter still, because reversing or turning around on a controlled-access road puts you head-on to traffic at speed.",
        trap:
          "Waiting for a gap does not make reversing legal. The prohibition is on backing in a travel lane at all.",
        excerptKey: "never-back-in-travel-lane",
        sourceLabel: "Missouri Driver Guide - Chapter 7: No Lane Markings",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_14",
        topic: "speed",
        question: "What is the maximum speed limit on Missouri's interstate highways?",
        choices: ["55 mph", "65 mph", "75 mph", "70 mph"],
        correctIndex: 3,
        explanation:
          "The Guide gives 70 mph as the maximum on Missouri's interstates, and notes that lower limits are posted in urban areas where interchanges and merging traffic are frequent.",
        context:
          "Missouri's table sets 70 for rural interstates and freeways, 65 for rural expressways, and 60 for interstates, freeways and expressways inside urbanised areas. A posted sign always governs, and a limit is a maximum for ideal conditions rather than a target: the Guide says that by law you must slow down when conditions demand it.",
        trap:
          "The statute book allows up to 75 on rural interstates, but Missouri has not posted that. The Guide's 70 is the number the written test uses.",
        excerptKey: "interstate-max-70",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Speed Limit",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_15",
        topic: "signals",
        question:
          "Your light turns green but two people are still finishing their crossing in front of you. What must you do?",
        choices: [
          "Yield to them; a green light does not override pedestrians in the intersection",
          "Proceed slowly around them, since your light is green",
          "Sound your horn to hurry them along",
          "Go, because their signal has already changed to Don't Walk",
        ],
        correctIndex: 0,
        explanation:
          "A green light lets you go through the intersection only after you have given way to traffic and pedestrians still in it. Their signal changing does not clear them out of your path.",
        context:
          "Missouri gives pedestrians a specific protection here: someone caught mid-crossing when the flashing Don't Walk appears is entitled to finish crossing. The Guide also tells drivers not to assume pedestrians have seen them, not to block a crosswalk while stopped at a red, and never to pass a vehicle that has stopped or slowed for someone on foot.",
        trap:
          "Green means the way is yours once it is clear. It does not transfer the right of way away from people already in the intersection.",
        excerptKey: "green-light",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_16",
        topic: "parking",
        question: "You are parking on a hill. Which way should the front wheels point?",
        choices: [
          "Straight ahead, with the handbrake off so the car can settle",
          "Sharply towards the side of the road, so the car would roll away from traffic",
          "Sharply away from the kerb, so the car would roll into the lane",
          "It only matters on a manual transmission",
        ],
        correctIndex: 1,
        explanation:
          "Turn the wheels sharply toward the side of the road. That way, if the car ever gets loose, it rolls away from moving traffic instead of into it.",
        context:
          "Missouri's hill-parking routine is a checklist rather than one action: wheels turned the right way, engine off and the vehicle left in the proper gear, parking brake set, keys out, mirror checked for traffic before you open the door, and the vehicle locked. The Guide asks for the parking brake every time you park, not just on a slope.",
        trap:
          "The parking pawl on an automatic is not a substitute for turned wheels and a set brake, and the Guide gives no exemption for automatics.",
        excerptKey: "park-hill-wheels",
        sourceLabel: "Missouri Driver Guide - Chapter 5: Parking",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_17",
        topic: "signs",
        question:
          "A white X-shaped sign at a railroad crossing has the same legal meaning as which other sign?",
        choices: [
          "A stop sign",
          "A speed limit sign",
          "A no passing zone pennant",
          "A yield sign",
        ],
        correctIndex: 3,
        explanation:
          "The crossbuck carries the meaning of a yield sign, so you must give way to trains at the crossing. The plate under it tells you how many tracks cross the road.",
        context:
          "Missouri layers extra duties on top of the crossbuck. If red lights are flashing or the gate is down you must stop, and the stop has to be between 15 and 50 feet from the tracks. Never drive around a lowered gate. After a train passes, the lights may keep flashing, and where there are two or more tracks you have to look for a second train before crossing.",
        trap:
          "A crossbuck on its own is not a stop sign. It becomes a stop only when the lights flash, the gate lowers, or a train is close enough that yielding means stopping.",
        commonlyMissed: true,
        excerptKey: "crossbuck-yield",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Railroad Crossing",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_18",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light with no arrow. An oncoming car is coming straight through. Who goes first?",
        choices: [
          "You do, because a left turn clears the intersection faster",
          "The oncoming car; you must yield to traffic going straight",
          "Whoever entered the intersection first",
          "The oncoming car only if it is already inside the intersection",
        ],
        correctIndex: 1,
        explanation:
          "Missouri's rule is that drivers turning left must yield to oncoming vehicles going straight. A circular green permits the turn; it does not give you priority over the traffic coming at you.",
        context:
          "The Guide describes three left-turn phases. A permissive phase gives you a circular green or a flashing yellow arrow and requires you to wait for an adequate gap. A protected phase gives you a green arrow while opposing traffic is held on red. A protected-permissive phase gives you both in turn, so the same signal head can mean two different things a few seconds apart.",
        trap:
          "A flashing yellow arrow looks like permission but works like a green ball: you may turn, but only into a gap you have judged.",
        excerptKey: "left-turn-yield",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Intersections",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_19",
        topic: "safety",
        question:
          "It is raining hard enough that you have the wipers going. What does Missouri law require?",
        choices: [
          "Nothing extra during daylight hours",
          "Hazard flashers until the rain eases",
          "Your headlights must be on",
          "Parking lights are sufficient in daytime rain",
        ],
        correctIndex: 2,
        explanation:
          "Missouri ties the two together: if conditions require your windshield wipers, you must use your headlights. It is a legal requirement, not advice.",
        context:
          "Headlights in rain are mostly about being seen rather than seeing. Missouri also requires headlights from half an hour after sunset until half an hour before sunrise, low beams within 500 feet of an oncoming vehicle and within 300 feet when following one, and warns that headlights only show you about 350 feet of road, so at speed you can outrun them.",
        trap:
          "Daytime running lights usually leave the tail lights dark. In spray, the lights that matter to the driver behind are the ones at the back.",
        excerptKey: "headlights-with-wipers",
        sourceLabel: "Missouri Driver Guide - Chapter 9: Headlight Use",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_20",
        topic: "rules",
        question:
          "You are stopped at a red light and want to turn right. What does Missouri allow?",
        choices: [
          "Turn after a complete stop, if the way is clear and no sign forbids it",
          "Turn without stopping when the road is obviously empty",
          "Turn only when a green arrow appears",
          "Turn only where a sign expressly permits a right turn on red",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is permitted in Missouri by default. Two conditions attach: you must actually stop first, and the way must be clear of pedestrians and traffic. A No Right Turn On Red sign withdraws the permission.",
        context:
          "This is a default that signs can take away, never a right that overrides them. The stop has to be a real one at the stop line, crosswalk or intersection edge. Missouri also warns drivers turning right on red to watch for pedestrians and cyclists coming up on their right, because that is exactly where a driver looking left for a gap will not be looking.",
        trap:
          "Clear enough to go is not the test. Without a complete stop first, the turn is unlawful even on an empty road.",
        excerptKey: "right-on-red",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_21",
        topic: "sharing",
        question: "You are overtaking a motorcycle on a two-lane road. How much room should you give it?",
        choices: [
          "A full lane width; do not squeeze past",
          "Enough to keep half of your car in the lane",
          "Three feet is sufficient at any speed",
          "Whatever the lane markings allow",
        ],
        correctIndex: 0,
        explanation:
          "Missouri says to give a motorcycle a full lane width when you pass and not to squeeze past. The rider needs the whole lane because they change position within it to deal with road hazards.",
        context:
          "The Guide's reasoning is about how motorcycles behave rather than how much space they occupy. Riders move around inside their lane for manhole covers, diagonal railroad tracks, debris and crosswinds, so the space beside them is working space. It also warns that motorcycles are easy to overlook and that their speed and distance are hard to judge, which is why so many collisions happen at intersections.",
        trap:
          "A motorcycle taking up a fraction of the lane does not mean the lane is shareable. The Guide says outright not to share a lane with one.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Sharing The Road With Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_22",
        topic: "speed",
        question:
          "Missouri interstates carry a minimum speed as well as a maximum. What is the minimum?",
        choices: ["30 mph", "40 mph", "45 mph", "50 mph"],
        correctIndex: 1,
        explanation:
          "You may not drive slower than 40 mph on an interstate highway under normal roadway conditions. If that is too fast for you or your vehicle, the Guide says to take a different route.",
        context:
          "Missouri treats going too slowly as a genuine offence rather than a courtesy failure. Driving below a posted minimum in normal conditions is against the law, and even with no minimum posted it is unlawful to drive so slowly that you block traffic. Bad weather, heavy traffic or a poor road surface are the recognised reasons for going slower.",
        trap:
          "Slower is not automatically safer. The Guide says so in those words, because a slow vehicle in a fast stream causes overtaking, and overtaking causes crashes.",
        commonlyMissed: true,
        excerptKey: "interstate-minimum-40",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Speed Limit",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_23",
        topic: "signs",
        question: "What colour marks a Missouri work zone sign?",
        choices: ["Yellow", "Yellow-green", "Blue", "Fluorescent orange"],
        correctIndex: 3,
        explanation:
          "Work zone signs are fluorescent orange. They tell you work is going on in or beside the roadway and that conditions ahead are less than ideal.",
        context:
          "Missouri backs its work zone signs with money. Speeding or passing in a construction or work zone on state roadways carries a fine of at least $250 for a first offence and at least $300 for a later one, on top of any other penalty. Work zones come in several shapes - shoulder work, lane closures, flagging operations and mobile work zones - and a flagger's instructions govern whatever the signs say.",
        trap:
          "Yellow-green is the school colour, not construction. Orange is the one that means people are working within feet of your wheels.",
        excerptKey: "work-zone-orange",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Work Zone Signs",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_24",
        topic: "impairment",
        question:
          "A 19-year-old Missouri driver is stopped after drinking. At what BAC does the law bite?",
        choices: [
          "0.08%, the same as an adult",
          "0.05%",
          "More than 0.02%",
          "Any measurable amount at all",
        ],
        correctIndex: 2,
        explanation:
          "For a driver over 15 and under 21, a BAC of more than 0.02% is enough for a court to suspend or revoke the licence. The adult 0.08% threshold does not apply to them.",
        context:
          "Missouri stacks several under-21 rules. The Abuse and Lose law can take a licence for 90 days for any intoxication-related traffic offence, for possessing or using alcohol or drugs while driving, or for altering or misrepresenting a licence. A minor in possession conviction brings a 30-day suspension for a first offence, 90 days for a second and a one-year revocation for a third, and the Guide notes that consumption counts as possession.",
        trap:
          "0.02% is roughly one drink for many people. Under 21 there is no allowance to drink at all before driving.",
        excerptKey: "mip-bac-02",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Minor in Possession (MIP)",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_25",
        topic: "licensing",
        question: "How many questions are on Missouri's written knowledge test, and how many must you get right?",
        choices: [
          "20 questions, 16 correct",
          "25 questions, 20 correct",
          "30 questions, 24 correct",
          "40 questions, 32 correct",
        ],
        correctIndex: 1,
        explanation:
          "The written test is 25 multiple-choice questions and you must answer 20 correctly. The Highway Patrol, which administers it, describes the same standard as 80% with up to five misses allowed.",
        context:
          "Missouri runs a four-part exam: the written test, a vision test, a road sign test and a driving skills test. Those are separate tests rather than sections of one score, and neither DOR nor the Highway Patrol publishes how long the road sign test is or what fraction of it you must pass. Every written question comes from the Driver Guide, and Chapter 15 on commercial vehicles is excluded from the Class F test.",
        trap:
          "The written test is not the whole exam. Passing it still leaves the vision, road sign and driving tests between you and a licence.",
        excerptKey: "written-25-questions",
        sourceLabel: "Missouri Driver Guide - Introduction",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_26",
        topic: "emergencies",
        question:
          "You reverse into a parked car in an empty lot and cause visible damage. Nobody is around. What does Missouri require?",
        choices: [
          "Nothing, since a parking lot is private property",
          "Leave a note only if the damage looks like more than $500",
          "Do not leave; leaving the scene of a traffic crash is a crime",
          "Report it to your insurer within 30 days and take no other step",
        ],
        correctIndex: 2,
        explanation:
          "The Guide is explicit that even a crash with a parked vehicle is one you must not drive away from. Leaving the scene of a traffic crash is a crime in Missouri.",
        context:
          "At any crash the sequence is stop, move the vehicle out of the traffic lanes if you safely can, help anyone injured without moving them, call the police, and exchange names, addresses, licence and plate numbers and insurance details. You stay until a law enforcement officer says you may go. A separate written report to the Driver License Bureau is required within 30 days in specific circumstances.",
        trap:
          "A parking lot is not a loophole. The Guide names parking lots specifically when it describes reportable accidents.",
        excerptKey: "crash-do-not-leave",
        sourceLabel: "Missouri Driver Guide - Chapter 13: Traffic Crashes",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_27",
        topic: "signals",
        question: "The light ahead turns steady yellow as you approach. What does Missouri require?",
        choices: [
          "Accelerate to clear the intersection before red",
          "Stop, unless you are already in the intersection or too close to stop safely",
          "Treat it as a warning only and continue at the same speed",
          "Stop in every case, without exception",
        ],
        correctIndex: 1,
        explanation:
          "A steady yellow warns that red is next and the Guide's instruction is to stop for it. The one exception is when you are already inside the intersection or so close that stopping safely is not possible.",
        context:
          "Yellow is a warning, not an allowance. The exception exists for the driver already committed, not for the driver who decides to commit. A steady yellow arrow works the same way for a turning movement: it means the green arrow is ending and you must be ready to yield to oncoming traffic or to stop.",
        trap:
          "Speeding up on yellow turns a stopping decision into a red-light entry, which is exactly the movement that causes side impacts.",
        excerptKey: "steady-yellow",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_28",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing at a corner where no crosswalk is painted. What is your duty?",
        choices: [
          "Yield; Missouri protects marked and unmarked crosswalks alike",
          "Nothing, since an unmarked crossing is not a crosswalk",
          "Sound your horn and proceed",
          "Yield only if a school is nearby",
        ],
        correctIndex: 0,
        explanation:
          "Missouri requires drivers to yield to a pedestrian in a marked or unmarked crosswalk on or approaching their side of the road. Not every crosswalk is painted, and the Guide says so directly.",
        context:
          "The Guide adds a rule that catches people out in multi-lane traffic: never pass a vehicle that has stopped or slowed for a pedestrian, because that vehicle is the only thing hiding the person from you. Blind pedestrians get more than a yield - where someone is crossing guided by a dog or carrying a white cane, vehicles must come to a complete stop.",
        trap:
          "Absence of paint is not absence of a crosswalk. The legal crossing exists at the corner whether or not anyone has painted it.",
        excerptKey: "crosswalk-marked-unmarked",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Sharing The Road With Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_29",
        topic: "safety",
        question: "Who must wear a seat belt in a Missouri passenger vehicle?",
        choices: [
          "The driver only",
          "Everyone in the vehicle, in every case",
          "The driver and front seat occupants; with an intermediate licence holder driving, all passengers",
          "Only occupants under the age of 18",
        ],
        correctIndex: 2,
        explanation:
          "The general Missouri rule covers the operator and front seat occupants. It tightens for a young driver: when an intermediate licence holder is driving, all passengers must be properly restrained.",
        context:
          "Child restraint duties stack on top by age, weight and height. Under four years old or under 40 pounds means a child restraint system. From four to seven, at 40 to 79 pounds and under 4 feet 9 inches, a restraint or booster seat. At eight or older, or 80 pounds, or over 4 feet 9 inches, a safety belt or booster. The Guide also says children 12 and under belong in a rear seat.",
        trap:
          "The intermediate licence rule is the one people miss. A back-seat passenger who would be legal with an adult driving is not legal with a 16-year-old driving.",
        excerptKey: "seat-belt-law",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Seat Belts - It's The Law",
        sourceUrl: HB,
      },
      {
        id: "mo_s1_30",
        topic: "rules",
        question: "What do two solid yellow lines down the middle of a road mean?",
        choices: [
          "Neither direction may cross them to pass",
          "Passing is allowed in both directions when clear",
          "Passing is allowed only in daylight",
          "The lane between them is a shared left-turn lane",
        ],
        correctIndex: 0,
        explanation:
          "Two solid yellow lines separate opposing traffic on a four-lane road, and the Guide's instruction is that you should never cross them to pass.",
        context:
          "Missouri's marking code is small enough to memorise. Yellow separates traffic moving in opposite directions and white separates traffic moving the same way. Broken lines may be crossed to pass; solid lines should not be. If the line on your left is yellow, whatever is on the other side of it is coming towards you.",
        trap:
          "A shared centre turn lane also uses yellow, but it is marked with a solid and a dashed yellow line on each side, not two solid lines.",
        excerptKey: "never-cross-double-yellow",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Direction of Traffic",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Everyday Missouri Rules",
    difficulty: "easy",
    description:
      "Signs, markings and everyday priority calls. The rules here come up on every drive across Missouri, and most of them come up on the written test too.",
    questions: [
      {
        id: "mo_s2_01",
        topic: "rules",
        question:
          "Traffic ahead is crawling and the shoulder is wide and empty. May you use it to get past?",
        choices: [
          "Yes, if you stay below the posted limit",
          "Yes, where the shoulder is paved",
          "Yes, if the vehicle ahead is stopped and signalling a left turn",
          "No; Missouri forbids passing on the shoulder in any case",
        ],
        correctIndex: 3,
        explanation:
          "Missouri allows passing on the right only in specific situations, and none of them involve the shoulder. The Guide states that in no event may the movement be made by driving off the paved or main travelled portion of the roadway.",
        context:
          "Passing on the right is legal in four cases: when the vehicle ahead is making or about to make a left turn, on a city street wide enough for two or more lines of vehicles in each direction, on a one-way street, and on a highway outside a city that is marked for four or more lanes. The shoulder is excluded from all of them, and the Guide's separate warning is that other drivers do not expect anyone to be out there.",
        trap:
          "The left-turn exception lets you pass on the right inside the roadway. It does not put the shoulder in play.",
        excerptKey: "passing-right-not-shoulder",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Passing on the Right",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_02",
        topic: "signs",
        question: "A pennant-shaped sign on the left side of a two-lane road marks what?",
        choices: [
          "A school zone",
          "A railroad crossing",
          "A hospital or rest area",
          "The start of a no passing zone",
        ],
        correctIndex: 3,
        explanation:
          "The pennant is Missouri's no passing zone sign, and it sits on the left so it faces the driver who would be tempted to cross the centre line.",
        context:
          "Missouri's shape code assigns each outline a single job: octagon for stop, triangle for yield, pentagon for school, round for a railroad advance warning, crossbuck for the crossing itself, diamond for warning, and the pennant for no passing. Guide signs are horizontal rectangles and regulatory signs are vertical ones. Learning the shapes gets you through the road sign test faster than learning individual signs.",
        trap:
          "A pentagon means school, not no-passing. Both are five-sided in casual memory, which is exactly why the test asks.",
        excerptKey: "sign-shapes-pentagon",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Sign Shapes",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_03",
        topic: "rightOfWay",
        question:
          "Two cars reach a crossroads at the same moment. There is no stop sign, no signal and no roundabout. Who yields?",
        choices: [
          "The car on the wider road",
          "The driver on the left yields to the driver on the right",
          "Neither; both must stop",
          "The driver on the right yields to the driver on the left",
        ],
        correctIndex: 1,
        explanation:
          "Where an intersection has no stop sign and no traffic signal, Missouri drivers must yield to vehicles coming from the right. The Guide carves roundabouts out of this rule expressly.",
        context:
          "This is the fallback rule for uncontrolled intersections, which are common on rural and residential grids. It does not govern four-way stops, where arrival order decides, and it does not govern roundabouts, where you always yield to traffic already circulating. The Guide's framing is worth remembering: the law says who must yield, it does not hand anybody the right of way.",
        trap:
          "Applying yield-to-the-right at a roundabout gets it backwards, because at a roundabout the circulating traffic is usually on your left.",
        excerptKey: "uncontrolled-yield-right",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Intersections",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_04",
        topic: "speed",
        question: "When must you obey the lower speed limit posted in a Missouri school zone?",
        choices: [
          "When the lights are flashing or children are present",
          "Only on weekday mornings and afternoons",
          "At all times, on every day of the year",
          "Only when a crossing guard is standing in the road",
        ],
        correctIndex: 0,
        explanation:
          "The Guide ties the reduced school zone limit to flashing lights or the presence of children. Either condition is enough on its own.",
        context:
          "School areas carry more than a speed rule. Missouri marks them with yellow-green signs, and where a school crossing has a traffic patrol you must stop and yield when a patrol member signals you. The Guide's broader instruction is to be extra careful anywhere near schools, playgrounds, parks and residential areas, because children run into the road without looking.",
        trap:
          "Children present is a live condition, not a timetable. Sports and after-school activities keep children around long after the last bell.",
        excerptKey: "school-zone-flashing",
        sourceLabel: "Missouri Driver Guide - Chapter 4: As a Driver, You Should Know",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_05",
        topic: "signals",
        question: "A green arrow is showing for your lane. What does it mean?",
        choices: [
          "You may turn after yielding to oncoming traffic",
          "You may drive in the direction the arrow points, from the proper lane, with the way clear",
          "You may turn only after stopping first",
          "The arrow will shortly change to red, so wait",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow gives you the movement it points to. The conditions are that you are in the proper lane and that the way is clear of all traffic and pedestrians.",
        context:
          "Missouri distinguishes a protected turn from a permissive one. Under a green arrow, opposing traffic is being held on red, so the movement is protected. Under a circular green or a flashing yellow arrow it is permissive and the gap is yours to judge. A steady yellow arrow is the handover between the two, warning that the protection is ending.",
        trap:
          "Protected does not mean unconditional. Pedestrians in the crosswalk still have to be clear before you move.",
        excerptKey: "green-arrow",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Left Turn Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_06",
        topic: "safety",
        question:
          "You are counting the three second rule and you reach the marker at one-thousand-two. What does that tell you?",
        choices: [
          "You are following too closely",
          "Your gap is correct for the speed",
          "You have more gap than you need",
          "The rule does not apply below 40 mph",
        ],
        correctIndex: 0,
        explanation:
          "Reaching the object before you have finished counting means you have less than three seconds of gap, so you are too close to the vehicle ahead.",
        context:
          "Rear-end crashes are among the most common on Missouri roads, and the Guide attributes them to drivers who follow too closely to stop when the car in front does. Your stopping distance is reaction distance plus braking distance, and the Guide's own chart allows a second and a half just for reacting. Fatigue, bad brakes and speed all lengthen it.",
        trap:
          "Counting faster to make the number work is a self-inflicted wound. The count has to be at a natural one-thousand-one pace.",
        excerptKey: "three-second-too-close",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Three Second Rule",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_07",
        topic: "parking",
        question: "On a two-way Missouri street, which of these is a place you may not park?",
        choices: [
          "Twenty feet back from an intersection on the right",
          "On the left-hand side of the street",
          "Facing the direction of travel on the right",
          "Alongside a kerb painted white",
        ],
        correctIndex: 1,
        explanation:
          "Missouri's no-parking list includes the left side of a two-way street, and separately forbids parking with your vehicle facing against traffic.",
        context:
          "The list also covers intersections, crosswalks and sidewalks, driveway entrances, bridges, fire hydrants, kerbs painted yellow, and anywhere you would block the normal flow of traffic or create a hazard. One-way streets are the exception to the left-side rule: there you may normally park on either side.",
        trap:
          "Parking on the left of a two-way street is exactly how a vehicle ends up facing oncoming traffic, which is the second half of the same rule.",
        excerptKey: "no-parking-zones",
        sourceLabel: "Missouri Driver Guide - Chapter 5: No-Parking Zones",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_08",
        topic: "sharing",
        question: "You need to turn right across a marked bicycle lane. What does Missouri allow?",
        choices: [
          "Nothing; you may never cross a bicycle lane",
          "You may cross it to turn, after yielding to cyclists in it",
          "You may drive along it for up to 200 feet before the turn",
          "You may cross it only where the lane markings are broken",
        ],
        correctIndex: 1,
        explanation:
          "A bicycle lane may be crossed when you are turning or entering or leaving the roadway, but you must yield to bicyclists already in it.",
        context:
          "The Guide's advice for a right turn behind a cyclist is to slow down and stay behind them until you can turn, rather than overtake and cut across. Where you are turning left, you must yield to oncoming cyclists unless you are certain you can complete the turn first, because cyclists travel faster than drivers expect.",
        trap:
          "The right hook - overtaking a cyclist then turning across them - is the collision this rule is written to prevent.",
        excerptKey: "bicycle-lane-yield",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Sharing the Road with Mopeds and Bicycles",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_09",
        topic: "licensing",
        question: "What is the minimum age to get a Missouri instruction permit?",
        choices: ["14", "16", "15", "15 and a half"],
        correctIndex: 2,
        explanation:
          "The instruction permit is the first step in Missouri's Graduated Driver License programme and the eligible age is 15.",
        context:
          "The three steps run permit at 15, intermediate licence at 16, and full licence at 18. To get the permit you pass the vision, road sign and written tests, and a parent, stepparent, legal guardian or certified trainer must come with you to the licence office to sign a permission statement. The 15-and-a-half figure belongs to the motorcycle instruction permit, which needs an approved rider training course at that age.",
        trap:
          "15 and a half is a real Missouri age, but it is the motorcycle permit age, not the car permit age.",
        excerptKey: "permit-age-15",
        sourceLabel: "Missouri Driver Guide - Chapter 1: Types of Permits",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_10",
        topic: "impairment",
        question:
          "You are arrested on suspicion of DWI and refuse the chemical test. What happens to your licence?",
        choices: [
          "It is taken away for one year",
          "Nothing until a court convicts you",
          "It is suspended for 90 days",
          "It is revoked for five years",
        ],
        correctIndex: 0,
        explanation:
          "Refusing a chemical test costs you your licence for one year in Missouri. The refusal itself triggers it, independently of whether you are convicted of anything.",
        context:
          "Getting the licence back after an intoxication-related action means paying a $45 fee, completing a Substance Awareness Traffic Offender Program, filing SR-22 proof of insurance for two years, and, where there is more than one intoxication-related contact on the record, running an ignition interlock device for at least six months from reinstatement.",
        trap:
          "Refusing does not deny the state its evidence for free. The one-year revocation is longer than the 90-day suspension a first-offence 0.08% reading brings.",
        excerptKey: "refusal-one-year",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Refusal to Submit to a Chemical Test",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_11",
        topic: "signs",
        question:
          "You come up behind a tractor displaying a reflective orange triangle. What does the triangle tell you?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle is wider than a normal lane",
          "The driver is a learner",
          "The vehicle is travelling at less than 25 mph",
        ],
        correctIndex: 3,
        explanation:
          "The orange triangle marks a slow moving vehicle, one travelling at less than 25 mph. On a 55 mph route that is a closing speed of 30 mph or more.",
        context:
          "Missouri requires the emblem on any vehicle moving at 25 mph or slower from sunset until half an hour before sunrise, mounted on the rear near the middle and four feet or more above the road, and kept clean and reflective. You will see it on farm machinery and construction equipment, which is why it matters most on lettered routes and rural highways.",
        trap:
          "Judging the gap by how big the vehicle looks fails badly here, because your closing speed is far higher than it feels.",
        excerptKey: "slow-moving-triangle",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Special Road and Traffic Conditions",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_12",
        topic: "rules",
        question:
          "You want to make a U-turn at an intersection controlled by a traffic signal. What does the Missouri Driver Guide say?",
        choices: [
          "It is allowed once the light is green and the way is clear",
          "Never make one there",
          "It is allowed only from a dedicated left-turn lane",
          "It is allowed unless a sign forbids it",
        ],
        correctIndex: 1,
        explanation:
          "The Guide tells you never to make a U-turn at a location marked with a No U-Turn sign, or at an intersection controlled by a traffic signal or a police officer. A signal-controlled intersection is off limits whatever the light is doing.",
        context:
          "Missouri also rules out U-turns on any curve or near the crest of a hill, where oncoming drivers cannot see you in time, and notes that individual towns and cities may prohibit them outright. Where a shared centre turn lane exists, U-turns are permitted from it only where local rules allow.",
        trap:
          "Many states allow a U-turn on a green ball unless posted otherwise. Missouri's Guide does not, and the written test is written from the Guide.",
        commonlyMissed: true,
        excerptKey: "u-turn-prohibited",
        sourceLabel: "Missouri Driver Guide - Chapter 3: U-Turns",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_13",
        topic: "signals",
        question:
          "A power cut has left the traffic lights at a busy intersection completely dark. How should you treat it?",
        choices: [
          "As a green light for the through road",
          "Proceed with caution without stopping",
          "As a four-way stop",
          "Wait at the line until an officer arrives",
        ],
        correctIndex: 2,
        explanation:
          "Missouri's rule for a dark or non-functioning signal is to treat the intersection as a four-way stop. Every approach stops, then goes in arrival order.",
        context:
          "A dark signal is different from a flashing one. Flashing red means the same as a stop sign for that approach; flashing yellow means slow down and proceed with caution; dark means everyone stops. If a traffic officer is directing the intersection, their signals override the lights and the signs entirely.",
        trap:
          "Assuming the main road keeps priority is the classic error, because the driver on the side road is assuming the same thing about their own approach.",
        commonlyMissed: true,
        excerptKey: "dark-signal",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Left Turn Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_14",
        topic: "rightOfWay",
        question:
          "A school bus ahead of you starts flashing amber warning lights. What is happening?",
        choices: [
          "The bus is broken down",
          "The bus is about to pass a hazard",
          "The bus is warning you it will stop in about 500 feet",
          "The bus has already stopped and you must stop too",
        ],
        correctIndex: 2,
        explanation:
          "Amber warning lights flash 500 feet before the bus reaches a designated stop. They are the advance warning; the red lights and stop arm come when the bus has actually stopped.",
        context:
          "Once the alternately flashing red lights and the stop signal arm are activated, oncoming and following traffic must stop before reaching the bus. You stay stopped until the bus moves or the driver signals you on, and then you watch for children walking along the roadside, because a child who has crossed in front of the bus may still be beside your lane.",
        trap:
          "Amber is your cue to slow and prepare, not your last chance to get past. Accelerating on amber is how drivers arrive at the bus exactly as the reds come on.",
        excerptKey: "school-bus-amber-500",
        sourceLabel: "Missouri Driver Guide - Chapter 3: School Buses",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_15",
        topic: "speed",
        question:
          "You turn off a numbered highway onto a two-lane state route identified by a letter, such as Route AB. With no sign posted, what limit applies?",
        choices: ["45 mph", "50 mph", "60 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "Missouri's lettered routes carry their own default of 55 mph, lower than the 60 that applies to other roads outside urbanised areas.",
        context:
          "The lettered supplemental routes are a Missouri peculiarity - narrow, two-lane county-serving roads signed with letters instead of numbers. The statute allows the Department of Transportation to raise the limit on them but caps it at 60. Whatever the default, a posted sign governs, and the limit is a maximum for ideal conditions.",
        trap:
          "The 60 mph default for other rural roads does not reach the lettered routes. They are singled out at 55.",
        excerptKey: "rsmo-lettered-roads-55",
        sourceLabel: "Missouri Revised Statutes - Section 304.010.2(5)",
        sourceUrl: rsmo("304.010"),
      },
      {
        id: "mo_s2_16",
        topic: "emergencies",
        question:
          "Your car dies and you cannot get it fully off a two-lane road. What does the Guide tell you to do?",
        choices: [
          "Stay in the driver's seat with the engine running",
          "Stand behind the vehicle waving at traffic",
          "Turn on the emergency flashers and place flares behind the vehicle",
          "Push the car over the nearest crest so it is out of the lane",
        ],
        correctIndex: 2,
        explanation:
          "Flashers on, flares behind the vehicle to give following drivers time to change lanes. The Guide is equally firm about what not to do: never stand in the roadway.",
        context:
          "If you cannot clear the road, stop where drivers have a clear view of you - not just over a hill or just around a curve. Lift the hood or tie a white cloth to the antenna, mirror or door handle. Do not attempt a tyre change that puts you in a traffic lane. Missouri publishes *55 as the cellular number for highway emergency assistance.",
        trap:
          "Standing behind the car to warn traffic puts you in the impact zone. The flares do that job without a person attached.",
        excerptKey: "breakdown-never-stand",
        sourceLabel: "Missouri Driver Guide - Chapter 6: Emergencies",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_17",
        topic: "parking",
        question: "When may a vehicle use a space marked with the International Symbol of Access?",
        choices: [
          "Whenever the driver has a placard at home",
          "For short stops of under five minutes",
          "Whenever no other space is available",
          "When it displays a placard or plates and a disabled person is riding, being dropped off or picked up",
        ],
        correctIndex: 3,
        explanation:
          "Missouri needs both halves: the vehicle displays the placard or the plates, and a physically handicapped person is the occupant at the time of parking, or is being dropped off or picked up.",
        context:
          "Using someone else's placard when that person is not being transported is expressly illegal, as is parking in the striped access aisle beside a reserved space, which is the room a wheelchair needs to get out. A conviction carries a fine of no less than $50 and no more than $300.",
        trap:
          "Borrowing a relative's placard to run an errand is the specific abuse the Guide names, and having the placard on the mirror does not cure it.",
        excerptKey: "handicap-space-rule",
        sourceLabel: "Missouri Driver Guide - Chapter 5: Parking",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_18",
        topic: "safety",
        question:
          "You are on high beams at night and a car appears coming the other way. When do you dip?",
        choices: [
          "Only once you can read its number plate",
          "When it flashes you",
          "Within about 200 feet",
          "Within 500 feet of the oncoming vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Missouri gives 500 feet, about a city block, for an oncoming vehicle. There is a second figure for following: dip to low beams when you are within 300 feet of the vehicle in front.",
        context:
          "High beams are the default on an empty road because low beams show far less. The Guide warns against overdriving your headlights - they reach only about 350 feet, so at highway speed you can be moving faster than you can see to stop. Around deer it recommends high beams whenever there is no opposing traffic, because the beams pick up their eyes.",
        trap:
          "Waiting for the other driver to flash means you have already dazzled them. The distance is the trigger, not their reaction.",
        excerptKey: "low-beams-500-300",
        sourceLabel: "Missouri Driver Guide - Chapter 9: Night Driving",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_19",
        topic: "signs",
        question: "A green rectangular sign with white lettering is giving you what?",
        choices: [
          "Direction and distance to a place",
          "A regulation you must obey",
          "A warning about the road ahead",
          "The location of a service such as fuel or a hospital",
        ],
        correctIndex: 0,
        explanation:
          "Green guide signs show direction and distance. Blue is the motorist-services colour, and brown marks parks, historic areas and other public recreation.",
        context:
          "Route signs work alongside them and their shape tells you the type of road - interstate, US, state or county. Missouri's numbering follows a pattern: north-south routes carry odd numbers, east-west routes carry even ones, three-digit even numbers are loops around cities and three-digit odd numbers are spurs into them.",
        trap:
          "Brown also appears on rectangular guide signs, but it points to recreation and cultural sites rather than to towns.",
        excerptKey: "guide-signs",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Guide Signs",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_20",
        topic: "rules",
        question:
          "A centre lane is marked with a solid and a dashed yellow line on each side. How far may you travel in it?",
        choices: [
          "As far as you like, provided you signal",
          "Up to a quarter of a mile",
          "Only within an intersection",
          "No more than 500 feet",
        ],
        correctIndex: 3,
        explanation:
          "A two-way left-turn lane is for slowing down and stopping to turn left, not for driving. Missouri puts a hard number on it: a vehicle may not travel in this lane for more than 500 feet.",
        context:
          "Traffic from both directions uses the same lane, which is why the pavement alternates left-turn arrows facing opposite ways. The Guide also says not to enter it from a side street, and to turn out of it as soon as your path is clear. Treating it as a running lane puts you head-on to someone doing the same thing from the other direction.",
        trap:
          "Signalling does not buy you extra distance. The 500-foot limit is on travel in the lane, whatever your indicators are doing.",
        commonlyMissed: true,
        excerptKey: "two-way-left-turn-500",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Two-Way Left-Turn Lanes",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_21",
        topic: "rightOfWay",
        question:
          "A funeral procession is moving through an intersection against a red light. What does Missouri say about its right of way?",
        choices: [
          "It has none; each vehicle must obey the signal",
          "It has right of way only where a police escort is present",
          "It has right of way at all intersections regardless of the traffic control device",
          "It has right of way only on state highways",
        ],
        correctIndex: 2,
        explanation:
          "An organised funeral procession has the right of way at all intersections regardless of any traffic control device. The only exceptions are emergency vehicles and directions from law enforcement.",
        context:
          "Every vehicle in the procession must run its flashing emergency lights. For everyone else, the Guide sets three prohibitions: do not drive between vehicles in a moving procession, do not join one to gain right of way, and do not pass any vehicle in it except where a passing lane has been specifically provided.",
        trap:
          "A green light of your own does not entitle you to cut the procession. Your green does not cancel their priority.",
        commonlyMissed: true,
        excerptKey: "funeral-right-of-way",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Funeral Processions",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_22",
        topic: "sharing",
        question: "What is the No-Zone around a large truck?",
        choices: [
          "The area of blind spots on each side, in front and behind, where the driver cannot see a car",
          "A stretch of highway where trucks may not travel",
          "The space a truck needs to make a right turn",
          "A restricted zone around a weigh station",
        ],
        correctIndex: 0,
        explanation:
          "The No-Zone is the set of blind spots on both sides, at the front and behind a truck or bus, where an automobile simply cannot be seen from the cab.",
        context:
          "The Guide gives a practical mirror test: if you cannot see the driver in his or her rearview mirror, that driver cannot see you. It also asks you not to drive alongside a large vehicle for long, not to tailgate one, and after overtaking to see the whole cab in your rearview mirror before you pull back in.",
        trap:
          "The blind spot behind a truck is the one drivers forget, because they can see the trailer perfectly well and assume that means they are visible.",
        excerptKey: "no-zone",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Sharing The Road With Large Trucks",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_23",
        topic: "licensing",
        question: "Your Missouri licence is due for renewal. Which tests must you take?",
        choices: [
          "The vision and road sign tests",
          "None, unless the licence has already expired",
          "The written and vision tests",
          "All four parts of the driver examination",
        ],
        correctIndex: 0,
        explanation:
          "Every renewal in Missouri includes the vision test and the road sign test. The written and driving tests come back only if you have let the licence lapse too long.",
        context:
          "You may renew up to six months before expiry, and the Department mails a reminder to the address on your driving record. Let it run more than six months, or 184 days, past the expiry date and you must take the written and driving tests as well. A driver moving to Missouri with a valid out-of-state licence, or one expired less than 184 days, takes only the vision and road sign tests.",
        trap:
          "The road sign test at renewal catches out experienced drivers who have not thought about sign shapes since they were 16.",
        excerptKey: "renewal-vision-signs",
        sourceLabel: "Missouri Driver Guide - Chapter 1: Renewing a License or Permit",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_24",
        topic: "speed",
        question: "What does a posted speed limit sign actually mean in Missouri?",
        choices: [
          "The speed you should aim to hold",
          "A minimum that traffic must keep up with",
          "A figure that may be exceeded by up to 5 mph",
          "The maximum allowed by law, in ideal conditions",
        ],
        correctIndex: 3,
        explanation:
          "The posted number is a legal maximum for ideal conditions, not a target. The Guide is direct that by law you must slow down when conditions demand it.",
        context:
          "Conditions that can make the posted limit unsafe include hills, curves, slippery surfaces, limited sight distance, pedestrians, cyclists and slow-moving vehicles. Advisory speed plates on curve and turn signs give a recommended figure, and the Guide warns you should never take a curve at the posted speed in rain, snow or ice just because it feels comfortable in the dry.",
        trap:
          "There is no tolerance band written into the rule. Driving to conditions can mean well below the sign, and the sign is never a floor.",
        excerptKey: "speed-limit-maximum",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Speed Limit",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_25",
        topic: "signals",
        question: "A flashing yellow arrow is showing for your left-turn lane. What may you do?",
        choices: [
          "Turn without yielding; the arrow protects the movement",
          "Stop and wait for a green arrow",
          "Turn after waiting for an adequate gap in oncoming traffic",
          "Turn only if no pedestrians are waiting on either corner",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow arrow allows the turn but leaves the judgment to you: wait for an adequate gap in opposing traffic, and yield to pedestrians.",
        context:
          "Missouri uses the flashing yellow arrow to replace the old circular green for permissive turns, because a dedicated arrow head makes the permissive phase unmistakable. On a protected-permissive signal the same head can show a green arrow at one moment and a flashing yellow at the next, so the phase you saw on the last cycle tells you nothing about this one.",
        trap:
          "Yellow usually means the phase is ending. A flashing yellow arrow is not that - it is a permission that comes with a duty to yield.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Left Turn Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_26",
        topic: "impairment",
        question:
          "Your doctor has prescribed a medication that makes you drowsy. You drive and are impaired. What is the position in Missouri?",
        choices: [
          "A valid prescription is a defence to a DWI charge",
          "The offence is the same; Missouri does not distinguish between prescription, over-the-counter and illegal drugs",
          "Only illegal drugs support a DWI charge",
          "You may drive if you stay below the posted limit",
        ],
        correctIndex: 1,
        explanation:
          "Missouri's rule is about impairment, not about legality of the substance. Using any drug that impairs your ability to drive safely is illegal, and the law draws no line between prescription, over-the-counter and illegal drugs.",
        context:
          "The penalties for DWI are identical whether the impairment came from drugs or alcohol. The Guide's practical test is the warning label: any drug that may cause drowsiness or dizziness is one you should not take before driving. Mixing medication with alcohol, or taking someone else's prescription, is called out as both dangerous and illegal.",
        trap:
          "Taken as directed is not a shield. The Guide warns that medications can impair driving even when used exactly as prescribed.",
        excerptKey: "any-drug-illegal",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Physical and Mental Effects",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_27",
        topic: "signs",
        question:
          "The gate at a railroad crossing is coming down. Where must you stop?",
        choices: [
          "Anywhere before the crossbuck",
          "Within 15 to 50 feet of the tracks",
          "At least 100 feet from the tracks",
          "Level with the gate arm",
        ],
        correctIndex: 1,
        explanation:
          "Missouri sets a window rather than a single distance: you must stop within 15 to 50 feet before the railroad tracks when the lights are flashing or the gate is down.",
        context:
          "The window exists because both extremes are wrong. Closer than 15 feet puts you inside the swing of the train and the gate; further back than 50 feet and the crossing signals may not be able to tell you have stopped, while drivers behind may not realise why. Never drive around a lowered gate, and where there are two or more tracks, look for a second train before crossing.",
        trap:
          "Stopping much further back feels safer but is outside the rule, and it tempts the driver behind to pull out around you.",
        commonlyMissed: true,
        excerptKey: "railroad-stop-15-50",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Railroad Crossing",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_28",
        topic: "safety",
        question:
          "You are carrying a three-year-old who weighs 45 pounds. What does Missouri require?",
        choices: [
          "An adult seat belt, because the child is over 40 pounds",
          "A booster seat",
          "A child passenger restraint system appropriate for that child",
          "Nothing specific, provided the child is in the rear seat",
        ],
        correctIndex: 2,
        explanation:
          "Under four years old means a child passenger restraint system regardless of weight. The 40-pound trigger is a second, separate route into the same requirement, not a way out of it.",
        context:
          "Missouri's classifications stack. Under four years, or under 40 pounds, means a child restraint system. From four to under eight, at 40 to under 80 pounds and under 4 feet 9 inches, means a restraint or booster. At eight or older, or 80 pounds or more, or taller than 4 feet 9 inches, means a safety belt or booster. Children 12 and under should ride in the rear seat.",
        trap:
          "Meeting one threshold does not release you from the others. A heavy three-year-old is still a three-year-old.",
        excerptKey: "child-under-four",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Child Passenger Restraint Law",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_29",
        topic: "parking",
        question: "On a one-way street in Missouri, where may you normally park?",
        choices: [
          "On either the right or left side",
          "On the right side only",
          "On the left side only",
          "Only in marked bays",
        ],
        correctIndex: 0,
        explanation:
          "One-way streets are the exception to the usual right-side rule: you may normally park on either side, because there is no oncoming traffic to face.",
        context:
          "Local signs and kerb markings still govern. Yellow kerbs are no-parking in the Guide's list, and the general prohibitions on intersections, crosswalks, driveways, bridges and hydrants apply on a one-way street the same as anywhere. The Guide's underlying test is whether your parked vehicle interferes with traffic or is visible to drivers approaching from either direction.",
        trap:
          "Normally does real work in this rule. A posted restriction on one side of a one-way street overrides the default.",
        excerptKey: "park-one-way-either-side",
        sourceLabel: "Missouri Driver Guide - Chapter 5: Parking",
        sourceUrl: HB,
      },
      {
        id: "mo_s2_30",
        topic: "rules",
        question:
          "On a four-lane divided highway with two lanes each way, where should you normally drive?",
        choices: [
          "In the left lane, keeping the right lane free for merging traffic",
          "In the right lane, moving left only to pass, to let traffic enter, or to set up a legal left turn",
          "In whichever lane is moving fastest",
          "In the left lane, because the right lane is for trucks",
        ],
        correctIndex: 1,
        explanation:
          "Missouri's rule on highways of four or more lanes is to keep right unless you are passing slower traffic, giving another driver room to enter safely, or getting ready to make a legal left turn.",
        context:
          "On a road with three or more lanes in the same direction the Guide adds a wrinkle: stay right except to pass, but where a lot of traffic is entering the right lane, use the centre lane instead. The left lane is for passing, and if many vehicles are overtaking you on the right, you are the one in the wrong lane.",
        trap:
          "Sitting in the left lane at the speed limit is still the wrong lane. The rule is about lane discipline, not about how fast you are going.",
        excerptKey: "four-lane-keep-right",
        sourceLabel: "Missouri Driver Guide - Chapter 6: Drive in the Proper Lane",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "The level the Missouri written test actually sits at, including the graduated licence thresholds and the specific numbers the Driver Guide expects you to have memorised.",
    questions: [
      {
        id: "mo_s3_01",
        topic: "rightOfWay",
        question:
          "You are travelling the opposite way from a stopped school bus on a four-lane road with no median at all. What does Missouri require?",
        choices: [
          "Stop, because there is no median separating you",
          "Stop, but only if children are visible",
          "Slow to 20 mph and pass with care",
          "You do not have to stop",
        ],
        correctIndex: 3,
        explanation:
          "Missouri lists two separate exceptions for oncoming traffic. One is a highway divided by a median. The other is a highway containing four or more lanes of traffic, and it does not require a median at all.",
        context:
          "The rule works from the road's shape rather than from its barriers. Missouri also bars school bus drivers from loading or unloading anywhere on a highway of four or more lanes in a way that makes passengers cross more than two lanes, which is what makes the four-lane exception defensible. Traffic following the bus must still stop in every case.",
        trap:
          "Neighbouring states commonly require both four lanes and a physical divider before oncoming traffic is released. Missouri's Guide states them as two independent exceptions.",
        commonlyMissed: true,
        excerptKey: "school-bus-four-lane-exception",
        sourceLabel: "Missouri Driver Guide - Chapter 3: School Buses",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_02",
        topic: "signs",
        question:
          "What distinguishes a turn sign from a curve sign in the Missouri Driver Guide?",
        choices: [
          "A turn sign is orange; a curve sign is yellow",
          "A turn sign warns of a bend where the recommended maximum speed is 30 mph or less",
          "A curve sign is used only on interstates",
          "A turn sign always carries an advisory speed plate; a curve sign never does",
        ],
        correctIndex: 1,
        explanation:
          "Missouri uses the turn sign for a sharp bend where the recommended maximum is 30 mph or less. The curve sign covers a gentler bend where the recommended speed is simply below the posted limit.",
        context:
          "Both may carry an advisory speed plate showing the recommended figure, and chevrons may be added on the outside of the bend for extra emphasis. The Guide's warning about advisory speeds is that they assume fair weather: you may feel comfortable taking a curve faster in the dry, but you should never do so in rain, snow or ice.",
        trap:
          "The advisory plate is a recommendation, but ignoring it in bad weather can still be careless and imprudent driving, which is four points in Missouri.",
        excerptKey: "turn-sign-30",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Turns and Curves In The Road",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_03",
        topic: "signals",
        question: "A steady red arrow is showing for your turn lane. What must you do?",
        choices: [
          "Stop, then turn when the way is clear",
          "Slow down and turn with caution",
          "Stop and wait for a green arrow or a flashing yellow arrow",
          "Stop and wait for the circular green only",
        ],
        correctIndex: 2,
        explanation:
          "A steady red arrow means stop and stay stopped for that movement. You wait for the signal to turn green or for a flashing yellow arrow before you proceed, and you may still need to yield to pedestrians.",
        context:
          "This is where Missouri's right-on-red default runs out. The permission attaches to a steady circular red, not to a red arrow, so an arrow head removes the turn entirely until it changes. On the other side of the cycle, a steady yellow arrow warns that the protected phase is ending and you must be ready to yield or stop.",
        trap:
          "Treating a red arrow like a red ball and turning after a stop is a red-light violation, because the arrow governs that movement specifically.",
        excerptKey: "red-arrow",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Left Turn Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_04",
        topic: "rules",
        question:
          "A two-lane road has a broken centre line and clear visibility, but you are 60 feet from a crossroads. May you pass?",
        choices: [
          "Yes, because the line is broken",
          "No; Missouri forbids driving left of centre within 100 feet of an intersection",
          "Yes, if you complete the pass before the intersection",
          "Yes, provided nothing is waiting at the side road",
        ],
        correctIndex: 1,
        explanation:
          "Missouri bars driving on the left side of the roadway when approaching within 100 feet of, or at, any intersection or railroad grade crossing. A broken centre line does not override that.",
        context:
          "The same list bars crossing the centre line when approaching the crest of a grade or a curve where your view is obstructed, when your view is blocked within 100 feet of a bridge, viaduct or tunnel, and wherever there is a solid yellow line. The Guide adds that you must complete a pass before you enter a marked no passing zone.",
        trap:
          "Markings show you where passing is normally allowed. They do not repeal the distance rules around intersections and structures.",
        excerptKey: "passing-left-intersection",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Passing on the Left",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_05",
        topic: "speed",
        question: "Above what speed does the Missouri Driver Guide say hydroplaning can begin?",
        choices: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctIndex: 2,
        explanation:
          "The Guide gives 35 mph as the point above which hydroplaning can happen at all, and warns that in a severe rainstorm tyres can lose all contact with the road at 55 mph.",
        context:
          "Hydroplaning is a loss of traction and control, not a skid you can steer out of. The prevention list is tyres with deep tread, correct inflation, slowing down in the wet, and keeping cruise control off. If it starts, take your foot off the accelerator and let the car slow; braking is what turns a hydroplane into a spin.",
        trap:
          "Cruise control on a wet road keeps feeding power to tyres that have lost grip, which is why the Guide bans it in the rain rather than merely discouraging it.",
        excerptKey: "hydroplane-35-55",
        sourceLabel: "Missouri Driver Guide - Chapter 9: Hydroplaning",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_06",
        topic: "safety",
        question:
          "There is packed snow on the road. What following gap does the Missouri Driver Guide ask for?",
        choices: [
          "About eight to ten seconds",
          "The usual three seconds",
          "Double the usual, so six seconds",
          "Four car lengths for every 10 mph",
        ],
        correctIndex: 0,
        explanation:
          "On snow or ice Missouri raises the gap to about eight to ten seconds - well beyond the doubling most drivers assume is enough.",
        context:
          "The winter list around it is specific: clear all snow and ice off the windows before moving off, keep cruise control off, brake gently to test how slippery the surface is, pump the brakes on very slippery surfaces unless the car has ABS, and remember that bridges and overpasses freeze before the rest of the road. Four-wheel drive should not be used on ice at all, because those vehicles overturn easily on it.",
        trap:
          "Doubling the three-second rule gets you to six and feels generous. Missouri asks for eight to ten.",
        commonlyMissed: true,
        excerptKey: "snow-following-8-10",
        sourceLabel: "Missouri Driver Guide - Chapter 9: Winter Driving",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_07",
        topic: "licensing",
        question:
          "What must a Missouri permit holder complete before moving up to an intermediate licence?",
        choices: [
          "Hold the permit at least 182 days and log 40 hours of driving including 10 at night",
          "Hold the permit at least 90 days and log 20 hours of driving",
          "Hold the permit at least 182 days and log 60 hours of driving",
          "Hold the permit for a year and log 40 hours of driving",
        ],
        correctIndex: 0,
        explanation:
          "Missouri requires a minimum of six months, stated as 182 days, beginning the day after the permit is issued, plus 40 hours of driving instruction of which at least ten hours must be at night.",
        context:
          "There are conduct requirements as well: no alcohol-related convictions in the last 12 months and no traffic convictions in the last six. A parent, grandparent, stepparent, legal guardian or certified trainer must come to the licence office to verify the 40 hours. The six-month clock does not start until the temporary instruction permit is actually issued.",
        trap:
          "The ten night hours are part of the 40, not an extra ten on top, and they are the part most learners forget to log.",
        excerptKey: "gdl-40-hours",
        sourceLabel: "Missouri Driver Guide - Chapter 1: Step One: Instruction Permit",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_08",
        topic: "impairment",
        question:
          "A 19-year-old is caught using alcohol while driving. Under Missouri's Abuse and Lose law, what can happen to the licence?",
        choices: [
          "A 30-day suspension",
          "A one-year revocation",
          "Nothing until a court convicts",
          "It may be taken away for 90 days",
        ],
        correctIndex: 3,
        explanation:
          "For anyone younger than 21, Abuse and Lose allows the licence to be taken for 90 days for an intoxication-related traffic offence, for possessing or using alcohol or drugs while driving, or for altering or misrepresenting a licence.",
        context:
          "The law works differently for adults: at 21 or over, the licence can be taken for one year for possessing or using drugs while driving. Getting it back means a $45 fee, a completed Substance Awareness Traffic Offender Program, SR-22 proof of insurance for two years, and retaking the complete driver examination.",
        trap:
          "Retaking the whole examination is the sting people miss. Reinstatement after an Abuse and Lose revocation is not just a fee and a form.",
        excerptKey: "abuse-and-lose",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Missouri's Abuse and Lose Law",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_09",
        topic: "parking",
        question:
          "What fine range does Missouri set for parking in a space reserved for people with disabilities?",
        choices: [
          "$25 to $100",
          "A fixed $100",
          "Not less than $50 and not more than $300",
          "Not less than $500",
        ],
        correctIndex: 2,
        explanation:
          "A conviction carries a fine of no less than fifty dollars and no more than three hundred dollars.",
        context:
          "The same protection extends to the striped access aisle beside the space, which exists so a wheelchair or lift has room to deploy. Parking in the aisle is separately illegal, as is using a disabled person's placard or plates when that person is not being transported at the time.",
        trap:
          "Blocking only the hatched aisle rather than the bay is still an offence, and it defeats the space just as completely.",
        excerptKey: "handicap-fine",
        sourceLabel: "Missouri Driver Guide - Chapter 5: International Symbol of Access",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_10",
        topic: "sharing",
        question:
          "Who needs a driver licence to ride on Missouri public streets: a moped rider or an electric bicycle rider?",
        choices: [
          "Both need one",
          "Neither needs one",
          "The electric bicycle rider only",
          "The moped rider only",
        ],
        correctIndex: 3,
        explanation:
          "Missouri requires a valid driver licence to ride a motorized bicycle such as a moped on public streets. An electric bicycle as defined in the statute does not require an operator or motorcycle licence at all.",
        context:
          "A motorized bicycle in Missouri is a two- or three-wheeled device with automatic transmission, a motor of not more than 50 cubic centimetres, less than three gross brake horsepower and a top speed of 30 mph. An electric bicycle has working pedals, a seat and a motor under 750 watts, in one of three classes. Mopeds are also barred from the federal interstate highway system.",
        trap:
          "They look alike at the kerbside, and the licence rule is opposite for each. The pedals and the wattage are what separate them legally.",
        commonlyMissed: true,
        excerptKey: "moped-needs-license",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Moped Drivers Need a Driver License",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_11",
        topic: "emergencies",
        question:
          "The back of your car breaks traction and starts sliding to the right. What does the Guide tell you to do?",
        choices: [
          "Ease off the accelerator and gently steer in the direction the rear wheels are sliding",
          "Brake hard and hold the wheel straight",
          "Steer sharply the opposite way to the slide",
          "Pull the parking brake to settle the rear",
        ],
        correctIndex: 0,
        explanation:
          "Take your foot off the accelerator, do not hit the brakes, and gently turn the wheel in the direction the rear wheels are sliding. Braking or jerking the wheel makes the skid worse.",
        context:
          "Missouri notes that the technique is the same for front-wheel and rear-wheel drive vehicles, which is worth knowing because drivers often assume one needs the opposite input. The word doing the work is gently: an over-correction sets up a second slide in the other direction that is usually harder to catch than the first.",
        trap:
          "Braking is the reflex, and it is the one action the Guide singles out as making a skid worse.",
        excerptKey: "skid-steer-into",
        sourceLabel: "Missouri Driver Guide - Chapter 9: Skidding",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_12",
        topic: "rules",
        question:
          "You are in a dual-use lane. Only the straight-ahead arrow is lit on the signal, and you want to turn. What now?",
        choices: [
          "Turn, since a dual-use lane permits either movement",
          "Move into the next lane and turn from there",
          "Wait for the turn arrow before you turn",
          "Turn after yielding to oncoming traffic",
        ],
        correctIndex: 2,
        explanation:
          "In a dual-use lane you may turn or go straight only when both arrows appear. With only the straight arrow showing, the turn has to wait for the turn arrow.",
        context:
          "The lane markings tell you what the lane can be used for; the signal tells you what is permitted right now. Missouri applies the same separation elsewhere - a shared centre lane is for turning even though it is a lane, and a lane control sign above the road tells you which directions you may take from it.",
        trap:
          "The painted arrow on the road is not permission. The lit arrow on the signal head is.",
        excerptKey: "dual-use-lane",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Dual-Use Lanes",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_13",
        topic: "signs",
        question: "An Added Lane sign warns you of what?",
        choices: [
          "Two lanes are about to become one",
          "A passing lane starts ahead",
          "The shoulder is about to become a travel lane",
          "Traffic will enter from another road, but no merging is necessary",
        ],
        correctIndex: 3,
        explanation:
          "An added lane means traffic from another road is joining, but a lane has been added for it, so nobody has to merge. It is the opposite message to a merge sign.",
        context:
          "Missouri's traffic-flow signs come in pairs that look similar and mean opposite things. Merge warns that traffic from another road will move into your lane. Lane Ends tells you two lanes become one and that the right lane must merge left, yielding to traffic in the left lane. Begin and End Divided Roadway warn where a median starts and stops.",
        trap:
          "Braking to let the joining traffic in is the wrong response here, and on a busy ramp it is how rear-end collisions start.",
        commonlyMissed: true,
        excerptKey: "added-lane",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Flow Signs",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_14",
        topic: "rightOfWay",
        question: "You are approaching a Missouri roundabout. Which action does the Guide forbid?",
        choices: [
          "Slowing down before you enter",
          "Making a left turn to enter it",
          "Yielding to bicyclists in the crosswalk",
          "Using your right turn signal as you exit",
        ],
        correctIndex: 1,
        explanation:
          "The Guide says never to make a left turn to enter a roundabout. Every entry is a slight right turn, and traffic then travels counter-clockwise around the central island.",
        context:
          "Approaching, you slow down, look left, and yield to traffic already circulating and to cyclists and pedestrians in the crosswalks. Inside, you stay right of the central island, do not change lanes and do not stop unless it is the only way to avoid a crash. If an emergency vehicle approaches while you are inside, exit first and then pull right - never stop within the circle.",
        trap:
          "Yield-to-the-right does not apply here. At a roundabout, the traffic with priority is on your left.",
        excerptKey: "roundabout-never-left",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Roundabout Intersections",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_15",
        topic: "speed",
        question:
          "What is the minimum fine for a first offence of speeding in a Missouri work zone on a state roadway?",
        choices: ["$250", "$100", "$150", "$500"],
        correctIndex: 0,
        explanation:
          "A first offence carries a minimum $250 fine, and a second or subsequent offence a minimum of $300, in addition to any other fine authorised by law.",
        context:
          "The same penalty covers passing in a work zone, not just speeding. Missouri also provides that if you strike a highway worker or emergency responder in a designated construction, work or emergency zone, your driving privilege may be revoked. Work zone signs are fluorescent orange, and a flagger's instructions govern.",
        trap:
          "The figure is a minimum and it stacks on top of the ordinary speeding fine, rather than replacing it.",
        excerptKey: "work-zone-fine",
        sourceLabel: "Missouri Driver Guide - Chapter 3: Passing",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_16",
        topic: "signals",
        question:
          "What is the difference between a permissive and a protected left turn phase in Missouri?",
        choices: [
          "A permissive phase applies only at night",
          "In a permissive phase you must find your own gap; in a protected phase opposing traffic is held on red",
          "A protected phase requires you to stop first",
          "A permissive phase applies only where there is no turn lane",
        ],
        correctIndex: 1,
        explanation:
          "A permissive phase gives you a circular green or flashing yellow arrow and requires you to wait for an adequate gap. A protected phase gives you a green arrow while opposing vehicles are stopped by a red light.",
        context:
          "Many Missouri intersections run protected-permissive, giving you the green arrow first and then dropping to a permissive indication in the same cycle. The steady yellow arrow between them is the warning that protection is ending. Watching which indication you actually have, rather than remembering what you had last time, is the whole skill.",
        trap:
          "A green ball at a signal with a turn lane feels like a turn permission. It is a permissive one, and the gap is still yours to judge.",
        excerptKey: "permissive-left",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Left Turn Signals",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_17",
        topic: "safety",
        question:
          "How far ahead do your headlights let you see, according to the Missouri Driver Guide?",
        choices: ["About 150 feet", "About 250 feet", "About 350 feet", "About 500 feet"],
        correctIndex: 2,
        explanation:
          "Missouri gives about 350 feet. The point of the figure is that at highway speed you can be driving faster than you can see to stop, which the Guide calls overdriving your headlights.",
        context:
          "The night-driving list around it is practical: clean windows, headlights on from half an hour after sunset until half an hour before sunrise, high beams whenever there is no oncoming traffic, low beams within 500 feet of an oncoming vehicle and 300 feet when following, and the edgeline as your steering guide rather than the oncoming headlights.",
        trap:
          "High beams stretch the distance you can see but not the distance you can stop in. The answer to a dark road is a lower speed.",
        excerptKey: "overdrive-headlights",
        sourceLabel: "Missouri Driver Guide - Chapter 9: Night Driving",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_18",
        topic: "licensing",
        question:
          "A Missouri driver has held an intermediate licence for three months. How many passengers under 19 who are not immediate family may ride with them?",
        choices: ["None", "Two", "Three", "One"],
        correctIndex: 3,
        explanation:
          "During the first six months of the intermediate licence the limit is one passenger under 19 who is not a member of the driver's immediate family. After six months it rises to three.",
        context:
          "Immediate family is defined for this purpose as parents, grandparents, brothers, sisters, stepbrothers, stepsisters and adopted or foster children living in the driver's household. Alongside the passenger limit, an intermediate licence holder may not drive alone between 1:00 a.m. and 5:00 a.m. except to and from a school activity, a job or an emergency, and every passenger must be belted.",
        trap:
          "The limit changes at the six-month mark, not on a birthday, so two drivers of the same age can be under different rules.",
        commonlyMissed: true,
        excerptKey: "intermediate-first-six-months",
        sourceLabel: "Missouri Driver Guide - Chapter 1: Step Two: Intermediate License",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_19",
        topic: "impairment",
        question:
          "How long must an ignition interlock device stay on the vehicle before a Missouri driving privilege is reinstated?",
        choices: [
          "At least six months, with no violations in the last three",
          "At least 30 days",
          "At least three months",
          "At least two years",
        ],
        correctIndex: 0,
        explanation:
          "The device must be maintained for a minimum of six months from the reinstatement date, and there must be no violations in the last three of those months.",
        context:
          "The requirement bites where there is more than one intoxication-related contact on the record. The interlock connects to the ignition, horn and headlights and measures breath alcohol, requiring a sample before starting and periodically while driving. The driver pays for installation and for monthly servicing, and failing to maintain it re-suspends the privilege.",
        trap:
          "The clock does not start at conviction or at arrest. It starts at reinstatement, so the six months is served with a licence in hand.",
        excerptKey: "iid-six-months",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Ignition Interlock",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_20",
        topic: "rules",
        question:
          "On an ordinary two-lane highway with one lane each way, which lane should you drive in?",
        choices: [
          "Whichever has the better surface",
          "The right-hand lane",
          "The centre of the road when no traffic is coming",
          "Either, provided you keep to the speed limit",
        ],
        correctIndex: 1,
        explanation:
          "On a highway with a total of two lanes, one in each direction, you drive in the right-hand lane. You may cross the centre line to pass only when nothing is coming and there is no solid yellow line.",
        context:
          "The Guide's lane rules scale with the road. Two lanes total means keep right. Four or more lanes means keep right except to pass, to let traffic enter, or to set up a legal left turn. Three or more lanes the same way means stay right except to pass, but use the centre lane where a lot of traffic is entering on the right.",
        trap:
          "Drifting toward the centre line on an empty road removes the buffer between you and anything that comes round the next bend.",
        excerptKey: "two-lane-drive-right",
        sourceLabel: "Missouri Driver Guide - Chapter 6: Drive in the Proper Lane",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_21",
        topic: "signs",
        question: "A sign reading SOFT SHOULDER is telling you what?",
        choices: [
          "The road narrows ahead",
          "Loose gravel has been laid on the carriageway",
          "A lane is about to be added on the right",
          "The verge will not support a vehicle; do not drive off the pavement",
        ],
        correctIndex: 3,
        explanation:
          "A soft shoulder warning means the ground beside the road will not take your weight. The Guide's instruction is to keep off the pavement edge.",
        context:
          "It matters most in an emergency, because a soft shoulder is exactly where a driver instinctively goes to get out of trouble. If your wheels do drop off the paved edge, the Guide says to hold the wheel firmly, come off the accelerator without braking hard, and steer back onto the pavement only once you have slowed and the lane is free.",
        trap:
          "Yanking the wheel to climb back onto the pavement at speed is how a shoulder drop becomes a rollover.",
        excerptKey: "soft-shoulder",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Special Road and Traffic Conditions",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_22",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a white cane steps out to cross ahead of you. What does Missouri require?",
        choices: [
          "Slow down and pass behind them",
          "Sound your horn to make your presence known",
          "Yield, as you would for any pedestrian",
          "Come to a complete stop",
        ],
        correctIndex: 3,
        explanation:
          "Missouri goes beyond a yield here. Where a pedestrian is crossing guided by a dog or carrying a white cane, or a white cane with a red tip, vehicles must come to a complete stop.",
        context:
          "The Guide's framing is that drivers must always yield the right of way to persons who are blind, and the complete stop is what turns that from a judgment call into a rule. It fits the wider instruction that whether or not a pedestrian is obeying the law, you must drive carefully, slow down if needed and do your best to avoid endangering them.",
        trap:
          "Sounding the horn is a common instinct and a bad one, because a blind pedestrian is navigating by the sound of traffic that has stopped.",
        commonlyMissed: true,
        excerptKey: "blind-pedestrian-stop",
        sourceLabel: "Missouri Driver Guide - Chapter 4: As a Driver, You Should Know",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_23",
        topic: "parking",
        question: "Which of these does Missouri's no-parking list expressly include?",
        choices: [
          "Within 50 feet of a bus stop",
          "Any unlit street after dark",
          "On a bridge",
          "Within 30 feet of a school entrance",
        ],
        correctIndex: 2,
        explanation:
          "Bridges are on the Guide's list of places you may not park, along with intersections, crosswalks and sidewalks, driveway entrances, the left side of a two-way street and yellow-painted kerbs.",
        context:
          "The list is joined by a general test: do not park where you block the normal flow of traffic or create a hazard for other drivers, and do not park facing against traffic. Missouri also asks you to park far enough from any travel lane to avoid interfering with traffic and where drivers approaching from either direction can see you.",
        trap:
          "A wide bridge shoulder looks like a legitimate place to stop. It is on the prohibited list regardless of how much room there is.",
        excerptKey: "no-parking-zones",
        sourceLabel: "Missouri Driver Guide - Chapter 5: No-Parking Zones",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_24",
        topic: "sharing",
        question:
          "A tractor-trailer ahead of you signals right, then swings out to the left. What is happening?",
        choices: [
          "It is setting up for the right turn and needs the extra room",
          "The driver has changed his mind and is turning left",
          "It is pulling over to let you pass",
          "The trailer is unstable and the driver is correcting",
        ],
        correctIndex: 0,
        explanation:
          "Large trucks often swing out to the left as the first step in making a right turn, because the trailer's rear wheels cut a much tighter path than the cab. The signal tells you the truth; the initial movement does not.",
        context:
          "The Guide's instruction is to watch a tractor-trailer's turn signals before trying to pass. The gap that opens on its right during that swing is the space the trailer is about to sweep through. The same off-tracking geometry is why a truck may need more than one lane in a roundabout and why truck aprons exist there.",
        trap:
          "The inviting gap on the truck's right during a right turn is the single most dangerous place to be beside a trailer.",
        excerptKey: "truck-right-turn-swing",
        sourceLabel: "Missouri Driver Guide - Chapter 4: Sharing The Road With Large Trucks",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_25",
        topic: "speed",
        question:
          "A curve carries an advisory speed plate of 40 mph and it is raining hard. What speed does the Guide expect?",
        choices: [
          "Below 40 mph, because advisory speeds assume fair weather",
          "40 mph, since that is the recommendation",
          "The posted limit for the road, since the plate is only advisory",
          "40 mph unless a sign says otherwise",
        ],
        correctIndex: 0,
        explanation:
          "Advisory speeds are set for good conditions. The Guide says outright that you should never take a curve at a comfortable fair-weather speed in rain, snow or icy conditions.",
        context:
          "This connects to the general speed rule: the posted limit is the maximum for ideal conditions, and by law you must slow down when conditions demand it. Curve and turn signs may add chevrons on the outside of the bend for extra emphasis, and a large arrow sign marks a sharp change of direction.",
        trap:
          "Advisory does not mean optional in the wet. Losing control at the advisory speed on a wet curve is still careless and imprudent driving.",
        excerptKey: "advisory-speed-weather",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Turns and Curves In The Road",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_26",
        topic: "emergencies",
        question:
          "Your car has stalled on a railroad crossing and a train is coming. What does the Guide tell you to do?",
        choices: [
          "Stay in the car and brace against the seat",
          "Get out, get clear of the tracks and run towards the train",
          "Try to restart the engine until the last moment",
          "Get out and run in the direction the train is travelling",
        ],
        correctIndex: 1,
        explanation:
          "Unfasten your belt, get out, get off the tracks and run towards the oncoming train. Running the way the train is heading puts you in the path of the debris when it strikes your car.",
        context:
          "If there is no train in sight the advice is different: roll down the windows and listen, try to restart the engine, and if that fails put the vehicle in neutral and push it clear. Missouri also warns against shifting gears while crossing tracks, in case the engine stalls, and against starting across before there is room for your vehicle on the far side.",
        trap:
          "Running away from the train feels right and is the wrong direction. The wreckage travels the way the train is going.",
        excerptKey: "stalled-tracks-train",
        sourceLabel: "Missouri Driver Guide - Chapter 9: Stalling On Railroad Tracks",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_27",
        topic: "safety",
        question: "Where does the Missouri Driver Guide say your hands should sit on the wheel?",
        choices: [
          "Both hands at the top, close together",
          "One hand at the top, the other resting on the gear selector",
          "Left hand at twelve o'clock, right hand free",
          "Left hand between seven and nine o'clock, right hand between three and five",
        ],
        correctIndex: 3,
        explanation:
          "Missouri specifies left hand between the seven and nine o'clock positions and right hand between three and five. The position is comfortable and lets you take most turns without moving your hands.",
        context:
          "The Guide pairs it with posture: back straight and relaxed against the seat, seat close enough to reach the pedals but far enough that your elbows are in front of you, both feet within reach of the floor controls. For corners it asks for hand-over-hand steering rather than turning with the palm of one hand, which is how drivers lose control mid-turn.",
        trap:
          "Ten and two is the old teaching and it puts your forearms across the airbag, which is why the modern position is lower.",
        excerptKey: "steering-hand-position",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Steering",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_28",
        topic: "rules",
        question: "You realise on an interstate that you have passed your exit. What should you do?",
        choices: [
          "Carry on to the next exit and come back",
          "Reverse along the shoulder to the ramp",
          "Cross the median at the next gap",
          "Stop on the shoulder and wait for a gap to back up",
        ],
        correctIndex: 0,
        explanation:
          "Missouri's instruction is explicit: do not stop, do not back up and do not try to turn around on the highway. Get off at the next exit and come back to the one you missed.",
        context:
          "The rule is one instance of a wider one. Missouri says never to back a vehicle in any travel lane, and never to stop on the highway itself. You may use the shoulder in a genuine emergency, with flashers on, but reversing along it is not that. The few minutes lost at the next exit is the whole cost of getting it right.",
        trap:
          "An empty-looking interstate is the worst place to misjudge, because closing speeds there leave no time for anyone to react to a reversing car.",
        excerptKey: "missed-exit",
        sourceLabel: "Missouri Driver Guide - Chapter 6: Leaving the Highway",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_29",
        topic: "signals",
        question:
          "A police officer waves you forward while your light is red. What do you do?",
        choices: [
          "Stay stopped until the light turns green",
          "Do as the officer directs and ignore the signal",
          "Move forward only if no cross traffic is present",
          "Sound your horn and wait for the officer to confirm",
        ],
        correctIndex: 1,
        explanation:
          "Missouri requires you to obey traffic officers at all times. The Guide gives the mirror-image example too: if an officer signals you to stop at a green light, you stop.",
        context:
          "Traffic control in Missouri includes signals, signs and pavement markings, and also law enforcement, highway personnel and school crossing guards. Directions from those people override the devices. It is the same logic that puts a work zone flagger's instructions above the posted signs in that zone.",
        trap:
          "Waiting for the light to agree with the officer keeps you sitting in an intersection someone is actively trying to clear.",
        excerptKey: "traffic-officers",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Traffic Officers",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_30",
        topic: "licensing",
        question:
          "What does the Missouri Driver Guide say about first-time results on the written exam?",
        choices: [
          "Almost 20 percent of test-takers fail the first time",
          "Almost a third of test-takers fail the first time",
          "Almost 50 percent of all test-takers fail the first time",
          "Nearly everyone passes on the first attempt",
        ],
        correctIndex: 2,
        explanation:
          "The Guide states that almost 50 percent of all test-takers fail the first time, and urges candidates to study before attempting the written exam.",
        context:
          "The Highway Patrol allows you to take any written test up to two times per day until you pass, and there is no fee for non-commercial written or skills testing. The driving test is stricter: one attempt per day, and a maximum of three in the last twelve months without special permission from the Department.",
        trap:
          "Free retakes make it tempting to sit the test cold. The failure rate is the reason the Guide tells you to study first.",
        commonlyMissed: true,
        excerptKey: "half-fail-first-time",
        sourceLabel: "Missouri Driver Guide - Chapter 1: A Checklist for You",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_31",
        topic: "impairment",
        question:
          "Missouri voters approved medical marijuana. What does the Driver Guide say about driving under its influence?",
        choices: [
          "It is lawful with a valid patient card",
          "It is never legal or safe to drive under the influence of marijuana",
          "It is lawful if you stay below the posted limit",
          "It is treated as a lesser offence than alcohol",
        ],
        correctIndex: 1,
        explanation:
          "The Guide is unambiguous: even though medical marijuana was approved effective in 2020, it is never legal or safe to drive while under its influence.",
        context:
          "Marijuana is described as the second most cited drug in car crashes after alcohol, with research showing more lane weaving, poorer reaction time and altered attention. Combining it with alcohol makes drivers more impaired still. In Missouri the DWI penalties are identical whether the impairment came from drugs or from alcohol.",
        trap:
          "Legal to possess and legal to drive on are separate questions, and the Guide answers the second one with a flat no.",
        excerptKey: "marijuana",
        sourceLabel: "Missouri Driver Guide - Chapter 10: Marijuana",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_32",
        topic: "signs",
        question: "In Missouri's route numbering, what does an odd route number indicate?",
        choices: [
          "A loop around a city",
          "A lettered supplemental route",
          "A spur into a city centre",
          "A route running north and south",
        ],
        correctIndex: 3,
        explanation:
          "North-south routes carry odd numbers and east-west routes carry even ones. Three-digit even numbers are the loops around cities and three-digit odd numbers are the spurs into them.",
        context:
          "Exit numbering follows the same logic. On east-west interstates the numbers start at zero in the west and climb as you drive east; on north-south interstates they start at the southern end and climb going north. Emergency reference markers on the shoulder every two-tenths of a mile give your route and direction if you have to call for help.",
        trap:
          "Three-digit numbers are the ones people mix up. Even means it comes back to the parent route; odd means it does not.",
        excerptKey: "route-numbering",
        sourceLabel: "Missouri Driver Guide - Chapter 7: Route Signs",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_33",
        topic: "speed",
        question:
          "Traffic is piling up behind you on a two-lane road because you are driving well below the flow. What does Missouri say?",
        choices: [
          "You are entitled to drive at any speed up to the limit",
          "It is against the law to drive so slowly that you block traffic",
          "You must pull over only if ten or more vehicles are behind you",
          "The following drivers are at fault for not passing",
        ],
        correctIndex: 1,
        explanation:
          "Even where no minimum speed is posted, Missouri makes it unlawful to drive so slowly that you block traffic. The Guide asks you to pull over and let the queue pass when it is safe.",
        context:
          "Driving below a posted minimum in normal conditions is separately against the law, and interstates carry a 40 mph minimum. Bad weather, heavy traffic or a poor road surface are the recognised reasons for going slower. The Guide's summary line is worth keeping: slower is not always safer.",
        trap:
          "Being under the limit is not a defence. The offence is impeding the traffic behind you, not exceeding a number.",
        excerptKey: "slow-poke-blocking",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Slow Poke Driving",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_34",
        topic: "parking",
        question:
          "Where does the Missouri Driver Guide tell you to stop before you begin backing into a parallel parking space?",
        choices: [
          "Level with the rear of the vehicle ahead of the space",
          "One car length back from the space",
          "Level with the vehicle ahead of the space, about 1½ feet to its left",
          "Alongside the kerb at the front of the space",
        ],
        correctIndex: 2,
        explanation:
          "Stop even with the vehicle ahead of the space and about a foot and a half out from it, then turn the wheels sharply right and back slowly in.",
        context:
          "The rest of the sequence is: keep the front of your car out of the path of passing traffic, straighten and turn sharply left once you are clear of the front vehicle, then turn right and pull forward toward the kerb. The driving test scores this against a space 25 feet long and seven feet wide, and asks for a finish within 18 inches of the kerb, near the centre of the space, within two minutes.",
        trap:
          "Starting too close to the parked car leaves no room to swing the tail in, which is what produces the kerbed wheel.",
        excerptKey: "parallel-park-start",
        sourceLabel: "Missouri Driver Guide - Chapter 5: Parallel Parking",
        sourceUrl: HB,
      },
      {
        id: "mo_s3_35",
        topic: "safety",
        question:
          "A driver is tailgating you on a road with no lane to your right. What does the Guide recommend?",
        choices: [
          "Wait until the road ahead is clear, then reduce speed slowly to encourage them to go around",
          "Brake sharply once to make the point",
          "Speed up until they drop back",
          "Flash your brake lights repeatedly",
        ],
        correctIndex: 0,
        explanation:
          "With no right lane available, wait for a clear road ahead and then slow down gradually. That opens space in front of you and invites the tailgater to overtake.",
        context:
          "Where there is a right lane, the simpler answer is to move over. The Guide's prohibition is on slowing down quickly to discourage a tailgater, because that only raises your chance of being hit from behind. Signalling early and keeping a steady speed are what let the driver behind judge you correctly in the first place.",
        trap:
          "Brake-checking is the instinctive response and the one the Guide singles out as making a rear-end collision more likely.",
        excerptKey: "tailgated-never-brake",
        sourceLabel: "Missouri Driver Guide - Chapter 8: Space Behind",
        sourceUrl: HB,
      },
    ],
  },
];
