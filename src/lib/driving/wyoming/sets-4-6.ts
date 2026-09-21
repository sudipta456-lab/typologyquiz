import type { DrivingTestSet } from "../types";

// Sets 4 to 6 of the Wyoming bank. Sources, gaps and the three
// handbook-versus-statute conflicts are documented in the header of
// sets-1-3.ts and in docs/driving/research/wyoming.md.
//
// Set 5 is built from what Wyoming learners and drivers actually report going
// wrong, cross-checked against the official sources before any of it was
// written into a question:
//
//  - The speed limit begins at the sign, not before it. Wyoming drivers say
//    this is the ticket out-of-state visitors argue about most, and the folk
//    belief that the Highway Patrol allows 5 or 10 over has no basis in
//    W.S. 31-5-301, which states maximum lawful speeds with no tolerance.
//  - Driver education waives the SKILLS test, not the written one. More than
//    one Wyoming teen has arrived at an exam station believing otherwise.
//  - The permit has to be held 10 days, and the intermediate licence six
//    months or until 17. Those two numbers get swapped constantly, and the
//    10-day rule is on WYDOT's own page rather than in the manual at all.
//  - Wyoming does not salt its roads, so ice survives on pavement that looks
//    merely wet, and I-25 and I-80 close to high-profile vehicles for wind
//    rather than for snow. The manual's black-ice and wind sections are the
//    official version of what drivers describe.
//  - The move-over rule on a two-lane road is 20 mph BELOW the posted limit,
//    not down to 20 mph.

const HB =
  "https://www.dot.state.wy.us/files/live/sites/wydot/files/shared/Driver_Services/Help%20Documents%20and%20Manuals/2021_DriverManual_web_ClassC_w%20cover.pdf";
const hb = (page: number) => `${HB}#page=${page}`;
const ws = (page: number) => `https://www.wyoleg.gov/statutes/compress/title31.pdf#page=${page}`;
const PERMITS =
  "https://www.dot.state.wy.us/home/driver_license_records/driver-license/learner-permits.html";
const TESTING =
  "https://www.dot.state.wy.us/home/driver_license_records/driver-license/testing.html";

export const wyomingSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Every chapter of the Wyoming manual gets a turn here, from licence classes and suspensions to blizzards, blind spots and the parts of Title 31 the book never quotes.",
    questions: [
      {
        id: "wy_s4_01",
        topic: "licensing",
        question:
          "What does a Wyoming Class C non-commercial licence authorise you to operate?",
        choices: [
          "Any vehicle at all, including motorcycles",
          "Only vehicles under 10,000 pounds",
          "A single vehicle or combination, except motorcycles, with a GVWR under 26,001 pounds, towing nothing over 10,000 pounds GVWR",
          "Passenger cars only, with no towing permitted",
        ],
        correctIndex: 2,
        explanation:
          "The manual's definition turns on two weight figures and one exclusion: under 26,001 pounds GVWR for the vehicle or combination, nothing towed above 10,000 pounds GVWR, and motorcycles are not included.",
        context:
          "A Class M licence is issued solely for motorcycles, though an M classification can be added to a Class A, B or C licence. Wyoming publishes a separate Motorcycle Operator Manual for those requirements. Restriction codes then narrow what any licence allows, and B for corrective lenses is the one most learners meet.",
        trap:
          "Class C is not a car-only licence. It covers a wide range of vehicles and combinations, which is why the weight figures matter more than the vehicle type.",
        excerptKey: "class-c-scope",
        sourceLabel: "Wyoming Driver License Manual - Your Wyoming license",
        sourceUrl: hb(6),
      },
      {
        id: "wy_s4_02",
        topic: "rules",
        question:
          "What does the Wyoming manual require of you on a two-lane road with one lane in each direction?",
        choices: [
          "Drive on the right side and yield the left half of the roadway to oncoming traffic",
          "Straddle the centre line when no traffic is present",
          "Drive in the middle of your lane except on curves",
          "Use the left half whenever the right is rough",
        ],
        correctIndex: 0,
        explanation:
          "Right side, and yield the left half to oncoming traffic. It sounds obvious until you meet a rough shoulder, a cyclist or a wide vehicle, which is exactly when drivers drift over.",
        context:
          "The manual then covers multilane roads separately: drive in the lane with the smoothest flow, use the middle lanes where there are three or more in your direction, and keep the left lane for going faster, passing or turning left. Slower traffic and right-turning traffic belong in the right lane.",
        trap:
          "An empty road does not change the rule. Yielding the left half is not conditional on someone being there to yield it to.",
        excerptKey: "lane-use-two-lane",
        sourceLabel: "Wyoming Driver License Manual - Use of lanes",
        sourceUrl: hb(63),
      },
      {
        id: "wy_s4_03",
        topic: "safety",
        question:
          "Up to what age does Wyoming's child restraint law apply?",
        choices: [
          "Until the child's fourth birthday",
          "Until the child's sixth birthday",
          "Until the child's twelfth birthday",
          "Until the child's ninth birthday",
        ],
        correctIndex: 3,
        explanation:
          "A child who has not reached his or her ninth birthday must be properly secured in a child safety restraint system. That is the manual's key point and W.S. 31-5-1303(a) puts it in law.",
        context:
          "The restraint goes in a seat other than the front seat, unless the vehicle has only one row or all the belts behind the front seat are already in use by other child passengers. A rear-facing infant seat must never be placed in front of an active airbag. There is an exemption where a lap and shoulder belt already fits properly across the child's collarbone, chest and hips.",
        trap:
          "Ninth birthday, not ninth year, and it is a primary offence - non-use or misuse is reasonable suspicion to stop the vehicle. The ordinary belt law is secondary and cannot be the sole reason for a stop.",
        excerptKey: "child-restraint-age",
        sourceLabel: "Wyoming Driver License Manual - Child restraints",
        sourceUrl: hb(30),
        commonlyMissed: true,
      },
      {
        id: "wy_s4_04",
        topic: "signs",
        question:
          "What is an Emergency Notification Sign at a Wyoming railroad crossing for?",
        choices: [
          "It marks the nearest hospital",
          "It gives a number to call to stop train traffic when there is an obstruction on the tracks or a problem at the crossing",
          "It warns of a crossing with no gates",
          "It records how many trains use the crossing each day",
        ],
        correctIndex: 1,
        explanation:
          "The ENS is for emergencies that require stopping train traffic - an obstruction on the tracks, or a fault such as lights or gates that are not working properly. The manual describes exactly that use.",
        context:
          "It is the sign you need if your vehicle stalls on the tracks, and it pairs with the manual's instruction for that situation: get everyone out and far away from the tracks immediately, never try to start the vehicle or push it clear with people inside, and call 911.",
        trap:
          "It is not a warning sign about the crossing. It is a way of reaching the railroad, and it is the reason knowing it exists matters before you need it.",
        excerptKey: "sign-ens",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Emergency Notification Sign",
        sourceUrl: hb(96),
      },
      {
        id: "wy_s4_05",
        topic: "rightOfWay",
        question:
          "You are already inside a roundabout in Wyoming when an ambulance approaches with lights and siren. What does the manual say?",
        choices: [
          "Stop where you are and let it pass",
          "Reverse out of the roundabout",
          "Speed up and take the first exit at speed",
          "Continue to your exit, leave the roundabout, then pull over to the right",
        ],
        correctIndex: 3,
        explanation:
          "Finish and then pull over. The manual says to continue to your exit, leave the roundabout and pull over to the right so the emergency vehicle can pass. If you have not entered yet, pull over and let it pass first.",
        context:
          "It follows the same principle as the general rule that you must not stop in an intersection when yielding to an emergency vehicle. A stopped car inside a circulating roundabout blocks the very route the ambulance needs.",
        trap:
          "The instinct to stop immediately is wrong here. Stopping in the circle is worse than taking a few more seconds to clear it.",
        excerptKey: "roundabout-emergency",
        sourceLabel: "Wyoming Driver License Manual - Right-of-way involving emergency vehicles",
        sourceUrl: hb(49),
      },
      {
        id: "wy_s4_06",
        topic: "speed",
        question:
          "What does Wyoming's basic speed rule say, above and beyond any posted limit?",
        choices: [
          "No person shall drive faster than is reasonable and prudent under the conditions, having regard to the actual and potential hazards",
          "The posted limit may be exceeded by 10 percent in good conditions",
          "The posted limit is a target speed that traffic should maintain",
          "Speed is only an offence when a crash results",
        ],
        correctIndex: 0,
        explanation:
          "W.S. 31-5-301(a) sits above every number in the table. Reasonable and prudent for the actual conditions is the standard, so you can be speeding at 60 in a posted 65 if the road is iced.",
        context:
          "The same subsection names the places it expects you to slow down anyway: approaching and crossing an intersection or railroad grade crossing, going around a curve, approaching a hillcrest, on a narrow or winding roadway, and when weather or highway conditions create special hazards.",
        trap:
          "There is no percentage tolerance in Wyoming law. The figures in the statute are described as maximum lawful speeds, and the folk belief that the Highway Patrol allows a few over is not a rule you can cite.",
        excerptKey: "basic-speed-rule",
        sourceLabel: "Wyoming Statutes 31-5-301(a) - Maximum speed limits",
        sourceUrl: ws(181),
        commonlyMissed: true,
      },
      {
        id: "wy_s4_07",
        topic: "impairment",
        question:
          "A Wyoming driver is arrested for DWUI, blows 0.11, and the criminal charge is later dismissed in court. What happens to the Administrative Per Se suspension?",
        choices: [
          "It is cancelled with the charge",
          "It is reduced to 30 days",
          "It stands - dismissal of the DWUI in court does not affect it",
          "It is converted to a written warning",
        ],
        correctIndex: 2,
        explanation:
          "It stands. The manual states it flatly: dismissal of the DWUI in court will not affect the Administrative Per Se suspension. The two run on separate tracks.",
        context:
          "The administrative suspension is triggered by the chemical test result of 0.08 or greater following the arrest and runs 90 days. If you are later convicted, time served on the administrative suspension is credited toward the DWUI suspension - but an acquittal does not give it back.",
        trap:
          "Winning in court is the outcome people assume undoes everything. The licence action belongs to the department, not the court, and it survives the criminal case.",
        excerptKey: "admin-per-se-dismissal",
        sourceLabel: "Wyoming Driver License Manual - Administrative Per Se Suspension",
        sourceUrl: hb(19),
        commonlyMissed: true,
      },
      {
        id: "wy_s4_08",
        topic: "parking",
        question:
          "Which of these is on the Wyoming manual's list of places it is not legal to park?",
        choices: [
          "Any space more than 100 feet from a corner",
          "Where the curb is painted yellow near intersections or driveways",
          "Any unmetered space in a business district",
          "On the shoulder of a rural highway under any circumstances",
        ],
        correctIndex: 1,
        explanation:
          "Yellow curb near intersections or driveways is on the manual's list, alongside sidewalks, intersections, crosswalks, bridges, tunnels, the roadway side of a parked vehicle, in front of a driveway, and within 15 feet of a fire hydrant.",
        context:
          "The list also covers spaces alongside or opposite street construction sites, anywhere official signs prohibit standing, stopping or parking, and disabled spaces unless you display a placard or disabled plates. W.S. 31-5-504 adds the ones the manual leaves out, including railroad tracks, controlled-access highways and the median of a divided highway.",
        trap:
          "A rural shoulder is not banned outright - W.S. 31-5-505 in fact requires you to get off the roadway when it is practicable, provided the vehicle stays visible for 200 feet each way.",
        excerptKey: "parking-yellow-curb",
        sourceLabel: "Wyoming Driver License Manual - Parking restrictions",
        sourceUrl: hb(59),
      },
      {
        id: "wy_s4_09",
        topic: "emergencies",
        question:
          "You are stranded in your car in a Wyoming blizzard. What does the manual tell you to do?",
        choices: [
          "Stay with the car, keep a window open for fresh air, and run the engine and heater sparingly",
          "Set out on foot toward the nearest lights",
          "Run the engine continuously to stay warm",
          "Seal all the windows to keep the heat in",
        ],
        correctIndex: 0,
        explanation:
          "Stay put, ventilate, and ration the engine. The manual's blizzard list starts with do not panic and stay with the car so you can be found more easily, then keep a window open for a bit of fresh air.",
        context:
          "The reason for the open window and the rationed engine is carbon monoxide, and the manual adds a step people forget: check that snow has not blocked the exhaust pipe. It also says to move around periodically, use the flashers, turn on the dome light at night, and take turns keeping watch if there is more than one of you.",
        trap:
          "Sealing the car in freezing wet snow is how the manual describes losing your oxygen supply, and running the engine flat out with a blocked exhaust is how carbon monoxide gets in.",
        excerptKey: "blizzard-carbon-monoxide",
        sourceLabel: "Wyoming Driver License Manual - Weather conditions, Blizzards",
        sourceUrl: hb(80),
      },
      {
        id: "wy_s4_10",
        topic: "sharing",
        question:
          "What does the Wyoming manual say about two motorcycles riding side by side in one lane?",
        choices: [
          "It is never permitted",
          "It is permitted only on interstate highways",
          "Up to three may ride abreast",
          "No more than two may be driven abreast in the same lane, and only by consent of both riders",
        ],
        correctIndex: 3,
        explanation:
          "Two is the maximum, and both riders have to agree to it. The manual states the number and the consent requirement in the same sentence.",
        context:
          "It sits alongside two other motorcycle rules in the manual: motorcycles are entitled to the same full lane width as any other vehicle, and a motorcycle may not overtake and pass any vehicle in the same lane, except another motorcycle. Together they explain why a car sharing a lane with a rider is unlawful.",
        trap:
          "Two abreast being legal for riders does not make it legal for you to join them. The allowance is between motorcycles.",
        excerptKey: "motorcycle-two-abreast",
        sourceLabel: "Wyoming Driver License Manual - Sharing the road safely, Motorcycles",
        sourceUrl: hb(69),
      },
      {
        id: "wy_s4_11",
        topic: "signals",
        question: "What does a flashing amber light mean in Wyoming?",
        choices: [
          "Stop and yield to all traffic",
          "Proceed with caution - it warns of a dangerous intersection or location",
          "The signal is about to turn red",
          "Traffic from the side has a green light",
        ],
        correctIndex: 1,
        explanation:
          "Caution, and a warning about the place itself. The manual says a flashing amber warns of a dangerous intersection or location, and W.S. 31-5-405(a)(ii) permits you to proceed through only with caution.",
        context:
          "Its partner is the flashing red, which carries the same force as a stop sign. Neither of these applies at railroad grade crossings - the statute carves those out and sends you to the railroad crossing rules instead.",
        trap:
          "A flashing amber is not a countdown to red. It is a steady state, often overnight, telling you the location has a history worth slowing for.",
        excerptKey: "signal-flashing-amber",
        sourceLabel: "Wyoming Driver License Manual - Traffic signals",
        sourceUrl: hb(97),
      },
      {
        id: "wy_s4_12",
        topic: "rules",
        question:
          "Your turn signals have failed. What is the correct hand and arm signal for a right turn in Wyoming?",
        choices: [
          "Hand and arm extended straight out horizontally",
          "Hand and arm extended downward from the elbow",
          "Hand and arm extended upward from the elbow",
          "Hand waved forward over the roof",
        ],
        correctIndex: 2,
        explanation:
          "Arm up from the elbow for a right turn. The manual and W.S. 31-5-219 agree: left is horizontal, right is upward, and downward means slowing or stopping.",
        context:
          "All hand signals are given from the left side of the vehicle, which is why the right-turn signal has to be an elbow bend rather than a point. The 100-foot signalling distance applies whether the signal is electrical or made by arm.",
        trap:
          "Horizontal is the left turn. Getting these two crossed sends every driver behind you the opposite of what you intend.",
        excerptKey: "hand-signals-statute",
        sourceLabel: "Wyoming Statutes 31-5-219 - Manner of giving hand and arm signals",
        sourceUrl: ws(163),
      },
      {
        id: "wy_s4_13",
        topic: "safety",
        question:
          "Which of these is on the Wyoming manual's list of people not required to wear a safety belt?",
        choices: [
          "Anyone travelling under 25 mph",
          "Anyone in the back seat",
          "Anyone on a journey under five miles",
          "A person with a written statement from a physician that a belt is not advisable for physical or medical reasons",
        ],
        correctIndex: 3,
        explanation:
          "A physician's written statement is on the list. So are a passenger vehicle not required to have belts under federal law, a postal carrier on duty, a person properly secured in a child restraint, and someone in a seat whose restraints are already all in use.",
        context:
          "The exemptions are narrow because Wyoming's belt rule is broad: all occupants of the vehicle including the driver, with the driver responsible for seeing it happens. W.S. 31-5-1402(e) sets the driver's fine at no more than $25 and a passenger's at no more than $10, and gives a $10 reduction in any other fine when everyone complied.",
        trap:
          "Distance and speed are not exemptions anywhere in Wyoming law, and the back seat is not exempt either.",
        excerptKey: "belt-exemptions",
        sourceLabel: "Wyoming Driver License Manual - Persons not required to wear a safety belt",
        sourceUrl: hb(32),
      },
      {
        id: "wy_s4_14",
        topic: "rightOfWay",
        question:
          "You are joining a Wyoming business district from a side road. What does the manual list among the required stops?",
        choices: [
          "You must stop when entering a business district from a side road",
          "You must yield but need not stop",
          "You must stop only if a sign is posted",
          "You must sound your horn before entering",
        ],
        correctIndex: 0,
        explanation:
          "It is on the manual's required-stops list, in the same entry as entering a street from a driveway, alley, building or parking lot. The manual cites W.S. 31-5-506 alongside it.",
        context:
          "The statute says where the stop happens: immediately before driving onto the sidewalk or the sidewalk area, and if there is no sidewalk area, at the point nearest the street where you can see approaching traffic. W.S. 31-5-223 then puts the yielding duty on you for everything already on the road you are joining.",
        trap:
          "No sign is needed. This is one of the stops Wyoming requires by law regardless of whether anything is posted.",
        excerptKey: "required-stops-list",
        sourceLabel: "Wyoming Driver License Manual - Required stops",
        sourceUrl: hb(50),
      },
      {
        id: "wy_s4_15",
        topic: "signs",
        question:
          "You see a diamond-shaped warning sign. What tells you whether it is a road hazard or a work zone?",
        choices: [
          "The size of the sign",
          "The color - yellow for most warnings, orange for construction and maintenance",
          "Whether the border is black or white",
          "Whether it is mounted on one post or two",
        ],
        correctIndex: 1,
        explanation:
          "Color separates them. The manual says most warning signs are yellow, but construction and maintenance warning signs are orange, so the same diamond shape carries two different meanings depending on its background.",
        context:
          "The distinction matters because it tells you what kind of hazard to expect. Yellow means something about the road itself - a curve, a crest, an animal crossing. Orange means people and equipment, and the manual asks for extra care through a work zone even where no work seems to be going on.",
        trap:
          "Shape alone will not get you there. Both are diamonds, and reading only the shape is what makes a driver arrive at a flagger's station at highway speed.",
        excerptKey: "sign-warning-colours",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Warning signs",
        sourceUrl: hb(95),
      },
      {
        id: "wy_s4_16",
        topic: "speed",
        question:
          "You are on a Wyoming state highway that is not an interstate, and there are no speed limit signs. What is the statutory maximum?",
        choices: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctIndex: 2,
        explanation:
          "Seventy. W.S. 31-5-301(b)(vii) sets 70 mph on state highways that are not interstate highways, and the manual's own table gives 70 mph for secondary highways.",
        context:
          "The full statutory ladder is worth holding as one picture: 20 in a school zone, 30 in an urban or residence district, 55 on an unpaved road, 65 on any other paved road, 70 on non-interstate state highways, 75 on interstates and 80 where designated. Everything below the interstate figures is easy to lose track of.",
        trap:
          "Sixty-five is the catch-all for a paved road that is not a state highway. The two figures are adjacent in the statute and easy to swap.",
        excerptKey: "speed-state-highways",
        sourceLabel: "Wyoming Statutes 31-5-301(b)(vii) - Maximum speed limits",
        sourceUrl: ws(181),
      },
      {
        id: "wy_s4_17",
        topic: "parking",
        question:
          "You have to make an emergency stop on a Wyoming highway. Where does the manual want the vehicle?",
        choices: [
          "With all four wheels off the pavement if possible, not on a hill or curve, with the emergency flashers on",
          "Half on the pavement so it stays visible",
          "In the nearest travel lane with the hazard lights on",
          "On the crest of a rise so approaching drivers see you sooner",
        ],
        correctIndex: 0,
        explanation:
          "All four wheels off the pavement where possible, away from any hill or curve where the car cannot easily be seen, flashers on. That is the manual's emergency parking instruction.",
        context:
          "Its interstate version goes further: get as far onto the right shoulder as you can with all four wheels well off the road, use the four-way flashers, and at night set out flares or reflectors. Even a flat tire is better driven slowly clear of a bridge or underpass than changed on one.",
        trap:
          "A crest feels visible and is the worst place to stop, because a driver coming over it has almost no distance in which to react.",
        excerptKey: "parking-emergency",
        sourceLabel: "Wyoming Driver License Manual - Parking, Emergency parking",
        sourceUrl: hb(59),
      },
      {
        id: "wy_s4_18",
        topic: "impairment",
        question:
          "How many moving violation convictions within a 12-month period will start a suspension in Wyoming?",
        choices: ["Two", "Three", "Six", "A fourth conviction triggers it, since three are allowed"],
        correctIndex: 3,
        explanation:
          "Three are allowed; the fourth conviction within a 12-month period brings the notice. The manual states both halves of that in one place.",
        context:
          "The suspension runs 90 days, and each further moving violation inside the same 12-month window adds another 90 days. The 12-month period is measured from the date of the offence, not the date of conviction. A moving violation is defined as an act or lack of control while the vehicle is in motion that results in a conviction.",
        trap:
          "You are allowed up to three, so counting the third as the trigger is the natural misreading. It is the fourth that does it.",
        excerptKey: "moving-violations-four",
        sourceLabel: "Wyoming Driver License Manual - Moving Violation Suspension",
        sourceUrl: hb(24),
      },
      {
        id: "wy_s4_19",
        topic: "emergencies",
        question:
          "Your car has broken down and you have stopped on the shoulder of a Wyoming highway. Which side do you get out on?",
        choices: [
          "Whichever side is closer to help",
          "The traffic side, so you are visible to drivers",
          "The side away from the traffic",
          "Stay inside with the doors locked in all cases",
        ],
        correctIndex: 2,
        explanation:
          "Away from traffic. The manual's breakdown list is stop with all four wheels on the shoulder, turn on the four-way flashers, and get out on the side of the vehicle away from the traffic.",
        context:
          "To signal for help, the manual says to tie a white cloth to an antenna or door handle and raise the hood or trunk lid. If the breakdown is on the interstate, it adds one more instruction in capitals: do not walk for help.",
        trap:
          "Being visible is not the same as being safe. Standing on the traffic side of a stopped car on a Wyoming interstate puts you in the lane where the closing speed is 75 or 80 mph.",
        excerptKey: "breakdown-exit-away",
        sourceLabel: "Wyoming Driver License Manual - Hazardous situations, Breakdowns",
        sourceUrl: hb(84),
      },
      {
        id: "wy_s4_20",
        topic: "licensing",
        question:
          "Your Wyoming licence expired three years ago. What does the manual say happens now?",
        choices: [
          "You may renew by mail with a late fee",
          "You must apply in person for a new licence and may be required to take all phases of the examination",
          "The licence is reinstated automatically once the fee is paid",
          "You may drive for 30 days while the renewal is processed",
        ],
        correctIndex: 1,
        explanation:
          "In person, and possibly the whole examination again - written test, vision screening and skills test. The manual says persons who let their licence expire must apply in person for a new licence on those terms.",
        context:
          "WYDOT's Testing page fixes the outer boundary: a written test is required when you have never been licensed in this or any other state, or when your licence has been expired for two years or more. Renewals inside the window are easier - over 21 you may renew in the 120 days before expiry, under 21 within 90 days.",
        trap:
          "Renewal by mail is available only once every other renewal period and only if the licence is current, so it is no help to an expired one.",
        excerptKey: "expired-licence",
        sourceLabel: "Wyoming Driver License Manual - Renewals of expired licenses",
        sourceUrl: hb(10),
      },
      {
        id: "wy_s4_21",
        topic: "sharing",
        question:
          "A deer steps into the road ahead of you on a Wyoming highway and a collision looks unavoidable. What does the manual advise?",
        choices: [
          "Swerve sharply around the animal",
          "Accelerate to clear the animal's path",
          "Flash your headlights to move it",
          "Do not swerve suddenly - brake as quickly as you safely can, keep control, and stay on the road",
        ],
        correctIndex: 3,
        explanation:
          "Do not swerve. The manual says your risk of personal injury may be greater if you do, and asks you to brake as hard as is safe while keeping the vehicle under control and on the road.",
        context:
          "Wyoming's animal collisions cluster in fall and spring during migration and around dusk and dawn. The manual's prevention list is high beams as often as possible at night, constant scanning of the roadside as well as the road, and extra caution near forests, water and posted deer crossings. If you do hit an animal, report it if the carcass is still on the highway.",
        trap:
          "Flashing your headlights can freeze the animal in place directly ahead of you, which the manual specifically warns about.",
        excerptKey: "animals-do-not-swerve",
        sourceLabel: "Wyoming Driver License Manual - Share with animals",
        sourceUrl: hb(73),
        commonlyMissed: true,
      },
      {
        id: "wy_s4_22",
        topic: "rules",
        question:
          "What does the Wyoming manual tell you to do before backing up?",
        choices: [
          "Walk behind the vehicle to check, then turn your head and body to look back rather than relying on mirrors",
          "Rely on the mirrors, which give the widest view",
          "Sound the horn twice and reverse briskly",
          "Reverse using the rear-view camera only",
        ],
        correctIndex: 0,
        explanation:
          "Walk behind it first, then look back over your shoulder. The manual is explicit that when you back up you should not depend on your mirrors, and should turn your head and body so you can see where you are going.",
        context:
          "It adds two mechanics: put your hand at the top of the steering wheel and back slowly, always prepared to stop. Backing is the manoeuvre where a small child is least visible from the driver's seat, which is why the walk-around comes first.",
        trap:
          "Mirrors and cameras both leave a blind area directly behind the vehicle. The manual asks for the physical check because no device replaces it.",
        excerptKey: "backing-walk-behind",
        sourceLabel: "Wyoming Driver License Manual - Backing",
        sourceUrl: hb(54),
      },
      {
        id: "wy_s4_23",
        topic: "signals",
        question:
          "You are facing a circular green light in Wyoming and want to turn left. What does the statute allow?",
        choices: [
          "You may turn only on a green arrow",
          "You may proceed straight or turn right or left unless a sign prohibits the turn, yielding to traffic and pedestrians lawfully in the intersection or an adjacent crosswalk",
          "You may turn only after the light has been green for five seconds",
          "You must wait for oncoming traffic to stop",
        ],
        correctIndex: 1,
        explanation:
          "A circular green permits all three movements unless a sign says otherwise, with a duty to yield attached. W.S. 31-5-403(a)(i)(A) states it, and the yielding covers vehicles and pedestrians lawfully in the intersection or an adjacent crosswalk.",
        context:
          "The separate left-turn rule still bites: W.S. 31-5-221 requires the turning driver to yield to any oncoming vehicle within the intersection or close enough to be an immediate hazard. So a green light gives you permission to turn and no priority while doing it.",
        trap:
          "Waiting for oncoming traffic to stop is not the rule - they will not, and they do not have to. You wait for a gap.",
        excerptKey: "signal-green-statute",
        sourceLabel: "Wyoming Statutes 31-5-403(a)(i) - Signal legend generally",
        sourceUrl: ws(186),
      },
      {
        id: "wy_s4_24",
        topic: "safety",
        question:
          "The Wyoming manual describes separating risks. What does that mean in practice?",
        choices: [
          "Driving in the lane furthest from any hazard at all times",
          "Keeping equal distance from every vehicle around you",
          "Taking risks one at a time - adjusting speed so you meet a hazard before or after another, rather than both together",
          "Reporting hazards to the highway patrol as you pass them",
        ],
        correctIndex: 2,
        explanation:
          "One at a time. The manual's example is joggers on the edge of the road and an oncoming truck arriving together: you speed up or slow down so you pass the joggers before or after the truck instead of at the same moment.",
        context:
          "When you cannot separate two risks, the manual's next technique is to compromise - give the most room to the worst danger. Its example is a child on a bike to your right and oncoming cars to your left: the child is more likely to move suddenly, so you move closer to the centre line.",
        trap:
          "Equal spacing is not the goal. The point is to face one problem at a time, and when that is impossible, to give the unpredictable one the extra room.",
        excerptKey: "separate-risks",
        sourceLabel: "Wyoming Driver License Manual - Separate risks",
        sourceUrl: hb(76),
      },
      {
        id: "wy_s4_25",
        topic: "rightOfWay",
        question:
          "Who has the right of way where a Wyoming entrance ramp meets the interstate?",
        choices: [
          "Traffic already on the interstate",
          "Traffic on the ramp, which has less room to adjust",
          "Whichever vehicle is travelling faster",
          "Neither - both must yield equally",
        ],
        correctIndex: 0,
        explanation:
          "The interstate traffic. The manual says so directly and adds the practical warning that you cannot always count on other drivers seeing you or moving over to give you room.",
        context:
          "The manual asks interstate drivers to help anyway: watch for vehicles entering and, if it is safe, move left to allow them a smooth entry. That is courtesy layered on top of the rule, not a replacement for it.",
        trap:
          "The ramp ending is your problem, not theirs. Merging drivers who assume otherwise are the reason the manual repeats this.",
        excerptKey: "interstate-has-row",
        sourceLabel: "Wyoming Driver License Manual - Interstate driving, Entering the Interstate",
        sourceUrl: hb(60),
      },
      {
        id: "wy_s4_26",
        topic: "speed",
        question:
          "Heavy snow has cut your visibility to about 100 feet on a Wyoming highway. What does the manual say?",
        choices: [
          "Reduce speed to 30 mph and continue",
          "You cannot drive safely at any speed - pull off the road and wait until it clears",
          "Use high beams to see further",
          "Follow the vehicle ahead closely so you can use its tail lights",
        ],
        correctIndex: 1,
        explanation:
          "At that visibility the manual says you cannot drive safely at any speed, and tells you to pull off the road and wait until it clears.",
        context:
          "It is the same logic as the manual's night rule: your lights show about 250 feet, so above 55 mph on a dark road you are outrunning what you can see. At 100 feet there is no speed slow enough to leave stopping room, which is why the answer is to stop rather than to slow.",
        trap:
          "High beams make it worse in snow and fog, because the light reflects back off the particles. Low beams are what the manual asks for.",
        excerptKey: "speed-100-feet-visibility",
        sourceLabel: "Wyoming Driver License Manual - Adjust speed for light conditions",
        sourceUrl: hb(42),
      },
      {
        id: "wy_s4_27",
        topic: "parking",
        question:
          "What does the Wyoming manual tell you to do when leaving a parking space?",
        choices: [
          "Reverse straight out and signal once you are in the lane",
          "Signal, then move out - other traffic must give way to a vehicle entering the roadway",
          "Check for anyone coming, especially bicyclists and motorcyclists, signal before you start to move, and yield to oncoming vehicles",
          "Sound the horn and edge out until traffic stops",
        ],
        correctIndex: 2,
        explanation:
          "Check, signal, yield, then enter - in that order. The manual singles out bicyclists and motorcyclists in the checking step because they are the road users most easily missed beside a line of parked cars.",
        context:
          "Its final instruction is do not dart out into traffic. W.S. 31-5-223 backs it up: a driver entering a roadway from anywhere that is not another roadway yields to everything already on it. The manual's parked-car section covers the reverse case, watching for cars pulling out in front of you.",
        trap:
          "Signalling does not transfer the duty to yield. You are the one joining the traffic stream.",
        excerptKey: "leaving-parking-space",
        sourceLabel: "Wyoming Driver License Manual - Leaving a parking space",
        sourceUrl: hb(60),
      },
      {
        id: "wy_s4_28",
        topic: "impairment",
        question:
          "Which of these will cause a revocation, rather than a suspension, of a Wyoming licence?",
        choices: [
          "A first DWUI conviction",
          "Leaving the scene of an injury accident",
          "A single reckless driving conviction",
          "Four moving violations in a year",
        ],
        correctIndex: 1,
        explanation:
          "Leaving the scene of an injury accident is on the manual's revocation list, along with a third or subsequent DWUI, a third or subsequent reckless driving, homicide by vehicle, and a felony that is a direct result of the manner of driving.",
        context:
          "The distinction matters. The manual defines suspension as the temporary removal of the privilege to drive, whereas a revocation cancels the licence outright and requires a driver investigation before you can be re-licensed. You cannot hold limited driving privileges during a revocation.",
        trap:
          "A first DWUI and four moving violations are both suspensions, not revocations. It takes a third DWUI to reach revocation.",
        excerptKey: "revocation-offences",
        sourceLabel: "Wyoming Driver License Manual - Revocation",
        sourceUrl: hb(27),
      },
      {
        id: "wy_s4_29",
        topic: "emergencies",
        question:
          "Your vehicle stalls on a railroad crossing in Wyoming with a train approaching. What does the manual say to do?",
        choices: [
          "Get everyone out and far away from the tracks immediately, then call 911",
          "Stay in the vehicle and keep trying the ignition",
          "Have passengers push while you steer",
          "Sound the horn to warn the train",
        ],
        correctIndex: 0,
        explanation:
          "Everyone out, far from the tracks, then call. The manual is emphatic that you never try to start the vehicle or push it off the track with passengers inside.",
        context:
          "The instruction that would have prevented the situation comes first in the same list: never drive onto a highway-rail intersection until you are sure you can clear the tracks on the other side without stopping. When gates are down the road is closed, and you never drive around them.",
        trap:
          "Trying the ignition one more time is the instinct, and it is how people are still in the car when the train arrives. Wyoming freight trains cannot stop in time regardless of what you do.",
        excerptKey: "railroad-stalled",
        sourceLabel: "Wyoming Driver License Manual - Railroad crossings (highway-rail intersections)",
        sourceUrl: hb(85),
      },
      {
        id: "wy_s4_30",
        topic: "rules",
        question:
          "Which of these does the Wyoming manual list as a reason not to pass?",
        choices: [
          "The vehicle ahead has out-of-state plates",
          "A bridge, curve, hill, intersection or railroad crossing just ahead",
          "The road has been recently resurfaced",
          "You are within five miles of a town",
        ],
        correctIndex: 1,
        explanation:
          "The manual's list is vehicles, pedestrians, bridges, curves, hills, intersections and railroad crossings just ahead. If any of those is there, its instruction is one word: WAIT.",
        context:
          "Two further rules come with it. Do not try to pass more than one vehicle at a time on a two-lane road, and do not follow another vehicle that is itself passing a car in front of you. Signs and pavement markings that prohibit passing override any judgment you make.",
        trap:
          "The absence of a no-passing line is not permission. The manual's list is about sight distance and closing speed, not about paint.",
        excerptKey: "passing-when-not-to",
        sourceLabel: "Wyoming Driver License Manual - Passing, Decide if it is safe to pass",
        sourceUrl: hb(54),
      },
      {
        id: "wy_s4_31",
        topic: "safety",
        question:
          "A driver is tailgating you on a Wyoming highway. What does the manual suggest?",
        choices: [
          "Brake sharply to make the point",
          "Speed up to open the gap behind you",
          "Increase your own following distance, move to the right lane on a multilane road, and reduce speed to encourage them to pass",
          "Turn on your hazard lights and hold your speed",
        ],
        correctIndex: 2,
        explanation:
          "Give yourself more room ahead and make it easy for them to go past. The manual's list is communicate with turn signals and brake lights, increase the distance in front of you, move right on a multilane road, and reduce speed to encourage the pass.",
        context:
          "The reasoning is that a tailgater removes your ability to slow rapidly for anything ahead, so the answer is to buy back the stopping distance at the front where you still control it. The manual concedes the driver behind has more control over that space than you do.",
        trap:
          "Brake-checking removes the one thing keeping you safe, which is the gap in front of you, and does nothing about the gap behind.",
        excerptKey: "tailgater-response",
        sourceLabel: "Wyoming Driver License Manual - Tailgaters",
        sourceUrl: hb(76),
      },
      {
        id: "wy_s4_32",
        topic: "rightOfWay",
        question:
          "A pedestrian is entering a school crosswalk in Wyoming and there is no signal there. What does the law require?",
        choices: [
          "Yield the right of way by slowing down or stopping, for a pedestrian within or entering the school crosswalk at either edge of the roadway",
          "Proceed if the pedestrian is on the far side of the road",
          "Yield only when a crossing guard is present",
          "Yield only during posted school hours",
        ],
        correctIndex: 0,
        explanation:
          "W.S. 31-5-602(b) gives school crosswalks their own subsection, and it covers a pedestrian within or entering the crosswalk at either edge of the roadway. Slowing down or stopping is what yielding means here.",
        context:
          "Either edge is the phrase that matters: the duty starts when they step off the far kerb, not when they reach your half of the road. The manual pairs this with the 20 mph absolute school-zone limit and its advice to build a larger space cushion whenever you see pedestrians near a school.",
        trap:
          "Waiting until the pedestrian reaches your side of the road is exactly what the words at either edge rule out.",
        excerptKey: "row-crosswalk-statute",
        sourceLabel: "Wyoming Statutes 31-5-602 - Right-of-way in crosswalks",
        sourceUrl: ws(199),
      },
      {
        id: "wy_s4_33",
        topic: "signs",
        question:
          "Why does the Wyoming manual put so much weight on the shapes of signs rather than their words?",
        choices: [
          "Because shapes are cheaper to manufacture",
          "Because in fading light, fog, rain, snow or darkness the shape still tells an informed driver what to look for or do",
          "Because Wyoming uses fewer words on its signs than other states",
          "Because the words are only advisory",
        ],
        correctIndex: 1,
        explanation:
          "Readability when the lettering is not readable. The manual makes exactly that argument: if fading light, fog, rain, snow or darkness makes signs difficult to read, their shapes can still tell informed drivers what to look for or what to do.",
        context:
          "That is a Wyoming-specific point as much as a general one. Ground blizzards, blowing dust and low winter sun are routine here, and a driver who has learned the shape system reads an octagon at a distance where the word STOP is still a grey smear.",
        trap:
          "The words are not advisory. Regulatory signs must always be obeyed - the shape is a second channel carrying the same message, not a softer one.",
        excerptKey: "sign-shapes-matter",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, signals and road markings",
        sourceUrl: hb(62),
      },
      {
        id: "wy_s4_34",
        topic: "sharing",
        question:
          "What does the Wyoming manual say a bicycle used after dark must have?",
        choices: [
          "A helmet with a reflective strip",
          "A rear light and front reflectors",
          "A front light and rear reflectors",
          "Nothing, if it stays on the shoulder",
        ],
        correctIndex: 2,
        explanation:
          "Front light, rear reflectors. The manual states the requirement and immediately adds the reason it matters to you: these may be very hard to see, so you must watch the side of the road and be alert for them.",
        context:
          "The manual treats bicycles as vehicles with the same rights and duties as any driver, which is also why they may use all public roadways in Wyoming. A helmet is highly recommended in the manual's own definitions, but not legally required.",
        trap:
          "Reversing the light and the reflectors is the easy slip. The light faces forward, where the rider needs to see and be seen head-on.",
        excerptKey: "bicycle-lights",
        sourceLabel: "Wyoming Driver License Manual - Sharing the road safely, Bicycles",
        sourceUrl: hb(70),
      },
      {
        id: "wy_s4_35",
        topic: "signals",
        question:
          "An amber arrow appears after a green arrow at a Wyoming intersection. What is it telling you?",
        choices: [
          "You may still begin the turn if you hurry",
          "The turn is now prohibited entirely",
          "Traffic from the opposite direction now has a green arrow",
          "Clear the intersection - the protected turn is ending",
        ],
        correctIndex: 3,
        explanation:
          "Clear out. The manual says an amber arrow may appear after a green arrow and warns you to clear the intersection, which is the arrow version of the ordinary amber warning.",
        context:
          "The three arrows work as a sequence: green permits the movement, amber warns it is ending, and red prohibits it. The statute frames the steady yellow as notice that the related green movement is terminating and a red indication is about to be shown.",
        trap:
          "Starting a new turn on an amber arrow is the mistake. The instruction is to finish and get out, not to squeeze one more vehicle through.",
        excerptKey: "signal-amber-arrow",
        sourceLabel: "Wyoming Driver License Manual - Traffic signals, Turn arrows",
        sourceUrl: hb(97),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "The rules Wyoming drivers report getting wrong, and the ones where the manual and Title 31 do not quite say the same thing. Slow down on these - most of them are a number, a qualifier or a distinction the book states once and never repeats.",
    questions: [
      {
        id: "wy_s5_01",
        topic: "speed",
        question:
          "You are leaving a Wyoming town and can see the 65 mph sign a few hundred feet ahead. When may you accelerate to 65?",
        choices: [
          "As soon as the sign is in sight",
          "When you reach the sign, because the higher limit begins there",
          "Halfway between the town limit and the sign",
          "As soon as the last building is behind you",
        ],
        correctIndex: 1,
        explanation:
          "The limit changes at the sign, not on the approach to it. Until you are level with it the previous posted limit is the maximum lawful speed, and W.S. 31-5-301(b) describes those figures as maximum lawful speeds with no tolerance attached.",
        context:
          "Local authorities may set limits within their jurisdiction, and the statute caps the difference between adjacent limits at 15 mph with no more than six alterations per mile. That is why the step down into a Wyoming town happens over several signs and why accelerating early puts you well over the limit that still applies.",
        trap:
          "Wyoming drivers regularly repeat that the Highway Patrol allows 5 or 10 over. Nothing in Title 31 creates a tolerance, and this early-acceleration ticket is the one out-of-state visitors argue about most.",
        excerptKey: "local-speed-limits",
        sourceLabel: "Wyoming Statutes 31-5-303 - Establishing maximum speed limits by local authorities",
        sourceUrl: ws(182),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_02",
        topic: "licensing",
        question:
          "You passed the written test and got your Wyoming learner's permit today. How long must you hold it before you can apply for full driving privileges?",
        choices: [
          "At least 10 days",
          "At least 30 days",
          "At least six months",
          "There is no minimum holding period",
        ],
        correctIndex: 0,
        explanation:
          "Ten days. It is on WYDOT's Learner Permits page rather than in the manual, which is precisely why so many Wyoming learners have never heard of it.",
        context:
          "The permit itself is valid for a year and may be renewed as many times as necessary. The 10-day rule is also the gate on the intermediate route: WYDOT lists holding a learner's permit for at least 10 days among the requirements to be eligible for an intermediate permit, alongside being 16 and completing 50 hours behind the wheel including 10 at night.",
        trap:
          "Six months is the intermediate licence holding period, not the permit one. Wyoming teens swap these two constantly, and the manual does not mention the 10-day rule at all.",
        excerptKey: "permit-ten-days",
        sourceLabel: "WYDOT Driver Services - Learner Permits",
        sourceUrl: PERMITS,
        commonlyMissed: true,
      },
      {
        id: "wy_s5_03",
        topic: "safety",
        question:
          "A Wyoming officer sees an adult front-seat passenger not wearing a safety belt and nothing else is wrong. May the vehicle be stopped for that alone?",
        choices: [
          "Yes, belt violations are a primary offence in Wyoming",
          "Yes, but only for drivers under 18",
          "Yes, if the vehicle is on an interstate",
          "No - W.S. 31-5-1402(d) says no motor vehicle shall be halted solely for a violation of the belt law",
        ],
        correctIndex: 3,
        explanation:
          "The adult belt law is secondary in Wyoming. The statute forbids halting a vehicle solely for a belt violation, so the stop has to rest on something else.",
        context:
          "Secondary does not mean unenforced. Once you are stopped for another reason the citation can follow, at up to $25 for the driver and $10 for a passenger, and complying earns a $10 reduction in whatever other fine the court imposes. The violation is not counted as a moving violation for suspension purposes and cannot be used to raise your insurance.",
        trap:
          "The child restraint law is the opposite. The manual labels it a primary offence, so non-use or misuse is by itself reasonable suspicion to stop the vehicle.",
        excerptKey: "seat-belt-secondary",
        sourceLabel: "Wyoming Statutes 31-5-1402(d) - Safety belts required to be used",
        sourceUrl: ws(253),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_04",
        topic: "rightOfWay",
        question:
          "Two vehicles arrive at exactly the same instant at a Wyoming intersection with no signs, signals or markings. What do the manual and the statute both require?",
        choices: [
          "The vehicle on the right yields to the vehicle on the left",
          "The vehicle turning yields to the vehicle going straight",
          "The vehicle on the left yields to the vehicle on the right",
          "Both stop and proceed alternately",
        ],
        correctIndex: 2,
        explanation:
          "Left yields to right. W.S. 31-5-220(b) applies the rule when two vehicles enter from different highways at approximately the same time, and the manual's advice to watch for the driver coming from your right gives the same answer here.",
        context:
          "The two sources are not identical, and it is worth knowing where they part. The manual (page 42) tells you to yield to the driver on your right regardless of who first reaches and enters the intersection. The statute gives the right of way to whoever entered first and reaches for the right-hand rule only to break a tie. This question is set at a genuine tie, where both readings agree.",
        trap:
          "Direction of travel does not enter into it. Neither source mentions turning or going straight at an uncontrolled intersection.",
        excerptKey: "row-uncontrolled",
        sourceLabel: "Wyoming Driver License Manual - Right of way at intersections",
        sourceUrl: hb(42),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_05",
        topic: "rules",
        question:
          "You are on I-80 in the right lane and a highway maintenance truck is stopped ahead on the shoulder with lights flashing. What does the law require?",
        choices: [
          "Slow to 20 mph and stay in your lane",
          "Merge into the lane farthest from the vehicle, or at least one lane of traffic apart from it, as soon as it is safe",
          "Stop until the crew waves you past",
          "Sound your horn and maintain speed",
        ],
        correctIndex: 1,
        explanation:
          "Move over. On an interstate or any highway with two or more lanes in your direction, W.S. 31-5-224 requires you to merge into the lane farthest from the vehicle, or at least one lane apart from it, unless an officer directs otherwise.",
        context:
          "Wyoming's move-over law is broader than many drivers realise. It covers not only authorised emergency vehicles but municipal, public utility and highway construction or maintenance vehicles that are stopped, or moving at less than 20 mph, on or within three feet of the roadway with lights activated.",
        trap:
          "The 20 mph reduction belongs to the two-lane version of the rule. On a multilane road the requirement is to change lanes, not to slow down.",
        excerptKey: "move-over-statute-multilane",
        sourceLabel: "Wyoming Statutes 31-5-224 - Approach of authorized emergency vehicles",
        sourceUrl: ws(164),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_06",
        topic: "impairment",
        question:
          "A Wyoming driver blows 0.06 percent. What does the manual say about that result?",
        choices: [
          "You may still be convicted of DWUI at 0.05 percent with other supporting evidence",
          "You are automatically cleared, since the limit is 0.08",
          "The result is inadmissible below 0.08",
          "It triggers an automatic 30-day suspension",
        ],
        correctIndex: 0,
        explanation:
          "There is no safe harbour below 0.08. The manual says plainly that while 0.08 or more may result in a conviction, you may also be convicted of DWUI at 0.05 percent with other supporting evidence.",
        context:
          "The statute sets out why. Below 0.05 there is a presumption that the driver was not under the influence; between 0.05 and 0.08 there is no presumption either way, and the reading may be weighed with other competent evidence on whether the person was incapable of safely driving. Above 0.08 the number alone is the offence.",
        trap:
          "The word limit misleads people. 0.08 is the level at which the reading by itself proves the offence, not the level below which nothing can be proved.",
        excerptKey: "bac-005-conviction",
        sourceLabel: "Wyoming Driver License Manual - Drinking and driving, Is it worth it?",
        sourceUrl: hb(37),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_07",
        topic: "signals",
        question:
          "You are on a one-way street in Wyoming facing a steady red light and want to turn left into another one-way street. What does the manual say?",
        choices: [
          "It is never permitted in Wyoming",
          "It is permitted without stopping if the way is clear",
          "It is permitted only where a sign expressly allows it",
          "It is permitted after stopping and yielding, unless a sign prohibits the turn",
        ],
        correctIndex: 3,
        explanation:
          "Wyoming allows the one-way to one-way left on red on exactly the same terms as a right on red: stop first, yield, and obey any sign that forbids it. The manual states it in the same breath as the right-on-red rule.",
        context:
          "W.S. 31-5-403(a)(iii)(C) is the statutory basis, and it treats both turns identically - cautiously entering the intersection to turn right, or to turn left from a one-way street into a one-way street, after stopping as required, and yielding to pedestrians lawfully in an adjacent crosswalk and to other traffic lawfully using the intersection.",
        trap:
          "Many states do not allow this turn at all, so drivers moving to Wyoming assume it is prohibited. Both streets have to be one-way for it to apply.",
        excerptKey: "signal-red-turn-yield",
        sourceLabel: "Wyoming Driver License Manual - Traffic signals, Red light",
        sourceUrl: hb(97),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_08",
        topic: "parking",
        question:
          "How close to the approach to a stop sign may you stand or park in Wyoming?",
        choices: [
          "There is no restriction if you are not blocking the sign",
          "10 feet",
          "No closer than 20 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 2,
        explanation:
          "Twenty feet. W.S. 31-5-504(a)(ii)(D) covers the approach to any flashing signal, stop sign, yield sign or traffic-control signal located at the side of a roadway.",
        context:
          "It is one of a cluster of 20-foot rules in the same subsection - 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway, and 75 feet on the opposite side of the street from a signposted fire station entrance. The manual prints none of them.",
        trap:
          "Not blocking the sign is not the test. The distance protects sight lines for drivers who have stopped, not the visibility of the sign itself.",
        excerptKey: "parking-hydrant-statute",
        sourceLabel: "Wyoming Statutes 31-5-504(a)(ii) - Specific places where prohibited",
        sourceUrl: ws(191),
      },
      {
        id: "wy_s5_09",
        topic: "sharing",
        question:
          "You are on a divided Wyoming highway with a median, and a school bus on the other roadway stops with its red lights flashing. What must you do?",
        choices: [
          "Stop, because the rule applies from either direction",
          "You need not stop, because the bus is on a different roadway",
          "Slow to 20 mph and continue",
          "Stop only if children are visible",
        ],
        correctIndex: 1,
        explanation:
          "A separate roadway removes the duty. W.S. 31-5-507(d) says a driver on a highway with separate roadways need not stop for a school bus that is on a different roadway, and the manual gives the same exception for a physical barrier or separate roadways.",
        context:
          "On a two-lane or four-lane undivided highway the opposite is true: both directions stop. The manual is explicit that on a divided roadway only vehicles on the same side of the separation as the bus must stop. Where you must stop, you stay stopped until the bus moves or the lights go off.",
        trap:
          "Four lanes alone does not create the exception. An undivided four-lane road requires every direction to stop, so it is the division, not the width, that matters.",
        excerptKey: "school-bus-separate-roadway-statute",
        sourceLabel: "Wyoming Statutes 31-5-507(d) - Meeting or passing stopped school bus",
        sourceUrl: ws(194),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_10",
        topic: "emergencies",
        question:
          "You back into a parked car in a Wyoming lot, denting it, and cannot find the owner. What is required?",
        choices: [
          "Leave a note with your name, address, telephone number, licence number, plate number, the date and time, and the damage, and then contact the nearest law enforcement agency",
          "Leave a note with your phone number only",
          "Nothing, if the damage is under $1,000",
          "Wait 30 minutes and then leave",
        ],
        correctIndex: 0,
        explanation:
          "A full note and a call. The manual lists what the note must contain, and then adds that you must also contact the nearest law enforcement agency - the second half is the part people skip.",
        context:
          "W.S. 31-5-1104 requires the driver to stop immediately and either locate and notify the owner or attach a written notice securely in a conspicuous place giving name, address and registration number. Leaving the scene of a collision is not a paperwork offence in Wyoming, and leaving the scene of an injury accident causes an outright licence revocation.",
        trap:
          "A phone number scribbled on a receipt does not satisfy either source, and neither leaves the law enforcement notification optional.",
        excerptKey: "unattended-vehicle-note",
        sourceLabel: "Wyoming Driver License Manual - Traffic crashes, Damaging unattended vehicles",
        sourceUrl: hb(67),
      },
      {
        id: "wy_s5_11",
        topic: "signs",
        question:
          "You reach a railroad crossing marked only with a crossbuck. What legal force does the crossbuck have in Wyoming?",
        choices: [
          "It is advisory only",
          "It requires a full stop every time",
          "It is a warning sign about the crossing ahead",
          "It is a yield sign - you are legally required to yield the right of way to trains",
        ],
        correctIndex: 3,
        explanation:
          "The manual is unambiguous: crossbuck signs are yield signs, and you are legally required to yield the right of way to trains. Slow down, look and listen, and stop if a train is approaching.",
        context:
          "The stopping rules are stricter than a yield when a train is actually coming. W.S. 31-5-510(a) requires you to stop within 50 feet but not less than 15 feet from the nearest rail when a signal, a gate, a flagman, an audible warning or a plainly visible approaching train tells you one is close.",
        trap:
          "Advisory is the common assumption because the crossbuck carries no words. The round advance warning sign further back is the warning; the crossbuck itself is a yield.",
        excerptKey: "crossbuck-is-yield",
        sourceLabel: "Wyoming Driver License Manual - Railroad crossings",
        sourceUrl: hb(66),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_12",
        topic: "speed",
        question:
          "A police car is parked with lights flashing on a two-lane Wyoming road posted at 40 mph. What does W.S. 31-5-224 require of you?",
        choices: [
          "Slow to 20 mph",
          "Slow to 20 mph below the limit, so 20 mph here",
          "The 20-mph-below rule does not apply, because it covers two-lane roads posted at 45 mph or greater",
          "Stop completely until directed to pass",
        ],
        correctIndex: 2,
        explanation:
          "The statutory reduction applies to a two-lane road with a posted limit of 45 mph or greater, so at 40 mph it does not engage. Ordinary care and the basic speed rule still govern how you pass a stopped emergency vehicle.",
        context:
          "The manual states the rule without the 45 mph qualifier, saying only that on roads with one lane in each direction you must reduce your speed by at least 20 mph. The statute is the precise version, and a driver who knows both will not be caught out by a question that turns on the posted limit.",
        trap:
          "Answering slow to 20 mph below anyway is not dangerous, but it is not what the statute says, and on a 40 mph road it would put you at 20 mph in a live lane.",
        excerptKey: "move-over-statute-two-lane",
        sourceLabel: "Wyoming Statutes 31-5-224(a)(ii) - Approach of authorized emergency vehicles",
        sourceUrl: ws(164),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_13",
        topic: "safety",
        question:
          "Ice covers a Wyoming road. What following distance does the manual want from a car?",
        choices: ["Four seconds", "Eight seconds", "Six seconds", "Two seconds, as always"],
        correctIndex: 1,
        explanation:
          "Eight seconds - four times the two-second baseline. The manual's word for ice is quadruple, and it gives the figure for cars in brackets so there is no arithmetic to get wrong.",
        context:
          "The full ladder is two seconds dry, double it to four when wet, at night or carrying a heavy load, triple it to six on snow and slush, and quadruple it to eight on ice. On top of that, the manual's speed advice for ice is to reduce to a crawl.",
        trap:
          "Six seconds is the snow-and-slush figure. Black ice is the Wyoming problem the figure exists for, and the manual warns it can lie invisible on pavement that merely looks wet, especially on bridge decks, overpasses and in deep cuts.",
        excerptKey: "following-triple-snow",
        sourceLabel: "Wyoming Driver License Manual - It makes sense to INCREASE your following distance",
        sourceUrl: hb(76),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_14",
        topic: "licensing",
        question:
          "How long must a Wyoming intermediate permit be held before you may apply for full driving privileges?",
        choices: [
          "A minimum of six months, or until you turn 17",
          "10 days",
          "30 days",
          "One year in all cases",
        ],
        correctIndex: 0,
        explanation:
          "Six months, or until 17. WYDOT's Learner Permits page gives both branches, and the manual's version says full privileges at 16 and a half need an intermediate licence at least six months old plus an approved driver education course.",
        context:
          "The two routes to full privileges are worth holding apart. At 17 you can be licensed without ever holding an intermediate licence at all. At 16 and a half you can, but only with driver education and six months of intermediate driving behind you. An intermediate licence expires automatically 30 days after the holder's 17th birthday.",
        trap:
          "Ten days is the learner's permit holding period, not the intermediate one. Wyoming's ladder has both numbers and they attach to different stages.",
        excerptKey: "intermediate-six-months-web",
        sourceLabel: "WYDOT Driver Services - Learner Permits, Applying for an Intermediate Permit",
        sourceUrl: PERMITS,
        commonlyMissed: true,
      },
      {
        id: "wy_s5_15",
        topic: "rules",
        question:
          "The car ahead of you on a Wyoming street is waiting to turn left. Its lane is not wide enough to slip past, but the shoulder is. What does the law say?",
        choices: [
          "You may use the shoulder to pass, since the vehicle is turning left",
          "You may use the shoulder if you signal first",
          "You may use the shoulder at speeds under 25 mph",
          "You may not - the movement may not be made by driving off the roadway",
        ],
        correctIndex: 3,
        explanation:
          "Passing on the right is permitted when the vehicle ahead is turning left, but W.S. 31-5-206(b) forbids making the movement by driving off the roadway. The manual repeats the point in a parenthesis: it is not legal to leave the pavement to pass on the right.",
        context:
          "The other lawful case for passing on the right is a roadway with unobstructed pavement wide enough for two or more lines of vehicles going your way. Both cases require conditions permitting the movement in safety, so a legal reason to pass is never on its own a decision to pass.",
        trap:
          "The left-turning car makes the pass lawful in principle and the shoulder makes it unlawful in practice. Both halves of the rule have to be satisfied.",
        excerptKey: "passing-off-roadway",
        sourceLabel: "Wyoming Statutes 31-5-206(b) - Overtaking on the right",
        sourceUrl: ws(157),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_16",
        topic: "rightOfWay",
        question:
          "You enter a Wyoming intersection while exceeding the speed limit and a dispute arises over who had priority. What does the manual say about your right of way?",
        choices: [
          "It is unaffected - speed and right of way are separate matters",
          "It is reduced but not lost",
          "You forfeit any right of way you might have had",
          "It transfers to the slowest vehicle present",
        ],
        correctIndex: 2,
        explanation:
          "You forfeit it. The manual states that if you enter an intersection while violating the speed law you forfeit any right of way you might have had.",
        context:
          "It sits in the same paragraph as the manual's broader warning never to insist on the right of way at the risk of a crash, and its repeated point that laws do not give anyone the right of way - they only say who must yield. Speeding removes even that.",
        trap:
          "Treating speed as a separate ticket and priority as a separate question is exactly the reasoning the manual closes off.",
        excerptKey: "forfeit-right-of-way",
        sourceLabel: "Wyoming Driver License Manual - Right of way, Intersections with four-way stops",
        sourceUrl: hb(47),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_17",
        topic: "impairment",
        question:
          "A Wyoming driver is convicted of a third DWUI involving alcohol within 10 years. What is the licence consequence?",
        choices: [
          "A one-year suspension",
          "A three-year revocation, with an ignition interlock requirement for two years plus the remainder of the revocation period",
          "A 90-day suspension and a fine",
          "A lifetime ban with no route back",
        ],
        correctIndex: 1,
        explanation:
          "Three years, and it is a revocation rather than a suspension. The interlock requirement runs two years, and the manual notes it also covers the remainder of the three-year revocation period before any other type of licence becomes available.",
        context:
          "Reinstatement after a third offence is the heaviest in the manual: completing all actions on record or applying for an interlock restricted licence, filing an SR-22, paying the reinstatement fee, undergoing an alcohol or drug evaluation, completing treatment, and passing a re-examination. Limited driving privileges are not available during a revocation at all.",
        trap:
          "A first DWUI is a 90-day suspension and a second is one year, so the ladder is easy to shift by one. Third is where suspension becomes revocation.",
        excerptKey: "dwui-third-revocation",
        sourceLabel: "Wyoming Driver License Manual - Driving While Under the Influence",
        sourceUrl: hb(21),
      },
      {
        id: "wy_s5_18",
        topic: "signals",
        question:
          "Wyoming's flashing signal statute has one place where it does not apply. Where?",
        choices: [
          "At railroad grade crossings, which are governed by the railroad crossing rules instead",
          "In school zones during school hours",
          "On interstate highways",
          "At intersections controlled by a police officer",
        ],
        correctIndex: 0,
        explanation:
          "W.S. 31-5-405(b) carves out railroad grade crossings and sends you to W.S. 31-5-510 instead. The flashing red at a rail crossing is not the same instrument as a flashing red at a street junction.",
        context:
          "The practical difference is the stopping band. At a street intersection a flashing red means stop as you would at a stop sign, then proceed when safe. At a rail crossing you stop within 50 feet but not less than 15 feet from the nearest rail and do not proceed until you can do so safely, and if gates are down the road is closed.",
        trap:
          "Both signals look alike and neither is advisory, which is why a driver who treats a rail crossing flasher as an ordinary stop sign can end up stopped in the wrong place.",
        excerptKey: "railroad-flashing-lights",
        sourceLabel: "Wyoming Driver License Manual - Railroad crossings",
        sourceUrl: hb(66),
      },
      {
        id: "wy_s5_19",
        topic: "speed",
        question:
          "You are on a Wyoming interstate posted at 80 mph and the pavement is glazed with black ice. What speed does the law permit?",
        choices: [
          "80 mph, since that is the posted limit",
          "70 mph, as an automatic winter reduction",
          "Whatever speed the vehicle in front is doing",
          "Only a speed that is reasonable and prudent for the actual conditions, which here is far below 80",
        ],
        correctIndex: 3,
        explanation:
          "The posted number is a ceiling for ideal conditions and never a floor. W.S. 31-5-301(a) prohibits driving faster than is reasonable and prudent for the conditions and the actual and potential hazards then existing.",
        context:
          "Wyoming does not use salt on its highways, so ice survives on pavement that looks merely wet, and the manual's black ice section warns it appears without warning at bridge decks, overpasses, high fills, deep cuts and near snow fences. Its advice for ice is to reduce speed to a crawl.",
        trap:
          "Wyoming has no automatic winter speed limit. The reduction is your judgment, enforced afterwards through the basic speed rule and, if things go wrong, through careless or reckless driving.",
        excerptKey: "black-ice",
        sourceLabel: "Wyoming Driver License Manual - Winter Wheelin'",
        sourceUrl: hb(44),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_20",
        topic: "sharing",
        question:
          "What is the right-turn squeeze the Wyoming manual describes?",
        choices: [
          "Two vehicles trying to turn right from adjacent lanes",
          "A truck cutting the corner across a kerb",
          "A car caught in the blind spot on the right side of a heavy vehicle that is turning right",
          "A cyclist being forced onto the shoulder by a right-turning car",
        ],
        correctIndex: 2,
        explanation:
          "It happens when a passenger vehicle sits in the blind spot on the right side of a heavy vehicle that is in the process of turning right. The truck swings wide to the left first, and the gap the car occupies closes.",
        context:
          "Heavy vehicles carry large blind areas directly behind them and much bigger ones on both sides, and the manual calls those the No-Zones. A car that cannot be seen cannot be avoided, which is why the manual's advice about trucks is always about position rather than about braking.",
        trap:
          "The truck moving left before turning right looks like an invitation to pass on the inside. It is the beginning of the turn.",
        excerptKey: "truck-right-turn-squeeze",
        sourceLabel: "Wyoming Driver License Manual - Blind spots",
        sourceUrl: hb(58),
      },
      {
        id: "wy_s5_21",
        topic: "safety",
        question:
          "Why does the Wyoming manual say driving faster than 55 mph on a dark road is dangerous?",
        choices: [
          "Because most crashes happen above 55 mph",
          "Because your headlights only let you see clearly about 250 feet, and above 55 you cannot stop within that distance",
          "Because 55 mph is the statutory night limit",
          "Because headlights dim at higher engine speeds",
        ],
        correctIndex: 1,
        explanation:
          "The manual gives the distance and the arithmetic: your lights let you see clearly about 250 feet, and above 55 mph on a dark road you are driving blind because you cannot stop within the lit distance ahead.",
        context:
          "That is a real problem in Wyoming, where interstate limits run to 80 and the roads are unlit for long stretches. The manual's companion rule is never to drive so fast that you cannot stop within the distance you can see with your headlights, and it asks you to add at least three or four seconds of following distance when you cannot see clearly.",
        trap:
          "There is no statutory night speed limit in Wyoming, so this is a safety principle rather than a posted number. That does not make it optional - the basic speed rule turns it into a legal standard.",
        excerptKey: "speed-dark-250-feet",
        sourceLabel: "Wyoming Driver License Manual - Adjust speed for light conditions",
        sourceUrl: hb(42),
      },
      {
        id: "wy_s5_22",
        topic: "rules",
        question:
          "What exactly does W.S. 31-5-217(b) require of a turn signal in Wyoming?",
        choices: [
          "It must be given continuously during not less than the last 100 feet travelled before turning",
          "It must be given for at least three seconds",
          "It must be flashed at least twice",
          "It must be given as the turn begins",
        ],
        correctIndex: 0,
        explanation:
          "Continuously, for not less than the last 100 feet before the turn. Continuously is the word that does the work - a signal flicked on and off does not satisfy the statute.",
        context:
          "The manual translates the same rule into a habit: signal when turning or changing lanes, at least 100 feet from an intersection, and at least four to five seconds ahead at higher speeds. A separate subsection requires a signal before stopping or suddenly slowing when there is a vehicle behind and an opportunity to give one.",
        trap:
          "Three seconds is a common figure in other states. Wyoming's requirement is a distance, so it becomes more time at lower speeds and less at higher ones - which is why the manual adds the four-to-five second advice for highways.",
        excerptKey: "signal-100-feet-statute",
        sourceLabel: "Wyoming Statutes 31-5-217(b) - Turning movements and required signals",
        sourceUrl: ws(162),
      },
      {
        id: "wy_s5_23",
        topic: "emergencies",
        question:
          "The Wyoming manual gives a rule of thumb for which way to turn when a collision cannot be avoided. What is it?",
        choices: [
          "Turn toward the softer shoulder, whichever side that is",
          "Turn toward the oncoming vehicle to reduce the closing angle",
          "Do not turn at all - brake and hold your line",
          "Turn right, because if the other driver does the same the crash may be avoided entirely",
        ],
        correctIndex: 3,
        explanation:
          "Turn right. The manual's reasoning is that if the other driver also turns right, the two paths diverge and the crash may be avoided altogether, whereas two drivers turning left meet in the middle.",
        context:
          "It sits inside a three-part sequence for an imminent collision: slow as fast as possible, turn away, and where appropriate speed up. The manual adds that you should try not to brake while turning away, since braking mid-turn invites a skid and costs you the steering you are relying on.",
        trap:
          "Avoiding a head-on by running off the road on the right is the outcome the manual accepts. It says explicitly to choose a glancing blow over a head-on, and something that will give way over something that will not.",
        excerptKey: "turn-away-right",
        sourceLabel: "Wyoming Driver License Manual - Emergency situations, Turn away quickly",
        sourceUrl: hb(81),
      },
      {
        id: "wy_s5_24",
        topic: "rightOfWay",
        question:
          "You have a circular green light and are turning left across oncoming traffic in Wyoming. Which statement is correct?",
        choices: [
          "The green light gives your turn priority over oncoming traffic",
          "Oncoming traffic must stop for a vehicle already signalling a left turn",
          "The green permits the turn but gives it no priority - you still yield to oncoming traffic close enough to be an immediate hazard",
          "You may complete the turn once two oncoming vehicles have passed",
        ],
        correctIndex: 2,
        explanation:
          "Permission and priority are different things. W.S. 31-5-403 lets you turn left on a circular green unless a sign prohibits it, and W.S. 31-5-221 separately requires you to yield to any oncoming vehicle within the intersection or close enough to be an immediate hazard.",
        context:
          "This is the single most consequential place in Wyoming's rules where a signal permits a movement without protecting it, and the manual makes the same point about motorcycles: drivers turning left in front of an oncoming rider cause a large share of car-cycle crashes, usually because they misjudged the rider's speed.",
        trap:
          "A protected left needs a green arrow. A circular green is not one, and the difference between them is the difference between a permitted turn and a protected one.",
        excerptKey: "row-left-turn",
        sourceLabel: "Wyoming Statutes 31-5-221 - Turning left at intersection",
        sourceUrl: ws(163),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_25",
        topic: "signs",
        question:
          "An arrow painted on the Wyoming roadway points left in your lane, and the overhead sign for that lane also shows a left arrow. What does the manual say about the two?",
        choices: [
          "The overhead sign takes priority over the painted arrow",
          "Arrows painted on the roadway and arrows on the overhead signs have the same meaning",
          "The painted arrow is advisory and the overhead sign is regulatory",
          "Where both appear you may choose either direction",
        ],
        correctIndex: 1,
        explanation:
          "Same meaning, both binding. The manual states it directly, which matters because a painted arrow is often the first one you can read while the overhead sign is still far off.",
        context:
          "Where the word ONLY appears with an overhead arrow, the manual says you must go in the direction the arrow points and there is no other option. Reading the lane late is the problem this section is written to prevent - by the time you are in the lane, the movement is decided.",
        trap:
          "Treating paint as guidance and metal as law is the wrong distinction. In Wyoming both carry the same instruction.",
        excerptKey: "overhead-only",
        sourceLabel: "Wyoming Driver License Manual - Overhead signs",
        sourceUrl: hb(63),
      },
      {
        id: "wy_s5_26",
        topic: "parking",
        question:
          "What distance does Wyoming law set for parking opposite a signposted fire station entrance?",
        choices: [
          "Within 75 feet of the entrance on the opposite side of the street",
          "Within 15 feet",
          "There is no rule for the opposite side",
          "Within 200 feet",
        ],
        correctIndex: 0,
        explanation:
          "Seventy-five feet on the opposite side, when it is properly signposted. The same paragraph of W.S. 31-5-504(a)(ii)(E) sets 20 feet from the driveway entrance itself.",
        context:
          "The two figures do different jobs. Twenty feet keeps the apparatus bay clear; 75 feet on the far side keeps the swing room clear, because a fire engine leaving a station needs the full width of the street to turn. The manual gives neither number.",
        trap:
          "Assuming the opposite side is unrestricted is the natural reading of a manual that never mentions fire stations, and it is exactly where cars get towed.",
        excerptKey: "parking-fire-station",
        sourceLabel: "Wyoming Statutes 31-5-504(a)(ii)(E) - Specific places where prohibited",
        sourceUrl: ws(191),
      },
      {
        id: "wy_s5_27",
        topic: "impairment",
        question:
          "A Wyoming driver arrested for DWUI refuses the breath test. What does the manual say can happen next?",
        choices: [
          "Nothing further - the refusal ends the testing",
          "The officer must release the driver",
          "The driver may choose a blood test instead, at their own expense",
          "Law enforcement may obtain a warrant to require the test to be administered by an approved tester",
        ],
        correctIndex: 3,
        explanation:
          "A refusal is not the end of it. The manual says law enforcement may obtain a warrant to require the test or tests to be administered by an approved tester.",
        context:
          "The refusal has its own administrative consequences alongside whatever the test eventually shows, since the Administrative Per Se machinery covers both a result of 0.08 or greater and a refusal. Consent is deemed given by the act of driving on a public street or highway.",
        trap:
          "Refusing is often thought of as denying the state its evidence. In Wyoming it more often means the sample is taken anyway, with a licence action already running.",
        excerptKey: "refusal-warrant",
        sourceLabel: "Wyoming Driver License Manual - Drinking and driving, Is it worth it?",
        sourceUrl: hb(37),
      },
      {
        id: "wy_s5_28",
        topic: "safety",
        question:
          "A Wyoming vehicle has only one row of seats and an eight-year-old must ride in it. What does the law allow?",
        choices: [
          "The child may ride unrestrained in that case",
          "The child must ride in a different vehicle",
          "The child may be properly secured in a child restraint in the front passenger seat, but a rear-facing infant seat must never go in front of an active airbag",
          "The child may use an adult belt alone",
        ],
        correctIndex: 2,
        explanation:
          "The single-row exception moves the restraint, not the requirement. W.S. 31-5-1303(a) allows the child restraint in the front passenger seat where the vehicle has only one row of seats, or where all the belts behind the front seat are already in use by other child passengers.",
        context:
          "The airbag warning stands regardless: a rear-facing infant seat must not be placed in front of an active airbag. The other exemptions are narrow - a physician's signed statement carried in the vehicle, a driver rendering aid to the child or parent, and a lap and shoulder belt that already fits properly across the child's collarbone, chest and hips.",
        trap:
          "The exception is about which seat, not about whether. An eight-year-old is inside the age rule because the law runs to the ninth birthday.",
        excerptKey: "child-restraint-statute",
        sourceLabel: "Wyoming Statutes 31-5-1303(a) - Child safety restraint system",
        sourceUrl: ws(251),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_29",
        topic: "rules",
        question:
          "A Wyoming driver cuts through a corner gas station forecourt to avoid waiting at a red light. Is that lawful?",
        choices: [
          "Yes, private property is outside the traffic code",
          "No - W.S. 31-5-217(e) prohibits driving on private or public property to reach another roadway in order to avoid a traffic-control device",
          "Yes, if the driver buys something",
          "Yes, provided the driver signals both turns",
        ],
        correctIndex: 1,
        explanation:
          "Wyoming has a specific statute for this. W.S. 31-5-217(e) makes it unlawful to drive a motor vehicle upon private or public property to gain access to another roadway for the purpose of avoiding a traffic-control device.",
        context:
          "It sits in the same section as the turn-signal rules, which is an odd home for it but a useful reminder that the traffic code reaches beyond the roadway itself. The manual's parallel rule is the required stop when entering a street from a driveway, alley, building or parking lot.",
        trap:
          "Buying something does not launder the manoeuvre. The offence is defined by the purpose of the movement, not by what you do on the way through.",
        excerptKey: "avoiding-traffic-control",
        sourceLabel: "Wyoming Statutes 31-5-217(e) - Turning movements and required signals",
        sourceUrl: ws(162),
      },
      {
        id: "wy_s5_30",
        topic: "emergencies",
        question:
          "Your right wheels drop off the pavement onto a soft Wyoming shoulder at speed. What does the manual tell you to do?",
        choices: [
          "Grip the wheel firmly, stay on the shoulder, ease off the accelerator, brake gently and slow gradually, then turn sharply back onto the pavement once you have slowed",
          "Brake hard immediately and steer back at once",
          "Accelerate to climb back onto the pavement",
          "Steer left immediately to regain the lane",
        ],
        correctIndex: 0,
        explanation:
          "Slow first, return second. The manual's sequence is do not panic, grip the wheel tightly and be ready for sudden shocks, stay on the shoulder, ease off the accelerator, brake gently and slow gradually, check behind and ahead, and then turn sharply back onto the pavement.",
        context:
          "The reason for the order is the height difference between shoulder and pavement. Steering back at speed makes the tire climb the pavement edge and slingshot the car across the road, which is how a shoulder drop becomes a head-on. Wyoming shoulders may be hard-surfaced or gravel, so the drop can be significant.",
        trap:
          "Steering back immediately is the reflex and the thing the manual is written against. The turn only happens after the speed has come down.",
        excerptKey: "wheels-off-road",
        sourceLabel: "Wyoming Driver License Manual - Emergency situations, Wheels off the road",
        sourceUrl: hb(83),
        commonlyMissed: true,
      },
      {
        id: "wy_s5_31",
        topic: "speed",
        question:
          "A Wyoming school zone sign shows 20 mph and the surrounding street is posted at 30. Which applies while you are in the zone?",
        choices: [
          "30 mph, because that is the street's limit",
          "Whichever is safer in your judgment",
          "25 mph, as an average of the two",
          "20 mph, and the manual calls it the absolute speed limit in a school zone",
        ],
        correctIndex: 3,
        explanation:
          "Twenty, and the manual's word for it is absolute. W.S. 31-5-301(b)(i) sets the same limit for passing a school building, its grounds, a designated school zone with a reduced limit, or a school crossing where signs give notice.",
        context:
          "Absolute is a meaningful word here. Elsewhere the statutory figures are maximums that the basic speed rule can pull downward; in a school zone the manual leaves no room to argue that a higher speed was reasonable. The pentagon sign is the shape that announces it.",
        trap:
          "Judgment does not enter into it. Wyoming's school-zone figure is the one number in the manual described as absolute rather than as a maximum for ideal conditions.",
        excerptKey: "speed-school-zone-statute",
        sourceLabel: "Wyoming Statutes 31-5-301(b)(i) - Maximum speed limits",
        sourceUrl: ws(181),
      },
      {
        id: "wy_s5_32",
        topic: "sharing",
        question:
          "Wyoming's three-foot rule for passing a bicycle is measured from what?",
        choices: [
          "The centre of your vehicle",
          "The nearest wheel of your vehicle",
          "The right side of your motor vehicle, including all mirrors and other projections",
          "The edge of the traffic lane",
        ],
        correctIndex: 2,
        explanation:
          "From the right side of the vehicle including all mirrors and other projections. W.S. 31-5-203(c) is specific about that, which matters for a pickup with towing mirrors or a load that overhangs.",
        context:
          "The manual's version asks for at least three feet of separation when space allows, and puts other duties around it: do not attempt the pass without a clear and empty lane, slow to the cyclist's speed and follow if you lack room, and reduce speed while passing.",
        trap:
          "Measuring from the wheels or the lane line understates the clearance. On a wide pickup the mirrors can be a foot outboard of the tires.",
        excerptKey: "passing-bicycle-statute",
        sourceLabel: "Wyoming Statutes 31-5-203(c) - Rules governing overtaking on the left",
        sourceUrl: ws(155),
      },
      {
        id: "wy_s5_33",
        topic: "rightOfWay",
        question:
          "As you enter a Wyoming roundabout, which way does the manual tell you to look for a gap?",
        choices: [
          "To the right",
          "To the left",
          "Straight ahead only",
          "Both ways equally",
        ],
        correctIndex: 1,
        explanation:
          "Left. Traffic in a Wyoming roundabout moves counterclockwise, so the vehicles you must yield to are arriving from your left.",
        context:
          "The manual's full sequence is slow and yield to pedestrians and circulating traffic, look left and wait for a gap, merge, keep moving without stopping inside the circle, then signal and yield to pedestrians as you exit. Pedestrians cross only at the crosswalks.",
        trap:
          "The right-hand rule from ordinary intersections pulls drivers to look right, which is exactly the direction nothing is coming from at a roundabout entry.",
        excerptKey: "roundabout-look-left",
        sourceLabel: "Wyoming Driver License Manual - Roundabouts",
        sourceUrl: hb(48),
      },
      {
        id: "wy_s5_34",
        topic: "signs",
        question:
          "A five-sided sign and a triangular sign that looks like a flag both appear on Wyoming roads. Which is which?",
        choices: [
          "Pentagon means school; pennant means the start of a no-passing zone",
          "Pentagon means no passing; pennant means school",
          "Both mean school, in different contexts",
          "Both mark the start of a no-passing zone",
        ],
        correctIndex: 0,
        explanation:
          "Pentagon is the school shape and pennant marks the beginning of a no-passing zone. The manual defines them one after another, which is where the confusion starts.",
        context:
          "Two features tell them apart in the field as well as on paper. The pennant sits on the left side of the road facing you and pairs with a solid yellow line; the pentagon sits on the right and pairs with a 20 mph absolute limit and children.",
        trap:
          "Both are unusual shapes that appear rarely, so they get remembered as a pair and then swapped. Learning what each one pairs with on the pavement fixes it.",
        excerptKey: "sign-pennant",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Pennant",
        sourceUrl: hb(96),
      },
      {
        id: "wy_s5_35",
        topic: "signals",
        question:
          "Where exactly must you stop for a steady red light in Wyoming, when there is no marked stop line?",
        choices: [
          "Wherever you can see the cross traffic",
          "Level with the signal head",
          "Before entering the crosswalk on the near side of the intersection, or if there is none, before entering the intersection",
          "At least one car length back from the crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "W.S. 31-5-403(a)(iii)(A) gives a three-step fallback: the clearly marked stop line, or if none the crosswalk on the near side, or if none the intersection itself. The manual's shorter version is to stop behind the crosswalks or stop line.",
        context:
          "The same cascade appears for stop signs in W.S. 31-5-222(b) and for flashing red signals in W.S. 31-5-405(a)(i), with one addition at the end: where there is no line, no crosswalk and no clear intersection edge, you stop at the point nearest the intersecting roadway where you can see approaching traffic.",
        trap:
          "Creeping to the signal head to see round a corner puts you inside the crosswalk, which is the one place the statute names as unacceptable when a crosswalk exists.",
        excerptKey: "signal-red-statute",
        sourceLabel: "Wyoming Statutes 31-5-403(a)(iii) - Signal legend generally",
        sourceUrl: ws(186),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions drawn across Wyoming licensing, signs, signals and safe driving. Work through each situation as if you were at the testing station.",
    questions: [
      {
        id: "wy_s6_01",
        topic: "signs",
        question:
          "A rectangular sign tells you that a lane must turn right. How should you treat that instruction?",
        choices: [
          "As advice that applies only during rush hour",
          "As a warning that the pavement may be uneven",
          "As information you can ignore if you signal",
          "As a legal direction that you must follow",
        ],
        correctIndex: 3,
        explanation:
          "Regulatory signs state what road users must or must not do, so the lane direction is mandatory. A signal does not cancel the instruction on the sign.",
        context:
          "Wyoming groups signs by shape and colour as well as by their wording. Regulatory signs give rules, warning signs alert you to conditions ahead, and guide signs help with directions or services.",
        trap:
          "A sign that controls lane movement is not a suggestion for busy periods; it applies whenever it is posted.",
        excerptKey: "sign-regulatory",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Regulatory signs",
        sourceUrl: hb(95),
      },
      {
        id: "wy_s6_02",
        topic: "signals",
        question:
          "A traffic signal flashes red as you approach an intersection. What must you do?",
        choices: [
          "Slow down and continue if the cross street looks clear",
          "Wait for the light to turn green before moving",
          "Yield without stopping to traffic already in the intersection",
          "Stop completely, then proceed when it is safe and permitted",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red requires a complete stop before you enter the intersection. After stopping, proceed only when the way is safe, just as you would at a stop sign.",
        context:
          "A flashing amber calls for caution, while flashing red requires a stop. At a red signal, stop at the marked line; if there is none, stop before the near crosswalk or before entering the intersection.",
        trap:
          "Treating flashing red like flashing amber skips the required stop.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Wyoming Driver License Manual - Traffic signals",
        sourceUrl: hb(97),
      },
      {
        id: "wy_s6_03",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a clearly visible white cane is crossing ahead. What is your duty?",
        choices: [
          "Honk once so the pedestrian knows you are there",
          "Proceed if the pedestrian has not reached your lane",
          "Stop only if a guide dog is also present",
          "Yield and allow the pedestrian to cross safely",
        ],
        correctIndex: 3,
        explanation:
          "You must yield to a blind pedestrian carrying a clearly visible white cane. The same rule applies when the pedestrian is accompanied by a guide dog.",
        context:
          "Approach a pedestrian crossing with care and be ready to stop. A person using a cane or guide dog may not be able to see or hear your vehicle, so do not assume they have noticed you.",
        trap:
          "A guide dog is not required when the pedestrian has the clearly visible white cane.",
        excerptKey: "row-blind-pedestrian",
        sourceLabel: "Wyoming Statutes 31-5-607 - Blind pedestrian right-of-way",
        sourceUrl: ws(196),
      },
      {
        id: "wy_s6_04",
        topic: "speed",
        question:
          "The posted limit is 65 mph, but blowing snow makes it hard to see traffic ahead. What speed is appropriate?",
        choices: [
          "65 mph, because the sign sets the speed for that road",
          "The speed of the fastest traffic around you",
          "Any speed below 65 mph, even if you cannot stop in the distance you can see",
          "A speed that is safe for the visibility and road conditions, below the posted maximum if needed",
        ],
        correctIndex: 3,
        explanation:
          "A posted limit does not make that speed safe in every condition. You must reduce speed enough to account for the actual hazards, including poor visibility and slick pavement.",
        context:
          "Wyoming's basic speed rule applies even when you are below a posted limit. It calls for a safe and appropriate speed near intersections, curves, hillcrests, narrow or winding roads, and whenever weather or traffic creates a special hazard.",
        trap:
          "Being under the number on the sign does not excuse driving too fast for the conditions.",
        excerptKey: "basic-speed-situations",
        sourceLabel: "Wyoming Statutes 31-5-301(a) - Maximum speed limits",
        sourceUrl: ws(181),
        commonlyMissed: true,
      },
      {
        id: "wy_s6_05",
        topic: "licensing",
        question:
          "A 16-year-old with a Wyoming intermediate licence wants to drive at 11:30 p.m. Which statement is correct?",
        choices: [
          "Driving is restricted between 11 p.m. and 5 a.m. unless an exception applies and the required form is presented",
          "The restriction begins at midnight and ends at 4 a.m.",
          "The time restriction applies only during the first six months",
          "An intermediate licence has no nighttime restriction",
        ],
        correctIndex: 0,
        explanation:
          "The ordinary restriction is 11 p.m. to 5 a.m. An exception requires meeting its criteria and presenting a completed exception form.",
        context:
          "Wyoming intermediate licences also limit passengers under 18 who are not immediate family, unless an eligible licensed adult accompanies the driver. These restrictions are part of the graduated licensing stage, not optional advice.",
        trap:
          "The restriction starts before midnight, so a late-evening trip can still fall inside it.",
        excerptKey: "intermediate-curfew",
        sourceLabel: "Wyoming Driver License Manual - Age restricted licenses, Intermediate licenses",
        sourceUrl: hb(14),
        commonlyMissed: true,
      },
      {
        id: "wy_s6_06",
        topic: "impairment",
        question:
          "A friend says they can safely drive because it has been an hour since their last drink. What is the safest response?",
        choices: [
          "One hour always removes one standard drink, regardless of the person",
          "Wait one more hour, then driving is safe",
          "Do not use an hourly estimate to decide to drive; arrange a sober ride",
          "Drink coffee first, since it speeds alcohol removal",
        ],
        correctIndex: 2,
        explanation:
          "An average elimination rate is not a personal test of sobriety or safe driving. The safe choice is not to drive after drinking and to arrange another ride.",
        context:
          "Alcohol can affect judgment, coordination and reaction before a driver recognizes the impairment. Coffee or a cold shower does not remove alcohol from the body; only time does, and the amount of time needed cannot be safely inferred from a simple count.",
        trap:
          "The approximate hourly rate describes an average, not a guarantee that a particular person is safe to drive.",
        excerptKey: "one-drink-per-hour",
        sourceLabel: "Wyoming Driver License Manual - How alcohol and drugs affect you, Effects of time",
        sourceUrl: hb(34),
      },
      {
        id: "wy_s6_07",
        topic: "rules",
        question:
          "Which action is prohibited by Wyoming's handheld messaging law while operating a vehicle on a public road?",
        choices: [
          "Checking a route on a mounted navigation screen",
          "Using a handheld phone to write, send or read a text-based message",
          "Asking a passenger to read a message",
          "Changing the radio station while parked off the roadway",
        ],
        correctIndex: 1,
        explanation:
          "The statute prohibits using a handheld device to write, send or read text-based communication while operating on a public street or highway. Being stopped at a light does not create a general texting exception.",
        context:
          "Keep your attention on driving whenever you are operating a vehicle on a public road. If you need to handle a message, stop somewhere safe and park before using the phone.",
        trap:
          "A temporary stop in traffic is still part of operating on the road; it is not the same as parking safely.",
        excerptKey: "texting-statute",
        sourceLabel: "Wyoming Statutes 31-5-237 - Electronic messaging prohibited",
        sourceUrl: ws(172),
      },
      {
        id: "wy_s6_08",
        topic: "safety",
        question:
          "On a snowy road, what following gap does the Wyoming manual recommend you use as a starting point?",
        choices: [
          "The same gap you use on dry pavement",
          "Two seconds, because snow reduces traffic speed",
          "One car length for every 10 mph",
          "At least four seconds, with more room when conditions call for it",
        ],
        correctIndex: 3,
        explanation:
          "The manual recommends a four-second count in winter conditions. Add more space if the road is slippery or visibility and traction are poor.",
        context:
          "Choose a fixed landmark and count after the vehicle ahead passes it. If you reach the landmark before your count ends, ease back and create more space rather than relying on the other driver to maintain a steady speed.",
        trap:
          "A shorter gap is not safer just because traffic is moving slowly; stopping distance grows on snow and ice.",
        excerptKey: "winter-four-second-count",
        sourceLabel: "Wyoming Driver License Manual - Winter Wheelin', Be prepared to stop",
        sourceUrl: hb(45),
      },
      {
        id: "wy_s6_09",
        topic: "parking",
        question:
          "You park facing uphill beside a curb. Which way should you turn the front wheels?",
        choices: [
          "Straight ahead",
          "Toward the curb",
          "Away from the curb",
          "It makes no difference if the parking brake is set",
        ],
        correctIndex: 2,
        explanation:
          "When facing uphill at a curb, turn the wheels away from the curb and set the parking brake. If the vehicle rolls, the front wheel can then come to rest against the curb.",
        context:
          "The wheel direction changes with the slope and whether a curb is present. When parked in other situations, the manual directs you to turn toward the curb or road edge.",
        trap:
          "Turning toward the curb is the instruction for the other parking situations, not uphill beside a curb.",
        excerptKey: "parking-hills",
        sourceLabel: "Wyoming Driver License Manual - Parking, Parking on hills",
        sourceUrl: hb(59),
      },
      {
        id: "wy_s6_10",
        topic: "sharing",
        question:
          "You are passing a bicyclist and have room to move left. What minimum clearance does the Wyoming manual advise when space allows?",
        choices: ["One foot", "Two feet", "Three feet", "Five feet"],
        correctIndex: 2,
        explanation:
          "Leave at least three feet between your vehicle and the bicyclist when space allows. Make sure the lane is clear before moving over and return only when there is room.",
        context:
          "A bicyclist can be pushed off course by a road defect, wind or a passing vehicle. If there is not enough room to pass safely, wait behind the rider until there is.",
        trap:
          "Measuring from your tires alone can understate the space occupied by mirrors or other vehicle projections.",
        excerptKey: "passing-bicycle-three-feet",
        sourceLabel: "Wyoming Driver License Manual - Passing bicyclists",
        sourceUrl: hb(56),
      },
      {
        id: "wy_s6_11",
        topic: "emergencies",
        question:
          "Your brake pedal suddenly stops slowing the car. What should you try first?",
        choices: [
          "Pump the brake pedal rapidly",
          "Switch off the ignition immediately",
          "Shift into park while moving",
          "Accelerate toward the nearest open shoulder",
        ],
        correctIndex: 0,
        explanation:
          "The manual's first step for brake failure is to pump the brake pedal rapidly. If braking does not return, use the parking brake carefully, shift to a lower gear and look for a safe place to stop off the roadway.",
        context:
          "Keep looking for a place to slow and stop away from traffic. Do not try to continue driving the car to a repair shop after a brake failure.",
        trap:
          "Turning off the ignition or shifting to park can make the situation harder to control and does not restore the brakes.",
        excerptKey: "brake-failure",
        sourceLabel: "Wyoming Driver License Manual - Emergency situations, Brake failure",
        sourceUrl: hb(82),
      },
      {
        id: "wy_s6_12",
        topic: "rightOfWay",
        question:
          "At a four-way stop, you and another vehicle stop at the same time. The other vehicle is on your right. Who should go first?",
        choices: [
          "You, because you are turning right",
          "Whoever begins moving first, even if the other driver has priority",
          "The larger vehicle",
          "The driver on your right",
        ],
        correctIndex: 3,
        explanation:
          "When in doubt at a four-way stop, yield to the driver on your right. Proceed only when the other vehicle has gone and the intersection is clear.",
        context:
          "Drivers should take turns in the order they stop. When arrival order is unclear or simultaneous, Wyoming's manual says common courtesy is to allow the driver on the right to proceed first.",
        trap:
          "Your intended turn does not give you priority over a driver who stopped at the same time on your right.",
        excerptKey: "row-four-way",
        sourceLabel: "Wyoming Driver License Manual - Right of way, Four-way stops",
        sourceUrl: hb(47),
        commonlyMissed: true,
      },
      {
        id: "wy_s6_13",
        topic: "licensing",
        question:
          "A learner permit holder is practising in a passenger car. Where must the supervising driver sit?",
        choices: [
          "In any seat, as long as they can see the road",
          "In the back seat behind the learner",
          "In the front passenger seat",
          "In a second vehicle following behind",
        ],
        correctIndex: 2,
        explanation:
          "The supervising driver must occupy the front passenger seat while the permit holder drives. The supervisor must also be at least 18 and hold a valid licence for that type of vehicle.",
        context:
          "A permit is for supervised practice, so the eligible licensed driver must be close enough to instruct. Check that the supervisor's licence covers the vehicle being driven.",
        trap:
          "A licensed adult elsewhere in the car or in another vehicle does not meet the front-seat supervision requirement.",
        excerptKey: "permit-supervisor",
        sourceLabel: "Wyoming Driver License Manual - License services, Instruction permits",
        sourceUrl: hb(10),
      },
      {
        id: "wy_s6_14",
        topic: "signals",
        question:
          "Your turn signal has stopped working and you need to signal a right turn. Which hand signal is correct?",
        choices: [
          "Left arm extended horizontally",
          "Left arm extended upward from the elbow",
          "Left arm extended downward from the elbow",
          "Right arm extended straight through the window",
        ],
        correctIndex: 1,
        explanation:
          "For a right turn, extend the left hand and arm upward from the elbow. The downward signal means stopping or decreasing speed, and the horizontal signal means a left turn.",
        context:
          "Wyoming's hand signals are made from the left side of the vehicle. Signal early enough to give other road users time to respond, whether you use an indicator or an arm signal.",
        trap:
          "The horizontal arm is the left-turn signal; reversing the two can tell following traffic the wrong thing.",
        excerptKey: "hand-signals-statute",
        sourceLabel: "Wyoming Statutes 31-5-219 - Manner of giving hand and arm signals",
        sourceUrl: ws(163),
      },
      {
        id: "wy_s6_15",
        topic: "speed",
        question:
          "You enter an interstate segment where WYDOT has designated an 80 mph maximum. What is the maximum lawful speed when conditions are good?",
        choices: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctIndex: 3,
        explanation:
          "The statute allows an 80 mph maximum on interstate highways designated by the superintendent. The basic speed rule still applies, so conditions may require you to drive slower.",
        context:
          "Wyoming's interstate limit is not automatically 80 everywhere; the designation matters. Posted limits and the safe speed for current weather, traffic and visibility both matter.",
        trap:
          "The statutory maximum is not permission to drive 80 through poor conditions or where a lower limit is posted.",
        excerptKey: "speed-interstate-80",
        sourceLabel: "Wyoming Statutes 31-5-301(b) - Maximum speed limits",
        sourceUrl: ws(181),
      },
      {
        id: "wy_s6_16",
        topic: "safety",
        question:
          "Your passenger is 11 years old. Who is responsible for requiring that the passenger wear a properly fastened safety belt?",
        choices: [
          "The driver",
          "The passenger alone",
          "The nearest adult, whether or not they are in the vehicle",
          "Only the vehicle owner",
        ],
        correctIndex: 0,
        explanation:
          "Wyoming law places the duty on the driver to require passengers under 12 to wear a properly adjusted and fastened safety belt. The child must be secured while the vehicle is moving on a public street or highway.",
        context:
          "The manual also describes the broader belt requirement for vehicle occupants and lists limited exemptions. A safety belt must be positioned and fastened correctly to work as intended.",
        trap:
          "The statute assigns this responsibility to the driver, not only to the child or vehicle owner.",
        excerptKey: "seat-belt-statute",
        sourceLabel: "Wyoming Statutes 31-5-1402 - Safety belts required to be used",
        sourceUrl: ws(206),
      },
      {
        id: "wy_s6_17",
        topic: "rules",
        question:
          "You are approaching an intersection and need to change lanes to turn. When should you make the lane change?",
        choices: [
          "After entering the intersection, where the road is widest",
          "Before the intersection, after checking and signalling when safe",
          "While crossing the marked crosswalk",
          "Only after the vehicle ahead has turned",
        ],
        correctIndex: 1,
        explanation:
          "Choose the correct lane before entering the intersection. Check mirrors and blind spots, signal, and move only when there is enough space.",
        context:
          "A lane change in an intersection can conflict with turning traffic and pedestrians. Plan lane position early and avoid moving across lanes while you are already in the junction.",
        trap:
          "Waiting until you are inside the intersection leaves less room to check, signal and move predictably.",
        excerptKey: "no-lane-change-in-intersection",
        sourceLabel: "Wyoming Driver License Manual - Changing lanes",
        sourceUrl: hb(53),
      },
      {
        id: "wy_s6_18",
        topic: "parking",
        question:
          "A fire station driveway is on your block. Which parking choice is prohibited by Wyoming law?",
        choices: [
          "Parking 30 feet from the entrance on the same side of the street",
          "Parking 80 feet away on the opposite side, where there is no sign",
          "Parking within 20 feet of the driveway entrance",
          "Parking in a marked space farther down the block",
        ],
        correctIndex: 2,
        explanation:
          "Wyoming prohibits parking within 20 feet of a fire station driveway entrance. The statute also prohibits parking opposite the entrance within 75 feet when that area is properly signposted.",
        context:
          "Fire stations need clear access for emergency vehicles. Look for both the distance from the entrance and any signs controlling the opposite side of the street.",
        trap:
          "The 75-foot distance applies opposite the driveway when properly signposted; the 20-foot restriction applies at the entrance itself.",
        excerptKey: "parking-fire-station",
        sourceLabel: "Wyoming Statutes 31-5-504 - Specific places where prohibited",
        sourceUrl: ws(190),
      },
      {
        id: "wy_s6_19",
        topic: "emergencies",
        question:
          "Your vehicle begins to skid on a slippery Wyoming road. What should you do?",
        choices: [
          "Brake hard and turn away from the direction the rear is sliding",
          "Ease off the accelerator and gently steer into the skid",
          "Accelerate sharply to pull the car straight",
          "Turn the ignition off and hold the wheel still",
        ],
        correctIndex: 1,
        explanation:
          "Ease off the gas and gently steer into the skid until you regain control. Abrupt braking or steering can make the loss of control worse.",
        context:
          "Look where you want the vehicle to go and make small, controlled steering corrections. Once traction returns, continue at a speed suited to the surface.",
        trap:
          "A sudden correction can throw the vehicle into a second skid in the opposite direction.",
        excerptKey: "skid-response",
        sourceLabel: "Wyoming Driver License Manual - Winter Wheelin', If you begin to skid",
        sourceUrl: hb(46),
      },
      {
        id: "wy_s6_20",
        topic: "sharing",
        question:
          "Before moving into another lane to pass a motorcycle, what should you remember about judging its position?",
        choices: [
          "A motorcycle's smaller profile can make its distance and speed difficult to judge",
          "A motorcycle is always moving slower than it appears",
          "A motorcycle must leave the lane if a car approaches from behind",
          "A motorcycle's headlight tells you its exact distance",
        ],
        correctIndex: 0,
        explanation:
          "Motorcycles are harder to identify and their distance and speed can be difficult to judge. Check carefully before moving or turning across a rider's path.",
        context:
          "Give a motorcycle a full lane and enough following distance. A rider may need to change position to avoid debris, wind or a road defect.",
        trap:
          "A headlight helps make the motorcycle visible, but it does not make its distance or closing speed easy to estimate.",
        excerptKey: "motorcycle-hard-to-see",
        sourceLabel: "Wyoming Driver License Manual - Sharing the road safely, Motorcycles",
        sourceUrl: hb(69),
      },
      {
        id: "wy_s6_21",
        topic: "signs",
        question:
          "A yellow diamond sign warns of a sharp curve ahead. What is its purpose?",
        choices: [
          "To set a mandatory minimum speed through the curve",
          "To show the next town's distance",
          "To alert you to a road condition that needs your attention",
          "To mark a no-passing zone in every case",
        ],
        correctIndex: 2,
        explanation:
          "A warning sign alerts you to a condition ahead that needs attention. Reduce speed as needed before reaching the curve and stay in your lane.",
        context:
          "Warning signs are commonly diamond shaped and can mark curves, construction, schools and other hazards. The sign warns about what is ahead; it does not replace the need to judge a safe speed.",
        trap:
          "A warning sign does not automatically set a mandatory speed unless a separate regulatory sign does so.",
        excerptKey: "sign-warning",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Warning signs",
        sourceUrl: hb(95),
      },
      {
        id: "wy_s6_22",
        topic: "signals",
        question:
          "You are approaching a railroad crossing and the red lights begin flashing. What should you do?",
        choices: [
          "Stop and remain stopped until it is safe and the warning has ended",
          "Drive around the gate if no train is visible",
          "Stop only if another vehicle is already waiting",
          "Cross quickly before the gate begins to lower",
        ],
        correctIndex: 0,
        explanation:
          "Stop for the flashing railroad signals and remain stopped while the warning is active. Never drive around a lowered gate or try to beat a train.",
        context:
          "A train can be closer and moving faster than it appears. After the signal ends, cross only when you can clear the tracks safely and no other train is approaching on another track.",
        trap:
          "Not seeing a train does not make it safe to cross while the warning signals are active.",
        excerptKey: "railroad-flashing-lights",
        sourceLabel: "Wyoming Driver License Manual - Railroad crossings",
        sourceUrl: hb(66),
      },
      {
        id: "wy_s6_23",
        topic: "rightOfWay",
        question:
          "You are turning from a driveway onto a busy street. What should you do before entering?",
        choices: [
          "Enter first, then accelerate to match traffic",
          "Yield to vehicles close enough to be dangerous, find a safe gap and merge",
          "Expect traffic on the street to stop for you",
          "Use the shoulder until another driver lets you in",
        ],
        correctIndex: 1,
        explanation:
          "The manual directs a driver turning onto a street to yield to vehicles close enough to be dangerous, then merge when a safe gap is available. Traffic already on the road has priority.",
        context:
          "Stop before entering where required and check for vehicles, cyclists and pedestrians. When you have a gap, merge smoothly and adjust to the speed of traffic without forcing another driver to brake.",
        trap:
          "Drivers on the through street are not required to stop to make room for a vehicle leaving a driveway.",
        excerptKey: "row-turning-onto-highway",
        sourceLabel: "Wyoming Driver License Manual - Right of way, Turning onto a highway",
        sourceUrl: hb(43),
      },
      {
        id: "wy_s6_24",
        topic: "speed",
        question:
          "You are driving on an unpaved Wyoming road with no posted speed sign. What statutory maximum applies?",
        choices: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "The statutory maximum for an unpaved road is 55 mph. You must still drive slower if the surface, visibility or other conditions make that speed unsafe.",
        context:
          "Wyoming's default speed categories distinguish unpaved roads from paved roads and state highways. A posted limit may set a lower speed, and the basic speed rule always applies.",
        trap:
          "The 65 mph default applies to other paved roads, not an unpaved road.",
        excerptKey: "speed-other-roads",
        sourceLabel: "Wyoming Statutes 31-5-301(b) - Maximum speed limits",
        sourceUrl: ws(181),
      },
      {
        id: "wy_s6_25",
        topic: "licensing",
        question:
          "Your Wyoming driver licence expired 23 months ago. Does the two-year expired-licence rule alone require you to take a written test?",
        choices: [
          "Yes, after any period of expiration",
          "No; the written-test rule applies when it has been expired for two years or more, or when you have never been licensed",
          "Yes, but only if you have changed address",
          "No, because an expired licence never requires a written test",
        ],
        correctIndex: 1,
        explanation:
          "The written-test rule applies at two years or more of expiration, so 23 months is below that threshold. It also applies when a person has never held a licence in Wyoming or another state.",
        context:
          "Other testing requirements may apply in particular circumstances, so check with WYDOT before renewal. Do not treat the two-year threshold as permission to drive on an expired licence.",
        trap:
          "Two years or more is the stated threshold; 23 months has not reached it.",
        excerptKey: "test-when-required",
        sourceLabel: "WYDOT Driver License Testing - Written Tests",
        sourceUrl: TESTING,
      },
      {
        id: "wy_s6_26",
        topic: "safety",
        question:
          "You have just driven through deep water. What should you do before relying on the brakes normally?",
        choices: [
          "Test them gently and repeat gentle applications until they work properly",
          "Apply the parking brake hard while moving",
          "Accelerate to dry the tires",
          "Pump the accelerator several times",
        ],
        correctIndex: 0,
        explanation:
          "Test the brakes after driving through deep water. Apply them gently several times until they are dry and working properly.",
        context:
          "Water can reduce braking effectiveness. Leave extra space and be prepared for a longer stopping distance until the brakes respond normally.",
        trap:
          "A hard brake application may cause a sudden loss of control; the manual calls for gentle testing.",
        excerptKey: "wet-brakes",
        sourceLabel: "Wyoming Driver License Manual - Emergency situations, Wet brakes",
        sourceUrl: hb(84),
      },
      {
        id: "wy_s6_27",
        topic: "rules",
        question:
          "An intersection is blocked by traffic on the far side. The light is green. What should you do?",
        choices: [
          "Enter and wait in the crosswalk",
          "Enter if a vehicle behind you honks",
          "Wait before the intersection until there is room to clear it",
          "Move into the opposing lane to pass through",
        ],
        correctIndex: 2,
        explanation:
          "Wait until you can move through without blocking the intersection. A green light does not make it safe to enter when there is no room to clear the junction.",
        context:
          "Keep intersections and crosswalks open for crossing traffic and pedestrians. If traffic is backed up beyond the intersection, stay behind the stop line until space opens.",
        trap:
          "Following the signal alone is not enough; you must also be able to proceed without stopping in the intersection.",
        excerptKey: "row-never-insist",
        sourceLabel: "Wyoming Driver License Manual - Right of way, Never insist on right of way",
        sourceUrl: hb(47),
      },
      {
        id: "wy_s6_28",
        topic: "parking",
        question:
          "Your car is disabled near a curve. Where should you stop if you can safely move it?",
        choices: [
          "On the curve, with the wheels turned toward the road",
          "As far off the pavement as possible in a place visible to approaching traffic, away from the curve",
          "In the travel lane with hazard lights on",
          "Just beyond the hillcrest so other drivers see the car",
        ],
        correctIndex: 1,
        explanation:
          "Move all four wheels off the pavement if possible and avoid stopping on a hill or curve where approaching drivers may not see you. Turn on the emergency flashers.",
        context:
          "If you must stop on a highway, make the vehicle visible while keeping it out of traffic. On an interstate, use the shoulder and do not walk for help along the roadway.",
        trap:
          "A curve or hillcrest hides a stopped vehicle and leaves drivers less time to react.",
        excerptKey: "parking-emergency",
        sourceLabel: "Wyoming Driver License Manual - Parking, Emergency parking",
        sourceUrl: hb(59),
      },
      {
        id: "wy_s6_29",
        topic: "emergencies",
        question:
          "A front tire blows out at highway speed. What is the safest immediate response?",
        choices: [
          "Grip the wheel, keep the vehicle going straight and ease off the accelerator",
          "Brake hard and steer toward the shoulder at once",
          "Turn sharply toward the centre of the road",
          "Shift into reverse to slow the vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Hold the steering wheel firmly and keep the car going straight. Ease off the accelerator, then move to a safe place when you have control.",
        context:
          "A sudden brake application can cause a loss of control after a blowout. Let the vehicle slow before steering smoothly off the road.",
        trap:
          "Braking hard immediately can destabilize the car when one tire has lost pressure.",
        excerptKey: "blowout",
        sourceLabel: "Wyoming Driver License Manual - Emergency situations, Blowout",
        sourceUrl: hb(82),
      },
      {
        id: "wy_s6_30",
        topic: "signs",
        question:
          "At a railroad crossing, what does the crossbuck sign tell you to do?",
        choices: [
          "Stop at every crossing even when no train is approaching",
          "Yield the right of way to trains and cross only when it is safe",
          "Speed up so you spend less time on the tracks",
          "Ignore the crossing unless lights or gates are installed",
        ],
        correctIndex: 1,
        explanation:
          "A crossbuck is a yield sign for trains. Slow, look and listen, and cross only when no train is approaching and you can clear the tracks safely.",
        context:
          "Some crossings have gates and flashing signals, while others rely on signs. Never stop on the tracks or enter unless there is room on the other side.",
        trap:
          "The absence of lights or gates does not remove your duty to yield to a train.",
        excerptKey: "crossbuck-is-yield",
        sourceLabel: "Wyoming Driver License Manual - Railroad crossings",
        sourceUrl: hb(66),
      },
    ],
  },
];
