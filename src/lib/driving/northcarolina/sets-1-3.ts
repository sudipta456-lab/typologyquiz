import type { DrivingTestSet } from "../types";

// Every fact below was checked against the North Carolina Driver Handbook
// (revised May 2025, printed 09/25) published by the NCDOT Division of Motor
// Vehicles, plus NCDMV's own pages and 19A NCAC 03B .0201 - the rule that
// actually sets the pass marks, which the handbook never states - and one
// N.C. Department of Insurance page for the liability minimums the handbook
// still prints at their pre-July-2025 figures.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads NCDMV's
// own authoritative wording on the state's site.
const HB =
  "https://www.ncdot.gov/dmv/license-id/driver-licenses/new-drivers/Documents/nc-driver-handbook.pdf";
const RULE =
  "https://www.ncdot.gov/about-us/how-we-operate/policy-process/rules/Documents/19a-ncac-03b-0201-emergency-rule.pdf";

export const northcarolinaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "North Carolina Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in North Carolina: what the shapes and colours mean, who goes first, and the handful of numbers NCDMV expects you to know cold before you sit the knowledge examination.",
    questions: [
      {
        id: "nc_s1_01",
        topic: "signs",
        question:
          "You come to an eight-sided red sign at an intersection and there is no other traffic in sight. What does North Carolina require of you?",
        choices: [
          "Slow to a crawl and roll through, since the way is clear",
          "Come to a full stop, then move off only once you are sure the way is clear",
          "Yield to anything already inside the intersection and keep going",
          "Stop only if a pedestrian is waiting at the corner",
        ],
        correctIndex: 1,
        explanation:
          "The octagon carries exactly one instruction, and that instruction is a full stop. How empty the cross street looks makes no difference to what the law asks of you.",
        context:
          "North Carolina builds meaning into a sign's shape and colour as well as its words, so you can begin reacting before you can read the text. The octagon is used for stop signs and nothing else, the downward triangle for yield, the yellow diamond to warn of something ahead. Learning the shape system pays better than memorising individual signs, because the signs test can show you one you have never met and expect you to reason from its outline.",
        trap:
          "A rolling stop feels like compliance and is not. The wheels have to stop turning before you look and go.",
        excerptKey: "stop-sign-octagon",
        sourceLabel: "NC Driver Handbook - Chapter 5, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_02",
        topic: "signals",
        question:
          "You face a steady red circular signal and there is no sign about turning. May you turn right?",
        choices: [
          "Yes, after coming to a complete stop and yielding to traffic and pedestrians",
          "Yes, and you need not stop first as long as the way looks clear",
          "No, North Carolina does not permit turning right on a red signal",
          "Only outside the hours of 7 a.m. to 9 a.m. and 2 p.m. to 4 p.m.",
        ],
        correctIndex: 0,
        explanation:
          "A right turn on red is allowed in North Carolina unless a NO TURN ON RED sign is posted, but only after a complete stop, and only after you have given way to traffic and to anyone on foot.",
        context:
          "Steady red means stop. The right turn is a permitted exception to that, not a suspension of it. The state takes the pedestrian half seriously enough to attach its own fine: a driver who turns right on red into someone crossing, or about to cross, faces a penalty of between one hundred and five hundred dollars, separate from anything attached to the turn itself.",
        trap:
          "Treating red as a yield sign is the error. The stop is not optional just because you can see the cross street is empty.",
        excerptKey: "steady-red-right-turn",
        sourceLabel: "NC Driver Handbook - Chapter 5, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_03",
        topic: "speed",
        question:
          "You are driving through a small town and there is not a single speed limit sign on the street. What is the limit?",
        choices: ["25 mph", "30 mph", "45 mph", "35 mph"],
        correctIndex: 3,
        explanation:
          "Inside cities and towns the statutory limit is 35 mph whenever nothing else is posted. It applies by default, so the absence of a sign is not the absence of a limit.",
        context:
          "North Carolina sets a small number of default maximums and then lets local signs override them. Unposted streets in a city or town are 35 mph, unposted roads outside them are 55 mph, and interstates run to 70 mph. Those defaults are ceilings, not targets: the handbook is blunt that you must often drive slower than the posted figure and never faster.",
        trap:
          "25 mph is the residential default in a good many other states, so drivers who learned elsewhere reach for it. North Carolina sits ten higher.",
        excerptKey: "city-limit-35",
        sourceLabel: "NC Driver Handbook - Chapter 4, Adjusting Your Speed",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_04",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection with no signs or signals at exactly the same moment, on roads that cross at right angles. Who goes first?",
        choices: [
          "The driver on the right",
          "Whoever signals their intention first",
          "The driver travelling straight rather than turning",
          "The heavier vehicle, because it needs more room to stop",
        ],
        correctIndex: 0,
        explanation:
          "When two vehicles arrive together at an uncontrolled intersection, the one on the right has the right of way. The tie-break turns on position, not on size, speed or intention.",
        context:
          "Uncontrolled intersections run on a short order of priority. Anything already inside the intersection outranks anything still approaching. Only when two drivers genuinely arrive together does the vehicle-on-the-right rule decide it. Having the right of way does not license you to press on regardless; North Carolina separately requires you to slow down for every intersection even when priority is yours.",
        trap:
          "Signalling first proves nothing. A turn signal announces what you intend, it does not manufacture a right to go.",
        excerptKey: "uncontrolled-vehicle-right",
        sourceLabel: "NC Driver Handbook - Chapter 4, Special Driving Situations",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_05",
        topic: "safety",
        question:
          "A car built with seat belts is moving forward on a North Carolina highway. Who must be belted?",
        choices: [
          "The driver and the front seat passengers only",
          "The driver and every passenger, in every seat",
          "Everyone under 16, wherever they are sitting",
          "Nobody, provided the vehicle has air bags",
        ],
        correctIndex: 1,
        explanation:
          "North Carolina's belt law reaches the driver and all passengers, front and rear alike, for as long as the vehicle is in forward motion. Age and seating position do not carve anyone out.",
        context:
          "This is one of the places where North Carolina is stricter than its neighbours. There is no adults-in-the-back exemption here: the requirement is written around everyone in a vehicle that came from the factory with belts. Air bags change nothing, and a car with automatic shoulder harnesses still needs the lap belt fastened. A short list of narrow exemptions exists, for medical conditions, rural letter carriers and frequent-stop delivery work under 20 mph, and it is short on purpose.",
        trap:
          "Several states belt only the front seats or only minors in the back, and the habit travels. North Carolina belts everybody.",
        excerptKey: "seat-belt-all-occupants",
        sourceLabel: "NC Driver Handbook - Chapter 4, Seat Belts",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s1_06",
        topic: "rules",
        question: "On which side of the road does North Carolina law require you to drive?",
        choices: [
          "Whichever side has the better surface",
          "The left, whenever passing on the right is impossible",
          "Down the centre of the roadway on unmarked rural roads",
          "The right, apart from the few cases the law allows such as one-way streets and passing",
        ],
        correctIndex: 3,
        explanation:
          "Driving on the right is the rule; the left side is legal only in the specific situations the law names, which are chiefly one-way streets and the act of passing.",
        context:
          "The same section adds a rule people forget: if you are moving slower than the posted limit on a multi-lane highway you belong in the far right lane, and you leave it only to pass, to turn left, or to get round an obstruction. That makes the right lane the default position rather than the slow lane, which is why sitting in the left lane at the limit is treated as a problem rather than a courtesy.",
        trap:
          "Reading the rule as a preference rather than a requirement. Drifting left to avoid a rough shoulder is still driving on the wrong side.",
        excerptKey: "drive-right-side",
        sourceLabel: "NC Driver Handbook - Chapter 4, Driving on Your Side of the Road",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_07",
        topic: "licensing",
        question:
          "What share of the questions must you answer correctly to pass North Carolina's knowledge examination?",
        choices: ["70 percent", "75 percent", "80 percent", "90 percent"],
        correctIndex: 2,
        explanation:
          "The rule that governs the examination sets the bar at eighty percent. Nothing lower passes, however many questions the terminal happens to put in front of you.",
        context:
          "The knowledge examination is a computer test on the rules of the road, with an audio option for anyone who finds reading difficult. The pass mark lives in the administrative rule rather than in the handbook, which is why so many study guides quote a raw number of questions instead. If you fail it you wait seven calendar days before trying again, and because every driver licence test is passed separately, the other parts stand.",
        trap:
          "Assuming the driving-school figure of seventy-five percent applies here. The rule is eighty, which on a twenty-five item test means five wrong answers is already too many.",
        excerptKey: "knowledge-test-80-percent",
        sourceLabel: "19A NCAC 03B .0201 - Knowledge Examination",
        sourceUrl: RULE,
        commonlyMissed: true,
      },
      {
        id: "nc_s1_08",
        topic: "impairment",
        question:
          "At what blood alcohol concentration is an adult driver legally impaired in North Carolina?",
        choices: ["0.05 percent", "0.08 percent", "0.10 percent", "0.04 percent"],
        correctIndex: 1,
        explanation:
          "Everyone's driving is impaired at 0.08 percent, and that is the figure written into the offence. A test at or above it revokes your driving privilege on the spot for at least thirty days.",
        context:
          "Impaired driving can be proved two different ways in North Carolina, and only one of them involves a number. The state can show your physical or mental faculties were appreciably impaired by alcohol or drugs, or it can simply show a concentration of 0.08 or more. The threshold drops to 0.04 behind a commercial vehicle, and to any detectable amount at all for a driver under 21.",
        trap:
          "0.05 is the level at which the handbook says crash risk starts climbing, not the level at which you are charged. The two get confused constantly.",
        excerptKey: "bac-08",
        sourceLabel: "NC Driver Handbook - Chapter 2, Alcohol and the Law",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_09",
        topic: "sharing",
        question:
          "A school bus stops on an ordinary two-lane road and puts out its mechanical stop signal. Which traffic must stop?",
        choices: [
          "Only vehicles travelling behind the bus",
          "Only vehicles approaching the bus head-on",
          "All traffic from both directions",
          "Nobody, so long as you pass at under 20 mph",
        ],
        correctIndex: 2,
        explanation:
          "On a two-lane road every vehicle stops, whichever way it is heading. Children cross the road in front of a stopped bus, so both streams have to be held.",
        context:
          "North Carolina spells out five separate road layouts for stopped school buses, and the answer changes with the layout. Two-lane roads, two-lane roads with a centre turning lane, and four-lane roads without a median all stop traffic in both directions. Only a divided highway with a median, or a road of four lanes or more with a centre turning lane, lets oncoming traffic keep moving. Passing a stopped school bus carries five points, the heaviest single entry on the non-commercial table.",
        trap:
          "A centre turning lane on a two-lane road does not turn it into a divided highway. Both directions still stop.",
        excerptKey: "school-bus-two-lane",
        sourceLabel: "NC Driver Handbook - Chapter 4, School Buses",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_10",
        topic: "signs",
        question: "What shape is the YIELD sign, and what does it ask of you?",
        choices: [
          "A downward-pointing triangle; slow down and give way, stopping if that is what it takes",
          "A yellow diamond; slow down and watch for a hazard ahead",
          "An octagon; stop every time before proceeding",
          "A pentagon; be alert for children crossing",
        ],
        correctIndex: 0,
        explanation:
          "Yield is a red and white triangle standing on its point. It tells you to slow and give way, and whether you actually have to stop depends on what is coming on the intersecting road.",
        context:
          "Yield and stop are different obligations, and North Carolina keeps them apart deliberately. A stop sign demands a full halt every time regardless of traffic. A yield sign demands that you slow enough to give way, and converts to a stop only when the traffic you must not interfere with makes stopping the only way to comply.",
        trap:
          "Treating yield as a slow-down-and-look formality. If giving way requires a stop, the sign required a stop.",
        excerptKey: "yield-sign",
        sourceLabel: "NC Driver Handbook - Chapter 5, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_11",
        topic: "parking",
        question: "On a two-way street, which side may you park on?",
        choices: [
          "The right",
          "The left",
          "Either, provided you are within twelve inches of the kerb",
          "Either, provided you leave your hazard flashers on",
        ],
        correctIndex: 0,
        explanation:
          "Park on the right on any two-way street. Left-side parking is permitted only where the street itself is one-way.",
        context:
          "The parking rules mostly exist to keep you out of places where a driver cannot see you in time. That is why they run in distances: fifteen feet from a fire hydrant, twenty-five feet from the kerb line of an intersecting street, and, if you park on a shoulder at all, only where approaching drivers can see the vehicle from at least two hundred feet in both directions.",
        trap:
          "Pulling over facing traffic on a quiet street to save a turn. It is still the wrong side.",
        excerptKey: "park-right-side",
        sourceLabel: "NC Driver Handbook - Chapter 4, Parking",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_12",
        topic: "signals",
        question: "The signal above the intersection is flashing red. What does it mean?",
        choices: [
          "Slow down and proceed with caution, without stopping",
          "Treat it exactly as you would a stop sign",
          "The signal has failed; wait until it is repaired",
          "Stop and wait for it to turn green",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red carries the same meaning as a stop sign: stop, then go when you can enter without interfering with traffic already approaching.",
        context:
          "The flashing signals map onto sign shapes rather than onto their steady counterparts. Flashing red behaves as a stop sign; flashing yellow behaves as a warning sign, meaning slow down and take care. A signal that has gone dark altogether is different again, and North Carolina tells you to treat that intersection as though every approach carried a stop sign.",
        trap:
          "Waiting for green. A flashing red never turns green, and drivers sit through it.",
        excerptKey: "flashing-red-yellow",
        sourceLabel: "NC Driver Handbook - Chapter 5, Flashing Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_13",
        topic: "speed",
        question:
          "Unless a lower figure is posted, what is the maximum speed on a North Carolina interstate?",
        choices: ["70 mph", "65 mph", "75 mph", "55 mph"],
        correctIndex: 0,
        explanation:
          "Interstates top out at 70 mph in North Carolina. Individual stretches are posted lower and the posted number always wins, but 70 is the statutory ceiling.",
        context:
          "The maximum table is short enough to memorise whole: 35 in cities and towns, 55 outside them, 70 on interstates, 45 for a school bus and 55 for a school activity bus. The school figures are the pair that trip people up, because most people assume the two kinds of bus are treated identically and they are not.",
        trap:
          "75 mph is the interstate figure across large parts of the west and south-west. North Carolina has never gone above 70.",
        excerptKey: "max-speed-table",
        sourceLabel: "NC Driver Handbook - Chapter 4, Maximum Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_14",
        topic: "safety",
        question:
          "How much space does the handbook tell you to keep between your vehicle and the one ahead?",
        choices: [
          "One car length for every 10 mph of speed",
          "Three seconds",
          "Two seconds",
          "Four car lengths, at any speed",
        ],
        correctIndex: 2,
        explanation:
          "North Carolina teaches the two-second rule: two seconds should pass between the vehicle ahead reaching a fixed point and your own front bumper reaching it.",
        context:
          "The gap is measured in time rather than in car lengths because a fixed distance means something different at 25 mph than at 65. Two seconds is the fair-weather figure; the handbook doubles it on wet pavement, where stopping distances stretch anywhere from two to ten times longer, and asks for at least three times the normal stopping distance on snow and ice.",
        trap:
          "Many states now teach three seconds, and it is better advice. It is not what North Carolina's handbook says, and the exam is written from the handbook.",
        excerptKey: "two-second-rule",
        sourceLabel: "NC Driver Handbook - Chapter 4, The Two-Second Rule",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s1_15",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you on an ordinary street with its lights and siren going. What should you do?",
        choices: [
          "Speed up until you reach a wider stretch of road",
          "Drive to the right-hand kerb or edge of the road and stop completely",
          "Move into the left lane and hold your speed",
          "Stop where you are, in your own lane",
        ],
        correctIndex: 1,
        explanation:
          "Pull to the right-hand kerb or edge of the road and come to a full stop, and stay there until the emergency vehicle has gone past or an officer waves you on.",
        context:
          "The rule works the same whether the emergency vehicle is coming up behind you or towards you, and it binds traffic in both directions. The one exception is a four-lane limited-access highway with a centre median, where drivers heading the opposite way from the emergency vehicle are not required to yield. Separately, never park within a hundred feet of an emergency vehicle that has stopped at a scene, and never drive over a fire hose.",
        trap:
          "Stopping dead in the travel lane. That leaves the ambulance nowhere to go and is exactly what the rule is trying to prevent.",
        excerptKey: "emergency-pull-right-stop",
        sourceLabel: "NC Driver Handbook - Chapter 4, Emergency and Law Enforcement Vehicles",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_16",
        topic: "rules",
        question:
          "Rain has begun and you switch on your windshield wipers. What else does North Carolina law then require?",
        choices: [
          "Nothing further, as long as it is still daylight",
          "Your hazard warning flashers",
          "A speed at least 10 mph below the posted limit",
          "Your headlights",
        ],
        correctIndex: 3,
        explanation:
          "Wipers on because of the weather means headlights on. North Carolina ties the two together explicitly, and the time of day makes no difference.",
        context:
          "Headlights are separately required from sunset to sunrise and whenever visibility falls to four hundred feet or less, so the wiper rule is an addition rather than a restatement. The point is being seen rather than seeing: a grey car in grey rain at midday is close to invisible to a driver waiting to pull out of a side road.",
        trap:
          "Hazard flashers instead of headlights. Flashers are for a stopped or disabled vehicle, and using them while moving hides your turn signals.",
        excerptKey: "wipers-headlights-law",
        sourceLabel: "NC Driver Handbook - Chapter 4, Windshield Wipers/Headlights",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s1_17",
        topic: "signs",
        question: "What is a yellow diamond-shaped sign telling you?",
        choices: [
          "A hazard or a change in the road lies ahead; take extra care",
          "A rule you must obey, such as a speed limit",
          "Road work is under way",
          "Directions, distances or nearby services",
        ],
        correctIndex: 0,
        explanation:
          "Diamonds warn. Black on yellow is the general warning sign, telling you something about the road ahead is about to change and asking you to drive with extra care.",
        context:
          "The colour does most of the work here. The same diamond in black on orange is still a warning, but specifically about construction or maintenance, and North Carolina reserves black-on-orange strictly for work zones. Two warning signs break the diamond shape on purpose: the pennant that marks a no-passing zone, and the pentagon that marks a school zone or crossing.",
        trap:
          "Confusing warning with regulatory. A diamond never carries an enforceable limit; that job belongs to the rectangles.",
        excerptKey: "diamond-warning",
        sourceLabel: "NC Driver Handbook - Chapter 5, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_18",
        topic: "rightOfWay",
        question:
          "You are turning at an intersection with no traffic signals. Someone steps out to cross the road you are turning into, at a corner with no painted crosswalk. Who has the right of way?",
        choices: [
          "You, because the crossing is not marked",
          "The pedestrian, because an unmarked crosswalk exists where the sidewalks line up",
          "Whichever of you entered the intersection first",
          "You, provided you sound your horn first",
        ],
        correctIndex: 1,
        explanation:
          "An unmarked crosswalk is formed by the imaginary lines running from one sidewalk across to the other, and a pedestrian in it has the right of way at an intersection without signals.",
        context:
          "Paint is not what creates a crosswalk in North Carolina; the geometry of the intersection is. Where the intersection is signalled, pedestrians follow the same lights as drivers travelling in their direction, but anyone crossing on a green outranks every vehicle including one turning across their path. If the light changes while someone is still in the road, drivers must let them finish crossing.",
        trap:
          "Assuming no paint means no crossing. It is the single most common misreading of North Carolina's pedestrian rule.",
        excerptKey: "pedestrian-unmarked-crosswalk",
        sourceLabel: "NC Driver Handbook - Chapter 4, The Driver and Pedestrian",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s1_19",
        topic: "licensing",
        question:
          "An applicant for a regular Class C licence sits the road signs test. How many of the twelve signs must be identified correctly?",
        choices: ["Seven", "Eight", "Nine", "All twelve"],
        correctIndex: 2,
        explanation:
          "Nine of twelve is the Class C standard, so three wrong answers still passes. Applicants for a Class A or Class B licence have to get every one of them right.",
        context:
          "The signs test is scored separately from the knowledge examination and passed separately: you identify each sign by colour and shape and say what it means. Because the two are independent, failing one does not oblige you to resit the other, and after a failure you wait seven calendar days before returning.",
        trap:
          "A lot of study sites say you may miss no more than two. The rule says nine of twelve, which means three misses is still a pass.",
        excerptKey: "road-signs-nine-of-twelve",
        sourceLabel: "19A NCAC 03B .0201 - Road Signs",
        sourceUrl: RULE,
        commonlyMissed: true,
      },
      {
        id: "nc_s1_20",
        topic: "sharing",
        question: "What is a bicycle's legal status on a North Carolina road?",
        choices: [
          "A pedestrian, so it belongs on the sidewalk",
          "A vehicle, but only while it is inside a marked bike lane",
          "A vehicle exempt from stop signs and traffic lights",
          "A vehicle, so the rider must obey the same traffic laws as a driver",
        ],
        correctIndex: 3,
        explanation:
          "State law treats bicycles as vehicles. Riders stop for stop signs and red lights, signal their turns, ride on the right, and are subject to the impaired driving laws like anyone else.",
        context:
          "Because a bicycle is a vehicle, it has a right to be in the travel lane and may need the whole of it. Riders choose between a bike lane, a paved shoulder and the general lane based on hazards and on the risk of conflict with right-turning traffic, so a cyclist moving out from the edge is usually reading the road rather than obstructing it. Passing one lawfully means following the ordinary passing rules, and the safest way is to change lanes.",
        trap:
          "Reading a cyclist's position in the middle of the lane as rudeness. It is often the only safe place to be, and the law backs it.",
        excerptKey: "bicycles-are-vehicles",
        sourceLabel: "NC Driver Handbook - Chapter 6, Bicycles",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_21",
        topic: "rules",
        question:
          "You are on a street posted at 35 mph and intend to turn at the next corner. How far ahead must you signal?",
        choices: [
          "50 feet",
          "At least three seconds before the turn",
          "At least the last 100 feet",
          "At least the last 200 feet",
        ],
        correctIndex: 2,
        explanation:
          "At speeds below 45 mph the requirement is the last hundred feet before turning or stopping. The distance doubles to two hundred feet once the limit is 45 mph or more.",
        context:
          "The signal distance is written as a distance rather than a count of seconds, and it steps up with the speed limit rather than with your actual speed. Faster roads need more warning simply because the driver behind covers ground while deciding what to do. Flashing signals are a legal substitute for hand signals, and at night they are the better choice, but in low morning or late afternoon sun the lenses can reflect enough to hide whether they are flashing at all.",
        trap:
          "Signalling as you start to turn. A signal given at the corner tells the driver behind nothing they can still use.",
        excerptKey: "signal-100-200-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Flashing Turn Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_22",
        topic: "speed",
        question:
          "You leave a town on a two-lane road and there is no posted speed limit anywhere. What speed applies?",
        choices: ["35 mph", "45 mph", "65 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "Outside cities and towns the unposted maximum is 55 mph. It is a ceiling rather than a recommendation, and conditions frequently make it too fast.",
        context:
          "North Carolina attaches consequences to 55 that it attaches to no other number. Speeding over 55 is worth three licence points rather than the two a general moving violation earns, two such convictions inside twelve months can cost you your licence, and being more than 15 mph over the limit while travelling above 55 brings a revocation of at least thirty days.",
        trap:
          "45 mph is what many rural two-lane roads are actually posted at, so it feels like the default. The default when nothing is posted is 55.",
        excerptKey: "max-speed-table",
        sourceLabel: "NC Driver Handbook - Chapter 4, Maximum Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_23",
        topic: "signals",
        question:
          "You have a circular green light and want to turn left across oncoming traffic. What must you do?",
        choices: [
          "Yield to oncoming traffic and to pedestrians before making the turn",
          "Turn straight away, since a green light gives you the right of way",
          "Wait for a green arrow, because a circular green does not permit a left turn",
          "Sound your horn and complete the turn",
        ],
        correctIndex: 0,
        explanation:
          "A circular green permits the movement but protects nothing. Turning traffic still gives way to oncoming vehicles and to anyone in the crosswalk.",
        context:
          "The arrows are where protection lives. A green arrow means the conflicting movements are being held for you, so you may go without yielding, while a flashing yellow arrow means the turn is permitted but you must still give way. Where both arrow and circular signals are showing, the arrows govern turning traffic and the circles govern traffic going straight.",
        trap:
          "Hearing green as permission to move rather than permission to move if the way is clear. A left turn on a plain green is the least protected manoeuvre at a signalled intersection.",
        excerptKey: "circular-green",
        sourceLabel: "NC Driver Handbook - Chapter 5, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_24",
        topic: "impairment",
        question: "What actually brings a drinker's blood alcohol concentration back down?",
        choices: ["Strong coffee", "A large meal", "A cold shower", "Time"],
        correctIndex: 3,
        explanation:
          "Only time. Coffee, food and cold water may make someone feel more alert without changing how much alcohol is in their blood, which is precisely what makes them dangerous.",
        context:
          "Alcohol is a depressant, and its effects reach nearly every part of the brain at once, so there is nothing left over to compensate with. It slows reaction, blurs judgement of speed and distance, makes it harder to do two things at once, and supplies false confidence on top of all that. The handbook's practical answer is to arrange the ride home before the first drink rather than after the last.",
        trap:
          "The idea that a coffee sobers you up. It produces an alert drunk, which is worse than a sleepy one behind the wheel.",
        excerptKey: "only-time-sobers",
        sourceLabel: "NC Driver Handbook - Chapter 4, Alcohol",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_25",
        topic: "parking",
        question: "How far from a fire hydrant must you park?",
        choices: ["5 feet", "10 feet", "15 feet", "25 feet"],
        correctIndex: 2,
        explanation:
          "Fifteen feet is the hydrant distance in North Carolina, and the same fifteen feet applies to the entrance of a fire station.",
        context:
          "The parking distances come in a set and are easiest learned together, because the exam likes to swap them. Fifteen feet covers hydrants and fire station entrances. Twenty-five feet covers the kerb line of an intersecting street. A hundred feet is the clearance around an emergency vehicle stopped at a scene, and two hundred feet is the visibility a parked vehicle needs in both directions before a shoulder is a legal place to leave it.",
        trap:
          "Twenty-five feet is the intersection figure, not the hydrant figure. The two get swapped more than any other pair.",
        excerptKey: "park-15-feet-hydrant",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where you should not park",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_26",
        topic: "signs",
        question: "A five-sided sign is coming up on your right. What is it warning you about?",
        choices: [
          "A school zone or a school crossing",
          "A railroad crossing ahead",
          "The beginning of a no-passing zone",
          "A hospital nearby",
        ],
        correctIndex: 0,
        explanation:
          "The pentagon is reserved for schools. It marks a school zone or a school crossing and asks you to be especially alert for children.",
        context:
          "School zones often carry a reduced limit during particular hours rather than all day, so the same stretch can be a school zone at half past eight and an ordinary street at eleven. Speeding in one is punished separately from ordinary speeding and carries three licence points. Around a school the buses matter as much as the signs: a school bus is capped at 45 mph, and passing one that is stopped for passengers is a five-point offence.",
        trap:
          "The round yellow sign with the black cross and letters RR is the railroad warning. It is a circle, not a pentagon.",
        excerptKey: "pentagon-school",
        sourceLabel: "NC Driver Handbook - Chapter 5, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_27",
        topic: "emergencies",
        question:
          "Nobody is hurt in a collision. At what level of damage must you report it immediately to law enforcement?",
        choices: ["$250 or more", "$500 or more", "$1,000 or more", "$2,500 or more"],
        correctIndex: 2,
        explanation:
          "A thousand dollars of total damage to vehicles and property triggers an immediate report, and so does any injury or death whatever the damage.",
        context:
          "Failing to report can be prosecuted and can cost you your licence, and the failure-to-report conviction is worth three points on its own. Separately, if the crash happened on a travel lane, ramp, shoulder or median and nobody is hurt, the vehicles should be moved clear of the travel lane where they can be driven safely under their own power. North Carolina also shields anyone who stops to render aid from civil liability, short of intentional wrongdoing.",
        trap:
          "Judging the threshold by how the cars look. Modern bumper and sensor repairs pass a thousand dollars long before the damage looks serious.",
        excerptKey: "crash-report-1000",
        sourceLabel: "NC Driver Handbook - Chapter 4, Crashes",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_28",
        topic: "safety",
        question: "When does North Carolina law require your headlights to be lit?",
        choices: [
          "Only between midnight and 5 a.m.",
          "Whenever you are travelling on an interstate",
          "From sunset to sunrise, and whenever visibility drops to 400 feet or less",
          "From sunset to sunrise, and at no other time",
        ],
        correctIndex: 2,
        explanation:
          "Two separate triggers apply: the clock, from sunset to sunrise, and the conditions, whenever you cannot see four hundred feet. Either one on its own is enough.",
        context:
          "A third trigger sits alongside them: wipers running because of the weather also means headlights on. At night the handbook asks for low beams in town and high beams on the open road, dropping to low whenever you are approaching or following another vehicle. High beams should let you see someone two hundred feet away, low beams seventy-five feet, which is also why outdriving your headlights is treated as a speed problem.",
        trap:
          "Treating daylight as an exemption. Fog and heavy rain cut visibility below four hundred feet at noon, and the requirement bites then too.",
        excerptKey: "headlights-sunset-400-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Night Driving",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_29",
        topic: "rules",
        question: "How fast may you legally back a vehicle in North Carolina?",
        choices: [
          "Up to 5 mph",
          "No more than 10 mph",
          "Up to 15 mph",
          "Any speed you can keep under control",
        ],
        correctIndex: 1,
        explanation:
          "Ten miles per hour is the ceiling for backing. A reversing car steers badly and stops badly, which is why the number is so low.",
        context:
          "The handbook's technique matters as much as the speed. Check behind the vehicle on foot before you get in, because a small child is invisible from the driver's seat once you are sitting down. Then steer with your left hand and look over your right shoulder through the back window, rather than relying on the mirrors or the side glass, which leave the area directly behind you unseen.",
        trap:
          "Reversing on the mirrors and the rear camera alone. Both leave gaps, and the handbook asks for the shoulder check regardless.",
        excerptKey: "backing-10-mph",
        sourceLabel: "NC Driver Handbook - Chapter 4, Rules to follow when backing your vehicle",
        sourceUrl: HB,
      },
      {
        id: "nc_s1_30",
        topic: "rightOfWay",
        question:
          "You arrive at a stop sign on a side road. What does the law require before you enter the through street?",
        choices: [
          "Slow to walking pace and merge into the flow of traffic",
          "Stop, but only if traffic is actually approaching",
          "Stop, then take your turn in arrival order with the through traffic",
          "Come to a complete stop and give way to the traffic on the through street",
        ],
        correctIndex: 3,
        explanation:
          "The stop is unconditional and the yield comes after it. You stop completely, then wait until the through traffic leaves you room to go safely.",
        context:
          "Where the stop line is painted, you stop at the line. Where there is no line and no crosswalk, you stop before entering the intersection, far enough forward to actually see along the intersecting street. If a first stop leaves your view blocked by parked cars or a hedge, easing forward to a second stop where you can see is the expected move rather than a violation.",
        trap:
          "Treating a stop sign like a four-way stop and taking a turn. A two-way stop gives the through street continuous priority, and nothing you do at the line changes that.",
        excerptKey: "stop-sign-yield-through",
        sourceLabel: "NC Driver Handbook - Chapter 4, Right-of-Way at Intersections",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Everyday Roads",
    difficulty: "easy",
    description:
      "The rules that come up on a normal drive across North Carolina: passing and being passed, lines and lane markings, the point system, and the state's own peculiar habits around horns, buses and mopeds.",
    questions: [
      {
        id: "nc_s2_01",
        topic: "rules",
        question:
          "The handbook lists the steps for overtaking on a two-lane road. What is the third step, after looking and signalling?",
        choices: [
          "Flash your headlights at the driver ahead",
          "Move out and accelerate hard to shorten the time alongside",
          "Wait for the driver ahead to wave you past",
          "Blow the horn to signal the driver ahead",
        ],
        correctIndex: 3,
        explanation:
          "North Carolina expects you to sound the horn before overtaking. It is written into the passing procedure alongside looking and signalling, not offered as an optional courtesy.",
        context:
          "This is one of the state's genuine oddities, and it has a legal consequence attached. Once you sound the horn, the driver you are passing is under a legal obligation to help you complete the pass, which in practice means moving to the right edge and not accelerating. A driver who speeds up instead and causes a crash with injury or property damage can be charged with a misdemeanour.",
        trap:
          "Most states discourage the horn as aggressive. North Carolina writes it into the procedure, which makes this an easy question to get wrong from experience.",
        excerptKey: "passing-blow-horn",
        sourceLabel: "NC Driver Handbook - Chapter 4, Passing",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s2_02",
        topic: "signs",
        question:
          "A yellow pennant-shaped sign stands on the left-hand side of the road. What is it telling you?",
        choices: [
          "A passing zone begins here",
          "Traffic from the left is about to merge",
          "A no-passing zone begins here",
          "The road narrows ahead",
        ],
        correctIndex: 2,
        explanation:
          "The pennant marks the start of a no-passing zone. It sits on the left so that it faces the driver who might be tempted to pull out, and points at where the solid yellow line begins.",
        context:
          "The pennant does not stand alone. It emphasises the rectangular DO NOT PASS sign rather than replacing it, so the two work as a pair, one regulatory and one warning. The pavement carries the same message: a solid yellow line in your lane means no passing, and continuous double solid yellow lines mean no passing in either direction.",
        trap:
          "Reading a sign on the left as applying to oncoming traffic. This one is placed there deliberately for you.",
        excerptKey: "pennant-no-passing",
        sourceLabel: "NC Driver Handbook - Chapter 5, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_03",
        topic: "parking",
        question:
          "You want to park on a kerbed street near a corner. How far back from the kerb line of the intersecting street must you stop?",
        choices: ["15 feet", "25 feet", "30 feet", "50 feet"],
        correctIndex: 1,
        explanation:
          "Twenty-five feet from the kerb line of the intersecting street. Where there is no kerb at all, the distance is fifteen feet from the intersecting right of way lines.",
        context:
          "Both figures are about sight lines rather than about space to turn. A car parked tight to a corner hides everything behind it from a driver waiting to pull out, which is why the handbook lists parked vehicles alongside glare and dirty windshields as a cause of blind spots. The rule changes with the kerb because on an unkerbed road the right of way line, not the kerb, is where the intersection legally begins.",
        trap:
          "Fifteen feet is the hydrant distance, and it is also the no-kerb version of this rule. On a kerbed street the answer is twenty-five.",
        excerptKey: "park-25-feet-intersection",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where you should not park",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s2_04",
        topic: "sharing",
        question: "How much of a traffic lane is a motorcycle entitled to?",
        choices: [
          "The right-hand half, so cars may share the lane",
          "The left-hand half, so cars may pass on the right",
          "Only as much as the rider is actually occupying",
          "The full width of the lane",
        ],
        correctIndex: 3,
        explanation:
          "A motorcycle has the whole lane. To pass one you change lanes and overtake exactly as you would a car, rather than squeezing by within the lane.",
        context:
          "Mopeds are handled slightly differently: a moped should keep to the right of the lane, and a driver passing one must stay at least two feet to the left. In either case the windstream matters, and the handbook asks you to leave any two-wheeled rider enough room that your passing air does not upset them. Around two-thirds of motorcycle crashes in North Carolina involve a car, and the car driver is usually at fault and usually says they never saw the bike.",
        trap:
          "Sharing a lane with a motorcycle because there appears to be room. There is not, and the law does not allow it.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "NC Driver Handbook - Chapter 6, Motorcycles and Mopeds",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_05",
        topic: "impairment",
        question:
          "An officer charges you with impaired driving and asks for a breath test. You refuse. What happens?",
        choices: [
          "Nothing, since refusing is your right and cannot be used against you",
          "A fine, but your licence is untouched until you are convicted",
          "Immediate revocation for at least 30 days, plus a further revocation of at least 12 months",
          "Your licence is suspended for 30 days and that is the end of it",
        ],
        correctIndex: 2,
        explanation:
          "Refusal costs you the licence immediately for at least thirty days and brings an additional revocation of at least twelve months from the DMV. The refusal itself is also admissible in court.",
        context:
          "The refusal penalty runs alongside whatever happens on the impaired driving charge, so declining the test does not make the problem go away. After six months of the wilful refusal revocation have run, a judge may grant a limited driving privilege. Producing a test at 0.08 or more, or 0.04 in a commercial vehicle, revokes the privilege immediately for at least thirty days on its own.",
        trap:
          "Believing refusal leaves nothing to prove. The refusal is itself evidence, and it costs you a year on top.",
        excerptKey: "refusal-revocation",
        sourceLabel: "NC Driver Handbook - Chapter 2, Driving While Impaired",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s2_06",
        topic: "signals",
        question: "The green turn arrow you were following changes to a steady yellow arrow. What does that mean?",
        choices: [
          "The turn is now prohibited and you must reverse out of the intersection",
          "You may complete the turn without yielding for as long as the yellow shows",
          "Oncoming traffic has been stopped and you may proceed freely",
          "The protected turn is ending, so prepare to stop",
        ],
        correctIndex: 3,
        explanation:
          "A yellow arrow says the protected phase is finishing and something else is about to appear, whether a circular green, a circular red or a red arrow. Prepare to stop.",
        context:
          "The arrow set is worth learning as a group. A green arrow gives you a protected movement; a red arrow stops turning traffic outright; a flashing yellow arrow permits the turn but hands the yielding back to you. Where a signal head shows arrows and circles together, the arrows control turning traffic and the circles control everyone going straight.",
        trap:
          "Treating a yellow arrow as a flashing one. Steady yellow is the end of your protection, not an invitation to turn while giving way.",
        excerptKey: "yellow-arrow",
        sourceLabel: "NC Driver Handbook - Chapter 5, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_07",
        topic: "licensing",
        question:
          "How many driver licence points, accumulated over what period, can cost you your licence in North Carolina?",
        choices: [
          "7 points within two years",
          "12 points within three years",
          "12 points within one year",
          "15 points within five years",
        ],
        correctIndex: 1,
        explanation:
          "Twelve points inside a three-year window can bring a suspension. Seven points is a different and earlier threshold, at which you may be sent to a driver improvement clinic.",
        context:
          "The clinic is worth knowing about because completing it takes three points off your record for an eighty-three dollar and fifty cent fee. The suspensions themselves escalate: sixty days for the first, six months for the second, twelve months for the third. After reinstatement the bar drops, and eight points inside three years is enough for a second suspension. Reinstatement wipes your licence points, though it does nothing at all to your insurance points, which run on a separate system.",
        trap:
          "Mixing up the two thresholds. Seven points sends you to a clinic; twelve is what actually costs you the licence.",
        excerptKey: "points-twelve-suspension",
        sourceLabel: "NC Driver Handbook - Chapter 3, Driver License Points",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s2_08",
        topic: "speed",
        question: "What is the maximum speed limit for a school bus in North Carolina?",
        choices: ["45 mph", "35 mph", "55 mph", "The posted limit, whatever it is"],
        correctIndex: 0,
        explanation:
          "A school bus is capped at 45 mph regardless of the posted limit on the road it is travelling. A school activity bus is a different vehicle and runs to 55.",
        context:
          "The pairing is deliberate in the handbook's table and it is exactly where the exam likes to probe. School buses carry children on regular routes and are held to 45; school activity buses, which run teams and trips, are allowed 55. Both figures are separate from the reduced limit inside a marked school zone, which applies only during the hours shown.",
        trap:
          "Answering with the posted limit. These are vehicle caps, so a school bus on a 55 mph road is still limited to 45.",
        excerptKey: "school-bus-speed-45",
        sourceLabel: "NC Driver Handbook - Chapter 4, School Buses",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_09",
        topic: "emergencies",
        question:
          "The rear of your car begins sliding to the right on a wet road. Which way do you steer?",
        choices: [
          "To the left, against the slide",
          "Straight ahead, and hold the wheel still",
          "Whichever way straightens the car quickest, then brake hard",
          "To the right, the direction the rear of the car is sliding",
        ],
        correctIndex: 3,
        explanation:
          "Ease off the accelerator and steer in the direction the rear of the car is going. As the car starts to line up, unwind the steering the other way so you do not overcorrect into a second skid.",
        context:
          "The second half of that instruction is the part people leave out, and it is the part that turns one skid into two. Braking is handled separately: with anti-lock brakes you press firmly and hold the pressure rather than pumping, and without them you pump gently. Wet roads, ice and packed snow are the usual causes, and the surest fix is not being fast enough to start one.",
        trap:
          "Steering against the slide. It feels like the correction and it is the thing that spins the car.",
        excerptKey: "skid-steer-into",
        sourceLabel: "NC Driver Handbook - Chapter 4, Skids",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_10",
        topic: "safety",
        question:
          "Which children must ride in a weight-appropriate child passenger restraint system in North Carolina?",
        choices: [
          "Children under age 8 who also weigh less than 80 pounds",
          "Children under age 8, whatever they weigh",
          "Children weighing less than 80 pounds, whatever their age",
          "Children under age 4 and less than 40 pounds",
        ],
        correctIndex: 0,
        explanation:
          "Both conditions have to be met at once: under eight years old and under eighty pounds. A child who clears either threshold moves on to an ordinary belt.",
        context:
          "A second, stricter rule sits on top of it. Where the vehicle has an active passenger-side front air bag and a rear seat, a child under five and under forty pounds must ride in the rear unless the restraint is designed to work with a front air bag. Every passenger under sixteen must be secured in something, restraint or belt, and it is the driver who answers for that.",
        trap:
          "Reading the rule as either-or. A seven-year-old at ninety pounds is out of the restraint requirement, and a nine-year-old at sixty pounds is too.",
        excerptKey: "child-restraint-8-and-80",
        sourceLabel: "NC Driver Handbook - Chapter 4, Child Seats",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s2_11",
        topic: "rightOfWay",
        question:
          "Two cars face each other at an intersection and arrive together. One is going straight, the other wants to turn left across the first car's path. Who goes first?",
        choices: [
          "The left-turning driver, because they arrived first at the centre",
          "Whichever driver signals first",
          "The driver going straight ahead",
          "Neither; both must stop and wave the other through",
        ],
        correctIndex: 2,
        explanation:
          "The driver turning left waits. Facing vehicles only conflict when one of them turns across the other, and the burden falls on the one making the turn.",
        context:
          "The handbook is candid that the ordinary right of way rules are little help between two facing drivers, because both may go straight or turn right without ever crossing paths. The left turn is the one movement that creates the conflict, so the rule loads the obligation onto it: signal, wait, and go only when the turn can be completed safely.",
        trap:
          "A gap in oncoming traffic is not the same as a clear turn. The rule holds whether or not the other driver appears to be slowing.",
        excerptKey: "facing-left-turn-yields",
        sourceLabel: "NC Driver Handbook - Chapter 4, Special Driving Situations",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_12",
        topic: "signs",
        question: "What is the difference between a yellow line and a white line on the pavement?",
        choices: [
          "Yellow marks the edge of the road, white marks the centre",
          "Yellow separates traffic moving in opposite directions, white separates traffic moving the same way",
          "Yellow means no passing, white means passing is permitted",
          "Yellow is used inside towns and white outside them",
        ],
        correctIndex: 1,
        explanation:
          "Colour tells you about direction. Yellow lines divide opposing streams of traffic; white lines divide lanes running the same way.",
        context:
          "The edge lines follow the same logic and give you a way of checking you are going the right way. A solid white line is the right-hand edge of the roadway, and a solid yellow line is the left-hand edge on a divided highway. If you find those reversed, with yellow on your right and white on your left, you are travelling in the wrong direction.",
        trap:
          "Colour and pattern are separate pieces of information. Yellow tells you the direction of the traffic beyond it; solid or broken tells you whether you may cross.",
        excerptKey: "yellow-white-lines",
        sourceLabel: "NC Driver Handbook - Chapter 5, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_13",
        topic: "sharing",
        question:
          "You are following a tractor-trailer on a four-lane highway. How do you know whether the driver can see you?",
        choices: [
          "If you can see the trailer's rear doors, you are visible",
          "If your headlights reach the back of the trailer, you are visible",
          "If you cannot see the driver in their side-view mirror, they cannot see you",
          "If the truck's brake lights are visible, you are visible",
        ],
        correctIndex: 2,
        explanation:
          "The mirror test works both ways. If the driver's face is not visible to you in their side mirror, your car is sitting in a blind spot where they cannot see it either.",
        context:
          "A truck's blind spots are much larger than a car's and they are not where people expect. They run up to twenty feet ahead of the cab, along both sides and particularly alongside the cab itself, and up to two hundred feet behind the trailer. Sitting in any of them removes the driver's ability to take evasive action, and the rear one is the reason tailgating a truck is far worse than tailgating a car.",
        trap:
          "Assuming a driver sitting that high can see everything. The height buys them distance, not the areas close to the vehicle.",
        excerptKey: "truck-mirror-rule",
        sourceLabel: "NC Driver Handbook - Chapter 6, No-Zones",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_14",
        topic: "signs",
        question:
          "You see a round yellow sign carrying a black cross and the letters RR. What is it?",
        choices: [
          "Advance warning that a railroad crossing is ahead",
          "The crossing itself, marking where the tracks are",
          "A sign showing how many tracks the crossing has",
          "A rest area for rail passengers",
        ],
        correctIndex: 0,
        explanation:
          "The round RR sign is advance warning. It appears before the crossing and tells you to slow down and be ready to stop.",
        context:
          "The X-shaped crossbuck is the sign at the crossing itself, and where there is more than one track a smaller sign beneath it says so. Even a crossing with nothing but a crossbuck requires you to yield to a train, and where flashing red lights are used you stop exactly as you would for any flashing red signal. Trains have the right of way over all highway traffic, including police, fire and ambulance vehicles.",
        trap:
          "Confusing the advance warning with the crossbuck. One is a circle before the crossing, the other an X at it.",
        excerptKey: "round-rr-sign",
        sourceLabel: "NC Driver Handbook - Chapter 5, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_15",
        topic: "parking",
        question:
          "When is it legal to leave your car parked on the shoulder of a North Carolina highway?",
        choices: [
          "Whenever all four wheels are clear of the paved surface",
          "Only during daylight hours",
          "Only where approaching drivers can see the vehicle from at least 200 feet in both directions",
          "Never, under any circumstances",
        ],
        correctIndex: 2,
        explanation:
          "Shoulder parking is unlawful unless the parked vehicle is visible to approaching drivers from at least two hundred feet in both directions. Getting off the pavement is not enough on its own.",
        context:
          "The rule is written around sight distance rather than around clearance, which is why a car parked just over the crest of a hill or round a bend breaks it even when it is entirely off the road. Parking on the paved or primary travel portion of a highway is prohibited outright, and the right of way of an interstate is out of bounds altogether apart from designated areas and genuine emergencies.",
        trap:
          "Judging it by how far off the road you are. Two hundred feet of visibility is the test, and a blind crest fails it however wide the shoulder.",
        excerptKey: "park-shoulder-200-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where you should not park",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_16",
        topic: "signals",
        question:
          "A power cut has left the traffic lights at a busy intersection completely dark. How should you treat it?",
        choices: [
          "As though you had the right of way, since the signal is not showing red",
          "As though every approach carried a stop sign",
          "As a yield, slowing but not stopping",
          "Wait at the line until the signal is restored",
        ],
        correctIndex: 1,
        explanation:
          "A dead signal converts the intersection into an all-way stop. Every approach stops, and drivers then sort out priority between themselves.",
        context:
          "The rule falls away if an officer or another authorised person is directing traffic, or if some other control device has been put into operation, because a person directing traffic outranks any signal. It is worth separating from the flashing cases: a flashing red also behaves as a stop sign, while a flashing yellow behaves as a warning sign and asks only that you slow and take care.",
        trap:
          "Assuming the bigger road keeps priority. A dark signal gives no road priority over any other.",
        excerptKey: "dark-signal-four-way-stop",
        sourceLabel: "NC Driver Handbook - Chapter 5, Traffic Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s2_17",
        topic: "speed",
        question: "At what speed can a vehicle begin to hydroplane?",
        choices: ["50 mph", "45 mph", "As low as 30 mph", "Only above 60 mph"],
        correctIndex: 2,
        explanation:
          "Hydroplaning can start from around thirty miles per hour, in water little more than an eighth of an inch deep. It does not need standing floodwater or highway speeds.",
        context:
          "What happens next is a matter of physics rather than skill: a film of water lifts the tyres off the surface and steering and braking both stop working. The correct response is to lift off the accelerator, resist the urge to brake, hold the wheel straight and let the car slow until the tyres bite again. Worn or under-inflated tyres make it far more likely, and cruise control should never be used in the rain.",
        trap:
          "Thinking of hydroplaning as an interstate problem. Thirty miles per hour is an ordinary town speed.",
        excerptKey: "hydroplane-30-mph",
        sourceLabel: "NC Driver Handbook - Chapter 4, Hydroplaning",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_18",
        topic: "licensing",
        question:
          "How long must a Level One limited learner permit be held before applying for a Level Two limited provisional licence?",
        choices: ["Six months", "Nine months", "Twelve months", "Three months"],
        correctIndex: 1,
        explanation:
          "Nine months. That is separate from the six-month mark at which the permit stops restricting you to daylight hours.",
        context:
          "The two figures do different jobs and both appear in the same list, which is why they get swapped. For the first six months a Level One permit allows driving only between 5 a.m. and 9 p.m. with the supervising driver aboard; after six months the hours open up but the supervision does not. The permit still has to be held for nine months in total, and a driving log of at least sixty hours, ten of them at night, has to be completed and handed in.",
        trap:
          "Answering six months. That is when the night-time restriction lifts, not when you can move up a level.",
        excerptKey: "level1-hold-nine-months",
        sourceLabel: "NC Driver Handbook - Chapter 1, Limited Learner Permit",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_19",
        topic: "emergencies",
        question:
          "Your car breaks down on a busy road and you have managed to get it onto the shoulder. What does the handbook tell you to do next?",
        choices: [
          "Stay in the vehicle with your seat belt on until help arrives",
          "Get everyone out through the passenger side and stand well away from the vehicle",
          "Stand behind the car to warn approaching traffic",
          "Open the bonnet and begin repairs where you are",
        ],
        correctIndex: 1,
        explanation:
          "Leave by the passenger side, get everyone out, and stand off the road away from the car rather than in front of it or behind it.",
        context:
          "The reasoning is that a vehicle on a shoulder gets hit, and anyone standing at either end of it is in the path when that happens. If you need help, tie a white cloth to the left door handle or the aerial and raise the hood, and after dark switch on the parking lights or hazard flashers. The handbook is equally clear that you should not attempt repairs anywhere exposed to traffic.",
        trap:
          "Getting out on the driver's side because it is nearer. That puts you in the live lane, which is the one place you must not be.",
        excerptKey: "breakdown-passenger-side",
        sourceLabel: "NC Driver Handbook - Chapter 4, Breakdowns",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_20",
        topic: "impairment",
        question:
          "A 19-year-old driver is convicted of driving with a small but detectable amount of alcohol in their body. What happens to their licence?",
        choices: [
          "Nothing, because they were under the 0.08 limit",
          "A 30-day suspension",
          "Six months of restricted driving privileges",
          "A one-year revocation",
        ],
        correctIndex: 3,
        explanation:
          "For a driver under twenty-one there is no permitted level. Any amount of alcohol or drugs in the body, on conviction, revokes the licence for a year.",
        context:
          "The rule sits entirely outside the 0.08 offence, so a young driver can be well under the adult threshold and still lose their licence for twelve months. Provisional licensees under eighteen face the same one-year revocation for driving after or while consuming any alcohol or drugs. The same one-year revocation also reaches offences with no driving in them at all, such as an underage attempt to buy alcohol.",
        trap:
          "Applying the adult 0.08 figure to a nineteen-year-old. The number that matters for them is zero.",
        excerptKey: "under-21-any-amount",
        sourceLabel: "NC Driver Handbook - Chapter 2, Alcohol and the Young Driver",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s2_21",
        topic: "rules",
        question: "What is the general rule about passing another vehicle on the right?",
        choices: [
          "It is permitted whenever the vehicle ahead is below the speed limit",
          "It is against the law except in the specific situations the law permits",
          "It is permitted on any road with a paved shoulder",
          "It is permitted as long as you signal first",
        ],
        correctIndex: 1,
        explanation:
          "Passing on the right is unlawful in North Carolina apart from a short list of exceptions, because it places you on the blind side of the vehicle you are overtaking.",
        context:
          "The exceptions are narrow and worth knowing exactly: highways with at least two lanes in each direction, one-way streets where every lane runs the same way, passing a vehicle already sitting in a left-turn lane, and driving in a lane set aside for right turns. Everywhere else the vehicle you are passing could turn right or pull over without ever seeing you.",
        trap:
          "Treating a wide paved shoulder as a lane. It is not one, and using it to get past is not covered by any of the exceptions.",
        excerptKey: "passing-on-right-illegal",
        sourceLabel: "NC Driver Handbook - Chapter 4, Passing on the right",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_22",
        topic: "safety",
        question: "Who must wear a helmet under North Carolina's motorcycle helmet law?",
        choices: [
          "All operators and passengers on motorcycles and on mopeds",
          "Motorcycle riders only; moped riders are exempt",
          "Riders under 21 only",
          "Only riders on roads posted above 45 mph",
        ],
        correctIndex: 0,
        explanation:
          "The law covers everyone on a motorcycle and everyone on a moped, rider and passenger alike, and the helmet has to meet the federal standard.",
        context:
          "Mopeds get caught by more of the motorcycle rules than people expect. Alongside the helmet requirement, operators must be at least sixteen, hold a North Carolina licence or ID card, register the machine and display a plate on the rear. Impaired driving law applies to a moped rider exactly as it applies to a car driver.",
        trap:
          "Assuming that because a moped needs no licence endorsement it needs no helmet. It needs both a helmet and a registration plate.",
        excerptKey: "helmet-law",
        sourceLabel: "NC Driver Handbook - Chapter 4, Motorcycle Safety Helmet Law",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_23",
        topic: "signs",
        question:
          "At a railroad crossing you see the X-shaped crossbuck with a smaller sign fixed below it. What is the smaller sign telling you?",
        choices: [
          "The speed limit for crossing the tracks",
          "How far it is to the next crossing",
          "Which railroad company owns the line",
          "How many tracks the crossing has",
        ],
        correctIndex: 3,
        explanation:
          "The small sign below the crossbuck gives the number of tracks. More than one track means a second train may be coming, possibly from the other direction.",
        context:
          "That warning has a practical consequence the handbook repeats: do not move off the instant a train has passed, because another may be following it or approaching on the other track. Wait until the red lights have stopped flashing. A crossing may also carry a blue Emergency Notification System sign with the railroad's own number, which is the fastest way to get a train stopped if a vehicle is stuck on the tracks.",
        trap:
          "Reading the number as a distance or a route number. It is a count of the rails you are about to cross.",
        excerptKey: "crossbuck-multiple-tracks",
        sourceLabel: "NC Driver Handbook - Chapter 5, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_24",
        topic: "rightOfWay",
        question:
          "An ambulance with lights and siren approaches a railroad crossing at the same moment as a train. Who has the right of way?",
        choices: [
          "The train, over all highway traffic including emergency vehicles",
          "The ambulance, because emergency vehicles always have priority",
          "Whichever reaches the crossing first",
          "The ambulance, provided the crossing gates have not yet lowered",
        ],
        correctIndex: 0,
        explanation:
          "Trains outrank everything on the road, emergency vehicles included. A loaded train cannot stop for anyone, which is why the priority is absolute.",
        context:
          "A train at 55 mph needs more than a mile to stop, so by the time an engineer can see a vehicle on the crossing it is far too late. The stopping rule at a crossing is precise: where a signal, gate, flagger or an approaching train requires it, stop within fifty feet but not less than fifteen feet from the nearest rail, keep as far right as you can, and do not form two lanes unless the road is marked for four or more.",
        trap:
          "Extending the emergency vehicle right of way to the railroad. It stops at the tracks.",
        excerptKey: "railroad-train-priority",
        sourceLabel: "NC Driver Handbook - Chapter 4, Railroad Crossing Safety",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s2_25",
        topic: "rules",
        question:
          "A multi-lane road has a centre lane marked for two-way left turns. What may that lane be used for?",
        choices: [
          "Passing slower traffic in either direction",
          "Merging into traffic when leaving a driveway",
          "Travelling for short distances when your lane is congested",
          "Making left turns, in either direction of travel",
        ],
        correctIndex: 3,
        explanation:
          "The two-way left turn lane exists for turning left and nothing else. It must not be used for passing another vehicle or as a place to merge into traffic.",
        context:
          "It is the one lane on the road that traffic uses from both directions at once, which is why the restrictions are so tight. Anyone using it to accelerate up to speed or to slip past a queue is on a collision course with a driver entering it from the opposite direction. It also changes nothing about school bus rules: a road of four lanes or more with such a centre lane stops only the traffic following the bus, while a two-lane road with one stops both directions.",
        trap:
          "Using it as an acceleration lane out of a driveway. That is the specific use the handbook names as prohibited.",
        excerptKey: "two-way-left-turn-lane",
        sourceLabel: "NC Driver Handbook - Chapter 5, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_26",
        topic: "signals",
        question: "A flashing yellow arrow is showing for your turn. What are you permitted to do?",
        choices: [
          "Make the turn, but first yield to oncoming traffic and to pedestrians",
          "Make the turn with the protection of a held oncoming phase",
          "Stop and wait, since turns are not permitted on yellow",
          "Turn only if no vehicle is waiting behind you",
        ],
        correctIndex: 0,
        explanation:
          "A flashing yellow arrow permits the turn and gives you no protection. Oncoming traffic and pedestrians go first.",
        context:
          "The flashing yellow arrow was introduced precisely to make this distinction visible, because a plain circular green told a turning driver nothing about whether the oncoming stream was being held. The solid green arrow is the protected version; solid yellow means the protection is ending; solid red means no turn at all. On right turn signal heads a steady red circle may be used in place of a red arrow.",
        trap:
          "Reading any arrow as protection. The flashing yellow one is the arrow that hands the yielding back to you.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "NC Driver Handbook - Chapter 5, Flashing Yellow Arrow Signal Heads",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_27",
        topic: "sharing",
        question: "Where is farm equipment entitled to travel in North Carolina?",
        choices: [
          "Only on roads posted at 45 mph or below",
          "On most roads in the state, but not on interstates",
          "Only on unpaved secondary roads",
          "Only during daylight hours",
        ],
        correctIndex: 1,
        explanation:
          "Farm machinery has a legal right to use most North Carolina roads. Interstates are the exception, and being slow is not by itself a reason for it to be somewhere else.",
        context:
          "The typical crash is a sideswipe or an angle collision that happens when the machine is turning left and the driver behind tries to pass. Operators sometimes signal left and swing wide first, and following drivers read the swing as an invitation to overtake. The only sensible time to pass is when the operator has pulled off the road to let traffic by, and passing in a no-passing zone is both illegal and, given how wide the equipment can be, unusually dangerous.",
        trap:
          "Taking a left signal on farm equipment as a wave-through. It is a turn signal, and passing into it is how these crashes happen.",
        excerptKey: "farm-equipment-no-interstate",
        sourceLabel: "NC Driver Handbook - Chapter 4, Safe Driving Around Farm Equipment",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_28",
        topic: "parking",
        question:
          "A police car has stopped on the roadside to investigate a collision. How close may you park to it?",
        choices: [
          "50 feet",
          "One car length, provided you are clear of the travel lane",
          "No closer than 100 feet",
          "Anywhere, so long as your hazard lights are on",
        ],
        correctIndex: 2,
        explanation:
          "Keep a hundred feet clear of an emergency vehicle that has stopped to investigate a crash or give assistance. Fire trucks answering an alarm need a full block.",
        context:
          "The clearance exists so that responders can work and so that other emergency vehicles can get in. The same section forbids driving over a fire hose at any time, and the parking rules add that you may not stop within one block of a fire or a fire truck inside the city limits, or within four hundred feet of one outside them.",
        trap:
          "Judging by whether you are in the way. The distance is fixed, and it applies even on a wide shoulder where you feel clear.",
        excerptKey: "emergency-100-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Emergency and Law Enforcement Vehicles",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_29",
        topic: "speed",
        question:
          "You are on a road posted at 55 mph and about to turn off. How far in advance must you signal?",
        choices: [
          "100 feet, as on any road",
          "50 feet",
          "Three seconds before the turn",
          "At least the last 200 feet",
        ],
        correctIndex: 3,
        explanation:
          "Once the limit is 45 mph or more the signalling distance doubles to two hundred feet. Below that it is a hundred feet.",
        context:
          "The rule scales with the posted limit rather than with your speed, so a road signed at 45 sets the same requirement whether you are doing 45 or 30. The handbook's underlying advice goes further: the faster you are travelling, the earlier you should signal, and you should be in the habit of signalling even when you cannot see anyone to signal to.",
        trap:
          "Using the same hundred feet everywhere. The threshold sits at 45 mph, which catches a great many ordinary highways.",
        excerptKey: "signal-100-200-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Flashing Turn Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s2_30",
        topic: "licensing",
        question:
          "What does North Carolina require before someone may ride a moped on a public road?",
        choices: [
          "They must be at least 16, hold a NC driver licence or ID card, and the moped must be registered and plated",
          "Nothing at all; mopeds are exempt from licensing and registration",
          "A motorcycle endorsement on a full driver licence",
          "A learner permit and a supervising driver",
        ],
        correctIndex: 0,
        explanation:
          "Sixteen years old, a North Carolina driver licence or identification card, and a registered moped carrying a plate on the rear. No motorcycle endorsement is needed.",
        context:
          "A moped is legally defined by what it is rather than by how it is used: two or three wheels, a motor of no more than fifty cubic centimetres, no external shifting device, and a top speed that cannot exceed thirty miles per hour. Machines sold with a higher top speed are not legal to use here whatever the dealer says. Helmets are required, and the impaired driving laws apply in full.",
        trap:
          "Assuming that no endorsement means no paperwork. Registration, a plate, an ID and a helmet are all still required.",
        excerptKey: "moped-age-16",
        sourceLabel: "NC Driver Handbook - Chapter 6, Mopeds",
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
      "Questions pitched where the real knowledge examination sits: the specific distances, the layouts that change the school bus answer, and the places where two North Carolina thresholds stack on top of each other.",
    questions: [
      {
        id: "nc_s3_01",
        topic: "rules",
        question:
          "How much lateral clearance does North Carolina law require when you pass another vehicle?",
        choices: [
          "One full lane width",
          "At least two feet to the left of the vehicle being passed",
          "At least three feet",
          "Whatever the driver judges to be safe",
        ],
        correctIndex: 1,
        explanation:
          "Two feet to the left is the statutory minimum. The handbook adds a practical test alongside it: if the driver you passed had to slow down to let you back in, you did not pass safely.",
        context:
          "The same two-foot figure appears again for mopeds, which must be passed at least two feet to the left. Motorcycles are treated differently and get the full lane, so passing one means changing lanes. For a bicycle the handbook asks for abundant clearance with no oncoming traffic, and says plainly that the safest way is to change lanes.",
        trap:
          "Three feet is the passing clearance in a large number of other states and it is what most drivers have heard. North Carolina's written figure is two.",
        excerptKey: "passing-two-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Passing",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s3_02",
        topic: "rightOfWay",
        question:
          "A four-lane highway is split by a median more than thirty feet wide. How does the law treat each crossing?",
        choices: [
          "As one intersection, with a single set of right of way rules",
          "As a single intersection unless it is signalled",
          "As two separate intersections, one at each crossing",
          "As a private crossing with no right of way rules",
        ],
        correctIndex: 2,
        explanation:
          "Where the median is more than thirty feet wide, each crossing counts as an intersection in its own right. You deal with them one at a time rather than as a single manoeuvre.",
        context:
          "That has a practical effect on how you cross. Reaching the median means you have completed one intersection and are now approaching another, so you assess the second stream of traffic afresh rather than committing to the whole crossing at once. It also affects where you may stop and wait, since the median gap is a place a vehicle can legitimately be held.",
        trap:
          "Treating the whole width as one crossing and committing to it. On a wide median that is exactly how a car ends up stranded in the second stream.",
        excerptKey: "median-30-feet",
        sourceLabel: "NC Driver Handbook - Chapter 4, Special Driving Situations",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s3_03",
        topic: "signals",
        question:
          "A pedestrian hybrid beacon at a mid-block crossing has moved to alternating flashing red. What must you do?",
        choices: [
          "Remain stopped until the pedestrians have cleared, then move off after a complete stop",
          "Proceed immediately, because flashing red means the crossing is finished",
          "Wait for the beacon to go dark before moving at all",
          "Treat it as a yield and drive through slowly",
        ],
        correctIndex: 0,
        explanation:
          "Flashing red on a hybrid beacon still holds you. Stay stopped until the pedestrians or emergency vehicles are clear, and then move off only after you have come to a complete stop.",
        context:
          "The beacon runs a fixed sequence and reading it as a whole is what makes it manageable. It stays dark until someone activates it, then flashes yellow, then goes steady yellow, then steady red while the crossing begins, and only then alternates flashing red as the crossing finishes. The flashing red phase is the point at which drivers who are clear may begin moving, one at a time, after stopping.",
        trap:
          "Taking the change from steady red to flashing red as a release. It is a stop-then-go phase, not a green.",
        excerptKey: "hybrid-beacon-flashing-red",
        sourceLabel: "NC Driver Handbook - Chapter 5, Hybrid Beacons",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_04",
        topic: "licensing",
        question:
          "You accumulate seven driver licence points. What may happen, and what does completing the remedy do?",
        choices: [
          "Your licence is suspended for 60 days and no points are removed",
          "Nothing happens until you reach twelve points",
          "You may be assigned to a driver improvement clinic, and completing it removes three points",
          "You may be assigned to a clinic, and completing it clears your record entirely",
        ],
        correctIndex: 2,
        explanation:
          "Seven points can bring an assignment to a driver improvement clinic. Completing it satisfactorily takes three points off your record, for a fee of eighty-three dollars and fifty cents.",
        context:
          "It is a halfway house rather than a penalty, and it is the last chance before the twelve-point suspension threshold. The suspensions themselves run sixty days, then six months, then twelve months. Reinstatement cancels all previous licence points but does nothing to insurance points, which insurers run on a separate system of their own.",
        trap:
          "Expecting the clinic to wipe the slate. It removes three points, which is often just enough to keep you below twelve.",
        excerptKey: "points-seven-clinic",
        sourceLabel: "NC Driver Handbook - Chapter 3, Driver License Points",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_05",
        topic: "speed",
        question:
          "In ideal conditions, roughly how far does a car travelling at 55 mph need in order to stop completely?",
        choices: ["About 211 feet", "About 120 feet", "About 300 feet", "About 400 feet"],
        correctIndex: 0,
        explanation:
          "Around two hundred and eleven feet under ideal conditions. That figure covers both the distance you cover while reacting and the distance spent actually braking.",
        context:
          "Stopping distance is not proportional to speed, which is what makes it worth memorising rather than estimating. It stretches at higher speeds because you travel further during your reaction time and then need more braking distance on top. On slippery pavement it can grow anywhere from two to ten times longer, and on snow and ice the handbook asks for at least three times the normal distance.",
        trap:
          "Thinking of it as braking distance alone. Reaction time is most of what makes the figure that large.",
        excerptKey: "stop-distance-55",
        sourceLabel: "NC Driver Handbook - Chapter 4, Adjusting Your Speed",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_06",
        topic: "sharing",
        question:
          "A school bus stops for passengers on a road of four lanes or more that has a centre turning lane. Which traffic must stop?",
        choices: [
          "All traffic from both directions",
          "Nobody, because the road has four lanes",
          "Only traffic in the two lanes nearest the bus",
          "Only the traffic following the bus",
        ],
        correctIndex: 3,
        explanation:
          "On a road of four lanes or more with a centre turning lane, only the traffic behind the bus has to stop. Oncoming traffic may keep moving.",
        context:
          "That answer flips if the road has only two lanes. A two-lane road with a centre turning lane stops traffic in both directions, and so does a four-lane road with no median at all. Only two layouts let oncoming traffic keep going: a divided highway of four lanes or more with a median separation, and a road of four lanes or more with a centre turning lane.",
        trap:
          "Reading the centre turning lane as the deciding factor on its own. It only exempts oncoming traffic once the road has four lanes or more.",
        excerptKey: "school-bus-four-lane-turning",
        sourceLabel: "NC Driver Handbook - Chapter 4, School Buses",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s3_07",
        topic: "safety",
        question:
          "Your car has an active passenger-side front air bag and a rear seat. Which children must ride in the back?",
        choices: [
          "Every child under age 12",
          "A child under age 5 who also weighs less than 40 pounds",
          "Any child in a restraint of any kind",
          "Only children under age 2",
        ],
        correctIndex: 1,
        explanation:
          "Under five years old and under forty pounds, in a vehicle with an active passenger-side front air bag and a rear seat. The exception is a restraint built to work with a front air bag.",
        context:
          "The rule exists because an air bag deploys from the dashboard at up to two hundred miles per hour, which is survivable for an adult sitting well back and not for a small child sitting close. The handbook's broader guidance goes further than the law: children twelve and under should ride buckled in a rear seat, and a rear-facing infant seat should never go in front of a passenger air bag at all.",
        trap:
          "Confusing the safety advice with the legal rule. Twelve and under is the recommendation; five and forty pounds is the requirement.",
        excerptKey: "child-rear-seat-airbag",
        sourceLabel: "NC Driver Handbook - Chapter 4, Child Seats",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_08",
        topic: "parking",
        question:
          "There is a fire being fought and a fire truck at the scene. How far away must you park?",
        choices: [
          "100 feet inside the city, 200 feet outside it",
          "50 feet everywhere",
          "One block inside the city limits, or 400 feet outside them",
          "Two blocks everywhere",
        ],
        correctIndex: 2,
        explanation:
          "A full block inside the city limits, or four hundred feet outside them. The distance differs because a rural fire has no blocks to measure by.",
        context:
          "It sits alongside two neighbouring rules that use different numbers for different situations. You may not park within a hundred feet of an emergency vehicle stopped to investigate a crash or give assistance, and you may not drive or park closer than one block from fire trucks responding to an alarm. Driving over a fire hose is prohibited outright, whatever the distance.",
        trap:
          "Applying the hundred-foot figure here. That one is for an emergency vehicle at a crash scene, not for a fire.",
        excerptKey: "park-fire-block-400",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where you should not park",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_09",
        topic: "emergencies",
        question: "Your car begins to hydroplane on a flooded stretch of road. What should you do?",
        choices: [
          "Brake firmly to break through the water film",
          "Steer sharply toward the shoulder to find grip",
          "Accelerate gently to push the water aside",
          "Lift off the accelerator, keep the wheel straight, and let the car slow itself",
        ],
        correctIndex: 3,
        explanation:
          "Take your foot off the gas, resist the instinct to brake, hold the wheel straight and let the car's own momentum bleed off until the tyres regain contact.",
        context:
          "While you are hydroplaning the tyres are not touching the road, so braking and steering inputs do nothing except set up a skid the moment grip returns. Any sudden movement of the wheel, or even a strong gust of wind, can be enough. The warning signs are worth learning: reflections on the surface, dimples where raindrops hit standing water, a slushing sound from the tyres and a loose feeling in the steering.",
        trap:
          "Braking. It is the instinctive response and it is the one action the handbook specifically tells you to resist.",
        excerptKey: "hydroplane-response",
        sourceLabel: "NC Driver Handbook - Chapter 4, Hydroplaning",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_10",
        topic: "impairment",
        question:
          "A licence is restored after a DWI revocation for the first time. What alcohol concentration restriction is attached to it?",
        choices: ["0.04", "0.00", "0.08", "No restriction is attached"],
        correctIndex: 0,
        explanation:
          "The first restoration carries a 0.04 restriction. A second or subsequent restoration drops it to 0.00.",
        context:
          "The restriction also comes with a limited driving privilege granted after a DWI conviction. Certain offences take it straight to zero regardless of how many restorations there have been: a DWI in a commercial vehicle, driving after consuming while under twenty-one, and felony death by vehicle. A conviction with a reading of 0.15 or more, or a further conviction inside seven years, additionally requires an ignition interlock on the vehicle.",
        trap:
          "Assuming zero applies from the outset. It is the second restoration where the figure drops, not the first.",
        excerptKey: "bac-restriction-restoration",
        sourceLabel: "NC Driver Handbook - Chapter 2, Blood Alcohol Concentration Restrictions",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_11",
        topic: "signs",
        question: "Where is the pennant-shaped no-passing sign placed, and why?",
        choices: [
          "On the right, where all warning signs are placed",
          "On the left, facing the driver who might pull out to pass",
          "Overhead, so it is visible from both lanes",
          "On the right, but only on divided highways",
        ],
        correctIndex: 1,
        explanation:
          "On the left-hand side of the road, pointing to where the no-passing zone begins. That places it in the eyeline of the driver who is thinking about moving over.",
        context:
          "Placement is doing real work here, because the pennant is one of very few signs deliberately positioned on the left. It emphasises rather than replaces the rectangular DO NOT PASS sign, so the pair should be read together. On the pavement the same zone is marked by a solid yellow line in your own lane.",
        trap:
          "Ignoring signs on the left as meant for the other direction. This one is aimed squarely at you.",
        excerptKey: "pennant-no-passing",
        sourceLabel: "NC Driver Handbook - Chapter 5, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_12",
        topic: "rules",
        question: "On a three-lane highway, where may you pass?",
        choices: [
          "In any lane, provided you signal",
          "In the right lane only",
          "Only in the centre lane, and only where it is marked for passing in your direction",
          "Passing is prohibited outright on three-lane highways",
        ],
        correctIndex: 2,
        explanation:
          "The centre lane is the only place you may pass, and only where the markings assign it to your direction. The exception is a vehicle sitting in the centre lane to make a left turn.",
        context:
          "Three-lane highways with a shared centre lane are unusual and dangerous in a specific way: two drivers from opposite directions can decide to use the same lane at the same moment. The markings resolve which direction owns it, which is why passing outside them is prohibited rather than merely discouraged. It is a different arrangement from the two-way left turn lane on a multi-lane road, which may never be used to pass at all.",
        trap:
          "Passing on the right instead. That is unlawful on a three-lane highway, and the road does not have two lanes in each direction.",
        excerptKey: "three-lane-passing",
        sourceLabel: "NC Driver Handbook - Chapter 4, Passing",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_13",
        topic: "rightOfWay",
        question: "You are approaching a single-lane roundabout. Who has the right of way?",
        choices: [
          "Any vehicle or bicycle already in the roundabout",
          "The vehicle approaching from your right",
          "You, if you are already signalling your exit",
          "Whichever vehicle is travelling faster",
        ],
        correctIndex: 0,
        explanation:
          "Traffic already circulating has priority, including bicycles. Drivers already inside the roundabout do not yield to anyone approaching it.",
        context:
          "Everything moves counterclockwise, and the design keeps speeds down to around fifteen to twenty miles per hour, which is what makes the geometry safe. Signal as you leave, and give way to pedestrians in the crosswalks around the outside. On a multi-lane roundabout you choose your lane before entering and do not change it once inside, and you never pass a bicyclist while in the roundabout.",
        trap:
          "Applying the vehicle-on-the-right rule here. Inside a roundabout, circulating traffic outranks approaching traffic no matter which side it comes from.",
        excerptKey: "roundabout-yield",
        sourceLabel: "NC Driver Handbook - Chapter 4, Roundabouts",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_14",
        topic: "licensing",
        question:
          "A 16-year-old holds a Level Two limited provisional licence and is driving unsupervised. Which passengers may ride with them?",
        choices: [
          "Any number of passengers, of any age",
          "No passengers at all under any circumstances",
          "Passengers over 21 only",
          "One passenger under 21 who is not from the same household, plus any number of household members",
        ],
        correctIndex: 3,
        explanation:
          "Unsupervised, a Level Two driver may carry one passenger under twenty-one from outside their household. Members of the same household do not count against that limit at all.",
        context:
          "There is one further allowance: a second under-21 non-household passenger may ride if that passenger is a student being driven directly to or from school. What the rule will not tolerate is mixing the categories loosely, since under-21 household members may not be in the vehicle at the same time as under-21 non-household ones. Level Two driving is otherwise limited to the hours between 5 a.m. and 9 p.m., apart from travel directly to or from work or volunteer emergency service.",
        trap:
          "Counting siblings against the passenger limit. Household members are outside it entirely.",
        excerptKey: "level2-passenger-limit",
        sourceLabel: "NC Driver Handbook - Chapter 1, Level Two Limited Provisional License",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s3_15",
        topic: "signals",
        question:
          "You reach a freeway entrance ramp where the ramp meter signal is dark, showing neither red nor green. What should you do?",
        choices: [
          "Stop and wait for it to display green",
          "Stop, then proceed as at a stop sign",
          "Carry on without stopping and merge as conditions allow",
          "Take a different entrance ramp",
        ],
        correctIndex: 2,
        explanation:
          "A dark ramp meter is inactive. You proceed without stopping and merge or yield the way you normally would.",
        context:
          "That is the opposite of what a dark intersection signal means, which is why the two are worth separating. A ramp meter is only controlling anything when it is actually showing a colour: red means stop and wait, green means go and merge. A dark traffic signal at an intersection, by contrast, turns that intersection into an all-way stop.",
        trap:
          "Applying the dark-signal rule from intersections. Stopping at an inactive ramp meter creates a hazard on a merge lane.",
        excerptKey: "ramp-meter-dark",
        sourceLabel: "NC Driver Handbook - Chapter 5, Ramp Meter Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_16",
        topic: "speed",
        question: "What is the maximum speed limit for a school activity bus?",
        choices: ["35 mph", "45 mph", "50 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "Fifty-five miles per hour for a school activity bus, against forty-five for a school bus. The two are treated as different vehicles in the maximum speed table.",
        context:
          "A school bus runs the daily route; a school activity bus carries teams and trips, and North Carolina allows it ten miles per hour more. The distinction shows up elsewhere too: a school bus driver needs a School Bus Driver's Certificate on top of the CDL endorsements, and an activity bus driver does not. Both are separate from the reduced limit inside a marked school zone.",
        trap:
          "Assuming both kinds of bus share the 45 mph cap. The activity bus is the one allowed 55.",
        excerptKey: "max-speed-table",
        sourceLabel: "NC Driver Handbook - Chapter 4, Maximum Speed Limits",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s3_17",
        topic: "safety",
        question:
          "A driver is caught carrying a 14-year-old in the open bed of a pick-up truck. What are the consequences?",
        choices: [
          "Two licence points and a fine",
          "Nothing, because the bed of a truck is outside the seat belt law",
          "A $25 fine as an infraction, with no court costs, licence points or insurance surcharge",
          "A misdemeanour charge and a 30-day suspension",
        ],
        correctIndex: 2,
        explanation:
          "Carrying a child under sixteen in an open truck bed is unlawful, but it is classed as an infraction: a twenty-five dollar fine with no points, no court costs and no insurance consequence.",
        context:
          "It is the driver of the vehicle who is responsible for compliance. The statute carries several exemptions, including an adult present in the bed supervising the child, a properly installed seat belt meeting the federal standard, a genuine emergency, a parade and agricultural work. The point worth carrying out of this is that being cheap to violate does not make something lawful.",
        trap:
          "Assuming an unlawful act must carry points. This one deliberately carries none, which surprises people either way round.",
        excerptKey: "pickup-bed-fine",
        sourceLabel: "NC Driver Handbook - Chapter 4, Transporting Children in a Pick-up Truck",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_18",
        topic: "sharing",
        question: "How does North Carolina law define a moped?",
        choices: [
          "Any two-wheeled vehicle with an engine under 150cc",
          "Two or three wheels, a motor of no more than 50cc, no external shifting device, and a top speed that cannot exceed 30 mph",
          "Any motorised vehicle that can be ridden without a licence",
          "A bicycle with an electric assist motor of any size",
        ],
        correctIndex: 1,
        explanation:
          "Two or three wheels, fifty cubic centimetres or less, no external shifting device, and a legal top speed of thirty miles per hour. All four conditions apply.",
        context:
          "Machines are sold in North Carolina that exceed the thirty mile per hour ceiling, and those are simply not legal to use on the road here, which is why the handbook tells buyers to check the size and top speed before purchase. A vehicle that fails the definition is treated as a motorcycle, and that brings a licence endorsement into play.",
        trap:
          "Judging by appearance rather than specification. Something that looks like a moped but does thirty-five is a motorcycle in the eyes of the law.",
        excerptKey: "moped-definition",
        sourceLabel: "NC Driver Handbook - Chapter 6, Mopeds",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_19",
        topic: "rules",
        question:
          "Another driver sounds their horn and begins to overtake you on a two-lane road. What does the law require of you?",
        choices: [
          "Maintain your exact speed and position",
          "Move left to give them a wider view of the road ahead",
          "Move to the right edge of the road and do not increase your speed",
          "Brake sharply to shorten the manoeuvre",
        ],
        correctIndex: 2,
        explanation:
          "You are required to help. Move to the right edge of the road and hold or reduce your speed; increasing it is specifically prohibited.",
        context:
          "The obligation is created by the horn, which is why North Carolina builds sounding it into the passing procedure. The consequence for ignoring it is not merely a fine: a driver who speeds up, fails to give way and causes a crash involving bodily injury or property damage can be charged with a misdemeanour.",
        trap:
          "Speeding up to close the gap and end the manoeuvre sooner. That is exactly the behaviour the statute is aimed at.",
        excerptKey: "being-passed-duty",
        sourceLabel: "NC Driver Handbook - Chapter 4, When your vehicle is being passed",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s3_20",
        topic: "emergencies",
        question:
          "Your brakes fail on a downhill stretch. What does the handbook tell you to do?",
        choices: [
          "Switch off the ignition to stop the engine",
          "Steer into the kerb to scrub off speed",
          "Pump the brake pedal continuously until pressure returns",
          "Shift into a lower gear and apply the emergency brake",
        ],
        correctIndex: 3,
        explanation:
          "Drop into a lower gear and use the emergency brake. It may damage the brake and the transmission, and the handbook says plainly that under the circumstances there is no better choice.",
        context:
          "With a manual transmission you also release the clutch pedal; with an automatic you apply the emergency brake and move the selector into low range. Descending a long grade in a lower gear is the way to avoid the situation in the first place, and the handbook says to make that shift at the top of the hill before you start down rather than partway through.",
        trap:
          "Switching off the engine. That kills the power steering and any brake servo assistance you had left.",
        excerptKey: "brake-failure-response",
        sourceLabel: "NC Driver Handbook - Chapter 4, Brake Failure",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_21",
        topic: "signs",
        question: "How far from an intersection is a stop sign usually placed?",
        choices: [
          "Six to 50 feet",
          "Exactly 25 feet",
          "100 to 200 feet",
          "It is always placed at the kerb line",
        ],
        correctIndex: 0,
        explanation:
          "Somewhere between six and fifty feet from the intersection. Because the range is that wide, the sign's position does not tell you where to stop.",
        context:
          "Where you actually stop is decided by the markings, not the sign. If a stop line is painted, you stop at the line. If there is no line and no crosswalk, you stop before entering the intersection at a point where you can see along the intersecting street, which often means a second stop after easing forward past a parked car or a hedge.",
        trap:
          "Stopping level with the sign. On a sign set fifty feet back, that leaves you unable to see anything at all.",
        excerptKey: "stop-sign-placement",
        sourceLabel: "NC Driver Handbook - Chapter 5, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_22",
        topic: "parking",
        question: "May you park within the right of way of an interstate highway?",
        choices: [
          "No, except in designated parking areas or in an emergency",
          "Yes, provided you are entirely on the shoulder",
          "Yes, during daylight hours",
          "Yes, if your hazard flashers are on",
        ],
        correctIndex: 0,
        explanation:
          "Parking anywhere in an interstate right of way is prohibited, apart from areas designated for it and genuine emergencies.",
        context:
          "The handbook's advice for an interstate breakdown assumes an emergency and works within that exception: move as far off the road as you can, get everyone out on the passenger side, tie a white cloth to the aerial or left door handle and raise the hood, and switch on the flashers or parking lights after dark. Rest areas are the designated places, and stopping in a travel lane is prohibited outright.",
        trap:
          "Treating an interstate shoulder as ordinary shoulder parking. On an interstate it is off limits unless something has gone wrong.",
        excerptKey: "park-interstate-rightofway",
        sourceLabel: "NC Driver Handbook - Chapter 4, Places where you should not park",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_23",
        topic: "impairment",
        question:
          "At what reading does a DWI conviction require an ignition interlock device on the vehicle?",
        choices: ["0.10 or more", "0.15 or more", "0.08 or more", "0.20 or more"],
        correctIndex: 1,
        explanation:
          "A reading of 0.15 or more requires an ignition interlock, and so does a further conviction within the past seven years even at a lower reading.",
        context:
          "The interlock sits alongside the alcohol concentration restriction placed on a restored licence, which is 0.04 on the first restoration and 0.00 on any subsequent one. The revocation lengths escalate sharply on their own: one year for a first conviction, four years for a second where the earlier offence fell within three years, and permanent revocation for a third where one prior conviction fell within five.",
        trap:
          "Assuming any DWI brings an interlock. It takes either a 0.15 reading or a repeat inside seven years.",
        excerptKey: "ignition-interlock-015",
        sourceLabel: "NC Driver Handbook - Chapter 2, Blood Alcohol Concentration Restrictions",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_24",
        topic: "rightOfWay",
        question:
          "A funeral procession is moving through an intersection against a red light. You are facing a green light. What may you do?",
        choices: [
          "Proceed, because your green light gives you the right of way",
          "Sound your horn and proceed slowly through the procession",
          "Proceed only after the lead vehicle has passed",
          "Stay out of the intersection unless you can enter safely without crossing the procession's path",
        ],
        correctIndex: 3,
        explanation:
          "A green light does not entitle you to enter. You must not cross the path of the procession, and may only enter the intersection if you can do so safely without doing so.",
        context:
          "The procession's own rules explain why. The lead vehicle obeys all traffic control signals, but once it has legally crossed, every other vehicle in the line may follow through the intersection without stopping. Processions run with headlights and hazard flashers on, and drivers not in the procession must not cut between its vehicles or overtake it, except where the road is marked for two or more lanes in their direction.",
        trap:
          "Reading a green light as an unconditional right to proceed. Here it is not, and driving into a procession is precisely what the rule forbids.",
        excerptKey: "funeral-green-light",
        sourceLabel: "NC Driver Handbook - Chapter 4, Funeral Processions",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s3_25",
        topic: "rules",
        question:
          "You are travelling straight through a wide intersection and realise you want to be in the next lane over. When may you change lanes?",
        choices: [
          "Anywhere inside the intersection, provided you signal",
          "Not while moving straight through the intersection; wait until you are clear of it",
          "Only in the first half of the intersection",
          "Only if there is no marked crosswalk",
        ],
        correctIndex: 1,
        explanation:
          "The handbook is unambiguous: never change lanes while moving straight ahead through an intersection. Wait until you are through it.",
        context:
          "Intersections are where more than a third of fatal crashes happen, and the reason is that they contain more conflicting movements than anywhere else on the road. A lane change adds one more into a space where drivers are already watching for turning traffic and pedestrians. The same section requires you to slow down as you approach an intersection even when the right of way is yours.",
        trap:
          "Assuming a signal makes it legal. Signalling communicates the move; it does not authorise it here.",
        excerptKey: "no-lane-change-in-intersection",
        sourceLabel: "NC Driver Handbook - Chapter 4, Special Driving Situations",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_26",
        topic: "signals",
        question:
          "A driver turns right on red and fails to yield to a pedestrian who is starting to cross in front of them. What penalty applies?",
        choices: [
          "A warning on a first offence",
          "A flat $50 fine",
          "Four licence points and no fine",
          "A fine of not less than $100 and not more than $500",
        ],
        correctIndex: 3,
        explanation:
          "The failure carries its own money penalty, set between one hundred and five hundred dollars, separate from anything attached to the turn itself.",
        context:
          "The duty is drawn deliberately wide. It covers pedestrians already in the intersection and those in reasonably close proximity to it who are starting to cross in front of traffic that is required to stop at the red light. That is the whole point of a right on red: the movement is permitted, but only from a complete stop and only after everyone with priority has been let through.",
        trap:
          "Thinking a red light protects you from a pedestrian claim. Turning on it hands you the yielding obligation.",
        excerptKey: "right-on-red-pedestrian-fine",
        sourceLabel: "NC Driver Handbook - Chapter 5, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_27",
        topic: "speed",
        question: "How much should you reduce speed for hard-packed snow?",
        choices: [
          "By about 10 mph",
          "By more than half",
          "By a quarter",
          "Not at all, if you have snow tyres fitted",
        ],
        correctIndex: 1,
        explanation:
          "More than half, on packed snow. On ice the handbook asks you to slow to a crawl.",
        context:
          "Chains and snow tyres help but do not solve the problem, since both can still slide on ice and packed snow. Watch for shady spots, bridges and overpasses, which freeze first as the temperature drops. When starting or stopping on a slippery surface, build speed slowly, test the steering and braking to get a feel for the road, and allow at least three times the normal stopping distance.",
        trap:
          "Believing winter tyres restore normal grip. They shorten the gap; they do not close it.",
        excerptKey: "snow-halve-speed",
        sourceLabel: "NC Driver Handbook - Chapter 4, Snow and Ice",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_28",
        topic: "licensing",
        question:
          "The DMV learns that a registered vehicle is being operated without proper liability insurance. What can happen?",
        choices: [
          "The vehicle's licence plate can be revoked for 30 days unless proof of continuous coverage is produced",
          "The driver licence is suspended for a year",
          "Nothing until the vehicle is involved in a crash",
          "The registration is cancelled permanently",
        ],
        correctIndex: 0,
        explanation:
          "The plate itself can be revoked for thirty days unless the owner can show coverage was continuous, and the owner may also face a fine or penalty for the lapse.",
        context:
          "North Carolina requires continuous liability insurance for as long as a vehicle carries a valid plate, and it does not honour a grace period; any grace period is an arrangement between you and your insurer, not something the state recognises. The way to end coverage cleanly is to surrender the plate before the policy terminates. A conviction for driving with no liability insurance is worth three licence points.",
        trap:
          "Relying on an insurer's grace period. The state does not recognise one, and the plate is what gets revoked.",
        excerptKey: "insurance-plate-revoked-30",
        sourceLabel: "NC Driver Handbook - Chapter 7, Insurance and Financial Responsibility",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_29",
        topic: "safety",
        question: "What is the correct sequence for changing lanes?",
        choices: [
          "Mirrors, shoulder check for the blind spot, signal in advance, then move over",
          "Signal, move over, then check the mirrors",
          "Mirrors only, then move over promptly",
          "Shoulder check, move over, then signal to explain the move",
        ],
        correctIndex: 0,
        explanation:
          "Check the side and rear-view mirrors, look over your shoulder to clear the blind spot, signal in advance, and only then change lanes.",
        context:
          "The shoulder check exists because mirrors do not show the whole picture: the blind spots sit near the left and right rear corners, exactly where an overtaking car ends up. Glare, a dirty windshield and vehicles parked close to an intersection create more of them. On a multi-lane road, check the lane beyond the one you are moving into as well, in case someone there is planning to occupy the same space.",
        trap:
          "Signalling as the move begins rather than before it. The signal is meant to give other drivers a chance to react.",
        excerptKey: "changing-lanes-blind-spot",
        sourceLabel: "NC Driver Handbook - Chapter 4, Changing Lanes",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_30",
        topic: "sharing",
        question: "What lighting must a bicycle carry after dark in North Carolina?",
        choices: [
          "A front light only",
          "Reflectors on both wheels",
          "A front light visible for at least 300 feet and a rear red light or reflector visible for at least 200 feet",
          "A front light visible for 200 feet and a rear light visible for 300 feet",
        ],
        correctIndex: 2,
        explanation:
          "Three hundred feet at the front, two hundred at the rear, and the rear may be a light or a reflector. The larger distance is at the front.",
        context:
          "The asymmetry follows from geometry: a driver approaching head-on closes at combined speed, so the front needs more warning distance. Riders under sixteen must additionally wear an approved bicycle helmet and be on a saddle seat, and any passenger under forty pounds or forty inches must be in a bicycle restraining seat.",
        trap:
          "Getting the two figures the right way round. Front is 300 feet, rear is 200, and reversing them is the usual error.",
        excerptKey: "bicycle-lights-300-200",
        sourceLabel: "NC Driver Handbook - Chapter 6, Be Visible",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_31",
        topic: "emergencies",
        question:
          "A signal is warning of an approaching train. Where must you stop in relation to the nearest rail?",
        choices: [
          "At least 10 feet away",
          "Anywhere behind the crossbuck",
          "Within 20 feet, but not less than 5 feet",
          "Within 50 feet, but not less than 15 feet",
        ],
        correctIndex: 3,
        explanation:
          "Between fifteen and fifty feet from the nearest rail. Both ends of that range matter: too close is dangerous and too far back leaves you unable to see.",
        context:
          "The same rule applies when a gate is lowered, a flagger is signalling, a train within roughly fifteen hundred feet is sounding a warning, or an approaching train is plainly visible and close. When you stop, keep as far right as you can and do not form two lanes unless the road is marked for four or more. Driving through, around or under a closed or closing gate is prohibited outright.",
        trap:
          "Stopping wherever the queue happens to leave you. The fifteen-foot minimum exists because a train's overhang is wider than the rails.",
        excerptKey: "railroad-stop-50-15",
        sourceLabel: "NC Driver Handbook - Chapter 4, G.S. 20-142.1 Obedience to railroad signal",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nc_s3_32",
        topic: "rules",
        question:
          "You are parked parallel on the right-hand kerb of a two-way street and want to rejoin traffic. What must you do?",
        choices: [
          "Pull out promptly; a signal is unnecessary from a parked position",
          "Check for approaching traffic and give a left-turn signal before moving off",
          "Give a right-turn signal, since you are on the right of the road",
          "Sound your horn and pull out",
        ],
        correctIndex: 1,
        explanation:
          "Check for traffic and signal left. The only exception is where you are parked on the left-hand side of a one-way street, in which case the signal goes the other way.",
        context:
          "The handbook pairs this with a duty on the driver already moving: if you see a vehicle pulling out of a parallel space ahead of you, slow down and be ready to stop. There is also a horn rule that catches this situation, because North Carolina requires the horn whenever a pedestrian may be affected by a turn, a stop or a start from a parked position.",
        trap:
          "Skipping the signal because you are only moving a few feet. Pulling out is the manoeuvre that most needs announcing.",
        excerptKey: "park-signal-before-pulling-out",
        sourceLabel: "NC Driver Handbook - Chapter 4, Parking",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_33",
        topic: "signs",
        question: "What shape is a North Carolina state route marker?",
        choices: ["A shield", "A diamond", "A rectangle", "A circle"],
        correctIndex: 1,
        explanation:
          "North Carolina state routes use a diamond-shaped marker. The shield belongs to U.S. highways, and secondary road signs are rectangular.",
        context:
          "The whole route-marking system is worth reading as a group, because guide signs are the one family that carries no obligation and is easy to skim past. Interstates use a red, white and blue shield; U.S. highways a plain shield; state routes a diamond; secondary roads a rectangle. Odd-numbered highways generally run north and south, even-numbered ones east and west.",
        trap:
          "Reading the diamond as a warning sign. Colour separates them: a yellow diamond warns, a route-marker diamond navigates.",
        excerptKey: "nc-route-diamond",
        sourceLabel: "NC Driver Handbook - Chapter 5, Guide/Informational Signs",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_34",
        topic: "rightOfWay",
        question: "You are pulling out of a private driveway onto a street. What must you do?",
        choices: [
          "Yield only to vehicles, since pedestrians must watch for cars leaving driveways",
          "Merge with the flow of traffic without stopping if the way is clear",
          "Yield only when a vehicle is within 100 feet",
          "Stop and yield to all other vehicles and to pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "Stop, then give way to everything: all other vehicles and all pedestrians. Traffic on the street has priority over anything leaving a driveway.",
        context:
          "The stop is separate from the yield, and the handbook attaches the same technique to any intersection where the view is poor: stop, then move forward slowly and cautiously until you can actually see. Pedestrians on the sidewalk you are crossing count, which is why the horn requirement covers starting from a parked position where someone on foot may be affected.",
        trap:
          "Rolling out because the street looks clear. The sidewalk is part of what you are crossing, and it is where the pedestrian will be.",
        excerptKey: "private-driveway-yield",
        sourceLabel: "NC Driver Handbook - Chapter 4, Right-of-Way at Intersections",
        sourceUrl: HB,
      },
      {
        id: "nc_s3_35",
        topic: "speed",
        question: "What is different about a speeding penalty inside a marked highway work zone?",
        choices: [
          "Where a sign at the start of the zone lists a penalty, that penalty is added on top of the ordinary speeding penalty",
          "The fine is halved because work zone limits are advisory",
          "The penalty replaces the ordinary speeding penalty entirely",
          "No extra penalty applies unless workers are present",
        ],
        correctIndex: 0,
        explanation:
          "If a sign at the beginning of the work zone lists the penalty, that penalty is imposed in addition to whatever the speeding conviction carries on its own.",
        context:
          "The work zone itself is defined by its signs: it runs from the first sign marking the start to the last sign marking the end, so the limit applies over the whole length whether or not you can see anyone working. Black-on-orange signs are reserved strictly for work zones. The handbook also warns that driving noticeably slower than surrounding traffic is a major cause of rear-end collisions inside them.",
        trap:
          "Assuming the penalty depends on workers being present. It depends on the signs, and the zone starts and ends with them.",
        excerptKey: "work-zone-penalty-sign",
        sourceLabel: "NC Driver Handbook - Chapter 4, Work Zones",
        sourceUrl: HB,
      },
    ],
  },
];
