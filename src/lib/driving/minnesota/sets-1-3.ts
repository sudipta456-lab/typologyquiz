import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Minnesota Driver's Manual, June
// 2026 edition, published by the Minnesota Department of Public Safety's
// Driver and Vehicle Services division (DVS), plus the handful of Minnesota
// Statutes chapter 169 sections that carry numbers the manual leaves out and
// the DVS fee page.
//
// Minnesota's manual is unusually complete for a state handbook: it prints the
// parking distances, the school bus distances, the signal distance, the
// headlight rules and the DWI ladder, and its own practice test says every
// answer on the real exam is in the book. The gaps are narrow and specific:
//
// 1. The manual lists only three default speed limits (10 mph alleys, 30 mph
//    urban, 55 mph elsewhere). The 65 and 70 mph freeway limits are in
//    Minnesota Statutes 169.14, subd. 2.
// 2. The manual's "cell phones" section bans composing, reading or sending
//    messages and allows "voice-activated or hands-free mode", but it never
//    says in so many words that HOLDING the phone is the offense. Statute
//    169.475 does, and the question on that rule follows the statute.
// 3. The manual gives the pass mark (80 percent), the one-test-per-day rule
//    and the $10 fee after two consecutive failures, but not the number of
//    questions. The 40-question figure comes from licensed Minnesota driver
//    education programs; see the research note.
//
// Page anchors are PDF pages: the printed page number plus three.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads DVS's own
// wording on the state's site.
const HB = "https://assets.dps.mn.gov/files/dvs/dvs-class-d-drivers-manual-english.pdf";
const pg = (n: number) => `${HB}#page=${n}`;
const STAT = (s: string) => `https://www.revisor.mn.gov/statutes/cite/${s}`;

export const minnesotaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Minnesota Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Minnesota: what the sign colors mean, who goes first, the school bus rule the state prints on page one, and the numbers DVS expects you to know cold on its 40-question Class D test.",
    questions: [
      {
        id: "mn_s1_01",
        topic: "signs",
        question: "You reach a red octagonal sign at a corner with a painted white line across your lane. Where does Minnesota want you to stop?",
        choices: [
          "Just past the line, where you can see cross traffic",
          "Before the painted stop line",
          "Level with the sign post",
          "Anywhere within a car length of the corner",
        ],
        correctIndex: 1,
        explanation:
          "The stop line is the stopping point whenever one is painted. You come to a complete stop behind it, then yield to pedestrians, bicyclists and traffic before moving off.",
        context:
          "Minnesota's manual gives a simple order for where to stop: the marked stop line if there is one, otherwise before the crosswalk, otherwise before entering the intersection. If your view is blocked after you have stopped, you are expected to creep forward and be ready to stop a second time. The stop itself is always complete; a rolling stop is a violation.",
        trap:
          "Stopping past the line to get a better view is a common habit and a common test error. The manual says stop behind the line first, then edge forward if you cannot see.",
        excerptKey: "stop-sign-where",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Stopping",
        sourceUrl: pg(44),
      },
      {
        id: "mn_s1_02",
        topic: "sharing",
        question: "A school bus ahead of you has stopped with its red lights flashing. How far from the bus must you stop?",
        choices: ["At least 10 feet", "At least 15 feet", "At least 20 feet", "At least 50 feet"],
        correctIndex: 2,
        explanation:
          "Minnesota's figure is 20 feet, and it applies whether you are behind the bus or meeting it head-on. You then stay stopped until the red lights go off, not merely until the bus starts to move.",
        context:
          "The manual puts the school bus rule on its very first page of new laws, which tells you how often it is tested. Red flashing lights mean students are getting on or off, and the 20-foot stop applies from either direction on an undivided road. The stop arm is a reminder, not the trigger: you stop for the red lights even if the arm never swings out.",
        trap:
          "The 10-foot figure belongs to railroad crossings and the 50-foot figure to parking near tracks. Mixing up Minnesota's distance numbers is the most common way to lose points on this rule.",
        excerptKey: "bus-red-20-feet",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Flashing red lights",
        sourceUrl: pg(45),
        commonlyMissed: true,
      },
      {
        id: "mn_s1_03",
        topic: "rightOfWay",
        question: "Two cars arrive at an uncontrolled intersection at the same moment, one from your left and you from the right. Who yields?",
        choices: [
          "The driver on the left yields to you",
          "You yield, because the other driver is on your left",
          "Whoever is turning yields, regardless of position",
          "The driver on the wider road goes first",
        ],
        correctIndex: 0,
        explanation:
          "Minnesota's tie-breaker is the same at uncontrolled intersections and at all-way stops: the driver on the left yields to the driver on the right. Since you are the one on the right, the other driver waits.",
        context:
          "The manual lists right-of-way as a set of situations rather than one rule. Simultaneous arrival at an intersection without signals, or at an all-way stop or flashing red, goes to the driver on the right. Left turns yield to oncoming traffic, drivers entering from a driveway yield to everyone, and a driver turning at an uncontrolled T intersection yields to all cross traffic.",
        trap:
          "Road width does not decide it. Unless one road has a stop or yield sign, the right-hand rule is the only tie-breaker Minnesota gives you.",
        excerptKey: "row-uncontrolled",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Right of way and yielding",
        sourceUrl: pg(46),
        commonlyMissed: true,
      },
      {
        id: "mn_s1_04",
        topic: "speed",
        question: "You are driving through a Minnesota town on a street with no speed limit sign posted. What is the limit?",
        choices: ["25 mph", "35 mph", "30 mph", "40 mph"],
        correctIndex: 2,
        explanation:
          "The default for urban or town roads is 30 mph. It applies wherever no sign says otherwise, so an unposted residential street in a city is a 30 mph street.",
        context:
          "Minnesota prints three statutory defaults: 10 mph in alleys, 30 mph on urban or town roads, and 55 mph everywhere else that is not specifically listed. Cities may adopt 25 mph on residential streets and sign it, and the statute adds 65 and 70 mph for freeways, but the three figures in the manual are the ones the test leans on. Above all of them sits the basic speed law: reasonable for conditions, always.",
        trap:
          "Some Minnesota cities have posted 25 mph residential limits, and that leads people to answer 25. The unsigned default is still 30; a lower limit only applies where it is signed.",
        excerptKey: "speed-defaults",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Speed limits",
        sourceUrl: pg(29),
        commonlyMissed: true,
      },
      {
        id: "mn_s1_05",
        topic: "signals",
        question: "You are stopped at a steady red light and want to turn right. There is no sign about turning. What may you do?",
        choices: [
          "Turn right without stopping if the way is clear",
          "Wait for the green light; Minnesota does not allow turns on red",
          "Turn right only when a green arrow appears",
          "Turn right after a complete stop, yielding to pedestrians and traffic",
        ],
        correctIndex: 3,
        explanation:
          "Right on red is the default in Minnesota. You must stop completely first, be in the correct lane, and yield to pedestrians and to traffic already moving through the intersection.",
        context:
          "The manual treats a steady red as stop-and-wait, with two carve-outs. A right turn is allowed after a full stop unless a No Turn on Red sign is posted, and a left turn on red is allowed from a one-way street onto another one-way street on the same terms. A red arrow is different: it means stop for that movement until the arrow turns green.",
        trap:
          "The manual specifically warns about oncoming cars that get a green left-turn arrow before your light changes. Clear ahead is not the same as clear to go; you yield to them.",
        excerptKey: "right-on-red",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Turning on a red light",
        sourceUrl: pg(31),
      },
      {
        id: "mn_s1_06",
        topic: "signs",
        question: "Which sign color tells you that a road crew is working ahead?",
        choices: ["Orange", "Yellow", "Yellow-green", "Blue"],
        correctIndex: 0,
        explanation:
          "Orange is reserved for construction and work zones. The manual tells you to slow down the moment you see one, because workers and equipment are close to moving traffic.",
        context:
          "Minnesota codes its signs by color so you know the type of message before you can read the words. Red prohibits and commands, white regulates, yellow warns, yellow-green warns around pedestrian, bicycle and school crossings, and orange warns in construction zones. Green guides, blue points to motorist services and brown marks historic or recreational sites.",
        trap:
          "Yellow-green is the newer school and pedestrian crossing color and is easy to confuse with orange in a hurry. Work zones are orange, full stop.",
        excerptKey: "sign-colors",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Sign color meanings",
        sourceUrl: pg(59),
      },
      {
        id: "mn_s1_07",
        topic: "rules",
        question: "How far before a turn must you begin signaling in Minnesota?",
        choices: ["At least 50 feet", "At least 100 feet", "At least 200 feet", "At least 300 feet"],
        correctIndex: 1,
        explanation:
          "The signal goes on at least 100 feet before the turn or lane change. You keep it on until the maneuver is finished, which is longer than many drivers manage.",
        context:
          "Minnesota states the 100-foot figure twice, once under signaling and again in the turns section. Hand and arm signals are allowed in daylight as a substitute or supplement, but not at night or from a vehicle that hides your arm. The point is warning time for the driver behind and for pedestrians who are deciding whether to step off the curb.",
        trap:
          "300 feet is the distance a school bus driver switches on the yellow lights in a fast speed zone, not the signaling distance. Keep the two apart.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Signaling",
        sourceUrl: pg(30),
      },
      {
        id: "mn_s1_08",
        topic: "safety",
        question: "What following-distance method does the Minnesota manual teach for good conditions?",
        choices: [
          "One car length for every 10 mph",
          "The two-second rule",
          "The three-second rule",
          "Half your speed in feet",
        ],
        correctIndex: 2,
        explanation:
          "Minnesota teaches a three-second count. Pick a fixed object, start counting when the car ahead passes it, and if you reach it before finishing one-thousand-three you are too close.",
        context:
          "The count is for a standard-length vehicle in ideal conditions. On poor roads, or in a long vehicle, the manual stretches it to four or five seconds, and it separately tells you that a car towing a trailer must keep 500 feet back. If someone is tailgating you, the manual's advice is to slow slightly and let them past.",
        trap:
          "Car-length rules are what older drivers learned, and they still turn up as a tempting choice. Minnesota's manual uses time, not lengths.",
        excerptKey: "three-second-rule",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Three-Second Rule",
        sourceUrl: pg(76),
      },
      {
        id: "mn_s1_09",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Minnesota?",
        choices: ["No closer than 5 feet", "No closer than 15 feet", "No closer than 20 feet", "No closer than 10 feet"],
        correctIndex: 3,
        explanation:
          "Minnesota's hydrant distance is 10 feet. It is one of four parking distances the manual prints, and the test likes to swap them around.",
        context:
          "The four figures are 10 feet from a hydrant, 20 feet from a crosswalk at an intersection, 30 feet from a stop sign, flashing beacon or traffic signal at the side of the road, and 50 feet from the nearest rail of a railroad crossing. Parking is also banned on crosswalks, sidewalks, bridges, in tunnels, in intersections, at the street end of a driveway and on the traffic side of a parked car.",
        trap:
          "Fifteen feet is the hydrant distance in several neighboring states. Minnesota's is 10, and a learner who studied a generic practice site often brings the wrong number.",
        excerptKey: "parking-distances",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Parking",
        sourceUrl: pg(38),
        commonlyMissed: true,
      },
      {
        id: "mn_s1_10",
        topic: "licensing",
        question: "What score do you need to pass Minnesota's Class D written test?",
        choices: ["70 percent", "75 percent", "80 percent", "90 percent"],
        correctIndex: 2,
        explanation:
          "The manual states the pass mark as 80 percent. On the 40-question test that means 32 correct, so you can miss eight and still pass.",
        context:
          "The written test mixes multiple-choice and true-or-false questions on Minnesota traffic law and road signs, taken on a computer or on paper at a DVS exam station by appointment, or through an approved third-party proctor. You may take only one written test per day. The first two attempts carry no test fee; after two consecutive failures a $10 fee applies to the third and every later attempt.",
        trap:
          "Nine wrong is a fail. Learners who remember 80 percent but forget it is out of 40 sometimes think they have more room than they do.",
        excerptKey: "written-test-one-per-day",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: The written test",
        sourceUrl: pg(13),
      },
      {
        id: "mn_s1_11",
        topic: "signals",
        question: "A traffic light shows a flashing red. How should you treat it?",
        choices: [
          "As a stop sign: stop fully, yield, then go when clear",
          "As a yield sign: slow and go if clear",
          "As a warning that the signal is broken; proceed at normal speed",
          "As a red light: wait until it stops flashing",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red is a stop sign in light form. Stop completely, give way to anyone who reached the intersection before you, and proceed once it is clear.",
        context:
          "Minnesota pairs the two flashing signals: flashing red means stop like a stop sign, flashing yellow means slow down and proceed with caution, yielding to traffic and pedestrians already in the intersection. At a flashing red the right-hand tie-breaker applies exactly as at an all-way stop. A signal that is completely dark is treated as an uncontrolled intersection.",
        trap:
          "Waiting for a flashing red to turn green is the mistake nervous new drivers make. It never will; you stop and then go when it is safe.",
        excerptKey: "flashing-red",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Traffic-control signals",
        sourceUrl: pg(69),
      },
      {
        id: "mn_s1_12",
        topic: "impairment",
        question: "At what alcohol concentration can a driver of a regular passenger car be arrested for DWI in Minnesota without any other proof of impairment?",
        choices: ["0.02 percent", "0.04 percent", "0.10 percent", "0.08 percent"],
        correctIndex: 3,
        explanation:
          "The per-se limit is 0.08 percent for a non-commercial driver. At that level the concentration itself supports the arrest, whether the car is moving or parked.",
        context:
          "Minnesota's DWI section uses several numbers and the test expects you to keep them straight. 0.08 is the limit for ordinary drivers, 0.04 for commercial vehicles, and an officer who can prove alcohol caused driving errors can arrest at 0.04 in any vehicle. 0.16 or above is an aggravating factor, an ignition interlock refuses to start at 0.02, and a driver under 21 may not have any detectable alcohol at all.",
        trap:
          "0.04 is the commercial limit and the manual's threshold for an arrest backed by driving errors. It is not the general limit, so read the question for which driver it describes.",
        excerptKey: "dwi-limits",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Minnesota Driving While Impaired (DWI) law",
        sourceUrl: pg(96),
      },
      {
        id: "mn_s1_13",
        topic: "safety",
        question: "When must your headlights be on in Minnesota?",
        choices: [
          "Only between sunset and sunrise",
          "From sunset to sunrise, in rain, snow, sleet, hail or fog, and whenever you cannot see 500 feet ahead",
          "Whenever your wipers are on, and at no other time in daylight",
          "Only when visibility drops below 1,000 feet",
        ],
        correctIndex: 1,
        explanation:
          "Minnesota gives three triggers: the clock (sunset to sunrise), the weather (rain, snow, hail, sleet, fog) and visibility (any time you cannot see the road 500 feet ahead). Any one of them requires headlights.",
        context:
          "The manual repeats the rule in the vehicle chapter and again under driving conditions, with the same 500-foot figure. Daytime running lights do not count for the taillights, which stay off, so on a gray day you switch the headlights on yourself. In fog and heavy rain the lights stay on low beam so the glare does not bounce back at you.",
        trap:
          "1,000 feet is the distance for dimming to low beam when a car is coming toward you. The visibility trigger for switching lights on is 500 feet.",
        excerptKey: "headlights-when",
        sourceLabel: "Minnesota Driver's Manual - Chapter 2: Headlights and taillights",
        sourceUrl: pg(26),
        commonlyMissed: true,
      },
      {
        id: "mn_s1_14",
        topic: "signs",
        question: "A downward-pointing triangle with a red border is ahead. What does it require?",
        choices: [
          "Stop completely before proceeding",
          "Sound the horn and continue",
          "Slow down, stop if necessary, and give the right of way to all other vehicles and pedestrians",
          "Maintain speed if no one is visible",
        ],
        correctIndex: 2,
        explanation:
          "A yield sign asks you to slow, look, and let everyone else through, stopping if that is what it takes. You proceed only when it is safe.",
        context:
          "The triangle is the only three-sided sign, which is why its shape alone is enough to recognize it. Yield sits between a stop and nothing: there is no automatic halt, but there is no right to push in either. Yield signs also appear on freeway entry ramps without acceleration lanes, where the manual tells you to stop if necessary and never force your way in.",
        trap:
          "Yield does not mean stop every time, but it does mean stop when a gap does not exist. Treating it as advisory is the error.",
        excerptKey: "yield-sign-meaning",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Regulatory signs",
        sourceUrl: pg(60),
      },
      {
        id: "mn_s1_15",
        topic: "rules",
        question: "You want to pass a car on a two-lane road. What must be true of the center line on your side?",
        choices: [
          "It must be a solid yellow line",
          "It must be a broken (dashed) yellow line",
          "It must be a solid white line",
          "The color does not matter as long as no one is coming",
        ],
        correctIndex: 1,
        explanation:
          "Yellow dashes on your side of the center mean passing is allowed. A solid yellow line on your side, or double solid yellow, means you stay put.",
        context:
          "Yellow lines separate opposing traffic and white lines separate lanes going the same way. With mixed lines you obey the marking in your own lane, so a dashed line on your side and a solid one on theirs lets you pass but not them. Beyond the paint, the manual bars passing on a curve or hill without 700 feet of clear view, within 100 feet of an intersection, tunnel, underpass or railroad crossing, and where a No Passing Zone sign is posted.",
        trap:
          "A clear road is not enough. If the line on your side is solid, the pass is illegal however empty the oncoming lane looks.",
        excerptKey: "yellow-lines",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Yellow lines",
        sourceUrl: pg(72),
      },
      {
        id: "mn_s1_16",
        topic: "emergencies",
        question: "An ambulance with lights and siren is coming up behind you on a two-way street. What does Minnesota require?",
        choices: [
          "Speed up to stay ahead of it",
          "Stop where you are in the lane",
          "Move into the left lane so it can pass on the right",
          "Pull to the right and stop until it has passed",
        ],
        correctIndex: 3,
        explanation:
          "On a two-way road you pull to the right and stop. On a one-way road you pull to the nearest side. If you are already in an intersection, you clear it first and then stop.",
        context:
          "The rule covers any authorized emergency vehicle sounding a siren or bell with red lights flashing. You stay stopped until every emergency vehicle has passed, since they often travel in groups. The one release is a physical barrier: if a fence, wall or median strip separates your lane from the emergency vehicle, you do not have to stop.",
        trap:
          "Stopping dead in the middle of the lane, or in the intersection, blocks the very vehicle you are trying to help. Clear the intersection, then get to the side.",
        excerptKey: "emergency-vehicle-pull-right",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Yield to emergency vehicles",
        sourceUrl: pg(47),
      },
      {
        id: "mn_s1_17",
        topic: "licensing",
        question: "How long is a Minnesota instruction permit valid?",
        choices: ["One year", "Two years", "Six months", "Until your 18th birthday"],
        correctIndex: 1,
        explanation:
          "The permit is valid for two years of supervised practice. If it is lost or expires, a replacement permit runs for two years from the day you apply.",
        context:
          "The permit is the first stage of Minnesota's graduated licensing. Under 18 you need a supervising driver aged 21 or older in the front passenger seat; at 18 or older the supervisor need only be 18. Drivers 18 or younger hold the permit at least six months before the road test; at 19 or older the minimum is three months.",
        trap:
          "Six months is the minimum holding period before the road test, not the permit's life. The document itself lasts two years.",
        excerptKey: "permit-valid-two-years",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Your instruction permit",
        sourceUrl: pg(16),
      },
      {
        id: "mn_s1_18",
        topic: "signals",
        question: "A steady yellow light appears as you approach an intersection. What does the manual tell you to do?",
        choices: [
          "Stop if you can do so safely; if you cannot, continue through with caution",
          "Speed up to clear the intersection before the red",
          "Stop no matter what, even if it means braking hard",
          "Treat it as a green light for the next three seconds",
        ],
        correctIndex: 0,
        explanation:
          "Yellow means the signal is about to turn red. If you can stop safely, stop; if stopping would be dangerous, go through carefully.",
        context:
          "Minnesota adds a detail many states omit: if you are already waiting inside the intersection to turn when yellow becomes red, finish the turn as soon as it is safe and never back up. A steady yellow arrow carries the same meaning for that movement. A flashing yellow, by contrast, is a caution signal you may drive through while yielding to anyone already in the intersection.",
        trap:
          "Accelerating on yellow is the instinct the test is written to catch. The lawful choice is stop if you safely can.",
        excerptKey: "steady-yellow",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Traffic-control signals",
        sourceUrl: pg(69),
      },
      {
        id: "mn_s1_19",
        topic: "sharing",
        question: "How much room must you leave when passing a bicyclist in Minnesota?",
        choices: ["At least 2 feet", "At least 3 feet", "At least 5 feet", "One full lane width"],
        correctIndex: 1,
        explanation:
          "Three feet is the legal minimum between your car and the rider. The manual also lets you cross the center line to get that space, even in a no-passing zone, when it is safe.",
        context:
          "Bicycles are vehicles under Minnesota law with the same rights and duties as cars. You may not drive in a bicycle lane except to park where allowed, to enter or leave the road, or to set up a turn, and even then you yield to any approaching rider first. Before passing, check that the cyclist is not signaling or setting up a left turn.",
        trap:
          "Crossing a solid yellow line to pass a cyclist sounds illegal, but Minnesota specifically allows it when safe. What is never allowed is squeezing past inside three feet.",
        excerptKey: "bicycle-3-feet",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Passing a bicyclist",
        sourceUrl: pg(51),
      },
      {
        id: "mn_s1_20",
        topic: "parking",
        question: "You park facing downhill next to a curb. Which way do you turn the front wheels?",
        choices: [
          "Toward the curb",
          "Away from the curb",
          "Straight ahead",
          "It does not matter if the parking brake is set",
        ],
        correctIndex: 0,
        explanation:
          "Downhill, the wheels turn toward the curb so a rolling car is caught by it. Uphill with a curb they turn away from it; uphill without a curb they turn toward the shoulder.",
        context:
          "The logic is the same in every case: if the vehicle moves, it should roll away from traffic and into something that stops it. Minnesota adds that for any parallel parking you turn the wheels toward the curb or shoulder, put the car in park and set the parking brake, with the roadside wheels no more than 12 inches from the curb.",
        trap:
          "Uphill with a curb is the one that flips: wheels away from the curb, so the back of the tire catches the curb if the car rolls back.",
        excerptKey: "hill-parking-downhill",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Parking on a hill",
        sourceUrl: pg(39),
        commonlyMissed: true,
      },
      {
        id: "mn_s1_21",
        topic: "rightOfWay",
        question: "You are turning left on a solid green light and a car is coming straight toward you. Who has the right of way?",
        choices: [
          "You, because you entered the intersection first",
          "You, because a green light protects turns",
          "The oncoming driver; you must yield before turning",
          "Neither; the faster vehicle goes",
        ],
        correctIndex: 2,
        explanation:
          "A left turn always yields to oncoming traffic that is in the intersection or close enough to be a hazard. A plain green light does not protect the turn; only a green arrow does.",
        context:
          "The manual tells left-turners at a green light to wait inside the intersection with their body even with the curb line, wheels straight, foot on the brake, and expect to complete the turn only when the light goes yellow. A green arrow is the protected version, and even then you yield to anyone already in the intersection. Left turns in front of oncoming motorcycles are singled out as the most common car-motorcycle crash.",
        trap:
          "Being first into the intersection gives you no priority over oncoming traffic. That rule is for cross traffic at stops, not for left turns.",
        excerptKey: "row-left-turn",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Right of way and yielding",
        sourceUrl: pg(46),
      },
      {
        id: "mn_s1_22",
        topic: "safety",
        question: "Who must wear a seat belt in a car on a Minnesota road?",
        choices: [
          "Only the driver and front-seat passengers",
          "The driver and every passenger, including those in the back seat",
          "Only passengers under 18",
          "Only on highways with a limit above 35 mph",
        ],
        correctIndex: 1,
        explanation:
          "Everyone in the vehicle buckles up, back seat included. Minnesota's belt law is a primary offense, meaning an officer can stop you for it alone.",
        context:
          "The manual attaches numbers to the rule: unbelted occupants are four times more likely to be killed or injured, and a crash at 12 mph can be fatal. Children under 13 ride in the back when a back seat exists, under 2 rear-facing, and 4 to 9 in a booster once they outgrow a car seat. The statute sets the seat belt fine at $25.",
        trap:
          "Some states still do not enforce rear belts, so learners assume the back seat is optional. In Minnesota it is not, and the driver is responsible for passengers under 15.",
        excerptKey: "seat-belt-law",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Seat belt laws",
        sourceUrl: pg(40),
      },
      {
        id: "mn_s1_23",
        topic: "signs",
        question: "What does a white rectangular sign with black letters generally tell you?",
        choices: [
          "A hazard is ahead",
          "A service is available at the next exit",
          "A regulation you must obey, such as a speed limit",
          "A historic or recreational site",
        ],
        correctIndex: 2,
        explanation:
          "White signs regulate. Speed limits, lane-use rules, no-turn signs and parking rules are white with black or red markings, and disobeying one can bring a citation.",
        context:
          "Minnesota's color code puts the regulatory family in red and white, the warning family in yellow, yellow-green and orange, and the information family in green, blue and brown. A red circle with a slash on a white sign means the pictured action is prohibited. Shape reinforces color: octagon for stop, triangle for yield, diamond for warnings, pentagon for school zones, crossbuck for railroads.",
        trap:
          "Yellow diamonds warn; white rectangles command. A learner who treats a white sign as advice has misread the whole system.",
        excerptKey: "sign-colors",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Sign color meanings",
        sourceUrl: pg(59),
      },
      {
        id: "mn_s1_24",
        topic: "rules",
        question: "You are backing out of a driveway onto a residential street. How does the manual tell you to do it?",
        choices: [
          "Back across to the far lane so you are pointed the way you want to go",
          "Back into the nearest lane, then drive forward from there",
          "Back out quickly to minimize time in the road",
          "Reverse until a passing driver flashes you out",
        ],
        correctIndex: 1,
        explanation:
          "You back into the nearest lane and no further, then drive forward. Backing across lanes of traffic is only allowed when you are certain it is safe.",
        context:
          "Before backing, the manual wants you to walk around the car, look front, sides and rear, and keep looking out the rear window while moving; mirrors and the backup camera are aids, not substitutes. Backing up on a freeway or expressway is banned outright except for emergency vehicles, and backing on any public road can be charged as careless or reckless driving.",
        trap:
          "Relying on the backup camera alone is the modern mistake. The manual says look out the rear window, and the road test is failed if the camera is your only means of observation.",
        excerptKey: "backing-look",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Backing up",
        sourceUrl: pg(38),
      },
      {
        id: "mn_s1_25",
        topic: "impairment",
        question: "A 19-year-old driver is stopped and found to have a small but detectable amount of alcohol in their system. What happens under Minnesota law?",
        choices: [
          "Nothing, because they are under the 0.08 limit",
          "A warning, unless they were also speeding",
          "Their driving privileges are suspended for 30 days on conviction",
          "A fine only, with no license action",
        ],
        correctIndex: 2,
        explanation:
          "Minnesota's no-tolerance rule for drivers under 21 makes any detectable alcohol an offense. A first conviction suspends driving privileges for 30 days, and a second for 180 days.",
        context:
          "The rule sits alongside Vanessa's Law, which keeps an unlicensed teen who commits an alcohol-related violation from getting any permit or license until 18. Being under 21 is also listed as a factor that makes DWI penalties more severe. The legal drinking age in Minnesota is 21, and the manual is blunt that the only thing that lowers alcohol concentration is time.",
        trap:
          "Being under 0.08 is irrelevant for a driver under 21. The threshold for them is zero, not a number.",
        excerptKey: "not-a-drop",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Underage drinking - no tolerance rule",
        sourceUrl: pg(98),
        commonlyMissed: true,
      },
      {
        id: "mn_s1_26",
        topic: "emergencies",
        question: "You are involved in a crash in which another driver is injured. Who must be called?",
        choices: [
          "Only your insurance company",
          "The nearest law enforcement agency or 911, as quickly as possible",
          "A tow company first, then the police",
          "No one, as long as everyone exchanges information",
        ],
        correctIndex: 1,
        explanation:
          "Injury or death means law enforcement or 911 right away. Property-damage-only crashes do not require notifying police, which is the distinction the test checks.",
        context:
          "Minnesota's crash checklist is stop, protect the scene with hazard lights or flares, call for help, give first aid if you are able, and exchange name, address, date of birth and registration number with the other drivers and any officer. You are legally required to give reasonable assistance to victims. Insurance details go to the investigating officer, within 72 hours if you do not have them with you.",
        trap:
          "The property-damage rule (no police needed) is real, but it evaporates the moment anyone is hurt.",
        excerptKey: "crash-call-help",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: What to do in a traffic crash",
        sourceUrl: pg(42),
      },
      {
        id: "mn_s1_27",
        topic: "sharing",
        question: "A pedestrian has stepped into an unmarked crosswalk at an intersection ahead of you. What must you do?",
        choices: [
          "Slow down and steer around them",
          "Sound your horn so they hurry",
          "Continue, because only marked crosswalks give pedestrians priority",
          "Stop and wait until they have passed your lane",
        ],
        correctIndex: 3,
        explanation:
          "Marked or unmarked makes no difference: you stop for a pedestrian in the crosswalk and stay stopped until they have cleared your lane. Passing a car that has stopped for a pedestrian is illegal.",
        context:
          "An unmarked crosswalk is wherever a sidewalk meets a road at an intersection, painted lines or not. Violating pedestrian right-of-way is a misdemeanor and a second violation within a year is a gross misdemeanor. The manual also tells you never to honk or rev at a pedestrian with a white cane or guide dog, and to expect pedestrians wherever cars are parked, visibility is poor or children are about.",
        trap:
          "The unmarked crosswalk is the trap. Many learners think no paint means no crosswalk; Minnesota says the crosswalk exists at every intersection with a sidewalk.",
        excerptKey: "pedestrian-in-crosswalk",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Watch for pedestrians",
        sourceUrl: pg(50),
        commonlyMissed: true,
      },
      {
        id: "mn_s1_28",
        topic: "speed",
        question: "You are driving in an alley behind a row of shops with no speed sign. What is the maximum speed?",
        choices: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctIndex: 0,
        explanation:
          "Alleys default to 10 mph in Minnesota. It is the lowest of the three defaults the manual prints and the one people forget.",
        context:
          "The three statutory figures are 10 mph in alleys, 30 mph on urban or town roads and 55 mph elsewhere. Local authorities may post a different alley limit, in which case the sign governs. Whatever the number, the basic speed law still applies: you must be reasonable for the conditions, and an alley with pedestrians and blind doorways rarely justifies even 10.",
        trap:
          "15 mph is the floor Minnesota sets for school zone limits in the statute. Alleys are 10.",
        excerptKey: "speed-defaults",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Speed limits",
        sourceUrl: pg(29),
      },
      {
        id: "mn_s1_29",
        topic: "licensing",
        question: "How old must you be to apply for a Minnesota instruction permit?",
        choices: ["14", "15", "16", "15 and a half"],
        correctIndex: 1,
        explanation:
          "The minimum age is 15. Under 18 you also need to have finished 30 hours of classroom driver education (or the first 15 hours of a concurrent course) and be enrolled in behind-the-wheel training.",
        context:
          "At the exam station a teen shows the Blue Card or Pink Card from their driver education program, passes the vision screening and the written test, and has a parent or guardian sign the application. At 18 or older no classroom or behind-the-wheel course is required. The permit fee is $29.50 on the DVS fee schedule.",
        trap:
          "Sixteen is the provisional license age, not the permit age. Minnesota lets you start practicing a year earlier.",
        excerptKey: "permit-requirements",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Your instruction permit",
        sourceUrl: pg(16),
      },
      {
        id: "mn_s1_30",
        topic: "safety",
        question: "You are driving at night and an oncoming car is 800 feet away. What must your headlights be doing?",
        choices: [
          "Flashing to warn the other driver",
          "On high beam, since you are more than 500 feet apart",
          "On low beam, since you are within 1,000 feet of an oncoming vehicle",
          "Off, with parking lights only",
        ],
        correctIndex: 2,
        explanation:
          "Low beam is required within 1,000 feet of an oncoming vehicle. Behind another car the dimming distance is 200 feet.",
        context:
          "Minnesota's headlight numbers come in a set: on from sunset to sunrise or when you cannot see 500 feet, low beam within 1,000 feet of oncoming traffic or 200 feet behind a vehicle, and high beams that must show the road 350 feet ahead. The manual adds that nearly half of the state's fatal crashes happen after dark, and that glare is handled by looking at the white edge line rather than at the lights.",
        trap:
          "500 feet is the visibility trigger for turning lights on. The dimming distance for oncoming cars is double that.",
        excerptKey: "low-beam-distances",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Headlights",
        sourceUrl: pg(76),
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "The rules Minnesota drivers use every day: lane changes, passing, roundabouts, the Move Over Law, railroad crossings, the provisional license restrictions and the everyday numbers the test pulls straight from the manual.",
    questions: [
      {
        id: "mn_s2_01",
        topic: "rules",
        question: "Before changing lanes, what does the manual say you must do beyond checking your mirrors?",
        choices: [
          "Sound the horn once",
          "Turn your head to check the blind spot in the lane you are entering",
          "Slow down by at least 5 mph",
          "Flash your headlights",
        ],
        correctIndex: 1,
        explanation:
          "Mirrors do not cover the blind spots beside your car, so Minnesota requires a quick head turn toward the lane you are moving into. Signal first, then look, then move.",
        context:
          "Blind spots depend on the vehicle's pillars and mirrors, and the manual notes that dirty glass and glare create temporary ones too. The same head check is required before turning, and the manual warns you to avoid sitting in other drivers' blind spots, especially near trucks whose no-zones run 20 feet ahead of the cab and up to 200 feet behind the trailer.",
        trap:
          "The DVS practice test asks this as a leaving-the-curb question. The answer is the same: look by turning your head, not by trusting the inside mirror.",
        excerptKey: "lane-change-head-check",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Changing lanes",
        sourceUrl: pg(31),
      },
      {
        id: "mn_s2_02",
        topic: "rules",
        question: "On a two-lane highway posted at 55 mph, what does Minnesota law allow while you are lawfully passing another vehicle?",
        choices: [
          "Nothing extra; 55 mph is the ceiling",
          "Any speed needed to complete the pass",
          "Up to 10 mph over the posted limit",
          "Up to 5 mph over the posted limit",
        ],
        correctIndex: 2,
        explanation:
          "Minnesota raises the limit by 10 mph for a lawful pass on a two-lane road posted at 55 or above. It is one of the few states with such a rule and the manual states it twice.",
        context:
          "The allowance has conditions: one lane each way, a posted limit of 55 mph or more, and a pass that is otherwise legal. It does not apply on a 40 mph road or on a four-lane highway. Everywhere else the manual is firm that you do not exceed the speed limit to complete a pass, and that you must be back on your side before coming within 100 feet of an oncoming vehicle.",
        trap:
          "Learners from other states answer that no speeding is ever allowed. In Minnesota the +10 rule is real, but only on 55-plus two-lane roads.",
        excerptKey: "passing-plus-10",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Speed limits",
        sourceUrl: pg(29),
        commonlyMissed: true,
      },
      {
        id: "mn_s2_03",
        topic: "rightOfWay",
        question: "You are about to enter a roundabout. What is the rule?",
        choices: [
          "Vehicles entering have priority over those already circulating",
          "Yield to vehicles already in the roundabout and enter only when traffic from the left has cleared",
          "Stop completely at the entry, whether or not anyone is coming",
          "Enter and expect circulating traffic to let you in",
        ],
        correctIndex: 1,
        explanation:
          "Traffic in the circle has the right of way. You slow, yield to anyone coming from your left, and enter when there is a gap, then drive counterclockwise to your exit.",
        context:
          "Minnesota's roundabout rules add three more points: pick the correct lane before entering a multi-lane roundabout, never stop, pass or change lanes inside it, and if an emergency vehicle approaches, exit first and then pull over. Vehicles longer than 40 feet or wider than 10 feet may straddle lanes as needed, and when two large vehicles go through together the one on the right yields to the one on the left.",
        trap:
          "A roundabout entry is a yield, not a stop sign. Stopping when nothing is coming is the wrong answer on the test and an invitation to be rear-ended in practice.",
        excerptKey: "roundabout-entering",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Roundabouts",
        sourceUrl: pg(33),
      },
      {
        id: "mn_s2_04",
        topic: "sharing",
        question: "A tow truck with its warning lights flashing is stopped on the shoulder of a four-lane road. What does Minnesota's Move Over Law require?",
        choices: [
          "Stop behind the truck until it leaves",
          "Move to the lane farthest from the truck if you can safely do so",
          "Slow to 20 mph in the lane next to it",
          "Nothing; the law applies only to police cars",
        ],
        correctIndex: 1,
        explanation:
          "With two or more lanes in your direction you move a full lane away from the stopped vehicle when it is safe. Tow trucks, ambulances, fire trucks and police cars all count.",
        context:
          "The same duty applies to stalled and disabled vehicles and to service patrol, road maintenance, utility, construction, postal and garbage trucks stopped with warning lights on. Where you cannot move over, or on a road with one lane each way, you slow down and pass with caution. Failing to slow for a stopped emergency vehicle also adds a surcharge of at least $25 to a speeding fine.",
        trap:
          "Slowing down in the adjacent lane is only the fallback. When a lane away is available and safe, the law requires the lane change.",
        excerptKey: "move-over-law",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Passing parked emergency and service vehicles",
        sourceUrl: pg(47),
        commonlyMissed: true,
      },
      {
        id: "mn_s2_05",
        topic: "sharing",
        question: "The gates are down and the lights are flashing at a railroad crossing. How far from the nearest rail or gate must you stop?",
        choices: ["At least 5 feet", "At least 10 feet", "At least 15 feet", "At least 50 feet"],
        correctIndex: 1,
        explanation:
          "Ten feet from the nearest rail or gate. After the train passes, you cross only when you can clear the tracks without stopping within 10 feet of the far rail.",
        context:
          "Minnesota's rail rules run in a set: stop 10 feet back, never pass within 100 feet of a crossing, never park within 50 feet of the nearest rail, and after the last car passes look for a second train on another track before moving. Some vehicles must stop at every crossing; you do not pass them. Do not shift gears on the tracks, and if you stall with a train coming, get out and walk at a 45-degree angle away from the tracks, toward the train.",
        trap:
          "Fifty feet is the parking distance near tracks. The stopping distance at an active crossing is 10 feet.",
        excerptKey: "railroad-stop-10-feet",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Railroad crossing warning devices",
        sourceUrl: pg(56),
      },
      {
        id: "mn_s2_06",
        topic: "licensing",
        question: "During the first six months of a Minnesota provisional license, how many passengers under 20 may you carry without a parent or guardian in the car?",
        choices: ["None", "One", "Two", "Three"],
        correctIndex: 1,
        explanation:
          "One passenger under 20 in the first six months, and no more than three in the second six months. Immediate family members under 20 do not count toward either limit.",
        context:
          "The provisional license lasts two years and carries a nighttime rule too: in the first six months no driving between midnight and 5 a.m. unless a licensed driver aged 25 or older is with you, or you are going between home and work, between home and a school event without school transport, or driving for employment. Cell phones are banned entirely for provisional drivers, hands-free included, except to call 911.",
        trap:
          "The passenger limit steps up from one to three after six months. Answering three for the first six months is the usual slip.",
        excerptKey: "provisional-passengers",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Passenger limitations",
        sourceUrl: pg(18),
        commonlyMissed: true,
      },
      {
        id: "mn_s2_07",
        topic: "signs",
        question: "A yellow pentagon-shaped sign shows two figures walking. What is it telling you?",
        choices: [
          "A hospital is ahead",
          "A school or school crosswalk is ahead; watch for children",
          "A trail crossing for hikers",
          "Pedestrians are prohibited",
        ],
        correctIndex: 1,
        explanation:
          "The five-sided shape is reserved for school zones and school crossings. It may be yellow or fluorescent yellow-green, and it means slow down and be ready to stop for children.",
        context:
          "In a school zone Minnesota tells you to slow when children are present, and the statute lets a posted school limit go as low as 15 mph. You must also stop completely for a student safety patrol or an adult crossing guard showing a stop sign or flag, and it is a misdemeanor to drive through a line of crossing children whether or not a patrol is there.",
        trap:
          "The pentagon is the giveaway. A yellow diamond with a walking figure is a general pedestrian crossing; the five-sided version is school-specific.",
        excerptKey: "school-zone-sign",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Warning signs",
        sourceUrl: pg(63),
      },
      {
        id: "mn_s2_08",
        topic: "parking",
        question: "How far from a stop sign may you park on the same side of the road?",
        choices: ["10 feet", "20 feet", "30 feet", "50 feet"],
        correctIndex: 2,
        explanation:
          "Thirty feet from any stop sign, flashing beacon or traffic signal at the side of a road. Parking closer hides the sign from approaching drivers.",
        context:
          "Minnesota's parking distances go 10, 20, 30, 50: hydrant, crosswalk at an intersection, stop sign or signal, railroad rail. Alongside those are absolute bans: within an intersection, on a crosswalk or sidewalk, at the street end of a driveway, on any bridge or in any tunnel, beside a yellow curb, and double-parked on the traffic side of a parked car. The statute adds bicycle lanes unless a sign permits parking.",
        trap:
          "Twenty feet is the crosswalk figure. Stop signs get 30, because a parked car near the sign blocks the sight line to it.",
        excerptKey: "parking-distances",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Parking",
        sourceUrl: pg(38),
      },
      {
        id: "mn_s2_09",
        topic: "signals",
        question: "A lane-use signal over your lane shows a steady yellow X. What should you do?",
        choices: [
          "Prepare to move safely out of that lane, because a red X is coming",
          "Use the lane for left turns only",
          "Continue; the lane is open to you",
          "Stop under the signal and wait for green",
        ],
        correctIndex: 0,
        explanation:
          "A steady yellow X warns that the lane is being switched off and a steady red X will follow. Move over while you safely can.",
        context:
          "Lane-use signals let a road change direction by time of day. A downward green arrow opens the lane, a steady red X closes it, a steady yellow X is the warning in between, and a flashing yellow X means the lane may be used for left turns with care because opposing left-turners share it. On freeways a steady downward yellow arrow means the lane is closing and a flashing yellow arrow means use it with caution.",
        trap:
          "The flashing yellow X is the left-turn signal. A steady yellow X is not permission for anything; it is a countdown to red.",
        excerptKey: "lane-signal-yellow-x",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Lane use control signals",
        sourceUrl: pg(71),
      },
      {
        id: "mn_s2_10",
        topic: "safety",
        question: "Which hand position does Minnesota's manual recommend on the steering wheel of a car with an airbag?",
        choices: [
          "10 and 2 o'clock",
          "12 o'clock with one hand",
          "8 and 4 or 9 and 3 o'clock",
          "6 o'clock with both hands",
        ],
        correctIndex: 2,
        explanation:
          "Lower hand positions keep your arms out of the airbag's path. The manual specifically says to avoid the old 10 and 2 position and to keep your thumbs turned out.",
        context:
          "The airbag advice comes with a distance: keep at least 10 inches between your chest and the wheel, move the front passenger seat well back, and never put a rear-facing infant seat in front of an active airbag. An airbag is a supplemental restraint that works with the belt; it does not stop ejection, which is why the belt still matters.",
        trap:
          "10 and 2 is what a parent may have taught. Minnesota's manual names it as the position to avoid.",
        excerptKey: "airbag-10-inches",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Airbag safety suggestions",
        sourceUrl: pg(42),
      },
      {
        id: "mn_s2_11",
        topic: "impairment",
        question: "What is the only thing that lowers a person's alcohol concentration?",
        choices: ["Strong coffee", "A cold shower", "Fresh air and exercise", "Time"],
        correctIndex: 3,
        explanation:
          "Only waiting works. The body clears roughly one drink per hour, mostly through the liver, and coffee, exercise and cold showers do nothing to speed it up.",
        context:
          "The manual explains that the liver oxidizes about 95 percent of alcohol and the rest leaves through breath, sweat and urine. Drinking faster than one standard drink an hour raises concentration, and a 12-ounce beer, a 5-ounce glass of wine, a typical mixed drink and a 9-ounce wine cooler carry about the same alcohol. Body fat, food, mood and sleep all change how a given amount affects you.",
        trap:
          "Coffee makes a wide-awake drunk, not a sober one. The test likes this one because everybody has heard the myth.",
        excerptKey: "sober-up-wait",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Things to know about alcohol",
        sourceUrl: pg(95),
      },
      {
        id: "mn_s2_12",
        topic: "rules",
        question: "Where is a U-turn never permitted in Minnesota?",
        choices: [
          "At any intersection with a traffic light",
          "On an interstate freeway",
          "On any street in a business district",
          "Anywhere outside a marked U-turn lane",
        ],
        correctIndex: 1,
        explanation:
          "U-turns are banned on interstate freeways, and also near hilltops and on curves where other drivers cannot see you from 1,000 feet away. Elsewhere they are allowed if they do not disrupt traffic and no sign forbids them.",
        context:
          "The manual describes a U-turn as a 180-degree reversal. On a road with two or more lanes in your direction a driver may swing into the farthest lane and briefly use the shoulder to complete one when necessary. Missing a freeway exit is specifically not a reason to turn around or back up; you go on to the next exit.",
        trap:
          "Learners often think U-turns are banned at every signalized intersection. Minnesota bans them only where a sign says so or where visibility or the freeway rule applies.",
        excerptKey: "u-turn-rules",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: U-turns",
        sourceUrl: pg(36),
      },
      {
        id: "mn_s2_13",
        topic: "rightOfWay",
        question: "You are on a freeway entrance ramp merging into traffic. Who yields?",
        choices: [
          "Freeway traffic must make room for merging vehicles",
          "You must yield to vehicles already on the freeway",
          "Whoever is going faster",
          "The vehicle on the right, as at any intersection",
        ],
        correctIndex: 1,
        explanation:
          "The merging driver yields. You use the acceleration lane to match the speed of freeway traffic, signal, find a gap and slide in without forcing anyone to brake.",
        context:
          "Minnesota's manual tells you not to stop on the ramp or in the acceleration lane unless it is absolutely necessary. Where a ramp has no acceleration lane and a yield sign, you obey the sign and stop if you must. Metered ramps add a signal: one car per green, and running the red is a violation.",
        trap:
          "Drivers already on the freeway are asked to be courteous, but the legal duty to yield is on the driver entering.",
        excerptKey: "freeway-merge-yield",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Entering the freeway",
        sourceUrl: pg(77),
      },
      {
        id: "mn_s2_14",
        topic: "emergencies",
        question: "Your car starts to skid on an icy road. What is the manual's first instruction?",
        choices: [
          "Brake hard to scrub off speed",
          "Steer sharply in the opposite direction",
          "Take your foot off the accelerator and the brake until you can steer where you want to go",
          "Shift into neutral and coast",
        ],
        correctIndex: 2,
        explanation:
          "Skids come from tires losing grip, so the fix is to stop asking them to do anything: no gas, no brake, and steer toward the direction you want to travel once they regain traction.",
        context:
          "Winter driving in Minnesota is its own section. Clear snow and ice off the whole car, test the brakes gently to feel the surface, keep speed down, and never use cruise control on a slippery road. If you get stuck, rock the car forward and back with the wheels straight and without spinning the tires. If you are stranded, stay with the vehicle.",
        trap:
          "Slamming the brakes locks the wheels and turns a small skid into a spin. The manual says not to overreact.",
        excerptKey: "skid-response",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Skidding",
        sourceUrl: pg(85),
      },
      {
        id: "mn_s2_15",
        topic: "signs",
        question: "You see an orange triangle with a red border on the back of a farm tractor. What does it mean?",
        choices: [
          "The vehicle is carrying hazardous materials",
          "The vehicle travels at 30 mph or less",
          "The vehicle is wider than one lane",
          "The vehicle is exempt from stopping at railroad crossings",
        ],
        correctIndex: 1,
        explanation:
          "That is the slow-moving vehicle emblem, required on anything that travels at 30 mph or less on a public road, such as farm implements and horse-drawn vehicles. Adjust your speed or prepare to change lanes.",
        context:
          "Minnesota's rural roads carry plenty of slow traffic, and the manual pairs the emblem with the animal-drawn vehicle warning sign. Animal-drawn vehicles must show a light visible within 500 feet from sunset to sunrise or in poor visibility. When you do pass a slow vehicle, the ordinary passing rules apply: dashed yellow line, 700 feet of clear view, and back on your side 100 feet before oncoming traffic.",
        trap:
          "The emblem is about speed, not size or cargo. A learner who reads it as a hazmat placard has the wrong sign family entirely.",
        excerptKey: "smv-emblem",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Warning signs",
        sourceUrl: pg(64),
      },
      {
        id: "mn_s2_16",
        topic: "licensing",
        question: "Who may supervise a permit holder who is under 18 in Minnesota?",
        choices: [
          "Any licensed driver 18 or older",
          "Any licensed driver 21 or older",
          "Only a parent or legal guardian",
          "Any licensed driver 25 or older",
        ],
        correctIndex: 1,
        explanation:
          "Under 18, your supervising driver must be at least 21 and licensed, sitting in the front passenger seat. Permit holders aged 18 and up need only a licensed supervisor aged 18 or older.",
        context:
          "The three ages in Minnesota's GDL rules are easy to jumble. Supervisor for a teen permit holder: 21. Supervisor for an adult permit holder: 18. The licensed adult who lets a provisional driver drive between midnight and 5 a.m. in the first six months: 25. Everyone in a permit holder's car must be belted, and the teen may not use a phone at all, hands-free included.",
        trap:
          "Twenty-five is the nighttime exception age for provisional drivers, not the permit supervisor age. Twenty-one is the answer here.",
        excerptKey: "permit-under-18-supervisor",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: If you are under 18",
        sourceUrl: pg(16),
      },
      {
        id: "mn_s2_17",
        topic: "sharing",
        question: "A school bus ahead is showing flashing yellow lights, not red. What do the yellow lights mean?",
        choices: [
          "The bus is about to stop to load or unload; slow down and prepare to stop",
          "The bus is turning; pass it on the right",
          "The bus is empty and you may pass freely",
          "The bus is broken down on the shoulder",
        ],
        correctIndex: 0,
        explanation:
          "Yellow is the warning before red. The driver activates the yellows at least 100 feet before stopping where the limit is 35 mph or less, and at least 300 feet before stopping where it is higher.",
        context:
          "Once the reds come on you stop 20 feet back and stay until they go off, from either direction on an undivided road. Passing a school bus on its right side while it shows red or yellow lights is illegal. The only exception to stopping is a divided roadway when the bus is on the other side of the divider.",
        trap:
          "Yellow lights are not a green light to get past before the reds. Passing on the right of a bus showing yellow is itself a violation.",
        excerptKey: "bus-yellow-lights",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Flashing yellow lights",
        sourceUrl: pg(44),
      },
      {
        id: "mn_s2_18",
        topic: "safety",
        question: "A child is 18 months old. How must they ride in a car in Minnesota?",
        choices: [
          "In a forward-facing car seat",
          "In a booster seat with the lap belt",
          "In a rear-facing car seat until they reach its height or weight limit",
          "On a parent's lap in the back seat",
        ],
        correctIndex: 2,
        explanation:
          "Under 2, children ride rear-facing until they outgrow the seat's limits. Once they turn 2 they stay rear-facing as long as they are still under both the height and weight limits.",
        context:
          "The Minnesota ladder is rear-facing under 2, forward-facing car seat after outgrowing rear-facing, booster from about 4 to 9 once the car seat is outgrown, and a seat belt alone from 9 or when the booster is outgrown. Children under 13 ride in the back seat when one is available. Car seats expire six years from manufacture and must never be reused after a crash.",
        trap:
          "Turning a child forward at age 1 was the old advice. Minnesota's law is under 2 rear-facing, and longer if the seat still fits.",
        excerptKey: "rear-facing-under-2",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Infant and child safety seat laws",
        sourceUrl: pg(41),
      },
      {
        id: "mn_s2_19",
        topic: "rules",
        question: "When may you pass another vehicle on its right in Minnesota?",
        choices: [
          "Whenever the shoulder is paved and clear",
          "When the vehicle ahead is making or about to make a left turn, and it is safe",
          "Never; passing on the right is always illegal",
          "Only when the vehicle ahead waves you through",
        ],
        correctIndex: 1,
        explanation:
          "Passing on the right is allowed when the vehicle ahead is turning left, on roads wide enough for two or more lanes each way, and on one-way streets with room for two lanes. It is never allowed on the shoulder, in a bike lane or off the pavement.",
        context:
          "The general rule is pass on the left. The right-side exceptions all assume a lane of pavement to do it in. The manual separately warns you not to pass a truck on its right if there is any chance it will turn right, because large vehicles swing wide and leave a gap that looks like an invitation.",
        trap:
          "A wide paved shoulder looks like a lane. Minnesota says it is not one for passing purposes.",
        excerptKey: "passing-on-right",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Passing on the right",
        sourceUrl: pg(37),
      },
      {
        id: "mn_s2_20",
        topic: "signals",
        question: "What does a solid white line between two lanes going the same direction tell you?",
        choices: [
          "You must not cross it under any circumstances",
          "You should not change lanes there",
          "The lanes carry traffic in opposite directions",
          "The lane is reserved for buses",
        ],
        correctIndex: 1,
        explanation:
          "A single solid white line discourages lane changes; a double solid white line prohibits them. White is the color for same-direction traffic, so the opposite-direction answer is wrong.",
        context:
          "The white family in Minnesota runs: dashes mean you may change lanes, shorter and thicker dashes mean the lane is ending, a solid line means you should not change lanes, and double solid means you must not. Solid white also paints crosswalks, stop lines, parking stalls and the road edge. A solid white line with a bicycle symbol marks a lane for bicycles only.",
        trap:
          "Single solid white is should not; double solid white is must not. The test may ask for either, so keep the two apart.",
        excerptKey: "solid-white-lines",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: White lines",
        sourceUrl: pg(72),
      },
      {
        id: "mn_s2_21",
        topic: "parking",
        question: "It is illegal to stop or park on an interstate freeway except in a genuine emergency. Which of these does the manual say is NOT an emergency?",
        choices: [
          "A flat tire",
          "Running out of fuel",
          "A medical episode",
          "Engine fire",
        ],
        correctIndex: 1,
        explanation:
          "Running out of gas is not an emergency in Minnesota's eyes and can earn you a citation. Mechanical failures and medical situations are different.",
        context:
          "If you must stop on a freeway, get onto the shoulder as far from traffic as possible, raise the hood or tie a white cloth to the antenna or door handle, switch on the hazard lights, and place flares or reflectors 100 to 500 feet behind the car on the right edge of the road. Stay with the vehicle; walking on the traveled part of a freeway is illegal and dangerous.",
        trap:
          "The empty tank feels like an emergency to the driver. The manual singles it out precisely because drivers assume it counts.",
        excerptKey: "freeway-stopping-illegal",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Stopping, parking and backing up",
        sourceUrl: pg(80),
      },
      {
        id: "mn_s2_22",
        topic: "impairment",
        question: "A Minnesota driver refuses to take a breath, blood or urine test after a lawful DWI arrest. What does the manual say follows?",
        choices: [
          "Nothing, because refusing is a constitutional right",
          "A fine only",
          "Revocation of driving privileges for one to six years, and the refusal is itself a crime",
          "A 24-hour hold and release",
        ],
        correctIndex: 2,
        explanation:
          "Under implied consent, refusing the evidentiary test is a crime and brings a revocation of one to six years depending on prior offenses. The roadside preliminary breath test is separate and has limited use in court.",
        context:
          "The chain is: an officer with probable cause may ask for a roadside preliminary screening test; if you are arrested, refuse the roadside test, fail it, or are in an alcohol-related crash, you must give a blood, breath or urine sample. Refusing the pre-arrest breath test is listed among the factors that make penalties more severe, and a refusal also brings a seven-day temporary license followed by revocation.",
        trap:
          "Refusing sounds like it denies the state evidence. In Minnesota it is charged as its own offense and the license consequence is longer than a first-offense DWI.",
        excerptKey: "implied-consent",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Implied consent/search warrant law",
        sourceUrl: pg(96),
        commonlyMissed: true,
      },
      {
        id: "mn_s2_23",
        topic: "sharing",
        question: "A motorcycle is riding between your lane and the next one in slow-moving traffic. What does Minnesota law say about this?",
        choices: [
          "It is illegal and you may block the motorcycle to stop it",
          "It is legal lane splitting and you must not interfere with the rider",
          "It is legal only on freeways",
          "It is legal only when the motorcycle is under 10 mph",
        ],
        correctIndex: 1,
        explanation:
          "Minnesota now allows motorcycles to lane split in moving traffic and to filter through stopped traffic, and the manual puts it on page one of its new laws. You may not get in the rider's way or try to stop them.",
        context:
          "Lane splitting is allowed when two or more lanes run the same direction and traffic is moving, at no more than 25 mph and no more than 15 mph over the speed of surrounding traffic. Lane filtering is the same thing through stopped traffic, again within 15 mph of the traffic speed. Motorcycles may also use HOV lanes, and drivers are told never to share a lane alongside a motorcycle.",
        trap:
          "Most states ban lane splitting and older Minnesota drivers still believe it is illegal here. Since the law changed, obstructing a splitting rider is the violation.",
        excerptKey: "lane-splitting-legal",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Sharing the road with motorcyclists",
        sourceUrl: pg(52),
        commonlyMissed: true,
      },
      {
        id: "mn_s2_24",
        topic: "speed",
        question: "You are caught driving 104 mph on a Minnesota highway. Beyond the fine, what happens to your license?",
        choices: [
          "Nothing, unless you have prior tickets",
          "A 30-day suspension",
          "Revocation for at least six months",
          "Four points and a warning letter",
        ],
        correctIndex: 2,
        explanation:
          "Driving over 100 mph brings a revocation of at least six months. The manual lists it among the grounds for revocation, and the statute names the six-month minimum.",
        context:
          "Minnesota's speed penalties stack. Twenty mph or more over the limit adds a surcharge equal to the fine. Failing to slow for a stopped emergency vehicle adds at least $25. Speeding in a work zone adds $300. And a reading over 100 mph moves the case out of fines altogether and into a license revocation. Minnesota does not use a points system.",
        trap:
          "Learners look for a points answer. Minnesota has no points; the consequences are suspensions and revocations tied to specific offenses.",
        excerptKey: "speed-100-revoked",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Speed limits and fines",
        sourceUrl: pg(30),
      },
      {
        id: "mn_s2_25",
        topic: "rightOfWay",
        question: "You are driving on a road where a T intersection has no signs or signals, and you are on the road that ends. Who yields?",
        choices: [
          "You yield to all cross traffic before turning",
          "Cross traffic yields to you because you are turning",
          "Whoever arrives first goes",
          "The driver on the right, as at a four-way stop",
        ],
        correctIndex: 0,
        explanation:
          "At an uncontrolled T, the driver turning off the road that ends yields to everything on the through road. The right-hand rule does not apply because the through road has priority.",
        context:
          "The T-intersection warning sign says the same thing: your road will end, prepare to turn, yield to cross traffic. The manual's right-of-way list also covers driveways (stop and yield to pedestrians and traffic), transit buses merging from a stop (yield if you are in the right lane), funeral processions (yield to the whole procession), and green arrows (yield to anyone already in the intersection).",
        trap:
          "The right-hand rule is for simultaneous arrivals at crossroads and all-way stops. At a T, the ending road yields regardless of who is on whose right.",
        excerptKey: "row-t-intersection",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Right of way and yielding",
        sourceUrl: pg(46),
      },
      {
        id: "mn_s2_26",
        topic: "emergencies",
        question: "Your brake pedal suddenly sinks to the floor while you are driving. After pumping it fails, what does the manual say to do?",
        choices: [
          "Switch off the engine to slow the car",
          "Slowly apply the emergency/parking brake and downshift to a lower gear",
          "Yank the parking brake up hard",
          "Steer into a ditch immediately",
        ],
        correctIndex: 1,
        explanation:
          "Pump first, then apply the parking brake gradually, because a sudden yank can put the car into a skid. Downshifting adds engine braking while you look for a safe place to pull off.",
        context:
          "The manual notes that the parking brake works only on the rear wheels, which is why it must be applied slowly. Other emergencies get the same calm approach: a stuck accelerator is freed with your toe or defeated by braking and shifting to neutral; a blowout is handled by holding the wheel, easing off the gas and not braking until you have control; steering failure means easing off the accelerator and braking only if you must.",
        trap:
          "The parking brake is the answer, but the manner matters. The manual's word is slowly.",
        excerptKey: "brake-failure",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Brake failure",
        sourceUrl: pg(87),
      },
      {
        id: "mn_s2_27",
        topic: "signs",
        question: "What does a sign reading WRONG WAY tell you?",
        choices: [
          "The road ahead is closed",
          "You have entered a lane of oncoming traffic and are traveling in the wrong direction",
          "You have missed a required turn",
          "A detour begins here",
        ],
        correctIndex: 1,
        explanation:
          "WRONG WAY means you are pointed into oncoming traffic, usually because you entered a ramp or one-way street backward. Its companion, DO NOT ENTER, faces you at the mouth of the road to stop that happening.",
        context:
          "Both are red-and-white regulatory signs. The manual notes that diverging diamond interchanges are designed so that wrong-way ramp entry is extremely difficult, but on ordinary one-way streets the signs are the only barrier. A Two-way Traffic Ahead sign marks the opposite transition: you are leaving a one-way road and must keep right.",
        trap:
          "WRONG WAY is not a suggestion to turn around; it is telling you a head-on crash is possible. Get out of the lane safely and immediately.",
        excerptKey: "wrong-way-sign",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Regulatory signs",
        sourceUrl: pg(60),
      },
      {
        id: "mn_s2_28",
        topic: "safety",
        question: "In heavy rain, at roughly what speed does the manual say a standard car may begin to hydroplane?",
        choices: ["20 mph", "35 mph", "50 mph", "65 mph"],
        correctIndex: 1,
        explanation:
          "Around 35 mph in heavy rain. Below that, tires can usually wipe the water away; above it, water builds under the tread and the tire lifts off the road.",
        context:
          "When a tire hydroplanes it loses all contact, so braking, accelerating and steering all stop working. The manual's response is simple: take your foot off the gas and let the car slow until the tires reconnect. Deep tread reduces the risk, but hydroplaning can happen at any speed if the water is deeper than the tread. In rain, snow, sleet or hail your headlights must be on low beam.",
        trap:
          "The 35 mph figure also appears as the NEV street limit and the school bus yellow-light threshold. Read each question for which 35 it wants.",
        excerptKey: "hydroplaning-35",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Hydroplaning",
        sourceUrl: pg(86),
      },
      {
        id: "mn_s2_29",
        topic: "licensing",
        question: "You move to Minnesota with a valid license from another state. How long do you have to get a Minnesota license?",
        choices: ["30 days", "60 days", "90 days", "One year"],
        correctIndex: 1,
        explanation:
          "Sixty days from becoming a resident, or 30 for commercial drivers. The same 60-day clock applies to registering your vehicle.",
        context:
          "A new resident aged 21 or older with a valid out-of-state license takes only the vision test; the written test is required if that license expired less than a year ago, and both written and road tests if it expired more than a year ago. Drivers from countries other than the U.S. and Canada take all three tests. You must hand over your other licenses and ID cards before Minnesota issues its own.",
        trap:
          "Thirty days is the commercial-driver deadline. Ordinary drivers get 60.",
        excerptKey: "new-resident-60-days",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Getting your license to drive",
        sourceUrl: pg(9),
      },
      {
        id: "mn_s2_30",
        topic: "rules",
        question: "A lane is closing ahead in a work zone and traffic is backed up. What does Minnesota's manual tell you to do?",
        choices: [
          "Merge as early as possible to be polite",
          "Stay in your lane to the merge point, then take turns merging",
          "Use the shoulder to get ahead of the queue",
          "Stop and wait for a gap before the lane ends",
        ],
        correctIndex: 1,
        explanation:
          "Minnesota teaches the zipper merge: use both lanes to the merge point and alternate. Early merging lengthens the backup, causes more crashes and provokes road rage, according to the manual.",
        context:
          "The state credits the zipper merge with cutting backups by up to 40 percent and reducing speed differences between lanes. Work zones also carry a $300 fine on top of the regular speeding ticket, a duty to obey flaggers, and, under the statute, a 45 mph limit on roads normally posted at 50 or more when a lane is closed and workers are present.",
        trap:
          "Merging early feels courteous and is what many learners were taught elsewhere. In Minnesota the manual calls it the wrong mindset.",
        excerptKey: "zipper-merge",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Zipper merge procedure",
        sourceUrl: pg(57),
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Exam-level questions drawn from every chapter of the Minnesota Driver's Manual: the DWI ladder, the exact headlight and passing distances, freeway rules, trailers, winter survival and the signals section that catches people who only studied signs.",
    questions: [
      {
        id: "mn_s3_01",
        topic: "signals",
        question: "A traffic signal is completely dark because of a power failure. How do you treat the intersection?",
        choices: [
          "As if the light were green for the busier road",
          "As an uncontrolled intersection, yielding to the driver on the right",
          "As an all-way stop",
          "Wait for a police officer to direct traffic",
        ],
        correctIndex: 1,
        explanation:
          "Minnesota's manual says a non-functioning signal is treated like an uncontrolled intersection. That means slow down, and if you arrive with another driver at the same time, the driver on the left yields to the one on the right.",
        context:
          "Several states treat a dark signal as a four-way stop; Minnesota does not say that, and the distinction is exactly the kind of thing the test probes. A flashing red is the all-way-stop case. If an officer is directing traffic, hand signals override every light, sign and marking.",
        trap:
          "The four-way-stop answer is correct in some other states and wrong here. Minnesota's word is uncontrolled.",
        excerptKey: "signal-not-working",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Traffic-control signals",
        sourceUrl: pg(68),
        commonlyMissed: true,
      },
      {
        id: "mn_s3_02",
        topic: "impairment",
        question: "A first-offense DWI in Minnesota carries what minimum license revocation if the driver does not plead guilty?",
        choices: ["30 days", "60 days", "90 days", "One year"],
        correctIndex: 2,
        explanation:
          "Ninety days is the minimum, reduced to 30 days on a guilty plea. Criminal penalties of up to 90 days in jail, a $1,000 fine or both sit on top of the license action.",
        context:
          "The ladder climbs quickly. A second offense within 10 years means at least a one-year revocation, a year in jail or $3,000, and impounded plates. A third within 10 years means at least three years, a canceled license, a chemical use assessment and mandatory ignition interlock. A fourth in 10 years is a felony with up to seven years in prison and a $14,000 fine. Every alcohol revocation also carries a $680 reinstatement fee.",
        trap:
          "Thirty days is the guilty-plea figure. Read whether the question specifies a plea before answering.",
        excerptKey: "dwi-first-offense",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Penalties",
        sourceUrl: pg(97),
      },
      {
        id: "mn_s3_03",
        topic: "rules",
        question: "You are passing a car on a two-lane road and see a vehicle coming toward you. By what point must you be back in your lane?",
        choices: [
          "Before the oncoming vehicle is within 100 feet",
          "Before the oncoming vehicle is within 200 feet",
          "Before the oncoming vehicle is within 500 feet",
          "Any time before the vehicles would meet",
        ],
        correctIndex: 0,
        explanation:
          "Minnesota requires you to return to the right side before coming within 100 feet of an oncoming vehicle. The same figure appears in the commercial-vehicle section, where the pass takes three to five seconds longer.",
        context:
          "The passing sequence in the manual: check for a safe gap and for anyone about to pass you, signal left, move out, pass without exceeding the limit (except the +10 rule on 55-plus two-lane roads), signal right, and return once the whole vehicle you passed shows in your mirror. Do not pass within 100 feet of an intersection, tunnel, underpass or rail crossing, or where you cannot see 700 feet ahead.",
        trap:
          "Any time before you meet is not the rule. One hundred feet at highway closing speeds is about a second, and the manual treats it as the absolute last moment.",
        excerptKey: "passing-return-100",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Passing",
        sourceUrl: pg(37),
      },
      {
        id: "mn_s3_04",
        topic: "sharing",
        question: "You are on a divided highway and a school bus on the other side of the median stops with its red lights flashing. What must you do?",
        choices: [
          "Stop at least 20 feet from the bus",
          "Slow to 10 mph while passing",
          "Nothing; you are not required to stop for a bus on the opposite side of a divided roadway",
          "Stop until the bus moves",
        ],
        correctIndex: 2,
        explanation:
          "The divided-roadway exception is Minnesota's only release from the school bus stop. When the bus is on the far side of the divider you may continue.",
        context:
          "On any undivided road, including a multilane one, every direction stops 20 feet from the bus and stays stopped until the red lights go off. Failing to stop is a misdemeanor with a fine of at least $500 and loss of driving privileges, and the vehicle's owner is guilty of a petty misdemeanor unless they can show someone else was driving. An officer may arrest for the offense up to four hours after it happens.",
        trap:
          "A center turn lane or a painted median is not a divider. The exception needs a true divided roadway with the bus on the other side.",
        excerptKey: "bus-divided-roadway",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Passing a school bus",
        sourceUrl: pg(45),
        commonlyMissed: true,
      },
      {
        id: "mn_s3_05",
        topic: "safety",
        question: "You are towing a camper trailer on a Minnesota highway. What minimum following distance does the manual require behind other vehicles?",
        choices: ["Three seconds", "200 feet", "300 feet", "500 feet"],
        correctIndex: 3,
        explanation:
          "A vehicle pulling a camper or trailer must stay at least 500 feet behind other vehicles. Trailers add weight the tow vehicle's brakes were not designed for, and the manual warns that a sudden stop can flip both.",
        context:
          "Minnesota's trailer rules include a 45-foot maximum length, 8 feet 6 inches width, 13 feet 6 inches height, brakes on any trailer of 3,000 pounds or more, a permanently attached safety chain, and 10 to 15 percent of the trailer's weight on the hitch. A recreational vehicle combination may not exceed 70 feet, needs a driver of at least 18, and is banned from the Twin Cities metro on weekdays from 6 to 9 a.m. and 4 to 7 p.m.",
        trap:
          "Five hundred feet also appears as the firefighting-vehicle distance and the stranded-flare distance. The trailer rule uses the same number, which makes it easy to second-guess.",
        excerptKey: "trailer-500-feet",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Campers and trailers",
        sourceUrl: pg(82),
      },
      {
        id: "mn_s3_06",
        topic: "signs",
        question: "A yellow diamond sign shows two lanes narrowing to one with the right lane ending. Who yields?",
        choices: [
          "Vehicles in the left lane yield to merging traffic",
          "Vehicles in the right lane must merge left and yield",
          "Both lanes stop and alternate",
          "The faster vehicle goes first",
        ],
        correctIndex: 1,
        explanation:
          "The Lane Ends sign tells right-lane drivers to merge into the left lane, and they yield to the traffic already there. An Added Lane sign is the opposite: a new lane appears and nobody has to merge.",
        context:
          "Yellow warning signs give you time to act. Merging Traffic warns that vehicles will enter from the side, Low Clearance Ahead gives a height you must not exceed, Narrow Bridge warns the bridge is narrower than the road, and Slippery Road (often near bridges and overpasses) means the surface is slick when wet. In a work zone with a backed-up queue, the zipper merge replaces early merging.",
        trap:
          "The zipper merge does not change who yields. Drivers take turns, but the ending lane still merges into the continuing lane rather than the other way around.",
        excerptKey: "lane-ends-sign",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Warning signs",
        sourceUrl: pg(66),
      },
      {
        id: "mn_s3_07",
        topic: "licensing",
        question: "To take the road test for a provisional license, how many hours of supervised driving must a teen log if the parent has NOT taken the optional parent class?",
        choices: ["30 hours, including 10 at night", "40 hours, including 15 at night", "50 hours, including 15 at night", "60 hours, including 20 at night"],
        correctIndex: 2,
        explanation:
          "Fifty hours including 15 at night without the parent class, or 40 hours including 15 at night if a parent completes a class through an approved driver education program. Either way the log is signed by a parent or guardian and handed to the examiner.",
        context:
          "The provisional license also requires being at least 16, finishing both phases of driver education, holding the permit six months with no moving, alcohol or controlled-substance convictions, passing the road test and having a parent or guardian approve the application. The under-21 license later requires a further 10 hours of supervised driving certified for drivers under 18.",
        trap:
          "Forty hours is the parent-class figure. Without the class the number is 50, and both versions require 15 night hours.",
        excerptKey: "supervised-log-50",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Your provisional license",
        sourceUrl: pg(17),
        commonlyMissed: true,
      },
      {
        id: "mn_s3_08",
        topic: "parking",
        question: "You parallel park on a Minnesota street. How far may your roadside wheels be from the curb?",
        choices: ["No more than 6 inches", "No more than 12 inches", "No more than 18 inches", "No more than 24 inches"],
        correctIndex: 1,
        explanation:
          "Twelve inches is the maximum. Then you turn the wheels toward the curb, put the car in park and set the parking brake so it cannot roll into traffic.",
        context:
          "The manual's parallel parking sequence starts by stopping level with the car ahead about a foot and a half away, turning the wheel sharply right and backing slowly, cutting left once clear of the car ahead, then straightening toward the curb in the center of the space. Before opening any door you check for traffic, cyclists and pedestrians, and you never leave a traffic-side door open longer than needed.",
        trap:
          "Eighteen inches is the starting gap from the car ahead in the manual's parking diagram, not the finished distance from the curb.",
        excerptKey: "parallel-12-inches",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Parking",
        sourceUrl: pg(38),
      },
      {
        id: "mn_s3_09",
        topic: "rightOfWay",
        question: "You are in the right lane behind a Metro Transit bus that is signaling left to pull out of a bus stop. What does Minnesota require?",
        choices: [
          "Nothing; buses yield to all traffic when leaving a stop",
          "Yield to the bus and let it merge into your lane",
          "Pass the bus on the right shoulder",
          "Sound your horn so the bus waits",
        ],
        correctIndex: 1,
        explanation:
          "Drivers in the right lane must yield to transit and Metro Mobility buses merging from a stop or a shoulder. The same courtesy is owed to a school bus signaling left to rejoin the lane after loading.",
        context:
          "Minnesota also lets transit buses use freeway shoulders when main-line traffic is under 35 mph, at no more than 15 mph above traffic speed and never over 35, and the bus yields to entering and exiting traffic while it is there. The right-of-way list in the manual is where these bus rules live, alongside funeral processions and pedestrians.",
        trap:
          "The general rule that a merging vehicle yields is reversed here by statute. The car yields to the bus.",
        excerptKey: "row-transit-bus",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Right of way and yielding",
        sourceUrl: pg(46),
      },
      {
        id: "mn_s3_10",
        topic: "safety",
        question: "You are following a car at night at a distance of 150 feet. What must your headlights be doing?",
        choices: [
          "High beam, since you are more than 100 feet back",
          "Low beam, since you are within 200 feet of the vehicle ahead",
          "Either, as long as they are on",
          "Parking lights only",
        ],
        correctIndex: 1,
        explanation:
          "Within 200 feet of a vehicle ahead you dim to low beam. The reflection in their mirrors is the problem, and the manual notes trucks' large side mirrors make it worse.",
        context:
          "The pair of dimming distances is 1,000 feet for oncoming traffic and 200 feet when following. High beams should reveal the road 350 feet ahead, and you should never drive faster than lets you stop within the lit distance. If glare from behind is a problem, the manual suggests a day-night mirror; for oncoming glare, look at the white edge line.",
        trap:
          "Learners who remember 1,000 feet apply it to both cases. Following gets the shorter figure, 200 feet.",
        excerptKey: "low-beam-distances",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Headlights",
        sourceUrl: pg(76),
      },
      {
        id: "mn_s3_11",
        topic: "rules",
        question: "A police officer at an intersection waves you through even though the light facing you is red. What do you do?",
        choices: [
          "Wait for the green; the light takes priority",
          "Proceed as the officer directs",
          "Stop, then proceed only after the light turns green",
          "Honk to confirm and then proceed",
        ],
        correctIndex: 1,
        explanation:
          "An officer's hand signals override signals, signs and pavement markings. You follow the officer, and this is one of the questions on DVS's own practice test.",
        context:
          "The manual describes the standard signals: a raised palm and a long whistle blast means stop; a beckoning motion with short blasts means go. Officers may use a flashlight in low light. Failing to follow a lawful order from an officer is illegal and can lead to arrest, and fleeing an officer in a vehicle is a felony carrying up to three years and a day in prison and a $5,000 fine.",
        trap:
          "Waiting for the green feels safest but is wrong. When an officer is directing, the light is not in charge.",
        excerptKey: "traffic-officer-overrides",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Traffic officers",
        sourceUrl: pg(74),
      },
      {
        id: "mn_s3_12",
        topic: "emergencies",
        question: "You are stranded in your car in a Minnesota blizzard. How does the manual say to run the engine?",
        choices: [
          "Continuously, with the heater on high",
          "About 10 minutes each hour, with a window cracked and the exhaust pipe clear of snow",
          "Never; engine exhaust is too dangerous",
          "Only when another person is awake to watch the gauges",
        ],
        correctIndex: 1,
        explanation:
          "Ten minutes an hour warms the car and keeps the battery charged while conserving fuel. A partly open window and a clear tailpipe guard against carbon monoxide, which is odorless and deadly.",
        context:
          "The manual's stranded checklist: stay with the car, switch on hazard lights, tie a red flag to the antenna, bring survival supplies in from the trunk, keep one person awake, and set out flares if you can. Most deaths in these situations happen to people who leave the vehicle. The recommended winter kit includes a shovel, sand, blankets, food and water, jumper cables, candles and matches, and a first aid kit.",
        trap:
          "Running the engine continuously is the instinct when it is 20 below. Fuel and carbon monoxide are both reasons the manual says not to.",
        excerptKey: "stranded-engine",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: What to do if you become stranded",
        sourceUrl: pg(85),
      },
      {
        id: "mn_s3_13",
        topic: "speed",
        question: "You are 25 mph over the posted limit on a Minnesota highway. What does the law add to the ordinary speeding fine?",
        choices: [
          "Nothing extra below 30 over",
          "A surcharge equal to the fine, and not less than $25",
          "An automatic 90-day suspension",
          "A $300 work-zone penalty",
        ],
        correctIndex: 1,
        explanation:
          "Twenty mph or more over the limit doubles the cost: a surcharge equal to the fine itself, with a $25 floor. The manual says only that additional fines apply; the statute gives the amount.",
        context:
          "The same doubling applies to failing to slow for a stopped emergency vehicle. Work zone speeding is a flat $300 on top of the ticket. Over 100 mph the penalty becomes a six-month revocation. Underneath all of it is the basic speed law, which can make any speed unlawful when conditions demand less.",
        trap:
          "The $300 figure belongs to work zones. For a plain 20-over ticket the extra is a surcharge matching the fine.",
        excerptKey: "speed-100-revoked",
        sourceLabel: "Minnesota Statutes 169.14, subd. 2(d)",
        sourceUrl: STAT("169.14"),
      },
      {
        id: "mn_s3_14",
        topic: "signals",
        question: "You approach an intersection with a flashing yellow arrow for left turns. What does it permit?",
        choices: [
          "A protected left turn with no need to yield",
          "A left turn after yielding to oncoming vehicles and pedestrians",
          "No left turn until the arrow turns solid green",
          "A left turn only after coming to a complete stop",
        ],
        correctIndex: 1,
        explanation:
          "Flashing yellow means proceed with caution. Turning left or making a U-turn, you yield to oncoming vehicles close enough to be a hazard and to pedestrians already in the intersection.",
        context:
          "The arrow family in Minnesota: a green arrow is a protected turn (yield only to anyone already in the intersection), a steady yellow arrow means the arrow is about to end, a flashing yellow arrow is an unprotected turn you may make when it is safe, and a red arrow means stop and wait for the arrow to turn green. Only the green arrow removes the duty to yield to oncoming traffic.",
        trap:
          "A flashing yellow arrow is not a stop. It is also not protection. It is a yield, exactly like turning left on a plain green ball.",
        excerptKey: "flashing-yellow",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Traffic-control signals",
        sourceUrl: pg(70),
        commonlyMissed: true,
      },
      {
        id: "mn_s3_15",
        topic: "sharing",
        question: "A truck ahead of you is signaling right but has swung toward the left side of its lane. What should you do?",
        choices: [
          "Pass it on the right through the gap it left",
          "Stay back; the truck needs the space to make a wide right turn",
          "Honk to remind the driver of the signal",
          "Pass on the left before it turns",
        ],
        correctIndex: 1,
        explanation:
          "Long vehicles swing wide to the left before a right turn because their rear wheels track inside the front ones. The gap on the right is where the trailer is about to go, so the manual says never pass on the right when a truck might turn.",
        context:
          "Minnesota's commercial vehicle section also covers no-zones (20 feet ahead, both sides, 200 feet behind), stopping distance (a loaded tractor-trailer may need over 400 feet at 55 mph, versus 130 to 140 feet for a car), and the advice to drop back and dim your lights behind a truck at night. When a truck passes you, keep to the far side of your lane and ease off slightly.",
        trap:
          "The gap looks like an invitation and it is the single most dangerous place to be. Trucks cannot see it and cannot stop their trailer from sweeping it.",
        excerptKey: "truck-wide-turns",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Commercial vehicles and wide turns",
        sourceUrl: pg(55),
      },
      {
        id: "mn_s3_16",
        topic: "licensing",
        question: "A 17-year-old with a provisional license is convicted of a crash-related moving violation. Under Vanessa's Law, when can they regain a license?",
        choices: [
          "Immediately after paying the fine",
          "After 30 days",
          "At age 18 or when the withdrawal period ends, whichever is longer",
          "Never in Minnesota",
        ],
        correctIndex: 2,
        explanation:
          "Vanessa's Law keeps a provisional driver off the road until 18 or until the withdrawal period ends, whichever is later. Reinstatement then means the written test, a $680 fee, a 30-hour classroom course, a new permit held 90 days, and six hours of behind-the-wheel instruction.",
        context:
          "The law is named for a 15-year-old passenger killed in 2003 in a car driven by an unlicensed teen. For an unlicensed teen who commits an impaired-driving crime or crash-related moving violation, no license, permit or provisional license is possible until 18, followed by the written test, a new permit, and the usual six-month (or three-month at 19) holding period.",
        trap:
          "The withdrawal period can run past 18. The rule is whichever is longer, so 18 is a floor, not a promise.",
        excerptKey: "vanessas-law-unlicensed",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Vanessa's Law",
        sourceUrl: pg(18),
      },
      {
        id: "mn_s3_17",
        topic: "impairment",
        question: "Which of these is listed in Minnesota's manual as making DWI penalties more severe?",
        choices: [
          "Driving a rental car",
          "Having a child under 16 in the vehicle at the time of the stop",
          "Being over 65",
          "Refusing to sign the citation",
        ],
        correctIndex: 1,
        explanation:
          "A child under 16 in the car is an aggravating factor, along with prior DWI arrests, an alcohol concentration of 0.16 or above, being under 21, and refusing the pre-arrest breath test.",
        context:
          "The 0.16 threshold shows up again in the interlock rules: a first offender at 0.16 or above cannot get a work permit and can regain privileges only through the Ignition Interlock program. The device refuses to start the car at 0.02 or above. A driver found at 0.08 or who refuses testing gets a seven-day temporary license, after which the revocation begins.",
        trap:
          "Learners guess that the child passenger factor uses the same under-13 age as the back-seat rule. For DWI the manual's age is under 16.",
        excerptKey: "dwi-aggravating",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Penalties",
        sourceUrl: pg(97),
      },
      {
        id: "mn_s3_18",
        topic: "rules",
        question: "You are driving in the left lane of a four-lane highway and a faster car comes up behind you. What does the manual say?",
        choices: [
          "Hold your lane if you are at the speed limit",
          "Move out of the left lane to let it pass when practical",
          "Speed up to match the car behind",
          "Signal the driver to pass on the right",
        ],
        correctIndex: 1,
        explanation:
          "Minnesota's rule is to drive in the right lane when available and to leave the left lane for others to pass when practical. Being at the limit does not entitle you to camp in the left lane.",
        context:
          "The manual's exceptions to keeping right are passing, preparing for a left turn or a left exit, driving an emergency vehicle, and following an official device, officer or work zone direction. A slow driver on a single-lane road must keep as far right as possible. Passing on the shoulder is aggressive driving in the manual's own description.",
        trap:
          "Speed limit compliance is not a defense for blocking the left lane. The manual asks you to move over.",
        excerptKey: "right-lane-travel",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Right-hand lane travel",
        sourceUrl: pg(36),
      },
      {
        id: "mn_s3_19",
        topic: "signs",
        question: "A DO NOT PASS sign and a NO PASSING ZONE pennant are two different signs. Where is the pennant mounted?",
        choices: [
          "On the right shoulder facing traffic",
          "Overhead on a mast arm",
          "On the left side of a two-way highway at the start of the zone",
          "On the back of slow vehicles",
        ],
        correctIndex: 2,
        explanation:
          "The yellow pennant sits on the left side of the road, where the no-passing zone begins, so you see it in the lane you would otherwise use to pass. The white DO NOT PASS sign is a regulatory sign on the right.",
        context:
          "Both signs pair with the solid yellow line on your side of the center. Minnesota also bans passing on a curve or hill without 700 feet of visibility, within 100 feet of an intersection, tunnel, underpass or railroad crossing, and whenever you are about to meet an oncoming vehicle. Bridges may carry their own No Passing signs.",
        trap:
          "Learners expect every sign on the right. The pennant is the one sign placed on the left, and the test asks about it for that reason.",
        excerptKey: "no-passing-zone-sign",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Warning signs",
        sourceUrl: pg(63),
      },
      {
        id: "mn_s3_20",
        topic: "emergencies",
        question: "Your car crashes into a utility pole and a power line is draped across the hood. What does the manual say to do?",
        choices: [
          "Get out immediately and run clear",
          "Stay in the vehicle and call 911; get out only if the car is on fire",
          "Climb out the window and walk away normally",
          "Move the wire off the car with a dry object",
        ],
        correctIndex: 1,
        explanation:
          "Assume every wire is live. The car's body may be energized, so you stay inside and call 911, leaving only if fire forces you out.",
        context:
          "If you must leave, the manual says jump clear with both feet together and shuffle away without lifting your feet, so you never bridge two points of different voltage. Similar stay-calm scripts cover a sinking car (get out through the windows in the 30 to 60 seconds it floats), a stall on the tracks (leave and walk at 45 degrees away from the tracks toward the train), and an engine fire (pull over, ignition off, get out, no water).",
        trap:
          "Getting away from a crash feels right. With a power line involved, stepping onto the ground while touching the car is the way people are electrocuted.",
        excerptKey: "utility-pole-crash",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Vehicle crash with a utility pole or power box",
        sourceUrl: pg(89),
      },
      {
        id: "mn_s3_21",
        topic: "safety",
        question: "A driver who is 18 or older is stopped at a red light and reads a text message on a phone in their hand. Is this legal in Minnesota?",
        choices: [
          "Yes, because the vehicle is not moving",
          "Yes, as long as the phone is not used to reply",
          "No; reading messages while driving is illegal even when stopped in traffic",
          "Yes, if the light stays red for more than a minute",
        ],
        correctIndex: 2,
        explanation:
          "Minnesota's manual is explicit that texting, emailing and web browsing are illegal while driving, including while stopped in traffic. A red light is still traffic.",
        context:
          "The statute goes further than the manual: while the car is in motion or part of traffic, a driver may not hold a phone in either hand at all. Voice-activated and hands-free use is allowed for calls and messages, as is one-touch navigation, but not video, gaming or reading messages. A second or later offense carries a $275 fine on top of the court's fine.",
        trap:
          "Stopped at a light is not parked. The manual's phrase is while stopped in traffic, which is exactly this situation.",
        excerptKey: "texting-while-stopped",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Illegal driver behaviors in Minnesota",
        sourceUrl: pg(82),
        commonlyMissed: true,
      },
      {
        id: "mn_s3_22",
        topic: "rightOfWay",
        question: "You have a green light and want to go straight, but the intersection ahead is backed up and you would end up stopped inside it. What does the manual say?",
        choices: [
          "Enter on green; the light gives you the right to proceed",
          "Do not enter unless you can clear the intersection completely without blocking cross traffic",
          "Enter and use your hazard lights while waiting",
          "Enter only if the car behind you is honking",
        ],
        correctIndex: 1,
        explanation:
          "Gridlock is a violation in Minnesota. A green light lets you enter only if you can move through immediately, continuously and completely.",
        context:
          "The manual allows three exceptions: when a traffic agent or officer directs you in, when you are moving to let an emergency vehicle pass, and when you are making a turn that lets you leave the intersection safely. On a green you also yield to anyone still in the intersection and, when turning, to pedestrians crossing in front of you.",
        trap:
          "Green means go only when there is somewhere to go. The DVS practice test asks the related question about yielding to vehicles still in the intersection on green.",
        excerptKey: "gridlock",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Intersection gridlock",
        sourceUrl: pg(68),
      },
      {
        id: "mn_s3_23",
        topic: "sharing",
        question: "Which of these vehicles may legally use a Minnesota HOV (carpool) lane?",
        choices: [
          "A single-occupant hybrid car",
          "A motorcycle with one rider",
          "A single-occupant pickup truck",
          "A single-occupant electric car",
        ],
        correctIndex: 1,
        explanation:
          "HOV lanes are for motorcycles, buses and vehicles carrying two or more people. Fuel type does not matter.",
        context:
          "Carpool lanes are marked with a diamond symbol or Carpool Only signs, usually on the far left of a freeway, and the diamond lane sign can also reserve a lane for buses, commercial vehicles or bicycles. The manual's motorcycle section repeats that motorcycles may use HOV lanes.",
        trap:
          "Other states let some low-emission vehicles into HOV lanes solo. Minnesota's manual does not, so the electric-car answer is a plant.",
        excerptKey: "hov-lanes",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: High-occupancy vehicle lanes",
        sourceUrl: pg(78),
      },
      {
        id: "mn_s3_24",
        topic: "rules",
        question: "What is the maximum number of people allowed in the front seat of a vehicle in Minnesota?",
        choices: ["Two", "Three", "Four", "As many as have seat belts"],
        correctIndex: 1,
        explanation:
          "More than three people in the front seat is illegal, because they obstruct the driver's view or interfere with control. The same rule applies to a load packed so high it blocks the view.",
        context:
          "The obstructed-view rules sit with the projecting-load rules: nothing may stick out more than three feet ahead of the front bumper, a load extending four feet or more behind needs a 16-inch red, yellow or orange flag by day and a red lamp visible 500 feet at night, and loads may not extend beyond the left fender line or more than six inches past the right one.",
        trap:
          "Seat belts do not decide the front-seat count. Three is the ceiling regardless of how many belts a bench seat has.",
        excerptKey: "front-seat-three",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Obstructed view",
        sourceUrl: pg(82),
      },
      {
        id: "mn_s3_25",
        topic: "parking",
        question: "You stop on the shoulder of a state highway at night. What lights must be showing on your parked car?",
        choices: [
          "None, so you do not drain the battery",
          "At least one white or amber front light and one red taillight, visible from 500 feet",
          "High-beam headlights",
          "Interior dome light only",
        ],
        correctIndex: 1,
        explanation:
          "A vehicle parked on a highway at night, or whenever lights are needed, must show a front light and a red taillight visible from at least 500 feet. Headlights on a parked car go to low beam, and parking or hazard lights can be used to alert others.",
        context:
          "The manual first tells you to get the vehicle off the main part of the road, and if it cannot move, to mark it with visible signals. On a freeway the emergency-stop routine adds the raised hood or white cloth and flares 100 to 500 feet behind. DVS's own practice test asks the night-stop version of this question and its answer is hazards plus low beams.",
        trap:
          "High beams on a parked car blind approaching drivers. The manual says low beam.",
        excerptKey: "highway-parking-lights",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Highway parking",
        sourceUrl: pg(40),
      },
      {
        id: "mn_s3_26",
        topic: "signals",
        question: "A lane is bordered by a solid yellow line on one side and a dashed yellow line on the other, both on the same side of the road. What is this lane?",
        choices: [
          "A reversible lane",
          "A bicycle lane",
          "A center left-turn lane usable by traffic from either direction",
          "A shoulder where parking is permitted",
        ],
        correctIndex: 2,
        explanation:
          "Parallel solid and dashed yellow lines mark a center turn lane. Drivers from both directions may enter it to make a left turn onto a side road or driveway, and the matching sign says Center Lane Left-turn Only.",
        context:
          "Reversible lanes look different: they are separated by dashed double yellow lines and may be crossed only when the overhead signal shows a green arrow for that lane or a sign permits it. A bicycle lane is a solid white line with a bicycle symbol. The center turn lane is for turning, not for passing or for merging into traffic.",
        trap:
          "Using the center lane as an acceleration lane after turning out of a driveway is a habit the manual does not endorse. It is for left turns only.",
        excerptKey: "center-turn-lane-markings",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Center turn lanes",
        sourceUrl: pg(74),
      },
      {
        id: "mn_s3_27",
        topic: "licensing",
        question: "Which of these may a Class D license holder drive in Minnesota without any endorsement?",
        choices: [
          "A vehicle designed for 20 passengers",
          "A tanker carrying hazardous liquids",
          "A motor home for personal use",
          "A motorcycle",
        ],
        correctIndex: 2,
        explanation:
          "Recreational vehicles for personal use are on the Class D list, as are mopeds, e-bikes, NEVs, autocycles, farm trucks within 150 miles of the farm and single-unit vehicles under 26,001 pounds. Buses over 15 passengers, hazmat and motorcycles need more.",
        context:
          "A Class D driver may tow a trailer of 10,000 pounds or less, or a heavier one if the combination stays at or under 26,000 pounds. Motorcycles need an endorsement, which requires a written test and a road test. Class A, B and C are commercial licenses; a Class C with a hazmat endorsement is what lets a Class D-sized vehicle carry hazardous materials.",
        trap:
          "A motor home looks like it should need something special. In Minnesota a personal-use RV is an ordinary Class D vehicle.",
        excerptKey: "class-d-vehicles",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Class D license",
        sourceUrl: pg(20),
      },
      {
        id: "mn_s3_28",
        topic: "speed",
        question: "Under Minnesota statute, what is the default speed limit on an interstate highway outside an urbanized area of more than 50,000 people, absent a posted sign?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 3,
        explanation:
          "Seventy on rural interstates, 65 on interstates inside larger urban areas and on non-interstate expressways and freeways, and 55 everywhere else not listed. The manual prints only the 55, so this one comes from statute 169.14.",
        context:
          "The posted sign always governs where one exists, and most Minnesota freeways are posted. But the test can ask about the statutory framework, and the manual's own three defaults (10 alley, 30 urban, 55 other) leave the freeway figures to the law. Minimum speed signs on freeways bind you too unless weather makes them unsafe.",
        trap:
          "Fifty-five is the manual's catch-all and looks like the safe answer. For rural interstates the statute says 70.",
        excerptKey: "stat-speed-freeways",
        sourceLabel: "Minnesota Statutes 169.14, subd. 2",
        sourceUrl: STAT("169.14"),
      },
      {
        id: "mn_s3_29",
        topic: "safety",
        question: "You are driving in fog and cannot see more than 300 feet ahead. What does the manual require?",
        choices: [
          "High-beam headlights to reach farther",
          "Low-beam headlights, reduced speed, and pulling off to stop if you cannot see a safe distance ahead",
          "Hazard flashers while moving",
          "Parking lights only, to reduce glare",
        ],
        correctIndex: 1,
        explanation:
          "Under 500 feet of visibility the headlights must be on, and in fog they stay on low beam because high beams reflect back. If you still cannot see a safe distance, the manual says pull off and wait.",
        context:
          "The same section covers rain: slow down, increase following distance to a four- or five-second count, and expect hydroplaning at 35 mph in heavy rain. The DVS practice test asks the fog-and-rain question directly and the answer is low beam. Hazard flashers are for a stopped or disabled vehicle, not for driving in weather.",
        trap:
          "High beams feel like more light. In fog they light up the water droplets in front of you and cut your vision further.",
        excerptKey: "fog-low-beam",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Driving in heavy rain or fog",
        sourceUrl: pg(86),
      },
      {
        id: "mn_s3_30",
        topic: "sharing",
        question: "You approach a stopped snowplow with its lights flashing on a two-lane road. When may you pass it?",
        choices: [
          "As soon as it slows below 20 mph",
          "Only when you can see the entire vehicle and the pass is safe",
          "Never; passing a plow is illegal",
          "Immediately, on the right, before the snow cloud forms",
        ],
        correctIndex: 1,
        explanation:
          "The manual's rule is to pass a plow only when you can see the whole vehicle, and never to crowd one. Plows throw sand, salt and ice and create whiteouts that hide the road.",
        context:
          "Plows flash white, yellow and blue lights; blue is otherwise reserved for emergency vehicles and road maintenance. In residential areas they may back up to turn around, so give them room. Under the Move Over Law, a stopped road maintenance vehicle with warning lights on also gets a lane of clearance where possible and a slow, careful pass where not.",
        trap:
          "Passing on the right of a plow puts you in the discharge from its wing. The manual's answer is patience.",
        excerptKey: "snowplow-passing",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Sharing the road with snowplows",
        sourceUrl: pg(84),
      },
      {
        id: "mn_s3_31",
        topic: "impairment",
        question: "Where may an opened package of a cannabis product legally be kept in a private car on a Minnesota highway?",
        choices: [
          "In the glove compartment",
          "In the center console",
          "In the trunk, or in an area not normally occupied by the driver and passengers if there is no trunk",
          "Anywhere, as long as the driver is not using it",
        ],
        correctIndex: 2,
        explanation:
          "Opened cannabis products follow the open-bottle logic: trunk, or the equivalent in a vehicle without one. The glove and utility compartments are specifically excluded.",
        context:
          "Minnesota bans driving under the influence of cannabis and hemp-derived products, bans using them in a vehicle on a street or highway, and holds an absent owner responsible for open packages left in the car. The alcohol open-container rule is parallel: no drinking and no open alcohol containers inside a vehicle on a public road, and the driver may not let a passenger do it either.",
        trap:
          "The glove compartment is the trap answer because it is closed and out of sight. The law names it as forbidden.",
        excerptKey: "cannabis-storage",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Possession and open package law",
        sourceUrl: pg(99),
      },
      {
        id: "mn_s3_32",
        topic: "emergencies",
        question: "Your right wheels drop off the pavement onto a soft shoulder at speed. What is the manual's advice?",
        choices: [
          "Steer sharply back onto the pavement",
          "Brake hard and steer left",
          "Stay on the shoulder, ease off the gas, and turn back on only after you have slowed",
          "Accelerate to climb back onto the road",
        ],
        correctIndex: 2,
        explanation:
          "Swerving back at speed is how a shoulder drop becomes a rollover or a head-on. Hold the shoulder, slow down gradually, then steer gently back onto the pavement.",
        context:
          "The manual's emergency scripts share one theme: do not overreact. A vehicle coming at you in your lane means move right, never left, and steer off the road to the right if you must. A driver trying to pass you who runs out of room gets your help: slow down if they are nearly past, or speed up to make room behind you if they must drop back.",
        trap:
          "The sharp correction is instinctive and wrong. The pavement edge grabs the tire and throws the car across the road.",
        excerptKey: "running-off-pavement",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Running off the pavement",
        sourceUrl: pg(87),
      },
      {
        id: "mn_s3_33",
        topic: "rules",
        question: "You are approaching a J-turn on a four-lane divided highway from a side road and want to go left. What does the design require?",
        choices: [
          "Cross both directions of traffic directly to the far lanes",
          "Stop, turn right onto the highway, then use the designated left-turn lane to make a U-turn through the median",
          "Wait in the median crossover until both directions are clear",
          "Turn left only when a signal gives you a green arrow",
        ],
        correctIndex: 1,
        explanation:
          "A J-turn removes the left turn across traffic. You stop, turn right, move into the marked left-turn lane, and complete a U-turn at the median opening, yielding to oncoming traffic before rejoining the through lanes.",
        context:
          "Minnesota builds J-turns to cut broadside crashes on rural divided highways, and the manual devotes a page to them. Where a conventional median crossing exists instead, the manual lets you cross one roadway and wait in the middle if there is room, staying right of center while you wait. Diverging diamond interchanges use a similar idea to eliminate left turns across opposing traffic at freeway ramps.",
        trap:
          "The DVS practice test asks whether you may turn left at a reduced conflict intersection. The answer is no; the right-then-U-turn is the only way.",
        excerptKey: "j-turn",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: J-turns",
        sourceUrl: pg(35),
      },
      {
        id: "mn_s3_34",
        topic: "signs",
        question: "What does a blue sign along a Minnesota highway tell you?",
        choices: [
          "A hazard is ahead",
          "Services for motorists, such as gas, food, lodging or hospitals",
          "A regulation you must obey",
          "A historic site",
        ],
        correctIndex: 1,
        explanation:
          "Blue signs describe services: telephones, gas, food, motels, hospitals and rest areas. Green guides and informs, brown marks historic, cultural and recreational sites.",
        context:
          "Minnesota adds one more blue sign to know: the Emergency Notification System sign at every railroad crossing, mounted on the crossing posts or control box, carrying a number to call when a vehicle is stuck on the tracks or something else needs trains stopped. Blue handicapped parking signs mark spaces reserved for disability plates or permits.",
        trap:
          "Blue is also the color of disability parking signs and the rail ENS sign, so a question may pair blue with something other than gas and food. All of them are information, not warnings.",
        excerptKey: "blue-signs-services",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Motorist services signs",
        sourceUrl: pg(68),
      },
      {
        id: "mn_s3_35",
        topic: "rightOfWay",
        question: "A funeral procession with headlights on is crossing an intersection ahead of you on a green light for you. What must you do?",
        choices: [
          "Proceed, because the light is green",
          "Yield to the entire procession, even after the light changes",
          "Yield only to the lead vehicle",
          "Sound the horn and proceed between vehicles",
        ],
        correctIndex: 1,
        explanation:
          "A procession that identifies itself with headlights or hazard lights has the right of way as a unit. You wait for the whole line, not just the first car.",
        context:
          "The procession rule is one item in Minnesota's right-of-way list, alongside pedestrians at marked and unmarked crosswalks, transit buses leaving a stop, drivers entering from a driveway, left turns, green arrows and uncontrolled T intersections. The manual's framing is that right-of-way is something you give, not something you take, and that these violations are a leading cause of crashes.",
        trap:
          "A green light does not break a procession. Cutting into one is both illegal and, in the manual's phrase, a matter of courtesy and common sense.",
        excerptKey: "row-funeral",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Right of way and yielding",
        sourceUrl: pg(46),
      },
    ],
  },
];
