import type { DrivingTestSet } from "../types";

// Every fact below was checked against three official sources.
//
// 1. The Maine Driver's License Manual, published by the Bureau of Motor
//    Vehicles in the Department of the Secretary of State, labelled "Rev 4/24"
//    in the header of every page and served as "Maine Driver License Manual_2"
//    from maine.gov/sos. The BMV's page for it is headed "Driver License
//    Manual and Maine Motorist Handbook and Study Guide", and the file the
//    site used to serve was called motoristhandbook.pdf, so the same book
//    travels under three names. The cover says Maine Driver's License Manual.
// 2. Title 29-A of the Maine Revised Statutes, on the Legislature's own
//    server, for the numbers the manual leaves out. There are more of these
//    than usual: Maine's manual is a driving book rather than a law digest,
//    and it never gives the 100-foot signal distance, the 15-to-50-foot
//    railroad stop, the Move Over fine, or the hand signals.
// 3. The BMV's own web pages, which are the only place the written test's
//    format is published at all - 30 questions, 24 correct to pass. The
//    manual does not state it anywhere.
//
// Maine's page numbering runs by section (1-1, 6-4, 11-9), so the helper
// below turns a printed page into the PDF page that shows it. Section 1 opens
// on PDF page 6 and the book runs straight through from there.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// Bureau's own authoritative wording.
const HB =
  "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf";
const SECTION_FIRST_PDF_PAGE: Record<number, number> = {
  1: 6,
  2: 17,
  3: 23,
  4: 39,
  5: 44,
  6: 48,
  7: 61,
  8: 75,
  9: 94,
  10: 101,
  11: 112,
  12: 121,
};
/** `hb("6-3")` -> the manual's PDF page that carries printed page 6-3. */
const hb = (printed: string) => {
  const [section, page] = printed.split("-").map(Number);
  return `${HB}#page=${SECTION_FIRST_PDF_PAGE[section] + page - 1}`;
};
const law = (section: string) =>
  `https://legislature.maine.gov/statutes/29-A/title29-Asec${section}.html`;
const BMV_EXAM =
  "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/drivers-license-exam";
const BMV_GDL =
  "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/graduated-drivers-license";
const BMV_AGES =
  "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/license-age-restrictions";
const BMV_OBTAIN =
  "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/how-to-obtain-a-license";
const BMV_FEES =
  "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/drivers-license-and-examination-fees";
const BMV_SUSP =
  "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/license-suspended/intermediate-provisional-license-suspensions";

export const maineSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Maine Basics",
    difficulty: "starter",
    description:
      "The rules you meet in your first hour behind the wheel in Maine: what the shapes and colors mean, who goes first, and the handful of numbers the Bureau of Motor Vehicles expects you to know cold before it hands you a learner's permit.",
    questions: [
      {
        id: "me_s1_01",
        topic: "signs",
        question: "How many sides does a stop sign have, and what colors is it?",
        choices: [
          "Eight sides, red with white letters",
          "Four sides, white with red letters",
          "Six sides, yellow with black letters",
          "Three sides, red with white letters",
        ],
        correctIndex: 0,
        explanation:
          "The octagon is reserved for STOP and nothing else on American roads, and Maine prints it red with white letters. You stop behind the stop line or crosswalk if one is marked.",
        context:
          "The manual teaches signs by shape and color first, because the shape stays readable in glare, snow or a language you cannot read. Eight sides means stop, a downward-pointing triangle means yield, a yellow diamond warns of something ahead, and a white rectangle carries a law you must obey.",
        trap: "The three-sided answer describes a yield sign, which is also red and white. Shape is what separates them, not color.",
        excerptKey: "stop-sign-shape",
        sourceLabel: "Maine Driver's License Manual - Section 6, Stop Sign",
        sourceUrl: hb("6-6"),
      },
      {
        id: "me_s1_02",
        topic: "signals",
        question: "A steady red traffic light faces you. What does the manual say you must do?",
        choices: [
          "Slow down and proceed with caution",
          "Stop before entering the intersection and wait behind the stop line or crosswalk until the light turns green",
          "Stop, then go as soon as the intersection is clear",
          "Stop only if a vehicle or pedestrian is crossing",
        ],
        correctIndex: 1,
        explanation:
          "A steady red means stop and stay stopped. Maine is specific about where: behind any stop line or crosswalk, and you wait there until the light turns green.",
        context:
          "Maine separates steady red from flashing red deliberately. A steady red holds you until the signal changes. A flashing red is a stop sign made of light - you stop completely, look both ways, then go when it is safe. Only one of the two ever turns green.",
        trap: "\"Stop, then go when clear\" is the flashing-red rule. Applying it to a steady red is running the light.",
        excerptKey: "red-light-and-right-on-red",
        sourceLabel: "Maine Driver's License Manual - Section 6, Traffic Signals",
        sourceUrl: hb("6-3"),
      },
      {
        id: "me_s1_03",
        topic: "rightOfWay",
        question:
          "You arrive at a four-way stop a moment before the car on your left. Who goes first?",
        choices: [
          "The car on your left, because vehicles on the left always yield",
          "Whoever is going straight rather than turning",
          "You do, because you reached the intersection first",
          "Both of you together, since neither road is a through street",
        ],
        correctIndex: 2,
        explanation:
          "At a four-way stop Maine decides by order of arrival. The driver who gets there first goes first, and position only breaks a tie.",
        context:
          "Two rules sit side by side in the manual and people mix them up. At a four-way stop it is order of arrival, and the vehicle on the right goes first only when two drivers arrive at the same time beside each other. At an uncontrolled intersection - no stop sign, no yield sign, no signal - you yield to the vehicle on your right regardless of who got there first.",
        trap: "The vehicle-on-the-right rule is real, but at a four-way stop it is the tiebreaker, not the main rule.",
        excerptKey: "four-way-stop-first",
        sourceLabel: "Maine Driver's License Manual - Section 6, Yielding Right-Of-Way",
        sourceUrl: hb("6-1"),
      },
      {
        id: "me_s1_04",
        topic: "speed",
        question:
          "There is no speed limit sign anywhere on a residential street in a Maine town. What is the maximum lawful speed?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 1,
        explanation:
          "Maine sets 25 mph as the maximum in a business district, a residential district or a built-up portion when nothing is posted. It is a ceiling, not a target - conditions can make 25 too fast.",
        context:
          "Maine publishes only three unposted maximums, and they are short enough to memorize: 15 mph in a school zone during the hours that matter, 25 mph in a business or residential district or built-up area, and 45 mph on every other public way.",
        trap: "30 mph is the residential default in several neighboring states. Maine prints 25.",
        excerptKey: "maine-speed-maximums",
        sourceLabel: "Maine Driver's License Manual - Section 8, Speed Limits",
        sourceUrl: hb("8-7"),
      },
      {
        id: "me_s1_05",
        topic: "licensing",
        question: "How old must you be to apply for a learner's permit in Maine?",
        choices: ["14", "15", "16", "17"],
        correctIndex: 1,
        explanation:
          "Fifteen. You pass the written knowledge exam and a vision screening, and if you are under 18 you must have finished an approved driver education course first.",
        context:
          "Maine runs the permit and the license as separate steps. The permit comes at 15. A license is possible at 16 once you have held the permit six months, logged 70 hours of practice including 10 at night, completed driver education and passed the road test.",
        trap: "Sixteen is the earliest age for the license, not for the permit.",
        excerptKey: "permit-age-15",
        sourceLabel: "Maine Driver's License Manual - Section 1, How Do You Obtain A Permit in Maine?",
        sourceUrl: hb("1-2"),
      },
      {
        id: "me_s1_06",
        topic: "safety",
        question:
          "What following distance does the Maine manual teach for ordinary conditions?",
        choices: [
          "Two seconds",
          "Three seconds",
          "One car length for every 10 mph",
          "Four seconds",
        ],
        correctIndex: 3,
        explanation:
          "Four seconds is Maine's baseline, which is longer than most states teach. You count from the moment the vehicle ahead passes a fixed object until you reach the same object.",
        context:
          "The manual gives you the counting words: one-thousand-one through one-thousand-four. If you reach the object before you finish, you are too close. In bad conditions you add more on top, and it names the situations: slick roads, following a motorcycle or bicycle, following a large vehicle, at night, in fog, and when your own load is heavy.",
        trap: "Two seconds is the rule taught in a lot of other states and in older driving books. Maine's number is four.",
        excerptKey: "four-second-following",
        sourceLabel: "Maine Driver's License Manual - Section 8, Space in Front",
        sourceUrl: hb("8-11"),
      },
      {
        id: "me_s1_07",
        topic: "signals",
        question: "A traffic signal ahead is flashing red. What does it mean?",
        choices: [
          "Slow down and proceed with caution",
          "The signal has failed, so treat the intersection as uncontrolled",
          "Stop and look both ways before entering the intersection",
          "Stop and wait for the light to turn green",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red is a stop sign made of light. Maine tells you to stop and look both ways before you enter, then go when the way is clear.",
        context:
          "Maine pairs the two flashing colors so you learn them together. Flashing red means stop, then proceed when safe. Flashing yellow means slow down and proceed with caution, prepared to stop for anything entering the intersection. The difference is whether you must stop at all.",
        trap: "Waiting for green at a flashing red leaves you sitting there. The signal is doing exactly what it was set to do.",
        excerptKey: "flashing-red-light",
        sourceLabel: "Maine Driver's License Manual - Section 6, Traffic Signals",
        sourceUrl: hb("6-3"),
      },
      {
        id: "me_s1_08",
        topic: "sharing",
        question:
          "A school bus ahead of you stops on a two-lane road and switches on its flashing red lights. What must you do?",
        choices: [
          "Slow to 15 mph and pass carefully",
          "Stop only if you can see children in the road",
          "Stop, and stay stopped until the bus starts moving again or the driver waves you on",
          "Stop, count to three, then pass on the left",
        ],
        correctIndex: 2,
        explanation:
          "You stop before you reach the bus and stay there. Maine releases you only when the bus resumes motion or the bus driver signals you to go.",
        context:
          "The rule applies from either direction on an undivided road, in a parking area, and on school property. The only escape is a road separated by curbing or another physical barrier, or a limited-access highway where pedestrians cannot cross. Passing a stopped school bus with its red lights flashing is a Class E crime in Maine, with a $250 minimum fine.",
        trap: "There is no creep-past rule and no speed you may pass at. You stop, and the bus driver decides when you go.",
        excerptKey: "school-bus-either-direction",
        sourceLabel: "Maine Driver's License Manual - Section 7, Rules for School Buses",
        sourceUrl: hb("7-8"),
      },
      {
        id: "me_s1_09",
        topic: "signs",
        question: "What does a yellow diamond-shaped sign tell you?",
        choices: [
          "A law you must obey",
          "A service or point of interest is nearby",
          "Road work is in progress",
          "There is danger ahead",
        ],
        correctIndex: 3,
        explanation:
          "Yellow diamonds are warning signs. They tell you something ahead needs attention - a curve, a crossing, a merge, an animal crossing - and give you time to slow down before you meet it.",
        context:
          "Maine's four sign families are worth learning as a set. Yellow diamond warns. Orange diamond or rectangle means a work zone. White rectangle with black, red or green lettering is regulatory and carries the force of law. Green, brown or blue signs are guide signs pointing you somewhere.",
        trap: "Orange is also used on diamond-shaped signs, but only for work zones. Color, not shape, is what separates the two.",
        excerptKey: "warning-signs-diamond",
        sourceLabel: "Maine Driver's License Manual - Section 6, Traffic Signs",
        sourceUrl: hb("6-4"),
      },
      {
        id: "me_s1_10",
        topic: "impairment",
        question:
          "At what alcohol level is a driver aged 21 or over guilty of operating under the influence in Maine?",
        choices: [
          "0.05 grams per 100 milliliters of blood",
          "0.10 grams per 100 milliliters of blood",
          "0.08 grams per 100 milliliters of blood",
          "Any measurable amount",
        ],
        correctIndex: 2,
        explanation:
          "Maine sets the criminal threshold at 0.08 grams of alcohol per 100 milliliters of blood or 210 liters of breath. Reaching it is the offense; the officer does not have to show that your driving was bad.",
        context:
          "The number is not a safe-driving line. The manual says vision is measurably impaired at 0.02 for every driver, and an officer's testimony about your driving can support an OUI conviction with no test result at all. For anyone under 21 the lawful level is zero.",
        trap: "0.10 was the national standard decades ago and still turns up in old study material. Maine's figure is 0.08.",
        excerptKey: "oui-008-criminal",
        sourceLabel: "Maine Driver's License Manual - Section 3, Immediate Suspension by Secretary of State",
        sourceUrl: hb("3-9"),
      },
      {
        id: "me_s1_11",
        topic: "parking",
        question:
          "You are parking parallel to a curb on a Maine street. How close to the curb must the car end up?",
        choices: [
          "No more than 6 inches away",
          "No more than 12 inches away",
          "No more than 18 inches away",
          "Close enough that a passenger can step onto the sidewalk",
        ],
        correctIndex: 2,
        explanation:
          "Maine's limit is 18 inches. The manual adds that about 6 inches is what a finished parallel park should look like, and 18 inches is the outer edge of acceptable.",
        context:
          "The rest of the parking routine matters as much: park parallel to the road unless angle lines are painted, leave at least two feet between your car and the vehicles ahead and behind, set the parking brake, shift to park, and get out on the curb side if you can.",
        trap: "Six inches is the target the manual gives for a good park, not the legal maximum. The number that fails you is 18.",
        excerptKey: "parallel-park-6-to-18",
        sourceLabel: "Maine Driver's License Manual - Section 7, Parallel Parking/Offset Backing",
        sourceUrl: hb("7-12"),
      },
      {
        id: "me_s1_12",
        topic: "rules",
        question: "When does Maine law require your headlights to be on?",
        choices: [
          "Only between sunset and sunrise",
          "Only when you cannot see 500 feet ahead",
          "From sunset to sunrise, whenever you cannot see 1,000 feet ahead, and any time the wipers are in constant use",
          "Whenever it is raining hard enough to need wipers, and at night on unlit roads",
        ],
        correctIndex: 2,
        explanation:
          "Maine gives three separate triggers and any one of them is enough: the hours from sunset to sunrise, poor visibility under 1,000 feet, and wipers running constantly.",
        context:
          "The wiper trigger is the one people forget. A gray afternoon drizzle with the wipers going means headlights on, whatever the clock says. The manual also warns against driving on parking lights alone, and motorcyclists must run their headlight at all times.",
        trap: "Sunset to sunrise on its own is only one third of the rule, and it is the third that never catches anyone out.",
        excerptKey: "headlights-1000-feet-hb",
        sourceLabel: "Maine Driver's License Manual - Section 8, Use headlights",
        sourceUrl: hb("8-16"),
      },
      {
        id: "me_s1_13",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with its lights flashing and siren sounding. What does Maine require?",
        choices: [
          "Speed up to get out of its way",
          "Stop where you are, even if you are in the middle of an intersection",
          "Move to the left lane and keep going at the same speed",
          "Pull to the right side of the road, clear of any intersection, and stop until it has passed",
        ],
        correctIndex: 3,
        explanation:
          "You drive as near as practicable to the right-hand curb, clear of any intersection, and come to a standstill until the emergency vehicle has gone by.",
        context:
          "This is one of the few rules of the road Maine makes a crime rather than a traffic infraction. Failing to yield to an emergency vehicle using lights and siren is a Class E crime carrying a minimum $250 fine, and a second offense within three years brings a mandatory 30-day license suspension.",
        trap: "Stopping inside the intersection blocks the very route the ambulance needs. Clear the intersection first, then pull right and stop.",
        excerptKey: "emergency-vehicle-class-e",
        sourceLabel: "Maine Driver's License Manual - Section 6, Yielding Right-Of-Way",
        sourceUrl: hb("6-2"),
      },
      {
        id: "me_s1_14",
        topic: "licensing",
        question: "How many questions are on the Maine knowledge test, and how many must you get right?",
        choices: [
          "30 questions, 24 correct",
          "25 questions, 20 correct",
          "40 questions, 32 correct",
          "20 questions, 16 correct",
        ],
        correctIndex: 0,
        explanation:
          "Thirty questions, and you need at least 24 right. That is 80 percent, so six wrong answers still passes and the seventh is what fails you.",
        context:
          "The manual itself never states the format anywhere. The only official source for it is the BMV's Drivers License Exam page, which also lists the subject areas: rules of the road, the meaning of various signs, pedestrian and bicycle safety, Maine's operating under the influence laws, and distracted driving.",
        trap: "25 and 20 is the format in several nearby states and gets repeated about Maine constantly. The BMV publishes 30 and 24.",
        excerptKey: "test-30-questions-24-to-pass",
        sourceLabel: "Maine BMV - Drivers License Exam, Written Test Information",
        sourceUrl: BMV_EXAM,
      },
      {
        id: "me_s1_15",
        topic: "signs",
        question: "What shape and color is a yield sign in Maine?",
        choices: [
          "A red octagon with white letters",
          "A yellow diamond with black letters",
          "A downward-pointing red and white triangle",
          "A white rectangle with red letters",
        ],
        correctIndex: 2,
        explanation:
          "A yield sign is a triangle pointing down, red and white with red lettering. It tells you to slow and let traffic or pedestrians on the road you are entering go first.",
        context:
          "Yield is not stop. You slow enough to give way, and you stop only if stopping is what it takes. Maine makes running one serious: driving past a yield sign and colliding with a vehicle, cyclist or pedestrian on the intersecting way is a Class E crime.",
        trap: "The manual notes that some old yield signs are still yellow with black letters. The downward triangle is the part that never changes.",
        excerptKey: "yield-sign",
        sourceLabel: "Maine Driver's License Manual - Section 6, Yield Sign",
        sourceUrl: hb("6-6"),
      },
      {
        id: "me_s1_16",
        topic: "speed",
        question:
          "You are on a rural Maine road outside any town, with no speed limit signs. What is the maximum lawful speed?",
        choices: ["40 mph", "45 mph", "50 mph", "55 mph"],
        correctIndex: 1,
        explanation:
          "Forty-five miles per hour is Maine's default on all other public ways when nothing is posted. It catches people out because most states use 55.",
        context:
          "The unposted maximum is a ceiling that applies only when there is no sign. Where the Department of Transportation has set and posted a higher limit, that posted number governs, and on the interstate system the commissioner may post up to 75.",
        trap: "55 is the unposted rural default in most of the country, and it is 10 mph too fast in Maine.",
        excerptKey: "stat-speed-45-other",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2074, Rates of speed",
        sourceUrl: law("2074"),
      },
      {
        id: "me_s1_17",
        topic: "safety",
        question: "Who must wear a seat belt in a Maine vehicle?",
        choices: [
          "Only the driver and the front-seat passengers",
          "Only occupants under 18",
          "Everyone except passengers in the back seat",
          "Everyone in the vehicle, in a belt or an appropriate child restraint",
        ],
        correctIndex: 3,
        explanation:
          "Maine requires every occupant to be secured. Children go in the child restraint that fits their age, weight and height, and everyone else wears a belt.",
        context:
          "Adult passengers are responsible for their own belts, and the driver is responsible for every passenger under 18. A first offense carries a $50 fine, a second $125 and a third or later one $250, and the court may not suspend those fines.",
        trap: "Back-seat exemptions exist in some states. Maine has none for age or seating position.",
        excerptKey: "belt-law-maine",
        sourceLabel: "Maine Driver's License Manual - Section 4, Using Safety Belts",
        sourceUrl: hb("4-2"),
      },
      {
        id: "me_s1_18",
        topic: "sharing",
        question: "How much room must you leave when you pass a bicycle in Maine?",
        choices: [
          "At least three feet between your vehicle and the bicycle",
          "Whatever feels safe at the speed you are travelling",
          "At least two feet between your vehicle and the bicycle",
          "A full lane, the same as for a motorcycle",
        ],
        correctIndex: 0,
        explanation:
          "Three feet is the number written into Maine law, measured between the right side of your vehicle and the bicycle as you go by.",
        context:
          "Maine goes further than most states here. The three-foot rule also covers roller skiers and pedestrians walking on the way or its shoulder, and you may pass a cyclist inside a no-passing zone only when it is safe to do so. Colliding with a cyclist is treated in law as evidence that you did not leave three feet.",
        trap: "A whole lane is what a motorcycle gets. For a bicycle the law states a distance, and that distance is three feet.",
        excerptKey: "bicycle-three-feet-hb",
        sourceLabel: "Maine Driver's License Manual - Section 7, Signs and Markings",
        sourceUrl: hb("7-8"),
      },
      {
        id: "me_s1_19",
        topic: "signals",
        question: "A green traffic light is showing as you approach an intersection. What does it mean?",
        choices: [
          "You have the right-of-way over everyone at the intersection",
          "You may go only after checking that no other light is showing green",
          "You may go straight but not turn",
          "You may go through with caution if the way is clear of traffic and pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "Green is permission, not a guarantee. You may proceed if the way ahead is actually clear of vehicles and people.",
        context:
          "Maine spells out the exception you will meet every day: pedestrians crossing with the light have the right-of-way, and you must yield to them even when your light is green. The statute makes the same point - a green light never relieves you of yielding to anyone lawfully in the intersection or crosswalk.",
        trap: "Treating a green light as absolute priority is exactly the mistake that hits a pedestrian who started crossing on the same green.",
        excerptKey: "green-light",
        sourceLabel: "Maine Driver's License Manual - Section 6, Traffic Signals",
        sourceUrl: hb("6-3"),
      },
      {
        id: "me_s1_20",
        topic: "rules",
        question: "How far ahead of a turn does Maine law require you to signal?",
        choices: [
          "At least 100 feet",
          "At least 50 feet",
          "At least 200 feet",
          "Three seconds before the turn",
        ],
        correctIndex: 0,
        explanation:
          "The signal must run continuously through at least the last 100 feet before you turn. The manual repeats the same 100 feet for a lane change.",
        context:
          "Maine also cares about where you switch it on. If you are turning past a side street, do not signal until you are beyond that side street, or the driver waiting there will assume you are turning in and pull out into your path. And cancel it afterwards.",
        trap: "A three-second rule is common driving-school advice, but Maine's law states a distance.",
        excerptKey: "stat-signal-100-feet",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2071, Turning and signals",
        sourceUrl: law("2071"),
      },
      {
        id: "me_s1_21",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing in a marked crosswalk with no traffic light or officer at the intersection. What must you do?",
        choices: [
          "Sound your horn to warn them and continue",
          "Continue if you can pass behind them",
          "Yield only if they are already past the center line",
          "Yield the right-of-way to them",
        ],
        correctIndex: 3,
        explanation:
          "You yield. Maine law puts the duty on the driver whenever a pedestrian is in a marked crosswalk and traffic-control devices are not operating.",
        context:
          "Maine goes further than the crosswalk itself. The statute also makes you yield to a pedestrian who has shown visible intent to enter the crosswalk, and the manual tells you to yield to pedestrians even when they are not in a crosswalk at all.",
        trap: "Passing behind a pedestrian mid-crossing is the classic near-miss. The duty is to yield the crosswalk, not to thread a gap in it.",
        excerptKey: "stat-pedestrian-visible-intent",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2056, Pedestrians",
        sourceUrl: law("2056"),
      },
      {
        id: "me_s1_22",
        topic: "impairment",
        question:
          "You are 18 and hold a Maine license. How much alcohol may you have in your system while driving?",
        choices: [
          "Up to 0.02",
          "Up to 0.05",
          "None at all",
          "Up to 0.08, the same as an adult",
        ],
        correctIndex: 2,
        explanation:
          "Zero. Anyone under 21 in Maine may not consume, purchase or transport alcohol at all, so there is no lawful amount to be driving with.",
        context:
          "The consequence is heavier than the adult one in an important way: a driver under 21 found operating with any amount of alcohol, or refusing the test, loses the license for at least one year. Every license issued to someone under 21 is treated as provisional for OUI purposes until they turn 21.",
        trap: "0.02 is the under-21 limit in some states. Maine's is not a small number, it is none.",
        excerptKey: "under-21-zero-tolerance",
        sourceLabel: "Maine Driver's License Manual - Section 3, If you are under 21",
        sourceUrl: hb("3-6"),
      },
      {
        id: "me_s1_23",
        topic: "signs",
        question: "What does an orange diamond or rectangular sign mean?",
        choices: [
          "You are entering a work zone",
          "A hazard on a rural road",
          "A detour for large vehicles only",
          "A school zone",
        ],
        correctIndex: 0,
        explanation:
          "Orange with black letters or symbols is Maine's work zone color. It warns of workers, reduced speeds, detours, slow machinery or a changed road surface ahead.",
        context:
          "Work zone rules are not just advice. Fines for speeding in a work zone are doubled, you must do what a flagger directs, and the manual tells you to keep obeying the posted work zone signs until you see an End Road Work sign - not until the cones run out.",
        trap: "Yellow diamonds warn of permanent hazards. Orange means the hazard is temporary and probably has people standing in it.",
        excerptKey: "work-zone-signs-orange",
        sourceLabel: "Maine Driver's License Manual - Section 6, Work Zone Signs",
        sourceUrl: hb("6-5"),
      },
      {
        id: "me_s1_24",
        topic: "licensing",
        question: "How long is a Maine learner's permit valid, and can you renew it?",
        choices: [
          "One year, renewable once",
          "Two years, renewable twice",
          "Until your 18th birthday",
          "Two years, and it is not renewable",
        ],
        correctIndex: 3,
        explanation:
          "A permit runs for two years and cannot be renewed. If it expires you file a fresh application and retake both the vision screening and the written exam.",
        context:
          "One thing does survive the expiry: the logged driving hours carry over to any later permit, and you do not have to serve another six-month wait before applying for the road test.",
        trap: "People assume a permit renews like a license. It does not - an expired permit means sitting the knowledge test again.",
        excerptKey: "permit-not-renewable",
        sourceLabel: "Maine BMV - How to Obtain a License, Driver's Permit",
        sourceUrl: BMV_OBTAIN,
      },
      {
        id: "me_s1_25",
        topic: "parking",
        question:
          "You are parking facing uphill on a street that has a curb. Which way do you turn the front wheels?",
        choices: [
          "To the left, away from the curb",
          "To the right, into the curb",
          "Straight ahead",
          "Whichever way the road slopes",
        ],
        correctIndex: 0,
        explanation:
          "Uphill with a curb, you turn the wheels left. If the car rolls back, the curb catches the front wheel instead of letting the car roll into traffic.",
        context:
          "The manual gives the whole set in two sentences: turn the wheels to the right when parking downhill, or uphill with no curb; turn them to the left only when parking uphill with a curb. Then set the parking brake and shift into park.",
        trap: "Turning into the curb is right for three of the four cases, which is exactly why the fourth catches people. Uphill with a curb is the odd one out.",
        excerptKey: "hill-parking-wheels",
        sourceLabel: "Maine Driver's License Manual - Section 7, Parking",
        sourceUrl: hb("7-10"),
      },
      {
        id: "me_s1_26",
        topic: "speed",
        question: "What is the speed limit in a Maine school zone during the hours it applies?",
        choices: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctIndex: 1,
        explanation:
          "Fifteen miles per hour. It applies during recess, while children are going to or leaving school in the half hour either side of the school day, and whenever the school speed limit signs are flashing.",
        context:
          "The five-sided sign is the marker. Maine doubles the fine for exceeding the posted limit in a school zone, and the manual admits the timing is hard to judge from the road, so it tells you to use extreme care when in doubt.",
        trap: "Twenty and twenty-five are common school zone limits elsewhere. Maine's is lower than both.",
        excerptKey: "school-zone-15-mph",
        sourceLabel: "Maine Driver's License Manual - Section 8, School Crossing",
        sourceUrl: hb("8-3"),
      },
      {
        id: "me_s1_27",
        topic: "rules",
        question:
          "You have stopped at a red light and want to turn right. There is no sign prohibiting it. Who must you yield to?",
        choices: [
          "Only pedestrians in the crosswalk",
          "Only traffic coming from your left",
          "Pedestrians and all vehicle traffic",
          "Nobody, once you have made a complete stop",
        ],
        correctIndex: 2,
        explanation:
          "A right turn on red is permitted in Maine after a complete stop, but it is a yield to everything: pedestrians on the crosswalk and every vehicle already entitled to be there.",
        context:
          "The permission disappears wherever a sign says NO RIGHT TURN ON RED. Maine lets a municipality or the Department of Transportation post one after weighing how close the intersection is to schools, fire stations, homes or institutions for the blind, how many people walk through it, and how complicated it is.",
        trap: "Stopping is the condition, not the permission. After the stop you are still the one who has to wait.",
        excerptKey: "red-light-and-right-on-red",
        sourceLabel: "Maine Driver's License Manual - Section 6, Traffic Signals",
        sourceUrl: hb("6-3"),
      },
      {
        id: "me_s1_28",
        topic: "emergencies",
        question: "Your car begins to skid on a slippery road. What is the first thing to do?",
        choices: [
          "Brake hard to slow down",
          "Turn the wheel sharply the opposite way",
          "Shift into neutral and coast",
          "Release pressure on the brake or accelerator so you can steer again",
        ],
        correctIndex: 3,
        explanation:
          "Get off the pedals first. A locked or spinning wheel cannot steer, so easing off the brake or the gas is what gives you steering back.",
        context:
          "Then look where you want to go and steer there. The manual's winter section adds the follow-through: as the car straightens, turn the wheel back the other way so it does not overcorrect into a new skid, and keep correcting left and right until it settles.",
        trap: "Braking harder is the instinct and it makes the skid worse - hard braking is one of the two things that starts a skid in the first place.",
        excerptKey: "skid-release-pressure",
        sourceLabel: "Maine Driver's License Manual - Section 9, Skids",
        sourceUrl: hb("9-4"),
      },
      {
        id: "me_s1_29",
        topic: "sharing",
        question: "How much road space is a motorcycle entitled to in Maine?",
        choices: [
          "Half a lane, so a car may share the lane alongside",
          "A full lane, and you may not try to share it",
          "Whatever space the rider is actually using",
          "A full lane only on highways",
        ],
        correctIndex: 1,
        explanation:
          "A motorcycle gets a whole lane. Maine tells you plainly not to attempt to share it, because the rider needs the width to move within the lane and react.",
        context:
          "The manual's other motorcycle warnings are about seeing them. Riders move side to side within the lane to be seen and to dodge road debris, their turn signals often do not self-cancel, and when you follow one you stay at least four seconds back.",
        trap: "Squeezing past in the same lane feels harmless at low speed. It removes the escape room the rider is relying on.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Maine Driver's License Manual - Section 10, Motorcycles or Mopeds",
        sourceUrl: hb("10-5"),
      },
      {
        id: "me_s1_30",
        topic: "licensing",
        question:
          "Who may sit beside you while you drive on a Maine learner's permit?",
        choices: [
          "Any licensed driver over 18",
          "A parent or guardian only",
          "Any adult with a valid license",
          "A licensed driver at least 20 years old who has held a valid license for two years",
        ],
        correctIndex: 3,
        explanation:
          "Both conditions have to be met: at least 20 years old and licensed for at least two years. That person also has to be in the seat next to you and licensed for the class of vehicle you are driving.",
        context:
          "A 19-year-old with four years of driving does not qualify, and neither does a 25-year-old who got their license last month. The supervising driver also has to observe any restrictions on their own license while they are supervising you.",
        trap: "\"Any licensed adult\" is the answer people give, and it fails on the two-year half of the rule as often as on the age.",
        excerptKey: "permit-accompanying-driver",
        sourceLabel: "Maine Driver's License Manual - Section 1, Who Does Not Need a Maine Driver's License",
        sourceUrl: hb("1-2"),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "The everyday rules Maine expects every driver to have straight: lane use, signals and markings, who yields where, and the parts of the manual the Bureau's own practice questions keep circling back to.",
    questions: [
      {
        id: "me_s2_01",
        topic: "rules",
        question:
          "On a two-lane road, what does a broken yellow line on your side of the center mean?",
        choices: [
          "Passing is prohibited in both directions",
          "You may pass when the way ahead is clear",
          "The lane is a shared center turn lane",
          "Traffic on your side may travel in either direction",
        ],
        correctIndex: 1,
        explanation:
          "Yellow separates traffic going opposite ways. When the line on your side is broken, you may cross it to pass, provided there are no oncoming cars in the passing lane.",
        context:
          "Read the line on your side only. Broken on your side and solid on theirs means you may pass and they may not. Two solid lines means neither of you may. The manual is blunt about the limit of markings: lane markings and signs tell you when it is unsafe to pass, but only you can tell when it is safe.",
        trap: "People read both lines as a pair. The half that governs you is the half nearer your wheels.",
        excerptKey: "broken-center-line",
        sourceLabel: "Maine Driver's License Manual - Section 7, Signs and Markings",
        sourceUrl: hb("7-8"),
      },
      {
        id: "me_s2_02",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection with no signs, signals or officer at about the same time. Who yields?",
        choices: [
          "The driver on the left yields to the driver on the right",
          "The driver on the right yields to the driver on the left",
          "The faster vehicle yields",
          "Whoever is turning yields to whoever is going straight",
        ],
        correctIndex: 0,
        explanation:
          "At an uncontrolled intersection Maine gives the right-of-way to the vehicle on the right. If the other car is on your right, you wait.",
        context:
          "The statute puts it the other way round and it means the same thing: a driver has the right-of-way over a vehicle on their left, and must yield to one on their right. Roundabouts and an officer directing traffic are the two exceptions.",
        trap: "Getting the direction backwards is the single most common right-of-way error. Right goes, left yields.",
        excerptKey: "uncontrolled-yield-right",
        sourceLabel: "Maine Driver's License Manual - Section 6, Yielding Right-Of-Way",
        sourceUrl: hb("6-2"),
      },
      {
        id: "me_s2_03",
        topic: "signals",
        question: "What is a flashing yellow traffic light telling you?",
        choices: [
          "Stop, then proceed when clear",
          "The light is about to turn red",
          "Slow down and proceed with caution, prepared to stop",
          "The intersection is closed",
        ],
        correctIndex: 2,
        explanation:
          "Flashing yellow means slow down and go through with caution, ready to stop for anything entering the intersection. You do not have to stop.",
        context:
          "Maine notes that flashing yellow lights also appear at construction areas and on the back of some vehicles, not only at intersections. Wherever you meet one, the meaning is the same: something here needs more attention than usual.",
        trap: "Flashing red is the one that requires a stop. Flashing yellow only requires that you could stop.",
        excerptKey: "flashing-yellow-light",
        sourceLabel: "Maine Driver's License Manual - Section 6, Traffic Signals",
        sourceUrl: hb("6-3"),
      },
      {
        id: "me_s2_04",
        topic: "sharing",
        question:
          "You are entering an interstate from an on-ramp. Who has the right-of-way?",
        choices: [
          "You do, because merging traffic is given priority",
          "The drivers already on the highway",
          "Whoever is travelling faster",
          "Neither - the two streams take turns",
        ],
        correctIndex: 1,
        explanation:
          "Traffic already on the highway has the right-of-way. Your job on the ramp is to use the acceleration lane to reach their speed and fit into a gap.",
        context:
          "The manual is blunt that the cars on the expressway are going fast and do not have to yield to you. It also warns against the opposite error - pulling into the lane before you have built up enough speed, which forces everyone behind to brake.",
        trap: "A merge sign does not create a right to merge. It marks the place where you have to earn one.",
        excerptKey: "entrance-ramp-yield",
        sourceLabel: "Maine Driver's License Manual - Section 6, Yielding Right-Of-Way",
        sourceUrl: hb("6-2"),
      },
      {
        id: "me_s2_05",
        topic: "safety",
        question:
          "Maine's manual says an expert driver keeps looking how far ahead?",
        choices: [
          "Two to four seconds",
          "Eight to ten seconds",
          "Twenty to thirty seconds",
          "As far as the headlights reach",
        ],
        correctIndex: 2,
        explanation:
          "Twenty to thirty seconds. Looking that far up the road is what turns a sudden lane change into a planned one.",
        context:
          "The manual pairs it with the mirror habit: check behind every six to eight seconds so you always know your cushion to the rear. It also names the commonest mistake it sees - drivers looking at the road just in front of the hood instead of up the road.",
        trap: "Two to four seconds is a following distance, which is a different measurement entirely.",
        excerptKey: "look-20-to-30-seconds",
        sourceLabel: "Maine Driver's License Manual - Section 8, Look ahead",
        sourceUrl: hb("8-2"),
      },
      {
        id: "me_s2_06",
        topic: "parking",
        question:
          "Maine law says you may not park on a public way unless how much clear width is left for other traffic?",
        choices: [
          "At least 8 feet",
          "At least 10 feet",
          "At least 12 feet",
          "Enough for one vehicle to pass at walking speed",
        ],
        correctIndex: 1,
        explanation:
          "Ten feet of clear, unobstructed width must remain for other vehicles to pass freely.",
        context:
          "The same statute adds a sight test that people forget: an approaching driver must have a clear view of the way for 300 feet beyond your parked car before they get within 200 feet of it. Park over a crest or just around a bend and you fail the second test even if you pass the first.",
        trap: "Judging it by whether a car can squeeze past misses the visibility half of the rule entirely.",
        excerptKey: "stat-parking-clear-width",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2068, Parking",
        sourceUrl: law("2068"),
      },
      {
        id: "me_s2_07",
        topic: "impairment",
        question: "What does Maine's implied consent law mean for you as a driver?",
        choices: [
          "Police may search your vehicle for alcohol without a warrant",
          "You must carry proof that you have not been drinking",
          "A refusal cannot be used against you in court",
          "By driving in Maine you have already consented to an alcohol or drug test, and refusing costs you your license",
        ],
        correctIndex: 3,
        explanation:
          "Operating a vehicle in Maine is itself consent to a chemical test. Nobody will force you to take one, but refusing brings an immediate administrative license suspension without any court involvement.",
        context:
          "A first refusal costs 275 days, and the periods climb steeply after that - 18 months, four years, then six. A refusal is also admissible at trial and counts as an aggravating factor at sentencing, which is why refusing raises the mandatory jail minimum from 48 to 96 hours.",
        trap: "The suspension for refusing survives even if you are later found not guilty of OUI. It is a separate administrative penalty.",
        excerptKey: "implied-consent",
        sourceLabel: "Maine Driver's License Manual - Section 3, Implied Consent",
        sourceUrl: hb("3-9"),
      },
      {
        id: "me_s2_08",
        topic: "signs",
        question: "What do regulatory signs look like in Maine, and what do they do?",
        choices: [
          "Yellow diamonds warning of a hazard",
          "Green rectangles pointing you to a town",
          "White signs with black, red or green lettering that tell you a rule you must follow",
          "Orange rectangles marking road work",
        ],
        correctIndex: 2,
        explanation:
          "Regulatory signs are square, rectangular or a special shape, white with black, red or green letters or symbols. They carry the force of law - speed, turning, lane use, parking.",
        context:
          "The red circle with a slash through it is the shorthand to learn: it always means you may not do the thing pictured. When no officer is present, traffic signals and signs have the authority of law, and defacing or removing one is itself unlawful.",
        trap: "The stop and yield signs are regulatory too, but their distinctive shapes hide that. Everything with a red circle and slash is in the same family.",
        excerptKey: "regulatory-signs",
        sourceLabel: "Maine Driver's License Manual - Section 6, Regulatory Signs",
        sourceUrl: hb("6-6"),
      },
      {
        id: "me_s2_09",
        topic: "rules",
        question:
          "You are turning left from a two-way street onto another two-way street. Which lane should you end up in?",
        choices: [
          "Any lane going in your direction",
          "The lane closest to the curb on the far side",
          "The leftmost lane going in your direction",
          "The center lane, then merge right",
        ],
        correctIndex: 2,
        explanation:
          "Turn into the lane closest to the one you came from. For a left turn that is the leftmost lane going your way, and you change lanes afterwards if you need to.",
        context:
          "The mirror rule covers right turns: start from the rightmost lane, stay close to the curb through the turn, and finish in the rightmost lane. Maine applies the same principle on a divided highway, a two-way street and a one-way street alike.",
        trap: "Swinging across into a middle lane during the turn is the error the manual is trying to prevent - it puts you alongside a car that is turning into the lane you skipped.",
        excerptKey: "turn-left-approach",
        sourceLabel: "Maine Driver's License Manual - Section 6, Lanes for Turning",
        sourceUrl: hb("6-9"),
      },
      {
        id: "me_s2_10",
        topic: "licensing",
        question:
          "You have just moved to Maine holding a valid license from another state. How long do you have to get a Maine license?",
        choices: ["30 days", "60 days", "90 days", "Six months"],
        correctIndex: 0,
        explanation:
          "Thirty days from establishing residency. You surrender the out-of-state license when the Maine one is issued.",
        context:
          "A valid out-of-state license usually means the written and road tests are waived for a passenger car. The 30-day clock also applies to registering your vehicle in Maine, and a name or address change has to be reported within the same 30 days.",
        trap: "The waiver on the tests makes people relax about the deadline. The deadline is separate from the testing.",
        excerptKey: "who-needs-license",
        sourceLabel: "Maine Driver's License Manual - Section 1, Who Needs a Maine Driver's License?",
        sourceUrl: hb("1-2"),
      },
      {
        id: "me_s2_11",
        topic: "emergencies",
        question:
          "You come upon a police car stopped on the shoulder with its emergency lights on. What does Maine's Move Over law require?",
        choices: [
          "Stop until the officer waves you past",
          "Sound your horn as you approach",
          "Move into a lane that is not next to it if you safely can, and otherwise slow to a careful and prudent speed",
          "Maintain your speed so you clear the scene quickly",
        ],
        correctIndex: 2,
        explanation:
          "Change lanes away from the stopped vehicle if that is possible and safe. If it is not, you must slow to a speed that is reasonable for passing safely.",
        context:
          "Maine's law covers more than police cars. It applies to any stationary authorized emergency vehicle using an emergency light, to public service vehicles using their authorized lights - wreckers, utility trucks, trash trucks - and, under a separate section, to any stationary vehicle a reasonable person would take to be disabled or using its flashers. Each carries a minimum $275 fine.",
        trap: "Moving over is the first choice, not the only one. When a lane change is unsafe, slowing down is the requirement rather than an excuse.",
        excerptKey: "stat-move-over",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2054, Stationary vehicles",
        sourceUrl: law("2054"),
      },
      {
        id: "me_s2_12",
        topic: "safety",
        question:
          "Approximately how far can you see with low-beam headlights, according to the Maine manual?",
        choices: ["100 feet", "250 feet", "400 feet", "500 feet"],
        correctIndex: 1,
        explanation:
          "About 250 feet. The manual's point is what that means for speed: drive faster than roughly 50 mph on a dark road and you cannot stop inside the distance you can see.",
        context:
          "High beams roughly double the reach, which is why the manual tells you to use them whenever there is no oncoming traffic. But you must dim within 500 feet of an oncoming vehicle and within 300 feet of one you are following, and use low beams in fog, snow or heavy rain where your own light bounces back at you.",
        trap: "The number sounds academic until you pair it with a speed. That pairing is the whole reason the manual prints it.",
        excerptKey: "headlights-250-feet",
        sourceLabel: "Maine Driver's License Manual - Section 8, Some Things Keep You from Seeing",
        sourceUrl: hb("8-8"),
      },
      {
        id: "me_s2_13",
        topic: "sharing",
        question:
          "A car ahead of you has stopped at a crosswalk to let someone cross. What does Maine law say you may not do?",
        choices: [
          "Sound your horn",
          "Change lanes anywhere near the crosswalk",
          "Stop behind it and wait",
          "Overtake and pass the stopped vehicle",
        ],
        correctIndex: 3,
        explanation:
          "You may not overtake and pass a vehicle that has stopped at an intersection or marked crosswalk to let a pedestrian cross. The stopped car is hiding the person from you.",
        context:
          "The manual states the same rule in its right-of-way list, and it is the rule behind a lot of Maine's serious crosswalk collisions - a driver swings around a stopped car and meets a pedestrian halfway across who never had a chance to see them coming.",
        trap: "Nothing about the stopped car looks like a hazard from behind, which is exactly why the law names this manoeuvre specifically instead of leaving it to judgment.",
        excerptKey: "stat-no-pass-stopped-for-ped",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2056, Pedestrians",
        sourceUrl: law("2056"),
      },
      {
        id: "me_s2_14",
        topic: "signs",
        question:
          "What is the round yellow sign with a black X and two Rs telling you?",
        choices: [
          "A railroad crossing is ahead - slow down, look and listen",
          "A crossroads is ahead",
          "You are on a route that ends ahead",
          "A rest area is ahead",
        ],
        correctIndex: 0,
        explanation:
          "It is the advance warning for a railroad crossing. Maine tells you to slow down, look and listen for a train or railroad vehicle, and be prepared to stop.",
        context:
          "The white X-shaped crossbuck at the crossing itself is the second sign. If a train is coming you must stop behind the stop line or before the tracks. Where there are lights and gates, you wait until they show it is safe, and you never drive around a lowered gate.",
        trap: "The round yellow sign is a warning, not a stop sign. A car is required to stop only when a train, a signal, a gate or a flagger says so.",
        excerptKey: "railroad-advance-warning",
        sourceLabel: "Maine Driver's License Manual - Section 6, Railroad Crossings",
        sourceUrl: hb("6-5"),
      },
      {
        id: "me_s2_15",
        topic: "rules",
        question:
          "Maine's manual describes a shared center lane marked for left turns only. Who may use it?",
        choices: [
          "Traffic travelling in either direction, to make a left turn",
          "Only traffic travelling in your direction",
          "Any driver who needs to pass",
          "Emergency vehicles only",
        ],
        correctIndex: 0,
        explanation:
          "Traffic going either way may use it, but only to turn left. It is not a through lane and it is not a passing lane.",
        context:
          "The routine matters as much as the permission: check your mirrors and the traffic ahead, signal left, check the left blind spot, steer smoothly into the lane and then make the turn when traffic clears. Maine's law separately forbids passing another vehicle using a lane an official device restricts to turning.",
        trap: "Because it sits in the middle of the road and is often empty, it looks like a passing lane. Using it that way puts you head-on with someone doing the same from the other side.",
        excerptKey: "shared-center-turn-lane-sign",
        sourceLabel: "Maine Driver's License Manual - Section 6, Shared Center Lane - Left Turn Only",
        sourceUrl: hb("6-7"),
      },
      {
        id: "me_s2_16",
        topic: "impairment",
        question:
          "Besides alcohol, what does the Maine manual say about driving after taking an over-the-counter or prescription drug?",
        choices: [
          "Only illegal drugs can lead to an OUI charge",
          "A prescription is a defense if the drug was taken as directed",
          "Using a legal medication is no defense in court, and the penalties are the same as for alcohol",
          "Only drugs that show up on a breath test count",
        ],
        correctIndex: 2,
        explanation:
          "Maine treats impairment by any drug the same way it treats alcohol. The manual states directly that an over-the-counter or prescription drug is not a defense in court.",
        context:
          "The list it warns about is ordinary medicine-cabinet material: cold and allergy remedies and calming preparations that make you drowsy, diet pills and stimulants that leave you jittery and unfocused, tranquilizers, barbiturates and marijuana. Mixing any of them with alcohol is worse than either alone.",
        trap: "\"It was prescribed for me\" feels like it should matter. In court it does not.",
        excerptKey: "prescription-no-defense",
        sourceLabel: "Maine Driver's License Manual - Section 3, Other Impairing Drugs and Driving",
        sourceUrl: hb("3-11"),
      },
      {
        id: "me_s2_17",
        topic: "signals",
        question: "What does a steady red arrow mean?",
        choices: [
          "You may make the turn after stopping, as with a red light",
          "The turn is permanently prohibited at this intersection",
          "You may make the turn if no pedestrians are present",
          "Traffic making the turn the arrow shows must stop until the arrow turns green",
        ],
        correctIndex: 3,
        explanation:
          "A steady red arrow holds the turning traffic. You wait until the arrow turns green, whatever the round signal beside it is doing.",
        context:
          "Arrows follow the same colors as round signals. A steady green arrow means go in the direction it points. A red light with a green arrow means you may go cautiously that way, yielding to everything else. A steady yellow arrow is clearing the turn before red.",
        trap: "The right-turn-on-red permission does not apply to a red arrow. The statute says an operator may not enter the intersection to make the movement the arrow indicates.",
        excerptKey: "steady-red-arrow",
        sourceLabel: "Maine Driver's License Manual - Section 6, Lighted Arrows",
        sourceUrl: hb("6-3"),
      },
      {
        id: "me_s2_18",
        topic: "rightOfWay",
        question:
          "You are pulling out of a private driveway onto a public road. Who has the right-of-way?",
        choices: [
          "Any vehicle or pedestrian already on the public way",
          "You do, once your front wheels are past the sidewalk",
          "Whoever arrives at the driveway mouth first",
          "The nearest vehicle only",
        ],
        correctIndex: 0,
        explanation:
          "Everything already on the public way goes first - vehicles and pedestrians both. You wait, and even after yielding you proceed cautiously.",
        context:
          "Maine treats the sidewalk as a separate hazard: a car coming out of a driveway or alley must stop before the sidewalk and wait for pedestrians and traffic. The manual counts driveway and shopping centre entrances as intersections for exactly this reason.",
        trap: "Edging out until traffic has to react is the everyday version of this failure, and it is still a failure to yield.",
        excerptKey: "private-drive-yield",
        sourceLabel: "Maine Driver's License Manual - Section 6, Yielding Right-Of-Way",
        sourceUrl: hb("6-2"),
      },
      {
        id: "me_s2_19",
        topic: "speed",
        question:
          "What does Maine's manual say a posted speed limit actually tells you?",
        choices: [
          "The speed you should aim to drive at",
          "The speed considered safe in any weather",
          "A guideline that police enforce with a tolerance",
          "The maximum you may drive, which conditions can make too fast",
        ],
        correctIndex: 3,
        explanation:
          "A posted limit is a ceiling under ideal conditions. If the road or the weather makes it unsafe, the manual says you must slow down.",
        context:
          "The statute puts the same duty first, before it gives any number: an operator must drive at a careful and prudent speed, no greater than is reasonable and proper for the traffic, the surface and the width of the way. The posted number never overrides that.",
        trap: "Driving the posted limit in a snowstorm is lawful only in the sense that the sign says so. The basic speed rule can still make it an offense.",
        excerptKey: "posted-limit-is-a-maximum",
        sourceLabel: "Maine Driver's License Manual - Section 8, Speed Limits",
        sourceUrl: hb("8-7"),
      },
      {
        id: "me_s2_20",
        topic: "safety",
        question:
          "Maine's manual gives a rule of thumb for adjusting speed on a slippery road. What does it say for packed snow?",
        choices: [
          "Slow down to half your normal speed",
          "Slow down 5 to 10 mph",
          "Slow to a crawl",
          "Reduce speed by a third",
        ],
        correctIndex: 0,
        explanation:
          "Half speed on packed snow. The manual gives three steps: slow 5 to 10 mph on a wet road, halve your speed on packed snow, and crawl on ice.",
        context:
          "The winter section adds the stopping figure behind those numbers - on snow or ice it takes three to twelve times as much distance to stop as on dry pavement. That range, not the individual step, is why following distance has to grow as well as speed coming down.",
        trap: "Slowing to a crawl is the ice instruction. Applying it to packed snow leaves you being passed by everyone; applying the packed-snow figure to ice leaves you in the ditch.",
        excerptKey: "slippery-slow-guidelines",
        sourceLabel: "Maine Driver's License Manual - Section 8, Slippery roads",
        sourceUrl: hb("8-6"),
      },
      {
        id: "me_s2_21",
        topic: "parking",
        question:
          "Under the municipal no-parking list in Maine's manual, how far from a fire hydrant must you keep your car?",
        choices: ["5 feet", "10 feet", "15 feet", "20 feet"],
        correctIndex: 1,
        explanation:
          "Ten feet from a hydrant. The same list keeps you 15 feet from a crosswalk and 15 feet from a driveway entrance to a fire station or the spot directly across from it.",
        context:
          "Maine words this carefully, and it is worth noticing: these distances come from municipal ordinances rather than from state law. Title 29-A's own parking section gives clear-width and sight-distance rules instead of a list of distances. The manual still expects you to know the list.",
        trap: "The hydrant and crosswalk figures are not the same. Ten and fifteen get swapped constantly.",
        excerptKey: "no-parking-municipal-list",
        sourceLabel: "Maine Driver's License Manual - Section 7, Parking",
        sourceUrl: hb("7-10"),
      },
      {
        id: "me_s2_22",
        topic: "sharing",
        question: "How should you treat a bicycle on a Maine road?",
        choices: [
          "As a pedestrian who happens to be moving faster",
          "As an obstruction you may pass whenever there is room",
          "As traffic that must always yield to motor vehicles",
          "As a vehicle with the same rights and responsibilities as a car",
        ],
        correctIndex: 3,
        explanation:
          "Bicycles are vehicles in Maine. Riders have the same rights and the same duties as drivers, which means they must obey signs and signals and you must yield to them where you would yield to a car.",
        context:
          "Maine has nearly 900,000 bicycles and most riding happens on the roads. Riders may leave the right edge to avoid hazards or a lane too narrow to share, and where the road is too narrow they are expected to take the travel lane. Experienced riders travel well over 30 mph, which is faster than most drivers judge.",
        trap: "Treating a rider who is in the middle of the lane as being in the wrong gets it backwards - that is what the manual tells them to do on a narrow road.",
        excerptKey: "bicycles-are-vehicles",
        sourceLabel: "Maine Driver's License Manual - Section 10, Bicycles",
        sourceUrl: hb("10-1"),
      },
      {
        id: "me_s2_23",
        topic: "emergencies",
        question:
          "You are in a crash. When must it be reported to police in Maine?",
        choices: [
          "Whenever there is any injury or death, or apparent property damage of $2,000 or more",
          "Only when someone is taken to hospital",
          "Whenever there is any injury or death, or apparent property damage of $1,000 or more",
          "Only when a vehicle has to be towed",
        ],
        correctIndex: 0,
        explanation:
          "Bodily injury or death makes it reportable, and so does apparent property damage of $2,000 or more. Failing to report can bring criminal charges and a license suspension.",
        context:
          "Damage is measured by what the necessary repairs would cost, not by what the vehicle is worth, so an old car can easily cross the line. A separate rule covers animals: if you injure or kill a dog, cat or livestock in a crash that is not otherwise reportable, you must take reasonable steps to notify the owner, or law enforcement or animal control if you cannot find them.",
        trap: "$1,000 is Maine's threshold for a different rule - the point at which an uninsured driver who causes damage loses the right to drive until they show financial responsibility.",
        excerptKey: "reportable-accident-hb",
        sourceLabel: "Maine Driver's License Manual - Section 9, Accidents",
        sourceUrl: hb("9-3"),
      },
      {
        id: "me_s2_24",
        topic: "licensing",
        question:
          "How often must a vehicle registered in Maine be inspected?",
        choices: [
          "Every two years",
          "Only when it is sold",
          "Every 12,000 miles",
          "Once a year",
        ],
        correctIndex: 3,
        explanation:
          "Once a year, at an official inspection station, before the vehicle is operated on any public way. Motorcycles need a valid sticker too.",
        context:
          "The manual lists what gets checked, and several items carry numbers the exam has been known to ask for: the horn must be audible from 200 feet, tires need 2/32 of an inch of tread, and the foot brake must stop the vehicle within 30 feet from 20 mph. A police officer may inspect a vehicle for safety at any time.",
        trap: "An expired sticker is not a paperwork problem. The manual warns it can mean a fine and points on your license.",
        excerptKey: "inspection-annual",
        sourceLabel: "Maine Driver's License Manual - Section 2, Inspecting Your Motor Vehicle",
        sourceUrl: hb("2-4"),
      },
      {
        id: "me_s2_25",
        topic: "rules",
        question:
          "Where must you stop at an intersection that has both a stop line and a marked crosswalk?",
        choices: [
          "At the stop line",
          "At the crosswalk, so pedestrians can see you",
          "Wherever you can see cross traffic",
          "Level with the stop sign itself",
        ],
        correctIndex: 0,
        explanation:
          "If there is a stop line before the crosswalk, you stop at the stop line. It is the first of the two, and it exists to leave the crosswalk clear.",
        context:
          "The order runs stop line, then crosswalk, then the point nearest the intersection where you can see approaching traffic. Maine adds that stop lines at intersections are set back to give larger vehicles room to turn, which is why you may need to stop at the line and then edge forward for a second look.",
        trap: "Stopping level with the sign is the habit that fails road tests. The sign is often set back from the line, and the line is what governs.",
        excerptKey: "stop-behind-line-or-crosswalk",
        sourceLabel: "Maine Driver's License Manual - Section 6, Crosswalks and Stop Lines",
        sourceUrl: hb("6-11"),
      },
      {
        id: "me_s2_26",
        topic: "signs",
        question: "What is the difference between a solid white lane line and a broken white one?",
        choices: [
          "Solid white separates opposing traffic; broken white separates same-direction traffic",
          "Solid white marks the edge of the road; broken white marks a bike lane",
          "Solid white marks a shoulder you may drive on; broken white does not",
          "Both separate lanes going the same way, but solid white discourages changing lanes and broken white allows it",
        ],
        correctIndex: 3,
        explanation:
          "White lines always separate traffic going the same direction. A solid one separates lanes with different uses and discourages crossing; a broken one simply divides lanes and allows a safe lane change.",
        context:
          "Yellow is the color that means opposing traffic. Getting the two families straight - yellow for opposite directions, white for the same direction - answers most pavement-marking questions before you look at whether the line is solid or broken.",
        trap: "Answer A swaps the two colors, which is the mistake that turns every marking question into a coin flip.",
        excerptKey: "white-lines-meaning",
        sourceLabel: "Maine Driver's License Manual - Section 6, Sign and Road Markings",
        sourceUrl: hb("6-11"),
      },
      {
        id: "me_s2_27",
        topic: "safety",
        question:
          "You are following a car and want to check your following distance. What does the Maine manual tell you to do?",
        choices: [
          "Count car lengths between you",
          "Watch the vehicle ahead pass a fixed object and count the seconds until you reach it",
          "Keep the whole car visible in the bottom of your windshield",
          "Match your speed in feet to twice your speed in miles per hour",
        ],
        correctIndex: 1,
        explanation:
          "Pick a fixed point - a sign, a pole - and count from when the rear of the car ahead passes it until you reach it. Reaching it before four seconds means you are too close.",
        context:
          "The manual gives the counting words so the timing is honest: one-thousand-one, one-thousand-two, one-thousand-three, one-thousand-four. When you are too close, it tells you to drop back and count again rather than eyeball the result.",
        trap: "Car lengths do not scale with speed, which is why every modern manual, Maine's included, has abandoned them for a time measurement.",
        excerptKey: "four-second-count",
        sourceLabel: "Maine Driver's License Manual - Section 8, Space in Front",
        sourceUrl: hb("8-11"),
      },
      {
        id: "me_s2_28",
        topic: "impairment",
        question:
          "Maine's open container law applies to the passenger area of a vehicle on a public way. Who can be in violation?",
        choices: [
          "Only the driver, and only if the driver is drinking",
          "Only a passenger who is drinking",
          "The operator, if the operator or a passenger drinks or holds an open alcoholic container",
          "Nobody, as long as the driver is sober",
        ],
        correctIndex: 2,
        explanation:
          "The operator is in violation if anyone in the passenger area consumes alcohol or possesses an open container - the driver's own sobriety is not the test.",
        context:
          "The passenger area covers the seats and anything within reach from them, including the glove compartment. There are narrow exceptions: a vehicle with no trunk may carry an open container behind the last upright seat, a motor home's living quarters are exempt, and so are paid passengers in a for-hire vehicle other than a taxicab.",
        trap: "A sober designated driver does not make the car legal. The offense is committed by the operator over what is happening in the passenger area.",
        excerptKey: "open-container-handbook",
        sourceLabel: "Maine Driver's License Manual - Section 3, Open Container Law",
        sourceUrl: hb("3-13"),
      },
      {
        id: "me_s2_29",
        topic: "signals",
        question:
          "Overhead lane control lights show a flashing yellow X above your lane. What does it mean?",
        choices: [
          "Do not drive in this lane",
          "Clear the lane, the signal is about to change to red",
          "This lane may only be used for a left turn",
          "You may use this lane",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow X restricts the lane to left turns only. It is the one signal in the set that permits use rather than forbidding it.",
        context:
          "The other three are simpler: a steady red X means do not drive in that lane, a steady yellow X means clear it because red is coming, and a green arrow means the lane is yours. On reversible lanes the same green arrow and red X govern which direction the lane is carrying at that hour.",
        trap: "Two of the four indications are X shapes that forbid the lane. The flashing one is the exception, and the flash is the whole difference.",
        excerptKey: "lane-use-control-lights",
        sourceLabel: "Maine Driver's License Manual - Section 6, Lane Use Control Lights",
        sourceUrl: hb("6-4"),
      },
      {
        id: "me_s2_30",
        topic: "rightOfWay",
        question:
          "You are approaching a roundabout in Maine. What must you do?",
        choices: [
          "Yield to vehicles already in the circle and enter to the right of the center island",
          "Enter to the left of the center island and merge",
          "Stop and wait for the circle to empty",
          "Take the right-of-way if you reach the entry first",
        ],
        correctIndex: 0,
        explanation:
          "Vehicles already circulating go first, and you enter counterclockwise, passing to the right of the raised center island.",
        context:
          "Maine's statute adds two details the manual glosses: you yield to a vehicle on your left as you circulate, and you may not travel beyond two exit points in the outside lane. If you are leaving within two exits, the manual suggests staying in the rightmost lane and signalling your exit.",
        trap: "Roundabouts are the named exception to Maine's yield-to-the-right rule, so the intersection habit is exactly the wrong one to bring here.",
        excerptKey: "roundabout-yield-hb",
        sourceLabel: "Maine Driver's License Manual - Section 7, Traffic Circles and Roundabouts",
        sourceUrl: hb("7-2"),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the Bureau's own exam sits: exact distances, the wording that separates two similar rules, and the parts of Title 29-A the manual summarizes rather than states.",
    questions: [
      {
        id: "me_s3_01",
        topic: "rules",
        question:
          "Maine law says the passing vehicle must return to the right before coming within what distance of an approaching vehicle?",
        choices: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctIndex: 1,
        explanation:
          "One hundred feet. The pass has to be finished and you have to be back on your own side before the gap to the oncoming car closes to that.",
        context:
          "The same section forbids crossing the center line at all within 100 feet of an intersection or a railroad grade crossing, or where your view is obstructed within 100 feet of a bridge, viaduct or tunnel. One hundred feet is the recurring number in Maine's passing rules.",
        trap: "A hundred feet at highway speed is about one second. The distance is a legal backstop, not a target to aim for.",
        excerptKey: "stat-return-100-feet",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2070, Passing another vehicle",
        sourceUrl: law("2070"),
      },
      {
        id: "me_s3_02",
        topic: "sharing",
        question:
          "You are about to pass a pedestrian walking on the shoulder of a Maine road. What distance must you leave?",
        choices: [
          "Whatever the shoulder allows",
          "Not less than three feet",
          "Not less than two feet",
          "A full lane",
        ],
        correctIndex: 1,
        explanation:
          "Three feet, the same figure Maine applies to bicycles and roller skiers. The duty is written into the pedestrian section of Title 29-A.",
        context:
          "The statute also tells the pedestrian where to be: where there is no sidewalk, they walk facing approaching traffic on the left side of the way or its shoulder. And it lets you pass a pedestrian inside a no-passing zone only when it is safe to do so.",
        trap: "Most drivers know the three-foot rule for bicycles and assume pedestrians are covered by common sense. Maine wrote them the same number.",
        excerptKey: "stat-pedestrian-3-feet",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2056, Pedestrians",
        sourceUrl: law("2056"),
      },
      {
        id: "me_s3_03",
        topic: "impairment",
        question:
          "A driver is convicted of a first OUI with no aggravating circumstances. What is the minimum license suspension?",
        choices: ["90 days", "150 days", "180 days", "One year"],
        correctIndex: 1,
        explanation:
          "One hundred and fifty days, along with a fine of at least $500 - or $600 if the driver refused the test - and an alcohol and drug education and treatment program.",
        context:
          "There is no work licence during that period. Maine states that offenders are absolutely prohibited from driving for the minimum suspension, and the reinstated licence is conditional for a year afterwards, meaning any amount of alcohol brings a further one-year suspension without a hearing.",
        trap: "One year is the figure for a driver under 21 operating with any alcohol at all. For an adult first offense the number is 150 days.",
        excerptKey: "oui-first-conviction-penalties",
        sourceLabel: "Maine Driver's License Manual - Section 3, If you are Convicted of Operating under the Influence",
        sourceUrl: hb("3-10"),
      },
      {
        id: "me_s3_04",
        topic: "signals",
        question:
          "Maine's traffic-control statute describes a red and a yellow light illuminated together. What does that indication mean?",
        choices: [
          "The signal is about to fail and should be treated as a four-way stop",
          "You may not enter the intersection, because it is reserved for the exclusive use of pedestrians",
          "You may turn right after stopping",
          "Emergency vehicles are being given priority",
        ],
        correctIndex: 1,
        explanation:
          "Red and yellow together means the intersection belongs to pedestrians for that phase, and no vehicle may enter it.",
        context:
          "This is an all-pedestrian phase, sometimes called an exclusive pedestrian interval, and it lets people cross in any direction at once. It is rare enough that most drivers never learn it, which is precisely why it appears in the statute rather than being left to inference.",
        trap: "Reading the yellow as \"about to change\" and the red as \"stop then go\" produces the wrong action. Nothing about this phase releases you until it ends.",
        excerptKey: "stat-red-and-yellow-together",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2057, Traffic-control devices",
        sourceUrl: law("2057"),
      },
      {
        id: "me_s3_05",
        topic: "speed",
        question:
          "Maine sets a lower limit for approaching an intersection where your view is obstructed. What is it, and from what distance?",
        choices: [
          "25 mph within 100 feet",
          "15 mph within 50 feet",
          "20 mph within 75 feet",
          "10 mph within 25 feet",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen miles per hour, applying from 50 feet out and through the intersection itself, unless traffic in one direction is given preference by stop signs, another device, or an officer.",
        context:
          "The statute defines what obstructed means, and the definition is strict: at any point in the last 50 feet you must have a clear, uninterrupted view of the intersection and of traffic on every way entering it for 200 feet. Rural Maine is full of intersections that fail that test.",
        trap: "The manual never mentions this limit. A learner who studies only the book meets it for the first time on the exam.",
        excerptKey: "stat-speed-obstructed-view",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2074, Rates of speed",
        sourceUrl: law("2074"),
      },
      {
        id: "me_s3_06",
        topic: "licensing",
        question:
          "A Maine licence issued to someone under 18 is an intermediate licence. Which of these does it prohibit?",
        choices: [
          "Driving on the interstate system",
          "Driving between midnight and 5 a.m.",
          "Driving more than 50 miles from home",
          "Driving in a vehicle older than 25 years",
        ],
        correctIndex: 1,
        explanation:
          "No driving between 12 a.m. and 5 a.m. The other two restrictions are no passengers except immediate family members unless a qualified licensed operator is beside you, and no mobile phone or handheld device at all.",
        context:
          "The restrictions run 270 days from when the licence was issued, and that period can reach past the driver's 18th birthday. A violation is a traffic infraction with a fine of $250 to $500, extends the restrictions by another 270 days, and brings a suspension - 60 days for a first violation, 180 for a second, a year after that.",
        trap: "Immediate family is defined by a list, not by who lives with you: grandparent, step-grandparent, parent, stepparent, spouse, child, stepchild, brother, sister, stepbrother, stepsister.",
        excerptKey: "intermediate-license-name",
        sourceLabel: "Maine BMV - Graduated Drivers License",
        sourceUrl: BMV_GDL,
      },
      {
        id: "me_s3_07",
        topic: "safety",
        question:
          "At 50 mph on dry pavement with good brakes, roughly how far does the Maine manual say braking alone takes?",
        choices: ["About 88 feet", "About 158 feet", "About 210 feet", "About 300 feet"],
        correctIndex: 1,
        explanation:
          "About 158 feet of braking distance. The manual adds that perception and reaction time nearly double the total.",
        context:
          "It breaks total stopping distance into three parts. Perception time - realizing you must stop - averages three-quarters of a second to a second for an alert driver. Reaction time, moving your foot to the brake, is another three-quarters to a second. Braking distance is what is left, and it grows far faster than speed does.",
        trap: "The 158 feet is only the braking part. Quoting it as the whole stopping distance understates the real figure by about 30 feet at that speed.",
        excerptKey: "braking-158-feet",
        sourceLabel: "Maine Driver's License Manual - Section 8, Stopping Distance",
        sourceUrl: hb("8-7"),
      },
      {
        id: "me_s3_08",
        topic: "parking",
        question:
          "Maine law forbids parking on certain parts of a limited-access highway. Which of these is specifically named?",
        choices: [
          "The shoulder to the right of the traffic lanes",
          "The shoulder to the left of the traffic lanes",
          "Any point within a mile of an exit",
          "Any point where the speed limit is 65 mph or higher",
        ],
        correctIndex: 1,
        explanation:
          "The left-hand shoulder is named specifically, along with traffic lanes, acceleration and deceleration lanes, and bridges.",
        context:
          "The manual's version is a driving instruction rather than a parking one: never stop on an expressway except in an emergency, and if you must, pull off the pavement as far as the shoulder allows and raise your hood. Neither source contemplates you standing on the traveled portion.",
        trap: "The left shoulder is the one that feels safest when your trouble is in the left lane, and it is the one the statute rules out.",
        excerptKey: "stat-parking-limited-access",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2068, Parking",
        sourceUrl: law("2068"),
      },
      {
        id: "me_s3_09",
        topic: "emergencies",
        question:
          "Maine law sets a following distance behind an authorized emergency vehicle that is using its emergency light. Apart from fire apparatus, what is it?",
        choices: ["100 feet", "150 feet", "300 feet", "500 feet"],
        correctIndex: 1,
        explanation:
          "One hundred and fifty feet behind any authorized emergency vehicle using an emergency light. Fire apparatus responding to an alarm gets a bigger gap - 500 feet.",
        context:
          "The manual only ever gives the 500-foot figure for fire trucks, so the 150-foot rule for police cars and ambulances comes from the statute alone. The same section also bars one truck from following within 150 feet of another outside a business or residential district.",
        trap: "Applying 500 feet to everything is the safe habit but the wrong answer, and applying 150 feet to a fire truck is both.",
        excerptKey: "stat-follow-fire-500",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2066, Following too closely",
        sourceUrl: law("2066"),
      },
      {
        id: "me_s3_10",
        topic: "signs",
        question:
          "A five-sided sign is posted ahead of you. What is it telling you?",
        choices: [
          "A hospital is nearby",
          "You are entering a school zone",
          "A narrow bridge is ahead",
          "The road ends in a T-intersection",
        ],
        correctIndex: 1,
        explanation:
          "Five sides means school zone. It brings the 15 mph limit with it during recess, during the half hour either side of the school day, and whenever the school speed limit signs are flashing.",
        context:
          "The manual tells you to be alert for school zones in the country as well as in town, and to stop when a school crossing guard directs you. Where there is a crossing guard you stop and yield as signalled, and you always yield the right-of-way to schoolchildren crossing the street.",
        trap: "The five-sided shape belongs to nothing else on an American road, which makes it worth learning by shape rather than by reading the legend.",
        excerptKey: "school-zone-15-mph",
        sourceLabel: "Maine Driver's License Manual - Section 8, School Crossing",
        sourceUrl: hb("8-3"),
      },
      {
        id: "me_s3_11",
        topic: "rightOfWay",
        question:
          "Two cars approach an intersection from opposite directions at the same time. One is signalling a left turn. Who goes first?",
        choices: [
          "The turning driver, because they arrived first",
          "The driver going straight",
          "The driver on the right",
          "The larger vehicle",
        ],
        correctIndex: 1,
        explanation:
          "The car going straight has the right-of-way. A driver intending to turn left must yield to oncoming traffic that is close enough to be an immediate hazard.",
        context:
          "Maine adds a bicycle version of the same rule: a driver turning left must yield to a bicycle or roller skier approaching from the opposite direction, and may not turn unless it can be done safely. The manual calls left turns in front of oncoming motorcycles one of the main causes of motorcycle crashes.",
        trap: "A signalling driver looks committed and looks like they have decided. Their signal creates no priority at all.",
        excerptKey: "opposite-turn-versus-straight",
        sourceLabel: "Maine Driver's License Manual - Section 6, Yielding Right-Of-Way",
        sourceUrl: hb("6-1"),
      },
      {
        id: "me_s3_12",
        topic: "rules",
        question:
          "Which vehicles must stop at every railroad grade crossing in Maine, even when no train is in sight?",
        choices: [
          "All vehicles",
          "Buses carrying passengers and vehicles placarded for hazardous materials",
          "Only school buses",
          "Any vehicle over 10,000 pounds",
        ],
        correctIndex: 1,
        explanation:
          "Buses transporting passengers, cargo tank vehicles and vehicles required to be placarded for hazardous materials must stop, listen, look both ways along the track and make sure no train is coming.",
        context:
          "They stop between 50 feet and 15 feet from the nearest rail. An ordinary car does not stop at all unless a signal, a gate, a flagger, a visible train or a sign requires it - and the manual's advice to a car is to slow, look both ways, and cross the tracks without stopping on them.",
        trap: "Stopping at every crossing in a car is a road-test failure in Maine, not a virtue. Learners hear it repeated and lose marks for it.",
        excerptKey: "stat-railroad-required-stops",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2076, Railroad or grade crossings",
        sourceUrl: law("2076"),
      },
      {
        id: "me_s3_13",
        topic: "impairment",
        question:
          "How long is a first refusal to submit to a chemical test in Maine, as an administrative suspension?",
        choices: ["90 days", "150 days", "275 days", "One year"],
        correctIndex: 2,
        explanation:
          "Two hundred and seventy-five days for a first refusal. It climbs to 18 months for a second, four years for a third and six years for a fourth.",
        context:
          "This suspension is separate from anything a court does. It stands even if you are later acquitted of the OUI itself, and the refusal is admissible at trial and treated as an aggravating factor - the jail minimum rises from 48 hours to 96 when you refuse.",
        trap: "The manual's own summary says the suspension can run \"up to six years\", which is the ceiling for a fourth refusal rather than what a first one costs.",
        excerptKey: "stat-refusal-periods",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2521, Implied consent to chemical tests",
        sourceUrl: law("2521"),
      },
      {
        id: "me_s3_14",
        topic: "safety",
        question:
          "You need to merge onto a busy road. What size gap does the Maine manual say you need?",
        choices: [
          "Two seconds",
          "Three seconds",
          "Four seconds",
          "Whatever gap lets you reach the speed limit",
        ],
        correctIndex: 2,
        explanation:
          "A four-second gap, which leaves both you and the driver behind you with a safe following distance once you are in.",
        context:
          "The same four seconds applies whenever you change lanes, enter a freeway from an entrance lane, or merge with another road. Crossing or entering from a full stop needs far more: about half a block on city streets and a full block on the highway, and about two-thirds of a block or two blocks respectively to enter and get up to speed.",
        trap: "Four seconds is easy to confuse with the following distance, and it is the same number for the same reason - it is the following distance you are creating for someone else.",
        excerptKey: "space-to-merge-four-seconds",
        sourceLabel: "Maine Driver's License Manual - Section 8, Space to Merge",
        sourceUrl: hb("8-15"),
      },
      {
        id: "me_s3_15",
        topic: "sharing",
        question:
          "How large is the blind spot directly behind a large truck, according to the Maine manual?",
        choices: ["Up to 50 feet", "Up to 100 feet", "Up to 200 feet", "Up to 335 feet"],
        correctIndex: 2,
        explanation:
          "Up to 200 feet. Sit inside it and the truck driver cannot see you, and you cannot see what is happening ahead of the truck either.",
        context:
          "The manual names four No-Zones - sides, rear and front. The truck's largest side blind spot is on the right, running from behind the cab the length of the trailer. Its test for all of them is simple: if you cannot see the driver's face in the side mirror, they cannot see you.",
        trap: "335 feet is the manual's stopping distance for a loaded truck at 55 mph, which is a different number about the same vehicle.",
        excerptKey: "rear-no-zone-200-feet",
        sourceLabel: "Maine Driver's License Manual - Section 10, Rear No-Zones",
        sourceUrl: hb("10-7"),
      },
      {
        id: "me_s3_16",
        topic: "licensing",
        question:
          "How many demerit points bring an automatic licence suspension in Maine, and when does a warning arrive?",
        choices: [
          "Warning at 6 points, suspension at 12",
          "Warning at 4 points, suspension at 8",
          "Warning at 8 points, suspension at 15",
          "Warning at 10 points, suspension at 20",
        ],
        correctIndex: 0,
        explanation:
          "The Secretary of State issues a warning at 6 points and suspends the licence at 12 or more. Points drop off a record when they become a year old.",
        context:
          "Maine also runs a credit system in the other direction: one point for each calendar year free of convictions or suspensions, up to four accumulated credits. Completing the Maine Driving Dynamics course deducts three points, and you can only claim that deduction once in any twelve-month period.",
        trap: "Twelve is the suspension figure, not the warning one. The two get reported the other way round constantly.",
        excerptKey: "demerit-points-6-and-12",
        sourceLabel: "Maine Driver's License Manual - Section 1, Suspension for Demerit Point Accumulation",
        sourceUrl: hb("1-9"),
      },
      {
        id: "me_s3_17",
        topic: "speed",
        question:
          "What happens in Maine if you exceed the speed limit by 30 miles per hour or more?",
        choices: [
          "It becomes a traffic infraction with a doubled fine",
          "Your licence is suspended for 90 days automatically",
          "Nothing beyond the normal fine, unless you are in a work zone",
          "It becomes a Class E crime",
        ],
        correctIndex: 3,
        explanation:
          "Thirty or more over is a crime rather than an infraction - a Class E crime under Title 29-A.",
        context:
          "The manual reaches the same place from the other side: it lists speeding by 30 mph or more over the limit among the offenses that can bring a 30-day licence suspension. Travelling 30 mph or more over is also one of the aggravating circumstances that adds mandatory jail time to a first OUI.",
        trap: "Doubled fines belong to school zones and work zones. Thirty over is a different category of trouble entirely.",
        excerptKey: "stat-speed-30-over-crime",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2074, Rates of speed",
        sourceUrl: law("2074"),
      },
      {
        id: "me_s3_18",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and a train is coming. What does the Maine manual tell you to do?",
        choices: [
          "Stay in the car and brace for impact",
          "Get out and run away from the tracks in the direction the train is going",
          "Get out and move toward the oncoming train, away from the tracks at a 45 degree angle",
          "Try to restart the engine until the last moment",
        ],
        correctIndex: 2,
        explanation:
          "Leave the vehicle and head toward the train, angling away from the tracks at about 45 degrees. That takes you away from where the wreckage will be thrown.",
        context:
          "Once you are safely clear, call the railroad's emergency number - the manual tells you to look for a nearby blue sign carrying it. Running the other way keeps you in the path of the debris the collision throws forward.",
        trap: "Running away from the train is the instinct and it is the wrong direction, because the impact pushes your car and its pieces down the track ahead of the locomotive.",
        excerptKey: "stalled-on-tracks",
        sourceLabel: "Maine Driver's License Manual - Section 9, If your car stalls on railroad tracks",
        sourceUrl: hb("9-6"),
      },
      {
        id: "me_s3_19",
        topic: "signals",
        question:
          "Your turn signals have failed and you need to indicate a left turn by hand. What is the signal?",
        choices: [
          "Hand and arm extended horizontally out of the left window",
          "Hand and arm extended upward out of the left window",
          "Hand and arm extended downward out of the left window",
          "Hand waved forward out of the left window",
        ],
        correctIndex: 0,
        explanation:
          "Left arm straight out horizontally. All three hand signals are given from the left side of the vehicle with the left arm.",
        context:
          "Upward means a right turn, and downward means stopping or slowing. Maine allows a cyclist to signal a right turn by extending the right arm horizontally instead, and lets a rider return the hand to the handlebars during the turn to keep control.",
        trap: "It is easy to reason that a right turn should be signalled with the right arm. In a car, every signal is given with the left.",
        excerptKey: "stat-hand-signal-left",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2071, Turning and signals",
        sourceUrl: law("2071"),
      },
      {
        id: "me_s3_20",
        topic: "parking",
        question:
          "Maine sets a minimum fine for misusing an access aisle beside a disability parking space. What is it?",
        choices: [
          "Not less than $50",
          "Not less than $100",
          "Not less than $200",
          "Not less than $500",
        ],
        correctIndex: 2,
        explanation:
          "Not less than $200. Parking in an access aisle is prohibited outright - the aisle is the space someone needs to get a wheelchair or lift out of their vehicle.",
        context:
          "The manual also carries a $100 fine for parking in a disability space without a permit or plate, and a separate $100 fine for misusing a disability plate or placard. The aisle carries the heavier penalty because blocking it strands the person it belongs to.",
        trap: "The $100 figure is the one people remember, and it is the fine for the space rather than for the aisle beside it.",
        excerptKey: "access-aisle-fine",
        sourceLabel: "Maine Driver's License Manual - Section 7, Access Aisle",
        sourceUrl: hb("7-10"),
      },
      {
        id: "me_s3_21",
        topic: "safety",
        question:
          "Bridges and overpasses behave differently from the rest of the road in cold weather. How?",
        choices: [
          "They stay warmer because of the traffic passing beneath",
          "They drain faster, so they are safer when wet",
          "They freeze last because they are exposed to the sun",
          "They freeze first and dry out last",
        ],
        correctIndex: 3,
        explanation:
          "Cold air gets at a bridge deck from above and below, so it ices before the road on either side and stays icy after the rest has dried.",
        context:
          "The manual pairs it with two other slippery-condition warnings: pavement is at its worst in the first few minutes of rain, when heat brings oil to the surface, and ice near freezing point is wet and slushy, which makes it more slippery than colder, drier ice.",
        trap: "The stretch of dry road either side of a bridge is what makes this dangerous. Nothing about the approach warns you that the deck is different.",
        excerptKey: "bridges-freeze-first",
        sourceLabel: "Maine Driver's License Manual - Section 8, Slippery roads",
        sourceUrl: hb("8-7"),
      },
      {
        id: "me_s3_22",
        topic: "rules",
        question:
          "When may you legally pass another vehicle on the right in Maine?",
        choices: [
          "Whenever the shoulder is wide enough",
          "On any road with a posted limit over 45 mph",
          "Never - passing on the right is always prohibited",
          "When the vehicle ahead is making or about to make a left turn, or on a road with two or more lanes in your direction",
        ],
        correctIndex: 3,
        explanation:
          "Two situations allow it: the vehicle ahead is turning left, or the road has room for two or more lines of traffic moving your way. Even then, only when it can be done safely.",
        context:
          "Both the manual and the statute forbid one thing absolutely: you may never pass by driving off the pavement or the main traveled portion of the way. The manual's reason for preferring the left is that other drivers do not expect a pass on the right and are less likely to see you.",
        trap: "The shoulder looks like the obvious place to slip past a left-turning car. Using it is the one version of this manoeuvre Maine rules out completely.",
        excerptKey: "pass-right-exceptions-hb",
        sourceLabel: "Maine Driver's License Manual - Section 6, Lanes for Passing",
        sourceUrl: hb("6-9"),
      },
      {
        id: "me_s3_23",
        topic: "impairment",
        question:
          "In which of these situations does a first OUI conviction in Maine carry mandatory jail time?",
        choices: [
          "When the driver's alcohol level was 0.15 or more",
          "When the driver had been driving for less than two years",
          "When the offense happened at night",
          "When the driver had no insurance",
        ],
        correctIndex: 0,
        explanation:
          "At 0.15 or more the sentence must include at least 48 hours in jail, and that minimum cannot be suspended.",
        context:
          "Three other circumstances trigger the same 48 hours on a first offense: exceeding the limit by 30 mph or more, eluding or attempting to elude an officer, and carrying a passenger under 21. Refusing the test raises the minimum to 96 hours.",
        trap: "Being convicted of a first OUI does not by itself mean jail. It is the aggravating circumstance that makes the jail time mandatory.",
        excerptKey: "stat-oui-48-hours",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2411, Criminal OUI",
        sourceUrl: law("2411"),
      },
      {
        id: "me_s3_24",
        topic: "signs",
        question:
          "You see an orange and red reflective triangle on the back of a vehicle ahead. What does it mean?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle is being towed",
          "The driver is a learner",
          "The vehicle travels at less than 25 mph",
        ],
        correctIndex: 3,
        explanation:
          "It is the slow-moving vehicle emblem, and it means the vehicle is travelling under 25 mph - farm tractors, animal-drawn carts, roadway maintenance machines.",
        context:
          "The closing speed is what catches people. Come over a rise at 45 mph behind a tractor doing 15 and you are eating 30 mph of gap. The manual tells you to adjust speed before you reach a slow vehicle rather than after, because slowing suddenly is itself a cause of crashes.",
        trap: "Placards for hazardous materials are diamond-shaped and numbered. The slow-vehicle emblem is a triangle and carries no text at all.",
        excerptKey: "slow-moving-vehicle-triangle",
        sourceLabel: "Maine Driver's License Manual - Section 10, Slow Moving Vehicles",
        sourceUrl: hb("10-10"),
      },
      {
        id: "me_s3_25",
        topic: "rightOfWay",
        question:
          "Maine requires drivers to yield to a transit bus reentering traffic. On what roads does that apply?",
        choices: [
          "All public ways",
          "Roads inside a business district only",
          "Interstate highways only",
          "Roads with a maximum speed limit of 35 mph or less",
        ],
        correctIndex: 3,
        explanation:
          "The duty applies on a public way whose maximum speed limit is 35 mph or less, when the bus has lit its rear yield sign and signalled to pull out.",
        context:
          "Both conditions have to be met - the illuminated yield sign on the left rear of the bus, and an activated turn signal. The rule covers buses operated or contracted by the state, a municipality or another political subdivision, and specifically does not cover school buses, which have their own rules.",
        trap: "Assuming it applies everywhere is generous but wrong, and assuming a school bus is covered by it mixes two very different sets of rules.",
        excerptKey: "stat-transit-bus-yield",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2053, Right-of-way",
        sourceUrl: law("2053"),
      },
      {
        id: "me_s3_26",
        topic: "sharing",
        question:
          "Maine's manual recommends the Dutch Reach when you open a car door. What is it?",
        choices: [
          "Reaching across with your left hand to hold the frame",
          "Opening the door only a few inches first",
          "Waiting for a passenger to check behind you",
          "Opening the door with your right hand, so your body turns and you look back over your shoulder",
        ],
        correctIndex: 3,
        explanation:
          "Use the far hand - the right hand for a driver - so your torso rotates and your eyes end up looking back down the road at oncoming cyclists.",
        context:
          "Maine also makes door-opening a legal matter: you may not open a door on the side of moving traffic unless it is reasonably safe and can be done without interfering with traffic, and you may not leave it open longer than loading or unloading takes.",
        trap: "Checking the mirror is not the same as turning to look. The Dutch Reach works because it forces the head turn rather than relying on you to remember one.",
        excerptKey: "dutch-reach",
        sourceLabel: "Maine Driver's License Manual - Section 10, Bicycles",
        sourceUrl: hb("10-3"),
      },
      {
        id: "me_s3_27",
        topic: "licensing",
        question:
          "Who may drive on a Maine highway without holding a Maine licence?",
        choices: [
          "Anyone visiting the state for less than 90 days",
          "Anyone over 21 with any state's licence",
          "Only military personnel",
          "A non-resident aged at least 16 with a valid licence or learner's permit from their home state",
        ],
        correctIndex: 3,
        explanation:
          "A non-resident who is at least 16 and holds a valid operator's licence or learner's permit issued by their home state may drive in Maine.",
        context:
          "The manual's short list also covers a Maine permit holder driving with a qualifying supervising driver, and military personnel with a valid military licence operating a military vehicle. A resident, by contrast, must have a Maine licence, and a new resident has 30 days to surrender the old one.",
        trap: "The rule keys on residency, not on how long you are visiting. Establish residency and the 30-day clock starts whatever your plans were.",
        excerptKey: "non-resident-16",
        sourceLabel: "Maine Driver's License Manual - Section 1, Who Does Not Need a Maine Driver's License",
        sourceUrl: hb("1-2"),
      },
      {
        id: "me_s3_28",
        topic: "speed",
        question:
          "Maine defines the compact or built-up portion of a municipality, where the 25 mph default applies. How?",
        choices: [
          "Territory built up with structures less than 150 feet apart for at least a quarter of a mile",
          "Anywhere inside the town line",
          "Anywhere with sidewalks on both sides",
          "Any area with more than 20 houses per mile",
        ],
        correctIndex: 0,
        explanation:
          "Structures less than 150 feet apart, continuing for at least a quarter of a mile, makes it a compact or built-up portion. Municipal officers may also mark it with signs.",
        context:
          "That definition is why the 25 mph default can apply on a road that does not feel like a town. The measurement is about how close the buildings are to each other along the road, not about municipal boundaries or the presence of sidewalks.",
        trap: "Crossing the town line changes nothing on its own. A stretch of open highway inside a town keeps the 45 mph default.",
        excerptKey: "stat-compact-area",
        sourceLabel: "Maine Revised Statutes, Title 29-A - Section 2074, Rates of speed",
        sourceUrl: law("2074"),
      },
      {
        id: "me_s3_29",
        topic: "emergencies",
        question:
          "Your brakes fail while you are driving. What is the first thing the Maine manual tells you to try?",
        choices: [
          "Pull the parking brake hard",
          "Shift straight into neutral",
          "Pump the brake pedal rapidly and hard several times",
          "Turn off the engine",
        ],
        correctIndex: 2,
        explanation:
          "Pump the pedal rapidly and hard several times first. That can build enough pressure in a failing system to stop the car.",
        context:
          "If pumping does nothing, apply the parking brake slowly so the rear wheels do not lock, be ready to release it if you start to skid, shift down, and use the horn and lights to warn other drivers. Once you are stopped, call for help - the manual says do not drive without brakes.",
        trap: "Yanking the parking brake is the instinct and it is second on the list for a reason: applied hard it locks the rear wheels and starts a skid.",
        excerptKey: "brake-failure",
        sourceLabel: "Maine Driver's License Manual - Section 9, Brake Failure",
        sourceUrl: hb("9-5"),
      },
      {
        id: "me_s3_30",
        topic: "safety",
        question:
          "How does Maine's manual describe hydroplaning, and what makes it worse?",
        choices: [
          "Tires riding up on a film of water; worn tires and higher speed make it worse",
          "Tires losing grip on packed snow; worn tread makes it worse",
          "Brakes overheating in heavy rain; wet drums make it worse",
          "Steering pulling to one side on a crowned road; underinflation makes it worse",
        ],
        correctIndex: 0,
        explanation:
          "At low speeds tires wipe water off the road like a wiper blade. Go faster than they can wipe and they climb onto a film of water, and balding tires lose contact at much lower speeds.",
        context:
          "The manual gives the speeds in its rain section: in most cars it can begin as low as 30 to 40 mph, and in a heavy rainstorm the tires may lose all contact at 50 to 60. When that happens there is no friction available for braking, accelerating or cornering.",
        trap: "It is not a wet-road version of a skid you can steer out of. Hydroplaning removes the grip you would steer with.",
        excerptKey: "hydroplaning-definition",
        sourceLabel: "Maine Driver's License Manual - Section 8, Hydroplaning",
        sourceUrl: hb("8-7"),
      },
      {
        id: "me_s3_31",
        topic: "rules",
        question:
          "A truck lane restriction applies on parts of the Maine Turnpike and Interstate 95. What is it?",
        choices: [
          "Trucks may not use the leftmost lane where there are three lanes in a direction",
          "Trucks must travel at least 10 mph below the posted limit",
          "Trucks may not pass other trucks",
          "Trucks must use the breakdown lane to let traffic by",
        ],
        correctIndex: 0,
        explanation:
          "Where the Turnpike or I-95 runs three lanes in a direction, trucks and truck tractors must stay in the two farthest right-hand lanes. Pickup trucks are excluded from the restriction.",
        context:
          "The manual's broader lane advice sits alongside it: the middle lane of a three-lane carriageway usually has the smoothest flow, the left lane is for passing and turning left, and the right lane carries slower traffic and vehicles entering or leaving.",
        trap: "The exclusion for pickups is the part people miss, and it is why an ordinary pickup in the left lane is not breaking this rule.",
        excerptKey: "truck-lane-restriction",
        sourceLabel: "Maine Driver's License Manual - Section 6, Lane Restrictions",
        sourceUrl: hb("6-9"),
      },
      {
        id: "me_s3_32",
        topic: "signals",
        question:
          "Where should you switch on your turn signal if you intend to turn just past a side street?",
        choices: [
          "After you have passed the side street",
          "Well before the side street, so everyone has warning",
          "As you begin the turn",
          "Only if another vehicle is waiting at the side street",
        ],
        correctIndex: 0,
        explanation:
          "Wait until you are past the side street. Signalling before it tells the driver waiting there that you are turning in, and they will pull out into your path.",
        context:
          "Maine still wants the signal running for at least the last 100 feet before the turn, so on a short block the two rules squeeze together - which is exactly why the manual says to hold the signal rather than to switch it on early and hope.",
        trap: "Signalling as early as possible feels like the courteous choice and is the one that causes the collision.",
        excerptKey: "signal-past-side-street",
        sourceLabel: "Maine Driver's License Manual - Section 8, Signal",
        sourceUrl: hb("8-17"),
      },
      {
        id: "me_s3_33",
        topic: "sharing",
        question:
          "When must someone riding a bicycle in Maine wear a helmet?",
        choices: [
          "Only when riding after dark",
          "Everyone must, at all times",
          "All riders under 16 years of age on public ways",
          "Only riders under 12",
        ],
        correctIndex: 2,
        explanation:
          "Everyone under 16 riding on a public way must wear a helmet, and passengers under 16 must be on a proper passenger seat.",
        context:
          "The bicycle equipment rules carry two other numbers worth knowing: a front light showing white visible at least 200 feet ahead, and a red or amber light or reflector visible at least 200 feet behind. Under-16 riders and passengers on electric bicycles are covered by the same helmet requirement.",
        trap: "The motorcycle helmet age is 18, not 16. The two thresholds are different and both appear in the manual.",
        excerptKey: "bicycle-helmet-under-16",
        sourceLabel: "Maine Driver's License Manual - Section 10, Bicycle Operation",
        sourceUrl: hb("10-4"),
      },
      {
        id: "me_s3_34",
        topic: "parking",
        question:
          "You are leaving a parallel parking space on the right-hand side of the road. What does the Maine manual tell you to do before pulling out?",
        choices: [
          "Look over your left shoulder, not just in the mirror",
          "Check the rearview mirror and signal",
          "Sound your horn once",
          "Wait until no traffic is visible in either direction",
        ],
        correctIndex: 0,
        explanation:
          "Look over your left shoulder, not through the mirror alone, then signal and pull out slowly into the correct lane.",
        context:
          "Leaving from the left curb reverses it - you look over your right shoulder as you enter the roadway. Maine's right-of-way list adds the other half of the rule: wait for all moving traffic to pass when starting from a parked position.",
        trap: "The mirror does not cover the blind spot that hides the car about to pass you, which is the one vehicle a parked driver has no other way of seeing.",
        excerptKey: "start-from-parking-place",
        sourceLabel: "Maine Driver's License Manual - Section 7, Starting from a Parking Place",
        sourceUrl: hb("7-12"),
      },
      {
        id: "me_s3_35",
        topic: "impairment",
        question:
          "Maine's manual says something specific about how quickly the body eliminates alcohol. What?",
        choices: [
          "Coffee and a cold shower speed it up",
          "Exercise burns it off faster",
          "It leaves at a constant rate that nothing can change, so only time sobers you up",
          "It depends mainly on what you ate beforehand",
        ],
        correctIndex: 2,
        explanation:
          "The liver oxidizes alcohol at a fixed rate. Nothing but time reduces it - the manual's line is that coffee, a cold shower or exercise only give you a wide awake, wet or sweating drunk.",
        context:
          "The same section takes down the other myths people bring: a 12 oz beer carries about as much alcohol as a 1 oz shot of 100 proof spirit or a 4 oz glass of wine, and switching drinks changes nothing because people get drunk from drinking too much.",
        trap: "Every folk remedy on that list makes you feel more alert without changing the number a breath test reads.",
        excerptKey: "sobering-up",
        sourceLabel: "Maine Driver's License Manual - Section 3, Myths Concerning Alcohol",
        sourceUrl: hb("3-8"),
      },
    ],
  },
];
