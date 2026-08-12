// California practice sets 1-3.
//
// Every item is written from scratch to test a rule verified against the
// California Driver's Handbook on dmv.ca.gov. No handbook sentence is
// reproduced, and no question is taken from any exam or practice site.
// Explanations, context notes and trap warnings are ours, and each item links
// to the handbook section that carries the authoritative text.

import type { DrivingTestSet } from "../types";

const H = "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook";

export const californiaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "California Starter Set",
    difficulty: "starter",
    description:
      "Thirty gentle questions covering the rules you meet on every drive: signs, signals, basic speed limits, curb colours and who goes first.",
    questions: [
      {
        id: "ca_s1_01",
        topic: "signs",
        question:
          "You approach a red, eight-sided sign with white lettering. What does it require?",
        choices: [
          "Stopping only when a pedestrian is waiting",
          "A full stop, then proceed only when the way is clear",
          "A rolling slow-down if nothing is coming",
          "Yielding only to traffic coming from your left",
        ],
        correctIndex: 1,
        explanation:
          "The octagon shape is reserved for STOP alone, so you can recognise it even from behind or in poor light. It always means the wheels stop turning — at the limit line or before the crosswalk — and you only move again once you have checked every direction.",
        context:
          "Sign shape is a language of its own in California, and knowing it lets you answer questions where the wording is unfamiliar. Eight sides means stop and nothing else; a downward triangle means yield; a diamond warns of a hazard; five sides means a school is near; a circle warns of a railroad crossing ahead; a plain rectangle carries a rule you must obey. Where you stop matters too — at the limit line if there is one, otherwise before the crosswalk, otherwise at the edge of the intersection where you can see.",
        trap: "\"Slow and roll if nothing is coming\" feels efficient, but a stop sign has no clear-road exemption — the wheels must actually stop every single time.",
        excerptKey: "sign-stop",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s1_02",
        topic: "speed",
        question:
          "No speed sign is posted on the residential street you are driving through. What limit applies?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 1,
        explanation:
          "California sets a default of 25 mph in business and residential districts, so the absence of a sign does not mean the absence of a limit. Streets like these are full of driveways, parked cars and children, and 25 mph is the speed that leaves you room to stop.",
        context:
          "California has a set of default limits that apply whenever no sign says otherwise: 25 mph in business and residential districts and in school zones when children are around, 15 mph in alleys, at blind intersections and near railroad crossings with poor sight lines, 55 mph on two-lane undivided highways, and 65 mph on most other highways. Learning the whole ladder means you can answer any variant, because the test likes to move the setting rather than the number.",
        trap: "35 mph is the speed people actually drive on quiet residential streets, which makes it feel right — but the legal default is 25 mph whether or not the street looks empty.",
        excerptKey: "speed-business-residential",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s1_03",
        topic: "parking",
        question: "A curb painted red tells you that you may:",
        choices: [
          "Not stop, stand or park there at all",
          "Park free of charge for up to 15 minutes",
          "Stop briefly to let a passenger step out",
          "Load or unload freight for a few minutes",
        ],
        correctIndex: 0,
        explanation:
          "Red is the strictest colour on the curb: no stopping, no standing, no parking, not even for a moment with the engine running. Red zones protect hydrants, corners and bus stops, and the only common exception is a bus using a red zone signed for buses.",
        context:
          "California's five curb colours come up constantly, so learn them as a set. Red is no stopping at all. Yellow is loading, for either passengers or freight, within any posted time. White is passengers or mail only — someone gets in or out and you go. Green is limited-time parking, with the limit posted. Blue is reserved for a vehicle displaying a disabled placard or plate. Notice that only green really lets you leave the car and walk away.",
        trap: "\"Stop briefly to let a passenger step out\" describes the WHITE curb, not the red one, and it is the most common mix-up because a quick passenger drop feels harmless anywhere.",
        excerptKey: "curb-red",
        sourceLabel: "California Driver's Handbook — Colored curbs",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s1_04",
        topic: "rightOfWay",
        question:
          "Someone has stepped into a marked crosswalk ahead of you. What is expected of you?",
        choices: [
          "Drive around behind them without slowing",
          "Proceed if you can clear the crosswalk first",
          "Sound your horn so they hurry across",
          "Yield and give them time to finish crossing",
        ],
        correctIndex: 3,
        explanation:
          "Pedestrians on foot come off far worse than you do in any collision, which is why the law puts them first. Yielding means stopping and waiting until they are safely clear, not squeezing past behind them.",
        context:
          "Pedestrian priority in California is broader than most drivers assume. It applies at marked crosswalks and at unmarked ones — every intersection has a crossing whether or not paint is on the ground. You must give extra time to older people, parents with small children and anyone with a disability, you must never pass a vehicle stopped at a crosswalk, and you stop behind the limit line rather than creeping into the crossing.",
        trap: "\"Proceed if you can clear the crosswalk first\" turns a yield into a race, and a pedestrian who stumbles or changes pace makes you wrong instantly.",
        excerptKey: "pedestrian-crossing",
        sourceLabel: "California Driver's Handbook — Pedestrians",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s1_05",
        topic: "rules",
        question: "How far before a turn should your signal be on?",
        choices: [
          "At least 50 feet",
          "At least 75 feet",
          "At least 100 feet",
          "At least 150 feet",
        ],
        correctIndex: 2,
        explanation:
          "A signal is only useful if it arrives early enough for others to react, so California asks for it at least 100 feet ahead of the turn. Flicking it on as you begin to swing the wheel tells nobody anything they did not already see.",
        context:
          "There are two signalling figures in California and the test likes to swap them. Turning on a street: signal at least 100 feet before the turn. Changing lanes on a freeway: signal for at least 5 seconds before you move. One is a distance and one is a time, and the freeway one is longer in practice because everyone is closing much faster. You also signal when pulling away from a curb and when slowing or stopping unexpectedly.",
        trap: "50 feet sounds plausible because it is roughly where most drivers actually signal, but half the required distance leaves the driver behind you no useful warning.",
        excerptKey: "signal-100-feet",
        sourceLabel: "California Driver's Handbook — Signaling",
        sourceUrl: `${H}/introduction-to-driving/`,
      },
      {
        id: "ca_s1_06",
        topic: "safety",
        question:
          "In good weather, how much following distance does the handbook suggest you keep behind the car ahead?",
        choices: [
          "Two seconds",
          "Three seconds",
          "Five seconds",
          "One second",
        ],
        correctIndex: 1,
        explanation:
          "Three seconds is roughly the gap you need to notice a problem, move your foot and start braking before you reach the spot where the car ahead began stopping. Counting seconds works at any speed, which is why it beats trying to judge car lengths.",
        context:
          "Three seconds is the baseline in good conditions, and you add to it rather than subtract. Rain, fog, darkness, a heavy load, a towed trailer, following a motorcycle or sitting behind a large truck whose mirrors cannot find you all justify more space. To measure it, watch the car ahead pass a fixed object such as a sign, then count — if you reach the object before you finish counting three, you are too close.",
        trap: "Two seconds is the figure people half-remember from other jurisdictions, and it leaves you short exactly when the car ahead brakes for something you cannot see.",
        excerptKey: "three-second-rule",
        sourceLabel: "California Driver's Handbook — Safe driving",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s1_07",
        topic: "signs",
        question:
          "A downward-pointing triangle edged in red faces you as you join a road. What is it asking?",
        choices: [
          "Slow down, be ready to stop and let others go first",
          "Merge at your current speed without checking",
          "Warn you that the road ahead narrows",
          "Stop completely every time, without exception",
        ],
        correctIndex: 0,
        explanation:
          "A YIELD sign hands priority to the traffic already on the road you are joining. You do not have to stop if the way is genuinely clear, but you must slow enough that stopping is still an option when it is not.",
        context:
          "Yield and stop are different obligations, and the difference is the whole question. A stop sign requires the wheels to stop every time regardless of traffic. A yield requires you to give way — slow, look, and stop only if someone is coming. You will meet yield markings in other forms too: a row of solid white triangles painted across a lane is a yield line, and the entry to a roundabout works on exactly the same principle.",
        trap: "Choosing \"stop completely every time\" is the safe-sounding answer, but it describes a stop sign — a yield does not require a stop when the road is genuinely clear.",
        excerptKey: "sign-yield",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s1_08",
        topic: "impairment",
        question:
          "For a driver aged 21 or over, driving is illegal once blood alcohol concentration reaches:",
        choices: ["0.05%", "0.08%", "0.10%", "0.12%"],
        correctIndex: 1,
        explanation:
          "0.08% is the line at which an adult is automatically over the limit in California. It is a ceiling, not a target — an officer can still arrest you below it if your driving shows you are impaired.",
        context:
          "California runs four blood alcohol thresholds and the test moves between them freely. 0.08% for a driver aged 21 or over. 0.01% for anyone under 21 — effectively zero tolerance. 0.01% again for anyone on DUI probation, whatever their age. 0.04% for commercial drivers and for anyone carrying passengers for hire. Learn all four as a group, because a question naming an age or a licence class is really asking which of the four applies.",
        trap: "0.10% was the adult limit in many places years ago and still lingers in people's memory, which is why it is the most-chosen wrong answer here.",
        excerptKey: "bac-21-and-over",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s1_09",
        topic: "rules",
        question:
          "You are stopped at a red light and want to turn right. There is no sign about turning. What is correct?",
        choices: [
          "Turn only if there is a green arrow",
          "Turn without stopping if the road looks empty",
          "Wait for a green light before turning right",
          "Stop first, yield to pedestrians and cross traffic, then turn when safe",
        ],
        correctIndex: 3,
        explanation:
          "A right turn on red is allowed in California, but the red light still means stop first. The turn is a favour the law grants you after you have stopped at the limit line and made sure nobody on foot or on wheels is in your path.",
        context:
          "Turning on red has three parts and you need all three: no NO TURN ON RED sign posted, a complete stop at the limit line, and yielding to pedestrians and to traffic already moving through. The same permission extends to a left turn from a one-way street onto another one-way street. A red arrow is different — it forbids the movement outright, and no amount of stopping and yielding makes it legal.",
        trap: "\"Turn without stopping if the road looks empty\" is how most drivers actually behave, and it is precisely what makes the rolling right on red a common citation.",
        excerptKey: "turn-right-on-red",
        sourceLabel: "California Driver's Handbook — Traffic signals",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s1_10",
        topic: "signals",
        question: "A steady yellow traffic light means:",
        choices: [
          "Stop and wait for a green arrow",
          "Speed up so you clear the intersection",
          "The light is about to turn red — stop if you safely can",
          "The light is about to turn green",
        ],
        correctIndex: 2,
        explanation:
          "Yellow is a warning that red is next, not an invitation to accelerate. Stop if you can do so without slamming on the brakes or being rear-ended; if you are already too close to stop safely, continue through and clear the intersection.",
        context:
          "Work through the whole signal set and the variants stop being tricky. Steady red means stop, with a right turn allowed after stopping unless signed otherwise. Steady yellow warns that red follows. Steady green means go once the intersection is clear, but on an unprotected left you still yield to oncoming traffic. A green arrow is a protected movement. A red arrow bans the movement. Flashing red is a stop sign, flashing yellow means proceed with caution, and a completely dark signal is treated as a four-way stop.",
        trap: "\"Speed up so you clear the intersection\" is what a lot of drivers do, but treating yellow as an accelerator pedal is how people arrive in the intersection on red.",
        excerptKey: "signal-yellow",
        sourceLabel: "California Driver's Handbook — Traffic signals",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s1_11",
        topic: "parking",
        question: "Who may legally park at a curb painted blue?",
        choices: [
          "Delivery vehicles actively loading",
          "A vehicle displaying a valid disabled placard or plate",
          "Emergency and government vehicles only",
          "Anyone, for a short posted period",
        ],
        correctIndex: 1,
        explanation:
          "Blue marks spaces set aside for drivers with disabilities, and the placard or special plate is what earns the space — not the errand or the length of the stay. Parking there without one takes away a space someone genuinely cannot manage without.",
        context:
          "Blue is one of five curb colours: red is no stopping, yellow is loading of passengers or freight, white is passengers or mail only, green is limited-time parking, and blue is disabled parking. Disabled spaces come with a second rule that catches people out — the diagonally striped area painted beside such a space is the access aisle for a wheelchair lift or ramp, and parking or stopping in it is prohibited even briefly.",
        trap: "\"Emergency and government vehicles only\" sounds official and therefore plausible, but blue has nothing to do with official vehicles — it is entirely about the placard.",
        excerptKey: "curb-blue",
        sourceLabel: "California Driver's Handbook — Colored curbs",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s1_12",
        topic: "rightOfWay",
        question:
          "An ambulance comes up behind you with siren wailing and lights flashing. You should:",
        choices: [
          "Pull to the right edge of the road and stop until it passes",
          "Brake hard where you are, in the middle of the lane",
          "Speed up to reach the next intersection first",
          "Keep your speed and stay in lane so it can pass",
        ],
        correctIndex: 0,
        explanation:
          "Emergency crews need a predictable path, and every driver moving right and stopping creates one. Stopping in the middle of the lane or braking suddenly leaves the ambulance guessing which side to take.",
        context:
          "The emergency-vehicle rules come as a package. When one approaches with lights or siren, move as far right as you safely can and stop until it has passed — unless you are in an intersection, in which case clear it first, then pull over. You may never follow within 300 feet of an emergency vehicle running its lights or siren. And where an emergency or road work vehicle is stopped at the roadside with lights flashing, the Move Over law asks you to change lanes if you can and slow down if you cannot.",
        trap: "\"Keep your speed and stay in lane\" feels considerate because you are not obstructing anything, but it denies the ambulance the clear right-hand path every other driver is creating.",
        excerptKey: "emergency-vehicle-yield",
        sourceLabel: "California Driver's Handbook — Emergency vehicles",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s1_13",
        topic: "signs",
        question:
          "Yellow diamond-shaped signs on a California road are there to:",
        choices: [
          "State a law you must obey",
          "Give distances to upcoming towns",
          "Mark services such as fuel and lodging",
          "Warn you about a condition or hazard ahead",
        ],
        correctIndex: 3,
        explanation:
          "The yellow diamond is the warning family: a curve, a dip, a merge, children nearby. It does not set a rule you can be ticketed for breaking, but it tells you what the road is about to do so you can adjust before it happens.",
        context:
          "Colour sorts California's signs faster than reading them does. Yellow warns of a road condition ahead. Orange warns of temporary road work. White with black lettering states a regulation you must follow. Red means stop, yield or prohibited. Green gives directions and distances. Blue points to motorist services. Brown marks parks and recreation. Match the colour first and you have already narrowed most sign questions to one answer.",
        trap: "\"State a law you must obey\" describes the white regulatory rectangle, and it is tempting because yellow warning signs often carry a speed panel that looks like a limit.",
        excerptKey: "sign-diamond-warning",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s1_14",
        topic: "speed",
        question: "California's Basic Speed Law says that you must never drive:",
        choices: [
          "In the left lane except when overtaking",
          "Below the posted limit under any circumstances",
          "Faster than is safe for the conditions at that moment",
          "Faster than 55 mph anywhere in the state",
        ],
        correctIndex: 2,
        explanation:
          "The posted number is the maximum on a good day, not a guarantee. Rain, fog, heavy traffic or a road full of pedestrians can all make the posted limit unsafe, and driving that fast anyway is still a violation.",
        context:
          "The Basic Speed Law sits underneath every posted limit in California. Weather, visibility, traffic density, road surface and the presence of pedestrians or cyclists all feed into what counts as a safe speed, and any of them can push the legal maximum below the sign. It works in one direction only: conditions can make the posted number too fast, but they never entitle you to exceed it.",
        trap: "\"Faster than 55 mph anywhere in the state\" mixes up a specific default — the two-lane undivided highway limit — with the general principle the Basic Speed Law actually states.",
        excerptKey: "basic-speed-law",
        sourceLabel: "California Driver's Handbook — Basic Speed Law",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
      {
        id: "ca_s1_15",
        topic: "safety",
        question: "When must your headlights be switched on?",
        choices: [
          "Only between midnight and dawn",
          "From 30 minutes after sunset until 30 minutes before sunrise",
          "Only when street lights are switched off",
          "Only on roads without street lighting",
        ],
        correctIndex: 1,
        explanation:
          "The half-hour buffer either side of sunset and sunrise covers the twilight that fools drivers into thinking they can still be seen. Headlights are also required whenever visibility drops below about 1,000 feet and whenever conditions have you using the wipers.",
        context:
          "There are several separate triggers for headlights in California, and any one of them is enough: the half hour after sunset through the half hour before sunrise, any time you cannot see clearly for 1,000 feet, whenever weather has you running the wipers, and in tunnels or on mountain roads even in daylight. Once they are on, remember the dimming distances — drop the high beams within 500 feet of an oncoming vehicle and within 300 feet of one you are following.",
        trap: "\"Only when street lights are switched off\" confuses street lighting with your own visibility — street lights help you see the road but do nothing to make your car visible to others.",
        excerptKey: "headlights-when",
        sourceLabel: "California Driver's Handbook — Headlights",
        sourceUrl: `${H}/introduction-to-driving/`,
      },
      {
        id: "ca_s1_16",
        topic: "rules",
        question:
          "A school bus ahead of you on an ordinary two-lane street switches on flashing red lights and extends its stop arm. You must:",
        choices: [
          "Stop and stay stopped until the lights stop flashing",
          "Pass on the left if no children are visible",
          "Stop only if you are behind the bus, not if oncoming",
          "Slow to 15 mph and pass with care",
        ],
        correctIndex: 0,
        explanation:
          "Flashing red on a school bus means children are crossing, and drivers from both directions must stop on a road like this. The stop lasts until the lights go off — children can reappear from in front of the bus where you cannot see them.",
        context:
          "School bus lights come in two stages. Flashing amber means the bus is about to stop — slow and prepare. Flashing red with the stop arm out means children are getting on or off, and traffic in both directions must stop on an ordinary street. The one exception is a divided highway or a road with two or more lanes in each direction, where drivers on the far side may continue. Penalties are severe: a fine reaching into four figures and a possible licence suspension.",
        trap: "\"Stop only if you are behind the bus\" imports the divided-highway exception into a plain two-lane street, where oncoming traffic must stop as well.",
        excerptKey: "school-bus-red-lights",
        sourceLabel: "California Driver's Handbook — School buses",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s1_17",
        topic: "sharing",
        question:
          "When you overtake a bicyclist and cannot change lanes, how much space must you leave?",
        choices: [
          "At least six feet",
          "At least one foot",
          "At least two feet",
          "At least three feet",
        ],
        correctIndex: 3,
        explanation:
          "Three feet is the legal minimum clearance between your vehicle and a rider, and if the road will not give you that much, you are required to wait rather than squeeze by. A cyclist can wobble for reasons you never see, such as a pothole or a gust.",
        context:
          "The bicycle rules cluster around a few numbers. Give at least three feet when passing, and change lanes to pass whenever you can rather than sharing. If three feet is not available, slow down and wait — passing anyway is the violation. You may not drive in a bike lane except to park where that is allowed, to enter or leave the road, or within the last 200 feet before a right turn. Cyclists may also take the full lane when it is too narrow to share safely.",
        trap: "Two feet feels close to right and is the width most drivers actually leave, which is exactly why the law had to name a specific figure.",
        excerptKey: "bicycle-3-feet",
        sourceLabel: "California Driver's Handbook — Bicyclists",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s1_18",
        topic: "signs",
        question: "A five-sided sign at the roadside is warning you about:",
        choices: [
          "A construction area",
          "A hospital zone",
          "A school zone or school crossing",
          "A railroad crossing",
        ],
        correctIndex: 2,
        explanation:
          "The five-sided outline is used only for schools, so the shape alone tells you children may be near the road. Slow down, expect people crossing, and be ready to stop at the crosswalk whether or not you see anyone yet.",
        context:
          "Shapes carry meaning independently of what is written on them, which helps when a sign is dirty or seen at an angle. Five sides means school. Eight sides means stop. A downward triangle means yield. A circle means a railroad crossing is ahead. A diamond is a general warning. A vertical rectangle usually carries a regulation, and a horizontal one usually carries guidance. School zones also bring a speed rule: 25 mph within 500 feet of a school when children are present, and some zones are posted at 15 mph.",
        trap: "Railroad crossing is the tempting pick because both signs are warnings about a specific hazard, but the round yellow sign is the railroad one — five sides is always school.",
        excerptKey: "sign-pentagon-school",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s1_19",
        topic: "rightOfWay",
        question:
          "You and another driver reach a four-way stop at exactly the same moment, side by side on crossing streets. Who goes first?",
        choices: [
          "The driver on the left",
          "The driver on the right",
          "The driver going straight ahead",
          "The driver in the larger vehicle",
        ],
        correctIndex: 1,
        explanation:
          "When arrival order cannot separate you, California uses a simple tie-breaker: the vehicle on the right goes first. Knowing it matters because both drivers hesitating is how these intersections turn into a slow-motion collision.",
        context:
          "Intersection priority in California runs through a short sequence. Whoever arrived first goes first. If two arrive together, the one on the right goes. At a T-intersection, the road that continues through has priority over the road that ends. If you are turning left, oncoming traffic going straight goes before you. And anyone entering from a driveway, alley or private road yields to everything already on the street, including people on the sidewalk.",
        trap: "\"The driver going straight ahead\" borrows the left-turn rule and applies it to a simultaneous four-way arrival, where direction of travel does not decide anything.",
        excerptKey: "row-same-time-right",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s1_20",
        topic: "safety",
        question: "The safest way to scan the road ahead is to:",
        choices: [
          "Keep your eyes moving and look about 10 seconds ahead",
          "Watch the lane line immediately beside your wheel",
          "Check only your mirrors at regular intervals",
          "Fix your eyes on the bumper of the car in front",
        ],
        correctIndex: 0,
        explanation:
          "Looking roughly ten seconds up the road gives you time to see a problem forming rather than arriving. Staring at the car in front means you inherit its mistakes; you see the brake lights but never the reason they came on.",
        context:
          "Good visual habits are a set rather than a single trick: scan about ten seconds ahead, keep the eyes moving instead of fixing on one point, check the mirrors every few seconds, and glance over the shoulder before any lane change because mirrors leave blind spots no adjustment can remove. The ten-second figure scales with speed — on a freeway it is a quarter of a mile, in town it is barely a block.",
        trap: "Checking only mirrors sounds diligent, but mirrors show you what has already happened behind while the hazard you need to plan for is up ahead.",
        excerptKey: "scan-10-seconds",
        sourceLabel: "California Driver's Handbook — Scanning",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s1_21",
        topic: "parking",
        question:
          "You are parking facing downhill on a street with a curb. Your front wheels should be turned:",
        choices: [
          "Away from the curb",
          "Straight ahead",
          "Whichever way the road slopes",
          "Toward the curb",
        ],
        correctIndex: 3,
        explanation:
          "Point the wheels at the curb when you face downhill so that a rolling car steers itself into the concrete instead of down the street. Think about where gravity would take the car and aim the tyres at something solid in that direction.",
        context:
          "Hill parking has three cases, and one question can test any of them. Facing downhill with a curb: wheels turned toward the curb. Facing uphill with a curb: wheels turned away from the curb, then let the car roll back until a tyre rests against it. Facing either way with no curb at all: wheels turned right, toward the shoulder, so a runaway car leaves the road rather than entering it. In every case you also set the parking brake and leave the vehicle in park or in gear.",
        trap: "\"Away from the curb\" is the correct answer for the UPHILL case, and swapping the two is the single most common error in California parking questions.",
        excerptKey: "hill-downhill-curb",
        sourceLabel: "California Driver's Handbook — Parking on a hill",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s1_22",
        topic: "rules",
        question:
          "You are on a two-lane road with a solid yellow line on your side of the centre. This means:",
        choices: [
          "Traffic ahead of you is travelling the same direction",
          "You may pass whenever the road ahead is clear",
          "You may not pass, though you may cross to turn into a driveway",
          "The road becomes one-way ahead",
        ],
        correctIndex: 2,
        explanation:
          "A solid yellow line on your side is a no-passing marking, usually because sight distance is too short to overtake safely. It does not seal you in — you may still cross it to turn left into a driveway or road when it is safe.",
        context:
          "Line colour tells you about direction and line style tells you about permission. Yellow separates traffic moving in opposite directions; white separates lanes moving the same way. Broken means you may cross when it is safe; solid means you may not, though a single solid yellow can still be crossed to turn. Double solid yellow is a barrier, crossable only for a left turn or U-turn into a driveway or road where that is allowed. Double solid white separates a carpool lane from general traffic and is not to be crossed at all.",
        trap: "\"Traffic ahead is travelling the same direction\" mixes up the colours — yellow always means oncoming traffic, and white is the one that marks same-direction lanes.",
        excerptKey: "marking-solid-yellow-single",
        sourceLabel: "California Driver's Handbook — Pavement markings",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s1_23",
        topic: "signs",
        question:
          "A round yellow sign with a black X and two letter Rs tells you that:",
        choices: [
          "A roundabout is ahead",
          "A railroad crossing is coming up",
          "A rest area is ahead",
          "The route ahead is restricted",
        ],
        correctIndex: 1,
        explanation:
          "That circular yellow sign is the advance warning for a railroad crossing. It is your cue to slow, look and listen early, because a train needs far more distance to stop than you do and cannot swerve at all.",
        context:
          "Railroad crossings carry their own family of markings and rules. The round yellow sign is the advance warning; the white X-shaped crossbuck sits at the crossing itself; a blue sign nearby carries an emergency number and a crossing identifier to call if a vehicle is stuck. When lights flash, gates lower, or anyone signals a train is coming, stop at least 15 feet from the nearest rail. Where you cannot see 400 feet along the track, the speed limit within 100 feet of the crossing drops to 15 mph. Never stop on the tracks, and never start across unless there is room to clear them completely.",
        trap: "A roundabout warning is a diamond with a circular arrow diagram, not a plain round sign — the shape of the sign and the shape of the hazard are easy to conflate.",
        excerptKey: "sign-railroad-advance",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s1_24",
        topic: "impairment",
        question:
          "You are 19 and have had one drink. What blood alcohol level makes driving illegal for you?",
        choices: [
          "0.01% or higher",
          "0.05% or higher",
          "0.08% or higher",
          "Any level, but only after 10 p.m.",
        ],
        correctIndex: 0,
        explanation:
          "Drivers under 21 are held to a zero-tolerance standard, and 0.01% is effectively any detectable alcohol at all. A single drink can put a young driver over that line, so there is no safe quantity before driving.",
        context:
          "Under-21 drivers face the strictest of California's four alcohol thresholds. The full set is 0.08% for adults 21 and over, 0.01% for anyone under 21, 0.01% for anyone on DUI probation regardless of age, and 0.04% for commercial drivers and those carrying passengers for hire. Under-21 drivers also face separate rules on carrying alcohol in the vehicle at all, and a licence suspension can follow from the DMV side even where no criminal conviction results.",
        trap: "0.08% is the adult number and the one everybody knows, which makes it the reflex answer even when the question has specifically named an under-21 driver.",
        excerptKey: "bac-under-21",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s1_25",
        topic: "speed",
        question:
          "Unless signs say otherwise, what is the top legal speed on a two-lane undivided highway in California?",
        choices: ["45 mph", "55 mph", "60 mph", "65 mph"],
        correctIndex: 1,
        explanation:
          "Two-lane undivided highways carry oncoming traffic with nothing but paint between you, so the default limit drops to 55 mph rather than the 65 mph you get on most other highways. The same 55 mph applies when you are towing a trailer.",
        context:
          "The highway defaults are worth holding side by side. Most California highways top out at 65 mph unless a sign posts something else, and some rural stretches are posted higher. A two-lane undivided highway drops to 55 mph because there is no physical barrier between you and oncoming traffic. Towing a trailer also puts you at 55 mph, whatever the road. Underneath all of it, the Basic Speed Law can require less than any of these numbers when conditions are poor.",
        trap: "65 mph is the figure people carry from freeway driving and apply to every highway, which is exactly the confusion this rule exists to correct.",
        excerptKey: "speed-max-highways",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/safe-driving-cont2/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s1_26",
        topic: "safety",
        question:
          "Before changing lanes, checking your mirrors is not enough because:",
        choices: [
          "Mirrors are only reliable at night",
          "Mirrors cannot show vehicles behind you",
          "Mirrors distort how far away vehicles are",
          "Each vehicle has blind spots the mirrors do not cover",
        ],
        correctIndex: 3,
        explanation:
          "Every car has areas beside and slightly behind it that no mirror shows, and a whole motorcycle can hide there. A quick glance over your shoulder is the only way to fill in what the mirrors leave out.",
        context:
          "A complete lane change in California runs: signal, mirrors, shoulder check, then move. Blind spots exist on both sides of every vehicle no matter how the mirrors are set, and they are big enough to hide a motorcycle or a cyclist entirely. The same shoulder check applies before turning, before merging, before backing up and before opening your door into the roadway. On a freeway you also signal for at least five seconds before moving over.",
        trap: "\"Mirrors distort how far away vehicles are\" is true of convex mirrors and therefore sounds knowledgeable, but distortion is not the reason a shoulder check is required — the unseen zone is.",
        excerptKey: "lane-change-shoulder-check",
        sourceLabel: "California Driver's Handbook — Blind spots",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s1_27",
        topic: "signs",
        question:
          "You see a white rectangular sign with black lettering. Signs of this type generally:",
        choices: [
          "Point the way to nearby attractions",
          "Warn of a hazard on the road ahead",
          "State a traffic law you are required to obey",
          "Mark the boundary of a construction zone",
        ],
        correctIndex: 2,
        explanation:
          "White rectangles carry regulatory messages — speed limits, lane restrictions, turn prohibitions — and breaking them is a citable offence. Warnings come in yellow diamonds, and guidance comes in green or blue.",
        context:
          "The regulatory family tells you what the law requires at that spot: speed limits, KEEP RIGHT, ONE WAY, NO TURN ON RED, lane use restrictions. Many of them use a red circle with a diagonal slash over a symbol, which always means the thing pictured is prohibited. Contrast that with yellow diamonds, which describe a hazard but impose no rule of their own, and with green and blue signs, which only give direction and service information.",
        trap: "Confusing white regulatory rectangles with yellow warning diamonds is the classic error — a warning sign cannot be violated, while a regulatory one can earn you a ticket.",
        excerptKey: "sign-white-rectangle",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s1_28",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping centre driveway onto a busy street. Who has the right-of-way?",
        choices: [
          "You, once your front wheels reach the roadway",
          "Traffic already on the street, and pedestrians on the sidewalk",
          "Whichever driver signals first",
          "You, if the nearest car is more than 100 feet away",
        ],
        correctIndex: 1,
        explanation:
          "Coming off private property, you are the one joining a traffic stream that is already flowing, so everyone in it goes first. The sidewalk counts too — people walking across the driveway mouth have priority over your exit.",
        context:
          "California's yielding rules run on a simple principle: whoever is joining gives way to whoever is already there. That covers leaving a driveway, alley, parking lot or private road, entering a roundabout, merging onto a freeway, and turning left across oncoming traffic. The sidewalk step catches people out — before your bumper reaches the road you have already crossed a footway where pedestrians have priority.",
        trap: "\"If the nearest car is more than 100 feet away\" invents a distance rule that does not exist here; a gap may make the move safe, but it never transfers the right-of-way to you.",
        excerptKey: "row-entering-traffic",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s1_29",
        topic: "rules",
        question:
          "The lane in the middle of a road marked with a solid outer yellow line and a broken inner yellow line is used for:",
        choices: [
          "Left turns and U-turns where permitted, by drivers from either direction",
          "Carpool vehicles during rush hour",
          "Emergency vehicles only",
          "Passing slower traffic",
        ],
        correctIndex: 0,
        explanation:
          "That is a centre left-turn lane, shared by traffic going both ways as a place to wait before turning left. It is not a travel lane and not an overtaking lane — you enter it shortly before your turn, not blocks in advance.",
        context:
          "The centre left-turn lane is marked by a pair of yellow lines on each side where the outer line is solid and the inner one is broken, and it belongs to traffic from both directions at once. You may use it to wait for a gap before turning left, and to make a U-turn where U-turns are otherwise allowed. What you must not do is drive along it, use it to pass, or use it to accelerate before merging into traffic.",
        trap: "Reading it as a carpool lane is understandable because both are special-purpose lanes, but carpool lanes are marked with a white diamond and sit at the left of the roadway, not in the centre between opposing flows.",
        excerptKey: "center-left-turn-lane",
        sourceLabel: "California Driver's Handbook — Lane markings",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s1_30",
        topic: "sharing",
        question:
          "A large truck is signalling a right turn at an intersection and has swung wide to the left. You should:",
        choices: [
          "Pass it quickly on the left before it turns",
          "Sound your horn so the driver corrects position",
          "Move into the gap on its right to keep traffic flowing",
          "Stay back and let it complete the turn",
        ],
        correctIndex: 3,
        explanation:
          "A long vehicle has to swing out before turning because its rear wheels cut a much tighter arc than its front ones. The space that opens on its right is where the trailer is about to be, and a car sitting there gets crushed against the curb.",
        context:
          "Sharing the road with large vehicles comes down to space and sight lines. Trucks need extra room to turn and will swing away from the direction of the turn first. They have long blind spots down both sides and directly behind, so if you cannot see the driver's face in their mirror they cannot see you. They also take much longer to stop, which is why cutting in front of one after passing is a bad idea and why you leave a bigger following gap behind one.",
        trap: "Filling the gap on the right is the intuitive city-driving move, and it is the exact position the trailer sweeps through as the turn completes.",
        excerptKey: "truck-wide-turns",
        sourceLabel: "California Driver's Handbook — Large vehicles",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "California Easy Set",
    difficulty: "easy",
    description:
      "Thirty-five questions on the core rules most Californian drivers should already know — signals, curb colours, speed defaults, and the everyday right-of-way calls.",
    questions: [
      {
        id: "ca_s2_01",
        topic: "signs",
        question:
          "A white sign shows a black arrow curving back on itself inside a red circle with a slash. It tells you that:",
        choices: [
          "Left turns must be made from this lane",
          "A detour begins at this point",
          "U-turns are not allowed here",
          "The road bends sharply ahead",
        ],
        correctIndex: 2,
        explanation:
          "A red circle with a diagonal slash always cancels whatever action is drawn inside it, and the doubled-back arrow is the U-turn symbol. Read the picture first, then the circle, and the sign explains itself.",
        context:
          "The red-circle-and-slash convention runs across the whole regulatory family, so once you know it you can read signs you have never seen. Whatever is drawn inside is the thing you may not do: a U-turn arrow, a left-turn arrow, a truck, a bicycle, a pedestrian. Warning signs use the same symbols without the circle to mean something quite different — that the thing pictured may be present ahead.",
        trap: "\"The road bends sharply ahead\" reads the arrow as a picture of the road rather than a picture of your manoeuvre, which is the mistake the red circle is there to prevent.",
        excerptKey: "sign-prohibition-circle",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s2_02",
        topic: "rules",
        question:
          "Before merging onto a freeway you plan to change lanes. How long should you signal first?",
        choices: [
          "About two seconds",
          "At least five seconds",
          "Signalling is optional when merging",
          "About one second",
        ],
        correctIndex: 1,
        explanation:
          "At freeway speeds, drivers close on each other so fast that a brief flick of the indicator disappears before anyone registers it. Five seconds of signal gives the traffic around you time to open a gap instead of reacting to a surprise.",
        context:
          "California gives you a distance for turns and a duration for freeway lane changes: at least 100 feet before a turn, at least 5 seconds before changing lanes on a freeway. Merging safely also means matching the speed of traffic on the acceleration lane rather than arriving slow, checking mirrors and blind spot, and moving over in one deliberate step rather than drifting.",
        trap: "One or two seconds matches what most drivers actually do, and it is exactly the habit the five-second rule was written to correct at freeway closing speeds.",
        excerptKey: "signal-lane-change-freeway",
        sourceLabel: "California Driver's Handbook — Signaling",
        sourceUrl: `${H}/introduction-to-driving/`,
      },
      {
        id: "ca_s2_03",
        topic: "parking",
        question: "A curb painted white allows you to stop only long enough to:",
        choices: [
          "Pick up or drop off passengers or mail",
          "Park while you run a short errand",
          "Wait for a parking space to open",
          "Load or unload freight",
        ],
        correctIndex: 0,
        explanation:
          "White is the passenger colour: someone gets in or out and you move on, usually within a couple of minutes. Freight and cargo belong at a yellow curb, and neither colour is a place to leave the car unattended.",
        context:
          "Keep the five colours in a row and the differences become obvious. Red: no stopping, standing or parking at all. Yellow: loading of passengers or freight, within the posted time. White: passengers or mail only, briefly. Green: limited-time parking, with the limit posted. Blue: disabled placard or plate only. Yellow and white overlap on passengers, and the distinguishing feature is that yellow also covers freight.",
        trap: "\"Load or unload freight\" is the YELLOW curb, and the overlap with passengers between the two colours is what makes them so easy to swap.",
        excerptKey: "curb-white",
        sourceLabel: "California Driver's Handbook — Colored curbs",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s2_04",
        topic: "rightOfWay",
        question:
          "You are approaching a roundabout. What does the law require as you arrive?",
        choices: [
          "Enter first and let circulating traffic slow for you",
          "Signal left and travel clockwise",
          "Stop fully at the entry line every time",
          "Yield to vehicles already circulating in the roundabout",
        ],
        correctIndex: 3,
        explanation:
          "Roundabouts work because entering traffic yields and circulating traffic keeps moving; reversing that would jam the whole thing. Slow on approach, look left for a gap, join going counter-clockwise, and signal as you leave.",
        context:
          "A roundabout in California runs on one rule with several consequences. Slow on approach and yield to anyone already circulating. Enter to the right and travel counter-clockwise, without stopping once you are inside. Pick your lane by destination — right lane for a right exit, left lane for a left exit, either for straight ahead where two lanes are provided. Signal before you exit, and if you miss your exit, go round again rather than cutting across.",
        trap: "\"Stop fully at the entry line every time\" treats the roundabout as a stop sign; unnecessary stopping in a clear roundabout is what causes rear-end collisions at the entry.",
        excerptKey: "roundabout-yield",
        sourceLabel: "California Driver's Handbook — Roundabouts",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s2_05",
        topic: "speed",
        question:
          "You are driving past a school when children are present and no other limit is posted. Your speed must not exceed:",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 2,
        explanation:
          "School zones carry a 25 mph limit within 500 feet of the school when children are around, and some are signed as low as 15 mph. Children step off curbs without checking, and 25 mph is roughly the fastest speed from which you can still stop for one.",
        context:
          "The school-zone limit is 25 mph within 500 feet of a school while children are present, unless a sign posts something lower — 15 mph zones do exist and the sign overrides the default. The same 25 mph applies generally through business and residential districts. Watch for the five-sided school sign, yellow school crossing markings and crossing guards, and remember that a school bus with flashing red lights brings its own separate stopping obligation.",
        trap: "15 mph is a real California figure — it applies at blind intersections, in alleys and in some posted school zones — which makes it the most convincing wrong answer here.",
        excerptKey: "school-zone-speed",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s2_06",
        topic: "safety",
        question:
          "Rain has just started falling after a dry spell. The road is most slippery:",
        choices: [
          "Only where the surface is concrete rather than asphalt",
          "After several hours of steady rain",
          "During the first few minutes, before oil is washed away",
          "Only once puddles have formed",
        ],
        correctIndex: 2,
        explanation:
          "Weeks of dripped oil and rubber sit on the surface, and the first rain lifts it into a greasy film before washing it off. That early window catches drivers out because the road looks barely wet while the grip has already gone.",
        context:
          "Wet-weather driving in California has a few practical benchmarks. Cut roughly 5 to 10 mph off your speed on wet roads, halve it on packed snow, and crawl at about 5 mph on ice. If rain or snow drops visibility below 100 feet, do not exceed 30 mph. Turn on your headlights any time the wipers are running, increase your following distance beyond three seconds, and if the car hydroplanes, ease off the accelerator rather than braking.",
        trap: "\"After several hours of steady rain\" sounds right because the road is visibly wetter then, but by that point the oil film has washed away and grip has partly recovered.",
        excerptKey: "rain-first-slippery",
        sourceLabel: "California Driver's Handbook — Driving in bad weather",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s2_07",
        topic: "signs",
        question:
          "Orange signs and orange cones along a stretch of highway indicate:",
        choices: [
          "A recreation area entrance",
          "A road work or construction zone",
          "A stretch reserved for slow-moving vehicles",
          "A section with no shoulder",
        ],
        correctIndex: 1,
        explanation:
          "Orange is reserved for temporary work zones, where lanes shift, surfaces change and people are on foot near live traffic. Treat orange as an instruction to slow down and stop assuming the road is where it was last week.",
        context:
          "Colour is the fastest way into a sign question. Orange means temporary road work. Yellow means a permanent road condition ahead. White with black text states a regulation. Red means stop, yield or prohibited. Green gives directions and distances, blue points to services, and brown marks recreational destinations. In work zones, expect reduced speed limits, flaggers directing traffic, and the Move Over obligation where maintenance vehicles are stopped with amber lights flashing.",
        trap: "Brown is the recreation colour, not orange, and the two warm colours are easy to blur when the sign is passed at speed.",
        excerptKey: "sign-colour-orange-workzone",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s2_08",
        topic: "impairment",
        question:
          "By driving in California you have already given what is known as implied consent. Refusing a chemical test after a lawful DUI arrest results in:",
        choices: [
          "Suspension or revocation of your driving privilege for a year",
          "No consequence unless you are later convicted",
          "A fine but no effect on your licence",
          "A written warning on your record only",
        ],
        correctIndex: 0,
        explanation:
          "Holding a California licence carries an advance agreement to be tested for alcohol or drugs if you are lawfully arrested for DUI. Refusing is treated as its own offence: the DMV can take your driving privilege for a year regardless of how the criminal case ends.",
        context:
          "Implied consent means the agreement to be tested was made when you started driving in California, not at the roadside. After a DUI arrest the officer may take your licence and issue a temporary one lasting about 30 days, and you have 10 days to ask the DMV for a hearing. The DMV process runs separately from the criminal court case, which is why a refusal can cost you your licence even if the prosecution goes nowhere. DUI convictions stay on the record for 10 years.",
        trap: "\"No consequence unless you are later convicted\" assumes the licence follows the court case, but the DMV suspension is administrative and lands regardless of the criminal outcome.",
        excerptKey: "implied-consent",
        sourceLabel: "California Driver's Handbook — Implied consent",
        sourceUrl: `${H}/alcohol-and-drugs/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s2_09",
        topic: "rules",
        question:
          "Double solid white lines separate the carpool lane from the lane beside it. You may:",
        choices: [
          "Cross them only during posted carpool hours",
          "Cross them whenever the carpool lane is empty",
          "Cross them only to overtake a slow vehicle",
          "Not cross them — wait for a designated entry or exit opening",
        ],
        correctIndex: 3,
        explanation:
          "Double solid white lines act as a barrier between a general lane and a preferential lane, and darting across them is exactly the manoeuvre that causes high-speed sideswipes. Wait for the broken-line opening that marks a legal entry or exit.",
        context:
          "Carpool lanes in California are marked with a white diamond and signs stating the occupancy requirement and the hours it applies. Where the lane is separated by double solid white lines you must enter and leave only at the designated broken-line openings. Some lanes operate around the clock and some only during posted commute hours; outside those hours an hours-limited lane is open to everyone. Motorcycles and qualifying clean-air vehicles with a valid decal may also use them.",
        trap: "\"Cross them whenever the carpool lane is empty\" confuses eligibility to use the lane with permission to cross the barrier — being allowed in the lane says nothing about where you may enter it.",
        excerptKey: "marking-double-white",
        sourceLabel: "California Driver's Handbook — HOV lanes",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s2_10",
        topic: "parking",
        question:
          "You are parking uphill on a street that has a curb. What should you do with the front wheels?",
        choices: [
          "Turn them away from the curb and stop a foot short of it",
          "Turn them toward the curb",
          "Turn them away from the curb and let the car roll back until a tyre touches",
          "Leave them straight and rely on the parking brake",
        ],
        correctIndex: 2,
        explanation:
          "Facing uphill, a car that starts moving rolls backwards, so the wheels are pointed away from the curb and the car is allowed to settle back until a tyre rests against it. The curb then acts as a chock instead of the car drifting into the lane.",
        context:
          "Work the hill rule out from first principles rather than memorising it. Ask which way gravity would move the car, then aim the front wheels so that motion carries a tyre into the curb. Downhill, the car rolls forward, so the wheels point toward the curb. Uphill, it rolls back, so the wheels point away and the back edge of the front tyre catches the curb. With no curb at all, point the wheels right in both cases so the car leaves the road. Always set the parking brake and leave it in park or gear.",
        trap: "\"Turn them away from the curb and stop a foot short\" gets the direction right but skips the contact — without a tyre resting against the curb there is nothing to stop the roll.",
        excerptKey: "hill-uphill-curb",
        sourceLabel: "California Driver's Handbook — Parking on a hill",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s2_11",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light with no arrow while an oncoming car comes straight toward the intersection. You should:",
        choices: [
          "Turn promptly because you arrived at the light first",
          "Wait for a safe gap — oncoming traffic goes first",
          "Turn if the oncoming driver flashes their lights",
          "Edge into the intersection and force a gap",
        ],
        correctIndex: 1,
        explanation:
          "A plain green gives you permission to enter the intersection, not priority over the traffic coming the other way. You may wait in the intersection with the wheels straight, then complete the turn once a genuine gap appears.",
        context:
          "The left turn is where several California rules meet. On a plain green you yield to oncoming vehicles and to pedestrians in the crosswalk you are turning into; on a green arrow the movement is protected and oncoming traffic is held. Waiting in the intersection is allowed, but keep the front wheels straight so that a rear-end shunt does not push you into oncoming traffic. Turn into the nearest lane going your direction rather than swinging wide.",
        trap: "Acting on another driver's flashed headlights feels courteous, but it is an informal signal with no legal force and you carry the fault if the gap was not really there.",
        excerptKey: "row-turning-left",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s2_12",
        topic: "signs",
        question: "Green highway signs with white lettering are used to:",
        choices: [
          "Give directions, distances and route guidance",
          "Mark rest stops and fuel services",
          "Show that a lane is closed ahead",
          "Warn about upcoming curves",
        ],
        correctIndex: 0,
        explanation:
          "Green is the guidance colour: exits, place names and mileage. Blue is the one that points you to services like fuel and hospitals, and brown marks parks and recreation areas.",
        context:
          "Sign colour maps cleanly onto sign purpose. Green: guidance, exits, distances. Blue: motorist services such as fuel, food, lodging and hospitals. Brown: parks, campgrounds and cultural sites. Yellow: warning of a road condition. Orange: temporary road work. White with black text: a regulation. Red: stop, yield or prohibited. Learning the mapping means you can answer sign-colour questions without recalling any particular sign.",
        trap: "\"Mark rest stops and fuel services\" is the BLUE family, and the overlap is easy because green exit signs often list services on the same gantry.",
        excerptKey: "sign-colour-green-guide",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s2_13",
        topic: "safety",
        question:
          "Your car begins to hydroplane on a flooded stretch of road. The correct response is to:",
        choices: [
          "Accelerate to push the water aside",
          "Turn the wheel sharply toward the shoulder",
          "Brake firmly to regain contact with the surface",
          "Ease off the accelerator and slow gradually without braking",
        ],
        correctIndex: 3,
        explanation:
          "Hydroplaning means the tyres are riding on water instead of asphalt, so braking or steering hard just spins a car that has no grip to work with. Lifting off the gas lets speed bleed away until the tread bites again.",
        context:
          "The common thread across California's loss-of-traction emergencies is that sudden inputs make things worse. Hydroplaning: ease off the gas, do not brake, keep the wheel steady. Tyre blowout: hold the wheel firmly with both hands, ease off the accelerator and slow gradually before pulling over. Wheels dropping onto a soft shoulder: hold straight, slow down, then steer back gently. In each case you are buying time for grip to return rather than trying to force the car back into line.",
        trap: "Braking firmly is the instinct that gets people spun, because a tyre riding on water cannot transmit braking force and locking it simply removes what little steering you had.",
        excerptKey: "hydroplaning",
        sourceLabel: "California Driver's Handbook — Hydroplaning",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s2_14",
        topic: "speed",
        question:
          "You are approaching a blind intersection where buildings block your view of the cross street. The maximum legal speed is:",
        choices: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctIndex: 1,
        explanation:
          "When you cannot see 100 feet along the cross street as you approach, the intersection counts as blind and the limit falls to 15 mph. At that speed you can still stop for a car or a cyclist you only see at the last moment.",
        context:
          "California uses 15 mph for the three situations where you effectively cannot see what is coming: a blind intersection, an alley, and a railroad crossing within 100 feet where you cannot see 400 feet along the track. A separate 10 mph limit applies when passing a bus or streetcar stopped at a safety zone. Group the 15 mph cases together and the odd one out becomes easy to remember.",
        trap: "25 mph is the residential default and feels natural on a city street, but a blind intersection overrides it with the tighter 15 mph figure.",
        excerptKey: "speed-blind-intersection",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s2_15",
        topic: "rules",
        question:
          "You want to make a right turn at the next corner. Before turning you should:",
        choices: [
          "Straddle the lane line to warn drivers behind you",
          "Swing left first so you can take the corner wide",
          "Move close to the right edge of the roadway and check for cyclists",
          "Stay in the middle of the lane until you begin the turn",
        ],
        correctIndex: 2,
        explanation:
          "Hugging the right closes the gap a cyclist would otherwise ride into, which is where most right-hook collisions come from. Signal early, check your blind spot and mirror, then turn tightly into the nearest lane going your way.",
        context:
          "A California right turn runs: signal at least 100 feet ahead, move close to the right edge, check the mirror and blind spot for cyclists and pedestrians, stop at the limit line if a signal or sign requires it, then turn into the lane nearest the right curb. Where a bike lane runs along the curb you may enter it within the last 200 feet before the turn, which is the correct way to close that gap rather than turning across it.",
        trap: "\"Swing left first\" copies what large trucks have to do, but a car that swings wide before turning right opens exactly the gap a cyclist rides into.",
        excerptKey: "signal-100-feet",
        sourceLabel: "California Driver's Handbook — Turns",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s2_16",
        topic: "signs",
        question:
          "You are driving and see a large red-and-white sign reading WRONG WAY. This means:",
        choices: [
          "You have taken a wrong exit but may continue",
          "You are heading against the flow of traffic and must stop and turn around",
          "The road ahead is closed for repairs",
          "You have entered a one-way street travelling correctly",
        ],
        correctIndex: 1,
        explanation:
          "That sign only faces you if you are pointed into oncoming traffic, usually after entering a ramp or one-way street from the wrong end. Stop, back out or turn around as soon as you can do it safely — head-on freeway collisions start exactly here.",
        context:
          "WRONG WAY and DO NOT ENTER work as a pair at ramps and one-way streets. DO NOT ENTER sits at the entrance to warn you off before you commit; WRONG WAY sits a little further in and only becomes visible if you have already entered against the flow. Both are red and white, both are regulatory, and both demand that you stop and reverse the mistake rather than looking for a place further along to turn.",
        trap: "\"You have taken a wrong exit but may continue\" treats it as a navigation message, when it is the single most urgent stop-now sign on the road.",
        excerptKey: "sign-wrong-way",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s2_17",
        topic: "parking",
        question:
          "How far from a fire hydrant must you keep your parked vehicle?",
        choices: [
          "At least 15 feet",
          "At least 20 feet",
          "At least 25 feet",
          "At least 10 feet",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen feet is the clearance a crew needs to get a hose onto the hydrant without working around your bumper. The distance is measured from the hydrant itself, and a red curb usually marks it out for you.",
        context:
          "California's parking distances are worth learning as a short list: at least 15 feet from a fire hydrant or a fire station driveway, and at least 20 feet from a crosswalk — 15 feet where a curb extension already pushes the crossing out. On top of the distances, you may not park on a sidewalk or crosswalk, block a driveway, double park, park on the wrong side of the street, or stop in the striped access aisle beside a disabled space.",
        trap: "20 feet is a genuine California parking figure — it is the crosswalk distance — which makes it the most convincing wrong answer to a hydrant question.",
        excerptKey: "parking-hydrant",
        sourceLabel: "California Driver's Handbook — Parking",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s2_18",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a white cane steps toward the curb at an intersection. You should:",
        choices: [
          "Stop with your bumper inside the crosswalk so they hear you",
          "Continue if they have not yet left the curb",
          "Sound the horn to signal that you have stopped",
          "Stop well back and wait silently until they have crossed",
        ],
        correctIndex: 3,
        explanation:
          "A white cane or guide dog signals a pedestrian who is navigating by sound, so the horn confuses rather than helps and a car parked across the crosswalk pushes them out into traffic. Stop short of the crosswalk, stay quiet and let them finish.",
        context:
          "A pedestrian using a white cane or a guide dog has the right-of-way outright, and the practical rules follow from how they navigate. Stop back from the crosswalk so it stays clear and they are not forced around your car into the traffic lane. Do not honk, since the horn masks the engine and traffic sounds they are listening to. Take particular care reversing or moving off quietly in a hybrid or electric vehicle, where there may be almost nothing to hear.",
        trap: "Sounding the horn feels helpful and is the instinct most drivers have, but it drowns out precisely the sounds a blind pedestrian is relying on to judge the crossing.",
        excerptKey: "pedestrian-blind",
        sourceLabel: "California Driver's Handbook — Blind pedestrians",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s2_19",
        topic: "safety",
        question:
          "Driving on a mountain road in daylight, the handbook advises you to:",
        choices: [
          "Use high beams continuously on every curve",
          "Use headlights only after the first hairpin bend",
          "Switch on your headlights so you are easier to see",
          "Keep headlights off to save battery",
        ],
        correctIndex: 2,
        explanation:
          "Mountain roads mix shade, glare and blind curves, and headlights make your car visible round a bend long before your shape is. The same logic applies in tunnels, where the light changes faster than an oncoming driver's eyes can adapt.",
        context:
          "Headlights in California are as much about being seen as about seeing. Beyond the sunset-to-sunrise rule, they are called for in tunnels, on mountain roads, whenever the wipers are running, and any time you cannot see clearly for 1,000 feet. Mountain driving adds its own rules: the vehicle heading uphill keeps the right-of-way on a narrow road, and the horn is a legitimate warning device on blind curves.",
        trap: "\"Use high beams continuously on every curve\" doubles down on visibility but blinds oncoming drivers, and you must drop them within 500 feet of anyone coming toward you.",
        excerptKey: "headlights-mountain-roads",
        sourceLabel: "California Driver's Handbook — Headlights",
        sourceUrl: `${H}/introduction-to-driving/`,
      },
      {
        id: "ca_s2_20",
        topic: "impairment",
        question:
          "A passenger opens a can of beer and puts it in your glove compartment. Under California law:",
        choices: [
          "This is allowed if the glove compartment is locked",
          "This is not allowed — an open container may not be kept there",
          "This is allowed on private roads only",
          "This is allowed as long as the driver is sober",
        ],
        correctIndex: 1,
        explanation:
          "Open containers of alcohol must not be in the passenger area at all, and the glove compartment is specifically ruled out. Anything already opened belongs in the trunk or behind the rearmost seat where nobody can reach it while you drive.",
        context:
          "California's open container rules cover both alcohol and cannabis and apply to the driver and every passenger. Containers must be sealed, or else stored in the trunk or a cargo area out of reach; the glove compartment does not count as storage. Limited exemptions exist for passengers in buses, taxis, motorhomes and campers. A driver may be cited for a passenger's open container, so it is worth checking before you set off.",
        trap: "\"Allowed if the glove compartment is locked\" invents an exemption that does not exist — the glove compartment is specifically named as a place an open container may not be.",
        excerptKey: "open-container",
        sourceLabel: "California Driver's Handbook — Open container laws",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s2_21",
        topic: "rules",
        question:
          "Crossing gates are down at a railroad crossing and the lights are flashing. Where must you stop?",
        choices: [
          "At least 15 feet from the nearest rail",
          "At least 25 feet from the nearest rail",
          "At least 50 feet from the nearest rail",
          "Immediately behind the gate arm, whatever the distance",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen feet keeps you clear of the overhang, because a train is wider than the rails it runs on. Stay put until the gates lift and the lights stop — a second train on another track is a common reason the signal keeps running.",
        context:
          "The railroad numbers cluster around fifteen. Stop at least 15 feet from the nearest rail when a train is signalled. Where sight distance along the track is under 400 feet, the limit within 100 feet of the crossing drops to 15 mph. Never stop on the tracks, and never start across unless there is room to clear them completely on the far side. If your vehicle stalls on the tracks with a train coming, abandon it and run clear.",
        trap: "Stopping right at the gate arm feels precise, but gate arms sit closer to the rails than 15 feet and a train's overhang extends beyond the track itself.",
        excerptKey: "railroad-stop-15-feet",
        sourceLabel: "California Driver's Handbook — Railroad crossings",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s2_22",
        topic: "signs",
        question:
          "A flashing red traffic signal at an intersection should be treated as:",
        choices: [
          "A signal that is out of service and can be ignored",
          "A warning to speed up and clear the junction",
          "A yield sign",
          "A stop sign",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red carries exactly the weight of a stop sign: full stop, then go when it is clear. A flashing yellow is the softer one — slow down and proceed with care, no stop required.",
        context:
          "Flashing signals split into two clear cases. Flashing red equals a stop sign: come to a complete stop, then proceed when the way is clear, using the normal first-arrival and right-hand priority rules. Flashing yellow means caution: slow, look, and continue without stopping. A signal that has gone completely dark is different again and is treated as a four-way stop by every approach.",
        trap: "\"Treat it as a yield sign\" is the near miss — a yield allows you to roll through a clear intersection, while a flashing red requires the wheels to stop first.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "California Driver's Handbook — Traffic signals",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s2_23",
        topic: "speed",
        question:
          "Unless a sign says otherwise, what is the maximum speed on most California highways?",
        choices: ["55 mph", "60 mph", "65 mph", "75 mph"],
        correctIndex: 2,
        explanation:
          "Sixty-five is the general ceiling on California highways, with certain rural stretches posted higher and two-lane undivided roads dropping to 55 mph. The posted sign always wins over the default.",
        context:
          "Hold the highway figures together: 65 mph as the general maximum, 55 mph on two-lane undivided highways and whenever you are towing a trailer, and whatever a sign posts where one is posted — including the higher limits found on some rural stretches. Underneath every one of them, the Basic Speed Law can require a lower speed when weather, traffic or visibility make the posted number unsafe.",
        trap: "55 mph is a real California maximum, but it belongs to two-lane undivided highways and trailer towing rather than to highways in general.",
        excerptKey: "speed-max-highways",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
      {
        id: "ca_s2_24",
        topic: "safety",
        question:
          "Heavy rain has cut visibility to well under 100 feet. The handbook advises that you should not drive faster than:",
        choices: ["20 mph", "30 mph", "40 mph", "45 mph"],
        correctIndex: 1,
        explanation:
          "If you cannot see 100 feet, you cannot see far enough ahead to stop from highway speed, so 30 mph is the practical ceiling. On wet roads generally, dropping 5 to 10 mph below the posted limit is the sensible adjustment.",
        context:
          "The weather adjustments form a ladder. Wet road: reduce by roughly 5 to 10 mph. Visibility under 100 feet from heavy rain or snow: no more than 30 mph. Packed snow: halve your speed. Ice: about 5 mph. All of these sit under the Basic Speed Law, which means driving faster than conditions allow is an offence in itself even where you are under the posted limit.",
        trap: "20 mph feels like the cautious choice and cautious answers usually score well, but the figure the handbook gives for sub-100-foot visibility is 30 mph.",
        excerptKey: "speed-visibility-100-feet",
        sourceLabel: "California Driver's Handbook — Driving in bad weather",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s2_25",
        topic: "parking",
        question:
          "You park on a level street with no curb. What must you still do?",
        choices: [
          "Leave the hazard lights flashing",
          "Turn the wheels sharply left toward the road",
          "Set the parking brake and leave the vehicle in park or in gear",
          "Leave the vehicle in neutral so it can be pushed",
        ],
        correctIndex: 2,
        explanation:
          "The parking brake plus park or a gear is what actually keeps a stationary car stationary, and California expects both whenever you leave a vehicle. Wheel direction is the extra step that matters on a slope, not on the flat.",
        context:
          "Every time you leave a vehicle in California: set the parking brake and leave it in park, or in gear if it is a manual. On a slope, add the wheel-turning step — toward the curb facing downhill, away from the curb and rolled back to touch facing uphill, and toward the shoulder in either direction where there is no curb. Turning the wheels on the level is harmless but is not what the rule asks for.",
        trap: "\"Turn the wheels sharply left toward the road\" applies a hill technique in the wrong place and in the wrong direction — pointing wheels into the roadway is never the safe default.",
        excerptKey: "parking-brake",
        sourceLabel: "California Driver's Handbook — Parking",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s2_26",
        topic: "rightOfWay",
        question:
          "Two cars meet on a narrow mountain road where only one can pass. Who has the right-of-way?",
        choices: [
          "The vehicle heading downhill",
          "The vehicle heading uphill",
          "The heavier vehicle",
          "Whichever driver signals first",
        ],
        correctIndex: 1,
        explanation:
          "The uphill driver keeps the right-of-way because reversing up a grade is far harder to control than backing down one. The downhill car gives way and, if reversing is needed, it is the one that does it.",
        context:
          "Mountain driving has a small set of rules of its own. The uphill vehicle has the right-of-way on a narrow road, and the downhill vehicle backs up if someone must. Headlights go on in daylight because of shade and blind curves, and the horn is a legitimate warning before a bend where you cannot see. On a long descent, use a lower gear so the brakes do not overheat, and watch for turnouts where you can let faster traffic past.",
        trap: "Picking the downhill vehicle sounds sensible because it has momentum and a clearer run, but momentum is exactly why it is the one better able to stop and reverse.",
        excerptKey: "mountain-road-uphill",
        sourceLabel: "California Driver's Handbook — Mountain roads",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s2_27",
        topic: "rules",
        question:
          "You may drive in a bicycle lane in which of these situations?",
        choices: [
          "Within 200 feet of an intersection where you are turning right",
          "Any time you are travelling under 25 mph",
          "When traffic in the regular lane is stopped",
          "Whenever the lane is empty of cyclists",
        ],
        correctIndex: 0,
        explanation:
          "You may enter the bike lane in the last 200 feet before a right turn, which puts you where a cyclist cannot slip up your inside. Otherwise the lane is off limits except to park where allowed or to cross it entering or leaving the road.",
        context:
          "A bike lane is marked by a solid white line and signs, and it is a travel lane belonging to cyclists rather than spare road. Three exceptions let a motor vehicle in: parking where parking is permitted, entering or leaving the roadway, and the final 200 feet before a right turn. Alongside that, when you pass a rider you must leave at least three feet, and where the lane is too narrow to share, a cyclist may legitimately take the whole of it.",
        trap: "\"Whenever the lane is empty of cyclists\" treats the bike lane as unused road, which is how drivers end up occupying it just as a rider arrives from behind.",
        excerptKey: "bike-lane-200-feet",
        sourceLabel: "California Driver's Handbook — Bicycle lanes",
        sourceUrl: `${H}/navigating-the-roads/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s2_28",
        topic: "signs",
        question:
          "A blue sign beside the road carries white symbols for fuel, food and lodging. Blue signs like this show:",
        choices: [
          "Warnings about the road ahead",
          "Distances to the next city",
          "Regulations you must follow",
          "Services available to motorists",
        ],
        correctIndex: 3,
        explanation:
          "Blue is the motorist-services colour, pointing to fuel, food, lodging and hospitals. Do not confuse it with the blue curb, which is a parking marking reserved for drivers with disabilities.",
        context:
          "Blue appears twice in California with unrelated meanings, which is what makes it worth a question. A blue sign points you to motorist services. A blue curb marks parking reserved for a vehicle displaying a disabled placard or plate. A blue sign at a railroad crossing carries an emergency number to call if a vehicle is stuck on the tracks. Colour alone is not enough here — you also have to notice whether you are looking at a sign, a curb or a crossing.",
        trap: "\"Distances to the next city\" belongs to the GREEN family, and the two get blurred because both usually appear overhead on the same stretch of highway.",
        excerptKey: "sign-colour-blue-services",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s2_29",
        topic: "emergencies",
        question:
          "Your car breaks down on a freeway. After pulling onto the right shoulder, you should:",
        choices: [
          "Open the hood and wait between your car and the traffic lane",
          "Stand in front of the vehicle so you are visible",
          "Get out on the right side, away from traffic, and call for help",
          "Walk along the left shoulder to the nearest exit",
        ],
        correctIndex: 2,
        explanation:
          "The traffic side of a stopped car on a freeway is the most dangerous place you can stand, so you exit on the right and stay clear of it. Call 511 or use a roadside call box, and if you wait in the vehicle, keep your seat belt on.",
        context:
          "The freeway breakdown sequence is: pull as far onto the right shoulder as you can, get out on the right side away from live traffic, and call for help using 511 or a roadside call box. If you wait inside the car, keep the seat belt fastened, because a shoulder is not a safe place to be stationary. During commute hours the CHP Freeway Service Patrol provides free help — fuel, a jump start, a tyre change or a tow to an approved location.",
        trap: "Standing in front of the vehicle to be seen is the instinct, and it puts you exactly where a distracted driver drifting onto the shoulder would strike first.",
        excerptKey: "freeway-disabled",
        sourceLabel: "California Driver's Handbook — Disabled vehicles",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
      {
        id: "ca_s2_30",
        topic: "speed",
        question:
          "You are driving through an alley. Unless posted otherwise, your speed must not exceed:",
        choices: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctIndex: 1,
        explanation:
          "Alleys have no sidewalks, blind doorways and vehicles reversing out of garages, so the limit is 15 mph. It is the same figure that applies at a blind intersection, for the same reason: almost no sight distance.",
        context:
          "The 15 mph group covers alleys, blind intersections, and railroad crossings within 100 feet where you cannot see 400 feet along the track. What links them is that you cannot see far enough to plan, so the law substitutes a speed from which you can stop almost immediately. The separate 10 mph rule applies when passing a bus or streetcar stopped at a safety zone.",
        trap: "10 mph is a genuine California limit, but it belongs to passing a stopped bus or streetcar at a safety zone rather than to alleys.",
        excerptKey: "speed-alley",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s2_31",
        topic: "safety",
        question:
          "You are following a motorcycle. What following distance is recommended?",
        choices: [
          "Two seconds",
          "At least three seconds",
          "Half a car length",
          "One second, since motorcycles are small",
        ],
        correctIndex: 1,
        explanation:
          "Motorcycles can stop faster than you can and may swerve for gravel or a pothole you never notice. Keeping at least three seconds means their sudden move does not turn into your collision.",
        context:
          "Motorcycles need the same three-second minimum as any vehicle, and often more, because a rider can stop in a shorter distance and can change line abruptly for hazards a car simply drives over. They also disappear easily into blind spots, so shoulder-check before every lane change. In California, riders may legally travel between lanes of slower traffic, which means a motorcycle can appear beside you where no car could.",
        trap: "\"One second, since motorcycles are small\" reasons from the size of the vehicle when the relevant fact is its braking ability — a bike can stop shorter than you can.",
        excerptKey: "motorcycle-following-distance",
        sourceLabel: "California Driver's Handbook — Motorcyclists",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s2_32",
        topic: "impairment",
        question:
          "For a driver operating a commercial vehicle, the illegal blood alcohol concentration begins at:",
        choices: ["0.01%", "0.02%", "0.04%", "0.08%"],
        correctIndex: 2,
        explanation:
          "Commercial drivers work to a tighter standard of 0.04% — half the adult limit — because of the size of what they are driving and the hours they spend doing it. The same 0.04% applies when carrying passengers for hire.",
        context:
          "The four California thresholds in order: 0.01% for under-21 drivers and for anyone on DUI probation, 0.04% for commercial drivers and anyone carrying passengers for hire, and 0.08% for drivers aged 21 and over. Note that 0.04% sits between the two extremes, so questions that mention a truck, bus or ride-hire vehicle are usually pointing at that middle figure rather than at zero tolerance.",
        trap: "0.01% is tempting because it feels like commercial drivers should face the strictest rule of all, but zero tolerance is reserved for under-21 drivers and those on DUI probation.",
        excerptKey: "bac-commercial",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s2_33",
        topic: "rules",
        question:
          "You are behind a fire engine that has its siren and flashing lights on. How close may you legally follow?",
        choices: [
          "No closer than 300 feet",
          "There is no set distance",
          "No closer than 100 feet",
          "No closer than 200 feet",
        ],
        correctIndex: 0,
        explanation:
          "Staying 300 feet back keeps you out of the way when the crew brakes suddenly or a driver ahead pulls over without warning. Following close behind an emergency vehicle to slip through traffic is both illegal and a good way to be caught in the collision it is racing to.",
        context:
          "Three distances attach to emergency vehicles in California, and mixing them up is easy. You may not follow within 300 feet of a fire engine, police vehicle or ambulance running its lights or siren. When one approaches, pull to the right and stop until it passes. Where an emergency or road work vehicle is stopped at the roadside with lights flashing, the Move Over law asks you to change lanes if you can and to slow down if you cannot.",
        trap: "\"There is no set distance\" appeals because the rule feels like a matter of judgment, but California names a specific figure and following closer is itself an offence.",
        excerptKey: "emergency-vehicle-300-feet",
        sourceLabel: "California Driver's Handbook — Emergency vehicles",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s2_34",
        topic: "rightOfWay",
        question:
          "You arrive at a T-intersection where your road ends at a through street. What must you do?",
        choices: [
          "Yield only to vehicles coming from your right",
          "Stop only if a stop sign is posted",
          "Proceed first because you arrived first",
          "Yield to traffic on the through street",
        ],
        correctIndex: 3,
        explanation:
          "At a T-intersection, the road that continues carries the priority and the road that ends gives way. That holds even without a sign, because the geometry alone tells both drivers who is passing through and who is joining.",
        context:
          "The T-intersection is one case in California's larger yielding pattern: whoever is joining gives way to whoever is already established. First arrival decides an ordinary uncontrolled intersection, with the vehicle on the right winning a tie. Left turns yield to oncoming traffic. Vehicles leaving a driveway or alley yield to the street and to the sidewalk. And the road that ends at a T yields to the road that runs through.",
        trap: "\"Yield only to vehicles from your right\" imports the four-way tie-breaker into a T-intersection, where the through road has priority from both directions.",
        excerptKey: "row-t-intersection",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s2_35",
        topic: "sharing",
        question:
          "Why is it risky to drive in the area directly behind and to the side of a large truck?",
        choices: [
          "Your vehicle blocks the truck's mirrors from other drivers",
          "The truck's exhaust reduces your engine performance",
          "The truck driver cannot see you in those blind spots",
          "Trucks are legally required to stay in the right lane",
        ],
        correctIndex: 2,
        explanation:
          "A truck's mirrors leave large unseen zones alongside and behind the trailer, and a car sitting in one is invisible when the driver decides to change lanes. If you cannot find the driver's face in their mirror, assume they cannot find you.",
        context:
          "Large vehicles come with three practical hazards. Blind spots run down both sides and directly behind the trailer, and they are far bigger than a car's. Stopping distance is much longer, so cutting in front after passing steals the space the driver needs. And a truck swings away from the direction of a turn before making it, which opens a gap on the turning side that closes again as the trailer sweeps through.",
        trap: "\"Trucks must stay in the right lane\" mixes a lane-use idea into a visibility question, and even where true it would not make sitting in a blind spot any safer.",
        excerptKey: "truck-blind-spots",
        sourceLabel: "California Driver's Handbook — Large vehicles",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "California Medium Set",
    difficulty: "medium",
    description:
      "Forty questions pitched at real DMV difficulty — the exact distances, the multi-step right-of-way calls, and the parking rules California actually tests.",
    questions: [
      {
        id: "ca_s3_01",
        topic: "signs",
        question:
          "A yellow diamond shows a black arrow bending sharply to the right with a suggested speed panel beneath. The number on that panel is:",
        choices: [
          "The legal maximum, enforceable as a speed limit",
          "The advised safe speed for the curve in good conditions",
          "The minimum speed for that stretch",
          "The speed at which the curve is banked",
        ],
        correctIndex: 1,
        explanation:
          "Advisory panels under warning signs recommend a speed for the hazard rather than setting the limit for the road. That said, taking a curve faster than advised can still breach the Basic Speed Law if it is more than the conditions allow.",
        context:
          "Speed information on California roads comes in three flavours. A white regulatory rectangle states the enforceable limit. A yellow advisory panel under a warning sign recommends a speed for a specific hazard such as a curve or ramp. And the Basic Speed Law sits under both, requiring a speed that is safe for the conditions whatever the signs say. The advisory number assumes good weather and a vehicle in good order — in rain or with a trailer, less is appropriate.",
        trap: "Treating the advisory number as the enforceable limit is understandable, but confusing yellow advisory panels with white regulatory signs also leads people to ignore them entirely.",
        excerptKey: "sign-diamond-warning",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s3_02",
        topic: "parking",
        question:
          "You want to park on a downhill grade on a road with no curb at all. The front wheels should point:",
        choices: [
          "Right, toward the edge of the road",
          "Straight ahead, with the brake set",
          "Whichever direction the front of the car faces",
          "Left, toward the centre of the road",
        ],
        correctIndex: 0,
        explanation:
          "With no curb to catch the car, the aim is to send it off the pavement rather than into traffic, so the wheels point right toward the shoulder. That right-hand rule holds facing either uphill or downhill when there is no curb.",
        context:
          "Three hill-parking cases, and the no-curb case is the one people forget. With a curb facing downhill: wheels toward the curb. With a curb facing uphill: wheels away from the curb, then roll back so a tyre rests against it. With no curb, facing either direction: wheels turned right toward the shoulder, because the only thing you can aim a runaway car at is off the road. Parking brake and park or gear apply in all three.",
        trap: "\"Whichever direction the front of the car faces\" is the trap that catches people who learned the curb rules as a pair and never learned the third case — with no curb, the answer is right regardless of which way you point.",
        excerptKey: "hill-no-curb",
        sourceLabel: "California Driver's Handbook — Parking on a hill",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s3_03",
        topic: "rightOfWay",
        question:
          "A school bus with red lights flashing has stopped on the opposite side of a divided highway with two lanes in each direction. You must:",
        choices: [
          "Slow to 15 mph and pass",
          "Stop until the lights stop flashing",
          "Stop only if children are visible in the road",
          "Continue with caution — the divider means you need not stop",
        ],
        correctIndex: 3,
        explanation:
          "On a divided or multilane highway with two or more lanes each way, drivers on the far side are not required to stop, because children are not expected to cross the whole road. On an ordinary undivided street, both directions must stop.",
        context:
          "The school bus rule turns on the road, not on whether you can see children. Flashing amber means the bus is preparing to stop. Flashing red with the stop arm out means traffic must stop in both directions on an ordinary undivided street. The exception applies only where the road is divided, or has two or more lanes in each direction — there, drivers on the opposite side may continue. Penalties for passing a stopped bus illegally run to a substantial fine and a possible year-long suspension.",
        trap: "\"Stop until the lights stop flashing\" is the correct answer on an ordinary street, and applying it everywhere is the safest-feeling choice — but the divided-highway exception is precisely what this question is testing.",
        excerptKey: "school-bus-divided-highway",
        sourceLabel: "California Driver's Handbook — School buses",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s3_04",
        topic: "rules",
        question:
          "You are in a residential district and want to make a U-turn mid-block. This is permitted when:",
        choices: [
          "You signal for at least five seconds first",
          "U-turns are never legal mid-block in a residential district",
          "No vehicle is approaching within 200 feet in either direction",
          "No vehicle is approaching within 100 feet",
        ],
        correctIndex: 2,
        explanation:
          "In a residential district you may turn around mid-block provided nothing is coming within 200 feet either way — the distance an approaching driver needs to react to a car swinging across the road. The rule tightens elsewhere: in a business district, U-turns belong at intersections or divided-highway openings.",
        context:
          "California's U-turn rules vary by setting. In a residential district you may turn mid-block when no vehicle is approaching within 200 feet. In a business district, turn only at an intersection or through an opening in a divided highway. On a divided highway generally, use a provided opening rather than crossing the barrier. U-turns are banned outright in front of a fire station and at railroad crossings, and any NO U-TURN sign overrides everything above.",
        trap: "100 feet is the near-miss figure because it is the signalling distance for turns; the U-turn clearance is double that.",
        excerptKey: "uturn-residential",
        sourceLabel: "California Driver's Handbook — U-turns",
        sourceUrl: `${H}/navigating-the-roads/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s3_05",
        topic: "safety",
        question:
          "Your high beams are on and a car appears coming toward you. You must dim them before you are within:",
        choices: [
          "300 feet",
          "500 feet",
          "1,000 feet",
          "200 feet",
        ],
        correctIndex: 1,
        explanation:
          "Five hundred feet is the point at which your high beams start blinding an oncoming driver rather than helping you. The other figure to remember is 300 feet — that is the distance at which you must dim when coming up behind another vehicle.",
        context:
          "Three headlight distances get tested and they are easy to confuse. Dim within 500 feet of an oncoming vehicle. Dim within 300 feet of a vehicle you are following. And use headlights at all whenever you cannot see clearly for 1,000 feet, as well as from half an hour after sunset to half an hour before sunrise, in tunnels, on mountain roads, and whenever the wipers are running.",
        trap: "300 feet is a real dimming distance, but it is the one for following another vehicle — the oncoming figure is the larger 500 feet.",
        excerptKey: "headlights-dim-distance",
        sourceLabel: "California Driver's Handbook — Headlights",
        sourceUrl: `${H}/introduction-to-driving/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s3_06",
        topic: "signs",
        question:
          "You are driving on a two-lane road and the broken yellow centre line changes to a solid yellow line on your side. From that point:",
        choices: [
          "You may not pass, because sight distance ahead is inadequate",
          "The lane becomes one-way",
          "You must move into the right-hand lane",
          "You may pass if you complete it before the next intersection",
        ],
        correctIndex: 0,
        explanation:
          "The line goes solid where engineers judged that you cannot see far enough ahead to overtake and get back in safely. Passing anyway means committing to the oncoming lane over a crest or curve without knowing what is behind it.",
        context:
          "Read yellow centre lines from your own side. A broken yellow line on your side means you may pass when it is safe. A solid yellow on your side means no passing, though you may still cross it to turn left into a road or driveway. Double solid yellow acts as a barrier crossable only for a left turn or permitted U-turn. Whichever marking applies, the passing manoeuvre also has to be completed before any oncoming vehicle is close enough to matter.",
        trap: "\"Pass if you complete it before the next intersection\" invents a get-out clause; the solid line reflects the sight distance available, and an intersection ahead makes overtaking worse rather than better.",
        excerptKey: "marking-solid-yellow-single",
        sourceLabel: "California Driver's Handbook — Pavement markings",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s3_07",
        topic: "impairment",
        question:
          "Someone is on DUI probation. What blood alcohol concentration makes driving illegal for them, regardless of age?",
        choices: ["0.01%", "0.04%", "0.05%", "0.08%"],
        correctIndex: 0,
        explanation:
          "DUI probation carries the same zero-tolerance figure as an under-21 driver: 0.01%. The point is that anyone already under a DUI order is expected to drive with no alcohol in their system at all.",
        context:
          "Two of California's four thresholds sit at 0.01%: drivers under 21, and drivers of any age on DUI probation. Commercial drivers and those carrying passengers for hire are at 0.04%. Everyone else aged 21 or over is at 0.08%. A question that names a probation condition or an age under 21 is pointing at zero tolerance; a question that names a truck, bus or paying passenger is pointing at 0.04%.",
        trap: "0.08% catches people who read \"regardless of age\" as meaning the ordinary adult limit applies, when the phrase is actually signalling that probation overrides age entirely.",
        excerptKey: "bac-dui-probation",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s3_08",
        topic: "rightOfWay",
        question:
          "Approaching a green light, you see a light rail vehicle about to cross your path on its own tracks. You should:",
        choices: [
          "Proceed only if you can beat it across",
          "Sound your horn and continue slowly",
          "Proceed, because your green light gives you priority",
          "Wait for the light rail vehicle — its signals differ from yours",
        ],
        correctIndex: 3,
        explanation:
          "Light rail runs on its own signal system, so a green for cars does not mean the tracks are clear. A train weighing many tons cannot swerve or stop quickly, which makes a wrong assumption here unusually expensive.",
        context:
          "Light rail vehicles share California streets but operate under separate signals, so your green tells you nothing about theirs. They have the same rights on the road as other vehicles, and you may not pass one on the left except where the tracks run along the right side, on a one-way street, or when directed by an officer. Never stop on the tracks, and treat a light rail crossing with the same caution as a railroad crossing.",
        trap: "\"Your green light gives you priority\" is the natural reading of a green signal, and it is exactly the assumption that puts cars in front of trains at street-running crossings.",
        excerptKey: "signal-green",
        sourceLabel: "California Driver's Handbook — Light rail vehicles",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s3_09",
        topic: "speed",
        question:
          "You are within 100 feet of a railroad crossing and cannot see 400 feet along the track in both directions. Your speed must not exceed:",
        choices: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctIndex: 1,
        explanation:
          "Where the sight lines along the track are short, the limit near the crossing drops to 15 mph so you can stop if a train appears. If you can see 400 feet each way, the normal limit for the road applies instead.",
        context:
          "Two numbers do the work at railroad crossings: 100 feet is the zone in which the reduced limit applies, and 400 feet is the sight distance along the track that decides whether it applies at all. The reduced limit itself is 15 mph, the same as an alley or a blind intersection. Separately, when a train is signalled you stop at least 15 feet from the nearest rail.",
        trap: "10 mph is a genuine California speed rule but belongs to passing a bus or streetcar at a safety zone, not to railroad crossings.",
        excerptKey: "speed-railroad",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s3_10",
        topic: "parking",
        question: "A curb painted yellow is intended for:",
        choices: [
          "Commercial vehicles only, at any hour",
          "Picking up and dropping off passengers only",
          "Loading and unloading passengers or freight, within the posted time",
          "Short-term parking of any kind",
        ],
        correctIndex: 2,
        explanation:
          "Yellow is the loading colour and covers both freight and passengers, unlike white which is passengers only. Any time limit posted on the curb or a nearby sign applies, and the driver is generally expected to stay with the vehicle.",
        context:
          "The five colours again, with the boundaries that matter: red is no stopping at all; yellow is loading of passengers or freight for the posted time; white is passengers or mail only, briefly; green is limited-time parking, which is the only colour where you can genuinely leave the car; blue is for a displayed disabled placard or plate. The yellow-versus-white distinction turns on freight, and the yellow-versus-green distinction turns on whether you can walk away.",
        trap: "\"Picking up and dropping off passengers only\" describes the WHITE curb and is the most common yellow-curb error, because passengers are allowed at both.",
        excerptKey: "curb-yellow",
        sourceLabel: "California Driver's Handbook — Colored curbs",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s3_11",
        topic: "rules",
        question:
          "You are on a freeway and a patrol car has pulled someone over on the right shoulder with its lights flashing. California's Move Over law requires you to:",
        choices: [
          "Stop until the officer waves you through",
          "Move into another lane if you safely can, and otherwise slow down",
          "Reduce your speed to 15 mph but stay in your lane",
          "Switch on your hazard lights and continue at speed",
        ],
        correctIndex: 1,
        explanation:
          "The law asks for a lane of separation where traffic allows it, and a genuine reduction in speed where it does not. It covers not just police but tow trucks and highway maintenance vehicles displaying flashing amber or emergency lights.",
        context:
          "The Move Over law applies to stationary vehicles at the roadside: emergency vehicles, tow trucks and road work vehicles displaying flashing amber or emergency lights. Your obligation is to change lanes away from them where traffic permits, and to slow down where it does not. Keep it separate from two related rules — pulling right and stopping for an approaching emergency vehicle, and never following one within 300 feet while its lights or siren are on.",
        trap: "\"Reduce your speed to 15 mph but stay in your lane\" invents a specific number and drops the lane change, which is the primary thing the law asks for.",
        excerptKey: "move-over-slow-down",
        sourceLabel: "California Driver's Handbook — Move Over law",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s3_12",
        topic: "safety",
        question:
          "A front tyre blows out at highway speed. The first thing you should do is:",
        choices: [
          "Grip the wheel firmly with both hands and ease off the accelerator",
          "Accelerate briefly to straighten the car",
          "Pull the parking brake to slow the car evenly",
          "Brake hard and steer to the shoulder",
        ],
        correctIndex: 0,
        explanation:
          "A blowout drags the car toward the failed tyre, and hard braking makes the pull worse just when you have least grip. Holding the wheel and letting the speed fall gradually keeps the car straight until you can steer off the road.",
        context:
          "Emergency handling in California follows one principle: no sudden inputs while traction is compromised. Blowout — both hands on the wheel, hold your line, ease off the gas, slow gradually, then pull off. Wheels onto a soft shoulder — hold straight, ease off, brake gently, then steer back once slowed. Hydroplaning — lift off the accelerator without braking. In each case you are steadying the car while speed comes off, rather than fighting it.",
        trap: "Braking hard is the reflex, and on a blown front tyre it amplifies the pull to one side at the exact moment you have least control.",
        excerptKey: "tire-blowout",
        sourceLabel: "California Driver's Handbook — Emergencies",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
      {
        id: "ca_s3_13",
        topic: "signs",
        question:
          "A brown sign with white lettering directs you toward a state park. Brown signs mark:",
        choices: [
          "Emergency detour routes",
          "Areas closed to through traffic",
          "Historic routes only",
          "Recreational and cultural points of interest",
        ],
        correctIndex: 3,
        explanation:
          "Brown is used for parks, campgrounds, museums and similar destinations. Sorting signs by colour is faster than reading them: green for direction, blue for services, brown for recreation, orange for work zones.",
        context:
          "The full colour set: red for stop, yield and prohibition; white with black text for regulations; yellow for permanent road warnings; orange for temporary work zones; green for guidance and distances; blue for motorist services; brown for recreational and cultural destinations. Colour narrows almost any sign question before you have read a word, which matters when the sign in the question is one you have never seen.",
        trap: "\"Historic routes only\" is too narrow — brown does cover historic sites, but restricting it to those misses parks, campgrounds and recreation areas.",
        excerptKey: "sign-colour-brown-recreation",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s3_14",
        topic: "rightOfWay",
        question:
          "Two vehicles reach an uncontrolled intersection — no signs, no signals. One arrives clearly before the other. Who has the right-of-way?",
        choices: [
          "The vehicle travelling faster, to keep traffic moving",
          "The vehicle turning left",
          "The vehicle that arrived first",
          "The vehicle on the wider road",
        ],
        correctIndex: 2,
        explanation:
          "Order of arrival settles it when one driver is plainly there first. The right-hand tie-breaker only comes into play when arrival is simultaneous and there is nothing else to separate the two.",
        context:
          "At an uncontrolled intersection the sequence is: first to arrive goes first; if arrival is simultaneous, the vehicle on the right goes; a driver turning left yields to oncoming traffic going straight; and anyone entering from a driveway, alley or private road yields to everything on the street. Nothing in the sequence depends on the size of the road, the size of the vehicle or the speed anyone is travelling.",
        trap: "\"The vehicle on the wider road\" imports an intuition from major-versus-minor road layouts, but at a genuinely uncontrolled intersection road width confers no priority.",
        excerptKey: "row-first-arrival",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s3_15",
        topic: "rules",
        question:
          "A U-turn is specifically prohibited in which of these locations?",
        choices: [
          "At an intersection on a green light where no sign forbids it",
          "In front of a fire station",
          "Through an opening in a divided highway's centre barrier",
          "In a residential district with no traffic within 200 feet",
        ],
        correctIndex: 1,
        explanation:
          "You may never turn around in front of a fire station, because the apparatus needs an unobstructed exit at any moment. Railroad crossings are similarly off limits, and so are business districts except at intersections or divided-highway openings.",
        context:
          "Where U-turns are allowed: at an intersection on a green light with no prohibiting sign, through a provided opening in a divided highway, and mid-block in a residential district when nothing is approaching within 200 feet. Where they are banned outright: in front of a fire station, at a railroad crossing, and anywhere a NO U-TURN sign is posted. In a business district they are restricted to intersections and divided-highway openings.",
        trap: "The divided-highway opening looks like the illegal one because crossing a divided highway feels drastic, but a provided opening is exactly where the law intends you to turn.",
        excerptKey: "uturn-prohibited",
        sourceLabel: "California Driver's Handbook — U-turns",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s3_16",
        topic: "parking",
        question:
          "How close to a marked crosswalk may you legally park, where no curb extension exists?",
        choices: [
          "No closer than 20 feet",
          "You may park right up to the crosswalk line",
          "No closer than 10 feet",
          "No closer than 15 feet",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet of clear space keeps a parked car from hiding a pedestrian who is about to step off the curb. Where a curb extension has already pushed the crossing point out into the road, the required distance is 15 feet.",
        context:
          "Two parking distances get tested constantly and they sit close together. Twenty feet from a crosswalk, marked or unmarked, dropping to 15 feet where a curb extension has already improved sight lines. Fifteen feet from a fire hydrant or a fire station driveway. Beyond distances, you may not park on a sidewalk or crosswalk, across a driveway, alongside another parked vehicle, on the wrong side of the street, or in the striped access aisle beside a disabled space.",
        trap: "15 feet is the fire hydrant figure and the curb-extension figure, which makes it the most natural wrong answer to a plain crosswalk question.",
        excerptKey: "parking-crosswalk",
        sourceLabel: "California Driver's Handbook — Parking",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
        commonlyMissed: true,
      },
      {
        id: "ca_s3_17",
        topic: "speed",
        question:
          "You are driving on packed snow in the Sierra. The handbook suggests reducing your speed by roughly:",
        choices: [
          "A quarter",
          "5 mph",
          "10 mph",
          "Half",
        ],
        correctIndex: 3,
        explanation:
          "Packed snow cuts available grip so severely that halving your speed is the recommended adjustment. Wet asphalt calls for 5 to 10 mph less, and genuine ice means crawling at no more than about 5 mph.",
        context:
          "The weather ladder, from mildest to worst: wet road, take 5 to 10 mph off; visibility under 100 feet in heavy rain or snow, no faster than 30 mph; packed snow, halve your speed; ice, about 5 mph. Each of these is an application of the Basic Speed Law rather than a separate posted limit, which means driving faster than the conditions allow is an offence even under the posted number.",
        trap: "\"5 mph\" is a real figure in this ladder, but it belongs to sheet ice — on packed snow the adjustment is proportional, not a fixed subtraction.",
        excerptKey: "speed-packed-snow",
        sourceLabel: "California Driver's Handbook — Driving in bad weather",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s3_18",
        topic: "signs",
        question:
          "A red circle with a white horizontal bar and the words DO NOT ENTER faces you at a ramp. It tells you:",
        choices: [
          "The ramp is closed for maintenance",
          "Only authorised vehicles may use this ramp",
          "Traffic on this ramp flows toward you — do not proceed",
          "You must stop before entering",
        ],
        correctIndex: 2,
        explanation:
          "DO NOT ENTER is posted where entering would put you against the flow, typically at an exit ramp or the wrong end of a one-way street. If you see one, find another way round rather than risking a head-on encounter.",
        context:
          "DO NOT ENTER and WRONG WAY are a matched pair guarding one-way roads and freeway ramps. DO NOT ENTER faces you at the entrance, before you have committed. WRONG WAY appears further along and only becomes visible once you have already entered against the flow. Both are red and white regulatory signs, and both require you to stop and reverse the mistake rather than continuing to look for somewhere to turn.",
        trap: "\"Only authorised vehicles may use this ramp\" reads it as a restriction rather than a prohibition, which would leave a driver looking for an exemption that does not exist.",
        excerptKey: "sign-wrong-way",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s3_19",
        topic: "impairment",
        question:
          "After a DUI arrest, how long do you have to request a hearing with the DMV about your driving privilege?",
        choices: [
          "5 days",
          "10 days",
          "30 days",
          "60 days",
        ],
        correctIndex: 1,
        explanation:
          "The window is ten days from the date of arrest, and missing it means the suspension proceeds without your side being heard. The temporary licence an officer issues usually runs 30 days, which is why people confuse the two figures.",
        context:
          "The DMV side of a DUI runs on its own clock, separate from the criminal court case. The officer may take your licence and issue a temporary one valid for about 30 days. You have 10 days from arrest to request a DMV hearing. Refusing a chemical test triggers its own suspension or revocation of about a year under implied consent. A conviction adds a mandatory DUI programme, an insurance proof filing, and reissue fees, and stays on your record for 10 years.",
        trap: "30 days is the length of the temporary licence, which sits right next to the hearing deadline in the same paperwork and gets picked for exactly that reason.",
        excerptKey: "dui-hearing-10-days",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s3_20",
        topic: "rightOfWay",
        question:
          "You are already in a roundabout and another driver at an entry begins to edge forward. You should:",
        choices: [
          "Continue — circulating traffic has the right-of-way",
          "Signal left to warn them off",
          "Speed up to clear the entry point",
          "Stop inside the roundabout to let them in",
        ],
        correctIndex: 0,
        explanation:
          "Stopping inside a roundabout for entering traffic is how they seize up and how rear-end collisions happen behind you. Keep moving, and signal only when you are about to leave.",
        context:
          "Roundabout priority runs one way: circulating traffic goes, entering traffic yields. Once inside, you keep moving counter-clockwise and do not stop for someone waiting at an entry. Choose your lane on approach by where you are heading, signal before your exit, and if you overshoot it, continue round rather than cutting across. Pedestrians on the crosswalks at each entry and exit still have priority.",
        trap: "Stopping to let someone in feels generous, but it reverses the rule the whole junction depends on and puts you at risk from the driver behind.",
        excerptKey: "roundabout-yield",
        sourceLabel: "California Driver's Handbook — Roundabouts",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s3_21",
        topic: "rules",
        question:
          "You are turning left onto a road with two lanes going your direction. You should complete the turn into:",
        choices: [
          "The far right lane, to leave room for others",
          "The lane your passenger side ends up in",
          "Either lane, whichever is clearer",
          "The lane nearest the centre line, then change lanes if needed",
        ],
        correctIndex: 3,
        explanation:
          "Turning into the nearest legal lane keeps your path predictable and stops you cutting across a driver making the same turn from the opposite direction. Once you are established and have checked, you can move over.",
        context:
          "Turns in California finish in the nearest lane going your direction. Left turn: start from the lane nearest the centre divider or from a left-turn lane, and finish in the lane nearest the centre line of the new road. Right turn: start close to the right edge and finish in the lane nearest the right curb. Change lanes afterwards as a separate, signalled manoeuvre once you are established and have checked your mirrors and blind spot.",
        trap: "\"Either lane, whichever is clearer\" is how many people drive, and it is what causes collisions when two drivers turn left from opposite directions at the same time.",
        excerptKey: "turn-left-complete",
        sourceLabel: "California Driver's Handbook — Turns",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s3_22",
        topic: "safety",
        question:
          "You are stopped in traffic behind another vehicle. How much space in front is generally recommended?",
        choices: [
          "About half a car length",
          "As little as possible, to discourage cutting in",
          "Enough to see where its rear tyres meet the road",
          "Enough for a pedestrian to walk between",
        ],
        correctIndex: 2,
        explanation:
          "Being able to see the contact patch of the tyres ahead means you have enough room to pull out if that vehicle stalls, and enough cushion if you are struck from behind. Tucking in tight buys nothing and removes every option.",
        context:
          "Space management does not stop when you do. Stopped in traffic, leave enough room to see where the tyres of the car ahead touch the road, so you can steer around it if it fails to move and you are not pushed into it if you are hit from behind. If you are waiting to turn left, keep your front wheels straight for the same reason. Moving again, the three-second rule takes over, with more added for rain, night or a large vehicle ahead.",
        trap: "\"As little as possible, to discourage cutting in\" trades a real safety margin for a minor convenience, and leaves you nowhere to go if the car ahead stalls.",
        excerptKey: "stopping-behind-vehicle",
        sourceLabel: "California Driver's Handbook — Safe driving",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s3_23",
        topic: "signs",
        question:
          "Which of these sign shapes is used for one message and one message only?",
        choices: [
          "The rectangle",
          "The octagon",
          "The circle",
          "The diamond",
        ],
        correctIndex: 1,
        explanation:
          "The eight-sided shape is reserved for STOP, which is why you can identify it in fog or from the back where the lettering is not visible. Diamonds cover many warnings and rectangles cover many regulations.",
        context:
          "Shape does real work in California's sign system. The octagon means stop and nothing else. The downward triangle means yield and nothing else. Five sides means a school. The circle warns of a railroad crossing ahead. Diamonds cover the whole warning family, and rectangles cover regulations and guidance, so those two shapes tell you the category rather than the specific message.",
        trap: "The circle feels like a single-purpose shape because it has one warning meaning, but circles also appear in regulatory signs with a slash for prohibitions.",
        excerptKey: "sign-stop",
        sourceLabel: "California Driver's Handbook — Traffic signs",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s3_24",
        topic: "parking",
        question:
          "A green-painted curb outside a row of shops indicates that you may:",
        choices: [
          "Park for a limited time, as posted",
          "Stop only to let passengers out",
          "Park overnight without restriction",
          "Park only if you are making a delivery",
        ],
        correctIndex: 0,
        explanation:
          "Green means time-limited parking, with the limit shown on a sign or painted on the curb itself. It is the one colour that lets you actually leave the vehicle and walk away, so long as you return before the clock runs out.",
        context:
          "Across the five colours, green is the only one that permits genuine parking with the driver away from the vehicle. Red permits nothing. Yellow permits loading of passengers or freight, with the driver normally staying with the vehicle. White permits a brief passenger or mail stop. Blue permits parking but only with a disabled placard or plate. Green permits parking for whatever period is posted.",
        trap: "\"Stop only to let passengers out\" is the WHITE curb, and it gets chosen because both colours permit a short legal stop.",
        excerptKey: "curb-green",
        sourceLabel: "California Driver's Handbook — Colored curbs",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s3_25",
        topic: "rightOfWay",
        question:
          "Traffic is stopped in the lane beside you at a crosswalk, though you cannot see why. The correct action is to:",
        choices: [
          "Sound your horn and continue",
          "Change lanes and continue behind the stopped vehicle",
          "Pass carefully in your lane at reduced speed",
          "Stop as well — a pedestrian may be crossing where you cannot see",
        ],
        correctIndex: 3,
        explanation:
          "A stopped vehicle at a crosswalk is a screen, and passing it means arriving at the crossing blind at the exact moment someone is in it. Never overtake a vehicle stopped at a crosswalk — assume it stopped for a reason.",
        context:
          "Pedestrian rules in California are built around visibility as much as priority. You yield at marked and unmarked crosswalks, you stop behind the limit line rather than in the crossing, you give extra time to older pedestrians, children and people with disabilities, and you never pass a vehicle that has stopped at a crosswalk. The last rule exists because the stopped vehicle hides exactly the person you would hit.",
        trap: "\"Pass carefully at reduced speed\" sounds like a reasonable compromise, but reduced speed does not help when the pedestrian only becomes visible as you reach them.",
        excerptKey: "crosswalk-no-passing",
        sourceLabel: "California Driver's Handbook — Pedestrians",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s3_26",
        topic: "speed",
        question:
          "You are passing an intersection where a streetcar has stopped at a safety zone to let passengers off. Your speed must not exceed:",
        choices: ["5 mph", "10 mph", "15 mph", "20 mph"],
        correctIndex: 1,
        explanation:
          "Ten miles per hour is the ceiling when you pass a stopped bus or streetcar at a safety zone, because people are stepping out into the roadway. You may not drive through the safety zone itself under any circumstances.",
        context:
          "A safety zone is the marked area in the roadway where transit passengers wait or board, and it is protected by two rules: you may not drive through it at all, and you may not exceed 10 mph passing a bus or streetcar stopped at one. Ten is the odd figure among California's low limits — 15 mph covers alleys, blind intersections and poor-sight railroad crossings, and 25 mph covers business, residential and school areas.",
        trap: "15 mph is the low limit people remember best because it covers three separate situations, which makes it the automatic answer to any \"low speed\" question.",
        excerptKey: "speed-safety-zone",
        sourceLabel: "California Driver's Handbook — Speed limits",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s3_27",
        topic: "speed",
        question:
          "A posted limit of 65 mph applies on a freeway, but fog has reduced visibility badly. Driving at 65 mph would be:",
        choices: [
          "Legal if you stay in the right lane",
          "Legal, since it matches the posted limit",
          "Illegal, because it is unsafe for the conditions",
          "Legal only if you use your hazard lights",
        ],
        correctIndex: 2,
        explanation:
          "The Basic Speed Law makes conditions part of the limit, so the sign is a maximum and not a permission slip. In fog, you can be cited for the posted speed if it is more than the visibility allows.",
        context:
          "The Basic Speed Law is the rule that makes every other speed rule conditional. It takes account of weather, visibility, traffic volume, road surface and the presence of people on foot or on bicycles. In fog specifically, use low beams rather than high beams, since high beams reflect off the fog and reduce what you can see, and if visibility drops under 100 feet the practical ceiling is 30 mph regardless of the sign.",
        trap: "\"Legal, since it matches the posted limit\" treats the sign as authorisation, which is the exact misunderstanding the Basic Speed Law exists to correct.",
        excerptKey: "basic-speed-law",
        sourceLabel: "California Driver's Handbook — Basic Speed Law",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
      {
        id: "ca_s3_28",
        topic: "safety",
        question:
          "Before opening your door into the roadway after parallel parking, you should:",
        choices: [
          "Open it quickly so you spend less time exposed",
          "Check mirrors and look back for traffic and cyclists",
          "Rely on other drivers seeing your brake lights",
          "Open it only from the passenger side",
        ],
        correctIndex: 1,
        explanation:
          "A door swung into a bike lane is one of the most common ways cyclists are seriously hurt in Californian cities. Mirrors plus a glance over the shoulder takes a second and covers the blind spot a mirror leaves.",
        context:
          "The shoulder check is required in more situations than most drivers realise: before changing lanes, before merging, before turning where a cyclist could be alongside, before backing up, and before opening a door into the roadway. Mirrors alone always leave a blind spot large enough to hide a bicycle or motorcycle, and a door opening is the one case where the person you cannot see has no time at all to react.",
        trap: "\"Open it quickly so you spend less time exposed\" optimises for the wrong risk — the danger is the door swinging into a cyclist's path, not how long you stand there.",
        excerptKey: "exit-vehicle-check",
        sourceLabel: "California Driver's Handbook — Safe driving",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s3_29",
        topic: "signs",
        question:
          "You approach an intersection where the traffic signal is completely dark because of a power cut. You should treat it as:",
        choices: [
          "A four-way stop",
          "An uncontrolled intersection where nobody has priority",
          "A yield for all directions",
          "A green light in the direction of the wider road",
        ],
        correctIndex: 0,
        explanation:
          "A dead signal is handled as a stop sign in every direction, which gives all drivers the same clear rule instead of each guessing. Stop, then proceed in turn using the normal first-arrival and right-hand tie-breakers.",
        context:
          "Malfunctioning and flashing signals each have a defined meaning so drivers do not have to improvise. A completely dark signal is treated as a four-way stop. A flashing red is treated as a stop sign for that approach. A flashing yellow means slow down and proceed with caution. Once stopped, the ordinary priority rules take over: first to arrive goes first, and the vehicle on the right wins a tie.",
        trap: "\"An uncontrolled intersection where nobody has priority\" is the reasonable-sounding inference from a dead signal, but it would have drivers rolling through without stopping at all.",
        excerptKey: "signal-not-working",
        sourceLabel: "California Driver's Handbook — Traffic signals",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s3_30",
        topic: "impairment",
        question:
          "Which statement about driving after using cannabis in California is correct?",
        choices: [
          "It is legal if you are the only occupant",
          "It only becomes illegal above a fixed measured level",
          "It is legal as long as the cannabis was bought legally",
          "It is illegal to drive while impaired by cannabis, and open containers may not be in the passenger area",
        ],
        correctIndex: 3,
        explanation:
          "Legal to buy is not the same as legal to drive on. Impairment by cannabis is treated as DUI, and an opened container has to be stowed out of the passenger area exactly as alcohol does.",
        context:
          "California treats cannabis much as it treats alcohol behind the wheel. Driving while impaired is a DUI regardless of whether the product was legally purchased or medically recommended. Open containers must be sealed or kept in the trunk or a cargo area, and not in the glove compartment or passenger area. Prescription and over-the-counter medicines follow the same logic — if a drug affects your driving, driving on it is an offence.",
        trap: "\"Only illegal above a fixed measured level\" imports the blood alcohol model, but cannabis impairment is judged on driving behaviour and observation rather than a single threshold number.",
        sourceLabel: "California Driver's Handbook — Alcohol and drugs",
        sourceUrl: `${H}/alcohol-and-drugs/`,
      },
      {
        id: "ca_s3_31",
        topic: "rules",
        question:
          "A carpool lane is marked with a diamond symbol and a sign stating the hours it operates. Outside those posted hours:",
        choices: [
          "Only motorcycles and buses may use it",
          "Only vehicles with two or more occupants may use it",
          "Any vehicle may use it, unless signs say otherwise",
          "The lane is closed to all traffic",
        ],
        correctIndex: 2,
        explanation:
          "Many California carpool lanes only carry the occupancy requirement during posted commute hours and revert to normal lanes the rest of the time. Some run around the clock, so the sign at the entry is what decides it.",
        context:
          "An HOV or carpool lane is marked with a white diamond on the pavement and signs stating who may use it and when. Eligibility usually means a minimum number of occupants, but motorcycles and clean-air vehicles with a valid decal also qualify. Where the lane is bounded by double solid white lines, enter and leave only at the designated broken-line openings — that restriction applies whether or not you are eligible to be in the lane.",
        trap: "\"Only vehicles with two or more occupants\" applies the peak-hour rule around the clock and ignores the posted hours the question specifically mentions.",
        excerptKey: "hov-lane-diamond",
        sourceLabel: "California Driver's Handbook — HOV lanes",
        sourceUrl: `${H}/navigating-the-roads/`,
      },
      {
        id: "ca_s3_32",
        topic: "rightOfWay",
        question:
          "You are turning right on a red light. A pedestrian steps into the crosswalk you are about to cross. You should:",
        choices: [
          "Complete the turn quickly ahead of them",
          "Wait until they have finished crossing",
          "Turn behind them without stopping",
          "Proceed if they are still on the far half of the crossing",
        ],
        correctIndex: 1,
        explanation:
          "The right on red is conditional, and one of the conditions is that you yield to anyone in the crosswalk. Rolling around behind a pedestrian removes their margin for error and is exactly what the rule is written to stop.",
        context:
          "A right turn on red requires three things: no sign prohibiting it, a complete stop at the limit line, and yielding to pedestrians and cross traffic. The permission is conditional throughout — if any condition fails, the red light simply means stop and wait. The same structure applies to a left turn from one one-way street onto another, and a red arrow removes the permission entirely.",
        trap: "\"Proceed if they are still on the far half\" applies a rule that exists in some jurisdictions but not as a licence to squeeze past — California asks you to let them finish.",
        excerptKey: "turn-right-on-red",
        sourceLabel: "California Driver's Handbook — Pedestrians",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s3_33",
        topic: "parking",
        question:
          "Which of these is a legal place to leave your parked vehicle in California?",
        choices: [
          "In a marked space beside a green curb, within the posted time",
          "In the crosshatched area next to a disabled parking space",
          "Partly across a private driveway, if only for a moment",
          "Alongside another parked car, with hazard lights on",
        ],
        correctIndex: 0,
        explanation:
          "Green curbs allow limited-time parking, so that is the only option here that is legal. The hatched stripes beside a disabled space are the access aisle for a wheelchair lift, and double parking blocks a lane no matter how brief you intend it to be.",
        context:
          "California's list of places you may not park is long and worth knowing as a group: on a sidewalk or crosswalk, within 20 feet of a crosswalk or 15 feet of a fire hydrant or fire station driveway, blocking a driveway, double parked beside another vehicle, on the wrong side of the street, in a bike lane where parking is not permitted, and in the striped access aisle next to a disabled space. Hazard lights do not create an exemption to any of them.",
        trap: "\"Alongside another parked car, with hazard lights on\" is everyday behaviour in Californian cities, and the hazard lights make it feel sanctioned when double parking remains illegal.",
        excerptKey: "parking-sidewalk-driveway",
        sourceLabel: "California Driver's Handbook — Parking",
        sourceUrl: `${H}/navigating-the-roads-cont1/`,
      },
      {
        id: "ca_s3_34",
        topic: "safety",
        question:
          "Your right wheels drift off the pavement onto a soft shoulder at speed. You should:",
        choices: [
          "Accelerate to climb back onto the surface",
          "Steer back onto the pavement immediately",
          "Brake hard and stop on the shoulder",
          "Hold the wheel firmly, ease off the gas, then steer back gently when slowed",
        ],
        correctIndex: 3,
        explanation:
          "Yanking the wheel while one side is on loose material is what flips cars or sends them across the centre line. Straighten out, shed speed, check the traffic, and rejoin the pavement with a gentle steering input.",
        context:
          "Running off the pavement is one of California's named emergencies and follows the same pattern as a blowout or a hydroplane: hold the wheel firmly, take your foot off the accelerator, brake gently if at all, and only make a steering correction once the speed has come down. The height difference between the shoulder and the pavement is what catches a tyre and flips a car when someone yanks the wheel at speed.",
        trap: "Steering back immediately is the instinctive correction, and at speed it is the one that catches the tyre on the pavement edge and throws the car across the road.",
        excerptKey: "off-pavement",
        sourceLabel: "California Driver's Handbook — Emergencies",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
      {
        id: "ca_s3_35",
        topic: "signs",
        question:
          "A red arrow displayed for your lane at a signalised intersection means:",
        choices: [
          "The turn may be made only from the adjacent lane",
          "You may make the turn after yielding",
          "You must stop and may not make that turn until the arrow changes",
          "The turn is protected and you may proceed",
        ],
        correctIndex: 2,
        explanation:
          "A red arrow is a flat prohibition on that movement, unlike a solid red where a right turn may still be allowed after stopping. Wait for a green arrow or a green signal before making the turn.",
        context:
          "Arrows and solid signals are not interchangeable. A green arrow is a protected movement — conflicting traffic is being held. A red arrow forbids the movement outright, with no turn-on-red permission attached. A solid red allows a right turn after stopping, and a left from one one-way street onto another, unless a sign prohibits it. A yellow arrow warns that the protected phase is ending.",
        trap: "\"You may make the turn after yielding\" imports the solid-red permission into a red arrow, and it is the single most common error with arrow signals.",
        excerptKey: "signal-red-arrow",
        sourceLabel: "California Driver's Handbook — Traffic signals",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s3_36",
        topic: "sharing",
        question:
          "A cyclist ahead of you is riding in the middle of a narrow traffic lane rather than by the curb. This is:",
        choices: [
          "Illegal — cyclists must always stay as far right as possible",
          "Permitted, because the lane is too narrow to share safely",
          "Permitted only on roads under 25 mph",
          "Illegal unless the cyclist is turning left",
        ],
        correctIndex: 1,
        explanation:
          "When a lane is too narrow for a car and a bike to sit side by side with three feet between them, a rider is entitled to take the lane. Hugging the curb there would invite drivers to squeeze past in the same lane, which is the dangerous outcome.",
        context:
          "Cyclists have the same right to the roadway as drivers, with a few specific rules layered on. They may take a full lane where it is too narrow to share, when preparing to turn left, or to avoid hazards such as drain grates and opening doors. For your part: leave at least three feet when passing, change lanes to pass whenever possible, wait rather than squeeze when three feet is not available, and stay out of the bike lane except to park, to enter or leave the road, or within 200 feet of a right turn.",
        trap: "\"Cyclists must always stay as far right as possible\" is a half-remembered version of a real rule that comes with several exceptions, and this narrow-lane case is one of them.",
        excerptKey: "bicycle-3-feet",
        sourceLabel: "California Driver's Handbook — Bicyclists",
        sourceUrl: `${H}/laws-and-rules-of-the-road-cont1/`,
      },
      {
        id: "ca_s3_37",
        topic: "rules",
        question:
          "You are stopped at a red light on a one-way street, intending to turn left onto another one-way street where traffic runs left. Unless a sign forbids it, this turn is:",
        choices: [
          "Permitted after a complete stop and yielding, like a right on red",
          "Permitted only between 9 p.m. and 6 a.m.",
          "Permitted only if a green arrow appears first",
          "Never permitted on a red light",
        ],
        correctIndex: 0,
        explanation:
          "A left turn from one one-way street onto another one-way street is treated like a right on red: stop first, yield to pedestrians and traffic, then go when clear. A posted NO TURN ON RED sign overrides it.",
        context:
          "California allows two turns on a red light, both under the same conditions. A right turn on red from any street, and a left turn on red from a one-way street onto another one-way street where traffic flows in the direction you are turning. Both require a full stop at the limit line, yielding to pedestrians and cross traffic, and the absence of a NO TURN ON RED sign. Neither is available against a red arrow.",
        trap: "\"Never permitted on a red light\" is the cautious answer and the one most drivers assume, because the one-way-to-one-way left is far less well known than the right on red.",
        excerptKey: "turn-left-on-red-one-way",
        sourceLabel: "California Driver's Handbook — Traffic signals",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
      {
        id: "ca_s3_38",
        topic: "emergencies",
        question:
          "Your vehicle stalls on railroad tracks and a train is approaching. You should:",
        choices: [
          "Get out and run alongside the tracks away from the train",
          "Stay in the vehicle and brace for impact",
          "Try to restart the engine until the last moment",
          "Get out immediately and run away from the tracks toward the oncoming train, off to the side",
        ],
        correctIndex: 3,
        explanation:
          "Moving diagonally toward the train but away from the rails keeps you clear of debris, which is thrown forward along the direction of travel. Running the same way the train is heading puts you in the path of everything the collision sends flying.",
        context:
          "There are two versions of the stalled-on-the-tracks situation. If a train is coming, abandon the vehicle immediately and move away from the tracks at an angle toward the approaching train, then call 911 from a safe distance. If no train is coming, get out, find the blue emergency sign at the crossing, call the number on it and quote the crossing identifier, then call 911. Never attempt to restart or push the vehicle while a train is approaching.",
        trap: "Running away from the train alongside the tracks feels like the obvious escape direction, and it puts you exactly where the wreckage is thrown when the train strikes the car.",
        excerptKey: "railroad-stalled-train-coming",
        sourceLabel: "California Driver's Handbook — Railroad emergencies",
        sourceUrl: `${H}/safe-driving-cont2/`,
      },
      {
        id: "ca_s3_39",
        topic: "safety",
        question:
          "Which of these best describes how far ahead you should be looking while driving?",
        choices: [
          "To the vehicle immediately in front of you",
          "About two seconds ahead",
          "About ten seconds ahead, with your eyes constantly moving",
          "To the end of your headlight beam only",
        ],
        correctIndex: 2,
        explanation:
          "Scanning roughly ten seconds up the road turns hazards into things you plan for rather than react to. The moving part matters as much as the distance — a fixed stare stops registering movement at the edges of your vision.",
        context:
          "Two different numbers describe two different habits, and mixing them up is common. Following distance is three seconds — the gap between you and the car ahead. Scanning distance is about ten seconds — how far up the road your eyes are working. Add mirror checks every few seconds and a shoulder check before each lane change, and you have the full visual routine the handbook describes.",
        trap: "Two seconds is the answer for a following-distance question, and it gets pulled into scanning questions because both are measured in seconds.",
        excerptKey: "scan-10-seconds",
        sourceLabel: "California Driver's Handbook — Scanning",
        sourceUrl: `${H}/safe-driving/`,
      },
      {
        id: "ca_s3_40",
        topic: "rightOfWay",
        question:
          "You have stopped at a stop sign and are ready to pull out, but your view of the cross street is blocked by a parked delivery van. You should:",
        choices: [
          "Sound your horn and proceed",
          "Edge forward gradually until you can see, then go when clear",
          "Reverse and take a different route",
          "Pull out slowly and rely on cross traffic seeing you",
        ],
        correctIndex: 1,
        explanation:
          "Creeping forward buys you sight lines a step at a time without committing the whole car to the intersection. Stopping at the sign is only half the job; the second stop, where you can actually see, is the one that keeps you out of a collision.",
        context:
          "A stop sign asks for a stop at the limit line, but the legal stop and the useful stop are often in different places. Where a parked vehicle, hedge or building blocks your view, stop at the line as required and then edge forward until you have a genuine view of the cross street before committing. A blind intersection also carries its own 15 mph limit for traffic approaching it on the cross street.",
        trap: "\"Pull out slowly and rely on cross traffic seeing you\" transfers the responsibility to drivers who have the right-of-way and may not see you until your bumper is in their lane.",
        excerptKey: "speed-blind-intersection",
        sourceLabel: "California Driver's Handbook — Right-of-way rules",
        sourceUrl: `${H}/laws-and-rules-of-the-road/`,
      },
    ],
  },
];
