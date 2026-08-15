import type { DrivingTestSet } from "../types";

// Every fact below was checked against What Every Driver Must Know (SOS-133,
// October 2025), published by the Michigan Department of State, plus
// michigan.gov Secretary of State pages for the knowledge test and Graduated
// Driver Licensing, and the Michigan Vehicle Code (MCL 257) and Insurance Code
// (MCL 500) for the rules the manual states only as a penalty label or does not
// state at all - the 0.08 and 0.17 alcohol thresholds, the one-point speeding
// tier, the nine-point interview, and the auto insurance minimums.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// Secretary of State's own authoritative wording on the government's site.
const HB =
  "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf";
const SOS18 = "https://www.michigan.gov/sos/license-id/new-drivers-18-older";
const SOSU18 = "https://www.michigan.gov/sos/license-id/new-drivers-under-18";
const MCL_625 = "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-625";
const MCL_320A = "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-320a";

export const michiganSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Michigan Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Michigan: what the shapes and colours mean, who goes first, and the handful of numbers the Secretary of State's knowledge test expects you to know cold.",
    questions: [
      {
        id: "mi_s1_01",
        topic: "signs",
        question:
          "You approach an eight-sided red sign at an intersection. What does Michigan require of you?",
        choices: [
          "Come to a complete stop and yield to traffic and pedestrians before going on",
          "Slow to walking pace and continue if the cross street looks empty",
          "Yield only to vehicles already inside the intersection",
          "Stop only when a pedestrian is waiting at the kerb",
        ],
        correctIndex: 0,
        explanation:
          "The octagon carries one message, and that message is a full stop. Once stopped you still have to give way to cross traffic and to anyone on foot before you move off.",
        context:
          "Michigan teaches signs by shape first, so you can start reacting before you can read the words. Nine shapes carry fixed meanings: the octagon is STOP and nothing else, the downward triangle is YIELD, the yellow diamond warns, the pentagon means school, and the pennant marks a no-passing zone. Learning the shape system earns more marks than memorising individual signs, because the exam can show you a sign you have never met.",
        trap:
          "Rolling through at walking pace is the habit that gets people ticketed. Michigan wants the wheels stopped, not merely slowed.",
        excerptKey: "sign-stop",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_02",
        topic: "signals",
        question: "A traffic signal ahead of you is flashing red. What must you do?",
        choices: [
          "Slow down and drive carefully through the intersection",
          "Treat it as a broken signal and wait for it to turn green",
          "Come to a full stop, then go on when the road is clear",
          "Turn right or left, because the road ahead is closed",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red light behaves exactly like a stop sign. You stop completely, look, and then proceed once nothing is coming.",
        context:
          "Michigan's flashing signals split cleanly. Flashing red means full stop then go when clear; flashing yellow means carry on but scan across traffic in both directions before you cross. Neither one ever changes to green, so waiting at a flashing red for a green light will leave you sitting there.",
        trap:
          "Slowing without stopping is the flashing-yellow response. Applied to a flashing red it is a three-point violation for disobeying a signal.",
        excerptKey: "flashing-red-light",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_03",
        topic: "speed",
        question:
          "You are on a rural Michigan road that is not a freeway and carries no speed limit signs at all. What is the limit?",
        choices: ["25 mph", "35 mph", "45 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "Where nothing is posted and the road is not a designated freeway, Michigan's default limit is 55 mph. It applies to ordinary streets and to highways alike.",
        context:
          "Michigan sets a small number of standard limits that apply without a sign: 15 mph in mobile home parks, 25 mph in platted subdivisions and condominium complexes, 55 mph on everything else that is not a freeway, and 70 mph maximum on freeways. Every one of them is still capped by the basic speed law, which requires a careful and prudent speed for the conditions.",
        trap:
          "45 mph is the figure people reach for on a narrow country road. Michigan's unposted default is higher than that, which is exactly why the basic speed law matters more than the number.",
        commonlyMissed: true,
        excerptKey: "speed-55-default",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Speed limits",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_04",
        topic: "rightOfWay",
        question:
          "Two cars reach a four-way stop at exactly the same moment, on roads that cross at right angles. Who goes first?",
        choices: [
          "Whoever signals their intention first",
          "The car travelling straight rather than turning",
          "The larger vehicle, because it needs more room",
          "The driver on the right",
        ],
        correctIndex: 3,
        explanation:
          "When two drivers arrive together, the vehicle on the left yields, so the driver on the right moves off first. The tie-break turns on position, not on size, speed or intention.",
        context:
          "At a four-way stop Michigan uses arrival order: whoever reached the intersection and stopped first has the right of way. Only a genuine dead heat brings in the left-yields-to-right rule. Two drivers facing each other may both proceed, because their paths conflict only if one of them turns across the other.",
        trap:
          "A turn signal announces what you intend to do. It does not buy you the right to go first.",
        excerptKey: "four-way-stop-tie",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Right of way at intersections",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_05",
        topic: "safety",
        question:
          "You are driving three friends, all aged 15, and two of them are in the back seat. Under Michigan's seat belt law, who must be buckled?",
        choices: [
          "Only you, because you are the driver",
          "You, anyone in the front, and every passenger under 16 wherever they sit",
          "Only the people sitting in the front seats",
          "Nobody is legally required to, though it is strongly advised",
        ],
        correctIndex: 1,
        explanation:
          "Michigan requires the driver and every front seat occupant to be belted, and every passenger younger than 16 to be belted in any seating position. Fifteen-year-olds in the back are squarely inside that rule.",
        context:
          "Michigan's belt law is built around age and seating position rather than a blanket everybody-buckles rule. Front seat occupants of any age must be restrained, and so must anyone under 16 anywhere in the vehicle. Children under 8 or shorter than 4 feet 9 inches need a child seat or booster instead. Belt enforcement is primary in Michigan, so an officer may stop the car for the belt alone.",
        trap:
          "Several states set their rear-seat belt rule at 18. Michigan's line is 16, and the driver answers for the passengers below it.",
        excerptKey: "seat-belt-law",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Buckle up, it's the law!",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_06",
        topic: "signs",
        question: "What is a downward-pointing triangle used for on Michigan roads?",
        choices: [
          "Marking a school crossing",
          "Warning of a railroad crossing ahead",
          "Showing the end of a no-passing zone",
          "YIELD - slow down and let crossing traffic go by",
        ],
        correctIndex: 3,
        explanation:
          "The downward triangle is the yield sign. You slow, check for traffic crossing your path, and give way, stopping if that is what it takes.",
        context:
          "Yielding is not the same as stopping. A yield sign asks you to slow enough to judge the gap and be ready to stop, whereas a stop sign requires the wheels to stop every time. Michigan pairs the shape with a colour rule as well: red means stop or prohibited, yellow means general warning, orange means road work, and fluorescent yellow-green flags school, pedestrian and bicycle crossings.",
        trap:
          "Treating a yield as a rolling stop-sign works right up to the moment traffic is coming. The obligation is to give way, not merely to slow.",
        excerptKey: "sign-yield",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_07",
        topic: "rules",
        question:
          "A school bus ahead of you on an undivided two-lane road switches on its flashing red overhead lights. What must you do?",
        choices: [
          "Slow to 20 mph and pass carefully on the left",
          "Continue if no children are visible on the road",
          "Stop at least 20 feet from the bus and stay stopped until the red lights go off",
          "Stop level with the rear bumper of the bus",
        ],
        correctIndex: 2,
        explanation:
          "Flashing red overhead lights mean the bus is loading or unloading. You stop no closer than 20 feet away and hold that stop until the red lights are switched off or the bus drives on.",
        context:
          "Michigan runs a two-stage warning on school buses. Flashing yellow overhead lights mean be ready to stop; flashing red means stop 20 feet back. The one exception is a bus on the far side of a highway divided by a physical barrier such as a concrete or grass median. Fines for failing to stop are double the usual figure for a moving violation, and the offence carries three points.",
        trap:
          "Waiting for children to appear is not the test. The red lights alone create the duty to stop, whether or not you can see anyone.",
        commonlyMissed: true,
        excerptKey: "school-bus-20-feet",
        sourceLabel: "What Every Driver Must Know - Chapter 4, School buses",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_08",
        topic: "licensing",
        question:
          "A teenager holds a Michigan GDL Level 1 Learner's License. Who may supervise their driving?",
        choices: [
          "Any licensed driver over 18, sitting anywhere in the vehicle",
          "Any licensed adult, provided a parent has given permission by phone",
          "Only a driving instructor employed by a certified provider",
          "A licensed parent, guardian or designated licensed adult aged 21 or over, in the front passenger seat",
        ],
        correctIndex: 3,
        explanation:
          "Level 1 driving happens only with a licensed parent, guardian or a designated licensed adult who is at least 21, and that person has to be seated in the front next to the learner.",
        context:
          "Michigan's Graduated Driver Licensing programme runs in three levels between roughly 14 years 9 months and 18. Level 1 is fully supervised, Level 2 allows solo driving with a night curfew and a passenger cap, and Level 3 removes state restrictions. A designated adult other than the parent needs a signed letter of authorisation from the parent or guardian.",
        trap:
          "The supervisor sitting in the back seat does not satisfy the rule. Michigan specifies the front seat, next to the learner.",
        excerptKey: "level-1-supervision",
        sourceLabel: "What Every Driver Must Know - Chapter 1, Graduated Driver Licensing",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_09",
        topic: "impairment",
        question:
          "At what breath or blood alcohol content is a Michigan driver aged 21 or over automatically operating while intoxicated?",
        choices: ["0.02", "0.05", "0.08", "0.10"],
        correctIndex: 2,
        explanation:
          "Michigan's per se threshold is 0.08. At that level the prosecution does not have to show that your driving was actually affected - the number alone establishes the offence.",
        context:
          "Michigan stacks three alcohol thresholds. Any bodily alcohol content of 0.02 or more is an offence for a driver under 21. At 0.08 any driver is operating while intoxicated. At 0.17 the offence becomes the enhanced high-BAC charge with heavier penalties. Separately, you can be convicted of operating while visibly impaired below 0.08 if your driving shows it.",
        trap:
          "Being under 0.08 is not a safe harbour. The visibly-impaired offence and the under-21 zero-tolerance rule both bite well below it.",
        excerptKey: "bac-08",
        sourceLabel: "Michigan Vehicle Code - MCL 257.625(1)(b)",
        sourceUrl: MCL_625,
      },
      {
        id: "mi_s1_10",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Michigan?",
        choices: [
          "No closer than 15 feet",
          "No closer than 10 feet",
          "No closer than 20 feet",
          "Any distance, provided the hydrant stays visible",
        ],
        correctIndex: 0,
        explanation:
          "Michigan's no-parking list sets the hydrant clearance at 15 feet. It is measured from the hydrant itself, not from the kerb marking beside it.",
        context:
          "Michigan publishes a list of fixed parking clearances that the exam likes to test as a set: 15 feet from a hydrant, 20 feet from a marked crosswalk, 30 feet from a stop sign or traffic light, 50 feet from the nearest rail at a railroad crossing, and 500 feet from a fire or a crash. Local councils may impose stricter rules, signed at the city limits.",
        trap:
          "A painted kerb is a courtesy, not the rule. The 15-foot clearance applies whether or not anyone has marked it out.",
        excerptKey: "park-hydrant-15-feet",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking violations",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_11",
        topic: "sharing",
        question:
          "Michigan law sets a minimum sideways clearance when you pass a bicyclist. What is it?",
        choices: ["2 feet", "3 feet", "4 feet", "5 feet"],
        correctIndex: 1,
        explanation:
          "The statewide minimum is 3 feet of space between your vehicle and the bicycle. If you cannot give that much, you have to pass at a safe distance and a safe speed instead, or wait.",
        context:
          "Michigan treats a bicyclist as a legal road user with the same rights and responsibilities as a driver, and cyclists may ride anywhere in the lane so long as they travel with traffic. Passing may require you to use another lane entirely. Some Michigan cities set a stricter 5-foot distance, so the statewide 3 feet is a floor rather than a target.",
        trap:
          "Squeezing past inside the lane because the cyclist is hugging the kerb still breaks the rule if the gap is under 3 feet.",
        excerptKey: "bicycle-3-feet",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_12",
        topic: "signals",
        question:
          "The signal ahead turns steady yellow as you approach. What does Michigan expect?",
        choices: [
          "Speed up to clear the intersection before the red",
          "Stop, unless you cannot do so safely, in which case drive cautiously through",
          "Treat it as a warning only and maintain your speed",
          "Stop in every case, whatever your speed or position",
        ],
        correctIndex: 1,
        explanation:
          "Michigan words this unusually firmly: you are required to stop on a yellow light. The single exception is when stopping cannot be done safely, and then you drive through carefully rather than accelerating.",
        context:
          "The yellow phase exists to clear the intersection, not to extend the green. Michigan's statute says traffic facing a steady yellow must stop before the nearest crosswalk or limit line unless the stop cannot be made in safety. Deciding early - well before the line - is what keeps the choice from being forced on you.",
        trap:
          "Accelerating to beat the red is the classic yellow-light mistake, and it is precisely what the manual tells you not to do.",
        excerptKey: "signal-yellow-light",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic signals",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_13",
        topic: "rules",
        question: "Which use of a phone is legal for an adult driving in Michigan?",
        choices: [
          "Following a navigation route already set, without entering information by hand",
          "Reading a text message at a red light",
          "Holding the phone to your ear for a short call",
          "Recording a short video of the road ahead on your handset",
        ],
        correctIndex: 0,
        explanation:
          "Michigan bans holding or using a mobile device, but leaves navigation running as an exception provided you are not typing information in by hand.",
        context:
          "The general cell phone law covers calls, texting, reading, video and social media, and it applies to every driver on a public road. Hands-free operation is allowed within limits: a single press, tap or swipe to start or end a function, or the vehicle's own built-in interface. Fines run to $100 for a first offence and $250 afterwards, and teens on Level 1 or Level 2 lose even the hands-free allowance under Kelsey's Law.",
        trap:
          "Being stopped at a light does not suspend the law. You are still operating the vehicle on a public road.",
        excerptKey: "phone-gps-exception",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Cell phone use prohibited for all drivers",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_14",
        topic: "emergencies",
        question:
          "You have a minor collision in a car park with no injuries. At what level of property damage must you notify the police?",
        choices: [
          "Any damage at all, however slight",
          "When the damage exceeds $1,000",
          "When the damage exceeds $500",
          "Only if one of the drivers asks you to",
        ],
        correctIndex: 1,
        explanation:
          "Michigan sets the reporting line at property damage over $1,000, and any injury triggers the duty regardless of the damage figure.",
        context:
          "Three duties follow a crash in Michigan. You must not leave the scene, you must help the injured get medical aid, and you must exchange names, addresses, licence numbers, registration and insurance details. Where nobody is seriously hurt and the vehicle is drivable, Michigan actually requires the vehicles to be moved off the main roadway to a shoulder, median or nearby car park.",
        trap:
          "$500 is the reporting threshold in several neighbouring states. Michigan's is twice that, but an injury overrides it entirely.",
        excerptKey: "crash-notify-police-1000",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Crashes",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_15",
        topic: "safety",
        question:
          "In good conditions on dry pavement, what following distance does Michigan teach?",
        choices: [
          "One car length for every 10 mph of speed",
          "Two seconds behind the vehicle ahead",
          "Whatever gap lets you read the plate in front",
          "Three to four seconds behind the vehicle ahead",
        ],
        correctIndex: 3,
        explanation:
          "Michigan uses a time gap rather than a distance: three to four seconds behind the vehicle ahead, counted from a fixed roadside point.",
        context:
          "You measure it by watching the vehicle in front pass a sign or post and counting one-thousand-one, one-thousand-two, one-thousand-three. If you reach the same point before you finish counting, you are too close. Higher speeds and poor conditions push that up to six seconds or more, and the manual pairs it with a scanning habit of looking 20 to 30 seconds down the road.",
        trap:
          "The two-second rule is the figure taught in some other states. Michigan's baseline starts a second higher.",
        excerptKey: "following-distance-3-4",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Stopping distances",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_16",
        topic: "signs",
        question: "What does an orange sign tell a Michigan driver?",
        choices: [
          "A recreational or cultural site is nearby",
          "Caution for construction or maintenance work",
          "An unplanned incident has closed the road",
          "A school or pedestrian crossing is ahead",
        ],
        correctIndex: 1,
        explanation:
          "Orange is Michigan's construction and maintenance colour. It marks work zones, whether the crews are visible or not.",
        context:
          "Michigan's sign colours each carry a job: red for stop or prohibited, yellow for general warning, orange for construction, brown for recreation and culture, blue for services, green for guidance, fluorescent yellow-green for school and pedestrian and bicycle warnings, and fluorescent pink for an unplanned incident. Colour alone often tells you what kind of hazard is coming.",
        trap:
          "Fluorescent pink also grabs the eye, but it means an incident or emergency, not roadworks.",
        excerptKey: "sign-color-orange",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign colors",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_17",
        topic: "rightOfWay",
        question:
          "You have a green light and are going straight, but a pedestrian is already crossing in front of you. What must you do?",
        choices: [
          "Yield to the pedestrian and let them finish crossing",
          "Sound your horn to warn them and continue",
          "Proceed, because the green light gives you priority",
          "Edge forward until they move out of your path",
        ],
        correctIndex: 0,
        explanation:
          "A green light does not outrank a person on foot. Michigan requires you to yield to anyone crossing the street or the intersection even when your signal is green.",
        context:
          "Michigan lists a long set of situations where a driver yields to pedestrians: in a marked crosswalk at an intersection or midblock, in an unmarked crosswalk on the driver's side when no signals are present, when turning at any intersection, at stop signs and flashing lights, and to anyone who entered the crosswalk before the signal changed. Pedestrians may also cross midblock even where a crosswalk is nearby.",
        trap:
          "The green light governs the conflict between vehicles. It never overrides a pedestrian already in your path.",
        excerptKey: "pedestrian-green-light",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_18",
        topic: "speed",
        question:
          "You enter a Michigan work zone where no 45 mph work zone limit has been posted. What limit applies?",
        choices: [
          "45 mph automatically, because every work zone is 45",
          "The normal speed limit for that area",
          "25 mph, because workers may be present",
          "Whatever speed the traffic around you is doing",
        ],
        correctIndex: 1,
        explanation:
          "The 45 mph work zone figure applies when it is posted. Where it is not posted, the ordinary limit for that stretch of road stays in force.",
        context:
          "Michigan uses posted work zone limits so traffic can move at full speed when the site is inactive and slow when crews are out. What does not change with the posting is the penalty structure: fines double for every moving violation inside a work zone, and speeding there carries three, four or five points depending on how far over you were.",
        trap:
          "Assuming 45 mph applies to every barrel-lined stretch is the usual error. The posting is what makes the 45 real.",
        commonlyMissed: true,
        excerptKey: "speed-45-work-zone",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Speed limits",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_19",
        topic: "signals",
        question: "What does a flashing yellow light at an intersection mean?",
        choices: [
          "Stop and wait for the light to change",
          "The signal is about to turn red",
          "Drive carefully through, scanning traffic in both directions",
          "The intersection is closed - turn around",
        ],
        correctIndex: 2,
        explanation:
          "Flashing yellow means proceed with care. You do not have to stop, but you do have to scan across traffic in both directions before you cross.",
        context:
          "Flashing signals do not cycle. A flashing yellow will keep flashing yellow, so there is nothing to wait for. It usually marks the main road at an intersection where the side road faces a flashing red, which means side-road traffic must stop and you have priority - but only if they obey it.",
        trap:
          "Treating flashing yellow as a warning that red is coming confuses it with the steady yellow phase. Flashing yellow never turns red.",
        excerptKey: "flashing-yellow-light",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_20",
        topic: "parking",
        question: "You are parking facing downhill next to a kerb. Which way do you point the wheels?",
        choices: [
          "Straight ahead, and set the parking brake",
          "Away from the kerb",
          "Toward the kerb",
          "It makes no difference if the parking brake is set",
        ],
        correctIndex: 2,
        explanation:
          "Downhill, the wheels point toward the kerb, so that if the car creeps forward the front tyre catches the kerb instead of rolling into traffic.",
        context:
          "Michigan pairs the hill rules: wheels toward the kerb when facing downhill, away from the kerb when facing uphill, and turned so the vehicle cannot roll into traffic where there is no kerb at all. In every case you also set the parking brake, because the transmission is not designed to hold a vehicle in place.",
        trap:
          "Relying on Park alone is the mistake the manual singles out. The transmission is not a brake.",
        excerptKey: "park-downhill",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking on a hill",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_21",
        topic: "rules",
        question: "When must Michigan drivers switch their headlights on?",
        choices: [
          "Only between midnight and dawn",
          "From half an hour after sunset until half an hour before sunrise",
          "From sunset to sunrise exactly",
          "Only when street lights are not lit",
        ],
        correctIndex: 1,
        explanation:
          "Michigan brackets the requirement half an hour either side of sunset and sunrise, and adds any other time when visibility is reduced.",
        context:
          "There is a second, independent trigger: headlights must be on whenever there is not enough daylight to see people and vehicles clearly at 500 feet. That catches rain, snow, fog and heavy overcast in the middle of the day. Running parking lights instead of headlights when headlights are required is specifically illegal.",
        trap:
          "Waiting for actual sunset leaves you unlit through the half hour that matters most, and daytime running lights do not light your tail lamps.",
        excerptKey: "headlights-half-hour",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Driving at night",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_22",
        topic: "sharing",
        question:
          "An orange triangle is mounted on the back of the vehicle ahead. What does it tell you?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle is being towed",
          "The driver is a learner",
          "The vehicle cannot travel faster than 25 mph",
        ],
        correctIndex: 3,
        explanation:
          "The orange triangle marks a slow-moving vehicle, meaning one that cannot exceed 25 mph. Farm equipment and Amish buggies are the common examples.",
        context:
          "The emblem is a warning about closing speed. At 55 mph you overtake a 20 mph tractor faster than most drivers expect, so the triangle is designed to be spotted early. Michigan is explicit that golf carts and four-wheelers are not slow-moving vehicles, and their operators may not display the emblem.",
        trap:
          "The emblem does not mean the vehicle is disabled or stopping. It is a permanent speed marker.",
        excerptKey: "sign-slow-moving-vehicle",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Slow-moving vehicles",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_23",
        topic: "emergencies",
        question:
          "An ambulance is stopped on the shoulder ahead with its lights flashing. What does Michigan's law require?",
        choices: [
          "Slow to at least 10 mph below the posted limit and move over a lane if you can",
          "Maintain speed but move over a lane",
          "Stop completely until the ambulance moves off",
          "Slow to 20 mph and stay in your lane",
        ],
        correctIndex: 0,
        explanation:
          "Michigan pairs two duties at a stopped emergency vehicle: cut your speed to at least 10 mph under the posted limit, and change lanes if traffic and conditions allow.",
        context:
          "The rule covers ambulances, fire and police vehicles, tow trucks and safety patrol vehicles with flashing red or amber lights. Where you cannot move over, the duty does not disappear - you slow down and give the scene as much room as you can. Ignoring it is a civil infraction, and a felony if you injure or kill emergency personnel.",
        trap:
          "Moving over without slowing down misses half the rule. The speed reduction applies even when you have changed lanes.",
        commonlyMissed: true,
        excerptKey: "move-over-law",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Emergency vehicles",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_24",
        topic: "licensing",
        question: "How long is a Michigan temporary instruction permit (TIP) valid?",
        choices: ["30 days", "90 days", "One year", "180 days"],
        correctIndex: 3,
        explanation:
          "A TIP runs for 180 days. It lets an unlicensed adult practise with a licensed adult before taking the driving skills test.",
        context:
          "The permit and the practice period are separate clocks. You must complete at least 30 days of practice on the TIP before you are eligible for the skills test, and you have the full 180 days to pass it. Miss that window and the whole application starts again with a new TIP.",
        trap:
          "The 30-day practice minimum is not the permit's life. Confusing the two leaves people thinking the permit expires after a month.",
        excerptKey: "tip-180-days",
        sourceLabel: "What Every Driver Must Know - Chapter 1, Temporary instruction permit",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_25",
        topic: "rightOfWay",
        question: "You are approaching the yield line at a Michigan roundabout. Where do you look?",
        choices: [
          "Straight ahead, to the far exit",
          "To your right, for vehicles about to enter",
          "To your left, and yield to traffic already circulating",
          "Behind you, for vehicles closing on the entry",
        ],
        correctIndex: 2,
        explanation:
          "Traffic in a roundabout circulates counter-clockwise, so the vehicles that will conflict with you are coming from the left. You yield to them and enter on a gap.",
        context:
          "The yield applies to bicyclists and pedestrians as well as cars. Once inside, stay to the right of the central island, avoid changing lanes, and do not stop unless it is the only way to avoid a collision. If an emergency vehicle approaches, keep going and pull over past the exit rather than stopping inside the circle.",
        trap:
          "Yielding to the right is the four-way stop habit, and it is exactly backwards in a roundabout.",
        excerptKey: "roundabout-yield-left",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Roundabouts",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_26",
        topic: "signs",
        question:
          "A yellow pennant-shaped sign stands on the LEFT-hand side of the road. What is it telling you?",
        choices: [
          "You are in a no-passing zone and must not pass",
          "A passing lane begins here",
          "The road narrows ahead",
          "Slow-moving vehicles may be using the road",
        ],
        correctIndex: 0,
        explanation:
          "The pennant is the no-passing zone sign. It is deliberately placed on the left, in the driver's line of sight toward the lane they would be passing into.",
        context:
          "Michigan uses two signs as a pair here. The rectangular DO NOT PASS sign faces you on the right at the start of the restriction; the yellow pennant on the left runs alongside it. The PASS WITH CARE sign, again on the right, marks where the no-passing zone ends.",
        trap:
          "A sign on the left feels like it must be for oncoming traffic. This one is for you, which is why the shape is unique.",
        excerptKey: "sign-no-passing-pennant",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_27",
        topic: "impairment",
        question:
          "A 19-year-old Michigan driver is stopped and tests at 0.03 breath alcohol. What is the position?",
        choices: [
          "They have committed an offence - under 21, any bodily alcohol content is unlawful",
          "No offence, because 0.03 is well under 0.08",
          "No offence unless their driving was visibly affected",
          "A warning only, since a first reading under 0.05 is not chargeable",
        ],
        correctIndex: 0,
        explanation:
          "Michigan's zero-tolerance rule makes it unlawful for anyone under 21 to drive with any bodily alcohol content, defined as 0.02 or more or any alcohol from drinking at all.",
        context:
          "The under-21 offence sits below the adult thresholds rather than replacing them. A young driver over 0.08 is prosecuted as operating while intoxicated like anyone else. A conviction for driving under 21 with any bodily alcohol content puts four points on the record, and refusing a preliminary breath test adds two more on its own.",
        trap:
          "0.08 is the adult number and it does not protect a driver under 21. The line for them is effectively zero.",
        excerptKey: "zero-tolerance-under-21",
        sourceLabel: "Michigan Vehicle Code - MCL 257.625(6)",
        sourceUrl: MCL_625,
      },
      {
        id: "mi_s1_28",
        topic: "rules",
        question:
          "There is a solid yellow line on your side of the centre line. What does it permit?",
        choices: [
          "Passing, provided oncoming traffic is clear",
          "No passing - you may not cross it to overtake",
          "Passing only vehicles turning left",
          "Passing only when the vehicle ahead is under 25 mph",
        ],
        correctIndex: 1,
        explanation:
          "A solid yellow line on your side is a no-passing marking. You may not cross it to overtake, however clear the road looks.",
        context:
          "Yellow separates traffic moving in opposite directions. A broken yellow line means passing is allowed when it is safe; a solid yellow on your side forbids it; a double solid yellow forbids it in both directions. Crossing a double yellow is still permitted for turning into a driveway, onto a crossroad or into a parking spot - it is passing that is out.",
        trap:
          "A clear view ahead does not convert a solid yellow into a broken one. The line, not the sight distance, is the rule.",
        excerptKey: "solid-yellow-line",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Solid yellow lines",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_29",
        topic: "safety",
        question: "Your rear wheels start to skid on an icy Michigan road. What is the first move?",
        choices: [
          "Brake hard to stop the slide",
          "Steer sharply the opposite way",
          "Take your foot off the accelerator",
          "Shift into neutral and coast",
        ],
        correctIndex: 2,
        explanation:
          "Lifting off the accelerator comes first. Then you steer the front wheels only as far as needed to point them where you want to go, and no farther.",
        context:
          "Most skids start with turning too sharply or braking too suddenly on a slippery surface, so the recovery is about removing the input that caused it. Expect a secondary skid the other way as the car settles, steer into that too, then straighten up. On dry ground, the same lesson applies before the skid: with anti-lock brakes you press hard and steer; without them you brake just short of locking the wheels.",
        trap:
          "Braking hard mid-skid is the instinctive reaction and it makes the slide worse by taking away what little grip is steering the car.",
        excerptKey: "skid-recovery",
        sourceLabel: "What Every Driver Must Know - Chapter 7, If your vehicle begins skidding",
        sourceUrl: HB,
      },
      {
        id: "mi_s1_30",
        topic: "speed",
        question: "What is the maximum speed limit on a Michigan freeway unless signs say otherwise?",
        choices: ["70 mph", "65 mph", "75 mph", "55 mph"],
        correctIndex: 0,
        explanation:
          "Michigan freeways carry a 70 mph maximum unless posted differently, together with a 55 mph minimum for the same stretch.",
        context:
          "The freeway limit is not one number but a band, and different vehicles sit in different parts of it. School buses and trucks are held to 65 mph where cars may do 70, and to 55 mph on any freeway posted below 70. Driving far under the minimum is its own hazard, which is why Michigan sets a floor as well as a ceiling.",
        trap:
          "65 mph is the truck and school bus figure, not the car figure. The two get swapped constantly.",
        excerptKey: "speed-70-freeway",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Speed limits",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Everyday Michigan Rules",
    difficulty: "easy",
    description:
      "The rules you use on every trip across Michigan - school buses, turns on red, parking clearances and the licensing restrictions that apply until you turn 18.",
    questions: [
      {
        id: "mi_s2_01",
        topic: "rules",
        question:
          "A school bus on the far side of a highway has its red overhead lights flashing. The two directions are separated by a grass median. What must you do?",
        choices: [
          "Stop, because red overhead lights always require a stop",
          "Continue with care - the barrier means you need not stop",
          "Stop only if children are visible near the bus",
          "Slow to 20 mph and pass the bus",
        ],
        correctIndex: 1,
        explanation:
          "Michigan lifts the duty to stop where a physical barrier such as a concrete or grass median separates the two directions. Traffic on the same side as the bus still has to stop.",
        context:
          "The word doing the work is barrier. A median, island or other structure that physically divides the flow of traffic releases the far side; a centre turn lane or a painted stripe does not, because nothing physically separates the carriageways. The stop distance on the side that must stop is at least 20 feet.",
        trap:
          "A wide painted median looks like a divided highway from the driver's seat. It is not a barrier, and the stop still applies.",
        commonlyMissed: true,
        excerptKey: "school-bus-divided-road",
        sourceLabel: "What Every Driver Must Know - Chapter 4, School buses",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_02",
        topic: "rightOfWay",
        question:
          "You are stopped at a red light on a two-way street, wanting to turn LEFT onto a one-way street that runs the way you want to go. Is the turn legal in Michigan?",
        choices: [
          "No - left on red is never permitted in Michigan",
          "Yes, after a full stop, yielding to traffic and pedestrians, unless a sign forbids it",
          "Only if you are turning from a one-way street",
          "Only between 6 a.m. and 10 p.m.",
        ],
        correctIndex: 1,
        explanation:
          "Michigan allows a left turn on red onto a one-way street from either a one-way or a two-way street. You stop completely first, scan for vehicles coming from the right, and yield to anyone already using the intersection.",
        context:
          "Michigan's turn-on-red rule is broader than most states'. The destination is what matters: a right turn on red is allowed into a two-way street or into a one-way street carrying traffic your way, and a left turn on red is allowed into a one-way street carrying traffic your way. A posted NO TURN ON RED sign overrides all of it.",
        trap:
          "Most states restrict left on red to one-way onto one-way. Drivers who learned elsewhere assume Michigan does too, and it does not.",
        commonlyMissed: true,
        excerptKey: "left-on-red-two-way",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Right of way when turning",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_03",
        topic: "parking",
        question:
          "How far back from a stop sign, traffic light or flashing beacon must you keep your parked vehicle in Michigan?",
        choices: ["10 feet", "15 feet", "20 feet", "30 feet"],
        correctIndex: 3,
        explanation:
          "Michigan sets 30 feet, and the same clearance covers a stop sign, a traffic light, a flashing beacon and a warning sign.",
        context:
          "The clearance exists so a parked car does not hide a signal or sign from approaching traffic. It sits alongside the rest of Michigan's fixed clearances: 20 feet from a marked crosswalk, 15 feet from an intersection where there is no crosswalk, 15 feet from a hydrant and 50 feet from the nearest rail at a railroad crossing.",
        trap:
          "20 feet is the crosswalk figure. Applying it to a stop sign leaves you 10 feet inside the restricted zone.",
        commonlyMissed: true,
        excerptKey: "park-stop-sign-30-feet",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking violations",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_04",
        topic: "signals",
        question:
          "You reach an intersection where the traffic signal is completely dead and no officer is directing traffic. What do you do?",
        choices: [
          "Stop completely and yield to vehicles already at the intersection",
          "Treat it as an uncontrolled intersection and keep moving",
          "Wait until another driver waves you through",
          "Yield to the left, as you would at a roundabout",
        ],
        correctIndex: 0,
        explanation:
          "A dead signal becomes an all-way stop. You stop, yield to whoever was there first, and give way to the vehicle on your right if you arrived together.",
        context:
          "Michigan handles a malfunctioning signal the same way as a four-way stop, so arrival order settles the order of going and left yields to right in a tie. If a police officer or a construction worker is directing traffic, their instructions outrank the signal entirely, working or not.",
        trap:
          "Treating a dark signal as no signal at all is the dangerous reading. Every approach faces the same dead light, so everybody must stop.",
        excerptKey: "signal-not-working",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic signals",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_05",
        topic: "licensing",
        question:
          "A Michigan teen on a GDL Level 2 Intermediate License wants to drive to a friend's house at 11 p.m. Which is true?",
        choices: [
          "Not permitted unless an exception applies - Level 2 bars driving between 10 p.m. and 5 a.m.",
          "Permitted, because the Level 2 curfew starts at midnight",
          "Permitted, because curfews apply only to Level 1",
          "Permitted if they hold a parental note",
        ],
        correctIndex: 0,
        explanation:
          "Level 2 forbids driving between 10 p.m. and 5 a.m. The exceptions are being accompanied by a parent, guardian or designated adult aged 21 or over, or travelling for work or an authorised activity.",
        context:
          "Michigan's Level 2 restrictions come in a pair: the night curfew and a cap of one passenger under 21. Both continue until the teen either advances to Level 3 - possible from age 17 after six months at Level 2 and twelve consecutive clean months - or turns 18, when GDL ends outright.",
        trap:
          "11 p.m. and midnight are the curfew hours in other states. Michigan's starts at 10 p.m., which catches people out on ordinary evenings.",
        commonlyMissed: true,
        excerptKey: "level-2-curfew",
        sourceLabel: "What Every Driver Must Know - Chapter 1, Graduated Driver Licensing",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_06",
        topic: "speed",
        question:
          "You turn into a platted residential subdivision in Michigan with no speed limit signs posted. What is the limit?",
        choices: ["15 mph", "20 mph", "35 mph", "25 mph"],
        correctIndex: 3,
        explanation:
          "Platted subdivisions and condominium complexes carry a 25 mph limit in Michigan without any sign being needed.",
        context:
          "Michigan's unposted defaults step down by the type of place rather than by the look of the road: 15 mph inside mobile home parks and some municipal parks, 25 mph in platted subdivisions and condominium complexes, and 55 mph on everything else that is not a freeway. Business districts, park roads, school and hospital zones vary, so those are signed.",
        trap:
          "15 mph is the mobile home park figure. It is easy to swap the two because both feel like residential streets.",
        excerptKey: "speed-25-subdivision",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Speed limits",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_07",
        topic: "safety",
        question:
          "Under Michigan's child passenger safety law, when may a child stop using a car seat or booster?",
        choices: [
          "At age 6, whatever their height",
          "At age 8 or 4 feet 9 inches tall, whichever comes first",
          "At age 8 and 4 feet 9 inches tall - both must be met",
          "When they can buckle the adult belt themselves",
        ],
        correctIndex: 1,
        explanation:
          "Michigan sets the threshold at age 8 or a height of 4 feet 9 inches, and the child may come out of the seat once either one is reached.",
        context:
          "The manual notes that reaching the height first is the safer test, because an adult belt fits a small child badly whatever their age. Children under 4 must ride in a rear seat where the vehicle has one, and a rear-facing seat may only go in front if the passenger airbag is switched off. Removing a child from a seat to nurse while the vehicle is moving is prohibited.",
        trap:
          "Reading it as age AND height keeps a tall six-year-old in a booster and a short nine-year-old out of one. Michigan's rule is whichever comes first.",
        excerptKey: "child-seat-whichever-first",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Protecting children and teens",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_08",
        topic: "signs",
        question: "What does a fluorescent yellow-green sign warn about in Michigan?",
        choices: [
          "School, pedestrian or bicycle activity",
          "An emergency or unplanned incident",
          "Construction or maintenance work",
          "A recreation area ahead",
        ],
        correctIndex: 0,
        explanation:
          "Fluorescent yellow-green is Michigan's colour for school, pedestrian and bicycle caution. It is used where people on foot or on bikes cross your path.",
        context:
          "Michigan runs two fluorescent colours and they mean different things. Yellow-green marks vulnerable road users at school crossings, pedestrian crossings and bike routes; fluorescent pink marks an incident, emergency or unplanned event that has disrupted traffic. Ordinary yellow remains the general warning colour.",
        trap:
          "It is easy to file fluorescent yellow-green with ordinary yellow warnings. The brighter shade specifically flags people, not road geometry.",
        commonlyMissed: true,
        excerptKey: "sign-color-fluorescent-yellow-green",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign colors",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_09",
        topic: "sharing",
        question:
          "Two motorcyclists are riding side by side in a single lane ahead of you. What is the position under Michigan law?",
        choices: [
          "It is illegal - each rider must occupy a full lane",
          "It is legal only on freeways",
          "It is legal - motorcycle, scooter, moped and bicycle riders may share a lane",
          "It is legal only if both riders are from the same household",
        ],
        correctIndex: 2,
        explanation:
          "Michigan permits motorcycle, scooter, moped and bicycle riders to share a lane with each other. Two riders abreast in one lane is a normal, legal formation.",
        context:
          "The reverse does not hold: a car may not drive beside a motorcyclist or pass one within the same lane. Overtaking a rider means using an adjacent lane when it is safe and legal, exactly as you would with any other vehicle. Michigan also asks for three to four seconds of following distance behind a rider, since motorcycles stop shorter than cars and may swerve for potholes.",
        trap:
          "Riders sharing a lane can look like there is room for you to squeeze past. Passing a motorcyclist inside their lane is specifically illegal.",
        excerptKey: "motorcycle-share-lane",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Motorcycles, scooters, mopeds and bicycles",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_10",
        topic: "impairment",
        question:
          "A Michigan driver refuses to take a chemical alcohol test after being lawfully arrested. What goes on the driving record?",
        choices: ["Two points", "Three points", "Four points", "Six points"],
        correctIndex: 3,
        explanation:
          "Refusing the chemical test is a six-point matter on the Michigan record, on top of the licence suspension that implied consent triggers.",
        context:
          "Michigan's implied consent law treats every driver as having agreed to chemical testing when they applied for or renewed their licence, so refusal is its own sanction rather than a way of avoiding one. It sits in the six-point group alongside operating while intoxicated, reckless driving, fleeing an officer and leaving the scene of a crash.",
        trap:
          "Refusal by a driver under 21 to take a preliminary roadside breath test is the two-point item. The chemical test refusal after arrest is the six-point one.",
        excerptKey: "points-six-more",
        sourceLabel: "What Every Driver Must Know - Chapter 2, Michigan's point system",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_11",
        topic: "rules",
        question:
          "You are overtaking on a two-lane road. How much room must you leave before returning to your lane?",
        choices: [
          "Enough to see the other vehicle's headlights",
          "100 feet clear of oncoming traffic",
          "You must be back in your lane before you are within 200 feet of any oncoming vehicle",
          "Half the distance to the oncoming vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Michigan requires you to be back in your own lane before you close to within 200 feet of any oncoming vehicle. That is the outside limit, not a target to aim for.",
        context:
          "A second rule governs the same manoeuvre from behind: do not cut back in until you can see the whole vehicle you have just passed in your rearview mirror. Michigan also bars passing more than one vehicle at a time, and forbids passing altogether within 100 feet of an intersection or railroad crossing.",
        commonlyMissed: true,
        trap:
          "200 feet closes in about two seconds when both cars are doing 55. Judging it by eye at the moment of the pass is what makes head-on collisions.",
        excerptKey: "passing-200-feet",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Passing on the left",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_12",
        topic: "emergencies",
        question:
          "A deer runs into your lane on a Michigan highway and a collision looks unavoidable. What does the state advise?",
        choices: [
          "Swerve hard into the next lane",
          "Accelerate to clear the animal's path",
          "Brake firmly, hold the wheel and stay in your lane",
          "Steer for the shoulder and brake hard",
        ],
        correctIndex: 2,
        explanation:
          "Michigan's advice is blunt: do not veer for deer. Brake firmly, keep both hands on the wheel, stay in your lane and come to a controlled stop.",
        context:
          "About 60,000 vehicle-deer crashes happen in Michigan each year, and the serious injuries usually come from what the driver does rather than from the deer. Swerving puts the car into oncoming traffic or a ditch. Deer travel in groups, so seeing one is a reason to slow down and expect more, and dawn and dusk are the high-risk hours.",
        trap:
          "Swerving feels like the caring response, and it converts a survivable animal strike into a head-on or a rollover.",
        excerptKey: "deer-do-not-veer",
        sourceLabel: "What Every Driver Must Know - Chapter 7, If a vehicle-deer crash is unavoidable",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_13",
        topic: "signals",
        question: "A steady green ARROW is showing for your turn. What does it mean?",
        choices: [
          "Oncoming traffic is stopped - you may proceed with caution in the arrow's direction",
          "You may turn only after yielding to oncoming traffic",
          "The turn is about to be prohibited",
          "You may turn only if no pedestrian is waiting anywhere at the junction",
        ],
        correctIndex: 0,
        explanation:
          "A steady green arrow is a protected movement. Traffic coming toward you is held on red, so you may go in the direction of the arrow, still watching for pedestrians in the intersection.",
        context:
          "Michigan uses this in the five-section doghouse signal head, where a green arrow protects the turn and a plain green circle permits it once oncoming traffic clears. The flashing yellow arrow does the same job as the green circle in a modern four-lens head: turn when the gap is genuinely there, because oncoming drivers have a green.",
        trap:
          "Protected does not mean unconditional. Pedestrians already in the crosswalk still have the right of way.",
        excerptKey: "steady-green-arrow",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Steady green arrow",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_14",
        topic: "rightOfWay",
        question: "How does Michigan treat a funeral procession?",
        choices: [
          "It has no special status in traffic law",
          "Every driver must pull over and stop until it passes",
          "It yields to all other traffic at signalised intersections",
          "It has the right of way over all vehicles except fire trucks, ambulances and police",
        ],
        correctIndex: 3,
        explanation:
          "A funeral procession outranks ordinary traffic in Michigan, giving way only to fire trucks, ambulances and police vehicles. Cutting through the procession is a civil infraction.",
        context:
          "Vehicles in the procession display a fluorescent orange flag bearing the appropriate religious symbol, which is what identifies them. Michigan is explicit that other drivers are not required to pull over for a procession - respectful behaviour is expected, stopping is not compelled.",
        trap:
          "Assuming you must pull over as you would for an ambulance goes further than the law asks. The duty is not to cut through.",
        excerptKey: "funeral-right-of-way",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Right of way and funerals",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_15",
        topic: "parking",
        question:
          "You park at the kerb on a Michigan street. How far from the kerb may the vehicle sit?",
        choices: [
          "No more than 12 inches",
          "No more than 18 inches",
          "No more than 24 inches",
          "Any distance, provided the vehicle is straight",
        ],
        correctIndex: 0,
        explanation:
          "Michigan puts the limit at 12 inches. The manual phrases it as the kerb never being more than a foot from your parked vehicle.",
        context:
          "The parallel parking instructions use a slightly tighter working range of 6 to 12 inches, which is the standard the driving skills test scores against. Parking against the flow of traffic is separately prohibited, as is double parking on the street side of a legally parked vehicle.",
        trap:
          "18 inches is the figure in several other states' handbooks, and it is 50 per cent wider than Michigan allows.",
        excerptKey: "park-12-inches",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking violations",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_16",
        topic: "licensing",
        question:
          "A 16-year-old on a Michigan Level 2 Intermediate License is driving to the cinema with friends. How many passengers under 21 may ride along?",
        choices: [
          "Two",
          "One, unless an exception such as immediate family or employment applies",
          "Three",
          "No limit, as long as everyone is belted",
        ],
        correctIndex: 1,
        explanation:
          "Level 2 caps passengers under 21 at one. The cap lifts when a qualifying adult is in the car, when the passengers are immediate family, or when the trip is for work or an authorised activity.",
        context:
          "The passenger limit and the 10 p.m. to 5 a.m. curfew are the two Level 2 restrictions, and they are enforced through the licence rather than through the seat belt law. Breaking either one is a GDL restriction violation, which resets the twelve clean months a teen needs before advancing to Level 3.",
        trap:
          "The line is drawn at 21, not at 18 or at the driver's own age. A 20-year-old passenger counts against the cap.",
        commonlyMissed: true,
        excerptKey: "level-2-passengers",
        sourceLabel: "What Every Driver Must Know - Chapter 1, Graduated Driver Licensing",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_17",
        topic: "rules",
        question:
          "A train is approaching a Michigan railroad crossing. Where must you stop?",
        choices: [
          "No more than 50 feet and no less than 15 feet from the tracks",
          "At least 25 feet from the nearest rail",
          "Anywhere behind the crossbuck sign",
          "No more than 20 feet and no less than 10 feet from the tracks",
        ],
        correctIndex: 0,
        explanation:
          "Michigan sets a stopping band rather than a single distance: not more than 50 feet from the tracks and not less than 15 feet.",
        context:
          "The 15-foot floor exists because trains overhang the rails by at least three feet on each side, and loads can stick out further still. The 50-foot ceiling keeps you close enough to see the crossing signals. Where a crossing carries a stop sign you stop whether or not a train is in sight, and buses, passenger-carrying vehicles and hazardous-material trucks must stop at every crossing.",
        trap:
          "Only the near limit registers with most drivers. Stopping 60 feet back is also wrong, and it puts you where you cannot judge the crossing.",
        commonlyMissed: true,
        excerptKey: "railroad-stop-distance",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Railroad crossings",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_18",
        topic: "safety",
        question: "What is hydroplaning?",
        choices: [
          "Brake fade caused by repeated heavy braking",
          "The tyres riding up on top of the water on a wet road, so control is lost",
          "Loss of traction when accelerating out of a bend",
          "Steering pull caused by uneven tyre pressures",
        ],
        correctIndex: 1,
        explanation:
          "Hydroplaning is the tyres lifting onto a film of water instead of gripping the road surface. Steering and braking go with the grip.",
        context:
          "Worn tyres, low tyre pressure and simply going too fast are the three contributors Michigan names, and all three are within the driver's control before the trip starts. Rain is most dangerous in the first half hour, when oil dropped by passing vehicles has not yet washed away, and Michigan asks for at least twice the normal following distance in the wet.",
        trap:
          "It is not a braking fault. The tyres have already left the road surface, so pressing harder achieves nothing.",
        excerptKey: "hydroplaning",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Rain and fog",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_19",
        topic: "signs",
        question: "You pass a PASS WITH CARE sign on the right-hand side of the road. What does it mean?",
        choices: [
          "A passing lane starts in 500 feet",
          "Slow-moving vehicles are ahead",
          "The no-passing zone has ended - pass when it is safe to do so",
          "You may pass only vehicles that are turning left",
        ],
        correctIndex: 2,
        explanation:
          "PASS WITH CARE marks the end of a no-passing zone. Passing becomes permissible again, subject to your own judgement about whether it is safe.",
        context:
          "It is the closing bracket of a pair. The DO NOT PASS sign opens the restriction on the right and the yellow pennant runs beside it on the left; PASS WITH CARE closes it. Ending the zone does not end the other passing rules - you still may not pass within 100 feet of an intersection or railroad crossing, or where a solid yellow line runs on your side.",
        trap:
          "The sign is permission, not encouragement. The judgement about oncoming traffic is still entirely yours.",
        excerptKey: "sign-pass-with-care",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_20",
        topic: "speed",
        question: "What does Michigan's Basic Speed Law require?",
        choices: [
          "Driving at a careful and prudent speed for the conditions, never faster than the posted limit",
          "Driving at the posted limit whenever traffic allows",
          "Matching the speed of surrounding traffic",
          "Reducing speed by 10 mph whenever it rains",
        ],
        correctIndex: 0,
        explanation:
          "The Basic Speed Law requires a careful and prudent speed in all conditions, letting you stop within the clear distance ahead. That speed is never above the posted limit and is often below it.",
        context:
          "It is why you can be ticketed for doing the posted limit in fog, snow or heavy traffic. The posted number is a ceiling for ideal conditions, not an entitlement. Michigan's driving skills test scores the same idea from the other direction: driving more than 10 mph under the limit without a reason is itself a marked fault.",
        trap:
          "Treating the posted number as a speed you are entitled to hold is exactly what the Basic Speed Law overrides.",
        excerptKey: "basic-speed-law",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Speed limits",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_21",
        topic: "sharing",
        question:
          "The car in the lane beside you has stopped for a pedestrian at a crossing. What must you do?",
        choices: [
          "Continue at reduced speed, since you have not seen anyone",
          "Sound the horn and proceed slowly",
          "Change lanes and go around the stopped vehicle",
          "Do not pass the stopped vehicle - a pedestrian is crossing where you cannot see",
        ],
        correctIndex: 3,
        explanation:
          "Michigan forbids passing a vehicle that has stopped for a pedestrian. The stopped vehicle is hiding someone who is already in the road.",
        context:
          "This is the classic multiple-threat collision, and it is worst when the stopped vehicle is a truck or bus whose bulk blocks your view completely. Michigan lists it among the situations where passing is prohibited outright, alongside solid yellow lines, no-passing zones and stopped school buses.",
        trap:
          "Not being able to see a pedestrian is the reason for the rule, not a reason to disregard it.",
        excerptKey: "pedestrian-never-pass-stopped",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_22",
        topic: "impairment",
        question: "What actually reduces a person's blood alcohol level?",
        choices: [
          "Time, and nothing else",
          "Strong coffee",
          "A cold shower and fresh air",
          "Vigorous exercise before driving",
        ],
        correctIndex: 0,
        explanation:
          "Only time lowers blood alcohol. Coffee, cold water, exercise and fresh air may make a drinker feel more alert while leaving the impairment untouched.",
        context:
          "Michigan is careful to point out that the type of drink makes no difference either: a 12-ounce beer, a 5-ounce glass of wine and a 1.5-ounce shot of spirits carry the same amount of alcohol. Even one drink slows reaction time, dulls concentration and affects vision, which is why the state's advice is to arrange a designated driver before the evening starts.",
        trap:
          "Feeling more awake is the trap. Alertness and sobriety are different things, and only one of them is measured at the roadside.",
        excerptKey: "only-time-sobers",
        sourceLabel: "What Every Driver Must Know - Chapter 2, Alcohol and drugs",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_23",
        topic: "rules",
        question: "How close to an intersection or railroad crossing may you begin a pass?",
        choices: [
          "50 feet",
          "You may pass right up to the intersection if the road is clear",
          "200 feet",
          "You may not pass within 100 feet of either",
        ],
        correctIndex: 3,
        explanation:
          "Michigan prohibits passing within 100 feet of an intersection or a railroad crossing, and within 100 feet of a bridge, viaduct or tunnel where your view is blocked.",
        context:
          "The reason is that an intersection introduces traffic you cannot see from the passing lane, and a crossing introduces a train. The prohibition sits with the rest of Michigan's no-passing list: a solid yellow on your side, posted no-passing signs, an approaching hill or curve, a stopped school bus, and a vehicle stopped for a pedestrian.",
        trap:
          "A clear view along your own road is not the point. What the rule protects against is a vehicle entering from the side.",
        excerptKey: "no-passing-100-feet",
        sourceLabel: "What Every Driver Must Know - Chapter 4, When passing is prohibited",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_24",
        topic: "emergencies",
        question:
          "Your car breaks down on a Michigan freeway and you cannot get it moving. What is generally the safest course?",
        choices: [
          "Stand behind the vehicle to warn approaching traffic",
          "Walk along the shoulder to the next exit",
          "Raise the bonnet and wait beside the car",
          "Pull as far off the road as possible, put the hazards on and stay inside with your belt fastened",
        ],
        correctIndex: 3,
        explanation:
          "Michigan's advice is to get the vehicle as far off the travelled roadway as you can, switch on the four-way flashers, and stay inside with the seat belt fastened until help arrives.",
        context:
          "The reasoning is in the crash figures: about a tenth of pedestrian traffic deaths over one five-year period involved a roadside emergency, and most of those people had left their vehicles. Walking on a freeway is both dangerous and illegal in Michigan. If you must leave the car, move directly away from the traffic lanes rather than along them.",
        trap:
          "Standing behind the car to be visible puts you in the exact space a distracted driver will drift into.",
        excerptKey: "disabled-vehicle",
        sourceLabel: "What Every Driver Must Know - Chapter 7, If your car becomes disabled",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_25",
        topic: "rightOfWay",
        question:
          "You reach a T-intersection with no signs or signals, where your road ends at a through road. Who has the right of way?",
        choices: [
          "You, because you arrived first",
          "Traffic on the through road",
          "Whoever is on the right",
          "The vehicle travelling faster, to avoid a sudden stop",
        ],
        correctIndex: 1,
        explanation:
          "At an unsigned T-intersection the through road has priority. You yield to traffic on it before joining or crossing.",
        context:
          "Michigan's yielding rules follow the shape of the junction where no sign settles it. A road that ends gives way to the road that continues, a driver entering from a driveway or alley gives way to the street, and a driver turning gives way to traffic going straight. Where the geometry is genuinely equal, as at a four-way stop, arrival order and then left-yields-to-right decide it.",
        trap:
          "Arriving first counts at a four-way stop, not at a T-junction. Here the layout, not the timing, allocates priority.",
        excerptKey: "t-intersection",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Right of way at intersections",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_26",
        topic: "signals",
        question: "A flashing yellow ARROW is showing in your left-turn signal head. What may you do?",
        choices: [
          "Nothing - you must wait for a green arrow",
          "Turn immediately, because oncoming traffic is stopped",
          "Turn left when the oncoming traffic, which has a green light, is clear",
          "Turn only if there is no vehicle waiting behind you",
        ],
        correctIndex: 2,
        explanation:
          "The flashing yellow arrow is a permitted turn, not a protected one. Oncoming drivers have a green, so you turn only on a real gap.",
        context:
          "The four-lens head runs a sequence: a solid red arrow means stop, a solid yellow arrow warns that the turn is about to go red, a flashing yellow arrow permits the turn on a gap, and a solid green arrow protects it. At intersections with vehicle detection, the protected green phase may be skipped entirely when no one is waiting to turn.",
        trap:
          "Yellow reads as caution and flashing reads as warning, so drivers assume they must wait. Waiting at a flashing yellow arrow blocks a queue that has the legal right to turn.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Flashing yellow arrow left-turn signal head",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_27",
        topic: "parking",
        question: "How close to a railroad crossing may you park in Michigan?",
        choices: [
          "20 feet from the nearest rail",
          "No closer than 50 feet from the nearest rail",
          "30 feet from the crossbuck sign",
          "There is no set distance if the crossing has gates",
        ],
        correctIndex: 1,
        explanation:
          "Michigan bars parking within 50 feet of the nearest rail of a railroad crossing. The measurement is taken from the rail, not from the sign or the gate.",
        context:
          "The clearance protects sight lines along the track for approaching drivers, and keeps the crossing clear for the long vehicles that must stop there. It is the largest of the routine parking clearances apart from the 500 feet required around a fire or a crash.",
        trap:
          "Measuring from the crossbuck or the gate rather than from the rail itself usually puts a parked car well inside the restriction.",
        excerptKey: "park-railroad-50-feet",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking violations",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_28",
        topic: "safety",
        question:
          "The air temperature is hovering near freezing and the road looks merely wet. Where should you expect ice first?",
        choices: [
          "On long straight stretches",
          "In the middle of the lane where traffic runs",
          "On bridges and in underpasses",
          "On uphill grades",
        ],
        correctIndex: 2,
        explanation:
          "Bridges and underpasses freeze before the road does, because cold air reaches them from below as well as above.",
        context:
          "Michigan pairs this with the general winter advice: slow down gradually, test the brakes lightly to feel the surface, and remember that stopping power is far lower than on dry pavement. Most skids come from turning too quickly or braking suddenly on a slippery surface, so the corrections are about being gentle with every input.",
        trap:
          "A road surface that looks the same all the way across can hide a bridge deck that is several degrees colder.",
        excerptKey: "bridges-freeze-first",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Bad weather",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_29",
        topic: "signs",
        question:
          "Which vehicles are the orange slow-moving vehicle triangle intended for in Michigan?",
        choices: [
          "Any vehicle being driven by a learner",
          "Vehicles that are temporarily disabled",
          "Vehicles that do not move faster than 25 mph, such as Amish buggies and farm combines",
          "Golf carts and four-wheelers on public roads",
        ],
        correctIndex: 2,
        explanation:
          "The triangle marks vehicles that cannot exceed 25 mph - buggies, combines, tractors pulling wagons and similar industrial or agricultural equipment.",
        context:
          "Michigan is specific that golf carts and four-wheelers are not classed as slow-moving vehicles, so they do not qualify for the emblem. The practical point for drivers is closing speed: the difference between 55 mph and a 15 mph buggy eats a long straight faster than it looks, and the emblem is designed to be visible far enough back to react.",
        trap:
          "The emblem does not mean the vehicle has broken down, which is the reading that makes drivers approach too fast.",
        excerptKey: "sign-slow-moving-vehicle",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s2_30",
        topic: "licensing",
        question: "How long do points stay on a Michigan driving record?",
        choices: [
          "One year from the date of conviction",
          "Two years from the date of conviction",
          "Five years from the date of conviction",
          "Until the licence is next renewed",
        ],
        correctIndex: 1,
        explanation:
          "Points sit on the record for two years from the date of conviction. The conviction itself stays far longer than the points do.",
        context:
          "Michigan separates the two clocks deliberately. Most convictions remain on the record for at least seven years, some for ten, and a conviction for a fatality or for impaired driving stays permanently - but the points that trigger licensing action expire after two. Twelve points inside a two-year window means a driver assessment reexamination.",
        trap:
          "Points expiring is not the record being cleared. Insurers and the Secretary of State can still see the conviction long afterwards.",
        excerptKey: "points-two-year-life",
        sourceLabel: "What Every Driver Must Know - Chapter 2, Michigan's point system",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Exam Difficulty",
    difficulty: "medium",
    description:
      "Michigan-specific rules at the level the Secretary of State's Operator section actually tests: Michigan Lefts, work zone points, merging duties and the markings that mean something different here.",
    questions: [
      {
        id: "mi_s3_01",
        topic: "rightOfWay",
        question:
          "You have stopped at a red light and are turning right on red. Who must you yield to?",
        choices: [
          "Nobody, once you have stopped completely",
          "Other vehicles and any pedestrians or bicyclists lawfully in the crosswalk",
          "Only vehicles approaching from your left",
          "Only pedestrians who are already halfway across",
        ],
        correctIndex: 1,
        explanation:
          "A right turn on red is a yielding movement. After the full stop you give way to other traffic lawfully using the intersection and to anyone in the adjacent crosswalk.",
        context:
          "Michigan lists right on red among the situations where a driver must yield, alongside left turns out of driveways and alleys, left turns on green, and left turns on red onto a one-way street. The stop is a precondition, not the whole obligation - having stopped does not create a right to move.",
        trap:
          "Watching only for a gap in traffic from the left leaves the crosswalk on your right unwatched, and that is where the pedestrian is.",
        excerptKey: "yield-when-turning",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Right of way when turning",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_02",
        topic: "rules",
        question:
          "A centre lane is marked with a solid yellow line on the outside and a broken yellow line on the inside, on both sides. What is that lane for?",
        choices: [
          "Left turns only, made from either direction",
          "Passing slower traffic in either direction",
          "Merging when entering from a side street",
          "Emergency vehicles only",
        ],
        correctIndex: 0,
        explanation:
          "That marking is the left turn only centre lane. Drivers from both directions use it to turn left, and it may not be used for passing or as a merge lane.",
        context:
          "The lane exists to take turning traffic out of the through lanes, which is why entering it to build up speed or to overtake is both illegal and dangerous - a driver coming the other way may be doing exactly the same thing. Michigan also bars using the centre lane of a three-lane road to pass whenever that lane is marked for left turns only.",
        commonlyMissed: true,
        trap:
          "Using it as an acceleration lane after turning out of a driveway is common and specifically prohibited.",
        excerptKey: "center-left-turn-lane",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Left turn only center lane",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_03",
        topic: "signs",
        question:
          "A sign at a gap in the freeway median reads AUTHORIZED VEHICLES ONLY. Who may use that crossover?",
        choices: [
          "Any driver who has missed their exit",
          "Any vehicle displaying hazard lights",
          "Drivers making a legal U-turn when traffic is clear",
          "Law enforcement, emergency and maintenance vehicles only",
        ],
        correctIndex: 3,
        explanation:
          "The emergency crossover is reserved for law enforcement, emergency and maintenance vehicles. To change direction you drive to the next exit and re-enter the freeway the other way.",
        context:
          "Michigan states the rule twice, once under the sign and once in the freeway chapter, because missing an exit is exactly when drivers are tempted. The same passage bans backing up and turning around on a freeway. The median crossover is designed for vehicles that stop traffic before they use it, and nothing else.",
        trap:
          "Empty road in both directions is what makes the manoeuvre feel safe. It is prohibited whether or not anything is coming.",
        excerptKey: "sign-authorized-vehicles-only",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_04",
        topic: "licensing",
        question:
          "What does a Michigan teen need in order to move from a Level 2 Intermediate License to a Level 3 Full License?",
        choices: [
          "To turn 18 - Level 3 is issued automatically at that point",
          "To be at least 17, have held Level 2 six months, and have driven 12 consecutive months clean",
          "To pass a second road test after six months at Level 2",
          "To be at least 16 and a half with no more than one violation",
        ],
        correctIndex: 1,
        explanation:
          "Level 3 needs three things together: age 17, six months at Level 2, and twelve consecutive months with no moving violation, at-fault crash, suspension or GDL restriction violation.",
        context:
          "The twelve-month clean record is the requirement that trips people up, because it runs on its own clock. A ticket in month eleven restarts it, even though the age and the six-month holding period are already satisfied. Level 3 is issued at no fee once everything lines up, though a parent may ask to delay it if they think the teen is not ready.",
        commonlyMissed: true,
        trap:
          "Turning 18 ends GDL rather than granting Level 3. The two are different events with different consequences.",
        excerptKey: "level-3-eligibility",
        sourceLabel: "What Every Driver Must Know - Chapter 1, Graduated Driver Licensing",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_05",
        topic: "speed",
        question:
          "You are caught doing 12 mph over the limit inside a posted Michigan work zone. How many points does that carry?",
        choices: ["Four", "Two", "Three", "Six"],
        correctIndex: 0,
        explanation:
          "Work zone speeding is scored on its own scale: three points up to 10 mph over, four points for more than 10 but not more than 15, and five points beyond that. Twelve over lands in the four-point band.",
        context:
          "Outside a work zone the same 12 mph would be a three-point offence, so the zone shifts every tier up. Fines double for all moving violations in work zones as well, and causing injury or death in one exposes you to fines up to $7,500 and up to 15 years' imprisonment.",
        commonlyMissed: true,
        trap:
          "Applying the ordinary speeding scale inside a work zone understates the penalty by a point at every level.",
        excerptKey: "work-zone-points",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Construction zones",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_06",
        topic: "safety",
        question:
          "You need to stop hard on dry pavement in a car with anti-lock brakes. What is the correct technique?",
        choices: [
          "Pump the pedal rapidly",
          "Press just short of locking the wheels",
          "Apply hard, firm pressure from the start and hold it until you stop",
          "Brake, then release as the wheels begin to vibrate",
        ],
        correctIndex: 2,
        explanation:
          "With anti-lock brakes you press hard immediately and keep the pressure on. The pulsing you feel through the pedal is the system working, not a fault.",
        context:
          "The opposite technique applies without ABS: brake just hard enough to avoid locking the wheels, and if they do lock, release and reapply. That is threshold or controlled braking. Getting the two the wrong way round costs stopping distance in the emergency where you have least of it to spare.",
        trap:
          "Backing off when the pedal starts vibrating is the instinct that undoes anti-lock braking entirely.",
        excerptKey: "abs-braking",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Braking",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_07",
        topic: "parking",
        question:
          "How far from a fire station driveway must you keep clear when parking on the opposite side of the street, where the restriction is marked?",
        choices: ["20 feet", "75 feet", "50 feet", "30 feet"],
        correctIndex: 1,
        explanation:
          "Michigan uses two figures for a fire station: 20 feet from the driveway on the same side of the street, and 75 feet on the other side where it is marked.",
        context:
          "The larger distance on the far side reflects the turning arc a fire appliance needs to swing out of the station and into the road. It is one of the clearances the exam likes precisely because it is a pair of numbers rather than one, and because the marking requirement applies only to the far side.",
        commonlyMissed: true,
        trap:
          "Applying the 20-foot figure to both sides looks symmetrical and is wrong by 55 feet where the far side is marked.",
        excerptKey: "park-fire-station",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking violations",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_08",
        topic: "sharing",
        question:
          "What is meant by a commercial vehicle's no zones?",
        choices: [
          "The areas around a truck where the driver cannot see you",
          "Lanes where trucks are prohibited",
          "The gap a truck needs to complete a right turn",
          "Sections of road closed to hazardous loads",
        ],
        correctIndex: 0,
        explanation:
          "No zones are the blind spots around a large truck - directly in front, alongside and close behind - where the driver simply cannot see a smaller vehicle.",
        context:
          "Sitting in one is what turns a routine lane change or turn by the truck into a collision. The related figures are worth carrying: at 55 mph a car stops in about 130 feet while a loaded truck needs around 400, and most trailers are eight and a half feet wide, enough to hide a car completely when the truck is reversing.",
        trap:
          "Being visible in the truck's mirror is what matters, not being visible to yourself. If you cannot see the mirror, the driver cannot see you.",
        excerptKey: "truck-no-zones",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Commercial vehicles",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_09",
        topic: "signals",
        question:
          "You are already inside the intersection waiting to turn left when the arrow changes to solid yellow. What should you do?",
        choices: [
          "Reverse back behind the stop line",
          "Complete the turn with caution once traffic is clear",
          "Stop where you are and wait for the next green",
          "Abandon the turn and continue straight",
        ],
        correctIndex: 1,
        explanation:
          "A solid yellow arrow warns that the turn phase is ending. If you are approaching you must stop, but if you are already in the intersection with no conflicting traffic you complete the turn.",
        context:
          "The rule mirrors the ordinary yellow light: the yellow phase is there to clear the intersection, not to trap vehicles inside it. Michigan applies the same logic to a left turn on green - if the light turns red while you are still in the intersection, you complete the turn as quickly and safely as you can.",
        trap:
          "Stopping mid-intersection to wait for another green leaves you across the path of the traffic that is about to be released.",
        excerptKey: "solid-yellow-arrow",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Flashing yellow arrow left-turn signal head",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_10",
        topic: "impairment",
        question: "What is Michigan's implied consent law?",
        choices: [
          "Drivers consent to vehicle searches at any traffic stop",
          "Passengers consent to breath testing when they ride with a driver",
          "Every driver is treated as having consented to chemical testing when applying for and renewing a licence",
          "Drivers consent to having their record shared with insurers",
        ],
        correctIndex: 2,
        explanation:
          "By applying for and renewing a Michigan licence, every driver is treated as having already consented to chemical testing. Refusing therefore carries its own suspension.",
        context:
          "The consequence is separate from any drink-driving prosecution. Refusal brings a licence suspension under the implied consent law and six points on the record, and it happens whether or not the underlying case succeeds. Officers decide whether to request a test based on driving behaviour, personal observation and field sobriety testing.",
        trap:
          "Refusing looks like withholding evidence with no cost. In Michigan the refusal is itself the penalty trigger.",
        excerptKey: "implied-consent",
        sourceLabel: "What Every Driver Must Know - Chapter 2, Alcohol and drugs",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_11",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and the gates are coming down. What is the first thing to do?",
        choices: [
          "Try to restart the engine",
          "Call the number on the blue Emergency Notification sign",
          "Get everyone out of the vehicle and away from the tracks, then call 911",
          "Put the car in neutral and try to push it clear",
        ],
        correctIndex: 2,
        explanation:
          "When the gates are activated or a train is clearly approaching, everybody leaves the vehicle immediately and moves well away from the tracks. Then you call 911.",
        context:
          "You have roughly 20 seconds from the moment the lights and gates activate. The sequence changes only if the crossing is not activated and no train is in sight: everyone still gets out, but you call the railroad's emergency number from the blue Emergency Notification sign first, because railway staff may be able to stop or divert the train, and then call 911.",
        trap:
          "Trying to restart or push the car burns the seconds that decide whether the occupants are clear of the tracks.",
        excerptKey: "railroad-stuck-gates-active",
        sourceLabel: "What Every Driver Must Know - Chapter 4, If you are stuck on the tracks",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_12",
        topic: "rules",
        question: "How do you make a left turn at a Michigan Left intersection?",
        choices: [
          "Drive through the intersection or turn right, then make a U-turn at the median crossover",
          "Turn left from the centre lane as normal",
          "Wait for a protected green arrow before turning left",
          "Turn left only from the far right lane after yielding",
        ],
        correctIndex: 0,
        explanation:
          "Michigan Lefts remove the direct left turn. You continue through the intersection or turn right, then use the median crossover to make a U-turn and come back.",
        context:
          "Also called indirect left turns, they have been part of Michigan's road system since the late 1960s and exist to keep left-turning traffic out of the intersection itself. Some crossovers take two vehicles side by side and are marked with arrows and ONLY lettering; a crossover with no such markings is treated as single-lane, however wide it looks.",
        commonlyMissed: true,
        trap:
          "Waiting for a left-turn phase that will never come is what out-of-state drivers do at these junctions. There is no direct left to wait for.",
        excerptKey: "michigan-left-definition",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Michigan Lefts",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_13",
        topic: "rightOfWay",
        question:
          "You are on a freeway entrance ramp, accelerating toward the main carriageway. Who has the right of way?",
        choices: [
          "You do, because merging traffic has priority",
          "Whoever is travelling faster",
          "Traffic already on the freeway - you adjust your speed and position to merge safely",
          "Neither - the vehicles must alternate one for one",
        ],
        correctIndex: 2,
        explanation:
          "The merging driver carries the duty. Michigan's statute requires you to yield to traffic close enough to be an immediate hazard and to adjust speed so you can merge safely.",
        context:
          "The manual translates it plainly: if you are the one merging, you are the one who must adjust, and that applies to leaving a freeway and merging into a lane of traffic as well as joining one. It is why an acceleration lane is for matching speed rather than for forcing a gap, and why the manual tells you not to count on other drivers to let you in.",
        commonlyMissed: true,
        trap:
          "Zipper merging by courtesy is common in practice, but courtesy is not the legal rule. Priority stays with the through traffic.",
        excerptKey: "merging-translation",
        sourceLabel: "What Every Driver Must Know - Chapter 7, A word about merging",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_14",
        topic: "signs",
        question:
          "You see a diamond-shaped warning sign reading BRIDGE ICES BEFORE ROAD. What is it telling you?",
        choices: [
          "The bridge deck can be icy even when the road surface is clear",
          "The bridge is closed during freezing weather",
          "Salt has been applied to the bridge only",
          "The bridge surface is being resurfaced",
        ],
        correctIndex: 0,
        explanation:
          "The sign warns that the bridge can be icy while the approach roads are merely wet. Cold air circulates under a bridge deck as well as over it.",
        context:
          "It matters most at temperatures around freezing, when the road itself stays just warm enough and the bridge does not. The correct response is to be off the brakes and off the accelerator as you cross, holding a steady line, since braking or steering sharply on the deck is what turns the warning into a skid.",
        trap:
          "A clear, wet-looking road right up to the bridge is exactly the condition the sign exists for.",
        excerptKey: "sign-bridge-ices",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_15",
        topic: "speed",
        question:
          "What is the minimum speed on a Michigan freeway where nothing else is posted?",
        choices: [
          "There is no minimum",
          "45 mph",
          "55 mph",
          "40 mph",
        ],
        correctIndex: 2,
        explanation:
          "Michigan freeways run a 70 mph maximum and a 55 mph minimum unless posted otherwise. Driving well below the minimum is an offence in its own right.",
        context:
          "The floor exists because a slow vehicle in fast traffic forces everybody else to change lanes around it. Michigan's driving skills test treats it the same way: a candidate who cannot maintain the minimum posted speed on the expressway fails as dangerously inexperienced, unless traffic or weather genuinely justify the lower speed.",
        trap:
          "Assuming only the maximum is enforceable ignores half the posted band, and slow-lane crawling is a real citation in Michigan.",
        excerptKey: "speed-70-freeway",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Speed limits",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_16",
        topic: "safety",
        question:
          "How far ahead does Michigan teach drivers to look when scanning the road?",
        choices: [
          "As far as the headlights reach",
          "To the vehicle immediately in front",
          "20 to 30 seconds down the road",
          "Two car lengths beyond the vehicle ahead",
        ],
        correctIndex: 2,
        explanation:
          "Michigan's scanning rule is 20 to 30 seconds ahead. At that range you spot developing hazards early enough to respond smoothly rather than react at the last second.",
        context:
          "It works alongside the three to four second following distance, which governs the space directly in front. Looking far ahead is what lets you plan; the following gap is what buys you the time to act. On expressways the driving skills test also expects a traffic check roughly every eight to ten seconds, and every five to seven seconds in urban areas.",
        trap:
          "Watching the bumper ahead feels attentive and gives you no warning at all. It is the same information the driver in front already had a second ago.",
        excerptKey: "look-20-30-seconds",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Stopping distances",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_17",
        topic: "parking",
        question:
          "What does a Michigan driver need in order to park free of charge in a metered space using a disability placard?",
        choices: [
          "Any valid disability placard",
          "A disability licence plate",
          "A doctor's letter carried in the vehicle",
          "A disability placard bearing a yellow free-parking sticker",
        ],
        correctIndex: 3,
        explanation:
          "Free parking requires the yellow free-parking sticker on the placard. An ordinary disability placard or plate lets you use the reserved space, but not park free.",
        context:
          "The requirements for the free-parking sticker are narrower than for the placard or plate. To use a disability space at all, the driver or a passenger must have a qualifying disability - blindness, or a condition that significantly limits walking or requires a wheelchair, walker or crutch - and the vehicle must display the plate or placard. Parking on the blue-striped area beside a van-accessible space is separately prohibited.",
        trap:
          "Holding a placard is treated as an all-purpose parking exemption. The free-parking entitlement is a separate, narrower permission.",
        excerptKey: "disability-free-parking",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Disability parking",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_18",
        topic: "sharing",
        question: "Which vehicle meets Michigan's legal definition of a moped?",
        choices: [
          "A 150 cc scooter with automatic transmission that reaches 45 mph",
          "A two-wheeler with an engine of no more than 100 cc that cannot exceed 30 mph and needs no gear changes",
          "Any two-wheeled vehicle ridden by someone without a motorcycle endorsement",
          "An electric bicycle with pedals and a throttle",
        ],
        correctIndex: 1,
        explanation:
          "Michigan's moped definition combines three tests: two or three wheels with an engine of 100 cc or less, a top speed of no more than 30 mph on the level, and a drive system that does not require gear shifting.",
        context:
          "Scooter is a general term rather than a legal class, so a machine that looks like a moped may legally be a motorcycle. The distinction matters for licensing and for where the vehicle may go: an unlicensed teen of 15 or older may apply for a moped licence with parental approval, while small motorcycles of 124 cc or less are barred from freeways entirely.",
        trap:
          "Appearance decides nothing. A 150 cc scooter fails the engine-size test however much it looks like a moped.",
        excerptKey: "moped-definition",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Moped or scooter?",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_19",
        topic: "licensing",
        question:
          "What sections make up Michigan's written driver knowledge test?",
        choices: [
          "A single combined multiple-choice paper",
          "An Operator section and a Signs section, both of which must be passed",
          "A rules section and a practical hazard-perception clip test",
          "A signs section only, with rules assessed during the road test",
        ],
        correctIndex: 1,
        explanation:
          "The test runs in two portions - an Operator section of about 45 minutes and a Signs segment of about 15. Passing one and failing the other does not pass you.",
        context:
          "The Secretary of State makes the consequence explicit: a candidate who passes one section online but fails the other has to attend a branch office and sit the full test again, at no charge. In a branch office, failing terminates the session and you must rebook for a different day. A pass, once achieved, stays valid for one year.",
        trap:
          "Treating road signs as a warm-up to the real test is backwards. The Signs segment is scored separately and can fail you on its own.",
        excerptKey: "knowledge-test-two-sections",
        sourceLabel: "Michigan Secretary of State - New drivers (18 and older)",
        sourceUrl: SOS18,
      },
      {
        id: "mi_s3_20",
        topic: "signals",
        question:
          "What is the five-section doghouse signal head used for?",
        choices: [
          "Controlling left or right turns, using red, yellow and green lights plus yellow and green arrows",
          "Controlling bus and taxi lanes",
          "Controlling traffic at railroad crossings",
          "Warning of pedestrians at midblock crossings",
        ],
        correctIndex: 0,
        explanation:
          "The doghouse head controls a turning movement. It carries the usual red, yellow and green lights together with a yellow and a green turn arrow.",
        context:
          "Reading it comes down to arrow against circle. A lit green arrow gives a protected turn, with all conflicting traffic stopped. A lit green circle permits the same turn but only once oncoming traffic has cleared, so the judgement is yours. Yellow in either form means the phase is ending, and red means stop.",
        trap:
          "Seeing green and going is what makes the arrow matter. A green circle in this head is a permitted turn, not a protected one.",
        excerptKey: "doghouse-protected-turn",
        sourceLabel: "What Every Driver Must Know - Chapter 5, The 5-section-head signal",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_21",
        topic: "rules",
        question:
          "Two lanes running the same direction are separated by a DOUBLE solid white line. What does that mean?",
        choices: [
          "Traffic in the right lane must yield to the left",
          "You may cross only to make a turn",
          "You may not cross the line at all",
          "You may cross it to pass, but not to change lanes permanently",
        ],
        correctIndex: 2,
        explanation:
          "A double solid white line marks a path where traffic runs the same way on both sides but crossing between them is prohibited outright.",
        context:
          "White lines separate traffic moving in the same direction, and the more solid the marking, the stronger the restriction. Broken white lines separate ordinary lanes and may be crossed; a single solid white line marks the road edge or a lane change that is considered dangerous; a double solid white forbids crossing entirely. Michigan also states plainly that it is illegal to cross a solid white line when passing.",
        trap:
          "Because both sides travel the same way, drivers assume the line is advisory. Double solid white is a prohibition, not a suggestion.",
        excerptKey: "double-solid-white",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Double solid white lines",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_22",
        topic: "impairment",
        question:
          "Marijuana is legal for adult recreational use in Michigan. How are the driving penalties set?",
        choices: [
          "The same as operating under the influence of alcohol",
          "As a civil infraction with a fine only",
          "Half the penalty for alcohol, since possession is lawful",
          "As a licence suspension with no criminal exposure",
        ],
        correctIndex: 0,
        explanation:
          "Michigan applies the same penalties as for alcohol: up to 93 days in jail, a fine of up to $500, licence suspension and six points, with heavier penalties if minors are in the vehicle.",
        context:
          "Legal to possess is not legal to drive on. Adults 21 and over may transport up to 2.5 ounces, of which no more than 15 grams may be concentrate, but operating any vehicle while under the influence remains an offence, and drivers and passengers alike may not smoke in the passenger area on a public way. Marijuana distorts perception of time, space and speed.",
        trap:
          "Legalisation is read as a softening of the driving rules. Michigan left the driving penalties exactly where they were.",
        excerptKey: "marijuana-same-penalties",
        sourceLabel: "What Every Driver Must Know - Chapter 2, Alcohol and drugs",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_23",
        topic: "emergencies",
        question:
          "Fog closes in until you can no longer see the road at all. What does Michigan advise?",
        choices: [
          "Switch to high beams and continue slowly",
          "Pull off the road, switch on the four-way flashers and wait for the fog to lift",
          "Follow the tail lights of the vehicle ahead",
          "Stop in your lane and switch on the hazard lights",
        ],
        correctIndex: 1,
        explanation:
          "When the fog is thick enough that you cannot see, you get off the road, put the four-way emergency flashers on and wait it out.",
        context:
          "Before it gets that bad the rule is low beams and reduced speed, because high beams reflect off the water droplets and make visibility worse. Michigan also lists low beams for daytime rain and snow. Following someone else's tail lights is the manoeuvre that turns one fog collision into a chain of them.",
        trap:
          "Stopping in the traffic lane with hazards on leaves you exactly where the next driver cannot see you until it is too late.",
        excerptKey: "fog-pull-off",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Rain and fog",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_24",
        topic: "rightOfWay",
        question:
          "There is no crosswalk painted at a quiet junction and no signals. A pedestrian steps off the kerb on your side of the road. What is the position?",
        choices: [
          "They must wait, because there is no marked crosswalk",
          "You yield only if they are already past the centre line",
          "You may proceed if you sound the horn first",
          "You must yield - an unmarked crosswalk on the driver's side still counts",
        ],
        correctIndex: 3,
        explanation:
          "Michigan requires drivers to yield to a pedestrian in an unmarked crosswalk on the driver's side of the roadway where no traffic control devices are present.",
        context:
          "An intersection contains a crosswalk whether or not anyone has painted one, which is the point most drivers miss. Michigan's list of pedestrian duties is long and deliberately so: marked crosswalks at intersections or midblock, unmarked crosswalks, anyone who entered before the signal changed, and anyone emerging from an alley, driveway or private road.",
        commonlyMissed: true,
        trap:
          "No paint on the road reads as no crossing. The legal crosswalk exists at the junction regardless of the markings.",
        excerptKey: "pedestrian-unmarked-crosswalk",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Right of way and pedestrians",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_25",
        topic: "signs",
        question: "A sign warns RIGHT LANE ENDS. What does Michigan say it tells you?",
        choices: [
          "The right lane is closed for construction",
          "The right lane ends in 500 feet - prepare to merge left",
          "The right lane becomes an exit-only lane",
          "The right lane narrows but continues",
        ],
        correctIndex: 1,
        explanation:
          "It is an advance warning that the right lane runs out in 500 feet, so you should be preparing to merge left rather than racing to the taper.",
        context:
          "Michigan pairs this with the LANE ENDS MERGE LEFT sign, which adds the duty explicitly: yield the right of way to traffic already in the left lane. Whichever sign you meet, the driver leaving the ending lane is the one who must find the gap, exactly as with a freeway on-ramp.",
        trap:
          "Merging is not an entitlement created by the sign. The traffic in the continuing lane keeps its priority.",
        excerptKey: "sign-right-lane-ends",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Traffic sign challenge answers",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_26",
        topic: "safety",
        question:
          "How close may you get to an oncoming vehicle before you must dip your high beams in Michigan?",
        choices: [
          "200 feet",
          "300 feet",
          "1,000 feet",
          "500 feet - and it is illegal even to flash them within that distance",
        ],
        correctIndex: 3,
        explanation:
          "Michigan sets 500 feet, and the prohibition covers flashing the high beams as well as leaving them on.",
        context:
          "The same 500-foot figure appears in the headlight rule from the other direction: headlights must be on whenever there is not enough daylight to see people and vehicles clearly at 500 feet. High beams are also barred behind another vehicle, because the glare fills their mirrors. If an oncoming driver does not dip theirs, look toward the right edge of the road rather than into the light.",
        commonlyMissed: true,
        trap:
          "Flashing high beams to remind another driver to dip theirs is itself the offence within 500 feet.",
        excerptKey: "high-beams-500-feet",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Driving at night",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_27",
        topic: "speed",
        question: "What happens to fines for moving violations committed in a Michigan work zone?",
        choices: [
          "They stay the same but carry extra points",
          "They rise by 50 per cent",
          "They are doubled",
          "They are set by the contractor operating the site",
        ],
        correctIndex: 2,
        explanation:
          "Fines are doubled for all moving violations in a work zone, and speeding there carries increased points on top of the doubled fine.",
        context:
          "Michigan applies the doubling to every moving violation in the zone, not only to speeding, so a lane-change or signal offence doubles as well. The same doubling applies to failing to stop for a school bus. Causing injury or death in a work zone moves the case out of the fine schedule entirely, exposing the driver to up to $7,500 and 15 years.",
        trap:
          "The doubling does not depend on workers being present. The zone itself is what triggers it.",
        excerptKey: "work-zone-fines-doubled",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Construction zones",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_28",
        topic: "rules",
        question:
          "A road maintenance vehicle ahead is showing flashing green lights. What does that tell you?",
        choices: [
          "The vehicle is a private contractor's truck",
          "The lane ahead is open and clear",
          "The vehicle is escorting an oversize load",
          "Road work is in progress - slow down and drive with caution",
        ],
        correctIndex: 3,
        explanation:
          "Michigan allows state and local road agencies to run flashing green lights on maintenance vehicles, switched on only while road work is actually happening. They mean slow down and take care.",
        context:
          "Green was chosen because the eye is most sensitive to that wavelength, so the light carries further through snow and road dust than amber does. The lights supplement rather than replace the traditional amber ones. Private contractors are not permitted to display green lights at all, so a green flash always means a public road agency.",
        commonlyMissed: true,
        trap:
          "Green normally signals go, and here it signals the opposite. It is a hazard marker, not a clearance.",
        excerptKey: "green-lights-maintenance",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Maintenance vehicles",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_29",
        topic: "parking",
        question:
          "How close to a marked crosswalk may you park in Michigan?",
        choices: [
          "No closer than 20 feet",
          "No closer than 10 feet",
          "No closer than 30 feet",
          "There is no restriction if the crosswalk is not at an intersection",
        ],
        correctIndex: 0,
        explanation:
          "Michigan requires 20 feet of clearance from a marked crosswalk, and 15 feet from an intersection where no crosswalk is marked.",
        context:
          "The two figures work as a pair, and the smaller one applies where there is no paint. Both exist so that a driver approaching the junction can see someone stepping off the kerb, which a car parked hard against the crossing would hide. Blocking a crosswalk itself is separately prohibited.",
        trap:
          "The absence of a painted crossing does not remove the restriction - it just changes the number from 20 feet to 15.",
        excerptKey: "park-crosswalk-20-feet",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Parking violations",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_30",
        topic: "sharing",
        question:
          "A cyclist ahead of you is riding in the middle of the lane on a Michigan road with no bike lane. Is that lawful?",
        choices: [
          "No - cyclists must stay within three feet of the kerb",
          "Yes - cyclists may ride anywhere in the lane as long as they ride with traffic",
          "Only on roads posted below 35 mph",
          "Only where the shoulder is unusable",
        ],
        correctIndex: 1,
        explanation:
          "Michigan permits cyclists to ride anywhere in the lane provided they are travelling with traffic. Lane position is their judgement to make.",
        context:
          "Cyclists hold the same rights and responsibilities as drivers on every Michigan road except limited-access freeways. A rider is not required to use a bicycle lane even where one exists, and may leave it to turn left or to avoid a hazard. Passing still requires the 3-foot minimum, which usually means moving into another lane.",
        commonlyMissed: true,
        trap:
          "Riding centrally looks obstructive and is often the safest position, since it keeps the rider out of the door zone and makes them visible.",
        excerptKey: "bicyclist-rights",
        sourceLabel: "What Every Driver Must Know - Chapter 6, Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_31",
        topic: "licensing",
        question:
          "How long is a newly licensed Michigan driver on probation?",
        choices: [
          "One year",
          "Until they turn 21",
          "Six months",
          "At least three years",
        ],
        correctIndex: 3,
        explanation:
          "New drivers, including teens under Graduated Driver Licensing, are placed on probation for a minimum of three years while the Secretary of State watches their record.",
        context:
          "Probation is a separate programme from GDL, though it works the same way, and it applies to adults getting a first licence as well as to teens. To end it, a driver must complete the last 10 months without a ticket, an at-fault crash or a suspension; anything that goes wrong extends the period. A probationary driver may be called in for reexamination after only one or two violations.",
        trap:
          "Three years is a minimum, not a fixed term. A single ticket near the end restarts a ten-month clean-record requirement.",
        excerptKey: "probation-three-years",
        sourceLabel: "What Every Driver Must Know - Chapter 1, Probationary license program",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_32",
        topic: "signals",
        question:
          "You are turning right and the pedestrian signal across your path starts flashing. What does the flashing phase mean?",
        choices: [
          "Pedestrians must clear the crossing immediately, so you may turn",
          "The pedestrian signal has failed",
          "Pedestrians may start crossing if they can do so quickly",
          "The safe crossing time is ending, and anyone already crossing should finish",
        ],
        correctIndex: 3,
        explanation:
          "Flashing means the time to cross safely is nearing its end. Anyone already in the crosswalk should complete their crossing, and drivers still yield to them.",
        context:
          "Michigan's pedestrian signals run walking person or WALK to start, the flashing phase to finish, and DONT WALK or the raised red hand to stop. Some carry an audible or visual countdown. Whatever the display says to the pedestrian, the instruction to the driver is unchanged: always yield to people in the crossing.",
        trap:
          "The flashing phase is read as a signal that pedestrians have lost priority. It is the opposite - it applies to people who are already committed.",
        excerptKey: "pedestrian-flashing-signal",
        sourceLabel: "What Every Driver Must Know - Chapter 5, Pedestrian signals",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_33",
        topic: "impairment",
        question:
          "Michigan sets an enhanced high-BAC drink-driving offence. At what alcohol content does it start?",
        choices: ["0.17", "0.12", "0.15", "0.20"],
        correctIndex: 0,
        explanation:
          "The enhanced threshold is 0.17. Above it, the offence carries substantially heavier penalties than an ordinary charge at 0.08.",
        context:
          "Michigan therefore has three alcohol lines rather than one: 0.02 for drivers under 21, 0.08 for any driver, and 0.17 for the enhanced offence. A conviction for operating while intoxicated at any level is six points and stays on the driving record permanently, and driving with a passenger under 16 in the vehicle adds a further criminal charge on top.",
        trap:
          "0.15 is the enhanced threshold in several other states. Michigan's sits two hundredths higher.",
        excerptKey: "bac-017",
        sourceLabel: "Michigan Vehicle Code - MCL 257.625(1)(c)",
        sourceUrl: MCL_625,
      },
      {
        id: "mi_s3_34",
        topic: "emergencies",
        question:
          "You have a minor collision on a busy Michigan road. Nobody is hurt and both cars still drive. What does the law require?",
        choices: [
          "Leave both vehicles exactly where they stopped until police arrive",
          "Move only if a police officer instructs you to",
          "Photograph the scene, then move the vehicles to the shoulder",
          "Move the vehicles off the main roadway to a safe spot such as the shoulder or a nearby car park",
        ],
        correctIndex: 3,
        explanation:
          "Where a crash causes no serious injury or death and the vehicle can be driven safely, Michigan requires it to be moved off the main roadway.",
        context:
          "The reason is secondary collisions: a stationary car in a live lane is the hazard that produces the next crash. Once clear, you still exchange names, addresses, licence numbers, registration and insurance details, help anyone injured get medical aid, and notify police if anyone is hurt or the damage exceeds $1,000. Leaving the scene entirely remains a criminal offence.",
        trap:
          "The old advice about preserving the scene applies to serious crashes. For a minor one, Michigan requires the opposite.",
        excerptKey: "crash-move-vehicle",
        sourceLabel: "What Every Driver Must Know - Chapter 7, Crashes",
        sourceUrl: HB,
      },
      {
        id: "mi_s3_35",
        topic: "rightOfWay",
        question:
          "You and another driver arrive together at an intersection whose signal is dead. Who goes first?",
        choices: [
          "The driver who signals first",
          "The driver on the larger road",
          "The driver on the right",
          "Neither - both must wait for a police officer",
        ],
        correctIndex: 2,
        explanation:
          "A dead signal is treated as an all-way stop, so a genuine tie is broken by the same rule: the vehicle on the left yields to the vehicle on the right.",
        context:
          "The full sequence is stop, yield to anyone already at the intersection, then give way to the right on a tie. Road size, speed and traffic volume play no part. If a police officer or a construction worker is directing traffic at the junction, their signals override the rule entirely.",
        trap:
          "Assuming the bigger road keeps priority when the lights fail is exactly the assumption that puts two cars into the middle of the junction together.",
        excerptKey: "malfunctioning-signal",
        sourceLabel: "What Every Driver Must Know - Chapter 4, Right of way at intersections",
        sourceUrl: HB,
      },
    ],
  },
];
