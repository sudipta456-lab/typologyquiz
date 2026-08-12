import type { DrivingTestSet } from "../types";

// Ontario G1 practice sets 4-6 — the hard end of the ladder.
//
// Every item is written from scratch to test a rule found in the Official MTO
// Driver's Handbook. No handbook sentence is reproduced, and no question from a
// real or commercial test appears here. Explanations, context and trap notes are
// ours; the sourceUrl is the deep link to the government page that governs.
//
// The real G1 is scored as two independent halves — road signs and rules of the
// road — so these sets carry a heavy signs/signals load throughout, and set 6
// splits exactly 20/20.

const H = "https://www.ontario.ca/document/official-mto-drivers-handbook";
const ON = "https://www.ontario.ca/page";

export const ontarioSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Set 4 — Real exam pressure",
    difficulty: "medium",
    description:
      "Forty questions pitched at the difficulty of the real thing. Signs and signals make up close to half, exactly as the G1 does, and the rules items lean on the numbers people skim past.",
    questions: [
      {
        id: "on_s4_01",
        topic: "signs",
        question:
          "A five-sided sign shaped like the outline of a house, coloured fluorescent yellow-green with black symbols, stands beside the road. What is it telling you?",
        choices: [
          "Children may be waiting at a school bus stop you cannot see yet",
          "You are entering a school area — reduce speed and watch for children",
          "A pedestrian crossover is painted on the road directly ahead",
          "A playground sits on a dead-end street to your right",
        ],
        correctIndex: 1,
        explanation:
          "Ontario gives school warnings their own shape and their own colour. The five-sided pentagon in fluorescent yellow-green is used for school areas and school crossings and nothing else, so the shape alone answers the question before you read the symbol.",
        context:
          "Sign shape carries meaning in Ontario, independent of what is drawn on it. Octagon is stop, inverted triangle is yield, diamond is a warning, rectangle is usually regulatory or informational, and the five-sided pentagon is reserved for schools. The fluorescent yellow-green colour is a second layer of the same signal — it appears on school and pedestrian-related warnings so they stand out from ordinary yellow. Learn the shape-and-colour pairs and you can answer sign questions you have never seen the artwork for.",
        trap:
          "The hidden school bus stop warning is the tempting miss — it does involve children and schools, but it is a yellow diamond, not a yellow-green pentagon.",
        excerptKey: "school-zone-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s4_02",
        topic: "licensing",
        question:
          "Zubin holds a G1 and wants to practise on a city street. Which person may legally sit beside him as his accompanying driver?",
        choices: [
          "His cousin, who has held a G2 for four years and has had nothing to drink",
          "A neighbour who has held a full G for five years but is currently under suspension",
          "A friend who has held a full G licence for two years and has had nothing to drink",
          "His aunt, who has held a full G licence for six years and whose blood alcohol is under .05",
        ],
        correctIndex: 3,
        explanation:
          "The accompanying driver has to clear three separate bars at once: a valid Class G or higher licence, at least four years of driving experience, and a blood alcohol level below .05. Only the aunt clears all three.",
        context:
          "A G1 driver is never alone in the car. The person in the front passenger seat is legally part of the driving arrangement, which is why the requirements are stacked rather than optional. Time spent holding a G2 does count toward the four years of experience, but the person supervising must have progressed to a full G by now — a current G2 holder cannot supervise no matter how long they have held it. A suspended licence is not a valid licence, so length of experience becomes irrelevant.",
        trap:
          "The friend with two years on a full G looks fine because the licence class is right — but experience is a separate requirement, and two years is half of what the law asks.",
        excerptKey: "g1-accompanying-driver",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Getting your driver's licence",
        sourceUrl: `${H}/getting-your-drivers-licence`,
      },
      {
        id: "on_s4_03",
        topic: "signals",
        question: "The green ball facing you is flashing on and off. What does that permit?",
        choices: [
          "You may go straight, turn right, or turn left, because oncoming traffic is being held at a red",
          "You may proceed only after coming to a full stop, the same as a flashing red",
          "You may go straight or turn right, but you must yield before turning left",
          "The signal has failed, so treat the intersection as an all-way stop",
        ],
        correctIndex: 0,
        explanation:
          "A flashing green is an advance green. It gives your approach the intersection to itself for a few seconds, so a left turn can be made without waiting for a gap.",
        context:
          "Ontario shows the advance phase two ways: a flashing green ball, or a green left arrow displayed alongside a green ball. Both mean the same thing — every movement from your side of the intersection is permitted and the drivers facing you have a red. Once the flashing stops and you have a steady green, oncoming traffic is moving again and a left turn goes back to being a yield-and-wait manoeuvre. Nothing about a flashing green removes your duty to check for pedestrians already in the crosswalk.",
        trap:
          "Flashing red and flashing green look like a matched pair, so people carry the stop-first rule across. Flashing on a green ball adds permission; flashing on a red adds a stop.",
        excerptKey: "advance-green",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Traffic lights",
        sourceUrl: `${H}/traffic-lights`,
      },
      {
        id: "on_s4_04",
        topic: "rightOfWay",
        question:
          "Two cars reach an all-way stop at exactly the same moment, on roads that meet at a right angle. Who proceeds first?",
        choices: [
          "Whichever driver signals first",
          "The driver on the left",
          "The driver on the right",
          "Whichever driver is going straight through",
        ],
        correctIndex: 2,
        explanation:
          "Order of arrival settles almost every all-way stop. When arrival is genuinely simultaneous there is no order to use, so the tie goes to the vehicle on the right and the driver on the left waits.",
        context:
          "Think of an all-way stop as a queue. The first vehicle to come to a complete stop is first in line, the second is next, and so on. The right-hand rule is only a tiebreaker for the rare case where two drivers stop together. That same tiebreaker also governs an intersection with no signs or lights at all. Being the bigger vehicle, going straight, or already having your signal on gives you nothing.",
        trap:
          "Going straight feels like it should outrank turning, and at many intersections it practically does — but Ontario's rule is about position and timing, not about which way you are headed.",
        excerptKey: "all-way-stop",
        sourceLabel: "Official MTO Driver's Handbook — Driving through intersections",
        sourceUrl: `${H}/driving-through-intersections`,
      },
      {
        id: "on_s4_05",
        topic: "signs",
        question: "You see a diamond-shaped sign with an orange background. What category is it?",
        choices: [
          "An information sign pointing to nearby services",
          "A regulatory sign that carries a doubled fine",
          "Temporary conditions, such as construction or maintenance work",
          "A permanent hazard built into the road",
        ],
        correctIndex: 2,
        explanation:
          "Colour separates the two diamond families. Orange means the condition is temporary — work crews, surveyors, lane closures, detours — while yellow means a hazard that is a permanent feature of that stretch of road.",
        context:
          "Diamonds always warn, but the background tells you how long the warning lasts. Orange diamonds go up when something has changed and will change back: roadwork, a survey crew, milled pavement, a traffic control person ahead. Yellow diamonds describe the road as built: a curve, a hill, a railway crossing, a deer corridor. Reading the colour first tells you whether the hazard will still be there next month.",
        trap:
          "Construction zones do carry doubled speeding fines when workers are present, but that is a separate rectangular regulatory sign — the orange diamond itself is only a warning.",
        excerptKey: "temporary-condition-signs",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s4_06",
        topic: "speed",
        question:
          "You are on a residential street inside a city and there is no speed limit sign anywhere in sight. What is the fastest you may legally travel?",
        choices: ["50 km/h", "60 km/h", "80 km/h", "40 km/h"],
        correctIndex: 0,
        explanation:
          "Where nothing is posted inside a city, town or village, the default maximum is 50 km/h. The absence of a sign is not an absence of a limit.",
        context:
          "Ontario runs two default limits. Inside built-up areas — cities, towns, villages — it is 50 km/h. Outside them it is 80 km/h. A posted sign overrides the default in either direction, which is how you get 40 km/h residential streets and 60 km/h arterials. Separately, every limit is a maximum for ideal conditions, not a target: rain, snow, traffic and construction all oblige you to drive slower than the number on the sign.",
        trap:
          "Plenty of city streets are posted at 40, so 40 feels like the residential default. It is only the limit where a sign says so.",
        excerptKey: "default-speed-limits",
        sourceLabel: "Official MTO Driver's Handbook — Driving along",
        sourceUrl: `${H}/driving-along`,
      },
      {
        id: "on_s4_07",
        topic: "signs",
        question: "A large white X-shaped sign outlined in red stands at the roadside. What does it mark?",
        choices: [
          "A crossroads with limited visibility",
          "A pedestrian crossover",
          "The end of a divided highway",
          "A railway crossing",
        ],
        correctIndex: 3,
        explanation:
          "The red-and-white X, called a crossbuck, is the standard marker at every public-road railway crossing in Ontario.",
        context:
          "Railway crossings are signed in layers. A yellow diamond well back gives advance warning and shows the angle at which the tracks cut across. At the crossing itself stands the crossbuck, sometimes with flashing signals and a gate, and often a white X painted on the pavement. If a train is coming you stop at least five metres from the nearest rail or gate, and you never drive around a gate that is down, dropping or lifting.",
        trap:
          "A painted X on the road surface also appears at pedestrian crossovers, which sends people to the crossover answer. The crossbuck's shape and its red outline belong to railways only.",
        excerptKey: "railway-crossing-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s4_08",
        topic: "safety",
        question:
          "On a dry road in good conditions, how much space should you keep between you and the vehicle ahead?",
        choices: [
          "One car length for every 10 km/h of speed",
          "At least two seconds of travel time",
          "A fixed 30 metres at any speed",
          "Three car lengths, whatever your speed",
        ],
        correctIndex: 1,
        explanation:
          "Ontario measures following distance in time, not length. Pick a fixed object ahead, and if you reach it less than two seconds after the vehicle in front cleared it, you are too close.",
        context:
          "A time gap works at every speed because the distance it represents scales automatically — two seconds at 100 km/h is far more pavement than two seconds at 40. The two-second figure assumes everything is in your favour. Add time when the road is wet or icy, when you are behind a motorcycle or a large truck whose stopping behaviour differs from yours, when you are carrying a heavy load, and whenever your own attention is stretched.",
        trap:
          "Car-length rules feel precise and are widely taught elsewhere, but they collapse at highway speed and are not what Ontario asks you to use.",
        excerptKey: "following-distance",
        sourceLabel: "Official MTO Driver's Handbook — Driving along",
        sourceUrl: `${H}/driving-along`,
      },
      {
        id: "on_s4_09",
        topic: "sharing",
        question:
          "You are coming up behind a school bus and its upper red lights start flashing. How close may you get before you must be fully stopped?",
        choices: [
          "No closer than 30 metres",
          "No closer than 5 metres",
          "No closer than 10 metres",
          "No closer than 20 metres",
        ],
        correctIndex: 3,
        explanation:
          "Approaching from behind, you must be stopped at least 20 metres back. That leaves children room to walk around the bus without a vehicle looming over them.",
        context:
          "The bus signals in two stages. Flashing amber lights mean it is about to stop, so you slow and prepare. Flashing red lights with the stop arm out mean traffic stops. Behind the bus, everyone stops at 20 metres and holds until the lights stop flashing and the arm folds in. Failing to stop draws six demerit points and a fine starting at $400 on a first offence, and the registered owner can be charged when camera evidence identifies the vehicle.",
        trap:
          "Five metres is a real Ontario number, but it belongs to railway crossings. Different hazard, different distance.",
        excerptKey: "school-bus-20-metres",
        sourceLabel: "Official MTO Driver's Handbook — Stopping",
        sourceUrl: `${H}/stopping`,
      },
      {
        id: "on_s4_10",
        topic: "signs",
        question:
          "A curbside sign prohibits parking. May you pull in there for a moment to let a passenger out?",
        choices: [
          "Only if you stay behind the wheel with the engine running",
          "Yes — a no-parking sign still allows a brief stop to load or unload people or goods",
          "No — where parking is banned, a stop of any length is banned too",
          "Yes, but only outside the hours shown on the sign",
        ],
        correctIndex: 1,
        explanation:
          "No parking is the mildest of the three curbside prohibitions. It bans leaving the vehicle there, but a genuine stop to pick up or drop off passengers or merchandise is still allowed.",
        context:
          "The three signs form a ladder. No parking is the loosest: brief stops for people or goods are fine. No standing is tighter: you may stop for passengers, but not to load merchandise. No stopping is absolute — you may not halt there even for a second, for any reason. The signs look almost identical at a glance, which is exactly why the wording matters more than the artwork.",
        trap:
          "People read all three as the same blanket ban. Treating a no-parking sign as a no-stopping sign is the safe mistake, but it is still the wrong answer.",
        excerptKey: "no-parking-sign",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s4_11",
        topic: "parking",
        question: "How much clearance must you leave when parking near a fire hydrant?",
        choices: ["At least 9 metres", "At least 15 metres", "At least 3 metres", "At least 5 metres"],
        correctIndex: 2,
        explanation:
          "Three metres. It is the smallest of the parking clearances, which is part of why it slips out of memory under test conditions.",
        context:
          "Ontario's parking clearances are a short list worth memorising as a set: three metres from a hydrant, nine metres from an intersection, fifteen metres from an intersection controlled by traffic lights, fifteen metres from the nearest rail of a railway crossing, six metres from the public entrance of a hotel, theatre or public hall while it is open, and no parking on or within 100 metres of a bridge. On top of the list, never park where drivers cannot see at least 125 metres in both directions.",
        trap:
          "Nine and fifteen metres both belong to intersections. Pulling one of those numbers across to the hydrant is the usual slip.",
        excerptKey: "parking-hydrant",
        sourceLabel: "Official MTO Driver's Handbook — Parking along roadways",
        sourceUrl: `${H}/parking-along-roadways`,
      },
      {
        id: "on_s4_12",
        topic: "signals",
        question: "The line immediately to the left of your lane is solid yellow. What does it tell you?",
        choices: [
          "Passing here is unsafe, so stay in your lane",
          "You may pass, provided nothing is oncoming",
          "The road ahead becomes one-way",
          "You are entering a construction zone",
        ],
        correctIndex: 0,
        explanation:
          "Yellow separates traffic moving in opposite directions. A solid yellow on your side of that pair means the sight lines do not allow a safe pass, so you stay put.",
        context:
          "Read the line on your own side of the centre. Broken yellow beside your lane means passing is permitted when the way is clear. Solid yellow beside your lane means it is not. On a road where one direction can pass and the other cannot, you will see a solid line and a broken line together — and the one that applies to you is the nearer one. White lines, by contrast, separate traffic going the same way.",
        trap:
          "Judging the pass on whether you can see oncoming traffic is exactly the habit the solid line exists to override. The line is the answer, not your view.",
        excerptKey: "solid-line-no-passing",
        sourceLabel: "Official MTO Driver's Handbook — Pavement markings",
        sourceUrl: `${H}/pavement-markings`,
      },
      {
        id: "on_s4_13",
        topic: "rules",
        question: "Unless a sign forbids it, what must happen before you turn right on a red light?",
        choices: [
          "You must stop only if a vehicle is approaching",
          "You must come to a complete stop and wait until the way is clear",
          "You may roll through as long as nobody is on the crosswalk",
          "You must wait for the light to turn green",
        ],
        correctIndex: 1,
        explanation:
          "A right on red is a stop first, then a yield. The stop has to be complete, and you go only once the intersection and crosswalk are genuinely clear.",
        context:
          "Right on red is permission, not priority. Cross traffic has a green and pedestrians may have a walk signal, so everyone gets to go before you do. A posted no-right-turn-on-red sign cancels the permission entirely at that approach. The same stop-then-yield logic covers the one other red-light turn Ontario allows: a left turn from a one-way road onto another one-way road.",
        trap:
          "The rolling stop is the classic answer people give from experience rather than from the rulebook. Slowing is not stopping.",
        excerptKey: "right-turn-on-red",
        sourceLabel: "Official MTO Driver's Handbook — Traffic lights",
        sourceUrl: `${H}/traffic-lights`,
      },
      {
        id: "on_s4_14",
        topic: "impairment",
        question: "What blood alcohol level is a G1 driver permitted to have behind the wheel?",
        choices: [
          "Under .05",
          "Under .08",
          "Under .05, provided an accompanying driver is present",
          "Zero",
        ],
        correctIndex: 3,
        explanation:
          "Zero, with no allowance of any kind. The limit that applies to fully licensed adults is irrelevant to a novice driver.",
        context:
          "Ontario runs a zero-tolerance rule for every novice driver at G1 and G2, and separately for every driver aged 21 and under regardless of licence class. The accompanying driver beside a G1 is held to a different standard — under .05 — because they are supervising rather than driving. Breaking a graduated licensing condition brings a 30-day suspension on conviction, and repeat occurrences escalate from there.",
        trap:
          "The .05 figure is genuinely in the handbook, which makes it feel right — but it is the ceiling for the accompanying driver, not for the G1 at the wheel.",
        excerptKey: "g1-zero-bac",
        sourceLabel: "Official MTO Driver's Handbook — Getting your driver's licence",
        sourceUrl: `${H}/getting-your-drivers-licence`,
      },
      {
        id: "on_s4_15",
        topic: "signs",
        question:
          "A white diamond is painted in the leftmost lane of a 400-series highway, with matching diamond signs overhead. Who may use that lane?",
        choices: [
          "Vehicles carrying at least two people, including the driver",
          "Vehicles carrying at least three people, including the driver",
          "Any vehicle, as long as it is overtaking",
          "Buses and commercial vehicles only",
        ],
        correctIndex: 0,
        explanation:
          "Ontario's high occupancy vehicle lanes run on a two-person minimum, and the driver counts as one of the two.",
        context:
          "HOV lanes on provincial highways are marked by a diamond on the pavement, diamond signs above the leftmost lane, and a striped buffer zone separating them from general traffic. You enter and leave only where the buffer breaks into a broken white line — crossing the stripes is both unsafe and an offence. A short list of vehicles may use the lane with the driver alone: buses, licensed taxis and airport limousines, emergency vehicles, motorcycles, and vehicles with green plates.",
        trap:
          "Three occupants is the rule in several other jurisdictions and gets imported by drivers who learned elsewhere. In Ontario, two is enough.",
        excerptKey: "hov-lane-sign",
        commonlyMissed: true,
        sourceLabel: "Ontario.ca — High occupancy vehicle (HOV) lanes",
        sourceUrl: `${ON}/high-occupancy-vehicle-hov-lanes`,
      },
      {
        id: "on_s4_16",
        topic: "emergencies",
        question: "After a collision, at what point does the law require you to call police?",
        choices: [
          "Only when a vehicle has to be towed away",
          "Whenever any damage at all has occurred",
          "When anyone is injured, or damage appears to exceed $5,000",
          "When damage appears to exceed $2,000, injuries or not",
        ],
        correctIndex: 2,
        explanation:
          "Injury of any kind triggers a police report, and so does apparent damage above $5,000 to vehicles or other property.",
        context:
          "Below the threshold and with nobody hurt, you are still legally obliged to exchange information with the other driver — name, address, licence, plate and insurance details — and it is sensible to photograph the scene and note witnesses. The dollar figure is an estimate of total damage across everything involved, not just your own car, which is why modest-looking collisions often clear it. Move drivable vehicles clear of traffic before sorting any of this out.",
        trap:
          "The $2,000 figure was Ontario's threshold for years and is still repeated everywhere. It has been raised, and the current number is $5,000.",
        excerptKey: "collision-report-5000",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Dealing with emergencies",
        sourceUrl: `${H}/dealing-emergencies`,
      },
      {
        id: "on_s4_17",
        topic: "signs",
        question:
          "An orange triangle with a wide red border is mounted on the back of the vehicle ahead. What is it telling you?",
        choices: [
          "That vehicle is oversized and may cross the centre line",
          "That vehicle is being driven by a student driver",
          "That vehicle travels at 40 km/h or less",
          "That vehicle is carrying dangerous goods",
        ],
        correctIndex: 2,
        explanation:
          "The slow-moving vehicle sign marks anything that cannot sustain more than 40 km/h — farm tractors, road-building equipment, horse-drawn vehicles.",
        context:
          "The point of the sign is closing speed. If you are travelling at 80 km/h and the vehicle ahead is doing 20, the gap shuts far faster than your eyes estimate, and rear-end collisions with farm equipment are a real rural pattern. When you see the triangle, slow early, look well past the vehicle before considering a pass, and remember that wide equipment may need most of the road at driveways and field entrances.",
        trap:
          "Dangerous-goods placards are also bright rectangles on the back of slow vehicles, but they are diamond-shaped and numbered. Shape settles it.",
        excerptKey: "slow-moving-vehicle-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s4_18",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping-plaza driveway onto a city street. Who has the right of way?",
        choices: [
          "Traffic already on the street and pedestrians on the sidewalk — you yield to both",
          "You do, once your front bumper has crossed the sidewalk",
          "Traffic on the street only; pedestrians must wait for vehicles",
          "Whoever reaches the sidewalk line first",
        ],
        correctIndex: 0,
        explanation:
          "A vehicle entering the road from a private road or driveway yields to everything already using the road, and to anyone walking across the driveway on the sidewalk.",
        context:
          "The principle is that traffic already established on a route keeps it. That is why you yield when entering from a driveway, a parking lot or a private road, and why the same logic governs merging onto a freeway and entering a roundabout. Sidewalks count: pedestrians crossing the mouth of the driveway have priority over you, and creeping forward until they stop walking does not transfer it.",
        trap:
          "Nosing out until the sidewalk is behind you feels like it establishes your claim. It does not — it just puts you in the pedestrians' path.",
        excerptKey: "driveway-yield",
        sourceLabel: "Official MTO Driver's Handbook — Driving through intersections",
        sourceUrl: `${H}/driving-through-intersections`,
      },
      {
        id: "on_s4_19",
        topic: "signals",
        question:
          "While you wait to turn, the pedestrian signal across the intersection changes to a flashing hand with a countdown. What does that mean for people on foot?",
        choices: [
          "Everyone in the crosswalk must turn back to the curb at once",
          "Pedestrians may still start crossing until the counter reaches zero",
          "The crossing is closed and pedestrians must use the next intersection",
          "Anyone who has not started should wait; those already crossing have the time shown to finish",
        ],
        correctIndex: 3,
        explanation:
          "The flashing hand closes the crossing to new starters while guaranteeing enough time for anyone already out in the road to reach the far side.",
        context:
          "Three displays cover the whole sequence. The walking figure means it is safe to begin. The flashing hand, with or without a countdown, means do not start but finish if you have. The steady hand means stay on the curb. For a driver, the flashing hand is the signal to expect people still in your turning path even though your own light may already be green — you wait for them regardless of what the numbers say.",
        trap:
          "Reading the countdown as time still available to begin is the common misreading, and it puts drivers turning across the crosswalk in exactly the wrong frame of mind.",
        excerptKey: "pedestrian-signals",
        sourceLabel: "Official MTO Driver's Handbook — Pedestrian signals",
        sourceUrl: `${H}/pedestrian-signals`,
      },
      {
        id: "on_s4_20",
        topic: "licensing",
        question: "Between which hours is a G1 driver barred from driving at all?",
        choices: ["1 a.m. to 5 a.m.", "Midnight to 5 a.m.", "11 p.m. to 6 a.m.", "Midnight to 6 a.m."],
        correctIndex: 1,
        explanation:
          "Midnight to five in the morning, with no exception for having an accompanying driver aboard.",
        context:
          "The G1 curfew is absolute, unlike the G2's night rule which limits passengers rather than driving itself. The other G1 conditions run alongside it: zero blood alcohol, a qualified accompanying driver in the front passenger seat, a working seatbelt for every occupant, and no driving on 400-series highways posted above 80 km/h or on the QEW, Don Valley Parkway, Gardiner Expressway, E.C. Row Expressway or Conestoga Parkway. The highway ban lifts only when a licensed driving instructor is supervising.",
        trap:
          "Midnight to 6 a.m. is the shape most people half-remember, because curfews elsewhere often run to dawn. Ontario's ends at five.",
        excerptKey: "g1-midnight-to-five",
        sourceLabel: "Official MTO Driver's Handbook — Getting your driver's licence",
        sourceUrl: `${H}/getting-your-drivers-licence`,
      },
      {
        id: "on_s4_21",
        topic: "signs",
        question:
          "A row of yellow signs, each showing one large arrowhead pointing left, is posted along the outside of a bend. What are they for?",
        choices: [
          "To mark where a passing lane begins",
          "To show that the road ahead is one-way",
          "To route traffic around a closed lane",
          "To guide drivers around a sharp curve",
        ],
        correctIndex: 3,
        explanation:
          "Chevrons are posted in groups precisely so the line of them traces the shape of the curve for you, especially at night when the road edge is hard to read.",
        context:
          "A curve is usually signed twice. A yellow diamond well before it announces the bend and often carries a smaller tab with an advisory speed. The chevrons then sit in the curve itself, one after another, giving you a continuous reference for how tightly it turns. If the chevrons keep coming, the curve keeps going — that is the information a single sign cannot give you.",
        trap:
          "Detour arrows also point the way around something, but those are orange and belong to the temporary-conditions family.",
        excerptKey: "chevron-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s4_22",
        topic: "sharing",
        question: "When you overtake a cyclist, how much room does the law ask you to leave?",
        choices: ["A full lane width, always", "One metre, where practical", "Half a metre", "Two metres"],
        correctIndex: 1,
        explanation:
          "One metre of lateral space between your vehicle and the cyclist, wherever it is practical to give it. Failing to do so brings a fine and two demerit points.",
        context:
          "One metre is the floor, not the goal — a cyclist may swerve for a pothole, a grate or a car door without warning, and gusts from a passing vehicle destabilise them further. If the lane is too narrow to leave a metre, the correct move is to wait behind until the road opens rather than squeeze past. Bike lanes are for cyclists; you enter one only to complete a turn, and you check your mirror and shoulder for a cyclist before opening any door on the traffic side.",
        trap:
          "Half a metre feels generous from behind the wheel because it looks like plenty of space through a windscreen. The measured requirement is double that.",
        excerptKey: "cyclist-one-metre",
        sourceLabel: "Official MTO Driver's Handbook — Sharing the road with other road users",
        sourceUrl: `${H}/sharing-road-other-road-users`,
      },
      {
        id: "on_s4_23",
        topic: "signs",
        question:
          "Ahead of you, facing you head-on, is a large sign showing an arrow on a black-and-yellow checkerboard background. What should you do?",
        choices: [
          "Carry on — it marks a school bus turning area",
          "Move left — the right lane is ending",
          "Slow down — the road changes direction sharply and you must follow the arrow",
          "Stop — the road is closed to through traffic",
        ],
        correctIndex: 2,
        explanation:
          "The checkerboard is placed where the road itself turns hard, so that headlights pick it up. The arrow shows which way the road goes; straight ahead is no longer road.",
        context:
          "Checkerboards and chevrons do related jobs from different positions. Chevrons run along the outside of a curve, guiding you through it. A checkerboard faces you at the point where continuing straight would take you off the road entirely — a T-junction, a sharp turn, the end of a road. Both are yellow-and-black warnings, and both mean the same practical thing: get your speed down before you arrive.",
        trap:
          "Because the sign is so emphatic, people reach for the stop answer. It is a warning about direction, not a prohibition on travel.",
        excerptKey: "checkerboard-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s4_24",
        topic: "rules",
        question: "In which situation may you legally make a left turn while facing a red light?",
        choices: [
          "From a one-way road onto another one-way road, after a complete stop",
          "From any road onto a one-way road, after a complete stop",
          "From a one-way road onto a two-way road, after a complete stop",
          "Nowhere in Ontario — left turns on red are always prohibited",
        ],
        correctIndex: 0,
        explanation:
          "Both roads have to be one-way. Stop completely, wait until the way is clear, then turn — the same procedure as a right on red.",
        context:
          "The rule exists because a one-way-to-one-way left turn crosses no opposing traffic stream, which makes it structurally the same manoeuvre as a right on red. The moment either road carries two-way traffic, you would be turning across vehicles with a green, and the permission disappears. As with any red-light turn, a posted sign can cancel it, and pedestrians in the crosswalk go first.",
        trap:
          "Turning onto a one-way road is the half of the rule people remember, so the from-any-road option reads as correct. Both roads must be one-way.",
        excerptKey: "left-turn-on-red-one-way",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Traffic lights",
        sourceUrl: `${H}/traffic-lights`,
      },
      {
        id: "on_s4_25",
        topic: "safety",
        question: "When must your headlights be on, even on a cloudless day?",
        choices: [
          "Only when the street lighting has failed",
          "From half an hour before sunset until half an hour after sunrise",
          "From sunset until sunrise",
          "From one hour before sunset until one hour after sunrise",
        ],
        correctIndex: 1,
        explanation:
          "The window opens half an hour before sunset and closes half an hour after sunrise — the law deliberately covers the murky light on either side of full darkness.",
        context:
          "There is a second trigger with nothing to do with the clock: any time poor light, fog, rain or snow stops you from clearly seeing people or vehicles less than 150 metres away, headlights go on. Daytime running lights do not satisfy either rule, because they leave your tail lights dark and make you nearly invisible from behind in bad weather. Switching the headlights on brings up the parking lights, tail lights and licence plate light with them.",
        trap:
          "Sunset-to-sunrise is the intuitive answer and the one most people give. Ontario deliberately adds half an hour at each end.",
        excerptKey: "headlights-when-required",
        sourceLabel: "Official MTO Driver's Handbook — Getting ready to drive",
        sourceUrl: `${H}/getting-ready-drive`,
      },
      {
        id: "on_s4_26",
        topic: "signs",
        question:
          "A yellow diamond shows a single roadway splitting into two separated carriageways around a centre strip. What is coming up?",
        choices: [
          "The divided highway you are on is about to end",
          "A traffic island splits the lane and you must keep right",
          "A passing lane opens up on the left",
          "The road becomes a divided highway, each side carrying one-way traffic",
        ],
        correctIndex: 3,
        explanation:
          "The symbol reads left to right, in your direction of travel: one road becoming two. That is the divided highway beginning.",
        context:
          "This sign and its mirror image are the classic Ontario confusion pair. Divided highway begins shows one roadway opening into two, and once you are past it every vehicle beside you is going the same way as you. Divided highway ends shows two roadways closing into one, and it matters far more — from that point you are back to facing oncoming traffic, and drivers who have settled into divided-highway habits are the ones who get caught out.",
        trap:
          "The two symbols are near-identical and the eye does not register which end is which. Read the direction of travel, not the picture as a whole.",
        excerptKey: "divided-highway-begins-sign",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s4_27",
        topic: "rightOfWay",
        question: "You are approaching a roundabout. Who has the right of way?",
        choices: [
          "Traffic already circulating in the roundabout — you yield before entering",
          "You do, because circulating traffic must let entering vehicles merge",
          "Whichever driver reaches the yield line first",
          "The vehicle on your right, as at any uncontrolled intersection",
        ],
        correctIndex: 0,
        explanation:
          "Vehicles already going around have the right of way. You wait at the entry for a gap, watching especially to your left, and enter without stopping only when one appears.",
        context:
          "Ontario roundabouts run counter-clockwise, so every vehicle keeps the central island on its left. Choose your lane before you arrive: the right lane serves right turns and straight-through, the left lane serves left turns and straight-through. Signal right once you have passed the exit before the one you want. Give large trucks and buses room — they may need both lanes and the mountable apron — and watch for cyclists holding the centre of a lane and pedestrians at the splitter islands.",
        trap:
          "The right-hand tiebreaker from uncontrolled intersections gets applied here out of habit, but a roundabout entry is a yield, not a tie.",
        excerptKey: "roundabout-yield-left",
        sourceLabel: "Official MTO Driver's Handbook — Changing directions",
        sourceUrl: `${H}/changing-directions`,
      },
      {
        id: "on_s4_28",
        topic: "speed",
        question:
          "You are on a rural two-lane road well outside any town, and there is no posted speed limit. What limit applies?",
        choices: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
        correctIndex: 2,
        explanation:
          "Outside built-up areas, the default maximum where nothing is posted is 80 km/h.",
        context:
          "The pair of defaults — 50 inside cities, towns and villages, 80 outside them — covers every road with no sign on it. Freeways are posted, usually at 100 km/h with some sections at 110, and those numbers come from the signs rather than from any default. None of these figures is a promise that the speed is safe: gravel shoulders, fog, wildlife and blind crests all oblige you to travel below the posted number.",
        trap:
          "Ninety is the intuitive guess because 80 feels slow for open country, and because several other provinces sit higher. Ontario's rural default is 80.",
        excerptKey: "default-speed-limits",
        sourceLabel: "Official MTO Driver's Handbook — Driving along",
        sourceUrl: `${H}/driving-along`,
      },
      {
        id: "on_s4_29",
        topic: "signals",
        question: "The line separating your lane from the one beside it is broken white. What does it allow?",
        choices: [
          "You may not cross it except in an emergency",
          "It marks the outer edge of the roadway",
          "You may change lanes whenever it is safe",
          "You may cross it only to make a left turn",
        ],
        correctIndex: 2,
        explanation:
          "White lines divide traffic moving the same way, and a broken white line means lane changes are permitted when the way is clear.",
        context:
          "The colour tells you who is on the other side and the pattern tells you whether you may go there. White means same direction, yellow means opposing direction; broken means crossing is allowed, solid discourages or prohibits it. A broken white line that becomes noticeably wider with the dashes closer together is a continuity line, warning that your lane is about to end or peel off the road.",
        trap:
          "Solid and broken get conflated when traffic is heavy and the markings are worn. The pattern under your left mirror is the one that governs.",
        excerptKey: "broken-line-passing",
        sourceLabel: "Official MTO Driver's Handbook — Pavement markings",
        sourceUrl: `${H}/pavement-markings`,
      },
      {
        id: "on_s4_30",
        topic: "licensing",
        question: "How long does a demerit point stay on your driving record?",
        choices: [
          "Two years from the date of the offence",
          "Three years from the date of the offence",
          "Until your licence next comes up for renewal",
          "One year from the date of conviction",
        ],
        correctIndex: 0,
        explanation:
          "Two years, counted from the date of the offence rather than the date the conviction was registered.",
        context:
          "Because the clock starts at the offence, a charge that takes months to reach court has already burned part of its two years by the time the points land. Points accumulate across that window, which is what makes a run of small infractions dangerous: a novice driver reaching nine points is suspended for 60 days, while a fully licensed driver has until 15. The record itself, as distinct from the points, is kept far longer.",
        trap:
          "Dating the two years from conviction is the natural assumption, and it will have you expecting points to clear later than they actually do.",
        excerptKey: "demerit-two-years",
        sourceLabel: "Official MTO Driver's Handbook — Keeping your driver's licence",
        sourceUrl: `${H}/keeping-your-drivers-licence`,
      },
      {
        id: "on_s4_31",
        topic: "signs",
        question: "A sign tells you that you are entering a community safety zone. What changes?",
        choices: [
          "The speed limit automatically drops to 40 km/h",
          "Passing is prohibited for the length of the zone",
          "Only local traffic may use the road",
          "Fines for traffic offences committed inside the zone increase",
        ],
        correctIndex: 3,
        explanation:
          "A community safety zone is a stretch the local community has flagged as unusually risky for pedestrians, and the penalty for offending there goes up.",
        context:
          "The zone does not, by itself, change the speed limit, the passing rules or who may use the road. Those still come from the posted signs. What it changes is the cost of getting them wrong — speeding, red-light running and similar offences carry increased fines between the start and end signs. Zones commonly cover schools, parks, seniors' residences and daycares, which is a hint about what you should be watching for regardless of the fines.",
        trap:
          "It reads as a speed-limit sign because of where the zones are placed. Any lower limit inside one is posted separately on its own sign.",
        excerptKey: "community-safety-zone",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s4_32",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you on a two-lane road with its lights and siren going. What do you do?",
        choices: [
          "Move left so it can pass you on the right",
          "Pull as far right as you safely can and stop until it has passed",
          "Speed up to clear the road ahead of it",
          "Stop where you are, in the middle of your lane",
        ],
        correctIndex: 1,
        explanation:
          "Move right, then stop. A predictable, uniform response from every driver leaves the emergency vehicle a clear channel down the left.",
        context:
          "The instinct to accelerate is the dangerous one — you cannot outrun the vehicle, and you arrive at the next intersection faster than you can handle. Stopping in your lane is nearly as bad, because it leaves the road width unchanged. There is a separate rule for emergency and tow vehicles already stopped with lights flashing: slow down, and where the road has two or more lanes in your direction, move over to leave a lane between you and them if it is safe. Following a fire vehicle responding to an alarm within 150 metres is an offence in itself.",
        trap:
          "Pulling left seems reasonable on a road where the right shoulder is soft or occupied, but it splits traffic unpredictably and blocks the lane drivers behind you are expecting to use.",
        excerptKey: "emergency-vehicle-pull-right",
        sourceLabel: "Official MTO Driver's Handbook — Dealing with particular situations",
        sourceUrl: `${H}/dealing-particular-situations`,
      },
      {
        id: "on_s4_33",
        topic: "signs",
        question:
          "You approach a marked pedestrian crossover and someone steps onto it. What are you required to do?",
        choices: [
          "Stop until the pedestrian has cleared the front of your vehicle, then go",
          "Slow down and steer around behind them",
          "Carry on if the pedestrian is still more than one lane away",
          "Stop and stay stopped until the pedestrian has completely crossed the road",
        ],
        correctIndex: 3,
        explanation:
          "At a pedestrian crossover you wait for the entire crossing, not just for the part in front of your bumper. The same applies at a school crossing where a guard is displaying a stop sign.",
        context:
          "Ontario draws a sharp line between an ordinary crosswalk and a pedestrian crossover. A crossover is marked with parallel lines plus a large X painted in each approaching lane, and often overhead signs and flashing beacons; it obliges you to yield and then to hold until the far curb is reached. Passing another vehicle within 30 metres of a crossover is prohibited, because the vehicle you overtake may be stopped for someone you cannot see. Failing to stop for a crossover carries four demerit points.",
        trap:
          "Rolling forward as soon as the pedestrian is past your lane feels courteous and efficient, and it is the single most common crossover violation.",
        excerptKey: "crossover-yield",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Stopping",
        sourceUrl: `${H}/stopping`,
      },
      {
        id: "on_s4_34",
        topic: "parking",
        question:
          "How far from an intersection must you stay when parking, where that intersection has no traffic signals?",
        choices: ["6 metres", "9 metres", "15 metres", "3 metres"],
        correctIndex: 1,
        explanation:
          "Nine metres at an ordinary intersection. Where the intersection is controlled by traffic lights, the clearance rises to fifteen.",
        context:
          "These clearances exist to protect sight lines rather than to create tidy parking. A vehicle parked tight to a corner hides approaching traffic from the driver waiting to pull out, and hides a pedestrian stepping off the curb from everyone. The related figures worth holding together: three metres from a hydrant, nine from an intersection, fifteen at a signalised intersection, fifteen from the nearest rail of a railway crossing, and six from the public entrance of a hotel, theatre or public hall while it is open.",
        trap:
          "Fifteen metres is a real intersection figure, which makes it feel safe to pick — but it applies only where the intersection is signalised.",
        excerptKey: "parking-intersection",
        sourceLabel: "Official MTO Driver's Handbook — Parking along roadways",
        sourceUrl: `${H}/parking-along-roadways`,
      },
      {
        id: "on_s4_35",
        topic: "signals",
        question: "What does a flashing red traffic light require of you?",
        choices: [
          "Exactly the same response as a flashing amber light",
          "That you wait where you are until the light stops flashing",
          "A complete stop, then proceed when it is safe",
          "A slowdown, stopping only if something is crossing",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red works like a stop sign: full stop, assess, then move through the intersection when the way is clear.",
        context:
          "The flashing family is worth learning as a set because each member behaves differently. Flashing red means stop, then go when safe. Flashing amber means proceed with caution without stopping. Flashing green is an advance green and gives your approach every movement while oncoming traffic holds at red. A signal showing nothing at all — a power failure, say — is treated as an all-way stop, yielding to anyone already in the intersection and to traffic on your right.",
        trap:
          "Flashing red and flashing amber often face each other across the same intersection, so drivers assume both mean the same cautious approach. Only one of them demands a stop.",
        excerptKey: "flashing-red-light",
        sourceLabel: "Official MTO Driver's Handbook — Traffic lights",
        sourceUrl: `${H}/traffic-lights`,
      },
      {
        id: "on_s4_36",
        topic: "safety",
        question: "You catch up to a working snow plow on a highway, blue lights flashing. What is the rule?",
        choices: [
          "Stay well back — you must not pass a moving snow plow",
          "Pass on the left as soon as that lane is clear",
          "Pass on the right, where the wing is retracted",
          "Follow within two seconds so you stay in the cleared track",
        ],
        correctIndex: 0,
        explanation:
          "Moving snow plows are not to be passed under any conditions. The road ahead of the plow is, by definition, the part that has not been cleared.",
        context:
          "A plow's blue flashing lights are visible from about 150 metres, and its wing can reach as much as three metres out to the right — so the space that looks like an empty shoulder is often occupied by steel. Plows also throw snow that blinds anyone alongside. Add to that the fact that the surface in front of the plow is still snow-covered, and every version of passing puts you on worse footing than the one you were on.",
        trap:
          "Squeezing past on the right looks feasible because the plow sits left of centre. That is precisely where the wing is.",
        excerptKey: "snow-plow-no-passing",
        sourceLabel: "Official MTO Driver's Handbook — Driving at night and in bad weather",
        sourceUrl: `${H}/driving-night-and-bad-weather`,
      },
      {
        id: "on_s4_37",
        topic: "signs",
        question: "A yellow diamond shows a raised ripple in the road surface. What is it warning you about?",
        choices: [
          "A section where the paved surface ends",
          "Rough or uneven pavement ahead — slow down and keep control",
          "A dip that collects water after heavy rain",
          "A speed hump installed to calm traffic",
        ],
        correctIndex: 1,
        explanation:
          "It marks a bump or an uneven stretch of pavement. Arriving too fast costs you steering and braking control at exactly the wrong moment.",
        context:
          "Surface warnings all share the yellow diamond and all ask for the same first response, which is speed. Related members of the family cover pavement narrowing, the paved surface ending and gravel beginning, slippery-when-wet pavement, and milled or grooved pavement in work zones. Motorcyclists are affected far more than drivers by every one of them, which is worth remembering before you brake hard with a rider behind you.",
        trap:
          "Traffic-calming speed humps are marked and signed differently, and reading the symbol that way suggests a designed, gentle obstacle rather than damaged road.",
        excerptKey: "warning-signs",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s4_38",
        topic: "sharing",
        question:
          "Passengers are stepping off a streetcar ahead of you and there is no safety island. How close may you come?",
        choices: [
          "You must stay at least 5 metres behind the rear doors",
          "You may pull alongside so long as you creep",
          "You must stop 20 metres back, as for a school bus",
          "You must stay at least 2 metres behind the rear doors",
        ],
        correctIndex: 3,
        explanation:
          "Two metres behind the rear doors. Passengers step down straight into the traffic lane, and that gap is the only protection they get.",
        context:
          "Streetcars come with their own small set of rules. You pass them on the right, unless you are on a one-way road. Where a stop has a raised safety island or zone, passengers are protected and you pass at a reasonable speed rather than stopping. Where there is no island, the two-metre rule applies and you hold until the doors close and everyone is clear.",
        trap:
          "Twenty metres is the school bus figure, and the situations feel parallel — people boarding and alighting into live traffic. The distances are not the same.",
        excerptKey: "streetcar-two-metres",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Changing positions",
        sourceUrl: `${H}/changing-positions`,
      },
      {
        id: "on_s4_39",
        topic: "rules",
        question:
          "Signal lights are flashing at a railway crossing and a train is coming. Where must you stop?",
        choices: [
          "At least 5 metres from the nearest rail or gate",
          "At least 3 metres from the nearest rail",
          "At least 10 metres from the nearest rail",
          "Anywhere behind the crossbuck sign",
        ],
        correctIndex: 0,
        explanation:
          "Five metres back from the nearest rail or from the gate. Trains overhang their rails, and freight can swing wider still.",
        context:
          "Once you have stopped, you wait for the signals to stop flashing and, where there is a gate, for it to rise fully. Never drive around a gate that is down, being lowered or being raised. Avoid changing gear while you are on the tracks. A train under full emergency braking can need up to two kilometres to stop, so nothing about the crossing is negotiable on your side. Most buses must stop at crossings that lack gates, signals or a stop sign, and school buses stop at every crossing regardless of protection.",
        trap:
          "Stopping behind the crossbuck feels sufficient because the sign is the visible marker, but the sign's position has nothing to do with the five-metre requirement.",
        excerptKey: "railway-stop-distance",
        sourceLabel: "Official MTO Driver's Handbook — Stopping",
        sourceUrl: `${H}/stopping`,
      },
      {
        id: "on_s4_40",
        topic: "safety",
        question:
          "A child may leave the booster seat and use the seatbelt alone once they meet any one of three thresholds. Which set is right?",
        choices: [
          "10 years old, 40 kg, or 150 cm tall",
          "8 years old, 25 kg, or 120 cm tall",
          "8 years old, 36 kg, or 145 cm tall",
          "6 years old, 30 kg, or 130 cm tall",
        ],
        correctIndex: 2,
        explanation:
          "Turning eight, reaching 36 kg, or standing 145 cm tall — any one of the three is enough to move to the seatbelt alone.",
        context:
          "The staircase below that runs: rear-facing seat for infants under 9 kg, forward-facing seat with a tether strap for toddlers between 9 and 18 kg, then a booster for children between 18 and 36 kg who are under eight and under 145 cm. The reason height matters is geometry — a belt that crosses a small child's neck and abdomen instead of the shoulder and hips does harm in a crash. The driver is legally responsible for every passenger under 16 being properly secured.",
        trap:
          "Reading the three thresholds as conditions that must all be met, rather than any one of them, is the usual error and keeps children in boosters past the point required.",
        excerptKey: "booster-seat-required",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Getting ready to drive",
        sourceUrl: `${H}/getting-ready-drive`,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "Set 5 — The ones people fail on",
    difficulty: "hard",
    description:
      "Exact figures, sign pairs that look alike, and right-of-way problems with more than one step in them. Everything here is answerable from the handbook, but none of it survives skimming.",
    questions: [
      {
        id: "on_s5_01",
        topic: "signs",
        question:
          "Three curbside signs use the same red circle-and-slash styling but permit different things. Which one still lets you pause to let a passenger out, yet not to unload boxes?",
        choices: [
          "The no stopping sign",
          "The accessible loading zone sign",
          "The no standing sign",
          "The no parking sign",
        ],
        correctIndex: 2,
        explanation:
          "No standing sits between the other two. It allows a stop for passengers getting in or out, and nothing else — merchandise is not covered.",
        context:
          "The three signs form a ladder of strictness. No parking is loosest: you may stop briefly for either passengers or merchandise, but you may not leave the vehicle parked. No standing tightens that to passengers only. No stopping is absolute — you may not bring the vehicle to a halt there for any reason, however briefly. Because the artwork differs only in wording, the sign that looks least severe may be the one that permits the most.",
        trap:
          "No parking is the tempting pick because it is the loosest of the three, and it does allow passenger drop-offs. But it also allows merchandise, so it is not the sign the question describes.",
        excerptKey: "no-standing-sign",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s5_02",
        topic: "licensing",
        question:
          "A G2 driver is convicted of breaking one of the conditions of the graduated licensing system. What happens to the licence?",
        choices: [
          "A 30-day suspension",
          "A 7-day suspension",
          "Four demerit points and a warning letter",
          "Immediate cancellation of the licence",
        ],
        correctIndex: 0,
        explanation:
          "Conviction for violating a novice condition brings a 30-day suspension. It is not a points penalty — the licence simply stops working for a month.",
        context:
          "Novice conditions are enforced through escalating sanctions rather than through the demerit system alone. The escalation is triggered within a five-year window by any combination of repeat novice-condition violations, convictions carrying four or more demerit points, and court-ordered suspensions. Later occurrences move well beyond 30 days, up to losing your place in the graduated system entirely and starting over with new tests and new fees.",
        trap:
          "Expecting demerit points is the natural reading, since that is how most traffic offences work. Novice-condition breaches bypass points and hit the licence directly.",
        excerptKey: "novice-condition-violation",
        sourceLabel: "Official MTO Driver's Handbook — Other ways to lose your licence",
        sourceUrl: `${H}/other-ways-lose-your-licence`,
      },
      {
        id: "on_s5_03",
        topic: "rightOfWay",
        question:
          "Two vehicles approach an intersection with no signs or lights of any kind. Vehicle A arrives clearly first. Vehicle B, coming from A's right, arrives a moment later. Who goes first?",
        choices: [
          "Vehicle B, because it is on the right",
          "Vehicle B, because right-of-way at uncontrolled intersections always goes to the right",
          "Neither — both must stop, then proceed in turn",
          "Vehicle A, because it got there first",
        ],
        correctIndex: 3,
        explanation:
          "Arrival order settles it. The right-hand rule only decides intersections where two vehicles arrive at the same moment, and this is not one of those.",
        context:
          "An uncontrolled intersection is governed first by who was there first, and only second by position. That second layer — the driver on the left yields to the driver on the right — exists purely to break ties. The same two-layer structure governs an all-way stop, where the first vehicle to come to a complete stop leads and simultaneous arrivals are settled by the right-hand rule. Neither layer obliges you to enter an intersection you cannot cross safely.",
        trap:
          "The right-hand rule is memorable and gets applied as though it were the whole rule. It is the tiebreaker, not the default.",
        excerptKey: "uncontrolled-intersection",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Driving through intersections",
        sourceUrl: `${H}/driving-through-intersections`,
      },
      {
        id: "on_s5_04",
        topic: "signals",
        question:
          "You are in a left-turn lane facing a red light when a green left arrow lights up beside it. What may you do?",
        choices: [
          "Nothing until the red ball changes to green",
          "Turn left from the left-turn lane; oncoming traffic is being held",
          "Turn left or go straight, since the arrow overrides the red",
          "Turn left only after stopping and yielding to oncoming traffic",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow beside a red ball gives you the left turn and nothing else. The turn is protected, so no yielding to oncoming traffic is required.",
        context:
          "Ontario shows a protected left three ways, and they are worth separating. A green arrow with a red ball means turn left only. A green arrow with a green ball, or a flashing green ball, is the advance green — every movement from your approach is permitted while oncoming traffic holds. Where an intersection has a fully protected left, the arrow is your only opportunity, and once it ends and the through traffic gets its green you may not begin the turn. Pedestrians in your path still go first in every one of these cases.",
        trap:
          "Treating the arrow as a general override and driving straight through on it is the dangerous misread — the through movement is still on red.",
        excerptKey: "simultaneous-left-turn",
        sourceLabel: "Official MTO Driver's Handbook — Traffic lights",
        sourceUrl: `${H}/traffic-lights`,
      },
      {
        id: "on_s5_05",
        topic: "safety",
        question: "Driving at night, at what distances must you drop out of high beams?",
        choices: [
          "Within 60 m of an oncoming vehicle, and when less than 150 m behind a vehicle you are following",
          "Within 100 m in both situations",
          "Within 150 m in both situations",
          "Within 150 m of an oncoming vehicle, and when less than 60 m behind a vehicle you are following",
        ],
        correctIndex: 3,
        explanation:
          "One-fifty for oncoming traffic, sixty for the vehicle in front. The larger distance goes to the driver looking straight into your lights.",
        context:
          "The asymmetry is about how the light reaches the other driver's eyes. A vehicle coming at you takes your high beams directly, so you need to switch far earlier. A vehicle you are following takes them via its mirrors, which is still dazzling but at shorter range. The exception is the moment of a pass, when high beams are allowed to help you see the road ahead. Separately, headlights are mandatory whenever you cannot clearly see people or vehicles less than 150 metres away.",
        trap:
          "The two numbers get swapped, which produces exactly the wrong behaviour: late switching for oncoming drivers and unnecessarily early switching behind.",
        excerptKey: "high-beam-distances",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Getting ready to drive",
        sourceUrl: `${H}/getting-ready-drive`,
      },
      {
        id: "on_s5_06",
        topic: "sharing",
        question:
          "A school bus stops with its red lights flashing on a highway where the two directions are separated by a raised median. Who must stop?",
        choices: [
          "Only the lane immediately beside the bus",
          "Only traffic travelling behind the bus in the same direction",
          "Traffic in both directions, as on any other road",
          "Nobody — the median makes the stop arm advisory",
        ],
        correctIndex: 1,
        explanation:
          "A median or centre strip physically separating the two directions removes the obligation from oncoming traffic. Vehicles behind the bus still stop.",
        context:
          "The default is that everyone stops, from both directions, however many lanes the road has. The single exception is a road where the directions are divided by a median strip — because children have no reason to cross a divided roadway to reach the bus. A painted centre line is not a median, and a two-way left turn lane is not a median. Where the exception does not apply and you fail to stop, you face six demerit points and a fine starting at $400.",
        commonlyMissed: true,
        trap:
          "Applying the exception on any wide multi-lane road is the costly version of this mistake. Look for a physical divider, not lane count.",
        excerptKey: "school-bus-median",
        sourceLabel: "Official MTO Driver's Handbook — Sharing the road with other road users",
        sourceUrl: `${H}/sharing-road-other-road-users`,
      },
      {
        id: "on_s5_07",
        topic: "signs",
        question:
          "Two diamond-shaped warning signs sit near each other, one yellow and one orange. What separates them?",
        choices: [
          "Orange warns of a permanent hazard; yellow marks a detour",
          "Yellow is used on highways; orange is used on city streets",
          "Yellow warns of a permanent road condition; orange warns of a temporary one such as roadwork",
          "Yellow is advisory; orange carries a legally enforceable speed limit",
        ],
        correctIndex: 2,
        explanation:
          "Both are warnings. The background colour tells you whether the hazard is built into the road or has been placed there for now.",
        context:
          "Yellow diamonds describe the road as it is and will remain: curves, hills, crossings, wildlife corridors, narrow structures. Orange diamonds appear when something has been changed and will be changed back — road work ahead, survey crew working, a traffic control person, milled pavement, lane closures, detours. Neither colour sets a speed limit. Where a construction zone carries doubled fines, that is announced on its own separate rectangular sign.",
        trap:
          "Detour signs feel like a permanent-signage job because they carry navigation information, but detours are temporary by definition and wear orange.",
        excerptKey: "temporary-condition-signs",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s5_08",
        topic: "speed",
        question: "Which of these gets a driver charged with stunt driving on the basis of speed alone?",
        choices: [
          "45 km/h over the limit on a road posted at 60 km/h",
          "35 km/h over the limit on a road posted at 50 km/h",
          "45 km/h over the limit on a road posted at 100 km/h",
          "30 km/h over the limit on a road posted at 80 km/h",
        ],
        correctIndex: 0,
        explanation:
          "Where the posted limit is under 80 km/h, 40 km/h over is enough. A 60 km/h road at 105 km/h clears that bar; none of the others reaches its own threshold.",
        context:
          "Three separate speed triggers exist. On roads posted below 80 km/h, 40 km/h over qualifies. Anywhere at all, 50 km/h over qualifies. And 150 km/h or more is stunt driving regardless of the posted limit, including on stretches signed at 110. At the roadside the consequences are immediate: a 30-day licence suspension and a 14-day vehicle impoundment before any court date. On conviction the fine runs from $2,000 to $10,000, with six demerit points, possible jail and a licence suspension measured in years.",
        trap:
          "45 over on a 100 km/h highway looks like the most extreme option because the absolute speed is highest. On a road posted at 80 or above the threshold is 50 over, and 145 km/h also falls short of the 150 trigger.",
        commonlyMissed: true,
        sourceLabel: "Ontario.ca — Speeding and aggressive driving",
        sourceUrl: `${ON}/speeding-and-aggressive-driving`,
      },
      {
        id: "on_s5_09",
        topic: "signs",
        question: "Which of these describes the sign warning that a roundabout is ahead?",
        choices: [
          "An orange diamond showing a looping arrow",
          "A yellow diamond with three arrows curving counter-clockwise around a centre",
          "A blue square showing a single circular arrow",
          "A white rectangle showing a circle with a slash through it",
        ],
        correctIndex: 1,
        explanation:
          "It is a standard yellow warning diamond, and the arrows curve counter-clockwise because that is the direction traffic runs in the roundabout you are about to enter.",
        context:
          "The advance sign is a warning to reduce speed, not an instruction about lanes. Lane guidance usually comes separately, on a green information sign showing which exit each lane serves. Once you are in the roundabout, keep the central island on your left, choose the right lane for right turns and straight-through and the left lane for left turns and straight-through, and signal right only after passing the exit before yours.",
        trap:
          "An orange version would mean the roundabout is a temporary arrangement around construction. The permanent warning is yellow.",
        excerptKey: "roundabout-ahead-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s5_10",
        topic: "parking",
        question: "Which of these parking clearances is stated correctly?",
        choices: [
          "At least 9 metres from the nearest rail of a railway crossing",
          "At least 30 metres from either end of a bridge",
          "At least 3 metres from an intersection controlled by traffic lights",
          "At least 15 metres from the nearest rail of a railway crossing",
        ],
        correctIndex: 3,
        explanation:
          "Fifteen metres from the nearest rail. The bridge figure is 100 metres, and a signalised intersection also calls for fifteen — not three.",
        context:
          "The full set is short enough to memorise: 3 metres from a fire hydrant, 6 metres from the public entrance of a hotel, theatre or public hall while it is open, 9 metres from an ordinary intersection, 15 metres from a signalised intersection, 15 metres from the nearest rail of a railway crossing, and no parking on or within 100 metres of a bridge. On top of those, never park where drivers approaching cannot see at least 125 metres in each direction.",
        trap:
          "Nine metres appears in the list, just attached to intersections. Numbers from this set migrate between rules more than any others on the test.",
        excerptKey: "parking-railway",
        sourceLabel: "Official MTO Driver's Handbook — Parking along roadways",
        sourceUrl: `${H}/parking-along-roadways`,
      },
      {
        id: "on_s5_11",
        topic: "signals",
        question:
          "The centre lane of a commercial strip is bounded on each side by a solid yellow line with a broken yellow line inside it. How may that lane be used?",
        choices: [
          "For left turns by drivers travelling in either direction",
          "As a passing lane when the outside lanes are backed up",
          "As a reversible lane that changes direction by time of day",
          "For left turns by traffic going your way only",
        ],
        correctIndex: 0,
        explanation:
          "It is a two-way left turn lane. Drivers from both directions use it as a staging area for left turns so that turning traffic stops blocking the through lanes.",
        context:
          "The marking tells the story: yellow because opposing traffic uses it, broken on the inside because you are permitted to enter, solid on the outside because through traffic is not. You move into it only to make your left turn, and only shortly before the turn — it is not a lane to travel along, and it is never a passing lane. Expect a vehicle from the opposite direction to be sitting in it a short distance ahead of you.",
        trap:
          "Reading it as a lane reserved for your direction is the misuse that causes head-on conflicts, because the driver coming the other way has exactly the same right to be there.",
        excerptKey: "two-way-left-turn-lane",
        sourceLabel: "Official MTO Driver's Handbook — Changing directions",
        sourceUrl: `${H}/changing-directions`,
      },
      {
        id: "on_s5_12",
        topic: "rules",
        question: "Where does the handbook say a U-turn is against the law?",
        choices: [
          "On any road carrying more than two lanes",
          "Anywhere inside a built-up area",
          "On a curve, near a hilltop, or near a bridge, tunnel or railway crossing that blocks your view",
          "Anywhere a solid yellow line runs down the centre of the road",
        ],
        correctIndex: 2,
        explanation:
          "The prohibited places are all places where approaching drivers cannot see you in time — curves, crests, and the approaches to bridges, tunnels and railway crossings.",
        context:
          "The organising idea is sight distance. Even where a U-turn is permitted, you need a clear view of at least 150 metres in both directions before you commit, because the manoeuvre puts your vehicle broadside across the road at low speed. Signs prohibiting U-turns override all of this at particular intersections, and on a divided highway the median openings are generally not there for you to use.",
        trap:
          "A solid centre line is about passing, not turning. Assuming it also bans U-turns produces the right caution for the wrong reason and the wrong answer here.",
        excerptKey: "u-turn-restrictions",
        sourceLabel: "Official MTO Driver's Handbook — Changing directions",
        sourceUrl: `${H}/changing-directions`,
      },
      {
        id: "on_s5_13",
        topic: "licensing",
        question: "A G2 driver accumulates nine demerit points. What follows?",
        choices: [
          "A warning letter and a mandatory interview with the ministry",
          "Immediate cancellation of the G2 licence",
          "A 60-day suspension, after which the record is set back to four points",
          "A 30-day suspension, after which the record is set back to seven points",
        ],
        correctIndex: 2,
        explanation:
          "Novice drivers are suspended at nine points, for 60 days, and come back with four points still on the record.",
        context:
          "The two tables run in parallel but at different heights. A novice driver gets a warning letter at two points, a second letter at six, and a 60-day suspension at nine, returning at four. A fully licensed driver gets a warning letter at six, a second at nine, and a 30-day suspension at fifteen, returning at seven. Reaching the suspension threshold again risks a six-month suspension. Points sit on the record for two years from the date of the offence, so the counter never resets cleanly.",
        trap:
          "The 30-days-and-back-to-seven answer is the fully licensed driver's outcome. Novices are suspended sooner, for longer, and come back closer to the threshold.",
        excerptKey: "novice-nine-points",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Keeping your driver's licence",
        sourceUrl: `${H}/keeping-your-drivers-licence`,
      },
      {
        id: "on_s5_14",
        topic: "signs",
        question:
          "A warning sign tells you that drivers waiting on the side road at the intersection ahead cannot see traffic clearly. What is it asking of you?",
        choices: [
          "Expect a vehicle to pull out in front of you, and cover your brake",
          "Stop before the intersection and check both directions",
          "Sound your horn continuously as you pass through",
          "Yield to any vehicle on the side road, wherever it is positioned",
        ],
        correctIndex: 0,
        explanation:
          "The sign warns about somebody else's blind spot, not yours. You still have the right of way; what you need is the reaction time to survive somebody misjudging it.",
        context:
          "Warning signs come in two flavours worth telling apart. Most describe something about the road you are on — a curve, a bump, a narrowing. This one describes the state of mind of a driver you have not met yet, on a road you can see into but they cannot see out of. The response is a speed reduction and a covered brake, not a change in who yields to whom.",
        trap:
          "Assuming the sign transfers the right of way to the side road is the plausible-sounding error. Nothing about a warning sign changes right of way.",
        excerptKey: "hidden-sideroad-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s5_15",
        topic: "sharing",
        question:
          "A tow truck is stopped on the shoulder of a three-lane highway with its amber lights flashing. What does the law require of you?",
        choices: [
          "Slow down but stay in your lane so traffic keeps flowing",
          "Change lanes only — the posted speed still applies as normal",
          "Nothing; the rule covers police, fire and ambulance only",
          "Slow down and, if you can do it safely, move over to leave a lane between you and the truck",
        ],
        correctIndex: 3,
        explanation:
          "Slow down first, then move over where the road has two or more lanes going your way and it is safe to do it. Tow trucks with amber lights flashing are covered alongside emergency vehicles.",
        context:
          "The obligation has two parts and drivers routinely perform only one. Slowing is required always; moving over is required whenever the lane count and the traffic around you make it safe. A first offence carries a fine from $400 to $2,000 and three demerit points, with a possible suspension of up to two years. It applies to stopped vehicles with lights flashing — a separate rule covers what to do when an emergency vehicle is approaching you from behind.",
        commonlyMissed: true,
        trap:
          "Leaving tow trucks out of the rule is the common gap, because they are not emergency services. Amber flashing lights on a stopped tow truck trigger the same duty.",
        excerptKey: "move-over-change-lane",
        sourceLabel: "Ontario.ca — Driving near emergency vehicles",
        sourceUrl: `${ON}/driving-near-emergency-vehicles`,
      },
      {
        id: "on_s5_16",
        topic: "safety",
        question: "What is Ontario's actual position on winter tires?",
        choices: [
          "Two on the drive wheels satisfies the recommendation",
          "They are recommended, not required — and all four should share the same tread pattern",
          "They are mandatory on every vehicle from 1 December to 31 March",
          "They are mandatory only for travel on 400-series highways in winter",
        ],
        correctIndex: 1,
        explanation:
          "Ontario recommends rather than requires them, and the recommendation is for four matching winter or all-weather tires — not two.",
        context:
          "Mixing tire types across an axle set gives you two ends of the car with different grip, which is how a slide starts. The related maintenance figure is tread depth: replace tires once tread falls below 1.5 mm, and below 3 mm on the front tires of vehicles over 4,500 kg. Some other provinces do mandate winter tires seasonally, which is where the December-to-March idea comes from.",
        trap:
          "The seasonal mandate is real law in Quebec and on some British Columbia routes, so drivers who have travelled assume it applies here too.",
        excerptKey: "winter-tires",
        sourceLabel: "Official MTO Driver's Handbook — Maintaining your vehicle",
        sourceUrl: `${H}/maintaining-your-vehicle`,
      },
      {
        id: "on_s5_17",
        topic: "signs",
        question: "What is the difference between a chevron sign and a checkerboard sign?",
        choices: [
          "Chevrons mark the end of a passing lane; a checkerboard marks a detour",
          "Chevrons warn of a bump; a checkerboard warns of loose gravel",
          "Chevrons are temporary; checkerboards are permanent",
          "Chevrons are posted in a row to guide you through a curve; a checkerboard faces you where the road changes direction sharply",
        ],
        correctIndex: 3,
        explanation:
          "Chevrons are a sequence along the outside of a bend, tracing its shape. A checkerboard is a single sign placed square in your windscreen where going straight stops being an option.",
        context:
          "Both are yellow-and-black, both belong to the warning family, and both are about direction rather than about the surface. The practical difference is position and count. If you are seeing several arrowheads in a line, the road is bending and they are showing you how much. If you are seeing one large panel head-on, the road is turning hard or ending, and the arrow on it is your only remaining route.",
        trap:
          "Detour signs also tell you the road ahead is not available, but they are orange and temporary, which places them in a different family entirely.",
        excerptKey: "chevron-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s5_18",
        topic: "rightOfWay",
        question:
          "You have moved into the intersection waiting to turn left on a green light, and the light goes amber. What should you do?",
        choices: [
          "Turn immediately, whether or not oncoming traffic has stopped",
          "Complete the turn as soon as the way is clear — you are already lawfully in the intersection",
          "Reverse out of the intersection to clear it",
          "Hold your position until the light cycles back to green",
        ],
        correctIndex: 1,
        explanation:
          "Having entered on a green, you complete the manoeuvre when the way clears. Oncoming traffic facing amber is stopping if it safely can, which is what opens the gap.",
        context:
          "An unprotected left is a two-stage move: enter the intersection on green, then complete the turn when a gap appears. That is different from starting the turn on an amber from behind the stop line, which you should not do if you can stop safely. Waiting through a full cycle while sitting in the middle of the intersection blocks the cross traffic that is about to get its green, which is why finishing the turn is the right answer rather than the impatient one.",
        trap:
          "Turning the moment the light changes, without confirming oncoming traffic has actually stopped, is the version of this that causes collisions — amber does not guarantee everyone stops.",
        excerptKey: "left-turn-complete-in-intersection",
        sourceLabel: "Official MTO Driver's Handbook — Driving through intersections",
        sourceUrl: `${H}/driving-through-intersections`,
      },
      {
        id: "on_s5_19",
        topic: "signals",
        question: "How do pedestrian crossover markings differ from an ordinary crosswalk's?",
        choices: [
          "A crossover has no painted lines at all, only overhead signs",
          "A crossover is marked with a single stop line rather than parallel lines",
          "A crossover adds a large X painted in each approaching lane alongside the parallel white lines",
          "A crossover uses yellow lines instead of white",
        ],
        correctIndex: 2,
        explanation:
          "The X painted in each lane on the approach is the crossover's signature, on top of the parallel lines that any crosswalk has.",
        context:
          "The distinction matters because the obligations differ. At a crossover you must yield and then remain stopped until the pedestrian has crossed the entire road, and you may not pass another vehicle within 30 metres of it. Crossovers usually add overhead signs and flashing beacons and often push buttons. Failing to stop for one carries four demerit points, which is more than most moving violations.",
        trap:
          "Assuming yellow marks the more serious crossing is a reasonable guess from the line-colour convention, but yellow means opposing traffic and has nothing to do with pedestrians.",
        excerptKey: "crossover-markings",
        sourceLabel: "Official MTO Driver's Handbook — Pavement markings",
        sourceUrl: `${H}/pavement-markings`,
      },
      {
        id: "on_s5_20",
        topic: "rules",
        question: "How close to a pedestrian crossover does the law forbid you from passing another vehicle?",
        choices: ["Within 30 metres", "Within 15 metres", "Within 50 metres", "Within 100 metres"],
        correctIndex: 0,
        explanation:
          "Thirty metres. The vehicle you would be overtaking may be stopped for a pedestrian you cannot yet see, and passing puts you into the crossing at speed.",
        context:
          "This rule sits alongside the crossover's other obligations: yield to anyone on the crossing and stay stopped until they reach the far curb. The 30-metre buffer covers the approach from both directions. It is one of a family of sight-line rules — the same instinct governs why you may not pass on a hill or a curve, and why you keep back from a stopped school bus.",
        trap:
          "Fifteen metres feels about right because it is roughly a couple of car lengths, and because 15 appears elsewhere in the parking rules. The crossover figure is double that.",
        excerptKey: "crossover-no-passing",
        sourceLabel: "Official MTO Driver's Handbook — Changing positions",
        sourceUrl: `${H}/changing-positions`,
      },
      {
        id: "on_s5_21",
        topic: "signs",
        question: "A sign marks a school bus loading zone. What does that tell an approaching driver?",
        choices: [
          "Only school buses may use that stretch of road",
          "Buses load and unload here without using red lights and the stop arm, so no stop is required of you",
          "You must stop as though the red lights were flashing",
          "You may not drive past between 7 a.m. and 5 p.m.",
        ],
        correctIndex: 1,
        explanation:
          "The zone exists precisely so buses can pick up and drop off without activating the red lights and stop arm. Without those signals, the stopping obligation never arises.",
        context:
          "Everything about school bus stopping keys off the signals rather than the bus. Amber lights mean slow and prepare; red lights with the stop arm mean traffic in both directions stops, unless a median divides the road. In a designated loading zone the bus uses neither, because the zone is laid out so children are not crossing traffic. Drive through it slowly and expect children nearby, but you are not required to stop.",
        trap:
          "The reflex is that anything with the words school bus on it means stop. Here it means the opposite, which is what makes it a good test question.",
        excerptKey: "school-bus-loading-zone-sign",
        commonlyMissed: true,
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s5_22",
        topic: "impairment",
        question: "A driver registers over .08 at the roadside. What happens immediately?",
        choices: [
          "A 30-day licence suspension and a 14-day vehicle impoundment",
          "A 7-day licence suspension and no impoundment",
          "A 24-hour suspension pending a court date",
          "A 90-day licence suspension and a 7-day vehicle impoundment",
        ],
        correctIndex: 3,
        explanation:
          "Ninety days off the road and the vehicle impounded for seven, all administered at the roadside and entirely separate from whatever a court does later.",
        context:
          "Refusing to provide a breath sample brings the same immediate consequences as blowing over .08 — refusal is not a way out. These roadside measures run ahead of any criminal proceeding, so a driver can be suspended for 90 days and still be facing charges. A criminal conviction adds a much longer suspension on top, along with fines, mandatory programs and an ignition interlock requirement.",
        trap:
          "The 30-day-and-14-day pairing belongs to stunt driving, and it is easy to attach the more dramatic-sounding impoundment to the more serious-sounding offence.",
        sourceLabel: "Official MTO Driver's Handbook — Other ways to lose your licence",
        sourceUrl: `${H}/other-ways-lose-your-licence`,
      },
      {
        id: "on_s5_23",
        topic: "signs",
        question:
          "A yellow diamond shows two separated roadways coming back together into one. What is ahead?",
        choices: [
          "The divided highway ends and you will meet oncoming traffic on the same roadway",
          "A divided highway begins",
          "Two lanes in your direction merge into one",
          "The road is closed and traffic is being detoured",
        ],
        correctIndex: 0,
        explanation:
          "Two roadways closing into one means the division is ending. From that point the vehicles you meet are coming at you rather than travelling with you.",
        context:
          "Of the two divided-highway signs, this is the one that matters. Drivers who have spent an hour with no oncoming traffic relax their lane discipline and their passing judgement, and the sign exists to reset both before the first oncoming vehicle appears. Its mirror image, divided highway begins, shows one roadway opening into two and carries far less risk if you misread it.",
        commonlyMissed: true,
        trap:
          "The merge answer is genuinely tempting, because the symbol does show two things becoming one. But a lane merge involves traffic going your way; this involves traffic coming at you.",
        excerptKey: "divided-highway-ends-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s5_24",
        topic: "rules",
        question: "You realise too late that you have gone past your freeway exit. What is the correct response?",
        choices: [
          "Cut across the gore area quickly if no vehicle is beside you",
          "Use the next official-use-only median opening to turn around",
          "Carry on to the next exit and turn around there",
          "Stop on the shoulder and reverse back along it to the ramp",
        ],
        correctIndex: 2,
        explanation:
          "Take the next exit. Reversing, stopping or cutting back across a freeway are all far more dangerous than the extra few kilometres.",
        context:
          "Freeway design assumes every vehicle is moving forward at roughly the same speed, and every emergency on a freeway comes from breaking that assumption. That is also why you enter using the full acceleration lane to reach traffic speed before merging, why you signal into the deceleration lane before slowing rather than slowing in the through lane, and why a vehicle in trouble goes onto the nearest shoulder rather than stopping in a driving lane.",
        trap:
          "Crossing the painted gore looks harmless when nothing is beside you, but that is exactly where a vehicle already committed to the ramp emerges at a different speed and angle.",
        excerptKey: "freeway-missed-exit",
        sourceLabel: "Official MTO Driver's Handbook — Freeway driving",
        sourceUrl: `${H}/freeway-driving`,
      },
      {
        id: "on_s5_25",
        topic: "signs",
        question:
          "A white regulatory sign shows a straight upward arrow with a red slash through it. What does it prohibit?",
        choices: [
          "Entering the road at all",
          "Making a U-turn at the intersection",
          "Driving straight through the intersection",
          "Passing other vehicles beyond this point",
        ],
        correctIndex: 2,
        explanation:
          "The slashed straight arrow bans the through movement only. Turning left or right may still be permitted unless other signs say otherwise.",
        context:
          "Regulatory signs of this family all work the same way: the symbol shows the movement, the slash cancels it. A slashed left arrow bans left turns, a slashed U-shaped arrow bans U-turns, a slashed straight arrow bans going through. Read the arrow first and the slash second, and each of them decodes without memorisation. They are white rectangles because they are law, not warnings.",
        trap:
          "Reading it as a do-not-enter sign is the intuitive jump, since both feel like a barrier. Do not enter uses a red circle with a horizontal bar and blocks the road entirely.",
        excerptKey: "regulatory-circles",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s5_26",
        topic: "parking",
        question: "You are parking facing uphill on a road with no curb. Which way do you leave the front wheels?",
        choices: [
          "Turned sharply right, so the vehicle would roll off the road",
          "Turned sharply left, into the road",
          "Straight ahead, with the parking brake set",
          "Turned right only if the grade is steep",
        ],
        correctIndex: 0,
        explanation:
          "With no curb to catch the tires, the wheels point right so that any roll takes the vehicle onto the shoulder rather than into traffic.",
        context:
          "The whole rule is about where the vehicle ends up if the brakes let go. Facing downhill, wheels go toward the curb or right shoulder in every case. Facing uphill with a curb, wheels go left so the tires roll back and catch against it. Facing uphill without a curb, wheels go sharply right so gravity carries the vehicle off the road. Whichever way you point them, set the parking brake, leave the transmission in park or in gear, and take the key.",
        trap:
          "Uphill with a curb takes the wheels to the left, and that version is the one most people memorise. Remove the curb and the answer flips.",
        excerptKey: "parking-hill-uphill-no-curb",
        sourceLabel: "Official MTO Driver's Handbook — Parking along roadways",
        sourceUrl: `${H}/parking-along-roadways`,
      },
      {
        id: "on_s5_27",
        topic: "signals",
        question:
          "The broken white line beside you becomes noticeably wider, with the dashes closer together. What is it telling you?",
        choices: [
          "Passing is now prohibited",
          "You are entering a high occupancy vehicle lane",
          "The shoulder has been converted into a driving lane",
          "Your lane is about to end or lead off the road, so be ready to change lanes",
        ],
        correctIndex: 3,
        explanation:
          "That is a continuity line. Wider dashes packed closer together mean the lane you are in does not continue, and you need to move over to stay on your route.",
        context:
          "Most drivers read line colour and line pattern but never line weight, which is why this one catches people. It appears where a through lane becomes an exit-only lane on a freeway, and where a lane drops on an arterial. The instruction is not urgent — you have room — but ignoring it means being funnelled onto an exit or into a curb lane you did not want.",
        trap:
          "Reading it as an ordinary broken white line and staying put is exactly what the extra width is trying to prevent.",
        excerptKey: "continuity-lines",
        sourceLabel: "Official MTO Driver's Handbook — Pavement markings",
        sourceUrl: `${H}/pavement-markings`,
      },
      {
        id: "on_s5_28",
        topic: "emergencies",
        question: "Your brake pedal sinks to the floor at speed. What is the first thing to try?",
        choices: [
          "Shift straight into reverse",
          "Pump the pedal to try to rebuild hydraulic pressure",
          "Pull the parking brake on hard and all at once",
          "Switch the engine off to slow the vehicle down",
        ],
        correctIndex: 1,
        explanation:
          "Pumping can restore enough hydraulic pressure to give you braking back, at least temporarily. Only if that fails do you go to the parking brake, applied gradually.",
        context:
          "Emergency procedures share a logic: use the gentlest control that might work before escalating, and never do anything that costs you steering. Pumping the brakes costs you nothing. A parking brake yanked on at speed can lock the rear wheels and spin the car, so it goes on progressively. Killing the engine takes away power steering and brake assist, which is why it is not the opening move. The same principle explains lifting a stuck accelerator with your foot and shifting to neutral, and easing off the pedals in a skid rather than braking.",
        trap:
          "The parking brake sounds like the obvious backup because that is its name, and applied abruptly at speed it is how a brake failure becomes a collision.",
        excerptKey: "brake-failure",
        sourceLabel: "Official MTO Driver's Handbook — Dealing with emergencies",
        sourceUrl: `${H}/dealing-emergencies`,
      },
      {
        id: "on_s5_29",
        topic: "signs",
        question: "A sign on the back of a city bus tells following drivers to yield. When does it apply?",
        choices: [
          "At all times while you are behind that bus",
          "Only within a designated transit-priority lane",
          "Only when the bus has its four-way flashers on",
          "When the bus signals that it is pulling back into your lane from a stop",
        ],
        correctIndex: 3,
        explanation:
          "The obligation is triggered by the bus signalling its intention to re-enter traffic from a designated stop. Outside that moment, normal rules apply.",
        context:
          "This is one of a small set of transit-specific rules. Separately, a transit priority signal at an intersection obliges both traffic and pedestrians to yield to public transit vehicles. Streetcars carry their own rules again: pass on the right unless the road is one-way, and stay two metres behind the rear doors while passengers are getting on or off where there is no safety island.",
        trap:
          "Reading it as a permanent yield to the bus is the over-correction; it applies at the moment the bus signals, not for the whole time you are behind it.",
        excerptKey: "bus-yield-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s5_30",
        topic: "licensing",
        question:
          "Assuming the accompanying-driver rule is satisfied and no driving instructor is present, which road may a G1 driver legally use?",
        choices: [
          "The Queen Elizabeth Way",
          "A rural highway posted at 80 km/h",
          "The Don Valley Parkway",
          "The Gardiner Expressway",
        ],
        correctIndex: 1,
        explanation:
          "The 80 km/h rural highway is fine. The other three are named individually in the restrictions, whatever their posted limit happens to be.",
        context:
          "Two separate bans are at work. The first is generic: no 400-series highway posted above 80 km/h. The second is a specific list — the QEW, the Don Valley Parkway, the Gardiner Expressway, the E.C. Row Expressway in Windsor and the Conestoga Parkway in Kitchener-Waterloo — barred by name because they are high-speed roads without 400-series numbering. Both bans lift when a licensed driving instructor is supervising, which is how G1 drivers get highway practice.",
        trap:
          "Because the general rule is phrased around 400-series numbering, drivers assume the QEW and the Gardiner escape it. They are listed separately for exactly that reason.",
        excerptKey: "g1-400-series",
        sourceLabel: "Official MTO Driver's Handbook — Getting your driver's licence",
        sourceUrl: `${H}/getting-your-drivers-licence`,
      },
      {
        id: "on_s5_31",
        topic: "sharing",
        question: "How far back must you stay from a fire vehicle that is responding to an alarm?",
        choices: ["At least 100 metres", "At least 30 metres", "At least 150 metres", "At least 60 metres"],
        correctIndex: 2,
        explanation:
          "One hundred and fifty metres. Following closely behind a responding fire vehicle is an offence in itself, separate from any duty to pull over.",
        context:
          "The distance protects two things: the crew, who will stop abruptly and step out into the road on arrival, and the drivers ahead, who are pulling right in response to the siren and will not expect a second vehicle in the fire truck's slipstream. The related rules cover pulling as far right as safely possible and stopping when any emergency vehicle approaches with lights and siren, and slowing plus moving over for emergency and tow vehicles already stopped with lights flashing.",
        trap:
          "Sixty metres reads as a sensible following gap at urban speeds, and 150 sounds excessive — until you picture where the truck stops and where its crew goes next.",
        excerptKey: "fire-vehicle-150-metres",
        sourceLabel: "Official MTO Driver's Handbook — Dealing with particular situations",
        sourceUrl: `${H}/dealing-particular-situations`,
      },
      {
        id: "on_s5_32",
        topic: "signs",
        question: "A yellow diamond shows a car with wavy lines trailing from its rear wheels. What does it mean?",
        choices: [
          "The pavement becomes slippery when wet, so slow down",
          "The road ahead may be under water",
          "Loose gravel has been laid on the surface",
          "Vehicles skid here because of a steep downgrade",
        ],
        correctIndex: 0,
        explanation:
          "The wavy trails are the skid. The sign flags a surface that loses grip in the wet, which is a property of the pavement rather than of the weather.",
        context:
          "Surface-condition warnings all sit in the yellow diamond family and are all answered with speed. Nearby relatives include water over road, bump or uneven pavement, pavement narrows, and paved surface ends. What separates this one is that the hazard is conditional: on a dry day the stretch behaves normally, which is precisely why drivers who know the road get caught by it after the first rain.",
        trap:
          "Water over road is the plausible neighbour, and the two get confused. That one warns of water sitting on the surface; this one warns of the surface itself.",
        excerptKey: "warning-signs",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s5_33",
        topic: "rightOfWay",
        question:
          "You reach an intersection where the traffic lights are completely dark after a power failure. How do you proceed?",
        choices: [
          "Yield to traffic on your left, as you would entering a roundabout",
          "Treat it as an all-way stop, yielding to vehicles already in it and to traffic on your right",
          "Proceed as though you had a green, since nothing is showing against you",
          "Wait where you are until a police officer arrives to direct traffic",
        ],
        correctIndex: 1,
        explanation:
          "A dead signal becomes an all-way stop. You yield to anything already in the intersection and to traffic approaching from your right, then take your turn.",
        context:
          "This is a fallback rule, and it works because every approach applies it identically — the intersection reverts to the oldest and simplest protocol available. It is the same logic that governs an uncontrolled intersection with no signs at all. What it is not is permission to keep moving because nothing is telling you to stop; the absence of a signal is a stop, not a green.",
        trap:
          "Reading a dark signal as no instruction, and therefore as no obligation, is the assumption that causes collisions during outages when two drivers make it simultaneously.",
        excerptKey: "blank-traffic-lights",
        sourceLabel: "Official MTO Driver's Handbook — Traffic lights",
        sourceUrl: `${H}/traffic-lights`,
      },
      {
        id: "on_s5_34",
        topic: "sharing",
        question:
          "Which of these may legally use an Ontario 400-series HOV lane with only the driver aboard?",
        choices: [
          "A pickup truck towing a trailer",
          "A hybrid car with a standard plate",
          "A courier van making deliveries",
          "A motorcycle",
        ],
        correctIndex: 3,
        explanation:
          "Motorcycles are on the exempt list. So are buses, licensed taxis and airport limousines, emergency vehicles, and vehicles carrying green plates.",
        context:
          "Everything not on the exempt list needs at least two people aboard, the driver included. Entry and exit happen only where the striped buffer breaks into a broken white line with diamond markings — crossing the stripes is an offence and a common source of collisions, because HOV lane speeds differ sharply from the lane beside them. Improper HOV use draws a fine and three demerit points.",
        trap:
          "A hybrid feels like it should qualify, and green-plate vehicles genuinely are exempt — but the exemption comes from the plate, not from the drivetrain.",
        excerptKey: "hov-lane-sign",
        sourceLabel: "Ontario.ca — High occupancy vehicle (HOV) lanes",
        sourceUrl: `${ON}/high-occupancy-vehicle-hov-lanes`,
      },
      {
        id: "on_s5_35",
        topic: "signs",
        question:
          "Below a sign warning of a sharp bend, a smaller yellow tab reads 40. What does that number mean?",
        choices: [
          "The highest speed at which the curve can be taken safely, not the legal limit for the road",
          "The legal speed limit through the curve, enforceable on its own",
          "The minimum speed you must hold through the curve",
          "The distance in metres to the start of the curve",
        ],
        correctIndex: 0,
        explanation:
          "It is advisory. The legal limit remains whatever is posted on the white regulatory signs; the tab tells you what the geometry of the curve will tolerate.",
        context:
          "Colour separates advice from law throughout Ontario signage. Yellow means warning and advice; white rectangles with black lettering are regulatory and enforceable on their own terms. The same advisory logic appears on freeway ramps, where a yellow tab gives a safe ramp speed well below the highway limit. Ignoring an advisory speed is not itself an offence, but losing control because you did will be charged as one.",
        commonlyMissed: true,
        trap:
          "Because the number sits on a sign and looks exactly like a speed limit, it gets treated as one — either as a ticketable limit or, worse, as a floor you should not drop below.",
        excerptKey: "curve-advisory-speed-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s5_36",
        topic: "safety",
        question: "Your rear wheels start to slide out on an icy patch. What do you do?",
        choices: [
          "Accelerate gently to pull the car straight",
          "Steer opposite to the direction you want to travel",
          "Ease off the pedals and steer in the direction you want to go",
          "Brake hard and hold the wheel straight",
        ],
        correctIndex: 2,
        explanation:
          "Come off both pedals, and keep steering where you want the car to end up. On a very slippery surface, slipping the transmission into neutral helps too.",
        context:
          "A skid is a loss of grip, and every pedal input asks the tires for grip they do not currently have. Removing the demand is what lets them find the surface again. The steering half is about where you look — drivers go where their eyes go, so fixing on your intended path does most of the work. Related winter reflexes: no cruise control on snow or ice, low beams rather than high in a whiteout, and suspicion of any asphalt that looks black and glossy rather than grey-white.",
        trap:
          "Steering opposite is a garbled memory of the phrase steer into the skid, and it is the one response that makes the situation worse.",
        excerptKey: "skid-recovery",
        sourceLabel: "Official MTO Driver's Handbook — Driving at night and in bad weather",
        sourceUrl: `${H}/driving-night-and-bad-weather`,
      },
      {
        id: "on_s5_37",
        topic: "signs",
        question:
          "A yellow diamond shows the two edges of the road pinching inward, with no bridge structure drawn. What is it warning of?",
        choices: [
          "A narrow bridge crosses the road ahead",
          "The paved surface ends and gravel begins",
          "The pavement gets narrower ahead, though the lanes continue",
          "A lane ends and you will have to merge",
        ],
        correctIndex: 2,
        explanation:
          "The road stays the same road, with the same number of lanes; there is simply less width. You keep your position and expect less margin on both sides.",
        context:
          "Three warnings in this family look similar and mean different things. Pavement narrows means the width shrinks but the lanes remain. A narrow structure or bridge sign shows the outline of a structure and means the pinch has hard edges you can hit. A right lane ends sign means one lane genuinely disappears and somebody has to merge. Only the third involves a lane change; the other two involve holding your line more carefully.",
        trap:
          "The merge answer is the one most people pick, because narrowing and merging feel like the same event from the driver's seat. The lane count is what separates them.",
        excerptKey: "warning-signs",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s5_38",
        topic: "safety",
        question: "You drive into a snow squall and visibility drops to almost nothing. What is the right move?",
        choices: [
          "Get off the road if you can, use low beams, and switch cruise control off",
          "Switch to high beams so you can see further into the snow",
          "Keep cruise control engaged so your speed stays steady and predictable",
          "Stop in your lane and put the hazard lights on",
        ],
        correctIndex: 0,
        explanation:
          "Get out of the traffic stream if there is anywhere to go, drop to low beams, and take cruise control out of the equation entirely.",
        context:
          "High beams in a whiteout bounce off the snow in the air and reduce what you can see rather than increasing it, which is the same reason they fail in fog. Cruise control is worse than useless on a slippery surface because it will feed power to wheels that have already lost grip. Stopping in a live lane during near-zero visibility puts you exactly where the next vehicle cannot see you in time, which is why getting fully clear of the road is the first choice rather than the last.",
        trap:
          "High beams are the instinctive response to not being able to see, and in this specific situation they actively make it worse.",
        excerptKey: "whiteout",
        sourceLabel: "Official MTO Driver's Handbook — Driving at night and in bad weather",
        sourceUrl: `${H}/driving-night-and-bad-weather`,
      },
      {
        id: "on_s5_39",
        topic: "signals",
        question: "You face a transit priority signal at an intersection. Who has priority?",
        choices: [
          "Whoever has the green ball, transit included",
          "Pedestrians first, then transit, then other vehicles",
          "Whoever is already in the intersection, regardless of mode",
          "Public transit vehicles — other traffic and pedestrians yield to them",
        ],
        correctIndex: 3,
        explanation:
          "A transit priority signal exists to give buses and streetcars a head start, and both traffic and pedestrians yield to them where it is in use.",
        context:
          "These signals typically use a distinctive white bar display rather than the usual coloured balls, and they let transit vehicles clear the intersection ahead of general traffic so a route stays on schedule. It is one of several places where transit outranks the ordinary right-of-way sequence — the yield-to-bus sign on the back of a bus pulling out from a stop is another.",
        trap:
          "Assuming pedestrians always outrank vehicles is a sound instinct almost everywhere else, which is what makes this exception easy to miss.",
        excerptKey: "transit-priority-signal",
        sourceLabel: "Official MTO Driver's Handbook — Traffic lights",
        sourceUrl: `${H}/traffic-lights`,
      },
      {
        id: "on_s5_40",
        topic: "sharing",
        question:
          "You are following a tractor-trailer and cannot see the driver's face in either of the truck's mirrors. What does that tell you?",
        choices: [
          "You are close enough for the driver to spot you in the interior mirror",
          "The driver cannot see you either — drop back",
          "The truck's mirrors are badly adjusted, so it is safe to pass",
          "You are at a correct following distance for a vehicle that size",
        ],
        correctIndex: 1,
        explanation:
          "Mirrors work both ways. If the driver's face is not visible to you, you are inside a blind spot and the truck does not know you are there.",
        context:
          "Large vehicles have blind areas directly behind, along both sides and immediately in front of the cab, and the right-side one is the largest. Trucks also need far more room to stop than a car and swing wide on turns, sometimes moving left before turning right. The practical response is more following distance than the two-second baseline, and passing decisively rather than lingering alongside.",
        trap:
          "A tractor-trailer has no useful interior mirror at all, so the answer about the driver spotting you in one sounds reasonable to anyone thinking in terms of a car.",
        excerptKey: "truck-blind-spots",
        sourceLabel: "Official MTO Driver's Handbook — Sharing the road with other road users",
        sourceUrl: `${H}/sharing-road-other-road-users`,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Set 6 — Full G1 simulation",
    difficulty: "exam",
    description:
      "Forty questions built the way the real G1 is: twenty on signs and signals, twenty on rules of the road, scored as two independent halves. No hints, no easy run-ins, and the difficulty spread of an actual sitting.",
    questions: [
      {
        id: "on_s6_01",
        topic: "signs",
        question: "Which sign shape is used in Ontario for a single message and nothing else?",
        choices: [
          "The triangle, used only for yield",
          "The pentagon, used only for school zones",
          "The diamond, used only for construction",
          "The eight-sided octagon, used only for stop",
        ],
        correctIndex: 3,
        explanation:
          "The octagon carries one instruction and one only. That is why a stop sign is recognisable from behind, in the dark, or with snow across its face.",
        context:
          "Shape is the first layer of information on any Ontario sign. Diamonds warn, rectangles regulate or inform, the pentagon flags school areas, the crossbuck marks railways, and the octagon means stop. Triangles are not exclusive — the inverted triangle is a yield, but the slow-moving vehicle placard is also a triangle. Colour then adds a second layer: yellow for permanent warnings, orange for temporary ones, green for direction, white for regulation.",
        trap:
          "Yield looks like the obvious second single-purpose shape, but the triangle appears elsewhere, most visibly on the back of farm equipment.",
        excerptKey: "stop-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s6_02",
        topic: "licensing",
        question: "What is the blood alcohol limit for a driver holding a G1 licence?",
        choices: ["Under .08", "Zero", "Under .02", "Under .05"],
        correctIndex: 1,
        explanation:
          "Zero. The requirement applies to every novice driver and to every driver aged 21 and under, whatever class of licence they hold.",
        context:
          "Zero tolerance is a condition of the licence rather than a criminal threshold, which is why breaching it costs you the licence directly rather than adding demerit points. Fully licensed adult drivers face a warn range starting at .05 and a criminal threshold at .08, but neither figure is available to a novice. The accompanying driver sitting beside a G1 must be under .05 — that is the only .05 in the picture.",
        trap:
          "The .05 warn range is a genuine Ontario number and gets applied to the wrong person. It belongs to the supervisor, not the learner.",
        excerptKey: "g1-zero-bac",
        sourceLabel: "Official MTO Driver's Handbook — Getting your driver's licence",
        sourceUrl: `${H}/getting-your-drivers-licence`,
      },
      {
        id: "on_s6_03",
        topic: "signs",
        question: "A triangle standing on its point, white with a wide red border, faces you. What must you do?",
        choices: [
          "Merge left without stopping",
          "Stop only if a vehicle is visible on the crossing road",
          "Slow down, and stop if necessary, to let traffic in or near the intersection go first",
          "Come to a complete stop every time, then proceed",
        ],
        correctIndex: 2,
        explanation:
          "A yield requires you to give way. Sometimes that means slowing, sometimes it means stopping outright — the sign leaves that to the traffic conditions.",
        context:
          "Yield and stop differ in that a stop sign mandates the halt regardless of whether anything is coming, while a yield mandates only the outcome: traffic already in or approaching the intersection goes ahead of you. That is why yields appear on merges and ramps, where stopping would be more dangerous than blending. Arriving at a yield too fast to stop if you have to is the failure mode the sign is guarding against.",
        trap:
          "Treating a yield as a stop sign is harmless in traffic but wrong on the test; treating it as a merge with automatic priority is wrong in both places.",
        excerptKey: "yield-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s6_04",
        topic: "speed",
        question: "No speed limit is posted on the town street you are driving. What is the maximum?",
        choices: ["50 km/h", "60 km/h", "80 km/h", "40 km/h"],
        correctIndex: 0,
        explanation:
          "Fifty. That is Ontario's default inside cities, towns and villages wherever no sign says otherwise.",
        context:
          "Two defaults cover every unposted road: 50 km/h inside built-up areas and 80 km/h outside them. Posted signs override both. The default is a legal maximum for good conditions, not an entitlement — rain, snow, heavy traffic and construction all require you to travel below it, and doing the posted number in conditions that do not support it can still be charged.",
        trap:
          "Because so many residential streets are signed at 40, that number gets treated as the default. It only applies where posted.",
        excerptKey: "default-speed-limits",
        sourceLabel: "Official MTO Driver's Handbook — Driving along",
        sourceUrl: `${H}/driving-along`,
      },
      {
        id: "on_s6_05",
        topic: "signals",
        question: "The light ahead turns amber as you approach. What does the law ask of you?",
        choices: [
          "Treat it as a flashing amber and proceed without slowing",
          "Stop if you can do so safely; otherwise carry on through with caution",
          "Stop in all circumstances, even if it means braking hard",
          "Accelerate to clear the intersection before the red",
        ],
        correctIndex: 1,
        explanation:
          "Amber means red is coming. You stop if stopping is safe, and if it is not — because you are too close or somebody is tight behind you — you continue through carefully.",
        context:
          "The amber phase exists to clear the intersection, not to extend the green. Judging it well means deciding early: at the point where the light changes you either have room to stop comfortably or you do not, and the decision should be made once rather than revised halfway. Hard braking that risks a rear-end collision is not what the rule asks for, and neither is accelerating to beat the red.",
        trap:
          "The absolute-stop answer sounds like the responsible one and is what many drivers assume the law says, but stopping unsafely is explicitly not required.",
        excerptKey: "yellow-light",
        sourceLabel: "Official MTO Driver's Handbook — Traffic lights",
        sourceUrl: `${H}/traffic-lights`,
      },
      {
        id: "on_s6_06",
        topic: "rightOfWay",
        question: "Three vehicles arrive at an all-way stop at clearly different moments. Who goes first?",
        choices: [
          "The vehicle furthest to the right of the group",
          "The vehicle travelling straight through",
          "The vehicle that entered the intersection area first, stopped or not",
          "The first vehicle to come to a complete stop",
        ],
        correctIndex: 3,
        explanation:
          "The order is the order in which vehicles complete their stops. Arriving first without stopping does not put you at the head of the queue.",
        context:
          "An all-way stop runs on two rules layered on top of each other. The primary rule is order of stopping. The secondary rule, used only when two vehicles stop together, gives the tie to the vehicle on the right. Direction of travel does not enter into it, and neither does vehicle size. If the sequence gets muddled, the safe recovery is to yield rather than to assert your turn.",
        trap:
          "Rolling up first and treating that as your place in the queue is common and wrong — the clock starts when the wheels stop.",
        excerptKey: "all-way-stop",
        sourceLabel: "Official MTO Driver's Handbook — Driving through intersections",
        sourceUrl: `${H}/driving-through-intersections`,
      },
      {
        id: "on_s6_07",
        topic: "signs",
        question: "A yellow diamond shows the silhouette of a leaping deer. What is it telling you?",
        choices: [
          "Deer cross this road regularly — watch for animals, especially at dawn and dusk",
          "A wildlife sanctuary lies ahead and hunting is prohibited",
          "Livestock may be driven across the road by a farmer",
          "The road passes through a provincial park with reduced limits",
        ],
        correctIndex: 0,
        explanation:
          "It is a hazard warning about animals using the road. Where you see it, deer are known to cross in numbers, not occasionally.",
        context:
          "The yellow diamond family includes several animal warnings — deer, moose, and in some areas cattle or snowmobile crossings. The response is the same for all of them: reduce speed, scan the shoulders and the treeline rather than only the pavement, and remember that animals travel in groups, so a second one usually follows the first. Braking in a straight line is generally safer than swerving.",
        trap:
          "Reading it as a park or sanctuary boundary turns a hazard warning into a piece of scenery, which is exactly the frame of mind that leads to a collision.",
        excerptKey: "warning-signs",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s6_08",
        topic: "sharing",
        question:
          "You are behind a school bus whose upper red lights are flashing and whose stop arm is out. What is required?",
        choices: [
          "Slow to walking pace and pass on the left when clear",
          "Stop at least 5 metres back and proceed when the driver waves you through",
          "Stop at least 20 metres back and stay stopped until the lights stop and the arm folds in",
          "Stop at least 20 metres back and go once the children have left the roadway",
        ],
        correctIndex: 2,
        explanation:
          "Twenty metres back, and you hold until the signals are switched off and the arm is retracted. The bus driver controls when traffic moves again.",
        context:
          "Amber lights are the warning that the stop is coming; red lights with the stop arm are the stop itself. Traffic in both directions stops unless the road is divided by a median, in which case only vehicles behind the bus are obliged to. A first offence brings six demerit points and a fine starting at $400, and the registered owner of a vehicle can be charged on camera evidence even if they were not driving.",
        trap:
          "Going as soon as the children look clear is the tempting shortcut, but a child who has crossed can turn back for a dropped bag while the arm is still out.",
        excerptKey: "school-bus-stop-arm",
        sourceLabel: "Official MTO Driver's Handbook — Stopping",
        sourceUrl: `${H}/stopping`,
      },
      {
        id: "on_s6_09",
        topic: "signals",
        question:
          "You want to turn right at a red light and there is no sign prohibiting it. What is required first?",
        choices: [
          "A complete stop only if pedestrians are present",
          "Nothing extra — a right on red works like a yield",
          "A complete stop, then a wait until the way is genuinely clear",
          "A slowdown sufficient to check for cross traffic",
        ],
        correctIndex: 2,
        explanation:
          "Full stop first, then yield. Cross traffic has a green and pedestrians may have a walk signal, so both go ahead of you.",
        context:
          "Turning right on red is a permission that can be withdrawn: a posted sign at that approach cancels it entirely. Ontario allows one other turn against a red, a left from a one-way road onto another one-way road, and it follows the same stop-then-yield sequence. In both cases the stop must be complete and it must be made at the stop line, or at the crosswalk or intersection edge if no line is painted.",
        commonlyMissed: true,
        trap:
          "The rolling stop is what most drivers actually perform, so it reads as the normal answer. Slowing is not stopping, and the distinction is the whole rule.",
        excerptKey: "right-turn-on-red",
        sourceLabel: "Official MTO Driver's Handbook — Traffic lights",
        sourceUrl: `${H}/traffic-lights`,
      },
      {
        id: "on_s6_10",
        topic: "licensing",
        question: "How long must a driver hold a G1 before attempting the first road test?",
        choices: [
          "Twelve months, or eight with an approved driver-education course",
          "Eight months, or four with an approved driver-education course",
          "Twelve months, with no reduction available",
          "Six months, regardless of driver education",
        ],
        correctIndex: 0,
        explanation:
          "Twelve months as standard, cut to eight by completing a ministry-approved driver-education course.",
        context:
          "Level Two then runs a minimum of twelve months of its own before the second road test, so the whole graduated sequence takes at least twenty months. The five-year clock is the other figure worth knowing: you have five years to finish the process, and running out means starting over. The driver-education discount applies only to the first stage.",
        trap:
          "Assuming the course shortens every stage is the natural reading. The eight-month figure applies to Level One alone.",
        excerptKey: "g1-twelve-months",
        sourceLabel: "Official MTO Driver's Handbook — Getting your driver's licence",
        sourceUrl: `${H}/getting-your-drivers-licence`,
      },
      {
        id: "on_s6_11",
        topic: "signs",
        question: "What does a white X-shaped sign with a red outline, standing at the roadside, mark?",
        choices: [
          "A pedestrian crossover",
          "A four-way intersection with restricted sight lines",
          "A level crossing that has been permanently closed",
          "A railway crossing",
        ],
        correctIndex: 3,
        explanation:
          "The crossbuck marks the railway crossing itself, at the point where the tracks meet the road.",
        context:
          "Crossings are signed in sequence. A yellow diamond gives advance warning and shows the angle of the tracks. The crossbuck stands at the crossing. Where the crossing is protected, flashing red signals and a gate are added. If a train is coming you stop at least five metres from the nearest rail or gate, wait for the signals to stop and the gate to rise, and never drive around a barrier that is down or moving.",
        trap:
          "A white X is also painted on the pavement at pedestrian crossovers, and that overlap sends people to the wrong answer.",
        excerptKey: "railway-crossing-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s6_12",
        topic: "signals",
        question: "The line immediately to the left of your lane is broken yellow. What does it permit?",
        choices: [
          "You may cross it only where a passing lane is signed",
          "You may cross to pass when the way ahead is clear",
          "You may cross only to make a left turn into a driveway",
          "You may not cross it under any circumstances",
        ],
        correctIndex: 1,
        explanation:
          "Broken means crossing is allowed; yellow means what is on the other side is oncoming traffic. Together they mean passing is permitted if the road ahead is clear.",
        context:
          "Read the line on your own side of the centre, because the two directions can be governed differently. Solid on your side means no passing; broken on your side means passing is permitted. A pair showing one of each is common on hills and curves, where one direction has the sight lines and the other does not. White lines, by contrast, separate traffic travelling the same way.",
        commonlyMissed: true,
        trap:
          "People read the pair of lines as a unit rather than reading the nearer one, which produces the wrong answer half the time by pure chance.",
        excerptKey: "broken-line-passing",
        sourceLabel: "Official MTO Driver's Handbook — Pavement markings",
        sourceUrl: `${H}/pavement-markings`,
      },
      {
        id: "on_s6_13",
        topic: "safety",
        question: "Which of these correctly states Ontario's minimum following distance in good conditions?",
        choices: [
          "Two car lengths behind the vehicle ahead",
          "Twenty metres behind the vehicle ahead",
          "Four seconds behind the vehicle ahead",
          "Two seconds behind the vehicle ahead",
        ],
        correctIndex: 3,
        explanation:
          "Two seconds, measured in time rather than distance so that the gap scales automatically with speed.",
        context:
          "Two seconds is the floor under ideal conditions, and almost nothing about real driving is ideal. Add time on wet or icy roads, behind motorcycles and large trucks, when you are carrying a heavy load, and at night. To measure it, watch the vehicle ahead pass a fixed object and count two full seconds before your own front bumper reaches the same point.",
        trap:
          "Four seconds is not wrong as advice, and it is what several other guides teach, but the figure Ontario states as the minimum is two.",
        excerptKey: "following-distance",
        sourceLabel: "Official MTO Driver's Handbook — Driving along",
        sourceUrl: `${H}/driving-along`,
      },
      {
        id: "on_s6_14",
        topic: "sharing",
        question: "What lateral clearance does the law ask you to give when overtaking a cyclist?",
        choices: ["The full width of the lane", "One metre, where practical", "Half a metre", "Two metres"],
        correctIndex: 1,
        explanation:
          "One metre where practical, and failing to give it brings a fine and two demerit points.",
        context:
          "The metre exists because a cyclist can be pushed sideways by your slipstream, or can swerve for a pothole, a sewer grate or an opening car door. Where the lane is too narrow to give a metre, the answer is to wait rather than to squeeze. Related duties: do not drive in a bike lane except to complete a turn, and check the mirror and shoulder for an approaching cyclist before opening any door on the traffic side.",
        trap:
          "Half a metre looks like plenty from inside the car, which is precisely why the law puts a number on it instead of leaving it to judgement.",
        excerptKey: "cyclist-one-metre",
        sourceLabel: "Official MTO Driver's Handbook — Sharing the road with other road users",
        sourceUrl: `${H}/sharing-road-other-road-users`,
      },
      {
        id: "on_s6_15",
        topic: "signs",
        question:
          "A white rectangular sign shows a U-shaped arrow with a red slash across it. What does it prohibit?",
        choices: [
          "Entering the road ahead",
          "Making a right turn on a red light",
          "Turning around to travel in the opposite direction",
          "Turning left at the intersection",
        ],
        correctIndex: 2,
        explanation:
          "It bans the U-turn at that location. Left turns and other movements remain available unless separately prohibited.",
        context:
          "Prohibition signs are read in two parts: the symbol names the movement and the slash cancels it. Even where no sign is posted, U-turns are illegal on a curve, near a hilltop, and near a bridge, tunnel or railway crossing that blocks the view — and where one is legal you still need a clear view of at least 150 metres in both directions before committing.",
        trap:
          "The no-left-turn sign uses a similar bent arrow and gets confused with this one at a glance. The U-shape is the tell.",
        excerptKey: "regulatory-circles",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s6_16",
        topic: "parking",
        question: "What is the minimum distance you must keep from a fire hydrant when parking?",
        choices: ["3 metres", "5 metres", "9 metres", "15 metres"],
        correctIndex: 0,
        explanation: "Three metres, the smallest clearance in Ontario's parking list.",
        context:
          "The clearances worth holding together: 3 metres from a hydrant, 6 from the public entrance of a hotel, theatre or public hall while open, 9 from an ordinary intersection, 15 from a signalised intersection, 15 from the nearest rail of a railway crossing, and none at all on or within 100 metres of a bridge. Beyond the list, never park where approaching drivers cannot see at least 125 metres in either direction.",
        trap:
          "Nine and fifteen metres both belong to intersections, and they migrate onto the hydrant rule more than any other pair of numbers here.",
        excerptKey: "parking-hydrant",
        sourceLabel: "Official MTO Driver's Handbook — Parking along roadways",
        sourceUrl: `${H}/parking-along-roadways`,
      },
      {
        id: "on_s6_17",
        topic: "signs",
        question: "A large green rectangular sign hangs over the highway. What kind of sign is it?",
        choices: [
          "A temporary sign covering a construction detour",
          "Information and direction — destinations, distances and exits",
          "A regulatory sign carrying an enforceable instruction",
          "A warning about a permanent road hazard",
        ],
        correctIndex: 1,
        explanation:
          "Green is Ontario's colour for guidance: where places are, how far away they are, and which lane gets you there.",
        context:
          "Colour sorts the whole system quickly. Green means direction and destination. White with black lettering means regulation, and carries the force of law. Yellow means a permanent warning, orange a temporary one. Blue marks off-road facilities and services such as hospitals, airports and carpool lots. Reading the colour first narrows what the sign can possibly be saying before you decode the symbol.",
        trap:
          "Overhead placement suggests regulation, because lane-control signs also hang above the road. Regulatory overheads are white, not green.",
        excerptKey: "information-direction-signs",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s6_18",
        topic: "emergencies",
        question: "Which collision must be reported to police?",
        choices: [
          "Any collision at all, whatever the damage",
          "Only collisions where a vehicle cannot be driven away",
          "One where nobody is hurt and total damage looks like about $1,500",
          "One where nobody is hurt but total damage looks like about $7,000",
        ],
        correctIndex: 3,
        explanation:
          "Apparent damage above $5,000 to vehicles or property requires a police report, as does any injury. Seven thousand clears the threshold; fifteen hundred does not.",
        context:
          "Below the threshold and with nobody injured, you are still legally required to exchange information — names, addresses, licence and plate numbers, insurance details — and it is worth photographing the scene and collecting witness contacts. The dollar figure covers total damage across everything involved, not just your own vehicle, so it is reached more easily than people expect. Move drivable vehicles out of the traffic lanes before doing any of this.",
        commonlyMissed: true,
        trap:
          "The old $2,000 threshold is still repeated widely, and anyone working from it will report collisions that no longer need reporting and misjudge the ones that do.",
        excerptKey: "collision-report-5000",
        sourceLabel: "Official MTO Driver's Handbook — Dealing with emergencies",
        sourceUrl: `${H}/dealing-emergencies`,
      },
      {
        id: "on_s6_19",
        topic: "signals",
        question: "A white arrow is painted on the surface of the lane you are in. What does it mean?",
        choices: [
          "You may travel only in the direction the arrow shows",
          "It suggests the recommended path but leaves the choice to you",
          "It marks the lane as reserved for turning vehicles at peak hours",
          "It shows where the lane ends further ahead",
        ],
        correctIndex: 0,
        explanation:
          "A painted lane arrow is a requirement, not a suggestion. Being in that lane commits you to that movement.",
        context:
          "Lane arrows appear on the pavement and often on overhead signs before an intersection, and they exist to sort traffic before it arrives rather than at the last moment. Getting into the wrong lane is fixed by making the movement the lane requires and correcting afterward — cutting across at the stop line is both illegal and the way turning collisions happen.",
        trap:
          "Treating the arrow as advice is what produces the last-second lane change, and it is the misreading the wording of this question is built around.",
        excerptKey: "lane-arrow",
        sourceLabel: "Official MTO Driver's Handbook — Pavement markings",
        sourceUrl: `${H}/pavement-markings`,
      },
      {
        id: "on_s6_20",
        topic: "rules",
        question:
          "The signals at a railway crossing are flashing and a train is approaching. Where do you stop?",
        choices: [
          "At least 10 metres from the nearest rail",
          "Immediately behind the painted stop line, whatever its position",
          "At least 5 metres from the nearest rail or gate",
          "At least 2 metres from the nearest rail",
        ],
        correctIndex: 2,
        explanation:
          "Five metres from the nearest rail or from the gate. Trains overhang their rails by a considerable margin, and freight can swing wider again.",
        context:
          "Once stopped you wait for the signals to stop flashing and for any gate to rise fully. Driving around a gate that is down, lowering or lifting is prohibited outright. Avoid changing gear on the tracks. Most buses must stop at crossings without gates, signals or a stop sign, and school buses stop at every crossing regardless. A train under emergency braking can need up to two kilometres to halt, so the entire margin of safety is on your side of the equation.",
        trap:
          "Two metres sounds plausible because it resembles the streetcar figure, and it puts your bumper inside the swing of a passing train.",
        excerptKey: "railway-stop-distance",
        sourceLabel: "Official MTO Driver's Handbook — Stopping",
        sourceUrl: `${H}/stopping`,
      },
      {
        id: "on_s6_21",
        topic: "signs",
        question: "A diamond symbol appears on signs above the leftmost lane of a freeway. What does it designate?",
        choices: [
          "A lane that ends at the next interchange",
          "A lane restricted to commercial vehicles",
          "A high occupancy vehicle lane, needing at least two people aboard",
          "A lane reserved for passing only",
        ],
        correctIndex: 2,
        explanation:
          "The diamond marks an HOV lane. On Ontario's provincial highways the minimum is two occupants, counting the driver.",
        context:
          "The diamond appears both on overhead signs and painted on the pavement, and the lane is separated from general traffic by a striped buffer zone. You may only enter or leave where the buffer breaks into a broken white line — crossing the stripes is an offence. Buses, licensed taxis and airport limousines, emergency vehicles, motorcycles and green-plate vehicles may use the lane with the driver alone.",
        trap:
          "Treating it as a passing lane is the everyday misuse. The lane is defined by who is in the vehicle, not by what the vehicle is doing.",
        excerptKey: "hov-lane-sign",
        sourceLabel: "Ontario.ca — High occupancy vehicle (HOV) lanes",
        sourceUrl: `${ON}/high-occupancy-vehicle-hov-lanes`,
      },
      {
        id: "on_s6_22",
        topic: "licensing",
        question:
          "A 19-year-old has held a G2 for three months. Between midnight and 5 a.m., how many passengers aged 19 or under may be carried?",
        choices: ["One", "Two", "Three", "No limit, provided everyone is belted"],
        correctIndex: 0,
        explanation:
          "One, for the first six months of the G2. After six months the allowance rises to three, until the driver turns 20 or reaches a full G.",
        context:
          "The restriction only bites between midnight and 5 a.m., and only for drivers aged 19 and under. Two exemptions cancel it: carrying a fully licensed driver in the front passenger seat, and carrying immediate family members. Note the contrast with G1, where the midnight-to-five window bans driving altogether rather than limiting who is aboard.",
        commonlyMissed: true,
        trap:
          "Three is the correct figure for the same driver a few months later, which makes it the obvious wrong answer here — the six-month mark is what separates them.",
        excerptKey: "g2-passenger-restriction",
        sourceLabel: "Official MTO Driver's Handbook — Getting your driver's licence",
        sourceUrl: `${H}/getting-your-drivers-licence`,
      },
      {
        id: "on_s6_23",
        topic: "signs",
        question: "What is signalled by a five-sided sign in fluorescent yellow-green?",
        choices: [
          "A pedestrian crossover with flashing beacons",
          "A community safety zone boundary",
          "A playground with restricted parking",
          "A school area or school crossing",
        ],
        correctIndex: 3,
        explanation:
          "The pentagon shape and the fluorescent yellow-green colour are both reserved for school warnings, so either one alone identifies it.",
        context:
          "Fluorescent yellow-green is used where the hazard is people on foot, particularly children, because it reads differently from ordinary yellow in poor light. School signs in this family include the school area warning, the school crossing warning, and signs about crossing guards. Separately, a school zone may carry a lower posted limit that applies during specified hours or while yellow lights are flashing.",
        trap:
          "Community safety zones often surround schools, and their signs sit nearby — but those are rectangular and say what they are in words.",
        excerptKey: "school-zone-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s6_24",
        topic: "rightOfWay",
        question: "Which statement about driving an Ontario roundabout is correct?",
        choices: [
          "Traffic flows counter-clockwise and drivers must come to a full stop before entering",
          "Traffic flows counter-clockwise and entering drivers yield to traffic already circulating",
          "Traffic flows clockwise and circulating drivers yield to entering traffic",
          "Traffic flows counter-clockwise and the vehicle on the right always has priority",
        ],
        correctIndex: 1,
        explanation:
          "Counter-clockwise, with the central island always on your left, and traffic already going around has the right of way over anyone entering.",
        context:
          "Pick your lane before you arrive: the right lane serves right turns and straight-through, the left lane serves left turns and straight-through. Signal right once you have passed the exit before the one you want. Trucks and buses may need both lanes and the mountable apron, so leave them room. Cyclists commonly hold the centre of a lane, and pedestrians cross at the splitter islands on entry and exit.",
        trap:
          "The full-stop answer is wrong in a way that causes real problems: a roundabout entry is a yield, and stopping when a gap is available backs traffic up behind you.",
        excerptKey: "roundabout-counter-clockwise",
        sourceLabel: "Official MTO Driver's Handbook — Changing directions",
        sourceUrl: `${H}/changing-directions`,
      },
      {
        id: "on_s6_25",
        topic: "signals",
        question: "What does a flashing amber traffic light mean?",
        choices: [
          "Stop, then proceed when the way is clear",
          "The signal has failed; treat it as an all-way stop",
          "Prepare to stop, because a red is about to appear",
          "Proceed through the intersection with caution, without stopping",
        ],
        correctIndex: 3,
        explanation:
          "It is a caution signal, not a stop signal. You slow, assess and continue through without coming to a halt.",
        context:
          "The flashing set is worth learning together because each member behaves differently. Flashing amber means proceed with caution. Flashing red means stop, then go when safe. Flashing green is an advance green and gives your whole approach the right of way while oncoming traffic holds. A signal showing nothing at all is treated as an all-way stop. Flashing ambers and flashing reds often face each other across the same intersection, with the flashing red facing the minor road.",
        trap:
          "Reading it as a steady amber and preparing for a red is the natural transfer, but a flashing amber never turns red — it is the intersection's permanent mode.",
        excerptKey: "flashing-yellow-light",
        sourceLabel: "Official MTO Driver's Handbook — Traffic lights",
        sourceUrl: `${H}/traffic-lights`,
      },
      {
        id: "on_s6_26",
        topic: "signs",
        question: "A white regulatory sign tells you that passing is prohibited. How long does that apply?",
        choices: [
          "Until the next intersection, whichever comes first",
          "Until a sign or the pavement markings indicate that passing is permitted again",
          "For exactly 500 metres from the sign",
          "Only while an oncoming vehicle is in sight",
        ],
        correctIndex: 1,
        explanation:
          "The prohibition holds until something tells you otherwise — a sign ending it, or centre-line markings that allow passing from your side.",
        context:
          "Signs and pavement markings work as a pair here. A no-passing sign is regulatory and white; the solid yellow line beside your lane carries the same message continuously along the road. Where the line beside you turns broken, passing becomes permitted again if the way is clear. On top of both, passing is prohibited within 30 metres of a pedestrian crossover, and moving snow plows are never to be passed.",
        trap:
          "Attaching a fixed distance to the sign feels tidy, but nothing about a no-passing sign expires on its own.",
        excerptKey: "regulatory-signs",
        sourceLabel: "Official MTO Driver's Handbook — Changing positions",
        sourceUrl: `${H}/changing-positions`,
      },
      {
        id: "on_s6_27",
        topic: "safety",
        question: "Which statement about headlight use is correct?",
        choices: [
          "They are required only between 8 p.m. and 6 a.m. outside built-up areas",
          "They are required whenever the wipers are running, and at no other time",
          "They are required from half an hour before sunset to half an hour after sunrise, and whenever you cannot clearly see people or vehicles less than 150 metres away",
          "They are required from sunset to sunrise, and daytime running lights cover everything else",
        ],
        correctIndex: 2,
        explanation:
          "There are two independent triggers: a clock rule with a half-hour buffer at each end, and a visibility rule set at 150 metres.",
        context:
          "Daytime running lights do not satisfy either trigger, because they leave the tail lights dark — which makes a vehicle nearly invisible from behind in rain, fog or snow. Turning the headlights on properly also brings up the parking lights, tail lights and rear licence plate light. At night, drop from high to low beams within 150 metres of an oncoming vehicle and whenever you are less than 60 metres behind a vehicle you are following.",
        trap:
          "Sunset-to-sunrise is close enough to feel right, and it is the version most drivers carry, but it leaves out the buffer the law actually specifies.",
        excerptKey: "headlights-when-required",
        sourceLabel: "Official MTO Driver's Handbook — Getting ready to drive",
        sourceUrl: `${H}/getting-ready-drive`,
      },
      {
        id: "on_s6_28",
        topic: "impairment",
        question:
          "On a highway posted at 100 km/h, at what speed does a driver cross into stunt driving territory?",
        choices: ["150 km/h", "140 km/h", "145 km/h", "130 km/h"],
        correctIndex: 0,
        explanation:
          "Two thresholds are in play here and both land on 150. Fifty over a 100 km/h limit is 150, and 150 km/h anywhere in the province qualifies regardless of the posted limit.",
        context:
          "The three triggers: 40 km/h or more over where the limit is below 80, 50 km/h or more over anywhere, and an absolute 150 km/h anywhere including stretches posted at 110. At the roadside the driver loses the licence for 30 days and the vehicle is impounded for 14, before any court hearing. Conviction adds a fine of $2,000 to $10,000, six demerit points, possible jail, and a suspension measured in years.",
        commonlyMissed: true,
        trap:
          "Forty over is the threshold people remember, which puts them at 140 — but that lower figure only applies where the posted limit is below 80 km/h.",
        sourceLabel: "Ontario.ca — Speeding and aggressive driving",
        sourceUrl: `${ON}/speeding-and-aggressive-driving`,
      },
      {
        id: "on_s6_29",
        topic: "signs",
        question:
          "A yellow diamond shows two arrows pointing in opposite directions, one up and one down. What is ahead?",
        choices: [
          "Traffic in the lane beside you is reversible by time of day",
          "The road carries traffic in both directions — share it with oncoming vehicles",
          "A two-way left turn lane begins",
          "A divided highway begins",
        ],
        correctIndex: 1,
        explanation:
          "It warns that you are entering or continuing on a two-way road, which matters most where drivers have just come off a one-way street or a divided section.",
        context:
          "The sign exists for a transition, not a permanent condition. It goes up where drivers might reasonably have assumed no oncoming traffic — at the end of a one-way stretch, or downstream of a divided highway ending. The response is lane discipline: stay right, reassess your passing options, and expect headlights.",
        trap:
          "The divided highway begins sign also shows two flows of traffic, and the two get swapped. This one puts them on the same roadway; that one separates them.",
        excerptKey: "warning-signs",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s6_30",
        topic: "licensing",
        question: "Demerit points remain on a driver's record for how long?",
        choices: [
          "Two years from the date of conviction",
          "Three years from the date of the offence",
          "One year from the date of conviction",
          "Two years from the date of the offence",
        ],
        correctIndex: 3,
        explanation:
          "Two years, counted from when the offence happened rather than from when the conviction was entered.",
        context:
          "Because the clock runs from the offence date, a charge that takes months to reach court arrives with part of its life already spent. Points accumulate within that two-year window, and the thresholds differ sharply by licence class: a novice driver is suspended at nine points for 60 days, while a fully licensed driver has until fifteen and is suspended for 30. The driving record itself is kept far longer than the points.",
        trap:
          "Dating it from conviction is the intuitive reading and will have you expecting the points to clear months later than they actually do.",
        excerptKey: "demerit-two-years",
        sourceLabel: "Official MTO Driver's Handbook — Keeping your driver's licence",
        sourceUrl: `${H}/keeping-your-drivers-licence`,
      },
      {
        id: "on_s6_31",
        topic: "signals",
        question:
          "A pedestrian signal shows a steady walking-person symbol. What does that mean for people crossing?",
        choices: [
          "They may begin crossing",
          "They should finish crossing but not start",
          "They must wait on the curb",
          "They may cross only in the direction the figure faces",
        ],
        correctIndex: 0,
        explanation:
          "The walking figure is the green light for pedestrians: this is the phase in which a crossing may be started.",
        context:
          "Three displays cover the cycle. The walking figure means begin. The flashing hand, with or without a countdown, means do not start but finish if you are already out there. The steady hand means remain on the curb. None of them removes a driver's obligation to yield to somebody still in the crosswalk, which is why a turning driver with a green can still be required to wait.",
        trap:
          "Assuming the walking figure guarantees a clear road is the pedestrian's version of the error; from the driver's side, assuming it does not concern you is the equivalent.",
        excerptKey: "pedestrian-signals",
        sourceLabel: "Official MTO Driver's Handbook — Pedestrian signals",
        sourceUrl: `${H}/pedestrian-signals`,
      },
      {
        id: "on_s6_32",
        topic: "sharing",
        question:
          "A streetcar ahead of you has stopped and passengers are getting off. There is no safety island. What must you do?",
        choices: [
          "Pass on the left at a reduced speed",
          "Stop at least 20 metres behind and wait",
          "Stop at least 2 metres behind its rear doors and wait",
          "Stop at least 5 metres behind its rear doors and wait",
        ],
        correctIndex: 2,
        explanation:
          "Two metres behind the rear doors. Passengers step down directly into the roadway, and that gap is all that separates them from traffic.",
        context:
          "Streetcars carry a small set of rules of their own. You pass them on the right unless you are on a one-way road. Where a stop has a raised safety island, passengers are protected and you pass at a reasonable speed rather than stopping. Where there is none, the two-metre rule applies until the doors close and everyone is clear of the road.",
        trap:
          "Twenty metres is the school bus figure and the two scenarios feel identical — people stepping into live traffic — but the distances are set differently.",
        excerptKey: "streetcar-two-metres",
        sourceLabel: "Official MTO Driver's Handbook — Changing positions",
        sourceUrl: `${H}/changing-positions`,
      },
      {
        id: "on_s6_33",
        topic: "safety",
        question:
          "A child weighs 30 kg, stands 140 cm tall and is seven years old. What restraint is required?",
        choices: [
          "A forward-facing child seat with a tether strap",
          "A seatbelt alone, because the child is over six years old",
          "A booster seat, because none of the three thresholds has been met",
          "A seatbelt alone, because the child is over 18 kg",
        ],
        correctIndex: 2,
        explanation:
          "Moving out of a booster requires reaching at least one of three thresholds: eight years old, 36 kg, or 145 cm. This child has reached none of them.",
        context:
          "The staircase below runs: rear-facing for infants under 9 kg, forward-facing with a tether for toddlers between 9 and 18 kg, then a booster for children between 18 and 36 kg who are under eight and under 145 cm. The height threshold matters because of belt geometry — on a small child, an adult belt crosses the neck and abdomen instead of the shoulder and hips. The driver is responsible for every passenger under 16 being properly secured.",
        commonlyMissed: true,
        trap:
          "Being over 18 kg only means the child has outgrown the forward-facing seat and moved into a booster. It is the bottom of the booster range, not the top.",
        excerptKey: "booster-seat-required",
        sourceLabel: "Official MTO Driver's Handbook — Getting ready to drive",
        sourceUrl: `${H}/getting-ready-drive`,
      },
      {
        id: "on_s6_34",
        topic: "signs",
        question: "A yellow diamond shows a small stop sign symbol inside it. What is it telling you?",
        choices: [
          "A stop sign is coming up — slow down now",
          "You must stop at this sign",
          "Traffic on the crossing road has a stop sign",
          "The stop sign ahead applies only during posted hours",
        ],
        correctIndex: 0,
        explanation:
          "It is advance warning. The actual stop is further on, and the sign exists so you arrive at a speed from which stopping is comfortable.",
        context:
          "Advance warnings of this kind appear wherever a control might be hard to see in time — a stop sign after a curve or a crest, traffic lights over a rise, a railway crossing behind trees. All of them are yellow diamonds, all of them ask for the same thing, and none of them is itself the control. The instruction is to lose speed early rather than late.",
        trap:
          "Stopping at the warning sign is the over-reaction, and it produces exactly the rear-end situation the advance warning was designed to prevent.",
        excerptKey: "stop-ahead-sign",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s6_35",
        topic: "signs",
        question:
          "A sign shows an arrow curving around an obstruction, indicating which side to pass a traffic island. What kind of sign is it?",
        choices: [
          "A warning — passing on either side is permitted but one is preferred",
          "Informational — it identifies the island for navigation",
          "Temporary — it applies only while construction is in place",
          "Regulatory — you must pass on the side the arrow shows",
        ],
        correctIndex: 3,
        explanation:
          "It is a regulatory instruction. The arrow dictates which side of the island traffic uses, and the other side is not a choice.",
        context:
          "Regulatory signs are the ones that carry legal force, and they are generally white rectangles or squares with black and red markings. This family includes keep right, keep right except to pass, one-way, do not enter, the turn prohibitions and lane-use arrows. Warning signs, by contrast, are yellow diamonds and never dictate a manoeuvre — they only describe what is ahead.",
        trap:
          "Because the sign is about how to get around an obstacle, it reads as advice. Anything that specifies which side of a divider you use is regulation.",
        excerptKey: "regulatory-signs",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s6_36",
        topic: "rules",
        question: "What is the acceleration lane on a freeway entrance for?",
        choices: [
          "Allowing freeway traffic to move right and let you in",
          "Building your speed up to match freeway traffic before you merge",
          "Waiting for a gap while stopped, then pulling out",
          "Passing slower vehicles already on the freeway",
        ],
        correctIndex: 1,
        explanation:
          "You use its full length to reach the speed of the traffic you are joining, then merge into a gap. Merging slower than the traffic stream is what causes collisions here.",
        context:
          "A freeway entrance has two parts: the ramp and the acceleration lane. Exits mirror it — a deceleration lane, then the ramp, then usually an intersection with a stop, yield or signal. You signal into the deceleration lane and slow down once you are in it, not in the through lane. Drivers already on the freeway should move over where it is safe to make room, but the obligation to arrive at the right speed sits with the merging driver.",
        trap:
          "Stopping at the end of the acceleration lane to wait for a gap is the instinct of a nervous driver, and it leaves you accelerating from zero into 100 km/h traffic.",
        excerptKey: "acceleration-lane",
        sourceLabel: "Official MTO Driver's Handbook — Freeway driving",
        sourceUrl: `${H}/freeway-driving`,
      },
      {
        id: "on_s6_37",
        topic: "signals",
        question: "At an intersection equipped with a transit priority signal, who must yield?",
        choices: [
          "Only other vehicles yield; pedestrians keep priority",
          "Transit vehicles yield, as any other vehicle would",
          "Nobody — the signal only measures transit delay",
          "Both other traffic and pedestrians yield to public transit vehicles",
        ],
        correctIndex: 3,
        explanation:
          "The whole point of a transit priority signal is to let buses and streetcars clear the intersection first, so both drivers and pedestrians give way.",
        context:
          "These signals typically show a distinctive white bar rather than the usual coloured balls, which is a hint that the ordinary sequence is not in force. Transit gets priority in a few other places too: the yield-to-bus sign on the back of a bus signalling its way out of a stop, and reserved transit lanes marked by their own signs.",
        trap:
          "Pedestrians outrank vehicles nearly everywhere else, which makes their inclusion in the yield here the detail most people get wrong.",
        excerptKey: "transit-priority-signal",
        sourceLabel: "Official MTO Driver's Handbook — Traffic lights",
        sourceUrl: `${H}/traffic-lights`,
      },
      {
        id: "on_s6_38",
        topic: "licensing",
        question: "What happens when a novice driver reaches nine demerit points?",
        choices: [
          "Removal from the graduated licensing system",
          "A 60-day suspension, returning afterwards with four points on the record",
          "A 30-day suspension, returning afterwards with seven points on the record",
          "A warning letter, with suspension deferred until fifteen points",
        ],
        correctIndex: 1,
        explanation:
          "Nine points suspends a novice for 60 days, and the record is set back to four afterwards rather than cleared.",
        context:
          "Novices sit on a tighter scale than fully licensed drivers throughout: a warning letter at two points, a second at six, and suspension at nine. Fully licensed drivers get their first letter at six, a second at nine, and a 30-day suspension at fifteen, returning at seven. Hitting the threshold a second time risks a six-month suspension. Points last two years from the date of the offence, so a novice returning at four is not far from the line.",
        trap:
          "The 30-day-and-back-to-seven answer is the fully licensed driver's outcome, and it is the version most people have heard because it applies to most drivers.",
        excerptKey: "novice-nine-points",
        sourceLabel: "Official MTO Driver's Handbook — Keeping your driver's licence",
        sourceUrl: `${H}/keeping-your-drivers-licence`,
      },
      {
        id: "on_s6_39",
        topic: "signs",
        question: "What does an orange background on a road sign indicate?",
        choices: [
          "A regulatory instruction with a doubled fine",
          "A route reserved for oversized vehicles",
          "A temporary condition such as construction, maintenance or a detour",
          "A permanent hazard requiring reduced speed",
        ],
        correctIndex: 2,
        explanation:
          "Orange is Ontario's colour for anything temporary — work zones, survey crews, lane closures, detours and pilot vehicles.",
        context:
          "The temporary family covers a lot of ground: construction ahead, road work, a traffic control person directing traffic, milled or grooved pavement, lane closures with merge arrows, and detour markers with flashing directional arrows. Where a construction zone carries doubled speeding fines while workers are present, that is announced on a separate sign rather than being implied by the orange.",
        trap:
          "Attaching the doubled-fine rule to the colour itself is the plausible overreach — the fine increase comes from its own posted sign, not from the background.",
        excerptKey: "temporary-condition-signs",
        sourceLabel: "Official MTO Driver's Handbook — Signs",
        sourceUrl: `${H}/signs`,
      },
      {
        id: "on_s6_40",
        topic: "sharing",
        question:
          "A police car is stopped on the shoulder of a two-lane-each-way highway with its lights flashing. What does the law require?",
        choices: [
          "Slow down, and move over to leave a lane between you and it if you can do so safely",
          "Slow down and hold your lane, since changing lanes near a stopped vehicle is risky",
          "Move over without changing speed, so you do not obstruct traffic behind you",
          "Nothing beyond normal care — the requirement applies only on single-lane roads",
        ],
        correctIndex: 0,
        explanation:
          "Slowing is required in every case. Moving over is required as well when the road has two or more lanes in your direction and it is safe to change lanes.",
        context:
          "The rule covers emergency vehicles and tow trucks stopped with their lights flashing, and the reason for both halves is the officer or operator working beside the vehicle in traffic. A first offence brings a fine of $400 to $2,000 and three demerit points, with a possible suspension of up to two years. A separate rule governs what to do when an emergency vehicle approaches you from behind: pull as far right as you safely can and stop.",
        trap:
          "Doing one half of the duty and calling it done is the usual failure — most drivers change lanes without slowing, and the law asks for both.",
        excerptKey: "move-over-change-lane",
        sourceLabel: "Ontario.ca — Driving near emergency vehicles",
        sourceUrl: `${ON}/driving-near-emergency-vehicles`,
      },
    ],
  },
];
