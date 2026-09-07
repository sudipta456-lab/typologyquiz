import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Set 5 is built from what Alaska learners say the DMV actually
// asks, cross-checked against the manual and Alaska Statutes Title 28 before
// any of it became a question - see docs/driving/research/alaska.md for the
// threads and the claims taken from each. Nothing here is copied from anyone's
// memory of a real exam item; the forums were used only to learn which RULES
// get tested, and the questions were then written from the sources.
const HB = "https://dmv.alaska.gov/media/t5ef5vi2/dlman.pdf";
const hb = (page: number) => `${HB}#page=${page}`;
const AS28 =
  "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=28.35.010&secEnd=28.35.200";

export const alaskaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions spread over every chapter of the Alaska Driver Manual, including the corners people skip: required equipment, work zones, night driving, wildlife, and the paperwork that follows a crash.",
    questions: [
      {
        id: "ak_s4_01",
        topic: "signs",
        question: "What do white-on-blue signs mark?",
        choices: [
          "Route numbers and destinations",
          "Regulations you must obey",
          "Services such as gas, food, lodging and rest areas",
          "Construction and maintenance zones",
        ],
        correctIndex: 2,
        explanation:
          "Blue is the service family. Gas, phone, food, lodging, rest areas, campgrounds and litter barrels are all marked white on blue.",
        context:
          "Guide signs, which give destinations, route names and mileage, are white on green. Getting the two families apart matters on a long Alaska highway drive, where the next fuel may be a great deal further than the next place name.",
        trap:
          "Blue is also used for disabled parking spaces, which is a regulatory use of the color rather than a service one. The white-on-blue rectangle beside a highway is the service sign the manual describes.",
        excerptKey: "sign-service",
        sourceLabel: "Alaska Driver Manual - Service Sign",
        sourceUrl: hb(44),
      },
      {
        id: "ak_s4_02",
        topic: "safety",
        question:
          "Your vehicle's foot brake must be able to stop a passenger car within what distance at 20 mph?",
        choices: [
          "15 feet",
          "25 feet",
          "40 feet",
          "60 feet",
        ],
        correctIndex: 1,
        explanation:
          "Twenty-five feet at 20 mph is the required-equipment standard for the foot brake. The emergency or parking brake has a different test: it must hold the vehicle stationary on any grade.",
        context:
          "The equipment list is checked before your driving test, and the manual warns that the test may be refused or delayed until mechanical defects are corrected. It covers headlights, two working taillights, two brake lights, turn signals, a plate light, a windshield and wipers, safety glass, mirrors and mud flaps.",
        trap:
          "This is a stopping-distance requirement for the brakes, not a following distance or a total stopping distance including reaction time.",
        excerptKey: "equipment-foot-brake",
        sourceLabel: "Alaska Driver Manual - Required Equipment",
        sourceUrl: hb(80),
      },
      {
        id: "ak_s4_03",
        topic: "impairment",
        question:
          "An officer stops you and asks for a sample on a portable breath testing instrument at the roadside. What is refusing that test?",
        choices: [
          "An infraction",
          "Not an offense at all",
          "Automatic grounds for a 90-day revocation",
          "A class A misdemeanor",
        ],
        correctIndex: 0,
        explanation:
          "Refusal to submit to preliminary breath testing is an infraction. That is a lesser thing than refusing the evidentiary chemical test after a lawful arrest, which brings a criminal Refusal charge and a revocation.",
        context:
          "The preliminary test can be required where you have been in a crash or committed a moving violation and the officer has probable cause to believe your ability to drive is impaired by alcohol. It is separate from the post-arrest test that implied consent covers.",
        trap:
          "The two refusals are commonly confused. Roadside preliminary refusal is an infraction; refusing the chemical test after arrest is a crime with a separate revocation attached.",
        excerptKey: "preliminary-breath-test",
        sourceLabel: "Alaska Driver Manual - Implied Consent",
        sourceUrl: hb(18),
      },
      {
        id: "ak_s4_04",
        topic: "speed",
        question:
          "What does the manual say about driving well below the flow of traffic?",
        choices: [
          "It is always safer than driving at the limit",
          "A driver may not drive so slowly as to hold back or block the normal and reasonable flow of traffic",
          "It is permitted on any road with more than one lane",
          "It is only an offense on a freeway",
        ],
        correctIndex: 1,
        explanation:
          "The Speed Limitation Law includes a floor as well as a ceiling: a driver may not drive at such slow speed as to hold back or block the normal and reasonable flow of traffic.",
        context:
          "On multi-lane highways the manual asks slower drivers to use the right, outside lane except when passing. On a two-lane road outside an urban area, five vehicles stacked behind you creates a legal duty to pull over at the first safe opportunity.",
        trap:
          "Slow is not automatically safe. The hazard is the speed difference between vehicles, which is why the manual treats blocking traffic as an offense in its own right.",
        excerptKey: "slow-speed",
        sourceLabel: "Alaska Driver Manual - Speed Limitation Law",
        sourceUrl: hb(34),
      },
      {
        id: "ak_s4_05",
        topic: "rules",
        question:
          "You are making a three-point turn on a narrow street. What is the first step?",
        choices: [
          "Check the mirror and turn left across the road",
          "Signal left and pull to the center of the road",
          "Signal right, pull over to the far right and stop",
          "Reverse into the nearest driveway",
        ],
        correctIndex: 2,
        explanation:
          "The sequence starts on the right: signal your intention to turn right, pull over to the far right and stop. Only then do you signal left and, if traffic is clear, cross the street until the vehicle points at the opposite curb.",
        context:
          "From there you check for traffic again, turn the wheels hard right, back to the opposite side of the street, stop, check once more, and drive forward to finish. You yield to approaching traffic from both directions, including cyclists and pedestrians, throughout.",
        trap:
          "The manual permits the maneuver \"unless prohibited\". In the city it also says the safest way to turn around is simply to drive around the block, and to watch for no U-turn signs.",
        excerptKey: "three-point-turn",
        sourceLabel: "Alaska Driver Manual - Three Point Turn",
        sourceUrl: hb(37),
      },
      {
        id: "ak_s4_06",
        topic: "signals",
        question:
          "What does the manual say a green ball permits you to do?",
        choices: [
          "Turn left with the right of way over oncoming traffic",
          "Enter the intersection and wait for a gap",
          "Proceed without yielding to anyone",
          "Go if the intersection is clear, and make any legal maneuver not prohibited by a traffic control device",
        ],
        correctIndex: 3,
        explanation:
          "Go if the intersection is clear, and make any legal maneuver not specifically prohibited by a traffic control device. The permission is conditional on the intersection being clear.",
        context:
          "Two yields ride with the green: to pedestrians and vehicles still in the intersection or entering it with the right of way, and to oncoming traffic going straight if you are turning left. A No turn on red or a left-turn-only arrow can override what the green ball otherwise allows.",
        trap:
          "\"Enter the intersection and wait\" is the standard advice for an unprotected left turn, and it is not what the green ball itself grants. Blocking the box on a green you cannot clear is the failure the wording guards against.",
        excerptKey: "green-ball",
        sourceLabel: "Alaska Driver Manual - Traffic Signals, Green Ball",
        sourceUrl: hb(55),
      },
      {
        id: "ak_s4_07",
        topic: "sharing",
        question:
          "The manual gives pedestrian survival rates at different collision speeds. At what speed do about 90 percent of pedestrians survive being struck?",
        choices: [
          "62 mph",
          "50 mph",
          "25 mph",
          "12 mph",
        ],
        correctIndex: 2,
        explanation:
          "About 90 percent survive at a collision speed of 25 mph. At 12 mph nearly all survive; at 50 mph fewer than half do; at 62 mph only 10 percent do.",
        context:
          "The manual uses these figures to explain why vulnerable road users - people walking and biking, highway workers on foot, people using mobility devices - are the reason speed limits are low where people are present.",
        trap:
          "The curve is not gradual. The jump between 25 and 50 mph turns a survivable collision into a mostly fatal one, which is what makes a 20 or 25 mph zone worth obeying.",
        excerptKey: "pedestrian-survival-figures",
        sourceLabel: "Alaska Driver Manual - Vulnerable Road Users",
        sourceUrl: hb(48),
      },
      {
        id: "ak_s4_08",
        topic: "licensing",
        question:
          "Who may supervise a learner driving on an Alaska instruction permit?",
        choices: [
          "Any licensed driver over 18",
          "A licensed driver at least 21 with at least one year of experience in that class of vehicle, seated beside you",
          "A parent or guardian only",
          "Any licensed driver, from any seat in the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "The supervisor must be at least 21 and have at least one year of driving experience for the same type or class of vehicle you are driving, and for a passenger vehicle they must occupy the seat beside you.",
        context:
          "For a motorcycle or motor scooter the arrangement is different: you must be within visual sight and under the immediate supervision of the licensed driver. AS 28.15.051 adds that the supervisor must be capable of exercising control over the vehicle.",
        trap:
          "Eighteen is not enough, and neither is a license held for a few months. Both the age and the year of experience are conditions.",
        excerptKey: "permit-supervisor",
        sourceLabel: "Alaska Driver Manual - Non-Commercial Instruction Permit",
        sourceUrl: hb(8),
      },
      {
        id: "ak_s4_09",
        topic: "safety",
        question:
          "What does the manual identify as the greatest single cause of traffic crashes?",
        choices: [
          "Poor road design",
          "Bad weather",
          "Mechanical failure",
          "The driver",
        ],
        correctIndex: 3,
        explanation:
          "The manual says it plainly: the driver is the greatest singular cause of traffic crashes. It backs the claim with the observation that more fatal crashes happen in daylight, on normal surfaces, in clear weather, with the vehicle in good mechanical condition, than in any other combination of conditions.",
        context:
          "That framing runs through the Control of Vehicle chapter. You must control yourself before you can control a vehicle, and insufficient sleep, emotion and distraction are all named as things that impair that control.",
        trap:
          "The instinctive answers are ice, darkness and mechanical failure. The manual's own statistics point the other way.",
        excerptKey: "fatal-crashes-daylight",
        sourceLabel: "Alaska Driver Manual - Control of Vehicle",
        sourceUrl: hb(30),
      },
      {
        id: "ak_s4_10",
        topic: "parking",
        question:
          "You are leaving a parallel parking space. Who carries the chief responsibility for avoiding a collision?",
        choices: [
          "Both equally",
          "Whichever driver has the better view",
          "The driver approaching in the traffic lane",
          "The driver leaving the parking space",
        ],
        correctIndex: 3,
        explanation:
          "The manual assigns it: the chief responsibility for avoiding a collision lies with the driver who is leaving a parking space. You must look, signal and yield the right of way when moving out.",
        context:
          "The manual adds a second warning for residential streets - exercise extraordinary caution when backing up, because children may be behind and between parked vehicles.",
        trap:
          "A signal does not create a right of way. Signaling tells other drivers your intention; yielding is still your duty.",
        excerptKey: "leaving-parking-space",
        sourceLabel: "Alaska Driver Manual - Leaving Parking Space",
        sourceUrl: hb(75),
      },
      {
        id: "ak_s4_11",
        topic: "rightOfWay",
        question:
          "Approaching an uncontrolled intersection from the right, what does the manual require of you?",
        choices: [
          "Slow down and have the vehicle under control anyway",
          "Sound the horn to establish priority",
          "Stop before entering",
          "Nothing; you have the right of way",
        ],
        correctIndex: 0,
        explanation:
          "The manual is explicit that approaching from the right does not excuse you from slowing down and having your vehicle under control. Priority is not a license to drive through at speed.",
        context:
          "It goes further: you have the right of way only when the other driver gives it to you, and only if another vehicle is not already within the intersection. Two laws govern an uncontrolled intersection - control on the approach, then the left yields to the right.",
        trap:
          "Believing the right-hand rule is a guarantee is the mistake. It settles who should yield, not who will.",
        excerptKey: "uncontrolled-slow-down",
        sourceLabel: "Alaska Driver Manual - Uncontrolled Intersections",
        sourceUrl: hb(38),
      },
      {
        id: "ak_s4_12",
        topic: "emergencies",
        question:
          "Your vehicle breaks down on a highway at night and cannot be moved off the traveled portion. What does the manual tell you to do?",
        choices: [
          "Leave the headlights on high beam",
          "Turn on parking lights or four-way flashers, set out flares or warning triangles, and raise the hood",
          "Stand behind the vehicle to warn traffic",
          "Leave the vehicle and walk for help immediately",
        ],
        correctIndex: 1,
        explanation:
          "Park all four wheels off the traveled portion if you can. If you cannot, turn on the parking lights or four-way flashers at night, set out flares or warning triangles if you have them, and raise the hood to warn other motorists.",
        context:
          "The manual also suggests tying a white cloth or handkerchief to the left door handle or radio antenna, and it lists flares, a flashlight and an emergency kit with a first aid kit, extra clothing, a blanket, sand, a shovel and food among suggested safety equipment for Alaska driving.",
        trap:
          "Standing behind a disabled vehicle at night on a highway puts you in the place most likely to be struck. Warn traffic with lights and markers, not with your body.",
        excerptKey: "disabled-flares",
        sourceLabel: "Alaska Driver Manual - Emergencies, Disabled Vehicle",
        sourceUrl: hb(78),
      },
      {
        id: "ak_s4_13",
        topic: "signs",
        question:
          "You pass a black-on-orange sign showing a symbol and the words 500 FEET. What is it telling you?",
        choices: [
          "A rest area is 500 feet ahead",
          "The speed limit changes in 500 feet",
          "A construction area begins 500 feet ahead, so adjust your driving",
          "The road is closed 500 feet ahead",
        ],
        correctIndex: 2,
        explanation:
          "Orange means construction and maintenance, and the distance plate tells you how far ahead the work zone starts. The instruction is to adjust your driving for the construction area 500 feet ahead.",
        context:
          "Inside a work zone, barricades, vertical panels, cones, tubes and drums channel traffic, often with flashing or steady lights at night, and large flashing arrow panels move you into the lanes still open. A flag person's signal overrides both signs and signals.",
        trap:
          "Orange is never a rest-area or a road-closure color on its own. Road closed and detour signs are also orange, but they say so.",
        excerptKey: "sign-construction-500",
        sourceLabel: "Alaska Driver Manual - Signs",
        sourceUrl: hb(46),
      },
      {
        id: "ak_s4_14",
        topic: "impairment",
        question:
          "How long does the manual say it takes, on average, to cancel the effects of one drink?",
        choices: [
          "One hour",
          "Two hours",
          "20 minutes",
          "30 minutes",
        ],
        correctIndex: 0,
        explanation:
          "About one hour per drink. The manual works the arithmetic forward: four drinks take about four hours to clear.",
        context:
          "It pairs the figure with a warning that the effect varies with food eaten, medication taken, mental state, degree of fatigue and the strength of the drinks, which is why it ends the section by saying the best policy is not to drive at all after drinking.",
        trap:
          "The hour is an average, not a guarantee. Treating it as a countdown to safety is the error the surrounding paragraph is written against.",
        excerptKey: "alcohol-one-hour",
        sourceLabel: "Alaska Driver Manual - Know Your Limits",
        sourceUrl: hb(22),
      },
      {
        id: "ak_s4_15",
        topic: "safety",
        question:
          "What does the manual tell you to do when you first notice you are getting drowsy at the wheel?",
        choices: [
          "Treat it seriously: drowsiness is the first step in falling asleep",
          "Drink coffee and continue",
          "Slow down by 10 mph and carry on",
          "Open a window and turn up the radio",
        ],
        correctIndex: 0,
        explanation:
          "The manual's heading is Quit Driving When Drowsy, and its first line is that drowsiness is the first step in falling asleep. It is a stopping signal rather than a discomfort to manage.",
        context:
          "The practical advice that follows is about staying alert on a long drive: do not stare, move your eyes side to side and change focus from near to far, keep the interior cool, and take a break out of the vehicle every 100 miles. The closing chapter adds that tired drivers can be as dangerous as drunk drivers.",
        trap:
          "Coffee, air and loud music are the standard folk remedies, and they are the same list the manual rejects for alcohol. Neither wakes you up for long.",
        excerptKey: "drowsy-first-step",
        sourceLabel: "Alaska Driver Manual - Quit Driving When Drowsy",
        sourceUrl: hb(68),
      },
      {
        id: "ak_s4_16",
        topic: "rules",
        question:
          "Is it lawful to drive on the shoulder of an Alaska roadway?",
        choices: [
          "Yes, to let a faster vehicle pass",
          "No, it is illegal to drive on the shoulder",
          "Yes, where the shoulder is paved",
          "Yes, below 25 mph",
        ],
        correctIndex: 1,
        explanation:
          "The pavement markings section states it flatly: it is illegal to drive on the shoulder of roadways. Passing on the right shoulder appears separately on the Do Not Pass list.",
        context:
          "A solid white line marks the outside edge of the pavement or the edge of the shoulder, and the manual's general instruction is to drive within a lane and not move from it until it is safe to do so.",
        trap:
          "Moving onto the shoulder to be courteous to a faster driver is a common Alaska habit on two-lane highways, and it is not what the law provides for. The lawful response to a queue behind you is to pull off and stop.",
        excerptKey: "markings-no-shoulder",
        sourceLabel: "Alaska Driver Manual - Pavement Markings",
        sourceUrl: hb(59),
      },
      {
        id: "ak_s4_17",
        topic: "signals",
        question:
          "What is the difference between a two-way left turn arrow and a one-way left turn arrow?",
        choices: [
          "The two-way version operates only at peak hours",
          "One is for buses and the other for cars",
          "With the two-way version, opposing traffic may also use the lane for left turns",
          "The one-way version allows U-turns",
        ],
        correctIndex: 2,
        explanation:
          "In a two-way left turn lane, opposing traffic may use the same lane for its own left turns, so you enter with caution. In a one-way left turn only lane, opposing traffic is not permitted to use it.",
        context:
          "Either way you yield to oncoming traffic and pedestrians while making the turn. The shared center lane is marked by special signs and pavement arrows, and it may not be used as a driving, accelerating or passing lane.",
        trap:
          "The shared lane feels like a safe refuge and is not. Somebody coming the other way may be sitting in it, or entering it, at the same moment.",
        excerptKey: "two-way-left-turn-arrows",
        sourceLabel: "Alaska Driver Manual - Two-Way Left Turn Arrows",
        sourceUrl: hb(58),
      },
      {
        id: "ak_s4_18",
        topic: "speed",
        question:
          "What is the unposted maximum in a business district in Alaska?",
        choices: [
          "15 mph",
          "20 mph",
          "25 mph",
          "30 mph",
        ],
        correctIndex: 1,
        explanation:
          "Twenty miles an hour, the same figure as a school zone. Alaska's business-district default is lower than most states use.",
        context:
          "Ranked, the defaults run: alley 15, business district 20, school zone 20, residential district 25, any other roadway 55. All are maximums under favorable conditions on roads that are not otherwise posted.",
        trap:
          "Twenty-five is the residential figure. Confusing the two is the commonest slip on this item, because most states set business districts higher than residential ones rather than lower.",
        excerptKey: "speed-limits-table",
        sourceLabel: "Alaska Driver Manual - Speed Laws",
        sourceUrl: hb(34),
        commonlyMissed: true,
      },
      {
        id: "ak_s4_19",
        topic: "sharing",
        question:
          "How many demerit points does Alaska assess against a cyclist for a traffic violation committed on a bicycle?",
        choices: [
          "Four",
          "None",
          "The same as for a car",
          "Two",
        ],
        correctIndex: 1,
        explanation:
          "None. AS 28.15.231(b) provides that no points are assessed for traffic violations committed while using a bicycle, even though bicycles must follow the rules of the road.",
        context:
          "Cyclists are still required to obey traffic signs, signals and all other traffic laws, and to signal turns, lane changes and stops by hand. The absence of points is a licensing consequence, not permission to ignore the rules.",
        trap:
          "No points is not the same as no penalty. A citation can still follow; it simply does not reach the driving record.",
        excerptKey: "bicycle-no-points",
        sourceLabel: "Alaska Driver Manual - Bicyclists",
        sourceUrl: hb(50),
      },
      {
        id: "ak_s4_20",
        topic: "safety",
        question:
          "What does the manual say about using a fuel tank in cold weather?",
        choices: [
          "Keep it below half to reduce weight",
          "Keep it full to prevent moisture condensation in the tank",
          "It makes no difference in modern vehicles",
          "Fill it only with winter-grade fuel",
        ],
        correctIndex: 1,
        explanation:
          "Keep the tank full in cold weather to prevent moisture condensing inside it. Water in the fuel system freezes and stops the engine, which in an Alaska winter is a safety problem rather than an inconvenience.",
        context:
          "The same weather section covers wipers that streak and skip, bald tires that cannot give you directional control on a wet surface, and the habit of approaching stale green lights more slowly when conditions are bad.",
        trap:
          "This reads like fuel-economy advice and is not. The reason is condensation, and it is why a full tank is a winter safety item in Alaska.",
        excerptKey: "weather-full-tank",
        sourceLabel: "Alaska Driver Manual - Weather Conditions, Safety Tips",
        sourceUrl: hb(71),
      },
      {
        id: "ak_s4_21",
        topic: "rightOfWay",
        question:
          "Where does the manual say you must stop before a crosswalk that has no painted stop line?",
        choices: [
          "Level with the corner of the building",
          "At the edge of the intersecting roadway",
          "In advance of the unmarked crosswalk",
          "Wherever you can see cross traffic",
        ],
        correctIndex: 2,
        explanation:
          "The You Must Yield diagrams say to stop in advance of the unmarked crosswalk if a stop is necessary. The crosswalk exists whether or not anyone has painted it.",
        context:
          "The Stops Required list orders the options for a stop sign: behind the crosswalk, at the painted stop line, or behind the intersecting roadway shoulder line. Stop lines exist to mark the farthest point into the intersection a vehicle may extend while still giving the driver a clear view.",
        trap:
          "Creeping forward to see is exactly what the stop line exists to prevent, and Alaska road-test candidates report losing points for rolling into the crosswalk to look for a gap.",
        excerptKey: "yield-unmarked-crosswalk",
        sourceLabel: "Alaska Driver Manual - You Must Yield in These Situations",
        sourceUrl: hb(40),
      },
      {
        id: "ak_s4_22",
        topic: "licensing",
        question:
          "How soon must you notify the Division of Motor Vehicles of a change of name or address?",
        choices: [
          "Within 60 days",
          "At your next renewal",
          "Within 10 days",
          "Within 30 days",
        ],
        correctIndex: 3,
        explanation:
          "Within 30 days, in writing. A name change also needs court-ordered documentation, or a certified marriage certificate issued by vital statistics.",
        context:
          "The neighboring deadlines are shorter and easy to mix up: a crash report to the DMV within 10 days, a certificate of insurance within 15 days after a crash with $501 or more of property damage, and an administrative hearing request within 7 days of the date issued on a revocation notice.",
        trap:
          "Four different clocks live in this part of the manual - 7, 10, 15 and 30 days. Learning them as a group is the only way to keep them apart.",
        excerptKey: "address-change-30-days",
        sourceLabel: "Alaska Driver Manual - Address or Name Change",
        sourceUrl: hb(13),
      },
      {
        id: "ak_s4_23",
        topic: "signs",
        question:
          "A yellow diamond shows a leaping animal. In Alaska it may be a deer, a moose or a caribou. What does it mean?",
        choices: [
          "Be alert for that animal crossing unexpectedly",
          "A wildlife refuge boundary",
          "Livestock may be on the road",
          "Hunting is permitted in this area",
        ],
        correctIndex: 0,
        explanation:
          "It is a warning sign: be alert for the animal shown crossing unexpectedly. Alaska prints separate versions for deer and for caribou.",
        context:
          "The manual asks you to look for these signs in areas known to have higher activity near the roadway, and to be especially alert through frequent crossing areas, which it says are usually marked with a leaping stag or a moose sign.",
        trap:
          "The animal in the picture is not the only one you will meet. The sign marks a crossing area, and moose, caribou, sheep, bear and mountain goats all use Alaska roads depending on the region.",
        excerptKey: "sign-caribou",
        sourceLabel: "Alaska Driver Manual - Signs",
        sourceUrl: hb(46),
      },
      {
        id: "ak_s4_24",
        topic: "rules",
        question:
          "Alaska's law on electronic devices while driving covers what?",
        choices: [
          "Handheld phone calls only",
          "Texting, and driving with a visual screen device operating in the driver's view",
          "Any use of a phone, including hands-free",
          "Only devices installed after 2010",
        ],
        correctIndex: 1,
        explanation:
          "It is illegal to drive with a visual screen device operating, and texting while driving is prohibited. AS 28.35.161 covers a television, video monitor, portable computer or similar display in full view of the driver while the vehicle is in motion, as well as reading or typing a text or other non-voice message.",
        context:
          "The statute lists exceptions: a phone used for voice communication or showing caller identification, and displays limited to audio controls, vehicle information, navigation, maps, and camera views that help you maneuver or watch occupants behind you.",
        trap:
          "Alaska's rule is written around screens and texting rather than around holding a phone. A hands-free voice call sits inside the exceptions; watching a video does not.",
        excerptKey: "visual-screen-device",
        sourceLabel: "Alaska Driver Manual - TV, Laptops, Texting, Etc.",
        sourceUrl: hb(31),
      },
      {
        id: "ak_s4_25",
        topic: "emergencies",
        question:
          "You strike an unattended parked car and cannot find the owner. What must you do?",
        choices: [
          "Wait 30 minutes and then leave",
          "Nothing, if the damage is minor",
          "Leave a written note with your name, address and telephone number",
          "Report it to your insurer only",
        ],
        correctIndex: 2,
        explanation:
          "Stop and try to find the owner. If you cannot, leave a written note containing your name, address and telephone number. The same duty applies to striking private property such as a fence.",
        context:
          "Alaska treats failure to stop and render aid at the scene of a personal injury crash as grounds for revocation, and leaving the scene of a crash is a nine-point offense on the point schedule.",
        trap:
          "\"Minor damage\" is not a category the manual recognizes here. The duty is triggered by striking the property, not by the size of the dent.",
        excerptKey: "crash-unattended-vehicle",
        sourceLabel: "Alaska Driver Manual - What to Do in Case of Every Crash",
        sourceUrl: hb(15),
      },
      {
        id: "ak_s4_26",
        topic: "impairment",
        question:
          "How long can a prior DUI or Refusal conviction from another state affect an Alaska administrative revocation period?",
        choices: [
          "15 years",
          "It cannot; only Alaska convictions count",
          "5 years",
          "10 years",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen years. Prior DWI, DUI or Refusal convictions occurring in Alaska or in another state within the last 15 years can be used to determine the revocation period.",
        context:
          "The administrative ladder those priors feed is 90 days, one year, three years and five years. The criminal side uses a different window: a third conviction within 10 years makes the offense a class C felony under AS 28.35.030(n).",
        trap:
          "Two different look-back periods sit side by side. Fifteen years for the DMV's revocation length, ten years for the felony threshold in court.",
        excerptKey: "prior-convictions-15-years",
        sourceLabel: "Alaska Driver Manual - Administrative Revocations",
        sourceUrl: hb(20),
      },
      {
        id: "ak_s4_27",
        topic: "safety",
        question:
          "What is glare recovery time, and why does it matter?",
        choices: [
          "The time your pupils need to readjust after oncoming headlights pass, during which you are virtually driving blind",
          "The delay before an automatic high beam switches back on",
          "The time frost takes to clear from the windshield",
          "The time headlights take to warm up in cold weather",
        ],
        correctIndex: 0,
        explanation:
          "Oncoming headlights contract the pupil of the eye, and after the vehicle has passed it takes time to readjust to the dimmer light. The manual says that during this recovery period you are virtually driving blind.",
        context:
          "Glare recovery is not a matter of visual acuity and varies from person to person, generally being worse in older drivers and those with certain medical conditions. The practical advice is not to stare at oncoming headlights - use quick glances to check the other vehicle's lane position, your own, the right edge of the road and the path ahead.",
        trap:
          "Wearing sunglasses at night to cut glare makes it worse. The manual tells you to wear them in bright sunlight to protect night vision, and never in the dark.",
        excerptKey: "glare-recovery-blind",
        sourceLabel: "Alaska Driver Manual - Glare and Glare Recovery",
        sourceUrl: hb(66),
      },
      {
        id: "ak_s4_28",
        topic: "signals",
        question:
          "A flashing yellow ball hangs over an intersection. What does it require?",
        choices: [
          "Stop and yield to all traffic",
          "Reduce speed and exercise caution, yielding to pedestrians and vehicles in the intersection",
          "Nothing; it is a warning to the cross street only",
          "Stop if pedestrians are present, otherwise proceed at speed",
        ],
        correctIndex: 1,
        explanation:
          "Reduce speed and exercise caution, and yield to pedestrians and vehicles in the intersection. It never requires a stop by itself.",
        context:
          "These beacons may hang over the roadway or be installed with a sign where extra emphasis is wanted - typically an intersection with a bad record, or a school crossing. The flashing red is its counterpart on the other approach, and that one does mean stop.",
        trap:
          "One approach usually gets the flashing yellow and the other the flashing red. Assuming both directions have the same signal is how people get hit at these intersections.",
        excerptKey: "flashing-yellow-ball",
        sourceLabel: "Alaska Driver Manual - Traffic Signals, Flashing Yellow Ball",
        sourceUrl: hb(56),
      },
      {
        id: "ak_s4_29",
        topic: "sharing",
        question:
          "A truck ahead of you signals right and swings out to the left. What is happening?",
        choices: [
          "The trailer has jackknifed",
          "The driver has signalled by mistake",
          "The driver is setting up a wide right turn and you must not move into the gap",
          "The driver is pulling over to let you pass",
        ],
        correctIndex: 2,
        explanation:
          "Truck drivers sometimes need to swing wide to the left in order to make a right turn safely, especially in urban areas. Getting between the truck and the curb puts you in what the manual calls a squeeze.",
        context:
          "The driver cannot see cars directly behind or beside them during that maneuver, which is why the manual asks you to pay attention to truck signals and give them room. It is the same blind-spot problem that makes the No-Zone dangerous.",
        trap:
          "The gap the truck opens on its right looks like an invitation and is a trap. That space is where the trailer is about to be.",
        excerptKey: "truck-squeeze",
        sourceLabel: "Alaska Driver Manual - Trucks Make Wide Right Turns",
        sourceUrl: hb(83),
      },
      {
        id: "ak_s4_30",
        topic: "speed",
        question:
          "The manual sets a suggested maximum speed for one specific maneuver. Which, and what is the figure?",
        choices: [
          "Crossing railroad tracks, 20 mph",
          "Entering a roundabout, 15 mph",
          "Turning right at an intersection, 10 mph",
          "Backing, 5 mph",
        ],
        correctIndex: 3,
        explanation:
          "The Backing section suggests your speed should not exceed 5 mph. It is a suggestion in the manual's own words rather than a posted limit, and it is the only maneuver given its own number like this.",
        context:
          "Roundabouts are described as designed for about 15 to 20 mph, which is a design figure rather than a rule for the driver. The backing figure sits alongside the instruction to look out the rear window, move the wheel toward where you want the rear to go, and yield to anyone on the street or sidewalk.",
        trap:
          "Roundabout speeds appear in the manual too, which makes that option tempting. The 15 to 20 there describes how the intersection was built, not a speed you are told to keep.",
        excerptKey: "backing-5-mph",
        sourceLabel: "Alaska Driver Manual - Backing",
        sourceUrl: hb(31),
      },
      {
        id: "ak_s4_31",
        topic: "rules",
        question:
          "Coasting downhill with the gears in neutral or the clutch disengaged is what in Alaska?",
        choices: [
          "Prohibited",
          "Allowed below 25 mph",
          "Allowed only in automatic vehicles",
          "Encouraged for fuel economy",
        ],
        correctIndex: 0,
        explanation:
          "Prohibited. The manual's Coasting Prohibited entry says a driver may not coast on a downgrade with the gears in neutral or with the clutch disengaged.",
        context:
          "The reason is the same one behind the brake-failure advice: engine braking is part of your ability to control speed on a hill, and a driver who has given it up has only the friction brakes, which fade.",
        trap:
          "The manual does have a fuel-economy chapter, and it does recommend coasting when you can. That advice is about lifting off the accelerator, not about slipping the transmission into neutral on a grade.",
        excerptKey: "coasting-prohibited",
        sourceLabel: "Alaska Driver Manual - Coasting Prohibited",
        sourceUrl: hb(79),
      },
      {
        id: "ak_s4_32",
        topic: "signs",
        question:
          "What backs a regulatory sign, and what happens if you disobey one?",
        choices: [
          "Departmental policy; a warning is issued",
          "State statute, regulation or local ordinance; a traffic citation can be issued",
          "Federal highway rules; the sign is advisory",
          "Local custom; nothing happens",
        ],
        correctIndex: 1,
        explanation:
          "Regulatory signs indicate an instruction that must be understood and obeyed, and state statute, regulation or local ordinance stands behind them. Violating the instruction can result in a traffic citation.",
        context:
          "They are black or red on white. That color family covers the stop sign, the yield sign, do not enter and wrong way, no turn on red, speed limits, lane-use restrictions and parking prohibitions.",
        trap:
          "Warning signs are yellow and advisory in the sense that the hazard is a fact, not a rule. Regulatory signs are the ones that create an offense.",
        excerptKey: "sign-regulatory",
        sourceLabel: "Alaska Driver Manual - Regulatory Sign",
        sourceUrl: hb(43),
      },
      {
        id: "ak_s4_33",
        topic: "safety",
        question:
          "What is the minimum legal tread depth on a tire, and how does the manual say to check it?",
        choices: [
          "There is no minimum in Alaska",
          "2/32 of an inch, using a penny and Lincoln's head",
          "4/32 of an inch, using a quarter",
          "1/16 of an inch, measured with a gauge only",
        ],
        correctIndex: 1,
        explanation:
          "Tires must have at least 2/32 of an inch of tread depth. The distance between the edge of a penny and the top of Lincoln's head is about 2/32 of an inch, so if you slide a penny into a groove and can see the top of his head, the tire is worn out.",
        context:
          "The manual notes that 12 percent of crashes among inexperienced drivers are tire-related, and asks you to check tread and pressure at least once a month. Bald tires are separately named as unable to give you directional control when stopping on a wet surface.",
        trap:
          "The penny test is often misremembered as passing when you can see his head. It is the opposite: seeing the top of Lincoln's head means the tire is finished.",
        excerptKey: "tire-tread-penny",
        sourceLabel: "Alaska Driver Manual - Maintenance Practices to Follow",
        sourceUrl: hb(87),
      },
      {
        id: "ak_s4_34",
        topic: "rightOfWay",
        question:
          "You are on the protected route and a vehicle is waiting at a stop sign on the cross street. What is the rule?",
        choices: [
          "Whoever arrived first goes",
          "You must stop if it has been waiting more than a few seconds",
          "You must slow down and let it out",
          "It must stop and yield to all traffic on the protected route, including non-motorized users",
        ],
        correctIndex: 3,
        explanation:
          "The manual's yield diagrams put the duty on the driver entering from the controlled approach: stop and yield to all traffic on the protected route, and that traffic includes non-motorized users.",
        context:
          "\"Protected route\" is the manual's term for the road that is not controlled by a sign or a signal at that intersection. Its counterpart is the unprotected route, where you are required to slow down and have the vehicle under control at every cross street.",
        trap:
          "Waving a waiting driver out is a kindness that creates confusion, and it does not transfer the legal duty. If they pull out and are struck, the yield was still theirs.",
        excerptKey: "yield-protected-route",
        sourceLabel: "Alaska Driver Manual - You Must Yield in These Situations",
        sourceUrl: hb(40),
      },
      {
        id: "ak_s4_35",
        topic: "parking",
        question: "Is double parking legal anywhere in Alaska?",
        choices: [
          "No, it is prohibited by law",
          "Yes, outside city limits",
          "Yes, for commercial deliveries",
          "Yes, briefly, with hazard lights on",
        ],
        correctIndex: 0,
        explanation:
          "Double parking is prohibited by law. The manual states it as a flat rule with no exception for hazard lights or short stops.",
        context:
          "It sits in the same list as the requirement to park within 12 inches of the near curb when parallel parking, to park within marked stalls where they exist, and to keep all four wheels off the pavement when parking outside city limits.",
        trap:
          "Hazard lights are not a permission. They mark a vehicle as a hazard; they do not make an unlawful stop lawful.",
        excerptKey: "parking-double-parking",
        sourceLabel: "Alaska Driver Manual - Parking",
        sourceUrl: hb(74),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Alaska learners are consistent about where the DMV test hurts: the DUI penalty figures, the mandatory insurance minimums, the points, and the fact that the Division can revoke a license a court has cleared. Thirty-five questions on exactly those.",
    questions: [
      {
        id: "ak_s5_01",
        topic: "impairment",
        question:
          "What minimum fine must a court impose for a first DUI conviction in Alaska?",
        choices: ["$500", "$1,000", "$1,500", "$3,000"],
        correctIndex: 2,
        explanation:
          "Not less than $1,500. AS 28.35.030(b)(1)(A) fixes it, and the court may not suspend the minimum fine any more than it may suspend the minimum 72 hours of imprisonment.",
        context:
          "The ladder climbs steeply: $3,000 and 20 days for a second conviction, $4,000 and 60 days for a third, $5,000 and 120 days for a fourth. A felony DUI carries a fine of not less than $10,000 and 60 months of ignition interlock.",
        trap:
          "Alaska drivers report the DUI money questions being asked as figures, not principles. The manual's own cost list shows $1,500 under Court Fines, which matches the statutory minimum.",
        excerptKey: "as-dui-first-sentence",
        sourceLabel: "Alaska Statutes AS 28.35.030(b)(1)(A)",
        sourceUrl: AS28,
        commonlyMissed: true,
      },
      {
        id: "ak_s5_02",
        topic: "safety",
        question:
          "What is the minimum bodily injury coverage Alaska requires for two or more people injured in one accident?",
        choices: [
          "$300,000",
          "$100,000",
          "$50,000",
          "$25,000",
        ],
        correctIndex: 1,
        explanation:
          "One hundred thousand dollars, subject to the $50,000 limit for any one person. The property damage minimum is a separate $25,000.",
        context:
          "AS 28.22.101(d) sets all three figures and the manual repeats them. Either the vehicle owner or the driver must carry the coverage, and you must be able to show proof of it in the vehicle.",
        trap:
          "Alaska learners who moved from other states name the insurance minimums as the questions they got wrong, because every state uses different numbers and the generic practice apps use somebody else's.",
        excerptKey: "as-insurance-limits",
        sourceLabel: "Alaska Statutes AS 28.22.101(d)",
        sourceUrl: AS28,
        commonlyMissed: true,
      },
      {
        id: "ak_s5_03",
        topic: "licensing",
        question:
          "How many points does Alaska assign for driving without insurance?",
        choices: [
          "2",
          "4",
          "6",
          "10",
        ],
        correctIndex: 2,
        explanation:
          "Six points, the same as negligent driving, failing to yield to an emergency vehicle, failing to stop for a school bus, and failing to obey a control device in a school zone.",
        context:
          "The point schedule runs from 2 to 10. Ten-point offenses are DUI, reckless driving, refusing a breath sample, racing, fleeing an officer, driving while suspended, and vehicular homicide, manslaughter or assault. Leaving the scene of a crash is nine.",
        trap:
          "Six points is a quarter of the way to a suspension in a single citation. Twelve points in 12 months triggers mandatory action.",
        excerptKey: "points-no-insurance",
        sourceLabel: "Alaska Driver Manual - Driver's License Point Assignment",
        sourceUrl: hb(16),
        commonlyMissed: true,
      },
      {
        id: "ak_s5_04",
        topic: "impairment",
        question:
          "You are 19 and cited for minor operating after consuming alcohol. What does the court have to order on conviction?",
        choices: [
          "Community service and/or a fine of up to $1,000",
          "Nothing; the DMV revocation is the whole penalty",
          "Mandatory installation of an ignition interlock",
          "A jail term of at least 72 hours",
        ],
        correctIndex: 0,
        explanation:
          "It is an infraction, and on conviction the court must order community service and/or a fine of up to $1,000. The DMV revocation is a separate consequence that runs on its own.",
        context:
          "The revocation starts at 30 days for a first offense and rises to 60, 90 days and a year with repeats. It attaches to any measurable quantity of alcohol, or to refusing the chemical test, and happens even if the citation is dismissed.",
        trap:
          "Assuming that being under 21 makes it a full DUI is wrong in the other direction. Minor operating after consuming is an infraction, with a license consequence that most infractions do not carry.",
        excerptKey: "minor-court-penalty",
        sourceLabel: "Alaska Driver Manual - Under 21 Violations, Court Penalties",
        sourceUrl: hb(20),
      },
      {
        id: "ak_s5_05",
        topic: "rules",
        question:
          "Which of these is on the Do Not Pass list for the right shoulder of an Alaska highway?",
        choices: [
          "Passing on the shoulder is allowed if the shoulder is paved",
          "Passing on the right shoulder is prohibited",
          "Passing on the shoulder is allowed below 25 mph",
          "Passing on the shoulder is allowed to overtake a turning vehicle",
        ],
        correctIndex: 1,
        explanation:
          "The first entry on the manual's Do Not Pass list is the right shoulder of the highway, citing 13 AAC 02.055. It is prohibited outright.",
        context:
          "The rest of the list: hills and curves without a clear view ahead, any pass that cannot be completed before a solid yellow line appears in your lane, a solid yellow line already in your lane, a school bus with red lights flashing and arm out, and within 100 feet of an intersection, railroad crossing, narrow bridge, viaduct or tunnel.",
        trap:
          "Undertaking on the shoulder to get past a left-turning vehicle is common on Alaska highways and it is on the prohibited list. The correct move is to wait.",
        excerptKey: "no-pass-shoulder",
        sourceLabel: "Alaska Driver Manual - Do Not Pass",
        sourceUrl: hb(42),
      },
      {
        id: "ak_s5_06",
        topic: "impairment",
        question:
          "You refuse the chemical test after a lawful DUI arrest. How many criminal charges can result?",
        choices: [
          "One, plus a civil penalty",
          "One: refusal replaces the DUI charge",
          "Two: DUI and Refusal, which the court can treat separately",
          "None; refusal is only a license matter",
        ],
        correctIndex: 2,
        explanation:
          "Two. The manual says refusal to submit to chemical testing will result in two criminal charges, DUI and Refusal, which the court can treat separately.",
        context:
          "Depending on how many prior DUI offenses you have, a refusal after lawful arrest can be a misdemeanor or a felony. During the resulting revocation there is no limited work-purpose driving privilege for a person who refused.",
        trap:
          "Refusing is widely believed to leave the state with no case. It creates a second charge, and it removes the limited-license option that some other revocations allow.",
        excerptKey: "refusal-two-charges",
        sourceLabel: "Alaska Driver Manual - Implied Consent",
        sourceUrl: hb(18),
        commonlyMissed: true,
      },
      {
        id: "ak_s5_07",
        topic: "signs",
        question:
          "What does the end of a no-passing zone actually tell you?",
        choices: [
          "That a passing lane begins",
          "That the speed limit rises",
          "That it is now safe to pass",
          "That there is increased visibility ahead",
        ],
        correctIndex: 3,
        explanation:
          "The manual corrects the common reading directly: the end of a no passing zone does not mean it is safe to pass. It means there is increased visibility ahead.",
        context:
          "Whether a pass is safe is still your judgment call, made on sight distance, the gap you need, oncoming traffic and the speed of the vehicle you are overtaking. The markings tell you where passing is not prohibited, not where it is wise.",
        trap:
          "Treating the dashed line as permission is exactly the misunderstanding this paragraph exists to fix, and it produces head-on collisions on two-lane Alaska highways.",
        excerptKey: "no-pass-zone-end",
        sourceLabel: "Alaska Driver Manual - Do Not Pass",
        sourceUrl: hb(42),
        commonlyMissed: true,
      },
      {
        id: "ak_s5_08",
        topic: "licensing",
        question:
          "You are convicted of driving while your license is suspended. What does the manual say the sentence includes?",
        choices: [
          "A jail sentence of not less than 10 days",
          "A 30-day extension of the suspension",
          "Community service",
          "A fine only",
        ],
        correctIndex: 0,
        explanation:
          "Conviction of driving while a license is cancelled, suspended, revoked, or in violation of a limited license, will result in a jail sentence of not less than 10 days.",
        context:
          "The same offense is worth 10 points on the point schedule and is grounds for revocation under AS 28.15.181. No limited work-purpose license is available where a point suspension or revocation is required.",
        trap:
          "This is one of the manual's twelve numbered driver-license requirements, buried in a list most people skim. It is a mandatory minimum, not a maximum.",
        excerptKey: "driving-suspended-jail",
        sourceLabel: "Alaska Driver Manual - Driver's License Requirements",
        sourceUrl: hb(9),
        commonlyMissed: true,
      },
      {
        id: "ak_s5_09",
        topic: "speed",
        question:
          "How many points does Alaska assess for driving 20 mph or more over the limit?",
        choices: [
          "10",
          "6",
          "4",
          "2",
        ],
        correctIndex: 1,
        explanation:
          "Six points. The speeding ladder runs 2 points for 3 to 9 mph over, 4 points for 10 to 19 over, and 6 points for 20 or more over.",
        context:
          "Speeding in a school zone or playground crosswalk is 6 points on its own, whatever the excess. Two 6-point citations inside a year put you within striking distance of the 12-point suspension threshold.",
        trap:
          "There is no entry for 1 or 2 mph over, which is why the schedule starts at 3. The bands are testable as written.",
        excerptKey: "points-speeding-20",
        sourceLabel: "Alaska Driver Manual - Driver's License Point Assignment",
        sourceUrl: hb(16),
      },
      {
        id: "ak_s5_10",
        topic: "emergencies",
        question:
          "How long do you have to request an administrative hearing to contest a revocation?",
        choices: [
          "7 days",
          "10 days",
          "15 days",
          "30 days",
        ],
        correctIndex: 0,
        explanation:
          "Seven days from the Date Issued on the front of the notice, and the request must be in writing.",
        context:
          "If you make a timely request and hold a valid license, you get a temporary license that lets you drive until the hearing, unless the court has revoked you. Late hearings are possible only for physical incapacity under the statutes the manual names.",
        trap:
          "Seven days is the shortest deadline in the whole manual and the easiest to miss, because it starts from the date on the notice rather than from the date you read it.",
        excerptKey: "hearing-seven-days",
        sourceLabel: "Alaska Driver Manual - Administrative Hearing",
        sourceUrl: hb(21),
      },
      {
        id: "ak_s5_11",
        topic: "sharing",
        question:
          "A school bus with red lights flashing is stopped on the other side of a four-lane highway with a physical median. Must you stop?",
        choices: [
          "Yes, unless you are more than 30 feet away",
          "Only if children are visible",
          "Yes, always, from either direction",
          "No, if the roadways are separated and you are on the other roadway",
        ],
        correctIndex: 3,
        explanation:
          "A driver on a highway with separated roadways providing two or more lanes in each direction need not stop for a bus headed the opposite way, even with the arm out and the red lights on.",
        context:
          "AS 28.35.145(c) puts it in statutory terms: no stop is required when meeting or passing a bus on a different roadway. Everywhere else, a driver approaching from any direction stops not less than 30 feet from the bus.",
        trap:
          "Separated roadways means physically separated. A four-lane road with only a painted centerline is not divided, and every driver on it must stop.",
        excerptKey: "bus-divided-exception",
        sourceLabel: "Alaska Driver Manual - Meeting a School Bus",
        sourceUrl: hb(53),
        commonlyMissed: true,
      },
      {
        id: "ak_s5_12",
        topic: "safety",
        question:
          "How long do you have to give the DMV proof of insurance after a crash with more than $501 of property damage?",
        choices: [
          "60 days",
          "30 days",
          "15 days",
          "10 days",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen days, and every driver involved must do it regardless of who caused the crash.",
        context:
          "Failing to provide the proof, or having been uninsured, brings a 90-day license suspension for a first occurrence and one year for a second. That is separate from the crash report to the DMV, which is due within 10 days and is not required if a police officer investigated.",
        trap:
          "\"I did not cause it\" is not a defense. The manual states expressly that the proof is required from all the drivers involved, whoever was at fault.",
        excerptKey: "insurance-15-days",
        sourceLabel: "Alaska Driver Manual - Financial Responsibility Laws",
        sourceUrl: hb(14),
        commonlyMissed: true,
      },
      {
        id: "ak_s5_13",
        topic: "impairment",
        question:
          "When does driving under the influence become a felony in Alaska?",
        choices: [
          "On a second conviction",
          "When the driver is under 21",
          "With two or more prior convictions in the preceding 10 years",
          "Only where someone is injured",
        ],
        correctIndex: 2,
        explanation:
          "AS 28.35.030(n) makes it a class C felony where the person has been convicted two or more times since 1 January 1996 and within the 10 years preceding the present offense.",
        context:
          "A felony DUI carries a fine of not less than $10,000 and an ignition interlock requirement of at least 60 months once driving privileges return. The ordinary offense is a class A misdemeanor.",
        trap:
          "Injury is not what makes it a felony. The count of prior convictions inside the ten-year window is.",
        excerptKey: "as-dui-felony",
        sourceLabel: "Alaska Statutes AS 28.35.030(n)",
        sourceUrl: AS28,
      },
      {
        id: "ak_s5_14",
        topic: "signs",
        question:
          "Which color combination marks a sign that is warning you rather than instructing you?",
        choices: [
          "White on blue",
          "Black or red on white",
          "Black on yellow",
          "White on green",
        ],
        correctIndex: 2,
        explanation:
          "Black on yellow is the warning family. Black or red on white is regulatory, white on green is guidance, white on blue is services.",
        context:
          "There is a fifth: black on orange for construction and maintenance. Learning the color system is what lets you read a sign you have never seen, which matters because the test draws on signs the manual does not picture.",
        trap:
          "School signs are also black on yellow, but they are five-sided rather than diamond. Shape and color together carry the meaning.",
        excerptKey: "sign-warning",
        sourceLabel: "Alaska Driver Manual - Warning Sign",
        sourceUrl: hb(44),
      },
      {
        id: "ak_s5_15",
        topic: "rightOfWay",
        question:
          "The manual gives one blunt instruction to the driver who thinks they have the right of way. What is it?",
        choices: [
          "Sound your horn to claim it",
          "Yield it to the larger vehicle",
          "Take it decisively so other drivers can read your intention",
          "Do not assume you have it - you have it only when the other driver gives it to you",
        ],
        correctIndex: 3,
        explanation:
          "The Right of Way Law section says that if you are the driver approaching from the right, do not assume you have the right of way: you have it only when the other driver gives it to you, and only if another vehicle is not already within the intersection.",
        context:
          "Alaska's rule for uncontrolled intersections gives priority to the driver on the right, but the manual treats that as a tie-breaker rather than a guarantee. You are separately required to slow down and have the vehicle under control on the approach.",
        trap:
          "Right of way is something you give, not something you take. Every collision at an uncontrolled intersection involves at least one driver who believed the rule protected them.",
        excerptKey: "row-do-not-assume",
        sourceLabel: "Alaska Driver Manual - Right of Way Law",
        sourceUrl: hb(38),
      },
      {
        id: "ak_s5_16",
        topic: "rules",
        question:
          "You are stopped by a police officer. Where does the manual tell you to keep your hands, and when should you reach for documents?",
        choices: [
          "Keep your hands visible on the wheel and wait for the officer to ask before retrieving documents",
          "Step out of the vehicle with your license",
          "Keep your hands in your lap and open the glove box",
          "Have your documents ready in your hand before the officer arrives",
        ],
        correctIndex: 0,
        explanation:
          "Keep your hands visible, such as on the steering wheel, and wait for the officer to ask before retrieving anything from a wallet, purse, center console or glove compartment.",
        context:
          "The rest of the guidance: signal and pull to the right as soon as it is safe even from the left lane of a four-lane road, avoid stopping on a curve or just over a crest, keep driver and passengers in the vehicle, and turn on the interior lights in darkness.",
        trap:
          "Getting the paperwork out while the officer walks up feels helpful and reads as reaching for something unseen. If a disability prevents you complying, the manual asks you to say so.",
        excerptKey: "police-wait-for-documents",
        sourceLabel: "Alaska Driver Manual - Stop by Law Enforcement",
        sourceUrl: hb(77),
      },
      {
        id: "ak_s5_17",
        topic: "impairment",
        question:
          "Which of these does the Division of Motor Vehicles revoke a license for administratively, without waiting for a court?",
        choices: [
          "Any moving violation",
          "A breath test result of .08 or higher after a DUI arrest",
          "Two speeding tickets in a year",
          "Failing to carry proof of insurance",
        ],
        correctIndex: 1,
        explanation:
          "A breath test of .08 or higher after a DUI arrest is on the manual's list of administrative revocations, alongside refusal to submit to a chemical test, habitual violations, and the under-21 alcohol offenses.",
        context:
          "The threshold is .04 for a commercial motor vehicle. The manual closes the section by noting that the Division has authority to act against your driving privileges regardless of the outcome of any related court proceeding.",
        trap:
          "Administrative and court action are two procedures you must deal with separately. Winning one does nothing for the other.",
        excerptKey: "dmv-independent-action",
        sourceLabel: "Alaska Driver Manual - Suspensions and Revocations",
        sourceUrl: hb(17),
        commonlyMissed: true,
      },
      {
        id: "ak_s5_18",
        topic: "speed",
        question:
          "You are driving a motor-driven cycle at night whose lamps reveal a person or vehicle at 200 feet. What is your speed limit?",
        choices: [
          "There is no such limit",
          "20 mph or less",
          "21 to 29 mph",
          "30 mph or more",
        ],
        correctIndex: 2,
        explanation:
          "The manual ties motor-driven cycle speed to headlamp intensity: lamps revealing a person or vehicle at 100 feet permit 20 mph or less, at 200 feet permit 21 to 29 mph, and at 300 feet permit 30 mph or more.",
        context:
          "The idea behind it generalises to every vehicle. The Speed Limitation Law forbids driving faster than will permit you to stop within the assured clear distance ahead, and the manual suggests using the four-second rule at night to check you are not overdriving your headlights.",
        trap:
          "This looks like an obscure corner of the manual, and it is exactly the sort of specific table Alaska learners say turns up on the test.",
        excerptKey: "motor-cycle-headlamp-speed",
        sourceLabel: "Alaska Driver Manual - Speed Limitation Law",
        sourceUrl: hb(34),
      },
      {
        id: "ak_s5_19",
        topic: "safety",
        question:
          "A child is 5 years old, 50 inches tall and weighs 45 pounds. How must they ride in Alaska?",
        choices: [
          "In a lap and shoulder belt alone",
          "In the front seat with the airbag disabled",
          "In a rear-facing car seat",
          "In a booster seat",
        ],
        correctIndex: 3,
        explanation:
          "A child over four but under eight, less than 57 inches tall and between 20 and 65 pounds must be secured in a booster seat. This child meets every part of that test.",
        context:
          "The ladder runs: rear-facing under one year or under 20 pounds; a child restraint device from one to under five if over 20 pounds; a booster from over four to under eight if under 57 inches and 20 to 65 pounds; and a seat belt once the height or weight limits are exceeded.",
        trap:
          "Age alone does not decide it. Height and weight are part of the statutory test, which is why a tall six-year-old and a small seven-year-old can end up in different seats.",
        excerptKey: "car-seat-booster",
        sourceLabel: "Alaska Driver Manual - Safety Belt Use Is Required by Law",
        sourceUrl: hb(26),
        commonlyMissed: true,
      },
      {
        id: "ak_s5_20",
        topic: "signals",
        question:
          "The signal ahead has one working head showing red, and a second head for your direction that is completely dark. What applies?",
        choices: [
          "The working head governs: stop on the red",
          "You may proceed with caution",
          "Yield to the right and continue",
          "The intersection is uncontrolled",
        ],
        correctIndex: 0,
        explanation:
          "The uncontrolled-intersection rule applies only when a signal has no bulbs functioning and there is no other signal head in operation for your direction. Here there is one, so the red governs and you stop.",
        context:
          "Where no head works for your direction and nobody is directing traffic, the intersection becomes uncontrolled: you must stop, yield to traffic on your right, proceed only when safe, and report the fault to the nearest police department.",
        trap:
          "A dead bulb somewhere in the cluster does not free you from the signal. The manual's condition is that no head is working for your direction at all.",
        excerptKey: "unlit-signal-head",
        sourceLabel: "Alaska Driver Manual - Unlit Signal Head",
        sourceUrl: hb(57),
      },
      {
        id: "ak_s5_21",
        topic: "licensing",
        question:
          "A provisional license holder collects citations totalling 7 points inside 12 months. What follows?",
        choices: [
          "Nothing until 12 points",
          "A mandatory driver improvement course approved by the Division",
          "Automatic revocation",
          "A one-year extension of the provisional stage",
        ],
        correctIndex: 1,
        explanation:
          "A provisional license holder who accumulates 6 or more points in 12 months, or 9 or more in 24 months, must complete a driver improvement course approved by the Division.",
        context:
          "The DMV adds that failure to complete the course may result in suspension of driving privileges. Full license holders face a different threshold entirely: 12 points in 12 months or 18 in 24 requires mandatory suspension or revocation.",
        trap:
          "Six points is a single failure-to-yield-to-an-emergency-vehicle citation, or one school-zone offense. For a provisional driver that one ticket triggers the course.",
        excerptKey: "points-provisional-course",
        sourceLabel: "Alaska Driver Manual - A Word About Points",
        sourceUrl: hb(15),
      },
      {
        id: "ak_s5_22",
        topic: "sharing",
        question:
          "What does the manual tell drivers about children under nine riding bicycles?",
        choices: [
          "They are treated as pedestrians in law",
          "They may not ride on the roadway at all",
          "They lack the physical and mental development to interact safely in traffic",
          "They must ride facing traffic",
        ],
        correctIndex: 2,
        explanation:
          "Youngsters under age nine lack the physical and mental development to interact safely in that environment, so the manual asks you to be careful when driving near children riding bikes.",
        context:
          "The broader point is that a bicycle is a vehicle and the rules of the road protect its rider. The manual asks drivers to check blind spots before turning, parallel parking, opening a door or leaving a curb, and to turn their head rather than trusting mirrors.",
        trap:
          "This is a statement about capability, not about legality. A nine-year-old on a bike is a lawful road user; the manual is telling you not to expect adult judgment from them.",
        excerptKey: "bicycle-under-nine",
        sourceLabel: "Alaska Driver Manual - Bicycles",
        sourceUrl: hb(49),
      },
      {
        id: "ak_s5_23",
        topic: "impairment",
        question:
          "How many demerit points does a DUI conviction put on an Alaska driving record, and how long does the DUI stay there?",
        choices: [
          "10 points, permanently",
          "6 points, permanently",
          "6 points, five years",
          "10 points, ten years",
        ],
        correctIndex: 0,
        explanation:
          "Ten points, and the manual states that DUIs stay on your record forever.",
        context:
          "Ten points is the top of the schedule, shared with reckless driving, refusing a breath sample, racing, fleeing an officer, driving while suspended, and vehicular homicide, manslaughter or assault. Twelve points in 12 months forces a suspension.",
        trap:
          "Points age out of the counting windows; the conviction itself does not leave the record. Those are two different things and the manual says both.",
        excerptKey: "dui-points-permanent",
        sourceLabel: "Alaska Driver Manual - Alcohol, Drugs, Driving",
        sourceUrl: hb(19),
      },
      {
        id: "ak_s5_24",
        topic: "parking",
        question:
          "How far from the entrance to a fire station may you park in Alaska?",
        choices: [
          "10 feet",
          "15 feet",
          "20 feet",
          "30 feet",
        ],
        correctIndex: 2,
        explanation:
          "Twenty feet from the entrance to a fire station. The same 20 feet applies to a crosswalk or intersection.",
        context:
          "The rest of the parking list: 15 feet from a fire hydrant, 30 feet from a stop sign, 50 feet from a railroad crossing, and 500 feet from fire apparatus stopped with its emergency lights flashing.",
        trap:
          "The fire hydrant figure is 15 and the fire station figure is 20. They are adjacent on the list and constantly swapped.",
        excerptKey: "parking-distances",
        sourceLabel: "Alaska Driver Manual - Parking",
        sourceUrl: hb(74),
      },
      {
        id: "ak_s5_25",
        topic: "emergencies",
        question:
          "You have struck and killed a moose with your vehicle. What must you do?",
        choices: [
          "Nothing beyond reporting the crash to your insurer",
          "Notify a State Trooper or a Fish and Wildlife Officer as soon as possible",
          "Remove the animal from the roadway yourself",
          "Notify the Department of Transportation within 10 days",
        ],
        correctIndex: 1,
        explanation:
          "Big game animals killed or injured in a vehicular collision are the property of the state. If you kill or injure one, you must notify a State Trooper or a Fish and Wildlife Officer as soon as possible.",
        context:
          "The manual also asks you to contact your local police department or the Alaska State Troopers after any collision with a big game animal. Collisions with moose and caribou are common and expensive, which is why the manual gives the topic its own section.",
        trap:
          "This is an Alaska-specific duty that has no equivalent in most states, and it is a plausible knowledge-test item precisely because it is local.",
        excerptKey: "animals-report-big-game",
        sourceLabel: "Alaska Driver Manual - Animals",
        sourceUrl: hb(72),
      },
      {
        id: "ak_s5_26",
        topic: "rightOfWay",
        question:
          "You are backing out of a driveway across a sidewalk onto a street. Who has the right of way?",
        choices: [
          "You, if you have sounded the horn",
          "You, once the rear of your vehicle is in the roadway",
          "Vehicles on the highway and the intersecting highway, and people on the sidewalk",
          "Whoever is moving faster",
        ],
        correctIndex: 2,
        explanation:
          "When backing you must yield the right of way to a vehicle approaching on the highway or intersecting highway. The Backing section separately requires you to yield to vehicles or people on the street or sidewalk and be prepared to stop.",
        context:
          "Backing on a controlled-access highway, or on its entrance or exit ramps, is illegal unless a police officer, firefighter or construction flag person directs it. In residential areas the manual asks for extraordinary caution because children may be behind and between parked cars.",
        trap:
          "Nosing the back of the car into traffic does not create priority. Reversing never gives you the right of way over anyone.",
        excerptKey: "backing-yield",
        sourceLabel: "Alaska Driver Manual - Backing",
        sourceUrl: hb(79),
      },
      {
        id: "ak_s5_27",
        topic: "signs",
        question:
          "What speed does an Alaska school crosswalk sign direct you to?",
        choices: [
          "30 mph",
          "25 mph",
          "20 mph",
          "15 mph",
        ],
        correctIndex: 2,
        explanation:
          "Twenty. The manual captions the signs directly: reduce speed to 20 as marked for school crosswalks, and slow to 20 for school children.",
        context:
          "Twenty is also the statutory unposted maximum in a school zone. Failing to obey a traffic control device in a school zone, playground, crosswalk or park is a six-point offense, and speeding in a school zone or playground crosswalk is six points regardless of how far over you were.",
        trap:
          "Twenty-five is the residential default and does not apply to a school crosswalk. The zone is lower than the street it sits on.",
        excerptKey: "sign-school-crosswalk-20",
        sourceLabel: "Alaska Driver Manual - Signs",
        sourceUrl: hb(45),
        commonlyMissed: true,
      },
      {
        id: "ak_s5_28",
        topic: "rules",
        question:
          "How does Alaska treat an open container of alcohol in the passenger compartment?",
        choices: [
          "The driver commits an infraction; it must be in the trunk or otherwise enclosed",
          "It is a class A misdemeanor",
          "There is no open container law in Alaska",
          "It is lawful as long as the driver is not drinking",
        ],
        correctIndex: 0,
        explanation:
          "AS 28.35.029 makes it unlawful to drive with an open bottle, can or other receptacle containing alcohol in the passenger compartment, and a violation is an infraction. Lawful places include the trunk, behind the last upright seat of a trunkless vehicle if enclosed in another container, and behind a solid partition.",
        context:
          "The passenger compartment includes a utility or glove compartment accessible to the driver or a passenger while the vehicle is being operated. \"Open\" includes a broken seal, so a resealed bottle still counts.",
        trap:
          "The manual never mentions open containers, so this is a rule you can only get from the statute - and it applies to passengers' containers as well as the driver's.",
        excerptKey: "as-open-container",
        sourceLabel: "Alaska Statutes AS 28.35.029",
        sourceUrl: AS28,
        commonlyMissed: true,
      },
      {
        id: "ak_s5_29",
        topic: "safety",
        question:
          "What does the manual say about pumping the brakes in a vehicle with anti-lock brakes?",
        choices: [
          "Pump them firmly to shorten the stop",
          "Never pump them",
          "Pump only on ice",
          "Pump them once, then hold",
        ],
        correctIndex: 1,
        explanation:
          "Never pump the brakes if your vehicle has antilock brakes. Pumping defeats the system, which is already modulating the pressure far faster than a foot can.",
        context:
          "The advice sits alongside its opposite for older vehicles: on a slippery surface without ABS, the manual says not to lock the wheels and to pump the brakes lightly, on the principle that if the wheels are not rolling you do not have control. For an ABS car it tells you to check the vehicle manual.",
        trap:
          "The two pieces of advice contradict each other unless you notice which vehicle each is about. Pumping is the old technique; ABS replaced it.",
        excerptKey: "abs-no-pump",
        sourceLabel: "Alaska Driver Manual - Check Your Driving Habits",
        sourceUrl: hb(86),
        commonlyMissed: true,
      },
      {
        id: "ak_s5_30",
        topic: "impairment",
        question:
          "Using a false or fraudulent driver license to obtain alcohol brings what license consequence in Alaska?",
        choices: [
          "Six demerit points",
          "No license consequence; it is a separate criminal matter",
          "Revocation for 60 days on a first offense and one year for subsequent offenses",
          "A 30-day suspension",
        ],
        correctIndex: 2,
        explanation:
          "Alaska law lets the Division revoke the driving privilege of someone who uses a false or fraudulent driver license to obtain alcohol: 60 days for a first offense and one year for subsequent offenses.",
        context:
          "It sits with the other administrative revocations - the under-21 alcohol offenses, the .08 breath result, and refusal - all of which the Division imposes without waiting for a court.",
        trap:
          "Nothing about this offense involves driving, and the penalty is a driving penalty anyway. That is what makes it a good knowledge-test question.",
        excerptKey: "fraudulent-licence-alcohol",
        sourceLabel: "Alaska Driver Manual - Administrative Revocations",
        sourceUrl: hb(20),
      },
      {
        id: "ak_s5_31",
        topic: "sharing",
        question:
          "Encountering a stationary tow truck with overhead flashing lights on a two-lane road, what does AS 28.35.185 require?",
        choices: [
          "Stop until the truck moves",
          "Change lanes, which is always possible on a two-lane road",
          "Nothing; the move over law covers emergency vehicles only",
          "Slow to a reasonable and prudent speed when passing",
        ],
        correctIndex: 3,
        explanation:
          "On a road with fewer than two lanes traveling in the same direction, you slow to a reasonable and prudent speed considering the traffic, roadway and weather conditions. Vacating a lane is the requirement where there are two or more lanes in your direction.",
        context:
          "The law covers emergency vehicles, fire vehicles, law enforcement vehicles, tow trucks picking up a vehicle, maintenance and road service vehicles, and animal control vehicles on duty, all when displaying flashing lights. Violating it is an infraction, or a class A misdemeanor if personal injury results.",
        trap:
          "Move over laws are widely believed to cover police and ambulances only. Alaska's covers tow trucks and road service vehicles too.",
        excerptKey: "as-move-over-one-lane",
        sourceLabel: "Alaska Statutes AS 28.35.185(a)(2)",
        sourceUrl: AS28,
        commonlyMissed: true,
      },
      {
        id: "ak_s5_32",
        topic: "signals",
        question:
          "What must a pedestrian do when a steady upraised hand appears while they are already halfway across?",
        choices: [
          "Proceed across the roadway",
          "Stop where they are and wait",
          "Move to the center island and wait for the next WALK",
          "Return to the curb they started from",
        ],
        correctIndex: 0,
        explanation:
          "Pedestrians already crossing when the signal comes on proceed across the roadway. The steady upraised hand forbids leaving the sidewalk or entering the roadway; it does not strand anyone in the middle.",
        context:
          "The flashing upraised hand works the same way: those already in the roadway may proceed to the other side. Only the version with a countdown timer permits a new crossing to begin, and only if it can be completed before the timer reaches zero.",
        trap:
          "Turning back is more dangerous than finishing, because the drivers who have started moving are watching the space ahead of you rather than behind.",
        excerptKey: "ped-steady-hand",
        sourceLabel: "Alaska Driver Manual - Pedestrian Signals",
        sourceUrl: hb(57),
      },
      {
        id: "ak_s5_33",
        topic: "speed",
        question:
          "What does the manual say happens to fines for traffic offenses committed in a designated traffic safety corridor?",
        choices: [
          "They are reduced for first offenses",
          "They are doubled",
          "They are tripled",
          "They are unchanged, but points double",
        ],
        correctIndex: 1,
        explanation:
          "Fines for traffic offenses occurring in a designated traffic safety corridor are doubled. The designation exists to promote traffic safety on stretches with a bad record.",
        context:
          "Illegal passing in a traffic safety corridor has its own line in the point schedule at four points. The corridor changes the penalty, not the speed limit.",
        trap:
          "Points are not doubled by the designation, and the manual does not say they are. The doubling applies to fines.",
        excerptKey: "traffic-safety-corridor",
        sourceLabel: "Alaska Driver Manual - Speed Limitation Law",
        sourceUrl: hb(34),
      },
      {
        id: "ak_s5_34",
        topic: "licensing",
        question:
          "How long may a non-resident aged 16 or over drive in Alaska on another state's license?",
        choices: [
          "Indefinitely, if they do not become a resident",
          "30 days",
          "90 days after entering the state",
          "Six months",
        ],
        correctIndex: 2,
        explanation:
          "An Alaska driver license must be obtained by the end of a 90-day period after entry into the state. The exemption for a valid out-of-state license runs out then.",
        context:
          "Members of the armed forces and their spouses over 18 who keep permanent residence in another state are exempt, but their other dependants are not. Once you do apply, the written test is required even though the driving test usually is not.",
        trap:
          "Ninety days is short, and the clock starts on entry rather than on establishing residence. Alaska drivers who moved from other states report this catching them out.",
        excerptKey: "nonresident-90-days",
        sourceLabel: "Alaska Driver Manual - Who Is Exempt?",
        sourceUrl: hb(6),
      },
      {
        id: "ak_s5_35",
        topic: "rules",
        question:
          "How far back must you stay when following an emergency vehicle that is responding to an emergency?",
        choices: [
          "100 feet",
          "200 feet",
          "300 feet",
          "500 feet",
        ],
        correctIndex: 3,
        explanation:
          "Five hundred feet. The same figure sets the no-parking distance from fire apparatus that has stopped and is displaying flashing red or blue lights.",
        context:
          "The rest of the emergency-vehicle rules: yield to an approaching emergency vehicle from any direction by moving to the lane away from it, and where that is impossible, slow to a reasonable speed and drive safely around the scene. Driving over a fire hose without a department official's consent brings a $100 fine and two points.",
        trap:
          "Five hundred feet is much further than it feels. Following close behind an ambulance to use the gap it opens is both dangerous and specifically unlawful.",
        excerptKey: "emergency-follow-500",
        sourceLabel: "Alaska Driver Manual - Following Emergency Vehicle",
        sourceUrl: hb(76),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions mixed the way the real Alaska DMV knowledge test mixes them, with no hints beyond what the exam gives you. The real thing is 20 questions in 25 minutes and you need 16 right.",
    questions: [
      {
        id: "ak_s6_01",
        topic: "signals",
        question:
          "You are first in line at a red light. The signal changes to green. What must you do before moving?",
        choices: [
          "Check that the intersection is clear and yield to anyone still in it",
          "Wait three seconds",
          "Sound your horn to warn cross traffic",
          "Nothing; the green gives you the right of way",
        ],
        correctIndex: 0,
        explanation:
          "Green means go if the intersection is clear. You yield to pedestrians and vehicles still in the intersection or entering it with the right of way.",
        context:
          "The manual lists this among the situations where you must yield: at a signaled intersection, when the light turns green, yield to pedestrians and vehicles caught in the intersection.",
        trap:
          "A three-second pause is a good habit and not a rule. What the manual requires is that you look.",
        excerptKey: "yield-green-caught",
        sourceLabel: "Alaska Driver Manual - You Must Yield in These Situations",
        sourceUrl: hb(40),
      },
      {
        id: "ak_s6_02",
        topic: "speed",
        question:
          "What is the unposted speed limit in an Alaska school zone?",
        choices: [
          "30 mph",
          "25 mph",
          "20 mph",
          "15 mph",
        ],
        correctIndex: 2,
        explanation:
          "Twenty miles an hour, the same figure Alaska uses for a business district.",
        context:
          "The manual's school crosswalk signs repeat it: reduce speed to 20 as marked, and slow to 20 for school children. Speeding in a school zone or playground crosswalk is six points.",
        trap:
          "The residential default of 25 does not apply inside a school zone. The zone is lower than the street around it.",
        excerptKey: "speed-limits-table",
        sourceLabel: "Alaska Driver Manual - Speed Laws",
        sourceUrl: hb(34),
      },
      {
        id: "ak_s6_03",
        topic: "impairment",
        question:
          "How long is a first administrative revocation for a .08 breath result or a refusal?",
        choices: [
          "One year",
          "30 days",
          "60 days",
          "90 days",
        ],
        correctIndex: 3,
        explanation:
          "Ninety days for a first offense. It rises to one year with a prior conviction, three years with two, and five years with three or more.",
        context:
          "The under-21 revocation ladder is different and starts at 30 days for any measurable alcohol. Both are imposed by the Division and both survive a dismissal or an acquittal in court.",
        trap:
          "Thirty days is the under-21 first offense figure. The .08 and refusal figure is 90.",
        excerptKey: "dui-revocation-90-days",
        sourceLabel: "Alaska Driver Manual - Administrative Revocations",
        sourceUrl: hb(20),
      },
      {
        id: "ak_s6_04",
        topic: "signs",
        question:
          "What shape and color is a sign that warns of a school area or school crosswalk?",
        choices: [
          "An orange rectangle",
          "A white rectangle with black lettering",
          "A yellow diamond",
          "A five-sided black-on-yellow sign",
        ],
        correctIndex: 3,
        explanation:
          "Five-sided signs warn of school areas and school crosswalks requiring reduced speed, and they are black on yellow.",
        context:
          "The shape is what makes them distinctive - no other sign in the system uses five sides. The instruction attached is to prepare to stop for pedestrians.",
        trap:
          "Warning signs generally are yellow diamonds. School is the exception that gets its own shape.",
        excerptKey: "sign-school",
        sourceLabel: "Alaska Driver Manual - School Sign",
        sourceUrl: hb(44),
      },
      {
        id: "ak_s6_05",
        topic: "rules",
        question:
          "Where does the manual say you should be while waiting to make a left turn at a signal?",
        choices: [
          "In the intersection but not past its center, with the front wheels straight",
          "Behind the stop line until a gap appears",
          "In the shared center lane",
          "Past the center of the intersection, with wheels turned left",
        ],
        correctIndex: 0,
        explanation:
          "The manual tells you not to proceed past the center of the intersection and to keep the front wheels straight while waiting.",
        context:
          "Straight wheels matter because a rear-end impact with the wheels turned pushes you into the oncoming lane. The rest of the sequence is to wait for the signal cue, wait for oncoming vehicles, and look out of the left window for pedestrians while checking the turn path.",
        trap:
          "Pre-turning the wheels feels efficient and is the single most dangerous habit in a left-turn queue.",
        excerptKey: "left-turn-wheels-straight",
        sourceLabel: "Alaska Driver Manual - Left Turn",
        sourceUrl: hb(36),
      },
      {
        id: "ak_s6_06",
        topic: "safety",
        question:
          "Approaching a curve where you cannot see clearly ahead, what should you do?",
        choices: [
          "Maintain speed and stay in the center of your lane",
          "Slow down",
          "Accelerate through to reduce time in the curve",
          "Move toward the centerline for a better view",
        ],
        correctIndex: 1,
        explanation:
          "Always slow down near a curve or an area where you cannot see clearly ahead. It is one of the manual's short list of things a driver should always do.",
        context:
          "The same principle runs through the whole speed chapter: you may not drive faster than will permit you to stop within the assured clear distance ahead, and a curve is exactly where that distance shrinks.",
        trap:
          "Moving toward the centerline for a view is on the Do Not Pass list for a reason. It puts you into the path of whatever is coming.",
        excerptKey: "slow-near-curve",
        sourceLabel: "Alaska Driver Manual - Check Your Driving Habits",
        sourceUrl: hb(86),
      },
      {
        id: "ak_s6_07",
        topic: "rightOfWay",
        question:
          "You are entering a roundabout at the same moment as a vehicle to your right that is also entering. Who goes?",
        choices: [
          "Neither; both stop",
          "You do, since you are further round",
          "The vehicle on your right",
          "Whoever is traveling faster",
        ],
        correctIndex: 2,
        explanation:
          "If another vehicle arrives at the same time, yield to it if it is on your right. That is the tie-breaker after the main rule, which is to yield to anything already in the circle.",
        context:
          "You enter to the right of the center island when there is a gap, you do not stop once inside, and you yield to pedestrians and cyclists in the roundabout and at the marked crosswalk as you exit.",
        trap:
          "Stopping inside the circle is what the manual specifically tells you not to do, and it is the answer that sounds cautious.",
        excerptKey: "roundabout-yield-in-circle",
        sourceLabel: "Alaska Driver Manual - Roundabouts",
        sourceUrl: hb(39),
      },
      {
        id: "ak_s6_08",
        topic: "licensing",
        question:
          "What must a 17-year-old provide before the DMV will issue a provisional license?",
        choices: [
          "A letter from a school principal",
          "Proof of vehicle ownership",
          "A driver education certificate",
          "Certification of at least 40 hours of driving experience, including 10 in challenging conditions",
        ],
        correctIndex: 3,
        explanation:
          "A parent, legal guardian or employer must certify at least 40 hours of driving experience, including at least 10 hours in progressively challenging circumstances such as inclement weather and night driving.",
        context:
          "The other conditions are a valid permit held for six months and no traffic conviction in the six months before applying. Parental consent is required on every driving credential application for anyone under 18.",
        trap:
          "Alaska does not require a driver education course for the provisional license. The 40 hours are certified by a parent, guardian or employer, not by a school.",
        excerptKey: "provisional-40-hours",
        sourceLabel: "Alaska Driver Manual - Provisional Licenses",
        sourceUrl: hb(9),
      },
      {
        id: "ak_s6_09",
        topic: "sharing",
        question:
          "Where should a pedestrian walk on a highway with no sidewalk?",
        choices: [
          "On the left, facing oncoming traffic",
          "On whichever side has the wider shoulder",
          "In the traffic lane, as far right as possible",
          "On the right, with traffic",
        ],
        correctIndex: 0,
        explanation:
          "Walk on the left side of the highway, facing oncoming traffic. Seeing what is coming is the whole point.",
        context:
          "The manual's pedestrian responsibilities also cover crossing only at crosswalks, obeying traffic signals, looking for turning vehicles before stepping out, and wearing light-colored clothing when walking alongside the roadway at night.",
        trap:
          "Cyclists do the opposite: bicyclists travel in the same direction as motor vehicles. Walking and riding follow different rules.",
        excerptKey: "pedestrian-walk-facing",
        sourceLabel: "Alaska Driver Manual - Your Responsibility as a Pedestrian",
        sourceUrl: hb(49),
      },
      {
        id: "ak_s6_10",
        topic: "emergencies",
        question:
          "Within how many days must a crash be reported to the Division of Motor Vehicles?",
        choices: ["5 days", "10 days", "15 days", "30 days"],
        correctIndex: 1,
        explanation:
          "Ten days. The report can be filed electronically through the DMV website or on a 12-209 Crash Report form, and it is not required if a police officer investigated the crash.",
        context:
          "Two other clocks run alongside it. A certificate of insurance goes to the DMV within 15 days on any crash with $501 or more of property damage, even if you gave proof to the officer at the scene. And police must be called immediately where there is injury or $2,000 or more of damage.",
        trap:
          "The 10-day DMV report and the 15-day insurance certificate are separate obligations with separate deadlines, and neither replaces the other.",
        excerptKey: "crash-report-10-days",
        sourceLabel: "Alaska Driver Manual - What to Do in Case of Every Crash",
        sourceUrl: hb(15),
      },
      {
        id: "ak_s6_11",
        topic: "rules",
        question:
          "What does a dashed white line between two lanes tell you?",
        choices: [
          "It separates opposing traffic",
          "Lane changes are not restricted there",
          "Lane changes are discouraged there",
          "It marks the edge of the pavement",
        ],
        correctIndex: 1,
        explanation:
          "Dashed white lines separate lanes of travel where changing lanes is not restricted and where the lane use is not specified.",
        context:
          "Solid white lines mean the opposite: they mark lanes specified for certain uses where changing lanes is to be discouraged, and they also mark the outside edge of the pavement or the edge of the shoulder. Dashed lines are permissive, solid white restrictive, solid yellow prohibitive.",
        trap:
          "Yellow, not white, separates opposing traffic. If the line between you and the next lane is white, everything in it is going your way.",
        excerptKey: "markings-white-dashed",
        sourceLabel: "Alaska Driver Manual - Pavement Markings",
        sourceUrl: hb(61),
      },
      {
        id: "ak_s6_12",
        topic: "signs",
        question:
          "You see a black-on-white rectangular sign reading TRUCKS MUST USE RIGHT LANE. What kind of sign is it?",
        choices: [
          "A guide sign",
          "An advisory sign with no legal force",
          "A warning sign",
          "A regulatory sign, which can be enforced with a citation",
        ],
        correctIndex: 3,
        explanation:
          "Black or red on white is the regulatory family. Regulatory signs give an instruction backed by statute, regulation or local ordinance, and violating one can bring a traffic citation.",
        context:
          "The manual pictures this exact sign in its regulatory group, alongside no turn on red, use center lane only for left turns, keep right of this sign, weight limits and parking prohibitions.",
        trap:
          "\"Advisory\" is a real category on speed plates at curves and ramps, and those are yellow. A white rectangle is a rule.",
        excerptKey: "sign-regulatory",
        sourceLabel: "Alaska Driver Manual - Regulatory Sign",
        sourceUrl: hb(43),
      },
      {
        id: "ak_s6_13",
        topic: "impairment",
        question:
          "Which statement about alcohol and driving matches the Alaska Driver Manual?",
        choices: [
          "The type of drink makes no difference; what counts is the amount of alcohol",
          "Food in the stomach prevents impairment",
          "A tolerant drinker is safe to drive at a higher concentration",
          "Beer is less impairing than spirits for the same alcohol content",
        ],
        correctIndex: 0,
        explanation:
          "The type of alcohol consumed makes no difference to its effect on the body. Twelve ounces of beer, a 1.5-ounce shot of 80 proof spirits and 4 ounces of wine all contain the same amount of alcohol.",
        context:
          "The manual does say alcohol affects people differently at different times, according to physical and emotional condition, other drugs and the amount of food in the stomach. That is a reason not to trust your own judgment, not a defense.",
        trap:
          "Food slows absorption; it does not prevent impairment. And the manual notes that alcohol creates a false sense of confidence, which is what makes tolerance a dangerous thing to rely on.",
        excerptKey: "alcohol-type-no-difference",
        sourceLabel: "Alaska Driver Manual - Facts You Should Know About Alcohol",
        sourceUrl: hb(22),
      },
      {
        id: "ak_s6_14",
        topic: "safety",
        question:
          "Which is the safest place in a vehicle for children under 13?",
        choices: [
          "The front passenger seat with the airbag off",
          "The rear seats",
          "Whichever seat has a lap and shoulder belt",
          "The middle of the front bench seat",
        ],
        correctIndex: 1,
        explanation:
          "All children younger than 13 should be restrained in the rear seats of vehicles for optimal protection. The manual carries the American Academy of Pediatrics recommendation directly.",
        context:
          "The same recommendations put infants and toddlers rear-facing for as long as the seat allows, then forward-facing with a harness to the seat's limit, then in a booster until the vehicle belt fits properly - typically at 4 feet 9 inches and between 8 and 12 years old.",
        trap:
          "This is a best-practice recommendation rather than the statutory minimum, and the manual presents both. The law's floor is lower than the advice.",
        excerptKey: "aap-rear-seat",
        sourceLabel: "Alaska Driver Manual - Child Passenger Safety",
        sourceUrl: hb(28),
      },
      {
        id: "ak_s6_15",
        topic: "signals",
        question:
          "A steady yellow arrow appears for your turning movement. What does it mean?",
        choices: [
          "The arrow is about to become a green arrow",
          "Complete the turn quickly",
          "A red is about to appear: stop that movement unless you cannot stop safely",
          "Yield and turn",
        ],
        correctIndex: 2,
        explanation:
          "A red light is about to appear. You stop the movement in the indicated direction unless you are already within the intersection or so close that you cannot stop safely, in which case you proceed and make the turn.",
        context:
          "It is the arrow equivalent of a steady yellow ball. Its flashing counterpart is different again: a flashing yellow arrow permits the turn while requiring you to yield to oncoming traffic and pedestrians.",
        trap:
          "Steady yellow arrow and flashing yellow arrow look similar at a glance and mean opposite things. One says stop, the other says turn if it is clear.",
        excerptKey: "yellow-arrow",
        sourceLabel: "Alaska Driver Manual - Traffic Signals, Yellow Arrow",
        sourceUrl: hb(55),
      },
      {
        id: "ak_s6_16",
        topic: "rightOfWay",
        question:
          "An emergency vehicle is approaching from behind on a road with two lanes in your direction. What does the manual tell you to do first?",
        choices: [
          "Speed up to reach the next junction",
          "Move onto the shoulder and stop",
          "Stop where you are",
          "Move to the lane away from the emergency vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Yield by moving to the lane away from the emergency vehicle. If that is not possible, or there is only one lane in your direction, slow to a reasonable speed and drive safely around the scene.",
        context:
          "For an emergency vehicle approaching with lights on, whether or not a siren is sounding, the manual also requires you to slow, pull to the right-hand edge of the roadway clear of any intersection, and stop to let it pass.",
        trap:
          "Stopping dead in a live lane is a common panic response and it creates the obstruction the vehicle is trying to get past.",
        excerptKey: "emergency-move-lane-away",
        sourceLabel: "Alaska Driver Manual - Approaching Emergency Vehicles",
        sourceUrl: hb(76),
      },
      {
        id: "ak_s6_17",
        topic: "parking",
        question:
          "How close to the curb must your wheels finish when parallel parking in Alaska?",
        choices: [
          "Within 24 inches",
          "Within 18 inches",
          "Within 12 inches",
          "Within 6 inches",
        ],
        correctIndex: 2,
        explanation:
          "Within 12 inches of the near curb. It is a legal requirement, and it is also measured on the road test.",
        context:
          "The manual gives the four-step method: signal and stop level with the front vehicle about a foot and a half out, back with the wheel hard right to about 45 degrees, straighten and continue back, then turn hard left as your front bumper passes their rear bumper and pull forward to center in the space.",
        trap:
          "Alaska road-test candidates report examiners getting out and measuring. Twelve inches is a real number rather than a rough guide.",
        excerptKey: "parking-12-inches",
        sourceLabel: "Alaska Driver Manual - Parking",
        sourceUrl: hb(74),
      },
      {
        id: "ak_s6_18",
        topic: "sharing",
        question:
          "What is the correct following distance behind a motorcycle?",
        choices: [
          "Two seconds, because motorcycles stop faster",
          "The same four seconds you give any other vehicle",
          "Six seconds in all conditions",
          "One car length for every 10 mph",
        ],
        correctIndex: 1,
        explanation:
          "The same four-second following distance should be given to motorcyclists as to other vehicles. Following too closely can distract the rider's attention from the road ahead.",
        context:
          "More is needed when the surface is wet and slippery, because those conditions create stability problems for a motorcycle that a car does not have. Crosswinds and the wind blast from large trucks can also move a rider out of their line.",
        trap:
          "A motorcycle can stop in a shorter distance than a car under ideal conditions, which is the reasoning behind the wrong answer. It ignores the rider going down.",
        excerptKey: "motorcycle-four-second",
        sourceLabel: "Alaska Driver Manual - Motorcycles",
        sourceUrl: hb(52),
      },
      {
        id: "ak_s6_19",
        topic: "rules",
        question:
          "You are entering a freeway from an on-ramp. What does the manual tell you to do?",
        choices: [
          "Signal and move across all lanes at once",
          "Stop at the end of the ramp and wait for a gap",
          "Use the acceleration lane to reach cruising speed before merging",
          "Merge at whatever speed you reach by the end of the ramp",
        ],
        correctIndex: 2,
        explanation:
          "Use the acceleration lane to get up to cruising speed before attempting to merge into the traffic stream. Then yield to traffic already on the freeway.",
        context:
          "Leaving is the mirror image: keep moving on the expressway, move into the deceleration lane and slow down there rather than on the through lane. If you miss an exit, do not back up - go on to the next one.",
        trap:
          "Stopping at the end of a ramp is on the manual's list only as a last resort, and it warns you to be cautious of vehicles following you when you do. Merging slow is what causes rear-end collisions on ramps.",
        excerptKey: "freeway-acceleration-lane",
        sourceLabel: "Alaska Driver Manual - Entering the Controlled Access Highway-Freeway",
        sourceUrl: hb(70),
      },
      {
        id: "ak_s6_20",
        topic: "safety",
        question:
          "You have just driven through deep water. What should you do about the brakes?",
        choices: [
          "Pump them hard until they grip",
          "Stop and let them air-dry before continuing",
          "Nothing; modern brakes are sealed",
          "Test them lightly, then dry them by driving slowly in low gear while applying them lightly",
        ],
        correctIndex: 3,
        explanation:
          "Test the brakes lightly after driving through deep water. They may pull to one side or not hold at all, and you dry them by driving slowly in low gear while applying them lightly.",
        context:
          "The manual's flooding advice is not to drive through flooded areas at all: six inches of water reaches the bottom of most passenger cars, and two feet of moving water can carry away most vehicles including SUVs and pickups.",
        trap:
          "Wet brakes that pull to one side at the first hard stop are how a puddle becomes a crash. The time to find out is a light test at low speed, not a real stop.",
        excerptKey: "wet-brakes",
        sourceLabel: "Alaska Driver Manual - Emergencies, Wet Brakes",
        sourceUrl: hb(78),
      },
      {
        id: "ak_s6_21",
        topic: "licensing",
        question:
          "Where does the manual say the material for the written knowledge test comes from?",
        choices: [
          "Only information found in the manual",
          "A national question bank used by all states",
          "The manual plus local municipal ordinances",
          "The manual and Alaska Statutes Title 28",
        ],
        correctIndex: 0,
        explanation:
          "The written test covers only information found in this manual, including traffic laws, safe driving practices and highway sign recognition. Nothing outside the book is examinable.",
        context:
          "The manual may not be used during the test. If you can understand English but have difficulty reading, you may bring someone to read the questions aloud, but you must answer them yourself. The DMV also publishes a free practice knowledge test online.",
        trap:
          "The manual being the whole syllabus cuts both ways: everything in it is fair game, including the point schedule, the insurance figures and the DUI costs.",
        excerptKey: "written-scope",
        sourceLabel: "Alaska Driver Manual - Examinations, Written",
        sourceUrl: hb(11),
      },
      {
        id: "ak_s6_22",
        topic: "signs",
        question:
          "What does a white-on-green sign give you?",
        choices: [
          "An instruction backed by law",
          "A warning of a hazard",
          "Destination, route guidance and place names",
          "The location of a service",
        ],
        correctIndex: 2,
        explanation:
          "Guide signs are white on green and carry destinations, route guidance and place names. The manual asks you to pay special attention to the mileage information on them.",
        context:
          "That mileage matters more in Alaska than in most places. The distance to the next town on a green sign may also be the distance to the next fuel, food or cell coverage.",
        trap:
          "Services get their own color - white on blue. Green tells you where somewhere is; blue tells you what is there.",
        excerptKey: "sign-guide",
        sourceLabel: "Alaska Driver Manual - Guide Sign",
        sourceUrl: hb(44),
      },
      {
        id: "ak_s6_23",
        topic: "impairment",
        question:
          "Which drivers does Alaska's implied consent law apply to?",
        choices: [
          "Only drivers with a previous DUI",
          "Only drivers who have signed a consent form",
          "Everyone who operates or drives a motor vehicle in the state",
          "Only Alaska license holders",
        ],
        correctIndex: 2,
        explanation:
          "Consent attaches to the act of operating or driving a motor vehicle in Alaska. No form is signed and no license class is required.",
        context:
          "The law lets an officer require a breath sample after a lawful DUI arrest, and blood or urine where a crash has caused death or serious physical injury. A separate provision allows a portable preliminary breath test at the scene where there is probable cause.",
        trap:
          "A visitor driving on another state's license is covered too. The trigger is driving in Alaska, not holding an Alaska license.",
        excerptKey: "implied-consent",
        sourceLabel: "Alaska Driver Manual - Implied Consent",
        sourceUrl: hb(18),
      },
      {
        id: "ak_s6_24",
        topic: "rightOfWay",
        question:
          "A pedestrian steps into a marked crosswalk in front of you. What does the manual say about your options?",
        choices: [
          "You have the right of way if the light is green for you",
          "You may sound the horn and continue at reduced speed",
          "You may proceed if you can pass behind them",
          "You must yield; do not drive to make a pedestrian yield to you",
        ],
        correctIndex: 3,
        explanation:
          "The manual is direct: do not drive to make a pedestrian yield to you - the motorist should always yield to the pedestrian.",
        context:
          "Pedestrians have the right of way at marked crosswalks or at intersections, painted or not. You must also stop well back so drivers in other lanes can see the crossing pedestrian, and you must not pass on either side of a vehicle stopped at a crosswalk.",
        trap:
          "Passing behind a pedestrian who has already gone by feels harmless, and it removes the buffer if they turn back or a second person follows.",
        excerptKey: "crosswalk-never-pass",
        sourceLabel: "Alaska Driver Manual - Pavement Markings",
        sourceUrl: hb(61),
      },
      {
        id: "ak_s6_25",
        topic: "emergencies",
        question:
          "Your accelerator jams open. What does the manual tell you to do?",
        choices: [
          "Slap the pedal hard with your foot, use the brakes, shift to neutral, and concentrate on steering",
          "Pull the parking brake fully on",
          "Steer for the ditch at once",
          "Turn off the ignition immediately",
        ],
        correctIndex: 0,
        explanation:
          "The manual's list is short and ordered: slap the pedal hard with your foot, use the brakes, shift to neutral, and concentrate on steering.",
        context:
          "Shifting to neutral is what disconnects the engine from the wheels, which is why it appears before anything drastic. Turning off the ignition can lock the steering or kill the power assistance on many vehicles.",
        trap:
          "Killing the engine is the instinctive answer and is not on the manual's list, for the same reason it is not on the brake-failure list.",
        excerptKey: "accelerator-jammed",
        sourceLabel: "Alaska Driver Manual - Emergencies, Accelerator Jammed",
        sourceUrl: hb(78),
      },
      {
        id: "ak_s6_26",
        topic: "speed",
        question:
          "Which of these is the correct statement of Alaska's assured clear distance rule?",
        choices: [
          "You must be able to stop within the distance your headlights illuminate",
          "You may not drive faster than will permit you to stop within the assured clear distance ahead",
          "You must leave four seconds between you and the vehicle ahead",
          "You may not exceed the posted limit in any conditions",
        ],
        correctIndex: 1,
        explanation:
          "That is the wording of the rule in the Speed Limitation Law: a person may not drive on a highway at a speed greater than will permit them to stop within the assured clear distance ahead.",
        context:
          "The manual's four-second rule is a practical way of complying with it in traffic, and the night-driving advice about not overdriving your headlights is another. The rule itself is broader than either.",
        trap:
          "Both wrong-but-plausible options are real pieces of advice from the manual. The question asks for the legal rule, which is the general one.",
        excerptKey: "assured-clear-distance",
        sourceLabel: "Alaska Driver Manual - Speed Limitation Law",
        sourceUrl: hb(34),
      },
      {
        id: "ak_s6_27",
        topic: "safety",
        question:
          "What does the manual say about carbon monoxide?",
        choices: [
          "It is harmless in an open vehicle",
          "It has a strong smell that warns you",
          "It is colorless and odorless, and paralyzes before it kills",
          "It is only a risk in vehicles built before 1980",
        ],
        correctIndex: 2,
        explanation:
          "It is a colorless, odorless, poisonous gas from vehicle exhaust, and the manual says it paralyzes before it kills. The symptoms are headache, dizziness, nausea and vomiting.",
        context:
          "Prevention is a tight exhaust system and adequate fresh air circulation. The manual tells you never to run a vehicle in a closed garage, never to park and run the heater with the windows closed, and to move a victim into fresh air.",
        trap:
          "There is no warning smell, which is exactly why the manual has to list the symptoms. Waiting to notice something is not a defense.",
        excerptKey: "carbon-monoxide",
        sourceLabel: "Alaska Driver Manual - Carbon Monoxide",
        sourceUrl: hb(81),
      },
      {
        id: "ak_s6_28",
        topic: "rules",
        question:
          "What does Alaska law require of the load on your vehicle?",
        choices: [
          "It must be covered only if it is more than a cubic yard",
          "It must be tied down only on highways",
          "Nothing, if it is inside the vehicle",
          "It must be secured; traveling with an unsecured load is illegal",
        ],
        correctIndex: 3,
        explanation:
          "It is illegal to travel Alaska's roads with an unsecured load. Up to 45 percent of the state's roadside litter comes from uncovered or unsecured truck loads.",
        context:
          "Roadside litter is a hazard to other motorists as well as an eyesore. The penalty for littering in Alaska runs to a fine of up to $1,000, up to 90 days of imprisonment, and a court-imposed order to gather litter in a specified area.",
        trap:
          "The rule is not limited to commercial trucks. Anything on a roof rack, in an open bed or on a trailer has to be secured.",
        excerptKey: "unsecured-load",
        sourceLabel: "Alaska Driver Manual - Littering",
        sourceUrl: hb(91),
      },
      {
        id: "ak_s6_29",
        topic: "sharing",
        question:
          "How does a bicyclist signal a right turn under the manual's list of hand signals?",
        choices: [
          "Left arm straight out to the left",
          "Left arm extended and bent down at the elbow",
          "Right arm raised vertically",
          "Left arm extended and bent up at the elbow, or the right arm straight out to the right",
        ],
        correctIndex: 3,
        explanation:
          "Either works: the right arm fully extended to the right, or the left arm extended and bent up at the elbow.",
        context:
          "The other two signals in the set are a left turn - left arm fully extended to the left - and a stop, which is the left arm extended and bent down at the elbow. Bicyclists are required to use hand signals to signal a turn, and drivers use the same signals when a turn indicator cannot be seen.",
        trap:
          "The bent-arm signals are the ones people confuse. Up at the elbow is a right turn; down at the elbow is a stop.",
        excerptKey: "bicycle-hand-signals",
        sourceLabel: "Alaska Driver Manual - Bicyclists, Safety Tips",
        sourceUrl: hb(50),
      },
      {
        id: "ak_s6_30",
        topic: "signals",
        question:
          "You approach a stop sign that also has a flashing red beacon above it. What does the beacon add?",
        choices: [
          "It converts the stop sign into a yield",
          "Nothing to the requirement; it supplements the sign for emphasis",
          "It means the sign applies only when flashing",
          "It requires you to wait for a green before proceeding",
        ],
        correctIndex: 1,
        explanation:
          "Individual flashing red beacons may be suspended over the roadway or located above stop signs, supplementing the sign where there is a need for special emphasis. The requirement is the same as the sign's: stop, look in all directions, and go when it is safe.",
        context:
          "The manual treats a flashing red exactly as a stop sign in light form. Its counterpart, the flashing yellow, means reduce speed and exercise caution while yielding to anyone in the intersection.",
        trap:
          "Beacons are usually installed at intersections with a poor collision record. The signal is not adding a rule; it is telling you the intersection has a history.",
        excerptKey: "flashing-red-beacons",
        sourceLabel: "Alaska Driver Manual - Traffic Signals, Flashing Red Ball",
        sourceUrl: hb(56),
      },
    ],
  },
];
