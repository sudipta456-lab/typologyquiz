import type { DrivingTestSet } from "../types";

// Sources as for sets 1-3: What Every Driver Must Know (SOS-133, October 2025),
// the michigan.gov Secretary of State pages for the knowledge test and
// Graduated Driver Licensing, the Driving Skills Test Study Guide (SOS-360),
// the Michigan Vehicle Code (MCL 257) and the Michigan Insurance Code
// (MCL 500) for the auto insurance minimums.
const HB =
  "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf";
const SOS18 = "https://www.michigan.gov/sos/license-id/new-drivers-18-older";
const MCL_625 = "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-625";
const MCL_320A = "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-320a";
const MCL_612 = "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-612";
const MCL_3009 = "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3009";

export const michiganSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Michigan Roads in Detail",
    difficulty: "medium",
    description:
      "Lane discipline, licensing paperwork, parking clearances and the sharing-the-road rules that Michigan words differently from its neighbours.",
    questions: [
      {
        id: "mi_s4_01",
        topic: "rules",
        question: "When may you legally pass another vehicle on the RIGHT in Michigan?",
        choices: [
          "Only on a freeway, and only above 45 mph",
          "When the vehicle ahead is turning left and there is room on the road",
          "Whenever the shoulder is paved and wide enough",
          "Never - passing on the right is prohibited",
        ],
        correctIndex: 1,
        explanation:
          "Michigan permits passing on the right in defined situations, and a vehicle ahead of you turning left is one of them, provided the road has room without leaving the carriageway.",
        context:
          "The other permitted cases are a one-way street with more than one lane, a road with two or more lanes in each direction, and a point specifically widened for passing. What is never allowed is dropping onto the shoulder or off the road to get by, however tempting the gap looks.",
        trap:
          "The paved shoulder is the trap. Using it to pass turns a lawful right-side pass into an offence.",
        excerptKey: "passing-right-allowed",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Passing on the right",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_02",
        topic: "signals",
        question: "Where should you bring your vehicle to rest at a steady red light in Michigan?",
        choices: [
          "Behind the crosswalk or stop line",
          "Level with the signal head so you can see it change",
          "Within one car length of the signal",
          "Wherever you can still see the cross traffic",
        ],
        correctIndex: 0,
        explanation:
          "You stop behind the crosswalk or the stop line. Where the pavement carries neither, you stop before entering the intersection itself.",
        context:
          "Stop lines are the wide white bars painted across the lane, and they exist to keep vehicles clear of pedestrians and cross traffic. Michigan adds that whether or not a stop line is painted, you must be able to see traffic from all directions before proceeding - so if the line leaves you blind, you stop there first and then edge forward.",
        trap:
          "Creeping up level with the signal feels safer and puts your bumper across the crosswalk, which is exactly where a pedestrian is entitled to be.",
        excerptKey: "signal-red-light",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic signals",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_03",
        topic: "licensing",
        question:
          "What driving log does a Michigan teen need before applying for Segment 2 of driver education?",
        choices: [
          "50 hours including 10 at night",
          "30 hours including at least 2 at night",
          "20 hours, with no night requirement",
          "40 hours including 5 at night",
        ],
        correctIndex: 1,
        explanation:
          "Segment 2 requires a log of at least 30 hours of supervised driving with at least 2 of them at night, plus three consecutive months holding the Level 1 Learner's License.",
        context:
          "Michigan runs two separate log thresholds and they stack rather than replace each other. The 30-hour, 2-night log gets you into Segment 2. The 50-hour, 10-night log, together with six months on Level 1, is what gets you to the driving skills test and Level 2. Meeting the first does not advance you toward the licence on its own.",
        commonlyMissed: true,
        trap:
          "The 50-hour figure is the famous one and it belongs to the later stage. Applying it to Segment 2 makes the requirement look 20 hours harder than it is.",
        excerptKey: "segment-2-requirements",
        sourceLabel: "What Every Driver Must Know - Chapter 1, Graduated Driver Licensing",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_04",
        topic: "safety",
        question:
          "You are making an emergency stop in a vehicle WITHOUT anti-lock brakes. What is the correct technique?",
        choices: [
          "Brake just hard enough not to lock the wheels, releasing and reapplying if they do lock",
          "Press hard and hold until the vehicle stops",
          "Pump the pedal in rapid bursts throughout the stop",
          "Brake with the handbrake to avoid locking the front wheels",
        ],
        correctIndex: 0,
        explanation:
          "Without anti-lock brakes you brake just short of locking the wheels. If they do lock, you release the pressure and apply again - the technique known as threshold or controlled braking.",
        context:
          "Locked wheels cannot steer, which is why the goal is to stay just below that point. The opposite applies with anti-lock brakes: hard, firm pressure from the start, held right through, with the pedal pulsing under your foot. Knowing which system your car has is part of knowing how to stop it.",
        trap:
          "Pressing hard and holding is the ABS technique. Used without ABS it locks the wheels and turns a stop into a slide.",
        excerptKey: "threshold-braking",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Braking",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_05",
        topic: "rightOfWay",
        question:
          "Your light turns green but two cars are still finishing their movement inside the intersection. What must you do?",
        choices: [
          "Yield to them before you move off",
          "Proceed, because the green light gives you the right of way",
          "Sound your horn to move them along",
          "Move forward into the intersection and wait there",
        ],
        correctIndex: 0,
        explanation:
          "Michigan lists this explicitly: when the light has just turned green and vehicles are still in the intersection, you yield to them before proceeding.",
        context:
          "The green light releases you into a space that may not be empty yet. Michigan builds the same idea into the other direction of the rule - a driver caught inside the intersection when the light turns red is expected to complete the movement as quickly and safely as possible rather than stop and block it.",
        trap:
          "Reading green as an unconditional right to go is what produces intersection collisions, which Michigan says kill and injure more people than any other part of the road.",
        excerptKey: "green-light-yield-inside",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Right of way at intersections",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_06",
        topic: "signs",
        question: "A warning sign reads DIVIDED HIGHWAY ENDS. What is ahead?",
        choices: [
          "A junction where the highway splits",
          "A section where the median widens",
          "The divided highway ends and becomes two lanes of traffic",
          "A closed carriageway with a contraflow",
        ],
        correctIndex: 2,
        explanation:
          "The divided highway is about to end and turn into two lanes of traffic, which means oncoming vehicles will be sharing the same pavement as you.",
        context:
          "It is one of a group of Michigan warning signs about the road narrowing or changing character: TWO-WAY TRAFFIC marks where two-way running begins and tells you to keep right, LANE ENDS MERGE LEFT tells you the right lane is finishing and that you must yield to traffic in the left lane, and RIGHT LANE ENDS gives 500 feet of notice.",
        trap:
          "Divided highway ending sounds like the road ends. What ends is the median, and that is a bigger change than it sounds.",
        excerptKey: "sign-divided-highway-ends",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_07",
        topic: "speed",
        question: "What is the standard speed limit inside a Michigan mobile home park?",
        choices: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctIndex: 1,
        explanation:
          "Michigan sets 15 mph in mobile home parks and in some municipal parks. It is the lowest of the state's standard limits.",
        context:
          "These figures apply from the Vehicle Code rather than from a sign, so the absence of a posted limit does not mean the road is unrestricted. The stepped set runs 15 mph in mobile home parks, 25 mph in platted subdivisions and condominium complexes, and 55 mph on other non-freeway roads. Business districts, park roads and school and hospital zones are signed because they vary.",
        trap:
          "25 mph is the subdivision figure, and a mobile home park looks like a subdivision from behind the wheel.",
        excerptKey: "speed-15-mobile-home",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Speed limits",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_08",
        topic: "parking",
        question:
          "You come across a house fire with fire crews working. How close may you park?",
        choices: [
          "No closer than 500 feet",
          "No closer than 100 feet",
          "No closer than 50 feet",
          "There is no fixed distance - use judgement",
        ],
        correctIndex: 0,
        explanation:
          "Michigan bars parking within 500 feet of a fire or a crash. It is by far the largest of the routine parking clearances.",
        context:
          "The distance keeps a wide working area clear for appliances, ambulances and hoses, which is why it dwarfs the 15 feet required at a hydrant. The same list forbids parking in front of a driveway, alley, theatre, emergency exit or fire escape, and anywhere a parked car would block the view of a driver turning at an intersection.",
        commonlyMissed: true,
        trap:
          "500 feet is most of a city block, so a spot that feels well clear of the scene can still be inside the restriction.",
        excerptKey: "park-fire-or-crash-500",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking violations",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_09",
        topic: "sharing",
        question: "Which motorcycles may legally use a Michigan freeway?",
        choices: [
          "All motorcycles with a valid registration",
          "Only motorcycles carrying no passenger",
          "Those with an engine of 125cc or greater",
          "Only motorcycles ridden by operators over 21",
        ],
        correctIndex: 2,
        explanation:
          "Michigan restricts freeway use to motorcycles of 125cc or more. Machines of 124cc or less are barred, along with mopeds, bicycles and pedestrians.",
        context:
          "The threshold is about the ability to keep pace with 70 mph traffic and the 55 mph freeway minimum. The excluded list is worth knowing as a group: pedestrians, small motorcycles of 124cc or less, mopeds, bicycles, all-terrain vehicles and slow-moving vehicles are all kept off freeways.",
        commonlyMissed: true,
        trap:
          "A scooter that reaches freeway speeds may still be under the engine size threshold, and it is the engine size that governs.",
        excerptKey: "motorcycle-125cc-freeway",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Specifically about motorcyclists",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_10",
        topic: "impairment",
        question:
          "A Michigan driver with no previous drug history is convicted of a drug offence that had nothing to do with driving. What happens to the licence?",
        choices: [
          "Nothing, because the offence did not involve a vehicle",
          "A warning letter only",
          "Points are added but the licence is untouched",
          "It is suspended for six months, with no restricted licence for the first 30 days",
        ],
        correctIndex: 3,
        explanation:
          "Michigan requires a licence suspension for drug convictions even when the driver was not behind the wheel. A first offence brings six months, with no restricted licence available for the first 30 days.",
        context:
          "A repeat offence within seven years doubles the suspension to a year and pushes the no-restricted-licence period to 60 days. Possession, manufacture and distribution can all trigger it, and reinstatement costs $125 on top of any other reinstatement fee. It is one of the few licensing consequences in Michigan with no driving element at all.",
        commonlyMissed: true,
        trap:
          "Assuming licence sanctions require a vehicle is reasonable everywhere else and wrong in Michigan.",
        excerptKey: "drug-suspension-first",
        sourceLabel: "What Every Driver Must Know - Chapter 2, Alcohol and drugs",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_11",
        topic: "emergencies",
        question: "When is a wet Michigan road at its most slippery?",
        choices: [
          "After several hours of steady rain",
          "During the first half hour of rain",
          "Once the rain has stopped and the road begins drying",
          "Only where the surface is newly laid",
        ],
        correctIndex: 1,
        explanation:
          "The first half hour is the dangerous window, because the oil dropped by passing vehicles has not yet been washed off the surface.",
        context:
          "Intersections are the worst of it, since that is where vehicles idle and drip most. Michigan asks for at least twice the normal following distance in the wet, and warns that brakes can come out of deep water pulling to one side or not holding at all, so they should be tested gently once you are through.",
        trap:
          "Heavier rain feels more dangerous, and the surface is actually most treacherous at the start when the road looks barely wet.",
        excerptKey: "rain-first-half-hour",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Rain and fog",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_12",
        topic: "rules",
        question:
          "You are driving well below the speed of surrounding traffic on a multi-lane Michigan road. Where should you be?",
        choices: [
          "In the centre lane, out of everyone's way",
          "Wherever you feel safest",
          "In the left lane, so faster traffic can pass on your right",
          "In the right lane, except when passing or turning left",
        ],
        correctIndex: 3,
        explanation:
          "Slow vehicles belong in the right lane, leaving it only to pass or to make a left turn.",
        context:
          "Michigan also states the freeway version: on a two-lane freeway you drive on the right except when passing, exiting left, letting someone merge, or where traffic is heavy. On three or more lanes you may use any lane, but if you are near the minimum speed you stay with the slower traffic. Weaving between lanes to make progress is separately illegal.",
        trap:
          "Sitting in the left lane at a legal speed still counts as obstructing, and the manual lists it among aggressive-driving behaviours because of the risks it provokes in others.",
        excerptKey: "lane-usage-right-hand",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Lane usage",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_13",
        topic: "signals",
        question:
          "A pedestrian signal shows a white walking figure. What does that mean for you as a driver?",
        choices: [
          "Pedestrians may cross only if the road is clear",
          "Traffic must yield and pedestrians may cross",
          "Pedestrians have 10 seconds before the signal changes",
          "Pedestrians may cross, but drivers turning right keep priority",
        ],
        correctIndex: 1,
        explanation:
          "The walking figure, or the word WALK, tells pedestrians they may cross and tells traffic to yield to them.",
        context:
          "Turning drivers meet this most often, because a green light for you frequently coincides with a walk signal across the road you are turning into. Michigan's instruction to drivers is unqualified: always yield to pedestrians. The flashing phase that follows is for people finishing a crossing already begun, and the raised red hand or DONT WALK means nobody new should step off.",
        trap:
          "Turning on green feels like a protected movement. It never overrides the walk phase running across your path.",
        excerptKey: "pedestrian-walk-signal",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Pedestrian signals",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_14",
        topic: "rightOfWay",
        question:
          "You are inside a Michigan roundabout when you hear an emergency siren behind you. What should you do?",
        choices: [
          "Stop immediately and pull as far right as you can",
          "Stop in the circulating lane and wait",
          "Reverse to the entry to clear the circle",
          "Keep going, take the nearest exit, then pull over to the right and stop",
        ],
        correctIndex: 3,
        explanation:
          "Do not stop inside the roundabout. You continue to the nearest exit, leave the circle, then pull over to the right and stop to let the emergency vehicle pass.",
        context:
          "Stopping inside blocks the whole intersection, including the path the emergency vehicle needs. It is a specific exception to the general rule of pulling over immediately, which applies on ordinary roads: pull to the right-hand edge, clear of intersections, and stop until the vehicle has passed. Michigan also asks you to stay 500 feet back from a moving emergency vehicle.",
        commonlyMissed: true,
        trap:
          "The instinct drilled into every driver is to stop where you are. In a roundabout that is the one place stopping makes things worse.",
        excerptKey: "roundabout-emergency-vehicle",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Roundabouts",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_15",
        topic: "safety",
        question:
          "Where does Michigan advise seating children aged 12 and under?",
        choices: [
          "In the front, where the driver can watch them",
          "Anywhere, provided they are belted",
          "In the front only if the airbag is switched off",
          "In the rear seat, to avoid airbag injury in a crash",
        ],
        correctIndex: 3,
        explanation:
          "Michigan encourages parents and guardians to seat all children aged 12 and under in the rear, to avoid injury from a deploying airbag.",
        context:
          "It sits alongside two harder rules: children under 4 must be in a rear seat where the vehicle has one, and a rear-facing seat may go in front only if the passenger airbag has been deactivated. The manual also suggests at least 10 inches between a driver's breastbone and the centre of the steering wheel, for the same reason.",
        trap:
          "Airbags are protective equipment and they deploy with enough force to injure a small body. Belting a child into the front does not solve that.",
        excerptKey: "air-bag-children-12",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Air bags",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_16",
        topic: "licensing",
        question:
          "You pass the Michigan written knowledge test. How long does the result stay valid?",
        choices: [
          "30 days",
          "Six months",
          "One year",
          "Indefinitely, once recorded",
        ],
        correctIndex: 2,
        explanation:
          "A knowledge test pass is good for one year. If you later apply for a new temporary instruction permit because the old one expired, you must sit the test again.",
        context:
          "The clocks around it are worth lining up: the knowledge test result lasts a year, the temporary instruction permit lasts 180 days, and at least 30 days of practice on that permit must be completed before the driving skills test. Fail the skills test inside the 180 days and the whole application restarts with a fresh permit.",
        trap:
          "The permit expiring does not carry the test result with it - but applying for a replacement permit does void the pass.",
        excerptKey: "knowledge-test-valid-one-year",
        sourceLabel: "Michigan Secretary of State - New drivers (18 and older)",
        sourceUrl: SOS18,
      },
      {
        id: "mi_s4_17",
        topic: "signs",
        question: "A KEEP LEFT sign is posted at an island in the road. What must you do?",
        choices: [
          "Pass to the left-hand side of the obstruction",
          "Move into the left lane and stay there",
          "Give way to traffic passing on the right",
          "Turn left at the next opportunity",
        ],
        correctIndex: 0,
        explanation:
          "KEEP LEFT tells you which side of a road feature or obstruction to pass. Traffic goes to the left of it and nowhere else.",
        context:
          "It is a regulatory instruction about a specific object, not a lane-use rule for the road as a whole. Michigan's related sign, OBSTACLE IN ROADWAY, marks a traffic island or obstruction that may be passed on either side. Reading which of the two you are looking at is what decides your line.",
        trap:
          "It is easy to read it as an instruction to change lanes. The sign is about getting round one object.",
        excerptKey: "sign-keep-left",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_18",
        topic: "speed",
        question:
          "Heavy snow is falling on a Michigan road posted at 55 mph. Traffic is moving at 35. What speed is legal?",
        choices: [
          "35 mph or whatever is careful and prudent - the posted limit is a ceiling, not a target",
          "55 mph, because that is the posted limit",
          "45 mph, halfway between the two",
          "Any speed, as long as you can stop within 200 feet",
        ],
        correctIndex: 0,
        explanation:
          "Michigan's Basic Speed Law requires a speed that lets you stop within the clear distance ahead. In snow that is well below 55, and driving the posted limit would itself be an offence.",
        context:
          "The manual states it plainly: the careful and prudent speed is never faster than the posted limit and, depending on conditions, may be slower. Fog, rain, ice, heavy traffic and poor visibility all pull the lawful speed down without anybody changing a sign.",
        trap:
          "The posted number is treated as permission. Under the Basic Speed Law it is only the maximum in ideal conditions.",
        excerptKey: "speed-clear-distance",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Speed limits",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_19",
        topic: "parking",
        question: "Which of these is on Michigan's list of places you may never park?",
        choices: [
          "Any street with a posted speed limit above 35 mph",
          "Within 100 feet of a bus stop",
          "On or under a bridge, on an overpass or in a tunnel, unless posted otherwise",
          "Within 40 feet of a driveway",
        ],
        correctIndex: 2,
        explanation:
          "Bridges, overpasses and tunnels are on Michigan's no-parking list unless a sign says otherwise, because there is no room to get past a stopped vehicle.",
        context:
          "The list also covers sidewalks, driveways, intersections, crosswalks, designated bike lanes, transit stops, the street side of a legally parked vehicle, anywhere against the flow of traffic, and any spot that blocks delivery to a rural mailbox. Outside city or village limits you may not park in a lane of highway at all where there is a shoulder.",
        trap:
          "A wide bridge with an apparent hard shoulder still counts. The prohibition is about the structure, not the width.",
        excerptKey: "park-bridge-tunnel",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking violations",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_20",
        topic: "sharing",
        question:
          "You come up behind a horse-drawn buggy on a Michigan road. What does the manual ask of you?",
        choices: [
          "Pass immediately, to reduce the time spent alongside",
          "Reduce to 15-20 mph and keep at least 20 feet back until it is safe to pass",
          "Sound your horn so the driver knows you are there",
          "Stay 100 feet back and do not pass at all",
        ],
        correctIndex: 1,
        explanation:
          "Michigan asks you to slow to 15-20 mph and hold at least 20 feet of distance from the horse or buggy, then pass with caution when it is safe.",
        context:
          "The distance and the low speed are both about not startling the animal, which is why the manual also tells you never to sound the horn or rev the engine near a horse. A buggy will usually be carrying the orange slow-moving vehicle triangle, marking it as unable to exceed 25 mph.",
        trap:
          "A horn feels like a courtesy warning. Around a horse it is the single most likely thing to cause an accident.",
        excerptKey: "horse-and-buggy",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Slow-moving vehicles",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_21",
        topic: "impairment",
        question:
          "Which of these puts SIX points on a Michigan driving record?",
        choices: [
          "Failing to stop and give identification at the scene of a crash",
          "Careless driving",
          "Driving 12 mph over the limit on an ordinary road",
          "Having an open alcohol container in the vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Leaving a crash scene without stopping and identifying yourself is a six-point matter, alongside operating while intoxicated, reckless driving, fleeing an officer and refusing a chemical test.",
        context:
          "Michigan's scale runs from one point to six. Careless driving and 11 to 15 mph over the limit are three points; open container and most other moving violations are two; 16 mph or more over, drag racing, impaired driving and any bodily alcohol content under 21 are four. Twelve points inside two years means a driver assessment reexamination.",
        trap:
          "Reckless and careless driving sound like synonyms and sit three points apart on the scale.",
        excerptKey: "points-six",
        sourceLabel: "What Every Driver Must Know - Chapter 2, Michigan's point system",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_22",
        topic: "emergencies",
        question: "You hit a deer on a Michigan road. What does the state ask you to do?",
        choices: [
          "Nothing, unless the vehicle is undrivable",
          "Report it to local law enforcement, the sheriff, the State Police or the DNR",
          "Move the carcass off the road yourself and continue",
          "Report it only if the damage exceeds $1,000",
        ],
        correctIndex: 1,
        explanation:
          "Michigan asks you to report a deer strike to local law enforcement, the county sheriff's office, the Michigan State Police or the Department of Natural Resources. They can issue a permit if you want to keep the animal.",
        context:
          "There are around 60,000 vehicle-deer crashes in Michigan a year, and officials think as many as half go unreported. The average one costs about $2,100 in damage, usually to the front of the vehicle, so most will also cross the $1,000 police notification threshold that applies to any crash.",
        trap:
          "Treating it as a collision with an animal rather than a reportable crash skips both the report and the permit that lets you take the deer.",
        excerptKey: "deer-report-crash",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Vehicle-deer crashes",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_23",
        topic: "rules",
        question:
          "You reach a median crossover for a Michigan Left. It looks wide but carries no arrows or lane markings. How should you treat it?",
        choices: [
          "As two lanes, since it is wide enough for two cars",
          "As a lane for turning traffic in either direction",
          "As a single-lane crossover",
          "As a merge lane onto the main highway",
        ],
        correctIndex: 2,
        explanation:
          "An unmarked median crossover is always treated as single-lane, however wide it looks. The extra width is there for lorries and recreational vehicles that need a bigger turning circle.",
        context:
          "A crossover designed for two vehicles is marked as such, with arrows, ONLY lettering and white solid lines. Without those markings, pulling alongside another vehicle in the crossover puts you exactly where a tractor-trailer needs to swing. Michigan Lefts have been part of the state's road system since the late 1960s and the two-lane versions are the exception.",
        commonlyMissed: true,
        trap:
          "Width is not a lane marking. Two cars fitting side by side does not make it a two-lane crossover.",
        excerptKey: "michigan-left-unmarked",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Michigan Lefts",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_24",
        topic: "signals",
        question:
          "The light is red and you cut through a shop car park to rejoin the road past the junction. What is the position in Michigan?",
        choices: [
          "Legal, since the car park is private property",
          "Legal if you make a purchase at the shop",
          "Illegal - you may not drive across public or private property to avoid a traffic control device",
          "Legal outside business hours",
        ],
        correctIndex: 2,
        explanation:
          "Michigan makes it illegal to drive across public or private property, a store car park included, in order to avoid a traffic control device.",
        context:
          "The device being avoided is what makes it an offence, not the ownership of the land you cross. Michigan pairs this with a related prohibition on freeways: driving across median strips and through barriers is illegal, and the emergency crossover in the median is reserved for police, emergency and maintenance vehicles.",
        trap:
          "Private property feels like it sits outside the traffic code. The offence is defined by what you are dodging.",
        excerptKey: "avoid-traffic-control-device",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic signals",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_25",
        topic: "rightOfWay",
        question:
          "A pedestrian stepped into the crosswalk while their signal still said WALK. Your light has now turned green. What must you do?",
        choices: [
          "Proceed, because their signal has changed",
          "Proceed slowly around them",
          "Sound the horn and wait two seconds",
          "Yield - a pedestrian who entered before the signal changed keeps the right of way",
        ],
        correctIndex: 3,
        explanation:
          "Michigan requires you to yield to a pedestrian who entered the crosswalk before the signal changed. Their lawful entry carries them through.",
        context:
          "It is one of a long list of pedestrian yields Michigan sets out: marked crosswalks at intersections and midblock, unmarked crosswalks on the driver's side, children near school crossings, people with disabilities, anyone crossing from an alley or driveway, and every turn at every intersection whether or not signals are present.",
        trap:
          "A changed signal reads as a transfer of priority. Someone already in the road is not required to retreat.",
        excerptKey: "pedestrian-before-signal",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Right of way and pedestrians",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_26",
        topic: "safety",
        question:
          "Two 16-year-olds want to ride in the open bed of a pickup truck on a Michigan road. When is that lawful?",
        choices: [
          "Only while the truck is travelling at 15 mph or less",
          "Whenever they are seated below the level of the sides",
          "On any road posted below 35 mph",
          "Never, at any speed",
        ],
        correctIndex: 0,
        explanation:
          "Michigan bars anyone under 18 from riding in an open pickup bed when the truck is doing more than 15 mph. Below that the prohibition does not bite.",
        context:
          "The law carves out exceptions for farming, construction, the military, parades and authorised emergency and rescue personnel. Michigan pairs it with the general belt law, which requires everyone in the front seat and every passenger under 16 anywhere in the vehicle to be buckled up.",
        trap:
          "The rule is a speed rule, not an outright ban. Reading it as never, or as always allowed, both miss the 15 mph line.",
        excerptKey: "pickup-bed-under-18",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Protecting children and teens",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_27",
        topic: "signs",
        question: "A yellow warning sign shows a truck on a steep downward slope. What is ahead?",
        choices: [
          "A weight-restricted bridge",
          "A truck route joining from the right",
          "A runaway truck escape ramp",
          "A steep downgrade - check your brakes and gear down if needed",
        ],
        correctIndex: 3,
        explanation:
          "The hill sign warns of a steep downslope. All vehicles, and especially heavy ones, should have working brakes and should gear down rather than ride the brakes to the bottom.",
        context:
          "Gearing down matters because sustained braking overheats the brakes and fades them exactly where you need them. The related winter warning is the bridge sign: bridges ice before roads, so a downslope onto a bridge deck combines both hazards.",
        trap:
          "The truck in the symbol makes it look like a sign for lorries. It applies to every vehicle on the road.",
        excerptKey: "sign-hill",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_28",
        topic: "licensing",
        question:
          "You move to Michigan holding a valid licence from another state. What happens to the old licence when Michigan issues yours?",
        choices: [
          "You keep both, and use whichever is convenient",
          "The old one stays valid until its printed expiry",
          "You surrender the old one and it is destroyed",
          "It is invalidated and returned to you, because Michigan allows only one valid licence",
        ],
        correctIndex: 3,
        explanation:
          "Michigan law allows a driver to hold only one valid licence at a time. The out-of-state licence is invalidated and handed back to you.",
        context:
          "Michigan also contacts your previous state for your driving record, which then becomes part of your Michigan record along with any points converted to the Michigan scale. A suspended or revoked out-of-state licence has to be cleared with that state before Michigan will accept the application at all.",
        trap:
          "Getting the old licence back looks like it is still usable. It has been invalidated - only the plastic is returned.",
        excerptKey: "one-license-only",
        sourceLabel: "What Every Driver Must Know - Chapter 1, New Michigan residents",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_29",
        topic: "speed",
        question:
          "You enter a Michigan construction zone with an active crew and no posted speed sign in sight. What speed does the manual give for most construction, maintenance or surveying activity?",
        choices: ["25 mph", "35 mph", "45 mph unless posted differently", "55 mph"],
        correctIndex: 2,
        explanation:
          "Michigan's stated figure for most construction, maintenance or surveying work is 45 mph unless the site is posted differently.",
        context:
          "The manual also explains the mechanism used on modern sites: signs may set 45 mph only when workers are present, letting traffic return to the normal limit when the site is inactive. That is why reading the posting matters more than remembering a single number - and why the penalty structure, with doubled fines and elevated points, applies to the zone whatever the posted figure.",
        trap:
          "Slowing to 25 mph because a crew is visible is safe but wrong as an answer, and can itself obstruct traffic on a 45 mph site.",
        excerptKey: "work-zone-45-unless-posted",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Construction zones",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_30",
        topic: "parking",
        question: "What is double parking?",
        choices: [
          "Occupying two marked bays with one vehicle",
          "Stopping on the street side of a legally parked vehicle",
          "Parking two vehicles nose to tail in one space",
          "Parking on both sides of a narrow street",
        ],
        correctIndex: 1,
        explanation:
          "Double parking means stopping on the street side of a vehicle that is already legally parked, leaving your car out in the traffic lane. Michigan prohibits it.",
        context:
          "It appears on the same no-parking list as blocking a driveway, parking against the flow of traffic, sitting within an intersection, crosswalk or designated bike lane, and stopping at a transit stop. The common thread is that the parked vehicle ends up occupying space other road users need.",
        trap:
          "Hazard lights change nothing. They do not create a lawful place to stop.",
        excerptKey: "park-double-parking",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking violations",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_31",
        topic: "sharing",
        question:
          "At 55 mph a car stops in about 130 feet. Roughly how far does a loaded commercial vehicle need at the same speed?",
        choices: ["About 200 feet", "About 400 feet", "About 250 feet", "About 600 feet"],
        correctIndex: 1,
        explanation:
          "A commercial vehicle at 55 mph needs about 400 feet to stop - roughly three times a car's distance.",
        context:
          "That gap is why cutting in front of a truck is so dangerous: the space you take is the space the driver needs to stop. Michigan adds the related habits - do not linger in a truck's blind spots, extend your following distance further in poor weather, and never cross behind a commercial vehicle that is backing, since a trailer eight and a half feet wide can hide a car completely.",
        trap:
          "Assuming heavier means only somewhat longer understates it. The difference is measured in hundreds of feet, not car lengths.",
        excerptKey: "truck-stopping-distance",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Commercial vehicles",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_32",
        topic: "rules",
        question: "Which of these is a lawful use of a marked bicycle lane by a car in Michigan?",
        choices: [
          "Making a right turn from it at the junction",
          "Pulling into it to wait for a passenger",
          "Using it to pass a queue of stationary traffic",
          "None of these - driving, passing, turning, parking and waiting in it are all prohibited",
        ],
        correctIndex: 3,
        explanation:
          "Michigan reserves the bicycle lane exclusively for cyclists. Driving, passing, making right turns, parking and pulling over to wait or make a delivery are all specifically prohibited.",
        context:
          "The right-turn item is the one drivers get wrong most, because merging into the bike lane before a turn is standard practice in some states. Michigan's instruction is to check for cyclists coming up on your right, yield, and let them pass before you turn. A green-painted bike lane marks a spot where conflict is especially likely.",
        commonlyMissed: true,
        trap:
          "Waiting in a bike lane with hazard lights on for thirty seconds is still prohibited, and it forces the rider into traffic.",
        excerptKey: "bicycle-lane-illegal-use",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Bicycle lanes",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_33",
        topic: "impairment",
        question:
          "A passenger has an open container of alcohol in your car. What does a conviction cost the driver on the Michigan point scale?",
        choices: ["No points", "One point", "Two points", "Four points"],
        correctIndex: 2,
        explanation:
          "Open alcohol container in the vehicle is a two-point item on the Michigan scale, in the same band as most other moving violations.",
        context:
          "That two-point band also covers 6 to 10 mph over the limit, refusal of a preliminary breath test by anyone under 21, and failing to yield or show due caution for emergency vehicles. Points last two years, and six or more one-point violations or twelve points in that window triggers a driver assessment reexamination.",
        trap:
          "Because alcohol is involved, drivers expect it to sit with the four and six point offences. It does not.",
        excerptKey: "points-two",
        sourceLabel: "What Every Driver Must Know - Chapter 2, Michigan's point system",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_34",
        topic: "emergencies",
        question:
          "A vehicle is coming straight at you in your lane on a two-lane road. Which way should you look to escape?",
        choices: [
          "To the left, into the oncoming lane they have just left",
          "Straight on, braking as hard as you can",
          "To the right edge of the road",
          "Either way - take whichever gap appears first",
        ],
        correctIndex: 2,
        explanation:
          "Look for an escape route on the right edge of the road. Going left risks meeting the other driver as they realise their mistake and pull back into their own lane.",
        context:
          "The full sequence Michigan gives is tap the horn if there is time, brake hard without locking the wheels if the car has no anti-lock system, and look right. An emergency stop in your own lane is only for when there is room and nowhere to pull off, and if a collision is unavoidable you steer around it no more than you must.",
        trap:
          "Swerving left toward the empty oncoming lane is the instinct, and it puts you exactly where the other driver is heading.",
        excerptKey: "oncoming-escape-right",
        sourceLabel: "What Every Driver Must Know - Chapter 7, If an oncoming vehicle is in your lane",
        sourceUrl: HB,
      },
      {
        id: "mi_s4_35",
        topic: "rightOfWay",
        question:
          "A construction worker in a Michigan work zone waves you through against a red light. What do you do?",
        choices: [
          "Follow the worker's direction - it outranks the traffic control device",
          "Obey the red light, since only police may override signals",
          "Wait for the light to change, then go",
          "Proceed only after the worker shows identification",
        ],
        correctIndex: 0,
        explanation:
          "Michigan gives construction workers authority to direct traffic in work zones, and their directions are to be followed even where they conflict with an existing traffic control device.",
        context:
          "It is the same principle that puts a police officer's instructions above a signal: a person directing traffic can see the situation the fixed device cannot. Work zones carry other elevated duties too - doubled fines for every moving violation and higher point tiers for speeding - which is why the manual treats worker instructions as binding rather than advisory.",
        commonlyMissed: true,
        trap:
          "Assuming only police can override a signal leaves you sitting at a red light in a zone where the traffic pattern has changed.",
        excerptKey: "work-zone-workers-direct",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Construction zones",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Michigan's stacked thresholds and near-miss numbers: which point tier applies where, which distances change with the paint, and the rules that read one way in the manual and another way in the Vehicle Code.",
    questions: [
      {
        id: "mi_s5_01",
        topic: "licensing",
        question:
          "A Michigan driver is convicted of doing 4 mph over the limit. How many points does the Vehicle Code assign?",
        choices: ["None", "One", "Two", "Three"],
        correctIndex: 1,
        explanation:
          "Exceeding the limit by more than 1 mph but not more than 5 is a one-point violation under the Michigan Vehicle Code.",
        context:
          "The statutory speeding scale runs in bands: one point for 1 to 5 over, two for more than 5 up to 10, three for more than 10 up to 15, and four beyond 15. The manual's summary table starts at the two-point band and omits the one-point tier, yet its own reexamination rule refers to drivers with six or more one-point violations, so the tier plainly exists.",
        commonlyMissed: true,
        trap:
          "The manual's point list has no one-point entry, which leads people to answer none. The Vehicle Code has one.",
        excerptKey: "points-one-point-speed",
        sourceLabel: "Michigan Vehicle Code - MCL 257.320a(1)(q)",
        sourceUrl: MCL_320A,
      },
      {
        id: "mi_s5_02",
        topic: "rules",
        question:
          "A cyclist is riding ahead of you inside a marked no-passing zone. May you overtake?",
        choices: [
          "No - a no-passing zone applies to every vehicle",
          "Yes, you may pass a bicyclist in a no-passing zone as long as it is safe",
          "Only if the cyclist waves you past",
          "Only where the shoulder is wide enough to use",
        ],
        correctIndex: 1,
        explanation:
          "Michigan specifically permits passing a bicyclist in a no-passing zone provided it is safe to do so. The 3-foot minimum clearance still applies.",
        context:
          "The exception exists because a rider doing 12 mph inside a two-mile no-passing zone would otherwise hold up a queue indefinitely, which produces worse behaviour than a controlled pass. Michigan's other bicycle rules still apply: leave at least 3 feet, use another lane if that is what it takes, and stay well clear before returning.",
        trap:
          "Applying the no-passing zone absolutely is the natural reading and it is not what Michigan says about bicycles.",
        excerptKey: "bicycle-no-passing-zone",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_03",
        topic: "rightOfWay",
        question:
          "You are turning left on red from a one-way street onto another one-way street. Which direction matters most before you go?",
        choices: [
          "Behind you, for vehicles closing fast",
          "Straight ahead, for vehicles crossing",
          "To your left, for traffic approaching the junction",
          "To your right, after coming to a complete stop",
        ],
        correctIndex: 3,
        explanation:
          "Michigan tells you to stop completely and check for traffic approaching from the right before making a left turn on red from one one-way street onto another.",
        context:
          "The geometry is what makes it counter-intuitive. Turning left out of a one-way street, the conflicting traffic on the cross street comes at you from the right rather than the left. The same check applies when turning left on red from a two-way street onto a one-way, with the addition of yielding to vehicles opposite you turning right into the same road.",
        commonlyMissed: true,
        trap:
          "Left turns train you to look left. Here the traffic that will hit you is coming from the other side.",
        excerptKey: "left-on-red-one-way",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Right of way when turning",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_04",
        topic: "speed",
        question:
          "A school bus is travelling on a Michigan freeway posted at 65 mph for cars. What is the bus limited to?",
        choices: ["65 mph", "60 mph", "50 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "On freeways posted below 70 mph, school buses and trucks are held to 55 mph. The 65 mph figure applies only where cars may do 70.",
        context:
          "Michigan's freeway rule is a small table rather than a single number: 70 mph maximum and 55 mph minimum for cars, 65 mph for school buses and trucks on those 70 mph freeways, and 55 mph for buses and trucks wherever the freeway is posted below 70. Everything below that is set by the Basic Speed Law and the conditions.",
        commonlyMissed: true,
        trap:
          "Assuming buses simply run 10 mph under the car limit produces 55 on a 65 mph road by luck and 60 on a 70 mph road by error.",
        excerptKey: "speed-70-freeway",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Speed limits",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_05",
        topic: "parking",
        question:
          "At a Michigan intersection with no crosswalk painted, how far back from the intersection must you park?",
        choices: ["20 feet", "15 feet", "25 feet", "30 feet"],
        correctIndex: 1,
        explanation:
          "Where there is no marked crosswalk the clearance from the intersection is 15 feet. Where a crosswalk is marked, the figure rises to 20 feet from the crosswalk.",
        context:
          "The pair of numbers is what makes this awkward: the paint changes both the measuring point and the distance. Michigan's stop sign, traffic light and flashing beacon clearance is different again at 30 feet, and the hydrant clearance is 15 feet, which is easy to confuse with the unmarked-intersection figure.",
        commonlyMissed: true,
        trap:
          "Carrying the 20-foot crosswalk figure over to an unmarked junction is close enough to feel right and wrong by five feet in the wrong direction.",
        excerptKey: "park-crosswalk-20-feet",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking violations",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_06",
        topic: "safety",
        question:
          "Speeds are high and the road is wet. What following distance does Michigan suggest?",
        choices: [
          "The usual three to four seconds",
          "Two seconds, so you are not obstructing",
          "One car length for every 10 mph",
          "Up to six seconds or more if necessary",
        ],
        correctIndex: 3,
        explanation:
          "Michigan asks you to extend the three to four second baseline up to six seconds or more when speeds rise or conditions turn adverse.",
        context:
          "The gap is measured in time rather than distance because time absorbs speed automatically: at 70 mph six seconds is a much longer stretch of road than at 35. Add to that a scan 20 to 30 seconds ahead, and at least twice the normal following distance in rain, and the picture is one of steadily buying more room as conditions deteriorate.",
        trap:
          "Keeping the fine-weather gap in the wet halves the margin exactly when stopping distances are growing.",
        excerptKey: "following-distance-6",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Stopping distances",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_07",
        topic: "signals",
        question: "A solid RED ARROW is showing for your turn. What may you do?",
        choices: [
          "Stop, and wait - you may not turn until the signal changes",
          "Stop, then turn if the way is clear",
          "Turn, yielding to oncoming traffic",
          "Treat it as a flashing red and proceed after stopping",
        ],
        correctIndex: 0,
        explanation:
          "A solid red arrow prohibits the turn outright. You stop and wait for the signal to change - there is no turn-on-red equivalent for a red arrow.",
        context:
          "The four-lens left-turn head runs solid red for stop, solid yellow as a warning that the phase is ending, flashing yellow for a permitted turn on a gap, and solid green for a protected turn. The solid red arrow is the one indication in that sequence that gives you no discretion at all.",
        trap:
          "The right turn on red habit tempts drivers to treat a red arrow as a stop sign. It is not one.",
        excerptKey: "solid-red-arrow",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Flashing yellow arrow left-turn signal head",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_08",
        topic: "impairment",
        question:
          "A Michigan driver reaches nine points and is called in for an interview about their driving. They do not attend. What happens?",
        choices: [
          "The licence is suspended immediately",
          "Nothing until they reach 12 points",
          "Three more points are added to the record",
          "The interview is rescheduled once, then waived",
        ],
        correctIndex: 2,
        explanation:
          "Failing to appear for the nine-point interview adds three points to the record, which is enough on its own to take a driver from nine to the twelve-point reexamination threshold.",
        context:
          "Michigan therefore has two escalation points rather than one. At nine points the Secretary of State may call a driver in for an interview about their driving ability and record. At twelve points within two years, or after six or more one-point violations, a driver assessment reexamination is required.",
        commonlyMissed: true,
        trap:
          "Ignoring the letter looks like a way of delaying the process. It is the fastest route to the reexamination threshold.",
        excerptKey: "points-nine-interview",
        sourceLabel: "Michigan Vehicle Code - MCL 257.320a(6)",
        sourceUrl: MCL_320A,
      },
      {
        id: "mi_s5_09",
        topic: "sharing",
        question:
          "A road has a marked bicycle lane, but the cyclist ahead is riding in the general traffic lane. Is that permitted?",
        choices: [
          "No - a marked bike lane must be used where one exists",
          "Only when the bike lane is obstructed",
          "Yes - cyclists are not required to use a bicycle lane",
          "Only when the cyclist is about to turn right",
        ],
        correctIndex: 2,
        explanation:
          "Michigan does not compel cyclists to use a bicycle lane. They may leave it to turn left or to avoid hazards, and they may ride anywhere in the general lane while travelling with traffic.",
        context:
          "The corresponding duty falls on drivers: do not use the bike lane as a right-turn lane, look for riders coming up on your right before turning or pulling off the road, and leave at least 3 feet when passing. Green paint in a bike lane marks a spot where conflicts are especially likely, usually a junction or driveway.",
        trap:
          "The presence of the lane feels like an instruction to the rider. It is a facility, not a requirement.",
        excerptKey: "bicycle-not-required-lane",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_10",
        topic: "emergencies",
        question:
          "Traffic is backed up beyond a railroad crossing. How much space must you have on the far side before you cross the tracks?",
        choices: [
          "One car length",
          "Enough to clear the far side by at least 6 feet",
          "Enough for your vehicle plus 3 feet",
          "Enough to see the next signal",
        ],
        correctIndex: 1,
        explanation:
          "Michigan tells you never to cross unless there is room to clear the far side of the tracks by at least 6 feet.",
        context:
          "Six feet is not arbitrary: trains overhang the rails by at least three feet on each side and loads can extend further still. The related figures come from the same section - stop no more than 50 feet and no less than 15 feet from the tracks when a train is coming, and expect about 20 seconds between the gates activating and the train arriving.",
        trap:
          "Judging it by whether the car fits between the rails and the queue misses the overhang entirely.",
        excerptKey: "railroad-clear-6-feet",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Grade crossing safety tips",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_11",
        topic: "signs",
        question: "What does a fluorescent PINK sign mean in Michigan?",
        choices: [
          "A school zone is ahead",
          "An incident, emergency or unplanned event has disrupted traffic",
          "Long-term road construction is under way",
          "A pedestrian crossing is ahead",
        ],
        correctIndex: 1,
        explanation:
          "Fluorescent pink marks an incident, emergency or other unplanned event. It guides traffic around or through an area that was normal an hour ago.",
        context:
          "Michigan's two fluorescent colours divide the work between them. Pink is for incidents - crashes, spills, unplanned closures - while fluorescent yellow-green flags school, pedestrian and bicycle crossings. Orange remains the colour for planned construction and maintenance, which is what makes pink such a strong signal that something unexpected has happened.",
        trap:
          "Pink is easily filed with orange as another roadworks colour, which drops the specific message that this was not planned.",
        excerptKey: "sign-color-fluorescent-pink",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign colors",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_12",
        topic: "rules",
        question:
          "Which vehicles must stop at a Michigan railroad crossing even when there is no stop sign and no crossing signal?",
        choices: [
          "Any vehicle towing a trailer",
          "Vehicles over 10,000 pounds",
          "School buses, passenger-carrying vehicles for hire, gasoline trucks and other hazardous-material carriers",
          "Only school buses",
        ],
        correctIndex: 2,
        explanation:
          "Unless clearly marked otherwise, school buses, vehicles carrying passengers for hire, gasoline trucks and other hazardous-material carriers must stop and check that no train is coming at every crossing.",
        context:
          "The obligation is about consequences rather than about the crossing: a bus full of children or a tanker of fuel is not something you want to discover a train beside. For everyone else the rule is to slow, look both ways, and stop only where a stop sign, a signal or an approaching train requires it.",
        trap:
          "Assuming only school buses carry the duty misses the fuel tankers and passenger carriers that share it.",
        excerptKey: "railroad-required-stop-vehicles",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Railroad crossings",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_13",
        topic: "licensing",
        question:
          "What is the minimum age to start Segment 1 of Michigan driver education?",
        choices: [
          "14 years exactly",
          "14 years and 8 months",
          "14 years and 9 months",
          "15 years",
        ],
        correctIndex: 1,
        explanation:
          "Segment 1 opens at 14 years and 8 months, with a parent or guardian's permission. The Level 1 Learner's License follows one month later at 14 years and 9 months.",
        context:
          "The one-month gap exists because Segment 1 must be under way before the licence can be issued: it takes 24 hours of classroom instruction, six hours behind the wheel, four hours of observation and a state exam score of at least 70 per cent. The subsequent gates are the skills test at 15, Level 2 at 16, and Level 3 at 17.",
        trap:
          "The two 14-year figures are one month apart and get swapped constantly. 14 years 9 months is the licence, not the course.",
        excerptKey: "segment-1-age",
        sourceLabel: "What Every Driver Must Know - Chapter 1, Graduated Driver Licensing",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_14",
        topic: "rightOfWay",
        question:
          "You arrive at an intersection showing a flashing yellow arrow for your turn. What is your obligation?",
        choices: [
          "None, since a flashing yellow arrow is a protected turn",
          "Stop first, then turn",
          "Wait for the arrow to go solid green",
          "Yield to traffic before completing your turn",
        ],
        correctIndex: 3,
        explanation:
          "The flashing yellow arrow is a permitted turn, so the obligation is to yield. Oncoming traffic has a green light and keeps the right of way.",
        context:
          "Michigan lists it among the situations where a driver must yield at an intersection, alongside a green light that has just changed, a stop sign, a flashing red, a malfunctioning signal and a T-intersection with no controls. The head was introduced because separating permitted from protected turns reduces crashes at exactly this movement.",
        trap:
          "Any arrow reads as a dedicated phase. The flashing yellow one gives you permission to turn, not priority.",
        excerptKey: "flashing-yellow-arrow-yield",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Right of way at intersections",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_15",
        topic: "speed",
        question:
          "You are caught doing 20 mph over the limit inside a Michigan work zone. How many points?",
        choices: ["Three", "Four", "Six", "Five"],
        correctIndex: 3,
        explanation:
          "Exceeding a work zone limit by more than 15 mph is a five-point violation, a tier that exists nowhere else on the Michigan scale.",
        context:
          "Michigan's ordinary speeding scale tops out at four points for anything more than 15 mph over. The work zone version adds a step above it, so the same 20 mph over is four points on an ordinary road and five inside the zone, with the fine doubled as well.",
        commonlyMissed: true,
        trap:
          "Six points is where people go for a serious speeding offence, and Michigan reserves six for reckless driving, drink-driving and leaving a crash scene.",
        excerptKey: "points-work-zone-five",
        sourceLabel: "Michigan Vehicle Code - MCL 257.320a(1)(g)",
        sourceUrl: MCL_320A,
      },
      {
        id: "mi_s5_16",
        topic: "safety",
        question:
          "How much space does Michigan recommend between a driver's breastbone and the centre of the steering wheel?",
        choices: ["4 inches", "6 inches", "At least 10 inches", "At least 18 inches"],
        correctIndex: 2,
        explanation:
          "Michigan recommends at least 10 inches between the centre of your breastbone and the centre of the steering wheel, so that a deploying airbag has room to inflate.",
        context:
          "It sits with the rest of the airbag guidance: children 12 and under belong in the rear, a rear-facing child seat may only go in front with the passenger airbag deactivated, and a belt is still the primary restraint since airbags do little in rollovers and side and rear impacts. A pregnant driver should sit as far back from the airbag as she comfortably can.",
        trap:
          "Sitting close for better pedal reach is a common adjustment and it puts the chest inside the airbag's deployment zone.",
        excerptKey: "air-bag-10-inches",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Air bags",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_17",
        topic: "parking",
        question:
          "A van-accessible disability space has a blue-striped hatched area beside it. What is that area for?",
        choices: [
          "Overflow parking for motorcycles",
          "A loading zone for any vehicle",
          "Parking for vehicles displaying any disability placard",
          "The wheelchair lift and ramp - it must be kept clear",
        ],
        correctIndex: 3,
        explanation:
          "The blue-striped area is working space for a van's wheelchair lift and ramp. Parking on it can trap the person the space exists for inside their vehicle.",
        context:
          "Van-accessible bays are wider than standard disability spaces for precisely this reason. The wider rules go with them: you or a passenger must have a qualifying disability, the vehicle must display a disability plate or placard, and free parking requires the additional yellow free-parking sticker. Blocking ramps and dropped kerbs is prohibited for the same reason.",
        trap:
          "Hatched paint reads as spare space rather than as a bay. It is the most functionally important part of the parking area.",
        excerptKey: "van-accessible-blue-stripes",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Van-accessible disability parking",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_18",
        topic: "sharing",
        question: "What is an autocycle under Michigan law?",
        choices: [
          "A three-wheeled motorcycle with seat belts, roll protection, a steering wheel and no straddle seat",
          "A motorcycle fitted with an enclosed sidecar",
          "A four-wheeled quad approved for road use",
          "An electric moped with automatic transmission",
        ],
        correctIndex: 0,
        explanation:
          "An autocycle is legally a motorcycle, but one with three wheels, safety belts, a roll bar or roll hoops, a steering wheel and no straddle seat.",
        context:
          "Because the vehicle is a motorcycle in law and a small car in appearance, it is easy to misjudge on the road. Michigan asks drivers to give it the same room and attention as a motorcycle, especially at junctions, in heavy traffic and when turning - the same places where riders of every kind are hardest to see.",
        trap:
          "A steering wheel and seat belts make it look like a car. Its legal class, and the visibility problems that come with a narrow profile, are those of a motorcycle.",
        excerptKey: "autocycle",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Autocycles",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_19",
        topic: "signals",
        question:
          "In a five-section doghouse signal, the plain green light is lit but the green arrow is not. What does that permit?",
        choices: [
          "A protected turn, with all conflicting traffic stopped",
          "No turn at all until the arrow lights",
          "A turn only after coming to a complete stop",
          "The turn, once oncoming traffic has cleared",
        ],
        correctIndex: 3,
        explanation:
          "A lit green circle without the arrow means the turn is permitted but not protected. You may complete it once oncoming traffic has cleared.",
        context:
          "The doghouse head packs both states into one signal: green arrow for a protected turn with conflicting traffic held on red, green circle for a permitted turn on a gap you judge. Yellow in either form means the phase is ending, and if you are already inside the intersection you complete the turn with caution rather than stopping.",
        trap:
          "Green is green to most drivers. In this head the arrow is the entire difference between protected and permitted.",
        excerptKey: "doghouse-green-light",
        sourceLabel: "What Every Driver Must Know - Chapter 5, The 5-section-head signal",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_20",
        topic: "impairment",
        question:
          "How much marijuana may an adult of 21 or over lawfully transport in a vehicle in Michigan?",
        choices: [
          "Any amount, since possession is legal",
          "2.5 ounces or less, of which no more than 15 grams may be concentrate",
          "1 ounce or less, with no concentrate at all",
          "Only what is in a sealed dispensary bag",
        ],
        correctIndex: 1,
        explanation:
          "The transport limit is 2.5 ounces or less for an adult of 21 or over, and no more than 15 grams of that may be in concentrate form.",
        context:
          "Transporting it lawfully is a narrow permission with several hard edges around it. Driving under the influence of marijuana remains an offence carrying the same penalties as alcohol, consuming it while operating a vehicle is prohibited, drivers and passengers may not smoke in the passenger area on a public way, and taking any amount into Canada is illegal.",
        trap:
          "Legal to possess is heard as unlimited to carry. The quantity cap and the concentrate sub-limit are separate rules.",
        excerptKey: "marijuana-transport-limit",
        sourceLabel: "What Every Driver Must Know - Chapter 2, Alcohol and drugs",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_21",
        topic: "emergencies",
        question:
          "Your tyre blows out and you get the car onto the shoulder of a Michigan freeway. What does the state generally advise?",
        choices: [
          "Change the wheel quickly while traffic is light",
          "Stand on the far side of the barrier and wait",
          "Walk to the nearest exit for help",
          "Stay in the car with your seat belt buckled until help arrives",
        ],
        correctIndex: 3,
        explanation:
          "Michigan's general advice for a roadside emergency is to stay in the vehicle with the seat belt buckled until help arrives.",
        context:
          "The state runs a public campaign on this because of the crash record: over one five-year period about a tenth of all pedestrian traffic deaths involved a roadside emergency. The manual adds that a professional with the right training and equipment should deal with the disabled vehicle, and it specifically advises against getting out to change a flat tyre.",
        trap:
          "Getting out feels safer than sitting in a car beside fast traffic. The figures say the opposite.",
        excerptKey: "roadside-stay-in-car",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Emergency situations",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_22",
        topic: "rules",
        question:
          "A Michigan HOV lane is operating during its posted peak hours. Who may use it?",
        choices: [
          "Vehicles with two or more occupants, and motorcycles at any time",
          "Vehicles with three or more occupants only",
          "Any vehicle, provided it maintains the minimum speed",
          "Commercial vehicles and buses only",
        ],
        correctIndex: 0,
        explanation:
          "Michigan sets the HOV threshold at two or more occupants during the posted hours, and motorcycles may use the lane at any time. Outside those hours the lane is open to everyone.",
        context:
          "The restriction is therefore time-limited rather than permanent, which is what catches drivers out in both directions - people avoid an empty lane outside peak hours and people drift into a restricted one during them. The general lane rules still apply: slower traffic keeps right, and weaving between lanes to make progress is illegal.",
        trap:
          "Three-plus is the threshold on some HOV systems elsewhere. Michigan's is two.",
        excerptKey: "hov-lanes",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Freeway driving",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_23",
        topic: "signs",
        question: "A warning sign reads TWO-WAY TRAFFIC. What does it mean?",
        choices: [
          "Two-way traffic begins - keep to the right",
          "The road ahead carries a contraflow bus lane",
          "Traffic ahead alternates one direction at a time",
          "A two-lane bridge is ahead",
        ],
        correctIndex: 0,
        explanation:
          "It marks the point where two-way running begins, and the instruction is to keep to the right so that oncoming traffic has its own side.",
        context:
          "It is the mirror of the DIVIDED HIGHWAY ENDS sign, which warns that a median is about to disappear. Both exist because the change from one-way or divided running to two-way traffic is the moment a habitual lane position becomes a head-on risk.",
        trap:
          "It is easy to read as a warning about a junction. What it warns about is the direction of the traffic you are about to meet.",
        excerptKey: "sign-two-way-traffic",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_24",
        topic: "licensing",
        question:
          "What bodily injury liability limits apply by default to a Michigan auto policy where the insured has made no other choice?",
        choices: [
          "$20,000 per person and $40,000 per accident",
          "$250,000 per person and $500,000 per accident",
          "$50,000 per person and $100,000 per accident",
          "$100,000 per person and $300,000 per accident",
        ],
        correctIndex: 1,
        explanation:
          "Since July 2020 Michigan's default residual bodily injury limits have been $250,000 per person and $500,000 per accident, together with $10,000 for property damage.",
        context:
          "The default is not the floor. An insured may sign a form choosing lower limits, but not below $50,000 per person and $100,000 per accident, and the insurer must set out the risks and prices of each option first. Michigan's personal injury protection cover works the same way, with six levels available and unlimited applying by default if no choice is made.",
        commonlyMissed: true,
        trap:
          "20/40 was Michigan's minimum for decades and it is still the number people quote. The 2019 reform replaced it.",
        excerptKey: "liability-limits-default",
        sourceLabel: "Michigan Insurance Code - MCL 500.3009(1)(a)",
        sourceUrl: MCL_3009,
      },
      {
        id: "mi_s5_25",
        topic: "safety",
        question:
          "A parent needs to feed an infant during a Michigan car journey. What does the law say?",
        choices: [
          "It is permitted if the vehicle is on a road posted below 35 mph",
          "It is permitted if another adult supervises",
          "Removing the child from the car seat to nurse while the vehicle is moving is prohibited",
          "It is permitted provided the parent is belted",
        ],
        correctIndex: 2,
        explanation:
          "Michigan specifically prohibits taking a child out of a car seat to nurse while the vehicle is in motion. The car has to be stopped somewhere safe first.",
        context:
          "It sits inside the child passenger safety law, which requires a car seat or booster until a child reaches 8 years or 4 feet 9 inches, whichever comes first, and puts children under 4 in a rear seat where the vehicle has one. The manual is also blunt about the related habits: never hold a child on your lap, and never buckle two people into one belt.",
        trap:
          "It reads as a safety recommendation rather than a legal prohibition. Michigan writes it into the law.",
        excerptKey: "nursing-while-moving",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Protecting children and teens",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_26",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a white cane is at the kerb. What does Michigan law require of you?",
        choices: [
          "Stop or yield the right of way",
          "Sound your horn to signal that you have seen them",
          "Slow down and continue if they have not stepped out",
          "Yield only where a crosswalk is marked",
        ],
        correctIndex: 0,
        explanation:
          "Michigan requires drivers to stop or yield for a pedestrian with a white cane or a guide dog. The obligation does not depend on markings or signals.",
        context:
          "The manual adds a second instruction that is easy to overlook: avoid sounding the horn or revving the engine, because those noises mask the audible cues a person with a visual impairment is using to judge traffic. Michigan also asks drivers to allow extra time generally for older pedestrians, children and people with disabilities.",
        trap:
          "The horn feels helpful and actively removes the information the pedestrian is relying on to cross.",
        excerptKey: "pedestrian-white-cane",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_27",
        topic: "parking",
        question:
          "A Michigan city has parking rules stricter than the state's. Do they apply to you?",
        choices: [
          "No - state law overrides local parking ordinances",
          "Only if you are a resident of that city",
          "Yes - communities may pass stricter local ordinances, signed at the city limits",
          "Only where the street is not a state trunk line",
        ],
        correctIndex: 2,
        explanation:
          "Michigan lets communities pass parking ordinances for local streets that are stricter than state law, with signs posted at the city limits.",
        context:
          "That is why the state figures are floors rather than the whole story: 15 feet from a hydrant statewide can be more in a particular city. The owner of an illegally parked vehicle is responsible for the tickets, unless the vehicle is leased, in which case the responsibility follows the lessee.",
        trap:
          "Knowing the state clearances by heart is not a defence where a signed local ordinance is tighter.",
        excerptKey: "local-parking-ordinances",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking violations",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_28",
        topic: "speed",
        question:
          "A driver causes a serious injury in a Michigan work zone. What is the maximum exposure the manual sets out?",
        choices: [
          "A fine of up to $7,500 and imprisonment of up to 15 years",
          "A fine of up to $1,000 and 93 days in jail",
          "A fine of up to $5,000 and five years",
          "Doubled fines and six points, with no custodial term",
        ],
        correctIndex: 0,
        explanation:
          "Causing injury or death to any person in a work zone exposes the driver to fines of up to $7,500 and imprisonment of up to 15 years.",
        context:
          "That penalty sits on top of the ordinary work zone regime rather than replacing it: doubled fines for every moving violation in the zone, and speeding points at three, four or five depending on how far over the limit you were. Michigan also treats failure to yield causing the death or injury of a construction worker as a six-point offence in its own right.",
        trap:
          "The doubled fine is the penalty most drivers know about, and it is the least of what a work zone injury carries.",
        excerptKey: "work-zone-injury-penalty",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Construction zones",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_29",
        topic: "sharing",
        question:
          "You stop past the white stop line at a junction and a lorry is waiting to turn right into your road. What is the consequence?",
        choices: [
          "None, provided you are not in the crosswalk",
          "The lorry must wait until the lights change",
          "The lorry may be unable to complete its turn without hitting you",
          "You have the right of way because you stopped first",
        ],
        correctIndex: 2,
        explanation:
          "Michigan explains the stop line in exactly these terms: stop past it and a commercial vehicle may not be able to complete its turn without hitting you.",
        context:
          "Trucks swing wide to the left before turning right, so the space in front of the stop line is the space the trailer needs. It is one of several manoeuvres where the geometry of a large vehicle governs: never cross behind one that is backing, do not linger in its blind spots, and remember it needs about 400 feet to stop at 55 mph where a car needs 130.",
        trap:
          "Creeping forward for a better view of cross traffic is the reason drivers end up over the line, and it is where the trailer sweeps.",
        excerptKey: "truck-stopping-line",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Commercial vehicles",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_30",
        topic: "signals",
        question:
          "Under the Michigan Vehicle Code, where must traffic facing a steady yellow indication stop?",
        choices: [
          "At the far side of the intersection",
          "Level with the signal head",
          "Before the nearest crosswalk at the intersection, or at a limit line where one is marked",
          "Anywhere within the intersection, provided the vehicle clears it",
        ],
        correctIndex: 2,
        explanation:
          "The statute requires a stop before the nearest crosswalk at the intersection, or at a marked limit line. Only where the stop cannot be made in safety may a vehicle be driven cautiously through.",
        context:
          "The wording is stronger than most drivers expect, and the manual mirrors it: you are required to stop on a yellow light, with the safety exception as the only way through. It is the same stopping point used for a steady red, which is why the decision has to be made early enough that the choice is still yours.",
        commonlyMissed: true,
        trap:
          "Treating yellow as discretionary is the near-universal habit. Michigan's statute puts the obligation to stop first and the exception second.",
        excerptKey: "yellow-light-statute",
        sourceLabel: "Michigan Vehicle Code - MCL 257.612(1)(b)",
        sourceUrl: MCL_612,
      },
      {
        id: "mi_s5_31",
        topic: "impairment",
        question:
          "A Michigan driver is charged with operating while intoxicated and had a 10-year-old in the car. What does the child's presence add?",
        choices: [
          "A separate criminal offence for operating with a person under 16 in the vehicle",
          "Nothing - the age of passengers is not part of the offence",
          "An additional two points only",
          "A civil infraction for the passenger's guardian",
        ],
        correctIndex: 0,
        explanation:
          "Michigan makes it a separate crime to operate in violation of the drink and drug driving provisions while a person under 16 is in the vehicle, with its own fine and custodial exposure.",
        context:
          "The threshold is the passenger's age rather than any relationship to the driver. It compounds an already severe picture: operating while intoxicated is six points, stays on the driving record permanently, and at 0.17 or above moves into the enhanced high-BAC offence. The manual notes the same escalation for driving under the influence of marijuana.",
        commonlyMissed: true,
        trap:
          "It reads like an aggravating factor at sentencing. In Michigan it is a distinct offence layered on top.",
        excerptKey: "owi-child-passenger",
        sourceLabel: "Michigan Vehicle Code - MCL 257.625(7)(a)",
        sourceUrl: MCL_625,
      },
      {
        id: "mi_s5_32",
        topic: "emergencies",
        question:
          "You notice a railroad crossing gate is broken, with no train in sight. What is the blue sign near the crossing for?",
        choices: [
          "It shows the maximum speed for crossing the tracks",
          "It carries the railroad's emergency number and the crossing's identification number",
          "It marks the boundary of railroad property",
          "It identifies the crossing as passive, with no active signals",
        ],
        correctIndex: 1,
        explanation:
          "The blue Emergency Notification System sign carries a phone number together with the crossing's US DOT number, so you can report an emergency or a faulty warning device to the railroad.",
        context:
          "Calling it can achieve something no other call can: railroad staff may be able to slow, stop or divert an approaching train. That is why the sequence for a vehicle stuck on the tracks with no train coming is to get everyone clear, ring the number on the ENS sign with the crossing identification, and then call 911. If a train is coming or the gates are down, everybody gets clear and you call 911 straight away.",
        trap:
          "Calling 911 first feels correct and costs the minutes in which the railroad could still have stopped the train.",
        excerptKey: "railroad-ens-sign",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Emergency Notification System sign",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_33",
        topic: "rules",
        question:
          "A paved cut-through in a Michigan median carries no signs prohibiting its use. May you turn left through it?",
        choices: [
          "Yes - a paved cut-through with no prohibiting signs may be used for a left turn",
          "No - all median crossings are prohibited",
          "Only when making a U-turn",
          "Only if it is marked with a left-turn arrow",
        ],
        correctIndex: 0,
        explanation:
          "Michigan permits a left turn through a paved cut-through where no signs prohibit it. What remains prohibited is driving across median strips and through barriers.",
        context:
          "The distinction is between a constructed opening and improvised routes over the median itself. On freeways the constructed openings are almost always emergency crossovers reserved for police, emergency and maintenance vehicles, and those are signed as AUTHORIZED VEHICLES ONLY. The absence of a sign is what makes a surface street cut-through usable.",
        trap:
          "The freeway ban on crossing medians is the well-known rule, and it leads drivers to treat every cut-through as forbidden.",
        excerptKey: "cut-through-left-turn",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Lane usage",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_34",
        topic: "licensing",
        question:
          "What point accumulation triggers a driver assessment reexamination in Michigan?",
        choices: [
          "12 or more points within a two-year period, or six or more one-point violations",
          "9 or more points within a two-year period",
          "12 or more points at any time",
          "Six or more points within one year",
        ],
        correctIndex: 0,
        explanation:
          "Twelve or more points inside a two-year window requires a reexamination, and so does an accumulation of six or more one-point violations.",
        context:
          "The reexamination is not automatic loss of the licence - a driver analyst reviews the record and discusses the driving, and the outcome may be restrictions, suspension or revocation. Other triggers exist independently: a fatal crash where the report indicates negligence or drinking, three or more injury or damage crashes in two years, or a conviction for violating licence restrictions.",
        commonlyMissed: true,
        trap:
          "The nine-point interview is a different, earlier stage. Reexamination is the twelve-point one.",
        excerptKey: "points-reexamination-trigger",
        sourceLabel: "What Every Driver Must Know - Chapter 2, Michigan's point system",
        sourceUrl: HB,
      },
      {
        id: "mi_s5_35",
        topic: "safety",
        question:
          "A parent leaves a 4-year-old in the car with a 14-year-old sibling while running into a shop. What is the position in Michigan?",
        choices: [
          "An offence - no child under 6 may be left in a vehicle for any reason",
          "An offence unless the vehicle is locked and in sight",
          "Not a violation - the supervising sibling is at least 13",
          "Not a violation only if the trip lasts under five minutes",
        ],
        correctIndex: 2,
        explanation:
          "Michigan's unattended child law does not bite where the child is under the supervision of someone aged 13 or over who is not legally incapacitated.",
        context:
          "The offence itself is leaving a child under 6 unattended where the time or the circumstances create an unreasonable risk of harm, so the age of the child, the presence of a supervisor and the surrounding conditions all matter. The manual is careful to add that legal and safe are not the same thing: it is never safe to leave children or pets alone in a vehicle.",
        trap:
          "Assuming any adult absence is automatically an offence overstates it, and assuming a short trip is always fine understates it.",
        excerptKey: "children-unattended-supervisor",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Children left unattended in vehicles",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Michigan Exam Simulation",
    difficulty: "exam",
    description:
      "A full-length run at the format the Secretary of State actually uses: signs and rules interleaved, no hints, and the mix of everyday rules and Michigan-specific detail the Operator and Signs sections draw on.",
    questions: [
      {
        id: "mi_s6_01",
        topic: "signs",
        question: "Which shape does Michigan use for school signs?",
        choices: [
          "A five-sided pentagon",
          "A yellow diamond",
          "A downward triangle",
          "A vertical rectangle",
        ],
        correctIndex: 0,
        explanation:
          "The pentagon is Michigan's school shape. It is one of nine basic shapes, each of which carries a fixed meaning before you read a word of the sign.",
        context:
          "The full set runs octagon for STOP, triangle for YIELD, diamond for warning, pentagon for school, pennant for warning and no passing, horizontal rectangle for directions, vertical rectangle for law, and round and crossbuck for railroad crossings. Learning the nine shapes is what lets you handle a sign you have never seen before, which is exactly what the Signs section tests.",
        trap:
          "School zones also use fluorescent yellow-green colouring, which makes people answer by colour. The shape question has a different answer.",
        excerptKey: "sign-shapes",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic signs",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_02",
        topic: "signals",
        question: "What does a steady green light mean in Michigan?",
        choices: [
          "Proceed at the posted speed without delay",
          "Proceed with caution after checking for pedestrians and vehicles",
          "Proceed only if you can clear the intersection before it changes",
          "Proceed, and turning traffic must yield to you",
        ],
        correctIndex: 1,
        explanation:
          "Green means you may go, after checking for pedestrians and vehicles. Michigan words it as proceeding with caution rather than simply proceeding.",
        context:
          "The caution has practical content. You still yield to anyone still in the intersection when the light changes, to pedestrians crossing your path, and to oncoming traffic if you are turning left on a plain green rather than a green arrow. Michigan's driving skills test scores the reverse fault too - stopping unnecessarily at a green light is marked against you.",
        trap:
          "Green reads as a clear road. It only means the conflicting traffic has been stopped, which is not the same thing.",
        excerptKey: "signal-green-light",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic signals",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_03",
        topic: "rules",
        question:
          "A driver is moving repeatedly between lanes to get through slow traffic on a Michigan road. What is the position?",
        choices: [
          "Weaving from lane to lane to speed through traffic is illegal",
          "It is legal provided each lane change is signalled",
          "It is legal on roads with three or more lanes",
          "It is legal outside city limits",
        ],
        correctIndex: 0,
        explanation:
          "Michigan states plainly that weaving from lane to lane to speed through traffic is illegal, regardless of whether each individual change is signalled.",
        context:
          "It sits in the lane-usage rules with the rest of the discipline expected on multi-lane roads: slow vehicles keep right, driving across median strips and through barriers is illegal, and controlled-access roads may only be entered and left at posted entrances and exits. The manual also lists weaving among aggressive driving behaviours.",
        trap:
          "Signalling each move makes the manoeuvre look compliant. The offence is the pattern, not the individual lane change.",
        excerptKey: "weaving-illegal",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Lane usage",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_04",
        topic: "rightOfWay",
        question: "You approach a YIELD sign. What does Michigan expect?",
        choices: [
          "Stop completely in every case, then proceed",
          "Maintain speed unless traffic is actually crossing",
          "Sound your horn and proceed",
          "Slow down, check for traffic and be prepared to stop",
        ],
        correctIndex: 3,
        explanation:
          "A yield sign asks you to slow, check for traffic and be ready to stop. Stopping is required whenever the traffic you must give way to is there.",
        context:
          "Yielding and stopping are different obligations. A stop sign requires the wheels to stop every time; a yield requires you to give way, and to stop only if that is what giving way takes. Michigan's driving skills test marks unnecessary stopping at yield signs, flashing yellow lights and green signals as a fault in its own right.",
        trap:
          "Stopping every time at a yield feels cautious and is scored against you on the road test, as well as risking a rear-end collision.",
        excerptKey: "yield-sign-approach",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Be prepared to yield",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_05",
        topic: "speed",
        question:
          "Which of these roads carries a 55 mph limit in Michigan without any sign being posted?",
        choices: [
          "A residential street inside a platted subdivision",
          "A road inside a mobile home park",
          "A two-lane county highway that is not a designated freeway",
          "A city street through a business district",
        ],
        correctIndex: 2,
        explanation:
          "Michigan's 55 mph default covers all streets that are not designated freeways and all highways, unless something else is posted.",
        context:
          "The other defaults are narrower and lower: 15 mph in mobile home parks and some municipal parks, and 25 mph in platted subdivisions and condominium complexes. Business districts, park roads and school and hospital zones vary enough that Michigan signs them rather than setting a default, so those need reading rather than remembering.",
        trap:
          "The word highway makes people think freeway. Here it covers ordinary two-lane county roads as well.",
        excerptKey: "speed-55-default",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Speed limits",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_06",
        topic: "parking",
        question:
          "You are parking on a slope where there is no kerb at all. What do you do with the wheels?",
        choices: [
          "Leave them straight and set the parking brake",
          "Turn them so the vehicle would not roll into traffic",
          "Turn them toward the road, so the car stays visible",
          "It makes no difference without a kerb",
        ],
        correctIndex: 1,
        explanation:
          "With no kerb to catch the tyre, you point the wheels so that any roll takes the vehicle away from the traffic lane rather than into it.",
        context:
          "The kerbed versions are fixed: wheels toward the kerb facing downhill, away from the kerb facing uphill. Without a kerb the principle replaces the recipe. In every case the parking brake goes on, because Michigan is explicit that the transmission is not designed to hold a vehicle.",
        trap:
          "Memorising toward-downhill and away-uphill leaves you stuck when there is no kerb. The rule is about where the car would end up.",
        excerptKey: "park-no-curb",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking on a hill",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_07",
        topic: "safety",
        question:
          "A Michigan driver has a medical condition that makes wearing a seat belt inadvisable. What must they do?",
        choices: [
          "Notify the Secretary of State when renewing the licence",
          "Display a medical exemption sticker in the windscreen",
          "Nothing - a medical condition is a complete defence",
          "Carry a doctor's statement",
        ],
        correctIndex: 3,
        explanation:
          "A driver exempt from the belt requirement on medical grounds must carry a doctor's statement to that effect.",
        context:
          "The exemption is narrow because the belt law itself is broad: every front seat occupant and every passenger under 16 in any seat must be buckled up, and belt enforcement is primary in Michigan, meaning an officer may stop the vehicle for the belt alone. Airbags are not a substitute, and belts remain the best protection in rollover, side impact and rear-end crashes.",
        trap:
          "Having the condition is not the same as being able to prove it at the roadside. The document is the exemption.",
        excerptKey: "belt-medical-exemption",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Buckle up, it's the law!",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_08",
        topic: "impairment",
        question:
          "Which of these carries FOUR points on a Michigan driving record?",
        choices: [
          "Careless driving",
          "Disobeying a stop sign",
          "Failing to stop for a school bus",
          "Drag racing",
        ],
        correctIndex: 3,
        explanation:
          "Drag racing is a four-point offence, in the same band as impaired driving, driving under 21 with any bodily alcohol content, and exceeding the limit by 16 mph or more.",
        context:
          "Careless driving, disobeying a signal or stop sign, improper passing, failing to stop at a railroad crossing and failing to stop for a school bus all sit in the three-point band. Six points is reserved for the most serious: manslaughter or a felony involving a vehicle, operating while intoxicated, reckless driving, refusing a chemical test, fleeing an officer and leaving a crash scene.",
        commonlyMissed: true,
        trap:
          "Failing to stop for a school bus feels like it must be a top-tier offence. Michigan doubles the fine but sets the points at three.",
        excerptKey: "points-four",
        sourceLabel: "What Every Driver Must Know - Chapter 2, Michigan's point system",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_09",
        topic: "sharing",
        question:
          "There is no sidewalk on a Michigan road. Which side should a pedestrian walk on?",
        choices: [
          "Facing oncoming traffic",
          "With the flow of traffic",
          "Whichever side has the wider shoulder",
          "Either side, provided they wear something reflective",
        ],
        correctIndex: 0,
        explanation:
          "Where there is no sidewalk, pedestrians should face oncoming traffic while walking along the edge of the road, so they can see what is coming.",
        context:
          "Michigan asks drivers to watch both sides of the road for pedestrians rather than only the near side, and to make extra allowance for older people, children and people with disabilities, who may need longer to cross. Walking on a freeway is a separate matter: it is both dangerous and illegal.",
        trap:
          "Walking with traffic on the same side you would drive feels natural and takes away the pedestrian's only warning of an approaching vehicle.",
        excerptKey: "pedestrian-no-sidewalk",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_10",
        topic: "emergencies",
        question: "What must be exchanged between drivers after a crash in Michigan?",
        choices: [
          "Names and phone numbers only",
          "Insurance details only",
          "Names, addresses, driver's licence numbers, registration and insurance information",
          "Nothing, if police attend the scene",
        ],
        correctIndex: 2,
        explanation:
          "Michigan requires the full set: names, addresses, driver's licence numbers, registration details and insurance information from every driver involved.",
        context:
          "The other duties run alongside it. You must not leave the scene, you must help the injured get medical aid, you must move a drivable vehicle off the main roadway where nobody is seriously hurt, and you must notify police if anyone is injured or the property damage exceeds $1,000.",
        trap:
          "Swapping insurance cards feels sufficient and leaves out the licence and registration details you may need if the policy turns out to be invalid.",
        excerptKey: "crash-exchange-information",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Crashes",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_11",
        topic: "licensing",
        question:
          "You fail the written knowledge test at a Michigan Secretary of State office. What happens next?",
        choices: [
          "You may retake it immediately at the same station",
          "You may retake it later the same day after a wait",
          "You must wait 30 days before retaking it",
          "Testing stops and you must rebook for a different day",
        ],
        correctIndex: 3,
        explanation:
          "Failing at an office terminates the testing process for that visit. You have to reschedule and take the test again on a different day.",
        context:
          "The online version is more forgiving on timing - up to two attempts per calendar day, each paying the $6.50 convenience fee - but it is the same test and it has the same two sections. Passing one section online while failing the other means going to a branch office to sit the whole thing again, at no charge.",
        commonlyMissed: true,
        trap:
          "The online allowance of two attempts a day does not carry over to a branch office, where one failure ends the visit.",
        excerptKey: "knowledge-test-failure",
        sourceLabel: "Michigan Secretary of State - New drivers (18 and older)",
        sourceUrl: SOS18,
      },
      {
        id: "mi_s6_12",
        topic: "rules",
        question:
          "What does a solid white line along the right-hand edge of a Michigan road mark, and may you cross it?",
        choices: [
          "A bicycle lane boundary that may be crossed to turn",
          "A parking lane that may be entered at any time",
          "The right edge of the road - and it is illegal to cross a solid white line when passing",
          "A shoulder that may be used to let faster traffic by",
        ],
        correctIndex: 2,
        explanation:
          "The solid white edge line, often called the fog line, marks the right edge of the road. Michigan states that it is illegal to cross a solid white line when passing.",
        context:
          "White lines separate traffic moving the same way, and solidity signals how strong the restriction is: broken white lines between ordinary lanes may be crossed, a single solid white marks the edge or a lane change considered dangerous, and a double solid white forbids crossing entirely. Solid whites are also used at sharp curves and on freeway acceleration and deceleration lanes.",
        commonlyMissed: true,
        trap:
          "Pulling onto the shoulder to let a tailgater past means crossing the fog line, and Michigan separately bars using the shoulder to pass.",
        excerptKey: "solid-white-lines",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Solid white lines",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_13",
        topic: "signals",
        question: "What are the wide white arrows painted along the centre of a traffic lane for?",
        choices: [
          "Marking a lane reserved for buses",
          "Showing where a lane merges",
          "Indicating the direction of a one-way street",
          "Showing which movements are permitted from that lane",
        ],
        correctIndex: 3,
        explanation:
          "Directional arrows painted down the centre of a lane tell you what you may do from it - right turn only, straight ahead, or a combination.",
        context:
          "Getting into the wrong lane is the practical failure here, because Michigan expects the turn to be set up in advance rather than corrected at the junction. The driving skills test scores it directly, marking candidates who enter a turn lane too early or too late, or who straddle or cross lane markings on the approach.",
        trap:
          "Arrows in the lane can look advisory next to a posted sign. They regulate the movement just as a sign does.",
        excerptKey: "directional-arrows",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Directional arrows",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_14",
        topic: "speed",
        question:
          "A Michigan work zone is signed for 45 mph when workers are present, and the site is currently empty. What speed applies?",
        choices: [
          "45 mph, because the sign is posted",
          "45 mph until the equipment has been removed from the site",
          "25 mph, as an inactive site",
          "The normal posted speed for that road, until workers are present",
        ],
        correctIndex: 3,
        explanation:
          "Work zones may limit speeds to 45 mph when workers are present while allowing traffic back to the normally posted speed when they are absent. With the site empty, the normal limit applies.",
        context:
          "The arrangement lets traffic move at full speed when it is safe to do so while requiring drivers to watch for crews and slow down when work is active. What does not switch off with the workers is the rest of the work zone regime: doubled fines for moving violations and the elevated three, four and five point speeding tiers still apply to the zone.",
        trap:
          "Reading the 45 as unconditional is the safe error; treating an empty site as unrestricted is the dangerous one. The sign's wording is what decides.",
        excerptKey: "work-zone-workers-present",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Construction zones",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_15",
        topic: "rightOfWay",
        question:
          "A pedestrian steps out from a private driveway onto the pavement in front of you. What must you do?",
        choices: [
          "Continue - they left a private road and must give way",
          "Yield to them",
          "Yield only if they are already in the roadway",
          "Sound the horn, then proceed",
        ],
        correctIndex: 1,
        explanation:
          "Michigan lists pedestrians crossing from an alley, driveway, building or private road among those a driver must yield to.",
        context:
          "The list is deliberately wide, covering marked and unmarked crosswalks, children near school crossings, people with disabilities, anyone who entered a crossing before the signal changed, and every turn at every intersection. Michigan also asks drivers to watch for pedestrians when they themselves emerge from a driveway or alley, which is the same conflict seen from the other side.",
        trap:
          "Coming off private property feels like it should cost the pedestrian priority. It does not.",
        excerptKey: "pedestrian-from-alley",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Right of way and pedestrians",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_16",
        topic: "signs",
        question: "A sign reads LANE ENDS MERGE LEFT. What does it require of you?",
        choices: [
          "Left-lane traffic must make room by moving over",
          "Both lanes should merge alternately at the taper",
          "The right lane is ending - merge left, yielding to traffic already in the left lane",
          "Traffic in the right lane has priority to the end of the lane",
        ],
        correctIndex: 2,
        explanation:
          "The right lane is finishing, so you merge left and yield the right of way to traffic already in the left lane.",
        context:
          "That yielding duty is the same principle Michigan applies to freeway on-ramps: the driver joining or leaving a lane adjusts speed and position, and the through traffic keeps priority. In construction zones the merging pattern may be signed differently from project to project, so the barrels, signs and hand signals govern rather than habit.",
        trap:
          "Zipper merging is common practice and it is a courtesy, not a right. The vehicle in the ending lane still yields.",
        excerptKey: "sign-lane-ends-merge-left",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_17",
        topic: "parking",
        question:
          "You find a gap on the opposite side of a two-way Michigan street and park facing the wrong way. What is the position?",
        choices: [
          "Parking against the flow of traffic is prohibited",
          "It is permitted on streets under 30 mph",
          "It is permitted outside city limits",
          "It is permitted if the vehicle is within 12 inches of the kerb",
        ],
        correctIndex: 0,
        explanation:
          "Michigan prohibits parking against the flow of traffic. The vehicle must be facing the direction traffic moves on that side of the road.",
        context:
          "It appears on the same no-parking list as double parking, blocking a driveway or crosswalk, parking in a bike lane or at a transit stop, and stopping more than 12 inches from the kerb. Pulling in against the flow means crossing the centre line and rejoining it the same way, both of which put the vehicle across oncoming traffic.",
        trap:
          "An empty street makes it look harmless, and the 12-inch kerb rule can even be satisfied while the offence is committed.",
        excerptKey: "park-against-traffic",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking violations",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_18",
        topic: "sharing",
        question:
          "You are following a truck at night on a Michigan highway. Which headlights should you use?",
        choices: [
          "High beams, so the driver can see you clearly",
          "Low beams",
          "Parking lights, to reduce glare",
          "High beams flashed intermittently",
        ],
        correctIndex: 1,
        explanation:
          "Michigan asks you to use low beams when following a truck or bus at night, because high beams fill the driver's mirrors with glare.",
        context:
          "It is the specific case of a general rule: do not use high beams behind any vehicle, and never use or even flash them within 500 feet of an oncoming vehicle. Following a commercial vehicle already limits how much of the road ahead you can see, so the extra distance and the dipped beams work together.",
        trap:
          "The reasoning that a big vehicle needs more light to see you is backwards. Your high beams blind the driver you are following.",
        excerptKey: "truck-low-beams",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Commercial vehicles",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_19",
        topic: "impairment",
        question: "What does Michigan say about the effect of a single alcoholic drink?",
        choices: [
          "It has no measurable effect on an experienced driver",
          "It affects judgement only above 0.05",
          "Even one drink can impair driving, reaction time, concentration and vision",
          "It is safe provided food is eaten with it",
        ],
        correctIndex: 2,
        explanation:
          "Michigan states that consuming even one drink can impair your ability to drive, slow your reaction time, dull your concentration and cause visual problems.",
        context:
          "That is why the offence of operating while visibly impaired exists below the 0.08 threshold - the number is not the whole test. The manual also stresses that the drink type is irrelevant, since a 12-ounce beer, a 5-ounce glass of wine and a 1.5-ounce shot of spirits all carry the same alcohol, and that only time removes it.",
        trap:
          "Being under the limit is treated as being unaffected. Impairment starts well before the number does.",
        excerptKey: "one-drink-impairs",
        sourceLabel: "What Every Driver Must Know - Chapter 2, Alcohol and drugs",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_20",
        topic: "emergencies",
        question: "When may you stop on a Michigan freeway?",
        choices: [
          "Only in an emergency",
          "Whenever you need to check directions",
          "On the shoulder for up to 10 minutes",
          "Anywhere beyond the white edge line",
        ],
        correctIndex: 0,
        explanation:
          "Michigan permits stopping on a freeway only for an emergency. If you must stop, put the hazard lights on, slow gradually and get right off the pavement as soon as it is safe.",
        context:
          "Everything else about freeway driving assumes continuous movement: there are no intersections or stops, the minimum speed is 55 mph unless posted otherwise, and pedestrians, mopeds, bicycles and small motorcycles are excluded entirely. If you miss an exit you drive to the next one rather than backing up or using a median crossover.",
        trap:
          "A wide shoulder invites a quick stop to check a route. The shoulder is an emergency lane, not a lay-by.",
        excerptKey: "freeway-no-stopping",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Freeway driving",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_21",
        topic: "licensing",
        question: "When does Michigan's Graduated Driver Licensing programme end?",
        choices: [
          "When the driver reaches Level 3",
          "When the driver turns 18",
          "Three years after the Level 1 licence is issued",
          "When probation ends",
        ],
        correctIndex: 1,
        explanation:
          "GDL ends when the driver turns 18. Reaching Level 3 removes the state restrictions, but turning 18 is what ends the programme itself.",
        context:
          "The three stages sit inside that window: Level 1 from about 14 years 9 months, Level 2 from 16, and Level 3 from 17. Probation is a separate programme that runs at least three years for every new driver, teens included, so an 18-year-old who has left GDL may still be on probation.",
        trap:
          "Level 3 and turning 18 are treated as the same milestone. They are different, and probation outlasts both.",
        excerptKey: "gdl-ends-at-18",
        sourceLabel: "What Every Driver Must Know - Chapter 1, Graduated Driver Licensing",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_22",
        topic: "safety",
        question:
          "It is mid-afternoon but heavy snow has cut visibility badly. When does Michigan require headlights?",
        choices: [
          "Only after sunset, whatever the visibility",
          "Only if the wipers are running",
          "Any time there is not enough daylight to see people and vehicles clearly at 500 feet",
          "Any time visibility drops below 1,000 feet",
        ],
        correctIndex: 2,
        explanation:
          "Michigan sets a visibility test alongside the time-of-day rule: headlights must be on whenever there is not enough daylight to see people and vehicles clearly at 500 feet.",
        context:
          "The time-based rule runs from half an hour after sunset to half an hour before sunrise, and the visibility rule operates independently of it, catching fog, snow and heavy rain in daylight. Michigan adds that using only parking lights when headlights are required is illegal, and asks for low beams rather than high in fog, rain or snow.",
        commonlyMissed: true,
        trap:
          "Daytime running lights satisfy the driver's instinct and leave the tail lamps dark, which is the end of the car that matters in falling snow.",
        excerptKey: "headlights-500-feet",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Driving at night",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_23",
        topic: "rules",
        question: "When should you stop inside a Michigan roundabout?",
        choices: [
          "Only when it is the only way to safely avoid a collision or other danger",
          "Whenever a vehicle is waiting to enter",
          "At each exit, to check for pedestrians",
          "Whenever an emergency vehicle approaches",
        ],
        correctIndex: 0,
        explanation:
          "Traffic inside the roundabout has the right of way, so you keep moving unless stopping is the only way to avoid a collision or other danger.",
        context:
          "Stopping unnecessarily inside the circle blocks every entry behind you. The rules that go with it are all about maintaining flow: stay right of the central island, do not change lanes, choose your lane before you enter, and if you miss your exit, go round again rather than stopping or cutting across.",
        trap:
          "Stopping for an approaching emergency vehicle is the one case where the instinct is exactly wrong - you leave at the nearest exit and pull over beyond the circle.",
        excerptKey: "roundabout-do-not-stop",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Roundabouts",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_24",
        topic: "signals",
        question: "What does a red upraised hand on a pedestrian signal mean?",
        choices: [
          "Do not cross the roadway",
          "Cross quickly, the signal is about to change",
          "Wait for a gap in traffic, then cross",
          "The signal is out of service",
        ],
        correctIndex: 0,
        explanation:
          "The red upraised hand, like the words DONT WALK, means do not cross. It is the pedestrian equivalent of a red light.",
        context:
          "The three-stage sequence runs walking figure or WALK to start crossing, a flashing phase for finishing a crossing already begun, and the steady hand or DONT WALK to stop. Whichever phase is showing, the driver's obligation is unchanged: yield to anyone in the crossing.",
        trap:
          "A pedestrian who steps out against the hand is still someone you must not hit, so the signal never converts into permission to proceed through them.",
        excerptKey: "dont-walk-signal",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Pedestrian signals",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_25",
        topic: "signs",
        question:
          "A fluorescent yellow-green pentagon shows two figures walking. What is ahead?",
        choices: [
          "A pedestrian refuge island",
          "A bus stop with a crossing point",
          "A school crossing - drive carefully and obey the crossing guard",
          "A playground set back from the road",
        ],
        correctIndex: 2,
        explanation:
          "The school crossing sign warns of a crossing for children ahead. You drive with care and obey any directions from a school crossing guard.",
        context:
          "Michigan pairs it with the SCHOOL CHILDREN PRESENT sign, which flags that children are in the area generally. Failing to stop for a school bus or disobeying a school crossing guard are both three-point offences, and the fine for the bus violation is doubled.",
        trap:
          "The crossing guard's authority is easy to underrate. Disobeying one carries the same three points as running a stop sign.",
        excerptKey: "sign-school-crossing",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_26",
        topic: "parking",
        question:
          "You have finished parallel parking on a Michigan street. How far from the kerb should the vehicle sit?",
        choices: [
          "Within 18 inches",
          "Within 2 feet",
          "Touching the kerb",
          "No more than 6 to 12 inches",
        ],
        correctIndex: 3,
        explanation:
          "Michigan's parallel parking instructions put the finished position at no more than 6 to 12 inches from the kerb, and the parking law caps it at 12 inches.",
        context:
          "The manoeuvre itself is scored on the driving skills test as one of three basic control exercises, with the parking space sized at your vehicle's length plus six feet. Before opening the door afterwards you check the mirrors and use your right hand, so that the movement turns your shoulder toward oncoming cyclists.",
        trap:
          "18 inches is close enough to look tidy and is outside the legal limit as well as the test standard.",
        excerptKey: "parallel-park-6-12-inches",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parallel parking",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_27",
        topic: "sharing",
        question:
          "Why should you leave extra space behind a motorcyclist in Michigan?",
        choices: [
          "Motorcycles accelerate unpredictably from a standstill",
          "Motorcycles cannot brake as hard as cars",
          "Riders often slow by engine braking and downshifting, which shows no brake lights",
          "Motorcycles must legally keep 100 feet from the vehicle in front",
        ],
        correctIndex: 2,
        explanation:
          "Riders frequently slow by engine braking and downshifting rather than by using the brakes, so the machine sheds speed without ever lighting a brake light.",
        context:
          "Michigan asks for at least three to four seconds behind a motorcyclist, scooter rider or cyclist, and notes that these riders can stop in shorter distances than a car and may swerve suddenly for potholes, pavement joins or railway tracks. Tailgating a rider is illegal as well as dangerous.",
        commonlyMissed: true,
        trap:
          "Watching for brake lights is how most drivers judge the vehicle ahead, and it is precisely the cue a downshifting rider does not give you.",
        excerptKey: "motorcycle-engine-braking",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Specifically about motorcyclists",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_28",
        topic: "safety",
        question:
          "You are tiring on a long drive across Michigan. What does the manual recommend?",
        choices: [
          "Stop and take a 10-minute break at least every two hours",
          "Drink coffee and continue to your destination",
          "Open the windows and turn the radio up",
          "Reduce speed by 10 mph and carry on",
        ],
        correctIndex: 0,
        explanation:
          "Michigan asks for a 10-minute break at least every two hours, and warns against relying on coffee or stay-awake drugs to get you through.",
        context:
          "Freeway fatigue is singled out because the constant hum of wind, tyres and engine is hypnotic on a long trip. The interim measures the manual suggests are about keeping the eyes moving - shifting your gaze between near and far, left and right, and checking the mirrors - but the real answer is stopping, or letting someone else drive.",
        trap:
          "Coffee produces alertness that outlasts neither the fatigue nor the drive, which is why the manual names it specifically.",
        excerptKey: "fatigue-break",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Freeway fatigue",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_29",
        topic: "emergencies",
        question:
          "A flooded Michigan road is closed off with safety barricades. What should you do?",
        choices: [
          "Drive around them slowly if the water looks shallow",
          "Do not drive around them - find another route",
          "Follow another vehicle through",
          "Cross at speed to avoid stalling",
        ],
        correctIndex: 1,
        explanation:
          "The barricades are there because the road is unsafe. You do not drive around them - there may be debris or power lines in the water, or the road may have washed away entirely.",
        context:
          "Where a flooded road has no barricades at all, Michigan still advises finding another route, and warns that deep water can damage the engine even if the crossing succeeds. It is the same principle as the rest of the bad-weather guidance: the visible hazard is rarely the whole hazard.",
        trap:
          "Shallow-looking water is the classic misjudgement, because a washed-out road surface under it is completely invisible.",
        excerptKey: "flooded-road-barricades",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Rain and fog",
        sourceUrl: HB,
      },
      {
        id: "mi_s6_30",
        topic: "licensing",
        question: "How long is a Michigan driver's licence normally valid?",
        choices: [
          "Two years",
          "Four years, expiring on your birthday",
          "Eight years",
          "Twelve years",
        ],
        correctIndex: 1,
        explanation:
          "A Michigan licence normally runs for four years and expires on your birthday in the year shown on the licence. A driver under 21 has it expire on their 21st birthday instead.",
        context:
          "There is a longer cycle running behind it: every twelve years the renewal must be done in person at a Secretary of State office, with a vision screening and a new photograph. Renewing late costs a late fee on top of the ordinary one, and a licence that is suspended, revoked or denied will not be renewed at all.",
        trap:
          "The twelve-year in-person requirement is a renewal condition, not the licence's life. The licence itself lasts four years.",
        excerptKey: "license-valid-four-years",
        sourceLabel: "What Every Driver Must Know - Chapter 1, Renewing your license",
        sourceUrl: HB,
      },
    ],
  },
];
