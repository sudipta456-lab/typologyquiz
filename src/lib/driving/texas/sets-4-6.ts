import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Texas Driver Handbook (DL-7),
// revised January 2026, published by the Texas Department of Public Safety.
// Questions are original. Explanations, context notes and trap notes are
// written from scratch - the deep link is there so the learner reads DPS's
// own authoritative wording on the government's site.
const DL7 = "https://www.dps.texas.gov/internetforms/forms/dl-7.pdf";

export const texasSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Wider Ground",
    difficulty: "medium",
    description:
      "Thirty-five questions across the parts of the handbook people skim - work zones, equipment, crash duties and the right-of-way rules that only show up in Texas.",
    questions: [
      {
        id: "tx_s4_01",
        topic: "signs",
        question:
          "An orange triangle with a dark border is fixed to the back of a vehicle ahead. What does it tell you?",
        choices: [
          "The vehicle is designed to travel at 25 mph or less",
          "The vehicle is carrying an oversized load",
          "The driver may be hearing impaired",
          "The vehicle is towing a trailer without brakes",
        ],
        correctIndex: 0,
        explanation:
          "The slow-moving vehicle emblem marks anything built to travel at 25 mph or under - tractors, farm machinery, animal-drawn vehicles. Closing speed on a rural road catches drivers out badly.",
        context:
          "The emblem is required on qualifying vehicles and prohibited on everything else, including stationary objects, so a genuine one always means a very slow vehicle in your lane. Construction equipment working inside a marked construction zone is exempt, as is machinery towed behind a vehicle already displaying one. On a 70 mph farm-to-market road, closing on a 15 mph tractor gives you far less time than instinct suggests.",
        trap:
          "'Oversized load' is the other orange marking people picture, but that is signage and flags, not the triangular emblem.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Slow-Moving Vehicle Emblem",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_02",
        topic: "rules",
        question:
          "The stripes on a work-zone barricade ahead of you slope downward to the right. What are they indicating?",
        choices: [
          "Merge and stop before the barricade",
          "Bear right to pass the obstruction",
          "Bear left to pass the obstruction",
          "The road is closed in both directions",
        ],
        correctIndex: 1,
        explanation:
          "Diagonal stripes point towards the side traffic should pass on. Falling to the right means bear right; falling to the left means bear left.",
        context:
          "Barricades, vertical panels, drums, cones and tubes are all channelising devices, often fitted with flashing or steady lights at night. Meeting one means slowing, changing lanes when it is safe, expecting drivers who leave the move to the last second, and holding the reduced speed until a sign confirms the zone has ended. Driving around a barricade is an offence on its own.",
        trap:
          "It is genuinely easy to read the stripes backwards at speed - the reliable check is that the low end of the stripe points at your escape route.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Channelizing Devices",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_03",
        topic: "rightOfWay",
        question:
          "You are driving on an unpaved county road that meets a paved road. Nothing is signed at the junction. Who yields?",
        choices: [
          "The paved road traffic, since you were there first",
          "Whichever driver is on the right",
          "Neither, provided both slow to walking pace",
          "You do - unpaved gives way to paved",
        ],
        correctIndex: 3,
        explanation:
          "Texas puts the yield duty on the driver coming off the unpaved road. The paved route is presumed to be the through road, and it is also the one you may reach with less traction than you expected.",
        context:
          "This sits in the same ladder as the other unsigned-junction rules: divided or three-plus lanes beats one or two lanes, paved beats unpaved, and a through street beats one that ends at the junction. Only where none of those distinctions apply does the vehicle on the right win. Gravel also lengthens your stopping distance, so the approach needs to start earlier than on tarmac.",
        trap:
          "'Whichever driver is on the right' is the default people reach for - but it is the last test in the ladder, not the first.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Unpaved Road Intersecting a Paved Road",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_04",
        topic: "safety",
        question:
          "Your car breaks down and you cannot get it fully off the roadway. What should you do first?",
        choices: [
          "Get everyone out of the vehicle and off the road",
          "Stay belted inside and wait for assistance",
          "Stand behind the vehicle to warn approaching traffic",
          "Open the bonnet and begin diagnosing the fault",
        ],
        correctIndex: 0,
        explanation:
          "A stationary car in a live lane is the thing most likely to be hit, so the people come out of it and away from the road first. Everything else follows once nobody is sitting in the target.",
        context:
          "After that: get the car off the pavement if it can be moved at all - a flat tyre can be driven slowly to the shoulder. Switch on hazard warning lights, use portable warning devices if you carry them, and at night leave the interior light on as well as the tail lights. Tying a white cloth to a door handle or raising the bonnet signals that the vehicle is disabled rather than parked.",
        trap:
          "'Stand behind the vehicle' puts you exactly where a distracted driver will arrive - warn traffic from well clear of the road, never from the impact zone.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Vehicle Breakdown",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_05",
        topic: "speed",
        question:
          "A school bus that has passed its commercial vehicle inspection is travelling on a US-numbered highway outside an urban district. What is its default speed limit?",
        choices: [
          "50 mph",
          "55 mph",
          "60 mph",
          "70 mph",
        ],
        correctIndex: 2,
        explanation:
          "Sixty mph applies to an inspected school bus on a state- or US-numbered rural highway, ten below the 70 mph limit for cars on the same road.",
        context:
          "Buses run to their own scale: 60 mph on a numbered rural highway if they have passed the commercial inspection, and 50 mph if they have not, or if they are on a road with no state or US number. Cars on those same roads default to 70 and 60. Any posted sign overrides all of it, and every one of these figures is still a ceiling for good conditions.",
        trap:
          "70 mph is the figure for cars on that exact road, which makes it the easiest wrong answer to reach for.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed Limits",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_06",
        topic: "signs",
        question:
          "You are travelling on a divided highway and see a sign warning that opposing traffic will be separated by a median island ahead. What is it telling you?",
        choices: [
          "The road narrows to one lane each way",
          "A divided section is beginning",
          "The divided section is about to end",
          "A median crossover is available ahead",
        ],
        correctIndex: 1,
        explanation:
          "This is the divided highway begins warning: from here forward, opposing directions are physically separated. The head-on risk drops, and the layout of the road changes.",
        context:
          "Its opposite number warns that the divided highway is ending and two-way traffic resumes - that is the one that demands caution. A third sign in the same family marks a median crossover, showing where you may lawfully cross to the other carriageway. Confusing them is easy because all three use split-roadway symbols, so read them against your direction of travel.",
        trap:
          "'The divided section is about to end' is the mirror sign; getting the two backwards means relaxing exactly when oncoming traffic returns.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_07",
        topic: "impairment",
        question:
          "A driver aged 20 provides a breath specimen showing a small but detectable amount of alcohol, below 0.08. What licence consequence follows a first occasion?",
        choices: [
          "A 180-day suspension",
          "A one-year suspension",
          "A 60-day suspension",
          "No suspension, because the reading is under 0.08",
        ],
        correctIndex: 2,
        explanation:
          "For a driver under 21, a specimen confirming any detectable alcohol brings a 60-day suspension on a first occasion, rising to 120 days and then 180 for later ones.",
        context:
          "Zero tolerance means the 0.08 threshold never protects a minor. Refusing to give a specimen costs more - 180 days first time, two years afterwards. Alongside the suspension, driving under the influence as a minor is a criminal offence carrying a fine, community service and a compulsory alcohol awareness course. A minor may request a hearing to contest the suspension.",
        trap:
          "'No suspension because it is under 0.08' applies the adult threshold to a driver who is not covered by it.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Texas Tough Alcohol-Related Laws for Minors",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_08",
        topic: "rules",
        question:
          "A fire truck ahead of you is running its lights and siren on the way to a call. How close may you legally follow?",
        choices: [
          "No closer than 200 feet",
          "No closer than 100 feet",
          "There is no set distance, only a duty to drive safely",
          "No closer than 500 feet",
        ],
        correctIndex: 3,
        explanation:
          "You may not follow within 500 feet of a fire truck answering an alarm, or an ambulance running its red lights. Tailing one puts you inside its stopping zone and blocks other traffic trying to clear.",
        context:
          "Two more restrictions come with it: do not drive or park on a street where a fire truck has answered an alarm, and do not park anywhere that would interfere with an ambulance arriving or leaving. The general duty still applies as well - pull to the right edge and stop for an approaching emergency vehicle, or slow and leave a clear path if you cannot reach the edge.",
        trap:
          "'No set distance' feels reasonable because most drivers have never heard the figure, and 500 feet is much further back than people naturally leave.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Yield Right-of-Way to Emergency Vehicles",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_09",
        topic: "signs",
        question:
          "A black-on-white sign above your lane reads RIGHT LANE MUST TURN RIGHT. What does that require?",
        choices: [
          "You must turn right at the next junction unless the sign indicates otherwise",
          "You may turn right or continue straight, whichever suits",
          "Right turns are permitted only from that lane",
          "You must move out of that lane before the junction",
        ],
        correctIndex: 0,
        explanation:
          "The sign converts the lane into a compulsory turn lane. Staying in it and going straight blocks everyone behind you who read the sign correctly.",
        context:
          "There is a related sign for double left-turn lanes, where the left lane must turn left and the adjacent one has a choice. Both belong to the family of lane-use regulatory signs that also includes turn prohibitions and no-U-turn signs. The habit that saves you is reading overhead lane signs early enough to change lanes before the queue forms.",
        trap:
          "'Turn right or continue straight' describes an optional turn lane; the word MUST is what separates the two, and it is easy to skim past.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_10",
        topic: "rightOfWay",
        question:
          "You are turning right at a junction and a cyclist is riding straight on in a bike lane to your right. What is the correct approach?",
        choices: [
          "Stop in the traffic lane and wave the cyclist through",
          "Slow, merge towards the kerb behind the cyclist, then turn",
          "Turn ahead of the cyclist, since a vehicle has priority",
          "Turn across the bike lane while sounding your horn",
        ],
        correctIndex: 1,
        explanation:
          "Merging in behind the cyclist before the turn removes the conflict entirely. Turning across a bike lane at the last moment is the classic right-hook collision.",
        context:
          "The two most common driver-caused bike crashes are turning left across an oncoming cyclist, and turning right across one going straight. Both come from misjudging a bike's speed or not looking for one at all. Because a bicycle is a vehicle in Texas, ordinary right-of-way rules apply between you - which means a cyclist going straight beats a vehicle turning across their path.",
        trap:
          "'A vehicle has priority' assumes a bicycle is a lesser road user; in Texas it is a vehicle with the same rights you have.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Share the Road with Bicycles",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_11",
        topic: "safety",
        question:
          "You are following a large truck at night on an unlit road with your high beams on. What should you do?",
        choices: [
          "Flash between high and low to signal your position",
          "Move closer so your lights fall below the mirrors",
          "Dip to low beam - the glare reflects off the truck's mirrors",
          "Keep high beams on so the driver knows you are there",
        ],
        correctIndex: 2,
        explanation:
          "High beams from behind bounce straight off a truck's large side mirrors and into the driver's eyes. Dipping keeps them able to see, and you should already be at low beam within 300 feet of any vehicle you are following.",
        context:
          "Truck-following rules stack up: stay out of the rear blind spot, sit where you can see the driver's mirrors, and leave far more room than you would behind a car, since a loaded tractor-trailer can need over 400 feet to stop. Stopping behind one on an upgrade calls for extra space in case it rolls back, and keeping slightly left in your lane lets the driver see you.",
        trap:
          "'So the driver knows you are there' has the right instinct and the wrong method - a blinded driver knows you are there and can no longer see the road.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Following a Truck",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_12",
        topic: "rules",
        question:
          "A barricade has been placed where water is flowing over a road. A driver goes around it. What is the position under Texas law?",
        choices: [
          "It is a minor infraction carrying a small fine",
          "It is lawful if the water appears shallow",
          "It is only an offence if the driver becomes stranded",
          "It is a Class B misdemeanour, punishable by a fine of up to $2,000 and jail time",
        ],
        correctIndex: 3,
        explanation:
          "Driving around a barricade at a flooded road is treated far more seriously than an ordinary barricade offence - a Class B misdemeanour with a fine up to $2,000 and up to 180 days in jail.",
        context:
          "Ignoring a warning sign or barricade generally is a lower-level offence, but the flood case is singled out because of how often it kills people and because it puts rescuers at risk too. The physical reasons are stark: six inches of water reaches the underside of most cars, twelve floats many, two feet of moving water carries away pickups, and the roadbed underneath may already be gone.",
        trap:
          "'Lawful if the water appears shallow' is exactly the judgement the barricade exists to override, and moving water is nearly impossible to read from a driver's seat.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Obey Warning Signs and Barricades",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_13",
        topic: "signs",
        question:
          "A yellow diamond warns of a significant drop from the pavement edge down to the shoulder. If your wheels do drop off, what should you do?",
        choices: [
          "Hold the wheel firmly, ease off the accelerator, slow, then steer back gently",
          "Brake hard and steer back onto the pavement immediately",
          "Accelerate to lift the car back onto the surface",
          "Steer sharply left to regain the lane before losing speed",
        ],
        correctIndex: 0,
        explanation:
          "A firm grip, no sudden braking, and a return only once the speed has come down. Yanking the wheel while a tyre is caught against a pavement lip is what flips cars into oncoming traffic.",
        context:
          "The handbook flags several shoulder hazards with their own signs: a soft dirt shoulder that can drag a wheel, a drop-off at the pavement edge, and grooved pavement. All of them are managed the same way - do not overcorrect. The same no-sudden-inputs rule applies to skids and blowouts, because in each case the tyres have less grip than the driver assumes.",
        trap:
          "'Steer back immediately' is what everyone does by reflex, and it is the specific action that turns a recoverable drop-off into a rollover.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Running Off the Pavement",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_14",
        topic: "rightOfWay",
        question:
          "You approach a marked crosswalk where a pedestrian hybrid beacon is showing alternating flashing red. What must you do?",
        choices: [
          "Treat it as a steady red and wait for a green",
          "Stop, then continue if the crosswalk is clear",
          "Stop and remain stopped until the beacon goes dark",
          "Slow down and continue without stopping",
        ],
        correctIndex: 1,
        explanation:
          "Alternating flashing red behaves like a stop sign: stop, check the crossing, and go once it is clear. The pedestrian may already have finished crossing your half of the road.",
        context:
          "The beacon runs a sequence - dark until someone presses the button, then flashing yellow, then steady yellow, then steady red while the pedestrian starts across, then alternating flashing red as they finish. Related devices include in-street and overhead pedestrian crossing signs, yield-here-to-pedestrians signs used with yield lines, and in-roadway lights at midblock and school crossings.",
        trap:
          "'Wait for a green' misreads it as an ordinary signal - the beacon never shows green, so waiting just holds up everyone behind you.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Pedestrian Hybrid Beacons",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_15",
        topic: "speed",
        question:
          "You are joining a Texas freeway but do not want to drive at or above the posted minimum speed. What does the handbook advise?",
        choices: [
          "Use the freeway with hazard warning lights on",
          "Use the freeway only outside peak hours",
          "Do not use the freeway - choose another route",
          "Use the freeway but stay in the left lane",
        ],
        correctIndex: 2,
        explanation:
          "A vehicle travelling well below the flow is a hazard on a high-speed road. If you cannot or will not maintain at least the minimum, the advice is to take a different route.",
        context:
          "Freeway lane discipline follows from the same logic: the right lane is for traffic at or below the general flow, the middle and left lanes are for passing or moving faster, and drivers outside the right lane should be ready to move over for faster traffic. Entering means using the acceleration lane to match the speed of traffic already on the road, which has the right of way. Exiting means moving over early and slowing on the ramp, not in the through lane.",
        trap:
          "'Stay in the left lane' is the worst possible version - the left lane is for passing, and a slow vehicle there is a genuine hazard.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Highway Driving",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_16",
        topic: "signs",
        question:
          "A sign shows the shoulder of the road with a restriction symbol. What does Texas say the shoulder is for?",
        choices: [
          "Slower drivers who want to let faster traffic past",
          "Vehicles waiting to make a right turn",
          "Any vehicle, whenever traffic is congested",
          "Vehicles that must stop for a breakdown, tyre trouble, lack of fuel or another emergency",
        ],
        correctIndex: 3,
        explanation:
          "The shoulder is emergency space: mechanical failure, a flat tyre, running dry, or a comparable problem. It is not an extra lane.",
        context:
          "There is one narrow exception for movement. You may pass on a paved shoulder when the vehicle ahead is slowing or stopped on the travelled part of the road, disabled, or preparing to turn left - and only if you can do it safely. Passing by leaving the paved portion altogether is never allowed, because dirt costs you grip at exactly the wrong moment.",
        trap:
          "'Slower drivers letting faster traffic past' is a common rural courtesy and is not what the shoulder is legally for.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_17",
        topic: "rules",
        question:
          "Traffic fines in a Texas construction or maintenance zone double under what condition?",
        choices: [
          "When workers are present anywhere in the zone",
          "Whenever the zone is signed, workers or not",
          "Only between 6 a.m. and 6 p.m.",
          "Only where the reduced limit is 45 mph or lower",
        ],
        correctIndex: 0,
        explanation:
          "The doubling is tied to workers being present anywhere in the construction zone - not just alongside your lane at the moment you pass.",
        context:
          "Work zones layer several rules: obey the flag person absolutely, do not drive around barricades, hold the reduced speed until a sign says the zone has ended, and expect equipment and people to move unpredictably. Orange is the colour that flags all of it. Barricade stripes point you towards the side you should pass on, and arrow panels tell you which lanes are closed.",
        trap:
          "'Whenever the zone is signed' overstates it slightly - the doubling attaches to worker presence, which is why zones stay signed overnight without the enhancement running.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Construction and Maintenance Devices",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_18",
        topic: "safety",
        question:
          "You are overtaking and find yourself sitting alongside another car, in its blind spot. What should you do?",
        choices: [
          "Move as close to the lane line as possible so you are visible",
          "Either complete the pass or drop back out of the blind spot",
          "Hold position until the other driver notices you",
          "Sound your horn and stay where you are",
        ],
        correctIndex: 1,
        explanation:
          "Lingering beside another vehicle means being invisible to the one driver who most needs to see you. Either finish the pass or fall back to where their mirrors pick you up.",
        context:
          "The same principle governs trucks, where the blind spots are far larger and run along both sides, directly behind and immediately in front. It also runs the other way: check your own blind spot over your shoulder before every lane change, because mirrors alone will not show you a motorcycle. Passing safely means being decisive rather than fast.",
        trap:
          "'Hold position until they notice you' relies on the other driver doing something they physically cannot do while you are in the blind spot.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Blind Spot Driving",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_19",
        topic: "signals",
        question:
          "A traffic signal at an intersection is flashing yellow. What does it require of you?",
        choices: [
          "Stop and wait for a green signal",
          "Continue at the posted speed - it is advisory only",
          "Slow down and proceed with caution",
          "Stop completely, then proceed when clear",
        ],
        correctIndex: 2,
        explanation:
          "Flashing yellow means slow down and stay alert. It does not require a stop, but it warns that something at the intersection needs your attention.",
        context:
          "Flashing signals usually work in pairs, with a flashing yellow facing the main road and a flashing red facing the side road. So a flashing yellow generally means you have priority, but the driver on the cross street may misjudge their gap. A flashing red is treated as a stop sign, and a flashing yellow arrow permits a left turn only after yielding to oncoming traffic.",
        trap:
          "'Stop completely' confuses flashing yellow with flashing red - stopping unexpectedly on the main road invites a rear-end collision.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Traffic Signals",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_20",
        topic: "impairment",
        question:
          "An adult is convicted of a first DWI in Texas. What is the range of jail time attached to that offence?",
        choices: [
          "24 hours to 30 days",
          "30 days to one year",
          "No jail time on a first offence",
          "72 hours to 180 days",
        ],
        correctIndex: 3,
        explanation:
          "A first adult DWI carries confinement of 72 hours to 180 days, alongside a fine of up to $2,000 and a licence suspension of 90 to 365 days.",
        context:
          "Second and third offences escalate sharply - up to a year in jail and a $4,000 fine for a second, and two to ten years in prison with a $10,000 fine for a third. Aggravating circumstances have their own charges: carrying a passenger under 15 is a state jail felony, intoxication assault a third-degree felony, and intoxication manslaughter a second-degree felony. Possessing an open container raises the minimum confinement on a first offence.",
        trap:
          "'No jail time on a first offence' reflects how first offences are often resolved elsewhere, but Texas sets a mandatory minimum in the statute.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Penalties for DWI and DUI - Adults",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_21",
        topic: "signs",
        question:
          "You see a sign showing a truck symbol with a diagonal line through it. What does it mean?",
        choices: [
          "Trucks may not use or enter this roadway",
          "A truck route begins ahead",
          "Watch for trucks entering the road",
          "Trucks must use a lower speed limit here",
        ],
        correctIndex: 0,
        explanation:
          "A prohibition sign bans trucks from that roadway. A warning about trucks entering would be a yellow diamond instead.",
        context:
          "Colour and shape sort this out reliably. Red circles and slashes prohibit, black-on-white rectangles regulate, and yellow diamonds warn. A yellow diamond showing a truck means slow down and watch for trucks crossing or joining - the opposite kind of message from a prohibition. Getting into the habit of reading colour first is quicker than parsing the symbol.",
        trap:
          "'Watch for trucks entering' is the yellow warning version, and the two symbols look similar enough that colour is the only fast discriminator.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_22",
        topic: "sharing",
        question:
          "You are approaching a light rail crossing where the gate arms have come down. What should you do?",
        choices: [
          "Reverse and take an alternative route immediately",
          "Stop and wait - never drive around lowered gate arms",
          "Drive around if you can see the track is clear",
          "Sound the horn and cross quickly",
        ],
        correctIndex: 1,
        explanation:
          "Gate arms come down because a train is coming, and light rail vehicles are unusually quiet, so what you can see and hear is a poor guide. Wait for the gates to rise.",
        context:
          "Light rail runs in the street alongside ordinary traffic in several Texas cities, and it cannot stop or swerve for you. Do not drive, stop or park on the tracks, cross only at designated crossings, look both ways because trains run in both directions, and obey every sign, light, signal and gate. Never try to beat one - a tie still means you lose.",
        trap:
          "'If you can see the track is clear' assumes you can see far enough, and light rail arrives faster and far more quietly than drivers expect.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Share the Road with Light Rail",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_23",
        topic: "rightOfWay",
        question:
          "You are entering a single-lane roundabout. What is the correct sequence?",
        choices: [
          "Enter immediately and let circulating traffic adjust",
          "Yield to any vehicle approaching from your right outside the circle",
          "Slow on approach, yield to traffic already circulating, then enter on a gap",
          "Stop completely at the yield line before entering",
        ],
        correctIndex: 2,
        explanation:
          "Roundabouts are controlled by yield signs, not stop signs. You slow, give way to whatever is already going round, and enter when there is a real gap.",
        context:
          "Traffic runs counter-clockwise round a central island, and you exit by making a right turn, signalling as you go. In a multi-lane roundabout, choose your lane from the advance lane sign before entering and do not change lanes inside the circle. Give long vehicles room, since they may need more than one lane, and watch for pedestrians and cyclists at the entries and exits.",
        trap:
          "'Stop completely at the yield line' is safe but wrong as a rule, and stopping when the circle is clear causes the rear-end crashes roundabouts are meant to prevent.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Roundabouts",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_24",
        topic: "safety",
        question:
          "You have a tyre blowout at highway speed. What is the correct response?",
        choices: [
          "Brake hard immediately to reduce speed",
          "Steer sharply towards the shoulder",
          "Accelerate briefly to stabilise the vehicle",
          "Come off the accelerator, brake gently and steer straight to a stop",
        ],
        correctIndex: 3,
        explanation:
          "A blowout pulls the car towards the failed tyre, so the priority is a straight line. Ease off, brake gently, hold your direction, and only steer for the shoulder once the speed is down.",
        context:
          "It is the same principle that governs skids and dropping a wheel off the pavement: sudden braking or steering makes an unstable car worse. Prevention is mostly maintenance - Texas requires at least 2/32 of an inch of tread depth, and old or damaged tyres fail exactly when they are loaded hardest.",
        trap:
          "'Brake hard immediately' feels like the only useful thing to do, and it is what shifts the weight forward and turns a blowout into a spin.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Flat Tire or Blowout",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_25",
        topic: "rules",
        question:
          "Which hand-and-arm signal indicates a right turn?",
        choices: [
          "Left arm out and bent upward at the elbow",
          "Left arm out and pointing downward",
          "Left arm extended straight out horizontally",
          "Right arm out and bent downward at the elbow",
        ],
        correctIndex: 0,
        explanation:
          "Left arm out with the forearm raised means right turn. Straight out is left, and angled down is stop or slow.",
        context:
          "Hand signals need the same minimum 100 feet of notice as indicators, and they should be given well before the turn - but not held during it, because both hands belong on the wheel. Cyclists use the same three signals, with the extra option of extending the right arm straight out for a right turn. They are hard to see in the dark, which is one reason working signal lights are a legal equipment requirement.",
        trap:
          "'Left arm pointing downward' is the stop signal, and a driver behind you who reads it that way will brake when you were only turning.",
        sourceLabel: "Texas Driver Handbook (DL-7) - How to Signal",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_26",
        topic: "parking",
        question:
          "How far from the nearest rail of a railway crossing may you leave a parked vehicle?",
        choices: [
          "No closer than 100 feet",
          "No closer than 50 feet",
          "No closer than 15 feet",
          "No closer than 25 feet",
        ],
        correctIndex: 1,
        explanation:
          "Fifty feet from the nearest rail. It is a larger clearance than most parking rules because a train's overhang extends well past the rails and drivers need a clear view down the track.",
        context:
          "Do not confuse it with the stopping window when a train is coming, which is 15 to 50 feet from the nearest rail. One figure is about where a moving vehicle waits; the other is about where a parked vehicle may be left. You may also never stop, stand or park on railway tracks at all, in a tunnel, on a bridge, in a crosswalk or within an intersection.",
        trap:
          "15 feet is the number from the stopping rule at crossings, and the two railway figures get swapped constantly.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Do Not Park a Vehicle",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_27",
        topic: "signs",
        question:
          "Mileposts are erected every mile along Texas interstate highways. What are they mainly for?",
        choices: [
          "Indicating the distance to the next exit",
          "Showing which lane to use for through traffic",
          "Pinpointing your location when reporting a crash or breakdown",
          "Marking where the speed limit changes",
        ],
        correctIndex: 2,
        explanation:
          "Mileposts give emergency services an exact location on a road where one stretch looks identical to the next. Quoting the nearest one is far quicker than describing landmarks.",
        context:
          "Other guide signs do different jobs: route markers name the road you are on, exit signs are typically placed at least 1,000 yards before the exit, and overhead arrow panels show which lanes follow a particular route. Guide signing is generally green, blue or brown, none of which creates a legal duty.",
        trap:
          "'Distance to the next exit' is what exit signs do; mileposts count distance along the whole route regardless of where the exits are.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Guide Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_28",
        topic: "rightOfWay",
        question:
          "You are on a two-way frontage road and a vehicle ahead is preparing to leave it and enter the freeway. What does Texas require of you?",
        choices: [
          "Continue, since you are already on the through road",
          "Yield only if the other driver has signalled",
          "Sound your horn and maintain speed",
          "Yield to the vehicle entering the highway",
        ],
        correctIndex: 3,
        explanation:
          "Frontage road drivers yield both to vehicles coming off the highway and to vehicles leaving the frontage road to join it. The yield sits with the frontage road, in both directions of movement.",
        context:
          "This reverses the merging logic drivers bring from other states, and it applies on one-way and two-way frontage roads alike. The practical consequence is that a frontage road is not a through route in the way it looks - traffic crosses your path at every ramp, and the yield signs at those points are aimed at you.",
        trap:
          "'You are already on the through road' is the assumption that causes these crashes; on a frontage road, being the through traffic does not give you priority.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Enter or Leave Controlled-Access Highway",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_29",
        topic: "impairment",
        question:
          "Which statement about mixing alcohol with other drugs is accurate?",
        choices: [
          "Alcohol can amplify other drugs and also mask how impaired you are",
          "Alcohol cancels out the sedative effect of most medicines",
          "The effects simply add together in a predictable way",
          "Mixing is only a concern with illegal drugs",
        ],
        correctIndex: 0,
        explanation:
          "Alcohol increases the effect of tranquillisers, sedatives and many other drugs, and it can hide their effects at the same time - so the driver feels less affected while being more impaired.",
        context:
          "Individual response varies with body weight, emotional state, dose and timing, so the same combination affects two people differently. Marijuana affects concentration and perception, stimulants leave drivers edgy and less coordinated, and everyday antihistamines and cold remedies cause drowsiness. Texas defines intoxication to include losing normal mental or physical faculties through any substance, so a legal prescription offers no protection.",
        trap:
          "'The effects simply add together' understates the problem - the interaction can be multiplicative, which is why a couple of drinks on top of a sedative goes so badly.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Alcohol and Other Types of Drugs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_30",
        topic: "rules",
        question:
          "You are following a mail delivery vehicle that is stopping frequently in the roadway. What does the handbook advise?",
        choices: [
          "Follow closely so you can use each gap in traffic",
          "Proceed with caution and change lanes before passing where you can",
          "Pass on the right using the shoulder each time it stops",
          "Sound the horn to encourage it to pull clear",
        ],
        correctIndex: 1,
        explanation:
          "Mail, delivery and refuse vehicles stop constantly, and there is often a worker moving around them. Caution and a lane change where possible is the advice.",
        context:
          "This sits next to the Move Over or Slow Down law, which applies to emergency, law enforcement, tow, utility and TxDOT vehicles stopped with lights activated, plus animal control and parking enforcement vehicles added in 2025. For those, you must vacate the adjacent lane or slow to 20 mph below the limit - and to under 5 mph where the limit is below 25.",
        trap:
          "'Pass on the right using the shoulder' misapplies the shoulder passing exception, which does not cover overtaking a vehicle making routine stops in the lane.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Slow Down or Move Over",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_31",
        topic: "safety",
        question:
          "Texas requires a vehicle's horn to be audible from what minimum distance?",
        choices: [
          "50 feet",
          "300 feet",
          "200 feet",
          "100 feet",
        ],
        correctIndex: 2,
        explanation:
          "Two hundred feet. That is far enough to warn a driver or pedestrian while there is still time for either of you to react.",
        context:
          "Several Texas equipment requirements use similar figures: the rear-view mirror must show the road at least 200 feet behind, the foot brake must stop the vehicle within 25 feet from 20 mph, tyres need at least 2/32 of an inch of tread, and reflectors must be visible from 600 feet. Modified equipment is restricted too - no red light showing to the front except on emergency vehicles, no sirens, and no radar interference devices.",
        trap:
          "'50 feet' is roughly the range at which a horn feels useful in a car park, but at road speed a warning that late is no warning at all.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Required Equipment for Motor Vehicles",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_32",
        topic: "sharing",
        question:
          "A bicycle used at night in Texas must be equipped with what, at minimum?",
        choices: [
          "A red front lamp and a white rear reflector",
          "Reflective clothing on the rider only",
          "A white front lamp and a red rear lamp, with no reflector permitted",
          "A white front lamp visible from 500 feet and a red rear reflector",
        ],
        correctIndex: 3,
        explanation:
          "A white lamp on the front visible from at least 500 feet, plus an approved red reflector at the rear. A red rear lamp may be added, but it does not replace the reflector.",
        context:
          "Bicycles must also have a brake capable of skidding the wheel on dry, level, clean pavement. Riders are subject to the same traffic laws as drivers, and convictions go on their driving record. Riding against traffic is prohibited, and a rider must keep at least one hand on the handlebars. Helmet requirements are set locally rather than statewide.",
        trap:
          "'A red front lamp' has the colours reversed - front is white and rear is red on every vehicle, and getting it backwards makes an approaching cyclist look like they are heading away from you.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Bicycles Must Be Properly Equipped",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_33",
        topic: "emergencies",
        question:
          "You reverse into an unattended parked car in a car park and cause visible damage. The owner is nowhere to be found. What must you do?",
        choices: [
          "Leave a securely attached note with your name, address and what happened",
          "Nothing, provided the damage is minor",
          "Report it to your insurer within ten days and take no other action",
          "Wait 30 minutes and leave if the owner has not appeared",
        ],
        correctIndex: 0,
        explanation:
          "You either find the owner and give your details in person, or attach a written notice to the vehicle giving your name, address and a description of what happened. Driving off is a criminal offence.",
        context:
          "The penalty scales with the damage: under $200 it is a Class C misdemeanour with a fine up to $500, and at $200 or more it becomes a Class B misdemeanour carrying up to $2,000 and up to 180 days in jail. The same duties apply if you damage a fixture, landscaping or a structure beside the road, with the added step of taking reasonable measures to locate the owner.",
        trap:
          "'Nothing, provided the damage is minor' is what people tell themselves in a car park - but leaving without notice is the offence, regardless of how small the dent is.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Crash Involving an Unattended Vehicle",
        sourceUrl: DL7,
      },
      {
        id: "tx_s4_34",
        topic: "licensing",
        question:
          "You move house within Texas. How long do you have to report the address change to DPS?",
        choices: [
          "90 days",
          "30 days",
          "10 days",
          "60 days",
        ],
        correctIndex: 1,
        explanation:
          "Thirty days. DPS uses the address on file for renewal notices and enforcement correspondence, so an out-of-date one causes problems you will not hear about until it is too late.",
        context:
          "Other Texas timelines worth keeping straight: a new resident has 90 days to obtain a Texas licence after establishing residency, a newly purchased vehicle must be registered within 30 days, and a nonresident who takes up residence or gainful employment has 30 days before their vehicle needs Texas registration. A licence for a driver 18 or older runs eight years, with an in-office visit required at least once every sixteen.",
        trap:
          "90 days is the figure for a new resident getting a Texas licence, and the two deadlines get mixed up because both involve moving.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Replacement or Change of Information",
        sourceUrl: "https://www.dps.texas.gov/section/driver-license",
      },
      {
        id: "tx_s4_35",
        topic: "speed",
        question:
          "A yellow sign on a freeway exit ramp shows an advisory speed of 30. What is it telling you?",
        choices: [
          "The speed limit on the road the ramp joins",
          "The speed at which the ramp meter releases vehicles",
          "The highest speed at which the ramp can be travelled safely",
          "The minimum speed permitted on the ramp",
        ],
        correctIndex: 2,
        explanation:
          "Ramp advisory signs give the highest safe speed for that curve. Exit ramps are where drivers most often carry freeway speed into a bend that was never designed for it.",
        context:
          "The correct technique is to slow on the ramp, not in the through lane - move over well before the exit and shed speed once you are off the main carriageway. Advisory speeds are yellow and always attached to a warning about the geometry; regulatory limits are black on white. Driving too fast for a ramp still breaches the duty to travel at a reasonable and prudent speed even though the plate is advisory.",
        trap:
          "'The speed limit on the road the ramp joins' misreads an advisory plate as a preview of the next posted limit; the number describes the curve you are on.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail",
    difficulty: "hard",
    description:
      "Exact figures, sign pairs that look alike, and right-of-way scenarios with more than one rule in play. This is the set to work through slowly.",
    questions: [
      {
        id: "tx_s5_01",
        topic: "signs",
        question:
          "Two different signs deal with no-passing zones. Which shape is used specifically to give advance warning that one is starting?",
        choices: [
          "A pentagon with a black border",
          "A pennant, tapering to a point",
          "A vertical rectangle reading DO NOT PASS",
          "A yellow diamond with a passing symbol",
        ],
        correctIndex: 1,
        explanation:
          "The pennant is the advance warning. The rectangular DO NOT PASS sign is the regulation itself, and the solid yellow line on the pavement is the third element of the same restriction.",
        context:
          "Shape is doing real work here because the two passing signs mean different things: one warns that a restriction is coming, the other imposes it. Texas reserves shapes tightly - octagon for stop, downward triangle for yield, pennant for advance no-passing warning, pentagon for schools, round for advance railway warning, diamond for hazards. Any question that names an unusual shape is testing that reservation.",
        trap:
          "'DO NOT PASS' is the sign people actually notice, which makes it the natural answer - but it is the regulation, not the advance warning.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Signs by Shape",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_02",
        topic: "rightOfWay",
        question:
          "You are on a gravel farm road approaching a paved farm-to-market road. There are no signs. A car on the paved road is approaching from your left, and another from your right. Who has priority?",
        choices: [
          "You do, because two vehicles cannot both hold priority",
          "Whichever car reaches the junction second",
          "Both cars on the paved road - you yield to each of them",
          "Only the car on your right, under the right-hand rule",
        ],
        correctIndex: 2,
        explanation:
          "The paved-versus-unpaved test resolves this before the right-hand rule is ever reached. Everything on the paved road has priority, from either direction.",
        context:
          "Texas works through the tests in order: divided road or three-plus lanes beats one or two lanes, paved beats unpaved, a through street beats one that terminates, and only a genuine tie falls back on yielding to the vehicle on the right. Applying the right-hand rule first is the single most common error, because it is the rule people learned first.",
        trap:
          "'Only the car on your right' applies the tie-breaker to a situation that was already decided by the surface of the road.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Right-of-Way at Intersections",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_03",
        topic: "rules",
        question:
          "Texas requires a continuous signal for at least 100 feet before which manoeuvres?",
        choices: [
          "Turning at an intersection only",
          "Turning and changing lanes, but not stopping",
          "Any manoeuvre, but only above 30 mph",
          "Turning, and also slowing or stopping",
        ],
        correctIndex: 3,
        explanation:
          "The 100-foot requirement covers stopping as well as turning. A driver behind you needs the same warning whether you are leaving the road or just slowing on it.",
        context:
          "Signalling is required for changing lanes, turning, pulling out of a parallel space, slowing or stopping, entering or leaving a highway, and pulling over. Where lights have failed, hand signals do the same job - straight out for left, bent up for right, angled down for stop. Cancel afterwards, because a signal left running still reads as an intention to turn.",
        trap:
          "'Turning only' is what most drivers assume, and it is why brake lights end up being the only warning that a stop is coming.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Signaling",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_04",
        topic: "safety",
        question:
          "A car at 55 mph needs roughly 240 feet to stop. Roughly how much may a fully loaded tractor-trailer need at the same speed?",
        choices: [
          "About 700 feet",
          "More than 400 feet",
          "About 250 feet",
          "About 300 feet",
        ],
        correctIndex: 1,
        explanation:
          "Over 400 feet - well past the length of a football field, and getting on for double what the car needs. That gap is why cutting in front of a truck removes its entire safety margin.",
        context:
          "Weight is the reason: the same brakes have far more momentum to dissipate. The consequences run through everything about sharing the road with trucks. Never fill the space in front of one, never race one to a lane closure, and remember that a truck loses speed on an upgrade but gains it on a downgrade, so the passing manoeuvre changes with the terrain.",
        trap:
          "'About 250 feet' assumes trucks stop roughly like cars because they have bigger brakes; the mass difference swamps the brake difference entirely.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Following a Truck",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_05",
        topic: "speed",
        question:
          "A tow truck is stopped with lights flashing on a street posted at 20 mph, and you cannot change lanes. What speed must you reduce to?",
        choices: [
          "Slow to 10 mph, half the limit",
          "Slow to 15 mph, 5 below the limit",
          "Slow to less than 5 mph",
          "Subtract 20, which means stopping",
        ],
        correctIndex: 2,
        explanation:
          "Where the posted limit is below 25 mph, the Move Over rule replaces the 20 mph reduction with a requirement to slow to under 5 mph - roughly walking pace.",
        context:
          "The law gives two options everywhere: vacate the lane closest to the stopped vehicle if the road has two or more lanes going your way, or slow down. On roads posted at 25 mph or more the reduction is 20 mph below the limit; below 25 mph it becomes under 5 mph. Covered vehicles include police, fire, EMS, tow trucks, utility and TxDOT vehicles, plus animal control and parking enforcement since September 2025.",
        trap:
          "'Subtract 20, so you must stop' applies the main rule mechanically and produces a nonsensical answer - which is precisely why the low-speed variant exists.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Right-of-Way and Slow Down or Move Over",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_06",
        topic: "signs",
        question:
          "Two railway signs are easily confused. Which one stands at the crossing itself and states how many tracks you will cross?",
        choices: [
          "The round yellow sign with an X and two R letters",
          "The blue and white Emergency Notification System sign",
          "The rectangular EXEMPT plate",
          "The white X-shaped crossbuck",
        ],
        correctIndex: 3,
        explanation:
          "The crossbuck marks the crossing and carries the track count where more than one set of rails is involved. The round yellow sign is the advance warning, placed a few hundred feet earlier.",
        context:
          "Track count matters because a stopped train on one line can hide a moving one on the next. At a crossing marked only by a crossbuck, look both ways, listen, and stop if a train is coming. The blue and white sign gives the crossing's identification number and an emergency contact for reporting a stalled vehicle or a faulty signal.",
        trap:
          "The round yellow sign is the more memorable of the two, so people place it at the rails - it is always the one further back.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Railroad Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_07",
        topic: "rightOfWay",
        question:
          "You have a flashing yellow arrow to turn left. A gap appears in oncoming traffic, but a pedestrian who started crossing on a WALK signal is still in the crosswalk you would turn into. What must you do?",
        choices: [
          "Turn if the pedestrian has passed the centre line of your target lane",
          "Wait - you owe the pedestrian the right of way as well as oncoming traffic",
          "Complete the turn behind the pedestrian, since the gap will close",
          "Proceed, because the pedestrian signal has already changed",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow arrow permits the turn but yields nothing to you. Both the oncoming traffic and the pedestrian already lawfully in the crosswalk come first.",
        context:
          "Someone who entered the crosswalk on a WALK signal keeps the right of way even after the signal changes, so a countdown running out does not transfer priority to you. Only a green arrow gives a protected turn, and even then you give way to anyone already lawfully in the intersection. The temptation to take a closing gap is what makes this scenario dangerous - the turn commits you before you can reassess.",
        trap:
          "'The pedestrian signal has already changed' sounds decisive but changes nothing; the person who entered lawfully keeps priority until they are across.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Traffic Signals and Pedestrian Right-of-Way",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_08",
        topic: "signs",
        question:
          "Which sign pair is easiest to get backwards, and what distinguishes them?",
        choices: [
          "Curve and turn - only the curve sign is yellow",
          "School and pedestrian crossing - only one has a symbol",
          "Added lane and merge - only the merge sign requires you to make room",
          "Stop and yield - only the stop sign is red",
        ],
        correctIndex: 2,
        explanation:
          "The added lane sign says a new lane is appearing and you need not merge; the merge sign says another stream is joining yours and you should make room. Both show converging roadways, and only one calls for action.",
        context:
          "A third sign in the same family warns that a lane ends, which does require you to move over. Reading these correctly is a lane-position decision at speed, so the useful habit is to ask whether the sign shows a lane appearing, two streams joining, or a lane running out. Both stop and yield signs differ in colour and shape, so that pair is far less confusable.",
        trap:
          "The confusion runs in both directions - drivers who read added lane as merge swerve unnecessarily, and those who read merge as added lane hold their line into a closing gap.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_09",
        topic: "impairment",
        question:
          "An adult driver refuses a breath specimen for the second time. What is the maximum administrative suspension?",
        choices: [
          "730 days",
          "365 days",
          "180 days",
          "90 days",
        ],
        correctIndex: 0,
        explanation:
          "A subsequent refusal can bring a suspension of up to 730 days - two years - against 180 days for a first refusal.",
        context:
          "Providing a specimen that reads 0.08 or above brings a shorter suspension: 90 days first time, up to 365 for later ones. So refusing consistently costs more than failing. These administrative penalties run separately from the criminal case and carry their own reinstatement fee. For a driver under 21, a first refusal costs 180 days and a subsequent one two years.",
        trap:
          "365 days is the maximum for a repeat failed test, and the failure and refusal ladders get merged in people's memory.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Implied Consent Laws for Adults",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_10",
        topic: "rules",
        question:
          "When you finish parallel parking on a two-way street, how far from the kerb may your wheels be?",
        choices: [
          "No more than 12 inches",
          "No more than 24 inches",
          "No more than 6 inches",
          "No more than 18 inches",
        ],
        correctIndex: 3,
        explanation:
          "Eighteen inches is the legal maximum on a two-way street, with the right-hand wheels to the right-hand kerb. Further out and the car intrudes into the traffic lane.",
        context:
          "The technique aims tighter than the limit - about six inches is the target, with 18 inches as the outer bound. The full manoeuvre is judged on the driving exam alongside quick stops from about 20 mph and reversing roughly 60 feet in a straight line. Back-up cameras and mirrors are permitted for both; automated parking functions are not.",
        trap:
          "'No more than 12 inches' sounds like a tidier round figure, but the legal maximum is 18 - and the risk on the exam is being further out than you think, not closer.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Parallel Parking",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_11",
        topic: "rightOfWay",
        question:
          "You are on a one-way frontage road. A vehicle is coming down the exit ramp from the freeway to join your road, and another is moving from your road towards the entrance ramp. Who yields to whom?",
        choices: [
          "You yield to both - frontage road traffic gives way in either direction",
          "You yield to the exiting vehicle only",
          "You yield to the entering vehicle only",
          "Both ramp vehicles yield to you as through traffic",
        ],
        correctIndex: 0,
        explanation:
          "The obligation sits with the frontage road driver for both movements: vehicles entering or about to enter the frontage road from the highway, and vehicles leaving or about to leave it for the highway.",
        context:
          "Frontage roads look like through routes and are not treated as such. Yield signs appear on both one-way and two-way frontage roads, and traffic crosses your path at every ramp. Texas U-turn lanes at frontage road intersections work the same way - the turning traffic is generally protected and the frontage road traffic gives way.",
        trap:
          "'Both ramp vehicles yield to you' applies the normal expectation that merging traffic gives way, and it is the wrong way round on a Texas frontage road.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Enter or Leave Controlled-Access Highway",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_12",
        topic: "safety",
        question:
          "About how long does the average driver take to perceive a hazard, decide, and get onto the brake pedal?",
        choices: [
          "About a quarter of a second",
          "About one and a half seconds",
          "About half a second",
          "About three seconds",
        ],
        correctIndex: 1,
        explanation:
          "Roughly a second and a half. At 60 mph that is more than 130 feet covered before the brakes have done anything at all.",
        context:
          "That fixed delay is why total stopping distance grows so steeply with speed - about 109 feet at 30 mph, 229 at 50, 303 at 60 and 387 at 70, on dry level pavement with good tyres and brakes. Distraction makes it worse: reacting even half a second slower roughly doubles crash risk. Following distance is the only variable a driver actually controls in that chain.",
        trap:
          "'About half a second' is closer to a trained reaction to an expected signal, not to spotting an unexpected hazard on a real road.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Approximate Stopping Distances",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_13",
        topic: "signs",
        question:
          "You are driving on a divided highway and a warning sign tells you the divided section ends. What changes immediately afterwards?",
        choices: [
          "A median island begins separating the directions",
          "The road becomes one-way in your direction",
          "Two-way traffic resumes on the same pavement",
          "The number of lanes in your direction increases",
        ],
        correctIndex: 2,
        explanation:
          "The median disappears and oncoming vehicles share your pavement again. It is the sign in the pair that actually demands caution.",
        context:
          "Its counterpart warns that a divided section is beginning, and a third related sign marks a lawful median crossover. All three use split-roadway symbols, so the only reliable check is your direction of travel: are you gaining protection, losing it, or being shown where you may cross? A driver who gets this backwards relaxes exactly when the head-on risk returns.",
        trap:
          "'A median island begins' is the mirror-image sign, and both symbols are close enough that people match on the picture rather than the direction.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_14",
        topic: "rules",
        question:
          "Which of the following is NOT one of the places Texas prohibits driving on the left side of the road?",
        choices: [
          "Within 100 feet of a bridge, viaduct or tunnel",
          "On a hill or curve where your view is limited",
          "Within 100 feet of an intersection or railway crossing",
          "Within 100 feet of a bus stop",
        ],
        correctIndex: 3,
        explanation:
          "Bus stops are not on the list. The prohibitions cover bridges, viaducts and tunnels, intersections and railway crossings, hills and curves with limited sight distance, marked no-passing zones, and roads with two or more lanes in each direction.",
        context:
          "The theme is places where a vehicle can appear without warning or where there is nowhere to go if one does. Even outside those restrictions, a pass on a two-lane road needs enough room to complete and return before an oncoming vehicle is within 200 feet. You may always drive on the left where you are passing on a two- or three-lane street, on a one-way street, or where the right side is blocked.",
        trap:
          "'Within 100 feet of a bus stop' looks right because it matches the 100-foot pattern used by two of the genuine restrictions.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Keep to the Right",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_15",
        topic: "rightOfWay",
        question:
          "Two cars are changing into the same centre lane of a three-lane one-way road at the same moment. One comes from the left lane, one from the right. Who must yield?",
        choices: [
          "The car moving in from the right lane",
          "The car moving in from the left lane",
          "The car travelling at the higher speed",
          "The car that entered the road most recently",
        ],
        correctIndex: 0,
        explanation:
          "On a road of three or more lanes running the same direction, a vehicle entering a lane from the right yields to one entering the same lane from the left.",
        context:
          "This runs opposite to the yield-to-the-right rule at intersections, which is why it is one of the most frequently missed rules in the handbook. In practice, check the far side of your target lane before committing rather than only your own blind spot. On the same road layout, the far left lane is usually reserved for passing, so through traffic should not be sitting there anyway.",
        trap:
          "'The car from the left' is what you get by importing the intersection yield-to-the-right habit - and both drivers believing it is how these sideswipes happen.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Driving on Multiple-Lane Roads",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_16",
        topic: "parking",
        question:
          "Where a fire station entrance faces the street, how far away must you park on the opposite side of the road?",
        choices: [
          "There is no restriction on the opposite side",
          "Within 75 feet of the entrance is prohibited",
          "Within 30 feet of the entrance is prohibited",
          "Within 50 feet of the entrance is prohibited",
        ],
        correctIndex: 1,
        explanation:
          "Seventy-five feet on the opposite side, and 20 feet from the driveway entrance itself. Appliances need a wide swing to get out, and a car opposite the doors blocks it.",
        context:
          "It is the largest of the Texas parking clearances, which run: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway, 75 feet opposite one, 30 feet approaching a stop sign, yield sign or flashing signal, and 50 feet from the nearest rail at a crossing. Never park within an intersection, on a crosswalk, on a bridge, in a tunnel or on railway tracks at all.",
        trap:
          "'No restriction on the opposite side' is the intuitive answer, because the driveway is not on your side of the road - but that is exactly the space an appliance needs to turn into.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Do Not Park or Stand a Vehicle",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_17",
        topic: "speed",
        question:
          "A school bus that has not passed a commercial vehicle inspection is on a rural road with no state or US highway number. What is its default speed limit?",
        choices: [
          "50 mph",
          "55 mph",
          "60 mph",
          "65 mph",
        ],
        correctIndex: 0,
        explanation:
          "Fifty mph - the lowest figure in the Texas rural defaults, applying to a school bus without the commercial inspection or on an unnumbered highway.",
        context:
          "Four figures cover rural default limits. Cars: 70 mph on a state- or US-numbered highway, 60 mph on an unnumbered one. School buses: 60 mph on a numbered highway if commercially inspected, 50 mph otherwise. Farm-to-market and ranch-to-market roads count as numbered highways. Every one of these applies only where nothing different is posted.",
        trap:
          "60 mph is right for either a car on this road or an inspected bus on a numbered highway - two different ways to arrive at the wrong figure.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed Limits",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_18",
        topic: "sharing",
        question:
          "A cyclist is riding on a one-way street with two marked traffic lanes. Where should they be positioned?",
        choices: [
          "In the centre of the right-hand lane at all times",
          "On the footpath, since the street is one-way",
          "As near as practical to the left kerb or edge",
          "As near as practical to the right kerb or edge",
        ],
        correctIndex: 2,
        explanation:
          "On a one-way road with two or more marked lanes, a cyclist rides near the left edge. There is no oncoming traffic, so the left side is the quieter one and it puts them clear of right-turning vehicles.",
        context:
          "Everywhere else, a cyclist moving slower than traffic keeps as near the right kerb as practical - but with real exceptions for overtaking, preparing to turn left, avoiding hazards, and lanes too narrow to share. That last case is common: a lane under 14 feet wide with no adjacent bike lane can be taken in full. Drivers turning right should merge towards the kerb rather than cutting across.",
        trap:
          "'As near as practical to the right' is the general rule, and the one-way multi-lane case is the specific exception most drivers have never heard of.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Bicycle Traffic Laws",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_19",
        topic: "safety",
        question:
          "How far ahead must people and vehicles be visible before headlights stop being legally required during daylight hours?",
        choices: [
          "1,000 feet",
          "500 feet",
          "300 feet",
          "200 feet",
        ],
        correctIndex: 0,
        explanation:
          "One thousand feet. Below that, whatever the time of day, the lights go on - which is why a heavy Texas thunderstorm at noon triggers the requirement.",
        context:
          "There are two triggers working together: the clock, from 30 minutes after sunset to 30 minutes before sunrise, and the visibility test. Once lights are on, low beam is correct in fog, heavy rain, sleet, snow or dust, within 500 feet of an oncoming vehicle, within 300 feet behind another vehicle, and on lit roads. Note that daytime running lights often leave your tail lights off, which is the worst possible configuration in a downpour.",
        trap:
          "500 feet and 300 feet are both real Texas figures - they are the low beam distances, not the visibility threshold that makes lights mandatory.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Headlights",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_20",
        topic: "signs",
        question:
          "Both a yellow diamond and a black-on-white rectangle can appear at the same location. What is the essential difference?",
        choices: [
          "The rectangle applies to commercial vehicles only",
          "The diamond applies only outside urban districts",
          "The diamond overrides the rectangle when both are present",
          "The rectangle carries the force of law; the diamond describes a condition",
        ],
        correctIndex: 3,
        explanation:
          "Black-on-white regulatory signs must be obeyed like a traffic law. Yellow diamonds warn you about the road so you can adjust, without themselves commanding a manoeuvre.",
        context:
          "That distinction resolves a lot of exam questions. Advisory speed plates are yellow and attach to warnings; posted speed limits are black on white and stand alone. Ignoring a warning is still risky - failing to slow enough for the hazard it flags can breach the requirement to drive at a reasonable and prudent speed - but the enforceable instruction is always on the regulatory sign.",
        trap:
          "'The diamond overrides the rectangle' inverts the hierarchy; warnings never displace regulations, and a yellow advisory number never replaces a posted limit.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_21",
        topic: "impairment",
        question:
          "A driver is convicted of DWI while carrying a 12-year-old passenger. How is that charged in Texas?",
        choices: [
          "A state jail felony",
          "A Class B misdemeanour, as for any first DWI",
          "A Class A misdemeanour",
          "A second-degree felony",
        ],
        correctIndex: 0,
        explanation:
          "Carrying a passenger under 15 while intoxicated is a state jail felony, with a fine up to $10,000, 180 days to two years in state jail and a suspension of 90 days to a year.",
        context:
          "Texas escalates DWI by circumstance rather than just by count. Intoxication assault is a third-degree felony, intoxication manslaughter a second-degree felony. Repeat offending climbs the same way: a second offence is a Class A misdemeanour and a third becomes a third-degree felony carrying two to ten years. The child-passenger enhancement applies even on an otherwise first offence.",
        trap:
          "'As for any first DWI' misses the enhancement entirely; the child passenger converts a misdemeanour into a felony regardless of prior record.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Penalties for DWI and DUI",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_22",
        topic: "rules",
        question:
          "You are turning left from a two-way street onto a one-way street. Which lane should you enter?",
        choices: [
          "The centre lane, regardless of how many lanes there are",
          "The lane in which you will interfere least with other traffic",
          "Always the leftmost lane of the one-way street",
          "Always the rightmost lane of the one-way street",
        ],
        correctIndex: 1,
        explanation:
          "The rule is functional rather than fixed: enter whichever lane causes the least disruption, which usually means the nearest available one that lets you complete the turn cleanly.",
        context:
          "Turning technique in Texas follows a set sequence - decide early, check mirrors and blind spots, get into the correct lane at least half a block ahead, signal 100 feet out, slow before you turn rather than during it, keep both hands on the wheel, and finish in the proper lane. Once the turn is complete you can signal and change lanes if you need a different one.",
        trap:
          "'Always the leftmost lane' sounds like a tidy rule and can put you across several lanes of a wide one-way street with traffic already in them.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Turning",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_23",
        topic: "safety",
        question:
          "Roughly how deep does water need to be to float many passenger cars off the road?",
        choices: [
          "About 24 inches",
          "About 36 inches",
          "About 12 inches",
          "About 6 inches",
        ],
        correctIndex: 2,
        explanation:
          "About twelve inches. Once buoyancy exceeds the vehicle's weight there is no friction between tyres and road at all, so steering and braking do nothing.",
        context:
          "The three figures escalate quickly: six inches reaches the underside of most cars and can stall them, twelve floats many, and two feet of moving water carries away pickups and SUVs. Floodwater also conceals missing roadbed, and pavement weakened underneath can collapse after the water drops. Nearly half of United States flash flood deaths involve a vehicle, and driving around a flood barricade is a criminal offence in Texas.",
        trap:
          "'About 24 inches' is the figure for carrying away a pickup, and using it for a car overestimates by a factor of two exactly where the margin matters.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Floods",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_24",
        topic: "rightOfWay",
        question:
          "You arrive at a four-way stop at the same instant as a car directly opposite you. You intend to turn left; they intend to go straight. Who goes first?",
        choices: [
          "You do, because you arrived at the same time",
          "Whoever signals first",
          "The driver on the right of the pair",
          "The driver going straight",
        ],
        correctIndex: 3,
        explanation:
          "The rule that a left turn yields to oncoming through traffic does not switch off at a stop sign. Simultaneous arrival from opposite directions means the straight-through vehicle goes first.",
        context:
          "Four-way stops resolve by arrival order, with the vehicle on the right winning a genuine side-by-side tie - but the left-turn rule sits on top of that for vehicles facing each other. Underneath everything is the principle that right of way is given rather than taken: if the other driver moves off regardless, let them.",
        trap:
          "'Whoever signals first' invents a rule that does not exist anywhere in Texas law - a signal announces an intention, it does not create priority.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Right-of-Way at Intersections",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_25",
        topic: "signals",
        question:
          "An overhead lane-use signal above your lane changes to a steady yellow X. What does it mean?",
        choices: [
          "Prepare to leave the lane safely - the assignment is changing",
          "Slow down but stay in the lane",
          "The lane is open to you",
          "Stop before entering the next intersection",
        ],
        correctIndex: 0,
        explanation:
          "Steady yellow X is the transitional display: the lane is about to change status, so plan a safe move out of it rather than braking in place.",
        context:
          "The three displays are a set. Red X means do not use the lane, steady yellow X means prepare to vacate, and a steady downward green arrow means the lane is open to you. They appear on reversible and managed lanes on both streets and highways, and they can change while you are driving under them - so a lane that was open a minute ago may not be now.",
        trap:
          "'Slow down but stay in the lane' treats the X like a warning about speed; the message is about which lane you should be in, not how fast.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Guide Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_26",
        topic: "signs",
        question:
          "Orange appears on Texas signs and devices for one purpose. Which of these would be orange?",
        choices: [
          "A sign indicating a hospital ahead",
          "A sign warning of a lane closure for road maintenance",
          "A sign directing you to a state park",
          "A sign showing the maximum speed limit",
        ],
        correctIndex: 1,
        explanation:
          "Orange is exclusively construction and maintenance. Anything temporary about a work zone - signs, cones, drums, barricades, arrow panels - uses it.",
        context:
          "The colour system does a lot of work at speed: orange for work zones, yellow for general warning, brown for parks and scenic guidance, blue for driver services, green for destinations and permitted movements, and black on white or red and white for regulation. Seeing orange should immediately raise your expectation of lane shifts, workers, doubled fines and slower traffic.",
        trap:
          "Brown and orange read similarly at distance in low light, which is why the park sign is the plausible wrong answer here.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Standard Colors",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_27",
        topic: "sharing",
        question:
          "On a level highway, how much longer does it typically take to overtake a large truck than to overtake a car?",
        choices: [
          "Roughly twice as long",
          "About ten seconds longer",
          "Three to five seconds longer",
          "About one second longer",
        ],
        correctIndex: 2,
        explanation:
          "Three to five extra seconds on level ground, because of the sheer length of a tractor-trailer. That is a lot of additional distance covered in the oncoming lane on a two-lane road.",
        context:
          "Terrain changes it further: on an upgrade a truck loses speed and becomes easier to pass, while on a downgrade its momentum builds and you may need more power than you expect. Flash your headlights to let the driver know you are coming, especially at night, and move back only when you can see the whole front of the truck in your mirror. If the truck flashes its lights after you pass, that is the signal it is clear to pull in.",
        trap:
          "'About one second longer' underestimates the length involved, and on a two-lane road that miscalculation is made in the oncoming lane.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Share the Road with Trucks",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_28",
        topic: "rules",
        question:
          "You are about to overtake on a two-lane road. Which sequence matches what Texas expects?",
        choices: [
          "Signal left, accelerate, pass, and return as soon as you are ahead of the other car",
          "Move left first, then signal once you are alongside the other vehicle",
          "Sound the horn, pass on the right, and return when convenient",
          "Check mirrors and blind spot, signal left, confirm no oncoming traffic within reach, pass, then return once the passed car is fully visible in your mirror",
        ],
        correctIndex: 3,
        explanation:
          "The checks come before the signal, the signal comes before the movement, and the return waits until the passed vehicle is fully visible in your mirror. Cutting back in early is how passes turn into sideswipes.",
        context:
          "Before any of that you need enough sight distance ahead, no solid line on your side, and no intersection, railway crossing, bridge or tunnel within 100 feet. You must be able to complete the pass and be back before an oncoming vehicle is within 200 feet. A tap on the horn to alert the driver ahead is expected where it is useful.",
        trap:
          "'Return as soon as you are ahead' is what impatience produces, and being ahead is not the same as being clear - the mirror check is the actual test.",
        sourceLabel: "Texas Driver Handbook (DL-7) - How to Pass on a Two-Lane Road",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_29",
        topic: "emergencies",
        question:
          "You leave the scene of a crash that caused $600 of damage to another vehicle. How is that treated?",
        choices: [
          "A Class B misdemeanour - up to $2,000 and 180 days in jail",
          "A Class C misdemeanour - a fine of up to $500",
          "A civil matter to be settled between the insurers",
          "A third-degree felony with a prison sentence",
        ],
        correctIndex: 0,
        explanation:
          "At $200 or more in damage, failing to stop becomes a Class B misdemeanour with a fine up to $2,000 and up to 180 days in jail. Below $200 it is a Class C misdemeanour with a fine up to $500.",
        context:
          "The duties at any damage-only crash are to stop, exchange names, addresses, registration and insurer details, and show your licence if asked. Where the crash is on a main lane, ramp, shoulder or median and both vehicles still drive safely, you are expected to move them to a crash investigation site, frontage road or nearby cross street. Injury and fatality crashes carry far heavier penalties, up to a second-degree felony.",
        trap:
          "'A civil matter between the insurers' is what a damage-only crash feels like, and it ignores the criminal duty to remain at the scene.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Crash Resulting in Damage to a Vehicle",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_30",
        topic: "licensing",
        question:
          "DPS may suspend a licence for repeated traffic convictions. What thresholds apply to a driver over 18?",
        choices: [
          "Five or more within 12 months only",
          "Four or more convictions within 12 months, or seven or more within 24 months",
          "Three or more within 12 months, or six or more within 24 months",
          "Two or more within 12 months, at any age",
        ],
        correctIndex: 1,
        explanation:
          "Four separate convictions inside any 12-month window, or seven inside any 24-month window, put a licence at risk of an administrative suspension.",
        context:
          "Drivers under 18 face a tighter threshold: two or more separate convictions within any 12 months can bring a suspension after a hearing. Some offences suspend automatically on conviction, including DWI, drug offences, failing to stop and render aid, evading arrest, racing on a public road, and a repeat conviction for passing a stopped school bus.",
        trap:
          "'Two or more within 12 months, at any age' takes the under-18 threshold and applies it to everyone - the minor's limit really is that much tighter.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Administrative Suspensions and Revocations",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_31",
        topic: "safety",
        question:
          "Texas equipment rules require a foot brake capable of stopping a car within what distance from 20 mph?",
        choices: [
          "60 feet",
          "15 feet",
          "25 feet",
          "40 feet",
        ],
        correctIndex: 2,
        explanation:
          "Twenty-five feet from 20 mph is the minimum standard for the service brake, with the parking brake required to be adequate to stop and hold the car.",
        context:
          "Other equipment figures follow the same practical logic: the horn must be audible from 200 feet, the rear-view mirror must show the road 200 feet behind, rear reflectors must be visible up to 600 feet and mounted 15 to 60 inches high, and tyres need at least 2/32 of an inch of tread. Vehicles are inspected annually, and the registration sticker on the windscreen serves as combined proof of registration and inspection.",
        trap:
          "'15 feet' is shorter than a car can physically manage from 20 mph, but it looks plausible if you are matching against the fire hydrant clearance figure.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Required Equipment for Motor Vehicles",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_32",
        topic: "impairment",
        question:
          "Which statement about the relationship between drinks and blood alcohol concentration is accurate?",
        choices: [
          "Beer produces a substantially lower reading than spirits",
          "Wine is metabolised faster than beer or spirits",
          "Body weight has no measurable effect on the resulting reading",
          "A 12 oz beer, a 5 oz glass of wine and a drink with 1.5 oz of spirits contain roughly the same alcohol",
        ],
        correctIndex: 3,
        explanation:
          "Those three servings carry approximately the same amount of alcohol, which is why counting drinks only works if you know what a drink actually is.",
        context:
          "Body weight matters a great deal: the same number of drinks produces a far higher reading in a lighter person. Food, medication, health and how quickly the drinks went down all shift the figure too, so published tables are averages rather than predictions. It takes roughly an hour to clear each drink, and nothing speeds that up. Anyone under 21 has no allowance at all.",
        trap:
          "'Beer produces a lower reading' is the most persistent drinking myth there is, and it is what convinces people they are fine after several.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Know Your Legal Limit",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_33",
        topic: "signs",
        question:
          "Which shape does Texas reserve for school advance warning and school crossing signs?",
        choices: [
          "A five-sided pentagon",
          "A downward-pointing triangle",
          "A pennant",
          "A horizontal rectangle",
        ],
        correctIndex: 0,
        explanation:
          "The pentagon is used only for school advance and school crossing signs, so the shape alone signals children before you have read anything.",
        context:
          "Reserved shapes are the point of the whole system: octagon for stop, downward triangle for yield, pennant for advance warning of a no-passing zone, pentagon for schools, round for advance railway warning, diamond for hazards, vertical rectangle for regulation, horizontal rectangle for guidance. Exam questions lean on these because a shape is unambiguous where wording can be paraphrased.",
        trap:
          "The pennant is the other unusual shape in the set, and people who remember 'that odd-shaped one' without the meaning tend to pick it here.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Signs by Shape",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_34",
        topic: "speed",
        question:
          "A Texas highway is posted at 75 mph. Fog has reduced visibility to a few hundred feet. What speed is lawful?",
        choices: [
          "Any speed, provided you use hazard warning lights",
          "Whatever is reasonable and prudent for the visibility, well below 75",
          "75 mph, since that is the posted limit",
          "Exactly 20 mph below the posted limit",
        ],
        correctIndex: 1,
        explanation:
          "A posted limit is the maximum in good conditions, never a permission for bad ones. In fog the lawful speed is whatever lets you stop inside the distance you can actually see.",
        context:
          "Two requirements run together. Posted and statutory maximums set the ceiling - 30 mph in an urban district, 70 on numbered rural highways, and up to 75, 80 or 85 where the Transportation Commission has authorised it after a study. The basic speed rule requires an appropriate reduction whenever conditions demand it, including at intersections and railway crossings, on curves, and in bad weather. Exceeding the posted limit is treated as evidence the speed was unreasonable, but you can be cited below it too.",
        trap:
          "'20 mph below the posted limit' borrows a number from the Move Over law, which has nothing to do with weather.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed and Speed Limits",
        sourceUrl: DL7,
      },
      {
        id: "tx_s5_35",
        topic: "rightOfWay",
        question:
          "You are waiting to turn left out of a shopping centre driveway onto a busy street. A gap opens in traffic, but a person is walking along the sidewalk towards the driveway. What must you do?",
        choices: [
          "Take the gap, since the pedestrian has not reached the driveway",
          "Give way to traffic only, since the sidewalk is not a crosswalk",
          "Stop before the sidewalk and let the pedestrian pass before moving",
          "Move forward across the sidewalk to see better, then wait",
        ],
        correctIndex: 2,
        explanation:
          "Coming out of a driveway you stop before the sidewalk and give way to pedestrians on it as well as to traffic on the road. The sidewalk is crossed first, so it is dealt with first.",
        context:
          "The same rule covers alleys, buildings and private roads. Nosing across the sidewalk to see round parked cars is the common shortcut and is precisely what puts the front of your car in a pedestrian's path - especially for a child, a wheelchair user or someone with a white cane. Texas expects a driver to stop entirely where that is what it takes to avoid endangering a person who is blind or has a disability.",
        trap:
          "'Move forward across the sidewalk to see better' is what nearly every driver does at a blind exit, and it is exactly what the rule prohibits.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Private Roads and Driveways",
        sourceUrl: DL7,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions, the same length as the real Texas DPS knowledge exam. Pass mark is 21 out of 30, which is 70 percent - the same standard DPS applies.",
    questions: [
      {
        id: "tx_s6_01",
        topic: "signs",
        question:
          "A yellow diamond shows an arrow bending right and then left again. What does it warn of?",
        choices: [
          "A reverse curve - the road bends one way then the other",
          "A junction where a side road joins from the right",
          "A winding road with many bends over a long distance",
          "A sharp right turn followed by a dead end",
        ],
        correctIndex: 0,
        explanation:
          "The double-bend arrow is a reverse curve: one bend immediately followed by another in the opposite direction. Slow, keep right and stay out of the oncoming lane through both.",
        context:
          "A related sign uses a wavy arrow to show a winding road with several bends over a stretch, and separate signs cover a single gradual curve and a sharp turn. All of them ask for the same three responses: reduce speed, keep right, and do not pass. Any yellow advisory speed plate hanging below gives the highest speed at which the bends can be taken safely.",
        trap:
          "'A winding road' is the closest relative, and the difference is whether you are dealing with two linked bends or a whole series of them.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_02",
        topic: "rules",
        question:
          "You approach a stop sign at a quiet junction and can see clearly in both directions that nothing is coming. What is required?",
        choices: [
          "A stop only if a pedestrian is present",
          "A complete stop before the crosswalk or intersection",
          "A rolling stop, since the way is clearly visible",
          "Slowing to walking pace and continuing",
        ],
        correctIndex: 1,
        explanation:
          "Every vehicle reaching a stop sign stops completely, every time. Slowing down does not meet the requirement no matter how good the visibility is.",
        context:
          "Stop before the crosswalk, the intersection or the stop sign itself, whichever comes first, and behind any white stop line. Then yield to pedestrians and other vehicles before proceeding carefully. Where an ALL WAY plate is fitted, every approach stops and vehicles proceed in arrival order, with a tie going to the vehicle on the right.",
        trap:
          "'The way is clearly visible' is the reasoning behind the rolling stop, and it fails whenever what you cannot see is a cyclist, a motorcycle or a child.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_03",
        topic: "speed",
        question:
          "You are on an urban district street with no posted speed limit sign. What speed applies?",
        choices: [
          "35 mph",
          "40 mph",
          "30 mph",
          "25 mph",
        ],
        correctIndex: 2,
        explanation:
          "Thirty mph is the statutory default for urban district streets where nothing is posted. Cities may set something different, but they have to post it.",
        context:
          "The statutory defaults form a short list: 30 mph on urban district streets, 15 mph in an alley, 15 mph on beaches and beach-adjacent county roads where adopted, 70 mph on state- or US-numbered rural highways and 60 mph on unnumbered rural roads. All of them are ceilings for good conditions - the basic speed rule still requires you to slow whenever the situation demands it.",
        trap:
          "25 mph is the residential default in many other states, which is why it is the most common wrong answer for Texas.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed Limits",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_04",
        topic: "rightOfWay",
        question:
          "A school bus travelling towards you on the same two-lane street stops and switches on its alternately flashing red lights. What must you do?",
        choices: [
          "Continue, since the bus is facing the opposite direction",
          "Slow to 20 mph and pass with caution",
          "Stop only if you see a child crossing the street",
          "Stop and remain stopped until the lights stop flashing or the bus moves",
        ],
        correctIndex: 3,
        explanation:
          "On an ordinary undivided street, traffic from both directions stops. A child crossing to reach the bus may well be coming from your side of the road.",
        context:
          "You may go again once the red lights stop flashing, the bus starts moving, or the driver signals you through. The narrow exceptions are a bus on a different roadway altogether, or a loading zone on a controlled-access highway where pedestrians cannot cross the lanes. Penalties start at $500 to $1,250 for a first conviction and reach felony level where serious injury results.",
        trap:
          "'It is facing the other way' is the reasoning that kills children, because the child crossing the street is doing so precisely to reach that bus.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Yield Right-of-Way to School Buses",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_05",
        topic: "safety",
        question:
          "You are driving at 45 mph in good conditions. What following gap should you leave?",
        choices: [
          "Four seconds",
          "Two seconds",
          "Three seconds",
          "One second",
        ],
        correctIndex: 0,
        explanation:
          "Above 30 mph the recommended gap is four seconds. Forty-five mph sits well into that range, and stopping distance at that speed already runs to hundreds of feet.",
        context:
          "The threshold is 30 mph: two seconds at or below it, four seconds above, and more in rain, heavy traffic or poor visibility. Four seconds is also the sensible default for a new driver at any speed. Check yourself against a fixed object - if you reach it less than the target time after the car ahead, you are too close.",
        trap:
          "'Two seconds' is correct at 30 mph and below, and carrying it up to highway speeds is the most common following-distance error there is.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed and Speed Limits",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_06",
        topic: "signs",
        question:
          "Green is used on Texas signs mainly for what purpose?",
        choices: [
          "Indicating a regulation you must obey",
          "Showing directions, distances and permitted movements",
          "Warning of temporary construction conditions",
          "Marking recreational and scenic areas",
        ],
        correctIndex: 1,
        explanation:
          "Green is guidance: destinations, distances, exits, and movements that are allowed. It helps you navigate rather than imposing a duty.",
        context:
          "Set green against the other colours and the system becomes quick to read. Blue points to motorist services, brown to parks and scenic areas, yellow warns, orange marks work zones, red means stop or prohibition, and black on white means regulation. Colour tells you whether a sign is information or instruction before you have processed a single word.",
        trap:
          "'A regulation you must obey' is black-on-white territory - green describes what is available, not what is required.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Standard Colors",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_07",
        topic: "impairment",
        question:
          "At what blood alcohol concentration is a Texas driver aged 21 or over legally intoxicated?",
        choices: [
          "0.10",
          "0.02",
          "0.08",
          "0.05",
        ],
        correctIndex: 2,
        explanation:
          "Zero point zero eight. Reaching it is intoxication as a matter of law, whatever the driver's tolerance or apparent condition.",
        context:
          "That figure is only one route to a DWI. The other is losing the normal use of mental or physical faculties through alcohol or any drug, which can happen below 0.08 - so a driver under the limit is not automatically in the clear. Drivers under 21 face zero tolerance, where any detectable alcohol is an offence in itself.",
        trap:
          "0.10 is the old national figure and still circulates in conversation, which keeps it plausible decades after it stopped being the law here.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Know Your Legal Limit",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_08",
        topic: "rules",
        question:
          "A 17-year-old with a provisional Texas licence wants to take a hands-free call while driving. Is that permitted?",
        choices: [
          "Yes, provided the device is genuinely hands-free",
          "Yes, provided the call lasts under two minutes",
          "No, unless the vehicle is stopped at a traffic signal",
          "No - drivers under 18 may not use any wireless device, hands-free included, except in an emergency",
        ],
        correctIndex: 3,
        explanation:
          "The under-18 restriction covers every wireless communication device, hands-free or not. Only a genuine emergency lifts it.",
        context:
          "That rule sits alongside the statewide ban on reading, writing or sending messages while driving that applies to every driver, and the prohibition on handheld device use in school zones where signs are posted. Provisional licence holders also may not drive between midnight and 5 a.m. except for work, school activities or a medical emergency, and may not carry more than one non-family passenger under 21.",
        trap:
          "'Provided it is genuinely hands-free' applies the adult exception to a driver who does not have it - the under-18 rule is deliberately absolute.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Graduated Driver License",
        sourceUrl: "https://www.dps.texas.gov/section/driver-license/graduated-driver-license-gdl-and-hardship-license",
      },
      {
        id: "tx_s6_09",
        topic: "signals",
        question:
          "A traffic signal ahead changes to steady yellow as you approach. What does Texas expect?",
        choices: [
          "Stop before the crosswalk if you can do so safely; otherwise clear the intersection",
          "Accelerate to clear the intersection before the red",
          "Stop immediately wherever you are",
          "Continue at your current speed - yellow has no legal effect",
        ],
        correctIndex: 0,
        explanation:
          "Yellow warns that red is coming. Stop if you can do it safely, and if you are already too close to stop without risk, continue through carefully.",
        context:
          "The judgement is about whether stopping is safe, not whether it is convenient - a car close behind changes the calculation. Flashing yellow means something different: slow down and proceed with caution. A flashing yellow arrow permits a left turn after yielding to oncoming traffic, and a steady yellow arrow signals that the permitted turn phase is ending.",
        trap:
          "'Accelerate to clear it' is the habit that produces the crash a yellow light is designed to prevent, and it is why the handbook warns about drivers racing a red.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Traffic Signals",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_10",
        topic: "rightOfWay",
        question:
          "You are leaving a car park onto a public street, crossing a sidewalk on the way out. What does Texas require?",
        choices: [
          "Proceed if no vehicle is within 100 feet",
          "Stop before the sidewalk and yield to pedestrians and approaching traffic",
          "Yield to approaching vehicles only",
          "Edge forward across the sidewalk to improve your view, then yield",
        ],
        correctIndex: 1,
        explanation:
          "Stopping before the sidewalk is the requirement, and it comes before yielding to traffic. The sidewalk is the first thing you cross, so it is the first thing you give way to.",
        context:
          "The same rule governs private roads, alleys and driveways: emerging traffic yields to everything already using the sidewalk and the road. It is the same logic that puts the yield on frontage road drivers at freeway ramps and on drivers whose street ends at a T-intersection. Nosing forward for a better view is the exact behaviour the rule is written against.",
        trap:
          "'Edge forward to improve your view' is what almost every driver does at a blind exit, and it puts the front of the car in the pedestrian's path.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Private Roads and Driveways",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_11",
        topic: "sharing",
        question:
          "You are waiting to turn left and a motorcycle is approaching from the opposite direction with its right indicator flashing. What should you do?",
        choices: [
          "Turn while sounding the horn to confirm your intention",
          "Move into the intersection and complete the turn behind the motorcycle",
          "Wait until the motorcycle actually begins turning before you move",
          "Turn immediately, since the rider has signalled",
        ],
        correctIndex: 2,
        explanation:
          "Motorcycle indicators often do not cancel themselves, so a flashing signal may be left over from a previous turn. Wait until the bike is visibly slowing and turning.",
        context:
          "A driver turning left across an oncoming motorcycle is the most common car-motorcycle crash there is, made worse by how hard it is to judge a bike's speed and distance. Take a deliberate second look before turning at any junction, allow a rider the full lane width, and leave four to six seconds when following one.",
        trap:
          "'The rider has signalled' is reasonable logic applied to a machine whose signals frequently lie - which is why the handbook warns about it specifically.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Share the Road with Motorcycles",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_12",
        topic: "safety",
        question:
          "Water is flowing across a road ahead of you and you cannot judge its depth. What should you do?",
        choices: [
          "Cross slowly in a low gear",
          "Cross quickly to avoid stalling",
          "Wait five minutes to see whether the level drops",
          "Turn around and find another route",
        ],
        correctIndex: 3,
        explanation:
          "Water you cannot read is water you do not drive into. Six inches can stall a car, twelve can float it, and the roadbed underneath may already have washed away.",
        context:
          "Nearly half of United States flash flood deaths involve a vehicle, and two feet of moving water is enough to carry off a pickup or SUV. Roads weakened by flooding can collapse even after the water recedes, so caution is warranted afterwards too. If your vehicle stalls in floodwater, get out quickly and move to higher ground. Driving around a flood barricade is a criminal offence carrying jail time.",
        trap:
          "'Cross slowly in a low gear' is a real off-road technique and it is useless here, because the problem is buoyancy and a missing roadbed, not traction.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Floods",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_13",
        topic: "signs",
        question:
          "A downward-pointing triangular sign faces you where your road joins another. What does it require?",
        choices: [
          "Slow down, and stop if necessary, to give way to traffic on the other road",
          "Come to a complete stop every time regardless of traffic",
          "Merge at your current speed into the nearest gap",
          "Give way only to vehicles approaching from your left",
        ],
        correctIndex: 0,
        explanation:
          "A yield sign asks you to slow, assess, and give way - stopping only if that is what it takes. It is the difference between a yield and a stop sign.",
        context:
          "Yield signs also control entry to roundabouts, where you give way to everything already circulating and then enter on a genuine gap. The obligation runs to pedestrians and cyclists on the other road as well as to vehicles. Failing to yield and causing bodily injury carries a fine of $500 to $2,000, rising to $1,000 to $4,000 for serious bodily injury.",
        trap:
          "'Stop every time' is the over-cautious reading, and an unnecessary stop at a yield line invites a rear-end collision from the driver behind.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_14",
        topic: "rules",
        question:
          "You are joining a Texas freeway from an entrance ramp. What is your obligation?",
        choices: [
          "Cross directly to the left lane as soon as you join",
          "Yield to traffic already on the freeway while matching its speed",
          "Enter at the ramp speed and let traffic on the freeway adjust",
          "Stop at the end of the ramp before merging",
        ],
        correctIndex: 1,
        explanation:
          "Traffic already on the freeway has the right of way. Use the acceleration lane to reach a matching speed, then merge into a gap rather than forcing one.",
        context:
          "Once on the freeway, use the right lane for travelling at or below the general flow, and the middle or left lanes for passing. Move to the exit lane well in advance of your junction - exit signs are usually placed at least 1,000 yards ahead - and shed speed on the ramp rather than in the through lane. Where a sign says the left lane is for passing only, through traffic belongs elsewhere.",
        trap:
          "'Stop at the end of the ramp' is one of the most dangerous things you can do on a freeway entrance, because it leaves you accelerating from zero into 70 mph traffic.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Entering the Highway",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_15",
        topic: "speed",
        question:
          "A TxDOT maintenance vehicle is stopped on the shoulder of a 70 mph highway with its lights flashing, and the adjacent lane is free. What should you do?",
        choices: [
          "Maintain speed but move as far right as possible",
          "Slow to 35 mph regardless of which lane you are in",
          "Move out of the lane nearest the vehicle, or slow to 50 mph if you cannot",
          "Slow to 60 mph and stay in your lane",
        ],
        correctIndex: 2,
        explanation:
          "Vacating the adjacent lane satisfies the Move Over law. If that is not possible, the alternative is 20 mph below the limit - 50 mph on a 70 mph road.",
        context:
          "The law covers law enforcement, fire, EMS, tow trucks, utility service vehicles and TxDOT vehicles stopped with lights activated, and since September 2025 animal control and parking enforcement vehicles too. Below 25 mph the requirement becomes slowing to under 5 mph. A first violation can reach $1,250, and causing serious injury brings jail time and a fine up to $4,000.",
        trap:
          "'Slow to 60 and stay in your lane' subtracts 10 rather than 20 and skips the move-over option entirely - two errors in one comfortable-feeling answer.",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Slow Down or Move Over",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_16",
        topic: "signs",
        question:
          "A white sign shows a black arrow with a diagonal line through it, pointing left. What does it prohibit?",
        choices: [
          "Changing lanes to the left",
          "Passing on the left",
          "Making a U-turn",
          "Turning left at that intersection",
        ],
        correctIndex: 3,
        explanation:
          "The crossed-out left arrow bans left turns at that junction. A separate sign with a crossed-out U-shaped arrow bans U-turns.",
        context:
          "These belong to the family of regulatory turn signs, which also includes signs permitting turns only in the direction shown, dual left-turn lane signs, and RIGHT LANE MUST TURN RIGHT. All of them are black on white or red on white and carry the force of law. Read them early enough to change lanes rather than committing to a lane where the turn you need is prohibited.",
        trap:
          "'Making a U-turn' is the near neighbour, and at a glance the two crossed-out arrows are easy to mistake for one another.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_17",
        topic: "impairment",
        question:
          "A 20-year-old has one drink and then drives. What is the position under Texas law?",
        choices: [
          "It is an offence - any detectable alcohol is prohibited for drivers under 21",
          "It is lawful, since one drink is well below 0.08",
          "It is lawful if the driver shows no signs of impairment",
          "It is an offence only if the driver is under 18",
        ],
        correctIndex: 0,
        explanation:
          "Zero tolerance applies to everyone under 21. Any detectable alcohol while driving is Driving Under the Influence by a Minor, whatever the reading.",
        context:
          "A minor may not buy, attempt to buy, possess or consume alcohol at all, and those non-driving offences carry licence suspensions of their own, starting at 30 days. Refusing to give a breath or blood specimen brings a 180-day suspension on a first refusal, and giving one that shows any alcohol brings 60 days. Reach 0.08 and the full adult DWI charge applies as well.",
        trap:
          "'Well below 0.08' applies the adult standard to a driver who is not covered by it - the limit for a minor is zero, not lower.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Zero Tolerance for Minors",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_18",
        topic: "safety",
        question:
          "Which statement about Texas safety belt requirements is accurate?",
        choices: [
          "Belts are required only on highways posted above 55 mph",
          "Every occupant of a seat fitted with a belt must wear one, in any seating position",
          "Only front-seat occupants are required to wear belts",
          "Passengers over 18 may choose not to wear a belt",
        ],
        correctIndex: 1,
        explanation:
          "Everyone in a belted seat wears the belt, front or back, whatever their age. Pickups, SUVs and trucks are included.",
        context:
          "Anyone 15 or older can be cited personally, and the driver is fined separately for unbelted passengers under 17. Children under 8 need an approved child seat unless already taller than 4 feet 9 inches. It is also an offence to carry anyone under 18 in the open bed of a pickup or on a flatbed trailer, with narrow exceptions for parades, emergencies, farm work and beaches.",
        trap:
          "'Passengers over 18 may choose' is the personal-responsibility argument, and Texas simply does not provide that exemption.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Safety Belts",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_19",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light. Oncoming traffic is heavy and the light turns yellow while you wait in the intersection. What should you do?",
        choices: [
          "Turn immediately, forcing oncoming traffic to stop",
          "Remain in the intersection until the next green",
          "Complete the turn once oncoming traffic stops, clearing the intersection",
          "Reverse out of the intersection before the light turns red",
        ],
        correctIndex: 2,
        explanation:
          "Once you are legally in the intersection you clear it. When oncoming traffic stops for the yellow and red, complete the turn rather than sitting there.",
        context:
          "A green ball permits a left turn but gives no protection - oncoming through traffic keeps the right of way and you wait for a real gap. Only a green arrow is protected. The judgement that matters is not entering the intersection unless you can reasonably expect to clear it, since a car stranded in the middle blocks the cross traffic that gets the next green.",
        trap:
          "'Reverse out of the intersection' feels like undoing a mistake, and reversing into traffic that is now moving behind you is far more dangerous than completing the turn.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Left Turn on Green",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_20",
        topic: "rules",
        question:
          "You are on a two-lane road with a broken yellow centre line on your side. What does that permit?",
        choices: [
          "Passing at any time, since the line is broken",
          "Parking along the centre of the road",
          "Nothing - a yellow line always prohibits crossing",
          "Passing, when it is safe and the way ahead is clear",
        ],
        correctIndex: 3,
        explanation:
          "A broken yellow line permits passing when it is genuinely safe. The line grants permission; it does not certify that the conditions are right.",
        context:
          "Even where the marking allows it, passing is prohibited on a hill or curve with limited view, within 100 feet of an intersection, railway crossing, bridge, viaduct or tunnel, and anywhere signs forbid it. You must also be able to complete the pass and return before an oncoming vehicle is within 200 feet. A solid yellow line on your side means no passing at all.",
        trap:
          "'At any time, since the line is broken' treats the marking as the whole test, when it is only the first of several conditions.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Pavement Markings",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_21",
        topic: "signs",
        question:
          "A flag person in an orange vest holds a paddle showing SLOW. What should you do?",
        choices: [
          "Reduce speed and continue through the zone with caution",
          "Stop and wait for the paddle to be turned around",
          "Maintain your speed but move to the adjacent lane",
          "Stop briefly, then resume the posted speed",
        ],
        correctIndex: 0,
        explanation:
          "The SLOW side of the paddle means keep moving at reduced speed. The other face reads STOP, and that one means stop in your lane and wait.",
        context:
          "A flag person's instructions must be obeyed and they are used where the hazard is significant. Stop in your lane without veering, do not move off until you are told to, and expect the unexpected - including oncoming vehicles in your lane where a single lane is being shared. Some zones use an automated flagging device instead, controlled remotely so the operator can stand clear of traffic.",
        trap:
          "'Stop and wait' treats SLOW as if it were STOP, and stopping when the flag person is releasing traffic backs up the whole queue behind you.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Flag Person",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_22",
        topic: "parking",
        question:
          "You need to park on a street and there is a fire hydrant near the space. What clearance does Texas require?",
        choices: [
          "30 feet",
          "15 feet",
          "10 feet",
          "20 feet",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet from the hydrant, so a crew can connect hose from either side without a car in the way.",
        context:
          "Related clearances: 20 feet from a crosswalk at an intersection, 30 feet approaching a stop sign, yield sign or flashing signal, 20 feet from a fire station driveway with 75 feet opposite it, and 50 feet from the nearest rail at a crossing. You may never park within an intersection, on a crosswalk or sidewalk, on a bridge, in a tunnel or on railway tracks, and on a two-way street your right wheels must finish within 18 inches of the kerb.",
        trap:
          "20 feet is the crosswalk figure and sits immediately beside this one in the list, which is why the two get swapped.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Do Not Park or Stand a Vehicle",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_23",
        topic: "safety",
        question:
          "Your car begins to skid on a wet road. What is the correct sequence?",
        choices: [
          "Apply the parking brake to slow the rear wheels",
          "Steer the opposite way to the skid to counteract it",
          "Take your foot off the accelerator and steer in the direction of the skid",
          "Brake firmly and hold the steering wheel straight",
        ],
        correctIndex: 2,
        explanation:
          "Come off the gas and steer where the rear of the car is heading, then straighten gently as grip returns. Sudden braking removes what little control you still have.",
        context:
          "Emergency handling shares one principle: no abrupt inputs when the tyres are already at their limit. After a blowout, ease off, brake gently and steer straight to a stop. If a wheel drops off the pavement, hold the wheel, slow down, then ease back on. Prevention is mostly about slowing before the surface deteriorates and keeping tyres in good condition.",
        trap:
          "'Steer the opposite way' sounds like the corrective move and points the front wheels away from where the car is actually going, which deepens the skid.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Steering Out of a Skid",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_24",
        topic: "sharing",
        question:
          "You are following a large truck and want to overtake it on a two-lane road. What is the best practice?",
        choices: [
          "Move up close behind first so the pass is shorter",
          "Pass on the right where the truck leaves more room",
          "Overtake without signalling to avoid confusing the driver",
          "Check ahead and behind, signal, and let the driver know you are passing, especially at night",
        ],
        correctIndex: 3,
        explanation:
          "Check front and rear, mirrors and blind spots, signal, and flash your headlights so the driver knows you are coming - particularly after dark, when they may not have seen you at all.",
        context:
          "Allow three to five extra seconds compared with passing a car on level ground, and expect the truck to gain speed on a downgrade. Return only once you can see the whole front of it in your mirror; if the truck flashes its lights, that is the signal it is clear. Never pass on the right of a truck that might turn right, and never cut into the space in front of one.",
        trap:
          "'Move up close behind first' puts you deep in the truck's rear blind spot and removes your own view of the road ahead, which is exactly what you need for the pass.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Share the Road with Trucks",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_25",
        topic: "rules",
        question:
          "Which statement about handheld device use in a Texas school zone is correct?",
        choices: [
          "Where signs are posted, using a handheld wireless device in the zone is prohibited",
          "Handheld use is always permitted below 20 mph",
          "The restriction applies only while children are visible",
          "There is no school zone restriction, only the statewide texting ban",
        ],
        correctIndex: 0,
        explanation:
          "Where the sign is posted, handheld device use is prohibited inside the school zone. It sits on top of the statewide ban on reading, writing and sending messages while driving.",
        context:
          "The reduced school zone speed applies while the beacon flashes or during the posted hours, and the device restriction is signed separately. Drivers under 18 face a stricter rule everywhere: no wireless device at all, hands-free included, except in an emergency. Every driver may use a phone to contact emergency services.",
        trap:
          "'Only the statewide texting ban' misses the school zone layer, which prohibits handheld use for calls too, not just messaging.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_26",
        topic: "rightOfWay",
        question:
          "A police car with lights and siren is approaching from behind on a road with a solid line of parked cars along the kerb. You cannot reach the edge. What should you do?",
        choices: [
          "Change lanes to the left and maintain speed",
          "Slow down and leave a clear path for the emergency vehicle",
          "Stop immediately in your lane and wait",
          "Speed up to reach the next gap in the parked cars",
        ],
        correctIndex: 1,
        explanation:
          "Where you cannot pull to the right edge, the requirement becomes slowing down and leaving a clear path. Doing something predictable matters more than doing the textbook manoeuvre.",
        context:
          "The default is to pull to the right edge and stop when traffic allows. Afterwards, do not follow within 500 feet of a fire truck answering an alarm or an ambulance running its lights, and do not park where you would block one. Inside a roundabout the rule reverses: clear the circle first, then pull over, because stopping in the circle blocks everything.",
        trap:
          "'Speed up to reach the next gap' is the instinct that turns a routine pass into a chase, and accelerating in front of an emergency vehicle is the opposite of yielding.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Yield Right-of-Way to Emergency Vehicles",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_27",
        topic: "signs",
        question:
          "A white sign shows an arrow indicating you should keep to one side of it, and it is placed ahead of a median. What should you do?",
        choices: [
          "Change lanes to the left regardless of the arrow",
          "Treat it as a warning only and choose either side",
          "Drive to the side the arrow indicates",
          "Stop before the median and wait for a gap",
        ],
        correctIndex: 2,
        explanation:
          "Keep-right markers ahead of islands and medians tell you which side to take. Taking the wrong one puts you into oncoming traffic or into the obstruction itself.",
        context:
          "The same guidance appears on work-zone barricades, where diagonal stripes slope down towards the side you should pass on. Fixed objects close to the traffic lane also carry object markers so they are visible at night, and some islands allow traffic to pass on either side, which is signed differently again. Read these early rather than at the last moment.",
        trap:
          "'Choose either side' treats a regulatory marker as advisory; it is black on white for a reason, and only one side is correct.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_28",
        topic: "emergencies",
        question:
          "You are in a crash where another driver appears injured. What are your obligations at the scene?",
        choices: [
          "Stop only if the other driver asks you to",
          "Move your vehicle away and telephone the details later",
          "Wait in your car until police arrive and say nothing",
          "Stop, give your details, show your licence if asked, and provide reasonable assistance",
        ],
        correctIndex: 3,
        explanation:
          "An injury crash requires you to stop at or as near as possible to the scene, provide your name, address, vehicle registration and insurer, show your licence on request, and give reasonable assistance including arranging medical transport if it is clearly needed.",
        context:
          "Notify law enforcement whenever there is injury or death, a vehicle that cannot be moved, a driver who leaves, or a driver you suspect is intoxicated. When helping, avoid moving an injured person unless it is truly necessary, control serious bleeding with pressure, and keep them comfortable until skilled help arrives. Failing to stop after an injury crash is a felony.",
        trap:
          "'Only if the other driver asks' makes a criminal duty conditional on someone else's request, and leaving the scene is the offence regardless of what anyone asks for.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Motor Vehicle Crashes",
        sourceUrl: DL7,
      },
      {
        id: "tx_s6_29",
        topic: "licensing",
        question:
          "What score must you achieve to pass the Texas knowledge exam?",
        choices: [
          "70 percent or better",
          "60 percent or better",
          "80 percent or better",
          "90 percent or better",
        ],
        correctIndex: 0,
        explanation:
          "Seventy percent. On a 30-question Class C exam that means 21 correct answers, with a maximum of nine wrong.",
        context:
          "The knowledge exam is one of three parts, alongside a vision test and a driving exam, and all applicants under 25 must complete an approved driver education course - which can exempt them from taking the Class C knowledge exam at the office. On the driving exam, more than 30 points deducted is a fail, as is violating the law, refusing instructions, driving dangerously or having a crash. Fail the knowledge or driving exam and your application is held for 90 days, after which a new application and fee are needed.",
        trap:
          "80 percent is a common pass mark elsewhere and would turn a comfortable Texas pass into a fail if you were budgeting your revision against it.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Examinations",
        sourceUrl: "https://www.dps.texas.gov/section/driver-license/apply-texas-driver-license",
      },
      {
        id: "tx_s6_30",
        topic: "speed",
        question:
          "Traffic on a 65 mph highway has slowed to about 45 mph because of heavy rain. What is the correct approach?",
        choices: [
          "Use the left lane and keep pace with the fastest vehicles",
          "Travel at a speed suited to the conditions, near the flow of traffic",
          "Maintain 65 mph, since that is the posted limit",
          "Drop to 25 mph regardless of the traffic around you",
        ],
        correctIndex: 1,
        explanation:
          "The posted limit is the maximum for good conditions, and rain lowers what is reasonable. Matching the general flow while staying within the limit is both lawful and safer than being much faster or much slower than everyone else.",
        context:
          "Two things bind at once: the posted or statutory maximum, and the requirement to drive at a speed that is reasonable and prudent for the actual conditions. Rain also calls for a longer following gap - at least four seconds and more in poor visibility - and low beam headlights, since high beams reflect off airborne water. A large speed difference in either direction is what causes crashes on a wet highway.",
        trap:
          "'Drop to 25 mph regardless' is over-correction, and a vehicle travelling 20 mph slower than everything around it on a highway is its own hazard.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed and Speed Limits",
        sourceUrl: DL7,
      },
    ],
  },
];
