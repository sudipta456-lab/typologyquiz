import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets 1 to 3: the Maryland Driver's Manual,
// DL-002 (10-25), October 2025 Edition, with the Maryland Transportation
// Article and mva.maryland.gov filling the gaps the manual leaves - the speed
// limits, the parking distances, the signal distance and the knowledge test's
// pass mark.
//
// Set 5 is where Maryland's own traps live: the Baltimore City carve-out from
// the crosswalk parking rule, the 88% pass mark that appears nowhere in the
// manual, the crosswalk statute that reaches across the centre line, and the
// school bus exception that the manual and the statute state differently.
// Set 6 runs 30 questions with no scaffolding, matching the 25-question shape
// of the real MVA test with a margin.
const HB = "https://mva.maryland.gov/Documents/DL-002.pdf";
const TEST = "https://mva.maryland.gov/licenses-ids/prepare-drivers-license-test/knowledge-tests";
const gtr = (s: string) =>
  `https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gtr&section=${s}&enactments=false`;

export const marylandSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "A second exam-level set, weighted towards the parts of the Maryland manual people skim: licensing penalties, work zones, highway driving and the rules about stopped vehicles.",
    questions: [
      {
        id: "md_s4_01",
        topic: "sharing",
        question:
          "You are travelling the opposite way from a school bus that has stopped with its red lights flashing. When may you keep going?",
        choices: [
          "Whenever the road has four or more lanes",
          "Whenever there is a painted median between you",
          "When a physical barrier divides the road and the bus is on the other side of it",
          "Whenever you are more than 20 feet away",
        ],
        correctIndex: 2,
        explanation:
          "The manual's exception is a multiple lane road divided by a physical barrier, with the bus on the far side of it. Lane count alone does not release you, and neither does paint.",
        context:
          "This is one place where Maryland's two sources are worded differently. The manual requires a physical barrier; the Transportation Article excuses any driver on a divided highway where the school vehicle is on a different roadway, without requiring a barrier. Where the two disagree, the safer reading is the manual's, and a violation carries a fine of up to $1,000.",
        trap:
          "A painted median or a turn lane is not a physical barrier. On an undivided multilane road every direction still stops.",
        excerptKey: "schoolbus-barrier",
        sourceLabel: "Maryland Driver's Manual - Section 7.D School Buses",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s4_02",
        topic: "signs",
        question:
          "You reach a stop sign at an intersection that has no stop line and no crosswalk. Where do you stop?",
        choices: [
          "Level with the sign itself",
          "Wherever you can see the cross street, even if that is inside the intersection",
          "Anywhere within one car length of the corner",
          "Before entering the intersection",
        ],
        correctIndex: 3,
        explanation:
          "The order is: stop line if there is one, crosswalk if there is no line, and the edge of the intersection if there is neither. With nothing painted, you stop before entering the intersection.",
        context:
          "State law adds a refinement for that last case: you stop at the nearest point before entering that gives you a view of traffic on the intersecting roadway. Having stopped, you yield to vehicles and pedestrians in the intersection and stay stopped until it is safe to go through. The same three-step order applies at a steady red light and at a signal that has failed.",
        trap:
          "Stopping level with the sign is a habit, not a rule. The sign can sit well back from the junction, and the requirement is about the intersection, not the post.",
        excerptKey: "stop-sign-where",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "md_s4_03",
        topic: "rules",
        question: "What do double solid white lines between two lanes mean?",
        choices: [
          "Passing is permitted with care in either direction",
          "You are not allowed to change lanes across them",
          "The lanes carry opposing traffic",
          "The lane to your left is a two-way left turn lane",
        ],
        correctIndex: 1,
        explanation:
          "Double solid white forbids lane changes. The lanes it divides carry traffic the same way; the ban is about crossing between them.",
        context:
          "Maryland also uses double solid white to separate general traffic lanes from HOV lanes and, in some places, before an obstruction that may be passed on either side. Alongside it: broken white permits lane changes, single solid white discourages them, and dotted lines carry lane markings through an intersection so drivers hold their line while crossing.",
        trap:
          "Colour tells you the direction of travel and the line style tells you what you may do. Double solid white is same-direction traffic with crossing prohibited.",
        excerptKey: "double-solid-white",
        sourceLabel: "Maryland Driver's Manual - Section 4.C Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "md_s4_04",
        topic: "licensing",
        question:
          "A 16-year-old holds a Maryland learner's permit. How long must they hold it, violation-free, before a provisional licence?",
        choices: ["45 days", "3 months", "9 months", "18 months"],
        correctIndex: 2,
        explanation:
          "Nine months without a violation for anyone under 18. The clock is about clean time, not merely elapsed time.",
        context:
          "The holding period varies by age and education: nine months under 18, three months at 18 with a diploma or GED and for ages 19 to 24, and 45 days at 25 and over. A conviction or probation before judgment for a moving violation at any age pushes the requirement to nine months from the most recent conviction or PBJ, and a suspension for any reason does the same.",
        trap:
          "The 45-day figure belongs to applicants aged 25 and over. Applying it to a teenager understates the wait by seven and a half months.",
        excerptKey: "permit-9-months",
        sourceLabel: "Maryland Driver's Manual - Section 2.B Learner's Instructional Permit",
        sourceUrl: HB,
      },
      {
        id: "md_s4_05",
        topic: "safety",
        question: "What do flashing green lights mean in a Maryland work zone?",
        choices: [
          "A detour begins ahead",
          "The lane you are in is about to close",
          "Speed cameras are active",
          "The work zone is active and workers are present",
        ],
        correctIndex: 3,
        explanation:
          "Flashing green marks an active work zone with workers present. Maryland also puts them on highway maintenance vehicles and service equipment in and before work zones.",
        context:
          "The colour code is specific and worth memorising as a block: flashing amber or yellow on highway maintenance vehicles, flashing blue for active speed cameras, and flashing green for an active work zone with workers present. Separately, flashing lights in a work zone mean workers are there, fines are higher than normal, and higher again with workers present.",
        trap:
          "Green usually means go. In a Maryland work zone it means the opposite kind of message - slow down, people are working here.",
        excerptKey: "workzone-green-lights",
        sourceLabel: "Maryland Driver's Manual - Section 5.H Work Zone Safety",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s4_06",
        topic: "rightOfWay",
        question:
          "You have stopped at a red light and are permitted to turn right. A pedestrian starts across the road you are turning into. What must you do?",
        choices: [
          "Complete the turn ahead of them",
          "Edge forward until they see you",
          "Yield to the pedestrian",
          "Reverse to give them room",
        ],
        correctIndex: 2,
        explanation:
          "The right on red permits the movement; it does not clear the crosswalk. Maryland states the duty to yield to pedestrians when a turn on red is permitted after stopping.",
        context:
          "The equivalent duty applies to turns on green. Pedestrians have the right of way at street crossings so long as they obey the signals themselves, and Maryland asks for extra care around people who are deaf, blind or mobility impaired. You also may not pass a vehicle that has stopped at a crosswalk.",
        trap:
          "Having stopped once for the light does not discharge the obligation. The stop and the yield are two separate requirements.",
        excerptKey: "yield-turning-red",
        sourceLabel: "Maryland Driver's Manual - Section 7.A Pedestrian Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "md_s4_07",
        topic: "signals",
        question: "How long must you remain stopped at a steady red light in Maryland?",
        choices: [
          "Until cross traffic has cleared",
          "As long as the signal is red, unless a permitted turn applies",
          "For a minimum of three seconds",
          "Until the vehicle behind you signals",
        ],
        correctIndex: 1,
        explanation:
          "You stay stopped for the whole red phase. The only movements it releases are the permitted turns - right on red, or left from one-way to one-way - and only after a full stop.",
        context:
          "The stopping point runs in the usual order: the stop line, or before the crosswalk if there is no line, or before entering the intersection if there is neither. A red arrow allows nothing at all in that direction. A flashing red is different again - stop, yield to everything, then proceed when clear.",
        trap:
          "Cross traffic clearing is not the signal to go. Only the light, or a permitted turn, releases you.",
        excerptKey: "steady-red",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s4_08",
        topic: "speed",
        question:
          "You are on a divided highway outside any business or residential district, with no posted limit. What speed applies?",
        choices: ["55 mph", "50 mph", "60 mph", "65 mph"],
        correctIndex: 0,
        explanation:
          "Fifty-five on a divided highway in other locations. Take the median away and the same road defaults to 50.",
        context:
          "Maryland's defaults track two variables - the district you are in and whether the road is divided. Business districts and undivided residential roads default to 30, divided residential roads to 35, undivided highways elsewhere to 50 and divided highways elsewhere to 55. A limit above 55 may only be posted on an interstate or an expressway, and nothing above 70 anywhere.",
        trap:
          "Sixty-five is a common guess because it is a familiar interstate number. As a statutory default in Maryland it does not exist.",
        excerptKey: "speed-55-divided",
        sourceLabel: "Maryland Transportation Article 21-801.1",
        sourceUrl: gtr("21-801.1"),
      },
      {
        id: "md_s4_09",
        topic: "impairment",
        question:
          "You have had one drink and feel completely normal. What does the Maryland manual say about that?",
        choices: [
          "One drink is within the legal allowance for any driver",
          "You are safe to drive as long as you wait an hour",
          "Vision, simple movements and reaction time can already be affected",
          "Only spirits affect driving at that level",
        ],
        correctIndex: 2,
        explanation:
          "Maryland states that a single drink can affect vision, simple movements and reaction time, and raise crash risk - well before .08.",
        context:
          "The manual makes the same point twice: any amount of alcohol can impair, and judgment and coordination may be impaired at a much lower BAC than .08, which can still bring criminal charges. It also warns you cannot work out your own reading from the number of drinks, because weight, body fat, how long ago and how much you ate, tiredness, mood and medication all change the answer.",
        trap:
          "The .08 figure describes where a per se offence begins, not where impairment begins. They are different lines.",
        excerptKey: "any-alcohol",
        sourceLabel: "Maryland Driver's Manual - Section 6.A Alcohol, Drugs and Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s4_10",
        topic: "emergencies",
        question: "What is the first thing the manual tells you to do in any crash?",
        choices: [
          "Photograph the damage before anything else",
          "Put on your emergency flashers or flares to warn other drivers",
          "Move both vehicles onto the shoulder",
          "Exchange insurance details",
        ],
        correctIndex: 1,
        explanation:
          "Warn the traffic behind you first. Flashers or flares stop the crash becoming a bigger one while everybody is standing in the road.",
        context:
          "What follows depends on the situation. With an injury you stay put, call 911 with the number of people, the type of injury and the location, and do not move the vehicles. With no injury but an immobile car you call 911 and stay clear of traffic. With no injury and a car that drives, you move it off the road and exchange details, then note the location, time, conditions and damage.",
        trap:
          "Details and photographs matter, but they come after the scene is made visible. The first action is warning other drivers.",
        excerptKey: "crash-flashers",
        sourceLabel: "Maryland Driver's Manual - Section 8.A Crashes",
        sourceUrl: HB,
      },
      {
        id: "md_s4_11",
        topic: "parking",
        question: "What does Maryland law require before you leave a vehicle unattended?",
        choices: [
          "Only that the doors are locked",
          "Only that the parking brake is set",
          "The engine running is acceptable for up to fifteen minutes",
          "Engine stopped, ignition locked, key removed and the brake effectively set",
        ],
        correctIndex: 3,
        explanation:
          "All four, together: engine off, ignition locked, key out, brake set. On a grade the front wheels are turned to the kerb as well.",
        context:
          "The statute allows narrow exceptions - a remote start system running for up to five consecutive minutes while the vehicle is stationary, or a locked vehicle on private property not open to the public on the same terms. The manual's own parking routine covers the same ground in plainer language: parking brake on, transmission in gear or in park, mirrors and traffic checked before opening the door, keys taken with you.",
        trap:
          "Locking the doors is not what the statute is about. Its requirements are the ignition, the key and the brake.",
        excerptKey: "park-unattended",
        sourceLabel: "Maryland Transportation Article 21-1101",
        sourceUrl: gtr("21-1101"),
      },
      {
        id: "md_s4_12",
        topic: "rules",
        question: "May you use the shoulder to get past slow-moving traffic in Maryland?",
        choices: [
          "No - passing on the shoulder is prohibited on either side",
          "Yes, on the right only, and only below 25 mph",
          "Yes, if the shoulder is paved and you signal",
          "Yes, if traffic has been stopped for more than a minute",
        ],
        correctIndex: 0,
        explanation:
          "The shoulder is not a passing lane in Maryland, on either side of the road. It appears on the manual's list of places you may not pass at all.",
        context:
          "That list also covers no-passing zones, a solid yellow line on your side, double solid yellow lines, any pass that would interfere with other traffic, the approach to a hill crest or a blind curve, within 100 feet of a bridge, elevated road or tunnel when your view is obstructed, and within 100 feet of an intersection or railroad crossing. Where passing on the right is allowed, you must stay on the roadway to do it.",
        trap:
          "Passing on the right is lawful in defined situations; using the shoulder to do it is not one of them.",
        excerptKey: "no-passing-shoulder",
        sourceLabel: "Maryland Driver's Manual - Section 3.I Passing",
        sourceUrl: HB,
      },
      {
        id: "md_s4_13",
        topic: "sharing",
        question:
          "Roughly how much road does a fully loaded tractor-trailer need to stop, according to the manual?",
        choices: [
          "About the same as a car",
          "About two car lengths more than a car",
          "About the length of a football field",
          "About half a mile",
        ],
        correctIndex: 2,
        explanation:
          "The length of a football field. A loaded truck can weigh more than 80,000 pounds against a typical car's 2,000, and that mass has to go somewhere.",
        context:
          "The figure explains the manual's advice: never cut in front of a truck, and after passing one, pull back in only when you can see both its headlights in your mirror - then do not slow down. Truck and bus drivers need almost twice as much time and room to stop as a car, so the space in front of them is not spare road.",
        trap:
          "The instinct after overtaking is to move back in as soon as you are past the cab. That puts you inside the front blind spot and inside the stopping distance.",
        excerptKey: "truck-weight",
        sourceLabel: "Maryland Driver's Manual - Section 7.C Large Trucks and Buses",
        sourceUrl: HB,
      },
      {
        id: "md_s4_14",
        topic: "signs",
        question: "What does a red background on a traffic sign tell you?",
        choices: [
          "Stop, yield, do not enter, or wrong way",
          "A general warning about the road ahead",
          "An emergency traffic incident",
          "A regulatory speed limit",
        ],
        correctIndex: 0,
        explanation:
          "Red is Maryland's prohibition colour, used for stop, yield, do not enter and wrong way. It always signals something you must not do or must not pass.",
        context:
          "The rest of the palette: yellow for general warnings, white for speed limits and other regulatory signs, orange for construction and maintenance areas, green for destinations and directions, blue for services, brown for recreation, fluorescent yellow-green for school, pedestrian and bicycle signs, fluorescent pink for emergency traffic incidents, and black for one-way and changeable message signs.",
        trap:
          "Red does not cover every regulation. Speed limit signs are white, and so are most of the other black-on-white instructions.",
        excerptKey: "sign-color-red",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Colors & Shapes",
        sourceUrl: HB,
      },
      {
        id: "md_s4_15",
        topic: "safety",
        question: "What does Maryland law say about wearing headphones or earplugs while driving?",
        choices: [
          "They are permitted if the volume is low",
          "You may not drive with earplugs, headsets or earphones in both ears",
          "They are prohibited entirely, including hearing aids",
          "They are permitted for hands-free phone calls only",
        ],
        correctIndex: 1,
        explanation:
          "Both ears is the line. One ear is not covered by the prohibition, and hearing aid devices are expressly allowed.",
        context:
          "The rule sits with Maryland's other attention rules: no holding a phone while driving for any driver, no wireless device at all for learner permit and provisional holders, and no phone use whatever for drivers under 18 except a 911 call. Distracted driving, the manual notes, causes more police-reported crashes than anything else.",
        trap:
          "It is not a blanket ban on anything in your ears. Hearing aids are permitted, and the offence is specifically both ears.",
        excerptKey: "headsets-both-ears",
        sourceLabel: "Maryland Driver's Manual - Section 10.J Headsets and Earplugs",
        sourceUrl: HB,
      },
      {
        id: "md_s4_16",
        topic: "signals",
        question: "What does the manual say a steady green light means?",
        choices: [
          "Proceed with caution once you have checked no other vehicles are in the intersection",
          "Proceed immediately, since waiting delays traffic behind you",
          "Proceed only if you can clear the intersection before it changes",
          "Proceed, and pedestrians must wait",
        ],
        correctIndex: 0,
        explanation:
          "Green is a permission with a condition attached: check the intersection is clear first, then go. You still yield to pedestrians and to vehicles already inside it.",
        context:
          "Maryland's phrasing is deliberate. The manual defines proceeding with caution as being careful and paying close attention, and states the yield duty separately for pedestrians and vehicles in the intersection, and again for turns. State law puts it the same way: traffic facing a circular green may proceed straight or turn unless a sign prohibits it, yielding to anyone lawfully in the intersection or the adjacent crosswalk.",
        trap:
          "\"Green means go\" leaves out the checking. Cars finishing a turn and pedestrians finishing a crossing are still there when your light changes.",
        excerptKey: "steady-green",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s4_17",
        topic: "licensing",
        question: "Is parallel parking part of the Maryland driving skills test?",
        choices: [
          "Yes, and failing it fails the test",
          "Yes, but only for applicants under 18",
          "No - it is no longer required on the driving test",
          "No, but it is tested separately at a later appointment",
        ],
        correctIndex: 2,
        explanation:
          "Maryland dropped parallel parking from the driving test. You still learn it in the driver education course, but it is not a tested manoeuvre.",
        context:
          "What is tested is pull-in parking, back-in parking and a three-point turn, done in a 10 by 20 foot space for the parking and a 16 by 20 foot space for the turn. The manual notes that the reverse two-point turn on the course exercises the same skills parallel parking would - space judgment, mirrors, signals, steering, braking and smooth acceleration.",
        trap:
          "The skill has not disappeared from the syllabus, only from the test. People who assume it is still examined waste practice time on the wrong manoeuvre.",
        excerptKey: "parallel-parking-not-required",
        sourceLabel: "Maryland Driver's Manual - Section 10.K Parallel Parking",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s4_18",
        topic: "rightOfWay",
        question:
          "You are turning into a driveway and your path crosses a marked bike lane with a cyclist riding in it. Who yields?",
        choices: [
          "The cyclist, because you signalled first",
          "You - a driver entering or crossing a bike lane yields to riders in it",
          "Whoever reaches the driveway entrance first",
          "Neither, unless the bike lane is separated by a barrier",
        ],
        correctIndex: 1,
        explanation:
          "Entering or crossing a bike lane or shoulder means yielding to anyone already riding in it. The same applies to a shoulder being used by a cyclist.",
        context:
          "State law states the duty in the same terms and adds teeth: breaching it in a way that contributes to serious injury or death carries imprisonment or a fine of up to $2,000. Maryland also gives a cyclist the right of way when a motor vehicle is turning, treats a bicycle in a crosswalk as it does a pedestrian, and requires at least three feet of space when overtaking.",
        trap:
          "Signalling establishes what you intend, not who has priority. The bike lane's occupant keeps the right of way.",
        excerptKey: "bicycle-bike-lane-yield",
        sourceLabel: "Maryland Driver's Manual - Section 7.F Bicycles",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s4_19",
        topic: "impairment",
        question:
          "A driver is stopped with no alcohol in their system but is impaired by drugs. What can MVA do?",
        choices: [
          "Nothing, since the offence is criminal rather than administrative",
          "Issue a warning letter only",
          "Add points but leave the licence in force",
          "Suspend the licence",
        ],
        correctIndex: 3,
        explanation:
          "MVA suspends for drug impairment as well as for alcohol. The administrative consequence does not depend on there being a breath reading.",
        context:
          "Maryland's implied consent covers drugs from the outset, and where an officer suspects drug impairment a drug recognition expert may request a blood test. Refusing any of it produces its own suspension once the officer certifies the refusal. Illegal drugs, some prescription medicines and chemical inhalants can all cost you the licence.",
        trap:
          "Treating the .08 reading as the only route to suspension misreads the scheme. Drugs are a separate and independent ground.",
        excerptKey: "bac-suspension",
        sourceLabel: "Maryland Driver's Manual - Section 9.B Implied Consent",
        sourceUrl: HB,
      },
      {
        id: "md_s4_20",
        topic: "rules",
        question:
          "You are joining an interstate and your car is slower than the traffic already on it. Which lane should you use?",
        choices: [
          "The right lane, wherever possible",
          "The centre lane, to leave room on both sides",
          "The left lane, so faster traffic can undertake you",
          "Whichever lane has the shortest queue",
        ],
        correctIndex: 0,
        explanation:
          "Slower than the flow means the right lane wherever possible. Maryland states it as a requirement, not a preference.",
        context:
          "The rest of the highway routine: use the acceleration lane to match the speed of traffic, do not cross the solid lines that separate the entrance from the highway, and when leaving, move right well before the exit and slow in the deceleration lane rather than on the highway itself. Where stay-right signs are posted you keep to the right lane or lanes except when passing.",
        trap:
          "Sitting in a middle or left lane below the speed of traffic is not neutral. The manual and the signage both push slower vehicles right.",
        excerptKey: "slow-right-lane",
        sourceLabel: "Maryland Driver's Manual - Section 5.J Interstate Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s4_21",
        topic: "emergencies",
        question: "When may you stop on an interstate in Maryland?",
        choices: [
          "In a travel lane, if your hazard lights are on",
          "Anywhere on the shoulder, for any reason",
          "In a travel lane, to let a passenger out",
          "On the shoulder, only when the vehicle is disabled or you have another emergency",
        ],
        correctIndex: 3,
        explanation:
          "Travel lanes are never available for stopping. The shoulder is, but only for a breakdown or another genuine emergency.",
        context:
          "Once stopped, put the emergency flashers on and stay inside the vehicle if you can, because standing or walking beside a highway at those speeds is dangerous. If you must get out, move well away from the road, behind an embankment, barrier or guardrail. Never stop or park in the triangular painted zones where a ramp splits from the road, and never reverse on any part of a highway.",
        trap:
          "Hazard lights do not create permission to stop in a live lane. They warn others about a situation that should not exist there in the first place.",
        excerptKey: "highway-stopping",
        sourceLabel: "Maryland Driver's Manual - Section 5.J Interstate Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s4_22",
        topic: "sharing",
        question:
          "The lane ahead is wide and a motorcycle is riding on one side of it. May you share the lane?",
        choices: [
          "No - do not share a lane with a motorcycle",
          "Yes, if you leave three feet of space",
          "Yes, if the motorcycle is below the speed limit",
          "Yes, on multilane roads only",
        ],
        correctIndex: 0,
        explanation:
          "Maryland says plainly not to share a lane with a motorcycle. Riders are entitled to the whole lane and use its width deliberately.",
        context:
          "The reasons the manual gives are practical: riders shift within the lane to avoid potholes and oil, to manage crosswind, and to stay where drivers can see them. It also asks you to look twice before changing lanes or merging, because a bike can vanish into a blind spot, and to yield to an oncoming motorcycle when you are turning left - drivers are at fault in over half of car-motorcycle crashes.",
        trap:
          "Three feet is the overtaking rule for bicycles and scooters, not a licence to sit alongside a motorcycle in the same lane.",
        excerptKey: "motorcycle-lane",
        sourceLabel: "Maryland Driver's Manual - Section 7.E Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "md_s4_23",
        topic: "safety",
        question:
          "Fog thickens until you can no longer drive safely. What does the manual tell you to do?",
        choices: [
          "Slow to walking pace and continue in the right lane",
          "Stop on the shoulder with high beams on",
          "Follow the taillights of the vehicle ahead",
          "Pull completely off the road to a safe location and switch on your emergency flashers",
        ],
        correctIndex: 3,
        explanation:
          "Get completely off the road, somewhere safe, and put the flashers on. Stopping half on the carriageway leaves you exactly where a following driver will not see you.",
        context:
          "Before it gets to that point, Maryland's fog rules are to cut your speed, cut it again when you see headlights or taillights ahead, be ready to stop quickly, and use low beams only, plus fog lights if fitted. High beams make things worse by bouncing light back off the droplets.",
        trap:
          "Following the taillights ahead feels like a way through and is how chain collisions in fog begin. It also puts you far too close.",
        excerptKey: "fog-pull-off",
        sourceLabel: "Maryland Driver's Manual - Section 5.C Driving in Fog",
        sourceUrl: HB,
      },
      {
        id: "md_s4_24",
        topic: "parking",
        question:
          "You hold a valid disability placard. May you park across the striped access aisle beside a disability space?",
        choices: [
          "Yes, the placard covers the aisle as well",
          "No - parking on any part of an access aisle is a violation even with a placard",
          "Yes, if no other space is available",
          "Yes, for up to fifteen minutes",
        ],
        correctIndex: 1,
        explanation:
          "The access aisle stays clear regardless of what is hanging from your mirror. It is the space a wheelchair or mobility device needs to get in and out of a vehicle.",
        context:
          "Maryland lists the citable violations together: parking in a disability space without a plate or placard and without the qualifying person present as driver or passenger, blocking any part of a curb cut even with a placard, parking on an access aisle even with a placard, using an expired placard, using a plate or placard without the qualifying person present and without proper identification, and any fraud in applying for one.",
        trap:
          "A placard is permission to use the marked space, not the striped area beside it. The same goes for a curb cut.",
        excerptKey: "disability-access-aisle",
        sourceLabel: "Maryland Driver's Manual - Section 9.F Disability Parking",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s4_25",
        topic: "signs",
        question: "What is the wide white line painted across a lane at an intersection?",
        choices: [
          "A yield line, marking where you give way",
          "A crosswalk boundary",
          "A lane-drop warning",
          "A stop line, showing where to stop for a stop sign or red signal",
        ],
        correctIndex: 3,
        explanation:
          "That is the stop line, and it is the first of the three stopping points at a stop sign or a red light.",
        context:
          "Its counterpart is the yield line - rows of small triangles across the lane, showing where you give way to other vehicles or pedestrians. Word and symbol markings do related work, including SCHOOL and RxR painted on the surface to warn of school areas and railroad crossings. Stopping past the line matters practically as well as legally: it can put your car in the path of a truck turning in from the cross street.",
        trap:
          "Triangles are a yield line, not a stop line. They tell you where to give way, not where to stop.",
        excerptKey: "stop-line-def",
        sourceLabel: "Maryland Driver's Manual - Section 4.C Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "md_s4_26",
        topic: "rightOfWay",
        question:
          "Two drivers arrive at an uncontrolled intersection at exactly the same time. Which one yields?",
        choices: [
          "The one on the right",
          "The one going straight",
          "The one on the left",
          "The one travelling faster",
        ],
        correctIndex: 2,
        explanation:
          "The driver on the left yields, because Maryland's rule is that you give way to the driver on your right when you arrive together.",
        context:
          "The rule is stated twice in the manual: once generally for simultaneous arrival at an intersection, and again specifically for a four-way stop. It only operates on a tie - whoever clearly arrived first goes first. Sitting over all of it is the manual's standing instruction never to assume you automatically have the right of way.",
        trap:
          "The question is phrased around who yields rather than who goes, which flips the familiar answer. Yield to the right means the driver on the left is the one waiting.",
        excerptKey: "row-driver-right",
        sourceLabel: "Maryland Driver's Manual - Section 3.B Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "md_s4_27",
        topic: "licensing",
        question:
          "How many points within a two-year period bring a suspension, and how many bring a revocation, in Maryland?",
        choices: [
          "5 points suspend, 8 points revoke",
          "8 points suspend, 12 points revoke",
          "12 points suspend, 20 points revoke",
          "3 points suspend, 6 points revoke",
        ],
        correctIndex: 1,
        explanation:
          "Eight points suspends the licence and twelve revokes it, counted over any two-year period.",
        context:
          "Two earlier thresholds sit below them: three points triggers a warning letter, and five points requires attendance at a driver improvement programme. Provisional licence holders face a tighter regime again - MVA suspends a provisional licence for six months the first time five or more points accumulate within twelve months, and twelve months on each later occasion.",
        trap:
          "Five points is a real threshold but it means a driver improvement programme, not a suspension - unless the licence is provisional, where five points in twelve months does suspend.",
        excerptKey: "points-8-12",
        sourceLabel: "Maryland Transportation Article 16-404",
        sourceUrl: gtr("16-404"),
        commonlyMissed: true,
      },
      {
        id: "md_s4_28",
        topic: "signals",
        question:
          "You have stopped at a red light and are about to make a permitted turn. Who do you yield to?",
        choices: [
          "Pedestrians only",
          "Cross traffic only",
          "Pedestrians and all other traffic",
          "Nobody, once you have stopped completely",
        ],
        correctIndex: 2,
        explanation:
          "Everything. The stop earns you the chance to look; it does not give you priority over anyone.",
        context:
          "The permission covers two movements in Maryland: right on red, and left on red from a one-way street onto another one-way street. Both require a complete stop first, both are cancelled by a sign prohibiting the turn, and both leave you yielding to pedestrians and all other traffic before you move.",
        trap:
          "The pedestrian half of the duty is the one people remember. Cross traffic and vehicles already turning are covered too.",
        excerptKey: "red-turn-yield",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s4_29",
        topic: "rules",
        question: "You realise too late that you have taken the wrong exit from a highway. What should you do?",
        choices: [
          "Reverse carefully back up the ramp",
          "Stop on the ramp and wait for a gap to rejoin",
          "Cross the painted gore area back onto the highway",
          "Carry on until you are off the ramp, then look for a way to rejoin",
        ],
        correctIndex: 3,
        explanation:
          "Finish the exit, then find a legitimate way back on. Reversing on any part of a highway is prohibited, and so is stopping on the ramp.",
        context:
          "State law backs it up: a driver may not reverse on the shoulder or roadway of any controlled access highway, and Maryland prohibits stopping, standing or parking on an entrance or exit ramp of a road with two or more lanes in the same direction. The triangular painted zone at the ramp split is off limits as well.",
        trap:
          "A missed exit feels like a small problem worth a small reversal. On a highway that manoeuvre is both unlawful and among the most dangerous things you can do.",
        excerptKey: "wrong-exit",
        sourceLabel: "Maryland Driver's Manual - Section 5.J Interstate Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s4_30",
        topic: "speed",
        question: "Which Maryland location has a statutory speed limit of 15 mph?",
        choices: [
          "Alleys in Baltimore County",
          "All school zones statewide",
          "All alleys in the state",
          "Shopping centre car parks",
        ],
        correctIndex: 0,
        explanation:
          "Alleys in Baltimore County carry a 15 mph statutory limit. It is a county-specific entry sitting in the middle of the statewide list.",
        context:
          "The full statutory list runs: 15 mph in Baltimore County alleys, 30 mph in a business district and on undivided residential highways, 35 mph on divided residential highways, 50 mph on undivided highways elsewhere, and 55 mph on divided highways elsewhere. Local authorities can move these figures within limits after an engineering and traffic study, and counties may drop school zones to 15 mph during school hours.",
        trap:
          "Fifteen also appears as the floor a county may set for a school zone. The statutory 15 mph limit that applies without any local action is the Baltimore County alley rule.",
        excerptKey: "speed-15-alley",
        sourceLabel: "Maryland Transportation Article 21-801.1",
        sourceUrl: gtr("21-801.1"),
        commonlyMissed: true,
      },
      {
        id: "md_s4_31",
        topic: "sharing",
        question: "Who must wear a bicycle helmet in Maryland?",
        choices: [
          "All riders regardless of age",
          "Anyone under 16, including passengers",
          "Anyone under 18",
          "Only riders on roads with a limit above 35 mph",
        ],
        correctIndex: 1,
        explanation:
          "Under 16, and it covers passengers who are not steering as well as the rider.",
        context:
          "State law extends the requirement to a child under 16 carried in a restraining seat or a trailer, and enforces it by warning and education rather than a fine. It also carves out an oddity worth knowing: the requirement does not apply on the Ocean City boardwalk between the inlet and 27th Street during the hours when local ordinance permits cycling there. Helmets are strongly recommended at all ages.",
        trap:
          "Eighteen is the guess that matches most age-based driving rules. Maryland's helmet threshold is 16.",
        excerptKey: "bicycle-helmet-16",
        sourceLabel: "Maryland Driver's Manual - Section 10.M Rules and Tips for Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "md_s4_32",
        topic: "safety",
        question:
          "Your car has lane keeping assistance and automatic emergency braking. What does the manual say about relying on them?",
        choices: [
          "You remain responsible for safe operation of the vehicle at all times",
          "They may be relied on in good weather",
          "They replace the need to check mirrors on the highway",
          "They are legally equivalent to a second driver",
        ],
        correctIndex: 0,
        explanation:
          "Driver assistance assists. Maryland puts responsibility for the safe operation of the vehicle on you at all times, without qualification.",
        context:
          "The manual lists the limitations: these systems may not work properly in rain, snow or fog, or on hills and around curves; they behave differently between vehicles, right down to the dashboard icons; and their names often do not describe what they actually do. It asks you to keep sensors clean and undamaged, keep software current, and learn the systems on any vehicle before you drive it.",
        trap:
          "The manual credits these systems with preventing 40% of crashes when used properly. That is a reason to use them, not a reason to hand over the driving.",
        excerptKey: "adas-not-autonomous",
        sourceLabel: "Maryland Driver's Manual - Section 7.H Understanding Vehicle Technologies",
        sourceUrl: HB,
      },
      {
        id: "md_s4_33",
        topic: "impairment",
        question: "What does Maryland's hand-held phone law prohibit for an adult driver with a full licence?",
        choices: [
          "All phone use, including hands-free",
          "Using the phone while holding it, including texting",
          "Texting only, with calls permitted in the hand",
          "Phone use only in work zones and school zones",
        ],
        correctIndex: 1,
        explanation:
          "For a fully licensed adult, the ban is on holding the phone. Hands-free calling remains lawful, though the manual urges you to keep it rare and brief.",
        context:
          "The restriction tightens as you go down the licensing ladder: no wireless device at all, hands-free included, for learner permit and provisional holders, and no phone use whatever for drivers under 18 except a 911 call. State law separately bars handheld use by permit and provisional holders aged 18 or over, and by school vehicle drivers carrying passengers.",
        trap:
          "\"Hands-free is fine\" is true only for drivers who are past the graduated stages. It is not true for a permit or provisional holder of any age.",
        excerptKey: "handheld-ban",
        sourceLabel: "Maryland Driver's Manual - Section 6.C Distracted Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s4_34",
        topic: "emergencies",
        question: "A police officer pulls you over. Where does the manual say to keep your hands?",
        choices: [
          "In plain view, ideally on the steering wheel",
          "In your lap, out of sight",
          "Reaching for your licence and registration straight away",
          "On the door handle, ready to step out",
        ],
        correctIndex: 0,
        explanation:
          "Hands where the officer can see them, on the wheel for preference, and no movements that look like reaching or hiding.",
        context:
          "The rest of the routine: pull off as far from traffic as you can, put the flashers on, switch off engine and radio, lower your window, stay in the vehicle with your seat belt fastened, and if a citation is issued, do not argue about it at the roadside - that is what the court date is for. You must follow the officer's directions or you may be arrested.",
        trap:
          "Digging out your documents before you are asked is well meant and reads badly. Wait, and keep your hands visible.",
        excerptKey: "traffic-stop-hands",
        sourceLabel: "Maryland Driver's Manual - Section 8.C Traffic Stops",
        sourceUrl: HB,
      },
      {
        id: "md_s4_35",
        topic: "rules",
        question:
          "You are on an entrance ramp joining a limited access highway. What does the manual tell you not to do?",
        choices: [
          "Match your speed to the traffic already on the highway",
          "Use the acceleration lane to build speed",
          "Check your mirrors and blind spot before merging",
          "Cross the solid lines dividing the entrance from the highway",
        ],
        correctIndex: 3,
        explanation:
          "The solid lines separating the entrance from the highway are not to be crossed. You use the acceleration lane to reach the speed of traffic and merge where the lines allow it.",
        context:
          "Right of way runs against you here: the manual lists drivers already on the highway among those you yield to when you are on an entrance or acceleration ramp. If you are still slower than the flow once you are on, you use the right lane wherever possible. Leaving works in reverse - move right well before your exit and shed speed in the deceleration lane.",
        trap:
          "Cutting across the solid lines to grab a gap early is the mistake. The merge point is where the markings say it is.",
        excerptKey: "entering-highway",
        sourceLabel: "Maryland Driver's Manual - Section 5.J Interstate Driving",
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
      "Maryland's genuine traps: the rules with a county carved out of them, the numbers that live only in the statute book, and the places where the manual and the law say slightly different things.",
    questions: [
      {
        id: "md_s5_01",
        topic: "parking",
        question:
          "Where in Maryland does the state's 20-foot no-parking rule for crosswalks at intersections not apply?",
        choices: [
          "Anywhere a local authority has posted its own signs",
          "In Baltimore City",
          "In Baltimore County",
          "On any road with a limit below 30 mph",
        ],
        correctIndex: 1,
        explanation:
          "The statute expressly excludes Baltimore City from that subsection. Everywhere else in Maryland, 20 feet from a crosswalk at an intersection is the state rule.",
        context:
          "Maryland's parking statute is a long list of prohibitions with occasional local exceptions written into individual subsections, which is why reading it as one uniform code goes wrong. The other distances - 15 feet from a hydrant, 30 feet on the approach to a stop sign or signal, 50 feet from the nearest rail at a crossing - carry no city carve-out.",
        trap:
          "It is Baltimore City, not Baltimore County, that is excluded here. The county appears in the same statute book for a different rule - the 15 mph alley limit.",
        excerptKey: "park-crosswalk-20",
        sourceLabel: "Maryland Transportation Article 21-1003",
        sourceUrl: gtr("21-1003"),
        commonlyMissed: true,
      },
      {
        id: "md_s5_02",
        topic: "sharing",
        question:
          "Maryland's manual and its statute state the school bus exception differently. What does the Transportation Article say?",
        choices: [
          "There is no exception in the statute at all",
          "The exception applies only where a physical barrier separates the roadways",
          "The rule does not apply to a driver on a divided highway if the school vehicle is on a different roadway",
          "The exception applies on any road of three or more lanes",
        ],
        correctIndex: 2,
        explanation:
          "The statute excuses a driver on a divided highway when the school vehicle is on a different roadway. It does not require a physical barrier - the manual's tighter wording does.",
        context:
          "The practical answer is to follow the manual, because the stricter reading is never wrong and the fine reaches $1,000. The rest of the rule is common ground: stop at least 20 feet from the front or the rear of the bus depending on which way you are approaching, and stay stopped until the bus moves or the red lights go out.",
        trap:
          "Neither source excuses you on an undivided multilane road. The disagreement is about what counts as divided, not about whether you stop.",
        excerptKey: "schoolbus-divided-statute",
        sourceLabel: "Maryland Transportation Article 21-706",
        sourceUrl: gtr("21-706"),
        commonlyMissed: true,
      },
      {
        id: "md_s5_03",
        topic: "licensing",
        question: "What score does MVA require to pass the noncommercial knowledge test?",
        choices: ["80%", "88%", "85%", "90%"],
        correctIndex: 1,
        explanation:
          "Eighty-eight per cent, which on a 25-question paper means 22 correct and at most 3 wrong.",
        context:
          "The manual gives the length and the time limit but not the pass mark, so the figure comes from MVA's Knowledge Tests page. Passing scores stay valid for six months. Fail once and you may return the next business day if an appointment is free; fail twice or more and you wait at least seven calendar days.",
        trap:
          "MVA's older Knowledge Test Appointment Instructions page still says 85%. The current Knowledge Tests page says 88%, and 88% is the stricter and safer standard to prepare to.",
        excerptKey: "test-pass-mark",
        sourceLabel: "MDOT MVA - Knowledge Tests",
        sourceUrl: TEST,
        commonlyMissed: true,
      },
      {
        id: "md_s5_04",
        topic: "rules",
        question:
          "The manual tells you to signal before you reach a turn. What does Maryland law add to that?",
        choices: [
          "The signal must run continuously for at least the last 100 feet before turning",
          "The signal must be given for at least five seconds",
          "The signal is only required if a vehicle is behind you",
          "The signal must be cancelled before the turn is complete",
        ],
        correctIndex: 0,
        explanation:
          "A hundred feet of continuous signal before the turn. The statute also allows a cyclist to interrupt the signal in order to keep control of the bike.",
        context:
          "The same section requires a signal before stopping or suddenly slowing where a following driver could be affected and you have the opportunity, and it prohibits using your indicators as a \"do pass\" courtesy flash to a driver behind. It also states that you may not turn at all unless the movement can be made with reasonable safety.",
        trap:
          "The signal is required when another vehicle might be affected - which in practice you cannot reliably judge - so signalling only when you can see somebody is the wrong habit to build.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Maryland Transportation Article 21-604",
        sourceUrl: gtr("21-604"),
      },
      {
        id: "md_s5_05",
        topic: "safety",
        question:
          "You are on an unlit road using high beams and a car appears coming the other way. At what distance must you dip them?",
        choices: ["At least 200 feet", "At least 300 feet", "At least 400 feet", "At least 500 feet"],
        correctIndex: 3,
        explanation:
          "Five hundred feet before you reach an oncoming vehicle. A different figure - 300 feet - applies when you are following someone.",
        context:
          "Maryland gives you three headlight numbers and they do different jobs. The 1,000-foot figure is the trigger for having lights on at all: if you cannot clearly see that far ahead, they go on. The 500-foot figure is for dipping to oncoming traffic. The 300-foot figure is for dipping when you are behind another vehicle.",
        trap:
          "Swapping the 500 and the 300 is the easy error. The longer distance belongs to oncoming traffic, whose driver is looking straight into your beams.",
        excerptKey: "lowbeam-500",
        sourceLabel: "Maryland Driver's Manual - Section 5.A Driving in Reduced Visibility",
        sourceUrl: HB,
      },
      {
        id: "md_s5_06",
        topic: "rightOfWay",
        question:
          "The car in the lane beside you stops at a marked crosswalk. You cannot see why. What does Maryland law require?",
        choices: [
          "You may not overtake and pass that stopped vehicle",
          "You may pass if you slow to walking pace",
          "You may pass, since the duty is on the stopped driver",
          "You may pass once the pedestrian reaches the far kerb",
        ],
        correctIndex: 0,
        explanation:
          "A vehicle stopped at a crosswalk to let someone cross may not be overtaken. Whatever it stopped for is still in the road, hidden by the very car you would be passing.",
        context:
          "The manual states the same rule in one line - you may not pass any vehicle that is stopped at a crosswalk. The statute adds the setting: a marked crosswalk, or an unmarked crosswalk at an intersection. Committing this violation or the failure-to-stop violation in a way that contributes to a crash carries up to two months' imprisonment or a $1,000 fine.",
        trap:
          "Not being able to see a pedestrian is the reason for the rule, not a reason to disregard it. The stopped vehicle is the obstruction.",
        excerptKey: "ped-no-overtake",
        sourceLabel: "Maryland Transportation Article 21-502",
        sourceUrl: gtr("21-502"),
        commonlyMissed: true,
      },
      {
        id: "md_s5_07",
        topic: "signs",
        question:
          "When may you disregard a traffic control device in Maryland?",
        choices: [
          "When the road is clearly empty in all directions",
          "When a police officer, other emergency personnel, or a uniformed school crossing guard directs you otherwise",
          "When the device is obviously faulty",
          "When following an emergency vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Only a person directing traffic overrides a device: a police officer or other emergency personnel, or a uniformed school crossing guard near a school.",
        context:
          "Everything else stays binding. A signal that has failed does not become advisory - you stop at the line, yield, and proceed when safe. And you may not sidestep a device by leaving the road, since Maryland specifically prohibits driving across private property to avoid obeying one.",
        trap:
          "Cutting through a petrol station forecourt to skip a red light is the manoeuvre Maryland names and bans outright.",
        excerptKey: "exception-officer",
        sourceLabel: "Maryland Driver's Manual - Section 4 Signs, Signals and Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "md_s5_08",
        topic: "impairment",
        question:
          "You are 22 and hold a Maryland provisional licence. What wireless device use is allowed while driving?",
        choices: [
          "Hands-free calls, since you are over 18",
          "Calls but not texting",
          "Navigation apps only",
          "None, apart from a 911 emergency call",
        ],
        correctIndex: 3,
        explanation:
          "The restriction follows the licence, not the age. A provisional or learner licence holder may not use any wireless communication device, hands-free included, except to call 911.",
        context:
          "This catches adult drivers who assume the tighter rules are only for teenagers. Maryland stacks three layers: everyone is barred from holding a phone, permit and provisional holders are barred from wireless devices altogether, and drivers under 18 are barred from phone use in any form. MVA states that a phone or device breach can suspend a provisional licence for 90 days.",
        trap:
          "Being over 18 relaxes nothing here. It only changes which statute the handheld ban comes from.",
        excerptKey: "provisional-wireless",
        sourceLabel: "Maryland Driver's Manual - Section 9.A Restrictions",
        sourceUrl: HB,
      },
      {
        id: "md_s5_09",
        topic: "speed",
        question:
          "Two rural highways run through the same countryside, both unposted. One has a median, one does not. How do their default limits compare?",
        choices: [
          "Both default to 55 mph",
          "The divided road defaults to 55 and the undivided road to 50",
          "Both default to 50 mph",
          "The undivided road defaults higher, because it carries less traffic",
        ],
        correctIndex: 1,
        explanation:
          "Fifty-five for the divided highway, 50 for the undivided one. Maryland splits the default by road type at every level of the ladder.",
        context:
          "The same split runs through residential areas, where undivided defaults to 30 and divided to 35. Above these figures sit two ceilings: no road that is not an interstate or an expressway may be posted above 55, and nothing anywhere in the state above 70.",
        trap:
          "A road can feel like a highway and still be undivided, which caps its default five miles per hour lower. The median is the deciding feature.",
        excerptKey: "speed-55-divided",
        sourceLabel: "Maryland Transportation Article 21-801.1",
        sourceUrl: gtr("21-801.1"),
      },
      {
        id: "md_s5_10",
        topic: "signals",
        question:
          "You reach a railroad crossing where a red signal is flashing but no train is in sight. What must you do?",
        choices: [
          "Slow down and cross with caution",
          "Cross only if the gates are up",
          "Come to a complete stop and wait until the flashing stops and the way is clear",
          "Stop, then proceed after ten seconds",
        ],
        correctIndex: 2,
        explanation:
          "Stop completely even with no train visible, and wait for the flashing to stop as well as for the way to be clear.",
        context:
          "Maryland treats a down gate or a flashing light as the road being temporarily closed. After a train has gone, look both ways again before starting across, because another may be coming on a second track. Never start over the tracks unless you can get completely clear on the far side.",
        trap:
          "A flashing red at an ordinary junction lets you proceed once clear. At a railroad crossing the flashing itself must stop first.",
        excerptKey: "flashing-red-railroad",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s5_11",
        topic: "emergencies",
        question:
          "What happens to your licence if you are convicted of leaving the scene of a crash that seriously injures someone?",
        choices: [
          "It is revoked",
          "It is suspended for 90 days",
          "Points are assessed but the licence continues",
          "It is cancelled and cannot be reinstated",
        ],
        correctIndex: 0,
        explanation:
          "Revocation, plus up to five years in prison and a fine of up to $5,000. If the crash causes a death, leaving is a felony carrying up to ten years and $10,000.",
        context:
          "Revocation is a heavier sanction than suspension: with a suspension you temporarily lose the privilege, while a revoked licence stays gone until MVA decides you can drive safely again, after a minimum waiting period, and MVA may refuse. Cancellation is different again - it ends the privilege without reinstatement, and is used where a licence should never have been issued.",
        trap:
          "Suspension and revocation are not interchangeable words in Maryland. Leaving the scene of a serious-injury crash triggers the heavier one.",
        excerptKey: "crash-leaving-injury",
        sourceLabel: "Maryland Driver's Manual - Section 8.A Crashes",
        sourceUrl: HB,
      },
      {
        id: "md_s5_12",
        topic: "rules",
        question:
          "You are behind a delivery van that stops frequently. What following distance does the manual ask for?",
        choices: [
          "The usual 3 to 4 seconds",
          "2 seconds, since you will be at low speed",
          "Four or five seconds, and more if needed",
          "One vehicle length for every 10 mph",
        ],
        correctIndex: 2,
        explanation:
          "Behind buses and delivery vans Maryland raises the gap to four or five seconds, and more if the situation calls for it.",
        context:
          "The baseline is 3 to 4 seconds in ideal conditions, measured by picking a fixed reference point and counting from when the vehicle ahead passes it. Wet roads need considerably more space than dry, and snow or ice more again. State law states the underlying duty without any number at all: never follow more closely than is reasonable and prudent.",
        trap:
          "The extra second or two is not about speed but about frequency of stopping. A van that pulls up every hundred yards gives you no warning at all.",
        excerptKey: "following-buses",
        sourceLabel: "Maryland Driver's Manual - Section 3.D Following Distance",
        sourceUrl: HB,
      },
      {
        id: "md_s5_13",
        topic: "sharing",
        question: "Are bicycles allowed on sidewalks in Maryland?",
        choices: [
          "No, never",
          "Only where a sign expressly permits it",
          "Only for riders under 16",
          "Yes throughout the state, though local jurisdictions may prohibit it",
        ],
        correctIndex: 3,
        explanation:
          "Statewide permission with a local override. Bicycles are allowed on sidewalks across Maryland, but a local jurisdiction can ban them, so the local code decides in any given town.",
        context:
          "Riders on a sidewalk must give way to pedestrians and people using assisted mobility devices. State law puts it as permission unless prohibited by local ordinance, and adds that where riding on a sidewalk is allowed, a rider may also cross the road in a crosswalk from kerb to kerb. Mopeds are excluded from that permission.",
        trap:
          "Statewide permission plus a local veto is the shape of this rule. Answering a flat yes or a flat no both miss it.",
        excerptKey: "bicycle-sidewalks",
        sourceLabel: "Maryland Driver's Manual - Section 7.F Bicycles",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s5_14",
        topic: "signals",
        question:
          "You are driving in heavy rain at night and can barely make out the road edges. Which side should the yellow markings be on?",
        choices: [
          "Your right, marking the edge of the road",
          "Either side, depending on the direction of travel",
          "Your left, always",
          "Yellow markings are only used at intersections",
        ],
        correctIndex: 2,
        explanation:
          "Yellow always separates traffic going opposite ways, so it marks the left edge of your side of the road. If it appears on your right, you are on the wrong side.",
        context:
          "The manual gives this as a navigation aid for low visibility: use the edge lines or the right side of the road as your guide, remember that yellow belongs on your left, and remember that white marks the right edge and divides traffic going the same way. It is a check that works when you cannot see far enough ahead to read the road any other way.",
        trap:
          "This is not a rule about lane discipline but an orientation check. Yellow on your right in the dark is the strongest warning you will get that something has gone badly wrong.",
        excerptKey: "visibility-yellow-left",
        sourceLabel: "Maryland Driver's Manual - Section 5.A Driving in Reduced Visibility",
        sourceUrl: HB,
      },
      {
        id: "md_s5_15",
        topic: "licensing",
        question:
          "A 30-year-old applies for a first Maryland licence. How long must they hold the learner's permit?",
        choices: ["9 months", "6 months", "3 months", "At least 45 days"],
        correctIndex: 3,
        explanation:
          "Forty-five days for applicants aged 25 and over - much shorter than the nine months required of an under-18 applicant.",
        context:
          "The practice requirement drops too: 14 hours with a supervising driver, of which at least 3 must fall between half an hour before sunset and half an hour after sunrise, against 60 hours and 10 night hours for applicants under 25. The driver education course is still required, and so is the practice and skills log.",
        trap:
          "Maryland puts every first-time driver through the graduated system regardless of age, which is why a 30-year-old still has a permit stage at all.",
        excerptKey: "permit-45-days",
        sourceLabel: "Maryland Driver's Manual - Section 2.B Learner's Instructional Permit",
        sourceUrl: HB,
      },
      {
        id: "md_s5_16",
        topic: "parking",
        question:
          "May a driver with a disability placard park across a curb cut if no other space is free?",
        choices: [
          "Yes, provided the qualifying person is in the vehicle",
          "Yes, for short stops",
          "No - blocking any part of a curb cut is citable even with a placard",
          "Yes, if the vehicle also carries disability plates",
        ],
        correctIndex: 2,
        explanation:
          "A curb cut is the ramp people use to get from the pavement to the road. Blocking any part of it is a violation even for a placard holder.",
        context:
          "Maryland's list of citable disability-parking violations covers parking in a reserved space without a plate or placard and without the qualifying person present, blocking a curb cut, parking on an access aisle, using an expired placard, using a plate or placard without the qualifying person present and proper identification, and fraud in the application.",
        trap:
          "The placard grants access to designated spaces, not an exemption from the rules that keep those spaces usable.",
        excerptKey: "disability-curb-cut",
        sourceLabel: "Maryland Driver's Manual - Section 9.F Disability Parking",
        sourceUrl: HB,
      },
      {
        id: "md_s5_17",
        topic: "rightOfWay",
        question:
          "Which principle does the manual set above all the individual right-of-way rules?",
        choices: [
          "The larger vehicle yields to the smaller one",
          "The driver on the through road always proceeds",
          "Whoever signals first has priority",
          "Never assume you automatically have the right of way",
        ],
        correctIndex: 3,
        explanation:
          "The rules say who ought to yield. They do not guarantee that the other driver will, which is why Maryland tells you to consider the situation rather than assume.",
        context:
          "The individual rules follow from that: yield to whoever arrived first, to the driver on your right on a tie, to anyone still in the intersection, to through traffic at a T intersection, to oncoming traffic when turning left, to the road you are joining from a driveway or a ramp. Right of way in Maryland is something you give, not something you take.",
        trap:
          "Being technically in the right is no defence once a collision has happened. The manual frames right of way as a duty to yield, never as an entitlement.",
        excerptKey: "row-never-assume",
        sourceLabel: "Maryland Driver's Manual - Section 3.B Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "md_s5_18",
        topic: "impairment",
        question: "How does a revoked Maryland licence differ from a suspended one?",
        choices: [
          "A revocation lasts exactly one year, a suspension thirty days",
          "A revoked licence stays gone until MVA decides you can drive safely again",
          "A revocation only applies to commercial drivers",
          "A revoked licence can be replaced immediately by a restricted one",
        ],
        correctIndex: 1,
        explanation:
          "Suspension is temporary by design. Revocation removes the privilege until MVA is satisfied you can drive safely, after a minimum waiting period, and MVA can refuse to reinstate.",
        context:
          "Cancellation is heavier still: the privilege is terminated and not reinstated, used where a licence should not have been issued, where the application carried wrong information, or where there was fraud. In all three cases you must surrender the licence, and suspension or revocation periods only begin running once MVA receives it.",
        trap:
          "Handing the licence in feels like the end of the process. It is the start - the clock does not run until MVA has it.",
        excerptKey: "revocation-def",
        sourceLabel: "Maryland Driver's Manual - Section 9.D Administrative Actions",
        sourceUrl: HB,
      },
      {
        id: "md_s5_19",
        topic: "signs",
        question:
          "There is no paint on the road at a residential intersection. Is there a crosswalk there?",
        choices: [
          "Yes - most intersections have a crosswalk even when it is not marked",
          "No, a crosswalk exists only where it is painted",
          "Only if a pedestrian crossing sign is posted",
          "Only where a kerb ramp has been built",
        ],
        correctIndex: 0,
        explanation:
          "Maryland states that most intersections have a crosswalk whether or not it is marked, and the duty to stop for a pedestrian applies to marked and unmarked crossings alike.",
        context:
          "Marked crosswalks are white solid lines, sometimes with extra lines between them or in place of them. The unmarked crosswalk is the invisible continuation of the sidewalk across the junction, and it carries the same rights. The statute's stopping duty bites when a pedestrian in a crosswalk is on your half of the road or approaching from an adjacent lane on the other half.",
        trap:
          "Absence of paint is the single most common reason drivers think they may proceed. In Maryland it changes nothing at an intersection.",
        excerptKey: "crosswalk-unmarked",
        sourceLabel: "Maryland Driver's Manual - Section 7.A Pedestrian Right-of-Way",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s5_20",
        topic: "safety",
        question:
          "You catch up with another vehicle at night on an unlit road. When must you switch to low beams?",
        choices: [
          "Only if the other driver flashes you",
          "When you are within 500 feet of them",
          "When you are 300 feet or less behind them",
          "Only when you begin to overtake",
        ],
        correctIndex: 2,
        explanation:
          "Three hundred feet or less when following. Your high beams fill the mirrors of the car in front, which is the same problem as dazzling an oncoming driver.",
        context:
          "The companion figure is 500 feet, for dipping before you reach a vehicle coming the other way. Low beams are also the right choice in fog, rain and snow, on lit roads at night, when entering a tunnel or construction area, and when approaching a bicycle at night. High beams belong on unlit roads with nobody in front of you.",
        trap:
          "Waiting to be flashed is not the rule. Three hundred feet is the number, whether or not the driver ahead reacts.",
        excerptKey: "lowbeam-300",
        sourceLabel: "Maryland Driver's Manual - Section 5.A Driving in Reduced Visibility",
        sourceUrl: HB,
      },
      {
        id: "md_s5_21",
        topic: "emergencies",
        question:
          "Traffic is too heavy for you to change lanes away from a stopped vehicle with flashing lights. What does the Move Over law require then?",
        choices: [
          "Continue at the posted speed, since moving over is impossible",
          "Stop until a gap opens in the next lane",
          "Sound your horn as a warning and continue",
          "Slow down to a speed that is safe for the conditions",
        ],
        correctIndex: 3,
        explanation:
          "If you cannot move over safely, you slow to a safe speed, judging it by the weather, the road, the traffic and any pedestrians.",
        context:
          "The duty applies to a wide range of stopped vehicles: emergency vehicles, tow trucks, service vehicles, waste and recycling collection vehicles, and commercial vehicles giving roadside assistance - plus any vehicle displaying hazard lights, flares, cones or other caution signals. Penalties run from $110 and one point to $750 and three points where the breach causes death or serious injury.",
        trap:
          "Being unable to change lanes is not a complete defence. The statute gives you a fallback duty, not an exemption.",
        excerptKey: "moveover-slow",
        sourceLabel: "Maryland Driver's Manual - Section 8.D Move Over Law",
        sourceUrl: HB,
      },
      {
        id: "md_s5_22",
        topic: "sharing",
        question:
          "A cyclist rides across a marked crosswalk in front of you. What right of way do they have?",
        choices: [
          "None - a bicycle in a crosswalk must dismount",
          "The same as a vehicle, so ordinary intersection rules apply",
          "The same right of way as a pedestrian",
          "None, unless the crossing has a signal",
        ],
        correctIndex: 2,
        explanation:
          "Maryland gives a bicycle in a crosswalk the same right of way as a pedestrian. Failing to yield in a way that causes a crash carries fines, possible prison time and points.",
        context:
          "Bicycles are vehicles in Maryland law and generally follow vehicle rules, which makes the crosswalk position an exception worth knowing. Riders are also allowed to cross like a pedestrian by dismounting and walking, and where sidewalk riding is permitted they may ride through the crosswalk from kerb to kerb.",
        trap:
          "\"Bicycles are vehicles\" is true and is exactly what makes this question catch people. In a crosswalk the pedestrian rule applies instead.",
        excerptKey: "bicycle-crosswalk",
        sourceLabel: "Maryland Driver's Manual - Section 7.F Bicycles",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s5_23",
        topic: "licensing",
        question:
          "A 20-year-old with a learner's permit and no violations wants a provisional licence. What is the minimum holding period?",
        choices: ["3 months", "45 days", "9 months", "18 months"],
        correctIndex: 0,
        explanation:
          "Three months for ages 19 to 24, and the same for an 18-year-old who holds a high school diploma or GED.",
        context:
          "Under 18 the requirement is nine months without a violation; at 25 and over it drops to 45 days. Any moving-violation conviction or probation before judgment resets the requirement to nine months from that date, at any age, and so does a suspension for any reason.",
        trap:
          "The 18-year-old case splits on education. With a diploma or GED it is three months; without one, the under-18 rule of nine months still governs.",
        excerptKey: "permit-3-months",
        sourceLabel: "Maryland Driver's Manual - Section 2.B Learner's Instructional Permit",
        sourceUrl: HB,
      },
      {
        id: "md_s5_24",
        topic: "signs",
        question: "What counts as a traffic control device in Maryland?",
        choices: [
          "Traffic signals only",
          "Traffic signals, signs and pavement markings",
          "Signs and signals, but not road markings",
          "Only devices installed by the State Highway Administration",
        ],
        correctIndex: 1,
        explanation:
          "All three. Signals, signs and the lines painted on the road are traffic control devices, and Maryland says everyone must obey them.",
        context:
          "That definition matters because failing to obey traffic control devices is one of the main causes of crashes, and because the obligation extends to markings people treat as suggestions - the solid yellow line, the double solid white, the stop line, the yield triangles. The only override is a police officer, other emergency personnel, or a uniformed school crossing guard.",
        trap:
          "Painted lines are as binding as a signal. Crossing a double solid white is not a lesser class of infraction.",
        excerptKey: "obey-traffic-devices",
        sourceLabel: "Maryland Driver's Manual - Section 4 Signs, Signals and Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "md_s5_25",
        topic: "speed",
        question:
          "You are driving through a business district on a road with no posted speed limit sign. What is the maximum lawful speed?",
        choices: ["25 mph", "35 mph", "30 mph", "40 mph"],
        correctIndex: 2,
        explanation:
          "Thirty in a business district - and unlike the residential rule, it does not matter whether the highway is divided.",
        context:
          "The statute reads 30 mph on all highways in a business district and on undivided highways in a residential district, then 35 on divided highways in a residential district. So the divided/undivided distinction changes the answer in a residential area and does nothing at all in a business district.",
        trap:
          "Reaching for 35 because the road is divided is the mistake. The 35 mph figure belongs only to divided residential highways.",
        excerptKey: "speed-30-business",
        sourceLabel: "Maryland Transportation Article 21-801.1",
        sourceUrl: gtr("21-801.1"),
      },
      {
        id: "md_s5_26",
        topic: "signals",
        question: "What does the manual say makes a highway a divided highway?",
        choices: [
          "A guardrail, strip of land or other barrier between the opposing directions",
          "Any road with two or more lanes each way",
          "A painted double yellow centre line",
          "A centre turn lane between the directions",
        ],
        correctIndex: 0,
        explanation:
          "A physical separation - guardrail, strip of land or other barrier. Paint alone does not divide a highway.",
        context:
          "The definition does real work elsewhere. Divided residential highways default to 35 mph rather than 30, and divided highways outside those districts to 55 rather than 50. It also underpins the school bus exception, where the manual asks for a physical barrier before an oncoming driver may keep going.",
        trap:
          "A two-way left turn lane down the middle does not divide the road. Neither does a double yellow line, however wide the gap between the lines.",
        excerptKey: "divided-highway-def",
        sourceLabel: "Maryland Driver's Manual - Section 4.C Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "md_s5_27",
        topic: "rules",
        question:
          "You are approaching a crosswalk in the right lane. A car in the left lane has stopped short of it. What should you do?",
        choices: [
          "Continue at the same speed in your own lane",
          "Change lanes to pass behind the stopped vehicle",
          "Sound your horn and continue",
          "Do not pass it - stop and wait until you can see what it stopped for",
        ],
        correctIndex: 3,
        explanation:
          "You may not pass a vehicle stopped at a crosswalk. A pedestrian who has cleared that car's lane will step into yours next, screened from you until the moment it is too late.",
        context:
          "Maryland states this both in the manual and in the crosswalk statute, which prohibits a following driver from overtaking and passing a vehicle stopped to let a pedestrian cross at a marked crosswalk or an unmarked one at an intersection. The related duty to stop applies once a pedestrian is on your half of the road or approaching from an adjacent lane on the other half.",
        trap:
          "Staying in your own lane is not the same as not passing. Driving past the stopped vehicle at all is what the rule forbids.",
        excerptKey: "no-pass-stopped-crosswalk",
        sourceLabel: "Maryland Driver's Manual - Section 7.A Pedestrian Right-of-Way",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s5_28",
        topic: "impairment",
        question: "Which of these does the manual list as aggressive driving?",
        choices: [
          "Driving below the speed limit in the right lane",
          "Tailgating",
          "Braking early for a yellow light",
          "Using the horn to warn another driver",
        ],
        correctIndex: 1,
        explanation:
          "Tailgating is on Maryland's list, alongside speeding, ignoring signals and devices, unsafe lane changes, failing to yield, and unsafe or illegal passing.",
        context:
          "The manual treats aggressive driving as a behaviour with causes worth managing: crowded roads, unexpected delays, rushing, roadworks and stress. Its countermeasures are practical - allow extra time, be patient and courteous, focus on your own driving, signal your intentions, obey the rules, yield, and stop competing with other drivers.",
        trap:
          "Driving slowly can annoy other people but it is not on the manual's list. Aggressive driving is defined by specific behaviours, not by the reaction it provokes.",
        excerptKey: "aggressive-examples",
        sourceLabel: "Maryland Driver's Manual - Section 6.B Aggressive Driving and Road Rage",
        sourceUrl: HB,
      },
      {
        id: "md_s5_29",
        topic: "safety",
        question: "What does the manual mean by traction?",
        choices: [
          "The grip between your tyres and the road that lets you start, stop and change direction",
          "The weight distribution between the front and rear axles",
          "The force of the engine driving the wheels",
          "The distance your vehicle takes to stop from 60 mph",
        ],
        correctIndex: 0,
        explanation:
          "Traction is grip - the contact between tyre and road that makes starting, stopping and steering possible at all. Everything else in wet-weather driving follows from having less of it.",
        context:
          "Maryland lists what reduces traction: sand, gravel, uneven surfaces, oil slicks and spills, water on the road, and simply going faster. When traction drops, the chance of a skid rises, which is why the wet-weather advice is about space and speed rather than technique - keep a much greater gap than on dry road, and reduce speed so you have time to react.",
        trap:
          "Four-wheel drive changes how power reaches the road, not how much grip the road offers. The manual is explicit that those vehicles slide too.",
        excerptKey: "traction-def",
        sourceLabel: "Maryland Driver's Manual - Section 5.D Driving in Inclement Weather",
        sourceUrl: HB,
      },
      {
        id: "md_s5_30",
        topic: "parking",
        question:
          "You park facing downhill on a steep street. What does Maryland law require of the front wheels?",
        choices: [
          "They must be left straight ahead",
          "They must be turned to the curb or side of the highway",
          "They must be turned away from the curb",
          "There is no requirement, provided the parking brake is set",
        ],
        correctIndex: 1,
        explanation:
          "On a grade the front wheels are turned to the kerb or the side of the road, so that if the vehicle does move, it rolls into the kerb rather than into traffic.",
        context:
          "The same section requires that a vehicle left unattended has the engine stopped, the ignition locked, the key removed and the brake effectively set. The manual's version of the routine adds leaving a manual in gear or an automatic in park, checking mirrors and traffic before opening the door, and taking your keys with you.",
        trap:
          "The parking brake does not discharge the wheel-turning requirement. The statute lists them as separate obligations.",
        excerptKey: "park-unattended",
        sourceLabel: "Maryland Transportation Article 21-1101",
        sourceUrl: gtr("21-1101"),
      },
      {
        id: "md_s5_31",
        topic: "licensing",
        question: "How does the Maryland manual describe the status of driving?",
        choices: [
          "A right, once you have passed the tests",
          "A contract between the driver and the state",
          "A privilege, not a right",
          "A right that may be limited only by a court",
        ],
        correctIndex: 2,
        explanation:
          "A privilege. That framing is why MVA can attach restrictions to a licence and withdraw it administratively without a criminal conviction.",
        context:
          "Restrictions may follow the type of licence you hold - the passenger, night driving, wireless device and belt conditions on a provisional licence - or be imposed because you broke a motor vehicle law. Driving in breach of a restriction is a serious offence in its own right and can cost you the privilege altogether.",
        trap:
          "Because it is administrative rather than criminal, MVA action can arrive even where a court has taken no action at all.",
        excerptKey: "restrictions-privilege",
        sourceLabel: "Maryland Driver's Manual - Section 9.A Restrictions",
        sourceUrl: HB,
      },
      {
        id: "md_s5_32",
        topic: "rightOfWay",
        question: "What identifies a vehicle as part of a funeral procession in Maryland?",
        choices: [
          "Its headlights and flashing hazard lights are on",
          "A purple flag on the roof",
          "A police escort at the front",
          "Its hazard lights alone",
        ],
        correctIndex: 0,
        explanation:
          "Headlights and hazard flashers together. That combination is what tells other drivers to yield and what allows the procession to continue through a red signal.",
        context:
          "Other traffic must give way to a funeral procession even on a green light, and keep giving way until every vehicle has passed - unless they can proceed safely without crossing the procession's path. The manual states the exemption from the red signal in terms of being part of the procession and having the lights on.",
        trap:
          "Hazard lights on their own are not the marker. Maryland's description pairs them with headlights.",
        excerptKey: "funeral-lights",
        sourceLabel: "Maryland Driver's Manual - Section 5.K Funeral Processions",
        sourceUrl: HB,
      },
      {
        id: "md_s5_33",
        topic: "sharing",
        question:
          "You are turning left across a lane where a motorcycle is approaching. What does Maryland require?",
        choices: [
          "Turn if the motorcycle is more than two seconds away",
          "Turn, since a motorcycle can stop in a shorter distance",
          "Sound your horn and complete the turn",
          "Yield the right of way to the oncoming motorcycle",
        ],
        correctIndex: 3,
        explanation:
          "You yield. The manual states the duty for oncoming motorcycles specifically, and warns that failing to do so can bring a citation with significant penalties.",
        context:
          "The reason it is singled out is that a motorcycle's small frontal area makes both its speed and its distance hard to judge, so drivers routinely believe they have more room than they do. Maryland notes that drivers are at fault in over half of car-motorcycle crashes, and asks you to look twice before merging, changing lanes or pulling into traffic.",
        trap:
          "Judging a gap by eye is the failure mode. A motorcycle that looks far away is usually closer and faster than it appears.",
        excerptKey: "motorcycle-left-turn",
        sourceLabel: "Maryland Driver's Manual - Section 7.E Motorcycles",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s5_34",
        topic: "rules",
        question:
          "Two solid white lines separate the general lanes from an HOV lane. What may you do?",
        choices: [
          "Cross them to enter the HOV lane if you meet the occupancy requirement",
          "Not change lanes across them",
          "Cross them only during peak hours",
          "Cross them if you are exiting within a mile",
        ],
        correctIndex: 1,
        explanation:
          "Double solid white forbids the lane change. Meeting the occupancy requirement lets you use the HOV lane where entry is permitted, not wherever you like.",
        context:
          "Maryland uses double solid white to separate same-direction lanes where changing is prohibited, including between general and HOV lanes, and sometimes ahead of an obstruction that may be passed on either side. A HOV sign states the number of occupants required; the markings state where you may cross to join.",
        trap:
          "Being eligible for the lane and being allowed to cross into it at a given point are separate questions. The markings answer the second one.",
        excerptKey: "double-solid-white",
        sourceLabel: "Maryland Driver's Manual - Section 4.C Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "md_s5_35",
        topic: "safety",
        question:
          "The gates at a railroad crossing are down and the warning lights are flashing. What is the position?",
        choices: [
          "You may cross if you can see clearly in both directions",
          "You may drive around the gates once a train has passed",
          "You may proceed slowly if the gates are raised part way",
          "The road is temporarily closed until the gates go up and the lights stop",
        ],
        correctIndex: 3,
        explanation:
          "Down gates or flashing lights mean the road is closed. You wait for the gates to rise and the lights to stop before moving.",
        context:
          "After a train has passed, look both ways before starting over, because another may be coming on a different track. Never start across unless you can get completely clear on the far side, and make sure there is room for your vehicle beyond the tracks first. If you break down on or near a crossing, get out and move away from the tracks, then use the blue and white Emergency Notification System sign to report it.",
        trap:
          "Driving around a gate the moment one train clears is the classic fatal error. A second train on another track is exactly what the gates are still down for.",
        excerptKey: "railroad-gates",
        sourceLabel: "Maryland Driver's Manual - Section 5.G Highway-Railroad Crossings",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions across the whole Maryland manual, in the style of the real thing. MVA's test is 25 questions in 20 minutes and you need 88% - 22 correct - so aim for 27 here.",
    questions: [
      {
        id: "md_s6_01",
        topic: "signs",
        question: "Must you always stop at a yield sign?",
        choices: [
          "Yes, a yield sign requires a complete stop",
          "Yes, unless the road ahead is a one-way street",
          "No - you slow and look, and stop only if safety requires it",
          "No - a yield sign is advisory and carries no obligation",
        ],
        correctIndex: 2,
        explanation:
          "Yield asks you to slow, look left and right, and give way. Stopping becomes compulsory only when you cannot proceed safely without it.",
        context:
          "State law puts it the same way: a driver at a yield sign approaches with caution, yields to traffic on the other road, and stops if necessary to do so. Where a stop is required, the same three stopping points apply as at a stop sign - the marked stop line, then the crosswalk, then the point that gives you a view of the intersecting road.",
        trap:
          "Yield is not advisory. Failing to give way at one is an offence even though no automatic stop is required.",
        excerptKey: "yield-sign-actions",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "md_s6_02",
        topic: "signals",
        question: "What is the purpose of the yellow phase of a traffic signal?",
        choices: [
          "To let waiting side-street traffic prepare to move",
          "To give approaching drivers time to stop safely and let those in the intersection clear it",
          "To allow one more vehicle through before the red",
          "To warn pedestrians that the walk signal has ended",
        ],
        correctIndex: 1,
        explanation:
          "Yellow exists to give you room to stop and to let vehicles already inside the intersection get out before cross traffic is released.",
        context:
          "Maryland allows one exception: if you are too close to stop safely, you continue through carefully rather than braking hard. That is a provision for a driver who cannot stop, not for one who would rather not. Yellow arrows work the same way for a turning movement - the permission is ending, so slow and proceed with caution.",
        trap:
          "Treating yellow as extra green time inverts its purpose and is what puts a car in the intersection when the cross traffic starts moving.",
        excerptKey: "steady-yellow",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s6_03",
        topic: "rules",
        question:
          "You are following a city bus that pulls in at every stop. What following distance does Maryland suggest?",
        choices: [
          "Two seconds, because speeds are low",
          "The standard 3 to 4 seconds",
          "One vehicle length per 10 mph",
          "Four or five seconds, and more if needed",
        ],
        correctIndex: 3,
        explanation:
          "Buses and delivery vans get four or five seconds rather than the usual three to four, because they stop often and with little warning.",
        context:
          "The baseline count is 3 to 4 seconds in good conditions, measured against a fixed object ahead. Wet roads need much more space, and snow or ice more again. The statute expresses the same duty without a number: never follow more closely than is reasonable and prudent, having regard to speed, traffic and the condition of the road.",
        trap:
          "Low speed is not a reason to close up. The problem with a bus is the frequency and suddenness of its stops, not how fast it travels.",
        excerptKey: "following-buses",
        sourceLabel: "Maryland Driver's Manual - Section 3.D Following Distance",
        sourceUrl: HB,
      },
      {
        id: "md_s6_04",
        topic: "rightOfWay",
        question: "At a four-way stop where two drivers arrive together, who proceeds first?",
        choices: [
          "The driver on the right",
          "The driver turning right",
          "The driver on the wider road",
          "The driver who stopped closest to the line",
        ],
        correctIndex: 0,
        explanation:
          "The driver on the right goes first. It is a tie-break rule and only operates when arrival really is simultaneous.",
        context:
          "Maryland's ordering is arrival first, then the right-hand rule. The manual states the right-hand rule twice - once generally for simultaneous arrivals and again specifically for four-way stops - and everything sits beneath the instruction never to assume you automatically have the right of way.",
        trap:
          "Turning direction and road width are irrelevant at a four-way stop. Arrival order decides it, then the right-hand rule.",
        excerptKey: "row-four-way",
        sourceLabel: "Maryland Driver's Manual - Section 3.B Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "md_s6_05",
        topic: "speed",
        question:
          "Heavy rain has cut visibility on a road posted at 55 mph. What speed does Maryland law expect?",
        choices: [
          "55 mph, because the limit does not change with the weather",
          "Whatever the traffic around you is doing",
          "45 mph, as a standard wet-weather reduction",
          "A reasonable speed for the conditions, which may be well below the posted limit",
        ],
        correctIndex: 3,
        explanation:
          "Maryland requires a reasonable speed with awareness of existing and potential hazards. Driving slower than the posted limit because conditions demand it is what the law expects.",
        context:
          "The manual gives a list of places to reduce speed: sharp curves and hills where you cannot see, slippery roads, roads with pedestrians or animals, shopping centres, car parks and downtown areas, heavy traffic, narrow bridges and tunnels, toll plazas, schools, playgrounds and residential streets, and railroad grade crossings. What you may never do is exceed the posted figure.",
        trap:
          "There is no fixed wet-weather deduction in Maryland law. The standard is what is reasonable in the actual conditions.",
        excerptKey: "speed-adjust",
        sourceLabel: "Maryland Driver's Manual - Section 3.C Understanding Vehicle Speed",
        sourceUrl: HB,
      },
      {
        id: "md_s6_06",
        topic: "sharing",
        question:
          "The road is too narrow to give a cyclist three feet without crossing into oncoming traffic. What does Maryland law say?",
        choices: [
          "Pass with whatever room is available, since the rider chose the road",
          "Sound your horn and pass close but slowly",
          "The three-foot requirement does not bind you where the highway is not wide enough to pass lawfully at that distance",
          "Cross the centre line regardless, since the three-foot rule overrides lane markings",
        ],
        correctIndex: 2,
        explanation:
          "The statute lifts the three-foot obligation where the road is not wide enough to pass lawfully at that distance - which in practice means you wait for a road that is, not that you squeeze past.",
        context:
          "The other listed exceptions are narrow: where the rider is not keeping to the right side of the road or the bike lane as required, or where a clearance under three feet is caused solely by the rider failing to hold a steady course. The manual's instruction sits underneath all of it - treat a bicycle like a slow-moving vehicle, be ready to slow, and wait until oncoming traffic is clear.",
        trap:
          "The exception describes when the three-foot duty does not apply, not permission to pass closer. The overriding duty to avoid colliding with a rider is unaffected.",
        excerptKey: "bicycle-3ft-statute",
        sourceLabel: "Maryland Transportation Article 21-1209",
        sourceUrl: gtr("21-1209"),
        commonlyMissed: true,
      },
      {
        id: "md_s6_07",
        topic: "licensing",
        question:
          "You hold a Maryland provisional licence. What are the seat belt requirements for your passengers?",
        choices: [
          "Front-seat passengers must be belted; rear passengers are exempt",
          "All passengers must use safety belts or child safety seats",
          "Only passengers under 16 must be restrained",
          "Passengers must be belted only on highways",
        ],
        correctIndex: 1,
        explanation:
          "Every passenger, in every seat, by belt or child safety seat - and the provisional driver must always be belted too. It is written into the licence as a restriction.",
        context:
          "The general seat belt law already covers the driver and all passengers, so the provisional restriction largely restates it with the licence at stake as well as a fine. The child rules sit on top: under 8 needs a child safety seat unless the child is 4 feet 9 inches or taller, and under 2 must be rear-facing until the manufacturer's limit.",
        trap:
          "For a provisional driver an unbelted passenger is not just their problem. It is a breach of your licence conditions.",
        excerptKey: "provisional-seatbelt",
        sourceLabel: "Maryland Driver's Manual - Section 9.A Restrictions",
        sourceUrl: HB,
      },
      {
        id: "md_s6_08",
        topic: "impairment",
        question:
          "An empty beer bottle is rolling around in the footwell behind the driver's seat. Is that an open container offence in Maryland?",
        choices: [
          "No, because it is empty",
          "No, because it is not in the front of the car",
          "Yes - an open, empty container in the passenger area is covered",
          "Only if the driver has been drinking",
        ],
        correctIndex: 2,
        explanation:
          "The offence covers any open can, bottle, container or package in the passenger area, and Maryland expressly treats open, empty or missing bottles as qualifying.",
        context:
          "The passenger area means the driver and passenger seats plus anywhere an occupant can easily reach from where they are sitting, which covers a rear footwell. The offence is about where the container is, not about who was drinking from it or whether anyone was.",
        trap:
          "Empty is not the same as closed. Maryland's wording reaches an empty bottle that has been opened.",
        excerptKey: "open-container",
        sourceLabel: "Maryland Driver's Manual - Section 6.A Alcohol, Drugs and Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s6_09",
        topic: "parking",
        question:
          "There is a fire hydrant on the kerb and a legal-looking gap in front of it. How much space must you leave?",
        choices: ["10 feet", "15 feet", "20 feet", "25 feet"],
        correctIndex: 1,
        explanation:
          "Fifteen feet in Maryland. The distance comes from the Transportation Article, since the manual gives no parking measurements at all.",
        context:
          "Around a junction the figures stack up: 20 feet from a crosswalk at an intersection outside Baltimore City, 30 feet on the approach to a stop sign, yield sign, flashing signal or traffic signal at the roadside, and no stopping, standing or parking in the intersection or on the crosswalk. At a railroad crossing the figure is 50 feet from the nearest rail.",
        trap:
          "Ten and 20 feet are the hydrant distances in several nearby states. Maryland sits between them at 15.",
        excerptKey: "park-hydrant-15",
        sourceLabel: "Maryland Transportation Article 21-1003",
        sourceUrl: gtr("21-1003"),
      },
      {
        id: "md_s6_10",
        topic: "safety",
        question:
          "It is a bright afternoon but drizzle has you using the wipers intermittently. Are headlights required?",
        choices: [
          "Yes - Maryland law ties the headlights to the wipers in inclement weather",
          "No, provided visibility exceeds 1,000 feet",
          "Only if other drivers have their lights on",
          "Only between sunset and sunrise",
        ],
        correctIndex: 0,
        explanation:
          "Maryland states the wipers-headlights link as law. Once the wipers are working in bad weather, the lights go on whatever the time of day.",
        context:
          "The second trigger is visibility: headlights are required any time there is not enough light to see clearly 1,000 feet ahead. The two rules operate independently, so a bright but rainy afternoon can require lights under the wipers rule even though the visibility rule is nowhere near met.",
        trap:
          "Some states offer the wipers link as guidance only. In Maryland the manual presents it as a legal requirement.",
        excerptKey: "wipers-headlights",
        sourceLabel: "Maryland Driver's Manual - Section 5.A Driving in Reduced Visibility",
        sourceUrl: HB,
      },
      {
        id: "md_s6_11",
        topic: "emergencies",
        question:
          "A fire engine is ahead of you in your lane with its lights and siren running. May you pass it?",
        choices: [
          "Yes, if you use the adjacent lane and signal",
          "Yes, if it is travelling below the speed limit",
          "Yes, once you are past the incident it is responding to",
          "No, unless it stops or a police officer directs you to pass",
        ],
        correctIndex: 3,
        explanation:
          "Going the same way as an emergency vehicle running its signals, you may not pass it. The only releases are the vehicle stopping or an officer telling you to go by.",
        context:
          "The other half of the rule covers an emergency vehicle approaching: move as close as you can to the edge of the road, stay clear of intersections, and remain stopped until it has passed. Once an emergency or service vehicle is stopped on the road with lights flashing, the Move Over law takes over - change lanes away from it, or slow to a safe speed if you cannot.",
        trap:
          "Having a free lane beside you does not make the pass lawful. The prohibition is on overtaking the responding vehicle at all.",
        excerptKey: "emergency-no-pass",
        sourceLabel: "Maryland Driver's Manual - Section 7.B Emergency Vehicles",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s6_12",
        topic: "signals",
        question:
          "The lane you want has a red X over it, but the traffic in it appears to be moving. What should you do?",
        choices: [
          "Follow the traffic already using it",
          "Use it briefly to get past a queue",
          "Do not drive in that lane at all",
          "Use it only until you reach the next signal",
        ],
        correctIndex: 2,
        explanation:
          "A red X means never drive in that lane. Other drivers being in it does not change what the signal is telling you.",
        context:
          "Lane use signals run reversible lanes and shared turn lanes. Green arrow: the lane is open to you. Steady yellow X: leave it when you safely can. Flashing yellow X or two-way left-turn arrows: the lane is available for left turns, shared with drivers turning from the opposite direction. Red X: closed.",
        trap:
          "Reversible lanes flip direction, so vehicles moving in a red-X lane may be coming towards you rather than travelling with you.",
        excerptKey: "red-x",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Lane Use Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s6_13",
        topic: "rules",
        question:
          "Traffic in both lanes has stopped and the paved shoulder is clear. May you use it to get to your exit?",
        choices: [
          "No - passing on the shoulder is prohibited on either side",
          "Yes, if your exit is within a quarter mile",
          "Yes, if you keep below 15 mph",
          "Yes, if the shoulder is paved and marked",
        ],
        correctIndex: 0,
        explanation:
          "Maryland lists the shoulder among the places you may not pass, on the right or the left, and there is no exception for queueing traffic.",
        context:
          "The shoulder has a defined job: a place to stop when your vehicle is disabled or you have an emergency, with the flashers on. Filling it with moving traffic removes that refuge and puts you head-on into anyone already using it for its purpose. Maryland also bars stopping, standing or parking on entrance and exit ramps of multilane roads.",
        trap:
          "Congestion is exactly when the shoulder is most tempting and most likely to be occupied by a breakdown you cannot see past the queue.",
        excerptKey: "no-passing-shoulder",
        sourceLabel: "Maryland Driver's Manual - Section 3.I Passing",
        sourceUrl: HB,
      },
      {
        id: "md_s6_14",
        topic: "signs",
        question: "An orange diamond sign appears ahead of a lane closure. What does the colour tell you?",
        choices: [
          "An emergency traffic incident",
          "A construction or maintenance work area",
          "A school or pedestrian crossing",
          "A recreation area access point",
        ],
        correctIndex: 1,
        explanation:
          "Orange is the work-zone colour in Maryland: construction and maintenance area warnings.",
        context:
          "Once you are in a work zone the light colours carry their own code - flashing amber or yellow on highway maintenance vehicles, flashing blue for active speed cameras, and flashing green for an active zone with workers present. Speeding fines are higher in work zones and higher again with workers present, and cameras may be operating.",
        trap:
          "Fluorescent pink, not orange, marks emergency traffic incidents in Maryland. Two warm colours, two different situations.",
        excerptKey: "sign-color-orange",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Colors & Shapes",
        sourceUrl: HB,
      },
      {
        id: "md_s6_15",
        topic: "rightOfWay",
        question:
          "A pedestrian crosses against a red pedestrian signal, straight into your path. What is the position under the manual?",
        choices: [
          "You have the right of way and may proceed",
          "You may proceed once you have sounded your horn",
          "The pedestrian is liable, so no duty arises",
          "Pedestrians must obey signals, but you still have to avoid hitting them",
        ],
        correctIndex: 3,
        explanation:
          "Maryland gives pedestrians the right of way at street crossings while requiring them to obey traffic control signals. A pedestrian in breach is still a person in the road, and the driver's overriding duty to control the vehicle to avoid a crash does not lapse.",
        context:
          "The manual opens its driving section with that duty: at all times the driver should control the vehicle to avoid a crash. State law puts a matching duty on pedestrians not to step suddenly off a kerb into the path of a vehicle so close that the driver cannot yield. Both duties exist at once.",
        trap:
          "Being in the right does not authorise driving into someone. The manual frames right of way as who should yield, never as permission to proceed regardless.",
        excerptKey: "ped-row",
        sourceLabel: "Maryland Driver's Manual - Section 7.A Pedestrian Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "md_s6_16",
        topic: "safety",
        question:
          "Where may a rear-facing child seat never be placed?",
        choices: [
          "In the centre rear seat",
          "In any seat of a vehicle with side air bags",
          "In the front seat of a vehicle with a passenger air bag",
          "In a vehicle with only lap belts in the rear",
        ],
        correctIndex: 2,
        explanation:
          "Never in front of an active passenger air bag. An air bag deploying into the back of a rear-facing seat strikes the child's head directly.",
        context:
          "Maryland's related rules: children under 2 must be rear-facing until they reach the manufacturer's height or weight limit, children under 8 need a child safety seat unless they are 4 feet 9 inches or taller, and children under 13 should ride in a rear seat. Adults are advised to keep 10 to 12 inches between the steering wheel and the chest.",
        trap:
          "The prohibition is about the air bag, not the seat position as such. A front seat with the passenger air bag disabled is a different case.",
        excerptKey: "airbag-rear-facing",
        sourceLabel: "Maryland Driver's Manual - Section 10.H Air Bags",
        sourceUrl: HB,
      },
      {
        id: "md_s6_17",
        topic: "sharing",
        question:
          "A truck ahead has moved left and is signalling right at a junction. What should you do?",
        choices: [
          "Pass on the left while the lane is free",
          "Wait, and do not move up the right side of the truck",
          "Move up on the right to keep the queue moving",
          "Sound your horn to check the driver's intention",
        ],
        correctIndex: 1,
        explanation:
          "Hold back. Trucks swing wide to make a right turn, and the space they open on the inside closes again as the trailer comes round.",
        context:
          "Maryland tells you to wait and see whether the truck is turning before passing at all, and never to cut in along its right side as the turn begins - that is how a car ends up caught between the trailer and the kerb. The right-side blind spot runs the whole length of the trailer and reaches out three lanes, so the driver may have no idea you are there.",
        trap:
          "The gap on the inside of a turning truck looks like a lane and behaves like a closing trap.",
        excerptKey: "truck-wide-turns",
        sourceLabel: "Maryland Driver's Manual - Section 7.C Large Trucks and Buses",
        sourceUrl: HB,
      },
      {
        id: "md_s6_18",
        topic: "licensing",
        question: "What must you be able to produce when driving in Maryland if an officer asks?",
        choices: [
          "A paper insurance card only - electronic copies are not accepted",
          "Proof of insurance only after a crash",
          "A valid insurance identification card, which may be electronic",
          "Nothing, since MVA holds the insurance record",
        ],
        correctIndex: 2,
        explanation:
          "You carry a valid insurance identification card whenever you drive, and Maryland accepts an electronic version. Refusing to show it can bring a fine.",
        context:
          "Every vehicle registered in Maryland must be insured by a company licensed in the state, for personal injury and property damage liability at the levels the law requires. Letting the insurance lapse is expensive in its own right - the manual warns of fines up to $2,500 per vehicle per year. You also carry your licence or permit and the vehicle registration card.",
        trap:
          "Electronic proof is expressly accepted here, so a phone-based card is fine - but only if you can actually produce it at the roadside.",
        excerptKey: "insurance-card",
        sourceLabel: "Maryland Driver's Manual - Section 10.E Insurance Requirements",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s6_19",
        topic: "signals",
        question:
          "A power cut has left every signal at a large junction dark. How is the junction treated?",
        choices: [
          "As a stop for every approach, yielding before proceeding",
          "As though the main road has priority",
          "As a yield for every approach",
          "As closed, until an officer arrives",
        ],
        correctIndex: 0,
        explanation:
          "Every approach stops. You stop at the line, or before the crosswalk, or before the intersection, then yield and go only when it is safe.",
        context:
          "Maryland spells the stopping order out because it is the same order used at a stop sign and at a steady red. The manual adds that you must yield to vehicles and pedestrians in the intersection and remain stopped until it is safe to enter and continue through - so it is not a case of stopping once and then taking your turn on volume.",
        trap:
          "Assuming that the bigger or busier road keeps priority is the standard error, and it produces collisions between two drivers who each thought they were on the main road.",
        excerptKey: "signal-not-working",
        sourceLabel: "Maryland Driver's Manual - Section 4 Signs, Signals and Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "md_s6_20",
        topic: "rules",
        question: "What kind of sign controls the approaches to a Maryland traffic circle?",
        choices: [
          "Stop signs on every approach",
          "No signs - priority alternates",
          "Signals timed to the circulating flow",
          "Yield signs",
        ],
        correctIndex: 3,
        explanation:
          "Yield signs. Traffic already in the circle has priority, and you wait at the yield line for a gap.",
        context:
          "The approach routine is to slow down, keep right of the central island, watch for and yield to pedestrians in the crosswalk, then move up to the yield line - watching for vehicles leaving the circle as well as circulating. If nothing is in the circle you do not have to stop and wait. Multilane circles require you to hold your lane and to signal right as you prepare to exit.",
        trap:
          "A yield sign does not mean priority alternates. Circulating traffic keeps it however long the queue on your approach becomes.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Maryland Driver's Manual - Section 5.I Traffic Circles (Roundabouts)",
        sourceUrl: HB,
      },
      {
        id: "md_s6_21",
        topic: "impairment",
        question:
          "Which drivers does Maryland law bar from using a handheld telephone at all, rather than merely from holding one?",
        choices: [
          "Drivers over 70 and commercial drivers",
          "School vehicle drivers carrying passengers, and permit or provisional holders aged 18 or over",
          "Any driver on an interstate highway",
          "Drivers within a school zone or work zone",
        ],
        correctIndex: 1,
        explanation:
          "The statute names two groups: the driver of a Class H school vehicle carrying passengers and in motion, and a learner permit or provisional licence holder aged 18 or over.",
        context:
          "Everybody else is covered by the general rule against using your hands for a handheld phone while the vehicle is moving, other than to start or end a call or switch the phone on or off. Drivers under 18 are barred from phone use entirely except a 911 call, and permit and provisional holders face a licence restriction covering any wireless device. Handheld fines run from $75 for a first offence to $175 for a third, with no points unless the offence contributes to a crash.",
        trap:
          "Turning 18 does not release a provisional driver from the phone restrictions. It changes which provision catches them.",
        excerptKey: "handheld-permit-18plus",
        sourceLabel: "Maryland Transportation Article 21-1124.2",
        sourceUrl: gtr("21-1124.2"),
        commonlyMissed: true,
      },
      {
        id: "md_s6_22",
        topic: "speed",
        question:
          "An unposted residential street has a grass median separating the two directions. What is the default limit?",
        choices: ["25 mph", "30 mph", "40 mph", "35 mph"],
        correctIndex: 3,
        explanation:
          "Thirty-five, because a divided highway in a residential district carries a higher default than an undivided one.",
        context:
          "Maryland's statutory list reads 30 mph on all highways in a business district and on undivided highways in a residential district, and 35 mph on divided highways in a residential district. Outside those districts the same split gives 50 on undivided and 55 on divided highways. The manual states none of these figures.",
        trap:
          "The grass strip is doing the work here. A guardrail or a strip of land divides a highway; a painted line does not.",
        excerptKey: "speed-35-divided-residential",
        sourceLabel: "Maryland Transportation Article 21-801.1",
        sourceUrl: gtr("21-801.1"),
      },
      {
        id: "md_s6_23",
        topic: "parking",
        question:
          "You are parking in Rockville, near a crosswalk at an intersection. What is the minimum distance?",
        choices: ["10 feet", "15 feet", "20 feet", "30 feet"],
        correctIndex: 2,
        explanation:
          "Twenty feet. Rockville is not Baltimore City, so the state rule applies in full.",
        context:
          "The statute's subsection on crosswalks carries an express exclusion for Baltimore City, so the answer genuinely turns on where you are. The neighbouring distances have no such exclusion: 15 feet from a fire hydrant, 30 feet on the approach to a stop sign, yield sign, flashing signal or traffic signal, and 50 feet from the nearest rail at a railroad crossing.",
        trap:
          "This is one of very few Maryland rules where the correct answer depends on which jurisdiction you are standing in.",
        excerptKey: "park-crosswalk-20",
        sourceLabel: "Maryland Transportation Article 21-1003",
        sourceUrl: gtr("21-1003"),
      },
      {
        id: "md_s6_24",
        topic: "signs",
        question: "What does a five-sided sign warn you about?",
        choices: [
          "A school zone or school crossing",
          "A railroad crossing ahead",
          "A no-passing zone beginning",
          "A steep hill ahead",
        ],
        correctIndex: 0,
        explanation:
          "The pentagon means schools - a school zone or a marked school crossing.",
        context:
          "Maryland pairs the shape with fluorescent yellow-green, its colour for school, pedestrian and bicycle signs. Since Maryland sets no statewide school zone speed limit, the sign is what tells you the number and the hours it applies. The manual asks you to slow in school zones and residential areas for the sake of young pedestrians and cyclists.",
        trap:
          "The pennant marks a no-passing zone and the round sign warns of a railroad crossing. Three distinctive shapes, three unrelated meanings.",
        excerptKey: "shape-pentagon",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Colors & Shapes",
        sourceUrl: HB,
      },
      {
        id: "md_s6_25",
        topic: "emergencies",
        question:
          "You have had a minor collision on a busy road. What does the manual tell you to do first?",
        choices: [
          "Exchange licence and insurance details",
          "Photograph the scene before anything moves",
          "Call your insurer",
          "Switch on your emergency flashers or set out flares",
        ],
        correctIndex: 3,
        explanation:
          "Warn the traffic first. Everything else - details, photographs, insurers - waits until the scene is visible to the drivers approaching it.",
        context:
          "After that the route depends on the facts. With an injury: stay, call 911, do not move the vehicles. No injury but the car will not move: call 911 and keep clear of traffic. No injury and the car drives: move it off the road, exchange names, addresses, phone numbers, plate numbers, licence numbers, vehicle details and insurance information, and take witness details.",
        trap:
          "Collecting details is what everyone remembers to do. The manual puts the warning first because that is what stops a second collision.",
        excerptKey: "crash-flashers",
        sourceLabel: "Maryland Driver's Manual - Section 8.A Crashes",
        sourceUrl: HB,
      },
      {
        id: "md_s6_26",
        topic: "rightOfWay",
        question:
          "You are about to turn right across a bike lane occupied by a cyclist going straight. What must you do?",
        choices: [
          "Turn first, since you signalled",
          "Yield to the cyclist in the bike lane",
          "Accelerate to clear the lane before they reach you",
          "Stop in the bike lane and wave them round",
        ],
        correctIndex: 1,
        explanation:
          "Crossing or entering a bike lane means yielding to anyone riding in it - and Maryland separately gives a cyclist the right of way when a motor vehicle is turning.",
        context:
          "The manual's turning advice is to move as far right as you can within the bike lane, shoulder or right turn lane before starting the turn, and never to turn right from a through lane immediately after passing a bike on the shoulder or in a bike lane. Assume a rider is going straight unless they signal otherwise.",
        trap:
          "Speeding up to beat the rider is the reflex that produces the right-hook collision. Experienced cyclists travel faster than drivers expect.",
        excerptKey: "bicycle-bike-lane-yield",
        sourceLabel: "Maryland Driver's Manual - Section 7.F Bicycles",
        sourceUrl: HB,
      },
      {
        id: "md_s6_27",
        topic: "safety",
        question: "When may a child under 8 legally ride without a child safety seat in Maryland?",
        choices: [
          "When the child is 4 feet 9 inches tall or taller",
          "When the child is 6 or older",
          "When the journey is under a mile",
          "When the child sits in the rear seat",
        ],
        correctIndex: 0,
        explanation:
          "Height, not age, is the release: 4 feet 9 inches. Below that, a child under 8 needs a child safety seat.",
        context:
          "Children under 2 must ride rear-facing until they reach the manufacturer's height or weight limit. Under 16, every child must be secured either in a child safety seat or by a seat belt. Child safety seats include car seats, booster seats and other federally approved devices, and must be installed and used as the manufacturer directs.",
        trap:
          "Age alone does not settle it. A tall six-year-old may be out of the seat and a small eight-year-old may still need a booster to belt safely.",
        excerptKey: "child-seat-8",
        sourceLabel: "Maryland Driver's Manual - Section 10.G Child Safety Seats",
        sourceUrl: HB,
      },
      {
        id: "md_s6_28",
        topic: "licensing",
        question: "Who goes through Maryland's Rookie Driver graduated licensing system?",
        choices: [
          "Drivers under 21 only",
          "Drivers under 18 only",
          "Anyone moving to Maryland from another state",
          "Anyone who has never held a driver's licence before, at any age",
        ],
        correctIndex: 3,
        explanation:
          "Maryland runs every first-time driver through the graduated system regardless of age. What changes with age is how long each stage lasts.",
        context:
          "The three steps are the learner's instructional permit, the provisional licence and the full driver's licence. Applicants aged 25 and over hold the permit for 45 days and log 14 practice hours; applicants under 25 log 60 hours with at least 10 after dark, and under-18s must hold the permit nine months without a violation.",
        trap:
          "Graduated licensing reads as a teenage system in most states. In Maryland an adult beginner starts at the same place.",
        excerptKey: "gls-overview",
        sourceLabel: "Maryland Driver's Manual - Section 2.A Rookie Driver/Graduated Licensing System",
        sourceUrl: HB,
      },
      {
        id: "md_s6_29",
        topic: "sharing",
        question: "What legal status does a motorcyclist have on a Maryland road?",
        choices: [
          "Restricted rights, because of the vehicle's size",
          "The same rights and privileges as any other driver",
          "Pedestrian status when travelling below 25 mph",
          "The rights of a bicycle rider",
        ],
        correctIndex: 1,
        explanation:
          "Identical rights and privileges to any other driver. The extra care Maryland asks for is about their vulnerability, not about lesser standing.",
        context:
          "That vulnerability is the point: a motorcyclist is six times more likely than a car driver to be hurt in a crash, and riders are injured in nearly 75% of crashes involving one. The practical duties follow - yield to an oncoming motorcycle when turning left, look twice before merging or changing lanes, never share a lane, and leave 3 to 4 seconds of following distance.",
        trap:
          "Treating a motorcycle as a lesser road user is exactly the attitude behind the statistic that drivers are at fault in over half of these crashes.",
        excerptKey: "motorcycle-rights",
        sourceLabel: "Maryland Driver's Manual - Section 7.E Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "md_s6_30",
        topic: "sharing",
        question:
          "What defines a Class 1 electric bicycle under the Maryland manual?",
        choices: [
          "Motor assistance only while pedalling, cutting out at 20 mph",
          "Motor assistance whether or not pedalling, cutting out at 20 mph",
          "Motor assistance only while pedalling, cutting out at 28 mph",
          "Any electric bicycle with a motor under 750 watts",
        ],
        correctIndex: 0,
        explanation:
          "Class 1 assists only when you pedal and stops assisting at 20 mph. Class 2 assists whether or not you pedal, also to 20 mph; Class 3 assists only while pedalling but to 28 mph.",
        context:
          "All three classes are electric bicycles: human-powered with motor assistance, fully operable pedals, two or three wheels, and a motor rated at 750 watts or less. Electric low-speed vehicles are a separate category - single-rider, under 100 pounds, handlebars and a standing platform, up to 20 mph - and local restrictions may apply to them.",
        trap:
          "The pedalling requirement is what separates Class 1 from Class 2, and the 28 mph cut-off is what separates Class 3 from both. Speed alone does not identify the class.",
        excerptKey: "ebike-class1",
        sourceLabel: "Maryland Driver's Manual - Section 10.N Electric Low Speed Vehicles",
        sourceUrl: HB,
        commonlyMissed: true,
      },
    ],
  },
];
