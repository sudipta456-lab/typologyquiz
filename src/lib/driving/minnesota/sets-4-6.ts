import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets 1 to 3: the Minnesota Driver's Manual,
// June 2026 edition, published by DVS at assets.dps.mn.gov, with Minnesota
// Statutes chapter 169 supplying the numbers the manual states incompletely
// (the freeway speed limits, the hands-free prohibition, the work-zone speed
// adjustment and the seat belt fine).
//
// Set 5 is aimed at what Minnesota actually tests rather than what is easiest
// to write. Reddit was unreachable from this environment, so the "what is
// tested" evidence is stronger than usual instead of weaker: Minnesota
// Statutes section 171.13, subdivision 1, LISTS the subjects the knowledge
// test must cover, and DVS publishes its own 25-question Class D practice test
// with a chapter pointer under every item. Set 5 is built on the intersection
// of the two - railroad crossing safety, slow-moving vehicle safety, school
// bus lights and stop arm, bicycle law, carbon monoxide, work zones and the
// DWI penalty ladder - plus the Minnesota-only geometry (J-turns, zipper
// merges, bus shoulders, diverging diamonds) and the distance numbers the
// manual prints and people mix up. See docs/driving/research/minnesota.md.
//
// Set 6 runs 30 questions with no scaffolding beyond the standard fields,
// mirroring the 40-question shape of the real Class D test across all eight
// chapters.
//
// Page anchors are PDF pages: the printed page number plus three.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads DVS's own
// wording on the state's site.
const HB = "https://assets.dps.mn.gov/files/dvs/dvs-class-d-drivers-manual-english.pdf";
const pg = (n: number) => `${HB}#page=${n}`;
const STAT = (s: string) => `https://www.revisor.mn.gov/statutes/cite/${s}`;

export const minnesotaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "A second exam-level set weighted toward the chapters people skim: vehicle equipment, freeway driving, licensing paperwork, trailers and loads, and the signs that are not stop signs.",
    questions: [
      {
        id: "mn_s4_01",
        topic: "safety",
        question: "Your tires are worn. At what tread depth does Minnesota treat a tire as illegal?",
        choices: [
          "Less than one-sixteenth of an inch",
          "Less than one-eighth of an inch",
          "Less than one-quarter of an inch",
          "Less than one-thirty-second of an inch",
        ],
        correctIndex: 0,
        explanation:
          "Minnesota's legal minimum is one-sixteenth of an inch of tread. Below that the tire is unlawful to use on a public road, whatever it looks like from the side.",
        context:
          "The manual's vehicle chapter treats tires as a legal requirement rather than a maintenance suggestion. It also tells you to set pressure from the sticker inside the driver's door or the owner's manual, not from the number molded into the tire's sidewall, because the sidewall figure is the tire's maximum rather than the vehicle's recommendation.",
        trap:
          "One-thirty-second of an inch is the depth of a penny test line people quote from memory. Minnesota's figure is twice that.",
        excerptKey: "tire-tread",
        sourceLabel: "Minnesota Driver's Manual - Chapter 2: Tires",
        sourceUrl: pg(27),
      },
      {
        id: "mn_s4_02",
        topic: "signals",
        question:
          "You are approaching an overhead lane signal showing a steady yellow X above your lane. What is it telling you?",
        choices: [
          "The lane is reserved for left turns from both directions",
          "Slow down but stay in the lane",
          "Traffic in that lane has the right of way",
          "Prepare to move safely out of that lane",
        ],
        correctIndex: 3,
        explanation:
          "A steady yellow X is the warning stage of a lane closure. The lane is about to go to a steady red X, so you move out of it while you still have room.",
        context:
          "Minnesota uses three lane-control signals over individual lanes. A green arrow means the lane is open to you, a steady yellow X means a change is coming and you should leave, and a steady red X means you may not be in that lane at all. A separate flashing yellow X means the lane below it is available for left turns, shared with left-turning traffic coming the other way.",
        trap:
          "The flashing yellow X is the shared left-turn signal. The steady one is not an invitation to turn; it is a countdown to a closed lane.",
        excerptKey: "lane-signal-flashing-yellow-x",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Lane use control signals",
        sourceUrl: pg(71),
      },
      {
        id: "mn_s4_03",
        topic: "licensing",
        question:
          "You move to Minnesota from another state. How long do you have to get a Minnesota driver's license?",
        choices: ["30 days", "60 days", "90 days", "6 months"],
        correctIndex: 1,
        explanation:
          "A new Minnesota resident has 60 days to get a Minnesota license or permit. Commercial drivers get 30 days rather than 60.",
        context:
          "Vehicle registration follows the same clock: you have up to 60 days after becoming a resident to register your vehicle here. The manual treats residency, not the length of your visit, as the trigger, so a person who moves in and keeps an out-of-state license past the deadline is unlicensed in Minnesota even though the out-of-state license is still valid where it was issued.",
        trap:
          "The 30-day figure in this area belongs to commercial drivers and to reporting a name or address change. For an ordinary new resident the number is 60.",
        excerptKey: "register-60-days",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Registering your vehicle",
        sourceUrl: pg(43),
      },
      {
        id: "mn_s4_04",
        topic: "rules",
        question:
          "You are behind a slow vehicle on a two-lane road and want to pass. How far ahead must you be able to see clearly?",
        choices: ["At least 300 feet", "At least 500 feet", "At least 700 feet", "At least 1,000 feet"],
        correctIndex: 2,
        explanation:
          "Minnesota tells you not to pass on a curve or hill unless you can see the road ahead clearly for at least 700 feet. Anything less and you cannot know what is coming.",
        context:
          "The manual's do-not-pass list has two parts that both use distances. You may not pass where your view is under 700 feet, and you may not pass within 100 feet of an intersection, underpass, tunnel or railroad crossing. Once you have passed, you must be back on the right side of the road before you come within 100 feet of an oncoming vehicle.",
        trap:
          "The 1,000-foot figure belongs to U-turns near hills and curves, and to the low-beam rule for oncoming traffic. The passing sight distance is 700 feet.",
        excerptKey: "do-not-pass-700",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Passing",
        sourceUrl: pg(37),
        commonlyMissed: true,
      },
      {
        id: "mn_s4_05",
        topic: "safety",
        question:
          "You are following another vehicle 150 feet behind it at night. What must your headlights be doing?",
        choices: [
          "They may stay on high beam because you are behind, not oncoming",
          "They may stay on high beam until you close to 100 feet",
          "They must be on low beam",
          "They must be switched to parking lights",
        ],
        correctIndex: 2,
        explanation:
          "Minnesota requires low beams whenever you are following another vehicle at 200 feet or less. At 150 feet you are inside that, so the high beams come down.",
        context:
          "There are two low-beam triggers and they use different numbers. Within 1,000 feet of an oncoming vehicle, and within 200 feet when following, your lights must be on low beam. High beams themselves must light the road at least 350 feet ahead, which is also roughly the distance you should be able to stop within when using them.",
        trap:
          "People remember the 1,000-foot oncoming figure and apply it to following. Following has its own, much shorter number.",
        excerptKey: "low-beam-distances",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Headlights",
        sourceUrl: pg(76),
      },
      {
        id: "mn_s4_06",
        topic: "parking",
        question:
          "You have parked facing uphill on a street with a curb. Which way should your front wheels point?",
        choices: [
          "Away from the curb",
          "Toward the curb",
          "Straight ahead, with the parking brake set",
          "It does not matter as long as the parking brake is set",
        ],
        correctIndex: 0,
        explanation:
          "Uphill with a curb, the wheels turn away from the curb. If the car rolls back, the front tire catches the curb instead of rolling into the street.",
        context:
          "Minnesota gives three hill-parking positions and each one aims the car at something solid. Downhill, wheels turn toward the curb or shoulder. Uphill with a curb, wheels turn away from it. Uphill with no curb, wheels turn toward the shoulder, so a runaway car leaves the roadway rather than crossing it.",
        trap:
          "Downhill and uphill are opposites here, and the no-curb case flips the uphill answer back again. Working out which surface catches the car is more reliable than memorizing three directions.",
        excerptKey: "hill-parking-uphill-curb",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Parking on a hill",
        sourceUrl: pg(39),
      },
      {
        id: "mn_s4_07",
        topic: "sharing",
        question:
          "A commercial truck is traveling in front of you. Roughly how far back can the driver fail to see you?",
        choices: [
          "Up to 50 feet behind the trailer",
          "Up to 100 feet behind the trailer",
          "There is no blind spot directly behind a trailer",
          "Up to 200 feet behind the trailer",
        ],
        correctIndex: 3,
        explanation:
          "A truck's rear blind spot can run up to 200 feet behind the trailer. If you sit in it, the driver has no way of knowing you are there.",
        context:
          "The manual describes four no-zones: up to 20 feet in front of the cab, a strip on either side of the trailer, and up to 200 feet to the rear. It follows from that geometry that if you cannot see the driver's face in the truck's side mirror, the driver cannot see you. Trucks also swing wide to make right turns, so passing one on the right as it slows is a serious risk.",
        trap:
          "The rear blind spot is far longer than most drivers guess. Two hundred feet is most of a city block, not a car length or two.",
        excerptKey: "truck-no-zones",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Following a commercial vehicle",
        sourceUrl: pg(55),
      },
      {
        id: "mn_s4_08",
        topic: "emergencies",
        question:
          "Your brake pedal sinks all the way to the floor while you are driving. What should you try first?",
        choices: [
          "Pull the parking brake up hard and fast",
          "Shift straight into reverse",
          "Pump the pedal to build pressure",
          "Turn off the ignition to slow the engine",
        ],
        correctIndex: 2,
        explanation:
          "Pumping the pedal can rebuild enough hydraulic pressure to stop the car. Only if that fails do you go to the parking brake, and then slowly.",
        context:
          "The manual's order matters as much as the actions. Pump first, then apply the emergency or parking brake gradually, because applying it abruptly can throw the vehicle into a skid. Turning off the ignition is dangerous in its own way: it can lock the steering and kill the power assist you still need.",
        trap:
          "Yanking the parking brake feels decisive and is the wrong first move. It is the backup, and it must be applied slowly.",
        excerptKey: "brake-failure",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Brake failure",
        sourceUrl: pg(87),
      },
      {
        id: "mn_s4_09",
        topic: "signs",
        question:
          "You see a yellow sign showing a road joining yours from the right at an angle. What is it telling you?",
        choices: [
          "Traffic may enter from your right, so watch for vehicles joining",
          "You must yield to all traffic on the side road",
          "The road ahead splits into two one-way roads",
          "The right lane is about to end",
        ],
        correctIndex: 0,
        explanation:
          "It is a side road warning sign. It tells you traffic is coming from your right and you should watch for vehicles entering the roadway.",
        context:
          "Yellow diamond signs warn; they do not assign right of way. A side road sign, a T-intersection sign and a curve sign all describe geometry you are about to meet. If a yellow sign carries a speed figure below it, that figure is the safe speed for the feature, and you slow to it.",
        trap:
          "A warning sign is not a yield sign. Unless a yield or stop sign is posted, the ordinary right-of-way rules still apply at that junction.",
        excerptKey: "side-road-sign",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Intersection warning signs",
        sourceUrl: pg(64),
      },
      {
        id: "mn_s4_10",
        topic: "rules",
        question:
          "You are towing a camper on a Minnesota highway. What following distance does the manual require?",
        choices: ["At least 200 feet", "At least 300 feet", "At least 500 feet", "The usual three seconds"],
        correctIndex: 2,
        explanation:
          "Pulling a camper or trailer, you must keep at least 500 feet between you and the vehicle ahead. It is a fixed distance, not a time count.",
        context:
          "Towing changes several numbers at once. The following distance becomes 500 feet, any trailer with a gross vehicle weight of 3,000 pounds or more must have brakes of its own, and the manual tells you to lengthen your following count to four or five seconds whenever the vehicle is longer than standard or the road is poor.",
        trap:
          "The three-second rule is the baseline for an ordinary car in good conditions. A trailer replaces it with a specific 500-foot requirement.",
        excerptKey: "trailer-brakes-3000",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Trailer requirements",
        sourceUrl: pg(83),
      },
      {
        id: "mn_s4_11",
        topic: "impairment",
        question:
          "A driver has been drinking coffee and has taken a cold shower after several drinks. What has that done to their alcohol concentration?",
        choices: [
          "It has lowered it slightly",
          "It has lowered it enough to be safe to drive",
          "It has raised it, because caffeine slows elimination",
          "Nothing - only time reduces it",
        ],
        correctIndex: 3,
        explanation:
          "Coffee, exercise and cold showers do not change the rate at which alcohol leaves the body. Waiting is the only thing that lowers the number.",
        context:
          "The manual puts the elimination rate at roughly one drink per hour, with many factors affecting how much alcohol is retained. It also treats a 12-ounce beer, a 5-ounce glass of wine, a typical mixed drink and a 9-ounce wine cooler as containing about the same amount of alcohol, which is why counting drinks by container size misleads people.",
        trap:
          "Feeling more alert is not the same as being less impaired. Caffeine changes how sleepy you feel and nothing about your blood alcohol.",
        excerptKey: "coffee-no-help",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Things to know about alcohol",
        sourceUrl: pg(95),
      },
      {
        id: "mn_s4_12",
        topic: "licensing",
        question:
          "Your Minnesota license expired two years ago and you want to drive again. What does DVS require?",
        choices: [
          "A vision test only",
          "A written test and a vision test",
          "A written test, a vision test and a road test",
          "Nothing beyond paying the renewal fee",
        ],
        correctIndex: 1,
        explanation:
          "Expired more than one year but less than five, you must pass a written test and a vision test before a new license is issued. The road test is not part of that.",
        context:
          "Minnesota treats a lapse as evidence that your knowledge may be stale rather than that your driving is. Ordinary renewal happens every four years on your birthday once you are past 21, and a name or address change requires a duplicate license within 30 days even though the license itself is still valid.",
        trap:
          "People assume a long lapse means starting over with a road test. Inside the one-to-five-year window it is the written and vision tests only.",
        excerptKey: "expired-license-tests",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Getting your license to drive",
        sourceUrl: pg(9),
      },
      {
        id: "mn_s4_13",
        topic: "emergencies",
        question:
          "Smoke starts rising from under the hood of your car. After pulling over and switching off the engine, what should you not do?",
        choices: [
          "Get everyone out of the vehicle",
          "Move away from the vehicle",
          "Throw water on the fire",
          "Call for emergency help",
        ],
        correctIndex: 2,
        explanation:
          "Water on an engine fire spreads the blaze rather than putting it out. You get out, get clear and let the fire service deal with it.",
        context:
          "The manual's engine-fire sequence is short on purpose: pull off the road, turn off the ignition, get out immediately. Opening the hood to look feeds the fire air, and a car fire can reach the fuel system quickly, so distance is the priority over saving the vehicle.",
        trap:
          "Water is the reflex for any fire, and it is the wrong reflex here. An engine fire is fuel and oil, and water spreads both.",
        excerptKey: "engine-fire",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Fire",
        sourceUrl: pg(88),
      },
      {
        id: "mn_s4_14",
        topic: "signals",
        question:
          "A traffic signal at a busy intersection is completely dark because of a power cut. How do you treat the intersection?",
        choices: [
          "As an uncontrolled intersection",
          "As a four-way stop",
          "As if the through road has a green light",
          "Stop and wait for an officer to direct traffic",
        ],
        correctIndex: 0,
        explanation:
          "Minnesota's rule for a dead signal is to treat the intersection as uncontrolled. That puts you back on the ordinary yielding rules rather than on an assumed all-way stop.",
        context:
          "At an uncontrolled intersection, a driver yields to any vehicle that arrived first and, on simultaneous arrival, to the driver on the right. A flashing red is different: that one genuinely is a stop sign. If a police officer is directing traffic, the officer's hand signals override the signals, signs and pavement markings entirely.",
        trap:
          "Many states teach four-way stop for a dark signal. Minnesota's manual says uncontrolled, and the two produce different behavior when only one car is present.",
        excerptKey: "signal-not-working",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Traffic-control signals",
        sourceUrl: pg(68),
        commonlyMissed: true,
      },
      {
        id: "mn_s4_15",
        topic: "speed",
        question:
          "You are lawfully passing on a two-lane highway posted at 55 mph. What speed may you reach while completing the pass?",
        choices: ["60 mph", "55 mph, the limit applies throughout", "70 mph", "65 mph"],
        correctIndex: 3,
        explanation:
          "On a two-lane highway posted at 55 mph or higher you may add 10 mph while lawfully passing, so 65 mph is allowed here. It applies only during the pass.",
        context:
          "This allowance exists because time spent alongside another vehicle is the dangerous part of a pass. It does not apply below 55 mph, it does not survive the end of the pass, and it does not override the basic speed law, which still requires a speed reasonable for the conditions you are actually in.",
        trap:
          "The allowance is not a general 10 mph cushion. Off a two-lane highway, or at a lower posted limit, the posted number is the number.",
        excerptKey: "passing-plus-10",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Speed limits",
        sourceUrl: pg(29),
      },
      {
        id: "mn_s4_16",
        topic: "sharing",
        question:
          "A school bus is on the far side of a divided roadway with its red lights flashing. What must you do?",
        choices: [
          "Stop until the red lights stop flashing",
          "Slow to 20 mph and continue",
          "Continue, because the divider separates you from the bus",
          "Stop only if children are visible",
        ],
        correctIndex: 2,
        explanation:
          "On a divided roadway you do not have to stop for a bus on the opposite side of the divider. The divider is what creates the exception.",
        context:
          "Everywhere else the school bus rule is unforgiving: you stop at least 20 feet away, you stop from either direction, and you stay stopped until the red lights go off. Flashing red lights are the trigger, and the manual states plainly that you stop even if the stop arm never swings out. The vehicle's owner can be charged as well as its driver.",
        trap:
          "A center turn lane or a painted stripe is not a divider. The exception needs an actual divided roadway, not just extra width.",
        excerptKey: "bus-no-stop-arm",
        sourceLabel: "Minnesota Driver's Manual - New laws and information",
        sourceUrl: pg(4),
        commonlyMissed: true,
      },
      {
        id: "mn_s4_17",
        topic: "rightOfWay",
        question:
          "You are driving in the right lane of a city street and a transit bus signals to pull out from a bus stop. What must you do?",
        choices: [
          "Yield and let the bus merge",
          "Maintain speed, since the bus is entering traffic",
          "Sound your horn to warn the driver",
          "Change lanes only if there is space, otherwise proceed",
        ],
        correctIndex: 0,
        explanation:
          "Minnesota requires drivers in the right lane to yield to transit and metro mobility buses merging from a bus stop or shoulder. It is a legal duty, not a courtesy.",
        context:
          "The manual's right-of-way section is a list of situations rather than one principle: pedestrians in marked and unmarked crosswalks, transit buses leaving stops, drivers coming out of driveways, left turns, green arrows, funeral processions and uncontrolled T intersections. The framing throughout is that right of way is given rather than taken.",
        trap:
          "The usual rule is that a vehicle entering traffic yields. The transit bus is the named exception, and it is the one people get wrong.",
        excerptKey: "row-transit-bus",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Right of way and yielding",
        sourceUrl: pg(46),
      },
      {
        id: "mn_s4_18",
        topic: "safety",
        question:
          "How much space does the manual suggest you keep between yourself and the steering wheel?",
        choices: ["At least 6 inches", "At least 18 inches", "As little as is comfortable", "At least 10 inches"],
        correctIndex: 3,
        explanation:
          "Ten inches is the figure, and it is about the airbag rather than comfort. An airbag deploys with enough force to injure someone sitting on top of it.",
        context:
          "The same section tells you to hold the wheel at 8 and 4 or 9 and 3 and to avoid 10 and 2, because hands high on the rim are in the airbag's path. Airbags are described as supplemental, meaning they work with the seat belt and are not a substitute for it.",
        trap:
          "Sitting close feels like better control. The airbag is the reason the manual gives a minimum distance rather than leaving it to preference.",
        excerptKey: "airbags-supplemental",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Airbag safety suggestions",
        sourceUrl: pg(42),
      },
      {
        id: "mn_s4_19",
        topic: "parking",
        question: "You want to park near a railroad crossing. How far from the nearest rail must you stay?",
        choices: ["At least 20 feet", "At least 30 feet", "At least 50 feet", "At least 10 feet"],
        correctIndex: 2,
        explanation:
          "Parking is prohibited within 50 feet of the nearest rail of a railroad crossing. That is the longest of Minnesota's parking distances.",
        context:
          "The manual gives the parking distances as a short list you have to keep straight: 20 feet from a crosswalk at an intersection, 30 feet from a flashing light, stop sign or signal at the roadside, 50 feet from the nearest rail, and 10 feet from a fire hydrant. Bridges and highway tunnels are off limits entirely, as is the street end of a driveway.",
        trap:
          "The 10-foot figure here is the fire hydrant, and 10 feet is also where you stop for an activated crossing. Neither of those is the parking distance from a rail.",
        excerptKey: "parking-bridge-tunnel",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Parking",
        sourceUrl: pg(38),
      },
      {
        id: "mn_s4_20",
        topic: "rules",
        question:
          "You are on an interstate freeway and realize you have gone past your exit. What does the manual tell you to do?",
        choices: [
          "Carry on to the next exit",
          "Back up along the shoulder if traffic is light",
          "Make a U-turn at the next median opening",
          "Stop on the shoulder and wait for a gap to reverse",
        ],
        correctIndex: 0,
        explanation:
          "You go to the next exit. Backing up and U-turning on a freeway are both prohibited, and both are ways people get killed on the shoulder.",
        context:
          "Backing up on a freeway or expressway is not allowed except for emergency vehicles on duty, and backing on public roads generally can bring a careless or reckless driving charge. U-turns on interstate freeways are prohibited outright. Stopping or parking on an interstate is illegal except in an emergency, and running out of fuel does not count as one.",
        trap:
          "A wide, empty shoulder makes reversing look harmless. It is specifically prohibited, and the citation available for it is a serious one.",
        excerptKey: "missed-exit",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Getting off the freeway",
        sourceUrl: pg(81),
      },
      {
        id: "mn_s4_21",
        topic: "signs",
        question: "A white regulatory sign shows a symbol inside a red circle with a slash through it. What does it mean?",
        choices: [
          "The thing shown is permitted only at certain hours",
          "Warning: watch for the thing shown ahead",
          "The thing shown has the right of way here",
          "Do not do the thing shown",
        ],
        correctIndex: 3,
        explanation:
          "A red circle with a slash prohibits whatever it encloses. It is the standard way Minnesota signs a ban without printing words.",
        context:
          "Color and shape carry meaning before you read a word. White regulatory signs give you the law, yellow diamonds warn about what is ahead, orange marks construction, green guides, blue lists services and brown points to historic, cultural or recreational sites. Learning the color system means an unfamiliar sign is still half readable.",
        trap:
          "A slashed symbol is often mistaken for a warning. Warnings are yellow and diamond-shaped; a prohibition is regulatory and binding.",
        excerptKey: "red-circle-slash",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Regulatory signs",
        sourceUrl: pg(60),
      },
      {
        id: "mn_s4_22",
        topic: "impairment",
        question:
          "A driver is stopped and found to have an alcohol concentration of 0.08 percent. What happens to their license straight away?",
        choices: [
          "Nothing until a court convicts them",
          "They may receive a seven-day temporary license, after which it is revoked",
          "It is revoked on the spot with no temporary license",
          "It is suspended for 30 days pending a hearing",
        ],
        correctIndex: 1,
        explanation:
          "At 0.08 percent or above, or on a test refusal, the driver may be given a seven-day temporary license. When the week is up, the driving privileges go.",
        context:
          "Minnesota runs administrative consequences alongside criminal ones. A first offense carries a minimum 90-day revocation, dropping to 30 days on a guilty plea to DWI, and reinstatement later costs a $680 fee. Penalties get harsher with a prior arrest, at 0.16 percent or above, with a child under 16 in the vehicle, under age 21, or on refusing a test.",
        trap:
          "The temporary license is not a reprieve. It exists to give you a week to arrange your affairs, not to signal that nothing has happened.",
        excerptKey: "dwi-seven-day",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Penalties",
        sourceUrl: pg(97),
      },
      {
        id: "mn_s4_23",
        topic: "signals",
        question:
          "You reach a freeway entrance ramp with a ramp meter showing red, and the car ahead has just gone through on green. What do you do?",
        choices: [
          "Follow the car ahead through, since it just went",
          "Treat the meter as a yield sign",
          "Stop and wait for your own green",
          "Proceed if the freeway lane beside you is clear",
        ],
        correctIndex: 2,
        explanation:
          "Ramp meters release one car per green. You stop on red and wait for the signal to come round to you.",
        context:
          "Ramp meters are ordinary red, yellow and green signals placed on entrance ramps to space out merging traffic. Once you are released, the merge rules take over: match the speed of freeway traffic, yield to vehicles already on the freeway, and do not stop on the ramp or in the acceleration lane unless it is absolutely necessary.",
        trap:
          "Two cars per green is common in other states, and drivers new to the Twin Cities assume it here. Minnesota's meters are one car at a time.",
        excerptKey: "ramp-meter-one-car",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Freeway ramp meters",
        sourceUrl: pg(71),
      },
      {
        id: "mn_s4_24",
        topic: "emergencies",
        question:
          "Your car has left the road onto a soft shoulder at speed. What is the correct response?",
        choices: [
          "Stay on the shoulder, ease off the gas, then steer back once slow",
          "Steer back onto the pavement immediately",
          "Brake hard while steering back onto the pavement",
          "Accelerate to keep the car straight and rejoin at speed",
        ],
        correctIndex: 0,
        explanation:
          "The manual's instruction is to stay on the shoulder and slowly release the accelerator. Once your speed is down, you turn back onto the pavement under control.",
        context:
          "The danger is the lip between shoulder and pavement. At speed a tire catching that edge can throw the car across the road into oncoming traffic, which is why the sequence is slow down first, rejoin second. The same calm-hands principle runs through the manual's other loss-of-control advice: no slamming brakes in a skid, no braking during a blowout until the car is settled.",
        trap:
          "The instinct is to get back on the road immediately. That instinct is what turns a shoulder excursion into a head-on collision.",
        excerptKey: "running-off-pavement",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Running off the pavement",
        sourceUrl: pg(87),
      },
      {
        id: "mn_s4_25",
        topic: "licensing",
        question:
          "You are diagnosed with a condition that can cause loss of consciousness. How long do you have to send DVS a physician's statement?",
        choices: ["60 days from the diagnosis", "90 days from the diagnosis", "At your next license renewal", "30 days from the diagnosis"],
        correctIndex: 3,
        explanation:
          "A physician's statement is due within 30 days of the diagnosis if you already hold a permit or license. The clock runs from the diagnosis, not from renewal.",
        context:
          "Minnesota's licensing chapter treats medical fitness as an ongoing obligation rather than something checked once. The same chapter covers vision standards at application and the circumstances in which DVS cancels, suspends or revokes a license, including cancellation for 60 days or until corrected if false information was given on the application.",
        trap:
          "Waiting for renewal seems reasonable when renewal is only every four years. The requirement is triggered by the diagnosis itself.",
        excerptKey: "epilepsy-30-days",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Medical conditions",
        sourceUrl: pg(15),
      },
      {
        id: "mn_s4_26",
        topic: "rules",
        question:
          "You need to make a left turn from a one-way street onto another one-way street, and the light is red. Is that allowed in Minnesota?",
        choices: [
          "No, left on red is never allowed",
          "Yes, without stopping, if the way is clear",
          "Yes, in certain situations, after stopping",
          "Only where a sign specifically permits it",
        ],
        correctIndex: 2,
        explanation:
          "Minnesota allows a left on red from a one-way street onto another one-way street in certain situations. You still stop first and you still yield.",
        context:
          "Turning on red is permitted after a complete stop unless a sign prohibits it, and the same yielding duties apply as at any other stop: pedestrians in the crosswalk first, then cross traffic. The one-way to one-way left turn is the less familiar half of that rule, and it exists because the turn does not cross opposing traffic.",
        trap:
          "Assuming red always means no turning costs you the answer here. Assuming it means free passage costs you more than that.",
        excerptKey: "left-on-red",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Turning on a red light",
        sourceUrl: pg(31),
      },
      {
        id: "mn_s4_27",
        topic: "sharing",
        question:
          "You are following a snowplow on a Minnesota highway in winter. When may you pass it?",
        choices: [
          "Only when you can see the entire plow",
          "As soon as the road ahead looks clear of oncoming traffic",
          "Whenever the plow moves toward the shoulder",
          "Only after the plow signals you past",
        ],
        correctIndex: 0,
        explanation:
          "The manual's condition is that you can see the whole vehicle. A plow throws snow, ice and sanding material, and its blade is wider than the truck.",
        context:
          "Crowding a snowplow is the specific behavior the manual warns against, because the cloud of snow it produces hides the plow's actual width and anything in front of it. Staying well back also keeps your windshield out of the sanding material. Snowplows and road maintenance equipment are among the vehicles allowed to display blue lights in Minnesota.",
        trap:
          "Seeing clear road beyond the snow cloud is not the same as seeing the plow. The blade can extend into the lane you are about to use.",
        excerptKey: "blue-lights",
        sourceLabel: "Minnesota Driver's Manual - Chapter 2: Prohibited lights",
        sourceUrl: pg(26),
      },
      {
        id: "mn_s4_28",
        topic: "safety",
        question:
          "You are on a long drive and starting to feel drowsy. How often does the manual say you should stop?",
        choices: [
          "At least every 200 miles or every four hours",
          "Only when you can no longer keep your eyes open",
          "Every 50 miles regardless of how you feel",
          "At least every 100 miles or every two hours",
        ],
        correctIndex: 3,
        explanation:
          "The interval is at least once every 100 miles or every two hours, whichever comes first. You are meant to get out of the car and move, not just pause.",
        context:
          "Fatigue sits alongside distraction in the manual's account of why crashes happen. Distraction or inattention is put at a leading factor in Minnesota crashes and at least 25 percent of them annually, and the manual's list of distracting activities runs well past phones to include things like preparing to smoke while driving.",
        trap:
          "Waiting until you feel unsafe is the failure mode. By the time drowsiness is obvious you have already lost reaction time.",
        excerptKey: "fatigue-breaks",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Maintaining alertness and concentration",
        sourceUrl: pg(85),
      },
      {
        id: "mn_s4_29",
        topic: "signs",
        question:
          "You see a yellow sign reading Added Lane. What should you expect?",
        choices: [
          "Your lane is about to end and you must merge left",
          "A passing lane opens for a short distance only",
          "A new lane joins and that traffic does not have to merge",
          "The shoulder becomes a driving lane during rush hour",
        ],
        correctIndex: 2,
        explanation:
          "An added lane sign means the roadway gains a lane, and the entering traffic does not have to merge. Nobody is forced into your lane.",
        context:
          "Added Lane and Lane Ends are the pair people mix up. Lane Ends means two lanes become one and the vehicles in the ending lane must merge and yield. Added Lane means the opposite: the road widens and the joining traffic has its own space. Shorter, thicker white dashes on the pavement are the marking that says a lane is ending.",
        trap:
          "Both signs show two lines coming together on a diagram. Only one of them puts a yielding duty on somebody.",
        excerptKey: "added-lane-sign",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Warning signs",
        sourceUrl: pg(66),
      },
      {
        id: "mn_s4_30",
        topic: "rightOfWay",
        question:
          "You have a green left-turn arrow, but a pedestrian is still finishing their crossing in front of you. What must you do?",
        choices: [
          "Yield to the pedestrian and anyone else already in the intersection",
          "Proceed, because a green arrow is a protected turn",
          "Sound your horn to hurry the pedestrian along",
          "Turn behind the pedestrian without stopping",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow protects you from oncoming and crossing traffic, not from people and vehicles already inside the intersection. You yield to them and then turn.",
        context:
          "Minnesota's phrasing is that a green arrow means you can safely turn in the direction of the arrow, with your turn protected from oncoming or crossing traffic. The duty to yield to whoever is already there survives every kind of green. The manual is separately emphatic about pedestrians: it is illegal to pass a vehicle that has stopped for one, and pedestrian right-of-way violations are misdemeanors.",
        trap:
          "Protected is not the same as clear. The arrow controls the traffic that has not entered yet.",
        excerptKey: "row-green-arrow",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Right of way and yielding",
        sourceUrl: pg(46),
      },
      {
        id: "mn_s4_31",
        topic: "parking",
        question:
          "You hold a valid disability parking certificate and every marked accessible space is taken. What does Minnesota allow?",
        choices: [
          "Parking in a bus zone for up to 30 minutes",
          "Parking at an expired meter without charge",
          "Nothing beyond what any other driver may do",
          "Parking at an angle across two standard spaces",
        ],
        correctIndex: 3,
        explanation:
          "With a valid permit or plates, you may park at an angle and occupy two standard spaces when the designated spaces are full or unavailable. It is there to give room for a ramp or a door.",
        context:
          "The certificate does not otherwise suspend the parking rules. The prohibitions in the manual's list still apply: no parking within 20 feet of a crosswalk at an intersection, within 30 feet of a stop sign, flashing light or signal, within 50 feet of the nearest rail, on a bridge or in a highway tunnel, or at the street end of a driveway.",
        trap:
          "A disability permit is widely assumed to be a general parking exemption. In Minnesota's manual it buys space, not immunity.",
        excerptKey: "disability-parking",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Regulatory signs",
        sourceUrl: pg(62),
      },
      {
        id: "mn_s4_32",
        topic: "speed",
        question:
          "You are on an interstate freeway posted with a minimum speed limit and conditions are dry and clear. What does the minimum mean?",
        choices: [
          "It is a recommendation only",
          "It is illegal to drive slower than that under normal conditions",
          "It applies only to commercial vehicles",
          "It applies only in the left-hand lane",
        ],
        correctIndex: 1,
        explanation:
          "A posted minimum is enforceable. Under normal conditions it is illegal to drive below it, and driving far below the flow is its own hazard.",
        context:
          "The exception is built into the rule: bad weather or poor road conditions can make a slower speed necessary, and the basic speed law that requires a reasonable speed for conditions still governs. Above the minimum, Minnesota also expects slower traffic to keep right, using the left lanes for passing.",
        trap:
          "Minimums look advisory next to maximums. They carry the same legal force, and they exist because slow vehicles on freeways cause crashes.",
        excerptKey: "minimum-speed-sign",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Regulatory signs",
        sourceUrl: pg(60),
      },
      {
        id: "mn_s4_33",
        topic: "rules",
        question:
          "Four adults are traveling in a pickup and the driver wants all of them in the front bench seat. Is that allowed?",
        choices: [
          "Yes, if every person has a seat belt",
          "Yes, if the vehicle is not on a freeway",
          "No, more than three people in the front seat is illegal",
          "Only if the extra person is under 18",
        ],
        correctIndex: 2,
        explanation:
          "Minnesota makes it illegal to drive a vehicle occupied by more than three people in the front seat. The concern is the driver's control and view, not just belts.",
        context:
          "The same obstructed-view section covers loads that block your sight and things hung between you and the windshield. A projecting load has its own limits: no more than three feet in front of the front wheels or bumper, and a red, yellow or orange flag at least 16 inches square when the load extends four feet or more behind.",
        trap:
          "Having enough seat belts feels like it should settle it. The rule is about how many bodies are beside the driver, not how they are restrained.",
        excerptKey: "front-seat-three",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Obstructed view",
        sourceUrl: pg(82),
      },
      {
        id: "mn_s4_34",
        topic: "impairment",
        question:
          "Minnesota's DWI threshold for an ordinary Class D driver is 0.08 percent. What is it for someone driving a commercial vehicle?",
        choices: ["0.04 percent", "0.05 percent", "0.02 percent", "The same 0.08 percent"],
        correctIndex: 0,
        explanation:
          "A commercial driver can be arrested for DWI at 0.04 percent, half the ordinary threshold. The person does not have to be visibly impaired.",
        context:
          "The 0.08 figure is a line above which impairment is presumed, not a safe level below it. An ordinary driver can still be arrested at an alcohol concentration as low as 0.04 percent if an officer can show alcohol caused driving errors, and anyone under 21 is subject to the not-a-drop rule for any detectable amount.",
        trap:
          "0.02 percent is the ignition interlock lockout level, and it turns up here as a plausible-looking wrong answer. The commercial threshold is 0.04.",
        excerptKey: "dwi-0-04",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Minnesota Driving While Impaired (DWI) law",
        sourceUrl: pg(96),
      },
      {
        id: "mn_s4_35",
        topic: "emergencies",
        question:
          "Your vehicle has gone into deep water and is floating. What should you do?",
        choices: [
          "Wait for the car to settle on the bottom, then open a door",
          "Stay belted in and call 911 from inside",
          "Open a door at once to let water in and equalize pressure",
          "Get out immediately, through a window if you can",
        ],
        correctIndex: 3,
        explanation:
          "Most vehicles float for only 30 to 60 seconds. You use that time to get out, through open windows if possible, before the water reaches the windshield.",
        context:
          "The manual's flood advice starts earlier than this: six inches of water reaches the bottom of most passenger cars and can cause loss of control or stalling, and two feet of moving water can carry away most vehicles including SUVs and pickups. The safe move is not entering flood water at all.",
        trap:
          "Waiting for pressure to equalize is advice that circulates widely and costs the floating window entirely. Minnesota's manual says leave immediately.",
        excerptKey: "plunging-under-water",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Plunging under water",
        sourceUrl: pg(88),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Minnesota Statutes 171.13 lists the subjects the knowledge test must cover, and DVS publishes its own practice test showing where it looks. This set works that intersection: railroads, slow-moving vehicles, school buses, bicycles, carbon monoxide, work zones, DWI penalties, and the Minnesota-only intersections that catch visitors and residents alike.",
    questions: [
      {
        id: "mn_s5_01",
        topic: "rules",
        question:
          "You are on a side street facing a divided highway at a reduced conflict intersection, and you want to reach the road opposite. What are you allowed to do?",
        choices: [
          "Turn left across both roadways when a gap appears",
          "Cross straight over, stopping in the median if needed",
          "Turn right, then use the median opening to make a U-turn",
          "Turn left, but only from a dedicated left-turn lane",
        ],
        correctIndex: 2,
        explanation:
          "At a J-turn you always turn right first. You join the highway, move into the designated left-turn lane at the median opening, and complete a U-turn to get where you were going.",
        context:
          "Minnesota builds these on rural divided highways because the crashes they prevent are the severe ones: a vehicle crossing two high-speed roadways at once has to judge gaps in both directions simultaneously. Taking the geometry away removes that judgment. DVS's own practice test asks about reduced conflict intersections directly, which is a strong signal about the real exam.",
        trap:
          "Waiting for a gap and cutting straight across is exactly the movement the layout exists to prevent, and at a J-turn there is no signal telling you it is not allowed.",
        excerptKey: "j-turn",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: J-turns",
        sourceUrl: pg(35),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_02",
        topic: "safety",
        question:
          "You are stuck in snow and running the engine to stay warm with the exhaust pipe buried. What is the danger the manual singles out?",
        choices: [
          "Carbon monoxide collecting inside the vehicle",
          "The battery draining and stranding you",
          "Overheating the engine",
          "Melting snow refreezing around the wheels",
        ],
        correctIndex: 0,
        explanation:
          "Carbon monoxide is odorless, colorless and deadly, and it collects inside a closed vehicle. A blocked exhaust with the engine running puts it in the cabin.",
        context:
          "Minnesota Statutes 171.13 requires the knowledge test to cover the circumstances and dangers of carbon monoxide poisoning, so this is not an incidental topic. The manual's stranded-driver advice fits around it: stay with the vehicle, run the engine for about 10 minutes each hour to charge the battery and warm up, and leave at least one window partly open for fresh air.",
        trap:
          "Leaving a window open sounds like it defeats the point of running the heater. It is the single step that makes running the engine survivable.",
        excerptKey: "carbon-monoxide",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Carbon monoxide poisoning and safety tips",
        sourceUrl: pg(89),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_03",
        topic: "sharing",
        question:
          "A vehicle displays an orange triangle with a red border on its rear. What does that tell you about it?",
        choices: [
          "It is carrying hazardous material",
          "It is a wide load and may cross the center line",
          "It is a student driver's vehicle",
          "It travels at 30 mph or less",
        ],
        correctIndex: 3,
        explanation:
          "The slow-moving vehicle emblem marks vehicles that travel at 30 mph or less, such as farm implements and animal-drawn vehicles, when they use a public road.",
        context:
          "Slow-moving vehicle safety is one of the subjects Minnesota Statutes 171.13 requires the test to cover, which is why the emblem turns up so often. The closing speed is the hazard: at 55 mph you cover the gap to a 15 mph tractor in a few seconds. Animal-drawn vehicles have an additional requirement to show a lamp visible from 500 feet from sunset to sunrise and in poor visibility.",
        trap:
          "The emblem looks like a hazard placard and gets read as one. It is a speed warning, and the response is to slow early rather than to keep clear.",
        excerptKey: "smv-emblem",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Warning signs",
        sourceUrl: pg(64),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_04",
        topic: "emergencies",
        question:
          "The last car of a train has just cleared the crossing in front of you and the gates are still down. What should you do?",
        choices: [
          "Proceed as soon as the gates begin to rise",
          "Drive around the gates once the train has passed",
          "Wait until you are sure no second train is coming on another track",
          "Proceed if you can see clearly along the track you crossed",
        ],
        correctIndex: 2,
        explanation:
          "A passing train hides a second train on another track, and the noise of the first masks the second. You wait until you are sure.",
        context:
          "Railroad grade crossing safety is another of the subjects Minnesota Statutes 171.13 requires the test to cover. The rest of the crossing rules are similarly specific: stop at least 10 feet from the nearest rail or gate when lights or gates are activated, do not shift gears inside the crossing, and never pass any vehicle within 100 feet of a crossing.",
        trap:
          "The relief of a train finally passing is exactly when people roll forward. The second-train collision is a well-documented crossing crash type.",
        excerptKey: "railroad-second-train",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Railroad crossing safety",
        sourceUrl: pg(56),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_05",
        topic: "sharing",
        question:
          "A school bus ahead is traveling on a road posted at 50 mph and switches on its flashing yellow lights. How far before its stop does that happen?",
        choices: ["At least 300 feet", "At least 100 feet", "At least 200 feet", "At least 500 feet"],
        correctIndex: 0,
        explanation:
          "Above 35 mph the yellow lights come on at least 300 feet before the stop. In a zone of 35 mph or less the figure is at least 100 feet.",
        context:
          "Pupil transportation safety, including the significance of school bus lights, signals and the stop arm, is written into the statute that governs the knowledge test. Yellow means the bus is about to stop and you should start slowing. Red means stop at least 20 feet away, from either direction, and stay stopped until the red lights go off.",
        trap:
          "The 100-foot figure is real but belongs to the slower speed zone. Two distances, two speed zones, and the test can ask for either.",
        excerptKey: "bus-yellow-lights",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Flashing yellow lights",
        sourceUrl: pg(44),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_06",
        topic: "sharing",
        question:
          "You are on a two-lane road in a marked no-passing zone and come up behind a bicyclist. What does Minnesota allow?",
        choices: [
          "Nothing - you must wait for the no-passing zone to end",
          "Passing within the lane at reduced speed",
          "Passing only if the cyclist moves onto the shoulder",
          "Crossing the center line to pass, when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "Minnesota lets you cross the center of the roadway to pass a bicyclist even in a no-passing zone, provided it is safe. The three-foot clearance requirement still applies.",
        context:
          "Traffic laws relating to bicycles are on the statutory list of required knowledge-test subjects. Bicycles are vehicles with the same road rights, riders may travel two abreast so long as they stay in one lane and do not impede traffic, and you must check that the cyclist is not signaling a left turn before you go around.",
        trap:
          "A solid yellow line normally means no passing, full stop. The bicycle exception is written into the manual and it is the half people do not know.",
        excerptKey: "bicycle-3-feet",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Passing a bicyclist",
        sourceUrl: pg(51),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_07",
        topic: "speed",
        question:
          "Workers are present in a work zone on a highway normally posted at 65 mph, and you exceed the posted work zone limit. What is the additional fine?",
        choices: ["$150 on top", "$300 on top of the regular speeding ticket", "$75 on top", "There is no separate work zone fine"],
        correctIndex: 1,
        explanation:
          "Speeding in a work zone brings a $300 fine in addition to the ordinary speeding penalty. The manual states the figure twice, which tells you how it is regarded.",
        context:
          "Work zone and road construction safety, including speed limits and the dangers of distracted driving, is another subject the statute requires the test to cover. Minnesota Statutes 169.14 also adjusts the limit itself: on a road posted at 50 mph or more, the work zone limit becomes 45 mph when a lane is closed. Failing to obey a flagger is a separate violation with its own penalty.",
        trap:
          "The surcharge is often assumed to apply only when workers are visible. The manual's flat statement about disobeying the work zone speed limit does not depend on spotting anyone.",
        excerptKey: "work-zone-workers-fine",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Construction signs",
        sourceUrl: pg(67),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_08",
        topic: "rules",
        question:
          "Two lanes on a Minnesota freeway are about to become one because of construction. What does the state ask drivers to do?",
        choices: [
          "Merge as early as possible into the continuing lane",
          "Merge only from the left lane into the right",
          "Use both lanes to the merge point and take turns",
          "Stop at the merge point and yield to the continuing lane",
        ],
        correctIndex: 2,
        explanation:
          "That is the zipper merge. Both lanes stay in use up to the merge point and drivers alternate there, which shortens the backup and keeps speeds even.",
        context:
          "Minnesota promotes the zipper merge because early merging wastes half the available pavement and lengthens the queue. Taking turns at the point of closure is cooperative behavior, not queue jumping, and the manual describes it as the procedure rather than as an option.",
        trap:
          "Drivers who merge early often treat late-merging traffic as cheating and block them. Blocking is the behavior that makes the backup worse.",
        excerptKey: "zipper-merge-why",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Late merge (zipper merge)",
        sourceUrl: pg(57),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_09",
        topic: "sharing",
        question:
          "Traffic on a Twin Cities freeway has slowed to a crawl and a bus pulls onto the shoulder to get past. Is that allowed?",
        choices: [
          "Yes, when main-line traffic is moving below 35 mph",
          "No, shoulders are never a travel lane",
          "Yes, at any time of day on a marked bus route",
          "Yes, but only during posted rush-hour periods",
        ],
        correctIndex: 0,
        explanation:
          "Buses may use the shoulder only when main-line speeds are below 35 mph. They may exceed the main-line speed by no more than 15 mph and may never exceed 35 mph themselves.",
        context:
          "Bus shoulders are a Minnesota feature that surprises drivers from elsewhere, and they interact with the rest of the shoulder rules. Stopping or parking on an interstate freeway remains illegal except in an emergency, and running out of fuel does not qualify as one.",
        trap:
          "Seeing a bus on the shoulder at speed suggests the shoulder is generally available. The 35 mph ceiling is what makes the maneuver legal.",
        excerptKey: "bus-shoulder-35",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Use of freeway or expressway shoulders by buses",
        sourceUrl: pg(78),
      },
      {
        id: "mn_s5_10",
        topic: "impairment",
        question:
          "A driver's license was revoked for an alcohol-related offense. What reinstatement fee does the manual state?",
        choices: ["$250", "$430", "$1,000", "$680"],
        correctIndex: 3,
        explanation:
          "Reinstatement after an alcohol-related revocation costs $680, on top of reapplying for the license and possibly entering the ignition interlock program.",
        context:
          "The financial consequences of DWI are on the statutory list of required test subjects, alongside the legal penalties. A first offense carries a minimum 90-day revocation, or 30 days on a guilty plea, and up to 90 days in jail and a $1,000 fine. A second offense within 10 years brings a minimum one-year revocation.",
        trap:
          "The $1,000 figure is the possible fine for a first offense, not the reinstatement fee. Both numbers appear on the same page.",
        excerptKey: "dwi-reinstatement-680",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Penalties",
        sourceUrl: pg(97),
      },
      {
        id: "mn_s5_11",
        topic: "impairment",
        question:
          "A driver in the ignition interlock program blows into the device before starting the car. At what reading does the device refuse to start it?",
        choices: ["0.04 percent or above", "0.08 percent or above", "0.02 percent or above", "Any detectable amount"],
        correctIndex: 2,
        explanation:
          "The interlock locks the vehicle out at 0.02 percent or above, far below the DWI threshold. It is deliberately set to catch drinking, not impairment.",
        context:
          "Minnesota stacks several alcohol thresholds that are easy to confuse. Interlock lockout is 0.02, commercial DWI is 0.04, ordinary DWI is 0.08, and 0.16 or above is an aggravating factor bringing harsher penalties. Anyone under 21 is separately covered by the not-a-drop rule, which suspends driving privileges for 30 days on a first offense.",
        trap:
          "Any detectable amount is the under-21 rule, not the interlock setting. The interlock has an actual number.",
        excerptKey: "interlock-0-02",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Ignition Interlock Device program",
        sourceUrl: pg(98),
      },
      {
        id: "mn_s5_12",
        topic: "signals",
        question:
          "You are waiting at a red light and pick up your phone to read a message while stopped in traffic. Is that legal in Minnesota?",
        choices: [
          "No - holding the phone is prohibited whether you are moving or stopped in traffic",
          "Yes, as long as the vehicle is not moving",
          "Yes, if you are stopped at a signal rather than in a lane of traffic",
          "Yes, for reading but not for typing",
        ],
        correctIndex: 0,
        explanation:
          "Minnesota's hands-free law prohibits holding a wireless communications device with one or both hands. The manual separately lists using a device while stopped in traffic among the illegal behaviors.",
        context:
          "The exceptions are narrow: getting emergency assistance, reporting a crash or a crime, and using the device in voice-activated or hands-free mode. A second or subsequent violation carries a $275 fine under Minnesota Statutes 169.475. Permit holders under 18 face a stricter rule still, with no cell phone use at all, hands-free or otherwise.",
        trap:
          "Being stationary feels like it takes you outside the law. The statute is about holding the device, and the manual names stopped traffic explicitly.",
        excerptKey: "stat-hands-free",
        sourceLabel: "Minnesota Statutes 169.475 - Use of wireless communications device",
        sourceUrl: STAT("169.475"),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_13",
        topic: "rightOfWay",
        question:
          "A crash has closed the left lane and a police car is stopped on the shoulder with its lights flashing. You are on a two-lane road with only one lane in your direction. What must you do?",
        choices: [
          "Stop until the emergency vehicle moves",
          "Maintain speed but move as far right as possible",
          "Change lanes into oncoming traffic to leave a full lane",
          "Slow down and pass with caution",
        ],
        correctIndex: 3,
        explanation:
          "When you cannot move a lane away, the requirement becomes slowing down and passing carefully. Moving over is the first choice; slowing is the fallback when there is nowhere to move.",
        context:
          "Minnesota's move over law asks you to give stopped emergency and service vehicles a full lane of space when the road allows it. That is separate from the rule for an emergency vehicle approaching you with lights and siren, where you pull to the right and stop, unless a physical barrier such as a fence, wall or median strip separates you from it.",
        trap:
          "Stopping dead is the response people reach for and it can cause a rear-end collision. The rule for a stopped emergency vehicle is slow and careful, not halt.",
        excerptKey: "move-over-one-lane",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Passing parked emergency and service vehicles",
        sourceUrl: pg(47),
      },
      {
        id: "mn_s5_14",
        topic: "safety",
        question:
          "Heavy rain is standing on the freeway. At roughly what speed can a standard car start to hydroplane?",
        choices: ["About 55 mph", "About 25 mph", "About 35 mph", "About 45 mph"],
        correctIndex: 2,
        explanation:
          "The manual puts the onset at about 35 mph for standard cars in heavy rain. That is well below the speed most drivers think of as risky.",
        context:
          "Hydroplaning means the tires are riding on water rather than gripping the road, so steering and braking stop working together. Rain also triggers the headlight requirement: your lights must be on when you cannot see more than 500 feet ahead and whenever it is raining, snowing, sleeting or hailing, on low beam to cut the glare.",
        trap:
          "Thirty-five mph sounds too slow to be dangerous, which is precisely why this number is worth remembering.",
        excerptKey: "hydroplaning",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Hydroplaning",
        sourceUrl: pg(86),
      },
      {
        id: "mn_s5_15",
        topic: "sharing",
        question:
          "Traffic has stopped on a multilane road and a motorcyclist rides between the lanes to move up. What is your obligation?",
        choices: [
          "Let them through - this is legal in Minnesota",
          "Block the gap to keep them in their lane",
          "Sound your horn to warn them off",
          "Nothing, since it is illegal and not your concern",
        ],
        correctIndex: 0,
        explanation:
          "Lane splitting and filtering are legal in Minnesota, and drivers must not get in the way or try to stop a rider doing it.",
        context:
          "Minnesota is unusual among states in permitting this, and the manual states the driver's duty directly rather than merely describing the practice. The rest of its motorcycle guidance is about visibility: urban intersection crashes are the most common motorcycle-car collision type, and many happen when a driver turns left across an oncoming rider.",
        trap:
          "Drivers who learned elsewhere assume lane splitting is illegal and edge across to close the gap. That is the behavior the manual specifically forbids.",
        excerptKey: "lane-splitting-speeds",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Sharing the road with motorcyclists",
        sourceUrl: pg(53),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_16",
        topic: "rules",
        question:
          "You approach a large roundabout behind a semi-trailer, and the truck's trailer swings across the lane line. What should you do?",
        choices: [
          "Sound your horn, since it is a lane violation",
          "Pass on the inside while it is turning",
          "Stop and wait outside the roundabout entirely",
          "Give it room - long vehicles may deviate from the lane in a roundabout",
        ],
        correctIndex: 3,
        explanation:
          "A vehicle longer than 40 feet or wider than 10 feet may deviate from its lane as needed to get through a roundabout. It is expected, not a violation.",
        context:
          "Roundabouts have a small set of Minnesota-specific rules worth holding together. You yield to traffic already circulating as you enter, you never stop inside for an approaching emergency vehicle but exit first and then pull over, and large vehicles get the lane latitude described here.",
        trap:
          "Pulling over inside the circle for a siren blocks the entire roundabout. Exit first, then pull over.",
        excerptKey: "roundabout-large-vehicles",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Roundabouts",
        sourceUrl: pg(33),
      },
      {
        id: "mn_s5_17",
        topic: "signs",
        question:
          "You reach a railroad crossing marked with a crossbuck and a small sign underneath reading 2. What does the 2 mean?",
        choices: [
          "Trains may reach 2 miles per minute here",
          "There are two tracks at this crossing",
          "The crossing is 2 lanes wide",
          "Two vehicles may queue between the tracks",
        ],
        correctIndex: 1,
        explanation:
          "The number under a crossbuck is the number of tracks. Knowing there is more than one is what keeps you from moving off after the first train.",
        context:
          "The crossbuck is the X-shaped sign that identifies a crossing, and it works with the rest of the crossing equipment: flashing lights and gates that require a stop at least 10 feet from the nearest rail, and the blue Emergency Notification System sign on a crossing post or control box that tells you who to call if a vehicle is stuck on the tracks.",
        trap:
          "A multi-track sign reads as decoration until a second train arrives. It is the direct warning against the most dangerous crossing habit.",
        excerptKey: "crossbuck-sign",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Warning signs",
        sourceUrl: pg(62),
      },
      {
        id: "mn_s5_18",
        topic: "emergencies",
        question:
          "Your car stalls on railroad tracks and a train is approaching. After getting everyone out, which way do you move?",
        choices: [
          "Straight back along the road you came from",
          "Away from the tracks in the direction the train is heading",
          "Away from the tracks at an angle toward the oncoming train",
          "Stay beside the vehicle to warn other drivers",
        ],
        correctIndex: 2,
        explanation:
          "You walk quickly at a 45-degree angle toward the train. Debris from the collision is thrown forward, so moving toward the train takes you away from where it lands.",
        context:
          "The counterintuitive direction is the whole point of the instruction. The rest of the sequence is simple: get out immediately, do not try to restart or push the vehicle, keep a safe distance, and use the blue Emergency Notification System sign at the crossing to reach the railroad and stop train traffic.",
        trap:
          "Running away from the train feels obviously right, and it puts you exactly where the wreckage goes.",
        excerptKey: "stalled-on-tracks",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Stalling on railroad tracks",
        sourceUrl: pg(88),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_19",
        topic: "licensing",
        question:
          "A 17-year-old has held a provisional license for eight months. How many passengers under 20 may they carry without a parent along?",
        choices: [
          "Up to three",
          "One",
          "None",
          "Any number, once the first six months are over",
        ],
        correctIndex: 0,
        explanation:
          "In the second six months the limit rises from one to no more than three passengers under 20. It does not disappear.",
        context:
          "The provisional restrictions come in two stages. For the first six months there is a single passenger under 20 unless a parent or guardian is along, plus a driving ban from midnight to 5 a.m. with narrow exceptions. For the second six months the passenger limit becomes three. Immediate family members under 20 do not count against either limit.",
        trap:
          "The first-six-months limit of one is the number people remember, and applying it at month eight is wrong in the other direction from assuming the limits have lapsed.",
        excerptKey: "provisional-family-passengers",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Passenger limitations",
        sourceUrl: pg(18),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_20",
        topic: "sharing",
        question:
          "A school bus with no children visible has its red lights flashing, but the stop arm has failed to swing out. What must you do?",
        choices: [
          "Proceed with caution, since the stop arm is the legal signal",
          "Stop only if a child steps toward the road",
          "Slow to 20 mph and pass",
          "Stop anyway - the flashing red lights are the requirement",
        ],
        correctIndex: 3,
        explanation:
          "Minnesota states it plainly: you stop for flashing red school bus lights even if the stop arm does not swing out. The lights are the trigger.",
        context:
          "This is on the manual's own list of new laws and information, which is where DVS puts the rules it expects to be misunderstood. The stop is at least 20 feet from the bus, it applies from either direction on an undivided road, and it lasts until the red lights go off. The vehicle's owner or lessee can be charged with a petty misdemeanor when their vehicle is used to violate the school bus law.",
        trap:
          "The stop arm is the most visible part of the setup, so drivers treat it as the legal signal. It is a reminder attached to a rule the lights already created.",
        excerptKey: "bus-owner-liable",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Vehicle owner may be penalized",
        sourceUrl: pg(46),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_21",
        topic: "speed",
        question:
          "Minnesota Statutes set a school speed limit for marked school zones. What are its outer bounds?",
        choices: [
          "Always 20 mph while children are present",
          "Always 15 mph on school days",
          "Not below 15 mph, and not more than 30 mph below the established limit",
          "Not below 25 mph in any circumstances",
        ],
        correctIndex: 2,
        explanation:
          "The statute frames it as a range rather than a fixed number: a school speed limit cannot be lower than 15 mph, and it cannot be more than 30 mph below the street's established limit.",
        context:
          "The manual itself does not print a school zone speed, which is why the statute supplies it. On the road what you follow is the posted figure, and the pentagon-shaped yellow or fluorescent yellow-green sign is the warning that a school or an approved school crossing is ahead.",
        trap:
          "Twenty mph is the school zone number in many states and it is a guess here. Minnesota sets bounds and lets each zone be signed within them.",
        excerptKey: "stat-school-zone-speed",
        sourceLabel: "Minnesota Statutes 169.14 - Speed zoning in school zone",
        sourceUrl: STAT("169.14"),
      },
      {
        id: "mn_s5_22",
        topic: "parking",
        question:
          "You want to leave your car briefly in a marked bicycle lane. Does Minnesota law allow it?",
        choices: [
          "No, unless posted signs permit parking there",
          "Yes, for under five minutes",
          "Yes, if your hazard lights are on",
          "Yes, outside of daylight hours",
        ],
        correctIndex: 0,
        explanation:
          "Parking within a bicycle lane is prohibited except where signs permit it. Hazard lights and a short stay do not create an exception.",
        context:
          "The bike lane prohibition sits in the same statutory list as the distances the manual prints: 20 feet from a crosswalk at an intersection, 30 feet from a stop sign or signal, 50 feet from the nearest rail. Bicycles are vehicles in Minnesota, and a blocked lane forces a rider out into traffic.",
        trap:
          "Hazard lights are widely treated as a license to stop anywhere. They change nothing about where parking is prohibited.",
        excerptKey: "stat-parking-bike-lane",
        sourceLabel: "Minnesota Statutes 169.34 - Prohibitions; stopping, parking",
        sourceUrl: STAT("169.34"),
      },
      {
        id: "mn_s5_23",
        topic: "rules",
        question:
          "You are approaching a diverging diamond interchange for the first time. What is different about it?",
        choices: [
          "All left turns are banned and replaced with U-turns",
          "The interchange operates as one large roundabout",
          "Traffic signals are replaced by yield signs throughout",
          "Traffic crosses to the other side of the road at each end of the bridge",
        ],
        correctIndex: 3,
        explanation:
          "The lanes cross over at each end of the bridge, which removes the left turn across opposing traffic. Instead of turning sharply left you veer left into your access.",
        context:
          "Minnesota has built several of these, and the disorienting part is briefly driving on what feels like the wrong side. The signals and markings guide you through, and the payoff is that the movement that causes the worst interchange crashes has been engineered out. The J-turn does the same job at a rural divided highway using different geometry.",
        trap:
          "Confusing this with the J-turn is easy because both exist to delete a left turn. The J-turn keeps you on your own side and uses a U-turn; the diverging diamond crosses you over.",
        excerptKey: "diverging-diamond",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Diverging diamond interchange",
        sourceUrl: pg(80),
      },
      {
        id: "mn_s5_24",
        topic: "signals",
        question:
          "Reversible lanes in Minnesota are separated by dashed double yellow lines. When may you enter one?",
        choices: [
          "Whenever traffic in your direction is heavy",
          "During posted rush-hour periods only",
          "When the overhead signal above that lane shows a green arrow",
          "When the lane is empty in both directions",
        ],
        correctIndex: 2,
        explanation:
          "The overhead signal governs. A green arrow above the lane means you may cross into it; without that you stay out.",
        context:
          "Reversible lanes exist to add capacity in the peak direction, so the same pavement carries traffic one way in the morning and the other way in the afternoon. The lane use signals that control them are the same family as the steady red X, steady yellow X and flashing yellow X used over ordinary lanes.",
        trap:
          "Judging by the time of day or by which way the traffic looks heavier is exactly the guess that puts a car head-on into the peak flow.",
        excerptKey: "reversible-lanes",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Reversible lanes",
        sourceUrl: pg(74),
      },
      {
        id: "mn_s5_25",
        topic: "safety",
        question:
          "You are driving on packed snow with cruise control set. What does the manual advise?",
        choices: [
          "Avoid cruise control on slippery roads",
          "Use it, because it holds a steadier speed than a foot can",
          "Use it only above 45 mph",
          "Use it but keep your foot near the brake",
        ],
        correctIndex: 0,
        explanation:
          "Cruise control is to be avoided on slippery roads. It reacts to a loss of traction by adding power, which is the opposite of what a skid needs.",
        context:
          "The manual's winter advice is about restoring information and control. Test your brakes at low speed to feel the surface, adjust your speed to the conditions rather than the sign, and keep well back from snowplows, which throw sanding material and hide their own width behind a cloud of snow.",
        trap:
          "A steady speed sounds safer than a varying one. On ice a machine that cannot feel the road is the last thing you want holding the throttle.",
        excerptKey: "winter-cruise-control",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Winter driving vehicle safety",
        sourceUrl: pg(84),
      },
      {
        id: "mn_s5_26",
        topic: "emergencies",
        question:
          "You are in a minor collision in a parking lot with damage to both cars and no injuries. What does the manual say about notifying law enforcement?",
        choices: [
          "You must notify them within 24 hours in every case",
          "You must notify them only if the damage exceeds $1,000",
          "You must remain at the scene until an officer arrives",
          "You do not need to notify them if the crash caused property damage only",
        ],
        correctIndex: 3,
        explanation:
          "For a property-damage-only crash the manual says you do not need to notify law enforcement. Exchanging information is still required.",
        context:
          "The rest of the crash duties do not go away. You stop, help anyone injured and call for help if needed, exchange names, addresses and insurance details, and if you do not have your insurance information with you, you must give it to the investigating officer within 72 hours. Driving uninsured can cost up to $1,000, 90 days in jail and a revocation of up to a year.",
        trap:
          "The 72-hour figure attaches to giving insurance information to an officer, not to a duty to report a fender bender.",
        excerptKey: "crash-property-only",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: What to do in a traffic crash",
        sourceUrl: pg(42),
      },
      {
        id: "mn_s5_27",
        topic: "licensing",
        question:
          "A driver is convicted of driving more than 100 mph. What happens to their driving privileges?",
        choices: [
          "Suspended for 30 days",
          "Revoked for at least six months",
          "Revoked for 90 days",
          "Suspended until a hearing is held",
        ],
        correctIndex: 1,
        explanation:
          "Driving over 100 mph brings a revocation of at least six months. It sits with fleeing a police officer in the manual's list of revocation triggers.",
        context:
          "Minnesota separates suspension, revocation and cancellation. Suspension covers things like letting someone else use your license, or an under-21 driver who drove after consuming alcohol. Revocation covers over-100-mph convictions, fleeing an officer and refusing or failing a chemical test. Cancellation follows false information on an application.",
        trap:
          "Additional fines apply at 20 mph or more over the limit, and people stop there. Past 100 mph the consequence stops being financial.",
        excerptKey: "revocation-reasons",
        sourceLabel: "Minnesota Driver's Manual - Chapter 7: Revocation",
        sourceUrl: pg(92),
      },
      {
        id: "mn_s5_28",
        topic: "sharing",
        question:
          "A passenger van ahead of you stops at a railroad crossing where no train is present, then starts to move. What may you not do?",
        choices: [
          "Follow it across the tracks",
          "Sound your horn to signal it on",
          "Pass it within 100 feet of the crossing",
          "Change lanes behind it",
        ],
        correctIndex: 2,
        explanation:
          "It is illegal to pass any vehicle within 100 feet of a railroad crossing, and these vehicles are required to stop whether or not a train is coming.",
        context:
          "Certain vehicles, including passenger vans, buses and larger trucks, must stop at all railroad tracks regardless of whether a train is present. The manual pairs that requirement with an instruction not to pass them, because a driver who assumes the stop is a mistake and goes around ends up on the tracks.",
        trap:
          "A vehicle stopping for nothing looks like a driver in difficulty. It is a legally required stop, and going around it is a passing violation on top of the risk.",
        excerptKey: "railroad-special-vehicles",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Special vehicles at railroad crossings",
        sourceUrl: pg(56),
      },
      {
        id: "mn_s5_29",
        topic: "rightOfWay",
        question:
          "A car ahead of you in the next lane has stopped for a pedestrian at a crosswalk. What may you do?",
        choices: [
          "Nothing - you may not pass a vehicle stopped for a pedestrian",
          "Pass, as long as you slow down",
          "Pass, since the pedestrian is not in your lane yet",
          "Pass if the pedestrian has already gone by your lane",
        ],
        correctIndex: 0,
        explanation:
          "Passing a vehicle that has stopped for a pedestrian is illegal in Minnesota. The stopped car hides the person from you and hides you from them.",
        context:
          "Pedestrian right-of-way violations are misdemeanors here. The duty extends to unmarked crosswalks, which are the places a road meets a sidewalk without painted lines, and to pedestrians using a white or metallic cane or a guide dog, who should not be startled with a horn or a revving engine.",
        trap:
          "Judging that the pedestrian has already cleared your lane is a guess made with your view blocked. That is the multiple-threat collision the rule exists to prevent.",
        excerptKey: "no-pass-stopped-for-pedestrian",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Watch for pedestrians",
        sourceUrl: pg(50),
        commonlyMissed: true,
      },
      {
        id: "mn_s5_30",
        topic: "impairment",
        question:
          "You have legally purchased cannabis products and are driving home. Where may they be carried?",
        choices: [
          "Anywhere in the vehicle, since possession is legal",
          "In the glove compartment, if it is closed",
          "In the passenger footwell, if sealed",
          "In the trunk, or an area not normally occupied by driver and passengers",
        ],
        correctIndex: 3,
        explanation:
          "The products go in the trunk, or in another area not normally occupied by the driver and passengers if the vehicle has no trunk. The utility compartment is specifically excluded.",
        context:
          "Legal possession and legal transport are separate questions, and the same split applies to alcohol: you may not drink or keep an open container of an alcoholic beverage in a vehicle on a public street, and you may not let a passenger do so either. Driving under the influence of cannabis, lower-potency hemp edibles or other cannabinoids is prohibited outright.",
        trap:
          "The glove compartment feels like a sealed, out-of-reach place. It is the utility compartment the rule names as not acceptable.",
        excerptKey: "open-container",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Open container",
        sourceUrl: pg(99),
      },
      {
        id: "mn_s5_31",
        topic: "signs",
        question:
          "You are approaching a low clearance sign on an underpass and your vehicle is taller than the figure shown. What should you do?",
        choices: [
          "Proceed slowly in the center of the roadway",
          "Proceed if the road surface looks freshly repaved",
          "Do not proceed",
          "Proceed with your load lowered",
        ],
        correctIndex: 2,
        explanation:
          "The sign gives a hard limit. If your vehicle is taller than the height shown, you do not go through, because getting stuck under a bridge is the outcome.",
        context:
          "This is a warning sign that behaves like a regulation, which is why it is worth reading carefully. Other yellow signs in the same group also carry a number that matters: a curve sign with a speed figure below it is telling you to slow to that speed, not suggesting it.",
        trap:
          "Assuming clearance figures include a margin is how box trucks end up wedged. The number is the number.",
        excerptKey: "low-clearance-sign",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Warning signs",
        sourceUrl: pg(66),
      },
      {
        id: "mn_s5_32",
        topic: "speed",
        question:
          "A crash has slowed traffic ahead and an officer has posted a reduced speed. What does Minnesota Statutes 169.14 do to the limit in a work zone on a 60 mph highway when a lane is closed?",
        choices: [
          "It becomes 45 mph",
          "It becomes 50 mph",
          "It stays at 60 mph unless signs say otherwise",
          "It becomes 40 mph",
        ],
        correctIndex: 0,
        explanation:
          "On a road with an established limit of 50 mph or more, the work zone limit adjusts to 45 mph when at least one lane or part of a lane is closed in either direction.",
        context:
          "The manual does not print this figure, so the statute supplies it. On the ground you follow the posted work zone limit, and exceeding it carries a $300 fine on top of the ordinary speeding penalty. Failing to obey a flag person in a work zone is a separate violation with its own penalty.",
        trap:
          "Assuming the posted limit is unchanged until a sign says otherwise misses that the statute changes it by operation of law when a lane closes.",
        excerptKey: "stat-work-zone-45",
        sourceLabel: "Minnesota Statutes 169.14 - Speed limit in work zone when workers present",
        sourceUrl: STAT("169.14"),
      },
      {
        id: "mn_s5_33",
        topic: "safety",
        question:
          "Your car begins to skid on an icy Minnesota road. What is the manual's first instruction?",
        choices: [
          "Brake firmly and hold the wheel straight",
          "Steer sharply the opposite way to the skid",
          "Shift into a lower gear",
          "Take your foot off the accelerator",
        ],
        correctIndex: 3,
        explanation:
          "You come off the accelerator and brake only as far as you can while steering where you want to go. Slamming the brakes is what the manual tells you not to do.",
        context:
          "A skid means the tires have lost grip, so anything abrupt keeps them from finding it again. If the car has anti-lock brakes you do not pump them: you press the pedal down and keep steering until control comes back. Both instructions are versions of the same idea, which is that steering is the tool that still works.",
        trap:
          "Pumping the brakes is correct on older systems and wrong with anti-lock brakes, which is why the manual states the ABS case separately.",
        excerptKey: "abs-no-pumping",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Anti-lock braking",
        sourceUrl: pg(86),
      },
      {
        id: "mn_s5_34",
        topic: "rules",
        question:
          "You are turning right at an intersection where two right-turn lanes are marked. What must you do during the turn?",
        choices: [
          "Move to the outer lane as you complete the turn",
          "Move to the inner lane, then signal to change",
          "Stay in your own lane all the way through",
          "Use whichever lane has less traffic on the new road",
        ],
        correctIndex: 2,
        explanation:
          "Where signs or markings show two or more turning lanes, you stay in your lane through the turn. Drifting across is a lane violation and a collision risk.",
        context:
          "Multiple turn lanes exist so that two streams can turn at once, which only works if each stream keeps its own path. The related habits the manual asks for are keeping your wheels straight while waiting to turn left, so a rear-end impact does not push you into oncoming traffic, and signaling at least 100 feet before the turn.",
        trap:
          "Merging mid-turn feels efficient and puts you into the vehicle turning beside you, which you cannot see while you are both curving.",
        excerptKey: "multiple-turn-lanes",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Multiple turn lanes",
        sourceUrl: pg(33),
      },
      {
        id: "mn_s5_35",
        topic: "licensing",
        question:
          "A 16-year-old drives without ever having held a permit or license. Under Vanessa's Law, what is the consequence?",
        choices: [
          "No permit, provisional or driver's license until age 18",
          "A 90-day delay before applying for a permit",
          "A fine only, with no effect on eligibility",
          "A one-year delay before applying for a permit",
        ],
        correctIndex: 0,
        explanation:
          "Driving without a license as a teenager blocks you from getting a permit, instruction permit or provisional license until you turn 18. It is a long consequence for a single choice.",
        context:
          "Minnesota's graduated system already sets a slow path: an instruction permit held at least six months if you are 18 or younger, a supervised driving log of at least 50 hours including 15 at night unless a parent takes the class instead, and then a provisional license with night and passenger limits. Vanessa's Law removes the path entirely for a while.",
        trap:
          "Treating unlicensed driving as an ordinary ticket badly understates it. The penalty here is measured in years of ineligibility.",
        excerptKey: "vanessas-law-unlicensed",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Vanessa's Law",
        sourceUrl: pg(18),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions across all eight chapters of the Minnesota Driver's Manual, mixed the way the real 40-question Class D test is mixed. No hints beyond what the exam gives you. You need 80 percent to pass.",
    questions: [
      {
        id: "mn_s6_01",
        topic: "signals",
        question: "A steady yellow traffic light comes on as you approach the intersection. What should you do?",
        choices: [
          "Speed up to clear the intersection before the red",
          "Stop immediately in all circumstances",
          "Treat it as a flashing yellow and proceed without slowing",
          "Stop if you can do so safely, otherwise continue through with caution",
        ],
        correctIndex: 3,
        explanation:
          "A steady yellow means stop if stopping is safe. If you are too close to stop safely, you continue through carefully rather than braking hard.",
        context:
          "The rule accounts for the fact that a hard stop can cause a rear-end collision. If you are already waiting in the intersection to make a turn and the signal changes, you complete the turn when it is safe rather than reversing out.",
        trap:
          "Accelerating on yellow is the habit the light exists to discourage, and it is the behavior in most intersection crashes on a change of signal.",
        excerptKey: "steady-yellow",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Traffic-control signals",
        sourceUrl: pg(69),
      },
      {
        id: "mn_s6_02",
        topic: "rules",
        question: "On a road with three or more lanes going your way, which lane should you normally use?",
        choices: [
          "The middle lane, to keep clear of merging traffic",
          "The right-hand lane, except when passing",
          "The left-hand lane, to keep clear of exits",
          "Whichever lane is moving fastest",
        ],
        correctIndex: 1,
        explanation:
          "Minnesota expects you to travel in the right-hand lane and use the others to pass. DVS's own practice test asks this question directly.",
        context:
          "The rule has exceptions written into it: you drive on the right except when passing, when the right side is closed for construction or repair, and in the other situations the manual lists. Slower traffic keeping right is what makes a multilane road work at all.",
        trap:
          "The middle lane feels like the safe compromise. The instruction is specifically the right-hand lane.",
        excerptKey: "drive-right-exceptions",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Traffic laws and vehicle operation",
        sourceUrl: pg(29),
      },
      {
        id: "mn_s6_03",
        topic: "safety",
        question: "You are pulling away from a parallel parking space at the curb. What should you do before moving?",
        choices: [
          "Check the inside rear-view mirror",
          "Sound the horn",
          "Turn your head and look for traffic",
          "Switch on your four-way flashers",
        ],
        correctIndex: 2,
        explanation:
          "You turn your head and look. Mirrors leave a blind spot exactly where a passing car or a bicycle will be.",
        context:
          "The head check belongs to every lateral movement, not just leaving a space: lane changes, merges and pulling out from a curb. When you park, the car should end up within 12 inches of the curb, and the manual also warns about opening a door into traffic when you leave the vehicle.",
        trap:
          "The inside mirror shows the lane behind you, not the space beside you. It is the option that looks responsible and misses the hazard.",
        excerptKey: "exiting-parked",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Exiting a parked vehicle",
        sourceUrl: pg(38),
      },
      {
        id: "mn_s6_04",
        topic: "impairment",
        question: "What does alcohol do to a driver?",
        choices: [
          "It harms both driving skills and judgment",
          "It harms driving skills but leaves judgment intact",
          "It harms judgment but leaves driving skills intact",
          "It affects neither until the legal limit is reached",
        ],
        correctIndex: 0,
        explanation:
          "Alcohol degrades skills and judgment together, which is what makes it so dangerous: the impaired driver is also the one least able to tell.",
        context:
          "Alcohol is involved in more than a third of the deaths on Minnesota roads each year, killing an average of 240 people annually. It narrows the range of eye movement and reduces peripheral vision, and at higher concentrations it blurs vision as well.",
        trap:
          "The idea that skills go before judgment gets the danger backwards. Judgment is affected early, which is why people drive when they should not.",
        excerptKey: "alcohol-one-third",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Alcohol and driving",
        sourceUrl: pg(94),
      },
      {
        id: "mn_s6_05",
        topic: "signs",
        question: "What do brown highway signs indicate?",
        choices: [
          "Motorist services such as gas and food",
          "Construction and maintenance zones",
          "Exits and distances to cities",
          "Historic, cultural or recreational sites",
        ],
        correctIndex: 3,
        explanation:
          "Brown is the color for historic, cultural and recreational destinations. Blue handles services, green handles guidance and distances.",
        context:
          "Minnesota's color system is worth learning as a set: red and white regulatory signs give the law, yellow warns, orange marks construction, green guides, blue lists services and brown points to parks and landmarks. A sign's color tells you what kind of information it carries before you read a word of it.",
        trap:
          "Blue and brown both mark destinations off the highway, and they are the pair people swap. Services are blue.",
        excerptKey: "sign-colors-info",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Sign color meanings",
        sourceUrl: pg(59),
      },
      {
        id: "mn_s6_06",
        topic: "safety",
        question: "At night, what is hardest for a driver to see?",
        choices: ["Road signs", "Other vehicles", "Pedestrians", "Streetlights"],
        correctIndex: 2,
        explanation:
          "Pedestrians are the hardest, because they carry no lights and no reflectors and are often wearing dark clothing.",
        context:
          "Nearly half of all fatal traffic crashes in Minnesota happen after dark even though there is less traffic then. The manual's answer is to drive within your headlights: you should be able to stop inside the distance they light, which for most vehicles is no more than 350 feet on high beam.",
        trap:
          "Signs and other vehicles are both reflective or lit. That is precisely why they are not the answer.",
        excerptKey: "night-fatal-crashes",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Night driving",
        sourceUrl: pg(76),
      },
      {
        id: "mn_s6_07",
        topic: "parking",
        question: "You have to stop along a rural road at night. What must your vehicle show?",
        choices: [
          "A white or amber front light and a red taillight, both visible from 500 feet",
          "Nothing, provided you are fully off the pavement",
          "Headlights on high beam so you are seen from a distance",
          "Parking lights only, so as not to dazzle other drivers",
        ],
        correctIndex: 0,
        explanation:
          "At least one white or amber light at the front and one red light at the rear, each visible from at least 500 feet. Parking lights or hazard lights do the job.",
        context:
          "A stopped car at night on a rural road is nearly invisible, and Minnesota's highway parking rule exists for that reason. If you are stranded on a freeway and have flares or reflectors, they go 100 to 500 feet behind the vehicle on the right edge of the road.",
        trap:
          "Turning everything off to save the battery is what people do, and it removes the only thing making the car visible.",
        excerptKey: "highway-parking-lights",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Highway parking",
        sourceUrl: pg(40),
      },
      {
        id: "mn_s6_08",
        topic: "rightOfWay",
        question: "You are turning left at a green light with oncoming traffic. Where should you wait?",
        choices: [
          "Behind the stop line until the way is clear",
          "In the middle of the intersection, with wheels turned left",
          "In the oncoming lane's turn pocket",
          "In the intersection, with your body even with the curb line",
        ],
        correctIndex: 3,
        explanation:
          "You move into the intersection and wait with your body even with the curb line. From there you may only be able to complete the turn once the light changes to yellow.",
        context:
          "Waiting behind the line means nobody gets through on a green, which is why the manual puts you in the intersection. While you wait, your wheels stay straight, so that a rear-end impact pushes you forward rather than into oncoming traffic.",
        trap:
          "Turning the wheels early is the natural thing to do and it is the one detail the manual explicitly warns against.",
        excerptKey: "left-turn-wait-position",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Turns",
        sourceUrl: pg(31),
      },
      {
        id: "mn_s6_09",
        topic: "sharing",
        question: "A bicyclist is riding in a marked bicycle lane and you need to turn right across it. What should you do?",
        choices: [
          "Yield to the bicyclist before crossing the lane",
          "Turn first, since your vehicle is larger and slower to move",
          "Sound your horn and turn",
          "Stop in the bicycle lane and wait for a gap",
        ],
        correctIndex: 0,
        explanation:
          "The rider has the lane, so you yield before crossing it. A right hook, where a turning car cuts across a rider going straight, is one of the most common bicycle crashes.",
        context:
          "Bicycles are vehicles in Minnesota with the same rights on the road. When you pass a rider you leave at least three feet, you may cross the center line to do so even in a no-passing zone when safe, and you check first that the rider is not signaling a left turn.",
        trap:
          "Assuming a slower vehicle should give way to a faster one inverts the rule. Position, not speed, decides this one.",
        excerptKey: "bicycle-lane-driving",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Bicycle lanes",
        sourceUrl: pg(51),
      },
      {
        id: "mn_s6_10",
        topic: "licensing",
        question: "How long is a Minnesota instruction permit valid?",
        choices: ["Two years", "One year", "Three years", "Until your eighteenth birthday"],
        correctIndex: 0,
        explanation:
          "An instruction permit is valid for two years. That is the window in which the supervised driving and the road test have to happen.",
        context:
          "The rest of the sequence follows from it. If you are 18 or younger you must hold the permit at least six months before the road test, or three months if you are 19 or older, and under-18 applicants need a log of at least 50 supervised hours including 15 at night unless a parent completes the supervised driving class instead.",
        trap:
          "The six-month holding period and the two-year validity are different numbers doing different jobs, and they get merged.",
        excerptKey: "permit-valid-two-years",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Your instruction permit",
        sourceUrl: pg(16),
      },
      {
        id: "mn_s6_11",
        topic: "emergencies",
        question: "Your accelerator sticks open on a busy street. What should you do?",
        choices: [
          "Switch off the ignition immediately",
          "Sound your horn and steer for the shoulder at speed",
          "Pump the accelerator until it releases",
          "Apply the brakes and shift into neutral",
        ],
        correctIndex: 3,
        explanation:
          "You brake and shift into neutral to disconnect the engine from the wheels. You can also try hooking your toe under the pedal to lift it first.",
        context:
          "Neutral is the answer because it keeps power steering and power brakes alive while removing the engine's drive. Switching off the ignition takes the assistance away and can lock the steering, which turns a manageable problem into an unsteerable car.",
        trap:
          "Killing the engine feels like the direct fix. It removes the two systems you most need while the car is still moving.",
        excerptKey: "stuck-gas-pedal",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Stuck gas pedal",
        sourceUrl: pg(89),
      },
      {
        id: "mn_s6_12",
        topic: "rules",
        question: "How far in advance must you signal before turning?",
        choices: ["At least 100 feet", "At least 50 feet", "At least 200 feet", "At least three seconds"],
        correctIndex: 0,
        explanation:
          "The signal goes on at least 100 feet before the turn, and it stays on until you have finished the turn or the lane change.",
        context:
          "Minnesota measures this in distance rather than time. Hand and arm signals are an accepted alternative in daylight, and the manual describes them for use when a vehicle's lights are not working or not visible.",
        trap:
          "A three-second count is the following-distance rule, not the signaling rule. The signaling number is a distance.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Signaling",
        sourceUrl: pg(30),
      },
      {
        id: "mn_s6_13",
        topic: "signs",
        question: "A yellow diamond sign shows a car with wavy lines behind it. What does it mean?",
        choices: [
          "The road is slippery when wet",
          "The road floods in heavy rain",
          "The road surface is loose gravel",
          "The road is about to curve sharply",
        ],
        correctIndex: 0,
        explanation:
          "It marks a road that is slippery when wet, and it is often placed near bridges and overpasses, which ice before the rest of the road.",
        context:
          "Minnesota's warning signs are geography lessons in yellow. A slippery road sign near a bridge, a divided highway ends sign before two-way traffic resumes, a two-way traffic sign as you leave a one-way road, and a lane ends sign where two lanes become one all tell you what the road is about to do.",
        trap:
          "The wavy lines are often read as water on the road. The warning is about the surface losing grip, which is a wet-road and a winter problem in Minnesota.",
        excerptKey: "slippery-road-sign",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Warning signs",
        sourceUrl: pg(66),
      },
      {
        id: "mn_s6_14",
        topic: "speed",
        question:
          "You are driving on an interstate freeway outside any urbanized area of more than 50,000 people. What is the statutory limit?",
        choices: ["70 mph", "65 mph", "60 mph", "75 mph"],
        correctIndex: 0,
        explanation:
          "Minnesota Statutes set 70 mph on interstate highways outside urbanized areas of more than 50,000 people, and 65 mph inside them.",
        context:
          "The manual itself prints only three default limits: 10 mph in alleys, 30 mph on urban or town roads, and 55 mph elsewhere. The freeway figures come from the statute. Above all of them the basic speed law still applies, requiring a speed that is reasonable for the weather, traffic and road conditions you are actually in.",
        trap:
          "The 55 mph default is the manual's catch-all and it gets applied to freeways, where the statute has raised it.",
        excerptKey: "stat-speed-expressway-65",
        sourceLabel: "Minnesota Statutes 169.14 - Speed limits",
        sourceUrl: STAT("169.14"),
      },
      {
        id: "mn_s6_15",
        topic: "safety",
        question: "You are being tailgated on a two-lane road. What does the manual tell you to do?",
        choices: [
          "Speed up to open a gap",
          "Brake sharply to discourage the driver",
          "Move onto the shoulder and continue",
          "Slow down slightly and let the vehicle pass",
        ],
        correctIndex: 3,
        explanation:
          "Slowing a little gives the following driver room and an easier chance to pass. The aim is to get them past you rather than to win the exchange.",
        context:
          "Minnesota's baseline is a three-second following count, stretched to four or five seconds in poor conditions or with a longer vehicle. The same section is honest about reaction time: about three-quarters of a second passes between seeing danger and touching the brake, before the car has slowed at all.",
        trap:
          "Brake-checking is the response tailgating provokes and it creates the collision it was meant to prevent.",
        excerptKey: "tailgated",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Three-Second Rule",
        sourceUrl: pg(76),
      },
      {
        id: "mn_s6_16",
        topic: "impairment",
        question:
          "An officer has probable cause to believe you are impaired and asks for a breath test. What happens if you refuse?",
        choices: [
          "Refusing is a crime in itself",
          "Nothing, since you have a right to decline",
          "You are held until a test can be compelled",
          "Your license is suspended for 24 hours only",
        ],
        correctIndex: 0,
        explanation:
          "Under Minnesota's implied consent law, refusing a test of blood, breath or urine is itself a crime. It is not a way out of a DWI.",
        context:
          "Refusal also triggers the administrative side: you may be given a seven-day temporary license before your driving privileges go, and refusal counts as an aggravating factor that makes penalties more severe. The preliminary breath test at the roadside is a separate step from the evidentiary test.",
        trap:
          "Refusing looks like withholding evidence. In Minnesota it adds a charge rather than avoiding one.",
        excerptKey: "implied-consent",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Implied consent/search warrant law",
        sourceUrl: pg(96),
      },
      {
        id: "mn_s6_17",
        topic: "signals",
        question: "The pedestrian signal at the crossing you are watching shows a flashing symbol. What does that mean for people on foot?",
        choices: [
          "Do not start crossing; finish if you have already begun",
          "Start crossing immediately",
          "Wait for a vehicle signal instead",
          "Cross only at a run",
        ],
        correctIndex: 0,
        explanation:
          "A flashing signal means nobody new should step off the curb, but anyone already in the crosswalk finishes their crossing.",
        context:
          "For drivers the consequence is that people will still be in the crosswalk after the flashing starts, and they have the right to complete the crossing. Minnesota also protects pedestrians at unmarked crosswalks, where a road meets a sidewalk without painted lines, and makes it illegal to pass a vehicle that has stopped for someone.",
        trap:
          "Treating the flashing phase as a cleared crosswalk is how turning drivers hit people who started legally.",
        excerptKey: "flashing-dont-walk",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Pedestrian signals",
        sourceUrl: pg(70),
      },
      {
        id: "mn_s6_18",
        topic: "sharing",
        question: "A large truck is passing you on a two-lane highway. What should you do?",
        choices: [
          "Speed up so the pass takes less road",
          "Move onto the shoulder to give room",
          "Flash your headlights when it is safe to return",
          "Stay in your lane and ease off the accelerator",
        ],
        correctIndex: 3,
        explanation:
          "Holding your lane and easing off shortens the pass without creating a new hazard. The truck needs the road ahead, not your shoulder.",
        context:
          "Passing a commercial vehicle takes three to five seconds longer than passing a car, and you must be back on the right side of the road before you come within 100 feet of an oncoming vehicle. The same geometry applies in reverse when a truck passes you, which is why slowing slightly helps.",
        trap:
          "Moving onto the shoulder feels generous and puts you on a surface with less grip while a large vehicle is beside you.",
        excerptKey: "truck-passes-you",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Passing a commercial vehicle",
        sourceUrl: pg(54),
      },
      {
        id: "mn_s6_19",
        topic: "parking",
        question: "How close to the curb must you finish a parallel park?",
        choices: ["Within 12 inches", "Within 6 inches", "Within 18 inches", "Within 24 inches"],
        correctIndex: 0,
        explanation:
          "Twelve inches is the standard, and it is checked on the road test. Further out and your car intrudes into the traffic lane.",
        context:
          "The manual's parking rules run from where you may park to how you leave. You may not park within 20 feet of a crosswalk at an intersection, within 30 feet of a stop sign, flashing light or signal, within 50 feet of the nearest rail, within 10 feet of a fire hydrant, on a bridge or in a highway tunnel.",
        trap:
          "Eighteen inches is the figure in several other states and it is the near-miss answer here.",
        excerptKey: "parallel-12-inches",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Parking",
        sourceUrl: pg(38),
      },
      {
        id: "mn_s6_20",
        topic: "rightOfWay",
        question:
          "An ambulance with lights and siren is approaching you on a two-way street. What must you do?",
        choices: [
          "Pull to the right and stop",
          "Pull to the left and stop",
          "Continue at reduced speed",
          "Stop where you are, in your lane",
        ],
        correctIndex: 0,
        explanation:
          "On a two-way road you pull to the right and stop. On a one-way road you pull to whichever side is nearer and clear.",
        context:
          "The predictable part is what helps: emergency drivers plan around everyone moving the same way. You do not have to stop if a physical barrier such as a fence, wall or median strip separates you from the emergency vehicle. In a roundabout you exit first and pull over after.",
        trap:
          "Stopping in place in your lane leaves the ambulance nowhere to go and is the response that actually delays it.",
        excerptKey: "emergency-vehicle-barrier",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Yield to emergency vehicles",
        sourceUrl: pg(47),
      },
      {
        id: "mn_s6_21",
        topic: "signs",
        question: "You see a white sign with a red circle and slash over a U-shaped arrow. What is prohibited?",
        choices: [
          "Left turns at this location",
          "Turning around anywhere on this road",
          "Backing up at this location",
          "U-turns at this location",
        ],
        correctIndex: 3,
        explanation:
          "The slashed U-shaped arrow prohibits U-turns at that spot. The sign bans the movement shown and nothing wider.",
        context:
          "Minnesota also bans U-turns by law in places that carry no sign at all: on interstate freeways, near the tops of hills, and on curves where other drivers cannot see you from 1,000 feet away. A sign narrows things down; the statute covers the geometry.",
        trap:
          "Reading the sign as a general ban on turning around confuses a location rule with a road-wide one.",
        excerptKey: "u-turn-rules",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: U-turns",
        sourceUrl: pg(36),
      },
      {
        id: "mn_s6_22",
        topic: "licensing",
        question: "A vehicle with a gross vehicle weight of 26,001 pounds or more requires what?",
        choices: [
          "More than a Class D license",
          "A Class D license with a trailer endorsement",
          "A Class D license and proof of commercial insurance",
          "Nothing beyond a Class D license",
        ],
        correctIndex: 0,
        explanation:
          "A Class D license does not cover vehicles at or above 26,001 pounds gross vehicle weight. That threshold is where commercial licensing begins.",
        context:
          "Class D does allow towing, within limits: a trailer of 10,000 pounds gross weight or less, or one over 10,000 pounds where the combined weight stays under the ceiling the manual sets. Anything with a trailer of 3,000 pounds or more must have its own brakes.",
        trap:
          "The towing allowance makes Class D feel broader than it is. The 26,001-pound figure is a hard boundary.",
        excerptKey: "class-d-26001",
        sourceLabel: "Minnesota Driver's Manual - Chapter 1: Class D license",
        sourceUrl: pg(20),
      },
      {
        id: "mn_s6_23",
        topic: "emergencies",
        question: "A deer runs onto the road ahead of you at dusk. What is the manual's advice about when deer are most active?",
        choices: [
          "From dusk to dawn",
          "In the middle of the day",
          "Only during the autumn rut",
          "Only after heavy snowfall",
        ],
        correctIndex: 0,
        explanation:
          "Deer are most active from dusk to dawn, which is exactly when your visibility is worst. Scanning the roadsides for eyeshine in your headlights is the practical countermeasure.",
        context:
          "Minnesota's deer advice is about detection rather than reaction, because by the time an animal is in your lane the options are poor. Swerving hard toward oncoming traffic or off the pavement is generally worse than the collision you were avoiding.",
        trap:
          "Treating deer as an autumn-only problem leaves you unprepared for the rest of the year, when they are just as nocturnal.",
        excerptKey: "deer",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Watch out for deer",
        sourceUrl: pg(87),
      },
      {
        id: "mn_s6_24",
        topic: "rules",
        question: "A vehicle is coming toward you in your lane. What should you do?",
        choices: [
          "Move to the right",
          "Move to the left, into the lane they left",
          "Hold your line and sound the horn",
          "Brake hard and stay centered",
        ],
        correctIndex: 0,
        explanation:
          "You move right. The other driver is most likely to correct back into their own lane, which is the space you would be moving into if you went left.",
        context:
          "The reasoning is about what the other driver will do next rather than about where the gap is now. The same logic underlies the manual's advice on running off the pavement, on aggressive drivers, and on skids: predict the recovery and stay out of its path.",
        trap:
          "The empty oncoming lane looks like the obvious escape. It is where the drifting driver is about to be.",
        excerptKey: "oncoming-in-your-lane",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Vehicle approaching in your lane",
        sourceUrl: pg(87),
      },
      {
        id: "mn_s6_25",
        topic: "safety",
        question: "Which of these is treated as a distracting activity by the manual?",
        choices: [
          "Adjusting the rear-view mirror before setting off",
          "Checking the side mirror before a lane change",
          "Scanning the road ahead continuously",
          "Preparing to smoke while driving",
        ],
        correctIndex: 3,
        explanation:
          "Preparing to smoke and smoking while driving are listed as distracting activities. DVS's own practice test asks about it directly.",
        context:
          "Distraction or inattention is a leading factor in Minnesota crashes and accounts for at least 25 percent of them each year. The manual's list runs well past phones, and the phone rules themselves are strict: holding a device is prohibited, including while stopped in traffic, with narrow exceptions for emergencies and hands-free use.",
        trap:
          "The other options are all parts of driving properly. Distraction means the activities that take attention away from the task, not the task itself.",
        excerptKey: "distraction-types",
        sourceLabel: "Minnesota Driver's Manual - Chapter 6: Distracted driving",
        sourceUrl: pg(81),
      },
      {
        id: "mn_s6_26",
        topic: "signals",
        question: "The traffic light turns green. Should you go straight away?",
        choices: [
          "Yes, but yield to any vehicle or person still in the intersection",
          "Yes, immediately - a green light is a right to proceed",
          "No, wait five seconds before entering",
          "No, unless the intersection has been clear for a full cycle",
        ],
        correctIndex: 0,
        explanation:
          "A green light lets you proceed, but anyone already in the intersection has to be allowed to clear it first.",
        context:
          "The same idea governs gridlock: you should not enter a signal-controlled intersection unless you can move through it immediately, continuously and completely without blocking cross traffic. A green that puts you in the middle of a jam is a green you should not take.",
        trap:
          "Waiting a fixed count is not a Minnesota rule, and neither is going the instant the light changes. The condition is whether the intersection is clear.",
        excerptKey: "green-light",
        sourceLabel: "Minnesota Driver's Manual - Chapter 5: Traffic-control signals",
        sourceUrl: pg(70),
      },
      {
        id: "mn_s6_27",
        topic: "sharing",
        question: "Where should a pedestrian walk on a road with no sidewalk?",
        choices: [
          "On the left, facing oncoming traffic",
          "On the right, with traffic behind them",
          "In the center of the lane so they are visible",
          "On whichever side has the wider shoulder",
        ],
        correctIndex: 0,
        explanation:
          "Facing traffic is the rule, because a pedestrian who can see approaching vehicles can step clear of one that is not moving over.",
        context:
          "For drivers the point is that people on rural roads will be coming toward you on your side, often in the dark. The manual is also specific about pedestrians who are blind: watch for a white or metallic cane or a guide dog, and do not use the horn or rev the engine near them.",
        trap:
          "Walking with traffic feels safer because you are not walking at the cars. It removes the pedestrian's only warning.",
        excerptKey: "pedestrian-walk-left",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: Crosswalks",
        sourceUrl: pg(50),
      },
      {
        id: "mn_s6_28",
        topic: "impairment",
        question: "Which substances does Minnesota's impaired driving law cover?",
        choices: [
          "Illegal drugs, prescription drugs, over-the-counter medicines and household products",
          "Alcohol and illegal drugs only",
          "Alcohol, illegal drugs and prescription drugs only",
          "Any substance, but only above a measured concentration",
        ],
        correctIndex: 0,
        explanation:
          "The law reaches every substance that impairs, including cold medicine off a shelf and inhaled household products. A legal prescription is not a defense.",
        context:
          "Cannabis is covered on the same footing: it is illegal to drive under the influence of a cannabis product, a lower-potency hemp edible, a hemp-derived consumer product, an artificially derived cannabinoid or tetrahydrocannabinols. For drugs other than alcohol there is no concentration threshold to hide behind.",
        trap:
          "The 0.08 threshold belongs to alcohol alone. Drug impairment is proved by impairment, not by a number.",
        excerptKey: "drugs-and-driving",
        sourceLabel: "Minnesota Driver's Manual - Chapter 8: Drugs and driving",
        sourceUrl: pg(94),
      },
      {
        id: "mn_s6_29",
        topic: "speed",
        question:
          "You approach an intersection at an unlawful speed and reach it at the same time as another vehicle. What happens to your right of way?",
        choices: [
          "You lose it",
          "You keep it, since right of way is decided by position",
          "It is shared, and the other driver must still yield",
          "It depends on which road is wider",
        ],
        correctIndex: 0,
        explanation:
          "Minnesota ties right of way to lawful speed. Arriving too fast forfeits the priority you would otherwise have had.",
        context:
          "The rule exists because right of way is a way of predicting who moves next, and a speeding driver has broken that prediction for everyone else. At an uncontrolled intersection the ordinary tie-break is that the driver on the left yields to the driver on the right.",
        trap:
          "Right of way is usually taught as pure geometry. Speed is the condition attached to it that people do not know is there.",
        excerptKey: "speed-row-lost",
        sourceLabel: "Minnesota Driver's Manual - Chapter 3: Speed limits",
        sourceUrl: pg(29),
        commonlyMissed: true,
      },
      {
        id: "mn_s6_30",
        topic: "licensing",
        question: "You are pulled over by law enforcement after dark. What does the manual suggest you do?",
        choices: [
          "Turn on your interior light",
          "Step out and walk back to the squad car",
          "Keep your headlights on high beam so the officer can see",
          "Have a passenger hold your documents out of the window",
        ],
        correctIndex: 0,
        explanation:
          "Switching on the interior light lets the officer see inside the car. It removes the uncertainty that makes a night stop tense for both of you.",
        context:
          "The rest of the guidance is about staying visible and predictable: pull over promptly and safely, stay in the vehicle unless you are asked to get out, and keep your hands where they can be seen. Fleeing an officer in a vehicle is a felony carrying up to three years and a day in prison, a fine of up to $5,000, or both.",
        trap:
          "Getting out to meet the officer is the exact behavior DVS's own practice test flags as wrong, and it is what people do when they are trying to be helpful.",
        excerptKey: "traffic-stop-interior-light",
        sourceLabel: "Minnesota Driver's Manual - Chapter 4: What to do and expect when stopped by law enforcement",
        sourceUrl: pg(48),
      },
    ],
  },
];
