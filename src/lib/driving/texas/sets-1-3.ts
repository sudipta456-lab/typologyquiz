import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Texas Driver Handbook (DL-7),
// revised January 2026, published by the Texas Department of Public Safety.
// Questions are original. Explanations, context notes and trap notes are
// written from scratch - the deep link is there so the learner reads DPS's
// own authoritative wording on the government's site.
const DL7 = "https://www.dps.texas.gov/internetforms/forms/dl-7.pdf";

export const texasSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Texas Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive: what the shapes and colours mean, who goes first, and the numbers Texas expects you to know cold.",
    questions: [
      {
        id: "tx_s1_01",
        topic: "signs",
        question:
          "One sign shape in Texas is reserved for a single message and nothing else. A driver seeing an eight-sided sign should do what?",
        choices: [
          "Come to a complete stop",
          "Slow down and look for a hazard",
          "Yield to traffic already on the road",
          "Watch for children crossing",
        ],
        correctIndex: 0,
        explanation:
          "The octagon is used for stop signs only, which is why it is recognisable even from behind or when snow or dirt hides the lettering. Nothing else in the sign system uses eight sides.",
        context:
          "Texas signs carry meaning in their shape as well as their words, so you can start reacting before you can read them. Octagon means stop, an equilateral triangle pointing down means yield, a diamond warns of a hazard, a pentagon marks schools, and a round sign is the advance warning for a railway crossing. Learning the shape set is worth more marks than memorising individual signs.",
        trap:
          "'Yield to traffic already on the road' describes the triangle, not the octagon - the two get mixed up because both involve giving way, but only one requires a full stop.",
        excerptKey: "sign-shape-octagon-stop",
        sourceLabel: "Texas Driver Handbook (DL-7) - Signals, Signs, and Markers",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_02",
        topic: "rules",
        question:
          "A traffic light ahead of you is showing a steady red. What does Texas require?",
        choices: [
          "Slow to a crawl and continue if nothing is coming",
          "Stop only when another vehicle is approaching",
          "Speed up so you clear the intersection quickly",
          "Stop before the crosswalk or the intersection",
        ],
        correctIndex: 3,
        explanation:
          "Steady red means a full stop, and the stopping point is before the crosswalk - not in it and not past it. Once stopped, a right turn is allowed unless a sign forbids it, but the stop comes first.",
        context:
          "Texas signal colours run steady red (stop), steady yellow (stop if you safely can, otherwise clear the intersection), and steady green (go when it is safe). Flashing versions change the meaning: flashing red behaves like a stop sign, flashing yellow means slow down and stay alert. A police officer directing traffic outranks every signal, even when the instruction contradicts the light.",
        trap:
          "'Slow to a crawl and continue' is the rolling stop that gets people ticketed - Texas treats slowing as failing to stop, no matter how empty the intersection looks.",
        excerptKey: "signal-steady-red",
        sourceLabel: "Texas Driver Handbook (DL-7) - Traffic Signals",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_03",
        topic: "speed",
        question:
          "You are driving on a city street inside an urban district and no speed limit sign is posted anywhere. What speed does Texas law assume?",
        choices: [
          "20 mph",
          "30 mph",
          "35 mph",
          "45 mph",
        ],
        correctIndex: 1,
        explanation:
          "Where a city street has no posted sign, Texas treats 30 mph as the lawful limit. Cities can post something different after a traffic study, but absent a sign, 30 is the number you are held to.",
        context:
          "Texas sets default limits for road types so that an unposted road is never a free-for-all: 30 mph on urban district streets, 15 mph in an alley, 70 mph on state- or US-numbered highways outside an urban district, and 60 mph on rural roads that carry no state or US number. Local governments and the Transportation Commission can raise or lower any of these, so a posted sign always wins over the default.",
        trap:
          "35 mph feels right because so many Texas city arterials are posted at 35 - but that is a posted limit, not the statutory default.",
        excerptKey: "speed-prima-facie-urban-alley",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed and Speed Limits",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_04",
        topic: "rightOfWay",
        question:
          "On a two-lane street a school bus ahead of you switches on its alternately flashing red lights and stops. What must you do?",
        choices: [
          "Stop and stay stopped until the lights go off or the bus moves",
          "Slow to 20 mph and pass on the left when the way is clear",
          "Stop only if you can see children on the roadway",
          "Sound your horn and continue past at reduced speed",
        ],
        correctIndex: 0,
        explanation:
          "Flashing red lights on a school bus mean children are getting on or off, and traffic in both directions on that roadway must stop. You may go only once the lights stop flashing, the bus starts moving, or the driver waves you through.",
        context:
          "The school bus rule protects children crossing in front of or behind the bus, where the driver cannot see them and you cannot either. Stopping applies to traffic approaching from either direction on the same roadway. The narrow exceptions are a bus stopped on a different roadway altogether, or a loading zone on a controlled-access highway where pedestrians are not allowed to cross. Penalties start in the hundreds of dollars and climb fast for repeat offences.",
        trap:
          "'Only if you can see children' inverts the rule - the whole point is that the child you cannot see is the one at risk.",
        excerptKey: "school-bus-flashing-red-stop",
        sourceLabel: "Texas Driver Handbook (DL-7) - Right-of-Way",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_05",
        topic: "safety",
        question:
          "Four adults are riding in a car fitted with belts in every seat. Who is required to buckle up?",
        choices: [
          "Anyone under 21 years of age",
          "Only the driver, who is legally responsible",
          "Everyone in the vehicle, front seats and back",
          "The driver and front-seat passenger only",
        ],
        correctIndex: 2,
        explanation:
          "Texas requires every occupant of a passenger vehicle to wear a belt when the seat has one, regardless of age or where they are sitting. Rear passengers are not exempt.",
        context:
          "The belt rule covers cars, pickups, SUVs and trucks alike. Anyone 15 or older can be ticketed personally for riding unbelted, while the driver is fined for unbelted passengers under 17. Children under 8 need an approved child seat unless they have already reached 4 feet 9 inches in height. There is no general exemption for short trips or back seats.",
        trap:
          "'Front seats only' is the old rule from other eras and other states; an unbelted rear passenger is still an offence in Texas, and in a crash they become a projectile.",
        excerptKey: "safety-belts-all-occupants",
        sourceLabel: "Texas Driver Handbook (DL-7) - Additional Safety Tips",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_06",
        topic: "signs",
        question:
          "Which sign shape is used for one message only - yield?",
        choices: [
          "A diamond standing on one corner",
          "A five-sided pentagon",
          "A narrow pennant shape",
          "A triangle with the point facing down",
        ],
        correctIndex: 3,
        explanation:
          "The downward-pointing equilateral triangle is reserved for yield signs. A diamond warns of hazards, a pentagon marks school areas, and a pennant warns that a no-passing zone is starting.",
        context:
          "Yield means slow down, be ready to stop, and let the other traffic go - you only have to come to a full halt if that is what it takes to give way safely. It differs from a stop sign, which requires the halt every time regardless of whether anything is coming. Yield signs are also what control entry to Texas roundabouts.",
        trap:
          "The diamond is the popular wrong answer because it is the other three-or-four-sided yellow shape, but diamonds warn, they never assign right of way.",
        excerptKey: "sign-shape-yield-triangle",
        sourceLabel: "Texas Driver Handbook (DL-7) - Signs by Shape",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_07",
        topic: "impairment",
        question:
          "A driver aged 21 or older is considered legally intoxicated in Texas at what blood alcohol concentration?",
        choices: [
          "0.02 or more",
          "0.05 or more",
          "0.08 or more",
          "0.10 or more",
        ],
        correctIndex: 2,
        explanation:
          "The adult threshold in Texas is 0.08. Reaching that figure is intoxication as a matter of law, whether or not the driver feels or looks affected.",
        context:
          "The 0.08 number is only one of two ways to be intoxicated in Texas. The other is losing the normal use of your mental or physical faculties because of alcohol or any drug - and that can happen well below 0.08, which is why a driver who blows under the limit can still be charged. Anyone under 21 is held to a separate zero-tolerance standard where any detectable alcohol at all is an offence.",
        trap:
          "0.10 is the figure the United States used decades ago and it still circulates; Texas has not used it in a long time.",
        excerptKey: "bac-008-adults",
        sourceLabel: "Texas Driver Handbook (DL-7) - Alcohol and Drug Impact",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_08",
        topic: "rules",
        question:
          "Before making a turn or coming to a stop, how far in advance does Texas expect you to be signalling?",
        choices: [
          "At least 100 feet",
          "At least 200 feet",
          "At least three seconds",
          "At least 50 feet",
        ],
        correctIndex: 0,
        explanation:
          "Texas sets the signalling distance at a minimum of 100 feet of continuous signal. That gives drivers behind you time to read your intention and adjust before you slow down.",
        context:
          "Signalling is required for more than turns: lane changes, pulling out of a parallel parking space, slowing or stopping, entering or leaving a highway, and pulling over all call for a signal. The 100-foot minimum is a floor, not a target - at highway speed you should start much earlier. Cancel the signal afterwards, because a signal you forgot about still tells other drivers you are about to turn.",
        trap:
          "'Three seconds' sounds sensible and is the rule some other places use, but Texas states the requirement as a distance, not a time.",
        excerptKey: "signal-100-feet",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Signaling, Passing, and Turning",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_09",
        topic: "signs",
        question:
          "A yellow sign shaped like a diamond is telling you what?",
        choices: [
          "You are approaching a recreation area",
          "Services such as fuel and food are nearby",
          "A hazard or changed condition is ahead",
          "A law is being enforced at this point",
        ],
        correctIndex: 2,
        explanation:
          "Yellow diamonds are the warning family: a curve, a dip, a narrow bridge, cross traffic, animals. They tell you what to look out for rather than what the law demands.",
        context:
          "Colour carries meaning too. Yellow warns, orange means construction or maintenance, black and white means regulation, green shows permitted movements and direction, blue points to motorist services, and brown marks parks and scenic routes. Ignoring a warning sign is not just unwise - failing to slow for the condition it flags can itself be a violation.",
        trap:
          "'A law is being enforced' describes black-and-white regulatory signs; yellow warns you about the road, white and black tells you what you must do.",
        excerptKey: "sign-shape-diamond",
        sourceLabel: "Texas Driver Handbook (DL-7) - Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_10",
        topic: "rightOfWay",
        question:
          "You have a steady green ball and want to turn left. A car is coming straight at you from the opposite direction. Who goes first?",
        choices: [
          "You do, because a green light gives you the intersection",
          "Whichever driver reached the intersection first",
          "You do, provided you signal before turning",
          "The oncoming car - you wait for a safe gap",
        ],
        correctIndex: 3,
        explanation:
          "A green ball permits the turn but grants no protection. Traffic coming straight through from the opposite direction keeps the right of way, so you hold until there is a genuine gap.",
        context:
          "Only a green arrow gives a protected left, because the arrow means oncoming traffic is being held by a red. On a green ball, or on a flashing yellow arrow, the turn is permitted but you are responsible for yielding to oncoming vehicles and to pedestrians already in the crosswalk. This single scenario produces a large share of intersection crashes, particularly with motorcycles, whose speed drivers routinely misjudge.",
        trap:
          "'Whichever driver arrived first' is a first-come rule borrowed from four-way stops; arrival order has nothing to do with a signalised left turn.",
        excerptKey: "turning-left-yield-oncoming",
        sourceLabel: "Texas Driver Handbook (DL-7) - Traffic Signals",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_11",
        topic: "sharing",
        question:
          "In Texas, what is the legal status of a person riding a bicycle on a public road?",
        choices: [
          "A vehicle operator with the same rights and duties as a driver",
          "A pedestrian who happens to be using wheels",
          "A road user allowed only on the shoulder",
          "A vehicle operator exempt from stop signs and signals",
        ],
        correctIndex: 0,
        explanation:
          "Texas classes a bicycle as a vehicle. The rider gets the same rights as any driver and carries the same duties, which is why a cyclist can be ticketed for running a red light and the conviction lands on their driving record.",
        context:
          "Because a bicycle is a vehicle, ordinary right-of-way rules apply between cars and bikes without modification. Cyclists must ride with traffic, obey signs and signals, and signal turns. They are not confined to the right edge in every situation - passing, preparing to turn left, avoiding hazards, or riding in a lane too narrow to share all allow a cyclist to take the full lane.",
        trap:
          "'Allowed only on the shoulder' is a common driver assumption, but Texas gives cyclists the travel lane and only asks them to keep right when the lane is genuinely wide enough to share.",
        excerptKey: "bicycle-is-a-vehicle",
        sourceLabel: "Texas Driver Handbook (DL-7) - Bicycle Laws and Safety",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_12",
        topic: "safety",
        question:
          "Conditions are good and you are travelling at 30 mph or less. What is the minimum following gap Texas suggests?",
        choices: [
          "Six seconds",
          "One second",
          "Two seconds",
          "Four seconds",
        ],
        correctIndex: 2,
        explanation:
          "Two seconds is the floor for speeds up to 30 mph in good conditions. Watch the vehicle ahead pass a fixed object and count - if you reach it in under two seconds, you are too close.",
        context:
          "Above 30 mph the recommended gap doubles to four seconds, and poor weather, heavy traffic or limited visibility all call for more still. A new driver is better off using four seconds everywhere while their reactions are unpractised. Following distance matters more than braking skill, because the average driver burns about a second and a half just recognising the problem and getting on the brake.",
        trap:
          "'One second' is roughly what most traffic actually leaves, which makes it feel normal - but it is under half the recommended gap and leaves nothing for reaction time.",
        excerptKey: "following-distance-2-and-4-seconds",
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed and Speed Limits",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_13",
        topic: "signs",
        question:
          "An orange sign or orange barrel on a Texas road is telling you what?",
        choices: [
          "A scenic or recreational area is ahead",
          "The lane is reserved for high-occupancy vehicles",
          "A permanent hazard exists at this location",
          "You are in or approaching construction or maintenance work",
        ],
        correctIndex: 3,
        explanation:
          "Orange is the work-zone colour. Signs, cones, drums, barricades and arrow panels all use it so the change from normal road layout is obvious at a glance.",
        context:
          "Work zones change the rules around you. Lanes shift, workers stand close to traffic, and equipment pulls out unexpectedly. A flag person's instruction has to be obeyed exactly as if it were a signal. Traffic fines double in a construction or maintenance zone whenever workers are present, and driving around a barricade is itself an offence.",
        trap:
          "Brown is the colour for parks and scenic routes; orange is temporary and always means something about the road has changed.",
        excerptKey: "work-zone-orange-devices",
        sourceLabel: "Texas Driver Handbook (DL-7) - Construction and Maintenance Devices",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_14",
        topic: "rules",
        question:
          "A traffic light at an intersection ahead is flashing red. What is required of you?",
        choices: [
          "Stop completely, then go when it is safe",
          "Slow down and proceed without stopping",
          "Stop and wait for the light to turn green",
          "Treat it as a signal failure and yield to the right only",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red works exactly like a stop sign: full stop, then proceed when the way is clear. It will not change to green, so waiting is pointless.",
        context:
          "Flashing signals often pair a flashing red on the minor road with a flashing yellow on the main road, meaning cross traffic may not be stopping at all. So after your stop, you still have to find a gap rather than assuming the other direction is holding. A flashing yellow on its own simply means slow down and stay alert.",
        trap:
          "'Wait for green' traps people who assume every signal cycles - a flashing red stays flashing, and sitting there creates a rear-end risk.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Texas Driver Handbook (DL-7) - Traffic Signals",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_15",
        topic: "parking",
        question:
          "How close to a fire hydrant may you legally leave a parked car in Texas?",
        choices: [
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 25 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet is the clearance. It exists so a crew can run hose to the hydrant from either side without a parked car blocking the connection.",
        context:
          "Texas parking clearances come as a set worth memorising together: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway, 30 feet from a stop sign, yield sign or flashing signal, and 50 feet from the nearest rail of a railway crossing. On a two-way street your right wheels must also end up within 18 inches of the curb.",
        trap:
          "10 feet feels close enough and is the figure some other states use, but Texas asks for 15 - and 'nearly legal' is still a citation.",
        excerptKey: "no-parking-distances",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Parking, Stopping, or Standing",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_16",
        topic: "rightOfWay",
        question:
          "Two cars reach a small residential intersection at the same moment. There are no signs, no signals, both roads are paved, and both have one lane each way. Who yields?",
        choices: [
          "The driver on the narrower of the two streets",
          "The driver who has the other car on their right",
          "The driver who has the other car on their left",
          "The driver going straight, who yields to the turning car",
        ],
        correctIndex: 1,
        explanation:
          "With nothing else to separate them, the car on the right has the right of way, so the driver with a car approaching on their right is the one who waits.",
        context:
          "The yield-to-the-right rule is the tie-breaker of last resort. Texas applies a ladder of tests first: a divided road or a road of three or more lanes beats a one- or two-lane road, a paved road beats an unpaved one, and traffic on a through street beats traffic on a street that ends at the intersection. Only when none of those apply does the right-hand rule decide it. And having the right of way never means taking it - confirm the other driver is actually yielding.",
        trap:
          "'Yield to the left' is the reversed version people produce under pressure; it is exactly wrong, and both drivers believing it is how these collisions happen.",
        excerptKey: "uncontrolled-intersection-yield-right",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Right-of-Way at Intersections",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_17",
        topic: "speed",
        question:
          "What speed does Texas law set for driving in an alley?",
        choices: [
          "10 mph",
          "15 mph",
          "20 mph",
          "25 mph",
        ],
        correctIndex: 1,
        explanation:
          "Alleys carry a 15 mph limit. Sight lines are terrible, pedestrians step out from behind fences and bins, and there is rarely room to swerve.",
        context:
          "Alleys sit alongside the other statutory defaults: 30 mph on urban streets, 15 mph in an alley, and 15 mph on beaches and county roads next to a public beach where the county has adopted that limit. All of these apply only when nothing different is posted, and all of them are ceilings - the underlying requirement is always to drive at a speed that is reasonable for the conditions in front of you.",
        trap:
          "25 mph is the figure many people carry over from residential street limits elsewhere; the Texas alley number is lower for a reason.",
        excerptKey: "speed-prima-facie-urban-alley",
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed Limits",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_18",
        topic: "signs",
        question:
          "A five-sided sign at the roadside is warning you about what?",
        choices: [
          "A no-passing zone starting",
          "A railway line ahead",
          "A school area or school crossing",
          "A hospital entrance",
        ],
        correctIndex: 2,
        explanation:
          "The pentagon is used for school advance warning and school crossing signs. It is a shape you meet nowhere else, so it flags children even when read at a glance.",
        context:
          "School zones layer several rules at once. The reduced limit on the sign applies only while the yellow beacon is flashing or during the posted hours, and where signs say so, using a handheld wireless device inside the zone is prohibited. Children behave unpredictably near schools, so the expectation is to cover the brake, not just to slow to the number.",
        trap:
          "The pennant also has an unusual shape and also warns, but it marks the start of a no-passing zone and never appears near a school crossing.",
        excerptKey: "sign-shape-pentagon-school",
        sourceLabel: "Texas Driver Handbook (DL-7) - Signs by Shape",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_19",
        topic: "safety",
        question:
          "When does Texas require your headlights to be switched on in the evening?",
        choices: [
          "From sunset exactly",
          "From one hour after sunset",
          "Only once street lighting comes on",
          "From 30 minutes after sunset",
        ],
        correctIndex: 3,
        explanation:
          "Lights go on 30 minutes after sunset and stay on until 30 minutes before sunrise. Twilight is when an unlit car is hardest to pick out against a grey road.",
        context:
          "There is a second trigger that has nothing to do with the clock: whenever people or vehicles cannot be seen clearly at 1,000 feet, headlights are required - so rain, fog, dust and heavy overcast all pull the requirement forward. Low beams are the right choice within 500 feet of an oncoming vehicle, within 300 feet behind another car, on lit roads, and in fog or heavy rain, where high beams simply bounce back at you.",
        trap:
          "'Once street lighting comes on' hands the decision to a timer somewhere; street lights and the legal requirement are unrelated.",
        excerptKey: "headlights-30-minutes-1000-feet",
        sourceLabel: "Texas Driver Handbook (DL-7) - Headlights",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_20",
        topic: "rules",
        question:
          "On a two-lane road the centre line is a solid yellow line on your side and a broken yellow line on the other. What does that mean for you?",
        choices: [
          "You may not pass; oncoming traffic may",
          "Either direction may pass with care",
          "Neither direction may pass at any time",
          "You may pass but only if the road is straight",
        ],
        correctIndex: 0,
        explanation:
          "The line nearest your lane is the one that governs you. Solid on your side means no passing, while the broken line on the far side lets oncoming drivers pass when it is safe.",
        context:
          "Yellow lines separate opposing traffic; white lines separate lanes moving the same way. Broken means crossing is allowed when safe, solid means it is not. Double solid yellow forbids passing from both directions, and double solid white lines may not be crossed at all. Even a broken line does not authorise a pass on a hill or curve, within 100 feet of an intersection or railway crossing, or near a bridge or tunnel.",
        trap:
          "'Either direction may pass' reads the pair of lines as a single instruction; the rule is one line per direction, and only yours applies to you.",
        excerptKey: "solid-and-broken-yellow-lines",
        sourceLabel: "Texas Driver Handbook (DL-7) - Pavement Markings",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_21",
        topic: "impairment",
        question:
          "A 19-year-old is pulled over and a test finds a small amount of alcohol - well under 0.08. What is the position under Texas law?",
        choices: [
          "An offence only if the driver has a previous conviction",
          "An offence has been committed, because any detectable amount is prohibited under 21",
          "No offence, since the reading is below the legal limit",
          "No offence unless the driver appears visibly impaired",
        ],
        correctIndex: 1,
        explanation:
          "Texas runs zero tolerance for anyone under 21. Any detectable alcohol while driving in a public place is Driving Under the Influence by a Minor - the 0.08 threshold never comes into it.",
        context:
          "The under-21 rules stack. A minor may not buy, attempt to buy, possess or consume alcohol at all, and those non-driving offences carry licence suspensions of their own. Refusing to give a breath or blood specimen brings its own suspension, and providing one that shows any alcohol brings a suspension too, starting at 60 days. If the reading is 0.08 or higher, the minor faces the full adult DWI charge on top.",
        trap:
          "'Below the legal limit' assumes one limit applies to everyone; the 0.08 figure is the adult standard, and for a minor the limit is zero.",
        excerptKey: "zero-tolerance-minors",
        sourceLabel: "Texas Driver Handbook (DL-7) - Texas Tough Alcohol-Related Laws for Minors",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_22",
        topic: "emergencies",
        question:
          "An ambulance behind you has its siren going and its lights on. Traffic conditions let you move. What should you do?",
        choices: [
          "Move to the left lane and keep driving",
          "Stop where you are, in the middle of your lane",
          "Pull over to the right edge of the road and stop",
          "Speed up so you stay ahead of it",
        ],
        correctIndex: 2,
        explanation:
          "Pulling to the right edge and stopping clears a predictable path, since emergency drivers are trained to expect traffic to open up on the right.",
        context:
          "If traffic will not let you reach the right edge, slow down and leave a clear path rather than stopping in the way. Once the emergency vehicle has passed, do not tail it: you may not follow within 500 feet of a fire truck answering an alarm or an ambulance running its lights, and you must not park where you would block one arriving or leaving. A roundabout is the exception to pulling over - clear the circle first, then pull over.",
        trap:
          "'Stop where you are' feels obedient but leaves the lane blocked; the emergency vehicle needs the space beside you, not a stationary obstacle in front of it.",
        excerptKey: "yield-to-emergency-vehicles",
        sourceLabel: "Texas Driver Handbook (DL-7) - Yield Right-of-Way to Emergency Vehicles",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_23",
        topic: "signs",
        question:
          "A blue sign beside a Texas highway is there to tell you about what?",
        choices: [
          "A state park or scenic route",
          "Lane closures ahead",
          "A regulation you must obey",
          "Services available to drivers, such as fuel or hospitals",
        ],
        correctIndex: 3,
        explanation:
          "Blue is the motorist-services colour: fuel, food, lodging, hospitals, rest areas. It is guidance you can act on or ignore, not an instruction.",
        context:
          "Guide signing splits by colour. Blue covers services, green covers destinations, distances and permitted movements, and brown covers parks, historic sites and scenic areas. None of these three impose a legal duty. The colours that do are black and white for regulation, yellow for warning, red for stop or prohibition, and orange for temporary work-zone conditions.",
        trap:
          "Brown is the one people swap in for parks and recreation; blue is strictly about services for the traveller.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Standard Colors",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_24",
        topic: "rules",
        question:
          "A wide centre lane runs down the middle of a busy road, marked with yellow lines and left-turn arrows. How may you use it?",
        choices: [
          "Only to slow for and complete a left turn",
          "As a passing lane when the outer lanes are slow",
          "As a through lane during heavy traffic",
          "For left turns and for merging into faster traffic",
        ],
        correctIndex: 0,
        explanation:
          "The two-way left-turn lane is shared with drivers turning left from the opposite direction, so it is only ever for turning. Travelling in it puts you head-on with someone doing the same thing.",
        context:
          "Enter the centre lane only at the point where you can slow or stop and make the turn safely - not several blocks early. It is never a passing lane and never a through lane. Drivers pulling out of a driveway may also use it briefly to wait for a gap, which is another reason not to treat it as travel space.",
        trap:
          "'Through lane in heavy traffic' is what tempts drivers when the outside lanes back up, and it is the exact behaviour that produces head-on crashes in that lane.",
        excerptKey: "center-left-turn-lane",
        sourceLabel: "Texas Driver Handbook (DL-7) - Pavement Markings",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_25",
        topic: "licensing",
        question:
          "What is the youngest age at which a Texas learner licence can be issued, assuming the classroom driver education requirement is met?",
        choices: [
          "14",
          "15",
          "16",
          "17",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen is the minimum for a learner licence, once the classroom portion of driver education, the vision test and the knowledge test are done.",
        context:
          "The learner licence is Phase One of the graduated programme and has to be held at least six months before a provisional licence becomes possible at 16. While on it, a licensed adult of at least 21 with a year of driving experience must sit in the front passenger seat, awake and paying attention. A 15-year-old can only drive independently under a hardship licence, which requires a court or DPS finding of genuine need.",
        trap:
          "16 is the age people associate with driving in Texas, but that is when a provisional licence becomes available - the learner licence comes a year earlier.",
        excerptKey: "learner-license-requirements",
        sourceLabel: "Texas Driver Handbook (DL-7) - Your License to Drive",
        sourceUrl: "https://www.dps.texas.gov/section/driver-license/texas-learners-license-teen",
      },
      {
        id: "tx_s1_26",
        topic: "safety",
        question:
          "A child passenger must ride in an approved child safety seat in Texas until which point?",
        choices: [
          "Until age 12, unless riding in the back seat",
          "Until age 8, unless the child is already taller than 4 feet 9 inches",
          "Until age 6, with no height exception",
          "Until age 8, with no height exception",
        ],
        correctIndex: 1,
        explanation:
          "The requirement runs to the eighth birthday, but a child who has reached 4 feet 9 inches may use the adult belt earlier. Height matters because a belt routed across a small child's neck and abdomen can cause its own injuries.",
        context:
          "Once out of a child seat, the child still has to wear a belt - the driver is fined for any unbelted passenger under 17. Separately, it is an offence to carry anyone under 18 in the open bed of a pickup or flatbed trailer, with narrow exceptions for things like parades, emergencies and beaches.",
        trap:
          "'Until age 8 with no exception' catches people who remember the age but not the height release - a tall seven-year-old is legally allowed the adult belt.",
        excerptKey: "child-passenger-safety-seat",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Safety Belts",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_27",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shop's private driveway onto a public street, crossing a sidewalk on the way. What does Texas require?",
        choices: [
          "Merge with traffic without stopping if the street is clear",
          "Yield only when a vehicle is within one block of you",
          "Stop before the sidewalk and yield to pedestrians and traffic",
          "Yield to vehicles only, since pedestrians must watch for cars",
        ],
        correctIndex: 2,
        explanation:
          "Coming out of a driveway, alley or building you stop before the sidewalk and give way to everyone already using the sidewalk and the street. You are joining their space, so nothing is owed to you.",
        context:
          "Emerging traffic yields as a general principle in Texas - the same logic covers frontage road drivers giving way to vehicles entering or leaving the freeway, and vehicles on a street that ends at a T-intersection giving way to the through street. Stopping before the sidewalk rather than at the road edge matters, because that is where the person on foot is.",
        trap:
          "'Yield to vehicles only' quietly drops the pedestrian, who is the road user most likely to be hidden by a wall, hedge or parked car at a driveway.",
        excerptKey: "yield-from-private-drive",
        sourceLabel: "Texas Driver Handbook (DL-7) - Private Roads and Driveways",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_28",
        topic: "signals",
        question:
          "At an intersection you see a green arrow lit at the same time as a red ball. What are you allowed to do?",
        choices: [
          "Go in any direction, since a green arrow overrides the red",
          "Wait, because a red ball always means stop",
          "Turn in the arrow's direction only after coming to a full stop",
          "Move carefully in the direction of the arrow, yielding to anyone already in the way",
        ],
        correctIndex: 3,
        explanation:
          "The arrow permits movement in that one direction while the red holds every other movement. You still give way to vehicles and pedestrians already lawfully in the intersection.",
        context:
          "Texas uses several left-turn displays that mean different things. A green arrow is protected - oncoming traffic is stopped. A flashing yellow arrow permits the turn but leaves you to yield to oncoming vehicles. A green ball is the same deal as the flashing yellow arrow. Reading which one you have got is what keeps a permitted turn from becoming a head-on collision.",
        trap:
          "'Go in any direction' treats the arrow as a general green; everything outside the arrow's direction is still being held by the red.",
        excerptKey: "signal-green-arrow-with-red",
        sourceLabel: "Texas Driver Handbook (DL-7) - Traffic Signals",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_29",
        topic: "sharing",
        question:
          "A motorcycle is riding on one side of the lane ahead of you and there looks to be room alongside. What should you do?",
        choices: [
          "Stay behind - the motorcycle is entitled to the whole lane",
          "Move up alongside, since the lane is wide enough for both",
          "Pass on the right where the rider has left space",
          "Sound your horn so the rider moves further over",
        ],
        correctIndex: 0,
        explanation:
          "A motorcycle gets a full lane width. Riders shift position within the lane to see and be seen and to dodge surface hazards, and the space they leave is working room, not an invitation.",
        context:
          "Motorcycles are hard to judge: the narrow profile makes them look further away and slower than they are, and they vanish easily into blind spots. The most common car-motorcycle crash is a driver turning left across an oncoming rider. Leave four to six seconds when following one, take a second look before turning at an intersection, and do not trust a flashing motorcycle signal, since many do not cancel themselves.",
        trap:
          "'The lane is wide enough for both' is exactly the reasoning that produces sideswipes; legal width is not the same as safe width for a rider who needs to swerve.",
        excerptKey: "motorcycle-entitled-to-full-lane",
        sourceLabel: "Texas Driver Handbook (DL-7) - Share the Road with Motorcycles",
        sourceUrl: DL7,
      },
      {
        id: "tx_s1_30",
        topic: "speed",
        question:
          "Heavy rain has cut visibility badly on a highway posted at 70 mph. What speed does Texas law expect?",
        choices: [
          "Any speed, as long as your hazard lights are on",
          "A reduced speed that suits the conditions, even though 70 is posted",
          "70 mph, because that is the legal limit for the road",
          "Exactly 55 mph, the standard wet-weather limit",
        ],
        correctIndex: 1,
        explanation:
          "A posted limit is a ceiling for good conditions, never a guarantee. Texas requires a speed that is reasonable and prudent for what is actually happening, so bad weather lowers the lawful speed below the sign.",
        context:
          "Two rules operate together. The posted or statutory maximum tells you the highest speed ever allowed on that road, and the basic speed rule requires you to go slower whenever conditions demand it - rain, fog, traffic, a curve, a crossing, or anything else that raises the risk. Exceeding a posted limit is treated as evidence the speed was unreasonable, but you can also be cited for driving too fast for conditions while sitting below the sign.",
        trap:
          "'55 mph, the standard wet-weather limit' invents a rule that does not exist in Texas; there is no automatic rain limit, just the duty to slow to what is safe.",
        excerptKey: "basic-speed-law",
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed and Speed Limits",
        sourceUrl: DL7,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Texas Rules",
    difficulty: "easy",
    description:
      "Distances, defaults and the everyday right-of-way calls - the material the real knowledge test leans on hardest.",
    questions: [
      {
        id: "tx_s2_01",
        topic: "signs",
        question:
          "Which sign shape is used only to give advance warning that a no-passing zone is beginning?",
        choices: [
          "A horizontal rectangle",
          "A long, narrow pennant",
          "A vertical rectangle",
          "A pentagon",
        ],
        correctIndex: 1,
        explanation:
          "The pennant shape is reserved for advance warning of a no-passing zone. Its odd tapering outline exists so it cannot be confused with anything else on the road.",
        context:
          "Two different signs deal with passing. The pennant is a warning that the restriction starts ahead, while a rectangular DO NOT PASS sign is the regulation itself. Alongside them, the pavement does the same job: a solid yellow line on your side of the centre means no passing there. Vertical rectangles are the general regulatory shape and horizontal rectangles are usually guide signs.",
        trap:
          "'Vertical rectangle' is tempting because DO NOT PASS signs are rectangular - but that is the regulation, not the advance warning the question asks about.",
        excerptKey: "sign-shape-pennant-no-passing",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Signs by Shape",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_02",
        topic: "rightOfWay",
        question:
          "A train is approaching and you must stop at a railway crossing. Where should your vehicle come to rest?",
        choices: [
          "Between 5 and 15 feet from the nearest rail",
          "At least 100 feet from the nearest rail",
          "Anywhere behind the crossbuck sign",
          "Between 15 and 50 feet from the nearest rail",
        ],
        correctIndex: 3,
        explanation:
          "The stopping window is 15 to 50 feet from the nearest rail. Closer than 15 feet and a passing train's overhang or debris can reach you; further than 50 and you cannot see down the track properly.",
        context:
          "You must stop when a signal is flashing, a gate is down, a flag person warns you, an official device tells you to, a train is within about 1,500 feet sounding its horn, or a train is simply visible and close. Stay stopped until it is genuinely safe - a second track may hide a second train. Trains cannot stop for you and always have the right of way, and you may not park within 50 feet of the nearest rail.",
        trap:
          "'Anywhere behind the crossbuck' ignores the numbers entirely; the crossbuck marks the crossing, it does not define a legal stopping distance.",
        excerptKey: "railroad-stop-15-to-50-feet",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Railroad Grade Crossings",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_03",
        topic: "rules",
        question:
          "At a steady red light, when does Texas allow a left turn after stopping (assuming no sign forbids it)?",
        choices: [
          "When you are turning from a one-way street onto another one-way street",
          "Whenever no traffic is approaching from any direction",
          "Never - left turns on red are prohibited outright",
          "When you are turning onto a two-way street from a one-way street",
        ],
        correctIndex: 0,
        explanation:
          "A left on red is permitted only where both the street you are leaving and the street you are entering are one-way. That geometry means the turn does not cross any lane of oncoming traffic.",
        context:
          "Turns on red always start with a complete stop, and they are always subject to a sign prohibiting them. A right on red is the common case; the left on red is the narrow one-way-to-one-way exception. In either case you give way to pedestrians and to anyone already lawfully in the intersection - the permission to turn is not right of way.",
        trap:
          "'Whenever nothing is coming' turns a specific geometric exception into a general licence, and it is wrong every time the street you are entering carries two-way traffic.",
        excerptKey: "red-light-left-turn-one-way",
        sourceLabel: "Texas Driver Handbook (DL-7) - Traffic Signals",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_04",
        topic: "speed",
        question:
          "You are on a US-numbered highway well outside any urban district and no speed limit sign has appeared. What limit applies to a passenger car?",
        choices: [
          "55 mph",
          "60 mph",
          "70 mph",
          "75 mph",
        ],
        correctIndex: 2,
        explanation:
          "State- and US-numbered highways outside an urban district carry a default of 70 mph for cars, which also covers farm-to-market and ranch-to-market roads.",
        context:
          "The rural defaults split on whether the highway carries a state or US number: 70 mph if it does, 60 mph if it does not. School buses run lower - 60 mph on a numbered highway if they have passed a commercial vehicle inspection, and 50 mph otherwise. Above all of this, the Transportation Commission and local authorities can post higher limits after a study, and some Texas limited-access highways are signed at 75, 80 or even 85 mph.",
        trap:
          "75 mph is a real Texas number, but only where it has been posted after an engineering study - it is never the default you assume from an unposted road.",
        excerptKey: "speed-prima-facie-numbered-highway",
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed Limits",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_05",
        topic: "safety",
        question:
          "Conditions are good and you are cruising above 30 mph. What following gap does Texas recommend?",
        choices: [
          "Three seconds",
          "Four seconds",
          "Five seconds",
          "Two seconds",
        ],
        correctIndex: 1,
        explanation:
          "Above 30 mph the recommendation doubles from two seconds to four. Faster travel means you cover far more ground in the second and a half it takes just to react.",
        context:
          "Four seconds is also the recommendation for less experienced drivers at any speed, and everyone should add more in rain, heavy traffic or poor visibility. The reason the gap has to grow with speed is that stopping distance climbs much faster than speed does - roughly 109 feet at 30 mph but over 300 feet at 60 mph, on dry pavement with good brakes and tyres.",
        trap:
          "'Two seconds' is right for 30 mph and below, which is why it gets carried into highway speeds where it leaves half the room you need.",
        excerptKey: "following-distance-2-and-4-seconds",
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed and Speed Limits",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_06",
        topic: "signs",
        question:
          "A brown sign on a Texas road is guiding you towards what?",
        choices: [
          "A hospital or rest stop",
          "A construction detour",
          "A high-occupancy vehicle lane",
          "A park, historic site or scenic area",
        ],
        correctIndex: 3,
        explanation:
          "Brown covers public recreation and scenic guidance - state parks, historic sites, wildlife areas. It carries no legal obligation.",
        context:
          "Guide colours are worth learning as a set because signs test them constantly: brown for recreation and scenery, blue for driver services, green for destinations and permitted movements. Contrast those with the colours that create duties - red, black-on-white, yellow and orange. A sign's colour tells you whether it is information or instruction before you have read a word of it.",
        trap:
          "'Hospital or rest stop' is blue territory; brown is about where you might want to go, not what you might need on the way.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Standard Colors",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_07",
        topic: "impairment",
        question:
          "A passenger is holding an opened bottle of beer while the car sits parked on a public street. Is that lawful in Texas?",
        choices: [
          "No - an open container in the passenger area is an offence whether the car is moving, stopped or parked",
          "Yes, as long as the engine is switched off",
          "Yes, as long as the driver has consumed nothing",
          "No, but only when the vehicle is actually being driven",
        ],
        correctIndex: 0,
        explanation:
          "Texas prohibits possessing an open container of alcohol in the passenger area of a vehicle on a public highway, and it makes no difference whether the vehicle is moving, stopped or parked.",
        context:
          "The offence attaches to the container's location, not the driver's sobriety, and carries a fine of up to $500. It also has teeth beyond the fine: if the driver is convicted of a first DWI and an open container was present, the minimum jail time rises. Sealed containers and the areas of the vehicle not accessible to occupants are what the law leaves alone.",
        trap:
          "'As long as the engine is off' is the most common misreading - stationary and switched off does not take the vehicle out of the rule.",
        excerptKey: "open-container",
        sourceLabel: "Texas Driver Handbook (DL-7) - Open Container",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_08",
        topic: "rules",
        question:
          "Two solid white lines run between the lanes ahead of you. What do they tell you?",
        choices: [
          "Traffic beyond them moves in the opposite direction",
          "Crossing them is prohibited",
          "Crossing is allowed with care",
          "The lane to your right is ending",
        ],
        correctIndex: 1,
        explanation:
          "Double solid white marks a boundary you may not cross. It usually protects a lane where a sudden merge would be dangerous, such as beside an exit or a managed lane.",
        context:
          "Read pavement markings as colour plus pattern. White separates lanes moving the same way, yellow separates opposing directions. Broken means you may cross when it is safe, solid means avoid crossing, and double solid means do not cross at all. Solid white also does the edge lines and shoulder markings, and drivers are told not to change lanes or turn across double white lines.",
        trap:
          "'Traffic beyond them moves the opposite way' confuses the colours - that would be a yellow line, and mistaking white for yellow at speed is how wrong-way entries happen.",
        excerptKey: "double-solid-white-lines",
        sourceLabel: "Texas Driver Handbook (DL-7) - Pavement Markings",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_09",
        topic: "rightOfWay",
        question:
          "You are on a quiet two-lane road that meets a four-lane divided road. There are no signs or signals at the junction. Who has the right of way?",
        choices: [
          "You do, if you arrive at the junction first",
          "Whichever driver is on the right",
          "Neither - both must stop before proceeding",
          "Traffic on the divided road - you yield",
        ],
        correctIndex: 3,
        explanation:
          "A single or two-lane road gives way to a divided road or one carrying three or more lanes. The bigger road is presumed to be the through route.",
        context:
          "Texas ranks intersections before falling back on the yield-to-the-right rule. Divided or multi-lane beats one or two lanes, paved beats unpaved, and a through street beats a street that terminates at the junction. Only where none of those distinctions exist does the car on the right win. The ranking matters because unsigned junctions of unequal roads are common on the edges of Texas towns.",
        trap:
          "'Whichever driver is on the right' is the rule people reach for automatically, but it only decides genuine ties between roads of equal standing.",
        excerptKey: "yield-single-lane-to-multilane",
        sourceLabel: "Texas Driver Handbook (DL-7) - Right-of-Way at Intersections",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_10",
        topic: "signs",
        question:
          "A round yellow sign with a large black X and two R letters means what?",
        choices: [
          "A railway crossing is a short distance ahead",
          "You are at the crossing itself",
          "Trains have priority at all crossings in this county",
          "The road ahead crosses a light rail line only",
        ],
        correctIndex: 0,
        explanation:
          "The round yellow sign is the advance warning: a crossing is coming up within a few hundred feet, so slow down and be ready to stop.",
        context:
          "Two different signs mark a railway. The round yellow one warns you in advance. The white X-shaped crossbuck stands at the crossing itself and shows how many tracks you are about to cross. A blue-and-white Emergency Notification System sign carries the crossing's identification number and a railway contact number for reporting a stalled car or a broken signal.",
        trap:
          "'You are at the crossing itself' swaps the two signs; the round sign is always the advance warning and the crossbuck is always at the rails.",
        excerptKey: "sign-shape-round-railroad",
        sourceLabel: "Texas Driver Handbook (DL-7) - Railroad Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_11",
        topic: "parking",
        question:
          "How far from a crosswalk at an intersection must you keep a parked or standing vehicle?",
        choices: [
          "10 feet",
          "15 feet",
          "20 feet",
          "30 feet",
        ],
        correctIndex: 2,
        explanation:
          "Twenty feet is the clearance. Parking closer hides pedestrians stepping off the kerb from turning drivers, which is precisely where they get hit.",
        context:
          "Keep the Texas clearances straight as a group: 15 feet from a fire hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway and 75 feet from it on the opposite side, 30 feet approaching a stop sign, yield sign or flashing signal, and 50 feet from the nearest rail of a crossing. Stopping momentarily to obey a sign or signal is not parking, so the distances do not bite there.",
        trap:
          "15 feet is the hydrant number, and mixing up the two distances is the single most common slip in this group.",
        excerptKey: "no-parking-distances",
        sourceLabel: "Texas Driver Handbook (DL-7) - Parking, Stopping, or Standing",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_12",
        topic: "safety",
        question:
          "You are driving at night on an unlit rural road with your high beams on. A car appears coming the other way. When must you dip to low beam?",
        choices: [
          "Only once you can read the other car's number plate",
          "Within 500 feet of the approaching vehicle",
          "Within 200 feet of the approaching vehicle",
          "Within 1,000 feet of the approaching vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Five hundred feet is the switching point for an oncoming vehicle. High beams at that range wash out the other driver's vision at exactly the moment you are closing on each other.",
        context:
          "There is a second, shorter figure for following: dip to low beam within 300 feet of the vehicle in front, because your high beams reflect straight off their mirrors. Low beams are also the right setting on lit roads and in fog, rain, sleet, snow or dust, where high beams bounce off the airborne water and reduce what you can see. If an oncoming driver leaves their high beams on, look towards the lower right edge of your lane rather than into the glare.",
        trap:
          "200 feet is the following-distance figure for a different rule; used for oncoming traffic it leaves the other driver blinded for the last several seconds of the approach.",
        excerptKey: "low-beam-headlights",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Headlights",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_13",
        topic: "rules",
        question:
          "Which of these is a place Texas forbids you from driving on the left side of the road to pass?",
        choices: [
          "Within 300 feet of a driveway",
          "Within 50 feet of a parked vehicle",
          "Within 100 feet of an intersection or a railway crossing",
          "Within 100 feet of a bus stop",
        ],
        correctIndex: 2,
        explanation:
          "Crossing to the left within 100 feet of an intersection or a railway crossing is prohibited, because that is where a vehicle can appear from a direction you were not watching.",
        context:
          "The same 100-foot restriction applies near a bridge, viaduct or tunnel. On top of that, you may not drive left of centre where signs or markings forbid it, where there are two or more lanes in each direction, or on a hill or curve where you cannot see far enough ahead. Even where passing is legal, you must be able to finish and return before an oncoming vehicle is within 200 feet.",
        trap:
          "'Within 50 feet of a parked vehicle' sounds cautious but is invented; passing a parked car is exactly when you are expected to move left.",
        excerptKey: "no-driving-left-side",
        sourceLabel: "Texas Driver Handbook (DL-7) - Passing",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_14",
        topic: "sharing",
        question:
          "You are following a motorcycle on a dry highway. What following interval does Texas suggest?",
        choices: [
          "Ten seconds",
          "One to two seconds",
          "Two to three seconds",
          "Four to six seconds",
        ],
        correctIndex: 3,
        explanation:
          "Four to six seconds is the recommended gap behind a motorcycle. In the dry a bike can out-brake a car, and the smallest contact from behind puts the rider on the ground.",
        context:
          "Motorcycles also need more room laterally: they change position within the lane to avoid potholes, gravel, wet paint and crosswinds, and a gust or a truck's turbulence can move a bike across a lane. At an intersection, stop a full vehicle length back so that a car hitting you from behind does not push you into the rider. Never share a lane with one.",
        trap:
          "'Two to three seconds' is a normal car-to-car gap; behind a motorcycle it removes the extra margin the rider needs to swerve or brake hard.",
        excerptKey: "motorcycle-following-distance",
        sourceLabel: "Texas Driver Handbook (DL-7) - Share the Road with Motorcycles",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_15",
        topic: "signs",
        question:
          "Driving up a ramp you are suddenly facing a red rectangular sign reading WRONG WAY. What has happened?",
        choices: [
          "You are travelling against the flow of traffic and must stop and turn around",
          "The road ahead is closed and you should look for a detour",
          "You are entering a one-way street correctly but must not turn",
          "You are approaching a section where oncoming traffic may use your lane",
        ],
        correctIndex: 0,
        explanation:
          "A WRONG WAY sign facing you means you have entered against the traffic flow. Stop where it is safe, and get turned around before you reach the main lanes.",
        context:
          "Wrong-way signing is deliberately layered so a driver gets several chances: DO NOT ENTER at the entrance, WRONG WAY further along, and one-way arrows pointing back at you. These signs face only the driver going the wrong way, which is why a sign nobody else seems to be reacting to is aimed squarely at you. Wrong-way entries happen most at night and at freeway frontage road ramps.",
        trap:
          "'The road ahead is closed' is what a ROAD CLOSED sign says; WRONG WAY is about your direction, and the road is perfectly open to everyone travelling the other way.",
        excerptKey: "wrong-way-sign",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_16",
        topic: "emergencies",
        question:
          "You are in a crash in which someone is hurt. What does Texas require of you at the scene?",
        choices: [
          "Leave once you have photographed the damage",
          "Stop, give your name, address, registration and insurer, and help the injured person",
          "Move both vehicles clear and exchange details later by phone",
          "Wait for police before speaking to anyone else involved",
        ],
        correctIndex: 1,
        explanation:
          "An injury crash requires you to stop at or as near as possible to the scene, hand over your identifying and insurance details, show your licence if asked, and give reasonable assistance - including arranging transport to a doctor or hospital if that is clearly needed.",
        context:
          "Notify law enforcement whenever anyone is injured or killed, a vehicle cannot be moved, a driver leaves the scene, or you suspect someone is intoxicated. Where the crash is damage-only and the vehicles still drive, you are expected to move them clear of the traffic lanes. Failing to stop after an injury crash is a felony, and the penalties escalate sharply with the seriousness of the injury.",
        trap:
          "'Exchange details later by phone' skips the duty to remain at the scene, and leaving is what turns a collision into a criminal charge.",
        excerptKey: "crash-injury-stop-immediately",
        sourceLabel: "Texas Driver Handbook (DL-7) - Motor Vehicle Crashes",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_17",
        topic: "licensing",
        question:
          "Once you hold a Texas licence, who are you required to show it to on request?",
        choices: [
          "Anyone who asks for identification",
          "A peace officer, but only if you are being ticketed",
          "A peace officer, and anyone you have been in a crash with",
          "A peace officer only",
        ],
        correctIndex: 2,
        explanation:
          "You carry the licence when driving and produce it for law enforcement and for the other people involved in a crash. Both situations are ones where your identity has to be verifiable on the spot.",
        context:
          "Alongside the licence, every driver has to be able to show evidence of financial responsibility to an officer on request or to another person involved in a crash - and an image of the insurance card on your phone counts. Driving with no proof of insurance brings a fine of $175 to $350 for a first conviction, with suspension and vehicle impoundment possible on later ones.",
        trap:
          "'A peace officer only' misses the crash obligation, which is the one that matters when the other driver needs to identify who hit them.",
        excerptKey: "crash-show-driver-license",
        sourceLabel: "Texas Driver Handbook (DL-7) - Your License to Drive",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_18",
        topic: "rules",
        question:
          "A sign on a multi-lane Texas highway reads LEFT LANE FOR PASSING ONLY. What must a driver cruising at a steady speed do?",
        choices: [
          "Stay in the left lane to keep the right lanes clear for merging traffic",
          "Use the left lane but hold at least the posted minimum speed",
          "Use any lane, since the sign is advisory only",
          "Travel in a lane other than the far left one",
        ],
        correctIndex: 3,
        explanation:
          "The sign makes the far left lane a passing lane. Traffic that is not overtaking belongs in one of the other lanes, so faster vehicles are not forced to pass on the right.",
        context:
          "The same idea runs through Texas highway driving generally: slower traffic keeps right, the middle or left lanes are for passing or moving faster than the flow, and a driver in any lane other than the rightmost should be ready to move over for faster traffic. If you cannot or will not drive at least the minimum posted speed, you are asked not to use the highway at all.",
        trap:
          "'Stay left to keep the right clear for merging' inverts the rule; the right lane is exactly where through traffic below the flow speed should be.",
        excerptKey: "left-lane-for-passing-only",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_19",
        topic: "rightOfWay",
        question:
          "A pedestrian steps into a crosswalk at an intersection that has no signals or pedestrian signs. What is required of you?",
        choices: [
          "Give way to the pedestrian",
          "Continue, since a pedestrian must yield without a signal",
          "Give way only if the pedestrian has already reached your lane",
          "Sound the horn to warn them and carry on",
        ],
        correctIndex: 0,
        explanation:
          "At an uncontrolled intersection the pedestrian in the crosswalk has the right of way. There is no signal to allocate priority, so it goes to the more vulnerable road user.",
        context:
          "Pedestrians also keep priority where they have a WALK signal, and where there is no pedestrian signal they keep it on a green light. Someone who entered the crosswalk lawfully keeps the right of way even if the light changes while they are still crossing. Watch particularly for people using a white cane or an assistance animal - a driver must stop entirely if that is what it takes to avoid endangering them.",
        trap:
          "'Only if they have reached your lane' invents a threshold; the duty starts when they are in the crosswalk, not when they arrive in front of your bumper.",
        excerptKey: "pedestrian-right-of-way",
        sourceLabel: "Texas Driver Handbook (DL-7) - Yield the Right-of-Way to Pedestrians",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_20",
        topic: "signals",
        question:
          "You are waiting to turn left and the signal shows a flashing yellow arrow. What does it permit?",
        choices: [
          "Turning left only when the arrow becomes steady",
          "Turning left after yielding to oncoming traffic",
          "Turning left with oncoming traffic held by a red",
          "Waiting until a green arrow appears before turning",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow arrow allows the turn but gives you no protection. Oncoming traffic is still moving, so you turn only when there is a real gap.",
        context:
          "Texas left-turn displays run in a sequence: a green arrow means protected, a flashing yellow arrow means permitted but yield, a steady yellow arrow means the permitted phase is ending, and a red arrow means stop. Learning to distinguish protected from permitted is the whole point - drivers who treat a flashing yellow arrow as a green arrow turn straight into oncoming traffic.",
        trap:
          "'Oncoming traffic is held by a red' describes the green arrow; a flashing yellow arrow specifically means nobody is holding them.",
        excerptKey: "signal-flashing-yellow-arrow",
        sourceLabel: "Texas Driver Handbook (DL-7) - Traffic Signals",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_21",
        topic: "signs",
        question:
          "A school zone sign shows a reduced speed with a yellow beacon fitted above it. When does the lower speed apply?",
        choices: [
          "Only during the school year",
          "Only when children are visible on the footpath",
          "While the beacon is flashing",
          "At all times of day, every day",
        ],
        correctIndex: 2,
        explanation:
          "Where the sign is paired with a beacon, the reduced limit is in force while the beacon flashes. Outside those periods, the road's normal limit returns.",
        context:
          "Some school zones use posted hours on the sign instead of a beacon, and the principle is identical - the limit applies during the stated times. Where signs say so, using a handheld wireless device inside a school zone is also prohibited while the zone is active. Whether or not the reduced limit is running, children near a school are unpredictable enough to justify covering the brake.",
        trap:
          "'At all times' catches drivers who slow every time they pass a school - safe, but not what the sign says, and the exam is asking what the sign says.",
        excerptKey: "school-zone-speed-when-flashing",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_22",
        topic: "speed",
        question:
          "A county has adopted the statutory limit for a county road running alongside a public beach. What is that limit?",
        choices: [
          "15 mph",
          "20 mph",
          "25 mph",
          "30 mph",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen mph applies on beaches and on county roads next to a public beach where the commissioners court has adopted it. Beach traffic mixes with people sitting, walking and playing on the same surface.",
        context:
          "This sits with the other statutory figures - 30 mph on urban district streets and 15 mph in an alley - all of which apply only where nothing different is posted. Texas beaches are legally roadways in many counties, which is why a driving limit exists there at all, and it is set low because there is nothing separating vehicles from people.",
        trap:
          "25 mph is the residential-feeling answer, but the beach figure is deliberately set at the same low number as an alley.",
        excerptKey: "speed-prima-facie-beach-county-road",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed Limits",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_23",
        topic: "safety",
        question:
          "You come to a low water crossing where roughly six inches of water is flowing across the road. What should you do?",
        choices: [
          "Drive through slowly in a low gear",
          "Follow closely behind another vehicle that makes it across",
          "Speed up to push through with momentum",
          "Turn around and take another route",
        ],
        correctIndex: 3,
        explanation:
          "Six inches is already enough to reach the underside of most cars, cause a loss of control and stall the engine. Turning around costs you a few minutes; the alternative regularly costs lives.",
        context:
          "The numbers escalate quickly: about six inches reaches the bottom of most cars, twelve inches will float many of them, and two feet of moving water carries away pickups and SUVs. Floodwater also hides washed-out roadbed and weakened pavement that can collapse afterwards. Nearly half of flash flood deaths in the United States involve a vehicle, which is why the message is simply to turn around. Driving around a barricade at a flooded road is a criminal offence in Texas.",
        trap:
          "'Follow another vehicle that made it' assumes the road under the water is unchanged - but a heavier vehicle crossing first tells you nothing about whether the roadbed is still there.",
        excerptKey: "flood-water-depths",
        sourceLabel: "Texas Driver Handbook (DL-7) - Floods",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_24",
        topic: "impairment",
        question:
          "A friend has been drinking and wants coffee and a cold shower before driving home. What will that achieve?",
        choices: [
          "Nothing - only time lowers the alcohol in their system",
          "It roughly halves their blood alcohol concentration",
          "It restores their reaction time even if the alcohol remains",
          "It makes them legal to drive after about 15 minutes",
        ],
        correctIndex: 0,
        explanation:
          "Coffee, cold water and exercise change how awake someone feels, not how much alcohol is in their blood. Only time clears it, at roughly one drink per hour.",
        context:
          "The danger of the coffee myth is that it produces a wide-awake drunk - alert enough to be confident, still impaired in judgement, vision and reaction time. Caffeine has been studied specifically and does not improve a drinking driver's ability to operate a vehicle. Body weight, food and how quickly the drinks went down all shift the numbers, so nobody can reliably assess themselves. If someone has been drinking, the person who has not should drive.",
        trap:
          "'Restores reaction time' is the seductive version of the myth, because the person genuinely does feel sharper - feeling sharper and reacting faster are not the same thing.",
        excerptKey: "sobering-up-myths",
        sourceLabel: "Texas Driver Handbook (DL-7) - Myths about Drinking Alcohol",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_25",
        topic: "rules",
        question:
          "Descending a long hill, a driver slips the transmission into neutral to save fuel. Is that permitted in Texas?",
        choices: [
          "No, but only for vehicles with manual transmissions",
          "No - coasting in neutral on a downgrade is prohibited",
          "Yes, provided the vehicle stays under the speed limit",
          "Yes, as long as the engine remains running",
        ],
        correctIndex: 1,
        explanation:
          "Coasting downhill with the gears or transmission in neutral is illegal. You lose engine braking, so the brakes do all the work and can overheat exactly where you most need them.",
        context:
          "The correct technique on a steep descent is the opposite: select a lower gear and let the engine hold the vehicle back, keeping the brakes in reserve. The same reasoning applies to a car with a manual gearbox - riding the clutch down a hill disconnects the engine and produces the identical problem. If brakes ever do fail, downshift and apply the parking brake gently rather than yanking it.",
        trap:
          "'Yes if you stay under the limit' misses the point of the rule, which is about control and brake heat, not speed.",
        excerptKey: "coasting-in-neutral-illegal",
        sourceLabel: "Texas Driver Handbook (DL-7) - Parking, Stopping, or Standing",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_26",
        topic: "signs",
        question:
          "A yellow diamond shows a black arrow bending sharply to the right. What is the correct response?",
        choices: [
          "Move into the right-hand lane before the bend",
          "Expect a road joining from the right",
          "Slow down, keep right and do not pass",
          "Prepare to make a compulsory right turn",
        ],
        correctIndex: 2,
        explanation:
          "This is a curve warning, not a turn instruction. The road bends that way, so ease off, hold your line to the right and stay out of the oncoming lane.",
        context:
          "The warning family includes several arrow signs that look alike: a gradual curve, a sharp turn, a reverse curve bending one way then the other, and a winding road with several bends. All of them ask for the same three things - reduce speed, keep right, and do not pass. Where a small yellow advisory speed plate hangs below, that number is the highest speed at which the bend can be taken safely.",
        trap:
          "'A compulsory right turn' reads the sign as a regulation; regulatory turn signs are black on white, and a yellow diamond never commands a manoeuvre.",
        excerptKey: "warning-signs-purpose",
        sourceLabel: "Texas Driver Handbook (DL-7) - Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_27",
        topic: "rightOfWay",
        question:
          "You are driving along a frontage road beside a freeway. A vehicle ahead is coming off the freeway exit ramp onto your frontage road. Who yields?",
        choices: [
          "The exiting driver, who is joining your road",
          "Whoever reaches the merge point second",
          "Neither, provided both stay in their own lane",
          "You do - frontage road traffic yields to vehicles entering or leaving the highway",
        ],
        correctIndex: 3,
        explanation:
          "Texas puts the yield obligation on the frontage road driver, both for traffic coming off the highway and for traffic heading onto it. Ramp traffic is arriving at speed with little room to stop.",
        context:
          "This one surprises drivers from other states, because merging traffic usually yields. The frontage road system reverses that, and the yield signs on both one-way and two-way frontage roads reflect it. The practical implication is that a driver cruising along a frontage road has to plan for vehicles crossing their path at every ramp, rather than assuming the through road wins.",
        trap:
          "'The exiting driver, who is joining your road' applies ordinary merging logic - correct almost everywhere else, and wrong here.",
        excerptKey: "frontage-road-yield",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Enter or Leave Controlled-Access Highway",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_28",
        topic: "safety",
        question:
          "The back of your car starts sliding out on a wet bend. What is the correct response?",
        choices: [
          "Ease off the accelerator and steer in the direction of the skid",
          "Brake hard and hold the wheel straight",
          "Accelerate to pull the car straight",
          "Turn the wheel sharply the opposite way to the skid",
        ],
        correctIndex: 0,
        explanation:
          "Lift off the accelerator and steer where the rear is going. That points the front wheels along the car's actual path and lets the tyres find grip again; then straighten up gently as control returns.",
        context:
          "A skid means the tyres have run out of grip, so the fix is always to reduce demand rather than add to it - no sudden braking, no sudden steering, no sudden acceleration. The same restraint applies if you drop a wheel off the pavement edge: hold the wheel firmly, come off the gas, slow down, then ease back onto the road. Prevention beats recovery, which mostly means slowing before the surface goes bad and keeping tyres in decent condition.",
        trap:
          "'Brake hard' is the instinctive move and the one that locks the wheels, taking away the steering you still needed.",
        excerptKey: "steering-out-of-skid",
        sourceLabel: "Texas Driver Handbook (DL-7) - Controlling a Car in Special Situations",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_29",
        topic: "sharing",
        question:
          "You are following a large tractor-trailer and cannot see the driver in either of the truck's side mirrors. What does that tell you?",
        choices: [
          "The driver will use their mirrors to check before turning",
          "The driver cannot see you, so drop back",
          "You are correctly positioned in the truck's blind spot",
          "You are close enough to be seen by the reversing camera",
        ],
        correctIndex: 1,
        explanation:
          "The rule of thumb is simple: no view of the driver in their mirror means no view of you. Dropping back also restores your own view of the road ahead of the truck.",
        context:
          "Large trucks have long blind spots directly behind, along both sides and immediately in front. They also need far more room to stop - a car at 55 mph needs roughly 240 feet while a loaded tractor-trailer can need over 400. Never cut into the gap in front of a truck, never pass on the right of one that might turn right, and never cross behind a truck that is setting up to reverse.",
        trap:
          "'Correctly positioned in the blind spot' sounds like a technical answer but is self-contradictory - there is no safe way to sit somewhere the driver cannot see you.",
        excerptKey: "truck-side-mirror-rule",
        sourceLabel: "Texas Driver Handbook (DL-7) - Share the Road with Trucks",
        sourceUrl: DL7,
      },
      {
        id: "tx_s2_30",
        topic: "speed",
        question:
          "A rural road outside any urban district carries no state or US highway number, and nothing is posted. What limit applies to a passenger car?",
        choices: [
          "50 mph",
          "55 mph",
          "60 mph",
          "70 mph",
        ],
        correctIndex: 2,
        explanation:
          "An unnumbered rural road defaults to 60 mph for cars - ten lower than a numbered highway, because these roads are generally narrower with more driveways and junctions.",
        context:
          "The pairing to remember is 70 on state- or US-numbered rural highways, 60 on rural roads without a number, with school buses running 60 and 50 respectively. Farm-to-market and ranch-to-market roads count as numbered highways for this purpose. Every one of these defaults yields to a posted sign and to the underlying duty to slow for conditions.",
        trap:
          "70 mph is the answer for the numbered highway right next door, and the number on the shield is the only thing separating the two.",
        excerptKey: "speed-prima-facie-unnumbered-highway",
        sourceLabel: "Texas Driver Handbook (DL-7) - Speed Limits",
        sourceUrl: DL7,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Standard",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched at the difficulty of the real DPS knowledge exam, mixing signs, exact figures and right-of-way judgement.",
    questions: [
      {
        id: "tx_s3_01",
        topic: "signs",
        question:
          "A yellow sign shows your lane continuing while a second lane begins alongside it. What does it mean?",
        choices: [
          "A lane is being added - you are not required to merge",
          "Two lanes are combining and you must merge",
          "The right lane is about to end",
          "A passing lane starts and you must move right",
        ],
        correctIndex: 0,
        explanation:
          "This is the added lane sign. Two roads come together and an extra lane appears, so you can hold your lane - but watch for traffic settling into the new one.",
        context:
          "Three warning signs look similar and mean different things. The added lane sign says a lane is appearing and no merge is required. The merge sign says another stream is joining yours and you should make room. The lane ends sign says your lane runs out and you must move over. Reading the wrong one produces either an unnecessary swerve or a very necessary one taken too late.",
        trap:
          "'Two lanes are combining and you must merge' is the merge sign - the one situation where you do have to act, which is why people default to it.",
        excerptKey: "added-lane-sign",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_02",
        topic: "rules",
        question:
          "You are overtaking on a two-lane road. How much clearance must you have before an oncoming vehicle when you pull back in?",
        choices: [
          "Any gap is acceptable if you flash your headlights first",
          "You must be back in your lane before an oncoming car is within 200 feet",
          "You must be back before an oncoming car is within 100 feet",
          "You must be back before an oncoming car is within 50 feet",
        ],
        correctIndex: 1,
        explanation:
          "Two hundred feet is the margin. At combined closing speeds on a two-lane road that gap disappears in barely more than a second, which is why the requirement is set that far out.",
        context:
          "A legal pass on a two-lane road needs several things at once: no solid line on your side, clear visibility, a signal, enough power and space to complete the manoeuvre, and no intersection, railway crossing, bridge or tunnel within 100 feet. Return only once you can see the whole front of the passed vehicle in your mirror - cutting in early is what turns a completed pass into a sideswipe.",
        trap:
          "100 feet is the distance used for intersections and bridges, and borrowing it here halves the margin you need against a car closing head-on.",
        excerptKey: "passing-return-200-feet",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - How to Pass on a Two-Lane Road",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_03",
        topic: "rightOfWay",
        question:
          "You reach a four-way stop first and stop. As you start to move, a car that arrived after you is already partway into the intersection from your right. What now?",
        choices: [
          "Proceed, since you arrived and stopped first",
          "Both reverse and start again in arrival order",
          "Proceed, because the left-hand driver always has priority",
          "Let them clear - a vehicle already in the intersection goes first",
        ],
        correctIndex: 3,
        explanation:
          "Arrival order sorts out who should have gone, but it does not undo what has already happened. A vehicle occupying the intersection has to be allowed out before anyone else enters.",
        context:
          "Four-way stops run on arrival order, with the vehicle on the right winning a genuine tie. Sitting underneath that is a principle that overrides everything: right of way is given, not taken, and a driver who is plainly not yielding gets let through regardless of who was technically entitled. Failing to yield and causing injury carries fines running from hundreds into thousands of dollars.",
        trap:
          "'I arrived first' is legally true and practically irrelevant once the other car is in the box - insisting on it is how people get T-boned while in the right.",
        excerptKey: "four-way-stop-order",
        sourceLabel: "Texas Driver Handbook (DL-7) - Right-of-Way at Intersections",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_04",
        topic: "safety",
        question:
          "Apart from the fixed evening and morning times, what condition also makes headlights compulsory in Texas?",
        choices: [
          "Whenever people or vehicles cannot be seen clearly at 1,000 feet",
          "Whenever the outside temperature drops below freezing",
          "Whenever your windscreen wipers are running",
          "Whenever you are on a highway posted above 55 mph",
        ],
        correctIndex: 0,
        explanation:
          "The 1,000-foot visibility test runs alongside the clock. If you cannot pick out people or vehicles at that range, the lights go on regardless of the hour.",
        context:
          "The clock rule is 30 minutes after sunset until 30 minutes before sunrise. The visibility rule covers everything else that dims the road - rain, fog, dust, smoke, heavy cloud. Low beam is the right setting in fog or heavy rain, since high beams reflect off the water in the air. Daytime running lights often do not switch on your tail lights, which is what makes a car invisible from behind in a downpour.",
        trap:
          "'Whenever your wipers are running' is the law in several other states and sounds plausible enough that people pick it - Texas frames the requirement around visibility distance instead.",
        excerptKey: "headlights-30-minutes-1000-feet",
        sourceLabel: "Texas Driver Handbook (DL-7) - Headlights",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_05",
        topic: "speed",
        question:
          "A police car is stopped on the shoulder of a highway posted at 65 mph with its lights flashing, and you cannot change lanes safely. What speed must you slow to?",
        choices: [
          "55 mph",
          "50 mph",
          "45 mph",
          "35 mph",
        ],
        correctIndex: 2,
        explanation:
          "The requirement is 20 mph below the posted limit when you cannot move over, so 65 minus 20 gives 45 mph.",
        context:
          "Texas gives you two ways to comply: vacate the lane nearest the stopped vehicle if the road has two or more lanes going your way, or slow to at least 20 mph under the limit. Where the posted limit is below 25 mph, you slow to under 5 mph instead. The law covers law enforcement, fire, EMS, tow trucks, utility and TxDOT vehicles, and since September 2025 animal control and parking enforcement vehicles too. Fines run to four figures, and far higher if someone is hurt.",
        trap:
          "55 mph is what you get by subtracting 10 - the wrong figure, and the one drivers most often assume because it feels like a reasonable courtesy margin.",
        excerptKey: "move-over-slow-down",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Slow Down or Move Over",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_06",
        topic: "signs",
        question:
          "You are on a divided highway and pass a yellow sign warning that the divided highway ends. What should you expect?",
        choices: [
          "The number of lanes in your direction increasing",
          "Two-way traffic resuming, with oncoming vehicles no longer separated",
          "The highway ending at a junction shortly ahead",
          "A median island beginning, splitting the directions apart",
        ],
        correctIndex: 1,
        explanation:
          "The median is about to disappear and opposing traffic will share the same pavement again. That transition point is where head-on risk suddenly returns.",
        context:
          "There is a near-mirror sign for the opposite change, warning that a divided section is starting and a median island will separate the directions. The two are easy to confuse because both show a split roadway symbol. What matters is which way you are travelling: one tells you protection is beginning, the other tells you it is ending, and only one of them calls for extra caution.",
        trap:
          "'A median island beginning' is the mirror-image sign; if you read it that way you relax at the exact moment two-way traffic returns.",
        excerptKey: "divided-highway-ends-sign",
        sourceLabel: "Texas Driver Handbook (DL-7) - Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_07",
        topic: "impairment",
        question:
          "An adult driver is arrested for DWI and refuses to give a breath or blood specimen. What happens to their licence?",
        choices: [
          "Suspension for 90 days on a first refusal",
          "No suspension, since refusal is a right",
          "Suspension for 30 days pending a court hearing",
          "Suspension for 180 days on a first refusal",
        ],
        correctIndex: 3,
        explanation:
          "Refusal triggers an administrative suspension of 180 days for a first refusal, and up to 730 days for a subsequent one. It is separate from whatever the criminal court later does.",
        context:
          "Driving in Texas carries implied consent: by driving, you have already agreed to give a specimen if lawfully arrested for intoxicated driving. Refusing draws a longer suspension than failing does - a driver who provides a specimen reading 0.08 or above faces 90 days on a first occasion, up to 365 on later ones. For drivers under 21, any detectable alcohol triggers a suspension, and refusal costs 180 days first time and two years after that.",
        trap:
          "'Refusal is a right' confuses the ability to refuse with the absence of consequences; you can decline the test, but the suspension is automatic and longer than if you had complied.",
        excerptKey: "specimen-refusal-suspension-adult",
        sourceLabel: "Texas Driver Handbook (DL-7) - Implied Consent Laws for Adults",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_08",
        topic: "rules",
        question:
          "When is it lawful in Texas to overtake another vehicle on a paved shoulder?",
        choices: [
          "When the vehicle ahead is slowing, stopped, disabled or waiting to turn left",
          "Any time traffic in the main lanes is congested",
          "Only where a sign specifically authorises shoulder use",
          "Never - the shoulder may not be used for passing under any circumstances",
        ],
        correctIndex: 0,
        explanation:
          "Texas permits a shoulder pass in the narrow case where the vehicle ahead is slowing or stopped on the travelled part of the road, disabled, or setting up a left turn - and only if it can be done safely.",
        context:
          "Passing on the right generally is allowed when conditions permit it safely: on a one-way road, or where the road is wide enough for two or more lanes each way and free of obstructions. What is never allowed is leaving the paved surface to get past - dropping onto dirt costs you grip and control. Shoulders otherwise exist for breakdowns, tyre trouble, running out of fuel and other emergencies.",
        trap:
          "'Never under any circumstances' is the over-cautious answer, and it is wrong - the left-turning vehicle case is exactly what the shoulder allowance is for.",
        excerptKey: "pass-on-paved-shoulder",
        sourceLabel: "Texas Driver Handbook (DL-7) - Passing on the Right",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_09",
        topic: "signs",
        question:
          "A white rectangular sign reads SLOWER TRAFFIC KEEP RIGHT. How does it differ from a yellow diamond warning sign?",
        choices: [
          "It applies only to commercial vehicles",
          "It is a regulation you must obey, not a hazard warning",
          "It applies only in daylight hours",
          "It is advisory and carries no legal weight",
        ],
        correctIndex: 1,
        explanation:
          "Black-on-white rectangles are regulatory - they carry the force of a traffic law. Yellow diamonds warn you about the road but do not themselves command a manoeuvre.",
        context:
          "Sorting signs into regulatory and warning does most of the work on an exam. Regulatory signs are black on white (or red and white for stop, yield and prohibitions) and tell you what you must or must not do. Warning signs are yellow, or orange in work zones, and describe a condition. Ignoring a warning sign can still be an offence if you fail to slow for the hazard it flags, but the sign itself is describing, not commanding.",
        trap:
          "'Advisory and carries no legal weight' confuses regulatory signs with the small yellow advisory speed plates below curve warnings - those are the advisory ones.",
        excerptKey: "regulatory-signs-must-obey",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_10",
        topic: "rightOfWay",
        question:
          "On a one-way road with three lanes, two cars move into the centre lane at the same instant - one from the left lane, one from the right. Who yields?",
        choices: [
          "The car coming from the left lane",
          "Whoever signalled second",
          "Neither, as long as both are already alongside each other",
          "The car coming from the right lane",
        ],
        correctIndex: 3,
        explanation:
          "On a road of three or more lanes running the same way, a vehicle entering a lane from the right gives way to one entering the same lane from the left.",
        context:
          "It is a tie-breaker for simultaneous lane changes, and it runs opposite to the yield-to-the-right rule people carry from intersections - which is exactly why it gets missed. The practical version is to check the far side of the target lane, not just your own blind spot, before committing. The same road layout is where the far left lane is usually restricted to passing.",
        trap:
          "'The car coming from the left' is the answer produced by importing the intersection yield-to-the-right habit into a lane-change situation, where the rule is reversed.",
        excerptKey: "lane-entry-right-yields-to-left",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Driving on Multiple-Lane Roads",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_11",
        topic: "safety",
        question:
          "You have been driving on a long, straight, monotonous stretch and are starting to feel dull and unfocused. What does Texas recommend?",
        choices: [
          "Stop and walk around at least every two hours or 100 miles",
          "Turn the air conditioning to maximum and continue",
          "Increase speed slightly to stay engaged",
          "Fix your gaze on the road ahead to maintain concentration",
        ],
        correctIndex: 0,
        explanation:
          "Highway hypnosis comes from steady sound and reduced activity, and the fix is a genuine break: stop at least every two hours or 100 miles, get out, and move.",
        context:
          "The other defences are keeping your eyes moving between near and far and left and right, reading signs as they come, checking mirrors, and keeping fresh air in the car. Texas also advises against driving more than eight hours in a day. None of this makes an actually tired driver safe - if you are fatigued or unwell, the answer is not to drive at all.",
        trap:
          "'Fix your gaze on the road ahead' feels like concentration but is the behaviour that causes the problem; a static gaze is what lets the trance set in.",
        excerptKey: "highway-hypnosis",
        sourceLabel: "Texas Driver Handbook (DL-7) - Fight Highway Hypnosis",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_12",
        topic: "signs",
        question:
          "An HOV preferential lane sign lists hours of 6 a.m. to 9 a.m., Monday through Friday. What does that mean?",
        choices: [
          "The lane has a lower speed limit during those hours",
          "Only buses and carpool vehicles may use the lane during those hours",
          "The lane is closed entirely during those hours",
          "All traffic may use the lane during those hours only",
        ],
        correctIndex: 1,
        explanation:
          "The listed hours are the restricted period. During them, the lane is reserved for buses and vehicles carrying passengers; outside them, the restriction lifts unless the sign says otherwise.",
        context:
          "HOV signing always pairs a restriction with a time window, so the same lane can be reserved at rush hour and open the rest of the day. Read the plate, not the diamond symbol alone. Managed and HOV lanes are often bounded by double solid white lines, which may not be crossed - so entering or leaving has to happen at a designated opening.",
        trap:
          "'All traffic may use it during those hours' inverts the sign completely, turning a restriction into a permission.",
        excerptKey: "hov-lane-sign",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_13",
        topic: "rules",
        question:
          "You are parking on a hill and leaving the car. Besides setting the parking brake and removing the key, what does Texas require?",
        choices: [
          "Leaving the hazard warning lights flashing",
          "Chocking a wheel if the grade exceeds 5 percent",
          "Turning the front wheels towards the curb or roadside",
          "Leaving the transmission in neutral",
        ],
        correctIndex: 2,
        explanation:
          "On any grade the front wheels must be turned towards the curb or the side of the road, so that if the brake fails the car rolls into the kerb rather than into traffic.",
        context:
          "Leaving a vehicle unattended in Texas means switching off the engine, locking the ignition, removing the key and setting the brake - with the wheel-turning requirement added on a slope. A remote starter changes the key part but not the rest, and the key still has to be in or physically present in the vehicle before it can be driven. Also check for traffic behind you before opening the door.",
        trap:
          "'Leaving it in neutral' is the exact opposite of safe practice - neutral is what lets an unattended car roll in the first place.",
        excerptKey: "unattended-vehicle-wheels-to-curb",
        sourceLabel: "Texas Driver Handbook (DL-7) - Unattended Motor Vehicle",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_14",
        topic: "rightOfWay",
        question:
          "You are driving on a controlled-access highway. A school bus is stopped in a designated loading zone where pedestrians are not permitted to cross the traffic lanes, and its red lights are flashing. What must you do?",
        choices: [
          "Stop until the lights stop flashing, as on any other road",
          "Stop only if you are in the lane nearest the bus",
          "Slow to 20 mph and pass with caution",
          "Continue with care - stopping is not required in that situation",
        ],
        correctIndex: 3,
        explanation:
          "The stopping duty exists to protect children crossing the road. Where a loading zone on a controlled-access highway means nobody crosses the traffic lanes, the reason for stopping falls away.",
        context:
          "There are only two narrow escapes from the school bus rule: this loading-zone case, and a bus stopped on a different roadway altogether. Everything else - including a bus facing the other way on an ordinary undivided street - requires you to stop and stay stopped until the bus moves, the lights go off, or the driver waves you on. Penalties start at $500 to $1,250 and escalate to a felony if someone is seriously hurt.",
        trap:
          "'Stop as on any other road' is the safe-sounding answer and would rarely get you in trouble in real life, but it is not what the exam is testing - the exception is a specific, examinable rule.",
        excerptKey: "school-bus-stop-exceptions",
        sourceLabel: "Texas Driver Handbook (DL-7) - Yield Right-of-Way to School Buses",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_15",
        topic: "parking",
        question:
          "How far back from a stop sign, yield sign or flashing signal at the roadside may you not park?",
        choices: [
          "Within 15 feet",
          "Within 20 feet",
          "Within 30 feet",
          "Within 50 feet",
        ],
        correctIndex: 2,
        explanation:
          "Thirty feet on the approach. Parking closer hides the sign or signal from the drivers behind you, which defeats the point of having it.",
        context:
          "The full clearance set is worth learning in one go: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway with 75 feet on the opposite side, 30 feet approaching a stop sign, yield sign or flashing signal, and 50 feet from the nearest rail at a crossing. Separately, you may never park on a bridge, in a tunnel, on a crosswalk, within an intersection, or on railway tracks.",
        trap:
          "20 feet is the crosswalk figure and sits right next to this one in the list, which is why the two get transposed under exam pressure.",
        excerptKey: "no-parking-distances",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - Parking, Stopping, or Standing",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_16",
        topic: "speed",
        question:
          "A small yellow plate below a curve warning sign reads 35. What is it telling you?",
        choices: [
          "The highest speed at which the curve can safely be taken",
          "The legal maximum speed, enforceable as a posted limit",
          "The minimum speed permitted through the curve",
          "The recommended speed only for heavy vehicles",
        ],
        correctIndex: 0,
        explanation:
          "An advisory speed plate gives the highest speed at which a typical vehicle can negotiate the bend safely. It is engineering advice attached to a warning, not a separate posted limit.",
        context:
          "Advisory plates are yellow and always ride below a yellow warning sign; regulatory speed limits are black on white and stand alone. Ramp advisory signs work the same way for exit curves. Even though the plate is advisory, driving so fast that you lose control still breaches the requirement to travel at a reasonable and prudent speed - so ignoring it is not consequence-free.",
        trap:
          "'Enforceable as a posted limit' confuses yellow advisory plates with white regulatory signs; the colour is the whole tell.",
        excerptKey: "advisory-speed-sign",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_17",
        topic: "impairment",
        question:
          "A driver over 21 provides a breath specimen reading 0.09. What administrative consequence follows a first such result?",
        choices: [
          "A 30-day suspension followed by an interlock requirement",
          "A 90-day licence suspension",
          "A 180-day licence suspension",
          "No suspension until a court convicts them",
        ],
        correctIndex: 1,
        explanation:
          "Failing the test at 0.08 or above brings a 90-day suspension on a first occasion, rising to as much as 365 days for later ones. It runs independently of the criminal case.",
        context:
          "The pattern is that refusing costs more than failing: 180 days for a first refusal against 90 for a first failure. A reinstatement fee applies to administrative revocations. On top of this, a first adult DWI conviction can bring a fine up to $2,000, jail from 72 hours to 180 days, and a suspension of 90 to 365 days - and possessing an open container raises the minimum jail term.",
        trap:
          "'No suspension until convicted' misses that the administrative suspension is a separate track that starts long before any trial.",
        excerptKey: "bac-failure-suspension-adult",
        sourceLabel: "Texas Driver Handbook (DL-7) - Implied Consent Laws for Adults",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_18",
        topic: "rules",
        question:
          "Which hand-and-arm signal tells drivers behind you that you are about to slow down or stop?",
        choices: [
          "Left arm extended and bent upward at the elbow",
          "Right arm extended straight out horizontally",
          "Left arm extended out of the window, pointing downward",
          "Left arm extended straight out horizontally",
        ],
        correctIndex: 2,
        explanation:
          "Arm out and angled down is the stop or slow signal. Straight out means a left turn, and bent up at the elbow means a right turn.",
        context:
          "Hand signals still matter when indicators fail, on a bicycle, or in an older vehicle, and Texas expects the same 100-foot minimum notice as a light signal would give. They are hard to see after dark, which is why working lights are a legal equipment requirement. Cyclists use the same set, with the option of pointing the right arm straight out for a right turn.",
        trap:
          "'Straight out horizontally' is the left-turn signal - and a driver reading it as a stop signal will not slow down when you do.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Signaling",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_19",
        topic: "safety",
        question:
          "About how much water is enough to float many passenger cars off the road surface?",
        choices: [
          "Eighteen inches",
          "Three feet",
          "Six inches",
          "Twelve inches",
        ],
        correctIndex: 3,
        explanation:
          "Twelve inches will float many cars. Once buoyancy exceeds the vehicle's weight the tyres stop touching anything and steering and braking do nothing at all.",
        context:
          "The escalation is worth memorising: about six inches reaches the underside of most cars and can stall them, twelve inches floats many, and two feet of moving water carries away pickups and SUVs. Water also hides missing roadbed, and pavement weakened by flooding can collapse even after the water drops. Nearly half of United States flash flood deaths involve a vehicle.",
        trap:
          "'Three feet' feels like the answer because it seems like a lot of water is needed - the real figures are far lower than most drivers assume, which is exactly why people drive in.",
        excerptKey: "flood-water-depths",
        sourceLabel: "Texas Driver Handbook (DL-7) - Floods",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_20",
        topic: "rightOfWay",
        question:
          "You are inside a roundabout when an ambulance approaches with its siren on. What should you do?",
        choices: [
          "Carry on and exit the circle, then pull over",
          "Stop immediately where you are in the circle",
          "Reverse out of the circle to clear the entry",
          "Speed up and complete a full loop before exiting",
        ],
        correctIndex: 0,
        explanation:
          "Stopping inside the circle blocks the whole roundabout, including the path the ambulance needs. Clear the circle first, then pull over beyond the exit.",
        context:
          "Roundabouts run counter-clockwise around a central island and use yield signs rather than signals: slow on approach, give way to traffic already circulating, enter on a real gap, then signal right to leave. In a multi-lane roundabout, pick your lane before entering using the advance lane sign and do not change lanes inside. Leave room for long vehicles that need more than one lane, and watch for cyclists and pedestrians at the entries and exits.",
        trap:
          "'Stop immediately' is the correct instinct anywhere else on the road, and it is the one manoeuvre that makes a roundabout impassable.",
        excerptKey: "roundabout-emergency-vehicles",
        sourceLabel: "Texas Driver Handbook (DL-7) - Roundabouts",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_21",
        topic: "sharing",
        question:
          "A tractor-trailer ahead of you has signalled right but swung wide to the left before the junction. What should you do?",
        choices: [
          "Sound your horn to indicate you are alongside",
          "Stay back and do not try to pass on its right",
          "Move up on its right, since the truck has left space there",
          "Overtake on the left while it is positioned wide",
        ],
        correctIndex: 1,
        explanation:
          "Trucks swing wide to get a long trailer round a tight corner, and the gap opening on their right is the space the trailer is about to sweep through.",
        context:
          "Truck handling differs from a car's in every direction: longer stopping distances, wider turning circles, big blind spots along both sides and directly behind, and a need for space in front that disappears the moment someone cuts in. Never cross behind a truck setting up to reverse, and never race one to a lane closure. On multi-lane highways they often sit in a centre lane deliberately, to keep options open.",
        trap:
          "'The truck has left space there' reads the gap as an invitation - it is the trailer's swept path, and vehicles that fill it get crushed against the kerb.",
        excerptKey: "truck-wide-right-turns",
        sourceLabel: "Texas Driver Handbook (DL-7) - Share the Road with Trucks",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_22",
        topic: "signs",
        question:
          "A white X-shaped sign at a railway crossing carries the words 2 TRACKS. What is it telling you?",
        choices: [
          "The crossing is two hundred feet ahead",
          "Two roads share the crossing",
          "There are two sets of rails to cross at this location",
          "Two trains use this crossing each hour",
        ],
        correctIndex: 2,
        explanation:
          "The crossbuck marks the crossing itself, and where more than one track is involved it states the number. That warning matters because one train can hide another coming the other way.",
        context:
          "At a crossing marked only by a crossbuck, with no lights or gates, you look both ways, listen, and stop if a train is coming. Where lights are flashing or gates are down, you stop and stay stopped until the gates rise and the lights stop. Never drive around a lowered gate, and never stop on the tracks - if your car stalls there, get everyone out and away, moving towards the oncoming train and off to the side.",
        trap:
          "'The crossing is two hundred feet ahead' confuses the crossbuck at the rails with the round yellow advance warning sign further back.",
        excerptKey: "railroad-crossbuck",
        sourceLabel: "Texas Driver Handbook (DL-7) - Railroad Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_23",
        topic: "rules",
        question:
          "Which statement about using a wireless device while driving in Texas is correct?",
        choices: [
          "Texting is legal as long as the vehicle is under 30 mph",
          "Texting is legal at a red light because the vehicle is stationary",
          "There is no statewide restriction, only local ordinances",
          "Reading, writing or sending a message on a handheld device while driving is illegal",
        ],
        correctIndex: 3,
        explanation:
          "Texas bans reading, writing and sending electronic messages while driving. Calling emergency services is permitted; if you must make a call, pull safely off the road first.",
        context:
          "Two further layers sit on top. Every driver under 18 is barred from using any wireless communication device, hands-free included, except in an emergency - and that applies to learner licence holders too. Where signs are posted, handheld device use is prohibited in a school zone. Distraction is the underlying issue: a half-second delay in reacting roughly doubles crash risk.",
        trap:
          "'Legal at a red light' assumes the ban is about motion; being stopped in a traffic lane is still driving, and the phone still takes your attention off the intersection.",
        excerptKey: "texting-while-driving-illegal",
        sourceLabel: "Texas Driver Handbook (DL-7) - Texting While Driving",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_24",
        topic: "safety",
        question:
          "Your brakes fail while descending a hill. What is the sequence Texas recommends?",
        choices: [
          "Shift to a lower gear and apply the parking brake gradually",
          "Pump the accelerator to restart the engine and coast to a stop",
          "Pull the parking brake fully on at once",
          "Switch off the ignition to slow the vehicle",
        ],
        correctIndex: 0,
        explanation:
          "A lower gear uses the engine to hold the car back, and easing the parking brake on gradually adds braking without locking the rear wheels and starting a skid.",
        context:
          "Emergency handling in Texas follows one theme: no sudden inputs. In a blowout, come off the accelerator, brake gently and steer straight to a stop. Running off the pavement, grip the wheel, ease off, slow down, then rejoin. In a skid, come off the gas and steer where the rear is heading. Switching off the ignition is a bad idea in all of them, because it can lock the steering and kills the power assistance.",
        trap:
          "'Pull the parking brake fully on at once' is the panic response, and locking the rear wheels on a descent converts a brake failure into a spin.",
        excerptKey: "brake-failure",
        sourceLabel: "Texas Driver Handbook (DL-7) - Brake Failure",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_25",
        topic: "licensing",
        question:
          "What are the minimum liability insurance amounts a Texas driver must carry?",
        choices: [
          "$50,000 per injured person, $100,000 per crash, $25,000 property damage",
          "$30,000 per injured person, $60,000 per crash, $25,000 property damage",
          "$25,000 per injured person, $50,000 per crash, $25,000 property damage",
          "$20,000 per injured person, $40,000 per crash, $15,000 property damage",
        ],
        correctIndex: 1,
        explanation:
          "Texas requires 30/60/25: $30,000 for injury or death of one person, $60,000 when two or more are hurt, and $25,000 for property damage.",
        context:
          "Proof of coverage has to be produced for a police officer on request, for anyone involved in a crash, and when you apply for a licence, register a vehicle or have it inspected - an image on your phone counts. A first conviction for driving without it brings a fine of $175 to $350; a second adds suspension, a larger fine and a 180-day vehicle impoundment.",
        trap:
          "25/50/25 is the combination used in several neighbouring states and reads as the obvious round-number answer, but Texas sets the injury figures higher.",
        excerptKey: "liability-insurance-minimums",
        commonlyMissed: true,
        sourceLabel: "Texas Driver Handbook (DL-7) - The Liability Insurance Law",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_26",
        topic: "signs",
        question:
          "A white sign shows a solid black arrow pointing up alongside a curved arrow, marking a divider ahead. What is it instructing?",
        choices: [
          "Merge left before the divider",
          "The road ahead is one-way to the right",
          "Pass to the right of the sign",
          "Turn right at the next junction",
        ],
        correctIndex: 2,
        explanation:
          "This is the keep right marker used ahead of islands and medians. It tells you which side of the obstruction to take, and taking the wrong one puts you into oncoming traffic.",
        context:
          "Similar guidance appears on work-zone barricades and vertical panels, where the diagonal stripes slope down towards the side you should pass on - stripes falling to the right mean bear right. Objects close to the traffic lane also carry object markers so they show up at night. All of these exist to stop you meeting a fixed obstruction head-on.",
        trap:
          "'Turn right at the next junction' reads a lane-guidance sign as a turn instruction; nothing here is telling you to leave the road.",
        excerptKey: "keep-right-of-sign",
        sourceLabel: "Texas Driver Handbook (DL-7) - Regulatory and Warning Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_27",
        topic: "rightOfWay",
        question:
          "You are on a street that ends at a T-intersection with a through road, and there are no signs or signals. What must you do?",
        choices: [
          "Slow down and merge into the nearest gap",
          "Proceed if you reach the junction first",
          "Give way only to traffic approaching from your right",
          "Stop and give way to traffic on the through road",
        ],
        correctIndex: 3,
        explanation:
          "Where your street terminates at the junction, you stop and yield to everything on the through road. Their route continues; yours ends.",
        context:
          "This is one of the ranked tests Texas applies before the yield-to-the-right tie-breaker: divided or multi-lane beats one or two lanes, paved beats unpaved, and a through street beats a terminating one. A separate warning sign shows a T ahead, which tells you a turn is coming and gives you time to slow and choose a direction.",
        trap:
          "'Give way only to traffic from your right' half-remembers the tie-breaker rule; at a T-intersection you owe the whole through road, both directions.",
        excerptKey: "t-intersection-stop",
        sourceLabel: "Texas Driver Handbook (DL-7) - T-Intersection",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_28",
        topic: "speed",
        question:
          "Approximately how far does a car travelling at 60 mph need to stop completely on dry, level pavement with good tyres and brakes, including reaction time?",
        choices: [
          "About 165 feet",
          "About 230 feet",
          "About 300 feet",
          "About 390 feet",
        ],
        correctIndex: 2,
        explanation:
          "Around 300 feet - the length of a football field. Roughly a quarter of that is covered before the brakes even engage, while the driver is still processing the hazard.",
        context:
          "The average driver needs about a second and a half to see, decide and get on the brake, and distance travelled during that pause scales directly with speed. Total stopping distance grows faster than speed does: roughly 109 feet at 30 mph, 229 at 50, 303 at 60 and 387 at 70. Rain, worn tyres or a heavier load push all of these figures higher, which is why a following gap sized for one speed is not adequate at another.",
        trap:
          "'About 165 feet' is the figure for 40 mph, and it appeals because people underestimate how sharply the numbers climb with speed.",
        sourceLabel: "Texas Driver Handbook (DL-7) - Approximate Stopping Distances",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_29",
        topic: "rules",
        question:
          "You are turning right from a two-way street. Where should your vehicle be positioned as you make the turn?",
        choices: [
          "As close as practical to the right edge of the road",
          "In the middle of your lane, to allow room to swing wide",
          "In the left portion of the lane, so you can see round the corner",
          "Wherever traffic behind you allows",
        ],
        correctIndex: 0,
        explanation:
          "Hug the right edge. Swinging wide invites a cyclist or another vehicle to slot into the gap you have opened on your right, and that is exactly where the turn will take you.",
        context:
          "A proper turn has a sequence: decide early, check mirrors and blind spots, get into the correct lane well ahead, signal at least 100 feet out, slow before you begin turning, keep both hands on the wheel, and finish in the correct lane. Where cyclists are present, merging towards the kerb before you turn is the right move - turning across a bike lane at the last moment is a classic collision.",
        trap:
          "'Middle of your lane to swing wide' is a large-truck technique; in a car it simply opens a gap on your right for someone to ride into.",
        excerptKey: "right-turn-keep-right",
        sourceLabel: "Texas Driver Handbook (DL-7) - How to Make a Right Turn",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_30",
        topic: "emergencies",
        question:
          "You have a minor crash that no police officer attends and the damage is well under the reporting threshold. What does Texas expect?",
        choices: [
          "A report to your county tax assessor within 30 days",
          "A written crash report filed with TxDOT no later than the tenth day after the crash",
          "Nothing further, once details are exchanged",
          "A report to DPS within 24 hours",
        ],
        correctIndex: 1,
        explanation:
          "Where no officer investigates and the crash falls below the injury and $1,000 damage thresholds, the driver files a written report with the Texas Department of Transportation using its form, within ten days.",
        context:
          "Reporting sits alongside your duties at the scene: stop, exchange names, addresses, registration and insurer details, show your licence if asked, and note witnesses and the location. Call law enforcement whenever there is injury or death, a vehicle that cannot be moved, a driver who leaves, or a driver you suspect is intoxicated. Hit-and-run damage should always be reported, since uninsured motorist cover generally depends on it.",
        trap:
          "'Nothing further once details are exchanged' is what most people actually do, and it skips a filing obligation that carries a deadline.",
        excerptKey: "crash-written-report-10-days",
        sourceLabel: "Texas Driver Handbook (DL-7) - Motor Vehicle Crashes",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_31",
        topic: "signals",
        question:
          "An overhead lane-use control signal above your lane displays a steady red X. What must you do?",
        choices: [
          "Continue but reduce speed by 20 mph",
          "Use the lane only for overtaking",
          "Move out of that lane - it is closed to you",
          "Stop in the lane and wait for the signal to change",
        ],
        correctIndex: 2,
        explanation:
          "A red X closes the lane beneath it. The lane may be blocked ahead, or reversed to carry traffic the other way.",
        context:
          "Lane-use control signals come in three displays: a red X means do not use the lane, a steady yellow X means prepare to leave it safely because the assignment is about to change, and a steady downward green arrow means the lane is open to you. They appear on both streets and highways, most often on reversible or managed lanes.",
        trap:
          "'Stop and wait' treats the X like a traffic signal; stopping in a live traffic lane on a highway is far more dangerous than the closure itself.",
        excerptKey: "lane-use-control-signals",
        sourceLabel: "Texas Driver Handbook (DL-7) - Guide Signs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_32",
        topic: "sharing",
        question:
          "A cyclist ahead of you is riding in the middle of a narrow lane instead of hugging the kerb. Is that allowed?",
        choices: [
          "No - cyclists must always ride as far right as possible",
          "Yes, but only on roads posted at 30 mph or less",
          "No, unless a marked bicycle lane is unavailable",
          "Yes - a lane too narrow to share safely may be taken in full",
        ],
        correctIndex: 3,
        explanation:
          "The duty to keep right only applies when the lane is genuinely wide enough for a car and a bike side by side. In a narrow lane, taking the whole lane is both legal and safer, because it stops drivers squeezing past.",
        context:
          "Texas lists other situations where a cyclist may leave the right edge: overtaking another vehicle, preparing for a left turn, and avoiding hazards such as debris, potholes, parked cars or pedestrians. On a one-way road with two or more marked lanes, a cyclist rides near the left kerb instead. Drivers turning right should merge towards the kerb rather than cutting across the cyclist's path.",
        trap:
          "'Always as far right as possible' is the version most drivers believe, and acting on it is what produces the close passes cyclists are moving out to prevent.",
        excerptKey: "bicycle-may-take-full-lane",
        sourceLabel: "Texas Driver Handbook (DL-7) - Share the Road with Bicycles",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_33",
        topic: "safety",
        question:
          "It is a cold morning and the road surface looks clear. Where should you expect ice first?",
        choices: [
          "On bridges and overpasses",
          "On straight, open stretches of highway",
          "In the middle of the traffic lane",
          "On south-facing slopes",
        ],
        correctIndex: 0,
        explanation:
          "Bridges and overpasses lose heat from above and below with no ground warmth underneath, so they freeze before the road on either side of them.",
        context:
          "Shaded stretches are the other danger, since snow and ice linger there long after the sunlit surface has cleared. Winter driving in Texas comes down to increasing your following distance, slowing before turns rather than during them, testing the brakes gently once moving to gauge grip, and clearing snow and ice off the glass before setting off. There is no speed that is automatically safe on ice.",
        trap:
          "'The middle of the traffic lane' is where tyre action usually clears water first, which makes it the least likely place for ice - the answer is exactly backwards.",
        excerptKey: "ice-on-bridges",
        sourceLabel: "Texas Driver Handbook (DL-7) - Winter Driving",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_34",
        topic: "impairment",
        question:
          "Your doctor prescribes a medication and the label warns it may cause drowsiness. What does that mean for driving?",
        choices: [
          "It only matters if it is combined with alcohol",
          "It can impair you as genuinely as alcohol, so check before driving",
          "Prescribed medicines cannot legally impair you",
          "It only matters if you take more than the prescribed dose",
        ],
        correctIndex: 1,
        explanation:
          "Prescription and over-the-counter medicines can slow reactions, blur vision and cloud judgement at ordinary doses. In Texas, intoxication covers loss of normal faculties from any substance, not just alcohol.",
        context:
          "Antihistamines, cold remedies, tranquillisers and sedatives are common culprits, and mixing them multiplies the effect - alcohol both amplifies other drugs and masks how affected you are. Individual response varies with body weight, timing and dose, so a medicine that had no effect last month may still catch you out. If a label or a pharmacist raises the question, ask before you drive rather than after.",
        trap:
          "'Only if combined with alcohol' is a comfortable half-truth; plenty of medicines impair driving on their own, which is why the warning is on the box.",
        excerptKey: "over-the-counter-drugs",
        sourceLabel: "Texas Driver Handbook (DL-7) - Alcohol and Other Types of Drugs",
        sourceUrl: DL7,
      },
      {
        id: "tx_s3_35",
        topic: "rules",
        question:
          "A flag person in a work zone holds up a STOP paddle, but the lane ahead of you looks completely clear. What must you do?",
        choices: [
          "Move into the adjacent lane and continue",
          "Stop briefly, then proceed at 20 mph",
          "Stop in your lane and wait until the flag person signals you on",
          "Slow down and pass carefully, since nothing is obstructing the lane",
        ],
        correctIndex: 2,
        explanation:
          "A flag person's instruction has to be obeyed exactly. They are managing movements you cannot see - equipment reversing, a crew stepping out, oncoming traffic being released through a single open lane.",
        context:
          "Work zones are set up as a sequence: warning signs, then channelising devices such as cones, drums and barricades, then the flag person or an automated flagging device. Stop in your lane without veering, expect drivers who leave the lane change until the last second, and hold the reduced speed until the sign says the zone has ended. Fines double where workers are present, and driving around a barricade is an offence in itself.",
        trap:
          "'The lane looks clear' is the reasoning behind most work-zone incidents; the flag person is stopping you for something outside your field of view.",
        excerptKey: "flag-person-instructions",
        sourceLabel: "Texas Driver Handbook (DL-7) - Construction and Maintenance Devices",
        sourceUrl: DL7,
      },
    ],
  },
];
