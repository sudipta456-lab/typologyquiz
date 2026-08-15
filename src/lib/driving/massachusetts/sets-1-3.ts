import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Massachusetts Driver's Manual
// (Revised April 2026), published by the MassDOT Registry of Motor Vehicles,
// plus mass.gov RMV pages for the Junior Operator Licence and its penalty
// tables - and the Massachusetts General Laws (Chapters 85, 89 and 90) for the
// handful of rules the manual states only as a chart, simplifies, or does not
// state at all.
//
// Three of those gaps matter enough to name. The manual never mentions the
// 100-foot minimum following distance behind a school bus that c.90 Section 14
// imposes, or the escalating fines that follow a second and third pass of a
// stopped bus. It states the statutory speed thresholds as flat limits, where
// c.90 Section 17 states them as prima facie evidence and attaches a distance
// to each - and adds a 15 mph limit near a peddler's vehicle that the manual
// leaves out entirely. And the manual's own speeding-fine worked example
// ($185 for 73 in a 55) omits the $50 head-injury surcharge it describes two
// paragraphs earlier, so these questions ask about the components rather than
// the total.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the RMV's
// own authoritative wording on the government's site.
const HB = "https://www.mass.gov/doc/english-drivers-manual/download";
const PERMIT = "https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit";

export const massachusettsSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Massachusetts Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Massachusetts: what the shapes and colours mean, who goes first, and the handful of numbers the RMV's 25-question permit exam expects you to know cold.",
    questions: [
      {
        id: "ma_s1_01",
        topic: "signs",
        question:
          "You reach a red eight-sided sign at an intersection. What does Massachusetts require of you?",
        choices: [
          "Slow to a crawl and continue if nothing is coming",
          "Yield only to vehicles already inside the intersection",
          "Come to a complete halt, then go once the way is clear",
          "Stop only when a pedestrian is waiting to cross",
        ],
        correctIndex: 2,
        explanation:
          "The octagon has one meaning: a full stop, by every vehicle that reaches it. Massachusetts spells out that slowing down does not satisfy the sign.",
        context:
          "Massachusetts signs carry their meaning in shape and colour before you can read a word of them, which matters in fog or heavy rain. The octagon is reserved for STOP, the downward triangle for YIELD, the yellow diamond warns of something ahead. You stop before any crosswalk or stop line painted on the pavement, not level with the sign itself.",
        trap:
          "A rolling stop is still a failure to stop. The wheels have to stop turning, however empty the cross street looks.",
        excerptKey: "stop-sign",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Stop and Yield Signs",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red circular light and want to turn right. What does Massachusetts allow?",
        choices: [
          "Turn right without stopping if the way looks clear",
          "Turn right only when a green arrow appears",
          "Turn right after a complete stop, unless a sign forbids it",
          "Turn right only between the hours posted on the signal",
        ],
        correctIndex: 2,
        explanation:
          "Right on red is permitted statewide, but only after you have actually stopped and yielded to pedestrians and traffic already in your path. A NO TURN ON RED sign removes the permission.",
        context:
          "A steady red circle means stop and stay stopped until the light turns green. Two turns are carved out of that. Right on red is allowed after a full stop unless posted otherwise, and left on red is allowed when you are on a one-way street turning left onto another one-way street. Both still require you to yield before you move.",
        trap:
          "Treating red as a yield sign for right turns. The stop has to happen first, and it has to be complete.",
        excerptKey: "red-light",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Steady Red Circle",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_03",
        topic: "speed",
        question: "What is the speed limit on a road near a school in Massachusetts?",
        choices: ["20 mph", "15 mph", "25 mph", "30 mph"],
        correctIndex: 0,
        explanation:
          "Massachusetts sets school zones at 20 mph. It is one of the lowest school-zone limits in the country.",
        context:
          "School zone signs can appear in several forms - a plain posted limit, a sign with flashing yellow lights, or a sign that applies only during listed hours. The 20 mph figure is the one to remember, and it goes with watching for crossing guards, school safety patrols and children on bicycles.",
        trap:
          "25 mph is the reflex answer because so many other states use it. Massachusetts is 20.",
        excerptKey: "school-zone-speed",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, School Zones",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_04",
        topic: "rightOfWay",
        question:
          "You approach an intersection with no signs and no signals. Another car is arriving from your right at the same moment. Who goes first?",
        choices: [
          "Whichever driver signals their intention first",
          "The car on your right",
          "The car travelling straight rather than turning",
          "Whoever is moving faster, to keep traffic flowing",
        ],
        correctIndex: 1,
        explanation:
          "Massachusetts settles an uncontrolled intersection by position: you yield to a vehicle that has entered from your right or is coming from your right.",
        context:
          "At an uncontrolled intersection you slow down, look left and right, and proceed only if the way is clear. The rule the manual states is that traffic from your right has the right of way. It also warns you to check for traffic from the left and to make sure the other driver is actually yielding before you move, because a legal right of way is no protection against someone who ignores it.",
        trap:
          "A turn signal announces what a driver intends to do. It does not create a right to do it first.",
        excerptKey: "uncontrolled-intersection",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Right-of-Way Rules",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_05",
        topic: "safety",
        question:
          "You are driving four adult friends, two of them in the back seat. Under Massachusetts law, who must be belted?",
        choices: [
          "Every person in the vehicle, front seat and back seat alike",
          "Only you, because you are the driver",
          "Only the people sitting in the front",
          "Everyone except passengers over 18",
        ],
        correctIndex: 0,
        explanation:
          "Massachusetts requires every person in a passenger vehicle to wear a belt or sit in a child restraint. There is no rear-seat exemption.",
        context:
          "The requirement covers vans and small trucks under 18,000 pounds as well as cars. A driver who is unbelted can be fined $25, and so can each passenger aged 16 or older; the driver also picks up a $25 fine for each passenger aged 12 to 15 who is unbelted. A short list of people are exempt, including drivers and passengers of vehicles built before July 1966 and anyone with a physician's certificate that a disability prevents belt use.",
        trap:
          "Several states still exempt adults in the back seat, so drivers who learned elsewhere assume Massachusetts does too. It does not.",
        excerptKey: "seat-belt-law",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Safety/Seat Belt Law",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_06",
        topic: "licensing",
        question:
          "What is the minimum age to apply for a Class D learner's permit in Massachusetts?",
        choices: ["15", "16", "16 1/2", "17"],
        correctIndex: 1,
        explanation:
          "You can apply for a Class D or Class M learner's permit the day you turn 16. The licence itself comes later.",
        context:
          "The Massachusetts sequence is permit first, licence second. You may hold a permit at 16, but you cannot be issued a Class D or M driver's licence until you are at least 16 1/2, have held the permit in good standing for six consecutive months, and have finished an RMV-approved driver education programme. Nobody under 16 may drive in Massachusetts at all, even holding a licence from a state or country that issues them younger.",
        trap:
          "16 1/2 is the age for the licence, not the permit. Mixing the two up costs you six months of practice time on paper.",
        excerptKey: "permit-age",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, Getting a Learner's Permit",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_07",
        topic: "rules",
        question:
          "You are on a road with two lanes running in your direction and no obstructions. Which lane should you normally use?",
        choices: [
          "The right lane, keeping the left for passing and left turns",
          "Either lane, as long as you keep a steady speed",
          "The left lane, so slower traffic can enter from the right",
          "Whichever lane has the fewest vehicles in it",
        ],
        correctIndex: 0,
        explanation:
          "The right lane is the travel lane. You move left to pass, to make a left turn, or when the right lane is blocked.",
        context:
          "On an expressway with three or more lanes in your direction the pattern extends: far right for slower driving, middle for faster driving, far left for passing. Changing lanes in the middle of an intersection is illegal in Massachusetts, and the breakdown lane is not a travel lane except on the specific highways and at the specific posted hours where that use is allowed.",
        trap:
          "Sitting in the left lane at the speed limit is not lane discipline. The left lane is for passing, not for cruising.",
        excerptKey: "right-lane-rule",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Using Lanes",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_08",
        topic: "impairment",
        question:
          "At what blood alcohol content is a driver aged 21 or over operating above the legal limit in Massachusetts?",
        choices: ["0.08", "0.05", "0.02", "0.10"],
        correctIndex: 0,
        explanation:
          "0.08 is the figure. At or above it you are over the limit, and a chemical test at 0.08 or greater counts as a failed test.",
        context:
          "That number is the threshold, not a safe level. Massachusetts is clear that even one drink in an hour affects driving, and you can be convicted of operating under the influence below 0.08 if your driving shows impairment. Drivers under 21 face a separate and far lower administrative threshold.",
        trap:
          "Being under 0.08 is not a defence on its own. Impairment can be proved from your driving, not just from a number.",
        excerptKey: "legal-limit",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Alcohol Tests",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_09",
        topic: "sharing",
        question:
          "A school bus ahead of you has switched on its flashing red lights and swung out its stop sign. You are travelling in the opposite direction on an ordinary two-way street. What must you do?",
        choices: [
          "Slow down and pass carefully, since you are on the other side",
          "Stop, and stay stopped until the lights stop flashing or the sign folds back",
          "Stop only if you can see children in the road",
          "Sound your horn and proceed at walking pace",
        ],
        correctIndex: 1,
        explanation:
          "The stop applies from either side of the road. You remain stopped until the warning signals go off or the stop arm retracts.",
        context:
          "Massachusetts applies this to yellow school buses and to school pupil transport vehicles - vans, station wagons and sedans carrying pupils, which use flashing red lights and a SCHOOL BUS sign on the roof. There is one exception: a bus stopped on the far side of a divided highway with a barrier between the travel directions. Even after the lights stop, the manual tells you to move off slowly and keep looking for children.",
        trap:
          "Assuming the far side of the road is exempt. The exception is narrow and needs a physical barrier, not just a painted median or a wide road.",
        commonlyMissed: true,
        excerptKey: "school-bus-stop",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, School Buses",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_10",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Massachusetts?",
        choices: [
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than ten feet",
        ],
        correctIndex: 3,
        explanation:
          "Ten feet is the Massachusetts figure, and the same rule covers a marked fire lane.",
        context:
          "The parking list also bars you from stopping within 20 feet of an intersection, in a crosswalk, in front of a driveway or a handicap-access ramp, on a sidewalk or median, and facing the wrong way against traffic. Most of the fines attached to these are set by the city or town rather than by the state, so they vary from place to place, but the prohibitions themselves do not.",
        trap:
          "15 feet is the common figure in other states and the one most drivers guess. Massachusetts uses ten for hydrants and 20 for intersections.",
        commonlyMissed: true,
        excerptKey: "parking-hydrant",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_11",
        topic: "signs",
        question: "What does a downward-pointing triangular sign require you to do?",
        choices: [
          "Come to a complete stop every time",
          "Slow down, be ready to stop, and let others go first",
          "Merge left as soon as a gap appears",
          "Continue at your current speed and watch for hazards",
        ],
        correctIndex: 1,
        explanation:
          "A YIELD sign means slow down and give way. You must come to a full stop if traffic conditions require one, but a stop is not automatic.",
        context:
          "Yield and stop are deliberately different shapes so you can tell them apart at a distance. At a yield you let vehicles, bicyclists and pedestrians go before you proceed. Some yield-controlled intersections carry a painted YIELD line - a row of triangles across the lane - marking where you would stop if you had to.",
        trap:
          "Treating a yield as a stop wastes time and can cause a rear-end collision; treating it as a free pass causes worse.",
        excerptKey: "yield-sign",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Stop and Yield Signs",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_12",
        topic: "emergencies",
        question:
          "An ambulance approaches with siren and flashing lights while you are driving down a two-way street. What does Massachusetts require?",
        choices: [
          "Pull as close as you can to the right and stop until it passes",
          "Slow to half the speed limit and stay in your lane",
          "Move to the left so the ambulance can use the right lane",
          "Stop wherever you are, including inside the intersection",
        ],
        correctIndex: 0,
        explanation:
          "You pull to the right and stop. The manual says outright that slowly rolling is not acceptable.",
        context:
          "The rule applies whichever direction the emergency vehicle is coming from. Check your mirrors, signal right, and find a safe place to pull over rather than braking hard. Never stop in the middle of an intersection - drive through it first and pull over once you are clear. After the vehicle passes, check that no second emergency vehicle is following before you merge back.",
        trap:
          "Stopping dead in the intersection blocks the very route the ambulance needs. Clear the junction first.",
        excerptKey: "moving-emergency-vehicle",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Moving Emergency Vehicle",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_13",
        topic: "signals",
        question: "You come to an intersection where the signal is showing a flashing red circle. What does it mean?",
        choices: [
          "Proceed with caution, the way a flashing yellow would tell you to",
          "The signal is broken and has no legal meaning",
          "Stop only if a vehicle is approaching from the cross street",
          "It means the same as a STOP sign",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is a stop sign in light form. You come to a complete stop, obey the right-of-way rules, and go when it is safe.",
        context:
          "Where a white stop line or crosswalk line is painted, you stop before the line. Where there is none, you stop close enough to the intersection to see traffic in both directions. A flashing yellow, by contrast, is only a warning to proceed with caution. If the signal heads are completely dark rather than flashing, treat the intersection as an all-way stop.",
        trap:
          "Flashing red and flashing yellow look similar at night from a distance. One requires a full stop, the other does not.",
        excerptKey: "flashing-red",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Flashing Red Circle",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_14",
        topic: "speed",
        question:
          "A street inside a thickly settled or business district carries no speed limit sign at all. What speed does Massachusetts treat as reasonable and proper?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "With nothing posted, the figure inside a thickly settled or business district is 30 mph. The absence of a sign is not the absence of a limit.",
        context:
          "Massachusetts states four unposted figures: 20 mph in a school zone, 30 mph in a thickly settled or business district, 40 mph outside one, and 50 mph on a highway outside one. A community that has adopted the relevant statute may lower its thickly settled figure to 25 mph, and when it does, signs go up at every entrance to the city or town.",
        trap:
          "Guessing 25 because so many Massachusetts towns post it. 25 is the local option; 30 is the default when nothing is posted and nothing has been adopted.",
        commonlyMissed: true,
        excerptKey: "default-speed-limits",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_15",
        topic: "safety",
        question:
          "Massachusetts teaches a counting method for following distance behind an ordinary car in good conditions. What is it?",
        choices: [
          "One second for every ten feet of vehicle length",
          "A one-car-length gap for every 10 mph of speed",
          "The three-second rule",
          "Half your speed in metres",
        ],
        correctIndex: 2,
        explanation:
          "Pick a fixed object, and if you reach it before you finish counting three, you are too close.",
        context:
          "Three seconds is the minimum for good conditions and moderate traffic, and the manual tells you to count more when traffic allows. Two vehicles get longer counts of their own: at least four seconds behind a motorcycle, and at least ten seconds behind heavy equipment such as a dump truck or tractor. Rain, snow, ice and poor visibility all call for more space still.",
        trap:
          "Three seconds is a floor, not a target. It assumes dry pavement, daylight and a car in front of you.",
        excerptKey: "three-second-rule",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Safe Distances Around Your Car",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_16",
        topic: "licensing",
        question:
          "You hold a Class D learner's permit. Who is allowed to supervise you, and where must they sit?",
        choices: [
          "Any licensed adult, anywhere in the vehicle",
          "A licensed driver aged 21 or over with a year's experience, in the seat beside you",
          "A parent or guardian only, in the seat beside you",
          "A licensed driver aged 18 or over, in the front or the back",
        ],
        correctIndex: 1,
        explanation:
          "Your supervisor must be at least 21, hold a valid Massachusetts or other state licence, have at least one year of driving experience, and occupy the passenger seat next to you.",
        context:
          "All four conditions apply at once - age, a valid licence, a year of experience, and the seat beside you. A supervisor sitting behind you does not satisfy the rule. Separately, a permit holder under 18 may not drive between midnight and 5:00 a.m. unless the person beside them is a parent or legal guardian.",
        trap:
          "A licensed 19-year-old cousin does not qualify, however confident everyone feels. The floor is 21 with a year behind the wheel.",
        excerptKey: "permit-supervisor",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, Driving With Your Permit",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_17",
        topic: "rules",
        question:
          "Two solid yellow lines run down the middle of the road you are on. What do they permit?",
        choices: [
          "Passing, as long as you can see far enough ahead",
          "Passing only when the vehicle in front is turning left",
          "No passing across them, though you may cross to turn left when safe",
          "Nothing at all - they may never be crossed for any reason",
        ],
        correctIndex: 2,
        explanation:
          "A double solid yellow forbids crossing to pass. You may still cross it to make a left turn when it is safe to do so.",
        context:
          "Yellow lines separate traffic moving in opposite directions. A broken yellow lets you cross temporarily to pass when it is safe. Where one line is solid and one is broken, the line closest to you decides: solid nearest you means no crossing, broken nearest you means you may cross to pass. Two solid yellows close the passing option from both sides.",
        trap:
          "Reading double yellow as an absolute barrier. Left turns across it into a driveway or side street are permitted.",
        excerptKey: "double-yellow",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Yellow Lane Lines",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_18",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light with no arrow. Traffic is coming the other way. What must you do?",
        choices: [
          "Complete the turn quickly before the oncoming car arrives",
          "Move into the intersection and turn as soon as the light goes yellow",
          "Sound your horn to claim the gap",
          "Yield to oncoming vehicles, and to anyone crossing your path",
        ],
        correctIndex: 3,
        explanation:
          "On a plain green you yield to oncoming traffic, to any vehicle already in the intersection, and to pedestrians or bicyclists crossing where you are heading.",
        context:
          "A green circle means go, but only after you have given way. A green arrow is different - it is a protected turn, which means the oncoming traffic and the pedestrians crossing your path should be held at red. The manual also warns that a driver waving you through does not transfer the right of way; oncoming traffic still has it.",
        trap:
          "Waiting in the intersection and turning on the yellow is a habit, not a rule. You are still yielding until the way is genuinely clear.",
        excerptKey: "left-turn-yield",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Turning Left",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_19",
        topic: "impairment",
        question:
          "A driver aged 19 is stopped in Massachusetts. At what blood alcohol content do penalties begin for them?",
        choices: ["0.08", "0.02", "0.05", "Any reading above zero"],
        correctIndex: 1,
        explanation:
          "Massachusetts runs a zero-tolerance rule for under-21 drivers, and the administrative threshold is 0.02.",
        context:
          "Under 21, the criminal standard for operating under the influence is still 0.08, but administrative sanctions start at 0.02 - a level a single drink can reach. Being caught at 0.02 or above costs you your licence. The RMV describes the extra under-21 suspensions as designed to push young drivers into an approved alcohol education programme, and they apply regardless of how the court case turns out.",
        trap:
          "0.02 is not literally zero, but it is close enough that one drink can put you there. It is not a small allowance.",
        excerptKey: "zero-tolerance",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Under-21 Alcohol Offenses",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_20",
        topic: "sharing",
        question:
          "Massachusetts law sets a minimum passing distance for vulnerable road users such as pedestrians, bicyclists and people on horseback. What is it?",
        choices: ["At least four feet", "At least two feet", "At least three feet", "At least six feet"],
        correctIndex: 0,
        explanation:
          "Four feet is the statutory minimum, and it applies to the whole list of vulnerable users, not just bicyclists.",
        context:
          "The list runs wider than most drivers expect: pedestrians, roadside workers, bicyclists, riders and horse-drawn carriages, and people using wheelchairs, personal mobility devices, motorized bicycles, scooters, skateboards or roller skates. To make the four feet you may use all or part of the next lane and cross the centre line if necessary - but you must still obey the speed limit while passing.",
        trap:
          "Three feet is the figure in many neighbouring states and the one drivers carry over. Massachusetts requires four.",
        commonlyMissed: true,
        excerptKey: "vulnerable-road-users",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Vulnerable Road Users Law",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_21",
        topic: "signs",
        question: "In the Massachusetts sign colour system, what does an orange sign indicate?",
        choices: [
          "A recreational or historic site",
          "A motorist service such as fuel or lodging",
          "A school zone or pedestrian warning",
          "Construction or maintenance warning",
        ],
        correctIndex: 3,
        explanation:
          "Orange is reserved for construction and maintenance warnings, which is why work zones look nothing like ordinary yellow warning signs.",
        context:
          "The colour code is worth learning as a set: red for stop or prohibition, green for direction, yellow for general warning, black and white for regulation, blue for motorist services, brown for recreational and historic sites. Massachusetts adds three more - fluorescent yellow-green for school, bicycle, pedestrian and curve warnings, fluorescent pink for incident management, and purple for electronic toll collection.",
        trap:
          "Orange and yellow both mean warning, but only orange means people may be working on foot just beyond the sign.",
        excerptKey: "sign-colours",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Traffic Signs",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_22",
        topic: "safety",
        question: "When does Massachusetts law require your headlights and taillights to be on?",
        choices: [
          "Only between sunset and sunrise",
          "Only when you cannot see 200 feet ahead",
          "From half an hour after sunset to half an hour before sunrise, and whenever your wipers are running",
          "Whenever the vehicle is moving, at any hour",
        ],
        correctIndex: 2,
        explanation:
          "The half-hour window either side of sunset and sunrise is one trigger; running your windshield wipers is another, and daytime running lights do not satisfy it.",
        context:
          "There is a third trigger too: any time you cannot clearly see people or vehicles 500 feet ahead because of low light or weather. The manual repeats the wipers rule in its rain and fog section and repeats the warning about daytime running lights, because those lights usually leave your taillights dark and that is exactly when you need to be seen from behind.",
        trap:
          "Daytime running lights feel like headlights and are not. In rain they leave nothing lit at the back of your car.",
        excerptKey: "headlight-rule",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Using Your Horn, Headlights, and Emergency Signals",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_23",
        topic: "rules",
        question: "How far before an ordinary turn does Massachusetts require you to signal?",
        choices: ["At least 50 feet", "At least 75 feet", "At least 100 feet", "At least 200 feet"],
        correctIndex: 2,
        explanation:
          "100 feet is the figure for an ordinary road. On a highway the requirement stretches to at least 500 feet.",
        context:
          "Signalling is required for more than turns: changing lanes, turning into a driveway, pulling away from a curb, pulling over, and entering or leaving an expressway all call for one. The manual suggests signalling before you apply the brakes so drivers behind understand why you are slowing, and it reminds you to cancel the signal once the move is finished.",
        trap:
          "Signalling as you begin the turn is too late to be useful. The point is to give the drivers behind you time to react.",
        excerptKey: "signal-distance",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Turns",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_24",
        topic: "parking",
        question:
          "You park along the curb on a street in a business district. How far from the curb may your vehicle sit?",
        choices: [
          "No more than 12 inches",
          "No more than 18 inches",
          "No more than two feet",
          "There is no set distance, as long as traffic can pass",
        ],
        correctIndex: 0,
        explanation:
          "Twelve inches is the limit, with angled parking the only exception where it is permitted.",
        context:
          "Alongside that, you must leave at least a 12-foot wide clear roadway for traffic to pass, and you must not create a hazard while parked or stopped. When you leave the vehicle unattended, state law requires you to stop the motor, set the parking brake, lock the ignition, take the key and lock the door.",
        trap:
          "A foot from the curb sounds generous but is the maximum, not a suggestion. Anything wider narrows the travel lane.",
        excerptKey: "parking-12-inches",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_25",
        topic: "licensing",
        question:
          "How many questions are on the Massachusetts learner's permit exam, and how many must you answer correctly?",
        choices: [
          "25 questions, 18 correct",
          "20 questions, 16 correct",
          "30 questions, 24 correct",
          "40 questions, 32 correct",
        ],
        correctIndex: 0,
        explanation:
          "Twenty-five multiple-choice questions, of which 18 must be right - a pass mark of 72 percent - inside a 25-minute limit.",
        context:
          "The RMV says the exam covers rules of the road, identifying road signs, alcohol misuse, suspensions and Junior Operator Licence violations. That works out at roughly a minute a question. You can sit it on an automated testing station at a Service Center or online after your Service Center visit, and the exam is offered in dozens of languages and as an audio exam.",
        trap:
          "There is no separate signs section you have to ace, the way some states run it. Signs are mixed in with everything else.",
        excerptKey: "exam-pass-mark-rmv",
        sourceLabel: "Massachusetts RMV - Apply for a passenger (Class D) learner's permit",
        sourceUrl: PERMIT,
      },
      {
        id: "ma_s1_26",
        topic: "emergencies",
        question:
          "You are in a crash that causes $1,400 of damage and no injuries. What does Massachusetts require?",
        choices: [
          "Tell your insurance company and nothing more",
          "File a police report only, within 30 days",
          "Report it only if the other driver asks you to",
          "File a written crash report with the RMV and the local police within five days",
        ],
        correctIndex: 3,
        explanation:
          "Any crash causing injury, death, or $1,000 or more of property damage must be reported in writing within five days, to both the RMV and the local police.",
        context:
          "The report goes out in three copies - one to the police department where the crash happened, one to your insurer, and one to the RMV. The manual is blunt that telling your insurance company alone is not enough. Failing to file when you are required to can bring a fine and a licence suspension.",
        trap:
          "The threshold is low. A single bumper and a headlight will clear $1,000 without anybody being hurt.",
        excerptKey: "crash-report-threshold",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Reporting a Crash",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_27",
        topic: "signals",
        question: "A steady yellow circle appears as you approach an intersection. What does Massachusetts require?",
        choices: [
          "Accelerate to clear the intersection before the red",
          "Continue at your current speed, since yellow is only advisory",
          "Stop immediately, whatever is behind you",
          "Stop if it is safe to do so",
        ],
        correctIndex: 3,
        explanation:
          "Yellow means the change to red is coming, and you must stop if stopping is safe. Massachusetts adds that if you are already stopped at the line, a yellow does not let you move off.",
        context:
          "The judgement is about whether stopping is safe, not about whether you can beat the light. If you are far enough back to stop without slamming the brakes or being rear-ended, you stop. That second sentence about already-stopped vehicles catches out drivers who see the light cycle and start creeping forward.",
        trap:
          "Treating yellow as a licence to speed up. The manual describes it as a warning that red is next, not as extra green time.",
        excerptKey: "steady-yellow",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Steady Yellow Circle",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_28",
        topic: "speed",
        question:
          "You are driving 40 mph in heavy rain on a road posted at 50 mph. Can you be ticketed for speed?",
        choices: [
          "No, because you are below the posted limit",
          "Yes - posted limits assume ideal conditions, and heavy rain is not ideal",
          "Only if you are involved in a crash",
          "Only if a reduced-speed sign has been posted for the weather",
        ],
        correctIndex: 1,
        explanation:
          "Massachusetts uses the posted limit as a ceiling under good conditions. Driving too fast for the conditions is an offence in its own right, and the manual gives this exact example.",
        context:
          "The fundamental speed law comes first: you must never travel so fast that it is not safe, whatever the sign says. Traffic volume, the state of the road surface, visibility, and the presence of pedestrians or bicyclists all feed into what counts as reasonable. Poor conditions oblige you to slow down even where the posted number is higher.",
        trap:
          "Believing the posted number is a guarantee. It is the maximum for a dry, clear, well-lit road with light traffic.",
        excerptKey: "ticket-under-limit",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_29",
        topic: "sharing",
        question:
          "How much following distance does Massachusetts recommend behind a motorcycle, compared with an ordinary car?",
        choices: [
          "The same three seconds",
          "At least four seconds",
          "At least six seconds",
          "Two seconds, because motorcycles stop faster",
        ],
        correctIndex: 1,
        explanation:
          "Four seconds behind a motorcycle, against three for another car. Riders can slow or change direction far more abruptly than a car does.",
        context:
          "The extra second buys reaction time for the things that make riders swerve - road debris, potholes, surface oil, and gravel that a car would simply drive over. The manual also reminds drivers that a motorcycle is entitled to the full width of a lane, that you may never share a lane with one, and that about half of fatal motorcycle crashes involve the rider being struck by another vehicle.",
        trap:
          "Motorcycles look small, so drivers close up behind them. Their braking is not the issue; their need to move suddenly within the lane is.",
        excerptKey: "four-second-motorcycle",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Safe Distances Around Your Car",
        sourceUrl: HB,
      },
      {
        id: "ma_s1_30",
        topic: "rightOfWay",
        question: "You are approaching the entrance to a rotary. Who has the right of way?",
        choices: [
          "Whoever reaches the entrance first",
          "You do, because entering traffic is joining a flow",
          "The larger vehicle, because it needs more room",
          "The vehicles already travelling in the rotary",
        ],
        correctIndex: 3,
        explanation:
          "You yield to traffic already circulating, and to pedestrians. Rotary entrances carry yield signs for exactly that reason.",
        context:
          "Rotaries are far more common in Massachusetts than in most of the country, and traffic in them runs counter-clockwise. Large rotaries are designed for speeds of up to 40 mph; roundabouts are smaller and force speeds down to 25 mph or less. Use your right turn signal as you prepare to exit, and if you miss your exit, go around again rather than stopping.",
        trap:
          "Stopping inside the rotary because you missed your exit is the classic error. The manual tells you not to stop in the rotary at all.",
        excerptKey: "rotary-yield",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Rotary Traffic Rules",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Everyday Massachusetts Rules",
    difficulty: "easy",
    description:
      "The rules you use on every trip: lane lines, right of way at junctions, the unposted speed figures, and the restrictions that come attached to a Massachusetts learner's permit.",
    questions: [
      {
        id: "ma_s2_01",
        topic: "signals",
        question:
          "When does Massachusetts allow a left turn on a steady red light?",
        choices: [
          "From a one-way street onto another one-way street, after stopping",
          "Never, under any circumstances",
          "Whenever there is no oncoming traffic",
          "Only where a sign specifically permits it",
        ],
        correctIndex: 0,
        explanation:
          "One-way to one-way is the only case. You still come to a complete stop and yield to pedestrians and other vehicles before you go.",
        context:
          "Massachusetts allows two turns against a steady red. Right on red is the familiar one, permitted after a full stop unless a NO TURN ON RED sign is posted. Left on red is narrower and needs both streets to be one-way. A steady red arrow carries the same rules, but only for traffic heading in the arrow's direction.",
        trap:
          "The turn needs a one-way street at both ends. Turning left from a one-way onto a two-way road on red is not permitted.",
        excerptKey: "left-on-red",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Steady Red Circle",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_02",
        topic: "rules",
        question: "What does a single solid white line between two lanes tell you?",
        choices: [
          "Traffic goes the same way on both sides, and you should not cross without need",
          "Traffic on the other side is coming toward you",
          "The lane beyond it is a breakdown lane you may use freely",
          "You may cross it only to make a left turn",
        ],
        correctIndex: 0,
        explanation:
          "White separates traffic moving in the same direction. A solid white marks the right edge of the roadway or divides same-direction lanes, and you should not cross it unless you need to avoid danger.",
        context:
          "White lines and yellow lines answer different questions. White tells you the traffic beyond it is going your way; yellow tells you it is coming at you. A broken white may be crossed to change lanes once you have signalled and checked. A double solid white may not be crossed at all. Solid white is the middle case - discouraged rather than forbidden.",
        trap:
          "Treating solid white like double yellow. It is a discouragement, not an outright ban, but the shoulder beyond it is a different matter.",
        excerptKey: "solid-white",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, White Lane Lines",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_03",
        topic: "licensing",
        question: "Which drivers count as Junior Operators in Massachusetts?",
        choices: [
          "Anyone in their first year of driving, at any age",
          "Anyone under 21",
          "Drivers and motorcyclists between 16 1/2 and 18",
          "Anyone holding a learner's permit",
        ],
        correctIndex: 2,
        explanation:
          "The Junior Operator Licence covers drivers and motorcyclists aged 16 1/2 to 18. It is an age bracket, not a period of experience.",
        context:
          "A Junior Operator Licence carries the restriction code letter I on the card, and it comes with restrictions on passengers, on night driving, and on electronic devices. Because it ends at 18 rather than after a fixed term, a driver licensed at 17 years and 11 months spends barely a month as a Junior Operator, while one licensed at 16 1/2 spends eighteen.",
        trap:
          "Assuming it lasts a fixed number of months from the date of licensing. It ends on your eighteenth birthday, whenever that falls.",
        excerptKey: "jol-definition",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, The Junior Operator License Law",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_04",
        topic: "safety",
        question:
          "When may a child stop using a federally approved child passenger restraint in Massachusetts?",
        choices: [
          "At age six, or 40 pounds, whichever comes first",
          "At age eight, or 57 inches tall",
          "At age five, or 45 inches tall",
          "At age ten, regardless of height",
        ],
        correctIndex: 1,
        explanation:
          "Eight years old or 57 inches tall ends the restraint requirement. After that the child must wear a safety belt, correctly.",
        context:
          "The rule is stated as an either-or, so a tall seven-year-old and a short nine-year-old are both covered by it. Once out of the restraint the child still has to be belted, and breaking that carries a $25 fine. The manual adds that the safest place for a child is the back seat, that the back middle seat is best of all, and that infant seats must face the rear.",
        trap:
          "Weight is not the legal test in Massachusetts. Age and height are - even though the manufacturer's limits are set by weight.",
        excerptKey: "child-restraint",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Child Passenger Restraints",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_05",
        topic: "speed",
        question:
          "You are on an unposted road outside any thickly settled or business district. It is not a highway. What speed does Massachusetts treat as reasonable and proper?",
        choices: ["30 mph", "35 mph", "40 mph", "45 mph"],
        correctIndex: 2,
        explanation:
          "40 mph is the unposted figure once you are outside a thickly settled or business district, on anything that is not a highway.",
        context:
          "There are four unposted figures to hold apart: 20 in a school zone, 30 inside a thickly settled or business district, 40 outside one, and 50 on a highway outside one. The underlying statute frames these as prima facie evidence of unreasonable speed rather than as flat limits, and attaches a distance to each - you have to hold the speed over a quarter of a mile for the outside-district figures to bite.",
        trap:
          "Reaching for 55, which is the default in a lot of states and appears nowhere in the Massachusetts list of unposted figures.",
        commonlyMissed: true,
        excerptKey: "default-speed-limits",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_06",
        topic: "signs",
        question: "A yellow diamond-shaped sign appears at the roadside. What is it telling you?",
        choices: [
          "A traffic law or regulation applies here",
          "There is a hazard or a change in conditions ahead",
          "You are approaching a recreational area",
          "The road ahead is closed to through traffic",
        ],
        correctIndex: 1,
        explanation:
          "Yellow warning signs tell you that the road layout or conditions are about to change, and that you should slow down and obey the sign.",
        context:
          "Massachusetts uses fluorescent yellow-green rather than plain yellow for a subset of warnings - school zones, bicycle and pedestrian crossings, and curve warnings - so the brighter colour is not a different category, just a more visible one. Regulatory signs, by contrast, use a red or white background and state a law rather than warning of a hazard.",
        trap:
          "Warning signs feel optional because they are not stating a rule. They still oblige you to slow down for what is coming.",
        excerptKey: "sign-colours",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_07",
        topic: "sharing",
        question:
          "A bicyclist is riding in the middle of a travel lane on a street that also has a marked bike lane. Is that permitted in Massachusetts?",
        choices: [
          "Yes - a bicyclist may use the full lane anywhere, even where a bike lane exists",
          "No, a marked bike lane must be used when one is provided",
          "Only if the bike lane is blocked or unusable",
          "Only on streets posted below 30 mph",
        ],
        correctIndex: 0,
        explanation:
          "Massachusetts lets a bicyclist take the full lane anywhere, anytime, on any street, whether or not a bike lane is there.",
        context:
          "The only exception is a limited-access or express state highway carrying signs that specifically prohibit bicycles. Riders must otherwise obey the same traffic laws as drivers - stopping at red lights and stop signs, riding with traffic, and keeping off sidewalks in business districts. Two bicycles may ride side by side, though on a multi-lane road they must stay within one lane.",
        trap:
          "Assuming a painted bike lane is compulsory for riders. It is a facility, not an obligation, and honking at someone using the lane is not enforcing anything.",
        excerptKey: "bicycle-full-lane",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Laws for Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_08",
        topic: "parking",
        question: "How close to an intersection may you park in Massachusetts?",
        choices: [
          "No closer than 20 feet",
          "No closer than ten feet",
          "No closer than 30 feet",
          "There is no fixed distance, only a rule against blocking the view",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet from an intersection is the Massachusetts figure. The hydrant rule is a separate and shorter distance of ten feet.",
        context:
          "Both numbers sit on the same prohibited list, which also bars parking in a crosswalk, in front of a driveway or handicap-access ramp, in a bus stop, in a taxi stand, in a bicycle lane, in a posted loading zone, and in a street-cleaning zone during the posted times. Parking violations are handled by the city or town rather than the state, and unpaid ones block your licence and registration renewals.",
        trap:
          "Swapping the two distances. Ten feet is the hydrant; 20 feet is the corner.",
        commonlyMissed: true,
        excerptKey: "parking-prohibited-distances",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_09",
        topic: "impairment",
        question:
          "A passenger is holding an open bottle of beer in your car while you drive. You have had nothing to drink. What is the position under Massachusetts law?",
        choices: [
          "It is legal as long as the driver is sober",
          "It is legal if the bottle is not in the driver's reach",
          "It is legal only in the rear seats",
          "It is an offence, punishable by a fine of $100 to $500",
        ],
        correctIndex: 3,
        explanation:
          "Massachusetts bars an open alcoholic drink anywhere inside the vehicle, and says so expressly even when somebody else is holding it.",
        context:
          "The offence stands apart from drinking and driving - your own sobriety is not a defence. A conviction brings a fine between $100 and $500. If you are under 21, the consequences widen sharply: the manual says you will be arrested, fined, and have your licence suspended.",
        trap:
          "Believing that handing the bottle to a passenger solves the problem. The law is written to close exactly that loophole.",
        excerptKey: "open-container",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Open Container Law",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_10",
        topic: "emergencies",
        question: "Your rear tires start to slide to the left. What does Massachusetts tell you to do?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Steer right, against the slide",
          "Ease off the gas, shift to neutral, and steer left",
          "Accelerate gently to pull the car straight",
        ],
        correctIndex: 2,
        explanation:
          "You steer in the direction of the skid. Rear tires sliding left means you steer left, having come off the gas and shifted into neutral, and without touching the brakes.",
        context:
          "The manual gives the same procedure for front-wheel and rear-wheel drive vehicles. Braking makes a skid worse because it removes what little steering control you have left. Expect to correct in both directions a few times before the car settles - the recovery is rarely a single movement of the wheel.",
        trap:
          "The instinct is to steer away from where the car is sliding. That is exactly backwards and puts the car further out of line.",
        excerptKey: "skid-recovery",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Skidding",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_11",
        topic: "rightOfWay",
        question:
          "Four cars arrive at a four-way stop at clearly different times. In what order do they go?",
        choices: [
          "The largest vehicle first, then the rest clockwise",
          "The vehicles going straight first, then those turning",
          "Whoever has waited longest at any point in the day",
          "In the order they came to a stop - first to stop, first to go",
        ],
        correctIndex: 3,
        explanation:
          "Arrival order settles it. The first vehicle to come to a full stop is the next one to move off.",
        context:
          "The tie-break only comes into play when two vehicles stop at the same moment, and then you yield to the vehicle directly to your right. The manual is candid that four-way stops cause confusion, and suggests making eye contact with other drivers to read their intentions. Where there is genuine doubt, give way to the driver on your right.",
        trap:
          "Vehicle size, or who looks more confident, has nothing to do with it. Stopping order does.",
        excerptKey: "four-way-order",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Four-Way Stop",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_12",
        topic: "rules",
        question:
          "You realise mid-intersection that you should be in the next lane over. What does Massachusetts say?",
        choices: [
          "Change lanes if you signal first",
          "Change lanes only if no vehicle is alongside you",
          "Changing lanes in the middle of an intersection is illegal",
          "Change lanes only where the pavement markings are broken",
        ],
        correctIndex: 2,
        explanation:
          "It is flatly illegal as well as dangerous. You hold your lane through the junction and change once you are clear of it.",
        context:
          "The same discipline runs through the turning rules: you turn from the lane closest to the one you want to enter, keep the vehicle centred rather than swinging wide, and change lanes afterwards if you need to. Once you have begun a turn through an intersection, you follow it through rather than stopping mid-turn and changing direction.",
        trap:
          "Signalling does not make it lawful. There is no version of this manoeuvre that is permitted inside the intersection.",
        excerptKey: "no-lane-change-intersection",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Using Lanes",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_13",
        topic: "signals",
        question: "A green arrow lights up for your turning direction. What does it mean?",
        choices: [
          "You may turn if you first yield to oncoming traffic",
          "You may turn only when the circular green also shows",
          "It is a warning that the turn phase is about to end",
          "You have a protected turn - oncoming traffic and pedestrians should be held at red",
        ],
        correctIndex: 3,
        explanation:
          "A green arrow is a protected turn. When it shows, the conflicting movements should be stopped for red lights.",
        context:
          "That protection is why an arrow behaves differently from a plain green circle, where you must yield to oncoming traffic before turning left. A flashing yellow arrow sits between the two: it permits the turn but obliges you to find a gap in oncoming traffic yourself and to check that nobody is crossing your path. Look for signs telling you the lane is turn-only.",
        trap:
          "Protected does not mean unwatched. The manual still tells you to look for drivers who race through intersections against their signal.",
        excerptKey: "green-arrow",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Green Arrow",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_14",
        topic: "safety",
        question:
          "It is a bright afternoon and light rain has started, so you switch on your wipers. What else must you do?",
        choices: [
          "Nothing - daytime running lights are enough in daylight",
          "Switch on your hazard lights",
          "Switch on your high beams for visibility",
          "Switch on your headlights and taillights",
        ],
        correctIndex: 3,
        explanation:
          "Wipers on means headlights and taillights on. Massachusetts states expressly that daytime running lights do not satisfy the requirement.",
        context:
          "The reason is the back of your car. Daytime running lights usually illuminate only the front, leaving you effectively invisible from behind in spray. The same section tells you to slow down as soon as rain starts, because roads are at their most slippery when fresh rain lifts the oil and dirt off the surface into a greasy film.",
        trap:
          "Hazard lights are for a stopped or disabled vehicle, not for driving in rain. Using them while moving hides your turn signals.",
        excerptKey: "wipers-headlights",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Driving in Rain or Fog",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_15",
        topic: "licensing",
        question: "How long is a Massachusetts learner's permit valid?",
        choices: ["Six months", "One year", "Up to two years", "Up to five years"],
        correctIndex: 2,
        explanation:
          "A permit runs for up to two years. If it expires before you are licensed, you have to sit the permit exam again and pay the fee again.",
        context:
          "That two-year window has to accommodate the six consecutive months you must hold the permit in good standing before an under-18 road test, plus driver education, plus the supervised driving hours. A suspension invalidates the permit and restarts the six-month clock when the suspension is lifted, which can eat the window quickly.",
        trap:
          "Letting it lapse is not a formality. You re-take the exam and pay the $30 fee over again.",
        excerptKey: "permit-validity",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, Getting a Learner's Permit",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_16",
        topic: "signs",
        question:
          "The lights at a railroad crossing begin to flash as you approach. Where must you stop?",
        choices: [
          "Anywhere before the rails themselves",
          "At least five feet before the gate",
          "At least ten feet before the light post",
          "At least 15 feet before the light post or gate",
        ],
        correctIndex: 3,
        explanation:
          "Fifteen feet is the Massachusetts distance, measured from the light post or the gate, and you stay stopped until the gate lifts and the lights go out.",
        context:
          "The round yellow sign before the crossing tells you to slow down and prepare to stop; the white crossbuck at the rails marks the crossing itself, with the number of tracks posted underneath if there is more than one. Never drive around a lowered gate, and never try to beat a train you can see or hear. The manual notes the fine for failing to stop is heavy.",
        trap:
          "Waiting only until the gate starts to rise. You stay put until it is up and the lights have stopped flashing - a second train may be coming.",
        excerptKey: "railroad-stop-15",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Railroad Crossings",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_17",
        topic: "speed",
        question:
          "You are on an unposted highway outside a thickly settled or business district. What speed does Massachusetts treat as reasonable and proper?",
        choices: ["40 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 1,
        explanation:
          "50 mph is the top figure in the unposted list. 55 and 65 mph appear only where they are actually posted.",
        context:
          "In practice most Massachusetts highways are signed, and limited-access routes carry limits between 50 and 65 mph while smaller highways run at 55 or lower. The unposted 50 mph figure only decides what counts as reasonable when there is no sign at all. The underlying statute ties it specifically to a divided highway and to holding the speed over a quarter of a mile.",
        trap:
          "55 is the reflex answer from other states and from Massachusetts's own posted highways. The unposted figure is 50.",
        commonlyMissed: true,
        excerptKey: "highway-speed-range",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_18",
        topic: "sharing",
        question:
          "A motorcycle is riding to the right-hand side of a wide lane ahead of you. May you move into the free space beside it?",
        choices: [
          "Yes, if the lane is wide enough for both",
          "No - you must never share a lane with a motorcycle",
          "Yes, but only to overtake, and only at low speed",
          "Only if the rider signals you through",
        ],
        correctIndex: 1,
        explanation:
          "A motorcycle is entitled to the full width of its lane. Crowding into that lane is illegal in Massachusetts and dangerous whatever the rider is doing.",
        context:
          "Riders shift position within a lane deliberately - to be seen, to set up for a turn, or to avoid debris, potholes and surface oil. The manual makes the point that a motorcycle taking up less physical space than a car does not shrink its legal claim on the lane. In the other direction, it is illegal for a rider to weave between lanes at any time.",
        trap:
          "A rider hugging one side is not offering to share. They are positioning, and they may move back across without warning.",
        excerptKey: "motorcycle-lane-share",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_19",
        topic: "impairment",
        question: "What does the Massachusetts Implied Consent Law mean for a licensed driver?",
        choices: [
          "By holding a licence you have agreed to a breath or blood test in certain circumstances",
          "You consent to a search of your vehicle at any traffic stop",
          "You agree that any conviction elsewhere will be treated as a Massachusetts conviction",
          "You accept that a refusal carries no consequence unless you are convicted",
        ],
        correctIndex: 0,
        explanation:
          "Every licensed driver in the state has consented in advance to a breathalyzer or blood test in the circumstances the law describes.",
        context:
          "If an officer believes you are operating under the influence, they may ask you to perform field sobriety tests and, once you are under arrest, to submit to a breath or blood test. Refuse, or blow above the limit, and the officer must take your licence and hand you a notice of suspension that takes effect immediately. Refusals are punished separately from the underlying offence.",
        trap:
          "Refusing is not a way to avoid consequences. For a driver over 21 with no prior offence, a refusal alone means a 180-day suspension.",
        excerptKey: "implied-consent",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Alcohol Tests",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_20",
        topic: "rightOfWay",
        question:
          "You are pulling out of a private driveway onto a paved road. What does Massachusetts require?",
        choices: [
          "Slow down and merge when a gap appears",
          "Yield only to vehicles, since pedestrians must watch for you",
          "Stop, then give way to pedestrians, bicyclists and vehicles on the road",
          "Nothing in particular, as long as you signal",
        ],
        correctIndex: 2,
        explanation:
          "The stop is mandatory. Only after stopping do you give way to everyone already using the road you are joining.",
        context:
          "The same rule covers a private road and an unpaved road joining a paved one. Reversing out is the higher-risk version: the manual tells you to check behind the vehicle before you get in, to turn your head and look out the window rather than relying on mirrors or sensors, and to expect blind spots to hide people entirely.",
        trap:
          "Rolling out of the driveway while looking for a gap. The stop comes first, before you start judging the traffic.",
        excerptKey: "driveway-stop",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Private Roads, Driveways, and Unpaved Roads",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_21",
        topic: "rules",
        question: "From which lane may you make a U-turn in Massachusetts?",
        choices: [
          "Any lane, as long as the road is clear",
          "The right-hand lane, so you have room to swing",
          "Only from a dedicated turning lane",
          "The lane closest to the center line",
        ],
        correctIndex: 3,
        explanation:
          "The U-turn starts from the lane closest to the centre line, so the manoeuvre stays as tight as possible.",
        context:
          "A U-turn is permitted where your path is clear, it is safe, and no NO U-TURN sign is posted. Massachusetts adds a visibility rule: you may not make one at the crest of a hill, near a curve, or anywhere that you or other drivers cannot see 500 feet. Where there is not enough room to turn in one movement, a three-point turn is the alternative, and it has conditions of its own.",
        trap:
          "Swinging out from the right lane to get a wider arc puts you across two lanes of traffic in the middle of the turn.",
        excerptKey: "u-turn-lane",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, U-Turns",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_22",
        topic: "parking",
        question:
          "You are parking facing downhill against a curb. Which way should the front wheels point?",
        choices: [
          "Straight ahead, with the parking brake set",
          "Outward, toward the travel lane",
          "Inward, toward the curb",
          "It does not matter as long as the car is in gear",
        ],
        correctIndex: 2,
        explanation:
          "Downhill against a curb means wheels turned inward toward the curb, so the curb catches the front wheel if the brakes fail.",
        context:
          "Massachusetts gives three cases. Downhill against a curb, wheels inward toward the curb. Uphill against a curb, wheels outward toward the travel lane, so the car rolls back into the curb. With no curb at all, wheels inward toward the edge of the road, so a runaway heads off the pavement rather than into traffic. In every case you set the parking brake first.",
        trap:
          "Uphill and downhill point the wheels opposite ways. Learning one and assuming the other is the mirror image gets it backwards.",
        commonlyMissed: true,
        excerptKey: "parking-hills-downhill",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking on Hills",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_23",
        topic: "safety",
        question: "What is the minimum legal tread depth for tires in Massachusetts?",
        choices: ["1/32 of an inch", "4/32 of an inch", "2/32 of an inch", "6/32 of an inch"],
        correctIndex: 2,
        explanation:
          "2/32 of an inch in the proper grooves, with no fabric breaks or exposed cords. Below that the tire is both dangerous and illegal.",
        context:
          "The manual offers the penny test as a quick check: slide a penny into a tread groove, and if you can see the top of Lincoln's head, the tire is worn out. Tread is only part of it - a passenger vehicle must pass a safety and emissions inspection every year, and the manual asks you to check tire pressure and damage every time you get in.",
        trap:
          "Legal and safe are different thresholds. Wet-weather grip falls off long before you reach 2/32.",
        excerptKey: "tire-tread",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Brakes and Tires",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_24",
        topic: "emergencies",
        question:
          "You are on a four-lane highway and a police cruiser is stopped on the right shoulder with its lights flashing. What does the move-over law require?",
        choices: [
          "Maintain speed and stay in your lane so traffic flows evenly",
          "Stop completely until an officer waves you past",
          "Sound your horn as you pass to acknowledge the officer",
          "Slow to a reasonable and safe speed, and move over a lane if you can",
        ],
        correctIndex: 3,
        explanation:
          "Reducing your speed to something reasonable and safe is the core duty. Where the road has at least four lanes with two running your way, you also move over to leave an empty lane beside the stopped vehicle.",
        context:
          "The law reaches beyond police cars. Fire trucks, ambulances, disaster vehicles, highway maintenance vehicles and recovery vehicles such as tow trucks all count when their emergency lights are flashing. If moving over is not possible because of traffic, the speed reduction still applies, and you should be ready to stop. At night, dim your high beams as you pass.",
        trap:
          "Moving over is the part everyone remembers, but the speed reduction applies on every road, including two-lane ones where moving over is impossible.",
        excerptKey: "move-over-law",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Stationary Emergency and Maintenance Vehicles",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_25",
        topic: "licensing",
        question: "You fail your Class D road test. How soon can you take another one?",
        choices: [
          "The next business day",
          "After at least 14 days",
          "After at least 30 days",
          "After completing a retraining course, with no fixed wait",
        ],
        correctIndex: 1,
        explanation:
          "Fourteen days is the wait, and it applies equally if you simply failed to appear for a scheduled test.",
        context:
          "There is also a ceiling: no more than six Class D road tests in any 12-month period. The $35 road test fee is charged again whether you failed, arrived late, were rejected because the vehicle was unsuitable, turned up without a qualified sponsor, or cancelled with less than 72 hours' notice - and it has to be paid before a new test can be booked.",
        trap:
          "Not appearing is treated the same as failing. It costs you the fee and the 14 days just the same.",
        excerptKey: "road-test-retry",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, Scheduling a Road Test",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_26",
        topic: "signals",
        question:
          "A power cut has left the signals at a busy intersection completely dark. How should you treat it?",
        choices: [
          "As though there is a stop sign in every direction",
          "As an uncontrolled intersection with no rules",
          "As a green light for the larger road",
          "As a yield for everyone, with no need to stop",
        ],
        correctIndex: 0,
        explanation:
          "Blacked-out signals convert the junction into an all-way stop. You proceed only when it is safe.",
        context:
          "A signal that has failed but is still lit will usually flash red or yellow instead, and then you follow the flashing-light rules - flashing red is a stop sign, flashing yellow is a caution. Completely dark heads are the case that catches drivers out, because there is nothing on the pole telling them what to do.",
        trap:
          "Assuming the bigger road keeps priority. Every approach stops, including the one that would normally have the green.",
        excerptKey: "signals-dark",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Traffic Signals Not Working",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_27",
        topic: "sharing",
        question:
          "A trolley has stopped ahead of you and passengers are stepping down. How close may you drive to its passenger step?",
        choices: [
          "No closer than eight feet",
          "No closer than three feet",
          "No closer than 15 feet",
          "Any distance, provided you are moving slowly",
        ],
        correctIndex: 0,
        explanation:
          "Eight feet from the passenger step while the trolley is loading or unloading. It is a distinctly Massachusetts rule, and it comes straight from statute.",
        context:
          "The exceptions are narrow: a traffic officer directing you otherwise, or a location where passengers are protected by a safety zone. Trolleys also need more space than other vehicles because their path is fixed - a trolley driver cannot swerve to avoid you. Look for oncoming trolleys before crossing any tracks, and never turn in front of one that is approaching.",
        trap:
          "Trolley passengers step directly into the roadway. Passing close at low speed is still passing too close.",
        commonlyMissed: true,
        excerptKey: "trolley-eight-feet",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Buses and Trolleys",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_28",
        topic: "rules",
        question:
          "In which of these situations does Massachusetts allow you to pass another vehicle on the right?",
        choices: [
          "Whenever the left lane is occupied",
          "When the vehicle ahead is making or about to make a left turn",
          "On any road with a shoulder wide enough to use",
          "When the vehicle ahead is travelling below the speed limit",
        ],
        correctIndex: 1,
        explanation:
          "A vehicle turning left is one of the three cases. The others are a one-way street and a roadway where all traffic moves in a single direction.",
        context:
          "In every case the road must be clear and wide enough for two or more lines of vehicles. The general rule remains that you drive on the right and pass on the left. Massachusetts is explicit that you may never use a breakdown lane, the shoulder of a road or a sidewalk to pass, and that you may not exceed the speed limit while passing anyone.",
        trap:
          "A slow driver is not one of the three cases. Frustration does not create a right to undertake.",
        excerptKey: "passing-on-right",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Passing on the Right",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_29",
        topic: "speed",
        question:
          "You are cited for speeding inside a posted work zone in Massachusetts. What happens to the fine?",
        choices: [
          "It is reduced if no workers were present",
          "It is the same as anywhere else",
          "It is increased by a flat $100",
          "It is doubled",
        ],
        correctIndex: 3,
        explanation:
          "Speeding fines double inside a posted work zone. The statute frames it as twice the amount otherwise in effect.",
        context:
          "Work zones are marked with orange signs and devices, and the manual's instruction on approaching one is to slow down first and then look for guidance on getting through. A police officer or civil flagger directing traffic outranks the signs, signals and pavement markings. The hazard is people on foot, which is why the penalty is set higher than on open road.",
        trap:
          "The doubling does not depend on workers being visible. The posted zone is what triggers it.",
        excerptKey: "work-zone-double",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Work Zones",
        sourceUrl: HB,
      },
      {
        id: "ma_s2_30",
        topic: "impairment",
        question:
          "Your friend has been drinking and wants to sober up quickly before driving. What actually works?",
        choices: [
          "Strong black coffee",
          "Only time - nothing speeds up how fast alcohol leaves the body",
          "A cold shower and some food",
          "Twenty minutes of hard exercise",
        ],
        correctIndex: 1,
        explanation:
          "Only time. Coffee, cold showers, exercise and food may make somebody feel more alert, but none of them changes how fast the body processes alcohol.",
        context:
          "Alcohol is not digested like food; it is processed by the liver and kidneys, and that takes as long as it takes. Blood alcohol content depends on body weight, how much was drunk, whether there was food beforehand, how long the drinking went on and how quickly that person's body works. The type of drink is irrelevant - a 12-ounce beer, a five-ounce glass of wine and a shot of 80-proof spirit carry about the same alcohol.",
        trap:
          "Feeling alert and being sober are different states. A more alert drunk driver is still a drunk driver.",
        excerptKey: "no-sobering-up",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Blood Alcohol Content",
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
      "Questions pitched at the level the RMV actually asks: the Junior Operator restrictions, the distances and dollar figures, and the Massachusetts rules that differ from the ones drivers bring in from other states.",
    questions: [
      {
        id: "ma_s3_01",
        topic: "licensing",
        question:
          "You are 17 and hold a Massachusetts learner's permit. During which hours may you not drive, even with a qualified adult beside you who is not your parent?",
        choices: [
          "12:30 a.m. to 5:00 a.m.",
          "12:00 a.m. to 5:00 a.m.",
          "11:00 p.m. to 5:00 a.m.",
          "1:00 a.m. to 6:00 a.m.",
        ],
        correctIndex: 1,
        explanation:
          "A permit holder under 18 is barred from midnight to 5:00 a.m. unless the person supervising is a parent or legal guardian.",
        context:
          "Massachusetts runs two different curfews half an hour apart, and which one applies depends on what you are holding. On a learner's permit the window is midnight to 5:00 a.m.; on a Junior Operator Licence it is 12:30 a.m. to 5:00 a.m. Both are lifted only by a parent or legal guardian, not by any adult who happens to qualify as a supervisor the rest of the time.",
        trap:
          "12:30 a.m. is the JOL curfew, not the permit curfew. On a permit the half hour after midnight is already off limits.",
        commonlyMissed: true,
        excerptKey: "permit-curfew",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, Driving With Your Permit",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_02",
        topic: "speed",
        question: "How does Massachusetts define a thickly settled district?",
        choices: [
          "An area where buildings are fewer than 200 feet apart for a quarter mile or more",
          "Any area inside city or town boundaries",
          "An area with sidewalks on both sides of the road",
          "An area where the population exceeds 5,000 people per square mile",
        ],
        correctIndex: 0,
        explanation:
          "Buildings less than 200 feet apart, for a distance of at least a quarter of a mile. It is a measurement of the built environment, not of municipal boundaries.",
        context:
          "The definition matters because it decides which unposted speed figure applies - 30 mph inside a thickly settled or business district, 40 mph outside one. It is also why a road can shift between the two without any sign appearing: the buildings thin out and the character of the district changes. A town that has adopted the 25 mph option must sign it at every entrance.",
        trap:
          "Town lines and the thickly settled definition do not line up. Long stretches of road inside a town are not thickly settled at all.",
        excerptKey: "thickly-settled-definition",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_03",
        topic: "rules",
        question:
          "You want to cross a broken yellow line to pass on a two-way road. How far ahead must you be able to see clearly?",
        choices: ["At least 200 feet", "At least 300 feet", "At least 400 feet", "At least 500 feet"],
        correctIndex: 2,
        explanation:
          "Four hundred feet of clear visibility before you commit to the pass. That is roughly a football field and a third.",
        context:
          "The manoeuvre has a matching rule at the other end: you must be back in the right lane before any oncoming vehicle comes within 200 feet of you. Between the two, keep your speed up until you are safely past, signal right, and wait until you can see the passed vehicle's headlights in your mirror before you move back across.",
        trap:
          "The 400-foot and 200-foot figures belong to different halves of the pass. Mixing them up leaves you cutting back in far too early.",
        commonlyMissed: true,
        excerptKey: "passing-400-feet",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Passing on the Left",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_04",
        topic: "signals",
        question: "What does a flashing yellow arrow permit?",
        choices: [
          "Turning in the arrow's direction after yielding to a gap in oncoming traffic",
          "Turning in the arrow's direction with full protection",
          "Stopping and then turning, the way a red arrow works",
          "Nothing - it means the turn phase has ended",
        ],
        correctIndex: 0,
        explanation:
          "It permits the turn, but you find the gap yourself. Oncoming traffic has a green light, so the judgement is entirely yours.",
        context:
          "Three arrow states have to be held apart. A green arrow is a protected turn with the conflicting movements held at red. A flashing yellow arrow permits the turn only when you can find an adequate gap, and you must also confirm no pedestrians are in your path. A steady red arrow works like a steady red circle for traffic heading that way.",
        trap:
          "Yellow reads as caution, so drivers treat the flashing arrow as an ending phase. It is a permission, and the responsibility for the gap sits with you.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Flashing Yellow Arrow",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_05",
        topic: "sharing",
        question:
          "When may you legally pass a school bus that is stopped with red lights flashing and its stop sign out?",
        choices: [
          "When you are on the other side of a divided highway with a barrier between the travel directions",
          "When you are travelling in the opposite direction on any road",
          "When no children are visible",
          "When the bus is stopped in a lay-by rather than the travel lane",
        ],
        correctIndex: 0,
        explanation:
          "One exception, and it needs a divided highway with an actual barrier. Everything short of that requires you to stop.",
        context:
          "The rule is deliberately blunt: it does not matter which side of the road you are on. A first violation can bring both a $250 fine and a licence suspension, and the statute escalates from there - $500 to $1,000 for a second offence and $1,000 to $2,000 for a third, with revocation of the licence on a second or subsequent conviction. Separately, no driver may follow within 100 feet of a school bus.",
        trap:
          "A painted median or a grass strip is not a barrier. The exception turns on a physical divider between the directions of travel.",
        excerptKey: "school-bus-exception",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, School Buses",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_06",
        topic: "impairment",
        question:
          "A driver aged 30 with no prior offences refuses a breath test in Massachusetts. How long is the licence suspended for the refusal alone?",
        choices: ["30 days", "90 days", "One year", "180 days"],
        correctIndex: 3,
        explanation:
          "One hundred and eighty days for the refusal itself, quite apart from anything the court does about the underlying charge.",
        context:
          "The refusal ladder is steep. Over 21 with no prior offence it is 180 days; with one prior it jumps to three years, with two priors five years, and with three or more it is a lifetime revocation. Refusals themselves do not count as prior offences for that ladder - a prior means a court conviction for operating under the influence, or a court-ordered assignment to an alcohol education programme.",
        trap:
          "Refusing looks like the cautious choice. With one prior offence it costs three years, where a failed test would have cost 30 days plus whatever the court ordered.",
        commonlyMissed: true,
        excerptKey: "refusal-over-21",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, License Suspension Periods for Refusing a Chemical Test",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_07",
        topic: "safety",
        question:
          "You are running high beams on a dark road. At what point must you dim them for a vehicle you are following?",
        choices: [
          "Within 500 feet",
          "Within 300 feet",
          "Within 200 feet",
          "Only if the other driver flashes their lights at you",
        ],
        correctIndex: 2,
        explanation:
          "Two hundred feet behind a vehicle you are following, and 500 feet from one coming toward you. The two distances are different on purpose.",
        context:
          "The gap in the figures reflects the geometry: glare in a mirror reaches a driver ahead at a shorter distance than glare through a windshield reaches an oncoming one. High beams light about 350 feet of road against roughly 100 feet on low beam, which is why they belong only on genuinely dark stretches. If somebody bears down on you with their high beams up and will not dim, stay right and do not retaliate with your own.",
        trap:
          "One distance is easier to remember than two. Using 500 feet for both means riding low beams unnecessarily; using 200 for both means blinding oncoming drivers.",
        excerptKey: "high-beam-dim",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, High Beam Headlights",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_08",
        topic: "parking",
        question:
          "What is the penalty for parking in a posted bus stop in Massachusetts?",
        choices: ["$25", "$50", "$200", "$100"],
        correctIndex: 3,
        explanation:
          "One hundred dollars, and it is one of the few parking fines the manual states as a fixed state figure rather than leaving to the city or town.",
        context:
          "Most parking fines in Massachusetts are set by local ordinance and vary from place to place, which is why the manual gives so few numbers. The exceptions it does state are worth knowing: $100 for a posted bus stop, $300 for a first offence in a space reserved for disabled person or disabled veteran plates, and a minimum of $500 for wrongful use of a disabled person placard.",
        trap:
          "Assuming a bus stop is just another no-parking zone with a small local fine. The state names a figure, and it is a substantial one.",
        excerptKey: "parking-bus-stop-fine",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking Regulations",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_09",
        topic: "rightOfWay",
        question:
          "You are on a two-lane road approaching an intersection with a divided highway. Who yields?",
        choices: [
          "You do - the smaller road yields to the divided highway",
          "The highway traffic, because you are on its right",
          "Whoever arrives at the junction first",
          "Nobody - it is decided by whichever road is busier",
        ],
        correctIndex: 0,
        explanation:
          "A single or two-lane road yields to a divided highway, or to any roadway carrying three or more lanes.",
        context:
          "This is one of the right-of-way rules that operates independently of signs. It sits alongside the throughway rule, where you yield to traffic already on a designated throughway before turning onto it. Both exist for the same reason: traffic on the larger road is moving faster and has less room to react.",
        trap:
          "The left-yields-to-right rule for uncontrolled intersections does not survive here. Road class outranks position.",
        excerptKey: "narrow-road-yield",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Right-of-Way Rules",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_10",
        topic: "emergencies",
        question:
          "A fire engine is responding to an alarm ahead of you with lights and siren. How far back must you stay?",
        choices: ["At least 100 feet", "At least 300 feet", "At least 500 feet", "At least 200 feet"],
        correctIndex: 1,
        explanation:
          "Three hundred feet. Following an emergency vehicle responding to an alarm any closer than that is illegal in Massachusetts.",
        context:
          "The rule exists because drivers try to use an emergency vehicle as a way through congestion, which puts them inside the space the crew needs to stop or manoeuvre. A second distance covers the scene itself: it is illegal to drive by or park within 800 feet of a fire, and you must not drive over an unprotected fire hose unless a firefighter or public safety official directs you to.",
        trap:
          "Tucking in behind a fire engine feels efficient. It is a specific offence with a specific distance attached.",
        excerptKey: "follow-300-feet",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Moving Emergency Vehicle",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_11",
        topic: "signs",
        question:
          "Massachusetts uses a bright fluorescent yellow-green for certain signs. What do they mark?",
        choices: [
          "School zones, bicycle and pedestrian crossings, and curve warnings",
          "Incident management and emergency detours",
          "Electronic toll collection points",
          "Evacuation routes",
        ],
        correctIndex: 0,
        explanation:
          "Fluorescent yellow-green is reserved for school zone, bicycle, pedestrian and curve warnings - the situations where a person on foot or on a bike is most at risk.",
        context:
          "Massachusetts lists three colours beyond the standard set. Fluorescent yellow-green does the vulnerable-user warnings, fluorescent pink is used for incident management signs, and purple marks electronic toll collection. Blue covers motorist services and evacuation routes, and brown covers recreational, historic and scenic sites.",
        trap:
          "It looks like a different category of sign because of the colour, but it is still a warning sign - just one designed to be impossible to miss.",
        excerptKey: "sign-colours-2",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Traffic Signs",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_12",
        topic: "licensing",
        question:
          "You have held a Junior Operator Licence for two months. Which passengers may ride with you unsupervised?",
        choices: [
          "Nobody at all",
          "Anyone aged 18 or over, plus immediate family of any age",
          "Up to one passenger under 18, plus family",
          "Anyone, since the restriction only applies at night",
        ],
        correctIndex: 1,
        explanation:
          "During the first six months you may not carry anyone under 18 who is not an immediate family member, unless a qualifying adult is in the seat beside you. Passengers aged 18 and over are unaffected.",
        context:
          "The qualifying adult is the same profile as a permit supervisor: at least 21, holding a valid Massachusetts or other state licence, with at least a year of driving experience, sitting beside you. The restriction lifts after six months or on your eighteenth birthday, whichever comes first, and any suspension pauses the six-month clock rather than running it down.",
        trap:
          "It is not a blanket no-passengers rule. Adults are fine; it is the under-18 non-family passengers that are barred.",
        commonlyMissed: true,
        excerptKey: "jol-passenger-restriction",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, JOL License Restrictions",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_13",
        topic: "rules",
        question:
          "A two-way road has a marked centre lane for left turns from both directions. What may you use it for?",
        choices: [
          "Travelling, when the outer lanes are congested",
          "Passing slower vehicles",
          "Merging before a right turn",
          "Making a left turn, and nothing else",
        ],
        correctIndex: 3,
        explanation:
          "It is a turning lane shared by both directions of travel. Massachusetts states plainly that you may not travel in it.",
        context:
          "Because vehicles enter it from both sides of the road, using it as a running lane sets up a head-on conflict with somebody doing the same thing coming the other way. Where several turning lanes exist, follow the signs or the pavement arrows. White arrows painted on the surface show lane directions and restrictions.",
        trap:
          "It looks like a free lane in heavy traffic. It is the one lane where the traffic you meet will be coming straight at you.",
        excerptKey: "centre-turn-lane",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Left Turns from Center Lanes",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_14",
        topic: "speed",
        question:
          "Massachusetts adds an extra charge to a speeding fine once you are more than ten miles per hour over. What is it?",
        choices: [
          "$5 for each mph over the limit",
          "$25 for each mph over the first ten",
          "$10 for each mph above the first ten",
          "A flat $50 regardless of how far over",
        ],
        correctIndex: 2,
        explanation:
          "Ten dollars per mph, counted only on the miles above the first ten over. The base penalty is $100 plus a $5 public safety surcharge.",
        context:
          "The manual works an example: 73 mph in a 55 zone is 18 over, so the first ten costs $105 and the remaining eight cost $80, giving $185. Note that the manual also states that every speeding fine carries a $50 surcharge for the Head Injury Treatment Services Trust Fund, and that surcharge does not appear in its own worked total - so treat $185 as the fine before that addition.",
        trap:
          "The per-mph charge does not start at the first mile over. It only begins once you are past ten over the limit.",
        excerptKey: "speeding-fine-per-mph",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Speeding Violations",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_15",
        topic: "sharing",
        question:
          "What is the maximum speed at which you may operate a moped on a Massachusetts road?",
        choices: ["30 mph", "20 mph", "25 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "Twenty-five miles per hour, even though the machine itself may be built to reach 30.",
        context:
          "Massachusetts defines a moped by its construction - a top design speed of 30 mph or less, a cylinder capacity of 50cc or less, and an automatic transmission - but caps the speed you may actually ride at 25. You need a driver's licence of any class or a learner's permit, you must wear a US DOT standard helmet, and you may not carry passengers when operating on a permit. Violations carry fines of up to $100.",
        trap:
          "The design limit and the legal riding limit are different numbers. Thirty is what the machine may be capable of; 25 is what you may do.",
        excerptKey: "moped-rules",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Motorized Bicycle (Moped) Safety",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_16",
        topic: "safety",
        question:
          "You are 25 and stopped at a red light. May you pick up your phone to send a quick text?",
        choices: [
          "Yes, because the vehicle is not moving",
          "Yes, if you keep it below the level of the dashboard",
          "Yes, provided you finish before the light changes",
          "No - handheld use is not allowed at red lights or stop signs",
        ],
        correctIndex: 3,
        explanation:
          "Massachusetts says specifically that handheld use is not permitted at red lights or stop signs. Stationary only counts when you are out of the public travel lane.",
        context:
          "Drivers 18 and over may use a device only in hands-free mode, mounted to the windshield, dashboard or centre console, and they may touch it only to activate that mode. Writing, sending or reading any electronic message while driving is out. Fines run $100, then $250 with a mandatory distracted driving programme, then $500 with an insurance surcharge on a third offence.",
        trap:
          "Being stopped is not the test. Being out of a public travel lane is, and a queue at a red light is squarely in one.",
        commonlyMissed: true,
        excerptKey: "hands-free-stationary",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Distracted Driving Law",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_17",
        topic: "signals",
        question:
          "You are already stopped at the stop line when the signal turns from green to steady yellow. What does Massachusetts allow?",
        choices: [
          "Move off immediately, since you were there first",
          "Move off if no cross traffic is visible",
          "Stay where you are - you may not proceed",
          "Move off only if you can clear the intersection before red",
        ],
        correctIndex: 2,
        explanation:
          "The manual states it directly: if you are already stopped at an intersection or a stop line, a yellow does not let you proceed.",
        context:
          "A steady yellow means the signal is changing to red, and the general rule is to stop if it is safe. The already-stopped case is a separate sentence in the manual because it is where drivers make the error - they see a stale green go yellow, decide the phase belongs to them, and edge into the junction just as the cross traffic gets its green.",
        trap:
          "Having been stopped for a while does not create a claim on the phase. The yellow is the end of the phase, not the last of it.",
        commonlyMissed: true,
        excerptKey: "steady-yellow",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Steady Yellow Circle",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_18",
        topic: "impairment",
        question:
          "A 19-year-old is caught trying to buy alcohol. What happens to their driving licence in Massachusetts?",
        choices: [
          "Nothing, because no vehicle was involved",
          "A 30-day suspension",
          "A 90-day suspension",
          "A 180-day suspension",
        ],
        correctIndex: 3,
        explanation:
          "One hundred and eighty days, and the attempt is enough - the manual covers buying or trying to buy.",
        context:
          "Under 21 it is illegal to buy alcohol, to have someone buy it for you, or to possess, carry or transport it unless a parent or guardian is with you. Possessing or transporting brings a suspension of 90 days to a year. Massachusetts is one of the states that will suspend a licence for offences with no driving element at all, and false or altered ID carries its own six-month administrative suspension without a conviction.",
        trap:
          "Assuming a licence can only be suspended for something done behind the wheel. Several Massachusetts suspensions have nothing to do with driving.",
        excerptKey: "under-21-buying",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Buying, Possessing, or Transporting Alcohol",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_19",
        topic: "parking",
        question:
          "How much clear roadway must you leave for passing traffic when you park or stop your vehicle?",
        choices: ["At least eight feet", "At least 12 feet", "At least ten feet", "At least 15 feet"],
        correctIndex: 1,
        explanation:
          "Twelve feet of clear roadway, which is roughly a full travel lane.",
        context:
          "The requirement runs alongside the general rule that you must not create a traffic hazard while parked or stopped, and the separate rule that in a business or residential district your vehicle sits no more than 12 inches from the curb. The two twelves are easy to confuse - one is feet of roadway left open, the other is inches of gap to the curb.",
        trap:
          "Twelve feet and 12 inches both appear in the parking rules. One is what you leave for traffic, the other is how close you sit to the curb.",
        excerptKey: "parking-12-feet",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Parking",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_20",
        topic: "rightOfWay",
        question:
          "You are stopped at a red light that turns green, but a pedestrian is still in the crosswalk ahead of you. What must you do?",
        choices: [
          "Yield to the pedestrian already in the crosswalk",
          "Proceed, because your signal now has priority",
          "Sound your horn to move them along",
          "Edge forward until they clear your lane",
        ],
        correctIndex: 0,
        explanation:
          "A green light does not displace a pedestrian who is already crossing. You wait.",
        context:
          "The manual sets out several pedestrian duties for drivers: yield to anyone entering or using a crosswalk in your path, never block a crosswalk, yield when turning into a driveway or parking lot, and never pass a vehicle stopped or slowing for a pedestrian. On a multi-lane road it warns you never to pass a stopped vehicle at a crosswalk without checking for someone crossing in front of it.",
        trap:
          "The countdown timer reaching zero does not clear the crosswalk. Massachusetts gives the right of way to anyone already in it.",
        excerptKey: "green-light-pedestrians",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_21",
        topic: "emergencies",
        question:
          "You have had a minor collision on a busy road. Nobody is hurt and both cars still drive. What does the Driver Removal Law require?",
        choices: [
          "Leave the vehicles exactly where they stopped until police arrive",
          "Photograph the scene before moving anything",
          "Move the vehicles out of the travel lanes to a safe location",
          "Move only if a police officer instructs you to",
        ],
        correctIndex: 2,
        explanation:
          "Where there are no injuries, the vehicles must come out of the travel lanes to somewhere safe.",
        context:
          "The exchange of details happens after that: name, address, driver's licence number, vehicle registration and insurance details with every driver or property owner involved, and you must show your licence and registration if asked. If the crash caused injury, death, or $1,000 or more of damage, the written report follows within five days.",
        trap:
          "Preserving the scene is a habit borrowed from television. Massachusetts wants the road cleared when nobody is injured.",
        excerptKey: "driver-removal-law",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, If You Are Involved in a Crash",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_22",
        topic: "rules",
        question:
          "You are overtaking on a two-way road. How close may an oncoming vehicle get before you must be back in your own lane?",
        choices: ["100 feet", "200 feet", "400 feet", "500 feet"],
        correctIndex: 1,
        explanation:
          "You must be back in the right lane before any oncoming vehicle comes within 200 feet of you.",
        context:
          "That figure sets the far end of the pass; the 400 feet of clear visibility you need before starting sets the near end. Between them, hold your speed until you are safely past, and use the passed vehicle's headlights appearing in your mirror as the signal that you have enough room to move back across.",
        trap:
          "Two hundred feet closes fast when both cars are moving. It is not a comfortable margin - it is the legal minimum.",
        commonlyMissed: true,
        excerptKey: "passing-return-200",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Passing on the Left",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_23",
        topic: "signs",
        question: "How are numbered Massachusetts state highway routes posted?",
        choices: [
          "On a blue, red and white shield",
          "On a white rectangular sign with black letters and borders",
          "On a green rectangular sign with white letters",
          "On a brown shield with white numerals",
        ],
        correctIndex: 1,
        explanation:
          "State routes use a white rectangle with black lettering. The blue, red and white shield is reserved for interstate highways.",
        context:
          "Guide signs split by colour and purpose. Green signs give highway directions and take you through interchanges. Blue signs list motorist services such as fuel, food and lodging. Brown signs point to parks, points of interest and scenic sites. Route markers sit alongside distance and destination signs in the same guide category.",
        trap:
          "Route numbers alone do not tell you which is which. Massachusetts Route 128 and an interstate route are marked in completely different shapes.",
        excerptKey: "state-route-marker",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Guide Signs",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_24",
        topic: "licensing",
        question:
          "An adult driver is found responsible for three speeding violations inside 12 months. What happens?",
        choices: [
          "A written warning from the RMV",
          "A mandatory retraining course with no suspension",
          "A 60-day suspension",
          "An automatic 30-day suspension",
        ],
        correctIndex: 3,
        explanation:
          "Three speeding violations in any 12-month period brings an automatic 30-day suspension, with a $100 reinstatement fee.",
        context:
          "The 12-month clock starts when you pay or are found responsible for the first citation. Two other counting rules sit beside it: three surchargeable events in two years triggers a Driver Retraining Course, which you must complete within 90 days or lose the licence until you do, and seven surchargeable events in three years brings an automatic 60-day suspension.",
        trap:
          "For a Junior Operator the numbers are completely different. A single speeding offence costs a JOL holder 90 days, a new permit exam and a new road test.",
        excerptKey: "three-speeding",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Surchargeable Events",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_25",
        topic: "safety",
        question:
          "You are 22 and want to wear an earbud while driving to take calls. What does Massachusetts permit?",
        choices: [
          "Both ears, provided the volume is low",
          "One earplug, because you are 18 or older",
          "Neither ear - headsets of any kind are banned for all drivers",
          "Both ears, provided you can still hear a siren",
        ],
        correctIndex: 1,
        explanation:
          "A single earplug is allowed for phone use if you are 18 or older. A radio headset or anything covering both ears is illegal.",
        context:
          "The ban covers any wired or wireless device that restricts your attention to the environment around you. The reason is siren audibility, which is also why the manual asks you to keep noise levels down inside the vehicle generally. It sits alongside the rules against a television visible to the driver and against anything hanging from the mirror or lying on the dashboard that blocks your view.",
        trap:
          "The concession is one earplug for phone use, not a general permission for headphones at a sensible volume.",
        excerptKey: "headphones-illegal",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 2, Headphones",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_26",
        topic: "sharing",
        question:
          "Under Massachusetts law, which bicyclists must wear an approved helmet?",
        choices: [
          "Operators and passengers under 16",
          "Operators under 18 only",
          "Everyone riding on a public way",
          "Only riders on a bicycle path",
        ],
        correctIndex: 0,
        explanation:
          "Under 16, and it covers passengers as well as the person pedalling. The helmet must be approved by the U.S. Consumer Product Safety Commission and secured to the head.",
        context:
          "The exception is a passenger secured inside an enclosed trailer that protects their head. Other bicycle equipment rules run alongside it: a brake system able to stop the bike from 15 mph within 30 feet, a white front lamp visible at 500 feet and a rear red light or reflector visible at 600 feet from half an hour after sunset to half an hour before sunrise.",
        trap:
          "The age is 16, not 18, and it catches the passenger on the back as well as the rider.",
        excerptKey: "bicycle-helmet",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Laws for Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_27",
        topic: "speed",
        question: "What is the minimum speed on the Massachusetts Turnpike?",
        choices: ["20 mph", "30 mph", "40 mph", "There is no minimum speed"],
        correctIndex: 2,
        explanation:
          "Forty miles per hour on the Turnpike. The Boston Harbor tunnels carry a separate minimum of 20 mph.",
        context:
          "Most Massachusetts roads have no minimum, but the manual names these two. Even where no minimum is set, a police officer may order a driver off the side of a state highway if they are holding up traffic. The manual also warns against driving below the minimum in the second lane of a multi-lane highway, where trucks and buses need to pass.",
        trap:
          "Minimum speeds are rare enough that drivers assume they do not exist. The Turnpike and the harbour tunnels both have one.",
        commonlyMissed: true,
        excerptKey: "minimum-speeds",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_28",
        topic: "rules",
        question: "Another driver begins to overtake you on a two-lane road. What should you do?",
        choices: [
          "Maintain your speed and hold your position",
          "Move onto the shoulder to give them room",
          "Slow down and stay to the right so they can pass safely",
          "Speed up briefly so the pass takes less time",
        ],
        correctIndex: 2,
        explanation:
          "Slow down, stay right, and let the pass finish. Speeding up while being overtaken strands the other driver in the oncoming lane.",
        context:
          "The statute puts it as a duty on the overtaken driver not to unnecessarily obstruct the vehicle passing, and not to increase speed until it has completely passed. On multi-lane roads the same courtesy applies to large vehicles: if a truck or bus wants to get by, move over when it is safe rather than making it work around you.",
        trap:
          "Speeding up feels competitive rather than dangerous. It leaves the passing driver exposed to oncoming traffic with nowhere to go.",
        excerptKey: "being-passed",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Being Passed",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_29",
        topic: "impairment",
        question:
          "Massachusetts has decriminalised certain aspects of marijuana possession. What does that mean for driving?",
        choices: [
          "Driving under the influence of marijuana is still a criminal offence",
          "It is treated as a civil infraction with a fine",
          "It only matters if you are under 21",
          "It is judged against a measured blood level, like alcohol",
        ],
        correctIndex: 0,
        explanation:
          "Decriminalisation changed possession, not driving. Operating under the influence of marijuana remains a criminal offence, and the same penalty chart as alcohol applies.",
        context:
          "The manual describes the specific impairments: slower response to sights and sounds, reduced ability to handle a fast sequence of tasks, and a serious loss of night vision. It also notes that alcohol alone makes a crash roughly five times more likely, while alcohol combined with marijuana makes it twelve times more likely. Prescription and over-the-counter medicines can put you in the same position.",
        trap:
          "Legal to possess is not legal to drive on. The OUI penalties are identical to the alcohol ones.",
        excerptKey: "marijuana-still-illegal",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 3, Marijuana",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_30",
        topic: "signals",
        question:
          "You approach a Pedestrian Hybrid Beacon showing two solid red lights. What must you do?",
        choices: [
          "Slow down and continue if clear",
          "Proceed with caution",
          "Prepare to stop but keep moving",
          "Stop for pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "Two solid reds mean stop. The beacon runs through a sequence, and this is the phase where pedestrians are crossing.",
        context:
          "The full sequence is worth learning because each phase asks something different. All lights dark, proceed with caution. Bottom yellow flashing, slow down. Bottom yellow solid, prepare to stop. Top two reds solid, stop. Top two reds flashing, stop and then proceed with caution if the crossing is clear. A Rectangular Rapid Flashing Beacon is simpler - when its amber lights flash, you stop for pedestrians.",
        trap:
          "The flashing-red phase and the solid-red phase mean different things. Flashing lets you go once clear; solid does not.",
        excerptKey: "pedestrian-hybrid-beacon",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Pedestrian Hybrid Beacon",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_31",
        topic: "rightOfWay",
        question:
          "A funeral procession is crossing an intersection ahead of you against a red light. What is your position?",
        choices: [
          "Proceed on your green, since the procession is running a red",
          "Sound your horn and continue slowly",
          "Wait - you may not cross the procession's path even on a green",
          "Join the end of the procession to clear the junction",
        ],
        correctIndex: 2,
        explanation:
          "Funeral processions hold the right of way at intersections. You may not cross while one is passing through a red unless you can do so without crossing its path.",
        context:
          "Once the lead vehicle has lawfully entered the intersection, the rest of the procession may follow through regardless of the signal. Vehicles in the procession run headlights and taillights, with hazard lights on the first and last car. You may not drive between procession vehicles, may not join the procession, and may not pass it on its right on a multi-lane highway unless it is in the far left lane.",
        commonlyMissed: true,
        trap:
          "A green light normally settles it. This is one of the few Massachusetts rules where a green does not give you the intersection.",
        excerptKey: "funeral-right-of-way",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Funeral Processions",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_32",
        topic: "parking",
        question:
          "What does Massachusetts say about driving over or parking on a channelizing island?",
        choices: [
          "It is permitted if the island is unpaved",
          "It is prohibited unless a police officer directs you to",
          "It is permitted for emergencies only",
          "It is permitted when turning right",
        ],
        correctIndex: 1,
        explanation:
          "You may not drive over or park on a channelizing island at all, unless a police officer directs you to do it.",
        context:
          "A channelizing island is a traffic island or a painted area that guides traffic along particular paths and keeps it off parts of the roadway. The general parking list bars you from a sidewalk, curb, centre traffic island or median for the same reason. Painted crosshatch areas beside disabled parking spaces are also off limits, even with a disability placard.",
        trap:
          "A painted island looks like usable pavement rather than a structure. The prohibition covers both painted and raised versions.",
        excerptKey: "channelizing-island",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Channelizing Islands",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_33",
        topic: "emergencies",
        question:
          "Your car stalls on railroad tracks and you can see a train coming. Which way should everyone run?",
        choices: [
          "Straight away from the tracks at a right angle",
          "Along the tracks in the direction the train is travelling",
          "Behind the vehicle, using it as a shield",
          "At about 45 degrees away from the tracks, toward the oncoming train",
        ],
        correctIndex: 3,
        explanation:
          "You run at roughly 45 degrees away from the tracks and toward the train, so the wreckage is thrown behind you rather than into your path.",
        context:
          "Get everyone out first and move as far from the tracks as you can, then call 911. Where no train is coming, roll down a window and listen, try to restart, and if that fails shift to neutral and push the vehicle clear. If you cannot move it, ring the Emergency Notification System number posted in the middle of the crossbuck or on the metal box near the crossing and give the dispatcher the DOT grade crossing locator number.",
        trap:
          "Running away from the train is the instinct, and it puts you directly in the path of a car pushed down the line by the impact.",
        excerptKey: "stalled-on-tracks",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 5, Stalling on Railroad Tracks",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_34",
        topic: "signs",
        question:
          "According to the Massachusetts manual, what is the first thing you must do on approaching a work zone?",
        choices: [
          "Change lanes away from the work area",
          "Slow down and look for guidance on how to get through",
          "Switch on your hazard lights",
          "Close the gap to the vehicle in front to keep traffic moving",
        ],
        correctIndex: 1,
        explanation:
          "Slow down first, then look for the signs and devices telling you how to travel through the area safely.",
        context:
          "Work zones open with a warning sign or an electronic message board stating how far ahead the work begins. Drums, cones and tubular markers set at an angle shift traffic out of a closed lane, arrow boards on multi-lane roads show which lane is open, and detour signs cover full closures. A civil flagger or police officer directing traffic overrides all of it.",
        trap:
          "Changing lanes early is good practice but not the first instruction. Speed comes down before anything else, because people are on foot.",
        excerptKey: "work-zone-first-thing",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 4, Roadway Construction/Maintenance",
        sourceUrl: HB,
      },
      {
        id: "ma_s3_35",
        topic: "licensing",
        question:
          "Someone is caught using their phone to look up an answer during the learner's permit exam. What is the consequence?",
        choices: [
          "They cannot hold any licence or permit for 60 days",
          "They fail and may retake the exam the next day",
          "They are barred from testing for two weeks",
          "They lose the $30 fee but face no other penalty",
        ],
        correctIndex: 0,
        explanation:
          "Cheating means an automatic fail and a 60-day bar on holding any type of driver's licence or permit, plus possible further investigation.",
        context:
          "Cheating includes having someone else sit the exam for you and using the manual or any reference material during it. Manuals, reference materials and electronic devices of any kind are barred from the testing area, and headphones are only allowed for an audio exam. The online version adds its own automatic failures: two minutes of inactivity, running past the 25-minute limit, or leaving the browser.",
        trap:
          "It is not simply a failed attempt. The 60-day bar applies to permits and licences alike, so the whole timeline slides.",
        excerptKey: "exam-cheating",
        sourceLabel: "Massachusetts Driver's Manual - Chapter 1, Learner's Permit Exam Procedures",
        sourceUrl: HB,
      },
    ],
  },
];
