// British Columbia practice sets 4-6.
//
// Same sourcing discipline as sets 1-3: every fact checked against ICBC's
// "Learn to drive smart", ICBC's Get your L / Get your N / Graduated licensing
// pages and its knowledge test tip sheet, with the Motor Vehicle Act (RSBC 1996
// c.318, Part 3) on bclaws.gov.bc.ca cited where the guide is silent or gives a
// rule only as a sign caption.
//
// Set 6 concentrates the Graduated Licensing Program items on purpose. B.C.'s
// GLP is being restructured effective 19 October 2026 - the second road test
// is replaced by a driving-record assessment, the novice stage falls to 12
// months for applicants 25 and over, the learner stage falls to 9 months for
// them, and the minimum application age rises to 18. Everything here is
// written to the rules in force today, and keeping the GLP items together in
// one block makes the October revision a contained edit rather than a hunt.

import type { DrivingTestSet } from "../types";

const GUIDE = "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart";
const GET_L = "https://www.icbc.com/driver-licensing/new-drivers/Get-your-L";
const GET_N = "https://www.icbc.com/driver-licensing/new-drivers/Get-your-N";
const GLP = "https://www.icbc.com/driver-licensing/new-drivers/Graduated-licensing";
const TIPSHEET = "https://www.icbc.com/assets/en/4zwylo9j9OaOX2I7Q8Epat/knowledge-test-tip-sheet.pdf";
const mva = (section: string) =>
  `https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section${section}`;

export const britishcolumbiaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Set 4 · Conditions and Consequences",
    difficulty: "medium",
    description:
      "Thirty-five questions on the parts of B.C. driving that change with the weather, the light and the load: mountain roads, winter traction, night visibility, and the penalties waiting at the end of a bad decision.",
    questions: [
      {
        id: "bc_s4_01",
        topic: "safety",
        question: "How much braking distance can ice demand compared with a dry road?",
        choices: ["About twice as much", "Up to ten times as much", "About three times as much", "About five times as much"],
        correctIndex: 1,
        explanation:
          "Up to ten times the normal braking distance on ice. That is why B.C. tells you to test your braking gently at very low speed before committing to a winter drive.",
        context:
          "Wet roads roughly double the braking distance; ice can multiply it tenfold. Temperatures near freezing are more dangerous than deep cold, because ice forms unpredictably and often invisibly. Black ice gives itself away only by making the asphalt look shiny and black instead of grey-white. Shaded stretches stay icy after the sun has cleared the rest, bridges and overpasses freeze before ordinary road surfaces, and intersections ice up quickly from exhaust and packed snow.",
        trap:
          "Cruise control is the thing to switch off, not on. B.C. says never use it in wet or slippery conditions - your owner's manual will say the same.",
        excerptKey: "ice-ten-times",
        sourceLabel: "Learn to drive smart - Chapter 8, ice and snow",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_02",
        topic: "signs",
        question: "You see a black-and-white sign reading KEEP RIGHT UNLESS PASSING. What kind of sign is it?",
        choices: [
          "A regulatory sign - disregarding it is an offence under the Motor Vehicle Act",
          "A warning sign about the road ahead",
          "An advisory sign with no legal force",
          "A construction sign that applies only when workers are present",
        ],
        correctIndex: 0,
        explanation:
          "White rectangles with black lettering are regulatory signs. They set out driving laws, and it is an offence under the Motor Vehicle Act to disregard them.",
        context:
          "B.C.'s regulatory family includes the octagon and the yield triangle, plus a large set of white rectangles: maximum speed, do not pass, keep right, one way, no stopping, and the slow-vehicle pullout signs on mountain highways. The Act reinforces them separately - where a traffic control device shows the direction vehicles must go, or prohibits a movement, driving otherwise is an offence in itself.",
        trap:
          "Regulatory signs that read like advice still bind you. Keep right unless passing is a rule, not a suggestion about courtesy.",
        excerptKey: "regulatory-signs-offence",
        sourceLabel: "Learn to drive smart - Chapter 3, regulatory signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_03",
        topic: "sharing",
        question:
          "You are driving a B.C. back road at dusk and a deer steps into your path. You cannot stop in time. What does B.C. advise?",
        choices: [
          "Swerve hard into the oncoming lane to go around it",
          "Slam on the brakes and hold them locked",
          "Brake firmly, steer to strike it at an angle, and ease off the brake just before impact",
          "Accelerate to clear the animal's path",
        ],
        correctIndex: 2,
        explanation:
          "Brake firmly, steer so you strike the animal at an angle rather than square on, and release the brake just before impact. Letting the brake off raises the front of the vehicle, which reduces the chance a large animal comes through the windshield.",
        context:
          "Prevention does most of the work. Scan the sides of the road for animals, slow down where crossing signs are posted, and be extra cautious at dusk and dawn when animals move to feed and you can see least. Watch for sudden spots of light on the road at night - that is your headlights in an animal's eyes. Wild animals move in herds, so one animal means expect more.",
        trap:
          "Slamming on the brakes is the reflex and B.C. warns against it: it can send the vehicle out of control, which is a worse outcome than the collision you were avoiding.",
        excerptKey: "animal-strike-angle",
        sourceLabel: "Learn to drive smart - Chapter 8, animals on the road",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_04",
        topic: "speed",
        question:
          "Unless a sign says otherwise, what is the speed limit on a B.C. highway outside a city or town?",
        choices: ["80 km/h", "90 km/h", "100 km/h", "60 km/h"],
        correctIndex: 0,
        explanation:
          "Eighty km/h outside cities and towns, unless a sign posts something else. On the major highways signs commonly raise it, but 80 is the number that applies when nothing is posted.",
        context:
          "The Motor Vehicle Act sets the same pair: not more than 50 km/h on a highway in a municipality, and not more than 80 km/h outside one. Signs erected by the ministry or by municipal bylaw can raise or lower either, and any posted figure governs. There is also a defence built into the Act: if the sign's face was obstructed or unreadable to every driver on the highway, that is an answer to the charge.",
        trap:
          "One hundred is the Alberta rural default on a provincial highway, not B.C.'s. B.C.'s unsigned rural default is 80.",
        excerptKey: "mva-speed-defaults",
        sourceLabel: "Motor Vehicle Act s.146 (1) - speed",
        sourceUrl: mva("146"),
      },
      {
        id: "bc_s4_05",
        topic: "safety",
        question: "You are following a vehicle on a high-speed road. What following distance does B.C. ask for?",
        choices: [
          "Three seconds",
          "Two seconds, the same as anywhere else",
          "Four seconds",
          "One vehicle length for each 15 km/h of speed",
        ],
        correctIndex: 0,
        explanation:
          "Three seconds on high-speed roads. Two seconds is the good-conditions baseline for ordinary driving; speed stretches the distance a two-second gap actually represents, so the gap in seconds goes up as well.",
        context:
          "The full ladder is worth learning as one thing. Two seconds in good weather and good road conditions. Three on high-speed roads. Four in bad weather or on uneven or slippery roads. And three seconds again in four extra situations regardless of road type: behind a large vehicle that blocks your view, behind a motorcycle that can stop very quickly, when a vehicle is following close behind you, and on an unpaved road with dust or gravel in the air.",
        trap:
          "Those four extra three-second cases are the part people never learn, and they are exactly the ones a well-written exam question picks.",
        excerptKey: "two-second-rule",
        sourceLabel: "Learn to drive smart - Chapter 5, space in front",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s4_06",
        topic: "rules",
        question: "You are driving down a long mountain grade in a manual-transmission vehicle. What is illegal?",
        choices: [
          "Using a low gear to control speed",
          "Braking intermittently rather than continuously",
          "Pulling into a designated slow-vehicle pullout",
          "Coasting in neutral or with the clutch held in",
        ],
        correctIndex: 3,
        explanation:
          "Coasting downhill in neutral or with the clutch in is illegal in B.C. You need to be in gear to control the vehicle, and a coasting vehicle has lost its engine braking entirely.",
        context:
          "Gravity is doing real work on a descent - the guide points out that a vehicle needs a longer distance to stop going downhill, which is precisely when brake fade sets in from continuous use. The correct technique is a low gear so the engine holds the speed, with the brakes used in short applications rather than held on. On icy hills, B.C. says the same thing more emphatically: use a low gear.",
        trap:
          "Coasting to save fuel is a false economy in a modern vehicle and it costs you control. In gear is not optional here, it is the law.",
        excerptKey: "coasting-illegal",
        sourceLabel: "Learn to drive smart - Chapter 5, gear use",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_07",
        topic: "emergencies",
        question: "Your front tyre blows out at highway speed. What is the first thing to do?",
        choices: [
          "Brake hard immediately",
          "Steer sharply onto the shoulder",
          "Keep a firm grip on the wheel and ease off the accelerator",
          "Switch on the hazard lights and stop in the lane",
        ],
        correctIndex: 2,
        explanation:
          "Grip the wheel firmly and come off the accelerator. A front blowout pulls the vehicle towards the flat tyre, and hard braking on top of that pull is how you lose steering altogether.",
        context:
          "Let the vehicle slow itself, then brake gently once the speed is down. Steer where you want to go, signal or put the hazard lights on, and pull off the road as soon as it is safe to do so. A rear blowout behaves differently - it tends to start the vehicle skidding - but the response is the same: no sudden inputs.",
        trap:
          "Braking hard is the instinct and it is the one thing that turns a blowout into a crash. Deceleration first, braking second.",
        excerptKey: "blowout-response",
        sourceLabel: "Learn to drive smart - Chapter 8, tire blowout",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_08",
        topic: "signals",
        question:
          "You are in a left-turn lane with its own signal, and the green arrow has just turned yellow. What must you do?",
        choices: [
          "Complete the turn, since you were waiting first",
          "Turn if oncoming traffic has stopped",
          "Move into the intersection and wait there",
          "Stop and wait for the next green arrow",
        ],
        correctIndex: 3,
        explanation:
          "Once a separate left-turn signal's green arrow turns yellow, you stop and wait for the next one. That set of lights governs your lane alone, and its yellow means your protected phase is ending.",
        context:
          "B.C. runs two arrangements and they end differently. Where the left-turn lane has its own set of lights, a yellow arrow ends your turn and you wait. Where the advance arrow sits at the bottom of the regular lights, the arrow simply goes out and the round green remains - and you may still turn, but the protection is gone, so you yield to pedestrians and oncoming traffic first.",
        trap:
          "The exception for completing a turn applies to a driver already in the intersection. A driver still behind the stop line when the arrow goes yellow has not started the turn.",
        excerptKey: "green-arrow-turned-yellow",
        sourceLabel: "Learn to drive smart - Chapter 4, left-turn signals",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_09",
        topic: "impairment",
        question:
          "A police officer forms the opinion that your ability to drive is affected by alcohol. What does B.C. law require before you can be prohibited?",
        choices: [
          "Nothing more - you can be prohibited without reaching any BAC or drug threshold",
          "A BAC over .08",
          "A blood drug concentration of 2 nanograms or more of THC",
          "A conviction in court first",
        ],
        correctIndex: 0,
        explanation:
          "You do not have to be over any threshold. B.C. states plainly that you may be prohibited if a police officer considers your ability to drive to be affected by alcohol or drugs.",
        context:
          "The thresholds still exist and still matter. Immediate and severe penalties apply if you drive with a certain amount of alcohol or drugs in your system or refuse a breath sample, and they escalate for repeat offences. But the officer's assessment is a separate route that does not depend on hitting .08 or 2 nanograms of THC. Criminal Code convictions add prohibitions from one to three years for a first offence, fines from $1,000, and possible jail.",
        trap:
          "\"I was under the limit\" is not a defence against a roadside prohibition, and for anyone in the Graduated Licensing Program the limit is zero anyway.",
        excerptKey: "bdc-thc-threshold",
        sourceLabel: "Learn to drive smart - Chapter 9, penalties for impaired driving",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s4_10",
        topic: "sharing",
        question:
          "You are approaching a stopped highway maintenance truck with flashing lights on a road posted at 60 km/h. What speed must you not exceed?",
        choices: ["70 km/h", "60 km/h", "40 km/h", "50 km/h"],
        correctIndex: 2,
        explanation:
          "Forty km/h, because the posted limit is under 80. The two speeds are decided by the posted limit, not by how fast you happen to be travelling.",
        context:
          "The rule's two branches are 70 km/h where the limit is 80 km/h or more, and 40 km/h where it is less than 80. On top of the speed, if you are in the lane nearest the stopped vehicle you must change lanes as well when it is safe to do so. The one exception is narrow: it does not apply if you are on a divided highway approaching from the opposite direction.",
        trap:
          "Sixty feels like the answer because it is the posted limit and you are already obeying it. The rule requires you to go slower than the posted limit, not merely to stay within it.",
        excerptKey: "slow-down-move-over-speeds",
        sourceLabel: "Learn to drive smart - Chapter 6, stopped vehicles with flashing lights",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s4_11",
        topic: "rightOfWay",
        question:
          "You are turning right at a busy intersection. Which road user are you most likely to have missed?",
        choices: [
          "A cyclist coming up on your right, hidden in your blind spot",
          "A vehicle approaching from the left on the cross street",
          "A pedestrian on the far side of the intersection",
          "A vehicle behind you preparing to pass",
        ],
        correctIndex: 0,
        explanation:
          "A cyclist alongside you on the right is narrow enough to disappear entirely into the blind spot, which is why B.C. names a shoulder check before turning right as a specific instruction.",
        context:
          "Turning right also means yielding to pedestrians crossing the street you are turning into. B.C. asks you to shoulder check for bicycles before turning right, watch for a cyclist ahead waiting to turn left when you are going straight, check for oncoming cyclists before turning left, and look carefully wherever a bicycle trail meets a road. Cyclists have the same rights and responsibilities on the road as drivers.",
        trap:
          "A mirror check is not enough here. The most dangerous blind spots are the ones to the side, and a bicycle fits inside them completely.",
        excerptKey: "cyclist-dooring",
        sourceLabel: "Learn to drive smart - Chapter 6, cyclists",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_12",
        topic: "parking",
        question: "You are parking on a street facing downhill with a curb. Which way do the front wheels go?",
        choices: [
          "Straight ahead",
          "To the right, towards the curb",
          "To the left, away from the curb",
          "It depends whether the vehicle is automatic or manual",
        ],
        correctIndex: 1,
        explanation:
          "Right, towards the curb. Facing downhill the vehicle would roll forwards, so the wheels are turned so the front tyre meets the curb rather than the traffic lane.",
        context:
          "ICBC's table is easier to hold as one rule plus one exception. Turn the wheels right when facing uphill without a curb, and when facing downhill with or without a curb. Turn them left only when facing uphill with a curb - the one case where the curb behind the wheel can catch a rolling vehicle. Set the parking brake and leave the vehicle in gear on top of that. The Motor Vehicle Act puts it more simply still: turn the front wheels to the curb or side of the highway.",
        trap:
          "A rolling or mountable curb is not tall enough to stop a vehicle. Parking uphill beside one, treat it as though there were no curb and turn the wheels right.",
        excerptKey: "parking-hill-wheels",
        sourceLabel: "Learn to drive smart - Chapter 4, parking tips and rules",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s4_13",
        topic: "safety",
        question:
          "Your vehicle starts hydroplaning and the steering suddenly feels very light. What should you do?",
        choices: [
          "Brake firmly to reduce speed",
          "Steer sharply to regain contact with the road",
          "Apply the parking brake gently",
          "Decelerate and drive straight, without braking",
        ],
        correctIndex: 3,
        explanation:
          "Come off the accelerator, keep the wheel straight, and do not brake. The tyres are riding on a film of water with no grip to give, so any braking or steering input has nothing to act on until contact returns.",
        context:
          "The light steering is the diagnostic sign. Hydroplaning happens when the tyres lose contact with the road and float on water, and the faster you go the more likely it is. Prevention is checking your tread and inflation, scanning ahead for standing water and puddles, and cutting speed in heavy rain. Vehicles with low tyre pressure or worn tread hydroplane soonest.",
        trap:
          "Braking is the reflex and it is the one action B.C. rules out entirely for hydroplaning - \"never brake\" is how the guide puts it.",
        excerptKey: "hydroplaning-response",
        sourceLabel: "Learn to drive smart - Chapter 8, rain",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_14",
        topic: "signs",
        question: "A yellow diamond shows a black arrow bending left and right. What is it telling you?",
        choices: [
          "The road is closed ahead",
          "A one-way street begins",
          "There is a winding road ahead",
          "Two-way traffic starts here",
        ],
        correctIndex: 2,
        explanation:
          "A winding road ahead - a series of curves rather than a single one. Like all yellow diamonds it is a warning, so it is telling you to prepare rather than imposing a new limit.",
        context:
          "The warning family is large and worth flipping through: winding road, hidden side road, curve ahead, sharp curve with an advisory speed, merging traffic, lane ends, divided highway ends, road narrows, narrow structure, bump, slippery when wet, steep hill, stop sign ahead, roundabout ahead, signal lights ahead. Object markers are a related group, mounted directly on obstructions and telling you which side to pass.",
        trap:
          "A winding-road warning does not carry a limit of its own. If a curve within it needs a lower speed, a separate sharp-curve sign with an advisory tab will say so.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Learn to drive smart - Chapter 3, warning signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_15",
        topic: "rules",
        question:
          "You are approaching a spot where the right lane ends. You are in the lane that continues. What does B.C. ask of you?",
        choices: [
          "Hold your speed and position so merging drivers know where you are",
          "Move left to give merging traffic the whole lane",
          "Adjust your speed or change lanes to help the merging traffic",
          "Sound your horn to warn merging drivers you are there",
        ],
        correctIndex: 2,
        explanation:
          "Help them in. B.C. asks a driver beside a lane that is ending to adjust speed or change lanes so merging traffic has somewhere to go.",
        context:
          "The driver in the ending lane has their own duty: change lanes, adjust speed within the limit and wait for a safe gap. The same cooperative rule applies at freeway entrances - if you are in the right lane and someone is coming down an entrance ramp, pull left if it is safe or open a gap for them. Passing lanes end the same way, and vehicles in both lanes must merge before the passing lane runs out.",
        trap:
          "Holding position as a matter of principle is what turns a merge into a conflict. The rule is written as a shared task, not a contest over who has priority.",
        excerptKey: "passing-lane-merge",
        sourceLabel: "Learn to drive smart - Chapter 4, merging",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_16",
        topic: "emergencies",
        question: "Your brakes fail completely. What sequence does B.C. give?",
        choices: [
          "Switch off the engine, then coast to a stop",
          "Apply the parking brake fully and immediately",
          "Steer into the nearest solid object at low speed",
          "Pump the brakes hard and fast, gear down, then apply the parking brake gradually",
        ],
        correctIndex: 3,
        explanation:
          "Pump the pedal hard and fast to see if any braking is left, gear down to the lowest gear so the engine slows you, then apply the parking brake gently and gradually. Look for an escape route the whole time.",
        context:
          "The gradual application of the parking brake matters - yanking it on locks the rear wheels and starts a skid. Keep the release handy so you can let it off instantly if that happens. Use the horn or hazard lights to warn other drivers. And do not switch the ignition off: if the engine stops, the steering will lock the moment you turn the key.",
        trap:
          "Total brake failure is rare, and the tempting single action - parking brake, hard - is the one that puts you sideways.",
        excerptKey: "brake-failure-response",
        sourceLabel: "Learn to drive smart - Chapter 8, brake failure",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_17",
        topic: "sharing",
        question: "How far back must you stay when following a fire truck in B.C.?",
        choices: ["50 metres", "100 metres", "At least 150 metres", "At least 300 metres"],
        correctIndex: 2,
        explanation:
          "At least 150 metres behind a fire truck. It is a fixed distance rather than a following time, and it applies whether or not the truck is running its lights.",
        context:
          "Emergency vehicles come with several separate duties. When one approaches with lights and siren, all traffic in both directions must pull over parallel to the nearest curb, clear of the intersection, and stop until it has passed. Do not stop in an intersection. Do not block a traffic circle or roundabout. And it is illegal to drive over a fire hose.",
        trap:
          "One hundred and fifty metres also appears in two lighting rules - dim your high beams within 150 metres, and use headlights when visibility falls below 150 metres. Three different rules, one number.",
        excerptKey: "fire-truck-150m",
        sourceLabel: "Learn to drive smart - Chapter 6, emergency vehicles",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_18",
        topic: "signals",
        question:
          "All the overhead lane control signals across a roadway are flashing yellow X symbols. What does that mean?",
        choices: [
          "The lanes are closed and you must exit",
          "Only buses may proceed",
          "Traffic is reversing direction in five minutes",
          "Slow down and proceed with caution",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow X across all the lanes means slow down and proceed with caution. It is not a closure - it is a warning that something ahead needs care.",
        context:
          "Lane control signals give three instructions. A red X means do not drive in that lane at all. A green arrow means the lane is open in your direction. A flashing yellow X over a single lane tells you to move out of it into a lane showing a green arrow; when every lane shows flashing yellow, the instruction becomes caution rather than evacuation.",
        trap:
          "A flashing yellow X over one lane and over all of them mean different things. Over one it is get out; over all of them it is slow down.",
        excerptKey: "lane-control-yellow-x",
        sourceLabel: "Learn to drive smart - Chapter 3, lane control signals",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_19",
        topic: "speed",
        question:
          "You are on a highway posted at 100 km/h and driving at the limit, but freezing rain has started. What does B.C. say about your speed?",
        choices: [
          "The posted limit is the maximum for ideal conditions - you must choose a slower speed",
          "You may hold the limit as long as you increase following distance",
          "The limit applies regardless of weather; only signs can change it",
          "Reduce speed only if visibility drops below 150 metres",
        ],
        correctIndex: 0,
        explanation:
          "A posted limit is the maximum for ideal conditions only - bare, dry pavement and good visibility. When the conditions are not ideal, the safe and lawful speed is lower than the sign.",
        context:
          "The point runs right through the guide. Driving too fast for the conditions is an offence in its own right, and staying under the posted number is not a defence. In freezing rain you would also increase following distance to four seconds, switch off cruise control, avoid passing, and travel in the part of the road carrying the least snow or ice if you have a choice of lanes.",
        trap:
          "The opposite error is real too. B.C. warns that driving much slower than surrounding traffic frustrates drivers into risky passes - so the answer is a speed suited to the conditions, not the slowest one possible.",
        excerptKey: "posted-speed-ideal",
        sourceLabel: "Learn to drive smart - Chapter 5, appropriate speeds",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_20",
        topic: "safety",
        question:
          "You are driving through a tunnel on a bright day. What does B.C. tell you to do?",
        choices: [
          "Remove your sunglasses and turn on your headlights",
          "Keep your sunglasses on until your eyes adjust",
          "Switch to high beams for the length of the tunnel",
          "Turn on your hazard lights",
        ],
        correctIndex: 0,
        explanation:
          "Sunglasses off and headlights on. Your eyes need time to adapt to the drop in light, and sunglasses steal the adaptation you cannot spare.",
        context:
          "Slow down before you enter so the adjustment has time to happen while you are travelling slower. B.C. groups this with its other glare strategies: sun visor and sunglasses in daylight, clean windows, the rear-view mirror set to its night position, and a good following distance at night to reduce the glare your own headlights throw back off the vehicle in front. Some B.C. tunnels post a sign specifically telling you to remove sunglasses.",
        trap:
          "High beams inside a tunnel do not help and will dazzle oncoming drivers. Low beams are what the instruction means by headlights.",
        excerptKey: "tunnel-sunglasses",
        sourceLabel: "Learn to drive smart - Chapter 8, glare and shadows",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_21",
        topic: "rightOfWay",
        question:
          "You are in the intersection waiting to turn left when the light turns yellow. What are you entitled to do?",
        choices: [
          "Reverse out of the intersection",
          "Wait in the intersection for the next green",
          "Complete the turn, watching for drivers trying to beat the red",
          "Abandon the turn and drive straight through",
        ],
        correctIndex: 2,
        explanation:
          "You are legally allowed to complete the turn. Once you are in the intersection, clearing it is the safe outcome - the caution is to watch for oncoming drivers accelerating at the yellow.",
        context:
          "The Motor Vehicle Act supports this from the other side: having yielded and signalled, a left-turning driver may turn, and traffic approaching from the opposite direction must yield to them. Reversing is not an option - it is illegal to back up into an intersection or over a crosswalk in B.C.",
        trap:
          "Panicking and stopping mid-turn is the outcome the guide is written against. You are exposed in the intersection and the safest thing is to finish the movement.",
        excerptKey: "left-turn-yellow-complete",
        sourceLabel: "Learn to drive smart - Chapter 4, intersections controlled by traffic lights",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_22",
        topic: "parking",
        question:
          "Where does B.C. prohibit stopping, standing or parking regardless of how briefly you intend to stay?",
        choices: [
          "Any street without a marked parking bay",
          "On a bridge or in a highway tunnel",
          "Within 100 metres of a school",
          "On any street posted above 50 km/h",
        ],
        correctIndex: 1,
        explanation:
          "Bridges and highway tunnels are on the prohibited list outright. There is nowhere to go if something happens, and a stopped vehicle in a tunnel is a hazard nobody can see until they are on top of it.",
        context:
          "B.C.'s definition of parking covers standing whether the vehicle is occupied or not, except while you are actually loading or unloading - so sitting behind the wheel changes nothing. The rest of the prohibited list runs to sidewalks and boulevards, driveway and back lane entrances, bicycle lanes, crosswalks, intersections, the clearances around hydrants and railway crossings, and any position that blocks a traffic sign from view.",
        trap:
          "Hazard lights do not create an exception. They tell other drivers you have stopped for an emergency, which is not the same as making the stop lawful.",
        excerptKey: "parking-bike-lane-bridge",
        sourceLabel: "Learn to drive smart - Chapter 4, parking tips and rules",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_23",
        topic: "impairment",
        question: "What effect does fatigue have on driving?",
        choices: [
          "It affects reaction time only",
          "It affects scanning, thinking and reaction time - all three parts of see-think-do",
          "It affects judgement but not physical control",
          "It only matters on trips over four hours",
        ],
        correctIndex: 1,
        explanation:
          "Fatigue degrades the whole chain. It makes your scanning inaccurate, slows your thinking, and lengthens your reaction time - so every stage of see-think-do is worse at once.",
        context:
          "B.C. calls being tired one of the leading causes of crashes. The countermeasures are simple: start rested, take breaks and walk around, eat but avoid heavy meals, keep the heat moderate, keep a window open, and pull over for a nap if you need one. On a long trip be especially careful on the second day, which is when tiredness usually catches up. Highway hypnosis is the related risk on long, unchanging stretches - turn off the cruise control and scan systematically.",
        trap:
          "Fatigue does not announce itself the way alcohol does. The scanning failure comes first, and you will not notice it happening.",
        excerptKey: "fatigue-leading-cause",
        sourceLabel: "Learn to drive smart - Chapter 7, staying awake",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_24",
        topic: "signs",
        question: "What does an X-shaped sign at a railway crossing mean?",
        choices: [
          "Trains cross here only during posted hours",
          "You may cross without slowing if the gates are up",
          "Watch for buses, which must stop here",
          "A railway crossing - stop, then proceed when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "The crossbuck marks the crossing itself, and the rule attached to it is stop and then proceed when it is safe. Trains always have the right-of-way in B.C.",
        context:
          "Crossings come with several layers of warning. An advance warning sign appears where the crossing is hidden by a hill or a curve, sometimes with an advisory speed. A painted X may appear on the pavement. Many crossings add flashing lights, a bell and gates - and if the light and bell are going or the gate is down, a train is coming. Where a gate is down you wait for it to rise fully.",
        trap:
          "Trains do not have to whistle at every crossing, and a passenger train in Canada can be doing 160 km/h. Silence tells you nothing.",
        excerptKey: "railway-stop-then-proceed",
        sourceLabel: "Learn to drive smart - Chapter 3, railway signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_25",
        topic: "rules",
        question:
          "You are on a two-way road and want to turn left into a driveway. There is a centre lane marked with broken lines inside solid ones. What is it for?",
        choices: [
          "A passing lane for both directions",
          "A two-way left-turn lane, shared by drivers from both directions turning left",
          "A reserved lane for buses and HOVs",
          "A median you may not enter",
        ],
        correctIndex: 1,
        explanation:
          "It is a two-way left-turn lane. Drivers coming from either direction use it to wait for a gap without holding up through traffic, so you have to expect vehicles facing you in the same lane.",
        context:
          "Make sure there is enough space before you enter it, and use it only to turn left - it is not a passing lane or a merging lane. B.C. notes the markings may be reversed, with solid lines inside the broken ones, so read the lane rather than a remembered pattern. On a road with no such lane, a mid-block left turn across a solid double yellow is still permitted if you do it safely and do not impede other traffic.",
        trap:
          "Treating it as a merge lane or an acceleration lane is how head-on conflicts happen in it, because someone coming the other way is using it for exactly the purpose it was built for.",
        excerptKey: "two-way-left-turn-lane-use",
        sourceLabel: "Learn to drive smart - Chapter 4, two-way left-turn lanes",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_26",
        topic: "safety",
        question: "How far ahead do low beam headlights let you see, and high beams?",
        choices: [
          "About 30 metres on low beam and about 100 metres on high beam",
          "About 50 metres on low beam and about 150 metres on high beam",
          "About 20 metres on low beam and about 60 metres on high beam",
          "About 100 metres on low beam and about 200 metres on high beam",
        ],
        correctIndex: 0,
        explanation:
          "Low beams light about 30 metres of road ahead; high beams about 100. Those figures are what makes overdriving your headlights so easy at highway speed.",
        context:
          "You must dim your high beams within 150 metres of another vehicle, and that single figure covers both meeting an oncoming vehicle and following one - unlike jurisdictions that use a shorter distance for following. Headlights are required from half an hour after sunset until half an hour before sunrise, and any time visibility drops below 150 metres. Driving at night on parking lights or daytime running lights instead of headlights is illegal.",
        trap:
          "Thirty metres is less than most drivers assume, and at 100 km/h you cover it in about a second. On low beams at highway speed you are already outrunning the light.",
        excerptKey: "headlight-beam-distances",
        sourceLabel: "Learn to drive smart - Chapter 8, using the headlights",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_27",
        topic: "sharing",
        question:
          "You come up behind a horse and rider on a rural B.C. road. What should you do?",
        choices: [
          "Sound the horn so the rider knows you are there",
          "Pass close and quickly to minimise the time alongside",
          "Rev the engine to signal your presence",
          "Slow down, give plenty of space, and do not sound the horn",
        ],
        correctIndex: 3,
        explanation:
          "Slow down and give lots of room, and leave the horn alone. A horn can make a horse bolt - straight into your path is one of the directions it might choose.",
        context:
          "The same logic covers other road users you can startle. B.C. tells you not to honk at a cyclist unless you genuinely need to give a warning, because it can cause a fall, and not to rev the engine or sound the horn near a person who is visually impaired or their guide dog. The general principle is that noise is a warning tool, not a way of announcing yourself.",
        trap:
          "Sounding the horn feels courteous - you are telling the rider you are there. To the horse it is a startle, and the animal decides what happens next.",
        excerptKey: "horses-no-horn",
        sourceLabel: "Learn to drive smart - Chapter 6, horses",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_28",
        topic: "emergencies",
        question: "You arrive at the scene of a crash and decide to stop and help. What should you avoid?",
        choices: [
          "Setting up warning triangles for approaching traffic",
          "Staying with injured people until help arrives",
          "Letting anyone smoke or light a match near the scene",
          "Parking away from the crash so you do not obstruct traffic",
        ],
        correctIndex: 2,
        explanation:
          "No smoking and no matches anywhere near the scene - there may be a fuel leak you cannot see. The other three are things B.C. asks you to do.",
        context:
          "Park clear of the crash so you do not block traffic or emergency vehicles. Warn approaching drivers, with triangles if you have them, so a second crash does not pile onto the first. Call for emergency services if they are needed. Stay with anyone injured until help arrives. If you are only driving past, do not slow more than necessary and keep your attention on your own driving.",
        trap:
          "Fuel vapour spreads well beyond any visible spill, and it pools low where you cannot see it at all.",
        excerptKey: "crash-no-smoking",
        sourceLabel: "Learn to drive smart - Chapter 8, assisting at a crash scene",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_29",
        topic: "signals",
        question: "You are the first vehicle at a light that has just turned green. What should you do?",
        choices: [
          "Scan the intersection to make sure it is clear before moving off",
          "Move off immediately - hesitation causes rear-end collisions",
          "Wait three seconds by default",
          "Sound the horn to warn cross traffic",
        ],
        correctIndex: 0,
        explanation:
          "A fresh green is permission to enter, not a guarantee the intersection is empty. Scan it before you move, because someone may still be clearing it or trying to beat their red.",
        context:
          "B.C. gives green lights a small vocabulary of their own. A fresh green has just changed; a stale green has been green a long time and is about to end. On a fresh green you scan before moving; on a stale green you prepare to stop, using clues like a queue on the cross street or a pedestrian countdown. In every case the green means go only if the intersection is clear and it is safe to do so.",
        trap:
          "A fixed pause is not the rule and it creates its own hazard behind you. The instruction is to look, which usually takes under a second.",
        excerptKey: "fresh-green",
        sourceLabel: "Learn to drive smart - Chapter 4, intersections controlled by traffic lights",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_30",
        topic: "rules",
        question: "Where must a vehicle be positioned to turn right at an intersection in B.C.?",
        choices: [
          "In whichever lane is clear of traffic",
          "In the centre lane, then swing wide across the corner",
          "Anywhere in the right half of the roadway",
          "As close as practicable to the right-hand curb or edge of the roadway",
        ],
        correctIndex: 3,
        explanation:
          "As close as practicable to the right-hand curb or edge. Approaching wide leaves a gap on your right that a cyclist or another vehicle will occupy.",
        context:
          "The guide describes the same movement as lane tracking: move into the right lane, and finish in the right lane of the cross street. Some intersections mark exceptions - road markings that allow a right turn from a centre lane, or a separate yield lane for right-turning vehicles where you wait for a break in traffic. Where a traffic control device shows the course to be travelled, follow it.",
        trap:
          "Swinging left first to make the corner easier is what large vehicles have to do and passenger cars do not. On a road test it is a marked fault.",
        excerptKey: "mva-right-turn-close",
        sourceLabel: "Motor Vehicle Act s.165 (1) - turning at intersections",
        sourceUrl: mva("165"),
      },
      {
        id: "bc_s4_31",
        topic: "safety",
        question:
          "You are driving a vehicle with a high centre of gravity, such as a van or a pickup. What does that change?",
        choices: [
          "It stops in a shorter distance",
          "It has more traction on wet roads",
          "It is less stable on uneven surfaces and more likely to tip on a fast curve",
          "It is unaffected once the load is secured",
        ],
        correctIndex: 2,
        explanation:
          "A higher centre of gravity makes a vehicle less stable on uneven surfaces and more likely to roll over on a curve taken at speed. Raising the load raises the centre of gravity further.",
        context:
          "This sits alongside the other physics B.C. asks you to carry: traction is the grip the tyres have; inertia is what tries to keep you moving straight when you brake or corner, and it grows with speed; gravity is why you need more distance to stop downhill. In a curve, inertia pushes weight onto the outside front tyre, and the answer is always to slow before the curve rather than brake inside it.",
        trap:
          "Extra weight also changes how a vehicle steers, particularly on curves. B.C. warns against overloading and points you at the owner's manual for the limit.",
        excerptKey: "centre-of-gravity-rollover",
        sourceLabel: "Learn to drive smart - Chapter 5, physics and driving",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_32",
        topic: "sharing",
        question:
          "You need to cross a bicycle lane to make a right turn into a driveway. What does B.C. require?",
        choices: [
          "Cross only where the white line is solid",
          "Signal well ahead and yield to all cyclists before crossing",
          "Complete the turn without signalling, so cyclists are not confused",
          "Stop in the bicycle lane first and check both ways",
        ],
        correctIndex: 1,
        explanation:
          "Signal well ahead and yield to every cyclist before you cross. Crossing is only permitted where the white line is broken or to turn into or out of a driveway.",
        context:
          "The rest of the bicycle lane rule is a flat prohibition: do not drive, stop or park in one. Cyclists in B.C. have the same rights and responsibilities as drivers, and they are entitled to move out towards the middle of a lane where the right side is unsafe or the lane is too narrow to share. Passing them means leaving at least a metre, or 1.5 metres where the limit is above 50 km/h.",
        trap:
          "Stopping in the bike lane to check is itself the offence. You yield before you cross, not after you have already occupied the lane.",
        excerptKey: "bicycle-lane-rules",
        sourceLabel: "Learn to drive smart - Chapter 4, bicycle lanes",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_33",
        topic: "parking",
        question:
          "You are running errands and stop your car in a traffic lane with the engine running while a passenger goes into a shop. What is that under B.C. law?",
        choices: [
          "Legal, because the vehicle is occupied",
          "Legal for up to five minutes",
          "Legal if the hazard lights are on",
          "Parking, because standing counts whether the vehicle is occupied or not",
        ],
        correctIndex: 3,
        explanation:
          "Where parking is prohibited, B.C. defines it to include standing a vehicle whether it is occupied or not - the only carve-out is standing temporarily while actually loading or unloading.",
        context:
          "The definition matters because it closes the loophole people reach for: staying in the driver's seat does not turn parking into something else. The Act separately makes it an offence to park so as to obstruct the free passage of traffic, and outside a business or residence district it requires you to get off the roadway entirely if it is practicable to do so.",
        trap:
          "Waiting for a passenger is not loading or unloading. The exception is about actually moving goods or people in and out, not about idling by the curb.",
        excerptKey: "mva-parking-30cm",
        sourceLabel: "Motor Vehicle Act s.190 - manner of parking",
        sourceUrl: mva("190"),
      },
      {
        id: "bc_s4_34",
        topic: "impairment",
        question: "What do studies say about a driver holding a conversation on a mobile phone?",
        choices: [
          "Reaction time drops but visual attention is unaffected",
          "They lose about 50 per cent of what is going on around them, visually",
          "Only texting affects attention; talking does not",
          "The effect disappears once the vehicle is stopped in traffic",
        ],
        correctIndex: 1,
        explanation:
          "Drivers on the phone lose roughly half of what is happening around them visually. The eyes still point at the road; the brain stops processing much of what they see.",
        context:
          "B.C. adds the legal point that a stopped vehicle is not an exemption - when you are slowed in traffic or waiting at a red light, you are still driving, and the device law still applies. Every B.C. driver is barred from hand-held devices, and drivers in the Graduated Licensing Program are barred from hands-free ones too, apart from calling 9-1-1.",
        trap:
          "\"I was hands-free\" answers the wrong objection. The attention loss is about the conversation, not about which hand is holding the phone.",
        excerptKey: "cellphone-50-percent",
        sourceLabel: "Learn to drive smart - Chapter 7, keeping focused",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s4_35",
        topic: "rightOfWay",
        question:
          "You are stopped at a red light where a right turn on red is permitted. To whom must you yield before turning?",
        choices: [
          "All pedestrians and vehicles lawfully proceeding as directed by the signal",
          "Only vehicles approaching from your left",
          "Only pedestrians in the crosswalk you are leaving",
          "Nobody, once you have made a complete stop",
        ],
        correctIndex: 0,
        explanation:
          "Everyone lawfully proceeding on the green - pedestrians and vehicles alike. The permission to turn does not confer any priority; it only lifts the requirement to wait for a green.",
        context:
          "The Motor Vehicle Act phrases the right-on-red permission and the yielding duty in the same sentence, and does the same for the left turn on red onto a one-way street. Both turns require you to be stopped as closely as practicable to the crosswalk or the intersection first, and both disappear if a sign at the intersection prohibits them.",
        trap:
          "Pedestrians crossing the street you are turning into are the ones drivers miss here, because the driver is looking left for a gap in traffic while turning right into them.",
        excerptKey: "mva-right-on-red",
        sourceLabel: "Motor Vehicle Act s.129 (3) - red light",
        sourceUrl: mva("129"),
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "Set 5 · The Ones People Fail On",
    difficulty: "hard",
    description:
      "Thirty-five hard questions built on the rules ICBC's own data and its repeated public reminders show B.C. drivers getting wrong: stacked thresholds, rules with exceptions attached, and the answers that differ from every neighbouring jurisdiction.",
    questions: [
      {
        id: "bc_s5_01",
        topic: "signals",
        question:
          "You are new to B.C. and see a flashing green circular light. In the province you learned to drive in, that meant an advance left. What does it mean here?",
        choices: [
          "The light is pedestrian-controlled - approach able to stop and go only if the intersection is clear",
          "The same thing - an advance left turn, protected from oncoming traffic",
          "The signal is faulty and the intersection is a four-way stop",
          "Traffic on the side street has a green as well",
        ],
        correctIndex: 0,
        explanation:
          "In B.C. a flashing green circle marks a light a pedestrian can activate. You must approach in a way that lets you stop before the signal or crosswalk if a stop becomes necessary, and you yield to pedestrians lawfully in the crosswalk.",
        context:
          "Ontario, Alberta, Quebec, New Brunswick and Nova Scotia all use a flashing green circle for a protected left turn. B.C. does not: it uses a flashing green ARROW for that. Here the flashing circle means the cross street faces a stop sign and a pedestrian may push a button to change your light to yellow and then red. The Motor Vehicle Act spells out the approach duty rather than describing it as an advance turn.",
        trap:
          "Every part of this trap is muscle memory. A driver from Ontario turns left across a green-lit oncoming lane and never doubts they had the right-of-way.",
        excerptKey: "mva-flashing-green",
        sourceLabel: "Motor Vehicle Act s.131 (5) - flashing lights",
        sourceUrl: mva("131"),
        commonlyMissed: true,
      },
      {
        id: "bc_s5_02",
        topic: "sharing",
        question:
          "You are following a motorcycle on a highway posted at 90 km/h in light rain. What following distance should you leave?",
        choices: [
          "Two seconds - the motorcycle is lighter and stops no faster",
          "At least three seconds, and more for the conditions",
          "Exactly four seconds",
          "One second, since a motorcycle takes up little of the lane",
        ],
        correctIndex: 1,
        explanation:
          "At least three seconds behind a motorcycle at any time, and the wet high-speed road pushes it further still - B.C. asks for four seconds in bad weather or on slippery surfaces.",
        context:
          "Two things drive the motorcycle rule. A motorcycle can stop far shorter than a car, so the gap you would leave behind another car is not enough. And a rider can skid and fall on a poor surface, which turns the space in front of you into the space you need to avoid a person on the road. Never share a lane with a motorcycle - the rider needs the whole lane to move within it.",
        trap:
          "Do not read a rider sitting in the left part of the lane as signalling a left turn. Riders position themselves there to be seen.",
        excerptKey: "motorcycle-three-seconds",
        sourceLabel: "Learn to drive smart - Chapter 6, motorcycle riders",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s5_03",
        topic: "speed",
        question:
          "It is 4 p.m. on a Wednesday in February. You are in a marked playground zone and it is already dark. What limit applies?",
        choices: [
          "30 km/h, because it is before 5 p.m.",
          "30 km/h, because playground zones apply 24 hours",
          "50 km/h, because playground hours match school hours",
          "The ordinary posted limit, because the zone runs dawn to dusk and dusk has fallen",
        ],
        correctIndex: 3,
        explanation:
          "A playground zone runs from dawn to dusk. Once dusk has fallen, the 30 km/h limit is over for the day and the street's ordinary limit resumes - even at four in the afternoon in February.",
        context:
          "This is the mirror image of the trap most people meet. Playground zones ignore the calendar and follow the light: every day, dawn to dusk. School zones ignore the light and follow the calendar: 8 a.m. to 5 p.m. on school days, unless the sign posts extended hours, and the Motor Vehicle Act says those extended times may only widen the window, never narrow it.",
        trap:
          "Some B.C. municipalities have run pilot bylaws making local playground zones 30 km/h at all hours. Where that applies the signs say so - read the sign rather than assuming either way.",
        excerptKey: "mva-playground-30",
        sourceLabel: "Motor Vehicle Act s.147 (2) - schools and playgrounds",
        sourceUrl: mva("147"),
        commonlyMissed: true,
      },
      {
        id: "bc_s5_04",
        topic: "rules",
        question:
          "You are approaching the crest of a hill on a rural road and want to turn around. Under what condition is a U-turn there illegal?",
        choices: [
          "Always - U-turns are illegal on any rural road",
          "Only if another vehicle is visible",
          "Only between dusk and dawn",
          "If you cannot be seen by other traffic approaching from either direction within 150 metres",
        ],
        correctIndex: 3,
        explanation:
          "The test is visibility: 150 metres in each direction. On or near the crest of a grade where an approaching driver cannot see you within 150 metres, the U-turn is prohibited.",
        context:
          "The Motor Vehicle Act lists the prohibitions together: where the turn would interfere with other traffic, on a curve, at or near a crest where you cannot be seen within 150 metres, where a sign forbids U-turns, at an intersection with a traffic light, and in a business district except at an intersection with no light. Municipal bylaws can add more. B.C. suggests going round the block instead.",
        trap:
          "One hundred and fifty metres also appears in the headlight rules - dim high beams within 150 metres, use headlights when visibility drops below 150 metres. Same number, three separate rules.",
        excerptKey: "uturn-crest-150",
        sourceLabel: "Learn to drive smart - Chapter 4, U-turns",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_05",
        topic: "safety",
        question:
          "Someone is tailgating you on a two-lane road and there is nowhere to pull off. What does B.C. suggest?",
        choices: [
          "Brake sharply to make them back off",
          "Speed up to open a gap behind you",
          "Slow down slightly to increase your space in front",
          "Switch on your hazard lights and hold position",
        ],
        correctIndex: 2,
        explanation:
          "Ease off a little and lengthen the gap in front of you. You cannot control the space behind, but a bigger space ahead means any stop you have to make can be gradual, which is what keeps the tailgater out of your boot.",
        context:
          "Your other options are to change lanes or pull over and let them past. B.C. also names a driver following close behind you as one of the four situations calling for three seconds of following distance rather than two - the others being a large vehicle blocking your view, a motorcycle, and an unpaved road with dust or gravel in the air.",
        trap:
          "Brake-checking is the response people reach for and it is the one that guarantees the collision, with you carrying a share of the fault.",
        excerptKey: "space-behind-tailgater",
        sourceLabel: "Learn to drive smart - Chapter 5, space behind",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_06",
        topic: "rightOfWay",
        question:
          "You are at a four-way stop facing another vehicle that arrived at about the same time. You want to go straight; the other driver is signalling a left turn. Who goes first?",
        choices: [
          "The left-turning driver, since they will take longer to clear",
          "You, because the left-turning driver yields to traffic going straight",
          "Whoever entered the intersection first, regardless of direction",
          "Neither - both must wait for the vehicle on the right",
        ],
        correctIndex: 1,
        explanation:
          "Two vehicles facing each other and arriving at about the same time resolve it by the left-turner yielding to the one going straight through. Your path is the one that stays predictable.",
        context:
          "B.C.'s four-way stop rules run in order. First to arrive and stop goes first. If two arrive together side by side, the one on the right goes. If two arrive facing each other and one is turning left, the left-turner yields. If there is any doubt at all about who has priority, B.C.'s standing advice is to yield anyway.",
        trap:
          "It only applies to vehicles facing each other. If the other vehicle is on your right rather than opposite you, the right-hand tiebreaker governs instead.",
        excerptKey: "four-way-facing-left-turn",
        sourceLabel: "Learn to drive smart - Chapter 4, intersections controlled by stop signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_07",
        topic: "signs",
        question:
          "A fluorescent yellow-green pentagon sign shows two children walking, with no white speed tab beneath it. What limit applies?",
        choices: [
          "30 km/h, 8 a.m. to 5 p.m. on school days",
          "The ordinary posted limit for that street",
          "30 km/h, every day dawn to dusk",
          "50 km/h regardless of the street's posted limit",
        ],
        correctIndex: 1,
        explanation:
          "Without a regulatory speed tab, the sign is a warning that you are near a school and should reduce speed when children are present - not a posted 30 km/h limit. The street's ordinary limit still governs.",
        context:
          "B.C. uses several school signs that look alike and do different jobs. One tells you to reduce speed when children are present. One carries a 30 km/h tab, which puts the statutory 8 a.m. to 5 p.m. school-day limit into effect. One carries a tab giving both the speed and the hours. The Motor Vehicle Act ties the 30 km/h duty to signs displaying a 30 km/h limit or prominently showing the numerals 30.",
        trap:
          "ICBC has named the school zone sign among the ones drivers find confusing, and this is why: the yellow-green pentagon by itself warns, and only the white tab beneath it regulates.",
        excerptKey: "school-zone-reduce",
        sourceLabel: "Learn to drive smart - Chapter 3, school, playground and crosswalk signs",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s5_08",
        topic: "parking",
        question:
          "Which of B.C.'s parking clearances is stated identically by both Learn to drive smart and the Motor Vehicle Act?",
        choices: [
          "Five metres from a fire hydrant",
          "Six metres from an intersection",
          "Ten metres from a bus stop",
          "Three metres from a driveway",
        ],
        correctIndex: 0,
        explanation:
          "Five metres from a fire hydrant appears in both, measured from the point at the curb or edge of the roadway closest to the hydrant. It is one of the figures you can rely on without caveat.",
        context:
          "The other two clearances both sources agree on are 15 metres from the nearest rail of a railway crossing and 30 centimetres from the curb when you park. The six-metre figures are less clean: the guide says six metres from a crosswalk or intersection, while the Act sets no intersection distance at all and states the crosswalk rule as six metres from the approach side. B.C. has no provincial bus-stop distance - that is municipal.",
        trap:
          "Because ICBC writes the test from its own guide, learn the guide's six-metre figures anyway. Just do not expect to find an intersection setback in the statute.",
        excerptKey: "parking-hydrant-5m",
        sourceLabel: "Learn to drive smart - Chapter 4, parking tips and rules",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_09",
        topic: "sharing",
        question:
          "You are passing a person on a personal mobility device who is riding in a protected cycle lane. What is the minimum space required?",
        choices: ["1.0 metre", "0.5 metre", "1.5 metres", "2.0 metres"],
        correctIndex: 1,
        explanation:
          "Half a metre, because the person is in a protected cycle lane. The protection is already doing part of the work the space would otherwise have to do.",
        context:
          "B.C.'s three passing distances answer three different situations. The general minimum is one metre. It rises to 1.5 metres where the posted limit is above 50 km/h. It falls to 0.5 metre where the person is on a sidewalk or in a protected cycle lane. The requirement covers pedestrians and personal mobility device users as well as cyclists, and the law expressly permits crossing a solid line to comply, when it is safe.",
        trap:
          "The 1.5-metre figure keys off the POSTED LIMIT, not how fast you happen to be going. Crawling at 40 km/h on a road posted at 70 does not put you back on the one-metre rule.",
        excerptKey: "passing-distance-sidewalk",
        sourceLabel: "Learn to drive smart - Chapter 5, space beside",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s5_10",
        topic: "rules",
        question:
          "A driver behind you sounds their horn to indicate they are overtaking on a two-lane highway. What does the Motor Vehicle Act require of you?",
        choices: [
          "Maintain your lane position and speed exactly",
          "Move onto the shoulder to let them by",
          "Give way to the right and do not increase your speed until you have been completely passed",
          "Signal left to acknowledge you have seen them",
        ],
        correctIndex: 2,
        explanation:
          "Two duties on the overtaken driver: give way to the right in favour of the overtaking vehicle, and do not increase speed until you have been passed completely.",
        context:
          "The guide puts the second half more bluntly - speeding up while someone is passing you is illegal, and it asks you to help by slowing down and making room. The overtaking driver has duties of their own: pass to the left at a safe distance, do not come back until safely clear, keep within the speed limit while passing, and only pass on the left where you have a clear view of the roadway for a safe distance.",
        trap:
          "Giving way to the right means within your lane, not onto the shoulder. B.C. is explicit elsewhere that the shoulder is not a lane for passing.",
        excerptKey: "mva-no-speed-up",
        sourceLabel: "Motor Vehicle Act s.157 (2) - duty when overtaking another vehicle",
        sourceUrl: mva("157"),
      },
      {
        id: "bc_s5_11",
        topic: "licensing",
        question:
          "Your Class 7L learner's licence is about to expire. What do you have to do to renew it?",
        choices: [
          "Nothing - it renews automatically until you pass the road test",
          "Re-take the knowledge test",
          "Complete an approved driver training course",
          "Book a vision screening only",
        ],
        correctIndex: 1,
        explanation:
          "A learner's licence stays valid for two years, and renewing it means re-taking the knowledge test.",
        context:
          "The learner stage requires you to hold the L for at least 12 months and stay prohibition-free before the Class 7 road test, so two years leaves reasonable room - but a prohibition during the L stage stops the clock, and you accumulate no time toward the novice stage until it has been served and your licence reinstated. ICBC recommends at least 60 hours of supervised practice and gives you a driver experience log to record it.",
        trap:
          "The knowledge test is 50 questions and 40 to pass whether it is your first attempt or your renewal. It does not get shorter the second time.",
        excerptKey: "l-valid-two-years",
        sourceLabel: "ICBC - Get your L",
        sourceUrl: GET_L,
      },
      {
        id: "bc_s5_12",
        topic: "signals",
        question:
          "You are stopped at a red light at a T-intersection where the road you would turn left into is two-way. Can you turn left on the red?",
        choices: [
          "Yes, after a complete stop",
          "Yes, but only if you are coming from a one-way street",
          "Yes, if no sign forbids it and no pedestrian is present",
          "No - the destination street must be one-way in the direction you are turning",
        ],
        correctIndex: 3,
        explanation:
          "B.C.'s left turn on red only works onto a highway where traffic is restricted to the direction you are turning. A two-way destination street takes the permission away entirely.",
        context:
          "The statute conditions the destination street and nothing else, which produces a result that surprises drivers from other provinces: in B.C. a left on red is legal from a two-way street onto a one-way street. Many jurisdictions require one-way to one-way. Like right on red, the turn requires a complete stop as closely as practicable to the crosswalk or intersection, disappears if a sign prohibits it, and carries a duty to yield to everyone lawfully proceeding.",
        trap:
          "This is the one B.C. rule where third-party sites are usually stricter than the law - most state it as one-way onto one-way, which is narrower than what the Act says.",
        excerptKey: "mva-left-on-red-oneway",
        sourceLabel: "Motor Vehicle Act s.129 (4) (b) - red light",
        sourceUrl: mva("129"),
        commonlyMissed: true,
      },
      {
        id: "bc_s5_13",
        topic: "emergencies",
        question: "Your accelerator sticks while you are driving. After braking, what is the next step?",
        choices: [
          "Reach down and pull the pedal up with your hand",
          "Switch off the ignition immediately",
          "Pump the accelerator until it frees",
          "Shift to neutral to disconnect the engine from the wheels",
        ],
        correctIndex: 3,
        explanation:
          "Shift to neutral. It disconnects the engine from the wheels, and while it may damage the engine, that is a better outcome than a crash.",
        context:
          "Apply the brake first, look for an escape path off the road and keep braking towards it. After neutral, follow the escape path, stop, and only then switch the engine off - do not restart it, call for help instead. Be aware that once the engine stops, steering and braking both get much heavier, and turning the ignition to lock while moving will lock the steering entirely.",
        trap:
          "Never reach down with your hand to free a stuck pedal. B.C. warns you will lose control of the vehicle while your head is under the dashboard.",
        excerptKey: "stuck-gas-pedal",
        sourceLabel: "Learn to drive smart - Chapter 8, gas pedal sticking",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_14",
        topic: "safety",
        question:
          "Rain begins after three weeks of dry weather. When is the road most slippery?",
        choices: [
          "After an hour of steady rain, once the surface is saturated",
          "At the very beginning of the rainfall",
          "Only once puddles start to form",
          "The risk is the same throughout",
        ],
        correctIndex: 1,
        explanation:
          "At the start. Rain mixes with the oil that has built up on the surface to make a slippery film, and it takes continued rain to wash that away.",
        context:
          "Two consequences follow. A brief shower after a dry spell can be more dangerous than a downpour, because the film never gets rinsed off. And light rain keeps the road slippery for longer than heavy rain does. In wet conditions B.C. asks for slower speeds, more following distance, gentle braking so the wheels do not lock, and at least twice the normal braking distance.",
        trap:
          "Drivers wait out heavy rain and press on through drizzle. The oily-film effect makes that exactly the wrong way round.",
        excerptKey: "first-rain-slippery",
        sourceLabel: "Learn to drive smart - Chapter 8, rain",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_15",
        topic: "signs",
        question:
          "You are on a mountain highway and see a sign reading SLOW TRAFFIC DELAYING 5 VEHICLES MUST USE PULLOUT. What does it require?",
        choices: [
          "It advises courtesy but has no legal effect",
          "It applies only to commercial vehicles",
          "If you are delaying five or more vehicles, you must use the pullout",
          "You must stop at every pullout regardless of the traffic behind you",
        ],
        correctIndex: 2,
        explanation:
          "It is a regulatory sign. If you are the slow vehicle and five or more are stacked up behind you, you must use the pullout - it is not a matter of choice.",
        context:
          "B.C.'s mountain highways carry a family of slow-vehicle signs: pullouts a stated distance ahead, pullouts for the next stated distance, and the requirement to move into the right lane if you are driving slower than the general flow. They exist because a long queue behind a slow vehicle produces risky overtaking attempts, which is the crash the signs are there to prevent.",
        trap:
          "The count is of vehicles you are delaying, not of vehicles behind you generally. On a busy highway that number arrives faster than most drivers notice.",
        excerptKey: "regulatory-signs-offence",
        sourceLabel: "Learn to drive smart - Chapter 3, regulatory signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_16",
        topic: "rightOfWay",
        question:
          "You are exiting a roundabout and a pedestrian is stepping into the crosswalk on the exit road. What do you do?",
        choices: [
          "Continue - the pedestrian must wait for a gap",
          "Sound the horn as a warning and continue",
          "Stop in the roundabout until the crosswalk clears",
          "Yield to the pedestrian in the crosswalk you are exiting through",
        ],
        correctIndex: 3,
        explanation:
          "Yield to them. B.C. asks you to be ready to yield to pedestrians at the crosswalk on the way in and again at the crosswalk where you exit.",
        context:
          "The crosswalks at a roundabout sit set back from the circle itself for exactly this reason: it leaves a vehicle length or so of space to stop in without blocking the circulating traffic behind you. That is why B.C. tells you to sort your lane out before entering, go counter-clockwise, hold your lane, signal right before exiting, and keep clear of large vehicles that need more than their own lane.",
        trap:
          "Stopping inside the roundabout is what happens when a driver notices the pedestrian too late, and it backs traffic into the circulating lane. Look for the exit crosswalk as you commit to the exit, not after.",
        excerptKey: "roundabout-yield-ped",
        sourceLabel: "Learn to drive smart - Chapter 4, roundabouts",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_17",
        topic: "impairment",
        question:
          "You are an N driver and want to use your phone as a GPS, mounted on the dash and set before you start driving. Is that allowed?",
        choices: [
          "No - GLP drivers may not use electronic devices at all, apart from calling 9-1-1",
          "Yes, provided it is mounted and preset",
          "Yes, as long as you do not touch it while moving",
          "Only on trips longer than 30 minutes",
        ],
        correctIndex: 0,
        explanation:
          "B.C. bars drivers in the Graduated Licensing Program from hand-held AND hands-free electronic devices, and names GPS systems specifically. The only exception is calling 9-1-1 to report an emergency.",
        context:
          "The general law that applies to every driver already bans operating, viewing or holding a hand-held phone, sending or reading texts and email, holding a music or portable gaming device, and manually programming or adjusting a GPS while driving - and it applies whenever you are in control of the vehicle, including stopped at a red light. GLP drivers lose the hands-free exception on top of that.",
        trap:
          "Driving schools name this as the most misunderstood N restriction. \"Mounted and preset\" is a rule some jurisdictions use; B.C. does not extend it to L and N drivers.",
        excerptKey: "glp-no-devices",
        sourceLabel: "ICBC - Graduated licensing",
        sourceUrl: GLP,
        commonlyMissed: true,
      },
      {
        id: "bc_s5_18",
        topic: "rules",
        question:
          "You are on a divided highway with a raised median. What does the Motor Vehicle Act prohibit?",
        choices: [
          "Driving in the left lane at any time",
          "Passing on the right under any circumstances",
          "Driving over, across or within the barrier or dividing section, except at a crossover or intersection",
          "Stopping on the shoulder for any reason",
        ],
        correctIndex: 2,
        explanation:
          "You may not drive over, across or within the barrier or dividing section except at a proper crossover or intersection, and you may not drive on the left-hand roadway unless directed or permitted to.",
        context:
          "The Act defines a divided highway as one split into two roadways by a physical barrier or a clearly indicated dividing section built so it impedes traffic. That definition matters beyond the crossing rule, because the divided-highway exception to the emergency vehicle rule and to the slow-down-move-over rule both hang on it. It also means a painted median alone is not a divided highway.",
        trap:
          "A gap in the median is not automatically a crossover. Many are maintenance or emergency access points, and using one is the offence this section describes.",
        excerptKey: "mva-divided-highway",
        sourceLabel: "Motor Vehicle Act s.163 - divided highways",
        sourceUrl: mva("163"),
      },
      {
        id: "bc_s5_19",
        topic: "sharing",
        question:
          "You are behind a large truck on a rural highway and it starts to slow well before a red light without its brake lights coming on. What is happening?",
        choices: [
          "The brake lights have failed and you should warn the driver",
          "The truck is coasting in neutral",
          "The driver has lifted off to save fuel and will accelerate again",
          "The driver is using an engine retarder or gearing down, which sheds speed without the brakes",
        ],
        correctIndex: 3,
        explanation:
          "Many large vehicles have engine retarders that slow them without the service brakes, and drivers also gear down. Either way the brake lights stay dark while the truck sheds speed.",
        context:
          "That is why B.C. tells you to look well ahead and listen for a change in the engine note rather than watching the lamps. It also asks you to leave that stopping space alone: if a truck starts slowing early for a light, the driver needs all of it, and moving into the gap puts you where you can be rear-ended. Trucks take much longer to slow, so signal well ahead if you are in front of one.",
        trap:
          "Reading dark brake lights as \"still at speed\" is how a car ends up under a trailer. Judge the gap closing, not the lights.",
        excerptKey: "truck-engine-retarder",
        sourceLabel: "Learn to drive smart - Chapter 6, large vehicles",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_20",
        topic: "safety",
        question:
          "You are entering a curve on a wet rural road and realise you are carrying too much speed. What should you do?",
        choices: [
          "Ease off the accelerator and steer smoothly through, without braking",
          "Brake hard while turning the wheel",
          "Accelerate to push the vehicle through the curve",
          "Straighten the wheel and brake, then turn again",
        ],
        correctIndex: 0,
        explanation:
          "Come off the accelerator and steer smoothly. Braking mid-curve is what starts a skid, because you are asking the tyres to slow and turn at the same time on a surface with less grip than usual.",
        context:
          "The correct approach is to slow before the curve to a speed that lets you get through without braking at all, then straighten the wheel and accelerate gently from the middle. If you do start to lose traction inside a curve, come off the accelerator and reapply gently once grip returns. Inertia is pushing weight onto the outside front tyre, and braking adds to a load that is already at its limit.",
        trap:
          "Braking mid-curve is one of the four things B.C. names as making vehicles skid - along with slamming the brakes, braking and steering at once, and accelerating suddenly.",
        excerptKey: "curve-lose-traction",
        sourceLabel: "Learn to drive smart - Chapter 5, handling curves",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_21",
        topic: "signals",
        question:
          "An advance green arrow at the bottom of the regular traffic lights goes out, leaving only the round green. What may you do?",
        choices: [
          "Turn left, but yield to pedestrians and oncoming traffic first",
          "Stop and wait for the arrow to return",
          "Turn left with the same protection you had before",
          "Only go straight ahead - the left turn is now prohibited",
        ],
        correctIndex: 0,
        explanation:
          "You may still turn left on the round green, but the protection has ended. Oncoming traffic now has a green too, so you yield to it and to pedestrians before turning.",
        context:
          "This is where B.C.'s two protected-turn arrangements diverge. On a separate left-turn signal, the arrow going yellow means stop and wait for the next one. On an advance arrow built into the regular lights, the arrow simply goes out and the ordinary green-light left turn rules take over. Some advance arrows only run at peak hours, so the same intersection behaves differently at different times of day.",
        trap:
          "Assuming the protection persists is the error, and it is invited by the fact nothing appears to change - the light is still green.",
        excerptKey: "advance-green-ends",
        sourceLabel: "Learn to drive smart - Chapter 4, left-turn signals",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s5_22",
        topic: "parking",
        question: "You are parked at the curb and about to open your driver's door. What does B.C. require?",
        choices: [
          "Open the door slowly so anyone approaching can react",
          "Check the mirror and do a shoulder check before opening",
          "Sound the horn first if a bike lane is present",
          "Open it fully in one movement so it is visible",
        ],
        correctIndex: 1,
        explanation:
          "Mirror check and shoulder check before the door opens. A cyclist or another vehicle can be coming up beside you, and the door swings into exactly the space they are using.",
        context:
          "B.C. calls opening a door without checking one of the most common causes of crashes involving cyclists. The instruction belongs to a wider group of shoulder-check moments: before you pull away from the curb, before you move right, and before any change of direction or road position. Look at least 45 degrees over the shoulder on the side you are moving towards.",
        trap:
          "Opening slowly does not solve it. A cyclist arriving at 25 km/h has no time to react to a door that is already in the lane, however gently it got there.",
        excerptKey: "door-shoulder-check",
        sourceLabel: "Learn to drive smart - Chapter 5, observing behind",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_23",
        topic: "sharing",
        question:
          "You are approaching a marked crosswalk on a green light and a pedestrian who uses a walker is still part-way across. What must you do?",
        choices: [
          "Proceed - the green light gives you priority over pedestrians already crossing",
          "Wait until the crosswalk is clear before entering it",
          "Sound the horn to encourage them to hurry",
          "Pass behind them if there is room",
        ],
        correctIndex: 1,
        explanation:
          "Do not enter a crosswalk without checking it is empty, even on a green. People who cross slowly may still be in it, and it is always the driver's responsibility to avoid hitting a pedestrian.",
        context:
          "B.C.'s pedestrian yielding rules cover four situations: marked crosswalks where the pedestrian is close to your half of the road, intersections whether the crosswalk is painted or not, any turn you make, and entering a road from a driveway or alley. A pedestrian who entered on a walk signal and is still crossing when it changes has the right-of-way to finish, over all vehicles.",
        trap:
          "Passing behind a pedestrian in a crosswalk is not a manoeuvre B.C. contemplates. The crosswalk is theirs until they are out of it.",
        excerptKey: "crosswalk-check-even-on-green",
        sourceLabel: "Learn to drive smart - Chapter 6, pedestrians",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_24",
        topic: "licensing",
        question:
          "How long does the Class 5 road test take, and how does it differ from the Class 7?",
        choices: [
          "About 20 minutes, testing only highway driving",
          "About 35 minutes, the same as the Class 7",
          "About one hour, requiring a higher level of driving skill",
          "About 90 minutes, including a written component",
        ],
        correctIndex: 2,
        explanation:
          "About an hour, and it demands a higher standard than the Class 7. The Class 7 road test runs about 35 minutes.",
        context:
          "Both tests mark the same six see-think-do skills: observation, hazard perception, speed control, space margins, steering and communication. The Class 5 adds a hazard-identification element where you name the hazards you see while driving. Its manoeuvres include highway entry and exit, three-point turns, reverse stall parking, hill park and parallel park. Fail the Class 7 or Class 5 and you may try again after 14 days.",
        trap:
          "Repeat failures stretch the waits on the Class 5: 14 days after the first, 30 after the second, and 60 after three or more attempts.",
        excerptKey: "class5-road-test-hour",
        sourceLabel: "Learn to drive smart - Chapter 9, the Class 5 road test",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_25",
        topic: "emergencies",
        question:
          "Floodwater is running across the road ahead and looks about half a metre deep. What does B.C. say?",
        choices: [
          "Drive through slowly in a low gear",
          "Drive through quickly to create a bow wave",
          "Moving water deeper than half a metre can carry a car away - turn back",
          "Follow another vehicle through to gauge the depth",
        ],
        correctIndex: 2,
        explanation:
          "Half a metre of moving water can carry a car off the road. B.C. tells you to consider turning back and going another way rather than testing it.",
        context:
          "If you cannot avoid a shallower section, drive through very slowly, and afterwards apply the brakes lightly for a short distance to dry them out. Deep water can stall the engine and damage the engine or transmission outright. In extreme weather generally, B.C.'s standing advice is that staying home or taking the bus is the better option.",
        trap:
          "Following another vehicle through tells you nothing useful. A different wheelbase, ride height and weight can turn the same crossing into a very different outcome.",
        excerptKey: "deep-water-half-metre",
        sourceLabel: "Learn to drive smart - Chapter 8, deep water",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_26",
        topic: "speed",
        question:
          "You are doing 75 km/h in a posted 30 km/h school zone during school hours. What does B.C. call that?",
        choices: [
          "Ordinary speeding, with a school zone surcharge",
          "Careless driving",
          "Driving without due care and attention",
          "Excessive speeding, and the vehicle can be impounded",
        ],
        correctIndex: 3,
        explanation:
          "Excessive speeding is 40 km/h or more over the applicable speed limit. Forty-five over a 30 km/h school zone limit qualifies, and police may impound the vehicle immediately.",
        context:
          "The threshold is measured against whatever limit applies at that place and time, not against a highway default - so it is far easier to reach in a school or playground zone than on a highway. Impoundment starts at seven days and escalates to 30 or 60 days for repeat offenders, with the owner paying towing and storage. Excessive speeding convictions also trigger the Driver Risk Premium.",
        trap:
          "The trap is arithmetic. Drivers picture the 40 km/h margin against a 90 km/h highway limit and forget that a 30 km/h zone puts the line at 70.",
        excerptKey: "mva-excessive-speeding",
        sourceLabel: "Motor Vehicle Act s.148 (1) - excessive speeding",
        sourceUrl: mva("148"),
        commonlyMissed: true,
      },
      {
        id: "bc_s5_27",
        topic: "signs",
        question:
          "A red-and-white sign shows a black arrow pointing down at a diagonal on a black-and-yellow striped panel. What is it?",
        choices: [
          "An object marker, mounted on an obstruction, showing which side to pass",
          "A detour sign",
          "A one-way sign",
          "A no-entry sign for that lane",
        ],
        correctIndex: 0,
        explanation:
          "Object markers are mounted directly on obstructions and tell you which side to pass. B.C. asks you to pay special attention to them precisely because they mark a physical thing in your path.",
        context:
          "The family comes in three: keep right, keep left, and keep right or left where either side works. They appear on bridge abutments, medians, traffic islands and roadside obstructions, and at night they are often the first thing your headlights pick up. A painted island on the road surface carries a related instruction - keep to the right of it and do not drive on or over it.",
        trap:
          "Object markers are not warnings about something down the road. They are attached to the obstruction itself, so by the time you read one you are close to it.",
        excerptKey: "object-markers",
        sourceLabel: "Learn to drive smart - Chapter 3, object markers",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_28",
        topic: "rules",
        question:
          "You are in the left lane of a two-lane HOV section and need to exit right in 200 metres, but the line beside you is solid. What should you do?",
        choices: [
          "Wait for the broken lines and change lanes there, even if it means missing the exit",
          "Cross the solid line - exiting takes priority",
          "Stop on the shoulder and wait for a gap",
          "Reverse along the shoulder to the previous exit",
        ],
        correctIndex: 0,
        explanation:
          "You enter and leave a reserved lane only where the lines are broken. If the broken section comes too late for your exit, you carry on and turn around further along.",
        context:
          "B.C. treats a reserved lane as a lane with a gate rather than a lane with a rule about who is inside it. Traffic in HOV lanes often runs faster than the traffic beside it, so entering across a solid line puts you into a faster stream at an unmarked point. The same principle governs bicycle lanes: cross only where the white line is broken or to turn into or out of a driveway.",
        trap:
          "Missing an exit is an inconvenience. Crossing a solid line into or out of a reserved lane is an offence, and the reason the crossing points are marked at all.",
        excerptKey: "hov-enter-broken-lines",
        sourceLabel: "Learn to drive smart - Chapter 4, high occupancy vehicle (HOV) lanes",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_29",
        topic: "safety",
        question:
          "Which surface is most likely to be icy when the rest of the road is merely wet?",
        choices: [
          "A long straight stretch in the open",
          "A section that has just been sanded",
          "A bridge or an overpass",
          "The crown of the road",
        ],
        correctIndex: 2,
        explanation:
          "Bridges and overpasses freeze first, because cold air circulates underneath as well as above them. The rest of the road has the ground beneath it holding warmth.",
        context:
          "Two more places ice up ahead of the general surface: shaded stretches, which stay frozen after the sun has cleared everywhere else, and intersections, where exhaust and packed snow build a glaze. Black ice is the one you cannot see, and the only clue is asphalt that looks shiny and black rather than grey-white. Temperatures near freezing are more treacherous than deep cold.",
        trap:
          "A bridge deck that looks identical to the road either side of it can have completely different grip, and you meet it at whatever speed you carried onto it.",
        excerptKey: "bridges-ice-first",
        sourceLabel: "Learn to drive smart - Chapter 8, ice and snow",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_30",
        topic: "rightOfWay",
        question:
          "A pedestrian steps off the curb to cross mid-block, well away from any crosswalk, and walks into your path. What does the law say?",
        choices: [
          "The pedestrian must yield to you, but you must still exercise due care to avoid hitting them",
          "You must stop as you would at a crosswalk",
          "The pedestrian has the right-of-way anywhere on the roadway",
          "You may proceed without adjusting, since they are crossing unlawfully",
        ],
        correctIndex: 0,
        explanation:
          "A pedestrian crossing away from a crosswalk must yield to vehicles. That does not release you: the Act separately requires every driver to exercise due care to avoid colliding with a pedestrian on the highway.",
        context:
          "The two duties run together throughout B.C.'s pedestrian rules. Drivers yield in marked crosswalks and at intersections; pedestrians must not leave a curb into the path of a vehicle so close the driver cannot yield. On top of both sits the general duty of care, which includes sounding the horn when necessary and taking special precaution on seeing a child or an apparently confused or incapacitated person.",
        trap:
          "\"They were jaywalking\" is not a defence to hitting someone. The guide's own summary is that it is always the driver's responsibility to avoid hitting a pedestrian.",
        excerptKey: "mva-duty-of-driver",
        sourceLabel: "Motor Vehicle Act s.181 - duty of driver",
        sourceUrl: mva("181"),
        commonlyMissed: true,
      },
      {
        id: "bc_s5_31",
        topic: "signals",
        question:
          "You are approaching a pedestrian-activated crosswalk and someone is standing beside the button. The overhead green is flashing. What should you expect?",
        choices: [
          "Nothing - the pedestrian must wait for a gap in traffic",
          "The light will stay green until the pedestrian is on the roadway",
          "They have probably pressed the button and the light is about to change",
          "The flashing green means the crosswalk is out of service",
        ],
        correctIndex: 2,
        explanation:
          "Someone standing at that kind of crosswalk has very likely pressed the button already. B.C. tells you to slow down and be prepared to stop.",
        context:
          "This is the practical face of B.C.'s flashing green rule. The Motor Vehicle Act requires you to approach a flashing green in a way that lets you stop before the signal or any crosswalk near it if a stop becomes necessary, and to yield to pedestrians lawfully in the crosswalk. There is a matching warning sign - pedestrian activated crosswalk, prepare to stop if the light is flashing.",
        trap:
          "The flashing green looks like the most permissive signal on the pole. In B.C. it is the one that tells you a stop may be seconds away.",
        excerptKey: "crosswalk-flashing-green-warning",
        sourceLabel: "Learn to drive smart - Chapter 6, pedestrians",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s5_32",
        topic: "sharing",
        question:
          "You are driving through a construction zone at 11 p.m. and no workers are visible. What speed limit applies?",
        choices: [
          "The ordinary limit, since the crew has gone",
          "The construction limit minus 20 km/h",
          "The posted construction zone limit, which applies 24 hours a day",
          "Whatever speed the traffic around you is doing",
        ],
        correctIndex: 2,
        explanation:
          "Posted construction zone speed limits apply 24 hours a day. The absence of a visible crew changes nothing, and traffic fines are doubled inside the zone.",
        context:
          "B.C. asks you not to assume the zone is empty just because nobody is in sight - workers, equipment and traffic control persons may be beyond the next bend. More road work now happens at night because daytime traffic volumes are so high, so night construction zones are common. Obey traffic control persons, merge early to clear a lane closure, avoid changing lanes in the zone, and leave plenty of following distance.",
        trap:
          "An unmanned-looking zone still has an uneven or unpaved surface, narrowed lanes and equipment parked close to the travel lane. The limit is set for the road, not the crew.",
        excerptKey: "construction-zone-24-hours",
        sourceLabel: "Learn to drive smart - Chapter 6, construction zones",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s5_33",
        topic: "parking",
        question:
          "You have parked outside a business district on a rural road where there is a usable gravel shoulder. What does the Motor Vehicle Act require?",
        choices: [
          "Nothing more, as long as you are within 30 cm of the pavement edge",
          "Hazard lights while the vehicle is unattended",
          "A warning triangle placed behind the vehicle",
          "Get the vehicle off the roadway entirely, if it is practicable to do so",
        ],
        correctIndex: 3,
        explanation:
          "Outside a business or residence district, if it is practicable to stop or park off the roadway, you must - attended or unattended. The shoulder being usable is what makes it practicable.",
        context:
          "The Act also forbids parking so as to obstruct the free passage of traffic, anywhere. Both rules give way only when a vehicle is so disabled that leaving it temporarily on the highway is unavoidable. On a rural road with a narrow lane and no shoulder, a parked vehicle is a hazard that appears with almost no warning, which is what the section is written against.",
        trap:
          "\"Business district\" is a defined term in B.C., not a description - it means a stretch of highway 200 m long with at least 100 m of business, industrial or public frontage. Most rural stops are well outside one.",
        excerptKey: "mva-business-district",
        sourceLabel: "Motor Vehicle Act s.119 (1) - definitions",
        sourceUrl: mva("119"),
      },
      {
        id: "bc_s5_34",
        topic: "emergencies",
        question: "You are driving and the engine dies on a busy freeway. What should you do?",
        choices: [
          "Stop in the lane and wait for a break in traffic",
          "Switch the ignition off to save the battery",
          "Coast to a stop on a bridge if that is where you happen to be",
          "Signal, steer to the edge, get as far off the road as you can, and switch on the hazard lights",
        ],
        correctIndex: 3,
        explanation:
          "Signal, steer to the edge and get as far off the road as possible, then put the hazard lights on. Aim for an exit or a service area if you can reach one.",
        context:
          "Do not switch the ignition off - the steering will lock if you turn the key to lock, and power-assisted steering still works with more effort while the key is on. Avoid stopping on a bridge or in a tunnel if you can help it. Set out flares or a warning triangle if it is dark or visibility is poor, stay with the vehicle, and never get into a stranger's vehicle - ask them to phone for you instead.",
        trap:
          "Roadside repairs on a busy freeway are what B.C. tells you not to attempt. The vehicle is a shelter and a marker; standing beside it in a live lane is neither.",
        excerptKey: "engine-stops-ignition",
        sourceLabel: "Learn to drive smart - Chapter 8, engine problems",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s5_35",
        topic: "impairment",
        question:
          "A friend offers you a lift and you suspect they may be impaired. What does B.C. suggest?",
        choices: [
          "Ride along but keep them talking to stay alert",
          "Refuse the ride, and ask to be let out if you are already in the car",
          "Sit in the back where it is safer",
          "Accept if the trip is short and on quiet streets",
        ],
        correctIndex: 1,
        explanation:
          "Refuse to ride with a driver who may be impaired, and ask to be let out if you are already in the vehicle. B.C. also asks you to take a stand and not let them drive at all.",
        context:
          "The rest of the strategy is planning rather than reaction: choose a designated driver before going out, keep money aside for a bus or taxi, know you can call a friend, and learn enough about the effects of drugs and alcohol to make informed decisions. Impaired driving kills more than 100 people a year in B.C., and an average of 78 a year die in crashes involving it.",
        trap:
          "\"Short trip on quiet streets\" is the reasoning most impaired driving decisions are made on, and B.C. notes most injuries and deaths happen close to home.",
        excerptKey: "only-time-sobers",
        sourceLabel: "Learn to drive smart - Chapter 7, impairment",
        sourceUrl: GUIDE,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Set 6 · Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the shape of the real thing: no hints, mixed topics, and the same spread ICBC's 50-question knowledge test draws from - roughly one question in five about signs.",
    questions: [
      {
        id: "bc_s6_01",
        topic: "licensing",
        question:
          "You are in the L stage. What are the hours during which you may drive?",
        choices: [
          "Any time, provided your supervisor is with you",
          "6 a.m. to 10 p.m.",
          "Between 5 a.m. and midnight",
          "Daylight hours only",
        ],
        correctIndex: 2,
        explanation:
          "Between 5 a.m. and midnight. The restriction is on the L stage only and applies whether or not your supervisor is in the vehicle.",
        context:
          "The L stage stacks six restrictions: a supervisor aged 25 or over holding a valid Class 1 to 5 licence sitting beside you, zero blood alcohol and zero blood drug concentration, no hand-held or hands-free electronic devices, the L sign displayed on the back of the vehicle, no more than two passengers including the supervisor, and the 5 a.m. to midnight driving window.",
        trap:
          "Having a qualified supervisor does not suspend the hours restriction. The two rules are separate and both apply at once.",
        excerptKey: "l-driving-hours",
        sourceLabel: "Learn to drive smart - Chapter 9, learner stage driving restrictions",
        sourceUrl: GLP,
        commonlyMissed: true,
      },
      {
        id: "bc_s6_02",
        topic: "signs",
        question: "What message does a white rectangular sign with a black number and MAXIMUM carry?",
        choices: [
          "A regulatory speed limit",
          "An advisory speed for a hazard ahead",
          "The average speed of traffic on that road",
          "A minimum speed you must maintain",
        ],
        correctIndex: 0,
        explanation:
          "It is a regulatory sign setting the maximum legal speed for that stretch, applicable when the road is bare and dry and visibility is good.",
        context:
          "Advisory speeds look different and mean something different: they appear on a small yellow tab under a yellow warning sign, and they recommend a speed for a specific hazard such as a sharp curve or an exit ramp. Where nothing is posted at all, B.C.'s defaults are 50 km/h inside cities and towns, 80 km/h outside them and 20 km/h in a lane or alleyway within a municipality.",
        trap:
          "A posted maximum is a ceiling for ideal conditions, so obeying it does not make you lawful in freezing rain or fog.",
        excerptKey: "speed-sign-meaning",
        sourceLabel: "Learn to drive smart - Chapter 3, regulatory signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_03",
        topic: "safety",
        question:
          "How much space does B.C. suggest leaving when you stop behind another vehicle at an intersection?",
        choices: [
          "As little as possible, to keep the queue short",
          "Enough to see the rear tyres of the vehicle ahead touching the road",
          "Two vehicle lengths",
          "About one car length, and more behind a large vehicle",
        ],
        correctIndex: 3,
        explanation:
          "About one car length, and more when you are directly behind a large vehicle. The point is room to move if you need it.",
        context:
          "Behind a large vehicle the reason grows sharper: a heavy vehicle stopped facing uphill can roll backwards when the driver releases the brake, so B.C. asks for extra space in front of you there. In general the space in front is your escape route - somewhere to go if something develops behind you, and somewhere to be pushed into if you are rear-ended.",
        trap:
          "Closing right up feels helpful to the driver behind. It removes your only option in an intersection, which is the place you least want to be pinned.",
        excerptKey: "car-length-behind",
        sourceLabel: "Learn to drive smart - Chapter 5, steering",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_04",
        topic: "rightOfWay",
        question:
          "Two vehicles reach an intersection from different roads at approximately the same time, and no signs govern it. What does the Motor Vehicle Act require?",
        choices: [
          "Both must stop and proceed in the order they signal",
          "The vehicle on the wider road proceeds",
          "The driver must yield to the vehicle on their right",
          "The vehicle going straight proceeds",
        ],
        correctIndex: 2,
        explanation:
          "Yield to the vehicle on your right. The Act states it directly for two vehicles approaching or entering an intersection from different highways at approximately the same time where there are no yield signs.",
        context:
          "The guide describes the same situation as an uncontrolled intersection and adds the step before the tiebreaker: if one vehicle clearly arrived first, that vehicle goes. The right-hand rule settles genuine ties only. B.C. also asks you to slow down and scan an uncontrolled intersection from left to right on the approach, and to treat an unmarked T-intersection the same way.",
        trap:
          "Road width has no bearing on it. B.C. has a separate concept - a through highway - and that is created by stop signs at the entrances, not by how wide a street looks.",
        excerptKey: "mva-yield-right",
        sourceLabel: "Motor Vehicle Act s.173 (1) - yield signs",
        sourceUrl: mva("173"),
      },
      {
        id: "bc_s6_05",
        topic: "sharing",
        question:
          "You are turning right at a corner and a cyclist is riding straight through on your right. Who has priority?",
        choices: [
          "You, since a right turn is the shorter movement",
          "The cyclist - yield as you would to any other vehicle",
          "Whoever entered the intersection first",
          "You, provided you signal before turning",
        ],
        correctIndex: 1,
        explanation:
          "Yield to the cyclist. Cyclists have the same rights and responsibilities on the road as drivers, so you treat them as you would a vehicle in the lane you are crossing.",
        context:
          "The right hook is one of the crashes B.C. writes specifically against. Shoulder check for bicycles before turning right, watch for a cyclist ahead waiting to turn left when you are going straight, check for oncoming cyclists before turning left, and expect a cyclist on the through road to be arriving faster than they appear. Where you must cross a bicycle lane to turn, signal well ahead and yield first.",
        trap:
          "Signalling is not a substitute for yielding. It announces the turn; it does not create a right to make it across someone else's path.",
        excerptKey: "cyclists-same-rights",
        sourceLabel: "Learn to drive smart - Chapter 6, cyclists",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s6_06",
        topic: "rules",
        question:
          "A traffic control person at a work site signals you to stop, but the traffic light ahead is green. What do you do?",
        choices: [
          "Follow the light, since a signal outranks a person",
          "Proceed slowly past the traffic control person",
          "Stop only if you can see a hazard ahead",
          "Follow the traffic control person's directions",
        ],
        correctIndex: 3,
        explanation:
          "A traffic control person's directions govern. B.C. states it flatly: if a traffic control person is directing traffic, you must follow that person's directions.",
        context:
          "The rule extends to school crossing guards and to school students acting as members of a traffic patrol - the Act requires drivers, cyclists and pedestrians alike to obey them. In construction zones you must obey both the traffic control persons and the construction signs, from the start of the zone to the end of it, and in some zones you wait for a pilot car to escort you through.",
        trap:
          "A green light is permission from a machine that cannot see the work site. The person standing in the road can.",
        excerptKey: "traffic-control-person",
        sourceLabel: "Learn to drive smart - Chapter 4, understanding intersections",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_07",
        topic: "signals",
        question: "What does a flashing yellow light at an intersection require?",
        choices: [
          "Come to a complete stop before proceeding",
          "Stop only if the cross street has traffic",
          "Treat the intersection as a four-way stop",
          "Slow down and proceed with caution, yielding to pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "Slow down and go through with caution, yielding the right-of-way to pedestrians lawfully in the intersection or an adjacent crosswalk. It does not require a stop.",
        context:
          "Flashing red and flashing yellow map neatly onto signs: flashing red behaves like a stop sign, flashing yellow like a warning. Where a signal has failed altogether, or where all four faces are flashing, B.C. tells you to treat the intersection as a four-way stop instead. And the flashing green is the odd one out - it is a pedestrian-controlled light, not a protected turn.",
        trap:
          "Flashing yellow lights over lanes are a different system entirely. Over a single lane they mean move out of it; across all of them they mean slow down and proceed with caution.",
        excerptKey: "flashing-yellow",
        sourceLabel: "Learn to drive smart - Chapter 3, traffic lights",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_08",
        topic: "parking",
        question:
          "How far from the curb must a parked vehicle be, and on which side of the roadway?",
        choices: [
          "Within one metre, on either side",
          "Within 30 centimetres, on the right side with the right-hand wheels parallel",
          "Within 50 centimetres, on the right side only outside business districts",
          "Touching the curb, on the right side",
        ],
        correctIndex: 1,
        explanation:
          "Within 30 centimetres of the curb, on the right side of the roadway, with the right-hand wheels parallel to it. The guide and the Act give the same figure.",
        context:
          "Wider than that and you narrow the traffic lane and put your door into the space a cyclist uses. On a grade you must also turn the front wheels so the vehicle cannot roll into traffic, set the parking brake and leave the vehicle in gear. And a parked vehicle has to be locked or otherwise secured against unauthorised use.",
        trap:
          "Parking against the flow on a quiet street is still an offence, because you drove on the wrong side to get there and will pull into oncoming traffic to leave.",
        excerptKey: "parking-30cm-curb",
        sourceLabel: "Learn to drive smart - Chapter 4, parking tips and rules",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_09",
        topic: "speed",
        question: "Unless posted otherwise, what is the maximum speed on a street inside a B.C. municipality?",
        choices: ["50 km/h", "40 km/h", "60 km/h", "30 km/h"],
        correctIndex: 0,
        explanation:
          "Fifty km/h inside cities and towns when nothing is posted. Municipalities can and do post lower figures on particular streets.",
        context:
          "The three defaults are 50 km/h within cities and towns, 80 km/h outside them, and 20 km/h in a lane or alleyway within a municipality. Layered over them are the zone limits - 30 km/h in a school zone on school days between 8 a.m. and 5 p.m. or the hours posted, and 30 km/h in a playground zone every day from dawn to dusk.",
        trap:
          "The 20 km/h lane rule is the one people have never heard of, and back lanes are exactly where children and reversing vehicles are.",
        excerptKey: "default-speed-limits",
        sourceLabel: "Learn to drive smart - Chapter 5, appropriate speeds",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_10",
        topic: "emergencies",
        question:
          "A collision is unavoidable and you have a choice of what to hit. What does B.C. suggest?",
        choices: [
          "A parked car, because it will absorb the impact",
          "Something that will cushion the vehicle, such as bushes or a snow bank",
          "A tree, because it is a fixed and predictable target",
          "The centre median barrier",
        ],
        correctIndex: 1,
        explanation:
          "Steer for something that will cushion the vehicle - bushes or a high snow bank - and away from hard objects like parked cars and trees.",
        context:
          "The rest of the sequence is slow down as much as possible, try to avoid locking the brakes, and above all avoid a head-on collision by steering to the side. Steer right rather than left, because the oncoming driver is most likely to steer right as well. Use the horn: it may snap the other driver back to attention in time to matter.",
        trap:
          "Doubling your speed quadruples the force of impact, which is why the first instruction is to shed as much speed as possible before you choose anything.",
        excerptKey: "head-on-steer-right",
        sourceLabel: "Learn to drive smart - Chapter 8, collision avoidance",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_11",
        topic: "signs",
        question: "What does a broken yellow line beside a solid yellow line tell you?",
        choices: [
          "You may pass only when it is safe and the broken line is on your side",
          "Neither direction may pass",
          "Both directions may pass with caution",
          "The lane is reversible",
        ],
        correctIndex: 0,
        explanation:
          "Passing is permitted from the side the broken line is on, when it is safe. From the solid side it is not.",
        context:
          "The rest of the yellow vocabulary: broken yellow means passing is allowed when safe; double solid yellow means no passing; a single yellow line allows passing with extra caution; a double broken yellow marks a reversible lane controlled by overhead signals; and broken lines inside solid ones mark a two-way left-turn lane shared by both directions.",
        trap:
          "Which side the broken line is on changes as you drive, because the markings alternate with sight lines. Read the line each time rather than remembering the last stretch.",
        excerptKey: "broken-solid-yellow",
        sourceLabel: "Learn to drive smart - Chapter 3, yellow lines",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_12",
        topic: "safety",
        question: "Where are the most dangerous blind spots on your own vehicle?",
        choices: [
          "Directly behind, below the rear window",
          "Directly in front, below the bonnet line",
          "To the sides",
          "Above the windscreen line",
        ],
        correctIndex: 2,
        explanation:
          "The side blind spots are the dangerous ones. They are large enough to swallow a cyclist or a motorcycle completely, and they sit exactly where you move when you change lanes.",
        context:
          "Every vehicle also has smaller blind spots to the front and rear and below your field of vision, and their size depends on the shape of the vehicle. Mirrors reduce the side blind spots but never eliminate them, which is why a shoulder check of at least 45 degrees is required before any lane change or change of road position. Blind spot detectors and back-up cameras help but do not replace the head turn.",
        trap:
          "Adjusting the side mirrors outward so only a sliver of your own vehicle shows shrinks the blind spot considerably - but it does not close it.",
        excerptKey: "blind-spot-detectors",
        sourceLabel: "Learn to drive smart - Chapter 5, observing behind",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_13",
        topic: "licensing",
        question: "How long must you hold your N licence before you can take the Class 5 road test?",
        choices: [
          "12 months",
          "18 months in all cases",
          "36 months",
          "24 consecutive months without a driving prohibition",
        ],
        correctIndex: 3,
        explanation:
          "Twenty-four consecutive months without a prohibition. Completing an ICBC-approved driver training course during the learner stage can bring it down to 18, provided you stay clean through the first 18 months of the N.",
        context:
          "The whole Graduated Licensing Program runs about three years if you drive safely: the knowledge test for your L, at least 12 months as a learner, the Class 7 road test for your N, then 24 months (or 18 with approved training) before the Class 5 road test. A prohibition during the N stage resets the clock entirely - after reinstatement you need another 24 consecutive prohibition-free months.",
        trap:
          "The 18-month reduction is conditional, not automatic. A violation, prohibition or at-fault crash in the first 18 months of the N stage takes it back.",
        excerptKey: "n-24-months-full",
        sourceLabel: "ICBC - Graduated licensing",
        sourceUrl: GLP,
        commonlyMissed: true,
      },
      {
        id: "bc_s6_14",
        topic: "sharing",
        question:
          "Children have got off a school bus and it has moved on. What should you expect next?",
        choices: [
          "Nothing further - the hazard ends when the bus leaves",
          "Children may cross the road in front of where the bus was",
          "The children will wait on the verge until traffic clears",
          "The bus driver will signal you past",
        ],
        correctIndex: 1,
        explanation:
          "Children cross where the bus was, and often immediately. B.C. tells you not to move off until the bus itself moves on or its driver signals that it is safe by switching the lights off and pulling in the stop sign.",
        context:
          "The bus warns you first with alternating flashing amber lights and then holds you with alternating flashing red ones, and vehicles in all lanes must stop for the reds. Around schools generally, B.C. asks you to look well ahead for school patrols and crossing supervisors when children are arriving, leaving or on their lunch hour - and you must obey those patrols at all times.",
        trap:
          "Smaller children are harder to see than adults and far less predictable. A child who has just been dropped off is focused on getting home, not on you.",
        excerptKey: "school-bus-when-to-go",
        sourceLabel: "Learn to drive smart - Chapter 6, school buses",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_15",
        topic: "rules",
        question:
          "You are on a highway with two lanes in each direction, driving at the posted limit in the left lane. Traffic is building up behind you. What does B.C. ask?",
        choices: [
          "Move over to a right-hand lane",
          "Hold your position, since you are at the limit",
          "Increase speed to match the traffic behind",
          "Signal left to indicate you intend to stay",
        ],
        correctIndex: 0,
        explanation:
          "Move right. Driving at the limit does not entitle you to occupy the left lane - the guide says so directly, because it forces other drivers to pass on the right.",
        context:
          "On a multi-lane highway you should be in one of the right-hand lanes, particularly if you are slower than surrounding traffic or a sign tells you to keep out of the left lane. On a freeway with more than two lanes each way, the centre or right lanes are yours and the left is for higher-speed traffic and passing. B.C.'s mountain highways add regulatory pullout signs on top of this.",
        trap:
          "Passing on the right is legal on a multi-lane roadway in B.C., which is precisely why sitting in the left lane creates the hazard - the manoeuvre it forces is the less safe one.",
        excerptKey: "left-lane-not-for-cruising",
        sourceLabel: "Learn to drive smart - Chapter 4, which lane should you use?",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_16",
        topic: "impairment",
        question:
          "You are stopped at a red light in heavy traffic and pick up your phone to read a text. What is the legal position?",
        choices: [
          "Legal, because the vehicle is stationary",
          "Illegal - the law applies whenever you are in control of the vehicle",
          "Legal if the vehicle is in park",
          "Legal for messages under a certain length",
        ],
        correctIndex: 1,
        explanation:
          "The distracted driving law applies whenever you are in control of the vehicle, and B.C. names being stopped at a red light and sitting in bumper-to-bumper traffic as examples.",
        context:
          "The ban covers operating, viewing or holding a hand-held phone or communication device, sending or reading email or texts, holding a music or portable gaming device, and manually programming or adjusting a GPS. It applies to every driver in B.C. Drivers in the Graduated Licensing Program lose the hands-free exception as well - for them the only permitted use is calling 9-1-1.",
        trap:
          "The red light feels like a natural pause. Legally it is part of the drive, and enforcement at intersections is exactly where these tickets get written.",
        excerptKey: "device-law-at-red-light",
        sourceLabel: "Learn to drive smart - Chapter 7, cellphones and other devices",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s6_17",
        topic: "signals",
        question: "Under B.C. law, when must you signal a turn, and for how long?",
        choices: [
          "Only if other traffic could be affected, and for at least three seconds",
          "Continuously for enough distance beforehand to warn traffic",
          "For the final ten metres of the approach",
          "From the moment you begin to slow down",
        ],
        correctIndex: 1,
        explanation:
          "Continuously, for sufficient distance before the turn to warn traffic. The Act sets no fixed number of seconds or metres - the test is whether other road users got a real warning.",
        context:
          "The Act also requires a signal before you stop or suddenly slow down, if there is an opportunity to give one. The guide translates the statutory language into practice: be timely, so you signal early enough to be useful, and be clear, so you do not signal so far ahead that drivers cannot tell which of several driveways you mean. Make sure the signal cancels after the turn.",
        trap:
          "\"Only if traffic could be affected\" is close to the statutory wording for turning, but signalling a lane change is a flat legal requirement with no such qualifier.",
        excerptKey: "mva-signal-continuously",
        sourceLabel: "Motor Vehicle Act s.170 (2) - signals on turning",
        sourceUrl: mva("170"),
      },
      {
        id: "bc_s6_18",
        topic: "safety",
        question: "What is the correct hand position on the steering wheel in a vehicle with a driver's airbag?",
        choices: [
          "10 and 2, hands high on the rim",
          "One hand at 12, the other resting",
          "9 and 3, or even 8 and 4",
          "Both hands inside the rim for better grip",
        ],
        correctIndex: 2,
        explanation:
          "Nine and three, or even eight and four, where an airbag is fitted. At 10 and 2 an inflating airbag can throw your hands into your face.",
        context:
          "Keep both hands on the outside of the rim - hands inside it can be injured in a crash. Two hands give better control and shorten your reaction time when a hazard appears, though you will sometimes have one hand off for a gear change or a dashboard control. The seat should be at least 25 centimetres from the wheel so the airbag has room to work.",
        trap:
          "Ten and two is what an older generation was taught and it is still the answer people reach for. Airbags changed the recommendation.",
        excerptKey: "airbag-hand-position",
        sourceLabel: "Learn to drive smart - Chapter 5, controlling the wheel",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_19",
        topic: "rightOfWay",
        question:
          "You are turning left across an intersection and cannot see past a large vehicle waiting to turn left the other way. What should you do?",
        choices: [
          "Wait until you have a clear view of oncoming traffic before turning",
          "Follow the other vehicle through the turn",
          "Turn slowly so you can stop if something appears",
          "Sound your horn and complete the turn",
        ],
        correctIndex: 0,
        explanation:
          "Wait. A vehicle you cannot see past is a vision block, and turning across a lane you have not been able to check is guessing.",
        context:
          "B.C. groups vision blocks with space conflicts, surprises and poor road conditions as the four categories of hazard to look for. It also warns that two drivers turning left at the same time can create a space conflict if either moves out of correct lane position, and that where there is any doubt about who should go first, the driver making the left turn should yield.",
        trap:
          "Turning slowly does not fix it. The vehicle you cannot see is likely to be a motorcycle or a bicycle, which are both hard to spot and easy to underestimate for speed.",
        excerptKey: "doubt-left-turn-yield",
        sourceLabel: "Learn to drive smart - Chapter 5, choosing a safe gap",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_20",
        topic: "signs",
        question:
          "You see a yellow diamond showing a truck on a slope. What is it warning you about?",
        choices: [
          "A truck route begins here",
          "A weigh station ahead",
          "A steep hill ahead - slow down",
          "Trucks are prohibited beyond this point",
        ],
        correctIndex: 2,
        explanation:
          "It warns of a steep hill ahead and tells you to slow down. Being a yellow diamond, it is a warning about the road, not a rule about trucks.",
        context:
          "Read shape and colour before the picture. Yellow diamonds warn: winding road, hidden side road, curve, merging traffic, lane ends, road narrows, narrow structure, bump, slippery when wet, steep hill, roundabout ahead, signal lights ahead, deer, falling rock. Where a truck symbol appears on a white rectangle instead, you are looking at a regulation, and a red circle with a diagonal line means the movement is prohibited.",
        trap:
          "A vehicle symbol on a warning sign describes the hazard, not who the sign applies to. A steep hill warning is for everybody on the road.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Learn to drive smart - Chapter 3, warning signs",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_21",
        topic: "sharing",
        question:
          "A cyclist ahead of you moves out towards the middle of the lane. What is the most likely reason?",
        choices: [
          "They intend to turn right at the next corner",
          "They are inviting you to pass on the right",
          "Glass, a pothole or a lane too narrow to share safely",
          "They have lost control",
        ],
        correctIndex: 2,
        explanation:
          "A cyclist is entitled to move towards the middle of the lane where the right side is unsafe or the lane is too narrow to share. It is a positioning decision, not a signal to you.",
        context:
          "Cyclists in B.C. follow the same rules as drivers and have the same rights, which includes moving to the left lane to make a left turn. Give them plenty of following distance so you can avoid a rider who falls, and give an inexperienced-looking or wobbling rider more space still. When you pass, leave at least a metre, or 1.5 metres where the posted limit is above 50 km/h.",
        trap:
          "Reading lane position as a signal is a mistake B.C. warns about for motorcycles too - a rider in the left of the lane is usually making themselves visible, not preparing to turn.",
        excerptKey: "cyclist-move-out",
        sourceLabel: "Learn to drive smart - Chapter 6, cyclists",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_22",
        topic: "emergencies",
        question:
          "You are the first vehicle at the scene of a crash on a curve. What is the most useful thing to do for other drivers?",
        choices: [
          "Park close to the wreckage so it is visible",
          "Direct traffic through the scene yourself",
          "Move the damaged vehicles before anyone arrives",
          "Set out warning triangles to alert approaching traffic",
        ],
        correctIndex: 3,
        explanation:
          "Warn approaching traffic. On a curve, drivers arrive with no sight line, and the second crash is the one you can prevent.",
        context:
          "Park your own vehicle away from the crash so you do not obstruct traffic or emergency vehicles. Call for emergency services if they are needed, stay with anyone injured until help arrives, and do not let anyone smoke or light a match near the scene because of the fuel leak risk. If you are simply driving past, do not slow more than necessary and keep your attention on your own driving.",
        trap:
          "Parking close to the wreckage adds a second obstruction on a blind curve rather than making anything more visible.",
        excerptKey: "crash-no-smoking",
        sourceLabel: "Learn to drive smart - Chapter 8, assisting at a crash scene",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_23",
        topic: "rules",
        question: "When you park facing uphill on a street with no curb, which way do the front wheels go?",
        choices: [
          "To the right, so the vehicle would roll off the road",
          "To the left, towards the centre line",
          "Straight ahead",
          "Whichever way the slope falls",
        ],
        correctIndex: 0,
        explanation:
          "To the right. With no curb to catch the wheel, the aim is to steer a rolling vehicle off the road rather than into the traffic lane.",
        context:
          "Three of the four cases turn right: uphill without a curb, downhill with a curb and downhill without one. Only uphill with a curb turns left, because there the curb itself stops the vehicle. Add the parking brake and leave it in gear - park in an automatic, reverse facing downhill or first gear facing uphill or level in a manual.",
        trap:
          "A rolling or mountable curb does not count as a curb for this purpose. Uphill beside one, turn the wheels right as though there were no curb at all.",
        excerptKey: "parking-hill-wheels",
        sourceLabel: "Learn to drive smart - Chapter 4, parking tips and rules",
        sourceUrl: GUIDE,
        commonlyMissed: true,
      },
      {
        id: "bc_s6_24",
        topic: "speed",
        question:
          "A school zone sign carries a tab reading 30 km/h and 8:00 - 17:00. On a school day, when is the 30 km/h limit in force?",
        choices: [
          "All day, because the sign posts a speed",
          "Between 8 a.m. and 5 p.m.",
          "From dawn until dusk",
          "Only while children are visible",
        ],
        correctIndex: 1,
        explanation:
          "Between the hours the tab states, on school days. The statutory default is 8 a.m. to 5 p.m., and any extended times on a sign can only widen that window, never narrow it.",
        context:
          "You know you have reached the end of the zone when you can see the back of the school zone sign facing the other way. Playground zones work differently - 30 km/h every day from dawn to dusk, with no reference to school days at all. Speeding in a school zone carries its own fine and penalty points, and 40 km/h or more over the applicable limit is excessive speeding with the vehicle liable to impoundment.",
        trap:
          "Some municipalities post extended hours and some school districts run different timetables. Read the tab rather than assuming the default.",
        excerptKey: "mva-school-zone-30",
        sourceLabel: "Motor Vehicle Act s.147 (1) - schools and playgrounds",
        sourceUrl: mva("147"),
      },
      {
        id: "bc_s6_25",
        topic: "signals",
        question:
          "You are turning right at a red light and a pedestrian is crossing the street you are turning into. What must you do?",
        choices: [
          "Yield to the pedestrian before completing the turn",
          "Complete the turn ahead of them, since you stopped first",
          "Sound the horn to alert them",
          "Wait only if they are already past the centre line",
        ],
        correctIndex: 0,
        explanation:
          "Yield. The right-on-red permission comes with an express duty to give way to all pedestrians and vehicles lawfully proceeding as directed by the signal.",
        context:
          "The permission itself has two conditions before you even reach the yielding duty: a complete stop as closely as practicable to the crosswalk or intersection, and no sign at the intersection prohibiting the turn. The same structure applies to a left on red onto a one-way street. B.C. also asks you to watch for pedestrians on the cross street whenever you turn, on any signal.",
        trap:
          "Turning right, drivers look left for a gap and turn into pedestrians on their right. That is the geometry that makes this the classic right-on-red collision.",
        excerptKey: "mva-right-on-red",
        sourceLabel: "Motor Vehicle Act s.129 (3) - red light",
        sourceUrl: mva("129"),
      },
      {
        id: "bc_s6_26",
        topic: "licensing",
        question:
          "What happens on ICBC's knowledge test when you have answered enough questions correctly to pass?",
        choices: [
          "You must still answer all 50 questions",
          "The test ends",
          "The remaining questions are marked correct automatically",
          "You are offered a longer version for a higher grade",
        ],
        correctIndex: 1,
        explanation:
          "The test ends. ICBC's tip sheet says it completes as soon as you have answered enough questions correctly to pass, or exceeded the number of wrong answers allowed.",
        context:
          "The passenger vehicle test is 50 questions with 40 correct to pass and 45 minutes allowed. You may skip a difficult question once and it comes back at the end. No talking, study materials or electronic devices of any kind are permitted, and using any of them means an automatic fail plus a wait before your next attempt. The test is available in a dozen languages and audio can be played.",
        trap:
          "The early finish cuts both ways. Once you have got 11 wrong you cannot reach 40 correct, and the test stops there too.",
        excerptKey: "test-ends-early",
        sourceLabel: "ICBC - Before you take your knowledge test",
        sourceUrl: TIPSHEET,
      },
      {
        id: "bc_s6_27",
        topic: "safety",
        question:
          "A child's ball rolls into the residential street ahead of you. What should you do?",
        choices: [
          "Sound the horn and continue",
          "Steer around it without changing speed",
          "Stop, retrieve it, and return it",
          "Slow down and prepare to stop, because a child is likely to follow",
        ],
        correctIndex: 3,
        explanation:
          "The ball is the warning. B.C. tells you that a ball or a hockey net means children are nearby, and a child chasing a ball is not looking for traffic.",
        context:
          "Residential streets are where B.C. asks for the most active observation: children and others move in unpredicted ways, and parked cars hide people until the moment they step out. Look for a child walking out from between parked vehicles, and be especially careful reversing - check around the vehicle before you get into it and do a 360-degree check before moving.",
        trap:
          "Sounding the horn can make it worse. A child who looks up towards the sound may keep running while doing it.",
        excerptKey: "backing-360-check",
        sourceLabel: "Learn to drive smart - Chapter 6, pedestrians",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_28",
        topic: "impairment",
        question:
          "How long does Transport Canada say it takes the body to return to zero from a blood alcohol content of .08?",
        choices: ["About two hours", "About four hours", "About eight hours", "About six hours"],
        correctIndex: 3,
        explanation:
          "About six hours. That is elimination time, and nothing you eat, drink or do speeds it up - only time lowers your BAC.",
        context:
          "The figure explains the morning-after problem: a heavy evening can leave you over the limit well into the next day. B.C. adds that a glass of beer holds about as much alcohol as a glass of wine or an average cocktail, and that even small amounts can impair some drivers. For anyone in the Graduated Licensing Program the limit is zero, so the elimination clock matters even more.",
        trap:
          "Feeling fine is not evidence of anything. Alcohol makes drivers think their mental ability is sharp while they are already unable to make sound driving decisions.",
        excerptKey: "bac-08-six-hours",
        sourceLabel: "Learn to drive smart - Chapter 7, facts about alcohol",
        sourceUrl: GUIDE,
      },
      {
        id: "bc_s6_29",
        topic: "signs",
        question: "What is a white sign with a black upward arrow and a red slash through a right-turn arrow?",
        choices: [
          "A prohibition - the movement shown is not permitted",
          "A permitted action shown in the negative",
          "A warning that the movement is hazardous",
          "An advisory that applies only at peak hours",
        ],
        correctIndex: 0,
        explanation:
          "A red circle with a diagonal line through a symbol shows an action that is not permitted. Ignoring a regulatory sign is an offence under the Motor Vehicle Act.",
        context:
          "The grammar is worth more than memorising individual signs. A green circle around a symbol shows a permitted action, and a red circle with a diagonal line shows a prohibited one. That covers signs you have never seen - no right turn on red, no U-turns, no bicycle riding beyond this point. The Act reinforces it: where a device indicates a movement is prohibited, driving in that movement is itself the offence.",
        trap:
          "Some prohibition signs carry a time tab beneath them, such as no right turns during posted times. The prohibition then applies in those hours and not otherwise - read the tab.",
        excerptKey: "mva-obey-traffic-devices",
        sourceLabel: "Motor Vehicle Act s.161 (b) - obedience to traffic control devices",
        sourceUrl: mva("161"),
      },
      {
        id: "bc_s6_30",
        topic: "rules",
        question:
          "You are on a freeway exit ramp. When should you begin slowing down?",
        choices: [
          "As soon as you signal, while still in the through lane",
          "Halfway along the exit lane",
          "After you have entered the exit lane",
          "Not at all - let the ramp's curve slow you",
        ],
        correctIndex: 2,
        explanation:
          "Hold your speed until you are in the exit lane, then slow gradually. Braking while still in the through lane puts you in the path of traffic travelling at freeway speed.",
        context:
          "Signal your intention first, then move across, then decelerate as you prepare for the lower-limit roads ahead. B.C. asks you to check your route before you set out so you can move to the right lane in plenty of time - most freeway exits are numbered. The mirror-image rule applies on entry: use the acceleration lane to match speed before you merge.",
        trap:
          "Slowing early is the reflex that feels careful and creates the hazard, because the vehicle behind you is still doing freeway speed and did not expect the gap to close.",
        excerptKey: "exit-lane-speed",
        sourceLabel: "Learn to drive smart - Chapter 4, highway or freeway entrances and exits",
        sourceUrl: GUIDE,
      },
    ],
  },
];
