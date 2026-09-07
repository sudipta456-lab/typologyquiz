import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Idaho Driver's Handbook, published
// by the Idaho Transportation Department, Division of Motor Vehicles, labeled
// on its cover "DRIVER'S HANDBOOK JULY 2026" and served from
// itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf. The book runs
// 139 pages and its printed page numbers are the PDF's page numbers, so every
// page reference here is both.
//
// Idaho tells you where the questions come from. Page 32 says the knowledge
// test "consists of 40 questions; you can miss up to six (6) questions before
// failing the test", and that the questions "are taken directly from
// information included in the Driver's Handbook". ITD also publishes its own
// 60-question sample Class D test at apps.itd.idaho.gov, and page 32 warns
// that other web-based practice tests are not an accurate representation. That
// sample test is the closest thing to a blueprint the state gives, and it
// shaped the WEIGHTING of this bank: the rules ITD chooses to sample appear
// here more than once, worded differently each time. No question was copied
// from it.
//
// Where the handbook is silent or summarizing, Idaho Code supplies the number,
// and page 2 of the handbook invites exactly that: "The Idaho Driver's
// Handbook paraphrases the language of Idaho statutes. Courts go by the actual
// language of the statutes, not this text." Three gaps matter enough to name
// here:
//
// 1. The handbook's Cell Phones section (page 92) still describes only the old
//    texting ban. Idaho Code 49-1401A, effective 1 July 2020, prohibits
//    operating a vehicle while USING a mobile electronic device at all, makes
//    it a primary offense, and sets the fine at $75/$150/$300. Where the two
//    disagree the questions follow the statute, and the handbook's narrower
//    sentence becomes the trap.
// 2. The handbook gives no fine for passing a stopped school bus and none for
//    a seat-belt violation. Idaho Code 49-1422 and 49-673 have both.
// 3. The school-bus exception is worded differently in the two places. The
//    handbook (page 70) frees oncoming traffic on "highways with four or more
//    lanes if two lanes are going in each direction"; the statute (49-1422)
//    frees oncoming traffic on "a highway of more than three (3) lanes" with
//    no two-each-way condition. Every school-bus question in this bank is set
//    on a road where both readings give the same answer.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads ITD's own
// authoritative wording.
const HB = "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf";
/** The handbook's printed page number IS its PDF page number. */
const hb = (page: number) => `${HB}#page=${page}`;
const CODE = "https://legislature.idaho.gov/statutesrules/idstat";

export const idahoSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Idaho Basics",
    difficulty: "starter",
    description:
      "The rules you meet in your first hour behind the wheel in Idaho: what the shapes and colors mean, who goes first, and the handful of numbers ITD expects you to know cold before it hands you a permit.",
    questions: [
      {
        id: "id_s1_01",
        topic: "signs",
        question: "What shape and color are most warning signs in Idaho?",
        choices: [
          "Round and yellow",
          "Rectangular and white",
          "Diamond-shaped, black on yellow",
          "Octagonal and orange",
        ],
        correctIndex: 2,
        explanation:
          "The handbook describes most warning signs as black on yellow and diamond-shaped. The diamond is the shape that tells you something unexpected is ahead before you can read a word of it.",
        context:
          "Idaho groups signs by purpose. Regulatory signs are generally black and white, some red and white, and carry a law. Warning signs are the yellow diamonds, plus the fluorescent yellow-green school warning signs. Work-zone warning signs are orange and black. Guide signs are green, blue or brown.",
        trap: "Orange is the work-zone color, not the general warning color. An orange diamond means road work rather than a permanent hazard.",
        excerptKey: "warning-sign-shape",
        sourceLabel: "Idaho Driver's Handbook - Warning Signs",
        sourceUrl: hb(49),
      },
      {
        id: "id_s1_02",
        topic: "signals",
        question: "A steady red circular light faces you. What does the Idaho handbook tell you to do?",
        choices: [
          "Come to a complete stop before you reach the stop line, crosswalk or intersection",
          "Slow down and proceed if the intersection is clear",
          "Stop only if a pedestrian or vehicle is in the intersection",
          "Stop, then go as soon as you have looked both ways",
        ],
        correctIndex: 0,
        explanation:
          "A steady red means stop, and Idaho is specific about where: before you reach the stop line, the crosswalk or the intersection. You then wait, except for a permitted turn on red.",
        context:
          "Steady red and flashing red are not the same signal. Steady red holds you until the light changes, though Idaho lets you turn right on it after stopping unless a sign forbids it. Flashing red is a stop sign in light form: stop, yield, then go when clear.",
        trap: "Treating a steady red like a flashing red is running the light. Only the flashing one lets you carry on once it is clear.",
        excerptKey: "steady-red",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals, Red Light",
        sourceUrl: hb(55),
      },
      {
        id: "id_s1_03",
        topic: "speed",
        question:
          "You are on a residential street inside an Idaho city and there is no speed limit sign anywhere. What is the maximum lawful speed?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 3,
        explanation:
          "Idaho sets 35 mph as the maximum in any residential, business or urban district when nothing is posted. It is a ceiling, not a target - the basic rule can still make 35 too fast.",
        context:
          "Idaho's unposted maximums are 35 mph in a residential, business or urban district; 75 mph on interstates, 80 where posted; 65 mph on state highways, 70 where posted; and 55 mph in other locations, up to 70 where posted.",
        trap: "Twenty-five is the residential default in most neighboring states, and Idaho drivers report guessing it and losing the question. Idaho prints 35.",
        excerptKey: "max-speed-urban",
        sourceLabel: "Idaho Driver's Handbook - Speed Limits",
        sourceUrl: hb(68),
        commonlyMissed: true,
      },
      {
        id: "id_s1_04",
        topic: "rightOfWay",
        question: "You reach a four-way stop a moment before the car on your left. Who goes first?",
        choices: [
          "The car on your left, because vehicles on the left always have priority",
          "You do, because the first vehicle to arrive has the right of way",
          "Whichever driver is going straight rather than turning",
          "Neither of you until a gap opens on the cross street",
        ],
        correctIndex: 1,
        explanation:
          "At a four-way stop Idaho decides by order of arrival. The first vehicle there goes first, and position only settles a tie.",
        context:
          "The handbook prints both halves of the rule in one line: the first vehicle to arrive at a four-way stop has the right of way, and if two vehicles arrive at the same time the vehicle on the left yields to the vehicle on the right. The same left-yields-to-right tiebreaker covers an uncontrolled intersection.",
        trap: "The yield-to-the-right rule is real but it is the tiebreaker, not the main rule. It only applies when you genuinely arrived together.",
        excerptKey: "four-way-stop",
        sourceLabel: "Idaho Driver's Handbook - Yielding to Other Drivers",
        sourceUrl: hb(75),
      },
      {
        id: "id_s1_05",
        topic: "licensing",
        question: "How many of Idaho's 40 knowledge test questions may you get wrong and still pass?",
        choices: ["Four", "Six", "Eight", "Ten"],
        correctIndex: 1,
        explanation:
          "Six. The handbook says the test is 40 questions and you can miss up to six before failing, which puts the pass mark at 34 correct, or 85 percent.",
        context:
          "Idaho's threshold is higher than most states, which sit at 80 percent. There is no separate signs section: sign meanings are mixed in with the rules. Fail and you wait three days and pay the $5 fee again.",
        trap: "Eight wrong would be 80 percent, the common pass mark elsewhere. In Idaho the seventh wrong answer has already failed you.",
        excerptKey: "knowledge-test-format",
        sourceLabel: "Idaho Driver's Handbook - Knowledge Test: Class D",
        sourceUrl: hb(32),
        commonlyMissed: true,
      },
      {
        id: "id_s1_06",
        topic: "safety",
        question: "What following distance does the Idaho handbook give as the minimum in normal conditions?",
        choices: [
          "One car length for every 10 mph",
          "Two seconds",
          "A fixed 100 feet",
          "Three seconds",
        ],
        correctIndex: 3,
        explanation:
          "Three seconds is Idaho's baseline. You count from the moment the vehicle ahead passes a fixed object until you reach the same object, and if you get there first you are too close.",
        context:
          "The handbook calls three seconds the minimum recommended safest procedure and tells you to increase it at high speed or in bad weather. Behind a motorcycle it asks for more than three seconds, and behind a snowplow it switches to two car lengths for every 10 mph.",
        trap: "Two seconds is the figure a lot of other states teach. Idaho prints three, and its own sample test asks for three.",
        excerptKey: "three-second-rule",
        sourceLabel: "Idaho Driver's Handbook - Following Distances",
        sourceUrl: hb(79),
      },
      {
        id: "id_s1_07",
        topic: "sharing",
        question:
          "A school bus ahead of you stops on a two-lane street and switches on its flashing red lights and stop arm. What must you do?",
        choices: [
          "Stop, and stay stopped until the children are clear of the road and the bus",
          "Slow to 20 mph and pass with care",
          "Stop only if you can see children crossing",
          "Pass on the left if the road ahead is clear",
        ],
        correctIndex: 0,
        explanation:
          "You stop, from either direction on a two-lane road, and you stay stopped while the red lights flash or the stop arm is out. The handbook adds that you remain stopped until all children are clear of the roadway and the bus.",
        context:
          "Idaho requires the stop whenever the red lights near the top of the bus are flashing or the stop arm on the left side is extended. The only escape is a wide divided road, and that exception is written differently in the handbook and in Idaho Code, so it never applies on a plain two-lane street.",
        trap: "There is no slow-and-pass option in Idaho. Passing a stopped school bus is a $300 fine for a first offense under Idaho Code 49-1422.",
        excerptKey: "school-bus-stop",
        sourceLabel: "Idaho Driver's Handbook - Stopping",
        sourceUrl: hb(70),
      },
      {
        id: "id_s1_08",
        topic: "parking",
        question: "How close to the curb must you park when you park parallel on an Idaho street?",
        choices: ["Within 6 inches", "Within 12 inches", "Within 18 inches", "Within 24 inches"],
        correctIndex: 2,
        explanation:
          "Eighteen inches. You park parallel to and within 18 inches of the curb or edge of the roadway, facing the same direction as traffic on your side.",
        context:
          "The same 18 inches is scored on the driving test: parking more than 18 inches from the curb while impeding traffic is listed as a critical driving error, which ends the skills test immediately.",
        trap: "Twenty-four inches is the distance several other states use and it is the wrong answer here. ITD's own sample test asks this one directly.",
        excerptKey: "parking-18-inches",
        sourceLabel: "Idaho Driver's Handbook - Parking",
        sourceUrl: hb(80),
      },
      {
        id: "id_s1_09",
        topic: "signals",
        question: "A signal ahead is flashing red. What does it require?",
        choices: [
          "Slow down and proceed with caution",
          "Wait where you are until the light turns green",
          "A complete stop, then yield to cross traffic and pedestrians, then go when clear",
          "Nothing, because the signal has failed",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red is a stop sign made of light. Idaho requires a complete stop, then you yield to cross traffic or pedestrians, then you proceed when it is clear.",
        context:
          "Idaho pairs the two flashing colors so you learn them together. Flashing red means stop and then go when safe. Flashing yellow means caution: slow down, look carefully for hazards and proceed. The difference is whether you must stop at all.",
        trap: "Waiting for green at a flashing red leaves you sitting there. The signal is doing exactly what it was set to do.",
        excerptKey: "flashing-red",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals, Flashing Red Light",
        sourceUrl: hb(55),
      },
      {
        id: "id_s1_10",
        topic: "signs",
        question: "What colors does the Idaho handbook give for regulatory signs?",
        choices: [
          "Generally black and white, although some are red and white",
          "Always yellow with black symbols",
          "Always orange with black lettering",
          "Green with white lettering",
        ],
        correctIndex: 0,
        explanation:
          "Regulatory signs are generally black and white, and some are red and white. A regulatory sign carries a law you must obey, so the plain color scheme is deliberately different from the warning yellow.",
        context:
          "Stop, Yield and Do Not Enter are the red-and-white regulatory signs. Speed limit signs and turn restrictions are the black-and-white ones. Inside a work zone the same rule holds: regulatory signs stay black and white or red and white while the warning signs go orange.",
        trap: "Yellow is the warning family, not the regulatory one. A yellow diamond tells you what might happen; a regulatory sign tells you what the law requires.",
        excerptKey: "regulatory-sign-colors",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signs",
        sourceUrl: hb(44),
      },
      {
        id: "id_s1_11",
        topic: "rules",
        question:
          "You approach a stop sign. There is no stop line and no crosswalk. Where does Idaho law say you stop?",
        choices: [
          "Exactly 20 feet back from the corner",
          "Anywhere within one car length of the corner",
          "In the intersection, once you can see both ways",
          "At the point nearest the intersecting highway where you can see approaching traffic",
        ],
        correctIndex: 3,
        explanation:
          "Idaho gives an order: stop at a marked stop line; if there is none, before the crosswalk on the near side; if there is no crosswalk either, at the point nearest the intersecting road where you can see traffic coming.",
        context:
          "That last step is why creeping forward after a stop is normal and legal in Idaho when a hedge or parked car blocks the view. What is not legal is treating the sign as a yield and rolling through.",
        trap: "There is no fixed 20-foot rule at a stop sign in Idaho. Twenty feet is the no-parking distance from a crosswalk, which is a different rule entirely.",
        excerptKey: "stop-sign-where",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signs, Stop",
        sourceUrl: hb(44),
      },
      {
        id: "id_s1_12",
        topic: "impairment",
        question: "You are 22 and driving your own car in Idaho. At what blood-alcohol concentration are you legally driving under the influence?",
        choices: [".02 or more", ".08 or more", ".10 or more", ".05 or more"],
        correctIndex: 1,
        explanation:
          "For a driver 21 or older in a non-commercial vehicle, the threshold is .08 or more. Idaho Code 18-8004 sets the same number.",
        context:
          "Idaho runs three thresholds at once: .02 or more if you are under 21, .04 or more in a commercial vehicle, and .08 or more if you are 21 or older. A concentration of .20 or more carries stiffer penalties again, and you can be convicted below .08 on other evidence of impairment.",
        trap: ".02 is the under-21 number. It applies to a 20-year-old in the same car on the same road, and getting the two the wrong way round is the usual mistake.",
        excerptKey: "dui-thresholds",
        sourceLabel: "Idaho Driver's Handbook - Driving Under The Influence",
        sourceUrl: hb(131),
      },
      {
        id: "id_s1_13",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with its siren going and its lights flashing. What does Idaho require?",
        choices: [
          "Speed up until you find a side street",
          "Pull immediately to the nearest curb or right edge of the road and stop",
          "Move one lane left and keep driving at the same speed",
          "Stop where you are, in your lane",
        ],
        correctIndex: 1,
        explanation:
          "You pull to the nearest curb or the right edge of the roadway and stop, and you stay stopped until the emergency vehicle has passed ahead of you.",
        context:
          "Idaho Code 49-625 adds one detail the handbook leaves out: you must stop clear of any intersection. Stopping in the middle of one boxes the ambulance in rather than letting it through.",
        trap: "Stopping dead in your lane is the wrong half of the rule. The point is to clear the lane, not simply to stop moving.",
        excerptKey: "emergency-vehicle-pull-over",
        sourceLabel: "Idaho Driver's Handbook - Emergency Vehicles",
        sourceUrl: hb(95),
      },
      {
        id: "id_s1_14",
        topic: "licensing",
        question: "How old must you be to apply for an Idaho Class D instruction permit?",
        choices: ["14 and a half", "15", "16", "17"],
        correctIndex: 3,
        explanation:
          "Seventeen. The Class D instruction permit lets someone 17 or older practice for a year with a licensed adult of 18 or older beside them, and you must pass the knowledge test to be issued one.",
        context:
          "Under 17, Idaho routes you through the graduated program instead: a driver training permit at 14 and a half, an approved driver training course, then a supervised instruction permit for a violation-free six months and 50 hours of practice.",
        trap: "Fourteen and a half is the driver training permit, which is only valid with a driving instructor. It is not the permit that lets a parent take you out.",
        excerptKey: "instruction-permit-17",
        sourceLabel: "Idaho Driver's Handbook - Class D Instruction Permits",
        sourceUrl: hb(16),
      },
      {
        id: "id_s1_15",
        topic: "safety",
        question: "Who has to wear a seat belt in an Idaho car that came with belts fitted?",
        choices: [
          "All occupants",
          "The driver and front-seat passengers only",
          "Everyone under 18 only",
          "The driver only",
        ],
        correctIndex: 0,
        explanation:
          "All occupants. Idaho law requires everyone riding in a vehicle the factory equipped with belts or shoulder straps to wear them.",
        context:
          "Idaho Code 49-673 sets the fine at $10 and makes belt enforcement secondary for adults, so an officer needs another reason to stop you first. That does not make it optional, and a driver under 18 can be cited for an unbelted passenger under 18.",
        trap: "The back seat is not exempt. Front-seat-only belt laws exist in some states; Idaho's is not one of them.",
        excerptKey: "seat-belts-required",
        sourceLabel: "Idaho Driver's Handbook - Seat Belts & Shoulder Straps",
        sourceUrl: hb(41),
      },
      {
        id: "id_s1_16",
        topic: "signs",
        question: "You pass a white-on-brown sign. What kind of information does it carry?",
        choices: [
          "A speed restriction",
          "Motorist services such as fuel and food",
          "A cultural, historical or scenic point of interest",
          "A warning about the road surface",
        ],
        correctIndex: 2,
        explanation:
          "Brown is Idaho's color for cultural, historical or scenic points of interest. It is a guide sign, so it tells you where something is rather than what you must do.",
        context:
          "Guide signs come in three colors: white on green for direction and distance, white on blue for motorist services, and white on brown for cultural, historical or scenic points.",
        trap: "Blue is the services color - fuel, food, lodging, hospitals. Brown is the one that points at a state park or a monument.",
        excerptKey: "guide-sign-colors",
        sourceLabel: "Idaho Driver's Handbook - Guide Signs",
        sourceUrl: hb(53),
      },
      {
        id: "id_s1_17",
        topic: "signals",
        question:
          "You are in the left-turn lane facing a green circular light, with oncoming traffic coming through. What may you do?",
        choices: [
          "Turn at once, because green means go",
          "Turn only if the oncoming cars are more than 100 feet away",
          "Turn only after yielding to oncoming traffic and to pedestrians in the crosswalks",
          "Wait for a green arrow, since a circular green never permits a left turn",
        ],
        correctIndex: 2,
        explanation:
          "A circular green permits the left turn but gives you no priority. You must yield to oncoming traffic and to pedestrians in the crosswalks before you go.",
        context:
          "The protection only arrives with a green arrow. Idaho also warns that a flashing yellow arrow means the same thing: turns are allowed after yielding to oncoming traffic and pedestrians.",
        trap: "There is no 100-foot rule for oncoming traffic in Idaho. You yield until the gap is genuinely safe, and no distance in the handbook substitutes for that judgment.",
        excerptKey: "green-light",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals, Green Circular Light",
        sourceUrl: hb(56),
      },
      {
        id: "id_s1_18",
        topic: "speed",
        question: "What is Idaho's basic rule for driving speed?",
        choices: [
          "Drive at a speed that is reasonable and prudent at all times",
          "Always drive the posted speed limit",
          "Stay 5 to 10 mph below the limit to be safe",
          "Match the speed of the traffic around you",
        ],
        correctIndex: 0,
        explanation:
          "The basic rule requires a speed that is reasonable and prudent for the conditions. It applies on every road, whether a limit is posted or not, and it can make the posted number illegal in ice, fog or heavy traffic.",
        context:
          "Idaho spells out what conditions means: other traffic including pedestrians and cyclists, the road surface, hazards at intersections, visibility, oncoming traffic and curves. The rule cuts both ways, and driving too slowly for conditions so that you impede traffic also violates it.",
        trap: "Driving well under the limit is not automatically safe. If you impede the flow of traffic you are breaking the basic rule even though you are under the posted number.",
        excerptKey: "basic-rule",
        sourceLabel: "Idaho Driver's Handbook - Speed Limits",
        sourceUrl: hb(68),
      },
      {
        id: "id_s1_19",
        topic: "sharing",
        question: "What is the minimum clearance Idaho asks you to leave when you pass a bicyclist?",
        choices: ["One foot", "Half a lane", "Two feet", "Three feet"],
        correctIndex: 3,
        explanation:
          "Three feet is the safe margin the handbook names, and it calls that the minimum passing space drivers should leave. Higher speeds call for more.",
        context:
          "The handbook's first choice is not three feet but a full lane change: move into the left lane if you can, and only if you cannot, pass with as much clearance as possible. It also notes that a typical 12-foot travel lane is not wide enough to share with a bicycle.",
        trap: "Squeezing past inside your own lane because you left a foot or two is the failure the rule exists to prevent. Waiting for a gap in oncoming traffic is usually a matter of seconds.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Idaho Driver's Handbook - Bicyclists",
        sourceUrl: hb(98),
      },
      {
        id: "id_s1_20",
        topic: "rules",
        question: "On a two-lane Idaho road with no other traffic, where does the law require you to drive?",
        choices: [
          "In whichever half of the road gives the smoothest surface",
          "As far to the right side of the road as possible",
          "Centered on the crown of the road",
          "In the left lane, keeping the right lane free for slower traffic",
        ],
        correctIndex: 1,
        explanation:
          "In most cases the law requires you to stay as far to the right side of the road as possible. The exceptions are named and limited.",
        context:
          "Idaho lists the exceptions: preparing to turn left, passing another vehicle going the same way, a multi-lane road where the right lane is for slow traffic, going briefly left around an obstruction, a pedestrian or an animal, a one-way road, or any road with two or more lanes in your direction.",
        trap: "The left lane is for passing and higher-speed traffic, not for cruising. On a freeway Idaho makes it illegal to sit in the extreme left lane long enough to impede traffic behind you.",
        excerptKey: "keep-right",
        sourceLabel: "Idaho Driver's Handbook - Keep to the Right",
        sourceUrl: hb(74),
      },
      {
        id: "id_s1_21",
        topic: "parking",
        question: "How far from a fire hydrant does Idaho prohibit parking?",
        choices: ["10 feet", "15 feet", "20 feet", "30 feet"],
        correctIndex: 1,
        explanation:
          "Fifteen feet. The handbook's no-parking list gives 15 feet of a fire hydrant, and the distance is measured from the hydrant, not from the curb marking.",
        context:
          "The list runs in a set of distances worth learning together: 15 feet of a fire hydrant, 20 feet of a crosswalk, 20 feet of a fire station driveway, 30 feet of a stop sign, yield sign or traffic signal, and 50 feet of railroad tracks.",
        trap: "Twenty feet is the crosswalk and fire-station distance, and 30 feet is the stop-sign distance. Idaho uses four different numbers in one list and mixing them up is the usual error.",
        excerptKey: "no-parking-distances",
        sourceLabel: "Idaho Driver's Handbook - No-Parking Zones",
        sourceUrl: hb(81),
      },
      {
        id: "id_s1_22",
        topic: "rightOfWay",
        question: "When must an Idaho driver yield to a pedestrian at an intersection?",
        choices: [
          "Only when the pedestrian is in a marked crosswalk",
          "Only when a walk signal is showing",
          "Only when the pedestrian started crossing before the light changed",
          "When the pedestrian is in a marked or unmarked crosswalk at that intersection",
        ],
        correctIndex: 3,
        explanation:
          "Marked or unmarked. Every intersection has crosswalks whether anyone painted them or not, and a pedestrian in one has the right of way.",
        context:
          "Idaho lists three cases where a vehicle must yield to a person on foot: in a marked or unmarked crosswalk at an intersection, when the vehicle is coming out of an alley or driveway, and whenever the pedestrian is blind and using a white cane or a guide dog.",
        trap: "The paint is not what creates the crosswalk. The handbook goes further and says that if someone is crossing where there is no painted crosswalk at all, you must stop and let them finish even when you technically have the right of way.",
        excerptKey: "yield-to-pedestrians",
        sourceLabel: "Idaho Driver's Handbook - Pedestrians & Right-of-Way",
        sourceUrl: hb(75),
      },
      {
        id: "id_s1_23",
        topic: "safety",
        question: "When does Idaho law require your headlights and tail lights to be on?",
        choices: [
          "From sunset to sunrise, and whenever poor visibility makes them necessary",
          "From thirty minutes after sunset until thirty minutes before sunrise",
          "Only when it is fully dark",
          "Whenever your windshield wipers are running",
        ],
        correctIndex: 0,
        explanation:
          "Sunset to sunrise, plus any time poor visibility makes lights necessary for safety. Idaho Code 49-903 puts a number on the second half: any time you cannot see people and vehicles clearly at 500 feet.",
        context:
          "Two other lighting rules come with it. You dim to low beam 500 feet before meeting an oncoming vehicle and 200 feet before overtaking one, and in daytime fog, smoke, dust or rain you turn the headlights on once visibility drops to 500 feet or less.",
        trap: "Thirty minutes after sunset is Washington's rule, and Idaho drivers who moved from there report missing this exact question. Idaho starts at sunset itself.",
        excerptKey: "lights-sunset-to-sunrise",
        sourceLabel: "Idaho Driver's Handbook - Other Laws You Need to Know, Lights",
        sourceUrl: hb(43),
        commonlyMissed: true,
      },
      {
        id: "id_s1_24",
        topic: "signals",
        question: "A circular yellow light comes on as you approach an intersection. What does it mean?",
        choices: [
          "Speed up to clear the intersection before the red",
          "The light has just turned green for the cross street",
          "Caution: the signal is about to turn red, so stop if you can do so safely",
          "You may proceed only if you are turning right",
        ],
        correctIndex: 2,
        explanation:
          "Yellow warns that red is coming. If you have not entered the intersection and can stop safely, you stop. If you are already in it, you keep going and clear it.",
        context:
          "The same logic covers a solid yellow arrow: the turn signal is changing, so stop if you can and complete the turn if you are already committed. A flashing yellow, by contrast, is not a warning of red at all - it means slow down and proceed with caution.",
        trap: "Accelerating to beat the red is exactly what the handbook does not say. The test asks whether you can stop safely, not whether you can make it.",
        excerptKey: "yellow-light",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals, Yellow Light",
        sourceUrl: hb(55),
      },
      {
        id: "id_s1_25",
        topic: "emergencies",
        question: "A power cut has left the traffic signals at a busy Boise intersection completely dark. What do you do?",
        choices: [
          "Park clear of the road and wait for the power to come back",
          "Sound your horn and go through without stopping",
          "Treat the intersection as a four-way stop",
          "Follow the car in front through on its green from before the outage",
        ],
        correctIndex: 2,
        explanation:
          "Idaho gives a single rule for a dead signal: treat the intersection as a four-way stop. Every approach stops, and order of arrival then decides who goes.",
        context:
          "The handbook says it twice, once under Traffic Signals and once under yielding, where it adds that when a stop light is out because of a power outage you yield to other drivers in the same manner as at four-way stops. ITD's own sample test asks this question.",
        trap: "A dark signal is not an uncontrolled intersection where you simply yield to the right. Every driver has to stop first.",
        excerptKey: "signal-out-four-way",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals",
        sourceUrl: hb(56),
      },
      {
        id: "id_s1_26",
        topic: "signs",
        question: "You approach a yield sign. What does Idaho require?",
        choices: [
          "Slow down and give way to vehicles and pedestrians already there, stopping if necessary",
          "A complete stop every time, as at a stop sign",
          "Maintain speed, since other traffic must give way to you",
          "Sound your horn before entering",
        ],
        correctIndex: 0,
        explanation:
          "A yield sign asks you to slow down and give way to vehicles and pedestrians in the intersection you are crossing or the highway you are entering, and to stop if that is what safety needs.",
        context:
          "The handbook adds a harder line for people on foot: if pedestrians are in or about to enter the crosswalk you stop until they have crossed, then proceed.",
        trap: "A yield sign is not a stop sign, and stopping every time is not what it asks. But it is also not a free pass - the stop becomes mandatory the moment there is anything to yield to.",
        excerptKey: "yield-sign",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signs, Yield",
        sourceUrl: hb(44),
      },
      {
        id: "id_s1_27",
        topic: "licensing",
        question: "Do you have to have your driver's license with you while you drive in Idaho?",
        choices: [
          "No, as long as it is valid and on record",
          "Only when driving outside your home county",
          "Only for the first year after it is issued",
          "Yes, you must carry it when operating a motor vehicle",
        ],
        correctIndex: 3,
        explanation:
          "You must carry your license when operating a motor vehicle. The handbook puts that in the same paragraph as the warning that misusing or mutilating a license, permit or ID card is a misdemeanor.",
        context:
          "Idaho also tells you not to lend your license, permit or ID to anyone, not to use anyone else's, not to hold an altered one, and not to keep one that has been canceled.",
        trap: "A valid license on the state's computer is not the same as a license in your pocket. The requirement is to carry it, and a worn or damaged card should be replaced with a duplicate.",
        excerptKey: "carry-your-licence",
        sourceLabel: "Idaho Driver's Handbook - Misuse of a Driver's License",
        sourceUrl: hb(13),
      },
      {
        id: "id_s1_28",
        topic: "rules",
        question:
          "You are about to change lanes on an Idaho highway. How long must your signal have been on before you move?",
        choices: [
          "Three flashes of the indicator",
          "At least five seconds",
          "At least two seconds",
          "As long as it takes to check your mirror",
        ],
        correctIndex: 1,
        explanation:
          "Five seconds on a freeway or highway. The handbook gives the pair together: at least 100 feet in a business or residential area, or five seconds on a freeway or highway.",
        context:
          "Idaho Code 49-808 words the rule slightly differently, requiring the five seconds on controlled-access highways and before pulling out of a parked position, and 100 feet everywhere else. On a freeway both readings give five seconds.",
        trap: "Idaho drivers repeatedly name this as the one nobody expects. A quick flick of the stalk is not a signal here, and counting flashes is not the measure.",
        excerptKey: "signal-distance",
        sourceLabel: "Idaho Driver's Handbook - Turns",
        sourceUrl: hb(72),
        commonlyMissed: true,
      },
      {
        id: "id_s1_29",
        topic: "sharing",
        question:
          "You are driving on open range in Idaho and a herd of cattle is grazing beside the road. Who has the right of way?",
        choices: [
          "You do, because livestock must be fenced away from highways",
          "The livestock, which are allowed to roam freely and unfenced",
          "Whoever reaches the point first",
          "You do, but only during daylight",
        ],
        correctIndex: 1,
        explanation:
          "On open range the animals have the right of way. Idaho's own Open Range warning sign says you are in an area where livestock have the right of way and are allowed to roam freely and unfenced.",
        context:
          "Open range means almost every area outside city limits and herd districts. If you hit and injure or kill an animal there, Idaho Code 25-2118 says the owner is not liable for damage to your vehicle, and you may be liable for the animal if you were negligent.",
        trap: "Idaho learners name this as the question that beat them more often than any other. A fence at the roadside does not mean the stock is behind it, and there is no daylight exception.",
        excerptKey: "open-range-sign",
        sourceLabel: "Idaho Driver's Handbook - Warning Signs, Open Range",
        sourceUrl: hb(49),
        commonlyMissed: true,
      },
      {
        id: "id_s1_30",
        topic: "safety",
        question: "What does the Idaho handbook say about checking your blind spot before moving sideways?",
        choices: [
          "Your mirrors cover it if they are properly adjusted",
          "Only check it when changing lanes on a freeway",
          "A blind spot exists only on vehicles without a right-side mirror",
          "Never rely on mirrors alone: turn your head and look before you move",
        ],
        correctIndex: 3,
        explanation:
          "The handbook is blunt about it. Never rely on your mirrors alone, and before any move to the side, quickly turn your head to see whether the blind spot is clear.",
        context:
          "Blind spots sit near the left and right rear corners of your car. If your vehicle has no right-side mirror the right blind spot is larger. The handbook adds the other half of the problem: avoid sitting in someone else's blind spot.",
        trap: "No mirror adjustment eliminates the blind spot. The head check is a separate action, and skipping it is what the rule is about.",
        excerptKey: "blind-spots",
        sourceLabel: "Idaho Driver's Handbook - Defensive Driving, Blind Spots",
        sourceUrl: hb(90),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Turning, passing, stopping, parking and the signs that govern them. These are the everyday rules the Idaho test keeps coming back to, worded the way the handbook words them.",
    questions: [
      {
        id: "id_s2_01",
        topic: "rules",
        question:
          "You are approaching a red light and want to turn right. There is no sign about turning. What does Idaho allow?",
        choices: [
          "Turn without stopping if the way is clear",
          "Turn after stopping and yielding to cross traffic",
          "Wait for green, since right on red is not permitted in Idaho",
          "Turn only between 6am and 10pm",
        ],
        correctIndex: 1,
        explanation:
          "You may turn right on a steady red after coming to a complete stop and yielding to cross traffic, unless a sign says otherwise.",
        context:
          "Idaho also allows a left turn on red from a one-way street onto a one-way street after the same stop and yield, again unless a sign forbids it. A steady red ARROW is different: no turn is permitted in the direction of the arrow until a green or yellow allows it.",
        trap: "The stop is not optional. Rolling through a red into a right turn is running a red light, whatever the traffic looked like.",
        excerptKey: "stop-red-turn-right",
        sourceLabel: "Idaho Driver's Handbook - Stopping",
        sourceUrl: hb(69),
      },
      {
        id: "id_s2_02",
        topic: "signs",
        question:
          "A pennant-shaped sign stands on the LEFT side of the road as you drive. What is it telling you?",
        choices: [
          "A passing lane begins here",
          "The road narrows ahead",
          "You are entering a no-passing zone for your lane",
          "There is a hidden driveway on the left",
        ],
        correctIndex: 2,
        explanation:
          "The pennant is the No Passing Zone sign. It sits on the left-hand side of the road, and it warns you of a no-passing zone for your lane of traffic.",
        context:
          "It appears in addition to a DO NOT PASS sign or pavement markings, so you often see the same instruction three ways. Its position on the left is unusual and deliberate: it puts the warning where you are already looking when you consider a pass.",
        trap: "Almost every other sign is on the right, which is why drivers report missing this one. A sign on the left is not somebody else's problem.",
        excerptKey: "no-passing-pennant",
        sourceLabel: "Idaho Driver's Handbook - Warning Signs, No Passing Zone",
        sourceUrl: hb(52),
      },
      {
        id: "id_s2_03",
        topic: "parking",
        question:
          "You are parking facing DOWNHILL on an Idaho street with a curb. Which way do you turn the front wheels?",
        choices: [
          "Sharply toward and against the curb",
          "Straight ahead, and set the parking brake",
          "Sharply away from the curb",
          "It makes no difference with an automatic transmission",
        ],
        correctIndex: 0,
        explanation:
          "Facing downhill, you turn the front wheels sharply toward and against the curb. If the car rolls, the curb catches the front wheel instead of letting it into traffic.",
        context:
          "Uphill is the mirror image: turn the wheels sharply away from the curb so that rolling back brings the wheel against it. Where there is no curb at all, turn the wheels sharply toward the edge of the road in both cases.",
        trap: "Away from the curb is the uphill answer. Reversing the two is the single most common error on this question anywhere it is asked.",
        excerptKey: "parking-on-hill",
        sourceLabel: "Idaho Driver's Handbook - Parking on a Hill or Incline",
        sourceUrl: hb(81),
      },
      {
        id: "id_s2_04",
        topic: "rules",
        question: "Is it legal to pass where the road is marked with a double solid yellow line?",
        choices: [
          "Yes, if there is no oncoming traffic",
          "Yes, if the car ahead is under the speed limit",
          "Only during daylight",
          "No, but you may cross to turn left into a driveway or business",
        ],
        correctIndex: 3,
        explanation:
          "Two solid yellow lines mean no passing in either direction. Idaho does allow you to cross them to turn left into or out of a driveway or business entrance, when it is safe.",
        context:
          "One solid and one dashed yellow line is the mixed case: only the side with the dashed line may cross to pass. A single dashed yellow line lets either direction cross when safe.",
        trap: "An empty road ahead does not turn a double yellow into a passing zone. The line is the rule, and Idaho's own sample test asks this one flatly.",
        excerptKey: "double-solid-yellow",
        sourceLabel: "Idaho Driver's Handbook - Pavement Markings",
        sourceUrl: hb(58),
      },
      {
        id: "id_s2_05",
        topic: "rightOfWay",
        question:
          "You are entering the street from your own driveway. Who must yield?",
        choices: [
          "Traffic on the street, because you are already committed",
          "Whoever moves first",
          "You must stop before the sidewalk and yield to pedestrians and traffic",
          "Nobody, if you sound your horn first",
        ],
        correctIndex: 2,
        explanation:
          "Idaho requires a stop before you cross the sidewalk, and then you yield to pedestrians and to traffic on the street.",
        context:
          "The same rule covers coming out of an alley, a building or a private road. It is also one of the three cases where a motor vehicle must yield to a pedestrian, alongside the crosswalk rule and the white cane rule.",
        trap: "The sidewalk is the line, not the curb. Stopping with your bumper already across the walkway has skipped the part of the rule that protects people on foot.",
        excerptKey: "stop-from-driveway",
        sourceLabel: "Idaho Driver's Handbook - Stopping",
        sourceUrl: hb(70),
      },
      {
        id: "id_s2_06",
        topic: "signals",
        question: "What does a steady red arrow mean in Idaho?",
        choices: [
          "Turn after stopping and yielding, as at a red circular light",
          "The turn is protected once the oncoming traffic clears",
          "No turn in the direction of the arrow until a green or yellow allows it",
          "Yield to pedestrians only",
        ],
        correctIndex: 2,
        explanation:
          "A steady red arrow forbids the turn outright. No turn is permitted in the direction of the arrow until a green or yellow indication allows movement.",
        context:
          "That is the difference between a red arrow and a red ball. A red ball allows a right turn after stopping, and a left onto a one-way after stopping. A red arrow allows nothing until it changes.",
        trap: "Treating the red arrow as a red ball is the mistake. The arrow exists precisely to remove the turn-on-red permission.",
        excerptKey: "steady-red-arrow",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals, Steady Red Arrow",
        sourceUrl: hb(55),
      },
      {
        id: "id_s2_07",
        topic: "sharing",
        question: "In Idaho, what must a bicyclist do at a stop sign?",
        choices: [
          "Slow down and yield, but they need not come to a complete stop",
          "Come to a complete stop every time, exactly as a car must",
          "Dismount and walk the bike through the intersection",
          "Stop only if a vehicle is already in the intersection",
        ],
        correctIndex: 0,
        explanation:
          "Idaho lets bicyclists treat a stop sign as a yield. They slow down and give way to vehicles in or already at the intersection, then proceed with caution without a full stop.",
        context:
          "The same law lets a cyclist proceed through a red light after stopping and yielding, and turn right on red without a complete stop. Idaho was the first state to write this rule, which is why it is known nationally as the Idaho stop.",
        trap: "It is easy to read this as cyclists ignoring stop signs. They still have to yield, and if a car is already there the cyclist waits.",
        excerptKey: "idaho-stop-sign",
        sourceLabel: "Idaho Driver's Handbook - Bicyclists",
        sourceUrl: hb(98),
        commonlyMissed: true,
      },
      {
        id: "id_s2_08",
        topic: "speed",
        question: "What is the maximum speed on an Idaho interstate highway unless a sign says otherwise?",
        choices: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctIndex: 3,
        explanation:
          "Seventy-five on interstates unless posted otherwise, and 80 is allowed where it is posted. State highways run at 65 unless posted, with 70 allowed where posted.",
        context:
          "The freeway chapter puts it in terms of where you are: up to 80 mph on rural interstates and up to 65 on urban interstates, where designated and as weather permits, unless otherwise posted.",
        trap: "Sixty-five is the state highway number, not the interstate number. Idaho uses both, and which road you are on decides which applies.",
        excerptKey: "max-speed-interstate",
        sourceLabel: "Idaho Driver's Handbook - Speed Limits",
        sourceUrl: hb(68),
      },
      {
        id: "id_s2_09",
        topic: "rules",
        question: "When may you legally pass another vehicle on the right in Idaho, without leaving the pavement?",
        choices: [
          "Whenever the vehicle ahead is under the speed limit and the shoulder is wide",
          "When the vehicle you are overtaking on a two-lane road is signaling a left turn",
          "Only during daylight",
          "Never - passing on the right is always illegal",
        ],
        correctIndex: 1,
        explanation:
          "Two cases only: the vehicle you are overtaking on a two-lane, two-way road is signaling a left turn, or you are on a one-way or multi-lane street with two or more lanes going your direction.",
        context:
          "The handbook adds a hard limit on both: the movement must not be made by driving off the roadway. Using the shoulder to get around someone is not passing on the right, it is leaving the road.",
        trap: "A wide shoulder is not a lane. Both the handbook and ITD's sample test use that exact wrong answer.",
        excerptKey: "passing-on-right",
        sourceLabel: "Idaho Driver's Handbook - Passing, Passing on the Right",
        sourceUrl: hb(77),
      },
      {
        id: "id_s2_10",
        topic: "signs",
        question: "You see a fluorescent yellow-green sign showing two figures walking, one carrying something. What is it?",
        choices: [
          "A pedestrian crossing warning",
          "A playground ahead",
          "A school crossing warning",
          "A bus stop ahead",
        ],
        correctIndex: 2,
        explanation:
          "Two figures is the school crossing sign. It tells you to watch for children, reduce speed and obey crossing guard signals.",
        context:
          "The nearby School Zone sign warns that you are nearing a school area with a crossing and notes that penalties for breaking school zone speed limits are increased. Both may be printed yellow or fluorescent yellow-green.",
        trap: "The pedestrian crossing sign shows a single walking figure. Idaho drivers name this pair as one of the obscure ones that cost them a mark, and the number of figures is the whole difference.",
        excerptKey: "school-crossing-sign",
        sourceLabel: "Idaho Driver's Handbook - Warning Signs, School Crossing",
        sourceUrl: hb(51),
        commonlyMissed: true,
      },
      {
        id: "id_s2_11",
        topic: "safety",
        question: "What does the Idaho handbook say to do if your car starts to skid?",
        choices: [
          "Brake hard and hold the wheel steady",
          "Pump the brakes rapidly and steer away from the skid",
          "Take your foot off the gas and steer in the direction of the skid",
          "Shift into neutral and coast until the car straightens",
        ],
        correctIndex: 2,
        explanation:
          "Do not brake. Take your foot off the gas pedal and steer in the direction of the skid - if the rear wheels slide right, turn the front wheels right.",
        context:
          "The handbook says most skids happen when the rear wheels lose grip and slide sideways, most often on ice or packed snow but also on wet or even dry pavement at speed. It suggests practicing stops and skid recovery somewhere safe before you need them.",
        trap: "Hitting the brake is the instinct and it is the wrong move. The handbook names it as exactly the kind of reflex that makes an emergency worse.",
        excerptKey: "skid-recovery",
        sourceLabel: "Idaho Driver's Handbook - Skidding, Recovery",
        sourceUrl: hb(116),
      },
      {
        id: "id_s2_12",
        topic: "licensing",
        question: "What happens if you fail the Idaho knowledge test?",
        choices: [
          "You may retake it the same day at no charge",
          "You wait 30 days and pay again",
          "You wait three days and pay the knowledge test fee again",
          "You must complete a driver training course before retesting",
        ],
        correctIndex: 2,
        explanation:
          "Three days, and you pay the $5 fee again. The handbook prints the retest rule in capitals under the knowledge test section.",
        context:
          "The skills test carries the same three-day wait, and there you pay both fees again - the county fee and the skills test examiner's.",
        trap: "There is no same-day retake in Idaho. The three-day wait is a hard gap, not a suggestion.",
        excerptKey: "knowledge-test-retest",
        sourceLabel: "Idaho Driver's Handbook - Knowledge Test: Class D",
        sourceUrl: hb(32),
      },
      {
        id: "id_s2_13",
        topic: "signals",
        question: "What is a flashing yellow arrow telling you at an Idaho intersection?",
        choices: [
          "The turn is protected and oncoming traffic is stopped",
          "You may turn after yielding to oncoming traffic and to pedestrians in the crosswalks",
          "The signal is faulty, so treat it as a stop sign",
          "No turn is allowed in that direction",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow arrow permits the turn but gives no protection. You yield to oncoming traffic and to pedestrians in the crosswalks, then go.",
        context:
          "Idaho pairs it with the solid yellow arrow, which means the turn signal is changing: stop if you have not entered the intersection and can do so safely, and complete the turn if you are already in it.",
        trap: "The protected turn is the green arrow. A flashing yellow arrow looks like permission and is only an opportunity.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals, Flashing Yellow Arrow",
        sourceUrl: hb(56),
      },
      {
        id: "id_s2_14",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection with no signs or signals at exactly the same moment. Who yields?",
        choices: [
          "The car that is turning yields to the car going straight",
          "The faster car yields",
          "Neither, since an uncontrolled intersection has no rule",
          "The car on the left yields to the car on the right",
        ],
        correctIndex: 3,
        explanation:
          "At an unmarked or uncontrolled intersection, if two vehicles arrive at the same time the vehicle on the left yields to the vehicle on the right.",
        context:
          "The same tiebreaker settles a simultaneous arrival at a four-way stop. An uncontrolled T-intersection has its own rule: the driver on the stem, who must turn right or left, yields to drivers approaching from the other two directions.",
        trap: "Going straight does not by itself create right of way at an uncontrolled intersection. Position does.",
        excerptKey: "uncontrolled-intersection",
        sourceLabel: "Idaho Driver's Handbook - Yielding to Other Drivers",
        sourceUrl: hb(75),
      },
      {
        id: "id_s2_15",
        topic: "emergencies",
        question:
          "You are involved in a crash in Idaho. At what point must you report it to police?",
        choices: [
          "Whenever anyone is injured or property damage is more than $1,500",
          "Only when a vehicle has to be towed",
          "Only when the other driver has no insurance",
          "Any crash at all, however minor",
        ],
        correctIndex: 0,
        explanation:
          "Injury, or property damage over $1,500. Below that threshold with nobody hurt, Idaho does not require a police report, though you still exchange information.",
        context:
          "The same $1,500 figure decides whether you must notify police after hitting an unattended vehicle, where you also have to make a reasonable effort to find the owner and leave a note with your name and phone number if you cannot.",
        trap: "Giving false information at the scene is a misdemeanor in Idaho, so an incorrect name or policy number is a separate offense from the crash.",
        excerptKey: "crash-report-threshold",
        sourceLabel: "Idaho Driver's Handbook - Crashes & the Law",
        sourceUrl: hb(121),
      },
      {
        id: "id_s2_16",
        topic: "signs",
        question:
          "An orange triangle with a red border is fixed to the back of a vehicle ahead. What is it telling you?",
        choices: [
          "The vehicle is carrying hazardous materials",
          "The vehicle is a student driver",
          "The vehicle is towing a trailer",
          "The vehicle is slow moving, so slow down and approach with caution",
        ],
        correctIndex: 3,
        explanation:
          "That is the slow-moving vehicle emblem. It means you are approaching a slow moving vehicle and should slow down and approach with caution.",
        context:
          "It is used mainly on off-road machinery on public roads: farm equipment, construction equipment and similar. Idaho requires every slow-moving vehicle to display the approved emblem, along with a foot brake and turn signals.",
        trap: "Idaho drivers list the orange triangle among the obscure signs that cost them a mark. Hazardous loads are marked with placards, not with a triangle.",
        excerptKey: "slow-moving-vehicle-sign",
        sourceLabel: "Idaho Driver's Handbook - Work Zone Signs, Slow Moving Vehicle Sign",
        sourceUrl: hb(47),
        commonlyMissed: true,
      },
      {
        id: "id_s2_17",
        topic: "rules",
        question: "Where does Idaho prohibit U-turns?",
        choices: [
          "On any road with a posted limit above 35 mph",
          "Only where a No U-Turn sign is posted",
          "On a curve, near the crest of a hill, or in a no-passing zone",
          "Anywhere inside city limits",
        ],
        correctIndex: 2,
        explanation:
          "Idaho bans the U-turn wherever approaching drivers cannot see you from 500 feet: on any curve, at or near the crest of a hill, and in a no-passing zone. A No U-Turn sign also makes it illegal.",
        context:
          "Where a U-turn is permitted, you still stop and yield to all traffic before completing it. Solid pavement markings down the center of the road also indicate that a U-turn is prohibited.",
        trap: "The absence of a sign is not permission. The visibility rule applies whether or not anybody put up a sign.",
        excerptKey: "u-turn-rules",
        sourceLabel: "Idaho Driver's Handbook - Turns, U-Turns",
        sourceUrl: hb(73),
      },
      {
        id: "id_s2_18",
        topic: "sharing",
        question: "How should you deal with a snowplow working on an Idaho highway?",
        choices: [
          "Stay two car lengths back for every 10 mph you are travelling, and pass only if you must",
          "Follow closely so you stay on the cleared surface",
          "Pass on the side the plow is spraying, since that lane is clear",
          "Overtake immediately, because plows are required to pull over",
        ],
        correctIndex: 0,
        explanation:
          "Two car lengths for every 10 mph of your speed, and do not pass unless it is absolutely necessary. Sand being spread by the truck can damage your car.",
        context:
          "If you must pass, do it only when you can clearly see the road ahead, and never on the side where the plow is throwing snow - the force of it can knock your car out of control. Do not cut back in front of the plow either, since the blades are wide and often hidden under snow.",
        trap: "Following close to stay on cleared pavement is exactly what the blizzard of snow off the blade makes dangerous. Idaho drivers repeat the shorter version to each other: do not pass snowplows.",
        excerptKey: "snowplow-following",
        sourceLabel: "Idaho Driver's Handbook - Snow Removal Equipment",
        sourceUrl: hb(110),
      },
      {
        id: "id_s2_19",
        topic: "safety",
        question: "At roughly what speed does the handbook say tires may lose all contact with a wet road?",
        choices: ["25 mph", "35 mph", "45 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "Fifty-five. The handbook says most tires grip a wet surface up to about 35 mph, and that at 55 they may lose all contact with the road and hydroplane.",
        context:
          "When that happens you cannot brake, accelerate or turn. The recovery is to hold a steady speed and a straight line, slowly ease off the gas, and not try to stop or turn quickly until the tires grip again.",
        trap: "Thirty-five is the speed the handbook names as the point where grip is still good, not the point where it is lost. The two numbers sit one sentence apart.",
        excerptKey: "hydroplane-speeds",
        sourceLabel: "Idaho Driver's Handbook - Rain & Hydroplaning",
        sourceUrl: hb(111),
      },
      {
        id: "id_s2_20",
        topic: "parking",
        question: "Which of these does Idaho's no-parking list forbid?",
        choices: [
          "Parking on the shoulder of a rural highway",
          "Parking within two car lengths of another car",
          "Parking on the street side of an already parked vehicle",
          "Parking facing downhill",
        ],
        correctIndex: 2,
        explanation:
          "That is double parking, and the list forbids it. Idaho also bans parking in bike lanes, on sidewalks, in intersections, on bridges or overpasses, in front of a driveway and on any freeway.",
        context:
          "Bike lanes get a second mention in the bicycle chapter, where the handbook says parking in them is not allowed because they are designated travel lanes and should not be blocked.",
        trap: "Nothing in the list is about how close you park to another car or which way you face on a hill. Those are separate rules with their own answers.",
        excerptKey: "no-parking-list",
        sourceLabel: "Idaho Driver's Handbook - No-Parking Zones",
        sourceUrl: hb(81),
      },
      {
        id: "id_s2_21",
        topic: "signals",
        question:
          "You are stopped at a red light and the car in front leaves a gap you could fill, but the far side of the intersection is jammed. What does Idaho tell you to do?",
        choices: [
          "Move up so you do not delay the drivers behind you",
          "Stay back, because you may not enter unless there is room to clear the intersection completely",
          "Move up, since blocking an intersection is only an offense during rush hour",
          "Move up if your light is green, whatever is on the far side",
        ],
        correctIndex: 1,
        explanation:
          "Idaho says not to enter an intersection unless there is enough space on the other side for your whole vehicle to clear it, regardless of what the signal says.",
        context:
          "Idaho Code 49-802 puts the same idea at the stop line: a driver facing a steady red stays behind the marked limit line, and where there is no line, must not block the crosswalk.",
        trap: "A green light is permission to proceed, not permission to block the box. The rule is written as an explicit exception to the signal.",
        excerptKey: "do-not-block-intersection",
        sourceLabel: "Idaho Driver's Handbook - Traffic Signals, Green Circular Light",
        sourceUrl: hb(56),
      },
      {
        id: "id_s2_22",
        topic: "speed",
        question: "What does Idaho say about driving too slowly?",
        choices: [
          "It is always legal as long as you are under the limit",
          "It is only an offense on interstates",
          "It is illegal to drive so slowly that you disrupt the normal flow of traffic",
          "It is legal if your hazard lights are on",
        ],
        correctIndex: 2,
        explanation:
          "Idaho makes it illegal to drive so slowly that you disrupt the normal flow of traffic, and it adds that you may not sit in the extreme left lane long enough to impede other traffic travelling lawfully.",
        context:
          "The basic rule covers the same ground from the other side: driving too slowly for the conditions and impeding the safe flow of traffic violates it even when you are under the posted limit.",
        trap: "Under the speed limit is not a defense. Idaho's basic rule and its minimum-speed rule both say so in as many words.",
        excerptKey: "min-speed",
        sourceLabel: "Idaho Driver's Handbook - Speed Limits, Minimum speeds",
        sourceUrl: hb(69),
      },
      {
        id: "id_s2_23",
        topic: "rules",
        question:
          "You are approaching a roundabout in Meridian. Who must yield?",
        choices: [
          "Traffic already in the circle yields to traffic entering",
          "The larger vehicle yields",
          "Whoever signals first has priority",
          "You yield to traffic already in the circle, and to pedestrians and bicyclists",
        ],
        correctIndex: 3,
        explanation:
          "Entering traffic yields. All drivers must give way to vehicles already in the circle, and Idaho adds yielding to pedestrians and bicyclists both entering and exiting.",
        context:
          "You enter counter-clockwise and always turn right to enter and to exit, whether you are going right, left, straight or making a U-turn. The handbook asks you to signal right as you approach your exit.",
        trap: "The circulating traffic never yields to you. Waiting for a car that is already in the roundabout to give way is how a queue backs up onto the approach.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Idaho Driver's Handbook - Intersections, Roundabouts",
        sourceUrl: hb(62),
      },
      {
        id: "id_s2_24",
        topic: "safety",
        question: "How far ahead does the handbook say good drivers keep an eye on the road?",
        choices: [
          "Two to three seconds, or one car length",
          "Ten to 15 seconds, about a block in city driving",
          "Thirty seconds, or roughly half a mile",
          "As far as the headlights reach",
        ],
        correctIndex: 1,
        explanation:
          "Ten to 15 seconds ahead, which the handbook translates as roughly a block in city driving. Looking that far out is what removes last-minute lane changes, turns and stops.",
        context:
          "It sits inside a five-part crash prevention formula: scan, look ahead, look to the sides, look behind, and check your blind spots. The handbook adds identify, predict, decide and execute as the thinking half.",
        trap: "Ten to 15 seconds is a time, not a distance, so it stretches as you speed up. A fixed car length would mean the same gap at 20 mph and at 70.",
        excerptKey: "look-ahead",
        sourceLabel: "Idaho Driver's Handbook - Defensive Driving, Look Ahead",
        sourceUrl: hb(89),
      },
      {
        id: "id_s2_25",
        topic: "signs",
        question:
          "A barricade across a lane has stripes angling DOWN TO THE LEFT. What does it mean?",
        choices: [
          "The road is closed and traffic can go no further",
          "Pass the barricade on the left side",
          "Merge right in 500 feet",
          "The barricade is permanent rather than temporary",
        ],
        correctIndex: 1,
        explanation:
          "Stripes angling down to the left tell you to pass the barricade on the left. Stripes angling down to the right send you right, and a V-shaped pattern means the road is closed altogether.",
        context:
          "Idaho uses two colors for barricades: red and white for permanent closures, orange and white for temporary ones. The color does not change the instruction, only how long the closure is expected to last.",
        trap: "The color is not the message. Learners look at red versus orange and miss that the stripe direction is the part that tells them where to drive.",
        excerptKey: "barricade-colors",
        sourceLabel: "Idaho Driver's Handbook - Barricades",
        sourceUrl: hb(54),
      },
      {
        id: "id_s2_26",
        topic: "impairment",
        question: "What does Idaho's open container law require?",
        choices: [
          "Only the driver is prohibited from having an open container",
          "Open containers are allowed if the vehicle is parked",
          "An unsealed alcoholic beverage must be in the trunk, or behind the last upright seat if there is no trunk",
          "Passengers over 21 may drink as long as the driver does not",
        ],
        correctIndex: 2,
        explanation:
          "Idaho prohibits both drivers and passengers from drinking or possessing an open container of alcohol in the vehicle. To carry an unsealed bottle you put it in the trunk, or behind the last upright seat if the vehicle has no trunk.",
        context:
          "The rule is about possession, not consumption, so an opened bottle within reach of anyone in the passenger compartment is enough. In a hatchback or a pickup, behind the last upright seat is the equivalent of the trunk.",
        trap: "Passengers are not exempt in Idaho. Some states restrict only the driver, and that is the assumption this question is built to catch.",
        excerptKey: "open-container",
        sourceLabel: "Idaho Driver's Handbook - Open Container Law",
        sourceUrl: hb(130),
      },
      {
        id: "id_s2_27",
        topic: "emergencies",
        question: "A front tire blows out at highway speed. What does the handbook tell you to do first?",
        choices: [
          "Brake hard to shed speed quickly",
          "Steer onto the shoulder immediately",
          "Hold the wheel tightly, keep the car straight and ease off the gas",
          "Turn on your hazard lights before doing anything else",
        ],
        correctIndex: 2,
        explanation:
          "Grip the wheel, keep the car pointed straight down the road and ease your foot off the accelerator. You do not touch the brakes until you have full control.",
        context:
          "Once the car is under control, brake gently and pull off at the nearest safe place. The handbook gives the same shape of answer for running off the pavement: hold the wheel, steer straight, ease off the gas and brake gently before easing back on.",
        trap: "Stomping the brake is the natural response and the handbook names it as the thing not to do. Hard braking with a blown tire is what turns a blowout into a spin.",
        excerptKey: "tire-blowout",
        sourceLabel: "Idaho Driver's Handbook - Tire Blowouts",
        sourceUrl: hb(120),
      },
      {
        id: "id_s2_28",
        topic: "licensing",
        question:
          "You have just moved to Idaho with a valid license from another state. What does the DMV require?",
        choices: [
          "Nothing, since Idaho honors any valid US license indefinitely",
          "You apply within 30 days and pass a Class D knowledge test",
          "You apply within 90 days but take no test",
          "You apply within 30 days and take a skills test but no written test",
        ],
        correctIndex: 1,
        explanation:
          "Idaho gives you 30 days from becoming a resident, and transferring drivers must pass the Class D knowledge test. A skills test is added only if the surrendered license has been expired for 25 months or more.",
        context:
          "The 30-day clock runs whether or not your out-of-state license has expired. You surrender the old license as part of Idaho's one driver, one license, one record rule.",
        trap: "New arrivals routinely expect a paperwork-only transfer and are surprised at the counter. The written test is required even with a clean record and a current license.",
        excerptKey: "transfer-knowledge-test",
        sourceLabel: "Idaho Driver's Handbook - One Driver, One License, One Record",
        sourceUrl: hb(12),
        commonlyMissed: true,
      },
      {
        id: "id_s2_29",
        topic: "rightOfWay",
        question:
          "You are in the left lane approaching a crossing. A car in the right lane has stopped for a pedestrian. What must you do?",
        choices: [
          "Carry on, since the stopped car is not in your lane",
          "Sound your horn to warn the pedestrian",
          "Wait for the pedestrian to cross, then make sure it is safe before proceeding",
          "Move further left and pass slowly",
        ],
        correctIndex: 2,
        explanation:
          "You do not pass the stopped vehicle. Idaho tells you to wait for the pedestrian to cross and then be sure it is safe before you proceed.",
        context:
          "The passing rules say the same thing from the other direction: passing is prohibited when a vehicle ahead of you has stopped at a marked or unmarked crosswalk to let a pedestrian cross.",
        trap: "The stopped car is not slow traffic, it is a screen. Anyone who steps out from in front of it cannot see you and you cannot see them.",
        excerptKey: "pedestrian-stopped-vehicle",
        sourceLabel: "Idaho Driver's Handbook - Pedestrians",
        sourceUrl: hb(96),
      },
      {
        id: "id_s2_30",
        topic: "sharing",
        question:
          "A funeral procession is crossing an intersection ahead and your light is green. What does Idaho require?",
        choices: [
          "Proceed, since a green light overrides any procession",
          "Sound your horn and edge through the gap",
          "Join the back of the procession to keep traffic moving",
          "Stay out of the intersection unless you can cross without cutting through the procession",
        ],
        correctIndex: 3,
        explanation:
          "You may not enter the intersection while the procession is going through, regardless of the color of the light, unless you can do so without crossing its path. Idaho tells you to always give funeral processions the right of way.",
        context:
          "You also may not drive between or join the vehicles in the formation unless a police officer authorizes it, and you may not pass the procession in the right lane on a multi-lane highway unless the procession is in the far left lane.",
        trap: "Two separate Idaho drivers name this as the question they got wrong, and one of them went back through the handbook and still could not find it. It is on page 78.",
        excerptKey: "funeral-right-of-way",
        sourceLabel: "Idaho Driver's Handbook - Funeral Processions",
        sourceUrl: hb(78),
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
      "Pitched where the real Idaho exam sits. Numbers you have to know exactly, signs that look alike, and the rules that only make sense once you know why they exist.",
    questions: [
      {
        id: "id_s3_01",
        topic: "speed",
        question:
          "You are in a pickup on a two-lane Idaho highway posted at 65, behind a car doing 50. What does the law allow while you pass?",
        choices: [
          "Exceed the posted limit by up to 15 mph to complete the pass",
          "Exceed it by up to 10 mph",
          "Exceed it by any amount as long as the pass is brief",
          "Nothing - you may never exceed the posted limit",
        ],
        correctIndex: 0,
        explanation:
          "Idaho lets a passenger car, motorcycle or pickup not towing anything exceed the posted limit by up to 15 mph while passing a slower vehicle, where the posted limit is 55 or greater on a two-lane road.",
        context:
          "You must return to the right-hand lane and drop back to the posted limit as soon as practicable. The allowance does not apply in construction zones, and Idaho Code treats the 15 mph allowance as the maximum limit from which fines are calculated.",
        trap: "Ten over is Washington's figure and Idaho drivers moving across the border report being caught by the difference. Idaho's allowance is 15, and only above 55.",
        excerptKey: "passing-speed-exception",
        sourceLabel: "Idaho Driver's Handbook - Passing, Passing Speed Limit Exception",
        sourceUrl: hb(77),
        commonlyMissed: true,
      },
      {
        id: "id_s3_02",
        topic: "rules",
        question: "How close to an intersection does Idaho prohibit passing?",
        choices: ["50 feet", "75 feet", "100 feet", "200 feet"],
        correctIndex: 2,
        explanation:
          "One hundred feet, unless traffic-control devices indicate otherwise. The same 100 feet covers a railroad crossing and a bridge or tunnel where the view is obstructed.",
        context:
          "The other passing bans are situational rather than measured: hills and curves where you cannot see oncoming traffic, a stopped school bus, a vehicle stopped for a pedestrian at a crosswalk, and any pass that would take you off the pavement.",
        trap: "Two hundred feet is Idaho's other passing number - the clearance you must have from oncoming traffic before you complete a pass. Different rule, different distance.",
        excerptKey: "passing-prohibited-100ft",
        sourceLabel: "Idaho Driver's Handbook - Passing",
        sourceUrl: hb(76),
      },
      {
        id: "id_s3_03",
        topic: "signs",
        question:
          "A yellow diamond shows a road joining yours from the right at an angle, with the two lines merging. What is it?",
        choices: [
          "A crossroad ahead",
          "A merging traffic sign, warning that cars and trucks may enter your lane",
          "A divided highway begins",
          "A three-way T intersection",
        ],
        correctIndex: 1,
        explanation:
          "That is the merging traffic sign. If you are on the main road, be ready for other vehicles entering into your lane.",
        context:
          "The Added Lane sign is its close relative: two highways converging where you watch for traffic in the left lane which may move into the right lane. The Lane Ends sign is the opposite case, where two lanes become one and merging traffic must yield.",
        trap: "Merging traffic and lane ends look similar and mean different things about who yields. Where a lane ends, the driver in the ending lane gives way.",
        excerptKey: "lane-ends-sign",
        sourceLabel: "Idaho Driver's Handbook - Warning Signs",
        sourceUrl: hb(50),
      },
      {
        id: "id_s3_04",
        topic: "rules",
        question: "When must you stop at an Idaho railroad crossing, and where?",
        choices: [
          "Only if you can see a train, and anywhere before the rails",
          "At every crossing, exactly 10 feet from the nearest rail",
          "Only when the crossing has gates",
          "When required, within 50 feet but no less than 15 feet from the nearest rail",
        ],
        correctIndex: 3,
        explanation:
          "Idaho gives a band rather than a single distance: when you are required to stop, do so within 50 feet but no less than 15 feet from the nearest rail.",
        context:
          "You are required to stop when a train is coming, when wigwag or flashing signals or gates are operating, or when a watchman signals. You must never drive through, under or around a gate that is lowered or being lowered.",
        trap: "Not every crossing requires a stop, which is why the question is worded around when you are required to. The 15 to 50 foot band is the part people forget.",
        excerptKey: "railroad-stop-distance",
        sourceLabel: "Idaho Driver's Handbook - Intersections, Railroad Crossings",
        sourceUrl: hb(60),
      },
      {
        id: "id_s3_05",
        topic: "licensing",
        question:
          "An Idaho teenager under 17 is in the supervised instruction period. What must the supervising adult be?",
        choices: [
          "Any licensed driver aged 18 or over",
          "A parent or legal guardian only",
          "A licensed driver at least 21 years old, in the front passenger seat",
          "A certified driving instructor",
        ],
        correctIndex: 2,
        explanation:
          "During the GDL supervised instruction period the accompanying driver must be a valid licensed driver at least 21 years old, occupying the front seat beside the driver, and no other passengers may sit in the front.",
        context:
          "The period runs a minimum of six violation-free months, in which the learner accumulates at least 50 hours of supervised driving, ten of them at night. A traffic conviction cancels the permit and the six months starts again with a new one.",
        trap: "Eighteen is the age for supervising a Class D instruction permit holder, which is the 17-and-over route. The under-17 supervised instruction period requires 21.",
        excerptKey: "gdl-supervised-period",
        sourceLabel: "Idaho Driver's Handbook - Graduated Driver's License (GDL) Program",
        sourceUrl: hb(19),
      },
      {
        id: "id_s3_06",
        topic: "safety",
        question:
          "Your car is fitted with an anti-lock braking system and you have to stop hard. What does Idaho tell you to do?",
        choices: [
          "Pump the brake pedal rapidly",
          "Press once, release, then press again",
          "Apply the brake and then release it as soon as you hear the pump",
          "Apply continuous pressure to the brake pedal and hold it",
        ],
        correctIndex: 3,
        explanation:
          "With ABS you hold continuous pressure on the pedal. Pumping defeats the system's design, reduces its effectiveness and lengthens your stopping distance.",
        context:
          "The system will pump for you, faster than you could, and that is what makes the noise and the pulse you feel through the pedal. The handbook warns you to expect both so you do not lift your foot by reflex, and notes that ABS keeps steering control but does not shorten stopping distances.",
        trap: "Pumping is the correct technique WITHOUT ABS, and the handbook gives that separately. Applying the wrong one of the two is the mistake.",
        excerptKey: "abs-no-pumping",
        sourceLabel: "Idaho Driver's Handbook - Stopping Quickly",
        sourceUrl: hb(116),
      },
      {
        id: "id_s3_07",
        topic: "sharing",
        question:
          "You are following a large truck on an Idaho highway and cannot see its side mirrors. What does that tell you?",
        choices: [
          "The driver cannot see you either, so drop back",
          "The mirrors are folded and the truck is parked",
          "You are at a safe following distance",
          "You should move closer so the driver notices you",
        ],
        correctIndex: 0,
        explanation:
          "It is the handbook's own rule of thumb: if you cannot see the driver's mirrors, the driver cannot see you. The answer is to back off out of the blind spot.",
        context:
          "Large vehicles have blind spots behind and on each side, and the handbook asks you to avoid driving alongside one for long stretches. It also asks you to adjust your following distance so you can still see most of the road ahead past the trailer.",
        trap: "Moving closer to be noticed does the opposite. The blind spot is deepest right behind the trailer.",
        excerptKey: "truck-blind-spots",
        sourceLabel: "Idaho Driver's Handbook - Large Vehicles, Blind Spots",
        sourceUrl: hb(105),
      },
      {
        id: "id_s3_08",
        topic: "signals",
        question:
          "At a pedestrian hybrid beacon, sometimes called a HAWK, the two red lights start flashing alternately. What may you do?",
        choices: [
          "Proceed without stopping, since flashing means the crossing is ending",
          "Stop and wait until the lights go dark",
          "Stop, yield to anyone in the crosswalk, then proceed when it is clear",
          "Treat it as a green light",
        ],
        correctIndex: 2,
        explanation:
          "Alternating flashing reds work like a stop sign. You stop, yield to pedestrians in the crosswalk, and proceed once the crossing is clear.",
        context:
          "The beacon runs through a sequence: dark, then flashing yellow to warn you, then solid yellow to prepare you to stop, then two solid reds where you must stop completely, then the alternating flash, then dark again.",
        trap: "The solid red phase and the flashing red phase are different. Solid red means stay stopped; only the flashing phase lets you go once the crosswalk is clear.",
        excerptKey: "hawk-flashing-red",
        sourceLabel: "Idaho Driver's Handbook - Pedestrian Crossings",
        sourceUrl: hb(57),
      },
      {
        id: "id_s3_09",
        topic: "parking",
        question: "How far from railroad tracks does Idaho prohibit parking?",
        choices: ["15 feet", "20 feet", "30 feet", "50 feet"],
        correctIndex: 3,
        explanation:
          "Fifty feet. It is the longest of the distances on Idaho's no-parking list, and the reason is simply how long it takes a train to stop.",
        context:
          "The other measured entries are 15 feet of a fire hydrant, 20 feet of a crosswalk, 20 feet of a fire station driveway and 30 feet of a stop sign, yield sign or traffic signal.",
        trap: "Thirty feet is the stop sign distance. Four numbers in one list is exactly the kind of thing the Idaho test likes to separate out.",
        excerptKey: "no-parking-list",
        sourceLabel: "Idaho Driver's Handbook - No-Parking Zones",
        sourceUrl: hb(81),
      },
      {
        id: "id_s3_10",
        topic: "impairment",
        question:
          "You are stopped in Idaho on suspicion of impaired driving and you refuse the evidentiary test. What happens?",
        choices: [
          "Nothing, because the test is voluntary",
          "A $250 civil penalty and, if the court upholds the officer, a one-year absolute suspension for a first refusal",
          "A warning letter for the first refusal",
          "A 90-day suspension with work privileges",
        ],
        correctIndex: 1,
        explanation:
          "Refusal costs a $250 civil penalty and a license suspension. If the court upholds the officer's findings, a first refusal is one year with absolutely no driving privileges of any kind.",
        context:
          "Idaho's implied consent law says that anyone who drives or is in physical control of a vehicle has already consented to a BAC or drug test if suspected of DUI. A second refusal within ten years is a two-year absolute suspension, and all of this is separate from whatever the court does about the DUI itself.",
        trap: "Refusing is worse than failing on a first offense: failing brings a 90-day suspension, refusing brings a year. The idea that refusal avoids the penalty is backwards.",
        excerptKey: "implied-consent",
        sourceLabel: "Idaho Driver's Handbook - Test Refusal",
        sourceUrl: hb(126),
      },
      {
        id: "id_s3_11",
        topic: "rules",
        question:
          "You are turning left from a two-lane Idaho road into a street with two lanes going your way. Which lane should you finish in?",
        choices: [
          "Either lane, as long as it is clear",
          "The right-hand lane, so you do not block faster traffic",
          "The nearest lane where traffic moves in the direction you want to go",
          "Whichever lane the car ahead of you used",
        ],
        correctIndex: 2,
        explanation:
          "You turn into the nearest lane going your direction, which is the left lane of the new street. The handbook adds the short version: do not cut the corner.",
        context:
          "The approach is the other half. You come to the intersection in the lane closest to the left that is open to traffic in your direction, and on a two-lane road you move to the left side of your lane. Idaho Code 49-644 words the same rule as the extreme left-hand lane lawfully available.",
        trap: "Swinging wide into the far lane is the classic left-turn error and it is scored on the driving test as a lane violation, which is a critical driving error.",
        excerptKey: "left-turn-nearest-lane",
        sourceLabel: "Idaho Driver's Handbook - Turns, Left Turns",
        sourceUrl: hb(73),
      },
      {
        id: "id_s3_12",
        topic: "emergencies",
        question:
          "You come upon a crash on an Idaho highway and police and paramedics are already at the scene. What should you do?",
        choices: [
          "Stop and offer to help",
          "Stop far enough back to warn oncoming traffic",
          "Do not stop; move on as the officers direct",
          "Park on the shoulder and photograph the scene for the insurers",
        ],
        correctIndex: 2,
        explanation:
          "If police or medical help is already there, do not stop. Move on as the officers direct. Stopping adds a car to a scene that already has too many.",
        context:
          "The rule flips if you are first on the scene: then you stop, call 911 and help if you are able. Idaho's Good Samaritan law protects a good-faith helper from civil liability, but the handbook warns against moving an injured person unless you are trained or there is immediate danger such as fire.",
        trap: "Slowing to look is its own hazard. Idaho also requires you to reduce speed and change lanes away from stopped emergency vehicles wherever you can.",
        excerptKey: "crash-scene-first",
        sourceLabel: "Idaho Driver's Handbook - At the Scene of the Crash",
        sourceUrl: hb(120),
      },
      {
        id: "id_s3_13",
        topic: "signs",
        question:
          "A white rectangular sign reads ROAD CLOSED TO THRU TRAFFIC. What does that permit?",
        choices: [
          "Nobody may enter except authorized personnel",
          "Anyone may pass through as long as they drive slowly",
          "Local traffic may enter but must not use the work zone as a route through",
          "The road is open only during working hours",
        ],
        correctIndex: 2,
        explanation:
          "Local residential or commercial traffic may enter, but only if they have a reason to stop inside the work zone. Continuous trips through are prohibited once the signs are properly placed.",
        context:
          "A plain ROAD CLOSED sign is stricter: the work zone may not be entered at all except by authorized personnel. Other signs will be there to route you around.",
        trap: "Living nearby is not the test. The rule is whether you are stopping inside the zone, not whether you know the neighborhood.",
        excerptKey: "road-closed-local",
        sourceLabel: "Idaho Driver's Handbook - Work Zone Signs",
        sourceUrl: hb(47),
      },
      {
        id: "id_s3_14",
        topic: "safety",
        question: "How does the handbook describe the moment a light rain begins?",
        choices: [
          "Safer than heavy rain, because the water clears the dust",
          "The most dangerous point, because oil and water mix into a greasy film",
          "No different from a dry road until the water pools",
          "Dangerous only if the temperature is near freezing",
        ],
        correctIndex: 1,
        explanation:
          "The start of a light rain is when road oil and water mix into a greasy film, and the handbook calls that more dangerous than the rain that follows.",
        context:
          "Idaho pairs it with the other slick condition it names: moisture on the road when the temperature is at or below freezing. Both appear in ITD's own sample test as a single question with both answers correct.",
        trap: "Heavier rain feels worse and drivers slow down for it. The thin first rain is the one that catches people at normal speed.",
        excerptKey: "light-rain-greasy",
        sourceLabel: "Idaho Driver's Handbook - Rain & Hydroplaning",
        sourceUrl: hb(111),
      },
      {
        id: "id_s3_15",
        topic: "licensing",
        question:
          "What vision standard must you meet for an Idaho driver's license?",
        choices: [
          "20/20 in both eyes without correction",
          "20/70 in at least one eye",
          "20/40 in at least one eye, with or without corrective lenses",
          "There is no vision standard, only a medical form",
        ],
        correctIndex: 2,
        explanation:
          "Twenty-forty in at least one eye, with or without glasses or contacts. If you wear correction for the screening, a lens restriction goes on your license.",
        context:
          "That restriction is enforceable. Driving without your glasses or contacts once a lens restriction is on your license can be cited and can suspend your driving privileges, and the handbook lists violation of a restriction among the reasons for suspension.",
        trap: "Passing with glasses is a pass, not an exemption. The restriction that comes with it is a condition on the license, not a note.",
        excerptKey: "vision-standard",
        sourceLabel: "Idaho Driver's Handbook - Medical/Visual Screening",
        sourceUrl: hb(32),
      },
      {
        id: "id_s3_16",
        topic: "rightOfWay",
        question:
          "You are on the stem of an uncontrolled T-intersection, so you must turn right or left. What does Idaho require?",
        choices: [
          "Proceed, since the through road has no signs either",
          "Yield only to traffic coming from your left",
          "Stop and yield to any drivers approaching from the other two directions",
          "Yield only to traffic coming from your right",
        ],
        correctIndex: 2,
        explanation:
          "At an unmarked or uncontrolled three-way T, the driver who has to turn stops and yields to drivers approaching from both of the other directions.",
        context:
          "Idaho says the same thing in its sign chapter, where the 3-Way Intersection warning sign tells you that you must stop and yield to drivers approaching from the other two directions. That is unusual: it is a warning sign with a duty attached.",
        trap: "Yielding to only one side is the usual half-answer. The stem of a T gives way to the whole through road.",
        excerptKey: "t-intersection",
        sourceLabel: "Idaho Driver's Handbook - Yielding to Other Drivers",
        sourceUrl: hb(75),
      },
      {
        id: "id_s3_17",
        topic: "sharing",
        question:
          "You are following a motorcycle on an Idaho highway. What following distance does the handbook ask for?",
        choices: [
          "The same three seconds you would leave for a car",
          "Two seconds, since a motorcycle stops faster",
          "More than three seconds",
          "One car length for every 10 mph",
        ],
        correctIndex: 2,
        explanation:
          "More than three seconds. The extra time is there so both of you have room to maneuver or stop in an emergency.",
        context:
          "The handbook lists what makes motorcycles different in traffic: they hide in blind spots, their speed is hard to judge, their signals often do not cancel automatically, and gravel or a manhole cover that means nothing to you can force a rider to change line.",
        trap: "A motorcycle can out-brake many cars, which makes the shorter gap feel defensible. The extra second is about your reaction time, not the bike's brakes.",
        excerptKey: "motorcycle-following",
        sourceLabel: "Idaho Driver's Handbook - Motorcycles, Visibility",
        sourceUrl: hb(104),
      },
      {
        id: "id_s3_18",
        topic: "rules",
        question:
          "Two solid white lines separate the lanes beside you. What do they mean?",
        choices: [
          "Lane changes are prohibited there",
          "A bike lane begins",
          "The lane ends in 500 feet",
          "Cross with care when it is safe",
        ],
        correctIndex: 0,
        explanation:
          "Double solid white lines prohibit lane changes. A single solid white line is weaker: the handbook says to avoid changing lanes across one.",
        context:
          "White separates traffic going the same way; yellow separates opposing directions. Dashed white lines mark ordinary lanes you may cross when it is safe, and Idaho tells you to drive within them and never straddle them.",
        trap: "The single and double white lines mean different things, and only the double one is an outright prohibition.",
        excerptKey: "double-white-lines",
        sourceLabel: "Idaho Driver's Handbook - Pavement Markings",
        sourceUrl: hb(59),
      },
      {
        id: "id_s3_19",
        topic: "speed",
        question: "What does Idaho say about speed limits in a school zone?",
        choices: [
          "20 mph applies whenever children are present",
          "25 mph applies during school hours",
          "The limit drops by 10 mph from whatever is otherwise posted",
          "Observe the posted speed limits in school zones",
        ],
        correctIndex: 3,
        explanation:
          "Idaho does not print a statewide school-zone number. The instruction is to observe the posted speed limits in school zones, and the School Zone warning sign adds that penalties for breaking them are increased.",
        context:
          "Work zones are handled the same way: observe the posted limits, and note that violating a work zone speed limit can bring an enhanced, fixed penalty. In both cases the sign carries the number.",
        trap: "Twenty and 25 are common school-zone numbers elsewhere, and ITD's sample test uses the 20 mph answer as a distractor. Idaho's answer is to read the sign.",
        excerptKey: "school-zone-posted",
        sourceLabel: "Idaho Driver's Handbook - Speed Limits, School zones",
        sourceUrl: hb(69),
        commonlyMissed: true,
      },
      {
        id: "id_s3_20",
        topic: "signals",
        question:
          "You are on a motorcycle at an Idaho intersection and the signal will not detect you. What does Idaho Code allow?",
        choices: [
          "Turn right instead and come back around",
          "Proceed at once, since the signal is broken",
          "Come to a full stop, and if the signal fails after one full cycle, proceed with caution",
          "Wait indefinitely; the law makes no allowance",
        ],
        correctIndex: 2,
        explanation:
          "Idaho Code 49-802 lets a motorcycle rider stop completely and then, if the signal does not operate after one cycle, proceed after exercising due caution and care.",
        context:
          "It applies only where a triggered signal uses a vehicle detection device that a motorcycle is too small to trip. The statute is explicit that believing the signal was inoperative is not a defense if it in fact was not.",
        trap: "This is not a general permission to run a red on a bike. The full stop and the full missed cycle are both conditions.",
        excerptKey: "code-motorcycle-dead-red",
        sourceLabel: "Idaho Code 49-802 - Traffic-Control Signal Legend",
        sourceUrl: `${CODE}/Title49/T49CH8/SECT49-802/`,
      },
      {
        id: "id_s3_21",
        topic: "parking",
        question:
          "May you back up on the shoulder of an Idaho freeway to reach an exit you have just passed?",
        choices: [
          "Yes, if you use your hazard lights",
          "Yes, if traffic is light",
          "Only during daylight hours",
          "No - backing is always prohibited on freeways, including the shoulder",
        ],
        correctIndex: 3,
        explanation:
          "Backing is always prohibited on freeways, expressways and other controlled-access highways, and the ban covers the shoulder. You go on to the next exit.",
        context:
          "The handbook says the same thing under freeway entrances: if you take the wrong ramp, never back up or turn around through the median. Median crossovers are for maintenance and emergency vehicles only.",
        trap: "Hazard lights do not create an exception. Off the freeway, backing is allowed only where it can be done safely and without interfering with other traffic.",
        excerptKey: "backing-prohibited-freeway",
        sourceLabel: "Idaho Driver's Handbook - Backing",
        sourceUrl: hb(82),
      },
      {
        id: "id_s3_22",
        topic: "safety",
        question:
          "How long does the handbook say it takes a loaded truck with good brakes to stop from 55 mph on dry road?",
        choices: ["150 feet", "250 feet", "450 feet", "700 feet"],
        correctIndex: 2,
        explanation:
          "Four hundred and fifty feet - roughly a block and a half. The number is there to explain why cutting in front of a truck and then slowing is so dangerous.",
        context:
          "The handbook asks you to keep a steady speed while passing a large vehicle and to see the whole cab in your rear-view mirror before you move back in front of it, precisely because the driver cannot recover the gap you just took.",
        trap: "A car stopping from 55 needs a fraction of that. Judging a truck by car distances is the error the figure is printed to prevent.",
        excerptKey: "truck-stopping-distance",
        sourceLabel: "Idaho Driver's Handbook - Large Vehicles, Speeding Up and Stopping",
        sourceUrl: hb(105),
      },
      {
        id: "id_s3_23",
        topic: "signs",
        question:
          "A yellow diamond shows an arrow curving back on itself in a circle. What is ahead?",
        choices: [
          "A U-turn permitted area",
          "A roundabout",
          "A sharp curve",
          "A traffic circle closed to through traffic",
        ],
        correctIndex: 1,
        explanation:
          "An arrow in a circle pattern is the warning sign you most often see approaching a roundabout. It tells you to slow down and get ready to yield.",
        context:
          "Once you are there the rules are fixed: enter counter-clockwise, always turn right to enter and to exit, yield to traffic already in the circle and to pedestrians and cyclists, keep your speed low and signal right as you approach your exit.",
        trap: "A sharp curve warning is a single bent arrow, not a closed loop. The circle is the giveaway.",
        excerptKey: "roundabout-direction",
        sourceLabel: "Idaho Driver's Handbook - Intersections, Roundabouts",
        sourceUrl: hb(62),
      },
      {
        id: "id_s3_24",
        topic: "impairment",
        question:
          "According to the handbook, what will sober up someone who has been drinking?",
        choices: [
          "Black coffee",
          "A cold shower and fresh air",
          "Eating a large meal",
          "Only time",
        ],
        correctIndex: 3,
        explanation:
          "Only time. The handbook is explicit that once alcohol is in your bloodstream, neither aspirin, black coffee, deep breathing, a slap in the face, exercise nor eating will sober you up.",
        context:
          "It also flattens the idea that beer is safer: a 1.5-ounce jigger of 80-proof spirits, five ounces of table wine and 12 ounces of beer all contain roughly the same ounce of alcohol.",
        trap: "Coffee makes an impaired driver an awake impaired driver. Every one of the folk remedies is named and dismissed in the same sentence.",
        excerptKey: "only-time-sobers",
        sourceLabel: "Idaho Driver's Handbook - How Drinking Affects You",
        sourceUrl: hb(129),
      },
      {
        id: "id_s3_25",
        topic: "sharing",
        question:
          "You are turning right at an intersection and a bicyclist is riding along the bike lane on your right, slightly ahead. What does Idaho tell you to do?",
        choices: [
          "Accelerate to complete the turn before the bicyclist reaches you",
          "Sound your horn so the bicyclist knows to slow",
          "Slow down and stay behind the bicyclist until they pass the point where you will turn",
          "Turn wide from the left lane so you cross the bike lane at an angle",
        ],
        correctIndex: 2,
        explanation:
          "Do not assume you can beat a bicyclist to the turn. The handbook tells you to slow and stay behind the rider until they have passed the point where you will turn.",
        context:
          "The crash this prevents has a name in the handbook: the right hook. On streets with bike lanes, remember you are turning across a dedicated travel lane, and where the bike lane line goes dashed a right-turning driver may move into it after checking for riders first.",
        trap: "Turning across the bike lane in front of a rider is the collision itself, not a way of avoiding it. Idaho also warns never to honk close to a bicyclist.",
        excerptKey: "right-hook",
        sourceLabel: "Idaho Driver's Handbook - Bicyclists, Right Turns When Moving",
        sourceUrl: hb(99),
      },
      {
        id: "id_s3_26",
        topic: "emergencies",
        question:
          "Your car has broken down on an Idaho highway and you have emergency flares. Where do you put them?",
        choices: [
          "Immediately behind the rear bumper",
          "200 to 300 feet behind the car",
          "50 feet in front of the car",
          "On the roof, so they are visible from both directions",
        ],
        correctIndex: 1,
        explanation:
          "Two hundred to 300 feet behind the vehicle, which gives following traffic enough warning to react before they reach you.",
        context:
          "The rest of the routine: pull all the way off the road if you can, turn on the emergency flashers, and lift the hood. If you cannot get off the road, stop where drivers behind have a clear view of you and not just over a hill or around a curve.",
        trap: "A flare at the bumper marks the wreck rather than warning of it. The distance is the entire point.",
        excerptKey: "car-trouble-flares",
        sourceLabel: "Idaho Driver's Handbook - If You Have Car Trouble",
        sourceUrl: hb(117),
      },
      {
        id: "id_s3_27",
        topic: "licensing",
        question:
          "How many points on an Idaho driving record in any 12 months bring a 30-day suspension?",
        choices: ["8 to 11", "12 to 17", "18 to 23", "24 or more"],
        correctIndex: 1,
        explanation:
          "Twelve to 17 points in any 12 months is a 30-day suspension. Eight to 11 in 12 months brings only a warning letter.",
        context:
          "The ladder continues: 18 to 23 points in any 24 months is a 90-day suspension, and 24 or more in any 36 months is six months. Each moving violation is worth one to four points.",
        trap: "The three bands use three different time windows - 12, 24 and 36 months - so the number of points alone does not tell you the penalty.",
        excerptKey: "point-suspensions",
        sourceLabel: "Idaho Driver's Handbook - Suspension & Point Violations System",
        sourceUrl: hb(123),
      },
      {
        id: "id_s3_28",
        topic: "rules",
        question:
          "You want to make a left turn at an intersection where a thru-turn is in place. What do you do?",
        choices: [
          "Turn left from the left lane as usual",
          "Turn right, then make three more rights around the block",
          "Go straight through, U-turn at the next signal, come back and turn right",
          "Wait for a protected green arrow",
        ],
        correctIndex: 2,
        explanation:
          "A thru-turn removes the direct left turn. You continue through the intersection, make a U-turn at the next signal as the lane markings direct, head back and turn right.",
        context:
          "It is one of three unusual Idaho intersection designs the handbook explains, alongside the single point urban interchange and the diverging diamond interchange, where opposing traffic crosses at signals on each side of the bridge.",
        trap: "Sitting in a left-turn lane that does not exist is the failure mode. At a thru-turn there is nothing to wait for.",
        excerptKey: "thru-turn",
        sourceLabel: "Idaho Driver's Handbook - Intersections, Thru-Turn",
        sourceUrl: hb(63),
      },
      {
        id: "id_s3_29",
        topic: "signals",
        question:
          "What does the handbook say about arm signals in Idaho?",
        choices: [
          "They are obsolete and no longer recognized",
          "Only the stop signal is still valid",
          "Left is straight out, right is upward, and slow or stop is downward",
          "Left is upward and right is straight out",
        ],
        correctIndex: 2,
        explanation:
          "Arm out straight for left, arm up for right, arm down for slow or stop. Idaho lets you use either electric signals or arm signals.",
        context:
          "You will have to demonstrate all three at the skills test. The pre-drive vehicle check includes arm signals alongside lights, wipers, horn and brakes, and you can miss three or fewer of those items to continue to the driving portion.",
        trap: "The left and right signals are mirror images of each other and swapping them is easy. Left is the one that points where you are going.",
        excerptKey: "arm-signals",
        sourceLabel: "Idaho Driver's Handbook - Turns",
        sourceUrl: hb(72),
      },
      {
        id: "id_s3_30",
        topic: "safety",
        question:
          "What does the Idaho handbook advise about cruise control in the wet?",
        choices: [
          "Use it, because it holds a steadier speed than your foot",
          "Do not use it when the road is wet or icy",
          "Use it only above 45 mph",
          "It makes no difference on modern cars",
        ],
        correctIndex: 1,
        explanation:
          "The handbook says twice that for safety reasons you should not use cruise control if the road is wet or icy - once under fog and rain, once under winter driving.",
        context:
          "The reason is what cruise control does when a wheel slips: it adds power to hold the set speed. That is the opposite of what a hydroplaning or skidding car needs, which is a foot coming off the accelerator.",
        trap: "A steady speed sounds like an advantage in poor conditions. The problem is that cruise control keeps the speed steady by accelerating.",
        excerptKey: "no-cruise-control-wet",
        sourceLabel: "Idaho Driver's Handbook - Fog, Smoke, Dust, or Rain",
        sourceUrl: hb(110),
      },
      {
        id: "id_s3_31",
        topic: "sharing",
        question:
          "You are approaching a police car stopped on the shoulder with its lights flashing, on a road with two lanes going your way. What does Idaho require?",
        choices: [
          "Hold your speed and stay in the right lane",
          "Stop completely until an officer waves you past",
          "Reduce speed below the posted limit and move out of the adjacent lane if it is safe",
          "Sound your horn as you pass so the officer knows you are there",
        ],
        correctIndex: 2,
        explanation:
          "Both halves are required: slow to below the posted limit and proceed with caution, and on a road with two or more lanes in your direction, change out of the lane next to the emergency vehicle as soon as it is safe.",
        context:
          "Idaho extends the rule beyond police and ambulances. Tow trucks and incident response vehicles stopped with lights flashing get the same treatment.",
        trap: "Moving over without slowing is half the rule, and so is slowing without moving over. Idaho asks for both where the road allows.",
        excerptKey: "move-over-change-lanes",
        sourceLabel: "Idaho Driver's Handbook - Emergency Vehicles",
        sourceUrl: hb(95),
      },
      {
        id: "id_s3_32",
        topic: "rightOfWay",
        question:
          "You are merging onto an Idaho interstate from an on-ramp. Who has the right of way?",
        choices: [
          "You do, because merging traffic is entering a designated lane",
          "Traffic already on the highway, and you must yield to it",
          "Whoever reaches the merge point first",
          "Neither, so both should slow to walking pace",
        ],
        correctIndex: 1,
        explanation:
          "You yield to the traffic already on the highway. The handbook says it in one line at the end of the merging instructions.",
        context:
          "The rest of the technique matters as much: use the acceleration lane to reach the speed of freeway traffic, look over your left shoulder for a gap large enough that you crowd nobody, signal, and blend in. Stopping at the end of the ramp is a last resort in heavy traffic.",
        trap: "Expecting drivers on the freeway to make room for you is the mistake ITD's own sample test tests. Your job is to match their speed and slot in.",
        excerptKey: "freeway-merge-yield",
        sourceLabel: "Idaho Driver's Handbook - Entering a Freeway",
        sourceUrl: hb(84),
      },
      {
        id: "id_s3_33",
        topic: "signs",
        question:
          "A sign warns DIVIDED HIGHWAY ENDS. What are you about to meet?",
        choices: [
          "A median strip beginning, separating the directions",
          "A lane merging from the right",
          "Two-way traffic with no center strip separating it",
          "The end of a controlled-access highway",
        ],
        correctIndex: 2,
        explanation:
          "The divider is running out. Two-way traffic ahead will no longer be separated by a center strip, so oncoming cars will be in the next lane over.",
        context:
          "Its opposite number, DIVIDED HIGHWAY BEGINS, warns that two-way traffic is about to be separated by a center strip. The Two-Way Traffic sign covers the same transition from a multi-lane divided highway to a two-lane, two-way road.",
        trap: "Ends and begins are the same picture read in two directions, and ITD's sample test lists both as options on one question.",
        excerptKey: "divided-highway-ends",
        sourceLabel: "Idaho Driver's Handbook - Warning Signs, Divided Highway Ends",
        sourceUrl: hb(51),
      },
      {
        id: "id_s3_34",
        topic: "speed",
        question:
          "What did the Idaho legislature set as the maximum lawful speed in a residential, business or urban district?",
        choices: [
          "Thirty-five miles per hour unless otherwise posted",
          "Thirty miles per hour in all cases",
          "Twenty-five miles per hour unless otherwise posted",
          "Whatever the local authority chooses, with no statutory ceiling",
        ],
        correctIndex: 0,
        explanation:
          "Idaho Code 49-654 sets 35 mph in any residential, business or urban district unless otherwise posted, which is the same number the handbook prints.",
        context:
          "The statute lists four bands: 35 in a residential, business or urban district; 75 on interstates, raisable to 80 after an engineering study; 65 on state highways, raisable to 70; and 55 elsewhere, up to a maximum of 70.",
        trap: "Local authorities can post a different number, but they cannot exceed the statutory ceiling, and where nothing is posted the statutory figure is the one that applies.",
        excerptKey: "code-speed-urban-35",
        sourceLabel: "Idaho Code 49-654 - Basic Rule and Maximum Speed Limits",
        sourceUrl: `${CODE}/Title49/T49CH6/SECT49-654/`,
      },
      {
        id: "id_s3_35",
        topic: "licensing",
        question:
          "What may you take into the room with you for the Idaho knowledge test?",
        choices: [
          "A printed copy of the handbook, for reference",
          "Your phone, as long as it is face down",
          "A smart watch, since it is not a phone",
          "None of those - electronic devices and written material are both barred",
        ],
        correctIndex: 3,
        explanation:
          "Idaho bars electronic devices of every kind and any written material. Phones, smart watches, cameras, tablets, laptops, headphones and earbuds are listed, and so are driver manuals and notes.",
        context:
          "You also may not leave the testing area for anything except to reach an examiner, and you may not talk with others. Children, bags and translators may be allowed at the county office's discretion, and a translator is only permitted under narrow conditions.",
        trap: "A watch is an electronic device. ITD lists smart watches explicitly, which suggests enough people tried it.",
        excerptKey: "itd-no-devices-in-test",
        sourceLabel: "Idaho Transportation Department - Taking the Driver's Test",
        sourceUrl: "https://itd.idaho.gov/guide/taking-the-drivers-test/",
      },
    ],
  },
];
