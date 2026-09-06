import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing as sets 1 to 3: the Oklahoma Driver Manual
// published by Service Oklahoma (the PDF's own last page reads "Updated
// 11/24/25"), with Title 47 of the Oklahoma Statutes and the Service Oklahoma
// licensing pages filling the gaps - the lane-change signalling distance, the
// two-way left-turn lane's 200-foot limit, the left-lane rule's actual
// wording, the caravan spacing, the test format and the graduated licence's
// hold periods and hours.
//
// Set 5 is built on what learners actually report getting wrong, cross-checked
// against the manual before anything went into a question. Four things came up
// again and again on r/oklahoma, r/tulsa, r/okc, r/driving and r/DMV: people
// answer the backing question with "check your mirror" when the manual says
// never use the rearview mirror for backing; people reverse the hill-parking
// directions (one thread had two commenters give opposite rules, and both were
// wrong); people cannot recall the distances the manual prints - the 100-foot
// signal, the 1000 and 600 feet for headlight beams, the parking list; and
// several described a test loaded with school-bus items. A former examiner in
// one thread said the same thing the manual's own foreword implies: study the
// current book and nothing else, because a stale edition teaches a stale rule.
// Where a thread contradicted the manual, the manual won and the thread's
// wrong answer became the trap.
//
// Set 6 runs 30 questions with no scaffolding beyond the standard fields,
// weighted the way a 20-question Service Oklahoma test samples the manual:
// signs, signals and rules of the road carrying the most, then right of way,
// then the licensing, impairment, parking and sharing material.
const HB =
  "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf";
/** The manual's printed page number is also its PDF page number. */
const hb = (page: number) => `${HB}#page=${page}`;
const stat = (id: string) =>
  `https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=${id}`;
const WRITTEN = "https://oklahoma.gov/service/popular-services/written-test.html";
const PERMIT = "https://oklahoma.gov/service/all-pages/learner-permit.html";
const INTERMEDIATE = "https://oklahoma.gov/service/all-pages/intermediate-license.html";

export const oklahomaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "A second exam-level set that walks the whole book, including the chapters people skim: penalties and points, work zones, railroad crossings, weather, hill parking and the numbers Oklahoma prints that most states leave to the statute.",
    questions: [
      {
        id: "ok_s4_01",
        topic: "licensing",
        question:
          "You move across Oklahoma City in July. How long do you have to tell Service Oklahoma your new address?",
        choices: [
          "10 days",
          "30 days",
          "60 days",
          "Only when your license comes up for renewal",
        ],
        correctIndex: 0,
        explanation:
          "The manual is specific: when you move you must notify Service Oklahoma within 10 days. You can do it online, through a licensed operator, or by mail.",
        context:
          "This is not paperwork for its own sake. Legal notice is served on you by first-class mail at the address on file, so if a suspension notice goes to an old address it is still served. The manual warns that failing to update it can cost you your license without your ever hearing about it.",
        trap: "Thirty days is the registration deadline in a lot of states and it is the figure people reach for. Oklahoma's address rule is 10 days.",
        excerptKey: "address-change-10-days",
        sourceLabel: "Oklahoma Driver Manual - Chapter 2, Changing Your Name and Address",
        sourceUrl: hb(13),
      },
      {
        id: "ok_s4_02",
        topic: "speed",
        question:
          "A highway crew is patching the right lane and two workers are standing beside the barrels. You are cited for doing 12 over. What happens to the fine?",
        choices: [
          "Nothing changes, the zone only affects the speed limit",
          "It is reduced if you slowed to the posted work-zone speed",
          "It is tripled",
          "It is doubled",
        ],
        correctIndex: 3,
        explanation:
          "Speeding fines are doubled in a construction or maintenance zone when workers or equipment are present. The manual states it twice, once in the signs chapter and once in the speed chapter, which is a fair signal that it is testable.",
        context:
          "The doubling is tied to the presence of workers or equipment, not to the existence of the orange signs. Failing to obey a construction sign, signal or marking at all is a separate misdemeanor carrying $100 to $1,000, up to 30 days in jail, and liability for any damage or injury.",
        trap: "The zone does not have to be busy for the orange signs to be legally binding, but the doubled fine is what attaches when workers or equipment are actually there.",
        excerptKey: "work-zone-fines-doubled",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Construction and Maintenance Signs",
        sourceUrl: hb(23),
      },
      {
        id: "ok_s4_03",
        topic: "signs",
        question:
          "A person in an orange vest and orange hat is standing in your lane holding a red sign. What is your legal position?",
        choices: [
          "You may pass them if the road is otherwise clear",
          "You obey only if a police car is also present",
          "They can only advise, an officer has to direct traffic",
          "You must obey them exactly as you would a traffic signal",
        ],
        correctIndex: 3,
        explanation:
          "Flagpersons are used where the hazard is extreme, and the manual puts it plainly: the law demands that you obey them. Stop in your lane, do not veer, and do not move until they signal you to go.",
        context:
          "Work zones use a whole family of channeling devices - cones, drums, barricades, panels and flashing arrow panels - to move you through safely. A flagperson is the human version and carries the same force. Disobeying any of it is a misdemeanor with a fine between $100 and $1,000.",
        trap: "People treat a flagger as an employee making a request. Legally the flag is a traffic control device.",
        excerptKey: "flagperson",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Flagpersons",
        sourceUrl: hb(24),
      },
      {
        id: "ok_s4_04",
        topic: "parking",
        question:
          "Oklahoma's unlawful-parking list gives a distance for approaching a stop sign, flashing beacon or traffic signal at the side of the road. What is it?",
        choices: ["15 feet", "20 feet", "25 feet", "30 feet"],
        correctIndex: 3,
        explanation:
          "Thirty feet on the approach side of any flashing beacon, stop sign or traffic control signal located at the side of the roadway. The point is that a parked car must not hide the device from the drivers coming up to it.",
        context:
          "The manual prints all thirteen unlawful parking places, and the distances are all different: 15 feet from a fire hydrant, 20 feet from a crosswalk at an intersection, 30 feet approaching a stop sign or signal, 50 feet from the nearest rail of a railroad crossing, 20 feet from a fire station driveway and 75 feet opposite one.",
        trap: "The 15 and 20 foot figures are on the same list and get swapped in constantly. The signal distance is the largest of the three.",
        excerptKey: "parking-30-stop-sign",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9, Unlawful Parking",
        sourceUrl: hb(49),
      },
      {
        id: "ok_s4_05",
        topic: "speed",
        question:
          "You are on an Oklahoma turnpike with no speed limit sign in sight. Under state law, what may you drive?",
        choices: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctIndex: 3,
        explanation:
          "Turnpikes get 80 mph under the state table, which is the highest figure in it. A controlled-access highway that is not a turnpike gets 75.",
        context:
          "The manual prints the whole ladder: 80 on turnpikes, 75 on controlled access highways, 65 on undivided state highways, 55 on county roads, 35 in state parks and wildlife refuges, and 25 in a properly marked school zone on a highway outside a municipality. Posted signs override all of it, and cities set their own limits.",
        trap: "Seventy-five is the number people remember because it is on more miles of Oklahoma road. The turnpike figure is a step higher.",
        excerptKey: "speed-table",
        sourceLabel: "Oklahoma Driver Manual - Chapter 7, Speed Limits",
        sourceUrl: hb(41),
      },
      {
        id: "ok_s4_06",
        topic: "sharing",
        question:
          "How far back does a tractor-trailer's rear blind spot reach, according to the manual?",
        choices: ["Up to 50 feet", "Up to 100 feet", "Up to 200 feet", "Up to 300 feet"],
        correctIndex: 2,
        explanation:
          "The manual gives 200 feet behind the trailer, plus the areas immediately in front and on either side of the cab. Two hundred feet is roughly thirteen car lengths, which is far longer than most drivers picture.",
        context:
          "The working rule the manual gives you is simpler than the number: if you cannot see the truck's mirror, the driver cannot see you. A long-hooded tractor can also hide the first 10 to 20 feet of pavement in front of the bumper, which is exactly enough room for a car to slip into.",
        trap: "Drivers assume a truck's mirrors cover everything behind it. Mirrors are flat glass aimed down the sides, not a camera pointed at the road behind.",
        excerptKey: "truck-blind-spots",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10, Safety Rules for Following a Truck",
        sourceUrl: hb(54),
      },
      {
        id: "ok_s4_07",
        topic: "signals",
        question: "A red arrow is showing for your turn lane. What does it permit?",
        choices: [
          "A turn in the direction of the arrow after you stop and it is clear",
          "A turn only if there is no oncoming traffic",
          "Nothing in that direction until you get a green signal",
          "A turn only from the far right lane",
        ],
        correctIndex: 2,
        explanation:
          "A red arrow prohibits all turns in the direction it points. You wait for a green signal before turning, and there is no stop-and-go option the way there is with a circular red.",
        context:
          "This is the one place Oklahoma's turn-on-red permission stops. A circular red lets you turn right, or left from a one-way into a one-way, after a full stop and a yield. An arrow is a specific instruction about that movement, and a red one is a straight prohibition.",
        trap: "Treating the red arrow as a red light and turning after a stop is the classic error, and it is a violation even when the road is empty.",
        excerptKey: "red-arrow",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Traffic Signals",
        sourceUrl: hb(26),
      },
      {
        id: "ok_s4_08",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and the warning lights start flashing. How long does the manual say you may have?",
        choices: [
          "About 20 seconds",
          "About 45 seconds",
          "About 90 seconds",
          "It depends entirely on the train",
        ],
        correctIndex: 0,
        explanation:
          "Twenty seconds is the minimum time it takes a train to reach the crossing once the warning lights activate. So the answer to a stall is to get out of the vehicle immediately, not to try the ignition again.",
        context:
          "Once you are out, run at a 45-degree angle away from the tracks and toward the oncoming train, so the debris from the impact goes away from you. Then dial 911. If the lights have not activated at all, get out anyway and call 911 plus the Emergency Notification System number posted on the crossing.",
        trap: "The instinct is to save the car. Twenty seconds is not enough time to diagnose a stall, and a train at 55 mph needs a mile or more to stop.",
        excerptKey: "stalled-on-tracks",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10, Safety Rules for Highway-Railway Crossings",
        sourceUrl: hb(57),
      },
      {
        id: "ok_s4_09",
        topic: "impairment",
        question:
          "You refuse the breath test and your license is revoked under Oklahoma's Implied Consent Law. What is the range of the revocation?",
        choices: [
          "30 days to 6 months",
          "90 days flat",
          "180 days to 2 years, depending on your record",
          "1 year to 5 years",
        ],
        correctIndex: 2,
        explanation:
          "The manual states the range as 180 days to 2 years, and where you land in it depends on your previous driving record. This is an administrative revocation and runs whether or not a court convicts you.",
        context:
          "Implied consent means that by driving, or by being in actual physical control of a vehicle, you have already agreed to the test. Refusing revokes your privilege automatically even if you had not been drinking at all, which is the part that surprises people.",
        trap: "Refusing does not avoid the consequence, it triggers a different one. The revocation for refusal exists independently of any DUI charge.",
        excerptKey: "implied-consent-period",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12, Oklahoma Implied Consent Laws",
        sourceUrl: hb(65),
      },
      {
        id: "ok_s4_10",
        topic: "safety",
        question:
          "On a cold drive with the heater running you start feeling drowsy and dizzy and the oncoming lights look unusually bright. What does the manual say this is?",
        choices: [
          "Normal night-vision fatigue",
          "Windshield glare",
          "Low blood sugar",
          "Possible carbon monoxide poisoning",
        ],
        correctIndex: 3,
        explanation:
          "Drowsiness, dizziness, lights seeming brighter, a blue tinge to the skin or lips and a tightening forehead are the manual's list of carbon monoxide symptoms. Pull off, park, shut the engine off and open the windows.",
        context:
          "Carbon monoxide has no color, smell or taste. It leaks in most often when the heater is running, when the exhaust system is faulty, or when you are sitting in heavy traffic breathing other cars' fumes. A bad exhaust can push it straight into the back seat where children sit.",
        trap: "The symptoms read like tiredness, which is exactly why drivers keep going. Brighter-looking lights is the tell that separates it from ordinary fatigue.",
        excerptKey: "carbon-monoxide-symptoms",
        sourceLabel: "Oklahoma Driver Manual - Chapter 11, Avoid Carbon Monoxide Poisoning",
        sourceUrl: hb(60),
      },
      {
        id: "ok_s4_11",
        topic: "rightOfWay",
        question:
          "A pedestrian with a white cane is tapping their way into the roadway ahead of you. What does Oklahoma law require?",
        choices: [
          "Stop 15 feet away and let them pass",
          "Sound the horn once so they know you are there",
          "Slow to walking speed and drive around them",
          "Stop only if they are inside a marked crosswalk",
        ],
        correctIndex: 0,
        explanation:
          "The manual sets a distance: a vehicle must stop 15 feet from a blind person in the roadway or at an intersection. You stop outside the crosswalk, not in it, and you let the person pass.",
        context:
          "The cane may be all white, white with a red tip, or chrome, and the person taps it on the pavement ahead of them. A guide dog counts the same way. This right of way does not depend on a crosswalk existing or on a signal being in your favor.",
        trap: "Honking is the worst thing available here. A blind pedestrian is navigating by sound, and a horn destroys the information they are using.",
        excerptKey: "yield-blind-15-feet",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5, You Must Yield to Blind Persons",
        sourceUrl: hb(28),
      },
      {
        id: "ok_s4_12",
        topic: "rules",
        question:
          "You are heading down a long grade and shift into neutral to save fuel. What is the legal position in Oklahoma?",
        choices: [
          "Legal, and it is a recognized fuel-saving technique",
          "Legal only in a vehicle with an automatic transmission",
          "Legal below 35 mph",
          "It is a violation of Title 47",
        ],
        correctIndex: 3,
        explanation:
          "Coasting down a grade with the vehicle in neutral, or with the clutch held in, is a violation. The manual cites Title 47, Chapter 11-1107 for it.",
        context:
          "The reason is control. A coasting car cannot use engine braking, so the brakes carry the whole load and can overheat on a long descent, and you have no immediate power to accelerate out of trouble. The manual's advice for a steep hill is the opposite of coasting: put the car in a lower gear.",
        trap: "It feels efficient and harmless, and on a modern engine it does not even save fuel. It is still a citable offense.",
        excerptKey: "coasting-illegal",
        sourceLabel: "Oklahoma Driver Manual - Chapter 11, Using a Standard Transmission",
        sourceUrl: hb(59),
      },
      {
        id: "ok_s4_13",
        topic: "signs",
        question:
          "You pass milepost 3 on an Oklahoma interstate running east and west. Which state line did the numbering start at?",
        choices: [
          "The western line",
          "The eastern line",
          "The southern line",
          "Whichever line is closer to the nearest city",
        ],
        correctIndex: 0,
        explanation:
          "On east-west highways the numbering starts at the western state line, and on north-south highways it starts at the southern line. So milepost 3 eastbound means you are three miles inside Oklahoma from the west.",
        context:
          "Mileposts exist so that a crash, breakdown or other emergency can be located precisely. When you call for help on an interstate, the milepost number and the direction of travel are the two most useful things you can give a dispatcher.",
        trap: "People assume the numbers count from the nearest city or from the state capital. They count from a state line, always.",
        excerptKey: "mileposts",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Guide Signs",
        sourceUrl: hb(25),
      },
      {
        id: "ok_s4_14",
        topic: "licensing",
        question:
          "Under Oklahoma's Mandatory Point System, how many points in what period will get your license suspended?",
        choices: [
          "6 or more points within 2 years",
          "8 or more points within 3 years",
          "10 or more points within 5 years",
          "12 or more points within 10 years",
        ],
        correctIndex: 2,
        explanation:
          "Ten or more points inside five years suspends your license. Everyone starts at zero and each pointable conviction adds one or more.",
        context:
          "The schedule is printed in the manual: reckless driving is 4, failing to stop for a school bus is 4, speeding more than 25 mph over is 3, ordinary speeding is 2, careless driving is 2, and most other violations are 1. Two points come off for each clean twelve-month period, and the total resets to zero after three years with no convictions.",
        trap: "The count is a rolling five years, not a calendar year and not a lifetime, so old convictions age out but recent ones stack fast.",
        excerptKey: "point-system",
        sourceLabel: "Oklahoma Driver Manual - Chapter 13, Oklahoma Mandatory Point System",
        sourceUrl: hb(71),
      },
      {
        id: "ok_s4_15",
        topic: "parking",
        question:
          "How close to the nearest rail of a railroad crossing may you legally park in Oklahoma?",
        choices: [
          "No closer than 15 feet",
          "No closer than 25 feet",
          "No closer than 50 feet",
          "Any distance, as long as you are clear of the tracks themselves",
        ],
        correctIndex: 2,
        explanation:
          "Fifty feet from the nearest rail. It is item 8 on the manual's unlawful-parking list and it is the longest single distance on that list.",
        context:
          "The stopping distances at a crossing pull in the same direction. When a train is actually approaching you stop within 50 feet but not less than 15 feet from the nearest rail, and if there is a painted stop line you stay behind it.",
        trap: "Fifteen feet is also a crossing number, but it is the minimum you may stop at when a train is coming, not the parking distance.",
        excerptKey: "parking-50-railroad",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9, Unlawful Parking",
        sourceUrl: hb(49),
      },
      {
        id: "ok_s4_16",
        topic: "speed",
        question:
          "Fog cuts visibility on a 65 mph two-lane state highway. You hold 65 and rear-end a car that stopped ahead. What has the manual already told you about that?",
        choices: [
          "You are covered, since you were within the posted limit",
          "It is a following-distance issue only, not a speed issue",
          "It is only an offense if the fog was officially reported",
          "You have broken the Basic Speed Rule, the posted limit notwithstanding",
        ],
        correctIndex: 3,
        explanation:
          "The Basic Speed Rule says your speed must be safe for the conditions and must let you stop within the clear distance ahead. If you could not stop in time, you were either speeding under that rule or following too closely, even at the posted limit.",
        context:
          "The statute the manual quotes has two halves. Speed must be careful and prudent and reasonable and proper for the traffic, surface, width and any other condition. And no one may drive faster than lets them stop within the assured clear distance ahead. Fog, rain, gravel and darkness all shrink that distance.",
        trap: "The posted number is a ceiling under ideal conditions, never a guaranteed safe speed. The manual uses 65 in fog as its own example.",
        excerptKey: "assured-clear-distance",
        sourceLabel: "Oklahoma Driver Manual - Chapter 7, The Basic Speed Rule",
        sourceUrl: hb(40),
      },
      {
        id: "ok_s4_17",
        topic: "sharing",
        question:
          "A cyclist ahead of you moves out of the gutter and rides down the middle of a narrow lane. What is going on?",
        choices: [
          "They are riding illegally and you may pass close to make the point",
          "It is legal only on a marked bike route",
          "They must move right for you within 100 feet",
          "They are entitled to the full lane when it is too narrow to share",
        ],
        correctIndex: 3,
        explanation:
          "The manual says the far-right rule applies only when the lane can safely be shared by a car and a bicycle side by side. A lane too narrow for both is one of the situations where taking the full lane is the safe and lawful choice.",
        context:
          "The manual lists the others: overtaking another vehicle, getting into position for a left turn, and unsafe conditions in the road such as parked cars, debris, potholes or pedestrians. Bicyclists have all the rights and all the responsibilities of a driver and are subject to the vehicle laws.",
        trap: "The three-foot passing rule does not become optional because the rider is in the middle of the lane. If you cannot leave three feet, you cannot pass yet.",
        excerptKey: "bicycle-full-lane",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10, Sharing the Road with Bicycles",
        sourceUrl: hb(52),
      },
      {
        id: "ok_s4_18",
        topic: "signals",
        question:
          "Overhead lane control signals show a steady yellow X above the lane you are in. What does it mean?",
        choices: [
          "The lane is open, proceed with caution",
          "Left turns only from this lane",
          "Stop where you are and wait",
          "Clear the lane",
        ],
        correctIndex: 3,
        explanation:
          "A yellow X means clear the lane. A red X means do not use the lane at all, and a green arrow means the lane is open for traffic.",
        context:
          "Lane control signals are used where the direction or availability of a lane changes through the day, such as reversible commuter lanes and toll plazas. A flashing yellow X is different again: it means the lane is available for left turns.",
        trap: "Yellow reads as a warning here rather than as a countdown to red. It is an instruction to move out, not permission to hurry through.",
        excerptKey: "lane-control-signals",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Lane Control Signals",
        sourceUrl: hb(27),
      },
      {
        id: "ok_s4_19",
        topic: "emergencies",
        question:
          "You back into a parked car in a lot and cannot find the owner anywhere. What does the manual require?",
        choices: [
          "Nothing, provided the damage is under $500",
          "Report it to your insurer within 10 days and leave it there",
          "Wait 30 minutes and then leave",
          "Leave your name, address and insurance information where the owner will find it",
        ],
        correctIndex: 3,
        explanation:
          "Leave the driver's and the vehicle owner's name and address, plus the information from the insurance verification form, on the damaged property where the owner will find it. That is the whole requirement, and it applies to property as well as parked cars.",
        context:
          "Leaving the scene of a collision that causes death or injury without stopping and rendering aid is on the list of convictions that carry a mandatory revocation of 6 months to 3 years. The parked-car rule is the low-stakes version of the same duty.",
        trap: "A dollar threshold does exist in Oklahoma but it governs when Service Oklahoma suspends an uninsured driver, not whether you have to leave a note.",
        excerptKey: "crash-parked-car",
        sourceLabel: "Oklahoma Driver Manual - Chapter 11, Your Responsibilities after a Crash",
        sourceUrl: hb(63),
      },
      {
        id: "ok_s4_20",
        topic: "impairment",
        question:
          "You hold a valid Oklahoma medical marijuana card and used cannabis last night. What does the manual say about driving today?",
        choices: [
          "It is illegal to drive with any detectable level of cannabis in your system",
          "The card is a defense as long as you are not visibly impaired",
          "The limit is the same 0.08 standard used for alcohol",
          "It is only an offense if you used within four hours of driving",
        ],
        correctIndex: 0,
        explanation:
          "The manual is explicit that although the state legalized cannabis for some medical purposes, it is illegal for anyone to drive with any detectable level of cannabis in their system. The card licenses possession and use, not driving.",
        context:
          "The wider point the chapter makes is that impairment is not confined to alcohol. Prescription and over-the-counter drugs can slow reaction time and blur vision, and mixing anything with alcohol multiplies the effect. Research cited in the manual finds cannabis users make more driving mistakes and have more trouble with glare.",
        trap: "The 0.08 figure belongs to alcohol only. There is no equivalent cannabis threshold in Oklahoma - the standard is any detectable level.",
        excerptKey: "cannabis-detectable",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12, Other Drugs and Driving",
        sourceUrl: hb(66),
        commonlyMissed: true,
      },
      {
        id: "ok_s4_21",
        topic: "safety",
        question: "What is hydroplaning, in the manual's own terms?",
        choices: [
          "The engine losing power when water enters the intake",
          "The steering pulling to one side on a crowned road",
          "The brakes fading after driving through a puddle",
          "Your tires losing contact with the road and riding on a film of water",
        ],
        correctIndex: 3,
        explanation:
          "Hydroplaning is the tires lifting off the road surface and riding on the water instead. Traction drops, stopping distance grows and turning becomes hazardous.",
        context:
          "The manual's remedy is speed, not technique: as long as the surface is wet you should slow down, and in a heavy downpour slow further or pull off. Wide tires can hydroplane even at reduced speeds, so a big-tired vehicle is not immune.",
        trap: "Drivers link it to deep standing water. A wet surface is enough, and the most dangerous moment is the first few minutes of rain when grease lifts off the road.",
        excerptKey: "hydroplaning",
        sourceLabel: "Oklahoma Driver Manual - Chapter 8, Following",
        sourceUrl: hb(44),
      },
      {
        id: "ok_s4_22",
        topic: "rightOfWay",
        question:
          "The lead car of a funeral procession clears the intersection on green and the light turns red behind it. What may the rest of the procession do?",
        choices: [
          "Stop and wait for the next green, like anyone else",
          "Split up and rejoin on the far side",
          "Follow only if a police escort is present",
          "Follow through the intersection regardless of the traffic control device",
        ],
        correctIndex: 3,
        explanation:
          "Once the lead vehicle enters the intersection, the remaining vehicles in the procession may follow through it regardless of any traffic control device. Motorists must yield the right of way to the procession.",
        context:
          "Every vehicle in the procession should have its headlights on, and that is the signal to other drivers not to drive between them or interfere. Separately, a caravan or motorcade outside a business or residential area normally leaves at least 200 feet between vehicles, and funeral processions are exempt from that spacing.",
        trap: "A red light usually beats everything. This is one of the narrow places where an established procession does not have to break.",
        excerptKey: "funeral-procession",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5, You Must Yield to a Funeral Procession",
        sourceUrl: hb(28),
      },
      {
        id: "ok_s4_23",
        topic: "rules",
        question:
          "You realize on the turnpike that you needed the last exit. There is a gravel crossover through the median just ahead. What does the manual say?",
        choices: [
          "Use it, that is what the crossovers are there for",
          "Use it only if no traffic is in sight in either direction",
          "Use it only at night when traffic is light",
          "Never turn around on a controlled-access highway - drive to the next exit",
        ],
        correctIndex: 3,
        explanation:
          "Never turn around on the expressway, and under no conditions cross the median or divider to do it. Keep going to the next exit, get off, and re-enter in the other direction.",
        context:
          "Title 47 backs this up twice over. Section 11-311 forbids driving across a dividing space except through a permanent opening, and only where a public authority has authorized a temporary one. Section 11-312 says you may enter or leave a controlled-access roadway only at established entrances and exits.",
        trap: "The median crossovers exist for maintenance and emergency vehicles under authority. For everyone else they are not an exit.",
        excerptKey: "expressway-no-uturn",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Expressway Driving",
        sourceUrl: hb(34),
      },
      {
        id: "ok_s4_24",
        topic: "signs",
        question:
          "A yellow diamond shows a black stem meeting a horizontal bar, forming a T. What is ahead?",
        choices: [
          "A bridge with a lower weight limit",
          "A truck route branching off",
          "A crossroads with a signal",
          "A road that ends, where you must turn right or left",
        ],
        correctIndex: 3,
        explanation:
          "It is the T intersection warning. The road you are on ends at another road, so you must turn right or left, and you should be prepared to yield.",
        context:
          "Every diamond-shaped yellow sign warns of a condition immediately ahead. The T sign is one of the ones that carries an actual obligation rather than just a caution, because there is no option to continue straight.",
        trap: "It gets read as a plain crossroads sign. The difference is that a crossroads lets you go straight and a T does not.",
        excerptKey: "t-intersection-sign",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Warning Signs",
        sourceUrl: hb(22),
      },
      {
        id: "ok_s4_25",
        topic: "licensing",
        question:
          "A 17-year-old borrows an altered ID to buy alcohol in Oklahoma. What does the manual say the exposure is?",
        choices: [
          "A fine of up to $500 and the card is confiscated",
          "A misdemeanor and a 6-month license suspension",
          "A warning on a first offense",
          "A felony, up to 7 years in prison and a fine of up to $10,000",
        ],
        correctIndex: 3,
        explanation:
          "The manual states it as bluntly as it states anything: every time you use, carry, borrow or buy a fake ID it is a felony, you could spend 7 years in prison and you could face a $10,000 fine.",
        context:
          "Separately, your own license or ID can be canceled for a list of acts around misuse: lending it to someone, displaying an altered one, refusing to surrender a suspended one, or possessing a counterfeit card or one bearing someone else's photograph.",
        trap: "Borrowing sounds lesser than forging. The manual puts using, carrying, borrowing and buying in the same sentence with the same consequence.",
        excerptKey: "fake-id-felony",
        sourceLabel: "Oklahoma Driver Manual - Chapter 13, Unlawful Use of License and/or Identification Card",
        sourceUrl: hb(69),
      },
      {
        id: "ok_s4_26",
        topic: "parking",
        question:
          "You are parking facing uphill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Away from the curb, then roll back until the tire touches it",
          "Toward the curb, then roll forward until the tire touches it",
          "Straight ahead, with the parking brake set hard",
          "Sharply to the right, whichever side the curb is on",
        ],
        correctIndex: 0,
        explanation:
          "Facing uphill against a curb you turn the wheels sharply away from the curb and back slowly until the rear of the tire rests against it. If the car rolls, the curb stops it.",
        context:
          "There are three cases and they are all different. Downhill: wheels toward the curb, then edge forward until the tire touches, and shift into reverse or park. Uphill with a curb: wheels away, roll back to the curb, shift into low gear or park. Uphill with no curb at all: wheels sharply to the right, so a rolling car leaves the traffic lane.",
        trap: "The uphill and downhill cases are mirror images and get swapped constantly. The test is always the same - if the car rolls, does the curb catch it, or does it roll into the road.",
        excerptKey: "hill-parking-uphill-curb",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9, Parking and Starting on a Hill",
        sourceUrl: hb(48),
      },
      {
        id: "ok_s4_27",
        topic: "speed",
        question:
          "Traffic on a 55 mph county road is moving at 55 and you are holding 30 with a line of cars behind you. What does Oklahoma law say?",
        choices: [
          "Driving under the limit is always lawful",
          "You may drive any speed you like as long as you keep right",
          "It only becomes an offense above five vehicles behind you",
          "Driving so slowly that you block or hinder others is itself a violation",
        ],
        correctIndex: 3,
        explanation:
          "The Basic Speed Rule cuts both ways. Your speed must not be too fast or too slow for the conditions, and the manual says you must not drive so slowly that you block, hinder or interfere with other vehicles moving at normal speeds.",
        context:
          "Title 47 adds where you belong if you are the slow one: a vehicle moving at less than the normal speed of traffic is driven in the right-hand lane when one is available, or as close as practicable to the right curb or edge, and may use the right shoulder temporarily to let others by.",
        trap: "Under the limit feels automatically safe and automatically legal. Oklahoma treats impeding traffic as a genuine offense, and driving too slowly on an expressway is called out by name.",
        excerptKey: "too-slow-illegal",
        sourceLabel: "Oklahoma Driver Manual - Chapter 7, The Basic Speed Rule",
        sourceUrl: hb(40),
      },
      {
        id: "ok_s4_28",
        topic: "sharing",
        question:
          "You come up behind a horse-drawn buggy on a rural Oklahoma road. What is its legal status?",
        choices: [
          "It has the same right to the road and must follow the same rules",
          "It must pull over and let traffic by within a quarter mile",
          "It is allowed only on roads posted at 35 mph or less",
          "It has right of way over everything, including at intersections",
        ],
        correctIndex: 0,
        explanation:
          "Animal-drawn vehicles have the same rights to use the road as a motor vehicle and must follow the same rules of the road. Warning signs are posted in areas where you are likely to meet them.",
        context:
          "The manual groups them with the other slow traffic you meet in rural Oklahoma - tractors, combines and other farm equipment, usually moving at less than 25 mph and sometimes wider than one lane. The Slow Moving Vehicle emblem, an orange triangle, marks anything traveling at 25 mph or less.",
        trap: "Their occupants take the damage in a collision, which is exactly why the manual asks for extra room, not for a lesser right of way.",
        excerptKey: "animal-drawn",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10, Slow-Moving Vehicles",
        sourceUrl: hb(58),
      },
      {
        id: "ok_s4_29",
        topic: "signals",
        question: "A signal is flashing yellow as you approach. What is expected of you?",
        choices: [
          "Come to a full stop, then proceed when clear",
          "Maintain speed, you have the right of way",
          "Treat it as a yield sign and stop only if traffic is present",
          "Slow down, look both ways and drive carefully through, ready to stop",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow means caution. Slow down, look in both directions, and go through slowly and carefully, prepared to stop.",
        context:
          "The flashing pair works as a matched set. Flashing red means the same as a stop sign, so you stop and then go when it is safe. Flashing yellow is the cross street's version of the same intersection, and the manual warns you to watch for drivers racing to beat it.",
        trap: "It is easy to read a flashing yellow as a free pass because the cross traffic has the red. The manual still wants you slowed and looking.",
        excerptKey: "flashing-yellow-light",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Traffic Signals",
        sourceUrl: hb(26),
      },
      {
        id: "ok_s4_30",
        topic: "emergencies",
        question:
          "Water is running across a low-water crossing and the depth marker reads six inches. What does the manual say six inches of water can do?",
        choices: [
          "Nothing to a car, it only matters to pedestrians",
          "Stall the engine but leave the vehicle in place",
          "Float a passenger car clean off the roadbed",
          "Be enough to make you lose control of your vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Six inches of water may be enough to cause you to lose control of your vehicle, and six inches of fast-moving water can knock a person off their feet. The instruction is Turn Around, Don't Drown.",
        context:
          "The physics chapter gives the reason. Water applies 500 pounds of lateral force for every foot it rises, and the car displaces 1,500 pounds of water per foot, so it effectively loses that much weight. Most vehicles float in two feet, SUVs included, and the roadbed under the water may already be washed away.",
        trap: "Two feet is the flotation figure and it dominates people's memory. Control goes long before flotation does, at six inches.",
        excerptKey: "flood-turn-around",
        sourceLabel: "Oklahoma Driver Manual - Chapter 11, Flood Dynamics",
        sourceUrl: hb(63),
      },
      {
        id: "ok_s4_31",
        topic: "impairment",
        question:
          "Which of these contains the same amount of alcohol as the other two, according to the manual?",
        choices: [
          "A 12-ounce beer, a 5-ounce glass of wine and 1.5 ounces of 80-proof spirits",
          "A 12-ounce beer, a 12-ounce glass of wine and 3 ounces of spirits",
          "A 16-ounce beer, a 5-ounce glass of wine and 1 ounce of spirits",
          "They are never comparable, it depends entirely on the brand",
        ],
        correctIndex: 0,
        explanation:
          "The manual's sobering fact is that it is not what you drink, it is how much. A 12-ounce beer, a 5-ounce glass of wine and a cocktail with 1.5 ounces of 80-proof spirits all carry the same alcohol.",
        context:
          "This matters because people count drinks by container. Alcohol reaches the blood quickly and hits judgment first, so the manual's warning is that you do not know you have had too much until it is already too late to tell.",
        trap: "Switching from spirits to beer feels like moderating. By the standard-drink measure it is often the same quantity of alcohol.",
        excerptKey: "standard-drink",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12, DUI - If You Drink, Don't Drive",
        sourceUrl: hb(64),
      },
      {
        id: "ok_s4_32",
        topic: "safety",
        question:
          "You are following a pickup at night on a dark highway with your high beams on. When must you dim?",
        choices: [
          "Within 200 feet of the vehicle ahead",
          "Within 300 feet of the vehicle ahead",
          "Within 600 feet of the vehicle ahead",
          "Only when the other driver flashes at you",
        ],
        correctIndex: 2,
        explanation:
          "Six hundred feet is the following figure. The oncoming figure is longer: dim to low beams within 1,000 feet of a vehicle coming toward you.",
        context:
          "You use headlights beginning 30 minutes after sunset and until 30 minutes before sunrise, and whenever a road sign says so. High beams belong in open country with nobody around. Low beams belong where there are streetlights, or in fog, rain, snow or any other adverse weather, because high beams bounce back off the moisture.",
        trap: "The two distances get swapped. The rule of thumb that works is that the oncoming number is the bigger one, because closing speed eats the distance twice as fast.",
        excerptKey: "high-beam-distances",
        sourceLabel: "Oklahoma Driver Manual - Chapter 11, Using High and Low Headlight Beams Properly",
        sourceUrl: hb(59),
      },
      {
        id: "ok_s4_33",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping center driveway onto a city street. Where does the manual say you stop?",
        choices: [
          "At the edge of the traffic lane",
          "Nowhere in particular, provided you yield to traffic",
          "Only if a pedestrian is actually present",
          "Before the sidewalk or crosswalk, then go when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "Entering or crossing a public road from a private road, alley, driveway or building means stopping before the sidewalk or crosswalk first, then going when it is safe. The sidewalk is a separate hazard from the roadway.",
        context:
          "Two duties stack here. You yield to pedestrians using the sidewalk when you enter or leave a driveway or alley, and you yield to all traffic on the road you are joining. Title 47 also puts county-road and private-drive traffic behind state and federal highway traffic whether or not a sign is present or even visible.",
        trap: "Rolling to the edge of the traffic lane to see past parked cars means you have already crossed the sidewalk, which is where the person on foot is.",
        excerptKey: "yield-private-road",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5, You Must Always Yield",
        sourceUrl: hb(29),
      },
      {
        id: "ok_s4_34",
        topic: "rules",
        question:
          "You are waiting in a center two-way left-turn lane for a gap. How far may you travel in that lane while preparing to turn?",
        choices: [
          "As far as you like, provided you are signalling",
          "100 feet",
          "200 feet",
          "300 feet",
        ],
        correctIndex: 2,
        explanation:
          "Title 47 caps it at 200 feet. A vehicle turning left from the roadway may not be driven in the two-way left-turn lane for more than 200 feet while preparing for and making the turn.",
        context:
          "The lane is marked by a solid yellow line on the outside and a dashed yellow line on the inside, on each side. It is for left turns in both directions only. You may not use it to pass, you may not drive along it, and where one exists you may not make the left turn from any other lane.",
        trap: "It looks like a merge lane and people ride it for a block. The manual and the statute agree that it is entered only to turn.",
        excerptKey: "stat-two-way-left-turn",
        sourceLabel: "47 O.S. Section 11-309 - Additional Rules for Driving on Roadways Laned for Traffic",
        sourceUrl: stat("82287"),
      },
      {
        id: "ok_s4_35",
        topic: "licensing",
        question:
          "A 16-year-old in Oklahoma has driver education done and 180 days on their permit. What else must they bring to the drive test if they are under 18?",
        choices: [
          "A certified copy of their school transcript",
          "A defensive driving course certificate",
          "A notarized statement from their insurance company",
          "The Oklahoma Work Zone Safe course completion certificate",
        ],
        correctIndex: 3,
        explanation:
          "Anyone under 18 has to complete the free online Oklahoma Work Zone Safe Course and bring the certificate to the drive test. It has been a requirement since November 1, 2023.",
        context:
          "The rest of the intermediate checklist is the permit held 180 days, at least 50 hours of behind-the-wheel practice including 10 at night with a licensed driver 21 or older who has been licensed two years, no traffic convictions in the 180 days before the test, and proof of driver education if you are under 16 and a half.",
        trap: "It is easy to miss because it is not in the manual at all - it lives on the Service Oklahoma intermediate licence page, and a learner studying only the book will not see it.",
        excerptKey: "work-zone-safe-course",
        sourceLabel: "Service Oklahoma - Intermediate License",
        sourceUrl: INTERMEDIATE,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The Oklahoma rules learners report getting wrong: the backing question with a tempting mirror answer, the hill-parking directions everybody reverses, the printed distances nobody memorizes, and the school-bus items that seem to take over the test.",
    questions: [
      {
        id: "ok_s5_01",
        topic: "safety",
        question:
          "You are backing out of a parking space. What does the Oklahoma Driver Manual tell you to do?",
        choices: [
          "Look directly through the rear window and never use the rearview mirror for backing",
          "Watch the rearview mirror and use the backup camera to fill in the gaps",
          "Check the mirrors first, then glance over your shoulder as you move",
          "Rely on the backup camera, which sees more than you can",
        ],
        correctIndex: 0,
        explanation:
          "The manual's wording is absolute: put your right arm on the seat back, look directly through the rear window, and never use your rearview mirror for backing up. Mirrors and cameras both leave gaps low and to the sides.",
        context:
          "The full sequence is foot on the brake, shift to reverse, left hand at 12 o'clock on the wheel, then turn and look. Accelerate gently, keep it slow, steer slightly in the direction the rear of the car should go, and keep looking to the rear until you are fully stopped. Check behind the car for bikes and children before you even get in.",
        trap: "Learners who answer with the mirror because it sounds thorough are marked wrong. The manual singles the mirror out as the thing not to depend on.",
        excerptKey: "backing-rear-window",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Backing",
        sourceUrl: hb(39),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_02",
        topic: "parking",
        question:
          "You are parking facing downhill against a curb. Which way do you turn the front wheels?",
        choices: [
          "Away from the curb",
          "It does not matter with an automatic transmission",
          "Straight ahead",
          "Toward the curb",
        ],
        correctIndex: 3,
        explanation:
          "Downhill, the wheels go toward the curb and you edge forward until the tire rests against it. Then shift into reverse or park. If the car gets away, the curb catches it.",
        context:
          "Uphill against a curb is the opposite - wheels away from the curb, roll back until the rear of the tire touches, then low gear or park. Uphill with no curb, wheels sharply to the right so a rolling car leaves the road. In every case you also stop within six inches of the curb and set the parking brake.",
        trap: "Downhill and uphill get reversed more than any other pair in the manual. Ask which way a runaway car would go, and point the wheels so the curb or the shoulder stops it.",
        excerptKey: "hill-parking-downhill",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9, Parking and Starting on a Hill",
        sourceUrl: hb(48),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_03",
        topic: "safety",
        question:
          "Headlights are on high beam and a car appears coming toward you. At what distance must you dim?",
        choices: ["500 feet", "600 feet", "1,000 feet", "1,500 feet"],
        correctIndex: 2,
        explanation:
          "One thousand feet for an oncoming vehicle. The figure for the vehicle you are following is shorter, at 600 feet.",
        context:
          "One thousand feet is roughly a fifth of a mile, so on a dark road you dim well before the other car is close. High beams are for open country with no one nearby, and low beams are the right choice under streetlights and in fog, rain or snow, where high beams reflect back at you.",
        trap: "Six hundred is the other real number in the same paragraph, which is exactly why it works as a wrong answer. Oncoming gets the larger distance.",
        excerptKey: "high-beam-distances",
        sourceLabel: "Oklahoma Driver Manual - Chapter 11, Using High and Low Headlight Beams Properly",
        sourceUrl: hb(59),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_04",
        topic: "rules",
        question:
          "How far ahead of a turn, a slowdown or a stop does the Oklahoma manual say you should signal?",
        choices: [
          "At least 50 feet",
          "At least 100 feet or one third of a block",
          "At least 200 feet",
          "As soon as you begin braking",
        ],
        correctIndex: 1,
        explanation:
          "At least 100 feet, or a third of a block. The manual also states flatly that it is illegal to turn without signalling at all.",
        context:
          "The statute puts a harder edge on the lane-change version of the same duty: you may not move out of your lane until you have first made sure the movement can be made safely and then signalled for not less than the last 100 feet traveled. The turn diagrams in the manual repeat the 100 feet as step two of both the right and the left turn.",
        trap: "Signalling as you brake, or as you start to turn, is too late to be useful and is not what the manual asks for. The signal comes first, then the braking.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Turning",
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_05",
        topic: "rightOfWay",
        question:
          "A school bus ahead of you stops with red lights flashing. In which of these cases do you NOT have to stop?",
        choices: [
          "You are behind the bus in the same lane",
          "You are meeting the bus on an ordinary two-lane street",
          "The bus is stopped on the shoulder with its lights still going",
          "The bus is on a different roadway",
        ],
        correctIndex: 3,
        explanation:
          "The manual gives exactly two exemptions: the bus is on a different roadway, or the bus is stopped in a loading zone beside a controlled-access highway where pedestrians are not allowed to cross. Everything else stops.",
        context:
          "When you do have to stop you stay stopped until the bus starts moving, or the driver waves you on, or the red lights go off and the stop sign folds back. Failing to stop for a bus with its red loading lights flashing carries a mandatory one-year revocation of your license and four points.",
        trap: "A painted center line is not a different roadway. The exemption is about a physically separate roadway on a divided highway, which is why a wide four-lane street with a stripe does not qualify.",
        excerptKey: "schoolbus-exceptions",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5, Yield Right-of-Way to a School or Church Bus",
        sourceUrl: hb(30),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_06",
        topic: "licensing",
        question:
          "You are convicted of failing to stop for a school bus that had its red loading lights flashing. What happens to your license?",
        choices: [
          "Two points and a fine",
          "A 30-day suspension",
          "Nothing until a second offense",
          "Mandatory revocation for one year",
        ],
        correctIndex: 3,
        explanation:
          "It is a mandatory revocation of your driver license for one year. The manual prints it in a box beside the school-bus diagram, and it is not discretionary.",
        context:
          "The same offense is worth 4 points on the mandatory point system, alongside reckless driving. Ten points inside five years suspends you on its own, so a school-bus conviction takes you nearly half way there before the revocation is even considered.",
        trap: "This is not a points-and-fine matter that a good record absorbs. The revocation is automatic on conviction.",
        excerptKey: "schoolbus-revocation",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5, Yield Right-of-Way to a School or Church Bus",
        sourceUrl: hb(30),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_07",
        topic: "rules",
        question:
          "You are cruising in the left lane of a four-lane divided highway at the speed limit with traffic backing up behind you. What is the legal position?",
        choices: [
          "Lawful, since you are not exceeding the limit",
          "Only an offense if you are below the limit",
          "Lawful on any road inside city limits or on any county road",
          "A vehicle may not impede the normal flow of traffic by driving in the left lane",
        ],
        correctIndex: 3,
        explanation:
          "The manual states it as a rule about impeding, not about speed: on a roadway divided into four or more lanes, a vehicle cannot impede the normal flow of traffic by driving in the left lane.",
        context:
          "Title 47 Section 11-309 gives the fuller version. The left lane is for overtaking and passing, with exceptions for traffic conditions, flow and road configuration such as merging traffic. It also carves out roads inside a municipality's city limits and county roads, as long as they are not interstates or turnpikes.",
        trap: "Being at the posted limit is not a defense. The offense is impeding the flow, which can happen at exactly the speed limit.",
        excerptKey: "stat-left-lane",
        sourceLabel: "47 O.S. Section 11-309 - Additional Rules for Driving on Roadways Laned for Traffic",
        sourceUrl: stat("82287"),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_08",
        topic: "speed",
        question:
          "You reach the end of an on-ramp at 45 mph and traffic is running at 70. What does the manual say about expressway speed?",
        choices: [
          "Drive between the minimum, usually 40, and the maximum, and driving too slowly is against the law",
          "Merge at whatever speed feels safe, the minimum is advisory",
          "Merge below traffic speed and let others adjust around you",
          "The minimum applies only to trucks and buses",
        ],
        correctIndex: 0,
        explanation:
          "The manual tells you to drive between the minimum, usually 40 mph, and the maximum, which runs 55 to 75, and says outright that driving too slowly is against the law because it is dangerous.",
        context:
          "It also says that if your car is not in good condition, or you cannot or do not want to drive at or above the minimum, you should not use the expressway at all. Entering, you use the acceleration lane to match traffic, stay right, signal left and merge - and you yield to the vehicles already on the road.",
        trap: "Slow feels cautious on a ramp. Merging 25 mph below the flow forces everyone behind to brake and is the single most common complaint drivers make about Oklahoma on-ramps.",
        excerptKey: "expressway-speed-range",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Expressway Driving",
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_09",
        topic: "impairment",
        question:
          "A 19-year-old is stopped in Oklahoma and blows 0.03. What happens?",
        choices: [
          "The zero tolerance law applies to any measurable quantity of alcohol",
          "A warning, since it is a first reading under 0.05",
          "Nothing, 0.03 is well under the legal limit",
          "It is treated the same as an adult reading of 0.03",
        ],
        correctIndex: 0,
        explanation:
          "Under 21, the standard is any measurable quantity of alcohol in the blood or breath. There is no allowance below 0.08 and no allowance below 0.05.",
        context:
          "A first zero tolerance offense revokes the license for six months, a second for twelve months, and there is a fine of $100 to $500, community service or a treatment program on top. If the driver is under 16, or would still be under 16 when the cancellation ends, Service Oklahoma extends it until their sixteenth birthday.",
        trap: "The 0.08 figure is everywhere and it is the adult limit. For a driver under 21 the number that matters is any measurable amount at all.",
        excerptKey: "zero-tolerance-under-21",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12, Zero Tolerance for Drivers under 21",
        sourceUrl: hb(67),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_10",
        topic: "licensing",
        question:
          "A learner permit holder is convicted of a moving violation. What does Oklahoma's graduated licensing law do?",
        choices: [
          "They stay at their current GDL level until 6 months from the conviction date have passed",
          "The permit is canceled and must be reapplied for",
          "Nothing, provided the fine is paid",
          "The permit period restarts from zero",
        ],
        correctIndex: 0,
        explanation:
          "You remain at your current GDL level, learner or intermediate, until six months from the date of the conviction has elapsed. The clock runs from the conviction, not from the offense and not from the ticket.",
        context:
          "This sits alongside a separate requirement on the intermediate licence: no traffic convictions on your record for the 180 days immediately preceding the drive test, and none for 180 days before an unrestricted licence is issued if you took driver education, or 12 months if you did not.",
        trap: "Paying the fine settles the ticket, not the licence consequence. The conviction is what stops the clock.",
        excerptKey: "gdl-conviction-hold",
        sourceLabel: "Oklahoma Driver Manual - Chapter 1, New Graduated Driver License (GDL)",
        sourceUrl: hb(8),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_11",
        topic: "parking",
        question:
          "Which of these matches the Oklahoma manual's unlawful-parking list exactly?",
        choices: [
          "10 feet from a hydrant and 15 feet from a crosswalk at an intersection",
          "15 feet from a hydrant and 20 feet from a crosswalk at an intersection",
          "20 feet from a hydrant and 30 feet from a crosswalk at an intersection",
          "25 feet from a hydrant and 25 feet from a crosswalk at an intersection",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet from a fire hydrant, and 20 feet from a crosswalk at an intersection. Both are on the manual's numbered list of thirteen places it is illegal to park.",
        context:
          "The rest of the list: not on a sidewalk, not in front of a driveway, not within an intersection, not on a crosswalk, 30 feet approaching a stop sign or signal, 50 feet from the nearest rail, 20 feet from a fire station driveway and 75 feet opposite one, no double parking, nothing on a bridge or in an underpass, and nowhere signs prohibit stopping.",
        trap: "Ten feet from a hydrant is the figure in several neighboring states, and it is the one people carry across state lines. Oklahoma's is 15.",
        excerptKey: "parking-hydrant-15",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9, Unlawful Parking",
        sourceUrl: hb(49),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_12",
        topic: "rules",
        question:
          "A car ahead of you is stopped in the lane waiting to turn left, and the paved shoulder to your right is wide and empty. What may you do?",
        choices: [
          "Nothing - you may never pass on the right by driving off the pavement",
          "Pass on the right only if you signal first",
          "Pass on the right using the shoulder, since the vehicle is turning left",
          "Pass on the right at under 15 mph",
        ],
        correctIndex: 0,
        explanation:
          "Passing a left-turning vehicle on the right is permitted, but only on the pavement. The manual says you can never legally pass on the right by driving off the pavement or main portion of the highway.",
        context:
          "The three lawful cases for overtaking on the right are a road wide enough for two or more lanes in each direction with no parked cars or obstructions, a one-way road, and a vehicle in front that is making or about to make a left turn. Title 47 Section 11-304 adds that the movement must be made in safety and never off the pavement.",
        trap: "The left-turn exception is real, which is what makes this tempting. It permits the maneuver, not the surface you would need to do it on.",
        excerptKey: "passing-off-pavement",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Passing on the Right",
        sourceUrl: hb(35),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_13",
        topic: "signals",
        question:
          "Your left-turn signal head shows a flashing yellow arrow. What have you been given?",
        choices: [
          "A protected turn - oncoming traffic is stopped",
          "A requirement to stop before turning",
          "A warning that the arrow is about to turn red",
          "Permission to turn after yielding to oncoming traffic and pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow arrow lets you turn left after yielding. The manual is explicit that oncoming traffic has the right of way - it is looking at a green.",
        context:
          "The solid green arrow is the protected one: when it is lit you may turn in the direction of the arrow even with a red showing, though you still yield to pedestrians already in the crosswalk. The flashing yellow replaced the old solid green ball for permitted turns precisely because drivers were reading the green as protection.",
        trap: "Anything lit in your turn head feels like permission with protection. Flashing yellow is permission without it.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Traffic Signals",
        sourceUrl: hb(26),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_14",
        topic: "safety",
        question:
          "The rear of your car breaks loose to the left on ice while you are meeting oncoming traffic. What does the manual say?",
        choices: [
          "Steer in the direction of the skid, but not if that means steering into oncoming traffic",
          "Brake hard and hold the wheel straight",
          "Steer into the skid regardless, that is always the correct action",
          "Pull the parking brake to straighten the car",
        ],
        correctIndex: 0,
        explanation:
          "The general rule is to lift off the brake and steer in the direction of the skid. The manual then adds the exception in the same paragraph: steering into the skid may not always be best, and its own example is a rear that slides left while you are meeting other traffic.",
        context:
          "It also says the best skid control is prevention, because there is very little you can do once a skid starts. Test the brakes gently after the car is moving to feel how much traction there is, watch for black ice on bridges and in shade, and do not use the clutch or brake suddenly, since sudden braking increases the skid.",
        trap: "Steer into the skid is drilled as an unconditional rule. The manual conditions it on not running off the road, hitting something or steering into oncoming cars.",
        excerptKey: "skid-steer-into",
        sourceLabel: "Oklahoma Driver Manual - Chapter 8, Stopping in Icy and Rainy Conditions",
        sourceUrl: hb(43),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_15",
        topic: "emergencies",
        question:
          "You are mid-way across a railroad crossing when the lights start flashing and the gate begins to come down. What do you do?",
        choices: [
          "Keep going and finish crossing",
          "Stop and wait, the gate on the far side will not close",
          "Stop immediately and reverse clear of the tracks",
          "Stop, get out and run",
        ],
        correctIndex: 0,
        explanation:
          "Keep moving. The warning signals allow enough time for you to finish crossing before the train arrives, and the gate on the far side will not block you in.",
        context:
          "The manual warns that if you stop and try to back up your vehicle may stall, which puts you on the tracks with seconds to spare. The rule flips before you start: never move onto a track unless you are certain you can drive all the way across, and never drive around a lowered gate, which is itself against the law.",
        trap: "Stopping is the reflex, because a red flashing light usually means stop. Once you are on the tracks the safest place is the far side.",
        excerptKey: "rr-keep-moving",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10, Safety Rules for Highway-Railway Crossings",
        sourceUrl: hb(57),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_16",
        topic: "sharing",
        question:
          "A semi ahead of you swings wide to the left and its right turn signal is on. What is the danger?",
        choices: [
          "It is drifting and you should sound the horn",
          "It is changing lanes left and you should pass on the right",
          "You should move into the gap it left on the right to keep traffic moving",
          "The gap on its right is where the trailer will sweep, and the driver cannot see you there",
        ],
        correctIndex: 3,
        explanation:
          "Trucks make wide right turns and often have to leave an open space on the right to do it. Moving into that space puts you between the truck and the curb, in a blind spot, as the trailer sweeps across.",
        context:
          "The manual calls it the right turn squeeze and pairs it with the other truck trap, a truck reversing into a dock: never try to cross behind a truck that is preparing to back up, because you will be in the driver's blind spot for the whole maneuver.",
        trap: "The wide swing left reads as a lane change, and the gap on the right reads as an invitation. It is neither.",
        excerptKey: "truck-right-turn",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10, Risky Situations with Trucks",
        sourceUrl: hb(55),
        commonlyMissed: true,
      },
      {
        id: "ok_s5_17",
        topic: "licensing",
        question:
          "You fail the Oklahoma written knowledge test. When can you take it again?",
        choices: [
          "The same day, once you have paid the retest fee",
          "By law you must wait at least one day",
          "After seven days",
          "After 30 days",
        ],
        correctIndex: 1,
        explanation:
          "The manual states that if you fail the written test, by law you must wait at least one day before retesting. There is a $4 retest fee added to the issuance fee for each failed attempt.",
        context:
          "The test itself is 20 questions with 60 minutes allowed, and you need 15 correct. Taken online through the state's provider you get two attempts before you have to come into a Service Oklahoma location, and you still need the vision screening in person either way.",
        trap: "Retest fees are cheap enough that people assume they can just sit back down. The one-day wait is statutory, not a policy the office can waive.",
        excerptKey: "written-retest-wait",
        sourceLabel: "Oklahoma Driver Manual - Chapter 1, What to Expect",
        sourceUrl: hb(9),
      },
      {
        id: "ok_s5_18",
        topic: "speed",
        question:
          "What is the maximum fine the Oklahoma manual gives for violating the Basic Speed Rule?",
        choices: ["$250", "$500", "$654", "$1,000"],
        correctIndex: 2,
        explanation:
          "Up to $654, plus up to 30 days in jail. The manual prints the odd figure exactly, and fines double in school and construction zones when workers or equipment are present.",
        context:
          "Oklahoma prints more penalty figures than most handbooks and they get tested: $500 or six months for driving without a valid license, $500 or six months for violating a restriction, $250 and 30 days plus suspension for no insurance, and $100 to $1,000 with up to 30 days for disobeying work zone signs.",
        trap: "The specific number looks like a typo, which is why people pick a round figure instead. It is genuinely $654.",
        excerptKey: "speeding-penalty",
        sourceLabel: "Oklahoma Driver Manual - Chapter 7, Maximum Penalty for Violating the Basic Speed Rule",
        sourceUrl: hb(40),
      },
      {
        id: "ok_s5_19",
        topic: "rules",
        question:
          "How close to an intersection or railroad grade crossing does Title 47 stop you from driving on the left side of the roadway?",
        choices: [
          "Within 50 feet",
          "Within 100 feet",
          "Within 150 feet",
          "There is no fixed distance, it depends on visibility",
        ],
        correctIndex: 1,
        explanation:
          "One hundred feet, unless official traffic control devices say otherwise. The same 100 feet applies when your view is blocked approaching a bridge, viaduct or tunnel.",
        context:
          "The manual translates this into plain advice: do not pass within 100 feet of an obstructed view, or where vehicles or pedestrians might cross your path, and watch for bridges, viaducts, tunnels, overpasses, railroad crossings, intersections and crosswalks. The statute also bans it on the crest of a grade or a curve where your view is obstructed.",
        trap: "People look for painted lines. The 100-foot rule and the hills-and-curves rule both apply even where the road carries no markings at all.",
        excerptKey: "stat-left-of-center-100",
        sourceLabel: "47 O.S. Section 11-306 - Further Limitations on Driving to Left of Center of Roadway",
        sourceUrl: stat("82282"),
      },
      {
        id: "ok_s5_20",
        topic: "rightOfWay",
        question:
          "Two cars reach an uncontrolled intersection from different streets at the same moment. Who yields?",
        choices: [
          "The driver on the left yields to the driver on the right",
          "The driver on the right yields to the driver on the left",
          "The faster vehicle yields",
          "Whoever is turning yields, whichever side they are on",
        ],
        correctIndex: 0,
        explanation:
          "When two vehicles approach at approximately the same time the driver on the left yields to the driver on the right. If one arrived clearly first, that driver goes.",
        context:
          "Title 47 adds a set of cases that override this whether or not a sign is present or even visible: a county road yields to a state or federal highway, a private drive yields to either, an unpaved county road yields to a paved one, and a county road that ends at a through county road yields to it.",
        trap: "The right-hand rule feels arbitrary enough that people invent a fairer-sounding one. It is the actual statutory default.",
        excerptKey: "stat-yield-right",
        sourceLabel: "47 O.S. Section 11-401 - Vehicle Approaching or Entering Intersection",
        sourceUrl: stat("82292"),
      },
      {
        id: "ok_s5_21",
        topic: "signs",
        question:
          "You reach a crossbuck at a rural crossing with no lights, no gates and no stop sign. How should you treat it?",
        choices: [
          "As a stop sign - a full stop is required at every crossbuck",
          "As a stop sign at night and a yield sign in daylight",
          "As advisory only, since there is no signal",
          "As a yield sign - slow down, look and listen, and be ready to stop",
        ],
        correctIndex: 3,
        explanation:
          "The manual says to treat a crossbuck the same as a yield sign: slow down and prepare to stop if you see or hear a train approaching, and yield the right of way to it.",
        context:
          "The advance warning sign further back, the round yellow one with the X, tells you to slow and be ready to stop within 15 to 50 feet of the first track, and to creep until you can see down the line if your view is blocked. A sign under the crossbuck tells you how many tracks there are, which matters because a second train can be hidden by the first.",
        trap: "Crossbuck and stop sign both mean take this seriously, but only one of them requires a stop every time. Flashing lights or a gate change the answer entirely.",
        excerptKey: "crossbuck-yield",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Railroad Crossbucks",
        sourceUrl: hb(22),
      },
      {
        id: "ok_s5_22",
        topic: "parking",
        question:
          "How close to the curb does the manual want you when you parallel park on the flat, and when you park on a hill?",
        choices: [
          "12 inches flat, 12 inches on a hill",
          "18 inches flat, 6 inches on a hill",
          "6 inches flat, 18 inches on a hill",
          "18 inches in both cases",
        ],
        correctIndex: 1,
        explanation:
          "Eighteen inches on the flat, and six inches when you are parking on a hill. The hill figure is tighter because the wheel has to be able to reach the curb and brace against it.",
        context:
          "Parallel parking is a scored maneuver on the Oklahoma drive test along with hill parking, backing and the ordinary turns. Unless signs prohibit parking or the curb is painted yellow, you may park parallel to any curb within 18 inches of it.",
        trap: "Both numbers are real and both come from the same chapter, which is why swapping them is so easy. Eighteen inches is the general rule, six is the hill.",
        excerptKey: "parallel-18-inches",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9, Parallel Parking",
        sourceUrl: hb(47),
      },
      {
        id: "ok_s5_23",
        topic: "impairment",
        question:
          "An officer asks a completely sober driver to take a breath test and the driver refuses. What happens?",
        choices: [
          "Automatic revocation of the driving privilege, even without drinking",
          "The officer must get a warrant before anything follows",
          "Nothing, since a sober driver has nothing to prove",
          "A fine only, with no effect on the license",
        ],
        correctIndex: 0,
        explanation:
          "Refusal results in an automatic revocation of your driving privilege even if you have not been drinking. Consent was given the moment you drove, which is what implied consent means.",
        context:
          "The revocation for refusal runs 180 days to 2 years depending on your record. A failed test does the same thing on its own terms: 0.08 or more, or any measurable amount under 21, revokes your license whether or not a court ever convicts you of DUI.",
        trap: "Refusing feels like exercising a right that will be sorted out later. The administrative revocation attaches to the refusal itself.",
        excerptKey: "implied-consent-refusal",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12, Oklahoma Implied Consent Laws",
        sourceUrl: hb(65),
      },
      {
        id: "ok_s5_24",
        topic: "safety",
        question:
          "A deer steps into your lane on a two-lane highway at dusk. What does the manual tell you to do?",
        choices: [
          "Swerve into the oncoming lane if it is clear",
          "Swerve onto the shoulder and brake hard",
          "Accelerate to clear the animal's path",
          "Do not swerve to avoid the animal",
        ],
        correctIndex: 3,
        explanation:
          "Do not swerve. The manual's reasoning is that swerving may cause a more serious crash than hitting the animal would - into oncoming traffic, into a ditch, or into a roll.",
        context:
          "The advice around it is about avoiding the situation. Dawn and dusk are when animals are most active, deer and vehicle crashes peak from October to December, and you should scan the roadside for the reflection of your headlights in their eyes and slow down when you see one standing near the road.",
        trap: "Every instinct says avoid the animal. Braking straight is a survivable outcome, a head-on with the car you swerved into is often not.",
        excerptKey: "animals-do-not-swerve",
        sourceLabel: "Oklahoma Driver Manual - Chapter 11, Animals",
        sourceUrl: hb(61),
      },
      {
        id: "ok_s5_25",
        topic: "rules",
        question:
          "At a red light on a one-way street, wanting to turn LEFT into another one-way street. What does Oklahoma allow?",
        choices: [
          "Nothing - left on red is never permitted",
          "It is allowed only where a sign specifically permits it",
          "It is allowed only between one-way streets in a business district",
          "It is allowed after a complete stop, unless a sign forbids it",
        ],
        correctIndex: 3,
        explanation:
          "After coming to a complete stop you may turn right on red, and you may turn left from a one-way street into a one-way street, unless signs forbid the turn. Then you yield to everything in the intersection, pedestrians and bicycles included.",
        context:
          "Title 47 Section 11-202 states the same permission and adds that to prohibit these turns a municipality has to put up clear signs of a design the Highway Department specifies, used uniformly across the state. The default, in other words, is permission.",
        trap: "Turn on red is filed away as a right-turn rule. The one-way-to-one-way left is the half people forget, and it appears on tests for exactly that reason.",
        excerptKey: "turn-on-red",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Traffic Signals",
        sourceUrl: hb(26),
      },
      {
        id: "ok_s5_26",
        topic: "sharing",
        question:
          "What separation does Oklahoma law require when you overtake a bicycle going the same way?",
        choices: [
          "Not less than 2 feet",
          "Not less than 3 feet",
          "Not less than 4 feet",
          "A full lane change in every case",
        ],
        correctIndex: 1,
        explanation:
          "Not less than 3 feet between the vehicle and the bicycle, held until you are safely past. The manual cites the statute for it, Title 47-11-1208-A.",
        context:
          "The manual also tells you never to pass between a bicyclist and oncoming vehicles on a two-lane road - slow down, let the oncoming traffic clear, then move left and give the rider proper room. If the street is too narrow, you wait.",
        trap: "Three feet is the minimum, not the target, and it has to hold for the whole pass. Squeezing past at speed inside a narrow lane is the manoeuvre the rule exists to stop.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10, Sharing the Road with Bicycles",
        sourceUrl: hb(51),
      },
      {
        id: "ok_s5_27",
        topic: "licensing",
        question:
          "What are Oklahoma's minimum liability insurance limits, as page 72 of the manual prints them?",
        choices: [
          "$10,000 / $20,000 / $10,000",
          "$25,000 / $50,000 / $25,000",
          "$50,000 / $100,000 / $50,000",
          "$30,000 / $60,000 / $25,000",
        ],
        correctIndex: 1,
        explanation:
          "Twenty-five thousand for injury or death of one person, fifty thousand for injury or death of two or more, and twenty-five thousand for property damage. All three limits are per accident.",
        context:
          "You have to show a current security verification form to an officer or a Service Oklahoma representative on request, and to the other driver after a collision. Driving without it risks a fine of up to $250, 30 days in jail and suspension of both your license and your registration.",
        trap: "The manual's own page 16 box misprints the first figure as covering two or more persons, and page 72 has it right. If two pages of a handbook disagree, the one that reads coherently against the statute is the one to trust.",
        excerptKey: "insurance-minimums",
        sourceLabel: "Oklahoma Driver Manual - Chapter 13, Financial Responsibility",
        sourceUrl: hb(72),
      },
      {
        id: "ok_s5_28",
        topic: "emergencies",
        question:
          "A tow truck with amber lights flashing is on the shoulder of a two-lane road with no second lane to move into. What does the Bernardo-Mills Law require?",
        choices: [
          "Nothing, the law applies only to police and ambulances",
          "Stop until the wrecker has finished",
          "Proceed with due caution and reduce speed to a safe speed",
          "Change lanes anyway, even into oncoming traffic",
        ],
        correctIndex: 2,
        explanation:
          "On a road that is not multi-lane in your direction, the duty is to proceed with due caution and reduce your speed to a safe speed. Moving over is only required where there is a lane to move into and it is safe.",
        context:
          "The law covers stationary emergency vehicles, Department of Transportation and Turnpike Authority maintenance vehicles, licensed wreckers with amber, red or blue lights, and any stationary vehicle displaying flashing lights - which includes an ordinary car on its hazards. Breaching it is endangerment of an emergency worker, $1,000 for a first offense and $2,500 for a second.",
        trap: "The name Move Over Law makes changing lanes sound mandatory everywhere. On a two-lane road the requirement is to slow down.",
        excerptKey: "stat-move-over-two-lane",
        sourceLabel: "47 O.S. Section 11-314 - Bernardo-Mills Law",
        sourceUrl: stat("391386"),
      },
      {
        id: "ok_s5_29",
        topic: "speed",
        question:
          "A properly marked school zone on a highway outside any city or town. What speed does state law set unless a sign says otherwise?",
        choices: ["15 mph", "20 mph", "25 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "Twenty-five mph, and it is the lowest figure in the state speed table. It applies to school zones on any highway outside a municipality when the zone is properly marked.",
        context:
          "Inside towns the picture is different, because cities and towns set their own limits and the zones change with them. Where a school zone sign carries its own limit, you reduce to that limit when the yellow light is flashing, and you watch for children and stay ready to stop.",
        trap: "Thirty-five is the state park and wildlife refuge figure from the same table, one line up. School zone is 25.",
        excerptKey: "speed-table",
        sourceLabel: "Oklahoma Driver Manual - Chapter 7, Speed Limits",
        sourceUrl: hb(41),
      },
      {
        id: "ok_s5_30",
        topic: "signals",
        question:
          "You have a green light and are going straight. A pedestrian is still in the crosswalk ahead of you. What applies?",
        choices: [
          "You have the right of way and may proceed",
          "You must yield to pedestrians lawfully in the intersection or crosswalk",
          "You may proceed if you sound the horn first",
          "You may proceed once the pedestrian passes the center line",
        ],
        correctIndex: 1,
        explanation:
          "A green means go, but Title 47 attaches a condition to it: traffic facing a circular green, including vehicles turning, yields to other vehicles and to pedestrians lawfully within the intersection or an adjacent crosswalk.",
        context:
          "The manual adds a general instruction that covers everything else. Even with a green, put safety first and yield the right of way if yielding will prevent a collision, even when the other person is in the wrong. And do not honk, gun the engine or do anything to rush a pedestrian, even when the legal right of way is yours.",
        trap: "Green feels unconditional. Every green in Oklahoma is subject to whoever is lawfully already in the intersection.",
        excerptKey: "stat-green-yield",
        sourceLabel: "47 O.S. Section 11-202 - Traffic-Control Signal Legend",
        sourceUrl: stat("82270"),
      },
      {
        id: "ok_s5_31",
        topic: "rules",
        question:
          "A three-lane road has a center lane bounded by a solid yellow line outside and a dashed yellow line inside on each side. What is it for?",
        choices: [
          "Left turns only, from either direction",
          "Passing slower traffic in either direction",
          "Overflow when the outer lanes are congested",
          "Emergency vehicles only",
        ],
        correctIndex: 0,
        explanation:
          "That marking is the two-way left-turn lane. Drivers from either direction use it for left turns, and you enter it only to make one. The manual says outright that you must not pass in this lane.",
        context:
          "You may stop and wait in it as a staging area when you are turning left onto the roadway from a side street, letting same-direction traffic clear before you merge. What you may not do is travel along it, and you may not travel more than 200 feet in it while preparing for and making your turn.",
        trap: "It looks like a spare lane and it is the widest empty asphalt on the road. Using it to pass is the error the manual explicitly names.",
        excerptKey: "center-turn-lane",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Lane Usage and Maneuvers",
        sourceUrl: hb(32),
      },
      {
        id: "ok_s5_32",
        topic: "parking",
        question:
          "You are leaving your car parked on a residential street. Which set of steps does the manual give?",
        choices: [
          "Set the parking brake, put it in low, reverse or park, turn off the motor, lock the ignition and remove the key",
          "Turn off the motor, leave it in neutral and chock a wheel",
          "Leave it in gear with the brake off so it can be pushed if needed",
          "Turn off the motor and set the brake only if the street slopes",
        ],
        correctIndex: 0,
        explanation:
          "Parking brake, gear into low, reverse or park, motor off, ignition locked, key out. The manual gives them as a fixed sequence rather than a list of options.",
        context:
          "Its reason is that not all collisions are driving errors. An improperly parked car can roll, gather speed, destroy property or kill someone. The manual also suggests locking the car every time, even in your own driveway.",
        trap: "The brake is the part people skip on a level street. The whole sequence is what stops a car that turns out not to be as level as it looked.",
        excerptKey: "parking-leaving-car",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9, Parking",
        sourceUrl: hb(46),
      },
      {
        id: "ok_s5_33",
        topic: "licensing",
        question:
          "An adult of 20 moves to Oklahoma holding an out-of-state learner permit issued more than a year ago. What does Service Oklahoma require?",
        choices: [
          "A fresh Oklahoma permit held for 180 days",
          "A fresh Oklahoma permit held for 30 days",
          "Nothing beyond the drive test - an 18-plus applicant does not need a permit at all",
          "Completion of an approved driver education course first",
        ],
        correctIndex: 2,
        explanation:
          "At 18 and over you do not need a learner permit in order to take the drive test at all. If you choose to hold a permit for practice, you have to hold it 30 days before applying for an unrestricted license.",
        context:
          "That 30 days matches the manual's own Class D table, which lets an 18-plus applicant take the drive test 30 days after a permit is issued, or as early as the next business day if they go straight from the written test to a Class D license. The 180-day hold belongs to the under-18 graduated track.",
        trap: "The 180-day figure is the one everybody has heard, because it is the teen rule. It does not apply to an adult applicant.",
        excerptKey: "permit-18-plus",
        sourceLabel: "Service Oklahoma - Learner Permit",
        sourceUrl: PERMIT,
      },
      {
        id: "ok_s5_34",
        topic: "sharing",
        question:
          "How much following distance does the manual want behind a motorcycle?",
        choices: [
          "At least three seconds",
          "The same one car length per 10 mph used for cars",
          "At least two seconds",
          "Half a car length more than for a car",
        ],
        correctIndex: 0,
        explanation:
          "At least a three-second following distance, so the rider has time to maneuver or to stop in an emergency. A motorcycle can stop shorter than you can, and a rider needs room to move within the lane.",
        context:
          "The chapter's larger point is that two-thirds of car and motorcycle collisions are caused by the car driver who turned in front, not by the rider. A motorcycle's narrow profile makes its speed and distance hard to judge, and at intersections you should wait until the rider's intention is unmistakable before you move into their path.",
        trap: "A motorcycle looks small and easy to stop behind. It is exactly the vehicle that will be closest to you and hardest to see.",
        excerptKey: "motorcycle-following",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10, Sharing the Road with Motorcycles",
        sourceUrl: hb(53),
      },
      {
        id: "ok_s5_35",
        topic: "impairment",
        question:
          "A driver aged 20 has a second zero tolerance offense. How long is the revocation?",
        choices: ["6 months", "9 months", "12 months", "2 years"],
        correctIndex: 2,
        explanation:
          "Twelve months for a second conviction or offense, whether it is DUI, actual physical control, refusal of the test, or any measurable amount of alcohol. The first is six months.",
        context:
          "The fines rise with it. A first zero tolerance conviction runs $100 to $500 or community service or a treatment program, and a second runs $100 to $1,000 on the same alternatives. Under 18, a court has to notify Service Oklahoma of any alcohol or controlled-substance offense at all, and the cancellation can run to age 21.",
        trap: "Doubling six months to twelve is right here, but the pattern does not hold everywhere in Oklahoma law - the adult DUI revocation ladder runs 180 days, then 1 year, then 2 years.",
        excerptKey: "zero-tolerance-second",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12, Zero Tolerance for Drivers under 21",
        sourceUrl: hb(67),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions weighted the way a Service Oklahoma written test samples the manual, with no hints beyond what the real test gives you. Signs, signals and rules of the road carry the most, then right of way, then licensing, impairment and the rest.",
    questions: [
      {
        id: "ok_s6_01",
        topic: "signs",
        question:
          "You approach a red octagon at an intersection where no stop line is painted. Where must you stop?",
        choices: [
          "Wherever you can see cross traffic",
          "Before the pedestrian crosswalk, even if it is not marked",
          "At the edge of the cross street",
          "At least one car length back from the corner",
        ],
        correctIndex: 1,
        explanation:
          "You stop before the pedestrian crosswalk whether or not anyone has painted one, and stay stopped until the way is clear in all directions.",
        context:
          "The octagonal shape and the red carry the meaning on their own, which is why the manual points out that a stop sign obscured by dirt or snow is still a stop sign. Yielding at a stop sign means yielding to pedestrians and to vehicles in or approaching the intersection.",
        trap: "Creeping forward for a better view has already put your car across the space a pedestrian would use.",
        excerptKey: "stop-sign-octagon",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Regulatory Signs",
        sourceUrl: hb(19),
      },
      {
        id: "ok_s6_02",
        topic: "rules",
        question:
          "A single solid yellow line runs down the center of the road on your side. What may you do?",
        choices: [
          "Pass, provided you can see far enough ahead",
          "Pass only vehicles going under 25 mph",
          "Not pass, though you may cross the line to turn left",
          "Not cross the line for any reason at all",
        ],
        correctIndex: 2,
        explanation:
          "Single or double solid yellow lines mean do not pass. You may still cross the line to make a left turn.",
        context:
          "A solid yellow on your left tells you two things: you are on the proper side of the road, and crossing carries a danger from approaching vehicles or from obstacles in the median. Yellow dashes mean passing is permitted when safe, and a solid white line means passing is hazardous rather than prohibited.",
        trap: "The turn exception is what people forget, and it is what makes an absolute never-cross answer wrong.",
        excerptKey: "solid-yellow-no-pass",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Lane Usage and Maneuvers",
        sourceUrl: hb(32),
      },
      {
        id: "ok_s6_03",
        topic: "rightOfWay",
        question:
          "An ambulance comes up behind you with siren and lights while you are in heavy traffic with no shoulder available. What does the manual say?",
        choices: [
          "Stop where you are and let it find its way around",
          "Speed up to clear the intersection ahead",
          "Clear a path for the vehicle",
          "Turn right at the next street regardless of where you were going",
        ],
        correctIndex: 2,
        explanation:
          "The normal duty is to pull to the right edge of the roadway, clear of intersections, and stop until the vehicle has passed. When traffic is heavy enough that you cannot pull over, the manual asks you to clear a path.",
        context:
          "The duty attaches to police cars, fire engines and ambulances sounding a siren or showing flashing warning lights. You do not have to yield to an emergency vehicle running without either. Stopping inside an intersection is the one thing to avoid, because it blocks the route.",
        trap: "Stopping dead in your lane is the panic response and it seals the road. Movement toward the edge, even partial, is what the crew needs.",
        excerptKey: "yield-emergency",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5, You Must Always Yield",
        sourceUrl: hb(29),
      },
      {
        id: "ok_s6_04",
        topic: "signals",
        question: "A green arrow is lit while the circular red is still showing. What does it mean?",
        choices: [
          "You may turn in the direction of the arrow",
          "Wait for the red to clear before moving",
          "Turns are prohibited in that direction",
          "The signal is malfunctioning and should be treated as a four-way stop",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow permits the movement it points to, even with the red still lit. You may only make the turn the arrow indicates unless other signs say otherwise.",
        context:
          "You still enter cautiously and yield to pedestrians in the crosswalk and to vehicles legally already in the intersection. If you are in a turning-only lane you have to wait for the arrow, and if there are turning lanes you have to be in the right one.",
        trap: "The red beside it makes drivers hesitate. The arrow is the specific instruction and it governs that movement.",
        excerptKey: "green-arrow",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Traffic Signals",
        sourceUrl: hb(26),
      },
      {
        id: "ok_s6_05",
        topic: "safety",
        question:
          "What does the manual say about the first few minutes of a rain shower?",
        choices: [
          "The road is at its most slippery as grease and dirt lift off the surface",
          "Traction is unaffected until water pools",
          "Rain improves grip briefly by cooling the tires",
          "It matters only above 45 mph",
        ],
        correctIndex: 0,
        explanation:
          "Roads are likely to be very slick just after rain or drizzle starts, because the first drops loosen built-up grease and dirt and spread a slippery film over the surface.",
        context:
          "That film is why the manual tells you the first few drops are a signal to slow down, not to wait and see. Once the surface is properly wet the concern shifts to hydroplaning, and in a heavy downpour the advice is to slow further or pull off entirely.",
        trap: "Heavy rain feels more dangerous than a light shower. The most treacherous moment is the beginning of the light one.",
        excerptKey: "rain-first-drops",
        sourceLabel: "Oklahoma Driver Manual - Chapter 8, Following",
        sourceUrl: hb(44),
      },
      {
        id: "ok_s6_06",
        topic: "licensing",
        question:
          "How many questions are on the Oklahoma written knowledge test and how many must you get right?",
        choices: [
          "20 questions, 15 correct",
          "25 questions, 20 correct",
          "30 questions, 24 correct",
          "40 questions, 32 correct",
        ],
        correctIndex: 0,
        explanation:
          "Twenty questions and fifteen correct, which is 75 percent, with 60 minutes on the clock.",
        context:
          "The questions come from the Oklahoma Driver Manual and cover traffic laws, safe driving practices and the drug and alcohol laws. Taken online you get two attempts before you must come into a Service Oklahoma location, and a fail means waiting at least a day before retesting.",
        trap: "Neighboring states run longer tests at higher pass marks, so the numbers people quote each other are often somebody else's.",
        excerptKey: "written-test-format",
        sourceLabel: "Service Oklahoma - Written Knowledge Test",
        sourceUrl: WRITTEN,
      },
      {
        id: "ok_s6_07",
        topic: "parking",
        question:
          "Which of these is on the Oklahoma manual's list of places it is illegal to park?",
        choices: [
          "On the roadway side of a vehicle already parked at the curb",
          "Within 10 feet of a residential mailbox",
          "Facing against the direction of traffic on a two-way street",
          "Within 100 feet of a school entrance",
        ],
        correctIndex: 0,
        explanation:
          "Double parking, which the manual defines as parking on the roadway side of a vehicle stopped or parked at the edge or curb of a street, is item 11 on the list.",
        context:
          "The list also covers sidewalks, driveways, intersections, crosswalks, bridges and underpasses, obstructions and excavations that would block traffic, and anywhere official signs prohibit stopping, alongside the numbered distances from hydrants, crosswalks, signals, rails and fire stations.",
        trap: "The other three sound like parking rules and two of them are real offenses somewhere. None of them is on Oklahoma's thirteen-item list.",
        excerptKey: "parking-double-bridge",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9, Unlawful Parking",
        sourceUrl: hb(49),
      },
      {
        id: "ok_s6_08",
        topic: "sharing",
        question:
          "What does the manual say a truck driver blinking the headlights after you pass means?",
        choices: [
          "A signal that you are clear to pull back in front",
          "A warning that you passed too close",
          "A request that you slow down",
          "A warning about police ahead",
        ],
        correctIndex: 0,
        explanation:
          "It is a courtesy signal that you are clear to move back in front of the truck. Even then, wait until you can see the front of the truck in your rearview mirror.",
        context:
          "The etiquette runs both ways. Let the driver know you are passing by blinking your own headlights, especially at night. Complete the pass quickly, do not sit alongside, and do not pass and then slow down, which forces a loaded truck to brake on a downgrade.",
        trap: "A flash of headlights usually reads as a complaint. From a truck after a pass it is the opposite.",
        excerptKey: "truck-passing",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10, Passing a Truck",
        sourceUrl: hb(54),
      },
      {
        id: "ok_s6_09",
        topic: "rules",
        question:
          "Before you change lanes, what does the manual list after signalling your intention?",
        choices: [
          "Look over your shoulder in the direction you will be moving",
          "Accelerate to match the speed of the target lane",
          "Flash your headlights to warn the driver behind",
          "Move halfway across and wait for a gap",
        ],
        correctIndex: 0,
        explanation:
          "Watch for clearance ahead and behind, check the mirrors, signal, then look over your shoulder in the direction you are moving, look behind to both sides again, and check your blind spots.",
        context:
          "Title 47 makes the sequence legal rather than advisory: you may not move from your lane until you have first made sure the movement can be made safely and then given a signal for not less than the last 100 feet traveled. When someone ahead of you signals a lane change, slow down and leave them the space.",
        trap: "Mirrors alone leave a blind spot big enough to hide a car, which is why the shoulder check is a separate step and not an optional one.",
        excerptKey: "changing-lanes",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Changing Lanes",
        sourceUrl: hb(33),
      },
      {
        id: "ok_s6_10",
        topic: "impairment",
        question:
          "What is the penalty range for a first DUI conviction in Oklahoma with a BAC of 0.08 or more?",
        choices: [
          "A fine only, up to $500",
          "Not less than ten days nor more than one year in jail and a fine of up to $1,000",
          "Not less than one year in prison and a fine of up to $2,500",
          "Community service and a treatment program, with no jail",
        ],
        correctIndex: 1,
        explanation:
          "A first offense is a misdemeanor carrying imprisonment of not less than ten days and not more than one year, plus a fine of not more than $1,000. The penalties are jail and a fine, not one or the other.",
        context:
          "A second offense within ten years becomes a felony: not less than one year and up to five, with a fine up to $2,500. Alongside the criminal penalty, Service Oklahoma suspends the driving privilege for 180 days on a first revocation, one year with a prior inside ten years, and two years with two or more.",
        trap: "The one-year-to-five-year figures belong to the second offense. A first offense still carries a ten-day floor.",
        excerptKey: "dui-first-offense",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12, Penalties for DUI",
        sourceUrl: hb(65),
      },
      {
        id: "ok_s6_11",
        topic: "signs",
        question: "What does an orange diamond sign tell you?",
        choices: [
          "A recreation area is ahead",
          "You are nearing or in a work zone",
          "A detour route begins here",
          "The road surface changes ahead",
        ],
        correctIndex: 1,
        explanation:
          "Orange is the work zone color. It tells you that signs, barricades and channeling devices are ahead to route you through safely and to protect the workers and flagpersons.",
        context:
          "Most work zone signs are diamonds but some are rectangles, and flashing arrow panels guide you into the correct lane. You slow to the posted speed in a construction site, and speeding fines double where workers or equipment are present.",
        trap: "Brown is the recreation and cultural color, and yellow is general warning. Orange means people are working in the road.",
        excerptKey: "orange-work-zone",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Construction and Maintenance Signs",
        sourceUrl: hb(23),
      },
      {
        id: "ok_s6_12",
        topic: "speed",
        question:
          "State law sets what maximum on an undivided Oklahoma state highway with no sign posted?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Sixty-five on an undivided state highway. County roads drop to 55, and controlled access highways rise to 75.",
        context:
          "The full table also gives 80 on turnpikes, 35 in state parks and wildlife refuges, and 25 in a properly marked school zone on a highway outside a municipality. Every one of these applies only where no sign says otherwise, and cities and towns set their own limits inside their boundaries.",
        trap: "Fifty-five is the county road figure and it is what people default to for anything rural. State highway is a step up.",
        excerptKey: "speed-table",
        sourceLabel: "Oklahoma Driver Manual - Chapter 7, Speed Limits",
        sourceUrl: hb(41),
      },
      {
        id: "ok_s6_13",
        topic: "rightOfWay",
        question:
          "Traffic backs up and the cars ahead are sitting across the intersection you are about to enter on green. What should you do?",
        choices: [
          "Enter anyway, your light is green",
          "Enter far enough to hold your place",
          "Stop before the crosswalk and wait for the traffic to move",
          "Sound the horn and edge in behind them",
        ],
        correctIndex: 2,
        explanation:
          "If traffic is stopped and blocking an intersection, you stop before reaching the crosswalk and wait for it to move. A green light gives you permission to proceed, not permission to strand yourself in the box.",
        context:
          "More collisions and injuries happen at intersections than anywhere else. The manual's approach is to slow before you enter, look both ways and left again, then keep your speed up until you are clear rather than slowing part way across.",
        trap: "Holding your place feels like it protects your turn. What it does is block the cross street when their light goes green.",
        excerptKey: "dont-block-intersection",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5, Crossing an Intersection",
        sourceUrl: hb(30),
      },
      {
        id: "ok_s6_14",
        topic: "emergencies",
        question:
          "Your front tire blows out at highway speed. What does the manual say about the brakes?",
        choices: [
          "Brake hard and immediately",
          "Take your foot off the gas and apply the brakes cautiously, never suddenly",
          "Do not touch the brakes at all until you have stopped",
          "Pump the brakes rapidly",
        ],
        correctIndex: 1,
        explanation:
          "Come off the gas and apply the brakes cautiously. The one thing the manual capitalizes is never to brake suddenly, because a hard stop with a failed tire pulls the car sideways.",
        context:
          "The emergency braking advice varies by surface. On ice, snow, sleet, gravel, sand or any other loose surface you tap the brakes lightly about a second apart, unless the car has antilock brakes, which must never be tapped. If you drop a wheel off the pavement, hold the wheel firmly, brake lightly and steer back on when it is safe.",
        trap: "A blowout feels like an emergency that demands the brakes. The steering has to be recovered first.",
        excerptKey: "blowout-braking",
        sourceLabel: "Oklahoma Driver Manual - Chapter 8, Braking Under Emergency Conditions",
        sourceUrl: hb(43),
      },
      {
        id: "ok_s6_15",
        topic: "signals",
        question: "A pedestrian signal is showing a flashing Don't Walk. What does it mean?",
        choices: [
          "Cross quickly, there is still time",
          "Do not leave the curb, but continue if you are already in the intersection",
          "The signal is about to change to Walk",
          "Cross only at the far crosswalk",
        ],
        correctIndex: 1,
        explanation:
          "Flashing means do not step off the curb, but keep going if you are already crossing. It is a clearance interval for the people already in the road, not an invitation to start.",
        context:
          "Walk and Don't Walk signals exist only to direct people crossing on foot or in wheelchairs, and where they are present pedestrians follow them instead of the traffic signal. A steady Don't Walk means do not leave the curb at all.",
        trap: "A flashing signal reads as a countdown you can beat. It is aimed at the people who are already committed.",
        excerptKey: "ped-signal-flashing",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Pedestrian Signals",
        sourceUrl: hb(27),
      },
      {
        id: "ok_s6_16",
        topic: "rules",
        question:
          "You are meeting a car at an intersection and both of you are turning left. How do you pass each other?",
        choices: [
          "Each turns to the left of the other, leaving from and entering the left lane",
          "Each turns in front of the other, nose to nose",
          "The driver arriving second waits for the first to finish",
          "The driver on the wider street goes first",
        ],
        correctIndex: 0,
        explanation:
          "Each vehicle turns to the left of the other. You leave from the left lane and enter the left lane of the street you are turning into.",
        context:
          "The manual's five steps for a left turn have you move over close to the centerline well ahead, signal and slow at least 100 feet from the corner, pick the gear and look both ways, enter the street just right of center, and then move over to the right after the turn. Do not turn the wheels left while you wait, because a rear-end hit would push you into oncoming traffic.",
        trap: "Turning in front of each other seems shorter and it is what impatient drivers do. It puts both cars into the same piece of pavement at the same time.",
        excerptKey: "two-left-turns",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Left Turns - Two Vehicles",
        sourceUrl: hb(37),
      },
      {
        id: "ok_s6_17",
        topic: "licensing",
        question:
          "What restriction does code 9 place on an Oklahoma license?",
        choices: [
          "Daylight driving only",
          "Corrective lenses required",
          "Accompanied by a licensed driver 21 or older in the front seat",
          "Automatic transmission only",
        ],
        correctIndex: 2,
        explanation:
          "Code 9 is the learner restriction: accompanied by a licensed driver 21 years of age or older in the front seat. It comes off when you pass the driving test.",
        context:
          "The other codes on the back of the card are B for corrective lenses, F for a left outside mirror, 4 for automatic transmission, 5 for turn indicators and power steering, 6 for food within reach, 7 for artificial limbs, 8 for detailed conditions, 0 for motorcycle only, and T for the graduated licence hours and passenger limits.",
        trap: "Corrective lenses is the restriction everybody has heard of, and it is B, not 9.",
        excerptKey: "restriction-9",
        sourceLabel: "Oklahoma Driver Manual - Chapter 2, Restriction Codes",
        sourceUrl: hb(14),
      },
      {
        id: "ok_s6_18",
        topic: "safety",
        question:
          "Which following rule does the Oklahoma manual give alongside the three-second count?",
        choices: [
          "One car length for every 10 miles per hour of speed",
          "Two car lengths regardless of speed",
          "Half a car length for every 5 miles per hour",
          "Three car lengths at any speed under 45 mph",
        ],
        correctIndex: 0,
        explanation:
          "One car length for every 10 mph of speed, offered as an alternative to the three-second rule. At 60 mph that is six car lengths.",
        context:
          "In bad weather or poor road conditions you stretch the count to four seconds. The manual also has you increase the gap on slick roads, behind large vehicles, behind motorcycles, and at night or in fog. A caravan or motorcade outside a business or residential area leaves at least 200 feet between vehicles.",
        trap: "Car lengths are hard to judge at speed, which is why the second count exists. Both are in the manual and both can be asked.",
        excerptKey: "following-three-second",
        sourceLabel: "Oklahoma Driver Manual - Chapter 8, Following",
        sourceUrl: hb(44),
      },
      {
        id: "ok_s6_19",
        topic: "signs",
        question:
          "A yellow diagonal-striped panel has stripes sloping downward to the right. What is it telling you?",
        choices: [
          "Bear to the right",
          "Bear to the left",
          "The road ends ahead",
          "A merge is coming from the right",
        ],
        correctIndex: 0,
        explanation:
          "Stripes sloping downward to the right mean bear right, and stripes sloping down to the left mean bear left. The diagonal stripes on a warning sign or barricade show which way traffic is meant to pass.",
        context:
          "These panels are usually attached to an obstruction or to the end rails of a narrow bridge. The related devices in the same section are reflectors that mark culverts, center piers and short changes in road alignment.",
        trap: "Reading the slope backwards puts you into the object the sign is protecting, which is why the manual states both directions explicitly.",
        excerptKey: "diagonal-stripes",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Warning Signs",
        sourceUrl: hb(22),
      },
      {
        id: "ok_s6_20",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light and oncoming traffic is coming. What does Title 47 require?",
        choices: [
          "Turn as soon as the light goes green, before oncoming traffic arrives",
          "Yield to any approaching vehicle close enough to be an immediate hazard",
          "Yield only to vehicles going straight, not to those turning",
          "Wait for a green arrow before turning at all",
        ],
        correctIndex: 1,
        explanation:
          "A driver intending to turn left yields to any vehicle approaching from the opposite direction that is close enough, when the turn begins, to constitute an immediate hazard.",
        context:
          "The manual puts the same rule as a driving instruction: yield to all oncoming traffic, slow down and stop if you have to, and go only when there is enough clear distance to complete the turn without interfering with anyone. Watch behind you for cars trying to pass while you wait.",
        trap: "A green light is not a protected turn. Only a green arrow gives you the intersection to yourself.",
        excerptKey: "stat-left-turn-yield",
        sourceLabel: "47 O.S. Section 11-402 - Vehicle Turning Left",
        sourceUrl: stat("82293"),
      },
      {
        id: "ok_s6_21",
        topic: "rules",
        question:
          "On a two-lane road you want to pass. How much clear roadway does the manual want you to check for first?",
        choices: [
          "At least 100 feet",
          "At least 150 feet",
          "At least 200 feet",
          "At least 500 feet",
        ],
        correctIndex: 2,
        explanation:
          "At least 200 feet of clear roadway with no no-passing zone in it before you move left. Then check that nobody is passing you at the same moment.",
        context:
          "The manual's six passing steps run from that check through signalling, moving left, completing the pass, and not returning to the right lane until you can see the passed car in your rearview mirror. You may not exceed the speed limit to complete a pass, and you must not pass on hills or curves even where the road is unmarked.",
        trap: "Two hundred feet is the clear-roadway check for starting a pass. One hundred feet is a different rule - how close to an intersection or obstructed view you may not be driving on the left.",
        excerptKey: "passing-200-feet",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Passing on the Left",
        sourceUrl: hb(35),
      },
      {
        id: "ok_s6_22",
        topic: "parking",
        question:
          "You are backing out of an angle parking space between two vans. What does the manual add to looking both ways?",
        choices: [
          "Reverse quickly to shorten your exposure",
          "Tap the horn to warn pedestrians nearby",
          "Turn on the hazard lights",
          "Reverse with the door ajar for a better view",
        ],
        correctIndex: 1,
        explanation:
          "Tap the horn to warn any pedestrians nearby. It is part of a sequence of moving back slowly, double-checking because it is hard to see, and stopping to look again once you can see past the parked cars.",
        context:
          "A truck or van beside you blocks the view entirely, which is why the manual calls out that case specifically. In a supermarket lot it also has you check for carts before you move.",
        trap: "The horn is normally a last resort, but here it is doing a job nothing else does - telling someone you cannot see that you are coming.",
        excerptKey: "angle-parking-horn",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9, Angle Parking",
        sourceUrl: hb(46),
      },
      {
        id: "ok_s6_23",
        topic: "impairment",
        question:
          "What does the manual say an alcohol concentration of more than 0.05 amounts to in Oklahoma?",
        choices: [
          "Nothing legally, since the limit is 0.08",
          "An automatic license suspension",
          "Relevant evidence that the driver's ability to drive was impaired",
          "A civil penalty only",
        ],
        correctIndex: 2,
        explanation:
          "More than 0.05 is relevant evidence that the driver's ability to drive was impaired. Between 0.05 and 0.08 there is also a separate impaired driving offense carrying a $100 to $500 fine and up to six months.",
        context:
          "The manual's larger point is that a number is not the issue. Impairment of judgment and skill begins well below the legal limit, and the arresting officer's observations of behavior, appearance and manner are evidence that can support a conviction with no BAC test at all.",
        trap: "The 0.08 threshold is treated as a bright line under which nothing happens. Oklahoma has a whole tier below it.",
        excerptKey: "bac-005-evidence",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12, Criminal Evidence and Penalties",
        sourceUrl: hb(65),
      },
      {
        id: "ok_s6_24",
        topic: "sharing",
        question:
          "What does the manual say about pedestrians in a crosswalk that has never been painted?",
        choices: [
          "They have the right of way over most vehicles, marked or not",
          "They have no right of way outside a marked crosswalk",
          "They have the right of way only at signalized intersections",
          "They have the right of way only in a school zone",
        ],
        correctIndex: 0,
        explanation:
          "Pedestrians in a crosswalk have the right of way over most vehicles whether the crosswalk is marked or not. A crosswalk exists at an intersection regardless of paint.",
        context:
          "Pedestrians in Oklahoma's definition include people walking, skateboarders, in-line and roller skaters, and people using wheelchairs, walkers or tricycles. You also yield to anyone on the sidewalk when you enter or leave a driveway or alley, and you take extra care in school zones and where children are playing.",
        trap: "Paint is what most drivers look for. The unmarked crossing at an ordinary corner carries the same duty.",
        excerptKey: "ped-crosswalk-right",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10, Sharing the Road with Pedestrians",
        sourceUrl: hb(50),
      },
      {
        id: "ok_s6_25",
        topic: "signals",
        question: "A flashing red light is showing at an intersection. What does it mean?",
        choices: [
          "Proceed with caution without stopping",
          "The signal has failed and you have the right of way",
          "Stop, then go when it is safe - the same as a stop sign",
          "Stop and remain stopped until it changes",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red means the same thing as a stop sign. You stop, then go when it is safe to cross the intersection.",
        context:
          "The manual notes that flashing reds are used at dangerous intersections where the crossing traffic may or may not be stopping, so you cannot assume the other direction has the same instruction. The cross street may be looking at a flashing yellow.",
        trap: "It is not a red light waiting to turn green, so sitting there waiting for a change is the wrong response.",
        excerptKey: "flashing-red-light",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4, Traffic Signals",
        sourceUrl: hb(26),
      },
      {
        id: "ok_s6_26",
        topic: "licensing",
        question:
          "Who has to wear a seat belt under Oklahoma's mandatory safety requirement?",
        choices: [
          "Every occupant of the vehicle",
          "Every driver and front-seat passenger",
          "The driver only",
          "Everyone under 18, in any seat",
        ],
        correctIndex: 1,
        explanation:
          "Every driver and front-seat passenger must wear a properly adjusted and fastened safety seat belt system, and it has to be factory-installed and meet federal safety standards.",
        context:
          "The child rules run separately and are stricter. A child under 8 must be in a child passenger restraint system, rear-facing until age 2 or until they outgrow the manufacturer's limits, and a child at least 4 but under 8 who is not taller than 4 feet 9 inches must be in a restraint system or a seat belt.",
        trap: "The belt law and the child restraint law get merged in people's heads. The belt requirement in the manual names the driver and front-seat passenger.",
        excerptKey: "seat-belt-front",
        sourceLabel: "Oklahoma Driver Manual - Chapter 3, Mandatory Safety Requirements",
        sourceUrl: hb(17),
      },
      {
        id: "ok_s6_27",
        topic: "emergencies",
        question:
          "You have a breakdown on a turnpike. Where does the manual want the car?",
        choices: [
          "In the left lane with the hazards on, so you are visible",
          "Half on the shoulder and half in the right lane",
          "In the median where the ground is soft",
          "Completely off onto the extreme right shoulder, away from moving traffic",
        ],
        correctIndex: 3,
        explanation:
          "Signal, then pull off to the extreme right shoulder away from moving traffic where it is safe, and turn on the emergency flashers.",
        context:
          "Once you are out of the car, never walk near the roadway and keep children away from the traffic. The same instinct applies on ordinary roads: where parking is permitted, drive completely off the pavement or the main traveled part of the road, and if the car breaks down move it entirely off the highway.",
        trap: "Leaving part of the car in a lane so it can be seen puts a stationary obstacle in a 75 mph lane. The flashers are what make you visible.",
        excerptKey: "expressway-breakdown",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Expressway Driving",
        sourceUrl: hb(34),
      },
      {
        id: "ok_s6_28",
        topic: "safety",
        question:
          "What is the manual's arm signal for slowing down or stopping?",
        choices: [
          "Arm and hand pointed down with the palm to the rear",
          "Arm and hand extended straight out",
          "Arm and hand pointed upward",
          "Arm waved back and forth",
        ],
        correctIndex: 0,
        explanation:
          "Arm and hand pointed down with the palm facing back. Straight out is a left turn, and pointed upward is a right turn.",
        context:
          "Arm signals are still legally usable in Oklahoma and are worth knowing for a failed indicator or a bicycle. Extend your arm well out of the window so the signal is unmistakable, and bring it back in during the actual turn so both hands are on the wheel.",
        trap: "The upward and downward signals are easy to reverse. Upward is the right turn, mimicking the direction the turn takes.",
        excerptKey: "arm-signals",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Arm Signals",
        sourceUrl: hb(36),
      },
      {
        id: "ok_s6_29",
        topic: "rules",
        question:
          "You are turning right from a one-way street onto another street. Which lane do you turn from?",
        choices: [
          "Any lane, as long as you signal",
          "The center lane",
          "The lane nearest the curb",
          "The left lane, to give yourself room",
        ],
        correctIndex: 2,
        explanation:
          "On one-way or divided streets you always turn from the lane nearest the curb, which for a right turn is the right-hand lane.",
        context:
          "The same rule sends a left turn on a one-way street to the far left lane. Driving straight you may use any lane, but the extreme right and left lanes should be left free for turning, and you should not weave between lanes.",
        trap: "Swinging wide to set up the turn is the habit the manual warns against, and on a one-way street it means turning from the wrong lane entirely.",
        excerptKey: "one-way-turns",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6, Turning on One-Way Streets",
        sourceUrl: hb(38),
      },
      {
        id: "ok_s6_30",
        topic: "licensing",
        question:
          "How long must an Oklahoma teenager hold a learner permit before taking the drive test for an intermediate license?",
        choices: ["30 days", "90 days", "180 days", "One year"],
        correctIndex: 2,
        explanation:
          "One hundred and eighty days. With driver education completed you can then test at 16, and without it you wait until 16 and a half.",
        context:
          "The rest of the checklist is at least 50 hours of behind-the-wheel practice including 10 at night with a licensed driver 21 or older who has held a license two years, no traffic convictions in the preceding 180 days, and the Work Zone Safe course certificate if you are under 18.",
        trap: "The manual's own Table 2 says a permit for at least 6 months while Table 1 and the Service Oklahoma page both say 180 days. The 180-day figure satisfies every reading.",
        excerptKey: "intermediate-eligibility",
        sourceLabel: "Service Oklahoma - Intermediate License",
        sourceUrl: INTERMEDIATE,
      },
    ],
  },
];
