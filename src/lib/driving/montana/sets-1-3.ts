import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Montana Driver Manual, Revised April
// 2024, published by the Montana Department of Justice Motor Vehicle Division,
// plus the sections of Title 61 of the Montana Code Annotated 2025 and the two
// mvdmt.gov licensing pages that carry rules the manual states incompletely,
// states in a form the legislature has since amended, or does not state at all.
//
// Montana's manual is 99 pages and unusually complete on distances - it prints
// the parking table, the headlight distances and the signaling distances that
// most states leave to their statute. Where it falls short, it falls short in
// four specific ways, and every one of them is examinable:
//
// 1. It never states the 25 mph urban district limit. Its speed table covers
//    interstates, urban area highways and two-lane highways only. The default
//    for a town street with nothing posted is 61-8-303(1)(d).
// 2. Its interstate row reads "75/80". Section 61-8-303(1)(a) now sets a flat
//    80 mph outside an urbanized area of 50,000 or more and 65 mph inside one.
//    Questions here are built so both readings give the same answer, except the
//    one in set 5 that is explicitly about the gap, and the research note
//    records it.
// 3. Its move-over figure - 20 mph below the limit on a road posted 50 or more
//    - has been overtaken by 61-8-388, which now sets 20 below on the
//    interstate, 30 below on a state highway or county road, and half the
//    posted limit on any other road or whenever you cannot change lanes.
// 4. Its first-offense DUI penalty reads "$300 to $1000" and "1 to 60 days".
//    Section 61-8-1007(1)(a)(i) sets not less than $600 and not more than
//    $1,000, with 24 consecutive hours to 6 months. The BAC numbers agree.
//
// One further gap is in the manual and on the MVD site together: neither
// publishes how many questions the written test has or what score passes it.
// See the research note.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads MVD's own
// authoritative wording on the state's site.
const HB =
  "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf";
const UNDER18 = "https://mvdmt.gov/new-driver-license/drivers-under-18/";
const pad = (v: number) => String(v * 10).padStart(4, "0");
/** Deep link to a Montana Code Annotated section, e.g. mca("61-8-303"). */
const mca = (sec: string) => {
  const [t, c, n] = sec.split("-").map(Number);
  const part = pad(Math.floor(n / 100));
  const num = pad(n % 100);
  return `https://mca.legmt.gov/bills/mca/title_${pad(t)}/chapter_${pad(c)}/part_${part}/section_${num}/${pad(t)}-${pad(c)}-${part}-${num}.html`;
};

export const montanaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Montana Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Montana: what the shapes and colors mean, who goes first, and the handful of numbers the MVD's written test expects you to know cold.",
    questions: [
      {
        id: "mt_s1_01",
        topic: "signs",
        question:
          "You come to a red eight-sided sign at an intersection. What does the Montana Driver Manual require?",
        choices: [
          "Slow to a crawl and continue if the way looks clear",
          "Stop only if a vehicle is close enough to be a hazard",
          "Come to a complete stop before entering the intersection, and before the crosswalk if there is one",
          "Yield to traffic on the wider road, then proceed",
        ],
        correctIndex: 2,
        explanation:
          "The octagon is the only eight-sided sign on the road, and it means a full stop every time. Montana adds where to stop: before the crosswalk if one is marked, otherwise before the intersection itself, and then you yield to anything close enough to be a hazard.",
        context:
          "Montana teaches signs by shape and color before words, because in fog or blowing snow the shape may be all you can read. The octagon is reserved for STOP, the downward triangle for YIELD, and a yellow diamond warns of something ahead. Learning the system beats memorizing individual signs, since the test draws on signs the manual never pictures.",
        trap:
          "A rolling stop is not a stop, and \"yield to traffic close enough to be an immediate hazard\" is what you do after stopping, not instead of it.",
        excerptKey: "stop-sign-octagon",
        sourceLabel: "Montana Driver Manual - Chapter 3 Signs, Signals, & Markings",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Montana and want to turn right onto a two-way street. What does the manual allow?",
        choices: [
          "Turn right without stopping if nothing is coming",
          "Turn right after a complete stop, unless a sign or officer says otherwise, yielding to pedestrians, bicyclists and traffic",
          "Turn right only when a green arrow appears",
          "Turn right only where a sign expressly permits it",
        ],
        correctIndex: 1,
        explanation:
          "Right on red is Montana's default rather than a special permission, but two things attach to it. You have to actually stop first, and a sign or a police officer can take the permission away. Having stopped, you still give way to everyone already there.",
        context:
          "Montana treats a steady red as stop and stay stopped, with two turns carved out. Right on red is allowed after a full stop when you are entering a two-way street, and a left on red is allowed from a one-way street onto another one-way street on exactly the same terms. A red arrow removes the permission for that movement entirely.",
        trap:
          "\"Clear enough to go\" is not the test. Montana learners report failing the road test for exactly this - rolling the right turn on red without the wheels ever stopping.",
        excerptKey: "signal-right-on-red",
        sourceLabel: "Montana Driver Manual - Chapter 3 Vehicle Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s1_03",
        topic: "rightOfWay",
        question:
          "Four cars reach a four-way stop at clearly different times. Who goes first, according to the manual?",
        choices: [
          "The driver reaching the intersection first, after coming to a complete stop",
          "The driver on the far right of the group",
          "Whoever is going straight rather than turning",
          "The driver of the largest vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Montana's four-way stop rule is order of arrival. The first driver to reach the intersection goes first, and only after that driver has actually come to a complete stop.",
        context:
          "Order of arrival settles a four-way stop. When two drivers do arrive together, Montana falls back on the general intersection rule: the driver on the left yields to the driver on the right. Underneath all of it sits the manual's warning that the law says who must yield, not who has a right to go.",
        trap:
          "Going straight does not outrank turning at a four-way stop, and vehicle size counts for nothing. Arrival order decides it.",
        excerptKey: "row-four-way-first",
        sourceLabel: "Montana Driver Manual - Chapter 4 Intersections",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_04",
        topic: "speed",
        question:
          "You are on a Montana two-lane highway at night with nothing posted. What is the limit for a car in the manual's speed table?",
        choices: [
          "55 mph",
          "70 mph",
          "75 mph",
          "65 mph",
        ],
        correctIndex: 3,
        explanation:
          "Montana is one of the few states that still drops the two-lane limit after dark. Cars and light trucks may do 70 in the daytime and 65 at night on a two-lane highway.",
        context:
          "The manual prints a four-cell table: interstates, urban area highways, and two-lane highways, each split day and night. Only the two-lane row changes between day and night for cars. Heavy trucks, meaning anything over one-ton rated capacity, run 10 mph slower again on two-lane roads: 60 by day and 55 at night.",
        trap:
          "Do not carry the daytime 70 across to the night row. Montana's night limit on a two-lane road is genuinely lower, and the statute defines daytime as running from half an hour before sunrise to half an hour after sunset.",
        excerptKey: "speed-table-interstate",
        sourceLabel: "Montana Driver Manual - Chapter 4 Speed Limits",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s1_05",
        topic: "safety",
        question:
          "What following distance does the Montana Driver Manual teach for normal conditions?",
        choices: [
          "One car length for every 10 mph",
          "Two seconds",
          "Four seconds at any speed",
          "Three seconds, counted from a fixed object",
        ],
        correctIndex: 3,
        explanation:
          "Montana teaches the Three-Second Rule, and it works at any speed. You watch the back of the car ahead pass a pole or sign, count one-one-thousand, two-one-thousand, three-one-thousand, and you should not reach that spot before you finish.",
        context:
          "Three seconds is the baseline in good conditions. The manual then lists the situations that call for a longer gap: slippery roads, following a motorcycle, following anything whose driver cannot see you, towing a load, poor visibility, and sitting behind a vehicle that has to stop at railroad crossings.",
        trap:
          "Car lengths are the old rule and Montana does not use them - you cannot judge them at speed. Counting seconds works whether you are doing 25 or 75.",
        excerptKey: "follow-three-second",
        sourceLabel: "Montana Driver Manual - Chapter 5 Space Ahead",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_06",
        topic: "signs",
        question: "A downward-pointing triangle with a red border faces you. What must you do?",
        choices: [
          "Stop completely, then proceed",
          "Slow to a reasonable speed and give way to all vehicles on the road you are entering",
          "Maintain speed, since the sign is only advisory",
          "Sound your horn before entering the intersection",
        ],
        correctIndex: 1,
        explanation:
          "A yield sign asks you to slow down to a reasonable speed and let traffic on the road you are joining go through. You stop only when safety requires it, but the moment it does, stopping is compulsory.",
        context:
          "The triangle is the only three-sided sign in the system, so its shape alone identifies it. Yield is the lighter cousin of a stop: no automatic halt, but no right to push in either. Under Montana law, if you drive past a yield sign and then collide with a vehicle or a pedestrian in the crosswalk, that collision is treated as evidence you failed to yield.",
        trap:
          "Yield is not \"stop\", but it is also not \"carry on regardless\". If no safe gap exists, you must stop and wait for one.",
        excerptKey: "yield-sign-meaning",
        sourceLabel: "Montana Driver Manual - Chapter 3 Intersection Traffic Control Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_07",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Montana?",
        choices: [
          "No closer than 30 feet",
          "No closer than 10 feet",
          "No closer than 20 feet",
          "No closer than 15 feet",
        ],
        correctIndex: 3,
        explanation:
          "Fifteen feet is the Montana figure, and it appears in the manual's no-parking list and in the statute in the same words. It is measured from the hydrant, not from the curb line.",
        context:
          "Montana prints a full no-parking list rather than leaving it to the statute. The distances worth memorizing are 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 30 feet from a signal, stop sign or yield sign, and 50 feet from a railroad crossing.",
        trap:
          "Ten feet is the hydrant figure in several neighboring states, and 20 is the crosswalk figure in Montana. Neither is the hydrant answer here.",
        excerptKey: "park-hydrant-15",
        sourceLabel: "Montana Driver Manual - Chapter 4 No Parking Zones",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s1_08",
        topic: "licensing",
        question:
          "A 16-year-old passes the written test and gets a Non-Commercial Learner Permit. How long must the permit be held before a first-year restricted license?",
        choices: [
          "Six consecutive months",
          "One year",
          "Until the driver turns 17",
          "Three months",
        ],
        correctIndex: 0,
        explanation:
          "Montana requires six consecutive months on the NCLP for any new driver under 18. The MVD's own page states it slightly more precisely as six months plus one day.",
        context:
          "Step 1 of Montana's graduated program is the NCLP. Alongside the six months you log at least 50 hours of supervised driving including 10 at night, you keep everyone belted, and you stay clear of traffic violations and alcohol or drug offenses during that six-month period. Only then do you apply for the first-year restricted license.",
        trap:
          "The permit is valid for one year, which is not the same as the six months you must hold it. One is how long the document lasts, the other is how long you must wait.",
        excerptKey: "lic-nclp-six-months",
        sourceLabel: "Montana Driver Manual - Chapter 1 Non-Commercial Learner Permit",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_09",
        topic: "sharing",
        question:
          "A school bus ahead of you stops on the roadway with its red lights flashing. How far back must you stop?",
        choices: [
          "At least 30 feet from the bus",
          "At least 20 feet from the bus",
          "At the nearest crosswalk",
          "At least 50 feet from the bus",
        ],
        correctIndex: 0,
        explanation:
          "Montana sets the school bus stopping distance at approximately 30 feet, and it applies whether you are meeting the bus or coming up behind it. You stay stopped until the red lights go off.",
        context:
          "The bus warns you before it stops. Amber flashing lights mean it is about to stop, and they come on roughly 150 feet ahead in a city or 500 feet ahead elsewhere. Red lights mean it is stopped and loading. You may never overtake a stopped school bus on its right side.",
        trap:
          "Waiting for the children to finish loading is not the rule and neither is waiting for the bus to move. The red lights going off is the signal to proceed.",
        excerptKey: "bus-stop-30-feet",
        sourceLabel: "Montana Driver Manual - Chapter 4 School Buses",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s1_10",
        topic: "impairment",
        question: "At what blood alcohol concentration can an adult driver be arrested for DUI in Montana?",
        choices: ["0.10 or more", "0.05 or more", "0.02 or more", "0.08 or more"],
        correctIndex: 3,
        explanation:
          "Montana's adult threshold is 0.08. That is the number at which the concentration alone is the offense - you can also be arrested below it if you are under the influence.",
        context:
          "Montana runs four separate thresholds. Adults in an ordinary vehicle are at 0.08, commercial drivers at 0.04, anyone under 21 at 0.02, and there is a drug limit of 5 nanograms per millilitre of active THC. Under 21, any detectable active THC is also an offense.",
        trap:
          "0.08 is a ceiling, not a license to drink up to it. The manual is blunt that even one drink affects driving and that no one can drink and drive safely.",
        excerptKey: "dui-bac-08",
        sourceLabel: "Montana Driver Manual - Chapter 6 Alcohol and the Law",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_11",
        topic: "signs",
        question: "A yellow diamond-shaped sign with a black symbol on it tells you what?",
        choices: [
          "A rule you must obey, such as a speed limit",
          "A service or point of interest ahead",
          "There is a dangerous condition ahead and you must drive with great caution",
          "The road ahead is closed",
        ],
        correctIndex: 2,
        explanation:
          "Black on yellow, diamond shaped, is Montana's warning family. It flags something ahead - a curve, a crossing, loose gravel, cattle - that you need to slow for and drive around with more care than usual.",
        context:
          "Montana sorts every sign into three functions: regulatory signs tell you what to do and are rectangular with black on white, warning signs alert you to conditions ahead and are black on yellow, and guide signs give information. There is one shape exception worth knowing: the round sign is the railroad crossing warning, and it is the only round warning sign.",
        trap:
          "A yellow diamond is not optional advice. The manual says these mark places where you are required to drive with great caution, and a posted speed under a curve sign is a suggested safe speed for that curve.",
        excerptKey: "warning-signs-look",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_12",
        topic: "rules",
        question:
          "You are driving through a Montana town and plan to turn at the next corner. How far ahead must you signal?",
        choices: ["100 feet", "50 feet", "300 feet", "Two car lengths"],
        correctIndex: 0,
        explanation:
          "In town the signal has to run for the last 100 feet before the turn, which the manual describes as about a third of a city block. Out on a rural road the figure triples to 300 feet.",
        context:
          "Montana states the signaling distance twice, once as a driving rule and once in the statute, and both give the same pair of numbers: 100 feet in a business, residence or urban district, 300 feet everywhere else. The same statute also says you may not stop or suddenly slow without signaling to the driver behind you when there is a chance to.",
        trap:
          "There is no single distance to memorize here. Answering 300 feet for a town street is wrong, and Montana learners say the distance questions are exactly the ones that catch them out.",
        excerptKey: "turn-signal-100-300",
        sourceLabel: "Montana Driver Manual - Chapter 4 General Driving",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s1_13",
        topic: "signals",
        question: "A traffic signal ahead is flashing red. What does it mean?",
        choices: [
          "Proceed with caution without stopping",
          "The signal is broken and should be ignored",
          "Slow down and be ready to stop",
          "It means the same as a stop sign",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is a stop sign in light form. You come to a complete stop, look left, right and ahead, yield to traffic and pedestrians, and go when it is safe.",
        context:
          "Montana pairs flashing red with flashing yellow. Flashing yellow means proceed with caution and usually calls for slowing down; flashing red means stop. If a signal is dark altogether, the manual tells you to treat the intersection as though there were stop signs in all directions.",
        trap:
          "Flashing red and flashing yellow are not interchangeable. Only the yellow lets you roll through, and a dark signal is not a free pass either.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Montana Driver Manual - Chapter 3 Vehicle Signals",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_14",
        topic: "emergencies",
        question:
          "An ambulance is approaching with siren and flashing lights while you are partway through an intersection. What should you do?",
        choices: [
          "Stop immediately where you are",
          "Drive through the intersection first, then pull over to the right and stop",
          "Speed up to clear the area entirely",
          "Pull left, since the ambulance will pass on the right",
        ],
        correctIndex: 1,
        explanation:
          "Stopping inside an intersection blocks the very route the ambulance needs. Montana tells you to clear the intersection first, then pull to the right edge and stop until the emergency vehicle has passed.",
        context:
          "The general rule is to pull as close to the right edge of the road as you can and stay stopped, whichever direction the emergency vehicle is coming from. Montana adds a specific carve-out for roundabouts too: do not stop inside one, keep going and exit, then pull over where there is room.",
        trap:
          "\"Stop immediately\" sounds obedient and is the wrong answer in an intersection. It leaves your car exactly where the ambulance wants to be.",
        excerptKey: "emergency-in-intersection",
        sourceLabel: "Montana Driver Manual - Chapter 4 Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_15",
        topic: "speed",
        question:
          "Nothing is posted on the residential street you are driving along in a Montana town. What speed does state law set?",
        choices: [
          "25 mph",
          "30 mph",
          "20 mph",
          "35 mph",
        ],
        correctIndex: 0,
        explanation:
          "Montana's statutory default in an urban district is 25 mph. It is the figure that applies when no sign tells you otherwise, and it is the one number in this area the manual never prints.",
        context:
          "Section 61-8-303 sets four defaults: 80 mph on an interstate outside a large urbanized area, 65 on an interstate inside one, 70 by day and 65 at night on any other public highway, and 25 in an urban district. A local authority can lower a limit outside an urban district, but not below 25 mph, and can lower a school zone to as little as 15 mph.",
        trap:
          "The manual's speed table stops at two-lane highways, so a learner who only reads the book will guess. The town default is in the statute, not the manual.",
        excerptKey: "speed-statute-urban-25",
        sourceLabel: "Montana Code Annotated - 61-8-303 Speed restrictions",
        sourceUrl: mca("61-8-303"),
        commonlyMissed: true,
      },
      {
        id: "mt_s1_16",
        topic: "safety",
        question: "When does Montana law require your headlights to be on?",
        choices: [
          "Only between midnight and dawn",
          "Only when it is fully dark",
          "From a half hour after sunset to a half hour before sunrise, and whenever visibility is less than 500 feet",
          "From sunset to sunrise, and at no other time",
        ],
        correctIndex: 2,
        explanation:
          "Montana gives you two triggers. The clock one runs from half an hour after sunset to half an hour before sunrise. The visibility one applies any time weather or blowing dust cuts what you can see to under 500 feet, whatever the hour.",
        context:
          "The 500-foot figure recurs all through Montana's lighting rules: it is the visibility trigger for headlights, the distance your tail lights must be seen from, and the distance parking lights must show when you are stopped on a roadway at night. Separately, the manual tells you that if the wipers go on, the headlights go on.",
        trap:
          "\"When it gets dark\" is not the rule. Half an hour after sunset is often still light, and blowing dust on a summer afternoon triggers the same requirement.",
        excerptKey: "lights-when-required",
        sourceLabel: "Montana Driver Manual - Chapter 2 Headlights & Tail Lights",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_17",
        topic: "rightOfWay",
        question:
          "You reach an intersection with no signs or signals at the same moment as a car on your right. Who yields?",
        choices: [
          "The car on the right yields to you",
          "Whoever is traveling faster yields",
          "Neither, since both should stop and wait",
          "You yield to the car on the right",
        ],
        correctIndex: 3,
        explanation:
          "At an uncontrolled intersection Montana puts the driver on the left in the yielding seat. If a car is approaching from your right and is close enough to be an immediate hazard, you give way.",
        context:
          "The manual attaches a procedure to this rule rather than leaving it abstract: take your foot off the accelerator, cover the brake, and look left, right, and left again. The statute puts it the other way round from the driver's point of view - the driver on the left shall yield to all vehicles approaching from the right.",
        trap:
          "Speed and vehicle size never decide right of way. The rule is positional, and it turns on which side the other car is on.",
        excerptKey: "row-uncontrolled-right",
        sourceLabel: "Montana Driver Manual - Chapter 4 Intersections",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_18",
        topic: "parking",
        question: "How far from the curb may a legally parked car sit in Montana?",
        choices: [
          "No more than 18 inches",
          "No more than 12 inches",
          "No more than one foot",
          "No more than 24 inches",
        ],
        correctIndex: 0,
        explanation:
          "Eighteen inches, which the manual helpfully converts to a foot and a half. Anything further out is on the no-parking list in the same breath as blocking a driveway.",
        context:
          "Montana's parking guidance starts from a principle: your parked car must not become a hazard, so it has to be clear of the travel lane and visible to drivers approaching from either direction. If there is no curb, you pull as close to the edge of the shoulder as you can manage.",
        trap:
          "A foot sounds tidier and is not the rule. Twenty-four inches is over the limit and would be an offense.",
        excerptKey: "park-curb-18-inches",
        sourceLabel: "Montana Driver Manual - Chapter 4 Parking",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_19",
        topic: "signs",
        question:
          "You see a round yellow sign with a black X and two R letters on it. What is it telling you?",
        choices: [
          "A railroad crossing is ahead",
          "The road ahead is closed to through traffic",
          "A rural route junction is ahead",
          "A rest area is ahead",
        ],
        correctIndex: 0,
        explanation:
          "That is the advance warning for a railroad crossing, and it is the one round warning sign Montana uses. It tells you to slow down, look, listen and be ready to stop at the tracks ahead.",
        context:
          "At the crossing itself you will find the crossbuck, and where there is more than one track a small sign under the crossbuck says how many. Flashing lights or gates mean a train is coming: stop and stay stopped until the gates rise and the lights stop flashing.",
        trap:
          "Shape is doing the work here. Every other warning sign in the Montana system is a diamond, so a round yellow sign can only be the railroad advance warning.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_20",
        topic: "sharing",
        question: "How does Montana law treat a bicycle on a public road?",
        choices: [
          "As a pedestrian, so it always has the right of way",
          "As a vehicle, governed by the same traffic laws that reasonably apply to it",
          "As an obstruction that must stay off the roadway",
          "As a vehicle only when it is in a marked bike lane",
        ],
        correctIndex: 1,
        explanation:
          "Montana counts bicycles as vehicles. The same rules of the road apply to a rider as to a driver, so far as they reasonably can, which means the cyclist obeys signals and signs and you owe them the same courtesies you owe a car.",
        context:
          "The manual sets out what that means for a driver. You may not intentionally interfere with a rider, you may not overtake unless you can do it without endangering them, and you must yield to a rider already in a designated bike lane. When you do pass on a two-lane road, the recommended gap is five feet.",
        trap:
          "Bicycles are not pedestrians, and they do not lose their status by leaving a bike lane. A rider is entitled to a lane position that keeps them out of opening car doors.",
        excerptKey: "bike-same-rules",
        sourceLabel: "Montana Driver Manual - Chapter 4 Bicyclists & Motorists",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_21",
        topic: "rules",
        question:
          "You are on a Montana road with three lanes running in your direction. Where should you drive?",
        choices: [
          "In the center lane at all times",
          "In whichever lane is moving fastest",
          "In the left lane, keeping the others clear",
          "In the right lane, moving left only to pass",
        ],
        correctIndex: 3,
        explanation:
          "Montana's basic lane discipline is to stay right and use the left lane to pass. The manual makes one practical exception: where a lot of traffic is entering from the right, use the center travel lane.",
        context:
          "On multi-lane roads the left-most lane exists to overtake slower vehicles, not to cruise in. The same instinct runs through the slow-driving rules - anything holding up four or more vehicles must pull off at the first safe turnout, and slow-moving vehicles belong in the extreme right lane.",
        trap:
          "\"Whichever lane is moving fastest\" is how people actually drive and is not the rule. Weaving between lanes to keep up is what the manual warns against.",
        excerptKey: "keep-right-except-pass",
        sourceLabel: "Montana Driver Manual - Chapter 4 General Driving",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_22",
        topic: "signals",
        question: "The light ahead turns steady yellow as you approach. What does the manual tell you to do?",
        choices: [
          "Speed up so you clear the intersection before the red",
          "Stop at once, wherever you are",
          "Do not enter the intersection unless you are too close to stop safely",
          "Treat it as a yield and enter after checking both ways",
        ],
        correctIndex: 2,
        explanation:
          "A steady yellow means caution and warns that a red is coming. Montana's instruction is not to enter the intersection on it, with one exception: if you are already so close that stopping would be unsafe, you go through.",
        context:
          "The statute puts the same rule from the other end. It says a yellow warns you the green movement is ending and that you may not enter the intersection once the red is showing. That is why the practical dividing line is whether you can stop safely, not whether you can beat the light.",
        trap:
          "Accelerating on the yellow is the classic error, and slamming on the brakes when you are already committed is the other one. Montana drivers argue about this constantly and the manual settles it: do not enter unless you cannot safely stop.",
        excerptKey: "signal-steady-yellow",
        sourceLabel: "Montana Driver Manual - Chapter 3 Vehicle Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s1_23",
        topic: "licensing",
        question: "What does Montana require you to have with you every time you drive?",
        choices: [
          "Your birth certificate",
          "A valid Montana driver license in your possession",
          "Your Social Security card",
          "A copy of your driving record",
        ],
        correctIndex: 1,
        explanation:
          "The license itself has to be on you. Montana's quick reference opens with it: drivers must always have a valid Montana driver license in their possession.",
        context:
          "Two other documents belong in the car rather than in your pocket. Evidence of liability insurance must be carried in the vehicle at all times, and you have to show it, along with the license and the registration, if you are stopped for a violation or involved in a collision.",
        trap:
          "Identity documents prove who you are at the counter. They do not stand in for the license at the roadside.",
        excerptKey: "lic-must-carry",
        sourceLabel: "Montana Driver Manual - Chapter 1 Driver Licensing Quick Reference",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_24",
        topic: "impairment",
        question: "What is the blood alcohol limit for a Montana driver who is under 21?",
        choices: ["0.08", "0.05", "0.00", "0.02"],
        correctIndex: 3,
        explanation:
          "Under 21 the threshold drops to 0.02. It is not quite a zero-tolerance number, but it is low enough that a single drink can reach it.",
        context:
          "The under-21 rule sits in the same statute as the adult one and covers drugs too: any amount of active THC in the body of a driver under 21 is an offense in itself. Buying or consuming alcohol under 21 is separately unlawful in Montana.",
        trap:
          "0.02 is not 0.00, but treating it as room to have one drink is how people lose a license at 17. It is close enough to zero that the safe number is zero.",
        excerptKey: "dui-under-21-02",
        sourceLabel: "Montana Driver Manual - Chapter 6 Alcohol and the Law",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_25",
        topic: "safety",
        question: "Who has to wear a seat belt in a moving car in Montana?",
        choices: [
          "Every occupant, and the driver is responsible for making sure of it",
          "Only the driver and front-seat passenger",
          "Only occupants under 18",
          "Only occupants in seats that have a shoulder belt",
        ],
        correctIndex: 0,
        explanation:
          "Montana puts everyone in a belt and puts the duty on the driver. You may not drive unless each occupant is wearing a properly adjusted and fastened safety belt or is in a child safety seat.",
        context:
          "The exceptions are narrow: a vehicle built before 1 January 1968, an occupant with a doctor's written statement that they cannot wear one, an operator of special mobile equipment, and a few job-related exemptions. Children under six who weigh under 60 pounds go in a child safety seat instead.",
        trap:
          "The belt rule is not a front-seat rule and it is not an under-18 rule. Every designated seating position counts, and the fine lands on the driver.",
        excerptKey: "belt-required",
        sourceLabel: "Montana Driver Manual - Chapter 2 Seatbelts",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_26",
        topic: "signs",
        question: "A white square sign shows DO NOT ENTER in red. What is it telling you?",
        choices: [
          "The road ahead is under construction",
          "You may enter only to make a delivery",
          "The road ahead is a one-way roadway, or all vehicle traffic is prohibited",
          "Entry is restricted to local traffic",
        ],
        correctIndex: 2,
        explanation:
          "DO NOT ENTER marks a road you must not drive into: either a one-way running the other way, or a stretch closed to vehicles entirely.",
        context:
          "Montana groups this with STOP and YIELD as an intersection control sign, and the manual gives you a memory hook for the whole family - red always means stop, yield, do not enter, or wrong way. Any sign with a red circle and a red slash over a symbol means do not do the thing shown.",
        trap:
          "There is no local-traffic exception on a DO NOT ENTER. If the road is a one-way running towards you, entering it means driving into oncoming traffic.",
        excerptKey: "do-not-enter-sign",
        sourceLabel: "Montana Driver Manual - Chapter 3 Intersection Traffic Control Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_27",
        topic: "speed",
        question:
          "You are driving through a marked highway work zone in Montana. What is true about the speed limit and the penalties?",
        choices: [
          "There is a standard statewide work zone limit of 45 mph",
          "Fines are the same as anywhere else if workers are not present",
          "Work zone limits are only advisory",
          "There is no standard limit - each zone is posted separately - and fines are doubled",
        ],
        correctIndex: 3,
        explanation:
          "Montana does not set one work zone speed. The Department of Transportation, a local authority, a utility or the contractor sets a limit for each individual zone, and the fine for exceeding it is double.",
        context:
          "The doubling is not conditional on workers being there. Montana also carries a separate offense, reckless endangerment of a highway worker, for knowingly or negligently driving through a construction zone in a way that endangers persons or property. Orange is the color that marks the whole family of work zone devices.",
        trap:
          "Looking for a statewide work zone number is a wasted search - there is not one. Read the posted sign.",
        excerptKey: "work-zone-no-standard-limit",
        sourceLabel: "Montana Driver Manual - Chapter 3 Construction Zone",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s1_28",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing in a marked crosswalk in front of you and the light is out. What must you do?",
        choices: [
          "Yield the right of way, slowing down or stopping if necessary",
          "Sound your horn so they hurry",
          "Proceed if you can pass behind them",
          "Wait only if they are in your half of the road",
        ],
        correctIndex: 0,
        explanation:
          "Where the signals are not working, Montana law makes you yield to a pedestrian in a marked or unmarked crosswalk, slowing down or stopping as needed.",
        context:
          "The duty is not unconditional in the other direction: a pedestrian may not step off a curb into the path of a car so close that the driver cannot yield. The manual is still blunt that the driver carries the basic responsibility to be alert and to yield even when the pedestrian is in the wrong.",
        trap:
          "Passing behind a pedestrian is exactly what the law is trying to prevent, and a horn near a crosswalk can startle someone into the wrong move.",
        excerptKey: "ped-statute-crosswalk",
        sourceLabel: "Montana Code Annotated - 61-8-502 Pedestrians' right-of-way in crosswalk",
        sourceUrl: mca("61-8-502"),
      },
      {
        id: "mt_s1_29",
        topic: "emergencies",
        question: "Your brakes stop working while you are driving. What does the manual tell you to try first?",
        choices: [
          "Turn off the ignition immediately",
          "Pull the parking brake hard",
          "Shift straight into reverse",
          "Pump the brake pedal several times",
        ],
        correctIndex: 3,
        explanation:
          "Pumping the pedal often builds back enough pressure to stop the car, so it is the first move. Only if that fails do you go to the parking brake.",
        context:
          "The order matters. Pump first; then apply the parking brake slowly, so you do not lock the rear wheels and start a skid, ready to release it if the car does begin to slide; then shift down through the gears and look for a safe place to come to rest off the road.",
        trap:
          "Yanking the parking brake is the instinct and it is the second step, not the first. Done hard, it can spin the car.",
        excerptKey: "emerg-brake-failure",
        sourceLabel: "Montana Driver Manual - Chapter 7 Brake Failure",
        sourceUrl: HB,
      },
      {
        id: "mt_s1_30",
        topic: "rules",
        question: "You are approaching a single-lane roundabout in Montana. What do you do?",
        choices: [
          "Enter first, since traffic in the circle must give way to entering vehicles",
          "Stop before entering, whether or not anything is coming",
          "Look left and yield to vehicles already in the roundabout, then enter without stopping if it is clear",
          "Sound your horn and enter at the posted highway speed",
        ],
        correctIndex: 2,
        explanation:
          "Traffic already in a Montana roundabout has the right of way. You look left, wait for a gap, and go, and if the way is clear you do not stop at all.",
        context:
          "Montana adds practical detail: drive at 15 mph or less inside the circle, keep to the right of the center island, never pass another vehicle once you are in a single-lane roundabout, and signal right as you exit. Watch for the truck apron - a long vehicle's rear wheels will track over it.",
        trap:
          "Stopping in a clear roundabout entry is the mistake, because it invites the car behind into your bumper. Yielding does not mean stopping when there is nothing to yield to.",
        excerptKey: "roundabout-yield-left",
        sourceLabel: "Montana Driver Manual - Chapter 3 Roundabouts in Montana",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Lane markings, passing, parking distances, night driving and the graduated licensing steps - the everyday Montana rules that make up the bulk of the written test.",
    questions: [
      {
        id: "mt_s2_01",
        topic: "signals",
        question:
          "What color separates lanes of traffic traveling in opposite directions on a Montana road?",
        choices: [
          "Yellow",
          "Orange",
          "Blue",
          "White",
        ],
        correctIndex: 0,
        explanation:
          "Yellow separates opposing traffic; white separates lanes running the same way. Getting that pair the right way round tells you instantly whether the road beside you is oncoming.",
        context:
          "From there the pattern is about solid versus dashed. A dashed yellow centerline may be crossed to pass; a solid yellow on your side means you may not. Where one line is solid and one dashed, the side with the dashed line may pass. Two solid yellow lines mean neither direction may pass.",
        trap:
          "White and yellow are easy to swap under pressure. If the line beside you is white, whatever is over there is going your way.",
        excerptKey: "marking-line-colors",
        sourceLabel: "Montana Driver Manual - Chapter 3 Edge and Lane Lines",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_02",
        topic: "rules",
        question:
          "There is a solid yellow line on your side of a two-lane road and a dashed yellow line on the other. What may you do?",
        choices: [
          "Pass, because one of the lines is dashed",
          "Pass only if the vehicle ahead is turning left",
          "Not pass, because the solid line is on your side",
          "Not pass in either direction",
        ],
        correctIndex: 2,
        explanation:
          "The line on your side is the one that governs you. Solid on your side means no passing, even though the driver coming the other way may legally pass over the same pair of lines.",
        context:
          "Montana lets you cross a solid yellow for two things that are not overtaking: turning left into a driveway, a parking lot or another road, when it is safe. Crossing the centerline is otherwise permitted only when you are overtaking and passing.",
        trap:
          "Seeing any dashed line and reading it as permission is the classic error. Read the line under your own wheels.",
        excerptKey: "marking-yellow-mixed",
        sourceLabel: "Montana Driver Manual - Chapter 3 Yellow Lane Markings",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_03",
        topic: "parking",
        question: "How close to a crosswalk at an intersection may you park in Montana?",
        choices: ["No closer than 15 feet", "No closer than 30 feet", "No closer than 10 feet", "No closer than 20 feet"],
        correctIndex: 3,
        explanation:
          "Twenty feet from a crosswalk at an intersection. The distance exists so a driver turning in can see people stepping off the curb, and so those people can see the car.",
        context:
          "Montana's no-parking distances come as a set: 20 feet from a crosswalk, 30 feet from a signal, stop sign or yield sign, 15 feet from a hydrant, 50 feet from a railroad crossing, and 20 feet from a fire station driveway on your side or 75 feet from one across the street.",
        trap:
          "The 15-foot figure belongs to hydrants and the 30-foot figure to signs and signals. Mixing the three up is the whole difficulty of this question.",
        excerptKey: "park-no-list",
        sourceLabel: "Montana Driver Manual - Chapter 4 No Parking Zones",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_04",
        topic: "safety",
        question:
          "You are following a car on a two-lane road when it starts to snow and the surface turns slick. What should you do about your following distance?",
        choices: [
          "Keep three seconds, since the rule works at any speed",
          "Increase it, because you need more distance to stop on a slippery road",
          "Shorten it so you can see the car's brake lights sooner",
          "Match the gap the driver behind you is keeping",
        ],
        correctIndex: 1,
        explanation:
          "Three seconds is the good-conditions baseline. Once the surface is slippery you need more room, because the distance it takes you to stop has grown.",
        context:
          "The manual lists the situations that call for extra space: slippery roads, letting a driver behind you pass, following a motorcycle, following a vehicle whose driver cannot see you, carrying a heavy load or a trailer, poor visibility, being followed closely, following emergency vehicles, approaching railroad crossings, and sitting behind someone on a hill.",
        trap:
          "The three-second rule is a minimum for good conditions, not a constant. Snow, ice and gravel all mean more.",
        excerptKey: "follow-slippery",
        sourceLabel: "Montana Driver Manual - Chapter 5 Space Ahead",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_05",
        topic: "licensing",
        question:
          "How many hours of supervised driving must a Montana teen log before moving from the learner permit to a first-year restricted license?",
        choices: [
          "At least 50 hours, including 10 at night",
          "At least 30 hours, including 5 at night",
          "At least 40 hours, with no night requirement",
          "At least 70 hours, including 20 at night",
        ],
        correctIndex: 0,
        explanation:
          "Fifty hours in total, and at least ten of them after dark. The hours have to be spread over a minimum of six months, so you cannot compress them into a fortnight.",
        context:
          "A parent, legal guardian or responsible adult logs the hours, and the MVD publishes a teen driving log form for the purpose. Alongside the hours, the teen must go the whole six months without a traffic violation or an alcohol or drug offense.",
        trap:
          "Fifty hours is the total, not the daytime figure with ten more on top. The ten night hours are counted inside the fifty.",
        excerptKey: "lic-gdl-50-hours",
        sourceLabel: "Montana Driver Manual - Chapter 1 GDL Step 1",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_06",
        topic: "signs",
        question: "A rectangular sign with black lettering on a white background is what kind of sign?",
        choices: [
          "A warning sign",
          "A guide sign",
          "A regulatory sign, giving a rule you must obey",
          "A construction sign",
        ],
        correctIndex: 2,
        explanation:
          "Black on white in a rectangle is Montana's regulatory family - speed limits, DO NOT PASS, KEEP RIGHT, NO U TURN. These are rules, not advice, and you must obey them.",
        context:
          "Set that against warning signs, which are black on yellow and usually diamond shaped, and against construction and maintenance devices, which use orange as their basic color. The manual is explicit that the signs it pictures are examples and that many more regulatory signs are in use.",
        trap:
          "The manual warns that it does not picture every sign. Learn the color and shape system so an unfamiliar sign is still readable.",
        excerptKey: "regulatory-signs-look",
        sourceLabel: "Montana Driver Manual - Chapter 3 Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_07",
        topic: "rightOfWay",
        question:
          "You are pulling out of a supermarket car park onto a busy street. What does Montana law require?",
        choices: [
          "Traffic on the street must slow to let you in",
          "You must yield the right of way to all vehicles approaching on the roadway",
          "You have the right of way if you signal first",
          "You may enter if you can complete the move without stopping",
        ],
        correctIndex: 1,
        explanation:
          "A driver entering or crossing a roadway from a private road, driveway, alley or approach ramp yields to everything already on the road. There is no exception for signaling.",
        context:
          "The manual states the same rule twice: drivers entering a road from a driveway, alley or roadside must stop and yield, and drivers crossing a sidewalk to get there must yield to pedestrians on it. Driving along a sidewalk is illegal - crossing one is the only permitted use.",
        trap:
          "Signaling communicates an intention. It never creates a right of way you did not have.",
        excerptKey: "row-statute-private-road",
        sourceLabel: "Montana Code Annotated - 61-8-343 Vehicle entering roadway from private road",
        sourceUrl: mca("61-8-343"),
      },
      {
        id: "mt_s2_08",
        topic: "speed",
        question:
          "A local authority in Montana wants to lower the limit past a school. How low may it go?",
        choices: [
          "As low as 10 mph",
          "No lower than 25 mph",
          "No lower than 20 mph",
          "As low as 15 mph",
        ],
        correctIndex: 3,
        explanation:
          "Fifteen miles an hour is Montana's floor for a school zone, a senior citizen center, or a designated crosswalk close to either. The manual flags the same figure.",
        context:
          "Outside a school zone the floor is higher: a local authority may not drop a limit below 25 mph on a road outside an urban district, paved or unpaved. Fines are doubled in all school zones throughout Montana, in the same way they are doubled in work zones.",
        trap:
          "Fifteen is unusually low and that is exactly why it is asked. Twenty-five is the general floor and does not apply to school zones.",
        excerptKey: "school-zone-15",
        sourceLabel: "Montana Driver Manual - Chapter 3 School Zone Safety Standards",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_09",
        topic: "safety",
        question: "You are checking your blind spot before changing lanes. What does the manual tell you to do?",
        choices: [
          "Rely on the side mirror, which covers the blind spot",
          "Slow down until the mirror shows the lane clear",
          "Turn your head and look over your shoulder in the direction you plan to move",
          "Signal and move slowly so anyone there can react",
        ],
        correctIndex: 2,
        explanation:
          "Blind spots are called that because the mirrors do not cover them. Montana tells you to physically turn your head and look towards the lane you are moving into.",
        context:
          "The full sequence is signal, check the rearview and side mirrors, look over your shoulder, and check the far lane in case someone else is heading for the same gap. The manual also says to check quickly - traffic ahead can stop while your eyes are elsewhere.",
        trap:
          "Mirrors are a check, not the check. Moving slowly and hoping someone reacts is not a substitute for looking.",
        excerptKey: "scan-blind-spots",
        sourceLabel: "Montana Driver Manual - Chapter 5 When Changing Lanes",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_10",
        topic: "sharing",
        question:
          "You are behind a cyclist on a Montana two-lane road and there is no oncoming traffic. What does the manual recommend?",
        choices: [
          "Squeeze past within the lane, since the cyclist must ride on the shoulder",
          "Sound your horn to warn the rider you are coming",
          "Follow closely until the rider moves onto the shoulder",
          "Cross the center line carefully and leave about five feet between you and the rider",
        ],
        correctIndex: 3,
        explanation:
          "Montana's recommendation is five feet of clearance, taken by crossing the centerline when it is clear. If oncoming traffic makes that impossible, you slow to the cyclist's speed and wait.",
        context:
          "The manual asks you to treat a bicycle like any other slow-moving vehicle, a farm tractor for instance. It also warns you not to assume the rider is on the shoulder, not to assume they are alone, and not to assume they can hear you coming, since most bicycles have no mirrors.",
        trap:
          "An in-lane squeeze is exactly what riders position themselves to discourage, and Montana tells drivers not to honk at cyclists at all - it can startle a rider into a crash.",
        excerptKey: "bike-five-feet",
        sourceLabel: "Montana Driver Manual - Chapter 4 Bicyclists & Motorists",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s2_11",
        topic: "rules",
        question: "When is passing on the right legal in Montana?",
        choices: [
          "Whenever the left lane is occupied",
          "When the vehicle ahead is turning or about to turn left, or where the road is wide enough for two or more lanes going your way",
          "On any two-lane road when the driver ahead is under the limit",
          "Never, in any circumstances",
        ],
        correctIndex: 1,
        explanation:
          "Montana allows a pass on the right in two situations: the driver ahead is making or about to make a left turn, or the pavement is wide enough for two or more lawful lanes in your direction.",
        context:
          "One limit applies to both: you may never do it by leaving the paved or main-travelled part of the road. Passing on the shoulder, paved or not, is prohibited, because other drivers do not expect a vehicle there and may pull off without looking.",
        trap:
          "A slow driver is not a license to undertake. And the shoulder is out even where the pass itself would be legal.",
        excerptKey: "passing-on-right-legal",
        sourceLabel: "Montana Driver Manual - Chapter 4 Passing",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_12",
        topic: "emergencies",
        question:
          "You are in a collision in Montana and the damage to one person's property looks like about $1,500. What must you do?",
        choices: [
          "Exchange details and leave it to the insurers",
          "Report it only if someone was injured",
          "Report it to the Highway Patrol, and file the report within 10 days",
          "Report it within 30 days to the county treasurer",
        ],
        correctIndex: 2,
        explanation:
          "Montana sets a reporting duty to the Highway Patrol where there is injury, death, or property damage of $1,000 or more to one person's property, and the written report has to be filed within 10 days.",
        context:
          "There is a lower trigger too: an accident must be reported immediately to law enforcement if anyone is injured or killed or property damage reaches $500 or more. If you are hurt and cannot fill in the form, someone else may file it for you.",
        trap:
          "Two thresholds and two obligations are easy to blur. The $500 figure is the immediate call to law enforcement; the $1,000 figure is the Highway Patrol report.",
        excerptKey: "crash-report-thresholds",
        sourceLabel: "Montana Driver Manual - Chapter 7 Report the accident",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s2_13",
        topic: "signals",
        question: "A flashing yellow arrow is showing for your left turn. What does it mean?",
        choices: [
          "Left turns are allowed, but you must yield to oncoming traffic and pedestrians",
          "The left turn is protected and oncoming traffic is stopped",
          "The signal is faulty and you should treat it as a stop sign",
          "Left turns are prohibited from this lane",
        ],
        correctIndex: 0,
        explanation:
          "A flashing yellow arrow permits the turn but hands you the responsibility for the gap. Oncoming traffic has a green, so you go only when you judge it safe.",
        context:
          "Compare it with the steady green arrow, which gives you a protected turn with oncoming traffic held. The steady yellow arrow means the protected phase is ending and you should clear the intersection. Where there is no arrow at all, a left or right turn on green is unprotected and yields to oncoming traffic and pedestrians.",
        trap:
          "Any arrow can feel like protection. Only the green one is; a flashing yellow arrow is closer to a green ball than to a green arrow.",
        excerptKey: "signal-flashing-yellow-arrow",
        sourceLabel: "Montana Driver Manual - Chapter 3 Vehicle Signals",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_14",
        topic: "parking",
        question:
          "You are parking facing uphill on a Montana street with a curb. Which way do the front wheels go?",
        choices: [
          "Straight ahead, with the parking brake on",
          "Towards the curb",
          "Away from the curb",
          "It makes no difference if the parking brake is set",
        ],
        correctIndex: 2,
        explanation:
          "Facing uphill with a curb, you turn the wheels away from the curb so that if the car rolls back, the front tire catches the curb instead of the car rolling into the road.",
        context:
          "The principle behind all three cases is the same: point the wheels so a rolling car goes away from traffic. Facing downhill, turn towards the curb. With no curb at all, uphill or downhill, turn the wheels away from the street. In every case you also set the parking brake and leave the car in gear or in park.",
        trap:
          "The parking brake is required, not an alternative. The wheel direction is what saves you when the brake does not hold.",
        excerptKey: "park-hill-uphill",
        sourceLabel: "Montana Driver Manual - Chapter 4 Parking on a Hill",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_15",
        topic: "impairment",
        question:
          "You are stopped in Montana and an officer asks you to take a breath test. What happens if you refuse?",
        choices: [
          "You can lose your driver license",
          "The stop ends and you are free to go",
          "You are automatically convicted of DUI",
          "Nothing, because the test is voluntary",
        ],
        correctIndex: 0,
        explanation:
          "Driving in Montana carries implied consent to a test of blood, breath or oral fluid. Refusing does not make the problem go away - it costs you the license.",
        context:
          "The statute is broad: anyone who operates or is in actual physical control of a vehicle on ways of this state open to the public is treated as having consented to testing for alcohol or drugs. The manual reduces that to one line - if a police officer asks you to take a test, you must do so.",
        trap:
          "Refusing is not a clever way to avoid evidence. It has its own penalty, and the DUI case can still proceed.",
        excerptKey: "dui-implied-consent",
        sourceLabel: "Montana Driver Manual - Chapter 6 Alcohol and the Law",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_16",
        topic: "signs",
        question:
          "A yellow diamond shows a picture of a cow. What is the difference between the Range Cattle and the Cattle Crossing sign in Montana?",
        choices: [
          "Range Cattle marks a fenced pasture; Cattle Crossing marks open range",
          "Range Cattle warns of unfenced country where stock may be on the highway; Cattle Crossing marks a point where stock is driven across",
          "They mean the same thing and are used interchangeably",
          "Cattle Crossing only applies during daylight hours",
        ],
        correctIndex: 1,
        explanation:
          "Range Cattle warns you that there are no fences, so cattle and horses may simply be standing on the road. Cattle Crossing marks a specific place where a farm is split by the highway and stock is driven from one side to the other.",
        context:
          "Montana's warning signs carry more animal content than most states because the hazard is real. Deer Crossing tells you deer often cross in that area, and the manual adds that deer and elk travel in herds - if you see one, look for more.",
        trap:
          "Neither sign is seasonal or time-limited. Open range means livestock can be on the road at any hour.",
        excerptKey: "sign-range-cattle",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_17",
        topic: "safety",
        question:
          "You are driving at 50 mph on dry pavement with good brakes. Roughly how far does the manual say it takes to see something and bring the car to a stop?",
        choices: [
          "About 600 feet",
          "About 150 feet",
          "About 250 feet",
          "About 400 feet",
        ],
        correctIndex: 3,
        explanation:
          "About 400 feet, which the manual describes as roughly the length of a city block. That is reaction plus braking, not braking alone.",
        context:
          "The companion figure is 200 feet at 30 mph, about half a block. The manual turns both into a visibility test: if you cannot see 400 feet ahead you should not be doing 50, and if you cannot see 200 feet you should not be doing 30. At night your headlights show about 400 feet, which is why 50 is the sensible ceiling in the dark.",
        trap:
          "Stopping distance does not scale with speed. Going from 30 to 60 mph more than triples it rather than doubling it.",
        excerptKey: "stopping-distance-50-30",
        sourceLabel: "Montana Driver Manual - Chapter 5 Adjusting to How Well You Can See",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_18",
        topic: "licensing",
        question:
          "A Montana teen holds a first-year restricted license. When may they not drive, absent an exception?",
        choices: [
          "Between 10:00 p.m. and 6:00 a.m.",
          "Between midnight and 5:00 a.m.",
          "Between 11:00 p.m. and 6:00 a.m.",
          "Between 11:00 p.m. and 5:00 a.m.",
        ],
        correctIndex: 3,
        explanation:
          "The curfew runs from 11:00 p.m. to 5:00 a.m. It has real exceptions - emergencies, farm work, travel to and from school, church or work, and specific purposes a parent or guardian authorises.",
        context:
          "Law enforcement may ring the parent, guardian or responsible adult to check what the teen was authorized to be doing. Break any Step 2 restriction and the first offense is 20 to 60 hours of community service; the second is a six-month suspension.",
        trap:
          "Montana's window is 11 to 5, not the midnight-to-five or 10-to-6 windows used elsewhere. The exceptions do not extend the hours, they just excuse specific trips.",
        excerptKey: "lic-gdl-curfew",
        sourceLabel: "Montana Driver Manual - Chapter 1 GDL Step 2",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_19",
        topic: "rules",
        question:
          "Where may you legally make a U-turn on an open Montana roadway, according to the manual?",
        choices: [
          "Where you have 500 feet of unobstructed view in both directions and no vehicles are approaching",
          "Anywhere a solid yellow line is absent",
          "At any intersection controlled by a signal",
          "Only where a sign expressly permits it",
        ],
        correctIndex: 0,
        explanation:
          "Montana's figure is 500 feet of clear view in both directions, which the manual likens to almost two average city blocks, and no vehicles coming.",
        context:
          "That is the state rule. The manual then warns that most city ordinances prohibit U-turns in the middle of a block and some prohibit them entirely, so a legal turn under the state rule can still be an offense in town. And no vehicle may be turned at all unless it is in the proper lane and it is safe.",
        trap:
          "Passing the state test is not the end of it. Local ordinances are the reason a U-turn can be lawful on a highway and unlawful downtown.",
        excerptKey: "uturn-500-feet",
        sourceLabel: "Montana Driver Manual - Chapter 4 Turning Around",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_20",
        topic: "sharing",
        question:
          "A slow-moving vehicle displaying an orange triangle is holding up a line of five cars on a two-lane road. What does Montana require of its driver?",
        choices: [
          "Nothing, as long as it stays under the limit",
          "To turn off the roadway at the first safe turnout",
          "To pull onto the shoulder and stop for five minutes",
          "To switch on hazard lights and continue",
        ],
        correctIndex: 1,
        explanation:
          "Once four or more vehicles are backed up, the slow-moving vehicle has to pull off at the first place there is room to do so safely. It also belongs in the extreme right lane.",
        context:
          "The fluorescent orange triangle marks vehicles that normally travel at 25 mph or under: farm equipment, animal-drawn vehicles, road maintenance machinery and rural mail delivery vehicles. Seeing one early is what lets you slow gradually instead of braking hard.",
        trap:
          "Four is the trigger, not five or ten, and the duty is to turn off rather than to speed up. The following driver still has to wait for a safe pass.",
        excerptKey: "slow-vehicle-turnout",
        sourceLabel: "Montana Driver Manual - Chapter 5 Slow-Moving Traffic",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_21",
        topic: "speed",
        question:
          "On a Montana two-lane road in a marked passing zone, may you exceed the speed limit to complete a pass?",
        choices: [
          "No, never",
          "Yes, by up to 20 mph",
          "Yes, by up to 10 mph, to overtake and return safely to the right lane",
          "Yes, without limit, as long as the pass is safe",
        ],
        correctIndex: 2,
        explanation:
          "Montana allows 10 mph over the limit purely to complete an overtake on a two-lane road and get back into the right lane. It is not a general allowance.",
        context:
          "The statute attaches two conditions to it: you must be on a two-lane road and in a designated passing zone. The manual repeats the 10 mph figure straight after its speed table. It buys you the time to get past cleanly, not permission to stay there.",
        trap:
          "This is not a blanket 10-over cushion. Outside a passing zone, or once you are back in your lane, the posted limit applies again.",
        excerptKey: "speed-pass-10-over",
        sourceLabel: "Montana Driver Manual - Chapter 4 Speed Limits",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s2_22",
        topic: "safety",
        question: "What does Montana teach about using high beams when you meet another vehicle at night?",
        choices: [
          "Leave them on until the other car dims theirs",
          "Dim them within 1000 feet of an oncoming vehicle and within 500 feet when following one",
          "Dim them only in town",
          "Flash them twice, then dim",
        ],
        correctIndex: 1,
        explanation:
          "Two distances, and they differ. High beams come down at 1000 feet when you are meeting a vehicle, and at 500 feet when you are coming up behind one.",
        context:
          "The reason the following distance is shorter is that your beams reach the other driver through their mirrors rather than their windscreen. The manual adds that watching the right edge of the road, rather than the oncoming lights, is how you keep your night vision while the other car passes.",
        trap:
          "Waiting for the other driver to dim first is both discourteous and unlawful. And 500 is the following figure, not the meeting one.",
        excerptKey: "lights-dim-1000-500",
        sourceLabel: "Montana Driver Manual - Chapter 2 Headlights & Tail Lights",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_23",
        topic: "signals",
        question: "A steady red arrow is showing for your movement. What may you do?",
        choices: [
          "Turn after stopping, as with a red ball",
          "Proceed if the way is clear",
          "Stop and remain stopped, except where a turn on red is allowed",
          "Treat it as a flashing red and go when safe",
        ],
        correctIndex: 2,
        explanation:
          "A red arrow means stop and stay stopped for that movement. Montana's turn-on-red allowances still apply where they apply, but the arrow itself grants nothing.",
        context:
          "The two turns Montana permits on a steady red are a right turn onto a two-way street and a left turn from a one-way street onto another one-way street, both after a full stop and both subject to any sign forbidding it. In each case you yield to pedestrians and to traffic in or approaching the intersection.",
        trap:
          "An arrow is more restrictive than a ball, not less. It is easy to read the red arrow as simply a red light.",
        excerptKey: "signal-red-arrow",
        sourceLabel: "Montana Driver Manual - Chapter 3 Vehicle Signals",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_24",
        topic: "rightOfWay",
        question:
          "A car is stopped at a marked crosswalk ahead of you, letting someone cross. What may you do?",
        choices: [
          "Pass it on the left if your lane is clear",
          "Pass it on the right",
          "Sound your horn and wait",
          "Not overtake it - you must wait behind",
        ],
        correctIndex: 3,
        explanation:
          "Montana forbids overtaking a vehicle that is stopped at a crosswalk to let a pedestrian cross. The stopped car is hiding the pedestrian from you, and passing it is how people get hit.",
        context:
          "The rule covers marked and unmarked crosswalks at intersections alike. It sits alongside the flashing pedestrian-actuated device rule: where one of those is flashing and a pedestrian is present, you yield, stop if necessary, and stay stopped until they have crossed.",
        trap:
          "Both sides are wrong here. A clear lane tells you nothing, because the reason the other car stopped is standing where you cannot see.",
        excerptKey: "ped-no-pass-stopped-vehicle",
        sourceLabel: "Montana Driver Manual - Chapter 4 Crosswalks",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_25",
        topic: "emergencies",
        question: "Your car breaks down on a Montana highway. What should you do first?",
        choices: [
          "Stand behind the car and wave traffic around",
          "Get the vehicle off the road and away from traffic if you can, and turn on the emergency flashers",
          "Open the bonnet and start work where you have stopped",
          "Leave the car and walk to the nearest town",
        ],
        correctIndex: 1,
        explanation:
          "Getting the car off the road comes first, then flashers so people can see you. Everything else follows from being out of the traffic lane.",
        context:
          "If you cannot clear the road, stop somewhere with a clear view of you - not just over a hill or round a curve - and put flares out behind the car. The manual is emphatic that you never stand in the roadway and never change a tire if it means being in a traffic lane.",
        trap:
          "Waving traffic around from the road surface puts you in the lane, which is precisely what the manual forbids. Use the shoulder and let flares do that job.",
        excerptKey: "breakdown-flashers",
        sourceLabel: "Montana Driver Manual - Chapter 5 Use Emergency Signals",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_26",
        topic: "parking",
        question: "What does a yellow-painted curb mean in Montana?",
        choices: [
          "No stopping, standing or parking at any time",
          "Loading or unloading only, and you must stay with the vehicle",
          "Passenger pick-up and drop-off only",
          "Permit holders only",
        ],
        correctIndex: 1,
        explanation:
          "Yellow lets you stop just long enough to load or unload, and Montana adds that you must stay with the car while you do it.",
        context:
          "The three-color set is worth learning together: white is stopping only to pick up or drop off passengers, yellow is loading and unloading with the driver present, and red means do not stop, stand or park at all.",
        trap:
          "Yellow is not a short-stay parking bay. Leaving the vehicle is what turns a lawful stop into a parking offense.",
        excerptKey: "park-curb-colors",
        sourceLabel: "Montana Driver Manual - Chapter 4 No Parking Zones",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_27",
        topic: "impairment",
        question:
          "Your passenger has an open can of beer in the front seat while you drive through Montana. What is the position in law?",
        choices: [
          "It is lawful as long as the driver has not been drinking",
          "It is lawful if the passenger is over 21",
          "It is an offense - open containers may not be in the passenger area",
          "It is lawful on a rural road but not in town",
        ],
        correctIndex: 2,
        explanation:
          "Montana bans open alcoholic beverage containers in the passenger area of a vehicle on a highway, whoever is holding one. The driver's own sobriety is beside the point.",
        context:
          "The lawful places for an open container are a locked glove or storage compartment, the trunk, luggage or cargo area, a truck bed, or behind the last upright seat in a vehicle with no trunk. There are exceptions for the living quarters of a camper or motor home and for passengers in a bus, taxi or limousine with a hired driver.",
        trap:
          "It is an offense with a fine of up to $100 that is not recorded against a driving record, which some people read as meaning it does not count. It is still an offense.",
        excerptKey: "open-container-statute",
        sourceLabel: "Montana Code Annotated - 61-8-1026 Unlawful possession of open alcoholic beverage container",
        sourceUrl: mca("61-8-1026"),
      },
      {
        id: "mt_s2_28",
        topic: "signs",
        question: "What does an orange sign or cone in Montana indicate?",
        choices: [
          "A school zone",
          "A hospital or emergency route",
          "A wildlife area",
          "A construction or maintenance work area",
        ],
        correctIndex: 3,
        explanation:
          "Orange is Montana's work zone color, used across signs, barricades, drums, cones, tubes, arrow panels and the vests flaggers wear.",
        context:
          "The devices carry information as well as warning. Diagonal stripes on a barricade slope down towards the side you should pass on: sloping down to the right means bear right. Flaggers in orange use red flags or stop and slow paddles, and their instructions govern.",
        trap:
          "Orange never means school. School signs in Montana are yellow-green or yellow, and school zone fines are doubled under a separate rule from the work zone one.",
        excerptKey: "work-zone-orange",
        sourceLabel: "Montana Driver Manual - Chapter 3 Construction and Maintenance Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_29",
        topic: "rules",
        question:
          "You are the first vehicle at an intersection where the traffic signal has gone completely dark. What do you do?",
        choices: [
          "Proceed, since a dark signal gives no instruction",
          "Treat the intersection as though there were stop signs in all directions",
          "Wait for the signal to come back on",
          "Yield only to traffic on the wider road",
        ],
        correctIndex: 1,
        explanation:
          "Montana's rule for a dead signal is to treat every approach as a stop sign. You stop, and then order of arrival sorts out who goes.",
        context:
          "The manual adds a note of courtesy on top of the rule: the driver who stops first should get to go first. It also warns you to stay cautious even when you are that driver, since not everyone at the intersection will be applying the same rule.",
        trap:
          "\"No instruction\" is not how the law reads a dark signal, and sitting still waiting for power is not the answer either.",
        excerptKey: "signal-dark-intersection",
        sourceLabel: "Montana Driver Manual - Chapter 3 Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "mt_s2_30",
        topic: "licensing",
        question:
          "You pay for a Montana driver license and fail the written test. How many attempts does the receipt cover?",
        choices: [
          "Three attempts within one year",
          "Unlimited attempts within one year",
          "Two attempts within six months",
          "One attempt, after which a new fee is due",
        ],
        correctIndex: 0,
        explanation:
          "A driver license receipt is valid for a year and covers three attempts at all the required examinations within it. It cannot be renewed.",
        context:
          "That makes the year a hard boundary in two directions. Fail three times and you re-apply from the start; let the twelve months run out with the process unfinished and you also re-apply and start over. Given that MVD stations require appointments and Montanans routinely report waits of weeks, three tries is fewer than it sounds.",
        trap:
          "Unlimited retakes is the assumption people bring from other states. Montana caps them per receipt, and the receipt is not renewable.",
        excerptKey: "lic-three-attempts",
        sourceLabel: "Montana Driver Manual - Chapter 1 Fees/Receipts",
        sourceUrl: HB,
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
      "Thirty-five questions pitched where the MVD's written test actually sits: exact distances, the rules that differ from the state next door, and the situations where two plausible answers both look right.",
    questions: [
      {
        id: "mt_s3_01",
        topic: "speed",
        question:
          "A stationary Highway Patrol car has its emergency lights on beside a Montana state highway posted at 70 mph. You cannot change lanes. What speed does the current statute require?",
        choices: [
          "20 mph",
          "50 mph",
          "40 mph",
          "35 mph",
        ],
        correctIndex: 3,
        explanation:
          "On a state highway or county road, if you cannot move lanes, the requirement is half the posted speed limit. Half of 70 is 35.",
        context:
          "Section 61-8-388 sets a grid. On the interstate it is 20 mph below the limit if you can move over, half the limit if you cannot. On a state highway or county road it is 30 mph below if you can move over, half the limit if you cannot. On any other road it is half the limit. A posted temporary limit overrides all of it.",
        trap:
          "The manual still prints the old single rule - 20 mph below the limit on any road posted 50 or more - and it has been overtaken by the statute. Where a number is demanded, the statute is the one that is enforced.",
        excerptKey: "move-over-statute-highway",
        sourceLabel: "Montana Code Annotated - 61-8-388 Approaching stationary emergency vehicle",
        sourceUrl: mca("61-8-388"),
        commonlyMissed: true,
      },
      {
        id: "mt_s3_02",
        topic: "rules",
        question:
          "You are on a Montana two-lane highway at 55 mph and want to overtake. How much clear road does the manual say you need?",
        choices: [
          "About 1600 feet, or a third of a mile",
          "About 400 feet",
          "About half a mile",
          "About 800 feet",
        ],
        correctIndex: 0,
        explanation:
          "Passing at 55 takes about 10 seconds, in which you cover over 800 feet - and so does the car coming the other way. That is why the manual puts the requirement at over 1600 feet, roughly a third of a mile.",
        context:
          "The same third of a mile is the rule for hills and curves. You must be able to see at least that far, and where a crest or bend blocks your view you assume there is an oncoming vehicle just out of sight and do not start the pass.",
        trap:
          "Eight hundred feet is the distance you travel, not the distance you need. Forgetting that the oncoming car is closing at the same rate halves the margin.",
        excerptKey: "passing-1600-feet",
        sourceLabel: "Montana Driver Manual - Chapter 5 Space for Passing",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_03",
        topic: "signs",
        question:
          "You see a diamond sign showing a bridge outline with the road narrowing, and the legend reads that the bridge may be too narrow to meet or pass a truck. What is the difference from the ordinary Narrow Bridge sign?",
        choices: [
          "The ordinary sign means there is still room to meet and pass; this one warns there may not be",
          "The ordinary sign applies only to trucks",
          "This one means the bridge is closed to trucks",
          "There is no difference in meaning",
        ],
        correctIndex: 0,
        explanation:
          "Montana uses two narrow-bridge warnings. The plain one means the bridge is narrower than the road but there is still room to meet and pass. The other warns the bridge may be too narrow for that, and tells you to be careful.",
        context:
          "The third sign in the family is One Lane Bridge, where there is no room to meet or pass at all. On gravel and dirt roads the manual tells you specifically to watch for narrow bridge signs and be ready to stop for oncoming traffic, because those roads often have no shoulder and steep ditches.",
        trap:
          "Two signs that look almost identical mean genuinely different things here, and the difference is whether you can meet an oncoming vehicle on the structure.",
        excerptKey: "sign-narrow-bridge-truck",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_04",
        topic: "safety",
        question:
          "Heavy rain has been falling and you are doing 55 mph on the interstate. What does the manual say about hydroplaning?",
        choices: [
          "Tires keep good traction to about 65 mph",
          "Hydroplaning only happens with standing water more than an inch deep",
          "In heavy rain tires can lose all traction at about 50 mph",
          "Hydroplaning starts at about 25 mph on any wet road",
        ],
        correctIndex: 2,
        explanation:
          "Montana's figures are 35 and 50. On a wet road most tires hold to about 35 mph; in heavy rain they can lose traction entirely at about 50. Bald or worn tires go earlier than that.",
        context:
          "If it happens, the response is counterintuitive: ease off the accelerator, hold the steering straight, and do not try to brake or turn until the tires bite again. Turning while the car is floating is what turns a hydroplane into a spin.",
        trap:
          "Fifty is not a comfortable margin under a 65 or 75 limit - it is below the speed most people would be doing in that rain. Slowing down is the whole defence.",
        excerptKey: "hydroplane-35-50",
        sourceLabel: "Montana Driver Manual - Chapter 5 Water on the Roadway",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_05",
        topic: "rightOfWay",
        question:
          "You are turning left at a green ball with no arrow, and an oncoming car is close enough to be an immediate hazard. Who yields?",
        choices: [
          "The oncoming car, because you are already positioned in the intersection",
          "You yield to the oncoming vehicle",
          "Whoever entered the intersection first",
          "Neither - both should stop",
        ],
        correctIndex: 1,
        explanation:
          "A left turn on a green ball is unprotected. The turning driver yields to any oncoming vehicle within the intersection or close enough to constitute an immediate hazard.",
        context:
          "The statute has a second half people forget. Once you have yielded and are signaling as required, you may make the turn, and drivers approaching from the opposite direction must then yield to you. That is what stops a turning driver being stranded mid-intersection forever.",
        trap:
          "Being in the intersection first does not create priority for a left turn. Waiting with the wheels pointed straight, as the manual advises, keeps a rear-end shunt from pushing you into the oncoming lane.",
        excerptKey: "turn-left-yield-statute",
        sourceLabel: "Montana Code Annotated - 61-8-340 Vehicle turning left at intersection",
        sourceUrl: mca("61-8-340"),
      },
      {
        id: "mt_s3_06",
        topic: "parking",
        question: "How close to a railroad crossing may you park in Montana?",
        choices: ["No closer than 15 feet", "No closer than 30 feet", "No closer than 20 feet", "No closer than 50 feet"],
        correctIndex: 3,
        explanation:
          "Fifty feet from the nearest rail. It is the largest distance on Montana's no-parking list and it is there so a driver approaching the tracks can see down them.",
        context:
          "Parking is only half of the railroad picture. When you are driving, you must stop between the tracks and 15 feet from the nearest rail if signals, gates, stop signs or a watchman indicate a train, or if a train is within 1500 feet or is clearly visible and an obvious hazard.",
        trap:
          "The 15-foot figure is the stopping distance at the crossing, not the parking distance from it. They come from different rules and only one is 50.",
        excerptKey: "park-no-list",
        sourceLabel: "Montana Driver Manual - Chapter 4 No Parking Zones",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_07",
        topic: "sharing",
        question:
          "A two-wheeled motorcycle passes you inside your own lane while traffic is crawling at walking pace. Is that lawful in Montana?",
        choices: [
          "Yes, up to 20 mph, when the traffic being passed is stopped or doing 10 mph or less",
          "No - lane splitting is prohibited in every state",
          "Yes, at any speed, as long as it is safe",
          "Only on an interstate",
        ],
        correctIndex: 0,
        explanation:
          "Montana calls it lane filtering and allows it. The rider may overtake in the same lane when the traffic being passed is stopped or doing 10 mph or less, at no more than 20 mph, on a road with lanes wide enough to pass safely.",
        context:
          "This is one of the rules that most surprises drivers moving to Montana, because the state next door usually forbids it. It also means that in slow traffic a motorcycle appearing beside your door is doing something lawful, so a lane change without a shoulder check is more dangerous here than it looks.",
        trap:
          "\"Lane splitting is illegal everywhere\" is the assumption people bring with them. The manual does not cover this, so a learner reading only the book will not know it.",
        excerptKey: "lane-filtering-statute",
        sourceLabel: "Montana Code Annotated - 61-8-392 Lane filtering for motorcycles",
        sourceUrl: mca("61-8-392"),
        commonlyMissed: true,
      },
      {
        id: "mt_s3_08",
        topic: "signals",
        question:
          "A pedestrian is halfway across the road when the DON'T WALK signal starts flashing. What should happen?",
        choices: [
          "They should turn back to the curb they started from",
          "They should stop where they are and wait on the centerline",
          "They should continue crossing the street",
          "They must run to clear the crosswalk before it turns steady",
        ],
        correctIndex: 2,
        explanation:
          "A flashing DON'T WALK is a warning to people who have not started, not an order to people already in the crosswalk. Anyone already crossing keeps going.",
        context:
          "The signals use symbols as much as words: an upheld orange hand means DON'T WALK and a white walking figure means WALK. A pedestrian facing a steady DON'T WALK, flashing or not, must wait for the WALK before starting out.",
        trap:
          "Turning back is the instinct and it is the wrong one - it puts a pedestrian back into traffic that is now expecting a clear road.",
        excerptKey: "ped-signal-flashing",
        sourceLabel: "Montana Driver Manual - Chapter 3 Pedestrian Signals",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_09",
        topic: "impairment",
        question:
          "How long does the Montana Driver Manual say the average person's body takes to process one alcoholic drink?",
        choices: [
          "About an hour",
          "About two hours",
          "It depends entirely on body weight",
          "About 20 minutes",
        ],
        correctIndex: 0,
        explanation:
          "About an hour per drink. The manual adds the part that catches people: alcohol can still accumulate in your body even if you are drinking at a rate of one drink an hour.",
        context:
          "The manual defines a drink precisely - one and a half ounces of 80-proof spirits, twelve ounces of commercial beer, or five ounces of wine - and warns that microbrews and craft beers often carry more alcohol than a standard commercial beer, and that specialty cocktails can be several drinks in one glass.",
        trap:
          "One an hour is not a safe pace. It is roughly the rate at which the body clears alcohol, and the manual says the level can still climb at that rate.",
        excerptKey: "dui-one-drink-hour",
        sourceLabel: "Montana Driver Manual - Chapter 6 If You Drink, When Can You Drive?",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_10",
        topic: "emergencies",
        question:
          "You come round a bend and a deer is standing in your lane with an oncoming truck approaching. What does the manual advise?",
        choices: [
          "Swerve sharply into the oncoming lane and back",
          "Swerve into the ditch",
          "Brake and hold your lane rather than swerving sharply",
          "Accelerate to pass in front of the animal",
        ],
        correctIndex: 2,
        explanation:
          "Montana's advice is blunt: if there is no time to stop or avoid the animal, do not swerve sharply. Your chance of serious injury drops if you hit the animal rather than swerving into oncoming traffic or rolling into the ditch.",
        context:
          "The state has more of these crashes than most, and the manual pairs the advice with a habit: watch for animals especially at sunrise and sunset, slow down when you see one, and remember that deer and elk move in herds, so one animal means more are close.",
        trap:
          "Swerving feels like the caring answer and it is the one that kills people. The crash you cause avoiding the animal is usually worse than the one you avoid.",
        excerptKey: "animals-do-not-swerve",
        sourceLabel: "Montana Driver Manual - Chapter 5 Wildlife and Other Animals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s3_11",
        topic: "licensing",
        question:
          "Who may supervise a Montana teen driving on a Non-Commercial Learner Permit?",
        choices: [
          "Any licensed driver aged 18 or over",
          "Any passenger with a valid license",
          "A licensed sibling aged 16 or over",
          "A licensed parent, guardian, responsible adult, or a licensed adult driver authorized by them",
        ],
        correctIndex: 3,
        explanation:
          "Montana names the supervisor rather than setting an age alone: a licensed parent, guardian or responsible adult, or a licensed adult driver whom one of those has authorized.",
        context:
          "The permit also requires that supervisor to be in the seat beside the driver, and that everyone in the vehicle is belted. A driver education instructor counts, which is how the traffic education permit works during a course.",
        trap:
          "\"Any licensed adult\" is not enough on its own. Authorisation from the parent, guardian or responsible adult is part of the rule.",
        excerptKey: "lic-gdl-supervisor",
        sourceLabel: "Montana Driver Manual - Chapter 1 GDL Step 1",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_12",
        topic: "rules",
        question:
          "You are approaching a railroad crossing in Montana and the lights start flashing. Where must you stop?",
        choices: [
          "At the crossbuck, whatever its position",
          "As close as practicable but not less than 15 feet from the nearest rail",
          "At least 50 feet from the nearest rail",
          "Anywhere clear of the tracks",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet from the nearest rail is the minimum, and you stop as close as is practicable to that. The rule fires on flashing signals, gates, stop signs or a watchman, or when a train is within 1500 feet or clearly visible and an obvious hazard.",
        context:
          "The manual adds the habits that keep the rule from being needed. Never try to beat a train, never start across until there is room for your car on the far side, do not shift gears on the tracks in case you stall, and at a multi-track crossing wait for a passing train to clear before you go, because another may be hidden behind it.",
        trap:
          "Fifty feet is the parking distance from a crossing, not the stopping distance at one. Only one of the two numbers answers this question.",
        excerptKey: "railroad-stop-15-feet",
        sourceLabel: "Montana Driver Manual - Chapter 3 Railroad Crossing Warning Signs/Signals",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_13",
        topic: "safety",
        question:
          "How far down the road does the Montana manual tell you to look while driving in traffic?",
        choices: [
          "About two seconds ahead",
          "To the vehicle immediately in front",
          "At least 10 seconds ahead",
          "As far as your headlights reach, whatever the hour",
        ],
        correctIndex: 2,
        explanation:
          "Ten seconds. In town that is about one block; on the highway it is roughly four city blocks, or a quarter of a mile.",
        context:
          "The point is time to react without braking hard. The manual gives you a way to check it: pick a fixed object, count until you reach it, and the number of seconds you counted is how far ahead you were looking. Looking well ahead also steadies your steering and saves fuel.",
        trap:
          "Two seconds is roughly the following distance question, not the scanning question. Ten seconds is much further ahead than most drivers actually look.",
        excerptKey: "scan-ten-seconds",
        sourceLabel: "Montana Driver Manual - Chapter 5 Look Ahead",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_14",
        topic: "signs",
        question:
          "A yellow diamond shows two arrows curving in opposite directions. What is the road doing?",
        choices: [
          "Curving to the right and then the left",
          "Splitting into a divided highway",
          "Winding through a series of turns and curves",
          "Turning sharply to the right, then the left",
        ],
        correctIndex: 0,
        explanation:
          "Two opposing curved arrows mark a right curve followed by a left curve. Montana distinguishes a curve from a turn: a turn sign shows a sharper change of direction.",
        context:
          "The family is worth learning as a set: Sharp Right Turn for a single sharp change, Sharp Left and Right Turn for a sharp pair, Right and Left Curves for gentler ones, and Winding Road for a whole series of them. A curve sign may carry a suggested safe speed underneath.",
        trap:
          "Turn and curve are not interchangeable words on Montana signs, and Winding Road means a series rather than a pair.",
        excerptKey: "sign-winding-road",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_15",
        topic: "speed",
        question:
          "You are doing 8 mph over the limit on a Montana two-lane highway in daylight and are ticketed. What happens to your record?",
        choices: [
          "Two points and an insurance surcharge",
          "The violation may not be recorded against your driving record, and insurers may not use it",
          "A mandatory 30-day suspension",
          "Nothing at all - a warning is issued instead",
        ],
        correctIndex: 1,
        explanation:
          "Montana keeps small speeding violations off the record. Exceed the limit by no more than 10 mph in the daytime, or 5 mph at night, and it may not be recorded against your driving record or used by an insurer.",
        context:
          "You still pay: the fine schedule starts at $20 for 1 to 10 over on most roads and $40 on the interstate, rising to $200 for 31 or more over. The exemption has a ceiling as well - break 90 mph on the interstate and the violation goes on the record and can be used by your insurer.",
        trap:
          "Not recorded is not the same as not an offense. And the daytime and night thresholds differ, so 8 over at 11 p.m. is a different matter.",
        excerptKey: "speed-fine-not-recorded",
        sourceLabel: "Montana Code Annotated - 61-8-725 Penalty for violation of speed limits",
        sourceUrl: mca("61-8-725"),
        commonlyMissed: true,
      },
      {
        id: "mt_s3_16",
        topic: "rightOfWay",
        question:
          "A funeral procession is passing through an intersection against a red light. You are on the cross street with a green. What may you do?",
        choices: [
          "Proceed, since your light is green",
          "Enter only if you can do so without crossing the path of the procession",
          "Join the end of the procession to get through",
          "Pass the procession on its right on a multi-lane road",
        ],
        correctIndex: 1,
        explanation:
          "Montana gives a funeral procession the right of way once its lead vehicle has lawfully entered. You may not enter the intersection in a way that crosses its path, green light or not.",
        context:
          "The other rules of the procession run in the same direction. You may not drive between the vehicles forming it unless a police officer authorises it or you are in an emergency vehicle, you may not join it to gain its right of way, and you may not pass it on the right on a multi-lane highway unless it is in the farthest left lane.",
        trap:
          "A green light normally settles the question and here it does not. This is one of the few places Montana lets a private procession override a signal.",
        excerptKey: "funeral-procession-yield",
        sourceLabel: "Montana Driver Manual - Chapter 4 Funeral Procession",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_17",
        topic: "parking",
        question:
          "You have parked on the shoulder of a Montana highway after dark. What does the manual require?",
        choices: [
          "Nothing extra, if you are clear of the travelled way",
          "Hazard lights flashing continuously",
          "Front and rear lights visible for 500 feet, with headlights dimmed if they are on",
          "The interior light on so you can be seen",
        ],
        correctIndex: 2,
        explanation:
          "A vehicle parked on a roadway or shoulder during hours of darkness must show front and rear lights visible for 500 feet, and any headlights that are on must be dimmed.",
        context:
          "The 500-foot figure is the same one used for parking lights generally: white or amber to the front, red to the rear, visible for 500 feet, during the hours headlights are required. The manual separately warns that you should never drive on parking lights, because oncoming traffic reads them as a stopped car.",
        trap:
          "Being off the travelled way does not remove the lighting duty, and leaving high beams on is worse than useless to an approaching driver.",
        excerptKey: "park-lights-at-night",
        sourceLabel: "Montana Driver Manual - Chapter 4 Parking",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_18",
        topic: "sharing",
        question:
          "When may cyclists in Montana lawfully ride two abreast on a roadway?",
        choices: [
          "Never on a public road",
          "Only inside city limits",
          "Only when there is no traffic behind them",
          "On a paved shoulder or parking lane, or within a single lane on a road with at least two lanes each way if they do not impede traffic",
        ],
        correctIndex: 3,
        explanation:
          "Single file is the default, with named exceptions. Riders may go two abreast on a paved shoulder or a parking lane, and within one lane on a road with two or more lanes in each direction provided they do not hold traffic up more than they would riding single file.",
        context:
          "The other exceptions to single file are riding on a bike path or a part of the road set aside for bicycles, and overtaking another bicycle. Riders must otherwise keep as near to the right as practicable, with exceptions for passing, turning left, and avoiding hazards including parked cars whose doors may open.",
        trap:
          "Two abreast is not automatically an offense, and it is not simply a matter of whether traffic is behind. The exceptions turn on where they are riding.",
        excerptKey: "bike-single-file",
        sourceLabel: "Montana Driver Manual - Chapter 4 Bicyclists & Motorists",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_19",
        topic: "signals",
        question:
          "You are entering a one-way street from another one-way street and the light is a steady red. What does Montana allow?",
        choices: [
          "A left turn after a complete stop, unless a sign prohibits it",
          "No turn at all on red",
          "A left turn without stopping if the way is clear",
          "A left turn only when a green arrow shows",
        ],
        correctIndex: 0,
        explanation:
          "Montana permits a left on red from a one-way street onto another one-way street, on exactly the same terms as a right on red: full stop first, no prohibiting sign, and yield to everyone.",
        context:
          "The statute spells out the yielding. After stopping you give way to any vehicle in the intersection or approaching close enough to be an immediate hazard, and to pedestrians in the intersection or in an adjacent crosswalk.",
        trap:
          "Both streets have to be one-way. A left on red onto a two-way street is not permitted, and the stop is not optional in either case.",
        excerptKey: "signal-left-on-red",
        sourceLabel: "Montana Driver Manual - Chapter 3 Vehicle Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s3_20",
        topic: "safety",
        question:
          "The road ahead is covered in packed snow. By how much does the manual say you should cut your speed?",
        choices: [
          "To a crawl",
          "By about 10 mph",
          "By about a quarter",
          "By half",
        ],
        correctIndex: 3,
        explanation:
          "Packed snow means cutting your speed in half. Wet pavement calls for about 10 mph less, and ice calls for slowing to a crawl.",
        context:
          "The manual pairs those figures with where slick patches hide: shady spots on cold wet days freeze first and dry last, bridges and overpasses ice up when the surrounding pavement does not, and ice near freezing is slipperier than ice well below it. Studded tires are one answer, but they are prohibited from 1 June through 30 September.",
        trap:
          "Three different surfaces, three different reductions. Applying the wet-road figure to packed snow leaves you going roughly twice as fast as the manual allows.",
        excerptKey: "weather-wet-snow-ice",
        sourceLabel: "Montana Driver Manual - Chapter 5 Slippery Roads",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "mt_s3_21",
        topic: "licensing",
        question:
          "You move to Montana with a valid license from another state. How long may you keep driving on it?",
        choices: [
          "30 consecutive days",
          "90 days",
          "Six months",
          "60 consecutive days",
        ],
        correctIndex: 3,
        explanation:
          "Sixty consecutive days for an ordinary license. After that you surrender the out-of-state license and qualify for a Montana one. Commercial license holders get 30 days.",
        context:
          "An out-of-state driver who brings a valid, in-date license with them to the counter can usually exchange it without a written or road test. Without the physical license, or where the applicant may lack the functional ability to drive safely, MVD can require both tests.",
        trap:
          "Sixty days runs from establishing residence, not from when the old license expires, and it is 30 rather than 60 if the license is commercial.",
        excerptKey: "lic-new-residents-60",
        sourceLabel: "Montana Driver Manual - Chapter 1 Driver Licensing Quick Reference",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_22",
        topic: "emergencies",
        question:
          "Your right-hand wheels drop off the pavement onto a soft Montana shoulder at speed. What does the manual tell you to do?",
        choices: [
          "Brake hard immediately and steer back onto the road",
          "Accelerate and turn back onto the pavement quickly",
          "Ease off the accelerator, steer parallel to the road, and come back on when you have slowed",
          "Steer into the ditch to scrub off speed",
        ],
        correctIndex: 2,
        explanation:
          "Off the accelerator, keep the car straight and parallel to the road, and only ease back onto the pavement once you have slowed. Then brake once you are back on.",
        context:
          "The manual describes exactly what goes wrong: panicked drivers over-steer, shoot across the road and either hit something head-on or roll off the far side. It also says to steer back on with a small left quarter turn and to stay in your lane once you arrive.",
        trap:
          "Yanking the wheel is the reflex and it is the crash. Braking hard on a soft shoulder does much the same thing.",
        excerptKey: "emerg-off-pavement",
        sourceLabel: "Montana Driver Manual - Chapter 7 Drift or Run off the Road",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_23",
        topic: "rules",
        question:
          "Traffic is heavy and the intersection ahead is backed up, but your light is green. What does Montana require?",
        choices: [
          "Enter anyway - a green light is permission",
          "Wait until you can clear the intersection without stopping in it",
          "Enter and stop, so you hold your place",
          "Sound your horn and follow the car ahead",
        ],
        correctIndex: 1,
        explanation:
          "You may not enter an intersection unless you can get through without having to stop in it. A green light does not change that, and blocking the box is a ticketable offense.",
        context:
          "The reason is what happens when the cross street gets its green: you are still sitting in the middle of it. Montana pairs the rule with the crossing advice - when you turn left across traffic, look at the street you are turning into first, so you do not end up stranded in the oncoming lane.",
        trap:
          "Holding your place in the queue is exactly what the rule forbids. The green permits movement, not occupation.",
        excerptKey: "cross-do-not-block",
        sourceLabel: "Montana Driver Manual - Chapter 5 Space to Cross or Enter",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_24",
        topic: "impairment",
        question:
          "What did Montana's own manual say the number one killer on the state's roads is?",
        choices: [
          "Winter weather",
          "Excessive speed",
          "Poor road conditions",
          "Drunk drivers",
        ],
        correctIndex: 3,
        explanation:
          "The manual's Report A Drunk Driver section calls impaired driving Montana's number one killer, and its own chapter quiz asks the question in those terms.",
        context:
          "The figures behind it are in the same section: nationally over 23,000 deaths a year are attributed to drinking drivers, and in Montana the manual puts half of all traffic fatalities as alcohol related, with over 2,100 injuries. The reporting line is 1-800-525-5555 and callers need not give a name.",
        trap:
          "Speed and winter conditions are both plausible for a state like this, and neither is the answer the manual gives.",
        excerptKey: "dui-40-percent",
        sourceLabel: "Montana Driver Manual - Chapter 6 Report a Drunk Driver",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_25",
        topic: "signs",
        question:
          "A regulatory sign reads PASS WITH CARE. What has just happened?",
        choices: [
          "A no-passing zone has ended and passing is allowed again with care",
          "You are entering a no-passing zone",
          "Passing is permitted only for slow vehicles",
          "A passing lane is about to begin",
        ],
        correctIndex: 0,
        explanation:
          "PASS WITH CARE marks the end of a restriction: once you are past the sign you may again pass other vehicles, carefully.",
        context:
          "Its counterpart is DO NOT PASS, which forbids overtaking anything going your way for the length of that stretch. Both are regulatory signs, black on white, and they work alongside the pavement markings rather than instead of them.",
        trap:
          "It reads like a caution and it is a permission. Mistaking it for a warning means sitting behind a slow vehicle in the one place you were allowed past.",
        excerptKey: "sign-pass-with-care",
        sourceLabel: "Montana Driver Manual - Chapter 3 Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_26",
        topic: "speed",
        question:
          "Under Montana law, what does daytime mean for the purposes of the two-lane speed limit?",
        choices: [
          "Sunrise to sunset",
          "6:00 a.m. to 8:00 p.m.",
          "From one-half hour before sunrise to one-half hour after sunset",
          "Whenever headlights are not required",
        ],
        correctIndex: 2,
        explanation:
          "Montana defines daytime as running from half an hour before sunrise to half an hour after sunset. Nighttime is any other hour, and the lower two-lane limit applies then.",
        context:
          "The definition is the mirror image of the headlight rule, which requires lights from half an hour after sunset to half an hour before sunrise. In practice the two rules leave a half-hour band at each end of the day where the daytime speed limit still applies and headlights are not yet required.",
        trap:
          "Sunset is the intuitive boundary and it is not the legal one. The extra half hour on each side is what makes the difference between 70 and 65 on a two-lane road.",
        excerptKey: "speed-statute-daytime",
        sourceLabel: "Montana Code Annotated - 61-8-303 Speed restrictions",
        sourceUrl: mca("61-8-303"),
        commonlyMissed: true,
      },
      {
        id: "mt_s3_27",
        topic: "rightOfWay",
        question:
          "A pedestrian with a white cane steps towards the roadway ahead of you. What does the manual say?",
        choices: [
          "Sound the horn to alert them",
          "They have absolute right of way, and you should not use the horn",
          "They must yield outside a crosswalk like anyone else",
          "Flash your headlights and proceed slowly",
        ],
        correctIndex: 1,
        explanation:
          "Montana gives a pedestrian using a white cane or a guide dog absolute right of way, and specifically tells drivers not to use the horn, because it can confuse or frighten them.",
        context:
          "The statute states the same duty without the qualifier - the operator of a vehicle shall yield to a blind pedestrian carrying a visible white cane or accompanied by a guide dog. It is one of the few places Montana uses the word absolute about a right of way.",
        trap:
          "The horn feels helpful and is exactly wrong here. A blind pedestrian is navigating by sound, and a horn removes the information they are using.",
        excerptKey: "ped-white-cane-absolute",
        sourceLabel: "Montana Driver Manual - Chapter 4 Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_28",
        topic: "safety",
        question:
          "Your car has anti-lock brakes and you must stop as fast as possible. What should you do?",
        choices: [
          "Pump the pedal steadily",
          "Press hard and release the moment you feel the pedal pulse",
          "Press the pedal as hard as you can and keep pressing",
          "Brake and steer at the same time to shed speed",
        ],
        correctIndex: 2,
        explanation:
          "With ABS you press hard and hold. The pedal pushing back is the system working, and letting up stops it working - ABS only functions while the pedal is down.",
        context:
          "Without ABS the technique reverses: brake as hard as you can without locking up, and if the wheels do lock and the car starts to skid, release quickly and reapply. ABS also lets you steer while braking hard, which is why the manual treats turning as a real option in an emergency.",
        trap:
          "Pumping is the pre-ABS technique and it defeats the system. The pulsing pedal is designed to feel alarming and is not a fault.",
        excerptKey: "emerg-abs-braking",
        sourceLabel: "Montana Driver Manual - Chapter 7 Stopping Quickly",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_29",
        topic: "parking",
        question:
          "You are parallel parking and there is a car in front of the space. Where does the manual say to line up before reversing?",
        choices: [
          "About two feet out, with your rear bumper aligned with that car's rear bumper",
          "Touching the curb, level with that car's front bumper",
          "About four feet out, level with the middle of that car",
          "Directly behind the space with wheels straight",
        ],
        correctIndex: 0,
        explanation:
          "Pull alongside the car ahead of the space, about two feet away from it, with your rear bumper level with its rear bumper. That is the position the rest of the maneuver is built on.",
        context:
          "From there the manual takes you through it: reverse slowly until your front is level with that car's front door, turn hard right and reverse to about 45 degrees, then as your front clears its rear, turn hard left and back into the space, straightening as you pull forward. Signal your intention first.",
        trap:
          "Starting too close or too far out is what makes the rest of the maneuver fail. Montana learners consistently name parallel parking as the part of the road test that catches them.",
        excerptKey: "park-parallel-steps",
        sourceLabel: "Montana Driver Manual - Chapter 4 Parallel Parking",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_30",
        topic: "sharing",
        question:
          "You are on a rural Montana road and come upon a rider leading a horse along the shoulder. What does the law require?",
        choices: [
          "Sound the horn so the rider knows you are there",
          "Pass at normal speed, staying in your lane",
          "Drive at a reasonable speed and a reasonable distance away, and do not sound the horn",
          "Stop and wait until the horse is out of sight",
        ],
        correctIndex: 2,
        explanation:
          "Montana requires due care around a horse being ridden or led: reasonable speed, reasonable distance, and it is illegal to sound your horn approaching or passing one.",
        context:
          "The wider rule gives right of way to any animal someone is leading, riding or driving. If the animal is coming towards you or crossing your path, stop and let it pass; if it is going your way, leave plenty of room; and if it looks frightened, pull over and stop until it is safe.",
        trap:
          "The horn is not a courtesy here - it is specifically unlawful. Startling a horse on a road is how a rider ends up under a car.",
        excerptKey: "animals-no-horn",
        sourceLabel: "Montana Driver Manual - Chapter 5 Horseback Riders",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_31",
        topic: "signals",
        question:
          "You are on a road marked with a double-dashed yellow lane and see a steady yellow X above it. What does that mean?",
        choices: [
          "The lane is closed to all traffic",
          "The lane is for turning only",
          "The lane's use is changing and you should move out of it as soon as it is safe",
          "You may use the lane at reduced speed",
        ],
        correctIndex: 2,
        explanation:
          "A steady yellow X over a reversible lane means the direction of that lane is about to change. You move out of it as soon as it is safe to do so.",
        context:
          "The overhead signals for a reversible lane form a set: a green arrow means the lane is yours, a red X means it is not, a flashing yellow X means the lane is for turning only, and a steady yellow X means the use is changing.",
        trap:
          "A flashing yellow X and a steady yellow X mean different things, and only the steady one is the get-out-now signal.",
        excerptKey: "marking-reversible-lanes",
        sourceLabel: "Montana Driver Manual - Chapter 3 Other Lane Controls",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_32",
        topic: "rules",
        question:
          "You reach a red light in the left lane and realize you want to turn right. What does the manual tell you to do?",
        choices: [
          "Signal right and change lanes while stopped at the light",
          "Make the right turn from the left lane if no one is beside you",
          "Reverse and change lanes",
          "Drive on to the next intersection, get into the proper lane, and turn there",
        ],
        correctIndex: 3,
        explanation:
          "Montana's answer is to carry on and turn at the next intersection from the correct lane. Cutting across at the last moment is the maneuver the rule exists to prevent.",
        context:
          "The manual gives the same instruction for approaching a turn in the wrong lane or forgetting to signal: proceed, get into the proper lane, go on to the next intersection, signal, and turn there. Underneath it sits the general rule that no vehicle may be turned unless it is in the proper lane and it is safe.",
        trap:
          "\"If no one is beside you\" is the trap, because the turn on red is only permitted from the proper lane in the first place. Reversing at a light is an offense in its own right.",
        excerptKey: "turn-wrong-lane",
        sourceLabel: "Montana Driver Manual - Chapter 4 General Driving",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_33",
        topic: "licensing",
        question:
          "What does a parent or guardian accept by signing the consent form for a Montana driver under 18?",
        choices: [
          "Financial responsibility for any damage resulting from the minor's operation of a motor vehicle",
          "Responsibility for supervising every hour of driving personally",
          "Confirmation that the minor has completed driver education",
          "An obligation to insure the vehicle in their own name",
        ],
        correctIndex: 0,
        explanation:
          "The signature is a financial undertaking. It obligates the parent, guardian or responsible adult to accept responsibility for any damage the minor causes driving.",
        context:
          "That consent form must be signed before testing may begin, so it comes before the written test rather than after it. It is one of the documents an under-18 applicant brings to the appointment alongside proof of identity, residency and authorized presence.",
        trap:
          "It is not a certificate that the teen took a course, and it is not a supervision promise. It is liability.",
        excerptKey: "lic-nclp-financial-responsibility",
        sourceLabel: "Montana Driver Manual - Chapter 1 Non-Commercial Learner Permit",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_34",
        topic: "emergencies",
        question:
          "You arrive at a crash where someone is bleeding heavily and the ambulance has not arrived. What does the manual tell you to do?",
        choices: [
          "Give them water while you wait",
          "Move them to the verge so they are out of traffic",
          "Apply direct pressure to the wound with your hand or a cloth",
          "Raise the limb and wait without touching the wound",
        ],
        correctIndex: 2,
        explanation:
          "Direct pressure on the wound, with your hand or a cloth. The manual says even severe bleeding can almost always be stopped or slowed that way.",
        context:
          "The rest of its sequence: make sure police and medical help have been called, help anyone who is not already walking and talking, check breathing then bleeding, do not move an injured person unless the car is burning or there is other immediate danger, and cover them to keep them warm against shock.",
        trap:
          "Giving an injured person a drink and moving them both feel like help and both make things worse. Not even water, the manual says.",
        excerptKey: "crash-bleeding",
        sourceLabel: "Montana Driver Manual - Chapter 7 If someone is injured",
        sourceUrl: HB,
      },
      {
        id: "mt_s3_35",
        topic: "signs",
        question:
          "A yellow sign shows a truck on a steep downward slope. What should you do?",
        choices: [
          "Speed up to maintain momentum",
          "Check your brakes and consider shifting into a lower gear",
          "Change lanes to the left",
          "Stop and wait for the road to clear",
        ],
        correctIndex: 1,
        explanation:
          "The hill sign warns of a steep grade ahead. Montana's advice is to check your brakes and be ready to shift down, because riding the brakes all the way down a long grade is how they fade.",
        context:
          "The manual groups this with the other road-condition warnings - loose gravel, slippery when wet, icy road - all of which ask for a speed adjustment rather than a maneuver. Mountain driving in Montana makes the grade warning a working sign rather than a formality.",
        trap:
          "Momentum is not a strategy on a long descent. The point of the sign is that you will need braking left when you reach the bottom.",
        excerptKey: "sign-hill",
        sourceLabel: "Montana Driver Manual - Chapter 3 Warning Signs",
        sourceUrl: HB,
      },
    ],
  },
];
