import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sources and same rules as sets 1 to 3: every fact is
// checked against the Rhode Island Driver's Manual (April 2024), Title 31 of
// the Rhode Island General Laws, and the DMV's own pages, and every question
// is written from scratch.
//
// Set 5 is built from what Rhode Island learners actually report going wrong.
// The recurring items, drawn from r/RhodeIsland, r/providence and r/DMV
// threads between 2019 and 2026 and listed in docs/driving/research/
// rhodeisland.md, are: rolling stops and stop signs that are not at
// intersections; the handful of measured distances people are told to
// memorize (a Rhode Island commenter naming "the 3 second rule, how far to
// park from a corner and hydrant" as the specifics that catch people); and a
// local habit of taking the left turn the moment the light goes green, which
// one thread corrects in as many words. Nobody's remembered exam question was
// used - only the RULE they said they got wrong.
const HB = "https://dmv.ri.gov/media/966/download?language=en";
const hb = (page: number) => `${HB}#page=${page}`;
const rigl = (section: string) => {
  const parts = section.split("-");
  return `https://webserver.rilegislature.gov/Statutes/TITLE31/${parts[0]}-${parts[1]}/${section}.htm`;
};
const KNOWLEDGE = "https://dmv.ri.gov/licenses-permits-ids/permits-tests/knowledge-exams";
const NEWPERMIT = "https://dmv.ri.gov/licenses-permits-ids/permits-tests/new-license-permits";
const ROADTEST = "https://dmv.ri.gov/licenses-permits-ids/permits-tests/road-tests";
const CCRI = "https://www.ccri.edu/workforce/transportation/DriverEd.html";

export const rhodeislandSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions spread across every chapter of the Rhode Island Driver's Manual, including the sections people skim: emergencies, equipment, drowsy driving and the appendix laws.",
    questions: [
      {
        id: "ri_s4_01",
        topic: "licensing",
        question:
          "How many classroom hours does Rhode Island's driver education course run, and who must take it?",
        choices: [
          "33 hours, required for anyone under 18 before they can get a permit",
          "30 hours, required for every new driver whatever their age",
          "40 hours, required only for drivers under 16",
          "20 hours, required only if you have failed the knowledge exam once",
        ],
        correctIndex: 0,
        explanation:
          "Thirty-three classroom hours, and it is a precondition of the permit for anyone aged 16 to 18. From 18 you are not required to attend the course, but you still take the computerized knowledge exam.",
        context:
          "The course is administered by CCRI and by a handful of approved driving schools, and students who take it at CCRI sit the RI DMV Knowledge Test as the course's final exam. You can enroll from 15 years and 10 months old, though the permit itself waits until 16. Since 1 July 2022 no online driver education course is accepted in Rhode Island.",
        trap:
          "The course does not replace the exam. It is a gate you pass through before applying, not an alternative route.",
        excerptKey: "permit-two-requirements",
        sourceLabel: "Rhode Island Driver's Manual - Section I Before Getting a Limited Learner Permit",
        sourceUrl: hb(10),
      },
      {
        id: "ri_s4_02",
        topic: "rules",
        question:
          "The Rhode Island manual gives three questions to answer before you pass another vehicle. What are they?",
        choices: [
          "Is it necessary, is it quick, is it legal",
          "Can I see, can I be seen, can I stop",
          "Is the road straight, is it dry, is it clear",
          "Is passing legal, is passing safe, is passing worth it",
        ],
        correctIndex: 3,
        explanation:
          "Legal, safe and worth it - and the manual says all three must be yes before you justify the pass.",
        context:
          "The third one does the most work. Passing to gain thirty seconds on a two-lane road is the classic example of a maneuver that is legal and technically safe and still not worth the risk. Rhode Island backs the first question with a long list of places passing is prohibited: hills, curves, railroad crossings, intersections, tunnels, bridges and no-passing zones.",
        trap:
          "Most drivers only ask the first two. The third is what the manual added to stop the pass that meets the letter of the law and still ends badly.",
        excerptKey: "passing-three-questions",
        sourceLabel: "Rhode Island Driver's Manual - Section III Passing Another Vehicle",
        sourceUrl: hb(33),
      },
      {
        id: "ri_s4_03",
        topic: "safety",
        question:
          "The Rhode Island manual describes an orderly visual search pattern. What is the far range it asks you to scan?",
        choices: [
          "The 4 to 6 second range",
          "The 12 to 15 second target area",
          "Half a mile in all conditions",
          "The next intersection only",
        ],
        correctIndex: 1,
        explanation:
          "The 12 to 15 second target area - the ground you will be covering twelve to fifteen seconds from now. You scan that, glance at the mirrors, check the nearer 4 to 6 second range, then look far ahead again.",
        context:
          "The pattern exists to stop drivers fixating on the bumper in front. Its companion is the zone system: six zones of space around the vehicle, each a lane wide and extending as far as you can see, which are either open or closed depending on whether something blocks your line of sight or your path.",
        trap:
          "The 4 to 6 second range is real but it is the near half of the pattern. Only scanning that is what leaves drivers surprised by things they could have seen ten seconds earlier.",
        excerptKey: "visual-search-12-15",
        sourceLabel: "Rhode Island Driver's Manual - Section VII Orderly Visual Search Pattern",
        sourceUrl: hb(50),
      },
      {
        id: "ri_s4_04",
        topic: "signals",
        question:
          "A green arrow shows for your turning lane. What does the Rhode Island manual call this, and what does it mean?",
        choices: [
          "An advisory turn, which still requires you to yield",
          "A permissive turn, allowed only when oncoming traffic clears",
          "A protected turn lane, where oncoming traffic is held for you",
          "A signal that the intersection is under police control",
        ],
        correctIndex: 2,
        explanation:
          "A green arrow gives you a protected turn. The manual's phrase is protected turn lane, and it means oncoming traffic has been stopped so you can turn without picking a gap.",
        context:
          "Contrast it with the circular green, which permits a left turn but leaves you to yield, and with the flashing yellow arrow, which permits the turn while oncoming traffic still has a steady green. Rhode Island uses all three, and the difference between them is the whole question of who has to wait.",
        trap:
          "Protected does not mean you stop looking. Pedestrians in the crosswalk you are turning across are not held by your arrow.",
        excerptKey: "green-arrow",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Traffic Lights/Signals",
        sourceUrl: hb(41),
      },
      {
        id: "ri_s4_05",
        topic: "rightOfWay",
        question:
          "You are crossing a sidewalk to reach the street from a parking lot. Who has the right of way?",
        choices: [
          "All traffic already on the sidewalk",
          "You, because you are on a driveway",
          "Whoever arrives first",
          "Pedestrians only, not cyclists",
        ],
        correctIndex: 0,
        explanation:
          "Section 31-18-18 gives the right of way to all traffic proceeding along the sidewalk. That includes cyclists and anyone else lawfully using it, not only people on foot.",
        context:
          "It pairs with the manual's two-stop rule for leaving a driveway: stop at the sidewalk to check for people, then again at the curb line to check for traffic. Section 31-17-5 completes the picture by making you yield to everything on the highway before you enter it.",
        trap:
          "The word traffic in this section is not limited to vehicles on the road. Sidewalk traffic is traffic.",
        excerptKey: "rigl-sidewalk-yield",
        sourceLabel: "Rhode Island General Laws 31-18-18 - Right-of-way on sidewalks",
        sourceUrl: rigl("31-18-18"),
      },
      {
        id: "ri_s4_06",
        topic: "speed",
        question:
          "Rhode Island's manual gives one sentence of speed numbers. What does it say for most highways?",
        choices: ["45 to 55 mph", "55 mph only", "40 to 50 mph", "50 to 65 mph"],
        correctIndex: 3,
        explanation:
          "Fifty to sixty-five miles per hour on most highways, alongside 25 mph in residential areas. That single sentence is the whole of the manual's speed content.",
        context:
          "Everything else comes from the statute. Section 31-14-2 supplies 25 mph in business or residence districts, 50 mph elsewhere by day, 45 mph elsewhere by night, and 20 mph in a signed school zone during the day on school days. The Basic Speed Law sits over all of it.",
        trap:
          "The manual's 50 to 65 range describes posted highway limits, not an unposted default. Away from a highway with signs, the statutory 50 and 45 are the numbers.",
        excerptKey: "speeds-25-50-65",
        sourceLabel: "Rhode Island Driver's Manual - Section III Safe Driving on the Highway",
        sourceUrl: hb(35),
      },
      {
        id: "ri_s4_07",
        topic: "sharing",
        question:
          "How many bicycles may ride side by side on a Rhode Island roadway?",
        choices: ["One, in single file at all times", "Two", "Three", "As many as the lane width allows"],
        correctIndex: 1,
        explanation:
          "Two abreast is the limit on a roadway. On bicycle trails, paths or roadway sections set aside for bicycles the limit does not apply.",
        context:
          "Section 31-19-7 adds two conditions to riding two abreast: it must not unduly impede traffic, and on a laned roadway the pair must stay within a single lane. The manual gives the same two-bicycle figure and asks riders to keep as near to the right as they safely can.",
        trap:
          "Riders in a legal pair are not obliged to break formation the moment a car appears. The test is whether they are unduly impeding traffic.",
        excerptKey: "rigl-bicycle-two-abreast",
        sourceLabel: "Rhode Island General Laws 31-19-7 - Number of bicycles abreast",
        sourceUrl: rigl("31-19-7"),
      },
      {
        id: "ri_s4_08",
        topic: "parking",
        question:
          "You want to park on a Rhode Island one-way street. What does the manual require?",
        choices: [
          "Park on the right-hand side only",
          "Park with the driver's side to the curb",
          "Either side, within twelve inches of the edge, headed the way traffic goes",
          "Either side, provided you leave your hazard lights on",
        ],
        correctIndex: 2,
        explanation:
          "On a one-way road you may use either side, either wheel within twelve inches of the edge, and the vehicle must be headed in the same direction traffic goes.",
        context:
          "On a two-lane two-way road the rule is narrower: the right wheels within twelve inches of the right side or curb. Both rules sit under the general prohibition list - never on a sidewalk, in an intersection, on a bridge, in a tunnel, on railroad tracks or beside another parked car.",
        trap:
          "Facing the wrong way is the violation people forget on a one-way street, because the parking looks fine from the curb.",
        excerptKey: "park-one-way",
        sourceLabel: "Rhode Island Driver's Manual - Section III Where you may not park or stop",
        sourceUrl: hb(33),
      },
      {
        id: "ri_s4_09",
        topic: "impairment",
        question:
          "Which combination has roughly the same amount of alcohol, according to the Rhode Island manual?",
        choices: [
          "A 12-ounce beer, a 4-to-5-ounce glass of wine and a 1 to 1 1/2 ounce shot of spirits",
          "A 12-ounce beer, an 8-ounce glass of wine and a 3-ounce shot of spirits",
          "A 16-ounce beer, a 4-ounce glass of wine and a 2-ounce shot of spirits",
          "A 12-ounce beer and a 12-ounce glass of wine",
        ],
        correctIndex: 0,
        explanation:
          "Those three servings carry about the same amount of alcohol, which is why switching from spirits to beer changes nothing about your blood alcohol concentration.",
        context:
          "How fast it affects you is a separate question. The manual lists the factors: how much you drank, how much you weigh, how much you ate first, how long you have been drinking, and how quickly your own body processes alcohol. Drinking on an empty stomach acts faster, and medication or fatigue amplify the effect.",
        trap:
          "\"I only had beer\" is a statement about volume, not about alcohol. The standard servings are equivalent by design.",
        excerptKey: "drink-equivalence",
        sourceLabel: "Rhode Island Driver's Manual - Section X Effects of Alcohol",
        sourceUrl: hb(60),
      },
      {
        id: "ri_s4_10",
        topic: "signs",
        question:
          "A yellow diamond sign shows a car with wavy lines behind it. What family of sign is this and what is it doing?",
        choices: [
          "Regulatory, stating a legal requirement",
          "Guide, telling you where a service is",
          "Construction, marking a temporary layout",
          "Warning, preparing you for a hazard ahead",
        ],
        correctIndex: 3,
        explanation:
          "Yellow diamonds are warning signs. They tell you what is coming - a curve, a crossing, a signal, a school, a change in the road - so you can adjust before you reach it.",
        context:
          "The Rhode Island manual divides its sign pages into three families. Regulatory signs state a legal requirement and disobeying one is an offense under section 31-13-4. Guide signs help you navigate. Warning signs prepare you for something ahead, and the manual's examples include Yield Sign Ahead, Stop Sign Ahead, Traffic Signal Ahead, Road Alignment, School Crossing, Detour and Entering Divided Highway.",
        trap:
          "Construction signs are also diamonds but in fluorescent yellow-green, orange or pink. The color, not the shape, is what separates them.",
        excerptKey: "signs-warning-list",
        sourceLabel: "Rhode Island Driver's Manual - Signs, Warning Signs",
        sourceUrl: hb(86),
      },
      {
        id: "ri_s4_11",
        topic: "safety",
        question:
          "Rhode Island's manual singles out one habit as dangerous in rain or snow. Which is it?",
        choices: [
          "Driving with the windows down",
          "Using cruise control",
          "Driving with the radio on",
          "Using the rear defroster",
        ],
        correctIndex: 1,
        explanation:
          "Cruise control. The manual warns never to use it in rain or snow, because if the car begins to hydroplane the system will accelerate to hold the set speed just as the tires lose grip.",
        context:
          "Hydroplaning is the front tires losing contact with a wet surface, taking your steering with them. You guard against it by keeping tires inflated to the manufacturer's standard, slowing down, and avoiding standing water and the places where water pools.",
        trap:
          "Cruise control feels like steadier speed control in bad weather. It is the opposite - it removes the one thing that should be varying.",
        excerptKey: "cruise-control-rain",
        sourceLabel: "Rhode Island Driver's Manual - Section V Driving in Inclement Weather",
        sourceUrl: hb(47),
      },
      {
        id: "ri_s4_12",
        topic: "rules",
        question:
          "What does Rhode Island law say about driving in the emergency breakdown lane?",
        choices: [
          "It is permitted below 25 mph",
          "It is permitted when traffic is stopped",
          "No person may operate a motor vehicle for travel in it",
          "It is permitted for right turns only",
        ],
        correctIndex: 2,
        explanation:
          "Section 31-15-16 bars operating a motor vehicle for travel in the emergency breakdown lane of any highway. It is a lane for stopping, not for moving.",
        context:
          "The manual's related advice covers what to do when you must stop: signal, move into the breakdown lane if you can, and beware of vehicles traveling wrongfully in it. If repairs are needed, get all four wheels off the main pavement and turn on the hazard flashers.",
        trap:
          "Congestion is the situation where the temptation is strongest, and it is exactly when emergency vehicles need that lane.",
        excerptKey: "rigl-breakdown-lane",
        sourceLabel: "Rhode Island General Laws 31-15-16 - Use of emergency break-down lane",
        sourceUrl: rigl("31-15-16"),
      },
      {
        id: "ri_s4_13",
        topic: "emergencies",
        question:
          "Smoke is coming from under the hood of your car. What does the Rhode Island manual tell you NOT to do?",
        choices: [
          "Open the hood while flames are shooting from under it",
          "Pull off the road",
          "Turn the ignition off",
          "Call 911",
        ],
        correctIndex: 0,
        explanation:
          "Do not open the hood if flames are shooting from under it. Opening it feeds the fire air, and the manual says plainly not to.",
        context:
          "The rest of the sequence is pull off immediately, switch the ignition off, get away from the vehicle and dial 911. If the fire is out of control the manual asks you to move at least 100 feet away, because a fuel fire can make the tank explode, and not to try to put it out yourself.",
        trap:
          "The instinct to look at the engine is what the warning is aimed at. There is nothing under the hood worth the risk.",
        excerptKey: "vehicle-fire-hood",
        sourceLabel: "Rhode Island Driver's Manual - Section V Vehicle Catches Fire",
        sourceUrl: hb(46),
      },
      {
        id: "ri_s4_14",
        topic: "signals",
        question:
          "Overhead lane signals show a green arrow above one lane and a red X above another. What are you looking at?",
        choices: [
          "A work zone lane closure",
          "A high occupancy vehicle lane",
          "A toll plaza",
          "Reversible lanes, where you may travel only under the green arrow",
        ],
        correctIndex: 3,
        explanation:
          "Reversible lanes. The manual's summary is that a motorist may travel in the lane with the green arrow, and by implication not in the one showing a red X.",
        context:
          "Reversible lanes change direction with the traffic flow, which is why the overhead signals rather than the pavement markings tell you which lanes are yours. The manual lists them alongside HOV lanes, shared left-turn lanes, restricted lanes and disability parking as markings and controls a Rhode Island driver should recognize.",
        trap:
          "The pavement arrows can point the way the lane runs during the other half of the day. In a reversible lane, the overhead signal wins.",
        excerptKey: "reversible-lanes",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Roadway Markings",
        sourceUrl: hb(39),
      },
      {
        id: "ri_s4_15",
        topic: "rightOfWay",
        question:
          "You are turning right at an intersection while a vehicle approaches from the opposite direction. What does the Rhode Island manual say?",
        choices: [
          "You have the right of way because you are turning across less traffic",
          "The vehicle directly approaching you has the right of way",
          "Whoever signals first has the right of way",
          "Neither has priority; both must stop",
        ],
        correctIndex: 1,
        explanation:
          "The vehicle directly approaching you has the right of way. The manual states it as step five of a proper right turn, and section 31-17-2 says the same for turns in either direction.",
        context:
          "Right turns are made from the extreme right-hand side of the road, and the manual warns against the habit of swinging left first, which makes the driver behind you think you are turning left. You also yield to pedestrians in the street, and to bicyclists on your right who are continuing straight ahead.",
        trap:
          "A right turn feels like it takes nothing from oncoming traffic, but if they are turning left into the same street you are both aiming at the same lane.",
        excerptKey: "right-turn-oncoming",
        sourceLabel: "Rhode Island Driver's Manual - Section III How To Turn",
        sourceUrl: hb(30),
      },
      {
        id: "ri_s4_16",
        topic: "speed",
        question:
          "Under Rhode Island law, at which of these must you drive at an appropriate reduced speed even without a sign?",
        choices: [
          "Only where a school zone is signed",
          "Only in a business or residence district",
          "Approaching and crossing an intersection or railroad grade crossing",
          "Only when the road is wet",
        ],
        correctIndex: 2,
        explanation:
          "Section 31-14-3 lists intersections and railroad grade crossings first among the places that require a reduced speed, regardless of what any sign says.",
        context:
          "The same section covers approaching and going around a curve, approaching a hill crest, traveling on narrow or winding roads, hazards involving pedestrians, weather or road conditions, and passing emergency vehicles, tow trucks, highway maintenance equipment or any stationary vehicle on the shoulder with lights showing.",
        trap:
          "The posted limit is a maximum for ideal conditions. This section is the statutory version of the manual's Basic Speed Law and it applies with no sign at all.",
        excerptKey: "rigl-reduced-speed",
        sourceLabel: "Rhode Island General Laws 31-14-3 - Conditions requiring reduced speed",
        sourceUrl: rigl("31-14-3"),
      },
      {
        id: "ri_s4_17",
        topic: "safety",
        question:
          "A child in Rhode Island is 7 years old, 50 inches tall and weighs 65 pounds. Where and how must they travel?",
        choices: [
          "In a rear seating position, in an approved child restraint system",
          "In the front seat with the airbag switched off",
          "In any seat, wearing an adult seat belt",
          "In a rear seat with no restraint required",
        ],
        correctIndex: 0,
        explanation:
          "Under 8 and under both 57 inches and 80 pounds means a child restraint system, in a rear seating position. This child meets all three conditions.",
        context:
          "The thresholds are a set. Once a child under 8 reaches either 57 inches or 80 pounds they use a safety belt instead, still in a rear seat. From 8 to 18 a belt in any seat is required. There are two exceptions to the rear seat rule: a vehicle with no back seat, and a back seat already full of other children.",
        trap:
          "Age alone does not release a child from the restraint. All three measurements matter, and the height and weight figures are 57 inches and 80 pounds.",
        excerptKey: "child-restraint-under-8",
        sourceLabel: "Rhode Island Driver's Manual - Section III Child Restraint Law",
        sourceUrl: hb(26),
      },
      {
        id: "ri_s4_18",
        topic: "rules",
        question:
          "Rhode Island's manual describes a three-point turn. When is it appropriate?",
        choices: [
          "On any road, whenever a U-turn is not possible",
          "Only on a one-way street",
          "Only at an intersection with a traffic signal",
          "To turn around on a narrow street, unless it is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "The three-point turn is the manual's answer to a street too narrow for a U-turn, and it is available unless something prohibits it.",
        context:
          "The sequence is signal and pull to the right, stop, signal left or use the hazards, check both directions, turn the wheel fully left and drive across the street, stop before the far curb, check again, turn fully right and back up, stop with the front of the car in the middle of the street, check again, then turn left and drive off. It is one of the maneuvers the skills test uses.",
        trap:
          "The checks between each leg are the part people drop under pressure. The manual repeats \"again, check for traffic in all directions\" twice for a reason.",
        excerptKey: "three-point-turn",
        sourceLabel: "Rhode Island Driver's Manual - Section III Turnabouts",
        sourceUrl: hb(31),
      },
      {
        id: "ri_s4_19",
        topic: "sharing",
        question:
          "Which of these does the Rhode Island manual describe as a major blind spot for a truck driver?",
        choices: [
          "The area immediately above the cab",
          "Directly in front of the truck",
          "The oncoming lane",
          "The shoulder to the left of the truck",
        ],
        correctIndex: 1,
        explanation:
          "Directly in front of the truck is one of the three the manual names. The others are the left and right front sides, and the area behind a trailer, which runs more than 50 feet.",
        context:
          "The manual calls these no zones and asks you to clear them quickly rather than linger. Cutting in front of a truck and then braking is particularly dangerous because it puts you in a blind spot and removes the stopping distance the driver had built up.",
        trap:
          "Most drivers only think of the area behind the trailer. The front blind spot is the one that catches people who pull in too soon after passing.",
        excerptKey: "truck-blind-spots",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Sharing The Road With Large Trucks",
        sourceUrl: hb(52),
      },
      {
        id: "ri_s4_20",
        topic: "signs",
        question:
          "Which of these does the Rhode Island manual picture as a guide sign rather than a regulatory or warning sign?",
        choices: [
          "No U-Turn",
          "Detour",
          "Mile Marker",
          "Slow Moving Vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Mile Marker is a guide sign. Detour and Slow Moving Vehicle are on the warning page, and No U-Turn is regulatory.",
        context:
          "The guide family is about orientation rather than obligation: freeway direction signs, exit and exit-ahead signs, mile markers, route shields for interstate, US and Rhode Island routes, and the service symbols for telephone, hotels, hospital, food and tourist attractions.",
        trap:
          "Detour looks like navigation and is a warning sign, because it exists to prepare you for a change in the road ahead.",
        excerptKey: "signs-regulatory-list",
        sourceLabel: "Rhode Island Driver's Manual - Signs",
        sourceUrl: hb(85),
      },
      {
        id: "ri_s4_21",
        topic: "impairment",
        question:
          "How does the Rhode Island manual describe the effect of mixing alcohol with another drug?",
        choices: [
          "A synergistic effect, in which the effects are multiplied",
          "A cancelling effect, in which one offsets the other",
          "No interaction, provided the drug is over the counter",
          "A delayed effect, which appears only after several hours",
        ],
        correctIndex: 0,
        explanation:
          "The manual calls it a synergistic effect, where the combination multiplies rather than adds. One drink taken alongside a cold or allergy remedy can affect your driving like several drinks.",
        context:
          "The wider point is that alcohol is not the only impairing substance. Drugs for headaches, colds, hay fever, allergies or nerves cause drowsiness; tranquilizers and sedatives are worse again; and the manual notes that marijuana slows reaction time, alters attention to the road, increases lane weaving and lengthens the time it takes eyes to recover from headlight glare.",
        trap:
          "Over the counter does not mean harmless behind the wheel. The manual asks you to check side effects with a doctor for prescription medicines specifically.",
        excerptKey: "synergistic-effect",
        sourceLabel: "Rhode Island Driver's Manual - Section X Effects of Alcohol and Other Drugs",
        sourceUrl: hb(60),
      },
      {
        id: "ri_s4_22",
        topic: "parking",
        question:
          "How far from a crosswalk at an intersection may you park in Rhode Island?",
        choices: ["8 feet", "10 feet", "15 feet", "No closer than 20 feet"],
        correctIndex: 3,
        explanation:
          "Twenty feet. It is one of three measured distances the manual and section 31-21-4 both give, alongside 8 feet from a hydrant and 30 feet from a stop sign or signal.",
        context:
          "The purpose is sight lines. A car parked right at the corner hides a pedestrian stepping off the curb from every driver approaching the intersection, which is exactly the collision the distance is meant to prevent. Parking on the crosswalk itself is prohibited outright.",
        trap:
          "The 20-foot figure is shared with fire station driveways, and the 30-foot figure belongs to stop signs and signals. Mixing them up is the most common way these questions are lost.",
        excerptKey: "rigl-no-parking-list",
        sourceLabel: "Rhode Island General Laws 31-21-4 - Places where parking or stopping prohibited",
        sourceUrl: rigl("31-21-4"),
      },
      {
        id: "ri_s4_23",
        topic: "signals",
        question:
          "What does the Rhode Island manual call a light that has been green for a while, and why does it matter?",
        choices: [
          "A fresh green, which means you have the full phase ahead of you",
          "A stale green, which may change and is a cue to cover the brake",
          "A protected green, which holds oncoming traffic",
          "A conditional green, which requires you to stop first",
        ],
        correctIndex: 1,
        explanation:
          "A stale green is one that has been green for a while and could change at any moment. A fresh green has just turned. The distinction tells you whether to expect a yellow before you reach the line.",
        context:
          "It links directly to the point of no return - the distance at which you can still stop without entering the intersection. Approaching a stale green, you cover the brake and decide early; approaching a fresh green, you still slow and look, because a driver on the other street may be running their red.",
        trap:
          "The word stale suggests the light is faulty. It just means it is due to change and you should plan for it.",
        excerptKey: "stale-fresh-green",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Traffic Lights/Signals",
        sourceUrl: hb(42),
      },
      {
        id: "ri_s4_24",
        topic: "safety",
        question:
          "Rhode Island requires the rear license plate to be lit. From how far must it be readable?",
        choices: ["20 feet", "40 feet", "At least 60 feet", "100 feet"],
        correctIndex: 2,
        explanation:
          "Sixty feet from the back of the vehicle. The manual states it in the night driving section, alongside the headlight rules.",
        context:
          "The lighting rules stack up around it. Section 31-24-7 requires a tail lamp emitting red light visible from 500 feet to the rear, section 31-24-1 sets when all of it must be lit, and the skills test examiner checks headlights, brake lights, directionals and hazards before you drive.",
        trap:
          "A burnt-out plate lamp is invisible from the driver's seat and is a routine reason for a traffic stop. It is on the manual's list of equipment you must inspect.",
        excerptKey: "plate-light-60",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Night Driving",
        sourceUrl: hb(52),
      },
      {
        id: "ri_s4_25",
        topic: "rules",
        question:
          "Rhode Island's manual sets out an ABCD approach to any turn. What does the B stand for?",
        choices: [
          "Brake before the turn to reduce speed to a safe level",
          "Blind spot check before committing",
          "Begin the turn from the correct lane position",
          "Balance the vehicle through the apex",
        ],
        correctIndex: 0,
        explanation:
          "B is brake, and the point is that the braking happens before the turn rather than during it. A is approach and plan your path, C is continue into the first half covering the brake, D is drive out by accelerating gently.",
        context:
          "Braking while the wheels are turned is what unsettles a car, which is why the mnemonic front-loads it. The rest of a proper turn is about position and timing: signal 100 feet out, get into the right lane position early, do not turn the wheels until the way is clear, and cancel the signal afterwards.",
        trap:
          "Turning the wheels while you wait to turn left is the habit the manual warns against. If you are struck from behind you are pushed into oncoming traffic.",
        excerptKey: "turn-abcd",
        sourceLabel: "Rhode Island Driver's Manual - Section III The Basics of making a turn",
        sourceUrl: hb(30),
      },
      {
        id: "ri_s4_26",
        topic: "rightOfWay",
        question:
          "You are about to turn right across a marked bicycle lane in Rhode Island. What does the law require?",
        choices: [
          "Signal and turn, since the bike lane ends at the intersection",
          "Sound your horn to warn any rider",
          "Stop completely before crossing the lane in every case",
          "Yield to any person operating a bicycle in the lane",
        ],
        correctIndex: 3,
        explanation:
          "Section 31-17-9 requires a driver about to cross or turn across a bicycle lane to yield to any person on a bicycle or in a motorized wheelchair using it.",
        context:
          "The manual adds the visual habit that makes this work: before turning right, check for bicyclists on your right or behind you who are continuing straight. You may cross a bike lane to turn a corner or reach a driveway, but you may not drive along one.",
        trap:
          "A rider in a bike lane is approaching from a blind spot on your right at a speed you tend to underestimate. Signaling alone does not discharge the duty to yield.",
        excerptKey: "rigl-bicycle-lane-yield",
        sourceLabel: "Rhode Island General Laws 31-17-9 - Yielding to riders on bicycle lane",
        sourceUrl: rigl("31-17-9"),
      },
      {
        id: "ri_s4_27",
        topic: "emergencies",
        question:
          "Your accelerator pedal sticks to the floor. What does the Rhode Island manual say to do?",
        choices: [
          "Switch off the ignition immediately",
          "Kick the side of the pedal to free it, and shift to neutral while braking",
          "Pull the parking brake and steer for the shoulder",
          "Press the clutch and coast to a stop without braking",
        ],
        correctIndex: 1,
        explanation:
          "Kick the side of the pedal once or twice to jar it free, and shift into neutral at the same time as you apply the brake. Then pick an escape route off the road and keep braking.",
        context:
          "Switching off the ignition comes last, once you are off the roadway, because doing it while moving costs you power steering and can lock the steering column. In a manual car, or when you are entering a curve, the manual asks you to get to neutral or depress the clutch immediately even at the cost of engine damage.",
        trap:
          "Turning the key is the instinctive fix and it removes your steering assistance at the exact moment you need to steer.",
        excerptKey: "stuck-accelerator",
        sourceLabel: "Rhode Island Driver's Manual - Section V Stuck Accelerator Pedal",
        sourceUrl: hb(44),
      },
      {
        id: "ri_s4_28",
        topic: "speed",
        question:
          "What does Rhode Island's statute mean when it calls a speed limit prima facie?",
        choices: [
          "It applies only where a sign is posted",
          "It applies only to commercial vehicles",
          "Speed above it is presumed unreasonable, and speed below it can still be unlawful",
          "It is an absolute maximum with no exceptions",
        ],
        correctIndex: 2,
        explanation:
          "A prima facie limit sets a presumption. Driving above it is prima facie evidence that your speed was neither reasonable nor prudent, and driving below it does not protect you if conditions made even that speed unsafe.",
        context:
          "Section 31-14-1 carries the underlying duty: never drive faster than is reasonable and prudent given the actual and potential hazards, and always slow enough to avoid a collision with anyone lawfully on the road. The prima facie numbers in 31-14-2 sit on top of that duty rather than replacing it.",
        trap:
          "Reading prima facie as \"only a guideline\" is the wrong half of it. It is the presumption that works against you at 60 in a 50, and it never works for you in an ice storm.",
        excerptKey: "rigl-reasonable-speed",
        sourceLabel: "Rhode Island General Laws 31-14-1 - Reasonable and prudent speeds",
        sourceUrl: rigl("31-14-1"),
      },
      {
        id: "ri_s4_29",
        topic: "licensing",
        question:
          "You are 18 and applying for your first Rhode Island license. How long must you hold the permit before your first road test?",
        choices: [
          "At least 30 days",
          "At least three months",
          "At least six months",
          "No waiting period applies at 18",
        ],
        correctIndex: 0,
        explanation:
          "Thirty days. The DMV's road test page sets a 30-day minimum for anyone 18 or over, against six months for a permit holder under 18.",
        context:
          "The adult route is shorter in other ways too: no 33-hour classroom course, no logged 50 hours, and no supervised-driving affidavit. What does not change is the knowledge exam, the vision screening, or the requirement to pass a skills test before a first license.",
        trap:
          "Turning 18 while holding an under-18 permit does not retroactively shorten the six months you have already been asked to serve, so plan the road test date rather than assuming it moves.",
        excerptKey: "dmv-road-test-18-plus",
        sourceLabel: "RI DMV - Road Tests",
        sourceUrl: ROADTEST,
      },
      {
        id: "ri_s4_30",
        topic: "sharing",
        question:
          "You are approaching a horse being ridden along a Rhode Island road. What does state law require?",
        choices: [
          "Sound your horn to warn the rider",
          "Pass at normal speed, leaving a full lane",
          "Stop until the horse has left the roadway",
          "Reduce speed and refrain from sounding the horn or making other loud noises",
        ],
        correctIndex: 3,
        explanation:
          "Slow down, and do not sound the horn or make other loud noises. The manual lists it among the laws you must know.",
        context:
          "The logic is the same one behind the white cane rule and the ban on earphones: the road is shared with users who react to sound. Rhode Island also posts stop signs at bridle path crossings in parks, reservations and on state highways, where a complete stop is required.",
        trap:
          "A horn is what a driver reaches for to be noticed, and it is the specific thing this law forbids.",
        excerptKey: "horses-on-highway",
        sourceLabel: "Rhode Island Driver's Manual - Section IX Laws You Must Know",
        sourceUrl: hb(58),
      },
      {
        id: "ri_s4_31",
        topic: "signs",
        question:
          "A sign at a Rhode Island intersection reads NO TURN ON RED. What does it change?",
        choices: [
          "Nothing, because right on red is already prohibited in Rhode Island",
          "It removes the default permission to turn right after stopping at the red light",
          "It prohibits turning at that intersection at any time",
          "It applies only between 7 am and 9 am",
        ],
        correctIndex: 1,
        explanation:
          "Rhode Island permits a right turn on red by default after a complete stop. The sign takes that permission away at that intersection, and so does a steady red arrow.",
        context:
          "Section 31-13-4 makes it an offense to disobey any official traffic control device, so the sign carries the force of law on its own. The permission also has conditions attached even where no sign appears: you stop first, and you yield to pedestrians and to other traffic.",
        trap:
          "Because the turn is permitted rather than granted, learners look for a sign that allows it and conclude it is not allowed. In Rhode Island the sign to look for is the one that forbids it.",
        excerptKey: "right-on-red-law",
        sourceLabel: "Rhode Island Driver's Manual - Section IX Laws You Must Know",
        sourceUrl: hb(58),
      },
      {
        id: "ri_s4_32",
        topic: "rules",
        question:
          "What does Rhode Island law require of a driver who is about to stop or slow suddenly?",
        choices: [
          "Nothing, since brake lights do the work automatically",
          "Sounding the horn if traffic is close behind",
          "Giving an appropriate signal to the driver immediately behind, when there is a chance to",
          "Moving into the right lane first",
        ],
        correctIndex: 2,
        explanation:
          "Section 31-16-7 requires an appropriate signal to the driver immediately behind before you stop or suddenly slow, whenever there is an opportunity to give one.",
        context:
          "The signal may be by hand and arm or by lamp: arm down means stopping or slowing. The manual reinforces the same idea in its rear-end collision advice, which asks you to flash your brake lights early when someone is closing on you.",
        trap:
          "Brake lights only illuminate once you are already braking. The statute is about warning before that, which is what the hand signal and the early tap are for.",
        excerptKey: "rigl-signal-stops",
        sourceLabel: "Rhode Island General Laws 31-16-7 - Signaling of stops",
        sourceUrl: rigl("31-16-7"),
      },
      {
        id: "ri_s4_33",
        topic: "safety",
        question:
          "What is the Rhode Island manual's advice for winter braking in a car without anti-lock brakes?",
        choices: [
          "Brake early and gently pump the pedal",
          "Press the pedal firmly and hold it down",
          "Use the parking brake to slow the rear wheels",
          "Shift to neutral and coast to a stop",
        ],
        correctIndex: 0,
        explanation:
          "Without ABS you brake early, brake slowly and gently pump the pedal. With ABS you do the opposite - press firmly and hold, letting the system do the modulation.",
        context:
          "Winter driving in the manual is mostly about margin: drive well below the posted limit, increase your following distance, and slow before intersections, off-ramps, bridges and shady areas where black ice forms. Black ice on a road that looks merely wet is the hazard it names by name.",
        trap:
          "The two braking techniques are exact opposites, and doing the ABS one in a non-ABS car locks the wheels. Know which car you are driving before the road ices over.",
        excerptKey: "winter-braking",
        sourceLabel: "Rhode Island Driver's Manual - Section V Driving in Inclement Weather",
        sourceUrl: hb(46),
      },
      {
        id: "ri_s4_34",
        topic: "impairment",
        question:
          "What does implied consent mean for a driver in Rhode Island?",
        choices: [
          "That you have agreed to random roadside stops",
          "That your passengers consent to being tested",
          "That a conviction is automatic if you are arrested",
          "That by operating a vehicle here you have consented to chemical tests of breath, blood, saliva or urine",
        ],
        correctIndex: 3,
        explanation:
          "Operating a motor vehicle in Rhode Island is itself the consent. Anyone who drives here is deemed to have agreed to chemical testing to determine the chemical content of their body fluids or breath.",
        context:
          "That is why refusal is a distinct offense with its own penalty ladder, starting at a six-month minimum license suspension for a first refusal along with a fine, a highway safety assessment, community service and a course on driving while intoxicated. The statute limits testing to no more than two complete tests.",
        trap:
          "Consent given in advance can still be withdrawn at the roadside - it is the consequences of withdrawing it that the law fixes, not the physical act.",
        excerptKey: "implied-consent",
        sourceLabel: "Rhode Island Driver's Manual - Section X Implied Consent",
        sourceUrl: hb(61),
      },
      {
        id: "ri_s4_35",
        topic: "rightOfWay",
        question:
          "Rhode Island's manual gives a general warning about right of way. What is it?",
        choices: [
          "That right of way belongs to the larger vehicle",
          "That the law grants right of way, but the other driver may not, so yield anyway",
          "That right of way is decided by whoever signals first",
          "That right of way does not apply at uncontrolled intersections",
        ],
        correctIndex: 1,
        explanation:
          "The manual's line is that the law grants right of way but the other driver may not, and that yielding in those cases may save a life. Never take the right of way for granted.",
        context:
          "The manual defines right of way as the privilege of having or giving another motorist immediate use of a certain roadway - a framing that puts the emphasis on giving. Its advice at every intersection is to slow down, cover the brake and proceed with caution, because the driver running a red is the one you cannot legislate for.",
        trap:
          "Being right is worth nothing in a collision. Rhode Island's manual makes the point explicitly rather than leaving it implied.",
        excerptKey: "right-of-way-never-assume",
        sourceLabel: "Rhode Island Driver's Manual - Section III Safe Driving on the Highway",
        sourceUrl: hb(36),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The rules Rhode Island learners say caught them, and the numbers the manual either buries or leaves to the statute: the three-second stop, the parking distances, the night speed limit, and a phone law the book has not caught up with.",
    questions: [
      {
        id: "ri_s5_01",
        topic: "rules",
        question:
          "You are on a Rhode Island skills test course and reach a stop sign that is not at any intersection. What should you do?",
        choices: [
          "Slow and continue, since there is no cross traffic",
          "Treat it as advisory, because it is on private property",
          "Stop only if the examiner is watching",
          "Stop completely, exactly as you would at any other stop sign",
        ],
        correctIndex: 3,
        explanation:
          "Stop. A stop sign controls the point where it stands, not only intersections, and section 31-13-4 makes disobeying any official traffic control device an offense.",
        context:
          "Rhode Island's skills test has been run on a closed course since June 2020, with the examiner outside the vehicle, so the stop signs on it are part of the test rather than scenery. A stop sign violation is on the manual's list of immediate failures, and the stop itself is the three-second one the manual describes.",
        trap:
          "Rhode Island learners describe being told the test is over and then driving to meet the examiner past a stop sign - and failing there, after everything else went right. The instruction is to follow all the rules of the road, and it means it.",
        excerptKey: "skills-test-immediate-failure",
        sourceLabel: "Rhode Island Driver's Manual - Section I What is covered on the driving skills test",
        sourceUrl: hb(12),
        commonlyMissed: true,
      },
      {
        id: "ri_s5_02",
        topic: "parking",
        question:
          "Rank these Rhode Island parking distances correctly, from smallest to largest: fire hydrant, crosswalk at an intersection, stop sign.",
        choices: [
          "8 feet, 20 feet, 30 feet",
          "10 feet, 15 feet, 25 feet",
          "15 feet, 20 feet, 30 feet",
          "20 feet, 30 feet, 50 feet",
        ],
        correctIndex: 0,
        explanation:
          "Eight feet from a hydrant, 20 feet from a crosswalk at an intersection, 30 feet from a stop sign, traffic light or flashing beacon. All three appear in the manual and in section 31-21-4.",
        context:
          "Two more complete the set: 50 feet from the nearest rail of a railroad crossing, and 20 feet from a fire station driveway or 75 feet if you are across the street from it and the area is signed. Rhode Island learners preparing for the exam single out the hydrant and corner distances as the specifics you have to actually memorize.",
        trap:
          "Every one of these differs from the figures used in neighboring states, and the hydrant is the worst offender - 8 feet where most of the country uses 15.",
        excerptKey: "no-park-hydrant-crosswalk",
        sourceLabel: "Rhode Island Driver's Manual - Section III Where you may not park or stop",
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "ri_s5_03",
        topic: "speed",
        question:
          "It is 4 pm in December, half an hour after sunset, on an unposted road outside any town in Rhode Island. What is the prima facie limit?",
        choices: ["25 mph", "50 mph", "45 mph", "55 mph"],
        correctIndex: 2,
        explanation:
          "Forty-five. Section 31-14-2 defines daytime as ending half an hour after sunset, so once that half hour has passed the unposted limit outside a business or residence district drops from 50 to 45.",
        context:
          "This is the kind of question the statute can support and the manual cannot: its only speed sentence is 25 mph residential and 50 to 65 mph on most highways. The DMV says the exam draws on the motor vehicle laws as well as the rules of the road, which is why the statutory figures are worth knowing.",
        trap:
          "The switch is tied to the clock relative to sunset, not to whether it feels dark or whether your headlights are on. In a Rhode Island December that boundary arrives in the middle of the afternoon.",
        excerptKey: "rigl-daytime-nighttime",
        sourceLabel: "Rhode Island General Laws 31-14-2 - Prima facie limits",
        sourceUrl: rigl("31-14-2"),
        commonlyMissed: true,
      },
      {
        id: "ri_s5_04",
        topic: "safety",
        question:
          "You are following a car on a wet Rhode Island road at night, behind a truck that stops often. How many seconds should the gap be?",
        choices: [
          "Three, since the rule is fixed",
          "More than three, because each imperfect condition adds a second",
          "Two, because wet roads mean slower traffic anyway",
          "Four exactly, in all bad conditions",
        ],
        correctIndex: 1,
        explanation:
          "Rhode Island's rule is three seconds plus one more for each imperfect condition. Wet road, darkness and a vehicle that stops frequently are three conditions, so the gap grows well past three.",
        context:
          "The manual describes the count precisely: pick a fixed object, start counting as the vehicle ahead passes it, and if your front bumper reaches it before you finish counting to three you are too close. It also sets a separate minimum of four seconds behind a motorcycle and 50 feet behind a large truck.",
        trap:
          "\"Three seconds\" is the headline and it is only the starting point. The additive part is the half of the rule people forget in exactly the weather where it matters.",
        excerptKey: "three-second-adverse",
        sourceLabel: "Rhode Island Driver's Manual - Section VII The Three Second Rule",
        sourceUrl: hb(51),
        commonlyMissed: true,
      },
      {
        id: "ri_s5_05",
        topic: "signals",
        question:
          "The light turns green and you are first in line waiting to turn left. Oncoming traffic is approaching. What must you do?",
        choices: [
          "Turn immediately, since you were waiting first",
          "Turn if the oncoming driver is still braking",
          "Sound your horn and complete the turn",
          "Yield to oncoming traffic close enough to be an immediate hazard",
        ],
        correctIndex: 3,
        explanation:
          "You yield. Section 31-13-6 says traffic turning left on a circular green gives way to oncoming vehicles that are close enough to constitute an immediate hazard, whoever arrived at the light first.",
        context:
          "Only a green arrow protects the turn. Once you have yielded and signaled, the statute flips the duty the other way - drivers approaching from the opposite direction must then yield to you while you complete the turn. You also give way to pedestrians in the crosswalk you must cross.",
        trap:
          "Rhode Island drivers habitually take the left turn the instant the light changes, and a local thread on the subject spells out the correction: oncoming traffic going straight has the right of way, and the left turn yields. Being first in the queue is not a right of way.",
        excerptKey: "rigl-green-left-turn-yield",
        sourceLabel: "Rhode Island General Laws 31-13-6 - Meaning of traffic control signals",
        sourceUrl: rigl("31-13-6"),
        commonlyMissed: true,
      },
      {
        id: "ri_s5_06",
        topic: "sharing",
        question:
          "A school bus with red lights flashing is stopped in a supermarket parking lot in Rhode Island. Must you stop?",
        choices: [
          "Yes, because the duty applies on private roads and in parking lots as well as public highways",
          "No, because the law applies only to public highways",
          "Only if children are visible",
          "Only if you are traveling in the same direction as the bus",
        ],
        correctIndex: 0,
        explanation:
          "Yes. The manual states that the requirement applies not only on public highways but also on private roads and in parking lots, and the statute names private ways and private or public parking areas.",
        context:
          "The duty runs in both directions of travel and lasts until the red lights stop flashing or the bus moves off. The one exception is a divided highway with the bus on the other roadway. Section 31-20-12 separately bars following a school bus in the same lane closer than 50 feet.",
        trap:
          "A parking lot feels like private space where road rules relax. For school buses it is the opposite - the statute names parking areas specifically.",
        excerptKey: "rigl-school-bus-stop",
        sourceLabel: "Rhode Island General Laws 31-20-12 - Stopping for school bus required",
        sourceUrl: rigl("31-20-12"),
      },
      {
        id: "ri_s5_07",
        topic: "rightOfWay",
        question:
          "A pedestrian with a guide dog is waiting at a corner in Rhode Island and you have stopped at a red light, intending to turn right. What should you do?",
        choices: [
          "Complete the turn quickly before they step off",
          "Edge forward so they can hear your engine",
          "Wait rather than turning, since they will not expect a right turn on red",
          "Sound the horn briefly and then turn",
        ],
        correctIndex: 2,
        explanation:
          "Wait. The manual warns that pedestrians who are visually impaired use the sound of traffic to judge when it is safe, and that they will not expect a driver to make a right turn on red after stopping.",
        context:
          "Where such a pedestrian is crossing or attempting to cross ahead of you, Rhode Island requires a complete stop before you reach the intersection and a yield of the right of way. Failing to yield can bring a fine of up to $1,000. The manual adds that an electric or hybrid vehicle removes the engine noise they are listening for.",
        trap:
          "Right on red is a permission, not an obligation, and this is exactly the situation the manual mentions when it says you never have to take it.",
        excerptKey: "visually-impaired-sound",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Pedestrians with a Visual Impairment",
        sourceUrl: hb(54),
      },
      {
        id: "ri_s5_08",
        topic: "impairment",
        question:
          "A driver under 18 in Rhode Island is convicted of driving while impaired at 0.03 percent BAC. What is the first-violation license suspension?",
        choices: [
          "One to three months",
          "Six to twelve months",
          "Thirty days",
          "Suspension until age 21",
        ],
        correctIndex: 1,
        explanation:
          "Six to twelve months for a first violation under 18, along with a special course on driving while intoxicated, a $150 highway safety assessment or community restitution, and possible treatment.",
        context:
          "The ladder steepens quickly. A second violation under 18 means suspension until age 21, and a third adds a further two years. An 18-to-21-year-old on a first DWI faces one to three months plus a $250 fine and 30 hours of community restitution - a lighter penalty for the same blood alcohol level, purely because of age.",
        trap:
          "The under-18 and 18-to-21 ladders are different, and the shorter one is easy to misremember as the general rule. Under 18 the first suspension starts at six months.",
        excerptKey: "dwi-under-18-first",
        sourceLabel: "Rhode Island Driver's Manual - Section X Penalties",
        sourceUrl: hb(62),
      },
      {
        id: "ri_s5_09",
        topic: "safety",
        question:
          "You are sitting at a red light in Rhode Island and pick up your phone to read a message. Is that lawful for an adult driver?",
        choices: [
          "Yes, because the vehicle is stopped",
          "Yes, provided you put it down before the light changes",
          "Yes, if you are in the right-hand lane",
          "No, because driving includes being temporarily stationary at a traffic light",
        ],
        correctIndex: 3,
        explanation:
          "No. Section 31-22-30 defines driving to include operating a motor vehicle while temporarily stationary because of traffic, a traffic light or a stop sign, so the red light does not create a window.",
        context:
          "You are outside the rule only when the vehicle has pulled over to the side of or off an active roadway and stopped somewhere it can safely stay, or when it is inoperable. The hands-free exception covers a device used through an earpiece, headset or short-range wireless connection, or activated with a single swipe or tap.",
        trap:
          "The stationary exemption is the assumption almost every driver makes, and the 2025 amendment closes it in as many words. Fines run $100, $150 and $250.",
        excerptKey: "rigl-driving-includes-stopped",
        sourceLabel: "Rhode Island General Laws 31-22-30 - Distracted driving prohibited",
        sourceUrl: rigl("31-22-30"),
        commonlyMissed: true,
      },
      {
        id: "ri_s5_10",
        topic: "rules",
        question:
          "A Rhode Island driver ahead of you is about to make a left turn. May you pass on the right?",
        choices: [
          "Yes, provided you stay on the paved roadway and there is room",
          "No, passing on the right is never permitted in Rhode Island",
          "Yes, including using the shoulder if the lane is narrow",
          "Only if the driver has signaled for at least 100 feet",
        ],
        correctIndex: 0,
        explanation:
          "Yes. A vehicle making or about to make a left turn is one of the two situations Rhode Island permits a pass on the right, and the pass must stay on the pavement.",
        context:
          "The other permitted situation is a road wide enough for two or more lanes in your direction, free of obstructions and parked vehicles, including a one-way street. Section 31-15-5 adds that the movement may only be made under conditions permitting it in safety.",
        trap:
          "Using the shoulder to get around a left-turner is the version that turns a lawful pass into an offense. The statute says in no event may the movement be made by driving off the main-traveled portion of the roadway.",
        excerptKey: "rigl-no-passing-off-pavement",
        sourceLabel: "Rhode Island General Laws 31-15-5 - Overtaking on the right",
        sourceUrl: rigl("31-15-5"),
      },
      {
        id: "ri_s5_11",
        topic: "signs",
        question:
          "Rhode Island window tint law follows a federal standard. What is the minimum visible light transmittance?",
        choices: ["35 percent", "50 percent", "Not less than 70 percent", "80 percent"],
        correctIndex: 2,
        explanation:
          "Not less than 70 percent visible light transmittance, following the Federal Motor Vehicle Safety Standards. The fine for a violation is $250.",
        context:
          "The manual puts this in its appendix of miscellaneous motor vehicle laws alongside two other equipment limits worth knowing: a vehicle's height may not be altered by more than four inches from the manufacturer's specification, and the noise limit is 86 dbA in speed zones of 35 mph or less and 90 dbA above that.",
        trap:
          "Legal tint on a car bought in another state is not automatically legal here, and window tint is one of the items the skills test examiner inspects before you are allowed to drive.",
        excerptKey: "window-tint-70",
        sourceLabel: "Rhode Island Driver's Manual - Appendix, Miscellaneous Motor Vehicle Laws",
        sourceUrl: hb(72),
      },
      {
        id: "ri_s5_12",
        topic: "licensing",
        question:
          "How many times can a Rhode Island learner's permit be renewed before you must retake the permit test?",
        choices: ["Once", "Twice", "Three times", "There is no limit"],
        correctIndex: 1,
        explanation:
          "Twice. After two renewals you retake the learner's permit test, and the DMV adds that a permit expired for more than two years cannot be renewed at all.",
        context:
          "Renewals go by mail, by drop box or in person with a reservation, never online. The manual gives the same ceiling from the other direction: the permit is valid until the holder turns 18 and may be renewed a maximum of two times.",
        trap:
          "The road test failure ladder can outrun the permit. After three or more failures the wait is 180 days each time, which is how a permit gets exhausted and the knowledge exam comes round again.",
        excerptKey: "dmv-permit-renewals",
        sourceLabel: "RI DMV - New License Permits",
        sourceUrl: NEWPERMIT,
      },
      {
        id: "ri_s5_13",
        topic: "safety",
        question:
          "How long does the Rhode Island manual say the average driver takes to move their foot to the brake after seeing danger?",
        choices: [
          "About a quarter of a second",
          "About half a second",
          "A full second",
          "About three-quarters of a second",
        ],
        correctIndex: 3,
        explanation:
          "About three-quarters of a second, on dry level pavement. That is reaction time alone, before the brakes have done anything at all.",
        context:
          "The manual splits stopping into perception distance, reaction distance and braking distance, and notes that the faster you go the farther you travel before the pedal is even touched. Wet or icy roads then stretch the braking part, which is why the same speed needs far more room in bad weather.",
        trap:
          "Three-quarters of a second sounds negligible until you convert it: at 50 mph it is about 55 feet, covered before you have begun to slow.",
        excerptKey: "reaction-time",
        sourceLabel: "Rhode Island Driver's Manual - Section III Stopping Your Vehicle",
        sourceUrl: hb(28),
      },
      {
        id: "ri_s5_14",
        topic: "speed",
        question:
          "Rhode Island's school-zone speed limit has a condition attached that many drivers miss. What is it?",
        choices: [
          "It applies only where appropriate warning signs are posted",
          "It applies only when a crossing guard is present",
          "It applies only on state highways",
          "It applies only between 8 am and 3 pm",
        ],
        correctIndex: 0,
        explanation:
          "The 20 mph limit within 300 feet of a school's entrances and exits applies only where appropriate warning signs are posted near the boundaries of that area. Section 31-14-2 says so expressly.",
        context:
          "The other conditions are that it applies in the daytime and on days when school is open, with daytime meaning half an hour before sunrise to half an hour after sunset. Away from the signed zone, the manual's advice still stands: reduce speed and use extra caution wherever children are around.",
        trap:
          "Reading the exception the wrong way is the danger. It does not mean you can ignore a marked school zone when no children are visible - it means the reduced limit exists only where the state has actually posted it.",
        excerptKey: "rigl-school-zone-signs",
        sourceLabel: "Rhode Island General Laws 31-14-2 - Prima facie limits",
        sourceUrl: rigl("31-14-2"),
      },
      {
        id: "ri_s5_15",
        topic: "rightOfWay",
        question:
          "Two vehicles arrive at a Rhode Island intersection from different roads at about the same time and there are no signs or signals. Which driver yields?",
        choices: [
          "The driver on the right yields to the driver on the left",
          "The driver going straight yields to the turning driver",
          "The driver on the left yields to the driver on the right",
          "Neither, since both must stop and negotiate",
        ],
        correctIndex: 2,
        explanation:
          "The driver on the left yields to the driver on the right. Section 31-17-1 states it, and the manual repeats it in the list of laws you must know.",
        context:
          "The rule is a tie-break rather than a general priority. Whoever entered the intersection first from a different road already has the right of way, and the left-yields-to-right rule only decides genuinely simultaneous arrivals. The manual also tells you to treat an uncontrolled intersection as though a yield sign were posted.",
        trap:
          "Reversing the rule is easy under pressure. The mnemonic that survives is that you give way to the car whose driver's door you would hit.",
        excerptKey: "rigl-row-vehicle-on-right",
        sourceLabel: "Rhode Island General Laws 31-17-1 - Right-of-way in absence of signs or signals",
        sourceUrl: rigl("31-17-1"),
      },
      {
        id: "ri_s5_16",
        topic: "signals",
        question:
          "You want to move into a center two-way left-turn lane in Rhode Island to wait for a gap. How early may you enter it?",
        choices: [
          "Anywhere along the lane, provided you signal",
          "No more than 100 feet before the turn",
          "No more than 300 feet before the turn",
          "As soon as the broken line begins",
        ],
        correctIndex: 1,
        explanation:
          "Not unless you intend to turn within 100 feet. The manual states it directly for the shared turn lane, so it is not a queuing lane or a merge lane.",
        context:
          "The markings tell you what the lane is: solid yellow on the outside because you may not cross into opposing traffic, broken yellow inside because drivers from both directions share it. Both directions use it for left turns in and out of side streets and driveways.",
        trap:
          "Entering early and drifting along the lane puts you nose to nose with somebody doing the same from the other direction. The 100 feet is what keeps that from happening.",
        excerptKey: "shared-turn-lane",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Roadway Markings",
        sourceUrl: hb(38),
      },
      {
        id: "ri_s5_17",
        topic: "rules",
        question:
          "Where does Rhode Island law say you must stop when a stop sign has no crosswalk and no stop line?",
        choices: [
          "Level with the sign itself",
          "Fifteen feet back from the intersecting road",
          "Wherever the vehicle ahead of you stopped",
          "At the point nearest the intersecting road where you can see approaching traffic",
        ],
        correctIndex: 3,
        explanation:
          "At the nearest point to the intersecting highway from which you have a view of approaching traffic, before entering the intersection. That is the third rung of a ladder: crosswalk first, stop line if there is no crosswalk, and this if there is neither.",
        context:
          "Rhode Island's manual reproduces section 31-20-9 word for word in its stopping section, so the wording is worth reading twice. The DMV's road-test guidance adds a practical note: if your view is still blocked after stopping behind the crosswalk, move up until you can see and stop again.",
        trap:
          "Stopping at the sign and no further is what leaves a driver blind behind a parked truck. Stopping twice is not a violation; stopping where you cannot see is.",
        excerptKey: "stop-sign-position",
        sourceLabel: "Rhode Island Driver's Manual - Section III RIGL 31-20-9 Obedience to stop signs",
        sourceUrl: hb(32),
      },
      {
        id: "ri_s5_18",
        topic: "emergencies",
        question:
          "The Rhode Island manual gives an off-road recovery procedure. What is the first thing to do after you drop a wheel onto the shoulder?",
        choices: [
          "Hold the wheel firmly and ease off the accelerator, avoiding the brake",
          "Steer back onto the pavement immediately",
          "Brake hard to reduce speed before returning",
          "Accelerate to keep the vehicle stable",
        ],
        correctIndex: 0,
        explanation:
          "Grip the wheel firmly with both hands, ease off the accelerator and let the vehicle slow, avoiding the brake if you can. Only then do you set up the return.",
        context:
          "The rest of the procedure is to straddle the roadway edge, choose a place where the shoulder is closest to the level of the pavement, check traffic and signal, steer sharply back on, then counter-steer sharply the moment the front tires touch the road so you do not shoot across into oncoming traffic.",
        trap:
          "Snatching the wheel back onto the pavement at speed is what turns a scare into a rollover, especially where there is a drop-off at the edge.",
        excerptKey: "off-road-recovery",
        sourceLabel: "Rhode Island Driver's Manual - Section V Off Road Recovery",
        sourceUrl: hb(44),
      },
      {
        id: "ri_s5_19",
        topic: "safety",
        question:
          "A Rhode Island driver is stopped by police at night and reaches for the glovebox as the officer approaches. What does the manual say about this?",
        choices: [
          "It is expected, since documents are needed quickly",
          "It is required if the interior lights are already on",
          "Do not reach for any documents until the officer asks",
          "It is fine provided you keep one hand on the wheel",
        ],
        correctIndex: 2,
        explanation:
          "The manual asks you not to anticipate the officer's request and not to reach for any documents until you are directed to. Keep both hands visible on the wheel until then.",
        context:
          "The rest of the sequence is signal right, slow, pull over as far right as you safely can without blocking a driveway, switch the engine off, put the window down, and at night turn on the interior lights and leave them on until the officer says otherwise. Leave your seat belt fastened until told to remove it.",
        trap:
          "Being helpful is what makes drivers reach into a bag or a glovebox while an officer is walking up in the dark. The manual's guidance is to be still.",
        excerptKey: "police-stop-hands",
        sourceLabel: "Rhode Island Driver's Manual - Section XII When Stopped by a Law Enforcement Officer",
        sourceUrl: hb(67),
      },
      {
        id: "ri_s5_20",
        topic: "impairment",
        question:
          "Which of these does Rhode Island law count as a violation for a driver under 21 even if they have not been drinking?",
        choices: [
          "Carrying an unopened container of alcohol in the vehicle without a parent present",
          "Driving a passenger who has been drinking",
          "Driving after 1 am",
          "Buying alcohol for someone else",
        ],
        correctIndex: 0,
        explanation:
          "Knowingly carrying liquor in any form, in containers opened or unopened, in any part of the vehicle brings a suspension of up to 30 days for a driver under 21, unless a parent or legal guardian is with them.",
        context:
          "There is a narrow employment exception for 16-to-21-year-olds transporting unopened alcohol in the course of their work. Simple possession of alcohol by anyone under 21 carries $150 to $750 for a first offense plus a minimum 60-day license suspension, and possible community service.",
        trap:
          "\"It was in the trunk and it was sealed\" is not a defense. The statute reaches any part of the vehicle, opened or unopened.",
        excerptKey: "underage-transport-alcohol",
        sourceLabel: "Rhode Island Driver's Manual - Section X, R.I.G.L. 3-8-10",
        sourceUrl: hb(64),
      },
      {
        id: "ri_s5_21",
        topic: "sharing",
        question:
          "A cyclist ahead of you moves into the middle of a narrow Rhode Island lane. What does the manual expect of you?",
        choices: [
          "Pass anyway, since the rider must keep right",
          "Sound your horn to move them over",
          "Follow closely to encourage them to move",
          "Be prepared to reduce speed or stop while they take the travel lane",
        ],
        correctIndex: 3,
        explanation:
          "Where a road is too narrow for a vehicle and a bicycle to travel safely side by side, the manual asks you to be ready to slow down or stop while the rider takes the travel lane.",
        context:
          "The keep-right duty in section 31-19-6 is qualified: as near to the right as practicable, exercising due care when passing a standing vehicle, and with an exception where signs or pavement markings direct otherwise. A lane too narrow to share is precisely the case where riding in the middle is the safe and lawful choice.",
        trap:
          "The horn is the wrong tool twice over. The manual warns it can startle a rider into swerving, and the rider is where the law allows them to be.",
        excerptKey: "bicycle-takes-lane",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Sharing the Road with Bicyclists",
        sourceUrl: hb(55),
      },
      {
        id: "ri_s5_22",
        topic: "signs",
        question:
          "You are following a slow-moving vehicle displaying an orange triangle with a red border on a Rhode Island road. What does the sign tell you?",
        choices: [
          "That the vehicle travels at low speed and you should expect to close on it quickly",
          "That the vehicle is broken down and stationary",
          "That the vehicle is carrying hazardous materials",
          "That the vehicle is an authorized emergency vehicle",
        ],
        correctIndex: 0,
        explanation:
          "The slow moving vehicle emblem marks a vehicle that travels well below the normal speed of traffic, so the gap between you closes far faster than it appears to.",
        context:
          "The manual pictures it among the warning signs. Rhode Island's approach speed rules cover the rest: slow down for hazards under section 31-14-3, keep the three-second gap and add a second for each imperfect condition, and pass only when it is legal, safe and worth it.",
        trap:
          "The most dangerous thing about a slow-moving vehicle is the closing speed. At 50 mph behind a vehicle doing 15, the gap shrinks by more than 50 feet a second.",
        excerptKey: "signs-warning-list",
        sourceLabel: "Rhode Island Driver's Manual - Signs, Warning Signs",
        sourceUrl: hb(86),
      },
      {
        id: "ri_s5_23",
        topic: "rules",
        question:
          "You are on a Rhode Island road divided into three marked lanes for traffic. When may you use the center lane?",
        choices: [
          "At any time, since it is the safest lane",
          "Only when turning right",
          "When overtaking with a clear view, when preparing to turn left, or where it is signed for your direction",
          "Never, since the center lane is reserved for emergency vehicles",
        ],
        correctIndex: 2,
        explanation:
          "Section 31-15-11 restricts the center lane of a three-lane road to overtaking where the road is clearly visible and the lane is clear for a safe distance, preparing for a left turn, or where signs allocate it to traffic going your way.",
        context:
          "The same section carries the general lane rule: drive as nearly as practicable entirely within a single lane, and do not leave it until you have made sure the movement can be made safely. Official signs directing slow traffic to a particular lane must be obeyed.",
        trap:
          "A three-lane two-way road looks like a road with a spare lane. It is not - the center lane belongs to whoever is legitimately using it from either direction.",
        excerptKey: "rigl-laned-roadway",
        sourceLabel: "Rhode Island General Laws 31-15-11 - Laned roadways",
        sourceUrl: rigl("31-15-11"),
      },
      {
        id: "ri_s5_24",
        topic: "parking",
        question:
          "Which of these does Rhode Island's parking statute prohibit that the manual's list does not mention?",
        choices: [
          "Parking within 8 feet of a fire hydrant",
          "Parking on a crosshatched access aisle beside a disability parking space",
          "Parking within 20 feet of a crosswalk",
          "Parking on a sidewalk",
        ],
        correctIndex: 1,
        explanation:
          "The crosshatched access aisle beside a disability parking space appears in section 31-21-4 but not in the manual's list. So does the prohibition on parking in a bicycle lane, trail or path.",
        context:
          "The aisle is not spare space - it is the ramp room a wheelchair user needs to get out of the vehicle, which is why blocking it disables the space itself. Rhode Island's manual does prohibit parking at any curb cut or ramp for people with disabilities, so the two lists overlap without matching.",
        trap:
          "Treating the striped area as a bonus half-space is the exact misuse the statute names. It is as much a violation as parking in the marked bay.",
        excerptKey: "rigl-no-parking-bike-lane",
        sourceLabel: "Rhode Island General Laws 31-21-4 - Places where parking or stopping prohibited",
        sourceUrl: rigl("31-21-4"),
      },
      {
        id: "ri_s5_25",
        topic: "rightOfWay",
        question:
          "You are on a road that ends at a through highway in Rhode Island. What does the statute require?",
        choices: [
          "Slow and merge with the flow",
          "Yield only to vehicles approaching from your left",
          "Sound your horn and proceed",
          "Stop at the entrance and yield to traffic on the through highway",
        ],
        correctIndex: 3,
        explanation:
          "Section 31-17-3 requires a stop at the entrance to a through highway and a yield to vehicles already in the intersection or approaching closely enough to be an immediate hazard.",
        context:
          "Once you have yielded and started to proceed, the duty reverses: drivers approaching on the through highway must then yield to you while you cross or enter. The same structure appears at stop signs generally in section 31-17-4 - stop, yield, then complete the movement.",
        trap:
          "A through highway confers priority by law rather than by width or by markings. Not seeing a stop sign does not tell you which road is the through highway.",
        excerptKey: "rigl-row-already-entered",
        sourceLabel: "Rhode Island General Laws 31-17-1 - Right-of-way in absence of signs or signals",
        sourceUrl: rigl("31-17-1"),
      },
      {
        id: "ri_s5_26",
        topic: "safety",
        question:
          "Which of these does the Rhode Island manual list as an action that will NOT keep a drowsy driver awake for more than a few minutes?",
        choices: [
          "Products containing caffeine",
          "Stopping for a 20-minute nap",
          "Handing the driving to a passenger",
          "Stopping for a 10-minute break every two hours",
        ],
        correctIndex: 0,
        explanation:
          "Caffeine is on the manual's ineffective list, along with toughing it out, loud music, changing speed, chewing gum, opening the windows, smoking products and turning up the air conditioning.",
        context:
          "The manual is blunt that rest is the only recovery strategy. Its practical advice is to stop for at least 10 minutes every two hours or 100 miles, share long drives with a companion driver, and know that sleeping more than 20 minutes leaves you groggy for a few minutes afterwards.",
        trap:
          "Coffee is the near-universal answer and the manual names it specifically as ineffective. The parallel with alcohol is exact: caffeine can wake you without making you fit to drive.",
        excerptKey: "drowsy-ineffective",
        sourceLabel: "Rhode Island Driver's Manual - Section II Drowsy Driving",
        sourceUrl: hb(22),
      },
      {
        id: "ri_s5_27",
        topic: "signals",
        question:
          "What does Rhode Island's manual say about a driver who runs a red light in front of you while you have green?",
        choices: [
          "You have the right of way and may proceed",
          "You should sound your horn and continue",
          "You should be alert for violators and be prepared to stop to avoid a collision",
          "You should report the vehicle before continuing",
        ],
        correctIndex: 2,
        explanation:
          "The manual says drivers with the green should not insist on the right of way, and asks you to be alert for possible violators and ready to stop to avoid a collision.",
        context:
          "It is part of a broader instruction to slow down, cover the brake and proceed with caution at every intersection, signalized or not. That is also why a fresh green deserves a look both ways before you move: the last car through the other phase may still be in the box.",
        trap:
          "Having the right of way is a legal position, not a physical protection. The manual's line is that you should not insist on it.",
        excerptKey: "red-light-violators",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Traffic Lights/Signals",
        sourceUrl: hb(41),
      },
      {
        id: "ri_s5_28",
        topic: "speed",
        question:
          "Rhode Island's fine schedule sets a specific penalty for speeding. What does it say?",
        choices: [
          "A flat $85 for any speeding offense",
          "$10.00 per mile in excess of the speed limit",
          "$50 plus court costs, regardless of speed",
          "Fines are set by the judge with no schedule",
        ],
        correctIndex: 1,
        explanation:
          "The manual's fine schedule states $10.00 per mile in excess of the speed limit, alongside $95 for 1 to 10 mph over the posted limit and a $200 minimum for 11 mph over.",
        context:
          "The schedule also lists $85 for a long run of common violations - following too closely, turn signal offenses, obedience to devices, overtaking on the left or right, safety belt or child restraint violations, and times when lights are required. The manual notes that these fines are subject to change through statute.",
        trap:
          "Inside a designated work zone the fine doubles, 24 hours a day, whether or not anyone is working.",
        excerptKey: "speeding-per-mile",
        sourceLabel: "Rhode Island Driver's Manual - Section IX Common Motor Vehicle Violations",
        sourceUrl: hb(59),
      },
      {
        id: "ri_s5_29",
        topic: "licensing",
        question:
          "How long must you wait after a second Rhode Island road test failure before you can try again?",
        choices: ["30 days", "60 days", "180 days", "90 days"],
        correctIndex: 3,
        explanation:
          "Ninety days after a second failure. The ladder is 30 days after the first, 90 after the second, and 180 after a third or any later one.",
        context:
          "The DMV's stated reason is to allow time for instruction and practice rather than repeated attempts. If the 180-day waits exhaust the permit's two one-year extensions, a new permit is needed - which means passing the knowledge test again.",
        trap:
          "The knowledge exam's retest wait is 8 days and it is easy to carry that number across. The road test ladder is far longer.",
        excerptKey: "dmv-road-test-failures",
        sourceLabel: "RI DMV - Road Tests",
        sourceUrl: ROADTEST,
      },
      {
        id: "ri_s5_30",
        topic: "sharing",
        question:
          "Rhode Island's motorcycle helmet rules have three parts. Which of these is one of them?",
        choices: [
          "Every new operator must wear an approved helmet for the first year of their license",
          "Helmets are required only on limited access highways",
          "Operators over 21 must wear a helmet at night",
          "Passengers are exempt if the operator is over 21",
        ],
        correctIndex: 0,
        explanation:
          "Every new operator, whatever their age, must wear an approved helmet for the first year of their license. Passengers must always wear helmets, and any operator under 21 must.",
        context:
          "Eye protection is a separate and universal requirement in Rhode Island - the manual says the law requires all operators to wear it, in the form of glasses, goggles or a face shield. Bicycle helmets follow a different rule again: mandatory for riders and passengers 15 or younger.",
        trap:
          "The three motorcycle rules are easy to collapse into one. Passengers always, operators under 21 always, and every new rider for a year.",
        excerptKey: "motorcycle-helmet-law",
        sourceLabel: "Rhode Island Driver's Manual - Section VI Use of Protective Equipment",
        sourceUrl: hb(48),
      },
      {
        id: "ri_s5_31",
        topic: "signs",
        question:
          "Section 31-13-4 of the Rhode Island General Laws deals with obedience to devices. What does it require?",
        choices: [
          "That drivers obey traffic signals but not signs",
          "That drivers obey signs only where a police officer is present",
          "That drivers obey any official traffic control device, unless a traffic or police officer directs otherwise",
          "That drivers obey devices only on state highways",
        ],
        correctIndex: 2,
        explanation:
          "Every driver must obey the instructions of any official traffic control device that applies to them, unless a traffic or police officer directs otherwise.",
        context:
          "That is why an officer waving you through a red light is lawful and why a flagger in a work zone can stop you: both outrank the device. The manual's fine schedule lists obedience to devices as an $85 offense, and it covers red lights, directional arrows and everything else the state has posted.",
        trap:
          "A sign that seems mistaken or obsolete is still an official traffic control device. The only thing that overrides it is a person with authority directing traffic.",
        excerptKey: "rigl-obedience-devices",
        sourceLabel: "Rhode Island General Laws 31-13-4 - Obedience to devices",
        sourceUrl: rigl("31-13-4"),
      },
      {
        id: "ri_s5_32",
        topic: "rules",
        question:
          "Rhode Island's aggressive driving statute defines the offense in an unusual way. How?",
        choices: [
          "By the driver's speed alone",
          "As speeding combined with violating two or more listed traffic sections",
          "As any collision caused by anger",
          "As three moving violations within a year",
        ],
        correctIndex: 1,
        explanation:
          "Section 31-27.1-3 defines aggressive driving as operating in violation of the speed chapter while also violating two or more of a listed set of sections.",
        context:
          "The listed sections are the everyday ones: obedience to traffic control devices, overtaking on the right, driving within a lane, following too closely, yielding right of way, entering the roadway, use of turn signals, the school bus and special stop chapter, and traveling in the emergency breakdown lane. The manual's own definition is behavioral - a driver operating in a pushy or bold manner.",
        trap:
          "It is a stacking offense rather than a single act. Speeding on its own is speeding; speeding while tailgating and weaving is aggressive driving.",
        excerptKey: "rigl-aggressive-driving-def",
        sourceLabel: "Rhode Island General Laws 31-27.1-3 - Aggressive driving defined",
        sourceUrl: rigl("31-27.1-3"),
      },
      {
        id: "ri_s5_33",
        topic: "impairment",
        question:
          "How does the Rhode Island manual describe the body's methods of eliminating alcohol?",
        choices: [
          "Filtration through the kidneys alone",
          "Digestion and sweating",
          "Absorption into fat tissue over several hours",
          "Breathing, perspiring and oxidation by the liver",
        ],
        correctIndex: 3,
        explanation:
          "Three routes: breathing, perspiring, and oxidation, which is the liver's work. None of them can be sped up, which is why time is the only thing that lowers a blood alcohol concentration.",
        context:
          "It also explains why breath testing works at all - alcohol leaving through the lungs is proportional to what is in the blood. The manual's list of factors that change how fast your BAC rises covers how much you drank, your weight, whether you ate, how long you have been drinking, and your own metabolism.",
        trap:
          "Sweating it out at the gym is on the manual's list of things that wake a person without sobering them. Perspiration is one of the three routes, but it is a trickle.",
        excerptKey: "alcohol-elimination",
        sourceLabel: "Rhode Island Driver's Manual - Section X Effects of Alcohol",
        sourceUrl: hb(60),
      },
      {
        id: "ri_s5_34",
        topic: "safety",
        question:
          "Rhode Island's manual describes hydroplaning. What exactly happens?",
        choices: [
          "The front tires lose contact with a wet road surface and you lose steering",
          "The brakes overheat and stop working",
          "The engine stalls in standing water",
          "The rear wheels spin faster than the front wheels",
        ],
        correctIndex: 0,
        explanation:
          "The front tires lose contact with the wet road surface and the steering goes with them. The car is riding on water rather than pavement.",
        context:
          "The defenses are all about margin: tires inflated to the manufacturer's recommended pressure, reduced speed, and avoiding standing water and the places where water pools. The manual also warns never to use cruise control in rain or snow, because if the car hydroplanes the system will accelerate.",
        trap:
          "Braking or steering hard during a hydroplane achieves nothing while the tires are off the surface, and then acts all at once when grip returns.",
        excerptKey: "hydroplaning",
        sourceLabel: "Rhode Island Driver's Manual - Section III Stopping Your Vehicle",
        sourceUrl: hb(28),
      },
      {
        id: "ri_s5_35",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing a Rhode Island street away from any crosswalk. What does the law say?",
        choices: [
          "The driver has no duty toward them at all",
          "The pedestrian must yield, but the driver still owes them due care",
          "The pedestrian has the right of way in every case",
          "The driver must stop and wait in every case",
        ],
        correctIndex: 1,
        explanation:
          "Section 31-18-5 makes a pedestrian crossing outside a marked or unmarked crosswalk yield to vehicles. Section 31-18-8 keeps the driver's duty intact: exercise due care to avoid a collision, give an audible signal when necessary, and take extra care around children or anyone obviously confused or incapacitated.",
        context:
          "The manual leans further toward the driver's duty than the statute does, telling you that even where pedestrians cross carelessly the driver must always yield. Where the two differ, the safe answer and the lawful answer point the same way: do not hit the pedestrian.",
        trap:
          "Reading the jaywalking rule as permission to keep going is the error. It settles the right of way; it does not release you from due care.",
        excerptKey: "rigl-due-care-pedestrians",
        sourceLabel: "Rhode Island General Laws 31-18-8 - Due care by drivers",
        sourceUrl: rigl("31-18-8"),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix the real Rhode Island exam uses, with no hints beyond what the DMV gives you. Treat it as the real thing: no notes, no pausing, and 28 right out of 40 is the pass mark you are training for.",
    questions: [
      {
        id: "ri_s6_01",
        topic: "signs",
        question: "What does a red circle with a diagonal slash over a symbol mean?",
        choices: [
          "The action shown in the symbol is prohibited",
          "The action shown is permitted only at certain hours",
          "The road ahead is closed",
          "A hazard of the type shown is ahead",
        ],
        correctIndex: 0,
        explanation:
          "A red circle and slash means the movement or action shown is prohibited. Rhode Island's regulatory signs use it for No Left Turn, No U-Turn, No Trucks, No Parking and No Right Turn On Red.",
        context:
          "Regulatory signs state legal requirements, and section 31-13-4 makes disobeying any official traffic control device an offense. Warning signs, by contrast, are yellow diamonds telling you what is ahead, and guide signs help you navigate.",
        trap:
          "Red on a sign always means a restriction or a prohibition, never advice. The yellow diamonds are the ones that only warn.",
        excerptKey: "signs-regulatory-list",
        sourceLabel: "Rhode Island Driver's Manual - Signs, Regulatory Signs",
        sourceUrl: hb(85),
      },
      {
        id: "ri_s6_02",
        topic: "rightOfWay",
        question:
          "You have stopped at a four-way stop and a second driver stops to your left a moment later. Who goes?",
        choices: [
          "The driver on the right, in every case",
          "Whichever driver is going straight",
          "Both together, since the paths do not cross",
          "You, because you stopped first",
        ],
        correctIndex: 3,
        explanation:
          "Order of arrival decides it. You stopped first, so vehicles arriving after you yield to you. The right-hand rule only settles a genuine tie.",
        context:
          "The manual's four-way stop procedure is a short list: yield to everyone who stopped before you, expect everyone who arrives after you to yield to you, and where two arrive together the driver on the left yields to the driver on the right.",
        trap:
          "The right-hand rule is the piece everyone remembers, and applying it when someone clearly stopped first is how a four-way stop deadlocks.",
        excerptKey: "four-way-stop-order",
        sourceLabel: "Rhode Island Driver's Manual - Section III Four-Way Stops",
        sourceUrl: hb(32),
      },
      {
        id: "ri_s6_03",
        topic: "rules",
        question:
          "Rhode Island requires you to signal when leaving a parking space. What else does the same sentence in the manual cover?",
        choices: [
          "Signaling before every lane change on a highway",
          "Signaling at least 100 feet before a turn",
          "Signaling before slowing for a hazard",
          "Signaling when entering a roundabout",
        ],
        correctIndex: 1,
        explanation:
          "The manual's signal sentence covers both: a signal by hand or directional lights when driving out of a parking space, and at least 100 feet before making a turn.",
        context:
          "Section 31-16-6 sets the same 100 feet as a continuous signal through the last 100 feet before the turn, and the manual's list of laws you must know repeats it for lane changes. Hand signals are equivalent to lamps under section 31-16-8.",
        trap:
          "One hundred feet is roughly six car lengths, which at 30 mph is a little over two seconds. Signaling as you begin the turn is far too late.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Signals",
        sourceUrl: hb(38),
      },
      {
        id: "ri_s6_04",
        topic: "speed",
        question:
          "What is the prima facie speed limit in a Rhode Island business district where no sign is posted?",
        choices: ["20 mph", "30 mph", "25 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "Twenty-five miles per hour applies in any business or residence district. It is the same figure the manual gives for residential areas.",
        context:
          "Outside those districts the unposted limits split by time of day - 50 mph in the daytime, 45 mph at night - and a signed school zone during school hours is 20 mph. All of these are prima facie limits, so exceeding one is presumptively unlawful and staying under one is not automatically safe.",
        trap:
          "The business district and the residence district share the same number, which makes it easy to assume a commercial street must be faster. It is not.",
        excerptKey: "rigl-prima-facie-limits",
        sourceLabel: "Rhode Island General Laws 31-14-2 - Prima facie limits",
        sourceUrl: rigl("31-14-2"),
      },
      {
        id: "ri_s6_05",
        topic: "safety",
        question:
          "When must Rhode Island drivers have their headlights on?",
        choices: [
          "Sunset to sunrise, when visibility is under 500 feet, and whenever the wipers are running",
          "Only between sunset and sunrise",
          "Only in rain, snow or fog",
          "Whenever the vehicle is in motion",
        ],
        correctIndex: 0,
        explanation:
          "All three triggers, and any one of them is enough: sunset to sunrise, any time you cannot see 500 feet ahead, and any time the wipers are in use because of weather.",
        context:
          "Section 31-24-1 puts the same three conditions in statute. In poor visibility the manual requires low beams rather than high, because high beams reflect off rain, snow and fog. The rear license plate must be lit so it can be read from 60 feet.",
        trap:
          "Daytime running lights are not headlights. They usually leave the tail lamps dark, which is exactly the half that matters in rain.",
        excerptKey: "headlights-inclement",
        sourceLabel: "Rhode Island Driver's Manual - Section IX Laws You Must Know",
        sourceUrl: hb(58),
      },
      {
        id: "ri_s6_06",
        topic: "signals",
        question: "A steady red signal is showing and there is no stop line and no crosswalk. Where do you stop?",
        choices: [
          "Level with the signal head",
          "Fifteen feet back from the intersection",
          "Wherever the vehicle in front stopped",
          "Before entering the intersection",
        ],
        correctIndex: 3,
        explanation:
          "Before entering the intersection. The order is stop line first, then the crosswalk on the near side if there is no line, then the edge of the intersection if there is neither.",
        context:
          "You then remain stopped until a signal to proceed is displayed, with the single exception of a right turn on red where no sign or red arrow forbids it. The manual's shorter version is to stop before reaching the crosswalk and wait until the light is green.",
        trap:
          "Stopping level with the signal puts your car in the intersection, which is what the three-rung order exists to prevent.",
        excerptKey: "rigl-red-signal",
        sourceLabel: "Rhode Island General Laws 31-13-6 - Meaning of traffic control signals",
        sourceUrl: rigl("31-13-6"),
      },
      {
        id: "ri_s6_07",
        topic: "impairment",
        question:
          "Rhode Island law forbids one thing to drivers of every age, regardless of blood alcohol concentration. What is it?",
        choices: [
          "Carrying an open container in the trunk",
          "Consuming an alcoholic beverage or drug while driving",
          "Driving within two hours of drinking",
          "Driving with a passenger who has been drinking",
        ],
        correctIndex: 1,
        explanation:
          "The manual states it in capitals: it is against the law for a driver of any age to consume an alcoholic beverage or a drug while driving. That stands independently of any BAC threshold.",
        context:
          "The thresholds are separate: 0.08 percent is DUI at any age, and 0.02 percent is DWI for a driver under 21. A driver under 21 also risks a suspension of up to 30 days simply for carrying alcohol in the vehicle without a parent or guardian aboard.",
        trap:
          "This one does not depend on how much or how impaired. The act of drinking at the wheel is itself the offense.",
        excerptKey: "no-drinking-while-driving",
        sourceLabel: "Rhode Island Driver's Manual - Section X Penalties",
        sourceUrl: hb(61),
      },
      {
        id: "ri_s6_08",
        topic: "sharing",
        question:
          "You are on a divided highway and a school bus on the other roadway stops with red lights flashing. What must you do?",
        choices: [
          "Stop and wait for the lights to go out",
          "Slow to 20 mph and pass with care",
          "Continue, because a divided highway is the exception",
          "Stop only if children are crossing",
        ],
        correctIndex: 2,
        explanation:
          "You may continue. A divided highway with the bus on the other roadway is the one exception the manual and section 31-20-13 both recognize.",
        context:
          "The manual defines a divided highway for this purpose as any roadway with a Jersey barrier, guardrail, grass or cement median, trees or water between the opposing lanes. A painted line is not a divider. The second statutory exception is a bus stopped in a loading zone beside a limited access highway where pedestrians may not cross.",
        trap:
          "A center turn lane or a double yellow line does not make a road divided. Without a physical separation you stop.",
        excerptKey: "school-bus-divided",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII School Buses",
        sourceUrl: hb(54),
      },
      {
        id: "ri_s6_09",
        topic: "parking",
        question:
          "How far from the nearest rail of a railroad crossing may you park in Rhode Island?",
        choices: [
          "No closer than 50 feet",
          "No closer than 30 feet",
          "No closer than 20 feet",
          "No closer than 15 feet",
        ],
        correctIndex: 0,
        explanation:
          "Fifty feet from the nearest rail. The manual allows a short stop to load or unload passengers or packages, and the statute states the distance flatly.",
        context:
          "Fifteen feet is a real Rhode Island railroad number but it belongs to a different rule: when a stop is required at a crossing, you stop within 50 feet and no closer than 15 feet from the nearest rail. Parking on the tracks themselves is prohibited outright.",
        trap:
          "The 15 and the 50 both attach to railroads and mean different things. Fifteen is the closest you may stop when stopping is required; 50 is how far back you must park.",
        excerptKey: "no-park-railroad",
        sourceLabel: "Rhode Island Driver's Manual - Section III Where you may not park or stop",
        sourceUrl: hb(33),
      },
      {
        id: "ri_s6_10",
        topic: "rules",
        question:
          "A solid white line separates your lane from the one beside it. What does Rhode Island's manual say?",
        choices: [
          "You may change lanes freely",
          "You may cross only to turn left",
          "The line marks a bicycle lane",
          "Passing and lane changes are restricted",
        ],
        correctIndex: 3,
        explanation:
          "Solid lines restrict passing and lane changes. White means the lanes carry traffic in the same direction; broken white lines are the ones that permit a change.",
        context:
          "The manual allows crossing a solid line in an emergency, and lists turns, breakdowns, an object in the road and parking as the sorts of reason it means. A bicycle lane is marked differently: a solid white line plus the words Bicycle Lane plus bicycle symbols.",
        trap:
          "A solid white line beside a wide shoulder tempts drivers to treat it as a lane boundary they can drift across. It is a restriction.",
        excerptKey: "solid-lines",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Roadway Markings",
        sourceUrl: hb(38),
      },
      {
        id: "ri_s6_11",
        topic: "safety",
        question:
          "You are dazzled by oncoming headlights on a dark Rhode Island road. What does the manual tell you to do?",
        choices: [
          "Flash your own high beams to signal the other driver",
          "Look toward the right edge of the road or the fog line until they pass",
          "Close one eye to preserve night vision",
          "Slow to a stop on the shoulder",
        ],
        correctIndex: 1,
        explanation:
          "Look at the right edge of the roadway, or the white fog line, until the bright lights have gone by and your vision returns. It keeps you in your lane while you recover.",
        context:
          "The manual calls the recovery period glare recovery time and notes that bright sunlight produces the same effect. Looking to the right has a second benefit it points out: that is where a pedestrian walking near the edge of the road would be.",
        trap:
          "Flashing back at the other driver blinds them in turn and leaves you both dazzled at the moment you pass each other.",
        excerptKey: "glare-recovery",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Approaching headlights",
        sourceUrl: hb(53),
      },
      {
        id: "ri_s6_12",
        topic: "emergencies",
        question:
          "Your headlights fail suddenly on an unlit Rhode Island road. What does the manual list as the first step?",
        choices: [
          "Stop in the traffic lane and switch on the hazard lights",
          "Steer for the shoulder with no lights showing",
          "Turn on parking lights, fog lights, hazard flashers or a turn signal",
          "Restart the engine",
        ],
        correctIndex: 2,
        explanation:
          "Get something lit first - parking lights, fog lights, hazard flashers or even a turn signal - so other drivers can still see you. Then try the headlight switch, the fog lights and the high beam switch, which may be on a separate circuit.",
        context:
          "The last step is to pull off the road as quickly as possible and leave the emergency flashers on. The high beam circuit is the detail worth remembering, because it often survives when the low beams do not.",
        trap:
          "Stopping in the traffic lane with no lights is the worst possible combination, and it is what happens when a driver freezes and brakes.",
        excerptKey: "headlight-failure",
        sourceLabel: "Rhode Island Driver's Manual - Section V Headlight Failure",
        sourceUrl: hb(45),
      },
      {
        id: "ri_s6_13",
        topic: "signals",
        question: "What does a flashing yellow signal mean in Rhode Island?",
        choices: [
          "Slow down, cover the brake and proceed with caution",
          "Stop, then proceed when clear",
          "The signal is out of service",
          "Yield to traffic on your right only",
        ],
        correctIndex: 0,
        explanation:
          "Slow down, cover the brake and proceed with caution. It is a warning, not a stop.",
        context:
          "Its partner, the flashing red, is treated as a stop sign - full stop and yield to traffic left and right. Covering the brake means taking your foot off the accelerator and holding it over the brake pedal without touching it, which removes the time it takes to move your foot across.",
        trap:
          "Flashing yellow and steady yellow are different instructions. Steady yellow means a red is next; flashing yellow means the intersection stays open but nobody is regulating it.",
        excerptKey: "flashing-yellow-panel",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Traffic Lights/Signals",
        sourceUrl: hb(42),
      },
      {
        id: "ri_s6_14",
        topic: "speed",
        question:
          "You are the slowest vehicle on a multi-lane Rhode Island road. What does the statute require?",
        choices: [
          "Nothing, provided you are at or above the limit",
          "Use the left lane so faster traffic can pass on the right",
          "Turn on your hazard lights",
          "Drive in the right-hand lane, or as close as practicable to the right edge",
        ],
        correctIndex: 3,
        explanation:
          "Section 31-15-2 requires any vehicle moving below the normal speed of traffic to use the right-hand lane available, or to keep as close as practicable to the right-hand curb or edge.",
        context:
          "The exceptions are overtaking another vehicle and preparing for a left turn into an intersection, a private road or a driveway. Section 31-14-9 comes at the same problem from the other side by prohibiting a speed so slow that it impedes or blocks the normal movement of traffic.",
        trap:
          "The duty is tied to the speed of traffic around you, not to the posted limit. Doing exactly 55 in the left lane while everyone else is faster still puts you in the wrong lane.",
        excerptKey: "rigl-slow-traffic-right",
        sourceLabel: "Rhode Island General Laws 31-15-2 - Slow traffic to right",
        sourceUrl: rigl("31-15-2"),
      },
      {
        id: "ri_s6_15",
        topic: "rightOfWay",
        question:
          "You are turning left across a Rhode Island crosswalk and a pedestrian has started to cross it. What must you do?",
        choices: [
          "Complete the turn and pass behind them",
          "Yield to the pedestrian before completing the turn",
          "Sound the horn to alert them",
          "Turn only if they are on the far half of the crosswalk",
        ],
        correctIndex: 1,
        explanation:
          "Yield. Section 31-17-2 requires a driver turning left or right to yield to a pedestrian intending to cross within a crosswalk that the driver must travel through to make the turn.",
        context:
          "Section 31-16-2 adds the same duty in the turning rules themselves, for both left and right turns. The manual's own version is even shorter: always yield the right of way to pedestrians in the street.",
        trap:
          "Having yielded to oncoming traffic and finally found a gap is exactly when a driver forgets the crosswalk on the far side of the turn.",
        excerptKey: "rigl-left-turn-yield",
        sourceLabel: "Rhode Island General Laws 31-17-2 - Vehicle turning left or right",
        sourceUrl: rigl("31-17-2"),
      },
      {
        id: "ri_s6_16",
        topic: "licensing",
        question:
          "How long is a Rhode Island driver's license valid once you hold a full one?",
        choices: [
          "Three years",
          "Four years",
          "A maximum of five years",
          "Ten years",
        ],
        correctIndex: 2,
        explanation:
          "A maximum of five years, and you can renew up to 90 days before it expires. Renewals can be done online, at a DMV branch, or at a AAA branch if you are a member.",
        context:
          "From 71 the term is prorated: every four years at 71, every three at 72, and every two from 73 on. A license transferred from another state is issued for up to two years first, expiring on your second birthday after the transfer, and then renews for five.",
        trap:
          "Renewing online generates a receipt without a photo, which the DMV warns is not a substitute if you need a photo credential.",
        excerptKey: "licence-five-years",
        sourceLabel: "Rhode Island Driver's Manual - Appendix, Renewing your driver's license",
        sourceUrl: hb(75),
      },
      {
        id: "ri_s6_17",
        topic: "rules",
        question:
          "Which of these does Rhode Island law require you to carry in the vehicle at all times?",
        choices: [
          "Your license, the registration card and proof of insurance",
          "Your license only",
          "A copy of the Driver's Manual",
          "Your license and a spare tire",
        ],
        correctIndex: 0,
        explanation:
          "All three, and you must display them on request from a law enforcement officer. Failing to carry proof of insurance carries a $500 fine.",
        context:
          "The manual adds two more duties at a stop: on request you must write your name in the officer's presence for identification, and if asked to exit the vehicle you must do so. Electronic proof of insurance is accepted.",
        trap:
          "Insurance is the one people leave at home. It is also the one with the largest fine attached.",
        excerptKey: "police-stop-documents",
        sourceLabel: "Rhode Island Driver's Manual - Section IX Laws You Must Know",
        sourceUrl: hb(58),
      },
      {
        id: "ri_s6_18",
        topic: "impairment",
        question:
          "Which effect does the Rhode Island manual say alcohol has first, before any other?",
        choices: [
          "Blurred vision",
          "Slowed reflexes",
          "Loss of balance",
          "Loss of judgment and skill",
        ],
        correctIndex: 3,
        explanation:
          "Alcohol reaches the brain in seconds and affects judgment and skill before anything else. That is why an impaired driver's own assessment of their fitness is the least reliable evidence available.",
        context:
          "The manual goes on to list what follows: a reduced ability to estimate distance, speed and the movement of other vehicles, slower reflexes, reduced alertness and vision. Some people seem stimulated after drinking, which the manual explains as lowered inhibition rather than improved capability.",
        trap:
          "Judgment going first is what makes the other effects dangerous. The driver who has lost it is the one deciding whether they are safe to drive.",
        excerptKey: "alcohol-judgment-first",
        sourceLabel: "Rhode Island Driver's Manual - Section X Effects of Alcohol",
        sourceUrl: hb(60),
      },
      {
        id: "ri_s6_19",
        topic: "safety",
        question:
          "The Rhode Island manual asks you to check something before you even get into the vehicle. What?",
        choices: [
          "The oil level",
          "In front of and behind the vehicle for objects, animals or people",
          "The tire pressure",
          "That the doors are unlocked for a quick exit",
        ],
        correctIndex: 1,
        explanation:
          "Before entering, check in front of and behind the vehicle for objects, animals or people in your path. Safe driving starts before the engine does.",
        context:
          "The manual's pre-drive list then runs to eleven steps inside the car: lock the doors, key or fob in the vehicle, adjust the seat, mirrors, ventilation, seat belts, pedals, steering wheel, head restraint and audio, and ask passengers to belt up. The skills test examiner checks that you know where the controls are without hunting for them.",
        trap:
          "Small children and pets are exactly what a walk-around catches and a mirror does not, particularly behind a high-sided vehicle.",
        excerptKey: "pre-drive-checks",
        sourceLabel: "Rhode Island Driver's Manual - Section III Before Starting The Engine",
        sourceUrl: hb(26),
      },
      {
        id: "ri_s6_20",
        topic: "signs",
        question:
          "You see a diamond-shaped sign in fluorescent pink on a Rhode Island road. What does it indicate?",
        choices: [
          "A school zone",
          "A hospital route",
          "A construction or work zone",
          "A scenic route",
        ],
        correctIndex: 2,
        explanation:
          "Fluorescent pink is one of the three high-visibility work zone colors, alongside fluorescent yellow-green and orange. The signs are posted before, within and after the zone.",
        context:
          "Inside a designated zone, fines for traffic violations are doubled 24 hours a day. The manual asks you to merge early, stay in your lane, keep off the phone, watch for flaggers who have legal authority to control traffic, and expect the layout to change from hour to hour.",
        trap:
          "Pink is an unusual color for a road sign and is easy to read as decorative. It is a work zone warning.",
        excerptKey: "work-zone-sign-colors",
        sourceLabel: "Rhode Island Driver's Manual - Appendix, Construction and Work Zone Safety",
        sourceUrl: hb(72),
      },
      {
        id: "ri_s6_21",
        topic: "sharing",
        question:
          "Rhode Island's manual gives one instruction about pedestrians that goes beyond the statute. What is it?",
        choices: [
          "Even where pedestrians cross carelessly, the driver must always yield",
          "Pedestrians must always use marked crosswalks",
          "Drivers may proceed if a pedestrian is on the far half of the road",
          "Drivers must stop for pedestrians only in school zones",
        ],
        correctIndex: 0,
        explanation:
          "The manual says that even in situations where pedestrians cross the street carelessly, the driver must always yield. The statute is narrower, but the manual's instruction is the one to drive by.",
        context:
          "It sits alongside advice to drive slowly and stay alert wherever pedestrians are around, to watch for people stepping out from between parked cars, and to take extra care with children, who move quickly and may not check for traffic, and with older pedestrians, who may move slowly.",
        trap:
          "Section 31-18-5 does make a pedestrian outside a crosswalk yield to traffic. Winning that argument is no use if you have hit someone.",
        excerptKey: "pedestrian-always-yield",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Pedestrians",
        sourceUrl: hb(53),
      },
      {
        id: "ri_s6_22",
        topic: "parking",
        question:
          "Which of these is prohibited by the Rhode Island manual's parking list?",
        choices: [
          "Parking facing downhill with the wheels turned",
          "Parking on a residential street overnight",
          "Parking more than 200 feet from your destination",
          "Stopping beside a vehicle already parked at the side of the street",
        ],
        correctIndex: 3,
        explanation:
          "Double parking - stopping beside a vehicle already parked at the curb - is on the manual's prohibition list, along with sidewalks, intersections, bridges, tunnels, railroad tracks and driveways.",
        context:
          "The measured distances are separate: 8 feet from a hydrant, 20 feet from a crosswalk at an intersection or a fire station driveway, 30 feet from a stop sign or signal, 50 feet from a railroad rail, and 75 feet across the street from a signed fire station.",
        trap:
          "Hazard lights do not authorize double parking. The vehicle is still in a traffic lane, which is what the rule is about.",
        excerptKey: "no-park-basic-list",
        sourceLabel: "Rhode Island Driver's Manual - Section III Where you may not park or stop",
        sourceUrl: hb(33),
      },
      {
        id: "ri_s6_23",
        topic: "signals",
        question:
          "What does the Rhode Island manual say a driver should do at every intersection, signalized or not?",
        choices: [
          "Slow down, cover the brake and proceed with caution",
          "Stop and check both ways",
          "Sound the horn if visibility is poor",
          "Accelerate through to clear it quickly",
        ],
        correctIndex: 0,
        explanation:
          "Slow down, cover the brake and proceed with caution. The manual applies this to all intersections, because a green light does not stop the driver on the other street from running their red.",
        context:
          "Covering the brake means lifting off the accelerator and hovering over the brake pedal without touching it, which saves the fraction of a second it takes to move your foot. Where an intersection has no signs or signals at all, you treat it as though a yield sign were posted.",
        trap:
          "Accelerating to clear an intersection quickly increases both the speed and the stopping distance at the one place a collision is most likely.",
        excerptKey: "approach-intersection-caution",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Traffic Lights/Signals",
        sourceUrl: hb(41),
      },
      {
        id: "ri_s6_24",
        topic: "rules",
        question:
          "Rhode Island's manual describes making a lane change. What are the three steps?",
        choices: [
          "Signal, accelerate, move over",
          "Check the mirror, signal, move over",
          "Check the lane is clear, signal in time, check mirrors and look over your shoulder",
          "Sound the horn, signal, move over",
        ],
        correctIndex: 2,
        explanation:
          "Is the lane clear, signal with enough time to warn other drivers, then check the mirrors and look over your shoulder to cover the blind spots before you move.",
        context:
          "The shoulder check is the step that mirrors cannot replace, because blind spots are by definition the areas the mirrors do not show. The manual asks you to signal within 100 feet on a highway, and warns against putting packages on the rear window ledge, which creates a blind spot of its own.",
        trap:
          "Signaling and moving in the same motion is the habit that removes the warning entirely. The signal is meant to arrive before the movement.",
        excerptKey: "lane-change-steps",
        sourceLabel: "Rhode Island Driver's Manual - Section III Starting from the Curb or Making a Safe Lane Change",
        sourceUrl: hb(33),
      },
      {
        id: "ri_s6_25",
        topic: "emergencies",
        question:
          "You hit a parked car in Rhode Island and the owner is nowhere to be found. What must you do?",
        choices: [
          "Leave your name and address securely attached to the vehicle, and report it to police",
          "Leave a note only if the damage is visible",
          "Nothing, provided your own vehicle is undamaged",
          "Wait 30 minutes and then leave",
        ],
        correctIndex: 0,
        explanation:
          "Leave your name and address in writing, attached securely where the owner will find it, and report the collision to the nearest state or local police.",
        context:
          "Section 31-26-4 states the same duty and adds what the note must contain: the name and address of both the driver and the owner of the striking vehicle, and a statement of the circumstances. Hitting an unattended vehicle is also one of the situations that requires a police report.",
        trap:
          "A note tucked under a wiper that blows away is not compliance, and neither is a note without the police call. Rhode Island requires both.",
        excerptKey: "collision-parked-vehicle",
        sourceLabel: "Rhode Island Driver's Manual - Section XI In Case of a Collision",
        sourceUrl: hb(65),
      },
      {
        id: "ri_s6_26",
        topic: "speed",
        question:
          "The posted limit is 25 mph on a Rhode Island street and traffic is moving at 40. What should you do?",
        choices: [
          "Match the traffic, since keeping pace is safest",
          "Drive at 40 but stay in the right lane",
          "Turn off onto a slower street",
          "Drive at or below 25, which is the maximum for ideal conditions",
        ],
        correctIndex: 3,
        explanation:
          "The posted limit is the maximum, and prevailing traffic does not raise it. The Basic Speed Law lets it fall below 25 in bad conditions but never lifts it above the sign.",
        context:
          "Section 31-14-9 does prohibit driving so slowly that you impede the normal movement of traffic, but that is not a license to speed - it is why you keep right when you are the slowest vehicle. The two duties sit together: drive at a lawful speed, and do it in the lane that fits.",
        trap:
          "\"Everyone was doing it\" is not a defense in law and is not what the manual teaches. The fine schedule starts at $95 for 1 to 10 mph over.",
        excerptKey: "basic-speed-law",
        sourceLabel: "Rhode Island Driver's Manual - Section III Safe Driving on the Highway",
        sourceUrl: hb(36),
      },
      {
        id: "ri_s6_27",
        topic: "safety",
        question:
          "How does the Rhode Island manual describe an open zone?",
        choices: [
          "An area you can drive through without restrictions to your line of sight or path of travel",
          "The space between your vehicle and the one ahead",
          "A lane with no traffic in it",
          "The area covered by your mirrors",
        ],
        correctIndex: 0,
        explanation:
          "An open zone is an area you can drive through with no restriction on your line of sight or your intended path. A closed zone is one where something blocks either.",
        context:
          "The zone system counts six zones around the vehicle, each a lane wide and extending as far as you can see. It works alongside IPDE - identify, predict, decide, execute - and the Smith System's five keys, all of which the manual teaches as ways of turning observation into decisions early enough to matter.",
        trap:
          "An empty lane is not automatically an open zone. If a parked truck blocks your view into it, the zone is closed even though nothing is in it.",
        excerptKey: "open-zone",
        sourceLabel: "Rhode Island Driver's Manual - Section VII Zones",
        sourceUrl: hb(50),
      },
      {
        id: "ri_s6_28",
        topic: "impairment",
        question:
          "How much greater does the Rhode Island manual say your collision risk is if you drink even a little before driving?",
        choices: [
          "Twice as great",
          "Seven times greater",
          "Four times greater",
          "Twenty times greater",
        ],
        correctIndex: 1,
        explanation:
          "Seven times greater. The manual states it plainly: if you drink, even just a little, your chances of a collision are seven times greater than if you do not.",
        context:
          "It sits alongside the manual's other figure - drunk drivers cause more than half of the collisions in which somebody is killed. Neither number depends on reaching a legal threshold, which is the point: impairment starts long before 0.08.",
        trap:
          "The figure applies to a little, not to a lot. That is what makes it a warning about the first drink rather than the fourth.",
        excerptKey: "alcohol-crash-risk",
        sourceLabel: "Rhode Island Driver's Manual - Section X Effects of Alcohol",
        sourceUrl: hb(60),
      },
      {
        id: "ri_s6_29",
        topic: "rightOfWay",
        question:
          "A fire truck with lights and siren is approaching and you are stopped in the middle of an intersection. What does Rhode Island law require?",
        choices: [
          "Clear the intersection, then pull to the right and stop until it passes",
          "Stay where you are and let it go around you",
          "Reverse out of the intersection",
          "Follow it through so you do not block traffic",
        ],
        correctIndex: 0,
        explanation:
          "Section 31-17-6 requires you to move to a position parallel to and as close as possible to the right-hand edge or curb, clear of any intersection, then stop and remain there until the emergency vehicle has passed.",
        context:
          "Stopping inside the intersection is precisely what the words \"clear of any intersection\" rule out, because that is the space an emergency vehicle needs to turn. Once it has gone by, drive at least 500 feet behind it, and check for a second one before you pull out.",
        trap:
          "Following an emergency vehicle to get through traffic is unlawful as well as dangerous - the 500-foot rule exists to stop exactly that.",
        excerptKey: "follow-500-emergency",
        sourceLabel: "Rhode Island Driver's Manual - Section III Safe Driving on the Highway",
        sourceUrl: hb(36),
      },
      {
        id: "ri_s6_30",
        topic: "sharing",
        question:
          "Why does the Rhode Island manual say a motorcycle often appears farther away and slower than it is?",
        choices: [
          "Because riders position themselves near the curb",
          "Because motorcycles use only one headlight at night",
          "Because they accelerate more slowly than cars",
          "Because of its small size",
        ],
        correctIndex: 3,
        explanation:
          "Size. A small object reads as distant, so drivers judging a gap at an intersection consistently think a motorcycle is farther away and moving slower than it really is.",
        context:
          "The manual asks you to predict that a motorcycle is closer than it looks, to look twice before turning or changing lanes, and to remember that a motorcycle can hide behind a door post, a mirror, a passenger or a bush. At night its single headlight and taillight blend into other traffic.",
        trap:
          "This is the mechanism behind the classic left-turn collision: the driver sees the motorcycle, judges the gap, and is wrong about the gap rather than blind to the rider.",
        excerptKey: "motorcycle-looks-farther",
        sourceLabel: "Rhode Island Driver's Manual - Section VI Motorcycles",
        sourceUrl: hb(48),
      },
    ],
  },
];
